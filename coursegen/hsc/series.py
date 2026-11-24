# -*- coding: utf-8 -*-
"""English for High School Students — International Edition — series parameters.

The course is for secondary-school students studying through English anywhere:
students at an international school, students on an English-medium stream in
their own country, and students at a national school who intend to apply to a
university that will assess them in English.

The school is invented and so is the town it stands in. Brackenhill
International School, Quillon Sixth Form College, the Eldermere Debating Union
and Westmere University are not anywhere. The students' home cities are real,
because that part is: eleven people from eleven places in the same classroom,
being assessed in a language none of them learnt first.

No real school, no real university, no real examination, no real test, no
awarding body, no vendor and no product appears anywhere in the series. The
course prepares a student for the two kinds of assessment most of them will
eventually meet — a timed reading-and-writing paper, and a four-skill English
proficiency test — by teaching the underlying competences as school subjects,
on school material, with no test named and no test technique taught. A student
who finishes Book 6 has the competences. Nobody has sold them a test.

The spine is one sentence: every subject has a language, and nobody teaches you
it. A physics answer, a history paragraph, a biology diagram and a maths
explanation are four different kinds of English, and a student who writes all
four the same way is marked down in at least three of them.

The series signature is Part 10 of every unit: the question you ask instead of
guessing. Asked in class it costs you four seconds. Not asked, it costs you the
topic, and then the term.
"""

FIELD = 'High School Students'
SERIES = 'CLASSROOM  ·  ENGLISH FOR HIGH SCHOOL STUDENTS'
STRAP = 'Every subject has a language, and nobody teaches you it'
EDITION = 'International Edition'
TITLE = 'English for High School Students'
FILESTEM = 'English_for_High_School_Students_International'
PART10 = 'The Question You Ask Instead of Guessing'

WORLD = ['Brackenhill International School', 'Quillon Sixth Form College',
         'the Marrowgate Public Library', 'the Eldermere Debating Union',
         'the Ashcombe Science Prize', 'the Varnesby Scholarship Trust',
         'Westmere University', 'Harrowgate University',
         'Lindholm University', 'the School Council',
         'the Examinations Office', 'the Careers Room']

CITIES = ['Brackenhill', 'Quillon', 'Marrowgate', 'Eldermere',
          'Lagos', 'Nairobi', 'Accra', 'Dakar', 'Addis Ababa',
          'Cairo', 'Amman', 'Beirut', 'Istanbul', 'Karachi',
          'Delhi', 'Chennai', 'Dhaka', 'Colombo', 'Hanoi',
          'Jakarta', 'Manila', 'Seoul', 'Tokyo', 'Shanghai',
          'Almaty', 'Tashkent', 'Tbilisi', 'Bogotá', 'Lima',
          'São Paulo', 'Mexico City', 'Kyiv', 'Warsaw', 'Bucharest',
          'Athens', 'Lisbon', 'Casablanca', 'Kuala Lumpur']

DEMONYMS = ['Brackenhill', 'Quillon', 'Marrowgate', 'Eldermere', 'Ashcombe',
            'Varnesby', 'Westmere', 'Harrowgate', 'Lindholm',
            'Brackenhill’s', 'Quillon’s', 'Marrowgate’s', 'Eldermere’s',
            'Ashcombe’s', 'Varnesby’s', 'Westmere’s', 'Harrowgate’s',
            'Lindholm’s',
            'Nigerian', 'Nigerians', 'Kenyan', 'Ghanaian', 'Senegalese',
            'Ethiopian', 'Egyptian', 'Egyptians', 'Jordanian', 'Lebanese',
            'Turkish', 'Pakistani', 'Pakistanis', 'Indian', 'Indians',
            'Bangladeshi', 'Sri', 'Lankan', 'Vietnamese', 'Indonesian',
            'Filipino', 'Korean', 'Japanese', 'Chinese', 'Kazakh', 'Uzbek',
            'Georgian', 'Colombian', 'Peruvian', 'Brazilian', 'Mexican',
            'Ukrainian', 'Polish', 'Romanian', 'Greek', 'Portuguese',
            'Moroccan', 'Malaysian', 'European', 'Europeans', 'British',
            'German', 'French',
            'Lagos', 'Nairobi', 'Accra', 'Dakar', 'Cairo', 'Amman', 'Beirut',
            'Istanbul', 'Karachi', 'Delhi', 'Chennai', 'Dhaka', 'Colombo',
            'Hanoi', 'Jakarta', 'Manila', 'Seoul', 'Tokyo', 'Shanghai',
            'Almaty', 'Tashkent', 'Tbilisi', 'Lima', 'Kyiv', 'Warsaw',
            'Bucharest', 'Athens', 'Lisbon', 'Casablanca']

BANDS = {'A2': (8.5, 12.5), 'B1': (11.5, 16.5), 'B2': (15.0, 21.0)}
CAPS = {'A2': 26, 'B1': 34, 'B2': 44}
WORDS = {'A2': (3500, 4700), 'B1': (4000, 5200), 'B2': (4400, 5600)}

ORDER = ['A21', 'A22', 'B11', 'B12', 'B21', 'B22']

BOOKS = {
 'A21': dict(code='A21', level='A2', badge='A2', bandge='A2.1', book='BOOK 1',
   title=['English for', 'High School Students'], sub='The School Day',
   emblem='clock', protagonist='Noor Haddad',
   blurb=['Book 1 is the ordinary day. Noor Haddad reads a timetable that assumes',
          'she already knows the building, works out what an instruction in class',
          'is actually asking her to do, asks a question out loud for the first',
          'time, writes down what was said and what was shown, hands something in',
          'late and says so, and gets to Friday with a list of what she missed.'],
   units=['A Timetable That Assumes You Know the Building',
          'What the Teacher Just Asked You to Do',
          'Asking a Question Out Loud',
          'Homework, and When It Is Actually Due',
          'Writing Down What Was Said',
          'Borrowing, Returning and the Thing You Lost',
          'A Form Your Family Has to Sign',
          'Being Away, and What You Missed',
          'A Week With Too Much in It',
          'Friday: Three Things Learnt, One Not Understood']),
 'A22': dict(code='A22', level='A2', badge='A2', bandge='A2.2', book='BOOK 2',
   title=['English for', 'High School Students'], sub='Every Subject Has Its Own Words',
   emblem='book', protagonist='Noor Haddad',
   blurb=['Book 2 is the discovery that physics, history, biology and maths are',
          'four different kinds of English. Noor learns what a definition has to',
          'contain, writes a process a classmate could follow, labels a diagram',
          'from the paragraph beside it, reads a table, finds out why science',
          'writing hides the person, and learns which word a subject will not let',
          'her use loosely.'],
   units=['A Definition That Actually Defines',
          'A Process Somebody Else Could Follow',
          'Labelling What You Are Looking At',
          'Two Things Compared, Fairly',
          'Because, So, and Which Means',
          'Numbers, Units and What They Are Per',
          'Why Science Writing Hides the Person',
          'Reading a Table Without Guessing',
          'The Word This Subject Will Not Let You Use Loosely',
          'A Lesson in Five Sentences']),
 'B11': dict(code='B11', level='B1', badge='B1', bandge='B1.1', book='BOOK 3',
   title=['English for', 'High School Students'], sub='Saying What You Think, and Why',
   emblem='people', protagonist='Mateo Alvarez',
   blurb=['Book 3 is the classroom argument. Mateo Alvarez learns to state a',
          'position somebody could disagree with, to give a reason that can be',
          'tested, to build the other side as strongly as he can make it, to',
          'answer what a classmate actually wrote, to say how sure he is, and to',
          'stop a sentence before it runs into the next one.'],
   units=['A Position Somebody Could Disagree With',
          'A Reason That Can Be Tested',
          'Building the Other Side First',
          'Answering What Was Actually Said',
          'Saying How Sure You Are',
          'Where One Sentence Stops and the Next Begins',
          'Joining Two Ideas Without Losing Either',
          'The Semicolon, the Colon and the Dash',
          'What This, It and They Are Pointing At',
          'Two Minutes, Standing Up']),
 'B12': dict(code='B12', level='B1', badge='B1', bandge='B1.2', book='BOOK 4',
   title=['English for', 'High School Students'], sub='Writing From What You Have Read',
   emblem='doc', protagonist='Sunita Pillai',
   blurb=['Book 4 is the essay built out of other people’s work. Sunita Pillai',
          'reports what a writer argued rather than what she wishes they had,',
          'paraphrases without keeping the shape, puts a quotation where it',
          'belongs, turns notes into one sentence, makes a list parallel, and',
          'chooses a transition from the relation rather than from the sound.'],
   units=['Reporting What a Writer Actually Argued',
          'A Paraphrase That Keeps Nothing But the Meaning',
          'Where the Quotation Goes',
          'Notes Into One Sentence',
          'What the Describing Word Is Attached To',
          'A List That Runs Straight',
          'The Apostrophe Audit',
          'A Transition Chosen From the Relation',
          'Claim, Evidence, Explanation',
          'A Plan Where Every Paragraph Proves a Sentence']),
 'B21': dict(code='B21', level='B2', badge='B2', bandge='B2.1', book='BOOK 5',
   title=['English for', 'High School Students'], sub='Evidence, Numbers and What They Do Not Show',
   emblem='scale', protagonist='Oleh Danyliuk',
   blurb=['Book 5 is the part where a figure disagrees with a feeling. Oleh',
          'Danyliuk describes a trend without a word the axis denies, separates',
          'what changed from what was measured, refuses the causal verb, narrows a',
          'claim to its sample, lists what a graph leaves out, and writes a',
          'conclusion the figure actually supports.'],
   units=['Describing a Trend the Axis Allows',
          'Twice as Many, a Third of, Three in Five',
          'Associated With Is Not Caused By',
          'Changed, Measured, Held the Same',
          'Narrowing a Claim to Its Sample',
          'What the Graph Does Not Show',
          'About, Exactly, At Least, At Most',
          'If, Unless and Provided That',
          'The Data Show, the Figure Suggests',
          'A Conclusion the Evidence Supports']),
 'B22': dict(code='B22', level='B2', badge='B2', bandge='B2.2', book='BOOK 6',
   title=['English for', 'High School Students'], sub='Applying: Choosing, Writing and Being Asked Why',
   emblem='door', protagonist='Fatima Sow',
   blurb=['Book 6 is the year of applying. Fatima Sow writes about herself in',
          'verbs rather than adjectives, chooses a course by reading its modules,',
          'sends an email with one question in it, asks for a recommendation',
          'properly, answers why this subject with one piece of work, declines an',
          'offer without closing a door, and finds the line nothing can write',
          'for her.'],
   units=['Writing About Yourself in Verbs',
          'Choosing a Course by Reading Its Modules',
          'An Email With One Question In It',
          'Asking Somebody to Recommend You',
          'Why This Subject',
          'Why This University',
          'Being Asked Why, Out Loud',
          'A Deadline You Will Meet',
          'Saying No, and Saying Not Yet',
          'The Line Nothing Can Write for You']),
}

WORLD_LINE = ('Brackenhill International School  ·  Quillon Sixth Form College  ·  '
              'the Marrowgate Public Library  ·  Westmere University')

INSIDE = ['Warm-up reading with five kinds of comprehension',
          'Twenty key terms, with gap and matching practice',
          'A grammar point, a loose/precise contrast, and two dialogues',
          'Speaking tasks · extended reading · guided writing',
          'A Working with AI track: one capability per unit, taught with its boundary',
          'A five-stage Decision Room with a full thinking scaffold',
          'A Brief Lab: task it, watch it fail, name the fault, repair it',
          'The Question You Ask Instead of Guessing',
          'A six-skill review, a Can-Do check and a complete answer key']

CAST = ('Noor Haddad  ·  Mateo Alvarez  ·  Sunita Pillai  ·  Oleh Danyliuk\n'
        'Fatima Sow  ·  Mr Daniel Okoye  ·  Ms Clara Benedek\n'
        'Dr Ravi Menon  ·  Ms Agnes Thorne  ·  Mr Hadi Rahimi  ·  Zofia Kaminska')

CASTLINES = [
 ('Noor Haddad', 'Year 9, Brackenhill International School'),
 ('Mateo Alvarez', 'Year 10, Brackenhill International School'),
 ('Sunita Pillai', 'Year 11, Brackenhill International School'),
 ('Oleh Danyliuk', 'Year 11, Brackenhill International School'),
 ('Fatima Sow', 'Year 13, Quillon Sixth Form College'),
 ('Mr Daniel Okoye', 'form tutor and geography teacher'),
 ('Ms Clara Benedek', 'English teacher'),
 ('Dr Ravi Menon', 'physics teacher'),
 ('Ms Agnes Thorne', 'school librarian'),
 ('Mr Hadi Rahimi', 'university adviser'),
 ('Zofia Kaminska', 'classmate, and the one who disagrees'),
]

CASTBIOS = [
 ('Noor Haddad', 'fourteen, from Amman, and the person Books 1 and 2 follow. She reads '
                 'English better than she speaks it, spends her first term working out '
                 'that each subject wants a different kind of sentence, and starts '
                 'keeping a page at the back of every exercise book for the words that '
                 'subject will not let her use loosely.'),
 ('Mateo Alvarez', 'fifteen, from Lima, and the person Book 3 follows. Learns that having '
                   'an opinion is the easy half, that a reason somebody can test is the '
                   'other half, and that the strongest thing he can do in a classroom '
                   'argument is build the other side before anybody else does.'),
 ('Sunita Pillai', 'sixteen, from Chennai, and the person Book 4 follows. Writes essays '
                   'out of other people’s work and finds out where her own words '
                   'start, why a paraphrase that keeps the shape is not a paraphrase, and '
                   'what a transition is actually claiming.'),
 ('Oleh Danyliuk', 'sixteen, from Kyiv, and the person Book 5 follows. Good at numbers '
                   'and careless with them in sentences, until a physics report comes '
                   'back with every causal verb circled and he has to learn what a graph '
                   'is allowed to say.'),
 ('Fatima Sow', 'eighteen, from Dakar, and the person Book 6 follows. Applying to '
                'universities in four countries, she stops describing herself with '
                'adjectives, starts describing what she actually did, and discovers that '
                'the hardest sentence in an application is the true one.'),
 ('Mr Daniel Okoye', 'form tutor and geography teacher. Teaches a hundred and sixty '
                     'students a week, reads every piece of work twice, and will tell a '
                     'class when a question they asked was a better question than the one '
                     'he set.'),
 ('Ms Clara Benedek', 'English teacher. Marks for whether a sentence can be answered, not '
                      'for whether it sounds impressive, and has a rule that a word used '
                      'to sound clever is a word used wrongly.'),
 ('Dr Ravi Menon', 'physics teacher. Circles every verb in a lab report that claims more '
                   'than the measurement allows, and explains, every single time, why the '
                   'circled verb was the whole mistake.'),
 ('Ms Agnes Thorne', 'school librarian. Knows which reference a student actually needs and '
                     'how to find out whether a source is one, and has never once made '
                     'anybody regret asking.'),
 ('Mr Hadi Rahimi', 'university adviser. Reads about four hundred draft applications a '
                    'year and can tell within a paragraph whether the student has written '
                    'about something they did or something they would like to be.'),
 ('Zofia Kaminska', 'classmate from Warsaw. Disagrees early, out loud, and in front of '
                    'everybody, and is wrong often enough that the rest of the class '
                    'stopped being frightened of being wrong.'),
]

TEAM = [('people', '%s\nour guide'),
        ('doc', 'Ms Clara Benedek\nEnglish'),
        ('book', 'Mr Daniel Okoye\nForm Tutor'),
        ('scale', 'Dr Ravi Menon\nPhysics'),
        ('clock', 'Ms Agnes Thorne\nThe Library'),
        ('globe', 'Mr Hadi Rahimi\nApplications')]

GRAMMAR = {
 'A21': [
  'the timetable: on Mondays, at nine, in room',
  'classroom instructions: underline, hand in, turn to',
  'asking in class: could you, may I, I do not have',
  'when it is due: by, before, on, until',
  'what was said and what was shown: said, wrote, showed',
  'borrowing and returning: lend, borrow, give back',
  'a form at home: full name, date of birth, signature',
  'being away: I was, I missed, I have to',
  'too much in one week: both, either, instead of',
  'closing a week: I learnt, I did not understand, I will ask',
 ],
 'A22': [
  'a definition: a thing that, used for, made of',
  'a process in order: first, then, after that, finally',
  'where it is on the diagram: at the top, between, on the left',
  'comparing two things: more than, fewer than, as as',
  'cause and effect: because, so, which means',
  'units and rates: per, by, of, for every',
  'the passive in a report: is heated, was measured',
  'reading a table: row, column, in the year',
  'a word used exactly: only, all, always, never',
  'summarising in five sentences: and then, finally, overall',
 ],
 'B11': [
  'stating a position: I think, I would argue, in my view',
  'a reason you can test: because, since, given that',
  'the other side: some people argue, it could be said',
  'answering a point: you said, you are right that, but',
  'how sure you are: may, might, tends to, probably',
  'sentence boundaries: the full stop, the comma splice',
  'joining two clauses: and, but, so, because, although',
  'the semicolon, the colon and the dash',
  'what a pronoun points at: this, it, they, which',
  'a two-minute answer: I will say three things',
 ],
 'B12': [
  'reporting a writer: argues, claims, suggests, shows',
  'paraphrasing: in other words, that is to say',
  'the quotation: punctuation, capital, attribution',
  'notes into one sentence: both, while, whereas',
  'modifiers and what they attach to',
  'parallel structure in a list',
  'possessives and plurals: the student’s, the students’',
  'transitions: however, therefore, moreover, instead',
  'claim and evidence: which shows, which suggests',
  'a plan: this paragraph proves that',
 ],
 'B21': [
  'describing a trend: rose, fell by, levelled off',
  'proportions: twice as many, a third of, three in five',
  'association and cause: is associated with, is followed by',
  'variables: changed, measured, held the same',
  'narrowing a claim: within, among, between',
  'what is missing: the axis, the range, the sample',
  'precision: about, exactly, at least, at most',
  'conditions: if, unless, provided that',
  'agreement with data: the data show, the figure suggests',
  'a conclusion: therefore, on this evidence, it follows that',
 ],
 'B22': [
  'writing about yourself: I did, I built, I ran',
  'reading a course description: covers, requires, assumes',
  'an email with one question: the context, the question, the thanks',
  'asking for a recommendation: I am applying for, by when',
  'why this subject: the moment, the work, the question',
  'why this university: the course, the module, the person',
  'an interview answer: claim, example, what changed',
  'a deadline: dates, attachments, confirmation',
  'declining politely: I am grateful, I have decided',
  'authorship: what is mine, what is not',
 ],
}

AI_LADDER = {
 'A21': [
  'a timetable rewritten in the order your day happens',
  'a classroom instruction turned into the steps it means',
  'a question for a teacher drafted to one line',
  'a homework list sorted into tonight, this week and not yet set',
  'a page of notes split into what was said and what was shown',
  'a list of what you borrowed and when each is due back',
  'a form filled in from what you know, with the gaps marked',
  'a catch-up list for the lessons you missed',
  'a week fitted into the hours you actually have',
  'a week written up as three things learnt and one not understood',
 ],
 'A22': [
  'a definition checked against the one the textbook gives',
  'a process written as numbered steps a classmate could follow',
  'a diagram labelled from the paragraph beside it',
  'a comparison table built from two paragraphs',
  'a cause-and-effect chain with each link named',
  'a unit check run through a whole calculation',
  'a paragraph rewritten in the passive where the passive belongs',
  'a table turned into three sentences a reader can check',
  'a word list of the terms this subject uses exactly',
  'a lesson summary cut to five sentences',
 ],
 'B11': [
  'a position stated so that somebody could disagree with it',
  'a reason reworded until it can be tested',
  'the strongest version of the argument against you',
  'a reply that answers what the other person actually said',
  'a hedge audit: every claim sized to what you can support',
  'a comma-splice sweep of your own paragraph',
  'two short sentences joined without losing either idea',
  'a punctuation pass that names the job of each mark',
  'a paragraph with its pronouns resolved to names',
  'a two-minute spoken answer planned in four lines',
 ],
 'B12': [
  'a writer’s argument restated in one sentence they would accept',
  'a paraphrase checked word by word against its original',
  'a quotation placed, punctuated and attributed',
  'a set of notes turned into one sentence that uses three of them',
  'a modifier sweep: every description attached to the right thing',
  'a list made parallel',
  'an apostrophe audit of a whole essay',
  'a transition chosen from the relation and not from the sound',
  'a paragraph with its claim, evidence and explanation labelled',
  'an essay plan where every paragraph names the sentence it proves',
 ],
 'B21': [
  'a trend described with no word the axis denies',
  'a proportion restated three ways and checked against the total',
  'a correlation stated without the causal verb',
  'an experiment split into changed, measured and held the same',
  'a claim narrowed to the sample it came from',
  'a list of what a graph leaves out, written before any claim',
  'a number’s precision matched to how it was measured',
  'a condition written so that it could actually be tested',
  'a data sentence with its verb agreed and its unit named',
  'a conclusion checked against the figure it rests on',
 ],
 'B22': [
  'an activity list rewritten as what you did rather than what you are',
  'a course compared with two others on its modules',
  'an email to an admissions office with one question in it',
  'a recommendation request with its deadline and its attachments',
  'an answer to why this subject, traced to one piece of work',
  'a course chosen by reading its modules rather than its reputation',
  'an interview answer built as claim, example and what changed',
  'an application tracker built backwards from its deadlines',
  'a decline written so that a door stays open',
  'what nothing can write for you about your own life',
 ],
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
