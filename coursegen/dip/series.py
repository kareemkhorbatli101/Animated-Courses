# -*- coding: utf-8 -*-
"""English for Syrian Diplomats — series parameters.

Syria Edition. The course is for officers serving abroad: staff posted to
embassies, consulates general and permanent missions, and officials who hold a
representative title that takes them out of the country — delegation members,
envoys, attachés and chargés d'affaires.

The sending service is called 'the Ministry' and the mission is 'the Mission'.
Host states, cities, posts and counterparts are invented. No vendor, product,
model, platform, serving official or live political dispute appears anywhere.
"""

FIELD = 'Syrian Diplomats'
SERIES = 'ENVOY  ·  ENGLISH FOR SYRIAN DIPLOMATS'
STRAP = 'Serving abroad, in English'
EDITION = 'Syria Edition'
TITLE = 'English for Syrian Diplomats'
FILESTEM = 'English_for_Syrian_Diplomats'

INSIDE = ['Warm-up reading with five kinds of comprehension',
          'Twenty key terms, with gap and matching practice',
          'A grammar point, a loose/precise contrast, and two dialogues',
          'Speaking tasks · extended reading · guided writing',
          'A Working with AI track: one capability per unit, taught with its boundary',
          'A five-stage Decision Room with a full thinking scaffold',
          'A Brief Lab: task it, watch it fail, name the fault, repair it',
          'On Your Feet: an unscripted spoken round against a live interlocutor',
          'A six-skill review, a Can-Do check and a complete answer key']

CAST = ('Nour Ajami  ·  Bassel Tannous  ·  Dr Suhair Kanaan  ·  Ziad Mikhail\n'
        'Layla Sayegh  ·  Firas Obeid  ·  Rim Haddad  ·  Hala Darwish\n'
        'Dalia Khoury  ·  Tarek Sabbagh  ·  Ambassador Walid Hourani')

CASTLINES = [
 ('Nour Ajami', 'third secretary, Calmar'),
 ('Bassel Tannous', 'consul, Ostport'),
 ('Dr Suhair Kanaan', 'deputy head of mission, Calmar'),
 ('Ziad Mikhail', 'commercial attaché, Calmar'),
 ('Layla Sayegh', 'press and cultural officer'),
 ('Firas Obeid', 'administration and premises'),
 ('Rim Haddad', 'consular assistant, Ostport'),
 ('Hala Darwish', 'delegate to the Regional Council, Rhene'),
 ('Dalia Khoury', 'desk officer at the Ministry, in the capital'),
 ('Tarek Sabbagh', 'protocol and liaison, Calmar'),
 ('Ambassador Walid Hourani', 'Head of Mission, Calmar'),
]

CASTBIOS = [
 ('Nour Ajami', 'third secretary in Calmar, and the person Books 1 and 2 follow. Arrives at '
                'her first post knowing the work and not yet the building.'),
 ('Bassel Tannous', 'consul in Ostport, where the window opens at nine and the queue starts at '
                    'seven. Has learned which cases cannot wait and which only sound urgent.'),
 ('Dr Suhair Kanaan', 'deputy head of mission. Reads every draft before it leaves and asks the '
                      'same two questions: what are we asking for, and who signs it.'),
 ('Ziad Mikhail', 'commercial attaché. Spends his week on enquiries, nine in ten of which are '
                  'not serious, and the tenth of which pays for the other nine.'),
 ('Layla Sayegh', 'press and cultural officer. Writes for people who have never met a diplomat '
                  'and will judge a country by one answer on a bad day.'),
 ('Firas Obeid', 'administration and premises. Holds the keys, the accounts and the only '
                 'complete list of what the Mission actually owns.'),
 ('Rim Haddad', 'consular assistant in Ostport, locally engaged, and the first person a caller '
                'in trouble speaks to. Knows the host system better than any officer posted in.'),
 ('Hala Darwish', 'delegate to the Regional Council in Rhene. Lives in bracketed text and '
                  'counts votes without ever claiming to know one she has not been told.'),
 ('Dalia Khoury', 'desk officer at the Ministry, in the capital. The voice on the other end of '
                  'every instruction, and the one who has to explain the answer upwards.'),
 ('Tarek Sabbagh', 'protocol and liaison. Believes that precision in small things is how a '
                   'service shows it can be trusted with large ones.'),
 ('Ambassador Walid Hourani', 'Head of Mission in Calmar. Signs what the Mission sends and '
                              'answers for it in rooms the Ministry is not in.'),
]

TEAM = [('people', '%s\nour guide'),
        ('envelope', 'Bassel Tannous\nConsul, Ostport'),
        ('scale', 'Dr Suhair Kanaan\nDeputy Head of Mission'),
        ('chart', 'Ziad Mikhail\nCommercial Attaché'),
        ('speech', 'Layla Sayegh\nPress and Culture'),
        ('flag', 'Amb. Walid Hourani\nHead of Mission')]

# Invented host states, cities and bodies. Gate 12 checks these are spelled one way.
WORLD = ['Verenia', 'Astrene', 'Oristan', 'Kavara', 'Lysmark', 'Tarnia',
         'Halmar', 'Doravia', 'Solenne', 'the Regional Council',
         'Calmar', 'Ostport', 'Rhene', 'Marnach']

# Allowed adjectival and plural forms of the invented names (gate 12).
DEMONYMS = ['Verenian', 'Verenians', 'Astrene', 'Oristani', 'Oristanis', 'Kavaran',
            'Kavarans', 'Lysmark', 'Tarnian', 'Tarnians', 'Halmari', 'Doravian',
            'Doravians', 'Solennian', 'Solennians', 'Calmar', 'Ostport', 'Rhene',
            'Marnach']

BANDS = {'A2': (8.5, 12.5), 'B1': (11.5, 16.5), 'B2': (15.0, 21.0)}
CAPS = {'A2': 26, 'B1': 34, 'B2': 44}
WORDS = {'A2': (3500, 4700), 'B1': (4000, 5200), 'B2': (4400, 5600)}

ORDER = ['A21', 'A22', 'B11', 'B12', 'B21', 'B22']

BOOKS = {
 'A21': dict(code='A21', level='A2', badge='A2', bandge='A2.1', book='BOOK 1',
   title=['English for', 'Syrian Diplomats'], sub='Arriving at Post',
   emblem='door', protagonist='Nour Ajami',
   blurb=['Book 1 is the first month abroad. Nour Ajami arrives in Calmar as a',
          'third secretary and finds that nobody explains the building, the',
          'titles, the accreditation or the telephone. The book covers arrival,',
          'introductions, the host ministry, the diary, the front desk and the',
          'first short things you write — and what a system may be asked to do',
          'with each of them.'],
   units=['The First Morning at the Mission', 'Who Does What in the Building',
          'Your Name, Your Title, Your Card', 'Accreditation and the Host Ministry',
          'A Flat, a Bank and a Signature', 'The Front Desk and the Telephone',
          'A Short Email to the Capital', 'The Diary and the Appointment',
          'Asking for Help in a New City', 'The First Report Home']),
 'A22': dict(code='A22', level='A2', badge='A2', bandge='A2.2', book='BOOK 2',
   title=['English for', 'Syrian Diplomats'], sub='Representing',
   emblem='handshake', protagonist='Nour Ajami',
   blurb=['Book 2 is the part of the job that happens standing up, holding a',
          'glass. Representation is work: who you meet, what you say, what you',
          'remember and what you write down afterwards. The book covers',
          'invitations, introductions, purposeful small talk, the table, a short',
          'speech, the national day, a visiting delegation and the thank-you',
          'note that is not a form letter.'],
   units=['An Invitation Arrives', 'Introductions in a Room of Strangers',
          'Small Talk With a Purpose', 'At the Table: Seating and Order',
          'A Short Speech and a Toast', 'The National Day Reception',
          'A Delegation Arrives From Home', 'Gifts, Cards and Thank-You Notes',
          'What to Wear, What to Ask', 'The Day After: Who Did You Meet?']),
 'B11': dict(code='B11', level='B1', badge='B1', bandge='B1.1', book='BOOK 3',
   title=['English for', 'Syrian Diplomats'], sub='The Work of the Mission',
   emblem='doc', protagonist='Bassel Tannous',
   blurb=['Book 3 is the Mission at work. Bassel Tannous runs a consular section',
          'in Ostport, where the queue is long, the cases are real and the duty',
          'phone rings at two in the morning. The book covers the window, the',
          'citizen in trouble, documents and proof, locally engaged colleagues,',
          'the record, the one-page cable and the month in numbers.'],
   units=['The Consular Window Opens', 'A Citizen in Trouble',
          'Passports, Powers and Proof', 'A Visa Enquiry That Is Not Simple',
          'Working With Locally Engaged Staff', 'The Duty Phone at Two in the Morning',
          'Notes That Become a Record', 'A Cable of One Page',
          'The Month in Numbers', 'What the Mission Cannot Do']),
 'B12': dict(code='B12', level='B1', badge='B1', bandge='B1.2', book='BOOK 4',
   title=['English for', 'Syrian Diplomats'], sub='Out in the Country',
   emblem='map', protagonist='Ziad Mikhail',
   blurb=['Book 4 leaves the capital. A mission that only knows the host',
          'ministry knows one building. Ziad Mikhail travels: regional',
          'authorities, a trade enquiry at the door, a diaspora hall, a',
          'university, a local journalist, the host press, an investment',
          'question nobody at the Mission can yet answer, and the visit report',
          'that says what the week was actually worth.'],
   units=['A Field Visit Is Approved', 'Meeting a Regional Authority',
          'A Trade Enquiry at the Door', 'An Evening in the Diaspora Hall',
          'Universities and Scholarships', 'A Local Journalist at an Event',
          'A New Law Nobody Has Read', 'A Question Beyond Your Mandate',
          'Heritage, Objects and Provenance', 'What the Week Was Worth']),
 'B21': dict(code='B21', level='B2', badge='B2', bandge='B2.1', book='BOOK 5',
   title=['English for', 'Syrian Diplomats'], sub='Negotiating Abroad',
   emblem='scale', protagonist='Hala Darwish',
   blurb=['Book 5 is the table. Hala Darwish represents the Mission at the',
          'Regional Council in Rhene, where text is agreed word by word and a',
          'comma is a position. The book covers instructions from the capital,',
          'the bilateral meeting, the margins of a conference, a memorandum,',
          'counting votes, the demarche, joint drafting and the report that does',
          'not flatter the person writing it.'],
   units=['Instructions From the Capital', 'The Bilateral Meeting',
          'The Margins of a Conference', 'A Memorandum of Understanding',
          'Counting Votes You Have Not Been Given', 'Delivering a Demarche',
          'When the Instruction Does Not Fit the Room', 'Drafting Jointly, Word by Word',
          'Reporting a Negotiation Honestly', 'What You Agreed, and What You Did Not']),
 'B22': dict(code='B22', level='B2', badge='B2', bandge='B2.2', book='BOOK 6',
   title=['English for', 'Syrian Diplomats'], sub='Speaking for the Country',
   emblem='speech', protagonist='Ambassador Walid Hourani',
   blurb=['Book 6 is the public face, and the hardest English in the course.',
          'An interview, three minutes on a panel, a doorstep question, a',
          'question about the past, a false claim that must be corrected without',
          'being amplified, a crisis at post, a community meeting, an honest',
          '“I do not know yet”, a handover note and the end of a tour.'],
   units=['The Interview Request', 'A Panel and Three Minutes',
          'The Doorstep Question', 'A Question About the Past',
          'Correcting the Record Without a Quarrel', 'A Crisis at Post',
          'The Community Meeting', 'Speaking Before You Know',
          'The File You Leave Behind', 'The End of a Tour']),
}

# ------------------------------------------------------------------ ai ladder
AI_LADDER = {
 'A21': [
  'a translation you can check, and one you cannot',
  'learning a building: asking for a plain explanation',
  'your name and your title, correct in another language',
  'forms and fields: what a system may fill in for you',
  'practical local information, and how to check it',
  'a telephone message written down correctly',
  'a first email draft that still sounds like you',
  'calendars, time zones and the appointment that moved',
  'directions, maps and information that is out of date',
  'a first report: what the system cannot see'],
 'A22': [
  'an invitation read correctly: date, dress, who is invited',
  'a guest list you can actually use in the room',
  'small talk prepared, not scripted',
  'protocol and seating: look it up, then ask a person',
  'a short speech drafted in two minutes, fixed in ten',
  'the event brief: one page for a reception',
  'a delegation programme, hour by hour',
  'a thank-you note that is not a form letter',
  'cultural questions where a general answer fails',
  'the record of who you met, and why it is worth keeping'],
 'B11': [
  'triage at the window: sorting enquiries in seconds',
  'the case that must reach a person immediately',
  'checking a document against the signs of a forgery',
  'live translation at a counter, and where it breaks',
  'drafting in English for colleagues who share no first language',
  'the duty phone: a script you can follow when half awake',
  'notes into a record, without inventing what was said',
  'one page from four pages of notes',
  'the month in numbers: counting what was actually done',
  'what must never be put into a system at all'],
 'B12': [
  'a briefing pack for a visit, from open sources',
  'who you are about to meet, and what is actually known',
  'screening an enquiry before you spend a week on it',
  'reaching a community in two languages',
  'the scholarship question a general system answers wrongly',
  'monitoring a host country’s media, daily',
  'reading legislation you have no time to read',
  'finding the edge of your mandate before you speak',
  'provenance: records, claims and what a system cannot settle',
  'the visit report, and the costing nobody does'],
 'B21': [
  'turning an instruction into a position you can hold',
  'preparing the other side’s case against your own',
  'the margins: finding the five people worth meeting',
  'comparing two texts word by word',
  'counting votes without pretending to know',
  'a demarche delivered exactly as instructed',
  'the gap between the instruction and the room',
  'joint drafting: tracking who proposed what',
  'the negotiation report that does not flatter you',
  'what was agreed, in the words that were agreed'],
 'B22': [
  'interview preparation: the questions you will actually be asked',
  'three minutes: cutting a position to its bones',
  'the doorstep: holding language that is still honest',
  'a question about the past, answered without a script',
  'correcting a false claim without amplifying it',
  'the first hour of a crisis at post',
  'speaking to your own community abroad',
  'saying you do not know yet, and meaning it',
  'a handover note a successor can actually use',
  'what a machine cannot do for a representative'],
}

# ------------------------------------------------------------ grammar ladder
GRAMMAR = {
 'A21': [
  'the present simple for routine and fact',
  'there is, there are, and prepositions of place',
  'possessives, titles and the order of names',
  'can, could and may for requests and permission',
  'countable and uncountable: some, any, a few, a little',
  'the present continuous for now and for arrangements',
  'the past simple: regular and irregular verbs',
  'prepositions of time: at, on, in, by, until',
  'questions: word order and short answers',
  'going to and will for plans and offers'],
 'A22': [
  'would like, shall and the language of invitation',
  'adjectives and adverbs of manner',
  'comparatives and superlatives',
  'the imperative and the polite instruction',
  'sequencing: first, then, after that, finally',
  'the present perfect for experience: have you ever',
  'object pronouns and reflexives',
  'too, enough, so and such',
  'should, must and had better for advice',
  'reported speech with say and tell'],
 'B11': [
  'the present perfect for a situation that continues',
  'defining relative clauses',
  'the passive in procedure',
  'obligation and prohibition: must, have to, may not',
  'the first conditional in undertakings',
  'indirect questions and polite enquiry',
  'the past continuous and the past simple together',
  'cause and result: because, so, as a result',
  'quantifiers and figures stated precisely',
  'verbs followed by to-infinitive and by -ing'],
 'B12': [
  'the past perfect in a sequence of events',
  'non-defining relative clauses',
  'the second conditional',
  'reporting verbs: claim, confirm, deny, explain',
  'articles with institutions, countries and titles',
  'hedging: seem, appear, tend to, reportedly',
  'contrast: although, however, whereas',
  'future forms for expectations and schedules',
  'purpose and result: so that, in order to',
  'participle clauses for background'],
 'B21': [
  'modals of deduction: must, may, might, cannot',
  'conditionals in negotiation: unless, provided that, failing that',
  'nominalisation in a written position',
  'cleft sentences for emphasis',
  'concession: while, whereas, notwithstanding',
  'authority in drafted text: shall, is to, may',
  'reference and substitution across a text',
  'degree and proportion stated exactly',
  'reported speech in a record of a negotiation',
  'the subjunctive in formal requirement: requests that it be'],
 'B22': [
  'question forms under pressure, and the question behind them',
  'the passive to place and to withhold responsibility',
  'tentative language: would, might, it may be that',
  'the third conditional and the language of regret',
  'stance verbs: acknowledge, regret, reject, welcome',
  'ellipsis, and what must never be left out',
  'we, one and the Mission: inclusive and distancing subjects',
  'future in the past: was going to, would, was due to',
  'cohesion across a long spoken answer',
  'restraint: parallelism, understatement and the short sentence'],
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
