# -*- coding: utf-8 -*-
import figs

U = dict(
num=7,
title='Buying Something: Writing the Specification',
gram='a specification: must, should, may, and how it will be tested',
ai='a specification drafted as must, should, may and how tested',
strap='CEFR B1 · Grammar: a specification: must, should, may, and how it will be tested · '
      'AI: a specification drafted as must, should, may and how tested',
cando=['separate must from should and may',
       'say how each requirement will be tested',
       'avoid writing a specification round one product',
       'check the constraints before you publish',
       'write a six-line tasking for a specification'],

hero=('EVERY MUST IS A SUPPLIER YOU HAVE JUST EXCLUDED.',
      ['Write four musts you can defend',
       'and eleven shoulds you would like.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Nineteen requirements, four that matter, and one lift that takes 400 kilograms.',

warm=['What was the last thing your organisation bought that did not fit?',
      'Who writes the specifications where you work?',
      'What would you test on delivery, and how?'],

vocab=[
 ('a must that is genuinely essential', 'a requirement without which the thing is useless'),
 ('a must that is really a preference', 'a requirement that excludes suppliers for nothing'),
 ('a should somebody can offer or not', 'a scored preference'),
 ('a may that costs nothing to include', 'an option worth asking about'),
 ('a requirement written round one product', 'a specification that will be challenged'),
 ('a requirement any supplier could meet', 'a requirement that scores nothing'),
 ('a dimension that matters', 'a measurement with a consequence'),
 ('a dimension nobody measured', 'the cause of a delivery that will not fit'),
 ('a weight the lift can take', 'the constraint that decides the purchase'),
 ('a consumable you will buy for ten years', 'the real cost of the decision'),
 ('a training requirement', 'what must be provided with the thing'),
 ('a warranty period', 'how long faults are the supplier’s'),
 ('a thing you will test on delivery', 'the acceptance test'),
 ('a test somebody can witness', 'a test with a result anybody can see'),
 ('a test nobody could perform', 'a requirement that cannot be enforced'),
 ('a tender question nobody asked', 'a gap found too late'),
 ('an answer that changed the specification', 'the value of asking the market'),
 ('a clinician who must sign the requirement', 'the clinical authority for a clinical need'),
 ('an estates constraint discovered late', 'the lift, the door and the floor loading'),
 ('a specification you could defend at a challenge', 'the standard to write to')],

read=[
 'Nineteen requirements arrive from four wards, and all nineteen are written as '
 'musts. A specification of nineteen musts will attract one bid or none.',
 'So sort them. A must is a requirement without which the equipment is useless. '
 'A should is a preference you will score. A may is a question you are asking the '
 'market.',
 'Then say how each requirement will be tested. Trolley height adjustable between '
 'fifty and ninety centimetres, tested by measurement on delivery, is enforceable. '
 'Easy to clean is not.',
 'Check the constraints before you publish. The lift to theatre three takes four '
 'hundred kilograms and the door is eighty-two centimetres wide, and no amount of '
 'procurement can change either.',
 'And never write round a product. If the specification describes one '
 'manufacturer’s dimensions exactly, you will be challenged, and you will '
 'deserve it.'],

dp1=('Specifications', 'Procurement guidance commonly recommends distinguishing '
     'mandatory from desirable requirements, stating objective test methods, '
     'avoiding specifications that describe a single product, and verifying '
     'physical and clinical constraints before publication. Procurement rules are '
     'set by local law and the organisation’s own standing orders.',
     'Source: general procurement practice guidance, 2025–2026.'),

c_a=[('How many requirements arrived, and as what?', 'nineteen, all written as musts'),
     ('What will nineteen musts attract?', 'one bid or none'),
     ('What is a must?', 'a requirement without which the equipment is useless'),
     ('What is the enforceable example?', 'height adjustable between fifty and ninety centimetres, tested by measurement'),
     ('What are the two constraints given?', 'a lift taking four hundred kilograms and a door of eighty-two centimetres'),
     ('What happens if you write round a product?', 'you will be challenged, and deserve it')],

c_b=[('Nineteen requirements were all written as musts.', 'T'),
     ('“Easy to clean” is enforceable.', 'F'),
     ('Each requirement states how it will be tested.', 'T'),
     ('Procurement can change the lift capacity.', 'F'),
     ('Constraints are checked before publication.', 'T'),
     ('A may is a question asked of the market.', 'T')],

c_c=[('The trolley ____________ be adjustable between fifty and ninety centimetres.', 'must'),
     ('It ____________ have a brake on each wheel.', 'should'),
     ('It ____________ include a drip stand, if available.', 'may'),
     ('Tested ____________ measurement on delivery.', 'by'),
     ('The lift ____________ four hundred kilograms.', 'takes'),
     ('We ____________ checked the door width.', 'have')],

c_d=[('Write a must only where the thing is ( better with it / useless without it ).', ['better with it', 'useless without it'], 1),
     ('State ( how it will be tested / why it matters ).',
      ['how it will be tested', 'why it matters'], 0),
     ('Check ( the lift and the door / the budget ) before publishing.',
      ['the lift and the door', 'the budget'], 0),
     ('Avoid describing ( one manufacturer’s dimensions / a general category ).',
      ['one manufacturer’s dimensions', 'a general category'], 0),
     ('Ask the market ( a may question / for a discount ).',
      ['a may question', 'for a discount'], 0)],

c_e=('Must, should, may or untestable? Decide what each requirement is.',
     [('height adjustable between fifty and ninety centimetres', 'must'),
      ('a brake on each wheel rather than two', 'should'),
      ('a drip stand included, if offered', 'may'),
      ('easy to clean and pleasant to use', 'untestable'),
      ('fits through a door of eighty-two centimetres', 'must'),
      ('robust and well made', 'untestable')],
     ['must', 'should', 'may', 'untestable']),

v_fig_title='SIX WORDS OF A SPECIFICATION',
v_fig=[('key', 'a must that is genuinely essential'), ('scale', 'a dimension that matters'),
       ('doc', 'a thing you will test on delivery'),
       ('clock', 'a warranty period'),
       ('people', 'a clinician who must sign the requirement'),
       ('note', 'a specification you could defend at a challenge')],
v_fig_cap='Six words for nineteen requirements and one eighty-two centimetre door.',

v_a=[('A requirement that excludes suppliers for nothing is a must that is really a ____________.', 'preference'),
     ('A scored preference is a ____________ somebody can offer or not.', 'should'),
     ('A specification that will be challenged is a requirement written round one ____________.', 'product'),
     ('The cause of a delivery that will not fit is a dimension nobody ____________.', 'measured'),
     ('The real cost of the decision is a ____________ you will buy for ten years.', 'consumable'),
     ('A test with a result anybody can see is a test somebody can ____________.', 'witness'),
     ('A gap found too late is a tender question nobody ____________.', 'asked'),
     ('The lift, the door and the floor loading are an estates constraint discovered ____________.', 'late')],

v_b=[('A may that costs nothing to include is an option', 'worth asking about.'),
     ('A requirement any supplier could meet is a requirement', 'that scores nothing.'),
     ('A weight the lift can take is the constraint', 'that decides the purchase.'),
     ('A warranty period is how long faults', 'are the supplier’s.'),
     ('An answer that changed the specification is the value', 'of asking the market.')],

g_title='Grammar: a specification: must, should, may, and how it will be tested',
g_rule=['Must is mandatory and exclusionary: the trolley must be height adjustable '
        'between fifty and ninety centimetres. Every must narrows the field, so '
        'each one needs a reason you could state aloud.',
        'Should is desirable and scored: the trolley should have a brake on each '
        'wheel. A bid without it is still a bid.',
        'May invites an offer: the trolley may include a drip stand. It costs '
        'nothing to ask and sometimes the market answers generously.',
        'Attach the test to every requirement, as a participle clause: tested by '
        'measurement on delivery; tested by witnessed demonstration; verified from '
        'the manufacturer’s published data.'],
g_fig=('LOOSE',
       ['The trolley must be of high quality and easy to clean.',
        'It must be suitable for use in a busy theatre environment.',
        'It should be similar to our existing model.',
        'Delivery must be prompt and installation included.'],
       'PRECISE',
       ['The trolley must be height adjustable between fifty and ninety centimetres, tested by measurement on delivery.',
        'It must pass through a doorway of eighty-two centimetres, verified from published dimensions.',
        'It should have a brake on each of four wheels, tested by witnessed demonstration.',
        'It may include a drip stand; this will be scored as an option.'],
       'four requirements no supplier can fail',
       'four requirements with a test each'),
g_fig_cap='Must, should, may. And tested by, verified from, witnessed.',

g_a=[('The trolley ____________ be height adjustable.', 'must'),
     ('Tested ____________ measurement on delivery.', 'by'),
     ('It ____________ pass through eighty-two centimetres.', 'must'),
     ('Verified ____________ published dimensions.', 'from'),
     ('It ____________ have a brake on each wheel.', 'should'),
     ('Tested by witnessed ____________.', 'demonstration'),
     ('It ____________ include a drip stand.', 'may'),
     ('This will be ____________ as an option.', 'scored'),
     ('We ____________ measured the door.', 'have')],

g_b=[('( must be height adjustable between fifty and ninety centimetres / must be of high quality ) — the must.', ['must be height adjustable between fifty and ninety centimetres', 'must be of high quality'], 0),
     ('( tested by measurement on delivery / quality will be assessed ) — the test.',
      ['tested by measurement on delivery', 'quality will be assessed'], 0),
     ('( should have a brake on each of four wheels / should be well made ) — the should.',
      ['should have a brake on each of four wheels', 'should be well made'], 0),
     ('( may include a drip stand, scored as an option / extras would be welcome ) — the may.',
      ['may include a drip stand, scored as an option', 'extras would be welcome'], 0),
     ('( must pass through a doorway of eighty-two centimetres / must be suitable for our theatres ) — the constraint.',
      ['must pass through a doorway of eighty-two centimetres', 'must be suitable for our theatres'], 0),
     ('( a general category of equipment / our existing model’s dimensions ) — the fair description.',
      ['a general category of equipment', 'our existing model’s dimensions'], 0)],

d1=dict(
 title='Nineteen musts and four',
 fig=(['Nineteen requirements.', 'All musts.'],
      ['Four real musts.', 'Eleven shoulds.']),
 cap='Hana Kowalczyk and Nadia Belkacem, procurement, over a draft specification.',
 lines=[('Nadia', 'Four wards have sent nineteen requirements and every one says must.'),
        ('Hana', 'Then the question for each is: would the trolley be useless without it?'),
        ('Nadia', 'For the height range, yes. For the colour of the mattress, no.'),
        ('Hana', 'And the brake on each wheel?'),
        ('Nadia', 'Two wheels would work. Four is better, so it is a should, scored.'),
        ('Hana', 'What about “easy to clean”?'),
        ('Nadia', 'Nobody can fail it, so it scores nothing. I shall ask instead for surfaces with no exposed fixings, which is testable.'),
        ('Hana', 'Has anybody measured the lift?'),
        ('Nadia', 'Four hundred kilograms and an eighty-two centimetre door. Two of the wards’ favourite model is eighty-six.'),
        ('Hana', 'Then that model cannot be bought, whatever anybody prefers.'),
        ('Nadia', 'And if I had published without measuring, we would have bought it and discovered that in March.'),
        ('Hana', 'Four musts, eleven shoulds, one may, and a tested line against every one of them.')],
 a=[('How many requirements arrived?', 'nineteen, all as musts'),
    ('What is the test question for each?', 'would the trolley be useless without it'),
    ('Why is a four-wheel brake a should?', 'because two wheels would work, so four is better rather than essential'),
    ('What replaces “easy to clean”?', 'surfaces with no exposed fixings, which is testable'),
    ('What are the constraints?', 'four hundred kilograms and an eighty-two centimetre door')],
 b=[('Would it be ____________ without it?', 'useless'),
    ('Four is better, so it is a ____________.', 'should'),
    ('Surfaces with no exposed ____________.', 'fixings'),
    ('That model ____________ be bought.', 'cannot')]),

d2=dict(
 title='The specification written round a product',
 fig=(['One product.', 'One bid.'],
      ['Challenged.', 'Retendered.']),
 cap='Hana Kowalczyk and Omar Haddad, finance.',
 lines=[('Omar', 'The infusion stand tender attracted one bid and a letter from a second supplier.'),
        ('Hana', 'The letter says the specification described one manufacturer’s product, and it did.'),
        ('Omar', 'Who wrote it?'),
        ('Hana', 'A ward manager who copied the dimensions from the model she likes, including a base diameter of sixty-two centimetres.'),
        ('Omar', 'Is sixty-two necessary?'),
        ('Hana', 'Nothing about a patient requires sixty-two rather than sixty or sixty-five. It is a product number in a sentence.'),
        ('Omar', 'She was not trying to rig anything.'),
        ('Hana', 'She was trying to buy the thing that works. The effect is the same as rigging it, and the remedy is the same.'),
        ('Omar', 'Which is?'),
        ('Hana', 'Retender with a range, and lose four months. That is what copying dimensions costs.'),
        ('Omar', 'People will say procurement rules make everything slower.'),
        ('Hana', 'The rule did not cost four months. Writing the specification round a product did.')],
 unresolved=True,
 a=[('What did the tender attract?', 'one bid and a letter from a second supplier'),
    ('What did the letter say?', 'that the specification described one manufacturer’s product'),
    ('Where did the dimensions come from?', 'the model a ward manager likes'),
    ('Is sixty-two centimetres necessary?', 'no; nothing about a patient requires it'),
    ('What does it cost?', 'a retender and four months')],
 b=[('It described one manufacturer’s ____________.', 'product'),
    ('A product number in a ____________.', 'sentence'),
    ('Retender with a ____________.', 'range'),
    ('That is what ____________ dimensions costs.', 'copying')]),

speak=[('Useless without it',
        ['Your partner reads out twelve requirements, all as musts.',
         'Sort them into must, should and may.',
         'Six each, then swap.']),
       ('How will you test it',
        ['Your partner gives you eight requirements.',
         'State the test for each, or declare it untestable.',
         'Four each, then swap.']),
       ('Measure first',
        ['Your partner describes six purchases.',
         'Name the physical constraints you would check before publishing.',
         'Three each, then swap.'])],

ext_title='A specification drafted as must, should, may and how tested',
ext_fig=figs.datatable('WHAT EACH REQUIREMENT CARRIES',
                       ['Line', 'Content'],
                       [['the level', 'must, should or may'],
                        ['the requirement', 'stated as a range or a value'],
                        ['the test', 'measurement, demonstration or published data'],
                        ['the reason', 'why a must is a must'],
                        ['the constraint', 'lift, door, floor, power'],
                        ['the whole-life item', 'consumables and training']]),
ext_fig_cap='Six lines per requirement, and the third one makes the first enforceable.',
ext=[
 'A specification drafted as must, should, may and how tested turns nineteen '
 'wishes into four requirements a supplier can be held to.',
 'Give it the requirements as received, the physical constraints measured rather '
 'than assumed, the clinical sign-off and the consumables you will buy with it.',
 'Ask it to challenge every must with the question whether the item would be '
 'useless without it, and to demote the rest.',
 'Ask for a test against every requirement, expressed as measurement, witnessed '
 'demonstration or published data, and to mark any requirement that cannot be '
 'tested.',
 'Ask it to flag any requirement expressed as a single value where a range would '
 'do, because a single value is how a specification comes to describe one '
 'product.',
 'What it cannot do is go and measure the lift. The eighty-two centimetre door is '
 'the fact that decides the purchase, and somebody has to stand in front of it '
 'with a tape.'],

dp2=('Tender challenges', 'Procurement literature commonly reports that '
     'specifications expressed as single values rather than ranges attract fewer '
     'bids and more challenges, and that untestable requirements are frequently '
     'unenforceable after delivery.',
     'Source: general procurement practice literature, 2025–2026.'),

e_a=[('What does the specification turn nineteen wishes into?', 'four requirements a supplier can be held to'),
     ('What four things are given to it?', 'the requirements, the measured constraints, the clinical sign-off and the consumables'),
     ('What question challenges every must?', 'whether the item would be useless without it'),
     ('What three forms can a test take?', 'measurement, witnessed demonstration or published data'),
     ('What is flagged?', 'any single value where a range would do')],
e_b=[('Every must is challenged.', 'T'),
     ('Each requirement carries a test.', 'T'),
     ('It measures the lift itself.', 'F'),
     ('Single values are flagged where a range would do.', 'T'),
     ('Single-value specifications attract fewer bids.', 'T'),
     ('Untestable requirements are easy to enforce.', 'F')],

w_model='Purpose: so that a specification can be defended at a challenge and '
       'enforced on delivery. Scope: non-clinical equipment and services I '
       'procure; clinical requirements must be signed by the responsible '
       'clinician, and medical device regulatory compliance is the device '
       'committee’s. Inputs: the requirements as received from each ward, the '
       'measured physical constraints including lift capacity, door widths and '
       'floor loading, the clinical sign-off, the consumables and training that '
       'will be bought with the item, and the standing orders in force. Criteria: '
       'every must justified by the item being useless without it; the rest '
       'demoted to should or may; a test against every requirement as measurement, '
       'witnessed demonstration or published data; ranges rather than single '
       'values wherever possible; and no requirement that matches only one '
       'manufacturer. Done: the specification is signed by the clinician for '
       'clinical requirements and by estates for constraints, before publication. '
       'Fallback: where a requirement cannot be tested, I remove it rather than '
       'publishing something unenforceable.',
w_fig=figs.spec_card('SIX LINES FOR A SPECIFICATION',
                     [('Purpose', 'defensible at challenge, enforceable on delivery'),
                      ('Scope', 'non-clinical procurement; clinical needs signed off'),
                      ('Inputs', 'ward requirements, measured constraints, consumables'),
                      ('Criteria', 'justified musts, tests, ranges, no single product'),
                      ('Done', 'signed by clinician and estates before publication'),
                      ('Fallback', 'untestable: remove it')]),
w_fig_cap='Six lines, and the fifth one is the signature that prevents March.',
w_task='Write a six-line tasking for a specification.',
w_steps=['Line 1: say what the specification must survive.',
         'Line 2: say which requirements are yours, and which must be signed.',
         'Line 3: say what you are giving it.',
         'Line 4: say how requirements are graded and tested.',
         'Line 5: say who signs before publication.',
         'Line 6: say what you do with an untestable requirement.'],
w_bank=['Purpose: so that a specification can be defended at a challenge and enforced on delivery',
        'Scope: non-clinical equipment and services I procure; clinical requirements must be signed by the responsible clinician and device compliance is the device committee’s',
        'Inputs: the requirements as received, the measured physical constraints including lift capacity, door widths and floor loading, the clinical sign-off, the consumables and training, and the standing orders in force',
        'Criteria: every must justified by the item being useless without it; the rest demoted; a test against every requirement; ranges rather than single values; no requirement matching only one manufacturer',
        'Done: the specification is signed by the clinician for clinical requirements and by estates for constraints, before publication',
        'Fallback: where a requirement cannot be tested, I remove it rather than publishing something unenforceable'],
w_check=['Is every must justified?',
         'Has every requirement a test?',
         'Are ranges used instead of single values?',
         'Have estates signed the constraints?'],

t_title='A specification drafted as must, should, may and how tested',
t_fig=figs.split('NINETEEN WISHES AND FOUR MUSTS',
                 'It can draft',
                 ['the grading of each requirement',
                  'a test against each one',
                  'ranges in place of single values',
                  'the untestable list'],
                 'It must not supply',
                 ['the measurement of the lift',
                  'the clinical sign-off',
                  'the choice between bids',
                  'the preference of a ward']),
t_fig_cap='It drafts the grades and tests. Somebody must stand at the door with a tape.',
t_body=[
 'Give it the requirements as received, the measured constraints, the clinical '
 'sign-off and the consumables.',
 'A specification drafted as must, should, may and how tested returns the grading '
 'and a test for each line.',
 'Then ask for every single value that should be a range.'],
t_say=[('Must: ', 'Adjustable fifty to ninety centimetres.'),
       ('Tested by: ', 'Measurement on delivery.'),
       ('Should: ', 'A brake on each of four wheels.')],
t_bound='It cannot go and measure the lift to theatre three, and it will not know '
        'which model two wards have already chosen.',
t_a=[('Give it the requirements as ____________.', 'received'),
     ('And the ____________ constraints.', 'measured'),
     ('And the clinical ____________.', 'sign-off'),
     ('Ask for the ____________ of each requirement.', 'grading'),
     ('And a ____________ for each line.', 'test'),
     ('And every single value that should be a ____________.', 'range')],
t_b_rubric='Say what the specification work should do with each item.',
t_b=[('nineteen requirements all marked must', 'challenge each and demote most'),
     ('“easy to clean”', 'replace it with a testable requirement or remove it'),
     ('a base diameter of sixty-two centimetres', 'turn it into a range'),
     ('an unmeasured lift', 'flag it for measurement before publication')],

case=dict(
 title='The Decision Room · The trolleys that did not fit the lift',
 brief=[
  'A hospital published equipment specifications based on requirements submitted '
  'by wards, without verifying physical constraints or test methods.',
  'Over three years, 23 equipment purchases were made. 4 items could not be used '
  'as intended. Two did not fit a lift or doorway and one exceeded a floor '
  'loading. One had a requirement described as high quality, which could not be '
  'enforced when it failed. Replacement and storage cost about 94,000.',
  'A requirement was introduced that constraints be measured and signed by estates '
  'and that every requirement carry a test method. Over the following three years '
  'no purchase was unusable.'],
 exhibit=figs.datatable('THREE YEARS OF EQUIPMENT PURCHASES',
                        ['Item', 'Before / After'],
                        [['purchases made', '23 / 21'],
                         ['items unusable as intended', '4 / 0'],
                         ['requirements with no test method', '61 per cent / 4'],
                         ['specifications matching one product', '5 / 0'],
                         ['challenges from suppliers', '3 / 0'],
                         ['cost of replacement and storage', '94,000 / 0']]),
 exhibit_cap='Four unusable items, and a tape measure that would have prevented two.',
 exhibit_note='Two of the four failures were a lift capacity and a door width, '
              'both of which could have been established in eleven minutes.',
 voices=[('A ward manager', 'about test methods',
          'Writing a test for every line turns a two-page specification into six.'),
         ('Hana Kowalczyk', 'people manager',
          'Four items we could not use, and ninety-four thousand pounds in replacement and storage.'),
         ('Viktor Novák', 'estates',
          'Nobody asked me about the lift. I could have told them in eleven minutes.')],
 steps=[('Find it', 'How many items were unusable?'),
        ('Compare it', 'Untestable requirements against enforcement failures.'),
        ('Infer it', 'Why were constraints missed?'),
        ('Weigh it', 'Four pages of test methods against ninety-four thousand.'),
        ('Decide', 'What must a specification carry?')],
 analysis=[('Find it. How many?', '4 of 23'),
           ('Compare it. How many untestable?', '61 per cent of requirements'),
           ('Infer it. Why missed?', 'because nobody asked estates before publishing'),
           ('Weigh it. What was traded?', 'four pages for ninety-four thousand pounds'),
           ('Decide. What must it carry?', 'measured constraints and a test against every requirement')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say how requirements are graded.',
                 'Say what must accompany each requirement.',
                 'Say what must be verified before publication.',
                 'Say what may not appear in a specification.'],
 bank=['Every requirement is graded as mandatory, desirable or optional, and a requirement is mandatory only where the item would be unusable without it.',
       'Every requirement states the method by which compliance will be verified, whether by measurement, witnessed demonstration or published data.',
       'Physical constraints, including lift capacity, access dimensions and floor loading, are measured and confirmed in writing by estates before publication.',
       'No specification states a single value where a range would meet the need, and no specification matches the characteristics of only one product.'],
 outcome='The hospital adopts the four lines. Items unusable as intended fall from '
         'four to none, requirements with no test method from sixty-one per cent '
         'to four, specifications matching one product from five to none, supplier '
         'challenges from three to none, and replacement and storage costs from '
         'ninety-four thousand to nothing.',
 outcome_q=[('What happened to unusable items?', 'they fell from four to none'),
            ('What happened to untestable requirements?', 'they fell from sixty-one per cent to four'),
            ('What happened to supplier challenges?', 'they fell from three to none'),
            ('What happened to replacement costs?', 'they fell from ninety-four thousand to nothing'),
            ('Over what period?', 'three years')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Must be of high quality',
 task=['This was the requirements section of a specification for new trolleys.',
       'This is what it said.'],
 draft=['The trolley must be of high quality and easy to clean.',
        'It must be suitable for use in a busy theatre environment.',
        'It should be similar to the model currently in use.',
        'Delivery must be prompt and installation must be included.',
        'Training must be provided for all relevant staff.',
        'The supplier must have appropriate experience in the sector.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six requirements, all mandatory, and not one of them testable.',
 asked=['high quality', 'suitable for use',
        'appropriate experience'],
 back=['4 of 23 items unusable', '61 per cent of requirements untestable',
       '94,000 in replacement and storage'],
 gap='Nobody could tell what dimension, what capacity, what training, or how any of it would be checked.',
 back_cap='Six requirements no supplier can fail and none can be held to.',
 back_note='“Similar to the model currently in use” is how a specification comes '
           'to describe one manufacturer, and it was challenged.',
 diagnosis=[('“high quality”', 'unstated criterion'),
            ('“suitable for use”', 'unstated criterion'),
            ('“prompt”', 'unstated exception'),
            ('“all relevant staff”', 'unstated exception'),
            ('“similar to the model currently in use”', 'hidden assumption'),
            ('“appropriate experience”', 'hidden assumption')],
 rewrite='Rewrite it on the six lines so that every requirement can be tested.',
 scaffold=['what the specification must survive',
           'which requirements are yours, and which must be signed',
           'what you are giving it',
           'how requirements are graded and tested',
           'who signs before publication',
           'what you do with an untestable requirement'],
 bank=['Purpose: so that a specification can be defended at a challenge and enforced on delivery',
       'Scope: non-clinical equipment and services I procure; clinical requirements must be signed by the responsible clinician, and medical device regulatory compliance is the device committee’s',
       'Inputs: the requirements as received from each ward, the measured physical constraints including lift capacity, door widths and floor loading, the clinical sign-off, the consumables and training that will be bought with the item, and the standing orders in force',
       'Criteria: every must justified by the item being useless without it; the rest demoted to should or may; a test against every requirement as measurement, witnessed demonstration or published data; ranges rather than single values wherever possible; and no requirement that matches only one manufacturer',
       'Done: the specification is signed by the clinician for clinical requirements and by estates for constraints, before publication',
       'Fallback: where a requirement cannot be tested, I remove it rather than publishing something unenforceable'],
 check=['Is each requirement graded?',
        'Has each a test method?',
        'Are values ranges where possible?',
        'Have estates confirmed the constraints?'],
 model=['so that a specification can be defended at a challenge and enforced on delivery',
        'non-clinical equipment and services I procure; clinical requirements must be signed by the responsible clinician, and medical device regulatory compliance is the device committee’s',
        'the requirements as received from each ward, the measured physical constraints including lift capacity, door widths and floor loading, the clinical sign-off, the consumables and training that will be bought with the item, and the standing orders in force',
        'every must justified by the item being useless without it; the rest demoted to should or may; a test against every requirement as measurement, witnessed demonstration or published data; ranges rather than single values wherever possible; and no requirement that matches only one manufacturer',
        'the specification is signed by the clinician for clinical requirements and by estates for constraints, before publication',
        'where a requirement cannot be tested, I remove it rather than publishing something unenforceable'],
 cost='4 of 23 items unusable, 61 per cent of requirements untestable, and 94,000 in replacement.'),

lang=dict(
 title='The Unwelcome Number · Telling a ward its preferred model cannot be bought',
 setting=[
  'Two wards have chosen a trolley eighty-six centimetres wide. The door to '
  'theatre three is eighty-two. The specification cannot name their model.',
  'Hana has to say it, keep the wards engaged in the specification, and not '
  'suggest their preference was foolish.'],
 ladder=[('Two wards with a clear preference', 'and a door four centimetres too narrow'),
         ('Eighty-six against eighty-two', 'and no way round it'),
         ('Either publish round their model', 'or say the measurement and lose the preference')],
 cap='Four centimetres, two wards, one door, and no appeal against a wall.',
 turns=[('Turn 1 · Hana', 'The door to theatre three is eighty-two centimetres and the model you have chosen is eighty-six.'),
        ('Turn 2 · Ward sister', 'We have used that model at my last hospital for six years.'),
        ('Turn 3 · Hana', 'I believe you, and it still will not go through the door here.')],
 holds=['Estates measured it twice this morning, and I have the note.',
        'Widening the door is a capital scheme of about forty thousand and eleven weeks.',
        'The specification will say eighty-two or less, which four manufacturers meet.',
        'Your clinical requirements stay exactly as you wrote them, signed by Dr Rahman.',
        'If one of the four is unacceptable in use, tell me at the demonstration and I shall score it down.',
        'And if you believe widening the door is worth forty thousand, I shall write that business case with you.'],
 redline='Never publish a specification that names a product nobody can get '
         'through the door, and never let a preference override a measurement.',
 score=['Gave both measurements in the first sentence.',
        'Accepted the ward’s experience as genuine.',
        'Offered the capital alternative honestly.',
        'Preserved the clinical requirements.',
        'Gave the ward a role at the demonstration.'],
 a=[('How wide is the door?', 'eighty-two centimetres'),
    ('How wide is the preferred model?', 'eighty-six'),
    ('Who measured it?', 'estates, twice that morning'),
    ('What would widening the door cost?', 'about forty thousand and eleven weeks'),
    ('How many manufacturers meet eighty-two?', 'four'),
    ('What is the redline?', 'never let a preference override a measurement')]),

rev_fig=figs.split('A SPECIFICATION',
                   'Say',
                   ['must be adjustable fifty to ninety centimetres',
                    'tested by measurement on delivery',
                    'should have a brake on each of four wheels',
                    'must pass a doorway of eighty-two centimetres'],
                   'Never say',
                   ['must be of high quality',
                    'suitable for a busy environment',
                    'similar to our current model',
                    'delivery must be prompt']),
rev_fig_cap='Four requirements with a test each, and four no supplier can fail.',
rev=dict(
 read=[('What will nineteen musts attract?',
        ['one bid or none', 'a competitive field',
         'a better price', 'a faster delivery'], 0),
       ('What is a must?',
        ['a requirement without which the item is useless',
         'a requirement somebody prefers',
         'a requirement the market expects',
         'a requirement a clinician likes'], 0),
       ('What makes “easy to clean” useless?',
        ['nobody can fail it', 'it is too strict',
         'it excludes suppliers', 'it is clinical'], 0),
       ('What two constraints decided the purchase?',
        ['the lift capacity and the door width', 'the budget and the timetable',
         'the warranty and the training', 'the brand and the colour'], 0)],
 listen_text='Give it the requirements as received, the measured constraints, the '
             'clinical sign-off and the consumables. Ask for the grading of each '
             'requirement.',
 listen=[('Give it the requirements as ____________.', 'received'),
         ('And the ____________ constraints.', 'measured'),
         ('And the clinical ____________.', 'sign-off'),
         ('Ask for the ____________ of each requirement.', 'grading')],
 speak=['Sort twelve requirements into must, should and may.',
        'Then state a test for each, or declare it untestable.'],
 write='Write a six-line tasking for a specification.',
 vocab=[('An option worth asking about is a may that costs nothing to ____________.', 'include'),
        ('A measurement with a consequence is a ____________ that matters.', 'dimension'),
        ('What must be provided with the thing is a ____________ requirement.', 'training'),
        ('A requirement that cannot be enforced is a test nobody could ____________.', 'perform')],
 gram=[('We ____________ measured the door.', 'have'),
       ('This will be ____________ as an option.', 'scored'),
       ('Verified ____________ published dimensions.', 'from'),
       ('Tested by witnessed ____________.', 'demonstration')]),

found=['Make a requirement a must only where the item would be useless without it.',
       'Attach a test to every requirement, or remove the requirement.',
       'Measure the lift, the door and the floor before you publish.',
       'Write ranges, never one manufacturer’s dimensions.'],
end_line='Two of four unusable purchases were a lift capacity and a door width, and both could have been established in eleven minutes with a tape measure.',
end_next='Next: An Invoice Dispute, in Four Letters')
