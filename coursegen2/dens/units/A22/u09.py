# -*- coding: utf-8 -*-
import figs2 as F

U = dict(
num=9,
title='The Radiograph, and What It Is Evidence Of',
level='A2.2',
strap='CEFR A2.2  ·  Grammar: saying how certain you are: appears, suggests, is '
      'consistent with, cannot be excluded  ·  A dark area on a film, and the four '
      'different claims you can make about it',
threads={'domain': ['the image', 'evidence', 'disease'],
         'function': ['describing an image', 'hedging', 'separating image from mouth']},
can_do=['say what a dark area on a radiograph is and why it is dark',
        'name the two films used most, and say what each one shows',
        'describe a radiographic finding without turning it into a diagnosis',
        'choose between appears, suggests, is consistent with and cannot be excluded',
        'say three things a radiograph does not establish, and why not'],
recycles='Unit 4 (the surfaces), Unit 6 (a finding with its extent and its limit), '
         'Unit 7 (bone loss and the chart) and Unit 8 (the grades of a carious lesion)',
prepares='Unit 10, which puts the history, the examination, the chart and this film '
         'together into one appointment and one plan',

warm=['Why is a cavity dark on a radiograph and enamel light?',
      'What have you seen on a film that turned out not to be in the patient at all?',
      'In your own clinic, who decides that a radiograph is needed, and on what '
      'grounds?'],
warm_fig=F.icon_cards('FOUR QUESTIONS, AND WHETHER A FILM CAN ANSWER THEM',
    [('is there a lesion', 'xray'), ('how deep is it', 'probe'),
     ('is the surface broken', 'mirror'), ('is it getting worse', 'clock')],
    cols=4,
    note='The film answers the first and reports on the second badly. The third needs an '
         'eye and the fourth needs a second film.'),
warm_fig_cap='Four questions about a lesion, and what a single radiograph does with '
             'each.',
warm_fig_alt='Four picture cards showing the four questions a clinician brings to a '
             'radiograph: whether there is a lesion, how deep it is, whether the '
             'surface is broken, and whether it is progressing.',
warm_fig2=F.mini_table('WHY SOME PARTS OF A FILM ARE DARK',
    ['What the beam passed through', 'How much it absorbed', 'How it looks'],
    [['enamel', 'a great deal', 'light'],
     ['dentine', 'less than enamel', 'a little darker'],
     ['a carious lesion', 'less again, mineral has gone', 'dark'],
     ['the pulp chamber', 'very little', 'dark'],
     ['a metal restoration', 'almost all of it', 'white']],
    highlight=[3], note='The shaded row is the whole of radiographic caries diagnosis: '
                        'mineral has gone, so less was absorbed.'),
warm_fig2_cap='Five things a beam passes through, and why each of them looks as it does.',
p1_cards=['a bitewing', 'a periapical', 'a radiolucency', 'radiopaque', 'an artefact',
          'the apex'],

preview_intro='This unit has eight terms and ten sentences. Read this page first. Two of '
              'the eight are the names of films, two are opposites, and the last two are '
              'the reasons a film has to be read carefully.',
set_fig_title='THE EIGHT TERMS OF UNIT 9',
set_fig_cap='The eight terms you will be able to use by the end of this unit.',
set=[
 dict(term='a bitewing', pos='noun', thread='domain',
      definition='a radiograph taken with the receptor held between the teeth',
      example='A bitewing shows the crowns of both jaws on one side of the mouth.',
      collocation='take a bitewing  ·  on the bitewing', recycle=[9, 10]),
 dict(term='a periapical', pos='noun', thread='domain',
      definition='a radiograph showing one tooth from the crown to the tip of the root',
      example='The periapical shows the whole root and the bone round it.',
      collocation='a periapical of the upper six  ·  take a periapical',
      recycle=[9, 10]),
 dict(term='a radiolucency', pos='noun', thread='domain',
      definition='a dark area on a radiograph, where less of the beam was absorbed',
      example='There is a radiolucency on the distal surface of the lower left six.',
      collocation='a well-defined radiolucency  ·  the radiolucency extends',
      recycle=[9, 10]),
 dict(term='radiopaque', pos='adjective', thread='domain',
      definition='light on a radiograph, because the tissue there absorbed the beam',
      example='Enamel is more radiopaque than dentine, and metal is more radiopaque '
              'than either.',
      collocation='a radiopaque restoration  ·  more radiopaque than', recycle=[9]),
 dict(term='the apex', pos='noun', thread='domain',
      definition='the tip of the root of a tooth',
      example='A periapical is taken when the bone round the apex matters.',
      collocation='at the apex  ·  the apex of the root', recycle=[9, 10]),
 dict(term='an artefact', pos='noun', thread='domain',
      definition='something that appears in the image but is not in the patient',
      example='The dark line across three teeth was an artefact, not a lesion.',
      collocation='an artefact of the film  ·  rule out an artefact', recycle=[9, 10]),
 dict(term='superimposed', pos='adjective', thread='domain',
      definition='lying one on top of the other in the image, so the two cannot be '
                 'separated',
      example='The two roots are superimposed, so I cannot say which one is affected.',
      collocation='superimposed structures  ·  superimposed on each other',
      recycle=[9, 10]),
 dict(term='to underestimate', pos='verb', thread='function',
      definition='to judge something as smaller or less than it really is',
      example='A radiograph underestimates the depth of a carious lesion.',
      collocation='underestimate the extent  ·  is underestimated on a film',
      recycle=[9, 10]),
],
set_note='Learn these eight. The last two are the two reasons a film is read beside the '
         'patient and not instead of them.',

phrase_fig_title='TEN SENTENCES FOR SAYING HOW CERTAIN YOU ARE',
phrases=[
 ('Saying what the image shows',
  ['There is a radiolucency on the distal surface of the lower left six.',
   'The radiolucency extends into dentine.']),
 ('Saying what it appears to be',
  ['The appearance is consistent with caries.',
   'This appears to be an artefact rather than a lesion.']),
 ('Saying what the image cannot settle',
  ['Caries cannot be excluded on this radiograph alone.',
   'The depth of the lesion cannot be established from a single film.']),
 ('Keeping the image and the mouth apart',
  ['The lesion is probably deeper than it appears here.',
   'Nothing on this film tells you whether the surface is cavitated.',
   'Two surfaces are superimposed, so I cannot say which of them is affected.',
   'The radiograph suggests bone loss; the chart will say how much.']),
],
phrase_fig_cap='Ten sentences, in four groups. The third group is the one that keeps a '
               'report honest.',
phrase_note='Note that the first group says nothing about caries at all. Describe the '
            'image first, and name the disease in a separate sentence.',

receptive=[
 dict(term='a receptor', definition='the film or plate the beam reaches after the tooth',
      example='The receptor is held between the teeth for a bitewing.'),
 dict(term='the beam', definition='the x-rays that pass through the patient',
      example='Whatever absorbs the beam appears light on the image.'),
 dict(term='a panoramic', definition='a radiograph of both jaws on a single image',
      example='A panoramic shows everything and shows none of it in detail.'),
 dict(term='distortion', definition='a change of shape or size in the image that is not '
                                    'in the patient',
      example='Distortion is worst when the beam is badly angled.'),
 dict(term='justified', definition='taken for a reason that outweighs the dose',
      example='Every film must be justified before it is taken.'),
 dict(term='the dose', definition='the amount of radiation the patient receives',
      example='The dose from one bitewing is small, and it is not nothing.'),
],
receptive_fig_title='TERMS TO RECOGNISE IN UNIT 9',
receptive_fig_cap='You will meet these six in the lecture and the readings. You are not '
                  'asked to produce them yet.',

preview_task=dict(kind='match', rubric='Match each term with what it means.',
  example='a radiolucency  —  a dark area where less of the beam was absorbed',
  how='Cover the preview page first. Then check your answers against it.',
  pairs=[('a bitewing', 'a film taken with the receptor between the teeth'),
         ('a periapical', 'a film showing one tooth from crown to root tip'),
         ('a radiolucency', 'a dark area where less of the beam was absorbed'),
         ('radiopaque', 'light on a film, because the beam was absorbed there'),
         ('an artefact', 'something in the image that is not in the patient'),
         ('superimposed', 'lying one on top of the other in the image')]),

vocab_tasks=[
 dict(kind='gap', rubric='Complete each sentence with one of the eight terms.',
   example='A bitewing shows the crowns of both jaws on one side.',
   pairs=[('A ____________ shows the crowns of both jaws on one side.', 'bitewing'),
          ('A ____________ shows one tooth from the crown to the root tip.',
           'periapical'),
          ('There is a ____________ on the distal surface of the lower left six.',
           'radiolucency'),
          ('Enamel is more ____________ than dentine.', 'radiopaque'),
          ('The bone round the ____________ of the root looks normal.', 'apex'),
          ('The dark line across three teeth was an ____________.', 'artefact'),
          ('The two roots are ____________, so I cannot separate them.',
           'superimposed'),
          ('A radiograph ____________ the depth of a carious lesion.',
           'underestimates')],
   fig=F.morph_builder('FOUR TERMS BUILT FROM THE SAME TWO PARTS',
     [('radio-', 'luc', '-ency', 'a radiolucency', 'where the beam went through'),
      ('radio-', 'paqu', '-e', 'radiopaque', 'where the beam was stopped'),
      ('peri-', 'apic', '-al', 'periapical', 'round the tip of the root'),
      ('super-', 'impos', '-ed', 'superimposed', 'placed one on top of another')],
     note='Radio- is about the beam. Lucency is light getting through; opaque is light '
          'being stopped. Peri- round about, as in Unit 7.'),
   fig_cap='Four terms taken apart, with the two halves that decide whether an area is '
           'dark or light.'),

 dict(kind='odd', rubric='Three of the four belong to one class. Circle the one that '
                         'does not, and name the class the three share.',
   how='Name the class out loud before you name the odd one out. Then say which kind of '
       'film your own clinic takes most often.',
   example='bitewing / periapical / panoramic / radiolucency  —  a radiolucency is not a '
           'kind of film',
   bank=['a kind of film', 'something seen on a film', 'a fault in the image',
         'something the film cannot say'],
   bank_head='The four classes these terms fall into',
   pics=['a bitewing', 'a radiolucency', 'an artefact', 'superimposed'],
   pairs=[('bitewing / periapical / panoramic / radiolucency', 'radiolucency'),
          ('artefact / distortion / superimposition / caries', 'caries'),
          ('radiopaque / light / absorbed the beam / dark', 'dark'),
          ('depth / cavitation / activity / a radiolucency', 'a radiolucency'),
          ('the apex / the crown / the root / the receptor', 'the receptor')]),

 dict(kind='short', pics=['a bitewing', 'a periapical', 'a radiolucency', 'radiopaque'],
   rubric='Write what each of these looks like on a film, and why.',
   example='enamel  (Light, because enamel absorbs a great deal of the beam.)',
   pairs=[('enamel', 'Light, because enamel absorbs a great deal of the beam.'),
          ('a carious lesion',
           'Dark, because mineral has gone and less of the beam was absorbed.'),
          ('a metal restoration',
           'White, because metal absorbs almost all of the beam.'),
          ('the pulp chamber',
           'Dark, because very little of the beam is absorbed there.'),
          ('alveolar bone that has been lost',
           'Darker than the bone beside it, because there is less of it.')],
   fig=F.step_sequence('HOW A DARK AREA GETS ON TO A FILM',
     ['The beam leaves the tube and enters the tooth.',
      'Enamel and dentine absorb part of it.',
      'Where mineral has been lost, less is absorbed.',
      'More of the beam reaches the receptor at that point.',
      'That point is darker on the image than the tissue round it.'],
     stop_points=[3],
     note='The marked step is the only one that is about disease. The other four are '
          'about the beam.'),
   fig_cap='Five steps from the tube to the image, with the one the diagnosis rests on.'),

 dict(kind='sort', rubric='Write Y for something a single film can establish and N for '
                          'something it cannot.',
   columns=('Y', 'N'),
   how='Then say why the two answers in column N are the two that get reported anyway in '
       'your own experience.',
   example='That there is a radiolucency on the distal surface.  —  Y',
   bank=['what a film establishes', 'what it does not'],
   bank_head='The two answers that keep a report inside what was seen',
   pics=['a radiolucency', 'superimposed', 'to underestimate', 'an artefact'],
   pairs=[('That there is a radiolucency on the distal surface.', 'Y'),
          ('That the lesion has reached dentine in the image.', 'Y'),
          ('That the surface of the tooth is cavitated.', 'N'),
          ('The exact depth of the lesion in the mouth.', 'N'),
          ('That the bone level is lower than the neighbouring tooth.', 'Y'),
          ('That the lesion is getting worse.', 'N')],
   fig=F.contrast('ONE FILM: WHAT IT HOLDS AND WHAT IT DOES NOT',
     'IN THE IMAGE', ['a radiolucency, and where it is',
                      'how far into the image it extends',
                      'the bone level beside each tooth',
                      'a restoration, and its outline'],
     'NOT IN THE IMAGE', ['whether the surface is broken',
                          'the true depth, which is greater',
                          'whether anything is progressing',
                          'whether the patient has pain'],
     'Describe this, in the sentence that begins the report.',
     'Establish these in the mouth, the chart or the next film.'),
   fig_cap='The two halves of a careful report: what the image holds, and where the rest '
           'has to come from.'),
],

g_point='saying how certain you are: appears, suggests, is consistent with, cannot be '
        'excluded',
g_source='the ten sentences on the preview page',
g_rule=['The appearance is consistent with caries. Consistent with says that what you '
        'see fits the diagnosis, without claiming that it proves it. It is the '
        'commonest of the four in a written report, and the most useful one.',
        'Caries cannot be excluded on this radiograph alone. Cannot be excluded is not '
        'the same as is present. It records that you looked and could not rule the '
        'thing out, which is a weaker claim and sometimes the only honest one.',
        'The radiograph suggests bone loss. Appears, suggests, is consistent with and '
        'cannot be excluded are four different strengths. A report that uses them as if '
        'they were the same word reports nothing at all.'],
g_mnemonic_title='FOUR STRENGTHS, FROM WHAT YOU SAW TO WHAT YOU COULD NOT RULE OUT',
g_mnemonic=[
 ('appears as', 'what is in the image, stated as seen',
  'appears as a radiolucency', 'xray'),
 ('is consistent with', 'fits the diagnosis, does not prove it',
  'consistent with caries', 'form'),
 ('cannot be excluded', 'you looked and could not rule it out',
  'caries cannot be excluded', 'cross'),
],
g_mnemonic_cap='Three of the four strengths. Suggests sits between the first and the '
               'second, and is the one students reach for when they mean the third.',
g_mnemonic_note='There is a fifth thing you can write, and it is often the right one: '
                'no abnormality detected. Say it when that is what you found.',
g_fig=('THE SAME FILM, REPORTED TWO WAYS',
       'AS A DIAGNOSIS',
       ['Caries on the distal of the lower left six.',
        'It is two millimetres deep.',
        'It is getting worse.'],
       'AS EVIDENCE',
       ['A radiolucency on the distal surface of the lower left six.',
        'It extends into dentine in the image; the true depth is probably greater.',
        'The appearance is consistent with caries; no earlier film is available.'],
       'Three claims, two of which the film cannot support.',
       'The same image, and every claim held to what is in it.'),
g_fig_cap='One film written up as a conclusion and as evidence, with the claims that do '
          'not survive the second version.',
g_tasks=[
 dict(kind='gap', rubric='Complete each sentence with appears, suggests, consistent or '
                         'excluded.',
   example='The appearance is consistent with caries.',
   pairs=[('The appearance is ____________ with caries.', 'consistent'),
          ('This ____________ to be an artefact rather than a lesion.', 'appears'),
          ('Caries cannot be ____________ on this film alone.', 'excluded'),
          ('The radiograph ____________ bone loss between the two molars.', 'suggests'),
          ('The lesion ____________ to reach dentine in the image.', 'appears'),
          ('A second film would settle what cannot be ____________ from this one.',
           'excluded')]),

 dict(kind='choice', rubric='Circle a, b or c.',
   how='Each of these is a line a student has written in a report.',
   example='A dark area is   a) more absorbed   b) less absorbed.   Answer: b',
   bank=['appears', 'suggests', 'is consistent with', 'cannot be excluded'],
   bank_head='The four strengths these lines have to choose between',
   pics=['a radiolucency', 'radiopaque', 'an artefact', 'to underestimate'],
   pairs=[('A dark area on a film means the beam was   a) absorbed more   '
           'b) absorbed less   c) not used', 'b'),
          ('A radiograph reports the depth of a lesion as   a) greater than it is   '
           'b) less than it is   c) exactly right', 'b'),
          ('Cannot be excluded means   a) it is there   b) I could not rule it out   '
           'c) it is not there', 'b'),
          ('Two superimposed roots mean   a) both are affected   b) I cannot say which '
           'is affected   c) neither is affected', 'b'),
          ('If you found nothing, the right line is   a) no abnormality detected   '
           'b) probably normal   c) nothing written', 'a')]),

 dict(kind='short', pics=['a radiolucency', 'superimposed', 'an artefact', 'to underestimate'],
   rubric='Rewrite each line so that it claims only what the film can '
                           'support.',
   example='Caries on the distal of the lower left six.  (A radiolucency on the distal '
           'surface of the lower left six, consistent with caries.)',
   how='Use a different one of the four strengths in at least three of your answers.',
   pairs=[('Caries on the distal of the lower left six.',
           'A radiolucency on the distal surface of the lower left six, consistent with '
           'caries.'),
          ('The lesion is two millimetres deep.',
           'The lesion extends into dentine in the image; the true depth is probably '
           'greater.'),
          ('The lesion is getting worse.',
           'No earlier film is available, so progression cannot be established.'),
          ('There is no caries anywhere.',
           'No abnormality detected; interproximal caries cannot be excluded where the '
           'surfaces are superimposed.')]),

 dict(kind='gap', rubric='One word is wrong in each sentence. Write the correction.',
   example='The appearance is consistent to caries.  →  with',
   pairs=[('The appearance is consistent to caries.', 'with'),
          ('Caries cannot be included on this film alone.', 'excluded'),
          ('A radiograph overestimates the depth of a lesion.', 'underestimates'),
          ('A dark area is where the beam was absorbed.', 'not'),
          ('A bitewing shows one tooth from crown to root tip.', 'periapical')]),
],

listen_intro='Three recordings: a lecture on why a dark area is dark, a tutorial in '
             'which a report claims three things and the film supports one, and a clinic '
             'in which a line across three teeth turns out not to be in the patient. Do '
             'the task before, the task while you listen, and the task after.',
listening=[
 dict(title='Lecture: why a dark area is dark', genre='lecture',
   what='Dr Nilsen takes the image back to the beam and builds the diagnosis from there.',
   speakers=['Dr Petra Nilsen', 'Leila Mansour'],
   conv_lines=[('L', 'The lesion is dark. Why is it dark?'),
               ('R', 'Because the mineral has gone.'),
               ('L', 'And what does the missing mineral do to the beam?'),
               ('R', 'Less of it is absorbed, so more reaches the receptor.'),
               ('L', 'Good. So what are you actually looking at?'),
               ('R', 'The beam. Not the tooth.')],
   conv_cap='Six turns in which the student stops looking at a tooth and starts looking '
            'at a beam.',
   conv_note='The answer in the last turn is the one sentence that makes every other '
             'rule in this unit obvious.',
   pre=dict(kind='choice',
     rubric='Before you listen, predict why a lesion is dark on a film.',
     how='Use the table in part 1. Then listen and check.',
     example='Metal is   a) dark   b) white.   Answer: b',
     bank=['the beam', 'the receptor', 'mineral', 'metal'],
     bank_head='The four things the lecture puts in one line',
     pics=['a radiolucency', 'radiopaque', 'a bitewing', 'the apex'],
     pairs=[('A lesion is dark because the beam was   a) absorbed more   b) absorbed '
             'less   c) turned off', 'b'),
            ('Enamel is   a) more radiopaque than dentine   b) less radiopaque than '
             'dentine   c) the same', 'a'),
            ('What you are looking at on a film is   a) the tooth   b) what the beam '
             'did   c) the receptor', 'b')]),
   fig=F.mini_table('THE SAME MOUTH, TWO FILMS',
     ['Film', 'What it covers', 'What it is for'],
     [['bitewing', 'the crowns of both jaws, one side', 'caries between the teeth'],
      ['bitewing', 'no root tips at all', 'not for the bone round the apex'],
      ['periapical', 'one tooth, crown to root tip', 'the apex and the bone round it'],
      ['periapical', 'two or three teeth at most', 'not for a survey of the mouth'],
      ['panoramic', 'both jaws on one image', 'everything, in no detail']],
     highlight=[5], note='The shaded row is the film students ask for when they have not '
                         'decided what question they are asking.'),
   fig_cap='Three kinds of film, what each covers, and what each is the wrong film for.',
   script=[('Dr Nilsen', 'Here is a bitewing. Tell me what you see on the lower six.'),
           ('Leila', 'A dark area on the distal surface.'),
           ('Dr Nilsen', 'Good. Why is it dark?'),
           ('Leila', 'Because there is caries there.'),
           ('Dr Nilsen', 'That is your conclusion. I asked why it is dark.'),
           ('Leila', 'Because the mineral has gone.'),
           ('Dr Nilsen', 'And what does missing mineral do to the beam?'),
           ('Leila', 'Less of it is absorbed. So more reaches the receptor.'),
           ('Dr Nilsen', 'And a receptor that receives more beam goes darker.'),
           ('Leila', 'So I am looking at the beam, not at the tooth.'),
           ('Dr Nilsen', 'You are looking at what the beam did. Hold on to that.'),
           ('Leila', 'Then enamel is light because it absorbs a great deal.'),
           ('Dr Nilsen', 'And metal is white because it absorbs almost all of it.'),
           ('Leila', 'Is that why a filling hides what is under it?'),
           ('Dr Nilsen', 'That is exactly why. Nothing gets past it to report on.'),
           ('Leila', 'Which film do I take for caries between two molars?'),
           ('Dr Nilsen', 'A bitewing. Those surfaces touch, and you cannot see them.'),
           ('Leila', 'And if the question is about the bone at the root tip?'),
           ('Dr Nilsen', 'A periapical. A bitewing does not reach the apex at all.'),
           ('Leila', 'And a panoramic?'),
           ('Dr Nilsen', 'Shows you everything and shows you none of it well.'),
           ('Leila', 'So the film follows the question.'),
           ('Dr Nilsen', 'The film follows the question. Every time, in that order.'),
           ('Leila', 'What if I have no question and only a new patient?'),
           ('Dr Nilsen', 'Then you examine her first, and the question will arrive.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='What does Leila see on the lower six?  (a dark area on the distal surface)',
     pairs=[('What does Leila see on the lower six?',
             'a dark area on the distal surface'),
            ('Why is the area dark?', 'the mineral has gone'),
            ('What does missing mineral do to the beam?', 'less of it is absorbed'),
            ('Why is metal white?', 'it absorbs almost all of the beam'),
            ('Which film is taken for caries between two molars?', 'a bitewing'),
            ('What does the film follow?', 'the question')])},
   post=dict(kind='short', rubric='Answer Dr Nilsen’s questions as Leila does.',
     example='“Why is the lesion dark?”  (the mineral has gone)',
     pairs=[('“Why is the lesion dark?”', 'the mineral has gone'),
            ('“Why is enamel light?”', 'it absorbs a great deal of the beam'),
            ('“Why does a filling hide what is under it?”',
             'nothing gets past it to report on'),
            ('“Which film reaches the apex?”', 'a periapical'),
            ('“What does the film follow?”', 'the question')]),
   point='You now know why an area on a film is dark, and that a film is a record of '
         'what a beam did rather than a picture of a tooth.',
   ask='Say in one sentence what you are looking at when you look at a radiograph.',
   icons=['book', 'xray', 'tooth', 'light']),

 dict(title='Tutorial: three claims and one film', genre='tutorial',
   what='Daniel has written three sentences about a bitewing, and Dr Nilsen asks which '
        'of them the film can support.',
   speakers=['Dr Petra Nilsen', 'Daniel Owusu'],
   conv_lines=[('L', 'Three sentences. Which of them is in the image?'),
               ('R', 'The first one. Caries on the distal of the six.'),
               ('L', 'A radiolucency is in the image. Caries is your conclusion.'),
               ('R', 'Then none of the three is in the image.'),
               ('L', 'Now you can write the first line properly.'),
               ('R', 'A radiolucency on the distal surface, consistent with caries.')],
   conv_cap='Six turns in which three confident sentences become one careful one.',
   pre=dict(kind='choice',
     rubric='Before you listen, decide which of three claims a single film can support.',
     how='Say your answer out loud. Then listen.',
     example='Depth on a film is   a) exact   b) underestimated.   Answer: b',
     bank=['a radiolucency', 'the depth', 'progression', 'cavitation'],
     bank_head='One thing the film holds, and three it does not',
     pics=['a radiolucency', 'to underestimate', 'superimposed', 'an artefact'],
     pairs=[('A single film establishes progression   a) always   b) never   '
             'c) sometimes', 'b'),
            ('The depth of a lesion on a film is   a) exact   b) less than the truth   '
             'c) more than the truth', 'b'),
            ('Caries in the image is   a) a finding   b) a conclusion   c) a '
             'measurement', 'b')]),
   fig=F.form_annotated('THREE CLAIMS, CHECKED AGAINST ONE FILM',
     'TUTORIAL  ·  2 JULY',
     [('Claim one', 'caries on the distal of the lower left six'),
      ('What the film holds', 'a radiolucency there; caries is the conclusion'),
      ('Claim two', 'the lesion is two millimetres deep'),
      ('What the film holds', 'an extent in the image, which underestimates the truth'),
      ('Claim three', 'it is getting worse')],
     callouts=[(4, 'this is the line that sends students back to the mouth')],
     note='Five lines. The third claim needs a second film, and there is not one.'),
   fig_cap='Three written claims beside what the film actually holds, line by line.',
   script=[('Dr Nilsen', 'You have written three sentences about this bitewing.'),
           ('Daniel', 'Caries on the distal of the six. Two millimetres. Getting '
                      'worse.'),
           ('Dr Nilsen', 'Which of the three is in the image?'),
           ('Daniel', 'The first one, surely.'),
           ('Dr Nilsen', 'A radiolucency is in the image. Caries is your conclusion.'),
           ('Daniel', 'Then the first one is a conclusion too.'),
           ('Dr Nilsen', 'It is. Which does not make it wrong. Go on.'),
           ('Daniel', 'Two millimetres is measured off the film.'),
           ('Dr Nilsen', 'And a film underestimates the depth of a lesion. Always.'),
           ('Daniel', 'So it is at least two millimetres.'),
           ('Dr Nilsen', 'At least. Say in the image, and say probably greater.'),
           ('Daniel', 'And getting worse needs an earlier film.'),
           ('Dr Nilsen', 'Which we do not have. So that sentence goes.'),
           ('Daniel', 'All three of my sentences were wrong.'),
           ('Dr Nilsen', 'None of them was wrong. All three claimed too much.'),
           ('Daniel', 'Is there a difference?'),
           ('Dr Nilsen', 'A great one. A wrong report misleads. Yours overstates.'),
           ('Daniel', 'Both send somebody down the wrong road.'),
           ('Dr Nilsen', 'They do, which is why we fix it. Write the first line again.'),
           ('Daniel', 'A radiolucency on the distal surface of the lower left six.'),
           ('Dr Nilsen', 'And now the conclusion, in its own sentence.'),
           ('Daniel', 'The appearance is consistent with caries.'),
           ('Dr Nilsen', 'And the depth?'),
           ('Daniel', 'Extends into dentine in the image; the true depth is probably '
                      'greater.'),
           ('Dr Nilsen', 'That is a report. It took four sentences and it holds.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='How many sentences had Daniel written?  (three)',
     pairs=[('How many sentences had Daniel written?', 'three'),
            ('What is in the image, rather than caries?', 'a radiolucency'),
            ('What does a film do to the depth of a lesion?', 'underestimates it'),
            ('What would the third claim need?', 'an earlier film'),
            ('Were his sentences wrong?', 'they claimed too much'),
            ('What is the conclusion written as?', 'consistent with caries')])},
   post=dict(kind='short', rubric='Write what each of these claims needs before it can '
                                  'be made.',
     example='caries  (a radiolucency in the image, and a conclusion in its own '
             'sentence)',
     pairs=[('caries',
             'a radiolucency in the image, and a conclusion in its own sentence'),
            ('two millimetres deep', 'in the image, and probably greater in the mouth'),
            ('getting worse', 'an earlier film taken in the same way'),
            ('the surface is cavitated', 'an eye and a probe, not a film'),
            ('no caries anywhere', 'a note that superimposed surfaces cannot be '
                                   'excluded')]),
   point='You now know the difference between a report that is wrong and a report that '
         'claims more than its evidence, and that both mislead the next clinician.',
   ask='Which of Daniel’s three sentences could survive, and in what form?',
   icons=['form', 'xray', 'probe', 'cross']),

 dict(title='In the clinic: the line that was not in the patient',
   genre='clinical supervision',
   what='Leila finds a dark line across three teeth, and Dr Rahman makes her account '
        'for its shape.',
   speakers=['Dr Yusuf Rahman', 'Leila Mansour'],
   conv_lines=[('L', 'A dark line, across three teeth. What do you make of it?'),
               ('R', 'Caries on three surfaces at once?'),
               ('L', 'Does caries cross from one tooth to the next in a straight line?'),
               ('R', 'No. It starts on a surface and stays there.'),
               ('L', 'So what is the line?'),
               ('R', 'Something that happened to the film, not to the patient.')],
   conv_cap='Six turns at the chair, in which a finding is ruled out by its own shape.',
   pre=dict(kind='choice',
     rubric='Before you listen, decide what rules an artefact in or out.',
     how='Three of these are real tests. One is not.',
     example='Caries crosses teeth   a) yes   b) no.   Answer: b',
     bank=['the shape', 'the position', 'the patient', 'the film'],
     bank_head='What tells you that a mark belongs to the film',
     pics=['an artefact', 'a radiolucency', 'superimposed', 'a bitewing'],
     pairs=[('Caries crosses from one tooth to the next   a) often   b) never in a '
             'straight line   c) always', 'b'),
            ('The first test of an odd mark is   a) its shape   b) its colour   '
             'c) the patient’s age', 'a'),
            ('An artefact is settled by   a) a second film   b) a stronger beam   '
             'c) waiting', 'a')]),
   fig=F.step_sequence('AN ODD MARK: WHAT TO DO, IN ORDER',
     ['Describe the mark: where it is, and what shape it has.',
      'Ask whether disease takes that shape in that place.',
      'Look for the same mark on the other films in the set.',
      'Look in the mouth at the surfaces the mark crosses.',
      'If it is still unexplained, take the film again.',
      'Record what you did, and what the second film showed.'],
     stop_points=[2],
     note='Six steps. The second is the one that settles most artefacts without any '
          'second film at all.'),
   fig_cap='The order in which an odd mark is dealt with, and the step that usually '
           'ends it.',
   script=[('Dr Rahman', 'Look at this bitewing. Anything strike you?'),
           ('Leila', 'A dark line. It runs across three teeth.'),
           ('Dr Rahman', 'Good. What do you make of it?'),
           ('Leila', 'Caries on three surfaces at once?'),
           ('Dr Rahman', 'Does caries cross from one tooth to the next in a line?'),
           ('Leila', 'No. It starts on a surface and stays on it.'),
           ('Dr Rahman', 'So the shape rules your first answer out. What now?'),
           ('Leila', 'Something happened to the film, not to the patient.'),
           ('Dr Rahman', 'An artefact. What is your next step?'),
           ('Leila', 'Look at the other films from today.'),
           ('Dr Rahman', 'Do that. Is the line on them?'),
           ('Leila', 'No. Only on this one.'),
           ('Dr Rahman', 'Then it belongs to this receptor and not to this patient.'),
           ('Leila', 'Should I look in her mouth as well?'),
           ('Dr Rahman', 'Always. The surfaces are there to be looked at.'),
           ('Leila', 'All three look sound, and the probe agrees.'),
           ('Dr Rahman', 'Now you have two reasons, and they point the same way.'),
           ('Leila', 'Do I take it again?'),
           ('Dr Rahman', 'What is the question you still have not answered?'),
           ('Leila', 'Whether anything is on those surfaces under the line.'),
           ('Dr Rahman', 'Then yes, and that is the reason you write down.'),
           ('Leila', 'And the dose?'),
           ('Dr Rahman', 'A second film with a reason is justified. One without is not.'),
           ('Leila', 'What do I record about the first one?'),
           ('Dr Rahman', 'That it carried an artefact, and that it was repeated. Both.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='What does Leila see?  (a dark line across three teeth)',
     pairs=[('What does Leila see?', 'a dark line across three teeth'),
            ('What rules out her first answer?', 'the shape'),
            ('What is her next step?', 'look at the other films from today'),
            ('Is the line on the other films?', 'no, only on this one'),
            ('What does the probe say about the three surfaces?', 'they are sound'),
            ('What makes a second film justified?', 'a reason, written down')])},
   post=dict(kind='short', rubric='Write what each step established about the line.',
     example='its shape  (that caries does not cross teeth in a straight line)',
     pairs=[('its shape', 'that caries does not cross teeth in a straight line'),
            ('the other films', 'that the line belongs to this receptor only'),
            ('looking in the mouth', 'that the three surfaces are sound'),
            ('the repeat film', 'what is on those surfaces under the line'),
            ('the record', 'that there was an artefact and that the film was repeated')]),
   point='You can rule a mark out by its shape before you reach for a second film, and '
         'you know what has to be written when you do take one.',
   ask='What was it about the shape of the line that settled it?',
   icons=['xray', 'mirror', 'probe', 'form']),
],

speaking=[
 dict(title='Reading a bitewing out loud',
   rubric='Describe a bitewing to a partner, in the order of the procedure.',
   how='Student B writes down only what is said. Four minutes, then swap. Use a film '
       'from your own clinic if you have one.',
   conv=['Dr Yusuf Rahman', 'Leila Mansour'],
   conv_lines=[('R', 'Upper right, from the back: seven, six, five, four.'),
               ('L', 'Go on.'),
               ('R', 'Radiolucency on the distal of the six, into dentine.'),
               ('L', 'And the rest?'),
               ('R', 'The others appear sound. Bone levels normal.'),
               ('L', 'And what you cannot say?')],
   model=[('Student', 'Bitewing, right side, taken today.'),
          ('Student', 'Upper right from the back: seven, six, five and four, all '
                      'present.'),
          ('Student', 'A radiolucency on the distal surface of the lower right six, '
                      'extending into dentine in the image.'),
          ('Student', 'The appearance is consistent with caries.'),
          ('Student', 'The other surfaces appear sound, and the bone levels appear '
                      'normal.'),
          ('Student', 'The true depth is probably greater than it appears, and '
                      'cavitation cannot be judged from this film.')],
   frame=[['Change this', 'Keep this', 'Why'],
          ['the film and the teeth', 'the order: film, teeth, finding, conclusion',
           'the order is what is being marked'],
          ['nothing in the last line', 'probably greater  ·  cannot be judged',
           'these two phrases are the whole unit'],
          ['the examples', 'appear sound  ·  appear normal',
           'appear, because a film is what a beam did']],
   checklist=['you named the film and the side before anything else',
              'the finding came before the conclusion, in separate sentences',
              'you said what the film underestimates',
              'you said what the film cannot judge at all'],
   point='You can read a film out loud in an order a colleague can write down, with the '
         'conclusion kept in its own sentence.',
   icons=['xray', 'pen', 'speech', 'tick']),

 dict(title='One finding, four strengths',
   rubric='Say the same finding at four strengths, and justify the one you would write.',
   how='Student B asks “why not the stronger one?” after each. Three minutes each, then '
       'swap.',
   conv=['Dr Petra Nilsen', 'Daniel Owusu'],
   conv_lines=[('R', 'It appears as a radiolucency into dentine.'),
               ('L', 'Why not the stronger one?'),
               ('R', 'Because caries is a conclusion and not an appearance.'),
               ('L', 'And the weakest?'),
               ('R', 'Cannot be excluded is too weak. I can see it.'),
               ('L', 'So which do you write?')],
   model=[('Student', 'It appears as a radiolucency on the distal surface, into '
                      'dentine.'),
          ('Student', 'The radiograph suggests caries on that surface.'),
          ('Student', 'The appearance is consistent with caries.'),
          ('Student', 'Caries on that surface cannot be excluded.'),
          ('Student', 'I should write the third, because I can see the radiolucency and '
                      'the appearance fits.'),
          ('Student', 'I should write the fourth only where the surfaces are '
                      'superimposed and I cannot see.')],
   cards=[dict(who='Student A', brief='the one reporting. Say all four strengths before '
                                      'you choose one.'),
          dict(who='Student B', brief='the one pushing. After each, ask why not the '
                                      'stronger wording.')],
   checklist=['you produced all four strengths for the same finding',
              'you chose one and gave the reason for it',
              'you said where the weakest wording is the right one',
              'you did not use caries and radiolucency as the same word'],
   point='You can choose between four strengths on purpose, which is what stops a report '
         'from claiming more than it saw.',
   icons=['form', 'speech', 'xray', 'tick']),

 dict(title='“Why do I need an x-ray?”',
   rubric='Explain to a patient why a radiograph is needed, without the eight terms.',
   how='Student B is a patient who is worried about radiation. Three minutes, then swap. '
       'Then say which of your sentences you would also write in the record.',
   conv=['Leila Mansour', 'Thandiwe Mabaso'],
   conv_lines=[('R', 'Why do I need an x-ray? Can you not just look?'),
               ('L', 'I can look at five sides of each tooth. Not the sixth.'),
               ('R', 'Is it safe?'),
               ('L', 'It is a very small amount, and I only take one with a reason.'),
               ('R', 'What is the reason today?'),
               ('L', 'Two teeth touch, and I cannot see where they touch.')],
   model=[('Student', 'I can look at five sides of each tooth, but not the side where '
                      'two teeth touch.'),
          ('Student', 'The side where they touch is where this kind of decay usually starts.'),
          ('Student', 'So the picture is for one thing: the two sides I cannot see.'),
          ('Student', 'The amount of radiation is very small, smaller than most people '
                      'expect.'),
          ('Student', 'It is not nothing, which is why I take one only when I have a '
                      'question for it.'),
          ('Student', 'Today the question is whether anything has started between those '
                      'two back teeth.')],
   fig=F.conversation('“WHY DO I NEED AN X-RAY?”',
     dict(name='You', role='the student', skin='3', hair='black', style='tied',
          tunic='teal'),
     dict(name='Your partner', role='the patient', skin='5', hair='black', style='long',
          tunic='plum'),
     [('R', 'Why do I need an x-ray? Can you not just look?'),
      ('L', 'I can look at five sides of each tooth.'),
      ('L', 'Not the sixth, where two teeth touch.'),
      ('R', 'Is it safe?'),
      ('L', 'A very small amount, and only with a reason.'),
      ('R', 'What is the reason today?')],
     note='The last line is the aim. A patient who asks for your reason has accepted '
          'that there should be one.'),
   fig_cap='The conversation that justifies a film to the person who receives the dose.',
   checklist=['you used none of the eight terms',
              'you said which surfaces you cannot see',
              'you were honest that the dose is not nothing',
              'you named the question this particular film is for'],
   point='You can justify a radiograph to a patient in the same terms you justify it in '
         'the record: one question, one film.',
   icons=['person', 'speech', 'xray', 'tick']),
],

fluency=dict(
  title='One film, read three times',
  rubric='Read the same bitewing to three different partners, in the same order.',
  how='Four minutes with the first, three with the second, two with the third. The same '
      'six lines every time. Nothing new is added.',
  content=['Name the film, the side and the day.',
           'Name the teeth present, from the back forwards.',
           'Describe the radiolucency: which tooth, which surface, how far.',
           'Give the conclusion in its own sentence, at one of the four strengths.',
           'Say that the other surfaces and the bone levels appear normal.',
           'Say what the film underestimates and what it cannot judge.'],
  words=['a bitewing', 'a periapical', 'a radiolucency', 'radiopaque', 'the apex',
         'an artefact', 'superimposed', 'to underestimate'],
  fig_title='THE SAME FILM, IN FOUR MINUTES, THEN THREE, THEN TWO',
  point='You can read a film in a fixed order without stopping to think what comes next, '
        'which is what makes a set of films possible in one appointment.',
  ask='Which of the six lines still made you stop on the third attempt?',
  icons=['xray', 'clock', 'form', 'tick']),

reading=[
 dict(title='Textbook: the radiographic image, and its limits', genre='textbook page',
   pre=dict(rubric='Before you read, find these four things in the passage.',
     how='Two minutes. Do not read every sentence yet.',
     items=['why one part of an image is darker than another',
            'what a bitewing covers and what it does not',
            'the three things a single film cannot establish',
            'what the word artefact means']),
   fig=F.mini_table('WHAT ABSORBS THE BEAM, AND HOW IT LOOKS',
     ['Structure', 'Absorption', 'Appearance'],
     [['a metal restoration', 'almost total', 'white'],
      ['enamel', 'high', 'light'],
      ['dentine', 'moderate', 'grey'],
      ['a carious lesion', 'low', 'dark'],
      ['the pulp chamber', 'very low', 'dark']],
     highlight=[4], note='The shaded row is the only one in the table that is a disease. '
                         'The rest is anatomy and dentistry.'),
   fig_cap='Five structures ordered by how much of the beam they absorb, with the one '
           'that reports disease.',
   text=[
    'A radiograph is not a photograph of a tooth. It is a record of what a beam of '
    'x-rays did on its way through the patient to a receptor behind the tooth.',
    'Where a structure absorbs much of the beam, little reaches the receptor and that '
    'part of the image is light. Such a structure is described as radiopaque.',
    'Where a structure absorbs little, more of the beam reaches the receptor and that '
    'part of the image is dark. A dark area of this kind is called a radiolucency.',
    'Enamel is the most mineralised tissue in the body, so enamel is light. Dentine is '
    'less mineralised and appears grey. The pulp chamber absorbs very little and appears '
    'dark.',
    'A carious lesion is dark for one reason only: mineral has been lost from it, so '
    'less of the beam is absorbed there than in the sound tissue beside it.',
    'That single fact is the whole of radiographic caries diagnosis, and it explains the '
    'first of the limits that follow.',
    'A radiograph underestimates the depth of a carious lesion. The outer part of a '
    'lesion has lost only a little mineral, and that part does not show. What is seen in '
    'the image is the part that has lost a great deal.',
    'So a lesion that appears to reach the outer dentine is usually further in than '
    'that, and a lesion that appears confined to enamel may already have entered '
    'dentine.',
    'A radiograph also cannot report cavitation. Whether the surface has broken is '
    'settled by looking and by a probe, in the mouth, and not on a film.',
    'Nor can a single radiograph report progression. A film records one day. Change '
    'requires two films, taken in the same way, far enough apart to be worth comparing.',
    'Two kinds of film do most of the work. A bitewing is taken with the receptor held '
    'between the teeth, and it shows the crowns of the upper and lower teeth on one '
    'side.',
    'A bitewing is the film for the surfaces where two teeth touch, because those are '
    'the surfaces that cannot be seen. It does not reach the tips of the roots at all.',
    'A periapical shows one tooth, or two, from the crown to the tip of the root, with '
    'the bone round the apex. It is the film for a question about the root or that bone.',
    'A third kind, the panoramic, shows both jaws on a single image. It covers '
    'everything and resolves little, and it does not take the place of either of '
    'the other two.',
    'Two faults of the image itself have to be allowed for. The first is superimposition: '
    'where two structures lie one behind the other in the beam, they appear as one, and '
    'neither can be reported separately.',
    'The second is the artefact: a mark that is in the image but not in the patient. An '
    'artefact is usually recognised by its shape, because disease rarely takes the shape '
    'of a straight line crossing several teeth.',
    'Every film carries a dose, and every film must therefore be justified before it is '
    'taken. The question comes first, and the film is chosen to answer that question.'],
   source=('The account of radiographic absorption, of the indications for bitewing and '
           'periapical films, and of the underestimation of lesion depth follows '
           'standard dental radiography reference works.',
           'General dental radiography and radiation protection reference works, '
           '2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='What is a radiograph a record of?  (what the beam did)',
     pairs=[('What is a radiograph a record of?', 'what the beam did'),
            ('What is a light area called?', 'radiopaque'),
            ('Why is a carious lesion dark?', 'mineral has been lost'),
            ('What does a radiograph do to the depth of a lesion?',
             'underestimates it'),
            ('Which film is used for the surfaces where two teeth touch?',
             'a bitewing'),
            ('How is an artefact usually recognised?', 'by its shape')])},
   post=dict(kind='tf', rubric='True or false? If it is false, write the correction in '
                               'eight words or fewer.',
     how='Then say which of these your own textbook states differently.',
     example='A radiograph is a photograph of a tooth.  —  false — it records what the '
             'beam did',
     bank=['radiopaque', 'a radiolucency', 'a bitewing', 'a periapical',
           'an artefact'],
     bank_head='The five terms these statements concern',
     pics=['a radiolucency', 'radiopaque', 'a bitewing', 'an artefact'],
     pairs=[('A radiograph is a photograph of a tooth.',
             'false — it records what the beam did'),
            ('Enamel is light because it absorbs much of the beam.', 'true'),
            ('A radiograph overestimates the depth of a lesion.',
             'false — it underestimates it'),
            ('A bitewing reaches the tips of the roots.',
             'false — it does not reach the apex'),
            ('Every film must be justified before it is taken.', 'true')]),
   point='A film records what a beam did. Everything the unit says about reports follows '
         'from that one sentence.',
   ask='Name the three things a single film cannot establish.',
   icons=['book', 'xray', 'tooth', 'probe']),

 dict(title='A case: the lesion that was deeper than the film', genre='written case',
   pre=dict(rubric='Before you read, decide what you expect.',
     how='Say your answer out loud, then read and compare.',
     items=['How much deeper than the film is a lesion, usually?',
            'What should a patient be told before a filling is started?',
            'What would you have written in the plan for this tooth?']),
   fig=F.form_annotated('WHAT WAS WRITTEN, AND WHAT WAS FOUND',
     'LOWER LEFT SIX  ·  OCCLUSAL',
     [('On the film', 'radiolucency reaching the outer third of dentine'),
      ('Written in the plan', 'a filling, forty minutes'),
      ('What the patient was told', 'a small filling, nothing to worry about'),
      ('Found at the appointment', 'the lesion reached the pulp'),
      ('What the appointment became', 'a root canal, and a second visit')],
     callouts=[(3, 'the line that made the surprise the patient’s problem too')],
     note='Five lines. Only the fourth was outside anybody’s control.'),
   fig_cap='One tooth across two documents and one appointment, with the line that had '
           'promised too much.',
   text=[
    'A man of forty-one attended with no pain and a radiolucency on the occlusal surface '
    'of the lower left six. On the bitewing the lesion appeared to reach the outer third '
    'of the dentine.',
    'The plan recorded a filling and allowed forty minutes for it. The patient was told '
    'that it was a small filling and that there was nothing to worry about.',
    'When the lesion was opened, it reached the pulp. The appointment became a root '
    'canal treatment, it ran an hour over, and a second visit had to be arranged.',
    'The clinical outcome was good. The tooth was saved and the patient came back for '
    'the second visit. What went wrong went wrong in the writing and in the telling.',
    'A radiograph underestimates the depth of a carious lesion, and it does so for a '
    'reason that is built into the image. Only the heavily demineralised part of a '
    'lesion absorbs little enough of the beam to appear dark.',
    'The outer part of the lesion, where some mineral is still present, looks much like '
    'sound dentine. It is there, and it is not in the picture.',
    'So a lesion that appears to reach the outer dentine has very often reached the '
    'middle of it, and a lesion that appears to reach the middle may be at the pulp.',
    'None of this was unknown to the clinician who wrote the plan. It is in every '
    'textbook of dental radiography, usually on the page that introduces the bitewing.',
    'What the plan did was leave it out. Forty minutes and a filling is a prediction, '
    'and a prediction made from a film ought to carry the film’s own limits with it.',
    'A plan that had read, filling, forty minutes, pulp may be involved, would have '
    'changed two things on the day and cost nothing to write.',
    'The first is that an hour would have been booked. The second, and the more '
    'important, is what the patient was told.',
    'Nothing to worry about is a promise. When the appointment turned into a root canal '
    'he had to be told, in the chair and with his mouth open, that the morning was now '
    'something else.',
    'He accepted it, and many patients do not. The sentence that would have prevented '
    'the whole of that is short: this is probably deeper than it looks, and I shall know '
    'when I open it.',
    'That sentence is also true, which is the main argument for it. It does not frighten '
    'anybody and it costs four seconds.',
    'It is also the kind of sentence that gets easier the second time it is said. '
    'Most clinicians who use it say the deep ones stopped frightening them.',
    'The wider point is not about radiography at all. A limit that is known and left out '
    'of the writing becomes somebody else’s surprise, usually the patient’s.'],
   source=('The case is invented for teaching; the underestimation of lesion depth on '
           'radiographs and its consequences for treatment planning follow standard '
           'dental radiography and operative dentistry reference works.',
           'General dental radiography and operative dentistry reference works, '
           '2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='How old was the patient?  (forty-one)',
     pairs=[('How old was the patient?', 'forty-one'),
            ('How far did the lesion appear to reach on the film?',
             'the outer third of the dentine'),
            ('How long was booked?', 'forty minutes'),
            ('What did the lesion actually reach?', 'the pulp'),
            ('What did the appointment become?', 'a root canal treatment'),
            ('Which part of a lesion does not appear on the film?',
             'the outer part, where some mineral is still present')])},
   post=dict(kind='short', rubric='Rewrite each line so that it carries the limit of the '
                                  'film with it.',
     example='A filling, forty minutes.  (A filling, one hour, pulp may be involved.)',
     pairs=[('A filling, forty minutes.',
             'A filling, one hour, pulp may be involved.'),
            ('Nothing to worry about.',
             'This is probably deeper than it looks, and I shall know when I open it.'),
            ('The lesion reaches the outer dentine.',
             'It reaches the outer dentine in the image, and probably further.'),
            ('Caries, lower left six.',
             'Radiolucency on the occlusal of the lower left six, consistent with '
             'caries.'),
            ('Review in six months.',
             'Review in six months with a film taken in the same way.')]),
   point='A limit that everybody knows and nobody writes down becomes the patient’s '
         'surprise, in the chair, with their mouth open.',
   ask='What one sentence would have changed the whole of that morning?',
   icons=['form', 'xray', 'clock', 'cross']),

 dict(title='Procedure: reading a set of bitewings in a fixed order',
   genre='procedure',
   pre=dict(rubric='Before you read, put these steps in the order you would expect.',
     how='Thirty seconds, in pencil. Then read and correct your order.',
     items=['check whose film it is and when it was taken',
            'name the teeth present', 'describe each finding',
            'say what the film cannot establish']),
   fig=F.step_sequence('READING A FILM, IN ORDER',
     ['Check the name on the film and the date it was taken.',
      'Say which film it is, and which side of the mouth.',
      'Name the teeth present, from the back forwards.',
      'Look at every contact surface in turn, in the same direction.',
      'Describe each finding as an appearance, not as a diagnosis.',
      'Give each conclusion in a sentence of its own.',
      'Look at the bone levels, and then at everything else on the film.',
      'End with what this film underestimates and cannot judge.'],
     stop_points=[8],
     note='Eight steps. The last one is the step that most reports leave out, and the '
          'one the next clinician needs most.'),
   fig_cap='The order a film is read in, with the step that tells the next reader what '
           'is missing.',
   text=[
    'A set of bitewings is read in a fixed order for the same reason that a periodontal '
    'chart is taken in a fixed order. An order that does not change is the only way a '
    'reader stops missing the same thing every time.',
    'Begin with the name on the film and the date. A film read on the wrong patient is '
    'not a small error, and it happens most often when a set is handed to somebody in a '
    'hurry.',
    'Say which film it is and which side. Bitewing, right side. This takes three '
    'seconds, and it is the line that lets anybody else check that you were looking at '
    'what you thought you were looking at.',
    'Name the teeth present, from the back forwards. Doing this before you look for '
    'disease means that an absent tooth is noticed as an absence rather than as a '
    'confusing shape.',
    'Then look at every contact surface in turn, always in the same direction. The '
    'surfaces where two teeth touch are the reason the film was taken, and they are '
    'easy to pass over once something more striking has caught the eye.',
    'Describe each finding as an appearance. A radiolucency on the distal surface of '
    'the lower right six, extending into dentine in the image. That sentence contains '
    'no diagnosis, and it is the sentence a colleague can check against the film.',
    'Give the conclusion in a sentence of its own, at a strength you have chosen on '
    'purpose. The appearance is consistent with caries. Keeping the two apart is what '
    'allows a second reader to agree with your finding and disagree with your '
    'conclusion.',
    'Look at the bone levels next, tooth by tooth, and then at everything else the film '
    'happens to cover. A film taken for caries may show calculus, a restoration with a '
    'poor margin, or bone loss that nobody had asked about.',
    'Finish with what the film does not settle. Name the surfaces that are superimposed. '
    'Say that the depths in the image underestimate the depths in the mouth. Say that '
    'progression cannot be established without an earlier film.',
    'This last step is the one that is usually left out, and it is the one the next '
    'clinician needs most. A report that ends at the findings invites the next reader '
    'to treat the findings as the whole truth.',
    'Students ask how long this should take. A set of four bitewings takes about three '
    'minutes once the order is a habit, and almost all of the time saved comes from '
    'never having to go back.',
    'They also ask whether the last step is not simply there to protect the clinician. '
    'It is not. The '
    'surfaces that are superimposed on this film are exactly the surfaces that need '
    'looking at in the mouth.',
    'A report that names them has told the next person where to put the mirror. A report '
    'that does not has left that person to find out at the appointment.'],
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='What do you begin with?  (the name on the film and the date)',
     pairs=[('What do you begin with?', 'the name on the film and the date'),
            ('In which direction are the teeth named?', 'from the back forwards'),
            ('Why are the contact surfaces looked at in a fixed direction?',
             'they are easy to pass over'),
            ('What does a finding sentence contain no part of?', 'a diagnosis'),
            ('What is looked at after the findings?', 'the bone levels'),
            ('How long does a set of four bitewings take?', 'about three minutes')])},
   post=dict(kind='order', rubric='Put the first six steps of the procedure in order.',
     how='Then say which step is skipped most often in your own clinic, and what it '
         'costs.',
     example='Check the name and the date.  —  1',
     bank=['the name and date', 'which film and side', 'the teeth present',
           'the contact surfaces', 'the appearance', 'the conclusion'],
     bank_head='The six things the first steps establish',
     pics=['a bitewing', 'a radiolucency', 'superimposed', 'to underestimate'],
     pairs=[('Check the name on the film and the date.', '1'),
            ('Say which film it is and which side.', '2'),
            ('Name the teeth present, from the back forwards.', '3'),
            ('Look at every contact surface in turn.', '4'),
            ('Describe each finding as an appearance.', '5'),
            ('Give each conclusion in a sentence of its own.', '6')]),
   point='The last step of the procedure is the one that tells the next clinician where '
         'to look, and it is the step most reports leave out.',
   ask='Which step would you be most tempted to skip, and what would it cost?',
   icons=['xray', 'form', 'clock', 'mirror']),
],

writing=[
 dict(title='A radiographic report in five lines',
   rubric='Write the report for one bitewing: film, teeth, findings, conclusions and '
          'limits.',
   how='Keep every finding and its conclusion in separate sentences, as in part 4.',
   fig=F.mini_table('WHAT EACH LINE OF A REPORT CARRIES',
     ['Line', 'What goes in it'],
     [['film', 'which film, which side, what date'],
      ['teeth', 'which teeth are present, from the back forwards'],
      ['findings', 'each appearance, with tooth, surface and extent'],
      ['conclusions', 'each one in its own sentence, at a chosen strength'],
      ['limits', 'what is underestimated, superimposed or unknowable here']],
     highlight=[5]),
   fig_cap='Five lines of a report, with the one that is usually missing.',
   scaffold=['Film:', 'Teeth:', 'Findings:', 'Conclusions:', 'Limits:'],
   model=['Film: bitewing, right side, taken 14 July.',
          'Teeth: UR7, UR6, UR5, UR4, LR7, LR6, LR5, LR4 all present.',
          'Findings: radiolucency on the distal surface of LR6, extending into dentine '
          'in the image; no other radiolucency seen; bone levels appear normal.',
          'Conclusions: the appearance at LR6 distal is consistent with caries; no '
          'other abnormality detected.',
          'Limits: the depth at LR6 is probably greater than it appears; the mesial '
          'surfaces of UR7 and UR6 are superimposed and caries there cannot be '
          'excluded; no earlier film, so progression cannot be established.'],
   checklist=['the film line names the side and the date',
              'every finding is an appearance and not a diagnosis',
              'each conclusion is in its own sentence',
              'the limits line names underestimation, superimposition and progression'],
   point='You can write a report a second reader can agree with in part and disagree '
         'with in part, which is what a report is for.',
   icons=['xray', 'form', 'pen', 'tick']),

 dict(title='The same finding at four strengths',
   rubric='Write one finding four times, at the four strengths, and say which you would '
          'use.',
   how='Four sentences, then a fifth that gives your reason for choosing one of them.',
   fig=F.contrast('FOUR STRENGTHS, ONE FINDING',
     'STRONGER', ['the appearance is consistent with caries',
                  'the radiograph suggests caries',
                  'chosen when the appearance is clear'],
     'WEAKER', ['it appears as a radiolucency into dentine',
                'caries cannot be excluded',
                'chosen where the surfaces cannot be seen'],
     'Claims a fit with a diagnosis.',
     'Claims an appearance, or only that you could not rule it out.'),
   fig_cap='The four strengths arranged by what each one claims, with when each is '
           'chosen.',
   scaffold=['It appears as …', 'The radiograph suggests …',
             'The appearance is consistent with …', 'Caries … cannot be excluded.',
             'I should write the … because …'],
   model=['It appears as a radiolucency on the distal surface of the lower right six, '
          'extending into dentine in the image.',
          'The radiograph suggests caries on the distal surface of the lower right six.',
          'The appearance is consistent with caries on that surface.',
          'Caries on the mesial surfaces of the upper right six and seven cannot be '
          'excluded, as those surfaces are superimposed.',
          'I should write the third for the lower right six, because the radiolucency is '
          'clear and the appearance fits; and the fourth for the upper right, because '
          'there I cannot see the surfaces at all.'],
   checklist=['all four strengths appear, each once',
              'the fourth is used for a surface that cannot be seen',
              'the fifth sentence gives a reason and not a habit',
              'no sentence uses caries and radiolucency as the same word'],
   point='You can choose a strength on purpose and say why, which is the difference '
         'between softening a report and writing one.',
   icons=['pen', 'form', 'xray', 'tick']),

 dict(title='A justification for one film',
   rubric='Write the entry that justifies a radiograph: the question, the film and the '
          'reason.',
   how='Three sentences for the record, and then the same thing in two sentences for '
       'the patient.',
   fig=F.form_annotated('WHAT JUSTIFIES A FILM', 'ONE FILM  ·  FOUR LINES',
     [('Question', 'what you want to know that you cannot see'),
      ('Film', 'which film answers that question'),
      ('Why not another', 'why a different film would not do'),
      ('For the patient', 'the same reason, in her words')],
     callouts=[(1, 'a film with no question in front of it is not justified')],
     note='Four lines. The first one is written before the film is taken, not after.'),
   fig_cap='The four lines that justify a film, with the one that has to come first.',
   scaffold=['Question:', 'Film:', 'Why not another:', 'For the patient:'],
   model=['Question: whether there is caries on the surfaces where the lower molars '
          'touch, which cannot be seen or probed.',
          'Film: bitewing, right side.',
          'Why not another: a periapical would show the roots and not those contact '
          'surfaces; a panoramic would not resolve them.',
          'For the patient: I can look at five sides of each tooth but not the side '
          'where two teeth touch, and that is where this kind of decay starts. The '
          'picture is for those two surfaces and nothing else.'],
   checklist=['the question is written as a question, not as a plan',
              'the film named is the one that answers that question',
              'the third line says why another film would not do',
              'the patient version says what you cannot see'],
   point='You can justify a film in writing before you take it, in the same words you '
         'would use to the patient.',
   icons=['form', 'xray', 'person', 'tick']),
],

cases_intro='Three cases about what a film is evidence of, what it is not, and what is '
            'written down either way. Each can be answered in more than one defensible '
            'way. Work in threes, give a reason for every position you take, and use the '
            'eight terms when you take it.',
cases=[
 dict(tier='A', title='Pain, and a film that shows nothing',
  situation=['A patient has had pain in the lower right quadrant for two weeks. Leila '
             'takes a bitewing and a periapical of the lower right six, and neither film '
             'shows anything abnormal.',
             'Her supervisor asks what the two films establish, what they do not, and '
             'what Leila writes in the record this morning.'],
  who=['Leila Mansour', 'Dr Yusuf Rahman'],
  facts=['The patient has pain that has lasted two weeks.',
         'A bitewing and a periapical of the area show no abnormality.',
         'Some surfaces on the bitewing are superimposed.',
         'A film records one day and underestimates the depth of a lesion.'],
  question='What do the two films establish, and what does Leila write?',
  questions=['What does no abnormality detected mean, and what does it not mean?',
             'Which surfaces in this mouth still have to be examined by eye?',
             'What would you write so that the next clinician knows what was looked '
             'for?'],
  words=['a radiolucency', 'superimposed', 'to underestimate', 'a bitewing',
         'a periapical'],
  language=[('Writing what the films show',
             ['No radiolucency seen on either film; bone levels appear normal.',
              'No abnormality detected on the bitewing or the periapical.']),
            ('Writing what they do not settle',
             ['Caries cannot be excluded where the mesial surfaces are superimposed.',
              'The films do not explain the pain, which remains to be accounted for.'])],
  how='In threes. Eight minutes. One of you writes the record entry for this morning.',
  point='You can report two negative films without implying that nothing is wrong, and '
        'name what still has to be found out.',
  ask='Read out the entry your group would write this morning.',
  note='Taking no further films today and reviewing in two weeks is also defensible. '
       'Say what it risks.',
  icons=['xray', 'probe', 'form', 'cross'],
  guidance=('Reference practice', 'Negative radiographic findings recorded as no '
            'abnormality detected, with superimposed surfaces and unexplained symptoms '
            'noted as outstanding',
            'General dental radiography and record-keeping reference works, 2025–2026.')),

 dict(tier='C', title='The patient who does not want the film',
  situation=['A patient refuses a bitewing. She has read about radiation, she is not in '
             'pain, and she says that she would rather Leila simply looked.',
             'Leila cannot see the surfaces where the molars touch, and those are the '
             'surfaces she is worried about. The patient is willing to come back, but '
             'not to be photographed today.'],
  who=['Leila Mansour', 'Thandiwe Mabaso'],
  facts=['The patient has refused a radiograph for a reason she can state.',
         'The surfaces in question cannot be seen or probed.',
         'The dose from one bitewing is small, and it is not nothing.',
         'The patient has not refused treatment, only the film.'],
  question='What does Leila do today, and what does she record?',
  questions=['How do you answer a patient who refuses, and has a reason for it?',
             'What can be examined and written down without a film?',
             'What would you record about the fact that she said no?'],
  words=['a bitewing', 'superimposed', 'a radiolucency', 'to underestimate',
         'an artefact'],
  language=[('Taking the reason seriously',
             ['You are right that it is not nothing. That is why I only take one with '
              'a question for it.',
              'Today the question is the two surfaces I cannot see.']),
            ('Recording a no properly',
             ['Bitewing offered and declined; reason discussed.',
              'Those surfaces not examined; to be offered again at review.'])],
  how='In threes. Eight minutes. One of you is the patient and has read a great deal.',
  point='You can record a patient saying no in a way that protects her rather than '
        'yourself, by naming what was not examined.',
  ask='Say the two sentences your group would use, and the record line.',
  note='Treating her answer as final and saying no more is defensible. Say what the '
       'next clinician loses.',
  icons=['person', 'speech', 'xray', 'pen']),

 dict(tier='C', title='Two films, and they do not agree',
  situation=['Daniel takes a bitewing that shows a radiolucency on the mesial surface of '
             'an upper molar. The film is poorly angled, so he takes a second one.',
             'On the second film, taken at a better angle, there is no radiolucency on '
             'that surface. His supervisor asks which film he believes, and what he '
             'writes about the other.'],
  who=['Dr Petra Nilsen', 'Daniel Owusu'],
  facts=['The first film shows a radiolucency; the second does not.',
         'The second film was taken at a better angle.',
         'Superimposition changes with the angle of the beam.',
         'Both films are part of the patient’s record and neither can be discarded.'],
  question='Which film does Daniel report from, and what does he write about the other?',
  questions=['What could make a radiolucency appear on one film and not another?',
             'Why does neither film simply replace the other in the record?',
             'What would you examine in the mouth before writing either conclusion?'],
  words=['a radiolucency', 'superimposed', 'an artefact', 'a bitewing',
         'to underestimate'],
  language=[('Reporting the pair, not one of them',
             ['A radiolucency on the first film is not reproduced on the second.',
              'The second film was better angled, and the surfaces are separated on '
              'it.']),
            ('Stopping short of a conclusion',
             ['Caries on that surface cannot be excluded.',
              'The surface to be examined directly and reviewed in six months.'])],
  how='In threes. Eight minutes. One of you argues that the better film settles it.',
  point='You can report a pair of films that disagree without pretending that one of '
        'them was never taken.',
  ask='Read out the two lines your group would write about the pair.',
  note='Reporting only the better film, with a note that the first was repeated, is '
       'defensible. Say what it hides.',
  icons=['xray', 'form', 'mirror', 'clock']),
],

review_intro='Five activities, one for each skill, and one that brings back Units 1 to '
             '8. Nothing in this part repeats a task you have already done. Thirty '
             'minutes.',
review=[
 dict(skill='reading', title='From the tube to the image, shuffled',
   kind='order', rubric='Put the five steps from the tube to the image in order.',
   how='Then say which step your own students find hardest to believe.',
   example='The beam leaves the tube and enters the tooth.  —  1',
   bank=['the beam', 'absorption', 'lost mineral', 'the receptor', 'the image'],
   bank_head='The five steps from the tube to the image',
   pics=['a radiolucency', 'radiopaque', 'a bitewing', 'the apex'],
   pairs=[('The beam leaves the tube and enters the tooth.', '1'),
          ('Enamel and dentine absorb part of it.', '2'),
          ('Where mineral has been lost, less is absorbed.', '3'),
          ('More of the beam reaches the receptor at that point.', '4'),
          ('That point appears darker than the tissue round it.', '5')],
   fig=F.step_sequence('THE FIVE STEPS, ONCE THEY ARE IN ORDER',
     ['The beam enters the tooth.', 'Enamel and dentine absorb part of it.',
      'Less is absorbed where mineral has gone.',
      'More beam reaches the receptor there.',
      'That point is darker on the image.'],
     stop_points=[3],
     note='Only the marked step is about disease.'),
   fig_cap='Five steps in order, with the only one that reports anything about a '
           'patient.'),

 dict(skill='listening', title='Four things from 5.1 you were not asked about',
   kind='choice', rubric='Listen to 5.1 once more and circle a, b or c.',
   how='These are not the questions you answered in part 5. One listening is enough.',
   example='Metal is white because it   a) reflects   b) absorbs.   Answer: b',
   bank=['the conclusion', 'the question', 'the panoramic', 'the filling'],
   bank_head='The four small points to listen for this time',
   pics=['radiopaque', 'a bitewing', 'a periapical', 'an artefact'],
   pairs=[('When Leila says caries, Dr Nilsen calls it   a) a finding   b) her '
           'conclusion   c) correct', 'b'),
          ('A filling hides what is under it because   a) nothing gets past it   '
           'b) it is small   c) it is white', 'a'),
          ('A panoramic shows everything and   a) resolves it well   b) resolves none '
           'of it well   c) nothing at all', 'b'),
          ('With a new patient and no question, Dr Nilsen says   a) take a panoramic   '
           'b) examine her first   c) take nothing ever', 'b')],
   fig=F.mini_table('WHAT YOU ARE LISTENING FOR THIS TIME',
     ['Not this', 'But this'],
     [['why the lesion is dark', 'what Dr Nilsen calls Leila’s word caries'],
      ['which film for which question', 'what a filling does to what lies under it'],
      ['the bitewing', 'what she says to do when there is no question yet']]),
   fig_cap='The same lecture, listened to for what it says about questions rather than '
           'about beams.'),

 dict(skill='speaking', title='A patient who wants a film of everything',
   rubric='Answer a patient who asks for a full set of films as a check.',
   how='Student B says “I would rather know everything” twice and means it. Four '
       'minutes, then swap.',
   model=[('Patient', 'Can you not just take pictures of all of it, to be sure?'),
          ('Student', 'I can. The trouble is that a picture of everything shows very '
                      'little.'),
          ('Patient', 'I would rather know everything.'),
          ('Student', 'So would I. The way to that is a question at a time.'),
          ('Student', 'Today I have one: the surfaces where your back teeth touch.'),
          ('Patient', 'And if something else is going on?')],
   checklist=['you did not refuse without a reason',
              'you said what a film of everything does badly',
              'you named the question today’s film is for',
              'you left her asking what comes next rather than arguing'],
   fig=F.conversation('“TAKE PICTURES OF ALL OF IT”',
     dict(name='You', role='the student', skin='3', hair='black', style='tied',
          tunic='teal'),
     dict(name='Your partner', role='the patient', skin='2', hair='grey', style='short',
          tunic='sand'),
     [('R', 'Can you not take pictures of all of it, to be sure?'),
      ('L', 'A picture of everything shows very little.'),
      ('R', 'I would rather know everything.'),
      ('L', 'So would I. One question at a time.'),
      ('L', 'Today: the surfaces where your back teeth touch.'),
      ('R', 'And if something else is going on?')],
     note='The last line is the aim. A patient who asks that has accepted that films '
          'answer questions one at a time.'),
   fig_cap='The request that sounds like thoroughness, and the answer that keeps it '
           'thorough.'),

 dict(skill='writing', title='A report on a film you would repeat',
   rubric='Write the report for a poorly angled film, and the justification for a '
          'repeat.',
   how='Not the report you wrote in part 8. Here the film is faulty, and that has to be '
       'in the writing.',
   model=['Film: bitewing, left side, taken 14 July; the beam is badly angled and the '
          'contact surfaces of UL6 and UL7 are superimposed.',
          'Teeth: UL7, UL6, UL5, UL4, LL7, LL6, LL5, LL4 all present.',
          'Findings: a radiolucency appears at the mesial of UL7, in an area where two '
          'surfaces overlap; no other radiolucency seen.',
          'Conclusions: caries at the mesial of UL7 cannot be excluded; the appearance '
          'may be the overlap itself.',
          'Limits: this film cannot separate the two surfaces, so neither can be '
          'reported on its own.',
          'Repeat: a second bitewing of the left side, better angled, to separate the '
          'mesial of UL7 from the distal of UL6.'],
   scaffold=['Film:', 'Teeth:', 'Findings:', 'Conclusions:', 'Limits:', 'Repeat:'],
   checklist=['the film line names the fault as well as the film',
              'the findings line says where the surfaces overlap',
              'the conclusion uses cannot be excluded and says why',
              'the repeat line gives the reason the second film answers'],
   fig=F.contrast('TWO WAYS TO REPORT A FAULTY FILM',
     'AS IF IT WERE SOUND', ['radiolucency at the mesial of UL7',
                             'consistent with caries',
                             'restore UL7 mesial'],
     'AS WHAT IT IS', ['an appearance where two surfaces overlap',
                       'caries cannot be excluded; may be the overlap',
                       'repeat the film, better angled'],
     'A plan to cut a tooth on the strength of an overlap.',
     'The same image, and a second film instead of a filling.'),
   fig_cap='One faulty film reported two ways, with what the honest version prevents.'),

 dict(skill='reading', title='Units 1 to 9: in the mouth, in the image, or neither?',
   kind='sort', rubric='Write M for something in the mouth, I for something in the image '
                       'and N for neither.',
   columns=('M', 'I', 'N'),
   how='Four of these come from earlier units. Then find the one item your group '
       'disagrees about, and say why it is hard to place.',
   example='enamel  —  M',
   bank=['in the mouth', 'in the image', 'in neither'],
   bank_head='The three places a thing named in a report can be',
   pics=['a radiolucency', 'an artefact', 'superimposed', 'a bitewing'],
   pairs=[('enamel', 'M'), ('a radiolucency', 'I'), ('an artefact', 'N'),
          ('calculus', 'M'), ('a pocket of six millimetres', 'M'),
          ('superimposition', 'I')],
   fig=F.contrast('THREE PLACES A THING IN A REPORT CAN BE',
     'IN THE PATIENT', ['enamel', 'calculus', 'a pocket of six millimetres',
                        'a cavitated surface'],
     'IN THE IMAGE OR NOWHERE', ['a radiolucency', 'superimposition',
                                 'distortion', 'an artefact'],
     'You could find it with a mirror and a probe.',
     'It exists in the image, or only in the film, and not in the patient.'),
   fig_cap='The distinction this unit adds to the eight before it: the mouth, the image, '
           'and the film’s own faults.'),
],
end_fig_title='ONE BEAM, TWO FILMS, FOUR STRENGTHS',
end_fig_steps=['A radiograph records what a beam did, not what a tooth looks like.',
               'Dark means less was absorbed; a lesion is dark because mineral has gone.',
               'A bitewing is for the surfaces that touch; a periapical for the apex.',
               'A film underestimates depth and reports nothing about cavitation.',
               'Progression needs two films, taken the same way, far enough apart.',
               'Appears, suggests, is consistent with, cannot be excluded: choose one.'],
end_fig_note='Six lines. The first one is the reason for all five that follow it.',
end_fig_cap='The whole of Unit 9 on one page.',

p1_recap=['You have said why a cavity is dark on a film and enamel light, and named '
          'something you have seen that was not in the patient at all.',
          'You have seen the four questions a clinician brings to a film, and what a '
          'single film does with each of them.'],
p1_ask='In your own clinic, who decides that a radiograph is needed, and on what '
       'grounds?',
p1_icons=['xray', 'probe', 'mirror', 'clock'],
p2_recap=['Eight terms you can now use: a bitewing, a periapical, a radiolucency, '
          'radiopaque, the apex, an artefact, superimposed and to underestimate.',
          'Four groups of sentences: what the image shows, what it appears to be, what '
          'it cannot settle, and how to keep the image and the mouth apart.',
          'One rule to hold on to: describe the image first, and name the disease in a '
          'separate sentence.'],
p2_ask='Which two of the eight are the reasons a film is read beside the patient rather '
       'than instead of them?',
p3_recap=['You have moved from recognising these terms to describing an image without '
          'turning the description into a diagnosis.',
          'All eight appear in the lecture in part 5. Say them out loud before you '
          'listen.'],
p3_ask='Say what you are actually looking at when you look at a radiograph.',
p3_icons=['book', 'xray', 'speech', 'tick'],
p4_recap=['Appears states what is in the image; suggests is a step stronger; is '
          'consistent with says the appearance fits the diagnosis; cannot be excluded '
          'says only that you could not rule it out.',
          'No abnormality detected is the fifth thing you can write, and sometimes the '
          'right one.'],
p4_ask='Say the same finding at all four strengths, and then say which you would write.',
p10_recap=['You can say why an area of a film is dark, choose between a bitewing and a '
           'periapical, and describe a finding without making it a diagnosis.',
           'You can choose between four strengths of claim on purpose, name what a film '
           'underestimates, and justify a film before you take it.',
           'Unit 10 brings the history, the examination, the chart and the film together '
           'into one appointment, and ends with a plan somebody else could carry out.'],
p10_ask='Explain to the person next to you, with the book closed, what a radiograph is '
        'evidence of.',
)
