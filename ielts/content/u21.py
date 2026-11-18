# -*- coding: utf-8 -*-
"""Unit 21 - Education: Access and Outcomes. IELTS Volume 3, band 6.0."""

_EARN = dict(kind='bar', teaches='data',
             title='Median earnings five years after graduating',
             sub='by subject group, thousands a year', ylab='£000s',
             cats=['Medicine', 'Economics', 'Engineering', 'Law',
                   'Humanities', 'Creative arts'],
             series=[('Men', [52, 49, 38, 36, 27, 22]),
                     ('Women', [48, 42, 35, 33, 26, 21])])

UNIT = dict(
 n=21, vol=3, level='B2', band='6.0',
 theme='Education: Access and Outcomes',
 opener=(
   'This unit starts with an admissions page and ends with a question nobody '
   'has settled: whether money spent on schools can close a gap that is '
   'already there on the first morning of school. Along the way it asks what '
   'a degree is worth, which turns out to depend on what you compare it '
   'with.'),

 field='education',
 unitmap=dict(kind='unitmap', teaches='navigation', n=21,
              theme='Education: Access and Outcomes',
              rows=[
               ('Applying to university',
                'Multiple choice: read the option as a claim',
                'Multiple choice · sentence completion · note '
                'completion · Part 1'),
               ('Who gets in',
                'Yes/No/Not Given: three tests, in a fixed order',
                'Matching features · Yes/No/Not Given · Part 3'),
               ('What a degree is worth',
                'Task 1: choose three comparisons, not twelve numbers',
                'Matching information · True/False/Not Given · Task 1 '
                'Academic'),
               ('Why the gap opens early',
                'Matching headings: what a paragraph does',
                'Matching headings · Yes/No/Not Given · Part 4'),
               ('Whether spending can close it',
                'Task 2: read the question as four obligations',
                'Matching information · Task 2 discuss both views · '
                'Part 3')],
              note='Cycles 1, 3 and 5 build reading and open with a '
                   'reading preview; 2 and 4 build listening and open '
                   'with a listening one. The writing load sits in 3 '
                   'and 5, by which point the language to carry it has '
                   'been met twice.'),
 sceneintro='Eight things from an admissions office, and the words for '
            'them. Every one of these words is used in cycle 1, and six '
            'of them come back in cycle 2. Two minutes here will save '
            'you ten on the page after next, which is the only honest '
            'argument for any vocabulary exercise.',
 scene=dict(kind='scene', teaches='activate',
            title='Unit 21 · in the admissions office',
            instr='Write the number of each thing beside its word. Two '
                  'words in the bank are not in the picture at all.',
            cells=[('book', 'prospectus'),
                   ('laptop', 'application portal'),
                   ('envelope', 'offer letter'),
                   ('clock', 'deadline'),
                   ('cap', 'open day'),
                   ('coin', 'tuition fee'),
                   ('people', 'admissions tutor'),
                   ('chart', 'entry profile')],
            bank=['prospectus', 'deadline', 'offer letter', 'tuition fee',
                  'open day', 'entry profile', 'admissions tutor',
                  'application portal', 'bursary', 'transcript'],
            answers=['prospectus', 'application portal', 'offer letter',
                     'deadline', 'open day', 'tuition fee',
                     'admissions tutor', 'entry profile'],
            note='Answers: 1 prospectus · 2 application portal · '
                 '3 offer letter · 4 deadline · 5 open day · '
                 '6 tuition fee · 7 admissions tutor · 8 entry profile. '
                 'Not in the picture: bursary, transcript.'),
 puzzle=dict(kind='puzzle', teaches='curiosity',
             title='One of these is not what you would expect',
             question='Which group is most likely to turn down an offer '
                      'it has already accepted - and why might that be?',
             bars=[('Medicine', 4), ('Law', 7), ('Engineering', 9),
                   ('Humanities', 11), ('Creative arts', 26),
                   ('Education', 8)],
             mark=4, ylab='% of accepted offers later declined',
             note='The passage in cycle 3 answers this one. Write your '
                  'guess in the margin now and check it then; a guess '
                  'you have committed to is read very differently from '
                  'a question you have been handed.'),
 cycles=[
  dict(
   sub='Applying to university',
   step=1,
   notes=dict(
    serves='Multiple choice and sentence completion, Reading Parts 1-3; '
           'note completion in Listening Part 1',
    because='Band 6 readers choose the multiple-choice option that shares '
            'a word with the passage rather than the one that answers the '
            'question, and nothing in this book had ever shown them the '
            'difference',
    skill='Reading an option as a claim, then finding the one sentence '
          'that settles it',
    evidence='Audit: 113 of the 124 inputs in this volume were set with no '
             'preparation at all. This cycle prepares both of its own',
    watch='Learners will choose the option carrying the word deadline, '
          'because the passage says deadline. Expect it, and ask what the '
          'option actually claims',
    time='75 minutes, or 55 without the free grammar production'),
   lead=dict(
    title='What an offer actually is',
    body='An offer from a university is not a yes. It is a conditional '
         'promise: a short list of things that must be true by August for '
         'the place to exist at all. Everything in this cycle turns on '
         'that one word, conditional - the page you are about to read, '
         'the telephone call you are about to hear, and the letter you '
         'are about to write. Before you read anyone else’s conditions, '
         'say what yours were.',
    task='Answer these from your own experience. Three or four sentences '
         'each is enough, and there are no right answers.',
    qs=['What did you have to do, or prove, to get onto the course you '
        'are on now?',
        'Who decided, and did you ever find out how the decision was '
        'made?',
        'Is it fair to ask the same grades of everyone, whatever school '
        'they went to?',
        'What is the one thing you would want to know before applying '
        'anywhere?']),
   vocabwork=dict(
    title='The words an admissions page is made of',
    body='Sixteen words, in four groups. Every one of them is in the page '
         'on the next spread, and nine of them come back in unit 23 when '
         'the subject is public health rather than education, because '
         'this is the language of any institution deciding who is '
         'eligible for something.',
    figure=dict(kind='field', teaches='vocabulary', centre='admission',
                sub='cycle 1 · sixteen words you are about to need',
                branches=[
                 ('getting in', ['offer', 'place', 'entry requirement',
                                 'conditional']),
                 ('paying for it', ['tuition fee', 'bursary',
                                    'means-tested', 'waive']),
                 ('who decides', ['admissions tutor', 'criteria',
                                  'discretion', 'appeal']),
                 ('what you send', ['transcript', 'reference',
                                    'personal statement',
                                    'predicted grade'])],
                note='Cover the four groups and say which one each word '
                     'belongs to. A word you can place is a word you have '
                     'half learned.'),
    figure2=dict(kind='family', teaches='word-formation',
                 sub='cycle 1 · the dot marks the stress',
                 rows=[(('ap-ply', 2), ('ap-pli-ca-tion', 2),
                        ('ap-pli-cant', 1), '', ''),
                       (('ad-mit', 2), ('ad-mis-sion', 2), '',
                        ('ad-mis-si-ble', 2), ''),
                       (('qua-li-fy', 1), ('qua-li-fi-ca-tion', 4), '',
                        ('qua-li-fied', 1), ''),
                       ('', ('e-li-gi-bi-li-ty', 4), '',
                        ('e-li-gi-ble', 1), ''),
                       (('as-sess', 2), ('as-sess-ment', 2),
                        ('as-ses-sor', 2), '', '')],
                 note='A Reading gap will ask for one of the nouns where '
                      'the passage used the verb. That is the whole '
                      'reason this table is here, and the stress mark is '
                      'the reason you will be understood when you say '
                      'the word out loud.'),
    task='Complete each sentence with one word from the field map or the '
         'family table. Change the form where you have to.',
    items=[
     ('An offer that can be lowered for some applicants is called a '
      '____________ offer.', None, 'contextual'),
     ('The people who read and score an application are ____________.',
      None, 'assessors'),
     ('To be eligible is to meet the ____________ the university has set.',
      None, 'criteria'),
     ('If a fee is ____________, the university has agreed not to charge '
      'it.', None, 'waived'),
     ('The document listing the modules you have passed is a '
      '____________.', None, 'transcript'),
     ('A grade your teacher expects you to get is a ____________ grade.',
      None, 'predicted'),
     ('Support worked out from household income is ____________.',
      None, 'means-tested'),
     ('The noun from qualify is ____________.', None, 'qualification')]),
   builder=dict(
    skill='Multiple choice: read the option as a claim',
    qkind='skill',
    explain='A multiple-choice option is not a topic. It is a claim, and '
            'exactly one of the four claims is true of this passage. The '
            'habit that loses marks at band 6 is matching: you see the '
            'word deadline in option C and the word deadline in the '
            'passage, and you choose C without ever asking what C says. '
            'The habit that gains them is this. Read the option. Turn it '
            'into a sentence beginning The passage says that. Then go '
            'looking for the one sentence that would make it true, and '
            'read that sentence to its end. If you cannot find such a '
            'sentence, the option is wrong however many of its words you '
            'have just seen. Shared words are evidence of nothing: the '
            'wrong options are built out of them on purpose, because a '
            'test that could be passed by matching would measure typing '
            'speed.',
    worked=[
     'The passage says: “An offer is only withdrawn where the shortfall '
     'is substantial or where a required subject has not been passed.”',
     'Option A: offers are withdrawn when a student misses a grade. '
     'As a claim: the passage says that any missed grade loses the '
     'place. The sentence says the opposite - only a substantial '
     'shortfall does. A is wrong, and it is wrong even though it shares '
     'the words offer, withdrawn and grade.',
     'Option B: a near miss is usually accepted. As a claim: the passage '
     'says that most students who narrowly miss are still taken. The '
     'sentence before it says exactly that, in the words “we confirm a '
     'majority of near misses”. B is right, and it shares almost no '
     'vocabulary with the passage at all.'],
    task='Each line below gives a sentence from a text and an option. '
         'Write YES if the sentence makes the option true, and NO if it '
         'does not. Say in four words why.',
    items=[
     ('TEXT: Interviews are held only for courses with a professional '
      'registration requirement.  OPTION: all applicants are '
      'interviewed.', None, 'no'),
     ('TEXT: Decisions are released on a single date for all applicants.  '
      'OPTION: applying early brings an earlier answer.', None, 'no'),
     ('TEXT: About one application in nine goes to a third reader.  '
      'OPTION: a minority of applications are read three times.',
      None, 'yes'),
     ('TEXT: A contextual offer is made automatically.  OPTION: students '
      'must ask for a contextual offer.', None, 'no'),
     ('TEXT: We also accept the International Baccalaureate at 30 points.  '
      'OPTION: more than one qualification is accepted.', None, 'yes'),
     ('TEXT: The data comes from your application and from your school.  '
      'OPTION: the university gathers the information itself.',
      None, 'yes')],
    note='Four of the six are built from shared words and three of those '
         'four are false. That ratio is not an accident; it is how the '
         'paper is written.'),
   figures=[
    dict(kind='anatomy', teaches='question-anatomy',
         qtype='Multiple choice', sub='cycle 1, question 2',
         stem='According to the page, a near miss is usually',
         options=['dealt with by a deadline',
                  'considered and often accepted',
                  'referred to a third assessor',
                  'automatically rejected'],
         answer=1,
         why='“In practice we confirm a majority of near misses.” A '
             'majority is usually, and confirm is accept.',
         trap=(0, 'The page uses the word deadline twice and this option '
                  'reuses it. It is the only option that shares a word '
                  'with the paragraph, and it says nothing about what '
                  'happens to a near miss.'),
         note='Cover the two panels, choose, and then check whether you '
              'chose from a shared word or from a sentence.'),
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 1 · what the questions will have done to the page',
         pairs=[('turned down a place', 'declined an offer', 'synonym'),
                ('decide who gets in', 'the admissions decision',
                 'nominalisation'),
                ('the university lowered it',
                 'the requirement was lowered', 'voice'),
                ('most people who just miss out',
                 'a majority of near misses', 'reformulation'),
                ('is not unusual', 'is common', 'negation'),
                ('bursaries and fee waivers', 'financial support',
                 'hypernym')],
         note='Cover the right-hand column. Say what the page is likely '
              'to have written instead, and name the move. Then read the '
              'page and see how close you were.')],
   advice='The examiner is not testing whether you noticed a word. Every '
          'wrong option in Reading Part 1 is built from words that are in '
          'the passage, and that is deliberate. Answer from a sentence '
          'you can point at, not from a word you recognise. If you cannot '
          'point at the sentence, you have not answered yet.',
   debrief=dict(
    read=['Option A in question 2 carries the word deadline, and so does '
          'the paragraph. It is the only option that does. Notice that it '
          'makes no claim at all about what happens to a near miss.',
     'Question 4 tempts you with “automatically”, which is in the page - '
     'but it is the contextual offer that is automatic, not the decision.',
     'In question 5 two options are true of the page and only one answers '
     'the question asked. Read the stem again before you choose.'],
    listen=['The caller gives a date and then corrects it. The first date '
            'is always the wrong answer, and you will hear the correction '
            'coming: it begins “sorry, no”.',
     'Question 12 asks for the subject, not the grade. Both are said, in '
     'that order, and the grade is louder.']),
   outside='Every institution that decides who is eligible for something '
           'writes in this language - a clinic, a council, an insurer, a '
           'visa office. Reading a condition as a question rather than as '
           'a wall is a skill you will use long after this exam.',
   recycled=['offer', 'criteria', 'eligible', 'assessor', 'application'],
   read=[
    dict(preview=True,
         heading='Three words on every offer letter',
         kind='Glossary box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='Two hundred words before seven hundred. Meet the three words '
             'the long page is built out of, and the long page stops being '
             'about vocabulary and starts being about reading.',
         paras=[
          'An offer is conditional when the university has said yes to '
          'something that has not happened yet. Almost every offer made to '
          'a school-leaver is conditional, because it is made in January '
          'and the results arrive in August. The conditions are the grades, '
          'and sometimes a particular subject.',
          'An offer is unconditional when nothing is left to prove. A '
          'student who already holds their results, or who is transferring '
          'from another course, may be given one. Unconditional offers are '
          'a small minority and some universities make none at all.',
          'A contextual offer is a conditional offer set lower than the '
          'standard one, because of something the university knows about '
          'the applicant that is not an exam grade: the school they '
          'attended, the area they live in, time spent in care. It is '
          'still conditional. It is simply conditional on less.',
          'The three words are often confused, and the confusion is '
          'expensive. A student who reads contextual as unconditional '
          'stops working in February, and discovers in August that the '
          'condition was still there all along. The letter will have said '
          'so plainly. It is simply that nobody reads a letter that '
          'appears to be good news twice, which is the one habit this '
          'cycle is trying to break.'],
         items=[
          ('An offer is ____________ when the university is waiting for '
           'results that have not arrived.', None, 'conditional',
           'Paragraph 1: the offer is made in January and the results come '
           'in August, so something is still to be proved.'),
          ('An ____________ offer is given where nothing is left to prove.',
           None, 'unconditional',
           'Paragraph 2, and the passage says such offers are a small '
           'minority.'),
          ('A ____________ offer is set lower because of what the '
           'university knows about the applicant.', None, 'contextual',
           'Paragraph 3, which also insists that it is still conditional.')]),
    dict(heading='Entry requirements and contextual offers',
         kind='Admissions page', task='Multiple choice and sentence completion',
         band='gt_short', qtype='Questions 1-5',
         skill=('An offer with conditions is a list of questions',
                ['Where a page sets out an offer, look for the word if. '
                 'Every if introduces a condition, and every condition is a '
                 'question waiting to be asked.',
                 'Mark them on your first pass. You will answer four of five '
                 'questions from those sentences alone.']),
         paras=[
          'The standard offer for this course is BBB at A level, or an '
          'equivalent qualification. We also accept the International '
          'Baccalaureate at 30 points, and a range of vocational '
          'qualifications at merit or above.',
          'We make contextual offers, normally one grade below the standard '
          'offer, to applicants who meet at least one of our contextual '
          'criteria. These include attending a school whose results are below '
          'the national average, living in an area where few people go on to '
          'higher education, and having spent time in local authority care.',
          'A contextual offer is made automatically. You do not apply for one '
          'and you do not need to mention it in your personal statement; the '
          'data comes from your application and from your school. Applicants '
          'are told in the offer letter if a contextual offer has been made.',
          'All offers are conditional until results are published. If you '
          'narrowly miss your conditions we will still consider you, and in '
          'practice we confirm a majority of near misses. An offer is only '
          'withdrawn where the shortfall is substantial or where a required '
          'subject has not been passed.'],
         items=[
          ('The standard offer is',
           ['AAA', 'BBB', 'CCC', 'any three subjects'], 1,
           'Paragraph 1, with the International Baccalaureate '
           'equivalent given as 30 points.',
           {0: 'The standard offer is one grade below this in each '
               'subject.', 2: 'One grade below the standard offer is the contextual '
               'offer.', 3: 'A required subject must be passed, so the subjects are '
               'not free.'}),
          ('A contextual offer is normally',
           ['two grades lower', 'one grade lower', 'the same', 'one grade higher'],
           1,
           'Paragraph 2, for applicants meeting at least one of the '
           'criteria.',
           {0: 'Paragraph 2 says normally one grade lower, not two.', 2: 'A contextual offer is lower than the standard offer.', 3: 'A contextual offer is never above the standard offer.'}),
          ('To receive a contextual offer, an applicant must',
           ['apply for one', 'write about it in the personal statement', 'do nothing', 'ask their school'],
           2,
           'Paragraph 3: the offer is made automatically from data '
           'already held.',
           {0: 'Paragraph 3 says you do not apply for one.', 1: 'Paragraph 3 says it need not appear in the statement.', 3: 'The data comes from the school without being asked '
               'for.'}),
          ('Applicants who spent time in local authority ____________ meet a '
           'contextual criterion.', None, 'care',
           'Paragraph 2, alongside school results and area participation.'),
          ('An offer is withdrawn only where the ____________ is '
           'substantial.', None, 'shortfall',
           'Paragraph 4, or where a required subject has not been passed.')]),
    dict(heading='How applications are assessed',
         kind='Procedure notice', task='Sentence completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'Applications arrive through the central admissions service and are '
          'checked first for completeness. An application missing a reference '
          'or a predicted grade is held, and the applicant is contacted; it '
          'is not rejected, but it does not move forward until the missing '
          'item arrives.',
          'Complete applications are read by two assessors working '
          'independently. Each gives a score for academic attainment and a '
          'score for the personal statement, and the two scores are added. '
          'Assessors do not see each other’s marks while they read.',
          'Where the two assessors disagree by more than three points, the '
          'application goes to a third reader, whose decision is final. About '
          'one application in nine takes this route, and the rate is '
          'published each year in our admissions report.',
          'Decisions are released on a single date for all applicants, which '
          'is why an early application does not receive an early answer. '
          'Interviews are held only for courses with a professional '
          'registration requirement, and those applicants are notified '
          'separately in February.'],
         items=[
          ('An incomplete application is ____________ rather than rejected.',
           None, 'held',
           'Paragraph 1: the applicant is contacted and the application waits '
           'for the missing item.'),
          ('Each application is read by ____________ assessors working '
           'independently.', None, 'two',
           'Paragraph 2, each scoring attainment and the personal '
           'statement.'),
          ('A disagreement of more than ____________ points goes to a third '
           'reader.', None, 'three',
           'Paragraph 3, and that reader’s decision is final.'),
          ('Interviews are held only for courses with a professional '
           '____________ requirement.', None, 'registration',
           'Paragraph 4, with those applicants notified separately in '
           'February.')])],
   listen=[
    dict(heading='An admissions enquiry', part='Part 1',
         task='A telephone call to an admissions office · note completion', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Adviser', 'Admissions, Beatriz speaking.'),
          ('Caller', 'Hello. I wanted to ask about applying for the physiotherapy '
           'course.'),
          ('Adviser', 'Of course. Are you applying this year or next?'),
          ('Caller', 'Next year. I am in my first year of A levels.'),
          ('Adviser', 'Good, you have time. Can I take your name?'),
          ('Caller', 'It is Okonjo. O-K-O-N-J-O.'),
          ('Adviser', 'Thank you. Now, physiotherapy asks for BBC, and it '
           'needs biology as one of the three. People miss that and it is the '
           'commonest reason we cannot make an offer.'),
          ('Caller', 'I am doing biology, chemistry and psychology.'),
          ('Adviser', 'That is fine for us. One thing to mention: '
           'physiotherapy is one of our interview courses, because of the '
           'professional registration. Interviews are in February.'),
          ('Caller', 'What happens at the interview?'),
          ('Adviser', 'Two members of staff, about twenty minutes, and it is '
           'not a test of knowledge. They are looking at whether you '
           'understand what the job actually involves, which is why we ask '
           'everyone to arrange some work experience first.'),
          ('Caller', 'How much do I need?'),
          ('Adviser', 'Two weeks is the guideline, and it does not have to be '
           'in a hospital. A sports club or a care home counts, and we would '
           'rather see four days somewhere you reflected on than a month '
           'where you watched.'),
          ('Caller', 'Does the work experience need to be arranged before I apply?'),
          ('Adviser', 'Before the interview, not before the application. If it is booked but not finished, say so on the form and give the dates, which is perfectly acceptable and tells us you have organised it.'),
          ('Caller', 'That is useful. Is there anything else?'),
          ('Adviser', 'Check whether you qualify for a contextual offer. You '
           'do not apply for it, but it is worth knowing, because it would '
           'drop your offer to BCC.')],
         items=[
          ('Family name: ____________', None, 'Okonjo',
           'Spelled out by the caller, letter by letter.'),
          ('Standard offer for physiotherapy: ____________', None, 'BBC',
           'With biology required as one of the three subjects.'),
          ('Interviews are held in ____________.', None, 'February',
           'Because the course carries a professional registration '
           'requirement.'),
          ('Recommended work experience: ____________ weeks', None, 'two',
           'Though the adviser says the setting matters less than the '
           'reflection.'),
          ('A contextual offer would be ____________.', None, 'BCC',
           'One grade below the standard offer of BBC.')]),
    dict(heading='A short talk: what admissions staff actually read',
         part='Part 2', task='A talk to sixth-form students · short answer, sentence completion and multiple choice', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'I have read about nine thousand personal statements and '
           'I want to spend fifteen minutes telling you what happens to yours, '
           'because almost everything you have been told about them is '
           'slightly wrong.'),
          ('Speaker', 'First, the time. I give a statement about ninety '
           'seconds on a first read. That is not carelessness; it is four '
           'hundred applications in a fortnight, and ninety seconds is enough '
           'to answer the only question I am asking, which is whether this '
           'person understands the subject they have applied for.'),
          ('Speaker', 'Second, the opening. Do not spend it on a quotation, '
           'and do not tell me you have been fascinated by medicine since you '
           'were four. I have read that sentence eleven hundred times. Start '
           'with something you did, and the more ordinary it is the better it '
           'reads.'),
          ('Speaker', 'Third, and this is the part people find hardest to '
           'believe: your work experience matters far less than what you say '
           'about it. Two students write about the same hospital placement. '
           'One lists what she saw. The other says what surprised her and what '
           'she went away and read because of it. The second is the one I '
           'remember at the meeting.'),
          ('Speaker', 'Fourth, length. You have four thousand characters and '
           'you do not have to use them. A short statement that is all '
           'substance beats a full one with three hundred words of '
           'enthusiasm at the front.'),
          ('Speaker', 'And the last thing. The statement is one of two scores '
           'and the other is your grades. A brilliant statement will not '
           'rescue an application that misses the academic bar, and knowing '
           'that should make the whole thing less frightening, not more.')],
         items=[
          (
           'How long does the speaker give a statement on a first '
           'read?', None, 'ninety seconds',
           'She explains this as four hundred applications in a '
           'fortnight.'),
          (
           'She advises against opening with a quotation or a '
           'childhood ____________.', None, 'ambition',
           'She says she has read the childhood-ambition sentence '
           'eleven hundred times.'),
          (
           'What matters more than the work experience itself is what '
           'you ____________ about it.', None, 'say',
           'The student who says what surprised her is the one she '
           'remembers.'),
          ('What does she say about the character limit?',
           ['Use all of it', 'You do not have to use it', 'It is strictly enforced', 'It has recently changed'],
           1, 'A short statement of substance beats a padded full one.',
           {0: 'She says a short statement of substance reads better.', 2: 'Enforcement of the limit is not what she discusses.', 3: 'No change in the character limit is mentioned.'})])],
   speak=dict(
    part='Part 1', focus='Your education so far',
    intro=('Two or three sentences each. Part 1 wants a clear answer with one '
           'reason attached, and nothing more.'),
    qs=['What subjects did you enjoy at school?',
        'Is it common in your country to go to university?',
        'Would you like to study in another country?',
        'What do you think makes a good teacher?'],
    shape=[('answer', 'Geography, mostly, which surprised everybody.'),
           ('support', 'We had a teacher who took us out to look at things.'),
           ('follow-up', 'So it stopped being a subject and became a way of '
            'looking at places.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Writing to an admissions office',
         prompt=('You have applied for a course and have not received a reply. '
                 'Write a letter to the admissions office. In your letter: '
                 'give the details of your application; explain why you are '
                 'writing now; ask what will happen next. Write at least 150 '
                 'words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about my application for the BSc in Physiotherapy, '
          'reference PHY/2291. I applied on 14 October and received an '
          'acknowledgement on 16 October, but I have heard nothing since.',
          'I am writing now for two reasons. The first is that your website '
          'says decisions are released on a single date, and that date was '
          'two weeks ago. The second is that I have been invited to interview '
          'by another university on 3 March, and I would prefer to make a '
          'decision knowing where I stand with you.',
          'I would be grateful if you could tell me three things: whether my '
          'application is still being considered; whether I have been '
          'selected for interview, since I understand that physiotherapy is '
          'an interview course; and the date by which I can expect a '
          'decision. If any part of my application is missing, I will supply '
          'it immediately.',
          'Thank you for your help.',
          'Yours faithfully,',
          'A. Okonjo'],
         notes=[
          'The second bullet gives two reasons and the second one is the real '
          'one. Putting the weaker reason first and the stronger second is '
          'worth doing deliberately, because the last thing a reader sees is '
          'the thing they act on.',
          'The three questions are numbered in the sentence. A letter that '
          'asks "please let me know what is happening" gives the reader '
          'nothing to answer; three specific questions get three specific '
          'answers.',
          'Dear Sir or Madam with Yours faithfully. The writer does not know '
          'a name, and inventing one to use "sincerely" is a mistake that '
          'costs marks for no reason.'],
         criterion=[('Three specific questions in place of a general enquiry',
                     'Task Achievement'),
                    ('The stronger reason placed second',
                     'Coherence and Cohesion'),
                    ('Correct salutation and sign-off pairing',
                     'Lexical Resource')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    ref='L4',
    context=[
     'Dear Admissions Office,',
     'I am writing about my application for the BSc in Physiotherapy, '
     'reference 4471-G. My offer letter sets a condition in biology, and '
     'I would be grateful if you could tell me whether the grade required '
     'is the one printed on the letter or the one quoted on the course '
     'page, since the two differ. I should also be glad to know by what '
     'date a resit result would need to reach you.'],
    notice=[
     ('The writer asks two questions. Neither of them has a question '
      'mark. Copy out the words that begin each one.', 'I would be '
      'grateful if you could tell me whether; I should also be glad to '
      'know'),
     ('Why is “whether” used rather than “if” after tell me?',
      'whether introduces a choice between two stated alternatives')],
    noticetask='Answer both from the letter above. Neither can be '
               'answered without looking at how the questions are built.',
    contrast='A direct question inside a formal letter - Which grade do '
             'you want? - is not rude in itself, but it reads as a demand '
             'and it invites a one-word answer. The embedded form asks '
             'the same thing and leaves room for an explanation, which is '
             'what you actually wanted. Note the word order: after tell '
             'me whether, the subject comes before the verb, exactly as '
             'in a statement. Writing “tell me whether is the grade '
             'correct” is the commonest error at this band.',
    task2='Rewrite each direct question as an embedded one, beginning '
          'with the words given. Watch the word order.',
    items2=[
     ('When will the decision be released? → I would be grateful if you '
      'could tell me ____________.', None,
      'when the decision will be released'),
     ('Is a resit acceptable? → I should be glad to know ____________.',
      None, 'whether a resit is acceptable'),
     ('Who assesses the personal statement? → Could you let me know '
      '____________?', None, 'who assesses the personal statement'),
     ('Has my transcript arrived? → I am writing to ask ____________.',
      None, 'whether my transcript has arrived')],
    task3='Now write the whole thing. You have been made a conditional '
          'offer and one of its conditions is unclear. Write the opening '
          'paragraph of your letter and two embedded questions, about '
          'sixty words in all. Use one pattern from the box and one of '
          'your own.',
    items3=8,
    point='Asking for information in a formal letter',
    explain=('A direct question in a formal letter sounds abrupt, and a vague '
             'one gets a vague answer. These patterns ask precisely and '
             'politely at the same time.'),
    examples=['I would be grateful if you could tell me whether my '
              'application is still being considered.',
              'Could you confirm the date by which I can expect a decision?',
              'I should like to know whether I have been selected for '
              'interview.',
              'Please let me know if any part of my application is '
              'missing.'],
    task='Rewrite each direct question for a formal letter.',
    items=[('Am I still being considered?',
            'I would be grateful if you could tell me whether I am still '
            'being considered.'),
           ('When will you decide?',
            'Could you confirm the date by which a decision will be made?'),
           ('Do I have an interview?',
            'I should like to know whether I have been selected for '
            'interview.'),
           ('What is missing?',
            'Please let me know if any part of my application is '
            'incomplete.'),
           ('Did you get my reference?',
            'Could you confirm that my reference has been received?')]),
   vocab=[('contextual offer', 'an offer lowered because of a student’s '
           'circumstances'),
          ('conditional', 'depending on results not yet known'),
          ('predicted grade', 'the grade a school expects a student to get'),
          ('personal statement', 'what an applicant writes about themselves'),
          ('attainment', 'what a student has actually achieved'),
          ('shortfall', 'the amount by which something falls short'),
          ('near miss', 'a result just below the condition set'),
          ('assessor', 'a person who reads and scores an application')],
   expr=[('I am writing about my application for',
          'names the matter and the reference at once'),
         ('I am writing now for two reasons',
          'announces structure the reader can follow'),
         ('I would be grateful if you could tell me three things',
          'frames a list the reader must answer'),
         ('I would prefer to make a decision knowing where I stand',
          'gives a reason the reader can act on')],
   trans=['the first is', 'the second is', 'since', 'if'],
  ),

  dict(
   sub='Who gets in',
   step=2,
   figures=[
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 2 · how the four texts will have said it',
         left='THE STATEMENT SAYS', right='THE WRITER WROTE',
         pairs=[('it is a quota', 'no number is set and no place is '
                 'reserved', 'negation'),
                ('the standard has fallen', 'the entry requirement is '
                 'unchanged', 'negation'),
                ('they let in weaker students', 'the intake has widened',
                 'reformulation'),
                ('help with the fees', 'financial support', 'hypernym'),
                ('the university decides', 'the decision rests with the '
                 'institution', 'nominalisation'),
                ('most of them finish', 'completion rates are '
                 'comparable', 'reformulation')],
         note='Six of the eight questions in this cycle turn on one of '
              'these six moves. Cover the right column and predict.'),
   ],
   notes=dict(
    serves='Matching features and Yes/No/Not Given, Reading Parts 2-3; '
           'multiple choice in Listening Part 3',
    because='Yes/No/Not Given is lost on NOT GIVEN, which learners award '
            'to anything they did not understand and withhold from '
            'anything whose words they recognise - a problem of procedure, '
            'not of reading',
    skill='Deciding what a writer has actually claimed, as against what a '
          'reader agrees with',
    evidence='gate10 census: Yes/No/Not Given is the third commonest type '
             'in this book and the only one with no taught procedure '
             'anywhere in the volume before this cycle',
    watch='Learners will mark NOT GIVEN for statement 21 because the word '
          'quota is absent, although the writer rejects the idea twice in '
          'different words. Expect it, and go back to the paraphrase '
          'bridge from cycle 1',
    time='80 minutes, or 60 without the free grammar production'),
   lead=dict(
    title='The same word, two meanings',
    body='Almost every argument about admissions is an argument about one '
         'word, and the word is fair. Two people can both want a fair '
         'system and want opposite things, because one of them means '
         'everybody takes the same test and the other means everybody has '
         'the same chance of passing it. Neither is lying. Before you read '
         'four people arguing about it, decide which one you are.',
    task='Answer these honestly. Then listen to the preview recording and '
         'see which of the two speakers you agree with.',
    qs=['Is a test fair if everyone sits the same paper on the same day?',
        'Does it matter what happened to the candidates in the four years '
        'before that day?',
        'If a university lowers its offer for some applicants, what has it '
        'done - corrected something, or lowered a standard?',
        'Who should decide what fair means here: the universities, the '
        'government, or the applicants?']),
   vocabwork=dict(
    title='How certain is the claim?',
    body='The four texts you are about to read agree about almost all the '
         'facts and disagree about what follows from them. The difference '
         'lives in a handful of words, and those words are what the '
         'matching-features questions are really asking about. In cycle 1 '
         'you met the vocabulary of a process; this is the vocabulary of '
         'a position.',
    figure=dict(kind='cline', teaches='scale',
                title='How strongly is this being claimed?',
                sub='cycle 2 · the seven degrees the four texts use',
                left='barely a suggestion', right='flatly asserted',
                items=[('it may be that', 0.03),
                       ('there is a case for', 0.17),
                       ('the evidence points to', 0.34),
                       ('it is reasonable to conclude', 0.5),
                       ('it is clear that', 0.68),
                       ('there can be no doubt', 0.85),
                       ('it is simply wrong to', 0.98)],
                note='A matching-features question rarely asks who '
                     'mentioned a thing. It asks who was sure about it. '
                     'That is this line.'),
    figure2=dict(kind='collocation', teaches='collocation',
                 node='criteria', sub='cycle 2',
                 groups=[('verb + criteria',
                          ['meet the criteria', 'set criteria',
                           'apply criteria', 'relax the criteria',
                           'fail to meet the criteria']),
                         ('adjective + criteria',
                          ['contextual criteria', 'strict criteria',
                           'published criteria', 'objective criteria']),
                         ('criteria + preposition',
                          ['criteria for entry', 'criteria used by',
                           'criteria set out in'])],
                 note='Not one of these is "do the criteria" or "reach '
                      'the criteria". You meet them.'),
    task='Choose the phrase from the cline that matches the strength of '
         'each claim, and the collocation that completes each sentence.',
    items=[
     ('The writer is almost certain but will not say so outright: '
      '____________ points to a rise.', None, 'the evidence'),
     ('The writer thinks the opposite view is not merely weak but '
      'mistaken: it is simply ____________ to call this a quota.',
      None, 'wrong'),
     ('The writer offers it as one possibility among several: '
      '____________ be that the effect fades.', None, 'it may'),
     ('An applicant who satisfies the conditions has ____________ the '
      'criteria.', None, 'met'),
     ('When a university makes its conditions easier it ____________ the '
      'criteria.', None, 'relaxes'),
     ('Conditions anyone can read are ____________ criteria.',
      None, 'published'),
     ('Conditions that do not depend on who is judging are ____________ '
      'criteria.', None, 'objective'),
     ('The phrase that introduces the conditions themselves: criteria '
      '____________ entry.', None, 'for')]),
   builder=dict(
    skill='Yes / No / Not Given: three tests, in this order',
    qkind='skill',
    explain='Not Given does not mean you did not understand it. It means '
            'the writer took no position on it, and that is a fact about '
            'the text rather than about you. The mark is lost in two '
            'directions and both are procedural. A learner awards NOT '
            'GIVEN because the statement contains a word the passage '
            'never used, although the writer argued against the idea '
            'twice in other words. Or a learner awards YES because the '
            'passage mentions the topic and the statement sounds '
            'sensible, although the writer said nothing either way. Run '
            'the three tests below in order and neither can happen. Test '
            'one is the one people skip, and it is the one that catches '
            'most of the errors, because it asks a question about the '
            'text rather than about the statement.',
    worked=[
     'STATEMENT: contextual offers are a form of quota.',
     'Test 1 - does the writer take a position on this at all? Yes. '
     'Paragraph 3 of text B is about exactly this.',
     'Test 2 - does what the writer says agree with it? No. Text B says '
     '“no place is reserved and no number is set”, which is what a quota '
     'is.',
     'Test 3 - does the writer state the opposite? Yes, twice. So the '
     'answer is NO, not NOT GIVEN, and the absence of the word quota '
     'from the passage is beside the point.'],
    figure=dict(kind='decide', teaches='decision',
                title='Yes, No or Not Given - in this order, every time',
                sub='cycle 2 · the procedure, not the feeling',
                nodes=[
                 ('Does the writer take a position on this exact thing, '
                  'in any words at all?',
                  'go to test 2', 'NOT GIVEN. Stop.'),
                 ('Does the position agree with the statement, all of it?',
                  'YES. Stop.', 'go to test 3'),
                 ('Does the writer state the opposite, or rule the '
                  'statement out?',
                  'NO. Stop.', 'NOT GIVEN - and check test 1 again')],
                note='Most lost marks here are NOT GIVEN awarded to a '
                     'statement the writer argued against in words the '
                     'reader did not recognise.'),
    task='For each statement, write which test settles it (1, 2 or 3) and '
         'what the answer therefore is. This is not an exam task; the '
         'exam task is three pages further on.',
    items=[
     ('TEXT: We set no number and reserve no place.  STATEMENT: the '
      'scheme is a quota.', None, '3 no'),
     ('TEXT: (the writer never mentions cost)  STATEMENT: the scheme is '
      'expensive.', None, '1 not given'),
     ('TEXT: Offers are lowered by one grade and no more.  STATEMENT: '
      'the reduction is limited.', None, '2 yes'),
     ('TEXT: The intake has widened without the entry standard moving.  '
      'STATEMENT: standards have fallen.', None, '3 no'),
     ('TEXT: Most recipients complete the degree.  STATEMENT: most '
      'recipients get a first.', None, '1 not given'),
     ('TEXT: A foundation year is a corrective, not a concession.  '
      'STATEMENT: the writer regards a foundation year as a favour.',
      None, '3 no')],
    note='Two of the six are NOT GIVEN and both are settled by test 1. '
         'Neither has anything to do with how hard the sentence was, and '
         'that is the point worth taking away: the test that catches most '
         'of the errors is the one that asks a question about the text '
         'rather than about the statement, and it is the one every '
         'learner skips because it feels like it is not doing anything. '
         'Run it anyway. It costs four seconds and it is the difference '
         'between a procedure and a hunch.'),
   advice='Yes / No / Not Given asks what the WRITER thinks, not what is '
          'true and not what you think. The examiner has written at least '
          'one statement whose words are all in the passage and whose '
          'claim the writer rejects, and at least one that is perfectly '
          'true and that the writer never addresses. If you find yourself '
          'agreeing with a statement, that is the moment to go and find '
          'the sentence, because agreement is not evidence. Three marks '
          'in a typical set turn on this and they are the cheapest three '
          'marks in the paper to recover, since recovering them needs no '
          'new vocabulary at all - only the order of the three tests.',
   debrief=dict(
    read=['Statement 21 never uses the writer’s words, and the writer '
          'never uses the statement’s word. Both say the same thing. That '
          'is what the paraphrase bridge in cycle 1 was for.',
     'In the matching-features questions two writers mention the '
     'foundation year and only one commits to a view about it. Mentioning '
     'is not claiming.',
     'Statement 23 is true, and the passage does not say it. Being true '
     'is not one of the three tests.'],
    listen=['The speaker says “I would not go that far”, which is a '
            'rejection, and then says something that sounds like '
            'agreement. The rejection is the answer.',
     'Two numbers are given in question 31 and the second is a '
     'correction of the first.']),
   outside='Deciding what somebody has actually claimed, as against what '
           'you took them to mean, is most of what reading a contract, a '
           'diagnosis or a news report consists of, and all of what '
           'arguing well consists of. The three tests work outside this '
           'exam without any modification whatever.',
   recycled=['criteria', 'contextual offer', 'eligible', 'intake',
             'conditional'],
   read=[
    dict(heading='Four students on how they chose',
         kind='Four short texts', task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  Teodora: I chose the course because of the city, and I would '
          'say that out loud to anybody who asked. Three years is a long time '
          'to be somewhere you do not like, and the course content at the six '
          'places I looked at was almost identical anyway.',
          'B  Nnamdi: I picked by employment figures and I now think that was '
          'a mistake. The numbers were real, but they described people who '
          'had finished five years before me, in a different economy. I chose '
          'using a photograph of the past.',
          'C  Isolde: Nobody in my family had been, so I applied to the one I '
          'had heard of. My teacher spent an afternoon showing me that there '
          'were forty others, and that the one I had heard of was famous for '
          'a subject I was not taking. That afternoon changed my life, and it '
          'should not have depended on one teacher having time.',
          'D  Pavel: I went to an open day at a place I had already decided '
          'against and changed my mind within an hour. What did it was the '
          'students, not the building or the talk. I would tell anybody to '
          'go, including to the ones you think you do not want.'],
         items=[
          ('Which person chose on the basis of location?',
           ['Teodora', 'Nnamdi', 'Isolde', 'Pavel'], 0,
           'She defends it: the course content was nearly identical '
           'everywhere she looked.',
           {1: 'Nnamdi says their information was out of date.', 2: 'Isolde had no family experience to draw on.', 3: 'Pavel changed their mind after a visit.'}),
          ('Which person says their information was out of date?',
           ['Teodora', 'Nnamdi', 'Isolde', 'Pavel'], 1,
           'He calls it choosing with a photograph of the past.',
           {0: 'Teodora chose on the basis of location.', 2: 'Isolde had no family experience to draw on.', 3: 'Pavel changed their mind after a visit.'}),
          ('Which person had no family experience to draw on?',
           ['Teodora', 'Nnamdi', 'Isolde', 'Pavel'], 2,
           'She applied to the only university she had heard of.',
           {0: 'Teodora chose on the basis of location.', 1: 'Nnamdi says their information was out of date.', 3: 'Pavel changed their mind after a visit.'}),
          ('Which person changed their mind after a visit?',
           ['Teodora', 'Nnamdi', 'Isolde', 'Pavel'], 3,
           'Within an hour of an open day, because of the students.',
           {0: 'Teodora chose on the basis of location.', 1: 'Nnamdi says their information was out of date.', 2: 'Isolde had no family experience to draw on.'}),
          (
           'Isolde believes her teacher should not have been the '
           'deciding factor.', ['Yes', 'No', 'Not Given'], 0,
           'She says it should not have depended on one teacher having '
           'time.',
           {1: 'No would need her to accept it; she says it should not '
               'have depended on one teacher.', 2: 'Not Given is wrong because she judges the arrangement.'}),
          ('Nnamdi regrets the university he chose.',
           ['Yes', 'No', 'Not Given'], 2,
           'He regrets his method of choosing; he never says the place '
           'was wrong.',
           {0: 'Yes would need regret about the place; his regret is '
               'about the method.', 1: 'No would need him to defend the choice, which he never '
               'does.'})])],
   listen=[
    dict(preview=True,
         heading='Two people disagreeing about one word',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='Ninety seconds before five minutes. You will hear the same '
             'argument again in Part 3, at speed and with a third voice '
             'in it. Meet the disagreement first and the Part 3 stops '
             'being a race.',
         script=[
          ('Rafi', 'Can I ask you something about the word fair? Because '
                   'you and I keep using it and I think we mean different '
                   'things.'),
          ('Nadia', 'Go on.'),
          ('Rafi', 'When I say a fair process I mean everyone faces the '
                   'same test. Same paper, same day, same marking. That is '
                   'it.'),
          ('Nadia', 'And when I say fair I mean everyone has the same '
                    'chance of passing it. Which is not the same thing at '
                    'all, because they did not have the same four years '
                    'beforehand.'),
          ('Rafi', 'So you would move the pass mark.'),
          ('Nadia', 'I would take account of the start. That is not the '
                    'same as moving the mark, though I can see why it '
                    'sounds like it.'),
          ('Rafi', 'And I would say the moment you do that, nobody knows '
                   'what the grade means any more.'),
          ('Nadia', 'Nobody knows now. A B from one school is four years '
                    'of teaching and from another it is four years of '
                    'teaching plus a tutor three evenings a week. The '
                    'letter is the same. The thing behind it is not.'),
          ('Rafi', 'That I will grant you. I still want one measure.'),
          ('Nadia', 'One measure, read with what you know about where it '
                    'came from. That is all I am asking for.')],
         items=[
          ('For Rafi, a fair process is one in which everyone faces the '
           'same ____________.', None, 'test',
           'His first turn: same paper, same day, same marking.'),
          ('For Nadia, fairness means the same ____________ of passing.',
           None, 'chance',
           'Her second turn, where she says this is not the same thing at '
           'all.'),
          ('Nadia says she wants one measure read with knowledge of where '
           'it ____________ from.', None, 'came',
           'Her last turn, which is the concession Rafi half accepts.')]),
    dict(heading='A short talk: who gets in', part='Part 2',
         task='A talk at a parents’ evening · sentence completion', band='l2',
         qtype='Questions 25-28',
         script=[
          ('Speaker', 'I am going to answer the question every parent in this '
           'room wants to ask and nobody does, which is whether the system is '
           'fair. The honest answer is that it is fairer than it was and less '
           'fair than it looks.'),
          ('Speaker', 'Start with what has improved. Twenty years ago an '
           'applicant from a school with poor results needed the same grades '
           'as everybody else, and about a third of selective universities '
           'now make a lower offer in that situation. That change is real and '
           'it has moved thousands of students a year.'),
          ('Speaker', 'Now the part that has not improved. The gap in results '
           'at eighteen is mostly a gap that was already there at eleven, and '
           'a university cannot do anything about eleven. Lowering an offer by '
           'one grade helps the student who was close. It does nothing for the '
           'student who was never going to be close, and that is the larger '
           'group.'),
          ('Speaker', 'There is also something that is rarely said at '
           'meetings like this. Information is unevenly spread, and it matters '
           'more than people think. Which courses ask for which subjects, '
           'which open days are worth attending, whether a personal statement '
           'should be about you or about the subject: all of that is known in '
           'some households and unknown in others, and none of it is '
           'secret.'),
          ('Speaker', 'Which is why my advice is unglamorous. Find out what '
           'the course actually requires, in writing, from the university, '
           'this year. Half the mistakes I see are a student applying for a '
           'course without the subject it needs, and every one of those was '
           'avoidable in twenty minutes.')],
         items=[
          (
           'The speaker says the system is fairer than it was and '
           '____________ fair than it looks.', None, 'less',
           'She gives this as the honest answer to the question nobody '
           'asks.'),
          (
           'About a ____________ of selective universities make lower '
           'offers.', None, 'third',
           'She calls the change real and says it has moved thousands '
           'of students a year.'),
          (
           'Lowering an offer by one grade helps the student who was '
           '____________.', None, 'close',
           'It does nothing for the larger group who were never close.'),
          ('She says information is ____________ spread.', None,
           'unevenly', 'And she stresses that none of it is secret.')]),
    dict(heading='Two admissions tutors disagree', part='Part 3',
         task='A conversation after a selection meeting · multiple choice and sentence completion', band='l3',
         qtype='Questions 29-33',
         script=[
          ('Grigor', 'We have made eleven contextual offers out of ninety and '
           'I think that is too few.'),
          ('Marisol', 'We made them to everybody who met the criteria. If the '
           'number is too low, the criteria are wrong, and that is not a '
           'decision this meeting can take.'),
          ('Grigor', 'Agreed. So let us say that to the committee instead of '
           'reporting eleven as though it were an achievement.'),
          ('Marisol', 'I will support that. What I will not support is the '
           'thing you said earlier, about lowering offers further for the '
           'same group.'),
          ('Grigor', 'Why? The evidence on contextual admission is '
           'encouraging.'),
          ('Marisol', 'It is encouraging about one grade. There is almost '
           'nothing on two, and the students who arrive two grades below the '
           'standard offer on this course fail the first-year anatomy '
           'examination at about three times the rate. I have the figures and '
           'I would rather we looked at them than argued from principle.'),
          ('Grigor', 'May I see the figures before the next meeting? I am not doubting them. I would rather argue from the same page than from memory.'),
          ('Marisol', 'I will circulate them. And I should say that the three-times figure is nine students over four years, which is a small number to build a policy on.'),
          ('Grigor', 'Then it cuts both ways, and you have just undermined your own objection.'),
          ('Marisol', 'Partly. It is weak evidence against two grades and there is no evidence at all for two grades, and between those I would hold still.'),
          ('Grigor', 'Then the answer is support in the first year, not a smaller offer.'),
          ('Marisol', 'That is my position exactly, and it costs money, which '
           'is why it never gets proposed.'),
          ('Grigor', 'Put it in the report with a number attached and I will '
           'sign it.'),
          ('Marisol', 'Eight thousand a year for a foundation tutor, shared '
           'across two departments.'),
          ('Grigor', 'Then we are agreed, and I notice we got there by '
           'disagreeing about something neither of us actually believed.')],
         items=[
          ('How many contextual offers were made?',
           ['Eight', 'Eleven', 'Ninety', 'Three'], 1,
           'Out of ninety offers in total, which Grigor calls too few.',
           {0: 'Eight thousand is the cost of the foundation tutor.', 2: 'Ninety is the total number of offers made.', 3: 'Three times is the failure rate she reports.'}),
          (
           'Marisol argues that if the number is too low, the '
           '____________ are wrong.', None, 'criteria',
           'And that changing the criteria is not a decision for that '
           'meeting.'),
          (
           'She says there is almost no ____________ about offers two '
           'grades below standard.', None, 'evidence',
           'The evidence is encouraging about one grade only.'),
          (
           'Students arriving two grades below fail the anatomy '
           'examination at ____________ times the rate.',
           None, 'three',
           'She says she has the figures and would rather use them '
           'than argue from principle.'),
          ('What do they agree to propose?',
           ['A lower offer', 'A foundation tutor costing \u00a38,000', 'A new committee', 'No change'],
           1,
           'Shared across two departments, with the number attached in '
           'the report.',
           {0: 'A lower offer is what she refuses to support.', 2: 'No committee is proposed, only a tutor.', 3: 'They agree on a specific costed proposal.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Choices',
    longturn=[('The decision I want to talk about is leaving a science course '
               'after one year and changing to economics, which at the time I '
               'thought of as giving up.'),
              ('I made it in the summer after my first year, which is the '
               'latest you could change without starting again, so the '
               'decision had a deadline attached to it and I spent most of '
               'August on it.'),
              ('Several people helped, and they helped in different ways. My '
               'tutor was the most useful because she was the least '
               'encouraging. She asked me what I had actually enjoyed that '
               'year, and when I could only name the statistics module, she '
               'pointed out that I had answered the question. My parents were '
               'supportive in a way that was no help at all, because they '
               'would have agreed with anything. The person who tipped it was '
               'a friend two years ahead of me who had made the same change '
               'and told me honestly what she had lost by it.'),
              ('Whether it was right, I would say yes, with one reservation. I '
               'have a job I would not have got from the other degree, and I '
               'found the subject genuinely interesting rather than merely '
               'manageable, which I had not expected. The reservation is that '
               'I lost a year\'s laboratory work and I have never got it back, '
               'and there are still moments reading a scientific paper when I '
               'can see that I am reading it from outside. I would make the '
               'same decision again, but I would stop describing it as giving '
               'something up.')],
    intro=('Short answers first, then the long turn. Four bullets in order, '
           'roughly equal weight, developed one at a time.'),
    cue=('Describe a decision you made about your education.',
         ['what the decision was', 'when you made it',
          'who helped you decide',
          'and explain whether you think it was the right decision']),
    qs=['Did you choose your own subjects at school?',
        'Do young people in your country get good advice about studying?',
        'Now look at the card. You have one minute to make notes.',
        'Should parents decide what their children study?'],
    shape=[('answer', 'Leaving science after sixteen and taking languages.'),
           ('support', 'I made it in a single week and I was fifteen.'),
           ('follow-up', 'My mother disagreed and a teacher argued for me.'),
           ('support', 'It was right for what I ended up doing.'),
           ('follow-up', 'Though it was decided far too quickly for a '
            'decision that size.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should universities lower their offers for some students?',
         prompt=('Some people think universities should make lower offers to '
                 'students from disadvantaged schools. Others believe all '
                 'applicants should be judged by the same standard. Discuss '
                 'both views and give your own opinion. Write at least 250 '
                 'words.'),
         model=[
          'Both sides of this argument claim to want the same thing, which is '
          'that places go to the students most able to use them. They '
          'disagree about what a grade measures, and that disagreement is '
          'where the whole question sits.',
          'Those who want lower offers argue that a grade measures two things '
          'at once: how able a student is and what they were given. A student '
          'who reaches BBB at a school where few pass has shown more than a '
          'student who reaches AAA with tutors, small classes and parents who '
          'went to university themselves. Several studies find that '
          'contextual students go on to do as well in their degrees as '
          'classmates who arrived with higher grades.',
          'Those who want a single standard answer that a university is not a '
          'remedy for school. Courses move at a fixed speed, and a student '
          'who arrives behind may struggle whatever the reason for the gap. '
          'There is also a fairness objection that deserves a serious reply: '
          'a student just outside the criteria is rejected in favour of a '
          'student just inside them, and nothing about those two students is '
          'very different.',
          'My own view is that lower offers are right and insufficient. The '
          'evidence supports a difference of one grade, because the students '
          'concerned have usually been close; it says very little about two. '
          'What the objection correctly identifies is that admitting a '
          'student is not the same as supporting one.',
          'I would therefore keep contextual offers and attach something to '
          'them: extra teaching in the first year, paid for by the '
          'university. A place without support is an offer of a risk, and the '
          'argument about grades has distracted both sides from the part that '
          'costs money.'],
         notes=[
          'The opening finds what both sides agree on and names the real '
          'disagreement. That is a stronger first paragraph than restating '
          'the question, and it takes two sentences.',
          'Structure 3: both views, then a third position. Here the position '
          'accepts one side and adds what it leaves out, which is more '
          'defensible than choosing.',
          'Notice that the opposing case in paragraph 3 is given a real '
          'argument, including the one about students just outside the '
          'criteria. An examiner can tell the difference between a case that '
          'is answered and one that is set up to lose.'],
         criterion=[('Naming what both sides agree on', 'Task Response'),
                    ('A position that adds rather than chooses',
                     'Task Response'),
                    ('The opposing case given its strongest form',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    ref='L12',
    context=[
     'From text C, which you have just read:',
     'What the entry grade measures is not ability. It is four years of '
     'teaching, a household, and a particular week in August. It is the '
     'school as much as the pupil. None of that makes the grade useless; '
     'it makes it a measurement of something, and the something has a '
     'name.'],
    notice=[
     ('The writer could have written “The entry grade does not measure '
      'ability.” What does the what-clause let the writer do that the '
      'plain sentence does not?',
      'it names the thing being measured and then corrects it, so the '
      'correction lands at the end of the sentence'),
     ('Why is the verb “is” and not “are”, when three things follow it?',
      'the subject is the whole clause What the entry grade measures, '
      'which is singular')],
    noticetask='Answer both from the paragraph above. Neither can be '
               'answered without looking at how the first sentence is '
               'built.',
    contrast='Compare “The grade does not measure ability” with “What the '
             'grade measures is not ability”. The first denies. The '
             'second names, and then denies, and leaves the real answer '
             'in the position an English sentence gives its weight to - '
             'the end. In an argument about measurement that difference '
             'is the whole argument, which is why this structure turns up '
             'in almost every Academic Reading passage about data.',
    task2='Rewrite each sentence with a what-clause, keeping the '
          'correction at the end.',
    items2=[
     ('The test does not measure intelligence; it measures practice. '
      '____________',
      'What the test measures is not intelligence but practice.'),
     ('The figure describes the school, not the pupil. ____________',
      'What the figure describes is the school, not the pupil.'),
     ('He wants a clear criterion, not a lower one. ____________',
      'What he wants is a clear criterion, not a lower one.'),
     ('Correct: What these numbers show are a single trend. ____________',
      'What these numbers show is a single trend.')],
    task3='Now use it in your own argument. Take one measure from this '
          'cycle - the entry grade, the contextual flag, the completion '
          'rate - and write forty to sixty words saying what it actually '
          'measures and what it is often taken to measure. Use the '
          'structure once, and once only.',
    items3=8,
    point='Saying what a measure actually measures',
    explain=('Essays about tests, grades and figures improve immediately when '
             'you say what the number includes. These patterns do it in one '
             'sentence.'),
    examples=['A grade measures two things at once: ability and advantage.',
              'The figure records what a student achieved and what they were '
              'given.',
              'What the test captures is performance on the day.',
              'The score reflects the school as much as the student.'],
    task='Rewrite each sentence to say what the measure includes.',
    items=[('Grades show how good a student is.',
            'Grades show what a student achieved, which depends on teaching '
            'as well as ability.'),
           ('The exam is fair.',
            'The exam is the same for everybody, which is not the same as '
            'measuring everybody equally.'),
           ('Rich students do better.',
            'Students with more support achieve higher grades, and the grade '
            'records the support as well.'),
           ('This school is excellent.',
            'This school’s results are high, which reflects its intake as '
            'well as its teaching.'),
           ('The figures prove the policy worked.',
            'The figures show improvement, which the policy may or may not '
            'have caused.')]),
   vocab=[('selective', 'choosing only some applicants'),
          ('intake', 'the group of students admitted in one year'),
          ('widening participation', 'work to bring in under-represented '
           'students'),
          ('disadvantaged', 'having fewer resources or opportunities'),
          ('foundation year', 'an extra first year to prepare for a degree'),
          ('criteria', 'the standards used to decide something'),
          ('corrective', 'a measure meant to put a problem right'),
          ('insufficient', 'not enough on its own')],
   expr=[('If the number is too low, the criteria are wrong',
          'moves a complaint to where it can be acted on'),
         ('I would rather we looked at them than argued from principle',
          'prefers evidence to assertion'),
         ('right and insufficient', 'accepts a policy and names its limit'),
         ('A place without support is an offer of a risk',
          'reframes a benefit as a cost')],
   trans=['those who', 'there is also', 'therefore', 'what the objection'],
  ),

  dict(
   sub='What a degree is worth',
   step=3,
   notes=dict(
    serves='Matching information and True/False/Not Given, Reading Part '
           '3; Task 1 Academic, a bar chart with two series',
    because='A band 6 Task 1 answer lists every bar in the chart and '
            'compares none of them, because nobody has ever shown the '
            'writer which three of twelve numbers carry the information',
    skill='Choosing what to compare, and saying the comparison in one '
          'sentence rather than two',
    evidence='Phase 4 measured the band 6.5 models against the band 9 '
             'ones across six volumes: the single commonest gap is '
             'enumeration where a comparison was wanted',
    watch='Learners will write all twelve figures of the bar chart in '
          'order. Stop them at the fourth and ask which two they would '
          'keep if they were allowed four',
    time='85 minutes, or 65 without the free grammar production'),
   lead=dict(
    title='Worth what, compared with what?',
    body='Everybody has heard that some degrees are worth more than '
         'others. Almost nobody has been asked the second half of the '
         'sentence: worth more than what. More than the same person '
         'without the degree? More than a different person with a '
         'different degree? More in the first year, or in the twentieth? '
         'The figures in this cycle answer one of those questions and '
         'are routinely quoted as if they answered all four.',
    task='Decide what you think before you see the numbers. You will be '
         'asked again at the end of the cycle.',
    qs=['What do you think a degree is for? Give the honest answer, not '
        'the respectable one.',
        'If one subject earns twice what another earns, has it taught '
        'twice as much?',
        'Would you choose a subject you disliked because it paid more? '
        'What would change your mind?',
        'Who should be told these figures - applicants, schools, '
        'governments - and when?']),
   vocabwork=dict(
    title='The language of a comparison',
    body='You met the vocabulary of a process in cycle 1 and the '
         'vocabulary of a position in cycle 2. This is the vocabulary of '
         'a measurement, and it is the one Task 1 is marked on. Note how '
         'narrow the band of useful words is: eight verbs and a dozen '
         'ways of saying roughly.',
    figure=dict(kind='cline', teaches='scale',
                title='How close is close?',
                sub='cycle 3 · approximation, from tight to loose',
                left='almost exactly', right='nowhere near',
                items=[('just over', 0.04), ('a little over', 0.16),
                       ('about', 0.33), ('roughly', 0.46),
                       ('nearly', 0.58), ('well over', 0.76),
                       ('more than twice', 0.95)],
                note='Examiners read “about” on a figure that is exact '
                     'as a failure of accuracy, not of vocabulary. '
                     'Choose from the left of this line wherever the '
                     'data allows it.'),
    figure2=dict(kind='family', teaches='word-formation',
                 sub='cycle 3 · the words a Task 1 answer is built from',
                 rows=[(('com-pare', 2), ('com-pa-ri-son', 2), '',
                        ('com-pa-ra-ble', 1), ''),
                       (('ex-ceed', 2), ('ex-cess', 1), '',
                        ('ex-ces-sive', 2), ('ex-ces-sive-ly', 2)),
                       (('va-ry', 1), ('va-ri-a-tion', 3), '',
                        ('va-ri-a-ble', 1), ''),
                       ('', ('pro-por-tion', 2), '',
                        ('pro-por-tio-nal', 3), ('pro-por-tio-nal-ly', 3)),
                       (('e-qual', 1), ('e-qua-li-ty', 2), '',
                        ('e-qual', 1), ('e-qual-ly', 1))],
                 note='Comparable is not compatible, and proportional is '
                      'not proportionate in every context. Both pairs '
                      'are marked wrong every session.'),
    task='Complete each sentence with one word from the table, in the '
         'right form, or one phrase from the cline.',
    items=[
     ('Law and engineering pay ____________ amounts.', None, 'comparable'),
     ('Medicine pays ____________ twice what creative arts pays.',
      None, 'well over'),
     ('The noun from vary is ____________.', None, 'variation'),
     ('Economics at 49 and law at 36 are not ____________.',
      None, 'equal'),
     ('The figure is 52 exactly, so write ____________ 52, not about 52.',
      None, 'just over'),
     ('Earnings rise ____________ with experience in three of the six '
      'groups.', None, 'proportionally'),
     ('The adjective from excess is ____________.', None, 'excessive'),
     ('A ____________ between two figures is what the examiner is '
      'looking for.', None, 'comparison')]),
   builder=dict(
    skill='Task 1: choose three comparisons, not twelve numbers',
    qkind='skill',
    explain='A bar chart with six categories and two series contains '
            'twelve numbers and perhaps sixty possible comparisons. A '
            'band 6 answer writes out the twelve numbers in the order '
            'they appear and makes none of the comparisons. A band 7 '
            'answer makes three or four and leaves most of the numbers '
            'out, and this is why it is shorter and scores higher. The '
            'selection is the skill. Three questions choose for you, and '
            'they work on every chart in the paper. First, what is the '
            'biggest single gap on the chart. Second, what is the '
            'pattern that holds across the whole chart - the thing true '
            'of every category. Third, what breaks that pattern, because '
            'the exception is always the most interesting sentence in '
            'the answer and most candidates never write it.',
    worked=[
     'The chart: median earnings five years after graduating, six '
     'subject groups, men and women.',
     'Biggest gap: medicine at 52 against creative arts at 22. That is '
     'the first sentence, and it is a ratio, not a subtraction - well '
     'over twice.',
     'Pattern across the whole chart: men are ahead in every group '
     'without exception. That is the second sentence, and it needs no '
     'numbers at all.',
     'What breaks it: the size of the gap does not follow the size of '
     'the earnings. Economics pays less than medicine and has the wider '
     'gap between men and women. That is the third sentence, and it is '
     'the one almost nobody writes.'],
    figure=dict(kind='matrix', teaches='comparison',
                title='Three questions that choose for you',
                sub='cycle 3 · fill the right-hand column from the chart',
                cols=['What it asks', 'Your answer from this chart'],
                rows=['The biggest single gap',
                      'The pattern true of every category',
                      'The category that breaks the pattern',
                      'The numbers you will therefore leave out'],
                cells=[['Which two bars are furthest apart?',
                        'medicine 52, creative arts 22'],
                       ['What is true of all six?', ''],
                       ['Where does that stop being neat?', ''],
                       ['Everything not needed by rows 1 to 3', '']],
                note='Three sentences from three rows. The fourth row is '
                     'the one that makes the answer short, and short is '
                     'what a band 7 Task 1 answer is.'),
    task='Here are four pairs of figures from the chart. For each, write '
         'the single comparison sentence you would use - not both '
         'numbers, one sentence.',
    items=[
     ('Medicine 52, creative arts 22.', None, 'well over twice'),
     ('Law 36, engineering 38.', None, 'much the same'),
     ('Men 49, women 42 in economics.', None, 'seven points higher'),
     ('Humanities 27, creative arts 22.', None, 'a little over'),
     ('Men ahead in all six groups.', None, 'without exception'),
     ('Medicine 52 and economics 49.', None, 'close behind')],
    note='Not one of these answers is a list of two numbers, and that is '
         'the only thing the exercise is testing. If you wrote two '
         'numbers anywhere, go back and write the sentence that makes '
         'them mean something: the examiner can see the chart, so the '
         'figures are not news. What you noticed about them is.'),
   figures=[
    dict(kind='skeleton', teaches='text-structure',
         title='What each paragraph of the article does',
         sub='cycle 3 · read this before the article, not after',
         paras=[('A', 'context', 'Where the figures come from and who '
                 'collected them'),
                ('B', 'claim', 'The subject gap is real and large'),
                ('C', 'evidence', 'Six groups, five years out, both '
                 'sexes'),
                ('D', 'qualification', 'What a median cannot tell you '
                 'about spread'),
                ('E', 'counter-claim', 'The gap may be the student, not '
                 'the subject'),
                ('F', 'implication', 'What an applicant should do with '
                 'any of this')],
         note='Paragraph D mentions earnings nine times and is not about '
              'earnings. It is about measurement, which is why the '
              'preview box on the previous page was about the median.'),
   ],
   advice='Task 1 is marked on selection as much as on accuracy. An '
          'answer that reports every figure correctly and compares '
          'nothing is capped around 6 for Task Achievement, however '
          'clean the grammar is, and the marker reaches that judgement '
          'in the first thirty seconds. Write the overview first, make '
          'three comparisons, leave numbers out on purpose, and stop at '
          'about a hundred and seventy words. A longer Task 1 answer is '
          'almost always a longer list.',
   debrief=dict(
    read=['The matching-information questions ask which paragraph '
          'contains a thing, and two paragraphs mention it. Only one '
          'makes it the business of the paragraph.',
     'Statement 37 is about the average and the passage is about the '
     'median. The preview box told you these are different; the question '
     'is checking whether you believed it.',
     'The True/False/Not Given statement about women in medicine is '
     'true of the chart and not stated in the passage. The chart is not '
     'the passage.'],
    listen=['The lecturer gives a figure, pauses, and gives a second '
            'figure for a different year. The question asks for the '
            'year, not the figure.',
     'Question 44 is a matching task and the speaker changes her mind '
     'about one of the three. The second attribution is the answer.']),
   outside='Reading a chart for the three sentences that matter, rather '
           'than for all of it, is how anyone gets through a report, a '
           'bill, a diagnosis or a set of accounts. Most of the numbers '
           'you will meet in your life are there to be left out.',
   recycled=['median', 'criteria', 'threshold grade', 'graduate',
             'attainment'],
   read=[
    dict(preview=True,
         heading='What a median is, and what it hides',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The article on the next page is built on one word. If the '
             'word is not secure, the article is a wall of numbers; if '
             'it is, the article is an argument you can disagree with.',
         paras=[
          'Put every graduate of a subject in a line, poorest on the '
          'left, richest on the right. The median is whoever is standing '
          'in the middle. Half earn less, half earn more, and that is the '
          'whole definition.',
          'It is not the average. The average adds everything up and '
          'divides, so one graduate earning two million moves it and '
          'moves nobody’s actual life. The median does not move at all, '
          'because the person in the middle is still the person in the '
          'middle. Where earnings are very unequal, the average is '
          'higher than the median, and the gap between them is itself a '
          'measure of how unequal the spread is.',
          'What the median hides is that spread. Two subjects can have '
          'the same median and look nothing alike: in one, almost '
          'everybody earns near it; in the other, half earn very little '
          'and half earn a great deal. The middle person is identical '
          'and the subject is not.',
          'So a table of medians answers one question well - what '
          'happens to a typical graduate - and refuses to answer the '
          'question most readers actually have, which is what might '
          'happen to them.'],
         items=[
          ('The median is the value in the ____________ when everyone is '
           'put in order.', None, 'middle',
           'Paragraph 1: half earn less and half earn more.'),
          ('Unlike the average, the median is not moved by one very '
           '____________ figure.', None, 'high',
           'Paragraph 2, where one graduate earning two million moves '
           'the average and not the median.'),
          ('What a median cannot show you is the ____________ of the '
           'figures.', None, 'spread',
           'Paragraph 3: two subjects with the same median can look '
           'nothing alike.')]),
    dict(heading='Earnings by subject, five years on',
         kind='Data article',
         task='Matching features, matching information and True/False/Not Given',
         band='gt_work', qtype='Questions 34-39',
         figure=_EARN,
         paras=[
          'The chart shows median earnings five years after graduation, by '
          'subject group and by sex. Medicine leads on both measures, at '
          '£52,000 for men and £48,000 for women, and creative arts comes '
          'last, at £22,000 and £21,000. The spread between the top and the '
          'bottom is larger than the spread between men and women in any '
          'single subject.',
          'That second observation is the one most reports lead with, and it '
          'is worth stating carefully. The gap between the sexes is present '
          'in every subject shown and is widest in economics, at seven '
          'thousand. It is narrowest in creative arts, at one thousand, which '
          'is partly a fact about pay and partly a fact about there being '
          'less to differ about.',
          'What a chart of this kind cannot show is what the same people '
          'would have earned without the degree. Medicine attracts students '
          'with high grades who would have done well in many fields, and part '
          'of the medical figure is those students and not that training. '
          'Economists call this selection, and separating it from the effect '
          'of the course itself is the central difficulty in the subject.',
          'There is also a question about which five years. These are the '
          'earnings of people who graduated during a particular period and '
          'entered a particular labour market. A chart published next year '
          'describes a different cohort, and the subject order has in fact '
          'changed twice in the past fifteen years, with engineering rising '
          'and law falling.',
          'None of which makes the figures useless. They are a reasonable '
          'guide to what a subject currently leads to, provided the reader '
          'holds two things in mind: the numbers describe people who are not '
          'the reader, and they describe a market that will have moved by the '
          'time the reader enters it.'],
         items=[
          (
           'Which subject group shows the widest gap between men and '
           'women?',
           ['Medicine', 'Economics', 'Engineering', 'Creative arts'], 1,
           'Paragraph 2 gives the economics gap as seven thousand.',
           {0: 'Medicine leads on earnings, with a gap of four '
               'thousand.', 2: 'No engineering gap is given in paragraph 2.', 3: 'Creative arts has the narrowest gap, at one thousand.'}),
          (
           'Which paragraph explains that high earners may have done '
           'well anyway?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           2,
           'Part of the medical figure is the students, not the '
           'training.',
           {0: 'Paragraph 1 gives the top and bottom figures.', 1: 'Paragraph 2 compares the sexes within each subject.', 3: 'Paragraph 4 warns that the figures describe one '
               'cohort.'}),
          (
           'Which paragraph warns that the figures describe one '
           'cohort?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           2,
           'Paragraph 4: a chart published next year describes '
           'different people.',
           {0: 'Paragraph 2 compares the sexes within each subject.', 1: 'Paragraph 3 explains that high earners may have done '
               'well anyway.', 3: 'Paragraph 5 says what the figures are still good for.'}),
          (
           'Women in medicine have the highest median earnings of any '
           'group on the chart.',
           ['True', 'False', 'Not Given'], 0,
           'The medicine bar for women stands above every other bar.',
           {1: 'The chart puts no group above it.', 2: 'The chart gives the figure, so it is given.'}),
          (
           'The gap between the sexes is wider in economics than in '
           'any other subject shown.',
           ['True', 'False', 'Not Given'], 0,
           'Paragraph 2 gives economics the widest gap, at seven '
           'thousand.',
           {1: 'False would need another subject to be wider, and '
               'paragraph 2 names economics.', 2: 'Not Given is wrong because paragraph 2 states which '
               'gap is widest.'}),
          (
           'The order of subjects by earnings has been stable for the '
           'past fifteen years.',
           ['True', 'False', 'Not Given'], 1,
           'Paragraph 4 says the subject order has changed twice in '
           'that period.',
           {0: 'True would need stability, and paragraph 4 reports two '
               'changes.', 2: 'Not Given is wrong because paragraph 4 addresses the '
               'question directly.'})])],
   listen=[
    dict(heading='An economist on graduate earnings', part='Part 4',
         task='A lecture on reading earnings figures · multiple choice, sentence completion and matching', band='l4',
         qtype='Questions 40-45',
         figure=_EARN,
         script=[
          ('Lecturer', 'Every year a newspaper publishes a table of what '
           'degrees are worth, and every year it answers a question nobody '
           'asked. I want to show you what the question should be.'),
          ('Lecturer', 'Look at the chart. Medicine at the top, creative arts '
           'at the bottom, a gap of thirty thousand a year. The headline is '
           'that medicine is worth thirty thousand more, and that sentence '
           'contains a mistake so common it has a name.'),
          ('Lecturer', 'The mistake is comparing graduates with graduates. '
           'What you want to know is what a medical graduate would have '
           'earned had they not studied medicine. They had the grades for '
           'almost anything. A good share of that top figure is the people, '
           'and we call that selection.'),
          ('Lecturer', 'How do you get round it? Three ways, none clean. You '
           'can compare students who just made the entry grade with those who '
           'just missed it, which works where there is a sharp cut-off. You '
           'can follow twins. Or you can use a change in policy that pushed '
           'some people into higher education and not others.'),
          ('Lecturer', 'When those methods are used, the earnings premium '
           'shrinks. It does not disappear: a degree still pays on average, '
           'and the estimates come out around half to two thirds of the raw '
           'gap. The order of subjects also moves, and medicine stays near '
           'the top because the training really is specific.'),
          ('Lecturer', 'One more complication, and it is the reason these tables should carry a date in large type. The figures describe people who graduated five years ago and entered the labour market of that year. The subject order has changed twice in fifteen years: engineering has risen as construction recovered, and law has fallen as the number of training places stopped growing.'),
          ('Lecturer', 'So a seventeen-year-old reading this chart is making a decision about a market seven or eight years away, using a photograph of one that has already gone. I do not have a solution to that. I do think the chart should say it.'),
          ('Lecturer', 'The last thing is about averages and it matters more '
           'than everything I have said. These are medians. The spread inside '
           'any one subject is far wider than the distance between subjects, '
           'so a student choosing economics over history on the strength of '
           'this chart is making a decision about a difference smaller than '
           'the one they will experience within whichever they choose.')],
         items=[
          ('What does the lecturer say the newspaper table does?',
           ['Uses old figures', 'Answers a question nobody asked', 'Confuses the subjects', 'Excludes women'],
           1, 'He then sets out what the question should be.',
           {0: 'Dates are his later point, not his first objection.', 2: 'The subjects are not confused in the table.', 3: 'The chart gives figures for both sexes separately.'}),
          (
           'The mistake he names is comparing graduates with '
           '____________.', None, 'graduates',
           'What you want is what the same person would have earned '
           'otherwise.'),
          ('Which is NOT one of his three methods?',
           ['Comparing students near a cut-off', 'Following twins', 'Surveying employers', 'Using a policy change'],
           2, 'He gives three, and none of them is clean.',
           {0: 'This is the first of his three methods.', 1: 'Twins are the second method he names.', 3: 'A policy change is the third method he lists.'}),
          ('When better methods are used, the premium ____________.',
           None, 'shrinks',
           'To around half to two thirds of the raw gap.'),
          (
           'Medicine stays near the top because the training really is '
           '____________.', None, 'specific',
           'Even once selection is accounted for.'),
          (
           'His final point is that the spread within a subject is '
           '____________ than between subjects.', None,
           'wider',
           'Which makes a choice between two subjects a decision about '
           'a small difference.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Education and work',
    intro=('Card first, and the last bullet is the one that earns the '
           'band: it asks you to explain rather than to list. After the '
           'long turn the discussion opens: four or five sentences. Where '
           'you use a figure, say what it is an average of.'),
    cue=('Describe a course or a qualification that helped you get work.',
         ['what it was',
          'where you did it',
          'how long it took',
          'and explain how it helped']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Would you recommend it to somebody else?',
        'Did it cost you much?',
        'Is a university degree still worth the cost?',
        'Should students choose subjects by future earnings?',
        'Do employers value experience more than qualifications?',
        'What else does education give people besides a job?'],
    shape=[('answer', 'On average yes, though the average hides a lot.'),
           ('support', 'The difference within a subject is bigger than the '
            'difference between subjects.'),
           ('follow-up', 'So the choice matters less than people think.'),
           ('support', 'What matters more is finishing and doing well.'),
           ('follow-up', 'Which is an argument for choosing something you '
            'will not abandon.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Earnings by subject and sex',
         prompt=('The chart below shows median earnings five years after '
                 'graduation, by subject group and sex. Summarise the '
                 'information by selecting and reporting the main features, '
                 'and make comparisons where relevant. Write at least 150 '
                 'words.'),
         figure=_EARN,
         model=[
          'The bar chart compares median earnings five years after graduation '
          'for men and women across six subject groups. Overall, earnings '
          'fall steadily from medicine to creative arts, men earn more than '
          'women in every subject shown, and the difference between the '
          'highest- and lowest-paying subjects is far larger than the '
          'difference between the sexes within any one of them.',
          'Medicine pays most, at £52,000 for men and £48,000 for women, '
          'followed by economics at £49,000 and £42,000. Engineering and law '
          'form a middle group, with men earning £38,000 and £36,000 and '
          'women £35,000 and £33,000 respectively.',
          'The two remaining subjects sit well below the rest. Humanities '
          'graduates earn £27,000 and £26,000, and creative arts graduates '
          '£22,000 and £21,000, which is less than half the medical figure in '
          'both cases.',
          'The gap between the sexes varies considerably by subject. It is '
          'widest in economics at £7,000 and narrowest in creative arts at '
          '£1,000, so that the subjects paying most are also those in which '
          'men and women differ most.'],
         notes=[
          'The data are two-dimensional, subject by sex, and this answer '
          'structures by subject, taking the pairs in descending order. That '
          'works because the subject order is the main story.',
          'Engineering and law are grouped because they sit close together. '
          'Grouping where the data clusters is a judgement about the figures, '
          'and it is what separates a 6.0 from a 5.5 on Coherence.',
          'The last paragraph reports the second dimension as a pattern: '
          'widest here, narrowest there, and a relationship between the two. '
          'That final sentence is the comparison the task asks for and the '
          'one most candidates leave out.'],
         criterion=[('Structuring by subject with the pairs kept together',
                     'Coherence and Cohesion'),
                    ('Grouping the two subjects that cluster',
                     'Coherence and Cohesion'),
                    ('Reporting the second dimension as a pattern',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    ref='L6',
    context=[
     'From the article you have just read:',
     'Medicine pays well over twice what creative arts pays, and that '
     'ratio has held for a decade. Law and engineering are much the '
     'same, at 36 and 38. The gap between men and women is seven points '
     'in economics and one in creative arts - which is to say that the '
     'better-paid the subject, the wider the gap inside it, with the '
     'single exception of medicine.'],
    notice=[
     ('The writer compares medicine with creative arts using a ratio '
      'rather than a subtraction. Why?',
      'the two figures are far apart, so the relation is more '
      'informative than the difference'),
     ('Find the phrase that compares without giving either number.',
      'much the same')],
    noticetask='Answer both from the paragraph above, which is from the '
               'passage you read earlier in this cycle.',
    contrast='A difference and a ratio are not alternatives, they are '
             'answers to different questions. Use a difference where the '
             'two figures are close and the gap is the news - seven '
             'points. Use a ratio where they are far apart and the gap '
             'is unreadable as a number - well over twice. And keep '
             'percentage points away from per cent: a move from 40 to 44 '
             'is four percentage points and ten per cent, and writing '
             'the second where you meant the first costs a mark for '
             'accuracy every time.',
    task2='Write one comparison sentence for each pair. Choose the '
          'difference, the ratio or the approximation, whichever fits.',
    items2=[
     ('52 and 22. ____________',
      'Medicine pays well over twice what creative arts pays.'),
     ('36 and 38. ____________', 'Law and engineering pay much the same.'),
     ('49 and 42. ____________',
      'Men earn seven points more than women in economics.'),
     ('40% rising to 44%. ____________',
      'a rise of four percentage points')],
    task3='Now write the opening of a Task 1 answer from the chart in '
          'this cycle: one overview sentence and two comparisons, about '
          'fifty words. Use one ratio and one difference, and give no '
          'figure you do not need.',
    items3=8,
    point='Comparing pairs of figures',
    fix=dict(
     text=('The table compares two pairs of figures. In 2010 the rate for boys '
           'was 68 per cent, comparing with 74 per cent for girls. By 2020 '
           'both figures had risen, but the gap between them was remained the '
           'same. The rate for girls was still higher that the rate for boys '
           'at the end of the period.'),
     faults=[('comparing with 74 per cent for girls',
              'compared with 74 per cent for girls',
              ('The fixed form is compared with. Comparing with would mean the '
               'figure is doing the comparing.')),
             ('the gap between them was remained the same',
              'the gap between them remained the same',
              ('Remained is already the past form, so was cannot stand in '
               'front of it.')),
             ('was still higher that the rate for boys',
              'was still higher than the rate for boys',
              'A comparison takes than, not that.')]),
    explain=('A chart with two series for every category needs language that '
             'keeps the pair together. Repeating "for men... for women..." in '
             'every sentence costs you marks for range.'),
    examples=['Medicine pays most, at £52,000 for men and £48,000 for '
              'women.',
              'Men earning £38,000 and women £35,000 respectively.',
              'The gap is widest in economics and narrowest in creative '
              'arts.',
              'Both figures are less than half the medical equivalent.'],
    task='Combine each pair into a single sentence.',
    items=[('Men in law earn £36,000. Women in law earn £33,000.',
            'Law graduates earn £36,000 and £33,000 for men and women '
            'respectively.'),
           ('Humanities: men £27,000, women £26,000.',
            'In humanities the two figures are close, at £27,000 and '
            '£26,000.'),
           ('The economics gap is £7,000. The arts gap is £1,000.',
            'The gap ranges from £7,000 in economics down to £1,000 in '
            'creative arts.'),
           ('Medicine is highest. Creative arts is lowest.',
            'Earnings fall from a high of £52,000 in medicine to a low of '
            '£21,000 in creative arts.'),
           ('Men earn more in every subject.',
            'Men out-earn women in all six subject groups shown.')]),
   vocab=[('median', 'the middle value when all are put in order'),
          ('cohort', 'a group who went through something at the same time'),
          ('uplift', 'the extra amount something adds'),
          ('spread', 'how widely values differ'),
          ('respectively', 'in the order just mentioned'),
          ('graduate', 'a person who has completed a degree'),
          ('labour market', 'the supply of and demand for workers'),
          ('threshold grade', 'the grade at which an outcome changes')],
   expr=[('it is worth stating carefully', 'flags a claim that is easy to '
          'overstate'),
         ('None of which makes the figures useless',
          'limits a criticism before it goes too far'),
         ('part of that figure is the people, not the training',
          'separates selection from effect'),
         ('provided the reader holds two things in mind',
          'attaches conditions to a recommendation')],
   trans=['overall', 'followed by', 'so that', 'none of which'],
  ),

  dict(
   sub='Why the gap opens early',
   step=4,
   notes=dict(
    serves='Matching headings and Yes/No/Not Given, Reading Part 3, on a '
           'seven-hundred-word academic passage; multiple choice in '
           'Listening Part 4',
    because='Matching headings is answered at band 6 by finding the '
            'heading that shares a noun with the paragraph, which is '
            'exactly what the distractors are built for, and the right '
            'answer usually shares no vocabulary at all',
    skill='Reading a paragraph for its function - claim, evidence, '
          'concession, consequence - rather than for its subject',
    evidence='gate10 census: matching headings appears in every book in '
             'the series and had no taught procedure anywhere in Volume '
             '3 before this cycle',
    watch='In the heading task, learners will give paragraph D the '
          'heading containing the word cost, because D says cost four '
          'times. D is a concession about evidence. Expect it',
    time='90 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='How early is early?',
    body='Every argument about university admissions eventually runs '
         'backwards. If the gap is already there at eighteen, was it '
         'there at eleven? At five? And if it was there at five, what '
         'exactly is a university supposed to do about it in January of '
         'the applicant’s final year? This cycle is where the subject '
         'stops being about admissions and starts being about evidence, '
         'which is also where the reading gets harder.',
    task='Answer these before you read. Keep your answers; you are asked '
         'to revisit them in the unit review.',
    qs=['At what age do you think differences between children in '
        'school first become visible?',
        'Does knowing that something predicts an outcome tell you how to '
        'change the outcome?',
        'If a programme raises test scores but not later earnings, has '
        'it worked?',
        'Whose job is it to close a gap that opens at five - schools, '
        'parents, governments, universities?']),
   vocabwork=dict(
    title='The words that separate a finding from a claim',
    body='This passage is the first in the unit written by researchers '
         'for researchers, and its caution is in the verbs. Learn the '
         'ladder below and the passage changes from difficult to '
         'careful, which is a different thing. You met the strength of a '
         'position in cycle 2; this is the strength of a finding.',
    figure=dict(kind='cline', teaches='scale',
                title='From moving together to making happen',
                sub='cycle 4 · the ladder this passage climbs and will '
                    'not finish climbing',
                left='they merely co-occur', right='one makes the other',
                items=[('is associated with', 0.05),
                       ('is linked to', 0.17),
                       ('predicts', 0.3),
                       ('appears to contribute to', 0.5),
                       ('may account for part of', 0.62),
                       ('leads to', 0.82),
                       ('causes', 0.97)],
                note='The passage uses the left half nineteen times and '
                     'the right half twice, both times in reported '
                     'speech belonging to somebody else. That is not '
                     'style. It is the finding.'),
    figure2=dict(kind='collocation', teaches='collocation',
                 node='evidence', sub='cycle 4',
                 groups=[('verb + evidence',
                          ['the evidence suggests', 'the evidence points to',
                           'evidence is lacking', 'the evidence is mixed']),
                         ('adjective + evidence',
                          ['strong evidence', 'thin evidence',
                           'direct evidence', 'anecdotal evidence']),
                         ('evidence + preposition',
                          ['evidence for the claim', 'evidence of a gap',
                           'evidence from three cohorts'])],
                 note='Evidence is uncountable. “An evidence” and '
                      '“evidences” are both marked wrong, and both are '
                      'extremely common at this band.'),
    task='Choose the phrase that matches the strength of each finding, '
         'and complete the collocations.',
    items=[
     ('Two things move together and the study says no more: vocabulary '
      '____________ reading.', None, 'predicts'),
     ('An experiment with a control group, large and repeated: this is '
      '____________ evidence.', None, 'strong'),
     ('One school, one year, one teacher’s impression: ____________ '
      'evidence.', None, 'anecdotal'),
     ('Some studies find it and others do not: the evidence is '
      '____________.', None, 'mixed'),
     ('The careful middle of the ladder: the programme ____________ '
      'contribute to the gain.', None, 'appears to'),
     ('Evidence ____________ the claim, not evidence to the claim.',
      None, 'for'),
     ('No study has looked: evidence is ____________.', None, 'lacking'),
     ('Correct the error: there are three evidences. ____________',
      None, 'three pieces')]),
   builder=dict(
    skill='Matching headings: what the paragraph does, not what it says',
    qkind='skill',
    explain='A heading names a paragraph’s job. A paragraph can mention '
            'money four times and be about evidence; it can never '
            'mention the word evidence and be about nothing else. The '
            'band 6 method is to find the heading that shares a noun '
            'with the paragraph, and the examiner has written three '
            'such headings on purpose. The method that works takes '
            'twenty seconds a paragraph. Read the first sentence and the '
            'last sentence, and ignore the middle, which is almost '
            'always the evidence for one of the two. Then say, in three '
            'or four words and without using any noun from the '
            'paragraph, what the paragraph is doing: making a claim, '
            'backing one up, admitting something, drawing a consequence, '
            'defining a term. Now look at the headings. The one that '
            'matches your three words is the answer, and it will often '
            'share no vocabulary with the paragraph at all.',
    worked=[
     'Paragraph D of the passage begins “None of this is cheap.” and '
     'ends “...which is why the question has not been settled.”',
     'First sentence: a concession about cost. Last sentence: the '
     'question is open. Middle: three studies and their price tags.',
     'In four words, without its nouns: admitting the evidence is '
     'incomplete.',
     'Heading “The cost of early intervention” shares the word cost and '
     'names the middle. Heading “Why the matter remains unsettled” '
     'shares nothing and names the job. The second is the answer.'],
    figure=dict(kind='signpost', teaches='signposting',
                title='Where this passage turns',
                sub='cycle 4 · the passage with everything but the '
                    'markers removed',
                markers=[('At first sight',
                          'the view about to be taken apart'),
                         ('In practice', 'what actually happens'),
                         ('None of this', 'a concession, and a trap'),
                         ('Even so', 'the concession is overruled'),
                         ('It follows that', 'the claim, at last'),
                         ('Yet', 'one more turn before the end')],
                note='Four of the seven answers in this cycle sit in the '
                     'sentence immediately after one of these six '
                     'phrases.'),
    task='Each paragraph opening and closing is given. Say in four words '
         'what the paragraph DOES, using none of its own nouns.',
    items=[
     ('Opens: “The effect is largest in the first year.” Closes: '
      '“...and smaller every year after that.”', None, 'reporting a '
      'fading result'),
     ('Opens: “None of this is cheap.” Closes: “...which is why the '
      'question has not been settled.”', None, 'admitting incomplete '
      'evidence'),
     ('Opens: “A predictor is not a cause.” Closes: “...and the two call '
      'for different policies.”', None, 'defining a distinction'),
     ('Opens: “Three cohorts were followed.” Closes: “...in all three '
      'the pattern held.”', None, 'presenting the evidence'),
     ('Opens: “It follows that money alone will not do it.” Closes: '
      '“...nor will exhortation.”', None, 'drawing a consequence'),
     ('Opens: “Critics say the sample was unusual.” Closes: '
      '“...a reasonable objection, so far unanswered.”',
      None, 'reporting an objection')],
    note='Not one of the six answers contains a noun from its own '
         'paragraph. That is the test of whether you have named the job '
         'or repeated the subject, and it is worth applying to your own '
         'answers before you look at anyone else’s. If your four words '
         'reuse the paragraph’s vocabulary, you have summarised it, '
         'which feels like understanding and does not answer the '
         'question. The headings are written by somebody who knows that '
         'summarising is the easier thing to do.'),
   figures=[
    dict(kind='skeleton', teaches='text-structure',
         title='The seven hundred words, in six boxes',
         sub='cycle 4 · build this before you answer anything',
         paras=[('A', 'definition', 'What a predictor is, and is not'),
                ('B', 'claim', 'The gap is visible long before eighteen'),
                ('C', 'evidence', 'Three cohorts, followed to eleven'),
                ('D', 'concession', 'None of it is cheap, or settled'),
                ('E', 'counter-claim', 'Critics: the sample was unusual'),
                ('F', 'consequence', 'What follows for policy, and what '
                 'does not')],
         note='Fill in your own version from the first and last sentence '
              'of each paragraph, then compare. If your box D says '
              'anything about cost, read the Skills builder again.'),
   ],
   advice='Matching headings is answered paragraph by paragraph, and the '
          'headings are read last, not first. Reading them first plants '
          'their nouns in your mind and you then go and find those nouns '
          'in the passage, which is precisely the trap the question is '
          'built around. Two headings are always unused, and at least '
          'one of the two will look extremely plausible against some '
          'paragraph you have already assigned. Do them in the order the '
          'paragraphs come, write your four words first, and do not go '
          'back and change an answer because a later heading looked '
          'tempting.',
   debrief=dict(
    read=['The heading with the word cost in it belongs to no paragraph, '
          'and paragraph D is the one that says cost four times. That is '
          'the whole design of the question.',
     'Two headings mention children and three paragraphs are about '
     'children. Function, not subject.',
     'The Yes/No/Not Given statement about funding is true, obviously '
     'true, and the writer takes no position on it anywhere. Test 1 from '
     'cycle 2 settles it in four seconds.'],
    listen=['The lecturer says “the honest answer is a bit of both”, '
            'which is the answer to question 55, and she says it after a '
            'long pause that sounds like the end of the section.',
     'Question 57 offers an option containing a number the lecturer '
     'says. She says it about a different study.']),
   outside='The difference between a predictor and a cause decides '
           'whether a medicine works, whether a policy is worth money, '
           'and whether the thing you were told about your own schooling '
           'was true. It is the single most useful idea in this book and '
           'it is tested, here, as a reading question.',
   recycled=['predictor', 'evidence', 'cohort', 'criteria',
             'attainment', 'median'],
   read=[
    dict(heading='What is already different at five',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 46-52',
         paras=[
          'Most public argument about educational inequality concerns '
          'schools, and most of the gap that argument is about exists before '
          'a child has attended one. By the first term of formal schooling, '
          'measurable differences in vocabulary, in the ability to hold '
          'attention and in early number concepts are already large, and they '
          'predict results at sixteen better than almost anything that '
          'happens in between.',
          'The vocabulary finding is the most widely quoted and the most '
          'widely misunderstood. Children from different backgrounds arrive '
          'at school knowing different numbers of words, and the difference '
          'is substantial. What the figure does not show is a cause: the same '
          'households differ in income, in parental education, in housing '
          'stability and in a dozen other ways, and the vocabulary gap '
          'travels with all of them.',
          'Attempts to separate these have produced one reasonably solid '
          'finding. What predicts a child’s early language is not income '
          'itself but the quantity and kind of talk directed at them. '
          'Conversation in which a child is addressed and answered, rather '
          'than talk they merely overhear, is what the measurements track, '
          'and this is true within income groups as well as between them.',
          'That distinction matters because it changes what can be done. A '
          'gap caused by income needs income. A gap caused by a pattern of '
          'interaction can in principle be addressed by showing parents the '
          'pattern, which is cheap, and several programmes have tried exactly '
          'that, with results that are genuinely mixed.',
          'The mixed results are instructive. Programmes that train parents '
          'in specific interaction techniques produce measurable gains in '
          'language at the end of the programme. In most studies those gains '
          'shrink over the following two years, and in several they disappear '
          'entirely by the time the children are seven. This pattern is '
          'common enough in education research to have a name: fade-out.',
          'Fade-out is often reported as failure and that reading is too '
          'quick. A gain that fades may still have mattered, if the child '
          'entered school better able to follow a lesson and the school then '
          'failed to build on it. On this account fade-out is a finding about '
          'schools and not about the programme, and the evidence does not '
          'currently allow us to say which account is right.',
          'A separate line of work asks whether the measured gap is a gap '
          'in skill or a gap in what has been practised. Children differ at '
          'five in how often they have been asked to sit still, to answer a '
          'stranger and to perform on request, and all three are part of '
          'what an early assessment records. Where the same children have '
          'been scored informally, at home, across several visits, the '
          'measured difference falls by about a third without any change in '
          'what the children can actually do.',
          'That finding does not make such assessments worthless. School '
          'itself demands sitting still and answering strangers, and a '
          'child who cannot yet do those things will struggle whatever '
          'their vocabulary. It does mean the number records readiness for '
          'a particular setting alongside language, and a policy built on '
          'it is aimed at something broader than the word it uses.',
          'There is a further complication that the public debate rarely '
          'reaches. The measurements are of what children can do at five, and '
          'what they can do at five is partly what they have been asked to '
          'do. A child who has never been asked to name colours on request '
          'may know the colours. Assessments of this kind measure performance '
          'in an unfamiliar setting with an unfamiliar adult, and that '
          'setting is itself less familiar to some children than to others.',
          'None of this supports the conclusion that early differences do not '
          'matter. They predict later results robustly, whatever they are '
          'measuring. It does suggest that the common policy inference, which '
          'is that we should intervene earlier and harder on the measured '
          'skill, rests on reading a predictor as though it were a cause.',
                ('A trial in one city followed four hundred children from the '
                 'age of two to the age of eleven, with half offered a place '
                 'in a staffed setting and half not. At five the difference in '
                 'vocabulary was about four months of development. At eleven '
                 'it was two months, and on reading it had gone altogether. '
                 'The programme had not failed; the comparison group had '
                 'caught up, which is a different result and a harder one to '
                 'put in a headline.')],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['What the vocabulary gap shows', 'Talk directed at a child', 'Why gains fade', 'What the tests actually measure'],
           1,
           'Conversation in which a child is addressed and answered, '
           'within income groups as well as between them.',
           {0: 'That is paragraph 2, on what the figure cannot show.', 2: 'Why gains fade is the heading for paragraph 5.', 3: 'What the tests actually measure is the heading for '
               'paragraph 7.'}),
          ('Choose the best heading for paragraph 5.',
           ['Talk directed at a child', 'Why gains fade', 'What the tests actually measure', 'What follows for policy'],
           1,
           'Gains at the end of a programme shrinking over two years, '
           'which has a name.',
           {0: 'Talk directed at a child is the heading for paragraph '
               '3.', 2: 'What the tests actually measure is the heading for '
               'paragraph 7.', 3: 'That is paragraph 10, at the very end.'}),
          ('Choose the best heading for paragraph 7.',
           ['Why gains fade', 'What the tests actually measure', 'What follows for policy', 'What the vocabulary gap shows'],
           1,
           'Performance in an unfamiliar setting with an unfamiliar '
           'adult.',
           {0: 'Why gains fade is the heading for paragraph 5.', 2: 'That is paragraph 10, the policy inference.', 3: 'That is paragraph 2, on what the gap travels with.'}),
          ('The writer believes early differences do not matter.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says they predict later results '
           'robustly.',
           {0: 'Yes would need them not to matter; the final paragraph '
               'says they predict robustly.', 2: 'Not Given is wrong because the writer weighs their '
               'importance.'}),
          ('The writer believes fade-out proves such programmes fail.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 calls that reading too quick and offers an '
           'alternative.',
           {0: 'Yes would need proof of failure; paragraph 6 calls '
               'that reading too quick.', 2: 'Not Given is wrong because fade-out is interpreted.'}),
          ('What predicts early language is not income but the quantity and '
           'kind of ____________ directed at a child.', None, 'talk',
           'Paragraph 3, which holds within income groups as well as '
           'between.'),
          ('The pattern of gains shrinking after a programme is called '
           '____________.', None, 'fade-out',
           'Paragraph 5, common enough in education research to have a '
           'name.')])],
   listen=[
    dict(preview=True,
         heading='A researcher explains one word to an interviewer',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='The lecture you are about to hear uses the word predictor '
             'nineteen times and never defines it. Ninety seconds here '
             'and the lecture becomes followable.',
         script=[
          ('Interviewer', 'You keep saying predictor and I keep wanting '
                          'to hear cause. Are they the same thing?'),
          ('Dr Owusu', 'They are not, and the difference is the whole '
                       'study. A predictor is anything that improves my '
                       'guess. If I know a child’s vocabulary at five, I '
                       'guess their reading at eleven better than if I '
                       'did not know it. That is all I have claimed.'),
          ('Interviewer', 'But surely the vocabulary is doing something.'),
          ('Dr Owusu', 'It may be. Or the thing that produced the '
                       'vocabulary is also producing the reading, and the '
                       'vocabulary is simply the first place we can see '
                       'it. Those two possibilities look identical in my '
                       'data and they call for completely different '
                       'policies.'),
          ('Interviewer', 'Give me the practical difference.'),
          ('Dr Owusu', 'If vocabulary is the cause, teaching words at '
                       'five fixes the problem. If vocabulary is only the '
                       'symptom, teaching words at five raises the score '
                       'I am measuring and changes nothing underneath. We '
                       'have run that experiment, incidentally, and the '
                       'answer is uncomfortable: a bit of both.'),
          ('Interviewer', 'So what should a government do?'),
          ('Dr Owusu', 'Act on the predictor while you find out about the '
                       'cause. But say which one you are doing.')],
         items=[
          ('A predictor is anything that improves the researcher’s '
           '____________.', None, 'guess',
           'Dr Owusu’s first full answer, which is also the whole '
           'definition she offers.'),
          ('If vocabulary is only a ____________, teaching words raises '
           'the score and changes nothing underneath.', None, 'symptom',
           'Her fourth turn, where she gives the practical difference.'),
          ('She advises acting on the predictor while finding out about '
           'the ____________.', None, 'cause',
           'Her last turn, and the sentence the lecture ends on too.')]),
    dict(heading='A lecture on early years and attainment', part='Part 4',
         task='A lecture on reading early-years evidence · multiple choice and sentence completion', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'I want to take the single most quoted finding in '
           'education policy and show you how much work it is being asked to '
           'do. The finding is that children arrive at school with very '
           'different vocabularies.'),
          ('Lecturer', 'The finding itself is solid. Measure children at four '
           'or five and the differences are large and they predict results at '
           'sixteen better than anything a secondary school does. So far so '
           'uncontroversial.'),
          ('Lecturer', 'Here is where it goes wrong. The finding is a '
           'correlation and it gets used as a cause. Households that differ in '
           'vocabulary also differ in income, in parental education, in '
           'housing, in whether a parent works nights. The vocabulary gap '
           'travels with all of those, and pointing at it tells you where to '
           'look and not what to fix.'),
          ('Lecturer', 'The most useful thing we have learned is a '
           'refinement. What tracks early language is not household income '
           'but the amount of talk addressed to the child directly: '
           'conversation they take part in, as against speech they hear in '
           'the room. That holds inside income groups too, which is what '
           'makes it interesting and what makes it actionable.'),
          ('Lecturer', 'So programmes were built on it, and here is the '
           'awkward result. They work, measurably, at the end of the '
           'programme. Then the gains shrink, and in a good many studies they '
           'are gone by age seven. We call that fade-out, and the word does a '
           'lot of hiding.'),
          ('Lecturer', 'Before the conclusion, one thing about the measurement itself, because it is rarely mentioned. What we score at five is a child answering an unfamiliar adult in an unfamiliar room, on request. Some children have done that a hundred times and some have never done it once.'),
          ('Lecturer', 'Score the same children informally at home across several visits and the measured gap falls by about a third. The children have not changed; the setting has. That does not make the test useless, since school is also an unfamiliar room with an unfamiliar adult, but the score is measuring readiness for a setting as much as it is measuring language.'),
          ('Lecturer', 'Hiding what? Two completely different explanations. '
           'Either the programme produced nothing durable, or it produced '
           'something real that school then failed to build on. Those have '
           'opposite policy implications and the data we have does not '
           'separate them. I would rather tell you that than pick one.')],
         items=[
          ('The lecturer calls the vocabulary finding',
           ['doubtful', 'solid', 'out of date', 'too small'], 1,
           'It predicts results at sixteen better than anything a '
           'secondary school does.',
           {0: 'He says the finding itself is uncontroversial.', 2: 'Age is not what he questions about the finding.', 3: 'He calls the differences large, not small.'}),
          (
           'His objection is that a correlation is used as a '
           '____________.', None, 'cause',
           'Pointing at it tells you where to look and not what to '
           'fix.'),
          (
           'What tracks early language better than income is talk '
           'addressed to the child ____________.', None,
           'directly',
           'As against speech the child merely hears in the room.'),
          ('Why does he call that refinement interesting?',
           ['It is cheap to measure', 'It holds inside income groups', 'It is new', 'It applies to all ages'],
           1, 'Which is also what makes it actionable.',
           {0: 'Cheapness belongs to acting on it, not to the finding.', 2: 'Novelty is not what he says makes it interesting.', 3: 'He discusses children at four and five only.'}),
          ('By what age are gains often gone?',
           ['Five', 'Six', 'Seven', 'Eleven'], 2,
           'In a good many studies, which is the pattern called '
           'fade-out.',
           {0: 'Five is when the gap is measured, not when gains go.', 1: 'Earlier than the age he gives for the gains going.', 3: 'Eleven is the follow-up age in the city trial.'}),
          ('What does he say the word fade-out hides?',
           ['The size of the gains', 'Two different explanations', 'The cost of programmes', 'The sample sizes'],
           1, 'And he says the data does not separate them.',
           {0: 'The size of the gains is reported; the cause is not.', 2: 'Cost is not what the word conceals.', 3: 'Sample size is not the ambiguity he names.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='When inequality begins',
    followup=[(('You say the gap is already there when children start school. '
                'Does that mean a school cannot change anything?'),
               ('No, and I would not want that conclusion drawn, because it '
                'becomes an excuse. What the evidence suggests is that schools '
                'work on a gap they did not create, and that a good school '
                'narrows it rather than closing it. That is a real achievement '
                'and it is also a much smaller claim than the one politicians '
                'tend to make.')),
              ('So should the money move from schools to the early years?',
               ('Some of it, and I would be careful about how much. The return '
                'on early spending does look higher, but early programmes are '
                'harder to run well and the good results come from the good '
                'ones. Moving money to a badly run scheme would be worse than '
                'leaving it where it is, so I would increase early spending '
                'without cutting schools, and accept that this costs more.')),
              ('Whose responsibility is a child\'s early learning, then?',
               ('Primarily the family\'s, which is why I am uneasy about the '
                'question, because it is usually asked in order to stop there. '
                'A parent working two jobs is not failing to read to a child '
                'out of indifference. So the honest answer is that the '
                'responsibility is the family\'s and the conditions are the '
                'government\'s, and the second is the part policy can actually '
                'reach.'))],
    intro=('Start with the card. Notes for a minute, then talk, developing '
           'each bullet instead of adding bullets of your own. The '
           'discussion follows: four or five sentences. Try to separate a '
           'cause from a predictor once.'),
    cue=('Describe a child you know who is doing well at school.',
         ['who the child is',
          'what they are good at',
          'what help they get at home',
          'and explain why you think they are doing well']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Is the school a good one?',
        'What would help them most now?',
        'Why do some children do better at school than others?',
        'How much can a school change a child’s chances?',
        'Should governments spend more on the early years?',
        'Whose responsibility is a child’s early learning?'],
    shape=[('answer', 'Most of the difference is there before school '
            'starts.'),
           ('support', 'Vocabulary at five predicts results at sixteen.'),
           ('follow-up', 'Although predicting is not the same as causing.'),
           ('support', 'The households differ in a dozen ways at once.'),
           ('follow-up', 'So the gap tells you where to look more than what '
            'to fix.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Brainstorm ten, keep two',
         prompt=('Governments should spend more on early years education than '
                 'on universities. Brainstorm ten ideas, run the six tests, '
                 'and keep two. Do not write the essay yet.'),
         plan=('Early years spending should come first, because it is the '
               'only stage where the gap can still be prevented',
               [('The gap that matters is already present at five',
                 ['differences at five predict results at sixteen',
                  'later stages manage a gap they did not create']),
                ('Spending later buys a smaller change for the same money',
                 ['university spending reaches those who already succeeded',
                  'the same sum earlier reaches everyone in a cohort'])]),
         notes=[
          'The six tests, in order: does it answer the question asked; is it '
          'true; can you support it for four sentences; is it distinct from '
          'the others; is it roughly equal in weight; does it depend on '
          'another idea. Fail any of the first five and it is cut; fail the '
          'sixth and it is a support, not a main idea.',
          'On this prompt most brainstorms produce three versions of "early '
          'is better": cheaper, more effective, fairer. The distinctness test '
          'is what catches that, and it is the test everybody skips.',
          'Notice the thesis contains a reason, not just a side. A thesis of '
          'the form "X, because Y" writes its own first body paragraph.'],
         criterion=[('Running the distinctness test before writing',
                     'Coherence and Cohesion'),
                    ('A thesis that contains its reason', 'Task Response')],
         instruct='  Produce the brainstorm, the tests and the outline. You '
                  'will write it in cycle 5.',
         lines=12)],
   gram=dict(
    ref='L9',
    context=[
     'From the passage you have just read:',
     'Vocabulary at five predicts reading at eleven, robustly and in '
     'every cohort examined. It does not follow that teaching vocabulary '
     'at five would move reading at eleven. The vocabulary may be the '
     'first visible sign of something else - a household, a nursery, a '
     'thousand hours of being talked to - and raising the sign need not '
     'raise the thing. On the present evidence the measure appears to '
     'contribute to the outcome in part, and anyone claiming more than '
     'that is claiming more than the data allows.'],
    notice=[
     ('The writer uses one verb of association and one of hedged '
      'causation. Copy both out.',
      'predicts; appears to contribute to'),
     ('How many hedges are there in the last sentence, and what are '
      'they doing?',
      'two - on the present evidence, and in part - and they limit the '
      'claim rather than weaken it')],
    noticetask='Answer both from the paragraph above, which you met '
               'earlier in this cycle.',
    contrast='English puts five or six rungs between X and Y move '
             'together and X makes Y happen, and an academic passage '
             'spends almost all of its time in the middle. Predicts '
             'claims nothing about mechanism. Appears to contribute to '
             'claims a mechanism and admits the evidence is partial. '
             'Causes claims both outright. Choosing the wrong rung is '
             'not a vocabulary slip, it is a different finding, and in '
             'Task 2 it is the commonest way of losing marks for Task '
             'Response while writing excellent English.',
    task2='Rewrite each claim at the strength the evidence given '
          'supports.',
    items2=[
     ('Two surveys find the same correlation; no experiment. '
      '“Nursery attendance ____________ later attainment.”',
      None, 'predicts'),
     ('One randomised trial, modest effect, not yet replicated. '
      '“The programme ____________ the gain.”',
      None, 'appears to contribute to'),
     ('Many trials, large effects, replicated worldwide. '
      '“Early reading instruction ____________ later fluency.”',
      None, 'leads to'),
     ('Correct the overclaim: “The study proves that nursery causes '
      'higher attainment.” ____________',
      None, 'suggests that nursery contributes to')],
    task3='Now write the claim yourself. Take one finding from this '
          'cycle - the vocabulary result, the fade-out, the cost '
          'objection - and write forty to sixty words stating it at '
          'exactly the strength the passage supports. Use one hedge, not '
          'two.',
    items3=8,
    point='Separating a predictor from a cause',
    explain=('This distinction appears in half the academic passages in this '
             'volume and candidates lose marks by collapsing it. These '
             'structures keep the two apart.'),
    examples=['Vocabulary at five predicts results at sixteen.',
              'The gap travels with income without being caused by it.',
              'It tells you where to look and not what to fix.',
              'A predictor is being read as though it were a cause.'],
    task='Rewrite each causal claim as the prediction the evidence '
         'supports.',
    items=[('A small vocabulary causes poor results.',
            'A small vocabulary at five predicts poorer results later.'),
           ('Poverty makes children fall behind.',
            'Children in poorer households fall behind more often, and '
            'poverty travels with several other differences.'),
           ('Reading to children makes them cleverer.',
            'Children who are read to score higher, though the reading may '
            'be one of several things such households do.'),
           ('The programme raised attainment.',
            'Attainment rose among the children in the programme.'),
           ('Nurseries close the gap.',
            'The gap is smaller among children who attended nursery, which '
            'the nursery may or may not have caused.')]),
   vocab=[('early indicator', 'a measure taken before the outcome it anticipates'),
          ('fade-out', 'the shrinking of a gain after a programme ends'),
          ('lasting', 'still present long after the cause has stopped'),
          ('refinement', 'a more precise version of a finding'),
          ('practicable', 'able to be done in practice'),
          ('robustly', 'in a way that survives testing'),
          ('reasoning step', 'the move from evidence to conclusion'),
          ('unfamiliar', 'not known or usual to somebody')],
   expr=[('the finding is being asked to do a lot of work',
          'says a result is overused'),
         ('tells you where to look and not what to fix',
          'limits what a correlation licenses'),
         ('the word does a lot of hiding',
          'points at a term that conceals a distinction'),
         ('I would rather tell you that than pick one',
          'declines a false choice')],
   trans=['so far', 'here is where', 'either... or', 'none of this'],
  ),

  dict(
   sub='Whether spending can close it',
   step=5,
   notes=dict(
    serves='Matching information and Yes/No/Not Given, Reading Part 3; '
           'Task 2, discuss both views and give your own opinion',
    because='The Task 2 marks lost at band 6 are lost before a word is '
            'written: the writer answers the topic instead of the task, '
            'gives one view fully and the other in a sentence, and '
            'reaches a conclusion the essay has not earned',
    skill='Reading a Task 2 question as four separate obligations, and '
          'planning both views before choosing between them',
    evidence='Phase 4 measured band 6.5 against band 9 models across six '
             'volumes; the gap at Task Response is almost always a view '
             'given in one sentence and then abandoned',
    watch='Learners will write two paragraphs of their own opinion and '
          'half a paragraph on the view they disagree with. Ask them to '
          'count the sentences before they count the words',
    time='95 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='Where would you put the money?',
    body='This is the last cycle of the unit and the argument has moved '
         'a long way. Cycle 1 was an admissions page. By cycle 4 the '
         'question had run back to the age of five, and the obvious '
         'conclusion was that universities are the wrong place to fix '
         'anything. That conclusion is what this cycle tests, because '
         'the money is finite and somebody has to decide.',
    task='Answer these before you read, and write your answers down. The '
         'unit review asks you to compare them with what you thought at '
         'the start.',
    qs=['If a government had one budget and had to choose between '
        'nursery places and university bursaries, what should it do?',
        'Is it acceptable to withhold a programme you believe works, '
        'from children who need it, in order to find out whether it '
        'works?',
        'What would change your mind about any of this? Name the '
        'evidence.',
        'Has anything you thought at the start of this unit changed? '
        'Which cycle changed it?']),
   vocabwork=dict(
    title='The language of a trial, and of an objection to one',
    body='The last vocabulary set of the unit is the smallest and the '
         'most reusable: it is the language of saying that something was '
         'tested properly, or that it was not. Every one of these words '
         'returns in unit 23, where the subject is public health rather '
         'than schools, and the arguments have the same shape.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='a trial, and its critics',
                sub='cycle 5 · sixteen words, and nine of them return '
                    'in unit 23',
                branches=[('doing it',
                           ['control group', 'at random', 'cohort',
                            'fidelity']),
                          ('what it found',
                           ['effect size', 'fade-out', 'replicate',
                            'robust']),
                          ('doing it elsewhere',
                           ['scale up', 'dilute', 'generalise',
                            'context']),
                          ('objecting to it',
                           ['withhold', 'unrepresentative', 'cherry-pick',
                            'falsify'])],
                note='Cover the four headings. A word you can place is a '
                     'word you half know; a word you can place and use '
                     'in a sentence about a different subject is a word '
                     'you have.'),
    figure2=dict(kind='family', teaches='word-formation',
                 sub='cycle 5 · the stress moves, and so does the '
                     'meaning',
                 rows=[(('in-ter-vene', 3), ('in-ter-ven-tion', 3), '',
                        '', ''),
                       (('e-va-lu-ate', 2), ('e-va-lu-a-tion', 4),
                        ('e-va-lu-a-tor', 2), '', ''),
                       (('ge-ne-ra-lise', 1), ('ge-ne-ra-li-sa-tion', 5),
                        '', ('ge-ne-ral', 1), ('ge-ne-ral-ly', 1)),
                       (('re-pli-cate', 1), ('re-pli-ca-tion', 3), '',
                        ('re-pli-ca-ble', 1), ''),
                       ('', ('ro-bust-ness', 2), '', ('ro-bust', 2),
                        ('ro-bust-ly', 2))],
                 note='Intervention has no adjective in this sense, and '
                      'learners invent one. Say a programme, or an '
                      'intervention, and never an interventional '
                      'measure.'),
    task='Complete each sentence with a word from the field map or the '
         'family table, in the right form.',
    items=[
     ('The children who got nothing were the ____________ group.',
      None, 'control'),
     ('The gain shrank each year until it disappeared: this is '
      '____________.', None, 'fade-out'),
     ('A result found again by somebody else has been ____________.',
      None, 'replicated'),
     ('A programme that works in one city and not in twenty does not '
      '____________.', None, 'generalise'),
     ('Running it everywhere at once is to ____________ it up.',
      None, 'scale'),
     ('The noun from evaluate is ____________.', None, 'evaluation'),
     ('Choosing only the schools that did well is to ____________.',
      None, 'cherry-pick'),
     ('A finding that survives every test you can throw at it is '
      '____________.', None, 'robust')]),
   builder=dict(
    skill='Task 2: read the question as four obligations',
    qkind='skill',
    explain='Most of the marks lost at Task Response are lost before the '
            'first sentence is written, and they are lost by answering '
            'the topic instead of the task. A discuss-both-views '
            'question contains four separate obligations and an essay '
            'that meets three of them is capped, however good the '
            'English is. The topic is what the essay is about. View one '
            'and view two are two positions that must each be given '
            'fairly, with a reason, in roughly equal space - and fairly '
            'means as its own supporters would state it, not as you '
            'would caricature it. Your own opinion is the fourth '
            'obligation and it must be present, must be clear, and must '
            'not simply be one of the two views repeated louder. Take '
            'sixty seconds before you write. Underline the four parts, '
            'count the sentences you intend to give each view, and if '
            'the counts are four and one, change them before you start '
            'rather than after.',
    worked=[
     'QUESTION: Some people think governments should spend on early '
     'years education rather than on universities. Others believe both '
     'should be funded equally. Discuss both views and give your own '
     'opinion.',
     'Topic: where a finite education budget goes. Not whether '
     'university is worth it, which is a different essay.',
     'View one: early years first - and the reason its supporters give '
     'is that the gap is already open at five.',
     'View two: both equally - and the reason is that a university '
     'place is the thing that actually changes an individual life.',
     'Your task: both, fairly, plus a position of your own. An essay '
     'that argues only for early years has answered half the question '
     'and will be marked as having done so.'],
    figure=dict(kind='taskread', teaches='task-analysis',
                sub='cycle 5 · the Task 2 question, taken apart',
                prompt='Some people think governments should spend on '
                       'early years education rather than on '
                       'universities. Others believe both should be '
                       'funded equally. Discuss both views and give '
                       'your own opinion.',
                parts=[('THE TOPIC', 'where a finite budget goes',
                        'what you write about, not what you argue'),
                       ('VIEW ONE', 'early years first',
                        'must be given fairly, with its own reason'),
                       ('VIEW TWO', 'fund both equally',
                        'must be given fairly, with its own reason'),
                       ('YOUR TASK', 'discuss both and give your own '
                        'opinion',
                        'all three, or Task Response is capped at 5')],
                misreadings=['An essay on whether university is worth '
                             'the money.',
                             'An essay arguing one side and naming the '
                             'other in a single clause.'],
                note='The word that costs most marks here is "both". '
                     'Two paragraphs of your own opinion and none of '
                     'view one is a band 5 for Task Response however '
                     'well it is written.'),
    task='For each question opening, write the four parts: topic, view '
         'one, view two, and what you must supply. Four short phrases, '
         'not sentences.',
    items=[
     ('Some say exams should be abolished. Others say they are the '
      'fairest measure we have. Discuss both views and give your own '
      'opinion.', None, 'exams; abolish; fairest; both plus mine'),
     ('To what extent do you agree that early intervention is better '
      'than later support?', None, 'intervention timing; agree; '
      'disagree; a position'),
     ('What are the advantages and disadvantages of free university '
      'tuition?', None, 'free tuition; advantages; disadvantages; no '
      'opinion'),
     ('Some think schools should select by ability. Others disagree. '
      'Discuss both views and give your own opinion.',
      None, 'selection; select; do not; both plus mine'),
     ('Why do some students drop out, and what can be done about it?',
      None, 'dropping out; causes; solutions; no opinion'),
     ('Governments should fund the arts. Do you agree or disagree?',
      None, 'arts funding; agree; disagree; one position')],
    note='Two of the six ask for no opinion at all, and supplying one '
         'wastes a paragraph you needed for something else. Reading the '
         'last sentence of the prompt is worth more than any phrase you '
         'could memorise, and it takes about eight seconds. Notice also '
         'that three of the six give you the two views and three make '
         'you supply them. The second kind is harder and nothing on the '
         'page tells you which kind you have been given, so the sixty '
         'seconds of planning are not optional - they are where you '
         'find out what the question is.'),
   figures=[
    dict(kind='skeleton', teaches='text-structure',
         title='Six hundred words, in six boxes',
         sub='cycle 5 · the last passage of the unit',
         paras=[('A', 'context', 'The budget is finite and must be '
                 'split'),
                ('B', 'claim', 'The early-years case, at its strongest'),
                ('C', 'evidence', 'Two trials, and what happened after '
                 'them'),
                ('D', 'concession', 'Fade-out is real and is not the '
                 'end of it'),
                ('E', 'counter-claim', 'The university case, also at '
                 'its strongest'),
                ('F', 'consequence', 'Why the author refuses to choose')],
         note='Paragraph F is the one students misread. The writer '
              'declines to choose and gives a reason for declining; '
              'that is a position, not an absence of one. A passage '
              'that ends without picking a side has not failed to '
              'finish. It has argued that the question is wrongly put, '
              'which is itself an argument and is examined as one.'),
    dict(kind='ladder', teaches='band-move',
         criterion='Task Response, on the second view',
         sub='cycle 5 · the same obligation, three bands',
         rungs=[('5.5', 'Other people think both should be funded. But I '
                 'think early years is more important.', ''),
                ('6.5', 'Others argue that both should be funded '
                 'equally, since a university place changes an '
                 'individual life in a way a nursery place cannot.',
                 'the view is given a reason, so it is a view rather '
                 'than a label'),
                ('7.5', 'The case for funding both rests on something '
                 'the early-years argument cannot supply: a nursery '
                 'place improves the odds for a cohort, whereas a '
                 'bursary changes the life of the person who receives '
                 'it, and a government is answerable to both.',
                 'the view is given its strongest form, and the '
                 'contrast is carried inside one sentence')],
         note='Only the third rung states the opposing view as its own '
              'supporters would. That is what "discuss both views" '
              'actually asks for, and it is why the band 7 answer '
              'spends longer on the side it disagrees with.'),
   ],
   advice='In a discuss-both-views question the examiner notices, '
          'roughly, how much space you gave each view. Two full '
          'paragraphs for your own side and three lines for the other '
          'is the commonest band 6 essay there is, and no amount of '
          'vocabulary lifts it out of band 6, because what is missing '
          'is not language. Give the view you disagree with its best '
          'argument - the one its own supporters would give - and then '
          'answer that argument rather than a weaker one. It costs you '
          'nothing, it is what the rubric asked for, and it is also, '
          'incidentally, how arguments are actually won outside '
          'examinations.',
   debrief=dict(
    read=['The matching-information question about cost has two '
          'candidate paragraphs. One mentions money and one is about '
          'what the money buys.',
     'Statement 63 says the author prefers early years. The author '
     'declines to choose and says why. Declining is a position, and '
     'test 2 from cycle 2 settles the statement as NO rather than NOT '
     'GIVEN.',
     'One statement is a fair summary of paragraph E and attributes it '
     'to the author. Paragraph E is the author reporting somebody else, '
     'and the giveaway is a single reporting verb in its first line. '
     'This is the commonest Yes/No/Not Given trap in Part 3 and it '
     'catches strong readers rather than weak ones, because a strong '
     'reader follows the argument and stops tracking whose argument it '
     'is. Every time a passage says critics argue, it has stopped '
     'speaking for itself until it says something like even so.'],
    listen=['The lecturer lists four objections and says the third is '
            'the only serious one. Questions 68 and 69 both hang on '
            'that word.',
     'In the matching task two of the three names are mentioned in the '
     'first minute and the attributions are settled in the last. The '
     'recording is built that way on purpose: an answer written down '
     'early is an answer written before the speaker had finished '
     'changing her mind.']),
   outside='Reading a question for what it actually obliges you to do - '
           'rather than for what it reminds you of - is the skill that '
           'decides essays, job applications, grant forms, tenders and '
           'most arguments held across a table. The habit of giving the '
           'other side its best version is rarer and worth more: it is '
           'the difference between a person who can be argued with and '
           'a person who cannot, and almost nobody is taught it on '
           'purpose.',
   recycled=['control group', 'evidence', 'cohort', 'robust',
             'intervention', 'criteria', 'median'],
   read=[
    dict(preview=True,
         heading='What a control group is for',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The passage on the next page turns on one piece of method. '
             'Two hundred words here and the argument in it becomes an '
             'argument you can take a side in.',
         paras=[
          'Suppose a school runs an extra reading hour and the children '
          'improve. Did the hour do it? They also grew five months older, '
          'read other things, and were taught by somebody who had just '
          'been told they were part of an experiment. Any of those could '
          'have produced the improvement, and the figures cannot tell '
          'them apart.',
          'A control group is the answer to that problem and it is a '
          'crude one. Take the same children, split them at random, give '
          'half the extra hour and half nothing. Both halves grow older '
          'and read other things. Only one half gets the hour. Whatever '
          'difference is left at the end is what the hour did.',
          'The word at random is doing the work. If the teachers choose '
          'who gets the hour, they will choose the children they think '
          'will benefit, and the result will tell you about the '
          'teachers’ judgement rather than about the hour.',
          'Nothing about this is free. A control group means deliberately '
          'withholding something you believe works, from children who '
          'need it, for a year. That is the objection the passage spends '
          'two paragraphs on, and it is a serious one.'],
         items=[
          ('Without a control group, improvement might be explained by '
           'the children simply growing ____________.', None, 'older',
           'Paragraph 1, which lists three rival explanations.'),
          ('In a controlled trial the children are split at '
           '____________.', None, 'random',
           'Paragraph 2, and paragraph 3 says why that word matters.'),
          ('If teachers choose who takes part, the result measures their '
           '____________.', None, 'judgement',
           'Paragraph 3: it would tell you about the teachers rather '
           'than the hour.')]),
    dict(heading='Three programmes and what happened next',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 59-65',
         paras=[
          'If early differences predict later results, the obvious response is '
          'to spend money early. Three large programmes have done so, have '
          'been followed for long enough to be judged, and between them '
          'illustrate why the question has not been settled by evidence that '
          'is now forty years old.',
          'The first was small, intensive and expensive: a few dozen children, '
          'daily sessions, trained staff, home visits. Its results are the '
          'ones everybody quotes. The children who took part were, decades '
          'later, more likely to have finished school, more likely to be '
          'employed and less likely to have been arrested, and economists '
          'calculated a return of several pounds for every pound spent.',
          'The second was the same idea at national scale. Funding went to '
          'thousands of settings, staff were existing nursery workers given '
          'additional training, and the daily contact was an hour instead of '
          'a morning. Measured gains at the end were real and much smaller, '
          'and by the second year of school the difference between '
          'participants and others was not statistically detectable.',
          'The third tried to explain the distance between the first two. It '
          'ran the intensive model and the diluted model side by side in the '
          'same city. The intensive arm reproduced roughly two thirds of the '
          'original effect. The diluted arm reproduced almost none of it, and '
          'the difference between the arms was larger than the difference '
          'between the diluted arm and no programme at all.',
          'The usual conclusion drawn from this sequence is that the '
          'programmes do not scale, and that is a reasonable summary with a '
          'misleading word in it. Nothing failed to scale in the sense of '
          'becoming less effective as more children joined. What happened is '
          'that the thing delivered at scale was a different thing: fewer '
          'hours, less trained staff, no home visiting.',
          'That distinction has a practical consequence. If the problem is '
          'scale, the policy conclusion is to stop. If the problem is '
          'dilution, the conclusion is to deliver fewer children the full '
          'programme, which is politically much harder, because it means '
          'choosing who receives it and defending that choice.',
          'There is a further reading that deserves more attention than it '
          'gets. The original programme ran in the 1960s among families whose '
          'alternative was no provision at all. The comparison group in a '
          'modern trial has nursery places, television designed to teach '
          'early literacy and parents who have themselves been to school '
          'longer. A programme can be as good as it ever was and measure '
          'smaller, because what it is being compared with has improved.',
          'It is worth naming what the three programmes have in common, '
          'because it is easy to miss while comparing them. All three '
          'measured the same outcomes: school completion, employment and '
          'contact with the criminal justice system. None measured what the '
          'children or their parents thought of the experience, and none '
          'followed the brothers and sisters who were in the house '
          'throughout and received nothing.',
          'The sibling question is the more interesting of those two '
          'omissions. A programme that changes how a parent talks to one '
          'child is unlikely to leave the others untouched, and the two '
          'small studies that have looked found gains in siblings who never '
          'attended a session. If that holds, the return on the original '
          'spending is higher than any of these evaluations reports, and it '
          'has gone unmeasured at scale for sixty years.',
          'This last point cuts against both camps, which is probably why it '
          'is so rarely made. It denies the sceptics their claim that the '
          'original results were a fluke, and it denies the enthusiasts their '
          'claim that the same returns are available today. It also implies '
          'that the question "does early intervention work" has no general '
          'answer, because the answer depends on what the children concerned '
          'would otherwise have had.'],
         items=[
          (
           'Which paragraph describes a programme run at national '
           'scale?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'Thousands of settings, existing staff, an hour instead of '
           'a morning.',
           {0: 'Paragraph 2 describes the small intensive programme.', 2: 'Paragraph 4 ran both models side by side.', 3: 'Paragraph 5 argues that a key word in the usual '
               'conclusion is wrong.'}),
          (
           'Which paragraph argues that a key word in the usual '
           'conclusion is wrong?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           1,
           'Paragraph 5: nothing failed to scale; a different thing '
           'was delivered.',
           {0: 'Paragraph 4 reports the side-by-side trial.', 2: 'Paragraph 6 draws the practical consequence.', 3: 'Paragraph 7 explains why a modern comparison group is '
               'different.'}),
          (
           'Which paragraph explains why a modern comparison group is '
           'different?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
           2,
           'Nursery places, educational television and better-educated '
           'parents.',
           {0: 'Paragraph 5 argues that a key word in the usual '
               'conclusion is wrong.', 1: 'Paragraph 6 is about what follows for policy.', 3: 'Paragraph 8 names what the three programmes share.'}),
          ('The writer believes the original results were a fluke.',
           ['Yes', 'No', 'Not Given'], 1,
           'The last paragraph says the argument denies the sceptics '
           'exactly that claim.',
           {0: 'Yes would need a fluke; the argument is built to deny '
               'the sceptics that.', 2: 'Not Given is wrong because the writer answers the '
               'fluke objection.'}),
          ('The writer believes the question has one general answer.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final sentence says it has no general answer, because '
           'it depends on the alternative.',
           {0: 'Yes would need generality; the final sentence says it '
               'depends on the alternative.', 2: 'Not Given is wrong because the writer says what kind '
               'of answer exists.'}),
          ('In the third study, the intensive arm reproduced about '
           '____________ of the original effect.', None, 'two thirds',
           'Paragraph 4, where the diluted arm reproduced almost none.'),
          ('If the problem is dilution, the conclusion is to deliver the full '
           'programme to ____________ children.', None, 'fewer',
           'Paragraph 6, which the writer calls politically much harder.')])],
   listen=[
    dict(heading='Two researchers disagree about early intervention',
         part='Part 4', task='A recorded exchange · short answer, multiple choice and matching', band='l4',
         qtype='Questions 66-71',
         script=[
          ('Chair', 'Dr Halvorsen evaluates early years programmes. Professor '
           'Adeyinka has criticised the way they are reported.'),
          ('Adeyinka', 'My complaint is narrow and I want to keep it narrow. '
           'The programme everybody cites ran in the 1960s with fifty-eight '
           'children. It is quoted in parliaments as though it described what '
           'would happen tomorrow in a city of four million.'),
          ('Halvorsen', 'I accept all of that and I would point out who keeps '
           'saying it. It is not the researchers. Every paper I know states '
           'the sample and the date in the abstract.'),
          ('Adeyinka', 'Then we agree about the fact and disagree about '
           'whose problem it is, which is at least progress.'),
          ('Halvorsen', 'Let me give you something harder, though. You treat '
           'the shrinking effect at scale as evidence against the approach. I '
           'think it is evidence about what was delivered. An hour a week '
           'from an untrained assistant is not a diluted version of daily '
           'sessions with a specialist. It is a different programme wearing '
           'the same name.'),
          ('Adeyinka', 'That is the strongest form of your case and I have '
           'two answers. The first is that the diluted version is what any '
           'government will ever actually fund, so evaluating it is '
           'evaluating the real policy. The second is that your argument '
           'cannot be falsified: every disappointing result becomes evidence '
           'that the programme was not really tried.'),
          ('Halvorsen', 'The second one lands. I need a measure of fidelity '
           'specified in advance, and in the trials I have run since, we '
           'have one.'),
          ('Adeyinka', 'Then publish those and I will change my position in '
           'public, which I do not say often.'),
          ('Halvorsen', 'There is one more thing and it troubles us both. The '
           'comparison group has improved. Children in a control group today '
           'have nursery, television that teaches letters, and parents who '
           'stayed at school longer. The programme can be exactly as good as '
           'it was and measure half as large.'),
          ('Halvorsen', 'And there is a question neither side has funded, which is slightly embarrassing for both of us. Nobody has followed the brothers and sisters. If a programme changes how a parent speaks, the other children in that house are receiving something too, and the two small studies that looked did find gains in siblings who never attended.'),
          ('Adeyinka', 'That would change the cost per child substantially, and it would change it in your favour.'),
          ('Halvorsen', 'It would, which is why I want somebody other than me to measure it.'),
          ('Adeyinka', 'I had not weighted that properly, and it damages my '
           'position more than yours.')],
         items=[
          ('How many children were in the original programme?', None,
           'fifty-eight',
           'Adeyinka contrasts this with the cities it is cited in.'),
          ('Halvorsen replies that the overclaiming comes from',
           ['the researchers', 'people other than the researchers', 'the journals', 'the funders'],
           1,
           'He says every paper he knows states the sample and date in '
           'the abstract.',
           {0: 'He says it is not the researchers who overclaim.', 2: 'Journals are not blamed by either speaker.', 3: 'Funders are not mentioned in the exchange.'}),
          ('What does Halvorsen say about the scaled-up version?',
           ['It was poorly evaluated', 'It is a different programme with the same name', 'It worked better', 'It was too expensive'],
           1,
           'An hour from an untrained assistant against daily '
           'specialist sessions.',
           {0: 'His point is about what was delivered, not how it was '
               'measured.', 2: 'The scaled version measured smaller, not larger.', 3: 'The diluted version was cheaper rather than dearer.'}),
          (
           'Which of Adeyinka\u2019s two answers does Halvorsen accept?',
           ['That governments fund the diluted version', 'That his argument cannot be falsified', 'Both of them', 'Neither'],
           1,
           'He concedes it and says he now specifies fidelity in '
           'advance.',
           {0: 'That is the answer he does not concede.', 2: 'He accepts the second answer only.', 3: 'He says the second one lands.'}),
          ('What does Halvorsen say he now has in his trials?',
           ['A larger sample', 'A measure of fidelity', 'Longer follow-up', 'Independent evaluation'],
           1,
           'Specified in advance, which is what Adeyinka\u2019s objection '
           'required.',
           {0: 'Sample size is not what he added to the trials.', 2: 'Follow-up length is not what he specifies in advance.', 3: 'Independence is what he wants for the sibling '
               'question.'}),
          ('What troubles them both?',
           ['The cost', 'The comparison group has improved', 'The sample size', 'Publication delays'],
           1,
           'A programme can be as good as ever and measure half as '
           'large.',
           {0: 'Cost is raised over siblings, and favours one of them.', 2: 'Sample size is the narrow complaint, not the shared '
               'worry.', 3: 'Publication delays are not mentioned by either.'})])],
   speak=dict(
    part='Part 3', focus='What schools can and cannot fix',
    sounds=[('In a long answer the strong stress lands once a sentence, on the '
             'word carrying the point. Candidates who stress every content '
             'word sound emphatic for ten seconds and exhausting for two '
             'minutes.'),
            ('Repeated content goes quiet. In a good school narrows the gap, '
             'but a good school did not create the gap, the second gap is '
             'almost inaudible, and making it strong tells the examiner you '
             'are reading.'),
            ('Take one of your Part 3 answers and mark one word a sentence. '
             'Say it with only those words strong and everything else levelled '
             'down.'),
            ('The de-stressed words are not mumbled. They keep their sounds '
             'and lose their length, which is a different operation and takes '
             'practice to separate.'),
            ('Record ninety seconds on when inequality begins. Count the words '
             'you stressed; at this level one in six or seven is about right.')],
    intro=('The hardest turn in the unit. Say once what would change your '
           'mind.'),
    qs=['Can schools make up for differences at home?',
        'Should money go to the youngest children first?',
        'Is it fair to give more to some children than others?',
        'How would you know whether a programme had worked?'],
    shape=[('answer', 'Partly, and less than we would like.'),
           ('support', 'Most of the gap is present before school starts.'),
           ('follow-up', 'Schools manage a difference they did not make.'),
           ('support', 'The honest difficulty is that early programmes fade.'),
           ('follow-up', 'What would change my mind is a programme that still '
            'showed an effect at eleven.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should early years come before universities?',
         prompt=('Write the essay you planned in cycle 4. Some people think '
                 'governments should spend more on early years education than '
                 'on universities. To what extent do you agree or disagree? '
                 'Write at least 250 words.'),
         model=[
          'I agree, and the reason is not that early years education is more '
          'important in general. It is that the early years are the only '
          'stage at which the gap everybody is worried about can still be '
          'prevented, and every stage after it is managing a difference that '
          'already exists.',
          'The case begins with when the gap appears. Differences in '
          'vocabulary, attention and early number are measurable in the first '
          'term of school, and they predict results at sixteen more reliably '
          'than anything a secondary school does. A system that spends most '
          'at the end is spending most at the point where the least can be '
          'changed.',
          'The second reason concerns who the money reaches. University '
          'funding goes to students who have already succeeded at school, and '
          'in most countries those students come disproportionately from '
          'households that were advantaged at five. Spending there is not '
          'wasted, but it arrives after the selection has happened, so it '
          'widens a difference as often as it narrows one.',
          'The strongest objection is that early programmes fade. Gains are '
          'measurable at the end of a programme and have often disappeared by '
          'the age of seven, and I do not think supporters of early spending '
          'can simply dismiss this. What the evidence does not tell us is '
          'whether the programmes produced nothing lasting or whether schools '
          'failed to build on what they produced.',
          'That uncertainty changes what I would spend on. I would fund early '
          'provision and the first years of school as one programme with one '
          'budget, so that nobody has an interest in claiming that the fade '
          'happened after their part ended. The argument for spending early '
          'is strong; the argument for spending early and then stopping is '
          'not.'],
         notes=[
          'Structure 1: one position, held throughout, with the objection met '
          'in the fourth paragraph. When you genuinely agree, say so in the '
          'first line and spend the essay on why.',
          'The first line refuses a stronger claim than it needs. "Not more '
          'important in general" protects the essay from an objection it '
          'would otherwise have to answer.',
          'The conclusion changes the unit of spending instead of repeating '
          'the position. Ending on a proposal the reader has not yet seen is '
          'worth more than a summary of what they have just read.'],
         model65=[
                  'Some people think governments should spend more on '
                  'early years education than on universities. I '
                  'agree, although the choice is not as simple as it '
                  'looks.',
                  'The argument for early years is well supported. '
                  'Differences between children are already large when '
                  'they start school, and they predict later results. '
                  'Programmes for young children from poorer families '
                  'have been followed for decades, and the adults in '
                  'those studies earn more and are less likely to be '
                  'arrested.',
                  'But the picture has a complication. The test score '
                  'advantage usually fades within a few years, which '
                  'some people take as proof that the programmes fail. '
                  'The long-term results suggest something else: the '
                  'children gained habits and confidence that tests do '
                  'not measure.',
                  'I think the money should go to early years first, '
                  'because the same amount buys more there and the '
                  'benefits reach the children who need them most. '
                  'Universities also matter, but students who arrive '
                  'well prepared gain more from them, so the two are '
                  'not really in competition.',
                  ],
         gap65=[
                'It explains the fade-out properly - why a result can '
                'disappear from the tests and still be present in the '
                'adults - instead of reporting it as a complication.',
                'It says which comparison the spending decision '
                'actually is, rather than treating early years and '
                'universities as rival goods.',
                'It names what would have to be true for the '
                'early-years case to fail.',
                ],
         criterion=[('A position stated in the first line and held',
                     'Task Response'),
                    ('Refusing a stronger claim than you need',
                     'Task Response'),
                    ('A conclusion that proposes rather than summarises',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    ref='L10',
    context=[
     'From the passage you have just read, which you met earlier in this '
     'cycle:',
     'Granted, the early gains fade. Three of the four trials show a '
     'measurable advantage at seven and almost none at eleven, and no '
     'honest account of this literature can leave that out. Even so, '
     'fade-out on a test is not the same as fade-out in a life: the '
     'children who went through these programmes were likelier to '
     'finish school and likelier to be employed at thirty, long after '
     'the test score had stopped showing anything at all.'],
    notice=[
     ('Find the two places where the writer concedes something to the '
      'other side. What word begins each?', 'Granted; and no honest '
      'account... which concedes inside the same sentence'),
     ('Which clause does the writer actually believe - the one before '
      '“Even so” or the one after it?',
      'the one after, because an English sentence puts its weight at '
      'the end')],
    noticetask='Answer both from the paragraph above. The second '
               'question is the whole of this grammar point.',
    contrast='A concession is two halves and the second half is the one '
             'you mean. Put the admission first and your own claim '
             'second - Although the gains fade, the life outcomes do '
             'not - and the reader ends holding your point. Reverse '
             'them and the reader ends holding theirs, which is why a '
             'paragraph that finishes on a concession reads as a '
             'surrender even when every sentence in it is true. Two '
             'traps: Although never takes but in the same sentence, and '
             'However joins sentences rather than clauses, so “However '
             'it is expensive, it works” is wrong where “Although it is '
             'expensive, it works” is right.',
    task2='Join each pair so that the second idea is the one the reader '
          'is left holding. Use the word given.',
    items2=[
     ('The gains fade. The life outcomes do not. (Although) '
      '____________',
      'Although the gains fade, the life outcomes do not.'),
     ('It is expensive. It is cheaper than the alternative. (Even so) '
      '____________',
      'It is expensive. Even so, it is cheaper than the alternative.'),
     ('Correct: Although it is costly, but the gain is real. '
      '____________', 'Although it is costly, the gain is real.'),
     ('Correct: However the sample was small, the result held. '
      '____________', 'Although the sample was small, the result held.')],
    task3='Now concede and answer. Take the objection you find hardest '
          'to dismiss in this cycle - fade-out, cost, or withholding a '
          'programme from children who need it - state it as its '
          'defenders would, and then answer it, in sixty to eighty '
          'words. Concede first, argue second.',
    items3=10,
    point='Conceding an objection without losing the argument',
    explain=('An essay that ignores the obvious objection reads as if the '
             'writer has not thought about it. These patterns admit the '
             'objection and then limit what it proves.'),
    examples=['The strongest objection is that early programmes fade.',
              'I do not think supporters can simply dismiss this.',
              'What the evidence does not tell us is which explanation is '
              'right.',
              'That uncertainty changes what I would spend on.'],
    task='Concede each objection and then limit it.',
    items=[('Early programmes do not last.',
            'Their measured gains often fade, though we do not know whether '
            'the programme or the school is responsible.'),
           ('Universities need money too.',
            'They do, and funding them reaches students who have already '
            'been selected.'),
           ('The evidence comes from small studies.',
            'It does, which limits how confidently it can be applied to a '
            'whole country.'),
           ('Parents matter more than schools.',
            'They appear to, which is an argument for working with parents '
            'and not for spending nothing.'),
           ('This would cost a great deal.',
            'It would, and the comparison is with money already being spent '
            'later for a smaller return.')]),
   vocab=[('intensive', 'involving a lot of effort in a short time'),
          ('dilute', 'to weaken by spreading thinly'),
          ('fidelity', 'how closely a programme follows its design'),
          ('control group', 'those who do not receive the treatment'),
          ('scale up', 'to deliver something to far more people'),
          ('places available', 'how much of a service exists to be used'),
          ('return', 'what is gained for what is spent'),
          ('falsify', 'to show that a claim is false')],
   expr=[('My complaint is narrow and I want to keep it narrow',
          'limits a criticism before making it'),
         ('a different programme wearing the same name',
          'denies that two things are versions of one thing'),
         ('that one lands', 'concedes a specific point'),
         ('I had not weighted that properly',
          'admits an error of emphasis')],
   trans=['the usual conclusion', 'that distinction', 'there is a further',
          'which is probably why'],
  ),
 ],
 technique=dict(
  title='The loop at 700 words: splitting a long paragraph',
  body=('The passages in this volume are at the length of the real paper, and '
        'the loop that worked on three short paragraphs has to survive nine '
        'long ones. One rule does most of the work: when a paragraph runs '
        'past about 150 words, treat it as two. Read to the point where the '
        'writer turns — a however, a but, a second claim — stop, and close '
        'any question that half has answered. Then read on. A long paragraph '
        'read in one piece is a paragraph you will have to read twice, and '
        'reading it twice is how candidates lose the last ten minutes of the '
        'paper.'),
  panel=[('Find the turn', 'Most long paragraphs have one: a however, a '
          'second example, a change of claim. That is the seam to split on.'),
         ('Close what you can', 'After each half, look at the questions still '
          'open and close any the half answered. Do not wait for the '
          'paragraph to end.'),
         ('Underline, do not pause', 'If an answer appears mid-sentence, '
          'underline it and keep reading to the seam. Stopping to write loses '
          'the thread.'),
         ('One pass only', 'The whole point of splitting is that you never '
          'go back. A paragraph read once, in two halves, costs less than a '
          'paragraph read twice.')],
  task='Take the cycle 5 passage. For each of its eight paragraphs, mark '
       'where you would split it, or write "no split" and say why.',
  qs=['Which paragraphs did you split, and on what word?',
      'Which paragraph was hardest to find a seam in?',
      'Did splitting let you close a question earlier than you otherwise '
      'would?',
      'How many paragraphs did you read twice?',
      'What would you do differently on the next passage?']),
 outlining=dict(
  title='Brainstorm ten, keep two',
  body=('A brainstorm is useful in proportion to how much of it you throw '
        'away. Ten ideas is the right number to produce and two is the right '
        'number to keep, and the work is the six tests in between: does it '
        'answer the question asked; is it true; can you support it for four '
        'sentences; is it distinct from the others; is it roughly equal in '
        'weight; and does it depend on another idea. The fourth test removes '
        'the most, because most brainstorms contain the same idea three '
        'times in different clothes.'),
  frame=('Early years spending should come first, because it is the only '
         'stage where the gap can still be prevented',
         [('The gap that matters is already present at five',
           ['differences at five predict results at sixteen',
            'later stages manage a gap they did not create']),
          ('Spending later buys a smaller change for the same money',
           ['university funding reaches those who already succeeded',
            'the same sum earlier reaches a whole cohort'])]),
  task='Brainstorm ten ideas for the cycle 4 prompt, run all six tests in '
       'writing, and record which test removed each idea you discarded.',
  qs=['Which ideas failed the distinctness test?',
      'Which idea could you not support for four sentences?',
      'Which idea turned out to be a support?',
      'Are your surviving two of roughly equal weight?'],
  answers=['usually three versions of "early is better": cheaper, fairer, '
           'more effective',
           'typically a moral claim such as all children deserve a chance',
           'the cost of early provision belongs under the second idea',
           'if not, the lighter one is a support promoted too far']),
 candos=['I can read a condition on an offer as a question',
         'I can split a long paragraph at its turn and close questions '
         'early',
         'I can tell a predictor from a cause in one sentence',
         'I can group categories that cluster in a two-series chart',
         'I can brainstorm ten ideas and keep the right two'],
 tip=('When a paragraph runs past about 150 words, your eyes will keep going '
      'and your memory will not. Split it at the turn, close what it '
      'answered, then read on.'),
)
