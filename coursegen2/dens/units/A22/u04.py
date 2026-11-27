# -*- coding: utf-8 -*-
import figs2 as F

U = dict(
num=4,
title='Surfaces, and How We Name Them',
level='A2.2',
strap='CEFR A2.2  ·  Grammar: naming by direction: faces, towards, away from, is called  '
      '·  Eight adjectives that tell a colleague exactly where you were looking',
threads={'domain': ['surfaces', 'direction', 'the contact point'],
         'function': ['naming', 'defining by position', 'locating']},
can_do=['name any surface of any tooth, in the upper or the lower arch',
        'define each surface by what it faces, not by where it looks to you',
        'say why the same inner surface has two different names',
        'describe where a lesion lies, using two words instead of a sentence',
        'read and write the short forms a chart uses for surfaces'],
recycles='Unit 1 (the parts of the mouth), Unit 2 (quadrants, the midline and notation) '
         'and Unit 3 (the tissues of the tooth)',
prepares='Unit 5, where the instruments on the tray are named by the surface each of '
         'them is designed to reach',

warm=['How many surfaces does a molar have, and how many of them can you see?',
      'Which surface of a tooth is hardest to examine, and why?',
      'What do you call the inner surface of an upper tooth in your own language?'],
warm_fig=F.dentition_map('THE MIDLINE, AND WHAT EVERY SURFACE NAME IS MEASURED FROM',
    highlight=['16', '11', '21', '26'],
    note='Mesial and distal mean nothing until the midline is fixed. '
         'Everything in this unit is measured from that broken line.'),
warm_fig_cap='The permanent dentition, with the midline that every surface name depends on.',
warm_fig_alt='A chart of the permanent dentition in FDI notation with a broken vertical '
             'line down the midline, and four teeth shaded to show how distance from the '
             'midline changes which surface is called mesial.',
warm_fig2=F.icon_cards('FIVE SURFACES, AND HOW MANY YOU CAN SEE',
    [('you can see it', 'mirror'), ('only with a mirror', 'light'),
     ('only on a radiograph', 'xray'), ('only when the tooth is out', 'tooth')], cols=4,
    note='A molar has five named surfaces. On an ordinary examination you look directly '
         'at one of them.'),
warm_fig2_cap='The five surfaces of a molar, sorted by how you reach each of them.',
p1_cards=['mesial', 'distal', 'buccal', 'occlusal', 'incisal', 'interproximal'],

preview_intro='This unit has eight adjectives and ten sentences. Read this page before '
              'you do anything else, and say each term out loud with the surface it '
              'names. Every task in the unit uses these eight, and so does every chart '
              'you will ever read.',
set_fig_title='THE EIGHT SURFACE TERMS OF UNIT 4',
set_fig_cap='The eight terms you will be able to use, in speech and in writing, by the '
            'end of this unit.',
set=[
 dict(term='mesial', pos='adjective', thread='domain',
      definition='facing towards the midline, along the curve of the arch',
      example='The lesion lies on the mesial surface of the first molar.',
      collocation='the mesial surface  ·  mesial to the canine', recycle=[4, 5, 7, 9]),
 dict(term='distal', pos='adjective', thread='domain',
      definition='facing away from the midline, along the curve of the arch',
      example='The distal surface of the second molar is difficult to reach.',
      collocation='the distal surface  ·  distal to the midline', recycle=[4, 5, 7, 9]),
 dict(term='buccal', pos='adjective', thread='domain',
      definition='facing the cheek',
      example='There is a small cavity on the buccal surface.',
      collocation='the buccal surface  ·  buccally', recycle=[4, 6, 7]),
 dict(term='lingual', pos='adjective', thread='domain',
      definition='facing the tongue',
      example='The lingual surface of a lower molar is hard to see directly.',
      collocation='the lingual surface  ·  lingually', recycle=[4, 6, 7]),
 dict(term='palatal', pos='adjective', thread='domain',
      definition='facing the palate; used only of upper teeth',
      example='Upper teeth have a palatal surface, not a lingual one.',
      collocation='the palatal surface  ·  palatally', recycle=[4, 6, 9]),
 dict(term='occlusal', pos='adjective', thread='domain',
      definition='the biting surface of a premolar or a molar',
      example='The filling is on the occlusal surface of the upper left six.',
      collocation='the occlusal surface  ·  occlusal caries', recycle=[4, 5, 8]),
 dict(term='incisal', pos='adjective', thread='domain',
      definition='the biting edge of an incisor or a canine',
      example='The incisal edge of the central incisor is worn.',
      collocation='the incisal edge  ·  incisally', recycle=[4, 5, 8]),
 dict(term='interproximal', pos='adjective', thread='domain',
      definition='between two neighbouring teeth, where their surfaces meet',
      example='Interproximal caries is often found on a radiograph first.',
      collocation='the interproximal area  ·  interproximal caries', recycle=[4, 7, 9]),
],
set_note='Learn these eight. Every other term in this unit is built out of them.',

phrase_fig_title='TEN SENTENCES FOR NAMING A SURFACE',
phrases=[
 ('Defining by what a surface faces',
  ['The surface which faces the cheek is called the buccal surface.',
   'The surface which faces the tongue is called the lingual surface.']),
 ('Measuring from the midline',
  ['Mesial means facing towards the midline.',
   'Distal means facing away from the midline.']),
 ('Upper and lower',
  ['In the upper arch the inner surface faces the palate, so we call it palatal.',
   'In the lower arch the inner surface faces the tongue, so we call it lingual.']),
 ('Biting surfaces, and the space between teeth',
  ['A premolar or a molar has an occlusal surface.',
   'An incisor has an incisal edge rather than a surface.',
   'The interproximal area lies between two neighbouring teeth.',
   'Caries often begins at the contact point, where you cannot see it.']),
],
phrase_fig_cap='Ten sentences, in four groups. The third group is the one that is most '
               'often got wrong.',
phrase_note='Say the second group out loud until it is automatic. Mesial and distal are '
            'the two terms a colleague will question you about.',

receptive=[
 dict(term='labial', definition='facing the lip; used of the front teeth',
      example='The labial surface of an upper incisor is the one a patient can see.'),
 dict(term='anterior', definition='at the front of the arch: incisors and canines',
      example='The anterior teeth have incisal edges.'),
 dict(term='posterior', definition='at the back of the arch: premolars and molars',
      example='The posterior teeth have occlusal surfaces.'),
 dict(term='a contact point', definition='the place where two neighbouring teeth touch',
      example='The contact point is below the level you can inspect.'),
 dict(term='a neighbouring tooth',
      definition='the tooth immediately next to the one you are describing',
      example='The mesial surface faces the neighbouring tooth.'),
 dict(term='to abbreviate', definition='to shorten a word to its first letters',
      example='Charts abbreviate occlusal to O and mesial to M.'),
],
receptive_fig_title='TERMS TO RECOGNISE IN UNIT 4',
receptive_fig_cap='You will meet these six in the readings and in the lecture. You are '
                  'not asked to produce them yet.',

preview_task=dict(kind='match', rubric='Match each term with the surface it names.',
  example='buccal  —  facing the cheek',
  how='Cover the preview page first. Then check your answers against it.',
  pairs=[('mesial', 'facing towards the midline'),
         ('distal', 'facing away from the midline'),
         ('buccal', 'facing the cheek'),
         ('palatal', 'facing the palate, on an upper tooth'),
         ('occlusal', 'the biting surface of a premolar or a molar'),
         ('interproximal', 'between two neighbouring teeth')]),

vocab_tasks=[
 dict(kind='gap', rubric='Complete each definition with one of the eight terms.',
   example='The surface which faces the cheek is the buccal surface.',
   pairs=[('The surface which faces the cheek is the ____________ surface.', 'buccal'),
          ('The surface which faces the tongue is the ____________ surface.', 'lingual'),
          ('The surface which faces towards the midline is the ____________ surface.',
           'mesial'),
          ('The surface which faces away from the midline is the ____________ surface.',
           'distal'),
          ('The biting surface of a molar is the ____________ surface.', 'occlusal'),
          ('The biting edge of an incisor is the ____________ edge.', 'incisal'),
          ('On an upper tooth the inner surface is the ____________ surface.', 'palatal'),
          ('The area between two neighbouring teeth is the ____________ area.',
           'interproximal')],
   fig=F.morph_builder('FOUR MORE TERMS FROM THE PARTS YOU NOW HAVE',
     [('', 'buccal', '-ly', 'buccally', 'towards the cheek, as a direction of movement'),
      ('', 'mesi', '-ally', 'mesially', 'towards the midline, as a direction'),
      ('inter-', 'proxim', '-al', 'interproximal', 'between two touching surfaces'),
      ('', 'occlus', '-ion', 'occlusion', 'the way the upper and lower teeth meet')],
     note='Three of these four have not been taught to you. You can read all four.'),
   fig_cap='Four further terms built from the parts of the eight you have learnt.'),

 dict(kind='odd', rubric='Three of the four belong to one class. Circle the one that '
                         'does not, and name the class the three share.',
   how='Name the class out loud before you name the odd one out.',
   example='mesial / distal / buccal / enamel  —  enamel is a tissue, not a direction',
   bank=['a direction from the midline', 'a surface named by what it faces',
         'a biting surface', 'a space between teeth'],
   bank_head='The four classes these terms fall into',
   pics=['mesial', 'buccal', 'occlusal', 'interproximal'],
   pairs=[('mesial / distal / buccal / enamel', 'enamel'),
          ('buccal / lingual / palatal / occlusal', 'occlusal'),
          ('occlusal / incisal / interproximal / biting', 'interproximal'),
          ('mesial / distal / anterior / dentine', 'dentine'),
          ('palatal / lingual / labial / cervical', 'cervical')]),

 dict(kind='short', rubric='Name the surface. Give the term, and say what it faces.',
   example='the outer surface of a lower molar  (buccal, because it faces the cheek)',
   pairs=[('the outer surface of a lower molar',
           'buccal, because it faces the cheek'),
          ('the inner surface of an upper molar',
           'palatal, because it faces the palate'),
          ('the inner surface of a lower molar',
           'lingual, because it faces the tongue'),
          ('the surface of an upper right six nearest the midline',
           'mesial, because it faces towards the midline'),
          ('the biting edge of a lower central incisor',
           'incisal, because an incisor has an edge rather than a surface')],
   fig=F.tooth_section('ONE TOOTH, FIVE NAMED SURFACES',
     labels=['buccal', 'lingual', 'occlusal', 'mesial', 'distal'],
     caption_terms=['buccal', 'lingual', 'occlusal', 'mesial', 'distal']),
   fig_cap='A lower molar in section, with the five surfaces that have names.'),

 dict(kind='sort', rubric='Write U for a term used only of upper teeth, L for one used '
                          'only of lower teeth, and B for one used of both.',
   columns=('U', 'L', 'B'),
   how='Then say which pair of terms your own textbook uses interchangeably, and whether '
       'you think it should.',
   example='palatal  —  U',
   bank=['upper only', 'lower only', 'both arches'],
   bank_head='The three groups these terms fall into',
   pics=['palatal', 'lingual', 'buccal', 'occlusal'],
   pairs=[('palatal', 'U'), ('lingual', 'B'), ('buccal', 'B'),
          ('occlusal', 'B'), ('incisal', 'B'), ('mesial', 'B')],
   fig=F.contrast('THE ONE SURFACE WITH TWO NAMES',
     'UPPER ARCH', ['the inner surface faces the palate',
                    'so it is called palatal',
                    'lingual is not used of upper teeth in most textbooks'],
     'LOWER ARCH', ['the inner surface faces the tongue',
                    'so it is called lingual',
                    'palatal cannot be used, because there is no palate below'],
     'One structure, one name.', 'One structure, one name, but a different one.'),
   fig_cap='Why the same anatomical surface carries two names, and when each is correct.'),
],

g_point='naming by direction: faces, towards, away from, is called',
g_source='the ten sentences on the preview page',
g_rule=['The surface which faces the cheek is called the buccal surface. A relative '
        'clause with which or that says what a surface faces, and the passive is called '
        'gives it its name. This is the standard pattern of a definition in anatomy.',
        'Mesial means facing towards the midline, and distal means facing away from it. '
        'Towards and away from are measured along the curve of the arch, not in a '
        'straight line across the mouth.',
        'An incisor has an incisal edge rather than an occlusal surface. Rather than '
        'corrects an expected word, and it is the form an examiner uses when a '
        'student has named the wrong class of surface.'],
g_mnemonic_title='THREE PATTERNS THAT DEFINE A SURFACE',
g_mnemonic=[
 ('which faces', 'names what the surface looks at',
  'The surface which faces the tongue …', 'tooth'),
 ('is called', 'gives the term its name',
  '… is called the lingual surface.', 'book'),
 ('rather than', 'corrects the expected word',
  'an incisal edge rather than a surface', 'pen'),
],
g_mnemonic_cap='Three patterns. Together they produce every definition in this unit.',
g_mnemonic_note='The third pattern is the one you need in a tutorial, when your first '
                'answer was nearly right.',
g_fig=('TWO WAYS TO LOCATE THE SAME LESION',
       'LOCATED BY DESCRIPTION',
       ['It is on the side of the back tooth, towards the front,',
        'the one near the cheek, you know the one,',
        'about halfway up, where it touches the next tooth.'],
       'LOCATED BY SURFACE',
       ['Upper left six, mesial surface,',
        'at the contact point,',
        'extending slightly buccally.'],
       'Twenty-six words, and a colleague who still has to look.',
       'Eleven words, and a colleague who can find it without you.'),
g_fig_cap='The same lesion, described two ways. Only one of them can be written on a chart.',
g_tasks=[
 dict(kind='gap', rubric='Complete each sentence with faces, towards, away or called.',
   example='The buccal surface faces the cheek.',
   pairs=[('The buccal surface ____________ the cheek.', 'faces'),
          ('Mesial means facing ____________ the midline.', 'towards'),
          ('Distal means facing ____________ from the midline.', 'away'),
          ('The surface which faces the palate is ____________ palatal.', 'called'),
          ('The lingual surface ____________ the tongue.', 'faces'),
          ('An edge rather than a surface is ____________ incisal.', 'called')]),

 dict(kind='choice', rubric='Circle a, b or c.',
   how='Each of these is a mistake a first-year student makes at least once.',
   example='The inner surface of an upper molar is   a) lingual   b) palatal.   Answer: b',
   bank=['mesial', 'distal', 'palatal', 'incisal'],
   bank_head='Four terms, and the four mistakes below',
   pics=['mesial', 'distal', 'palatal', 'incisal'],
   pairs=[('The inner surface of an upper molar is   a) lingual   b) palatal   '
           'c) buccal', 'b'),
          ('The surface of an upper left six nearest the midline is   a) distal   '
           'b) mesial   c) palatal', 'b'),
          ('An upper central incisor has   a) an occlusal surface   b) an incisal edge   '
           'c) neither', 'b'),
          ('The surface of a lower right seven furthest from the midline is   '
           'a) mesial   b) distal   c) lingual', 'b'),
          ('Caries between two molars is described as   a) occlusal   b) interproximal   '
           'c) cervical', 'b')]),

 dict(kind='short', rubric='Rewrite each description as a definition, using which faces '
                           'and is called.',
   example='buccal: the cheek  (The surface which faces the cheek is called the buccal '
           'surface.)',
   how='One sentence each. Keep the passive.',
   pairs=[('buccal: the cheek',
           'The surface which faces the cheek is called the buccal surface.'),
          ('palatal: the palate, on an upper tooth',
           'The surface of an upper tooth which faces the palate is called the palatal '
           'surface.'),
          ('mesial: towards the midline',
           'The surface which faces towards the midline is called the mesial surface.'),
          ('interproximal: between two neighbouring teeth',
           'The area which lies between two neighbouring teeth is called the '
           'interproximal area.')]),

 dict(kind='gap', rubric='One term is wrong in each sentence. Write the correct one.',
   example='The palatal surface of a lower molar is hard to see.  →  lingual',
   pairs=[('The palatal surface of a lower molar is hard to see.', 'lingual'),
          ('The occlusal edge of an upper central incisor is worn.', 'incisal'),
          ('The mesial surface of the upper left seven faces the second molar.', 'distal'),
          ('Caries at the contact point is described as occlusal.', 'interproximal'),
          ('The surface of an upper incisor which the patient can see is lingual.',
           'labial')]),
],

listen_intro='Three recordings: a lecture, a tutorial in which an answer is corrected, '
             'and a clinic in which a surface has to be named out loud '
             'with a patient in the chair. Do the task before, the task while you '
             'listen, and the task after.',
listening=[
 dict(title='Lecture: every surface is named by what it faces', genre='lecture',
   what='Dr Nilsen derives all eight surface terms from one principle and one exception.',
   speakers=['Dr Petra Nilsen', 'Leila Mansour'],
   conv_lines=[('L', 'Every surface is named by what it faces.'),
               ('L', 'The cheek gives us buccal, the tongue gives us lingual.'),
               ('R', 'And the palate gives us palatal?'),
               ('L', 'It does, but only in the upper arch.'),
               ('R', 'So one surface has two names.'),
               ('L', 'One structure, two names. That is the whole exception.')],
   conv_cap='The first six turns of the lecture, in which the principle and its exception '
            'both appear.',
   conv_note='Note the order: the principle first, then the single exception to it.',
   pre=dict(kind='choice',
     rubric='Before you listen, predict how the terms are derived.',
     how='Use the preview page. Then listen and check.',
     example='Buccal comes from   a) the cheek   b) the tongue.   Answer: a',
     bank=['the cheek', 'the tongue', 'the palate', 'the midline'],
     bank_head='The four things the eight terms are measured against',
     pics=['buccal', 'lingual', 'palatal', 'mesial'],
     pairs=[('The eight terms are derived from   a) what each surface faces   '
             'b) what each surface is made of   c) how large each surface is', 'a'),
            ('The exception in the system concerns   a) the biting surfaces   '
             'b) the inner surface   c) the outer surface', 'b'),
            ('Mesial and distal are measured from   a) the front tooth   b) the midline   '
             'c) the last molar', 'b')]),
   fig=F.mini_table('EIGHT TERMS, AND WHAT EACH ONE FACES',
     ['Term', 'What it faces', 'Where it is used'],
     [['buccal', 'the cheek', 'both arches'],
      ['labial', 'the lip', 'anterior teeth'],
      ['lingual', 'the tongue', 'both arches, chiefly lower'],
      ['palatal', 'the palate', 'upper arch only'],
      ['mesial', 'towards the midline', 'every tooth'],
      ['distal', 'away from the midline', 'every tooth'],
      ['occlusal', 'the opposing tooth', 'premolars and molars'],
      ['incisal', 'the opposing tooth', 'incisors and canines']],
     highlight=[4], note='The shaded row is the one term that cannot be used of a lower '
                         'tooth at all.'),
   fig_cap='The eight terms, with what each faces and where each may be used.',
   script=[('Dr Nilsen', 'Every surface of every tooth is named by what it faces.'),
           ('Dr Nilsen', 'That single principle gives you nearly all of the terms.'),
           ('Dr Nilsen', 'The cheek gives us buccal. The tongue gives us lingual.'),
           ('Dr Nilsen', 'The lip gives us labial, for the front teeth.'),
           ('Leila', 'And the palate gives us palatal?'),
           ('Dr Nilsen', 'It does, but only in the upper arch, where there is a palate.'),
           ('Leila', 'So the inner surface has two names.'),
           ('Dr Nilsen', 'One structure, two names. That is the whole exception.'),
           ('Dr Nilsen', 'Below, the inner surface faces the tongue, so it is lingual.'),
           ('Dr Nilsen', 'Above, it faces the palate, so most textbooks call it palatal.'),
           ('Leila', 'Is lingual wrong for an upper tooth?'),
           ('Dr Nilsen', 'It is not wrong in every book, but it is less precise.'),
           ('Dr Nilsen', 'Mesial and distal are measured from the midline of the arch.'),
           ('Dr Nilsen', 'Mesial faces towards it, and distal faces away from it.'),
           ('Leila', 'Along the curve, or straight across the mouth?'),
           ('Dr Nilsen', 'Along the curve. That is why a second molar has a distal '
                         'surface facing nothing at all.'),
           ('Dr Nilsen', 'A premolar or a molar has an occlusal surface.'),
           ('Dr Nilsen', 'An incisor or a canine has an incisal edge rather than a '
                         'surface.'),
           ('Leila', 'Why an edge?'),
           ('Dr Nilsen', 'Because there is almost no area to it. It is a line.'),
           ('Dr Nilsen', 'The space between two teeth is interproximal, and it includes '
                         'the contact point.'),
           ('Dr Nilsen', 'You cannot inspect it directly, which is why caries is often '
                         'found there on a radiograph first.'),
           ('Leila', 'So eight terms, one principle and one exception.'),
           ('Dr Nilsen', 'Eight terms, one principle and one exception. Learn the '
                         'principle and you will not need to learn the eight.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='What is every surface named by?  (what it faces)',
     pairs=[('What is every surface named by?', 'what it faces'),
            ('Which term is used only in the upper arch?', 'palatal'),
            ('What are mesial and distal measured from?', 'the midline'),
            ('Along what are they measured?', 'the curve of the arch'),
            ('Why does an incisor have an edge rather than a surface?',
             'there is almost no area to it'),
            ('Where is interproximal caries often found first?', 'on a radiograph')])},
   post=dict(kind='short', rubric='Answer Dr Nilsen’s questions as Leila does.',
     example='“What does buccal face?”  (the cheek)',
     pairs=[('“What does buccal face?”', 'the cheek'),
            ('“Why is palatal not used below?”', 'there is no palate below'),
            ('“Is lingual wrong for an upper tooth?”', 'it is less precise'),
            ('“Why does a second molar have a distal surface facing nothing?”',
             'it is measured along the curve of the arch'),
            ('“How many terms follow from the principle?”', 'nearly all of them')]),
   point='You now have the principle the eight terms follow from, which is a smaller '
         'thing to remember than eight separate definitions.',
   ask='State the principle, and then state the single exception to it.',
   icons=['book', 'tooth', 'speech', 'tick']),

 dict(title='Tutorial: a surface named from the student’s own point of view',
   genre='tutorial',
   what='Daniel names a surface by where it appears to him, and Dr Nilsen corrects the '
        'reference point rather than the term.',
   speakers=['Dr Petra Nilsen', 'Daniel Owusu'],
   conv_lines=[('L', 'Which surface is the lesion on?'),
               ('R', 'The left-hand side, as I look at it.'),
               ('L', 'As you look at it from where?'),
               ('R', 'From in front of the patient.'),
               ('L', 'And when the patient lies back and you stand behind?'),
               ('R', 'Then it would be on the right. I see the problem.')],
   conv_cap='Six turns in which a wrong answer turns out to be a wrong reference point.',
   pre=dict(kind='choice',
     rubric='Before you listen, decide what is wrong with locating a surface by left '
            'and right.',
     how='Say your answer out loud. Then listen.',
     example='Left and right depend on   a) the tooth   b) where you stand.   Answer: b',
     bank=['the patient', 'the midline', 'the observer', 'the arch'],
     bank_head='Four possible reference points, only two of which are fixed',
     pics=['mesial', 'distal', 'buccal', 'palatal'],
     pairs=[('Left and right change with   a) the tooth   b) where the observer stands   '
             'c) the arch', 'b'),
            ('Mesial and distal change with   a) nothing   b) where the observer stands   '
             'c) the time of day', 'a'),
            ('A chart has to be read by   a) only the person who wrote it   '
             'b) anybody   c) the patient', 'b')]),
   fig=F.form_annotated('THE SAME LESION, WRITTEN TWO WAYS',
     'CHART ENTRY  ·  26 APRIL',
     [('Written by the student', 'lesion on the left side of the back tooth'),
      ('Readable by', 'the student, for about a day'),
      ('Written correctly', 'UL6, mesial, at the contact point'),
      ('Readable by', 'anybody, for as long as the record exists'),
      ('What changed', 'the reference point, not the observation')],
     callouts=[(4, 'the observation was right the first time')],
     note='Five lines. The student saw the lesion correctly and recorded it unusably.'),
   fig_cap='One observation, written from two different reference points.',
   script=[('Dr Nilsen', 'You have examined the upper left quadrant. What did you find?'),
           ('Daniel', 'A lesion on the back tooth, on the left-hand side of it.'),
           ('Dr Nilsen', 'The left-hand side as you look at it from where?'),
           ('Daniel', 'From in front of the patient, standing up.'),
           ('Dr Nilsen', 'And if the patient lies back and you stand behind her head?'),
           ('Daniel', 'Then it would be on the right. I see the problem.'),
           ('Dr Nilsen', 'Say what you saw again, but measure it from the midline.'),
           ('Daniel', 'It was on the side nearest the front of the mouth.'),
           ('Dr Nilsen', 'Nearest the midline. So which term?'),
           ('Daniel', 'Mesial. The mesial surface of the upper left six.'),
           ('Dr Nilsen', 'Good. Now where on the mesial surface?'),
           ('Daniel', 'Where it touches the second premolar.'),
           ('Dr Nilsen', 'And that place has a name.'),
           ('Daniel', 'The contact point.'),
           ('Dr Nilsen', 'Say the whole thing in one line, as you would write it.'),
           ('Daniel', 'Upper left six, mesial surface, at the contact point.'),
           ('Dr Nilsen', 'That line can be read by anybody, in ten years.'),
           ('Daniel', 'My first answer could only be read by me.'),
           ('Dr Nilsen', 'And only for about a day. Was your observation wrong?'),
           ('Daniel', 'No. I saw the right thing.'),
           ('Dr Nilsen', 'You did. You recorded it from the wrong reference point.'),
           ('Dr Nilsen', 'That is a different fault, and an easier one to correct.'),
           ('Daniel', 'So the examination was sound.'),
           ('Dr Nilsen', 'The examination was sound. The language was not yet.'),
           ('Daniel', 'Should I use left and right at all?'),
           ('Dr Nilsen', 'Only of quadrants, where they are the patient’s left and right.'),
           ('Daniel', 'Never of surfaces.'),
           ('Dr Nilsen', 'Never of surfaces. Surfaces take the midline and the soft '
                         'tissues as their reference.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='Which quadrant had Daniel examined?  (the upper left)',
     pairs=[('Which quadrant had Daniel examined?', 'the upper left'),
            ('How did Daniel first describe the surface?',
             'the left-hand side as he looked at it'),
            ('What does that description depend on?', 'where the observer stands'),
            ('Which term was correct?', 'mesial'),
            ('What is the place where two teeth touch called?', 'the contact point'),
            ('When may left and right be used?', 'of quadrants')])},
   post=dict(kind='short', rubric='Rewrite each of Daniel’s answers as Dr Nilsen would '
                                  'have him say it.',
     example='“On the left-hand side of it.”  (on the mesial surface)',
     pairs=[('“On the left-hand side of it.”', 'on the mesial surface'),
            ('“On the side nearest the front of the mouth.”',
             'on the surface nearest the midline'),
            ('“Where it touches the second premolar.”', 'at the contact point'),
            ('“A lesion on the back tooth.”', 'a lesion on the upper left six'),
            ('“I saw the right thing.”',
             'the examination was sound but the reference point was wrong')]),
   point='You now know that a wrong surface name is usually a wrong reference point, and '
         'that the two faults are corrected in different ways.',
   ask='What was sound about Daniel’s first answer, and what was not?',
   icons=['book', 'person', 'pen', 'cross']),

 dict(title='In the clinic: naming the surface out loud', genre='clinical supervision',
   what='Dr Rahman has Leila dictate what she finds while the patient is in the chair.',
   speakers=['Dr Yusuf Rahman', 'Leila Mansour'],
   conv_lines=[('L', 'Dictate it to me as you go. Upper right first.'),
               ('R', 'Upper right six, occlusal surface, small cavity.'),
               ('L', 'Good. Anything interproximal?'),
               ('R', 'I cannot see. The contact is tight.'),
               ('L', 'Then say that. Say what you cannot see.'),
               ('R', 'Upper right six, distal surface, not visible.')],
   conv_cap='Six turns with a patient in the chair, in which the last line records an '
            'absence.',
   pre=dict(kind='choice',
     rubric='Before you listen, decide what a chart should say about a surface you could '
            'not inspect.',
     how='Three of these are defensible. One is not.',
     example='Leave it blank   a) acceptable   b) not acceptable.   Answer: b',
     bank=['not visible', 'sound', 'blank', 'radiograph needed'],
     bank_head='Four things a chart could say about a surface you could not see',
     pics=['interproximal', 'distal', 'occlusal', 'mesial'],
     pairs=[('A surface you could not inspect should be recorded as   a) sound   '
             'b) not visible   c) left blank', 'b'),
            ('Recording a surface as sound when you did not see it is   a) efficient   '
             'b) a false record   c) usual', 'b'),
            ('The next step for a surface you cannot see is often   a) nothing   '
             'b) a radiograph   c) extraction', 'b')]),
   fig=F.form_annotated('WHAT WAS DICTATED, AND WHAT WAS WRITTEN',
     'CHART  ·  CLINIC 3  ·  26 APRIL',
     [('UR6 occlusal', 'small cavity, enamel only'),
      ('UR6 distal', 'not visible, contact tight'),
      ('UR5 mesial', 'not visible, contact tight'),
      ('Action', 'bitewing radiograph before any treatment is planned'),
      ('Dictated by', 'L. Mansour, checked by Y. Rahman')],
     callouts=[(1, 'an absence, recorded as an absence')],
     note='Five lines. Two of them record what could not be seen, which is information.'),
   fig_cap='The chart as it was dictated, with the two lines that record an absence.',
   script=[('Dr Rahman', 'Dictate it to me as you go. Upper right quadrant first.'),
           ('Leila', 'Upper right six, occlusal surface, small cavity.'),
           ('Dr Rahman', 'How deep?'),
           ('Leila', 'In the enamel only, as far as I can tell.'),
           ('Dr Rahman', 'Say that, then. Anything interproximal?'),
           ('Leila', 'I cannot see. The contact with the five is tight.'),
           ('Dr Rahman', 'Then say that. Say exactly what you cannot see.'),
           ('Leila', 'Upper right six, distal surface, not visible.'),
           ('Dr Rahman', 'And the surface facing it?'),
           ('Leila', 'Upper right five, mesial surface, also not visible.'),
           ('Dr Rahman', 'Good. Those two lines are worth more than a guess.'),
           ('Leila', 'Should I write sound, if it looks sound?'),
           ('Dr Rahman', 'You did not see it. Sound would be a false record.'),
           ('Leila', 'So not visible, and then a radiograph.'),
           ('Dr Rahman', 'A bitewing. It is the only way to see that surface.'),
           ('Leila', 'The buccal surface of the six is clear.'),
           ('Dr Rahman', 'You can see that one directly, so you may say sound.'),
           ('Leila', 'And the palatal surface?'),
           ('Dr Rahman', 'With the mirror. Look before you say.'),
           ('Leila', 'Palatal surface of the upper right six, sound.'),
           ('Dr Rahman', 'Now the anterior teeth. What do they have?'),
           ('Leila', 'Incisal edges, not occlusal surfaces.'),
           ('Dr Rahman', 'And the surface the patient sees in the mirror?'),
           ('Leila', 'Labial.'),
           ('Dr Rahman', 'Good. Read the whole quadrant back to me.'),
           ('Leila', 'UR6 occlusal, cavity in enamel. UR6 distal, not visible.'),
           ('Leila', 'UR5 mesial, not visible. UR6 buccal and palatal, sound.'),
           ('Dr Rahman', 'That is a chart somebody else can act on.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='Which quadrant is dictated?  (the upper right)',
     pairs=[('Which quadrant is dictated?', 'the upper right'),
            ('What is found on the occlusal surface of the six?', 'a small cavity'),
            ('Why can the distal surface not be seen?', 'the contact is tight'),
            ('What should be written instead of sound?', 'not visible'),
            ('What will be taken before treatment is planned?', 'a bitewing'),
            ('What do the anterior teeth have?', 'incisal edges')])},
   post=dict(kind='short', rubric='Write the chart line for each thing Leila says.',
     example='“I cannot see. The contact is tight.”  (UR6 distal, not visible)',
     pairs=[('“I cannot see. The contact is tight.”', 'UR6 distal, not visible'),
            ('“In the enamel only, as far as I can tell.”',
             'UR6 occlusal, cavity in enamel'),
            ('“The buccal surface of the six is clear.”', 'UR6 buccal, sound'),
            ('“With the mirror … sound.”', 'UR6 palatal, sound'),
            ('“Incisal edges, not occlusal surfaces.”',
             'anterior teeth: incisal edges')]),
   point='You now know how to dictate a surface, and how to record a surface you could '
         'not examine, which is a different entry from a sound one.',
   ask='Why are the two not visible lines worth more than a guess?',
   icons=['mirror', 'xray', 'pen', 'tick']),
],

speaking=[
 dict(title='Defining the eight, from the principle',
   rubric='Define all eight surface terms to a partner, deriving each from what it faces.',
   how='Student B has the preview page and marks you. Three minutes each, then swap.',
   conv=['Dr Petra Nilsen', 'Leila Mansour'],
   conv_lines=[('R', 'What is the buccal surface?'),
               ('L', 'The surface which faces the cheek.'),
               ('R', 'And on an upper tooth, the inner surface?'),
               ('L', 'Palatal, because it faces the palate.'),
               ('R', 'And on a lower tooth?'),
               ('L', 'Lingual, because it faces the tongue.')],
   model=[('Student', 'Every surface is named by what it faces.'),
          ('Student', 'The surface which faces the cheek is called the buccal surface.'),
          ('Student', 'The surface which faces the tongue is called the lingual surface.'),
          ('Student', 'In the upper arch the inner surface faces the palate, so it is '
                      'called palatal.'),
          ('Student', 'Mesial faces towards the midline, and distal faces away from it.'),
          ('Student', 'A molar has an occlusal surface; an incisor has an incisal edge.')],
   frame=[['Change this', 'Keep this', 'Why'],
          ['the tooth you use as your example', 'The surface which faces …',
           'the pattern is what is being marked, not the example'],
          ['the order of the eight', 'is called …',
           'the passive is the standard form of a definition'],
          ['nothing in the exception', 'in the upper arch … so it is called palatal',
           'this is the one place the principle needs a condition']],
   checklist=['you stated the principle before the terms',
              'every definition used which faces or which lies',
              'you gave the condition on palatal',
              'you said edge, not surface, for the anterior teeth'],
   point='You can derive all eight terms from one principle, out loud, without a list.',
   icons=['book', 'tooth', 'speech', 'tick']),

 dict(title='Dictating a quadrant',
   rubric='Dictate a whole quadrant to a partner, surface by surface.',
   how='Student B writes down only what you say and reads it back. Four minutes, then '
       'swap. The third time, use a quadrant from a patient you have actually examined.',
   conv=['Dr Yusuf Rahman', 'Leila Mansour'],
   conv_lines=[('L', 'Upper right quadrant. Start at the six.'),
               ('R', 'Upper right six, occlusal, small cavity in enamel.'),
               ('L', 'Interproximal?'),
               ('R', 'Distal not visible, contact tight.'),
               ('L', 'And the five?'),
               ('R', 'Upper right five, mesial, not visible.')],
   model=[('Student', 'Upper right six, occlusal surface, small cavity in enamel.'),
          ('Student', 'Upper right six, distal surface, not visible, contact tight.'),
          ('Student', 'Upper right five, mesial surface, not visible.'),
          ('Student', 'Upper right six, buccal and palatal surfaces, sound.'),
          ('Student', 'Upper right three, incisal edge, slight wear.'),
          ('Student', 'Bitewing radiograph before any treatment is planned.')],
   cards=[dict(who='Student A', brief='the student dictating. You may not use left, '
                                      'right, front or back of any surface.'),
          dict(who='Student B', brief='the one writing. Stop your partner the moment a '
                                      'line could mean two different surfaces.')],
   checklist=['every line names the tooth before the surface',
              'no line uses left or right of a surface',
              'a surface you could not see is recorded as not visible',
              'the last line says what has to happen next'],
   point='You can dictate a quadrant in lines that somebody else can act on without '
         'asking you a single question.',
   icons=['mirror', 'pen', 'speech', 'tick']),

 dict(title='Explaining a surface to the patient it belongs to',
   rubric='Explain where a lesion is to the patient, without using any of the eight terms.',
   how='Student B is the patient and asks where it is and whether they can see it. Three '
       'minutes, then swap. Then say which parts of your explanation you would be willing '
       'to write in the record.',
   conv=['Leila Mansour', 'Thandiwe Mabaso'],
   conv_lines=[('R', 'Where exactly is it?'),
               ('L', 'Between two of your back teeth, on the upper right.'),
               ('R', 'Can I see it?'),
               ('L', 'No. It is below the point where the two teeth touch.'),
               ('R', 'So how do you know?'),
               ('L', 'I do not yet. That is why I want a small radiograph.')],
   model=[('Student', 'It is between two of your back teeth, on the upper right.'),
          ('Student', 'The two teeth touch each other, and it is just below that point.'),
          ('Student', 'That is why you cannot see it and neither can I.'),
          ('Student', 'A small radiograph of that area would show it.'),
          ('Student', 'In the record I shall write that the surface was not visible.'),
          ('Student', 'That is honest, and it tells the next dentist what to look for.')],
   fig=F.conversation('THE SAME SURFACE, FOR TWO DIFFERENT READERS',
     dict(name='You', role='the student', skin='3', hair='black', style='tied',
          tunic='teal'),
     dict(name='Your partner', role='the patient', skin='5', hair='black', style='long',
          tunic='plum'),
     [('R', 'Where exactly is it?'),
      ('L', 'Between two of your back teeth, upper right.'),
      ('R', 'Can I see it?'),
      ('L', 'No. It is below where the two teeth touch.'),
      ('R', 'So how do you know?'),
      ('L', 'I do not yet. I want a small radiograph.')],
     note='Interproximal, mesial and contact point all appear here, and not one of them '
          'is said out loud.'),
   fig_cap='One surface, explained to the patient and recorded for a colleague.',
   checklist=['you used none of the eight terms with the patient',
              'you said what you could not see, and why',
              'you said what the next step was',
              'you said what you would write in the record'],
   point='You can describe a surface precisely to a colleague and plainly to a patient, '
         'and keep both descriptions true.',
   icons=['person', 'speech', 'xray', 'tick']),
],

fluency=dict(
  title='One quadrant, three times',
  rubric='Dictate the same quadrant to three different partners.',
  how='Four minutes with the first, three with the second, two with the third. The same '
      'quadrant each time. Nothing new is added; only the time changes.',
  content=['Name the quadrant before you name any tooth.',
           'For each tooth, name the tooth and then the surface.',
           'Say what you found, in as few words as carry the finding.',
           'Record every surface you could not inspect as not visible.',
           'Name the biting surface correctly for anterior and posterior teeth.',
           'End with the one action that follows from what you have dictated.'],
  words=['mesial', 'distal', 'buccal', 'lingual', 'palatal', 'occlusal', 'incisal',
         'interproximal'],
  fig_title='THE SAME QUADRANT, IN FOUR MINUTES, THEN THREE, THEN TWO',
  point='You can dictate a quadrant without searching for the surface terms, which is '
        'what makes it possible to examine and record at the same time.',
  ask='Which surface term still slowed you down on the third attempt?',
  icons=['mirror', 'clock', 'pen', 'tick']),

reading=[
 dict(title='Textbook: the surfaces of a tooth', genre='textbook page',
   pre=dict(rubric='Before you read, find these four things in the passage.',
     how='Two minutes. Do not read every sentence yet.',
     items=['the principle all the terms follow', 'the one exception to it',
            'what mesial and distal are measured from',
            'why the interproximal area matters clinically']),
   fig=F.tooth_section('THE FIVE SURFACES OF A POSTERIOR TOOTH',
     labels=['occlusal', 'buccal', 'lingual', 'mesial', 'distal'],
     caption_terms=['occlusal', 'buccal', 'lingual', 'mesial', 'distal']),
   fig_cap='A lower molar with its five named surfaces, as the passage describes them.',
   text=[
    'A tooth is not a smooth object; each tooth has several distinct surfaces. Every one '
    'of those surfaces is named according to what it faces. That single principle '
    'governs almost the whole of the vocabulary. A student who understands the principle '
    'need not learn eight unrelated adjectives.',
    'The surface which faces the cheek is called the buccal surface, from the Latin for '
    'cheek. At the front of the mouth, where the cheek gives way to the lip, the same '
    'outer surface is often called labial instead. Many writers use buccal for every '
    'outer surface and treat labial as a finer distinction. Others keep the two terms '
    'strictly apart, and either practice is defensible. What matters is that one of the '
    'two is followed throughout a single record.',
    'The inner surface is where the principle needs a condition. In the lower arch the '
    'inner surface faces the tongue, and it is therefore called lingual. In the upper '
    'arch the same surface faces the hard palate, so most textbooks call it palatal. One '
    'anatomical structure thus carries two names, and which one is correct depends on '
    'the arch. This is the only exception in the system. It accounts for a large share '
    'of the errors students make in their first year.',
    'Two further terms are measured not against soft tissue but against the midline of '
    'the arch. The surface which faces towards the midline is the mesial surface. The '
    'surface which faces away from the midline is the distal surface. The measurement is '
    'taken along the curve of the arch, not straight across the mouth. That is why the '
    'distal surface of a second molar faces no neighbouring tooth at all. Mesial and '
    'distal have one great advantage over any description using left and right. They do '
    'not change when the observer moves.',
    'The biting surfaces are named by the class of tooth that carries them. A premolar '
    'or a molar meets its opposing tooth across a broad area, the occlusal surface. An '
    'incisor or a canine meets its opposing tooth along a narrow line. That line is the '
    'incisal edge rather than a surface. The distinction is not only a matter of words: an '
    'occlusal surface can hold a filling, and an incisal edge usually cannot.',
    'Finally, the region between two neighbouring teeth is called the interproximal '
    'area. The place within it where the two teeth actually touch is the contact point. '
    'Neither can be inspected directly in an ordinary examination. The contact point '
    'lies below the level that the eye and the mirror can reach. Caries which begins '
    'there is commonly detected on a radiograph before it becomes visible. For that '
    'reason a surface which could not be inspected is recorded as not visible, and never '
    'as sound.'],
   source=('The account of dental surface nomenclature follows standard dental anatomy '
           'reference works.',
           'General dental anatomy and terminology reference works, 2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='What is every surface named according to?  (what it faces)',
     pairs=[('What is every surface named according to?', 'what it faces'),
            ('Which term may be used instead of buccal at the front?', 'labial'),
            ('Why does the inner surface have two names?',
             'it faces the tongue below and the palate above'),
            ('Along what are mesial and distal measured?', 'the curve of the arch'),
            ('What advantage have mesial and distal over left and right?',
             'they do not change when the observer moves'),
            ('Why should an uninspected surface not be recorded as sound?',
             'it could not be inspected')])},
   post=dict(kind='tf', rubric='True or false? If it is false, write the correction in '
                               'eight words or fewer.',
     how='Then say which of these statements your own textbook states differently.',
     example='Lingual is used of upper teeth in most textbooks.  —  false — palatal is '
             'used above',
     bank=['buccal', 'labial', 'palatal', 'incisal', 'interproximal'],
     bank_head='The five terms these statements concern',
     pics=['buccal', 'palatal', 'incisal', 'interproximal'],
     pairs=[('Most textbooks call the inner surface of an upper molar lingual.',
             'false — they call it palatal'),
            ('Mesial and distal are measured along the curve of the arch.', 'true'),
            ('An incisal edge can usually hold a filling.',
             'false — an occlusal surface can'),
            ('The contact point can be inspected with a mirror.',
             'false — it lies below what the mirror reaches'),
            ('A surface that was not inspected should be recorded as not visible.',
             'true')]),
   point='A textbook defines by principle and then states its exceptions. Read for the '
         'principle first; the eight terms follow from it.',
   ask='State the principle in one sentence, and the exception in one more.',
   icons=['book', 'tooth', 'xray', 'tick']),

 dict(title='A case: the surface nobody had looked at', genre='written case',
   pre=dict(rubric='Before you read, decide what you expect to find.',
     how='Say your answer out loud, then read and compare.',
     items=['Which surfaces are most often missed in an examination?',
            'What would a chart look like if a surface had never been examined?',
            'What should be written about a surface that cannot be seen?']),
   fig=F.form_annotated('THE CHART, OVER THREE VISITS',
     'RECORD  ·  UPPER RIGHT QUADRANT',
     [('Visit 1, March', 'UR6 occlusal sound; UR6 buccal sound; UR6 palatal sound'),
      ('Visit 1, March', 'UR6 distal — no entry'),
      ('Visit 2, September', 'UR6 occlusal sound; no interproximal entry'),
      ('Visit 3, March', 'pain on biting; bitewing taken'),
      ('Visit 3, finding', 'caries on UR6 distal, into dentine, at the contact point')],
     callouts=[(1, 'the surface was never recorded, in either direction')],
     note='Three visits. The missing line is the same missing line each time.'),
   fig_cap='One quadrant over three visits, with the surface that was never entered.',
   text=[
    'A woman of thirty-four attended for a routine examination in March. The upper right '
    'quadrant was charted. Three surfaces of the first molar were recorded as sound: the '
    'occlusal, the buccal and the palatal. The distal surface of that tooth carried no '
    'entry at all. Nor did the mesial surface of the second premolar which faces it.',
    'She attended again the following September, and the chart from that visit repeats '
    'the pattern exactly. The occlusal surface was recorded as sound. The outer and '
    'inner surfaces were recorded as sound. The interproximal surfaces were left blank. '
    'No radiograph had been taken on either occasion, and none had been recommended.',
    'In the following March she returned with pain on biting, which had lasted about two '
    'weeks. A bitewing radiograph was taken at that visit. It showed caries on the '
    'distal surface of the upper right first molar. The lesion extended into dentine and '
    'had begun at the contact point. The mesial surface of the second premolar was '
    'affected as well, though less deeply.',
    'The lesson of this case is not that the first two examinations were careless. '
    'Everything they recorded as sound was very probably sound at the time. The fault '
    'lies in what the chart does not say. A blank space can mean three different things. '
    'It may mean that the surface was examined and found sound, or that it was examined '
    'and could not be seen, or that it was never examined at all. A reader cannot tell '
    'which, and a year later neither can the examiner.',
    'Suppose either of the earlier charts had carried the words not visible against the '
    'distal surface. The gap would then have been visible to the next clinician as a '
    'gap. A radiograph would probably have been taken at the second visit. That is '
    'eighteen months before the patient developed any pain. The lesion would have been '
    'treated while it was still only in the enamel.',
    'Two further points are worth making about charts of this kind. First, the blank '
    'spaces appear at both visits, which suggests a habit rather than a single mistake '
    'on a busy afternoon. A habit can be corrected, while a single mistake usually '
    'cannot even be traced. Second, the patient herself had no way of knowing that '
    'anything had been left undone. She attended when she was asked to and answered '
    'every question she was asked. The whole of the omission lies in the record, and the '
    'record is the only place where it could have been found.',
    'The habit this case argues for is a small one and costs almost nothing. Every '
    'surface of every tooth charted receives an entry. Where the surface was seen, the '
    'entry says what was seen. Where it could not be seen, the entry says not visible. '
    'The chart then states plainly what the next step must be. The record is longer by a '
    'few words, and it is honest about the limits of what an eye and a mirror can '
    'reach.'],
   source=('The case is invented for teaching; the pattern of interproximal caries and '
           'its detection follows standard clinical reference works.',
           'General dental anatomy, radiography and clinical reference works, 2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='How old was the patient?  (thirty-four)',
     pairs=[('How old was the patient?', 'thirty-four'),
            ('Which three surfaces were recorded as sound in March?',
             'occlusal, buccal and palatal'),
            ('Which surface carried no entry?', 'the distal'),
            ('What brought her back in the third March?', 'pain on biting'),
            ('How far had the caries extended?', 'into dentine'),
            ('What would not visible have made clear to the next clinician?',
             'that the surface had not been seen')])},
   post=dict(kind='short', rubric='Write the chart entry that should have appeared in '
                                  'each place.',
     example='UR6 distal, March, contact tight  (UR6 distal, not visible, contact tight)',
     pairs=[('UR6 distal, March, contact tight',
             'UR6 distal, not visible, contact tight'),
            ('UR5 mesial, March, contact tight', 'UR5 mesial, not visible'),
            ('the action that follows from two not visible entries',
             'bitewing radiograph'),
            ('UR6 occlusal, examined directly and sound', 'UR6 occlusal, sound'),
            ('the entry a blank space should never be allowed to replace',
             'not visible')]),
   point='A blank space in a chart carries three different meanings at once, which is the '
         'same as carrying none. Two words remove the ambiguity.',
   ask='What exactly did the first two charts fail to record?',
   icons=['form', 'xray', 'tooth', 'cross']),

 dict(title='Procedure: how to chart a quadrant surface by surface',
   genre='procedure',
   pre=dict(rubric='Before you read, put these steps in the order you would expect.',
     how='Thirty seconds, in pencil. Then read and correct your order.',
     items=['name the quadrant', 'examine the directly visible surfaces',
            'use the mirror for the inner surfaces',
            'record what could not be inspected']),
   fig=F.step_sequence('CHARTING A QUADRANT, SURFACE BY SURFACE',
     ['Name the quadrant aloud before you name any tooth.',
      'Work from the most distal tooth forwards, in a fixed direction.',
      'For each tooth, take the occlusal or incisal surface first.',
      'Then the buccal surface, which you can see directly.',
      'Then the lingual or palatal surface, with the mirror.',
      'Then the mesial and distal surfaces, and record what you cannot see.',
      'End the quadrant with the action that follows from it.'],
     stop_points=[6],
     note='Seven steps. The sixth is the one that produces the entries everybody leaves '
          'blank.'),
   fig_cap='The order of a quadrant, with the step that generates the not visible entries.',
   text=[
    'Charting is a procedure rather than a set of observations. Like any procedure, it is '
    'done in a fixed order. The order itself matters less than the fact that it never '
    'changes. A fixed order is what allows you to notice that something is missing.',
    'Name the quadrant before you name any tooth in it. A quadrant named aloud fixes the '
    'point from which everything that follows is measured. It also prevents the '
    'commonest charting error, which is a finding recorded against the right surface of '
    'the wrong tooth.',
    'Work in one direction, and always the same one. Many clinicians begin with the most '
    'distal tooth and move forwards towards the midline. The direction does not matter '
    'in itself. Keeping it constant does, because it is the only reliable way to know '
    'that no tooth has been passed over.',
    'Within each tooth, take the surfaces in a fixed order as well. Begin with the '
    'biting surface, which is the occlusal surface on a premolar or a molar and the '
    'incisal edge on an incisor or a canine. Take the buccal surface next, since you can '
    'see it directly and without a mirror. Then take the inner surface with the mirror: '
    'lingual below and palatal above. Nothing here is difficult, and all of it becomes '
    'automatic within a few weeks.',
    'The mesial and distal surfaces come last, and they are the reason the procedure '
    'exists. In most mouths the contact between two neighbouring teeth is tight. Neither '
    'of the two surfaces meeting there can then be inspected. That is itself a finding, '
    'and it is recorded. The entry reads not visible, with the reason if there is one, '
    'and it never reads sound.',
    'A quadrant ends with the action that follows from what has been charted. Two '
    'neighbouring not visible entries usually call for a bitewing radiograph. The chart '
    'should say so, rather than leave the next clinician to work it out. If no action '
    'follows, write that no action follows. A chart which ends without an action leaves '
    'the reader in doubt. The reader cannot tell whether a decision was taken or merely '
    'not recorded.',
    'One more thing is worth saying about the order itself. Students often ask whether '
    'they may begin at the midline and work backwards. They may, and some clinics teach '
    'it that way. What they may not do is change direction from one patient to the next. '
    'The order is a tool for finding your own gaps, and a tool that moves is no use.',
    'The whole procedure, for one quadrant in an adult mouth, takes two to three minutes '
    'once it has become a habit. Almost all of the time is spent on the two surfaces '
    'nobody can see.'],
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='What is named before any tooth?  (the quadrant)',
     pairs=[('What is named before any tooth?', 'the quadrant'),
            ('Why does the direction have to stay constant?',
             'so that no tooth is passed over'),
            ('Which surface is taken first within a tooth?', 'the biting surface'),
            ('Which surface needs the mirror?', 'the inner surface'),
            ('What do two adjacent not visible entries ordinarily indicate?',
             'a bitewing radiograph'),
            ('How long does one quadrant take once it is habitual?',
             'two to three minutes')])},
   post=dict(kind='order', rubric='Put the seven steps of the procedure in order.',
     how='Then say which step your own clinic does differently, and why.',
     example='Name the quadrant aloud.  —  1',
     bank=['the reference point', 'the direction', 'the biting surface', 'the mirror',
           'what you cannot see', 'the action'],
     bank_head='The six things the seven steps between them establish',
     pics=['occlusal', 'buccal', 'palatal', 'interproximal'],
     pairs=[('Name the quadrant aloud.', '1'),
            ('Work from the most distal tooth forwards.', '2'),
            ('Take the occlusal or incisal surface.', '3'),
            ('Take the buccal surface, which you can see directly.', '4'),
            ('Take the lingual or palatal surface, with the mirror.', '5'),
            ('Take the mesial and distal surfaces, and record what you cannot see.', '6'),
            ('Write the action that follows from the quadrant.', '7')]),
   point='A fixed order is what makes an omission visible. The procedure exists for the '
         'two surfaces that cannot be seen, not for the three that can.',
   ask='Which step would you be most likely to skip when you are running late, and what '
       'would be lost?',
   icons=['mirror', 'pen', 'xray', 'tick']),
],

writing=[
 dict(title='Eight definitions, in the textbook pattern',
   rubric='Define all eight surface terms in writing, using which faces and is called.',
   how='One sentence each, eight sentences. Keep the passive throughout.',
   fig=F.mini_table('THE PATTERN, AND WHERE EACH PART GOES',
     ['Part of the sentence', 'What it carries'],
     [['The surface which faces …', 'what the surface looks at'],
      ['… is called …', 'the name being defined'],
      ['… the buccal surface.', 'the term itself'],
      ['(in the upper arch)', 'the condition, where one is needed']], highlight=[4]),
   fig_cap='The pattern of a definition, with the part only one of the eight needs.',
   scaffold=['The surface which faces the cheek is called …',
             'The surface which faces the tongue is called …',
             'In the upper arch, the surface which faces the palate is called …',
             'The surface which faces towards the midline is called …',
             'The surface which faces away from the midline is called …',
             'The biting surface of a premolar or a molar is called …',
             'The biting edge of an incisor or a canine is called …',
             'The area which lies between two neighbouring teeth is called …'],
   model=['The surface which faces the cheek is called the buccal surface.',
          'The surface which faces the tongue is called the lingual surface.',
          'In the upper arch, the surface which faces the palate is called the palatal '
          'surface.',
          'The surface which faces towards the midline is called the mesial surface.',
          'The surface which faces away from the midline is called the distal surface.',
          'The biting surface of a premolar or a molar is called the occlusal surface.',
          'The biting edge of an incisor or a canine is called the incisal edge.',
          'The area which lies between two neighbouring teeth is called the '
          'interproximal area.'],
   checklist=['every sentence uses which faces or which lies',
              'every sentence uses is called',
              'the palatal definition carries its condition',
              'the incisal definition says edge and not surface'],
   point='You can write the eight definitions in the form a textbook uses, which is the '
         'form an examiner expects.',
   icons=['pen', 'book', 'tooth', 'tick']),

 dict(title='A charted quadrant',
   rubric='Write the chart for one quadrant, six lines, including two not visible entries.',
   how='Use any quadrant you like. Each line names the tooth, then the surface, then the '
       'finding.',
   fig=F.form_annotated('WHAT EACH LINE OF A CHART CARRIES',
     'CHART LINE  ·  THE THREE PARTS',
     [('The tooth', 'named in notation, not in words'),
      ('The surface', 'one of the eight terms, never left or right'),
      ('The finding', 'what was seen, or not visible with the reason'),
      ('The last line', 'the action that follows from the quadrant'),
      ('Signed', 'the person who examined, not the person who wrote')],
     callouts=[(2, 'left and right belong to quadrants, not to surfaces')],
     note='Five requirements. The third is where a guess most often replaces an '
          'observation.'),
   fig_cap='The parts of a chart line, and the one place a guess gets in.',
   scaffold=['UR6 occlusal:', 'UR6 buccal:', 'UR6 palatal:', 'UR6 distal:',
             'UR5 mesial:', 'Action:'],
   model=['UR6 occlusal: small cavity, in enamel.',
          'UR6 buccal: sound.',
          'UR6 palatal: sound, seen with mirror.',
          'UR6 distal: not visible, contact tight.',
          'UR5 mesial: not visible, contact tight.',
          'Action: bitewing radiograph before treatment is planned.'],
   checklist=['every line names the tooth in notation first',
              'every surface is named with one of the eight terms',
              'two lines read not visible, with a reason',
              'the last line states an action'],
   point='You can write a chart in which every surface has an entry and no entry is a '
         'guess.',
   icons=['form', 'pen', 'xray', 'tick']),

 dict(title='A short paragraph for a colleague who was not there',
   rubric='Write one paragraph of five sentences describing a lesion for a colleague.',
   how='The colleague has the chart but not the patient. Name the surface, the position '
       'on it, the extent, how you know, and what you would do next.',
   fig=F.mini_table('FIVE SENTENCES, FIVE JOBS',
     ['Sentence', 'What it must establish'],
     [['1', 'the tooth and the surface'],
      ['2', 'the position on that surface'],
      ['3', 'the extent, in tissue terms'],
      ['4', 'how it was detected, and how it was not'],
      ['5', 'the next step, and its reason']]),
   fig_cap='The five sentences, and what each of them has to establish.',
   scaffold=['The lesion lies on …', 'Within that surface it is …',
             'It extends …', 'It was detected …', 'I should propose …'],
   model=['The lesion lies on the distal surface of the upper right first molar.',
          'Within that surface it lies at the contact point, below the level the mirror '
          'reaches.',
          'It extends into dentine, though not as far as the pulp.',
          'It was detected on a bitewing radiograph and was not visible on direct '
          'examination.',
          'I should propose restoration at the next visit, with the mesial surface of the '
          'second premolar reviewed at the same time.'],
   checklist=['sentence one names the tooth in notation and the surface',
              'sentence three uses tissue terms from Unit 3',
              'sentence four says how it was not detected as well as how it was',
              'sentence five gives a reason, not only a plan'],
   point='You can write five sentences that let a colleague act without asking you a '
         'single question.',
   icons=['pen', 'xray', 'tooth', 'tick']),
],

cases_intro='Three cases from a first-year clinic and a first-year examination hall. '
            'Each of them can be answered in more than one defensible way. Work in '
            'threes, give a reason for every position you take, and use the eight terms '
            'when you take it.',
cases=[
 dict(tier='A', title='The chart that said sound',
  situation=['Leila charts a quadrant. The contact between the upper right six and the '
             'five is tight, and she cannot see either of the two surfaces that meet '
             'there. The quadrant looks healthy in every other respect.',
             'She writes sound against both surfaces, because that is what she believes '
             'to be the case, and because the clinic is running late and a radiograph '
             'would add twenty minutes.'],
  who=['Leila Mansour', 'Dr Yusuf Rahman'],
  facts=['Neither interproximal surface could be inspected.',
         'The rest of the quadrant was sound, as far as I could see.',
         'Sound was recorded against both surfaces.',
         'A radiograph would have added about twenty minutes.'],
  question='Is sound a false entry here, or a reasonable clinical judgement?',
  questions=['What exactly does the word sound claim, and did she observe it?',
             'What would not visible have cost her, in time and in words?',
             'What would you write, with the same patient and the same clock?'],
  words=['distal', 'mesial', 'interproximal', 'occlusal', 'buccal'],
  language=[('Recording what you did not see',
             ['UR6 distal, not visible, contact tight.',
              'Neither interproximal surface could be inspected.',
              'Bitewing recommended, not taken today.']),
            ('Defending a judgement',
             ['The rest of the quadrant was sound.',
              'I judged the risk to be low, and recorded that judgement.'])],
  how='In threes. Eight minutes. One of you writes the two lines you would actually put '
      'in the chart.',
  point='You can argue about the difference between what was observed and what was '
        'believed, and write a line that keeps the two apart.',
  ask='Say the two chart lines your group would write, word for word.',
  note='Both positions are defended by practising clinicians. Say which rule yours '
       'follows.',
  icons=['form', 'xray', 'clock', 'cross'],
  guidance=('Reference practice', 'Interproximal surfaces that cannot be inspected are '
            'recorded as not visible rather than sound',
            'General dental record-keeping and radiography reference works, 2025–2026.')),

 dict(tier='C', title='Lingual or palatal, in an examination answer',
  situation=['Daniel writes a good answer describing the inner surface of an upper molar. '
             'Everything in it is correct except that he calls the surface lingual '
             'throughout, where the course textbook uses palatal.',
             'One examiner marks the answer down for not being precise enough. Another argues that '
             'lingual is used of upper teeth in several reference works and that the '
             'anatomy described was faultless.'],
  who=['Dr Petra Nilsen', 'Daniel Owusu'],
  facts=['The anatomy described was correct throughout.',
         'The course textbook uses palatal for upper teeth.',
         'Some reference works use lingual for both arches.',
         'The answer was otherwise of a high standard.'],
  question='Should the term cost him marks, and if so, how many?',
  questions=['What is the difference between a wrong term and a less precise one?',
             'What does a chart lose if the two terms are used as if they meant the same thing?',
             'What would you write in the margin, in one line?'],
  words=['palatal', 'lingual', 'buccal', 'labial', 'distal'],
  language=[('Marking for precision',
             ['Palatal is the term this course uses.',
              'Lingual is not wrong, but it is less precise above.',
              'The anatomy is correct throughout.']),
            ('Arguing the other way',
             ['Several reference works use lingual in both arches.',
              'The examiner could not have misunderstood the answer.'])],
  how='In threes. Eight minutes. Write the one line you would put in the margin.',
  point='You can distinguish between an error and a term that is not precise enough, '
        'and mark the two differently.',
  ask='Say the margin line your group agreed on, and the mark you would give.',
  note='Both examiners here are defensible. Say which principle yours serves.',
  icons=['book', 'pen', 'tooth', 'speech']),

 dict(tier='C', title='The patient who wants the terms',
  situation=['A patient asks Leila to explain exactly where the lesion is, and then asks '
             'what the proper names of the surfaces are, because she wants to look the '
             'condition up herself afterwards.',
             'Leila has been taught to avoid technical terms with patients. She can see '
             'that this patient will search for whatever words she is given, correct or '
             'not.'],
  who=['Leila Mansour', 'Thandiwe Mabaso'],
  facts=['The patient has asked for the technical terms directly.',
         'She intends to read about the condition afterwards.',
         'Avoiding the terms will not stop her searching.',
         'A wrong search term will produce wrong information.'],
  question='Do you give her the terms, and what do you give alongside them?',
  questions=['What is lost by giving the terms, and what is lost by withholding them?',
             'What would you write down for her to take away?',
             'How would you say the same thing to a patient who had not asked?'],
  words=['interproximal', 'mesial', 'distal', 'occlusal', 'buccal'],
  language=[('Giving a term with its meaning',
             ['The surface is called the distal surface, which means the one facing away '
              'from the front of your mouth.',
              'Between two teeth is called interproximal.']),
            ('Giving it something to hold',
             ['I shall write the two words down for you.',
              'If you read anything that worries you, bring it to the next visit.'])],
  how='In threes. Eight minutes. Write the note you would hand the patient.',
  point='You can decide what technical language a patient should leave with, and give it '
        'in a form that will not mislead her.',
  ask='Read out the note your group would hand her.',
  note='Withholding the terms is also defensible. Say what it protects.',
  icons=['person', 'speech', 'card', 'tick']),
],

review_intro='Five activities, one for each skill, and one that brings back Units 1 to 3. '
             'Nothing in this part repeats a task you have already done. Thirty minutes.',
review=[
 dict(skill='reading', title='A quadrant described in prose',
   kind='gap', rubric='Complete the paragraph with the eight terms. Each is used once.',
   how='Then say which sentence could not have been written without the midline.',
   example='The surface facing the cheek is the buccal surface.',
   bank=['mesial', 'distal', 'buccal', 'lingual', 'palatal', 'occlusal', 'incisal',
         'interproximal'],
   bank_head='The eight terms, each used once',
   pics=['mesial', 'palatal', 'occlusal', 'interproximal'],
   pairs=[('The outer surface of the lower six faces the cheek and is therefore '
           '____________.', 'buccal'),
          ('Its inner surface faces the tongue and is therefore ____________.', 'lingual'),
          ('The inner surface of the upper six faces the palate and is ____________.',
           'palatal'),
          ('Its biting surface is the ____________ surface.', 'occlusal'),
          ('The surface of the upper six facing towards the midline is ____________.',
           'mesial'),
          ('The surface facing away from the midline is ____________.', 'distal'),
          ('The area between the six and the five is ____________.', 'interproximal'),
          ('The biting edge of the upper one is the ____________ edge.', 'incisal')],
   fig=F.dentition_map('THE TEETH THIS PARAGRAPH DESCRIBES',
     highlight=['16', '15', '11', '36'],
     note='Four teeth. Every one of the eight terms in the paragraph applies to one of '
          'them.'),
   fig_cap='The four teeth the paragraph describes, shaded on the chart.'),

 dict(skill='listening', title='Four things from 5.1 you were not asked about',
   kind='choice', rubric='Listen to 5.1 once more and circle a, b or c.',
   how='These are not the questions you answered in part 5. One listening is enough.',
   example='Labial is used of   a) the front teeth   b) the back teeth.   Answer: a',
   bank=['labial', 'the curve', 'an edge', 'a radiograph'],
   bank_head='The four small points to listen for this time',
   pics=['buccal', 'distal', 'incisal', 'interproximal'],
   pairs=[('Labial is used of   a) the front teeth   b) the back teeth   '
           'c) both', 'a'),
          ('A second molar has a distal surface facing   a) a third molar   '
           'b) nothing at all   c) the midline', 'b'),
          ('An incisal edge is called an edge because   a) it is sharp   '
           'b) it has almost no area   c) it is at the front', 'b'),
          ('Dr Nilsen ends by saying you should learn   a) the eight terms   '
           'b) the principle   c) the exception', 'b')],
   fig=F.mini_table('WHAT YOU ARE LISTENING FOR THIS TIME',
     ['Not this', 'But this'],
     [['the eight terms', 'the two places the lecture qualifies a term'],
      ['the principle', 'what the lecture says follows from it'],
      ['the exception', 'why the exception exists at all']]),
   fig_cap='The same lecture, listened to for its qualifications rather than its terms.'),

 dict(skill='speaking', title='Naming a surface you cannot see',
   rubric='Explain to a partner how you know something about a surface you never saw.',
   how='Student B plays a colleague who does not believe you and asks how you can know. Four '
       'minutes, then swap. Use a radiograph you have actually looked at, if you have one.',
   model=[('Colleague', 'You have written caries on the distal surface. Did you see it?'),
          ('Student', 'Not directly. The contact is tight and the mirror does not reach.'),
          ('Colleague', 'Then how do you know?'),
          ('Student', 'From the bitewing. The lesion is clear at the contact point.'),
          ('Student', 'The chart says not visible on direct examination, and then the '
                      'radiographic finding.'),
          ('Colleague', 'So the two entries say different things on purpose.')],
   checklist=['you distinguished what you saw from what you inferred',
              'you named the surface with one of the eight terms',
              'you said how the finding was made',
              'you said what the chart records about both'],
   fig=F.conversation('“DID YOU SEE IT?”',
     dict(name='You', role='the student', skin='3', hair='black', style='tied',
          tunic='teal'),
     dict(name='Your partner', role='a colleague', skin='2', hair='brown', style='short',
          tunic='blue'),
     [('R', 'You have written caries on the distal surface. Did you see it?'),
      ('L', 'Not directly. The contact is tight.'),
      ('R', 'Then how do you know?'),
      ('L', 'From the bitewing, at the contact point.'),
      ('L', 'The chart records both: not visible, then the radiographic finding.'),
      ('R', 'Two entries, on purpose.')],
     note='The question a colleague asks is not hostile. It is the question the record '
          'has to answer by itself.'),
   fig_cap='The question every interproximal finding has to be able to answer.'),

 dict(skill='writing', title='The same quadrant, for two different readers',
   rubric='Write the same quadrant twice: once as a chart, once as two sentences for the '
          'patient.',
   how='Not the chart you wrote in part 8. Here the quadrant is the lower left, and one '
       'surface is already restored.',
   model=['CHART. LL6 occlusal: amalgam restoration, sound margins. LL6 buccal: sound. '
          'LL6 lingual: sound, seen with mirror. LL6 mesial: not visible, contact tight. '
          'LL7 distal: not visible. Action: bitewing at next visit.',
          'FOR THE PATIENT. The large filling in your lower left back tooth is in good '
          'condition, and the surfaces I can see are healthy. There are two surfaces '
          'between your back teeth that I cannot see at all, so I should like a small '
          'radiograph of that area next time.'],
   scaffold=['CHART. LL6 occlusal:', 'LL6 buccal and lingual:', 'LL6 mesial:',
             'LL7 distal:', 'Action:', 'FOR THE PATIENT.'],
   checklist=['the chart uses the eight terms and the patient version uses none of them',
              'both versions say which surfaces could not be seen',
              'both versions end with the same next step',
              'nothing in the patient version is less true than the chart'],
   fig=F.contrast('ONE QUADRANT, TWO READERS',
     'THE CHART', ['LL6 mesial: not visible, contact tight',
                   'LL7 distal: not visible',
                   'Action: bitewing at next visit'],
     'THE PATIENT', ['there are two surfaces between your back teeth',
                     'that I cannot see at all',
                     'so I should like a small radiograph next time'],
     'Eleven words, for a colleague in ten years.',
     'Thirty words, for the person in the chair today.'),
   fig_cap='The same two surfaces, written for a colleague and spoken to a patient.'),

 dict(skill='reading', title='Units 1 to 4: structure, space, or name?',
   kind='sort', rubric='Write S for an anatomical structure, P for a space or region, and '
                       'N for a name or an agreement.',
   columns=('S', 'P', 'N'),
   how='Three of these come from earlier units. Then find the one item that your group '
       'disagrees about, and say why it is hard to place.',
   example='enamel  —  S',
   bank=['a structure', 'a space or region', 'a name or agreement'],
   bank_head='The three classes everything in four units falls into',
   pics=['interproximal', 'mesial', 'occlusal', 'palatal'],
   pairs=[('enamel', 'S'), ('the interproximal area', 'P'), ('mesial', 'N'),
          ('the hard palate', 'S'), ('a quadrant', 'N'), ('the vestibule', 'P')],
   fig=F.contrast('THREE KINDS OF THING IN FOUR UNITS',
     'YOU COULD SECTION IT', ['enamel', 'dentine', 'the hard palate', 'the gingiva'],
     'YOU COULD NOT', ['the interproximal area', 'a quadrant', 'mesial', 'notation'],
     'A structure has tissue in it.',
     'A space has boundaries; a name has only agreement behind it.'),
   fig_cap='The distinction that has run under all four units, now with surfaces in it.'),
],
end_fig_title='EVERY SURFACE, FROM ONE PRINCIPLE',
end_fig_steps=['Every surface is named by what it faces.',
               'The cheek gives buccal; the lip gives labial.',
               'The tongue gives lingual; the palate gives palatal, above only.',
               'The midline gives mesial towards it and distal away from it.',
               'The opposing tooth gives occlusal behind and incisal in front.',
               'Between two teeth is interproximal, and it cannot be seen.'],
end_fig_note='Six lines, one principle, one exception. The last line is the one that '
             'generates the entries nobody writes.',
end_fig_cap='The whole of Unit 4 on one page.',

p1_recap=['You have counted the surfaces of a molar and said how many of them you can '
          'actually look at.',
          'You have seen the midline that mesial and distal are measured from, and the '
          'four ways a surface can be reached.'],
p1_ask='Which surface of which tooth have you never once examined directly?',
p1_icons=['mirror', 'tooth', 'xray', 'light'],
p2_recap=['Eight terms you can now use: mesial, distal, buccal, lingual, palatal, '
          'occlusal, incisal and interproximal.',
          'Four groups of sentences: defining by what a surface faces, measuring from the '
          'midline, the difference between the arches, and the biting surfaces with the '
          'space between teeth.',
          'One principle to hold on to: every surface is named by what it faces, and only '
          'the inner surface needs a condition.'],
p2_ask='Which two of the eight could never be used of the same tooth?',
p3_recap=['You have moved from recognising these eight terms to choosing between them '
          'under a definition you have to produce yourself.',
          'All eight appear in the lecture in part 5. Say them out loud before you listen.'],
p3_ask='Define three of the eight out loud, without looking at the page.',
p3_icons=['book', 'tooth', 'speech', 'tick'],
p4_recap=['The surface which faces the cheek is called the buccal surface: a relative '
          'clause says what it faces and the passive gives it its name.',
          'Rather than is the form that corrects an expected word, which is what '
          'an incisal edge needs when a student has called it a surface.'],
p4_ask='Define one surface and then correct one wrong name, using rather than.',
p10_recap=['You can define all eight surface terms from one principle, and state the one '
           'exception the upper arch requires.',
           'You can dictate and write a quadrant in which every surface has an entry, and '
           'in which a surface you could not inspect reads not visible rather than sound.',
           'Unit 5 takes the instruments off the tray. Each of them is designed to reach '
           'one of the surfaces you have just named.'],
p10_ask='Dictate one quadrant to the person next to you, with the book closed.',
)
