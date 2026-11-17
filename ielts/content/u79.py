# -*- coding: utf-8 -*-
"""Foundation 2, Unit 9 - News and Media.

A local newspaper, how a story is checked, where people get their news,
how a cable network reaches a house, and what happens when a correction
is printed. The technique page is the one correction most candidates
need to make to the advice they have been given: scan only when the key
is rare and unique.
"""

_NEWS = dict(kind='bar',
             title='Where four age groups get their news',
             sub='main source named, per cent of each group',
             cats=['18-29', '30-49', '50-64', '65+'],
             series=[('Phone or app', [71.0, 58.0, 34.0, 12.0]),
                     ('Television', [14.0, 26.0, 44.0, 61.0]),
                     ('Radio or print', [15.0, 16.0, 22.0, 27.0])],
             ylab='per cent')

_CABLE = dict(kind='device',
              title='How a cable network reaches a house',
              sub='from the exchange to the socket on the wall',
              parts=[('ex', 0.04, 0.04, 0.30, 0.18, 'Exchange'),
                     ('cab', 0.58, 0.04, 0.30, 0.18, 'Street '
                      'cabinet'),
                     ('drop', 0.58, 0.41, 0.30, 0.18, 'Drop cable'),
                     ('sock', 0.04, 0.41, 0.30, 0.18, 'Wall socket'),
                     ('rt', 0.04, 0.78, 0.30, 0.18, 'Router'),
                     ('dev', 0.58, 0.78, 0.30, 0.18, 'Device '
                      'indoors')],
              flows=[('ex', 'cab', 'fibre'),
                     ('cab', 'drop', 'one house'),
                     ('drop', 'sock', 'into the house'),
                     ('sock', 'rt', 'by cable'),
                     ('rt', 'dev', 'wireless')])

UNIT = dict(
 n=9, vol=8, level='A2-B1', band='4.0-4.5',
 theme='News and Media',
 opener=(
   'This unit is about how news is made, checked, carried and '
   'corrected. You will ring a newspaper about a delivery, read how '
   'one story was verified before it was printed, compare where four '
   'age groups get their news, follow a cable from an exchange to a '
   'socket on a wall, and read about a correction that was printed on '
   'page two. The technique page corrects a piece of advice you have '
   'probably been given: scanning is not a general skill, and it works '
   'only when the key is rare and unique.'),

 cycles=[
  dict(
   sub='A local newspaper',
   step=1,
   read=[
    dict(heading='The Weekly Gazette: subscriptions and delivery',
         kind='Information page', task='Short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('A service page is read for what changes and when',
                ['Deadlines and cut-off times are the commonest '
                 'answers.',
                 'Note anything that is different at the weekend.']),
         paras=[
          'The Gazette is printed on Wednesday and delivered the same '
          'morning in town and on Thursday in the villages. A '
          'subscriber who misses a delivery should ring before noon on '
          'Thursday, because the returns are counted that afternoon and '
          'nothing can be traced afterwards.',
          'A subscription can be paused for up to eight weeks a year. '
          'To pause it, ring or use the website; an email is not '
          'enough, because the delivery lists are printed on Monday and '
          'nobody reads email on Monday. Give your fourteen-digit '
          'subscriber number if you have it.',
          'The digital edition goes online at six on Wednesday morning, '
          'an hour before the paper copies leave the building. Every '
          'subscriber has access to it, and the username is the email '
          'address held on the account.',
          'The archive holds every issue since 1946 and is free to '
          'subscribers.'],
         items=[
          ('The paper is delivered in the villages on '
           '____________.', None, 'Thursday',
           'A day later than in the town itself.'),
          ('A missed delivery must be reported before ____________ '
           'on Thursday.', None, 'noon',
           'Because the returns are counted that afternoon.'),
          ('A subscription can be paused for up to ____________ '
           'weeks a year.', None, 'eight',
           'By telephone or on the website, not by email.'),
          ('The digital edition goes online at ____________ on '
           'Wednesday.', None, 'six',
           'An hour before the paper copies leave.'),
          ('What is the username on an account?', None,
           'the email address',
           'The address held on the account, the page says.')])],
   listen=[
    dict(heading='Reporting a missed delivery', part='Part 1',
         task='A telephone conversation', band='l1',
         qtype='Questions 6-11',
         script=[
          ('Clerk', 'Gazette subscriptions, good morning.'),
          ('Caller', 'My paper did not come this morning. It is the '
           'second Wednesday in a row.'),
          ('Clerk', 'I am sorry. Do you have your subscriber number?'),
          ('Caller', 'It is on the wrapper and the wrapper is what did '
           'not come.'),
          ('Clerk', 'Then your postcode and surname will find it. '
           'Surname?'),
          ('Caller', 'Oyelaran. O for orange.'),
          ('Clerk', 'Found you. Two misses logged, both Wednesdays, and '
           'you are on the town round rather than the village round, so '
           'that is the same delivery person both times. I will put a '
           'note on the round rather than on your account, which is the '
           'thing that actually gets it fixed.'),
          ('Caller', 'Can I have the two papers?'),
          ('Clerk', 'I can credit you two weeks, or post them, but '
           'posting takes until Friday and by Friday a Wednesday paper '
           'is of limited use.'),
          ('Caller', 'The credit, then.'),
          ('Clerk', 'Done. And you can read both issues online now; the '
           'digital edition is free with your subscription and your '
           'username is your email address.'),
          ('Caller', 'I did not know that.'),
          ('Clerk', 'Most people do not. It is on page two every week '
           'and nobody reads page two, which is a lesson for us rather '
           'than for you.')],
         items=[
          ('The caller has missed deliveries on two '
           '____________.', None, 'Wednesdays',
           'The same day two weeks running.'),
          ('The clerk finds the account using the postcode and '
           '____________.', None, 'surname',
           'Because the subscriber number was on the wrapper.'),
          ('The caller is on the ____________ round.', None, 'town',
           'Rather than the village round, so the same person '
           'delivers.'),
          ('The clerk puts a note on the ____________ rather than '
           'the account.', None, 'round',
           'Which is what actually gets the problem fixed.'),
          ('Posting the papers would take until ____________.', None,
           'Friday', 'By which time a Wednesday paper is of little '
           'use.'),
          ('The notice about the digital edition appears on page '
           '____________ every week.', None, 'two',
           'Which the clerk says nobody reads.')])],
   speak=dict(
    part='Part 1', focus='News and newspapers',
    intro='Say what you actually do, not what sounds impressive.',
    qs=['How do you get your news?',
        'Do you read a newspaper?',
        'Is local news important to you?',
        'Do you listen to the radio?'],
    shape=[('answer', 'Almost all of it on my phone, in the morning '
            'and again at night.'),
           ('support', 'I buy a local paper on Wednesdays, mostly for '
            'the things that are not online, like the council '
            'meetings.'),
           ('follow-up', 'I would say I pay more attention to local '
            'news than I did five years ago, because it affects what '
            'I see on the way to work.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Complaining about a delivery',
         prompt='Your newspaper has not been delivered for two weeks. '
                'Write to the newspaper. In your letter: say what has '
                'happened; explain what you have already tried; say '
                'what you would like them to do.',
         instruct='  Write at least 110 words in about 20 minutes.',
         lines=13,
         model=[
          'Dear Sir or Madam,',
          'I subscribe to the Gazette at 14 Mill Lane and my copy has '
          'not arrived on either of the last two Wednesdays.',
          'I rang on the first occasion and a note was made, but the '
          'same thing happened the following week, which suggests the '
          'note did not reach the delivery round. I have also checked '
          'with my neighbours, who are on the same round and have '
          'received theirs.',
          'I would be grateful if you would credit the two missed '
          'issues to my account rather than post them, since a '
          'Wednesday paper arriving on Friday is of little use, and if '
          'you would confirm that the round has been told.',
          'Yours faithfully,',
          'F. Oyelaran'],
         notes=['The address and the two dates come first, because '
                'that is what the reader needs to find the account.',
                'What has already been tried stops the reply '
                'suggesting it again.',
                'The request is specific and gives its reason in half '
                'a line.'],
         criterion=[('Facts and dates first', 'Task Achievement'),
                    ('Previous steps described', 'Task Response'),
                    ('A specific request with a reason', 'Task '
                     'Achievement'),
                    ('Formal register throughout', 'Coherence and '
                     'Cohesion')])],
   gram=dict(
    point='Present perfect for an unfinished situation',
    explain='Use the present perfect with for, since and the last two '
            'weeks when the situation still continues.',
    examples=['My paper has not arrived for two weeks.',
              'I have been a subscriber since 2019.',
              'It has happened twice this month.',
              'Nothing has changed since I rang.'],
    items=[('My paper (not arrive) for two weeks.',
            'My paper has not arrived for two weeks.'),
           ('I (be) a subscriber since 2019.',
            'I have been a subscriber since 2019.'),
           ('It (happen) twice this month.',
            'It has happened twice this month.'),
           ('Nothing (change) since I rang.',
            'Nothing has changed since I rang.'),
           ('I (ring) twice already.',
            'I have rung twice already.')],
    task='Write each sentence in the present perfect.'),
   vocab=[('cable', 'a thick wire carrying power or signals'),
          ('compass', 'an instrument showing direction'),
          ('trapped', 'caught and unable to get out'),
          ('wire', 'a thin thread of metal'),
          ('lifetime', 'the length of a life'),
          ('wednesday', 'the fourth day of the week'),
          ('chips', 'thin pieces; or small electronic parts'),
          ('log', 'to record something; a written record'),
          ('polite', 'showing good manners')],
   expr=[('It is the second week in a row.', 'reporting a repeated '
          'fault'),
         ('That is what actually gets it fixed.',
          'distinguishing a real remedy from a formal one'),
         ('By Friday it is of limited use.',
          'explaining why a remedy does not help'),
         ('Most people do not know that.', 'acknowledging poor '
          'communication')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='How a story is checked',
   step=2,
   read=[
    dict(heading='Before it was printed',
         kind='Short article', task='Matching information',
         band='gt_work', qtype='Questions 12-17',
         paras=[
          'In March a reporter was sent a photograph of a flooded '
          'school hall with a message saying it had been taken that '
          'morning. The paper did not print it for four days, and the '
          'four days are the story. The initial check was the simplest '
          'one: the trees in the background were bare, and nothing is '
          'bare in that town in March.',
          'The second check was the photograph’s own data, which '
          'gave the month as November. That is not conclusive, because '
          'data can be changed and a phone with the wrong date is '
          'common, but combined with the trees it made the picture a '
          'November picture.',
          'The third check settled it. The reporter rang the school and '
          'asked a question with a checkable answer: had the hall floor '
          'been replaced after any flood? It had, in December, and the '
          'photograph showed the old floor. Nobody had to be accused of '
          'anything.',
          'The editor said afterwards that the lesson was about the '
          'kind of question to ask: not "is this true?", which invites '
          'an opinion, but "what would be different if it were?", '
          'which can be looked up.'],
         items=[
          ('How long did the paper wait before printing?',
           ['one day', 'two days', 'four days', 'two weeks'], 2,
           'And the four days of checking are the story.',
           {0: 'One day is far shorter than the wait described.', 1: 'Two days is half the wait paragraph 1 reports.', 3: 'Two weeks is much longer than the four days.'}),
          ('The first check was the bare ____________ in the '
           'background.', None, 'trees',
           'Which do not occur in that town in March.'),
          ('The photograph’s own data gave the month as '
           '____________.', None, 'November',
           'Which the writer says is suggestive but not '
           'conclusive.'),
          (
           'The reporter asked whether the hall ____________ had been '
           'replaced.', None, 'floor',
           'A question with a checkable answer.'),
          ('The floor was replaced in ____________.', None,
           'December', 'And the photograph showed the old floor.'),
          ('The editor preferred the question "what would be '
           '____________ if it were?"', None, 'different',
           'Rather than "is this true?", which invites an '
           'opinion.')])],
   listen=[
    dict(heading='Two students on checking a story', part='Part 3',
         task='A discussion between two students', band='l3',
         qtype='Questions 18-23',
         script=[
          ('Tutor', 'You are presenting on verification. What is your '
           'main point?'),
          ('Dalia', 'That the useful skill is not detecting lies. It is '
           'asking questions that have checkable answers.'),
          ('Hassan', 'Which sounds obvious until you try it. I spent an '
           'hour on a photograph asking myself whether it looked real.'),
          ('Dalia', 'And an hour is a long time to spend on a question '
           'with no answer.'),
          ('Hassan', 'Whereas the reporter in our case study rang the '
           'school and asked whether the floor had been replaced. Four '
           'minutes.'),
          ('Dalia', 'The structure is the same every time. Find '
           'something the picture or the claim implies about the world, '
           'then look that thing up.'),
          ('Hassan', 'I would add that the data on a file is weaker '
           'evidence than people think. It can be changed, and plenty '
           'of phones have the wrong date in them.'),
          ('Dalia', 'Agreed, and the trees were better evidence than '
           'the data, which surprised me.'),
          ('Hassan', 'Because a tree cannot be edited by somebody who '
           'did not think about trees.'),
          ('Tutor', 'That is your best sentence. Make it the one you '
           'say out loud, and put the method in a diagram rather than '
           'in a paragraph.')],
         items=[
          ('Dalia says the useful skill is asking questions with '
           '____________ answers.', None, 'checkable',
           'Rather than trying to detect lies directly.'),
          ('Hassan spent an ____________ asking whether a photograph '
           'looked real.', None, 'hour',
           'A question he says had no answer.'),
          ('The reporter’s telephone call took ____________ '
           'minutes.', None, 'four',
           'And settled what an hour of looking could not.'),
          ('The method is to find what the claim implies about the '
           '____________, then look it up.', None, 'world',
           'Which Dalia says is the same structure every time.'),
          ('Hassan says the ____________ on a file is weaker evidence '
           'than people think.', None, 'data',
           'Because it can be changed and phones are often wrong.'),
          ('Hassan says a tree cannot be ____________ by somebody who '
           'did not think about trees.', None, 'edited',
           'Which the tutor calls his best sentence.')])],
   speak=dict(
    part='Part 2', focus='A news story you remember',
    longturn=[('I am going to talk about a news story I remember well. A large '
               'factory near my town announced that it would close.'),
              ('What happened is that the company told about nine hundred '
               'workers, on a Tuesday morning, that production would move to '
               'another country within eighteen months. The announcement was '
               'made to the workers and to the news on the same day.'),
              ('I heard about it from a friend who sent me a message, and then '
               'I watched it on the regional news that evening. For the next '
               'two weeks it was on the front of the local paper every day.'),
              ('I remember it for two reasons. The first is that I knew people '
               'in it. My uncle had worked there for nineteen years, and so '
               'had most of the men in his street, and the question at every '
               'family meal for a year was what would happen to them. The '
               'second reason is what I learned about reporting. The national '
               'news covered it for two days. The local paper covered it for '
               'two years, including the retraining that did not work and the '
               'shops that closed afterwards, and almost nobody outside the '
               'region read any of that.')],
    intro='One minute, four lines. Choose a story you can describe '
          'concretely.',
    qs=['Describe a news story you remember well.',
        'Say what happened.',
        'Say how you heard about it.',
        'Say why you remember it.'],
    shape=[('answer', 'A flood at a school in my town, about two '
            'years ago.'),
           ('support', 'The hall was under water and the floor had to '
            'be replaced.'),
           ('support', 'I heard about it from a photograph somebody '
            'sent me, which turned out to be from the wrong month.'),
           ('follow-up', 'I remember it because it was the first time '
            'I had been shown something false and believed it for a '
            'whole day.')]),
   write=[
    dict(task='Task 2',
         heading='Is false information online a serious problem?',
         prompt='Some people think false information online is one of '
                'the most serious problems today. Others think it has '
                'always existed and is not worse now. Discuss both '
                'views and give your own opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Not new, but faster, and the answer is a skill rather '
               'than a rule',
               [('The case that it is not new',
                 ['rumour and forged photographs are centuries old',
                  'and every new medium has carried them']),
                ('The case that it is worse',
                 ['speed and reach have changed by orders of '
                  'magnitude',
                  'and a correction never travels as far as the '
                  'claim']),
                ('What actually helps',
                 ['asking what would be different if the claim were '
                  'true',
                  'which is a skill that can be taught in an '
                  'afternoon'])]),
         model=[
          'Whether false information online is a new problem or an old '
          'one in new clothes depends on which part of it you measure.',
          'Those who say it is not new are right about the thing '
          'itself. Rumour is as old as speech, and photographs were '
          'being faked within a decade of being invented. Every new '
          'medium has been accused of destroying public truth, and the '
          'accusation has usually been exaggerated.',
          'What has changed, and changed by a very large factor, is '
          'speed and reach. A false photograph can now be seen by a '
          'million people before anybody who could recognise it as '
          'false has woken up, and corrections do not travel as far as '
          'claims; a paper prints the correction on page two, and page '
          'two is read by almost nobody. That asymmetry is the real '
          'problem, and it is a genuinely modern one.',
          'The response that works is not a rule about what to believe '
          'but a habit of asking a different question. Instead of '
          '"is this true?", which invites an opinion, ask "what would '
          'be different in the world if it were true?" In one case I '
          'read about, that question turned into a four-minute '
          'telephone call to a school about a replaced floor, and it '
          'settled a matter that an hour of staring at the photograph '
          'had not.',
          'That habit can be taught in an afternoon, which is the most '
          'encouraging thing about the problem.'],
         notes=['The essay separates the thing from its speed, which '
                'is what lets both sides be right.',
                'The page-two detail carries the asymmetry argument '
                'better than any adjective.',
                'The conclusion offers something doable rather than a '
                'summary.'],
         criterion=[('Both views given their due', 'Task Response'),
                    ('A distinction that resolves them', 'Task '
                     'Response'),
                    ('A concrete example as evidence', 'Task '
                     'Achievement'),
                    ('Accurate complex structures', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Reporting what somebody said or asked',
    explain='In reported speech the tense usually steps back, and a '
            'question becomes whether or if with normal word order.',
    examples=['He said the trees were bare.',
              'She asked whether the floor had been replaced.',
              'They told us the data said November.',
              'He asked if anybody had rung the school.'],
    items=[('"The trees are bare." (he said)',
            'He said the trees were bare.'),
           ('"Has the floor been replaced?" (she asked)',
            'She asked whether the floor had been replaced.'),
           ('"The data says November." (they told us)',
            'They told us the data said November.'),
           ('"Did anybody ring the school?" (he asked)',
            'He asked if anybody had rung the school.'),
           ('"I will check it today." (she said)',
            'She said she would check it that day.')],
    task='Write each sentence as reported speech.'),
   vocab=[('sheet', 'a flat piece of paper or fabric'),
          ('react', 'to act in response to something'),
          ('maximum', 'the greatest possible amount'),
          ('reply', 'an answer'),
          ('initial', 'first; at the beginning'),
          ('database', 'an organised store of information'),
          ('lent', 'past tense of lend'),
          ('misfortune', 'bad luck'),
          ('preparation', 'getting ready for something')],
   expr=[('The four days are the story.',
          'saying where the real interest lies'),
         ('That is not conclusive.', 'rating a piece of evidence'),
         ('A question with a checkable answer.',
          'naming the useful kind of question'),
         ('Nobody had to be accused of anything.',
          'noting what a method avoids')],
   trans=['first', 'second', 'then', 'finally']),

  dict(
   sub='Where people get their news',
   step=2,
   read=[
    dict(heading='Four age groups, three sources',
         kind='Short article', task='Matching information',
         band='gt_work', qtype='Questions 24-29',
         skill=('A survey of groups is read one group at a time',
                ['Decide which group the question names before '
                 'reading.',
                 'A figure that moves steadily across the groups is '
                 'usually the one asked about.']),
         paras=[
          'A survey asked four age groups to name their main source of '
          'news. The result that gets quoted is the obvious one: '
          'seventy-one per cent of those aged eighteen to twenty-nine '
          'named a phone or an app, against twelve per cent of those '
          'over sixty-five.',
          'Television moves in the opposite direction, from fourteen '
          'per cent in the youngest group to sixty-one in the oldest. '
          'The two curves cross between the thirty-to-forty-nine group '
          'and the fifty-to-sixty-four group, and the crossing point '
          'has moved about one age band in six years.',
          'Radio and print barely moves, between fifteen and '
          'twenty-seven per cent across all four groups. The '
          'survey’s authors say the category is kept up by radio '
          'rather than by newspapers, a distinction the question did '
          'not allow respondents to make.',
          'Two cautions arise from the wording. Respondents named one '
          'main source, so a person who reads an app and listens to the '
          'radio appears in one column only. And "a phone" describes '
          'the device rather than the publisher: a substantial share of '
          'what is read on a phone is produced by the same newspapers '
          'and broadcasters.'],
         items=[
          ('What share of the youngest group named a phone or app?',
           ['fifty-eight per cent', 'seventy-one per cent', 'thirty-four per cent', 'twelve per cent'],
           1, 'Against twelve per cent of the oldest group.',
           {0: 'Fifty-eight per cent appears in none of the figures.', 2: 'Thirty-four per cent appears in none of the figures.', 3: 'Twelve per cent is the oldest group\u2019s share.'}),
          ('Television reaches ____________ per cent in the oldest '
           'group.', None, 'sixty-one',
           'Up from fourteen in the youngest.'),
          ('The two curves cross between which groups?', None,
           '30-49 and 50-64',
           'And the crossing point has moved one band in six years.'),
          ('Radio and print stays between fifteen and ____________ '
           'per cent.', None, 'twenty-seven',
           'The category that barely moves across the groups.'),
          ('The authors say that category is kept up by '
           '____________.', None, 'radio',
           'Rather than by newspapers, which the question could not '
           'separate.'),
          ('"A phone" describes the device rather than the '
           '____________.', None, 'publisher',
           'Much phone reading comes from the same newspapers.')])],
   listen=[
    dict(heading='A researcher on news habits', part='Part 2',
         task='One speaker describing a survey', band='l2',
         qtype='Questions 30-35',
         script=[
          ('Speaker', 'I have run this survey four times in six years, '
           'and the number everybody quotes is the least interesting '
           'one in it.'),
          ('Speaker', 'Yes, seventy-one per cent of the youngest group '
           'name a phone. That has been true for a while and it '
           'surprises nobody under forty.'),
          ('Speaker', 'The interesting figure is the one that does not '
           'move. Radio and print sits between fifteen and twenty-seven '
           'per cent in every group we have ever asked, and the '
           'predictions I was reading in 2015 said it would be near '
           'zero in the youngest group by now.'),
          ('Speaker', 'When we ask follow-up questions, that figure '
           'turns out to be radio, almost entirely, and it is radio in '
           'a car or a kitchen. It is the only news most people get '
           'while their hands are busy, and nothing has replaced it.'),
          ('Speaker', 'The crossing point between phone and television '
           'has moved one age band in six years, which is slower than '
           'the commentary suggests. People do not abandon a habit at '
           'thirty; they keep it and add to it.'),
          ('Speaker', 'And one warning about our own question. We ask '
           'for one main source, so a person who does three things '
           'appears once. If I designed it again I would allow two, and '
           'I would separate radio from print, which is the change I '
           'most regret not making.')],
         items=[
          ('The survey has been run ____________ times in six '
           'years.', None, 'four',
           'And the most quoted number is the least interesting.'),
          ('The figure that does not ____________ is the interesting '
           'one.', None, 'move',
           'Radio and print, in every group ever asked.'),
          ('Follow-up questions show that figure is almost entirely '
           '____________.', None, 'radio',
           'Heard in a car or a kitchen, the speaker says.'),
          ('It is the news people get while their ____________ are '
           'busy.', None, 'hands',
           'And nothing has replaced it, the speaker says.'),
          ('The crossing point has moved one age ____________ in six '
           'years.', None, 'band',
           'Slower than the commentary suggests.'),
          ('The speaker regrets not separating radio from '
           '____________.', None, 'print',
           'And would allow two answers if designing it again.')])],
   speak=dict(
    part='Part 3', focus='Media habits',
    intro='Make a claim, then qualify it with something you have '
          'noticed.',
    qs=['Why do older and younger people use different media?',
        'Will newspapers disappear?',
        'Is it better to get news from several sources?'],
    shape=[('answer', 'Mostly habit rather than ability, I think.'),
           ('support', 'People keep the habit they formed and add new '
            'ones rather than swapping.'),
           ('support', 'That would explain why radio has not fallen '
            'at all: it is the only news you can have while your '
            'hands are busy.'),
           ('follow-up', 'So I would expect print to shrink slowly '
            'and radio to stay roughly where it is.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Where four age groups get their news',
         figure=_NEWS,
         prompt='The chart shows the main source of news named by four '
                'age groups. Describe the chart and compare the '
                'groups.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The chart shows the main news source named by four age '
          'groups, divided between a phone or app, television, and '
          'radio or print.',
          'The two largest categories move in opposite directions '
          'across the groups. A phone or app falls steadily from '
          'seventy-one per cent among those aged eighteen to '
          'twenty-nine to twelve per cent among those over '
          'sixty-five, while television rises from fourteen per cent '
          'to sixty-one over the same range. The two cross between the '
          'thirty-to-forty-nine group and the fifty-to-sixty-four '
          'group.',
          'Radio or print is almost flat, ranging only from fifteen per '
          'cent in the youngest group to twenty-seven per cent in the '
          'oldest.',
          'Overall, the chart shows an exchange between two categories '
          'rather than a general decline: the third category is almost '
          'unaffected by age.'],
         notes=['The two mirrored categories are described together, '
                'which is shorter and clearer than one at a time.',
                'The crossing point is named, since it is the single '
                'most informative feature.',
                'The closing sentence says what kind of change the '
                'chart shows.'],
         criterion=[('All three categories covered', 'Task '
                     'Achievement'),
                    ('The crossing point identified', 'Task '
                     'Response'),
                    ('Mirrored trends described together', 'Coherence '
                     'and Cohesion'),
                    ('Figures accurate', 'Grammatical Range and '
                     'Accuracy')])],
   gram=dict(
    point='while and whereas for contrasting two trends',
    fix=dict(
     text=('The chart shows that print readership fell steadily, while online '
           'readership was rose. In 2010 the two figures were almost the same, '
           'whereas by 2020 online was three times higher. Whereas print lost '
           'about half of its readers. Television news stayed the same during '
           'all the period, at about 40 per cent.'),
     faults=[('while online readership was rose',
              'while online readership rose',
              ('Rose is already the past form, so was is not needed in front '
               'of it.')),
             ('Whereas print lost about half of its readers',
              'Print, meanwhile, lost about half of its readers',
              ('Whereas joins two halves inside one sentence and cannot open a '
               'sentence of its own.')),
             ('stayed the same during all the period',
              'stayed the same throughout the period',
              ('During all the period is not English. Use throughout the '
               'period, or during the period.'))]),
    explain='Use while and whereas to put two opposite movements in '
            'one sentence.',
    examples=['Phone use falls, while television rises.',
              'Whereas phone use falls, television rises.',
              'Television rises, whereas radio barely moves.',
              'Radio stays flat while the other two cross.'],
    items=[('Phone use falls. Television rises. (while)',
            'Phone use falls, while television rises.'),
           ('Television rises. Radio barely moves. (whereas)',
            'Television rises, whereas radio barely moves.'),
           ('Radio stays flat. The other two cross. (while)',
            'Radio stays flat while the other two cross.'),
           ('The young use phones. The old use television. (whereas)',
            'The young use phones, whereas the old use television.'),
           ('Print was predicted to vanish. It did not. (whereas)',
            'Print was predicted to vanish, whereas in fact it did '
            'not.')],
    task='Join each pair with the word given.'),
   vocab=[('translated', 'changed into another language'),
          ('arise', 'to come about or appear'),
          ('substantial', 'large or considerable'),
          ('dictionary', 'a book of word meanings'),
          ('audiobooks', 'books recorded to be listened to'),
          ('capability', 'the power to do something'),
          ('conveys', 'carries or communicates'),
          ('distinguish', 'to tell two things apart')],
   expr=[('The number everybody quotes is the least interesting.',
          'redirecting attention in a survey'),
         ('The interesting figure is the one that does not move.',
          'valuing stability as a finding'),
         ('People keep a habit and add to it.',
          'describing how habits change'),
         ('That is the change I most regret not making.',
          'admitting a design fault')],
   trans=['however', 'whereas', 'also', 'so']),

  dict(
   sub='How a network reaches a house',
   step=3,
   read=[
    dict(heading='From the exchange to the socket',
         kind='Short factual article',
         task='Diagram labelling and short answer',
         band='acad', qtype='Questions 36-42',
         paras=[
          'The cable that ends in a socket on a wall begins in a '
          'building called an exchange, and almost everything that '
          'governs the connection speed a household gets happens '
          'between those two points. From the exchange a single thick '
          'fibre cable runs to a street cabinet, and the fibre section '
          'is never the part that limits anything: it can carry far '
          'more than the houses behind it can ever use.',
          'The street cabinet is where one cable divides. A typical '
          'cabinet serves about three hundred homes, and each home '
          'gets a drop cable of its own. Where that drop cable is '
          'copper rather than fibre, as it still is for a majority of '
          'households, its length matters a great deal. The signal '
          'weakens with distance. Two houses on the same cabinet can '
          'differ by a factor of three for no reason except that one '
          'is four hundred metres further away.',
          'Inside the house the drop cable ends at a wall socket, and '
          'the router converts the signal into a wireless one. This '
          'last stage is the shortest and causes the most complaints. '
          'A wireless signal is stopped by walls, water and metal, and '
          'the position of a router in a cupboard behind a kitchen has '
          'a worse effect on measured speed than several hundred '
          'metres of copper.',
          'The practical result is that the two cheapest '
          'improvements available to a household are both indoors. '
          'Moving the router out of a cupboard and into the open, and '
          'connecting the one device that matters most with a cable '
          'instead of wirelessly, together recover more speed than any '
          'change of subscription. Engineers report that about a third '
          'of the faults they are called out to are put right by '
          'a box eighty centimetres.'],
         items=[
          ('Where does the cable begin?', None, 'at an exchange',
           'Paragraph 1: a building called an exchange.'),
          ('Which section never limits the speed?',
           ['the drop cable', 'the fibre to the cabinet', 'the wall socket', 'the wireless signal'],
           1, 'Paragraph 1: its capability far exceeds the demand.',
           {0: 'The copper drop cable weakens with distance.', 2: 'The wall socket is where the drop cable ends.', 3: 'The wireless signal is stopped by walls and metal.'}),
          ('A typical cabinet serves about ____________ homes.',
           None, 'three hundred',
           'Paragraph 2, each with its own drop cable.'),
          ('Two houses on one cabinet can differ by a factor of '
           '____________.', None, 'three',
           'Paragraph 2, because of the copper length.'),
          ('In the house the drop cable ends at a wall '
           '____________.', None, 'socket',
           'Paragraph 3, where the router takes over.'),
          ('A wireless signal is stopped by walls, water and '
           '____________.', None, 'metal',
           'Paragraph 3, which is why placement matters.'),
          ('About a ____________ of reported faults are solved by '
           'moving the router.', None, 'third',
           'Paragraph 4: eighty centimetres is often enough.')])],
   listen=[
    dict(heading='An engineer on home networks', part='Part 4',
         task='A talk to trainee engineers', band='l4',
         qtype='Questions 43-48',
         script=[
          ('Speaker', 'You will spend your first year being sent to '
           'houses where nothing is broken, so let me tell you what you '
           'will find.'),
          ('Speaker', 'The fibre from the exchange to the cabinet is '
           'never the problem. Its capability is far beyond what three '
           'hundred houses can use, and I have never once found a fault '
           'in it.'),
          ('Speaker', 'The copper from the cabinet to the house can be '
           'the problem, and the number you want is its length. The '
           'signal weakens with distance in a way you can measure, so '
           'two houses on one cabinet can differ threefold, and the far '
           'one is not imagining it.'),
          ('Speaker', 'But most of your work will be the last ten '
           'metres. Walls, water and metal stop a wireless signal. A '
           'router in a cupboard behind a kitchen is worse than four '
           'hundred metres of copper, and the householder will have '
           'spent a year blaming the subscriber line.'),
          ('Speaker', 'So before you open anything, do two things. Move '
           'the router into the open, and put a cable into whichever '
           'device matters most to them. About a third of the faults we '
           'are notified about end there, and if you start by moving a '
           'box eighty centimetres you will fix more connections than '
           'anybody in the office.'),
          ('Speaker', 'And the last thing: say what you did and why. A '
           'householder who understands the walls will not ring us '
           'again in March.')],
         items=[
          ('The speaker has never found a fault in the '
           '____________.', None, 'fibre',
           'Between the exchange and the street cabinet.'),
          ('For copper, the number that matters is its '
           '____________.', None, 'length',
           'Because the signal weakens measurably with distance.'),
          ('Two houses on one cabinet can differ ____________.',
           None, 'threefold',
           'And the far one is not imagining it.'),
          ('Most of the work is the last ____________ metres.', None,
           'ten', 'Inside the house, where walls matter.'),
          ('About a ____________ of reported faults end with moving '
           'the router.', None, 'third',
           'Which is why the speaker starts there.'),
          ('A householder who understands the ____________ will not '
           'ring again.', None, 'walls',
           'Which is why the speaker explains the work.')])],
   speak=dict(
    part='Part 3', focus='Technology at home',
    intro='Explain a cause, then draw the practical conclusion.',
    qs=['Why do people complain about slow internet at home?',
        'Should companies explain technical things better?',
        'Has being connected changed family life?'],
    shape=[('answer', 'Usually because the problem is indoors and '
            'they are blaming the line.'),
           ('support', 'A router in a cupboard costs more speed than '
            'a few hundred metres of cable.'),
           ('support', 'And nobody tells householders that, so they '
            'change their subscription instead.'),
           ('follow-up', 'So I think an engineer who explains the '
            'walls saves two visits, not one.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='How a cable network reaches a house',
         figure=_CABLE,
         prompt='The diagram shows how a cable network reaches a '
                'house. Describe the system.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The diagram shows the six parts through which a network '
          'signal travels from an exchange to a device inside a house.',
          'The signal begins at the exchange and is carried by fibre to '
          'a street cabinet. At the cabinet a single cable divides '
          'between about three hundred homes, and each home is served '
          'by a drop cable of its own, which may be either copper or '
          'fibre.',
          'The drop cable ends at a socket on the wall inside the '
          'house, and a short cable carries the signal from there to a '
          'router, which converts it into a wireless signal for the '
          'devices used indoors.',
          'The system therefore narrows at the street cabinet, which is '
          'the point at which a shared cable becomes an individual one, '
          'and changes form twice: once from fibre to the drop cable, '
          'and once from a cable to a wireless signal at the router.'],
         notes=['All six labelled parts appear, in the order the '
                'signal travels.',
                'The division at the cabinet is given its number, '
                'which the diagram supplies.',
                'The closing sentence identifies the two changes of '
                'form, which is what the diagram is about.'],
         criterion=[('All six parts in order', 'Task Achievement'),
                    ('The division at the cabinet described',
                     'Task Response'),
                    ('Passive forms used', 'Grammatical Range and '
                     'Accuracy'),
                    ('No speculation added', 'Task Response')])],
   gram=dict(
    point='Describing a sequence: from, to, where, by which',
    explain='Use from and to for the ends of a path, where for a '
            'place, and by which for a means.',
    examples=['The signal travels from the exchange to the house.',
              'The cabinet is where the cable divides.',
              'It is carried by fibre.',
              'The router is the point at which it becomes '
              'wireless.'],
    items=[('The signal travels (from) the exchange (to) the house.',
            'The signal travels from the exchange to the house.'),
           ('The cabinet is (where) the cable divides.',
            'The cabinet is where the cable divides.'),
           ('It is carried (by) fibre.', 'It is carried by fibre.'),
           ('The router is the point (at which) it becomes wireless.',
            'The router is the point at which it becomes wireless.'),
           ('The drop cable runs (from) the cabinet (to) one house.',
            'The drop cable runs from the cabinet to one house.')],
    task='Complete each sentence with the words given.'),
   vocab=[('factually', 'in a way concerned with facts'),
          ('fibre', 'a thin thread, used to carry signals'),
          ('fourteen-digit', 'having fourteen numbers'),
          ('grammar', 'the rules of a language'),
          ('illustrated', 'shown with pictures or examples'),
          ('landline', 'a telephone line that is not mobile'),
          ('measurably', 'by an amount that can be measured'),
          ('notified', 'told officially')],
   expr=[('It is never the part that limits anything.',
          'ruling out a suspected cause'),
         ('The far one is not imagining it.',
          'validating a complaint'),
         ('Worse than four hundred metres of copper.',
          'making a comparison concrete'),
         ('Moving a box eighty centimetres.',
          'describing a small, effective fix')],
   trans=['first', 'then', 'after that', 'finally']),

  dict(
   sub='When a correction is printed',
   step=3,
   read=[
    dict(heading='The correction nobody read',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 49-55',
         paras=[
          'In 2017 a regional paper printed a front-page story saying '
          'that a bus route was to be withdrawn. The story was wrong: '
          'the route was being altered, and the two stops that were to '
          'be removed were in a part of town the article did not '
          'mention. The paper printed a correction eight days later, '
          'right in every detail, in a box on page two, and the editor '
          'at the time treated the matter as closed.',
          'A researcher at a nearby university used the case to '
          'measure something that is easy to assume and rarely tested. '
          'She telephoned a sample of two hundred readers three weeks '
          'after the correction. Of those who remembered the original '
          'story, which was more than half, four per cent could recall '
          'that a correction had appeared. Nine per cent said they '
          'believed the route had been withdrawn, although it was '
          'still running past their houses.',
          'What the study is often quoted as showing is that '
          'corrections do not work. What it actually showed was '
          'smaller and more useful: a correction placed and sized '
          'differently from the claim does not reach the same readers. '
          'The paper tested this by changing its own practice. A '
          'correction to a front-page story now appears on the front '
          'page, in the same column width as the original. A repeat of '
          'the survey two years later found recall of a correction at '
          'thirty-one per cent rather than four.',
          'The editor who made that change said the argument inside '
          'the building had not been about accuracy, which nobody '
          'opposed, but about the fear that visible corrections would '
          'make the paper look unreliable. The opposite happened, as '
          'far as anything so soft can be measured. A reader survey '
          'the following year found trust in the paper higher than in '
          'any year it had been asked about, and several respondents '
          'mentioned the corrections unprompted as their reason.'],
         items=[
          ('The bus route was being ____________.', None, 'altered',
           'Paragraph 1: altered, not withdrawn.'),
          ('The correction appeared ____________ days later.', None,
           'eight', 'Paragraph 1, in a box on page two.'),
          ('How many readers were telephoned?',
           ['two hundred', 'one hundred', 'fifty', 'five hundred'], 0,
           'Paragraph 2, three weeks after the correction.',
           {1: 'One hundred is half the sample described.', 2: 'Fifty is a quarter of the sample described.', 3: 'Five hundred is more than twice the sample.'}),
          ('____________ per cent could recall a correction '
           'appearing.', None, 'Four',
           'Paragraph 2, among those who remembered the story.'),
          ('Recall rose to ____________ per cent after the change in '
           'practice.', None, 'thirty-one',
           'Paragraph 3, when corrections matched the original.'),
          ('The argument was about the fear of looking ____________.',
           None, 'unreliable',
           'Paragraph 4: not about accuracy, which nobody opposed.'),
          ('Several survey respondents mentioned the corrections '
           '____________.', None, 'unprompted',
           'Paragraph 4, as a reason for trusting the paper.')])],
   listen=[
    dict(heading='Two editors on corrections', part='Part 3',
         task='A discussion between two editors', band='l3',
         qtype='Questions 56-61',
         script=[
          ('Chair', 'You run two papers with opposite policies on '
           'corrections. Be specific.'),
          ('Priya', 'We print a correction to a front-page story on the '
           'front page, same column width. Recall went from four per '
           'cent to thirty-one.'),
          ('Tomas', 'And my fear is the one your colleagues had. A '
           'reader who sees three corrections a month concludes we make '
           'three mistakes a month.'),
          ('Priya', 'Which we do.'),
          ('Tomas', 'Which we do, and I am not sure the reader is wrong '
           'to downgrade us for it.'),
          ('Priya', 'Our trust survey went up, not down, and several '
           'people named the corrections without being asked about '
           'them.'),
          ('Tomas', 'That is a real finding and it is one paper.'),
          ('Priya', 'Agreed. I would not generalise from it either. But '
           'the alternative is a correction on page two, and page two '
           'reaches four per cent of the people who read the thing we '
           'got wrong.'),
          ('Tomas', 'That number is the one that moves me. Four per '
           'cent is not a correction; it is a record that we made '
           'one.'),
          ('Priya', 'Put that in your leader column and you will have '
           'changed your policy by accident.'),
          ('Chair', 'Which is roughly how most policies change.')],
         items=[
          ('Recall of corrections rose from four per cent to '
           '____________.', None, 'thirty-one',
           'After front-page corrections were introduced.'),
          ('Tomas fears a reader will ____________ the paper for '
           'visible corrections.', None, 'downgrade',
           'Concluding it makes three mistakes a month.'),
          ('Priya says the ____________ survey went up rather than '
           'down.', None, 'trust',
           'With corrections named without prompting.'),
          ('Tomas accepts the finding but says it is one '
           '____________.', None, 'paper',
           'Which Priya agrees she would not generalise from.'),
          ('Page two reaches ____________ per cent of the relevant '
           'readers.', None, 'four',
           'Which Tomas calls the number that moves him.'),
          ('Tomas says four per cent is a ____________ that a '
           'mistake was made.', None, 'record',
           'Rather than a correction of it.')])],
   speak=dict(
    part='Part 3', focus='Accuracy and trust',
    sounds=[('Numbers in the news are the part people mishear. Say nine '
             'hundred, nineteen years, eighteen months, and make each one '
             'separate.'),
            ('Thirteen and thirty, fourteen and forty, fifteen and fifty. The '
             'teens have a strong ending; the tens have a strong beginning.'),
            ('News words put the stress at the front: FACtory, NEWSpaper, '
             'PROduction takes the second part, and so does announce.'),
            ('Practise one sentence: nine hundred workers were told on a '
             'Tuesday morning.'),
            ('Record yourself describing a news story. Say the numbers again '
             'the next day and check you still hear them as you meant them.')],
    intro='Take a position, then say what it costs.',
    qs=['Should newspapers admit mistakes prominently?',
        'Does admitting errors increase or reduce trust?',
        'Who should hold the media to account?'],
    shape=[('answer', 'Yes, and in the same place and size as the '
            'original story.'),
           ('support', 'A correction on page two reaches about four '
            'per cent of the people who read the error.'),
           ('support', 'So it is a record that a mistake was made '
            'rather than a correction of it.'),
           ('follow-up', 'It probably does make the mistakes more '
            'visible, and I think that is a price worth paying.')]),
   write=[
    dict(task='Task 2',
         heading='Should the media correct errors prominently?',
         prompt='Some people think newspapers and broadcasters should '
                'correct their mistakes as prominently as they made '
                'them. Others think this would damage public '
                'confidence. Discuss both views and give your own '
                'opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Correct them prominently; the visibility is the point',
               [('The case against',
                 ['frequent visible corrections make a paper look '
                  'error-prone',
                  'and a reader may not distinguish honesty from '
                  'carelessness']),
                ('The case for',
                 ['a correction on page two reaches four per cent of '
                  'the readers',
                  'so it records an error rather than correcting '
                  'it']),
                ('What the evidence suggests',
                 ['one paper that changed its practice saw trust '
                  'rise',
                  'and readers named the corrections unprompted'])]),
         model=[
          'When a newspaper gets something wrong, the question is not '
          'whether to correct it but where, and the where turns out to '
          'decide everything.',
          'The argument against prominence is not frivolous. A reader '
          'who sees three corrections a month on a front page may '
          'reasonably conclude that the paper makes three mistakes a '
          'month, and may not distinguish between a title that is '
          'honest about errors and one that is careless. Editors who '
          'resist the change are usually afraid of exactly this, and it '
          'is a fear about perception rather than about accuracy.',
          'The argument for prominence rests on a number. When one '
          'regional paper printed a correction in a box on page two, a '
          'survey found that four per cent of the readers who '
          'remembered the original story could recall that any '
          'correction had appeared. A correction that reaches four per '
          'cent of the relevant readers is not a correction; it is a '
          'record that a mistake was made, filed where nobody will '
          'look.',
          'The same paper then printed corrections to front-page '
          'stories on the front page, in the same column width, and '
          'recall rose to thirty-one per cent. Its own trust survey '
          'rose rather than fell, and some readers named the '
          'corrections as their reason, unprompted.',
          'That is one paper and I would not build a law on it. But the '
          'logic does not depend on the survey: if a correction does '
          'not reach the people who read the error, it has not '
          'corrected anything, whatever it has recorded.'],
         notes=['The opening narrows the question from whether to '
                'where, which is the real disagreement.',
                'The four per cent figure does the work that '
                'adjectives usually fail to do.',
                'The conclusion concedes the weakness of the evidence '
                'and then shows the argument survives without it.'],
         criterion=[('Both views, the opposing one fairly',
                     'Task Response'),
                    ('Evidence used with its limits stated',
                     'Task Achievement'),
                    ('An argument independent of the evidence',
                     'Task Response'),
                    ('Accurate and varied structures', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Hedging a claim: suggests, appears, in one case',
    explain='Use suggests, appears and in one case when the evidence '
            'is limited, and shows only when it is not.',
    examples=['The survey suggests corrections are rarely read.',
              'It appears that placement matters more than wording.',
              'In one case, recall rose to thirty-one per cent.',
              'This shows that page two is read less.'],
    items=[('The survey (suggest) corrections are rarely read.',
            'The survey suggests corrections are rarely read.'),
           ('It (appear) that placement matters more than wording.',
            'It appears that placement matters more than wording.'),
           ('(in one case), recall rose to thirty-one per cent.',
            'In one case, recall rose to thirty-one per cent.'),
           ('This (show) that page two is read less.',
            'This shows that page two is read less.'),
           ('The evidence (suggest) trust did not fall.',
            'The evidence suggests trust did not fall.')],
    task='Write each sentence with the hedge given.'),
   vocab=[('operates', 'works or runs'),
          ('sections', 'separate parts of something'),
          ('subscriber', 'somebody who pays for a regular service'),
          ('thereby', 'by that means'),
          ('unavailable', 'not able to be obtained'),
          ('username', 'the name used to identify an account'),
          ('wireless', 'without wires'),
          ('diphtheria', 'a serious infectious disease of the '
           'throat')],
   expr=[('The editor regarded the matter as closed.',
          'reporting a judgement that turned out wrong'),
         ('What it actually showed was narrower.',
          'correcting an over-reading of a study'),
         ('That is a real finding and it is one paper.',
          'accepting evidence and limiting it'),
         ('Which is roughly how most policies change.',
          'a dry general observation')],
   trans=['because', 'however', 'so', 'for example'])],

 technique=dict(
  title='Scan only when the key is rare and unique',
  body='You have been told to scan. The advice is right about one '
       'third of the time and wastes your time the rest, and this page '
       'tells you which third. Scanning works when the thing you are '
       'looking for is rare in the passage and unique on the page: a '
       'year, a proper name, a figure with a per cent sign, a '
       'capitalised word. "1946", "Oyelaran", "thirty-one per cent" - '
       'your eye finds those without reading, because they look '
       'different from prose. Scanning fails, and fails expensively, '
       'when the key is a common word or an idea. If the question asks '
       'about "the main problem", there is no shape on the page to '
       'find: the passage may say difficulty, obstacle, what went '
       'wrong, or nothing at all, and you will read the whole text '
       'three times looking for a word that was never printed. So '
       'before you hunt, look at the question and ask one thing: is my '
       'key rare and unique, or common and paraphrased? If it is rare, '
       'scan, and go straight to it. If it is common, do not scan at '
       'all - use the loop you learned in Volume 1 and Foundation 1, '
       'one paragraph at a time, because the answer will be recognised '
       'by meaning and not by shape. Candidates who learn this spend '
       'their saved minutes on the questions that actually need '
       'thought.',
  panel=[('Rare and unique: scan',
          'years, names, figures, capitalised words'),
         ('Common and paraphrased: loop',
          '"the main reason", "a problem", "a benefit"'),
         ('Ask before you hunt',
          'what shape will this key have on the page?'),
         ('Saved time goes somewhere',
          'spend it on the questions that need thinking')],
  qs=['Is my key a number, a name or a date?',
      'Could the passage say this idea in three other ways?',
      'Does my key have a shape my eye can find?',
      'Should I scan here, or loop?',
      'Where did the minutes I saved go?'],
  task='Go through the questions in cycles 3 and 5 and mark each key '
       'as rare or common before you look. Then check whether you '
       'scanned the common ones by mistake.'),

 outlining=dict(
  title='From passage to outline, then compare with the plan',
  body='Foundation 1 taught you to fill an outline somebody else had '
       'made. This page reverses it and then checks it. Take the '
       'academic passage in cycle 5. Read it once at your normal '
       'speed, then close the book and write the outline you think the '
       'writer worked from: a title for each paragraph, in four to '
       'eight words, and nothing else. Now open the book and compare. '
       'Three things usually show up. First, a paragraph you '
       'summarised in two titles, because it was really two '
       'paragraphs, which tells you something true about the writing '
       'rather than about you. Second, a paragraph you could not title '
       'at all, which is almost always the one carrying the '
       'qualification - the "what it actually showed was narrower" '
       'paragraph - and that is the paragraph the hardest questions '
       'come from. Third, and this is the useful one, an order you '
       'would have chosen differently. Write down why the writer chose '
       'theirs. You are now reading as a writer, which is the shortest '
       'route there is to writing like one, and the questions in Task '
       '2 stop looking like a different skill from reading.',
  frame=('The correction nobody read',
         [('What the writer did',
           ['one wrong story, stated plainly',
            'one study, with its real finding']),
          ('What I would check',
           ['could any paragraph be two?',
            'which paragraph carries the qualification?'])]),
  qs=['Did any paragraph need two titles from me?',
      'Which paragraph could I not title?',
      'Does that paragraph carry a qualification?',
      'Would I have ordered the paragraphs differently?',
      'Why did the writer choose this order?'],
  task='Outline the cycle 5 passage from memory, then compare. Write '
       'one sentence on why the writer ordered it as they did.',
  answers=['a paragraph needing two titles was really two paragraphs',
           'the untitleable paragraph usually carries the '
           'qualification',
           'the hardest questions come from that paragraph',
           'ordering is a choice the writer made for a reason',
           'reading as a writer shortens the route to writing']),

 candos=['I can read a service page for deadlines and cut-off times',
         'I can follow how a claim is checked against the world',
         'I can describe two mirrored trends in one sentence',
         'I can decide whether to scan or to loop before I look',
         'I can outline a passage from memory and compare it'],

 tip=('Scanning only works when your key is rare and unique on the '
      'page. For a common word or an idea, loop through the paragraphs '
      'instead; you will finish sooner.'))
