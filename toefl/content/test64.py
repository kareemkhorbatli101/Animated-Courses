# -*- coding: utf-8 -*-
"""Timed Form 4 — the last of the four further forms carried by Volume 6."""
from content._g import gaps

_G1, _A1 = gaps(
    'A document is evidence of its own making before it is evidence of '
    'anything e{lse}. A survey drawn up to settle a dispute about water is '
    'first rate evidence of a dispute about water and poor evidence of the '
    'date of the mill it ment{ions}, because every figure in it is a figure '
    'somebody wanted on rec{ord}. What historians prize instead is the '
    'indiff{erent} record: a register of baptisms kept for the parish, a '
    'list of tolls kept for the revenue, a ledger nobody expected anybody to '
    're{ad}. Such a source has no interest in the question you are putting to '
    'it, which is precisely why its answer can be tr{usted}. The second rule '
    'follows from the first. What survives is not a sample of the past but '
    'the resi{due} of its administration, retained by institutions with '
    'purposes of their own, so that litigation leaves a long trail and '
    'contentment leaves no{ne}. A silence in an archive is accordingly a '
    'shape rather than a g{ap}, and reading it as an absence of the thing is '
    'the commonest mist{ake} in the subject.')

_G2, _A2 = gaps(
    'Nobody has an instrument that detects awareness. What a hospital detects '
    'is resp{onse}, and an inference is then drawn from the response, and '
    'the inference is exactly what is in doubt in the difficult cases. The '
    'distinction matters because a score of zero on a behavioural scale is '
    'read, by families and by staff, as a finding that nobody is th{ere}, '
    'when it is a failure to det{ect} and nothing more. A scan may do better '
    'and does not do better in the way people suppose: a patient who follows '
    'an instruction inside the machine has established that she understood '
    'the langu{age}, held the instruction in m{ind} and sustained a '
    'voluntary act, which is decisive about h{er}. A patient who produces '
    'nothing has established nothing at all, since the task requires '
    'attention and one particular kind of imag{ery}, either of which may '
    'f{ail} in somebody entirely aware. The honest report names the method '
    'and its pow{er}. The dishonest one names a conclu{sion}.')

_P1 = [
    'The experiment conducted by Michelson and Morley at Cleveland in 1887 '
    'was designed to measure the motion of the earth through the medium in '
    'which light was then held to travel. The apparatus divided a beam, sent '
    'the halves along perpendicular arms, and recombined them; a difference '
    'in the time taken by the two halves would shift the interference '
    'pattern, and the earth moving through a stationary medium had to '
    'produce such a difference. The instrument was mounted on a stone block '
    'floating in mercury so that it could be rotated without strain.',
    'The expected shift was about four hundredths of a fringe and the '
    'apparatus could detect a hundredth. No shift was observed at any '
    'orientation or at any season. The result was described by its authors '
    'as a failure, which is the correct description of an experiment that '
    'set out to measure a quantity and did not find it, and the figure was '
    'taken up for the next eighteen years as a problem rather than as a '
    'discovery.',
    'Three responses were advanced. The medium might be dragged along by the '
    'earth; bodies moving through it might contract in the direction of '
    'motion by exactly the amount required; or the medium might not exist. '
    'The second was proposed as a device and later derived from the third, '
    'which is the unusual feature of the episode: a null result sat in the '
    'literature for a generation, acknowledged by everybody and explained by '
    'nobody, until a theory arrived that required it. Nothing about the '
    'measurement changed in 1905. Its status did.',
]

_P2 = [
    'The Aral Sea was the fourth largest lake on earth in 1960 and had lost '
    'nine tenths of its volume by 2010. The cause is not disputed and was '
    'never concealed: the two rivers feeding it were diverted from the '
    'nineteen sixties to irrigate cotton across the plains of Central Asia, '
    'and the planners who ordered the diversion wrote down what they '
    'expected to happen to the lake.',
    'That record is what makes the case unusual. The loss of the sea was '
    'anticipated in the planning documents and accepted as the price of the '
    'cotton, on an argument that was explicit and not obviously absurd: a '
    'lake that evaporates in a desert produces nothing, and the water '
    'diverted onto fields produces a crop a nation could sell. What the '
    'documents did not anticipate was the salt. As the water fell the '
    'remaining lake grew saline, the fishery of twenty-four species '
    'collapsed to four, and the dried bed became a source of salt and '
    'pesticide dust that the wind distributes across the farmland the '
    'diversion was built to serve.',
    'Two lessons are drawn and only one of them is sound. The case is '
    'commonly cited as a failure to foresee a consequence, and the archive '
    'shows that the principal consequence was foreseen and priced. What was '
    'not foreseen is the mechanism that returned the damage to the '
    'beneficiary, which is a different kind of error and a commoner one: the '
    'calculation was correct, the accounting was honest, and the boundary '
    'drawn around the problem excluded the one pathway that mattered.',
]

TEST = dict(
    n=64, form='4',

    reading=[
        dict(
            gap_text=_G1, gap_ans=_A1,
            docs=[
                ('notice', 'Marchfield University Library · '
                           'digitisation and access, programme 7', [
                    '# What is being digitised',
                    'The estate papers of four local families, 1540 to 1890, '
                    'and the complete run of the county newspaper to 1920.',
                    '# Access to the images',
                    '* Free to any reader with a library card, in the '
                    'reading room or at home.',
                    '* Commercial reuse by licence, at a fee set '
                    'annually.',
                    '# Access to the originals',
                    '* Once an item is digitised the original is produced '
                    'only where the image cannot answer the question, on '
                    'application to the archivist.',
                    '# What is not being digitised',
                    '* Material under copyright held outside the university, '
                    'and the parish registers, which belong to the '
                    'diocese.',
                    '# Publication',
                    '* A list of items digitised and items refused is '
                    'published each quarter.'],
                 'notice'),
                ('email',
                 'h.brennan@marchfield.ac.uk',
                 'library@marchfield.ac.uk',
                 '07/02/2037',
                 'Programme 7 — free access is right and the rule about '
                 'originals will defeat it',
                 ['Dear colleagues,',
                  '',
                  'Free access at home and the quarterly list of refusals',
                  'are both better than any neighbouring institution offers,',
                  'and I would not lose either of them.',
                  '',
                  'My objection is to the rule about originals. An image',
                  'answers a question about content and cannot answer a',
                  'question about the object: the watermark, the ruling, the',
                  'order of the hands, whether two leaves were once one. Of',
                  'the 61 applications to see an original last year, 54 were',
                  'refused on the ground that the image was adequate, and',
                  'the reason given in 49 of those 54 was a reason about',
                  'content.',
                  '',
                  'I am not asking for the rule to be dropped, since every',
                  'production costs the collection something. I am asking for',
                  'one clause: an application stating a question about the',
                  'object rather than the text is granted without further',
                  'argument. On last year’s figures that is about',
                  'eleven productions a year, which is four a term and one',
                  'morning of an archivist’s time.',
                  '',
                  'Hendrika Brennan, Reader in Economic History']),
            ],
            daily=[
                ('What is being digitised under programme 7?',
                 ('The parish registers',
                  'The estate papers of four families to 1890 and the county '
                  'newspaper to 1920',
                  'All material held by the library',
                  'Only the newspaper'), 1,
                 'The parish registers belong to the diocese and are '
                 'excluded.'),
                ('Who may see the images?',
                 ('Readers in the reading room only',
                  'Any reader with a library card, in the room or at home',
                  'Commercial licensees only',
                  'Staff of the university'), 1,
                 'Commercial reuse requires a licence at an annual '
                 'fee.'),
                ('When is an original produced after digitisation?',
                 ('On request, without conditions',
                  'Only where the image cannot answer the question, on '
                  'application',
                  'Never',
                  'Once a term'), 1,
                 'The application goes to the archivist.'),
                ('What is published each quarter?',
                 ('The licence fees',
                  'A list of items digitised and items refused',
                  'The applications to see originals',
                  'Nothing is published'), 1,
                 'The email calls it better than any neighbouring '
                 'institution offers.'),
                ('What does Hendrika Brennan propose?',
                 ('Dropping the rule about originals',
                  'Granting an application that states a question about the '
                  'object rather than the text',
                  'Digitising the parish registers',
                  'Raising the licence fee'), 1,
                 'About eleven productions a year, or four a term.'),
            ],
            passage=('The Experiment That Measured Nothing', _P1,
                     sum(len(p.split()) for p in _P1)),
            academic=[
                ('What was the 1887 experiment designed to measure?',
                 ('The speed of light',
                  'The motion of the earth through the medium in which light '
                  'was held to travel',
                  'The density of mercury',
                  'The width of an interference fringe'), 1,
                 'A difference in the time taken by the two halves would '
                 'shift the pattern.'),
                ('Why was the apparatus floated in mercury?',
                 ('To keep it cool',
                  'So that it could be rotated without strain',
                  'To isolate it from light',
                  'To measure its weight'), 1,
                 'The instrument was mounted on a stone block for the same '
                 'reason.'),
                ('How did the expected shift compare with what the apparatus '
                 'could detect?',
                 ('The shift was smaller than the sensitivity',
                  'The expected shift was about four hundredths and the '
                  'apparatus could detect a hundredth',
                  'The two were equal',
                  'Neither figure is given'), 1,
                 'No shift was observed at any orientation or season.'),
                ('How did the authors describe their result?',
                 ('As a discovery',
                  'As a failure',
                  'As inconclusive',
                  'As a confirmation'), 1,
                 'Which the writer calls the correct description of such an '
                 'experiment.'),
                ('What does the writer call the unusual feature of the '
                 'episode?',
                 ('The size of the apparatus',
                  'That a null result sat acknowledged and unexplained for a '
                  'generation until a theory required it',
                  'That the result was disputed',
                  'That the medium was never named'), 1,
                 'Nothing about the measurement changed in 1905, and its '
                 'status did.'),
            ],
        ),
        dict(
            gap_text=_G2, gap_ans=_A2,
            docs=[
                ('notice', 'Tarnbrook Water · abstraction licence '
                           'review, catchment of the Marr', [
                    '# What is being reviewed',
                    'All licences to abstract more than 20 cubic metres a '
                    'day from the Marr and its tributaries.',
                    '# The new condition',
                    '* Abstraction ceases where the gauged flow at '
                    'Alderton falls below 0.9 cubic metres a second.',
                    '# Who is protected',
                    '* Public water supply and livestock drinking water are '
                    'exempt from the condition.',
                    '# Compensation',
                    '* None. The licences were granted subject to review '
                    'and the condition is within the existing terms.',
                    '# Appeal',
                    '* To the national regulator within 28 days, on the '
                    'ground of the gauge record only.'],
                 'notice'),
                ('email',
                 'p.vasquez@tarnbrook-water.co.uk',
                 'licensing@tarnbrook-water.co.uk',
                 '03/05/2038',
                 'Abstraction review — the threshold is right and the '
                 'gauge is in the wrong place',
                 ['Dear colleagues,',
                  '',
                  'A hands-off flow is the right instrument and 0.9 cubic',
                  'metres a second is defensible on the ecological evidence.',
                  'The exemption for livestock is also right and will save us',
                  'a hundred arguments.',
                  '',
                  'My objection is to the gauge. Alderton is 14 kilometres',
                  'below the confluence, so it measures a flow that includes',
                  'the Brack, which no licence in this review touches. In the',
                  'dry summer of 2035 the Marr above the confluence fell to',
                  '0.4 while Alderton read 1.1, so every licence in the',
                  'review would have continued abstracting from a river at',
                  'less than half the protected flow.',
                  '',
                  'I am not asking for the threshold to be lowered or for the',
                  'review to be delayed. I am asking that the condition be',
                  'measured at Hesketh Bridge, which is above the confluence',
                  'and has a continuous record since 1974. That is a change',
                  'of one place name in the licence, and it is the difference',
                  'between a condition that protects the river and one that',
                  'protects the paperwork.',
                  '',
                  'Paloma Vasquez, Catchment Hydrologist']),
            ],
            daily=[
                ('Which licences are being reviewed?',
                 ('All licences in the county',
                  'Licences to abstract more than 20 cubic metres a day from '
                  'the Marr and its tributaries',
                  'Public water supply licences',
                  'Only licences granted since 1974'), 1,
                 'The threshold of twenty cubic metres a day defines the '
                 'review.'),
                ('What is the new condition?',
                 ('A reduction of every licence by a tenth',
                  'Abstraction ceases where the gauged flow at Alderton '
                  'falls below 0.9 cubic metres a second',
                  'A fee for every cubic metre',
                  'An annual report from each licensee'), 1,
                 'The email calls the instrument right and the gauge '
                 'wrong.'),
                ('Who is exempt from the condition?',
                 ('Nobody',
                  'Public water supply and livestock drinking water',
                  'Farms above the confluence',
                  'Licences under appeal'), 1,
                 'The exemption for livestock is one the email '
                 'endorses.'),
                ('What compensation is offered?',
                 ('A payment for each day of cessation',
                  'None, since the licences were granted subject to review',
                  'A reduction in the licence fee',
                  'The notice does not say'), 1,
                 'The condition is said to be within the existing '
                 'terms.'),
                ('What does Paloma Vasquez propose?',
                 ('Lowering the threshold',
                  'Measuring the condition at Hesketh Bridge, above the '
                  'confluence',
                  'Delaying the review',
                  'Exempting the farms'), 1,
                 'A change of one place name in the licence, in her '
                 'phrase.'),
            ],
            passage=('The Sea That Was Spent on Purpose', _P2,
                     sum(len(p.split()) for p in _P2)),
            academic=[
                ('How much of its volume had the Aral Sea lost by 2010?',
                 ('A tenth', 'Half', 'Nine tenths', 'All of it'), 2,
                 'It had been the fourth largest lake on earth in '
                 '1960.'),
                ('What does the writer say about the cause?',
                 ('It is disputed',
                  'It is not disputed and was never concealed',
                  'It remains unknown',
                  'It was a change of climate'), 1,
                 'The planners wrote down what they expected to happen to '
                 'the lake.'),
                ('What argument was the loss accepted on?',
                 ('That the lake was already shrinking',
                  'That a lake evaporating in a desert produces nothing and '
                  'the water on fields produces a crop',
                  'That the fishery was worthless',
                  'That the rivers would be restored'), 1,
                 'The writer calls the argument explicit and not obviously '
                 'absurd.'),
                ('What did the documents not anticipate?',
                 ('The diversion of the rivers',
                  'The loss of the lake',
                  'The salt',
                  'The cotton yield'), 2,
                 'The fishery collapsed from twenty-four species to four and '
                 'the bed became a source of dust.'),
                ('What does the writer say the real error was?',
                 ('A failure to foresee the principal consequence',
                  'A boundary drawn around the problem that excluded the one '
                  'pathway that mattered',
                  'A mistake in the arithmetic',
                  'Dishonest accounting'), 1,
                 'The calculation was correct and the accounting '
                 'honest.'),
            ],
        ),
    ],

    listening=[
        dict(
            warm=[
                ('Woman: Can I see the original once it is digitised?',
                 ('Only where the image cannot answer your question.',
                  'Yes, on request.', 'No, never.',
                  'Sixty-one applications.'), 0,
                 'The application goes to the archivist and most are '
                 'refused.'),
                ('Woman: What sort of question needs the original?',
                 ('A watermark, the ruling, the order of the hands.',
                  'Anything about the content.', 'None does.',
                  'Four a term.'), 0,
                 'An image answers a question about content and not about '
                 'the object.'),
                ('Man: How many applications were refused last year?',
                 ('Fifty-four of sixty-one.', 'Eleven.',
                  'None were refused.', 'Forty-nine.'), 0,
                 'And in forty-nine of the fifty-four the reason given was '
                 'about content.'),
                ('Man: Are the parish registers included?',
                 ('No. They belong to the diocese.',
                  'Yes, from 1540.', 'Only to 1890.',
                  'Under copyright.'), 0,
                 'Material under outside copyright is excluded for the same '
                 'kind of reason.'),
                ('Woman: Does the gauge at Alderton measure the Marr?',
                 ('It measures the Marr and the Brack together.',
                  'Yes, only the Marr.', 'There is no gauge.',
                  'Fourteen kilometres.'), 0,
                 'Alderton sits below the confluence, so the reading '
                 'includes a river no licence touches.'),
                ('Woman: What happened in the summer of 2035?',
                 ('The Marr fell to 0.4 while Alderton read 1.1.',
                  'Both gauges read the same.', 'Nothing was recorded.',
                  'Abstraction ceased.'), 0,
                 'So every licence would have continued at less than half '
                 'the protected flow.'),
                ('Man: Does a zero score mean nobody is there?',
                 ('It means the method could not detect anybody.',
                  'Yes, that is what it means.', 'It means nothing at all.',
                  'A behavioural scale.'), 0,
                 'A failure to detect and a finding of absence are different '
                 'sentences.'),
                ('Man: And if a patient follows an instruction in the '
                 'scanner?',
                 ('Then she understood it and held it in mind.',
                  'Then nothing follows.', 'Then she will recover.',
                  'One kind of imagery.'), 0,
                 'Which is decisive about her and about nobody else.'),
            ],
            convos=[
                ([('Man', 'They have digitised the Hartley estate papers.'),
                  ('Woman', 'I know, and I have been refused the originals '
                            'three times.'),
                  ('Man', 'The images are very good.'),
                  ('Woman', 'The images are excellent, and they cannot tell '
                            'me whether folios twelve and thirteen were '
                            'once a single sheet, which is the whole of my '
                            'argument about when the survey was compiled.'),
                  ('Man', 'Did you say that on the form?'),
                  ('Woman', 'I said it on all three forms. The refusal each '
                            'time said the image was adequate for the '
                            'content, and I was not asking about the '
                            'content.'),
                  ('Man', 'That sounds like a form that does not have a box '
                          'for your question.'),
                  ('Woman', 'That is exactly what it is, and Dr Brennan has '
                            'asked for one clause: if the application states '
                            'a question about the object rather than the '
                            'text, it is granted. Eleven productions a year '
                            'on last year’s figures.'),
                  ('Man', 'Four a term. That is nothing.'),
                  ('Woman', 'One morning of an archivist’s time, and '
                            'about six doctorates in this department that '
                            'currently cannot be finished.')],
                 [('What can the images not tell the woman?',
                   ('What the survey says',
                    'Whether two folios were once a single sheet',
                    'When the papers were digitised',
                    'Who compiled the survey'), 1,
                   'Which is the whole of her argument about when the survey '
                   'was compiled.'),
                  ('What does the man call the application form?',
                   ('Too long',
                    'A form with no box for her question',
                    'Out of date',
                    'Unnecessary'), 1,
                   'Each refusal said the image was adequate for the '
                   'content.')]),
                ([('Woman', 'The new condition stops abstraction below nought '
                            'point nine at Alderton.'),
                  ('Man', 'Which is fourteen kilometres below the '
                          'confluence.'),
                  ('Woman', 'Does that matter?'),
                  ('Man', 'It matters completely. Alderton measures the Marr '
                          'plus the Brack, and the Brack is not in the '
                          'review. So the gauge can read a healthy flow '
                          'while the stretch we are protecting is nearly '
                          'dry.'),
                  ('Woman', 'Has that actually happened?'),
                  ('Man', 'In 2035. The Marr above the confluence was at '
                          'nought point four and Alderton read one point '
                          'one, so under this condition every licence in the '
                          'review would have gone on abstracting all '
                          'summer.'),
                  ('Woman', 'Then the condition is useless.'),
                  ('Man', 'The condition is excellent and the gauge is in '
                          'the wrong place, and those are different '
                          'complaints. Hesketh Bridge is above the '
                          'confluence with a continuous record since 1974. '
                          'Change one place name in the licence and the '
                          'instrument does what it was written to do.')],
                 [('Why does the location of the gauge matter?',
                   ('Alderton has no record',
                    'Alderton measures the Marr plus a river not in the '
                    'review',
                    'Alderton is too far upstream',
                    'The gauge is unreliable'), 1,
                   'So it can read a healthy flow while the protected '
                   'stretch is nearly dry.'),
                  ('What does the man say about the condition itself?',
                   ('It is useless',
                    'It is excellent, and the gauge is in the wrong place',
                    'It should be delayed',
                    'It should be lowered'), 1,
                   'He insists the two are different complaints.')]),
            ],
            poster=['Digitised: four estate archives · the county paper',
                    'Images free to any card holder, at home or in the room',
                    'Originals only where the image cannot answer'],
            announce=([('Woman',
                        'Three things about programme seven and then the '
                        'change we are making. What is being digitised is '
                        'the estate papers of four local families from 1540 '
                        'to 1890, and the county newspaper to 1920. The '
                        'parish registers are not included, because they '
                        'belong to the diocese and not to us, and neither is '
                        'anything whose copyright is held outside the '
                        'university. The images are free to anybody with a '
                        'library card, in the reading room or at home, and '
                        'commercial reuse needs a licence. Now, the rule '
                        'about originals, which is the one everybody writes '
                        'to me about. Once an item is digitised we produce '
                        'the original only where the image cannot answer the '
                        'question. Last year we had sixty-one applications '
                        'and refused fifty-four, and in forty-nine of those '
                        'fifty-four the reason we gave was a reason about '
                        'content, which means we were answering a question '
                        'nobody had asked. So from April an application that '
                        'states a question about the object rather than the '
                        'text is granted without argument: the watermark, '
                        'the ruling, the hands, whether two leaves were '
                        'once one. On last year’s figures that is '
                        'about eleven productions a year, and it is the '
                        'cheapest improvement available to this '
                        'library.')],
                      [('Why are the parish registers excluded?',
                        ('They are too fragile',
                         'They belong to the diocese and not to the '
                         'university',
                         'They are already digitised',
                         'They are under copyright'), 1,
                        'Material whose copyright is held outside the '
                        'university is excluded as well.'),
                       ('What does the speaker say the refusals were '
                        'answering?',
                        ('A question about the object',
                         'A question nobody had asked',
                         'The licence conditions',
                         'The archivist’s own doubts'), 1,
                        'In forty-nine of fifty-four cases the reason given '
                        'was about content.')]),
            board=['1887: a beam split along two arms',
                   'Expected shift 0.04 fringe · sensitivity 0.01',
                   'No shift at any orientation or season',
                   'Called a failure · explained eighteen years later'],
            talk=([('Man',
                    'The most famous null result in physics, and what I want '
                    'you to notice is how it was described by the people who '
                    'got it. Cleveland, 1887. Michelson and Morley set out '
                    'to measure how fast the earth is moving through the '
                    'medium that light was then thought to travel in. The '
                    'method is a beam of light split in two, sent down two '
                    'arms at right angles and brought back together. If the '
                    'earth is moving through a stationary medium, one half '
                    'of that beam takes slightly longer than the other, and '
                    'the interference pattern shifts when you rotate the '
                    'apparatus. They floated the whole instrument on a '
                    'block of stone in a bath of mercury so they could turn '
                    'it without bending it. The shift they expected was '
                    'about four hundredths of a fringe, and the instrument '
                    'could see a hundredth. So the experiment had four '
                    'times the sensitivity it needed. And there was no '
                    'shift. Not at any angle, not at any time of year. Now '
                    'the part that matters for your own writing. They called '
                    'it a failure. That is the correct word for an '
                    'experiment that set out to measure a quantity and did '
                    'not find it, and for the next eighteen years the '
                    'physics community treated the number as a problem to '
                    'be explained rather than as a discovery. Three '
                    'explanations were on offer: the medium is dragged along '
                    'with the earth; moving bodies contract by exactly the '
                    'right amount; or there is no medium. The third one '
                    'arrived in 1905 and swallowed the second. Nothing '
                    'whatever changed about the measurement that year. Only '
                    'its status changed, and a null result that nobody can '
                    'explain is the most valuable thing in a laboratory, '
                    'because it is the one that will not go away.')],
                  [('How did the sensitivity compare with the expected '
                    'shift?',
                    ('It was four times too coarse',
                     'The apparatus had four times the sensitivity it '
                     'needed',
                     'They were equal',
                     'The sensitivity was never established'), 1,
                    'A shift of four hundredths of a fringe against a '
                    'sensitivity of a hundredth.'),
                   ('Why did they float the instrument in mercury?',
                    ('To keep it at one temperature',
                     'So that it could be turned without bending',
                     'To damp vibration from the street',
                     'To measure its mass'), 1,
                    'The whole apparatus sat on a block of stone.'),
                   ('What word did the authors use for their result?',
                    ('A discovery', 'A failure', 'An anomaly',
                     'A confirmation'), 1,
                    'Which the lecturer calls the correct word for such an '
                    'experiment.'),
                   ('What changed in 1905, on the lecturer’s account?',
                    ('The measurement',
                     'Only the status of the result',
                     'The sensitivity of the apparatus',
                     'The explanation that the medium is dragged'), 1,
                    'A theory arrived that required the null result.')]),
        ),
        dict(
            warm=[
                ('Woman: Was the loss of the Aral Sea unforeseen?',
                 ('It was written down in the planning documents.',
                  'Yes, entirely.', 'Nobody knows.',
                  'Nine tenths.'), 0,
                 'The planners priced the loss and accepted it for the '
                 'cotton.'),
                ('Woman: What was not foreseen, then?',
                 ('The salt, and the dust off the dried bed.',
                  'The loss of the lake.', 'The cotton yield.',
                  'Twenty-four species.'), 0,
                 'The dust is blown onto the farmland the diversion was '
                 'built to serve.'),
                ('Man: Did the fishery survive?',
                 ('Twenty-four species fell to four.',
                  'It was unaffected.', 'It improved.',
                  'By 2010.'), 0,
                 'The remaining lake grew saline as the water fell.'),
                ('Man: So the calculation was wrong?',
                 ('The calculation was right and the boundary was wrong.',
                  'Yes, badly wrong.', 'There was no calculation.',
                  'A pathway.'), 0,
                 'The accounting excluded the one pathway that '
                 'mattered.'),
                ('Woman: Can an image answer a question about a '
                 'watermark?',
                 ('No, and that is the point of the clause.',
                  'Yes, perfectly.', 'Only in colour.',
                  'Eleven productions.'), 0,
                 'An image answers a question about content rather than '
                 'about the object.'),
                ('Woman: Why prefer a register of baptisms to a survey?',
                 ('Because the clerk had no case to make.',
                  'Because it is older.', 'Because it is longer.',
                  'A residue.'), 0,
                 'An indifferent record has no interest in the question you '
                 'are asking it.'),
                ('Man: Does a silence in an archive mean the thing was '
                 'absent?',
                 ('No. It means nobody kept a record of it.',
                  'Yes, usually.', 'It cannot be interpreted.',
                  'Litigation.'), 0,
                 'What survives is the residue of an administration rather '
                 'than a sample.'),
                ('Man: What does a scan establish about the next patient?',
                 ('Nothing whatever.', 'That she is aware.',
                  'That she is unaware.', 'One kind of imagery.'), 0,
                 'The task needs attention and a particular imagery, either '
                 'of which may fail.'),
            ],
            convos=[
                ([('Woman', 'I have been reading the planning papers for the '
                            'diversion.'),
                  ('Man', 'And?'),
                  ('Woman', 'And everybody tells this story as a failure of '
                            'foresight, and the papers say what will happen '
                            'to the lake. In writing. With figures.'),
                  ('Man', 'They knew the sea would go.'),
                  ('Woman', 'They knew the sea would go, they wrote down '
                            'roughly how fast, and they argued that a lake '
                            'evaporating in a desert produces nothing while '
                            'the same water on a field produces a crop you '
                            'can sell. Which is not a stupid argument.'),
                  ('Man', 'So where is the mistake?'),
                  ('Woman', 'In the boundary. Nobody costed the salt. The '
                            'lake got saltier, the fishery went from '
                            'twenty-four species to four, and then the dried '
                            'bed started blowing salt and pesticide dust '
                            'back onto the cotton.'),
                  ('Man', 'Onto the fields the water was taken for.'),
                  ('Woman', 'Onto the fields the water was taken for. The '
                            'arithmetic was right and the accounting was '
                            'honest and the line was drawn in the wrong '
                            'place, and that is a commoner error than '
                            'ignorance.')],
                 [('What does the woman say the planning papers contain?',
                   ('No reference to the lake',
                    'What would happen to the lake, in writing and with '
                    'figures',
                    'A prediction about the salt',
                    'An objection from the planners'), 1,
                   'Which is why she rejects the usual account of a failure '
                   'of foresight.'),
                  ('Where does she locate the mistake?',
                   ('In the arithmetic',
                    'In the boundary drawn around the problem',
                    'In the honesty of the accounting',
                    'In the cotton yield'), 1,
                   'Nobody costed the salt that blew back onto the '
                   'fields.')]),
            ],
            poster=['Review: abstractions over 20 m³ a day on the Marr',
                    'Stop abstracting below 0.9 m³ a second at Alderton',
                    'Appeal to the national regulator within 28 days'],
            announce=([('Man',
                        'Three points about the abstraction review and then '
                        'the amendment I am recommending. The review covers '
                        'every licence to take more than twenty cubic metres '
                        'a day from the Marr or its tributaries. The new '
                        'condition is a hands-off flow: abstraction stops '
                        'when the gauged flow drops below nought point nine '
                        'cubic metres a second. Public supply and livestock '
                        'drinking water are exempt, and there is no '
                        'compensation, because every one of these licences '
                        'was granted subject to review and the condition is '
                        'inside the existing terms. Now the amendment. The '
                        'condition as drafted is measured at Alderton, which '
                        'is fourteen kilometres below the confluence with '
                        'the Brack, and the Brack is not in this review. In '
                        'the dry summer of 2035 the Marr above the '
                        'confluence was running at nought point four while '
                        'Alderton read one point one. Under the condition as '
                        'written, every licence in this review would have '
                        'abstracted all summer from a river at less than '
                        'half the flow we are protecting. Hesketh Bridge is '
                        'above the confluence and has a continuous record '
                        'since 1974. I am recommending that we change the '
                        'place name and nothing else.')],
                      [('Why is there no compensation?',
                        ('The licences are new',
                         'The licences were granted subject to review and the '
                         'condition is within the existing terms',
                         'The regulator forbids it',
                         'The abstractors agreed to none'), 1,
                        'Public supply and livestock water are exempt from '
                        'the condition itself.'),
                       ('What is the speaker recommending?',
                        ('A lower threshold',
                         'Changing the place name of the gauge and nothing '
                         'else',
                         'A delay to the review',
                         'Compensation for licensees'), 1,
                        'Hesketh Bridge is above the confluence with a record '
                        'since 1974.')]),
            board=['Nobody has an instrument that detects awareness',
                   'We detect response and then infer',
                   'A zero is a failure to detect, not a finding',
                   'A positive scan is decisive about one patient'],
            talk=([('Woman',
                    'The last thing I want to say to this course is about a '
                    'sentence that appears in medical notes every day and '
                    'means the opposite of what it is read to mean. Here is '
                    'the situation. A patient is unresponsive. Somebody has '
                    'to decide what is being experienced in that bed, and '
                    'nobody in the building has an instrument that detects '
                    'awareness. What we have are instruments that detect '
                    'response, and then we infer, and in the difficult cases '
                    'the inference is precisely what is in question. So the '
                    'notes record a score on a behavioural scale, and where '
                    'that score is zero the note says zero, and the family '
                    'and half the staff read it as a finding that nobody is '
                    'there. It is not. It is a failure to detect anybody, '
                    'which is a sentence about our method. Now, the scan '
                    'does better, and not in the way people expect. If you '
                    'ask a patient inside a scanner to imagine playing '
                    'tennis and the right region lights up when you ask and '
                    'stops when you ask her to rest, you have established '
                    'that she understood English, held an instruction in '
                    'mind and sustained a voluntary act for thirty seconds. '
                    'That is decisive, and it is decisive about her. If the '
                    'next patient produces nothing, you have established '
                    'nothing whatever, because passing that test needs '
                    'language, sustained attention and one particular kind '
                    'of imagery, and any of the three can be missing in '
                    'somebody who is entirely aware. So the honest report '
                    'names the method and its power. The dishonest one names '
                    'a conclusion, and it is the shorter of the two, which '
                    'is why it is the one that gets quoted.')],
                  [('What does the hospital actually detect?',
                    ('Awareness', 'Response', 'Imagery', 'Attention'), 1,
                    'An inference is then drawn, and in difficult cases the '
                    'inference is in question.'),
                   ('How is a score of zero read, and what is it?',
                    ('As a failure to detect, which is what it is',
                     'As a finding that nobody is there, when it is a '
                     'failure to detect',
                     'As an error in the scale',
                     'As a reason for a scan'), 1,
                    'The note is a sentence about the method rather than '
                    'about the patient.'),
                   ('What does a positive scan establish?',
                    ('That the patient will recover',
                     'That she understood English, held an instruction in '
                     'mind and sustained a voluntary act',
                     'That awareness can be measured',
                     'That the scale was wrong'), 1,
                    'Decisive, and decisive about that patient.'),
                   ('Why does a blank scan establish nothing?',
                    ('The scanner is unreliable',
                     'Passing the test needs language, attention and one '
                     'kind of imagery, any of which may be missing',
                     'The region is hard to locate',
                     'The instruction is too long'), 1,
                    'The honest report names the method and its '
                    'power.')]),
        ),
    ],

    writing=dict(
        build=[
            ('Fifty-four of sixty-one applications were refused.',
             ['do', 'you', 'know', 'what', 'reason', 'was', 'given', 'in',
              'each', 'case'],
             'Do you know what reason was given in each case?'),
            ('An image cannot answer a question about a watermark.',
             ['is', 'there', 'a box', 'on', 'the form', 'for', 'that',
              'kind', 'of', 'question'],
             'Is there a box on the form for that kind of question?'),
            ('The condition is measured at Alderton.',
             ['how', 'far', 'below', 'the', 'confluence', 'does', 'that',
              'gauge', 'sit'],
             'How far below the confluence does that gauge sit?'),
            ('In 2035 the two gauges read very differently.',
             ['would', 'the', 'condition', 'have', 'stopped', 'any',
              'abstraction', 'that', 'summer'],
             'Would the condition have stopped any abstraction that '
             'summer?'),
            ('The expected shift was four hundredths of a fringe.',
             ['what', 'could', 'the', 'apparatus', 'actually', 'detect',
              'at', 'the', 'time'],
             'What could the apparatus actually detect at the time?'),
            ('The authors called their own result a failure.',
             ['can', 'you', 'tell', 'me', 'why', 'that', 'is', 'the',
              'correct', 'word'],
             'Can you tell me why that is the correct word?'),
            ('The planning documents priced the loss of the lake.',
             ['does', 'that', 'make', 'the', 'case', 'a', 'failure', 'of',
              'foresight', 'or', 'not'],
             'Does that make the case a failure of foresight, or not?'),
            ('The dust blows onto the farmland the water was taken for.',
             ['was', 'that', 'pathway', 'inside', 'the', 'boundary', 'of',
              'the', 'calculation'],
             'Was that pathway inside the boundary of the calculation?'),
            ('A behavioural score of zero is recorded in the notes.',
             ['I', 'would', 'like', 'to', 'know', 'what', 'sentence',
              'accompanies', 'that', 'figure'],
             'I would like to know what sentence accompanies that figure.'),
            ('A blank scan needs language, attention and imagery.',
             ['any', 'of', 'the', 'three', 'may', 'be', 'missing', 'in',
              'somebody', 'entirely', 'aware'],
             'Any of the three may be missing in somebody entirely aware.'),
        ],
        email=dict(
            to='library@marchfield.ac.uk',
            date='14/02/2037',
            subject='Programme 7 — the department supports the new '
                    'clause, and one further request',
            scenario=['You are director of graduate studies in history. The '
                      'library has agreed to grant any application that '
                      'states a question about the object rather than the '
                      'text, from April. You accept the correction to your '
                      'own figures: 61 applications last year and not 90. '
                      'You support the clause, and you want one further '
                      'thing the library has not mentioned: that the '
                      'quarterly list of refusals record the reason given, '
                      'so that a pattern of refusals can be seen without '
                      'anybody having to collect it by hand.',
                      'Write an email to the library, copied to the graduate '
                      'school.'],
            bullets=['Accept the correction to your figures, briefly and '
                     'without retreating from the complaint.',
                     'Support the new clause and say what it is worth to '
                     'research students.',
                     'Ask for the reasons to be recorded in the quarterly '
                     'list, with the reason.'],
        ),
        disc=dict(
            prof='Dr Vasquez',
            question='A regulator proposes that every environmental '
                     'condition it imposes must be measured at the point it '
                     'is written to protect, even where no gauge exists '
                     'there and one must be built and maintained at public '
                     'expense. Supporters say a condition measured somewhere '
                     'else protects the paperwork rather than the river. '
                     'Opponents say the rule will delay hundreds of '
                     'conditions for years while gauges are installed, and '
                     'that an imperfect condition in force beats a perfect '
                     'one in preparation. Should the rule be adopted?',
            posts=[('Thandeka', 'w', 'Adopt it. A condition measured '
                                     'fourteen kilometres downstream of the '
                                     'thing it protects is not a condition, '
                                     'it is a form of words.'),
                   ('Krzysztof', 'm', 'And while we install four hundred '
                                      'gauges, every one of those rivers is '
                                      'abstracted under no condition at '
                                      'all, which is the arrangement we '
                                      'have now.')],
        ),
    ),

    speaking=dict(
        repeat=['A document is evidence of its own making first.',
                'Litigation leaves a trail and contentment leaves none.',
                'There was no shift at any angle or season.',
                'They called their own result a failure.',
                'The planners wrote down what would happen to the lake.',
                'A zero is a failure to detect, not a finding of absence.',
                'Passing that test needs language, attention and one kind '
                'of imagery, and any of the three can be missing.'],
        interview=('a study of how people decide what a record proves',
                   ['Thank you for taking part today. I am calling about a '
                    'study of how people decide what a record proves. To '
                    'begin, could you tell me about a document that matters '
                    'in your family, and what you think it establishes?',
                    'Thinking about a measurement that is taken in a '
                    'convenient place rather than the right one, can you '
                    'describe such a case and say who benefits?',
                    'Some people say that if nobody wrote something down, it '
                    'did not happen. How far would you agree?',
                    'Finally, describe a cost that was left out of a '
                    'calculation you have seen, and say who ended up paying '
                    'it.']),
    ),
)
