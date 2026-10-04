"""
Potong background putih dari foto ijazah -> PNG transparan (cutout karakter).
Metode: flood-fill dari tepi pada area 'hampir putih', lalu feather tepi (anti-alias).
Hanya menghapus putih yang terhubung ke tepi gambar, jadi kemeja putih di dalam
badan tetap aman.
"""
from PIL import Image, ImageFilter
import numpy as np
from collections import deque

SRC = 'reference/Pas Foto Ijazah dicrop 3x4.jpeg'
DST = 'src/assets/character-cutout.png'

im = Image.open(SRC).convert('RGB')
# Turunkan resolusi agar flood-fill cepat (foto 3417x4556 -> ~1000px)
work_w = 1100
w, h = im.size
work_h = int(work_w * h / w)
small = im.resize((work_w, work_h), Image.LANCZOS)
arr = np.asarray(small).astype(np.int16)
H, W = arr.shape[:2]

# 'hampir putih' = semua channel >= threshold DAN jarak antar-channel kecil (netral)
THRESH = 235
NEUTRAL = 22
r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
bright = (r >= THRESH) & (g >= THRESH) & (b >= THRESH)
neutral = (np.abs(r - g) <= NEUTRAL) & (np.abs(g - b) <= NEUTRAL) & (np.abs(r - b) <= NEUTRAL)
candidate = bright & neutral

# Flood fill dari semua piksel tepi yang 'candidate'
visited = np.zeros((H, W), dtype=bool)
dq = deque()
for x in range(W):
    for y in (0, H - 1):
        if candidate[y, x] and not visited[y, x]:
            visited[y, x] = True
            dq.append((y, x))
for y in range(H):
    for x in (0, W - 1):
        if candidate[y, x] and not visited[y, x]:
            visited[y, x] = True
            dq.append((y, x))

while dq:
    y, x = dq.popleft()
    for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        ny, nx = y + dy, x + dx
        if 0 <= ny < H and 0 <= nx < W and candidate[ny, nx] and not visited[ny, nx]:
            visited[ny, nx] = True
            dq.append((ny, nx))

# alpha: 0 = background, 255 = subjek
alpha = np.where(visited, 0, 255).astype(np.uint8)

# Bersihkan & feather: median blur kecil lalu gaussian blur pada alpha
alpha_img = Image.fromarray(alpha, 'L')
alpha_img = alpha_img.filter(ImageFilter.MedianFilter(size=5))
alpha_img = alpha_img.filter(ImageFilter.GaussianBlur(radius=1.2))

# Perbaiki tepi: erosi 1px supaya tidak ada halo putih
a = np.asarray(alpha_img).astype(np.float32)
# turunkan sedikit nilai alpha di sekitar tepi untuk buang fringe putih
core = (a > 200).astype(np.uint8)
edge = (a > 20) & (a <= 200)
a = np.where(edge, a * 0.85, a)
alpha_img = Image.fromarray(a.astype(np.uint8), 'L')

out = small.convert('RGBA')
out.putalpha(alpha_img)

# Crop ke bounding box subjek
bbox = alpha_img.getbbox()
if bbox:
    # sedikit padding
    pad = 8
    x0 = max(0, bbox[0] - pad); y0 = max(0, bbox[1] - pad)
    x1 = min(W, bbox[2] + pad); y1 = min(H, bbox[3] + pad)
    out = out.crop((x0, y0, x1, y1))

out.save(DST)
print('SAVED', DST, out.size)
# statistik
arr_a = np.asarray(out)[:, :, 3]
print('transparent px %:', round((arr_a < 10).mean() * 100, 1))
print('opaque px %:', round((arr_a > 200).mean() * 100, 1))
