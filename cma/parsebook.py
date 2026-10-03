# -*- coding: utf-8 -*-
"""Parse a frozen chapter into the structures the converter turns into exercises.

The book is regular, which is what makes a converter possible at all. Every
chapter has the same furniture: a learning-objectives table, a key-terms table,
numbered sections, boxes with fixed headings, two section-check items per
section, a numbered practice set, a case-style set, a written task, and an
answers section that gives the right answer and says why each wrong option is
wrong. Those last ones matter most: the book's own distractor explanations are
where the true/false statements come from, so nothing has to be invented.

Usage:  python3 parsebook.py            inventory every chapter
        python3 parsebook.py 7          dump chapter 7's structures
"""
import sys, os, re, json, collections

AR_HDR = '\u0627\u0644\u0639\u0631\u0628\u064a\u0629'

HERE = os.path.dirname(os.path.abspath(__file__))
BOXES = ('EXAM TRAP', 'LANGUAGE FOCUS', 'TERM BRIDGE', 'FALSE-FRIEND ALERT',
         'IFRS CONTRAST', 'WORKED EXAMPLE', 'YOUR TURN', 'SECTION CHECK',
         'WHAT YOU ALREADY KNOW', 'WATCH')
BOXPAT = re.compile(r'^(?:● |■ )?(' + '|'.join(BOXES) + r')\s{2,}(.*)$',
                    re.M)
SECPAT = re.compile(r'^(\d{1,2}\.\d{1,2})\s{2}(.+)$', re.M)
ARABIC = re.compile(r'[؀-ۿ]')


def load(n):
    return open(os.path.join(HERE, 'src', 'b1_ch%02d.txt' % n),
                encoding='utf-8').read()


def sections(src):
    """Numbered sections, each with its own text up to the next heading."""
    out = []
    ms = list(SECPAT.finditer(src))
    # A chapter file holds no contents list, so every match is a real
    # heading. The first draft filtered on the number of lines after a
    # heading and threw all five away, because the paragraphs are long.
    for i, m in enumerate(ms):
        end = ms[i + 1].start() if i + 1 < len(ms) else None
        if end is None:
            tail = re.search(r'^Chapter summary$', src[m.end():], re.M)
            end = m.end() + tail.start() if tail else len(src)
        out.append(dict(no=m.group(1), title=m.group(2).strip(),
                        text=src[m.start():end]))
    return out


def boxes(src):
    """Every box, with its heading, its label and its body."""
    out = []
    ms = list(BOXPAT.finditer(src))
    for i, m in enumerate(ms):
        end = ms[i + 1].start() if i + 1 < len(ms) else len(src)
        body = src[m.end():end].strip()
        out.append(dict(kind=m.group(1), label=m.group(2).strip(), body=body))
    return out


def mcq_items(src, pat):
    """Items of the form 'SC3-1  stem' or 'P07  stem' with four options."""
    out = []
    ms = list(re.finditer(pat, src, re.M))
    for i, m in enumerate(ms):
        end = ms[i + 1].start() if i + 1 < len(ms) else len(src)
        block = src[m.start():end]
        opts = re.findall(r'^[A-D]\.\t?\s*(.+)$', block, re.M)
        stem = block[len(m.group(0)):].split('\n')[0].strip()
        if len(stem) < 5:
            lines = [l for l in block.split('\n')[1:] if l.strip()]
            stem = lines[0].strip() if lines else ''
        if len(opts) == 4:
            out.append(dict(id=m.group(1), stem=stem, options=opts))
    return out


def answers(src):
    """The answers section: the letter, the reason, and why each option fails.

    The 'X is wrong because ...' lines are the most useful thing in the book
    for this job: each one is a false statement with its own correction, which
    is exactly a true/false item and needs nothing invented.
    """
    tail = re.split(r'^Answers and explanations$', src, flags=re.M)
    if len(tail) < 2:
        return {}
    blob = tail[-1]
    out = {}
    pat = re.compile(r'^((?:SC\d{1,2}-\d{1,2}|P\d{1,2}-\d{2}|P\d{2}|'
                     r'C\d{1,2}-\d))\s{2}'
                     r'(?:Answer\s+([A-D])\.?\s*)?(.*)$', re.M)
    ms = list(pat.finditer(blob))
    for i, m in enumerate(ms):
        end = ms[i + 1].start() if i + 1 < len(ms) else len(blob)
        block = blob[m.start():end]
        wrong = re.findall(r'^([A-D]) is wrong\.\s*(.+)$', block, re.M)
        out[m.group(1)] = dict(letter=m.group(2) or '',
                               why=m.group(3).strip(),
                               wrong=[(w[0], w[1].strip()) for w in wrong])
    return out


def jload(n):
    f = os.path.join(HERE, 'src', 'b1_ch%02d.json' % n)
    if not os.path.exists(f):
        return dict(tables=[], figures={})
    d = json.load(open(f, encoding='utf-8'))
    return d if isinstance(d, dict) else dict(tables=d, figures={})


def jtables(n):
    """The chapter's tables as they really are, from extract.py."""
    return jload(n)['tables']


def jfigures(n):
    """Figure number -> the index of the table it introduces."""
    return jload(n)['figures']


def term_pairs(n):
    """(english, arabic) from every term table, read from the real tables.

    Reading these out of flattened text meant counting lines in threes, and
    when the extraction changed the French column started arriving as an
    English term. A real table has a header row that says which column is
    which, so nothing has to be counted.
    """
    out, seen = [], set()
    for tb in jtables(n):
        if not tb or len(tb[0]) < 2:
            continue
        head = [c.strip() for c in tb[0]]
        if not head or not head[0].lower().startswith('english'):
            continue
        ai = next((i for i, c in enumerate(head) if AR_HDR in c), 1)
        for row in tb[1:]:
            if len(row) <= ai:
                continue
            en, ar = row[0].strip(), row[ai].strip()
            if not en or not ar or ARABIC.search(en) or not ARABIC.search(ar):
                continue
            if en.lower() in seen:
                continue
            seen.add(en.lower())
            out.append((en, ar))
    return out


def termrows(body):
    """A term-bridge or key-terms table: (english, arabic) pairs.

    The French column is read and dropped: it is not exercised anywhere.
    """
    lines = [l.strip() for l in body.split('\n') if l.strip()]
    lines = [l for l in lines if l not in
             ('Key words in this section', 'English (exam term)',
              'العربية',
              'Français')]
    rows = []
    for i in range(0, len(lines) - 2, 3):
        en, ar = lines[i], lines[i + 1]
        if ARABIC.search(en) or not ARABIC.search(ar):
            continue
        rows.append((en, ar))
    return rows


def tables(src):
    """Runs of short lines that are a real table rather than prose.

    A table in this .docx arrives as one cell per line. A run of consecutive
    short lines with no sentence punctuation is a table; a paragraph is not.
    """
    out, cur = [], []
    for line in src.split('\n'):
        short = (0 < len(line) <= 72 and not line.endswith('.')
                 and not line.endswith(':') and line.count(',') < 3)
        if short:
            cur.append(line)
        else:
            if len(cur) >= 8:
                out.append(cur)
            cur = []
    if len(cur) >= 8:
        out.append(cur)
    return out


def parse(n):
    src = load(n)
    title = src.split('\n')[1] if src.startswith('Chapter') else ''
    bx = boxes(src)
    ans = answers(src)
    body = re.split(r'^Answers and explanations$', src, flags=re.M)[0]
    terms = term_pairs(n)
    key = []
    return dict(
        n=n, title=title,
        chars=len(src),
        sections=sections(body),
        boxes=bx,
        box_counts=collections.Counter(b['kind'] for b in bx),
        sc=mcq_items(body, r'^(SC\d{1,2}-\d{1,2})\s{2}'),
        p=mcq_items(body, r'^(P\d{1,2}-\d{2}|P\d{2})\s{2}'),
        case=re.findall(r'^(C\d{1,2}-\d)\s{2}(.+)$', body, re.M),
        answers=ans,
        terms=terms, keyterms=key,
        tables=jtables(n),
        figures=jfigures(n),
        written=bool(re.search(r'^W\d\s{2}', body, re.M)),
    )


def inventory():
    rows = []
    for n in range(1, 19):
        d = parse(n)
        rows.append(d)
    print('%-3s %-54s %6s %4s %4s %4s %4s %4s %5s %5s'
          % ('ch', 'title', 'chars', 'sec', 'SC', 'P', 'case', 'tbl',
             'terms', 'boxes'))
    tot = collections.Counter()
    for d in rows:
        print('%-3d %-54s %6d %4d %4d %4d %4d %4d %5d %5d'
              % (d['n'], d['title'][:54], d['chars'], len(d['sections']),
                 len(d['sc']), len(d['p']), len(d['case']), len(d['tables']),
                 len(d['terms']) + len(d['keyterms']), len(d['boxes'])))
        for k in ('sections', 'sc', 'p', 'case', 'tables'):
            tot[k] += len(d[k])
        tot['terms'] += len(d['terms']) + len(d['keyterms'])
        tot['boxes'] += len(d['boxes'])
    print('%-3s %-54s %6s %4d %4d %4d %4d %4d %5d %5d'
          % ('', 'TOTAL', '', tot['sections'], tot['sc'], tot['p'],
             tot['case'], tot['tables'], tot['terms'], tot['boxes']))
    return rows


if __name__ == '__main__':
    if len(sys.argv) > 1:
        d = parse(int(sys.argv[1]))
        print(json.dumps({k: (v if k not in ('sections', 'boxes') else
                              [{kk: (vv[:200] if isinstance(vv, str) else vv)
                                for kk, vv in s.items()} for s in v])
                          for k, v in d.items()
                          if k != 'answers'}, ensure_ascii=False, indent=1)[:4000])
    else:
        inventory()
