# -*- coding: utf-8 -*-
"""Unit 17 · Chemistry and Materials."""

UNIT = dict(
    n=17, vol=2, title='Chemistry and Materials',
    icons=('flask', 'leaf', 'cpu'),
    subs=('Why materials differ', 'Writing up a lab report', 'Plastics and what replaces them'),
    grammar='Sequence and process language',
    field='element, property, reaction',
    opener_line='Process writing has its own grammar: first, once, until, by which point. This '
                'unit teaches the connectors that hold a method together.',

    candos=[
        'complete word endings in a text about why materials behave as they do',
        'read a report template and a feedback email and find what must change',
        'follow a passage that explains why a replacement is harder than it looks',
        'understand two students working out why two results differ',
        'describe a procedure out loud, in order, without preparing',
        'write an email asking for an extension, and a post that costs a proposal',
    ],

    acad=[
        ('substitute', 'to use one thing in place of another'),
        ('attribute', 'a quality or feature of something'),
        ('flexible', 'able to bend without breaking'),
        ('dispose', 'to get rid of something'),
        ('refine', 'to improve by small changes; to purify'),
        ('amend', 'to change something slightly to improve it'),
        ('proceed', 'to continue, or to go on to the next step'),
        ('conduct', 'to carry out; to allow heat or electricity through'),
        ('analyse', 'to examine in detail'),
        ('demonstrate', 'to show clearly'),
        ('valid', 'based on good reasoning; officially acceptable'),
        ('error', 'a mistake'),
        ('journal', 'an academic magazine; a record kept over time'),
        ('label', 'a piece of information attached to something'),
        ('define', 'to say exactly what something means'),
        ('apparent', 'clear or obvious; seeming to be true'),
        ('minimal', 'as small as possible'),
        ('exclude', 'to leave out'),
        ('complement', 'to go well with; to complete'),
        ('ultimate', 'final, or greatest'),
        ('sole', 'only'),
        ('finite', 'having limits; not endless'),
        ('exploit', 'to use fully, sometimes unfairly'),
        ('append', 'to add at the end'),
    ],
    campus=[
        ('lab report', 'a written account of an experiment'),
        ('results', 'what an experiment produced'),
        ('graph', 'a drawing showing how numbers relate'),
        ('beaker', 'a glass container used in a laboratory'),
        ('scales', 'an instrument for weighing'),
        ('extension', 'extra time granted for a deadline'),
        ('resubmission', 'handing work in again after corrections'),
        ('draft', 'an early version of a piece of writing'),
        ('marking', 'the process of assessing work'),
        ('feedback', 'comments telling you how to improve'),
        ('spillage', 'liquid that has been accidentally dropped'),
        ('fume cupboard', 'an enclosed space that removes dangerous gases'),
    ],
    vocab_talk=[
        'Name a material you use every day. What attribute makes it suitable?',
        'What could realistically be substituted for plastic in one thing you own?',
        'Describe an experiment you have done. What was the main source of error?',
        'Is any resource you depend on finite? What happens when it runs out?',
    ],
    again=['structure', 'component', 'process', 'convert', 'stable', 'generate', 'react', 'significant'],

    r1=dict(
        sub='Why materials differ',
        skill=('Chemistry uses long nouns and short verbs',
               ['Nouns here are often -ion, -ity, -ure, -ance. Verbs are often -ed or -s.',
                'A gap after the is a noun; after is or are, a participle.',
                'Count the dashes: -ity is three, -ion is three, -ation is five.',
                'Read the sentence back; the subject usually names the property.']),
        guided_text='Two objects can be made of the same atoms and behave completely '
                    'differ-----. Carbon is the famous case: the same element gives you graphite, '
                    'which is so so-- you can write with it, and diamond, which is the hard--- '
                    'natural substance there is. Nothing about the atoms has chan---. Only the '
                    'arrang----- has.',
        guided_hint='1  differ-----  →  ently  (differently)',
        guided=['ently', 'ft', 'est', 'ged', 'ement'],
        exam_text='Why does one material bend and anot--- shatter? Not because of what it is '
                  'made of, usually, but because of how the pieces are j-----. In a metal the '
                  'atoms sit in layers that can sl--- over one another, so a force makes the '
                  'metal change sh--- rather than break. In glass the atoms are locked in a '
                  'rigid network with no layers to sl---, so a force goes on building until '
                  'something gives, and then the whole thing fa--- at once. This is also why a '
                  'tiny scratch mat---- so much in glass and so little in steel: in glass the '
                  'crack has nowhere to spr--- its energy, and it trav--- straight through. '
                  'Engineers exploit this const----- deliberately. Safety glass is made by '
                  'putting the surface under compression, so that a crack has to fight the '
                  'material before it can even begin.',
        exam=['her', 'oined', 'ide', 'ape', 'ide', 'ils', 'ters', 'ead', 'els', 'raint'],
    ),

    r2=dict(
        sub='Writing up a lab report',
        skill=('Read the template and the feedback together',
               ['A template says what is required; feedback says what was missing. Both are '
                'tested.',
                'Note the word count and whether it includes anything.',
                'A resubmission usually carries a condition about the mark.',
                'Deadlines for different parts may differ. Check each one.']),
        docs=[
            ('notice', 'Chemistry 2 · laboratory report template', [
                '# Structure and length',
                '* Introduction (150 words), Method (250), Results (300), Discussion (400).',
                '* The word count excludes tables, figure captions and the reference list.',
                '# Results',
                '* Every graph needs axis labels with units and a caption beginning Figure 1, '
                'Figure 2…',
                '* Raw data goes in an appendix, not in the Results section.',
                '# Marking and resubmission',
                '* Reports below 40 may be resubmitted once, within ten days of feedback.',
                '* A resubmitted report is capped at 40, whatever its quality.',
                '# Extensions',
                '* Request before the deadline, not after. Requests after the deadline need '
                'evidence.',
            ], 'notice'),
            ('email', 'h.okonjo@northgate.edu', 'chem2.marking@northgate.edu',
             '04/02/2028', 'Report 2 feedback — resubmission offered', [
                 'Dear Mr Okonjo,',
                 '',
                 'Your report scored 36. The chemistry is sound and the Discussion is',
                 'the best I have read this week. Two things cost you the pass.',
                 '',
                 'First, none of your three graphs has units on the axes. Figure 2 is',
                 'unreadable without them, because the same curve would be plausible',
                 'in grams or in milligrams.',
                 '',
                 'Second, your raw data is in the Results section rather than an',
                 'appendix, which pushes Results to 740 words against a limit of 300.',
                 '',
                 'You may resubmit by 14 February. Please note that a resubmission is',
                 'capped at 40, so this is about the module requirement rather than',
                 'about the grade.',
                 '',
                 'Dr Lindqvist',
             ]),
        ],
        guided=[
            ('How long should the Discussion be?',
             ('150 words', '250 words', '300 words', '400 words'), 3,
             'The longest of the four sections, in the template.'),
            ('What does the word count exclude?',
             ('The introduction', 'Tables, captions and references', 'The discussion only',
              'Nothing'), 1,
             'Listed in the second line of the template.'),
            ('Where should raw data go?',
             ('In the Results', 'In the Discussion', 'In an appendix', 'In a caption'), 2,
             'Raw data goes in an appendix, not in the Results section.'),
            ('What must every graph have?',
             ('A title only', 'Axis labels with units and a caption', 'A grid',
              'Colour'), 1,
             'Both are required in the same line.'),
        ],
        exam=[
            ('What did Mr Okonjo score?',
             ('30', '36', '40', '44'), 1,
             'Below 40, which is why a resubmission is offered.'),
            ('What is the first problem with the report?',
             ('The Discussion is too short', 'The graphs have no units on the axes',
              'The references are missing', 'The method is unclear'), 1,
             'And the email explains why Figure 2 in particular is unreadable.'),
            ('Why is Figure 2 unreadable without units?',
             ('The curve is too small', 'The same curve would be plausible in grams or '
              'milligrams', 'The caption is missing',
              'It is in the wrong section'), 1,
             'Stated as the reason in the same sentence.'),
            ('Why is the Results section too long?',
             ('There are too many graphs', 'Raw data has been included in it',
              'The captions are counted', 'The discussion has been repeated'), 1,
             '740 words against a limit of 300, because the raw data is there.'),
            ('What is the highest mark a resubmission can get?',
             ('36', '40', '50', 'There is no cap'), 1,
             'Capped at 40, whatever its quality.'),
            ('What can be inferred about the resubmission?',
             ('It will improve his grade considerably', 'It is about passing the module rather '
              'than the mark', 'It is optional and pointless',
              'It must be a new experiment'), 1,
             'The email says so almost directly, given the cap.'),
        ],
    ),

    r3=dict(
        sub='Plastics and what replaces them',
        title='Plastics and Why Replacing Them Is Hard',
        words=280,
        paras=[
            'Plastic is unpopular and extremely good at its job, and the second fact is why the '
            'first one is so difficult to act on. A material that is light, cheap, waterproof, '
            'mouldable into any shape and chemically inert is not easily replaced by anything, '
            'and most of the proposed substitutes trade one of those properties for another.',
            'Consider packaging for food. Glass is recyclable indefinitely and weighs about ten '
            'times as much, so the carbon saved in disposal is spent again in transport. Paper '
            'is renewable and permeable, so it needs a coating, and most coatings are plastic. '
            'Compostable bioplastics solve the disposal problem only where industrial composting '
            'exists, and where it does not they behave like ordinary plastic with a '
            'reassuring label. None of this means the substitutes are useless. It means that a '
            'comparison has to include the whole life of the material, and that a substitution '
            'which looks obviously right at the point of purchase may not be.',
            'The most reliable saving turns out not to be substitution at all, but using less. '
            'A thinner film, a smaller cap, a container designed to be refilled, an item shipped '
            'without an outer box: none of these makes a good photograph, and together they '
            'account for more material saved than any of the replacements currently available. '
            'The uncomfortable conclusion is that the most effective action is also the least '
            'visible, which is a pattern anybody who has studied public health will recognise.',
        ],
        skill=('Follow a comparison across a whole life cycle',
               ['A passage that compares materials will move the comparison from one stage to '
                'another. Follow it.',
                'Each substitute is given one advantage and one cost. Note both.',
                'The conclusion often rejects the framing of the question. Mark it.',
                'A closing reference to another subject is usually a main-idea signal.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why plastic is bad for the environment',
              'Why replacing plastic is harder than it looks',
              'How bioplastics are made', 'Why glass is recyclable'), 1,
             'The second sentence frames it and the whole passage works through why.'),
            ('Why is plastic difficult to replace?',
             ('It is cheap to make', 'It combines several useful properties at once',
              'It is widely available', 'Factories are built for it'), 1,
             'Light, cheap, waterproof, mouldable and inert — and substitutes trade one for '
             'another.'),
            ('What is the problem with glass?',
             ('It cannot be recycled', 'It weighs about ten times as much',
              'It is not waterproof', 'It is expensive to make'), 1,
             'So the carbon saved in disposal is spent again in transport.'),
            ('Why does paper packaging need a coating?',
             ('It is not strong enough', 'It lets liquid through', 'It is not renewable',
              'It cannot be printed on'), 1,
             'Paper is renewable and permeable, so it needs a coating — usually plastic.'),
        ],
        exam=[
            ('When do compostable bioplastics solve the disposal problem?',
             ('Always', 'Only where industrial composting exists', 'Only in landfill',
              'Only for food packaging'), 1,
             'And elsewhere they behave like ordinary plastic with a reassuring label.'),
            ('What does the author say a comparison must include?',
             ('The price', 'The whole life of the material', 'The opinion of consumers',
              'The recycling rate'), 1,
             'Which is why a substitution that looks right at purchase may not be.'),
            ('What does the author identify as the most reliable saving?',
             ('Glass', 'Bioplastics', 'Using less material', 'Recycling more'), 2,
             'Not substitution at all, but using less.'),
            ('All of the following are given as examples of using less EXCEPT:',
             ('a thinner film', 'a smaller cap', 'a refillable container',
              'a compostable bag'), 3,
             'The compostable option belongs to substitution, which the author has just set '
             'aside.'),
            ('What does the author mean by "none of these makes a good photograph"?',
             ('They are too small to see', 'They are invisible as achievements',
              'They are not yet available', 'They are difficult to measure'), 1,
             'The most effective action is also the least visible.'),
            ('Which subject does the author say shows the same pattern?',
             ('Economics', 'Public health', 'Engineering', 'Archaeology'), 1,
             'Anybody who has studied public health will recognise it — prevention is invisible '
             'when it works.'),
            ('Which best states the main idea of paragraph 2?',
             ('Every substitute trades one advantage for another',
              'Glass should be preferred', 'Bioplastics are dishonest',
              'Food packaging is the biggest problem'), 0,
             'Three substitutes, three trade-offs, one conclusion about whole-life comparison.'),
        ],
    ),

    l1=dict(
        sub='Writing up a lab report',
        caption='Two students work out why their results differ',
        skill=('Follow a diagnosis',
               ['When two people compare results, they are eliminating causes. Track which are '
                'ruled out.',
                'The cause they settle on is the answer to the main question.',
                'A number repeated is a number tested.',
                'What they decide to do about it is the last question.']),
        warm=[
            ('Man: Did you get the same result?',
             ('About twice as high.', 'Not even close, actually.', 'In the fume cupboard.',
              'Yes, three graphs.'), 1,
             'A yes/no question about results, answered with a judgement.'),
            ('Woman: What temperature did you use?',
             ('Sixty degrees.', 'For twenty minutes.', 'In a beaker.',
              'Yes, the same one.'), 0,
             'What temperature wants a figure in degrees.'),
            ('Man: Shall we run it again?',
             ('It took an hour.', 'There is no time before Friday.',
              'Twice as high.', 'Yes, sixty degrees.'), 1,
             'A shall-we suggestion is answered by whether it is possible.'),
        ],
        script=[
            ('Woman', 'My yield is 62 per cent. Yours?'),
            ('Man', '31.'),
            ('Woman', 'Exactly half. That is not random error.'),
            ('Man', 'No. Something systematic.'),
            ('Woman', 'Same starting mass?'),
            ('Man', 'Two grams.'),
            ('Woman', 'Same. Same temperature?'),
            ('Man', 'Sixty, for twenty minutes.'),
            ('Woman', 'Same. Did you dry the product before weighing?'),
            ('Man', 'I weighed it straight out of the filter.'),
            ('Woman', 'Then it was wet, and wet product weighs more, not less. That would make '
                      'yours higher than mine, not lower.'),
            ('Man', 'Unless… I used the fifty-millilitre beaker. The method says a hundred.'),
            ('Woman', 'There it is. Half the solvent, so half the material stayed in the filter '
                      'rather than coming through.'),
            ('Man', 'So my number is not wrong. It is a measurement of something else.'),
            ('Woman', 'Write exactly that in the Discussion. They give marks for knowing which '
                      'experiment you actually did.'),
        ],
        items=[
            ('What is the difference between the two yields?',
             ('A few per cent', 'One is exactly half the other', 'They are the same',
              'One is twice as accurate'), 1,
             '62 and 31, which the woman immediately recognises as systematic.'),
            ('What do they rule out first?',
             ('Temperature and starting mass', 'The solvent', 'The weighing',
              'The time'), 0,
             'Two grams and sixty degrees for twenty minutes are the same for both.'),
            ('Why does the wet product not explain the difference?',
             ('It would make his yield higher, not lower', 'It was dried afterwards',
              'The filter was clean', 'The difference is too large'), 0,
             'The woman points out that the error would run the wrong way.'),
            ('What was the actual cause?',
             ('The wrong temperature', 'Half the volume of solvent', 'A broken beaker',
              'A weighing error'), 1,
             'Fifty millilitres instead of a hundred, so half the material stayed behind.'),
            ('What does the man mean by "it is a measurement of something else"?',
             ('His result is useless', 'He measured a different procedure accurately',
              'The equipment was faulty', 'He must repeat the experiment'), 1,
             'He did not do the method as written, so his number measures the method he did do.'),
            ('What does the woman advise him to do?',
             ('Repeat the experiment', 'Use her results',
              'Explain the cause in the Discussion', 'Ask for an extension'), 2,
             'They give marks for knowing which experiment you actually did.'),
        ],
    ),

    l2=dict(
        sub='Writing up a lab report',
        caption='An announcement about report deadlines',
        poster=['New deadline: Friday 12 February, 16.00',
                'Extensions: ask before, not after',
                'Resubmissions capped at 40'],
        skill=('Note the rule about asking',
               ['Deadline announcements usually distinguish before and after. Both cases are '
                'tested.',
                'Evidence requirements are a frequent question.',
                'A cap or a limit is almost always asked about.',
                'The reason a rule exists is given once, briefly.']),
        warm=[
            ('Woman: When is it due?',
             ('Friday at four.', 'Ten days.', 'In the lab.', 'Yes, it has moved.'), 0,
             'When wants a date and time.'),
            ('Man: Can I ask for an extension now?',
             ('It is capped at forty.', 'Yes — before the deadline is the easy case.',
              'On Friday afternoon.', 'No, you cannot resubmit.'), 1,
             'A can-I question wants permission, and this gives it with the distinction.'),
            ('Woman: What if I ask afterwards?',
             ('Then you need evidence.', 'By Friday at four.',
              'It is a ten-day window.', 'Yes, you can.'), 0,
             'A what-if question wants the consequence for that case.'),
        ],
        script=[
            ('Man', 'Report 3 and the rules around it. The deadline has moved to Friday the '
                    'twelfth at four, which is two days later than the handbook says, because '
                    'the spectrometer was out of service for most of last week. That applies to '
                    'everybody; you do not need to ask. Extensions beyond that. If you ask '
                    'before the deadline, an extension is usually granted and you do not have to '
                    'explain yourself in any detail — I would rather have a good report late '
                    'than a rushed one on time. If you ask after the deadline, I need evidence, '
                    'and that is not me being suspicious. It is because an extension granted '
                    'after the fact is unfair to everybody who handed in at four having stayed '
                    'up to do it. One more thing about resubmissions: if your report is below '
                    'forty you may resubmit within ten days, and the resubmitted mark is capped '
                    'at forty. People are sometimes upset by that cap. It exists so that '
                    'resubmission is about meeting the requirement, not about improving a mark '
                    'you are unhappy with.'),
        ],
        items=[
            ('Why has the deadline moved?',
             ('Too many students asked', 'The spectrometer was out of service',
              'The marking is late', 'A holiday falls that week'), 1,
             'For most of last week, which is why it applies to everybody.'),
            ('Do students need to ask for the new date?',
             ('Yes, by email', 'Yes, with evidence', 'No, it applies to everybody',
              'Only if they are late'), 2,
             'That applies to everybody; you do not need to ask.'),
            ('What happens if a student asks for an extension before the deadline?',
             ('It is refused', 'It is usually granted without detailed explanation',
              'Evidence is required', 'It is capped at forty'), 1,
             'And the speaker explains that he would rather have a good report late.'),
            ('Why is evidence needed for a late request?',
             ('The department requires it', 'It is unfair to those who handed in on time',
              'It prevents resubmission', 'The marking has started'), 1,
             'And this is not me being suspicious — the speaker says so explicitly.'),
            ('Why does the resubmission cap exist?',
             ('To save marking time', 'So resubmission is about meeting the requirement',
              'To discourage late work', 'Because the module is compulsory'), 1,
             'Not about improving a mark you are unhappy with.'),
        ],
    ),

    l3=dict(
        sub='Why materials differ',
        caption='A talk on what happens in a reaction',
        board=['Bonds break — energy in',
               'Bonds form — energy out',
               'Net: exothermic or endothermic',
               'Rate is a separate question'],
        skill=('Separate two questions about the same event',
               ['A talk may distinguish how much and how fast. Keep them apart.',
                'A chemical example given twice is being used to make both points.',
                'Listen for which one students confuse — that is the question.',
                'The last sentence usually names what the next lecture does.']),
        warm=[
            ('Woman: Does breaking bonds release energy?',
             ('No — it takes energy in.', 'On the board.', 'About half.',
              'Yes, it does.'), 0,
             'A does-it question about direction, corrected by the answer.'),
            ('Man: What does exothermic mean?',
             ('Energy out overall.', 'It is on the second line.', 'Very fast.',
              'Yes, exactly.'), 0,
             'A what-does-it-mean question wants the definition.'),
            ('Woman: Is rate the same as energy?',
             ('They are different questions.', 'About twice as fast.',
              'In the third stage.', 'Yes, the same.'), 0,
             'An is-it-the-same question is answered by distinguishing them.'),
        ],
        script=[
            ('Professor', 'Two questions about any reaction, and students answer the second one '
                          'when they have been asked the first. Question one: how much energy? '
                          'Breaking a bond always costs energy and making one always releases '
                          'it, so whether a reaction gives out heat or takes it in depends '
                          'entirely on which side is bigger. If forming the new bonds releases '
                          'more than breaking the old ones consumed, the difference comes out as '
                          'heat and we call it exothermic. Question two, and it is completely '
                          'separate: how fast? A reaction can be strongly exothermic and take '
                          'ten thousand years. Petrol and air sitting together in a jar is the '
                          'standard example — the reaction gives out an enormous amount of '
                          'energy and it does not happen, because nothing has supplied the '
                          'energy needed to break the first bonds. That is what a spark does. '
                          'Not supply the energy of the reaction, which the reaction supplies '
                          'itself, but supply the much smaller amount needed to start it. So '
                          'when somebody asks you why a reaction has not happened, do not look '
                          'at the energy diagram’s two ends. Look at the hill between them. Next '
                          'week: catalysts, which are entirely a story about that hill.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('All reactions release energy', 'How much energy and how fast are separate '
              'questions', 'Petrol is dangerous',
              'Catalysts change the energy released'), 1,
             'The talk is built on the two questions and the confusion between them.'),
            ('What happens when a bond breaks?',
             ('Energy is released', 'Energy is taken in', 'Nothing changes',
              'The reaction stops'), 1,
             'Breaking a bond always costs energy and making one always releases it.'),
            ('What makes a reaction exothermic?',
             ('New bonds release more than old bonds consumed', 'It happens quickly',
              'A spark is supplied', 'It involves oxygen'), 0,
             'The difference comes out as heat.'),
            ('Why does petrol in a jar not react?',
             ('It is not exothermic', 'Nothing has supplied the energy to start it',
              'Air is not present', 'The jar is sealed'), 1,
             'The reaction gives out an enormous amount of energy and still does not begin.'),
            ('What does a spark supply?',
             ('The energy of the reaction', 'The energy needed to start it',
              'Oxygen', 'A catalyst'), 1,
             'Not the energy of the reaction, which the reaction supplies itself.'),
            ('What will the next lecture be about?',
             ('Energy diagrams', 'Catalysts', 'Exothermic reactions',
              'Measuring heat'), 1,
             'Catalysts, which are entirely a story about that hill.'),
        ],
    ),

    sp=[
        dict(sub='Why materials differ', focus='sequencing adverbs',
             skill=('Mark the steps out loud',
                    ['First, then, next, after that, finally — a short pause after each.',
                     'Once and until introduce a clause: once it dissolves, until it is clear.',
                     'Do not use and for every step. It flattens the sequence.',
                     'Finish the sequence you start. A method stopped halfway scores badly.']),
             repeat=['First, weigh two grams.',
                     'Then heat it gently for twenty minutes.',
                     'Once the solid has dissolved, add the second solution.',
                     'After that, filter the mixture and keep what stays in the filter.',
                     'Finally, dry the product thoroughly before you weigh it a second time.',
                     'Do not record the mass until the sample has been completely dried, or the figure will be too high.',
                     'If the volume of solvent is halved, much of the material stays in the filter rather than passing through it.'],
             theme='something you know how to make or do',
             qs=['First, is there something you know how to make or repair?',
                 'People learn practical things in different ways. How did you learn it, and '
                 'why that way?',
                 'Some people argue that schools should teach more practical skills and less '
                 'theory. Do you agree? Why or why not?',
                 'Finally, should every science course include laboratory work? Why or why not?'],
             model=[(2, 'By watching, then doing it badly, then doing it again. Nobody explained '
                        'anything and I am not sure explaining would have helped.'),
                    (4, 'Yes, and the reason is not the skill. It is that you cannot understand '
                        'what an error bar means until you have produced one.')],
             selfcheck=['I marked each step with a sequencing word',
                        'I did not join every step with and',
                        'I finished the whole sequence']),
        dict(sub='Writing up a lab report', focus='explaining what went wrong',
             skill=('Explain the cause, not the feeling',
                    ['My result was low because I used half the solvent — cause, then effect.',
                     'Avoid I made a mistake. Say what the mistake caused.',
                     'Use the passive where the actor does not matter: the sample was not dried.',
                     'One cause, one consequence, one correction.']),
             repeat=['The yield was lower than expected.',
                     'Half the material stayed in the filter.',
                     'The sample was weighed before it had been dried.',
                     'I used a fifty-millilitre beaker instead of a hundred.',
                     'Because the volume was halved, less of the product passed through.',
                     'The error is systematic rather than random, which is why both results differ by exactly a half.',
                     'If I repeated the experiment, I would check the volume against the method before I began rather than afterwards.'],
             theme='mistakes and what you learned',
             qs=['To start, have you ever made a mistake in a piece of practical work?',
                 'People respond to mistakes differently. How did you respond, and why?',
                 'Some people argue that students should be marked on method rather than on '
                 'results. Do you agree? Why or why not?',
                 'Last question. Should students be allowed to resubmit work? Why or why not?'],
             model=[(3, 'I agree, because the result depends partly on the equipment and the '
                        'method is entirely the student’s.'),
                    (4, 'Yes, but capped, as ours is. Otherwise the first submission becomes a '
                        'free draft and the deadline means nothing.')],
             selfcheck=['I gave the cause before the consequence',
                        'I avoided simply saying I made a mistake',
                        'I said what I would do differently']),
        dict(sub='Plastics and what replaces them', focus='academic register',
             skill=('Cost a proposal properly',
                    ['Use the unit’s words: substitute, dispose, finite, exploit, complement.',
                     'For each option give the gain and the cost, then the net.',
                     'Say at which stage the saving or the cost occurs.',
                     'Mark yourself against the three statements below.']),
             repeat=['Glass is recyclable but heavy.',
                     'Every substitute trades one property for another.',
                     'The carbon saved in disposal is spent again in transport.',
                     'A coating is required because paper is permeable.',
                     'Compostable material behaves like plastic where no composting exists.',
                     'A whole-life comparison may reverse a judgement that looked obvious at the point of purchase.',
                     'The most reliable saving is not substitution at all but using less material in the first place.'],
             theme='waste and what you buy',
             qs=['First, how much packaging do you throw away in a week?',
                 'People notice packaging differently. What do you notice, and why?',
                 'Some people argue that the responsibility for packaging lies with the '
                 'manufacturer rather than the shopper. Do you agree? Why or why not?',
                 'Finally, should single-use plastic be banned outright? Why or why not?'],
             model=[(3, 'I agree. A shopper cannot select packaging that is not on the shelf, so '
                        'the decision has already been made before they arrive.'),
                    (4, 'Not outright, because some substitutes are worse once you count '
                        'transport. I would ban it where a lighter alternative exists.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I gave a gain and a cost for each option',
                        'I said at which stage each occurred']),
    ],

    w1=dict(
        sub='Why materials differ',
        skill=('Process questions',
               ['What happens next? How is it made? What do I do when…?',
                'A passive process question keeps is or are in front of the subject.',
                'An embedded version keeps statement order: can you tell me how it is made.',
                'Use every tile exactly once.']),
        guided=[
            ('The mixture is filtered after heating.',
             ['happens', 'what', 'after', 'heating'],
             'What happens after heating?'),
            ('Safety glass is made by compressing the surface.',
             ['tell', 'can', 'you', 'me', 'how', 'it', 'is', 'made'],
             'Can you tell me how it is made?'),
            ('The sample must be dried before weighing.',
             ['know', 'you', 'do', 'when', 'it', 'should', 'be', 'dried'],
             'Do you know when it should be dried?'),
        ],
        exam=[
            ('The deadline has moved to Friday at four.',
             ['has', 'when', 'the', 'deadline', 'moved', 'to'],
             'When has the deadline moved to?'),
            ('A resubmission is capped at forty.',
             ['tell', 'can', 'you', 'me', 'whether', 'it', 'is', 'capped'],
             'Can you tell me whether it is capped?'),
            ('Raw data belongs in an appendix.',
             ['know', 'do', 'you', 'where', 'raw', 'data', 'goes'],
             'Do you know where raw data goes?'),
            ('Breaking a bond takes energy in.',
             ['happens', 'what', 'when', 'a', 'bond', 'breaks'],
             'What happens when a bond breaks?'),
            ('The student who used the smaller beaker got half the yield.',
             ['the', 'student', 'who', 'used', 'the', 'smaller', 'beaker', 'got', 'half',
              'the', 'yield'],
             'The student who used the smaller beaker got half the yield.'),
            ('Extensions must be requested before the deadline.',
             ['should', 'when', 'I', 'request', 'an', 'extension'],
             'When should I request an extension?'),
            ('Petrol does not ignite without a spark.',
             ['know', 'do', 'you', 'why', 'it', 'does', 'not', 'ignite'],
             'Do you know why it does not ignite?'),
        ],
    ),
    w2=dict(
        sub='Writing up a lab report',
        to='chem2.marking@northgate.edu',
        date='09/02/2028',
        subject='Report 3 — request for a short extension',
        scenario=[
            'Report 3 is due on Friday 12 February at four. You have the data but your laboratory '
            'partner, who holds the spectrometer output for the second half, is ill and has not '
            'been able to send it. You are asking before the deadline, which the announcement '
            'said is the easy case.',
            'Write an email to Dr Lindqvist.',
        ],
        bullets=['Say what you have and what you are waiting for.',
                 'Ask for a specific amount of extra time.',
                 'Say what you will do if the data does not arrive at all.'],
        skill=('Ask for a number of days, not for more time',
               ['A vague request is harder to grant than a specific one.',
                'Show what is already finished. It proves the request is not about starting '
                'late.',
                'Say what happens in the worst case, so no second email is needed.',
                'Seven minutes. 110–140 words.']),
        model=[
            'Dear Dr Lindqvist,',
            'I am writing before Friday’s deadline rather than after it, as you asked.',
            'My introduction, method and the first half of the results are written. What I am '
            'waiting for is the spectrometer output for runs four to six, which is on my lab '
            'partner’s account. She has been ill since Thursday and has not been able to send '
            'it.',
            'Could I have until Tuesday 16 February? Four days would be enough to finish the '
            'Results and rewrite the Discussion properly, rather than writing round the missing '
            'data.',
            'If the file does not arrive by Monday, I will submit on Tuesday using only the '
            'first three runs and say so explicitly in the Method, rather than asking for a '
            'second extension.',
            'Thank you,',
            'Hassan Okonjo',
        ],
        notes=['The first line uses the lecturer’s own distinction, which immediately places '
               'the request in the easy category.',
               'What is finished is listed before what is missing, so the request is clearly '
               'not about having started late.',
               'The ask is a date and a number of days, not more time.',
               'The worst case is stated, which means the reply can be a single word.'],
    ),
    w3=dict(
        sub='Plastics and what replaces them',
        prof='Dr Lindqvist',
        question='A university is considering replacing all plastic food packaging in its cafés '
                 'with compostable alternatives, at about twice the cost. Is that the best use '
                 'of the money, or would the same budget do more elsewhere?',
        posts=[('Yara', 'h',
                'It is worth doing. Students see the packaging every day, and a visible change '
                'teaches more than an invisible one. You cannot run an environmental policy that '
                'nobody can see; people stop believing anything is happening.'),
               ('Ivan', 'm',
                'The reading was clear that compostable material only works where industrial '
                'composting exists. Does ours? If the bins go to the same landfill, we would be '
                'paying twice as much for a label. I would spend the money on refill stations '
                'and on removing the outer wrapping, which saves material whether or not '
                'anybody notices.')],
        skill=('Check the condition before the conclusion',
               ['The reading made one substitute conditional. Ask whether the condition holds.',
                'If it does not, the argument is settled before the values debate begins.',
                'Then deal with the part that survives — here, Yara’s point about visibility.',
                'At least 100 words in ten minutes.']),
        starters=['Ivan has asked the question that settles this:…',
                  'The reading made compostables conditional on…',
                  'Yara’s point about visibility survives even if…',
                  'So I would…, and I would also…'],
        model=[
            'Ivan has asked the question that settles this, and it should be answered before '
            'anybody argues about values.',
            'The reading was explicit: compostable packaging solves the disposal problem only '
            'where industrial composting exists, and where it does not it behaves like ordinary '
            'plastic with a reassuring label. So the first thing to establish is whether this '
            'city has that facility. If it does not, we would be doubling the cost for no '
            'material saving at all, and Yara’s visible change would be visible and false, '
            'which is worse than invisible and true.',
            'But her point survives in another form. The reading also said the most effective '
            'saving is the least visible, and that this is why it loses arguments. So I would '
            'spend the money on refill stations, as Ivan suggests, and spend a very small part '
            'of it on a sign saying how much material the stations have saved this term.',
        ],
        model_words=176,
    ),

    gram=dict(
        title='Sequence and process language',
        headers=['Form', 'Example'],
        rows=[
            ['first, then, next, after that, finally', 'First weigh it, then heat it.'],
            ['once + clause', 'Once the solid has dissolved, add the acid.'],
            ['until + clause', 'Heat until the liquid is clear.'],
            ['before / after + -ing', 'Dry it before weighing it.'],
            ['Passive for a method', 'The mixture is filtered and the solid is kept.'],
            ['Imperative for instructions', 'Do not record the mass until it is dry.'],
            ['by which point / at this stage', 'By which point the reaction is complete.'],
        ],
        notes=[
            'Once and after both mean the earlier action is complete. Once is slightly more '
            'formal and very common in written methods.',
            'Until marks the end point of an action, not its start: heat until it is clear, '
            'never *heat since it is clear*.',
            'A written method uses the passive and the past; a spoken instruction uses the '
            'imperative and the present. Do not mix them in one paragraph.',
        ],
        watch='Do not write *after to dry it*. After and before take -ing or a clause: after '
              'drying it, or after it has been dried.',
        ex=[
            ('Join the steps with the word in brackets.',
             ['The solid dissolves. Add the acid. (once) →',
              'Heat the mixture. The liquid is clear. (until) →',
              'Dry the sample. Weigh it. (before) →',
              'Filter the mixture. Keep the solid. (after) →',
              'Weigh two grams. Heat it gently. (then) →',
              'The reaction is complete. The colour stops changing. (by which point) →'],
             ['Once the solid dissolves, add the acid.',
              'Heat the mixture until the liquid is clear.',
              'Dry the sample before weighing it.',
              'After filtering the mixture, keep the solid.',
              'Weigh two grams, then heat it gently.',
              'The colour stops changing, by which point the reaction is complete.']),
            ('Rewrite the instruction as a written method, in the passive.',
             ['Weigh two grams of the solid. →',
              'Heat the mixture for twenty minutes. →',
              'Filter the product and dry it. →',
              'Record the mass. →'],
             ['Two grams of the solid were weighed.',
              'The mixture was heated for twenty minutes.',
              'The product was filtered and dried.',
              'The mass was recorded.']),
            ('Correct the mistake in each sentence.',
             ['After to dry the sample, weigh it.',
              'Heat it since the liquid is clear.',
              'Once the solid will dissolve, add the acid.'],
             ['After drying the sample, weigh it.', 'Heat it until the liquid is clear.',
              'Once the solid dissolves, add the acid.']),
        ],
        bas='Build a Sentence uses process language in questions: What happens after heating? '
            'Can you tell me how it is made? The connector stays where it belongs and the '
            'question word goes to the front.',
    ),

    rev=dict(
        vocab=[
            ('to use one thing in place of another', 'substitute'),
            ('a quality or feature of something', 'attribute'),
            ('to get rid of something', 'dispose'),
            ('to improve by small changes', 'refine'),
            ('to show clearly', 'demonstrate'),
            ('based on good reasoning', 'valid'),
            ('clear or obvious; seeming to be true', 'apparent'),
            ('as small as possible', 'minimal'),
            ('having limits; not endless', 'finite'),
            ('to add at the end', 'append'),
            ('extra time granted for a deadline', 'extension'),
            ('an enclosed space that removes dangerous gases', 'fume cupboard'),
        ],
        gram=[
            ('__________ the solid dissolves, add the acid.', 'Once'),
            ('Heat the mixture __________ the liquid is clear.', 'until'),
            ('Dry the sample before __________ (weigh) it.', 'weighing'),
            ('__________ (after) filtering, keep the solid.', 'After'),
            ('The mixture __________ (heat) for twenty minutes.', 'was heated'),
            ('Weigh two grams, __________ heat it gently.', 'then'),
            ('The colour stops changing, __________ which point it is complete.', 'by'),
            ('Do not record the mass __________ it is dry.', 'until'),
        ],
        mini=[
            ('According to the passage on page 122, the most reliable saving comes from',
             ('glass', 'bioplastics', 'using less material', 'recycling'), 2,
             'Not substitution at all, but using less — and the author calls it the least '
             'visible action.'),
            ('In the talk, a spark supplies',
             ('the energy of the reaction', 'the energy needed to start it',
              'oxygen', 'a catalyst'), 1,
             'The reaction supplies its own energy; the spark gets it over the hill.'),
            ('Which sentence is correct?',
             ('After to dry the sample, weigh it.', 'Heat it since the liquid is clear.',
              'Once the solid dissolves, add the acid.',
              'Once the solid will dissolve, add the acid.'), 2,
             'Once takes a present-tense clause; after takes -ing; until marks the end point.'),
            ('A student who asks for an extension after the deadline must',
             ('pay a fee', 'provide evidence', 'resubmit', 'accept a cap of forty'), 1,
             'And the lecturer explains that this is about fairness, not suspicion.'),
            ('A resubmitted report is capped at',
             ('36', '40', '50', 'there is no cap'), 1,
             'So resubmission is about meeting the requirement rather than improving a mark.'),
            ('In Writing, the email task is worth',
             ('seven minutes', 'ten minutes', 'fifteen minutes', 'twenty minutes'), 0,
             'Seven for the email and ten for the academic discussion.'),
        ],
    ),
    tip='In Complete the Words the dashes count the missing letters exactly. Count them before '
        'you write, because -ed and -ing are two and three, and -ion and -ity are both three. '
        'A right word with the wrong number of letters is a wrong answer.',
)
