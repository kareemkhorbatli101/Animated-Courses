# -*- coding: utf-8 -*-
import figs2 as F

U = dict(
num=8,
title='Caries: What Takes the Mineral Out, and What Puts It Back',
level='A2.2',
strap='CEFR A2.2  ·  Grammar: comparison and degree: deeper than, more extensive than, '
      'the most, as … as  ·  One disease, two directions, and the point where only one '
      'of them is left',
threads={'domain': ['the hard tissues', 'mineral', 'disease'],
         'function': ['comparing', 'grading', 'deciding an order']},
can_do=['say what caries is and what takes the mineral out of a tooth',
        'name the two directions a tooth surface can go, and what decides between them',
        'grade a lesion as slight, moderate or extensive',
        'compare two lesions by depth and by extent, and say which is treated first',
        'tell a patient why a tooth is being watched and not filled'],
recycles='Unit 3 (enamel, dentine and the pulp), Unit 4 (the surfaces), Unit 6 (a '
         'finding with its extent and its limit) and Unit 7 (a chain of causes, and the '
         'line across it)',
prepares='Unit 9, which takes the radiograph these lesions are looked for on, and asks '
         'what an image is and is not evidence of',

warm=['What does a tooth lose when it decays, and where does the lost material go?',
      'Which surfaces of a back tooth collect the most plaque, and why those?',
      'How many of your own patients have told you that they hardly eat any sugar?'],
warm_fig=F.tooth_section('WHERE CARIES BEGINS, AND WHAT IT CROSSES',
    labels=['enamel', 'dentine', 'the pulp', 'the root canal', 'the gingiva'],
    caption_terms=['enamel', 'dentine', 'the pulp']),
warm_fig_cap='The two hard layers caries crosses, in the order it crosses them.',
warm_fig_alt='A molar in section with enamel, dentine, the pulp, the root canal and the '
             'gingiva labelled, showing the depth a lesion has to cross before it '
             'reaches the pulp.',
warm_fig2=F.icon_cards('WHAT A TOOTH SURFACE IS DOING AT ANY MOMENT',
    [('losing mineral', 'cross'), ('gaining it back', 'tick'),
     ('holding plaque', 'brush'), ('waiting for the next acid', 'clock')],
    cols=4,
    note='The first two happen in every mouth every day. Which of them wins is the whole '
         'of this unit.'),
warm_fig2_cap='Four things happening to one surface, two of them in opposite directions.',
p1_cards=['caries', 'an acid', 'demineralisation', 'remineralisation', 'a fissure',
          'arrested'],

preview_intro='This unit has eight terms and ten sentences. Read this page first. Two of '
              'the eight are opposites of each other, and the rest describe how far a '
              'lesion has gone or whether it is still going.',
set_fig_title='THE EIGHT TERMS OF UNIT 8',
set_fig_cap='The eight terms you will be able to use by the end of this unit.',
set=[
 dict(term='caries', pos='noun', thread='domain',
      definition='disease of the hard tissues in which acid takes mineral out of a tooth',
      example='Caries begins at the surface and works inwards.',
      collocation='occlusal caries  ·  caries progresses', recycle=[8, 9, 10]),
 dict(term='an acid', pos='noun', thread='domain',
      definition='a substance that takes mineral out of enamel and dentine',
      example='The acid is produced by bacteria in the plaque, from sugar.',
      collocation='an acid attack  ·  acid is produced', recycle=[8, 10]),
 dict(term='demineralisation', pos='noun', thread='domain',
      definition='the loss of mineral from a tooth surface',
      example='Demineralisation begins long before a hole can be seen.',
      collocation='early demineralisation  ·  demineralisation of enamel',
      recycle=[8, 9, 10]),
 dict(term='remineralisation', pos='noun', thread='domain',
      definition='the return of mineral to a surface that has lost some',
      example='Remineralisation happens between meals, when the acid has gone.',
      collocation='help remineralisation  ·  remineralisation with fluoride',
      recycle=[8, 10]),
 dict(term='a fissure', pos='noun', thread='domain',
      definition='a narrow groove in the biting surface of a back tooth',
      example='A fissure is narrower than a toothbrush can reach into.',
      collocation='a deep fissure  ·  pits and fissures', recycle=[8, 9]),
 dict(term='cavitated', pos='adjective', thread='domain',
      definition='broken through, of a surface that no longer holds together',
      example='Once the surface is cavitated, saliva will not build it back.',
      collocation='a cavitated lesion  ·  not yet cavitated', recycle=[8, 9, 10]),
 dict(term='to progress', pos='verb', thread='domain',
      definition='to go further over time',
      example='The lesion has progressed by a millimetre since March.',
      collocation='the lesion progresses  ·  progressing slowly', recycle=[8, 9, 10]),
 dict(term='arrested', pos='adjective', thread='domain',
      definition='stopped, and no longer going further',
      example='An arrested lesion is dark, hard to the probe, and left alone.',
      collocation='arrested caries  ·  the lesion is arrested', recycle=[8, 9]),
],
set_note='Learn these eight. The sixth and the eighth are the two words that decide '
         'whether a tooth is filled today.',

phrase_fig_title='TEN SENTENCES FOR COMPARING AND GRADING',
phrases=[
 ('Comparing two lesions',
  ['The lesion on the distal surface is deeper than the one on the mesial.',
   'The occlusal lesion is more extensive than the buccal one.']),
 ('Grading one lesion',
  ['There is slight demineralisation of enamel, with no cavitation.',
   'The lesion is moderate: it extends into dentine but not as far as the pulp.',
   'Extensive caries has destroyed most of the crown.']),
 ('Saying that two are equal',
  ['The lower left six is as badly affected as the lower right six.',
   'This lesion is not as deep as the one we restored last year.']),
 ('Picking one out of a group',
  ['The most extensive lesion in this mouth is on the upper right seven.',
   'The deepest of the four is the one the patient has not noticed.',
   'Treat the most extensive first, and watch the slight ones with fluoride.']),
],
phrase_fig_cap='Ten sentences, in four groups. The fourth group is the one that decides '
               'what happens this morning.',
phrase_note='Note that a comparison needs two things in it. Quite deep is not a '
            'comparison; it is an impression with nothing to measure it against.',

receptive=[
 dict(term='plaque', definition='the soft deposit in which the bacteria live',
      example='The acid is produced inside the plaque, not in the mouth generally.'),
 dict(term='a white spot', definition='the first visible sign that mineral has been lost',
      example='A white spot is white and chalky where the enamel should be clear.'),
 dict(term='fluoride', definition='a mineral that makes remineralisation more likely',
      example='Fluoride varnish was applied to the four slight lesions.'),
 dict(term='a pit', definition='a small hollow where the fissures of a tooth meet',
      example='Pits and fissures hold plaque where no brush reaches.'),
 dict(term='to restore', definition='to replace lost tissue with a material',
      example='A cavitated lesion is restored; an arrested one is not.'),
 dict(term='a bitewing', definition='a radiograph taken with the receptor between the teeth',
      example='The lesion between the two molars was seen on a bitewing.'),
],
receptive_fig_title='TERMS TO RECOGNISE IN UNIT 8',
receptive_fig_cap='You will meet these six in the lecture and the readings. The last of '
                  'them is taught properly in Unit 9.',

preview_task=dict(kind='match', rubric='Match each term with what it means.',
  example='cavitated  —  broken through, so the surface no longer holds together',
  how='Cover the preview page first. Then check your answers against it.',
  pairs=[('caries', 'disease in which acid takes mineral out of a tooth'),
         ('an acid', 'what takes the mineral out'),
         ('demineralisation', 'the loss of mineral from a surface'),
         ('remineralisation', 'the return of mineral to a surface'),
         ('a fissure', 'a narrow groove in a biting surface'),
         ('arrested', 'stopped, and no longer going further')]),

vocab_tasks=[
 dict(kind='gap', rubric='Complete each sentence with one of the eight terms.',
   example='Caries begins at the surface and works inwards.',
   pairs=[('____________ begins at the surface and works inwards.', 'Caries'),
          ('The ____________ is produced by bacteria in the plaque.', 'acid'),
          ('____________ begins long before a hole can be seen.',
           'Demineralisation'),
          ('____________ happens between meals, when the acid has gone.',
           'Remineralisation'),
          ('A ____________ is narrower than a toothbrush can reach into.',
           'fissure'),
          ('Once the surface is ____________, saliva will not build it back.',
           'cavitated'),
          ('The lesion has ____________ by a millimetre since March.', 'progressed'),
          ('An ____________ lesion is dark, hard to the probe, and left alone.',
           'arrested')],
   fig=F.morph_builder('TWO WORDS THAT ARE OPPOSITES, BUILT FROM ONE',
     [('de-', 'mineralis', '-ation', 'demineralisation', 'mineral goes out'),
      ('re-', 'mineralis', '-ation', 'remineralisation', 'mineral comes back'),
      ('', 'cavit', '-ated', 'cavitated', 'the surface has broken'),
      ('', 'arrest', '-ed', 'arrested', 'it has stopped')],
     note='De- means away and re- means back. The middle of the two long words is the '
          'same word you already know: mineral.'),
   fig_cap='Four terms taken apart, with the two prefixes that make the first two '
           'opposites.'),

 dict(kind='odd', rubric='Three of the four belong to one class. Circle the one that '
                         'does not, and name the class the three share.',
   how='Name the class out loud before you name the odd one out. Then say which of the '
       'four you saw most often in your own clinic last week.',
   example='enamel / dentine / pulp / plaque  —  plaque is not a tissue of the tooth',
   bank=['a hard tissue', 'a direction the surface can go', 'a grade of lesion',
         'a place plaque collects'],
   bank_head='The four classes these terms fall into',
   pics=['caries', 'demineralisation', 'a fissure', 'cavitated'],
   pairs=[('enamel / dentine / pulp / plaque', 'plaque'),
          ('demineralisation / remineralisation / cavitation / fluoride', 'fluoride'),
          ('slight / moderate / extensive / cavitated', 'cavitated'),
          ('a pit / a fissure / an interproximal surface / a white spot',
           'a white spot'),
          ('arrested / stopped / no longer progressing / restored', 'restored')]),

 dict(kind='short', pics=['an acid', 'demineralisation', 'remineralisation', 'arrested'],
   rubric='Write what each of these does to the balance between the two '
                           'directions.',
   example='fluoride  (Fluoride makes remineralisation more likely.)',
   pairs=[('fluoride', 'Fluoride makes remineralisation more likely.'),
          ('plaque left on a fissure',
           'Plaque left on a fissure keeps the acid against the surface.'),
          ('six sweet drinks across a day',
           'Six sweet drinks across a day bring the acid back six times.'),
          ('saliva between meals',
           'Saliva between meals returns mineral to the surface.'),
          ('a cavitated surface',
           'A cavitated surface cannot be built back at all.')],
   fig=F.step_sequence('ONE SURFACE, FIVE STAGES',
     ['Plaque sits on the surface and the patient eats something sweet.',
      'Bacteria in the plaque produce acid, and mineral leaves the surface.',
      'The acid goes, and mineral from the saliva comes back.',
      'A white spot appears: more has left than has come back.',
      'The surface breaks: the lesion is cavitated.'],
     stop_points=[4],
     note='Everything above the marked stage can still go either way. Below it, only '
          'one direction is left.'),
   fig_cap='Five stages on one surface, with the last one at which both directions are '
           'still open.'),

 dict(kind='sort', rubric='Write S for slight, M for moderate and E for extensive.',
   columns=('S', 'M', 'E'),
   how='Then say why the grade and not the pain decides which tooth is treated first.',
   example='Demineralisation of enamel, no cavitation.  —  S',
   bank=['slight', 'moderate', 'extensive'],
   bank_head='The three grades, and what each one reaches',
   pics=['caries', 'a fissure', 'cavitated', 'arrested'],
   pairs=[('Demineralisation of enamel, with no cavitation.', 'S'),
          ('A cavity that extends into dentine but not as far as the pulp.', 'M'),
          ('Most of the crown destroyed, with the pulp involved.', 'E'),
          ('A white spot on the buccal surface of an upper canine.', 'S'),
          ('A cavitated lesion halfway through the dentine.', 'M'),
          ('A tooth broken down to the gum.', 'E')],
   fig=F.contrast('THE GRADE DECIDES, AND THE PAIN DOES NOT',
     'WHAT THE GRADE TELLS YOU', ['how far the lesion has gone',
                                  'whether the surface is cavitated',
                                  'whether the pulp is at risk',
                                  'which tooth is treated first'],
     'WHAT THE PAIN TELLS YOU', ['that the patient has noticed it',
                                 'often nothing about the depth',
                                 'nothing at all in a slight lesion',
                                 'nothing about the other three teeth'],
     'Measured, written down, and comparable next time.',
     'Real, important to the patient, and no guide to the order of treatment.'),
   fig_cap='The two things a clinician is tempted to decide by, and what each one '
           'actually reports.'),
],

g_point='comparison and degree: deeper than, more extensive than, the most, as … as',
g_source='the ten sentences on the preview page',
g_rule=['The lesion on the distal surface is deeper than the one on the mesial. Deep is '
        'a short word, so it takes -er. Than is what makes the sentence a comparison '
        'rather than an impression.',
        'The occlusal lesion is more extensive than the buccal one. Extensive is a long '
        'word, so it takes more. The rule is about the length of the word and nothing '
        'else.',
        'The lower left six is as badly affected as the lower right six. As … as says '
        'that the two are equal, and it is the pattern you need when you are asked '
        'which is worse and the honest answer is neither.'],
g_mnemonic_title='THREE PATTERNS FOR PUTTING TWO TEETH SIDE BY SIDE',
g_mnemonic=[
 ('-er than', 'for a short word', 'deeper than the mesial lesion', 'probe'),
 ('more … than', 'for a long word', 'more extensive than the buccal one', 'tooth'),
 ('as … as', 'when the two are equal', 'as badly affected as the other side', 'tick'),
],
g_mnemonic_cap='Three patterns. The third is the one students avoid, and it is the one '
               'that is true most often.',
g_mnemonic_note='The most and the deepest pick one out of a group: the most extensive '
                'lesion, the deepest of the four. Use them to say what is treated first.',
g_fig=('TWO WAYS TO SAY WHICH TOOTH COMES FIRST',
       'WITHOUT A COMPARISON',
       ['There is quite a lot of caries.',
        'This one looks bad.',
        'The others are not too bad.'],
       'WITH A COMPARISON',
       ['The occlusal lesion on the upper right six is the most extensive.',
        'It is deeper than the two on the lower left.',
        'The other three are slight, and none of them is cavitated.'],
       'Three impressions, and no order to treat in.',
       'The same four teeth, and the order decides itself.'),
g_fig_cap='The same four teeth described twice. Only the second version tells anybody '
          'what to do first.',
g_tasks=[
 dict(kind='gap', rubric='Complete each sentence with deeper, more, than, as or most.',
   example='The distal lesion is deeper than the mesial one.',
   pairs=[('The distal lesion is ____________ than the mesial one.', 'deeper'),
          ('The occlusal lesion is ____________ extensive than the buccal one.', 'more'),
          ('This lesion is not as deep ____________ the one we restored last year.',
           'as'),
          ('The ____________ extensive lesion is treated first.', 'most'),
          ('The lower left six is ____________ badly affected as the lower right six.',
           'as'),
          ('A fissure lesion progresses faster ____________ a buccal one.', 'than')]),

 dict(kind='choice', rubric='Circle a, b or c.',
   how='Each of these is a sentence a student has written in a tutorial answer.',
   example='The lesion is   a) more deep   b) deeper.   Answer: b',
   bank=['deeper', 'more extensive', 'as deep as', 'the most'],
   bank_head='The four patterns these sentences need',
   pics=['caries', 'cavitated', 'a fissure', 'arrested'],
   pairs=[('A white spot is   a) cavitated   b) not cavitated   c) always painful',
           'b'),
          ('What decides the outcome is   a) how much sugar   b) how often the acid '
           'arrives   c) the age of the patient', 'b'),
          ('An arrested lesion   a) needs a filling   b) does not need a filling   '
           'c) needs extraction', 'b'),
          ('Correct: the lesion is   a) more deep than   b) deeper than   '
           'c) deeper of', 'b'),
          ('Correct: the lesion is   a) more extensive than   b) extensiver than   '
           'c) most extensive than', 'a')]),

 dict(kind='short', pics=['caries', 'cavitated', 'arrested', 'to progress'],
   rubric='Write one sentence comparing the two lesions in each pair.',
   example='distal 3 mm / mesial 1 mm  (The distal lesion is deeper than the mesial '
           'one.)',
   how='Use a different pattern for each pair. Do not use deeper four times.',
   pairs=[('distal 3 mm / mesial 1 mm',
           'The distal lesion is deeper than the mesial one.'),
          ('occlusal, into dentine / buccal, enamel only',
           'The occlusal lesion is more extensive than the buccal one.'),
          ('lower left six, 4 mm / lower right six, 4 mm',
           'The lower left six is as badly affected as the lower right six.'),
          ('four lesions: 1 mm, 1 mm, 2 mm, 5 mm',
           'The most extensive of the four is the five-millimetre lesion.')]),

 dict(kind='gap', rubric='One word is wrong in each sentence. Write the correction.',
   example='The lesion is more deep than the other.  →  deeper',
   pairs=[('The lesion is more deep than the other.', 'deeper'),
          ('The occlusal lesion is extensiver than the buccal one.', 'more'),
          ('This one is as deep than the other.', 'as'),
          ('A white spot is already cavitated.', 'not'),
          ('An arrested lesion is still progressing.', 'not')]),
],

listen_intro='Three recordings: a lecture on the two directions a surface can go, a '
             'tutorial in which quite deep turns out to say nothing, and a clinic in '
             'which four teeth are put in an order. Do the task before, the task while '
             'you listen, and the task after.',
listening=[
 dict(title='Lecture: the two directions', genre='lecture',
   what='Dr Nilsen sets demineralisation against remineralisation and asks what decides '
        'between them.',
   speakers=['Dr Petra Nilsen', 'Leila Mansour'],
   conv_lines=[('L', 'A surface is losing mineral and gaining it back, all day.'),
               ('R', 'So it is not simply getting worse.'),
               ('L', 'Not until one direction wins. What makes it win?'),
               ('R', 'More sugar?'),
               ('L', 'More often. Six small ones beat one large one.'),
               ('R', 'Then the advice is about the clock, not the amount.')],
   conv_cap='Six turns in which the student moves from how much to how often.',
   conv_note='The answer in turn four is the one almost every patient gives, and it is '
             'the wrong half of the question.',
   pre=dict(kind='choice',
     rubric='Before you listen, predict what decides whether a surface gets worse.',
     how='Use the five-stage figure. Then listen and check.',
     example='A white spot is   a) cavitated   b) not.   Answer: b',
     bank=['how much', 'how often', 'the acid', 'the saliva'],
     bank_head='The four things the lecture weighs against each other',
     pics=['caries', 'an acid', 'demineralisation', 'remineralisation'],
     pairs=[('Mineral comes back to the surface   a) never   b) between meals   '
             'c) only with a filling', 'b'),
            ('What decides the outcome is   a) how much sugar   b) how often the acid '
             'arrives   c) the size of the tooth', 'b'),
            ('A white spot means   a) the surface has broken   b) mineral has been '
             'lost   c) the pulp is involved', 'b')]),
   fig=F.mini_table('ONE SURFACE, AND WHAT IS HAPPENING TO IT',
     ['Moment', 'What is happening', 'Which direction'],
     [['during a sweet drink', 'bacteria produce acid', 'mineral out'],
      ['for an hour afterwards', 'the acid is still there', 'mineral out'],
      ['between meals', 'saliva returns mineral', 'mineral back'],
      ['with fluoride', 'the surface rebuilt is harder', 'mineral back'],
      ['after cavitation', 'plaque sits where no brush reaches', 'mineral out only']],
     highlight=[5], note='The shaded row is the one where the third column stops having '
                         'two possible answers.'),
   fig_cap='Five moments in a day, with the one after which only one direction is left.',
   script=[('Dr Nilsen', 'Put your tongue on a back tooth. Something is happening '
                         'there.'),
           ('Leila', 'Plaque.'),
           ('Dr Nilsen', 'Plaque, and inside it, bacteria. Give them sugar and they '
                         'make acid.'),
           ('Dr Nilsen', 'The acid takes mineral out of the enamel. That is '
                         'demineralisation.'),
           ('Leila', 'And it goes on until the tooth has a hole in it.'),
           ('Dr Nilsen', 'No. That is the half that students remember and it is not '
                         'enough.'),
           ('Dr Nilsen', 'When the acid has gone, mineral from the saliva comes back.'),
           ('Leila', 'So the surface is repairing itself.'),
           ('Dr Nilsen', 'Every day, in your mouth, now. That is remineralisation.'),
           ('Leila', 'Then why does anybody get caries at all?'),
           ('Dr Nilsen', 'Because the two are not always equal. One of them wins.'),
           ('Leila', 'Which one wins?'),
           ('Dr Nilsen', 'Whichever has more time. And that is a question about the '
                         'clock.'),
           ('Leila', 'More sugar, then.'),
           ('Dr Nilsen', 'More often. Six small sweet drinks beat one large one.'),
           ('Leila', 'Six small ones are worse than one large one?'),
           ('Dr Nilsen', 'Far worse. Each one starts an hour of acid.'),
           ('Leila', 'Then the advice is about the clock, not the amount.'),
           ('Dr Nilsen', 'Say that to a patient and you have said the useful thing.'),
           ('Dr Nilsen', 'Fluoride helps the same way. It makes the way back easier.'),
           ('Leila', 'What does the first visible stage look like?'),
           ('Dr Nilsen', 'A white spot. Chalky, where the enamel should be clear.'),
           ('Leila', 'And the surface is still whole at that stage.'),
           ('Dr Nilsen', 'Still whole. Which is why it can still go either way.'),
           ('Leila', 'And when it breaks?'),
           ('Dr Nilsen', 'Then it is cavitated, and saliva will not reach the bottom of '
                         'it.'),
           ('Leila', 'So that is the point of no return.'),
           ('Dr Nilsen', 'That is the point. Everything before it is a decision you '
                         'still have.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='What is inside the plaque?  (bacteria)',
     pairs=[('What is inside the plaque?', 'bacteria'),
            ('What do the bacteria make from sugar?', 'acid'),
            ('What comes back when the acid has gone?', 'mineral from the saliva'),
            ('What decides which direction wins?', 'which one has more time'),
            ('Which is worse, six small sweet drinks or one large one?',
             'six small ones'),
            ('What does the first visible stage look like?', 'a white spot')])},
   post=dict(kind='short', rubric='Answer Dr Nilsen’s questions as Leila does.',
     example='“What is on a back tooth now?”  (plaque)',
     pairs=[('“What is on a back tooth now?”', 'plaque'),
            ('“What do bacteria make from sugar?”', 'acid'),
            ('“What comes back between meals?”', 'mineral from the saliva'),
            ('“More sugar or more often?”', 'more often'),
            ('“What happens when the surface breaks?”',
             'it is cavitated and saliva cannot reach the bottom')]),
   point='You now have the two directions, and you know that the question a patient has '
         'to answer is about the clock and not the amount.',
   ask='Say the two directions out loud, and name what decides between them.',
   icons=['book', 'tooth', 'water', 'clock']),

 dict(title='Tutorial: “quite deep” and what it does not say', genre='tutorial',
   what='Daniel grades a lesion as quite deep, and Dr Nilsen makes him compare it with '
        'something.',
   speakers=['Dr Petra Nilsen', 'Daniel Owusu'],
   conv_lines=[('L', 'You have written: quite deep. Deeper than what?'),
               ('R', 'Deeper than I expected.'),
               ('L', 'That is about you. Say it about the tooth.'),
               ('R', 'Into dentine, not as far as the pulp.'),
               ('L', 'Now I can treat it. What grade is that?'),
               ('R', 'Moderate.')],
   conv_cap='Six turns in which an impression becomes a grade a colleague can act on.',
   pre=dict(kind='choice',
     rubric='Before you listen, decide what quite deep leaves out.',
     how='Say your answer out loud. Then listen.',
     example='Quite deep names   a) a grade   b) nothing.   Answer: b',
     bank=['slight', 'moderate', 'extensive', 'quite deep'],
     bank_head='Three grades and one impression',
     pics=['caries', 'cavitated', 'arrested', 'a fissure'],
     pairs=[('A comparison needs   a) one thing   b) two things   c) three things',
             'b'),
            ('Into dentine but not as far as the pulp is   a) slight   b) moderate   '
             'c) extensive', 'b'),
            ('Quite deep tells a colleague   a) the grade   b) almost nothing   '
             'c) the surface', 'b')]),
   fig=F.form_annotated('ONE LESION, WRITTEN TWO WAYS',
     'TUTORIAL  ·  14 JUNE',
     [('What Daniel wrote', 'upper right six, occlusal, quite deep caries'),
      ('What a colleague needs', 'the surface, the extent and the limit'),
      ('What he wrote instead', 'extends into dentine, not as far as the pulp'),
      ('The grade that follows', 'moderate'),
      ('What it is compared with', 'deeper than the slight lesion on the buccal')],
     callouts=[(2, 'these three lines are the whole difference between the two entries')],
     note='Five lines. The first one is not wrong about the tooth; it is simply about '
          'Daniel.'),
   fig_cap='The same lesion as an impression and as a grade, with what the second one '
           'adds.',
   script=[('Dr Nilsen', 'Read me what you have written for the upper right six.'),
           ('Daniel', 'Occlusal caries, quite deep.'),
           ('Dr Nilsen', 'Quite deep. Deeper than what?'),
           ('Daniel', 'Deeper than I expected.'),
           ('Dr Nilsen', 'That is a sentence about you, not about the tooth.'),
           ('Daniel', 'Deeper than the lesion on the buccal surface.'),
           ('Dr Nilsen', 'Better. Now how far does it actually go?'),
           ('Daniel', 'Into dentine. Not as far as the pulp.'),
           ('Dr Nilsen', 'Now I can treat it. What grade is that?'),
           ('Daniel', 'Moderate.'),
           ('Dr Nilsen', 'And the buccal one?'),
           ('Daniel', 'Enamel only. No cavitation. Slight.'),
           ('Dr Nilsen', 'So which of the two do you touch this morning?'),
           ('Daniel', 'The occlusal. It is the more extensive of the two.'),
           ('Dr Nilsen', 'And the slight one?'),
           ('Daniel', 'Fluoride, and look at it again in six months.'),
           ('Dr Nilsen', 'Why not fill both and be done with it?'),
           ('Daniel', 'Because the slight one can still go the other way.'),
           ('Dr Nilsen', 'And a filling cannot go the other way, ever.'),
           ('Daniel', 'Once you cut it, it is cut.'),
           ('Dr Nilsen', 'Which is the strongest argument there is for a grade.'),
           ('Daniel', 'Because the grade decides whether you cut.'),
           ('Dr Nilsen', 'And quite deep decides nothing, however it feels.'),
           ('Daniel', 'So I should write the extent and let the grade follow.'),
           ('Dr Nilsen', 'Write the extent, and the grade is already written.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='What had Daniel written?  (occlusal caries, quite deep)',
     pairs=[('What had Daniel written?', 'occlusal caries, quite deep'),
            ('How far does the occlusal lesion go?',
             'into dentine, not as far as the pulp'),
            ('What grade is that?', 'moderate'),
            ('What grade is the buccal lesion?', 'slight'),
            ('What does the slight lesion get?',
             'fluoride, and another look in six months'),
            ('Why is a filling different from fluoride?',
             'a filling cannot go the other way')])},
   post=dict(kind='short', rubric='Write what each phrase establishes and what it leaves '
                                  'out.',
     example='quite deep  (it establishes nothing; it leaves out the extent and the '
             'limit)',
     pairs=[('quite deep', 'nothing about the tooth; it leaves out the extent'),
            ('deeper than the buccal lesion', 'a comparison, but not how far it goes'),
            ('extends into dentine', 'the extent, but not where it stops'),
            ('not as far as the pulp', 'the limit, which is what decides the treatment'),
            ('moderate', 'the grade, which is the whole entry in one word')]),
   point='You now know that an impression cannot be compared with anything, and that a '
         'grade is the shortest thing that can.',
   ask='What exactly does quite deep leave out?',
   icons=['form', 'probe', 'tooth', 'cross']),

 dict(title='In the clinic: four teeth, and which one first',
   genre='clinical supervision',
   what='Dr Rahman has Leila put four lesions in an order and give the reason for the '
        'first one.',
   speakers=['Dr Yusuf Rahman', 'Leila Mansour'],
   conv_lines=[('L', 'Four lesions. Which one this morning?'),
               ('R', 'The upper right seven. It is the most extensive.'),
               ('L', 'Why that and not the one she can feel?'),
               ('R', 'The one she feels is slight. It is not cavitated.'),
               ('L', 'Good. And the slight ones?'),
               ('R', 'Fluoride today, and a bitewing in six months.')],
   conv_cap='Six turns at the chair, in which four teeth become a list with an order.',
   pre=dict(kind='choice',
     rubric='Before you listen, decide what puts one tooth ahead of another.',
     how='Three of these are real reasons. One is not.',
     example='The order follows   a) the grade   b) the pain.   Answer: a',
     bank=['the grade', 'cavitation', 'the pain', 'the pulp'],
     bank_head='What decides which tooth is treated first',
     pics=['caries', 'cavitated', 'arrested', 'demineralisation'],
     pairs=[('The order of treatment follows   a) the grade   b) what hurts   '
             'c) the alphabet', 'a'),
            ('A slight lesion is treated with   a) a filling   b) fluoride and a '
             'review   c) an extraction', 'b'),
            ('A cavitated lesion   a) can remineralise   b) cannot remineralise   '
             'c) always hurts', 'b')]),
   fig=F.mini_table('FOUR LESIONS IN ONE MOUTH',
     ['Tooth and surface', 'How far it goes', 'Grade'],
     [['upper right seven, occlusal', 'most of the crown, pulp at risk', 'extensive'],
      ['lower left six, occlusal', 'into dentine, not to the pulp', 'moderate'],
      ['upper left four, buccal', 'enamel only, white spot', 'slight'],
      ['lower right five, distal', 'enamel only, not cavitated', 'slight']],
     highlight=[1], note='The shaded row is the one that is treated this morning, and it '
                         'is not the one the patient complains about.'),
   fig_cap='Four lesions graded, with the one whose grade puts it first.',
   script=[('Dr Rahman', 'Four lesions in this mouth. Read them to me.'),
           ('Leila', 'Upper right seven, occlusal, extensive. Pulp at risk.'),
           ('Leila', 'Lower left six, occlusal, moderate. Into dentine.'),
           ('Leila', 'Upper left four, buccal, slight. A white spot.'),
           ('Leila', 'Lower right five, distal, slight. Not cavitated.'),
           ('Dr Rahman', 'Which one this morning?'),
           ('Leila', 'The upper right seven. It is the most extensive.'),
           ('Dr Rahman', 'She says the lower right five is the one that hurts.'),
           ('Leila', 'It is still slight. It is not cavitated.'),
           ('Dr Rahman', 'So you treat a tooth she does not complain about.'),
           ('Leila', 'And I say why, or she will not understand it.'),
           ('Dr Rahman', 'Say it to me, as you would to her.'),
           ('Leila', 'This one is further gone, and it is closer to the middle of the tooth.'),
           ('Dr Rahman', 'And the one that hurts?'),
           ('Leila', 'The surface there is whole. It can still mend.'),
           ('Dr Rahman', 'Good. What do the two slight ones get today?'),
           ('Leila', 'Fluoride, and a bitewing in six months.'),
           ('Dr Rahman', 'And if the bitewing shows the same thing in six months?'),
           ('Leila', 'Then it has not progressed, and I leave it alone again.'),
           ('Dr Rahman', 'That is a decision, not doing nothing. Write it as one.'),
           ('Leila', 'Watched, fluoride applied, review at six months.'),
           ('Dr Rahman', 'Now the moderate one. This morning or next time?'),
           ('Leila', 'Next time. It is less extensive than the seven.'),
           ('Dr Rahman', 'Both in one appointment is also defensible.'),
           ('Leila', 'If she can sit that long.'),
           ('Dr Rahman', 'Which is a question about her, and worth asking her.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='How many lesions are there?  (four)',
     pairs=[('How many lesions are there?', 'four'),
            ('Which tooth is treated this morning?', 'the upper right seven'),
            ('Why that one?', 'it is the most extensive'),
            ('Which tooth does the patient complain about?',
             'the lower right five'),
            ('What do the two slight lesions get today?',
             'fluoride and a bitewing in six months'),
            ('What is written if nothing has changed?',
             'watched, fluoride applied, review at six months')])},
   post=dict(kind='short', rubric='Write the line Leila would record for each tooth.',
     example='upper right seven  (occlusal, extensive, pulp at risk; restore today)',
     pairs=[('upper right seven', 'occlusal, extensive, pulp at risk; restore today'),
            ('lower left six', 'occlusal, moderate, into dentine; restore next visit'),
            ('upper left four', 'buccal, slight, white spot; fluoride, watched'),
            ('lower right five', 'distal, slight, not cavitated; fluoride, watched'),
            ('the review', 'bitewing in six months to see whether anything has '
                           'progressed')]),
   point='You can put four lesions in an order, and give the patient the reason the '
         'order is not the one she would have chosen.',
   ask='Why is the tooth that hurts not always the tooth that is treated first?',
   icons=['tooth', 'form', 'clock', 'tick']),
],

speaking=[
 dict(title='The two directions, in one minute',
   rubric='Explain the two directions a tooth surface can go, to a partner.',
   how='Student B says “and then?” after each stage and nothing else. Three minutes '
       'each, then swap.',
   conv=['Dr Petra Nilsen', 'Leila Mansour'],
   conv_lines=[('R', 'Bacteria in the plaque make acid from sugar.'),
               ('L', 'And then?'),
               ('R', 'The acid takes mineral out of the enamel.'),
               ('L', 'And then?'),
               ('R', 'The acid goes, and mineral comes back from the saliva.'),
               ('L', 'And then?')],
   model=[('Student', 'Bacteria in the plaque make acid from the sugar in what she '
                      'eats.'),
          ('Student', 'The acid takes mineral out of the enamel: that is '
                      'demineralisation.'),
          ('Student', 'When the acid has gone, mineral from the saliva comes back: that '
                      'is remineralisation.'),
          ('Student', 'Both of those happen every day, and which one wins depends on '
                      'how often the acid arrives.'),
          ('Student', 'If demineralisation wins for long enough, a white spot appears, '
                      'and the surface is still whole.'),
          ('Student', 'If it goes on, the surface breaks: the lesion is cavitated, and '
                      'only one direction is left.')],
   frame=[['Change this', 'Keep this', 'Why'],
          ['the food you start from', 'demineralisation  ·  remineralisation',
           'the two terms are what is being marked'],
          ['nothing in the last line', 'the surface is still whole',
           'this is the clause that keeps the decision open'],
          ['the examples', 'how often, not how much',
           'this is the sentence the patient can act on']],
   checklist=['you named both directions, in both words',
              'you said what decides between them',
              'you described the white spot as a whole surface',
              'the last sentence said what cavitation closes off'],
   point='You can explain both directions without notes, which is what it takes to '
         'answer a patient who asks why a tooth is not being filled.',
   icons=['book', 'tooth', 'water', 'tick']),

 dict(title='Which tooth comes first',
   rubric='Grade four lesions out loud and put them in an order of treatment.',
   how='Student B writes down only the grades, in order. Four minutes, then swap. Use '
       'four real teeth from your own clinic if you have them.',
   conv=['Dr Yusuf Rahman', 'Leila Mansour'],
   conv_lines=[('R', 'Upper right seven, occlusal, extensive.'),
               ('L', 'Go on.'),
               ('R', 'Lower left six, occlusal, moderate.'),
               ('L', 'And the other two?'),
               ('R', 'Both slight, both enamel only, neither cavitated.'),
               ('L', 'So which one first?')],
   model=[('Student', 'Upper right seven, occlusal, extensive, with the pulp at risk.'),
          ('Student', 'Lower left six, occlusal, moderate: into dentine, not as far as '
                      'the pulp.'),
          ('Student', 'Upper left four, buccal, slight: a white spot, not cavitated.'),
          ('Student', 'Lower right five, distal, slight, and not cavitated either.'),
          ('Student', 'The seven is the most extensive, so the seven is first.'),
          ('Student', 'The two slight ones get fluoride today and a bitewing in six '
                      'months.')],
   cards=[dict(who='Student A', brief='the student grading. Give the surface, the '
                                      'extent and the grade for every tooth.'),
          dict(who='Student B', brief='the one writing. Stop your partner the moment a '
                                      'tooth arrives without its grade.')],
   checklist=['every tooth had its surface, its extent and its grade',
              'you said which was the most extensive',
              'you gave the slight lesions something to do, not nothing',
              'you named a time for the review'],
   point='You can grade four teeth by voice and arrive at an order, which is what makes '
         'a treatment plan possible at the chair.',
   icons=['tooth', 'pen', 'speech', 'tick']),

 dict(title='“Why are you not filling it?”',
   rubric='Explain to a patient why a tooth is being watched, without the eight terms.',
   how='Student B is a patient who wants the tooth filled today. Three minutes, then '
       'swap. Then say which of your sentences you would also write in the record.',
   conv=['Leila Mansour', 'Thandiwe Mabaso'],
   conv_lines=[('R', 'There is a mark on it. Why not fill it?'),
               ('L', 'Because the surface is still whole.'),
               ('R', 'So you are waiting for it to get worse.'),
               ('L', 'I am giving it the chance to mend. It can.'),
               ('R', 'And if it does not?'),
               ('L', 'Then I fill it, and we have lost nothing.')],
   model=[('Student', 'There is a white mark on that tooth, and the surface under it is '
                      'still whole.'),
          ('Student', 'A surface that is still whole can mend itself, and this one has '
                      'a good chance.'),
          ('Student', 'If I drill it today, that chance is gone for good: a filling '
                      'does not mend.'),
          ('Student', 'So I shall put fluoride on it, and you keep that spot clean '
                      'twice a day.'),
          ('Student', 'I shall look at it again in six months, with a small '
                      'radiograph.'),
          ('Student', 'If it has gone further by then, I fill it, and we have lost '
                      'nothing by waiting.')],
   fig=F.conversation('“WHY ARE YOU NOT FILLING IT?”',
     dict(name='You', role='the student', skin='3', hair='black', style='tied',
          tunic='teal'),
     dict(name='Your partner', role='the patient', skin='5', hair='black', style='long',
          tunic='plum'),
     [('R', 'There is a mark on it. Why not fill it?'),
      ('L', 'Because the surface is still whole.'),
      ('R', 'So you are waiting for it to get worse.'),
      ('L', 'I am giving it the chance to mend.'),
      ('R', 'And if it does not?'),
      ('L', 'Then I fill it, and we have lost nothing.')],
     note='The third line is the one that has to be answered. Watching sounds like '
          'doing nothing until you say what it is for.'),
   fig_cap='The conversation that stands between a patient and an unnecessary filling.',
   checklist=['you used none of the eight terms',
              'you said the surface was still whole',
              'you said what a filling cannot do',
              'you gave her a job and a date'],
   point='You can explain watching as a decision rather than a delay, which is the only '
         'way a patient will accept it.',
   icons=['person', 'speech', 'tooth', 'tick']),
],

fluency=dict(
  title='The two directions, three times',
  rubric='Explain the two directions, and what decides between them, to three different '
         'partners.',
  how='Four minutes with the first, three with the second, two with the third. The same '
      'six stages every time. Nothing new is added.',
  content=['Begin with the plaque and the sugar, and name what the bacteria make.',
           'Name the direction that takes mineral out, in one word.',
           'Name the direction that brings it back, in one word.',
           'Say what decides which of the two wins.',
           'Describe the first visible stage, and say that the surface is still whole.',
           'Name the point where only one direction is left.'],
  words=['caries', 'an acid', 'demineralisation', 'remineralisation', 'a fissure',
         'cavitated', 'to progress', 'arrested'],
  fig_title='THE SAME TWO DIRECTIONS, IN FOUR MINUTES, THEN THREE, THEN TWO',
  point='You can explain both directions without searching for the next stage, which is '
        'what lets you say it to a patient rather than recite it.',
  ask='Which stage still made you stop on the third attempt?',
  icons=['book', 'clock', 'tooth', 'tick']),

reading=[
 dict(title='Textbook: caries, and the two directions a surface can go',
   genre='textbook page',
   pre=dict(rubric='Before you read, find these four things in the passage.',
     how='Two minutes. Do not read every sentence yet.',
     items=['what the acid is made from, and by what',
            'the two directions a surface can go',
            'what decides which of them wins',
            'the three grades, and what each one reaches']),
   fig=F.tooth_section('THE TWO LAYERS A LESION CROSSES',
     labels=['enamel', 'dentine', 'the pulp', 'the root canal', 'the gingiva'],
     caption_terms=['enamel', 'dentine', 'the pulp']),
   fig_cap='The depth a lesion has to cross, and the tissue it must not reach.',
   text=[
    'Caries is not a hole. The hole is what is left at the end of it. Caries is a '
    'process, and for most of its length it is a process that can still go either way.',
    'The process begins in the plaque. Bacteria in the plaque take sugar from what the '
    'patient has eaten and produce acid from it. That acid lies against the surface of '
    'the tooth and takes mineral out of it.',
    'The loss of mineral from a surface is called demineralisation. It is not visible at '
    'first. A surface may lose mineral for months before anything at all can be seen on '
    'it.',
    'The first thing that can be seen is a white spot. The enamel there is white and '
    'chalky rather than clear, because the mineral that made it clear has gone. The '
    'surface itself is still whole.',
    'Demineralisation is not the only direction. When the acid has gone, mineral from '
    'the saliva returns to the surface. That return is called remineralisation, and it '
    'happens every day in every mouth.',
    'A tooth surface is therefore not simply getting worse or staying as it was. It is '
    'losing mineral while the acid is there, and gaining it back once the acid has '
    'gone.',
    'What decides the outcome is how often the acid arrives, and not how much sugar '
    'there is in it. Six small sweet drinks across a day do more harm than one large '
    'one with a meal.',
    'Fluoride shifts the same balance. It makes remineralisation more likely, and the '
    'surface it builds back is harder than the one that was lost.',
    'Pits and fissures matter for the same reason. A fissure is narrower than a '
    'toothbrush can reach into, so plaque sits in it undisturbed and the acid there '
    'has more time than it has anywhere else.',
    'Interproximal surfaces are the other place where time collects. Two teeth touch '
    'along a small area, and the plaque held just below that contact is reached by '
    'neither a brush nor the tongue.',
    'None of this makes caries certain in those places. It makes them the places to '
    'look at first, and the places where an early lesion is most often missed.',
    'If demineralisation wins for long enough, the surface breaks. A lesion whose '
    'surface has broken is cavitated, and from that point the two directions are no '
    'longer equal.',
    'A cavitated surface holds plaque where no brush reaches, and saliva cannot build '
    'it back. Such a lesion is restored with a material instead.',
    'Where the surface has not broken, a lesion may be arrested. An arrested lesion has '
    'stopped progressing. It is dark, it is hard to the probe, and it does not need a '
    'filling.',
    'Caries is graded by how far it has gone. Slight caries is in enamel only. Moderate '
    'caries extends into dentine. Extensive caries has destroyed much of the crown, and '
    'the pulp may be at risk.',
    'The grade matters because it decides the order of treatment. The most extensive '
    'lesion is treated first, and the slight ones are often given fluoride and watched.'],
   source=('The account of the caries process, of remineralisation and of the grading of '
           'lesions follows standard cariology and operative dentistry reference works.',
           'General cariology and operative dentistry reference works, 2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='What do the bacteria take from what the patient has eaten?  (sugar)',
     pairs=[('What do the bacteria take from what the patient has eaten?', 'sugar'),
            ('What is the loss of mineral from a surface called?', 'demineralisation'),
            ('What is the first thing that can be seen?', 'a white spot'),
            ('What returns mineral to the surface?', 'saliva'),
            ('What decides the outcome?', 'how often the acid arrives'),
            ('What does extensive caries reach?', 'much of the crown')])},
   post=dict(kind='tf', rubric='True or false? If it is false, write the correction in '
                               'eight words or fewer.',
     how='Then say which of these your own textbook states differently.',
     example='Caries is a hole.  —  false — caries is a process',
     bank=['caries', 'demineralisation', 'remineralisation', 'cavitated', 'arrested'],
     bank_head='The five terms these statements concern',
     pics=['caries', 'demineralisation', 'remineralisation', 'cavitated'],
     pairs=[('Caries is a hole in a tooth.', 'false — caries is a process'),
            ('A white spot means the surface has broken.',
             'false — the surface is still whole'),
            ('Remineralisation happens every day in every mouth.', 'true'),
            ('What decides the outcome is how much sugar there is.',
             'false — how often the acid arrives'),
            ('An arrested lesion needs a filling.',
             'false — it is left alone')]),
   point='One disease, two directions, three grades, and one point after which only one '
         'of the directions is left.',
   ask='Name the two directions, and say what decides between them.',
   icons=['book', 'tooth', 'water', 'probe']),

 dict(title='A case: the patient who gave up sugar in her tea', genre='written case',
   pre=dict(rubric='Before you read, decide what you expect.',
     how='Say your answer out loud, then read and compare.',
     items=['What does giving up sugar in tea change, and what does it not?',
            'How many times a day does this patient meet acid?',
            'What would you have asked her at the first visit?']),
   fig=F.mini_table('ONE DAY, COUNTED TWO WAYS',
     ['What she gave up', 'What stayed'],
     [['two spoons of sugar in tea, four times a day', 'the four cups of tea'],
      ['nothing else', 'a bottle of juice sipped all morning'],
      ['nothing else', 'two sweet biscuits with the afternoon tea'],
      ['nothing else', 'a sweet drink at supper']],
     highlight=[2], note='The shaded row is the one nobody asked her about, and it is '
                         'the one that lasts three hours.'),
   fig_cap='What a patient gave up, beside what she kept, over one ordinary day.',
   text=[
    'A woman of thirty-eight was told at her first visit that she had early caries on '
    'four teeth and that she should cut down on sugar.',
    'She did exactly as she was asked. She stopped taking sugar in her tea, which had '
    'been two spoons, four times a day. She was proud of it, and she said so at the '
    'next visit.',
    'Six months later two of the four lesions had progressed, and one of those was now '
    'cavitated. She was upset, and she had every right to be.',
    'What nobody had asked her was what else she drank. She carried a bottle of sweet '
    'juice to work and sipped it from eight in the morning until about eleven.',
    'That habit alone keeps acid against her teeth for three hours. The tea she had '
    'given up accounted for four short attacks a day; the bottle accounted for one '
    'attack that never ended.',
    'The counting here is the whole point, and it is not difficult. Each time sugar '
    'arrives, acid is produced and the surface loses mineral for perhaps an hour '
    'afterwards.',
    'Between those times, saliva returns mineral to the surface. A mouth that meets '
    'sugar four times a day has long gaps in which that can happen.',
    'A mouth that is sipping something sweet for three hours has no gap at all during '
    'those hours. The surface is losing mineral for the whole time, and gaining none '
    'back.',
    'So the advice she was given was not wrong. Cutting down on sugar is the right '
    'instruction. It was simply aimed at the smaller half of her day.',
    'There is a wider lesson in this case about how the advice is worded. Cut down on '
    'sugar invites a patient to think about amount, because that is what cutting down '
    'means everywhere else.',
    'Ask her instead how many times a day something sweet goes into her mouth, and she '
    'will count. Most patients can count, and most of them have never been asked to.',
    'When this patient was asked at the third visit, she counted seven occasions and '
    'was surprised by her own answer. She had not thought of the bottle as an occasion '
    'at all.',
    'The two lesions that had not progressed were on the teeth she brushed most '
    'thoroughly, which is worth noticing but is not the main thing here.',
    'It is worth saying plainly that she had done nothing wrong. She followed an '
    'instruction given to her by somebody she trusted, and she followed it exactly.',
    'The habit she kept was not one she thought of as sugar at all. Juice is sold as '
    'something healthy, and nobody in the surgery had said the word juice in front of '
    'her.',
    'The main thing is that she had been given a true instruction that she could carry '
    'out completely while changing almost nothing about the risk.'],
   source=('The case is invented for teaching; the relationship between the frequency of '
           'sugar intake and the progression of caries follows standard cariology '
           'reference works.',
           'General cariology and preventive dentistry reference works, 2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='How old was the patient?  (thirty-eight)',
     pairs=[('How old was the patient?', 'thirty-eight'),
            ('What was she told to do?', 'cut down on sugar'),
            ('What did she stop?', 'sugar in her tea'),
            ('What did she carry to work?', 'a bottle of sweet juice'),
            ('How long did that bottle last?', 'three hours'),
            ('How many occasions did she count at the third visit?', 'seven')])},
   post=dict(kind='short', rubric='Rewrite each instruction so that it asks about how '
                                  'often.',
     example='Cut down on sugar.  (How many times a day does something sweet go into '
             'your mouth?)',
     pairs=[('Cut down on sugar.',
             'How many times a day does something sweet go into your mouth?'),
            ('Eat less sweet food.',
             'Let us count the occasions, and see which we can join together.'),
            ('Stop the sugar in your tea.',
             'Keep the sweet things to meals, and nothing sweet between them.'),
            ('Drink water instead.',
             'Water between meals, and the juice with a meal if you want it.'),
            ('Try to be careful.',
             'Seven occasions today. Could we get that down to four?')]),
   point='An instruction about amount can be carried out completely and change '
       'nothing, '
         'because caries is counted in occasions and not in spoons.',
   ask='What exactly was incomplete about the instruction she was given?',
   icons=['water', 'clock', 'tooth', 'cross']),

 dict(title='For patients: why we are watching this tooth',
   genre='patient information leaflet',
   pre=dict(rubric='Before you read, decide which four things a patient needs from this '
                   'leaflet.',
     how='Thirty seconds, in pencil. Then read and see which four it gives.',
     items=['what the mark on the tooth is', 'why it is not being filled today',
            'what the patient has to do', 'when it will be looked at again']),
   fig=F.step_sequence('WHAT HAPPENS NOW, IN ORDER',
     ['We put fluoride on the tooth today.',
      'You clean that spot carefully, twice a day.',
      'You keep sweet things to mealtimes.',
      'We look at the tooth again in six months.',
      'If it has not changed, we watch it again.',
      'If it has gone further, we fill it then.'],
     stop_points=[4],
     note='Six steps. The fourth is the one that turns watching into a decision rather '
          'than a delay.'),
   fig_cap='The six steps a watched tooth goes through, with the appointment that makes '
           'them a plan.',
   text=[
    'Your dentist has found a small mark on one of your teeth and has decided not to '
    'fill it today. This leaflet explains why, and what happens instead.',
    'The mark is a place where the tooth has lost some of its mineral. It is the '
    'earliest stage of decay, and at this stage the surface of the tooth is still '
    'whole.',
    'That matters more than it sounds. A surface that is still whole can take mineral '
    'back from your saliva, and a tooth can mend a mark like this one.',
    'A filling cannot mend. To put a filling in, your dentist has to remove some sound '
    'tooth as well, and that tooth does not grow back.',
    'So a filling today would end a chance that you still have. That is the whole '
    'reason for waiting, and waiting here is a decision and not a delay.',
    'Three things decide whether the mark mends or gets worse, and you control two of '
    'them.',
    'The first is how clean that spot is kept. Mineral leaves the tooth under a layer '
    'of plaque, so the spot needs brushing carefully twice a day, every day.',
    'The second is how often you have something sweet. This is not about how much. Each '
    'time something sweet goes into your mouth, acid forms and the tooth loses mineral '
    'for about an hour.',
    'Four sweet occasions in a day leave long gaps in which the tooth mends. Sipping a '
    'sweet drink across a morning leaves no gap at all.',
    'The third is fluoride, and that is the part we do. We shall paint fluoride on the '
    'spot today, and your toothpaste does the same job every day at home.',
    'We shall look at the tooth again in six months, and we may take a small radiograph '
    'to see the side of the tooth we cannot look at directly.',
    'If the mark has not changed, that is good news and we watch it again. If it has '
    'gone further, we fill it then, and nothing has been lost by waiting.',
    'Please do come to that appointment even if the tooth feels completely normal. A '
    'mark like this one does not hurt, at any stage, until it is much further on.',
    'You may be wondering why we cannot simply be certain today. The honest answer is '
    'that nobody can see which way a mark like this one will go.',
    'What we can do is change the odds, and then look again. That is why the '
    'appointment in six months matters as much as anything we do today.',
    'If you have any questions about any of this, please ask us before you leave '
    'today.',
    'If the tooth does begin to hurt, or if you can feel a rough edge on it with your '
    'tongue, telephone us. Do not wait for the six-month appointment.'],
   source=('The patient explanation follows standard preventive dentistry and patient '
           'information practice.',
           'General preventive dentistry and patient information reference works, '
           '2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='What has the dentist found?  (a small mark on a tooth)',
     pairs=[('What has the dentist found?', 'a small mark on a tooth'),
            ('What has the tooth lost?', 'some of its mineral'),
            ('What can a surface that is still whole do?', 'take mineral back'),
            ('What cannot mend?', 'a filling'),
            ('How many things decide whether the mark mends?', 'three'),
            ('When will the tooth be looked at again?', 'in six months')])},
   post=dict(kind='order', rubric='Put the six steps of the leaflet in the order it '
                                  'gives them.',
     how='Then say which step a patient in your own clinic would be most likely to '
         'forget.',
     example='Fluoride is painted on the tooth today.  —  1',
     bank=['fluoride today', 'clean the spot', 'sweet things at mealtimes',
           'six months', 'watch again', 'fill it then'],
     bank_head='The six things the leaflet asks for or promises',
     pics=['remineralisation', 'a fissure', 'caries', 'arrested'],
     pairs=[('Fluoride is painted on the tooth today.', '1'),
            ('You clean that spot carefully, twice a day.', '2'),
            ('You keep sweet things to mealtimes.', '3'),
            ('The tooth is looked at again in six months.', '4'),
            ('If nothing has changed, it is watched again.', '5'),
            ('If it has gone further, it is filled then.', '6')]),
   point='A patient will accept watching only if the leaflet says what watching is for, '
         'what they do, and when somebody looks again.',
   ask='Which of the three things in the leaflet does the patient not control?',
   icons=['form', 'brush', 'water', 'calendar']),
],

writing=[
 dict(title='Four lesions, graded and put in an order',
   rubric='Write the four lesions as a graded list, with the order of treatment.',
   how='Each line carries the tooth, the surface, the extent and the grade. The last '
       'line gives the order and one reason.',
   fig=F.mini_table('WHAT EACH LINE MUST CARRY',
     ['Part of the line', 'What goes in it'],
     [['tooth', 'which tooth, in the notation your clinic uses'],
      ['surface', 'which surface of it'],
      ['extent', 'how far it goes, and where it stops'],
      ['grade', 'slight, moderate or extensive'],
      ['order', 'which is first, and the reason']], highlight=[5]),
   fig_cap='Five things a graded list carries, with the one that is usually left to '
           'memory.',
   scaffold=['UR7 occlusal: ', 'LL6 occlusal: ', 'UL4 buccal: ', 'LR5 distal: ',
             'Order: '],
   model=['UR7 occlusal: caries involving most of the crown, with the pulp at risk — '
          'extensive.',
          'LL6 occlusal: cavitated lesion extending into dentine but not as far as the '
          'pulp — moderate.',
          'UL4 buccal: demineralisation of enamel only, not cavitated, white spot — '
          'slight.',
          'LR5 distal: demineralisation of enamel only, not cavitated — slight.',
          'Order: UR7 today, as the most extensive and the only one with the pulp at '
          'risk; LL6 next visit; both slight lesions fluoride and review at six '
          'months.'],
   checklist=['every line names the tooth, the surface, the extent and the grade',
              'the two slight lesions are marked as not cavitated',
              'the order line gives a reason and not only a sequence',
              'the slight lesions are given something to do, not nothing'],
   point='You can write four lesions in a form a colleague can treat from without '
         'looking in the mouth first.',
   icons=['tooth', 'form', 'pen', 'tick']),

 dict(title='One lesion, as a record entry',
   rubric='Write the entry for a single lesion: finding, extent, grade, decision and '
          'review.',
   how='Keep the finding and the decision visibly apart, as in Unit 6.',
   fig=F.form_annotated('WHAT A ONE-LESION ENTRY CARRIES', 'ONE TOOTH  ·  FIVE LINES',
     [('Finding', 'the tooth, the surface and what is there'),
      ('Extent', 'how far it goes, and where it stops'),
      ('Grade', 'slight, moderate or extensive'),
      ('Decision', 'restore, or watch, marked as a decision'),
      ('Review', 'what will be looked at, and when')],
     callouts=[(4, 'the line that turns watching into something other than nothing')],
     note='Five lines. The fourth is the one that is missing whenever a patient thinks '
          'they were ignored.'),
   fig_cap='The five lines of a one-lesion entry, with the one that records a decision.',
   scaffold=['Finding:', 'Extent:', 'Grade:', 'Decision:', 'Review:'],
   model=['Finding: UL4, buccal surface, white spot with chalky enamel, surface intact.',
          'Extent: demineralisation of enamel only; not cavitated.',
          'Grade: slight.',
          'Decision: not restored today; fluoride varnish applied; cleaning of that '
          'surface demonstrated to the patient.',
          'Review: bitewing and clinical examination at six months, to establish '
          'whether the lesion has progressed.'],
   checklist=['the finding line says what is there and nothing about what to do',
              'the extent line says where it stops as well as where it goes',
              'the decision line says not restored today, in those words',
              'the review line names what will be done and when'],
   point='You can write an entry in which watching a tooth is visible as a decision '
         'somebody took on a date.',
   icons=['form', 'pen', 'tooth', 'calendar']),

 dict(title='A tutorial answer: how often, not how much',
   rubric='Answer a tutorial question in six sentences: why how often matters more '
          'than how much.',
   how='Use at least three of the comparison patterns. One sentence must be an as … as '
       'or a not as … as.',
   fig=F.contrast('THE SAME DAY, TWO QUESTIONS',
     'HOW MUCH', ['two spoons of sugar',
                  'one large sweet drink',
                  'a figure the patient can argue with'],
     'HOW OFTEN', ['seven sweet occasions',
                   'one of them lasting three hours',
                   'a number the patient can count and change'],
     'Answered by cutting down, which changes little.',
     'Answered by joining occasions together, which changes the risk.'),
   fig_cap='One day, counted by amount and counted by occasions, with what each count '
           'leads to.',
   scaffold=['Caries happens when …', 'Each time something sweet arrives, …',
             'Between those times, …', 'So a mouth that …',
             'A mouth that sips …', 'For that reason, …'],
   model=['Caries happens when a surface loses more mineral than it gains back.',
          'Each time something sweet arrives, acid is produced and the surface loses '
          'mineral for about an hour.',
          'Between those times, saliva returns mineral to the surface.',
          'So a mouth that meets sugar four times a day has long gaps in which the '
          'surface can mend.',
          'A mouth that sips a sweet drink across a morning has no gap at all, and is '
          'therefore worse off than one that takes the same sugar with a meal.',
          'For that reason a long sipped drink is more damaging than a large one '
          'taken with a meal, and the useful question is not how much but how often.'],
   checklist=['at least three comparison patterns appear',
              'one sentence uses as … as or not as … as',
              'the answer names both directions',
              'the last sentence says what question to ask a patient'],
   point='You can answer a question about caries in six sentences that also work, word for '
         'for word, at the chair.',
   icons=['pen', 'book', 'clock', 'tick']),
],

cases_intro='Three cases about how far a lesion has gone, what follows from that, and '
            'what a patient is told. Each can be answered in more than one defensible '
            'way. Work in threes, give a reason for every position you take, and use the '
            'eight terms when you take it.',
cases=[
 dict(tier='A', title='Four lesions, and one appointment',
  situation=['Leila has four lesions in one mouth: one extensive with the pulp at risk, '
             'one moderate into dentine, and two slight ones in enamel only. The '
             'patient has one hour and lives two hours away.',
             'The tooth she complains about is one of the slight ones. Her supervisor '
             'asks Leila what she treats today and what she says about the rest.'],
  who=['Leila Mansour', 'Dr Yusuf Rahman'],
  facts=['One lesion is extensive, with the pulp at risk.',
         'One lesion is moderate and extends into dentine.',
         'Two lesions are slight and not cavitated.',
         'The tooth the patient complains about is one of the slight ones.'],
  question='What is treated in this hour, and what is said about the other three teeth?',
  questions=['What does the grade of each lesion decide about the order?',
             'How do you explain treating a tooth she has not complained about?',
             'What would you write for the two slight lesions, so that watching them is '
             'visible as a decision?'],
  words=['caries', 'cavitated', 'arrested', 'demineralisation', 'to progress'],
  language=[('Putting them in an order',
             ['The upper right seven is the most extensive, and the only one near the '
              'pulp.',
              'The lower left six is less urgent, because it has not reached the '
              'pulp.']),
            ('Explaining the order to the patient',
             ['The tooth that hurts is the one that can still mend.',
              'The one I am treating is further gone, even though you cannot feel '
              'it.'])],
  how='In threes. Eight minutes. One of you writes the entry for the two slight '
      'lesions.',
  point='You can let the grade decide the order, and explain that order to a patient '
        'whose own tooth is not first on the list.',
  ask='Read out the sentence your group would use to explain the order to her.',
  note='Treating the tooth she complains about first, to keep her trust, is also '
       'defensible. Say what it costs and what it buys.',
  icons=['tooth', 'clock', 'form', 'speech'],
  guidance=('Reference practice', 'Lesions graded by extent, with cavitation and '
            'proximity to the pulp deciding the order of treatment and non-cavitated '
            'lesions managed without restoration',
            'General cariology and operative dentistry reference works, 2025–2026.')),

 dict(tier='C', title='The patient who wants the white spot filled',
  situation=['A patient can see a white mark on an upper front tooth and wants it '
             'filled. The surface is intact, the lesion is slight, and Leila would '
             'rather watch it.',
             'The patient is going to be photographed at a wedding in three weeks and '
             'says the mark is the only thing she will see in the pictures.'],
  who=['Leila Mansour', 'Thandiwe Mabaso'],
  facts=['The lesion is slight and the surface is not cavitated.',
         'The tooth is in the front of the mouth and the mark is visible.',
         'The patient has a reason that is about appearance and not about disease.',
         'A restoration would remove sound enamel that does not grow back.'],
  question='What does Leila offer, and what does she decline to do today?',
  questions=['How do you separate what the tooth needs from what the patient wants?',
             'What can be offered that does not cut the tooth?',
             'What would you record about this conversation?'],
  words=['caries', 'cavitated', 'demineralisation', 'remineralisation', 'arrested'],
  language=[('Saying what the tooth needs',
             ['The surface here is still whole, and a surface like this can mend.',
              'A filling would mean taking away sound tooth that does not come back.']),
            ('Taking the wish seriously',
             ['I can see why it bothers you, and three weeks is not long.',
              'There are things we can try that do not cut the tooth at all.'])],
  how='In threes. Eight minutes. One of you is the patient and has a wedding in three '
      'weeks.',
  point='You can decline a request without dismissing the reason behind it, and offer '
        'something that is not nothing.',
  ask='Say the two sentences your group would use, and the record line.',
  note='Restoring a visible front lesion at a patient’s request is defended by many '
       'clinicians. Say what you would want her to understand first.',
  icons=['person', 'speech', 'tooth', 'pen']),

 dict(tier='C', title='The lesion that has not changed in two years',
  situation=['Daniel is reviewing a slight interproximal lesion that has looked the '
             'same on three bitewings taken a year apart. It is not cavitated and the '
             'patient has no pain.',
             'His supervisor asks whether a lesion that has not moved in two years is '
             'arrested, and what the honest entry for it looks like.'],
  who=['Dr Petra Nilsen', 'Daniel Owusu'],
  facts=['Three radiographs across two years look the same.',
         'The lesion is not cavitated and gives no symptoms.',
         'Radiographs taken a year apart are not perfectly comparable.',
         'Calling a lesion arrested is a conclusion and not a measurement.'],
  question='What can be written about this lesion, and what cannot?',
  questions=['What would make you confident enough to call a lesion arrested?',
             'How do you record a lesion that is stable without promising that it will '
             'stay so?',
             'What changes about the plan in your own clinic if you call it arrested?'],
  words=['arrested', 'to progress', 'cavitated', 'demineralisation', 'caries'],
  language=[('Writing what the films show',
             ['No detectable change across three radiographs over two years.',
              'Not cavitated clinically; no symptoms reported.']),
            ('Stopping short of a promise',
             ['Appears arrested; no restoration indicated at present.',
              'Review at twelve months with a comparable radiograph.'])],
  how='In threes. Eight minutes. One of you argues that two years of no change is '
      'enough on its own.',
  point='You can record a lesion as stable, and as probably arrested, without turning a '
        'conclusion into a measurement.',
  ask='Read out the conclusion line your group would write.',
  note='Writing arrested with nothing to soften it is defensible when the films are '
       'good. Say '
       'what would make yours good enough.',
  icons=['xray', 'clock', 'tooth', 'form']),
],

review_intro='Five activities, one for each skill, and one that brings back Units 1 to '
             '7. Nothing in this part repeats a task you have already done. Thirty '
             'minutes.',
review=[
 dict(skill='reading', title='The five stages, shuffled',
   kind='order', rubric='Put the five stages of one surface in the order they occur.',
   how='Then say which stage your own patients believe is the first one.',
   example='Plaque sits on the surface and something sweet is eaten.  —  1',
   bank=['plaque and sugar', 'acid', 'mineral back', 'a white spot', 'cavitation'],
   bank_head='The five stages of one surface',
   pics=['caries', 'an acid', 'demineralisation', 'cavitated'],
   pairs=[('Plaque sits on the surface and something sweet is eaten.', '1'),
          ('Bacteria produce acid and mineral leaves the surface.', '2'),
          ('The acid goes, and mineral from the saliva comes back.', '3'),
          ('More has left than has come back: a white spot appears.', '4'),
          ('The surface breaks, and the lesion is cavitated.', '5')],
   fig=F.step_sequence('THE FIVE STAGES, ONCE THEY ARE IN ORDER',
     ['Plaque and something sweet.', 'Acid, and mineral out.',
      'The acid goes, and mineral back.', 'A white spot: more out than in.',
      'The surface breaks: cavitated.'],
     stop_points=[4],
     note='Everything above the marked stage can still go either way.'),
   fig_cap='Five stages in order, with the last one at which both directions are open.'),

 dict(skill='listening', title='Four things from 5.1 you were not asked about',
   kind='choice', rubric='Listen to 5.1 once more and circle a, b or c.',
   how='These are not the questions you answered in part 5. One listening is enough.',
   example='Mineral comes back   a) never   b) between meals.   Answer: b',
   bank=['the clock', 'the amount', 'fluoride', 'the white spot'],
   bank_head='The four small points to listen for this time',
   pics=['remineralisation', 'an acid', 'caries', 'arrested'],
   pairs=[('Dr Nilsen says that what students remember is   a) all of it   b) half of '
           'it   c) none of it', 'b'),
          ('Each sweet occasion starts   a) a minute of acid   b) an hour of acid   '
           'c) a day of acid', 'b'),
          ('Fluoride makes easier   a) the direction out   b) the direction back   '
           'c) neither', 'b'),
          ('Before cavitation, the decision is   a) already made   b) still yours   '
           'c) the patient’s alone', 'b')],
   fig=F.mini_table('WHAT YOU ARE LISTENING FOR THIS TIME',
     ['Not this', 'But this'],
     [['the two directions', 'what Dr Nilsen says students remember'],
      ['how often', 'how long one occasion lasts'],
      ['the white spot', 'what is still true while the surface is whole']]),
   fig_cap='The same lecture, listened to for what it says about decisions rather than '
           'about mineral.'),

 dict(skill='speaking', title='A patient who says sugar is not her problem',
   rubric='Answer a patient who is certain that she hardly eats any sugar.',
   how='Student B says “I hardly eat any sugar” twice and means it. Four minutes, then '
       'swap.',
   model=[('Patient', 'I hardly eat any sugar. It cannot be that.'),
          ('Student', 'I believe you about the amount. Can we count the times '
                      'instead?'),
          ('Patient', 'The times?'),
          ('Student', 'Anything sweet going in. Tea, juice, a biscuit. From waking '
                      'up.'),
          ('Patient', 'Tea at seven. Juice on the way to work. I suppose that is two.'),
          ('Student', 'Keep going. Most people are surprised by their own number.')],
   checklist=['you did not argue with what she said about amount',
              'you moved the question from how much to how often',
              'you asked her to count rather than telling her a number',
              'you left her counting rather than defending herself'],
   fig=F.conversation('“I HARDLY EAT ANY SUGAR”',
     dict(name='You', role='the student', skin='3', hair='black', style='tied',
          tunic='teal'),
     dict(name='Your partner', role='the patient', skin='2', hair='grey', style='short',
          tunic='sand'),
     [('R', 'I hardly eat any sugar. It cannot be that.'),
      ('L', 'I believe you about the amount.'),
      ('L', 'Can we count the times instead?'),
      ('R', 'The times?'),
      ('L', 'Anything sweet going in, from waking up.'),
      ('R', 'I suppose the juice counts.')],
     note='The last line is the aim. A patient who counts her own occasions has stopped '
          'defending the amount.'),
   fig_cap='The belief that stops most dietary advice, and the question that moves it.'),

 dict(skill='writing', title='A six-month review entry',
   rubric='Write the review entry for a watched lesion, comparing it with the first '
          'visit.',
   how='Not the entry you wrote in part 8. Here you have two visits, and the comparison '
       'is the point.',
   model=['Finding, December: UL4 buccal, white spot, surface intact, same position as '
          'in June.',
          'Comparison with June: no detectable change in size or in appearance.',
          'Extent: demineralisation of enamel only; still not cavitated.',
          'Grade: slight, unchanged.',
          'Decision: not restored; fluoride varnish applied again; cleaning of the '
          'surface reviewed with the patient.',
          'Review: twelve months, with a bitewing taken in the same way as the last '
          'one.'],
   scaffold=['Finding, December:', 'Comparison with June:', 'Extent:', 'Grade:',
             'Decision:', 'Review:'],
   checklist=['the comparison line says what has not changed as well as what has',
              'the grade line says unchanged rather than repeating the grade alone',
              'the decision line records not restored as a decision',
              'the review line says the radiograph must be comparable'],
   fig=F.contrast('TWO WAYS TO WRITE A REVIEW OF THE SAME TOOTH',
     'AS A REPEAT', ['white spot, UL4 buccal',
                     'slight',
                     'fluoride applied'],
     'AS A COMPARISON', ['white spot, UL4 buccal, same position as in June',
                         'slight, unchanged, still not cavitated',
                         'fluoride applied again; review at twelve months'],
     'True, and it could have been copied from June.',
     'The same facts, and six months of information in them.'),
   fig_cap='One tooth written up twice, with what the comparison adds to an identical '
           'finding.'),

 dict(skill='reading', title='Units 1 to 8: tissue, deposit or stage of disease?',
   kind='sort', rubric='Write T for a tissue, D for a deposit and S for a stage of '
                       'disease.',
   columns=('T', 'D', 'S'),
   how='Four of these come from earlier units. Then find the one item your group '
       'disagrees about, and say why it is hard to place.',
   example='enamel  —  T',
   bank=['a tissue', 'a deposit', 'a stage of disease'],
   bank_head='The three classes everything in eight units falls into',
   pics=['caries', 'cavitated', 'demineralisation', 'arrested'],
   pairs=[('enamel', 'T'), ('calculus', 'D'), ('demineralisation', 'S'),
          ('dentine', 'T'), ('plaque', 'D'), ('a cavitated lesion', 'S')],
   fig=F.contrast('THREE KINDS OF THING IN EIGHT UNITS',
     'PART OF THE BODY', ['enamel', 'dentine', 'cementum', 'the gingiva'],
     'NOT PART OF THE BODY', ['plaque', 'calculus', 'demineralisation',
                              'a cavitated lesion'],
     'You could section it and look at it.',
     'A deposit sits on the body; a stage of disease describes what is happening to '
     'it.'),
   fig_cap='The distinction that has run under all eight units, now including the '
           'stages of a process.'),
],
end_fig_title='TWO DIRECTIONS, THREE GRADES, ONE POINT OF NO RETURN',
end_fig_steps=['Bacteria in plaque make acid from sugar: mineral leaves the surface.',
               'Between meals, saliva returns mineral: the surface mends.',
               'How often the acid arrives decides which direction wins.',
               'A white spot is the first visible loss, with the surface still whole.',
               'Cavitation closes one direction for good; the tooth is restored.',
               'Slight, moderate, extensive: the grade decides what is treated first.'],
end_fig_note='Six lines. The fourth and the fifth are a single decision, taken on one '
             'day by one clinician.',
end_fig_cap='The whole of Unit 8 on one page.',

p1_recap=['You have said what a tooth loses when it decays, and where the lost mineral '
          'goes.',
          'You have seen the two hard layers a lesion crosses, and the four things that '
          'are happening to any surface at any moment.'],
p1_ask='How many of your own patients have told you that they hardly eat any sugar?',
p1_icons=['tooth', 'water', 'brush', 'clock'],
p2_recap=['Eight terms you can now use: caries, an acid, demineralisation, '
          'remineralisation, a fissure, cavitated, to progress and arrested.',
          'Four groups of sentences: comparing two lesions, grading one, saying that two '
          'are equal, and picking one out of a group.',
          'One rule to hold on to: before cavitation, both directions are still open.'],
p2_ask='Which two of the eight are opposites of each other?',
p3_recap=['You have moved from recognising these terms to grading a lesion and '
          'comparing it with another.',
          'All eight appear in the lecture in part 5. Say them out loud before you '
          'listen.'],
p3_ask='Say the three grades in order, and what each one reaches.',
p3_icons=['book', 'tooth', 'speech', 'tick'],
p4_recap=['Short words take -er than; long words take more … than; as … as says the two '
          'are equal.',
          'The most and the deepest pick one out of a group, which is how an order of '
          'treatment is stated.'],
p4_ask='Say one sentence with deeper than, one with more extensive than and one with '
       'as … as.',
p10_recap=['You can name the two directions a tooth surface goes, say what decides '
           'between them, and grade a lesion as slight, moderate or extensive.',
           'You can compare two lesions, put four in an order, and tell a patient why a '
           'tooth is being watched rather than filled.',
           'Unit 9 turns to the radiograph these lesions are looked for on, and asks '
           'what an image is evidence of and what it only appears to show.'],
p10_ask='Explain the two directions to the person next to you, with the book closed, in '
        'ninety seconds.',
)
