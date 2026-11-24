# -*- coding: utf-8 -*-
"""English for Diplomats — International Edition — series parameters.

The course is for diplomats and foreign service officers of any state, serving
abroad: bilateral embassies, consulates general, permanent missions to
international organisations, delegations and joint commissions.

The reader's own state is never named. The sending service is 'the Service',
its headquarters 'the Ministry', and the post 'the Mission'. The cast carry
names drawn from everywhere on purpose, so that a reader of any nationality can
put their own service in the place of this one.

Host states, cities, bodies and counterparts are invented. No vendor, product,
model, platform, serving official or live political dispute appears anywhere.

The series signature is English as a working language between people for whom
it is nobody's first: Part 10 of every unit, Across the Language Line.
"""

FIELD = 'Diplomats'
SERIES = 'ENVOY  ·  ENGLISH FOR DIPLOMATS'
STRAP = 'The working language of a working diplomat'
EDITION = 'International Edition'
TITLE = 'English for Diplomats'
FILESTEM = 'English_for_Diplomats_International'

INSIDE = ['Warm-up reading with five kinds of comprehension',
          'Twenty key terms, with gap and matching practice',
          'A grammar point, a loose/precise contrast, and two dialogues',
          'Speaking tasks · extended reading · guided writing',
          'A Working with AI track: one capability per unit, taught with its boundary',
          'A five-stage Decision Room with a full thinking scaffold',
          'A Brief Lab: task it, watch it fail, name the fault, repair it',
          'Across the Language Line: English between second-language speakers',
          'A six-skill review, a Can-Do check and a complete answer key']

CAST = ('Mira Halloran  ·  Daniel Osei  ·  Ines Pereira  ·  Rashid Karam\n'
        'Yuki Tanaka  ·  Tomas Bergh  ·  Amara Sow  ·  Elena Duarte\n'
        'Peter Novak  ·  Farida Haddad  ·  Ambassador Clara Mendel')

CASTLINES = [
 ('Mira Halloran', 'second secretary, Varkent'),
 ('Daniel Osei', 'consul, Port Sable'),
 ('Ines Pereira', 'deputy head of mission, Varkent'),
 ('Rashid Karam', 'economic and cooperation officer'),
 ('Yuki Tanaka', 'press and public diplomacy officer'),
 ('Tomas Bergh', 'administration, premises and security'),
 ('Amara Sow', 'senior locally engaged assistant, Port Sable'),
 ('Elena Duarte', 'delegate to the Assembly, Lindhall'),
 ('Peter Novak', 'desk officer at the Ministry, in the capital'),
 ('Farida Haddad', 'protocol, liaison and interpreting'),
 ('Ambassador Clara Mendel', 'Head of Mission, Varkent'),
]

CASTBIOS = [
 ('Mira Halloran', 'second secretary in Varkent, and the officer Books 1 and 2 follow. Her '
                   'English is good and it is not her first language, which is true of almost '
                   'everybody she will work with.'),
 ('Daniel Osei', 'consul in Port Sable. Runs a counter at which eleven languages are spoken on '
                 'an ordinary Tuesday, and not one of them by everybody present.'),
 ('Ines Pereira', 'deputy head of mission. Reads every draft before it leaves and asks the same '
                  'two questions: what are we asking for, and will it survive translation.'),
 ('Rashid Karam', 'economic and cooperation officer. Lives among project documents, budget '
                  'lines and partners who use the same words to mean different things.'),
 ('Yuki Tanaka', 'press and public diplomacy officer. Writes for audiences who will read her in '
                 'a second language, or in a translation she will never see.'),
 ('Tomas Bergh', 'administration, premises and security. Holds the keys, the contracts and the '
                 'only complete list of what the Mission actually owns.'),
 ('Amara Sow', 'senior locally engaged assistant in Port Sable, and the person a caller in '
               'trouble reaches first. Knows the host system better than any officer posted in.'),
 ('Elena Duarte', 'delegate to the Assembly in Lindhall. Spends her life in bracketed text and '
                  'counts support without ever claiming a vote she has not been given.'),
 ('Peter Novak', 'desk officer at the Ministry. The voice on the other end of every instruction, '
                 'and the one who must explain the answer upwards.'),
 ('Farida Haddad', 'protocol, liaison and interpreting. Believes that precision in small things '
                   'is how a service shows it can be trusted with large ones.'),
 ('Ambassador Clara Mendel', 'Head of Mission in Varkent. Signs what the Mission sends and '
                             'answers for it in rooms the Ministry is not in.'),
]

TEAM = [('people', '%s\nour guide'),
        ('envelope', 'Daniel Osei\nConsul, Port Sable'),
        ('scale', 'Ines Pereira\nDeputy Head of Mission'),
        ('chart', 'Rashid Karam\nCooperation Officer'),
        ('speech', 'Yuki Tanaka\nPress and Public Diplomacy'),
        ('flag', 'Amb. Clara Mendel\nHead of Mission')]

# Invented host states, cities and bodies. Gate 12 checks these are spelled one way.
WORLD = ['Arvenia', 'Belmora', 'Corvadia', 'Dalmane', 'Eskavia', 'Fenmark',
         'Grevia', 'Harraden', 'Ilmaria', 'the Assembly', 'the Secretariat',
         'the Joint Commission', 'Varkent', 'Port Sable', 'Lindhall', 'Tarrow']

# Allowed adjectival and plural forms of the invented names (gate 12).
DEMONYMS = ['Arvenian', 'Arvenians', 'Belmoran', 'Belmorans', 'Corvadian',
            'Corvadians', 'Dalmanese', 'Eskavian', 'Eskavians', 'Fenmark',
            'Fenmarkers', 'Grevian', 'Grevians', 'Harradeni', 'Harradenis',
            'Ilmarian', 'Ilmarians', 'Varkent', 'Lindhall', 'Tarrow']

BANDS = {'A2': (8.5, 12.5), 'B1': (11.5, 16.5), 'B2': (15.0, 21.0)}
CAPS = {'A2': 26, 'B1': 34, 'B2': 44}
WORDS = {'A2': (3500, 4700), 'B1': (4000, 5200), 'B2': (4400, 5600)}

ORDER = ['A21', 'A22', 'B11', 'B12', 'B21', 'B22']

BOOKS = {
 'A21': dict(code='A21', level='A2', badge='A2', bandge='A2.1', book='BOOK 1',
   title=['English for', 'Diplomats'], sub='The First Posting',
   emblem='door', protagonist='Mira Halloran',
   blurb=['Book 1 is the first month abroad, in an office where English is the',
          'common language and nobody’s first. Mira Halloran arrives in Varkent',
          'as a second secretary and finds that the building, the titles, the',
          'forms and the telephone all have to be learned in a language she',
          'shares with colleagues who learned it somewhere else.'],
   units=['English Is the Office Language', 'Names You Have Not Heard Before',
          'The Building and Who Sits Where', 'Hours, Dates and the Local Week',
          'A Message Taken for Somebody Else', 'Forms You Must Fill In Yourself',
          'A Flat, a Bank and a Signature', 'A Short Email That Travels Well',
          'Addresses, Routes and Timetables', 'Your First Written Report']),
 'A22': dict(code='A22', level='A2', badge='A2', bandge='A2.2', book='BOOK 2',
   title=['English for', 'Diplomats'], sub='The Diplomatic Round',
   emblem='handshake', protagonist='Mira Halloran',
   blurb=['Book 2 is the part of the work that happens standing up, holding a',
          'glass, among people who are also working in a second language.',
          'Invitations, introductions, forms of address, the table, the',
          'interpreter, a toast of ninety seconds, somebody else’s national day,',
          'a visiting delegation, and the note you write the same night.'],
   units=['The Invitation and the Reply', 'A Room Where Nobody Shares a Language',
          'Forms of Address, and Getting Them Right', 'Dinner, Seating and the Interpreter',
          'Ninety Seconds and a Toast', 'The National Day of Somebody Else',
          'A Delegation You Must Host', 'Gifts, Flowers and Written Thanks',
          'Customs You Have Not Met Before', 'Who Was There, and What They Said']),
 'B11': dict(code='B11', level='B1', badge='B1', bandge='B1.1', book='BOOK 3',
   title=['English for', 'Diplomats'], sub='Consular Work and the Public',
   emblem='doc', protagonist='Daniel Osei',
   blurb=['Book 3 is the counter, the telephone and the public. Daniel Osei runs',
          'a consular section in Port Sable where eleven languages are spoken on',
          'an ordinary Tuesday. The book covers triage, the citizen in trouble,',
          'documents and forgery, interpreting at a counter, the duty telephone,',
          'plain English for weak readers, the record and the month in numbers.'],
   units=['The Window Opens', 'A Citizen in Trouble, in Another Language',
          'Documents, Proof and Forgery', 'The Interpreter at the Counter',
          'The Duty Telephone', 'An Answer That Fits the Question',
          'Writing for a Reader Whose English Is Weak',
          'The Record of a Conversation in Three Languages',
          'The Month in Numbers', 'What the Mission Will Not Do']),
 'B12': dict(code='B12', level='B1', badge='B1', bandge='B1.2', book='BOOK 4',
   title=['English for', 'Diplomats'], sub='Projects and Partners',
   emblem='map', protagonist='Rashid Karam',
   blurb=['Book 4 is cooperation: money, partners, documents and results. Rashid',
          'Karam works with institutions that use the same words to mean',
          'different things. Project documents, budget lines, calls for',
          'proposals, a field visit, monitoring reports, a refusal that keeps a',
          'partner, two vocabularies, an agreement in two languages, and what',
          'actually changed.'],
   units=['A Partner You Have Not Met', 'Reading a Project Document',
          'Money, Budgets and What a Line Means', 'A Call for Proposals',
          'A Visit to the Field', 'Monitoring, Numbers and Photographs',
          'Saying No to a Good Proposal', 'Two Institutions, Two Vocabularies',
          'An Agreement in Two Languages', 'What the Project Actually Changed']),
 'B21': dict(code='B21', level='B2', badge='B2', bandge='B2.1', book='BOOK 5',
   title=['English for', 'Diplomats'], sub='Conferences and Negotiation',
   emblem='scale', protagonist='Elena Duarte',
   blurb=['Book 5 is the multilateral table. Elena Duarte represents the Mission',
          'at the Assembly in Lindhall, where a hundred pages arrive on Friday,',
          'the agenda hides the decisions, the interpreters are working from your',
          'speed, and a text is agreed word by word in a language that is nobody’s',
          'first.'],
   units=['The Documents Before the Meeting', 'Reading an Agenda for the Real Decisions',
          'What the Other Delegation Actually Said', 'Amendments and the Shape of a Text',
          'Speaking So That You Can Be Interpreted', 'The Chair’s Text and Your Instructions',
          'Who Will Vote With You, and Who Says So', 'Drafting in Nobody’s First Language',
          'The Record for People Who Were Not There', 'What Consensus Covered']),
 'B22': dict(code='B22', level='B2', badge='B2', bandge='B2.2', book='BOOK 6',
   title=['English for', 'Diplomats'], sub='The Public Voice',
   emblem='speech', protagonist='Ambassador Clara Mendel',
   blurb=['Book 6 is the public face, in a second language, in front of people',
          'who will translate it. An interview, a statement written to be',
          'translated, thirty words that cannot be clipped, a speech to an',
          'audience listening in English, a false story in a language you cannot',
          'read, the first hour of a crisis, a community that is not your own, an',
          'honest “I do not know”, a handover and the end of a posting.'],
   units=['An Interview in Your Second Language', 'A Statement Written to Be Translated',
          'Thirty Words That Cannot Be Clipped', 'A Speech to an Audience Listening in English',
          'A Story You Cannot Read', 'The First Hour',
          'Speaking to a Community That Is Not Your Own', 'Saying What You Do Not Know',
          'The Handover', 'The End of a Posting']),
}

# ------------------------------------------------------------------ ai ladder
AI_LADDER = {
 'A21': [
  'asking for the same thing said more simply',
  'names from another language, written and said correctly',
  'a plan of a building, and the words for its rooms',
  'hours, dates and a working week that is not yours',
  'a message taken down for somebody who was not there',
  'an official form in a language you half know',
  'the words you need to rent, bank and register',
  'an email that is polite in English and clear to a second-language reader',
  'an address, a route and a timetable that may have changed',
  'a first report: what you saw, not what you were told'],
 'A22': [
  'an invitation decoded: date, dress, status and reply',
  'an attendance list read for who is worth meeting',
  'forms of address in four languages, checked twice',
  'seating and precedence, and the question only a person answers',
  'a toast cut to ninety seconds',
  'somebody else’s national day, prepared in an hour',
  'a visitor programme, hour by hour, with travel time in it',
  'thanks that sound as though a person wrote them',
  'a question of local custom, and why a general answer fails',
  'the contact note written the same night'],
 'B11': [
  'a queue triaged when the desk shares no language with it',
  'the case that must reach a human being within the minute',
  'a document checked against the signs that it is not genuine',
  'machine interpreting at a counter, and the sentence it cannot carry',
  'the duty telephone: a script you can follow half awake',
  'a standard reply that still answers the question that was asked',
  'plain English for a reader whose English is weaker than yours',
  'a record of a conversation that was held in three languages',
  'the month in numbers, counted the same way twice',
  'what must never be typed into anything at all'],
 'B12': [
  'a partner organisation researched before the first meeting',
  'a project document summarised without losing its conditions',
  'a budget line read in a language you do not work in',
  'a call for proposals, and what it actually requires of you',
  'a field visit prepared from open sources',
  'monitoring figures: what they show and what they cannot',
  'a refusal explained so that the partner stays a partner',
  'two institutions’ terminology reconciled, term by term',
  'a translated agreement checked against its original',
  'an end-of-project report that counts what changed'],
 'B21': [
  'a hundred pages reduced to what you must read tonight',
  'an agenda read for where the decisions actually sit',
  'another delegation’s statement, understood exactly',
  'amendments tracked through five versions of a text',
  'speaking so that an interpreter can carry it',
  'a chair’s text compared against your own instructions',
  'a coalition mapped from what delegations have said in public',
  'drafting in a language that is nobody’s first',
  'a record written for people who were not in the room',
  'what consensus actually covered, and what it did not'],
 'B22': [
  'the questions a journalist in another country will ask',
  'a statement written so that its translation says the same thing',
  'thirty words that cannot be clipped out of context',
  'a speech for an audience listening in its second language',
  'a false story in a language you cannot read',
  'the first hour when something happens at post',
  'speaking to a community that is not your own',
  'saying what you do not know, in a language that is not yours',
  'a handover for a successor from a different service',
  'what a machine cannot do for a person who represents'],
}

# ------------------------------------------------------------ grammar ladder
GRAMMAR = {
 'A21': [
  'introductions and word order: the verb to be with names and roles',
  'articles with jobs, institutions and places: a, an, the and none',
  'plurals, numbers and dates said aloud',
  'adverbs of frequency and the shape of a working week',
  'polite requests and offers: could you, would you like, shall I',
  'imperatives and sequence words for instructions',
  'was, were and had: the past of being and having',
  'prepositions of place and movement in a building and a city',
  'linking words: and, but, because, so, then',
  'the present perfect for experience: have you ever'],
 'A22': [
  'comparatives and superlatives for places, people and options',
  'the past continuous with the past simple',
  'much, many and a lot of: counting what you cannot count',
  'will, won’t and might for plans and predictions',
  'have to, don’t have to, must and mustn’t',
  'defining relative clauses with who, which and that',
  'too, enough and very with adjectives',
  'the present perfect with for, since, just, already and yet',
  'verbs with two objects: give, send, show, offer',
  'reported requests: asked me to, told me to, said that'],
 'B11': [
  'the passive in procedure and instruction',
  'the first conditional and time clauses: when, as soon as, until',
  'modals of advice: should, ought to, had better',
  'indirect questions and polite enquiry',
  'gerunds and infinitives after common verbs',
  'used to and would for past habits',
  'quantifiers for data: most, several, a minority, the majority',
  'articles for first mention and later mention',
  'contrast and result: however, therefore, whereas, as a result',
  'the present perfect continuous for effort over time'],
 'B12': [
  'the second conditional for options and consequences',
  'reporting verbs: state, explain, warn, point out, claim',
  'purpose and result: so that, in order to, with the result that',
  'the past perfect in a sequence of events',
  'describing change: rise, fall, by, to, from, between',
  'non-defining relative clauses',
  'modals of past possibility: may have, might have, must have',
  'conditions and precautions: as long as, in case, otherwise',
  'compound nouns and of-phrases in institutional language',
  'hedged recommendation: appears to, suggests that, tends to'],
 'B21': [
  'formal register: impersonal subjects and nominal style',
  'inversion after negative adverbials: not only, at no time, only if',
  'concession: although, even if, while and whilst',
  'the language of amendment: insert, delete, replace, retain',
  'subordination in a chair’s text: where, insofar as, to the extent that',
  'obligation and endeavour: shall, shall endeavour to, may',
  'passive reporting: it is understood, it was agreed, it was noted',
  'parallel structure in lists and operative paragraphs',
  'cross-reference in a long text: the above, the foregoing, under paragraph',
  'procedural language: on a point of order, with your permission, if I may'],
 'B22': [
  'stance adverbs: frankly, regrettably, understandably',
  'fronting and emphasis in spoken English',
  'attribution and distance: according to, it is reported that',
  'mixed conditionals in explaining consequences',
  'modal perfects for accountability: should have, could have, need not have',
  'plain English for translation: one idea, one clause, the active voice',
  'parallelism and the rule of three in a short speech',
  'hedges, boosters and neutral verbs',
  'quoting and paraphrasing accurately',
  'nominalisation and summary in a final report'],
}

# --------------------------------------------------------------- fault ladder
FAULTS = ['unscoped set', 'unbounded quantity', 'unstated criterion',
          'undefined done', 'ambiguous referent', 'missing condition',
          'unstated exception', 'hidden assumption']

FAULT_OK = {
 'A21': set(FAULTS[:3]),
 'A22': set(FAULTS[:5]),
 'B11': set(FAULTS[:6]),
 'B12': set(FAULTS), 'B21': set(FAULTS), 'B22': set(FAULTS),
}

FAULT_GRAMMAR = {
 'unscoped set': 'defining relative clauses and articles',
 'unbounded quantity': 'quantifiers and stated measures',
 'unstated criterion': 'comparatives and superlatives with a stated basis',
 'undefined done': 'modality of requirement: shall, is to, must',
 'ambiguous referent': 'reference, substitution and cohesion',
 'missing condition': 'conditionals; unless, provided that, failing that',
 'unstated exception': 'concession: although, notwithstanding, except where',
 'hidden assumption': 'articles and attribution for given and new information',
}

VAGUE = ['soon', 'asap', 'as soon as possible', 'some', 'a few', 'several',
         'better', 'improve', 'high quality', 'high-quality', 'a lot',
         'quickly', 'promptly', 'shortly', 'a number of', 'various']

SCAFFOLD = ['Purpose', 'Scope', 'Inputs', 'Criteria', 'Done', 'Fallback']
