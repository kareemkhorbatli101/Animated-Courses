# -*- coding: utf-8 -*-
"""Unit 59 - Consciousness and Explanation.

Cycle 3 is the 2006 imagery study. A patient meeting every
criterion of the vegetative state was asked in a scanner to
imagine playing tennis and then to imagine walking through her
house; the two instructions recruit anatomically distinct
regions, her responses were indistinguishable from healthy
volunteers, and the examination required no behaviour of her at
all. The passage then separates the two inferences: her own case
is settled, and nothing follows about a patient who produces no
such activity, since the task presupposes language, sustained
attention and one particular variety of imagery.

Cycle 4 sets out the functional standard of explanation and the
residue it appears to leave, then three arguments - Nagel on the
bat in 1974, Levine on water and pain in 1983, Jackson on the
monochrome room in 1982 - and Chalmers in 1995 with the easy
problems, the hard problem and the zombie that denies
supervenience. The passage ends by naming the structure the three
share: each moves from something we cannot imagine or derive to a
conclusion about what the world contains.

Cycle 5 grants the gap and disputes its location. The premises
concern our capacities and the conclusions concern nature, and
nobody has built the bridge; the vital force was a gap of the
same shape, and it closed without anybody being shown why
chemistry must produce life, as did lightning, heredity and
combustion. Mary gains an ability rather than a fact, and
conceivability is not possibility. The concession is that no
theory on either side predicts which physical arrangements are
accompanied by experience, so the clinic, the laboratory and the
courts must work by precaution."""

UNIT = {'n': 59,
 'vol': 6,
 'level': 'C1',
 'title': 'Consciousness and Explanation',
 'grammar': 'Metadiscourse and the shape of an argument',
 'field': 'qualia, reduction, explanatory gap',
 'names': ('Nagel',
           'Levine',
           'Jackson',
           'Chalmers',
           'Dennett',
           'Owen',
           'Mary',
           'Ravensholt',
           'Okafor',
           'Yeboah',
           'Nkechi',
           'Isolde',
           'Brennan',
           'Delacroix',
           'Thandiwe',
           'Emeric',
           'Hyacinth',
           'Konstantin',
           'Oyelaran'),
 'opener_line': 'This unit is about a standard of explanation that works everywhere except in '
                'one place. Cycle 3 watches a diagnosis overturned by a scan that required no '
                'behaviour at all, and notes carefully what a blank scan does not establish. '
                'Cycle 4 sets out the three arguments for an explanatory gap and finds one '
                'structure in all of them. Cycle 5 grants the gap, relocates it in us rather '
                'than in nature, and concedes that nobody on either side can say which physical '
                'systems are aware.',
 'subs': ['What it is like to be anybody',
          'Why the gap looks unbridgeable',
          'Whether the gap is in the world'],
 'icons': ['brain', 'brief', 'chart'],
 'acad': [('hereafter', 'from this point in the text onward'),
          ('henceforth', 'from now on, in what follows'),
          ('moreover', 'adding a further point of the same kind'),
          ('namely', 'introducing the exact thing meant'),
          ('incidentally', 'by the way, and not part of the argument'),
          ('consequently', 'as a result of what has just been said'),
          ('thus', 'in this way, or therefore'),
          ('likewise', 'in the same way as the case just given'),
          ('similarly', 'by a parallel that is not identical'),
          ('summarily', 'briefly and without the detail'),
          ('briefly', 'in few words'),
          ('schematically', 'in outline, without the particulars'),
          ('strictly', 'taking the term in its exact sense'),
          ('lastly', 'introducing the final item of a list')],
 'fieldwords': [('qualia', 'the felt qualities of an experience'),
                ('reduction', 'the account of one thing wholly in terms of another'),
                ('phenomenal', 'to do with how things feel from inside'),
                ('phenomenology', 'the description of experience as it is had'),
                ('introspection', 'looking inward at one’s own states'),
                ('physicalism', 'the view that everything is physical'),
                ('dualism', 'the view that mind and matter are two things'),
                ('emergent', 'arising from parts without being in any of them'),
                ('supervenience', 'fixed entirely by the physical facts'),
                ('zombie', 'a being alike in every physical respect and unaware'),
                ('neural', 'to do with the nerves and the brain'),
                ('vegetative', 'awake without any sign of awareness'),
                ('awareness', 'the having of experience at all'),
                ('intentionality', 'the aboutness of a thought'),
                ('functionalism', 'the view that a state is what it does'),
                ('eliminative', 'proposing that the thing does not exist')],
 'collocs': [('what it is like', 'the phrase the whole dispute turns on'),
             ('from the inside', 'as the subject has it'),
             ('in principle', 'in theory, whatever the practice'),
             ('all the facts', 'everything there is to know'),
             ('to beg the question', 'to assume what you set out to show'),
             ('a thought experiment', 'a case imagined to test a claim'),
             ('to leave out', 'to omit something that matters'),
             ('by definition', 'as a matter of what the word means'),
             ('at bottom', 'when everything else is stripped away'),
             ('to take seriously', 'to treat as worth answering')],
 'stance': [('something is left out', 'naming an incompleteness'),
            ('I turn now to', 'marking a move in the argument'),
            ('it remains to show', 'announcing what is still owed'),
            ('the question is begged', 'charging a circular argument'),
            ('nothing here is settled', 'declining to conclude')],
 'nuance': [('awareness / responsiveness', 'experience / reaction'),
            ('explain / describe', 'account for / set out'),
            ('reduction / elimination', 'wholly in terms of / not there')],
 'candos': ['I can signpost an argument without padding it.',
            'I can state the explanatory gap in one sentence.',
            'I can explain what a thought experiment is for.',
            'I can say why a functional account may leave something out.',
            'I can describe a case where awareness was undetectable.',
            'I can decline to conclude without appearing evasive.'],
 'vocab_talk': ['How would you know that somebody else is aware?',
                'What would convince you that a machine felt anything?',
                'Describe an experience you could not put into words.',
                'Who should decide for a patient who cannot answer?'],
 'again': ['subjective',
           'correlate',
           'residue',
           'threshold',
           'attribution',
           'counterfactual',
           'criterion',
           'inference'],
 'family': ('explain',
            [('explanation', 'noun', 'the explanation accounts for the behaviour'),
             ('explanatory', 'adjective', 'the explanatory gap is the subject of the unit'),
             ('unexplained', 'adjective', 'the felt quality remains unexplained')]),
 'r1': {'sub': 'What it is like to be anybody',
        'skill': ('Metadiscourse: structure, transition, obligation, limitation',
                  ['A signpost says nothing about the subject and everything about the shape.',
                   'The limitation marker is the valuable one: nothing here is settled.',
                   'Three or four markers in a long answer are plenty.']),
        'guided_text': 'Metadiscourse is the writing that tells a reader where he is in your '
                       'argument, and at this level it earns more marks than any other single '
                       '---ice. This section sets out the objection. I turn now to the reply. It '
                       '---ains to show that the two cannot both be held. Each of those '
                       'sentences says nothing about the subject and everything about the ---pe, '
                       'and a reader who knows the shape forgives a great deal of difficulty in '
                       'the content. The failure mode is ---ding: a signpost that points at '
                       'nothing in particular, such as it is interesting to note that, which '
                       'costs you a line and tells the reader ---hing.',
        'guided': ['dev', 'rem', 'sha', 'pad', 'not'],
        'guided_hint': '---ice is device — the slot follows any other single, so it needs a '
                       'noun.',
        'exam_text': 'Four kinds of signpost do nearly all the work. First, the -----ncement of '
                     'structure: this paper argues, the section that follows, three objections '
                     'will be ------ered. Second, the transition: I turn now to, having disposed '
                     'of that, the harder case is this. Third, the -----ation: it remains to '
                     'show, nothing so far establishes, the argument still owes an account of. '
                     'Fourth, and the one candidates ----ect, the limitation: nothing here is '
                     'settled, this leaves the question open, I claim only that. The fourth kind '
                     'is worth more than the other three ---ether, because it is the one a '
                     '----er reads as judgement rather than as ------ence. Two cautions. Do not '
                     'signpost a turn you do not take, and do not ----post every sentence; three '
                     'or four markers in a long answer are ----ty, and a paragraph with a '
                     'signpost in every line reads like a ------ble.',
        'exam': ['annou',
                 'consid',
                 'oblig',
                 'negl',
                 'tog',
                 'mark',
                 'confid',
                 'sign',
                 'plen',
                 'timeta']},
 'r2': {'sub': 'What a scale can detect',
        'skill': ('Reading an assessment protocol against a clinician’s objection',
                  ['A protocol states a scale and, by implication, what counts as a finding.',
                   'The objection usually accepts the scale and attacks the inference from it.',
                   'A question about the reply wants the proposal, not the worry.']),
        'docs': [('notice',
                  'Ravensholt Hospital · protocol for the assessment of awareness in '
                  'unresponsive patients, 2035',
                  ['# When an assessment is made',
                   'Twice weekly for the first eight weeks, then monthly, by a trained assessor.',
                   '# What is recorded',
                   '* The behavioural scale score, item by item, with the time of day and the '
                   'medication given.',
                   '* Any response reported by a visitor, recorded separately and not scored.',
                   '# What counts as a finding of awareness',
                   '* A command followed on two occasions within one assessment, witnessed by '
                   'the assessor.',
                   '# Communication with families',
                   '* Families are told the score, its meaning and its limits, at every '
                   'assessment.',
                   '# Review',
                   '* The protocol is reviewed annually against published research.'],
                  'notice'),
                 ('email',
                  'n.okaforyeboah@ravensholt.nhs.uk',
                  'protocols@ravensholt.nhs.uk',
                  '05/04/2035',
                  'Awareness protocol — the scale is right and a zero score is being read as a '
                  'finding',
                  ['Dear colleagues,',
                   '',
                   'This is the best version of the protocol we have had. The separate',
                   'recording of visitors’ reports and the requirement to explain the',
                   'limits of the score to families are both overdue, and I would keep',
                   'them whatever happens to the rest.',
                   '',
                   'My objection concerns a sentence that is not in the document. The',
                   'protocol says what counts as a finding of awareness and says nothing',
                   'about what a score of zero counts as. In practice it is being read,',
                   'by staff and by families, as a finding of no awareness, and it is',
                   'nothing of the kind. Of forty-one patients assessed here in 2033 and',
                   'scored at zero on every assessment, four were later able to',
                   'communicate, three of them by a route the scale does not test.',
                   '',
                   'What I propose is one line in the findings section: a score of zero',
                   'is a failure to detect awareness and is not a finding of its',
                   'absence. I would add a second line requiring any note that records a',
                   'zero to carry that sentence with it, because the sentence is useless',
                   'in a protocol nobody reads and useful in a file everybody does.',
                   '',
                   'Nkechi Okafor-Yeboah, Consultant in Rehabilitation Medicine'])],
        'guided': [('How often is an assessment made in the first eight weeks?',
                    ('Daily', 'Twice weekly', 'Monthly', 'Once only'),
                    1,
                    'Then monthly, by a trained assessor.'),
                   ('What is recorded alongside the score?',
                    ('The family’s opinion',
                     'The time of day and the medication given',
                     'The consultant’s view',
                     'Nothing else'),
                    1,
                    'The score is recorded item by item.'),
                   ('How are visitors’ reports treated?',
                    ('Scored with the rest',
                     'Recorded separately and not scored',
                     'Disregarded entirely',
                     'Reported to the family only'),
                    1,
                    'Which keeps them in the record without letting them move the score.'),
                   ('What counts as a finding of awareness?',
                    ('Any movement at all',
                     'A command followed twice within one assessment, witnessed by the assessor',
                     'A visitor’s report of a response',
                     'A score above zero'),
                    1,
                    'Two occasions, one assessment, one witness.')],
        'exam': [('What does Nkechi Okafor-Yeboah say she would keep?',
                  ('The scale itself',
                   'The separate recording of visitors’ reports and the duty to explain the '
                   'limits',
                   'The annual review',
                   'The medication record'),
                  1,
                  'She calls both of them long overdue, whatever happens next.'),
                 ('What is her objection about?',
                  ('A sentence in the document',
                   'A sentence that is not in the document',
                   'The frequency of assessment',
                   'The training of assessors'),
                  1,
                  'The protocol says nothing about what a zero score counts as.'),
                 ('How is a zero score being read in practice?',
                  ('As inconclusive',
                   'As a finding of no awareness',
                   'As a reason for further testing',
                   'As a clerical error'),
                  1,
                  'By staff and by families alike.'),
                 ('What happened to four of the forty-one patients?',
                  ('They recovered fully',
                   'They were later able to communicate',
                   'They were reassessed',
                   'They were discharged'),
                  1,
                  'All had scored zero on every assessment.'),
                 ('What is notable about three of those four?',
                  ('They were assessed less often',
                   'They communicated by a route the scale does not test',
                   'They were the youngest',
                   'They had been scored by one assessor'),
                  1,
                  'Which is the point of the figures.'),
                 ('What line does she propose?',
                  ('That the scale be replaced',
                   'That a score of zero is a failure to detect awareness and not a finding of '
                   'its absence',
                   'That assessments be daily',
                   'That visitors’ reports be scored'),
                  1,
                  'One line in the findings section.'),
                 ('Why does she want the sentence in the note as well?',
                  ('To satisfy the auditors',
                   'Because the sentence is useless in a protocol nobody reads and useful in a '
                   'file everybody does',
                   'To warn the family',
                   'To record the assessor’s name'),
                  1,
                  'Which is the argument for the second line.')]},
 'r3': {'sub': 'The patient who imagined playing tennis',
        'title': 'A Finding That Required No Behaviour',
        'words': 272,
        'skill': ('Reading a study that changed one classification',
                  ['The patient and her assessment come first.',
                   'Then the method, and why the two instructions were chosen.',
                   'A question about the ending wants the inference the study does not '
                   'license.']),
        'paras': ['A patient admitted after a road collision in 2005 satisfied every criterion '
                  'of the vegetative state: eyes open, a preserved cycle of sleep and waking, '
                  'and no response of any description to command upon repeated behavioural '
                  'assessment. The examination that overturned her classification demanded no '
                  'fresh behaviour of her whatever. She was placed in a scanner and instructed, '
                  'in the ordinary conversational manner, to imagine playing tennis, and '
                  'subsequently to imagine traversing the rooms of her own house.',
                  'The two instructions were selected because they recruit regions anatomically '
                  'distinct and distinguishable without interpretation: imagery of movement '
                  'produces activity in the supplementary motor area, imagery of place in a '
                  'region of the temporal lobe. Her responses were indistinguishable from those '
                  'of healthy volunteers given the same instruction, appeared only upon the '
                  'giving of the instruction, and ceased when she was asked to rest. The finding '
                  'was published in 2006, and the method has since been used to put questions to '
                  'such patients and to obtain answers.',
                  'Two inferences require separation, and the subsequent literature has not '
                  'invariably preserved it. The study established that this patient understood '
                  'speech, retained a working memory and could sustain a voluntary act for '
                  'thirty seconds, which is a finding about her and a decisive one. It remains '
                  'to show, and nothing in the method shows it, that a patient producing no such '
                  'activity lacks awareness, since the task requires language, attention and one '
                  'particular form of imagery, any of which may fail in somebody fully aware. '
                  'Nothing here is settled about the general case. What is settled is that the '
                  'behavioural examination had been wrong about one person.'],
        'guided': [('What criterion did the patient satisfy in 2005?',
                    ('Brain death',
                     'Every criterion for the vegetative state',
                     'A locked-in diagnosis',
                     'None that is recorded'),
                    1,
                    'She woke and slept and gave no response to command.'),
                   ('What did the examination that altered her classification require of her?',
                    ('A new behaviour',
                     'No new behaviour whatever',
                     'A spoken answer',
                     'A hand movement'),
                    1,
                    'She was asked to imagine two things.'),
                   ('What was she asked to imagine?',
                    ('A conversation and a journey',
                     'Playing tennis, and walking through the rooms of her house',
                     'A number and a colour',
                     'Nothing at all'),
                    1,
                    'Two instructions, given in the ordinary way.'),
                   ('Why were those two instructions selected?',
                    ('They are easy to remember',
                     'They recruit regions that are anatomically distinct and distinguishable '
                     'without interpretation',
                     'They take the same time',
                     'They had been used before'),
                    1,
                    'Movement imagery and place imagery go to different regions.')],
        'exam': [('Where does imagery of movement produce activity?',
                  ('In the temporal lobe',
                   'In the supplementary motor area',
                   'Throughout the cortex',
                   'Nowhere detectable'),
                  1,
                  'Imagery of place goes to a region of the temporal lobe.'),
                 ('What was notable about her responses?',
                  ('They were weaker than a volunteer’s',
                   'They were indistinguishable from those of healthy volunteers',
                   'They appeared at random',
                   'They continued after the instruction'),
                  1,
                  'They appeared only on the giving of the instruction and ceased on rest.'),
                 ('What has the method since been used for?',
                  ('Diagnosing the vegetative state',
                   'Putting questions to such patients and obtaining answers',
                   'Replacing the behavioural scale',
                   'Measuring sedation'),
                  1,
                  'Which is why the 2006 paper matters beyond the one case.'),
                 ('What did the study establish about this patient?',
                  ('That she would recover',
                   'That she understood speech, retained a working memory and could sustain a '
                   'voluntary act',
                   'That she felt pain',
                   'That her scale score was wrong by two points'),
                  1,
                  'A finding about her, and a decisive one.'),
                 ('What does the writer say it remains to show?',
                  ('That the method is reliable',
                   'That the patient understood speech',
                   'That a patient producing no such activity lacks awareness',
                   'That the regions are distinct'),
                  2,
                  'And nothing in the method shows it.'),
                 ('Why might a fully aware patient produce no such activity?',
                  ('The scanner is unreliable',
                   'The task requires language, attention and one particular form of imagery, '
                   'any of which may fail',
                   'The instructions are too long',
                   'The regions overlap'),
                  1,
                  'A null result has more than one explanation.'),
                 ('What does nothing here is settled refer to?',
                  ('The patient’s own case',
                   'The general case',
                   'The published method',
                   'The behavioural scale'),
                  1,
                  'Her own case is described as settled.'),
                 ('What is settled, on the writer’s account?',
                  ('That the vegetative state is a mistaken category',
                   'That the behavioural examination had been wrong about one person',
                   'That awareness can be measured',
                   'That imagery is reliable'),
                  1,
                  'Which is a smaller claim than the literature sometimes makes.'),
                 ('Which description of the study does the writer support?',
                  ('It proved the scale worthless',
                   'It altered one classification without requiring any new behaviour',
                   'It measured awareness directly',
                   'It replaced the clinical examination'),
                  1,
                  'The examination required nothing new from the patient.')]},
 'r4': {'sub': 'Why the gap looks unbridgeable',
        'title': 'Everything About the Bat Except One Thing',
        'words': 437,
        'skill': ('Reading three arguments with one structure',
                  ['The standard of explanation comes first, and where it works.',
                   'Then three arguments. Note what each one asks you to imagine.',
                   'A question about the ending wants the step they share.']),
        'paras': ['The standard of explanation in question is the one functionalism makes '
                  'explicit. A state is held to be explained when its causes, its effects and '
                  'the role it occupies have been set out, and the standard is an exacting one '
                  'that the sciences satisfy daily. Digestion is the conversion of food under '
                  'enzymes; memory is the retention of a representation available for later use; '
                  'vision, understood as the discrimination of surfaces, is a computation upon a '
                  'retinal array. In each instance the explanation is complete in the sense that '
                  'nothing further is demanded once the mechanism is given. The difficulty of '
                  'this subject is that an explanation of that form, applied to experience, '
                  'appears to leave a residue, and the residue consists in the felt qualities '
                  'themselves, the qualia of the experience.',
                  'Three arguments press the point and each proceeds by an act of imagination. '
                  'Nagel asked in 1974 what it is like to be a bat, observing that a complete '
                  'account of echolocation delivers the mechanism and not the phenomenology, so '
                  'that the phenomenal character of experience escapes a description given from '
                  'no particular point of view, however complete that description may be. Levine '
                  'named the explanatory gap in 1983 by a comparison: the identification of '
                  'water with a molecular structure explains everything water does, whereas the '
                  'identification of pain with a neural event leaves it an open question why '
                  'that event should be accompanied by anything at all. Jackson imagined in 1982 '
                  'a scientist raised in a monochrome room who knows every physical fact about '
                  'colour vision and learns something upon her release, from which it would '
                  'follow that physical knowledge is not the whole of knowledge.',
                  'Chalmers assembled the position in 1995 and supplied its vocabulary. The easy '
                  'problems concern discrimination, report, attention and the control of '
                  'behaviour, all of them questions about function and all amenable to the '
                  'ordinary methods, and the hard problem is why function should be attended by '
                  'experience. His instrument is the zombie: a being alike in every physical '
                  'respect and wholly unaware, whose conceivability is held to show that '
                  'experience does not follow from the physical facts by necessity, which is to '
                  'deny supervenience. Nothing in the three arguments requires dualism, and '
                  'their authors have for the most part declined it; what they require is the '
                  'admission of a residue that introspection reports and functional description '
                  'omits. The three arguments share a structure worth stating plainly, since the '
                  'objection in the next passage attacks it rather than any of them: each moves '
                  'from something we cannot imagine, or cannot derive, to a conclusion about '
                  'what the world contains.'],
        'guided': [('When is a state held to be explained?',
                    ('When it can be measured',
                     'When its causes, effects and role have been set out',
                     'When it can be described from the inside',
                     'When it has a name'),
                    1,
                    'A standard the sciences satisfy daily.'),
                   ('What does the writer say about digestion and memory?',
                    ('They remain unexplained',
                     'Nothing further is demanded once the mechanism is given',
                     'They are easier than vision',
                     'They involve experience'),
                    1,
                    'The explanation is complete in that sense.'),
                   ('What is the residue?',
                    ('An unmeasured quantity',
                     'The felt quality itself',
                     'A gap in the data',
                     'The role of attention'),
                    1,
                    'Which is what an explanation of that form appears to leave behind.')],
        'exam': [('What did Nagel observe in 1974?',
                  ('That bats cannot be studied',
                   'That a complete account of echolocation delivers the mechanism and not the '
                   'phenomenology',
                   'That bats lack experience',
                   'That imagination is unreliable'),
                  1,
                  'The subjective character escapes a description from no point of view.'),
                 ('What comparison did Levine use in 1983?',
                  ('Pain and pleasure',
                   'Water and its molecular structure against pain and a neural event',
                   'Bats and humans',
                   'Colour and sound'),
                  1,
                  'The first explains everything water does; the second leaves a question open.'),
                 ('What does Jackson’s scientist learn on her release?',
                  ('Nothing at all',
                   'Something, from which it would follow that physical knowledge is not the '
                   'whole of knowledge',
                   'That colour vision is physical',
                   'That her training was mistaken'),
                  1,
                  'She is supposed to know every physical fact beforehand.'),
                 ('What are the easy problems, in Chalmers’s vocabulary?',
                  ('Problems nobody has solved',
                   'Discrimination, report, attention and the control of behaviour',
                   'Problems about experience',
                   'Problems of measurement'),
                  1,
                  'All of them questions about function.'),
                 ('What is the zombie argument held to show?',
                  ('That zombies exist',
                   'That function is unimportant',
                   'That the hard problem is easy',
                   'That experience does not follow from the physical facts by necessity'),
                  3,
                  'Which is to deny supervenience.')]},
 'r5': {'sub': 'Whether the gap is in the world',
        'title': 'A Fact About Us, or a Fact About Nature',
        'words': 449,
        'skill': ('Reading an objection to a form of argument',
                  ['The objection grants the gap and relocates it.',
                   'Then the historical pattern, and the two particular replies.',
                   'The concession at the end concerns what nobody can predict.']),
        'paras': ['The gap is granted in the objection that follows and its location is what '
                  'comes under dispute. Every one of the three arguments proceeds from an '
                  'incapacity of ours, namely an inability to imagine, to derive or to '
                  'anticipate, and arrives at a conclusion about the constitution of nature. The '
                  'objection is that no such passage is valid, since the premise concerns the '
                  'reach of human imagination and the conclusion concerns the furniture of the '
                  'world, and the two are connected only upon the assumption that whatever we '
                  'cannot conceive cannot obtain. Dennett gave the arguments their nickname on '
                  'that ground, calling them pumps for intuition rather than demonstrations, and '
                  'the charge is that their persuasiveness is a measure of our imaginative '
                  'limits. The accusation is not that the arguments are foolish but that their '
                  'premises belong to psychology and their conclusions to metaphysics.',
                  'The historical pattern is offered in support. The vital force was once an '
                  'explanatory gap of exactly this shape: no arrangement of chemistry seemed '
                  'capable of yielding self-maintenance, and the conceivability of a corpse '
                  'molecularly identical to a living body was taken as a demonstration that '
                  'something further was required. The gap closed, and closed in a manner worth '
                  'noticing, since nobody was eventually shown why chemistry must produce life; '
                  'the demand simply ceased to be felt as the mechanisms accumulated. Lightning '
                  'and electricity, heredity and the molecule, and combustion and oxidation '
                  'exhibit the same history, and in each case the eventual satisfaction looked '
                  'less like an answer than like a loss of appetite for the question. The '
                  'parallel is not offered as a proof, since a pattern of four closures does not '
                  'establish that a fifth is approaching.',
                  'Two particular replies follow. The scientist leaving her monochrome room '
                  'acquires an ability rather than a fact, on this account, and knowing how a '
                  'colour looks is not a further item of information but a new way of '
                  'representing an item she already possessed. The distinction is between the '
                  'knowledge of a fact and the acquisition of a capacity, and the objection '
                  'maintains that introspection cannot tell the two apart. And the '
                  'conceivability of a zombie establishes nothing about possibility, since a '
                  'watery liquid of another molecular structure is readily conceivable and '
                  'impossible nonetheless. The concession the objection cannot avoid is '
                  'substantial and is made without enthusiasm: no theory on either side predicts '
                  'which physical arrangements are accompanied by experience and which are not, '
                  'so the dispute remains open after half a century, and the practical questions '
                  'it bears upon, concerning patients, animals and machines, must be settled '
                  'meanwhile by precaution rather than by knowledge, which is an uncomfortable '
                  'position and the only honest one available.'],
        'guided': [('What does the objection grant?',
                    ('The location of the gap',
                     'The gap itself',
                     'The zombie argument',
                     'Nothing at all'),
                    1,
                    'What it disputes is where the gap is located.'),
                   ('What does every one of the three arguments proceed from?',
                    ('An experimental result',
                     'An incapacity of ours',
                     'A definition',
                     'A historical precedent'),
                    1,
                    'An inability to imagine, to derive or to anticipate.'),
                   ('On what assumption are the premise and the conclusion connected?',
                    ('That the world is physical',
                     'That whatever we cannot conceive cannot obtain',
                     'That imagination is reliable',
                     'That experience is a function'),
                    1,
                    'Which the objection declines to grant.')],
        'exam': [('What was once an explanatory gap of the same shape?',
                  ('Electricity', 'The vital force', 'Oxidation', 'Heredity'),
                  1,
                  'No chemistry seemed capable of yielding self-maintenance.'),
                 ('How did that gap close?',
                  ('Somebody proved that chemistry must produce life',
                   'The demand ceased to be felt as the mechanisms accumulated',
                   'The question was forbidden',
                   'A new force was discovered'),
                  1,
                  'Which the writer says is worth noticing.'),
                 ('What does the eventual satisfaction look like, in these cases?',
                  ('A decisive proof',
                   'A loss of appetite for the question',
                   'A change of vocabulary only',
                   'A new gap'),
                  1,
                  'Lightning, heredity and combustion show the same history.'),
                 ('What does the scientist acquire on leaving the room, on this account?',
                  ('A new fact', 'An ability', 'A false belief', 'Nothing at all'),
                  1,
                  'A new way of representing something she already possessed.'),
                 ('What concession cannot be avoided?',
                  ('That the vital force was real',
                   'That the gap is in the world',
                   'That no theory on either side predicts which arrangements are accompanied by '
                   'experience',
                   'That the replies fail'),
                  2,
                  'So the practical questions must be settled by precaution.')]},
 'l1': {'sub': 'What it is like to be anybody',
        'caption': 'Two nurses after a family meeting on a long-stay ward',
        'skill': ('Hearing somebody refuse to say more than she knows',
                  ['A confident claim is made and then narrowed twice.',
                   'Listen for the distinction she insists on.',
                   'The item about the family is the one the conversation is for.']),
        'warm': [('Man: The family asked whether he can hear them.',
                  ('And the honest answer is that nobody in that room knows.',
                   'Yes, he can.',
                   'No, he cannot.',
                   'Six weeks.'),
                  0,
                  'She refuses to say more than the evidence allows.'),
                 ('Man: But he turns his head when they come in.',
                  ('He turns it when the trolley comes in as well.',
                   'Yes, that settles it.',
                   'Only sometimes.',
                   'A reflex.'),
                  0,
                  'Responding is not the same as being aware.'),
                 ('Man: So what did you tell them?',
                  ('That we treat him as aware, because the cost of error runs one way.',
                   'That he is unaware.',
                   'That nobody can know.',
                   'Nothing at all.'),
                  0,
                  'A decision under ignorance rather than a diagnosis.')],
        'script': [('Man', 'They asked you straight out whether he can hear them.'),
                   ('Woman',
                    'They did, and I have been thinking about my answer for an hour, because I '
                    'nearly said yes.'),
                   ('Man', 'He does turn his head.'),
                   ('Woman',
                    'He turns his head when his daughter speaks, and he turns it when the drugs '
                    'trolley goes past, and he turns it in his sleep. If I count the first one '
                    'as evidence I have to count the other two.'),
                   ('Man', 'That seems harsh.'),
                   ('Woman',
                    'It is not harsh, it is the only honest thing I have. There are two '
                    'different questions and the family is asking them as one. Does he react, '
                    'and is there anybody in there having the experience of being spoken to. I '
                    'can answer the first. Nobody on this ward can answer the second.'),
                   ('Man', 'The consultant seemed fairly sure last week.'),
                   ('Woman',
                    'The consultant is sure about the scan, which shows what the scan shows. '
                    'There is no instrument on this site that detects somebody being aware. We '
                    'detect responses and we infer from them, and the inference is exactly what '
                    'is in doubt in his case.'),
                   ('Man', 'So what did you say to them?'),
                   ('Woman',
                    'I said that we do not know, that we are treating him as though he can hear '
                    'everything, and that they should talk to him as though he can. Not because '
                    'I think he can. Because if I am wrong in one direction a man lies there '
                    'alone being discussed in the third person, and if I am wrong in the other '
                    'direction his daughter has spent some afternoons talking to somebody who '
                    'could not hear her.'),
                   ('Man', 'That is not nothing, either.'),
                   ('Woman',
                    'It is not nothing, and it is not the same. Those two mistakes are different '
                    'sizes, and when you cannot tell which one you are making, you choose the '
                    'smaller one and you say out loud that you are choosing.')],
        'items': [('Why has the woman been thinking about her answer?',
                   ('She gave the wrong answer',
                    'She nearly said yes',
                    'She did not understand the question',
                    'The consultant contradicted her'),
                   1,
                   'The family asked whether he can hear them.'),
                  ('What three occasions does she list for his turning his head?',
                   ('His daughter, the consultant and the window',
                    'His daughter speaking, the drugs trolley passing, and in his sleep',
                    'Morning, noon and night',
                    'Speech, touch and light'),
                   1,
                   'Counting the first as evidence commits her to the other two.'),
                  ('What two questions does she say the family asks as one?',
                   ('Whether he will recover and whether he is in pain',
                    'Whether he reacts, and whether anybody is in there having the experience',
                    'Whether he can hear and whether he can see',
                    'Whether to continue treatment and whether to visit'),
                   1,
                   'She can answer the first and nobody on the ward can answer the second.'),
                  ('What does she say about the consultant?',
                   ('He was mistaken',
                    'He is sure about the scan, which shows what the scan shows',
                    'He has not seen the patient',
                    'He agrees with her'),
                   1,
                   'No instrument on the site detects somebody being aware.'),
                  ('What does she say the ward actually detects?',
                   ('Awareness',
                    'Responses, from which an inference is drawn',
                    'Nothing at all',
                    'Pain only'),
                   1,
                   'And the inference is what is in doubt in his case.'),
                  ('What did she tell the family?',
                   ('That he can hear them',
                    'That nobody knows, that he is being treated as though he can hear, and that '
                    'they should talk to him',
                    'That they should not visit',
                    'That the scan is inconclusive'),
                   1,
                   'Not because she thinks he can.'),
                  ('What does she say about the two possible mistakes?',
                   ('They are equally bad',
                    'They are different sizes, so you choose the smaller and say so',
                    'Neither matters',
                    'Only the first one matters'),
                   1,
                   'A decision under ignorance rather than a diagnosis.')]},
 'l2': {'sub': 'What a scale can detect',
        'caption': 'The clinical director briefing the ward teams',
        'poster': ['Twice weekly for eight weeks, then monthly',
                   'Score item by item · time of day · medication',
                   'Finding of awareness: a command followed twice, witnessed'],
        'skill': ('Hearing a director accept a correction about his own protocol',
                  ['He restates the objection as a pair of figures.',
                   'Note what the new sentence costs and what it changes.',
                   'The item about the file carries the lesson.']),
        'warm': [('Woman: Is the scale wrong?',
                  ('The scale is the best there is. The reading of it is wrong.',
                   'Yes, it should go.',
                   'Twice weekly.',
                   'Forty-one patients.'),
                  0,
                  'His concession is about the inference, not the instrument.'),
                 ('Woman: What will you add?',
                  ('One sentence about what a zero score is not.',
                   'A new scale.',
                   'Daily assessments.',
                   'Four patients.'),
                  0,
                  'A failure to detect is not a finding of absence.'),
                 ('Woman: And in the notes as well?',
                  ('Every note recording a zero carries the sentence.',
                   'Only in the protocol.',
                   'Nobody has decided.',
                   'Three of the four.'),
                  0,
                  'A sentence in a protocol nobody reads changes nothing.')],
        'script': [('Man',
                    'Dr Okafor-Yeboah has written to all of you about the awareness protocol, '
                    'and she is right, so let me put her case in two numbers and tell you what I '
                    'am changing. Forty-one patients assessed in this hospital in 2033 scored '
                    'zero on the behavioural scale at every single assessment. Four of them were '
                    'later able to communicate. That is roughly one in ten, and three of the '
                    'four did it by a route the scale does not test at all. Now I want to be '
                    'careful about what that does and does not show. It does not show that the '
                    'scale is bad; it is the best instrument in the world for what it measures. '
                    'What it shows is that we have been reading a zero as a finding, and a zero '
                    'is not a finding. It is the absence of one. Those are not the same sentence '
                    'and the difference has been sitting in our notes for years looking like a '
                    'diagnosis. So, two changes. First, one line in the findings section: a '
                    'score of zero is a failure to detect awareness and is not a finding of its '
                    'absence. Second, and this is the one that will annoy the people who type, '
                    'every note that records a zero carries that sentence with it. I know it is '
                    'repetitive. A sentence in a protocol is read by the person who wrote it and '
                    'a sentence in the file is read by everybody who opens it, including the '
                    'family and including whoever takes this patient over from us in four years, '
                    'and that person is the one I am writing it for.')],
        'items': [('What are the two numbers the director uses?',
                   ('Eight weeks and twice weekly',
                    'Forty-one patients scored zero and four later communicated',
                    'One in ten and three in four',
                    'Two and twenty-three'),
                   1,
                   'Roughly one in ten of those assessed.'),
                  ('What does he say the figures do not show?',
                   ('That the scale is bad',
                    'That awareness is undetectable',
                    'That assessors are untrained',
                    'That families are right'),
                   0,
                   'He calls it the best instrument in the world for what it measures.'),
                  ('What have the staff been doing with a zero?',
                   ('Ignoring it',
                    'Reading it as a finding',
                    'Recording it separately',
                    'Reporting it to families only'),
                   1,
                   'And a zero is the absence of a finding rather than one.'),
                  ('What has been sitting in the notes looking like a diagnosis?',
                   ('The medication record',
                    'The difference between a failure to detect and a finding of absence',
                    'The visitors’ reports',
                    'The assessor’s name'),
                   1,
                   'Which is the whole of his concession.'),
                  ('What is the second change?',
                   ('Daily assessment',
                    'Every note recording a zero carries the sentence with it',
                    'A new scale',
                    'Annual review'),
                   1,
                   'He expects it to annoy the people who type.'),
                  ('Whom does he say he is writing the sentence for?',
                   ('The auditors',
                    'Whoever takes the patient over in four years',
                    'The assessors',
                    'The protocol committee'),
                   1,
                   'And the family, who open the file.')]},
 'l3': {'sub': 'The patient who imagined playing tennis',
        'caption': 'A lecture on the study that changed one diagnosis',
        'board': ['2005: every criterion for the vegetative state',
                  'In the scanner: imagine tennis · imagine your house',
                  'Two regions, anatomically distinct',
                  'Settled: this patient. Not settled: the general case'],
        'skill': ('Hearing a result stated and then bounded',
                  ['The patient and the assessment first, then the method.',
                   'Listen for the inference he refuses to draw.',
                   'The item about the null result is the one the lecture is for.']),
        'warm': [('Woman: Did she do anything in the scanner?',
                  ('Nothing anybody could see. That is the point.',
                   'Yes, she moved her hand.',
                   'She spoke.',
                   'Thirty seconds.'),
                  0,
                  'The examination required no new behaviour.'),
                 ('Woman: Why tennis and a house?',
                  ('Because the two go to different parts of the brain.',
                   'Because they are easy.',
                   'They were chosen at random.',
                   'A working memory.'),
                  0,
                  'Anatomically distinct and distinguishable without interpretation.'),
                 ('Woman: So a patient who fails is unaware?',
                  ('That does not follow at all, and it is the common error.',
                   'Yes, necessarily.',
                   'Only if repeated.',
                   'In 2006.'),
                  0,
                  'The task needs language, attention and imagery.')],
        'script': [('Man',
                    'One study, published in 2006, and I want you to leave with the result and '
                    'with its boundary, because the second half is where the literature keeps '
                    'going wrong. A young woman is admitted after a road collision in 2005. She '
                    'meets every criterion for the vegetative state: eyes open, sleep and waking '
                    'cycles, and no response of any kind to command, assessed repeatedly by '
                    'people who knew what they were doing. Then they put her in a scanner and '
                    'asked her to imagine playing tennis. And then to imagine walking through '
                    'the rooms of her own house. Notice that she is not asked to do anything. '
                    'The whole examination requires no behaviour whatsoever. Now why those two '
                    'instructions? Because imagining a movement and imagining a place light up '
                    'different parts of the brain, far enough apart that you do not need to '
                    'interpret anything to tell them apart. And her scans came out '
                    'indistinguishable from healthy volunteers given the same instructions. On, '
                    'when asked. Off, when asked to rest. That is a person understanding '
                    'English, holding an instruction in mind and doing as she is told for thirty '
                    'seconds, and no bedside examination in the world would have found it. I '
                    'turn now to the part people skip. What follows about the patient in the '
                    'next bed, who goes in the scanner and produces nothing? Nothing follows. To '
                    'pass this test you need language, sustained attention and that one specific '
                    'kind of imagery, and any of the three can fail in somebody who is entirely '
                    'aware. A blank scan is a failure to detect. We have learnt that the '
                    'examination was wrong about one woman. We have not learnt anything whatever '
                    'about the others.')],
        'items': [('What did the patient meet in 2005?',
                   ('The criteria for brain death',
                    'Every criterion for the vegetative state',
                    'A locked-in diagnosis',
                    'No recognised criteria'),
                   1,
                   'Assessed repeatedly by people who knew what they were doing.'),
                  ('What does the lecturer say the examination required?',
                   ('A spoken answer',
                    'No behaviour whatsoever',
                    'A hand movement',
                    'Thirty minutes of attention'),
                   1,
                   'She is not asked to do anything at all.'),
                  ('Why were the two instructions chosen?',
                   ('They are the easiest to follow',
                    'Imagining a movement and imagining a place use different parts of the brain',
                    'They take the same time',
                    'They had been standardised'),
                   1,
                   'Far enough apart that nothing has to be interpreted.'),
                  ('How did her scans compare with healthy volunteers?',
                   ('Weaker but present',
                    'Indistinguishable',
                    'Delayed by several seconds',
                    'Unrelated'),
                   1,
                   'On when asked, off when asked to rest.'),
                  ('What does he say follows about the patient in the next bed?',
                   ('That she is unaware',
                    'Nothing follows',
                    'That she should be rescanned',
                    'That the scale was right'),
                   1,
                   'Language, attention and that kind of imagery can each fail.'),
                  ('What does he call a blank scan?',
                   ('A diagnosis',
                    'A failure to detect',
                    'A finding of absence',
                    'A reason to stop'),
                   1,
                   'Which is the distinction the lecture exists for.'),
                  ('What does he say we have learnt?',
                   ('That the vegetative state is not a real category',
                    'That the examination was wrong about one woman',
                    'That awareness can be measured directly',
                    'That imagery is a reliable test'),
                   1,
                   'And nothing whatever about the others.')]},
 'l4': {'sub': 'Why the gap looks unbridgeable',
        'caption': 'A lecture on three arguments and one residue',
        'board': ['Explained = causes, effects, role · the functional standard',
                  'Nagel 1974: what it is like to be a bat',
                  'Levine 1983: water is H2O, pain is a neural event',
                  'Jackson 1982: Mary leaves the room · Chalmers 1995: the zombie'],
        'skill': ('A lecture that finds one structure in three arguments',
                  ['The standard of explanation first, and where it succeeds.',
                   'Then three arguments, each with its act of imagination.',
                   'The last item asks what the three have in common.']),
        'warm': [('Woman: What counts as explaining something?',
                  ('Give me the causes, the effects and the role it plays.',
                   'Describe it accurately.',
                   'Name it.',
                   'Three arguments.'),
                  0,
                  'A standard the sciences satisfy every day.'),
                 ('Woman: And that fails for experience?',
                  ('It seems to leave something over. That is the whole subject.',
                   'No, it works fine.',
                   'Only for bats.',
                   'In 1974.'),
                  0,
                  'The residue is the felt quality itself.'),
                 ('Woman: What do the three arguments share?',
                  ('Each asks you to imagine something and then draws a conclusion.',
                   'Each cites an experiment.',
                   'Each denies physicalism.',
                   'A zombie.'),
                  0,
                  'From an incapacity of ours to a claim about the world.')],
        'script': [('Man',
                    'Three arguments, one shape, and the shape is what I want you to see by the '
                    'end. Start with what counts as an explanation, because the whole difficulty '
                    'comes out of a standard that works beautifully everywhere else. Tell me the '
                    'causes of a state, tell me its effects, tell me what role it plays, and I '
                    'will say you have explained it. Digestion: food, enzymes, conversion, done. '
                    'Memory: a representation stored and available later, done. Vision as the '
                    'sorting of surfaces: a computation on what arrives at the retina, done. '
                    'Nobody asks for more. Now apply that standard to the experience of seeing '
                    'red, and something is left over, and the three arguments are three attempts '
                    'to name what. Nagel, 1974: what is it like to be a bat? Give me the entire '
                    'physics of echolocation and I still have no idea what the animal’s '
                    'afternoon is like from the inside. Levine, 1983, and this is the sharpest '
                    'of them. Water is H2O; once you know that, every question about water is '
                    'answered. Pain is a particular firing of particular fibres; once you know '
                    'that, you still have the question why that firing should feel like anything '
                    'whatever. Jackson, 1982: Mary grows up in a room with no colour in it and '
                    'learns every physical fact about colour vision, and then somebody opens the '
                    'door, and she learns something. So the physical facts were not all the '
                    'facts. And Chalmers, 1995, who gave us the words: easy problems about '
                    'function, one hard problem about experience, and the zombie, physically '
                    'identical to you and nobody home. Now, the shape. Every one of those four '
                    'moves from something we cannot imagine or cannot work out to a conclusion '
                    'about what exists. Hold on to that sentence, because next week somebody is '
                    'going to attack it, and the attack is not that the arguments are silly. It '
                    'is that a premise about the limits of human imagination cannot by itself '
                    'deliver a conclusion about the furniture of the universe. Decide this week '
                    'which of those two you believe, and then come and watch somebody argue the '
                    'other.')],
        'items': [('What standard of explanation does the lecturer set out?',
                   ('Accurate description',
                    'Causes, effects and the role a state plays',
                    'Prediction under a law',
                    'Measurement'),
                   1,
                   'He says it works beautifully everywhere else.'),
                  ('What does Nagel’s question ask?',
                   ('How echolocation works',
                    'What it is like to be a bat',
                    'Whether bats are aware',
                    'How bats navigate'),
                   1,
                   'The entire physics leaves the inside untouched.'),
                  ('Why does he call Levine’s the sharpest?',
                   ('It uses an experiment',
                    'Because water is H2O answers every question about water, and pain is a '
                    'firing does not',
                    'Because it was published first',
                    'Because it mentions zombies'),
                   1,
                   'The question why it should feel like anything remains.'),
                  ('What does Mary learn when the door is opened?',
                   ('Nothing',
                    'Something, so the physical facts were not all the facts',
                    'That her training was wrong',
                    'A new physical fact'),
                   1,
                   'She is supposed to know every physical fact already.'),
                  ('What shape do all four arguments share?',
                   ('Each cites an experiment',
                    'Each moves from something we cannot imagine to a conclusion about what '
                    'exists',
                    'Each denies physicalism outright',
                    'Each concerns colour'),
                   1,
                   'He asks the audience to hold on to that sentence.')]},
 'l5': {'sub': 'Whether the gap is in the world',
        'caption': 'A reply from somebody who studies the history of the question',
        'board': ['The premise is about us, the conclusion about nature',
                  'Vital force: the same gap, and it closed',
                  'Mary gains an ability, not a fact',
                  'Conceivable is not possible · but nobody can predict'],
        'skill': ('Hearing an objection to a form of argument',
                  ['She grants the gap and relocates it.',
                   'Then the historical pattern, and what its closures looked like.',
                   'The last item is the concession she makes about prediction.']),
        'warm': [('Man: So you deny the gap?',
                  ('Not at all. I deny that it is a gap in the world.',
                   'Yes, entirely.',
                   'Only for Mary.',
                   'A vital force.'),
                  0,
                  'The dispute is about where the gap is located.'),
                 ('Man: What is wrong with the arguments?',
                  ('They start in psychology and finish in metaphysics.',
                   'They are badly written.',
                   'They rely on experiments.',
                   'In 1974.'),
                  0,
                  'The premise concerns our imagination and the conclusion the world.'),
                 ('Man: Has a gap like this ever closed?',
                  ('The vital force, and it closed without anybody being convinced.',
                   'No, never.',
                   'Only once.',
                   'Four closures.'),
                  0,
                  'The demand ceased to be felt as the mechanisms arrived.')],
        'script': [('Woman',
                    'I grant the gap. What I deny is that anybody has shown it to be a gap in '
                    'nature rather than a gap in us, and notice how little that concession costs '
                    'me. Look at the shape of all three arguments. The premise in each case is a '
                    'sentence about what we cannot do: cannot imagine the bat, cannot derive the '
                    'feeling from the firing, cannot predict what Mary will say. And the '
                    'conclusion in each case is a sentence about what the universe contains. '
                    'That is a journey from psychology to metaphysics, and nobody has built the '
                    'bridge. Dennett called them pumps for intuition and he was being unkind, '
                    'but he was not being unfair. Now the history, which is the part I was '
                    'trained in. Two hundred years ago there was a gap exactly this shape around '
                    'life itself. No arrangement of chemicals seemed capable of maintaining '
                    'itself, and you could perfectly well imagine a corpse identical in every '
                    'molecule to a living man, which was taken to prove that something extra was '
                    'needed. That gap closed. And here is the detail that matters: nobody was '
                    'ever shown why chemistry must produce life. The question simply stopped '
                    'feeling urgent as the mechanisms came in. The same thing happened with '
                    'lightning, with heredity, with combustion. In every case the satisfaction '
                    'looked less like an answer than like people losing their appetite for the '
                    'question. Two quick replies and then my confession. Mary gains an ability '
                    'rather than a fact. And conceivable is not possible, or watery stuff with '
                    'another formula would be possible, and it is not. The confession: nobody on '
                    'my side of this can tell you which physical systems are aware and which are '
                    'not, and until somebody can, the clinic has to work by precaution. And I '
                    'want to say that I find that unsatisfactory as well. It is not a position '
                    'anybody would choose. It is the position the evidence leaves us in, and the '
                    'alternative on offer is a confident answer with nothing whatever behind '
                    'it.')],
        'items': [('What does she grant, and what does she deny?',
                   ('She denies the gap and grants the arguments',
                    'She grants the gap and denies that it is a gap in nature',
                    'She grants both',
                    'She denies both'),
                   1,
                   'The dispute is about the location of the gap.'),
                  ('What is the premise of each argument, on her account?',
                   ('An experimental result',
                    'A sentence about what we cannot do',
                    'A definition of experience',
                    'A historical precedent'),
                   1,
                   'And the conclusion is a sentence about what the universe contains.'),
                  ('What was the gap around life itself?',
                   ('That chemistry could not be measured',
                    'That no arrangement of chemicals seemed capable of maintaining itself',
                    'That corpses could not be studied',
                    'That life had no definition'),
                   1,
                   'And a molecularly identical corpse was readily imagined.'),
                  ('How did that gap close, in the detail she says matters?',
                   ('Somebody proved chemistry must produce life',
                    'The question stopped feeling urgent as the mechanisms came in',
                    'The question was declared meaningless',
                    'A new force was found'),
                   1,
                   'Lightning, heredity and combustion went the same way.'),
                  ('What is her confession?',
                   ('That the arguments are sound',
                    'That nobody on her side can say which physical systems are aware',
                    'That the history proves nothing',
                    'That Mary gains a fact'),
                   1,
                   'Until somebody can, the clinic works by precaution.')]},
 'w1': {'sub': 'What it is like to be anybody',
        'skill': ('Build a Sentence: asking what a sign is a sign of',
                  ['Nine of the ten are questions, and the useful ones ask what else would '
                   'produce the sign.',
                   'An embedded question keeps statement order: do you know what else does that.',
                   'Put the long phrase last, where English carries weight.']),
        'guided': [('He turns his head when his daughter speaks.',
                    ['do', 'you', 'know', 'what', 'else', 'he', 'turns', 'it', 'towards'],
                    'Do you know what else he turns it towards?'),
                   ('The scan shows activity in the usual region.',
                    ['does',
                     'that',
                     'activity',
                     'appear',
                     'in',
                     'patients',
                     'who',
                     'never',
                     'recover'],
                    'Does that activity appear in patients who never recover?'),
                   ('The scale scores responsiveness out of twenty-three.',
                    ['is',
                     'there',
                     'anything',
                     'on',
                     'the scale',
                     'that',
                     'a reflex',
                     'could',
                     'not',
                     'produce'],
                    'Is there anything on the scale that a reflex could not produce?')],
        'exam': [('The patient followed the command twice in forty minutes.',
                  ['twice', 'out', 'of', 'how', 'many', 'attempts', 'were', 'made', 'altogether'],
                  'Twice out of how many attempts were made altogether?'),
                 ('The protocol requires two assessments a week.',
                  ['who',
                   'carries',
                   'them',
                   'out',
                   'and',
                   'do',
                   'they',
                   'know',
                   'the',
                   'previous',
                   'score'],
                  'Who carries them out, and do they know the previous score?'),
                 ('The family report that he squeezed a hand.',
                  ['was', 'anybody', 'present', 'who', 'did', 'not', 'already', 'expect', 'it'],
                  'Was anybody present who did not already expect it?'),
                 ('A study found awareness in one patient in five.',
                  ['one', 'in', 'five', 'of', 'which', 'group', 'of', 'patients', 'exactly'],
                  'One in five of which group of patients exactly?'),
                 ('The machine reports a consciousness index.',
                  ['what',
                   'was',
                   'that',
                   'index',
                   'calibrated',
                   'against',
                   'in',
                   'the',
                   'first',
                   'place'],
                  'What was that index calibrated against in the first place?'),
                 ('The guidance says to assume awareness.',
                  ['does',
                   'that',
                   'change',
                   'anything',
                   'about',
                   'how',
                   'the',
                   'ward',
                   'is',
                   'run'],
                  'Does that change anything about how the ward is run?'),
                 ('Two consultants disagree about the case.',
                  ['I',
                   'would',
                   'like',
                   'to',
                   'know',
                   'which finding',
                   'the two',
                   'of them',
                   'read',
                   'differently'],
                  'I would like to know which finding the two of them read differently.')]},
 'w2': {'sub': 'What a scale can detect',
        'to': 'protocols@ravensholt.nhs.uk',
        'date': '12/04/2035',
        'subject': 'Awareness protocol — support for the zero-score sentence, and the assessment '
                   'window',
        'scenario': ['You are the hospital’s lead speech and language therapist. The clinical '
                     'director has accepted that a score of zero is a failure to detect '
                     'awareness rather than a finding of its absence, and that the sentence will '
                     'appear in every note. You support both. Your own objection is to the '
                     'timing: assessments are made twice weekly for eight weeks and then '
                     'monthly, and the monthly interval begins exactly when sedation is usually '
                     'reduced.',
                     'Write an email to the protocols team, copied to the director.'],
        'bullets': ['Support the new sentence and its appearance in the notes, with what each '
                    'buys.',
                    'Name the fault in the assessment window, with figures.',
                    'Propose the wording you want instead.'],
        'skill': ('Supporting two changes and attacking a schedule',
                  ['Say what each change buys, so the cost is justified.',
                   'Show the fault with the hospital’s own timing data.',
                   'Propose wording that can be dropped into the protocol.']),
        'model': ['Dear colleagues,',
                  '',
                  'This service supports the new sentence and its appearance in every note, and '
                  'asks for the assessment window to be redrawn.',
                  '',
                  'The sentence buys something a protocol rarely buys, which is a change in what '
                  'a reader concludes rather than in what a clinician does. Putting it in the '
                  'note rather than the protocol buys the only readership that matters: the '
                  'family at the bedside and the clinician who inherits the patient. Neither '
                  'change costs an hour of anybody’s time.',
                  '',
                  'The clause I would redraw is the schedule. Assessment is twice weekly for '
                  'eight weeks and monthly thereafter, and week eight is almost exactly when '
                  'sedation is reduced and the first voluntary movements appear. Of the eleven '
                  'patients who reached a finding of awareness in this hospital since 2031, '
                  'seven reached it between weeks nine and sixteen, which is the period in which '
                  'we now assess them least often. The protocol has placed its thinnest '
                  'observation over its richest weeks.',
                  '',
                  'What I propose is that the twice-weekly interval run to week sixteen rather '
                  'than week eight, with the monthly interval beginning thereafter, and that any '
                  'reduction in sedation restart the twice-weekly interval for a fortnight '
                  'whenever it occurs. That is sixteen additional assessments for a patient on '
                  'the usual course, about four hours of assessor time, and it places the '
                  'observation where the hospital’s own record says the findings are.',
                  '',
                  'Isolde Brennan, Lead Speech and Language Therapist'],
        'notes': ['The support says what each change buys, and the sentence about readership is '
                  'the argument for putting it in the note rather than the protocol.',
                  'The fault is shown with the hospital’s own eleven cases, so the schedule '
                  'cannot be defended as conventional.',
                  'The sentence about thin observation over rich weeks is the one the committee '
                  'will remember, and it comes after the figures rather than before them.',
                  'The proposal has three parts and a cost in assessor hours, which is what '
                  'makes it a decision rather than a complaint.'],
        'bandpair': {'mid': ['Dear colleagues,',
                             'This service is pleased to support the new sentence about zero '
                             'scores and we agree that it should appear in the notes as well as '
                             'in the protocol, since this will make it much more visible to '
                             'everybody involved.',
                             'We would, however, like to raise a concern about the assessment '
                             'schedule. At present assessments become monthly after eight weeks, '
                             'but this is apparently around the time when sedation is usually '
                             'reduced, and it seems that quite a few of our findings of '
                             'awareness have occurred after that point.',
                             'Perhaps the twice-weekly assessments could continue for longer, '
                             'and perhaps they could also be restarted if sedation is reduced. '
                             'This would mean that patients were observed more closely during an '
                             'important period.',
                             'Yours sincerely, Isolde Brennan'],
                     'top': ['Dear colleagues,',
                             'This service supports the new sentence and its appearance in every '
                             'note, and asks for the assessment window to be redrawn.',
                             'The sentence buys a change in what a reader concludes rather than '
                             'in what a clinician does. Putting it in the note buys the only '
                             'readership that matters: the family at the bedside and the '
                             'clinician who inherits the patient.',
                             'The clause to redraw is the schedule. Assessment is twice weekly '
                             'for eight weeks and monthly thereafter, and week eight is almost '
                             'exactly when sedation is reduced and the first voluntary movements '
                             'appear. Of the eleven patients who reached a finding of awareness '
                             'here since 2031, seven reached it between weeks nine and sixteen, '
                             'the period in which we now assess them least often. The protocol '
                             'has placed its thinnest observation over its richest weeks.',
                             'I propose that the twice-weekly interval run to week sixteen, with '
                             'the monthly interval beginning thereafter, and that any reduction '
                             'in sedation restart it for a fortnight whenever it occurs. Sixteen '
                             'extra assessments on the usual course, about four hours of '
                             'assessor time, and the observation sits where our own record says '
                             'the findings are. Isolde Brennan'],
                     'diffs': ['It says what each supported change buys, instead of calling the '
                               'sentence more visible.',
                               'It gives the eleven cases and the seven, so the schedule cannot '
                               'be defended as standard practice.',
                               'It states the fault as an image that can be remembered — '
                               'thinnest observation over richest weeks — and places it after '
                               'the figures.',
                               'It costs the proposal in assessments and assessor hours, which '
                               'the middle answer never attempts.',
                               'It drops the hedging — pleased to support, we would however '
                               'like, of course, apparently, it seems, perhaps twice — which in '
                               'the middle answer turns a documented case into a request.']}},
 'w3': {'sub': 'The patient who imagined playing tennis',
        'prof': 'Professor Delacroix',
        'question': 'A health service must decide how to use the imagery scan. One proposal '
                    'offers it to every patient classified as vegetative, on the ground that it '
                    'found awareness in a patient the bedside examination had missed. Another '
                    'restricts it to patients with some behavioural sign, on the ground that a '
                    'negative scan will be read by families and courts as proof of absence, and '
                    'that the proof is unavailable. What should the service do?',
        'posts': [('Thandiwe',
                   'w',
                   'Offer it to everybody. A test that found one person nobody else could find '
                   'is not a test you ration.'),
                  ('Emeric',
                   'm',
                   'And every negative result will be quoted in a withdrawal-of-treatment '
                   'hearing as though it meant something. It does not, and nobody in that room '
                   'will know.')],
        'skill': ('A question about a test whose negative result misleads',
                  ['Thandiwe argues from what the test can find; Emeric from how a negative will '
                   'be read.',
                   'The passages say a blank scan is a failure to detect and not a finding of '
                   'absence.',
                   'A strong answer changes how the result is reported, not who is tested.']),
        'starters': ['Thandiwe is right that…, although it does not follow that…',
                     'Something is left out when…',
                     'The question is begged by…',
                     'So the service should…, provided that…'],
        'model': ['Thandiwe is right that a test which identified awareness in a patient the '
                  'bedside examination had missed cannot sensibly be rationed, and it does not '
                  'follow that the service should offer it without changing anything else. '
                  'Emeric has identified the asymmetry. A positive result is close to '
                  'conclusive, since nothing but an aware patient produces activity on '
                  'instruction and only on instruction. A negative result is almost '
                  'uninformative, because the task demands language, sustained attention and one '
                  'particular form of imagery, and any of the three may be absent in a patient '
                  'who is entirely aware.',
                  'Something is left out when such a result reaches a courtroom, and what is '
                  'left out is the word failure. The question is begged by the very phrase a '
                  'negative scan, which invites the hearer to treat an absence of evidence as '
                  'evidence of an absence, and no amount of care in the laboratory survives that '
                  'phrase once it enters a transcript. Restricting the test, however, answers '
                  'the wrong question: it protects the service from misreading at the cost of '
                  'the patients the test exists to find.',
                  'So the service should offer the scan to every patient, provided that the '
                  'reporting is rewritten first. A negative result should be issued as no '
                  'awareness detected by this method, which does not exclude awareness, with the '
                  'three capacities the task requires listed underneath; the report should state '
                  'the proportion of healthy volunteers who fail the task, which is not nil; and '
                  'no negative report should be admissible in a withdrawal hearing without the '
                  'clinician who issued it present to explain it. A test is not only an '
                  'instrument. It is also a sentence that other people will quote, and the '
                  'sentence is the part the service controls.'],
        'model_words': 291},
 'w4': {'sub': 'Why the gap looks unbridgeable',
        'skill': ('Metadiscourse and the shape of an argument',
                  ['Announce the structure once, at the start.',
                   'Mark the transition, and the obligation you have not yet met.',
                   'End with the limitation: it is the marker examiners reward most.']),
        'guided': [('Announce the structure of what follows.',
                    ['this',
                     'answer',
                     'considers',
                     'three',
                     'objections',
                     'and',
                     'accepts',
                     'the',
                     'second',
                     'of',
                     'them'],
                    'This answer considers three objections and accepts the second of them.'),
                   ('Mark a transition.',
                    ['I',
                     'turn',
                     'now',
                     'to',
                     'the reply',
                     'that',
                     'the gap',
                     'lies',
                     'in',
                     'us'],
                    'I turn now to the reply that the gap lies in us.'),
                   ('State an obligation not yet met.',
                    ['it',
                     'remains',
                     'to',
                     'show',
                     'that',
                     'the two claims',
                     'cannot',
                     'both',
                     'be',
                     'held'],
                    'It remains to show that the two claims cannot both be held.')],
        'exam': [('Mark a limitation.',
                  ['nothing',
                   'here',
                   'is',
                   'settled',
                   'about',
                   'the',
                   'patients',
                   'in',
                   'the',
                   'next',
                   'ward'],
                  'Nothing here is settled about the patients in the next ward.'),
                 ('Narrow your own claim.',
                  ['I',
                   'claim',
                   'only',
                   'that',
                   'the premise',
                   'belongs',
                   'to psychology',
                   'and',
                   'not',
                   'to physics'],
                  'I claim only that the premise belongs to psychology and not to physics.'),
                 ('Introduce the exact thing meant.',
                  ['one',
                   'capacity',
                   'is',
                   'presupposed',
                   'throughout',
                   'namely',
                   'a',
                   'sustained',
                   'voluntary',
                   'attention'],
                  'One capacity is presupposed throughout, namely a sustained voluntary '
                  'attention.'),
                 ('Add a point of the same kind.',
                  ['moreover',
                   'the same',
                   'objection',
                   'applies',
                   'to',
                   'the argument',
                   'from',
                   'the',
                   'monochrome',
                   'room'],
                  'Moreover, the same objection applies to the argument from the monochrome '
                  'room.'),
                 ('Charge an argument with circularity.',
                  ['the',
                   'question',
                   'is',
                   'begged',
                   'by',
                   'the',
                   'phrase',
                   'a',
                   'negative',
                   'scan',
                   'itself'],
                  'The question is begged by the phrase a negative scan itself.')]},
 'w5': {'sub': 'Whether the gap is in the world',
        'prof': 'Professor Oyelaran',
        'question': 'A national research council must decide whether to fund a programme seeking '
                    'a measurable marker of consciousness, intended to apply to patients, '
                    'animals and eventually machines. Supporters say the clinical and legal need '
                    'is urgent and a marker would settle disputes nothing else can settle. '
                    'Opponents say any marker will be validated against human report, so it will '
                    'measure reportability rather than experience, and that funding it implies '
                    'an answer to a question nobody has answered. Should the programme be '
                    'funded?',
        'posts': [('Hyacinth',
                   'w',
                   'Fund it. Wards and courts are making these decisions weekly with no '
                   'instrument at all, and the perfect objection is not a policy.'),
                  ('Konstantin',
                   'm',
                   'Validate a marker against what people say and you have built a detector of '
                   'speech. Then somebody will use it on a patient who cannot speak and on an '
                   'animal that never could.')],
        'skill': ('A question about measuring something nobody can define',
                  ['Hyacinth argues from the clinical need; Konstantin from the validation '
                   'problem.',
                   'The passages say no theory predicts which arrangements are accompanied by '
                   'experience.',
                   'A strong answer funds something narrower than the proposal asks for.']),
        'starters': ['Hyacinth is right that…, although it does not follow that…',
                     'I turn now to…',
                     'It remains to show…',
                     'So the council should…, and withhold…'],
        'model': ['Hyacinth is right that the decisions are being taken weekly and that an '
                  'objection which recommends nothing is not a policy, and it does not follow '
                  'that this programme should be funded as proposed. Konstantin has identified '
                  'the structural difficulty rather than a technical one. Any candidate marker '
                  'must be validated against a population able to report, because reports are '
                  'the only criterion anybody has; a marker validated upon that population is a '
                  'measure of the capacity to report; and its application to a patient without '
                  'speech, or to an animal, is precisely the inference the validation cannot '
                  'license.',
                  'I turn now to what can nevertheless be bought with the money. A marker '
                  'validated on reporting subjects is of real use within the population it was '
                  'validated on, which includes the anaesthetised, the sedated and patients in '
                  'the first hours after injury, and it is worth having for them alone. What it '
                  'cannot do is extend to the cases that motivate the proposal. It remains to '
                  'show, and nobody has shown, that any physical quantity is sufficient for '
                  'experience rather than correlated with the ability to mention it, and a '
                  'programme whose title promises the first while its method delivers the second '
                  'will be quoted for the thing it did not establish.',
                  'So the council should fund the measurement and withhold the claim. Fund the '
                  'work on anaesthesia and early injury, where validation is available and the '
                  'clinical gain is immediate; require every publication to state the population '
                  'the marker was validated on and to carry a sentence refusing the extension; '
                  'and fund, separately and modestly, the philosophical work on what would count '
                  'as validating a marker outside the reporting population, since that question '
                  'is prior to the instrument and is currently nobody’s responsibility. Nothing '
                  'in that arrangement settles the hard problem. It does mean the council will '
                  'not have purchased an answer to it by accident, which is the commonest way an '
                  'unanswered question gets closed.'],
        'model_words': 327},
 'sp': [{'sub': 'What it is like to be anybody',
         'focus': 'refusing to say more than the evidence allows',
         'skill': ('Those two mistakes are different sizes',
                   ['Separate the two questions the family asks as one.',
                    'Say which one you can answer.',
                    'Then name the two errors and their sizes.']),
         'repeat': ['He turns it in his sleep.',
                    'I can answer the first question.',
                    'They asked whether he can hear them.',
                    'He turns his head when his daughter speaks.',
                    'He turns it when the trolley goes past.',
                    'Does he react, and is anybody in there?',
                    'When you cannot tell which mistake you are making, you choose the smaller '
                    'one and you say so.'],
         'theme': 'an answer that has to stay narrow',
         'qs': ['Tell me about a question you had to refuse to answer fully. What did you say?',
                'Some people say doctors should always give families a definite answer. How far '
                'would you agree?',
                'How would you explain to a friend the difference between reacting and being '
                'aware?',
                'Finally, describe a decision you made without knowing enough.'],
         'model': [(2,
                    'A definite answer is a kindness for an afternoon and a betrayal afterwards. '
                    'What a family can use is the truth about what is known, and what everybody '
                    'is doing about the rest.'),
                   (3,
                    'A knee reacts when the doctor taps it and nobody thinks the knee is aware. '
                    'Reacting is something a body does; being aware is somebody being there '
                    'while it happens.')],
         'selfcheck': ['I separated the two questions',
                       'I said which one I can answer',
                       'I named the two errors and their sizes']},
        {'sub': 'What a scale can detect',
         'focus': 'separating a failure to detect from a finding of absence',
         'skill': ('A zero is not a finding. It is the absence of one.',
                   ['Give the two figures.',
                    'Say what they do not show.',
                    'Then the distinction, in two short sentences.']),
         'repeat': ['Forty-one patients scored zero at every assessment.',
                    'Four of them were later able to communicate.',
                    'That does not show the scale is bad.',
                    'It shows we have been reading a zero as a finding.',
                    'Three of the four used a route the scale does not test.',
                    'A zero is not a finding; it is the absence of one.',
                    'The difference has been sitting in our notes for years looking like a '
                    'diagnosis.'],
         'theme': 'a blank that was read as an answer',
         'qs': ['Tell me about a blank that somebody read as an answer. What followed?',
                'Some people say a test that finds nothing has settled the question. How far '
                'would you agree?',
                'How would you explain to a friend the difference between not finding something '
                'and it not being there?',
                'Finally, describe a record where you live that should carry a warning '
                'sentence.'],
         'model': [(2,
                    'Only if the test could have found the thing. A test too narrow to detect '
                    'what you are looking for reports its own narrowness, and that is not an '
                    'answer about the patient.'),
                   (3,
                    'If I search one room and find nobody, I have learnt about the room. Saying '
                    'the house is empty is a different claim and I have not made it.')],
         'selfcheck': ['I gave the two figures',
                       'I said what they do not show',
                       'I stated the distinction']},
        {'sub': 'The patient who imagined playing tennis',
         'focus': 'stating a result and then bounding it',
         'skill': ('We learnt that the examination was wrong about one woman',
                   ['Give the patient and the assessment.',
                    'Then the method, and the fact that it needs no behaviour.',
                    'Then the inference you refuse to draw.']),
         'repeat': ['No response of any kind to command.',
                    'Her scans were indistinguishable from healthy volunteers.',
                    'She met every criterion for the vegetative state.',
                    'Then they asked her to imagine playing tennis.',
                    'And to imagine walking through her own house.',
                    'She is not asked to do anything at all.',
                    'We learnt that the examination was wrong about one woman, and nothing '
                    'whatever about the others.'],
         'theme': 'a result with a sharp boundary',
         'qs': ['Tell me about a result that was reported more widely than it deserved. What was '
                'overstated?',
                'Some people say a brain scan settles what a person is experiencing. How far '
                'would you agree?',
                'How would you explain to a friend why a blank scan proves nothing?',
                'Finally, describe a test used in your country whose negative result is '
                'misunderstood.'],
         'model': [(2,
                    'A scan shows which tissue is active, which is a great deal and not the same '
                    'as the experience. What it can establish is that somebody followed an '
                    'instruction, and that is already remarkable.'),
                   (3,
                    'Because passing the test needs three separate things to work. Fail any one '
                    'of them and you produce a blank while being perfectly aware.')],
         'selfcheck': ['I gave the patient and the assessment',
                       'I said the method needs no behaviour',
                       'I refused the second inference']},
        {'sub': 'Why the gap looks unbridgeable',
         'focus': 'finding one shape in three arguments',
         'skill': ('Water is H2O. Pain is a firing. Those are not the same kind of sentence.',
                   ['Give the standard of explanation in three clauses.',
                    'Then the case where it leaves something over.',
                    'Then the comparison that makes the gap sharp.']),
         'repeat': ['Digestion: food, enzymes, conversion, done.',
                    'Pain is a firing of particular fibres.',
                    'Then I will say you have explained it.',
                    'Tell me the causes, the effects and the role.',
                    'Now apply that to the experience of seeing red.',
                    'Water is H2O, and every question about water is answered.',
                    'And you still have the question why that firing should feel like anything '
                    'whatever.'],
         'theme': 'a standard that works everywhere except one place',
         'qs': ['Tell me about a method that worked everywhere until it did not. Where did it '
                'stop?',
                'Some people say experience will be explained like everything else. How far '
                'would you agree?',
                'How would you explain to a friend what the explanatory gap is?',
                'Finally, describe an experience you could not convey to somebody who had not '
                'had it.'],
         'model': [(2,
                    'It may be, and the history is on that side. What nobody has yet done is '
                    'show why any arrangement of matter should be accompanied by experience, and '
                    'until somebody does the confidence is a bet.'),
                   (3,
                    'Tell me everything about what the brain does and I still cannot see why any '
                    'of it should feel like something. That missing step is the gap.')],
         'selfcheck': ['I gave the standard in three clauses',
                       'I applied it to experience',
                       'I used the water and pain comparison']},
        {'sub': 'Whether the gap is in the world',
         'focus': 'relocating a gap rather than denying it',
         'skill': ('A journey from psychology to metaphysics',
                   ['Grant the gap in one sentence.',
                    'Then show that each premise is about us.',
                    'Then the history, and what its closures looked like.']),
         'repeat': ['I grant the gap.',
                    'Cannot imagine the bat.',
                    'Those are sentences about us.',
                    'Cannot predict what Mary will say.',
                    'Cannot derive the feeling from the firing.',
                    'And the conclusions are sentences about what the universe contains.',
                    'What I deny is that it is a gap in nature.'],
         'theme': 'an argument whose premise and conclusion are about different things',
         'qs': ['Tell me about a conclusion that outran its evidence. How far did it go?',
                'Some people say if we cannot imagine it, it cannot be true. How far would you '
                'agree?',
                'How would you explain to a friend why an old scientific mystery stopped being '
                'one?',
                'Finally, describe something your grandparents found mysterious and you do not.'],
         'model': [(2,
                    'Our imagination is a fact about brains of a certain size and history. '
                    'Plenty of true things were unimaginable a century ago, and the inability '
                    'was ours rather than the world’s.'),
                   (3,
                    'Nobody proved it had to be that way. The mechanisms arrived one after '
                    'another, and at some point people stopped feeling that anything was '
                    'missing.')],
         'selfcheck': ['I granted the gap',
                       'I showed the premises are about us',
                       'I gave the history and its closures']}],
 'gram': {'title': 'Metadiscourse and the shape of an argument',
          'headers': ['Form', 'What it does'],
          'rows': [('this answer considers three objections',
                    'announces the structure, once, at the start'),
                   ('the section that follows sets out the reply',
                    'tells the reader where he is going'),
                   ('I turn now to the harder case', 'marks a transition between parts'),
                   ('having disposed of that, consider the second',
                    'a transition that also claims a result'),
                   ('it remains to show that the two cannot both be held',
                    'states an obligation not yet met'),
                   ('nothing here is settled about the general case',
                    'marks a limitation: the valuable one'),
                   ('I claim only that the premise concerns psychology',
                    'narrows your own claim deliberately')],
          'notes': ['Metadiscourse is writing about the writing, and at this level it earns more '
                    'credit than any other single device, because it tells a reader the shape of '
                    'an argument before he has to work the shape out for himself. Four kinds do '
                    'nearly all the work: the announcement of structure, the transition, the '
                    'obligation and the limitation. Three or four markers in a long answer are '
                    'plenty.',
                    'The limitation marker is the one candidates omit and the one examiners '
                    'reward. Nothing here is settled, this leaves the question open, I claim '
                    'only that: each of these is read as judgement rather than as weakness, '
                    'because a writer who knows the boundary of his own claim is a writer who '
                    'has thought about it. A script with no limitation marker anywhere reads as '
                    'a script that has not noticed the difficulty.',
                    'Two failures to avoid. The first is padding: a signpost that points at '
                    'nothing, such as it is interesting to note that, which costs a line and '
                    'says nothing about either the subject or the shape. The second is a '
                    'signposted turn you never take, which is worse, because a reader who has '
                    'been promised a reply and is given none concludes that you could not '
                    'produce one.'],
          'watch': 'Do not put a marker in every sentence. A paragraph with a signpost in each '
                   'line reads like a timetable, and the markers stop being read at all.',
          'ex': [('Supply the marker of the kind named in brackets.',
                  ['______ considers three objections. (structure)',
                   '______ the reply that the gap lies in us. (transition)',
                   '______ that the two claims cannot both be held. (obligation)',
                   '______ about the general case. (limitation)',
                   '______ that the premise concerns psychology. (narrowing your claim)'],
                  ['This answer considers three objections.',
                   'I turn now to the reply that the gap lies in us.',
                   'It remains to show that the two claims cannot both be held.',
                   'Nothing here is settled about the general case.',
                   'I claim only that the premise concerns psychology.']),
                 ('Replace the padding with a marker that does work.',
                  ['It is interesting to note that Mary learns something.',
                   'It is worth mentioning that the vital force gap closed.',
                   'As has already been said, the premise concerns us.',
                   'In this essay I will now discuss the zombie argument.'],
                  ['Mary learns something, which the argument needs.',
                   'The vital force gap closed, and the manner of its closing matters.',
                   'The premise concerns us, and that is the whole objection.',
                   'I turn now to the zombie argument.']),
                 ('Add the limitation the sentence needs.',
                  ['The scan established that this patient was aware.',
                   'The historical parallel supports the objection.',
                   'A marker validated on reporting subjects is useful.',
                   'The three arguments share one structure.'],
                  ['The scan established that this patient was aware; nothing here is settled '
                   'about the others.',
                   'The historical parallel supports the objection, though four closures do not '
                   'establish a fifth.',
                   'A marker validated on reporting subjects is useful within that population '
                   'and no further.',
                   'The three arguments share one structure; I claim only that the structure is '
                   'the point of attack.'])],
          'bas': 'Build a Sentence in this unit asks you to place the four kinds of marker. Two '
                 'of the answers are limitations, and in both of them the marker comes first and '
                 'the claim follows.'},
 'fault': {'text': 'It is interesting to note that Mary learns something when she leaves the '
                   'room. In this essay I will now discuss the zombie argument, which I will not '
                   'in fact discuss. It remains to show the two claims cannot both be held, and '
                   'I have shown it already. Nothing here is settled, and I have proved my case. '
                   'The three arguments shares one structure. Do you know what did Mary learn?',
           'faults': [('It is interesting to note that Mary learns something',
                       'Mary learns something, which the argument needs',
                       'A signpost that points at nothing costs a line and tells the reader '
                       'neither the subject nor the shape.'),
                      ('In this essay I will now discuss the zombie argument, which I will not '
                       'in fact discuss',
                       'I turn now to the zombie argument',
                       'A signposted turn you never take is worse than no signpost, since the '
                       'reader concludes you could not make it.'),
                      ('It remains to show the two claims cannot both be held, and I have shown '
                       'it already',
                       'It remains to show that the two claims cannot both be held',
                       'The marker states an obligation not yet met; claiming to have met it in '
                       'the same sentence cancels the marker.'),
                      ('Nothing here is settled, and I have proved my case',
                       'Nothing here is settled about the general case',
                       'A limitation and a claim of proof cannot stand in one sentence; the '
                       'reader believes neither.'),
                      ('The three arguments shares one structure',
                       'The three arguments share one structure',
                       'A plural subject takes a plural verb however long the phrase before it.'),
                      ('what did Mary learn',
                       'what Mary learned',
                       'An embedded question keeps statement order and does not invert the '
                       'verb.')]},
 'rev': {'vocab': [('the felt qualities of an experience', 'qualia'),
                   ('to do with how things feel from inside', 'phenomenal'),
                   ('the description of experience as it is had', 'phenomenology'),
                   ('looking inward at one’s own states', 'introspection'),
                   ('the view that everything is physical', 'physicalism'),
                   ('the view that mind and matter are two things', 'dualism'),
                   ('fixed entirely by the physical facts', 'supervenience'),
                   ('a being alike in every physical respect and unaware', 'zombie'),
                   ('awake without any sign of awareness', 'vegetative'),
                   ('the view that a state is what it does', 'functionalism'),
                   ('proposing that the thing does not exist', 'eliminative'),
                   ('from this point in the text onward', 'hereafter')],
         'gram': [('This answer ______ three objections and accepts the second.', 'considers'),
                  ('I ______ now to the reply that the gap lies in us.', 'turn'),
                  ('It ______ to show that the two cannot both be held.', 'remains'),
                  ('______ here is settled about the general case.', 'Nothing'),
                  ('I claim ______ that the premise concerns psychology.', 'only'),
                  ('One capacity is presupposed, ______ a sustained attention.', 'namely'),
                  ('The three arguments ______ one structure.', 'share'),
                  ('Do you know what Mary ______?', 'learned')],
         'mini': [('The patient in the 2006 study was asked to',
                   ('squeeze a hand twice',
                    'imagine playing tennis and walking through her house',
                    'answer a question aloud',
                    'follow a light with her eyes'),
                   1,
                   'The examination required no behaviour of her at all.'),
                  ('A blank imagery scan shows',
                   ('that the patient is unaware',
                    'a failure to detect awareness by that method',
                    'that the scale was right',
                    'nothing at all about the method'),
                   1,
                   'The task needs language, attention and one form of imagery.'),
                  ('Levine’s comparison contrasts',
                   ('bats and humans',
                    'water and H2O against pain and a neural event',
                    'colour and sound',
                    'easy and hard problems'),
                   1,
                   'The first identification answers every question; the second leaves one '
                   'open.'),
                  ('The zombie argument is held to deny',
                   ('functionalism', 'supervenience', 'dualism', 'introspection'),
                   1,
                   'Experience would then not follow from the physical facts by necessity.'),
                  ('The objection in cycle 5 relocates the gap by arguing that',
                   ('the arguments are badly expressed',
                    'the premises concern our capacities and the conclusions concern nature',
                    'experience does not exist',
                    'the history is irrelevant'),
                   1,
                   'And nobody has built the bridge between the two.'),
                  ('The concession the objection makes is that',
                   ('the vital force was real',
                    'no theory on either side predicts which arrangements are accompanied by '
                    'experience',
                    'Mary gains a fact',
                    'conceivability implies possibility'),
                   1,
                   'So the practical questions are settled by precaution.')]},
 'tip': 'Take the last essay you wrote and count the sentences that say nothing about the '
        'subject and something about the shape. If the answer is none, you have found the '
        'cheapest improvement available to you, and if the answer is one in every three, you '
        'have found the second cheapest, which is deleting most of them.'}

