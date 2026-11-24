# -*- coding: utf-8 -*-
"""English for Management with AI - International Edition.
   Six Student's Books, B1.1 to C1.2. Series one of 'English for ... with AI'.

   Field-parameterised: FIELD, WORLD, CAST_ROLES, AI_LADDER and the unit specs are
   the only field-specific parts. Everything else in this generator is reused
   unchanged by a later series in another field.
"""

FIELD  = 'Management'
SERIES = 'ARCLIGHT  ·  ENGLISH FOR MANAGEMENT WITH AI'
STRAP  = 'Managing people and systems'

BOOKS = {
 'B11': dict(
   code='B11', level='B1', badge='B1', bandge='B1.1', book='BOOK 1',
   title=['English for', 'Management'], sub='Saying Exactly What You Want',
   emblem='compass', protagonist='Dalia Rahman',
   blurb=["Book 1 is about precision. Dalia Rahman and two colleagues run a four-person",
          "company doing back-office work for small businesses, and they have just",
          "discovered that the cost of a vague instruction is paid in full, every time.",
          "The book teaches what these systems actually do, and the English that makes",
          "them do it: quantity, scope, specificity, deadlines, obligation and condition."],
   units=['What You Actually Want', 'One Instruction, One Output',
          'How Many, How Much', 'Exactly How Much', 'Which Ones, Exactly',
          'A Report or The Report', 'Better Than What',
          'Deadlines That Cannot Be Misread', 'Must, Should, Could',
          'If This, Then That']),
 'B12': dict(
   code='B12', level='B1', badge='B1', bandge='B1.2', book='BOOK 2',
   title=['English for', 'Management'], sub='Delegating to People and Systems',
   emblem='handshake', protagonist='Dalia Rahman',
   blurb=["Book 2 is about handing work over. Arclight is eleven people now, and Dalia",
          "cannot do the work and run the company at the same time. The book covers what",
          "can be repeated, what may be touched, how a process is described so that it",
          "runs without you, where a person signs, and what happens when a system stops",
          "halfway through a job that a client is waiting for."],
   units=['What You Can Hand Over', 'Boundaries and Permissions', 'Step by Step',
          'Show, Don\u2019t Describe', 'Passing On What We Were Told',
          'One Shape Every Time', 'Where Are We', 'What Has Been Happening',
          'What Happens Next', 'Working Without You']),
 'B21': dict(
   code='B21', level='B2', badge='B2', bandge='B2.1', book='BOOK 3',
   title=['English for', 'Management'], sub='Checking and Quality',
   emblem='scale', protagonist='Victor Sandoval',
   blurb=["Book 3 is the discipline that stops cheap volume becoming expensive rubbish.",
          "Victor Sandoval joined Arclight to build quality into work that is now mostly",
          "done by systems. The book covers the three kinds of error, why fluent output",
          "is not accurate output, how much to sample, what only a person can check, and",
          "how to price an error rate you have decided to accept."],
   units=['Right, Nearly Right, Unverifiable', 'It Must Be, It Might Be',
          'How Much to Check', 'What Only a Person Can Do',
          'Adding Without Changing', 'It Is Said That', 'Checking at Scale',
          'What If It Is Wrong', 'We Should Have Seen It',
          'Because, Therefore, Which Means']),
 'B22': dict(
   code='B22', level='B2', badge='B2', bandge='B2.2', book='BOOK 4',
   title=['English for', 'Management'], sub='Customers and Value',
   emblem='people', protagonist='Victor Sandoval',
   blurb=["Book 4 is about where the value actually lands. Arclight can now produce far",
          "more than before, and the question is what the customer notices. The book",
          "covers what clients really want, where a machine answer is welcome and where",
          "it is an insult, disclosure, tone, complaints as evidence, and what happens",
          "to a price when the cost of making the thing collapses."],
   units=['What the Customer Actually Wants', 'Checking You Understood',
          'Would You Mind', 'Although They Said', 'What We Really Do',
          'Not Only, But Also', 'Stop Doing, Remember To Do',
          'Following Up, Sorting Out', 'What We Recommend', 'Value, Not Volume']),
 'C11': dict(
   code='C11', level='C1', badge='C1', bandge='C1.1', book='BOOK 5',
   title=['English for', 'Management'], sub='Growing Faster',
   emblem='chart', protagonist='Ines Carvalho',
   blurb=["Book 5 is about leverage. Ines Carvalho runs a company of sixty that is",
          "growing faster than it can absorb, and the thing that breaks first is not",
          "capacity but her own review time. The book covers where leverage really is,",
          "what cost per unit does to a business model, standardising before automating,",
          "and what is left to compete on when a rival has exactly the same tools."],
   units=['If We Had Done It Then', 'Looking Back and Forward',
          'Regret and Relief', 'This Time Next Year', 'What Had Already Happened',
          'Turning Processes Into Nouns', 'Long Descriptions, Short Sentences',
          'Unless and Provided That', 'We Require That It Be',
          'First, Above All, Finally']),
 'C12': dict(
   code='C12', level='C1', badge='C1', bandge='C1.2', book='BOOK 6',
   title=['English for', 'Management'], sub='Where the Machine Stops',
   emblem='key', protagonist='Ines Carvalho',
   blurb=["Book 6 is about the limits, and it is the book the sceptics in this series",
          "have been waiting for. Accountability, records, data that must not leave the",
          "building, bias, dependence, skill loss in a team that no longer does the work,",
          "and the decisions a company declines to automate on purpose. It ends on the",
          "part of a business that cannot be delegated to anything."],
   units=['What Must Never Be Left Out', 'Putting It First', 'Even If',
          'We Ought To Have', 'There Is A Case For', 'By Far, Nowhere Near',
          'Claimed, Acknowledged, Conceded', 'If It Had Been Otherwise',
          'The Same Point, Two Registers', 'The Part That Stays Human']),
}

ORDER = ['B11', 'B12', 'B21', 'B22', 'C11', 'C12']

EXTRA_CAST = {}

INSIDE = ['Warm-up reading with five kinds of comprehension',
          'Twenty key terms, with gap and matching practice',
          'A grammar point, a loose/precise contrast, and two dialogues',
          'Speaking tasks, including spoken specification · extended reading · guided writing',
          'A Working with AI track: one capability per unit, taught with its boundary',
          'A five-stage Decision Clinic with a full thinking scaffold',
          'A Brief Lab: write it, watch it fail, name the fault, repair it',
          'A six-skill review, a Can-Do check and a complete answer key']

CAST = ('Dalia Rahman  ·  Jonas Riedel  ·  Victor Sandoval  ·  Ines Carvalho\n'
        'Fatima Zahra  ·  Kenji Watanabe  ·  Marta Olsen  ·  Thomas Reed\n'
        'Nora Lindqvist  ·  Samuel Boateng  ·  Priya Menon')

# Mean sentence length, by level. C1 is new to this harness.
BANDS = {'B1': (11.5, 16.5), 'B2': (15.0, 21.0), 'C1': (18.0, 25.0)}
CAPS  = {'B1': 34, 'B2': 44, 'C1': 52}

# Expected unit length, by level. Higher than the earlier series: these units
# carry an eleventh part.
WORDS = {'B1': (3700, 4900), 'B2': (4100, 5300), 'C1': (4500, 5700)}

# ---------------------------------------------------------------- the two ladders
# One AI capability per unit, taught once in the series, each with a boundary.
AI_LADDER = {
 'B11': ['the four things it does well: generate, transform, extract, classify',
         'transforming what you already have: notes to letter, call to summary',
         'drafting at volume, to one standard',
         'extracting structure from unstructured documents',
         'classifying and routing: which pile does this go in',
         'context: what it can see, and what it cannot',
         'translation and shifting register',
         'why the same request gives two different answers',
         'why it does not say "I do not know"',
         'the jobs not to give it yet, and why'],
 'B12': ['a task and a process: what can be repeated',
         'permissions and limits: what it may touch',
         'steps, inputs and outputs: describing a process so it can run',
         'examples beat adjectives: showing instead of describing',
         'working from your own documents',
         'templates and fixed output formats',
         'the human checkpoint: where a person signs',
         'what happens when it fails halfway through',
         "chaining: one step's output as the next step's input",
         'an assistant and an agent: what acting on your behalf means'],
 'B21': ['three kinds of error: wrong, plausible, unverifiable',
         'confident and wrong: why fluency is not accuracy',
         'sampling: how much to check when you cannot check it all',
         'checks a machine can do, and checks only a person can',
         'making it show its source',
         'making it show its working',
         'two systems, one task: cross-checking',
         'accepting an error rate on purpose, and pricing it',
         'where errors become invisible, and why that is the real risk',
         'measuring quality: what to count, weekly'],
 'B22': ['what the customer notices, and what they do not',
         'complaints as a data source',
         'where a machine answer is welcome, and where it is an insult',
         'disclosure: what you tell customers, and when',
         'tone, brand, and the risk of sounding like everyone else',
         'personalisation at volume',
         'what must never be automated in a customer relationship',
         "answering in the customer's language",
         'faster, cheaper or better: you must choose',
         'pricing when your cost per unit collapses'],
 'C11': ['where the leverage is: the task you do four hundred times',
         'cost per unit, and what it does to a business model',
         'what to build and what to buy',
         'four people with the capacity of forty',
         'keeping what the company knows when a system does the work',
         'standardise before you automate',
         'the roles that appear and the roles that go',
         'the review bottleneck: your own ceiling',
         'compounding: systems that improve because they were used',
         'the competitor with the same tools, and what is left to compete on'],
 'C12': ['judgement under responsibility: who answers for it',
         'records: what you must be able to show afterwards',
         'data you must not hand over',
         'bias, and where it enters',
         'what you decide not to automate, on purpose',
         'skill loss in your own team',
         'explaining a decision a system helped you make',
         'dependence: the day the system is unavailable',
         'relationships and the things that need a person',
         'the part of the business that is you'],
}

GRAMMAR = {
 'B11': ['imperatives and infinitives of purpose',
         'word order and the placement of only, also, even',
         'quantifiers: all, most, some, each, every, any',
         'countable and uncountable with exact measures',
         'defining relative clauses',
         'articles: a, the and zero',
         'comparatives and superlatives with a stated basis',
         'time prepositions: by, until, within, from...to',
         'modals of obligation: must, have to, should, need to',
         'the first conditional'],
 'B12': ['causative have and get something done',
         'modals of permission and ability',
         'reported questions and requests',
         'verb patterns: ask, tell, want somebody to do',
         'reported statements',
         'the passive, present and past',
         'present perfect and past simple',
         'present perfect continuous',
         'future forms: will, going to, present continuous',
         'purpose and result: so that, in order to, so...that'],
 'B21': ['hedging and approximation: tends to, broadly, in most cases',
         "modals of deduction: must be, might be, can't be",
         'quantifying evidence: the majority of, a minority, roughly',
         'limiting expressions: hardly, barely, few, little',
         'non-defining relative clauses',
         'passive reporting: it is said that, is believed to',
         'participle clauses',
         'the second conditional',
         'past modals: must have, might have, should have',
         'cause and effect: due to, as a result of, which means that'],
 'B22': ['indirect questions',
         'question tags and checking',
         'would, could and might for politeness',
         'contrast and concession: although, despite, whereas, however',
         'cleft sentences: what we do is...',
         'inversion: not only... but also',
         'gerunds and infinitives that change meaning',
         'phrasal verbs of service: follow up, sort out, get back to',
         'expressing preference and recommendation',
         'articles with abstract nouns and generalisations'],
 'C11': ['the third conditional',
         'mixed conditionals',
         'wish and if only',
         'future perfect and future continuous',
         'past perfect and narrative sequence',
         'nominalisation',
         'complex noun phrases and premodification',
         'unless, provided that, as long as, failing that',
         'formal requirement: we require that it be',
         'discourse markers of sequence and priority'],
 'C12': ['ellipsis: what must never be left out',
         'fronting and information structure',
         'concessive clauses: while, even if, granted that',
         "modal perfects for evaluation: ought to have, needn't have",
         'impersonal structures: there is a case for, it remains to be seen',
         'degree and intensity: by far, nowhere near, marginally',
         'stance reporting verbs: claim, acknowledge, concede, maintain',
         'conditional perfects in argument',
         'register shifting: the same point formal and plain',
         'reference and substitution'],
}

# ---------------------------------------------------------------- the fault ladder
# The closed set the Brief Lab diagnoses against. Introduced on a ladder.
FAULTS = ['unbounded quantity', 'unscoped set', 'unstated criterion', 'undefined done',
          'ambiguous referent', 'missing condition', 'unstated exception',
          'hidden assumption']

FAULT_OK = {
 'B11': set(FAULTS[:4]),
 'B12': set(FAULTS[:6]),
 'B21': set(FAULTS),
 'B22': set(FAULTS),
 'C11': set(FAULTS),
 'C12': set(FAULTS),
}

# The grammar each fault is repaired with, printed in the Lab and gated for presence.
FAULT_GRAMMAR = {
 'unbounded quantity': 'quantifiers and exact measures',
 'unscoped set':       'defining relative clauses and articles',
 'unstated criterion': 'comparatives and superlatives with a stated basis',
 'undefined done':     'modality of requirement, purpose and result',
 'ambiguous referent': 'pronoun reference, cohesion and substitution',
 'missing condition':  'conditionals; unless, provided that, failing that',
 'unstated exception': 'concession: although, except, even if',
 'hidden assumption':  'articles for given and new information',
}

# Vague words that may not appear in a model brief without a number, a date or a
# stated criterion beside them. Gate 15.
VAGUE = ['soon', 'asap', 'as soon as possible', 'some', 'a few', 'several',
         'better', 'improve', 'high quality', 'high-quality', 'a lot',
         'quickly', 'promptly', 'shortly', 'a number of', 'various']

SCAFFOLD = ['Purpose', 'Scope', 'Inputs', 'Criteria', 'Done', 'Fallback']
