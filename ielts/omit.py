# -*- coding: utf-8 -*-
"""Gate: zero omissions between the IELTS unit data and the .docx.

Every other gate reads the Python. This one reads the file the student
actually gets, so that a rendering bug cannot quietly drop a passage, a
script turn, a model answer or an explanation.

Only prose the renderer puts in the document body is checked. Anything drawn
into a figure - the cue card, the answer shape, the outline frame, the loop
panel, the charts and maps - is a PNG by the time it reaches the .docx and
carries no text, so gate6.py checks those instead.

Usage:  python3 omit.py 4 /path/to/IELTS_2026_B2_Volume_4.docx
"""
import importlib
import os
import re
import sys
import unicodedata
import zipfile

import _base                                            # noqa: F401
import book as B                                        # noqa: E402


def norm(s):
    s = unicodedata.normalize('NFKD', s)
    s = (s.replace('’', "'").replace('‘', "'")
          .replace('“', '"').replace('”', '"')
          .replace('—', ' ').replace('–', ' ')
          .replace('·', ' ').replace('→', ' ')
          .replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>'))
    s = re.sub(r'[^0-9a-zA-Z]+', ' ', s)
    return ' ' + s.lower().strip() + ' '


def doc_text(path):
    with zipfile.ZipFile(path) as z:
        xml = z.read('word/document.xml').decode('utf-8')
    xml = re.sub(r'</w:p>', ' \n ', xml)
    xml = re.sub(r'<[^>]+>', '', xml)
    return norm(xml)


def wanted(U):
    """(label, string) for every piece of prose the body must carry."""
    out = []
    n = U['n']
    out.append(('u%d opener' % n, U['opener']))
    for ci, c in enumerate(U['cycles'], 1):
        for ri, r in enumerate(c['read'], 1):
            out.append(('u%d c%d r%d heading' % (n, ci, ri), r['heading']))
            for i, p in enumerate(r['paras'], 1):
                out.append(('u%d c%d r%d para %d' % (n, ci, ri, i), p))
            for i, it in enumerate(r['items'], 1):
                out.append(('u%d c%d r%d q%d' % (n, ci, ri, i), it[0]))
                out.append(('u%d c%d r%d q%d why' % (n, ci, ri, i), it[3]))
        for li, l in enumerate(c['listen'], 1):
            for i, (_, t) in enumerate(l['script'], 1):
                out.append(('u%d c%d l%d turn %d' % (n, ci, li, i), t))
            for i, it in enumerate(l['items'], 1):
                out.append(('u%d c%d l%d q%d' % (n, ci, li, i), it[0]))
                out.append(('u%d c%d l%d q%d why' % (n, ci, li, i), it[3]))
        sp = c['speak']
        out.append(('u%d c%d speak intro' % (n, ci), sp['intro']))
        for i, q in enumerate(sp['qs'], 1):
            out.append(('u%d c%d speak q%d' % (n, ci, i), q))
        for wi, w in enumerate(c['write'], 1):
            out.append(('u%d c%d w%d prompt' % (n, ci, wi), w['prompt']))
            for i, ln in enumerate(w.get('model') or [], 1):
                out.append(('u%d c%d w%d model %d' % (n, ci, wi, i), ln))
            for i, nt in enumerate(w['notes'], 1):
                out.append(('u%d c%d w%d note %d' % (n, ci, wi, i), nt))
        g = c['gram']
        out.append(('u%d c%d gram explain' % (n, ci), g['explain']))
        # g['examples'] is drawn into the pattern box, which is a figure by
        # the time it reaches the .docx; gate6 checks those.
        for i, (a, b) in enumerate(g['items'], 1):
            out.append(('u%d c%d gram item %d' % (n, ci, i), a))
            out.append(('u%d c%d gram answer %d' % (n, ci, i), b))
        for i, (w_, d_) in enumerate(c['vocab'], 1):
            out.append(('u%d c%d vocab %d' % (n, ci, i), d_))
        for i, (e, d_) in enumerate(c['expr'], 1):
            out.append(('u%d c%d expr %d' % (n, ci, i), d_))
    t = U['technique']
    out.append(('u%d technique body' % n, t['body']))
    for i, q in enumerate(t['qs'], 1):
        out.append(('u%d technique q%d' % (n, i), q))
    o = U['outlining']
    out.append(('u%d outlining body' % n, o['body']))
    for i, q in enumerate(o['qs'], 1):
        out.append(('u%d outlining q%d' % (n, i), q))
    for i, a in enumerate(o.get('answers') or [], 1):
        out.append(('u%d outlining answer %d' % (n, i), a))
    out.append(('u%d tip' % n, U['tip']))
    return out


def paper_wanted(P):
    out = []
    out.append(('paper intro', P['intro']))
    for i, ln in enumerate(P['instruct'], 1):
        out.append(('paper rule %d' % i, ln))
    for ps in P['passages']:
        out.append(('paper p%d heading' % ps['no'], ps['heading']))
        out.append(('paper p%d blurb' % ps['no'], ps['blurb']))
        for i, p in enumerate(ps['paras'], 1):
            out.append(('paper p%d para %d' % (ps['no'], i), p))
        for i, it in enumerate(ps['items'], 1):
            out.append(('paper p%d q%d' % (ps['no'], i), it[0]))
            out.append(('paper p%d q%d why' % (ps['no'], i), it[3]))
    return out


def main(vol, path):
    vol = int(vol)
    cfg = B.VOLS[vol]
    units = []
    for n in cfg['units']:
        try:
            units.append(importlib.import_module('content.u%02d' % n).UNIT)
        except ModuleNotFoundError:
            continue
    body = doc_text(path)
    want = []
    for U in units:
        want += wanted(U)
    try:
        want += paper_wanted(importlib.import_module('content.paper%d'
                                                     % vol).PAPER)
    except ModuleNotFoundError:
        pass

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
            print('  MISSING  %-28s %s' % (label, s[:90]))
        print('\nGATE (zero omissions): FAIL - %d missing' % len(missing))
        return 1
    print('GATE (zero omissions): PASS - every passage, script turn, model, '
          'question and explanation is in the file')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1], sys.argv[2]))
