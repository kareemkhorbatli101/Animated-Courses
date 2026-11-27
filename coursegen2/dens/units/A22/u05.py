# -*- coding: utf-8 -*-
import figs2 as F

U = dict(
num=5,
title='The Instruments on the Tray',
level='A2.2',
strap='CEFR A2.2  ·  Grammar: expressing purpose: is used to, is used for, in order to, '
      'so that  ·  Eight instruments, each designed to reach one surface',
threads={'domain': ['instruments', 'the tray', 'purpose'],
         'function': ['naming', 'explaining purpose', 'asking for something']},
can_do=['name the eight instruments of a basic tray, in the singular and the plural',
        'say what each instrument is used for, in a full sentence',
        'ask a colleague for an instrument without pointing at it',
        'explain to a patient what an instrument is for, without naming it',
        'check a tray against the procedure it has been laid for'],
recycles='Unit 2 (notation), Unit 3 (the tissues) and Unit 4 (the surfaces each '
         'instrument is designed to reach)',
prepares='Unit 6, where the instruments are used on a patient and the surface, the '
         'tissue and the instrument all have to be named in the same sentence',

warm=['How many instruments are on the tray for a routine examination where you study?',
      'Which of them have you held, and which have you only seen?',
      'What do you call the drill in your own language, and what does the word mean?'],
warm_fig=F.instrument_plate('A BASIC EXAMINATION TRAY', [
    ('a mouth mirror', 'mirror', 'to see surfaces you cannot look at directly'),
    ('a probe', 'probe', 'to feel the surface of a tooth'),
    ('tweezers', 'tweezers', 'to carry small items into and out of the mouth')],
    note='Three instruments for an examination. Everything else on the tray belongs to '
         'the treatment that may follow.'),
warm_fig_cap='The three instruments a routine examination actually requires.',
warm_fig_alt='Three instruments drawn side on, each with a numbered pin and a line '
             'saying what it is used for: a mouth mirror, a probe and tweezers.',
warm_fig2=F.icon_cards('WHAT AN INSTRUMENT IS DESIGNED TO DO',
    [('to see', 'mirror'), ('to feel', 'probe'), ('to remove', 'brush'),
     ('to carry', 'tray')], cols=4,
    note='Four purposes. Every instrument in this unit belongs to one of them, and the '
         'purpose is what its name records.'),
warm_fig2_cap='The four purposes an instrument can have, which is how a tray is sorted.',
p1_cards=['a mouth mirror', 'a probe', 'an excavator', 'a scaler', 'tweezers',
          'a handpiece'],

preview_intro='This unit has eight instruments and ten sentences. Read this page before '
              'anything else, and say each name out loud with the purpose beside it. An '
              'instrument you cannot name is an instrument you have to point at, and in '
              'a surgery that is not good enough.',
set_fig_title='THE EIGHT INSTRUMENTS OF UNIT 5',
set_fig_cap='The eight instruments you will be able to name and explain by the end of '
            'this unit.',
set=[
 dict(term='a mouth mirror', pos='noun', thread='domain',
      definition='a small round mirror on a handle, used to see surfaces you cannot look '
                 'at directly',
      example='The mouth mirror is used to see the lingual surface of a lower molar.',
      collocation='with the mirror  ·  hold the cheek back', recycle=[5, 6, 7]),
 dict(term='a probe', pos='noun', thread='domain',
      definition='a thin pointed instrument, used to feel the surface of a tooth',
      example='The probe is used to feel whether the surface is hard or soft.',
      collocation='run the probe over  ·  the tip of the probe', recycle=[5, 6, 9]),
 dict(term='a periodontal probe', pos='noun', thread='domain',
      definition='a blunt marked probe, used to measure the depth round a tooth',
      example='A periodontal probe is used in order to measure the depth in millimetres.',
      collocation='measure with a periodontal probe  ·  the markings', recycle=[5, 7, 9]),
 dict(term='an excavator', pos='noun', thread='domain',
      definition='a small spoon-shaped instrument, used to remove soft material from a '
                 'cavity',
      example='The excavator is used for removing soft caries by hand.',
      collocation='remove with an excavator  ·  a small excavator', recycle=[5, 6]),
 dict(term='tweezers', pos='noun', thread='domain',
      definition='a two-armed instrument, used to carry small items into the mouth',
      example='Tweezers are used to carry a cotton roll into the mouth.',
      collocation='with the tweezers  ·  a pair of tweezers', recycle=[5, 8]),
 dict(term='a scaler', pos='noun', thread='domain',
      definition='a sharp-bladed instrument, used to remove calculus from a surface',
      example='The scaler is used to remove calculus from the lingual surfaces.',
      collocation='scale a surface  ·  a hand scaler', recycle=[5, 7, 9]),
 dict(term='a handpiece', pos='noun', thread='domain',
      definition='the instrument that holds and turns a bur',
      example='The handpiece is used to cut enamel, so that the cavity can be prepared.',
      collocation='in the handpiece  ·  a slow handpiece', recycle=[5, 6, 8]),
 dict(term='a syringe', pos='noun', thread='domain',
      definition='the instrument used to give a local anaesthetic',
      example='The syringe is used to give the anaesthetic before any cutting begins.',
      collocation='load the syringe  ·  a dental syringe', recycle=[5, 8, 9]),
],
set_note='Learn these eight. The plural of tweezers is the one trap on this page.',

phrase_fig_title='TEN SENTENCES FOR SAYING WHAT AN INSTRUMENT IS FOR',
phrases=[
 ('Naming a purpose with to',
  ['The mirror is used to see surfaces you cannot look at directly.',
   'The probe is used to feel the surface of a tooth.']),
 ('Naming a purpose with for',
  ['The excavator is used for removing soft caries.',
   'Tweezers are used for carrying small items into the mouth.']),
 ('Giving the reason behind the purpose',
  ['A periodontal probe is marked in millimetres in order to measure depth.',
   'The handpiece turns the bur so that enamel can be cut.']),
 ('Asking for an instrument, and handing one over',
  ['Could I have the mirror, please?',
   'Pass me the excavator, would you?',
   'Here is the probe.',
   'I have the scaler ready when you want it.']),
],
phrase_fig_cap='Ten sentences, in four groups. The last group is the one you will use '
               'twenty times a day.',
phrase_note='Note that tweezers takes a plural verb: tweezers are used, never tweezers '
            'is used.',

receptive=[
 dict(term='a bur', definition='the small cutting head that fits into a handpiece',
      example='A new bur is fitted before each patient.'),
 dict(term='blunt', definition='not sharp; rounded at the tip',
      example='A periodontal probe is blunt, so that it does not cut the tissue.'),
 dict(term='a cotton roll',
      definition='a small roll of cotton used to keep an area dry',
      example='A cotton roll is carried into the mouth with tweezers.'),
 dict(term='to lay a tray',
      definition='to set out the instruments a procedure will need, in order',
      example='The nurse lays the tray before the patient comes in.'),
 dict(term='sterile', definition='free of living organisms; safe to put in a mouth',
      example='Every instrument on the tray is sterile.'),
 dict(term='a tip', definition='the working end of an instrument',
      example='The tip of the probe is sharp.'),
],
receptive_fig_title='TERMS TO RECOGNISE IN UNIT 5',
receptive_fig_cap='You will meet these six in the lecture and the readings. You are not '
                  'asked to produce them yet.',

preview_task=dict(kind='match', rubric='Match each instrument with what it is used for.',
  example='a mouth mirror  —  to see surfaces you cannot look at directly',
  how='Cover the preview page first. Then check your answers against it.',
  pairs=[('a mouth mirror', 'to see surfaces you cannot look at directly'),
         ('a probe', 'to feel the surface of a tooth'),
         ('a periodontal probe', 'to measure the depth round a tooth'),
         ('an excavator', 'to remove soft material from a cavity'),
         ('a scaler', 'to remove calculus from a surface'),
         ('a handpiece', 'to hold and turn a bur')]),

vocab_tasks=[
 dict(kind='gap', rubric='Complete each sentence with the name of one instrument.',
   example='The mirror is used to see surfaces you cannot look at directly.',
   pairs=[('The ____________ is used to see surfaces you cannot look at directly.',
           'mouth mirror'),
          ('The ____________ is used to feel the surface of a tooth.', 'probe'),
          ('A ____________ probe is used to measure depth in millimetres.',
           'periodontal'),
          ('The ____________ is used for removing soft caries by hand.', 'excavator'),
          ('____________ are used for carrying small items into the mouth.', 'Tweezers'),
          ('The ____________ is used to remove calculus from a surface.', 'scaler'),
          ('The ____________ holds and turns the bur.', 'handpiece'),
          ('The ____________ is used to give a local anaesthetic.', 'syringe')],
   fig=F.morph_builder('FOUR MORE TERMS FROM THE PARTS YOU NOW HAVE',
     [('', 'scal', '-er', 'a scaler', 'the instrument that scales a surface'),
      ('', 'excavat', '-or', 'an excavator', 'the instrument that excavates a cavity'),
      ('', 'hand', '-piece', 'a handpiece', 'the piece held in the hand'),
      ('peri-', 'odont', '-al', 'periodontal', 'round about the tooth')],
     note='Three of these names tell you what the instrument does. The fourth tells you '
          'where it works.'),
   fig_cap='Four instrument names taken apart, with what each part contributes.'),

 dict(kind='odd', rubric='Three of the four belong to one purpose. Circle the one that '
                         'does not, and name the purpose the three share.',
   how='Name the purpose out loud before you name the odd one out.',
   example='a mirror / a light / a probe / a camera  —  a probe is for feeling, not seeing',
   bank=['for seeing', 'for feeling', 'for removing', 'for carrying'],
   bank_head='The four purposes these instruments fall under',
   pics=['a mouth mirror', 'a probe', 'a scaler', 'tweezers'],
   pairs=[('a mirror / a light / a probe / a camera', 'a probe'),
          ('an excavator / a scaler / a handpiece / a mirror', 'a mirror'),
          ('a probe / a periodontal probe / tweezers / an excavator', 'tweezers'),
          ('a syringe / an anaesthetic / a needle / a scaler', 'a scaler'),
          ('sterile / clean / sharp / safe', 'sharp')]),

 dict(kind='short', rubric='Write one sentence saying what each instrument is used for. '
                           'Use is used to or is used for.',
   example='a mouth mirror  (The mouth mirror is used to see surfaces you cannot look at '
           'directly.)',
   pics=['a mouth mirror', 'a periodontal probe', 'an excavator', 'a handpiece'],
   pairs=[('a mouth mirror',
           'The mouth mirror is used to see surfaces you cannot look at directly.'),
          ('a periodontal probe',
           'A periodontal probe is used for measuring the depth round a tooth.'),
          ('an excavator',
           'The excavator is used for removing soft material from a cavity.'),
          ('tweezers', 'Tweezers are used to carry small items into the mouth.'),
          ('a handpiece',
           'The handpiece is used to hold and turn a bur, so that enamel can be cut.')],
   fig=F.instrument_plate('FIVE INSTRUMENTS, FIVE PURPOSES', [
     ('a mouth mirror', 'mirror', 'to see what you cannot look at directly'),
     ('a periodontal probe', 'perioprobe', 'to measure depth in millimetres'),
     ('an excavator', 'excavator', 'to remove soft material from a cavity'),
     ('a scaler', 'scaler', 'to remove calculus from a surface'),
     ('a handpiece', 'handpiece', 'to hold and turn a bur')],
     note='Five instruments. Four of them remove or measure; only one of them looks.'),
   fig_cap='Five instruments with their purposes, as you will say them.'),

 dict(kind='sort', rubric='Write E for an instrument used in an examination, T for one '
                          'used in a treatment, and B for one used in both.',
   columns=('E', 'T', 'B'),
   how='Then say which of these you have actually held, and which you have only watched '
       'somebody else use.',
   example='a mouth mirror  —  B',
   bank=['examination', 'treatment', 'both'],
   bank_head='The three trays these instruments appear on',
   pics=['a mouth mirror', 'a probe', 'a handpiece', 'a syringe'],
   pairs=[('a mouth mirror', 'B'), ('a probe', 'E'), ('a periodontal probe', 'E'),
          ('a handpiece', 'T'), ('a syringe', 'T'), ('tweezers', 'B')],
   fig=F.contrast('TWO TRAYS, ONE SURGERY',
     'THE EXAMINATION TRAY', ['a mouth mirror', 'a probe',
                              'a periodontal probe', 'tweezers'],
     'THE TREATMENT TRAY', ['everything on the examination tray',
                            'a syringe and an anaesthetic',
                            'a handpiece and the burs it needs',
                            'an excavator and a scaler'],
     'Four instruments, laid in two minutes.',
     'Four more, and every one of them chosen for one procedure.'),
   fig_cap='The two trays, and why the second one cannot be laid before the plan is known.'),
],

g_point='expressing purpose: is used to, is used for, in order to, so that',
g_source='the ten sentences on the preview page',
g_rule=['The probe is used to feel the surface of a tooth. Is used to followed by a verb is the '
        'standard way of giving the purpose of an instrument. It is the pattern every '
        'textbook definition takes.',
        'The excavator is used for removing soft caries. Is used for takes a verb ending '
        'in -ing. The two patterns mean the same thing, and you should be able to produce '
        'both.',
        'The handpiece turns the bur so that enamel can be cut. In order to and so that '
        'give the reason behind the purpose. Use them when the purpose alone does not '
        'explain the design of the instrument.'],
g_mnemonic_title='THREE WAYS TO GIVE A PURPOSE',
g_mnemonic=[
 ('is used to', 'the plain purpose', 'The probe is used to feel a surface.', 'probe'),
 ('is used for', 'the same, with -ing', 'The scaler is used for removing calculus.',
  'brush'),
 ('so that', 'the reason behind it', 'blunt, so that it does not cut', 'tick'),
],
g_mnemonic_cap='Three patterns. The third explains a design, not only a use.',
g_mnemonic_note='A periodontal probe needs the third pattern: blunt is a choice, not an '
                'accident.',
g_fig=('TWO WAYS TO DESCRIBE AN INSTRUMENT',
       'DESCRIBED BY SHAPE',
       ['It is the one with the round end,',
        'about this long, with the thin bit,',
        'the one you used on the last patient.'],
       'DESCRIBED BY PURPOSE',
       ['A periodontal probe,',
        'blunt and marked in millimetres,',
        'used to measure the depth round a tooth.'],
       'A colleague who still has to be shown.',
       'A colleague who can pass it from the next room.'),
g_fig_cap='The same instrument described two ways. Only one of them can be written in a '
          'procedure.',
g_tasks=[
 dict(kind='gap', rubric='Complete each sentence with to, for, order or that.',
   example='The probe is used to feel the surface.',
   pairs=[('The probe is used ____________ feel the surface.', 'to'),
          ('The excavator is used ____________ removing soft caries.', 'for'),
          ('A periodontal probe is marked in ____________ to measure depth.', 'order'),
          ('The handpiece turns the bur so ____________ enamel can be cut.', 'that'),
          ('Tweezers are used ____________ carrying a cotton roll.', 'for'),
          ('The mirror is used ____________ see the lingual surface.', 'to')]),

 dict(kind='choice', rubric='Circle a, b or c.',
   how='Each of these is a mistake made at least once in a first clinical year.',
   example='Tweezers   a) is   b) are   used to carry things.   Answer: b',
   bank=['is used to', 'is used for', 'are used to', 'in order to'],
   bank_head='Four patterns, and which of them each sentence needs',
   pics=['tweezers', 'a probe', 'a scaler', 'a periodontal probe'],
   pairs=[('Tweezers   a) is used to   b) are used to   c) are using to   carry things',
           'b'),
          ('The scaler is used   a) remove   b) to remove   c) for remove   calculus',
           'b'),
          ('The excavator is used for   a) remove   b) to remove   c) removing   soft '
           'caries', 'c'),
          ('A periodontal probe is blunt so   a) that   b) to   c) for   it does not cut '
           'the tissue', 'a'),
          ('The instrument that holds a bur is   a) a scaler   b) a handpiece   '
           'c) an excavator', 'b')]),

 dict(kind='short', rubric='Rewrite each sentence with the other pattern, keeping the '
                           'meaning.',
   example='The scaler is used to remove calculus.  (The scaler is used for removing '
           'calculus.)',
   pics=['a scaler', 'tweezers', 'a mouth mirror', 'a handpiece'],
   how='If the sentence has to, use for, and if it has for, use to.',
   pairs=[('The scaler is used to remove calculus.',
           'The scaler is used for removing calculus.'),
          ('Tweezers are used for carrying a cotton roll.',
           'Tweezers are used to carry a cotton roll.'),
          ('The mirror is used to hold the cheek back.',
           'The mirror is used for holding the cheek back.'),
          ('The handpiece is used for cutting enamel.',
           'The handpiece is used to cut enamel.')]),

 dict(kind='gap', rubric='One word is wrong in each sentence. Write the right one.',
   example='Tweezers is used to carry things.  →  are',
   pairs=[('Tweezers is used to carry things.', 'are'),
          ('The excavator is used for remove soft caries.', 'removing'),
          ('A periodontal probe is marked in order measure depth.', 'to'),
          ('The handpiece turns the bur so what enamel can be cut.', 'that'),
          ('The scaler is used to removing calculus.', 'remove')]),
],

listen_intro='Three recordings: a lecture that sorts the tray by purpose, a tutorial in '
             'which an instrument is described by its shape, and a clinic in which '
             'instruments are asked for during a treatment. Do the task before, the task '
             'while you listen, and the task after.',
listening=[
 dict(title='Lecture: a tray sorted by purpose', genre='lecture',
   what='Dr Nilsen sorts eight instruments into four purposes and explains why the '
        'purpose, not the shape, is what a name records.',
   speakers=['Dr Petra Nilsen', 'Leila Mansour'],
   conv_lines=[('L', 'An instrument has one purpose, and its name usually records it.'),
               ('L', 'A scaler scales. An excavator excavates.'),
               ('R', 'And a handpiece?'),
               ('L', 'That one is named for the hand, not for the work.'),
               ('R', 'So the name tells you where it is held.'),
               ('L', 'Which is less useful. You still have to learn what it does.')],
   conv_cap='The first six turns, in which one name turns out not to follow the rule.',
   conv_note='Three of the eight names record a purpose. The rest record a shape or a '
             'place.',
   pre=dict(kind='choice',
     rubric='Before you listen, predict how the instruments will be sorted.',
     how='Use the preview page. Then listen and check.',
     example='A scaler is for   a) seeing   b) removing.   Answer: b',
     bank=['seeing', 'feeling', 'removing', 'carrying'],
     bank_head='The four purposes the lecture uses',
     pics=['a mouth mirror', 'a probe', 'a scaler', 'tweezers'],
     pairs=[('The lecture sorts the tray by   a) size   b) purpose   c) cost', 'b'),
            ('The name of a scaler records   a) its purpose   b) its shape   '
             'c) where it is held', 'a'),
            ('The name of a handpiece records   a) its purpose   b) its shape   '
             'c) where it is held', 'c')]),
   fig=F.mini_table('EIGHT INSTRUMENTS, FOUR PURPOSES',
     ['Instrument', 'Purpose', 'What its name records'],
     [['a mouth mirror', 'to see', 'the thing itself'],
      ['a probe', 'to feel', 'the action'],
      ['a periodontal probe', 'to measure', 'the place and the action'],
      ['tweezers', 'to carry', 'the shape'],
      ['an excavator', 'to remove', 'the action'],
      ['a scaler', 'to remove', 'the action'],
      ['a handpiece', 'to cut', 'where it is held'],
      ['a syringe', 'to inject', 'the action']],
     highlight=[7], note='The shaded row is the one name that tells you nothing at all '
                         'about what the instrument does.'),
   fig_cap='The eight instruments, sorted by purpose, with what each name records.',
   script=[('Dr Nilsen', 'There are eight instruments on the tray in front of you.'),
           ('Dr Nilsen', 'Do not learn them as a list. Sort them by purpose.'),
           ('Dr Nilsen', 'There are only four purposes: to see, to feel, to remove, '
                         'to carry.'),
           ('Leila', 'Where does the syringe go?'),
           ('Dr Nilsen', 'A fifth, if you like: to deliver something into the tissue.'),
           ('Dr Nilsen', 'Now, the useful part. An instrument has one purpose.'),
           ('Dr Nilsen', 'And its name usually records that purpose.'),
           ('Dr Nilsen', 'A scaler scales. An excavator excavates. A probe probes.'),
           ('Leila', 'And a handpiece?'),
           ('Dr Nilsen', 'That one is named for the hand, not for the work.'),
           ('Leila', 'So the name tells you where it is held.'),
           ('Dr Nilsen', 'Which is less useful. You still have to learn what it does.'),
           ('Dr Nilsen', 'Tweezers are the same. The name describes the shape.'),
           ('Leila', 'Three names out of eight are no help at all.'),
           ('Dr Nilsen', 'Three out of eight. Learn those three by their purpose.'),
           ('Dr Nilsen', 'Now a harder question. Why is a periodontal probe blunt?'),
           ('Leila', 'So that it does not cut the tissue.'),
           ('Dr Nilsen', 'Exactly. The design follows from the purpose.'),
           ('Dr Nilsen', 'An ordinary probe is sharp, because it has to feel a surface.'),
           ('Dr Nilsen', 'A periodontal probe is blunt, because it goes under the gum.'),
           ('Leila', 'Two instruments with almost the same name and opposite tips.'),
           ('Dr Nilsen', 'And that is the pair students confuse most often.'),
           ('Dr Nilsen', 'One more point, and then we shall look at the tray.'),
           ('Dr Nilsen', 'Every instrument on it is designed to reach one surface.'),
           ('Leila', 'The surfaces from last week.'),
           ('Dr Nilsen', 'The surfaces from last week. A mirror exists because you '
                         'cannot see a lingual surface directly.'),
           ('Dr Nilsen', 'Learn the purpose, and the tray explains itself.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='How many purposes does the lecture name?  (four, or five with the syringe)',
     pairs=[('How many purposes does the lecture name first?', 'four'),
            ('Which name records where the instrument is held?', 'the handpiece'),
            ('How many of the eight names are no help?', 'three'),
            ('Why is a periodontal probe blunt?',
             'so that it does not cut the tissue'),
            ('Why is an ordinary probe sharp?', 'it has to feel a surface'),
            ('Why does a mirror exist?',
             'you cannot see a lingual surface directly')])},
   post=dict(kind='short', rubric='Answer Dr Nilsen’s questions as Leila does.',
     example='“What does a scaler do?”  (it scales)',
     pairs=[('“What does a scaler do?”', 'it scales'),
            ('“What does the name handpiece record?”', 'where it is held'),
            ('“Why is a periodontal probe blunt?”', 'so that it does not cut the tissue'),
            ('“Which two instruments do students confuse?”',
             'the probe and the periodontal probe'),
            ('“Why does a mirror exist at all?”',
             'some surfaces cannot be seen directly')]),
   point='You now have four purposes instead of eight names, and you know which three '
         'names will not help you.',
   ask='Name the four purposes, and the three names that record something else.',
   icons=['book', 'mirror', 'probe', 'tick']),

 dict(title='Tutorial: an instrument described by its shape', genre='tutorial',
   what='Daniel describes an instrument he cannot name, and Dr Nilsen shows him what the '
        'description costs.',
   speakers=['Dr Petra Nilsen', 'Daniel Owusu'],
   conv_lines=[('L', 'Which instrument did you use?'),
               ('R', 'The one with the round blunt end and the markings.'),
               ('L', 'I know which one you mean. Would a nurse in another room?'),
               ('R', 'Probably not.'),
               ('L', 'Name it by what it is for.'),
               ('R', 'A periodontal probe. For measuring depth.')],
   conv_cap='Six turns in which a correct description is shown to be unusable.',
   pre=dict(kind='choice',
     rubric='Before you listen, decide what is wrong with describing an instrument by '
            'its shape.',
     how='Say your answer out loud. Then listen.',
     example='A shape description works   a) in the room   b) in writing.   Answer: a',
     bank=['the shape', 'the purpose', 'the place', 'the size'],
     bank_head='Four things a description can be built on',
     pics=['a probe', 'a periodontal probe', 'a scaler', 'an excavator'],
     pairs=[('A description by shape works   a) only with somebody watching   '
             'b) anywhere   c) in writing', 'a'),
            ('A description by purpose can be   a) written down   b) only spoken   '
             'c) only shown', 'a'),
            ('Two instruments can share   a) a purpose   b) a shape   c) both', 'c')]),
   fig=F.form_annotated('THE SAME INSTRUMENT, ASKED FOR TWO WAYS',
     'CLINIC 3  ·  TWO REQUESTS',
     [('By shape', 'the one with the round blunt end and the markings'),
      ('Understood by', 'anybody who can see your hands'),
      ('By purpose', 'the periodontal probe, for measuring depth'),
      ('Understood by', 'anybody at all, including on the telephone'),
      ('What changed', 'nothing about the instrument')],
     callouts=[(4, 'the instrument was never the problem')],
     note='Five lines. The description by shape is accurate and still useless.'),
   fig_cap='One instrument, asked for by shape and by purpose.',
   script=[('Dr Nilsen', 'You examined the lower left quadrant. Which instrument did '
                         'you use?'),
           ('Daniel', 'The one with the round blunt end and the markings on it.'),
           ('Dr Nilsen', 'I know exactly which one you mean.'),
           ('Daniel', 'Good.'),
           ('Dr Nilsen', 'Would a nurse in the next room know?'),
           ('Daniel', 'Probably not.'),
           ('Dr Nilsen', 'Would somebody reading your notes next year?'),
           ('Daniel', 'No.'),
           ('Dr Nilsen', 'Name it by what it is for.'),
           ('Daniel', 'A periodontal probe. It is used for measuring depth.'),
           ('Dr Nilsen', 'Good. Now, was your description wrong?'),
           ('Daniel', 'No. It was accurate.'),
           ('Dr Nilsen', 'It was accurate and useless, which is an odd pair of words.'),
           ('Daniel', 'It only works if somebody can see my hands.'),
           ('Dr Nilsen', 'That is the whole point. Say the next one.'),
           ('Daniel', 'The small spoon-shaped one, for taking out soft caries.'),
           ('Dr Nilsen', 'Half shape, half purpose. Give me the name.'),
           ('Daniel', 'An excavator.'),
           ('Dr Nilsen', 'And the one that removes calculus?'),
           ('Daniel', 'A scaler.'),
           ('Dr Nilsen', 'Both of those names record what the instrument does.'),
           ('Daniel', 'So the names are easier than I thought.'),
           ('Dr Nilsen', 'Three of the eight are. The rest you learn by purpose anyway.'),
           ('Daniel', 'Should I ever describe by shape?'),
           ('Dr Nilsen', 'With a patient, yes. They do not know the names.'),
           ('Daniel', 'And with a colleague, never.'),
           ('Dr Nilsen', 'With a colleague, never. They have the names too.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='Which quadrant had Daniel examined?  (the lower left)',
     pairs=[('Which quadrant had Daniel examined?', 'the lower left'),
            ('How did Daniel first describe the instrument?',
             'by its round blunt end and its markings'),
            ('Who would not understand that description?',
             'a nurse in the next room'),
            ('What is the instrument called?', 'a periodontal probe'),
            ('What does Dr Nilsen call the description?', 'accurate and useless'),
            ('When may you describe by shape?', 'with a patient')])},
   post=dict(kind='short', rubric='Rewrite each of Daniel’s descriptions as a name with '
                                  'a purpose.',
     example='“The one with the round blunt end.”  (a periodontal probe, for measuring '
             'depth)',
     pairs=[('“The one with the round blunt end.”',
             'a periodontal probe, for measuring depth'),
            ('“The small spoon-shaped one.”',
             'an excavator, for removing soft caries'),
            ('“The one that removes calculus.”', 'a scaler'),
            ('“The one with the mirror on the end.”',
             'a mouth mirror, for seeing surfaces you cannot look at directly'),
            ('“The one the bur goes into.”', 'a handpiece, for cutting enamel')]),
   point='You now know that a description can be perfectly accurate and still unusable, '
         'and that the test is whether it travels out of the room.',
   ask='What exactly was wrong with Daniel’s first description?',
   icons=['book', 'probe', 'person', 'cross']),

 dict(title='In the clinic: asking for instruments during a treatment',
   genre='clinical supervision',
   what='Dr Rahman has Leila ask for every instrument by name while her hands are busy.',
   speakers=['Dr Yusuf Rahman', 'Leila Mansour'],
   conv_lines=[('L', 'Ask for what you need. Do not point.'),
               ('R', 'Could I have the mirror, please?'),
               ('L', 'Good. And for the soft material?'),
               ('R', 'The excavator, please. The small one.'),
               ('L', 'Why the small one?'),
               ('R', 'The cavity is narrow at the top.')],
   conv_cap='Six turns with a patient in the chair and both of the student’s hands full.',
   pre=dict(kind='choice',
     rubric='Before you listen, decide why pointing is not good enough in a surgery.',
     how='Three of these are real reasons. One is not.',
     example='Your hands are busy   a) a reason   b) not a reason.   Answer: a',
     bank=['your hands are busy', 'the nurse is behind you',
           'the patient is watching', 'the record has to say it'],
     bank_head='Four possible reasons for naming an instrument out loud',
     pics=['a mouth mirror', 'an excavator', 'a scaler', 'a syringe'],
     pairs=[('Pointing fails chiefly because   a) it is rude   b) your hands are busy '
             'and the nurse may be behind you   c) it is slow', 'b'),
            ('Naming the instrument also helps   a) the record   b) the patient   '
             'c) nobody', 'a'),
            ('Asking for the small excavator rather than the excavator   '
             'a) wastes words   b) saves an exchange   c) is wrong', 'b')]),
   fig=F.instrument_plate('WHAT WAS ASKED FOR, IN ORDER', [
     ('a mouth mirror', 'mirror', 'first, to see the cavity at all'),
     ('a probe', 'probe', 'to feel whether the floor is hard'),
     ('an excavator', 'excavator', 'the small one, for a narrow cavity'),
     ('a scaler', 'scaler', 'last, for the calculus on the lingual surface')],
     note='Four instruments in the order they were asked for, each with the reason given '
          'at the time.'),
   fig_cap='The four instruments of one treatment, in the order they were called for.',
   script=[('Dr Rahman', 'Your hands are busy. Ask for what you need, and do not point.'),
           ('Leila', 'Could I have the mirror, please?'),
           ('Dr Rahman', 'Here it is. What are you using it for?'),
           ('Leila', 'To see the floor of the cavity. I cannot look at it directly.'),
           ('Dr Rahman', 'Good. Next?'),
           ('Leila', 'The probe, please.'),
           ('Dr Rahman', 'Which probe? There are two on the tray.'),
           ('Leila', 'The sharp one. I want to feel whether the floor is hard.'),
           ('Dr Rahman', 'Say the name, then.'),
           ('Leila', 'The probe, not the periodontal probe.'),
           ('Dr Rahman', 'That will do. And for the soft material?'),
           ('Leila', 'The excavator, please. The small one.'),
           ('Dr Rahman', 'Why the small one?'),
           ('Leila', 'The cavity is narrow at the top. The large one will not reach.'),
           ('Dr Rahman', 'That is the right reason. Here you are.'),
           ('Leila', 'Thank you.'),
           ('Dr Rahman', 'Now something else. The lingual surfaces of the lower front '
                         'teeth.'),
           ('Leila', 'There is calculus on them.'),
           ('Dr Rahman', 'So what do you ask for?'),
           ('Leila', 'The scaler, please.'),
           ('Dr Rahman', 'Good. And what will you tell the patient it is for?'),
           ('Leila', 'That it takes off the hard material behind her lower teeth.'),
           ('Dr Rahman', 'Without naming it?'),
           ('Leila', 'Without naming it. She does not need the name.'),
           ('Dr Rahman', 'And in the record?'),
           ('Leila', 'The name, and the surface, and the reason.'),
           ('Dr Rahman', 'Three different ways of saying one thing, and all three true.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='What is the first instrument asked for?  (the mirror)',
     pairs=[('What is the first instrument asked for?', 'the mirror'),
            ('What is it used for here?', 'to see the floor of the cavity'),
            ('Why does Dr Rahman ask which probe?', 'there are two on the tray'),
            ('Why does Leila want the small excavator?', 'the cavity is narrow at the top'),
            ('What is the scaler for here?',
             'the calculus on the lingual surfaces'),
            ('What goes in the record?', 'the name, the surface and the reason')])},
   post=dict(kind='short', rubric='Write what Leila says in each situation.',
     example='She needs to see the floor of the cavity.  (Could I have the mirror, please?)',
     pairs=[('She needs to see the floor of the cavity.',
             'Could I have the mirror, please?'),
            ('She needs to feel whether the floor is hard.',
             'The probe, please, not the periodontal probe.'),
            ('The cavity is narrow at the top.',
             'The excavator, please. The small one.'),
            ('There is calculus on the lingual surfaces.', 'The scaler, please.'),
            ('The patient asks what the scaler is for.',
             'it takes off the hard material behind your lower teeth')]),
   point='You now know how to ask for an instrument with your hands full, and how to say '
         'the same thing three ways: to the nurse, to the patient and in the record.',
   ask='Why did Dr Rahman ask which probe she wanted?',
   icons=['probe', 'speech', 'pen', 'tick']),
],

speaking=[
 dict(title='Eight instruments, eight purposes',
   rubric='Name and explain all eight instruments to a partner, using both purpose '
          'patterns.',
   how='Student B has the preview page and marks you. Four of your sentences must use '
       'is used to and four must use is used for. Three minutes each, then swap.',
   conv=['Dr Petra Nilsen', 'Leila Mansour'],
   conv_lines=[('R', 'What is the excavator used for?'),
               ('L', 'For removing soft material from a cavity.'),
               ('R', 'And the periodontal probe?'),
               ('L', 'It is used to measure the depth round a tooth.'),
               ('R', 'Why is it blunt?'),
               ('L', 'So that it does not cut the tissue.')],
   model=[('Student', 'The mouth mirror is used to see surfaces you cannot look at '
                      'directly.'),
          ('Student', 'The probe is used for feeling the surface of a tooth.'),
          ('Student', 'A periodontal probe is used to measure depth, and it is blunt so '
                      'that it does not cut the tissue.'),
          ('Student', 'The excavator is used for removing soft material from a cavity.'),
          ('Student', 'Tweezers are used to carry small items into the mouth.'),
          ('Student', 'The handpiece is used for holding and turning a bur.')],
   frame=[['Change this', 'Keep this', 'Why'],
          ['the instrument you begin with', '… is used to … / … is used for …',
           'the two patterns are what is being marked'],
          ['the examples you give', 'so that …',
           'use it wherever the design needs explaining'],
          ['nothing in the plural', 'Tweezers are used …',
           'this is the one plural on the page']],
   checklist=['you used is used to four times and is used for four times',
              'you said tweezers are, not tweezers is',
              'you used so that at least once',
              'you named the surface each instrument reaches'],
   point='You can give the purpose of every instrument on a basic tray, in two patterns, '
         'without looking at a list.',
   icons=['book', 'probe', 'speech', 'tick']),

 dict(title='Asking with your hands full',
   rubric='Ask a partner for six instruments in a row, without pointing and without '
          'repeating a pattern.',
   how='Student B sits behind you and may only respond to what is said. Four minutes, '
       'then swap. The third time, use the tray of a procedure you have actually watched.',
   conv=['Dr Yusuf Rahman', 'Leila Mansour'],
   conv_lines=[('R', 'Could I have the mirror, please?'),
               ('L', 'Here it is.'),
               ('R', 'The probe next, not the periodontal probe.'),
               ('L', 'Which excavator?'),
               ('R', 'The small one. The cavity is narrow at the top.'),
               ('L', 'Here you are.')],
   model=[('Student', 'Could I have the mirror, please?'),
          ('Student', 'The probe next, please, not the periodontal probe.'),
          ('Student', 'The excavator, please. The small one.'),
          ('Student', 'The scaler, when you are ready.'),
          ('Student', 'Would you load the syringe for me?'),
          ('Student', 'And a cotton roll with the tweezers, please.')],
   cards=[dict(who='Student A', brief='the student at the chair. You may not point, and '
                                      'you may not say that one or the other one.'),
          dict(who='Student B', brief='the nurse, sitting behind. Hand over nothing until '
                                      'the request names an instrument.')],
   checklist=['every request named an instrument',
              'you distinguished the two probes',
              'you gave a reason wherever the choice was not obvious',
              'you did not point once'],
   point='You can run a tray by voice alone, which is the only way to run one once both '
         'your hands are in a mouth.',
   icons=['probe', 'person', 'speech', 'tick']),

 dict(title='The patient who asks what that one is for',
   rubric='Explain three instruments to a patient without naming any of them.',
   how='Student B is a patient who is nervous and asks about each instrument as it is '
       'picked up. Three minutes, then swap. Then say which of your explanations you '
       'would be willing to have the patient repeat to somebody else.',
   conv=['Leila Mansour', 'Thandiwe Mabaso'],
   conv_lines=[('R', 'What is that one for?'),
               ('L', 'This one lets me see behind the tooth.'),
               ('R', 'And the sharp one?'),
               ('L', 'It tells me whether the surface is hard or soft.'),
               ('R', 'It looks like it would hurt.'),
               ('L', 'It is only touching the outside of the tooth.')],
   model=[('Student', 'This one is a small mirror. It lets me see behind the tooth.'),
          ('Student', 'This one tells me whether the surface is hard or soft.'),
          ('Student', 'It only touches the outside, so you will feel a light pressure.'),
          ('Student', 'This last one takes off the hard material behind your lower teeth.'),
          ('Student', 'None of the three is the drill. I shall tell you before that comes '
                      'out.'),
          ('Student', 'Stop me at any point and I shall put all of them down.')],
   fig=F.conversation('“WHAT IS THAT ONE FOR?”',
     dict(name='You', role='the student', skin='3', hair='black', style='tied',
          tunic='teal'),
     dict(name='Your partner', role='the patient', skin='5', hair='black', style='long',
          tunic='plum'),
     [('R', 'What is that one for?'),
      ('L', 'This one lets me see behind the tooth.'),
      ('R', 'And the sharp one?'),
      ('L', 'It tells me whether the surface is hard or soft.'),
      ('R', 'It looks like it would hurt.'),
      ('L', 'It only touches the outside of the tooth.')],
     note='Three instruments explained, and not one of the eight names used.'),
   fig_cap='The same three instruments, explained to the person they are being used on.',
   checklist=['you named none of the eight instruments',
              'every explanation said what the patient would feel',
              'you said what was not going to happen next',
              'you offered to stop'],
   point='You can explain an instrument to the person it is being used on, which needs a '
         'different vocabulary from the one you have just learnt.',
   icons=['person', 'speech', 'mirror', 'tick']),
],

fluency=dict(
  title='The whole tray, three times',
  rubric='Go through a whole basic tray with three different partners.',
  how='Four minutes with the first, three with the second, two with the third. The same '
      'eight instruments each time. Nothing new is added; only the time changes.',
  content=['Name the instrument before you say anything about it.',
           'Give its purpose, using is used to or is used for.',
           'Name the surface or tissue it is designed to reach.',
           'Where the design needs explaining, add so that.',
           'Say which tray it belongs on: examination, treatment or both.',
           'End with the one instrument on the tray you have never held.'],
  words=['a mouth mirror', 'a probe', 'a periodontal probe', 'an excavator', 'tweezers',
         'a scaler', 'a handpiece', 'a syringe'],
  fig_title='THE SAME TRAY, IN FOUR MINUTES, THEN THREE, THEN TWO',
  point='You can go through a tray without searching for any of the eight names, which '
        'is what lets you talk and work at the same time.',
  ask='Which instrument still slowed you down on the third attempt?',
  icons=['probe', 'clock', 'mirror', 'tick']),

reading=[
 dict(title='Textbook: instruments and their purposes', genre='textbook page',
   pre=dict(rubric='Before you read, find these four things in the passage.',
     how='Two minutes. Do not read every sentence yet.',
     items=['the four purposes instruments are sorted by',
            'the pair of instruments most often confused',
            'why a periodontal probe is blunt',
            'what a hand instrument can do that a handpiece cannot']),
   fig=F.instrument_plate('THE EIGHT INSTRUMENTS OF A BASIC TRAY', [
     ('a mouth mirror', 'mirror', 'to see, and to hold the cheek away'),
     ('a probe', 'probe', 'to feel whether a surface is hard or soft'),
     ('a periodontal probe', 'perioprobe', 'to measure depth, blunt and marked'),
     ('an excavator', 'excavator', 'to remove soft material by hand'),
     ('a scaler', 'scaler', 'to remove calculus from a surface'),
     ('a handpiece', 'handpiece', 'to hold and turn a bur'),
     ('a syringe', 'syringe', 'to give a local anaesthetic'),
     ('tweezers', 'tweezers', 'to carry small items in and out')],
     note='Eight instruments. The second and the third are the pair most often confused.'),
   fig_cap='The eight instruments of a basic tray, with the purpose of each.',
   text=[
    'A dental tray looks crowded to a student and simple to a clinician. The difference '
    'is that the clinician sees purposes rather than objects. There are four of them: to '
    'see, to feel, to remove and to carry. A fifth may be added for instruments which '
    'deliver something into the tissue, such as a syringe.',
    'Two instruments serve the purpose of seeing, and only one of them is obvious. The '
    'mouth mirror is used to see surfaces which cannot be looked at directly, and that '
    'is most of them. It has a second use which is almost as important: the back of the '
    'mirror holds the cheek or the tongue away from the working area. A clinician who '
    'has only ever used a mirror for looking is using half of it.',
    'Two instruments serve the purpose of feeling, and these two are the pair students '
    'confuse most often. An ordinary probe is sharp, because it is used to feel whether a '
    'surface is hard or soft. A periodontal probe is blunt and marked in millimetres, '
    'because it is used to measure the depth of the space round a tooth. The design '
    'follows from the purpose in both cases. A sharp instrument under the gum would cut '
    'the tissue it was sent to measure.',
    'Three instruments serve the purpose of removing. The excavator is a small '
    'spoon-shaped hand instrument, used for taking soft material out of a cavity. The '
    'scaler has a sharp blade and is used for removing calculus from a surface. The '
    'handpiece holds and turns a bur, so that hard tissue can be cut.',
    'It is worth asking why a hand instrument survives at all beside a handpiece. The '
    'answer is control. An excavator removes only what is soft, because the clinician can '
    'feel the difference through the handle. A bur removes whatever it touches. In a deep '
    'cavity that distinction can be the difference between a filling and a root '
    'treatment.',
    'One instrument serves the purpose of carrying. Tweezers are used to take small items '
    'into and out of the mouth, and a cotton roll is the commonest of them. The name is a '
    'plural in English, and it takes a plural verb: tweezers are used, never tweezers is '
    'used.',
    'Three of the eight names record what the instrument does. A scaler scales, an '
    'excavator excavates and a probe probes. The rest record something less useful. '
    'A handpiece is named for the hand that holds it, and tweezers for their shape. Those '
    'are the names to learn by purpose, because the word itself will not help you.',
    'Finally, every instrument on the tray exists because of a surface. A mirror exists '
    'because a lingual surface cannot be seen directly. A periodontal probe exists '
    'because the space round a tooth cannot be measured by eye. Learn the tray as a set '
    'of answers to the problems the last unit described, and it stops being a list.'],
   source=('The account of basic dental instruments and their purposes follows standard '
           'dental reference works.',
           'General dental instrument and clinical reference works, 2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='How many purposes are named?  (four, or five with the syringe)',
     pairs=[('How many purposes are named first?', 'four'),
            ('What is the second use of a mouth mirror?',
             'to hold the cheek or tongue away'),
            ('Why is a periodontal probe blunt?',
             'a sharp instrument would cut the tissue'),
            ('Why does a hand excavator survive beside a handpiece?', 'control'),
            ('What does a bur remove?', 'whatever it touches'),
            ('How many of the eight names record what the instrument does?',
             'three')])},
   post=dict(kind='tf', rubric='True or false? If it is false, write the correction in '
                               'eight words or fewer.',
     how='Then say which of these statements your own clinic would put differently.',
     example='Tweezers takes a singular verb.  —  false — it takes a plural verb',
     bank=['the mirror', 'the probe', 'the excavator', 'the handpiece', 'tweezers'],
     bank_head='The five instruments these statements concern',
     pics=['a mouth mirror', 'a probe', 'an excavator', 'tweezers'],
     pairs=[('Tweezers takes a singular verb.', 'false — it takes a plural verb'),
            ('A mouth mirror has only one use.',
             'false — it also holds the cheek away'),
            ('An ordinary probe is blunt.', 'false — it is sharp'),
            ('An excavator removes only what is soft.', 'true'),
            ('A handpiece is named for what it does.',
             'false — it is named for the hand')]),
   point='A textbook sorts a tray by purpose, not by the look of the instruments. Four purposes are easier '
         'to carry than eight objects.',
   ask='Name the four purposes, and the instrument you would put in the fifth.',
   icons=['book', 'probe', 'mirror', 'tick']),

 dict(title='A case: the instrument that was asked for by shape', genre='written case',
   pre=dict(rubric='Before you read, decide what you expect.',
     how='Say your answer out loud, then read and compare.',
     items=['What can go wrong when an instrument is asked for by shape?',
            'Who is at fault when the wrong instrument is handed over?',
            'What would you change about how the request was made?']),
   fig=F.form_annotated('WHAT WAS ASKED FOR, AND WHAT WAS HANDED OVER',
     'CLINIC 2  ·  11 MAY',
     [('Asked for', 'the pointed one, for under the gum'),
      ('Handed over', 'an ordinary probe, sharp'),
      ('Should have been', 'a periodontal probe, blunt'),
      ('Result', 'the tissue bled; the measurement was abandoned'),
      ('Recorded as', 'wrong instrument selected; request not specific')],
     callouts=[(0, 'two instruments on the tray matched this description')],
     note='Five lines. Both people in the room were doing their best with the words they '
          'had.'),
   fig_cap='The request, the instrument handed over, and what followed.',
   text=[
    'A second-year student was examining the gingival condition of a lower left quadrant. '
    'She needed to measure the depth of the space round the first molar. Both her hands '
    'were occupied, and she asked the nurse for an instrument without looking up.',
    'What she said was: the pointed one, for under the gum. The nurse handed her an '
    'ordinary probe, which is pointed and sharp. The student used it under the gum. The '
    'tissue bled, the measurement could not be completed, and the appointment was ended '
    'early.',
    'Two instruments on that tray answered the description she gave. A probe is pointed. '
    'A periodontal probe is also pointed, in the sense that it is long and thin, but its '
    'tip is deliberately blunt. The request did not distinguish between them, and the '
    'nurse chose the one which is pointed in the ordinary sense of the word.',
    'It is tempting to treat this as the nurse’s error, and it was not. The nurse was '
    'handed a description, and she matched it to an instrument correctly. It is equally '
    'tempting to treat it as a gap in the student’s knowledge, and it was not that '
    'either. She knew what a periodontal probe was and what it was for. She had learnt '
    'both in her first year.',
    'The fault lay between the two of them, in the words. A description by shape is '
    'answered by whatever matches the shape. A request by name is answered by one '
    'instrument only, because a name is attached to a purpose and a purpose is unique on '
    'a tray. Had she said periodontal probe, nothing else on the tray could have been '
    'handed to her.',
    'There is a second lesson in the case, and it concerns the tray rather than the '
    'words. The two probes had been laid next to each other, as they usually are, '
    'because they are used one after the other. A tray laid in the order of use puts '
    'them side by side, and side by side they look much the same. A number of clinics '
    'separate them deliberately, with the periodontal probe at the far end of the tray. '
    'That is a small change, it costs nothing, and it means that a hand reaching for one '
    'of them cannot easily take the other.',
    'The clinic recorded the event as a wrong instrument selection, with the note that '
    'the request had not been specific. That is an accurate record and a useful one. It '
    'does not blame either person, and it names the thing that has to change.',
    'The habit that prevents this is not difficult. Ask for instruments by name, and '
    'where two instruments share part of a name, say which. The probe, not the '
    'periodontal probe takes two seconds. It is also exactly what a supervisor will ask '
    'you for if you say only the probe, so you may as well say it first.'],
   source=('The case is invented for teaching; the instruments and the distinction '
           'between them follow standard dental reference works.',
           'General dental instrument and clinical reference works, 2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='What was she trying to measure?  (the depth round the first molar)',
     pairs=[('What was she trying to measure?', 'the depth round the first molar'),
            ('What did she ask for?', 'the pointed one, for under the gum'),
            ('What was handed to her?', 'an ordinary probe'),
            ('What happened when she used it?', 'the tissue bled'),
            ('Whose error was it, according to the passage?', 'neither person’s'),
            ('What does the passage say prevents it?',
             'asking for instruments by name')])},
   post=dict(kind='short', rubric='Rewrite each request so that only one instrument '
                                  'could answer it.',
     example='“The pointed one, for under the gum.”  (The periodontal probe, please.)',
     pairs=[('“The pointed one, for under the gum.”', 'The periodontal probe, please.'),
            ('“The sharp one.”', 'The probe, not the periodontal probe.'),
            ('“The spoon-shaped one.”', 'The excavator, please.'),
            ('“The one for the hard stuff on the back of the teeth.”',
             'The scaler, please.'),
            ('“The one the bur goes in.”', 'The handpiece, please.')]),
   point='A description by shape is answered by whatever matches the shape. A name is '
         'answered by one instrument, because a name carries a purpose.',
   ask='Whose fault was this, and what exactly has to change?',
   icons=['probe', 'person', 'cross', 'pen']),

 dict(title='Procedure: laying and checking a tray', genre='procedure',
   pre=dict(rubric='Before you read, put these steps in the order you would expect.',
     how='Thirty seconds, in pencil. Then read and correct your order.',
     items=['read the plan for the appointment', 'lay the examination instruments',
            'add what the planned treatment needs', 'check the tray against the plan']),
   fig=F.step_sequence('LAYING A TRAY, AND CHECKING IT',
     ['Read the plan for the appointment before you touch an instrument.',
      'Lay the four examination instruments, always in the same order.',
      'Add what the planned treatment needs, and nothing else.',
      'Put the instruments in the order they will be used.',
      'Check each instrument is sterile and its tip is undamaged.',
      'Read the plan again and name each instrument against it.',
      'Say out loud anything the plan needs that is not on the tray.'],
     stop_points=[6],
     note='Seven steps. The sixth takes twenty seconds and is the one that catches the '
          'missing instrument.'),
   fig_cap='Laying a tray, with the checking step that makes the first five useful.',
   text=[
    'A tray is laid from a plan, not from habit. The plan says what the appointment is '
    'for, and the tray is the physical form of that plan. A tray laid from habit is a '
    'tray laid for the last patient.',
    'Begin by reading the plan. This takes a few seconds and it determines everything '
    'that follows. An examination needs four instruments. A filling needs those four and '
    'four or five more. A scaling needs the four and a scaler, and nothing that cuts.',
    'Lay the examination instruments first, and always in the same order. Most clinics '
    'work from left to right in the order of use: mirror, probe, periodontal probe, '
    'tweezers. The order is a convention and it does not matter which one you follow. '
    'Following the same one every time does matter, because it is what makes a gap '
    'visible at a glance.',
    'Add what the planned treatment needs, and nothing more. An instrument on a tray '
    'that the plan does not call for is not harmless. It has to be sterilised again '
    'whether it was used or not, and it suggests to the patient a procedure that is not '
    'going to happen.',
    'Arrange the instruments in the order they will be used, from the syringe at the '
    'beginning to the scaler at the end. A tray in the order of use can be worked through '
    'without looking, which matters when the clinician’s eyes are on the mouth.',
    'Check each instrument before the patient comes in. It must be sterile, and its tip '
    'must be undamaged. A bent probe gives a false reading, and a blunt scaler does not '
    'remove calculus; it polishes it.',
    'Now read the plan again, and name each instrument on the tray against it. This step '
    'takes about twenty seconds, and it is the step that catches the missing instrument. '
    'Anything the plan needs that is not on the tray should be said out loud, not '
    'quietly collected, so that the clinician knows before the patient is in the chair.',
    'One question comes up in every first clinical year: who lays the tray? In most '
    'clinics it is the nurse, working from the plan the clinician has written. In a '
    'teaching clinic it is often the student, which is the point of the exercise. Either '
    'way, the person who lays the tray is not always the person who uses it. That is why '
    'the last step is said out loud rather than kept in the head. A tray checked '
    'silently has been checked by one person, and a tray checked out loud has been '
    'checked by two.',
    'A tray laid this way takes three or four minutes. The checking step is the only part '
    'of it that cannot be hurried, and it is the first part that is dropped when a clinic '
    'is running late.'],
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='What is a tray laid from?  (the plan)',
     pairs=[('What is a tray laid from?', 'the plan'),
            ('How many instruments does an examination need?', 'four'),
            ('Why does the same order matter?', 'it makes a gap visible'),
            ('Why is a spare instrument not harmless?',
             'it has to be sterilised again'),
            ('What does a blunt scaler do to calculus?', 'it polishes it'),
            ('How long does the checking step take?', 'about twenty seconds')])},
   post=dict(kind='order', rubric='Put the seven steps of the procedure in order.',
     how='Then say which step is dropped first in a clinic you have seen.',
     example='Read the plan for the appointment.  —  1',
     bank=['the plan', 'the examination four', 'the treatment instruments',
           'the order of use', 'the condition of each tip', 'the check'],
     bank_head='The six things the seven steps between them establish',
     pics=['a mouth mirror', 'a probe', 'a handpiece', 'a scaler'],
     pairs=[('Read the plan for the appointment.', '1'),
            ('Lay the four examination instruments.', '2'),
            ('Add what the planned treatment needs.', '3'),
            ('Put the instruments in the order of use.', '4'),
            ('Check each instrument is sterile and undamaged.', '5'),
            ('Read the plan again and name each instrument against it.', '6'),
            ('Say out loud anything that is missing.', '7')]),
   point='A tray is a plan made physical. The checking step is what turns a set of '
         'instruments back into the plan it came from.',
   ask='Which step would you drop first when you are late, and what would it cost?',
   icons=['tray', 'probe', 'pen', 'tick']),
],

writing=[
 dict(title='Eight purposes, in the textbook pattern',
   rubric='Write one sentence for each of the eight instruments, giving its purpose.',
   how='Four sentences must use is used to and four must use is used for.',
   fig=F.mini_table('THE TWO PATTERNS, AND WHERE EACH GOES',
     ['Pattern', 'What follows it'],
     [['is used to', 'a plain verb: feel, see, remove'],
      ['is used for', 'a verb in -ing: feeling, seeing, removing'],
      ['so that', 'a clause explaining the design'],
      ['Tweezers are …', 'the one plural on the page']], highlight=[4]),
   fig_cap='The two purpose patterns, with the plural that catches everybody once.',
   scaffold=['The mouth mirror is used to …', 'The probe is used for …',
             'A periodontal probe is used to …', 'The excavator is used for …',
             'Tweezers are used to …', 'The scaler is used for …',
             'The handpiece is used to …', 'The syringe is used for …'],
   model=['The mouth mirror is used to see surfaces which cannot be looked at directly.',
          'The probe is used for feeling whether a surface is hard or soft.',
          'A periodontal probe is used to measure the depth round a tooth.',
          'The excavator is used for removing soft material from a cavity.',
          'Tweezers are used to carry small items into the mouth.',
          'The scaler is used for removing calculus from a surface.',
          'The handpiece is used to hold and turn a bur.',
          'The syringe is used for giving a local anaesthetic.'],
   checklist=['four sentences use is used to and four use is used for',
              'every verb after for ends in -ing',
              'tweezers takes a plural verb',
              'no sentence describes a shape'],
   point='You can write the purpose of every instrument on a basic tray, in both '
         'patterns, without a list in front of you.',
   icons=['pen', 'book', 'probe', 'tick']),

 dict(title='A tray laid for a named procedure',
   rubric='Write the tray for one procedure: the instruments, in order of use, with a '
          'reason for each.',
   how='Choose a filling, a scaling or an examination. Six lines.',
   fig=F.form_annotated('WHAT EACH LINE OF A TRAY LIST CARRIES',
     'TRAY LIST  ·  THE THREE PARTS',
     [('The instrument', 'named, never described'),
      ('Its place in the order', 'first, next, last'),
      ('The reason it is there', 'from the plan, not from habit'),
      ('The last line', 'anything the plan needs that is missing'),
      ('Laid by', 'the person who laid it, so a question has somebody to go to')],
     callouts=[(3, 'a tray with nothing missing still says so')],
     note='Five requirements. The fourth is the one a tray laid from habit cannot meet.'),
   fig_cap='The parts of a tray list, and the line that proves it was checked.',
   scaffold=['Procedure:', 'First:', 'Next:', 'Then:', 'Last:', 'Missing:'],
   model=['Procedure: filling, lower left six, occlusal surface.',
          'First: the syringe, loaded, for the local anaesthetic.',
          'Next: mirror, probe and tweezers, for checking before cutting.',
          'Then: the handpiece with a small bur, for cutting the enamel.',
          'Last: the excavator, for any soft material the bur should not take.',
          'Missing: nothing. Tray checked against the plan by L. Mansour.'],
   checklist=['every instrument is named and not described',
              'the order is the order of use',
              'every line gives a reason from the plan',
              'the last line says what is missing, even when nothing is'],
   point='You can lay a tray on paper, which is the same exercise as laying one on a '
         'bracket table and easier to correct.',
   icons=['tray', 'pen', 'probe', 'tick']),

 dict(title='A paragraph explaining one instrument to two readers',
   rubric='Write two short paragraphs about the same instrument: one for a colleague and '
          'one for a patient.',
   how='Choose the periodontal probe or the scaler. Four sentences each.',
   fig=F.mini_table('THE SAME INSTRUMENT, TWO PARAGRAPHS',
     ['For a colleague', 'For a patient'],
     [['the name', 'no name at all'],
      ['the purpose, in a purpose pattern', 'what you will feel'],
      ['why the design is as it is', 'how long it will take'],
      ['the surface it reaches', 'what it is not']]),
   fig_cap='Four things each paragraph has to do, and no overlap between the columns.',
   scaffold=['FOR A COLLEAGUE. The …', 'It is used to …', 'It is … so that …',
             'It reaches …', 'FOR A PATIENT. This one …', 'You will feel …',
             'It takes about …', 'It is not …'],
   model=['FOR A COLLEAGUE. The periodontal probe is blunt and marked in millimetres.',
          'It is used to measure the depth of the space round a tooth.',
          'It is blunt so that it does not cut the tissue it has been sent to measure.',
          'It reaches the space between the gingiva and the root, which no other '
          'instrument on the tray can enter.',
          'FOR A PATIENT. This one has a soft rounded end and three small marks on it.',
          'You will feel it resting against your gum, and it should not be sore.',
          'It takes about a minute for all the teeth in one quadrant.',
          'It is not the one that cuts, and nothing is being removed.'],
   checklist=['the colleague paragraph names the instrument and the patient paragraph '
              'does not',
              'the colleague paragraph explains the design with so that',
              'the patient paragraph says what will be felt',
              'the patient paragraph says what the instrument is not'],
   point='You can write about one instrument twice without saying anything untrue in '
         'either version.',
   icons=['pen', 'probe', 'person', 'tick']),
],

cases_intro='Three cases from a first clinical year. Each of them can be answered in '
            'more than one defensible way. Work in threes, give a reason for every '
            'position you take, and name the instruments while you take it.',
cases=[
 dict(tier='A', title='The blunt tip nobody checked',
  situation=['Leila lays a tray for a periodontal examination. The periodontal probe on '
             'it has a slightly bent tip, which she notices and decides is close enough.',
             'The depths she records are consistently about a millimetre less than the '
             'depths her supervisor finds at the next appointment with a straight probe.'],
  who=['Leila Mansour', 'Dr Yusuf Rahman'],
  facts=['The tip of the probe was bent, and she could see it.',
         'The student noticed it and used the probe anyway.',
         'Her readings were about a millimetre low throughout.',
         'A straight probe gave different readings a week later.'],
  question='What should be done about the readings already in the record?',
  questions=['What exactly is wrong with a reading from a bent probe?',
             'What should happen to the earlier readings: correction, a note beside them, or a '
             'second measurement?',
             'What would you write, and where?'],
  words=['a periodontal probe', 'a probe', 'a tip', 'blunt', 'a mouth mirror'],
  language=[('Recording an unreliable measurement',
             ['The readings of 11 May were taken with a bent probe.',
              'They are likely to be about a millimetre low.',
              'Repeated on 18 May with a straight instrument.']),
            ('Saying it to a supervisor',
             ['I noticed the tip and used it anyway.',
              'I should have asked for another one.'])],
  how='In threes. Eight minutes. One of you writes the line that goes in the record.',
  point='You can say what a damaged instrument does to a measurement, and write a line '
        'that leaves the record usable.',
  ask='Read out the record line your group would write.',
  note='Repeating every reading is one answer; a note beside them is another. Say what '
       'each costs.',
  icons=['probe', 'pen', 'cross', 'tick'],
  guidance=('Reference practice', 'Instruments are checked for damage before use, and '
            'measurements from a damaged instrument are recorded as unreliable',
            'General dental instrument and record-keeping reference works, 2025–2026.')),

 dict(tier='C', title='The tray with one instrument too many',
  situation=['A nurse lays a treatment tray and includes a handpiece, because the last '
             'four patients in that chair all needed one. Today’s plan is a scaling only.',
             'The patient sees the handpiece, asks whether she is going to be drilled, '
             'and becomes difficult to settle for the rest of the appointment.'],
  who=['Mei-Ling Chen', 'Thandiwe Mabaso'],
  facts=['The plan called for a scaling and nothing that cuts.',
         'A handpiece was on the tray.',
         'The patient saw it and asked about it.',
         'The appointment took longer than it was booked for.'],
  question='Whose fault is the extra instrument, and what do you say to the patient?',
  questions=['Why does an unnecessary instrument on a tray matter at all?',
             'What do you say to the patient in the next ten seconds?',
             'What would you change about how the tray is laid?'],
  words=['a handpiece', 'a scaler', 'a mouth mirror', 'to lay a tray', 'a probe'],
  language=[('Answering the patient',
             ['That one is not for you today.',
              'I am going to put it away now.',
              'Nothing today will cut anything.']),
            ('Agreeing a change with a colleague',
             ['Lay only what the plan calls for.',
              'If you are not sure, ask me before the patient comes in.'])],
  how='In threes. Eight minutes. Write the sentence you would say to the patient.',
  point='You can explain why a tray is laid from a plan rather than from habit, and '
        'repair the damage when it is not.',
  ask='Say the sentence your group would say to the patient, word for word.',
  note='Leaving the instrument where it is, and explaining it, is also defensible. Say '
       'what that protects.',
  icons=['tray', 'person', 'speech', 'cross']),

 dict(tier='C', title='Two names for the same instrument',
  situation=['Daniel has learnt the sharp instrument used to feel a surface as an '
             'explorer, from a textbook published in one country. The clinic he is now '
             'in calls the same instrument a probe.',
             'He uses both words in the same written case, and a marker asks him which '
             'instrument he actually used.'],
  who=['Dr Petra Nilsen', 'Daniel Owusu'],
  facts=['Explorer and probe name the same instrument in this clinic.',
         'Both names appear in published reference works.',
         'He used both words in one piece of writing.',
         'The marker could not tell whether one or two instruments were meant.'],
  question='Which name should he use, and what should he do about the writing he has '
           'already submitted?',
  questions=['Why is using two names for one instrument worse than using the less usual '
             'name?',
             'How would you decide which name to use in a new clinic?',
             'What would you write at the head of the case to settle it?'],
  words=['a probe', 'a periodontal probe', 'a tip', 'a mouth mirror', 'a scaler'],
  language=[('Settling a term in writing',
             ['In this case, probe means the sharp hand instrument.',
              'The terms probe and explorer are used for the same instrument.']),
            ('Asking in a new clinic',
             ['What do you call this one here?',
              'I have learnt it as an explorer.'])],
  how='In threes. Eight minutes. Write the one line you would put at the head of the '
      'case.',
  point='You can settle a term for a piece of writing, which is a different thing from '
        'deciding which term is right.',
  ask='Read out the line your group would put at the head of the case.',
  note='Keeping his own term throughout is defensible too. Say what it would require of '
       'him.',
  icons=['book', 'probe', 'pen', 'speech']),
],

review_intro='Five activities, one for each skill, and one that brings back Units 1 to 4. '
             'Nothing in this part repeats a task you have already done. Thirty minutes.',
review=[
 dict(skill='reading', title='A tray described in prose',
   kind='gap', rubric='Complete the paragraph with the eight instruments. Each is used '
                      'once.',
   how='Then say which sentence could not have been written without Unit 4.',
   example='The mirror is used to see the lingual surface.',
   bank=['a mouth mirror', 'a probe', 'a periodontal probe', 'an excavator', 'tweezers',
         'a scaler', 'a handpiece', 'a syringe'],
   bank_head='The eight instruments, each used once',
   pics=['a mouth mirror', 'a probe', 'a scaler', 'a handpiece'],
   pairs=[('The lingual surface of a lower molar is seen with a ____________.',
           'mouth mirror'),
          ('Whether its occlusal surface is hard is felt with a ____________.', 'probe'),
          ('The depth round its root is measured with a ____________.',
           'periodontal probe'),
          ('Soft material in the cavity is removed with an ____________.', 'excavator'),
          ('A cotton roll is carried in with ____________.', 'tweezers'),
          ('Calculus on the lingual surface is removed with a ____________.', 'scaler'),
          ('The enamel is cut with a bur in a ____________.', 'handpiece'),
          ('The anaesthetic is given with a ____________.', 'syringe')],
   fig=F.tooth_section('THE TOOTH THIS PARAGRAPH DESCRIBES',
     labels=['occlusal', 'lingual', 'buccal', 'root'],
     caption_terms=['occlusal', 'lingual', 'buccal', 'root']),
   fig_cap='The tooth the paragraph works over, with the surfaces each instrument reaches.'),

 dict(skill='listening', title='Four things from 5.1 you were not asked about',
   kind='choice', rubric='Listen to 5.1 once more and circle a, b or c.',
   how='These are not the questions you answered in part 5. One listening is enough.',
   example='The lecture names   a) four purposes   b) eight.   Answer: a',
   bank=['the fifth purpose', 'the shape names', 'the pair', 'the surfaces'],
   bank_head='The four small points to listen for this time',
   pics=['a syringe', 'tweezers', 'a probe', 'a mouth mirror'],
   pairs=[('The fifth purpose Dr Nilsen allows is   a) to measure   b) to deliver '
           'something into the tissue   c) to polish', 'b'),
          ('Tweezers are named for   a) their purpose   b) their shape   '
           'c) their size', 'b'),
          ('The lecture says the design follows from   a) the purpose   b) the material   '
           'c) the cost', 'a'),
          ('The lecture ends by connecting the tray to   a) the surfaces   b) the '
           'tissues   c) the notation', 'a')],
   fig=F.mini_table('WHAT YOU ARE LISTENING FOR THIS TIME',
     ['Not this', 'But this'],
     [['the eight names', 'the purpose the lecture adds to the four'],
      ['the four purposes', 'which names record something other than a purpose'],
      ['the pair of probes', 'what the lecture says the whole tray answers to']]),
   fig_cap='The same lecture, listened to for what it adds rather than what it lists.'),

 dict(skill='speaking', title='The nurse who hands you the wrong one',
   rubric='Work through a request that is answered with the wrong instrument.',
   how='Student B deliberately hands over the other probe twice. Student A must correct '
       'it without stopping the treatment. Four minutes, then swap.',
   model=[('Student', 'The probe, please.'),
          ('Nurse', '(hands over the periodontal probe)'),
          ('Student', 'Thank you. I need the sharp one, for the occlusal surface.'),
          ('Nurse', '(hands over the ordinary probe)'),
          ('Student', 'That is the one. Next time I shall say which.'),
          ('Nurse', 'And I shall ask if there are two that fit.')],
   checklist=['you corrected the instrument without blaming anybody',
              'you said the purpose, which identifies the instrument',
              'you did not stop what you were doing',
              'you said what you would change in your own request'],
   fig=F.conversation('“THE PROBE, PLEASE.”',
     dict(name='You', role='the student', skin='3', hair='black', style='tied',
          tunic='teal'),
     dict(name='Your partner', role='the nurse', skin='2', hair='black', style='short',
          tunic='blue'),
     [('L', 'The probe, please.'),
      ('R', '(hands over the periodontal probe)'),
      ('L', 'Thank you. The sharp one, for the occlusal surface.'),
      ('R', '(hands over the ordinary probe)'),
      ('L', 'That is the one. Next time I shall say which.'),
      ('R', 'And I shall ask if two of them fit.')],
     note='The purpose is what identifies the instrument when the name is not enough.'),
   fig_cap='The exchange that repairs an ambiguous request without stopping the work.'),

 dict(skill='writing', title='A tray for a procedure you have not laid before',
   rubric='Write the tray for an extraction, from the instruments you know and the ones '
          'you do not.',
   how='Not the tray you wrote in part 8. Here you will have to name what is missing from '
       'your own vocabulary, in plain words, and say what you would ask.',
   model=['Procedure: extraction, lower left eight.',
          'First: the syringe, loaded, for the local anaesthetic.',
          'Next: mirror, probe and tweezers, for checking the tooth and the tissue.',
          'Then: an instrument for lifting the tooth in its socket, which I know as an '
          'elevator.',
          'Then: an instrument for gripping and removing the tooth, which I know as '
          'forceps; I do not know which pattern of forceps this tooth needs.',
          'Missing: I should ask the supervisor which forceps, before the patient comes '
          'in.'],
   scaffold=['Procedure:', 'First:', 'Next:', 'Then:', 'Then:', 'Missing:'],
   checklist=['every instrument you know is named',
              'every instrument you do not know is described by its purpose',
              'you said plainly what you do not know',
              'the last line is a question you will actually ask'],
   fig=F.instrument_plate('TWO INSTRUMENTS THIS UNIT HAS NOT TAUGHT YOU', [
     ('an elevator', 'elevator', 'to lift a tooth in its socket'),
     ('forceps', 'forceps', 'to grip and remove a tooth')],
     note='Two instruments, given here only so that you can name what you do not yet '
          'know how to choose.'),
   fig_cap='The two instruments the task asks you to describe rather than select.'),

 dict(skill='reading', title='Units 1 to 5: instrument, surface, or tissue?',
   kind='sort', rubric='Write I for an instrument, S for a surface and T for a tissue.',
   columns=('I', 'S', 'T'),
   how='Four of these come from earlier units. Then find the one item that your group '
       'disagrees about, and say why it is hard to place.',
   example='a scaler  —  I',
   bank=['an instrument', 'a surface', 'a tissue'],
   bank_head='The three classes everything in five units falls into',
   pics=['a scaler', 'a probe', 'a mouth mirror', 'an excavator'],
   pairs=[('a scaler', 'I'), ('occlusal', 'S'), ('enamel', 'T'),
          ('a periodontal probe', 'I'), ('palatal', 'S'), ('the gingiva', 'T')],
   fig=F.contrast('THREE KINDS OF THING IN FIVE UNITS',
     'YOU CAN HOLD IT', ['a mouth mirror', 'a probe', 'a scaler', 'a handpiece'],
     'YOU CANNOT', ['occlusal', 'palatal', 'enamel', 'the gingiva'],
     'An instrument is chosen.',
     'A surface is named and a tissue is found.'),
   fig_cap='The distinction that now runs through all five units, with the tray in it.'),
],
end_fig_title='EIGHT INSTRUMENTS, FOUR PURPOSES',
end_fig_steps=['To see: the mouth mirror, which also holds the cheek away.',
               'To feel: the probe, sharp, for a surface.',
               'To measure: the periodontal probe, blunt, for a depth.',
               'To remove by hand: the excavator and the scaler.',
               'To cut: the handpiece, which holds and turns a bur.',
               'To carry and to deliver: tweezers and the syringe.'],
end_fig_note='Six lines for eight instruments. Learn the purposes and the names follow.',
end_fig_cap='The whole of Unit 5 on one page.',

p1_recap=['You have counted the instruments on an examination tray and said which of '
          'them you have held.',
          'You have seen the four purposes a tray sorts into, and the three instruments '
          'an examination actually needs.'],
p1_ask='Which instrument in your own clinic have you never been allowed to hold?',
p1_icons=['probe', 'mirror', 'tray', 'brush'],
p2_recap=['Eight instruments you can now name: a mouth mirror, a probe, a periodontal '
          'probe, an excavator, tweezers, a scaler, a handpiece and a syringe.',
          'Four groups of sentences: purpose with to, purpose with for, the reason behind '
          'a design, and asking for an instrument.',
          'One trap to remember: tweezers are used, never tweezers is used.'],
p2_ask='Which two of the eight have almost the same name and opposite tips?',
p3_recap=['You have moved from recognising these eight names to choosing between them '
          'while both of your hands are busy.',
          'All eight appear in the lecture in part 5. Say them out loud before you '
          'listen.'],
p3_ask='Name three instruments and their purposes, without looking at the page.',
p3_icons=['probe', 'mirror', 'speech', 'tick'],
p4_recap=['The probe is used to feel a surface, and the excavator is used for removing '
          'soft caries: two patterns for one purpose.',
          'So that explains a design rather than a use, which is what a blunt tip needs.'],
p4_ask='Give one purpose with to, one with for, and one design with so that.',
p10_recap=['You can name the eight instruments of a basic tray and give the purpose of '
           'each in two patterns.',
           'You can ask for an instrument by name with your hands full, lay a tray from a '
           'plan, and explain an instrument to the patient it is being used on.',
           'Unit 6 puts all five units in one sentence: the tooth, the surface, the '
           'tissue and the instrument, said while you are working.'],
p10_ask='Go through a whole tray with the person next to you, with the book closed.',
)
