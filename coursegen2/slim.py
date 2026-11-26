# -*- coding: utf-8 -*-
"""Re-sample a built .docx to print resolution.

Figures are drawn in a 3000-unit space and placed at the 6.27in text measure,
which is 478 dpi - about 60% more pixels than a press needs and three times
what a screen uses. The placed size of every picture is declared in EMU, so
resampling the stored PNG changes the file size and nothing else.

    python3 slim.py <in.docx> <out.docx> [target_dpi]
"""
import io, os, shutil, sys, zipfile
from PIL import Image

CONTENT_IN = 6.270833333333333


def slim(src, dst, dpi=300):
    maxw = int(CONTENT_IN * dpi)
    with zipfile.ZipFile(src) as zin, zipfile.ZipFile(dst, 'w', zipfile.ZIP_DEFLATED) as zout:
        for it in zin.infolist():
            data = zin.read(it.filename)
            if it.filename.startswith('word/media/') and it.filename.endswith('.png'):
                im = Image.open(io.BytesIO(data))
                if im.width > maxw:
                    h = int(round(im.height * maxw / float(im.width)))
                    im = im.convert('RGB').resize((maxw, h), Image.LANCZOS)
                    # Flat line art compresses far better as a palette than as
                    # truecolour; quantising is what makes this a saving.
                    im = im.quantize(colors=128, method=Image.MEDIANCUT)
                    buf = io.BytesIO()
                    im.save(buf, 'PNG', optimize=True)
                    cand = buf.getvalue()
                    if len(cand) < len(data):
                        data = cand
            zout.writestr(it, data)
    return os.path.getsize(dst)


if __name__ == '__main__':
    a, b = sys.argv[1], sys.argv[2]
    dpi = int(sys.argv[3]) if len(sys.argv) > 3 else 300
    before = os.path.getsize(a)
    after = slim(a, b, dpi)
    print('%s  %.1f MB -> %.1f MB at %d dpi' % (os.path.basename(a),
          before / 1e6, after / 1e6, dpi))
