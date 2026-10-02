# -*- coding: utf-8 -*-
"""Unit 14 · Archaeology and Ancient Cities."""

UNIT = dict(
    n=14, vol=2, title='Archaeology and Ancient Cities',
    icons=('urn', 'brief', 'city'),
    subs=('Reading a ruin', 'A museum internship', 'The first cities'),
    grammar='The past passive',
    field='remains, dating, settlement',
    opener_line='Archaeology is written almost entirely in the past passive: it was built, it '
                'was abandoned, it was found. Unit 3 taught the present; this unit does the '
                'past.',

    candos=[
        'complete word endings in a text about what buildings leave behind',
        'read an internship advertisement and a reference request and find what is needed',
        'follow a passage that explains why something appeared where it did',
        'understand two students preparing for an interview',
        'describe a past process out loud without preparing',
        'write an email about a deadline I may miss, and a post about competing claims',
    ],

    acad=[
        ('empirical', 'based on observation rather than theory'),
        ('preliminary', 'coming before the main part'),
        ('intermediate', 'in the middle between two stages'),
        ('successor', 'a person or thing that comes after another'),
        ('maintain', 'to keep in good condition'),
        ('occupy', 'to live in or use a place'),
        ('abandon', 'to leave a place for ever'),
        ('cease', 'to stop'),
        ('encounter', 'to meet or find unexpectedly'),
        ('indicate', 'to show or point to'),
        ('deduce', 'to work something out from evidence'),
        ('presume', 'to think something is probably true'),
        ('thesis', 'a long piece of research writing; a central claim'),
        ('manual', 'done with the hands rather than by machine'),
        ('bulk', 'the largest part of something'),
        ('estate', 'a large area of land with one owner'),
        ('civil', 'connected with ordinary citizens'),
        ('military', 'connected with armed forces'),
        ('constitute', 'to make up or form'),
        ('dominate', 'to be the strongest or most noticeable'),
        ('diminish', 'to become smaller or less'),
        ('integrity', 'the state of being whole and undamaged'),
        ('chart', 'to record or map something'),
        ('inspect', 'to look at carefully'),
    ],
    campus=[
        ('internship', 'a period of work experience, often unpaid'),
        ('placement', 'a period of work arranged as part of a course'),
        ('site visit', 'a trip to see a place being studied'),
        ('trowel', 'a small hand tool for digging carefully'),
        ('finds tray', 'a tray for objects recovered from a dig'),
        ('dig', 'an archaeological excavation'),
        ('supervisor', 'the person responsible for your work'),
        ('logbook', 'a record of what was done each day'),
        ('hard hat', 'a helmet worn on a work site'),
        ('spoil heap', 'the pile of removed earth beside a trench'),
        ('rota', 'a list showing who works when'),
        ('context sheet', 'a form recording where an object was found'),
    ],
    vocab_talk=[
        'Is there a building near you that was abandoned and then reused? What happened?',
        'What would a future archaeologist deduce from the contents of your bag?',
        'Which period of your country’s past is best maintained, and which has been lost?',
        'What do you presume about a town when you see its oldest street?',
    ],
    again=['structure', 'construct', 'region', 'significant', 'evident', 'period', 'establish', 'migrate'],

    r1=dict(
        sub='Reading a ruin',
        skill=('Past passive endings are everywhere',
               ['Was and were are followed by a past participle. Most gaps after them are -ed '
                'or -en.',
                'Irregular participles are short: built, found, left, taken. Few dashes.',
                'Noun endings common here: -ment, -ation, -ure.',
                'Count the dashes before choosing.']),
        guided_text='A ruined wall is a document. You can see where it was buil-, where it was '
                    'repai---, and where somebody later knocked a doorway thro---. Each change '
                    'was made for a reas--, and the reasons were almost always practi---, not '
                    'beautiful.',
        guided_hint='1  buil-  →  t  (built)',
        guided=['t', 'red', 'ugh', 'on', 'cal'],
        exam_text='Archaeologists do not dig to find objects. They dig to find relation-----: '
                  'what was lying on top of what. A floor that was la-- over a layer of ash '
                  'tells you the building bur--- and was then reused, and it tells you so '
                  'without a single written word. The same wall may have been exte---- twice, '
                  'cut thro--- for a drain, and finally robb-- of its stone for a later house. '
                  'Each of those events is record-- in the order the material was left. This is '
                  'why an object taken out of the ground without its context is nearly '
                  'worth----: a coin tells you a great deal when it is fo--- under a floor and '
                  'almost nothing when it arrives in a box. The information was never in the '
                  'coin. It was in the earth aro--- it.',
        exam=['ships', 'id', 'ned', 'nded', 'ugh', 'ed', 'ed', 'less', 'und', 'und'],
    ),

    r2=dict(
        sub='A museum internship',
        skill=('Find the requirement, then the deadline',
               ['Job and internship notices pair a requirement with a date. Both are tested.',
                'What is provided and what you must supply are different lists.',
                'A request for a reference has its own deadline, usually earlier.',
                'If one date changes, check what else moves with it.']),
        docs=[
            ('notice', 'Thornbury Museum · summer internships for undergraduates', [
                '# Four places, six weeks, 7 July – 15 August',
                '* Collections (two places): cleaning, numbering and photographing objects.',
                '* Field (two places): six weeks on the Westgate excavation, outdoors in all '
                'weather.',
                '# Conditions',
                '* Unpaid, but travel within the city and lunch on working days are provided.',
                '* A hard hat and boots are provided for field places. Trowels are not.',
                '* You must be available for all six weeks. Partial internships are not offered.',
                '# To apply',
                '* One page on why you want the place, by 14 March.',
                '* Two referees, with email addresses. We contact them ourselves.',
            ], 'ad'),
            ('email', 'd.ferreira@northgate.edu', 'internships@thornburymuseum.org',
             '06/03/2027', 'Reference request — Ana Oyelaran, deadline 12 March', [
                 'Dear Dr Ferreira,',
                 '',
                 'Ana Oyelaran has given your name as a referee for a summer internship',
                 'at this museum. We would be grateful for a short reference by Thursday',
                 '12 March — two days before the application deadline, because we read',
                 'references alongside the applications rather than afterwards.',
                 '',
                 'A paragraph is plenty. We are interested in reliability and in whether',
                 'the student works well outdoors for long periods, rather than in',
                 'academic marks, which we already have.',
                 '',
                 'If you would rather not write one, please tell us, and tell Ana. An',
                 'application with one reference is still considered.',
                 '',
                 'Thornbury Museum',
             ]),
        ],
        guided=[
            ('How long does the internship last?',
             ('Four weeks', 'Six weeks', 'Eight weeks', 'The whole summer'), 1,
             'Six weeks, 7 July to 15 August.'),
            ('What is provided for field places?',
             ('A trowel', 'A hard hat and boots', 'Accommodation', 'A daily wage'), 1,
             'Trowels are specifically excluded in the same line.'),
            ('What is NOT provided?',
             ('Lunch on working days', 'Travel within the city', 'Pay', 'A hard hat'), 2,
             'Unpaid, but travel and lunch are provided.'),
            ('Can a student take only part of the internship?',
             ('Yes, by arrangement', 'Yes, for field places only', 'No',
              'Only in August'), 2,
             'You must be available for all six weeks. Partial internships are not offered.'),
        ],
        exam=[
            ('Why is the reference deadline earlier than the application deadline?',
             ('References take longer to write', 'References are read alongside the '
              'applications', 'The museum closes on 14 March',
              'Applications are read first'), 1,
             'Rather than afterwards — the email gives the reason with because.'),
            ('What does the museum want the reference to cover?',
             ('Academic marks', 'Reliability and working outdoors',
              'Previous museum experience', 'Language ability'), 1,
             'And it says it already has the marks.'),
            ('How long should the reference be?',
             ('One page', 'A paragraph', 'Two pages', 'As long as possible'), 1,
             'A paragraph is plenty.'),
            ('What should a referee do if they would rather not write?',
             ('Say nothing', 'Tell the museum only', 'Tell the museum and the student',
              'Write a short negative reference'), 2,
             'Please tell us, and tell Ana.'),
            ('What happens to an application with only one reference?',
             ('It is rejected', 'It is delayed', 'It is still considered',
              'It goes to a later round'), 2,
             'The last sentence says so directly.'),
            ('What can be inferred about the field places?',
             ('They are more popular than collections places',
              'They require physical stamina', 'They are paid',
              'They are open to postgraduates'), 1,
             'Six weeks outdoors in all weather, and the reference is asked specifically about '
             'working outdoors for long periods.'),
        ],
    ),

    r3=dict(
        sub='The first cities',
        title='Why the First Cities Appeared Where They Did',
        words=280,
        paras=[
            'The first cities were built in a handful of river valleys within a few centuries of '
            'one another, and the obvious explanation is farming: once a field produced more '
            'food than the family that worked it needed, some people could do something else. '
            'That is true but incomplete. Farming began several thousand years before the first '
            'city, and in many places it never produced one at all.',
            'What the successful valleys had in common was not fertility but unpredictability. '
            'The Nile and the Tigris flood, and a flood does two things. It renews the soil, '
            'which is the part everyone remembers, and it destroys the boundaries between one '
            'field and the next, which is the part that matters here. Every year the land had to '
            'be measured out again, and measuring land for several thousand households requires '
            'records, arbitration and somebody with the authority to decide. The institutions '
            'came first, and the city grew around them.',
            'The evidence is in what was written. The earliest tablets from these cities are not '
            'poems or laws or histories. They are receipts: quantities of barley, numbers of '
            'sheep, names of people who owed something to somebody. Writing was not invented to '
            'preserve ideas. It was invented to keep track of who had what, and the first cities '
            'are best understood as the places where keeping track became too complicated to do '
            'in anybody’s head.',
        ],
        skill=('Follow a correction of the obvious answer',
               ['When a passage calls an explanation true but incomplete, it will supply the '
                'missing part.',
                'The second paragraph usually carries the real claim. Mark its first sentence.',
                'Evidence in the third paragraph will be tested against the claim.',
                'A sentence beginning Writing was not invented to… is a main idea in disguise.']),
        guided=[
            ('What is the passage mainly about?',
             ('How farming began', 'Why cities appeared in certain river valleys',
              'How writing developed', 'Why floods are dangerous'), 1,
             'The obvious answer is corrected in paragraph 2 and the evidence follows in '
             'paragraph 3.'),
            ('Why is the farming explanation described as incomplete?',
             ('Farming is more recent than cities', 'Farming often produced no city at all',
              'Fields were too small', 'The evidence is missing'), 1,
             'It began thousands of years earlier and in many places produced no city.'),
            ('What did the successful valleys have in common?',
             ('The richest soil', 'Unpredictable flooding', 'The warmest climate',
              'The largest rivers'), 1,
             'Not fertility but unpredictability — stated at the start of paragraph 2.'),
            ('What does a flood destroy, according to the passage?',
             ('The crops', 'The houses', 'The boundaries between fields',
              'The records'), 2,
             'And the author says that is the part that matters here.'),
        ],
        exam=[
            ('Why does re-measuring the land require institutions?',
             ('It is physically hard', 'Several thousand households need records and '
              'arbitration', 'The rivers change course',
              'Farmers cannot count'), 1,
             'Records, arbitration and somebody with the authority to decide.'),
            ('What were the earliest tablets?',
             ('Poems', 'Laws', 'Histories', 'Receipts'), 3,
             'Quantities of barley, numbers of sheep, names of people who owed something.'),
            ('All of the following are stated in the passage EXCEPT:',
             ('Floods renew the soil', 'The institutions came before the city',
              'Writing began as record-keeping', 'The first cities had the largest populations'),
             3,
             'Population size is never mentioned.'),
            ('The word "arbitration" in paragraph 2 is closest in meaning to',
             ('settling disagreements', 'measuring land', 'collecting taxes',
              'writing records'), 0,
             'It appears in a list of what is needed when boundaries have to be redrawn between '
             'neighbours.'),
            ('What can be inferred about writing?',
             ('It was invented for literature', 'It followed a practical need',
              'It began in one valley only', 'It replaced spoken agreement'), 1,
             'Writing was not invented to preserve ideas; it was invented to keep track.'),
            ('What does the author mean by "too complicated to do in anybody’s head"?',
             ('Cities were confusing places', 'Record-keeping had outgrown memory',
              'Farming required arithmetic', 'Floods were unpredictable'), 1,
             'That is why writing, and therefore the city, appeared.'),
            ('Which best states the main idea of paragraph 2?',
             ('Floods made the soil rich', 'The need to redraw boundaries created institutions, '
              'and cities grew round them', 'The Nile is longer than the Tigris',
              'Farming needs water'), 1,
             'The institutions came first, and the city grew around them.'),
        ],
    ),

    l1=dict(
        sub='A museum internship',
        caption='Two students prepare for an interview',
        skill=('Note the advice and who gives it',
               ['When one speaker coaches another, the advice is the content of most questions.',
                'Listen for the thing they get wrong and the correction.',
                'A fact about the organisation mentioned in passing is usually tested.',
                'The last exchange says what each will do.']),
        warm=[
            ('Man: Have you applied for the internship?',
             ('Four places.', 'I sent it last night.', 'At the museum.',
              'Yes, six weeks.'), 1,
             'A yes/no question about an action, answered with when.'),
            ('Woman: Is it paid?',
             ('No, but lunch and travel are.', 'For six weeks.',
              'At the Westgate site.', 'Yes, quite well.'), 0,
             'A yes/no question about pay, answered and usefully qualified.'),
            ('Man: Who did you put as referees?',
             ('Two of them.', 'Dr Ferreira and my tutor.', 'By the twelfth.',
              'Yes, I did.'), 1,
             'Who wants the people named.'),
        ],
        script=[
            ('Woman', 'They have asked me in on Thursday. I have no idea what they will ask.'),
            ('Man', 'Did you apply for field or collections?'),
            ('Woman', 'Field.'),
            ('Man', 'Then they will ask about the weather. Seriously. My sister did it two years '
                    'ago and she said half the interview was about whether you really understand '
                    'what six weeks outdoors in March means.'),
            ('Woman', 'It is July.'),
            ('Man', 'It rains in July. The point is they lose people halfway through every year, '
                    'and a replacement is useless because the training takes a fortnight.'),
            ('Woman', 'So the answer is yes, I have worked outdoors.'),
            ('Man', 'The answer is a specific example. Where, how long, what the worst day was '
                    'like.'),
            ('Woman', 'I did two weeks on a survey in Galway. It rained for eleven of them.'),
            ('Man', 'Say that. Exactly that, with the eleven.'),
            ('Woman', 'And if they ask why the museum?'),
            ('Man', 'Have one thing from their collection that you actually want to see. Not '
                    'because it impresses them — because it stops you giving the answer '
                    'everybody gives.'),
        ],
        items=[
            ('What is the woman worried about?',
             ('Whether she will be offered a place', 'What she will be asked at interview',
              'Whether the internship is paid', 'How to get to the site'), 1,
             'I have no idea what they will ask.'),
            ('What does the man predict they will ask about?',
             ('Her academic marks', 'Working outdoors', 'Her referees',
              'Museum experience'), 1,
             'Half the interview was about whether you understand six weeks outdoors.'),
            ('Why does the museum care about this?',
             ('The work is dangerous', 'People leave halfway through and training takes two '
              'weeks', 'The site closes in bad weather',
              'There are only four places'), 1,
             'A replacement is useless because the training takes a fortnight.'),
            ('What kind of answer does the man recommend?',
             ('A short yes', 'A specific example with details', 'An academic answer',
              'A question back'), 1,
             'Where, how long, what the worst day was like.'),
            ('Why does the man tell her to mention the number eleven?',
             ('It is the number of places', 'It makes the example concrete',
              'It is how long the internship lasts', 'It was her mark'), 1,
             'Say that. Exactly that, with the eleven — the detail is what makes it believable.'),
            ('What does the man advise about the why-this-museum question?',
             ('Praise the collection', 'Name one object she actually wants to see',
              'Mention her tutor', 'Ask about the rota'), 1,
             'Because it stops you giving the answer everybody gives.'),
        ],
    ),

    l2=dict(
        sub='A museum internship',
        caption='An announcement about internship applications',
        poster=['Applications close 14 March — earlier this year',
                'References by 12 March',
                'All six weeks or none'],
        skill=('Hear a deadline that has moved',
               ['When a date is described as earlier than last year, both dates may be tested.',
                'A requirement that has not changed is as testable as one that has.',
                'Listen for the reason a rule exists — it is usually given once.',
                'The final instruction is the usual last question.']),
        warm=[
            ('Woman: When do applications close?',
             ('The fourteenth of March.', 'Four places.', 'At the museum.',
              'Yes, they do.'), 0,
             'When wants a date, and the other options answer how many and where.'),
            ('Man: Has the date changed?',
             ('It is two weeks earlier.', 'On the fourteenth.', 'Two referees.',
              'Yes, six weeks.'), 0,
             'A has-it-changed question is answered by the size of the change.'),
            ('Woman: Can I do four weeks instead of six?',
             ('It runs from July.', 'No — it is all six or none.',
              'Four places are available.', 'Yes, if you ask.'), 1,
             'A can-I question wants permission, and this one refuses with the rule.'),
        ],
        script=[
            ('Man', 'Thornbury Museum internships, and three things that catch people out. '
                    'First, the deadline is the fourteenth of March, which is two weeks earlier '
                    'than last year. Several of you have told me the old date, so please correct '
                    'it wherever you have written it down. Second, references. You give two '
                    'names with email addresses and the museum contacts them itself — you do '
                    'not collect letters. But the museum wants those references by the twelfth, '
                    'two days before your own deadline, because they read the two together. In '
                    'practice that means asking your referees this week, not next. Third, and '
                    'this is the one people argue with me about: you must be free for all six '
                    'weeks, the seventh of July to the fifteenth of August. No partial '
                    'internships. If you have a wedding in the middle of July, apply next year. '
                    'They are not being difficult — training a field intern takes a fortnight, '
                    'so somebody who leaves after four weeks has cost them more than they '
                    'contributed. Four places, and last year there were sixty applications.'),
        ],
        items=[
            ('What has changed since last year?',
             ('The number of places', 'The deadline is two weeks earlier',
              'The dates of the internship', 'References are no longer needed'), 1,
             'And the speaker asks students to correct it wherever they wrote it down.'),
            ('How are references collected?',
             ('Students collect letters', 'The museum contacts the referees',
              'Referees post them', 'Tutors upload them'), 1,
             'You give two names with email addresses and the museum contacts them itself.'),
            ('Why must referees be asked this week?',
             ('They are busy', 'The reference deadline is before the application deadline',
              'The museum reads them last', 'There are only four places'), 1,
             'By the twelfth, two days before your own deadline.'),
            ('Why are partial internships refused?',
             ('There are too many applicants', 'Training takes a fortnight',
              'The site closes in August', 'Insurance does not cover it'), 1,
             'Somebody who leaves after four weeks has cost more than they contributed.'),
            ('What does the speaker say about last year’s applications?',
             ('There were four', 'There were sixty', 'There were twelve',
              'The number is not known'), 1,
             'Four places, and last year there were sixty applications.'),
        ],
    ),

    l3=dict(
        sub='Reading a ruin',
        caption='A talk on how a site is dug',
        board=['Dig in reverse order of deposition',
               'Record before you remove',
               'Context sheet for every layer',
               'Excavation destroys the evidence'],
        skill=('Follow a method that cannot be undone',
               ['A talk about an irreversible process will stress recording. Expect questions '
                'on it.',
                'Listen for the order: what is done before what.',
                'A striking statement (we destroy it) is always tested.',
                'The final instruction is the main idea.']),
        warm=[
            ('Woman: Which layer do you dig first?',
             ('The top one.', 'With a trowel.', 'On a context sheet.',
              'Yes, carefully.'), 0,
             'Which wants one of the layers.'),
            ('Man: Why record everything?',
             ('Because digging destroys it.', 'On the context sheet.',
              'Every layer.', 'Yes, you must.'), 0,
             'Why wants a reason, which only one of the four actually gives.'),
            ('Woman: Can you put a layer back?',
             ('With a trowel.', 'No — that is the whole point.',
              'In reverse order.', 'Yes, afterwards.'), 1,
             'A can-you question about possibility, answered and emphasised.'),
        ],
        script=[
            ('Professor', 'Before you go anywhere near the Westgate site, one idea, and it is '
                          'the one that governs everything else. Excavation is destruction. '
                          'Every layer you remove is removed permanently, and no one will ever '
                          'be able to check your work by looking at the same layer again, '
                          'because it will not be there. A chemist can repeat an experiment. We '
                          'cannot. That single fact explains all the apparently excessive '
                          'paperwork. You dig in reverse order of deposition — the last thing '
                          'to arrive is the first thing to go — and before you remove anything '
                          'you record it: a context sheet for every layer, a plan, levels, '
                          'photographs. Students find this tedious for about three days and then '
                          'something happens that converts them. Usually it is finding a sherd '
                          'under a wall and realising that its position, not the sherd, is what '
                          'dates the wall — and that if you had picked it up without writing '
                          'down where it was, you would have thrown away the only piece of '
                          'information in the trench. So the rule is simple. If you are not sure '
                          'whether something matters, record it. The paper costs nothing and the '
                          'layer costs everything.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Excavation destroys evidence, so recording is everything',
              'Archaeology is tedious at first', 'Westgate is an important site',
              'Chemistry is more reliable than archaeology'), 0,
             'The first idea governs everything else and the final rule follows from it.'),
            ('Why can an excavation not be repeated?',
             ('It is too expensive', 'The layer no longer exists',
              'Sites are protected by law', 'The team changes each year'), 1,
             'Every layer removed is removed permanently.'),
            ('In what order are layers removed?',
             ('Oldest first', 'Reverse order of deposition', 'Largest first',
              'Whichever is most interesting'), 1,
             'The last thing to arrive is the first thing to go.'),
            ('What must be done before anything is removed?',
             ('It must be cleaned', 'It must be recorded', 'It must be photographed only',
              'A supervisor must approve it'), 1,
             'A context sheet for every layer, a plan, levels and photographs.'),
            ('Why does the speaker mention a sherd under a wall?',
             ('To show that pottery is valuable', 'To show that position, not the object, '
              'carries the information', 'To explain how walls are built',
              'To warn about breakages'), 1,
             'Its position, not the sherd, is what dates the wall.'),
            ('What is the rule the speaker gives?',
             ('Record anything you are unsure about', 'Dig slowly',
              'Photograph everything twice', 'Ask a supervisor first'), 0,
             'The paper costs nothing and the layer costs everything.'),
        ],
    ),

    sp=[
        dict(sub='Reading a ruin', focus='past passive forms',
             skill=('Keep was and were clear',
                    ['The auxiliary carries the tense and the number. Do not swallow it.',
                     'Irregular participles matter: built, found, left, taken, known.',
                     'Say by only when the agent is news.',
                     'Finish the sentence even if the participle comes out wrong.']),
             repeat=['The wall was built later.',
                     'The floor was laid over ash.',
                     'The objects were recorded before they were removed.',
                     'The site was abandoned and then occupied again a century later.',
                     'Each change was made for a practical reason rather than a decorative one.',
                     'The sherd was found under the wall, and its position was what dated the building.',
                     'If an object is taken out of the ground without its context, the only information it carried has already been destroyed.'],
             theme='old places you know',
             qs=['First, is there an old building or site near where you grew up?',
                 'People relate to old places differently. How do you feel about that one, and '
                 'why?',
                 'Some people say that ruins should be left exactly as they are rather than '
                 'rebuilt. Do you agree? Why or why not?',
                 'Finally, who should pay to protect historic sites — the government, visitors, '
                 'or nobody? Why?'],
             model=[(2, 'I walked past it every day for years without looking at it, which I now '
                        'think is the normal relationship people have with the past near them.'),
                    (3, 'Mostly I agree. Once you rebuild a ruin you have made a guess, and in '
                        'fifty years nobody will remember which parts were the guess.')],
             selfcheck=['I kept was and were audible',
                        'I used the right irregular participles',
                        'I gave a reason after every opinion']),
        dict(sub='A museum internship', focus='describing experience',
             skill=('Be specific, then be brief',
                    ['Where, how long, what was difficult. Three facts beat three adjectives.',
                     'Numbers make an example believable: two weeks, eleven days of rain.',
                     'Say what you learned from it in one clause, not three.',
                     'Stop when you have answered. A long answer is not a better one.']),
             repeat=['I worked outdoors for two weeks.',
                     'The survey was carried out in Galway last summer.',
                     'It rained on eleven of the fourteen days we were there.',
                     'I was responsible for the finds tray and the daily logbook.',
                     'The hardest part was keeping the paperwork dry rather than the digging.',
                     'I learned that the recording matters more than the finding, which I had not expected.',
                     'If I were asked what I would do differently, I would say that I underestimated how much of the day is spent writing rather than digging.'],
             theme='work experience',
             qs=['To start, have you ever done any kind of work experience?',
                 'People get different things out of it. What did you get out of yours, or hope '
                 'to get, and why?',
                 'Some people argue that unpaid internships are unfair. Do you agree? Why or why '
                 'not?',
                 'Last question. Should a degree course include compulsory work experience? Why '
                 'or why not?'],
             model=[(3, 'I agree, and the reason is simple: an unpaid place is only available to '
                        'somebody who can afford six weeks without earning.'),
                    (4, 'Yes, if the university arranges and pays for it. Compulsory and '
                        'unarranged is the worst combination.')],
             selfcheck=['I gave where, how long and what was difficult',
                        'I used at least one number',
                        'I stopped when I had answered']),
        dict(sub='The first cities', focus='academic register',
             skill=('Correct an explanation politely',
                    ['Use the unit’s words: indicate, deduce, presume, constitute, diminish.',
                     'The usual explanation is… but that does not account for…',
                     'Then give the better one with its evidence.',
                     'Mark yourself against the three statements below.']),
             repeat=['The evidence indicates a later date.',
                     'We can deduce the sequence from the layers.',
                     'Farming alone does not account for the first cities.',
                     'What those valleys had in common was unpredictable flooding.',
                     'The earliest tablets constitute records of debt rather than literature.',
                     'It is usually presumed that writing began with literature, and the evidence indicates the opposite.',
                     'The institutions required to redistribute land after a flood appear to have preceded the cities that grew around them.'],
             theme='the past and how it is explained',
             qs=['First, what period of history did you find most interesting at school?',
                 'People find some explanations more convincing than others. Which explanation '
                 'of the past do you distrust, and why?',
                 'Some people argue that we can never really know why people in the past acted '
                 'as they did. Do you agree? Why or why not?',
                 'Finally, should archaeology be taught in schools? Why or why not?'],
             model=[(2, 'Any explanation that makes people in the past simpler than people now. '
                        'It usually indicates that the evidence is thin.'),
                    (3, 'Partly. We cannot know what anybody intended, but we can often deduce '
                        'what they did, and the second is more useful than people assume.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I corrected an explanation before offering another',
                        'My last answer had an opinion, a reason and an example']),
    ],

    w1=dict(
        sub='Reading a ruin',
        skill=('Past passive questions',
               ['When was it built? — the question word, then was, then the subject.',
                'Who was it built by? puts by at the end in speech.',
                'An embedded version keeps statement order: do you know when it was built.',
                'Use every tile exactly once.']),
        guided=[
            ('The wall was built in the fourth century.',
             ['was', 'when', 'it', 'built'],
             'When was it built?'),
            ('The sherd was found under the wall.',
             ['was', 'where', 'the', 'sherd', 'found'],
             'Where was the sherd found?'),
            ('The site was abandoned after a fire.',
             ['know', 'you', 'do', 'why', 'it', 'was', 'abandoned'],
             'Do you know why it was abandoned?'),
        ],
        exam=[
            ('References are contacted by the museum itself.',
             ['tell', 'can', 'you', 'me', 'whether', 'references', 'are', 'contacted'],
             'Can you tell me whether references are contacted?'),
            ('The deadline was moved two weeks earlier.',
             ['much', 'how', 'was', 'the', 'deadline', 'moved'],
             'How much was the deadline moved?'),
            ('Four places were offered last year.',
             ['places', 'how', 'many', 'were', 'offered'],
             'How many places were offered?'),
            ('The layer was recorded before it was removed.',
             ['know', 'do', 'you', 'when', 'it', 'was', 'recorded'],
             'Do you know when it was recorded?'),
            ('The tablets that were found first were receipts.',
             ['the', 'tablets', 'that', 'were', 'found', 'first', 'were', 'receipts'],
             'The tablets that were found first were receipts.'),
            ('Training a field intern takes a fortnight.',
             ['long', 'how', 'does', 'the', 'training', 'take'],
             'How long does the training take?'),
            ('Lunch and travel are provided but the place is unpaid.',
             ['know', 'do', 'you', 'whether', 'lunch', 'is', 'provided'],
             'Do you know whether lunch is provided?'),
        ],
    ),
    w2=dict(
        sub='A museum internship',
        to='internships@thornburymuseum.org',
        date='11/03/2027',
        subject='Application — one referee may be late',
        scenario=[
            'You have applied for a field internship. One of your two referees is away at a '
            'conference until 13 March and has told you he cannot write before then. The '
            'reference deadline is 12 March and the application deadline is 14 March. Your other '
            'referee has already replied.',
            'Write an email to the museum.',
        ],
        bullets=['Explain the situation and give the dates.',
                 'Ask what you should do.',
                 'Say what you have already arranged.'],
        skill=('Raise a problem before it becomes one',
               ['An email sent before a deadline reads as organised; the same email after reads '
                'as an excuse.',
                'Give every date in full so nothing has to be looked up.',
                'Offer an alternative in case the answer is no.',
                'Seven minutes. 110–140 words.']),
        model=[
            'Dear Internships Office,',
            'I have applied for a field place this summer and I am writing about my references, '
            'before the deadline rather than after it.',
            'One of my referees, Dr Ferreira, has already replied to you. The second, Professor '
            'Aduba, is at a conference until Friday 13 March and has told me he cannot write '
            'before he returns. That is one day after your reference deadline of 12 March, '
            'although still before the application deadline of 14 March.',
            'Could you tell me whether a reference arriving on the thirteenth would still be '
            'read? If it would not, I am happy for my application to be considered with Dr '
            'Ferreira’s reference alone, which I understand is permitted.',
            'Thank you for your help.',
            'Ana Oyelaran',
        ],
        notes=['Before the deadline rather than after it is the sentence that sets the tone of '
               'the whole email.',
               'All three dates are given in full, so the reader never has to check anything.',
               'The fallback uses a rule from the museum’s own email, which shows it was read.',
               'The question is answerable with one word, which is what makes it likely to be '
               'answered quickly.'],
    ),
    w3=dict(
        sub='The first cities',
        prof='Dr Aduba',
        question='Excavation destroys the layers it records, so some archaeologists argue that '
                 'sites should be left untouched until better techniques exist. Others argue '
                 'that sites are being lost to building and erosion faster than techniques '
                 'improve. Should we dig now or wait? Why?',
        posts=[('Idris', 'm',
                'Wait where we can. Every generation has thought its methods were good enough '
                'and every generation has been wrong. Twenty years ago we discarded soil that we '
                'now know carries chemical traces. Whatever we dig today, we are destroying '
                'something we do not yet know how to read.'),
               ('Fern', 'w',
                'That argument has no end point, because it will be just as true in fifty years. '
                'Meanwhile the Westgate site is under a car park that is being extended next '
                'summer. A site excavated imperfectly is recorded. A site under concrete is '
                'gone.')],
        skill=('Notice when an argument has no stopping rule',
               ['An argument that will always be true is not an argument for waiting; it is an '
                'argument for never.',
                'Say so, then say what would make waiting right in a particular case.',
                'Use the lecture’s point that excavation cannot be repeated.',
                'At least 100 words in ten minutes.']),
        starters=['Idris is right about the methods and wrong about what follows:…',
                  'Fern’s point about the car park is not a detail — it is the whole question:…',
                  'What decides it is whether the site is under threat:…',
                  'So I would dig where… and wait where…'],
        model=[
            'Idris is right about the methods and I do not think the conclusion follows. His '
            'argument will be exactly as true in fifty years, which means it is not an argument '
            'for waiting. It is an argument for never digging anything, and nobody holds that.',
            'Fern has found the distinction that actually decides it. The lecture made the point '
            'that excavation cannot be repeated, and that is precisely why a threatened site is '
            'a different case from a safe one. A site under a car park extension is going to be '
            'destroyed either way; the only question is whether it is destroyed with a context '
            'sheet or with a digger.',
            'So I would dig where the site is under threat and wait where it is not, and I would '
            'spend the argument about methods on the second group, where it can actually change '
            'something.',
        ],
        model_words=161,
    ),

    gram=dict(
        title='The past passive',
        headers=['Form', 'Example'],
        rows=[
            ['was / were + past participle', 'The wall was built later.'],
            ['Negative', 'The layer was not recorded.'],
            ['Question', 'When was it built?'],
            ['With by (only if it matters)', 'The site was excavated by students.'],
            ['Past continuous passive', 'The trench was being recorded all morning.'],
            ['Modal passive, past', 'It should have been recorded.'],
            ['In an embedded question', 'Do you know when it was built?'],
        ],
        notes=[
            'Use the past passive when the action matters more than the actor, which in '
            'archaeology is almost always. The wall was rebuilt tells you what happened; who '
            'rebuilt it is usually unknown anyway.',
            'The participle is the third form of the verb: build → built, find → found, '
            'take → taken, leave → left. Regular verbs simply take -ed.',
            'Was being + participle describes something in progress in the past: the trench was '
            'being recorded when it rained.',
        ],
        watch='Do not use the past simple of the main verb after was. It is was found, never '
              '*was find*, and was taken, never *was took*.',
        ex=[
            ('Rewrite in the past passive.',
             ['Someone built the wall in the fourth century. → The wall __________.',
              'They found the sherd under the floor. → The sherd __________.',
              'Nobody recorded the layer. → The layer __________.',
              'Students excavated the trench. → The trench __________ by students.',
              'They abandoned the site after a fire. → The site __________ after a fire.',
              'They were recording the trench all morning. → The trench __________ all morning.'],
             ['was built in the fourth century', 'was found under the floor',
              'was not recorded', 'was excavated', 'was abandoned', 'was being recorded']),
            ('Write a past passive question for each answer.',
             ['__________________?  — In the fourth century.',
              '__________________?  — Under the floor.',
              '__________________?  — By students from Northgate.',
              '__________________?  — Because of a fire.'],
             ['When was it built', 'Where was the sherd found',
              'Who was the trench excavated by', 'Why was the site abandoned']),
            ('Correct the mistake in each sentence.',
             ['The sherd was find under the wall.',
              'The layer was not record before it was removed.',
              'When the wall was built? '],
             ['was found', 'was not recorded', 'When was the wall built?']),
        ],
        bas='Build a Sentence uses the past passive in both shapes: When was it built? and Do '
            'you know when it was built? The inversion disappears as soon as the question is '
            'embedded.',
    ),

    rev=dict(
        vocab=[
            ('based on observation rather than theory', 'empirical'),
            ('coming before the main part', 'preliminary'),
            ('to leave a place for ever', 'abandon'),
            ('to stop', 'cease'),
            ('to work something out from evidence', 'deduce'),
            ('to think something is probably true', 'presume'),
            ('the largest part of something', 'bulk'),
            ('to make up or form', 'constitute'),
            ('to become smaller or less', 'diminish'),
            ('the state of being whole and undamaged', 'integrity'),
            ('a form recording where an object was found', 'context sheet'),
            ('the pile of removed earth beside a trench', 'spoil heap'),
        ],
        gram=[
            ('The wall __________ (build) in the fourth century.', 'was built'),
            ('The sherd __________ (find) under the floor.', 'was found'),
            ('The layer __________ (not / record) before removal.', 'was not recorded'),
            ('The trench __________ (excavate) by students.', 'was excavated'),
            ('When __________ the site __________ (abandon)?', 'was / abandoned'),
            ('The trench __________ (record) all morning when it rained.', 'was being recorded'),
            ('It __________ (should / record) at the time.', 'should have been recorded'),
            ('Do you know when it __________ (build)?', 'was built'),
        ],
        mini=[
            ('According to the passage on page 74, the first cities appeared because',
             ('farming produced surplus food', 'floods destroyed field boundaries and '
              'institutions were needed', 'rivers made travel easy',
              'writing had been invented'), 1,
             'Farming is called true but incomplete; the boundary problem is the real claim.'),
            ('In the talk, the most important reason for recording is that',
             ('supervisors require it', 'excavation cannot be repeated',
              'objects are fragile', 'museums need paperwork'), 1,
             'No one can check your work by looking at the same layer again.'),
            ('Which sentence is correct?',
             ('The sherd was find under the wall.', 'When the wall was built?',
              'The layer was not recorded.', 'The trench was excavate by students.'), 2,
             'The others use the past simple or the base form where the participle is needed, or '
             'fail to invert in a question.'),
            ('A student who can do only four of the six weeks should',
             ('apply and explain', 'apply for collections instead', 'apply next year',
              'ask for a shorter placement'), 2,
             'No partial internships — the speaker is explicit, and gives the training reason.'),
            ('In Complete the Words, a gap after "was" is most likely',
             ('a noun ending', 'a past participle ending', 'an adverb ending',
              'a plural ending'), 1,
             'Was plus a participle is the past passive, which dominates this kind of writing.'),
            ('In Reading, a question asking what a word refers to is testing',
             ('vocabulary', 'reference back to an earlier noun', 'the main idea',
              'the author’s purpose'), 1,
             'These items ask which earlier noun a pronoun or phrase points to.'),
        ],
    ),
    tip='An EXCEPT question wants the one option the passage does not support. Tick off the '
        'three it does and the answer is whatever is left — do not read the options looking for '
        'something that sounds wrong, because three of them will sound right and that is the '
        'point.',
)
