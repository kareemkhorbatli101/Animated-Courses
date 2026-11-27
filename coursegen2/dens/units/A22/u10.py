# -*- coding: utf-8 -*-
import figs2 as F

U = dict(
num=10,
title='The Whole Examination, from Greeting to Plan',
level='A2.2',
strap='CEFR A2.2  ·  Grammar: the present perfect for work completed: I have examined, '
      'has been recorded, there has been no change  ·  Nine steps, one order, and a plan '
      'somebody else could carry out',
threads={'domain': ['the examination', 'the record', 'the plan'],
         'function': ['reporting completed work', 'prioritising', 'handing over']},
can_do=['take a history and name the presenting complaint in the patient’s own words',
        'say what you have examined, inside the mouth and outside it',
        'give a provisional diagnosis and say what it is still waiting for',
        'write a treatment plan in an order, with a reason for the order',
        'hand over an appointment you could not finish, without losing anything'],
recycles='Unit 6 (a finding in one sentence), Unit 7 (the chart and the chain), Unit 8 '
         '(grading and ordering lesions) and Unit 9 (the film, and the four strengths)',
prepares='Book 2, which takes these nine examinations and asks you to explain them: to '
         'a patient, to a supervisor, and in a case presentation of your own',

warm=['What is the first thing you say to a patient you have never met?',
      'What do you examine before you look inside the mouth at all?',
      'In your own clinic, what is written down first, and who writes it?'],
warm_fig=F.step_sequence('NINE STEPS, IN ORDER',
    ['The greeting, and the patient’s own words about why they came.',
     'The medical and dental history.',
     'The examination outside the mouth.',
     'The examination inside the mouth, soft tissues first.',
     'The teeth, surface by surface.',
     'The periodontal chart.',
     'The radiographs, each with its own question.',
     'The provisional diagnosis.',
     'The plan, in an order, and the date of the next visit.'],
    stop_points=[1],
    note='Nine steps. The marked one is the only one that takes no equipment, and it is '
         'the one that decides what the other eight are for.'),
warm_fig_cap='The nine steps of a new-patient examination, in the order they are taken.',
warm_fig_alt='Nine numbered steps of a dental examination, from the greeting and the '
             'patient’s own words through history, examination, charting and '
             'radiographs to the provisional diagnosis and the plan.',
warm_fig2=F.icon_cards('FOUR THINGS A PLAN HAS TO CARRY',
    [('what', 'form'), ('in what order', 'tick'),
     ('how long each takes', 'clock'), ('what it will cost', 'card')],
    cols=4,
    note='A plan with the first and none of the other three is a list, and a list is not '
         'something anybody can carry out.'),
warm_fig2_cap='Four things that turn a list of treatments into a plan.',
p1_cards=['a complaint', 'a history', 'extraoral', 'intraoral', 'a treatment plan',
          'a recall'],

preview_intro='This unit has eight terms and ten sentences. Read this page first. Two of '
              'the eight are a pair of opposites about where you are looking, and two '
              'are the names of the two documents every examination ends in.',
set_fig_title='THE EIGHT TERMS OF UNIT 10',
set_fig_cap='The eight terms you will be able to use by the end of this unit.',
set=[
 dict(term='a complaint', pos='noun', thread='domain',
      definition='what the patient has come about, in their own words',
      example='The presenting complaint was pain on the lower left when eating.',
      collocation='the presenting complaint  ·  record the complaint',
      recycle=[10]),
 dict(term='a history', pos='noun', thread='domain',
      definition='what the patient tells you about their health and their teeth before '
                 'you look',
      example='A history is taken before the mouth is examined, every time.',
      collocation='take a history  ·  the medical history', recycle=[10]),
 dict(term='extraoral', pos='adjective', thread='domain',
      definition='outside the mouth',
      example='The extraoral examination found no swelling and no tenderness.',
      collocation='an extraoral examination  ·  extraoral findings', recycle=[10]),
 dict(term='intraoral', pos='adjective', thread='domain',
      definition='inside the mouth',
      example='The intraoral examination begins with the soft tissues.',
      collocation='an intraoral examination  ·  intraoral findings', recycle=[10]),
 dict(term='a provisional diagnosis', pos='noun', thread='domain',
      definition='the diagnosis you hold for now, before all the evidence is in',
      example='The provisional diagnosis was caries of the lower left six.',
      collocation='a provisional diagnosis  ·  revise the diagnosis', recycle=[10]),
 dict(term='a treatment plan', pos='noun', thread='domain',
      definition='the list of what will be done, in the order it will be done',
      example='The treatment plan has four items and two appointments.',
      collocation='agree a treatment plan  ·  the plan was revised', recycle=[10]),
 dict(term='to prioritise', pos='verb', thread='function',
      definition='to put things in the order of what matters most',
      example='Prioritise pain, then disease that is progressing, then appearance.',
      collocation='prioritise the plan  ·  prioritised by urgency', recycle=[10]),
 dict(term='a recall', pos='noun', thread='domain',
      definition='the time after which a patient is seen again',
      example='A recall of six months was agreed and written in the plan.',
      collocation='a recall of six months  ·  the recall interval', recycle=[10]),
],
set_note='Learn these eight. The fifth and the sixth are the two things a colleague '
         'reads first and the two that students write last.',

phrase_fig_title='TEN SENTENCES FOR REPORTING WORK THAT IS FINISHED',
phrases=[
 ('Saying what you have done',
  ['I have taken a history and examined the mouth.',
   'Six sites have been charted round every tooth.']),
 ('Saying what you have found',
  ['I have found one cavitated lesion and two slight ones.',
   'No abnormality has been detected outside the mouth.']),
 ('Saying what has and has not changed',
  ['There has been no change since the last examination.',
   'The pocket on the lower left six has deepened by one millimetre.']),
 ('Saying what is still to be done',
  ['The bitewing has not yet been taken.',
   'I have not yet discussed the cost with her.',
   'Nothing has been recorded about the upper right quadrant.',
   'She has been given the leaflet and an appointment for June.']),
],
phrase_fig_cap='Ten sentences, in four groups. The fourth group is the one that makes a '
               'half-finished appointment safe to hand over.',
phrase_note='Note that every sentence in the fourth group is about something missing. A '
            'handover that only says what was done is the dangerous kind.',

receptive=[
 dict(term='a symptom', definition='something the patient notices and reports',
      example='Pain is a symptom; the patient brings it to you.'),
 dict(term='a sign', definition='something you find, whether the patient noticed it or '
                                'not',
      example='Bleeding on probing is a sign, and most patients have not seen it.'),
 dict(term='the soft tissues',
      definition='the gingiva, the mucosa, the tongue, the palate and the lips',
      example='The soft tissues are examined before the teeth, every time.'),
 dict(term='an estimate', definition='what the treatment will cost, worked out in '
                                     'advance',
      example='The estimate was given in writing before anything was started.'),
 dict(term='outstanding', definition='still to be done or still to be found out',
      example='Two items in the plan are outstanding at the end of this visit.'),
 dict(term='a referral', definition='sending a patient to somebody else for part of '
                                    'their care',
      example='A referral was made for the upper right seven.'),
],
receptive_fig_title='TERMS TO RECOGNISE IN UNIT 10',
receptive_fig_cap='You will meet these six in the lecture and the readings. The first '
                  'two are a pair, and the difference between them matters.',

preview_task=dict(kind='match', rubric='Match each term with what it means.',
  example='extraoral  —  outside the mouth',
  how='Cover the preview page first. Then check your answers against it.',
  pairs=[('a complaint', 'what the patient has come about, in their words'),
         ('a history', 'what the patient tells you before you look'),
         ('extraoral', 'outside the mouth'),
         ('intraoral', 'inside the mouth'),
         ('a provisional diagnosis', 'the diagnosis you hold before all the evidence is '
                                     'in'),
         ('a recall', 'the time after which a patient is seen again')]),

vocab_tasks=[
 dict(kind='gap', rubric='Complete each sentence with one of the eight terms.',
   example='The presenting complaint was pain on the lower left when eating.',
   pairs=[('The presenting ____________ was pain on the lower left when eating.',
           'complaint'),
          ('A ____________ is taken before the mouth is examined, every time.',
           'history'),
          ('The ____________ examination found no swelling outside the mouth.',
           'extraoral'),
          ('The ____________ examination begins with the soft tissues.', 'intraoral'),
          ('The provisional ____________ was caries of the lower left six.',
           'diagnosis'),
          ('The treatment ____________ has four items and two appointments.', 'plan'),
          ('____________ pain first, then disease that is progressing.', 'Prioritise'),
          ('A ____________ of six months was agreed and written down.', 'recall')],
   fig=F.morph_builder('FOUR TERMS, AND THE PART THAT PLACES THEM',
     [('extra-', 'oral', '', 'extraoral', 'outside the mouth'),
      ('intra-', 'oral', '', 'intraoral', 'inside the mouth'),
      ('pro-', 'vision', '-al', 'provisional', 'held for now, seeing ahead'),
      ('', 'prior', '-itise', 'prioritise', 'put first things first')],
     note='Extra- means outside and intra- means inside. The two words differ by three '
          'letters and by the whole of an examination.'),
   fig_cap='Four terms taken apart, with the two prefixes that are easiest to confuse.'),

 dict(kind='odd', rubric='Three of the four belong to one class. Circle the one that '
                         'does not, and name the class the three share.',
   how='Name the class out loud before you name the odd one out. Then say which of them '
       'your own clinic records badly.',
   example='history / complaint / examination / plan  —  a plan is not part of gathering '
           'information',
   bank=['gathering information', 'a finding', 'a document that ends the visit',
         'a time'],
   bank_head='The four classes these terms fall into',
   pics=['a history', 'a complaint', 'a treatment plan', 'a recall'],
   pairs=[('history / complaint / examination / plan', 'plan'),
          ('pain / swelling / bleeding on probing / a recall', 'a recall'),
          ('a symptom / a complaint / what the patient reports / a sign', 'a sign'),
          ('extraoral / intraoral / soft tissues / six months', 'six months'),
          ('a plan / an estimate / a recall date / a radiolucency', 'a radiolucency')]),

 dict(kind='short', rubric='Write what each step of the examination establishes.',
   example='the greeting and the patient’s own words  (why they came, in the words they '
           'would use again)',
   pairs=[('the greeting and the patient’s own words',
           'why they came, in the words they would use again'),
          ('the history',
           'what else is going on in their health that changes what you may do'),
          ('the extraoral examination',
           'swelling, tenderness or asymmetry outside the mouth'),
          ('the periodontal chart',
           'the depth of the pockets at six sites round every tooth'),
          ('the radiographs',
           'what is on the surfaces you cannot see, one question at a time')],
   fig=F.form_annotated('WHAT EACH STEP PUTS INTO THE RECORD',
     'NEW PATIENT  ·  FIVE OF THE NINE STEPS',
     [('Complaint', 'in the patient’s own words, in quotation marks'),
      ('History', 'medical, then dental, then what they do every day'),
      ('Extraoral', 'swelling, tenderness, asymmetry, the joint'),
      ('Intraoral', 'the soft tissues first, then the teeth'),
      ('Chart', 'six sites a tooth, with bleeding, as in Unit 7')],
     callouts=[(1, 'the only line in the record that is somebody else’s language')],
     note='Five lines. The first is the one students rewrite into their own words, and '
          'it is the one that must not be rewritten.'),
   fig_cap='Five steps of the examination and what each one leaves in the record.'),

 dict(kind='sort', rubric='Write S for a symptom, F for a finding and P for part of the '
                          'plan.',
   columns=('S', 'F', 'P'),
   how='Then say why a symptom in the patient’s own words is worth more than the same '
       'thing in yours.',
   example='“It hurts when I drink something cold.”  —  S',
   bank=['a symptom', 'a finding', 'part of the plan'],
   bank_head='The three kinds of line in a new-patient record',
   pics=['a complaint', 'a provisional diagnosis', 'a treatment plan', 'a recall'],
   pairs=[('“It hurts when I drink something cold.”', 'S'),
          ('A radiolucency on the distal of the lower left six.', 'F'),
          ('“The gum bleeds when I brush.”', 'S'),
          ('Pockets of five millimetres at four sites.', 'F'),
          ('Restore the lower left six at the next visit.', 'P'),
          ('Recall at six months with bitewings.', 'P')],
   fig=F.contrast('THREE KINDS OF LINE, AND WHO OWNS EACH',
     'THE PATIENT’S', ['why they came',
                       'what they notice',
                       'what they are worried about',
                       'in their own words, unedited'],
     'YOURS', ['what you found',
               'what you concluded, marked as a conclusion',
               'what will be done, and when',
               'in the clinic’s language'],
     'Quote it. Do not improve it.',
     'Write it. Mark the conclusions as conclusions.'),
   fig_cap='The two voices in one record, and the rule that governs each of them.'),
],

g_point='the present perfect for work completed: I have examined, has been recorded, '
        'there has been no change',
g_source='the ten sentences on the preview page',
g_rule=['I have taken a history and examined the mouth. The present perfect reports work '
        'that is finished inside an appointment that is not. It is the tense of the '
        'examination, and of everything you say to the person who comes in after you.',
        'Six sites have been charted round every tooth. The passive, because what was '
        'done matters and who did it is already on the record. Have been charted, not '
        'were charted: the second puts the work in a closed past and loses its '
        'connection with this morning.',
        'There has been no change since the last examination. The present perfect with '
        'since names a period that runs up to now. A finding that has not changed is '
        'still a finding, and it is the one most often left out.'],
g_mnemonic_title='THREE PATTERNS FOR AN APPOINTMENT THAT IS NOT OVER',
g_mnemonic=[
 ('I have …ed', 'what you did, in a visit still open',
  'I have examined the soft tissues', 'mirror'),
 ('has been …ed', 'what was done, the doer already known',
  'six sites have been charted', 'form'),
 ('has not yet …', 'what is still outstanding',
  'the bitewing has not yet been taken', 'clock'),
],
g_mnemonic_cap='Three patterns. The third is the one a handover is made of, and the one '
               'students leave out.',
g_mnemonic_note='Since names the start of the period: since March, since the last '
                'examination. For names its length: for two years. Both take the present '
                'perfect.',
g_fig=('TWO WAYS TO HAND OVER A HALF-FINISHED APPOINTMENT',
       'IN THE SIMPLE PAST',
       ['I examined her and charted the teeth.',
        'I took a bitewing.',
        'She needs a filling.'],
       'IN THE PRESENT PERFECT',
       ['I have taken a history and examined the soft tissues and the teeth.',
        'The chart has been completed; the bitewing has not yet been taken.',
        'The provisional diagnosis is caries of the lower left six; the plan has not '
        'been agreed with her.'],
       'Three finished facts, and no way of knowing what is left.',
       'The same appointment, with everything outstanding named.'),
g_fig_cap='One half-finished appointment handed over twice, with the version a colleague '
          'can pick up.',
g_tasks=[
 dict(kind='gap', rubric='Complete each sentence with have, has, been or not.',
   example='I have taken a history and examined the mouth.',
   pairs=[('I ____________ taken a history and examined the mouth.', 'have'),
          ('Six sites ____________ been charted round every tooth.', 'have'),
          ('The chart ____________ been completed.', 'has'),
          ('The bitewing has ____________ yet been taken.', 'not'),
          ('There ____________ been no change since the last examination.', 'has'),
          ('Nothing has ____________ recorded about the upper right quadrant.',
           'been')]),

 dict(kind='choice', rubric='Circle a, b or c.',
   how='Each of these is a line from a real handover, written by a student.',
   example='I   a) examined   b) have examined   the mouth.   Answer: b',
   bank=['I have examined', 'has been charted', 'has not yet been taken',
         'there has been no change'],
   bank_head='The four patterns these lines have to choose between',
   pics=['a history', 'extraoral', 'a treatment plan', 'a recall'],
   pairs=[('In a handover, the right tense is   a) the simple past   b) the present '
           'perfect   c) the future', 'b'),
          ('The patient’s complaint is recorded   a) in your words   b) in her words   '
           'c) not at all', 'b'),
          ('The soft tissues are examined   a) before the teeth   b) after the teeth   '
           'c) only if the patient asks', 'a'),
          ('A plan is prioritised by   a) what is quickest   b) pain, then progressing '
           'disease   c) what the patient asks for first', 'b'),
          ('What is outstanding at the end of a visit is   a) remembered   b) written '
           'down   c) left for next time', 'b')]),

 dict(kind='short', rubric='Rewrite each line so that it says what is still '
                           'outstanding.',
   example='I examined her and charted the teeth.  (I have examined her and charted the '
           'teeth; the bitewing has not yet been taken.)',
   how='Use the present perfect in every answer, and name one thing not yet done.',
   pairs=[('I examined her and charted the teeth.',
           'I have examined her and charted the teeth; the bitewing has not yet been '
           'taken.'),
          ('I took the history.',
           'I have taken the history; the medical part has not yet been checked with '
           'her doctor.'),
          ('The plan is four items.',
           'The plan has been written; it has not yet been agreed with the patient.'),
          ('I gave her the estimate.',
           'She has been given the estimate; she has not yet said whether she accepts '
           'it.')]),

 dict(kind='gap', rubric='One word is wrong in each sentence. Write the correction.',
   example='I have examine the mouth.  →  examined',
   pairs=[('I have examine the mouth.', 'examined'),
          ('Six sites has been charted round every tooth.', 'have'),
          ('There has been no change from the last examination.', 'since'),
          ('The intraoral examination found no swelling outside the mouth.',
           'extraoral'),
          ('The provisional diagnosis is the last line of the plan.', 'first')]),
],

listen_intro='Three recordings: a lecture on the order of an examination and why the '
             'greeting is part of it, a tutorial in which a plan with four items turns '
             'out to have no order, and a clinic in which an appointment has to be '
             'handed over half-finished. Do the task before, the task while you listen, '
             'and the task after.',
listening=[
 dict(title='Lecture: the order, and why the first step has no instrument',
   genre='lecture',
   what='Dr Nilsen gives the nine steps and defends the first one against a student who '
        'wants to start with the mirror.',
   speakers=['Dr Petra Nilsen', 'Leila Mansour'],
   conv_lines=[('L', 'Nine steps. Which would you drop if you were late?'),
               ('R', 'The first one. It is only talking.'),
               ('L', 'It is the only step that tells you what to look for.'),
               ('R', 'So the complaint directs the examination.'),
               ('L', 'It directs it, and it does not limit it.'),
               ('R', 'I still examine everything.')],
   conv_cap='Six turns in which the step that looks skippable turns out to be the one '
            'the rest depends on.',
   conv_note='The distinction in turn five is the one that separates a good examination '
             'from a quick one.',
   pre=dict(kind='choice',
     rubric='Before you listen, predict which step Dr Nilsen defends hardest.',
     how='Use the nine-step figure. Then listen and check.',
     example='The soft tissues come   a) first   b) last.   Answer: a',
     bank=['the greeting', 'the history', 'the chart', 'the plan'],
     bank_head='The four steps the lecture weighs against each other',
     pics=['a complaint', 'a history', 'intraoral', 'a treatment plan'],
     pairs=[('The examination begins with   a) the mirror   b) the patient’s own '
             'words   c) the radiograph', 'b'),
            ('Inside the mouth, you examine   a) the teeth first   b) the soft tissues '
             'first   c) either', 'b'),
            ('The complaint   a) limits the examination   b) directs it   c) has '
             'nothing to do with it', 'b')]),
   fig=F.mini_table('THE NINE STEPS, AND WHAT EACH NEEDS',
     ['Step', 'What it needs', 'What it gives you'],
     [['the complaint', 'nothing but listening', 'what to look for first'],
      ['the history', 'nothing but questions', 'what you may safely do'],
      ['extraoral', 'two hands', 'swelling, tenderness, the joint'],
      ['intraoral', 'a mirror and a light', 'the soft tissues, then the teeth'],
      ['the chart and the films', 'a probe and a receptor', 'depths, and what is '
                                                            'hidden']],
     highlight=[1], note='The shaded row needs no equipment at all, and the other four '
                         'are aimed by it.'),
   fig_cap='Five of the nine steps, with what each needs and what each gives back.',
   script=[('Dr Nilsen', 'Nine steps in a new-patient examination. You know them all.'),
           ('Leila', 'From the greeting to the plan.'),
           ('Dr Nilsen', 'Now. You are twenty minutes late. Which step goes?'),
           ('Leila', 'The first one, I suppose. It is only talking.'),
           ('Dr Nilsen', 'Say that again and listen to yourself saying it.'),
           ('Leila', 'It is only the part where she tells me why she came.'),
           ('Dr Nilsen', 'Which is the only step that tells you what to look for.'),
           ('Leila', 'So the complaint directs the examination.'),
           ('Dr Nilsen', 'It directs it. It does not limit it. Keep those apart.'),
           ('Leila', 'I examine everything either way.'),
           ('Dr Nilsen', 'Everything. But you start where she is pointing.'),
           ('Leila', 'And her words go in the record as her words.'),
           ('Dr Nilsen', 'In quotation marks. Do not improve them.'),
           ('Leila', 'Why not? Mine would be shorter.'),
           ('Dr Nilsen', 'Because yours already contain your conclusion.'),
           ('Leila', 'Hers do not. They are just what she noticed.'),
           ('Dr Nilsen', 'Which is worth more in six months than anything you write.'),
           ('Leila', 'Then the history. Why before the mouth?'),
           ('Dr Nilsen', 'Because it changes what you are allowed to do.'),
           ('Leila', 'And inside the mouth, soft tissues before teeth.'),
           ('Dr Nilsen', 'Always. The teeth are interesting and they can wait.'),
           ('Leila', 'Nobody has ever missed a tooth.'),
           ('Dr Nilsen', 'And people miss the tongue every week. That is the reason.'),
           ('Leila', 'Then chart, then films, then the diagnosis.'),
           ('Dr Nilsen', 'And then a plan, in an order, that somebody else could '
                         'follow.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='How many steps are there?  (nine)',
     pairs=[('How many steps are there?', 'nine'),
            ('Which step does Leila want to drop?', 'the first one'),
            ('What does the complaint do to the examination?', 'it directs it'),
            ('How are the patient’s words recorded?', 'in quotation marks'),
            ('Why does the history come before the mouth?',
             'it changes what you are allowed to do'),
            ('What is examined before the teeth?', 'the soft tissues')])},
   post=dict(kind='short', rubric='Answer Dr Nilsen’s questions as Leila does.',
     example='“Which step goes if you are late?”  (none of them)',
     pairs=[('“Which step goes if you are late?”', 'none of them'),
            ('“What does the complaint tell you?”', 'what to look for first'),
            ('“Why keep her own words?”',
             'yours already contain your conclusion'),
            ('“Why the history first?”', 'it changes what you may do'),
            ('“Soft tissues or teeth first?”', 'the soft tissues')]),
   point='You now have the nine steps in order, and the reason the first of them is not '
         'the one to drop when the morning is late.',
   ask='Say the nine steps out loud, in order, without looking at the page.',
   icons=['book', 'speech', 'mirror', 'form']),

 dict(title='Tutorial: four items and no order', genre='tutorial',
   what='Daniel brings a plan with four treatments in it, and Dr Nilsen asks which one '
        'happens first and why.',
   speakers=['Dr Petra Nilsen', 'Daniel Owusu'],
   conv_lines=[('L', 'Four items. Which happens first?'),
               ('R', 'Whichever she can pay for.'),
               ('L', 'That is an answer. It is not the first one.'),
               ('R', 'Then the one that hurts.'),
               ('L', 'Good. And second?'),
               ('R', 'The one that is getting worse while we wait.')],
   conv_cap='Six turns in which a list of four treatments becomes a plan with an order.',
   pre=dict(kind='choice',
     rubric='Before you listen, decide what a plan is prioritised by.',
     how='Say your answer out loud. Then listen.',
     example='A list is   a) a plan   b) not a plan.   Answer: b',
     bank=['pain', 'progressing disease', 'appearance', 'cost'],
     bank_head='Four things that might decide the order',
     pics=['a treatment plan', 'to prioritise', 'a recall', 'a complaint'],
     pairs=[('A plan is prioritised first by   a) pain   b) cost   c) appearance', 'a'),
            ('Second comes   a) appearance   b) disease that is progressing   '
             'c) whatever is quickest', 'b'),
            ('A plan with no order is   a) still a plan   b) a list   '
             'c) a diagnosis', 'b')]),
   fig=F.form_annotated('ONE PLAN, PRIORITISED',
     'FOUR ITEMS  ·  TWO APPOINTMENTS',
     [('First', 'the lower left six: she is in pain, and it is extensive'),
      ('Second', 'the periodontal treatment: it is progressing while we wait'),
      ('Third', 'the two slight lesions: fluoride today, review in six months'),
      ('Fourth', 'the discoloured upper front tooth: appearance, and not urgent'),
      ('Recall', 'six months, with bitewings, whether or not all four are done')],
     callouts=[(4, 'the item the patient would have put first')],
     note='Five lines. The fourth matters to her most, and it is still fourth.'),
   fig_cap='One plan in its proper order, with the item the patient would have chosen '
           'first.',
   script=[('Dr Nilsen', 'Read me your plan for Mrs Mabaso.'),
           ('Daniel', 'Four items. A filling, the periodontal treatment, two slight '
                      'lesions, and the discoloured front tooth.'),
           ('Dr Nilsen', 'Which happens first?'),
           ('Daniel', 'Whichever she can pay for.'),
           ('Dr Nilsen', 'That is an answer, and it is not the first one.'),
           ('Daniel', 'Then the one that hurts. The lower left six.'),
           ('Dr Nilsen', 'Why the pain, before anything else?'),
           ('Daniel', 'Because she came about it, and because it is extensive.'),
           ('Dr Nilsen', 'And second?'),
           ('Daniel', 'The periodontal treatment. It is progressing while we wait.'),
           ('Dr Nilsen', 'Good. Third?'),
           ('Daniel', 'Fluoride on the two slight lesions. Six months to look again.'),
           ('Dr Nilsen', 'And the front tooth she actually asked about?'),
           ('Daniel', 'Fourth. It is appearance, and nothing is being lost.'),
           ('Dr Nilsen', 'Now the hard part. How do you tell her that?'),
           ('Daniel', 'I say the order, and the reason for each place in it.'),
           ('Dr Nilsen', 'And if she wants the front tooth first?'),
           ('Daniel', 'I say what waiting costs on the other three.'),
           ('Dr Nilsen', 'And then?'),
           ('Daniel', 'And then it is her mouth, and she decides.'),
           ('Dr Nilsen', 'Yes. Write what you advised and what she chose.'),
           ('Daniel', 'Both lines.'),
           ('Dr Nilsen', 'Both lines, every time. What is missing from your plan?'),
           ('Daniel', 'How long each item takes. And the cost.'),
           ('Dr Nilsen', 'Then it is a list. Put those in and it becomes a plan.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='How many items are in the plan?  (four)',
     pairs=[('How many items are in the plan?', 'four'),
            ('What was Daniel’s first answer about the order?',
             'whichever she can pay for'),
            ('What comes first, and why?', 'the pain, and it is extensive'),
            ('What comes second?', 'the periodontal treatment'),
            ('Where does the front tooth come?', 'fourth'),
            ('What two things were missing from the plan?',
             'how long each item takes, and the cost')])},
   post=dict(kind='short', rubric='Write the reason for each item’s place in the order.',
     example='the lower left six, first  (she is in pain, and the lesion is extensive)',
     pairs=[('the lower left six, first',
             'she is in pain, and the lesion is extensive'),
            ('the periodontal treatment, second',
             'it is progressing while we wait'),
            ('the two slight lesions, third',
             'fluoride holds them, and six months will show whether they moved'),
            ('the front tooth, fourth',
             'it is appearance, and nothing is being lost by waiting'),
            ('the recall', 'six months with bitewings, whether or not all four are '
                           'done')]),
   point='You now know what a plan is prioritised by, and that a list of treatments with '
         'no order and no times is not yet a plan.',
   ask='Say the four items in order, with one reason each.',
   icons=['form', 'tick', 'clock', 'card']),

 dict(title='In the clinic: handing over halfway',
   genre='clinical supervision',
   what='Leila has to leave an appointment unfinished and tell Dr Rahman exactly where '
        'she has got to.',
   speakers=['Dr Yusuf Rahman', 'Leila Mansour'],
   conv_lines=[('L', 'You have ten seconds. Where have you got to?'),
               ('R', 'History taken, soft tissues and teeth examined, chart done.'),
               ('L', 'And what has not been done?'),
               ('R', 'The bitewing, and the plan has not been agreed with her.'),
               ('L', 'That is a handover. Why is the second half the useful half?'),
               ('R', 'Because that is the part you would otherwise repeat or miss.')],
   conv_cap='Six turns at the chair, in which the half that is missing turns out to be '
            'the half that matters.',
   pre=dict(kind='choice',
     rubric='Before you listen, decide what a handover must contain.',
     how='Three of these belong in a handover. One does not.',
     example='A handover names   a) what is left   b) nothing.   Answer: a',
     bank=['what has been done', 'what is outstanding', 'the diagnosis',
           'your opinion of the patient'],
     bank_head='What belongs in a handover, and what does not',
     pics=['a history', 'intraoral', 'a provisional diagnosis', 'a treatment plan'],
     pairs=[('The most useful half of a handover is   a) what was done   b) what is '
             'outstanding   c) neither', 'b'),
            ('A provisional diagnosis in a handover is   a) left out   b) given, '
             'marked as provisional   c) given as final', 'b'),
            ('What the patient has not yet agreed to is   a) assumed   b) said out '
             'loud   c) left to her', 'b')]),
   fig=F.mini_table('ONE APPOINTMENT, HALFWAY',
     ['Step', 'Done?', 'What the next clinician needs to know'],
     [['complaint and history', 'yes', 'pain lower left on cold, two weeks'],
      ['extraoral', 'yes', 'no swelling, no tenderness, joint normal'],
      ['intraoral and teeth', 'yes', 'cavitated lesion LL6, two slight lesions'],
      ['periodontal chart', 'yes', 'pockets of 5 mm at four sites, bleeding at two'],
      ['bitewings', 'no', 'not taken; LL6 depth not established'],
      ['plan and estimate', 'no', 'written but not discussed or agreed']],
     highlight=[5], note='The two rows with no in them are the whole reason for the '
                         'handover.'),
   fig_cap='One half-finished appointment set out step by step, with the two steps that '
           'are outstanding.',
   script=[('Dr Rahman', 'You are needed next door. Hand this one over to me.'),
           ('Leila', 'Mrs Mabaso, new patient, pain lower left on cold for two weeks.'),
           ('Dr Rahman', 'Her words or yours?'),
           ('Leila', 'Hers. It hurts when I drink something cold.'),
           ('Dr Rahman', 'Good. What have you done?'),
           ('Leila', 'I have taken the history and examined outside and inside.'),
           ('Dr Rahman', 'Findings?'),
           ('Leila', 'Nothing extraoral. One cavitated lesion on the lower left six.'),
           ('Leila', 'Two slight lesions, upper left four and lower right five.'),
           ('Dr Rahman', 'The chart?'),
           ('Leila', 'Completed. Pockets of five at four sites, bleeding at two.'),
           ('Dr Rahman', 'Now the part I actually need. What has not been done?'),
           ('Leila', 'The bitewings have not been taken.'),
           ('Leila', 'So the depth of the lesion on the six is not established.'),
           ('Dr Rahman', 'And the plan?'),
           ('Leila', 'Written, not discussed. She has not seen the estimate.'),
           ('Dr Rahman', 'Does she know she is being handed over?'),
           ('Leila', 'Not yet. I was going to tell her as I left.'),
           ('Dr Rahman', 'Tell her before you leave, and tell her my name.'),
           ('Leila', 'And what you will be doing in the next ten minutes.'),
           ('Dr Rahman', 'That too. A patient left in a chair is a patient alone.'),
           ('Leila', 'Anything else in the record?'),
           ('Dr Rahman', 'That it was handed over, who took it over, and at what point.'),
           ('Leila', 'So the next person after you knows as well.'),
           ('Dr Rahman', 'There is always a next person. That is what records are for.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='Whose words is the complaint in?  (the patient’s own)',
     pairs=[('Whose words is the complaint in?', 'the patient’s own'),
            ('What has Leila examined?', 'outside and inside the mouth'),
            ('How many slight lesions are there?', 'two'),
            ('What has not been taken?', 'the bitewings'),
            ('What has happened to the plan?', 'written, not discussed'),
            ('What goes in the record about the handover?',
             'that it was handed over, who took it over, and at what point')])},
   post=dict(kind='short', rubric='Write the handover line for each step.',
     example='the complaint  (“It hurts when I drink something cold”, two weeks)',
     pairs=[('the complaint', '“It hurts when I drink something cold”, two weeks'),
            ('the extraoral examination', 'nothing found outside the mouth'),
            ('the teeth', 'one cavitated lesion on the lower left six, two slight ones'),
            ('the bitewings', 'not taken, so the depth is not established'),
            ('the plan', 'written, not discussed, and the estimate not seen')]),
   point='You can hand over an appointment halfway through in six sentences, and the '
         'half that says what is missing is the half that keeps the patient safe.',
   ask='Which half of a handover is the useful half, and why?',
   icons=['speech', 'form', 'clock', 'person']),
],

speaking=[
 dict(title='The whole examination, in order',
   rubric='Say what you have done, step by step, as though reporting a finished '
          'examination.',
   how='Student B ticks off the nine steps and says “and?” when one is missing. Four '
       'minutes, then swap.',
   conv=['Dr Petra Nilsen', 'Leila Mansour'],
   conv_lines=[('R', 'I have taken the complaint in her own words.'),
               ('L', 'And?'),
               ('R', 'I have taken the medical and dental history.'),
               ('L', 'And?'),
               ('R', 'I have examined outside the mouth: no swelling, joint normal.'),
               ('L', 'And?')],
   model=[('Student', 'I have taken the complaint in her own words: it hurts when she '
                      'drinks something cold.'),
          ('Student', 'I have taken the medical and dental history, and nothing in it '
                      'changes what we may do.'),
          ('Student', 'I have examined outside the mouth: no swelling, no tenderness, '
                      'the joint moves normally.'),
          ('Student', 'I have examined the soft tissues, and then the teeth surface by '
                      'surface.'),
          ('Student', 'The chart has been completed at six sites a tooth, and the '
                      'bitewings have been taken.'),
          ('Student', 'The provisional diagnosis is caries of the lower left six, with '
                      'periodontal disease at four sites; the plan has been written and '
                      'not yet agreed.')],
   frame=[['Change this', 'Keep this', 'Why'],
          ['the patient and her complaint', 'I have …  ·  has been …',
           'the tense is what is being marked'],
          ['nothing in the last line', 'provisional  ·  not yet agreed',
           'these two words are the whole of this unit'],
          ['the findings', 'in her own words',
           'the complaint is the one line you may not rewrite']],
   checklist=['all nine steps appeared, in order',
              'the complaint was in the patient’s words',
              'the diagnosis was marked as provisional',
              'the last line named something not yet done'],
   point='You can report a whole examination out loud in six sentences, in the tense a '
         'colleague expects to hear it in.',
   icons=['speech', 'mirror', 'form', 'tick']),

 dict(title='Prioritising a plan out loud',
   rubric='Give a four-item plan an order, with a reason for each place in it.',
   how='Student B is the patient and wants the fourth item first. Four minutes, then '
       'swap. Use four real items from your own clinic if you have them.',
   conv=['Leila Mansour', 'Thandiwe Mabaso'],
   conv_lines=[('L', 'First the tooth that hurts. That is why you came.'),
               ('R', 'And my front tooth?'),
               ('L', 'Fourth. Nothing is being lost while it waits.'),
               ('R', 'It is the one I mind about.'),
               ('L', 'I know. It is still the one that can wait safely.'),
               ('R', 'What happens if I ask for it first?')],
   model=[('Student', 'First, the lower left six, because that is the tooth that hurts '
                      'and the lesion is extensive.'),
          ('Student', 'Second, the gum treatment, because that one is getting worse '
                      'while we wait.'),
          ('Student', 'Third, fluoride on the two small marks, with another look in six '
                      'months.'),
          ('Student', 'Fourth, the front tooth, because it is about how it looks and '
                      'nothing is being lost.'),
          ('Student', 'The first two take an hour each; the third takes ten minutes '
                      'today.'),
          ('Student', 'If you would rather do the front tooth first, I shall tell you '
                      'what that costs on the other three, and then it is your '
                      'choice.')],
   cards=[dict(who='Student A', brief='the student. Give the order, and one reason for '
                                      'every item in it.'),
          dict(who='Student B', brief='the patient. Ask for the fourth item first, '
                                      'twice, and mean it.')],
   checklist=['every item had a reason for its place, not only a number',
              'you said how long the items take',
              'you said what waiting would cost on the others',
              'you left the decision with the patient and said so'],
   point='You can defend an order without refusing the patient’s own priority, which is '
         'what makes a plan something she agrees to rather than receives.',
   icons=['form', 'speech', 'clock', 'card']),

 dict(title='Handing over halfway through',
   rubric='Hand over a half-finished appointment to a partner in six sentences.',
   how='Student B writes down only what is outstanding. Three minutes each, then swap. '
       'Then compare the two lists of outstanding items.',
   conv=['Dr Yusuf Rahman', 'Leila Mansour'],
   conv_lines=[('R', 'History taken, outside and inside examined, chart completed.'),
               ('L', 'And what is left?'),
               ('R', 'The bitewings have not been taken.'),
               ('L', 'And?'),
               ('R', 'The plan is written and has not been discussed with her.'),
               ('L', 'Does she know I am coming?')],
   model=[('Student', 'Mrs Mabaso, new patient, pain on the lower left with cold for '
                      'two weeks, in her words.'),
          ('Student', 'I have taken the history, and nothing in it limits what we may '
                      'do.'),
          ('Student', 'I have examined outside and inside: nothing extraoral, one '
                      'cavitated lesion on the lower left six, two slight ones.'),
          ('Student', 'The chart has been completed: pockets of five millimetres at '
                      'four sites, bleeding at two.'),
          ('Student', 'The bitewings have not yet been taken, so the depth on the six '
                      'is not established.'),
          ('Student', 'The plan has been written and not discussed, she has not seen '
                      'the estimate, and I have told her your name.')],
   fig=F.conversation('“WHERE HAVE YOU GOT TO?”',
     dict(name='You', role='the student', skin='3', hair='black', style='tied',
          tunic='teal'),
     dict(name='Your partner', role='the clinician taking over', skin='4', hair='black',
          style='short', tunic='blue'),
     [('R', 'Where have you got to?'),
      ('L', 'History taken, examined inside and out, chart completed.'),
      ('R', 'And what is left?'),
      ('L', 'The bitewings, and the plan is not agreed.'),
      ('R', 'Does she know I am coming?'),
      ('L', 'She does, and she knows your name.')],
     note='The last two lines are the ones a patient would notice if they were missing, '
          'and the ones students leave out.'),
   fig_cap='A handover in six lines, with the two that are about the patient rather than '
           'the teeth.',
   checklist=['the complaint was given in the patient’s words',
              'what you had done came before what was outstanding',
              'every outstanding item said what it leaves unestablished',
              'you said that the patient knows who is coming'],
   point='You can hand over an appointment without losing anything, which is what makes '
         'it possible to leave a patient at all.',
   icons=['person', 'speech', 'form', 'clock']),
],

fluency=dict(
  title='The whole examination, three times',
  rubric='Report the same examination to three different partners, in the same order.',
  how='Four minutes with the first, three with the second, two with the third. The same '
      'six lines every time. Nothing new is added.',
  content=['Give the complaint in the patient’s own words.',
           'Say what the history did and did not change.',
           'Report the extraoral examination.',
           'Report the soft tissues and then the teeth.',
           'Report the chart and the films, and say what they establish.',
           'Give the provisional diagnosis and say what is still outstanding.'],
  words=['a complaint', 'a history', 'extraoral', 'intraoral',
         'a provisional diagnosis', 'a treatment plan', 'to prioritise', 'a recall'],
  fig_title='THE SAME EXAMINATION, IN FOUR MINUTES, THEN THREE, THEN TWO',
  point='You can report a whole examination without stopping to think what comes next, '
        'which is what makes it possible to do it in front of a supervisor.',
  ask='Which of the six lines still made you stop on the third attempt?',
  icons=['speech', 'clock', 'form', 'tick']),

reading=[
 dict(title='Textbook: the new-patient examination', genre='textbook page',
   pre=dict(rubric='Before you read, find these four things in the passage.',
     how='Two minutes. Do not read every sentence yet.',
     items=['why the patient’s own words are kept',
            'what the extraoral examination covers',
            'what makes a diagnosis provisional',
            'what a plan must carry besides a list of treatments']),
   fig=F.mini_table('THE NINE STEPS, AND WHAT EACH ONE IS FOR',
     ['Step', 'What it is for'],
     [['the complaint', 'why the patient came, in words that will still be true later'],
      ['the history', 'what you may safely do, and what you must avoid'],
      ['extraoral', 'swelling, tenderness, asymmetry and the joint'],
      ['intraoral: soft tissues', 'the tissues nobody examines when they are rushed'],
      ['intraoral: the teeth', 'every surface of every tooth present'],
      ['the chart', 'the depths, at six sites a tooth'],
      ['the radiographs', 'what cannot be seen, one question per film'],
      ['the provisional diagnosis', 'what you believe, and what it is waiting for'],
      ['the plan', 'what, in what order, how long and what it costs']],
     highlight=[4]),
   fig_cap='The nine steps with their purposes, and the step that is skipped first when '
           'a clinic runs late.',
   text=[
    'A new-patient examination has nine steps, and they are taken in the same order every '
    'time. The order is not simply a habit. Each step changes what the next '
    'one is looking '
    'for.',
    'The first step is the greeting and the presenting complaint. The patient is asked '
    'why she has come, and her answer is written down in her own words.',
    'Keeping her words matters for a reason that is easy to miss. Any summary you write '
    'contains your conclusion as well as her report, and in six months nobody can '
    'separate the two again.',
    'It hurts when I drink something cold is a sentence that will still be checkable next '
    'year. Sensitive lower left is already an interpretation.',
    'The second step is the history: medical first, then dental, then what the patient '
    'does every day. The medical history changes what you may safely do, and it is taken '
    'before anything is touched.',
    'The third step is the extraoral examination, which means everything outside the '
    'mouth. The face is looked at for asymmetry and swelling; the lymph nodes of the neck '
    'are felt; the joint is listened to and felt as the patient opens and closes.',
    'The fourth step is the intraoral examination, and it begins with the soft tissues. '
    'The lips, the cheeks, the tongue, the floor of the mouth, the palate and the gingiva '
    'are each looked at in turn.',
    'The soft tissues come first because they are what a rushed examination leaves out. '
    'Nobody forgets to look at the teeth.',
    'The fifth step is the teeth themselves, surface by surface, with a mirror and a '
    'probe, recording what is sound, what is restored and what is carious.',
    'The sixth step is the periodontal chart, at six sites round every tooth present, as '
    'in Unit 7. The seventh is the radiographs, each one taken for a question that has '
    'already been written down, as in Unit 9.',
    'The eighth step is the provisional diagnosis. It is called provisional because some '
    'of the evidence is usually still outstanding, and because a diagnosis that cannot be '
    'revised is not a diagnosis but a decision.',
    'A provisional diagnosis should be written with what it is waiting for beside it: '
    'caries of the lower left six, extent not established pending a bitewing.',
    'The ninth step is the treatment plan. A plan is not a list. A list of four '
    'treatments tells a colleague nothing about which comes first, and tells the patient '
    'nothing about her morning.',
    'A plan carries four things: what will be done, in what order, how long each item '
    'takes, and what it will cost. The order is the part that has to be defended.',
    'Items are prioritised by pain first, then by disease that is progressing while the '
    'patient waits, then by function, and last by appearance.',
    'That order is often not the patient’s. A patient who came about a discoloured front '
    'tooth may find it fourth on the list, and she is entitled to hear why.',
    'The plan ends with a recall: the interval after which the patient is seen again, '
    'written as a date and a reason. Six months with bitewings is a plan. We shall see is '
    'not.'],
   source=('The account of the new-patient examination, of the provisional diagnosis and '
           'of the ordering of a treatment plan follows standard clinical dentistry and '
           'treatment planning reference works.',
           'General clinical dentistry, oral examination and treatment planning '
           'reference works, 2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='How many steps are there?  (nine)',
     pairs=[('How many steps are there?', 'nine'),
            ('Whose words is the complaint written in?', 'the patient’s own'),
            ('Which history is taken first?', 'the medical history'),
            ('What is examined before the teeth?', 'the soft tissues'),
            ('Why is a diagnosis called provisional?',
             'some of the evidence is still outstanding'),
            ('What are items prioritised by first?', 'pain')])},
   post=dict(kind='tf', rubric='True or false? If it is false, write the correction in '
                               'eight words or fewer.',
     how='Then say which of these your own textbook states differently.',
     example='The teeth are examined before the soft tissues.  —  false — soft tissues '
             'come first',
     bank=['a complaint', 'a history', 'extraoral', 'a provisional diagnosis',
           'a recall'],
     bank_head='The five terms these statements concern',
     pics=['a complaint', 'a history', 'extraoral', 'a treatment plan'],
     pairs=[('The teeth are examined before the soft tissues.',
             'false — soft tissues come first'),
            ('The complaint is written in the patient’s own words.', 'true'),
            ('The medical history is taken after the examination.',
             'false — it is taken before'),
            ('A plan is a list of treatments.',
             'false — it also carries order, time and cost'),
            ('A recall is written as a date and a reason.', 'true')]),
   point='Nine steps, one order, and a plan that says what, in what order, how long and '
         'what it costs.',
   ask='Name the nine steps, and say which of them needs no equipment.',
   icons=['book', 'mirror', 'form', 'clock']),

 dict(title='A case: the plan nobody could carry out', genre='written case',
   pre=dict(rubric='Before you read, decide what you expect.',
     how='Say your answer out loud, then read and compare.',
     items=['What happens to a plan with no order in it?',
            'What does a patient do when she cannot see what comes first?',
            'What would you have written differently?']),
   fig=F.contrast('THE SAME FIVE TREATMENTS, WRITTEN TWICE',
     'AS A LIST', ['extraction UR7',
                   'root canal LL6',
                   'periodontal treatment',
                   'two fillings',
                   'crown UR4'],
     'AS A PLAN', ['1  LL6 root canal — pain, one hour, this week',
                   '2  periodontal treatment — progressing, two visits',
                   '3  UR7 extraction — no pain now, thirty minutes',
                   '4  two fillings — slight, thirty minutes',
                   '5  UR4 crown — appearance, after the rest'],
     'Five true items, and no way to begin.',
     'The same five, with an order, a reason and a length for each.'),
   fig_cap='One set of treatments as a list and as a plan, with what the second version '
           'adds to each line.',
   text=[
    'A woman of forty-six was examined at a teaching clinic and given a written plan with '
    'five items on it. Every item was correct. The plan was signed by a supervisor and a '
    'copy was given to her.',
    'She did not come back. Eleven months later she attended a different clinic in pain, '
    'and the lower left six by then needed extracting rather than root treatment.',
    'When she was asked why she had not returned, her answer was short. She said that '
    'she had not known where to start, and that nobody had told her how long any of it '
    'would take.',
    'The plan she had been given was a list. It named five treatments and it did not '
    'order them, time them or price them.',
    'Read it as she read it. Five things are wrong with your mouth, all of them serious '
    'enough to write down, and you must now decide for yourself which to deal with '
    'first.',
    'That is not a plan. That is the clinical work left undone and handed to the person '
    'least able to do it.',
    'An ordered plan would have told her that one item was urgent, that two could wait a '
    'few months, and that the crown she was worried about came last.',
    'It would also have told her that the first item took an hour. A patient who knows '
    'that the urgent part of her treatment is one hour long can find an hour.',
    'A patient who believes that five unknown treatments lie ahead of her, of unknown '
    'length and unknown cost, has been given a reason to put the whole thing off.',
    'Nothing in this case was a clinical error. The five items were right, the diagnoses '
    'were right, and the supervisor who signed the plan read it and agreed with it.',
    'The failure is entirely in the form of the document, which is why it is so easy to '
    'repeat. A plan that is clinically perfect and unusable looks exactly like a good '
    'plan on the page.',
    'The test is simple and it takes ten seconds. Read the plan as the patient, and ask '
    'what you would do tomorrow morning.',
    'If the answer is anything other than one named appointment of a known length, the '
    'plan is not finished yet.',
    'The same test can be put to the patient directly, and it takes no longer. Ask '
    'her which appointment she will book before she leaves the room.',
    'It is worth adding what the eleven months cost. A tooth that could have been kept '
    'was lost, and the cost of her treatment rose.',
    'Neither of those followed from the dentistry. They followed from a document that '
    'was true and could not be acted on.'],
   source=('The case is invented for teaching; the requirement that a treatment plan '
           'carry sequence, duration and cost follows standard treatment planning and '
           'record-keeping reference works.',
           'General clinical dentistry and treatment planning reference works, '
           '2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='How old was the patient?  (forty-six)',
     pairs=[('How old was the patient?', 'forty-six'),
            ('How many items were on the plan?', 'five'),
            ('How long was it before she attended again?', 'eleven months'),
            ('What did the lower left six then need?', 'extracting'),
            ('What reason did she give?', 'she had not known where to start'),
            ('What was wrong with the plan?',
             'it did not order, time or price the items')])},
   post=dict(kind='short', rubric='Rewrite each list item as a line of a plan.',
     example='root canal LL6  (1  LL6 root canal — pain, one hour, this week)',
     pairs=[('root canal LL6', '1  LL6 root canal — pain, one hour, this week'),
            ('periodontal treatment',
             '2  periodontal treatment — progressing, two visits of forty minutes'),
            ('extraction UR7', '3  UR7 extraction — no pain now, thirty minutes'),
            ('two fillings', '4  two fillings — slight lesions, thirty minutes'),
            ('crown UR4', '5  UR4 crown — appearance, after the rest is done')]),
   point='A plan that is clinically perfect and cannot be acted on looks exactly like a '
         'good plan, which is why the test has to be done from the patient’s side.',
   ask='What would you have done tomorrow morning, if you had been given that list?',
   icons=['form', 'clock', 'card', 'cross']),

 dict(title='Procedure: the record of one appointment, from greeting to recall',
   genre='procedure',
   pre=dict(rubric='Before you read, put these steps in the order you would expect.',
     how='Thirty seconds, in pencil. Then read and correct your order.',
     items=['the complaint, in quotation marks', 'the findings, step by step',
            'the provisional diagnosis', 'the plan and the recall']),
   fig=F.step_sequence('WRITING THE RECORD, IN ORDER',
     ['Date the entry, and name yourself.',
      'Quote the complaint, in the patient’s own words.',
      'Record the history, and what in it changes the treatment.',
      'Record the extraoral findings, then the intraoral ones.',
      'Record the chart and each film, with the question each film answered.',
      'Give the provisional diagnosis, and what it is waiting for.',
      'Give the plan: what, in what order, how long, what it costs.',
      'Record what you advised and what the patient chose, as two lines.',
      'End with the recall: a date and a reason.'],
     stop_points=[8],
     note='Nine steps. The marked one is the one that is missing from almost every '
          'record that later turns out to matter.'),
   fig_cap='The nine lines of a complete record, with the one that protects both the '
           'patient and the clinician.',
   text=[
    'The record of an appointment is written in the same order as the appointment itself, '
    'and it is written the same day. A record written three days later is a record of '
    'what the clinician remembers, which is not the same thing.',
    'Begin with the date and your own name. In a teaching clinic, name the supervisor as '
    'well, because a reader in two years will need to know who was responsible.',
    'Quote the complaint. Use quotation marks and the patient’s own words, however '
    'untidy they are. If she said that the whole side of her face feels wrong, write '
    'that, and do not write facial pain.',
    'Record the history next, and then record what in it changes the treatment. A long '
    'history with no line drawn from it is a list of facts that nobody will read twice.',
    'Record the extraoral findings before the intraoral ones, in that order, even when '
    'both are normal. No swelling, no tenderness, no asymmetry, joint moves normally is a '
    'finding, and it is a finding somebody may need.',
    'Then the intraoral findings, soft tissues first, then the teeth. Then the chart, and '
    'then each radiograph with the question it was taken for.',
    'Give the provisional diagnosis in its own line, with the word provisional in it and '
    'with what it is waiting for. Caries of the lower left six, extent not established '
    'pending a bitewing.',
    'Then the plan, with its four parts. What, in what order, how long each item takes, '
    'and what it will cost. A plan missing any of the four is not finished.',
    'Now the step that is almost always left out. Record what you advised and what the '
    'patient chose, as two separate lines.',
    'Those two lines are the same length and they do different work. The first says what '
    'the clinic thought best. The second says what the patient decided, which she is '
    'entitled to do.',
    'When the two agree, the second line costs you four seconds. When they do not, it is '
    'the most important line in the record, and it protects her as much as you.',
    'End with the recall: a date and a reason. Six months, with bitewings, to establish '
    'whether the two slight lesions have progressed.',
    'Students ask how long a full record takes. About six minutes, written at the chair, '
    'and most of that time is the plan.',
    'They also ask what happens when there is no time. The answer is that the complaint, '
    'the findings, the diagnosis and what was agreed are written now, and the rest before '
    'you go home.',
    'What may never wait is the line about what the patient chose. That line exists '
    'because somebody will one day ask what she was told, and memory is not an answer.'],
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='When is the record written?  (the same day)',
     pairs=[('When is the record written?', 'the same day'),
            ('What goes in quotation marks?', 'the complaint, in her own words'),
            ('Which findings are recorded first?', 'the extraoral findings'),
            ('What is written beside a provisional diagnosis?',
             'what it is waiting for'),
            ('Which two lines are almost always left out?',
             'what you advised and what the patient chose'),
            ('How long does a full record take?', 'about six minutes')])},
   post=dict(kind='order', rubric='Put the first six steps of the record in order.',
     how='Then say which step is written last in your own clinic, and what that costs.',
     example='Date the entry and name yourself.  —  1',
     bank=['the date and your name', 'the complaint', 'the history',
           'extraoral and intraoral', 'the chart and the films',
           'the provisional diagnosis'],
     bank_head='The six things the first steps of a record establish',
     pics=['a complaint', 'a history', 'extraoral', 'a provisional diagnosis'],
     pairs=[('Date the entry and name yourself.', '1'),
            ('Quote the complaint in the patient’s own words.', '2'),
            ('Record the history and what in it changes the treatment.', '3'),
            ('Record the extraoral findings, then the intraoral ones.', '4'),
            ('Record the chart and each film with its question.', '5'),
            ('Give the provisional diagnosis and what it is waiting for.', '6')]),
   point='The line that says what the patient chose is the one that is left out, and the '
         'one somebody will one day ask you for.',
   ask='Which line would you be most tempted to leave until tomorrow, and why not?',
   icons=['pen', 'form', 'speech', 'calendar']),
],

writing=[
 dict(title='A new-patient examination, in nine lines',
   rubric='Write the record of a complete new-patient examination, one line a step.',
   how='Quote the complaint. Mark the diagnosis provisional. End with a recall that has '
       'a reason.',
   fig=F.mini_table('WHAT EACH OF THE NINE LINES CARRIES',
     ['Line', 'What goes in it'],
     [['1', 'the date, your name and your supervisor'],
      ['2', 'the complaint, quoted'],
      ['3', 'the history, and what in it changes the treatment'],
      ['4', 'the extraoral findings, normal or not'],
      ['5', 'the intraoral findings: soft tissues, then teeth'],
      ['6', 'the chart'],
      ['7', 'each film, with its question'],
      ['8', 'the provisional diagnosis, and what it waits for'],
      ['9', 'the plan and the recall']], highlight=[8]),
   fig_cap='Nine lines of a record, with the one that has to say what it is waiting '
           'for.',
   scaffold=['Date and clinician:', 'Complaint:', 'History:', 'Extraoral:',
             'Intraoral:', 'Chart:', 'Radiographs:', 'Provisional diagnosis:',
             'Plan and recall:'],
   model=['Date and clinician: 14 July; L. Mansour, supervised by Dr Y. Rahman.',
          'Complaint: “It hurts when I drink something cold, on the bottom left.” Two '
          'weeks.',
          'History: no medical history of note; no regular dental care for nine years; '
          'sweet drink sipped through each morning.',
          'Extraoral: no swelling, no tenderness, no asymmetry; the joint moves '
          'normally and is quiet.',
          'Intraoral: soft tissues normal throughout; cavitated lesion on the occlusal '
          'of LL6; slight lesions UL4 buccal and LR5 distal, neither cavitated.',
          'Chart: six sites a tooth; pockets of 5 mm at four sites with bleeding at '
          'two; the rest 3 mm or less.',
          'Radiographs: bitewings taken, to establish the surfaces that cannot be seen; '
          'radiolucency at LL6 occlusal into dentine in the image.',
          'Provisional diagnosis: caries of LL6, extent not established, the true depth '
          'probably greater than it appears; periodontal disease at four sites.',
          'Plan and recall: 1 LL6 restoration, one hour, this week; 2 periodontal '
          'treatment, two visits; 3 fluoride to UL4 and LR5 today; recall six months '
          'with bitewings, to establish whether the two slight lesions have '
          'progressed.'],
   checklist=['the complaint is quoted and dated',
              'the extraoral line is there even though it is normal',
              'the diagnosis says what it is waiting for',
              'the recall has a date and a reason'],
   point='You can write a whole examination in nine lines that a colleague could work '
         'from without seeing the patient.',
   icons=['pen', 'form', 'mirror', 'calendar']),

 dict(title='A plan in an order, with times and reasons',
   rubric='Write a five-item plan in an order, with a reason and a length for each item.',
   how='One line per item, numbered, and a recall line at the end.',
   fig=F.form_annotated('WHAT EVERY LINE OF A PLAN CARRIES',
     'FIVE ITEMS  ·  ONE RECALL',
     [('Number', 'where it comes, and nothing else goes in this column'),
      ('What', 'the tooth and the treatment'),
      ('Why here', 'pain, progression, function or appearance'),
      ('How long', 'in minutes, for this appointment'),
      ('Recall', 'a date and the question it answers')],
     callouts=[(3, 'the column the patient reads, and the one usually left blank')],
     note='Five columns. A plan missing the fourth cannot be booked by anybody.'),
   fig_cap='The five columns of a usable plan, with the one the patient actually reads.',
   scaffold=['1 ', '2 ', '3 ', '4 ', '5 ', 'Recall: '],
   model=['1 LL6 root canal treatment — pain, and the pulp is involved — one hour, this '
          'week.',
          '2 Periodontal treatment, both lower quadrants — progressing while we wait — '
          'two visits of forty minutes.',
          '3 UR7 extraction — no pain at present, but it cannot be restored — thirty '
          'minutes.',
          '4 UL4 and LR5 fillings — slight lesions, not yet cavitated, to be watched '
          'first — thirty minutes if needed in six months.',
          '5 UR4 crown — appearance, and nothing is lost by waiting — one hour, after '
          'the rest.',
          'Recall: six months, with bitewings, to establish whether UL4 and LR5 have '
          'progressed.'],
   checklist=['every item has a number, a reason and a length',
              'the reasons are pain, progression, function or appearance',
              'the appearance item is last and says why',
              'the recall names a question and not only a date'],
   point='You can write a plan that a receptionist can book and a patient can begin '
         'tomorrow morning.',
   icons=['form', 'clock', 'card', 'tick']),

 dict(title='A handover note for an appointment you could not finish',
   rubric='Write the handover note: what has been done, what is outstanding, and what '
          'the patient knows.',
   how='Present perfect throughout. The last line is about the patient and not about '
       'the teeth.',
   fig=F.contrast('TWO HANDOVER NOTES FOR THE SAME APPOINTMENT',
     'WHAT WAS DONE ONLY', ['history taken',
                            'examined inside and out',
                            'chart completed'],
     'AND WHAT IS OUTSTANDING', ['the bitewings have not been taken',
                                 'the plan has not been agreed',
                                 'she has not seen the estimate'],
     'Three finished things, and a colleague who must guess the rest.',
     'The same appointment, and nothing for the next person to discover.'),
   fig_cap='One handover written twice, with the half that makes it safe to leave the '
           'room.',
   scaffold=['Patient and complaint:', 'What has been done:', 'Findings:',
             'What is outstanding:', 'What the patient knows:'],
   model=['Patient and complaint: Mrs Mabaso, new patient. “It hurts when I drink '
          'something cold, on the bottom left.” Two weeks.',
          'What has been done: I have taken the history and examined extraorally and '
          'intraorally; the periodontal chart has been completed.',
          'Findings: nothing extraoral; cavitated lesion LL6 occlusal; slight lesions '
          'UL4 and LR5, neither cavitated; pockets of 5 mm at four sites with bleeding '
          'at two.',
          'What is outstanding: the bitewings have not yet been taken, so the extent at '
          'LL6 is not established; the plan has been written and not discussed; she has '
          'not seen the estimate.',
          'What the patient knows: she has been told that Dr Rahman is taking over, by '
          'name, and that he will be with her within ten minutes.'],
   checklist=['every verb about completed work is in the present perfect',
              'each outstanding item says what it leaves unestablished',
              'the complaint is quoted',
              'the last line says what the patient has been told'],
   point='You can hand over in five lines, and the fifth line is the one the patient '
         'would notice if it were missing.',
   icons=['pen', 'person', 'clock', 'form']),
],

cases_intro='Three cases about the order of a plan, the words a complaint is kept in, '
            'and how long a patient waits before she is seen again. Each can be answered '
            'in more than one defensible way. Work in threes, give a reason for every '
            'position you take, and use the eight terms when you take it.',
cases=[
 dict(tier='A', title='Five items, and money for two',
  situation=['Leila has written a correct five-item plan. The patient can pay for two '
             'items now and says she would rather have the front crown and one filling, '
             'because those are the ones she minds about.',
             'The root canal on the lower left six is the item Leila put first. Her '
             'supervisor asks what Leila says, what she writes, and what happens if the '
             'patient does not change her mind.'],
  who=['Leila Mansour', 'Dr Yusuf Rahman'],
  facts=['The plan has five items and all five are clinically correct.',
         'The patient can pay for two of them at present.',
         'The item she wants first is the one about appearance.',
         'The item Leila put first is a tooth in pain with the pulp involved.'],
  question='What does Leila advise, and what does she write down?',
  questions=['What does the order of a plan rest on, when money is short?',
             'How do you tell a patient that what she minds about comes last?',
             'What goes in the record when advice and choice do not agree?'],
  words=['a treatment plan', 'to prioritise', 'a provisional diagnosis', 'a recall',
         'a complaint'],
  language=[('Advising, with the reason',
             ['The tooth that is hurting is the one that cannot wait.',
              'The crown changes how it looks; nothing is lost while it waits.']),
            ('Recording both lines',
             ['Advised: LL6 first, then the periodontal treatment.',
              'Patient chose: UR4 crown and one filling; advice discussed and '
              'declined.'])],
  how='In threes. Eight minutes. One of you writes both record lines.',
  point='You can keep the clinical order and the patient’s choice in the same record, '
        'without pretending that they were the same thing.',
  ask='Read out the two record lines your group would write.',
  note='Treating what she asked for and reviewing the rest is also defensible. Say what '
       'it risks for the lower left six.',
  icons=['form', 'card', 'speech', 'tooth'],
  guidance=('Reference practice', 'Treatment plans sequenced by pain, progression, '
            'function and appearance, with advice given and the patient’s own decision '
            'recorded separately',
            'General treatment planning and record-keeping reference works, '
            '2025–2026.')),

 dict(tier='C', title='The complaint that was not the problem',
  situation=['A patient comes about a chipped upper front tooth. Daniel examines the '
             'whole mouth and finds an extensive lesion on an upper molar that she has '
             'never noticed.',
             'She is not interested in the molar. She came about the front tooth, she '
             'has thirty minutes, and she says the back one has never hurt.'],
  who=['Dr Petra Nilsen', 'Daniel Owusu'],
  facts=['The presenting complaint is about appearance.',
         'The finding she did not come about is more serious than the one she did.',
         'The molar has given no symptoms at all.',
         'She has thirty minutes today.'],
  question='What does Daniel do with the thirty minutes, and what does he say?',
  questions=['What does a complaint direct, and what does it not limit?',
             'How do you raise a finding the patient did not come about?',
             'What would you write so that the molar is not lost at the next visit?'],
  words=['a complaint', 'a provisional diagnosis', 'to prioritise', 'a treatment plan',
         'a recall'],
  language=[('Taking the complaint seriously first',
             ['You came about the front tooth, and we shall deal with that.',
              'It will take twenty minutes, and it will look better today.']),
            ('Raising the other finding',
             ['While I was looking, I found something at the back that worries me more.',
              'It has never hurt, and that is not a good sign with this one.'])],
  how='In threes. Eight minutes. One of you is the patient and has thirty minutes and no '
      'interest in the molar.',
  point='You can take the complaint seriously and still put a silent finding where '
        'the next clinician will see it.',
  ask='Say the sentence your group would use to raise the molar.',
  note='Spending the whole thirty minutes on the molar is defended by some clinicians. '
       'Say what it costs with this patient.',
  icons=['person', 'speech', 'tooth', 'form']),

 dict(tier='C', title='How long until she is seen again',
  situation=['Leila has to set a recall interval for a patient with two slight lesions, '
             'four shallow pockets and a nine-year gap since her last dental visit.',
             'The patient asks for two years, because that is what she managed last '
             'time. Her supervisor asks what the interval rests on and what it is for.'],
  who=['Leila Mansour', 'Thandiwe Mabaso'],
  facts=['Two slight lesions are being watched rather than restored.',
         'Four pockets are five millimetres deep with bleeding at two sites.',
         'The patient has not attended for nine years.',
         'A watched lesion is only watched if somebody looks again.'],
  question='What interval does Leila propose, and on what grounds?',
  questions=['What does a recall interval rest on, besides what the patient would like?',
             'What happens to a watched lesion if the interval is too long?',
             'What would you write, so that the next clinician knows what to look at?'],
  words=['a recall', 'a treatment plan', 'to prioritise', 'a provisional diagnosis',
         'a complaint'],
  language=[('Proposing an interval with a reason',
             ['Six months, because two of those marks are being watched rather than '
              'filled.',
              'If they have not moved by then, the next gap can be longer.']),
            ('Writing the recall so it means something',
             ['Recall six months, with bitewings, to establish whether UL4 and LR5 have '
              'progressed.',
              'Interval to be reviewed at that visit.'])],
  how='In threes. Eight minutes. One of you argues for the two years the patient asked '
      'for.',
  point='You can set an interval that the patient has agreed to and that still says what '
        'it is for, which is what makes watching a lesion possible at all.',
  ask='Read out the recall line your group would write.',
  note='Agreeing twelve months, as something she will actually keep, is defensible. Say '
       'what it costs on the two slight lesions.',
  icons=['calendar', 'clock', 'form', 'tooth']),
],

review_intro='Five activities, one for each skill, and one that brings back the whole '
             'book. Nothing in this part repeats a task you have already done. Thirty '
             'minutes.',
review=[
 dict(skill='reading', title='The nine steps, shuffled',
   kind='order', rubric='Put the nine steps of the examination in the order they are '
                        'taken.',
   how='Then say which step your own clinic takes out of this order, and why.',
   example='The greeting and the patient’s own words.  —  1',
   bank=['the complaint', 'the history', 'extraoral', 'soft tissues', 'the teeth',
         'the chart', 'the films', 'the diagnosis', 'the plan'],
   bank_head='The nine steps of a new-patient examination',
   pics=['a complaint', 'a history', 'extraoral', 'a treatment plan'],
   pairs=[('The greeting and the patient’s own words.', '1'),
          ('The medical and dental history.', '2'),
          ('The examination outside the mouth.', '3'),
          ('The soft tissues, one by one.', '4'),
          ('The teeth, surface by surface.', '5'),
          ('The periodontal chart.', '6'),
          ('The radiographs, each with its question.', '7'),
          ('The provisional diagnosis.', '8'),
          ('The plan, and the recall.', '9')],
   fig=F.step_sequence('THE NINE STEPS, ONCE THEY ARE IN ORDER',
     ['The complaint, in her words.', 'The history.', 'Outside the mouth.',
      'The soft tissues.', 'The teeth.', 'The chart.', 'The films.',
      'The provisional diagnosis.', 'The plan and the recall.'],
     stop_points=[1],
     note='The marked step needs no equipment, and the other eight are aimed by it.'),
   fig_cap='Nine steps in order, with the one that decides what the others look for.'),

 dict(skill='listening', title='Four things from 5.1 you were not asked about',
   kind='choice', rubric='Listen to 5.1 once more and circle a, b or c.',
   how='These are not the questions you answered in part 5. One listening is enough.',
   example='The teeth come   a) before   b) after   the soft tissues.   Answer: b',
   bank=['her words', 'your words', 'the tongue', 'the plan'],
   bank_head='The four small points to listen for this time',
   pics=['a complaint', 'intraoral', 'a history', 'a treatment plan'],
   pairs=[('Dr Nilsen says your summary already contains   a) her report   b) your '
           'conclusion   c) nothing', 'b'),
          ('The tissue people miss every week is   a) a tooth   b) the tongue   '
           'c) the palate', 'b'),
          ('Dr Nilsen says the teeth are interesting and   a) come first   b) can '
           'wait   c) can be skipped', 'b'),
          ('A plan must be one that   a) you can follow   b) somebody else could '
           'follow   c) nobody questions', 'b')],
   fig=F.mini_table('WHAT YOU ARE LISTENING FOR THIS TIME',
     ['Not this', 'But this'],
     [['the nine steps', 'what Dr Nilsen says your own summary contains'],
      ['soft tissues before teeth', 'which tissue she says is missed every week'],
      ['the plan', 'whose plan it has to be good enough for']]),
   fig_cap='The same lecture, listened to for what it says about writing rather than '
           'about order.'),

 dict(skill='speaking', title='A patient who wants to know what it will all cost',
   rubric='Answer a patient who asks for the total before she will agree to anything.',
   how='Student B says “just tell me the total” twice and means it. Four minutes, then '
       'swap.',
   model=[('Patient', 'Just tell me the total. I do not want it item by item.'),
          ('Student', 'I can give you a total. It will frighten you, and it should '
                      'not.'),
          ('Patient', 'Why not?'),
          ('Student', 'Because nobody pays it at once. The first part is one hour, this '
                      'week.'),
          ('Student', 'The last part is a crown you may decide you do not want.'),
          ('Patient', 'So what am I agreeing to today?')],
   checklist=['you offered the total rather than withholding it',
              'you separated what is urgent from what is optional',
              'you gave the length and cost of the first item only',
              'you left her agreeing to one appointment rather than to five'],
   fig=F.conversation('“JUST TELL ME THE TOTAL”',
     dict(name='You', role='the student', skin='3', hair='black', style='tied',
          tunic='teal'),
     dict(name='Your partner', role='the patient', skin='2', hair='grey', style='short',
          tunic='sand'),
     [('R', 'Just tell me the total.'),
      ('L', 'I can. It will frighten you, and it should not.'),
      ('R', 'Why not?'),
      ('L', 'Nobody pays it at once. The first part is one hour.'),
      ('L', 'The last part is a crown you may not want.'),
      ('R', 'So what am I agreeing to today?')],
     note='The last line is the aim. A patient agreeing to one appointment can begin; '
          'one agreeing to five does not.'),
   fig_cap='The question that stops most treatment plans, and the answer that starts '
           'one.'),

 dict(skill='writing', title='The same plan after the patient has changed it',
   rubric='Write the revised plan and the two lines that record advice and choice.',
   how='Not the plan you wrote in part 8. Here the patient has reordered it, and that '
       'has to be visible.',
   model=['Plan as advised: 1 LL6 root canal; 2 periodontal treatment; 3 UR7 '
          'extraction; 4 UL4 and LR5 watched; 5 UR4 crown.',
          'Advised: LL6 first, because the tooth is in pain and the pulp is involved; '
          'periodontal treatment second, because it is progressing.',
          'Patient chose: UR4 crown and one filling at this stage, for reasons of cost '
          'and appearance; the advice above was discussed and declined.',
          'Plan as agreed: 1 UR4 crown, one hour; 2 UL4 filling, thirty minutes; '
          'remainder deferred at the patient’s request.',
          'Discussed: that LL6 may need extraction rather than root treatment if it is '
          'left; she understood this and wishes to proceed as above.',
          'Recall: three months rather than six, to look again at LL6 and at the four '
          'pockets.'],
   scaffold=['Plan as advised:', 'Advised:', 'Patient chose:', 'Plan as agreed:',
             'Discussed:', 'Recall:'],
   checklist=['the advised order and the agreed order both appear',
              'the reason for the advice is given, not only the order',
              'what was discussed about the deferred item is recorded',
              'the recall is shorter, and the record says why'],
   fig=F.contrast('TWO WAYS TO RECORD A PLAN THE PATIENT CHANGED',
     'AS ONE PLAN', ['1 UR4 crown',
                     '2 UL4 filling',
                     'remainder deferred'],
     'AS ADVICE AND CHOICE', ['plan as advised, with reasons',
                              'patient chose, with her reasons',
                              'what was discussed about the rest, and a shorter '
                              'recall'],
     'True, and it looks as though nobody minded.',
     'The same two appointments, and a record that protects her.'),
   fig_cap='One changed plan recorded two ways, with the version that survives a '
           'question in two years.'),

 dict(skill='reading', title='The whole book: which unit does this belong to?',
   kind='sort', rubric='Write E for the examination, F for a finding and R for the '
                       'record or the plan.',
   columns=('E', 'F', 'R'),
   how='All ten units are in here somewhere. Then find the one item your group '
       'disagrees about, and say why it is hard to place.',
   example='the soft tissues, looked at one by one  —  E',
   bank=['part of examining', 'something found', 'part of the record or the plan'],
   bank_head='The three things ten units have been about',
   pics=['a complaint', 'a provisional diagnosis', 'a treatment plan', 'a recall'],
   pairs=[('Feeling the lymph nodes of the neck.', 'E'),
          ('An arrested lesion, dark and hard to the probe.', 'F'),
          ('Advised: the lower left six first, because it is in pain.', 'R'),
          ('Looking at the tongue and the floor of the mouth.', 'E'),
          ('Calculus below the gum on three lower incisors.', 'F'),
          ('Patient chose: the crown and one filling.', 'R')],
   fig=F.contrast('TEN UNITS, THREE KINDS OF WORK',
     'LOOKING AND MEASURING', ['the surfaces, by name',
                               'the instruments, by purpose',
                               'six sites a tooth',
                               'one question, one film'],
     'DECIDING AND WRITING', ['a finding in one sentence',
                              'a grade, and an order',
                              'four strengths of claim',
                              'a plan, and what the patient chose'],
     'Units 1 to 5, and the hands in units 7 and 9.',
     'Units 6, 8, 9 and 10: the part that outlives the appointment.'),
   fig_cap='The whole book divided into the work of the hands and the work of the '
           'record.'),
],
end_fig_title='NINE STEPS, ONE ORDER, AND A PLAN SOMEBODY ELSE COULD FOLLOW',
end_fig_steps=['The complaint, in her words, directs the examination without limiting it.',
               'The history is taken before anything is touched.',
               'Outside the mouth first, then the soft tissues, then the teeth.',
               'The chart, then the films, each film with its own question.',
               'The provisional diagnosis says what it is still waiting for.',
               'The plan says what, in what order, how long and what it costs.'],
end_fig_note='Six lines. The last one is the only part of the morning that the patient '
             'takes home with her.',
end_fig_cap='The whole of Unit 10 on one page.',

p1_recap=['You have said what you say first to a patient you have never met, and what '
          'you examine before you look in the mouth at all.',
          'You have seen the nine steps in order, and the four things that turn a list '
          'of treatments into a plan.'],
p1_ask='In your own clinic, what is written down first, and who writes it?',
p1_icons=['speech', 'mirror', 'form', 'card'],
p2_recap=['Eight terms you can now use: a complaint, a history, extraoral, intraoral, a '
          'provisional diagnosis, a treatment plan, to prioritise and a recall.',
          'Four groups of sentences: what you have done, what you have found, what has '
          'and has not changed, and what is still to be done.',
          'One rule to hold on to: the complaint goes in the record in the patient’s '
          'words, and nobody improves it.'],
p2_ask='Which two of the eight does a colleague read first, and which two do students '
       'write last?',
p3_recap=['You have moved from recognising these terms to reporting a whole examination '
          'in the order it was carried out.',
          'All eight appear in the lecture in part 5. Say them out loud before you '
          'listen.'],
p3_ask='Say the nine steps in order, without looking at the page.',
p3_icons=['book', 'speech', 'form', 'tick'],
p4_recap=['I have examined reports work finished inside a visit that is not; has been '
          'recorded names the work and not the doer; has not yet been taken names what '
          'is outstanding.',
          'Since names the start of a period and for names its length, and both take the '
          'present perfect.'],
p4_ask='Say three sentences about this morning: one with I have, one with has been and '
       'one with has not yet.',
p10_recap=['You can take a history, examine outside and inside the mouth, chart, read a '
           'film, and give a provisional diagnosis with what it is waiting for.',
           'You can write a plan in an order, defend the order to the patient, record '
           'what she chose, and hand the whole appointment over to somebody else '
           'halfway through.',
           'That is the end of this book. The next one takes the same nine steps and '
           'asks you to explain them: to a patient who argues, to a supervisor who asks '
           'why, and in a case presentation of your own.'],
p10_ask='Report a whole examination to the person next to you, with the book closed, in '
        'ninety seconds.',
)
