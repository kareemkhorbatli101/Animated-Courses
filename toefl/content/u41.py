# -*- coding: utf-8 -*-
"""Unit 41 — Instruments and Measurement.

The first unit of Volume 5. Cycle 4 sets out the four terms in an
indication - quantity, sensitivity, offset and noise - and shows that
only the first belongs to the world, that two of the others can be
dealt with by the operator and that the third needs a standard the
instrument cannot supply. Cycle 5 narrows what the traceability chain
reaches: a certificate obtained at three wavelengths bounds the
sensitivity at three wavelengths, and the step to a fourth is an
interpolation belonging to the operator that is almost never written
down."""

UNIT = {'n': 41,
 'vol': 5,
 'level': 'B2',
 'title': 'Instruments and Measurement',
 'grammar': 'Extraposition: it-clauses and end weight',
 'field': 'sensor, accuracy, repeatability',
 'opener_line': 'Volume 5 opens with the subject every other subject rests on. A number produced '
                'by an instrument is a claim about that instrument as much as about the world, '
                'and this unit is about telling the two apart — which turns out to be the '
                'difference between a figure a reader can check and a figure a reader has to '
                'trust.',
 'subs': ['Reading a specification',
          'Resolution is not accuracy',
          'When the instrument is the only one'],
 'icons': ['chart', 'beaker', 'laptop'],
 'acad': [('ascertain', 'to find out with certainty'),
          ('discern', 'to make out something hard to see'),
          ('deficient', 'lacking something it ought to have'),
          ('exert', 'to apply a force or an influence'),
          ('nominal', 'stated on paper, as against actual'),
          ('benchmark', 'a reference point others are compared against'),
          ('comply', 'to act as a rule requires'),
          ('configure', 'to set an instrument up in a particular way'),
          ('elicit', 'to draw out a response'),
          ('probe', 'to examine closely; also the part that touches the sample'),
          ('verify', 'to establish that something is in fact so'),
          ('iterate', 'to repeat a step, each time with the last result'),
          ('pertinent', 'bearing on the question actually in hand'),
          ('warranted', 'justified by what is actually known')],
 'fieldwords': [('sensor', 'the part of an instrument that responds to the quantity'),
                ('transducer', 'a device that turns one kind of signal into another'),
                ('accuracy', 'how close a reading is to the true value'),
                ('repeatability', 'how close repeated readings are to each other'),
                ('hysteresis', 'a reading that depends on which way the input moved'),
                ('traceable', 'linked by an unbroken chain to a national standard'),
                ('smoothing', 'averaging a signal to remove what looks like noise'),
                ('aliasing', 'a false low frequency produced by sampling too slowly'),
                ('interlaboratory', 'between two or more separate laboratories'),
                ('zeroing', 'setting the reading to zero with no input applied'),
                ('gauge', 'an instrument that displays a quantity directly'),
                ('decimal', 'one of the places after the point in a figure'),
                ('instrumental', 'produced by the apparatus rather than the sample'),
                ('indication', 'the value an instrument displays, before correction'),
                ('span', 'the range between the lowest and highest readings'),
                ('referee', 'the reader a journal asks to judge a paper')],
 'collocs': [('within tolerance', 'inside the permitted range'),
             ('out of specification', 'failing what the sheet promises'),
             ('take a reading', 'record what the instrument shows'),
             ('zero the instrument', 'set it to read nothing at no input'),
             ('round-robin comparison', 'the same sample measured by several labs'),
             ('raw output', 'the signal before any processing'),
             ('noise floor', 'the smallest signal distinguishable from noise'),
             ('run to run', 'between one complete measurement and the next'),
             ('calibration certificate', 'the paper that makes a reading traceable'),
             ('order of magnitude', 'a factor of about ten')],
 'stance': [('it is widely held that', 'the writer reports a common view'),
            ('it would be rash to', 'a warning, not a refusal'),
            ('on the evidence available', 'the writer limits the claim'),
            ('it does not follow that', 'the writer blocks an inference'),
            ('so far as anybody knows', 'an honest limit on the claim')],
 'nuance': [('accuracy / repeatability', 'close to true / close to each other'),
            ('resolution / accuracy', 'smallest step shown / closeness to true'),
            ('artefact / signal', 'made by the apparatus / present in the sample')],
 'candos': ['I can read a specification and say what it does not promise.',
            'I can keep accuracy, repeatability and resolution apart in writing.',
            'I can report a reading with the limit the instrument puts on it.',
            'I can put the heavy part of a sentence at the end, where it belongs.',
            'I can say that a feature may be instrumental without saying it is.',
            'I can ask a supplier a question that cannot be answered evasively.'],
 'vocab_talk': ['Describe a measurement you have made. What limited it?',
                'What is the difference between accuracy and repeatability?',
                'When would a reading to five decimal places be dishonest?',
                'Name a feature in data that turned out to be instrumental.'],
 'again': ['calibrate',
           'systematic',
           'precision',
           'uncertainty',
           'distribution',
           'threshold',
           'inference',
           'constraint'],
 'family': ('measure',
            [('measurement', 'noun', 'the measurement is traceable to a standard'),
             ('measurable', 'adjective', 'the drift is measurable but not important'),
             ('immeasurable', 'adjective', 'the harm was immeasurable, so nobody tried')]),
 'r1': {'sub': 'Reading a specification',
        'skill': ('Endings that depend on the part of speech',
                  ['Nouns of quality take -ness, -ity or -ence; adjectives take -ent, -able or '
                   '-ous; adverbs take -ly or -ably.',
                   'Decide the part of speech from the grammar before you decide the ending.',
                   'Where two endings would both be real words, the following preposition '
                   'usually settles it.']),
        'guided_text': 'A specification sheet is a promise and a list of things that are not '
                       'promised, and students read the first half. The figure most people quote '
                       'is the resolution, which is simply the smallest step the display can '
                       'show. It tells you nothing about accuracy, which is how close the '
                       'reading is to the truth. A gauge can be deficient in accuracy and '
                       'excell--- in resolution at the same time, and cheap instruments often '
                       'are, because adding a dec---- place costs almost nothing and improving '
                       'the sensor costs a great deal. Read the accuracy line first, then the '
                       'condi----- it applies in, then the tempera---- range, and only then be '
                       'impres---.',
        'guided': ['ent', 'imal', 'tions', 'ture', 'sed'],
        'guided_hint': 'excell--- is excellent — the slot follows can be deficient in accuracy '
                       'and, so it needs an adjective.',
        'exam_text': 'Three numbers describe an instrument and they are not interchangeable. '
                     'Accuracy is the closeness of a reading to the true value. Repeatability is '
                     'the clos----- of repeated readings to each other, which is a quite '
                     'different proper--: an instrument can be perfectly repeatable and wrong by '
                     'the same amount every time, and that is the commonest condi---- of an '
                     'instrument that has not been calibrated for a decade. Resolution is only '
                     'the smallest step the display can indi----. The three are often confl---- '
                     'in student reports, usually in the direction that flat---- the apparatus. '
                     'A further term belongs with them. Hysteresis is a depend---- of the '
                     'reading on the direction the input came from, so that approaching ten from '
                     'below and from above give answers that differ measur----. None of this is '
                     'exotic. It is the ordinary behaviour of physical devices, and the '
                     'report--- of a figure without the conditions it was obtained in is not a '
                     'small omission but an unverif----- claim.',
        'exam': ['eness', 'ty', 'tion', 'cate', 'ated', 'ters', 'ence', 'ably', 'ing', 'iable']},
 'r2': {'sub': 'Resolution is not accuracy',
        'skill': ('Reading a specification against a complaint',
                  ['A specification states what is promised. A complaint usually depends on '
                   'something it does not promise.',
                   'Check the conditions line before you decide who is right.',
                   'A question about the reply wants the distinction it draws, not its tone.']),
        'docs': [('notice',
                  'Metrology Unit · what the loan sheet promises and what it does not',
                  ['# What the accuracy figure covers',
                   '* ±0.05 per cent of reading, between 10 and 90 per cent of span, at 20 ±2 '
                   '°C, within twelve months of calibration.',
                   '# What it does not cover',
                   '* Readings below 10 per cent of span, where the figure degrades by about a '
                   'factor of four.',
                   '* Any reading taken on an instrument whose certificate has expired, whatever '
                   'the display shows.',
                   '# Resolution',
                   '* The display carries six digits. The accuracy figure reaches the fourth. '
                   'The last two are not a claim about anything.',
                   '# Repeatability',
                   '* ±0.005 per cent, run to run, same operator, same day. This is the figure '
                   'to use for a comparison between two samples.'],
                  'notice'),
                 ('email',
                  's.okonkwo@uni.ac.uk',
                  'metrology@uni.ac.uk',
                  '14/03/2029',
                  'Loan meter 4471 — six digits and a disagreement about the last two',
                  ['Dear Metrology Unit,',
                   '',
                   'We have had meter 4471 for a fortnight and I think it is out of',
                   'specification. It displays six digits and the last two move constantly,',
                   'by three or four counts, with nothing connected and the room quiet.',
                   '',
                   'My supervisor says this is normal and I should average. I would rather',
                   'understand it than hide it, so: is the instrument deficient, or am I',
                   'reading the sheet wrongly?',
                   '',
                   'One more thing. Our measurements sit at about four per cent of span,',
                   'because the samples are small. I had assumed the accuracy figure',
                   'applied there too.',
                   '',
                   'Sunday Okonkwo, second-year project student'])],
        'guided': [('What temperature range does the accuracy figure assume?',
                    ('Any laboratory temperature', '20 ±2 °C', '10 to 90 °C', 'It is not stated'),
                    1,
                    'The conditions line gives the range, and a reading outside it is not '
                    'covered by the figure.'),
                   ('What happens to the accuracy figure below 10 per cent of span?',
                    ('It is unchanged',
                     'It degrades by about a factor of four',
                     'It improves',
                     'The instrument refuses to read'),
                    1,
                    'The notice says so in the section headed what it does not cover.'),
                   ('How many of the six digits does the accuracy figure reach?',
                    ('Six', 'Five', 'Four', 'Two'),
                    2,
                    'The notice says the last two are not a claim about anything.'),
                   ('Which figure does the notice say to use for a comparison?',
                    ('Accuracy', 'Repeatability', 'Resolution', 'The span'),
                    1,
                    'Run to run, same operator, same day is exactly the condition a comparison '
                    'meets.')],
        'exam': [('What is the student’s main complaint?',
                  ('The instrument will not zero',
                   'The last two digits move constantly',
                   'The certificate has expired',
                   'The span is too narrow'),
                  1,
                  'Three or four counts with nothing connected is the behaviour he reports.'),
                 ('What has his supervisor told him to do?',
                  ('Return the meter', 'Average', 'Recalibrate', 'Use a smaller sample'),
                  1,
                  'And he says he would rather understand it than hide it.'),
                 ('On the notice, is the movement he describes a fault?',
                  ('Yes, it is out of specification',
                   'No, the last two digits are not a claim',
                   'The notice does not say',
                   'Only if the certificate has expired'),
                  1,
                  'The accuracy figure reaches the fourth digit, so movement in the fifth and '
                  'sixth is outside what is promised.'),
                 ('What is the more serious problem in his message?',
                  ('The fortnight he has had the meter',
                   'His measurements sit at four per cent of span',
                   'The room is quiet',
                   'He is a second-year student'),
                  1,
                  'Below ten per cent of span the accuracy figure degrades by about four times, '
                  'and he had assumed it applied.'),
                 ('What had he assumed about the accuracy figure?',
                  ('That it covered his range',
                   'That it covered six digits',
                   'That it was a repeatability figure',
                   'That it expired with the certificate'),
                  0,
                  'He says so in his last paragraph, and that is the assumption the notice '
                  'contradicts.'),
                 ('Which of his two questions does the notice answer directly?',
                  ('Neither',
                   'Both',
                   'Only the one about the digits',
                   'Only the one about the span'),
                  1,
                  'The resolution section answers the digits and the exclusions section answers '
                  'the span.'),
                 ('What does the exchange suggest about reading a specification?',
                  ('The accuracy figure is the only line that matters',
                   'The conditions and the exclusions carry as much as the figure',
                   'Specifications are usually wrong',
                   'A student should not question a supervisor'),
                  1,
                  'Both of his difficulties are in the parts of the sheet that say what is not '
                  'promised.')]},
 'r3': {'sub': 'When the instrument is the only one',
        'title': 'The Feature That Went Away When They Changed the Cable',
        'words': 290,
        'skill': ('Reading a case about the apparatus rather than the subject',
                  ['The passage is about how a finding was tested, not about what it found. '
                   'Follow the tests.',
                   'One sentence names what the group did before publishing. That is the point '
                   'of the passage.',
                   'A question about the general lesson wants what the case is an instance of.']),
        'paras': ['In 2011 a group reported a periodic feature in eighteen months of '
                  'gravitational data, at a periodicity of almost exactly twelve hours. It is '
                  'widely held that a signal at a familiar period is the most suspect kind of '
                  'all, and the group concurred. Before the result was submitted anywhere, four '
                  'months went into attempts to reproduce it artificially: a change of sampling '
                  'rate, a run with the sample removed, a reversal of the direction of approach '
                  'to each reading, and a move of the entire instrument to a second site. Each '
                  'of the four is a standard diagnostic, and the feature survived all of them.',
                  'It then disappeared on the replacement of a damaged cable by a technician. '
                  'The cable ran within a metre of a vacuum pump whose duty cycle repeated twice '
                  'a day, and nothing in the sample, the sensor or the processing had any part '
                  'in the matter. No quantity of averaging would have exposed the behaviour '
                  'either, since the artefact was perfectly repeatable and had been so '
                  'throughout the eighteen months of recording.',
                  'Two conclusions are worth drawing. The first is that repeatability '
                  'constitutes evidence of nothing beyond repeatability, an instrument '
                  'consistently in error being indistinguishable from the inside from one in '
                  'agreement with the world. The second concerns the publication that followed, '
                  'which carried not only the corrected series but a list of the four '
                  'diagnostics the feature had survived. So far as anybody knows, no referee had '
                  'requested it. It is the single most useful paragraph in the paper, since a '
                  'later group with a comparable feature at a comparable periodicity now has a '
                  'starting point, where the ordinary convention of publishing only the '
                  'successful tests would have discarded the whole of it.'],
        'guided': [('What was the period of the reported feature?',
                    ('One hour', 'Almost exactly twelve hours', 'Eighteen months', 'Four months'),
                    1,
                    'And the passage says a signal at a familiar period is the most suspect kind '
                    'of all.'),
                   ('How long did the group spend trying to produce the feature artificially?',
                    ('Four months', 'Eighteen months', 'Two days', 'A year'),
                    0,
                    'Four diagnostics over four months, before the result was submitted '
                    'anywhere.'),
                   ('What finally made the feature disappear?',
                    ('A new sensor',
                     'A technician replacing a damaged cable',
                     'A change of sampling rate',
                     'Moving to a second site'),
                    1,
                    'The cable ran within a metre of a pump whose duty cycle repeated twice a '
                    'day.'),
                   ('Why would averaging not have revealed the artefact?',
                    ('The series was too short',
                     'The artefact was perfectly repeatable',
                     'The sampling rate was wrong',
                     'The sample had been removed'),
                    1,
                    'It had been repeatable throughout the eighteen months, so no quantity of '
                    'averaging could separate it.')],
        'exam': [('Which of these was NOT one of the four tests?',
                  ('Changing the sampling rate',
                   'Running with the sample removed',
                   'Replacing the cable',
                   'Moving the instrument to a second site'),
                  2,
                  'The cable was replaced by a technician afterwards and was not one of the four '
                  'diagnostics.'),
                 ('What does the passage say repeatability is evidence of?',
                  ('Accuracy',
                   'Nothing except repeatability',
                   'A real feature',
                   'A traceable chain'),
                  1,
                  'An instrument consistently wrong is indistinguishable from the inside from '
                  'one that is right.'),
                 ('What did the group publish besides the corrected series?',
                  ('The raw output',
                   'The list of four tests the feature had survived',
                   'The cable specification',
                   'A retraction'),
                  1,
                  'The passage calls that list the single most useful paragraph in the paper.'),
                 ('Had a referee asked for that list?',
                  ('Yes, two had',
                   'So far as anybody knows, no',
                   'The passage does not say',
                   'Only after publication'),
                  1,
                  'The passage marks the limit of what is known rather than asserting it.'),
                 ('Why is the list useful to a later group?',
                  ('It proves the first result',
                   'A later group with a similar feature has somewhere to start',
                   'It shortens the review process',
                   'It identifies the pump'),
                  1,
                  'That is the reason the passage gives for the list being worth more than the '
                  'correction.'),
                 ('What does the passage say about the ordinary convention?',
                  ('It would have preserved the list',
                   'It reports only what worked and would have thrown the list away',
                   'It requires four tests',
                   'It applies only to physics'),
                  1,
                  'The convention of publishing only the successful tests is what the case is '
                  'set against.'),
                 ('Where did the artefact originate?',
                  ('In the sample',
                   'In the sensor',
                   'In a cable near a pump',
                   'In the processing'),
                  2,
                  'The passage is explicit that the sample, the sensor and the processing had '
                  'nothing to do with it.'),
                 ('What is the case an instance of?',
                  ('Fraud in a laboratory',
                   'A feature produced by the apparatus rather than the sample',
                   'An error in averaging',
                   'A failure of calibration'),
                  1,
                  'That is the general category the whole passage is about.'),
                 ('The word artefact in paragraph 2 is closest in meaning to',
                  ('an ancient object',
                   'a feature made by the apparatus',
                   'a measurement error in the sample',
                   'a repeated reading'),
                  1,
                  'In measurement the word means a feature the equipment produced, not an '
                  'object.')]},
 'r4': {'sub': 'Resolution is not accuracy',
        'title': 'Every Reading Is a Claim About an Apparatus',
        'words': 353,
        'skill': ('Reading an equation stated in words',
                  ['A relation with four terms is described. Hold what each term belongs to.',
                   'Note which of the four can be separated from the quantity and which cannot.',
                   'A question about traceability wants what it bounds, not what it '
                   'guarantees.']),
        'paras': ['The indication an instrument displays is not the quantity under measurement '
                  'but the sum of four contributions, and telling those four apart is the whole '
                  'of the discipline. There is the quantity itself; the sensitivity of the '
                  'sensor, the multiplicative factor applied to the quantity on its passage to '
                  'the display; an offset, the indication obtained with no input whatever; and '
                  'noise, everything variable between successive readings from causes '
                  'individually too small for pursuit. Only the first of the four belongs to the '
                  'world. The remaining three are properties of an apparatus, and a reading '
                  'reported without them is a statement about an instrument presented as a '
                  'statement about a sample, which is the commonest fault in a first-year '
                  'report.',
                  'Two of the three admit of straightforward removal. An offset is established '
                  'by zeroing, which is the reason for the existence of that procedure and the '
                  'reason its omission is a disciplinary matter rather than a slip. Noise '
                  'diminishes under averaging in proportion to the square root of the number of '
                  'readings, the single piece of arithmetic in measurement that behaves as '
                  'intuition expects: a fourfold increase in readings halves it. Sensitivity is '
                  'the recalcitrant term, since it requires a quantity already known, which is '
                  'to say a standard, and no apparatus can furnish its own: a ruler establishes '
                  'nothing whatever about its own length, however carefully anybody reads it.',
                  'Traceability is the arrangement that answers this difficulty, and its '
                  'ambition is a good deal narrower than its reputation. A chain of comparisons '
                  'runs from the instrument on a bench, through a laboratory standard and a '
                  'national laboratory, to a definition, each link carrying a stated uncertainty '
                  'which accumulates along the chain, so that a longer chain amounts to a weaker '
                  'guarantee. What the chain delivers is a bound on the systematic error of the '
                  'sensitivity, traceable to a definition rather than to a consensus among '
                  'laboratories. What it does not deliver is any guarantee about a reading, an '
                  'unmeasured offset and an unaveraged noise term being untouched by any '
                  'certificate on any wall and remaining the business of whoever took the '
                  'reading.'],
        'guided': [('How many contributions make up an indication?',
                    ('Two', 'Three', 'Four', 'Six'),
                    2,
                    'Quantity, sensitivity, offset and noise, of which only the first belongs to '
                    'the world.'),
                   ('What is an offset?',
                    ('The factor the quantity is multiplied by',
                     'The indication given with no input at all',
                     'Variation from reading to reading',
                     'The smallest step the display shows'),
                    1,
                    'Which is why zeroing exists as a procedure.'),
                   ('What does noise fall in proportion to?',
                    ('The number of readings',
                     'The square root of the number of readings',
                     'The span of the instrument',
                     'The sensitivity'),
                    1,
                    'The passage calls it the one piece of arithmetic that behaves as intuition '
                    'expects.')],
        'exam': [('Which of the four contributions belongs to the world?',
                  ('The quantity', 'The sensitivity', 'The offset', 'The noise'),
                  0,
                  'The other three are properties of an apparatus.'),
                 ('Why can an instrument not establish its own sensitivity?',
                  ('The sensor drifts',
                   'Its determination requires a quantity already known',
                   'Noise interferes',
                   'The offset is unmeasured'),
                  1,
                  'The passage compares it to a ruler establishing its own length.'),
                 ('What does the traceability chain run from and to?',
                  ('A sample to a laboratory',
                   'An instrument on a bench to a definition',
                   'A sensor to a display',
                   'One laboratory to another'),
                  1,
                  'Through a laboratory standard and a national one, with an uncertainty at each '
                  'link.'),
                 ('What does the chain deliver?',
                  ('A guarantee about the reading',
                   'A bound on the systematic error of the sensitivity',
                   'A removal of the offset',
                   'A reduction in noise'),
                  1,
                  'Traceable to a definition rather than to a consensus, as the passage puts '
                  'it.'),
                 ('What is untouched by any certificate?',
                  ('The sensitivity',
                   'An unmeasured offset and an unaveraged noise term',
                   'The definition',
                   'The national standard'),
                  1,
                  'That is the limit the final sentence draws.')]},
 'r5': {'sub': 'When the instrument is the only one',
        'title': 'What the Certificate on the Wall Covers',
        'words': 350,
        'skill': ('Reading an objection about what a guarantee covers',
                  ['The writer accepts the chain and attacks what it reaches. Note the gap.',
                   'One worked case carries the middle of the passage. Hold what was certified '
                   'and what was measured.',
                   'A question about the recommendation wants what should be published beside '
                   'the figure.']),
        'paras': ['The traceability chain is sound and reaches a narrower set of measurements '
                  'than the certificates suggest. A national standard realises one quantity '
                  'under stated conditions — a mass, a frequency, a voltage at a given '
                  'temperature — each tied to a definition and to nothing else, and an '
                  'instrument calibrated against that realisation carries a certificate '
                  'licensing readings of that quantity under those conditions. A great many of '
                  'the measurements that matter are neither that quantity nor under those '
                  'conditions.',
                  'Consider a determination of the absorption of a protein solution at a '
                  'wavelength for which no standard material exists, the ordinary case in '
                  'biochemistry rather than an awkward exception. The spectrophotometer carries '
                  'a current certificate, traceable, unimpeachable, obtained against a glass '
                  'filter at three wavelengths, none of them the wavelength in use and none '
                  'within forty nanometres of it. The certificate bounds the sensitivity at '
                  'those three wavelengths, and its extension to a fourth rests on a model of '
                  'the instrumental response between them, an assumption of the operator rather '
                  'than a determination by any laboratory. Interpolation of this kind is '
                  'routine, defensible and almost never stated anywhere a reader could find it, '
                  'so that the distance between what the certificate establishes and what the '
                  'published figure depends on is bridged by a judgement nobody has written '
                  'down.',
                  'What follows is no reason for suspicion of instruments and every reason for '
                  'three sentences in a methods section. Where a measurement sits outside the '
                  'conditions a certificate covers, the honest practice is a statement to that '
                  'effect, the naming of the interpolation, and the result of an interlaboratory '
                  'comparison on the same material, in that order. The third does more than the '
                  'other two together, agreement between two instruments of different response '
                  'curves being the only available evidence about the one term the chain cannot '
                  'reach. It is widely held, by referees as much as by students, that a current '
                  'certificate settles the question of accuracy. It settles a different and '
                  'narrower question, and the difference is the thing a referee should be asking '
                  'about before anything else on the page.'],
        'guided': [('What does the writer say about the traceability chain?',
                    ('It is unsound',
                     'It is sound and reaches a narrower set of measurements than the '
                     'certificates suggest',
                     'It is obsolete',
                     'It applies only to mass'),
                    1,
                    'The objection is about reach, not about soundness.'),
                   ('What does a national standard realise?',
                    ('Every quantity an instrument can measure',
                     'A particular quantity under particular conditions',
                     'A consensus between laboratories',
                     'A definition with no uncertainty'),
                    1,
                    'A mass, a frequency, a voltage at a stated temperature are the examples '
                    'given.'),
                   ('In the example, how many wavelengths was the instrument calibrated at?',
                    ('One', 'Three', 'Four', 'None'),
                    1,
                    'And none of the three is the wavelength in use.')],
        'exam': [('What does the certificate in the example bound?',
                  ('The sensitivity at the wavelength in use',
                   'The sensitivity at the three calibrated wavelengths',
                   'The offset at all wavelengths',
                   'The noise of the instrument'),
                  1,
                  'Its extension to the fourth is the step the passage examines.'),
                 ('What does the extension to a fourth wavelength rest on?',
                  ('A second certificate',
                   'A model of the instrument’s response between the calibrated points',
                   'An interlaboratory comparison',
                   'The definition of the unit'),
                  1,
                  'Which the passage calls an assumption of the operator rather than a '
                  'determination of any laboratory.'),
                 ('What does the writer say about interpolation of this kind?',
                  ('It is improper',
                   'It is routine, defensible and almost never stated',
                   'It is forbidden by the standard',
                   'It is confined to one field'),
                  1,
                  'The complaint is about the silence, not about the practice.'),
                 ('Which of the three recommended practices does the writer say does most?',
                  ('Saying the measurement is outside the conditions',
                   'Naming the interpolation',
                   'Reporting an interlaboratory comparison',
                   'All three equally'),
                  2,
                  'Agreement between instruments with different response curves bounds the term '
                  'the chain cannot reach.'),
                 ('What does the writer say a current certificate settles?',
                  ('The question of accuracy',
                   'A different and narrower question',
                   'Nothing at all',
                   'The question of repeatability'),
                  1,
                  'And the difference is what the passage says a referee should ask about.')]},
 'l1': {'sub': 'Reading a specification',
        'caption': 'Two students in a teaching laboratory, over a borrowed meter',
        'skill': ('Hearing a correction that is not a disagreement',
                  ['One speaker accepts the other’s figure and rejects what it is taken to mean.',
                   'Listen for: that is the resolution, not the accuracy.',
                   'The item about what the sheet does not promise is the hard one.']),
        'warm': [('Woman: So it reads to five decimal places?',
                  ('That is the resolution, not the accuracy.',
                   'Yes, five.',
                   'It is borrowed.',
                   'In the specification.'),
                  0,
                  'A yes-no question answered by refusing what the figure is taken to show.'),
                 ('Woman: Has it been calibrated?',
                  ('There is no certificate with it.',
                   'Yes, to five places.',
                   'It is repeatable.',
                   'Every decade.'),
                  0,
                  'The answer gives the evidence rather than a bare no, which is what a careful '
                  'speaker does.'),
                 ('Woman: Should we use it at all?',
                  ('For a comparison, yes. For a value, no.',
                   'No, never.',
                   'It is within tolerance.',
                   'The sensor is new.'),
                  0,
                  'A should-we question answered by splitting the use rather than the '
                  'instrument.')],
        'script': [('Man', 'This meter reads to five decimal places.'),
                   ('Woman', 'That is the resolution. It is not the accuracy.'),
                   ('Man', 'Is that not the same thing in practice?'),
                   ('Woman',
                    'No. Resolution is the smallest step the display can show. Accuracy is how '
                    'close the number is to the truth. This one will cheerfully show you five '
                    'places and be wrong in the second.'),
                   ('Man', 'How would I know?'),
                   ('Woman',
                    'The accuracy line on the sheet, with the conditions. And a calibration '
                    'certificate, which this has not got, because somebody has borrowed it and '
                    'not brought the folder back.'),
                   ('Man', 'So it is useless.'),
                   ('Woman',
                    'It is useless for a value. It is perfectly good for a comparison, because '
                    'whatever it is doing wrong it will do the same way twice in an afternoon. '
                    'That is repeatability, and it is the one thing you can rely on here.'),
                   ('Man', 'And for the report?'),
                   ('Woman',
                    'Say what instrument, say there was no certificate, and give the difference '
                    'between your two samples rather than either number on its own. Nobody can '
                    'object to that and nobody can be misled by it.'),
                   ('Man', 'That feels like admitting a failure.'),
                   ('Woman',
                    'It is the opposite. The report that gives you five decimal places and no '
                    'conditions is the one the demonstrator will not believe.')],
        'items': [('What does the woman say the five decimal places are?',
                   ('The accuracy', 'The resolution', 'The repeatability', 'The tolerance'),
                   1,
                   'She separates the two in her first line and keeps them apart throughout.'),
                  ('What does she say the meter may do?',
                   ('Show five places and be wrong in the second',
                    'Refuse to read at all',
                    'Drift during the afternoon',
                    'Need zeroing first'),
                   0,
                   'That is her illustration of resolution without accuracy.'),
                  ('What is missing with the meter?',
                   ('The sensor', 'A calibration certificate', 'The manual', 'The probe'),
                   1,
                   'Somebody has borrowed it and not returned the folder.'),
                  ('What does she say the meter is good for?',
                   ('A value', 'A comparison', 'Neither', 'Teaching only'),
                   1,
                   'Whatever it does wrong it will do the same way twice in an afternoon.'),
                  ('What property is she relying on for that?',
                   ('Accuracy', 'Repeatability', 'Resolution', 'Traceability'),
                   1,
                   'She names it and calls it the one thing you can rely on here.'),
                  ('What three things does she tell him to put in the report?',
                   ('The instrument, the absence of a certificate, and the difference between '
                    'samples',
                    'The instrument, the accuracy and the resolution',
                    'The five decimal places and the conditions',
                    'The sensor type and the temperature'),
                   0,
                   'Those are the three she lists, and the difference replaces either bare '
                   'number.'),
                  ('What does she say about the report with five places and no conditions?',
                   ('It is the honest one',
                    'It is the one the demonstrator will not believe',
                    'It will be marked higher',
                    'It is what the sheet requires'),
                   1,
                   'She calls admitting the limit the opposite of admitting a failure.')]},
 'l2': {'sub': 'Resolution is not accuracy',
        'caption': 'A laboratory induction, on the three figures that matter',
        'poster': ['Loan instruments · induction',
                   'Accuracy, repeatability, resolution',
                   'Certificate expired = no value, only comparisons'],
        'skill': ('Hearing three terms separated once and used throughout',
                  ['The speaker defines three figures in the first minute and then relies on the '
                   'distinction. Fix them early.',
                   'Listen for the rule about an expired certificate, which is stated as an '
                   'absolute.',
                   'The item about what to write in a report is the one most often missed.']),
        'warm': [('Man: Can I use a meter whose certificate has expired?',
                  ('For a comparison, not for a value.',
                   'No, under no circumstances.',
                   'Yes, it is within tolerance.',
                   'Six digits.'),
                  0,
                  'The rule splits the use rather than banning the instrument.'),
                 ('Man: Which figure do I quote for two samples?',
                  ('The repeatability.', 'The accuracy.', 'The resolution.', 'All three.'),
                  0,
                  'A comparison between two samples on one day is exactly what repeatability '
                  'describes.'),
                 ('Man: Do I need the conditions in the report?',
                  ('Yes, every time.',
                   'Only if asked.',
                   'No, the figure is enough.',
                   'At twenty degrees.'),
                  0,
                  'The talk treats a figure without conditions as an unverifiable claim.')],
        'script': [('Woman',
                    'Three figures, and the whole of this induction is about not mixing them up. '
                    'Accuracy: how close your reading is to the true value. Repeatability: how '
                    'close your readings are to each other. Resolution: the smallest step the '
                    'display can show, which is a property of the screen and not of the '
                    'measurement. Now, the rule nobody likes. If the calibration certificate has '
                    'expired, that instrument cannot give you a value. It can still give you a '
                    'comparison, because whatever it is doing wrong it will do consistently for '
                    'an afternoon, and that is the repeatability figure working for you. So: two '
                    'samples, one day, one operator, quote the difference. One sample, absolute '
                    'number, you need a current certificate and you need the conditions. Which '
                    'brings me to reports. Every figure in a report carries the instrument, the '
                    'date of calibration and the conditions it was taken under. Not as an '
                    'appendix. Beside the figure. It is widely held that this is pedantry, and '
                    'it is the difference between a number somebody can check and a number '
                    'somebody has to take on trust. The last thing. If your readings sit in the '
                    'bottom tenth of the instrument’s span, go and find a smaller instrument, '
                    'because almost every accuracy figure you will meet degrades sharply down '
                    'there and the sheet will tell you so in a line you have not read.')],
        'items': [('What does the speaker say resolution is a property of?',
                   ('The sensor', 'The screen', 'The sample', 'The certificate'),
                   1,
                   'She calls it a property of the display and not of the measurement.'),
                  ('What can an instrument with an expired certificate still give?',
                   ('A value', 'A comparison', 'Nothing', 'A traceable reading'),
                   1,
                   'Because what it does wrong it does consistently for an afternoon.'),
                  ('What three things must accompany every figure in a report?',
                   ('Instrument, calibration date, conditions',
                    'Accuracy, repeatability, resolution',
                    'Operator, date, sample',
                    'Span, range, tolerance'),
                   0,
                   'And she says beside the figure rather than in an appendix.'),
                  ('What does she say about the view that this is pedantry?',
                   ('She shares it',
                    'It is widely held, and it misses what the record is for',
                    'It is never expressed',
                    'It applies only to students'),
                   1,
                   'She marks it as a common view and then gives the distinction it ignores.'),
                  ('What should you do if your readings are in the bottom tenth of the span?',
                   ('Average more',
                    'Find a smaller instrument',
                    'Recalibrate',
                    'Quote more digits'),
                   1,
                   'Almost every accuracy figure degrades sharply there.'),
                  ('Where does she say the sheet mentions that?',
                   ('In the headline figure',
                    'In a line you have not read',
                    'In the certificate',
                    'Nowhere'),
                   1,
                   'She is explicit that the information is there and goes unread.')]},
 'l3': {'sub': 'When the instrument is the only one',
        'caption': 'A talk on what to do when nothing can confirm your reading',
        'board': ['Change the instrument: the standard defence',
                  'Unavailable when yours is the only one',
                  'So: interlaboratory, raw output, scale',
                  'Publish the tests that failed'],
        'skill': ('A talk that replaces a technical remedy with a procedural one',
                  ['The speaker grants the standard defence and says where it runs out. Note '
                   'where.',
                   'Three replacements follow, and the third is the one she dwells on.',
                   'A question about the ending wants what she says a reader is entitled to.']),
        'warm': [('Man: What is the standard defence against an artefact?',
                  ('Measure it on a different instrument.',
                   'Average for longer.',
                   'Yes, there is one.',
                   'The noise floor.'),
                  0,
                  'Changing the apparatus is the defence the talk is built on.'),
                 ('Man: Why does it run out?',
                  ('Sometimes there is only one instrument.',
                   'It is too expensive.',
                   'Yes, it runs out.',
                   'Interlaboratory.'),
                  0,
                  'For the most interesting measurements there is no second instrument to change '
                  'to.'),
                 ('Man: What does she dwell on?',
                  ('Publishing the tests that failed.',
                   'The raw output.',
                   'Yes, one of them.',
                   'Three replacements.'),
                  0,
                  'The failed attempts to produce the feature are the part she spends longest '
                  'on.')],
        'script': [('Woman',
                    'When a feature appears in your data and you suspect the apparatus made it, '
                    'the standard move is simple and it is right: measure the same thing on a '
                    'different instrument. A feature that is in the sample survives the change, '
                    'and an artefact does not. So far so good, and for most of what you will do '
                    'in this department, that is the whole answer. Now the case I want you '
                    'thinking about. For a great many of the measurements that matter, there is '
                    'no second instrument, because yours is the only one in the world that can '
                    'reach the quantity at all. That is not a rare predicament. It is the normal '
                    'condition of a field at its frontier, and the standard move is simply '
                    'unavailable. What replaces it is not better engineering. It is procedure, '
                    'and there are three parts. First, interlaboratory comparison on whatever '
                    'you can both measure, even if it is not the interesting quantity, because '
                    'it bounds how far your apparatus is out. Second, publication of the raw '
                    'output alongside the processed figure, since smoothing is where a great '
                    'many artefacts are born and a reader cannot see it afterwards. Third, and '
                    'this is the one I want you to take away: publish the attempts that failed. '
                    'List every way you tried to make the feature appear artificially and could '
                    'not. A group that has tried six things and failed has given a reader '
                    'something to weigh. A group that reports the feature on its own has given a '
                    'reader nothing, and a reader is entitled to ask what you did to talk '
                    'yourself out of it.')],
        'items': [('What does the speaker say about the standard move?',
                   ('It is mistaken',
                    'It is right, and for most work it is the whole answer',
                    'It is too expensive for a department',
                    'It applies only to new instruments'),
                   1,
                   'She grants it fully before she finds the case it cannot reach.'),
                  ('Why is the standard move sometimes unavailable?',
                   ('Instruments are too costly',
                    'Yours is the only one in the world that can reach the quantity',
                    'The sample is destroyed by measuring',
                    'Laboratories will not cooperate'),
                   1,
                   'She calls that the normal condition of a field at its frontier.'),
                  ('What does she say replaces it?',
                   ('Better engineering', 'Procedure', 'A longer average', 'A second sensor'),
                   1,
                   'Not better engineering but procedure, in three parts.'),
                  ('What is the point of comparing with another laboratory on a quantity that is '
                   'not the interesting one?',
                   ('It satisfies the regulations',
                    'It bounds how far your apparatus is out',
                    'It builds collaboration',
                    'It produces a traceable reading'),
                   1,
                   'That is the reason she gives for comparing on whatever both can measure.'),
                  ('Why does she want the raw output published?',
                   ('It is shorter',
                    'Smoothing is where many artefacts are born and a reader cannot see it '
                    'afterwards',
                    'It is required by the journal',
                    'It shows the noise floor'),
                   1,
                   'The processed figure conceals the step where the artefact may have '
                   'appeared.'),
                  ('What does she say a group that reports the feature alone has given a reader?',
                   ('A strong claim', 'Nothing', 'An artefact', 'A raw output'),
                   1,
                   'Against a group that lists six failed attempts, which gives a reader '
                   'something to weigh.'),
                  ('What does she say a reader is entitled to ask?',
                   ('Who paid for the instrument',
                    'What you did to talk yourself out of it',
                    'Whether the certificate is current',
                    'How long the average was'),
                   1,
                   'That is the sentence she closes on.')]},
 'l4': {'sub': 'Resolution is not accuracy',
        'caption': 'A lecture on the four terms in a reading',
        'board': ['Indication = quantity + sensitivity + offset + noise',
                  'Offset: zero it',
                  'Noise: average it',
                  'Sensitivity: you need a standard'],
        'skill': ('A lecture that separates four terms and ranks them by difficulty',
                  ['Four terms, then which of them you can deal with yourself.',
                   'The hard term is named and the reason is a comparison. Keep the comparison.',
                   'A question about the laboratory rule wants what he refuses to accept.']),
        'warm': [('Man: Which term can I remove by zeroing?',
                  ('The offset.', 'The sensitivity.', 'Yes, one of them.', 'Four terms.'),
                  0,
                  'Zeroing measures the indication with no input, which is the offset.'),
                 ('Man: Why is sensitivity the hard one?',
                  ('It needs a quantity already known.',
                   'It changes with temperature.',
                   'Yes, it is hard.',
                   'A ruler.'),
                  0,
                  'Its determination requires a standard, which the instrument cannot supply.'),
                 ('Man: What will he not accept in a report?',
                  ('A reading with no conditions.',
                   'A six-digit display.',
                   'Yes, something.',
                   'An averaged figure.'),
                  0,
                  'He treats a figure without its conditions as a claim about an instrument in '
                  'disguise.')],
        'script': [('Man',
                    'Write this on the first page of your notebook, because every difficulty you '
                    'will have this year is one of its terms. What the instrument shows you is '
                    'not the quantity. It is the quantity, times the sensitivity of the sensor, '
                    'plus an offset, plus noise. Four terms, and exactly one of them has '
                    'anything to do with your sample. The other three are facts about a box on a '
                    'bench. Now, two of the three are your problem and are easily solved. The '
                    'offset is what the thing reads with nothing connected, so you zero it, and '
                    'that is why I am tedious about zeroing: it is not a ritual, it is the '
                    'measurement of a term. Noise is the variation between readings, and it '
                    'comes down with averaging, as the square root of the number of readings, '
                    'which is the only piece of arithmetic in this subject that does what you '
                    'would guess. Four times as many readings, half the noise. The third term is '
                    'the one that costs money. To know the sensitivity you need something whose '
                    'value you already know, which is to say a standard, and the instrument '
                    'cannot give you one. A ruler cannot establish its own length. That is what '
                    'a calibration certificate is for and it is all it is for. So here is the '
                    'rule in this laboratory. A figure in a report comes with the instrument, '
                    'the calibration date and the conditions, or it does not come at all, '
                    'because without them you have written down a property of a box and called '
                    'it a property of the world. I will hand back a report that does it, however '
                    'good the arithmetic is, and so will every journal any of you ever submit '
                    'to.')],
        'items': [('What does the lecturer say the instrument shows?',
                   ('The quantity',
                    'The quantity times the sensitivity, plus an offset, plus noise',
                    'The quantity plus noise',
                    'An averaged reading'),
                   1,
                   'Four terms, of which one belongs to the sample.'),
                  ('Why is he tedious about zeroing?',
                   ('It is a departmental rule',
                    'It is the measurement of a term rather than a ritual',
                    'It protects the sensor',
                    'It reduces noise'),
                   1,
                   'The offset is what the instrument reads with nothing connected.'),
                  ('What happens to noise with four times as many readings?',
                   ('It quarters', 'It halves', 'It is unchanged', 'It doubles'),
                   1,
                   'Noise falls as the square root of the number of readings.'),
                  ('What comparison does he use for sensitivity?',
                   ('A box on a bench',
                    'A ruler cannot establish its own length',
                    'A square root',
                    'A certificate on a wall'),
                   1,
                   'An apparatus cannot supply the known quantity its own sensitivity requires.'),
                  ('What does he say a figure without its conditions is?',
                   ('An estimate',
                    'A property of a box called a property of the world',
                    'A repeatability figure',
                    'An offset'),
                   1,
                   'That is the sentence the laboratory rule rests on.')]},
 'l5': {'sub': 'When the instrument is the only one',
        'caption': 'A short talk on what a certificate does not cover',
        'board': ['Certificate: three wavelengths',
                  'Measurement: a fourth',
                  'The gap is an assumption',
                  'Interlaboratory bounds it'],
        'skill': ('A talk that narrows a guarantee',
                  ['The speaker accepts the certificate entirely. Note what she says it does not '
                   'reach.',
                   'One case carries the argument. Hold the numbers in it.',
                   'A question about her remedy wants which of three does most.']),
        'warm': [('Woman: Is the certificate wrong?',
                  ('No, it covers less than people think.',
                   'Yes, it has expired.',
                   'Yes, it is wrong.',
                   'Three wavelengths.'),
                  0,
                  'Her whole argument is about reach rather than validity.'),
                 ('Woman: What fills the gap?',
                  ('An assumption of the operator.',
                   'A second certificate.',
                   'Yes, something fills it.',
                   'A glass filter.'),
                  0,
                  'The interpolation between calibrated points is the operator’s own model.'),
                 ('Woman: Which remedy does most?',
                  ('The interlaboratory comparison.',
                   'Naming the interpolation.',
                   'Yes, one of them.',
                   'All three.'),
                  0,
                  'Two instruments with different response curves bound the term the chain '
                  'cannot reach.')],
        'script': [('Woman',
                    'I want to take a certificate seriously enough to read it, which almost '
                    'nobody does. Here is one, current, traceable, entirely in order. It was '
                    'obtained against a glass filter at three wavelengths. Now here is the '
                    'measurement it is being used to support: the absorption of a protein '
                    'solution at a fourth wavelength, for which no standard material exists at '
                    'all. Notice what has happened. The certificate bounds the sensitivity at '
                    'three points. The figure in the paper depends on the sensitivity at a '
                    'fourth, and the step between them is an interpolation: a model of how the '
                    'instrument responds between the points where somebody checked. That model '
                    'is the operator’s. It is not a determination by any national laboratory, it '
                    'is usually perfectly reasonable, and it is almost never written down. So '
                    'when a referee asks whether the instrument was calibrated, the honest '
                    'answer is yes and the useful answer is longer. What I would like in a '
                    'methods section is three sentences. One: this measurement sits outside the '
                    'conditions the certificate covers. Two: here is the interpolation we used. '
                    'Three: here is what another laboratory got on the same material with a '
                    'different instrument. The third one does more work than the other two put '
                    'together, because two instruments with different response curves agreeing '
                    'is the only evidence available about the term the chain cannot reach. And '
                    'if the other laboratory disagrees with you, that is not a disaster. That is '
                    'the single most valuable afternoon of the whole project, and you have had '
                    'it before a referee did. I would put the comparison in the plan at the '
                    'start rather than bolting it on when somebody asks.')],
        'items': [('What does the speaker say about the certificate she describes?',
                   ('It has expired',
                    'It is current, traceable and entirely in order',
                    'It was issued in error',
                    'It covers four wavelengths'),
                   1,
                   'She takes it seriously in order to show what it does not reach.'),
                  ('What does the figure in the paper depend on?',
                   ('The sensitivity at the three calibrated points',
                    'The sensitivity at a fourth wavelength',
                    'The offset',
                    'The noise floor'),
                   1,
                   'And no standard material exists at that wavelength.'),
                  ('Whose model is the interpolation?',
                   ('The national laboratory’s',
                    'The operator’s',
                    'The manufacturer’s',
                    'The referee’s'),
                   1,
                   'She says it is usually reasonable and almost never written down.'),
                  ('What does she say the honest answer to the referee is?',
                   ('No',
                    'Yes, and the useful answer is longer',
                    'That the question is wrong',
                    'That the certificate is unnecessary'),
                   1,
                   'The instrument was calibrated; the question that matters is a different '
                   'one.'),
                  ('Why does the third sentence do most of the work?',
                   ('It is the shortest',
                    'Two instruments with different response curves agreeing is the only '
                    'evidence about that term',
                    'Referees ask for it',
                    'It replaces the certificate'),
                   1,
                   'That is the reason she gives for ranking the three.')]},
 'w1': {'sub': 'Questions about equipment',
        'skill': ('Build a Sentence: questions a supplier cannot dodge',
                  ['Eight of the ten are questions, and the useful ones name the condition: '
                   'under what conditions, over what span, at what temperature.',
                   'An embedded question keeps statement order: do you know whether the '
                   'certificate covers this range.',
                   'Put the long phrase last. English carries weight at the end.']),
        'guided': [('The sheet quotes accuracy at twenty degrees only.',
                    ['know',
                     'do',
                     'you',
                     'whether',
                     'the figure',
                     'holds',
                     'at',
                     'our',
                     'bench temperature'],
                    'Do you know whether the figure holds at our bench temperature?'),
                   ('The certificate is three years old.',
                    ['does',
                     'the certificate',
                     'still',
                     'cover',
                     'the range',
                     'we',
                     'are',
                     'actually',
                     'using'],
                    'Does the certificate still cover the range we are actually using?'),
                   ('Two readings differ by one part in a thousand.',
                    ['is',
                     'that difference',
                     'larger',
                     'than',
                     'the repeatability',
                     'quoted',
                     'on',
                     'the',
                     'sheet'],
                    'Is that difference larger than the repeatability quoted on the sheet?')],
        'exam': [('The display shows five decimal places.',
                  ['which',
                   'of',
                   'those',
                   'places',
                   'does',
                   'the accuracy',
                   'figure',
                   'actually',
                   'reach'],
                  'Which of those places does the accuracy figure actually reach?'),
                 ('The supplier mentions a noise floor.',
                  ['can',
                   'you',
                   'tell',
                   'me',
                   'what',
                   'bandwidth',
                   'that figure',
                   'was',
                   'measured',
                   'over'],
                  'Can you tell me what bandwidth that figure was measured over?'),
                 ('The instrument was zeroed this morning.',
                  ['how',
                   'much',
                   'does',
                   'the zero',
                   'move',
                   'over',
                   'a working',
                   'day',
                   'in practice'],
                  'How much does the zero move over a working day in practice?'),
                 ('The sheet gives one accuracy figure for the whole span.',
                  ['do',
                   'you',
                   'know',
                   'whether',
                   'the figure',
                   'degrades',
                   'at',
                   'the bottom',
                   'of',
                   'the span'],
                  'Do you know whether the figure degrades at the bottom of the span?'),
                 ('Another laboratory reports a different value.',
                  ['has',
                   'anybody',
                   'run',
                   'the same',
                   'sample',
                   'through',
                   'both',
                   'instruments',
                   'yet'],
                  'Has anybody run the same sample through both instruments yet?'),
                 ('The reading depends on which way you approach the value.',
                  ['is',
                   'the hysteresis',
                   'included',
                   'in',
                   'the accuracy',
                   'figure',
                   'or',
                   'quoted',
                   'separately'],
                  'Is the hysteresis included in the accuracy figure, or quoted separately?'),
                 ('The signal is smoothed before display.',
                  ['I',
                   'would',
                   'like',
                   'to',
                   'see',
                   'the raw',
                   'output',
                   'before',
                   'any',
                   'smoothing'],
                  'I would like to see the raw output before any smoothing.')]},
 'w2': {'sub': 'Resolution is not accuracy',
        'to': 'metrology@uni.ac.uk',
        'date': '16/03/2029',
        'subject': 'Meter 4471 — the digits are my mistake, the span is not',
        'scenario': ['The Metrology Unit has replied to your complaint. You were wrong about the '
                     'moving digits: the accuracy figure reaches the fourth of six, so the fifth '
                     'and sixth are not a promise and your supervisor was right to say average. '
                     'You were not wrong about the other thing. Your samples sit at four per '
                     'cent of span, where the sheet says the figure degrades by about four '
                     'times, and three weeks of readings were taken there.',
                     'Write an email to the Metrology Unit.'],
        'bullets': ['Concede the digits in one sentence.',
                    'Set out the span problem and what it does to three weeks of readings.',
                    'Ask for one specific thing that would let you keep the work.'],
        'skill': ('Conceding one half and pressing the other',
                  ['Concede first, briefly and without apology. A long concession reads as '
                   'though the whole message is an apology.',
                   'Then set out the live problem with the number that makes it live.',
                   'Ask for one thing. A message with three requests gets the easiest one '
                   'answered.']),
        'model': ['Dear Metrology Unit,',
                  '',
                  'Thank you — you are right about the digits and so was my supervisor. The '
                  'accuracy figure reaches the fourth of six, so movement in the fifth and sixth '
                  'is not the instrument failing a promise it made, and averaging is the correct '
                  'response. I had read the resolution line as though it were an accuracy claim.',
                  '',
                  'The other half is not resolved, and I think it is more serious than my '
                  'original message made it sound. Our samples put the reading at about four per '
                  'cent of span. The loan sheet says the accuracy figure holds between ten and '
                  'ninety per cent and degrades by roughly a factor of four below that, which I '
                  'had not taken in. Three weeks of readings were taken in that region. On the '
                  'evidence available, every absolute value in that set carries an uncertainty '
                  'four times the one I have been quoting, and two of the comparisons I drew '
                  'between samples are inside it.',
                  '',
                  'What I would like is the loan of the 100 microlitre cell for a fortnight, '
                  'which would put the same samples at about forty per cent of span. If the '
                  'readings agree with the old ones inside the repeatability figure, the three '
                  'weeks stand and I will say so in the report. If they do not, I would rather '
                  'find that out now than defend it in June.',
                  '',
                  'I am not asking for the readings to be treated as sound because they were '
                  'expensive to take. It does not follow that a measurement is usable because a '
                  'student has spent three weeks on it, and I would rather lose the set than '
                  'report it with the wrong figure attached.',
                  '',
                  'With thanks,',
                  'Sunday Okonkwo'],
        'notes': ['The concession is three lines and contains no apology, which leaves the '
                  'reader looking at the real problem.',
                  'The span problem is quantified: four per cent, a factor of four, three weeks, '
                  'two comparisons inside the uncertainty.',
                  'One request, with the test it would settle and what the writer will do either '
                  'way.',
                  'The last paragraph refuses the argument the writer could most easily have '
                  'made, which is the thing that makes the rest credible.'],
        'bandpair': {'mid': ['Dear Metrology Unit,',
                             'Thank you very much for your very helpful reply, and I am sorry '
                             'for taking up your time with the question about the digits. I now '
                             'understand that the accuracy only goes to the fourth digit and '
                             'that the last two are not really meaningful, so my supervisor was '
                             'right and I should have listened to her in the first place.',
                             'However, I am now quite worried about something else. I have '
                             'realised that our samples are very small and the readings are near '
                             'the bottom of the range of the instrument, which the sheet says is '
                             'not as accurate. Unfortunately we have already taken about three '
                             'weeks of readings like this, which is a lot of work.',
                             'I was wondering whether there might be any possibility of '
                             'borrowing a smaller cell so that we could check some of the '
                             'readings, if that would not be too much trouble. Please let me '
                             'know if this would be possible and again I am sorry for the '
                             'confusion.',
                             'Best wishes, Sunday Okonkwo'],
                     'top': ['Dear Metrology Unit,',
                             'You are right about the digits, and so was my supervisor. The '
                             'accuracy figure reaches the fourth of six, so movement in the '
                             'fifth and sixth is not a broken promise, and averaging is the '
                             'right response.',
                             'The other half is live and worse than my first message suggested. '
                             'Our samples put the reading at four per cent of span. The sheet '
                             'holds the accuracy figure between ten and ninety and degrades it '
                             'by about four times below that. Three weeks of readings sit in '
                             'that region, so every absolute value carries four times the '
                             'uncertainty I have been quoting and two of my comparisons are '
                             'inside it.',
                             'Could I borrow the 100 microlitre cell for a fortnight? It puts '
                             'the same samples at about forty per cent of span. If the new '
                             'readings agree inside the repeatability figure, the three weeks '
                             'stand and I will say so. If they do not, I would rather know now '
                             'than in June.',
                             'I am not asking for the set to be trusted because it was expensive '
                             'to take. Three weeks of work is not an argument about accuracy.',
                             'Sunday Okonkwo'],
                     'diffs': ['It concedes in two lines with no apology, so the reader’s '
                               'attention goes to the part that is still open.',
                               'It quantifies the problem — four per cent, four times, three '
                               'weeks, two comparisons — where the middle answer says very small '
                               'and not as accurate.',
                               'It makes one request and states the test it would settle, so the '
                               'reply can be a single word.',
                               'It names the bad argument and refuses it, which is more '
                               'persuasive than any assurance the writer could give.',
                               'It drops the apologies and the wondering whether, which in the '
                               'middle answer take up a quarter of the message.']}},
 'w3': {'sub': 'When the instrument is the only one',
        'prof': 'Dr Halvorsen',
        'question': 'A research group reports a small feature in its data that no other '
                    'instrument in the world is capable of detecting. One referee says the '
                    'feature should not be published until a second instrument exists, because a '
                    'feature at that scale is exactly what an instrument invents. The group says '
                    'that rule would make every first observation unpublishable. Who is right?',
        'posts': [('Noor',
                   'w',
                   'The group. A rule that nothing can be published until it has been confirmed '
                   'elsewhere means no first result ever appears, and confirmation is not a '
                   'thing you can have before the second instrument is built.'),
                  ('Caleb',
                   'm',
                   'Noor has turned the referee into someone saying never publish. The objection '
                   'is narrower than that: features at the scale of an instrument’s own '
                   'behaviour are the ones most likely to be instrumental, and that is a claim '
                   'about this feature, not about first results in general.')],
        'skill': ('A question about publishing something nobody can check',
                  ['Noor argues from what the rule would do to science in general; Caleb from '
                   'the size of this particular feature.',
                   'The strongest answer is neither publish nor withhold but publish '
                   'differently, and the unit gives you the vocabulary for it.',
                   'Say what would have to appear beside the claim, not only whether the claim '
                   'should appear.']),
        'starters': ['Caleb is right that…, although what follows from it is…',
                     'The distinction worth drawing is between… and…',
                     'On the evidence available, the group should…',
                     'What would have to appear beside the figure is…'],
        'model': ['Caleb has the better reading of the referee and both of them treat the '
                  'question as publish or withhold, which is the choice that is not on offer. A '
                  'first observation can be published with the instrumental question open, and '
                  'the convention for doing so already exists in every field that runs a unique '
                  'apparatus.',
                  'Noor is right that the referee’s rule, taken literally, forbids first '
                  'results. It would be rash to conclude that the objection is therefore empty. '
                  'A feature at the scale of the instrument’s own noise floor is exactly where '
                  'artefacts live, and the referee is entitled to say so about this feature '
                  'without saying it about all of them.',
                  'So the group should publish, and publish three things beside the figure: the '
                  'raw output before any smoothing, the instrumental scale the feature should be '
                  'compared against, and the tests they ran to make it disappear. That last one '
                  'is the substance of the matter. A group that has tried six ways to produce '
                  'the feature artificially and failed has said something a referee can weigh; a '
                  'group that reports the feature alone has not. It does not follow that the '
                  'feature is real because it survived, and it does follow that the claim '
                  'becomes checkable, which is the most that can be asked while there is one '
                  'instrument in the world.'],
        'model_words': 225},
 'w4': {'sub': 'Resolution is not accuracy',
        'skill': ('Extraposition: putting the heavy part last',
                  ['It is widely held that… moves a long clause out of the subject position, '
                   'where English carries it badly.',
                   'The it is a placeholder and has no meaning. The real subject is the '
                   'that-clause at the end.',
                   'Use it when the subject is longer than the predicate. Otherwise write the '
                   'sentence the ordinary way.']),
        'guided': [('You want to report a common view without endorsing it.',
                    ['it',
                     'is',
                     'widely',
                     'held',
                     'that',
                     'a longer',
                     'display',
                     'means',
                     'a better',
                     'instrument'],
                    'It is widely held that a longer display means a better instrument.'),
                   ('You want to block an inference.',
                    ['it',
                     'does',
                     'not',
                     'follow',
                     'that',
                     'a repeatable',
                     'reading',
                     'is',
                     'an accurate',
                     'one'],
                    'It does not follow that a repeatable reading is an accurate one.'),
                   ('You want a heavy subject moved to the end.',
                    ['it',
                     'is',
                     'the',
                     'sensitivity',
                     'that',
                     'a certificate',
                     'bounds',
                     'and',
                     'nothing',
                     'else'],
                    'It is the sensitivity that a certificate bounds, and nothing else.')],
        'exam': [('You want to warn without refusing.',
                  ['it',
                   'would',
                   'be',
                   'rash',
                   'to',
                   'publish',
                   'a feature',
                   'at',
                   'the noise',
                   'floor'],
                  'It would be rash to publish a feature at the noise floor.'),
                 ('You want to extrapose a long clause.',
                  ['it',
                   'is',
                   'unfortunate',
                   'that',
                   'the interpolation',
                   'is',
                   'almost',
                   'never',
                   'written',
                   'down'],
                  'It is unfortunate that the interpolation is almost never written down.'),
                 ('You want to put the condition at the end.',
                  ['it',
                   'is',
                   'clear',
                   'from',
                   'the sheet',
                   'that',
                   'the figure',
                   'degrades',
                   'below',
                   'ten',
                   'per cent'],
                  'It is clear from the sheet that the figure degrades below ten per cent.'),
                 ('You want to report a limit on what is known.',
                  ['so far as',
                   'anybody',
                   'knows',
                   'no',
                   'referee',
                   'had',
                   'asked',
                   'for',
                   'the',
                   'list'],
                  'So far as anybody knows, no referee had asked for the list.'),
                 ('You want to extrapose with an infinitive.',
                  ['it',
                   'is',
                   'difficult',
                   'to',
                   'discern',
                   'an artefact',
                   'that',
                   'is',
                   'perfectly',
                   'repeatable'],
                  'It is difficult to discern an artefact that is perfectly repeatable.')]},
 'w5': {'sub': 'When the instrument is the only one',
        'prof': 'Dr Ferraz',
        'question': 'A journal is considering a rule that any measurement taken outside the '
                    'conditions a calibration certificate covers must declare that fact and name '
                    'the interpolation used. Editors object that almost every paper in some '
                    'fields would carry the declaration, so it would convey nothing. Should the '
                    'journal adopt it?',
        'posts': [('Mireia',
                   'w',
                   'Adopt it. A declaration that appears on almost every paper still tells a '
                   'reader which papers are the exception, and the ones that do not carry it '
                   'become the interesting ones.'),
                  ('Anselm',
                   'm',
                   'A requirement everybody satisfies identically is a formality within two '
                   'years. What would actually change anything is requiring the interlaboratory '
                   'comparison, which the second passage says does more than the declaration '
                   'anyway.')],
        'skill': ('A question about a disclosure that would be near-universal',
                  ['Mireia argues from the information in the exceptions; Anselm from what a '
                   'universal requirement becomes.',
                   'The second passage ranks the three practices, which bears directly on '
                   'Anselm’s alternative.',
                   'A strong answer takes the ranking seriously and still says what to do about '
                   'cost.']),
        'starters': ['Anselm is right that…, although the comparison he proposes…',
                     'The distinction worth drawing is between… and…',
                     'On the evidence available the journal should…',
                     'What that gives up is…'],
        'model': ['Anselm is right about the ranking and has not priced his own proposal. An '
                  'interlaboratory comparison requires a second instrument, a second laboratory '
                  'willing to run the same material, and a month; a declaration requires two '
                  'sentences and an afternoon of honesty. A rule that demands the first will be '
                  'met by the groups that can afford it and evaded by the rest, which is a worse '
                  'outcome than a formality.',
                  'Mireia is right that the exceptions carry information and she overstates how '
                  'much. A reader cannot tell, from the absence of a declaration, whether the '
                  'measurement was inside the certified conditions or the authors did not check, '
                  'and those two are precisely the cases the rule exists to separate.',
                  'So the journal should adopt the declaration and require the comparison only '
                  'where the claim rests on a quantity no standard realises, which is the narrow '
                  'case the second passage is actually about and a small fraction of what either '
                  'of them is arguing over. What that gives up is uniformity, since two papers '
                  'in the same issue will be held to different requirements and somebody will '
                  'call the distinction arbitrary. It is not arbitrary but proportionate, and '
                  'the editors are entitled to ask who draws the line and on what evidence, '
                  'which is a question about the wording of the rule rather than about whether '
                  'to have one. The alternative is either a formality that costs nothing and '
                  'changes nothing, or a requirement that quietly selects for the laboratories '
                  'with a second instrument down the corridor.'],
        'model_words': 257},
 'sp': [{'sub': 'Reading a specification',
         'focus': 'naming the condition a figure holds under',
         'skill': ('That figure holds at twenty degrees, and our bench is at twenty-six',
                   ['Say the figure, then the condition, then the mismatch. Three parts, in that '
                    'order.',
                    'Stress the condition rather than the figure: the figure is not in dispute.',
                    'Keep the pause before and short, so the mismatch does not sound like an '
                    'accusation.']),
         'repeat': ['That is the resolution.',
                    'It is not the accuracy.',
                    'There is no certificate with it.',
                    'The figure holds at twenty degrees only.',
                    'Our bench runs at twenty-six all afternoon.',
                    'Give the difference rather than either number.',
                    'A report with five decimal places and no conditions is the one nobody will '
                    'believe.'],
         'theme': 'equipment you have had to trust',
         'qs': ['Tell me about a piece of equipment you had to rely on. How did you know what it '
                'could do?',
                'Some people say a figure with more decimal places is more trustworthy. How far '
                'would you agree?',
                'How would you explain to a friend the difference between accuracy and '
                'repeatability?',
                'Finally, describe a time a measurement turned out to be wrong.'],
         'model': [(2,
                    'I would say the opposite, and the reason is in this unit. Extra places cost '
                    'the maker almost nothing, and a better sensor costs a great deal, so the '
                    'places are usually the cheap half of the instrument.'),
                   (3,
                    'Accuracy is how close you are to the truth. Repeatability is how close you '
                    'are to yourself. You can be perfectly repeatable and wrong by the same '
                    'amount every single time.')],
         'selfcheck': ['I gave the figure, the condition and the mismatch in order',
                       'I stressed the condition rather than the figure',
                       'I used at least two of the unit’s field words']},
        {'sub': 'Resolution is not accuracy',
         'focus': 'putting the heavy clause at the end',
         'skill': ('It is widely held that a longer display means a better instrument',
                   ['Start with it is, and do not pause after it. The placeholder carries no '
                    'stress at all.',
                    'Land the stress inside the that-clause, on the word that does the work.',
                    'If the sentence sounds odd, your subject was short enough to go first.']),
         'repeat': ['A ruler cannot establish its own length.',
                    'It is widely held that resolution is accuracy.',
                    'The offset is what it reads with nothing connected.',
                    'It does not follow that a repeatable reading is accurate.',
                    'Noise comes down as the square root of the readings.',
                    'Four terms, and one of them is about your sample.',
                    'It would be rash to publish a feature at the scale of the instrument’s own '
                    'noise floor.'],
         'theme': 'explaining something technical to somebody outside it',
         'qs': ['Tell me about a time you had to explain something technical to somebody. What '
                'was hardest?',
                'Some people say technical language is a way of excluding people. How far would '
                'you agree?',
                'How would you explain to a friend why zeroing an instrument matters?',
                'Finally, describe a piece of equipment whose limits surprised you.'],
         'model': [(2,
                    'I would separate two things there. Some technical language is a barrier and '
                    'most of it is compression, and the test is whether a term can be replaced '
                    'by a short phrase without losing anything. Usually it cannot.'),
                   (3,
                    'I would say the instrument adds a fixed amount to everything it reads, so '
                    'you measure that amount with nothing connected and subtract it. If you skip '
                    'it, every reading you take is wrong by the same invisible amount.')],
         'selfcheck': ['I did not pause after it is',
                       'I put the stress inside the that-clause',
                       'I used at least two of the unit’s field words']},
        {'sub': 'When the instrument is the only one',
         'focus': 'reporting what you did to disprove your own result',
         'skill': ('We tried four ways to produce it artificially and could not',
                   ['Say the number of attempts first. It is the part a listener weighs.',
                    'List the attempts in a flat tone. Enthusiasm here sounds like advocacy.',
                    'End on what you still cannot rule out, which is what makes the rest '
                    'credible.']),
         'repeat': ['None of them worked.',
                    'Then a technician replaced a cable.',
                    'We tried four ways to produce it.',
                    'Repeatability is not evidence of anything except repeatability.',
                    'We published the four tests as well as the correction.',
                    'The cable ran past a pump that cycled twice a day.',
                    'So far as anybody knows, no referee had asked for the list of things that '
                    'failed.'],
         'theme': 'testing your own idea before defending it',
         'qs': ['Tell me about a time you tried to prove yourself wrong. What happened?',
                'Some people think you should defend your work and let others attack it. What do '
                'you think?',
                'How should a researcher report the tests that failed?',
                'Finally, describe a mistake that only showed up by accident.'],
         'model': [(2,
                    'I think that arrangement wastes everybody’s time. If I have not tried to '
                    'break my own result, somebody else will do it in public, and they will do '
                    'it worse because they know the apparatus less well than I do.'),
                   (3,
                    'Plainly and in a list, with what each test was meant to rule out. The '
                    'useful paragraph in that paper was the one nobody had asked for.')],
         'selfcheck': ['I gave the number of attempts first',
                       'I listed them without advocacy',
                       'I ended on what I still could not rule out']},
        {'sub': 'Resolution is not accuracy',
         'focus': 'separating what belongs to the world from what belongs to the apparatus',
         'skill': ('One of those four terms is about your sample. Three are about a box.',
                   ['Say the count, then the split. A listener who hears only the split does not '
                    'know how many were left out.',
                    'Stress sample and box, which is the contrast the sentence exists for.',
                    'Keep it to two sentences. A third invites a list.']),
         'repeat': ['The certificate bounds the sensitivity.',
                    'An instrument cannot establish its own sensitivity.',
                    'The other three are facts about a box.',
                    'Only one of the four is about the sample.',
                    'It does not touch the offset or the noise.',
                    'The measurement sits outside the conditions the certificate covers.',
                    'A figure reported without its conditions is a property of an apparatus '
                    'dressed as a property of the world.'],
         'theme': 'telling apart what you measured and how you measured it',
         'qs': ['Tell me about a result that turned out to depend on how it was measured. What '
                'gave it away?',
                'Some people say a number is a number, whoever took it. How far would you agree?',
                'How would you explain to a friend what a calibration certificate is for?',
                'Finally, describe something you now check that you used not to.'],
         'model': [(2,
                    'I would disagree, for the reason this unit gives. A reading contains the '
                    'quantity and the instrument together, and without the conditions a reader '
                    'cannot separate them, so the same figure from two benches can mean '
                    'different things.'),
                   (3,
                    'It fixes one term out of four. It tells you the factor the instrument '
                    'multiplies by, under stated conditions, and it says nothing at all about '
                    'the two terms you were supposed to deal with yourself.')],
         'selfcheck': ['I gave the count before the split',
                       'I stressed the contrast between sample and apparatus',
                       'I kept it to two sentences']},
        {'sub': 'When the instrument is the only one',
         'focus': 'narrowing a guarantee without dismissing it',
         'skill': ('The certificate is entirely in order, and it covers three wavelengths',
                   ['Grant the document in full first, at normal speed.',
                    'Then give the narrowing with a number in it. A number makes it a finding '
                    'rather than a complaint.',
                    'Do not end on the complaint. End on what would close the gap.']),
         'repeat': ['The certificate is current and traceable.',
                    'It was obtained at three wavelengths.',
                    'The measurement is at a fourth.',
                    'That model belongs to the operator.',
                    'The step between them is an interpolation.',
                    'It is reasonable, and it is never written down.',
                    'What closes the gap is another laboratory, with a different response curve, '
                    'on the same material.'],
         'theme': 'a guarantee that covers less than people assume',
         'qs': ['Tell me about a guarantee or a rule that covered less than people assumed. Who '
                'found out?',
                'Some people think a document either covers you or it does not. What do you '
                'think?',
                'How should somebody report a measurement made outside the conditions they can '
                'vouch for?',
                'Finally, describe a time reading the small print changed what you did.'],
         'model': [(2,
                    'I think that is where most of the trouble comes from. A document covers a '
                    'set of conditions, and the interesting cases are always just outside it, '
                    'which is exactly where people stop reading.'),
                   (3,
                    'Say it is outside, name the assumption that bridges the gap, and report '
                    'what somebody else got on the same material with different equipment.')],
         'selfcheck': ['I granted the document in full first',
                       'I put a number in the narrowing',
                       'I ended on what would close the gap']}],
 'gram': {'title': 'Extraposition: it-clauses and end weight',
          'headers': ['Pattern', 'Example'],
          'rows': [('it is + adjective + that',
                    'it is clear that the figure degrades below ten per cent'),
                   ('it is + adverb + participle + that',
                    'it is widely held that resolution is accuracy'),
                   ('it + verb + not + follow + that',
                    'it does not follow that a repeatable reading is accurate'),
                   ('it is + adjective + to + verb',
                    'it is difficult to discern a repeatable artefact'),
                   ('it is + noun phrase + that',
                    'it is the sensitivity that a certificate bounds'),
                   ('it + takes / seems / appears + that',
                    'it appears that the cable ran past a pump'),
                   ('fronted limit + clause',
                    'so far as anybody knows, no referee asked for the list')],
          'notes': ['The it in all of these is a placeholder with no meaning. The real subject '
                    'is the clause at the end, and the test for whether to use the pattern is '
                    'simple: if the subject is longer than everything else in the sentence, '
                    'extrapose it.',
                    'It is widely held that reports a view without endorsing it, and that is its '
                    'whole value. A writer who means I think should write I think.',
                    'It does not follow that is the most useful of these at this level. It lets '
                    'you accept a premise and block a conclusion in one sentence, which is the '
                    'commonest move in an academic objection.'],
          'watch': 'Do not extrapose a short subject. "It is true that the meter is old" is '
                   'weaker than "The meter is old", and a reader notices the padding before the '
                   'claim.',
          'ex': [('Rewrite with extraposition.',
                  ['That a repeatable reading can be wrong is not obvious.',
                   'That the interpolation is never stated is unfortunate.',
                   'To discern a repeatable artefact is difficult.',
                   'That the figure degrades below ten per cent is clear from the sheet.',
                   'That no referee asked for the list is surprising.',
                   'To publish a feature at the noise floor would be rash.'],
                  ['It is not obvious that a repeatable reading can be wrong.',
                   'It is unfortunate that the interpolation is never stated.',
                   'It is difficult to discern a repeatable artefact.',
                   'It is clear from the sheet that the figure degrades below ten per cent.',
                   'It is surprising that no referee asked for the list.',
                   'It would be rash to publish a feature at the noise floor.']),
                 ('Choose the stance marker the sentence needs.',
                  ['______ widely held that resolution is accuracy.',
                   'It ______ not follow that the reading is accurate.',
                   '______ far as anybody knows, the cable was never checked.',
                   'It would be ______ to publish without the raw output.',
                   '______ the evidence available, the feature is instrumental.',
                   'It is the sensitivity ______ a certificate bounds.'],
                  ['It is', 'does', 'So', 'rash', 'On', 'that']),
                 ('Correct the extraposition error.',
                  ['It is true that the meter is old.',
                   'It does not follow the reading is accurate.',
                   'It is widely held resolution is accuracy.',
                   'It is difficult discerning a repeatable artefact.'],
                  ['The meter is old.',
                   'It does not follow that the reading is accurate.',
                   'It is widely held that resolution is accuracy.',
                   'It is difficult to discern a repeatable artefact.'])],
          'bas': 'Build a Sentence in this unit asks for questions a supplier cannot answer '
                 'evasively. The useful ones name the condition: at what temperature, over what '
                 'span, measured over what bandwidth. Put that phrase last.'},
 'fault': {'text': 'It is true that the meter is old. It does not follow the reading is '
                   'accurate. It is widely held resolution is accuracy, and so far anybody knows '
                   'nobody has checked the cable. It is difficult discerning a repeatable '
                   'artefact. Do you know whether has the certificate expired?',
           'faults': [('It is true that the meter is old.',
                       'The meter is old.',
                       'A short subject does not need extraposition, and a reader sees the '
                       'padding before the claim.'),
                      ('It does not follow the reading is accurate',
                       'It does not follow that the reading is accurate',
                       'The extraposed clause needs its that, which is the only thing marking it '
                       'as the real subject.'),
                      ('It is widely held resolution is accuracy',
                       'It is widely held that resolution is accuracy',
                       'The same omission again: without that, the reader takes resolution as '
                       'the object of held.'),
                      ('so far anybody knows',
                       'so far as anybody knows',
                       'The expression is so far as, and dropping the as leaves a phrase that '
                       'means nothing.'),
                      ('It is difficult discerning a repeatable artefact',
                       'It is difficult to discern a repeatable artefact',
                       'Extraposition with an adjective takes an infinitive, not an -ing form.'),
                      ('whether has the certificate expired',
                       'whether the certificate has expired',
                       'An embedded question keeps statement order and does not invert the '
                       'verb.')]},
 'rev': {'vocab': [('how close a reading is to the true value', 'accuracy'),
                   ('how close repeated readings are to each other', 'repeatability'),
                   ('a reading that depends on which way the input moved', 'hysteresis'),
                   ('linked by an unbroken chain to a national standard', 'traceable'),
                   ('the value an instrument displays, before correction', 'indication'),
                   ('setting the reading to zero with no input applied', 'zeroing'),
                   ('produced by the apparatus rather than the sample', 'instrumental'),
                   ('a false low frequency produced by sampling too slowly', 'aliasing'),
                   ('between two or more separate laboratories', 'interlaboratory'),
                   ('to find out with certainty', 'ascertain'),
                   ('justified by what is actually known', 'warranted'),
                   ('bearing on the question actually in hand', 'pertinent')],
         'gram': [('______ is widely held that resolution is accuracy.', 'It'),
                  ('It does not follow ______ the reading is accurate.', 'that'),
                  ('______ far as anybody knows, nobody checked the cable.', 'So'),
                  ('It would be ______ to publish at the noise floor.', 'rash'),
                  ('It is difficult ______ discern a repeatable artefact.', 'to'),
                  ('It is the sensitivity ______ a certificate bounds.', 'that'),
                  ('______ the evidence available, the feature is instrumental.', 'On'),
                  ('Do you know whether the certificate ______ expired?', 'has')],
         'mini': [('An instrument that is consistently wrong by the same amount is',
                   ('inaccurate but repeatable',
                    'accurate but not repeatable',
                    'neither accurate nor repeatable',
                    'out of specification'),
                   0,
                   'Repeatability is closeness to itself, and it is entirely compatible with '
                   'being wrong every time.'),
                  ('Resolution is a property of',
                   ('the sample', 'the display', 'the standard', 'the certificate'),
                   1,
                   'It is the smallest step the display can show and says nothing about '
                   'closeness to the truth.'),
                  ('A calibration certificate bounds',
                   ('the offset', 'the noise', 'the sensitivity', 'all three'),
                   2,
                   'The offset is removed by zeroing and the noise by averaging; the sensitivity '
                   'is the term that needs a standard.'),
                  ('Averaging four times as many readings reduces noise by a factor of about',
                   ('four', 'two', 'sixteen', 'one'),
                   1,
                   'Noise falls as the square root of the number of readings.'),
                  ('An artefact is a feature produced by',
                   ('the sample', 'the apparatus', 'the operator', 'the standard'),
                   1,
                   'That is what distinguishes it from a signal, which is in the sample.'),
                  ('In the cable case, what finally identified the artefact?',
                   ('Averaging for longer',
                    'A technician replacing a damaged cable',
                    'An interlaboratory comparison',
                    'A new certificate'),
                   1,
                   'The cable ran past a pump that cycled twice a day, which matched the '
                   'twelve-hour period.')]},
 'tip': 'Volume 5 finishes B2 and the passages from here on are longer than the ones in the real '
        'test. That is deliberate. Reading speed is built above the distance you race, and a '
        'candidate who is comfortable with 400 words finds 280 easy. Do not shorten them, and do '
        'not read them twice before answering — the test will not let you.'}

