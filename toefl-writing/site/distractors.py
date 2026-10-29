# -*- coding: utf-8 -*-
"""Generated fault-finding sets (checking tier D).

The three numbered faults in an item's own key are the correct answers.
Three distractors are drawn from other items so the exercise is a real
choice rather than a reveal.

Two guards keep a distractor from accidentally being true of this item:

  1. distractors come from the other written task, so an email item is
     never offered a fault written about its own scenario;
  2. a candidate is only used if it quotes text ("...") that does not
     appear anywhere in this item's band-3 version - which is what makes
     it verifiably not a fault of this item.

Selection is seeded by item id, so the build is reproducible.
"""
import random
import re

QUOTED = re.compile('[“”"]([^“”"]{4,})[“”"]')


def smarten(text):
    """Curl straight quotes.

    Without this the generated options are typographically distinguishable
    from the authored ones, and a student can pick the three correct
    faults without reading a word of them.
    """
    out, open_q = [], True
    for ch in text:
        if ch == '"':
            out.append('\u201c' if open_q else '\u201d')
            open_q = not open_q
        else:
            out.append(ch)
    return ''.join(out)


def _quotes(text):
    return [m.group(1).lower() for m in QUOTED.finditer(text)]


def build(exercises):
    """Attach a 'faultset' to every email and discussion exercise."""
    pool = {'em': [], 'ad': []}
    for e in exercises:
        if e['task'] == 'bas' or not e.get('fault_list'):
            continue
        for text in e['fault_list']['faults']:
            pool[e['task']].append({'from': e['id'], 'text': text})

    made, skipped = 0, []
    for e in exercises:
        if e['task'] == 'bas' or not e.get('fault_list'):
            continue
        other = 'ad' if e['task'] == 'em' else 'em'
        own = ' '.join(e['degraded']).lower()
        own_faults = {f.lower() for f in e['fault_list']['faults']}

        usable = []
        for cand in pool[other]:
            if cand['text'].lower() in own_faults:
                continue
            qs = _quotes(cand['text'])
            if not qs:
                continue
            if any(q in own for q in qs):
                continue
            usable.append(cand)

        rng = random.Random('faultset:' + e['id'])
        rng.shuffle(usable)
        picked = usable[:3]
        if len(picked) < 3:
            skipped.append(e['id'])
            e['faultset'] = None
            continue

        options = ([{'text': smarten(f), 'correct': True}
                    for f in e['fault_list']['faults']]
                   + [{'text': smarten(c['text']), 'correct': False}
                      for c in picked])
        rng.shuffle(options)
        e['faultset'] = {'options': options,
                         'key_html': e['fault_list']['tag']}
        made += 1
    return made, skipped
