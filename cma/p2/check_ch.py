"""The invariants a Part 2 chapter has to meet before it is a chapter.

Part 1's chapters came out of a book that had already been edited; these
are written here, so the things an editor would have caught are caught
here instead. Nothing in this file is about style. Every check is for
something a reader would hit: a question with no answer, a worked
example whose arithmetic does not work, a figure referred to and never
drawn, a ratio that does not match the statements it claims to come from.
"""
from __future__ import print_function
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(os.path.dirname(HERE), 'src')
LOS = json.load(open(os.path.join(HERE, 'los.json'), encoding='utf8'))
PLAN = json.load(open(os.path.join(HERE, 'plan.json'), encoding='utf8'))
CODES = set(s['code'] for s in LOS['statements'])
ORONTES = json.load(open(os.path.join(HERE, 'orontes.json'), encoding='utf8'))
SERIES = json.load(open(os.path.join(HERE, 'series.json'), encoding='utf8'))

ARABIC = re.compile(u'[؀-ۿ]')
SECPAT = re.compile(r'^(\d{1,2}\.\d{1,2})\s{2}(.+)$')
OPT = re.compile(r'^([A-D])\.\t(.+)$')
NUM = re.compile(r'-?[\d,]+(?:\.\d+)?')


def losform(code):
    """A.2x -> A.2.x, the way the objectives table writes it."""
    return '%s.%s' % (code[:3], code[3:])


def amounts():
    """Every figure Part 1 published for Orontes, as a set of strings."""
    got = set()
    for part in ('balance_sheet', 'income_statement', 'cash_flows'):
        for row in ORONTES[part]['rows']:
            for v in row[1:]:
                if isinstance(v, (int, float)):
                    got.add('%d' % round(abs(v)))
    # And the earlier years Book 1 supplies. Part 1 published one income
    # statement and two balance sheets; horizontal analysis needs a
    # series, so series.json carries 2024 and 2023 and every chapter
    # quotes the same figures from it.
    for row in SERIES['income_statement']['rows']:
        for v in row[1:]:
            if isinstance(v, (int, float)):
                got.add('%d' % round(abs(v)))
    return got


def arithmetic(text, say):
    """Any sum the chapter states in words has to come out.

    Only the plain two-term forms are checked -- "a + b = c", "a − b = c",
    "a × b = c", "a ÷ b = c" -- because those are the ones a reader
    reproduces on a calculator and the ones a typo hides in.
    """
    pat = re.compile(
        r'(\$?-?[\d,]+(?:\.\d+)?)\s*([+−–×÷*/-])\s*'
        r'(\$?-?[\d,]+(?:\.\d+)?)\s*=\s*(\$?-?[\d,]+(?:\.\d+)?)')

    def val(s):
        return float(s.replace('$', '').replace(',', ''))
    for m in pat.finditer(text):
        a, op, b, c = m.group(1), m.group(2), m.group(3), m.group(4)
        # "2,450,000 ÷ 31,672,600 = 7.74 per cent" states the quotient as a
        # percentage, which is how every common-size figure in this book is
        # written.
        try:
            x, y, z = val(a), val(b), val(c)
        except ValueError:
            continue
        if op == '+':
            r = x + y
        elif op in u'−–-':
            r = x - y
        elif op in u'×*':
            r = x * y
        else:
            if y == 0:
                continue
            r = x / y
        # A quotient may be stated as a percentage -- every common-size
        # figure in this book is. A difference may not: "100.0 − 28.0 =
        # 72.0 per cent" is already in percentage points, and scaling it
        # multiplied the right answer by a hundred.
        tailing = text[m.end():m.end() + 36].lower()
        if op in u'\u00f7/' and (
                tailing.lstrip().startswith(('per cent', '%'))
                or 'index' in tailing or 'base of 100' in tailing):
            r = r * 100
        # Half a unit of the last place the result is written to, so a
        # figure rounded to one decimal is not reported as wrong for
        # being rounded. 7,941 against a stated 7.9 is the book's own
        # rounding; 7.4 against a stated 7.9 is an error.
        dp = len(c.split('.')[1]) if '.' in c else 0
        tol = max(0.5 * 10 ** -dp, abs(z) * 0.002)
        if abs(r - z) > tol:
            say('arithmetic: %s %s %s = %s, but it is %s'
                % (a, op, b, c, ('%.4f' % r).rstrip('0').rstrip('.')))


def check(bk, n, say):
    p = os.path.join(SRC, 'b%d_ch%02d.txt' % (bk, n))
    if not os.path.exists(p):
        say('no such chapter')
        return
    txt = open(p, encoding='utf8').read()
    lines = txt.split('\n')
    body, _, tail = txt.partition('\nAnswers and explanations\n')

    # --- the chapter's frame
    if lines[0].strip() != 'Chapter %d' % n:
        say('does not open on "Chapter %d"' % n)
    if len(lines) < 3 or not lines[1].strip():
        say('has no title line')
    if len(lines) < 3 or not ARABIC.search(lines[2]):
        say('has no Arabic title under the English one')
    fp = 'F%d%02d' % (bk, n)
    if ('Figure %s-01.' % fp) not in txt:
        say('has no roadmap figure %s-01' % fp)
    for want in ('Learning objectives', 'Key terms in this chapter',
                 'Chapter summary', 'Practice', 'Answers and explanations'):
        if ('\n%s\n' % want) not in txt:
            say('is missing the "%s" block' % want)

    # --- the objectives table teaches what the plan says it teaches
    want = set()
    for b in PLAN['books']:
        if b['n'] == bk - 4:            # book 5 on disk is Part 2 book 1
            want = set(b['chapters'][n - 1][1])
    shown = set(re.findall(r'^([A-F]\.\d\.[a-z]{1,2})$', body, re.M))
    for c in sorted(shown):
        if c.replace('.', '', 2).replace('.', '') and \
                c[:3] + c[4:] not in CODES:
            say('objectives name %s, which is not a statement' % c)
    for c in sorted(want):
        if losform(c) not in shown:
            say('plan gives this chapter %s and the objectives omit it' % c)

    # --- term tables carry all three columns
    for i, ln in enumerate(lines):
        if ln.strip() == 'English (exam term)':
            if i + 2 >= len(lines) or not ARABIC.search(lines[i + 1]) \
                    or lines[i + 2].strip() != u'Français':
                say('a term table at line %d is not English / Arabic / '
                    'French' % (i + 1))

    # --- sections run in order
    secs = [m.group(1) for m in (SECPAT.match(l) for l in lines) if m]
    for k, s in enumerate(secs, 1):
        if s != '%d.%d' % (n, k):
            say('section %d is numbered %s' % (k, s))
    if len(secs) < 3:
        say('has only %d sections' % len(secs))

    # --- long enough to be a chapter of this series
    #
    # Part 1's four books ran 4,867 to 6,119 words a chapter. A chapter
    # that falls below that is not a shorter chapter; it is a chapter
    # whose sections have been summarised instead of taught.
    words = len(txt.split())
    if words < 4800:
        say('is %d words, below the 4,800 this series runs to' % words)
    if words > 8600:
        say('is %d words, above what a chapter of this series carries'
            % words)

    # --- every question is answerable
    def items(pat, where):
        return re.findall(pat, where, re.M)
    sc = items(r'^(SC%d-\d{1,2})\s{2}' % n, body)
    mc = items(r'^(P%d-\d{2})\s{2}' % n, body)
    if not sc:
        say('has no section-check questions')
    if len(mc) < 8:
        say('has only %d multiple-choice questions' % len(mc))
    for q in sc + mc:
        opts = re.findall(r'^%s\s{2}.*?\n((?:[A-D]\.\t.*\n){2,8})'
                          % re.escape(q), body + '\n', re.M)
        letters = set(re.findall(r'^([A-D])\.\t', opts[0], re.M)) if opts else set()
        if letters != set('ABCD'):
            say('%s does not offer exactly A, B, C and D' % q)
        m = re.search(r'^%s\s{2}Answer ([A-D])\.' % re.escape(q), tail, re.M)
        if not m:
            say('%s has no answer in the key' % q)
            continue
        wrong = re.findall(r'^([A-D]) is wrong\.', re.split(
            r'^(?:SC\d{1,3}-\d{1,2}|P\d{1,3}-\d{2})\s{2}', tail, flags=re.M)[
                [i for i, x in enumerate(re.findall(
                    r'^(SC\d{1,3}-\d{1,2}|P\d{1,3}-\d{2})\s{2}', tail,
                    re.M)) if x == q][0] + 1], flags=re.M)
        if set(wrong) != set('ABCD') - {m.group(1)}:
            say('%s explains %d of the three wrong options'
                % (q, len(set(wrong))))

    # --- every Your turn has a key
    turns = txt.count('YOUR TURN   ')
    if turns and '\nYour turn\n' not in tail:
        say('has %d Your turn block(s) and no key for them' % turns)

    # --- figures: referred to and drawn
    caps = set(re.findall(r'^Figure (%s-\d{2})\.' % fp, txt, re.M))
    refs = set(re.findall(r'\bFigure (%s-\d{2})\b' % fp, txt))
    for f in sorted(refs - caps):
        say('%s is referred to and never captioned' % f)
    nums = sorted(int(f.split('-')[1]) for f in caps)
    if nums != list(range(1, len(nums) + 1)):
        say('figure numbers are not 1..%d: %s' % (len(nums), nums))

    # --- the arithmetic the chapter states
    arithmetic(txt, say)

    # --- Orontes' own figures are the ones Part 1 published
    #
    # A large amount in this book is either a line of the statements Part
    # 1 published, or something built out of two of them: working capital
    # is current assets less current liabilities, an average balance is
    # two balances halved. Anything else is a number that entered the
    # book from nowhere, and in a book whose whole subject is ratios of
    # these statements, that is the error worth catching.
    known = amounts()
    derived = set(known)
    vals = sorted(float(x) for x in known)
    for a in vals:
        for b in vals:
            for r in (a + b, a - b, (a + b) / 2.0):
                if r > 0:
                    derived.add('%d' % round(r))
    # Only an amount written to the dollar. A round million is a
    # hypothetical -- a competitor's sales, a company a hundred times the
    # size -- and those are invented on purpose. What must not be
    # invented is a figure that claims to be one of Orontes' own, and
    # those are never round: 7,302,100, 31,672,600, 2,969,100.
    for m in re.finditer(r'\$([\d,]{9,})\b', txt):
        v = m.group(1).replace(',', '')
        if v.endswith('000'):
            continue
        if v not in derived:
            say('$%s is quoted as an Orontes amount and is not one, nor the '
                'sum, difference or average of two' % m.group(1))


def main(argv):
    bk = int(argv[1]) if len(argv) > 1 else 5
    chs = [int(x) for x in argv[2:]] or list(range(1, 19))
    total = 0
    for n in chs:
        bad = []
        check(bk, n, bad.append)
        p = os.path.join(SRC, 'b%d_ch%02d.txt' % (bk, n))
        words = len(open(p, encoding='utf8').read().split()) \
            if os.path.exists(p) else 0
        print('ch%02d  %5d words  %s'
              % (n, words, 'ok' if not bad else '%d finding(s)' % len(bad)))
        for m in bad:
            print('        ' + m)
        total += len(bad)
    print('\n%d finding(s)' % total)
    return 1 if total else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
