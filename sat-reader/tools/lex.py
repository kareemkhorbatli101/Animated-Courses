"""Shared language measurement: ranks, syllables, sentences, readability."""
import re, functools
from wordfreq import top_n_list

_RANKS = {w: i + 1 for i, w in enumerate(top_n_list('en', 120000))}

ABBR = ['Mr', 'Mrs', 'Ms', 'Dr', 'Jr', 'Sr', 'St', 'No', 'vs', 'v', 'Inc', 'Co', 'etc',
        'a.m', 'p.m', 'Rev', 'Gen', 'Col', 'Prof', 'Fig', 'Mt']

PREFIXES = ['un', 're', 'in', 'im', 'dis', 'non', 'over', 'under', 'mis', 'pre', 'anti',
            'de', 'co', 'out', 'up', 'fore', 'inter', 'sub', 'super', 'semi']

NUMBER_WORDS = set("""zero one two three four five six seven eight nine ten eleven twelve
thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty
sixty seventy eighty ninety hundred thousand million billion trillion
first second third fourth fifth sixth seventh eighth ninth tenth eleventh twelfth
thirteenth fourteenth fifteenth sixteenth seventeenth eighteenth nineteenth twentieth
thirtieth fortieth fiftieth sixtieth seventieth eightieth ninetieth hundredth thousandth
half halves quarter quarters third thirds dozen score""".split())

SUFFIXES = [('ing', ''), ('ing', 'e'), ('ed', ''), ('ed', 'e'), ('d', ''), ('ies', 'y'),
            ('es', ''), ('es', 'e'), ('s', ''), ('ly', ''), ('er', ''), ('er', 'e'),
            ('ers', ''), ('ers', 'e'), ('est', ''), ('ment', ''), ('ments', ''),
            ('ness', ''), ('al', ''), ('ally', 'al'), ('tion', 'te'), ('tions', 'te'),
            ('ions', 'ion'), ('ation', 'e'), ('ations', 'e'), ('able', ''), ('able', 'e'),
            ('ible', ''), ('ors', ''), ('or', ''), ('ful', ''), ('less', ''), ('ance', ''),
            ('ence', ''), ('ity', ''), ('ive', ''), ('ous', ''), ('ist', ''), ('ists', ''),
            ('ism', ''), ('ic', ''), ('ical', ''), ('ship', ''), ('hood', ''), ('wards', ''),
            ('ward', '')]


def _forms(w):
    cands = {w, w.replace('-', ''), w.replace("'s", '')}
    for suf, base in SUFFIXES:
        if w.endswith(suf) and len(w) > len(suf) + 2:
            cands.add(w[:-len(suf)] + base)
    for pre in PREFIXES:
        if w.startswith(pre) and len(w) > len(pre) + 3:
            stem = w[len(pre):]
            cands.add(stem)
            for suf, base in SUFFIXES:
                if stem.endswith(suf) and len(stem) > len(suf) + 2:
                    cands.add(stem[:-len(suf)] + base)
    return cands


@functools.lru_cache(maxsize=300000)
def rank(word):
    """Rank of the easiest form through which a reader could recognise this word.

    A hyphenated compound takes the rank of its hardest part. Spelled-out numbers
    count as known. Transparent prefixes and suffixes are stripped, because a
    reader who knows "repeal" can read "unrepealed"."""
    w = word.lower().strip(".,;:!?'\"()[]-\u2013\u2014")
    if not w:
        return 10 ** 7
    if '-' in w:
        parts = [p for p in w.split('-') if p]
        return max((rank(p) for p in parts), default=10 ** 7)
    if w in NUMBER_WORDS:
        return 1
    return min(_RANKS.get(c, 10 ** 7) for c in _forms(w))


def easiest_form(word):
    w = word.lower().strip(".,;:!?'\"()")
    return min(_forms(w), key=rank) if w else w


def words(text):
    return re.findall(r"[A-Za-z][A-Za-z'-]*", text)


def sentences(text):
    t = re.sub(r'\s+', ' ', text).strip()
    for a in ABBR:
        t = t.replace(a + '.', a + '<DOT>')
    t = re.sub(r'\b([A-Z])\.', r'\1<DOT>', t)
    t = re.sub(r'(\d)\.(\d)', r'\1<DOT>\2', t)
    t = t.replace('U.S.', 'U<DOT>S<DOT>')
    parts = re.split(r'(?<=[.!?])\s+', t)
    return [p.replace('<DOT>', '.').strip() for p in parts if p.strip()]


VOWELS = 'aeiouy'


def syllables(word):
    w = re.sub(r'[^a-z]', '', word.lower())
    if not w:
        return 1
    n, prev = 0, False
    for ch in w:
        v = ch in VOWELS
        if v and not prev:
            n += 1
        prev = v
    if w.endswith('e') and not w.endswith(('le', 'ee', 'ye')) and n > 1:
        n -= 1
    return max(1, n)


def flesch_kincaid(text):
    ws, ss = words(text), sentences(text)
    if not ws or not ss:
        return 0.0
    syl = sum(syllables(w) for w in ws)
    return 0.39 * (len(ws) / len(ss)) + 11.8 * (syl / len(ws)) - 15.59


def proper_nouns(text):
    out = set()
    for s in sentences(text):
        for t in words(s)[1:]:
            if t[0].isupper():
                out.add(t.lower())
    return out
