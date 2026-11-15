# -*- coding: utf-8 -*-
"""Unit 32 — Cosmology and Deep Time. Volume 4."""
from content._g import gaps

_GT, _GA = gaps(
    'Every number in astronomy is a comparison. A star is not bright; it is brighter than '
    'another star by a factor you can st{ate}. A galaxy is not far; it is far enough that the '
    'light reaching us was emi{tted} before the Earth exis{ted}. Working in this field means '
    'giving up the habit of absolute description entirely, because nothing in it has a scale '
    'a human body can supp{ly}, and the only honest way to report a quantity is relat{ive} to '
    'something the reader already knows.')

_ET, _EA = gaps(
    'The expansion of the universe is the most widely repeated finding in modern science and '
    'one of the most consistently misunder{stood}. The usual picture is of galaxies flying '
    'apart through space, like fragments of an explo{sion}, which gets the geometry exactly '
    'wrong. Space itself is what is expanding, and the galaxies are not moving through it so '
    'much as being car{ried} by it, the way two marks on a stretching sheet of rubber grow '
    'further ap{art} without either of them travelling across the sheet. The distinction is '
    'not pedan{tic}. On the explosion picture there is a centre, and every student who holds '
    'it asks where the centre was; on the correct picture the question is meaning{less}, '
    'because every observer anywhere sees the same recession in every dire{ction}. The '
    'explosion picture also predicts that distant galaxies must be receding more slowly than '
    'light, which is false, and the fact that it is false is far less sur{prising} once you '
    'notice that nothing is actually trave{lling}. What the rubber sheet cannot give you is '
    'the reason for the stretching, and on that the honest answer is still that nobody '
    'kn{ows}.')

UNIT = dict(
    n=32, vol=4, level='B2',
    title='Cosmology and Deep Time',
    icons=['telescope', 'speech', 'chart'],
    subs=['Measuring what cannot be reached', 'An expanding universe', 'Reading deep time'],
    grammar='Degree and comparison',
    field='luminosity, redshift, magnitude',
    opener_line='Astronomy is the discipline with no absolute measurements and no '
                'experiments, which makes it the best possible training in comparison. This '
                'unit teaches the structures English uses to say how much, how far and how '
                'much more — and how to be precise about an approximation.',
    candos=[
        'I can compare two quantities precisely, including by a factor or an order of magnitude.',
        'I can use the more … the more, by far, nowhere near and twice as … as accurately.',
        'I can explain why a popular analogy breaks down, and where.',
        'I can report a very large or very small number without losing the reader.',
        'I can follow a lecture that is built on a chain of comparisons.',
        'I can write about an unresolved question without pretending it is resolved.',
    ],

    acad=[
        ('luminosity', 'how much light a body actually emits'),
        ('photometry', 'the measurement of how bright a source appears'),
        ('redshift', 'the stretching of light from a receding source'),
        ('parallax', 'apparent shift of a near object against a far background'),
        ('spectrum', 'light separated into its component wavelengths'),
        ('wavelength', 'the distance between one wave crest and the next'),
        ('nebula', 'a cloud of gas and dust in space'),
        ('constellation', 'a named pattern of stars as seen from Earth'),
        ('trajectory', 'the path a body follows'),
        ('orbit', 'a closed path around a more massive body'),
        ('eclipse', 'one body passing in front of another'),
        ('celestial', 'to do with the sky'),
        ('terrestrial', 'to do with the Earth'),
        ('stellar', 'to do with stars'),
        ('cosmic', 'to do with the universe as a whole'),
        ('isotope', 'a form of an element with a different atomic mass'),
        ('calibration', 'setting an instrument against a known standard'),
        ('extrapolate', 'to extend a pattern beyond the measured range'),
    ],
    family=('observe', [
        ('observation', 'noun', 'a single observation proves nothing'),
        ('observatory', 'noun', 'the observatory sits above the cloud layer'),
        ('observable', 'adjective', 'the observable universe has an edge'),
    ]),
    collocs=[
        ('by a factor of', 'multiplied or divided by that number'),
        ('an order of magnitude', 'ten times, roughly'),
        ('nowhere near', 'not remotely close to'),
        ('on the order of', 'approximately, to within a factor of ten'),
        ('within a margin of', 'accurate to this amount either way'),
        ('bear in mind', 'to keep something in consideration'),
        ('break down', 'to stop working, of an explanation'),
        ('hold up', 'to remain true under testing'),
        ('fall short of', 'to be less than needed'),
        ('to a first approximation', 'roughly, ignoring the refinements'),
    ],
    stance=[
        ('is widely repeated', 'often said, which is not evidence'),
        ('on any reasonable estimate', 'however you calculate it'),
        ('it is tempting to', 'names an error before refusing it'),
        ('we simply do not know', 'the writer states an open question'),
        ('turns out to be', 'the writer marks a surprise'),
    ],
    nuance=[
        ('luminosity / magnitude', 'what is emitted / what we receive'),
        ('accuracy / precision', 'close to the truth / finely specified'),
        ('estimate / guess', 'calculated with a method / not'),
    ],
    vocab_talk=[
        'Describe the size of something using a comparison, not a number.',
        'Why is an analogy useful even when it is wrong?',
        'What is the difference between accuracy and precision?',
        'Name something science still does not know. Why does that not worry you?',
    ],
    again=['light year', 'parsec', 'standard candle', 'cosmic microwave background',
           'half-life', 'strata', 'radiometric dating', 'uniformitarianism'],

    r1=dict(
        sub='Measuring what cannot be reached',
        skill=('Completing comparative and abstract forms',
               ['Comparison words are often the missing piece: relative, comparable, '
                'proportional.',
                'The -less and -ful endings turn a noun into an adjective of absence or '
                'presence: meaningless, purposeful.',
                'Check what the sentence is doing grammatically before you fill a gap: a '
                'comparison needs a comparative.']),
        guided_text=_GT, guided=_GA,
        guided_hint='st-- is state — the slot follows can, so it needs a bare infinitive.',
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='An expanding universe',
        skill=('Reading a specification against a proposal',
               ['A specification lists what an instrument or a facility can do. A proposal '
                'asks for something that may be outside it.',
                'Match each request against a line of the specification before reading the '
                'reply.',
                'A refusal on technical grounds usually offers a second-best option, and '
                'that option is where the items come from.']),
        docs=[
            ('notice', 'Mauna Hale Observatory · allocation of observing time', [
                '# What the 3.8-metre telescope can do',
                '* Spectroscopy of objects brighter than magnitude 21.',
                '* Imaging to a field of twelve arcminutes.',
                '* Queue-mode observing on nights of poor seeing, at no charge.',
                '# What it cannot do',
                '* Targets below magnitude 21, which require the 8-metre at Cerro Pajaro.',
                '* Continuous monitoring over more than six hours in one night.',
                '# Allocation',
                '* Proposals are ranked twice a year. Director’s discretionary time, up to '
                'four nights, may be granted outside the cycle for time-critical targets.',
            ], 'notice'),
            ('email', 'k.oyinlola@maunahale.org', 'j.benedetti@astro.uni.it',
             '09/03/2028', 'Your proposal — the magnitude limit, and an alternative', [
                 'Dear Dr Benedetti,',
                 '',
                 'Thank you for the proposal. The science case is strong and the target is',
                 'two magnitudes fainter than this telescope can do spectroscopy on, so I',
                 'have to decline the request as written.',
                 '',
                 'Bear in mind what the limit actually is. It is not a cut-off at which the',
                 'instrument stops working; the signal falls off and at magnitude 23 you',
                 'would need on the order of thirty hours to reach the signal-to-noise you',
                 'have specified. Our maximum is six hours a night, so you are nowhere near',
                 'it even over a full allocation.',
                 '',
                 'Two things are worth saying. Cerro Pajaro could do this in one night, and',
                 'their next deadline is in five weeks. I have copied their TAC chair.',
                 '',
                 'Separately: your secondary target at magnitude 19 is well within us, and',
                 'it is the one your paper actually needs first. That I can offer on',
                 'discretionary time, and I would rather do that than have you wait six',
                 'months for a cycle.',
                 '',
                 'Dr Oyinlola, Director',
             ]),
        ],
        guided=[
            ('What is the magnitude limit for spectroscopy?',
             ('Magnitude 19', 'Magnitude 21', 'Magnitude 23', 'There is none'), 1,
             'The specification sets brighter than magnitude 21, which is the line the '
             'proposal falls outside.'),
            ('What is the maximum continuous monitoring in one night?',
             ('Three hours', 'Six hours', 'Twelve hours', 'Unlimited'), 1,
             'Over six hours in one night is listed under what the telescope cannot do.'),
            ('What is discretionary time for?',
             ('Poor weather', 'Time-critical targets outside the cycle',
              'Students', 'Calibration'), 1,
             'Up to four nights may be granted outside the twice-yearly ranking for targets '
             'that cannot wait.'),
            ('Which facility handles targets fainter than magnitude 21?',
             ('Mauna Hale', 'Cerro Pajaro', 'Neither', 'Both equally'), 1,
             'The notice names the 8-metre at Cerro Pajaro for exactly those targets.'),
        ],
        exam=[
            ('Why is the proposal declined as written?',
             ('The science is weak', 'The target is two magnitudes beyond the instrument',
              'The deadline passed', 'No time is available'), 1,
             'The director separates the quality of the case from the capability of the '
             'telescope.'),
            ('What does the director say the magnitude limit really is?',
             ('A hard cut-off', 'A point where the required exposure becomes impractical',
              'A safety rule', 'An administrative convention'), 1,
             'The signal falls off gradually, and thirty hours against a six-hour maximum is '
             'what makes it impossible.'),
            ('How long would the target need on this telescope?',
             ('Six hours', 'On the order of thirty hours', 'One night', 'Four nights'), 1,
             'That figure set against the six-hour nightly maximum is the whole argument for '
             'declining.'),
            ('What does "you are nowhere near it" refer to?',
             ('The deadline', 'The required signal-to-noise',
              'The magnitude limit', 'The field of view'), 1,
             'It follows the comparison between thirty hours needed and six hours available '
             'per night.'),
            ('What does the director do about Cerro Pajaro?',
             ('Advises against it', 'Names the deadline and copies in their TAC chair',
              'Says it is full', 'Offers to apply jointly'), 1,
             'Five weeks and a copied chair is a practical handover rather than a '
             'suggestion.'),
            ('What is offered on discretionary time?',
             ('The original target', 'The secondary target at magnitude 19',
              'Queue-mode observing', 'Four nights of imaging'), 1,
             'It is well within the instrument and the director says the paper needs it '
             'first.'),
            ('What does the director prefer to avoid?',
             ('A joint proposal', 'The applicant waiting six months for a cycle',
              'Using discretionary time', 'Contacting another observatory'), 1,
             'That preference is his stated reason for using discretionary time rather than '
             'the normal route.'),
        ],
    ),

    r3=dict(
        sub='Reading deep time',
        title='How We Know the Age of Things We Cannot Watch',
        words=300,
        paras=[
            'That the Earth is four and a half billion years old is widely repeated and '
            'rarely explained, leaving most people with a number they could not defend. The '
            'method behind it is simpler than its reputation. Certain isotopes '
            'decay at a rate that does not depend on temperature, pressure or anything else '
            'we can do to them, so the proportion of parent to daughter isotope in a mineral '
            'records how long the mineral has existed. What makes the technique strong is not '
            'one measurement but that several independent decay systems, with half-lives '
            'differing by orders of magnitude, agree.',

            'It is tempting to treat that agreement as the end of the argument, and it is '
            'nearly but not quite. Every method rests on an assumption about the starting '
            'composition, and where that assumption fails the method fails with it. '
            'Geologists know this better than their critics, which is why the literature '
            'contains far more discussion of discordant dates than of concordant ones: a '
            'sample that disagrees with itself is interesting, and one that agrees is merely '
            'filed. Where the starting composition cannot be reconstructed, we simply do not '
            'know the age, and the convention is to say so.',

            'The deeper difficulty is not accuracy but comprehension. On any reasonable '
            'estimate our species has existed for about a ten-thousandth of the Earth’s span, '
            'and no amount of restating that ratio makes it available to intuition. '
            'Compressing the whole of it into one year, which turns out to be the only '
            'device that reliably works, puts the first animals in late November and '
            'recorded history in the last thirty seconds. The analogy is crude and nobody has '
            'improved on it, because the problem it solves is not ignorance of the number but '
            'the absence of anything in ordinary experience to compare it with.',
        ],
        skill=('Reading a passage about how a method is justified',
               ['The strength of a method is rarely one measurement. Look for the word '
                'independent.',
                'A good passage will name the assumption the method rests on, not hide it.',
                'When the last paragraph shifts from accuracy to understanding, the author '
                'is changing the subject deliberately.']),
        guided=[
            ('What does the proportion of parent to daughter isotope record?',
             ('The temperature', 'How long the mineral has existed',
              'The depth of burial', 'The original composition'), 1,
             'Decay proceeds at a fixed rate, so the ratio is a clock rather than a '
             'thermometer.'),
            ('What makes the technique strong?',
             ('One very precise measurement',
              'Several independent systems with very different half-lives agreeing',
              'International agreement', 'Repeated sampling'), 1,
             'The author is explicit that it is not any single measurement but the agreement '
             'of independent ones.'),
            ('What does every method rest on?',
             ('A constant decay rate only', 'An assumption about the starting composition',
              'Laboratory conditions', 'A calibration against the Sun'), 1,
             'The second paragraph names it and says the method fails wherever the assumption '
             'does.'),
            ('Why does the literature discuss discordant dates more?',
             ('They are more common', 'A disagreement is informative and an agreement is not',
              'They are easier to publish', 'Critics demand it'), 1,
             'A sample that disagrees across two systems is interesting; one that agrees is '
             'merely filed.'),
        ],
        exam=[
            ('What does the author say about the agreement between methods?',
             ('It settles the question completely', 'It is nearly but not quite the end of the argument',
              'It is coincidental', 'It is disputed'), 1,
             'The qualification is deliberate and introduces the assumption that could fail.'),
            ('What does the author say about geologists and their critics?',
             ('They disagree about decay rates', 'Geologists understand the weakness better than critics do',
              'Critics are usually right', 'Neither understands the assumption'), 1,
             'The volume of discussion of discordant dates is offered as the evidence for '
             'that claim.'),
            ('What is the ratio of human to Earth history, on the author’s estimate?',
             ('About a hundredth', 'About a ten-thousandth',
              'About a millionth', 'About a tenth'), 1,
             'That figure is given to set up the point about intuition rather than to be '
             'precise.'),
            ('What does the one-year analogy achieve?',
             ('Greater accuracy', 'Making the ratio available to intuition',
              'A simpler calculation', 'A better estimate of the age'), 1,
             'The author says the problem is not ignorance of the number but having nothing '
             'to compare it with.'),
            ('Why has nobody improved on the analogy?',
             ('It is traditional', 'The problem it solves is the absence of a comparison in ordinary experience',
              'It is accurate', 'Teachers prefer it'), 1,
             'The author calls it crude and still unimproved, and gives the reason in the '
             'final clause.'),
            ('What does the author mean by "a number they could not defend"?',
             ('The number is wrong', 'People know the figure but not the reasoning',
              'The number is disputed', 'The number keeps changing'), 1,
             'It sets up the whole passage, which supplies the reasoning rather than the '
             'figure.'),
            ('Which would most weaken the first paragraph?',
             ('A new estimate of the Earth’s age',
              'Evidence that decay rates vary with conditions',
              'A disagreement about half-lives', 'A discordant sample'), 1,
             'Independence from temperature and pressure is what makes the ratio a clock at '
             'all.'),
            ('All of the following are stated EXCEPT:',
             ('Decay rates are independent of conditions',
              'Several systems with different half-lives agree',
              'Discordant dates receive more discussion',
              'The one-year analogy is accurate as well as useful'), 3,
             'The author calls the analogy crude and defends it only as pedagogy.'),
            ('What is the shift between the second and third paragraphs?',
             ('From method to history', 'From whether the number is right to whether it can be grasped',
              'From geology to astronomy', 'From evidence to speculation'), 1,
             'The author names it as the deeper difficulty and calls it comprehension rather '
             'than accuracy.'),
        ],
    ),

    l1=dict(
        sub='Measuring what cannot be reached',
        caption='Two students at an open evening at the observatory',
        skill=('Hearing a chain of comparisons',
               ['When a speaker explains a distance or a size, they will build a chain: this '
                'is to that as that is to the other.',
                'Hold the chain, not the numbers. The items test the relationship.',
                'Listen for by a factor of, an order of magnitude, nowhere near.']),
        warm=[
            ('Man: How do you measure the distance to a star?',
             ('For the near ones, by parallax.', 'Yes, we can.',
              'About four light years.', 'With the big telescope.'), 0,
             'A how question answered with the method and a qualification about which cases '
             'it covers.'),
            ('Woman: Is magnitude the same as brightness?',
             ('As seen from here, yes — not as emitted.', 'Yes, exactly the same.',
              'About magnitude six.', 'In the spectrum.'), 0,
             'An is-it-the-same question answered by separating what we receive from what is '
             'emitted.'),
            ('Man: Can you see the expansion through the telescope?',
             ('Only in the spectra, not the image.', 'Yes, clearly.',
              'About thirteen billion years.', 'On a clear night.'), 0,
             'A can-you-see question answered with where the evidence actually appears.'),
        ],
        script=[
            ('Woman', 'Hold on — you said the star is brighter. Brighter than what?'),
            ('Man', 'Fair. Brighter as we see it. Magnitude is what arrives here, and it '
                    'depends on two things: what the star emits and how far away it is.'),
            ('Woman', 'So a dim nearby star and a brilliant distant one could look the same.'),
            ('Man', 'They do, constantly, and separating the two is most of the subject. For '
                    'the near ones you use parallax — the star shifts against the background '
                    'as the Earth moves, and the shift tells you the distance.'),
            ('Woman', 'And the far ones?'),
            ('Man', 'You find something whose true luminosity you already know, and compare. '
                    'That is what a standard candle is. The chain goes: parallax gives you '
                    'the near distances, the near distances calibrate the candles, and the '
                    'candles reach everything else.'),
            ('Woman', 'That sounds alarmingly like a tower of assumptions.'),
            ('Man', 'It is a tower, and that is the right worry to have. But each rung is '
                    'checked against the one below it over a range where both work, and the '
                    'overlap is where the errors would show up.'),
            ('Woman', 'And they do not?'),
            ('Man', 'They did, by about nine per cent, for most of the last century, and '
                    'sorting it out took two generations and a space telescope.'),
        ],
        items=[
            ('What does magnitude depend on?',
             ('Emission only', 'What the star emits and how far away it is',
              'Distance only', 'The telescope used'), 1,
             'He is explicit that it is what arrives here, which combines both quantities.'),
            ('What is the problem the woman identifies?',
             ('Telescopes are too small', 'A dim near star and a bright far one look the same',
              'Parallax is unreliable', 'Spectra are hard to read'), 1,
             'He confirms it happens constantly and calls separating the two most of the '
             'subject.'),
            ('How is parallax used?',
             ('By comparing spectra', 'The star shifts against the background as the Earth moves',
              'By measuring brightness', 'By timing an eclipse'), 1,
             'The size of that apparent shift is what yields the distance for nearby stars.'),
            ('What is a standard candle?',
             ('A very bright star', 'An object whose true luminosity is already known',
              'A calibration lamp', 'A nearby galaxy'), 1,
             'Knowing the true output lets you turn the observed brightness into a distance.'),
            ('What is the order of the chain he describes?',
             ('Candles, then parallax, then near distances',
              'Parallax, then near distances, then candles',
              'Spectra, then parallax, then candles',
              'Candles only'), 1,
             'Each rung is calibrated by the one below it, which is why he gives it as a '
             'sequence.'),
            ('How does he answer the "tower of assumptions" worry?',
             ('He dismisses it', 'He accepts it and explains how the rungs are checked',
              'He says the tower is short', 'He changes the subject'), 1,
             'He calls it the right worry and then describes the overlap where errors would '
             'appear.'),
            ('What happened with the nine per cent discrepancy?',
             ('It was ignored', 'It took two generations and a space telescope to resolve',
              'It was never resolved', 'It was a calculation error'), 1,
             'He offers it as evidence that the checking works rather than as an '
             'embarrassment.'),
        ],
    ),

    l2=dict(
        sub='An expanding universe',
        caption='A briefing at an observatory open evening',
        poster=['Open evening · dome tours every twenty minutes',
                'Talk: what the expansion is not',
                'Queue-mode nights: no charge'],
        skill=('Hearing an analogy dismantled',
               ['A speaker who uses an analogy will usually say where it fails. That '
                'boundary is the examinable part.',
                'Listen for: the analogy breaks down when, what this does not give you, do '
                'not push it further than.',
                'An item about the analogy will test its limit, not its content.']),
        warm=[
            ('Woman: Where was the centre of the Big Bang?',
             ('There was no centre — that is the misunderstanding.', 'Yes, there was one.',
              'About fourteen billion years ago.', 'In the spectra.'), 0,
             'A where question answered by rejecting the premise that makes it askable.'),
            ('Man: Are galaxies flying apart through space?',
             ('Space is expanding between them.', 'Yes, very fast.',
              'About two million light years.', 'With the big telescope.'), 0,
             'An are-they question answered by correcting the geometry rather than the '
             'speed.'),
            ('Woman: Does the rubber sheet explain why it expands?',
             ('No — that is exactly what it leaves out.', 'Yes, completely.',
              'About a metre across.', 'It is a good analogy.'), 0,
             'A does-it-explain question answered with the boundary of the analogy.'),
        ],
        script=[
            ('Man', 'The expansion of the universe is the finding everybody has heard and '
                    'almost nobody has been given correctly, so let me spend the time on what '
                    'it is not. It is not an explosion with galaxies flying outward through '
                    'space. On that picture there has to be a centre, and the first question '
                    'every one of you wants to ask is where the centre was. There is no '
                    'centre. Space itself is expanding, and the galaxies are being carried '
                    'rather than travelling. The standard analogy is two marks on a sheet of '
                    'rubber that is being stretched: the marks get further apart and neither '
                    'has moved across the sheet. That is a good analogy and I want to tell '
                    'you precisely where it breaks down, because an analogy you cannot '
                    'puncture is a liability. The sheet has an edge and a centre. The '
                    'universe, as far as we can tell, has neither. The sheet is being '
                    'stretched by something outside it, and there is no outside here. And the '
                    'sheet gives you no reason at all for the stretching — which matters, '
                    'because that is the part we actually do not know. The expansion is '
                    'accelerating, we have known that for thirty years, and the honest '
                    'position on why is that we simply do not know. Pushing the rubber sheet '
                    'into that gap gives you a feeling of explanation and no explanation.'),
        ],
        items=[
            ('What does the explosion picture require that is wrong?',
             ('A very high speed', 'A centre', 'An edge', 'A fixed age'), 1,
             'He says the first question everybody then asks is where the centre was, and '
             'there is none.'),
            ('What is actually expanding?',
             ('The galaxies', 'Space itself', 'The light', 'The observable region only'), 1,
             'The galaxies are carried rather than travelling, which is the correction he is '
             'making.'),
            ('Why does he want the analogy punctured?',
             ('It is unpopular', 'An analogy you cannot puncture is a liability',
              'It is out of date', 'Students prefer numbers'), 1,
             'He treats naming the limits as part of teaching the analogy at all.'),
            ('Which feature does the sheet have that the universe does not?',
             ('Two dimensions only', 'An edge and a centre',
              'A measurable size', 'A fixed shape'), 1,
             'He lists both, along with being stretched by something outside it.'),
            ('What does the analogy fail to supply?',
             ('The rate of expansion', 'A reason for the stretching',
              'The direction of motion', 'The age of the universe'), 1,
             'He says that is the part we actually do not know, which is why the gap '
             'matters.'),
            ('What is his warning about using the analogy there?',
             ('It is too simple', 'It gives a feeling of explanation and no explanation',
              'It is mathematically wrong', 'Students find it confusing'), 1,
             'That is his closing line and the point of the whole briefing.'),
        ],
    ),

    l3=dict(
        sub='Reading deep time',
        caption='A lecture on dating the Earth',
        board=['Decay rate: independent of conditions',
               'Strength = independent systems agreeing',
               'Weak point: starting composition',
               'Comprehension, not accuracy, is the problem'],
        skill=('Following a talk that defends a method',
               ['A defence of a method states the strongest objection to it before '
                'answering.',
                'Listen for the word independent and for the phrase that names the '
                'assumption.',
                'The final section often changes the question from is it right to can it be '
                'understood.']),
        warm=[
            ('Man: How do we know the Earth is that old?',
             ('Several independent clocks agree.', 'Yes, it is very old.',
              'About four billion years.', 'From the rocks.'), 0,
             'A how-do-we-know question wants the structure of the evidence, not the figure.'),
            ('Woman: Could the decay rate have changed?',
             ('Nothing we can do to a sample changes it.', 'Yes, possibly.',
              'About a billion years.', 'In the laboratory.'), 0,
             'A could-it question answered with the experimental fact that constrains the '
             'answer.'),
            ('Man: What is the weakest part of the method?',
             ('The assumption about the starting mixture.', 'There is no weak part.',
              'About two systems.', 'The laboratory equipment.'), 0,
             'A what-is-weakest question answered with the assumption rather than a '
             'reassurance.'),
        ],
        script=[
            ('Woman', 'I am going to defend a number, and defending a number is more '
                      'interesting than stating one. The Earth is about four and a half '
                      'billion years old. Here is why that is not a guess. Certain isotopes '
                      'decay at a rate that is, as far as any experiment has been able to '
                      'establish, completely indifferent to temperature, pressure, chemistry '
                      'and anything else we can do to a sample. So the ratio of parent to '
                      'daughter isotope in a mineral is a clock. Now, one clock proves very '
                      'little. What makes this strong is that there are several of them, '
                      'using different elements, with half-lives differing by orders of '
                      'magnitude, and they agree. An error in one would have to be matched by '
                      'an error of exactly the right size in the others, which is not how '
                      'errors behave. Then the honest part. Every one of these clocks assumes '
                      'something about the starting composition of the sample, and where that '
                      'assumption is wrong, the date is wrong. We know this because we spend '
                      'most of our time on samples that disagree with themselves. A '
                      'concordant date gets filed. A discordant one gets a paper. And finally '
                      'the thing that is not a scientific problem at all. On any reasonable '
                      'estimate our species has been here for about a ten-thousandth of that '
                      'span, and I have never met anybody, myself included, who can hold the '
                      'ratio in mind. Compress the whole thing into a year and recorded '
                      'history is the last thirty seconds. That device is crude, it turns out '
                      'to be the only one that works, and nobody has improved on it in a '
                      'century.'),
        ],
        items=[
            ('What is she setting out to do?',
             ('State a number', 'Defend a number',
              'Correct a number', 'Compare two numbers'), 1,
             'She opens by saying defending a number is more interesting than stating one.'),
            ('What is the decay rate indifferent to?',
             ('Time', 'Temperature, pressure and chemistry',
              'The element involved', 'The size of the sample'), 1,
             'That independence is what makes the parent-to-daughter ratio a clock.'),
            ('Why does she say one clock proves very little?',
             ('It is imprecise', 'The strength comes from several independent ones agreeing',
              'Clocks are expensive', 'Half-lives are uncertain'), 1,
             'An error in one would need matching errors of exactly the right size in the '
             'others.'),
            ('What does every clock assume?',
             ('A constant rate only', 'Something about the starting composition',
              'A closed system forever', 'A known age'), 1,
             'She calls this the honest part and says the date is wrong wherever the '
             'assumption is.'),
            ('What happens to a concordant date?',
             ('It gets a paper', 'It gets filed', 'It is rechecked', 'It is published widely'), 1,
             'A discordant one gets a paper, which is her evidence that the field '
             'concentrates on its own weak points.'),
            ('What does she call the ten-thousandth problem?',
             ('A scientific problem', 'Not a scientific problem at all',
              'A measurement error', 'A dating difficulty'), 1,
             'She shifts deliberately from whether the number is right to whether it can be '
             'held in mind.'),
            ('What is her view of the one-year compression?',
             ('It is elegant', 'It is crude and the only device that works',
              'It should be replaced', 'It is misleading'), 1,
             'She says nobody has improved on it in a century, while still calling it '
             'crude.'),
        ],
    ),

    sp=[
        dict(
            sub='Measuring what cannot be reached',
            focus='comparing quantities out loud',
            skill=('Saying how much more',
                   ['Comparison needs a stress pattern: twice as BRIGHT as, an order of '
                    'magnitude FURTHER.',
                    'By a factor of ten and ten times are the same thing; the first is more '
                    'formal.',
                    'Nowhere near takes the stress on near, and it is stronger than not '
                    'close.']),
            repeat=[
                'Magnitude is what arrives here.',
                'Luminosity is what the star emits.',
                'A dim near star and a bright far one look the same.',
                'Parallax gives the near distances and calibrates everything else.',
                'The far galaxies are an order of magnitude beyond anything parallax can reach.',
                'Each rung of the ladder is checked against the one below it.',
                'For most of the last century the two methods disagreed by about nine per cent, and sorting that out took two generations and a space telescope.',
            ],
            theme='scale, instruments and what can be measured',
            qs=[
                'Thanks for joining me. To start, have you ever looked through a telescope? '
                'What did you expect to see?',
                'Astronomy cannot run experiments. Does that make it less reliable than '
                'chemistry?',
                'Now your opinion. Is money spent on telescopes well spent? Why or why not?',
                'A final question. Does knowing the scale of the universe change how you '
                'think about anything on it?',
            ],
            model=[(2, 'Differently reliable rather than less. It cannot intervene, so it '
                       'compensates with independent methods that have to agree, and that is '
                       'a real constraint, not a weaker one.'),
                   (4, 'Honestly, no, and I think the people who say it does are performing. '
                       'What it changes is which questions feel worth asking.')],
            selfcheck=['I stressed the adjective in each comparison.',
                       'I used by a factor of or an order of magnitude correctly.',
                       'I did not say nowhere near when I meant not quite.'],
        ),
        dict(
            sub='An expanding universe',
            focus='correcting a misunderstanding politely',
            skill=('Saying that something is not the case',
                   ['Correcting a belief needs the belief stated first: the usual picture is, '
                    'and it gets the geometry wrong.',
                    'Keep the correction short and the reason long. The reverse sounds '
                    'dismissive.',
                    'Drop your pitch on the belief and raise it on the correction.']),
            repeat=[
                'The usual picture is an explosion.',
                'On that picture there has to be a centre.',
                'There is no centre, and that is the whole correction.',
                'Space itself is expanding and the galaxies are being carried.',
                'Two marks on a stretching sheet get further apart without moving across it.',
                'The analogy breaks down because the sheet has an edge and an outside.',
                'It gives no reason for the stretching at all, which matters, because the reason is exactly the part nobody knows.',
            ],
            theme='explanations, analogies and what they hide',
            qs=[
                'Thank you for your time. First, was there something you believed for years '
                'and then found out was wrong?',
                'Analogies make things easy to picture and easy to misunderstand. Is that '
                'trade worth making?',
                'Now an opinion question. Should science writing use analogies at all, or '
                'insist on the real thing?',
                'One last question. Is it a problem when scientists say they do not know?',
            ],
            model=[(2, 'Worth making, as long as the limit comes with it. An analogy without '
                       'its boundary is not a simplification, it is a different claim.'),
                   (4, 'It is only a problem for people who wanted an oracle. Saying we do '
                       'not know why the expansion is accelerating is the most informative '
                       'sentence in the field.')],
            selfcheck=['I stated the belief before correcting it.',
                       'I kept the correction short and the reason long.',
                       'I did not sound dismissive.'],
        ),
        dict(
            sub='Reading deep time',
            focus='defending a figure rather than asserting it',
            skill=('Giving the structure of your evidence',
                   ['Say how many independent sources agree before you say what they say.',
                    'Name the weakest assumption yourself. A listener who finds it after you '
                    'have hidden it stops believing the rest.',
                    'Mark the move from evidence to interpretation out loud.']),
            repeat=[
                'The decay rate does not depend on conditions.',
                'The ratio of parent to daughter is therefore a clock.',
                'One clock on its own proves very little.',
                'Several clocks with very different half-lives agree.',
                'An error in one would need matching errors in all the others.',
                'Every clock assumes something about the starting composition.',
                'We know that assumption is the weak point because most of our time goes on samples that disagree with themselves.',
            ],
            theme='evidence, deep time and the limits of intuition',
            qs=[
                'Thanks for taking part. To begin, how old did you think the Earth was before '
                'you were taught it?',
                'Numbers that large stop meaning anything. Does that matter, if the science is '
                'right?',
                'Now your opinion. Should schools spend time on how we know things, rather '
                'than on what we know? Why?',
                'And finally. Is there any value in a crude analogy that works, compared with '
                'a precise one that does not?',
            ],
            model=[(2, 'It matters for anything that needs public support, because a number '
                       'nobody can feel is a number nobody will act on. For the science '
                       'itself it changes nothing.'),
                   (4, 'The crude one wins every time. A precise explanation that leaves the '
                       'listener with nothing has transmitted no information, however correct '
                       'it was.')],
            selfcheck=['I gave the structure of the evidence before the conclusion.',
                       'I named the weakest assumption myself.',
                       'I marked where interpretation began.'],
        ),
    ],

    w1=dict(
        sub='Questions about measurement',
        skill=('Build a Sentence with a comparison',
               ['The two non-question items in this unit build comparisons: twice as … as, '
                'the more … the more, by far the.',
                'The more … the more needs both halves and no commas inside either.',
                'By far goes immediately before the superlative, never after it.']),
        guided=[
            ('The target is magnitude 23.',
             ['know', 'do', 'you', 'whether', 'that', 'is', 'reach', 'to', 'possible'],
             'Do you know whether that is possible to reach?'),
            ('Two methods disagreed for most of the last century.',
             ['to know', 'nobody', 'seems', 'how', 'the gap', 'was', 'in the end', 'closed', 'actually'],
             'Nobody seems to know how the gap was actually closed in the end.'),
            ('My supervisor asked about the calibration chain.',
             ['she', 'whether', 'to know', 'wanted', 'I', 'had', 'the rungs', 'checked', 'myself'],
             'She wanted to know whether I had checked the rungs myself.'),
        ],
        exam=[
            ('The expansion is accelerating.',
             ['do', 'whether', 'know', 'you', 'anybody', 'knows', 'why', 'that', 'happening', 'is'],
             'Do you know whether anybody knows why that is happening?'),
            ('There is no centre to the expansion.',
             ['explain', 'can', 'anybody', 'why', 'the question', 'to me', 'is', 'meaningless', 'then'],
             'Can anybody explain to me why the question is meaningless then?'),
            ('Discretionary time is limited to four nights.',
             ['know', 'does', 'anybody', 'how', 'those', 'nights', 'allocated', 'are', 'actually'],
             'Does anybody know how those nights are actually allocated?'),
            ('The secondary target is within reach of this telescope.',
             ['us', 'told', 'nobody', 'which', 'target', 'the paper', 'needs', 'first', 'actually'],
             'Nobody told us which target the paper actually needs first.'),
            ('The samples disagreed with each other.',
             ['told', 'he', 'me', 'what', 'a discordant', 'date', 'usually', 'about', 'means'],
             'He told me what a discordant date usually means.'),
            ('A standard candle is further away than any parallax target.',
             ['by far', 'a standard', 'candle', 'is', 'the', 'reliable', 'most', 'distance', 'marker'],
             'By far the most reliable distance marker is a standard candle.'),
            ('Each extra independent method strengthens the result.',
             ['the more', 'methods', 'agree', 'the harder', 'the result', 'is', 'to', 'away', 'explain'],
             'The more methods agree, the harder the result is to explain away.'),
        ],
    ),

    w2=dict(
        sub='An expanding universe',
        to='allocations@maunahale.org',
        date='16/03/2028',
        subject='Proposal 2028-114 — accepting the discretionary offer, with one change',
        scenario=[
            'The director has declined your main target as beyond the telescope, offered your '
            'secondary target on discretionary time, and pointed you to a larger facility '
            'whose deadline is in five weeks. You want to accept the discretionary offer, but '
            'you need the observation in April rather than whenever it is convenient, because '
            'the object is only above the horizon until early May.',
            'Write an email to the allocations office.',
        ],
        bullets=['Accept clearly and say what you are accepting.',
                 'Explain the timing constraint as a fact about the object, not a preference.',
                 'Say what you will do if the constraint cannot be met.'],
        skill=('Accepting an offer while changing one term',
               ['Accept first and unambiguously. An acceptance with a condition buried in it '
                'reads as a refusal.',
                'Make the constraint belong to the world, not to you: the object sets the '
                'window, you do not.',
                'Name your fallback. It shows the request is not an ultimatum.']),
        model=[
            'Dear Dr Oyinlola,',
            '',
            'Thank you — I accept the discretionary offer on the secondary target, and you '
            'were right that it is the one the paper needs first. I have also written to '
            'Cerro Pajaro for the faint target and their deadline is manageable.',
            '',
            'One thing I should have put in the proposal. The object sets its own window: it '
            'is above thirty degrees at this site until roughly the fifth of May and then not '
            'again for eleven months. So April is not a preference, and a date in June would '
            'be the same as no date.',
            '',
            'I realise discretionary time is awkward to schedule and that this narrows it. If '
            'April is not possible, I would rather take a queue-mode slot on a poor-seeing '
            'night in April than a guaranteed night later — the measurement tolerates bad '
            'seeing far better than it tolerates the wrong month.',
            '',
            'Either way I am grateful, and I will send you the reduced spectra whether or not '
            'they end up in the paper.',
            '',
            'With thanks,',
            'Jacopo Benedetti',
        ],
        notes=['The acceptance comes first and names what is being accepted, so nothing has '
               'to be inferred.',
               'The constraint is attributed to the object and quantified, which makes it a '
               'fact rather than a request.',
               'The writer volunteers a worse but acceptable alternative, which converts a '
               'condition into a choice for the reader.',
               'The closing offer is small and unconditional, so it does not read as '
               'leverage.'],
        bandpair=dict(
            mid=[
                'Dear Dr Oyinlola,',
                'Thank you very much for your email and for the offer of discretionary time '
                'on the secondary target. I am very happy to accept this and I appreciate you '
                'taking the time to look at the proposal in such detail.',
                'There is one issue I need to mention. Unfortunately the object is only '
                'visible for a limited period and after that it will not be visible again for '
                'a long time. This means that it would be much better for me if the '
                'observation could take place in April if that is at all possible.',
                'I understand that discretionary time is difficult to schedule and I do not '
                'want to cause problems. Please let me know whether April would be feasible, '
                'and if not, what the options might be. I am happy to be flexible.',
                'Thank you again for all your help with this. Best wishes, Jacopo Benedetti',
            ],
            top=[
                'Dear Dr Oyinlola,',
                'Thank you — I accept the discretionary offer on the secondary target, and '
                'you were right that it is the one the paper needs first. I have written to '
                'Cerro Pajaro for the faint target.',
                'One thing I should have put in the proposal. The object sets its own window: '
                'it is above thirty degrees here until roughly the fifth of May and then not '
                'again for eleven months. April is not a preference, and a date in June would '
                'be the same as no date.',
                'I realise this narrows an already awkward schedule. If April is not '
                'possible, I would rather take a queue-mode slot on a poor-seeing night in '
                'April than a guaranteed night later: the measurement tolerates bad seeing '
                'far better than the wrong month.',
                'Either way I am grateful, and I will send the reduced spectra whether or not '
                'they reach the paper. Jacopo Benedetti',
            ],
            diffs=[
                'It quantifies the window — thirty degrees, the fifth of May, eleven months — '
                'instead of calling it a limited period.',
                'It attributes the constraint to the object, so the reader is not being asked '
                'to accommodate a preference.',
                'It names a specific worse alternative rather than saying it is happy to be '
                'flexible, which gives the scheduler something to act on.',
                'It states the trade-off underlying that alternative in one clause: bad '
                'seeing costs less than the wrong month.',
                'It closes with an unconditional offer, so the goodwill is not contingent on '
                'getting April.',
            ],
        ),
    ),

    w3=dict(
        sub='Reading deep time',
        prof='Dr Lindqvist',
        question='Public understanding of deep time is poor, and the devices that work best — '
                 'compressing four and a half billion years into a single calendar year, for '
                 'instance — are admitted by their users to be crude. Some argue that science '
                 'communication should abandon such analogies and teach the reasoning '
                 'instead, since an analogy that misleads is worse than a number nobody '
                 'grasps. Others argue that a figure which cannot be imagined has no effect '
                 'on anybody, and that a crude device which works is the only thing that does '
                 'any good. Which position is better founded?',
        posts=[('Adaeze', 'w',
                'Teach the reasoning. The calendar year leaves people with a picture and no '
                'method, and a picture is exactly what gets replaced by the next vivid '
                'picture somebody shows them. Method is what survives contact with a bad '
                'argument.'),
               ('Matthias', 'm',
                'Adaeze is describing an audience that does not exist. Nobody absorbs a '
                'method from a museum panel. The calendar year is the only part of this '
                'subject that anybody remembers a decade later, and a thing remembered '
                'imperfectly beats a thing not learned at all.')],
        skill=('Answering a false alternative',
               ['When two positions assume you must choose, check whether the choice is '
                'real.',
                'Show what each is actually right about, then name the thing neither has '
                'addressed.',
                'A good answer ends with the condition under which both are satisfied.']),
        starters=['Both posts assume a choice that the evidence does not force.',
                  'Adaeze is right about…, though her claim about…',
                  'Matthias is right that…, and that concedes more than he notices.',
                  'What neither addresses is…'],
        model=[
            'Both posts assume a choice that the evidence does not force, and the assumption '
            'is doing more work than either argument. Adaeze is right that a picture gets '
            'displaced by the next picture, and this is a real failure mode rather than a '
            'hypothetical one. But her alternative is not method against image; it is method '
            'against nothing, because the audience that would absorb the reasoning from a '
            'panel is not the audience the panel has.',
            'Matthias is right that the calendar year is what people retain, and that '
            'concedes more than he notices. If retention is the test, it is a test the '
            'analogy passes and the reasoning has never been given a fair chance to sit, '
            'because nobody has tried presenting the reasoning in a form with the same '
            'retention properties. His argument is evidence about one delivery format, not '
            'about method as such.',
            'What neither addresses is that the two things fail differently. An analogy fails '
            'by being replaced, and a method fails by being forgotten wholesale, which means '
            'the right combination is not a compromise between them but a division of labour: '
            'the analogy carries the scale, and one line of method — several independent '
            'clocks, built on different elements, agreeing — carries the authority. That line '
            'is short enough for a panel and it is the part that defends the number when '
            'somebody vivid turns up to dispute it.',
            'So the defensible position is Matthias on the device and Adaeze on what has to '
            'travel with it. The analogy without the independence claim is a story; the '
            'independence claim without the analogy is unread.',
        ],
        model_words=269,
    ),

    gram=dict(
        title='Degree and comparison',
        headers=['Form', 'How it is used'],
        rows=[
            ('twice / three times as … as', 'twice as bright as the companion star'),
            ('by a factor of', 'the exposure is longer by a factor of five'),
            ('an order of magnitude', 'ten times, roughly: an order of magnitude further'),
            ('by far the + superlative', 'by far the most reliable marker'),
            ('the more … the more', 'the more methods agree, the harder it is to dismiss'),
            ('nowhere near / not nearly', 'nowhere near the required signal'),
            ('on the order of / roughly / some', 'on the order of thirty hours'),
        ],
        notes=[
            'The more … the more needs both halves, and neither half takes a that: the more '
            'methods agree, the harder it becomes. The more that methods agree is wrong.',
            'By far modifies a superlative and goes in front of it: by far the most reliable. '
            'The most reliable by far is possible at the end of a clause, but never in the '
            'middle.',
            'Twice as … as takes the positive form, not the comparative: twice as bright as, '
            'never twice as brighter as. This is one of the most frequent B2 errors in '
            'writing about data.',
        ],
        watch='Do not write "more brighter" or "twice as brighter". A comparative is marked '
              'once — either with -er or with more, and never with both, and never after '
              'twice as.',
        ex=[
            ('Choose the correct degree expression.',
             ['The star is twice as ______ as its companion.',
              'The exposure is longer ______ a factor of five.',
              'Parallax is ______ near far enough for this target.',
              'The galaxy is an ______ of magnitude further away.',
              'That is ______ far the most reliable method.',
              'The exposure would be ______ the order of thirty hours.'],
             ['bright', 'by', 'nowhere', 'order', 'by', 'on']),
            ('Correct the comparison.',
             ['The star is twice as brighter as the other.',
              'This method is more reliabler than that one.',
              'The more that methods agree, the better.',
              'It is the most accurate by far method.'],
             ['The star is twice as bright as the other.',
              'This method is more reliable than that one.',
              'The more methods agree, the better.',
              'It is by far the most accurate method.']),
            ('Rewrite using the more … the more.',
             ['If you add methods, the result becomes harder to dismiss.',
              'If the half-lives differ more, the agreement means more.',
              'If an analogy is more vivid, it is more easily replaced.',
              'If the exposure is longer, the signal-to-noise is better.'],
             ['The more methods you add, the harder the result is to dismiss.',
              'The more the half-lives differ, the more the agreement means.',
              'The more vivid an analogy is, the more easily it is replaced.',
              'The longer the exposure, the better the signal-to-noise.']),
        ],
        bas='Two of the ten Build a Sentence items in this unit are comparisons rather than '
            'questions. A tile reading by far sits in front of the superlative, and a tile '
            'reading the more opens one half of a two-part structure that needs both halves.',
    ),

    fault=dict(
        text='The target is twice as brighter as the companion. The more that methods agree, '
             'the stronger the result. It is the most reliable by far method we have. Nobody '
             'knows whether was the exposure long enough. Having calibrated the ladder, the '
             'distances were finally reliable.',
        faults=[
            ('twice as brighter as', 'twice as bright as',
             'Twice as takes the positive form, so the comparative ending is one marker too '
             'many.'),
            ('The more that methods agree', 'The more methods agree',
             'Neither half of the more … the more takes a that after it.'),
            ('the most reliable by far method', 'by far the most reliable method',
             'By far goes in front of the superlative when the phrase sits inside a clause.'),
            ('whether was the exposure long enough', 'whether the exposure was long enough',
             'An embedded question keeps statement order and does not invert the verb.'),
            ('Having calibrated the ladder, the distances were finally reliable',
             'Having calibrated the ladder, the team could finally rely on the distances',
             'The distances did not calibrate anything; the participle needs a subject that '
             'performed the action.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('how much light a body actually emits', 'luminosity'),
            ('the measurement of how bright a source appears', 'photometry'),
            ('the stretching of light from a receding source', 'redshift'),
            ('apparent shift of a near object against a far background', 'parallax'),
            ('light separated into its component wavelengths', 'spectrum'),
            ('a cloud of gas and dust in space', 'nebula'),
            ('the path a body follows', 'trajectory'),
            ('to do with the Earth', 'terrestrial'),
            ('to do with the universe as a whole', 'cosmic'),
            ('a form of an element with a different atomic mass', 'isotope'),
            ('setting an instrument against a known standard', 'calibration'),
            ('to extend a pattern beyond the measured range', 'extrapolate'),
        ],
        gram=[
            ('The star is twice as ______ as its companion.', 'bright'),
            ('The exposure is longer ______ a factor of five.', 'by'),
            ('Parallax is ______ near far enough for this target.', 'nowhere'),
            ('That is ______ far the most reliable method.', 'by'),
            ('The ______ methods agree, the stronger the result.', 'more'),
            ('The exposure would be ______ the order of thirty hours.', 'on'),
            ('The galaxy is an order of ______ further away.', 'magnitude'),
            ('To a first ______, the two agree.', 'approximation'),
        ],
        mini=[
            ('Magnitude describes',
             ('what a star emits', 'how bright a star appears from here',
              'the distance to a star', 'the age of a star'), 1,
             'Luminosity is what is emitted, and magnitude combines that with distance.'),
            ('The expansion of the universe means that',
             ('galaxies travel outward from a centre', 'space itself is expanding',
              'light slows down', 'the universe has an edge'), 1,
             'Galaxies are carried by the expansion rather than moving through space, which '
             'is why there is no centre.'),
            ('Radiometric dating is strong mainly because',
             ('one measurement is very precise',
              'several independent systems with different half-lives agree',
              'decay is fast', 'samples are plentiful'), 1,
             'An error in one clock would require matching errors of the right size in all '
             'the others.'),
            ('Which sentence is correct?',
             ('The more that methods agree, the better.',
              'The more methods agree, the better.',
              'More methods agree, more better.',
              'The more methods agree, the more better.'), 1,
             'Neither half of the structure takes that, and better is already a '
             'comparative.'),
            ('"We simply do not know" in academic writing signals that the writer',
             ('is being modest', 'is marking a genuinely open question',
              'disagrees with the field', 'has not read the literature'), 1,
             'It states the absence of an answer rather than hedging a claim the writer '
             'holds.'),
            ('An analogy should be taught together with',
             ('a diagram', 'the point at which it breaks down',
               'its history', 'a precise number'), 1,
             'An analogy whose limits are not given is a different claim rather than a '
             'simplification.'),
        ],
    ),

    tip='The comparison structures in this unit are the ones examiners notice. Twice as '
        'bright as, by far the most, the more … the more: each is marked once and marked in '
        'one place. If you can produce all three without hesitating, your writing has '
        'crossed a visible line.',
)


# ---------------------------------------------------------------------------
# The two academic cycles, added by the Volumes 3-6 work.
#
# Unit 32 gains its two academic cycles. Cycle 4 sets out the distance
# ladder as a chain in which geometry calibrates the cepheid scale and
# the cepheid scale calibrates the supernova scale, so that no
# cosmological distance is ever measured directly and the age of the
# universe is the output of a chain rather than a reading. Cycle 5 asks
# what a chain does to a number: random error shrinks with data and
# systematic error propagates upward unchanged, the rungs are not
# independent, and the test worth carrying away is to ask which
# assumptions two disagreeing methods have in common.
# ---------------------------------------------------------------------------
UNIT['fieldwords'] = [('depend', 'to rest on something else for its value or truth'),
 ('independent', 'not resting on the same assumptions as another method'),
 ('differing', 'not in agreement with each other'),
 ('tempting', 'attractive although probably mistaken'),
 ('composition', 'what something is made of'),
 ('critics', 'those who argue against a position'),
 ('cepheid', 'a star whose brightness rises and falls on a fixed cycle'),
 ('supernova', 'the explosion of a dying star, briefly very bright'),
 ('luminous', 'giving out a great deal of light'),
 ('discrepancy', 'a difference between two results that should agree'),
 ('propagate', 'to pass onward through a chain'),
 ('correlated', 'moving together, so not fully separate')]
UNIT['r4'] = {'sub': 'Measuring what cannot be reached',
 'title': 'The Ladder Nobody Can Climb Twice',
 'words': 334,
 'skill': ('Reading a method built in stages',
           ['The passage describes a chain in which each stage is set by the one below it. '
            'Keep the order of the stages.',
            'Note what each stage can and cannot reach, because that is why the next one is '
            'needed.',
            'A question about calibration wants what sets the scale, not what is measured.']),
 'paras': ['No cosmological distance has ever been measured directly, and the figures quoted '
           'for the dimensions and age of the universe come instead from a chain of methods '
           'in which each one is set by the method below it. The first stage is geometry, '
           'and its calibration depends on nothing but trigonometry. A nearby star shifts '
           'against the background as the earth moves from one side of its orbit to the '
           'other, and that shift gives the distance outright. The method is exact and it '
           'runs out quickly, because the shift becomes unmeasurable at distances that are '
           'tiny on a cosmological scale, so geometry alone reaches a few thousand stars and '
           'no galaxy at all.',
           'The second stage borrows its calibration from the first. Among the stars whose '
           'distances geometry has already given are cepheid variables, whose brightness '
           'rises and falls on a cycle, and the length of that cycle predicts the star’s '
           'true luminosity. A comparison of the true brightness with the brightness '
           'arriving here gives the distance, so cepheids carry the scale out to nearby '
           'galaxies. In those galaxies a third stage begins. Some of them have been seen to '
           'produce a particular kind of supernova, visible across most of the observable '
           'universe and of sufficient uniformity in brightness to be used the same way. '
           'Each rung takes its calibration from the rung beneath it, and the whole ladder '
           'is anchored on the calibration of the geometry at the bottom.',
           'The age of the universe follows from the top of this ladder together with the '
           'rate of recession observed in distant galaxies, and that is why the figure has a '
           'history of revision rather than a date of discovery, and every revision has been '
           'a revision of the calibration rather than of the observations. It is tempting to '
           'treat the result as a measurement of the kind a ruler gives. It is the output of '
           'a chain, and a chain has properties of its own, which is the subject of the next '
           'passage.'],
 'guided': [('What is the only stage that depends on nothing but trigonometry?',
             ('The cepheid stage', 'Geometry', 'The supernova stage', 'The recession rate'),
             1,
             'Geometry is named as the stage that rests on nothing but trigonometry.'),
            ('Why does geometry run out?',
             ('The stars are too faint',
              'The apparent shift becomes too small to measure',
              'The earth moves too slowly',
              'Cepheids interfere with it'),
             1,
             'At cosmological distances the shift cannot be measured, so the method stops.'),
            ('What does the length of a cepheid’s cycle predict?',
             ('Its composition',
              'How luminous the star really is',
              'Its distance directly',
              'Its age'),
             1,
             'The cycle length gives the true brightness, and that gives the distance.')],
 'exam': [('How do cepheids give a distance?',
           ('By their colour',
            'By comparing the true brightness with the brightness that reaches us',
            'By trigonometry',
            'By their recession rate'),
           1,
           'True brightness against observed brightness is the step the passage describes.'),
          ('Why is that particular kind of supernova useful?',
           ('It is common',
            'It is bright enough to be seen far away and uniform enough in true brightness',
            'It occurs only in nearby galaxies',
            'Its cycle can be timed'),
           1,
           'Both properties are needed, and the passage gives both.'),
          ('What is the whole ladder anchored on?',
           ('The recession rate',
            'The geometry at the bottom',
            'Supernovae',
            'The age of the universe'),
           1,
           'Each rung is calibrated by the one beneath it, and geometry is at the bottom.'),
          ('Why does the age of the universe have a history of revision?',
           ('The universe is changing',
            'It follows from the top of the ladder and the recession rate',
            'Astronomers disagree about geometry',
            'Supernovae were discovered late'),
           1,
           'A figure that depends on a whole chain moves whenever any part of the chain '
           'moves.'),
          ('The word anchored in paragraph 2 is closest in meaning to',
           ('hidden', 'held in place', 'measured', 'calculated'),
           1,
           'The ladder is held in place by the geometry at its base.')]}
UNIT['r5'] = {'sub': 'What a chain does to a number',
 'title': 'What a Chain Does to a Number',
 'words': 338,
 'skill': ('Reading about error rather than about findings',
           ['The passage is about the behaviour of a chain, so note what it says happens to '
            'an error at one rung.',
            'Two kinds of error are distinguished and they behave differently. Keep them '
            'apart.',
            'A question about the disagreement wants why it is interesting, not who is '
            'right.']),
 'paras': ['A quantity obtained from a chain carries the uncertainty of every connection, '
           'and the two kinds of error do not behave alike. Random error shrinks as '
           'observations accumulate, which is why the measurement of a thousand cepheids is '
           'better than the measurement of ten. Systematic error does nothing of the kind: '
           'if the geometry at the bottom of the ladder is out by two per cent, every '
           'distance above it is out by two per cent, and no accumulation of further '
           'observations at the upper rungs will reveal it. Such an error does not average '
           'away: it propagates upward unchanged, and the published uncertainty on a '
           'cosmological figure is largely an estimation of how large the systematic errors '
           'might be, which is a judgement rather than a measurement.',
           'The rungs are also less independent than the ladder image suggests. The '
           'supernova rung is calibrated on galaxies whose distances come from cepheids, and '
           'the cepheid rung is calibrated on stars whose distances come from geometry, so a '
           'correction anywhere low in the chain moves everything above it together. Two '
           'results built on overlapping calibrations cannot be treated as two independent '
           'confirmations of the same answer, and the history of the subject is partly a '
           'history of that confusion. Critics of the standard figure have pressed this '
           'objection for thirty years, and in one respect the subject agrees with them: the '
           'current disagreement about the expansion rate is taken seriously precisely '
           'because the two differing results come from methods that share almost nothing.',
           'That last point is the one worth carrying away, and it is not a sceptical one. A '
           'discrepancy between methods that share a calibration is a sign that something in '
           'the shared part is wrong, and is ordinary news. A discrepancy between methods '
           'that share nothing is interesting in a way the first cannot be, because there is '
           'no common assumption left to blame. The temptation is to read every disagreement '
           'as a scandal. The useful question is always which assumptions the two sides have '
           'in common.'],
 'guided': [('What happens to random error as observations accumulate?',
             ('It propagates upward',
              'It shrinks',
              'It stays the same',
              'It becomes systematic'),
             1,
             'That is why a thousand cepheids are better than ten.'),
            ('What happens to a two per cent error in the geometry?',
             ('It averages away',
              'Every distance above it is out by two per cent',
              'It is revealed by further observation',
              'It affects only nearby stars'),
             1,
             'A systematic error propagates upward unchanged.'),
            ('What is the published uncertainty largely an estimate of?',
             ('The number of observations',
              'How large the systematic errors might be',
              'The recession rate',
              'The age of the universe'),
             1,
             'The passage calls it a judgement rather than a measurement.')],
 'exam': [('Why are the rungs less independent than the image suggests?',
           ('They were discovered together',
            'Each is calibrated on distances from the rung below',
            'They use the same telescopes',
            'They measure the same galaxies'),
           1,
           'A correction low in the chain moves everything above it together.'),
          ('What cannot be treated as two independent confirmations?',
           ('Two measurements of the same star',
            'Two results built on overlapping calibrations',
            'Geometry and trigonometry',
            'Two supernovae in one galaxy'),
           1,
           'Shared calibration means the two are not separate tests.'),
          ('Why is the current disagreement about the expansion rate taken seriously?',
           ('It is very large',
            'The two differing results come from methods that share almost nothing',
            'Critics have pressed it for thirty years',
            'It affects the age of the universe'),
           1,
           'Independence is what makes the disagreement hard to explain away.'),
          ('What does a discrepancy between methods that share a calibration suggest?',
           ('That one side is dishonest',
            'That something in the shared part is wrong',
            'That the universe is older than thought',
            'That both results are correct'),
           1,
           'The passage calls that ordinary news for exactly this reason.'),
          ('What does the writer say is the useful question?',
           ('Which result is larger',
            'Which assumptions the two sides have in common',
            'Who published first',
            'How many observations were made'),
           1,
           'That is the question the final sentence settles on.')]}
UNIT['l4'] = {'sub': 'Measuring what cannot be reached',
 'caption': 'A lecture on the distance ladder, one rung at a time',
 'board': ['Geometry: exact, very short reach',
           'Cepheids: cycle gives true brightness',
           'Supernovae: reach most of the universe',
           'Each rung set by the one below'],
 'skill': ('A lecture built as a sequence',
           ['Three stages in order. The reason for each is that the previous one has run '
            'out.',
            'Note what the lecturer says is the price of the arrangement.',
            'A question about the diagram wants what he says it gets wrong.']),
 'warm': [('Woman: What sets the cepheid scale?',
           ('The geometry below it.',
            'The supernova rung.',
            'Yes, something sets it.',
            'The cycle length.'),
           0,
           'Each rung is calibrated by the rung beneath, and geometry is at the bottom.'),
          ('Woman: Why is geometry not enough?',
           ('It reaches almost nothing.',
            'It is inexact.',
            'Yes, it is enough.',
            'A few thousand stars.'),
           0,
           'Its reach is tiny on a cosmological scale, which is why the other rungs exist.'),
          ('Woman: What does he say the diagram gets wrong?',
           ('It makes the rungs look separate.',
            'It leaves out supernovae.',
            'Yes, it is wrong.',
            'The order of the stages.'),
           0,
           'The picture suggests independence the chain does not have.')],
 'script': [('Man',
             'Three rungs, and I want you to be able to draw them and say why each one '
             'exists. Rung one, geometry. A nearby star shifts against the background as the '
             'earth goes round the sun, you measure the shift, you get the distance, and '
             'there is nothing to assume beyond trigonometry. Exact, and almost useless on '
             'its own, because the shift is unmeasurable past a few thousand stars and no '
             'galaxy is in reach. So, rung two. Some of the stars geometry has already '
             'measured are cepheids, and a cepheid brightens and dims on a fixed cycle, and '
             'the length of the cycle tells you how luminous it truly is. Compare the true '
             'brightness with what arrives here and you have a distance. That takes you to '
             'nearby galaxies. Rung three. In some of those galaxies we have watched a '
             'particular kind of supernova, and those are bright enough to be seen almost '
             'anywhere and uniform enough to be used the same way. And notice that nothing '
             'above the first rung is ever checked against the sky directly. It is checked '
             'against the rung below it. Now the price. Every rung is calibrated on the one '
             'below, so the diagram in your textbook, with three tidy arrows side by side, '
             'is the one thing I want you to distrust. Those arrows are not independent. '
             'Move the bottom of the ladder and every number above it moves with it, which '
             'is why the age of the universe has a history of revision and not a date of '
             'discovery.')],
 'items': [('What does the lecturer want the class to be able to do?',
            ('Memorise the three distances',
             'Draw the three rungs and say why each exists',
             'Calculate a recession rate',
             'Name the discoverer of each'),
            1,
            'He opens with exactly that requirement.'),
           ('What does he say about geometry?',
            ('It is inexact but far-reaching',
             'It is exact and almost useless on its own',
             'It depends on cepheids',
             'It reaches nearby galaxies'),
            1,
            'Exact, and almost useless on its own, because its reach is so short.'),
           ('What tells you how luminous a cepheid truly is?',
            ('Its colour', 'The length of its cycle', 'Its distance', 'Its composition'),
            1,
            'The cycle length predicts the true brightness, which is the whole use of the '
            'star.'),
           ('What does he want the class to distrust?',
            ('The cepheid method',
             'The textbook diagram with three tidy arrows',
             'The supernova rung',
             'The published uncertainty'),
            1,
            'He says the arrows are not independent, so the picture misleads.'),
           ('Why does the age of the universe have a history of revision?',
            ('New stars are found',
             'Moving the bottom of the ladder moves every number above it',
             'Telescopes improve',
             'Critics disagree'),
            1,
            'That is the consequence he draws from the chain.')]}
UNIT['l5'] = {'sub': 'Measuring what cannot be reached',
 'caption': 'A short talk on two kinds of error and one interesting disagreement',
 'board': ['Random error: shrinks with data',
           'Systematic error: propagates unchanged',
           'Shared calibration: ordinary news',
           'Nothing shared: interesting'],
 'skill': ('A talk that teaches a test rather than a conclusion',
           ['The speaker gives a question to ask of any disagreement. Note the question.',
            'She distinguishes two kinds of error by what more data does to them.',
            'A question about the present disagreement wants what makes it different.']),
 'warm': [('Man: What does more data do to systematic error?',
           ('Nothing at all.', 'It shrinks it.', 'Yes, it helps.', 'Two per cent.'),
           0,
           'Systematic error propagates unchanged however much you collect.'),
          ('Man: What is her test?',
           ('Ask what the two sides share.',
            'Ask who published first.',
            'Yes, she has a test.',
            'Ask for more data.'),
           0,
           'The useful question is always which assumptions are common to both.'),
          ('Man: Why is the present disagreement interesting?',
           ('The two methods share almost nothing.',
            'It is very large.',
            'Yes, it is interesting.',
            'Critics raised it.'),
           0,
           'With no common assumption left to blame, the disagreement is hard to dismiss.')],
 'script': [('Woman',
             'Two kinds of error, and you tell them apart by asking what more data does. '
             'Random error shrinks when you collect more, which is why a thousand cepheids '
             'beat ten. Systematic error does nothing when you collect more. If the geometry '
             'at the bottom is out by two per cent, every distance above it is out by two '
             'per cent, and you can observe for another fifty years at the top of the ladder '
             'without finding out. So when you read a published uncertainty on the age of '
             'the universe, understand what it mostly is: somebody’s estimate of how wrong '
             'the shared foundations might be. That is a judgement, honestly made and openly '
             'argued, and it is not the same kind of thing as a measurement. Let me put that '
             'another way. The number at the top of the ladder is not wrong. It is exactly '
             'as right as the bottom of the ladder is. Now here is the part I actually want '
             'you to keep. When two methods disagree, ask what they have in common. If they '
             'share a calibration, the disagreement tells you something in the shared part '
             'is wrong, and that is ordinary science and nobody should be excited. If they '
             'share almost nothing, you have a problem with no convenient place to put it, '
             'and that is the situation the field is in now over the expansion rate. Critics '
             'pressed this distinction for thirty years before anybody wanted it. It is the '
             'reason the present argument matters and the older ones did not.')],
 'items': [('How do you tell the two kinds of error apart?',
            ('By their size',
             'By asking what more data does to them',
             'By who reports them',
             'By where they occur in the chain'),
            1,
            'That is the test she opens with.'),
           ('What does she say a published uncertainty mostly is?',
            ('A count of observations',
             'An estimate of how wrong the shared foundations might be',
             'A measurement of random error',
             'A guess with no basis'),
            1,
            'She calls it a judgement, honestly made and openly argued.'),
           ('What should you ask when two methods disagree?',
            ('Which is newer',
             'What they have in common',
             'Which has more data',
             'Who funded them'),
            1,
            'That is the part she says she wants the class to keep.'),
           ('What does a disagreement between methods sharing a calibration tell you?',
            ('That both are wrong',
             'That something in the shared part is wrong',
             'That the data are insufficient',
             'That the methods are independent'),
            1,
            'She calls that ordinary science and says nobody should be excited.'),
           ('What does she say about the critics?',
            ('They were mistaken',
             'They pressed the distinction for thirty years before anybody wanted it',
             'They have now withdrawn it',
             'They were astronomers'),
            1,
            'She credits them with the distinction that makes the present argument matter.')]}
UNIT['w4'] = {'sub': 'Measuring what cannot be reached',
 'skill': ('Degree and comparison: far more, no number of, than',
           ['Far, considerably and nowhere near go before a comparative: far more luminous, '
            'nowhere near large enough.',
            'No number of X will Y is a strong negative. The verb stays positive.',
            'Keep both halves of a comparison present. A than with nothing after it is the '
            'commonest error at this level.']),
 'guided': [('You want to say a measurement is much better with more data.',
             ['a thousand',
              'cepheids',
              'are',
              'far',
              'more',
              'useful',
              'than',
              'ten',
              'for',
              'random',
              'error'],
             'A thousand cepheids are far more useful than ten for random error.'),
            ('You want to say more data cannot help.',
             ['no number',
              'of',
              'further',
              'observations',
              'will',
              'reveal',
              'a systematic',
              'error',
              'at',
              'the',
              'bottom'],
             'No number of further observations will reveal a systematic error at the '
             'bottom.'),
            ('You want a comparison with both halves present.',
             ['geometry',
              'is',
              'more',
              'exact',
              'than',
              'the',
              'cepheid',
              'method',
              'and',
              'much',
              'shorter'],
             'Geometry is more exact than the cepheid method, and much shorter.')],
 'exam': [('You want to say the reach falls far short.',
           ['geometry',
            'reaches',
            'nowhere near',
            'far',
            'enough',
            'to',
            'measure',
            'even',
            'the',
            'nearest',
            'galaxy'],
           'Geometry reaches nowhere near far enough to measure even the nearest galaxy.'),
          ('You want to compare two kinds of error.',
           ['systematic',
            'error',
            'is',
            'far',
            'harder',
            'to',
            'detect',
            'than',
            'random',
            'error',
            'is'],
           'Systematic error is far harder to detect than random error is.'),
          ('You want a strong negative about averaging.',
           ['no amount',
            'of',
            'additional',
            'data',
            'averages',
            'away',
            'an',
            'error',
            'in',
            'the',
            'calibration'],
           'No amount of additional data averages away an error in the calibration.'),
          ('You want to compare two disagreements.',
           ['a disagreement',
            'between',
            'independent',
            'methods',
            'is',
            'considerably',
            'more',
            'interesting',
            'than',
            'this',
            'one'],
           'A disagreement between independent methods is considerably more interesting than '
           'this one.'),
          ('You want to say one supernova is far brighter.',
           ['that',
            'supernova',
            'is',
            'far',
            'more',
            'luminous',
            'than',
            'any',
            'cepheid',
            'ever',
            'observed'],
           'That supernova is far more luminous than any cepheid ever observed.')]}
UNIT['w5'] = {'sub': 'Measuring what cannot be reached',
 'prof': 'Dr Beaumont',
 'question': 'Two teams measure the expansion rate of the universe and get results that do '
             'not overlap. One team says the difference means new physics is needed. The '
             'other says an unidentified systematic error in one of the two methods is the '
             'likelier explanation. Which position is better supported?',
 'posts': [('Nadia',
            'w',
            'The systematic error, every time. The history of this subject is a history of '
            'confident results that turned out to rest on a calibration nobody had checked, '
            'and nothing about this case is different.'),
           ('Felix',
            'm',
            'That argument proves too much, because it would have been available against '
            'every real discovery ever made. The passage gives the reason this case is '
            'different and Nadia has skipped straight past it.')],
 'skill': ('A question about how to weigh an unexplained difference',
           ['Nadia argues from the record of the field; Felix from what the two methods '
            'share.',
            'The second passage distinguishes a disagreement between methods with a shared '
            'calibration from one between methods with none.',
            'A strong answer says what would settle it, rather than only which side is '
            'likelier.']),
 'starters': ['Nadia is right that…, and that is an argument about… rather than about…',
              'The distinction the passage draws is between… and…',
              'What would actually settle this is…',
              'Until then the defensible position is…'],
 'model': ['Nadia is right about the record and wrong to treat it as decisive here, because '
           'the passage draws a distinction her argument cannot see. A discrepancy between '
           'methods that share a calibration points to the shared part, and a discrepancy '
           'between methods that share almost nothing has no common assumption left to '
           'blame, which is exactly the position the two expansion measurements are in. That '
           'is the whole distinction, and it is not a subtle one.',
           'Felix is right about that and overstates what follows. The absence of a shared '
           'assumption does not establish new physics; it removes the cheapest explanation '
           'and leaves two expensive ones, an undetected systematic error inside one method '
           'alone, or something missing from the model. Those two are not equally cheap, and '
           'neither of them is the kind of claim a press release should carry.',
           'What would settle it is a third route to the same quantity that shares a '
           'calibration with neither, and several are being built for that reason. Until one '
           'of them reports, the defensible position is that the discrepancy is real, '
           'unexplained, and not yet evidence for any particular replacement. That is an '
           'uncomfortable place to stand, because it offers nothing to announce, and it is '
           'the only position that does not require assuming the answer. Anybody who finds '
           'it unsatisfying should notice that both of the alternatives on offer are '
           'confident about something nobody has measured.'],
 'model_words': 236}
UNIT['sp'] = list(UNIT['sp']) + [{'sub': 'Measuring what cannot be reached',
  'focus': 'describing a sequence in which each step rests on the last',
  'skill': ('Each rung is calibrated by the rung below it',
            ['Say the steps in order and mark each one. First, then, and from that.',
             'Stress the link word, not the noun: it is the dependence you are describing.',
             'Keep the pace even. Sequences spoken quickly lose their order.']),
  'repeat': ['Geometry comes first.',
             'The cepheid scale rests on the geometry.',
             'Each rung is calibrated by the rung below it.',
             'Compare the true brightness with the brightness that arrives.',
             'The whole ladder is anchored on the bottom rung.',
             'Move the bottom and every number above it moves.',
             'No cosmological distance has ever been measured directly, which is why the '
             'figure has a history of revision.'],
  'theme': 'a method with steps that depend on each other',
  'qs': ['Tell me about something you learnt in stages, where each stage needed the one '
         'before. How did it go?',
         'Some people say an answer is only as good as its weakest step. How far would you '
         'agree?',
         'How would you explain to a friend why we cannot measure the distance to a galaxy '
         'directly?',
         'Finally, describe a number you have heard quoted that turned out to depend on '
         'something else.'],
  'model': [(2,
             'I would mostly agree, with one qualification. It is true when the steps are in '
             'a chain, and it is not true when there are two separate routes to the same '
             'place, because then the weak step can be checked.'),
            (3,
             'I would say nobody can put a ruler out there, so we compare how bright a thing '
             'really is with how bright it looks, and that only works because something '
             'nearer told us how bright that kind of thing really is.')],
  'selfcheck': ['I marked each step in the sequence',
                'I stressed the link words',
                'I used at least two of the unit’s field words']},
 {'sub': 'Measuring what cannot be reached',
  'focus': 'saying what would settle a question',
  'skill': ('What would settle it is a third route that shares nothing',
            ['Name the test before you give your view. It makes the view sound held rather '
             'than announced.',
             'Keep conditionals short. Long ones lose the condition.',
             'Fall on the final word of the test. Rising there turns it into a suggestion.']),
  'repeat': ['The two results share almost nothing.',
             'A systematic error does not average away.',
             'What would settle it is a third method.',
             'There is no common assumption left to blame.',
             'Until one of them reports, I would not choose.',
             'The useful question is which assumptions the two sides share.',
             'It is tempting to read every disagreement as a scandal, and the tempting '
             'reading is usually the lazy one.'],
  'theme': 'holding a question open',
  'qs': ['Tell me about a question you could not settle. What would have settled it?',
         'Some people think you should always take a side. What do you think?',
         'How do you decide whether a disagreement is worth paying attention to?',
         'Finally, describe a time you changed your mind because of one new piece of '
         'information.'],
  'model': [(2,
             'I think you should always be able to say what would change your mind, which is '
             'not quite the same thing. If I cannot name that, taking a side is just picking '
             'one.'),
            (3,
             'I ask what the two sides have in common. If they are working from the same '
             'assumption, the argument is usually about that assumption and not about what '
             'they think it is about.')],
  'selfcheck': ['I named the test before my view',
                'I kept the conditionals short',
                'I fell on the last word of the test']}]
