# -*- coding: utf-8 -*-
"""Unit 22 — Evolution and Adaptation. Volume 3."""

UNIT = dict(
    n=22, vol=3, level='B2',
    title='Evolution and Adaptation',
    icons=['leaf', 'paw', 'chart'],
    subs=['Selection and drift', 'Convergent forms', 'Reading the fossil record'],
    grammar='Participle clauses',
    field='trait, lineage, constraint',
    opener_line='Evolution is the subject most often explained badly, because the everyday '
                'words for it — stronger, better, designed — all point the wrong way. This '
                'unit gives you the vocabulary that points the right way, and the structure '
                'English uses to compress two clauses into one.',
    candos=[
        'I can follow a text that distinguishes two mechanisms carefully.',
        'I can compress two clauses into one with a participle.',
        'I can spot a dangling participle in my own writing.',
        'I can describe a process without implying that it has a purpose.',
        'I can read a figure caption and tell what it does not show.',
        'I can qualify a generalisation instead of abandoning it.',
    ],

    acad=[
        ('trait', 'one feature of an organism that can be measured'),
        ('lineage', 'a line of descent from an ancestor'),
        ('constraint', 'something that limits what is possible'),
        ('mutation', 'a change in the genetic material'),
        ('heritable', 'able to be passed to offspring'),
        ('cumulative', 'building up step by step over time'),
        ('radiation', 'the spread of one lineage into many forms'),
        ('convergent', 'arriving at the same form from different starts'),
        ('niche', 'the way of life a species makes a living by'),
        ('ancestral', 'belonging to the form something descended from'),
        ('morphology', 'the shape and structure of an organism'),
        ('fitness', 'how many surviving offspring a form leaves'),
        ('drift', 'change by chance rather than by advantage'),
        ('extinction', 'the permanent loss of a lineage'),
        ('speciation', 'the splitting of one population into two species'),
        ('phenotype', 'what an organism actually looks like and does'),
        ('gradual', 'happening in small steps, not at once'),
        ('dispersal', 'the movement of a population into new ground'),
    ],
    family=('cumulative', [
        ('accumulate', 'verb', 'small changes accumulate over time'),
        ('accumulation', 'noun', 'the accumulation of many small steps'),
        ('cumulatively', 'adverb', 'cumulatively, the effect is large'),
    ]),
    collocs=[
        ('give rise to', 'to produce or lead to'),
        ('under selection', 'being acted on by selection'),
        ('at random', 'with no pattern and no direction'),
        ('over successive generations', 'across one generation after another'),
        ('bear a resemblance to', 'to look like'),
        ('in the absence of', 'when there is none of'),
        ('subject to', 'affected by, and limited by'),
        ('a trade-off between', 'a gain in one thing paid for in another'),
        ('all else being equal', 'if nothing else changes'),
        ('account for', 'to explain'),
    ],
    stance=[
        ('is widely accepted', 'near-consensus among researchers'),
        ('appears to', 'the evidence points that way'),
        ('is thought to', 'others hold it; the writer reports'),
        ('is far from clear', 'the writer says nobody knows'),
        ('cannot be ruled out', 'unlikely, but still possible'),
    ],
    nuance=[
        ('adapt / adopt', 'to fit a new condition / to take up'),
        ('evolve / develop', 'a population evolves; an individual develops'),
        ('random / arbitrary', 'without pattern / decided by agreement'),
    ],
    vocab_talk=[
        'Name one feature of an animal that looks designed. What is it for?',
        'Why does "survival of the fittest" mislead people?',
        'Can a species evolve to be worse at something? Give an example.',
        'What could a fossil never tell you about a living animal?',
    ],
    again=['natural selection', 'common ancestor', 'bottleneck', 'founder effect',
           'homology', 'analogy', 'strata', 'transitional form'],

    r1=dict(
        sub='Selection and drift',
        skill=('Suffixes that change the part of speech',
               ['Most B2 gaps are a suffix. Decide what the slot needs — noun, adjective, '
                'adverb — before you look at the letters.',
                'A noun after the is almost never a bare verb: select becomes selection.',
                'If the gap follows a determiner and precedes of, it is a noun.']),
        guided_text='Two processes change a population, and only one of them has anything to '
                    'do with advantage. Selection keeps the variants that leave more '
                    'offspring. Drift keeps whichever variants happen to be carried forward, '
                    'and it is strong--- in small populations, where chance has more room. A '
                    'biologist asked to explain a difference between two island forms will '
                    'therefore not assume adapt-----. The difference may be the signature of '
                    'a founder event, in which a handful of individuals carried an '
                    'unrepresent----- sample of the variation with them. Distinguishing the '
                    'two matters, because only one of them predicts that the trait is '
                    'function-- at all. The other predicts noth---.',
        guided_hint='strong--- is strongest — the slot follows is and compares drift across '
                    'population sizes.',
        guided=['est', 'ation', 'ative', 'al', 'ing'],
        exam_text='Convergence is the fact that unrelated lineages, facing the same problem, '
                  'often arrive at the same sol-----. The eye has evolved independ----- '
                  'dozens of times. Wings have evolved in insects, in birds, in bats and in '
                  'one extinct group of rept----. The usual explanation is that physics '
                  'leaves few options: if an animal is to fly, the available design space is '
                  'narr--. This is sometimes read as evidence that evolution is predict----, '
                  'and sometimes as evidence of the opposite, that the same outcome can be '
                  'reached by many different genetic ro----. Both readings use the same data. '
                  'The disagreement is about what counts as the same outcome. A bat wing and a '
                  'bird wing are similar in funct--- and quite different in structure: the '
                  'bones are the same bones, inherited from a shared ancest--, but they are '
                  'rearranged in ways that would be hard to predict from the problem alone. '
                  'Convergence, in other words, is real but partial, and the part that is not '
                  'convergent carries most of the historical informat---. A palaeontolog--- '
                  'reading a limb is reading both at once.',
        exam=['ution', 'ently', 'iles', 'ow', 'able', 'utes', 'ion', 'or', 'ion', 'ist'],
    ),

    r2=dict(
        sub='Convergent forms',
        skill=('Reading a caption against its figure',
               ['A caption says what a figure shows. The question often turns on what it '
                'does not show.',
                'Note every hedge in a caption: approximate, not to scale, redrawn after.',
                'A redrawn figure is somebody’s interpretation, and the caption usually '
                'admits it.']),
        docs=[
            ('notice', 'Hall of Life · Gallery 4, convergent forms', [
                '# What this case shows',
                'Four swimming animals: an ichthyosaur, a shark, a dolphin and a penguin.',
                'All four are streamlined. None is closely related to any of the others.',
                '# What the case does not show',
                '* The internal skeleton, which differs completely between the four.',
                '* Scale. Specimens are shown at a common length for comparison.',
                '# Labels',
                '* White labels are the specimen. Grey labels are a cast or a reconstruction.',
                '* Dates are the midpoint of the range, not the earliest known occurrence.',
            ], 'notice'),
            ('social', 'Dr Mira Halloran', '@mira_palaeo', [
                'Spent an hour in Gallery 4 today and came away annoyed in a productive way.',
                '',
                'The case is beautiful and the point is right: four lineages, one shape, no',
                'common ancestor with that shape. Textbook convergence.',
                '',
                'But three of the four are casts, and the labels say so in grey text you',
                'read at arm’s length. The ichthyosaur is the only original. I do not think',
                'that is dishonest — it is standard — but a visitor leaves thinking they saw',
                'four fossils and they saw one.',
            ], 'w'),
        ],
        guided=[
            ('What do the four animals in the case have in common?',
             ('A common ancestor', 'A streamlined body', 'The same internal skeleton',
              'The same date'), 1,
             'All four are streamlined, and the notice is explicit that none is closely '
             'related to the others, which is the point of the case.'),
            ('What does the case deliberately not show?',
             ('The animals’ colour', 'Their relative size',
              'Where each was found', 'What each ate'), 1,
             'Specimens are shown at a common length for comparison, so the real scale is '
             'exactly what the display removes.'),
            ('What does a grey label mean?',
             ('The specimen is on loan', 'The specimen is a cast or reconstruction',
              'The date is uncertain', 'The animal is extinct'), 1,
             'The notice sets white for the specimen and grey for a cast, which is what '
             'Dr Halloran then objects to.'),
            ('What are the dates on the labels?',
             ('The earliest known occurrence', 'The midpoint of the range',
              'The date of discovery', 'The date of the cast'), 1,
             'The notice says the midpoint, and explicitly not the earliest known occurrence.'),
        ],
        exam=[
            ('What is the main point of Dr Halloran’s post?',
             ('The science in the case is wrong',
              'The display is honest but easy to misread',
              'Casts should never be exhibited',
              'The gallery should be relabelled in white'), 1,
             'She says plainly that it is not dishonest and that it is standard, while '
             'insisting a visitor still leaves with a false impression.'),
            ('How many of the four specimens are original?',
             ('One', 'Two', 'Three', 'All four'), 0,
             'Three of the four are casts and the ichthyosaur is the only original, which is '
             'the fact her objection rests on.'),
            ('What does Dr Halloran say about the grey labels?',
             ('They are inaccurate', 'They are hard to read at a distance',
              'They are in the wrong place', 'They should be removed'), 1,
             'Her complaint is about legibility, not accuracy: grey text you read at arm’s '
             'length is technically present and practically invisible.'),
            ('What does the notice say about the internal skeleton?',
             ('It is identical in all four', 'It differs completely between them',
              'It is not preserved', 'It is shown in a separate case'), 1,
             'The notice lists it under what the case does not show, and says the skeletons '
             'differ completely.'),
            ('Why does the difference in skeletons matter to the case’s argument?',
             ('It proves the four are related',
              'It shows the shared shape was arrived at separately',
              'It explains why three are casts',
              'It dates the specimens'), 1,
             'Convergence means reaching the same outward form from different starting '
             'points, and the differing skeletons are the evidence that the starts differ.'),
            ('What is Dr Halloran’s tone?',
             ('Dismissive', 'Critical but fair', 'Enthusiastic', 'Indifferent'), 1,
             'She calls the case beautiful and the point right before raising one specific '
             'objection, and grants that the practice is standard.'),
            ('What can be inferred about museum practice from the post?',
             ('Casts are rarely used', 'Displaying casts is normal',
              'Labels are usually white', 'Reconstructions are forbidden'), 1,
             'I do not think that is dishonest — it is standard tells you the practice is '
             'widespread rather than exceptional.'),
        ],
    ),

    r3=dict(
        sub='Reading the fossil record',
        title='What the Gaps in the Record Mean',
        words=282,
        paras=[
            'The fossil record is often described as incomplete, as though completeness were '
            'the standard it fails to meet. A more useful description is that it is biased in '
            'ways that can be listed. Hard parts survive and soft parts do not. Animals that '
            'died in water are preserved far more often than animals that died on a hillside. '
            'Species that were abundant and widespread leave more fossils than species that '
            'were rare, and abundance is thought to explain more of the record than any other single factor.',

            'Once the biases are listed, a gap stops being an absence of information. A '
            'lineage that disappears from the record and reappears ten million years later '
            'has not necessarily been absent. It may well have been living somewhere that '
            'does not preserve, or living at a population size too small to be sampled. This '
            'is widely accepted, and it is why palaeontologists distinguish between the last '
            'appearance of a fossil and the extinction of a lineage. The two can be separated '
            'by a long interval, and the interval is itself evidence of something.',

            'The harder problem is the opposite one. A sudden appearance of many forms in a '
            'short stretch of rock appears to show rapid diversification, and sometimes it '
            'does. But it can equally reflect a change in the rock: a shift to conditions '
            'that preserve well, after a long stretch that preserved almost nothing. '
            'Distinguishing a real radiation from a preservation artefact is far from clear '
            'in most cases, and the honest answer is often that both contributed. What cannot '
            'be ruled out, in a record built from what happened to survive, is that the '
            'pattern is partly a pattern in the surviving.',
        ],
        skill=('Reading a text that corrects a common framing',
               ['A B2 passage often opens by rejecting the usual way of putting something: '
                'is often described as, is commonly thought to be.',
                'What follows the rejection is the author’s own framing, and the whole '
                'passage then works inside it.',
                'The first question is usually about that move, not about the content.']),
        guided=[
            ('What is the author’s main point about the fossil record?',
             ('It is too incomplete to use', 'Its biases can be listed and worked with',
              'It is complete for marine animals', 'It should be described statistically'), 1,
             'The opening replaces incomplete with biased in ways that can be listed, and '
             'everything after it works from that framing.'),
            ('Why are abundant species better represented?',
             ('They were more important', 'There were simply more of them to fossilise',
              'They lived in water', 'They had harder parts'), 1,
             'The passage says more fossils follow from being abundant and widespread, and '
             'adds that this is not the same as mattering more.'),
            ('What is the difference between a last appearance and an extinction?',
             ('There is none', 'The last fossil may predate the real end of the lineage',
              'Extinction is always earlier', 'Only one can be dated'), 1,
             'The lineage may have continued somewhere that does not preserve, so the last '
             'fossil marks the end of the evidence, not the end of the animal.'),
            ('The word "sampled" in the second paragraph is closest in meaning to',
             ('counted', 'captured in the record', 'measured precisely', 'identified'), 1,
             'A population too small to be sampled is one that left too few fossils to appear '
             'in what we have recovered.'),
        ],
        exam=[
            ('Why does the author call "incomplete" an unhelpful description?',
             ('The record is in fact complete',
              'It implies a standard the record was never going to meet',
              'It is a recent term', 'It applies only to marine fossils'), 1,
             'As though completeness were the standard it fails to meet is the objection: the '
             'word measures the record against something irrelevant.'),
            ('What does the author say a long gap can be evidence of?',
             ('Nothing at all', 'Something — the interval itself carries information',
              'An error in dating', 'A mass extinction'), 1,
             'The last line of the second paragraph says the interval is itself evidence of '
             'something, which is the opposite of treating it as missing data.'),
            ('What is "the harder problem"?',
             ('Dating rocks accurately', 'Telling a real radiation from a preservation artefact',
              'Finding soft-bodied fossils', 'Distinguishing species from varieties'), 1,
             'The third paragraph opens by naming the opposite problem and then defines it '
             'as exactly this distinction.'),
            ('How confident is the author that radiations can be told from artefacts?',
             ('Very confident', 'It is far from clear in most cases',
              'Confident for marine rocks only', 'It is impossible in principle'), 1,
             'Far from clear is the author’s own hedge, and it is immediately softened '
             'further by saying both often contributed.'),
            ('What does "a pattern in the surviving" mean?',
             ('A pattern in which animals survived extinction',
              'A pattern in which fossils happened to be preserved',
              'A pattern in modern populations',
              'A pattern in how rocks are dated'), 1,
             'The phrase closes a paragraph about preservation, so the surviving is the '
             'fossils that made it into the record rather than the organisms.'),
            ('Which best states the author’s attitude to the record?',
             ('Sceptical that it can be used at all',
              'Confident, provided its biases are stated',
              'Certain that it is misleading',
              'Indifferent to the question'), 1,
             'The argument throughout is that naming the biases converts a weakness into '
             'something you can reason with.'),
            ('All of the following are given as biases EXCEPT:',
             ('Hard parts preserve better', 'Water burials preserve better',
              'Abundant species preserve better', 'Large species preserve better'), 3,
             'Size is never mentioned; the other three are each stated in the first paragraph.'),
            ('What does "cannot be ruled out" signal about the final claim?',
             ('The author is certain of it', 'The author thinks it unlikely but possible',
              'The author rejects it', 'The author has no view'), 1,
             'Cannot be ruled out is the weakest positive commitment available, so the claim '
             'is kept open rather than asserted.'),
            ('What would most strengthen the author’s argument?',
             ('A new fossil site of exceptional quality',
              'Evidence that diversification spikes line up with changes in rock type',
              'A more precise dating method',
              'More fossils of soft-bodied animals'), 1,
             'If the spikes track the rock rather than the biology, the preservation artefact '
             'the author raises is shown to be doing real work.'),
        ],
    ),

    l1=dict(
        sub='Selection and drift',
        caption='Two students preparing a seminar on island populations',
        skill=('Hearing a correction that is not announced',
               ['At B2 a speaker often corrects the other without saying so: Well, that is '
                'the selection story.',
                'The correction is in the hedge and the stress, not in the word no.',
                'If a speaker restates the other’s point in slightly different words, they '
                'are usually about to disagree with it.']),
        warm=[
            ('Man: So the small beak is an adaptation to the dry years?',
             ('Well, that is one reading of it.', 'Yes, the island is dry.',
              'About four millimetres.', 'No, it is a large beak.'), 0,
             'A checking question met with a hedge rather than a yes, which marks the start '
             'of a disagreement about how to read the data.'),
            ('Woman: How many birds were in the founding population?',
             ('Fewer than twenty, which is the whole point.', 'They arrived by storm.',
              'Yes, quite a few.', 'In about 1977.'), 0,
             'A how-many question wants a number, and this one adds why the number matters.'),
            ('Man: Have you found the original paper yet?',
             ('It is behind a paywall, annoyingly.', 'I think it is a good paper.',
              'About thirty pages.', 'Yes, I have read it.'), 0,
             'A yes/no about finding something is answered with the obstacle, which is more '
             'informative than a bare no.'),
        ],
        script=[
            ('Man', 'So the small beak is an adaptation to the dry years?'),
            ('Woman', 'Well, that is one reading of it. It is the one in the textbook.'),
            ('Man', 'You do not buy it?'),
            ('Woman', 'I buy it for the Daphne Major birds, where they measured the selection '
                      'directly — the drought, the hard seeds, the survivors. That is about as '
                      'clean as field biology gets.'),
            ('Man', 'But not for our island.'),
            ('Woman', 'Our island was colonised by fewer than twenty birds after a storm. '
                      'With a founding population that small, you would expect the beak to '
                      'drift somewhere odd whatever the seeds were doing.'),
            ('Man', 'So we cannot tell.'),
            ('Woman', 'We can tell if we look at several traits. Drift pushes everything '
                      'around at random. Selection pushes one trait and leaves the rest alone. '
                      'If the beak moved and nothing else did, that is selection.'),
            ('Man', 'And if everything moved?'),
            ('Woman', 'Then it is a founder effect and the beak is not telling us anything '
                      'about seeds.'),
            ('Man', 'Have you found the original paper yet?'),
            ('Woman', 'It is behind a paywall, annoyingly. I have asked the library.'),
        ],
        items=[
            ('What does the woman mean by "that is one reading of it"?',
             ('She agrees completely', 'She is signalling that she does not fully accept it',
              'She has not read the chapter', 'She thinks the textbook is wrong about beaks'), 1,
             'The hedge marks a disagreement she then explains, and the man hears it '
             'immediately — he asks whether she buys it.'),
            ('Where does the woman accept the selection explanation?',
             ('On their own island', 'On Daphne Major, where selection was measured',
              'Nowhere', 'In the textbook only'), 1,
             'She calls the Daphne Major case about as clean as field biology gets, and that '
             'is the one place she grants it.'),
            ('Why does the founding population size matter?',
             ('Small populations drift more', 'Small populations select faster',
              'Large populations are harder to count', 'It determines the seed supply'), 0,
             'With fewer than twenty founders, chance can move a trait regardless of what any '
             'advantage would favour.'),
            ('What test does the woman propose?',
             ('Measuring more birds', 'Looking at several traits at once',
              'Finding the original paper', 'Comparing two islands'), 1,
             'Drift moves everything at random and selection moves one thing, so the number '
             'of traits that shifted is the discriminating evidence.'),
            ('What would a shift in many traits at once indicate?',
             ('Strong selection', 'A founder effect', 'A measurement error',
              'A change in seed hardness'), 1,
             'She says so directly: then it is a founder effect and the beak tells us nothing '
             'about seeds.'),
            ('What is stopping them reading the original study?',
             ('It is not published yet', 'It is behind a paywall',
              'It is in another language', 'The library has lost it'), 1,
             'She names the paywall and says she has asked the library, which is the current '
             'state of the problem.'),
            ('What is the woman’s overall position?',
             ('The textbook is wrong', 'The textbook explanation does not transfer to their case',
              'Drift explains everything', 'Selection cannot be measured'), 1,
             'She accepts the explanation where it was measured and refuses to carry it to an '
             'island with a very different history.'),
        ],
    ),

    l2=dict(
        sub='Convergent forms',
        caption='A notice to students before a museum field visit',
        poster=['Gallery 4 field visit · Thursday 10.00',
                'Bring the worksheet and a pencil, not a pen',
                'Photography without flash only'],
        skill=('Hearing the reason behind a rule',
               ['A B2 announcement usually gives a reason, and the reason is what gets '
                'tested rather than the rule.',
                'Listen for because, which is why, the reason being.',
                'A rule with a reason attached is easier to remember and harder to '
                'misreport.']),
        warm=[
            ('Woman: Can we take photographs in the gallery?',
             ('Yes, but without flash.', 'The gallery is on the fourth floor.',
              'It opens at ten.', 'No, I did not take any.'), 0,
             'A yes/no about permission is answered with the permission and the condition '
             'attached to it.'),
            ('Man: Why a pencil rather than a pen?',
             ('Because ink cannot be removed from a specimen case.',
              'They are in the shop.', 'Yes, bring a pencil.', 'About two pounds.'), 0,
             'A why question wants the reason, and the other options give a place, an '
             'agreement and a price instead.'),
            ('Woman: Is the worksheet online?',
             ('It went up last night.', 'It has eight questions.',
              'Yes, it is a worksheet.', 'In Gallery 4.'), 0,
             'A yes/no about availability is answered with when it appeared, which confirms '
             'and locates it at once.'),
        ],
        script=[
            ('Man', 'A few things before Thursday. We meet at the main entrance at ten, not '
                    'in the gallery, because the group ticket has to be collected as one '
                    'group. Bring the worksheet — it went up last night — and bring a pencil '
                    'rather than a pen. That is not fussiness: ink cannot be removed from a '
                    'specimen case, and the museum has lost two cases that way. Photography '
                    'is fine without flash. Flash is restricted not for the fossils, which do '
                    'not care, but for the painted reconstructions behind them, which fade. '
                    'One last thing, and it is the one that matters for your assignment. The '
                    'labels distinguish specimens from casts, and the distinction is in the '
                    'colour of the label, not in the wording. Three of the four animals in '
                    'the main case are casts. If your worksheet says you examined four '
                    'fossils, you have not read the labels, and that is the question the '
                    'assignment is really asking.'),
        ],
        items=[
            ('Why does the group meet at the entrance?',
             ('The gallery opens late', 'The group ticket is collected as one group',
              'The worksheet is handed out there', 'The lift is out of order'), 1,
             'The speaker gives the ticket as the reason and contrasts it with meeting in '
             'the gallery.'),
            ('Why are pencils required?',
             ('Pens are expensive', 'Ink cannot be removed from a specimen case',
              'Pencil is easier to erase', 'The museum sells pencils'), 1,
             'He calls it not fussiness and backs it with two cases the museum has lost.'),
            ('Why is flash photography restricted?',
             ('It damages the fossils', 'It fades the painted reconstructions',
              'It disturbs other visitors', 'It is a copyright issue'), 1,
             'He says explicitly that the fossils do not care and names the paintings behind '
             'them as the reason.'),
            ('How are casts distinguished from specimens?',
             ('By the wording of the label', 'By the colour of the label',
              'By their position in the case', 'They are not distinguished'), 1,
             'The distinction is in the colour, not the wording, which is why it is easy to '
             'miss.'),
            ('What does the speaker suggest about the assignment?',
             ('It is about convergent evolution',
              'It is really testing whether students read the labels',
              'It must be handed in on Thursday',
              'It can be done without visiting'), 1,
             'His last sentence says that is the question the assignment is really asking, '
             'after warning what a careless worksheet will show.'),
            ('What is the speaker’s tone when discussing the pencil rule?',
             ('Apologetic', 'Explanatory rather than apologetic',
              'Impatient', 'Uncertain'), 1,
             'That is not fussiness heads off the obvious reaction and replaces it with a '
             'reason, which is explanation rather than apology.'),
        ],
    ),

    l3=dict(
        sub='Reading the fossil record',
        caption='A lecture on bias in the fossil record',
        board=['Preservation ≠ importance',
               'Hard parts, water, abundance',
               'Last appearance ≠ extinction',
               'A spike may be rock, not biology'],
        skill=('Following a talk built on one repeated move',
               ['Some B2 talks make the same move three times with different material. '
                'Identify the move and the rest becomes predictable.',
                'Here the move is: here is a pattern, here is the boring explanation, here '
                'is how we tell them apart.',
                'The test items usually ask for the third part, which is the only one that '
                'is the speaker’s own.']),
        warm=[
            ('Woman: Does a gap in the record mean the animal was absent?',
             ('Not necessarily — it may simply not have preserved.',
              'About ten million years.', 'Yes, that is what a gap means.',
              'In the Jurassic.'), 0,
             'A yes/no question about inference is answered by rejecting the inference and '
             'naming the alternative.'),
            ('Man: What preserves best?',
             ('Hard parts, in water.', 'Since the nineteenth century.',
              'Yes, bones do.', 'In museums.'), 0,
             'A what question wants the categories, and the answer gives both conditions the '
             'lecture keeps returning to.'),
            ('Woman: So a burst of new forms is always a real radiation?',
             ('No — it can be a change in the rock.', 'Yes, usually in the Cambrian.',
              'About forty species.', 'It is a good question.'), 0,
             'A checking question that overstates the case, answered by naming the competing '
             'explanation.'),
        ],
        script=[
            ('Woman', 'I want to give you one habit of mind, and then use it three times. The '
                      'habit is this: when you see a pattern in the fossil record, ask what '
                      'the record would look like if the pattern were entirely an artefact of '
                      'preservation. Only then ask what it would look like if the pattern '
                      'were real. First use. Marine animals dominate the record. Does that '
                      'mean life was mostly marine? It is widely accepted that it does not — '
                      'water buries things, hillsides do not, and that asymmetry is enough on '
                      'its own. Second use. A lineage vanishes and comes back ten million '
                      'years later. Palaeontologists call that a Lazarus taxon, and the name '
                      'is a joke at our own expense: nothing rose from the dead, the animal '
                      'was somewhere we were not looking. Which is why we separate the last '
                      'appearance of a fossil from the extinction of a lineage, and why the '
                      'gap between them is itself a measurement. Third use, and this one is '
                      'harder. A sudden burst of forms in a short stretch of rock. It appears '
                      'to show rapid diversification. But a stretch of rock that preserves '
                      'well, following a stretch that preserved almost nothing, produces '
                      'exactly the same picture. Telling those apart needs independent '
                      'evidence about the rock itself, and anyone who reports a radiation '
                      'without that evidence is bound to be asked for it.'),
        ],
        items=[
            ('What is the "habit of mind" the speaker recommends?',
             ('Always trust the record', 'Ask first what preservation alone would produce',
              'Date every specimen twice', 'Prefer marine fossils'), 1,
             'She states the order explicitly: the artefact question first, the real-pattern '
             'question only after it.'),
            ('Why does the record favour marine animals?',
             ('More marine species existed', 'Water buries and hillsides do not',
              'Marine fossils are easier to find', 'Marine rocks are better dated'), 1,
             'She calls the asymmetry enough on its own, which is the point of the first '
             'use of the habit.'),
            ('What is a Lazarus taxon?',
             ('A newly discovered species', 'A lineage that vanishes and reappears',
              'A fossil found out of place', 'A lineage with no descendants'), 1,
             'The name is given to the gap-and-return pattern, and she says the joke is at '
             'palaeontologists’ own expense.'),
            ('Why is the Lazarus name "a joke at our own expense"?',
             ('The animals were never really gone, only unobserved',
              'The term is religious', 'The fossils were misidentified',
              'The gap was a dating error'), 0,
             'Nothing rose from the dead — the lineage persisted somewhere nobody was '
             'looking, so the drama is in the record, not the biology.'),
            ('What does the gap between last appearance and extinction provide?',
             ('A dating error', 'A measurement', 'A reason to discard the fossil',
              'Evidence of a mass extinction'), 1,
             'She calls it itself a measurement, which turns the apparent absence into data.'),
            ('What does a burst of new forms require before it can be called a radiation?',
             ('A larger sample', 'Independent evidence about the rock',
              'Confirmation from living species', 'A second locality'), 1,
             'Because a well-preserving stretch after a poor one produces the same picture, '
             'only evidence about the rock separates them.'),
            ('What does the speaker predict about a report without that evidence?',
             ('It will be rejected outright', 'It is bound to be challenged',
              'It will take longer to publish', 'It will be hard to date'), 1,
             'Is bound to be asked for it is her strongest commitment in the talk, and she '
             'uses it for exactly this case.'),
        ],
    ),

    sp=[
        dict(
            sub='Selection and drift',
            focus='keeping a participle clause attached to the right subject',
            skill=('Repeating a sentence that front-loads a clause',
                   ['A participle clause at the front puts the main subject late. If you '
                    'lose it, the sentence collapses.',
                    'Hold the opening clause and the subject together in one breath.',
                    'Having arrived in small numbers, THE BIRDS — the stress falls on the '
                    'subject, not the participle.']),
            repeat=[
                'Populations change over time.',
                'Chance changes small populations most.',
                'Arriving in small numbers, the founders carried little variation.',
                'Selection moves one trait and leaves the rest alone.',
                'Drift moves everything at once, and it moves it at random.',
                'Having been isolated for ten thousand years, the island form is no longer the same bird.',
                'If one trait has shifted and the others have not, that is selection rather than chance, whatever the textbook says.',
            ],
            theme='chance and design in the natural world',
            qs=[
                'Thank you for joining me. To start, do you remember how evolution was first '
                'explained to you at school?',
                'People often describe animals as being designed for their environment. Is '
                'that a useful way of talking, or a misleading one? Why?',
                'Now your opinion. Some people say that teaching evolution properly requires '
                'teaching probability first. Do you agree? Why or why not?',
                'A last question. Should a government fund research that has no foreseeable '
                'application, such as work on fossil lineages? Why?',
            ],
            model=[(2, 'It is useful as shorthand and misleading if you stop there. Designed '
                       'implies a designer and a plan, and what actually happened is that the '
                       'variants that left more offspring became common.'),
                   (3, 'Up to a point. Students do need the idea that something can be '
                       'common without being better. But I would teach that through examples '
                       'rather than through probability as a subject.')],
            selfcheck=['I kept the front clause and its subject together.',
                       'I avoided saying an animal wanted or tried to adapt.',
                       'I gave one concrete example.'],
        ),
        dict(
            sub='Convergent forms',
            focus='contrastive stress on the word that carries the difference',
            skill=('Describing a similarity and a difference in one answer',
                   ['Comparison questions at B2 want both halves. A list of similarities is '
                    'half an answer.',
                    'Mark the turn out loud: they look the same from outside; inside they '
                    'are not.',
                    'Stress the contrasting word, not the whole clause.']),
            repeat=[
                'A dolphin and a shark look alike.',
                'They are not closely related.',
                'The same shape solves the same problem.',
                'The bones underneath are completely different.',
                'A bat wing and a bird wing use the same bones rearranged.',
                'Convergence tells you about the problem, and the differences tell you about the history.',
                'Two lineages facing the same constraint often arrive at the same outward form, though almost never by the same route.',
            ],
            theme='similarity, difference and what museums choose to show',
            qs=[
                'Thanks for your time. First, when did you last visit a museum, and what did '
                'you go to see?',
                'Museums often display casts rather than originals and label them in small '
                'print. Does that matter to you as a visitor? Why?',
                'Now an opinion. Some argue that a museum’s job is to tell a clear story, '
                'even if that means simplifying. Others say the complications are the '
                'interesting part. Which is closer to your view?',
                'And finally. Should objects taken from other countries long ago be returned, '
                'whatever the cost to the collection? Why or why not?',
            ],
            model=[(2, 'It matters more than I used to think. I am happy to look at a cast — '
                       'the shape is the information. But if I leave believing I saw four '
                       'fossils and I saw one, the label has not done its job.'),
                   (3, 'I lean towards the complications, although I accept that is easy to '
                       'say as somebody who already wants to be there. A clear story that '
                       'leaves people curious is better than a complete one that loses them.')],
            selfcheck=['I gave both the similarity and the difference.',
                       'I stressed the contrasting word.',
                       'I answered the question asked, not a related one.'],
        ),
        dict(
            sub='Reading the fossil record',
            focus='pausing before a qualifying clause instead of inside it',
            skill=('Hedging out loud without sounding unsure',
                   ['A hedge is a precision instrument, not a retreat. Said firmly, it '
                    'raises your score; mumbled, it sounds like doubt.',
                    'Say the hedge at normal speed and stress the claim after it: it is '
                    'PROBABLY an artefact.',
                    'Never stack hedges. Maybe possibly perhaps is one hedge too many '
                    'three times over.']),
            repeat=[
                'The record is biased, not incomplete.',
                'Hard parts preserve and soft parts do not.',
                'A gap is not evidence of absence.',
                'The animal may simply have lived somewhere that does not preserve.',
                'A burst of new forms can be a change in the rock rather than in the biology.',
                'Separating a real radiation from a preservation artefact is difficult, and often both are involved.',
                'What we call the fossil record is a record of what happened to survive, which is not quite the same as a record of what lived.',
            ],
            theme='evidence, absence and what we can claim to know',
            qs=[
                'Thank you for taking part. To begin, is there a subject where you have '
                'learned to be careful about what the evidence actually shows?',
                'People often say that absence of evidence is not evidence of absence. Is '
                'that always true? When might an absence tell you something real?',
                'Now your opinion. Should scientists state publicly how uncertain they are, '
                'even when that makes their work easier to dismiss? Why or why not?',
                'One final question. If a country can fund either new research or better '
                'archives of research already done, which should it choose? Why?',
            ],
            model=[(2, 'Not always. If you have looked hard in exactly the place the thing '
                       'should be, and it is not there, the absence is informative. The slogan '
                       'protects you from bad inference and can also stop good inference.'),
                   (3, 'Yes, although I understand the fear. A field that hides its '
                       'uncertainty is one bad result away from losing the public entirely, '
                       'whereas one that states it can survive being wrong.')],
            selfcheck=['I used one hedge, not three.',
                       'I said the hedge firmly and stressed the claim.',
                       'I gave a case where the general rule does not hold.'],
        ),
    ],

    w1=dict(
        sub='Questions about evidence',
        skill=('Build a Sentence with a longer embedded clause',
               ['The embedded clause now has its own object and sometimes its own adverb. '
                'The word order inside it is still statement order.',
                'Find the main verb of the whole sentence first. Everything else hangs off '
                'it.',
                'A tile carrying a whole phrase goes in as a block — do not split it.']),
        guided=[
            ('The seminar is on island populations.',
             ['know', 'do', 'you', 'whether', 'the reading', 'is', 'on the portal', 'yet', 'actually'],
             'Do you know whether the reading is actually on the portal yet?'),
            ('Three of the four specimens turned out to be casts.',
             ['which', 'nobody', 'us', 'told', 'ones', 'were', 'the originals', 'in the case', 'actually'],
             'Nobody told us which ones in the case were actually the originals.'),
            ('My supervisor queried the dating in chapter two.',
             ['she', 'where', 'to know', 'wanted', 'the midpoint', 'had', 'come from', 'originally', 'figure'],
             'She wanted to know where the midpoint figure had originally come from.'),
        ],
        exam=[
            ('The gallery reopens after the refit.',
             ['is', 'what', 'exactly', 'in the new case', 'do', 'you', 'going', 'know', 'to be'],
             'Do you know exactly what is going to be in the new case?'),
            ('The paper is behind a paywall.',
             ['whether', 'has', 'the library', 'I wonder', 'access', 'to it', 'at all', 'actually', 'still'],
             'I wonder whether the library actually still has access to it at all.'),
            ('Two lineages arrived at the same body shape.',
             ['how', 'explain', 'can', 'anybody', 'that', 'twice', 'happened', 'exactly', 'independently'],
             'Can anybody explain exactly how that happened independently twice?'),
            ('The gap in the record runs for ten million years.',
             ['know', 'nobody', 'seems', 'to', 'whether', 'the lineage', 'survived', 'through it', 'actually'],
             'Nobody seems to know whether the lineage actually survived through it.'),
            ('The worksheet asks about labels.',
             ['told', 'she', 'which', 'us', 'colour', 'a cast', 'meant', 'was', 'it'],
             'She told us which colour it was that meant a cast.'),
            ('The field visit is on Thursday morning.',
             ['me', 'can', 'remind', 'we', 'where', 'you', 'are', 'meeting', 'exactly'],
             'Can you remind me exactly where we are meeting?'),
            ('The founding population was under twenty birds.',
             ['do', 'whether', 'you', 'know', 'that', 'is', 'enough', 'for drift', 'really'],
             'Do you know whether that is really enough for drift?'),
        ],
    ),

    w2=dict(
        sub='Convergent forms',
        to='gallery4@citymuseum.org',
        date='12/11/2026',
        subject='Gallery 4 labels — a suggestion from a visiting group',
        scenario=[
            'You went to Gallery 4 with a university group. The case of four swimming '
            'animals is excellent, but three of the four are casts and the labels saying so '
            'are in grey print that is hard to read from behind the barrier. Two people in '
            'your group left believing they had seen four original fossils.',
            'Write an email to the gallery.',
        ],
        bullets=['Say what you liked about the display.',
                 'Explain the problem and give the evidence for it.',
                 'Suggest one change and offer something in return.'],
        skill=('Writing a suggestion rather than a complaint',
               ['Open with what works. A reader who feels attacked stops reading before the '
                'suggestion.',
                'Give the evidence as a fact, not an accusation: two of our group left '
                'believing X, not your labels are misleading.',
                'Suggest one change. A list of five reads as a demand; one reads as help.']),
        model=[
            'Dear Gallery 4 team,',
            '',
            'I visited on 10 November with a group of fifteen undergraduates, and the case of '
            'four swimming animals did exactly what we needed it to do. Seeing the four shapes '
            'side by side made the point about convergence better than an hour of my talking '
            'would have.',
            '',
            'One thing did not work as intended, and I mention it only because the case is '
            'otherwise so good. Three of the four specimens are casts, and the labels do say '
            'so, but in grey print read from behind the barrier. Two of our group wrote in '
            'their worksheets that they had examined four fossils. They had read the labels; '
            'they had simply not seen that part of them.',
            '',
            'Would it be possible to move the word cast to the first line of the label, in the '
            'same size as the species name? It appears to be the smallest change that would '
            'fix it.',
            '',
            'If it is useful, I am happy to send the fifteen worksheets so you can see how the '
            'current labels are being read. We are back in March and would be glad to test '
            'anything you try.',
            '',
            'With thanks,',
            'Dr Mira Halloran',
        ],
        notes=['It opens with what the display does well, and says why in one specific line.',
               'The problem is evidenced by what the group wrote, not asserted as a fault.',
               'One change is proposed, and it is the smallest one that would work.',
               'It offers the worksheets and a return visit — the reader gains something.'],
        bandpair=dict(
            mid=[
                'Dear Gallery 4 team,',
                'I came to your gallery last week with some students and I wanted to say that '
                'the case with the four swimming animals is very good. It explains convergent '
                'evolution much better than a lecture does.',
                'However, I have to say that the labels are a problem. Three of the specimens '
                'are casts but you cannot really tell because the writing is grey and small. '
                'Some of my students did not realise and thought they were all real fossils, '
                'which is not very good.',
                'Please could you make the labels clearer? It would be much better for '
                'visitors if people could see what is a cast and what is not. Thank you for '
                'reading my email and I hope you can do something about this.',
                'Yours sincerely, Mira Halloran',
            ],
            top=[
                'Dear Gallery 4 team,',
                'I visited on 10 November with fifteen undergraduates, and the case of four '
                'swimming animals did exactly what we needed it to do. Seeing the shapes side '
                'by side made the point better than an hour of my talking would have.',
                'One thing did not work as intended, and I mention it only because the case is '
                'otherwise so good. Three of the four are casts, and the labels do say so, but '
                'in grey print read from behind the barrier. Two of our group wrote that they '
                'had examined four fossils. They had read the labels; they had not seen that '
                'part of them.',
                'Would it be possible to move the word cast to the first line, in the same '
                'size as the species name? I am happy to send the worksheets so you can see '
                'how the labels are being read.',
                'With thanks, Dr Mira Halloran',
            ],
            diffs=[
                'It dates the visit and gives the group size, so the gallery can place the '
                'report instead of taking it on trust.',
                'The evidence is what two visitors wrote, not the writer’s opinion that the '
                'labels are unclear — a fact the gallery can check.',
                '"They had read the labels; they had not seen that part of them" removes '
                'blame from both sides and makes the fix obvious.',
                'It proposes one specific change rather than asking for things to be clearer, '
                'which nobody can act on.',
                'It offers the worksheets, so the email ends by giving the reader something '
                'rather than only asking.',
            ],
        ),
    ),

    w3=dict(
        sub='Reading the fossil record',
        prof='Dr Abiodun',
        question='Palaeontologists work from a record that preserves some things and not '
                 'others. Some argue that this makes large claims about the history of life '
                 'unsafe, and that the field should restrict itself to what is directly '
                 'observed. Others argue that every science works with partial evidence and '
                 'that the fossil record is unusual only in being honest about it. Should '
                 'palaeontology make large claims from an incomplete record? Why or why not?',
        posts=[('Ivan', 'm',
                'I think the caution is right. When a lineage disappears for ten million '
                'years and comes back, we invent a name for it rather than admit we cannot '
                'see most of what happened. A field that routinely reasons about things it '
                'has never observed should be modest about its conclusions.'),
               ('Noor', 'w',
                'But every historical science does this. Astronomers reason about events they '
                'cannot repeat and geologists about processes nobody watched. If partial '
                'evidence disqualified a field, we would have to give up most of what we '
                'know. The question is whether the biases can be stated, and in '
                'palaeontology they can.')],
        skill=('Turning an opponent’s example against them',
               ['The strongest B2 move is to take the example the other post used and show '
                'it supports your side.',
                'It requires reading closely enough to see what the example actually '
                'demonstrates.',
                'Signal it: Ivan’s own example makes the opposite point.']),
        starters=['Ivan’s own example makes the opposite point, because…',
                  'Noor is right that…, but the real distinction is between… and…',
                  'What the Lazarus case shows is not… but…',
                  'I would accept the caution if…, and it does not.'],
        model=[
            'Ivan’s own example makes the opposite point. The Lazarus taxon is not a case of '
            'the field inventing a story to cover a gap. It is a case of the field noticing '
            'that a gap had been read as an extinction, naming the error, and building the '
            'distinction between last appearance and extinction so that nobody makes it '
            'again. That is a discipline correcting itself in public, which is the behaviour '
            'he is asking for.',
            'Noor is right that every historical science reasons from partial evidence. But I '
            'would put the distinction more narrowly than she does. The question is not '
            'whether the evidence is partial — it always is — but whether the way it is '
            'partial can be written down. Hard parts preserve, soft parts do not; water '
            'buries, hillsides do not. Those are statable biases, and a statable bias can be '
            'corrected for.',
            'It is doubtful whether Ivan’s alternative is even available. Restricting the '
            'field to what is directly observed would mean describing specimens and declining '
            'to say what they were doing, which is not a more modest palaeontology but a '
            'different and much smaller subject.',
            'So I would keep the large claims and insist on the apparatus: state the bias, '
            'state the confidence, and separate what the record shows from what the lineage '
            'did. That is more demanding than caution, not less.',
        ],
        model_words=226,
    ),

    gram=dict(
        title='Participle clauses',
        headers=['Form', 'Example'],
        rows=[
            ('-ing, same time', 'Facing the same problem, unrelated lineages arrive at the same form.'),
            ('-ing, reason', 'Being small, the population drifted rather than adapted.'),
            ('-ed, passive', 'Isolated for ten thousand years, the birds diverged.'),
            ('Having + -ed, earlier', 'Having arrived in small numbers, the founders carried little variation.'),
            ('reduced relative, active', 'The species living only on one island  (= which lives)'),
            ('reduced relative, passive', 'The specimens shown in Gallery 4  (= which are shown)'),
            ('after a conjunction', 'When reading a caption, check what it does not claim.'),
        ],
        notes=[
            'A participle clause has no subject of its own. It borrows the subject of the '
            'main clause, which is why the subject must be the same for both.',
            'The -ing form is active and the -ed form is passive. Isolated for a long time '
            'means somebody or something isolated them.',
            'Having + past participle puts the participle clause earlier in time than the '
            'main clause. Use it when the order matters.',
        ],
        watch='The dangling participle. "Having studied the labels, three specimens turned '
              'out to be casts" says the specimens did the studying. Keep the subject of the '
              'main clause the same as the understood subject of the participle.',
        ex=[
            ('Join each pair with a participle clause.',
             ['The birds arrived in small numbers. They carried little variation.',
              'The population was isolated for millennia. It diverged from the mainland form.',
              'The lineages face the same problem. They arrive at the same shape.',
              'The specimen had been cast in resin. It was displayed beside the original.',
              'The rock preserves well. It produces an apparent burst of new forms.',
              'She had read the labels carefully. She noticed the grey print.'],
             ['Arriving in small numbers, the birds carried little variation.',
              'Isolated for millennia, the population diverged from the mainland form.',
              'Facing the same problem, the lineages arrive at the same shape.',
              'Cast in resin, the specimen was displayed beside the original.',
              'Preserving well, the rock produces an apparent burst of new forms.',
              'Having read the labels carefully, she noticed the grey print.']),
            ('Reduce the relative clause to a participle.',
             ['The species which lives only on one island is flightless.',
              'The specimens which are shown in Gallery 4 are mostly casts.',
              'A trait which is shaped by drift tells you nothing about the environment.',
              'The students who were standing behind the barrier could not read the label.'],
             ['The species living only on one island is flightless.',
              'The specimens shown in Gallery 4 are mostly casts.',
              'A trait shaped by drift tells you nothing about the environment.',
              'The students standing behind the barrier could not read the label.']),
            ('Find and correct the dangling participle.',
             ['Having examined the case, the labels were found to be unclear.',
              'Being made of resin, visitors could not tell the difference.',
              'Isolated for millennia, researchers studied the island population.',
              'Reading the caption, the scale became obvious.'],
             ['Having examined the case, we found the labels unclear.',
              'Being made of resin, the specimen was hard to distinguish.',
              'Isolated for millennia, the island population was studied by researchers.',
              'Reading the caption, I realised the scale had been standardised.']),
        ],
        bas='Build a Sentence uses participle clauses in the two items that are not questions. '
            'A tile reading "having arrived" or "shown in the case" is a participle clause and '
            'belongs at one end of the sentence, never in the middle.',
    ),

    fault=dict(
        text='Having studied the four specimens, three of them turned out to be casts. The '
             'labels, which they are printed in grey, are hard to read from the barrier. '
             'Being small, the museum could not display the originals. The students was told '
             'to bring a pencil. Isolated for millennia, researchers found the population had '
             'diverged.',
        faults=[
            ('Having studied the four specimens, three of them',
             'Having studied the four specimens, we found that three',
             'A dangling participle: the specimens did not do the studying.'),
            ('which they are printed', 'which are printed',
             'A relative pronoun is already the subject; they repeats it.'),
            ('Being small, the museum', 'Being small, the collection',
             'The participle must describe the subject, and the museum was not the small thing.'),
            ('The students was told', 'The students were told',
             'A plural subject takes a plural verb, however far the verb sits from it.'),
            ('Isolated for millennia, researchers', 'Isolated for millennia, the population',
             'The researchers were not isolated; the population was.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('one measurable feature of an organism', 'trait'),
            ('a line of descent from an ancestor', 'lineage'),
            ('something that limits what is possible', 'constraint'),
            ('able to be passed to offspring', 'heritable'),
            ('building up step by step', 'cumulative'),
            ('arriving at the same form from different starts', 'convergent'),
            ('the way of life a species makes a living by', 'niche'),
            ('the shape and structure of an organism', 'morphology'),
            ('change by chance rather than advantage', 'drift'),
            ('the permanent loss of a lineage', 'extinction'),
            ('the splitting of one population into two species', 'speciation'),
            ('the movement of a population into new ground', 'dispersal'),
        ],
        gram=[
            ('______ in small numbers, the founders carried little variation.', 'Arriving'),
            ('______ for millennia, the population diverged.', 'Isolated'),
            ('______ read the labels, she noticed the grey print.', 'Having'),
            ('The species ______ only on one island is flightless.', 'living'),
            ('The specimens ______ in Gallery 4 are mostly casts.', 'shown'),
            ('______ the same problem, the lineages arrive at the same shape.', 'Facing'),
            ('A trait ______ by drift tells you nothing about the environment.', 'shaped'),
            ('When ______ a caption, check what it does not claim.', 'reading'),
        ],
        mini=[
            ('Drift is strongest in',
             ('large populations', 'small populations', 'marine populations',
              'populations under selection'), 1,
             'Chance has more room when there are fewer individuals, which is why founder '
             'events move traits so far.'),
            ('Convergence shows that',
             ('two species are related', 'the same problem can produce the same form twice',
              'fossils are unreliable', 'drift is common'), 1,
             'Unrelated lineages reaching one shape is evidence about the problem, not about '
             'shared ancestry.'),
            ('A gap in the fossil record means',
             ('the lineage was extinct', 'the lineage may not have preserved',
              'the rock was misdated', 'the fossil was lost'), 1,
             'Absence from the record is absence of evidence, which the Lazarus cases show is '
             'not the same as absence of the animal.'),
            ('Which sentence has a dangling participle?',
             ('Arriving late, we missed the talk.', 'Arriving late, the talk had already begun.',
              'Having arrived late, we missed the talk.', 'We arrived late and missed the talk.'), 1,
             'The talk did not arrive late; the participle has no subject to attach to except '
             'the wrong one.'),
            ('"Is far from clear" tells you the writer',
             ('is certain', 'thinks nobody knows', 'disagrees with the evidence',
              'has not read the literature'), 1,
             'It reports the state of knowledge rather than the writer’s preference, and it '
             'reports it as unsettled.'),
            ('A sudden burst of forms in the record may reflect',
             ('rapid evolution only', 'a change in preservation',
              'a dating error only', 'a smaller sample'), 1,
             'A well-preserving stretch of rock after a poor one produces the same picture as '
             'a real radiation.'),
        ],
    ),

    tip='Participle clauses are the fastest way to raise the density of your writing, and the '
        'fastest way to write a sentence that says something absurd. Every time you write one, '
        'ask who or what is doing the participle. If the answer is not the subject of the main '
        'clause, the sentence is wrong, however good it sounds.',
)
