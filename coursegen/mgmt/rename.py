# -*- coding: utf-8 -*-
"""Rename duplicated vocabulary terms in the later book of each pair."""
import io, os, re, sys

MAP = [
 ('B12', 'u06', 'label', 'a field name'),
 ('B12', 'u03', 'output', 'a deliverable'),
 ('B21', 'u03', 'representative', 'typical of the whole'),
 ('B22', 'u10', 'anchor', 'an opening figure'),
 ('B22', 'u10', 'premium', 'an uplift'),
 ('B22', 'u10', 'volume', 'quantity sold'),
 ('C11', 'u01', 'aggregate', 'a grand total'),
 ('C11', 'u01', 'bespoke', 'tailor-made'),
 ('C11', 'u01', 'cumulative', 'additive'),
 ('C11', 'u01', 'hindsight', 'retrospect'),
 ('C11', 'u01', 'instance', 'a repetition'),
 ('C11', 'u01', 'one-off', 'non-recurring'),
 ('C11', 'u01', 'recurrence', 'periodicity'),
 ('C11', 'u01', 'tally', 'an enumeration'),
 ('C11', 'u02', 'break-even', 'full cost recovery'),
 ('C11', 'u02', 'scalable', 'volume-insensitive'),
 ('C11', 'u03', 'in-house', 'internally built'),
 ('C11', 'u04', 'headroom', 'spare capacity'),
 ('C11', 'u04', 'throughput', 'completed volume'),
 ('C11', 'u05', 'continuity', 'unbroken operation'),
 ('C11', 'u05', 'provenance', 'a lineage'),
 ('C11', 'u05', 'retention', 'tenure'),
 ('C11', 'u05', 'succession', 'a handover plan'),
 ('C11', 'u06', 'discretion', 'elbow room'),
 ('C11', 'u06', 'drift', 'creep'),
 ('C11', 'u06', 'variance', 'dispersion'),
 ('C11', 'u07', 'redundancy', 'a role closure'),
 ('C11', 'u08', 'latency', 'a waiting time'),
 ('C11', 'u08', 'lead time', 'the committed interval'),
 ('C11', 'u08', 'sign-off', 'a release decision'),
 ('C11', 'u08', 'workload', 'assigned volume'),
 ('C11', 'u08', 'turnaround', 'end-to-end time'),
 ('C11', 'u10', 'goodwill', 'intangible value'),
 ('C11', 'u10', 'trust', 'standing'),
 ('C11', 'u10', 'undifferentiated', 'substitutable'),
 ('C12', 'u01', 'fault', 'blameworthiness'),
 ('C12', 'u01', 'liability', 'legal exposure'),
 ('C12', 'u01', 'oversight', 'supervision'),
 ('C12', 'u02', 'disclosure', 'production of documents'),
 ('C12', 'u02', 'metadata', 'record attributes'),
 ('C12', 'u04', 'bias', 'systematic distortion'),
 ('C12', 'u05', 'forbearance', 'restraint'),
 ('C12', 'u06', 'fluency', 'facility'),
 ('C12', 'u07', 'grounds', 'a stated basis'),
 ('C12', 'u07', 'opacity', 'inscrutability'),
 ('C12', 'u07', 'traceability', 'auditability'),
 ('C12', 'u09', 'acknowledgement', 'recognition'),
 ('C12', 'u09', 'empathy', 'fellow feeling'),
 ('C12', 'u09', 'familiarity', 'long acquaintance'),
 ('C12', 'u09', 'grace', 'generosity of manner'),
 ('C12', 'u09', 'loyalty', 'steadfastness'),
 ('C12', 'u09', 'rapport', 'an easy footing'),
 ('C12', 'u09', 'reciprocity', 'returned consideration'),
 ('C12', 'u09', 'sincerity', 'earnestness'),
 ('C12', 'u09', 'tact', 'diplomacy'),
 ('C12', 'u09', 'warmth', 'cordiality'),
 ('C12', 'u10', 'candour', 'frankness'),
 ('C12', 'u10', 'instinct', 'a gut sense'),
 ('C12', 'u10', 'ownership', 'taking the consequence'),
]

ART = re.compile(r'^(a|an|the) ')


def base(t):
    return ART.sub('', t)


def artform(t):
    b = base(t)
    if t != b:
        return t
    return ('an ' if b[0] in 'aeiou' else 'a ') + b


def variants(old, new):
    bo, bn = base(old), base(new)
    out = {old: new, bo: bn, artform(old): artform(new),
           'a ' + bo: artform(new), 'an ' + bo: artform(new),
           'the ' + bo: 'the ' + bn}
    return sorted(out.items(), key=lambda kv: -len(kv[0]))


HERE = os.path.dirname(os.path.abspath(__file__))
n = 0
for code, u, old, new in MAP:
    p = os.path.join(HERE, 'units', code, u + '.py')
    s = io.open(p, encoding='utf-8').read()
    hits = 0
    for a, b in variants(old, new):
        q = "'" + a + "'"
        if q in s:
            hits += s.count(q)
            s = s.replace(q, "'" + b + "'")
    io.open(p, 'w', encoding='utf-8').write(s)
    print('%s/%s  %-18s -> %-24s  %d quoted occurrence(s)' % (code, u, old, new, hits))
    n += 1
print('renamed', n)
