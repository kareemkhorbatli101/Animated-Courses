# -*- coding: utf-8 -*-
"""English for College Students — International Edition — series parameters.

The course is for students studying through English at a university or college
anywhere: international students on a degree taught in English, students on an
English-medium programme in their own country, exchange and foundation
students, and anybody who has to read, write, argue and be assessed in a
language that is not their first.

The institution is invented and so is the town it stands in. Calderbrook
University, the Marden Institute of Technology, Alverrey College and Thornfield
Polytechnic are not anywhere. The students' home cities are real, because that
part is: eleven people from eleven places, sitting in the same seminar room,
being assessed against conventions none of them were told.

No real university, no real examination board, no real academic, no vendor and
no product appears anywhere in the series.

The spine is one sentence: the rules you are graded on are rarely the rules you
were told. The hidden curriculum — what counts as your own words, how much you
may disagree with a reading, how long an email to a lecturer should be, when
asking for help is allowed and when it is misconduct — is taught explicitly,
because nobody else is going to teach it.

The series signature is Part 10 of every unit: the sentence you must say when
you do not understand. Said early it costs you a moment. Said late, or never,
it costs you the module.
"""

FIELD = 'College Students'
SERIES = 'SEMINAR  ·  ENGLISH FOR COLLEGE STUDENTS'
STRAP = 'The rules you are graded on are rarely the rules you were told'
EDITION = 'International Edition'
TITLE = 'English for College Students'
FILESTEM = 'English_for_College_Students_International'
PART10 = 'The Sentence You Must Say When You Do Not Understand'

WORLD = ['Calderbrook University', 'the Marden Institute of Technology',
         'Alverrey College', 'the Kestrel Business School',
         'Thornfield Polytechnic', 'the Lysander Language Centre',
         'the Durnford Scholarship Trust', 'the Harrowfield Student Fund',
         'the Academic Registry', 'the Board of Examiners',
         'the Students’ Union', 'the Ravelin Library']

CITIES = ['Calderbrook', 'Marden', 'Alverrey', 'Thornfield',
          'Lagos', 'Nairobi', 'Accra', 'Kampala', 'Addis Ababa',
          'Cairo', 'Amman', 'Istanbul', 'Karachi', 'Lahore',
          'Delhi', 'Chennai', 'Dhaka', 'Colombo', 'Hanoi',
          'Jakarta', 'Manila', 'Seoul', 'Tokyo', 'Shanghai',
          'Almaty', 'Tashkent', 'Tbilisi', 'Bogotá', 'Lima',
          'São Paulo', 'Mexico City', 'Kyiv', 'Warsaw', 'Bucharest',
          'Athens', 'Lisbon', 'Casablanca', 'Rabat']

DEMONYMS = ['Calderbrook', 'Marden', 'Alverrey', 'Thornfield', 'Lysander',
            'Durnford', 'Harrowfield', 'Kestrel', 'Ravelin',
            'Calderbrook’s', 'Marden’s', 'Alverrey’s', 'Thornfield’s',
            'Kestrel’s', 'Ravelin’s', 'Lysander’s', 'Durnford’s',
            'Harrowfield’s',
            'Nigerian', 'Nigerians', 'Kenyan', 'Ghanaian', 'Ugandan',
            'Ethiopian', 'Egyptian', 'Egyptians', 'Jordanian', 'Turkish',
            'Pakistani', 'Pakistanis', 'Indian', 'Indians', 'Bangladeshi',
            'Sri', 'Lankan', 'Vietnamese', 'Indonesian', 'Filipino',
            'Korean', 'Japanese', 'Chinese', 'Kazakh', 'Uzbek', 'Georgian',
            'Colombian', 'Peruvian', 'Brazilian', 'Mexican', 'Ukrainian',
            'Polish', 'Romanian', 'Greek', 'Portuguese', 'Moroccan',
            'European', 'Europeans', 'British', 'German', 'French',
            'Lagos', 'Nairobi', 'Accra', 'Kampala', 'Cairo', 'Amman',
            'Istanbul', 'Karachi', 'Lahore', 'Delhi', 'Chennai', 'Dhaka',
            'Colombo', 'Hanoi', 'Jakarta', 'Manila', 'Seoul', 'Tokyo',
            'Shanghai', 'Almaty', 'Tashkent', 'Tbilisi', 'Lima', 'Kyiv',
            'Warsaw', 'Bucharest', 'Athens', 'Lisbon', 'Casablanca', 'Rabat']

BANDS = {'A2': (8.5, 12.5), 'B1': (11.5, 16.5), 'B2': (15.0, 21.0)}
CAPS = {'A2': 26, 'B1': 34, 'B2': 44}
WORDS = {'A2': (3500, 4700), 'B1': (4000, 5200), 'B2': (4400, 5600)}

ORDER = ['A21', 'A22', 'B11', 'B12', 'B21', 'B22']

BOOKS = {
 'A21': dict(code='A21', level='A2', badge='A2', bandge='A2.1', book='BOOK 1',
   title=['English for', 'College Students'], sub='The First Weeks',
   emblem='door', protagonist='Amina Yusuf',
   blurb=['Book 1 is arrival. Amina Yusuf works out who teaches, who marks and',
          'who advises, finds her way across a campus, writes a first email at',
          'the length a lecturer actually reads, says out loud that she did not',
          'understand, sorts a reading list into what comes first, and gets to',
          'the end of a week she did not think she would survive.'],
   units=['Who Is Who in a Department',
          'Your First Week, Day by Day',
          'Asking Where Something Is',
          'Your First Email to a Lecturer',
          'Saying You Did Not Understand',
          'The Reading List and the Library',
          'Signing Up and Filling In Forms',
          'A Timetable Clash',
          'Writing Down What Was Said in a Lecture',
          'The End of the First Week']),
 'A22': dict(code='A22', level='A2', badge='A2', bandge='A2.2', book='BOOK 2',
   title=['English for', 'College Students'], sub='Lectures, Notes and the Reading List',
   emblem='clock', protagonist='Amina Yusuf',
   blurb=['Book 2 is the ordinary week: a lecture she cannot follow, reading with',
          'a deadline behind it, a seminar where nobody speaks first, a group with',
          'one person not doing their part, the first short assignment, where the',
          'words came from, asking for more time before it is late, and a mark',
          'that comes back with writing all over it.'],
   units=['A Lecture You Cannot Follow',
          'Reading With a Deadline',
          'A Seminar Where Nobody Speaks',
          'Working in a Group',
          'A Classmate Who Does Not Do Their Part',
          'Your First Short Assignment',
          'Where the Words Came From',
          'Asking for More Time',
          'Getting a Mark Back',
          'The Week in Three Numbers']),
 'B11': dict(code='B11', level='B1', badge='B1', bandge='B1.1', book='BOOK 3',
   title=['English for', 'College Students'], sub='Saying What You Think in a Seminar',
   emblem='people', protagonist='Thanh Le',
   blurb=['Book 3 is the seminar room. Thanh Le learns to make a point somebody',
          'can answer, to disagree with a classmate without disagreeing with the',
          'classmate, to challenge a reading on a named assumption, to ask the',
          'question he is afraid is too basic, to say he has changed his mind, and',
          'close a discussion on what was agreed and what was not.'],
   units=['Making a Point That Can Be Answered',
          'Disagreeing With a Classmate',
          'Disagreeing With the Reading',
          'Asking the Question You Are Afraid Is Too Basic',
          'Saying You Have Changed Your Mind',
          'Speaking When You Are Not Ready',
          'Chairing a Small Group',
          'Presenting for Five Minutes',
          'A Tutor Who Says You Are Wrong',
          'Taking a Seminar to a Conclusion']),
 'B12': dict(code='B12', level='B1', badge='B1', bandge='B1.2', book='BOOK 4',
   title=['English for', 'College Students'], sub='Assignments, Sources and the Deadline',
   emblem='doc', protagonist='Diego Ferrer',
   blurb=['Book 4 is the written work. Diego Ferrer finds out what an essay',
          'question actually asks, plans before he drafts, learns where his own',
          'words end and somebody else’s begin, chooses sources he could defend',
          'to a marker, writes the counter-argument at its strongest, and asks',
          'about a mark against the criteria rather than against the marker.'],
   units=['What the Question Actually Asks',
          'A Plan Before a Draft',
          'Your Own Words and Somebody Else’s',
          'Choosing a Source You Can Defend',
          'An Argument With a Counter-Argument In It',
          'A Deadline You Will Not Meet',
          'A Draft Read By Somebody Else',
          'Where the Citation Goes',
          'A Mark You Think Is Wrong',
          'Submitting, and What You Keep']),
 'B21': dict(code='B21', level='B2', badge='B2', bandge='B2.1', book='BOOK 5',
   title=['English for', 'College Students'], sub='When It Goes Wrong',
   emblem='scale', protagonist='Priya Raman',
   blurb=['Book 5 is the year that does not go to plan. Priya Raman fails a',
          'module, answers an allegation she did not expect, is ill in an',
          'examination week, runs out of money, explains an absence without',
          'promising what she cannot do, asks to interrupt her studies, appeals on',
          'a stated ground, and tells her family once, in full.'],
   units=['Failing a Module',
          'An Allegation of Academic Misconduct',
          'Illness in an Examination Week',
          'Money That Has Run Out',
          'Attendance, and the Letter About It',
          'A Supervisor Who Does Not Reply',
          'When You Are Not Well Enough to Study',
          'A Complaint About Teaching',
          'An Appeal to an Examination Board',
          'Telling Your Family']),
 'B22': dict(code='B22', level='B2', badge='B2', bandge='B2.2', book='BOOK 6',
   title=['English for', 'College Students'], sub='The Dissertation, the Viva and What Comes Next',
   emblem='book', protagonist='Tomasz Wrona',
   blurb=['Book 6 is the long piece of work with your name on it. Tomasz Wrona',
          'narrows a question until it can be answered, writes a proposal with its',
          'limits in it, says what his study will not do, defends a method as a',
          'choice, writes up a result he did not want, drives his own supervision,',
          'answers an examiner, and finds the edge of what can be delegated.'],
   units=['A Question Small Enough to Answer',
          'A Proposal Your Supervisor Will Approve',
          'Reading Enough, and Knowing When to Stop',
          'Ethics, and What You Will Not Do',
          'A Method You Can Defend',
          'A Result That Is Not What You Hoped',
          'Writing the Limits of Your Own Work',
          'Supervision You Have to Drive',
          'The Viva',
          'What No Tool Can Do for Your Own Thinking']),
}

WORLD_LINE = ('Calderbrook University  ·  the Marden Institute of Technology  ·  '
              'Alverrey College  ·  the Lysander Language Centre')

INSIDE = ['Warm-up reading with five kinds of comprehension',
          'Twenty key terms, with gap and matching practice',
          'A grammar point, a loose/precise contrast, and two dialogues',
          'Speaking tasks · extended reading · guided writing',
          'A Working with AI track: one capability per unit, taught with its boundary',
          'A five-stage Decision Room with a full thinking scaffold',
          'A Brief Lab: task it, watch it fail, name the fault, repair it',
          'The Sentence You Must Say When You Do Not Understand',
          'A six-skill review, a Can-Do check and a complete answer key']

CAST = ('Amina Yusuf  ·  Thanh Le  ·  Diego Ferrer  ·  Priya Raman\n'
        'Tomasz Wrona  ·  Dr Helen Marsh  ·  Professor Ade Okonkwo\n'
        'Yuki Mori  ·  Samira Bekele  ·  Lukas Brandt  ·  Mei Chen')

CASTLINES = [
 ('Amina Yusuf', 'first-year undergraduate, Calderbrook University'),
 ('Thanh Le', 'second-year undergraduate, Calderbrook University'),
 ('Diego Ferrer', 'final-year undergraduate, Alverrey College'),
 ('Priya Raman', 'final-year undergraduate, the Marden Institute of Technology'),
 ('Tomasz Wrona', 'master’s student, Calderbrook University'),
 ('Dr Helen Marsh', 'module convenor and lecturer'),
 ('Professor Ade Okonkwo', 'dissertation supervisor'),
 ('Yuki Mori', 'academic skills tutor, the Lysander Language Centre'),
 ('Samira Bekele', 'student adviser, the Academic Registry'),
 ('Lukas Brandt', 'classmate, and the one who disagrees'),
 ('Mei Chen', 'doctoral student and seminar tutor'),
]

CASTBIOS = [
 ('Amina Yusuf', 'a first-year undergraduate from Lagos and the person Books 1 and 2 '
                 'follow. She arrives able to read English better than she can argue in '
                 'it, discovers in week one that the rules she is graded on were never '
                 'written down anywhere, and starts writing them down herself.'),
 ('Thanh Le', 'a second-year from Hanoi, and the person Book 3 follows. He learns that a '
              'seminar is not a test of fluency but of whether a point can be answered, '
              'and that the most useful sentence in the room is often a question.'),
 ('Diego Ferrer', 'a final-year student from Bogotá, and the person Book 4 follows. Works '
                  'out what an essay question is asking before he writes, where his own '
                  'words end, and how to query a mark against the criteria rather than '
                  'against the person who gave it.'),
 ('Priya Raman', 'a final-year engineering student from Chennai, and the person Book 5 '
                 'follows. Fails a module, answers an allegation, is ill in an examination '
                 'week, and finds out which university offices exist to help and how to '
                 'ask them in writing.'),
 ('Tomasz Wrona', 'a master’s student from Warsaw, and the person Book 6 follows. Narrows '
                  'a question until it can be answered, writes down what his study will '
                  'not do, and discovers in the viva that the limits he stated himself are '
                  'the only ones he is not asked to defend.'),
 ('Dr Helen Marsh', 'module convenor. Reads about two hundred emails a week, answers the '
                    'ones that state a name, a module and a question, and will say when a '
                    'student is wrong because she thinks saying so is part of teaching.'),
 ('Professor Ade Okonkwo', 'dissertation supervisor. Supervises nine students, replies '
                           'within a week to an agenda and within a month to a greeting, '
                           'and asks the question the write-up was arranged to avoid.'),
 ('Yuki Mori', 'academic skills tutor at the language centre. Teaches the conventions '
               'nobody else teaches: paraphrase, hedging, how much disagreement is '
               'expected, and what the instruction verb in a question is doing there.'),
 ('Samira Bekele', 'student adviser in the Registry. Knows which form stops a problem and '
                   'which form is only a record of it, and says which is which.'),
 ('Lukas Brandt', 'classmate from Bucharest. Disagrees in seminars, out loud, early, and '
                  'is wrong often enough to make the room safe for everybody else.'),
 ('Mei Chen', 'doctoral student from Shanghai and a seminar tutor. Marks first-year work, '
              'remembers being new, and will tell a student what the marking criteria '
              'actually mean if they ask.'),
]

TEAM = [('people', '%s\nour guide'),
        ('doc', 'Dr Helen Marsh\nThe Module'),
        ('book', 'Professor Ade Okonkwo\nSupervision'),
        ('scale', 'Samira Bekele\nThe Registry'),
        ('clock', 'Yuki Mori\nAcademic Skills'),
        ('globe', 'Mei Chen\nSeminar Tutor')]

GRAMMAR = {
 'A21': [
  'roles in a department: who teaches, who marks, who advises',
  'the timetable: on Mondays, at ten, in room',
  'asking for a place: where is, how do I get to, which floor',
  'a first email: who you are, what you need, by when',
  'saying you did not understand: I did not catch, could you repeat',
  'finding a book: is it in, is it out, can I reserve',
  'enrolment forms: full name, date of birth, course code',
  'two things at once: both, either, instead of',
  'notes in a lecture: said, showed, set, due',
  'closing a week: what I did, what I did not, what is next'],
 'A22': [
  'a lecture you cannot follow: I missed, I have, I need',
  'reading with a time limit: skim, read, read again',
  'a first turn in a seminar: I think, because, for example',
  'group work: I will, you will, we agreed',
  'a problem in a group: has not, was supposed to, needs to',
  'instruction words: describe, list, compare',
  'saying whose words: according to, writes, argues',
  'asking for time: I am writing to ask, because, until',
  'reading feedback: needs, should have, well done',
  'a week in numbers: read, wrote, attended'],
 'B11': [
  'a point with a basis: I think, because, which means',
  'disagreeing: I see that, but, the difficulty is',
  'disagreeing with a text: the author assumes, this holds only if',
  'asking in public: can I check, do you mean, is it the case that',
  'changing a position: I said, I now think, because of',
  'buying a second: that is a fair question, let me, I would say',
  'chairing: shall we, who has not, we have five minutes',
  'a short presentation: first, the key point is, in short',
  'being corrected: I had understood, I see, so if',
  'closing a discussion: so we agree, we differ on, the open question is'],
 'B12': [
  'instruction verbs: evaluate, account for, to what extent',
  'an essay plan: the claim, the sections, the evidence',
  'paraphrase and citation: argues, as cited in, my own view',
  'judging a source: published, peer reviewed, who funded it',
  'concession: although, it may be argued, nevertheless',
  'asking before it is late: I will not, I can, I am asking for',
  'using comments: does this, is it clear, I have changed',
  'referencing: in the text, in the list, with page numbers',
  'questioning a mark: the criteria say, I would like to understand',
  'submission: by, in, as a single file'],
 'B21': [
  'a failed module: I failed, the options are, I have decided',
  'answering an allegation: I did, I did not, the record shows',
  'evidence and dates: on, from, until, certified',
  'asking for financial help: I have, I do not have, I need by',
  'explaining absence: I was, I should have, I will',
  'escalating politely: I wrote on, I have not had, I am now asking',
  'saying it plainly: I am not able to, I need, I am asking for',
  'a complaint: on these dates, the effect was, I am asking for',
  'an appeal: the ground is, the evidence is, the remedy I seek is',
  'saying it at home: I have, it means, what I am doing'],
 'B22': [
  'narrowing a question: not whether, but which, under what conditions',
  'a proposal: the question, the method, the limits',
  'a literature position: most, few, nobody has',
  'ethics in writing: will not, only where, with consent',
  'defending a method: I chose, rather than, because',
  'an unwelcome result: found, did not find, which suggests',
  'limitations: this does not show, within, applies only to',
  'driving supervision: I have done, I am stuck on, I need by',
  'answering an examiner: as I say on page, I would now, I accept that',
  'authorship, honesty and what cannot be delegated'],
}

AI_LADDER = {
 'A21': [
  'a list of who to ask for what, checked against your own timetable',
  'a first-week plan written in the order the days happen',
  'directions rewritten as what you will see on the way',
  'a first email to a lecturer drafted at the length a lecturer reads',
  'a question drafted so that it gets an answer rather than a yes',
  'a reading list sorted into what to read first and what to skim',
  'form questions rewritten in the order the form asks them',
  'a timetable clash set out as two options and what each one costs',
  'lecture notes sorted into said, shown, set and due',
  'a first week written up as three things done and one not'],
 'A22': [
  'a lecture gap written down as what to ask and whom to ask',
  'a reading plan built from the hours you actually have',
  'a first seminar turn drafted to twenty seconds',
  'a group task split into who does what by when',
  'a note to a group member that states the task and the date',
  'an assignment question broken into what it asks you to produce',
  'a quotation separated from a paraphrase in your own notes',
  'a short extension request with its reason and its date',
  'feedback sorted into what to fix and what to keep',
  'a study week counted rather than remembered'],
 'B11': [
  'a seminar point drafted with its evidence attached',
  'a disagreement drafted so that it is about the claim',
  'a reading challenged on one stated assumption',
  'a question rewritten until it is about the idea',
  'a changed position written with what changed it',
  'a holding answer that is honest rather than empty',
  'an agenda for a student group built around one decision',
  'a five-minute talk cut to its one argument',
  'a correction written down so that it is still there in March',
  'a seminar closed on what was agreed and what was not'],
 'B12': [
  'an essay question split into its parts and its verb',
  'an essay plan with one claim per section',
  'a paraphrase checked against the original for borrowed structure',
  'a source list filtered on what you could defend to a marker',
  'a counter-argument drafted at its strongest',
  'an extension request written before the deadline rather than after',
  'comments on a draft turned into a list of changes',
  'a reference list checked against the citations in the text',
  'a query about a mark drafted against the marking criteria',
  'a submission checklist built from the module handbook'],
 'B21': [
  'a resit plan built from what the failure actually was',
  'an account of how a piece of work was produced, with its evidence',
  'a mitigating-circumstances claim with its evidence attached',
  'a hardship application written as figures rather than adjectives',
  'an attendance explanation that promises nothing you cannot do',
  'a chased request with its dates and its next step',
  'an interruption-of-study request stating what you are asking for',
  'a complaint drafted on effects rather than on people',
  'an appeal drafted against the stated grounds and nothing else',
  'bad news explained once, in full, with no second version'],
 'B22': [
  'a research question narrowed until it can be answered in the time',
  'a proposal drafted with its method and its limits stated',
  'a literature map that shows where your own question sits',
  'an ethics application that states what the study will not do',
  'a method section written as choices and their reasons',
  'a null result written up as a finding rather than a failure',
  'a limitations section that a reader could not add to',
  'a supervision agenda sent before the meeting',
  'viva answers prepared as claim, evidence and concession',
  'what no tool can do for your own thinking'],
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
