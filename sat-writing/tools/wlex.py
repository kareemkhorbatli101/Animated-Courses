#!/usr/bin/env python3
"""Conservative grammar predicates for the uniqueness-of-correctness check.

Every predicate answers one question about one quoted span and returns

    True   the fault is present
    False  the fault is definitely absent
    None   cannot tell

None is a first-class answer and the whole discipline of this module. A detector
that guesses costs the build more than it saves: a false failure sends an author
to rewrite correct English. So each predicate classifies only what it can
classify from a closed table, and returns None the moment it is out of its depth.
PLAN.md section 7 lists which moves have a predicate and which deliberately do
not.

Run this file to execute its own test suite.
"""
import re

# ---------------------------------------------------------------------------
# number
# ---------------------------------------------------------------------------
SING_AUX = {'is', 'was', 'has', 'does'}
PLUR_AUX = {'are', 'were', 'have', 'do'}
# Modals carry no number at all, so a modal span can never be a number fault.
MODALS = {'can', 'could', 'will', 'would', 'shall', 'should', 'may', 'might', 'must'}
# Words ending in -s that are not third-person singular verbs.
NOT_VERB_S = {'this', 'its', 'his', 'hers', 'theirs', 'ours', 'yours', 'us', 'thus',
              'less', 'unless', 'perhaps', 'always', 'across', 'species', 'series',
              'analysis', 'basis', 'crisis', 'gas', 'bus', 'plus', 'news', 'physics',
              'mathematics', 'economics', 'politics', 'statistics', 'means', 'as',
              'was', 'is', 'has', 'does', 'goes', 'yes', 'whereas'}


def words(s):
    return re.findall(r"[A-Za-z][A-Za-z'\-]*", s or '')


def number_of(span):
    """'sing', 'plur' or None for the number a verb span carries."""
    w = [x.lower() for x in words(span)]
    if not w:
        return None
    if w[0] in MODALS:
        return None
    if w[0] in SING_AUX:
        return 'sing'
    if w[0] in PLUR_AUX:
        return 'plur'
    if len(w) == 1:
        t = w[0]
        if t in NOT_VERB_S:
            return None
        if t.endswith('s') and not t.endswith('ss') and not t.endswith('us'):
            return 'sing'
        return None
    return None


def wrong_number(span, number):
    """The span's verb is in the number the subject is not."""
    got = number_of(span)
    if got is None or number not in ('sing', 'plur'):
        return None
    return got != number


# ---------------------------------------------------------------------------
# tense and aspect
# ---------------------------------------------------------------------------
IRREGULAR = {
    'be': ('was', 'been'), 'become': ('became', 'become'), 'begin': ('began', 'begun'),
    'bend': ('bent', 'bent'), 'bind': ('bound', 'bound'), 'bite': ('bit', 'bitten'),
    'blow': ('blew', 'blown'), 'break': ('broke', 'broken'), 'bring': ('brought', 'brought'),
    'build': ('built', 'built'), 'burn': ('burned', 'burned'), 'burst': ('burst', 'burst'),
    'buy': ('bought', 'bought'), 'catch': ('caught', 'caught'), 'choose': ('chose', 'chosen'),
    'cling': ('clung', 'clung'), 'come': ('came', 'come'), 'cost': ('cost', 'cost'),
    'cut': ('cut', 'cut'), 'deal': ('dealt', 'dealt'), 'dig': ('dug', 'dug'),
    'do': ('did', 'done'), 'draw': ('drew', 'drawn'), 'drink': ('drank', 'drunk'),
    'drive': ('drove', 'driven'), 'eat': ('ate', 'eaten'), 'fall': ('fell', 'fallen'),
    'feed': ('fed', 'fed'), 'feel': ('felt', 'felt'), 'fight': ('fought', 'fought'),
    'find': ('found', 'found'), 'flee': ('fled', 'fled'), 'fling': ('flung', 'flung'),
    'fly': ('flew', 'flown'), 'forbid': ('forbade', 'forbidden'),
    'forget': ('forgot', 'forgotten'), 'forgive': ('forgave', 'forgiven'),
    'freeze': ('froze', 'frozen'), 'get': ('got', 'gotten'), 'give': ('gave', 'given'),
    'go': ('went', 'gone'), 'grind': ('ground', 'ground'), 'grow': ('grew', 'grown'),
    'hang': ('hung', 'hung'), 'have': ('had', 'had'), 'hear': ('heard', 'heard'),
    'hide': ('hid', 'hidden'), 'hit': ('hit', 'hit'), 'hold': ('held', 'held'),
    'hurt': ('hurt', 'hurt'), 'keep': ('kept', 'kept'), 'know': ('knew', 'known'),
    'lay': ('laid', 'laid'), 'lead': ('led', 'led'), 'leave': ('left', 'left'),
    'lend': ('lent', 'lent'), 'let': ('let', 'let'), 'lie': ('lay', 'lain'),
    'light': ('lit', 'lit'), 'lose': ('lost', 'lost'), 'make': ('made', 'made'),
    'mean': ('meant', 'meant'), 'meet': ('met', 'met'), 'pay': ('paid', 'paid'),
    'put': ('put', 'put'), 'read': ('read', 'read'), 'ride': ('rode', 'ridden'),
    'ring': ('rang', 'rung'), 'rise': ('rose', 'risen'), 'run': ('ran', 'run'),
    'say': ('said', 'said'), 'see': ('saw', 'seen'), 'seek': ('sought', 'sought'),
    'sell': ('sold', 'sold'), 'send': ('sent', 'sent'), 'set': ('set', 'set'),
    'shake': ('shook', 'shaken'), 'shine': ('shone', 'shone'), 'shoot': ('shot', 'shot'),
    'show': ('showed', 'shown'), 'shrink': ('shrank', 'shrunk'), 'shut': ('shut', 'shut'),
    'sing': ('sang', 'sung'), 'sink': ('sank', 'sunk'), 'sit': ('sat', 'sat'),
    'sleep': ('slept', 'slept'), 'slide': ('slid', 'slid'), 'speak': ('spoke', 'spoken'),
    'spend': ('spent', 'spent'), 'spin': ('spun', 'spun'), 'split': ('split', 'split'),
    'spread': ('spread', 'spread'), 'spring': ('sprang', 'sprung'), 'stand': ('stood', 'stood'),
    'steal': ('stole', 'stolen'), 'stick': ('stuck', 'stuck'), 'sting': ('stung', 'stung'),
    'strike': ('struck', 'struck'), 'strive': ('strove', 'striven'), 'swear': ('swore', 'sworn'),
    'sweep': ('swept', 'swept'), 'swim': ('swam', 'swum'), 'swing': ('swung', 'swung'),
    'take': ('took', 'taken'), 'teach': ('taught', 'taught'), 'tear': ('tore', 'torn'),
    'tell': ('told', 'told'), 'think': ('thought', 'thought'), 'throw': ('threw', 'thrown'),
    'understand': ('understood', 'understood'), 'undertake': ('undertook', 'undertaken'),
    'wear': ('wore', 'worn'), 'weave': ('wove', 'woven'), 'win': ('won', 'won'),
    'wind': ('wound', 'wound'), 'withdraw': ('withdrew', 'withdrawn'),
    'write': ('wrote', 'written'),
}
PAST_FORMS = {v[0] for v in IRREGULAR.values()} | {'were'}
PARTICIPLES = {v[1] for v in IRREGULAR.values()}
# A bare past participle that is spelled like the past tense is ambiguous, so the
# classifier only uses participle-hood after an auxiliary that demands one.

TENSES = ('past_simple', 'past_perfect', 'past_perfect_progressive', 'present_perfect',
          'present_perfect_progressive', 'past_progressive', 'present_progressive',
          'present', 'future', 'future_perfect', 'conditional', 'conditional_perfect')
# What each rule will accept, as a set. Sets rather than single values because two
# of these rules are genuinely satisfied by more than one form: a continuing action
# takes the present perfect or the present perfect progressive, both correct and
# both printed by the test, and the consequence of an unreal condition takes a plain
# conditional after a present condition and a conditional perfect after a past one.
# An exercise may override the rule's set with ctx['tense'] when its carrier settles
# which form is the only right one.
RULE_TENSE = {
    'past_simple': {'past_simple'},
    'past_perfect_sequence': {'past_perfect', 'past_perfect_progressive'},
    'present_perfect_continuing': {'present_perfect', 'present_perfect_progressive'},
    'present_general': {'present'},
    'past_progressive': {'past_progressive'},
    'conditional_sequence': {'conditional', 'conditional_perfect'},
}
# The time a tense places its action in, for telling a wrong aspect from a wrong
# tense. Two forms sharing a time and differing in aspect is a wrong aspect; two
# forms in different times is a wrong tense.
TIME = {
    'past_simple': 'past', 'past_perfect': 'past', 'past_perfect_progressive': 'past',
    'past_progressive': 'past',
    'present': 'present', 'present_progressive': 'present',
    'present_perfect': 'present', 'present_perfect_progressive': 'present',
    'future': 'future', 'future_perfect': 'future',
    'conditional': 'conditional', 'conditional_perfect': 'conditional',
}


def tense_of(span):
    """One of TENSES, or None when the span is not a classifiable verb phrase."""
    w = [x.lower() for x in words(span)]
    if not w:
        return None
    # Skip an adverb sitting between the auxiliary and the verb -- "has never been
    # supported", "would certainly have taken" -- so that it does not shift the
    # whole phrase out of recognition.
    w = [t for t in w if not (t.endswith('ly') or t in ('never', 'not', 'already',
                                                        'still', 'always', 'just',
                                                        'ever', 'then', 'now'))] or w
    a, rest = w[0], w[1:]
    nxt = rest[0] if rest else ''
    ing2 = len(rest) > 1 and rest[1].endswith('ing')
    if a == 'had':
        if not rest:
            return None
        return 'past_perfect_progressive' if (nxt == 'been' and ing2) else 'past_perfect'
    if a in ('has', 'have'):
        if not rest:
            return None
        return 'present_perfect_progressive' if (nxt == 'been' and ing2) \
            else 'present_perfect'
    if a in ('was', 'were'):
        return 'past_progressive' if nxt.endswith('ing') else 'past_simple'
    if a in ('is', 'are', 'am'):
        return 'present_progressive' if nxt.endswith('ing') else 'present'
    if a == 'will':
        return 'future_perfect' if nxt == 'have' else 'future'
    if a in ('would', 'could', 'should', 'might'):
        return 'conditional_perfect' if nxt == 'have' else 'conditional'
    if a in ('can', 'may', 'must', 'shall'):
        return None
    if len(w) == 1:
        t = w[0]
        if t in PAST_FORMS or (t.endswith('ed') and t not in NOT_VERB_S):
            return 'past_simple'
        if t.endswith('ing') or t in NOT_VERB_S:
            return None
        if t.endswith('s') and not t.endswith('ss') and not t.endswith('us'):
            return 'present'
        return None
    return None


def _want_tense(ctx):
    w = ctx.get('tense')
    if w:
        return {w} if isinstance(w, str) else set(w)
    return RULE_TENSE.get(ctx.get('rule'))


def wrong_tense(span, ctx):
    """The span's tense is not one the rule, or the exercise, will accept."""
    want = _want_tense(ctx)
    got = tense_of(span)
    if not want or got is None:
        return None
    return got not in want


def wrong_aspect(span, ctx):
    """Right time, wrong aspect: a progressive or a perfect where a simple is due."""
    want = _want_tense(ctx)
    got = tense_of(span)
    if not want or got is None:
        return None
    if got in want:
        return False
    times = {TIME.get(t) for t in want}
    if TIME.get(got) in times and TIME.get(got) is not None:
        return True
    return None


def nonfinite(span, ctx=None):
    """The span supplies no finite verb at all."""
    return not has_finite(span)


# ---------------------------------------------------------------------------
# finiteness
# ---------------------------------------------------------------------------
FINITE_AUX = (SING_AUX | PLUR_AUX | MODALS
              | {'had', 'am', 'did', 'was', 'were', 'is', 'are'})
# Finiteness is carried by the first auxiliary of a verb phrase, so a verb standing
# after one of these is a participle or an infinitive and not a finite verb of its
# own. Without this, "having collapsed" reads as finite because "collapsed" ends in
# -ed, which is the commonest way a fragment detector goes wrong.
NONFIN_GOV = {'to', 'having', 'been', 'being'}
PERF_AUX = {'have', 'has', 'had', 'is', 'are', 'was', 'were', 'am', 'be',
            'been', 'being'}
# Words that end in -ed and are not verbs. Without these, "a hundred and
# forty-six workers" reads as a finite clause because "hundred" ends in -ed, and
# the fragment detector then stays silent on a real fragment. Words in -eed are
# already excluded by the test below, which is why seed, need and breed are
# absent here.
NOT_VERB_ED = {'hundred', 'sacred', 'hatred', 'naked', 'wicked', 'red', 'bed',
               'sled', 'jagged', 'rugged', 'ragged', 'wretched', 'crooked',
               'hallowed', 'learned', 'beloved', 'aged', 'shed', 'zed'}


# Determiners, quantifiers and number words. An -s word standing after one of
# these is a plural noun, not a third-person verb: "a hundred and forty-six
# WORKERS" is not a clause, and without this test the fragment detector stayed
# silent on every fragment that ended in a plural. The test applies only when the
# preceding word is lower-case, so that a proper-noun subject is not mistaken for
# a determiner -- "Article Two GIVES" is a clause and must stay one.
# Determiners and adjectives, which are determiners whatever their case: a
# sentence-initial "The" is as much a determiner as a mid-sentence "the".
DET = {'a', 'an', 'the', 'this', 'that', 'these', 'those', 'some', 'any', 'all',
       'both', 'few', 'many', 'several', 'most', 'more', 'other', 'such', 'each',
       'every', 'no', 'its', 'their', 'our', 'my', 'his', 'her', 'first', 'second',
       'third', 'fourth', 'last', 'same', 'own', 'new', 'old', 'small', 'large',
       'long', 'short', 'full', 'whole', 'single', 'separate', 'surviving', 'deep',
       'early', 'late', 'rare', 'sealed', 'pure'}
# Number words and quantifiers, which count as determiners only in lower case,
# because a capitalized one is usually part of a name: "Article Two GIVES" is a
# clause, while "a hundred and forty-six WORKERS" is a noun phrase.
NUMQ = {'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
        'seventy', 'eighty', 'ninety', 'hundred', 'thousand', 'million', 'billion'}
_NUMWORD = re.compile(
    r'^(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen'
    r'|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty'
    r'|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|billion)'
    r'(-(one|two|three|four|five|six|seven|eight|nine))?$')


# Words after which an -s form is a plural noun rather than a verb: prepositions,
# coordinators and comparatives. "taking CENTURIES rather than DECADES" has no
# finite verb in it, and without this the fragment detector called it a clause.
S_SKIP = {'than', 'of', 'in', 'on', 'at', 'by', 'for', 'with', 'from', 'into',
          'over', 'under', 'between', 'among', 'through', 'about', 'after',
          'before', 'during', 'without', 'within', 'across', 'against', 'rather',
          'and', 'or', 'but', 'as', 'like', 'per', 'only', 'nor', 'toward'}


def _seg_finite(seg):
    """Whether one comma-free stretch of text can head a finite clause.

    The nonfinite scope matters: once to, having, been or being has opened a
    phrase, the verbs after it are participles however they are spelled, and
    they stay participles to the end of the stretch -- "having overshot and then
    CRASHED" is one phrase, not a clause with a past tense in it. Commas close
    the scope, which is why has_finite splits on them first: in "the engineers,
    having reviewed the plan, APPROVED it" the finite verb is outside the
    participial phrase and must still be found.
    """
    raw = words(seg)
    w = [x.lower() for x in raw]
    nonfin = False
    for i, t in enumerate(w):
        prev = w[i - 1] if i else ''
        prev_raw = raw[i - 1] if i else ''
        if t in NONFIN_GOV:
            nonfin = True
            continue
        if t in FINITE_AUX:
            if nonfin or prev in NONFIN_GOV:
                continue
            return True
        if t.endswith('ing') or t in NOT_VERB_S or nonfin:
            continue
        ends_s = t.endswith('s') and not t.endswith('ss') and not t.endswith('us')
        ends_ed = (t.endswith('ed') and not t.endswith('eed')
                   and t not in NOT_VERB_ED)
        # An -s or -ed word standing immediately after a determiner or a number is
        # a plural noun or an attributive participle, not a verb: "the SEALED
        # vessel", "a hundred and forty-six WORKERS". The lower-case test keeps a
        # proper-noun subject from being mistaken for a determiner.
        if (ends_s or ends_ed) and prev and (
                prev in DET
                or (prev_raw[:1].islower()
                    and (prev in NUMQ or prev in S_SKIP or _NUMWORD.match(prev)
                         or prev.endswith('ing') or prev in PARTICIPLES))):
            continue
        looks = t in PAST_FORMS or ends_ed or ends_s
        if looks and prev not in PERF_AUX:
            return True
    return False


def has_finite(span):
    """True when the span contains a word that can head a finite clause.

    Conservative in one direction only: a bare present-tense plural verb ("the
    grievances FILL the space") carries no mark that distinguishes it from a
    noun, so it is not recognised. Chapter 8's keys are therefore written with
    their finiteness on an auxiliary or a past form, which is a constraint on the
    content rather than a guess by the detector. For the same reason its fragment
    distractors hold no embedded relative clause: a noun phrase with a finite
    verb inside it is not a clause, and no detector short of a parser can say so.
    """
    return any(_seg_finite(seg) for seg in re.split(r'[,;:]', span or ''))


def fragment(span, ctx=None):
    return not has_finite(span)


def nonfinite_only(span, ctx=None):
    """Verb-like words are present but every one of them is a participle or infinitive."""
    w = [x.lower() for x in words(span)]
    if has_finite(span):
        return False
    verbish = [t for t in w if t.endswith('ing') or t in PARTICIPLES]
    if not verbish and 'to' not in w:
        return None
    return True


# ---------------------------------------------------------------------------
# pronouns
# ---------------------------------------------------------------------------
PRO = {
    'i': ('sing', 'subject'), 'me': ('sing', 'object'), 'my': ('sing', 'poss'),
    'mine': ('sing', 'poss'), 'myself': ('sing', 'reflex'),
    'we': ('plur', 'subject'), 'us': ('plur', 'object'), 'our': ('plur', 'poss'),
    'ours': ('plur', 'poss'), 'ourselves': ('plur', 'reflex'),
    'he': ('sing', 'subject'), 'him': ('sing', 'object'), 'his': ('sing', 'poss'),
    'himself': ('sing', 'reflex'),
    'she': ('sing', 'subject'), 'her': ('sing', 'ambig'), 'hers': ('sing', 'poss'),
    'herself': ('sing', 'reflex'),
    'it': ('sing', 'ambig'), 'its': ('sing', 'poss'), 'itself': ('sing', 'reflex'),
    'they': ('plur', 'subject'), 'them': ('plur', 'object'), 'their': ('plur', 'poss'),
    'theirs': ('plur', 'poss'), 'themselves': ('plur', 'reflex'),
    'who': (None, 'subject'), 'whom': (None, 'object'), 'whose': (None, 'poss'),
    # Demonstratives carry number as plainly as the personal pronouns. 'that' is
    # deliberately absent: it is also a relativizer and a conjunction, and a span
    # that merely contains the word would be misread as a singular demonstrative.
    'this': ('sing', 'det'), 'these': ('plur', 'det'), 'those': ('plur', 'det'),
}
RULE_CASE = {'subject_case': 'subject', 'object_case': 'object',
             'possessive_det': 'poss', 'who_subject': 'subject',
             'whom_object': 'object', 'reflexive_proper': 'reflex'}


def _pro(span):
    for t in [x.lower() for x in words(span)]:
        if t in PRO:
            return t
    return None


def pro_number(span, number):
    """The pronoun is in the number its antecedent is not.

    Only the unambiguous table is used. A singular 'they' with a human antecedent
    is accepted English and is never flagged, so chapter 3's singular items are
    written with non-human antecedents -- a sample, a committee, a species --
    where the plural pronoun really is the error the test tests.
    """
    t = _pro(span)
    if t is None or number not in ('sing', 'plur'):
        return None
    got = PRO[t][0]
    if got is None:
        return None
    return got != number


def pro_case(span, rule):
    want = RULE_CASE.get(rule)
    t = _pro(span)
    if t is None or want is None:
        return None
    got = PRO[t][1]
    if got == 'ambig':
        return None
    return got != want


def who_whom(span, rule):
    t = _pro(span)
    if t not in ('who', 'whom'):
        return None
    return pro_case(span, rule)


def reflexive_misuse(span, rule):
    """A reflexive standing where a plain pronoun belongs, or the reverse."""
    t = _pro(span)
    if t is None:
        return None
    is_reflex = PRO[t][1] == 'reflex'
    want_reflex = rule == 'reflexive_proper'
    return is_reflex != want_reflex


# ---------------------------------------------------------------------------
# apostrophes
# ---------------------------------------------------------------------------
APOS = "'’"


def _apos_shape(s):
    """The letters with apostrophes removed, and where each apostrophe sat."""
    out, pos = [], []
    for ch in s:
        if ch in APOS:
            pos.append(len(out))
        else:
            out.append(ch)
    return ''.join(out).lower(), tuple(pos)


def poss_missing(span, key):
    """The key marks possession at this point and the span does not."""
    k = any(c in APOS for c in key)
    s = any(c in APOS for c in span)
    if not k:
        return None
    return not s


def poss_misplaced(span, key):
    """Both mark possession, but the apostrophe sits on the wrong side of the s."""
    if not any(c in APOS for c in span) or not any(c in APOS for c in key):
        return None
    a, pa = _apos_shape(span)
    b, pb = _apos_shape(key)
    if a != b:
        return None
    return pa != pb


def plural_for_poss(span, key):
    """A plain plural where a possessive is due."""
    if not any(c in APOS for c in key) or any(c in APOS for c in span):
        return None if any(c in APOS for c in span) else None
    return span.rstrip('.').lower().endswith('s')


def poss_for_plural(span, key):
    """An apostrophe on a word that is only a plural."""
    if any(c in APOS for c in key):
        return None
    return any(c in APOS for c in span)


def wrong_plural(span, key):
    """A singular where the plural is due, or the reverse, with no apostrophe in it.

    The canonical item in this chapter offers all four of author, authors,
    author's and authors', and one of the four is wrong on number alone with no
    apostrophe anywhere in it. That is a distinct error from any misplaced
    apostrophe and it needed a name of its own.
    """
    if any(c in APOS for c in span) or any(c in APOS for c in key):
        return None
    a, b = span.strip().lower(), key.strip().lower()
    if a == b:
        return False
    for x, y in ((a, b), (b, a)):
        if y.startswith(x) and y[len(x):] in ('s', 'es'):
            return True
    return False


# ---------------------------------------------------------------------------
# punctuation and boundaries
# ---------------------------------------------------------------------------
DASH = '—–-'
SUBJ_START = {'he', 'she', 'it', 'they', 'we', 'i', 'this', 'that', 'these', 'those',
              'the', 'a', 'an', 'its', 'their', 'his', 'her', 'such', 'both', 'each'}
CONJ = {'and', 'but', 'or', 'nor', 'for', 'so', 'yet'}
SUBORD = {'although', 'though', 'because', 'since', 'while', 'whereas', 'if', 'unless',
          'after', 'before', 'when', 'whenever', 'until', 'as', 'once', 'where'}


def marks(s):
    """Counts of the marks that matter: comma, dash, open paren, close paren,
    semicolon, colon, period."""
    return dict(
        comma=s.count(','),
        dash=sum(s.count(d) for d in '—–') + len(re.findall(r'(?<![\w])-(?![\w])', s)),
        open=s.count('('), close=s.count(')'),
        semi=s.count(';'), colon=s.count(':'), period=s.count('.'))


def comma_splice(span, ctx):
    """A comma alone joining two independent clauses."""
    if not (ctx.get('left_independent') and ctx.get('right_independent')):
        return None
    m = marks(span)
    if m['semi'] or m['period'] or m['colon'] or m['dash']:
        return False
    w = [x.lower() for x in words(span)]
    if m['comma'] == 1 and not (set(w) & CONJ) and not (set(w) & SUBORD):
        return True
    return False


def run_on(span, ctx):
    """Two independent clauses with no mark at all between them."""
    if not (ctx.get('left_independent') and ctx.get('right_independent')):
        return None
    m = marks(span)
    if any(m[k] for k in ('comma', 'semi', 'period', 'colon', 'dash')):
        return False
    w = [x.lower() for x in words(span)]
    return not (set(w) & CONJ) and not (set(w) & SUBORD)


def unpaired(span, ctx):
    """One mark of a pair the supplement needs two of."""
    pair = ctx.get('pair')
    m = marks(span)
    if pair == 'comma':
        return m['comma'] == 1 and not m['dash'] and not m['open'] and not m['close']
    if pair == 'dash':
        return m['dash'] == 1
    if pair == 'paren':
        return (m['open'] + m['close']) == 1
    return None


def mismatched_pair(span, ctx):
    """Opened with one mark and closed with another."""
    pair = ctx.get('pair')
    if pair not in ('comma', 'dash', 'paren'):
        return None
    m = marks(span)
    kinds = sum(1 for k in ('comma', 'dash') if m[k]) + (1 if m['open'] or m['close'] else 0)
    if kinds < 2:
        return False
    if pair == 'dash':
        return m['dash'] == 1 and (m['comma'] >= 1 or m['open'] or m['close'])
    if pair == 'paren':
        return (m['open'] or m['close']) and (m['comma'] >= 1 or m['dash'] >= 1)
    if pair == 'comma':
        return m['comma'] >= 1 and (m['dash'] >= 1 or m['open'] or m['close'])
    return None


def colon_after_fragment(span, ctx):
    """A colon after words that do not make a clause."""
    if 'before_independent' not in ctx:
        return None
    if ':' not in span:
        return False
    return not ctx['before_independent']


def overpunctuated(span, ctx):
    """More marks than the construction takes."""
    want = ctx.get('marks_expected')
    if want is None:
        return None
    m = marks(span)
    got = m['comma'] + m['semi'] + m['colon'] + m['dash']
    return got > want


def wrong_mark(span, ctx):
    """A mark of the wrong kind in a place that admits only one kind."""
    ok = ctx.get('mark_ok')
    if ok is None:
        return None
    m = marks(span)
    present = {k for k in ('comma', 'semi', 'colon', 'dash', 'period') if m[k]}
    if not present:
        return None
    return bool(present - set(ok))


# ---------------------------------------------------------------------------
# parallelism
# ---------------------------------------------------------------------------
def form_of(span):
    """'infinitive', 'gerund', 'past_part', 'finite' or None."""
    w = [x.lower() for x in words(span)]
    if not w:
        return None
    if w[0] == 'to' and len(w) > 1:
        return 'infinitive'
    if w[0].endswith('ing'):
        return 'gerund'
    if w[0] in FINITE_AUX:
        return 'finite'
    if w[0] in PARTICIPLES or (w[0].endswith('ed') and not w[0].endswith('eed')):
        return 'past_part'
    return None


def faulty_parallel(span, ctx):
    want = ctx.get('form')
    got = form_of(span)
    if want is None or got is None:
        return None
    return got != want


mixed_form = faulty_parallel


# ---------------------------------------------------------------------------
# the registry
# ---------------------------------------------------------------------------
# Each entry says which context key the predicate needs. A move absent from this
# table has no honest predicate and is carried by its quoted span alone.
PREDICATES = {
    'wrong_number':      ('number', wrong_number),
    'agree_with_nearest': ('number', wrong_number),
    'wrong_tense':       ('ctx', wrong_tense),
    'tense_shift':       ('ctx', wrong_tense),
    'wrong_aspect':      ('ctx', wrong_aspect),
    'nonfinite':         ('ctx', nonfinite),
    'pro_number':        ('number', pro_number),
    'pro_case':          ('rule', pro_case),
    'who_whom':          ('rule', who_whom),
    'reflexive_misuse':  ('rule', reflexive_misuse),
    'poss_missing':      ('key', poss_missing),
    'poss_misplaced':    ('key', poss_misplaced),
    'plural_for_poss':   ('key', plural_for_poss),
    'poss_for_plural':   ('key', poss_for_plural),
    'wrong_plural':      ('key', wrong_plural),
    'fragment':          ('ctx', fragment),
    'nonfinite_only':    ('ctx', nonfinite_only),
    'comma_splice':      ('ctx', comma_splice),
    'run_on':            ('ctx', run_on),
    'unpaired':          ('ctx', unpaired),
    'mismatched_pair':   ('ctx', mismatched_pair),
    'colon_after_fragment': ('ctx', colon_after_fragment),
    'overpunctuated':    ('ctx', overpunctuated),
    'wrong_mark':        ('ctx', wrong_mark),
    'faulty_parallel':   ('ctx', faulty_parallel),
    'mixed_form':        ('ctx', mixed_form),
}
# Moves with no predicate, named here so the check can tell "no detector" from
# "detector missing by mistake". PLAN.md section 7.
NO_PREDICATE = {
    'dangler', 'misplaced', 'squinting', 'agent_mismatch', 'pro_vague', 'person_shift',
    'near_miss', 'restatement', 'no_relation', 'wrong_direction', 'wrong_goal',
    'true_not_asked', 'imported', 'underreach', 'overreach', 'misread_row',
    'reversed_comparison', 'restrictive_shift', 'wrong_relativizer', 'loose_subordinate',
    'missing_subject', 'incomplete_comparison', 'unbalanced_correlative',
    'missing_series_mark',
}


def predict(move, span, ctx):
    """Run the predicate for a move. Returns True, False or None."""
    ent = PREDICATES.get(move)
    if ent is None:
        return None
    need, fn = ent
    if need == 'number':
        return fn(span, ctx.get('number'))
    if need == 'rule':
        return fn(span, ctx.get('rule'))
    if need == 'key':
        return fn(span, ctx.get('key_option', ''))
    return fn(span, ctx)


# ---------------------------------------------------------------------------
# tests
# ---------------------------------------------------------------------------
def _tests():
    T = []

    def eq(got, want, label):
        T.append((label, got == want, '%r, wanted %r' % (got, want)))

    # number
    eq(number_of('comes'), 'sing', 'number_of comes')
    eq(number_of('come'), None, 'number_of come is unclassifiable alone')
    eq(number_of('is rising'), 'sing', 'number_of is rising')
    eq(number_of('are rising'), 'plur', 'number_of are rising')
    eq(number_of('have come'), 'plur', 'number_of have come')
    eq(number_of('could come'), None, 'a modal carries no number')
    eq(number_of('species'), None, 'species is not read as a verb')
    eq(number_of('analysis'), None, 'analysis is not read as a verb')
    eq(wrong_number('comes', 'plur'), True, 'comes against a plural subject')
    eq(wrong_number('comes', 'sing'), False, 'comes against a singular subject')
    eq(wrong_number('came', 'plur'), None, 'a past form has no number to be wrong in')
    eq(wrong_number('must come', 'plur'), None, 'a modal is never a number fault')

    # tense
    eq(tense_of('had surveyed'), 'past_perfect', 'tense_of had surveyed')
    eq(tense_of('has surveyed'), 'present_perfect', 'tense_of has surveyed')
    eq(tense_of('surveyed'), 'past_simple', 'tense_of surveyed')
    eq(tense_of('surveys'), 'present', 'tense_of surveys')
    eq(tense_of('was surveying'), 'past_progressive', 'tense_of was surveying')
    eq(tense_of('is surveying'), 'present_progressive', 'tense_of is surveying')
    eq(tense_of('will survey'), 'future', 'tense_of will survey')
    eq(tense_of('would survey'), 'conditional', 'tense_of would survey')
    eq(tense_of('wrote'), 'past_simple', 'an irregular past is recognised')
    eq(tense_of('written'), None, 'a bare participle is left unclassified')
    eq(tense_of('have been asking'), 'present_perfect_progressive',
       'a present perfect progressive is not a present progressive')
    eq(tense_of('had been running'), 'past_perfect_progressive', 'tense_of had been running')
    eq(tense_of('would have taken'), 'conditional_perfect', 'tense_of would have taken')
    eq(tense_of('has never been supported'), 'present_perfect',
       'an adverb between auxiliary and verb does not hide the tense')
    R = lambda r: dict(rule=r)
    eq(wrong_tense('surveyed', R('past_perfect_sequence')), True,
       'a simple past where the sequence needs a past perfect')
    eq(wrong_tense('had surveyed', R('past_perfect_sequence')), False,
       'the past perfect the rule asks for')
    eq(wrong_tense('had been surveying', R('past_perfect_sequence')), False,
       'the past perfect progressive the same rule also accepts')
    eq(wrong_tense('have been asking', R('present_perfect_continuing')), False,
       'the present perfect progressive a continuing action may take')
    eq(wrong_tense('would have taken', R('conditional_sequence')), False,
       'a conditional perfect after a past unreal condition')
    eq(wrong_tense('would take', dict(rule='conditional_sequence',
                                      tense='conditional_perfect')), True,
       'the exercise may narrow the rule to the one form its carrier allows')
    eq(wrong_tense('surveyed', R('nonsuch_rule')), None, 'an unknown rule gives no verdict')
    eq(wrong_aspect('was surveying', R('past_simple')), True,
       'a past progressive where a simple past is due')
    eq(wrong_aspect('surveyed', R('past_simple')), False, 'the aspect the rule asks for')
    eq(wrong_aspect('would take', dict(rule='conditional_sequence',
                                       tense='conditional_perfect')), True,
       'a plain conditional where a conditional perfect is due')
    eq(wrong_aspect('has surveyed', R('past_perfect_sequence')), None,
       'a different time is a wrong tense, not a wrong aspect')

    # finiteness
    eq(has_finite('had collapsed'), True, 'had is finite')
    eq(has_finite('collapsing under its own weight'), False, 'a participle is not finite')
    eq(has_finite('which collapsed in 1889'), True, 'collapsed is finite')
    eq(fragment('having collapsed'), True, 'fragment on a perfect participle')
    eq(nonfinite_only('having collapsed'), True, 'nonfinite_only on a participle')
    eq(nonfinite_only('collapsed'), False, 'a finite verb is not nonfinite_only')

    # pronouns
    eq(pro_number('their', 'sing'), True, 'their for a singular non-human antecedent')
    eq(pro_number('its', 'sing'), False, 'its for a singular antecedent')
    eq(pro_number('its', 'plur'), True, 'its for a plural antecedent')
    eq(pro_number('her', 'plur'), True, 'her for a plural antecedent: number is not ambiguous')
    eq(pro_number('these', 'sing'), True, 'a plural demonstrative for a singular antecedent')
    eq(pro_number('this', 'plur'), True, 'a singular demonstrative for a plural antecedent')
    eq(_pro('that the committee'), None, 'the relativizer that is never read as a pronoun')
    eq(pro_case('her', 'object_case'), None, 'her is case-ambiguous, so case is left alone')
    eq(has_finite('to have collapsed'), False, 'an infinitive perfect is not finite')
    eq(has_finite('has collapsed'), True, 'a perfect with a finite auxiliary is finite')
    eq(has_finite('the engineers, having reviewed the plan, approved it'), True,
       'a finite verb after a participial phrase is still found')
    eq(has_finite('having killed a hundred and forty-six workers'), False,
       'hundred is not read as a past-tense verb')
    eq(nonfinite_only('having killed a hundred workers'), True,
       'nonfinite_only is not defeated by a word ending in -ed')
    eq(has_finite('a sacred and naked truth'), False, 'nor are sacred and naked')
    eq(has_finite('Article Two gives the executive power to one person'), True,
       'a proper-noun subject before an -s verb is not read as a determiner')
    eq(has_finite('the grievances filled everything between them'), True,
       'a plural noun after a determiner does not block a real past-tense verb')
    eq(has_finite('filling everything between them'), False,
       'a participial phrase is not finite')
    eq(has_finite('none of them being surrendered until after a second war'), False,
       'a passive participle under being is not finite')
    eq(has_finite('having overshot and then crashed'), False,
       'a participle coordinated inside a perfect phrase stays nonfinite')
    eq(has_finite('taking centuries rather than decades'), False,
       'plural nouns after a gerund and after than are not verbs')
    eq(has_finite('having taken centuries rather'), False,
       'nor is a plural noun after a past participle')
    eq(has_finite('the engineers, having reviewed the plan, approved it'), True,
       'a comma closes the nonfinite scope, so the later finite verb is found')
    eq(has_finite('acts'), True, 'a bare third-person -s form standing alone is finite')
    eq(has_finite('The sealed vessel being weighed'), False,
       'an attributive participle after a determiner is not a finite verb')
    eq(has_finite('the work done on it became internal energy'), True,
       'but a real past tense later in the span is still found')
    eq(has_finite('the seed needed water'), True, 'a real -eed verb is still finite')
    eq(pro_case('whom', 'who_subject'), True, 'whom in a subject position')
    eq(pro_case('who', 'who_subject'), False, 'who in a subject position')
    eq(who_whom('who', 'whom_object'), True, 'who in an object position')
    eq(who_whom('they', 'whom_object'), None, 'who_whom ignores other pronouns')
    eq(reflexive_misuse('himself', 'object_case'), True, 'a reflexive for an object')
    eq(reflexive_misuse('him', 'reflexive_proper'), True, 'an object where a reflexive is due')
    eq(reflexive_misuse('himself', 'reflexive_proper'), False, 'the reflexive the rule asks for')

    # apostrophes
    eq(poss_missing('authors', "author's"), True, 'no apostrophe where one is due')
    eq(poss_missing("author's", "author's"), False, 'the apostrophe is present')
    eq(poss_misplaced("author's", "authors'"), True, 'apostrophe on the wrong side of the s')
    eq(poss_misplaced("authors'", "authors'"), False, 'apostrophe correctly placed')
    eq(poss_misplaced('authors', "authors'"), None, 'no apostrophe at all is a different fault')
    eq(plural_for_poss('composers', "composer's"), True, 'a plain plural for a possessive')
    eq(poss_for_plural("composer's", 'composers'), True, 'an apostrophe on a plain plural')
    eq(poss_for_plural('composers', 'composers'), False, 'a plain plural where one is due')
    eq(wrong_plural('composer', 'composers'), True, 'a singular where the plural is due')
    eq(wrong_plural('composers', 'composer'), True, 'a plural where the singular is due')
    eq(wrong_plural('composers', 'composers'), False, 'the number the sentence asks for')
    eq(wrong_plural("composer's", 'composers'), None,
       'an apostrophe makes it a different fault, not a number fault')

    # boundaries
    ind = dict(left_independent=True, right_independent=True)
    eq(comma_splice(', it', ind), True, 'a comma joining two clauses')
    eq(comma_splice(', and it', ind), False, 'a comma with a conjunction is not a splice')
    eq(comma_splice('; it', ind), False, 'a semicolon is not a splice')
    eq(comma_splice(', it', {}), None, 'without a declared clause structure there is no verdict')
    eq(run_on(' it', ind), True, 'no mark at all between two clauses')
    eq(run_on(', it', ind), False, 'a comma is not a run-on')
    eq(unpaired(', a geologist', dict(pair='comma')), True, 'one comma of a pair')
    eq(unpaired(', a geologist,', dict(pair='comma')), False, 'both commas present')
    eq(unpaired('—a geologist', dict(pair='dash')), True, 'one dash of a pair')
    eq(mismatched_pair('—a geologist,', dict(pair='dash')), True, 'dash opened, comma closed')
    eq(mismatched_pair('—a geologist—', dict(pair='dash')), False, 'a matched dash pair')
    eq(colon_after_fragment(': iron, tin', dict(before_independent=False)), True,
       'a colon after a fragment')
    eq(colon_after_fragment(': iron, tin', dict(before_independent=True)), False,
       'a colon after a clause')
    eq(wrong_mark(';', dict(mark_ok=['comma'])), True, 'a semicolon where only a comma serves')
    eq(wrong_mark(',', dict(mark_ok=['comma'])), False, 'the mark the construction takes')
    eq(overpunctuated(', and,', dict(marks_expected=1)), True, 'two marks where one is due')

    # parallelism
    eq(form_of('to measure'), 'infinitive', 'form_of to measure')
    eq(form_of('measuring'), 'gerund', 'form_of measuring')
    eq(faulty_parallel('to measure', dict(form='gerund')), True,
       'an infinitive in a series of gerunds')
    eq(faulty_parallel('measuring', dict(form='gerund')), False, 'the form the series takes')
    eq(faulty_parallel('a balance', dict(form='gerund')), None, 'a bare noun gives no verdict')

    # the registry
    eq(predict('wrong_number', 'comes', dict(number='plur')), True, 'predict routes by number')
    eq(predict('poss_missing', 'authors', dict(key_option="author's")), True,
       'predict routes by key')
    eq(predict('dangler', 'anything', {}), None, 'a move with no predicate returns None')
    eq(set(PREDICATES) & NO_PREDICATE, set(), 'no move is both detected and undetected')

    bad = [(l, d) for l, ok, d in T if not ok]
    for l, d in bad:
        print('FAIL  %-62s %s' % (l, d))
    print('wlex self-test: %d/%d passes' % (len(T) - len(bad), len(T)))
    return not bad


if __name__ == '__main__':
    import sys
    sys.exit(0 if _tests() else 1)
