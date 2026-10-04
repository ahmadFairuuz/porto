"""Hapus background foto pakai rembg (u2net) pada gambar yang sudah diperkecil
agar tidak kehabisan memori. Lalu feather tepi + color-extension."""
from rembg import remove, new_session
from PIL import Image, ImageFilter
import numpy as np
from scipy import ndimage

SRC = 'reference/Pas Foto Ijazah dicrop 3x4.jpeg'
DST = 'src/assets/character-cutout.png'

# 1. Perkecil dulu (foto asli 3417x4556 terlalu besar untuk alpha matting)
im = Image.open(SRC).convert('RGB')
w, h = im.size
work_w = 1200
small = im.resize((work_w, int(work_w * h / w)), Image.LANCZOS)
print('working size', small.size, flush=True)

# 2. rembg (tanpa alpha_matting supaya hemat memori)
print('loading model...', flush=True)
session = new_session('u2net')
print('model ready, removing bg...', flush=True)
cut = remove(small, session=session)
print('removed, post-processing...', flush=True)

arr = np.asarray(cut).astype(np.uint8)
rgb = arr[:, :, :3].astype(np.float32)
alpha = arr[:, :, 3].astype(np.float32)
H, W = alpha.shape

# 3. Bersihkan mask: ambil komponen terbesar, tutup lubang kecil
fg = alpha > 100
fg = ndimage.binary_closing(fg, iterations=3)
lbl, n = ndimage.label(fg)
if n > 1:
    sizes = ndimage.sum(np.ones_like(lbl), lbl, range(1, n + 1))
    fg = lbl == (int(np.argmax(sizes)) + 1)
fg = ndimage.binary_fill_holes(fg)

# 4. Color-extension: isi RGB luar dgn warna subjek terdekat (anti-halo)
idx = ndimage.distance_transform_edt(~fg, return_distances=False, return_indices=True)
rgb_ext = rgb.copy()
rgb_ext[~fg] = rgb[idx[0][~fg], idx[1][~fg]]

# 5. Alpha anti-alias halus
alpha_f = np.zeros((H, W), dtype=np.float32)
alpha_f[fg] = 255.0
alpha_f = np.asarray(
    Image.fromarray(alpha_f.astype(np.uint8), 'L').filter(ImageFilter.GaussianBlur(0.8))
).astype(np.float32)

out = Image.fromarray(np.clip(rgb_ext, 0, 255).astype(np.uint8), 'RGB').convert('RGBA')
out.putalpha(Image.fromarray(alpha_f.astype(np.uint8), 'L'))

# 6. Crop ke bbox subjek
bbox = out.getbbox()
if bbox:
    pad = 12
    x0 = max(0, bbox[0] - pad); y0 = max(0, bbox[1] - pad)
    x1 = min(W, bbox[2] + pad); y1 = min(H, bbox[3] + pad)
    out = out.crop((x0, y0, x1, y1))

out.save(DST)
a = np.asarray(out)[:, :, 3]
print('SAVED', DST, out.size, flush=True)
print('transparent %:', round((a < 10).mean() * 100, 1),
      '| opaque %:', round((a > 200).mean() * 100, 1), flush=True)
