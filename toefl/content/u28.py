# -*- coding: utf-8 -*-
"""Unit 28 — Migration and Demography. Volume 3."""
from content._g import gaps

_GT, _GA = gaps(
    'Populations change in only three ways: births, deaths and movement. Everything else is '
    'commentary. What makes demography difficult is not the arith{metic} but the lag. A '
    'change in the number of births today shows up in the labour force in twenty years and '
    'in pension costs in sixty, which means the consequences of a demographic shift arrive '
    'long after the shift itself has stopped being n{ews}. Governments are therefore '
    'routinely managing the effects of decisions nobody took, in response to a change that '
    'happened before most of the officials involved were b{orn}. This is one of the few areas '
    'of policy where the forecast is genuinely relia{ble} for thirty years ahead, and one of '
    'the fewest where anybody acts on it that far in adv{ance}.')

_ET, _EA = gaps(
    'The word migrant does a great deal of work and conceals most of it. It covers a software '
    'engineer moving between offices, a nurse recruited deliber{ately} by a health service, a '
    'student who stays after graduat{ion}, and somebody who has walked out of a war. These '
    'have almost nothing in com{mon} except the crossing of a border, and treating them as one '
    'category produces statistics that are technically correct and practically '
    'meaning{less}. Public debate compounds the problem by moving between the categories '
    'without announ{cing} it: an argument about pressure on housing, which is about numbers, '
    'is answered with an argument about obliga{tion}, which is about protection, and neither '
    'side notices that they are discussing different peo{ple}. A further difficulty is that '
    'the figure most often quoted is net migration, which is arriv{als} minus departures. A '
    'net figure of zero is compatible with a million people arriving and a million leaving, '
    'and those two situations place complete{ly} different demands on a country. Anybody who '
    'wants to understand the subject has to begin by refusing the single number and asking '
    'which of the underlying flows has actually chan{ged}.')

UNIT = dict(
    n=28, vol=3, level='B2',
    title='Migration and Demography',
    icons=['people', 'globe', 'chart'],
    subs=['Why people move', 'Ageing populations', 'Counting a population'],
    grammar='Nominalisation',
    field='cohort, projection, displacement',
    opener_line='Demography is the one social science that can tell you about 2060 with '
                'confidence, and the one whose findings are most often ignored. This unit '
                'also teaches nominalisation — turning a process into a thing — which is how '
                'academic English packs a clause into a noun phrase.',
    candos=[
        'I can turn a verb phrase into a noun phrase and back again.',
        'I can see when a nominalisation is hiding who did something.',
        'I can read a statistic and ask what it is a net figure of.',
        'I can separate categories that a single word has merged.',
        'I can write about a contested topic without taking a side I did not argue for.',
        'I can follow a talk that corrects the terms of a public debate.',
    ],

    acad=[
        ('cohort', 'everyone born in the same period'),
        ('projection', 'what the numbers give if trends continue'),
        ('displacement', 'being forced to leave where you live'),
        ('fertility', 'the average number of children per woman'),
        ('mortality', 'the rate at which people die'),
        ('census', 'an official count of the whole population'),
        ('diaspora', 'a people settled far from their homeland'),
        ('remittance', 'money sent home by somebody working abroad'),
        ('assimilation', 'becoming indistinguishable from the host population'),
        ('dependency', 'the ratio of non-workers to workers'),
        ('urbanisation', 'the movement of a population into cities'),
        ('outflow', 'the number of people leaving'),
        ('pyramid', 'a chart of population by age and sex'),
        ('replacement', 'the fertility rate that keeps a population level'),
        ('influx', 'a large arrival over a short period'),
        ('settlement', 'staying permanently in a new country'),
        ('longevity', 'how long people live'),
        ('naturalise', 'to become a citizen of a new country'),
    ],
    family=('project', [
        ('projection', 'noun', 'the projection assumes constant fertility'),
        ('projected', 'adjective', 'the projected dependency ratio'),
        ('projecting', 'noun', 'projecting forty years ahead is routine here'),
    ]),
    collocs=[
        ('net of', 'after subtracting'),
        ('in absolute terms', 'as a raw number, not a proportion'),
        ('per head', 'divided by the population'),
        ('a drain on', 'a cost to'),
        ('place demands on', 'to require resources from'),
        ('break down the figure', 'to separate it into its parts'),
        ('take account of', 'to include in the reasoning'),
        ('year on year', 'comparing each year with the one before'),
        ('in the long term', 'over decades rather than years'),
        ('at the other end of the scale', 'at the opposite extreme'),
    ],
    stance=[
        ('is uncontroversial', 'nobody argues about this part'),
        ('to a large extent', 'mostly, with qualification'),
        ('is commonly assumed', 'taken for granted, perhaps wrongly'),
        ('is frequently conflated', 'the writer says two things get mixed up'),
        ('tells us very little', 'the writer dismisses it as evidence'),
    ],
    nuance=[
        ('emigrate / immigrate', 'to leave a country / to enter one'),
        ('refugee / migrant', 'a legal status / a description of movement'),
        ('rate / number', 'per head of population / the raw total'),
    ],
    vocab_talk=[
        'What would make you leave the place you live?',
        'Why does a falling birth rate take so long to matter?',
        'What does a net migration figure of zero not tell you?',
        'Who should be counted in a census, and who decides?',
    ],
    again=['net migration', 'dependency ratio', 'birth rate', 'population pyramid',
           'brain drain', 'push and pull factors', 'ageing society', 'labour shortage'],

    r1=dict(
        sub='Why people move',
        skill=('Nominalising suffixes',
               ['This page is dense in nouns made from verbs: -ation, -ment, -ance, -ence.',
                'If the gap follows a determiner and the sentence has no other noun, the '
                'gap is the noun.',
                'Reading the sentence as a verb first often gives you the stem: graduate '
                'becomes graduation.']),
        guided_text=_GT, guided=_GA,
        guided_hint='arith{metic} is arithmetic — it follows the and names the easy part, so '
                    'it is a noun.'.replace('{', '').replace('}', ''),
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='Ageing populations',
        skill=('Reading a projection and its assumptions',
               ['A projection is not a prediction. It says what follows if stated '
                'assumptions hold.',
                'The assumptions are always listed, usually in smaller type, and they are '
                'where the questions come from.',
                'Changing one assumption can change the headline by a factor of two.']),
        docs=[
            ('notice', 'Office for Population Statistics · 2027 national projection', [
                '# Headline',
                'The population is projected to peak at 74.1 million in 2043 and fall '
                'thereafter.',
                '# Principal assumptions',
                '* Fertility steady at 1.49 children per woman, the 2026 figure.',
                '* Life expectancy rising by about one year per decade.',
                '* Net migration of 245,000 a year throughout.',
                '# Variant projections',
                '* High migration (+100,000): no peak before 2060.',
                '* Zero net migration: peak in 2031, then a fall of 4.8 million by 2060.',
                '# Status',
                '* A projection, not a forecast. It shows the consequences of the '
                'assumptions above.',
            ], 'notice'),
            ('social', 'Dr Kofi Adjei', '@kofi_demog', [
                'Every year the projection comes out and every year the coverage picks the',
                'headline and drops the assumptions. Both of these are true today:',
                '',
                '"Population to peak in 2043 and then fall."',
                '"Population still rising in 2060."',
                '',
                'They are the same document. The difference is one assumption about net',
                'migration, which is the thing nobody can forecast and everybody argues',
                'about. The number you see in a headline is a choice somebody made about',
                'that single input, and it is almost never stated.',
            ], 'm'),
        ],
        guided=[
            ('When is the population projected to peak on the principal assumptions?',
             ('2031', '2043', '2060', 'It does not peak'), 1,
             'The headline gives 2043 at 74.1 million, on the principal assumptions listed '
             'beneath it.'),
            ('What fertility rate is assumed?',
             ('1.49', '1.80', '2.10', '2.45'), 0,
             'The 2026 figure of 1.49 is held steady throughout, which is itself a strong '
             'assumption.'),
            ('What does the zero net migration variant show?',
             ('A peak in 2043', 'A peak in 2031 and a fall of 4.8 million by 2060',
              'No peak before 2060', 'No change'), 1,
             'That variant is listed explicitly and is the largest departure from the '
             'headline.'),
            ('What does the notice say about the status of the figures?',
             ('They are a forecast', 'They are a projection showing the consequences of assumptions',
              'They are provisional', 'They are a government target'), 1,
             'The status section draws that distinction deliberately, which is the point '
             'Dr Adjei then says the coverage loses.'),
        ],
        exam=[
            ('What is Dr Adjei’s main complaint?',
             ('The projection is wrong', 'Coverage takes a headline and drops the assumptions',
              'The assumptions are unrealistic', 'The variants are not published'), 1,
             'He says both statements are true of the same document, which is only possible '
             'because the assumption is never reported.'),
            ('How can both quoted headlines be true?',
             ('They cover different years', 'They rest on different migration assumptions',
              'One is a forecast and one a projection', 'One is out of date'), 1,
             'The difference is one assumption about net migration, which he names as the '
             'single input that moves the answer.'),
            ('What does Dr Adjei say about forecasting net migration?',
             ('It is straightforward', 'Nobody can do it and everybody argues about it',
              'It is done annually', 'It depends on fertility'), 1,
             'That combination — unforecastable and contested — is why it is the lever that '
             'moves the headline.'),
            ('What is "almost never stated" in coverage?',
             ('The year of the peak', 'The choice of migration assumption',
              'The fertility rate', 'The source of the data'), 1,
             'The number you see is a choice about that single input, and the choice goes '
             'unreported.'),
            ('Which assumption would most change the 2043 peak?',
             ('Fertility', 'Life expectancy', 'Net migration', 'The base year'), 2,
             'The two variants both vary migration and move the peak by decades or remove '
             'it, which the other assumptions do not.'),
            ('What does "a projection, not a forecast" mean?',
             ('It is less accurate', 'It states consequences of assumptions rather than predicting',
              'It covers a shorter period', 'It is unofficial'), 1,
             'The notice defines it that way, and it is why the variants exist alongside the '
             'principal projection.'),
            ('What can be inferred about Dr Adjei’s view of the statisticians?',
             ('He blames them for the headlines', 'He does not blame them',
              'He thinks the method is flawed', 'He wants fewer variants'), 1,
             'His complaint is entirely about coverage, and he notes the document itself '
             'contains both answers openly.'),
        ],
    ),

    r3=dict(
        sub='Counting a population',
        title='The Census and the People It Misses',
        words=268,
        paras=[
            'A census aims at something no other survey attempts: counting everybody. The '
            'ambition is what makes it valuable and what makes its failures interesting. No '
            'census has ever succeeded, and the people it misses are not missed at random. '
            'They are disproportionately young, mobile, poor, and living in households that '
            'do not match the form.',

            'That last point is commonly assumed to be minor, and is frequently conflated with a '
            'simple shortage of effort. A census form '
            'is built around a household with a recognisable head, at a fixed address, on one '
            'night. People in temporary accommodation, people moving between two homes, '
            'people whose landlord would rather they were not recorded, and people sharing a '
            'flat with four others on short tenancies are all harder to count, and all of '
            'them are concentrated in the same places. The undercount is therefore '
            'geographically clustered, which matters enormously, because census figures '
            'determine funding allocations per head.',

            'An area that is undercounted by five per cent receives five per cent less for a '
            'decade, and the effect is self-reinforcing: the services that would reach the '
            'uncounted are the services the undercount defunds. Statistical agencies know '
            'this and adjust for it, using follow-up surveys to estimate the miss. The '
            'adjustment is uncontroversial among statisticians and ferociously contested in '
            'public, because adjusting a count feels like changing an answer, and because the '
            'direction of the adjustment is always the same. To a large extent the argument '
            'is not about statistics at all. It is about whether a number that has been '
            'corrected is still a count, and that question has no technical answer.',
        ],
        skill=('Reading a text about a self-reinforcing problem',
               ['Watch for a loop: X causes Y, and Y makes X worse. The loop is usually the '
                'point of the passage.',
                'The author will normally state it in one sentence and then draw out the '
                'consequence.',
                'An item often asks what breaks or sustains the loop.']),
        guided=[
            ('What is unusual about a census?',
             ('It is voluntary', 'It aims to count everybody',
              'It is run every year', 'It uses a sample'), 1,
             'The first sentence names the ambition that distinguishes it from every other '
             'survey.'),
            ('Who does a census tend to miss?',
             ('The elderly', 'The young, mobile and poor', 'Homeowners', 'Civil servants'), 1,
             'The first paragraph lists them and stresses that the misses are not random.'),
            ('Why is the undercount geographically clustered?',
             ('Forms are delivered unevenly', 'The hardest-to-count groups live in the same places',
              'Rural areas are remote', 'Cities have more people'), 1,
             'Each of the groups named is concentrated in the same areas, which turns a '
             'statistical problem into a funding one.'),
            ('The word "self-reinforcing" in the third paragraph means',
             ('easy to correct', 'making itself worse over time',
              'officially approved', 'repeated every decade'), 1,
             'The services that would reach the uncounted are the ones the undercount '
             'defunds, which is the loop.'),
        ],
        exam=[
            ('Why does the undercount matter so much?',
             ('It affects the headline total', 'Funding is allocated per head on census figures',
              'It delays publication', 'It affects fertility estimates'), 1,
             'An area undercounted by five per cent receives five per cent less for a decade, '
             'which is the mechanism.'),
            ('How do statistical agencies respond?',
             ('They repeat the census', 'They adjust using follow-up surveys',
              'They publish a range', 'They do nothing'), 1,
             'Follow-up surveys estimate the miss and the count is adjusted, which is '
             'standard practice.'),
            ('Why is the adjustment contested in public?',
             ('It is statistically doubtful',
              'Adjusting a count feels like changing an answer, and always moves one way',
              'It is expensive',
              'It delays funding decisions'), 1,
             'Both reasons are given together, and the author treats the second as the one '
             'that generates the heat.'),
            ('What does the author say about the statisticians’ view?',
             ('It is divided', 'The adjustment is uncontroversial among them',
              'They oppose adjustment', 'They have not studied it'), 1,
             'Uncontroversial among statisticians is set directly against ferociously '
             'contested in public.'),
            ('What is the question the author says has no technical answer?',
             ('How many people were missed',
              'Whether a corrected number is still a count',
              'How to design the form',
              'Which areas are undercounted'), 1,
             'The final sentence names it and says explicitly that statistics cannot settle '
             'it.'),
            ('What is "commonly assumed to be minor"?',
             ('The undercount of the elderly', 'The mismatch between households and the form',
              'The cost of a census', 'The length of the form'), 1,
             'The second paragraph opens by flagging that assumption and then spends the '
             'rest of itself refuting it.'),
            ('All of the following are named as hard to count EXCEPT:',
             ('People in temporary accommodation', 'People moving between two homes',
              'People sharing on short tenancies', 'People living alone'), 3,
             'Living alone is never mentioned; the other three appear in the same list.'),
            ('What does the structure of the argument suggest about the author’s purpose?',
             ('To defend the census', 'To show that a technical problem has political consequences',
              'To criticise statisticians', 'To propose a new method'), 1,
             'The passage moves from who is missed to how funding follows to why the fix is '
             'resisted, which is a path from method to politics.'),
            ('Which change would most reduce the problem described?',
             ('A longer form', 'A design that does not assume a fixed household at one address',
              'More frequent censuses', 'Publishing the adjustment'), 1,
             'The second paragraph locates the cause in the form’s assumptions about '
             'households, so changing those addresses the cause rather than the symptom.'),
        ],
    ),

    l1=dict(
        sub='Why people move',
        caption='Two students preparing a presentation',
        skill=('Hearing a category being split',
               ['One speaker will often show that a single word covers several different '
                'things.',
                'Listen for: that is three different groups; which of those do you mean.',
                'The item asks what the distinction is, not what the word means.']),
        warm=[
            ('Man: Our topic is migration. Where do we start?',
             ('By deciding which kind we mean.', 'Yes, it is a big topic.',
              'About fifteen minutes.', 'On Thursday.'), 0,
             'An open question about starting, answered with the first analytical step '
             'rather than a logistic detail.'),
            ('Woman: Is net migration the right figure to use?',
             ('Only if you also give the two flows.', 'Yes, it is official.',
              'About 245,000.', 'It is published annually.'), 0,
             'A question about a measure, answered with the condition under which it is '
             'informative.'),
            ('Man: Should we mention remittances?',
             ('It would surprise people how large they are.', 'Yes, we should.',
              'About forty slides.', 'They are sent home.'), 0,
             'A should-we question invites a reason, which is what makes the answer useful.'),
        ],
        script=[
            ('Man', 'Our topic is migration. Where do we start?'),
            ('Woman', 'By deciding which kind we mean, otherwise the presentation will be '
                      'about four things at once.'),
            ('Man', 'It is one word.'),
            ('Woman', 'It is one word covering a consultant moving between offices, a nurse '
                      'actively recruited by a hospital, a student who stays on after '
                      'finishing, and somebody who has left a war. Those four have nothing in '
                      'common except a border.'),
            ('Man', 'They are all in the same statistic, though.'),
            ('Woman', 'They are, and that is exactly the problem. If you argue about housing '
                      'pressure you are talking about numbers. If somebody answers with '
                      'obligations to refugees, they are talking about protection. Both can '
                      'be right because they are about different people.'),
            ('Man', 'So we pick one.'),
            ('Woman', 'We pick one and say so in the first thirty seconds. I would take '
                      'labour migration, because the data are decent and the argument is '
                      'actually about economics rather than about values.'),
            ('Man', 'Is net migration the right figure to use?'),
            ('Woman', 'Only if you also give the two flows. Net zero can mean nobody moved or '
                      'a million people each way, and those are completely different '
                      'countries.'),
            ('Man', 'That is a good slide, actually.'),
            ('Woman', 'It is the whole presentation in one slide, which is usually a sign you '
                      'should open with it.'),
        ],
        items=[
            ('Why does the woman want to narrow the topic?',
             ('There is not enough time', 'Otherwise they will be discussing four different things',
              'The data are poor', 'The tutor asked them to'), 1,
             'She names four groups with nothing in common except a border, which is the '
             'reason she gives.'),
            ('What four groups does she name?',
             ('Students, tourists, workers, refugees',
              'A consultant, a recruited nurse, a student who stays, somebody leaving a war',
              'Refugees, citizens, visitors, residents',
              'Men, women, children, families'), 1,
             'Those are her four, chosen because they are all captured by the same '
             'statistic.'),
            ('Why can two people both be right in the housing argument?',
             ('The data are unreliable', 'They are talking about different people',
              'Both are using net figures', 'Neither has evidence'), 1,
             'One argument is about numbers and the other about protection, and the single '
             'word hides the switch.'),
            ('Why does she choose labour migration?',
             ('It is easier', 'The data are good and the argument is economic rather than moral',
              'It is what the tutor wants', 'It has fewer categories'), 1,
             'She gives both reasons together, which is also an argument about what a '
             'presentation can handle.'),
            ('What is wrong with using net migration alone?',
             ('It is out of date', 'Net zero is compatible with very different situations',
              'It excludes students', 'It is not published'), 1,
             'Nobody moving and a million each way produce the same net figure and '
             'completely different countries.'),
            ('What does the woman mean by "the whole presentation in one slide"?',
             ('The slide is too full', 'That point carries the entire argument',
              'They need only one slide', 'The slide should be last'), 1,
             'She follows it by saying that is usually a sign you should open with it, which '
             'treats it as the central claim.'),
            ('What is the relationship between the speakers?',
             ('Tutor and student', 'Two students, one leading the analysis',
              'Strangers', 'Researcher and interviewee'), 1,
             'They are preparing a presentation together and she is doing the structuring, '
             'which he accepts.'),
        ],
    ),

    l2=dict(
        sub='Ageing populations',
        caption='A briefing on the new population projection',
        poster=['2027 projection published Thursday',
                'Principal and four variant projections',
                'Briefing for press 10.00, Room 4'],
        skill=('Hearing a warning about how figures will be used',
               ['A speaker releasing figures often predicts the misuse before it happens.',
                'Listen for: what will be reported is, the line you will see tomorrow.',
                'The prediction and the correction are both tested.']),
        warm=[
            ('Woman: Which projection is the main one?',
             ('The principal, but it is one of five.', 'Yes, there is a main one.',
              'About 74 million.', 'On Thursday.'), 0,
             'A which question answered with the name and the context that makes it '
             'meaningful.'),
            ('Man: Is this a forecast of what will happen?',
             ('No — it is what follows if the assumptions hold.', 'Yes, essentially.',
              'Until 2060.', 'It is official.'), 0,
             'A yes/no about status, corrected with the definition that the whole briefing '
             'turns on.'),
            ('Woman: Which assumption matters most?',
             ('Net migration, by a long way.', 'They all matter.',
              'About 245,000.', 'Fertility is assumed steady.'), 0,
             'A which-matters-most question wants a ranking, and the answer gives one '
             'decisively.'),
        ],
        script=[
            ('Man', 'Thursday’s publication contains five projections, not one, and I want to '
                    'say in advance what I expect to see reported, because it happens every '
                    'time. The principal projection shows a peak at 74.1 million in 2043 and '
                    'a decline after that. That will be the headline. What will not be in the '
                    'headline is that the principal projection assumes net migration of '
                    '245,000 a year for thirty-three years, which is not a prediction, it is '
                    'a working assumption. Change it to zero and the peak arrives in 2031. '
                    'Add a hundred thousand and there is no peak at all before 2060. All '
                    'three of those sentences describe the same document. Now, I am not '
                    'complaining about journalists; a headline cannot carry an assumption. '
                    'What I would ask is that anyone writing about this says which variant '
                    'they are using, in the piece, once. That is the whole request. One '
                    'clause. And if you are reading rather than writing, the question to ask '
                    'of any population figure you see this week is: what did they assume '
                    'about migration? If the piece does not say, you are not being told the '
                    'number, you are being told somebody’s choice of input.'),
        ],
        items=[
            ('How many projections are being published?',
             ('One', 'Three', 'Five', 'Fifty'), 2,
             'He opens with five, not one, and the rest of the briefing is about why that '
             'matters.'),
            ('What does the principal projection assume about migration?',
             ('Zero', '100,000 a year', '245,000 a year', 'It varies'), 2,
             'He calls it a working assumption rather than a prediction, held for thirty-'
             'three years.'),
            ('What happens to the peak under zero net migration?',
             ('It disappears', 'It moves to 2031', 'It moves to 2060', 'It stays at 2043'), 1,
             'That is the variant he quotes, and it is twelve years earlier than the '
             'headline.'),
            ('What is the speaker’s request?',
             ('That journalists use the principal projection',
              'That any piece state which variant it uses, once',
              'That the figures be embargoed',
              'That headlines include the assumptions'), 1,
             'He is explicit that a headline cannot carry an assumption and asks only for one '
             'clause in the body.'),
            ('What does he suggest readers ask?',
             ('How many people were surveyed', 'What was assumed about migration',
              'Who published the figures', 'When the census was taken'), 1,
             'That is the question he gives the audience for anything they read this week.'),
            ('What is the speaker’s attitude to journalists?',
             ('Critical', 'Explicitly not complaining about them',
              'Indifferent', 'Hostile'), 1,
             'I am not complaining about journalists is followed by an acknowledgement that '
             'a headline genuinely cannot carry the caveat.'),
        ],
    ),

    l3=dict(
        sub='Counting a population',
        caption='A lecture on census undercount',
        board=['Nobody is counted exactly',
               'The miss is not random',
               'Undercount → underfunding → undercount',
               'Adjustment: technical, not political'],
        skill=('Following a talk that separates a technical and a political question',
               ['A careful lecturer will say which parts of a dispute are settled and which '
                'are not.',
                'Listen for: that part is uncontroversial; this part is not a statistical '
                'question at all.',
                'The division is usually the examinable content.']),
        warm=[
            ('Woman: Does a census count everybody?',
             ('No census ever has.', 'Yes, that is the point of it.',
              'Every ten years.', 'About 74 million.'), 0,
             'A yes/no question about the ideal, answered with the historical fact that '
             'undercuts it.'),
            ('Man: Is the undercount spread evenly?',
             ('No, and that is what makes it serious.', 'Yes, roughly.',
              'About five per cent.', 'It is measured afterwards.'), 0,
             'A question about distribution, answered with the fact and why it matters.'),
            ('Woman: Do statisticians disagree about adjusting?',
             ('Not really — the public argument is elsewhere.', 'Yes, strongly.',
              'About follow-up surveys.', 'It is adjusted every time.'), 0,
             'A question about professional disagreement, answered by locating the real '
             'dispute.'),
        ],
        script=[
            ('Woman', 'I want to separate two questions that always get argued as one. '
                      'Question one is technical: how many people did the census miss, and '
                      'who were they? That question has an answer, we have good methods for '
                      'getting at it, and the answer is always the same in shape. We miss '
                      'young people, mobile people, poor people, and anybody whose living '
                      'arrangement does not fit the form. A raw total on its own tells us very little '
                      'about any of that. The form is built around a household with a head '
                      'at a fixed address. Crucially, those groups are not spread evenly '
                      'across the country. They cluster. So the undercount clusters, and '
                      'since funding is allocated per head on census figures, the areas with '
                      'the biggest undercount receive the least money, for a decade, for '
                      'services that would have reached the people who were missed. That is a '
                      'loop, and it is the reason this is not an academic problem. Now '
                      'question two, which is not technical at all. Should the published '
                      'figure be the raw count or the adjusted one? Among statisticians the '
                      'adjustment itself is uncontroversial — it is standard practice and the '
                      'methods are public. The public argument is about something else '
                      'entirely: whether a corrected number is still a count, and whether an '
                      'adjustment that always moves in one direction can be trusted. Those '
                      'are reasonable questions and they are frequently conflated with the '
                      'first set, which is not reasonable, because the first set has answers '
                      'and the second does not.'),
        ],
        items=[
            ('What are the two questions the speaker separates?',
             ('Who to count and when to count', 'Who was missed, and whether to publish an adjusted figure',
              'How much a census costs and who pays', 'Technical and historical'), 1,
             'She labels the first technical and the second explicitly not technical at all.'),
            ('Who does the census miss?',
             ('Older homeowners', 'The young, mobile, poor and those outside standard households',
              'People in rural areas', 'Recent arrivals only'), 1,
             'That list is given with the form’s household assumption as the unifying cause.'),
            ('Why does the clustering matter?',
             ('It makes the total wrong', 'Funding per head follows the count, so undercounted areas lose money',
              'It affects the next census', 'It delays publication'), 1,
             'She traces the chain from clustering to allocation to a decade of reduced '
             'funding.'),
            ('What is the "loop" she describes?',
             ('Undercount reduces funding for the services that would reach the missed',
              'Each census misses more people than the last',
              'Funding rises as population falls',
              'Adjustment increases the count each time'), 0,
             'She states it directly and calls it the reason the problem is not academic.'),
            ('What do statisticians think about adjustment?',
             ('They are divided', 'It is uncontroversial and the methods are public',
              'They oppose it', 'They have not studied it'), 1,
             'She contrasts that professional consensus with the public argument that '
             'follows.'),
            ('What is the public argument actually about?',
             ('Whether the methods work',
              'Whether a corrected number is still a count, and one-directional adjustment',
              'Who pays for the census',
              'How often to count'), 1,
             'Those are the two she names, and she calls them reasonable questions.'),
            ('What does the speaker call unreasonable?',
             ('Asking about adjustment', 'Conflating the two sets of questions',
              'Publishing a raw count', 'Running a census at all'), 1,
             'She grants the second questions are reasonable and objects only to merging '
             'them with the first, which does have answers.'),
        ],
    ),

    sp=[
        dict(
            sub='Why people move',
            focus='stressing the noun in a long noun phrase',
            skill=('Repeating a nominalised sentence',
                   ['Nominalisation produces long noun phrases with one head noun. The '
                    'stress goes on the head.',
                    'The crossing of a border — stress crossing, not border.',
                    'If you stress the wrong word the listener loses the structure.']),
            repeat=[
                'People move for many reasons.',
                'The word covers very different cases.',
                'They share nothing except the crossing of a border.',
                'An argument about housing is an argument about numbers.',
                'The conflation of protection with pressure makes the debate impossible.',
                'A net figure of zero is compatible with a million arrivals and a million departures.',
                'Anybody who wants to understand the subject has to begin by refusing the single number and asking which flow has actually changed.',
            ],
            theme='moving, staying and what makes somewhere home',
            qs=[
                'Thank you for joining me. To begin, have you ever lived somewhere other than '
                'where you grew up? What was hardest?',
                'People give very different reasons for moving country — work, study, safety, '
                'family. Does the reason change how they should be treated? Why?',
                'Now your opinion. Should a country be able to recruit nurses and doctors from '
                'places that have too few of their own? Why or why not?',
                'A final question. What makes somewhere home — time, legal status, or '
                'something else?',
            ],
            model=[(2, 'In law it clearly does, and I think it should. But in daily life it '
                       'makes less difference than people expect. Somebody arriving for work '
                       'and somebody arriving from a war both have to find a flat.'),
                   (3, 'Not without compensation of some kind. Training a doctor is a large '
                       'public investment, and recruiting one is taking that investment '
                       'without paying for it.')],
            selfcheck=['I stressed the head noun in each phrase.',
                       'I kept the long noun phrase together.',
                       'I distinguished two categories explicitly.'],
        ),
        dict(
            sub='Ageing populations',
            focus='saying large numbers and dates fluently',
            skill=('Handling figures in a spoken answer',
                   ['Big numbers derail fluency. Practise the shapes: seventy-four point '
                    'one million, two hundred and forty-five thousand.',
                    'Say a date as a unit: twenty forty-three, not two zero four three.',
                    'If you are unsure of a figure, round it and say you are rounding.']),
            repeat=[
                'The population is still growing.',
                'It is projected to peak in 2043.',
                'The principal projection assumes 245,000 a year.',
                'Change that to zero and the peak arrives twelve years earlier.',
                'Seventy-four point one million is the figure the headline will carry.',
                'Five projections are published and only one of them is ever reported.',
                'If you are reading about population this week, the question to ask is what the piece assumed about migration, because that single input decides the answer.',
            ],
            theme='ageing, work and who supports whom',
            qs=[
                'Thanks for taking part. First, is the population where you are from getting '
                'older? How do people talk about it?',
                'Societies with more older people and fewer workers face hard choices. Which '
                'do you think is fairest: later retirement, higher taxes, or more migration?',
                'Now your opinion. Should governments try to raise the birth rate? Can they? '
                'Why or why not?',
                'And finally. Is an ageing population a problem to be solved or a success to '
                'be managed? Why?',
            ],
            model=[(2, 'Later retirement, if the work is survivable. The difficulty is that '
                       'it is easy for me to say and much harder for somebody who has been '
                       'doing physical work since they were sixteen.'),
                   (4, 'A success, mostly. People living thirty years longer than their '
                       'grandparents is the outcome everybody wanted, and complaining about '
                       'the cost of it is a strange way to describe winning.')],
            selfcheck=['I said the large numbers without hesitating.',
                       'I said dates as units.',
                       'I rounded openly where I was unsure.'],
        ),
        dict(
            sub='Counting a population',
            focus='marking a distinction audibly',
            skill=('Separating two questions out loud',
                   ['When two issues are being confused, say so and number them. One is '
                    'technical. Two is not.',
                    'Pause between them. The pause does the work the paragraph break does '
                    'in writing.',
                    'Then say which one you are answering.']),
            repeat=[
                'A census misses people.',
                'The misses are not random.',
                'Undercounted areas receive less money.',
                'That is a loop rather than a one-off error.',
                'The adjustment is uncontroversial among the people who do it.',
                'The public argument is about whether a corrected number is still a count.',
                'Those two questions get argued as one, and only the first of them has an answer that statistics can supply.',
            ],
            theme='counting, funding and trust in numbers',
            qs=[
                'Thank you for your time. To start, have you ever filled in a census or an '
                'official form that did not fit your situation?',
                'Official statistics are adjusted in various ways. Does adjusting a number '
                'make it more accurate or less trustworthy, in your view?',
                'Now your opinion. Should the raw count and the adjusted figure both be '
                'published, even if that confuses people? Why?',
                'A last question. If an area is undercounted and therefore underfunded, whose '
                'responsibility is it to fix that?',
            ],
            model=[(2, 'More accurate and less trusted at the same time, which is the real '
                       'difficulty. People can follow the method if it is explained, but the '
                       'explanation never travels as far as the number does.'),
                   (3, 'Both, with the method attached. Publishing only the adjusted figure '
                       'invites exactly the suspicion that makes adjustment controversial in '
                       'the first place.')],
            selfcheck=['I numbered the two questions.',
                       'I paused between them.',
                       'I said which one I was answering.'],
        ),
    ],

    w1=dict(
        sub='Questions about figures',
        skill=('Build a Sentence with a nominalised subject',
               ['Some items put a long noun phrase in the subject: the crossing of a '
                'border, the conflation of two arguments.',
                'The whole phrase is the subject and the verb follows it, however long it '
                'gets.',
                'Inside an embedded question it still keeps statement order.']),
        guided=[
            ('The figure quoted is net migration.',
             ['know', 'do', 'you', 'what', 'two flows', 'the', 'behind it', 'are', 'actually'],
             'Do you know what the two flows behind it actually are?'),
            ('The projection assumes 245,000 a year.',
             ['us', 'told', 'nobody', 'which', 'variant', 'the article', 'was', 'using', 'actually'],
             'Nobody told us which variant the article was actually using.'),
            ('My tutor queried the category we had chosen.',
             ['she', 'why', 'to know', 'wanted', 'we', 'had', 'labour migration', 'chosen', 'specifically'],
             'She wanted to know why we had specifically chosen labour migration.'),
        ],
        exam=[
            ('The undercount is geographically clustered.',
             ['do', 'whether', 'know', 'you', 'that', 'is', 'in the report', 'at all', 'mentioned'],
             'Do you know whether that is mentioned in the report at all?'),
            ('Five projections were published on Thursday.',
             ['to know', 'nobody', 'seems', 'how many', 'of them', 'were', 'reported', 'actually', 'anywhere'],
             'Nobody seems to know how many of them were actually reported anywhere.'),
            ('Net zero can mean nobody moved or a million each way.',
             ['explain', 'can', 'anybody', 'why', 'that', 'matters', 'so much', 'to me', 'exactly'],
             'Can anybody explain to me exactly why that matters so much?'),
            ('Funding follows the census figure.',
             ['know', 'does', 'anybody', 'how long', 'an undercount', 'an area', 'affects', 'actually', 'for'],
             'Does anybody know how long an undercount actually affects an area for?'),
            ('The adjustment always moves in one direction.',
             ['told', 'she', 'us', 'why', 'that', 'makes', 'people', 'suspicious', 'exactly'],
             'She told us exactly why that makes people suspicious.'),
            ('The form assumes a household with a head at one address.',
             ('the conflation', 'of two questions', 'is', 'what', 'makes', 'the argument', 'impossible', 'to', 'settle'),
             'The conflation of two questions is what makes the argument impossible to settle.'),
            ('A projection is not a forecast.',
             ['whether', 'tell', 'can', 'me', 'you', 'the piece', 'says', 'which', 'anywhere'],
             'Can you tell me whether the piece says which anywhere?'),
        ],
    ),

    w2=dict(
        sub='Ageing populations',
        to='letters@thenorthgateleader.co.uk',
        date='02/06/2027',
        subject='Your population headline on Friday',
        scenario=[
            'A local paper ran the headline "Population to shrink from 2031" above a story '
            'about the national projection. That date comes from the zero net migration '
            'variant, not the principal projection, which gives 2043. The article does not '
            'say which variant it used. You are a geography student.',
            'Write a letter to the paper.',
        ],
        bullets=['Say what the article got right.',
                 'Explain the error precisely, without accusing anyone of bias.',
                 'Say what one sentence would have fixed it.',
            ],
        skill=('Correcting a publication briefly',
               ['A letter that will be printed is short, specific and does not impute '
                'motive.',
                'Give the two figures and where each comes from. The reader can then see '
                'the error without being told it is one.',
                'Name the fix in one sentence so the paper knows the cost of agreeing is '
                'small.']),
        model=[
            'Sir,',
            '',
            'Your report on the national population projection (Friday) was right that the '
            'population is expected to fall, and right that this is a significant change.',
            '',
            'The date is the difficulty. Your headline gives 2031. The projection published '
            'on Thursday contains five variants, and 2031 is the peak under the variant that '
            'assumes net migration of zero every year until 2060. The principal projection, '
            'which assumes 245,000 a year, gives 2043. Both numbers are in the same document '
            'and the article does not say which one it used.',
            '',
            'I am not suggesting anyone chose the dramatic figure deliberately; the variants '
            'are easy to mix up and the document is long. But a reader who takes 2031 from '
            'your headline has been given somebody’s assumption about migration, not a '
            'finding about population.',
            '',
            'One clause would have fixed it: "on the assumption of zero net migration". That '
            'is the whole correction I am asking for.',
            '',
            'Marta Olsson',
            'Second-year Geography, Northgate',
        ],
        notes=['It opens by granting what the article got right, which earns the rest a '
               'reading.',
               'Both figures are given with their sources, so the error is visible rather '
               'than asserted.',
               'Motive is explicitly disclaimed, which removes the paper’s easiest defence.',
               'The fix is one clause, quoted, so agreeing costs nothing.'],
        bandpair=dict(
            mid=[
                'Sir,',
                'I am writing about your article on Friday about the population projection. '
                'As a geography student I was very surprised to see the headline saying the '
                'population will shrink from 2031, because this is not what the projection '
                'actually says.',
                'The real figure is 2043. The number you have used, 2031, only applies if you '
                'assume there is no net migration at all, which is not what the main '
                'projection assumes. I think you should have checked this before publishing '
                'such a dramatic headline, as many readers will now believe something that is '
                'not true.',
                'Please could you print a correction? It is important that newspapers report '
                'statistics accurately, especially on a subject as sensitive as this one.',
                'Marta Olsson',
            ],
            top=[
                'Sir,',
                'Your report on the national population projection (Friday) was right that the '
                'population is expected to fall, and right that this is a significant change.',
                'The date is the difficulty. Your headline gives 2031. The projection contains '
                'five variants, and 2031 is the peak under the variant assuming net migration '
                'of zero until 2060. The principal projection, assuming 245,000 a year, gives '
                '2043. Both are in the same document and the article does not say which it '
                'used.',
                'I am not suggesting anyone chose the dramatic figure deliberately; the '
                'variants are easy to mix up. But a reader taking 2031 from your headline has '
                'been given an assumption about migration, not a finding about population.',
                'One clause would have fixed it: "on the assumption of zero net migration". '
                'Marta Olsson, Second-year Geography',
            ],
            diffs=[
                'It opens with what the article got right, so the paper is not reading a '
                'letter that attacks it from the first line.',
                'It gives both figures with the assumption attached to each, which lets the '
                'reader see the error instead of being told about it.',
                'It disclaims motive explicitly, removing the defence that the writer is '
                'alleging bias.',
                'It distinguishes an assumption from a finding, which is the actual '
                'intellectual point and is worth printing.',
                'It asks for one quoted clause rather than a correction in general, so the '
                'editor knows exactly what agreeing involves.',
            ],
        ),
    ),

    w3=dict(
        sub='Counting a population',
        prof='Dr Whitfield',
        question='Censuses never count everybody, and the people missed are '
                 'disproportionately young, mobile and poor. Statistical agencies estimate '
                 'the undercount and publish an adjusted figure. Some argue that only the raw '
                 'count should be published, because an adjusted number is an estimate '
                 'presented as a count and invites suspicion. Others argue that publishing a '
                 'figure known to be wrong, when funding depends on it, is the worse choice. '
                 'Which figure should be published? Why?',
        posts=[('Ingrid', 'w',
                'Publish the raw count. The moment a statistical agency starts correcting its '
                'own numbers upwards in the places that benefit from being corrected '
                'upwards, it has given its critics everything they need, whatever the method '
                'says. Trust is the asset here and it is spent very easily.'),
               ('Oluwaseun', 'm',
                'That argument gives a veto to whoever is loudest. We know the raw count is '
                'wrong, we know roughly by how much and where, and funding follows it for ten '
                'years. Publishing a number you know to be wrong in order to look neutral is '
                'not neutrality.')],
        skill=('Separating a technical claim from a political one',
               ['Where a dispute mixes a settled technical question with an unsettled '
                'political one, say so and treat them separately.',
                'It changes what evidence is relevant to each half.',
                'Then propose something that respects both.']),
        starters=['These are two questions and only one of them is statistical.',
                  'Ingrid is describing a real risk, but it is a risk about…',
                  'Oluwaseun is right that…, which does not settle…',
                  'What follows is that the choice is not between… but between…'],
        model=[
            'These are two questions and only one of them is statistical. Whether the raw '
            'count is wrong, and roughly by how much and where, is uncontroversial among '
            'people who do this work: follow-up surveys answer it and the methods are public. '
            'Whether a corrected figure should carry the name of a count is not a statistical '
            'question at all, and no amount of methodological rigour will settle it.',
            'Ingrid is therefore describing a real risk, but it is a risk about institutional '
            'trust rather than about accuracy. Oluwaseun is right that publishing a known '
            'error to appear neutral is not neutrality, which disposes of the simplest '
            'version of her argument but not of the version she is actually making.',
            'The choice is not between two numbers. It is between two things a published '
            'figure can be for. A count is a record of what was observed. An allocation base '
            'is an estimate of what is there. We have been asking one number to be both, and '
            'the entire dispute lives in that overloading.',
            'So publish both, labelled as what they are: the enumerated count, and the '
            'estimated population with its interval. Funding attaches to the second, and '
            'Ingrid’s suspicion has somewhere to go, because the raw figure is still on the '
            'page to be checked against. This is commonly assumed to be a fudge. It is the '
            'opposite: it is refusing to let one number do two jobs it cannot do at once.',
        ],
        model_words=243,
    ),

    gram=dict(
        title='Nominalisation',
        headers=['Verb phrase', 'Nominalised'],
        rows=[
            ('people cross a border', 'the crossing of a border'),
            ('two arguments are confused', 'the conflation of two arguments'),
            ('the population is counted', 'the enumeration of the population'),
            ('funding is allocated', 'the allocation of funding'),
            ('the figure was adjusted', 'the adjustment of the figure'),
            ('people move to cities', 'urbanisation'),
            ('she assumed net migration of zero', 'her assumption of zero net migration'),
        ],
        notes=[
            'Nominalisation packs a clause into a noun phrase, which is why academic writing '
            'uses it constantly: you can then make the whole idea the subject of a new '
            'sentence.',
            'It also removes the agent. The adjustment of the figure does not say who '
            'adjusted it, and sometimes that is exactly the problem.',
            'Good academic prose alternates. A paragraph entirely in nominalisations is '
            'unreadable; one with none is shapeless.',
        ],
        watch='Do not nominalise to sound serious. "The implementation of a reduction in the '
              'allocation" means "they cut the funding". If the verb version is clearer, use '
              'the verb — examiners reward clarity, not weight.',
        ex=[
            ('Nominalise the underlined idea.',
             ['People cross a border. → the ______ of a border',
              'Two arguments are confused. → the ______ of two arguments',
              'The population is counted. → the ______ of the population',
              'The figure was adjusted. → the ______ of the figure',
              'People move into cities. → ______',
              'She assumed zero migration. → her ______ of zero migration'],
             ['crossing', 'conflation', 'enumeration', 'adjustment', 'urbanisation',
              'assumption']),
            ('Turn each nominalisation back into a clause, supplying an agent.',
             ['the allocation of funding', 'the adjustment of the count',
              'the publication of five variants', 'the clustering of the undercount'],
             ['the government allocates funding', 'the agency adjusts the count',
              'the office publishes five variants',
              'the undercount clusters in particular areas']),
            ('Rewrite more clearly, using verbs.',
             ['The implementation of a reduction in the allocation took place in 2024.',
              'There was a conflation of the two questions by the reporting.',
              'The provision of an explanation was not undertaken.',
              'An increase in the utilisation of adjusted figures has occurred.'],
             ['They cut the funding in 2024.',
              'The reporting confused the two questions.',
              'Nobody explained it.',
              'Adjusted figures are used more than they were.']),
        ],
        bas='Build a Sentence sometimes gives you a long nominalised subject in tiles: the '
            'conflation of two arguments. It goes at the front as one block and the verb '
            'follows the whole phrase.',
    ),

    fault=dict(
        text='The conflation of the two questions by the reporting were unhelpful. The '
             'implementation of a reduction in the allocation took place in 2024. Nobody knows '
             'whether did the article state its assumption. The data shows that the undercount '
             'clusters in particular areas. Having adjusted the figure, the criticism became '
             'louder.',
        faults=[
            ('two questions by the reporting were unhelpful',
             'two questions by the reporting was unhelpful',
             'The head of the subject is conflation, which is singular; questions is not the subject.'),
            ('The implementation of a reduction in the allocation took place in 2024',
             'They cut the funding in 2024',
             'Three stacked nominalisations hide a simple sentence and add nothing.'),
            ('whether did the article state', 'whether the article stated',
             'An embedded question keeps statement order and takes no auxiliary.'),
            ('The data shows', 'The data show',
             'Data is plural in formal academic writing, which is the register here.'),
            ('Having adjusted the figure, the criticism', 'Having adjusted the figure, the agency',
             'The criticism did not adjust anything; the participle needs the right subject.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('everyone born in the same period', 'cohort'),
            ('what the numbers give if trends continue', 'projection'),
            ('being forced to leave where you live', 'displacement'),
            ('the average number of children per woman', 'fertility'),
            ('an official count of the whole population', 'census'),
            ('money sent home by somebody working abroad', 'remittance'),
            ('the ratio of non-workers to workers', 'dependency'),
            ('the movement of a population into cities', 'urbanisation'),
            ('a chart of population by age and sex', 'pyramid'),
            ('a large arrival over a short period', 'influx'),
            ('how long people live', 'longevity'),
            ('to become a citizen of a new country', 'naturalise'),
        ],
        gram=[
            ('People cross a border. → the ______ of a border', 'crossing'),
            ('Two arguments are confused. → the ______ of two arguments', 'conflation'),
            ('The population is counted. → the ______ of the population', 'enumeration'),
            ('The figure was adjusted. → the ______ of the figure', 'adjustment'),
            ('People move into cities. → ______', 'urbanisation'),
            ('She assumed zero migration. → her ______', 'assumption'),
            ('Funding is allocated. → the ______ of funding', 'allocation'),
            ('The office published five variants. → the ______ of five variants', 'publication'),
        ],
        mini=[
            ('A net migration figure of zero means',
             ('nobody moved', 'arrivals and departures were equal',
              'migration was banned', 'the data are missing'), 1,
             'It is compatible with nobody moving and with a million each way, which are '
             'completely different situations.'),
            ('A projection differs from a forecast because it',
             ('is less accurate', 'states the consequences of stated assumptions',
              'covers fewer years', 'is unofficial'), 1,
             'The notice makes the distinction explicitly, and it is why five variants are '
             'published rather than one answer.'),
            ('Census undercount matters for funding because',
             ('the total is wrong', 'money is allocated per head on census figures',
              'it delays publication', 'it affects fertility estimates'), 1,
             'An area undercounted by five per cent receives five per cent less for a '
             'decade.'),
            ('Which is clearer?',
             ('The implementation of a reduction in the allocation took place.',
              'They cut the funding.',
              'A reduction was undertaken in respect of the allocation.',
              'There was an occurrence of allocation reduction.'), 1,
             'The verb version says who did what; the others bury a simple action under '
             'stacked nouns.'),
            ('"Is frequently conflated" tells you the writer thinks',
             ('two things are the same', 'two different things get wrongly merged',
              'the evidence is strong', 'nobody has studied it'), 1,
             'Conflation is an error of merging, and frequently says the writer regards it '
             'as a recurring one.'),
            ('Among statisticians, adjusting the census count is',
             ('highly controversial', 'uncontroversial',
              'forbidden', 'rarely attempted'), 1,
             'The public argument is about whether a corrected number is still a count, '
             'which is a different question from the method.'),
        ],
    ),

    tip='Nominalisation is the gear that lets academic English move. Use it to make a whole '
        'idea the subject of your next sentence — but check every one you write by asking who '
        'did it. If the answer matters and the noun has hidden it, go back to the verb.',
)
