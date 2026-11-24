# -*- coding: utf-8 -*-
"""English for NGOs — New Syria Edition — series parameters.

The course is for the people who deliver and account for assistance in Syria
and who have to do it in English: field assistants and registration staff at a
gate, distribution team leaders, project and community outreach officers,
monitoring and evaluation officers, protection and safeguarding leads,
programme managers writing to donors, grants and compliance staff, and the
country directors who must answer to a board, to a donor, to a local council,
to a ministry and to the community itself in a second language.

It is a New Syria edition because the work it describes is reconstruction work:
local organisations taking over from international ones, local councils that
expect to be consulted rather than informed, communities that have been
assessed many times and want to know what came of it, and donors whose forms
were written somewhere else. The language of that handover is the language this
course teaches.

The edition's spine is the fact that makes humanitarian English what it is: the
need is always larger than the budget. Every criterion you write excludes
somebody who meets the need; every list has a line, and somebody is standing
just below it. The professional question is never how to help everybody. It is
how to say so, accurately and without cruelty, to the person in front of you —
and how to write down afterwards what you decided and on what basis, so that
the next person can see it was a decision and not an accident.

So the series signature is not a sentence you say when you are sure. It is the
sentence you say to somebody you cannot help: what the criterion was, where the
line fell, what remains open to them, and what you will not pretend.

Everything else follows from that. Book 1 is the gate: who does what, the
family without an appointment, the questions on the form, and the first refusal.
Book 2 is the working week behind the gate: the list, the distribution that runs
out, the complaint desk, the record. Book 3 is selection as language: criteria
that can be checked, the cut-off said out loud, a need in numbers, and a case
put to a committee. Book 4 is the written side: concept notes, results chains,
partner agreements, donor reports with their limits stated. Book 5 is the worst
week: a safeguarding concern reported before anybody is sure, a suspension, a
harm that cannot be undone, an audit. Book 6 is the organisation inside the
state and the community: policies of refusal, work with a local council, a
handover to a Syrian organisation, and judgement itself.
"""

FIELD = 'NGOs'
SERIES = 'LEDGER  ·  ENGLISH FOR NGOs'
STRAP = 'The need is always larger than the budget: the line falls somewhere, and somebody is standing just below it'
EDITION = 'New Syria Edition'
TITLE = 'English for NGOs'
FILESTEM = 'English_for_NGOs_New_Syria'
PART10 = 'The Sentence You Must Say to Somebody You Cannot Help'

WORLD = ['Hawran Relief Association', 'Orontes Development Foundation',
         'Sahl Water and Sanitation Trust', 'Qalamoun Women’s Cooperative',
         'Ebla Education Initiative', 'Barada Community Foundation',
         'the Northern Fund', 'the Hartley Foundation',
         'the Coastal Donor Consortium', 'the Humanitarian Pooled Fund',
         'the National Humanitarian Coordination Office',
         'the Jableh local council', 'the Daraa municipal council']

CITIES = ['Damascus', 'Aleppo', 'Homs', 'Hama', 'Latakia', 'Tartus',
          'Deir ez-Zor', 'Raqqa', 'Idlib', 'Daraa', 'As-Suwayda',
          'Qamishli', 'Al-Hasakah', 'Jableh', 'Baniyas',
          'Amman', 'Beirut', 'Istanbul', 'Cairo', 'Geneva', 'Brussels',
          'Nicosia', 'Athens', 'Vienna', 'Copenhagen', 'Nairobi']

DEMONYMS = ['Syrian', 'Syrians', 'Damascene', 'Jordanian', 'Lebanese',
            'Turkish', 'Iraqi', 'Egyptian', 'Egyptians', 'Emirati', 'Qatari',
            'Cypriot', 'Greek', 'Austrian', 'Danish', 'Kenyan', 'Indian',
            'Indians', 'Swiss', 'Belgian', 'Norwegian', 'Japanese',
            'Brazilian', 'European', 'Europeans', 'British', 'German',
            'French', 'Damascus', 'Aleppo', 'Homs', 'Hama', 'Latakia',
            'Tartus', 'Raqqa', 'Idlib', 'Daraa', 'Qamishli', 'Jableh',
            'Amman', 'Beirut', 'Istanbul', 'Cairo', 'Geneva', 'Brussels',
            'Nicosia', 'Athens', 'Vienna', 'Copenhagen', 'Nairobi',
            'Aleppo’s', 'Damascus’s', 'Latakia’s', 'Daraa’s']

BANDS = {'A2': (8.5, 12.5), 'B1': (11.5, 16.5), 'B2': (15.0, 21.0)}
CAPS = {'A2': 26, 'B1': 34, 'B2': 44}
WORDS = {'A2': (3500, 4700), 'B1': (4000, 5200), 'B2': (4400, 5600)}

ORDER = ['A21', 'A22', 'B11', 'B12', 'B21', 'B22']

BOOKS = {
 'A21': dict(code='A21', level='A2', badge='A2', bandge='A2.1', book='BOOK 1',
   title=['English for', 'NGOs'], sub='The Queue at the Gate',
   emblem='door', protagonist='Rana Tahan',
   blurb=['Book 1 is the gate. Rana Tahan learns who does what in a field team,',
          'meets a family who arrived without an appointment, asks the questions',
          'on the form so that an interpreter can read them aloud, says what will',
          'happen next, tells somebody they are not eligible today, gives advice a',
          'family can repeat, and writes the registration note the same day.'],
   units=['Who Does What in a Field Team',
          'A Family at the Gate Without an Appointment',
          'Asking the Questions on the Form',
          'Saying What Happens Next',
          'Telling Somebody They Are Not Eligible Today',
          'Asking Who Is in the Household',
          'Advice the Family Can Repeat to a Neighbour',
          'Giving a Date and a Place',
          'Writing the Registration Note on the Same Day',
          'Closing the Gate at the End of the Day']),
 'A22': dict(code='A22', level='A2', badge='A2', bandge='A2.2', book='BOOK 2',
   title=['English for', 'NGOs'], sub='The List, the Distribution and the Complaints Desk',
   emblem='clock', protagonist='Rana Tahan',
   blurb=['Book 2 is the week behind the gate: the list and the name that is not',
          'on it, a distribution that runs out while people are still standing,',
          'somebody who cannot come back, help that went to the wrong household,',
          'the record, a complaint taken down in the complainant’s own words, a',
          'volunteer’s first day, a near miss, and the week in three numbers.'],
   units=['The List and the Name That Is Not On It',
          'A Distribution That Runs Out',
          'Somebody Who Cannot Come Back',
          'Help That Went to the Wrong Household',
          'The Distribution Record',
          'A Complaint at the Desk',
          'A New Volunteer’s First Day',
          'A Family Back About the Same Problem',
          'A Near Miss in the Queue',
          'The Week in One Page']),
 'B11': dict(code='B11', level='B1', badge='B1', bandge='B1.1', book='BOOK 3',
   title=['English for', 'NGOs'], sub='Explaining a Decision Nobody Wants',
   emblem='compass', protagonist='Yusra Kassab',
   blurb=['Book 3 is selection as language: criteria an applicant can check',
          'against themselves, the cut-off said out loud, a need given as a',
          'number out of a hundred households, what the project will not do, an',
          'agreement with a community that means something, a manager who',
          'overrules the criteria, and a case put to the programme committee.'],
   units=['Setting Out Criteria That Can Be Checked',
          'Explaining Why Somebody Who Qualifies Was Not Selected',
          'Saying a Need in Numbers',
          'Saying What the Project Will Not Do',
          'An Agreement With a Community That Means Something',
          'Somebody Who Is Afraid of Losing Their Place',
          'A Local Council and a Village Committee in One Room',
          'Describing What the Assessment Found',
          'A Manager Who Overrules the Criteria',
          'Putting a Case to the Programme Committee']),
 'B12': dict(code='B12', level='B1', badge='B1', bandge='B1.2', book='BOOK 4',
   title=['English for', 'NGOs'], sub='Proposals, Partners and the Donor’s Report',
   emblem='speech', protagonist='Bassel Nahas',
   blurb=['Book 4 is the written side of the work: a concept note that asks one',
          'thing, a results chain with its assumptions beside it, a partner',
          'agreement that cannot be read two ways, a report with its limits, a',
          'budget revision, a data request, a donor’s comments, a grant return,',
          'a verification visit, and an extension request.'],
   units=['A Concept Note That Asks One Thing',
          'A Results Chain in Writing',
          'A Partner Agreement That Cannot Be Read Two Ways',
          'A Report With Its Limits Stated',
          'A Budget Revision You Have to Ask For',
          'Asking a Partner for Data You Need',
          'A Donor’s Comments, and What You Do With Them',
          'A Grant Return and Its Evidence',
          'A Verification Visit to a Partner',
          'A No-Cost Extension Request']),
 'B21': dict(code='B21', level='B2', badge='B2', bandge='B2.1', book='BOOK 5',
   title=['English for', 'NGOs'], sub='When Something Goes Wrong in the Field',
   emblem='scale', protagonist='Dr Lina Shadid',
   blurb=['Book 5 is the language of the worst week: a safeguarding concern',
          'reported before anybody is sure, telling a community that assistance',
          'is suspended, a harm that cannot be undone, refusing to resume too',
          'early, a demand and no time, a complaint about a process you designed,',
          'a colleague, an audit, and a decision taken alone at dusk.'],
   units=['Reporting a Safeguarding Concern Before You Are Sure',
          'Telling a Community That Assistance Is Suspended',
          'The Harm That Cannot Be Undone',
          'Refusing to Resume Too Early',
          'A Demand From a Donor, and No Time',
          'A Complaint About a Process You Designed',
          'A Colleague Whose Conduct Is Not Safe',
          'An Audit of the Programme',
          'A Complaint That Becomes a Case',
          'A Decision Taken Alone in a Village at Dusk']),
 'B22': dict(code='B22', level='B2', badge='B2', bandge='B2.2', book='BOOK 6',
   title=['English for', 'NGOs'], sub='The Organisation, the Community and the State',
   emblem='key', protagonist='Fares Attar',
   blurb=['Book 6 is the organisation inside a country: a case for a permanent',
          'field office, a committee chaired to a decision, a policy saying what',
          'will not be done, work with a local council, a government question',
          'answered exactly, a closure explained to the people it affects, a',
          'consultation, a handover to a Syrian organisation — and judgement.'],
   units=['A Case for a Permanent Field Office',
          'Chairing the Programme Committee',
          'A Policy That Says What Will Not Be Done',
          'Working With the Local Council',
          'A Government Question, Answered Exactly',
          'Explaining a Closure to the People It Affects',
          'A Consultation on Ending a Programme',
          'A Handover Plan to a Local Organisation',
          'A Figure the Board Will Not Like',
          'What No Tool Can Do for a Humanitarian Judgement']),
}

WORLD_LINE = ('Hawran Relief Association  ·  Orontes Development Foundation  ·  '
              'Sahl Water and Sanitation Trust  ·  the Northern Fund')

INSIDE = ['Warm-up reading with five kinds of comprehension',
          'Twenty key terms, with gap and matching practice',
          'A grammar point, a loose/precise contrast, and two dialogues',
          'Speaking tasks · extended reading · guided writing',
          'A Working with AI track: one capability per unit, taught with its boundary',
          'A five-stage Decision Room with a full thinking scaffold',
          'A Brief Lab: task it, watch it fail, name the fault, repair it',
          'The Sentence You Must Say to Somebody You Cannot Help',
          'A six-skill review, a Can-Do check and a complete answer key']

CAST = ('Rana Tahan  ·  Yusra Kassab  ·  Bassel Nahas  ·  Dr Lina Shadid\n'
        'Fares Attar  ·  Majd Haffar  ·  Nadia Sarrouj  ·  Ghassan Mroue\n'
        'Hiba Zaytoun  ·  Imad Barghout  ·  Salwa Rifai')

CASTLINES = [
 ('Rana Tahan', 'field assistant, then community outreach officer, Hawran Relief Association'),
 ('Yusra Kassab', 'project officer, Hawran Relief Association'),
 ('Bassel Nahas', 'programme manager, Orontes Development Foundation'),
 ('Dr Lina Shadid', 'protection and safeguarding lead, Sahl Water and Sanitation Trust'),
 ('Fares Attar', 'country director, Orontes Development Foundation'),
 ('Majd Haffar', 'distribution team leader, Hawran Relief Association'),
 ('Nadia Sarrouj', 'monitoring and evaluation officer, Orontes Development Foundation'),
 ('Ghassan Mroue', 'grants manager, the Northern Fund'),
 ('Hiba Zaytoun', 'chair, Qalamoun Women’s Cooperative'),
 ('Imad Barghout', 'head of the Jableh local council'),
 ('Salwa Rifai', 'member of a community accountability committee'),
]

CASTBIOS = [
 ('Rana Tahan', 'a field assistant at the Hawran Relief Association and the person '
                'Books 1 and 2 follow. She learns that the gate is where most of an '
                'organisation’s honesty actually happens, and that a registration note '
                'written badly on Tuesday is the reason nobody can answer a family’s '
                'question in March.'),
 ('Yusra Kassab', 'project officer, and the person Book 3 follows. Writes criteria an '
                'applicant can check against themselves, says out loud where the line '
                'fell, and will not take an agreement from a community that could not '
                'describe afterwards what it had agreed to.'),
 ('Bassel Nahas', 'programme manager, and the person Book 4 follows. Writes concept notes '
                'that ask one thing, reports that state their own limits, and partner '
                'agreements that cannot be read two ways in a village with no telephone '
                'signal.'),
 ('Dr Lina Shadid', 'protection and safeguarding lead, and the person Book 5 follows. '
                'Handles the concern reported before anybody is sure, the suspension, the '
                'harm that cannot be undone, the audit, and the colleague whose conduct is '
                'no longer safe.'),
 ('Fares Attar', 'country director, and the person Book 6 follows. Writes papers that ask '
                'a board for a decision rather than a discussion, hands programmes to '
                'Syrian organisations, and puts the unwelcome figure in the first line.'),
 ('Majd Haffar', 'distribution team leader. Runs the queue, trains the volunteers, and '
                'knows which of a team’s habits are controls and which are only habit.'),
 ('Nadia Sarrouj', 'monitoring and evaluation officer. Counts what the logframe says is '
                'counted, says what the sample does not cover, and asks for the record '
                'rather than the assurance.'),
 ('Ghassan Mroue', 'grants manager on the donor side. Reads every report properly, writes '
                'comments that distinguish a requirement from a suggestion, and has strong '
                'views about adjectives.'),
 ('Hiba Zaytoun', 'chair of a women’s cooperative and a partner rather than a beneficiary. '
                'Signs agreements she has read, and asks what happens to the work when the '
                'funding stops.'),
 ('Imad Barghout', 'head of a local council. Expects to be consulted rather than informed, '
                'and owns every question in these pages about what a community was '
                'promised.'),
 ('Salwa Rifai', 'member of a community accountability committee. Asks the question a '
                'report was written to avoid, and is usually right to.'),
]

TEAM = [('people', '%s\nour guide'),
        ('scale', 'Dr Lina Shadid\nProtection'),
        ('clock', 'Yusra Kassab\nSelection'),
        ('doc', 'Bassel Nahas\nReporting'),
        ('globe', 'Ghassan Mroue\nThe Donor'),
        ('book', 'Salwa Rifai\nCommunity Committee')]

GRAMMAR = {
 'A21': [
  'roles in a field team: who registers, who decides, who delivers',
  'a first approach: what happened, when, where you are living now',
  'asking form questions: how many, since when, do you have',
  'what happens next: we will, you will, and the day it happens',
  'saying no at the gate: you are not, because, and what you can do',
  'household questions: who lives with you, how old, who is not here',
  'advice: bring, do not bring, and come back on',
  'appointments: on, at, by the, and bring',
  'notes for the same day: said, seen, given, referred',
  'closing the day: how many came, how many were seen, who waits'],
 'A22': [
  'the list: is registered, was removed, is waiting',
  'running out: there were, there are now, there will not be',
  'a person who cannot come back: you came, I can, I cannot',
  'an error: was given, should have been, has been recorded',
  'the record: counted, signed, and by whom',
  'a complaint: you are saying, I have written, we will answer by',
  'a first day: you will see, you may ask, you must never',
  'the third visit: you came on, nothing has, here is what I can',
  'a near miss: what nearly happened, what stopped it, what changed',
  'the week in numbers: reached, missed, waiting'],
 'B11': [
  'criteria that can be checked: anyone who, provided that, except',
  'the cut-off: you met, we could fund, the line fell at',
  'need in numbers: of every hundred households, roughly, out of',
  'the limits of a project: this project does, it does not, it never',
  'an agreement with a community: you have agreed, you have not',
  'reassurance that is not a promise: I can, I cannot, what I will do',
  'two audiences at once: to the council, and to the committee',
  'describing an assessment without a verdict in it',
  'an overruling: you have decided, I have recorded, this remains open',
  'putting a case: the population, the question, the request'],
 'B12': [
  'a concept note: one problem, one response, one number',
  'a results chain: activity, output, outcome, and the assumption',
  'a subaward: shall, should, may, and what to query',
  'a report with its limits: this report covers, it does not cover',
  'a revision: it was, it is now, and why',
  'requesting data: what, for whom, under what agreement',
  'reading comments: what is required, what is advised, what is mine',
  'a return: what was done, when, and what evidence supports it',
  'method and finding in a verification visit',
  'asking for time: what remains, what it needs, what we will not ask for'],
 'B21': [
  'reporting on partial information: I, we, and what we know',
  'telling people: what has happened, what it means, what now',
  'the irreversible harm: what happened, what cannot be undone',
  'refusing: I cannot, because, and what I shall do instead',
  'pressure and no time: what I can do now, and by when',
  'answering a complaint about a process you designed',
  'raising a concern: what I saw, what I did, what I am asking for',
  'an audit: what you show, what you say, what you do not say',
  'a complaint becoming a case: acknowledgement, scope, timescale',
  'reconstructing a decision taken alone'],
 'B22': [
  'a business case: recommendation first, assurance second',
  'chairing to a decision: the question, the options, the resolution',
  'a policy of refusal: will not be undertaken, except where',
  'a shared problem: neither of us alone, both of us together',
  'answering an authority within the exact scope of the question',
  'a public explanation: plain words and a stated limit',
  'a consultation: the proposal, the alternatives, the deadline',
  'a handover in conditionals, with its assumptions named',
  'presenting an unwelcome figure: lead, cause, action',
  'judgement, accountability and what cannot be delegated'],
}

AI_LADDER = {
 'A21': [
  'a list of who does what, checked against the day at the gate',
  'a first-contact script for a family with no appointment',
  'form questions rewritten so an interpreter can read them aloud',
  'a next-steps explanation in the order the person will experience it',
  'a refusal at the gate drafted with the route that remains',
  'household questions drafted without assuming a household shape',
  'advice drafted so a family can repeat it to a neighbour',
  'an appointment given as a date, a place and a thing to bring',
  'same-day registration notes sorted into said, seen, given and referred',
  'an end-of-day count written as a short list'],
 'A22': [
  'a list checked for the names that should be on it',
  'a shortfall explained in the order people are standing in',
  'a conversation with somebody who cannot return, with the options stated',
  'a misdelivery written up as what happened and what follows',
  'a distribution record checked against the stock sheet',
  'a complaint taken down in the complainant’s own words',
  'an induction list written for a volunteer at a distribution point',
  'a third-visit reply drafted as what has and has not moved',
  'a near miss at a distribution point written as event, barrier and change',
  'a week reduced to three numbers and one sentence'],
 'B11': [
  'selection criteria rewritten so an applicant can check themselves',
  'a not-selected letter drafted with the cut-off stated',
  'a need restated as a number out of a hundred households',
  'a project boundary written as what it does not cover',
  'a community agreement recorded as what was accepted',
  'reassurance drafted without a promise of assistance in it',
  'a briefing addressed to an authority and a community together',
  'an assessment described with no conclusion about deservingness in it',
  'an overruled criterion recorded without pressure and without a verdict',
  'a case put to the committee as population, question and request'],
 'B12': [
  'a concept note drafted around the single change it buys',
  'a results chain drafted with its assumptions written beside it',
  'a partner agreement drafted so it cannot be read two ways',
  'a donor report drafted with its scope and its limits stated',
  'a budget revision drafted as was, is now, and why',
  'a data request to a partner drafted with its basis stated',
  'a donor’s comments sorted into requirement, advice and my action',
  'a grant return drafted as what was done, when, and what supports it',
  'a verification visit written up as method, finding and change',
  'an extension request drafted with what you are not asking for'],
 'B21': [
  'a safeguarding report sorted into facts, actions and what is not yet known',
  'a suspension notice prepared as act, effect and next step',
  'an irreversible harm written as what happened and what follows',
  'a refusal to resume drafted with its reason and the route that remains',
  'an urgent reply to a donor drafted with what is possible today',
  'a complaint about your own process answered from the record',
  'a concern about conduct recorded and routed without a verdict in it',
  'an audit answer drafted from the evidence that exists',
  'a formal complaint acknowledged with its scope and its timescale stated',
  'a decision taken alone reconstructed into a record with its basis'],
 'B22': [
  'a business case drafted with the recommendation in the first line',
  'an agenda built around decisions rather than updates',
  'a policy drafted as what will not be done as well as what will',
  'a joint problem stated so that neither body owns it alone',
  'an authority’s question answered within its exact scope',
  'a closure explained in plain words with a stated limit',
  'a consultation document drafted with alternatives that are real',
  'a handover plan drafted in conditionals with its assumptions named',
  'an unwelcome figure prepared as lead, cause and action',
  'what no tool can do for a humanitarian judgement'],
}

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
