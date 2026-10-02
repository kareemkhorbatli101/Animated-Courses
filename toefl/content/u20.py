# -*- coding: utf-8 -*-
"""Unit 20 · Media and Misinformation — last unit of the course."""

UNIT = dict(
    n=20, vol=2, title='Media and Misinformation',
    icons=('news', 'globe', 'speech'),
    subs=('How news is made', 'The student newspaper', 'Checking what you read'),
    grammar='although, however, despite',
    field='source, bias, evidence',
    opener_line='The last unit. The grammar is concession, which is the structure every good '
                'discussion post in this course has used — and Build a Sentence here mixes '
                'every frame from the whole twenty units.',

    candos=[
        'complete word endings in a text about how news is produced',
        'read a call for writers and a correction notice and find what applies to me',
        'follow a passage that explains why a false story spreads',
        'understand two people disagreeing about whether to publish',
        'concede a point out loud and then argue past it',
        'write an email offering to contribute, and a post that holds two things at once',
    ],

    acad=[
        ('source', 'where information comes from'),
        ('bias', 'an unfair preference for one side'),
        ('cite', 'to quote or refer to a source'),
        ('media', 'the main means of mass communication'),
        ('issue', 'an important subject being discussed'),
        ('controversy', 'a long public disagreement'),
        ('contrary', 'opposite'),
        ('deny', 'to say something is not true'),
        ('convince', 'to make somebody believe something'),
        ('assure', 'to tell somebody confidently that something is true'),
        ('prohibit', 'to forbid officially'),
        ('reject', 'to refuse to accept'),
        ('remove', 'to take away'),
        ('suspend', 'to stop something temporarily'),
        ('impose', 'to force something on somebody'),
        ('framework', 'a basic structure of ideas or rules'),
        ('ideology', 'a set of political or social beliefs'),
        ('philosophy', 'a system of ideas about life and knowledge'),
        ('obvious', 'easy to see or understand'),
        ('straightforward', 'simple and clear'),
        ('whereas', 'while in contrast'),
        ('nevertheless', 'in spite of that'),
        ('furthermore', 'in addition'),
        ('thereby', 'by that means'),
    ],
    campus=[
        ('newspaper', 'a printed or online publication of news'),
        ('editor', 'the person who decides what is published'),
        ('headline', 'the title of a news story'),
        ('article', 'a piece of writing in a newspaper'),
        ('photo credit', 'the name of the person who took a photograph'),
        ('correction', 'a published statement that something was wrong'),
        ('fact-check', 'to verify claims before publishing'),
        ('press pass', 'a card allowing a journalist access'),
        ('column', 'a regular opinion piece by one writer'),
        ('byline', 'the line giving the writer’s name'),
        ('layout', 'the way text and images are arranged on a page'),
        ('print run', 'the number of copies printed at one time'),
    ],
    vocab_talk=[
        'Where do you get your news? What bias would you expect that source to have?',
        'Describe a controversy you have followed. What convinced you one way or the other?',
        'Have you ever seen a correction published? What was it for?',
        'Would you cite a social media post in an essay? Why or why not?',
    ],
    again=['evident', 'interpret', 'assume', 'evaluate', 'significant', 'distort', 'investigate', 'imply'],

    r1=dict(
        sub='How news is made',
        skill=('The last Complete the Words of the course',
               ['Everything you have practised is here: -ed, -ing, -ion, -ly, -est, plurals.',
                'Count the dashes first, every time. That alone prevents most errors.',
                'Read the whole sentence before the gap. The grammar names the ending.',
                'Never write a whole word. You are completing one.']),
        guided_text='A news story does not begin when something happ---. It begins when somebody '
                    'dec---- that it is news, and that decision is made by a small number of '
                    'people under consider---- time pressure. Two events of equal importance can '
                    'end up on page one and on page fourt---, and the differ---- is often simply '
                    'what else happened that day.',
        guided_hint='1  happ---  →  ens  (happens)',
        guided=['ens', 'ides', 'able', 'een', 'ence'],
        exam_text='Ask people what makes something news and they will describe import----. Ask a '
                  'news editor and you will get a list that is more honest and less comfort----: '
                  'is it new, is it near, is it about somebody recogni-----, can it be told in '
                  'ninety seconds, and is there a pic----? None of these is importance. They are '
                  'the properties of a story that can be produ--- today, which is a different '
                  'thing. This is not a conspi----. It is the predictable result of a deadline '
                  'and a fixed number of pa---. The consequence is a sys------- bias that nobody '
                  'intends: slow changes get too little attention and sudden ones get too much, '
                  'whatever their actual scale. A famine that develops over two years is harder '
                  'to cover than a crash that takes two seconds, even though the first ki--- far '
                  'more people. Nothing in that sentence is anybody’s fa---.',
        exam=['ance', 'able', 'sable', 'ture', 'ced', 'racy', 'ges', 'tematic', 'lls', 'ult'],
    ),

    r2=dict(
        sub='The student newspaper',
        skill=('Separate the invitation from the rules',
               ['A call for writers describes the opportunity and then constrains it.',
                'Deadlines, word limits and verification rules are the usual questions.',
                'A corrections notice tells you what went wrong and what changed because of it.',
                'Note what is required for every submission, not just for some.']),
        docs=[
            ('notice', 'The Northgate Review · writers wanted, spring term', [
                '# What we publish',
                '* News (300–500 words), features (800–1,200), reviews (400), one column a week.',
                '* We do not publish anonymous pieces. Everything carries a byline.',
                '# Before anything is published',
                '* Every factual claim needs a source we can check. Name it when you submit.',
                '* Anything about a named individual is read by the editor and one other person.',
                '* Photographs need a credit and the photographer’s permission.',
                '# Deadlines',
                '* Copy by Monday 18.00 for Thursday publication. Late copy waits a week.',
                '* No experience needed. We will edit with you, not instead of you.',
            ], 'ad'),
            ('notice', 'Corrections and clarifications · issue 214', [
                '# Correction',
                'Our report of 6 February stated that the library would close at 20.00 from '
                'March. The library informs us that the new time is 21.00 and applies only in '
                'vacations. We are sorry for the error.',
                '# How it happened',
                'The reporter had the correct information from the library and the error was '
                'introduced at the editing stage, when the sentence was shortened. The reporter '
                'is not at fault.',
                '# What has changed',
                '* Any sentence altered after submission is now sent back to the writer before '
                'publication.',
                '* Shortening for space is done by cutting whole sentences, not by rewriting '
                'them.',
            ], 'notice'),
        ],
        guided=[
            ('How long is a news piece?',
             ('300–500 words', '400 words', '800–1,200 words', 'One column'), 0,
             'News is the shortest category listed.'),
            ('What does the paper never publish?',
             ('Reviews', 'Anonymous pieces', 'Photographs', 'Columns'), 1,
             'Everything carries a byline.'),
            ('What does every factual claim need?',
             ('A photograph', 'A source the paper can check', 'An editor’s approval',
              'A second writer'), 1,
             'Name it when you submit.'),
            ('When must copy be submitted?',
             ('Monday at six', 'Thursday at six', 'Friday', 'Any day'), 0,
             'For Thursday publication; late copy waits a week.'),
        ],
        exam=[
            ('What was wrong in the report of 6 February?',
             ('The date of the change', 'The closing time and when it applies',
              'The name of the library', 'The reporter’s byline'), 1,
             'Both details were wrong: 20.00 instead of 21.00, and all year instead of vacations.'),
            ('Where was the error introduced?',
             ('By the library', 'By the reporter', 'At the editing stage',
              'By the printer'), 2,
             'When the sentence was shortened — and the notice adds that the reporter is not at '
             'fault.'),
            ('What is the first change the paper has made?',
             ('Shorter news pieces', 'Altered sentences go back to the writer',
              'Two editors read everything', 'No vacation reporting'), 1,
             'Any sentence altered after submission is now sent back before publication.'),
            ('How will pieces now be shortened?',
             ('By rewriting sentences', 'By cutting whole sentences',
              'By reducing the print run', 'By removing photographs'), 1,
             'Which is precisely what would have prevented this error.'),
            ('What does a piece about a named individual require?',
             ('A photograph', 'Two readers before publication', 'A longer word count',
              'The individual’s approval'), 1,
             'Read by the editor and one other person.'),
            ('What can be inferred about the paper’s attitude to new writers?',
             ('It prefers experienced ones', 'It is willing to train them',
              'It pays them', 'It publishes them anonymously'), 1,
             'No experience needed, and we will edit with you, not instead of you.'),
        ],
    ),

    r3=dict(
        sub='Checking what you read',
        title='Why a False Story Travels Faster Than a Correction',
        words=280,
        paras=[
            'A large study of rumours on social media found that false stories reached more '
            'people, reached them faster, and spread further through the network than true ones. '
            'The effect was not small, and it was not caused by automated accounts: it held when '
            'those were removed. Human beings were doing the spreading.',
            'The explanation the researchers favoured was novelty. A false story is not '
            'constrained by what happened, so it can be more surprising than a true one, and '
            'surprise is what makes people pass something on. The emotional pattern supported '
            'this: replies to false stories showed more surprise and disgust, while replies to '
            'true ones showed more sadness and trust. Nobody in the study appeared to be lying. '
            'They were forwarding what struck them.',
            'The structural problem follows. A correction is, by definition, less surprising '
            'than the story it corrects, and it arrives later, at an audience that has already '
            'moved on. It also carries a cost the original did not: reading it requires admitting '
            'that you believed something false, which is why corrections are shared most by '
            'people who never believed the story in the first place. The practical conclusion is '
            'uncomfortable for anybody who writes them. A correction cannot undo a false story. '
            'It can only make the record right, which is worth doing for a different reason '
            'entirely.',
        ],
        skill=('Follow a finding into its consequence',
               ['A research passage that ends in a practical conclusion is testing whether you '
                'followed the chain.',
                'Watch for the explanation the researchers favoured — it marks a claim that is '
                'argued, not proved.',
                'An emotional or behavioural pattern given as support is always tested.',
                'The last sentence usually distinguishes two purposes. Note both.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why automated accounts spread rumours', 'Why false stories spread further and '
              'what that means for corrections',
              'How social media networks are built', 'Why people lie online'), 1,
             'The finding, the explanation, and the consequence for corrections.'),
            ('What was NOT the cause of the effect?',
             ('Novelty', 'Automated accounts', 'Surprise', 'Human sharing'), 1,
             'It held when those were removed.'),
            ('What explanation did the researchers favour?',
             ('Dishonesty', 'Novelty', 'Network size', 'Political bias'), 1,
             'A false story is not constrained by what happened, so it can be more surprising.'),
            ('What emotions appeared in replies to false stories?',
             ('Sadness and trust', 'Surprise and disgust', 'Anger and fear',
              'Amusement and doubt'), 1,
             'And the opposite pattern appeared in replies to true ones.'),
        ],
        exam=[
            ('Why is a correction less surprising than the story it corrects?',
             ('It is shorter', 'It is constrained by what actually happened',
              'It is published later', 'It has no headline'), 1,
             'By definition — the original was free of that constraint, which is what made it '
             'surprising.'),
            ('What cost does reading a correction carry?',
             ('It takes time', 'It requires admitting you believed something false',
              'It is usually behind a paywall', 'It is written badly'), 1,
             'Which is why corrections are shared by people who never believed the story.'),
            ('Who shares corrections most?',
             ('People who believed the story', 'People who never believed it',
              'Journalists', 'Automated accounts'), 1,
             'The passage states it as a consequence of the cost just described.'),
            ('All of the following are stated in the study EXCEPT:',
             ('False stories reached more people', 'They spread faster',
              'They spread further through the network',
              'They were mostly spread by automated accounts'), 3,
             'The passage rules that out in the first paragraph.'),
            ('What does the author say a correction cannot do?',
             ('Reach the original audience', 'Undo a false story',
              'Be written quickly', 'Be verified'), 1,
             'It can only make the record right.'),
            ('What is the "different reason entirely"?',
             ('To correct the record rather than to change minds', 'To attract readers',
              'To protect the newspaper', 'To satisfy the editor'), 0,
             'The final sentence separates the two purposes, and only one of them is achievable.'),
            ('Which best states the main idea of paragraph 2?',
             ('People lie frequently online', 'Novelty, not dishonesty, explains the spread',
              'Emotions cannot be measured', 'Disgust spreads faster than sadness'), 1,
             'Nobody in the study appeared to be lying — they were forwarding what struck them.'),
        ],
    ),

    l1=dict(
        sub='The student newspaper',
        caption='Two student journalists disagree about publishing',
        skill=('Hold both positions in mind',
               ['The last listening of the course: both speakers have a real argument.',
                'Note what each one concedes. Concessions are tested as often as claims.',
                'The resolution may be a compromise rather than a winner.',
                'The final two lines carry the decision.']),
        warm=[
            ('Woman: Have you got a second source?',
             ('By Monday at six.', 'Only one so far.', 'Three hundred words.',
              'Yes, it is checked.'), 1,
             'A yes/no question about sourcing, answered with the current state.'),
            ('Man: Can we run it anonymously?',
             ('It is a news piece.', 'No — everything carries a byline.',
              'On Thursday.', 'Yes, if it is short.'), 1,
             'A can-we question about permission, refused with the rule.'),
            ('Woman: What if we are wrong?',
             ('Then we print a correction.', 'Five hundred words.',
              'By Monday.', 'Yes, we might be.'), 0,
             'A what-if question wants the consequence.'),
        ],
        script=[
            ('Man', 'It is a good story and we have had it for four days.'),
            ('Woman', 'We have one source.'),
            ('Man', 'A very good source. She was in the meeting.'),
            ('Woman', 'She was in the meeting and she is also the person who loses most if the '
                      'decision stands. That does not make her wrong. It makes her one source.'),
            ('Man', 'If we wait, the Gazette runs it first.'),
            ('Woman', 'Possibly. Although if the Gazette runs it and it is wrong, that is their '
                      'correction and not ours.'),
            ('Man', 'That is a very comfortable position.'),
            ('Woman', 'It is. I accept that. But look at what happened in issue 214 — one '
                      'sentence changed at the editing stage and we spent three weeks explaining '
                      'ourselves to the library.'),
            ('Man', 'That was a time, not a fact.'),
            ('Woman', 'And this would be a person. Which is worse.'),
            ('Man', 'All right. What if we publish what we can actually stand up — that a '
                    'meeting took place and a decision was made — and leave out who said what '
                    'until we have the second source?'),
            ('Woman', 'That I would run on Thursday.'),
        ],
        items=[
            ('What is the disagreement about?',
             ('Whether the story is interesting', 'Whether there is enough sourcing to publish',
              'Who should write it', 'How long it should be'), 1,
             'He has a good source; she says one source is not enough.'),
            ('Why does the woman question the source?',
             ('She was not at the meeting', 'She has an interest in the outcome',
              'She has been wrong before', 'She asked to remain anonymous'), 1,
             'That does not make her wrong. It makes her one source.'),
            ('What is the man’s argument for publishing now?',
             ('The deadline is Monday', 'Another paper may publish first',
              'The editor has approved it', 'The story will expire'), 1,
             'If we wait, the Gazette runs it first.'),
            ('What does the woman concede?',
             ('That the source is unreliable', 'That her position is comfortable',
              'That the story is unimportant', 'That the Gazette is better'), 1,
             'It is. I accept that — before she gives her counter-argument.'),
            ('Why does the woman mention issue 214?',
             ('To show how long a correction takes to resolve', 'To blame the editor',
              'To explain the word limit', 'To praise the reporter'), 0,
             'Three weeks explaining themselves over a single changed sentence.'),
            ('What do they agree to do?',
             ('Wait for the second source', 'Publish everything on Thursday',
              'Publish only what is verified and hold the rest', 'Let the Gazette run it'), 2,
             'That a meeting took place and a decision was made, leaving out who said what.'),
        ],
    ),

    l2=dict(
        sub='The student newspaper',
        caption='An announcement about the newspaper',
        poster=['Copy by Monday 18.00 for Thursday',
                'Every factual claim needs a checkable source',
                'New: altered sentences go back to the writer'],
        skill=('The last announcement: expect everything',
               ['Deadlines, rules, a change, a reason and a closing instruction.',
                'A change introduced because of a past mistake is always tested.',
                'Note what is now required that was not before.',
                'The final sentence usually tells you what to do if you want to join in.']),
        warm=[
            ('Man: When is copy due?',
             ('Monday at six.', 'Thursday.', 'Three hundred words.',
              'Yes, every week.'), 0,
             'When wants the deadline, not the publication day.'),
            ('Woman: Do I need a source for everything?',
             ('For every factual claim.', 'On Thursday.', 'Five hundred words.',
              'Yes, a byline.'), 0,
             'A do-I-need question answered with the scope of the rule.'),
            ('Man: What if the editor changes my sentence?',
             ('It comes back to you first.', 'By Monday at six.',
              'Whole sentences only.', 'Yes, they might.'), 0,
             'A what-if question wants the new procedure.'),
        ],
        script=[
            ('Woman', 'The Review is looking for writers and I want to say what the job actually '
                      'involves rather than what the poster says. Copy is due Monday at six for '
                      'Thursday, and late copy genuinely waits a week; we do not hold the page. '
                      'Every factual claim needs a source we can check, and you name it when you '
                      'submit, not when somebody asks. If your piece is about a named individual, '
                      'it is read by me and by one other person before it goes anywhere, and '
                      'that is not about trusting you. It is about two people being harder to '
                      'fool than one. Now, a change, and it comes out of issue 214. We printed a '
                      'library closing time that was wrong, and the error was not the reporter’s '
                      '— it appeared when somebody shortened a sentence at the editing stage. '
                      'From now on, any sentence that is altered after submission goes back to '
                      'the writer before publication, and shortening is done by cutting whole '
                      'sentences rather than rewriting them. Finally: we take people with no '
                      'experience, every term, and the first piece is always edited with the '
                      'writer sitting there. Come to the meeting on Tuesday at five.'),
        ],
        items=[
            ('What happens to copy submitted after Monday at six?',
             ('It is published anyway', 'It waits a week', 'It is shortened',
              'It loses its byline'), 1,
             'We do not hold the page.'),
            ('When must a source be named?',
             ('When somebody asks', 'When you submit', 'Before Thursday',
              'Only for named individuals'), 1,
             'Not when somebody asks — the speaker makes the contrast explicitly.'),
            ('Why is a piece about an individual read twice?',
             ('The writer may be inexperienced', 'Two people are harder to fool than one',
              'The editor is often away', 'It is a legal requirement'), 1,
             'And she says it is not about trusting the writer.'),
            ('Where did the issue 214 error come from?',
             ('The library', 'The reporter', 'The shortening of a sentence at editing',
              'The printer'), 2,
             'The error was not the reporter’s.'),
            ('What is now done when a piece is too long?',
             ('Sentences are rewritten', 'Whole sentences are cut',
              'The piece is held a week', 'The writer rewrites it'), 1,
             'Which is the change that would have prevented the error.'),
        ],
    ),

    l3=dict(
        sub='Checking what you read',
        caption='A talk on why a false story travels',
        board=['False stories spread faster — and by humans',
               'Novelty drives sharing',
               'Corrections are less surprising and arrive later',
               'Correct the record, not the audience'],
        skill=('The last talk: a finding, a mechanism and a conclusion',
               ['Expect all three, in that order, and expect the conclusion to be '
                'uncomfortable.',
                'A figure given once carries the argument.',
                'The speaker may reject an explanation before offering one. Note which is '
                'rejected.',
                'The last sentence is what the whole course has been building towards.']),
        warm=[
            ('Man: Was it caused by bots?',
             ('No — it held without them.', 'About six times faster.',
              'On social media.', 'Yes, mostly.'), 0,
             'A yes/no question about the cause, answered with the finding that rules it out.'),
            ('Woman: Why do people share false stories?',
             ('Because they are surprising.', 'About seventy thousand.',
              'In the study.', 'Yes, they do.'), 0,
             'A why question wants the mechanism.'),
            ('Man: Does a correction work?',
             ('It makes the record right.', 'By Thursday.', 'Six times faster.',
              'Yes, completely.'), 0,
             'A does-it-work question answered with what it does achieve.'),
        ],
        script=[
            ('Professor', 'We finish the term with a finding that should change how you read, '
                          'and a conclusion that nobody enjoys. A study of around a hundred and '
                          'twenty thousand rumour cascades found that false stories reached more '
                          'people, reached them faster, and went further through the network '
                          'than true ones — by a wide margin. The first thing everybody assumes '
                          'is automated accounts. The researchers removed them and the effect '
                          'held. It was people. Now, why? Not dishonesty: almost nobody in the '
                          'study appeared to be knowingly lying. The explanation the authors '
                          'favour is novelty. A true story has to match what happened. A false '
                          'one does not, so it can be stranger, and strangeness is what gets '
                          'forwarded. The replies supported that — surprise and disgust around '
                          'false stories, sadness and trust around true ones. And here is the '
                          'uncomfortable part. A correction is necessarily less surprising than '
                          'what it corrects, it arrives later, and reading it costs you '
                          'something: you have to accept that you believed something untrue. So '
                          'corrections do not catch up. They are not useless, but their purpose '
                          'is narrower than people think. You publish a correction to make the '
                          'record right, not to change the minds of everybody who read the '
                          'original. Those are different jobs, and only one of them is '
                          'achievable.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Social media should be regulated', 'False stories spread further for reasons '
              'that make corrections ineffective at changing minds',
              'Automated accounts cause misinformation',
              'People lie more than they admit'), 1,
             'Finding, mechanism and the narrowed purpose of a correction.'),
            ('What did the researchers rule out?',
             ('Novelty', 'Automated accounts', 'Emotion', 'Network size'), 1,
             'They removed them and the effect held.'),
            ('What explanation do the authors favour?',
             ('Dishonesty', 'Novelty', 'Political bias', 'Network structure'), 1,
             'A false story is not constrained by what happened, so it can be stranger.'),
            ('What emotions surrounded true stories?',
             ('Surprise and disgust', 'Sadness and trust', 'Anger and fear',
              'Amusement and doubt'), 1,
             'The opposite pattern to false ones, which supports the novelty explanation.'),
            ('Why does reading a correction cost something?',
             ('It takes time', 'You must accept you believed something untrue',
              'It is usually long', 'It is hard to find'), 1,
             'Which is the third reason corrections do not catch up.'),
            ('What does the speaker say a correction is for?',
             ('Changing the minds of everybody who read the original',
              'Making the record right', 'Protecting the publication',
              'Attracting new readers'), 1,
             'Those are different jobs, and only one of them is achievable.'),
        ],
    ),

    sp=[
        dict(sub='How news is made', focus='contrast linkers',
             skill=('Mark the turn with your voice',
                    ['A slight rise before although and however tells the listener a turn is '
                     'coming.',
                     'Despite is followed by a noun or -ing, never by a clause.',
                     'Do not pause after however in the middle of a sentence.',
                     'Finish the contrast. An abandoned although is the commonest slip.']),
             repeat=['It is news, although it is not important.',
                     'Despite the deadline, the piece was checked twice.',
                     'The story is true. However, we cannot prove it yet.',
                     'Although she was in the meeting, she is still only one source.',
                     'Despite having the story for four days, we have not found a second source.',
                     'A famine develops slowly, whereas a crash happens in seconds, and only one of them is easy to report.',
                     'Although nothing in that process is anybody’s fault, the result is a systematic bias that nobody intended and everybody inherits.'],
             theme='where you get your news',
             qs=['First, where do you usually get your news?',
                 'People trust different sources. How much do you trust yours, and why?',
                 'Some people say that nobody under twenty-five reads news at all any more. Do '
                 'you agree? Why or why not?',
                 'Finally, should news organisations be funded by the public? Why or why not?'],
             model=[(2, 'Not very much, although I keep reading it, which is probably the '
                        'strangest part of the arrangement.'),
                    (3, 'I disagree. They read a great deal of news; they do not read '
                        'newspapers, and people keep treating those as the same claim.')],
             selfcheck=['I marked the contrast with my voice',
                        'I used despite with a noun or -ing',
                        'I finished every contrast I started']),
        dict(sub='The student newspaper', focus='conceding before arguing',
             skill=('Give ground, then take it back',
                    ['I accept that… but… / That is fair, although… / You are right, and yet…',
                     'Concede something real. Conceding nothing sounds evasive.',
                     'The argument after the concession must be stronger than the concession.',
                     'One concession, one counter-argument, one reason.']),
             repeat=['That is fair, although it does not settle it.',
                     'You are right about the deadline, and I still would not run it.',
                     'I accept that my position is comfortable.',
                     'Despite the risk of being second, I would rather be right.',
                     'Although she was in the meeting, she is the person with most to lose.',
                     'I take the point about the other paper, but their mistake would be their correction.',
                     'You are right that waiting has a cost, and I think a correction about a named person costs considerably more.'],
             theme='disagreement and how you handle it',
             qs=['To start, do you argue with people about things you have read?',
                 'People disagree in very different ways. How do you handle disagreement, and '
                 'why that way?',
                 'Some people argue that it is better to avoid political discussion with '
                 'friends. Do you agree? Why or why not?',
                 'Last question. Should universities invite speakers whose views most students '
                 'reject? Why or why not?'],
             model=[(2, 'I concede too early, usually. It keeps the peace and it means I rarely '
                        'find out whether I was right.'),
                    (4, 'Yes, although not any speaker and not without a format. A lecture with '
                        'no questions is not a discussion; it is a platform.')],
             selfcheck=['I conceded something real before arguing',
                        'My counter-argument was stronger than the concession',
                        'I gave one clear reason']),
        dict(sub='Checking what you read', focus='academic register',
             skill=('The last speaking page of the course',
                    ['Use the unit’s words: source, bias, cite, controversy, nevertheless.',
                     'Report the finding, name the mechanism, state the consequence.',
                     'Hold two things at once: it is true that… and nevertheless…',
                     'Mark yourself against the three statements below.']),
             repeat=['False stories spread further than true ones.',
                     'The effect was not caused by automated accounts.',
                     'Novelty, rather than dishonesty, appears to drive sharing.',
                     'A correction is necessarily less surprising than what it corrects.',
                     'Nevertheless, the record is worth correcting for a different reason.',
                     'Readers who never believed the original are the ones most likely to share the correction.',
                     'It is true that corrections rarely reach the original audience, and nevertheless a publication that stops issuing them has given up something it cannot get back.'],
             theme='information and who you believe',
             qs=['First, how do you decide whether something you read online is true?',
                 'People check in different ways, or not at all. What do you actually do, and '
                 'why?',
                 'Some people argue that platforms should remove false information. Do you '
                 'agree? Why or why not?',
                 'Finally, after twenty units of this course, what is the one habit you would '
                 'keep? Why?'],
             model=[(3, 'It is true that removal stops the spread, and nevertheless somebody has '
                        'to decide what is false, and that decision is itself a source of bias.'),
                    (4, 'Checking who is telling me something before I decide whether I believe '
                        'it. Everything else in this course follows from that one question.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I held two things at once with nevertheless',
                        'My last answer had an opinion, a reason and an example']),
    ],

    w1=dict(
        sub='Every frame from the course',
        skill=('The pre-test audit',
               ['These ten items use every frame the course has taught: direct questions, '
                'embedded, reported, relative clauses.',
                'Identify the frame before you order the tiles. The frame decides the order.',
                'If a tile says whether, if, who or that, the frame is already decided for you.',
                'Use every tile exactly once. This is the last practice before the test.']),
        guided=[
            ('The library closes at nine in vacations.',
             ['does', 'what', 'time', 'it', 'close'],
             'What time does it close?'),
            ('"Where did you get this?" the editor asked.',
             ['asked', 'the', 'editor', 'where', 'I', 'had', 'got', 'it'],
             'The editor asked where I had got it.'),
            ('Every claim needs a source we can check.',
             ['know', 'you', 'do', 'whether', 'a', 'source', 'is', 'needed'],
             'Do you know whether a source is needed?'),
        ],
        exam=[
            ('Copy is due on Monday at six.',
             ['tell', 'can', 'you', 'me', 'when', 'copy', 'is', 'due'],
             'Can you tell me when copy is due?'),
            ('The reporter who wrote it was not at fault.',
             ['the', 'reporter', 'who', 'wrote', 'it', 'was', 'not', 'at', 'fault'],
             'The reporter who wrote it was not at fault.'),
            ('False stories spread faster than true ones.',
             ['spread', 'which', 'stories', 'faster'],
             'Which stories spread faster?'),
            ('"Will you run it on Thursday?" she asked.',
             ['asked', 'she', 'whether', 'we', 'would', 'run', 'it'],
             'She asked whether we would run it.'),
            ('The error appeared when a sentence was shortened.',
             ['know', 'do', 'you', 'how', 'the', 'error', 'appeared'],
             'Do you know how the error appeared?'),
            ('Anonymous pieces are never published.',
             ['are', 'why', 'anonymous', 'pieces', 'rejected'],
             'Why are anonymous pieces rejected?'),
            ('A correction makes the record right.',
             ['tell', 'can', 'you', 'me', 'what', 'a', 'correction', 'achieves'],
             'Can you tell me what a correction achieves?'),
        ],
    ),
    w2=dict(
        sub='The student newspaper',
        to='editor@northgatereview.org',
        date='15/01/2030',
        subject='Writing for the Review — and one question about sources',
        scenario=[
            'You want to write for the student newspaper. You have no journalism experience but '
            'you have a specific story: the library’s vacation opening times have changed twice '
            'this year and nobody has reported why. You are not sure what counts as a checkable '
            'source.',
            'Write an email to the editor.',
        ],
        bullets=['Offer to write and say what you want to write about.',
                 'Be honest about your experience.',
                 'Ask the question you need answered before you start.',
                 ],
        skill=('Offer a story, not availability',
               ['I would like to write is weak. I would like to write about X is a proposal.',
                'Say what you already know and what you would have to find out.',
                'Ask one question, and make it specific enough to answer in a line.',
                'Seven minutes. 110–140 words. This is the last email practice before the test.']),
        model=[
            'Dear Editor,',
            'I would like to write for the Review. I have a specific story in mind: the library’s '
            'vacation opening times have changed twice since October, and as far as I can find '
            'nobody has reported why. I think it is a news piece rather than a feature, so '
            'around four hundred words.',
            'I should say that I have never written for a newspaper. I read the note saying that '
            'no experience is needed and that the first piece is edited with the writer, which '
            'is the reason I am writing at all.',
            'One question before I start. Would an email from the library office count as a '
            'checkable source, or do you need something published? I would rather ask now than '
            'submit something you cannot use.',
            'I will come to the Tuesday meeting.',
            'Hana Ozdemir',
        ],
        notes=['The story comes before the offer, which turns an availability email into a '
               'proposal.',
               'The length is proposed, with a reason, so the editor can agree or correct it in '
               'one word.',
               'The inexperience is stated and immediately tied to the paper’s own policy, which '
               'turns a weakness into evidence that the notice was read.',
               'The question is specific, offers two alternatives, and explains why asking now '
               'saves work later.'],
    ),
    w3=dict(
        sub='Checking what you read',
        prof='Dr Ozdemir',
        question='Research shows that false stories spread further and faster than true ones, '
                 'and that corrections rarely reach the people who believed the original. Given '
                 'that, what should a publication do differently — or is there nothing to be '
                 'done?',
        posts=[('Mira', 'h',
                'Publish less and verify more. If the spread is driven by novelty, then a '
                'publication that competes on being first is feeding the mechanism. Slow down, '
                'get it right, accept being second. The reputation you build is the only thing '
                'that survives.'),
               ('Oscar', 'm',
                'Mira’s publication will be admirable and unread. The audience does not reward '
                'being right later; the study we read is evidence of exactly that. The answer is '
                'not to compete less but to make the true version as surprising as the false one '
                '— which journalists call good writing and everybody else calls '
                'sensationalism.')],
        skill=('The last discussion of the course',
               ['Everything is here: name a classmate, take the strong version, make a '
                'distinction, use the evidence.',
                'Both posts are good. Say what each gets right before you go past them.',
                'Finish with something you would actually do.',
                'At least 100 words in ten minutes.']),
        starters=['Mira is right about the mechanism and Oscar is right about the audience:…',
                  'The study supports Oscar more than he realises, because…',
                  'What neither post separates is… and…',
                  'So I would…, and I would stop…'],
        model=[
            'Mira is right about the mechanism and Oscar is right about the audience, and the '
            'study supports Oscar slightly more than he realises.',
            'The finding was that novelty drives sharing and that corrections arrive later, less '
            'surprising, and carrying a cost to the reader. Mira’s answer accepts all of that '
            'and then asks a publication to behave as though it were not true. That is a '
            'position with integrity and no readers.',
            'But Oscar’s answer blurs two things. Making a true story vivid is not the same as '
            'making it surprising, and only the second one competes with falsehood. A true story '
            'can be told well without being stretched, and the moment it is stretched it is '
            'carrying the same defect as the story it was meant to replace.',
            'So I would write true stories as well as anybody writes false ones, and I would '
            'stop treating corrections as damage control. Publish them as their own small '
            'stories, with the reason the error happened, as the Review did after issue 214. '
            'That is surprising, it is true, and it is the only version of a correction anybody '
            'reads.',
        ],
        model_words=197,
    ),

    gram=dict(
        title='although, however, despite',
        headers=['Form', 'Example'],
        rows=[
            ['although / though + clause', 'Although she was there, she is one source.'],
            ['even though (stronger)', 'Even though we had it first, we waited.'],
            ['However, + sentence', 'The story is true. However, we cannot prove it.'],
            ['despite / in spite of + noun', 'Despite the deadline, it was checked.'],
            ['despite / in spite of + -ing', 'Despite having it for four days…'],
            ['despite the fact that + clause', 'Despite the fact that she was there…'],
            ['whereas (direct contrast)', 'A famine is slow, whereas a crash is instant.'],
        ],
        notes=[
            'Although joins two clauses inside one sentence. However joins two sentences and '
            'takes a comma after it. They are not interchangeable.',
            'Despite and in spite of are prepositions, so they take a noun or an -ing form, '
            'never a clause. If you need a clause, use despite the fact that, or just use '
            'although.',
            'Whereas marks a direct contrast between two balanced facts, not a concession. '
            'A famine is slow, whereas a crash is instant — neither is surprising given the '
            'other.',
        ],
        watch='Never write *despite she was there* or *although of the deadline*. Despite takes '
              'a noun; although takes a clause. This is the single commonest error in B1 '
              'discussion writing.',
        ex=[
            ('Complete with although, however, despite or whereas.',
             ['__________ she was in the meeting, she is only one source.',
              'The story may be true. __________, we cannot prove it yet.',
              '__________ the deadline, the piece was checked twice.',
              'A famine develops slowly, __________ a crash happens in seconds.',
              '__________ having the story for four days, we have no second source.',
              'We waited, __________ the other paper did not.'],
             ['Although', 'However', 'Despite', 'whereas', 'Despite', 'whereas']),
            ('Rewrite using the word in brackets.',
             ['She was in the meeting but she is one source. (although) →',
              'We had it for four days but we did not run it. (despite) →',
              'The story is good. We cannot prove it. (however) →',
              'False stories spread fast. True ones do not. (whereas) →'],
             ['Although she was in the meeting, she is one source.',
              'Despite having it for four days, we did not run it.',
              'The story is good. However, we cannot prove it.',
              'False stories spread fast, whereas true ones do not.']),
            ('Correct the mistake in each sentence.',
             ['Despite she was in the meeting, she is one source.',
              'Although of the deadline, we checked it twice.',
              'The story is true, however we cannot prove it.'],
             ['Despite being in the meeting, she is one source.',
              'Despite the deadline, we checked it twice.',
              'The story is true. However, we cannot prove it.']),
        ],
        bas='The last Build a Sentence page mixes every frame in the course. Concession rarely '
            'appears in the task itself, but it appears in every good discussion post you will '
            'write in the test, which is where the marks for this unit actually land.',
    ),

    rev=dict(
        vocab=[
            ('where information comes from', 'source'),
            ('an unfair preference for one side', 'bias'),
            ('to quote or refer to a source', 'cite'),
            ('a long public disagreement', 'controversy'),
            ('to say something is not true', 'deny'),
            ('to refuse to accept', 'reject'),
            ('to stop something temporarily', 'suspend'),
            ('a basic structure of ideas or rules', 'framework'),
            ('simple and clear', 'straightforward'),
            ('in spite of that', 'nevertheless'),
            ('a published statement that something was wrong', 'correction'),
            ('to verify claims before publishing', 'fact-check'),
        ],
        gram=[
            ('__________ she was in the meeting, she is one source.', 'Although'),
            ('The story may be true. __________, we cannot prove it.', 'However'),
            ('__________ the deadline, the piece was checked twice.', 'Despite'),
            ('A famine is slow, __________ a crash is instant.', 'whereas'),
            ('__________ (despite) having it for four days, we waited.', 'Despite'),
            ('__________ (although / despite) the risk, we published.', 'Despite'),
            ('We waited; __________, the other paper did not.', 'however'),
            ('__________ the fact that she was there, she is one source.', 'Despite'),
        ],
        mini=[
            ('According to the passage on page 170, false stories spread further because',
             ('automated accounts share them', 'they are more surprising',
              'they are shorter', 'they are published first'), 1,
             'Novelty is the explanation the researchers favoured, and bots were ruled out.'),
            ('In the talk, a correction is published in order to',
             ('change the minds of everybody who read the original',
              'make the record right', 'attract readers', 'protect the publication'), 1,
             'Those are different jobs, and only one of them is achievable.'),
            ('Which sentence is correct?',
             ('Despite she was there, she is one source.',
              'Although of the deadline, we checked it.',
              'Despite the deadline, we checked it twice.',
              'The story is true, however we cannot prove it.'), 2,
             'Despite takes a noun; although takes a clause; however begins a new sentence.'),
            ('A piece about a named individual at the Review is read by',
             ('the writer only', 'the editor only', 'the editor and one other person',
              'the whole team'), 2,
             'Two people are harder to fool than one.'),
            ('Across the whole course, Build a Sentence has used',
             ('one frame', 'two frames', 'three frames', 'five frames'), 2,
             'Direct questions, embedded questions and relative clauses — in roughly eight to '
             'two.'),
            ('Before Practice Test 2 you should revisit',
             ('the glossary only', 'the adaptive tips from every unit',
              'Unit 1 only', 'nothing'), 1,
             'They are about how the test behaves rather than about English, and they are '
             'reprinted before the test.'),
        ],
    ),
    tip='The whole-course tip list is reprinted before Practice Test 2. Read it in one sitting: '
        'twenty short paragraphs about how the test behaves, which is the part most candidates '
        'meet for the first time on the day. **Volume 2 ends here.**',
)
