"""N · Clarity — 6 checks, and the reason they exist is a one-line review.

"Your conversations and reading passages make me feel stupid. They are vague,
non-conventional, lacking focus."

That was said of a unit sitting at a 14.8-word mean sentence and a 6.0 reading
grade, with every word inside the B1 band. Which is the finding: **a sentence
can be twelve words of easy vocabulary and still never state its point.**
Readability arithmetic measures the shape of a sentence; it is blind to whether
the sentence says anything a learner can hold.

What was actually wrong, in the author's own text:

* A reading passage opening `A Saturday afternoon on an ordinary street looks
  like bad luck, and almost none of it is.` -- a paradox, requiring the learner
  to carry a negation and an inversion before they know the topic.
* Paragraphs closing on aphorisms (`the overlap is designed rather than
  accidental`) that sound like a point and leave nothing behind.
* A paragraph that opens on who is at home at three o'clock and closes on the
  nature of memory, with no warning that the subject changed.
* A shop assistant saying `The card reader lost the bank` and `That is the
  problem in one sentence` -- idiom and essayist's register in a service
  encounter.
* Comprehension answers that cannot be pointed at in the text, because the text
  implied them rather than saying them.

None of that is catchable by families A-M. This family catches the structural
half of it, and the limit is stated rather than implied: **it cannot tell you a
sentence is vague. It can tell you a paragraph never announces its subject, that
it ends somewhere other than where it began, that a question in a dialogue goes
unanswered, and that an answer the key expects is not findable in the text the
learner was given.** Those four are most of what "makes me feel stupid" means in
practice.

`N05` is the hand-maintained half, in the shape family M's `banned_premises`
takes: a blocklist of constructions that read as cleverness rather than content,
each with the reason it is banned. It grows when a reader finds another.

Scope: gated on `golden.language.clarity_law`, set at B1 and not at A2, for the
same reason as the depiction law -- A2's twenty units were written before it.
00-MASTER-PLAN.md section 4d carries the decision and the measurement.
"""
from __future__ import annotations
import os, re
import yaml
from . import check, ok, fail, expect
import model as M

# The sub-section kinds that carry a reading passage the learner is questioned
# on. Deliberately not `notice` or `focus_box`, which are grammar exposition and
# are meant to be short, nor the writing models, which are 90-110 words and one
# paragraph by design.
PASSAGE_KINDS = {'text_mcq', 'text_qa'}
DIALOGUE_KINDS = {'script_qa', 'script_tfng', 'script_match'}
ANSWERABLE_KINDS = {'text_qa', 'script_qa'}

STOP = set(
    'a an the and or but of to in on at by for with from is are was were be been '
    'being am do does did have has had will would can could shall should may might '
    'must this that these those it he she they we i you his her its their my your our '
    'as so not no all one two three four five six seven eight nine ten very still just '
    'about up down out off over into than then there here when while what who how '
    'again more most some any each every other another same because which if because '
    'said says say get got go goes went come came take took make made'.split())

# Discourse markers an ELT reading passage signposts with. N02 wants one per
# paragraph after the first; this list is the conventional set, not a style.
MARKERS = [
    'first', 'firstly', 'second', 'secondly', 'third', 'thirdly', 'next',
    'another', 'also', 'for example', 'for instance', 'so', 'because of this',
    'as a result', 'then', 'finally', 'in the end', 'at the same time',
    'the first reason', 'the second reason', 'the third reason', 'but',
    'however', 'on the other hand', 'this is why', 'that is why', 'in short',
]

# A story signposts with time and sequence rather than with argument. N02
# accepts these, and any clock time or weekday, in a narrative passage.
MARKERS_NARRATIVE = [
    'that morning', 'that afternoon', 'that evening', 'that night',
    'the next day', 'the next morning', 'later', 'earlier', 'afterwards',
    'by the time', 'meanwhile', 'at first', 'in the end', 'three weeks later',
    'the following', 'within', 'once', 'soon', 'eventually', 'nowadays',
]

_LEDGER: dict = {}


def _on(ctx):
    return bool(ctx.spec.get('language', {}).get('clarity_law'))


def _off_msg():
    return ('golden.language.clarity_law is not set at this level; the clarity '
            'law is B1-forward (plan 4d)')


def _phrasebook(ctx):
    """ledgers/clarity.yaml -- the hand-maintained half of this family."""
    p = os.path.join(ctx.root, 'ledgers', 'clarity.yaml')
    if p not in _LEDGER:
        try:
            with open(p, encoding='utf-8') as f:
                _LEDGER[p] = yaml.safe_load(f) or {}
        except OSError:
            _LEDGER[p] = {}
    return _LEDGER[p]


def _kind_of(sub, ctx, u):
    r"""The spec kind of this sub-section, resolved BY POSITION.

    The obvious implementation -- walk the spec's heading regexes and take the
    first that matches -- is wrong, and its own mutation test is what showed it.
    Part 3's three sub-sections are declared `script_tfng`, `script_qa` and
    `script_match`, and all three headings match the first pattern,
    `^\*\*Part 3: .+\*\*$`. So every Part 3 sub resolved to `script_tfng` and
    every Part 5 sub to `text_mcq`, and N03 silently covered one sub-section of
    the three it was written for. The spec lists subs in document order, which
    is the whole point of A08 and A09, so position is exact where the regex is
    ambiguous.
    """
    for p in u.parts:
        if sub not in p.subs:
            continue
        i = p.subs.index(sub)
        for sec in ctx.spec.get('sections', []):
            if sec.get('part') != p.name:
                continue
            subs = sec.get('subs', [])
            return subs[i].get('kind') if i < len(subs) else None
    return None


def _words(t):
    t = re.sub(r'[*_>|]', ' ', t or '').lower()
    return [w for w in re.findall(r"[a-z][a-z'-]*", t) if w not in STOP and len(w) > 2]


def _passages(u, ctx):
    """[(label, [paragraph, ...])] for every reading passage in the unit.

    Two places hold one. Part 5's readings are sub-sections with a declared
    kind, but the Global Story and the Close to Home reading are printed in
    their PART's leading lines, before the first sub-section -- so a scan of
    sub-sections only would have left the unit's two longest passages, 1,300
    words of it, entirely unchecked. The leading lines of every other part are
    a track label and a figure caption, both of which `_paras` drops.
    """
    out = []
    for p in u.parts:
        ps = _paras_from(p.leading)
        if ps:
            out.append((p.name, ps, 'narrative'))
    for sub in u.subs:
        if _kind_of(sub, ctx, u) in PASSAGE_KINDS:
            ps = _paras(sub)
            if ps:
                out.append((sub.heading, ps, 'expository'))
    return out


def _paras(sub):
    """The passage's paragraphs: blockquote lines that are prose, not apparatus.

    `Before you read`, `Gloss`, `Useful language` and the task rubric are
    apparatus and are skipped; so is anything that is a table row, a numbered
    item or an MCQ option.
    """
    return _paras_from(sub.lines)


def _paras_from(lines):
    out = []
    for l in lines:
        s = l.strip()
        if not s.startswith('>'):
            continue
        s = s.lstrip('>').strip()
        if not s or s.startswith('|') or s.startswith('○'):
            continue
        if re.match(r'^\*\*(Before you|Gloss|Useful|Word bank|Check before|Plan|Model|'
                    r'Discussion frames|Answer frame|While you listen)', s):
            continue
        if s.startswith('**') and s.rstrip().endswith('**'):
            continue            # the rubric, which is wholly bold
        if re.match(r'^\d+\.', s) or re.match(r'^\*\*[A-Z][A-Z ]+:\*\*', s):
            continue            # numbered item, or a dialogue turn
        if len(s.split()) < 12:
            continue
        out.append(s)
    return out


def _turns(sub):
    """[(speaker, text)] for a printed dialogue."""
    out = []
    for l in sub.lines:
        m = re.match(r'^>?\s*\*\*([A-Z][A-Za-z ]+):\*\*\s*(.+)$', l.strip())
        if m:
            out.append((m.group(1).strip(), m.group(2).strip()))
    return out


def _sents(t):
    return [s.strip() for s in re.split(r'(?<=[.!?])\s+', t) if s.strip()]


# --------------------------------------------------------------------------- N01
@check('N01', 'golden.language.clarity_law',
       'Every passage paragraph opens with a sentence that states its subject')
def n01(u, ctx):
    if not _on(ctx):
        return ok(_off_msg())
    bad, n = [], 0
    for label, paras, mode in _passages(u, ctx):
        if mode != 'expository':
            continue
        for p in paras:
            ss = _sents(p)
            if len(ss) < 3:
                continue
            n += 1
            head = set(_words(ss[0]))
            rest = set(_words(' '.join(ss[1:])))
            if len(head & rest) < 2:
                bad.append(f'{label}: "{ss[0][:62]}..." names '
                           f'{len(head & rest)} of the words its own paragraph '
                           f'goes on to use')
    if bad:
        return fail(f'{len(bad)} of {n} paragraphs open on a transition or a '
                    f'flourish rather than on their subject: {bad[:3]}')
    return ok(f'{n} passage paragraphs, each opening on its own subject')


# --------------------------------------------------------------------------- N02
@check('N02', 'golden.language.clarity_law',
       'Reading passages signpost: a discourse marker in every paragraph after the first')
def n02(u, ctx):
    if not _on(ctx):
        return ok(_off_msg())
    bad, n = [], 0
    for label, paras, mode in _passages(u, ctx):
        allow = MARKERS + (MARKERS_NARRATIVE if mode == 'narrative' else [])
        for p in paras[1:]:
            n += 1
            low = ' ' + re.sub(r'[^a-z ]', ' ', p.lower()) + ' '
            if not any(f' {m} ' in low for m in allow) and not re.search(r'\b(at|by|on|before|after|since|until)\s+(half past|a quarter|\w+ o.clock|\d|monday|tuesday|wednesday|thursday|friday|saturday|sunday|january|february|march|april|may|june|july|august|september|october|november|december)', p, re.I):
                bad.append(f'{label}: "{p[:62]}..."')
    if bad:
        return fail(f'{len(bad)} of {n} paragraphs give the reader nothing to '
                    f'hold on to -- no First, Another, For example, So, '
                    f'However: {bad[:3]}')
    return ok(f'{n} continuation paragraphs, each signposted')


# --------------------------------------------------------------------------- N03
@check('N03', 'golden.language.clarity_law',
       'Every open comprehension answer is findable in the text the learner was given')
def n03(u, ctx):
    if not _on(ctx):
        return ok(_off_msg())
    key = ctx.key
    if key is None:
        return ok('no key parsed for this unit')
    share = ctx.spec.get('language', {}).get('clarity_answer_share', 0.5)
    bad, n = [], 0
    for sub in u.subs:
        if _kind_of(sub, ctx, u) not in ANSWERABLE_KINDS:
            continue
        sec = key.section(sub.heading)
        if sec is None:
            continue
        body = set(_words(sub.text))
        for i, ans in sorted(sec.items.items()):
            aw = _words(ans)
            if len(aw) < 3:
                continue
            n += 1
            found = [w for w in aw if w in body]
            if len(found) / len(aw) < share:
                bad.append(f'{sub.heading} item {i}: only {len(found)} of '
                           f'{len(aw)} content words are in the passage '
                           f'-- "{ans[:56]}"')
    if bad:
        return fail(f'{len(bad)} of {n} answers cannot be pointed at in the text. '
                    f'A learner who reads carefully and still cannot find it has '
                    f'been asked to guess: {bad[:3]}')
    return ok(f'{n} open answers, each traceable to the passage')


# --------------------------------------------------------------------------- N04
@check('N04', 'golden.language.clarity_law',
       'A paragraph ends on the subject it began with')
def n04(u, ctx):
    if not _on(ctx):
        return ok(_off_msg())
    bad, n = [], 0
    for label, paras, mode in _passages(u, ctx):
        if mode != 'expository':
            continue
        for p in paras:
            ss = _sents(p)
            if len(ss) < 3:
                continue
            n += 1
            if not (set(_words(ss[0])) & set(_words(ss[-1]))):
                bad.append(f'{label}: opens "{ss[0][:40]}..." and closes '
                           f'"{ss[-1][:40]}..."')
    if bad:
        return fail(f'{len(bad)} of {n} paragraphs finish somewhere other than '
                    f'where they started, with no warning to the reader: {bad[:3]}')
    return ok(f'{n} passage paragraphs, each closing on its own subject')


# --------------------------------------------------------------------------- N05
@check('N05', 'ledgers/clarity.banned_phrasing',
       'The unit uses none of the blocklisted writerly constructions')
def n05(u, ctx):
    if not _on(ctx):
        return ok(_off_msg())
    book = _phrasebook(ctx)
    pats = book.get('banned_phrasing') or []
    if not pats:
        return fail('clarity_law is on but ledgers/clarity.yaml lists no banned '
                    'phrasing, so N05 would pass anything')
    hits = []
    for b in pats:
        m = re.search(b['pattern'], u.text)
        if m:
            hits.append(f'{b["id"]}: "{re.sub(chr(10), " ", m.group(0))[:70]}"')
    if hits:
        return fail(f'{len(hits)} blocklisted construction(s): {hits}. Each reads '
                    f'as cleverness rather than content; ledgers/clarity.yaml '
                    f'says why for each.')
    return ok(f'none of the {len(pats)} blocklisted constructions')


# --------------------------------------------------------------------------- N06
@check('N06', 'golden.language.clarity_law',
       'In a printed dialogue, a question is answered by the turn after it')
def n06(u, ctx):
    if not _on(ctx):
        return ok(_off_msg())
    cap = ctx.spec.get('language', {}).get('clarity_turn_words_max', 55)
    bad, long_, n = [], [], 0
    for sub in u.subs:
        if _kind_of(sub, ctx, u) not in DIALOGUE_KINDS:
            continue
        turns = _turns(sub)
        for i, (who, text) in enumerate(turns):
            if len(text.split()) > cap:
                long_.append(f'{sub.heading}: {who} takes {len(text.split())} words')
            if '?' not in text or i + 1 >= len(turns):
                continue
            n += 1
            q = set(_words(text.split('?')[0]))
            a = set(_words(turns[i + 1][1]))
            if q and not (q & a):
                bad.append(f'{sub.heading}: {who} asks "{text[:48]}..." and '
                           f'{turns[i+1][0]} answers "{turns[i+1][1][:40]}..."')
    msgs = []
    if bad:
        msgs.append(f'{len(bad)} of {n} questions are not answered by the next '
                    f'turn: {bad[:3]}')
    if long_:
        msgs.append(f'{len(long_)} turn(s) over {cap} words, which is a speech '
                    f'rather than a turn: {long_[:3]}')
    if msgs:
        return fail('; '.join(msgs))
    return ok(f'{n} questions, each answered by the turn after it; no turn over '
              f'{cap} words')
