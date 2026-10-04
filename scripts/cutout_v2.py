"""
Potong background putih dari foto ijazah -> PNG transparan (cutout karakter).
v2: tambahan erode mask + color-extension (isi RGB tepi dari piksel subjek
terdekat) supaya TIDAK ada halo putih di atas background navy.
"""
from PIL import Image, ImageFilter
import numpy as np
from collections import deque
from scipy import ndimage

SRC = 'reference/Pas Foto Ijazah dicrop 3x4.jpeg'
DST = 'src/assets/character-cutout.png'

im = Image.open(SRC).convert('RGB')
work_w = 1100
w, h = im.size
work_h = int(work_w * h / w)
small = im.resize((work_w, work_h), Image.LANCZOS)
rgb = np.asarray(small).astype(np.float32)
arr = rgb.astype(np.int16)
H, W = arr.shape[:2]

# --- 1. Deteksi background putih (netral & terang) lalu flood-fill dari tepi ---
THRESH = 232
NEUTRAL = 26
r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
bright = (r >= THRESH) & (g >= THRESH) & (b >= THRESH)
neutral = (np.abs(r - g) <= NEUTRAL) & (np.abs(g - b) <= NEUTRAL) & (np.abs(r - b) <= NEUTRAL)
candidate = bright & neutral

visited = np.zeros((H, W), dtype=bool)
dq = deque()
for x in range(W):
    for y in (0, H - 1):
        if candidate[y, x] and not visited[y, x]:
            visited[y, x] = True; dq.append((y, x))
for y in range(H):
    for x in (0, W - 1):
        if candidate[y, x] and not visited[y, x]:
            visited[y, x] = True; dq.append((y, x))
while dq:
    y, x = dq.popleft()
    for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        ny, nx = y + dy, x + dx
        if 0 <= ny < H and 0 <= nx < W and candidate[ny, nx] and not visited[ny, nx]:
            visited[ny, nx] = True; dq.append((ny, nx))

fg = ~visited  # mask subjek (belum halus)

# --- 2. Haluskan mask + erode 2px untuk buang piksel paling luar (anti-halo) ---
fg_img = Image.fromarray((fg * 255).astype(np.uint8), 'L')
fg_img = fg_img.filter(ImageFilter.MedianFilter(size=5))
fg_bool = np.asarray(fg_img) > 127
fg_bool = ndimage.binary_erosion(fg_bool, iterations=2)
fg_bool = ndimage.binary_closing(fg_bool, iterations=2)
# ambil komponen terbesar saja (buang noise)
lbl, n = ndimage.label(fg_bool)
if n > 1:
    sizes = ndimage.sum(np.ones_like(lbl), lbl, range(1, n + 1))
    fg_bool = lbl == (int(np.argmax(sizes)) + 1)

# --- 3. Color extension: isi RGB tiap piksel dgn warna subjek terdekat ---
# Ini menghapus fringe putih: warna tepi diambil dari dalam subjek, bukan campuran.
idx = ndimage.distance_transform_edt(~fg_bool, return_distances=False, return_indices=True)
rgb_ext = rgb.copy()
rgb_ext[~fg_bool] = rgb[idx[0][~fg_bool], idx[1][~fg_bool]]
# sedikit blur warna di area tepi supaya mulus
rgb_blur = np.asarray(
    Image.fromarray(rgb_ext.astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.6))
).astype(np.float32)
edge_band = ndimage.binary_dilation(fg_bool, iterations=2) & ~ndimage.binary_erosion(fg_bool, iterations=1)
rgb_final = np.where(edge_band[..., None], rgb_blur, rgb_ext)

# --- 4. Alpha dengan anti-alias halus ---
alpha = np.zeros((H, W), dtype=np.float32)
alpha[fg_bool] = 255.0
alpha_img = Image.fromarray(alpha.astype(np.uint8), 'L').filter(ImageFilter.GaussianBlur(0.8))
alpha = np.asarray(alpha_img).astype(np.float32)

out = Image.fromarray(np.clip(rgb_final, 0, 255).astype(np.uint8), 'RGB').convert('RGBA')
out.putalpha(Image.fromarray(alpha.astype(np.uint8), 'L'))

bbox = out.getbbox()
if bbox:
    pad = 10
    x0 = max(0, bbox[0] - pad); y0 = max(0, bbox[1] - pad)
    x1 = min(W, bbox[2] + pad); y1 = min(H, bbox[3] + pad)
    out = out.crop((x0, y0, x1, y1))

out.save(DST)
print('SAVED', DST, out.size)
a = np.asarray(out)[:, :, 3]
print('transparent %:', round((a < 10).mean() * 100, 1), '| opaque %:', round((a > 200).mean() * 100, 1))
