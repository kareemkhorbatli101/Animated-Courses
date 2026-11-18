#!/usr/bin/env python3
"""Passes G and H - language control and content control.

G: British spelling, curly quotes in learner prose, instruction length,
   straight-quote leakage.
H: no Syrian referent, no first-language-specific contrast, no real news
   organisation or real event named as a source of claims.
"""
import io, os, re, sys, json, glob

BOOK = sys.argv[1] if len(sys.argv) > 1 else 'journalists-intl/b1'
UNIT = sys.argv[2] if len(sys.argv) > 2 else 'unit1'
NS = sys.argv[3] if len(sys.argv) > 3 else 'JRN'
D = os.path.join(BOOK, 'assets', 'data', UNIT)

# --- G: American spellings that must not appear (British house style) ---
AMERICAN = [
    r'\borganiz(e|ed|es|ing|ation)\b', r'\brecogniz(e|ed|es|ing)\b',
    r'\bapolog(ize|ized|izing)\b', r'\bpractic(e|ed|ing)\s+(?=the\s+role)',
    r'\bcolor\b', r'\bfavor(ite)?\b', r'\bhonor\b', r'\blabor\b',
    r'\bcenter\b', r'\bmeter\b(?!\s*=)', r'\btheater\b', r'\bdefense\b',
    r'\btraveling\b', r'\bcanceled\b', r'\bprogram\b(?!me)',
    r'\banalyz(e|ed|es|ing)\b', r'\bcatalog\b', r'\bfulfill\b',
]
# --- H: content that must not survive the transposition ---
SYRIAN = [r'\bSyria\b', r'\bSyrian\b', r'\bDamascus\b', r'\bAleppo\b', r'\bHoms\b',
          r'\bLatakia\b', r'\bUstaz\b', r'\bal-?Mathaq\b', r'\bCham Motors\b',
          r'\bBarada\b',
          # an assumed first language is the real criterion, not the word itself:
          # naming Arabic among an agency's filing languages is correct here.
          r'\byour\s+(?:Arabic|mother tongue|own language)\b',
          r'\bArabic\s+(?:speakers?|learners?)',
          r'\b(?:in|from)\s+Arabic\b', r'\bArabic-speaking\b']
# real organisations / people / events that must not be cited as sources of claims
REAL = [r'\bReuters\b', r'\bAssociated Press\b', r'\bAgence France', r'\bAFP\b',
        r'\bBBC\b', r'\bCNN\b', r'\bAl Jazeera\b', r'\bNew York Times\b',
        r'\bGuardian\b', r'\bBloomberg\b', r'\bXinhua\b', r'\bTASS\b',
        r'\bCommittee to Protect Journalists\b', r'\bReporters Without Borders\b',
        r'\bUNESCO\b', r'\bCOVID\b', r'\bUkraine\b', r'\bGaza\b']

TEXT_KEYS = ('instruction', 'title', 'html', 'why', 'after', 'model', 'okMsg',
             'label', 'q', 't', 'blurb', 'objective', 'mean', 'purpose', 'text',
             'placeholder', 'stems', 'ideas', 'task', 'criteria', 'accept', 'wrong')

fails = []


def F(crit, where, msg):
    fails.append((crit, where, msg))


def js_strings(src):
    """Every single-quoted literal in the file, with its line number."""
    out, line = [], 1
    i = 0
    while i < len(src):
        ch = src[i]
        if ch == '\n':
            line += 1
            i += 1
            continue
        if ch == "'":
            j, buf = i + 1, []
            while j < len(src):
                if src[j] == '\\':
                    buf.append(src[j:j + 2]); j += 2; continue
                if src[j] == "'":
                    break
                if src[j] == '\n':
                    line += 1
                buf.append(src[j]); j += 1
            out.append((line, ''.join(buf)))
            i = j + 1
            continue
        i += 1
    return out


files = sorted(glob.glob(os.path.join(D, 's*.js'))) + \
    [os.path.join(D, f) for f in ('meta.js', 'glossary.js')]

prose_chars = 0
for path in files:
    name = os.path.basename(path)
    src = io.open(path, encoding='utf-8').read()
    strings = js_strings(src)
    joined = ' '.join(s for _, s in strings)
    prose_chars += len(joined)

    for ln, s in strings:
        where = '%s:%d' % (name, ln)
        for pat in AMERICAN:
            m = re.search(pat, s, re.I)
            if m:
                F(40, where, 'American spelling "%s"' % m.group(0))
        for pat in SYRIAN:
            m = re.search(pat, s)
            if m:
                F(47, where, 'Syrian/first-language referent "%s"' % m.group(0))
        for pat in REAL:
            m = re.search(pat, s)
            if m:
                F(48, where, 'real organisation or event named: "%s"' % m.group(0))
        # straight apostrophe inside learner-visible prose (house uses curly)
        if re.search(r"[a-z]\\'[a-z]", s):
            F(41, where, 'straight apostrophe in prose: ...%s...'
              % s[max(0, s.find("\\'") - 18):s.find("\\'") + 12])

# instruction length, per card, from the rendered data
import subprocess
dump = subprocess.run(
    ['node', '-e', '''
const fs=require('fs'),path=require('path');global.window=global;
const pages={};const NS=process.argv[2];
global[NS]=global.window[NS]={page:(i,d)=>{pages[i]=d;},unitMap:()=>{},glossary:()=>{},unitMeta:{}};
const D=process.argv[1];
for(const f of fs.readdirSync(D).filter(x=>/^s\\d\\d.*\\.js$/.test(x)).sort())
  (new Function(fs.readFileSync(path.join(D,f),"utf8")))();
console.log(JSON.stringify(pages));''', D, NS], capture_output=True, text=True)
if dump.returncode:
    print('data dump failed:', dump.stderr[:400]); sys.exit(2)
pages = json.loads(dump.stdout)

for pid, p in pages.items():
    for c in p.get('cards', []):
        where = '%s#%s' % (pid, c.get('id'))
        ins = re.sub(r'<[^>]+>', ' ', c.get('instruction') or '')
        # the house breaks a long instruction with <br>; measure each segment
        for seg in re.split(r'\s{2,}', ins):
            seg = seg.strip()
            if not seg:
                continue
            # the house sets phrase banks and 'useful language' as middot lists;
            # a list is not a sentence, so measure the items, not the run
            for sent in re.split(r'(?<=[.?!])\s+|\s\u00b7\s|\u2610', seg):
                sent = sent.strip()
                n = len(sent.split())
                if n > 34:
                    F(42, where, 'instruction sentence of %d words: "%s..."'
                      % (n, sent[:60]))

print('\n== Passes G and H: %s %s ==' % (BOOK, UNIT))
print('files scanned %d | prose characters %d' % (len(files), prose_chars))
if not fails:
    print('\nALL CHECKS PASSED')
    sys.exit(0)
print('\n%d FAILURE(S):' % len(fails))
seen = set()
for crit, where, msg in fails:
    k = (crit, msg)
    if k in seen:
        continue
    seen.add(k)
    print('  [crit %s] %s: %s' % (crit, where, msg))
sys.exit(1)
