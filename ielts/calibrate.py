# -*- coding: utf-8 -*-
"""Measure real IELTS material and say what it implies for this series.

density.py reports this volume's prose against a window borrowed from the
TOEFL series, because no measurement of real Cambridge passages was
available. This is the tool that closes that gap: point it at genuine IELTS
Academic Reading passages in any format and it prints the window they
actually describe, beside what Volume 4 currently does, and what follows.

    python3 calibrate.py /path/to/test1.pdf /path/to/test2.docx
    python3 calibrate.py --raw passages.txt       # already stripped to prose

Accepts .txt, .md, .docx and .pdf. A real test paper mixes passage prose with
rubrics, questions and answer keys, and measuring those together would be
worse than not measuring at all, so everything that does not look like
passage prose is dropped and the tool reports how much it threw away. Check
that number: if it has dropped half the file, the extraction is wrong and the
answer is wrong with it.
"""
import importlib.util
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
_PP = os.path.join(os.path.dirname(HERE), 'toefl', 'profile.py')
_spec = importlib.util.spec_from_file_location('toefl_profile', _PP)
P = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(P)

# what Volume 4 does now, from density.py
V4 = dict(units=dict(k1=65.1, beyond=19.3, sent=21.2, nominal=4.5),
          paper=dict(k1=64.2, beyond=19.4, sent=24.4, nominal=4.8))


def read_text(path):
    ext = os.path.splitext(path)[1].lower()
    if ext in ('.txt', '.md'):
        return open(path, encoding='utf-8', errors='replace').read()
    if ext == '.docx':
        import zipfile
        with zipfile.ZipFile(path) as z:
            xml = z.read('word/document.xml').decode('utf-8', 'replace')
        xml = re.sub(r'</w:p>', '\n', xml)
        return re.sub(r'<[^>]+>', '', xml)
    if ext == '.pdf':
        out = subprocess.run(['pdftotext', '-layout', path, '-'],
                             capture_output=True)
        if out.returncode:
            raise SystemExit('pdftotext failed on %s' % path)
        return out.stdout.decode('utf-8', 'replace')
    raise SystemExit('unsupported file type: %s' % ext)


# lines that are not passage prose in a real paper
_DROP = [
    r'^\s*\d+\s*[.\)]',                      # numbered questions
    r'^\s*[A-H]\s*[.\)]\s',                  # lettered options
    r'^\s*(Questions?|Part|Section|Reading Passage|Test|Answer key)\b',
    r'^\s*(You should spend|Write|Choose|Complete|Do the following|Match|'
    r'Label|Classify|Which paragraph|NB |Write your answers)',
    r'^\s*(TRUE|FALSE|NOT GIVEN|YES|NO)\b',
    r'^\s*(List of Headings|Questions)\b',
    r'www\.|http|\bIELTS\b.*\bpractice\b',
    r'^\s*©|^\s*Cambridge University Press',
    r'^\s*\d+\s*$',                          # page numbers
]
_DROP = [re.compile(p, re.I) for p in _DROP]


def prose_lines(text):
    kept, dropped = [], 0
    for raw in text.splitlines():
        ln = raw.strip()
        if not ln:
            continue
        if any(rx.search(ln) for rx in _DROP):
            dropped += len(ln.split())
            continue
        # passage prose is in sentences; a line with no lower-case run of
        # four words is a heading, a label or a table row
        if not re.search(r'[a-z]+ [a-z]+ [a-z]+ [a-z]+', ln):
            dropped += len(ln.split())
            continue
        kept.append(ln)
    return ' '.join(kept), dropped


def window(vals, pad):
    """A window around the measured value, rounded outward."""
    lo, hi = vals - pad, vals + pad
    return lo, hi


def main(argv):
    raw = False
    if argv and argv[0] == '--raw':
        raw, argv = True, argv[1:]
    if not argv:
        print(__doc__)
        return 2
    texts, dropped, total = [], 0, 0
    for path in argv:
        t = read_text(path)
        total += len(t.split())
        if raw:
            texts.append(t)
        else:
            kept, d = prose_lines(t)
            texts.append(kept)
            dropped += d
    blob = ' '.join(texts)
    words = len(blob.split())
    print('CALIBRATE - real IELTS material against this series\n')
    print('files      : %d' % len(argv))
    for p in argv:
        print('             %s' % os.path.basename(p))
    print('words read : %d' % total)
    print('words kept : %d  (%.0f%% of the file was rubric, questions or '
          'headings)' % (words, 100.0 * dropped / total if total else 0))
    if words < 1500:
        print('\nWARNING: under 1,500 words of prose survived. That is too '
              'little to set a\nwindow from. Check the extraction, or pass '
              'more material.')
    R = P.ranks()
    r = P.profile('real', [blob], R)
    got = dict(k1=r['bands']['1k'], beyond=r['over4k'],
               sent=r['mean_sent'], nominal=r['nominal'])
    print('\n%-26s %8s %9s %11s %10s' %
          ('', '1k', 'beyond4k', 'mean sent', 'nominal'))
    print('-' * 68)
    print('%-26s %7.1f%% %8.1f%% %11.1f %9.1f%%' %
          ('REAL IELTS material', got['k1'], got['beyond'], got['sent'],
           got['nominal']))
    for name, v in (('Volume 4 unit passages', V4['units']),
                    ('Volume 4 timed paper', V4['paper'])):
        print('%-26s %7.1f%% %8.1f%% %11.1f %9.1f%%' %
              (name, v['k1'], v['beyond'], v['sent'], v['nominal']))

    print('\nWhat follows\n' + '-' * 68)
    for key, label, pad, fmt in (
            ('sent', 'mean sentence length', 1.5, '%.1f'),
            ('nominal', 'nominalisation', 0.75, '%.1f%%')):
        lo, hi = window(got[key], pad)
        print('\n%s: real material measures %s' % (label, fmt % got[key]))
        print('  suggested window: %s to %s' % (fmt % lo, fmt % hi))
        for name, v in (('unit passages', V4['units']),
                        ('timed paper', V4['paper'])):
            d = v[key] - got[key]
            verdict = ('inside' if lo <= v[key] <= hi else
                       'BELOW by %s' % (fmt % -d) if d < 0 else
                       'ABOVE by %s' % (fmt % d))
            print('  Volume 4 %-14s %s  (%s)' % (name, fmt % v[key], verdict))
    print('\nIf the unit passages come out BELOW on both measures, that is '
          'the signal to\nraise them before Volume 3 is written in the same '
          'register. If they come out\ninside, the decision recorded in '
          'density.py stands and Volume 4 needs no\nchange.')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
