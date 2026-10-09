#!/usr/bin/env python3
"""Seed B1/ledgers/ from A2's final state.

cast.yaml is derived, not re-typed: the same six principals and twenty walk-ons
at the same address, every A2 fact kept (it is still true), every age raised by two, and
each A2 age recorded in `ages_also` so F04 accepts a sentence written at either
level. grammar.yaml and lexis.yaml are B1's own and are written in full below,
because the points and the glossary are the syllabus rather than a derivation.
"""
from __future__ import annotations
import os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
A2 = os.path.join(os.path.dirname(ROOT), 'A2')


def cast():
    t = open(os.path.join(A2, 'ledgers', 'cast.yaml'), encoding='utf-8').read()
    hdr = """# B1's cast ledger. DERIVED from ../A2/ledgers/cast.yaml by
# tools/make_b1_ledgers.py: the same six people at the same address, two
# years on. Every A2 fact is kept, because it is still true -- what Maya did at
# A2 Unit 1 is what she did. Every age is raised by two, and the A2 age is
# recorded in `ages_also`, so F04 accepts a sentence written at either level
# without either level having to be re-checked. Append B1 facts under each
# person as they are written, with the unit in brackets, exactly as A2 did.
"""
    # bump ages, remembering the A2 value
    def bump(m):
        old = int(m.group(2))
        return f'{m.group(1)}age: {old + 2}'
    out = []
    for line in t.split('\n'):
        m = re.match(r'^(\s+)age: (\d+)$', line)
        if m:
            old = int(m.group(2))
            out.append(f'{m.group(1)}age: {old + 2}')
            out.append(f'{m.group(1)}ages_also: [{old}]        '
                       f'# {old} at A2; F04 accepts both')
        else:
            out.append(line)
    body = '\n'.join(out)
    # keep any ages_also A2 already carried by merging, not duplicating
    body = re.sub(r'^(\s+)ages_also: \[(\d+)\]        (# .*)\n\1ages_also: \[([\d, ]+)\]$',
                  r'\1ages_also: [\2, \4]        \3', body, flags=re.M)
    body = body.split('\n', 2)[2] if body.startswith('#') else body
    # drop A2's own header comment block, keep everything from `address:`
    i = body.index('address:')
    return hdr + body[i:]


GRAMMAR = r"""# B1's grammar spine. Each point is introduced exactly once (K09); nothing
# appears before the unit that teaches it (E06).
#
# `extends` is new at B1 and is the subtlety that would otherwise bite. At A2 a
# marker appearing early was simply illegal, because nothing had been taught. At
# B1 eight of the twenty points EXTEND an A2 point rather than introduce one, so
# every B1 marker must match the extension and not the family: `had \w+ed`, not
# `\bsaid\b`; `would have \w+ed`, not `\bif\b`. Reported speech is legal from
# B1 Unit 1 because A2 Unit 20 taught it; BACKSHIFT is not legal until B1
# Unit 16.
book: {B1.1: [1, 10], B1.2: [11, 20]}

# Part 8's twenty countries. F12 reads this list; at A2 it was hardcoded in the
# check, which was fine while one level existed and would have made B1's Part 8
# re-use A2's twenty. Not one of these appears in A2.
countries:
  - Argentina      # U1  the night the power went out
  - Finland        # U2  how long have you been waiting
  - Nepal          # U3  by the time they told us
  - Tunisia        # U4  what the rent used to be
  - Australia      # U5  this time next year
  - Colombia       # U6  if the money came tomorrow
  - Estonia        # U7  the flat they didn't take
  - Philippines    # U8  something in the garden
  - Chile          # U9  we should have read the reviews
  - Senegal        # U10 learning something at forty
  - Bangladesh     # U11 where it was made
  - Denmark        # U12 giving up the phone
  - Thailand       # U13 too many people
  - Jamaica        # U14 nothing like the picture
  - Italy          # U15 the name on the bridge
  - Rwanda         # U16 what the group chat said
  - Turkey         # U17 asking the council
  - Uruguay        # U18 fixing it ourselves
  - Sri Lanka      # U19 somebody ought to say something
  - Croatia        # U20 putting a case

# The city a unit's Part 8 actually names, so F12 can identify the country from
# the story rather than from a sentence inserted to satisfy the check. At A2
# this map was hardcoded in family_f; at B1 it is data, like the list above.
country_cities:
  Argentina:   [Buenos Aires, Rosario]
  Finland:     [Helsinki, Tampere]
  Nepal:       [Kathmandu, Pokhara]
  Tunisia:     [Tunis, Sfax]
  Australia:   [Adelaide, Perth]
  Colombia:    [Medellin, Medellín, Cali]
  Estonia:     [Tallinn, Tartu]
  Philippines: [Cebu, Davao]
  Chile:       [Valparaiso, Valparaíso, Santiago]
  Senegal:     [Dakar, Thies]
  Bangladesh:  [Dhaka, Khulna]
  Denmark:     [Aarhus, Odense]
  Thailand:    [Chiang Mai, Bangkok]
  Jamaica:     [Kingston, Montego Bay]
  Italy:       [Bologna, Turin]
  Rwanda:      [Kigali, Butare]
  Turkey:      [Izmir, İzmir, Bursa]
  Uruguay:     [Montevideo, Salto]
  Sri Lanka:   [Kandy, Galle]
  Croatia:     [Rijeka, Split]
spine:
  1:  {point: "past continuous vs past simple - while/when", topic: "The Afternoon Everything Happened at Once",
       cefrj: [TA.PASTPRG], extends: "A2 U5-6 past simple"}
  2:  {point: "present perfect continuous - how long, for, since", topic: "Still Waiting",
       cefrj: [TA.PRPFPRG], extends: "A2 U15-16 present perfect"}
  3:  {point: "past perfect - by the time, before, after", topic: "Nobody Told Us",
       cefrj: [TA.PASTPF], extends: "A2 U15-16 present perfect"}
  4:  {point: "used to / would for past habit", topic: "What This Street Used to Be",
       cefrj: [MD.used_to], extends: null}
  5:  {point: "future forms contrasted + future continuous", topic: "The Year the Street Gets Dug Up",
       cefrj: [TA.FUT, TA.FUTPRG], extends: "A2 U11-12 going to / will"}
  6:  {point: "second conditional", topic: "If We Had the Money",
       cefrj: [SUBJ.PAST], extends: "A2 U18 first conditional"}
  7:  {point: "third conditional", topic: "The Ones That Got Away",
       cefrj: [SUBJ.PASTPF], extends: "A2 U18 first conditional"}
  8:  {point: "modals of deduction - must/might/may/can't be", topic: "Somebody's Been Here",
       cefrj: [MD.must, MD.might, MD.may], extends: "A2 U13 must for obligation"}
  9:  {point: "should have / ought to / had better", topic: "We Should Have Checked",
       cefrj: [MD.MD_PF, MD.ought_to], extends: "A2 U14 should for advice"}
  10: {point: "be able to / manage to", topic: "Starting Something at Forty",
       cefrj: [MD.be_able_to, IMP.V.NEG, IMP.do_V], extends: "A2 U8 can/could"}
  11: {point: "passive extended - perfect, future, modal, get + pp", topic: "Where Everything Comes From",
       cefrj: [PASS.MD, PASS.get_VN, PASS.IO], extends: "A2 U17 active and passive"}
  12: {point: "gerunds and infinitives - -ing vs to, not to do", topic: "A Week Without It",
       cefrj: [TO.not_to_do, VG.P, VN.P, VP.SV.AFF], extends: null}
  13: {point: "too ... to / so ... that", topic: "Too Many, Too Few",
       cefrj: [RBDEG.too_to, RBDEG.so_JJ, EXCL.how_JJ.RB], extends: null}
  14: {point: "comparison refined - not as ... as, intensified, -er and -er", topic: "Nothing Like the Picture",
       cefrj: [COMP.EQ, COMP.even_JJR, COMP.and, DT.these.those_N, PPOS.mine.etc],
       extends: "A2 U7 comparatives and superlatives"}
  15: {point: "non-defining relatives + where/when/whose", topic: "The Names on the Street",
       cefrj: [PREL.NR, RBREL.NR, RBREL.NOANT], extends: "A2 U19 defining relative clauses"}
  16: {point: "reported speech in full - backshift, reported questions and commands", topic: "What the Group Chat Said",
       cefrj: [INDSP.tell, INDQ.ask, CAUS.ask, VP.SVOtoO.AFF], extends: "A2 U20 reported speech"}
  17: {point: "indirect questions and question tags", topic: "Asking the Council",
       cefrj: [CL.WH.OBJ, TO.WH_to_do, TAG.AFF, TAG.NEG, "INTF.can't_you", INTF.could_you,
               "INTF.couldn't_you", "INTF.won't_you", "INTF.wouldn't_you", INTF.may_I],
       extends: "A2 U20 indirect questions"}
  18: {point: "reflexives, each other, -thing/-body compounds, others", topic: "Fixing It Ourselves",
       cefrj: [PREFL.oneself.etc, PREF.each_other, NN.thing_JJ, P.others], extends: null}
  19: {point: "it + be + adj + to-infinitive; there + modal + be", topic: "Somebody Ought to Say Something",
       cefrj: [PP.it_to_do, EX.there.MD], extends: "A2 U2 there is/are"}
  20: {point: "adverbs of attitude and discourse linkers", topic: "Putting a Case",
       cefrj: [RB.ATT], extends: null}


# Every CEFR-J B1 row's disposition. K21 reads
# spec/wordlists/source/grammar.csv, resolves each B1 row's shorthand family,
# and fails if a family is absent here. `taught` means a unit presents it as
# new; `recycled` means it is an A1/A2 form the profile places at B1.1 on
# frequency, and is NAMED in a Grammar Focus Box rather than drilled -- teaching
# imperatives as new at B1 would be the regression this project exists to
# prevent.
cefrj_disposition:
  CAUS:  {how: taught,   unit: 16}
  CL:    {how: taught,   unit: 17}
  COMP:  {how: taught,   unit: 14}
  DT:    {how: recycled, unit: 14, a2: 'A1 determiners'}
  EX:    {how: taught,   unit: 19}
  EXCL:  {how: taught,   unit: 13}
  IMP:   {how: recycled, unit: 10, a2: 'A2 U10 imperatives'}
  INDQ:  {how: taught,   unit: 16}
  INDSP: {how: taught,   unit: 16}
  INTF:  {how: taught,   unit: 17}
  MD:    {how: taught,   unit: 8}
  NN:    {how: taught,   unit: 18}
  P:     {how: taught,   unit: 18}
  PASS:  {how: taught,   unit: 11}
  PP:    {how: taught,   unit: 19}
  PPOS:  {how: recycled, unit: 14, a2: 'A2 possessive pronouns'}
  PREF:  {how: taught,   unit: 18}
  PREFL: {how: taught,   unit: 18}
  PREL:  {how: taught,   unit: 15}
  RB:    {how: taught,   unit: 20}
  RBDEG: {how: taught,   unit: 13}
  RBREL: {how: taught,   unit: 15}
  SUBJ:  {how: taught,   unit: 6}
  TA:    {how: taught,   unit: 1}
  TAG:   {how: taught,   unit: 17}
  TO:    {how: taught,   unit: 12}
  VG:    {how: taught,   unit: 12}
  VN:    {how: taught,   unit: 12}
  VP:    {how: recycled, unit: 12, a2: 'A1 sentence patterns'}

# Markers that betray a B1 point. Each one matches the EXTENSION, never the
# family: see the header. E06 fails if a marker appears before its unit, unless
# the phrase is on the exempt list.
markers:
  # Past continuous: the auxiliary plus -ing, not every -ing.
  1:  ['\b(was|were)\s+(?:not\s+|n.t\s+)?\w+ing\b',
       '\bwhile\s+\w+\s+(was|were)\b']
  2:  ['\b(has|have|had)\s+been\s+\w+ing\b']
  # Past perfect: had plus a participle. `had to` is A2 U13 and must not trip.
  3:  ['\bhad\s+(?:just|already|never|ever|only|not|n.t)?\s*(been|had|seen|done|made|gone|taken|written|eaten|thought|found|brought|bought|caught|taught|left|kept|lost|met|told|read|put|come|run|begun|spoken|known|given|chosen|driven|forgotten|broken|won|sent|built|felt|held|heard|said|sat|stood|understood|become|grown|drawn|flown|worn|shown|thrown|slept|paid|stolen|\w+ed)\b',
       '\bby the time\b']
  4:  ['\bused to\s+\w+', '\bdidn.t use to\b',
       '\bwould\s+(always|often|usually|sometimes)\b']
  5:  ['\b(will|.ll)\s+be\s+\w+ing\b', '\bby then\b', '\bthis time next\b']
  # Second conditional: an if-clause with a past form and would in the other half.
  6:  ['\bif\b[^.!?]{0,90}\bwould\b', '\bif I (were|was)\b', '\bI.d\s+\w+\s+if\b']
  7:  ['\bif\b[^.!?]{0,90}\bwould have\b', '\bhad\b[^.!?]{0,60}\bwould have\b',
       '\bwould(n.t)? have \w+']
  8:  ['\b(must|might|may|can.t|could)\s+(be|have been)\b']
  9:  ['\bshould(n.t)? have \w+', '\bought to\b', '\bhad better\b']
  10: ['\b(am|is|are|was|were|been|be)\s+able to\b', '\bmanaged? to\b']
  11: ['\b(has|have|had)\s+been\s+\w+ed\b', '\bwill be \w+ed\b',
       '\b(can|could|must|should|might)\s+be\s+\w+ed\b', '\bgot?\s+\w+ed\s+by\b']
  12: ['\b(enjoy|avoid|mind|finish|keep|give up|suggest|consider)\s+\w+ing\b',
       '\bdecided not to\b', '\btold \w+ not to\b']
  13: ['\btoo\s+\w+\s+to\s+\w+', '\bso\s+\w+\s+that\b', '\bHow\s+\w+\b.*!']
  14: ['\bnot as\s+\w+\s+as\b', '\beven\s+(more|less|better|worse|\w+er)\b',
       '\b(\w+er) and \1\b', '\bthe more\b[^.!?]{0,60}\bthe more\b']
  # Non-defining relative: a comma before the pronoun, or whose/where/when as a
  # relative. A2 taught the defining kind without commas.
  # `when` here must follow a comma. Unit 15 teaches NON-DEFINING relatives
  # (PREL.NR, RBREL.NR), so `the street, where she lives` and `in 2019, when it
  # closed` are its markers. Without the comma the pattern fires on
  # `I was crossing town when it died` -- which is not a relative adverb at all,
  # it is Unit 1's own target structure, a noun followed by the conjunction
  # `when`. The marker was rejecting the grammar the first unit exists to teach.
  15: [',\s+(who|which)\s+\w+', '\bwhose\s+\w+',
       '\b(place|street|town|year|day)\s+where\s+\w+',
       '\b(place|street|town|year|day),\s+when\s+\w+']
  # Backshift specifically: reported speech itself is A2 U20.
  16: ['\b(said|told \w+)\s+(that\s+)?\w+\s+(had|would|could|might|was|were)\b',
       '\basked\s+\w+\s+(if|whether)\b', '\btold \w+ to \w+']
  17: ['\b(Do you know|Could you tell me|I wonder|Can I ask)\b[^.!?]{0,60}\b(if|whether|where|when|why|how|what)\b',
       ',\s+(isn.t it|aren.t they|don.t you|doesn.t it|didn.t you|won.t you|can.t you|is it|are they|do you|does it|did you|will you|can you)\?']
  18: ['\b(myself|yourself|himself|herself|itself|ourselves|yourselves|themselves)\b',
       '\beach other\b', '\bone another\b',
       '\b(something|somebody|someone|anything|anybody|anyone|nothing|nobody|everything|everybody)\s+(new|else|important|useful|wrong|different|better)\b']
  19: ['\bIt is\s+\w+\s+to\s+\w+', '\bIt was\s+\w+\s+to\s+\w+',
       '\bthere\s+(must|might|should|could|will|would)\s+be\b']
  20: ['\b(obviously|clearly|apparently|frankly|honestly|surprisingly|unfortunately|fortunately|personally|admittedly)\b',
       '\b(however|therefore|moreover|nevertheless|on the other hand|in fact|as a result)\b']
# As at A2, the PLUS track carries narrative past from Unit 1 -- Parts 8 and 9
# are stories and are told in the past. At B1 that extends to the past perfect,
# because a story that cannot say what had already happened is not a story.
narrative_exempt_parts: ['Part 7', 'Part 8', 'Part 9']
narrative_exempt_points: [1, 3]
exempt_patterns:
  - '\ba (man|woman|person|girl|boy|friend|neighbour|teacher|student|nurse) called \w+'
  - '\bcalled \w+,'
exempt_phrases:
  # A2 forms, every one of them legal from B1 Unit 1 because A2 taught them.
  - "going to"
  - "have to"
  - "had to"
  - "has to"
  - "must be"
  - "you must"
  - "should be"
  - "I should"
  - "I think that"
  - "the one that"
  - "so that"
  - "that is"
  - "that it"
  - "I'd like"
  - "Would you like"
  - "Thank you"
  - "never mind"
  - "is made"
  - "are made"
  - "was made"
  - "were made"
"""


def main():
    os.makedirs(os.path.join(ROOT, 'ledgers'), exist_ok=True)
    open(os.path.join(ROOT, 'ledgers', 'cast.yaml'), 'w',
         encoding='utf-8').write(cast())
    open(os.path.join(ROOT, 'ledgers', 'grammar.yaml'), 'w',
         encoding='utf-8').write(GRAMMAR)
    p = os.path.join(ROOT, 'ledgers', 'lexis.yaml')
    if not os.path.exists(p):
        open(p, 'w', encoding='utf-8').write(
            '# Append-only glossary ledger. 10 words a unit, 200 across both\n'
            '# books, and none repeating any of A2\'s 200 (F19). E10 and E11\n'
            '# reject a repeat; E09 requires three plantings before Part 10.\n'
            '# A unit is appended the moment it is written, never before.\n'
            'units: {}\n'
            'fixed_phrases: []\n')
    import yaml
    for f in ('cast.yaml', 'grammar.yaml', 'lexis.yaml'):
        d = yaml.safe_load(open(os.path.join(ROOT, 'ledgers', f)))
        print(f'  {f}: loads, {len(d)} top-level keys')
    return 0


if __name__ == '__main__':
    sys.exit(main())
