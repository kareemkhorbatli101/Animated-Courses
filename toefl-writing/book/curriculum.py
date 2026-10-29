"""The hidden syllabus behind the 300 items.

Every item carries a teaching payload fixed in advance, so that a student who
works through the book meets a complete grammar and lexis course without ever
reading a grammar lecture.  Nothing here is decorative: the renderer prints
these fields in each item's "What this item taught you" strip, and the build
refuses to ship an item whose payload is missing.
"""

# ---------------------------------------------------------------- Task 1
# Build a Sentence is a pure structure task, so it carries the syntax spine.
# Twelve families, 100 numbered structures.

BAS_FAMILIES = [
    ('Relative clauses', [
        'subject relative (who/that)',
        'object relative (whom/that/zero)',
        'preposition + which fronted',
        'whose + noun',
        'where / when relatives',
        'reduced relative, -ing',
        'reduced relative, past participle',
        'non-defining relative with commas',
        'which referring to a whole clause',
        'agreement across a relative clause']),
    ('Noun clauses and embedded questions', [
        'that-clause as object',
        'embedded wh-question word order',
        'embedded yes/no with whether',
        'extraposed it + that-clause',
        'wh-clause as subject',
        'reported speech with backshift',
        'noun clause after an adjective',
        'the fact that + clause']),
    ('Conditionals', [
        'zero conditional',
        'first conditional',
        'second conditional',
        'third conditional',
        'mixed conditional',
        'inversion: Had I known',
        'unless / provided that / as long as',
        'implied conditional: otherwise, without']),
    ('Passive voice', [
        'simple passive',
        'passive with a modal',
        'present perfect passive',
        'agentless passive',
        'get-passive',
        'passive infinitive and gerund',
        'reporting passive: it is said that',
        'double-object passive']),
    ('Participial and absolute phrases', [
        'present participle adverbial',
        'past participle adverbial',
        'perfect participle: having finished',
        'absolute construction',
        'repairing a dangling modifier',
        'participle after a conjunction',
        'participial phrase as postmodifier',
        'being + past participle']),
    ('Verb complementation', [
        'verb + gerund',
        'verb + infinitive',
        'verb + object + infinitive',
        'verb + object + bare infinitive',
        'remember/stop: -ing versus to',
        'adjective + infinitive',
        'preposition + gerund',
        'causative have/get something done']),
    ('Comparison', [
        'comparative + than',
        'superlative + in/of',
        'as ... as and not as ... as',
        'the more ... the more',
        'modified comparatives: far, slightly',
        'comparing two clauses in parallel',
        'prefer and would rather',
        'so / such ... that']),
    ('Emphasis and information structure', [
        'it-cleft',
        'wh-cleft: what I need is',
        'fronted adverbial',
        'negative inversion: not only, rarely',
        'there-existential',
        'so do I / neither do I',
        'emphatic do',
        'end weight with a heavy noun phrase']),
    ('Coordination and correlatives', [
        'and / but / so with correct punctuation',
        'not only ... but also',
        'either ... or, neither ... nor agreement',
        'both ... and',
        'parallel structure in a list',
        'correlative triggering inversion',
        'ellipsis in coordination',
        'repairing a comma splice']),
    ('Subordination and connectors', [
        'concession: although, even though',
        'despite / in spite of + noun',
        'purpose: so that, in order to',
        'result: with the result that',
        'time: by the time, once, as soon as',
        'reason: since, given that',
        'contrast: whereas, while',
        'conjunctive adverbs and their punctuation']),
    ('Modality and hedging', [
        'epistemic might / could / must',
        'deontic should / ought to / must',
        'perfect modals: should have, must have',
        'would for the hypothetical',
        'hedges: tend to, appear to',
        'be supposed to / be meant to',
        'had better / would rather',
        'ordering degrees of certainty']),
    ('Noun phrase, agreement and determiners', [
        'articles with countable and uncountable nouns',
        'quantifiers: much, many, few, little',
        'agreement across an intervening phrase',
        'collective nouns',
        'each / every / either + singular',
        'appositive punctuation',
        'adjective order',
        "possessive 's versus of",
        'pronoun reference and agreement',
        'there is / there are with a compound subject']),
]


def bas_items():
    out, n = [], 0
    for fam, structures in BAS_FAMILIES:
        for s in structures:
            n += 1
            out.append({'n': n, 'family': fam, 'structure': s})
    return out


# ---------------------------------------------------------------- Task 2
# Write an Email: ten communicative functions, ten items each.  ETS names
# recommendation, invitation and proposing a solution explicitly; the rest
# are the standard campus-and-social repertoire.

EMAIL_FUNCTIONS = [
    ('Request and ask for help',
     'the ask is the whole point: how directly may you state it?',
     ['embedded question softening', 'I was wondering whether',
      'modal distancing: could/would', 'if-clause as a politeness hedge',
      'passive to avoid blaming', 'present perfect for relevance',
      'infinitive of purpose', 'conditional offer of reciprocity',
      'indirect speech act', 'pre-closing formulae']),
    ('Complaint and remedy',
     'name the fault without attacking the person',
     ['agentless passive', 'nominalisation to depersonalise',
      'concessive although', 'perfect modal: should have been',
      'quantifier precision', 'sequencing adverbials',
      'reported speech for prior contact', 'understatement as politeness',
      'result clause', 'cleft for emphasis']),
    ('Apology and explanation',
     'how much apology is too much',
     ['past perfect for prior cause', 'unreal past for regret',
      'participial cause clause', 'reason connectors',
      'future with will for commitment', 'conditional repair offer',
      'adverb placement', 'that-clause after apologise',
      'mitigating adverbials', 'reassurance formulae']),
    ('Decline and counter-offer',
     'refuse, then repair',
     ['unreal conditional for diplomatic refusal',
      'would + hedge', 'regret + infinitive', 'although-concession first',
      'alternative-offer structures', 'negative politeness forms',
      'softening adverbials', 'future-in-the-past', 'if it were possible',
      'tentative suggestion with might']),
    ('Inquiry and information seeking',
     'ask several things without sounding like an interrogation',
     ['indirect questions in series', 'whether ... or',
      'noun clause after wonder', 'could you confirm whether',
      'parallel question structure', 'enumerating with ordinals',
      'relative clause to specify', 'quantifier questions',
      'prepositional precision', 'polite pre-sequence']),
    ('Recommendation and advice',
     'recommend without presuming authority',
     ['should / ought to gradation', 'if I were you',
      'worth + gerund', 'comparative justification',
      'subjunctive after recommend', 'relative clause to qualify',
      'hedged generalisation', 'conditional benefit',
      'imperative softened by please', 'ranking adverbials']),
    ('Invitation',
     'register and warmth without over-familiarity',
     ['would like + object + infinitive', 'we would be delighted if',
      'future arrangements with present continuous',
      'time and place prepositions', 'purpose clause',
      'conditional attendance', 'polite imperative for RSVP',
      'relative clause describing the event', 'inclusive we',
      'closing with anticipation']),
    ('Proposal and solving a problem',
     'diagnose, propose, justify',
     ['cause-effect connectors', 'conditional consequence',
      'passive for the problem, active for the fix',
      'infinitive of purpose', 'comparative of alternatives',
      'cleft to foreground the solution', 'modal of recommendation',
      'nominalisation in a proposal register',
      'result clause with so that', 'enumerated steps in parallel']),
    ('Follow-up and chasing',
     'persist without accusing',
     ['present perfect continuous for duration',
      'just / simply as softeners', 'I appreciate that ... however',
      'passive to avoid you-blame', 'time adverbials of reference',
      'reported prior request', 'conditional urgency',
      'tentative reminder forms', 'future perfect for deadline',
      'polite escalation']),
    ('Negotiation and rescheduling',
     'trade constraints and converge',
     ['comparative trade-off', 'conditional concession pairs',
      'would be willing to', 'unless as a negotiating hinge',
      'alternative time structures', 'subjunctive proposal',
      'hedged commitment', 'both ... and for packaging',
      'purpose + benefit framing', 'confirmation request']),
]

EMAIL_SCENARIOS = {
    'Request and ask for help': [
        'extension on a lab report', 'library recall waiver',
        'access to a locked study room', 'reference letter from a tutor',
        'swapping a tutorial group', 'borrowing club equipment',
        'IT account reactivation', 'a quiet exam seat',
        'joining a full seminar', 'transcript sent to a third party'],
    'Complaint and remedy': [
        'faulty dormitory heating', 'repeated noise from a neighbouring flat',
        'wrong charge on a meal card', 'a printer that ate the credit',
        'a damaged parcel from the post room', 'a bus route cut without notice',
        'an unusable gym locker', 'a late-running shuttle',
        'a mislabelled allergen in the canteen', 'a double-billed club fee'],
    'Apology and explanation': [
        'missing a group meeting', 'a late assignment',
        'returning equipment damaged', 'missing a volunteering shift',
        'a billing mistake you caused', 'forgetting to cancel a booking',
        'arriving late to a presentation', 'a misdirected email',
        'withdrawing from a committee', 'breaking a borrowed item'],
    'Decline and counter-offer': [
        'a rescheduled rehearsal hall booking',
        'an invitation that clashes with an exam',
        'a committee role you cannot take', 'a shift you cannot cover',
        'a conference you cannot attend', 'a room share you must refuse',
        'a speaking slot you must move', 'a survey you cannot complete',
        'a deadline you cannot meet', 'a trip you must pull out of'],
    'Inquiry and information seeking': [
        'scholarship eligibility', 'exchange programme deadlines',
        'laboratory safety certification', 'housing contract terms',
        'module prerequisites', 'graduation ticket allocation',
        'health centre registration', 'bicycle storage rules',
        'internship credit transfer', 'library inter-loan costs'],
    'Recommendation and advice': [
        'recommending a textbook to a classmate',
        'advising a friend on module choice',
        'suggesting a supervisor', 'recommending accommodation',
        'advising on a part-time job', 'suggesting a study method',
        'recommending a club to a new student', 'advising on travel insurance',
        'suggesting a conference', 'recommending a software tool'],
    'Invitation': [
        'a departmental poster evening', 'a society welcome social',
        'a guest lecture', 'a study-group session',
        'a charity run team', 'a film screening and discussion',
        'an end-of-term dinner', 'a language exchange',
        'a workshop you are running', 'an alumni panel'],
    'Proposal and solving a problem': [
        'a rota for a shared kitchen', 'reducing printing waste',
        'a quiet zone in the common room', 'a bicycle repair station',
        'a peer tutoring scheme', 'extending library hours in exam term',
        'a lost-property system', 'a recycling scheme for lab plastics',
        'a buddy system for new students', 'a timetable clash fix'],
    'Follow-up and chasing': [
        'an unanswered refund request', 'a reference not yet sent',
        'a repair that never happened', 'a pending room allocation',
        'an unconfirmed placement', 'a missing exam result',
        'an unprocessed club registration', 'a delayed equipment order',
        'an unreturned deposit', 'an unscheduled meeting'],
    'Negotiation and rescheduling': [
        'moving a supervision meeting', 'splitting a group presentation slot',
        'sharing a lab bench', 'adjusting a volunteering commitment',
        'rescheduling an interview', 'swapping shifts',
        'renegotiating a project scope', 'changing a tenancy start date',
        'altering a payment schedule', 'rearranging a field trip'],
}


def email_items():
    out, n = [], 0
    for fn, convention, grammars in EMAIL_FUNCTIONS:
        for i, scen in enumerate(EMAIL_SCENARIOS[fn]):
            n += 1
            out.append({'n': n, 'function': fn, 'scenario': scen,
                        'grammar': grammars[i], 'convention': convention})
    return out


# ---------------------------------------------------------------- Task 3
# Academic Discussion: ten disciplines x five question shapes x two items.

AD_DISCIPLINES = [
    'Education', 'Business and economics', 'Technology and AI',
    'Environment', 'Health and medicine', 'Media and communication',
    'Urban planning and transport', 'Psychology and society',
    'Law and ethics', 'Arts and culture']

AD_SHAPES = [
    ('Agree or disagree with a claim', 'concede then counter'),
    ('Policy choice: should X be required', 'cost-benefit with a condition'),
    ('Value trade-off: which matters more', 'reframe the comparison'),
    ('Cause ranking: what drives X most', 'rank and justify the ordering'),
    ('Responsibility: who should act', 'level distinction, individual vs institution'),
]

AD_GRAMMAR = [
    'concessive while + fronting', 'conditional qualification',
    'comparative of importance', 'causal chain with result clauses',
    'modal of obligation across agents',
    'hedged generalisation with tend to', 'cleft for emphasis',
    'contrastive whereas', 'counterfactual would have',
    'nominalisation for abstraction']

AD_LEXIS = [
    'stance adverbs: arguably, admittedly',
    'academic hedges: broadly, by and large',
    'evaluation adjectives: compelling, marginal',
    'causal verbs: drive, underpin, trigger',
    'agency nouns: stakeholders, policymakers',
    'degree adverbs: substantially, marginally',
    'concession markers: granted, to be fair',
    'contrast connectors: conversely, by contrast',
    'evidence nouns: precedent, trade-off',
    'abstraction nouns: incentive, externality']


def ad_items():
    out, n = [], 0
    for d_i, disc in enumerate(AD_DISCIPLINES):
        for s_i, (shape, move) in enumerate(AD_SHAPES):
            for v in range(2):
                n += 1
                out.append({'n': n, 'discipline': disc, 'shape': shape,
                            'move': move,
                            'grammar': AD_GRAMMAR[(d_i + s_i + v) % len(AD_GRAMMAR)],
                            'lexis': AD_LEXIS[(d_i * 2 + s_i + v) % len(AD_LEXIS)]})
    return out


def summary():
    return {'build_a_sentence': bas_items(),
            'write_an_email': email_items(),
            'academic_discussion': ad_items()}


if __name__ == '__main__':
    s = summary()
    for k, v in s.items():
        print('%-22s %d items' % (k, len(v)))
    assert len(s['build_a_sentence']) == 100, len(s['build_a_sentence'])
    assert len(s['write_an_email']) == 100, len(s['write_an_email'])
    assert len(s['academic_discussion']) == 100, len(s['academic_discussion'])
    print('curriculum map: 300 items, all payloads assigned')
