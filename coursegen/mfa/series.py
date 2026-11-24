# -*- coding: utf-8 -*-
"""English for the Foreign Ministry with AI — series parameters.

Syria Edition. The institution in the books is 'the Ministry'; the state is
not named. Counterpart states, posts and partners are invented. Real
international institutions (the United Nations, the Vienna Convention) appear
because they are the furniture of the profession; no vendor, product, model,
platform, serving official or live political dispute appears anywhere.
"""

FIELD = 'the Foreign Ministry'
SERIES = 'MERIDIAN  ·  ENGLISH FOR THE FOREIGN MINISTRY WITH AI'
STRAP = 'Diplomatic work, written exactly'
EDITION = 'Syria Edition'

INSIDE = ['Warm-up reading with five kinds of comprehension',
          'Twenty key terms, with gap and matching practice',
          'A grammar point, a loose/precise contrast, and two dialogues',
          'Speaking tasks, including spoken tasking · extended reading · guided writing',
          'A Working with AI track: one capability per unit, taught with its boundary',
          'A five-stage Decision Room with a full thinking scaffold',
          'A Brief Lab: task it, watch it fail, name the fault, repair it',
          'A six-skill review, a Can-Do check and a complete answer key']

CAST = ('Lina Khalil  ·  Samir Haddad  ·  Dr Hana Mourad  ·  Rana Deeb\n'
        'Omar Nasri  ·  Yara Ibrahim  ·  Tarek Zayed  ·  Nadia Barakat\n'
        'Karim Dalati  ·  Maya Sarkis  ·  Ambassador Faris Said')

CASTLINES = [
 ('Lina Khalil', 'desk officer, Bilateral Affairs'),
 ('Samir Haddad', 'Legal and Treaties'),
 ('Dr Hana Mourad', 'Policy Planning'),
 ('Rana Deeb', 'Consular Affairs'),
 ('Omar Nasri', 'Translation and Documentation'),
 ('Yara Ibrahim', 'Press and Public Diplomacy'),
 ('Tarek Zayed', 'Protocol'),
 ('Nadia Barakat', 'Multilateral Affairs, Geneva'),
 ('Karim Dalati', 'Information Security and Records'),
 ('Maya Sarkis', 'the Diplomatic Institute'),
 ('Ambassador Faris Said', 'Head of Mission, Astrene'),
]

# Invented states, posts and bodies. Gate 12 checks these are spelled one way.
WORLD = ['Verenia', 'Astrene', 'Oristan', 'Kavara', 'Lysmark', 'Tarnia',
         'Halmar', 'the Regional Council']

BANDS = {'B1': (11.5, 16.5), 'B2': (15.0, 21.0), 'C1': (18.0, 25.0)}
CAPS = {'B1': 34, 'B2': 44, 'C1': 52}
WORDS = {'B1': (3700, 4900), 'B2': (4100, 5300), 'C1': (4500, 5700)}

ORDER = ['B11', 'B12', 'B21', 'B22', 'C11', 'C12']

BOOKS = {
 'B11': dict(code='B11', level='B1', badge='B1', bandge='B1.1', book='BOOK 1',
   title=['English for the', 'Foreign Ministry'], sub='Correspondence and Record',
   emblem='doc', protagonist='Lina Khalil',
   blurb=['Book 1 is the written work of a desk. Lina Khalil joins Bilateral',
          'Affairs and discovers that most of diplomacy is a document somebody',
          'will read years later. The book covers notes verbales, records of',
          'conversation, minutes and appointments, and what these systems can',
          'and cannot be asked to draft, translate, extract and sort.'],
   units=['Four Verbs, One Desk', 'From Notes to a Record', 'The Note Verbale',
          'A First Draft, Not a Translation', 'Names, Dates and Figures',
          'Sorting the Morning', 'What the File Does Not Say',
          'One Instruction, Two Drafts', 'It Never Says It Does Not Know',
          'Not Yet, and Why']),
 'B12': dict(code='B12', level='B1', badge='B1', bandge='B1.2', book='BOOK 2',
   title=['English for the', 'Foreign Ministry'], sub='Reading the Traffic',
   emblem='map', protagonist='Lina Khalil',
   blurb=['Book 2 is the reading pile. Every morning the Ministry receives more',
          'than any person can read, in several languages, and somebody must',
          'decide what reaches the Director. The book covers summarising,',
          'triage, transcripts, indexing and working from the Ministry’s own',
          'documents rather than from the open web.'],
   units=['The Point of a Long Report', 'A Week of Press in Four Languages',
          'What Reaches the Director', 'The Transcript Is Not the Meeting',
          'Two Accounts of One Meeting', 'Findable in Four Years',
          'One Shape for Every Record', 'Our Documents, Not the Open Web',
          'A Telegram on One Page', 'What a Summary Loses']),
 'B21': dict(code='B21', level='B2', badge='B2', bandge='B2.1', book='BOOK 3',
   title=['English for the', 'Foreign Ministry'], sub='Research and the Brief',
   emblem='chart', protagonist='Dr Hana Mourad',
   blurb=['Book 3 is about knowing things. Policy Planning must produce briefs',
          'that a Minister can rely on, from sources that can be checked, in',
          'time. The book covers open-source research, verification, fabricated',
          'citations, chronologies, narrative monitoring, statistics in a brief,',
          'and the brief that is accurate and useless.'],
   units=['What Is Actually Checkable', 'Before It Enters the Brief',
          'Confident and Wrong', 'A Country Brief in a Day',
          'Who Said What, and When', 'Watching the Narrative',
          'Patterns That Are Not There', 'A Number Needs a Neighbour',
          'Footnotes a Director Can Check', 'Right, and Useless']),
 'B22': dict(code='B22', level='B2', badge='B2', bandge='B2.2', book='BOOK 4',
   title=['English for the', 'Foreign Ministry'], sub='Positions and Texts',
   emblem='scale', protagonist='Samir Haddad',
   blurb=['Book 4 is the text itself. Legal and Treaties lives on exact words,',
          'and so does every instruction to a post. The book covers instructions',
          'that cannot be misread, comparing versions, bracketed text,',
          'precedent, preparing a round, statements, resolution language and',
          'rehearsing against a counterpart who is not in the room.'],
   units=['Instructions That Cannot Be Misread', 'What Changed Between Versions',
          'Inside the Brackets', 'What Was Agreed Before',
          'Positions, Fallbacks, Red Lines', 'Somebody Else’s Voice',
          'Preambular and Operative', 'The Exact Word',
          'Rehearsing Against Nobody', 'What a Draft Cannot Tell You']),
 'C11': dict(code='C11', level='C1', badge='C1', bandge='C1.1', book='BOOK 5',
   title=['English for the', 'Foreign Ministry'], sub='Citizens, Public and Crisis',
   emblem='bank', protagonist='Rana Deeb',
   blurb=['Book 5 leaves the building. Consular Affairs answers citizens in',
          'trouble, Press answers everybody else, and a crisis arrives in a time',
          'zone that is asleep. The book covers triage at volume, the case that',
          'must reach a person, writing for a non-diplomatic audience, surge',
          'capacity, and what scale does to a mistake.'],
   units=['Answered in Seconds', 'The Case That Must Reach a Person',
          'Answering in Their Language', 'A Time Zone That Is Asleep',
          'Writing for People Who Are Not Diplomats', 'Did Anybody Read It',
          'Where an Error Is Expensive', 'A Condolence Cannot Be Generated',
          'Four Officers, Forty Officers’ Reach', 'What Scale Does to a Mistake']),
 'C12': dict(code='C12', level='C1', badge='C1', bandge='C1.2', book='BOOK 6',
   title=['English for the', 'Foreign Ministry'], sub='What Must Not Leave the Building',
   emblem='key', protagonist='Karim Dalati',
   blurb=['Book 6 is the book the cautious have been waiting for.',
          'Classification, sovereignty and dependence, the record, accountability',
          'for a brief a system helped write, bias in sources, the decisions the',
          'Ministry declines to automate on purpose, skill loss in a service that',
          'no longer drafts, and the part of diplomacy that stays human.'],
   units=['Which System May See This', 'Whose Infrastructure Is It',
          'What You Must Be Able to Show', 'Who Answers for the Brief',
          'Where the Slant Entered', 'Decided Not To, On Purpose',
          'A Service That No Longer Drafts', 'The Day It Is Unavailable',
          'Nuance and the Things That Need a Person', 'The Part That Cannot Be Delegated']),
}

# ---------------------------------------------------------------- AI ladder
AI_LADDER = {
 'B11': [
  'the four verbs: draft, translate, extract, sort',
  'turning notes of a conversation into a record',
  'drafting formulaic correspondence to a fixed convention',
  'machine translation as a first draft, not a translation',
  'pulling names, dates, titles and figures out of a document',
  'sorting the morning’s incoming traffic by department',
  'context: what it can see of a file, and what it cannot',
  'why one instruction produces two different drafts',
  'why it does not say that it does not know',
  'the ministry work not to delegate yet, and the reason'],
 'B12': [
  'summarising a long report without losing the point',
  'reading a week of press in several languages',
  'triage: what reaches the Director and what does not',
  'transcription, and what a transcript is not',
  'comparing two accounts of the same meeting',
  'indexing and retrieval: making a file findable in four years',
  'templates: one shape for every record of conversation',
  'working from the Ministry’s own documents, not the open web',
  'turning a reporting telegram into a one-page summary',
  'what a summary loses, and how to notice'],
 'B21': [
  'open-source research: what is actually checkable',
  'verifying a claim before it enters a brief',
  'fabrication: what a confident wrong answer looks like',
  'assembling a country brief in a day',
  'chronologies, and who said what when',
  'media and narrative monitoring, and its limits',
  'coordinated narratives, and the risk of seeing patterns',
  'statistics in a brief: what a number needs beside it',
  'sourcing: footnotes a Director can check',
  'selection: the brief that is accurate and useless'],
 'B22': [
  'drafting instructions to a post that cannot be misread',
  'comparing two versions of a text and reporting the difference',
  'bracketed text and the language of compromise',
  'precedent: what has been agreed before, and where',
  'preparing a round: positions, fallbacks and red lines',
  'statement and speech drafting, and the voice problem',
  'resolution language: preambular and operative',
  'treaty text, reservations and the exact word',
  'rehearsing a negotiation against a simulated counterpart',
  'what a draft cannot tell you about the room'],
 'C11': [
  'consular enquiries at volume: triage that answers in seconds',
  'the consular case that must reach a person',
  'multilingual response, and the dialect problem',
  'a crisis that begins in a time zone that is asleep',
  'public diplomacy: writing for an audience that is not diplomatic',
  'measuring whether anybody actually read it',
  'visa and document workflows, where an error is expensive',
  'the register of a condolence, and why it is not generated',
  'surge capacity: four officers with the reach of forty',
  'what scale does to a single mistake'],
 'C12': [
  'classification: which system may be shown which material',
  'sovereignty and dependence: whose infrastructure is it',
  'the record: what you must be able to show afterwards',
  'accountability for a brief a system helped write',
  'bias in sources, and where it enters a brief',
  'what the Ministry decides not to automate, on purpose',
  'skill loss in a service that no longer drafts',
  'the day the system is unavailable, in a crisis',
  'interpretation, nuance and the things that need a person',
  'the part of diplomacy that cannot be delegated'],
}

# ------------------------------------------------------------ grammar ladder
GRAMMAR = {
 'B11': [
  'imperatives and infinitives of purpose',
  'present simple and present continuous for procedure and state',
  'the passive, present, in formulaic correspondence',
  'articles: a, the and zero',
  'noun phrases and titles: the order of modifiers',
  'prepositions of time and place in a record',
  'the past simple in a record of conversation',
  'reported statements',
  'modals of obligation: must, shall, should, is to',
  'the first conditional in undertakings'],
 'B12': [
  'the present perfect for the state of play',
  'quantifiers: all, most, several, few, a number of',
  'defining relative clauses',
  'non-defining relative clauses for background',
  'sequencing and time linkers in a chronology',
  'comparatives and superlatives with a stated basis',
  'the passive, past and present perfect',
  'reported questions and requests',
  'linking cause and effect',
  'summarising structures: in short, in essence, broadly'],
 'B21': [
  'hedging: appears, suggests, is reported to',
  'attribution: according to, on the basis of, citing',
  'modals of deduction: must, may, might, cannot',
  'the second conditional',
  'verb patterns after reporting verbs',
  'participle clauses for background',
  'degree and proportion stated precisely',
  'confidence levels and the language of uncertainty',
  'contrast and concession: whereas, while, although',
  'separating fact, inference and opinion in one sentence'],
 'B22': [
  'authority and instruction: shall, is to, may, is authorised to',
  'conditionals in negotiation: unless, provided that, failing that',
  'the subjunctive in formal requirement: requests that it be',
  'nominalisation in positions and texts',
  'complex noun phrases and premodification in legal text',
  'reference and substitution within a text',
  'inversion and fronting for emphasis',
  'cleft sentences in argument',
  'concession in drafting: notwithstanding, without prejudice to',
  'discourse markers of sequence and priority'],
 'C11': [
  'register shifting: the same point for a citizen and for a note',
  'reassurance and the stating of limits',
  'politeness, distance and the impersonal',
  'future forms for undertakings and expectations',
  'degree and intensity: by far, nowhere near, marginally',
  'ellipsis, and what must never be left out',
  'the language of condolence and acknowledgement',
  'agentless structures in public statements',
  'conditionals of advice and warning',
  'rhetorical structure: parallelism, tricolon and restraint'],
 'C12': [
  'prohibition and permission at the highest register',
  'modal perfects for evaluation: ought to have, needn’t have',
  'conditional perfects in argument',
  'stance reporting verbs: claim, acknowledge, concede, maintain',
  'impersonal structures: there is a case for, it remains to be seen',
  'understatement and degree in assessment',
  'the third and mixed conditionals in a post-mortem',
  'cohesion: reference, substitution and lexical chains',
  'recording dissent and reservation',
  'summative and valedictory register'],
}

# --------------------------------------------------------------- fault ladder
FAULTS = ['unscoped set', 'unbounded quantity', 'unstated criterion',
          'undefined done', 'ambiguous referent', 'missing condition',
          'unstated exception', 'hidden assumption']

FAULT_OK = {
 'B11': set(FAULTS[:4]),
 'B12': set(FAULTS[:6]),
 'B21': set(FAULTS), 'B22': set(FAULTS), 'C11': set(FAULTS), 'C12': set(FAULTS),
}

FAULT_GRAMMAR = {
 'unscoped set': 'defining relative clauses and articles',
 'unbounded quantity': 'quantifiers and stated measures',
 'unstated criterion': 'comparatives and superlatives with a stated basis',
 'undefined done': 'modality of requirement: shall, is to, must',
 'ambiguous referent': 'reference, substitution and cohesion',
 'missing condition': 'conditionals; unless, provided that, failing that',
 'unstated exception': 'concession: although, notwithstanding, without prejudice to',
 'hidden assumption': 'articles and attribution for given and new information',
}

VAGUE = ['soon', 'asap', 'as soon as possible', 'some', 'a few', 'several',
         'better', 'improve', 'high quality', 'high-quality', 'a lot',
         'quickly', 'promptly', 'shortly', 'a number of', 'various']

SCAFFOLD = ['Purpose', 'Scope', 'Inputs', 'Criteria', 'Done', 'Fallback']
