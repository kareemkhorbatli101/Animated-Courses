# -*- coding: utf-8 -*-
import figs2 as F

U = dict(
num=6,
title='The Finding, in One Sentence',
level='A2.2',
strap='CEFR A2.2  ·  Grammar: the order of a clinical description: tooth, surface, '
      'finding, extent, how detected  ·  Everything from Units 1 to 5, in one line',
threads={'domain': ['findings', 'extent', 'detection'],
         'function': ['describing', 'ordering', 'separating what you saw from what you '
                      'concluded']},
can_do=['describe a finding in the fixed order a chart and a colleague both expect',
        'say how far a lesion extends, in the tissue terms of Unit 3',
        'say how a finding was detected, and how it was not',
        'tell a finding from the conclusion you have drawn from it',
        'record a sound surface and a restored one without confusing the two'],
recycles='Unit 2 (notation), Unit 3 (the tissues), Unit 4 (the surfaces) and Unit 5 '
         '(the instrument that reached it)',
prepares='Unit 7, where the same sentence is used of the tissues round a tooth rather '
         'than the tooth itself',

warm=['How would you describe a small cavity to somebody in the next room?',
      'What is the difference between what you saw and what you think it means?',
      'Which part of a description do you find yourself leaving out?'],
warm_fig=F.step_sequence('ONE FINDING, FIVE PARTS',
    ['The tooth, in notation.',
     'The surface, in one of the eight terms.',
     'The finding itself, named.',
     'How far it extends, in tissue terms.',
     'How it was detected, and how it was not.'],
    stop_points=[5],
    note='Five parts. The fifth is the one that separates what you saw from what you '
         'worked out.'),
warm_fig_cap='The five parts of a finding, in the order a reader expects them.',
warm_fig_alt='Five numbered steps for describing a finding, from the tooth in notation '
             'to how it was detected, with the detection step marked.',
warm_fig2=F.icon_cards('WHAT A FINDING IS, AND WHAT IT IS NOT',
    [('what you saw', 'mirror'), ('what the film showed', 'xray'),
     ('what you felt with a probe', 'probe'), ('what you think it means', 'cross')],
    cols=4,
    note='Three of these belong in the finding. The fourth belongs somewhere else on '
         'the page.'),
warm_fig2_cap='Four things a clinician has after an examination, and the one that is not '
              'a finding.',
p1_cards=['a finding', 'a lesion', 'a cavity', 'a restoration', 'sound', 'to extend'],

preview_intro='This unit has eight terms and ten sentences. Read this page before you do '
              'anything else. Six of the eight are words you have heard every day in '
              'clinic without being asked to define them.',
set_fig_title='THE EIGHT TERMS OF UNIT 6',
set_fig_cap='The eight terms you will be able to use, in speech and in writing, by the '
            'end of this unit.',
set=[
 dict(term='a finding', pos='noun', thread='domain',
      definition='something observed during an examination, before any conclusion is '
                 'drawn from it',
      example='The finding was a cavity on the occlusal surface.',
      collocation='a clinical finding  ·  record the finding', recycle=[6, 7, 9]),
 dict(term='a lesion', pos='noun', thread='domain',
      definition='an area of tissue that has been changed by disease or injury',
      example='The lesion lies at the contact point.',
      collocation='a carious lesion  ·  the extent of the lesion', recycle=[6, 7, 9]),
 dict(term='a cavity', pos='noun', thread='domain',
      definition='a hole in a tooth where hard tissue has been lost',
      example='There is a small cavity in the enamel only.',
      collocation='a cavity in  ·  prepare a cavity', recycle=[6, 8]),
 dict(term='a restoration', pos='noun', thread='domain',
      definition='material placed in a tooth to replace tissue that has been lost',
      example='The restoration is sound, with no gap at the margin.',
      collocation='an existing restoration  ·  the margin of a restoration',
      recycle=[6, 8, 9]),
 dict(term='sound', pos='adjective', thread='domain',
      definition='healthy and undamaged, as far as the examination could show',
      example='The buccal surface is sound.',
      collocation='clinically sound  ·  a sound margin', recycle=[6, 7]),
 dict(term='to extend', pos='verb', thread='domain',
      definition='to reach from one place into another',
      example='The lesion extends into dentine but not as far as the pulp.',
      collocation='extends into  ·  extends as far as', recycle=[6, 7, 9]),
 dict(term='to detect', pos='verb', thread='function',
      definition='to find something that was not visible or obvious',
      example='It was detected on a bitewing radiograph.',
      collocation='detected on  ·  not detected clinically', recycle=[6, 7]),
 dict(term='to record', pos='verb', thread='function',
      definition='to write something down so that another reader can use it',
      example='Record what you saw, and record what you could not see.',
      collocation='record the finding  ·  recorded as not visible', recycle=[6, 8, 9]),
],
set_note='Learn these eight. The difference between a finding and a conclusion runs '
         'through all of them.',

phrase_fig_title='TEN SENTENCES FOR DESCRIBING A FINDING',
phrases=[
 ('Naming the tooth and the surface',
  ['The finding is on the upper right first molar.',
   'It lies on the distal surface, at the contact point.']),
 ('Naming the finding',
  ['There is a carious lesion.',
   'There is an existing restoration with a sound margin.']),
 ('Saying how far it goes',
  ['It extends into dentine.',
   'It does not extend as far as the pulp.',
   'It is confined to enamel.']),
 ('Saying how it was detected',
  ['It was detected on a bitewing radiograph.',
   'It was not visible on direct examination.',
   'The surface could not be inspected, and is recorded as not visible.']),
],
phrase_fig_cap='Ten sentences, in four groups. The fourth group is the one that keeps a '
               'finding honest.',
phrase_note='Note the passive throughout group four: it was detected, it was not '
            'visible. The agent is not the point; the method is.',

receptive=[
 dict(term='carious', definition='affected by caries',
      example='A carious lesion was found on the distal surface.'),
 dict(term='the margin', definition='the edge where a restoration meets the tooth',
      example='There is no gap at the margin.'),
 dict(term='an increment', definition='one layer of material placed at a time',
      example='The restoration was placed in two increments.'),
 dict(term='clinically', definition='by examination rather than by radiograph',
      example='It was not detectable clinically.'),
 dict(term='an inference', definition='a conclusion drawn from what was observed',
      example='That the lesion is active is an inference, not a finding.'),
 dict(term='baseline', definition='a first measurement, for later comparison',
      example='Record it now as a baseline.'),
],
receptive_fig_title='TERMS TO RECOGNISE IN UNIT 6',
receptive_fig_cap='You will meet these six in the readings and the lecture. You are not '
                  'asked to produce them yet.',

preview_task=dict(kind='match', rubric='Match each term with what it means.',
  example='a finding  —  something observed during an examination',
  how='Cover the preview page first. Then check your answers against it.',
  pairs=[('a finding', 'something observed during an examination'),
         ('a lesion', 'an area of tissue changed by disease or injury'),
         ('a cavity', 'a hole where hard tissue has been lost'),
         ('a restoration', 'material placed to replace lost tissue'),
         ('sound', 'healthy and undamaged, as far as the examination showed'),
         ('to detect', 'to find something that was not visible or obvious')]),

vocab_tasks=[
 dict(kind='gap', rubric='Complete each sentence with one of the eight terms.',
   example='The finding was a cavity on the occlusal surface.',
   pairs=[('The ____________ was a cavity on the occlusal surface.', 'finding'),
          ('The ____________ lies at the contact point.', 'lesion'),
          ('There is a small ____________ in the enamel only.', 'cavity'),
          ('The ____________ is sound, with no gap at the margin.', 'restoration'),
          ('The buccal surface is ____________.', 'sound'),
          ('The lesion ____________ into dentine.', 'extends'),
          ('It was ____________ on a bitewing radiograph.', 'detected'),
          ('____________ what you saw, and what you could not see.', 'Record')],
   fig=F.morph_builder('FOUR MORE TERMS FROM THE PARTS YOU NOW HAVE',
     [('', 'cari', '-ous', 'carious', 'affected by caries'),
      ('', 'restor', '-ation', 'a restoration', 'the act or result of restoring'),
      ('', 'detect', '-able', 'detectable', 'able to be found'),
      ('un-', 'detect', '-ed', 'undetected', 'not found at the time')],
     note='Two of these four appear in the readings. You can read all four.'),
   fig_cap='Four further terms built from the parts of the eight you have learnt.'),

 dict(kind='odd', rubric='Three of the four belong to one class. Circle the one that '
                         'does not, and name the class the three share.',
   how='Name the class out loud before you name the odd one out. Then say which of the '
       'four you wrote in a chart this week.',
   example='a cavity / a lesion / a restoration / sound  —  sound is not a thing',
   bank=['something present in the tooth', 'a judgement about it', 'a method',
         'a direction'],
   bank_head='The four classes these terms fall into',
   pics=['a cavity', 'a restoration', 'sound', 'to detect'],
   pairs=[('a cavity / a lesion / a restoration / sound', 'sound'),
          ('detected / observed / seen / active', 'active'),
          ('extends into / reaches / goes as far as / is confined to', 'is confined to'),
          ('a finding / an observation / a conclusion / a measurement', 'a conclusion'),
          ('enamel / dentine / pulp / occlusal', 'occlusal')]),

 dict(kind='short', pics=['a finding', 'a lesion', 'to extend', 'to record'],
   rubric='Write the finding as one sentence, in the fixed order.',
   example='UR6, distal, caries, into dentine, bitewing  (A carious lesion on the '
           'distal surface of the upper right first molar extends into dentine and was '
           'detected on a bitewing radiograph.)',
   pairs=[('UR6, distal, caries, into dentine, bitewing',
           'A carious lesion on the distal surface of the upper right first molar '
           'extends into dentine and was detected on a bitewing radiograph.'),
          ('LL7, occlusal, cavity, enamel only, seen directly',
           'A cavity on the occlusal surface of the lower left second molar is confined '
           'to enamel and was seen on direct examination.'),
          ('UL5, mesial, surface not inspected',
           'The mesial surface of the upper left second premolar could not be inspected '
           'and is recorded as not visible.'),
          ('LR6, occlusal, restoration, margin sound, seen directly',
           'There is an existing restoration on the occlusal surface of the lower right '
           'first molar with a sound margin, seen on direct examination.'),
          ('UR1, labial, no finding',
           'The labial surface of the upper right central incisor is sound.')],
   fig=F.mini_table('THE FIXED ORDER, AND WHAT GOES IN EACH PLACE',
     ['Place', 'What goes there', 'From'],
     [['1', 'the tooth, in notation', 'Unit 2'],
      ['2', 'the surface', 'Unit 4'],
      ['3', 'the finding', 'this unit'],
      ['4', 'how far it extends, in tissue', 'Unit 3'],
      ['5', 'how it was detected', 'Unit 5']], highlight=[5]),
   fig_cap='Five places in one sentence, and the unit each of them comes from.'),

 dict(kind='sort', rubric='Write F for a finding, C for a conclusion drawn from one and '
                          'A for an action that follows.',
   columns=('F', 'C', 'A'),
   how='Then say which of the three your own clinic writes in the same column of the '
       'chart, and whether it should.',
   example='A cavity on the occlusal surface.  —  F',
   bank=['a finding', 'a conclusion', 'an action'],
   bank_head='The three things a chart line can be',
   pics=['a finding', 'a lesion', 'to detect', 'to record'],
   pairs=[('A cavity on the occlusal surface.', 'F'),
          ('The lesion is active.', 'C'),
          ('Bitewing radiograph at the next visit.', 'A'),
          ('The distal surface could not be inspected.', 'F'),
          ('The patient is at high risk of further caries.', 'C'),
          ('Restoration at the next appointment.', 'A')],
   fig=F.contrast('THREE KINDS OF LINE, ONE CHART',
     'A FINDING', ['a cavity on the occlusal surface',
                   'the distal surface could not be inspected',
                   'no gap at the margin'],
     'A CONCLUSION OR AN ACTION', ['the lesion is active',
                                   'high caries risk',
                                   'restore at the next visit'],
     'Another clinician could have observed the same.',
     'Another clinician might reasonably have concluded otherwise.'),
   fig_cap='The distinction this unit exists for, with three examples on each side.'),
],

g_point='the order of a clinical description: tooth, surface, finding, extent, how '
        'detected',
g_source='the ten sentences on the preview page',
g_rule=['A carious lesion on the distal surface of the upper right first molar extends '
        'into dentine. The order is fixed: tooth, surface, finding, extent. A reader '
        'who knows the order can stop reading as soon as they have what they need.',
        'It was detected on a bitewing radiograph. The passive is used because the '
        'method matters and the person does not. Name the method, not yourself.',
        'It extends into dentine but not as far as the pulp. Say how far it goes and '
        'where it stops. An extent with no limit on it is only half an observation.'],
g_mnemonic_title='THREE PATTERNS THAT CARRY A FINDING',
g_mnemonic=[
 ('on the … of the …', 'places it: surface, then tooth',
  'on the distal surface of the upper right six', 'tooth'),
 ('extends into … but not …', 'gives the extent and its limit',
  'extends into dentine but not as far as the pulp', 'xray'),
 ('was detected on …', 'names the method, not the person',
  'was detected on a bitewing radiograph', 'probe'),
],
g_mnemonic_cap='Three patterns. Together they make one sentence a colleague can act on.',
g_mnemonic_note='The second pattern is the one students leave half-finished.',
g_fig=('TWO WAYS TO HAND OVER A FINDING',
       'IN THE ORDER IT OCCURRED TO YOU',
       ['There is some caries, I think it is quite deep,',
        'it was on the radiograph, upper right somewhere,',
        'between two of the back teeth.'],
       'IN THE FIXED ORDER',
       ['A carious lesion on the distal surface of the upper right first molar,',
        'extending into dentine but not as far as the pulp,',
        'detected on a bitewing and not visible clinically.'],
       'Twenty-four words, and a colleague who has to ask three questions.',
       'Twenty-eight words, and a colleague who has to ask none.'),
g_fig_cap='The same finding, handed over twice. The second is longer and costs less.',
g_tasks=[
 dict(kind='gap', rubric='Complete each sentence with into, as, on or not.',
   example='The lesion extends into dentine.',
   pairs=[('The lesion extends ____________ dentine.', 'into'),
          ('It does not extend ____________ far as the pulp.', 'as'),
          ('It was detected ____________ a bitewing radiograph.', 'on'),
          ('It was ____________ visible on direct examination.', 'not'),
          ('The cavity extends ____________ enamel only.', 'into'),
          ('The finding is ____________ the occlusal surface.', 'on')]),

 dict(kind='choice', rubric='Circle a, b or c.',
   how='Each of these is a sentence a first-year student has written at least once. '
       'Then say which of the five you would be most likely to write yourself.',
   example='A finding is   a) what you saw   b) what you think.   Answer: a',
   bank=['a finding', 'a conclusion', 'an action', 'a method'],
   bank_head='The four things a chart line can be, and which each sentence is',
   pics=['a finding', 'a lesion', 'to detect', 'to record'],
   pairs=[('“The lesion is active” is   a) a finding   b) a conclusion   '
           'c) an action', 'b'),
          ('“It extends into dentine” needs   a) a limit as well   b) nothing more   '
           'c) a radiograph', 'a'),
          ('A surface that could not be inspected is recorded as   a) sound   '
           'b) not visible   c) left blank', 'b'),
          ('“I found it on the bitewing” should read   a) it was detected on a bitewing   '
           'b) the bitewing found it   c) I saw it', 'a'),
          ('The first thing named in the sentence is   a) the finding   b) the tooth   '
           'c) the method', 'b')]),

 dict(kind='short', pics=['a finding', 'a cavity', 'a restoration', 'to record'],
   rubric='Rewrite each description in the fixed order, as one'
                           'sentence.',
   example='There is caries on the back tooth, quite deep, I saw it on the film.  '
           '(A carious lesion on the … extends into … and was detected on …)',
   how='Tooth, surface, finding, extent, method. Nothing else.',
   pairs=[('There is caries on the back tooth, quite deep, I saw it on the film.',
           'A carious lesion on the upper right first molar extends into dentine and '
           'was detected on a bitewing radiograph.'),
          ('The filling in the lower six looks all right to me.',
           'The restoration on the occlusal surface of the lower right first molar has '
           'a sound margin on direct examination.'),
          ('I could not get in between the five and the six.',
           'The distal surface of the upper right second premolar could not be '
           'inspected and is recorded as not visible.'),
          ('Small hole in the top of the lower left seven, only in the enamel.',
           'A cavity on the occlusal surface of the lower left second molar is confined '
           'to enamel.')]),

 dict(kind='gap', rubric='One word is wrong in each sentence. Write the correct one.',
   example='The lesion extends to dentine.  →  into',
   pairs=[('The lesion extends to dentine.', 'into'),
          ('It was detected in a bitewing radiograph.', 'on'),
          ('The surface was recorded as sound, although it was not inspected.',
           'visible'),
          ('I detected it on the radiograph.', 'was'),
          ('The lesion is active on the distal surface.', 'carious')]),
],

listen_intro='Three recordings: a lecture on the difference between a finding and a '
             'conclusion, a tutorial in which the two are confused, and a clinic in '
             'which a finding is handed over. Do the task before, the task while you '
             'listen, and the task after.',
listening=[
 dict(title='Lecture: a finding, a conclusion, and an action', genre='lecture',
   what='Dr Nilsen separates three kinds of chart line and shows what happens when they '
        'are mixed.',
   speakers=['Dr Petra Nilsen', 'Leila Mansour'],
   conv_lines=[('L', 'A chart line is one of three things.'),
               ('L', 'A finding, a conclusion, or an action.'),
               ('R', 'And “the lesion is active”?'),
               ('L', 'A conclusion. You did not observe activity.'),
               ('R', 'What did I observe?'),
               ('L', 'A lesion. Everything else you worked out.')],
   conv_cap='Six turns in which one familiar chart line turns out to be two things.',
   conv_note='The student has not made an error of fact. She has put a conclusion in '
             'the column reserved for observations.',
   pre=dict(kind='choice',
     rubric='Before you listen, sort these three into kinds.',
     how='Use the preview page. Then listen and check.',
     example='“A cavity on the occlusal surface” is   a) a finding   b) a conclusion.   '
             'Answer: a',
     bank=['a finding', 'a conclusion', 'an action', 'a method'],
     bank_head='The three kinds of chart line, and the fourth thing a sentence can name',
     pics=['a finding', 'a lesion', 'to record', 'to detect'],
     pairs=[('“A cavity on the occlusal surface” is   a) a finding   b) a conclusion   '
             'c) an action', 'a'),
            ('“High caries risk” is   a) a finding   b) a conclusion   c) an action', 'b'),
            ('“Bitewing at next visit” is   a) a finding   b) a conclusion   '
             'c) an action', 'c')]),
   fig=F.mini_table('THREE KINDS OF LINE, AND THE TEST FOR EACH',
     ['Kind', 'The test', 'Example'],
     [['a finding', 'could another clinician have observed it?',
       'a cavity on the occlusal surface'],
      ['a conclusion', 'did you work it out?', 'the lesion is active'],
      ['an action', 'does it say what happens next?', 'bitewing at next visit'],
      ['a method', 'does it say how you know?', 'detected on a bitewing']],
     highlight=[2], note='The shaded row is the one that gets written in the wrong '
                         'column.'),
   fig_cap='Three kinds of chart line, with a one-question test for each.',
   script=[('Dr Nilsen', 'Every line in a chart is one of three things.'),
           ('Dr Nilsen', 'A finding, a conclusion, or an action.'),
           ('Dr Nilsen', 'A finding is something you observed.'),
           ('Dr Nilsen', 'The test is simple: could another clinician have observed it?'),
           ('Leila', 'A cavity on the occlusal surface.'),
           ('Dr Nilsen', 'That is a finding. Anybody looking would have seen it.'),
           ('Dr Nilsen', 'A conclusion is something you worked out.'),
           ('Leila', 'And “the lesion is active”?'),
           ('Dr Nilsen', 'A conclusion. You did not observe activity.'),
           ('Leila', 'What did I observe?'),
           ('Dr Nilsen', 'A lesion. Everything else you worked out from it.'),
           ('Leila', 'Is that wrong?'),
           ('Dr Nilsen', 'It is not wrong. It is in the wrong column.'),
           ('Dr Nilsen', 'A reader cannot tell which part you saw.'),
           ('Leila', 'And in a year, nor can I.'),
           ('Dr Nilsen', 'Nor can you. That is the whole argument.'),
           ('Dr Nilsen', 'Now the third kind. An action says what happens next.'),
           ('Leila', 'Bitewing at the next visit.'),
           ('Dr Nilsen', 'Exactly. And it belongs at the end, not among the findings.'),
           ('Dr Nilsen', 'There is a fourth thing, and it is not a kind of line.'),
           ('Leila', 'The method?'),
           ('Dr Nilsen', 'The method. How you know. It travels with the finding.'),
           ('Dr Nilsen', 'Detected on a bitewing. Not visible clinically. Both.'),
           ('Leila', 'Why both?'),
           ('Dr Nilsen', 'Because the second one is also a finding about the surface.'),
           ('Leila', 'That it could not be seen.'),
           ('Dr Nilsen', 'That it could not be seen. Which is worth more than a guess.'),
           ('Dr Nilsen', 'Keep the three kinds apart and the chart reads itself.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='How many kinds of chart line are there?  (three)',
     pairs=[('How many kinds of chart line are there?', 'three'),
            ('What is the test for a finding?',
             'could another clinician have observed it'),
            ('What kind of line is “the lesion is active”?', 'a conclusion'),
            ('What is wrong with it?', 'it is in the wrong column'),
            ('What is the fourth thing, which is not a kind of line?', 'the method'),
            ('Why record that a surface could not be seen?',
             'it is worth more than a guess')])},
   post=dict(kind='short', rubric='Answer Dr Nilsen’s questions as Leila does.',
     example='“Could another clinician have observed it?”  (yes, it is a finding)',
     pairs=[('“Could another clinician have observed it?”', 'yes, it is a finding'),
            ('“Did you observe activity?”', 'no, I worked it out'),
            ('“Where does an action belong?”', 'at the end'),
            ('“What travels with the finding?”', 'the method'),
            ('“Why record what could not be seen?”', 'it is better than a guess')]),
   point='You now have a one-question test for every line you will ever write in a '
         'chart, and a place to put the lines that fail it.',
   ask='State the test for a finding, and say what the other two kinds are.',
   icons=['book', 'form', 'pen', 'tick']),

 dict(title='Tutorial: a conclusion written as a finding', genre='tutorial',
   what='Daniel has written that a lesion is active, and Dr Nilsen asks him what he '
        'actually saw.',
   speakers=['Dr Petra Nilsen', 'Daniel Owusu'],
   conv_lines=[('L', 'You have written that the lesion is active.'),
               ('R', 'It looked active.'),
               ('L', 'What did it look like?'),
               ('R', 'Soft, and pale, and it caught the probe.'),
               ('L', 'Write that. The reader can decide the rest.'),
               ('R', 'But I am the one who examined it.')],
   conv_cap='Six turns in which a student defends a conclusion he is entitled to draw.',
   pre=dict(kind='choice',
     rubric='Before you listen, decide what is wrong with writing a conclusion as a '
            'finding.',
     how='Say your answer out loud. Then listen.',
     example='A conclusion in the findings column   a) hides the evidence   '
             'b) saves time.   Answer: a',
     bank=['the evidence', 'the conclusion', 'the reader', 'the time'],
     bank_head='Four things at stake when the two are mixed',
     pics=['a finding', 'a lesion', 'to record', 'sound'],
     pairs=[('Writing a conclusion as a finding   a) hides what was observed   '
             'b) is more efficient   c) is always wrong', 'a'),
            ('The student is   a) entitled to his conclusion   b) not entitled to it   '
             'c) mistaken about the facts', 'a'),
            ('The repair is to   a) delete the conclusion   b) write the observations '
             'as well   c) ask a supervisor', 'b')]),
   fig=F.form_annotated('THE SAME EXAMINATION, WRITTEN TWO WAYS',
     'TUTORIAL  ·  18 MAY',
     [('As written', 'UR6 distal: active carious lesion'),
      ('What was observed', 'soft, pale, catches the probe'),
      ('What was concluded', 'that the lesion is active'),
      ('Rewritten', 'UR6 distal: carious lesion, soft and pale, catches the probe'),
      ('Conclusion, separately', 'appears active; monitor or restore')],
     callouts=[(3, 'the observations were always there; they were never written')],
     note='Five lines. The student saw everything he needed and recorded a summary of '
          'it instead.'),
   fig_cap='One examination, written as a conclusion and then as what was seen.',
   script=[('Dr Nilsen', 'You have written that the lesion is active.'),
           ('Daniel', 'It looked active.'),
           ('Dr Nilsen', 'What did it look like?'),
           ('Daniel', 'Soft. Pale. It caught the probe slightly.'),
           ('Dr Nilsen', 'Good. Why is none of that on the page?'),
           ('Daniel', 'Because I put what it added up to.'),
           ('Dr Nilsen', 'Write what you saw. The reader can add it up.'),
           ('Daniel', 'But I am the one who examined it.'),
           ('Dr Nilsen', 'You are. And in six months somebody else will be.'),
           ('Daniel', 'They will have my word for it.'),
           ('Dr Nilsen', 'They will have your conclusion and none of your evidence.'),
           ('Daniel', 'Should I not write a conclusion at all?'),
           ('Dr Nilsen', 'Write both. Keep them apart.'),
           ('Daniel', 'Findings first, then what I think.'),
           ('Dr Nilsen', 'Findings first. Then: appears active; monitor or restore.'),
           ('Daniel', 'That is longer.'),
           ('Dr Nilsen', 'By nine words. Count what it buys.'),
           ('Daniel', 'Somebody can disagree with me without re-examining.'),
           ('Dr Nilsen', 'That is exactly it. And so can you, later.'),
           ('Daniel', 'What if my conclusion was right?'),
           ('Dr Nilsen', 'Then the evidence supports it, and it is still worth having.'),
           ('Daniel', 'And if it was wrong?'),
           ('Dr Nilsen', 'Then the evidence saves the next clinician a month.'),
           ('Daniel', 'Either way the observations are the useful part.'),
           ('Dr Nilsen', 'Either way. That is why they go first.'),
           ('Daniel', 'I shall rewrite it.'),
           ('Dr Nilsen', 'Rewrite it, and keep the conclusion. You earned it.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='What had Daniel written?  (that the lesion is active)',
     pairs=[('What had Daniel written?', 'that the lesion is active'),
            ('What had he actually observed?', 'soft, pale, caught the probe'),
            ('Why did he not write it?', 'he wrote what it added up to'),
            ('How much longer is the better version?', 'nine words'),
            ('What does writing both allow?', 'somebody to disagree without re-examining'),
            ('Should he keep the conclusion?', 'yes')])},
   post=dict(kind='short', rubric='Rewrite each of Daniel’s answers as a finding.',
     example='“It looked active.”  (soft, pale, catches the probe)',
     pairs=[('“It looked active.”', 'soft, pale, catches the probe'),
            ('“It is quite deep.”', 'it extends into dentine'),
            ('“The filling is fine.”', 'no gap at the margin on direct examination'),
            ('“I could not really see it.”',
             'the surface could not be inspected and is recorded as not visible'),
            ('“It is probably going to need doing.”',
             'appears active; monitor or restore')]),
   point='You now know that a conclusion is worth keeping and worth separating, and that '
         'the separation costs about nine words.',
   ask='What exactly did Daniel observe, and what did he conclude?',
   icons=['book', 'pen', 'person', 'cross']),

 dict(title='In the clinic: handing a finding to somebody who was not there',
   genre='clinical supervision',
   what='Leila hands over three findings and Dr Rahman stops her at each missing part.',
   speakers=['Dr Yusuf Rahman', 'Leila Mansour'],
   conv_lines=[('R', 'Caries on the upper right six.'),
               ('L', 'Which surface?'),
               ('R', 'Distal.'),
               ('L', 'How far?'),
               ('R', 'Into dentine, not to the pulp.'),
               ('L', 'And how do you know?')],
   conv_cap='Six turns in which every answer is right and only the order is wrong.',
   pre=dict(kind='choice',
     rubric='Before you listen, decide what gets left out of a spoken handover.',
     how='Three of these are regularly left out. One never is.',
     example='The tooth is   a) usually said   b) usually left out.   Answer: a',
     bank=['the tooth', 'the surface', 'the extent', 'the method'],
     bank_head='The four parts of a handover, and how often each survives',
     pics=['a finding', 'a lesion', 'to extend', 'to detect'],
     pairs=[('The part never left out is   a) the tooth   b) the extent   '
             'c) the method', 'a'),
            ('The part left out most often is   a) the surface   b) the method   '
             'c) the tooth', 'b'),
            ('A handover without the method   a) is still usable   b) cannot be '
             'checked   c) is shorter and better', 'b')]),
   fig=F.mini_table('WHAT WAS SAID, AND WHAT HAD TO BE ASKED FOR',
     ['Said without prompting', 'Asked for'],
     [['the tooth', 'the surface'],
      ['the finding', 'the extent'],
      ['—', 'how it was detected'],
      ['—', 'what could not be seen']],
     note='Two parts out of four arrived on their own. The other two took three '
          'questions.'),
   fig_cap='One handover, and the half of it that had to be dragged out.',
   script=[('Dr Rahman', 'Tell me what you found, as if I had not been here.'),
           ('Leila', 'Caries on the upper right six.'),
           ('Dr Rahman', 'Which surface?'),
           ('Leila', 'Distal.'),
           ('Dr Rahman', 'How far does it go?'),
           ('Leila', 'Into dentine. Not as far as the pulp.'),
           ('Dr Rahman', 'And how do you know that?'),
           ('Leila', 'From the bitewing.'),
           ('Dr Rahman', 'Say the whole thing again, in one sentence.'),
           ('Leila', 'A carious lesion on the distal surface of the upper right six,'),
           ('Leila', 'extending into dentine but not to the pulp,'),
           ('Leila', 'detected on a bitewing and not visible clinically.'),
           ('Dr Rahman', 'That is it. How many questions did I have to ask?'),
           ('Leila', 'Three.'),
           ('Dr Rahman', 'Three. And the sentence is four words longer than yours was.'),
           ('Leila', 'So the questions cost more than the words.'),
           ('Dr Rahman', 'Every time. Now the second one.'),
           ('Leila', 'A restoration on the occlusal surface of the lower left six,'),
           ('Leila', 'with a sound margin, seen on direct examination.'),
           ('Dr Rahman', 'Good. No questions. And the third?'),
           ('Leila', 'The mesial surface of the upper right five could not be inspected,'),
           ('Leila', 'and is recorded as not visible.'),
           ('Dr Rahman', 'That is a finding too, and students often leave it out.'),
           ('Leila', 'Because nothing was found.'),
           ('Dr Rahman', 'Something was found: that you could not see it.'),
           ('Leila', 'And that is why the bitewing was taken.'),
           ('Dr Rahman', 'That is why the bitewing was taken. It all hangs together.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='Which tooth is the first finding on?  (the upper right six)',
     pairs=[('Which tooth is the first finding on?', 'the upper right six'),
            ('Which surface?', 'the distal'),
            ('How far does the lesion extend?', 'into dentine, not to the pulp'),
            ('How was it detected?', 'on a bitewing'),
            ('How many questions did the supervisor have to ask?', 'three'),
            ('Why is “not visible” a finding?',
             'something was found: that it could not be seen')])},
   post=dict(kind='short', rubric='Write the question the supervisor asks to get each '
                                  'missing part.',
     example='the surface  (Which surface?)',
     pairs=[('the surface', 'Which surface?'),
            ('the extent', 'How far does it go?'),
            ('the method', 'How do you know that?'),
            ('the whole thing at once', 'Say the whole thing in one sentence.'),
            ('a surface that was not inspected',
             'What could you not see?')]),
   point='You now know which two parts of a finding arrive on their own and which two '
         'have to be asked for, which is why the order is fixed.',
   ask='Which three questions did the supervisor have to ask, and why?',
   icons=['probe', 'speech', 'xray', 'tick']),
],

speaking=[
 dict(title='One finding, in one sentence',
   rubric='Hand five findings to a partner, each in a single sentence in the fixed order.',
   how='Student B may ask a question whenever a part is missing, and counts the '
       'questions. Three minutes each, then swap.',
   conv=['Dr Yusuf Rahman', 'Leila Mansour'],
   conv_lines=[('R', 'A carious lesion on the distal surface of the upper right six,'),
               ('R', 'extending into dentine but not to the pulp,'),
               ('R', 'detected on a bitewing and not visible clinically.'),
               ('L', 'No questions.'),
               ('R', 'Second one?'),
               ('L', 'Go on.')],
   model=[('Student', 'A carious lesion on the distal surface of the upper right first '
                      'molar, extending into dentine but not as far as the pulp, '
                      'detected on a bitewing and not visible clinically.'),
          ('Student', 'A cavity on the occlusal surface of the lower left second molar, '
                      'confined to enamel, seen on direct examination.'),
          ('Student', 'A restoration on the occlusal surface of the lower right first '
                      'molar, with a sound margin, seen on direct examination.'),
          ('Student', 'The mesial surface of the upper right second premolar could not '
                      'be inspected and is recorded as not visible.'),
          ('Student', 'The labial surface of the upper right central incisor is sound.')],
   frame=[['Change this', 'Keep this', 'Why'],
          ['the tooth and the surface', 'on the … surface of the …',
           'the order is what lets a listener stop asking'],
          ['the extent', 'extending into … but not …',
           'an extent with no limit is half an observation'],
          ['nothing in the method', 'detected on … and not visible …',
           'both halves are findings']],
   checklist=['every sentence names the tooth before the surface',
              'every extent has a limit on it',
              'every finding says how it was detected',
              'a surface you could not see is still described'],
   point='You can hand over a finding in one sentence that produces no questions, which '
         'is shorter than the conversation it replaces.',
   icons=['speech', 'tooth', 'xray', 'tick']),

 dict(title='Separating what you saw from what you think',
   rubric='Give a partner a finding and a conclusion, kept apart, for four cases.',
   how='Student B listens for the join and says “that is a conclusion” the moment one '
       'arrives inside a finding. Four minutes, then swap. Use a tooth you examined '
       'this week.',
   conv=['Dr Petra Nilsen', 'Daniel Owusu'],
   conv_lines=[('R', 'Soft, pale, and it catches the probe.'),
               ('L', 'That is what you saw. And what do you think?'),
               ('R', 'That it is active.'),
               ('L', 'Good. Two sentences, not one.'),
               ('R', 'Findings first.'),
               ('L', 'Findings first, always.')],
   model=[('Student', 'Finding: a carious lesion on the distal surface, soft and pale, '
                      'catching the probe.'),
          ('Student', 'Conclusion: it appears to be active.'),
          ('Student', 'Finding: a restoration with a visible gap at the mesial margin.'),
          ('Student', 'Conclusion: it is likely to be leaking and should be replaced.'),
          ('Student', 'Finding: the distal surface could not be inspected.'),
          ('Student', 'Action: bitewing radiograph before any treatment is planned.')],
   cards=[dict(who='Student A', brief='the student. You may not use “active”, '
                                      '“leaking” or “needs doing” inside a finding.'),
          dict(who='Student B', brief='the supervisor. Stop your partner the moment a '
                                      'conclusion appears in a finding.')],
   checklist=['every finding could have been observed by somebody else',
              'every conclusion is in its own sentence',
              'you kept the conclusion rather than dropping it',
              'the action came last'],
   point='You can keep a conclusion and still make clear which part of the record is '
         'evidence.',
   icons=['book', 'pen', 'cross', 'tick']),

 dict(title='The same finding, for the patient it belongs to',
   rubric='Describe one finding to the patient without any of the eight terms.',
   how='Student B is the patient and asks what it means for them. Three minutes, then '
       'swap. Then say which of your sentences you would also write in the record.',
   conv=['Leila Mansour', 'Thandiwe Mabaso'],
   conv_lines=[('R', 'What did you find?'),
               ('L', 'A small area of decay between two of your back teeth.'),
               ('R', 'Is it bad?'),
               ('L', 'It has gone through the hard outside into the softer layer.'),
               ('R', 'What happens now?'),
               ('L', 'A small filling, and it should stop there.')],
   model=[('Student', 'There is a small area of decay between two of your back teeth, '
                      'on the upper right.'),
          ('Student', 'It has gone through the hard outside layer into the softer one '
                      'underneath.'),
          ('Student', 'It has not reached the living part in the middle, which is the '
                      'part that would hurt.'),
          ('Student', 'I could not see it when I looked; it showed on the small '
                      'radiograph.'),
          ('Student', 'That is why we took one, and why we take them every so often.'),
          ('Student', 'A small filling now, and it should stop there.')],
   fig=F.conversation('“WHAT DID YOU FIND?”',
     dict(name='You', role='the student', skin='3', hair='black', style='tied',
          tunic='teal'),
     dict(name='Your partner', role='the patient', skin='5', hair='black', style='long',
          tunic='plum'),
     [('R', 'What did you find?'),
      ('L', 'A small area of decay between two back teeth.'),
      ('R', 'Is it bad?'),
      ('L', 'It is through the hard outside into the softer layer.'),
      ('R', 'What happens now?'),
      ('L', 'A small filling, and it should stop there.')],
     note='Lesion, extent, dentine and detection are all in this exchange. None of the '
          'four words is said.'),
   fig_cap='One finding, said to a colleague and said to the patient it is about.',
   checklist=['you used none of the eight terms',
              'you gave the extent in words the patient can picture',
              'you said how it was found and how it was not',
              'you said what happens next'],
   point='You can give a patient the whole of a finding, including how you know, without '
         'a single technical word.',
   icons=['person', 'speech', 'xray', 'tick']),
],

fluency=dict(
  title='Five findings, three times',
  rubric='Hand the same five findings to three different partners.',
  how='Four minutes with the first, three with the second, two with the third. The same '
      'five sentences each time. Nothing new is added.',
  content=['Name the tooth in notation before anything else.',
           'Name the surface with one of the eight terms from Unit 4.',
           'Name the finding itself.',
           'Give the extent, and give its limit.',
           'Say how it was detected, and how it was not.',
           'End with the one surface you could not inspect.'],
  words=['a finding', 'a lesion', 'a cavity', 'a restoration', 'sound', 'to extend',
         'to detect', 'to record'],
  fig_title='THE SAME FIVE FINDINGS, IN FOUR MINUTES, THEN THREE, THEN TWO',
  point='You can hand over five findings without searching for the order, which is what '
        'makes a handover possible at the end of a long clinic.',
  ask='Which part of the order still slowed you down on the third attempt?',
  icons=['speech', 'clock', 'xray', 'tick']),

reading=[
 dict(title='Textbook: findings, conclusions and the record', genre='textbook page',
   pre=dict(rubric='Before you read, find these four things in the passage.',
     how='Two minutes. Do not read every sentence yet.',
     items=['the test for a finding', 'why conclusions are still worth writing',
            'the fixed order of a description', 'what the passive is used for']),
   fig=F.mini_table('THE FIVE PLACES, AND WHAT FILLS EACH',
     ['Place', 'What goes there', 'Example'],
     [['1', 'the tooth', 'the upper right first molar'],
      ['2', 'the surface', 'the distal surface'],
      ['3', 'the finding', 'a carious lesion'],
      ['4', 'the extent, with its limit', 'into dentine, not to the pulp'],
      ['5', 'the method', 'detected on a bitewing, not visible clinically']],
     highlight=[4], note='The shaded row is the one most often written without its '
                         'second half.'),
   fig_cap='The five places of a clinical description, with an example in each.',
   text=[
    'A clinical record holds three different kinds of statement, and most of the '
    'difficulty students have with it comes from mixing them. The three are findings, '
    'conclusions and actions.',
    'A finding is something that was observed. The test is whether another clinician, '
    'examining the same mouth on the same day, could have observed it too. A cavity on '
    'an occlusal surface passes that test. So does a gap at the margin of a '
    'restoration, and so does the fact that a surface could not be inspected at all.',
    'A conclusion is something the clinician worked out from the findings. That a lesion '
    'is active, that a patient is at high risk, that a restoration is leaking: each of '
    'these is a judgement. Each may be entirely correct, and none of them was observed.',
    'An action says what happens next. A bitewing at the next visit, a restoration, a '
    'review in six months. Actions belong at the end of the entry, where a reader '
    'expects to find them.',
    'Conclusions are worth writing. A record of findings with no judgement in it leaves '
    'the next clinician to start from the beginning. The requirement is not that '
    'judgements be left out, but that they be visibly separate from the observations '
    'they rest on.',
    'The reason is simple. A reader who disagrees with a conclusion can re-examine it '
    'against the findings. A reader who is given only the conclusion has to re-examine '
    'the patient.',
    'Within a finding, the order is fixed. The tooth is named first, in notation. The '
    'surface is named second, using one of the terms from the previous unit. The '
    'finding itself comes third.',
    'Fourth comes the extent: how far the finding reaches, in the tissue terms of the '
    'unit before. An extent is incomplete without its limit. Extends into dentine says '
    'where it has reached; extends into dentine but not as far as the pulp says where it '
    'stops, and the second half is the half that decides the treatment.',
    'Fifth comes the method. It was detected on a bitewing radiograph. It was not '
    'visible on direct examination. Both halves are themselves findings, and both are '
    'written in the passive, because what matters is how the thing was found rather '
    'than who found it.',
    'A description written in this order can be read as far as the reader needs and no '
    'further. A colleague who only wants to know which tooth stops after four words.',
    'One further point is worth making about the order, because students often ask '
    'whether it may be varied. It may not, and the reason is not tradition.',
    'A fixed order is what allows a reader to notice an absence. If the method is always '
    'fifth, a finding with no method announces itself. If the order moves, the reader '
    'has to hold the whole sentence in mind before they can tell what is missing.',
    'The same argument applies to the record as a whole, and the next unit makes it '
    'again about a different part of the mouth.'],
   source=('The account of clinical record-keeping and the structure of a finding '
           'follows standard dental reference works.',
           'General dental record-keeping and clinical reference works, 2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='How many kinds of statement does a record hold?  (three)',
     pairs=[('How many kinds of statement does a record hold?', 'three'),
            ('What is the test for a finding?',
             'whether another clinician could have observed it'),
            ('Why are conclusions still worth writing?',
             'otherwise the next clinician starts from the beginning'),
            ('What comes fourth in the order?', 'the extent'),
            ('What makes an extent complete?', 'its limit'),
            ('Why is the method written in the passive?',
             'how it was found matters more than who found it')])},
   post=dict(kind='tf', rubric='True or false? If it is false, write the correction in '
                               'eight words or fewer.',
     how='Then say which of these your own clinic does differently.',
     example='Conclusions should be left out of a record.  —  false — they should be '
             'kept separate',
     bank=['a finding', 'a conclusion', 'an action', 'the extent', 'the method'],
     bank_head='The five things these statements concern',
     pics=['a finding', 'a lesion', 'to extend', 'to detect'],
     pairs=[('Conclusions should be left out of a record.',
             'false — they should be kept separate'),
            ('That a surface could not be inspected is a finding.', 'true'),
            ('An extent is complete once you say what it reaches.',
             'false — it also needs its limit'),
            ('The method is written in the active voice.',
             'false — it is written in the passive'),
            ('Actions belong at the end of the entry.', 'true')]),
   point='Three kinds of statement, one test to tell them apart, and five fixed places '
         'inside the finding itself.',
   ask='State the test for a finding, and say where a conclusion goes instead.',
   icons=['book', 'form', 'pen', 'tick']),

 dict(title='A case: the conclusion that could not be checked', genre='written case',
   pre=dict(rubric='Before you read, decide what you expect.',
     how='Say your answer out loud, then read and compare.',
     items=['What happens when only a conclusion is recorded?',
            'Who pays for it, and when?',
            'What would you have written instead?']),
   fig=F.form_annotated('THE ENTRY, AND WHAT IT DID NOT SAY',
     'RECORD  ·  UPPER RIGHT SIX',
     [('March, written', 'UR6 distal: early caries, monitor'),
      ('What was observed', 'not recorded'),
      ('What was concluded', 'that it was early, and could be watched'),
      ('September, written', 'UR6 distal: caries, restore'),
      ('What changed', 'unknown, because March recorded no observations')],
     callouts=[(1, 'the line that would have made the comparison possible')],
     note='Five lines. The second one is blank, and it is the only one that mattered in '
          'September.'),
   fig_cap='Two entries six months apart, and the line that would have joined them.',
   text=[
    'A man of forty-one attended in March. The upper right first molar was charted, and '
    'the distal surface carried the entry: early caries, monitor.',
    'That entry is a conclusion and an action. It contains no finding at all.',
    'He attended again in September, with a different clinician. The same surface was '
    'examined and the entry read: caries, restore.',
    'The second clinician had a problem that she could not solve. She could see what the '
    'lesion looked like in September. She had no way of knowing what it had looked like '
    'in March.',
    'Had the March entry recorded the observations, the comparison would have been '
    'straightforward. A lesion confined to enamel in March and extending into dentine in '
    'September has progressed, and the decision to monitor has been overtaken. A lesion '
    'that looked the same on both occasions has not progressed, and monitoring remains '
    'reasonable.',
    'As it was, the September clinician had a conclusion from a colleague she had never '
    'met, and six months of silence between the two entries.',
    'She restored the tooth. That may well have been right. It may equally have been six '
    'months early, and nothing in the record will ever settle it.',
    'The March clinician was not careless. Early caries, monitor is a defensible '
    'judgement, and it is the kind of entry that appears in records '
    'every day.',
    'What it lacks is the thing that makes a judgement checkable. Nine more words would '
    'have supplied it: confined to enamel, no cavitation, detected on a bitewing, not '
    'visible clinically.',
    'Those nine words are not a different opinion from the March clinician’s. They '
    'are the evidence her opinion was built on, and the only part of it that the next '
    'reader can use.',
    'It is worth asking what the March clinician could have been expected to know. '
    'She did not know that a different colleague would see the patient in September. '
    'She did not know that the lesion would be restored, or that anybody would later '
    'want to compare the two visits.',
    'That is exactly the position every clinician writes a record in. The reader is '
    'unknown and the question they will bring is unknown.',
    'What can be relied on is the kind of question. Somebody will want to know what was '
    'there before, and whether it has changed. Almost every question asked of an old '
    'record is a question about change.',
    'A conclusion cannot answer a question about change, because it has already '
    'collapsed the observations into a judgement. Only the observations can be compared.',
    'There is a second cost, and it falls on the clinician rather than the patient. In '
    'September the first clinician had no way of defending her March decision, because '
    'nothing in the record showed what she had based it on.',
    'Had the nine words been there, the record would have shown a careful examination '
    'and a reasonable judgement, whether or not the lesion later progressed.'],
   source=('The case is invented for teaching; the pattern of caries progression and its '
           'recording follows standard clinical reference works.',
           'General dental record-keeping, radiography and clinical reference works, '
           '2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='How old was the patient?  (forty-one)',
     pairs=[('How old was the patient?', 'forty-one'),
            ('What did the March entry say?', 'early caries, monitor'),
            ('What kind of statement is that?', 'a conclusion and an action'),
            ('What could the September clinician not do?',
             'compare it with March'),
            ('How many extra words would have fixed it?', 'nine'),
            ('Was the March judgement unreasonable?', 'no')])},
   post=dict(kind='short', rubric='Write the finding that should have appeared beside '
                                  'each conclusion.',
     example='early caries, monitor  (confined to enamel, no cavitation, detected on a '
             'bitewing)',
     pairs=[('early caries, monitor',
             'confined to enamel, no cavitation, detected on a bitewing'),
            ('leaking restoration, replace',
             'visible gap at the mesial margin on direct examination'),
            ('high caries risk',
             'three new lesions since the last visit'),
            ('healthy, review in a year',
             'all surfaces inspected and sound; two surfaces not visible'),
            ('needs extraction',
             'crown broken to gum level, root mobile on palpation')]),
   point='A conclusion with no findings beside it cannot be checked, compared or '
         'defended, however reasonable it was at the time.',
   ask='What exactly could the September clinician not do, and why?',
   icons=['form', 'xray', 'clock', 'cross']),

 dict(title='Procedure: writing one entry, in order', genre='procedure',
   pre=dict(rubric='Before you read, put these steps in the order you would expect.',
     how='Thirty seconds, in pencil. Then read and correct your order.',
     items=['write the findings', 'write what could not be seen',
            'write the conclusion', 'write the action']),
   fig=F.step_sequence('ONE ENTRY, IN ORDER',
     ['Write the findings first, one line each.',
      'Inside each finding, keep the five places in order.',
      'Give every extent its limit.',
      'Give every finding its method.',
      'Write the surfaces you could not inspect, as findings.',
      'Then the conclusion, marked as one.',
      'Then the action, with a time attached.'],
     stop_points=[5],
     note='Seven steps. The fifth is the one that is skipped, because nothing was found '
          'there.'),
   fig_cap='The order of one entry, with the step that records an absence.',
   text=[
    'An entry is written in one order, every time, and the order is not a matter of '
    'taste. It is what lets a reader find a particular thing without reading all of it.',
    'Findings come first. Each one takes a line, and each line follows the five places: '
    'tooth, surface, finding, extent, method.',
    'Write the extent with its limit. Into dentine is half a statement. Into dentine but '
    'not as far as the pulp is the whole of it, and the difference between them is a '
    'different treatment.',
    'Write the method with every finding. Detected on a bitewing. Seen on direct '
    'examination. Felt with a probe. The method is how a later reader judges how much '
    'weight the finding will carry.',
    'Then write the surfaces you could not inspect. Students skip this step, because it '
    'feels like recording nothing. It is not nothing: it is the finding that a surface '
    'was examined and could not be seen, and it is what justifies the radiograph that '
    'follows.',
    'Only then write the conclusion, and write it so that it reads as one. Appears '
    'active. Likely to be leaking. High caries risk. A reader should be able to tell at '
    'a glance which lines were seen and which were worked out.',
    'The action comes last, with a time attached to it. Restore at the next visit. '
    'Bitewing in six months. Review in a year. An action without a time is a wish.',
    'A reader can then stop wherever they have what they came for. A colleague checking '
    'which tooth reads four words. A colleague planning treatment reads to the end.',
    'The whole entry takes about ninety seconds for one quadrant, and it is written '
    'while the patient is still in the chair.',
    'One last point about the order. The findings come first because they are the only '
    'part that cannot be reconstructed later. A conclusion can be drawn again from good '
    'findings. Findings cannot be recovered from a conclusion.',
    'Students sometimes object that this makes an entry long. It makes it about twenty '
    'words longer than the shortest version that could be written, and those twenty '
    'words are the whole of the evidence.',
    'They also object that nobody reads old entries. Somebody reads them on the day the '
    'patient returns with a problem, and that is the only day that matters.',
    'A third point is more serious. Writing the findings first slows the writer '
    'down, and a clinic that is running late is exactly when the shortcut is taken.',
    'The answer to that is the order itself. An entry written in a fixed order is '
    'quicker to write than one composed from the beginning each time, because the writer '
    'is filling places rather than choosing words.',
    'After a few weeks the order is automatic, and the ninety seconds it takes is the '
    'same ninety seconds whether the clinic is on time or not.'],
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='What comes first in an entry?  (the findings)',
     pairs=[('What comes first in an entry?', 'the findings'),
            ('How many places are there inside a finding?', 'five'),
            ('What must every extent have?', 'its limit'),
            ('Why do students skip the uninspected surfaces?',
             'it feels like recording nothing'),
            ('What must an action have?', 'a time'),
            ('Why do findings come first?',
             'they are the only part that cannot be reconstructed later')])},
   post=dict(kind='order', rubric='Put the seven steps of the procedure in order.',
     how='Then say which step your own clinic does differently, and why.',
     example='Write the findings first.  —  1',
     bank=['the findings', 'the five places', 'the limit', 'the method',
           'what was not seen', 'the conclusion', 'the action'],
     bank_head='The seven things the steps establish',
     pics=['a finding', 'to extend', 'to detect', 'to record'],
     pairs=[('Write the findings first, one line each.', '1'),
            ('Keep the five places in order inside each finding.', '2'),
            ('Give every extent its limit.', '3'),
            ('Give every finding its method.', '4'),
            ('Write the surfaces you could not inspect.', '5'),
            ('Write the conclusion, marked as one.', '6'),
            ('Write the action, with a time attached.', '7')]),
   point='Findings first, because they are the only part of an entry that cannot be '
         'written again later from something else.',
   ask='Which step would you skip when the clinic is late, and what would be lost?',
   icons=['pen', 'form', 'clock', 'tick']),
],

writing=[
 dict(title='Five findings, five sentences',
   rubric='Write five findings, each as one sentence in the fixed order.',
   how='One sentence each. Every extent gets a limit and every finding gets a method.',
   fig=F.mini_table('THE FIVE PLACES', ['Place', 'What goes there'],
     [['1', 'the tooth, in notation'],
      ['2', 'the surface, from Unit 4'],
      ['3', 'the finding'],
      ['4', 'the extent, with its limit'],
      ['5', 'the method, in the passive']], highlight=[4]),
   fig_cap='The five places, with the one that is usually written half-finished.',
   scaffold=['A carious lesion on the … surface of the …, extending …, detected …',
             'A cavity on the … surface of the …, confined to …, seen …',
             'A restoration on the … surface of the …, with …, seen …',
             'The … surface of the … could not be inspected and is recorded as …',
             'The … surface of the … is sound.'],
   model=['A carious lesion on the distal surface of the upper right first molar, '
          'extending into dentine but not as far as the pulp, detected on a bitewing '
          'radiograph and not visible clinically.',
          'A cavity on the occlusal surface of the lower left second molar, confined to '
          'enamel, seen on direct examination.',
          'A restoration on the occlusal surface of the lower right first molar, with a '
          'sound margin, seen on direct examination.',
          'The mesial surface of the upper right second premolar could not be inspected '
          'and is recorded as not visible.',
          'The labial surface of the upper right central incisor is sound.'],
   checklist=['every sentence names the tooth before the surface',
              'every extent carries its limit',
              'every finding carries its method',
              'one of the five records a surface that could not be seen'],
   point='You can write five findings that another clinician could act on without asking '
         'you anything.',
   icons=['pen', 'tooth', 'xray', 'tick']),

 dict(title='One entry, findings and conclusion kept apart',
   rubric='Write a full entry for one quadrant: findings, then conclusion, then action.',
   how='The conclusion must be visibly a conclusion. The action must carry a time.',
   fig=F.form_annotated('THE SHAPE OF ONE ENTRY', 'ENTRY  ·  THREE BLOCKS',
     [('Findings', 'one line each, five places, method on every one'),
      ('Not inspected', 'the surfaces you could not see, as findings'),
      ('Conclusion', 'marked as a judgement: appears, likely, suggests'),
      ('Action', 'what happens next, with a time attached'),
      ('Signed', 'the person who examined')],
     callouts=[(2, 'without this line the conclusion cannot be checked later')],
     note='Five blocks. A reader can stop at the end of any of them.'),
   fig_cap='The three blocks of an entry, with the one that makes the rest checkable.',
   scaffold=['Findings:', 'Not inspected:', 'Conclusion:', 'Action:', 'Signed:'],
   model=['Findings: UR6 occlusal, a cavity confined to enamel, seen on direct '
          'examination. UR6 buccal and palatal, sound, seen with a mirror.',
          'Not inspected: UR6 distal and UR5 mesial, contact tight, recorded as not '
          'visible.',
          'Conclusion: the occlusal lesion appears early and non-cavitated; the '
          'interproximal surfaces cannot be assessed without a radiograph.',
          'Action: bitewing radiograph today; occlusal lesion reviewed in six months if '
          'the radiograph is clear.',
          'Signed: L. Mansour, examined and recorded 18 May.'],
   checklist=['the findings block contains no judgement words',
              'the conclusion block uses appears, likely or suggests',
              'the not-inspected block exists',
              'the action has a time in it'],
   point='You can write an entry in which a reader can tell at a glance which lines were '
         'seen and which were worked out.',
   icons=['form', 'pen', 'xray', 'tick']),

 dict(title='A paragraph for the clinician who sees this patient next',
   rubric='Write one paragraph of six sentences for the next clinician.',
   how='They have the chart but not the patient, and they are seeing them in six months.',
   fig=F.mini_table('SIX SENTENCES, SIX JOBS',
     ['Sentence', 'What it must establish'],
     [['1', 'what was found, and where'],
      ['2', 'how far it had gone, in tissue terms'],
      ['3', 'how it was detected, and how it was not'],
      ['4', 'what could not be examined at all'],
      ['5', 'what was concluded, marked as a conclusion'],
      ['6', 'what to compare against, and when']]),
   fig_cap='Six sentences, and the last one is the reason for the other five.',
   scaffold=['At the May visit I found …', 'It extended …', 'It was detected …',
             'I could not examine …', 'My conclusion was …',
             'When you see this patient, compare …'],
   model=['At the May visit I found a carious lesion on the distal surface of the upper '
          'right first molar.',
          'It extended into dentine but not as far as the pulp.',
          'It was detected on a bitewing radiograph and was not visible on direct '
          'examination.',
          'I could not examine the mesial surface of the second premolar at all, because '
          'the contact was tight.',
          'My conclusion was that the lesion appeared active, although I did not observe '
          'that directly.',
          'When you see this patient, compare the new bitewing with the May one before '
          'deciding anything.'],
   checklist=['sentence two carries a limit as well as an extent',
              'sentence three says how it was not detected as well as how it was',
              'sentence five is marked as a conclusion',
              'sentence six names what to compare and when'],
   point='You can write six sentences that let a clinician six months away pick up '
         'exactly where you left off.',
   icons=['pen', 'form', 'clock', 'tick']),
],

cases_intro='Three cases about the line between what was seen and what was concluded. '
            'Each can be answered in more than one defensible way. Work in threes, give '
            'a reason for every position, and use the eight terms when you take it.',
cases=[
 dict(tier='A', title='The entry that said “monitor”',
  situation=['A clinician writes “UR6 distal: early caries, monitor” in March. Six '
             'months later a different clinician examines the same surface and restores '
             'it.',
             'Neither entry records what was actually seen, so nobody can say whether '
             'the lesion progressed, or whether the second clinician treated six months '
             'early.'],
  who=['Dr Petra Nilsen', 'Leila Mansour'],
  facts=['The March entry recorded a conclusion and an action.',
         'No observations were recorded in March.',
         'The September clinician could not compare the two visits.',
         'The March judgement was reasonable on the day.'],
  question='Was the March entry wrong, and what would you have written instead?',
  questions=['What exactly was missing, and how many words would it have taken?',
             'What does a reasonable judgement cost when no evidence is recorded with it?',
             'What would you write in a comparable entry tomorrow?'],
  words=['a finding', 'a lesion', 'to extend', 'to detect', 'to record'],
  language=[('Recording what was seen',
             ['Confined to enamel, no cavitation.',
              'Detected on a bitewing, not visible clinically.',
              'Compare at the next bitewing.']),
            ('Marking a conclusion as one',
             ['Appears early and non-cavitated.',
              'Monitor rather than restore, on that basis.'])],
  how='In threes. Eight minutes. One of you writes the entry you would have made.',
  point='You can argue about whether a judgement was right while agreeing that the '
        'record made it impossible to tell.',
  ask='Read out the March entry your group would have written.',
  note='Defending the March entry as normal practice is reasonable. Say what that costs '
       'in September.',
  icons=['form', 'clock', 'xray', 'cross'],
  guidance=('Reference practice', 'Clinical findings recorded separately from the '
            'conclusions drawn from them',
            'General dental record-keeping reference works, 2025–2026.')),

 dict(tier='C', title='Two clinicians, one surface, two words',
  situation=['Leila records a surface as sound. Her supervisor, examining the same tooth '
             'twenty minutes later, records it as not visible because the contact is '
             'tight.',
             'Both of them looked at the same surface with the same instruments, and '
             'both entries are now in the same record.'],
  who=['Leila Mansour', 'Dr Yusuf Rahman'],
  facts=['The same surface carries two different entries.',
         'Sound claims an observation; not visible records the absence of one.',
         'Neither clinician saw anything abnormal.',
         'Only one of the two entries can be acted on.'],
  question='Which entry should stand, and what happens to the other one?',
  questions=['What does each of the two words claim?',
             'What should happen to an earlier entry that the later one disagrees with?',
             'What would you say to the student, in one line?'],
  words=['sound', 'to record', 'a finding', 'to detect', 'a lesion'],
  language=[('Marking a correction',
             ['Earlier entry amended: surface not visible, contact tight.',
              'Both entries retained; see note.']),
            ('Saying it to a student',
             ['You did not see it, so you cannot call it sound.',
              'Not visible is not a failure. It is a finding.'])],
  how='In threes. Eight minutes. One of you writes the line that settles the two.',
  point='You can say what a word in a record claims, and decide what to do when two '
        'entries claim different things.',
  ask='Say the line your group would add to the record.',
  note='Leaving both entries as they stand is also a position. Say what it leaves the '
       'next reader.',
  icons=['form', 'person', 'cross', 'pen']),

 dict(tier='C', title='The conclusion the student was right about',
  situation=['Daniel records “appears active” beside a lesion, and writes nothing about '
             'what he saw. Six weeks later the lesion has clearly progressed and he '
             'turns out to have been right.',
             'His supervisor still asks him to rewrite the entry, which Daniel thinks is '
             'unreasonable, because the judgement was correct.'],
  who=['Dr Petra Nilsen', 'Daniel Owusu'],
  facts=['The conclusion was correct.',
         'No observations were recorded beside it.',
         'The lesion progressed within six weeks.',
         'The supervisor asked for a rewrite anyway.'],
  question='Is the supervisor right to ask, given that the conclusion was correct?',
  questions=['What does being right have to do with how an entry is written?',
             'What would the record show if he had been wrong?',
             'What would you say to a student who has just been proved right?'],
  words=['a finding', 'a lesion', 'to record', 'to detect', 'to extend'],
  language=[('Saying it to the student',
             ['Your judgement was good. Your record was not.',
              'Being right this time does not make the entry usable.']),
            ('Arguing the other way',
             ['The clinical outcome was correct.',
              'A rewrite six weeks later changes nothing for the patient.'])],
  how='In threes. Eight minutes. One of you argues Daniel’s position and means it.',
  point='You can separate the quality of a clinical judgement from the quality of the '
        'record that was made of it.',
  ask='Say the one line your group would put to Daniel.',
  note='Daniel’s position is defended by real clinicians. Say what it would cost on the '
       'occasion he is wrong.',
  icons=['book', 'pen', 'person', 'speech']),
],

review_intro='Five activities, one for each skill, and one that brings back Units 1 to 5. '
             'Nothing in this part repeats a task you have already done. Thirty minutes.',
review=[
 dict(skill='reading', title='An entry with the parts out of order',
   kind='order', rubric='Put the seven lines of one entry into the order they belong in.',
   how='Then say which line your own clinic puts somewhere else.',
   example='UR6 occlusal: a cavity confined to enamel, seen directly.  —  1',
   bank=['findings', 'not inspected', 'conclusion', 'action'],
   bank_head='The four blocks these seven lines fall into',
   pics=['a finding', 'to detect', 'to record', 'a cavity'],
   pairs=[('UR6 occlusal: a cavity confined to enamel, seen directly.', '1'),
          ('UR6 buccal and palatal: sound, seen with a mirror.', '2'),
          ('UR6 distal: not visible, contact tight.', '3'),
          ('UR5 mesial: not visible, contact tight.', '4'),
          ('The occlusal lesion appears early and non-cavitated.', '5'),
          ('The interproximal surfaces cannot be assessed without a radiograph.', '6'),
          ('Bitewing today; review the occlusal lesion in six months.', '7')],
   fig=F.step_sequence('THE SEVEN LINES, ONCE THEY ARE IN ORDER',
     ['Findings that were seen.', 'Findings on surfaces seen with a mirror.',
      'Surfaces that could not be inspected.', 'The second of those surfaces.',
      'The conclusion about the lesion.', 'The conclusion about the surfaces.',
      'The action, with its time.'],
     stop_points=[5],
     note='Everything above the marked line was observed. Everything below it was '
          'worked out.'),
   fig_cap='One entry in order, with the line between seeing and concluding marked.'),

 dict(skill='listening', title='Four things from 5.1 you were not asked about',
   kind='choice', rubric='Listen to 5.1 once more and circle a, b or c.',
   how='These are not the questions you answered in part 5. One listening is enough.',
   example='The method is   a) a kind of line   b) not a kind of line.   Answer: b',
   bank=['the fourth thing', 'the column', 'the year', 'the reader'],
   bank_head='The four small points to listen for this time',
   pics=['to detect', 'to record', 'a finding', 'sound'],
   pairs=[('The method is   a) a fourth kind of line   b) not a kind of line at all   '
           'c) a conclusion', 'b'),
          ('Dr Nilsen says the student’s entry is   a) wrong   b) in the wrong column   '
           'c) too short', 'b'),
          ('Leila says that in a year   a) she will remember   b) nor will she be able '
           'to tell   c) it will not matter', 'b'),
          ('Recording what could not be seen is worth   a) nothing   b) more than a '
           'guess   c) a radiograph', 'b')],
   fig=F.mini_table('WHAT YOU ARE LISTENING FOR THIS TIME',
     ['Not this', 'But this'],
     [['the three kinds', 'the thing that is not a kind at all'],
      ['the test', 'what Dr Nilsen says is actually wrong with the entry'],
      ['the conclusion', 'what Leila says about herself in a year']]),
   fig_cap='The same lecture, listened to for what it says about the writer rather than '
           'the writing.'),

 dict(skill='speaking', title='Handing over at the end of a long clinic',
   rubric='Hand over three findings to a colleague who is tired and interrupts.',
   how='Student B interrupts twice with “which tooth?” and once with “how do you know?”. '
       'Student A must not start again. Four minutes, then swap.',
   model=[('Colleague', 'Go on, I am listening.'),
          ('Student', 'A carious lesion on the distal surface of the upper right first '
                      'molar.'),
          ('Colleague', 'Which tooth, sorry?'),
          ('Student', 'Upper right six. Distal surface. Extending into dentine, not to '
                      'the pulp.'),
          ('Colleague', 'And how do you know?'),
          ('Student', 'Bitewing. It was not visible clinically.')],
   checklist=['you repeated only the part that was asked for',
              'you kept the order even after the interruption',
              'you gave the method without being asked the second time',
              'you finished all three findings'],
   fig=F.conversation('“WHICH TOOTH, SORRY?”',
     dict(name='You', role='the student', skin='3', hair='black', style='tied',
          tunic='teal'),
     dict(name='Your partner', role='a tired colleague', skin='2', hair='grey',
          style='short', tunic='blue'),
     [('R', 'Go on, I am listening.'),
      ('L', 'A carious lesion on the distal surface of the upper right six.'),
      ('R', 'Which tooth, sorry?'),
      ('L', 'Upper right six. Distal. Into dentine, not to the pulp.'),
      ('R', 'And how do you know?'),
      ('L', 'Bitewing. Not visible clinically.')],
     note='The fixed order is what lets you answer an interruption without starting '
          'again.'),
   fig_cap='The handover that survives being interrupted twice.'),

 dict(skill='writing', title='The entry where everything was sound',
   rubric='Write the entry for a quadrant in which nothing abnormal was found.',
   how='Not the entry you wrote in part 8. Here every surface that could be seen was '
       'sound, and two could not be seen at all.',
   model=['Findings: LL4, LL5, LL6, LL7 — all occlusal, buccal and lingual surfaces '
          'inspected and sound, seen directly or with a mirror.',
          'Not inspected: LL6 mesial and LL5 distal, contact tight, recorded as not '
          'visible.',
          'Conclusion: no caries detected clinically in this quadrant; the two '
          'interproximal surfaces cannot be assessed without a radiograph.',
          'Action: bitewing at this visit; no treatment planned for this quadrant '
          'otherwise.',
          'Signed: L. Mansour, 18 May.'],
   scaffold=['Findings:', 'Not inspected:', 'Conclusion:', 'Action:', 'Signed:'],
   checklist=['the findings block says what was inspected and how',
              'the not-inspected block names both surfaces and the reason',
              'the conclusion says “detected clinically”, not simply “no caries”',
              'the action is there even though nothing is wrong'],
   fig=F.contrast('A QUIET QUADRANT AND A BUSY ONE',
     'NOTHING FOUND', ['all visible surfaces sound',
                       'two surfaces not visible',
                       'no caries detected clinically'],
     'SOMETHING FOUND', ['a cavity, confined to enamel',
                         'two surfaces not visible',
                         'appears early and non-cavitated'],
     'The not-visible line is the same in both.',
     'And it is the line that produces the same action in both.'),
   fig_cap='What an entry has to say when the answer is that nothing was wrong.'),

 dict(skill='reading', title='Units 1 to 6: observed, concluded, or agreed?',
   kind='sort', rubric='Write O for something observed, C for something concluded and A '
                       'for something that is only a naming agreement.',
   columns=('O', 'C', 'A'),
   how='Four of these come from earlier units. Then find the one item your group '
       'disagrees about, and say why it is hard to place.',
   example='A gap at the margin of the restoration.  —  O',
   bank=['observed', 'concluded', 'an agreement'],
   bank_head='The three kinds of thing in six units',
   pics=['a finding', 'a lesion', 'to detect', 'to record'],
   pairs=[('A gap at the margin of the restoration.', 'O'),
          ('The restoration is likely to be leaking.', 'C'),
          ('The surface facing the cheek is called buccal.', 'A'),
          ('The probe caught on the distal surface.', 'O'),
          ('The lesion has progressed since March.', 'C'),
          ('Quadrants are numbered clockwise from the upper right.', 'A')],
   fig=F.contrast('THREE KINDS OF THING IN SIX UNITS',
     'YOU SAW IT, OR YOU DID NOT', ['a gap at the margin',
                                    'the probe caught',
                                    'a tight contact'],
     'YOU WORKED IT OUT, OR YOU AGREED IT', ['likely to be leaking',
                                             'it has progressed since March',
                                             'buccal faces the cheek'],
     'Another clinician could have seen the same.',
     'Another clinician reasons the same way, or uses the same names.'),
   fig_cap='The distinction that now runs through all six units, applied to the record '
           'itself.'),
],
end_fig_title='ONE FINDING, FIVE PLACES',
end_fig_steps=['The tooth, in notation: the upper right first molar.',
               'The surface, from Unit 4: the distal surface.',
               'The finding: a carious lesion.',
               'The extent, with its limit: into dentine, not to the pulp.',
               'The method: detected on a bitewing, not visible clinically.',
               'And separately: what you concluded, and what happens next.'],
end_fig_note='Five places in one sentence, and a sixth line that is deliberately not '
             'part of it.',
end_fig_cap='The whole of Unit 6 on one page.',

p1_recap=['You have described a finding to somebody in the next room, and seen which '
          'parts of it they had to ask for.',
          'You have seen the five parts of a finding, and the one thing a clinician has '
          'after an examination that is not a finding at all.'],
p1_ask='Which part of a description do you leave out most often?',
p1_icons=['mirror', 'xray', 'probe', 'cross'],
p2_recap=['Eight terms you can now use: a finding, a lesion, a cavity, a restoration, '
          'sound, to extend, to detect, to record.',
          'Four groups of sentences: naming the tooth and surface, naming the finding, '
          'giving the extent, and saying how it was detected.',
          'One rule to hold on to: an extent without its limit is half an observation.'],
p2_ask='Which two of the eight would never appear in the same chart line?',
p3_recap=['You have moved from recognising these terms to producing a whole description '
          'in a fixed order under time.',
          'All eight appear in the lecture in part 5. Say them out loud before you '
          'listen.'],
p3_ask='Give one complete finding out loud, without looking at the page.',
p3_icons=['book', 'tooth', 'speech', 'tick'],
p4_recap=['The order is fixed: tooth, surface, finding, extent, method. A reader who '
          'knows it can stop as soon as they have what they need.',
          'The passive in was detected on a bitewing names the method rather than the '
          'person, which is what the reader is actually asking about.'],
p4_ask='Say one finding with its extent limited, and one with its method given both ways.',
p10_recap=['You can describe any finding in one sentence that a colleague can act on '
           'without asking a question.',
           'You can write an entry in which findings, conclusions and actions are '
           'visibly separate, and in which a surface you could not see is still '
           'recorded.',
           'Unit 7 takes the same sentence and uses it of the tissues round the tooth, '
           'where the probe from Unit 5 does the measuring.'],
p10_ask='Hand five findings to the person next to you, with the book closed.',
)
