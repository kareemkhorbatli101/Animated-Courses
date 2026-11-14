# -*- coding: utf-8 -*-
"""Gate 8: zero omissions between the unit data and the .docx.

Every gate before this one reads the Python. This one reads the file the
student actually gets, so that a rendering bug cannot quietly drop a passage,
a script turn, a model answer or an explanation.

Only prose the renderer puts in the document body is checked. Anything drawn
into a figure - a poster, a board, a notice card, the sentence tiles - is a
PNG by the time it reaches the .docx and carries no text, so it is checked by
gate6 instead.

Usage:  python3 omit.py F2 /path/to/book.docx
"""
import importlib
import os
import re
import sys
import unicodedata
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import book as B                                        # noqa: E402


def doc_text(path):
    with zipfile.ZipFile(path) as z:
        xml = z.read('word/document.xml').decode('utf-8')
    xml = re.sub(r'</w:p>', ' \n ', xml)
    xml = re.sub(r'<[^>]+>', '', xml)
    return norm(xml)


def norm(s):
    s = unicodedata.normalize('NFKD', s)
    s = (s.replace('’', "'").replace('‘', "'")
          .replace('“', '"').replace('”', '"')
          .replace('—', ' ').replace('–', ' ')
          .replace('·', ' ').replace('→', ' ')
          .replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>'))
    s = re.sub(r'[^0-9a-zA-Z]+', ' ', s)
    return ' ' + s.lower().strip() + ' '


def wanted(U):
    """(label, string) for every piece of prose the body must carry."""
    out = []
    n = U['n']
    for tag in ('r3', 'r4', 'r5'):
        if tag in U:
            out.append(('u%s %s title' % (n, tag), U[tag]['title']))
            for i, p in enumerate(U[tag]['paras'], 1):
                out.append(('u%s %s para %d' % (n, tag, i), p))
    for tag in ('l1', 'l2', 'l3', 'l4', 'l5'):
        if tag not in U:
            continue
        for i, (_, t) in enumerate(U[tag]['script'], 1):
            out.append(('u%s %s turn %d' % (n, tag, i), t))
    for tag in ('w2', 'w3', 'w5'):
        if tag not in U:
            continue
        for i, l in enumerate(U[tag]['model'], 1):
            out.append(('u%s %s model %d' % (n, tag, i), l))
    # the discussion question and the two student posts are drawn into the
    # discussion panel, which is a PNG by the time it reaches the .docx, so
    # gate6 checks those and this gate cannot.
    for ci, s in enumerate(U['sp'], 1):
        for i, r in enumerate(s['repeat'], 1):
            out.append(('u%s sp%d repeat %d' % (n, ci, i), r))
        for i, q in enumerate(s['qs'], 1):
            out.append(('u%s sp%d question %d' % (n, ci, i), q))
        for i, (_, m) in enumerate(s['model'], 1):
            out.append(('u%s sp%d model %d' % (n, ci, i), m))
    # every explanation in the answer key
    for blk in ('r2', 'r3', 'r4', 'r5', 'l1', 'l2', 'l3', 'l4', 'l5'):
        for field in ('guided', 'exam', 'warm', 'items'):
            for i, it in enumerate(U.get(blk, {}).get(field, []), 1):
                out.append(('u%s %s.%s %d why' % (n, blk, field, i), it[3]))
    for i, it in enumerate(U['rev']['mini'], 1):
        out.append(('u%s rev.mini %d why' % (n, i), it[3]))
    # the four non-test strands exist in the Foundation volumes only
    if 'study' in U:
        out.append(('u%s study tip' % n, U['study']['tip']))
    if 'builder' in U:
        out.append(('u%s builder rule' % n, U['builder']['rule']))
    if 'sound' in U:
        out.append(('u%s sound intro' % n, U['sound']['intro']))
    for i, note in enumerate(U['gram']['notes'], 1):
        out.append(('u%s gram note %d' % (n, i), note))
    return out


def test_wanted(T):
    out = []
    for mi, M in enumerate(T['reading'], 1):
        out.append(('test r%d title' % mi, M['passage'][0]))
        for i, p in enumerate(M['passage'][1], 1):
            out.append(('test r%d para %d' % (mi, i), p))
        for f in ('daily', 'academic'):
            for i, it in enumerate(M[f], 1):
                out.append(('test r%d %s %d' % (mi, f, i), it[0]))
                out.append(('test r%d %s %d why' % (mi, f, i), it[3]))
    for mi, M in enumerate(T['listening'], 1):
        for sc, its in M['convos']:
            for i, (_, t) in enumerate(sc, 1):
                out.append(('test l%d convo turn %d' % (mi, i), t))
        for key in ('announce', 'talk'):
            for i, (_, t) in enumerate(M[key][0], 1):
                out.append(('test l%d %s turn %d' % (mi, key, i), t))
    for i, q in enumerate(T['speaking']['interview'][1], 1):
        out.append(('test speaking q%d' % i, q))
    for ln in T['writing']['email']['scenario']:
        out.append(('test email scenario', ln))
    # the test's discussion panel is a figure too.
    return out


def main(vol, path):
    cfg = B.VOLS[vol if vol in B.VOLS else int(vol)]
    pre = cfg.get('pre', 'u')
    units = [importlib.import_module('content.%s%02d' % (pre, n)).UNIT
             for n in cfg['units']]
    T = importlib.import_module('content.test%s' % cfg['test']).TEST
    body = doc_text(path)

    want = []
    for U in units:
        want += wanted(U)
    want += test_wanted(T)

    missing = []
    for label, s in want:
        if not isinstance(s, str) or not s.strip():
            continue
        if norm(s).strip() not in body:
            missing.append((label, s))
    print('Volume %s: %s' % (vol, os.path.basename(path)))
    print('%d strings checked' % len(want))
    if missing:
        for label, s in missing[:40]:
            print('  MISSING  %-26s %s' % (label, s[:90]))
        print('\nGATE 8 (zero omissions): FAIL - %d missing' % len(missing))
        return 1
    print('GATE 8 (zero omissions): PASS - every passage, script turn, model, '
          'speaking cycle and answer-key explanation is in the file')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1], sys.argv[2]))
