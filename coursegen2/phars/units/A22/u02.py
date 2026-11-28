# -*- coding: utf-8 -*-
import figs2 as F

U = dict(
num=2,
level='A2.2',
title='The Dose Forms, and How We Name Them',
strap='CEFR A2.2  ·  Grammar: is swallowed, is applied, is inhaled: the passive of use  '
      '·  The shapes a medicine comes in, and why the names matter',
threads={'domain': ['the dose forms', 'the pack', 'the route'],
         'function': ['naming', 'classifying', 'saying how it is used']},
can_do=['name the common dose forms and point to each one on a shelf',
        'define a form in one sentence, with what makes it different',
        'say how each form is used, with the passive: it is swallowed, it is applied',
        'follow a lecture that sorts many things into few groups',
        'write the form line of a label in the right words'],
recycles='the shelves, the fridge, a basket and the bench, from Unit 1',
allow=['fog'],
prepares='Unit 3, where the prescription names a form on every line',

warm=['How many different shapes of medicine can you name in your own language, in one minute?',
      'Which forms have you used yourself, and which have you only seen on a shelf?',
      'Why do you think one medicine is sometimes made in more than one form?'],
warm_fig=F.icon_cards('EIGHT SHAPES A MEDICINE TAKES',
    [('a tablet','tabletpill'),('a capsule','capsule'),('a liquid','liquidbottle'),
     ('a cream','creamtube'),('drops','dropper'),('an inhaler','inhaler'),
     ('a patch','patch'),('a suppository','capsule')], cols=4,
    note='Eight shapes. By the end of this unit each one has a name and a sentence.'),
warm_fig_cap='The shapes, before the names. Two share a picture; the unit explains why.',
warm_fig2=F.mini_table('THE SAME MEDICINE, THREE WAYS',
    ['Form', 'Who it suits'],
    [['a tablet', 'most adults, most of the time'],
     ['a liquid', 'children, and people who cannot swallow tablets'],
     ['drops', 'when the medicine must land in one small place']],
    highlight=[1]),
warm_fig2_cap='One medicine, three forms. The form follows the person, not the other way round.',
warm_fig_alt='Eight small cards showing a scored tablet, a two-colour capsule, a '
             'bottle of liquid, a tube of cream, a dropper bottle, an inhaler, a '
             'patch and a capsule shape, then a small table of one medicine in '
             'three forms.',

preview_intro='Everything in this unit uses these eight terms and these ten sentences. '
              'Read this page first, and say each term out loud as you meet it. The '
              'names of the forms are the words a dispensary uses most in any hour.',
set_fig_title='THE EIGHT TERMS OF UNIT 2',
set_fig_cap='The eight terms you will be able to define by the end of this unit.',
set=[
 dict(term='a dose form', pos='noun', thread='domain',
      definition='the physical shape a medicine is made in',
      example='The same medicine can be made in more than one dose form.',
      collocation='a solid dose form  ·  the form line', recycle=[2, 3, 10]),
 dict(term='a tablet', pos='noun', thread='domain',
      definition='a pressed solid form, often scored so it breaks evenly',
      example='A tablet is swallowed whole, with water.',
      collocation='a scored tablet  ·  half a tablet', recycle=[2, 5, 8]),
 dict(term='a capsule', pos='noun', thread='domain',
      definition='a form whose medicine sits inside a small closed shell',
      example='A capsule is swallowed whole, and the shell opens inside.',
      collocation='a hard capsule  ·  open a capsule', recycle=[2, 5, 8]),
 dict(term='a liquid', pos='noun', thread='domain',
      definition='a form that is poured and measured, not counted',
      example='A liquid is measured with a spoon or an oral syringe.',
      collocation='a liquid medicine  ·  shake the liquid', recycle=[2, 6, 8]),
 dict(term='a cream', pos='noun', thread='domain',
      definition='a soft form that is applied to the skin',
      example='A cream is applied thinly, to the skin only.',
      collocation='apply a cream  ·  a thin layer of cream', recycle=[2, 4, 9]),
 dict(term='drops', pos='noun', thread='domain',
      definition='a liquid form given one small drop at a time',
      example='Drops are counted as they fall, one by one.',
      collocation='two drops  ·  eye drops', recycle=[2, 4, 9]),
 dict(term='an inhaler', pos='noun', thread='domain',
      definition='a form whose medicine is breathed in through the mouth',
      example='An inhaler is used standing or sitting, never lying down.',
      collocation='use an inhaler  ·  shake the inhaler', recycle=[2, 6, 9]),
 dict(term='a patch', pos='noun', thread='domain',
      definition='a form that sticks to the skin and works slowly through it',
      example='A patch is worn on the skin, and the old one comes off first.',
      collocation='wear a patch  ·  change the patch', recycle=[2, 6, 9]),
],
set_note='Eight terms. Say each one out loud twice before you go on.',
receptive=[
 dict(term='an ointment', definition='a greasy relative of the cream, for drier skin',
      example='An ointment is thicker and stays on the skin longer than a cream.'),
 dict(term='a suppository', definition='a solid form that is not swallowed and melts inside the body',
      example='A suppository is one of the forms a patient most needs explained.'),
 dict(term='a spray', definition='a liquid form that arrives as a fine mist',
      example='A nose spray is used with the head held level, not tipped back.'),
 dict(term='a powder', definition='a dry form that is mixed with water before it is taken',
      example='The powder is mixed with water just before it is taken.'),
 dict(term='the route', definition='the way a medicine enters the body',
      example='The form and the route travel together: a cream’s route is the skin.'),
 dict(term='oral', definition='by mouth: the route of tablets, capsules and most liquids',
      example='Oral means by mouth, and most dose forms are oral.'),
 dict(term='topical', definition='on the skin: the route of creams, ointments and patches',
      example='A topical form works where it is put.'),
 dict(term='to swallow', definition='to take something down the throat',
      example='A tablet is swallowed whole, not chewed.'),
 dict(term='to apply', definition='to put a form onto the skin',
      example='The cream is applied twice a day, thinly.'),
 dict(term='to inhale', definition='to breathe a medicine in',
      example='The medicine in an inhaler is inhaled, not swallowed.'),
],

phrase_fig_title='HOW A FORM IS TALKED ABOUT',
phrase_fig_cap='Ten sentence frames. Every form in this unit is described with them.',
phrases=[
 ('Naming and defining',
  ['A tablet is a pressed solid form.',
   'A capsule is a form whose medicine sits inside a shell.',
   'Drops are a liquid form given one drop at a time.']),
 ('Saying how it is used',
  ['A tablet is swallowed whole, with water.',
   'A cream is applied to the skin, thinly.',
   'The medicine in an inhaler is inhaled, not swallowed.']),
 ('Saying what it must not meet',
  ['A capsule is not opened unless the pharmacist says so.',
   'A patch is not cut.']),
 ('Connecting form and route',
  ['The form and the route travel together.',
   'A topical form works where it is put.']),
],
phrase_note='Say the whole frame. The passive is the voice the dispensary speaks in.',

preview_task=dict(kind='match',
  rubric='Match each term with what it means.',
  how='Use the pictures above. Do this before you read anything else in this unit.',
  pairs=[('a dose form', 'the physical shape a medicine is made in'),
         ('a tablet', 'a pressed solid, often scored'),
         ('a capsule', 'medicine inside a small closed shell'),
         ('a liquid', 'a form that is poured and measured'),
         ('drops', 'a liquid given one small drop at a time'),
         ('a patch', 'a form that sticks to the skin and works slowly')]),

vocab_tasks=[
 dict(kind='gap', rubric='Write the missing term. Each term is used once.',
      example='A tablet is swallowed whole, with water.',
      how='The eight terms are on the preview page.',
      pairs=[('A ____________ is swallowed whole, with water.', 'tablet'),
             ('A ____________ has its medicine inside a small shell.', 'capsule'),
             ('A ____________ is measured with a spoon, not counted.', 'liquid'),
             ('A ____________ is applied thinly, to the skin only.', 'cream'),
             ('____________ are counted as they fall, one by one.', 'Drops'),
             ('An ____________ is used standing or sitting.', 'inhaler'),
             ('A ____________ is worn on the skin and changed, old one off first.', 'patch'),
             ('The same medicine can be made in more than one dose ____________.', 'form')]),
 dict(kind='odd',
      rubric='Three of the four belong together. Circle the one that does not, and say why.',
      how='There is more than one good reason in some lines. Say yours out loud.',
      example='a tablet / a capsule / a liquid / a patch  —  a patch is not swallowed',
      bank=['swallowed', 'put on the skin', 'breathed in', 'measured, not counted'],
      bank_head='The four ways these forms are used',
      pics=['a tablet', 'a cream', 'an inhaler', 'a liquid'],
      pairs=[('a tablet / a capsule / a liquid / a cream', 'a cream'),
             ('a cream / an ointment / a patch / drops', 'drops'),
             ('a liquid / drops / a spray / a tablet', 'a tablet'),
             ('an inhaler / a spray / a powder / to inhale', 'a powder'),
             ('oral / topical / the route / a capsule', 'a capsule')]),
 dict(kind='gap', rubric='Put the word that goes with it.',
      example='a scored tablet',
      how='These are the pairs the dispensary speaks in. Learn them together.',
      pairs=[('a scored ____________', 'tablet'),
             ('open a ____________', 'capsule'),
             ('shake the ____________', 'liquid'),
             ('apply a ____________', 'cream'),
             ('two ____________', 'drops'),
             ('change the ____________', 'patch')]),
 dict(kind='short', rubric='Define it in one sentence, out loud, then in writing.',
      example='a tablet  (A tablet is a pressed solid form, often scored so it breaks evenly.)',
      how='Use the frames from the preview page. A definition needs a verb.',
      pairs=[('a tablet', 'a pressed solid form, often scored so it breaks evenly'),
             ('a capsule', 'a form whose medicine sits inside a small closed shell'),
             ('a liquid', 'a form that is poured and measured, not counted'),
             ('drops', 'a liquid form given one small drop at a time'),
             ('a patch', 'a form that sticks to the skin and works slowly through it'),
             ('a dose form', 'the physical shape a medicine is made in')]),
],

g_point='is swallowed, is applied, is inhaled: the passive of use',
g_source='the how-it-is-used frames on the preview page',
g_rule=['The dispensary describes use without naming a person: a tablet is '
        'swallowed, a cream is applied.',
        'Make it with is or are and the third form: swallow, swallowed; apply, '
        'applied; inhale, inhaled.',
        'The negative warns: a capsule is not opened; a patch is not cut.',
        'The passive is not politeness. It is accuracy: the sentence is true for '
        'every patient, because it names none.'],
g_mnemonic_title='THREE FRAMES, THREE ROUTES',
g_mnemonic=[('is swallowed', 'the oral route: down the throat',
             'A tablet is swallowed whole.', 'tabletpill'),
            ('is applied', 'the topical route: onto the skin',
             'A cream is applied thinly.', 'creamtube'),
            ('is inhaled', 'the breathed route: into the lungs',
             'The medicine is inhaled, not swallowed.', 'inhaler')],
g_mnemonic_cap='Three verbs, three routes. The verb tells you where the medicine goes.',
g_mnemonic_note='If the verb and the form disagree, one of them is wrong. Check the pack.',
g_fig=('TWO WAYS TO DESCRIBE USE', 'WITH A PERSON',
       ['You swallow the tablet.', 'You put the cream on.', 'You breathe it in.',
        'You do not open the capsule.'],
       'THE DISPENSARY’S WAY',
       ['The tablet is swallowed whole, with water.',
        'The cream is applied thinly, to the skin only.',
        'The medicine is inhaled, not swallowed.',
        'The capsule is not opened unless the pharmacist says so.'],
       'true for you, today',
       'true for every patient, every day'),
g_fig_cap='Both columns are correct English. The right column is the register of the shelf.',
g_tasks=[
 dict(kind='gap', rubric='Write is or are, and the right third form.',
      example='A tablet is swallowed whole.',
      pairs=[('A tablet ____________ whole, with water.', 'is swallowed'),
             ('Drops ____________ one by one, as they fall.', 'are counted'),
             ('A cream ____________ thinly, to the skin only.', 'is applied'),
             ('The medicine in an inhaler ____________, not swallowed.', 'is inhaled'),
             ('A liquid ____________ with a spoon or an oral syringe.', 'is measured'),
             ('A patch ____________ on the skin.', 'is worn')]),
 dict(kind='short', rubric='Turn the you-sentence into the dispensary’s way.',
      example='You swallow the tablet.  →  The tablet is swallowed whole, with water.',
      pairs=[('You swallow the tablet.', 'The tablet is swallowed whole, with water.'),
             ('You put the cream on.', 'The cream is applied thinly, to the skin only.'),
             ('You breathe it in.', 'The medicine is inhaled, not swallowed.'),
             ('You do not open the capsule.', 'The capsule is not opened.'),
             ('You count the drops.', 'The drops are counted as they fall.'),
             ('You change the patch.', 'The patch is changed, old one off first.')]),
 dict(kind='short', rubric='Answer the question with the right frame.',
      example='How is a liquid measured?  →  It is measured with a spoon or an oral syringe.',
      pairs=[('How is a liquid measured?', 'It is measured with a spoon or an oral syringe.'),
             ('How is a tablet taken?', 'It is swallowed whole, with water.'),
             ('Where is a cream applied?', 'It is applied to the skin, thinly.'),
             ('How are drops given?', 'They are given one drop at a time.'),
             ('Is a capsule opened?', 'It is not opened unless the pharmacist says so.'),
             ('Is a patch cut?', 'A patch is not cut.')]),
 dict(kind='gap', rubric='One word is wrong in each line. Write the right word.',
      example='A tablet is swallowed whole. — correct',
      pairs=[('A tablet is swallow whole.', 'swallowed'),
             ('Drops is counted one by one.', 'are'),
             ('A cream is applied thick.', 'thinly'),
             ('The medicine is inhaled, not swallow.', 'swallowed'),
             ('A capsule is not open unless the pharmacist says so.', 'opened'),
             ('A patch is weared on the skin.', 'worn')]),
],

listen_intro='Three recordings. Each one is two minutes or less. Do the task before you '
             'listen, then the task while you listen, then the task after. The transcripts '
             'are at the back of this book, but do not read them first.',
listening=[
 dict(title='Lecture: many shapes, few groups', genre='lecture extract',
      what='a lecturer sorting the dose forms into three groups by route',
      speakers=['Dr Sofia Ricci', 'Marcus Oyelaran'],
      conv_lines=[('L', 'There are many forms, but only a few routes.'),
                  ('L', 'Swallowed, put on the skin, breathed in.'),
                  ('R', 'Where do drops belong?'),
                  ('L', 'Good question. Drops follow the place they land.'),
                  ('L', 'Sort by route, and the shelf makes sense.')],
      conv_note='A lecture that turns eight shapes into three groups, with one '
                'question from the floor.',
      conv_cap='The lecturer, and the sorting that the extract performs.',
      fig=F.mini_table('EIGHT FORMS, THREE ROUTES',
            ['Route', 'The forms that take it'],
            [['swallowed', 'tablet, capsule, liquid, powder'],
             ['on the skin', 'cream, ointment, patch'],
             ['breathed in', 'inhaler, some sprays']],
            highlight=[0]),
      fig_cap='The lecture’s one idea, as a table.',
      script=[('Dr Ricci', 'Last week we walked the room. Today we open the packs.'),
              ('Dr Ricci', 'On a shelf you will meet many shapes.'),
              ('Dr Ricci', 'Tablets, capsules, liquids, creams, drops, inhalers, patches.'),
              ('Dr Ricci', 'It looks like a crowd. It is really three groups.'),
              ('Dr Ricci', 'Ask one question of any form: which way does it enter?'),
              ('Dr Ricci', 'Some forms are swallowed. Tablets, capsules, liquids.'),
              ('Dr Ricci', 'That route is called oral: by mouth.'),
              ('Dr Ricci', 'Some forms are put on the skin.'),
              ('Dr Ricci', 'Creams, ointments, patches. That route is called topical.'),
              ('Dr Ricci', 'And some are breathed in, like the inhaler.'),
              ('Marcus', 'Where do drops belong?'),
              ('Dr Ricci', 'Good question. Drops follow the place they land.'),
              ('Dr Ricci', 'Eye drops belong to the eye, ear drops to the ear.'),
              ('Dr Ricci', 'The form is the same; the route is the place.'),
              ('Dr Ricci', 'Now, why do so many forms exist at all?'),
              ('Dr Ricci', 'Because patients differ. A child cannot swallow a tablet.'),
              ('Dr Ricci', 'A sore eye needs the medicine there, not everywhere.'),
              ('Dr Ricci', 'So one medicine is often made in several forms.'),
              ('Dr Ricci', 'The prescriber chooses the form to fit the patient.'),
              ('Dr Ricci', 'Your job, this year, is smaller and harder.'),
              ('Dr Ricci', 'Call every form by its right name, every time.'),
              ('Dr Ricci', 'Pills is not a name. It is a fog.'),
              ('Dr Ricci', 'Sort by route, and the shelf makes sense.'),
              ('Dr Ricci', 'Next week: the prescription, line by line.')],
      pre=dict(kind='choice',
          rubric='Before you listen, choose what you expect the sorting to be.',
          how='Look at the table figure. Decide, then listen.',
          example='The lecture sorts forms by   a) size   b) route   c) price.   Answer: b',
          bank=['oral', 'topical', 'breathed in', 'the place drops land'],
          bank_head='The three groups, and the question case',
          pics=['a tablet', 'a cream', 'an inhaler', 'drops'],
          pairs=[('The lecture sorts the forms by   a) colour   b) route   c) shelf', 'b'),
                 ('Oral means   a) by mouth   b) on the skin   c) breathed in', 'a'),
                 ('Drops are sorted by   a) their bottle   b) the place they land   c) their colour', 'b')]),
      **{'while': dict(kind='gap', rubric='Listen. Write the missing word.',
               example='It looks like a crowd. It is really three groups.',
               pairs=[('It looks like a crowd. It is really three ____________.', 'groups'),
                      ('Ask one question of any form: which way does it ____________?', 'enter'),
                      ('That route is called ____________: by mouth.', 'oral'),
                      ('Drops follow the place they ____________.', 'land'),
                      ('A child cannot swallow a ____________.', 'tablet'),
                      ('Pills is not a name. It is a ____________.', 'fog')])},
      post=dict(kind='short', rubric='Answer in one or two words.',
               example='How many routes does the lecture name?  (three)',
               pairs=[('How many routes does the lecture name?', 'three'),
                      ('What is the skin route called?', 'topical'),
                      ('Who chooses the form for a patient?', 'the prescriber'),
                      ('Why does a child get a liquid?', 'a child cannot swallow a tablet'),
                      ('What is next week about?', 'the prescription')])),
 dict(title='Tutorial: is a capsule just a tablet in a coat?', genre='tutorial',
      what='a tutorial group testing a definition until it holds',
      speakers=['Dr Sofia Ricci', 'Lina Petrova', 'Marcus Oyelaran'],
      conv_lines=[('L', 'Lina says a capsule is a tablet in a coat. True?'),
                  ('R', 'The medicine is loose inside, not pressed.'),
                  ('L', 'So what is the difference-maker?'),
                  ('R', 'Pressed solid against a filled shell.'),
                  ('L', 'Good. Now say both definitions whole.')],
      conv_cap='The tutor and two students, sharpening one definition.',
      fig=F.mini_table('TABLET AND CAPSULE, SIDE BY SIDE',
            ['', 'A tablet', 'A capsule'],
            [['The solid', 'pressed into shape', 'loose, inside a shell'],
             ['Often scored?', 'yes, to break evenly', 'never — it is not broken'],
             ['Opened?', 'it is not opened; it is whole', 'not opened unless the pharmacist says so'],
             ['Swallowed', 'whole, with water', 'whole, with water']],
            highlight=[0]),
      fig_cap='The table the tutorial builds, row by row.',
      script=[('Dr Ricci', 'A small test before you go.'),
              ('Dr Ricci', 'Lina says a capsule is a tablet in a coat. True?'),
              ('Marcus', 'It sounds right. Both are swallowed whole.'),
              ('Dr Ricci', 'Then why do we have two names?'),
              ('Lina', 'The inside is different.'),
              ('Dr Ricci', 'Go on. Say the whole thought.'),
              ('Lina', 'A tablet is pressed solid, all the way through.'),
              ('Lina', 'In a capsule the medicine is loose inside a shell.'),
              ('Dr Ricci', 'So what is the difference-maker?'),
              ('Marcus', 'Pressed solid against a filled shell.'),
              ('Dr Ricci', 'Good. And what follows from it?'),
              ('Lina', 'A tablet can be scored, so it breaks evenly.'),
              ('Lina', 'A capsule is never scored. It is not broken.'),
              ('Marcus', 'And a capsule is not opened, usually.'),
              ('Dr Ricci', 'Usually. Who says when it may be?'),
              ('Marcus', 'The pharmacist says, not the patient.'),
              ('Dr Ricci', 'Exactly. Now say both definitions whole.'),
              ('Lina', 'A tablet is a pressed solid form, often scored to break evenly.'),
              ('Marcus', 'A capsule is a form whose medicine sits loose inside a shell.'),
              ('Dr Ricci', 'Both would earn the mark.'),
              ('Dr Ricci', 'Notice what the coat idea was missing.'),
              ('Dr Ricci', 'Not the shell. The pressed inside against the loose inside.'),
              ('Dr Ricci', 'A definition lives on its difference-maker.'),
              ('Dr Ricci', 'Write both in your notebooks tonight. Off you go.')],
      pre=dict(kind='choice',
          rubric='Before you listen, choose what you expect the test to be about.',
          how='Look at the table. Decide, then listen.',
          example='The question is about   a) two forms   b) two routes   c) two shelves.   Answer: a',
          bank=['pressed solid', 'a filled shell', 'scored', 'not opened'],
          bank_head='The four ideas the answer needs',
          pics=['a tablet', 'a capsule', 'book', 'tick'],
          pairs=[('The tablet’s inside is   a) loose   b) pressed   c) liquid', 'b'),
                 ('A capsule is scored   a) always   b) sometimes   c) never', 'c'),
                 ('Who says when a capsule may be opened?   a) the patient   b) the pharmacist   c) nobody', 'b')]),
      **{'while': dict(kind='gap', rubric='Listen. Write the missing word.',
               example='Lina says a capsule is a tablet in a coat.',
               pairs=[('Lina says a capsule is a tablet in a ____________.', 'coat'),
                      ('A tablet is pressed solid, all the way ____________.', 'through'),
                      ('In a capsule the medicine is ____________ inside a shell.', 'loose'),
                      ('A tablet can be ____________, so it breaks evenly.', 'scored'),
                      ('The ____________ says, not the patient.', 'pharmacist'),
                      ('A definition lives on its ____________-maker.', 'difference')])},
      post=dict(kind='short', rubric='Answer in one or two words.',
               example='Who started with the coat idea?  (Lina)',
               pairs=[('Who started with the coat idea?', 'Lina'),
                      ('What is the tablet’s inside like?', 'pressed solid'),
                      ('Why can a tablet be scored?', 'so it breaks evenly'),
                      ('Is a capsule ever broken?', 'no'),
                      ('What was the coat idea missing?', 'the difference-maker')])),
 dict(title='In the teaching dispensary: name what I am holding', genre='clinical supervision',
      what='a teaching pharmacist holding up forms, two students naming and placing them',
      speakers=['Petra Horakova', 'Lina Petrova', 'Marcus Oyelaran'],
      conv_lines=[('L', 'Name what I am holding. Quickly.'),
                  ('R', 'A scored tablet.'),
                  ('L', 'How is it taken?'),
                  ('R', 'Swallowed whole, with water.'),
                  ('L', 'Good. Next: where does this one live?')],
      conv_cap='The pharmacist, two students, and a tray of forms as the lesson.',
      fig=F.exchange('THE NAMING ROUND', 'THE PHARMACIST',
            ['Name what I am holding.', 'How is it taken, or used?',
             'Where does it live?', 'What is it never?'],
            'THE STUDENTS',
            ['The form, by its right name.', 'The passive sentence.',
             'The shelf, the fridge, the cabinet.', 'Not cut, not opened, not chewed.'],
            note='Four kinds of question. Every answer is one sentence.'),
      fig_cap='The shape of the round: short questions, real things, whole sentences.',
      script=[('Petra', 'Good afternoon. Hands washed, bags by the door.'),
              ('Lina', 'Done, both of us.'),
              ('Petra', 'A tray of forms. Name what I am holding. Quickly.'),
              ('Lina', 'A scored tablet.'),
              ('Petra', 'How is it taken?'),
              ('Lina', 'Swallowed whole, with water.'),
              ('Petra', 'Then why the score line?'),
              ('Lina', 'So it can break evenly, when that is wanted.'),
              ('Petra', 'Good. This one?'),
              ('Marcus', 'A capsule. Swallowed whole. Not opened.'),
              ('Petra', 'Unless?'),
              ('Marcus', 'Unless the pharmacist says so.'),
              ('Petra', 'This bottle?'),
              ('Lina', 'A liquid. Measured, not counted. Shaken first.'),
              ('Petra', 'With what is it measured?'),
              ('Lina', 'A spoon or an oral syringe. Never a kitchen spoon.'),
              ('Petra', 'Why never?'),
              ('Marcus', 'Kitchen spoons are all different sizes.'),
              ('Petra', 'Good. And this flat one in the wrapper?'),
              ('Marcus', 'A patch. Worn on the skin. Never cut.'),
              ('Petra', 'And where does the old one go?'),
              ('Marcus', 'Off first, folded shut, and away safely.'),
              ('Petra', 'Last one. This tube?'),
              ('Lina', 'A cream. Applied thinly, to the skin only.'),
              ('Petra', 'All named, all placed. One more question.'),
              ('Petra', 'Lina, which of these lives in the fridge?'),
              ('Lina', 'None of them today. The storage line on each says room temperature.'),
              ('Petra', 'You read the boxes. Good.'),
              ('Petra', 'That habit will save you, one day, quietly.'),
              ('Petra', 'Thursday: the prescription itself.')],
      pre=dict(kind='choice',
          rubric='Before you listen, choose what a naming round asks for.',
          how='Look at the exchange figure. Decide, then listen.',
          example='An answer in the round is   a) a word   b) a sentence   c) a page.   Answer: b',
          bank=['the name', 'the passive sentence', 'the place', 'the never'],
          bank_head='The four things each form gets',
          pics=['a tablet', 'a liquid', 'a patch', 'a cream'],
          pairs=[('The first form named is   a) a capsule   b) a tablet   c) a cream', 'b'),
                 ('A liquid is measured with   a) any spoon   b) a spoon or oral syringe   c) a cup', 'b'),
                 ('A patch is never   a) worn   b) cut   c) changed', 'b')]),
      **{'while': dict(kind='gap', rubric='Listen. Write the missing word.',
               example='Name what I am holding. Quickly.',
               pairs=[('Name what I am ____________. Quickly.', 'holding'),
                      ('So it can break ____________, when that is wanted.', 'evenly'),
                      ('A liquid. Measured, not counted. ____________ first.', 'Shaken'),
                      ('Never a ____________ spoon.', 'kitchen'),
                      ('A patch. Worn on the skin. Never ____________.', 'cut'),
                      ('Off first, folded shut, and away ____________.', 'safely')])},
      post=dict(kind='short', rubric='Answer in one or two words.',
               example='What is on the tray?  (forms)',
               pairs=[('What is on the tray?', 'forms'),
                      ('Why is the tablet scored?', 'to break evenly'),
                      ('Why never a kitchen spoon?', 'they are all different sizes'),
                      ('What happens to an old patch?', 'folded shut and away safely'),
                      ('What is Thursday about?', 'the prescription')])),
],

speaking=[
 dict(title='Present a form in thirty seconds', genre='present a structure',
      rubric='Present one dose form to your group in thirty seconds.',
      how='Choose one of the eight terms. Name it, define it, give its passive '
          'sentence, and one never. Thirty seconds, timed. Then the group asks one '
          'question.',
      model=[('You', 'This is a capsule.'),
             ('You', 'It is a form whose medicine sits loose inside a shell.'),
             ('You', 'It is swallowed whole, with water.'),
             ('You', 'It is not opened unless the pharmacist says so.'),
             ('A listener', 'Why is it never scored?'),
             ('You', 'Because it is not broken. Only a tablet breaks evenly.')],
      conv=['Lina Petrova', 'Marcus Oyelaran'],
      conv_lines=[('L', 'This is a capsule.'),
                  ('L', 'It is swallowed whole, with water.'),
                  ('L', 'It is not opened unless the pharmacist says so.'),
                  ('R', 'Why is it never scored?')],
      frame=[['Change this', 'To this'],
             ['a capsule', 'any of the eight terms'],
             ['not opened', 'the never that fits your form'],
             ['Why is it never scored?', 'any one question'],
             ['thirty seconds', 'twenty, once it is easy']],
      fig=F.phrase_box('THE THIRTY-SECOND SHAPE', [
          ('Name it', ['This is a …']),
          ('Define it', ['It is a form that …', 'It is a form whose …']),
          ('Use and never', ['It is swallowed / applied / inhaled …',
                             'It is not cut / opened / chewed.'])]),
      fig_cap='Four moves. A form is known when its never can be said.',
      checklist=['you named and defined it with a verb',
                 'your use sentence was in the passive',
                 'you gave the never that fits the form',
                 'you answered the question without the book']),
 dict(title='Explain why the forms exist', genre='explain a process',
      rubric='Explain to a partner why one medicine is made in several forms.',
      how='Your partner asks why after every sentence. Use because at least three '
          'times. Then swap and explain why drops are sorted by the place they '
          'land.',
      model=[('You', 'One medicine is often made in several forms.'),
             ('Partner', 'Why?'),
             ('You', 'Because patients differ. A child cannot swallow a tablet.'),
             ('You', 'So the same medicine is also made as a liquid.'),
             ('Partner', 'Why a liquid?'),
             ('You', 'Because a liquid is measured, so small amounts are possible.'),
             ('You', 'And a sore eye gets drops.'),
             ('Partner', 'Why drops?'),
             ('You', 'Because drops put the medicine where it is needed, and nowhere else.')],
      frame=[['Change this', 'To this'],
             ['a child and a tablet', 'an eye and a cream'],
             ['several forms', 'the three routes'],
             ['three whys', 'five whys, for a strong pair'],
             ['drops', 'the patch, and why it works slowly']],
      fig=F.step_sequence('ONE MEDICINE, MANY FORMS, ONE REASON',
            ['Patients differ: in age, in swallowing, in where the trouble is.',
             'So the makers offer the same medicine in several forms.',
             'The prescriber chooses the form that fits the patient.',
             'The dispensary supplies exactly the form that was chosen.'],
            stop_points=[4],
            note='The marked step is the dispensary’s whole part in the story.'),
      fig_cap='The chain, with the dispensary’s one job at the end of it.',
      checklist=['you gave a reason, not only a fact',
                 'you used because at least three times',
                 'your reasons were about patients, not factories',
                 'you could still do it with the book closed']),
 dict(title='The naming round, run by you', genre='be questioned',
      rubric='Run the supervision round from listening 5.3 with your partner.',
      how='Your partner holds up drawings or packs (or the picture cards from the '
          'warm-up, cut out). You name, give the passive sentence, the place and '
          'the never. Six forms inside two minutes, then swap. The third round, '
          'use forms common in pharmacies in your own country and say which of '
          'the eight they are.',
      model=[('Partner', 'Name it.'),
             ('You', 'A scored tablet.'),
             ('Partner', 'How is it taken?'),
             ('You', 'Swallowed whole, with water.'),
             ('Partner', 'What is it never?'),
             ('You', 'It is never chewed, and a capsule is never opened.')],
      conv=['Marcus Oyelaran', 'Lina Petrova'],
      conv_lines=[('L', 'Name it.'),
                  ('R', 'A scored tablet.'),
                  ('L', 'How is it taken?'),
                  ('R', 'Swallowed whole, with water.'),
                  ('L', 'What is it never?'),
                  ('R', 'Never chewed.')],
      conv_cap='Question, answer, next. The round does not wait.',
      cards=[dict(who='Questioner card', brief='Hold up one card at a time. Ask only: '
                  'name it; how is it used; where does it live; what is it never. If '
                  'an answer has no verb, say: whole sentence, please.'),
             dict(who='Answerer card', brief='One sentence per answer, in the '
                  'passive. If you do not know the never, say what you would check '
                  'and where.')],
      fig=F.exchange('SIX FORMS, TWO MINUTES', 'THE QUESTIONER',
            ['Name it.', 'How is it used?', 'Where does it live?', 'What is it never?'],
            'YOU',
            ['The right name, quickly.', 'The passive sentence.',
             'Shelf, fridge, or cabinet.', 'The never, or what you would check.'],
            note='Only the name may be answered in one word.'),
      fig_cap='What each side does. Speed is the point; verbless is the only foul.',
      checklist=['your use sentences were in the passive',
                 'every form got its place',
                 'every form got its never, or an honest check',
                 'you kept the speed: six forms inside two minutes']),
],

reading=[
 dict(title='Textbook: the dose forms, one by one', genre='textbook passage',
      fig=F.mini_table('THE EIGHT FORMS, AND THEIR ONE-LINE JOBS',
            ['Form', 'In one line'],
            [['a tablet', 'pressed solid; swallowed whole; may be scored'],
             ['a capsule', 'loose medicine in a shell; never scored'],
             ['a liquid', 'poured and measured; often shaken first'],
             ['a cream', 'applied thinly to the skin'],
             ['drops', 'one drop at a time, where they land'],
             ['an inhaler', 'breathed in; never swallowed'],
             ['a patch', 'worn on the skin; never cut'],
             ['a suppository', 'not swallowed; melts inside the body']],
            highlight=[7]),
      fig_cap='The passage in one table. Read the table first, then the prose.',
      pre=dict(rubric='Look at the table. Find two things before you read.',
               how='Thirty seconds. Do not read every word yet.',
               items=['Which two forms carry a never about cutting or scoring?',
                      'Which form is the one most often misunderstood by patients?']),
      text=[
       'A dose form is the physical shape a medicine is made in, and the shapes '
       'are not decoration. Each form exists because it solves a problem that '
       'another form cannot. This passage takes the common forms one by one, '
       'and gives each its name, its use and its never. By the end of the page the '
       'crowd on the shelf has become a short list of old friends.',
       'The tablet is the commonest form on any shelf. It is a pressed solid: '
       'the medicine and its carriers are pressed into one firm piece. It is '
       'swallowed whole, with water. Many tablets carry a score line, so that '
       'the piece can break evenly when a half is wanted. A tablet without a '
       'score line is not made for breaking, and that is its quiet never.',
       'The capsule looks like the tablet’s close relative and is built the other '
       'way. The medicine sits loose inside a small closed shell, and the shell '
       'opens inside the body, not outside it. A capsule is swallowed whole. It '
       'is never scored, because it is never broken, and it is not opened '
       'unless the pharmacist says so.',
       'The liquid is the form for people who cannot swallow solids, and for '
       'amounts too small for a tablet to carry. A liquid is poured, so it is '
       'measured, not counted. It is measured with the spoon or the oral syringe that comes '
       'with it, and never with a kitchen spoon. Kitchen spoons are '
       'all different sizes. Many liquids are shaken before use, so that the '
       'medicine is spread evenly through the bottle.',
       'The skin forms work where they are put. A cream is applied thinly, to '
       'the skin only; an ointment is its heavier relative, for drier skin. '
       'The patch also lives on the skin, but it works slowly, letting its '
       'medicine through for hours or days. A patch is never cut, and the old '
       'patch comes off before the new one goes on.',
       'Drops are a liquid given one drop at a time, where they land: the eye, '
       'the ear, the nose. The inhaler sends its medicine into the lungs; what '
       'it carries is inhaled, not swallowed. And the suppository is the form '
       'patients most need explained, because it is not swallowed at all. It '
       'melts inside the body, and the pharmacist’s sentence about it is '
       'worth more than the leaflet’s paragraph.',
       'Why so many shapes? Because patients differ: in age, in swallowing, in '
       'where the trouble is. One medicine is often made in several forms, and '
       'the prescriber chooses the form that fits the person. The dispensary’s '
       'job is exact and small: supply the form that was chosen, call it by its '
       'right name, and pass on its never with the bag.'],
      source=('Introductory descriptions of common dose forms and their use.',
              'General textbook treatment, 2025–2026.'),
      source_tier='B',
      **{'while': dict(kind='short', rubric='Answer with a few words.',
               example='What is a tablet’s quiet never?  (an unscored tablet is not for breaking)',
               pairs=[('Why do some tablets carry a score line?', 'so they break evenly'),
                      ('Where does a capsule’s shell open?', 'inside the body'),
                      ('Why is a liquid measured, not counted?', 'it is poured'),
                      ('Why never a kitchen spoon?', 'they are all different sizes'),
                      ('What comes off before a new patch goes on?', 'the old patch'),
                      ('Whose job is it to choose the form?', 'the prescriber’s')])},
      post=dict(kind='short', rubric='Why does the passage say this? Answer in a few words.',
               example='Why do the forms exist?  (each solves a problem another cannot)',
               pairs=[('Why do the forms exist?',
                       'each solves a problem another form cannot'),
                      ('Why is a capsule never scored?',
                       'it is never broken'),
                      ('Why does the suppository need the pharmacist’s sentence?',
                       'patients most misunderstand it'),
                      ('What is the dispensary’s exact small job?',
                       'supply the chosen form and pass on its never')])),
 dict(title='A case: the student who said pills', genre='case',
      fig=F.form_annotated('WHAT WAS SAID, AND WHAT WAS MEANT', 'THE PRACTICE CLASS, 14.15',
            [('The question', 'what is in this basket?'),
             ('The answer given', '“some pills and a cream”'),
             ('Actually in it', 'a scored tablet pack, a capsule pack, a cream'),
             ('The tutor’s move', 'put the answer on the board, unnamed'),
             ('The class’s job', 'say what the answer hides'),
             ('Harm done', 'none — the case is about why not')],
            callouts=[(1, 'the fog word, in quotation marks'),
                      (2, 'what the fog was hiding')]),
      fig_cap='The exchange as the tutor recorded it, fog and all.',
      pre=dict(rubric='Look at the record. Find two things before you read.',
               how='Twenty seconds. The case turns on both of them.',
               items=['What word did the student actually say?',
                      'How many different forms were really in the basket?']),
      text=[
       'In a Thursday practice class at the school, a tutor held up a basket '
       'from the teaching dispensary and asked a '
       'simple question: what is in this basket? A student looked, and gave an '
       'honest answer in everyday English: some pills and a cream.',
       'The tutor did not correct the student, and she did not move on either. '
       'She wrote the answer on the '
       'board, drew a box around the word pills, and asked the class a better '
       'question: what is this word hiding?',
       'It took the class a quiet minute to see it, and the seeing was the lesson. The basket held a pack of scored '
       'tablets and a pack of capsules. The word pills covered both, the way '
       'fog covers two houses. Everything true about the answer was useless, '
       'because the two forms it covered have different nevers. The tablet may be '
       'broken at its score line when a half is wanted. The capsule is never '
       'broken at all.',
       'Then the tutor told a short story from a real counter, and the room went '
       'still as it arrived, because everybody could hear it was true. A patient once '
       'asked whether the pills could be crushed for a child. The counter '
       'said yes, thinking of tablets. The pack in the bag held capsules. '
       'Nothing happened, because the pharmacist caught the sentence on its '
       'way out of the door. But the word pills had nearly carried an answer '
       'from one form to another, and the two answers were opposites.',
       'The class then tried the same trap on themselves. Each student wrote '
       'one sentence about a form without naming it, and passed the paper to a '
       'neighbour across the desk. The neighbour had to read it once and say '
       'which form the sentence was about. '
       'Half of the sentences could not be placed at all, and two of them '
       'fitted three forms at once. The exercise took five minutes, and it '
       'taught what no correction could: a sentence without the form\u2019s '
       'name asks the reader to guess, and a dispensary is not a place for '
       'guessing.',
       'This is why the dispensary is strict about names in a way that can '
       'look too careful from outside. The names are not politeness. Each form’s '
       'name carries its never, and a sentence that drops the name drops the '
       'never with it. Fog words — pills, stuff, the usual — are '
       'harmless in a kitchen and expensive in a pharmacy.',
       'The class ended with a rule the students wrote down, and it is the '
       'rule of this unit. Call every form by its right name, every time, '
       'even when a shorter word would be understood. Understood is not the '
       'standard. Safe is the standard, and safety lives in the names.'],
      **{'while': dict(kind='short', rubric='Answer with a few words.',
               example='What did the student say?  (some pills and a cream)',
               pairs=[('What did the student say?', 'some pills and a cream'),
                      ('What did the tutor draw around the word?', 'a box'),
                      ('What two forms did the word hide?', 'tablets and capsules'),
                      ('What did the patient at the real counter ask?', 'whether the pills could be crushed'),
                      ('Who caught the sentence?', 'the pharmacist'),
                      ('What does each form’s name carry?', 'its never')])},
      post=dict(kind='short', rubric='What does the case teach? Answer in a few words.',
               example='Why are fog words expensive in a pharmacy?  (they carry answers between forms)',
               pairs=[('Why are fog words expensive in a pharmacy?',
                       'they carry answers between different forms'),
                      ('Why did the tutor not simply correct the student?',
                       'the class had to see what the word hid'),
                      ('What is the standard, if not being understood?',
                       'being safe'),
                      ('What is the rule of this unit?',
                       'call every form by its right name, every time')])),
 dict(title='Procedure: reading a pack, outside first', genre='procedure',
      fig=F.step_sequence('THE PACK, READ IN ORDER',
            ['The name of the medicine, largest on the box.',
             'The form word, right beside it: tablets, capsules, cream.',
             'The route words, if the form needs them: for the eye, for the skin.',
             'The storage line: room, fridge, or locked away.',
             'The expiry date, and the batch beside it.'],
            stop_points=[2],
            note='The marked line is this unit: the form word decides the sentence you say.'),
      fig_cap='Five reads, in order. The second is the one this unit trains.',
      pre=dict(rubric='Answer from what you already know.',
               how='One minute with your partner. The passage will check you.',
               items=['Where on a box would you look for the form word?',
                      'Which line on a pack tells you where it lives in the pharmacy?']),
      text=[
       'Every pack in a pharmacy is covered in words, in several sizes, and a new student’s '
       'eye slides over most of them. Reading a pack is a skill, and like the '
       'prescription before it, it has an order that pays to keep. This passage gives the order for the '
       'outside of the box; later units go inside.',
       'First comes the name of the medicine, printed largest on the face of the box. You read it, and you '
       'read it again when you pick the pack up, because neighbouring packs '
       'look alike and the shelf does not protect you from a similar box.',
       'Second, and beside the name, the form word: tablets, capsules, oral '
       'liquid, cream, drops. This single word decides the sentence you will '
       'say at the counter. Tablets may be scored; capsules are not opened; '
       'a liquid is measured. The form word is the pack telling you its '
       'never, if you give it the one second it takes to read.',
       'Third, the route words, where the form needs them: for the eye, for '
       'the ear, for the skin only. Drops especially travel with their place, '
       'and a drop for the ear is not a drop for the eye. When the route '
       'words are there, they are there because somebody once needed them.',
       'Fourth, the storage line. Most packs live at room temperature on '
       'their fixed shelf; some say keep refrigerated, and go to the fridge; '
       'a few belong in the locked cabinet. The storage line is how a pack '
       'tells you its address in the pharmacy, and Unit 7 is built on it.',
       'Last, the expiry date, with the batch number beside it. The date '
       'says until when the pack may be used; the batch says which making of '
       'the medicine this box came from. Both are copied into records at '
       'moments later units will teach; for now, know where they live: on '
       'the end of the box, in small print, and they stand always together.',
       'Two habits keep the reading honest. The first is to read with a '
       'finger: touch each line as you say it, because the finger slows the '
       'eye to the speed of truth. The second is to read the form word out '
       'loud when a colleague is near. A spoken word can be caught by another '
       'ear, and many wrong packs have been stopped by a colleague who heard '
       'tablets where the basket said capsules.',
       'Five reads, one box, perhaps six seconds. The habit seems slow for '
       'exactly one week, and then it is faster than not having it, because '
       'the pack answers questions before they are asked. A student who '
       'reads the outside of the box in order is already speaking the '
       'dispensary’s language: name, form, route, storage, date.'],
      source=('Pack reading order and labelling conventions as commonly taught.',
              'General professional guidance, 2025–2026.'),
      source_tier='A',
      **{'while': dict(kind='short', rubric='Answer with a few words.',
               example='What is printed largest?  (the name of the medicine)',
               pairs=[('What is printed largest?', 'the name of the medicine'),
                      ('What does the form word decide?', 'the sentence you say'),
                      ('Which form especially travels with its place?', 'drops'),
                      ('What is the storage line?', 'the pack’s address in the pharmacy'),
                      ('What sits beside the expiry date?', 'the batch number'),
                      ('How long do the five reads take?', 'perhaps six seconds')])},
      post=dict(kind='tf',
          rubric='True or false? If it is false, write the correction in six words or fewer.',
          how='Then say which of the five reads a busy dispensary is most tempted to skip.',
          example='The name is read once.  —  false (again when you pick it up)',
          bank=['name read twice', 'the form word decides the sentence', 'drops travel with their place',
                'the storage line is the address', 'date and batch together'],
          bank_head='The five reads, in five phrases',
          pics=['a tablet', 'drops', 'the fridge', 'calendar'],
          pairs=[('The name is read only once.', 'false — again when you pick it up'),
                 ('The form word decides the sentence you say.', 'true'),
                 ('A drop for the ear can go to the eye.', 'false — drops travel with their place'),
                 ('The storage line says where the pack lives.', 'true'),
                 ('The batch number is printed far from the date.',
                  'false — they are always together')])),
],

writing=[
 dict(title='Three definitions with their nevers', genre='definition',
      rubric='Write one-sentence definitions of three forms, each with its never.',
      how='Use the frames. Each answer is two sentences: the definition, then the '
          'never. Choose the three forms whose nevers matter most.',
      fig=F.mini_table('DEFINITION PLUS NEVER', ['Part', 'In the example'],
            [['the definition', 'a capsule is a form whose medicine sits loose inside a shell'],
             ['the never', 'it is not opened unless the pharmacist says so']],
            highlight=[1]),
      fig_cap='Two sentences per form. The second is the one the counter repeats.',
      model=['A capsule is a form whose medicine sits loose inside a shell. It is '
             'not opened unless the pharmacist says so.',
             'A patch is a form that sticks to the skin and works slowly through '
             'it. A patch is never cut.',
             'A tablet is a pressed solid form, often scored. An unscored tablet '
             'is not made for breaking.'],
      scaffold=['A ____ is a form that/whose ____.  Its never: ____.',
                'A ____ is …  It is never …',
                'A ____ is …  It is not … unless …'],
      checklist=['each definition has a verb and a difference-maker',
                 'each never is in the passive',
                 'the three nevers are the ones that matter most',
                 'nothing begins with “it is when”']),
 dict(title='A short examination answer', genre='short exam answer',
      rubric='Answer in four sentences: why is one medicine made in several forms?',
      how='Use the lecture from listening 5.1. One sentence of fact, two of '
          'reasons with examples, one that names whose choice the form is. '
          'Twelve minutes, then swap and mark with the checklist.',
      fig=F.mini_table('THE FOUR-SENTENCE SHAPE', ['Sentence', 'Carries'],
            [['1', 'the fact: one medicine, several forms'],
             ['2', 'the first reason, with its example'],
             ['3', 'the second reason, with its example'],
             ['4', 'whose choice the form is']],
            highlight=[3]),
      fig_cap='Four sentences, four jobs. The fourth is the one students forget.',
      model=['One medicine is often made in more than one dose form.',
             'Patients differ in swallowing: a child who cannot swallow a tablet '
             'can take the same medicine as a liquid.',
             'Patients differ in where the trouble is: a sore eye needs drops '
             'that land there and nowhere else.',
             'The prescriber chooses the form to fit the patient, and the '
             'dispensary supplies exactly the form that was chosen.'],
      scaffold=['One medicine …', 'Patients differ in …: …',
                'Patients differ in …: …', 'The prescriber …, and the dispensary …'],
      checklist=['sentence one states the fact plainly',
                 'both reasons carry an example',
                 'sentence four names the prescriber and the dispensary',
                 'every use of a form’s name is its right name']),
 dict(title='The form line, written for a label', genre='labelled diagram',
      rubric='Draw three packs as boxes, and write the two lines a label-reader '
             'needs on each: the form word, and the never.',
      how='The drawing is boxes and words: this is not an art task. Pick three '
          'forms with different routes. Under each box, line one is the form '
          'word as a pack would print it; line two is the never, in the '
          'passive. Use packs you have seen in pharmacies in your own country '
          'as your models.',
      fig=F.form_annotated('THE THREE BOXES, AS A MARKER READS THEM', 'FORM AND NEVER',
            [('Box 1', 'tablets — swallowed whole; unscored ones not broken'),
             ('Box 2', 'cream — applied thinly, to the skin only'),
             ('Box 3', 'inhaler — inhaled, never swallowed'),
             ('The routes', 'one swallowed, one topical, one breathed'),
             ('The test', 'could a stranger use each never safely?')],
            callouts=[(3, 'three different routes, on purpose'),
                      (4, 'the marker’s one question')]),
      fig_cap='What a marker looks for: three routes, and a never a stranger '
              'could follow.',
      model=['TABLETS. Swallowed whole, with water. An unscored tablet is not '
             'broken.',
             'CREAM. Applied thinly, to the skin only.',
             'INHALER. The medicine is inhaled, not swallowed.'],
      scaffold=['Box 1: the form word.  Its never, in the passive.',
                'Box 2: …', 'Box 3: …'],
      checklist=['the three forms take three different routes',
                 'every never is in the passive',
                 'the form words are the right names, not fog words',
                 'a stranger could follow each line safely']),
],

review_intro='Five activities, one for each skill. None of them repeats a task you have '
             'already done: the terms are the same, the sentences are new. Do them in '
             'order. They take twenty minutes.',
review=[
 dict(skill='reading', title='The pack, in reading order',
   kind='order', rubric='Put the five reads of a pack in the order the procedure gave.',
   how='Then say which read a pharmacy in your own country prints differently.',
   example='The name of the medicine.  —  1',
   bank=['the name', 'the form word', 'the route words', 'the storage line', 'date and batch'],
   bank_head='The five reads these lines name',
   pics=['a tablet', 'drops', 'the fridge', 'calendar'],
   pairs=[('The name of the medicine, printed largest.', '1'),
          ('The form word beside it.', '2'),
          ('The route words, where the form needs them.', '3'),
          ('The storage line.', '4'),
          ('The expiry date, with the batch beside it.', '5')],
   fig=F.step_sequence('FIVE READS, SIX SECONDS',
     ['The name — and again when you pick it up.', 'The form word.',
      'The route words.', 'The storage line.', 'The date and the batch, together.'],
     stop_points=[2],
     note='The marked read is the one this unit trained.'),
   fig_cap='The reading order, once it is in order.'),
 dict(skill='listening', title='Four things from 5.1 that you did not write down',
   kind='choice', rubric='Listen to 5.1 once more and circle a, b or c.',
   how='You do not need the transcript. One listening is enough. These are not the '
       'questions you answered in part 5.',
   example='The lecture is about   a) forms   b) prices   c) people.   Answer: a',
   bank=['the crowd', 'eye drops', 'the child', 'the fog'],
   bank_head='The four small things to listen for this time',
   pics=['a tablet', 'drops', 'a liquid', 'speech'],
   pairs=[('The shelf looks like   a) a wall   b) a crowd   c) a list', 'b'),
          ('Eye drops belong to   a) the bottle   b) the eye   c) the shelf', 'b'),
          ('The child in the lecture cannot   a) wait   b) swallow a tablet   c) read', 'b'),
          ('Pills is called   a) a name   b) a fog   c) a form', 'b')],
   fig=F.mini_table('WHAT YOU ARE LISTENING FOR THIS TIME',
     ['Not this', 'But this'],
     [['the three routes', 'what the shelf looks like at first'],
      ['the sorting', 'where eye drops belong'],
      ['the rule', 'what pills is called']]),
   fig_cap='The same recording, listened to for different things.'),
 dict(skill='speaking', title='The round, against the clock',
   rubric='Run the naming round with all eight terms inside three minutes.',
   how='Your partner calls the eight terms in any order. For each: the passive '
       'use sentence and the never, nothing else. Then swap. Keep a watch '
       'running; the clock is the task.',
   model=['A tablet: swallowed whole, with water. An unscored one is not broken.',
          'A capsule: swallowed whole. Not opened unless the pharmacist says so.',
          'A liquid: measured, not counted. Shaken first when the label says so.',
          'A patch: worn on the skin. Never cut.'],
   checklist=['every sentence was in the passive',
              'every form got its never',
              'no fog words anywhere',
              'all eight inside three minutes'],
   fig=F.conversation('EIGHT TERMS, THREE MINUTES',
     dict(name='Your partner', role='calling the terms', skin='5', hair='black',
          style='short', tunic='blue'),
     dict(name='You', role='answering against the clock', skin='1', hair='brown',
          style='tied', tunic='teal'),
     [('L', 'A capsule.'),
      ('R', 'Swallowed whole. Not opened unless the pharmacist says so.'),
      ('L', 'Drops.'),
      ('R', 'One drop at a time, where they land.'),
      ('L', 'A patch.'),
      ('R', 'Worn on the skin. Never cut.')],
     note='The clock removes the thinking time. What remains is what you know.'),
   fig_cap='The round at speed: the review version of listening 5.3.'),
 dict(skill='writing', title='Two definitions and one difference',
   rubric='Define a cream and an ointment, then write one sentence on how they '
          'differ.',
   how='The ointment was never defined in part 8, so nothing can be copied. Use '
       'the words-to-recognise plate and the frames. Ten minutes.',
   model=['A cream is a soft form that is applied thinly to the skin.',
          'An ointment is the cream’s heavier relative, made for drier skin.',
          'A cream sinks in and goes; an ointment stays and protects.'],
   scaffold=['A cream is …', 'An ointment is …',
             'A cream …; an ointment …'],
   checklist=['both definitions have verbs and a difference-maker',
              'the third sentence carries the contrast in one line',
              'both routes are the skin, and the writing says so',
              'an examiner could mark it without asking you anything'],
   fig=F.mini_table('TWO SKIN FORMS, SIDE BY SIDE',
     ['', 'A cream', 'An ointment'],
     [['Feel', 'light, sinks in', 'greasy, stays on'],
      ['For', 'ordinary skin', 'drier skin'],
      ['Applied', 'thinly', 'thinly, but it lingers']],
     highlight=[1]),
   fig_cap='The table to write from. The contrast line is the last row.'),
 dict(skill='reading', title='Which of these is a name, and which is fog?',
   kind='sort', rubric='Write N for a right name and F for a fog word.',
   columns=('N', 'F'),
   how='A name carries its form’s never. Fog covers several forms at once. '
       'Then write the fog word you hear most in your own country’s '
       'pharmacies, and the name that should replace it.',
   example='a scored tablet  —  N',
   bank=['carries a never', 'one form only', 'covers several forms', 'everyday word'],
   bank_head='The marks of the two kinds',
   pics=['a tablet', 'a capsule', 'speech', 'cross'],
   pairs=[('a scored tablet', 'N'),
          ('some pills', 'F'),
          ('an oral liquid', 'N'),
          ('the usual stuff', 'F'),
          ('eye drops', 'N'),
          ('that medicine thing', 'F')],
   fig=F.contrast('TWO ANSWERS ABOUT ONE BASKET',
     'FOG', ['some pills', 'the usual stuff', 'that medicine thing'],
     'NAMES', ['a scored tablet', 'a capsule', 'an oral liquid'],
     'True, and it hides the nevers.', 'True, and every never survives.'),
   fig_cap='Both columns would be understood. Only one of them is safe.'),
],

fluency=dict(
  title='The eight forms in forty-five seconds, three times',
  rubric='Say all eight forms with their passive sentences, faster each time.',
  how='Forty-five seconds with the first partner, forty with the second, '
      'thirty-five with the third. Say the same list every time. Nothing new '
      'goes in.',
  content=['A tablet is swallowed whole; scored ones break evenly.',
           'A capsule is swallowed whole and not opened.',
           'A liquid is measured, not counted.',
           'A cream is applied thinly; an ointment stays longer.',
           'Drops are given one at a time, where they land.',
           'An inhaler’s medicine is inhaled; a patch is worn and never cut.'],
  words=['a dose form', 'a tablet', 'a capsule', 'a liquid', 'a cream',
         'drops', 'an inhaler', 'a patch'],
  fig_title='FORTY-FIVE, THEN FORTY, THEN THIRTY-FIVE',
  point='You can run the whole shelf in one breath, in the passive, which is '
        'how the dispensary actually speaks about use.',
  ask='Which form still slows you down on the third run, and what is its '
      'missing word?',
  icons=['speech', 'clock', 'pillbottle', 'tick']),

cases_intro='Three short cases from the school and the teaching dispensary. Each '
            'one can be answered in more than one way. Work in threes. Say what '
            'you would do, and give a reason every time. The words you need are '
            'under each case.',
cases=[
 dict(tier='B', title='Two students, two definitions of a liquid',
  situation=['Dr Ricci asks what a liquid is, as a dose form. Marcus says it is '
             'a medicine you drink. Lina says it is a form that is measured, '
             'not counted.',
             'Dr Ricci writes both on the board and asks the room which one '
             'survives the eye drops on the tray in front of them — a '
             'liquid nobody drinks.'],
  who=['Marcus Oyelaran', 'Lina Petrova'],
  facts=['Marcus’s answer says what you do with most liquids.',
         'Lina’s answer says what is true of all of them.',
         'Eye drops are a liquid that nobody drinks.',
         'Both sentences sound reasonable until the tray arrives.'],
  question='Which definition survives the eye drops, and what killed the other?',
  questions=['What exactly do the eye drops do to Marcus’s definition?',
             'Why is measured, not counted true even for drops?',
             'What would you add to Marcus’s sentence to save it, if anything?'],
  words=['a liquid', 'drops', 'to measure', 'a definition', 'the route'],
  language=[('Testing a definition', ['Does it survive …?',
                                      'The counter-example is …',
                                      'True of most is not true of all.']),
            ('Repairing a sentence', ['It would survive if …',
                                      'Replace drink with …'])],
  how='In threes. Five minutes. One person writes the surviving definition down.',
  point='You can test a definition against a counter-example, in English.',
  ask='Read out the surviving definition, and name the example that decided it.',
  note='Both students are right about something. Say what each is right about.',
  icons=['liquidbottle', 'dropper', 'book', 'tick'],
  guidance=('Examination practice', 'A definition must survive its counter-examples',
            'General academic guidance, 2025–2026.')),
 dict(tier='C', title='The two packs that look alike',
  situation=['On the shelf, two boxes from the same maker stand side by side, '
             'in the same colours. One says tablets. One says capsules. A '
             'student reaches for the left one while still talking to a '
             'classmate.',
             'Petra, passing, puts one finger on the shelf edge — not on '
             'the student — and says a single word: read.'],
  who=['Petra Horakova'],
  facts=['The two boxes share a maker and a colour scheme.',
         'One is tablets, one is capsules.',
         'The student reached while talking.',
         'Petra said one word: read.'],
  question='What should the student read, and in what order, before the hand closes?',
  questions=['Why is the colour of a box never part of the reading?',
             'What does reading the name again when you pick it up protect against?',
             'What would you say to the classmate who was being talked to?'],
  words=['a pack', 'the form word', 'to read', 'a tablet', 'a capsule'],
  language=[('Naming the habit', ['The name, and the form word, before the hand closes.',
                                  'The shelf does not protect you.']),
            ('Keeping a colleague with you', ['One moment — let me read this.',
                                              'Talk to me after the shelf.'])],
  how='In threes. Five minutes. Try the one-word correction out loud: read.',
  point='You can say why a look-alike box loses to six seconds of reading.',
  ask='Say the two reads, in order, as you would do them at the shelf.',
  note='The tempting answer blames the maker’s colours. Say why that is not enough.',
  icons=['card', 'ear', 'cross', 'tick']),
 dict(tier='C', title='The never that was not passed on',
  situation=['In a role-play, a student finishes a perfect handover of a patch: '
             'name, form, where it goes. The patient-player walks away, then '
             'turns and asks: can I cut it to make it smaller?',
             'The student stops. The never — a patch is never cut — '
             'was in the notes, but it was not in the handover.'],
  who=['Lina Petrova'],
  facts=['The handover named the form and its place.',
         'The never was not said.',
         'The patient-player asked the exact question the never answers.',
         'The role-play is not over: the student can still answer.'],
  question='What does the student say now, and where should the never have lived?',
  questions=['Why does a never belong in the handover, not only in the notes?',
             'What is the best sentence to say right now, late but clear?',
             'Which of the other nevers would you always say, and why those?'],
  words=['a patch', 'a handover', 'to cut', 'the never', 'to pass on'],
  language=[('Answering late but clearly', ['No — a patch is never cut.',
                                            'I should have said that with the bag.']),
            ('Placing the never', ['The never travels with the form.',
                                   'A never in the notes protects nobody.'])],
  how='In threes. Five minutes. Replay the handover with the never inside it.',
  point='You can say where a never belongs: in the sentence, not in the drawer.',
  ask='Say the repaired handover, with the never in its place.',
  note='The student’s handover was perfect except for one sentence. Say which.',
  icons=['patch', 'speech', 'cross', 'tick']),
],

end_fig_title='THE DOSE FORMS, ON ONE PAGE',
end_fig_steps=['A dose form is the shape a medicine is made in.',
               'Many shapes, three routes: swallowed, on the skin, breathed in.',
               'Each form has a passive sentence: it is swallowed, applied, inhaled.',
               'Each form has a never: not opened, not cut, not chewed.',
               'The names are safety: a fog word drops the never.',
               'Read the pack outside first: name, form, route, storage, date.'],
end_fig_note='Six lines. The fourth is the one the counter repeats all day.',
end_fig_cap='The whole of Unit 2 on one page.',

p1_recap=['You have counted the shapes you already knew, and met the ones you '
          'had only seen.',
          'You have seen one medicine in three forms, and why the form follows '
          'the person.'],
p1_ask='Which of the three questions was hardest to answer in English?',
p1_icons=['tabletpill', 'capsule', 'liquidbottle', 'patch'],
p2_recap=['Eight terms you can now define: a dose form, a tablet, a capsule, a '
          'liquid, a cream, drops, an inhaler, a patch.',
          'The frames that carry them: it is a form that …; it is '
          'swallowed / applied / inhaled; it is never …',
          'One rule to keep: the pressed solid is the tablet; the filled shell '
          'is the capsule.'],
p2_ask='Which three of the eight terms name forms that never meet the mouth?',
p3_recap=['You have gone from knowing a form when you see it to defining it '
          'yourself.',
          'Every term in this part comes back in the listening, so say them out '
          'loud now.'],
p3_ask='Define four of the eight terms without looking at the page.',
p3_icons=['tabletpill', 'dropper', 'inhaler', 'creamtube'],
p4_recap=['The dispensary speaks in the passive: a tablet is swallowed, a cream '
          'is applied, the medicine is inhaled.',
          'The negative of the passive is the never, and the never is the '
          'safety: a capsule is not opened; a patch is not cut.'],
p4_ask='Which passive verb goes with each route — and which form breaks '
       'the pattern?',
p10_recap=['You can name every common form by its right name, define it, and '
           'say its never in the passive.',
           'You can read the outside of a pack in order: name, form, route, '
           'storage, date.',
           'Unit 3 puts the forms onto the prescription, line by line. The '
           'names you learned here are the words on every line.'],
p10_ask='Run the eight forms with their nevers, from memory, inside a minute.',
)

for _i, _pt in enumerate([
    'You now know how a lecture turns a crowd into groups: one question — '
    'which way does it enter — sorts the whole shelf.',
    'You now know what a tutorial does to a nearly-right idea: it finds the '
    'counter-example and keeps what survives.',
    'You now know how a naming round sounds: real things, right names, passive '
    'sentences, and the never at the end.']):
    U['listening'][_i]['point'] = _pt
U['listening'][0]['ask'] = 'What one question sorts every form, and what are the three answers?'
U['listening'][1]['ask'] = 'What was the coat idea missing, in the tutor’s own words?'
U['listening'][2]['ask'] = 'Which never came with a reason, and what was the reason?'

for _i, _pt in enumerate([
    'You can present a form in four moves: name, definition, passive sentence, '
    'never.',
    'You can give the reason with the fact, which is what turns a list of '
    'forms into an explanation.',
    'You can survive the naming round at speed, which is how the dispensary '
    'actually asks.']):
    U['speaking'][_i]['point'] = _pt

for _i, _pt in enumerate([
    'A textbook passage gives each form its name, its use and its never, and '
    'the never is the part the counter repeats.',
    'A fog word covers two forms the way fog covers two houses, and it drops '
    'both nevers as it falls.',
    'A pack is read outside first, in order, and the form word is the read '
    'that decides the sentence you say.']):
    U['reading'][_i]['point'] = _pt

for _i, _pt in enumerate([
    'A definition with its never is two sentences, and the second is the one '
    'that keeps somebody safe.',
    'A four-sentence answer carries the fact, two reasons with examples, and '
    'whose choice the form is.',
    'A form line a stranger could follow is the whole art of the label, '
    'practised early.']):
    U['writing'][_i]['point'] = _pt
