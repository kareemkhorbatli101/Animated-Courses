# -*- coding: utf-8 -*-
"""Unit 4 · Climate and the Environment."""

UNIT = dict(
    n=4, vol=1, title='Climate and the Environment',
    icons=('leaf', 'globe', 'chart'),
    subs=('Where our energy comes from', 'A recycling scheme', 'A warmer ocean'),
    grammar='The first conditional',
    field='energy, resources, impact',
    opener_line='Every text in this unit is about what follows from what. That is why the '
                'grammar is the conditional, and why the discussion asks you to predict.',

    candos=[
        'complete word endings in a text about energy and resources',
        'read a notice and a social media post for a rule and a consequence',
        'follow an academic passage that explains a delay, not just a change',
        'understand two people disagreeing about a practical arrangement',
        'talk about causes and consequences without preparing',
        'write an email asking for clarification, and a post that proposes something',
    ],

    acad=[
        ('resource', 'something useful that a country or person has'),
        ('impact', 'a strong effect on something'),
        ('consume', 'to use up fuel, energy or food'),
        ('sustain', 'to keep something going over time'),
        ('environment', 'the natural world around us'),
        ('available', 'able to be used or obtained'),
        ('convert', 'to change something into another form'),
        ('release', 'to let something out'),
        ('output', 'the amount a system produces'),
        ('cycle', 'a set of events that repeat in the same order'),
        ('globe', 'the whole world'),
        ('widespread', 'found in many places'),
        ('restrict', 'to keep something within limits'),
        ('regulate', 'to control something with rules'),
        ('policy', 'a plan of action agreed by a government or group'),
        ('scheme', 'an organised plan to do something'),
        ('alternative', 'another choice that could be used instead'),
        ('sufficient', 'enough'),
        ('considerable', 'large enough to matter'),
        ('eliminate', 'to get rid of completely'),
        ('minimise', 'to make as small as possible'),
        ('stable', 'not changing or moving'),
        ('fluctuate', 'to go up and down irregularly'),
        ('offset', 'to balance one thing against another'),
    ],
    campus=[
        ('bin', 'a container for rubbish'),
        ('recycling', 'treating used things so they can be used again'),
        ('compost', 'rotted plant waste used on soil'),
        ('litter', 'rubbish left in a public place'),
        ('clean-up', 'an organised event to clear rubbish'),
        ('volunteer', 'someone who works without being paid'),
        ('tap water', 'water from a tap, not a bottle'),
        ('heating', 'the system that keeps a building warm'),
        ('light switch', 'the switch that turns a light on and off'),
        ('leaflet', 'a small printed sheet of information'),
        ('pledge', 'a serious promise to do something'),
        ('drop-off point', 'a place where you leave something'),
    ],
    vocab_talk=[
        'Which resource does your country have most of? What impact does that have?',
        'Name one thing you could eliminate from your week to consume less energy.',
        'Has recycling in your area become more widespread in the last five years?',
        'What would be a realistic alternative to the way you travel to school?',
    ],
    again=['process', 'significant', 'estimate', 'vary', 'generate', 'transmit', 'component', 'confirm'],

    r1=dict(
        sub='Where our energy comes from',
        skill=('Use the word you already half-know',
               ['You usually recognise the word before you can spell the ending. Trust that.',
                'Nouns made from verbs are common here: -ment, -tion, -ure.',
                'If the gap follows the or a, the missing letters finish a noun.',
                'Two endings that fit the dashes? The sentence decides, not the word.']),
        guided_text='Most of the electricity in the world is still made by burning something. '
                    'Coal, gas and oil are bur--- to heat water, the steam turns a turb---, and '
                    'the turbine gener---- electricity. The method is more than a hun---- years '
                    'old and it wa---- about two thirds of the energy as heat.',
        guided_hint='1  bur---  →  ned  (burned)',
        guided=['ned', 'ine', 'ates', 'dred', 'stes'],
        exam_text='Ask most people where their electricity comes from and they will say the '
                  'wall. The real answer is a long ch---. In a coal station, the fuel is bur--- '
                  'to boil water; the steam drives a turbine; the turbine turns a gener----; and '
                  'the current then travels through hun----- of kilometres of cable before it '
                  'reaches a house. At every st--- some energy is lost as heat, so only about a '
                  'third of the energy in the coal arri--- as electricity. Wind and solar skip '
                  'most of the ch---: there is no fuel and no boiling, so there is nothing to '
                  'wa---. Their real diffic---- is different. The wind does not always bl--, and '
                  'the sun sets every night, so the output fluctuates in a way that a coal '
                  'station does not.',
        exam=['ain', 'ned', 'ator', 'dreds', 'age', 'ves', 'ain', 'ste', 'ulty', 'ow'],
    ),

    r2=dict(
        sub='A recycling scheme',
        skill=('Find the rule, then find the consequence',
               ['Notices about schemes always pair a rule with what happens if you break it.',
                'A question may ask for either half, so note both.',
                'In a social media post, the writer’s purpose is usually in the first or last '
                'line.',
                'Dates and places in a post are as testable as those in a notice.']),
        docs=[
            ('notice', 'Hartley Campus · New three-bin system from 1 March', [
                '# What goes where',
                'GREEN  food waste only, including tea bags. No packaging of any kind.',
                'BLUE  paper, card, clean plastic, glass, cans.',
                'GREY  everything else.',
                '# The rules',
                '* If a blue bin contains food waste, the whole bin is sent to landfill.',
                '* Bins are collected on Tuesdays. Bags left beside a bin are not taken.',
                '* Large items (furniture, electricals) go to the drop-off point behind Block C.',
                '# Why it matters',
                '* Last year the campus sent 41% of its waste to landfill. The target is 15%.',
            ], 'notice'),
            ('social', 'Jamila Nasser', '@jamila_hartley', [
                'Spent Saturday morning on the campus clean-up with about forty other people and',
                'honestly it was the best two hours of my week.',
                '',
                'We filled nineteen sacks from the field behind Block C alone. Nineteen. Most of',
                'it was plastic bottles, which is depressing, because there are water fountains',
                'in every building and they are free.',
                '',
                'Next one is Saturday 12 April, 9am, meet at the sports centre. Bring gloves if',
                'you have them — there are never enough. No need to sign up, just turn up.',
            ], 'w'),
        ],
        guided=[
            ('What goes in the green bin?',
             ('Paper and card', 'Food waste only', 'Everything else', 'Glass and cans'), 1,
             'Food waste only, including tea bags — and packaging is specifically excluded.'),
            ('What happens if food waste is put in a blue bin?',
             ('It is sorted by hand', 'The whole bin goes to landfill',
              'The bin is not collected', 'The department is charged'), 1,
             'The first rule states exactly this consequence.'),
            ('What should be done with an old chair?',
             ('Put it beside a bin', 'Put it in the grey bin',
              'Take it to the drop-off point behind Block C', 'Wait for a special collection'), 2,
             'Large items including furniture go to the drop-off point.'),
            ('When are the bins collected?',
             ('Every day', 'On Tuesdays', 'On Saturdays', 'Once a month'), 1,
             'Bins are collected on Tuesdays, in the second rule.'),
        ],
        exam=[
            ('Why did Jamila write the post?',
             ('To complain about litter', 'To ask for money',
              'To tell people about the next clean-up', 'To thank the university'), 2,
             'The last paragraph gives a date, a time and a meeting point, which is what the post '
             'is for.'),
            ('How many people took part in the clean-up?',
             ('Nineteen', 'About forty', 'Twelve', 'Over a hundred'), 1,
             'About forty other people. Nineteen is the number of sacks.'),
            ('Why does Jamila find the plastic bottles depressing?',
             ('They are difficult to recycle', 'There is free water in every building',
              'They were left by visitors', 'They cannot go in the blue bin'), 1,
             'She gives the reason herself: the fountains are in every building and they are free.'),
            ('What does Jamila ask people to bring?',
             ('Sacks', 'Gloves', 'Water', 'Nothing'), 1,
             'Bring gloves if you have them — there are never enough.'),
            ('What is the campus trying to achieve?',
             ('To collect bins more often', 'To cut landfill from 41% to 15%',
              'To remove all grey bins', 'To open a second drop-off point'), 1,
             'The Why it matters section gives last year’s figure and the target.'),
            ('What can be inferred about the clean-up events?',
             ('They happen regularly', 'They are compulsory for students',
              'They are organised by the university', 'They are always in the same place'), 0,
             'Jamila calls this one next one and gives a date, which implies a series. The meeting '
             'point has changed, and nothing says who organises them.'),
        ],
    ),

    r3=dict(
        sub='A warmer ocean',
        title='Why the Ocean Warms So Slowly',
        words=275,
        paras=[
            'The air above the land has warmed considerably in the last century, and anyone over '
            'fifty can tell you so. The ocean has warmed too, but by a much smaller number, and '
            'that difference is often misread. It does not mean that the sea is less affected. '
            'It means that water is extremely difficult to heat.',
            'The reason is a property called heat capacity. It takes roughly four times as much '
            'energy to raise the temperature of a kilogram of water by one degree as it does for '
            'a kilogram of air, and the ocean contains about 1,300 times as much mass as the '
            'atmosphere. Put those two numbers together and the ocean can absorb an enormous '
            'amount of energy while its thermometer barely moves. In fact more than nine tenths '
            'of the extra heat trapped by the atmosphere since 1970 has gone into the sea, not '
            'into the air.',
            'That is why the ocean is sometimes described as a flywheel. A flywheel is hard to '
            'speed up and equally hard to slow down, and it keeps turning long after the engine '
            'has stopped. The sea has been storing heat for decades, and it will go on releasing '
            'it for centuries, whatever happens to emissions. The consequences follow from that '
            'single fact: sea level will keep rising for a long time after the air stops warming, '
            'because water expands as it warms, and because the heat already in the ocean has '
            'not yet finished doing its work.',
        ],
        skill=('Read the comparison, not the number',
               ['Numbers in this kind of passage exist to make a comparison. Ask what is being '
                'compared with what.',
                'A word like however, but or in fact marks the sentence the paragraph was '
                'written for.',
                'An image (a flywheel, a ladder) is always explained in the next sentence. Read on.',
                'Inference questions usually ask what follows from the facts, not what is in them.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why air temperature has risen', 'Why the ocean warms slowly and what follows',
              'How sea level is measured', 'The history of flywheels'), 1,
             'Paragraph 1 poses it, paragraph 2 explains it, paragraph 3 gives the consequences.'),
            ('According to paragraph 1, what does the small rise in ocean temperature mean?',
             ('The sea is less affected', 'Water is hard to heat',
              'The measurements are unreliable', 'The air has not really warmed'), 1,
             'The author rules out the first reading explicitly and gives this one instead.'),
            ('The word "absorb" in paragraph 2 is closest in meaning to',
             ('take in', 'give out', 'measure', 'reflect'), 0,
             'The sentence contrasts absorbing energy with the thermometer barely moving, so it '
             'means taking it in.'),
            ('Why does the author mention a flywheel?',
             ('To describe how a ship engine works', 'To show that the ocean is heavy',
              'To show that the ocean keeps going after the cause stops',
              'To explain how heat capacity is measured'), 2,
             'The next sentence makes the point: it keeps turning long after the engine has stopped.'),
        ],
        exam=[
            ('How much more energy does water need than air, per kilogram and degree?',
             ('About twice', 'About four times', 'About ten times', 'About 1,300 times'), 1,
             'Four times is the heat capacity figure; 1,300 is the ratio of masses.'),
            ('Where has most of the extra heat since 1970 gone?',
             ('Into the air', 'Into the land', 'Into the sea', 'Into the ice'), 2,
             'More than nine tenths of it has gone into the sea.'),
            ('All of the following are stated about the ocean EXCEPT:',
             ('It is slow to warm', 'It is slow to cool', 'It stores most of the extra heat',
              'It has warmed more than the air'), 3,
             'The passage says the opposite — it has warmed by a much smaller number.'),
            ('Why will sea level keep rising after the air stops warming?',
             ('Because ice melts slowly', 'Because water expands as it warms and the stored '
              'heat is still working', 'Because emissions continue',
              'Because rivers add more water'), 1,
             'The last sentence gives both reasons, and ice is not mentioned anywhere.'),
            ('The word "it" in the phrase "releasing it for centuries" refers to',
             ('the sea level', 'the heat', 'the emissions', 'the flywheel'), 1,
             'The sea has been storing heat for decades, and it will go on releasing that heat.'),
            ('What can be inferred about efforts to cut emissions?',
             ('They will have no effect', 'They will not stop sea level rising soon',
              'They will cool the ocean quickly', 'They are already working'), 1,
             'Whatever happens to emissions, the stored heat goes on working — so the rise '
             'continues for a long time either way.'),
            ('Which best states the main idea of paragraph 2?',
             ('The ocean is very large', 'Two numbers together explain the ocean’s slow warming',
              'Thermometers are not accurate at sea', 'Air warms faster than land'), 1,
             'Put those two numbers together is the paragraph’s own summary of itself.'),
        ],
    ),

    l1=dict(
        sub='A recycling scheme',
        caption='Two students disagree about the new bins',
        skill=('Separate the complaint from the fact',
               ['When two speakers disagree, note what each one actually claims.',
                'One of them is usually wrong about something, and that is a question.',
                'Attitude questions ask how a speaker feels, not what they say. Listen to tone '
                'words: honestly, frankly, to be fair.',
                'The agreement at the end is often the answer to what will they do next.']),
        warm=[
            ('Man: Have you seen the new bins?',
             ('They’re collected on Tuesdays.', 'Seen them? I’ve already used the wrong one.',
              'Three of them.', 'Behind Block C.'), 1,
             'A yes/no question; the natural reply answers and adds something.'),
            ('Woman: Why are there three now?',
             ('Because food waste ruins the recycling.', 'In every building.',
              'Yes, three colours.', 'Since the first of March.'), 0,
             'Why wants a reason, and only one option gives one.'),
            ('Man: I never know which one to use.',
             ('They’re outside Block C.', 'There’s a leaflet — I’ll send it to you.',
              'No, I don’t either.', 'It started in March.'), 1,
             'A stated difficulty is naturally met with help.'),
        ],
        script=[
            ('Man', 'Three bins now. Three. I put a sandwich box in the green one this morning '
                    'and someone actually told me off.'),
            ('Woman', 'To be fair, they were right. Green is food only. The box is packaging, so '
                      'it goes in blue — if you’ve rinsed it.'),
            ('Man', 'See, that’s my point. It’s too complicated. People will just give up and '
                    'put everything in grey.'),
            ('Woman', 'Some will. But the leaflet’s quite clear, and the rule that matters is '
                      'only one: no food in blue.'),
            ('Man', 'Why that one?'),
            ('Woman', 'Because if there’s food in a blue bin the whole bin goes to landfill. One '
                      'sandwich can waste an entire bin of clean paper.'),
            ('Man', 'Oh. I didn’t know that.'),
            ('Woman', 'Nobody does. That’s the problem — not that it’s complicated, but that '
                      'nobody explained the consequence.'),
            ('Man', 'Hm. If they put that on the bin itself, people would read it.'),
            ('Woman', 'Write that down. The sustainability group meets on Thursday.'),
        ],
        items=[
            ('What are the speakers mainly discussing?',
             ('Whether the new bin system works', 'Where the bins are kept',
              'How often bins are collected', 'What a sandwich box is made of'), 0,
             'The man says it is too complicated; the woman disagrees about why it fails.'),
            ('What mistake did the man make?',
             ('He put packaging in the food bin', 'He left a bag beside a bin',
              'He used the grey bin for paper', 'He missed the collection day'), 0,
             'A sandwich box in the green one, and green is food only.'),
            ('What does the woman say is the one rule that matters?',
             ('Rinse everything first', 'No food in the blue bin',
              'Use the grey bin for packaging', 'Put bins out on Tuesday'), 1,
             'She names it as the rule that matters and then explains why.'),
            ('Why does one sandwich matter so much?',
             ('It smells', 'It cannot be composted', 'It sends a whole bin to landfill',
              'It blocks the collection lorry'), 2,
             'If there’s food in a blue bin the whole bin goes to landfill.'),
            ('What does the woman think the real problem is?',
             ('Students do not care', 'The system is too complicated',
              'Nobody explained the consequence', 'There are not enough bins'), 2,
             'Not that it’s complicated, but that nobody explained the consequence — she corrects '
             'the man directly.'),
            ('What will the man probably do?',
             ('Stop using the blue bin', 'Take his idea to the sustainability group',
              'Write to the university', 'Ask for a leaflet'), 1,
             'She tells him to write it down because the group meets on Thursday, and he does not '
             'object.'),
        ],
    ),

    l2=dict(
        sub='A recycling scheme',
        caption='The recycling scheme starts on Monday',
        poster=['Three bins from Monday: green, blue, grey',
                'No food in the blue bin — ever',
                'Large items: drop-off point, Block C'],
        skill=('Catch the condition',
               ['Announcements about new schemes are full of if-sentences. The if-half and the '
                'result-half are often tested separately.',
                'Listen for a deadline and for what happens after it.',
                'An exception is nearly always worth a question. Note it the first time.',
                'The closing instruction tells you what the speaker wants. Expect to be asked.']),
        warm=[
            ('Woman: When does it start?',
             ('On Monday.', 'Three bins.', 'Because of the target.', 'In every building.'), 0,
             'When wants a day or a time, which only one option supplies.'),
            ('Man: What if I put the wrong thing in?',
             ('It’s a green bin.', 'Nothing happens to you, but the bin may be wasted.',
              'On Tuesdays.', 'There are three.'), 1,
             'A what-if question wants a consequence.'),
            ('Woman: Where do old chairs go?',
             ('To the drop-off point behind Block C.', 'On Monday morning.',
              'In the grey bin, usually.', 'Yes, they’re collected.'), 0,
             'Where wants a place, and the specific one is given in the announcement.'),
        ],
        script=[
            ('Woman', 'One announcement before you go. From Monday the campus moves to three '
                      'bins instead of two. Green is food waste only — that includes tea bags, '
                      'but no packaging at all. Blue is paper, card, clean plastic, glass and '
                      'cans. Grey is everything else. There is one rule that matters more than '
                      'the others: if food waste goes into a blue bin, the entire bin is sent to '
                      'landfill, so a single sandwich can waste a whole bin of clean paper. '
                      'Collections stay on Tuesdays, and bags left beside a bin will not be '
                      'taken — if your bin is full, use another one. Furniture and anything '
                      'electrical goes to the drop-off point behind Block C, not beside the '
                      'bins. One last thing. If your department wants a talk on this, email the '
                      'sustainability group before the end of term; after that they stop running '
                      'them until September.'),
        ],
        items=[
            ('What is the main purpose of the announcement?',
             ('To explain a new bin system', 'To report last year’s figures',
              'To ask for volunteers', 'To change the collection day'), 0,
             'The speaker opens with the change and spends the announcement explaining it.'),
            ('What may be put in the green bin?',
             ('Clean plastic', 'Tea bags', 'Packaging', 'Glass'), 1,
             'Food waste only — that includes tea bags, and packaging is excluded in the same '
             'sentence.'),
            ('Why is the blue-bin rule the most important?',
             ('Blue bins are collected first', 'One sandwich can waste a whole bin',
              'Blue bins cost more', 'Paper is the heaviest waste'), 1,
             'The speaker gives the consequence and then that exact image.'),
            ('What should you do if your bin is full?',
             ('Leave a bag beside it', 'Use another bin', 'Wait until Tuesday',
              'Take it to Block C'), 1,
             'Bags beside a bin will not be taken — if your bin is full, use another one.'),
            ('By when must a department ask for a talk?',
             ('By Monday', 'By Tuesday', 'Before the end of term', 'Before September'), 2,
             'After the end of term they stop running them until September, so the deadline is '
             'the end of term.'),
        ],
    ),

    l3=dict(
        sub='A warmer ocean',
        caption='A talk on heat in the ocean',
        board=['Heat capacity of water: 4× air', 'Mass of ocean: 1,300× atmosphere',
               '>90% of extra heat → sea', 'Expansion → sea level'],
        skill=('Link the numbers to the conclusion',
               ['A talk that puts numbers on a board will use them to reach one conclusion. '
                'Find it.',
                'Listen for so, which means, that is why — the conclusion follows those words.',
                'A speaker who says people get this wrong is telling you the misconception '
                'question in advance.',
                'The last sentence is nearly always the point of the whole talk.']),
        warm=[
            ('Man: Did she say nine tenths or nine per cent?',
             ('Nine tenths.', 'Since 1970.', 'Into the ocean.', 'Yes, she did.'), 0,
             'The question offers two figures; the answer picks one.'),
            ('Woman: What does heat capacity actually mean?',
             ('It’s on the board.', 'How much energy it takes to warm something.',
              'Four times more.', 'The ocean has a lot of it.'), 1,
             'A what-does-it-mean question wants a definition.'),
            ('Man: Could you repeat the last point?',
             ('It was about sea level.', 'Of course — which part?', 'Yes, I agree.',
              'The lecture ends at four.'), 1,
             'A request to repeat is met by agreeing and asking which part.'),
        ],
        script=[
            ('Professor', 'People get this one wrong constantly, so let us do it properly. You '
                          'read that the ocean has warmed by a fraction of a degree and you '
                          'think: a fraction of a degree, that is nothing. It is not nothing. It '
                          'is an enormous amount of energy wearing a very small number. Look at '
                          'the board. First, heat capacity. It takes about four times as much '
                          'energy to warm a kilogram of water by one degree as it does a kilogram '
                          'of air. Second, mass. The ocean is roughly thirteen hundred times '
                          'heavier than the whole atmosphere. Multiply those together and you '
                          'see why the sea can swallow a colossal quantity of heat and move its '
                          'thermometer almost not at all. And it has. More than ninety per cent '
                          'of the extra heat trapped since 1970 is now in the ocean, not in the '
                          'air we measure. Which means two things. One: the air temperature we '
                          'quote every year is only a few per cent of the story. Two: water '
                          'expands when it warms, so that stored heat is already committed to '
                          'raising sea level, and it will go on doing so long after emissions '
                          'stop. The ocean is not a passenger in this. It is the flywheel.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Sea temperature measurements are unreliable',
              'A small temperature rise in the ocean represents a huge amount of energy',
              'The atmosphere is heavier than people think',
              'Emissions must stop immediately'), 1,
             'An enormous amount of energy wearing a very small number is the talk in one line.'),
            ('Why does the speaker say "people get this one wrong"?',
             ('To introduce a common misunderstanding', 'To criticise other scientists',
              'To explain a measurement error', 'To describe an old theory'), 0,
             'She then states the misreading and corrects it, which is what the whole talk is for.'),
            ('What two figures does the speaker multiply together?',
             ('Temperature and depth', 'Heat capacity and mass',
              'Emissions and years', 'Volume and sea level'), 1,
             'Four times for heat capacity and thirteen hundred times for mass.'),
            ('According to the speaker, the yearly air temperature figure is',
             ('the most important measurement', 'only a small part of the story',
              'impossible to measure accurately', 'rising faster than expected'), 1,
             'Only a few per cent of the story — she says it as her first of two conclusions.'),
            ('Why is sea level rise already committed?',
             ('Emissions cannot be reduced', 'Ice is melting too quickly',
              'The stored heat expands the water', 'Rivers are adding water'), 2,
             'Water expands when it warms, so the heat already stored will go on raising sea level.'),
            ('What does the speaker mean by "the flywheel"?',
             ('The ocean drives the whole system and is slow to change',
              'The ocean follows the atmosphere', 'The ocean is circular',
              'The ocean mixes slowly'), 0,
             'A flywheel is hard to speed up or slow down and keeps turning after the engine '
             'stops — the opposite of being a passenger.'),
        ],
    ),

    sp=[
        dict(sub='Where our energy comes from', focus='sentence stress in if-sentences',
             skill=('Stress the new information',
                    ['In an if-sentence the stress falls on the condition and on the result, '
                     'not on if or then.',
                     'Pause very slightly at the comma. It tells the listener a result is coming.',
                     'Say the whole sentence. An unfinished conditional scores badly.',
                     'If you start the result first (I will… if…), there is no comma and no pause.']),
             repeat=['The wind does not always blow.',
                     'If the sun sets, the output falls.',
                     'We will waste less energy if we switch things off.',
                     'If the campus reaches its target, landfill will drop to fifteen per cent.',
                     'Energy is lost as heat at every stage of the process.',
                     'If food waste goes into the blue bin, the whole bin will be sent to landfill.',
                     'If people understood the consequence of one small mistake, they would probably take more care about it.'],
             theme='recycling where you live',
             qs=['To begin, do you recycle at home?',
                 'People feel differently about sorting their rubbish. How do you feel about it, '
                 'and why?',
                 'Some people say that what one person does makes no difference at all. Do you '
                 'agree? Why or why not?',
                 'Finally, should cities fine people who do not recycle, or encourage them in '
                 'other ways? Why?'],
             model=[(1, 'We do, yes. We have two bins at home, one for paper and plastic and one '
                        'for everything else, and the city collects them on Thursdays.'),
                    (3, 'I disagree, although I understand the feeling. One person changes '
                        'nothing, but no single person ever does — that is how any change works.')],
             selfcheck=['I paused at the comma in if-sentences',
                        'I finished every conditional I started',
                        'I gave a reason, not just an opinion']),
        dict(sub='A recycling scheme', focus='explaining a consequence',
             skill=('Say what follows, then why',
                    ['Use the pattern: if X, then Y — because Z. Three short clauses beat one '
                     'long one.',
                     'Signal the consequence: so, which means, that is why.',
                     'Give one example. A concrete example is worth more than a second reason.',
                     'Keep the tense right: if + present, will + infinitive.']),
             repeat=['Green is for food waste.',
                     'The leaflet explains the three bins.',
                     'If you rinse the box, it can go in blue.',
                     'Bags left beside a bin will not be collected on Tuesday.',
                     'The sustainability group meets on Thursday afternoon in Block C.',
                     'If a department wants a talk, it must ask before the end of this term.',
                     'If people are told what happens to a whole bin, they will probably be much more careful about what they put in it.'],
             theme='how your town handles waste',
             qs=['First, how is rubbish collected where you live?',
                 'Systems change, and people react in different ways. How did people react the '
                 'last time something changed where you live?',
                 'Some people argue that supermarkets, not shoppers, should be responsible for '
                 'packaging. Do you agree? Why or why not?',
                 'Last question. Should a university be allowed to charge departments for the '
                 'waste they send to landfill? Why or why not?'],
             model=[(2, 'Badly at first, honestly. People complained for about a month and then '
                        'it became normal, which is what usually happens.'),
                    (3, 'I agree with that. The shopper cannot choose packaging that is not on '
                        'the shelf, so the decision is made before they arrive.')],
             selfcheck=['I used if + present, will + infinitive correctly',
                        'I signalled the consequence (so, which means)',
                        'I gave one concrete example']),
        dict(sub='A warmer ocean', focus='academic register',
             skill=('Quantify, then conclude',
                    ['Use the unit’s words: considerable, fluctuate, sustain, impact, offset.',
                     'Give a figure, then say what it means. A number without a conclusion is '
                     'not an answer.',
                     'Hedge properly: the evidence suggests, it appears that, broadly speaking.',
                     'Check yourself against the three statements below.']),
             repeat=['The ocean absorbs most of the extra heat.',
                     'Water expands considerably as it warms.',
                     'Output from wind and solar fluctuates during the day.',
                     'The impact is widespread, although it is not evenly distributed.',
                     'More than ninety per cent of the heat trapped since 1970 is in the sea.',
                     'Sea level will continue to rise for a long period after emissions are reduced.',
                     'The evidence suggests that a very small change in temperature can represent an enormous quantity of stored energy.'],
             theme='whether individual action matters',
             qs=['To start, has the climate where you live changed in your lifetime?',
                 'People react to climate news in very different ways. How do you react, and why '
                 'do you think that is?',
                 'Some people argue that governments, not individuals, should carry the cost of '
                 'cutting emissions. Do you agree? Why or why not?',
                 'Finally, should countries that became rich by burning coal pay more than '
                 'others? Why or why not?'],
             model=[(2, 'Honestly, I switch off. I think that is because the numbers are so large '
                        'that nothing I do seems to touch them.'),
                    (4, 'Broadly speaking, yes. The evidence suggests most of the heat now in the '
                        'ocean was put there by a small number of countries over a long period.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I gave a figure and said what it meant',
                        'I hedged where I was not certain']),
    ],

    w1=dict(
        sub='Where our energy comes from',
        skill=('Build the if-half first',
               ['Find if among the tiles. Everything before the comma belongs to it.',
                'If + present simple, then will + infinitive. Never will twice.',
                'A question with if is usually an indirect question: do you know if…',
                'Use every tile exactly once.']),
        guided=[
            ('Food waste in the blue bin sends the whole bin to landfill.',
             ['happens', 'what', 'if', 'food', 'goes', 'in', 'blue'],
             'What happens if food goes in blue?'),
            ('The output falls when the sun sets.',
             ['will', 'what', 'happen', 'when', 'the', 'sun', 'sets'],
             'What will happen when the sun sets?'),
            ('The scheme starts on Monday.',
             ['know', 'you', 'do', 'if', 'the', 'scheme', 'starts', 'Monday'],
             'Do you know if the scheme starts Monday?'),
        ],
        exam=[
            ('Bags left beside a bin are not collected.',
             ['happens', 'what', 'if', 'I', 'leave', 'a', 'bag'],
             'What happens if I leave a bag?'),
            ('The campus wants to cut landfill to fifteen per cent.',
             ['will', 'much', 'how', 'landfill', 'fall'],
             'How much will landfill fall?'),
            ('A department must ask before the end of term.',
             ['tell', 'can', 'you', 'me', 'whether', 'we', 'can', 'still', 'ask'],
             'Can you tell me whether we can still ask?'),
            ('Sea level will go on rising for centuries.',
             ['long', 'how', 'will', 'sea', 'level', 'rise'],
             'How long will sea level rise?'),
            ('The bin that contains food goes to landfill.',
             ['the', 'bin', 'that', 'contains', 'food', 'goes', 'to', 'landfill'],
             'The bin that contains food goes to landfill.'),
            ('Collections are on Tuesdays.',
             ['day', 'which', 'are', 'the', 'bins', 'collected'],
             'Which day are the bins collected?'),
            ('If nobody explains the rule, people will ignore it.',
             ['know', 'do', 'you', 'why', 'people', 'ignore', 'it'],
             'Do you know why people ignore it?'),
        ],
    ),
    w2=dict(
        sub='A recycling scheme',
        to='sustainability@hartley.edu',
        date='24/02/2026',
        subject='Three-bin system — two questions from Block D',
        scenario=[
            'The new three-bin system starts on Monday. You live in Block D, where there is no '
            'green bin on your floor, and the leaflet does not say what to do with coffee cups, '
            'which are paper on the outside and plastic on the inside.',
            'Write an email to the sustainability group.',
        ],
        bullets=['Say where you live and why you are writing.',
                 'Ask your two questions clearly.',
                 'Offer to help in some way.'],
        skill=('Number your questions',
               ['Two questions in one paragraph get one answer. Two numbered questions get two.',
                'Say what you have already checked. It stops the reader repeating it.',
                'Offer something small and specific, not vague help.',
                'Seven minutes. Three short paragraphs, 110–140 words.']),
        model=[
            'Dear Sustainability Group,',
            'I live on the third floor of Block D and I am writing about the new three-bin '
            'system, which starts on Monday. I have read the leaflet and the notice by the lift, '
            'but two things are still not clear to me.',
            'First, there is no green bin anywhere in Block D. Should we take food waste down to '
            'the bins outside, or will green bins be installed on each floor? Second, what '
            'should we do with coffee cups? They are paper outside and plastic inside, so I '
            'cannot tell whether they belong in blue or in grey.',
            'If it would help, I am happy to put a short notice in our kitchen once I know the '
            'answers. There are about forty of us on this floor and most people have the same '
            'two questions.',
            'Many thanks,',
            'Daniel Mwangi',
        ],
        notes=['The first paragraph says who and where before it says what, so the reader can '
               'route the email immediately.',
               'I have read the leaflet and the notice removes the most likely unhelpful reply.',
               'First… Second… makes two questions impossible to answer as one.',
               'The offer is specific (a notice in one kitchen, forty people) rather than a '
               'vague let me know if I can help.'],
    ),
    w3=dict(
        sub='A warmer ocean',
        prof='Dr Achebe',
        question='Most of the extra heat trapped by the atmosphere has gone into the ocean, and '
                 'it will keep raising sea level for centuries whatever we do about emissions. '
                 'Given that, should cities spend more on adapting to a higher sea, or on '
                 'cutting emissions? Why?',
        posts=[('Elena', 'w',
                'Adaptation, clearly. The lecture said the rise is already committed. You cannot '
                'negotiate with water that is already warm. Sea walls, drainage and moving '
                'people are expensive, but they are the only things that protect anyone in the '
                'next fifty years.'),
               ('Omar', 'm',
                'If every city reasons like that, nothing gets cut and the rise gets worse. '
                'Adaptation protects the cities that can afford it and nobody else. Cutting '
                'emissions is the only thing that helps the places with no money for sea walls.')],
        skill=('Reject the either/or if it is false',
               ['Many discussion questions offer two choices. Sometimes the best answer is that '
                'the choice is wrong.',
                'But you must show why, with a reason from the material.',
                'Name a classmate and take their strongest point seriously before you move past it.',
                'At least 100 words in ten minutes.']),
        starters=['Elena and Omar are answering different questions:…',
                  'The choice in the question is a false one, because…',
                  'Omar’s point about… is the one that decides it for me, because…',
                  'What neither post mentions is…'],
        model=[
            'Elena is right about the physics and Omar is right about the politics, and I do not '
            'think the question has to be answered as an either/or.',
            'The lecture made one thing clear: the heat already in the ocean is committed, so '
            'some rise is coming no matter what any city decides this year. That settles the '
            'case for adaptation. But it settles nothing about how much rise, which is still '
            'open, and that is Omar’s point.',
            'What neither post mentions is that the two compete for the same money in the same '
            'budget year, and sea walls are visible while emissions cuts are not. A mayor who '
            'builds a wall gets re-elected; a mayor who cuts emissions gets a smaller rise in '
            'forty years. That is why I would fund adaptation locally and emissions nationally, '
            'so they stop competing.',
        ],
        model_words=155,
    ),

    gram=dict(
        title='The first conditional',
        headers=['Form', 'Example'],
        rows=[
            ['If + present simple, will + infinitive', 'If food goes in blue, the bin will be wasted.'],
            ['Result first (no comma)', 'The bin will be wasted if food goes in blue.'],
            ['Negative in either half', 'If you do not rinse it, it will not be recycled.'],
            ['when = it is certain', 'When the sun sets, the output will fall.'],
            ['unless = if not', 'Unless you rinse it, it will go to landfill.'],
            ['may / might instead of will', 'If we do nothing, the target might be missed.'],
            ['Question form', 'What will happen if I leave a bag?'],
        ],
        notes=[
            'The if-half uses the present simple even though it is about the future. English '
            'does not say *if it will rain*.',
            'Use when, not if, when the thing is certain to happen. The sun will set; the wind '
            'may or may not blow.',
            'Unless already contains not, so never write *unless you do not*.',
        ],
        watch='Never put will in both halves. It is If it rains, we will cancel — never '
              '*If it will rain, we will cancel*.',
        ex=[
            ('Put the verb in the right form.',
             ['If the wind __________ (not / blow), the output __________ (fall).',
              'The bin __________ (go) to landfill if you __________ (put) food in it.',
              'If we __________ (reach) the target, the university __________ (save) money.',
              'Unless you __________ (rinse) the box, it __________ (not / be) recycled.',
              'When the scheme __________ (start), there __________ (be) three bins.',
              'If nobody __________ (explain) the rule, people __________ (ignore) it.'],
             ['does not blow / will fall', 'will go / put', 'reach / will save',
              'rinse / will not be', 'starts / will be', 'explains / will ignore']),
            ('Rewrite with unless.',
             ['If you do not rinse it, it will go in grey.',
              'If we do not act now, the target will be missed.',
              'If they do not explain the consequence, nobody will care.',
              'If the department does not email before Friday, no talk will be arranged.'],
             ['Unless you rinse it, it will go in grey.',
              'Unless we act now, the target will be missed.',
              'Unless they explain the consequence, nobody will care.',
              'Unless the department emails before Friday, no talk will be arranged.']),
            ('Correct the mistake in each sentence.',
             ['If it will rain, the clean-up will be cancelled.',
              'Unless you do not rinse it, it will go to landfill.',
              'If the sun sets, the output falls — that is certain every day.'],
             ['If it rains, the clean-up will be cancelled.',
              'Unless you rinse it, it will go to landfill.',
              'When the sun sets, the output will fall.']),
        ],
        bas='Build a Sentence uses conditionals inside questions: What happens if food goes in '
            'blue? Notice that what happens stays in the present, because the whole thing is a '
            'general rule rather than one future event.',
    ),

    rev=dict(
        vocab=[
            ('a strong effect on something', 'impact'),
            ('to use up fuel or energy', 'consume'),
            ('to keep something going over time', 'sustain'),
            ('another choice that could be used instead', 'alternative'),
            ('large enough to matter', 'considerable'),
            ('to get rid of completely', 'eliminate'),
            ('to go up and down irregularly', 'fluctuate'),
            ('an organised plan to do something', 'scheme'),
            ('found in many places', 'widespread'),
            ('to control something with rules', 'regulate'),
            ('an organised event to clear rubbish', 'clean-up'),
            ('a place where you leave something', 'drop-off point'),
        ],
        gram=[
            ('If the wind __________ (not / blow), the output falls.', 'does not blow'),
            ('The bin __________ (go) to landfill if you put food in it.', 'will go'),
            ('__________ you rinse the box, it will not be recycled.', 'Unless'),
            ('__________ (when / if) the sun sets, the output will fall.', 'When'),
            ('If we reach the target, the university __________ (save) money.', 'will save'),
            ('What __________ (happen) if I leave a bag beside the bin?', 'happens'),
            ('If nobody explains the rule, people __________ (ignore) it.', 'will ignore'),
            ('If we do nothing, the target __________ (might / miss).', 'might be missed'),
        ],
        mini=[
            ('According to the passage on page 66, the ocean has warmed less than the air because',
             ('it is further from the sun', 'water is much harder to heat',
              'the measurements are older', 'ice absorbs the heat'), 1,
             'Heat capacity and mass together explain it; nothing else in the passage does.'),
            ('In the talk, more than ninety per cent of the extra heat since 1970 has gone',
             ('into the air', 'into the land', 'into the sea', 'into the ice'), 2,
             'The speaker gives the figure and names the destination in the same sentence.'),
            ('Which sentence is correct?',
             ('If it will rain, we will cancel.', 'Unless you do not rinse it, it goes to landfill.',
              'If food goes in blue, the bin will be wasted.', 'When the wind blows, the output might falls.'), 2,
             'The others put will in the if-half, double the negative in unless, or add -s after '
             'a modal.'),
            ('A bag left beside a full bin will be',
             ('collected on Tuesday', 'left where it is', 'taken to Block C',
              'put in the green bin'), 1,
             'Bags beside a bin will not be taken; the announcement says use another bin instead.'),
            ('In Complete the Words, a gap after "the" is most likely the end of',
             ('a verb', 'a noun', 'an adverb', 'a conjunction'), 1,
             'An article is followed by a noun phrase, so the missing letters finish a noun.'),
            ('In Listening, the audio plays',
             ('as often as you like', 'twice', 'once', 'once for talks only'), 2,
             'The audio plays once, which is why notes have to be made while you listen.'),
        ],
    ),
    tip='In Listening the audio plays once and there is no Back. Write while you listen, not '
        'afterwards — two words on the page beat a whole sentence in your head, because the '
        'next question is already starting.',
)
