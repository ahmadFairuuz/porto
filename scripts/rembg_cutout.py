"""Hapus background foto pakai rembg (u2net). Jalankan di background."""
from rembg import remove, new_session
from PIL import Image
import sys

SRC = 'reference/Pas Foto Ijazah dicrop 3x4.jpeg'
DST = 'src/assets/character-cutout.png'

print('loading model...', flush=True)
session = new_session('u2net')
print('model ready, processing...', flush=True)
im = Image.open(SRC)
out = remove(im, session=session, alpha_matting=True,
             alpha_matting_foreground_threshold=240,
             alpha_matting_background_threshold=15,
             alpha_matting_erode_size=8)
out.save(DST)
print('SAVED', DST, out.size, flush=True)
