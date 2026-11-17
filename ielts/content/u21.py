# -*- coding: utf-8 -*-
"""Unit 21 - Education: Access and Outcomes. IELTS Volume 3, band 6.0."""

_EARN = dict(kind='bar', title='Median earnings five years after graduating',
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

 cycles=[
  dict(
   sub='Applying to university',
   step=1,
   read=[
    dict(heading='Entry requirements and contextual offers',
         kind='Admissions page', task='Matching features and short answer',
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
         kind='Procedure notice', task='Flow-chart completion',
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
         task='A telephone call to an admissions office', band='l1',
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
         part='Part 2', task='A talk to sixth-form students', band='l2',
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
           'read?',
           ['Thirty seconds', 'Ninety seconds', 'Five minutes', 'As long as it takes'],
           1,
           'She explains this as four hundred applications in a '
           'fortnight.',
           {0: 'Shorter than the time she gives a statement on a first '
               'read.', 2: 'Far longer than four hundred applications in a '
               'fortnight allows.', 3: 'She gives a fixed first read rather than an open one.'}),
          ('What does she advise against in the opening?',
           ['Describing work experience', 'A quotation or a childhood ambition', 'Naming the course', 'Mentioning grades'],
           1,
           'She says she has read the childhood-ambition sentence '
           'eleven hundred times.',
           {0: 'Work experience is what she says to write about well.', 2: 'Naming the course is not among the things she warns '
               'against.', 3: 'Grades are the other score, and she does not ban them.'}),
          ('What matters more than the work experience itself?',
           ['Its length', 'Where it took place', 'What you say about it', 'Who arranged it'],
           2,
           'The student who says what surprised her is the one she '
           'remembers.',
           {0: 'Length matters for the statement, not for the '
               'placement.', 1: 'Two students describe the same placement differently.', 3: 'How the placement was arranged is not mentioned.'}),
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
    dict(heading='A short talk: who gets in', part='Part 2',
         task='A talk at a parents’ evening', band='l2',
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
          ('The speaker says the system is',
           ['entirely fair', 'fairer than it was and less fair than it looks', 'worse than it was', 'impossible to judge'],
           1,
           'She gives this as the honest answer to the question nobody '
           'asks.',
           {0: 'She says it is also less fair than it looks.', 2: 'She says it is fairer than it was twenty years ago.', 3: 'She answers the question rather than refusing it.'}),
          (
           'Roughly what proportion of selective universities make '
           'lower offers?',
           ['A tenth', 'A quarter', 'A third', 'A half'], 2,
           'She calls the change real and says it has moved thousands '
           'of students a year.',
           {0: 'Smaller than the share she reports making lower '
               'offers.', 1: 'Lower than the proportion she gives for selective '
               'universities.', 3: 'Higher than the share of selective universities she '
               'names.'}),
          ('Lowering an offer by one grade helps',
           ['every disadvantaged student', 'the student who was close', 'students at eleven', 'nobody'],
           1,
           'It does nothing for the larger group who were never close.',
           {0: 'It does nothing for those who were never going to be '
               'close.', 2: 'A university cannot do anything about the gap at '
               'eleven.', 3: 'It does help the student who was already close.'}),
          ('What does she say about information?',
           ['It is secret', 'It is unevenly spread', 'It is mostly wrong', 'It changes too fast'],
           1, 'And she stresses that none of it is secret.',
           {0: 'She stresses that none of the information is secret.', 2: 'The information is right; it is unevenly held.', 3: 'Her advice is to check this year, not that it changes.'})]),
    dict(heading='Two admissions tutors disagree', part='Part 3',
         task='A conversation after a selection meeting', band='l3',
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
          ('Marisol argues that if the number is too low,',
           ['the tutors are at fault', 'the criteria are wrong', 'more applicants are needed', 'the course is too hard'],
           1,
           'And that changing the criteria is not a decision for that '
           'meeting.',
           {0: 'She says the offers went to everybody who qualified.', 2: 'Applicant numbers are not the point she makes.', 3: 'Difficulty is her later point, about anatomy.'}),
          ('What does she say about offers two grades below standard?',
           ['They work well', 'There is almost no evidence', 'They are illegal', 'They are already used'],
           1, 'The evidence is encouraging about one grade only.',
           {0: 'The encouraging evidence covers one grade only.', 2: 'Legality is not raised anywhere in the meeting.', 3: 'This course uses one grade below, not two.'}),
          (
           'Students arriving two grades below fail the anatomy '
           'examination',
           ['at the same rate', 'at twice the rate', 'at three times the rate', 'at half the rate'],
           2,
           'She says she has the figures and would rather use them '
           'than argue from principle.',
           {0: 'That would remove her objection entirely.', 1: 'Lower than the figure she says she has.', 3: 'That would be an argument for the lower offer.'}),
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
   read=[
    dict(heading='Earnings by subject, five years on',
         kind='Data article',
         task='Matching information and True/False/Not Given',
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
          ('Median earnings for women in medicine: £____________', None,
           '48,000', 'Against £52,000 for men, the highest figure shown.'),
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
         task='A lecture on reading earnings figures', band='l4',
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
          ('The mistake he names is comparing',
           ['men with women', 'graduates with graduates', 'subjects with subjects', 'medians with means'],
           1,
           'What you want is what the same person would have earned '
           'otherwise.',
           {0: 'The comparison between the sexes is not the mistake he '
               'names.', 2: 'Comparing subjects is what the table is for.', 3: 'Medians come up at the end, as a separate point.'}),
          ('Which is NOT one of his three methods?',
           ['Comparing students near a cut-off', 'Following twins', 'Surveying employers', 'Using a policy change'],
           2, 'He gives three, and none of them is clean.',
           {0: 'This is the first of his three methods.', 1: 'Twins are the second method he names.', 3: 'A policy change is the third method he lists.'}),
          ('When better methods are used, the premium',
           ['disappears', 'shrinks', 'grows', 'stays the same'], 1,
           'To around half to two thirds of the raw gap.',
           {0: 'He says a degree still pays on average.', 2: 'Better methods make the premium smaller, not larger.', 3: 'It falls to about half or two thirds of the raw gap.'}),
          ('Why does medicine stay near the top?',
           ['The students are selected', 'The training really is specific', 'The hours are long', 'The sample is small'],
           1, 'Even once selection is accounted for.',
           {0: 'Selection is what the better methods remove.', 2: 'Hours of work are not mentioned in the lecture.', 3: 'Sample size is not his explanation here.'}),
          ('His final point is that the spread within a subject is',
           ['narrower than between subjects', 'wider than between subjects', 'the same', 'not measurable'],
           1,
           'Which makes a choice between two subjects a decision about '
           'a small difference.',
           {0: 'He says the reverse, which is his final point.', 2: 'He contrasts the two spreads rather than equating '
               'them.', 3: 'He gives the comparison as a measured fact.'})])],
   speak=dict(
    part='Part 3', focus='Education and work',
    intro=('Four or five sentences. Where you use a figure, say what it is an '
           'average of.'),
    qs=['Is a university degree still worth the cost?',
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
   read=[
    dict(heading='What is already different at five',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
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
    dict(heading='A lecture on early years and attainment', part='Part 4',
         task='A lecture on reading early-years evidence', band='l4',
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
          ('His objection is that a correlation is used as',
           ['a prediction', 'a cause', 'an average', 'a target'], 1,
           'Pointing at it tells you where to look and not what to '
           'fix.',
           {0: 'A prediction is what it legitimately is.', 2: 'Averages are not what he objects to here.', 3: 'Targets are not discussed in the lecture.'}),
          ('What tracks early language better than income?',
           ['Housing quality', 'Talk addressed to the child directly', 'Nursery attendance', 'Parental education'],
           1, 'As against speech the child merely hears in the room.',
           {0: 'Housing is one of the things the gap travels with.', 2: 'Nursery places appear later, as a comparison group.', 3: 'Parental education also merely travels with the gap.'}),
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
    part='Part 3', focus='When inequality begins',
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
    intro=('Four or five sentences. Try to separate a cause from a predictor '
           'once.'),
    qs=['Why do some children do better at school than others?',
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
   read=[
    dict(heading='Three programmes and what happened next',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
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
         part='Part 4', task='A recorded exchange', band='l4',
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
          ('How many children were in the original programme?',
           ['Eighteen', 'Fifty-eight', 'Four hundred', 'Four million'],
           1, 'Adeyinka contrasts this with the cities it is cited in.',
           {0: 'No figure of that size appears in the exchange.', 2: 'Four hundred is the city trial described in the '
               'passage.', 3: 'Four million is the city the result is quoted in.'}),
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
