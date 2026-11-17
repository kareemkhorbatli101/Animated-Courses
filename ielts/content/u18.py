# -*- coding: utf-8 -*-
"""Unit 18 - Science and Discovery. IELTS Volume 2, band 5.5."""

_TRI = dict(kind='process',
            title='How a controlled trial is designed and run',
            sub='the stages of a trial of a new treatment, from the '
                'question to the published write-up',
            stages=[
             ('Question', 'a single question is written down before '
              'anything else'),
             ('Recruitment', 'volunteers are found and checked against '
              'the rules'),
             ('Two groups', 'a coin toss decides who goes in which '
              'group'),
             ('Treatment', 'one group gets the treatment, the other a '
              'dummy pill'),
             ('Measurement', 'the one outcome chosen at the start is '
              'measured'),
             ('Comparison', 'the two groups are compared, and only '
              'then'),
             ('Write-up', 'the result is sent to a journal for '
              'review')],
            phases=[('Before the trial', 0, 1),
                    ('Running the trial', 2, 4),
                    ('After the trial', 5, 6)])

UNIT = dict(
 n=18, vol=2, level='B1+', band='5.5',
 theme='Science and Discovery',
 opener=(
   'This unit begins with a science festival and a school booking and '
   'ends with two scientists arguing about whether science can correct '
   'itself. In between you will design a trial, read about a famous '
   'result that would not come back a second time, and learn the hardest '
   'single thing in Reading, which is what to do when the answer is that '
   'the passage never said.'),

 cycles=[
  dict(
   sub='Joining a science event',
   step=1,
   read=[
    dict(heading='Science Week: programme and booking',
         kind='Programme',
         task='Table completion and matching features',
         band='gt_short', qtype='Questions 1-6',
         skill=('A programme is read by column, not by line',
                ['Find the column the question is about — day, time, '
                 'age, price, place — and read down it. Reading across '
                 'every line wastes the time you need for the hard '
                 'questions later.',
                 'One event in every programme breaks the pattern of the '
                 'others. That is the one the questions are about.']),
         paras=[
          'Science Week runs from Monday 9 to Saturday 14 March at four '
          'venues across the city. Every event is free except where a '
          'price is shown, and free does not mean unbooked: a place must '
          'be reserved for all events in the Lecture Theatre.',
          'Mornings are for schools. From 09.30 to 12.00 each weekday the '
          'Main Hall is given over to booked school groups. The Saturday '
          'programme is open to everybody all day.',
          'The hands-on workshops in the Annexe take twenty-four people '
          'and run at 13.00, 14.30 and 16.00. They are for ages eight and '
          'over, and an adult must stay with any child under twelve.',
          'The evening lectures at 19.00 are for ages sixteen and over '
          'and cost £4. Wednesday is the exception: the Wednesday lecture '
          'is free, lasts twice as long as the others and includes a '
          'demonstration in the courtyard afterwards.',
          'The Annexe and the Main Hall have level access throughout. The '
          'Lecture Theatre has steps at the front, and wheelchair access '
          'is through the side door on Fairweather Street.',
          'Book online from 1 February. Places held for a group that does '
          'not arrive are released to the queue fifteen minutes after the '
          'advertised start.'],
         items=[
          ('A place must be reserved for all events in the '
           '____________.', None, 'Lecture Theatre',
           'Paragraph 1: free does not mean unbooked.'),
          ('School groups have the Main Hall until ____________ each '
           'weekday.', None, '12.00',
           'Paragraph 2, from 09.30 each weekday morning.'),
          ('The hands-on workshops take ____________ people.', None,
           'twenty-four', 'Paragraph 3, at three times each afternoon.'),
          ('Which event is free when the others of its kind are not?',
           ['the Saturday programme', 'the Wednesday lecture',
            'the courtyard demonstration', 'the Annexe workshops'], 1,
           'Paragraph 4: the exception that breaks the pattern.'),
          ('Wheelchair access to the Lecture Theatre is through the side '
           'door on ____________ Street.', None, 'Fairweather',
           'Paragraph 5, opened on request.'),
          ('Unclaimed places are released ____________ minutes after the '
           'start.', None, 'fifteen',
           'Paragraph 6, when they are released to the queue.')]),
    dict(heading='Schools and group visits',
         kind='Procedure notice', task='Short answer',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Group bookings are for ten to thirty-five pupils. A group of '
          'more than thirty-five is split across two sessions on the same '
          'morning rather than being refused, and the teacher is asked to '
          'say which pupils are in which half.',
          'One adult is required for every eight pupils, and for pupils '
          'under seven the ratio is one to six. Adults accompanying a '
          'group are not counted in the booking number and do not need '
          'tickets.',
          'A risk assessment must be returned at least ten working days '
          'before the visit. The form is sent out with the confirmation, '
          'and a visit without a returned assessment cannot go ahead even '
          'if it has been paid for.',
          'Lunch may be eaten in the courtyard, or in the Annexe if the '
          'weather is poor, but not in the Main Hall. Groups wishing to '
          'use the Annexe at lunchtime should say so when booking, as the '
          'space is also used for workshops.'],
         items=[
          (
           'A group of more than thirty-five pupils is split across '
           'two ____________.', None, 'sessions',
           'Paragraph 1, on the same morning rather than refused.'),
          ('What is the adult ratio for pupils under seven?', None,
           'one to six', 'Paragraph 2, rather than one to eight.'),
          ('How long before the visit must the risk assessment be '
           'returned?', None, 'ten working days',
           'Paragraph 3, or the visit cannot go ahead.'),
          ('Where may a group not eat lunch?', None, 'the Main Hall',
           'Paragraph 4: the courtyard or the Annexe instead.')])],
   listen=[
    dict(heading='Booking a schools session', part='Part 1',
         task='A telephone call to a festival office', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Office', 'Science Week bookings, good morning.'),
          ('Teacher', 'I would like to book a schools session. We are '
           'Ashbourne Road Primary.'),
          ('Office', 'How many pupils?'),
          ('Teacher', 'Forty-two.'),
          ('Office', 'Then it will be two sessions on the same morning. '
           'The limit is thirty-five in one.'),
          ('Teacher', 'That is fine. We can split them.'),
          ('Office', 'I will need to know which pupils are in which half '
           'nearer the time, but not today. What age are they?'),
          ('Teacher', 'Nine and ten.'),
          ('Office', 'Then one adult for every eight. Six adults for '
           'forty-two.'),
          ('Teacher', 'We have seven coming. Do they need tickets?'),
          ('Office', 'No. Accompanying adults are not counted and are not '
           'charged.'),
          ('Teacher', 'Which morning is free?'),
          ('Office', 'Tuesday the tenth and Thursday the twelfth.'),
          ('Teacher', 'Thursday, please.'),
          ('Office', 'Thursday the twelfth, 09.30 to 12.00, Main Hall. '
           'And you will need to return the risk assessment at least ten '
           'working days before, so by the twenty-sixth of February.'),
          ('Teacher', 'You will send the form?'),
          ('Office', 'With the confirmation today. I should say that '
           'without it the visit cannot go ahead, and we do turn groups '
           'away for that, which nobody enjoys.'),
          ('Teacher', 'Understood. Can we eat lunch there?'),
          ('Office', 'The courtyard, or the Annexe if it is wet. Not the '
           'Main Hall. Say now if you want the Annexe, because the '
           'workshops use it.'),
          ('Teacher', 'Yes, please, as a reserve.'),
          ('Office', 'Noted. Your booking reference is S as in sugar, '
           'four one seven.'),
          ('Teacher', 'S four one seven. Thank you very much.')],
         items=[
          ('Number of pupils: ____________', None, '42',
           'Which is over the limit for a single session.'),
          ('Number of sessions required: ____________', None, 'two',
           'Because the limit in one session is thirty-five.'),
          ('Adults required: ____________', None, 'six',
           'One for every eight pupils aged nine and ten.'),
          ('Date of visit: Thursday ____________ March', None, '12',
           'Chosen from the two mornings offered.'),
          ('Risk assessment due by ____________ February', None, '26',
           'Ten working days before the visit.'),
          ('Booking reference: S-____________', None, '417',
           'The schools reference is spelled out in the closing '
           'exchange.')])],
   speak=dict(
    part='Part 1', focus='Science you find interesting',
    intro=('Two or three sentences each. One real example beats a '
           'general opinion.'),
    qs=['Did you enjoy science at school?',
        'Do you read or watch anything about science now?',
        'Would you go to a science festival?',
        'Is science taught well where you live?'],
    shape=[('answer', 'I liked biology and I was poor at physics.'),
           ('support', 'Biology had things you could look at under a '
            'microscope.'),
           ('follow-up', 'Physics was equations on a board, and I think '
            'that was the teaching rather than the subject.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Arranging a school group visit to a science event',
         prompt=('You are a teacher who wants to bring a class to a '
                 'science event. Write a letter to the organisers. In '
                 'your letter: say who you are and what you want to '
                 'book; ask three questions about the arrangements; '
                 'explain what your group needs. Write at least 150 '
                 'words.'),
         model=[
          'Dear Sir or Madam,',
          'I am a class teacher at Ashbourne Road Primary School and I am '
          'writing to enquire about availability for a schools session '
          'during Science Week in March.',
          'I should like to bring forty-two pupils aged nine and ten, '
          'accompanied by seven adults. I understand that the limit for a '
          'single session is thirty-five, and I would be grateful if the '
          'group could be divided across two sessions on the same '
          'morning.',
          'I have three questions. First, which mornings are still '
          'available in the week beginning 9 March? Second, do the '
          'accompanying adults require tickets, or are they outside the '
          'booking number? Third, by what date must the risk assessment '
          'be returned?',
          'I should also mention two things about our group. Two pupils '
          'use wheelchairs, so I would like to confirm that the Main Hall '
          'has level access throughout, and we would prefer to eat lunch '
          'indoors if the weather is poor.',
          'I look forward to hearing from you and will return the '
          'paperwork as soon as it arrives.',
          'Yours faithfully,',
          'Theodora Nkemelu-Hartley'],
         notes=[
          'The three questions are numbered with First, Second, Third. On '
          'a letter of enquiry this is worth more than it looks: the '
          'reader can answer each one, and the examiner can see that all '
          'three bullets were covered.',
          'The writer states the rule she is working within — the limit of '
          'thirty-five — before asking for the split. A request that shows '
          'the writer has read the notice is a different kind of request.',
          'The needs come after the questions, in their own paragraph, and '
          'they are specific: level access and indoor lunch. "We have some '
          'special requirements" gives the reader nothing to act on.'],
         criterion=[('Three questions, numbered and answerable',
                     'Task Achievement'),
                    ('Stating the rule before asking for the exception',
                     'Task Response'),
                    ('Needs given specifically enough to act on',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Formal enquiry with embedded questions',
    explain=('A question inside a statement is more formal than a direct '
             'question, and the word order changes: no inversion, no '
             'auxiliary do.'),
    examples=['I am writing to enquire about availability on 12 March.',
              'Could you tell me whether the adults require tickets?',
              'I should be grateful if you could confirm what the ratio '
              'is.',
              'I am not sure by what date the assessment must be '
              'returned.'],
    task='Rewrite each direct question as an embedded one.',
    items=[('Is there a session free on Thursday?',
            'I am writing to enquire whether a session is available on '
            'Thursday.'),
           ('Do the adults need tickets?',
            'Could you tell me whether the accompanying adults require '
            'tickets?'),
           ('When must I send the form?',
            'I should be grateful if you could confirm by what date the '
            'form must be returned.'),
           ('How many pupils can come?',
            'Could you let me know how many pupils may attend a single '
            'session?'),
           ('Is there level access?',
            'I should like to confirm whether the Main Hall has level '
            'access throughout.')]),
   vocab=[('venue', 'a place where an event is held'),
          ('workshop', 'a session where people do things themselves'),
          ('hands-on', 'involving doing rather than watching'),
          ('wheelchair access', 'a way in for a wheelchair user'),
          ('risk assessment', 'a written check on what could go wrong'),
          ('accessible', 'able to be reached and used by everybody'),
          ('demonstration', 'a show of how something works'),
          ('booking form', 'the paper on which a place is reserved')],
   expr=[('I am writing to enquire about availability on',
          'the opening sentence of an enquiry'),
         ('could you tell me whether',
          'the formal embedded question'),
         ('I understand that the limit is thirty-five',
          'shows the writer has read the notice'),
         ('I will return the paperwork as soon as it arrives',
          'closes a letter with a commitment')],
   trans=['furthermore', 'in addition', 'secondly', 'finally'],
  ),

  dict(
   sub='How people hear about science',
   step=2,
   read=[
    dict(heading='Four readers on science news',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Casimir: I read the headline, I believed it for about a '
          'week, and then a friend sent me the study. Eleven people. '
          'Eleven. The headline said chocolate and the study said eleven '
          'people, and I have never trusted a food story since.',
          'B  Perpetua: My complaint is not that the papers lie. It is '
          'that they report the first study and never the second. The '
          'result that failed to come back a year later is not a story, '
          'and so the public only ever reads the exciting half.',
          'C  Benedetta: I work in a press office and I will defend us '
          'slightly. We write that a study suggests something and the '
          'headline writer, who is a different person in a different '
          'building, turns suggests into proves. We see it the same '
          'morning you do.',
          'D  Maximilian: I have given up on news and read the journals '
          'themselves, which takes an hour a week and is harder than '
          'people think. I understand perhaps a third of each paper. That '
          'third has been worth more to me than ten years of '
          'headlines.'],
         items=[
          ('Which reader stopped trusting a whole category of story?',
           ['Casimir', 'Perpetua', 'Benedetta', 'Maximilian'], 0,
           'He says he has never trusted a food story since.'),
          ('Which reader objects to what is left unreported?',
           ['Casimir', 'Perpetua', 'Benedetta', 'Maximilian'], 1,
           'The second study, which failed to come back.'),
          ('Which reader says the exaggeration happens after the words '
           'leave them?',
           ['Casimir', 'Perpetua', 'Benedetta', 'Maximilian'], 2,
           'A different person in a different building writes the '
           'headline.'),
          ('Which reader accepts understanding only part of what they '
           'read?',
           ['Casimir', 'Perpetua', 'Benedetta', 'Maximilian'], 3,
           'Perhaps a third of each paper.'),
          ('Perpetua believes newspapers print untrue statements.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says her complaint is not that the papers lie.',
           {0: 'Yes would need untruth; she says her complaint is not '
               'that they lie.', 2: 'Not Given is wrong because she defines her complaint.'}),
          (
           'Benedetta writes the headlines for the studies she '
           'reports.', ['Yes', 'No', 'Not Given'], 1,
           'The headline writer is a different person.',
           {0: 'Yes would need her to write them; the headline writer '
               'is somebody else.', 2: 'Not Given is wrong because the division of work is '
               'stated.'})])],
   listen=[
    dict(heading='A short talk: how people hear about science',
         part='Part 2', task='A talk at a public library', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'I am going to describe the route a scientific '
           'result takes to reach you, because almost nobody knows what '
           'happens in the middle, and the middle is where the trouble '
           'is.'),
          ('Speaker', 'Stage one. A study is finished and written up. '
           'Stage two, it goes to a journal and two or three other '
           'scientists read it and object to things. That takes between '
           'four months and two years, and most of what you will later '
           'read about has not yet got through it.'),
          ('Speaker', 'Stage three is the one nobody imagines. The '
           'university press office writes a summary, usually with the '
           'researcher checking it, and sends it out. Those summaries are '
           'careful. They use the word suggests, and they say how many '
           'people were in the study, which is the single most useful '
           'number in the whole business.'),
          ('Speaker', 'Stage four. A journalist, who has perhaps forty '
           'minutes and eight other stories, writes an article from the '
           'summary. Stage five, and this is the stage that causes almost '
           'all the complaints: somebody else entirely writes the '
           'headline, and that person has about eight words and has often '
           'not read the study at all.'),
          ('Speaker', 'So when you are cross about a science headline, '
           'you are usually cross with stage five and blaming stage one. '
           'The scientists are reading that headline on the same morning '
           'as you, and a fair number of them write to the paper about '
           'it.'),
          ('Speaker', 'My practical advice is one question, and it costs '
           'you ten seconds. How many people were in the study? If the '
           'article does not say, that is your answer about how much '
           'weight to give it.')],
         items=[
          ('Review by other scientists takes between four months and '
           '____________ years.', None, 'two',
           'Stage two, and most reported work has not yet completed '
           'it.'),
          ('The press office summary usually uses the word '
           '____________.', None, 'suggests',
           'Stage three, which the speaker calls careful.'),
          ('The stage that causes almost all the complaints is the '
           'writing of the', ['summary', 'article', 'headline',
            'study'], 2,
           'Stage five, by somebody who may not have read the study.'),
          ('His practical advice is to ask how many ____________ were in '
           'the study.', None, 'people',
           'And to treat silence on that point as an answer.')]),
    dict(heading='Two journalists on reporting a study', part='Part 3',
         task='A discussion between two reporters', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Casimir', 'You ran the chocolate story. I want to know how it '
           'happened.'),
          ('Benedetta', 'Ask, and I will tell you honestly, because it is '
           'not the story you think.'),
          ('Casimir', 'The study had eleven people in it.'),
          ('Benedetta', 'It did. My article said eleven people, in the '
           'third paragraph.'),
          ('Casimir', 'Nobody reads the third paragraph.'),
          ('Benedetta', 'Which is the real criticism and I accept it. The '
           'number should have been in the first sentence. I put it '
           'third because the first two had to carry what the study was '
           'about.'),
          ('Casimir', 'And the headline said chocolate protects the '
           'heart.'),
          ('Benedetta', 'The headline was not mine. I filed it with '
           '"small study suggests" in the heading I wrote, and the desk '
           'cut it for space, which is what the desk does at eleven at '
           'night.'),
          ('Casimir', 'That sounds like blaming somebody who is not '
           'here.'),
          ('Benedetta', 'It is, and it is also true, and the honest '
           'position is that I knew it would probably happen when I filed '
           'it. That is the part I would change.'),
          ('Casimir', 'So what would you do differently?'),
          ('Benedetta', 'Two things. The number of people in the first '
           'sentence, where it cannot be cut. And a line saying what '
           'would have to happen for this to be worth acting on, which in '
           'that case was a trial about a hundred times bigger.'),
          ('Casimir', 'Would the desk have kept that line?'),
          ('Benedetta', 'Probably not. But I would have written it, and '
           'the complaint would then have been about the desk rather than '
           'about me, which is where it belongs.'),
          ('Casimir', 'That is more candid than I expected.'),
          ('Benedetta', 'There is one more thing nobody asks. The study '
           'was never repeated. I have checked every year since, and no '
           'newspaper will run that, because a result that did not come '
           'back is not a story.')],
         items=[
          ('The number of people in the study appeared in Benedetta’s '
           '____________ paragraph.', None, 'third',
           'Which she now accepts was too late.'),
          ('She says the heading she filed contained the words "small '
           'study ____________".', None, 'suggests',
           'And that the desk cut it for space.'),
          ('The desk cut her heading at about ____________ at night.',
           None, 'eleven',
           'Which she says is what the desk does then.'),
          ('The part she says she would change is that she knew the cut '
           'would probably happen when she',
           ['wrote it', 'filed it', 'read it', 'checked it'], 1,
           'Which she calls the honest position.'),
          ('She would now add a line saying what would have to happen for '
           'the result to be worth ____________ on.', None, 'acting',
           'In that case a trial a hundred times bigger.'),
          ('No newspaper will report that the study was never '
           '____________.', None, 'repeated',
           'Because a result that did not come back is not a story.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Science in the news',
    intro=('Short answers, then the long turn. Say what the finding was '
           'before saying what you thought of it.'),
    cue=('Describe a scientific discovery you heard about.',
         ['what it was', 'where you heard about it',
          'what it said would happen',
          'and explain whether you believed it']),
    qs=['Where do you hear about science?',
        'Do you believe what you read about health?',
        'Now look at the card. You have one minute to make notes.',
        'Should newspapers report studies that found nothing?'],
    shape=[('answer', 'A study about chocolate and the heart, about '
            'three years ago.'),
           ('support', 'I read it in a newspaper and it was on the front '
            'page.'),
           ('follow-up', 'It said a small amount of dark chocolate '
            'lowered the risk of heart disease.'),
           ('support', 'I believed it for about a week.'),
           ('follow-up', 'Then somebody showed me the study itself, '
            'which had eleven people in it, and I stopped believing '
            'food stories altogether.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should scientists explain their work to the public?',
         prompt=('Some people believe scientists should be required to '
                 'explain their work to the public. To what extent do '
                 'you agree? Write at least 250 words.'),
         model=[
          'I agree that scientists should explain their work publicly, '
          'and I think the requirement is usually placed on the wrong '
          'person. The explaining that goes wrong happens after the '
          'scientist has finished, and the scientist has no power over '
          'it.',
          'The argument for the requirement is strong. Most research is '
          'paid for from taxes, and the public is asked to act on its '
          'results: to take a medicine, to change a diet, to accept a '
          'policy. A finding nobody outside the field can understand '
          'cannot be acted on, and a public that never hears a scientist '
          'speak plainly learns about science entirely from headlines.',
          'The difficulty is that the chain from a study to a reader has '
          'five links and the scientist controls one of them. A university '
          'summary is normally careful, and says how many people took '
          'part and that the study suggests rather than proves. The '
          'journalist shortens it, and a different person writes the '
          'headline in eight words, often without reading the study. The '
          'word that reaches the reader is proves, and no requirement '
          'placed on the researcher would have prevented it.',
          'My own view is therefore that the duty should be shared and '
          'should be specific. Scientists should be required to approve a '
          'plain summary of their own work, which most now do. '
          'Journalists should be required to state the number of '
          'participants in the first sentence, where a late-night editor '
          'cannot cut it for space.',
          'In conclusion, the public does need science explained to it, '
          'but a requirement that stops at the laboratory door will not '
          'achieve that, because the damage is almost always done '
          'further down the line.'],
         notes=[
          'Structure 1: one point of view, developed. The essay agrees '
          'and then relocates the obligation, which gives the body '
          'paragraphs real work and avoids the restated agreement that '
          'sinks this structure.',
          'The middle paragraph is a mechanism, not an opinion: five '
          'links, and the scientist controls one. An essay that can '
          'describe how something actually happens is arguing from a '
          'stronger position than one listing advantages.',
          'The proposals are checkable: approve a plain summary, put the '
          'number of participants in the first sentence. A proposal '
          'somebody could be held to is worth more than a call for '
          'better communication.'],
         criterion=[('Agreeing and then relocating the obligation',
                     'Task Response'),
                    ('A mechanism rather than a list of advantages',
                     'Task Response'),
                    ('Proposals specific enough to be checked',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Reporting and attributing claims',
    explain=('A reported claim needs a verb that says how strong it is '
             'and a phrase that says whose claim it is.'),
    examples=['The study suggests that a small amount may reduce the '
              'risk.',
              'The press office stated that eleven people took part.',
              'According to the researchers, the result has not been '
              'repeated.',
              'The headline said what the study did not.'],
    task='Rewrite each flat statement as an attributed claim.',
    items=[('Chocolate protects the heart.',
            'A small study suggests that dark chocolate may reduce the '
            'risk of heart disease.'),
           ('The study was tiny.',
            'According to the article, eleven people took part in the '
            'study.'),
           ('The newspaper exaggerated.',
            'The headline stated that the effect was proved, whereas the '
            'study claimed only that it was suggested.'),
           ('Nobody repeated it.',
            'The journalist reports that the study has not been repeated '
            'in the years since.'),
           ('Press officers are careful.',
            'The speaker argued that university summaries are generally '
            'careful about numbers and wording.')]),
   vocab=[('result', 'what a study found'),
          ('press office', 'the part of an institution that talks to the '
           'media'),
          ('exaggerate', 'to make something sound bigger than it is'),
          ('overstated', 'claimed more strongly than the evidence '
           'allows'),
          ('journal', 'a publication in which research appears'),
          ('reviewer', 'a scientist who checks another’s work before '
           'publication'),
          ('embargo', 'a date before which a story may not be printed'),
          ('preprint', 'a study published before it has been '
           'reviewed')],
   expr=[('the headline said what the study did not',
          'the sentence this cycle turns on'),
         ('how many people were in the study',
          'the one question worth asking about any finding'),
         ('a result that did not come back is not a story',
          'explains what the public never reads'),
         ('the scientists are reading that headline on the same morning '
          'as you', 'locates the blame accurately')],
   trans=['firstly', 'secondly', 'above all', 'in practice'],
  ),

  dict(
   sub='How an experiment is run',
   step=3,
   read=[
    dict(heading='Two groups, a coin toss and one measurement',
         kind='Process article',
         task='Flow-chart completion and matching information',
         band='gt_work', qtype='Questions 33-38',
         figure=_TRI,
         paras=[
          'The diagram shows how a trial of a new treatment is designed '
          'and run. Seven stages are grouped into three phases, and the '
          'order matters more than any single stage: most ways of getting '
          'a wrong answer involve doing these things out of order.',
          'The question comes first and is written down before anything '
          'else happens. It must name one outcome to be measured. A trial '
          'that measures fifteen outcomes and reports the one that came '
          'out well has discovered nothing, because with fifteen '
          'measurements one is likely to look good by chance.',
          'Volunteers are then recruited and checked against the rules '
          'written at the first stage. This is also the point at which the '
          'size of the trial is fixed, and a trial too small to detect '
          'the effect it is looking for is a waste of the volunteers’ '
          'time whatever its result.',
          'The two groups are then formed by chance, in principle by a '
          'coin toss. Neither the volunteer nor the researcher chooses, '
          'because any human choice, however honest, puts the healthier '
          'people in one group. One group receives the treatment and the '
          'other a dummy pill that looks identical.',
          'Wherever possible neither side knows which is which, a '
          'condition described as blind. The outcome named at the start '
          'is then measured in both groups, and only then are the two '
          'groups compared. Finally the result is written up and sent to '
          'a journal, where other scientists review it before it '
          'appears.',
          'The write-up is the stage most often skipped, and it is '
          'skipped selectively. A trial that found nothing is less likely '
          'to be submitted and less likely to be accepted, with the '
          'result that the published record contains more successes than '
          'the research actually produced.'],
         items=[
          ('Which paragraph explains why a trial must name one outcome in '
           'advance?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'With fifteen measurements one looks good by chance.'),
          ('Which paragraph explains why chance rather than choice forms '
           'the groups?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'Any human choice puts the healthier people in one group.'),
          ('Which paragraph explains why the published record is '
           'misleading?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 3,
           'Trials that found nothing are skipped selectively.'),
          ('The size of the trial is fixed at the ____________ stage.',
           None, 'recruitment',
           'Paragraph 3, when volunteers are checked against the '
           'rules.'),
          ('The group that does not receive the treatment is given a '
           '____________ pill.', None, 'dummy',
           'Paragraph 4, which looks identical.'),
          ('A trial in which neither side knows which group is which is '
           'described as ____________.', None, 'blind',
           'Paragraph 5, wherever that is possible.')])],
   listen=[
    dict(heading='A researcher on designing a trial', part='Part 4',
         task='A lecture on trial design', band='l4',
         qtype='Questions 39-44',
         figure=_TRI,
         script=[
          ('Researcher', 'Seven boxes, three phases, and the whole thing '
           'is about one idea: you decide what would count as an answer '
           'before you are allowed to look.'),
          ('Researcher', 'Box one, the question. One question, one '
           'outcome, written down and lodged before a single volunteer is '
           'recruited. If you measure fifteen things and tell me about '
           'the one that worked, you have told me nothing, because with '
           'fifteen measurements one of them comes out well by '
           'chance.'),
          ('Researcher', 'Box two, recruitment, and this is where the '
           'size is fixed. Too small and you cannot detect the effect you '
           'are hunting, and then your trial is a waste of everybody’s '
           'time whichever way the numbers fall. That calculation is done '
           'before, not after.'),
          ('Researcher', 'Box three, the two groups, and this is the box '
           'people argue with me about. A coin toss. Not my judgement, '
           'not the volunteer’s preference, not alternate Tuesdays. The '
           'reason is not that I distrust doctors. It is that any human '
           'choice, made with the best will in the world, quietly puts '
           'the healthier people in the treatment group, and then the '
           'treatment looks wonderful.'),
          ('Researcher', 'Box four, treatment against a dummy pill that '
           'looks and tastes identical, and ideally nobody knows which is '
           'which. We call that blind. Box five, measure the one outcome '
           'you named in box one. Box six, compare, and not before.'),
          ('Researcher', 'Box seven, write it up and send it to a '
           'journal. And here is the thing I want you to remember, '
           'because it is the failure that matters most. Box seven is '
           'skipped, and it is skipped selectively. A trial that found '
           'nothing is less likely to be written up, and less likely to '
           'be accepted when it is.'),
          ('Researcher', 'Which means the literature you read is not the '
           'research that was done. It is the flattering half of it, and '
           'nobody involved had to do anything dishonest to produce that '
           'result.')],
         items=[
          ('The outcome must be written down and lodged before a single '
           '____________ is recruited.', None, 'volunteer',
           'Box one, where the single question is written down.'),
          ('With fifteen measurements, he says, one comes out well by '
           '____________.', None, 'chance',
           'Which is why one outcome is named in advance.'),
          ('The size of the trial is fixed at', ['the question',
            'recruitment', 'measurement', 'write-up'], 1,
           'Box two, and the calculation is done before.'),
          ('He says any human choice quietly puts the ____________ people '
           'in the treatment group.', None, 'healthier',
           'Which is why a coin toss decides.'),
          ('A trial in which nobody knows which group is which is called '
           '____________.', None, 'blind',
           'Box four, with an identical dummy pill.'),
          ('The published literature, he says, is the ____________ half '
           'of the research that was done.', None, 'flattering',
           'Because write-up is skipped selectively.')])],
   speak=dict(
    part='Part 3', focus='Testing whether something works',
    intro=('Four or five sentences. Describe the method, not only the '
           'conclusion.'),
    qs=['How can we tell whether a medicine works?',
        'Why are some medical studies more trusted than others?',
        'Should people take part in medical trials?',
        'Can everything be tested this way?'],
    shape=[('answer', 'By comparing two groups chosen by chance rather '
            'than by anybody’s judgement.'),
           ('support', 'One group gets the treatment and the other gets '
            'an identical dummy pill.'),
           ('follow-up', 'And ideally neither the patient nor the doctor '
            'knows which.'),
           ('support', 'The chance part is what people find hardest to '
            'accept.'),
           ('follow-up', 'But any human choice puts the healthier '
            'patients in one group without meaning to, and then the '
            'treatment looks better than it is.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='How a controlled trial is designed and run',
         prompt=('The diagram below shows how a controlled trial of a new '
                 'treatment is designed and run. Summarise the '
                 'information by selecting and reporting the main '
                 'features. Write at least 150 words.'),
         figure=_TRI,
         model=[
          'The diagram shows the seven stages of a controlled trial, '
          'grouped into three phases: two stages of preparation before '
          'the trial begins, three while it is running, and two after it '
          'has finished. Overall, the sequence is designed so that every '
          'decision about what would count as an answer is taken before '
          'any result can be seen.',
          'In the first phase a single question is written down, naming '
          'the one outcome to be measured, after which volunteers are '
          'recruited and checked against the rules already set.',
          'The trial itself then begins. The volunteers are divided into '
          'two groups by chance, by what the diagram describes as a coin '
          'toss. One group is given the treatment and the other a dummy '
          'pill, and the outcome named at the start is then measured in '
          'both.',
          'Only in the final phase are the two groups compared with one '
          'another, after which the result is written up and submitted to '
          'a journal for review. The comparison therefore comes after '
          'the measurement rather than alongside it.'],
         notes=[
          'The Overall statement says what the sequence is for, not just '
          'that there are seven stages. On a process diagram with named '
          'phases, the examiner is looking for the point of the '
          'grouping.',
          'The order is reported where it carries meaning: measurement '
          'before comparison, rules before recruitment. "Only in the '
          'final phase" and "after which" do that work in two words.',
          'The passive is used throughout and the agent is left out — is '
          'written, are recruited, are divided, is measured — which is '
          'standard for a method and keeps the focus on the stages.'],
         criterion=[('An Overall statement giving the point of the '
                     'phases', 'Task Achievement'),
                    ('Order reported where it carries meaning',
                     'Task Achievement'),
                    ('Agentless passive throughout',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Passive and purpose clauses in a method',
    explain=('A method is written in the agentless passive, and each '
             'step that exists for a reason takes a purpose clause.'),
    examples=['Participants are allocated at random so that the groups '
              'are comparable.',
              'A dummy pill is used in order to keep the volunteers '
              'blind.',
              'The outcome is named in advance to prevent fifteen '
              'measurements being reported as one.',
              'The groups are compared only after the measurement has '
              'been taken.'],
    task='Join each pair with a passive and a purpose clause.',
    items=[('A coin toss forms the groups. Human choice would bias '
            'them.',
            'The groups are formed by chance so that no human choice can '
            'put the healthier people in one of them.'),
           ('They use a dummy pill. The volunteers must not know.',
            'A dummy pill is given to the second group in order that the '
            'volunteers should not know which they have received.'),
           ('They name one outcome. They might otherwise report the best '
            'of many.',
            'One outcome is named in advance so that the best of several '
            'measurements cannot be reported as the finding.'),
           ('They fix the size first. The trial must be able to detect '
            'the effect.',
            'The size of the trial is calculated beforehand in order that '
            'the effect being sought can be detected.'),
           ('They compare last. Measurement must come first.',
            'The two groups are compared only once the outcome has been '
            'measured in both of them.')]),
   vocab=[('coin toss', 'a decision made purely by chance'),
          ('randomise', 'to assign by chance rather than by choice'),
          ('blind', 'arranged so that participants do not know which '
           'group they are in'),
          ('dummy pill', 'a pill with no active ingredient'),
          ('measured outcome', 'the one result a trial set out to '
           'record'),
          ('endpoint', 'the point at which the outcome is measured'),
          ('volunteer', 'a person who agrees to take part'),
          ('subject', 'a participant in a study')],
   expr=[('participants are allocated at random so that',
          'the standard sentence of a method'),
         ('neither the volunteer nor the researcher chooses',
          'states what randomisation rules out'),
         ('the one outcome you named in box one',
          'ties measurement back to the question'),
         ('the literature is the flattering half of the research',
          'the sentence worth remembering from this cycle')],
   trans=['first', 'once this is done', 'at that point', 'finally'],
  ),

  dict(
   sub='Why findings fail to repeat',
   step=3,
   read=[
    dict(heading='The published result that would not come back',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'In 2011 a group of psychologists did something that sounds '
          'unremarkable and turned out to be uncomfortable. They took a '
          'hundred published findings from their own field and ran each '
          'study again as closely as the original description allowed. '
          'Rather under forty of the hundred produced the same result the '
          'second time, and the figure was published by the field about '
          'itself rather than by a critic from outside it.',
          'The first explanation offered was dishonesty, and it is the '
          'weakest. Deliberate invention of data is rare, is usually '
          'detected in the end, and cannot account for a figure anywhere '
          'near this size. Something that happens routinely and '
          'innocently is needed to explain a failure rate of three '
          'results in five, and three such explanations are now well '
          'established.',
          'The main explanation is the size of the studies. A study with '
          'twenty participants will find an effect that is not there '
          'reasonably often, and will miss one that is there more often '
          'still. Small studies do not produce slightly less reliable '
          'answers; they produce answers that are substantially a matter '
          'of luck, and much published psychology was done on twenty to '
          'forty people, for the plain reason that participants are '
          'expensive and a doctoral deadline is fixed.',
          'The second explanation is what happens to results that are '
          'not interesting. A study that finds nothing is harder to '
          'publish, and after two rejections most researchers move on to '
          'the next project. The studies that found nothing are therefore '
          'not in the record, and a reader counting published successes '
          'is counting a filtered sample without knowing it. Nobody has '
          'suppressed anything at any point in that sequence.',
          'The third explanation is the most innocent of all and probably '
          'accounts for the largest share. A researcher measures several '
          'things, as any careful researcher does, and reports the '
          'measurement that reached significance. No deception is '
          'involved at any stage, and the published figure is still '
          'likely to be too high, because the best of six measurements is '
          'not a typical measurement.',
          'What followed was more encouraging than the finding itself. '
          'Journals began asking researchers to lodge their question and '
          'their chosen measurement in advance, where it can be checked '
          'afterwards, and several began accepting studies on the '
          'strength of the plan rather than the result. Where that has '
          'been done, the rate at which findings come back a second time '
          'rises sharply, which is evidence that the diagnosis was '
          'correct.',
          'The episode is a poor argument for distrusting science and a '
          'good argument for distrusting single studies, including the '
          'famous ones, until somebody has run them again. A field that '
          'tests a hundred of its own published findings, publishes the '
          'embarrassing total and then changes its procedures is doing '
          'something that very few human institutions do at all, and the '
          'comparison is not flattering to most of them.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['The hundred studies', 'Why dishonesty cannot explain it',
            'The size of the studies', 'What was done afterwards'], 1,
           'Invention is rare and cannot account for the figure.'),
          ('Choose the best heading for paragraph 5.',
           ['Studies that found nothing',
            'The most innocent explanation', 'Lodging the question',
            'Trusting science'], 1,
           'Reporting the measurement that reached significance.'),
          ('Choose the best heading for paragraph 6.',
           ['The third explanation', 'What the journals changed',
            'Why small studies fail', 'A filtered record'], 1,
           'Lodging the question in advance, and the rate rising.'),
          (
           'The writer believes the episode shows that science should '
           'be distrusted.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says it is a poor argument for that.',
           {0: 'Yes would need distrust; the final paragraph calls '
               'that a poor conclusion.', 2: 'Not Given is wrong because the writer says what the '
               'episode shows.'}),
          (
           'The writer believes dishonesty explains most of the '
           'failures.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 calls that explanation the weakest.',
           {0: 'Yes would need dishonesty to dominate; paragraph 2 '
               'calls it the weakest explanation.', 2: 'Not Given is wrong because the explanations are '
               'ranked.'}),
          ('Of the hundred findings, rather under ____________ produced '
           'the same result again.', None, 'forty',
           'Paragraph 1, when each study was run a second time.'),
          ('Much published psychology was done on ____________ to forty '
           'people.', None, 'twenty',
           'Paragraph 3, where answers are substantially a matter of '
           'luck.'),
          ('Journals now ask researchers to lodge their question and '
           'their chosen ____________ in advance.', None, 'measurement',
           'Paragraph 6, where it can be checked afterwards.')])],
   listen=[
    dict(heading='A lecture on results that do not come back',
         part='Part 4', task='A lecture on replication', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'A hundred published findings in psychology, each '
           'one run again as closely as the published description '
           'allowed. Rather under forty came back. I want to spend this '
           'hour on why, because the obvious answer is the wrong '
           'one.'),
          ('Lecturer', 'The obvious answer is cheating. Put it aside. '
           'Fabrication happens, it is usually caught eventually, and '
           'there is nowhere near enough of it to produce a failure rate '
           'of three in five. We need something that happens every day '
           'and that nobody feels guilty about.'),
          ('Lecturer', 'Explanation one: size. Twenty participants. A '
           'study that small finds effects that are not there fairly '
           'often and misses effects that are there more often than that. '
           'It is not a slightly weaker study. Its answer is substantially '
           'luck, and twenty to forty people was normal in this '
           'literature for decades.'),
          ('Lecturer', 'Explanation two: what happens to a boring '
           'result. You find nothing. You submit it. It is rejected, '
           'twice, and you have a career and a deadline, so you move on. '
           'Nobody suppressed anything. The record simply does not contain '
           'those studies, and when you count published successes you are '
           'counting a filtered sample.'),
          ('Lecturer', 'Explanation three is the one I find most '
           'interesting, and it is completely innocent. You measure six '
           'things, because any careful researcher measures several, and '
           'you write up the one that reached significance. No deception '
           'anywhere. And the number you publish is still too high, '
           'because the best of six measurements is not a typical '
           'measurement.'),
          ('Lecturer', 'Now the encouraging part. Journals began asking '
           'for the question and the chosen measurement to be lodged '
           'before the study runs, where anybody can check it afterwards. '
           'Where that happens, the rate at which findings come back '
           'rises sharply, which tells us the diagnosis was right.'),
          ('Lecturer', 'So my conclusion is narrow and I want you to '
           'hold it precisely. This is not a reason to distrust science. '
           'It is a reason to distrust any single study, including a '
           'famous one, until somebody has run it again.')],
         items=[
          ('Of a hundred published findings, rather under ____________ '
           'came back.', None, 'forty',
           'When each was run again as closely as possible.'),
          ('He sets aside cheating because there is not enough of it to '
           'produce a failure rate of three in', ['two', 'four', 'five',
            'ten'], 2,
           'And it is usually caught eventually.'),
          ('A study of twenty people, he says, gives an answer that is '
           'substantially ____________.', None, 'luck',
           'Rather than a slightly weaker answer.'),
          ('A researcher whose null result is rejected twice has a career '
           'and a ____________.', None, 'deadline',
           'So the studies are simply not in the record.'),
          ('In the innocent explanation, a researcher measures '
           '____________ things and writes up the one that reached '
           'significance.', None, 'six',
           'With no deception at any stage.'),
          ('His conclusion is a reason to distrust any single '
           '____________.', None, 'study',
           'Including a famous one, rather than science itself.')])],
   speak=dict(
    part='Part 3', focus='Trusting a single study',
    intro=('Four or five sentences. Try once to explain why something '
           'innocent produces a bad result.'),
    qs=['Should we believe a single scientific study?',
        'Why do some published findings turn out to be wrong?',
        'Does this mean science cannot be trusted?',
        'What should newspapers do differently?'],
    shape=[('answer', 'No, and not because anybody is cheating.'),
           ('support', 'Most of the problem is that studies are too '
            'small.'),
           ('follow-up', 'A study of twenty people finds things that are '
            'not there surprisingly often.'),
           ('support', 'And the studies that found nothing never get '
            'published.'),
           ('follow-up', 'So when you count the published successes you '
            'are counting a filtered list without knowing it.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should journals publish studies that found '
                 'nothing?',
         prompt=('Should scientific journals be required to publish '
                 'studies that found nothing? Brainstorm ten ideas, '
                 'apply the six tests, and write the plan. Twelve '
                 'minutes.'),
         plan=('Journals should be required to publish studies that '
               'found nothing, because the record is not a sample of the '
               'research that was done but a filtered one, and no '
               'individual researcher has any reason to correct that',
               [('A record of successes misleads even when every study '
                 'in it is sound',
                 ['a reader counting published findings is counting a '
                  'filtered sample',
                  'later researchers repeat work that has already failed '
                  'quietly']),
                ('No individual has a reason to fix it',
                 ['a null result rejected twice costs more to pursue '
                  'than it earns',
                  'journals compete for interesting findings, so the '
                  'incentive runs the other way'])]),
         notes=[
          'The thesis gives the reason in the same sentence as the '
          'position, and the reason is structural rather than moral: '
          'nobody is behaving badly. That is a harder argument to '
          'dismiss.',
          'The second heading answers the obvious objection — if this is '
          'so bad, why has nobody fixed it? — which is what turns a '
          'two-paragraph plan into an argument.',
          'Each support is a fact from this unit, so the essay can be '
          'written without inventing evidence. That is the whole purpose '
          'of planning from the reading you have just done.'],
         criterion=[('A thesis whose reason is structural, not moral',
                     'Task Response'),
                    ('A heading that answers the obvious objection',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Probability and expectation in plain terms',
    explain=('Statements about chance are clearer with a plain frequency '
             'than with a technical term.'),
    examples=['A study this small will find an effect that is not there '
              'fairly often.',
              'With six measurements, one is likely to look good by '
              'chance.',
              'A literature of successes is what you would expect even if '
              'nothing worked.',
              'Rather under forty of the hundred came back a second '
              'time.'],
    task='Rewrite each claim as a plain statement about frequency.',
    items=[('The result was not statistically significant.',
            'A difference this small would appear fairly often even if the '
            'treatment did nothing.'),
           ('The study was underpowered.',
            'The study was too small to detect the effect it was looking '
            'for, so it would have missed it more often than not.'),
           ('There is publication bias.',
            'Studies that found nothing are less often published, so the '
            'record contains more successes than the research '
            'produced.'),
           ('They engaged in selective reporting.',
            'Six things were measured and the one that came out best was '
            'the one written up.'),
           ('Replication rates improved.',
            'Where the question is lodged in advance, findings come back '
            'a second time much more often.')]),
   vocab=[('repeat study', 'a study that runs an earlier one again'),
          ('did not repeat', 'failed to produce the same result a second '
           'time'),
          ('significance', 'the test of whether a result is more than '
           'chance'),
          ('chance', 'luck rather than cause'),
          ('fluke', 'a result that happened by luck'),
          ('too few people', 'a sample too small to answer the '
           'question'),
          ('write-up', 'the written account of a study'),
          ('funding body', 'an organisation that pays for research')],
   expr=[('a literature of successes is what you would expect even if',
          'the sentence this cycle is built on'),
         ('the best of six measurements is not a typical measurement',
          'explains the innocent failure'),
         ('nobody suppressed anything',
          'rules out the explanation people reach for first'),
         ('a reason to distrust any single study',
          'states the narrow conclusion')],
   trans=['in consequence', 'therefore', 'as a result', 'even so'],
  ),

  dict(
   sub='What a failed repeat proves',
   step=4,
   read=[
    dict(heading='Two studies, two results, one question',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'A study finds an effect. A second study, run carefully, does '
          'not. The natural conclusion is that the first study was wrong, '
          'and that conclusion is reached far too quickly. A failure to '
          'detect something is not the same as a demonstration that it is '
          'absent, and the difference is where most arguments about '
          'science go astray.',
          'Consider the simplest case. The first study had forty '
          'participants and the second had thirty. If the effect is '
          'genuine but small, a study of thirty people will miss it more '
          'often than it finds it. The second study has then produced '
          'exactly the result a true effect predicts, and reporting it as '
          'a refutation misstates what happened. The size of the second '
          'study is therefore the first thing to establish about it.',
          'The opposite error is equally common. Defenders of a '
          'contradicted finding say that the repeat was not identical: a '
          'different country, a different season, volunteers recruited in '
          'a different way. This is sometimes true and important, and it '
          'is also the standard move for rescuing any result whatever, '
          'which is precisely why it convinces so few people. A defence '
          'that would have been offered whatever the outcome carries '
          'little weight, however accurate it happens to be.',
          'A usable rule exists and it is not complicated. A single '
          'failure to repeat should move your confidence a little; '
          'several, run by different groups with adequate numbers, should '
          'move it a great deal. What settles the question is not either '
          'study but the pattern across all the attempts, including the '
          'attempts that were never written up, which is the part of the '
          'record nobody can consult.',
          'This is why the recent changes in practice matter more than '
          'any individual argument. If every attempt is lodged before it '
          'runs, the pattern becomes visible, and the question stops '
          'depending on which studies happened to be interesting enough '
          'to publish. The dispute is then about evidence rather than '
          'about who is being unreasonable, and arguments about evidence '
          'can be settled.',
          'There is a cost to this way of proceeding, and it should be '
          'stated plainly. Decisions often cannot wait for a pattern. A '
          'health authority asked to act on a single finding has to weigh '
          'the harm of acting on something that may evaporate against the '
          'harm of waiting five years for certainty that may not '
          'arrive.',
          'What the episode teaches is therefore modest and worth '
          'holding. One study establishes very little, a single '
          'contradiction establishes slightly more than nothing, and a '
          'field that publishes its contradictions is in better health '
          'than one whose findings all agree with one another. Agreement '
          'is not the mark of a reliable literature; it is frequently the '
          'mark of a filtered one.'],
         items=[
          ('Which paragraph explains why a small repeat may miss a real '
           'effect?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'Forty participants and then thirty.'),
          ('Which paragraph describes the standard defence of a '
           'contradicted finding?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'A different country, season or recruitment.'),
          ('Which paragraph admits a cost of waiting for the pattern?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 2,
           'A health authority that cannot wait five years.'),
          (
           'The writer believes a failed repeat proves the first study '
           'was wrong.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 distinguishes failure to detect from absence.',
           {0: 'Yes would need proof; paragraph 1 separates failure to '
               'detect from absence.', 2: 'Not Given is wrong because the inference is examined.'}),
          (
           'The writer believes agreement among findings is a sign of '
           'reliability.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says it is frequently the mark of a '
           'filtered literature.',
           {0: 'Yes would need agreement to reassure; the final '
               'paragraph calls it a warning.', 2: 'Not Given is wrong because the writer interprets '
               'agreement.'}),
          ('What settles the question is the ____________ across all the '
           'attempts.', None, 'pattern',
           'Paragraph 4, including those never written up.'),
          ('If every attempt is lodged before it runs, the pattern '
           'becomes ____________.', None, 'visible',
           'Paragraph 5, so the dispute is about evidence.'),
          ('A health authority must weigh acting on a finding that may '
           '____________ against waiting for certainty.', None,
           'evaporate',
           'Paragraph 6, where decisions cannot wait.')])],
   listen=[
    dict(heading='Two scientists disagree about repeating studies',
         part='Part 4', task='A recorded discussion', band='l4',
         qtype='Questions 67-72',
         script=[
          ('Chair', 'Professor Achterberg works on replication. Dr '
           'Villanueva-Strand had a finding of her own fail to repeat '
           'last year. Each will begin with their own weakest point.'),
          ('Achterberg', 'Mine is that I talk about failures to repeat as '
           'though each one settled something. A single failed repeat is '
           'weak evidence, especially a small one, and I have been more '
           'confident in public than my own arguments allow.'),
          ('Villanueva-Strand', 'And mine is that when my result failed '
           'to come back I immediately said the conditions were '
           'different. The country, the season, the way they recruited. '
           'Some of that was true. All of it was what I would have said '
           'whatever had happened, which is what makes it worthless as a '
           'defence.'),
          ('Chair', 'Then where do the two of you actually disagree?'),
          ('Achterberg', 'On what a scientist should say in the meantime. '
           'She thinks a disputed finding should stay in the textbooks '
           'until the pattern is clear. I think it should come out and go '
           'back in if it survives.'),
          ('Villanueva-Strand', 'Because removing it is also a claim, and '
           'it is a claim made on the same thin evidence you are '
           'criticising me for relying on.'),
          ('Achterberg', 'That is the best version of your argument and I '
           'do not have a complete answer to it.'),
          ('Villanueva-Strand', 'May I say what changed my mind about my '
           'own case?'),
          ('Achterberg', 'Please.'),
          ('Villanueva-Strand', 'Three more groups tried it. Two found '
           'nothing and one found half the effect, and none of them was '
           'small. One failure I could argue with. Four attempts pointing '
           'the same way is a pattern, and I withdrew the claim in '
           'March.'),
          ('Achterberg', 'Which is the thing nobody reports. Everybody '
           'wrote about the failed repeat. Not one outlet wrote about the '
           'withdrawal.'),
          ('Villanueva-Strand', 'And there is a practical question we both '
           'avoid. A health authority cannot wait four years for a '
           'pattern. Somebody has to decide on thin evidence, and neither '
           'of us has to.')],
         items=[
          ('The professor admits he has talked as though a single failed '
           'repeat ____________ something.', None, 'settled',
           'Which his own arguments do not allow.'),
          ('The researcher says her defence was what she would have said '
           'whatever had happened, which makes it',
           ['untrue', 'worthless', 'unfair', 'unusual'], 1,
           'As a defence, whatever its individual merits.'),
          ('They disagree about whether a disputed finding should stay in '
           'the ____________ until the pattern is clear.', None,
           'textbooks', 'Or come out and go back in if it survives.'),
          ('Her argument is that removing a finding is also a '
           '____________ made on thin evidence.', None, 'claim',
           'Which he calls the best version of her case.'),
          ('She withdrew her claim after ____________ more groups had '
           'tried it.', None, 'three',
           'Two finding nothing and one finding half the effect.'),
          ('Not one outlet reported the ____________.', None,
           'withdrawal',
           'Although everybody wrote about the failed repeat.')])],
   speak=dict(
    part='Part 3', focus='How science corrects itself',
    intro=('Five sentences. Try once to say what a piece of evidence '
           'does not establish.'),
    qs=['Does science correct its own mistakes?',
        'Should disputed findings be removed from textbooks?',
        'Who should decide when the evidence is strong enough?',
        'Is it a problem that corrections are not reported?'],
    shape=[('answer', 'Slowly, and only when somebody is paid to '
            'check.'),
           ('support', 'A single failed repeat does not establish very '
            'much, especially a small one.'),
           ('follow-up', 'A failure to detect something is not proof '
            'that it is absent.'),
           ('support', 'What settles it is the pattern across several '
            'attempts.'),
           ('follow-up', 'And the correction is never reported, so the '
            'public hears the exciting half of the story twice and the '
            'ending not at all.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Does science need an outside check?',
         prompt=('Some people say that science corrects its own mistakes '
                 'and needs no outside check. To what extent do you '
                 'agree? Write at least 250 words.'),
         model=[
          'Science does correct itself, and it corrects itself only where '
          'somebody has been paid to do the checking. My position is '
          'therefore that the claim is true in principle and incomplete '
          'in practice, and that what is needed is not an outside '
          'authority but a reliable record.',
          'The case for self-correction is genuine and should not be '
          'dismissed. When a hundred published findings in psychology '
          'were tested again, rather under forty came back, and the field '
          'published that total about itself. Journals then began '
          'requiring researchers to lodge their question before the study '
          'ran, and the rate at which findings survive a second attempt '
          'rose. Very few institutions investigate themselves and then '
          'change their procedures.',
          'The objection is that none of this happened on its own. It '
          'happened because a group of people was funded to run a hundred '
          'studies again, which nobody’s career required. Left alone, '
          'the system rewards the first interesting finding and ignores '
          'the attempt that failed, and the researcher who finds nothing '
          'has every reason to move on after two rejections.',
          'There is also a gap that self-correction does not touch. A '
          'correction is almost never reported. A failed repeat is a '
          'story, a withdrawn claim is not, and the public is left '
          'holding the exciting half of an argument whose ending it never '
          'hears.',
          'In conclusion, I do not think an outside body judging '
          'scientific truth would help, since it would face the same '
          'evidence with less expertise. What would help is narrower: '
          'require every attempt to be registered before it runs, and the '
          'record then corrects itself without anybody having to be '
          'trusted.'],
         notes=[
          'Structure 9: a position, an objection, a rebuttal. The '
          'position concedes almost everything to the other side and then '
          'identifies the one thing it leaves out, which is the strongest '
          'use of this structure.',
          'The rebuttal rejects the proposal implied by the question — an '
          'outside authority — and substitutes a narrower one. Arguing '
          'that the right fix is smaller than the one offered is rarer '
          'and more convincing than arguing for more.',
          'The paragraph about unreported corrections is the essay’s own '
          'contribution rather than a point from the prompt. One idea the '
          'question did not ask for lifts a Task 2 answer at this '
          'band.'],
         model65=[
                  'Some people say science corrects its own mistakes '
                  'and needs no outside check. I agree that it '
                  'corrects itself, but I think it needs help to do '
                  'so.',
                  'The self-correcting argument has real support. '
                  'Findings are published so that others can test '
                  'them, and when large studies repeated famous '
                  'experiments, many failed to produce the original '
                  'result. That discovery came from within science, '
                  'not from outside it.',
                  'But the correction was slow and did not happen '
                  'automatically. The incentives work against it: '
                  'journals prefer new findings to repeats, and '
                  'careers are built on publication. Studies that fail '
                  'to find an effect are harder to publish, so the '
                  'published literature agrees more than the evidence '
                  'does.',
                  'I think science does correct itself, but only when '
                  'somebody is paid to do the checking. So I would '
                  'fund replication directly and require study plans '
                  'to be registered in advance. These are outside '
                  'checks in the sense that they are not left to '
                  'individual scientists, but they are part of science '
                  'rather than imposed on it.',
                  ],
         gap65=[
                'It distinguishes failure to detect an effect from the '
                'absence of one, which is the inference most reporting '
                'gets wrong.',
                'It explains why a literature that agrees should make '
                'a reader more suspicious, not less.',
                'It matches each proposed reform to the specific '
                'failure it repairs.',
                ],
         criterion=[('A position that concedes before objecting',
                     'Task Response'),
                    ('A rebuttal that substitutes a narrower fix',
                     'Task Response'),
                    ('One idea the prompt did not supply',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Negative evidence and what it licenses',
    explain=('A sentence about evidence that was not found has to say '
             'what that does and does not establish.'),
    examples=['A failure to detect is not a finding of absence.',
              'The second study did not find the effect, which is what a '
              'small study would do in either case.',
              'A single failed repeat should move your confidence a '
              'little.',
              'What settles the question is the pattern across all the '
              'attempts.'],
    task='Rewrite each overstatement so that it claims only what the '
         'evidence allows.',
    items=[('The second study proved there was no effect.',
            'The second study did not detect the effect, which a study of '
            'that size would often fail to do even if it were real.'),
           ('The first study was wrong.',
            'A single failure to repeat weakens the first finding without '
            'establishing that it was mistaken.'),
           ('The conditions were different, so the repeat does not '
            'count.',
            'The conditions did differ, although this is also what would '
            'be said whatever the outcome had been.'),
           ('Nobody believes it any more.',
            'Four attempts have now pointed the same way, and the original '
            'claim was withdrawn in March.'),
           ('Science fixed the problem.',
            'The procedures changed because a group was funded to test a '
            'hundred findings, which no individual career required.')]),
   vocab=[('no difference', 'a result showing nothing between the '
           'groups'),
          ('re-run', 'to carry out a study again'),
          ('honest mistake', 'an error made without intent'),
          ('self-correcting', 'able to find and fix its own errors'),
          ('outside check', 'oversight by somebody not involved'),
          ('peer review', 'examination by other scientists before '
           'publication'),
          ('career pressure', 'the pressure to publish in order to '
           'advance'),
          ('withdrawal', 'the taking back of a published claim')],
   expr=[('a failure to detect is not a finding of absence',
          'the sentence this cycle is built on'),
         ('what I would have said whatever had happened',
          'why a defence can be worthless though true'),
         ('four attempts pointing the same way is a pattern',
          'states what does settle a question'),
         ('somebody has to decide on thin evidence',
          'the practical problem both sides avoid')],
   trans=['admittedly', 'nevertheless', 'on balance', 'in short'],
  ),
 ],
 technique=dict(
  title='Not Given: you cannot scan for an absence',
  body=('Every other question type in Reading is answered by finding '
        'something. Not Given is answered by failing to find something, '
        'and the two require opposite behaviour, which is why candidates '
        'who are good at the rest of the paper still lose marks here. '
        'You cannot scan for an absence: there is no word to look for, '
        'because the word is not there. What you can do is this. First, '
        'read the statement and decide exactly what would have to appear '
        'in the passage for it to be True — a comparison, a cause, a '
        'number, an opinion held by a named person. Second, find the part '
        'of the passage that is about the same topic, and read it '
        'properly rather than scanning it. Third, ask the question in '
        'this form: does the passage say the opposite, or does it simply '
        'not say? If it says the opposite, the answer is False or No. If '
        'you have read the right part carefully and the thing you were '
        'looking for is not in it, the answer is Not Given, and the '
        'feeling of not having found anything is the correct feeling '
        'rather than a sign that you have missed it. The commonest way '
        'to lose these marks is to supply the missing step yourself from '
        'general knowledge, which is exactly what the question is '
        'testing.'),
  panel=[('Say what would make it True',
          'A cause? A comparison? A number? Name it before you look.'),
         ('Find the right part and read it',
          'Not Given cannot be scanned for. There is no word to find.'),
         ('Opposite, or silent?',
          'Opposite is False or No. Silent is Not Given.'),
         ('Do not fill the gap yourself',
          'If the passage did not say it, your own knowledge does not '
          'count.')],
  task='Answer the six Yes/No/Not Given items in cycles 4 and 5 and '
       'write, for each one, the sentence that would have made it Yes.',
  qs=['What exactly would have to appear for this to be Yes?',
      'Did you read the relevant part or scan it?',
      'Does the passage say the opposite, or say nothing?',
      'Are you supplying anything from your own knowledge?',
      'Did the empty feeling make you doubt a correct answer?']),
 outlining=dict(
  title='Fill the outline from a published abstract',
  body=('An abstract is an outline that somebody else has already made, '
        'and reading three of them teaches the shape of an argument '
        'faster than any amount of advice. Take the two academic '
        'passages in this unit and write, for each, the four things an '
        'abstract would contain: the question, what was done, what was '
        'found, and what it means. Then do the reverse. Take the Task 2 '
        'question in cycle 5 and fill the same four slots with your own '
        'material: the question you are answering, the position you are '
        'taking, the evidence you will use, and what follows from it. '
        'The slots are the same because the job is the same. An essay is '
        'an argument with its reasoning shown, and the reason planning '
        'takes twelve minutes rather than two is that the third slot — '
        'the evidence — is where most essays are actually decided.'),
  frame=('Journals should be required to publish studies that found '
         'nothing, because the published record is a filtered sample '
         'rather than a complete one',
         [('A record of successes misleads even when every study in it '
           'is sound',
           ['a reader counting published findings is counting a filtered '
            'sample',
            'later researchers repeat work that has already failed '
            'quietly']),
          ('No individual has a reason to fix it',
           ['a null result rejected twice costs more to pursue than it '
            'earns',
            'journals compete for interesting findings, so the incentive '
            'runs the other way'])]),
  task='Write the four abstract slots for both academic passages, then '
       'fill the same four slots for the cycle 5 essay question.',
  qs=['What is the question, in one sentence?',
      'What was done, or what position are you taking?',
      'What was found, or what evidence will you use?',
      'What follows from it?',
      'Which of the four slots took you longest?'],
  answers=['usually the first or second sentence of the passage',
           'the method in a paper; the thesis in an essay',
           'the slot where most essays are won or lost',
           'the consequence, not a restatement of the finding',
           'the third one, for almost everybody']),
 candos=['I can read a programme by column rather than line by line',
         'I can write a formal enquiry with embedded questions',
         'I can describe how a controlled trial is designed and run',
         'I can explain why a published record contains too many '
         'successes',
         'I can say what a failed repeat does and does not establish'],
 tip=('Not Given is the only question type answered by not finding '
      'something. Decide what would have to be there, read the right '
      'part properly, and then trust the empty feeling.'),
)
