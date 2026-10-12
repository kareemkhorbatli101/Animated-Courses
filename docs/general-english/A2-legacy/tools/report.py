#!/usr/bin/env python3
"""Human-readable check report: my numbers beside the source's."""
import json, os, re, sys
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
sys.path[:0] = [HERE, os.path.join(HERE, 'checks')]
import runner as R, checks as C

def main(book='a21'):
    reg = C.load_all()
    res = json.load(open(os.path.join(ROOT, 'reports', f'{book}-last.json')))
    # The mutation suite runs against one fixture book only -- every fixture is a
    # literal string from it, and the mutations test the shared check code, not a
    # volume's prose. So A2.2 has no report of its own and reads A2.1's, exactly
    # as check K14 does. Hardcoding `{book}-mutations.json` crashed this script
    # on a22 (fixed 2026-10-07, the same defect K14 had).
    from mutations import FIXTURE_BOOK
    mpath = os.path.join(ROOT, 'reports', f'{book}-mutations.json')
    if not os.path.exists(mpath):
        mpath = os.path.join(ROOT, 'reports', f'{FIXTURE_BOOK}-mutations.json')
    mut = json.load(open(mpath))
    s = res['summary']
    fams = {}
    for k, v in res['results'].items():
        fams.setdefault(k[0], {}).setdefault(v, 0)
        fams[k[0]][v] += 1
    out = [f'# {book.upper()} check report', '',
           f'**{s["total"]} executions · {s["pass"]} pass · {s["fail"]} FAIL · '
           f'{s["gate"]} adjudication gate · {s["skip"]} skip**', '',
           f'Units validated: {res["units"]}', '',
           '| Family | Checks | pass | FAIL | gate | skip |', '|---|---|---|---|---|---|']
    NAMES = {'A': 'Structure', 'B': 'Scaffolding quota', 'C': 'Exercise integrity',
             'D': 'Answer key', 'E': 'Language and level', 'F': 'Topic and content',
             'G': 'Figures', 'H': 'DOCX typography', 'I': 'Covers', 'J': 'Build',
             'K': 'Regression guards'}
    for f in 'ABCDEFGHIJK':
        n = sum(1 for c in reg if c[0] == f)
        d = fams.get(f, {})
        out.append(f'| {f} · {NAMES[f]} | {n} | {d.get("PASS",0)} | {d.get("FAIL",0)} '
                   f'| {d.get("GATE",0)} | {d.get("SKIP",0)} |')
    out += ['', '## Mutation test', '',
            f'**{mut["caught"]}/{mut["total"]} negative tests caught · '
            f'{len(mut["escaped"])} escaped · {len(mut["broken"])} broken**', '',
            'Every non-gate check is run against a fixture broken in exactly the way '
            'that check exists to catch. A check that cannot fail is a check that is lying.',
            '', f'Deferred until a second unit, the second volume or a whole-book build '
            f'exists: {", ".join(mut["deferred"])}.', '']
    p = os.path.join(ROOT, 'reports', f'{book}-report.md')
    open(p, 'w').write('\n'.join(out) + '\n')
    print(p)

if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv) > 1 else 'a21')
