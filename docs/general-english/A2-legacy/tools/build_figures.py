#!/usr/bin/env python3
"""Render every unit's figures from content/<book>/uNN_figures.py."""
import importlib.util, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE]
import figures as F  # noqa: E402


def build(book='a21', only=None):
    d = os.path.join(ROOT, 'content', book)
    if not os.path.isdir(d):
        print('no content dir', d); return 1
    total = 0
    for fn in sorted(os.listdir(d)):
        if not fn.endswith('_figures.py'):
            continue
        unit = int(fn[1:3])
        if only and unit != only:
            continue
        spec = importlib.util.spec_from_file_location(f'u{unit}_figures', os.path.join(d, fn))
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)
        for slot, make in sorted(mod.FIGURES.items()):
            base, nbytes, h = F.emit(make(), book, unit, slot)
            print(f'  {book} u{unit:02d}.{slot}  {F.W}x{h}  {nbytes/1024:5.1f} KB')
            total += 1
    print(f'{total} figures rendered')
    return 0


if __name__ == '__main__':
    sys.exit(build(sys.argv[1] if len(sys.argv) > 1 else 'a21'))
