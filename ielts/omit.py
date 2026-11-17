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

# the two books whose key is not their name
BOOK = {7: 'Foundation 1', 8: 'Foundation 2'}

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
                for k, line in sorted((it[4] if len(it) > 4 and it[4]
                                       else {}).items()):
                    out.append(('u%d c%d r%d q%d wrong %s'
                                % (n, ci, ri, i, 'ABCDEFGH'[k]), line))
            out.append(('u%d c%d r%d rubric' % (n, ci, ri), B.rubric(r)))
        for li, l in enumerate(c['listen'], 1):
            for i, (_, t) in enumerate(l['script'], 1):
                out.append(('u%d c%d l%d turn %d' % (n, ci, li, i), t))
            for i, it in enumerate(l['items'], 1):
                out.append(('u%d c%d l%d q%d' % (n, ci, li, i), it[0]))
                out.append(('u%d c%d l%d q%d why' % (n, ci, li, i), it[3]))
                for k, line in sorted((it[4] if len(it) > 4 and it[4]
                                       else {}).items()):
                    out.append(('u%d c%d l%d q%d wrong %s'
                                % (n, ci, li, i, 'ABCDEFGH'[k]), line))
            out.append(('u%d c%d l%d rubric' % (n, ci, li), B.rubric(l)))
        sp = c['speak']
        out.append(('u%d c%d speak intro' % (n, ci), sp['intro']))
        for i, ln in enumerate(sp.get('longturn') or [], 1):
            out.append(('u%d c%d speak longturn %d' % (n, ci, i), ln))
        for i, ln in enumerate(sp.get('sounds') or [], 1):
            out.append(('u%d c%d speak sounds %d' % (n, ci, i), ln))
        for i, qa in enumerate(sp.get('followup') or [], 1):
            out.append(('u%d c%d speak follow q%d' % (n, ci, i), qa[0]))
            out.append(('u%d c%d speak follow a%d' % (n, ci, i), qa[1]))
        for i, q in enumerate(sp['qs'], 1):
            out.append(('u%d c%d speak q%d' % (n, ci, i), q))
        for wi, w in enumerate(c['write'], 1):
            out.append(('u%d c%d w%d prompt' % (n, ci, wi), w['prompt']))
            for i, ln in enumerate(w.get('model') or [], 1):
                out.append(('u%d c%d w%d model %d' % (n, ci, wi, i), ln))
            for i, ln in enumerate(w.get('model65') or [], 1):
                out.append(('u%d c%d w%d model65 %d' % (n, ci, wi, i), ln))
            for i, ln in enumerate(w.get('gap65') or [], 1):
                out.append(('u%d c%d w%d gap65 %d' % (n, ci, wi, i), ln))
            for i, nt in enumerate(w['notes'], 1):
                out.append(('u%d c%d w%d note %d' % (n, ci, wi, i), nt))
        g = c['gram']
        out.append(('u%d c%d gram explain' % (n, ci), g['explain']))
        fx = g.get('fix')
        if fx:
            out.append(('u%d c%d fix text' % (n, ci), fx['text']))
            for i, (wr, ri, wy) in enumerate(fx['faults'], 1):
                out.append(('u%d c%d fix %d wrong' % (n, ci, i), wr))
                out.append(('u%d c%d fix %d right' % (n, ci, i), ri))
                out.append(('u%d c%d fix %d why' % (n, ci, i), wy))
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


def wpaper_wanted(Wp):
    """Every string the timed Writing paper puts on a page."""
    out = [('wpaper intro', Wp['intro']), ('wpaper keyintro', Wp['keyintro'])]
    for i, ln in enumerate(Wp['instruct'], 1):
        out.append(('wpaper rule %d' % i, ln))
    for t in Wp['tasks']:
        out.append(('wpaper t%d heading' % t['no'], t['heading']))
        out.append(('wpaper t%d prompt' % t['no'], t['prompt']))
        for i, para in enumerate(t['model'], 1):
            out.append(('wpaper t%d model %d' % (t['no'], i), para))
        for i, n in enumerate(t['notes'], 1):
            out.append(('wpaper t%d note %d' % (t['no'], i), n))
        for i, c in enumerate(t['checks'], 1):
            out.append(('wpaper t%d check %d' % (t['no'], i), c))
    return out


def spaper_wanted(Sp):
    """Every string the timed Speaking paper puts on a page."""
    out = [('spaper intro', Sp['intro']), ('spaper keyintro', Sp['keyintro'])]
    for i, ln in enumerate(Sp['instruct'], 1):
        out.append(('spaper rule %d' % i, ln))
    for pt in Sp['parts']:
        out.append(('spaper %s blurb' % pt['part'], pt['blurb']))
        for i, q in enumerate(pt['qs'], 1):
            out.append(('spaper %s q%d' % (pt['part'], i), q))
        # The cue card and the answer shape are drawn by frames.py, so they
        # are PNGs by the time they reach the .docx and carry no text at all.
        # gate6.py checks those; listing them here reported twenty phantom
        # omissions on a correctly rendered book.
        for i, n in enumerate(pt['notes'], 1):
            out.append(('spaper %s note %d' % (pt['part'], i), n))
        for i, c in enumerate(pt['checks'], 1):
            out.append(('spaper %s check %d' % (pt['part'], i), c))
    return out


def lpaper_wanted(L):
    out = []
    out.append(('lpaper intro', L['intro']))
    for i, ln in enumerate(L['instruct'], 1):
        out.append(('lpaper rule %d' % i, ln))
    for pt in L['parts']:
        out.append(('lpaper %s blurb' % pt['part'], pt['blurb']))
        for i, it in enumerate(pt['items'], 1):
            out.append(('lpaper %s q%d' % (pt['part'], i), it[0]))
            out.append(('lpaper %s q%d why' % (pt['part'], i), it[3]))
    # the four scripts are printed in the audio-script section at the back
    for pt in L['parts']:
        for i, (_, t) in enumerate(pt['script'], 1):
            out.append(('lpaper %s turn %d' % (pt['part'], i), t))
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
    for suf in ('', 'a', 'b'):
        try:
            want += paper_wanted(importlib.import_module(
                'content.paper%d%s' % (vol, suf)).PAPER)
        except ModuleNotFoundError:
            pass
        try:
            want += lpaper_wanted(importlib.import_module(
                'content.lpaper%d%s' % (vol, suf)).LPAPER)
        except ModuleNotFoundError:
            pass
    try:
        want += wpaper_wanted(importlib.import_module('content.wpaper%d'
                                                      % vol).WPAPER)
    except ModuleNotFoundError:
        pass
    try:
        want += spaper_wanted(importlib.import_module('content.spaper%d'
                                                      % vol).SPAPER)
    except ModuleNotFoundError:
        pass

    missing = []
    for label, s in want:
        if not isinstance(s, str) or not s.strip():
            continue
        if norm(s).strip() not in body:
            missing.append((label, s))
    print('%s: %s'
          % (BOOK.get(vol, 'Volume %s' % vol), os.path.basename(path)))
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
