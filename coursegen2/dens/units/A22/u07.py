# -*- coding: utf-8 -*-
import figs2 as F

U = dict(
num=7,
title='The Periodontium, and What the Probe Measures',
level='A2.2',
strap='CEFR A2.2  ·  Grammar: cause and consequence: leads to, results in, because of, '
      'if … then  ·  Four tissues that hold a tooth, and the millimetres that report on '
      'them',
threads={'domain': ['the supporting tissues', 'depth', 'disease'],
         'function': ['giving a cause', 'giving a consequence', 'measuring']},
can_do=['name the four tissues that hold a tooth in the jaw',
        'say what a periodontal probe measures and what the number means',
        'describe the step from gingivitis to periodontitis as a chain of causes',
        'say what is reversible and what is not, and why that distinction matters',
        'record six measurements round one tooth and say what they show'],
recycles='Unit 1 (the gingiva and the mucosa), Unit 3 (cementum and the tissues), '
         'Unit 5 (the periodontal probe) and Unit 6 (the order of a finding)',
prepares='Unit 8, which takes the commonest disease of all and describes it with '
         'the same tools: a chain of causes, an extent and a limit',

warm=['What holds a tooth in the jaw? Name as many things as you can.',
      'What does a bleeding gum tell you, and what does it not tell you?',
      'What is the deepest pocket you have measured, and what did you do about it?'],
warm_fig=F.tooth_section('WHAT HOLDS A TOOTH IN THE JAW',
    labels=['the gingiva', 'the periodontal ligament', 'cementum', 'alveolar bone',
            'the sulcus'],
    caption_terms=['the gingiva', 'the periodontal ligament', 'cementum',
                   'alveolar bone']),
warm_fig_cap='The four tissues of the periodontium, and the space the probe goes into.',
warm_fig_alt='A tooth in section with its supporting tissues labelled: the gingiva, the '
             'periodontal ligament, cementum and alveolar bone, with the sulcus marked '
             'between gum and tooth.',
warm_fig2=F.icon_cards('WHAT A NUMBER IN MILLIMETRES CAN AND CANNOT TELL YOU',
    [('how deep', 'probe'), ('whether it bleeds', 'gum'),
     ('whether bone is lost', 'xray'), ('whether it is getting worse', 'clock')],
    cols=4,
    note='One probe gives you the first two. The third needs a radiograph and the '
         'fourth needs a second visit.'),
warm_fig2_cap='Four questions about a pocket, and what a single measurement answers.',
p1_cards=['the periodontium', 'a pocket', 'calculus', 'gingivitis', 'periodontitis',
          'attachment'],

preview_intro='This unit has eight terms and ten sentences. Read this page first. Four '
              'of the eight are tissues you have already met under other names, and '
              'three of them are the words for what happens when those tissues fail.',
set_fig_title='THE EIGHT TERMS OF UNIT 7',
set_fig_cap='The eight terms you will be able to use by the end of this unit.',
set=[
 dict(term='the periodontium', pos='noun', thread='domain',
      definition='the four tissues that together hold a tooth in the jaw',
      example='The periodontium consists of gingiva, ligament, cementum and bone.',
      collocation='a healthy periodontium  ·  the periodontal tissues',
      recycle=[7, 8, 9]),
 dict(term='the periodontal ligament', pos='noun', thread='domain',
      definition='the fibres that join the root of a tooth to the bone round it',
      example='The periodontal ligament holds the tooth and lets it move slightly.',
      collocation='the fibres of the ligament  ·  a widened ligament', recycle=[7, 9]),
 dict(term='alveolar bone', pos='noun', thread='domain',
      definition='the bone of the jaw that holds the sockets of the teeth',
      example='Alveolar bone is lost in periodontitis and does not come back.',
      collocation='alveolar bone loss  ·  the bone level', recycle=[7, 8, 9]),
 dict(term='a pocket', pos='noun', thread='domain',
      definition='a space between the gum and the tooth that is deeper than normal',
      example='There is a pocket of five millimetres on the distal surface.',
      collocation='a deep pocket  ·  probe the pocket', recycle=[7, 8, 9]),
 dict(term='calculus', pos='noun', thread='domain',
      definition='hard deposit on a tooth surface, formed from plaque that was left',
      example='Calculus cannot be removed by brushing.',
      collocation='subgingival calculus  ·  remove calculus', recycle=[7, 8]),
 dict(term='gingivitis', pos='noun', thread='domain',
      definition='inflammation of the gingiva, with no loss of attachment',
      example='Gingivitis is reversible if the plaque is removed.',
      collocation='gingivitis resolves  ·  generalised gingivitis', recycle=[7, 9]),
 dict(term='periodontitis', pos='noun', thread='domain',
      definition='inflammation that has destroyed attachment and alveolar bone',
      example='In periodontitis the attachment has been lost and does not return.',
      collocation='chronic periodontitis  ·  periodontitis progresses', recycle=[7, 9]),
 dict(term='attachment', pos='noun', thread='domain',
      definition='the join between the tooth and the tissues that hold it',
      example='Loss of attachment is what separates periodontitis from gingivitis.',
      collocation='loss of attachment  ·  the attachment level', recycle=[7, 8, 9]),
],
set_note='Learn these eight. The difference between the sixth and the seventh is the '
         'whole of this unit.',

phrase_fig_title='TEN SENTENCES FOR CAUSE AND CONSEQUENCE',
phrases=[
 ('Naming a cause',
  ['Plaque that is left on the tooth leads to inflammation.',
   'Calculus holds plaque against the gum, because it cannot be brushed away.']),
 ('Naming a consequence',
  ['Inflammation of the gingiva results in bleeding on probing.',
   'Loss of attachment results in a deeper pocket.']),
 ('Putting the chain together',
  ['If plaque is not removed, then the gingiva becomes inflamed.',
   'If inflammation continues, then attachment and bone may be lost.']),
 ('Saying what can and cannot be undone',
  ['Gingivitis is reversible, because no attachment has been lost.',
   'Bone loss is not reversible.',
   'A pocket of five millimetres cannot be cleaned by a toothbrush.',
   'The probe measures depth; it does not measure activity.']),
],
phrase_fig_cap='Ten sentences, in four groups. The fourth group is what a patient has to '
               'be told.',
phrase_note='Note that every sentence in group three has both halves. A cause with no '
            'consequence stated is only half a sentence in this unit.',

receptive=[
 dict(term='the sulcus', definition='the shallow space between a healthy gum and a tooth',
      example='A healthy sulcus is one to three millimetres deep.'),
 dict(term='inflammation', definition='the body’s response to injury or infection',
      example='Inflammation of the gingiva is called gingivitis.'),
 dict(term='reversible', definition='able to go back to how it was',
      example='Gingivitis is reversible; bone loss is not.'),
 dict(term='subgingival', definition='below the edge of the gum',
      example='Subgingival calculus cannot be seen without probing.'),
 dict(term='recession', definition='the gum moving away from the crown of the tooth',
      example='Recession makes the root visible.'),
 dict(term='on probing', definition='when the probe is placed in the pocket',
      example='There was bleeding on probing at four sites.'),
],
receptive_fig_title='TERMS TO RECOGNISE IN UNIT 7',
receptive_fig_cap='You will meet these six in the lecture and the readings. You are not '
                  'asked to produce them yet.',

preview_task=dict(kind='match', rubric='Match each term with what it means.',
  example='a pocket  —  a space between gum and tooth deeper than normal',
  how='Cover the preview page first. Then check your answers against it.',
  pairs=[('the periodontium', 'the four tissues that hold a tooth in the jaw'),
         ('the periodontal ligament', 'the fibres joining root to bone'),
         ('alveolar bone', 'the bone that holds the sockets of the teeth'),
         ('a pocket', 'a space between gum and tooth deeper than normal'),
         ('calculus', 'hard deposit formed from plaque that was left'),
         ('attachment', 'the join between the tooth and the tissues that hold it')]),

vocab_tasks=[
 dict(kind='gap', rubric='Complete each sentence with one of the eight terms.',
   example='The periodontium consists of four tissues.',
   pairs=[('The ____________ consists of four tissues.', 'periodontium'),
          ('The ____________ joins the root to the bone around it.',
           'periodontal ligament'),
          ('____________ bone is lost in periodontitis and does not come back.',
           'Alveolar'),
          ('There is a ____________ of five millimetres on the distal surface.',
           'pocket'),
          ('____________ cannot be removed by brushing.', 'Calculus'),
          ('____________ is reversible if the plaque is removed.', 'Gingivitis'),
          ('In ____________ the bone has been destroyed.', 'periodontitis'),
          ('Loss of ____________ is what separates the two conditions.',
           'attachment')],
   fig=F.morph_builder('FOUR TERMS FROM THE PARTS YOU NOW HAVE',
     [('peri-', 'odont', '-ium', 'the periodontium', 'the tissues round the tooth'),
      ('peri-', 'odont', '-itis', 'periodontitis', 'inflammation of those tissues'),
      ('gingiv-', 'it', '-is', 'gingivitis', 'inflammation of the gingiva'),
      ('sub-', 'gingiv', '-al', 'subgingival', 'below the edge of the gum')],
     note='Peri- means round about. The ending -itis means inflammation, every time.'),
   fig_cap='Four terms taken apart, with the two word-parts that carry most of the '
           'meaning.'),

 dict(kind='odd', rubric='Three of the four belong to one class. Circle the one that '
                         'does not, and name the class the three share.',
   how='Name the class out loud before you name the odd one out. Then say which of the '
       'four you have examined this week.',
   example='gingiva / ligament / cementum / plaque  —  plaque is not a tissue',
   bank=['a tissue of the periodontium', 'a deposit', 'a disease', 'a measurement'],
   bank_head='The four classes these terms fall into',
   pics=['the periodontium', 'calculus', 'gingivitis', 'a pocket'],
   pairs=[('gingiva / ligament / cementum / plaque', 'plaque'),
          ('plaque / calculus / tartar / attachment', 'attachment'),
          ('gingivitis / periodontitis / inflammation / cementum', 'cementum'),
          ('a pocket / millimetres / depth / bone loss', 'bone loss'),
          ('reversible / resolves / returns to normal / destroyed', 'destroyed')]),

 dict(kind='short', rubric='Write the consequence of each cause, in one sentence.',
   example='plaque is left on the tooth  (Plaque that is left on the tooth leads to '
           'inflammation of the gingiva.)',
   pairs=[('plaque is left on the tooth',
           'Plaque that is left on the tooth leads to inflammation of the gingiva.'),
          ('plaque hardens into calculus',
           'Calculus holds plaque against the gum, because it cannot be brushed away.'),
          ('inflammation continues for months',
           'If inflammation continues, then attachment and bone may be lost.'),
          ('attachment is lost',
           'Loss of attachment results in a pocket that is deeper than normal.'),
          ('a pocket reaches five millimetres',
           'A pocket of five millimetres cannot be cleaned by a toothbrush.')],
   fig=F.step_sequence('ONE CHAIN, FIVE LINKS',
     ['Plaque is left on the tooth surface.',
      'The gingiva becomes inflamed: this is gingivitis.',
      'Plaque hardens into calculus, which holds more plaque.',
      'Inflammation continues below the gum.',
      'Attachment and bone are lost: this is periodontitis.'],
     stop_points=[2],
     note='Everything above the marked step can still be undone. Nothing below it can.'),
   fig_cap='The chain from plaque to bone loss, with the point of no return marked.'),

 dict(kind='sort', rubric='Write R for something reversible and N for something that is '
                          'not.',
   columns=('R', 'N'),
   how='Then say which of the six your own patients most often believe can be undone.',
   example='Inflammation of the gingiva.  —  R',
   bank=['reversible', 'not reversible'],
   bank_head='The two answers that decide what a patient is told',
   pics=['gingivitis', 'periodontitis', 'attachment', 'calculus'],
   pairs=[('Inflammation of the gingiva.', 'R'),
          ('Loss of alveolar bone.', 'N'),
          ('Bleeding on probing.', 'R'),
          ('Loss of attachment.', 'N'),
          ('A deposit of plaque.', 'R'),
          ('A pocket caused by bone loss.', 'N')],
   fig=F.contrast('TWO HALVES OF ONE DISEASE',
     'GINGIVITIS  ·  REVERSIBLE', ['inflammation of the gingiva',
                                   'bleeding on probing',
                                   'no attachment lost',
                                   'resolves when plaque is removed'],
     'PERIODONTITIS  ·  NOT REVERSIBLE', ['attachment destroyed',
                                          'alveolar bone lost',
                                          'pockets deeper than normal',
                                          'can be stopped, not undone'],
     'The tissue returns to normal.',
     'The disease stops; the tissue stays as it is.'),
   fig_cap='The distinction the whole unit turns on, with four signs on each side.'),
],

g_point='cause and consequence: leads to, results in, because of, if … then',
g_source='the ten sentences on the preview page',
g_rule=['Plaque that is left on the tooth leads to inflammation. Leads to takes a noun '
        'and names what follows. It is the plainest way of stating a cause in clinical '
        'English.',
        'Loss of attachment results in a deeper pocket. Results in also takes a noun, '
        'and is used when the consequence is a measurable state rather than a process.',
        'If plaque is not removed, then the gingiva becomes inflamed. If with the '
        'present, then with the present: the pattern for a general rule rather than a '
        'particular patient.'],
g_mnemonic_title='THREE WAYS TO JOIN A CAUSE TO WHAT FOLLOWS',
g_mnemonic=[
 ('leads to', 'names the process that follows',
  'Plaque leads to inflammation.', 'gum'),
 ('results in', 'names the state that follows',
  'Loss of attachment results in a pocket.', 'probe'),
 ('if … then', 'states the rule in general',
  'If plaque is not removed, then …', 'book'),
],
g_mnemonic_cap='Three patterns. The third is the one a patient is told; the first two '
               'are the ones you write.',
g_mnemonic_note='Because of takes a noun too: bone loss because of untreated '
                'inflammation. Because takes a clause.',
g_fig=('TWO WAYS TO EXPLAIN THE SAME CHAIN',
       'AS A LIST OF FACTS',
       ['There is plaque.',
        'The gums are inflamed.',
        'There is bone loss on the radiograph.'],
       'AS A CHAIN OF CAUSES',
       ['Plaque left at the gum margin leads to inflammation.',
        'If the inflammation continues, attachment is lost.',
        'Loss of attachment results in the bone level seen here.'],
       'Three true statements, and no reason to change anything.',
       'The same three facts, and a reason the patient can act on.'),
g_fig_cap='The same findings, listed and then joined. Only the second version explains '
          'anything.',
g_tasks=[
 dict(kind='gap', rubric='Complete each sentence with leads, results, because or if.',
   example='Plaque leads to inflammation of the gingiva.',
   pairs=[('Plaque ____________ to inflammation of the gingiva.', 'leads'),
          ('Loss of attachment ____________ in a deeper pocket.', 'results'),
          ('____________ plaque is not removed, the gingiva becomes inflamed.', 'If'),
          ('Calculus holds plaque ____________ it cannot be brushed away.', 'because'),
          ('Untreated inflammation ____________ to loss of bone.', 'leads'),
          ('____________ the pocket is deep, a toothbrush cannot reach the base.', 'If')]),

 dict(kind='choice', rubric='Circle a, b or c.',
   how='Each of these is a sentence a patient has been told at least once, somewhere.',
   example='Gingivitis is   a) reversible   b) not reversible.   Answer: a',
   bank=['gingivitis', 'periodontitis', 'a pocket', 'attachment'],
   bank_head='The four terms these sentences concern',
   pics=['gingivitis', 'periodontitis', 'a pocket', 'attachment'],
   pairs=[('Bone that has been lost   a) grows back with brushing   b) does not come '
           'back   c) comes back slowly', 'b'),
          ('The difference between gingivitis and periodontitis is   a) how much it '
           'bleeds   b) whether attachment has been lost   c) how old the patient is',
           'b'),
          ('A pocket of five millimetres can be cleaned   a) by a toothbrush   '
           'b) not by a toothbrush alone   c) by mouthwash', 'b'),
          ('A periodontal probe measures   a) activity   b) depth   c) bone density',
           'b'),
          ('Calculus is removed   a) by brushing   b) by instruments   '
           'c) by rinsing', 'b')]),

 dict(kind='short', rubric='Join each pair of facts into one sentence with a cause in '
                           'it.',
   example='plaque at the gum margin / inflammation  (Plaque at the gum margin leads to '
           'inflammation of the gingiva.)',
   how='Use leads to, results in, because or if … then. Do not use all four the same '
       'way.',
   pairs=[('plaque at the gum margin / inflammation',
           'Plaque at the gum margin leads to inflammation of the gingiva.'),
          ('calculus below the gum / plaque that cannot be removed',
           'Subgingival calculus holds plaque because it cannot be brushed away.'),
          ('loss of attachment / a pocket of five millimetres',
           'Loss of attachment results in a pocket of five millimetres.'),
          ('a deep pocket / a toothbrush cannot reach the base',
           'If the pocket is deep, then a toothbrush cannot reach the base.')]),

 dict(kind='gap', rubric='One word is wrong in each sentence. Write the correct one.',
   example='Plaque leads in inflammation.  →  to',
   pairs=[('Plaque leads in inflammation.', 'to'),
          ('Loss of attachment results to a deeper pocket.', 'in'),
          ('Bone loss is reversible if the plaque is removed.', 'not'),
          ('Gingivitis has destroyed the attachment.', 'periodontitis'),
          ('The probe measures the activity of the disease.', 'depth')]),
],

listen_intro='Three recordings: a lecture on the chain from plaque to bone loss, a '
             'tutorial about what a number does not say, and a clinic in which six '
             'measurements are called out. Do the task before, the task while you '
             'listen, and the task after.',
listening=[
 dict(title='Lecture: from plaque to bone loss', genre='lecture',
   what='Dr Nilsen builds the chain one link at a time and marks the point of no return.',
   speakers=['Dr Petra Nilsen', 'Leila Mansour'],
   conv_lines=[('L', 'Plaque left at the gum margin leads to inflammation.'),
               ('R', 'And that is gingivitis.'),
               ('L', 'That is gingivitis, and it is reversible.'),
               ('R', 'Where does it stop being reversible?'),
               ('L', 'When attachment is lost. Not before.'),
               ('R', 'So the line is the attachment, not the bleeding.')],
   conv_cap='Six turns in which the student finds the line the lecture is built round.',
   conv_note='The question in turn four is the question the whole lecture exists to '
             'answer.',
   pre=dict(kind='choice',
     rubric='Before you listen, predict where the chain stops being reversible.',
     how='Use the five-link figure. Then listen and check.',
     example='Gingivitis is   a) reversible   b) not.   Answer: a',
     bank=['plaque', 'inflammation', 'attachment', 'bone'],
     bank_head='The four stages the lecture names',
     pics=['calculus', 'gingivitis', 'attachment', 'periodontitis'],
     pairs=[('The chain begins with   a) plaque   b) calculus   c) bone loss', 'a'),
            ('It stops being reversible when   a) the gum bleeds   b) attachment is '
             'lost   c) calculus forms', 'b'),
            ('Bone that has been lost   a) returns   b) does not return   '
             'c) returns slowly', 'b')]),
   fig=F.mini_table('THE CHAIN, AND WHAT CAN BE DONE AT EACH LINK',
     ['Link', 'What is happening', 'Can it be undone?'],
     [['plaque', 'soft deposit at the gum margin', 'yes, by brushing'],
      ['gingivitis', 'the gingiva is inflamed', 'yes, when plaque is removed'],
      ['calculus', 'plaque has hardened', 'yes, but only by instruments'],
      ['loss of attachment', 'the join is destroyed', 'no'],
      ['bone loss', 'alveolar bone is gone', 'no']],
     highlight=[4], note='The shaded row is where the answer in the third column '
                         'changes, and it does not change back.'),
   fig_cap='Five links in the chain, with the one where the answer changes.',
   script=[('Dr Nilsen', 'We begin with something that is on every tooth in this room.'),
           ('Leila', 'Plaque.'),
           ('Dr Nilsen', 'Plaque. It is soft, and a toothbrush removes it.'),
           ('Dr Nilsen', 'Plaque left at the gum margin leads to inflammation.'),
           ('Leila', 'And that is gingivitis.'),
           ('Dr Nilsen', 'That is gingivitis, and it is reversible.'),
           ('Dr Nilsen', 'Remove the plaque and the gingiva returns to normal.'),
           ('Leila', 'Where does it stop being reversible?'),
           ('Dr Nilsen', 'When attachment is lost. Not before.'),
           ('Leila', 'So the line is the attachment, not the bleeding.'),
           ('Dr Nilsen', 'The line is the attachment. Bleeding is a sign, not the line.'),
           ('Dr Nilsen', 'Now, what happens if the plaque stays?'),
           ('Leila', 'It hardens.'),
           ('Dr Nilsen', 'It hardens into calculus, and calculus holds more plaque.'),
           ('Dr Nilsen', 'A toothbrush cannot remove calculus. Instruments can.'),
           ('Leila', 'So the patient cannot fix it alone any more.'),
           ('Dr Nilsen', 'Not alone. That is the first thing that changes.'),
           ('Dr Nilsen', 'Inflammation continues below the gum, out of reach.'),
           ('Leila', 'And then the attachment goes.'),
           ('Dr Nilsen', 'Then attachment is lost, and alveolar bone with it.'),
           ('Dr Nilsen', 'That is periodontitis, and it does not reverse.'),
           ('Leila', 'Can it be stopped?'),
           ('Dr Nilsen', 'It can be stopped. It cannot be undone. Say both to a patient.'),
           ('Leila', 'Why both?'),
           ('Dr Nilsen', 'Because the first is hopeful and the second is true.'),
           ('Dr Nilsen', 'A patient told only the first will not come back.'),
           ('Leila', 'And one told only the second will not try.'),
           ('Dr Nilsen', 'Which is why the sentence has two halves. Learn it that way.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='What does the chain begin with?  (plaque)',
     pairs=[('What does the chain begin with?', 'plaque'),
            ('What does plaque at the gum margin lead to?', 'inflammation'),
            ('Where does it stop being reversible?', 'when attachment is lost'),
            ('What removes calculus?', 'instruments'),
            ('What is lost along with attachment?', 'alveolar bone'),
            ('What two things should a patient be told?',
             'we can stop it and we cannot undo it')])},
   post=dict(kind='short', rubric='Answer Dr Nilsen’s questions as Leila does.',
     example='“What is on every tooth in this room?”  (plaque)',
     pairs=[('“What is on every tooth in this room?”', 'plaque'),
            ('“What happens if the plaque stays?”', 'it hardens into calculus'),
            ('“Can the patient fix it alone then?”', 'no, not alone'),
            ('“Can periodontitis be stopped?”', 'yes, but not undone'),
            ('“Why does the sentence have two halves?”',
             'one is hopeful and the other is true')]),
   point='You now have the chain from plaque to bone loss, and the single point in it '
         'where the answer stops being yes.',
   ask='State the chain in five links, and say where the line falls.',
   icons=['book', 'gum', 'probe', 'xray']),

 dict(title='Tutorial: what the number does not tell you', genre='tutorial',
   what='Daniel reads six millimetres as a diagnosis, and Dr Nilsen separates depth '
        'from activity.',
   speakers=['Dr Petra Nilsen', 'Daniel Owusu'],
   conv_lines=[('L', 'You have written: six millimetres, so periodontitis is active.'),
               ('R', 'Six is deep.'),
               ('L', 'Six is deep. Is it getting deeper?'),
               ('R', 'I do not know.'),
               ('L', 'Then you know the depth, and not the activity.'),
               ('R', 'I would need an earlier measurement.')],
   conv_cap='Six turns in which a correct measurement turns out to answer a different '
            'question.',
   pre=dict(kind='choice',
     rubric='Before you listen, decide what one measurement can establish.',
     how='Say your answer out loud. Then listen.',
     example='One measurement gives   a) depth   b) change.   Answer: a',
     bank=['depth', 'bleeding', 'change', 'bone level'],
     bank_head='Four things somebody might want from a probing',
     pics=['a pocket', 'periodontitis', 'attachment', 'gingivitis'],
     pairs=[('One measurement establishes   a) depth   b) whether it is getting worse   '
             'c) both', 'a'),
            ('To know whether it is getting worse you need   a) a deeper probe   '
             'b) an earlier measurement   c) a radiograph only', 'b'),
            ('Bleeding on probing tells you about   a) depth   b) inflammation   '
             'c) bone', 'b')]),
   fig=F.form_annotated('ONE NUMBER, AND THE THREE QUESTIONS IT DOES NOT ANSWER',
     'TUTORIAL  ·  2 JUNE',
     [('What was measured', 'six millimetres, distal of the lower left six'),
      ('What that establishes', 'the depth of the pocket on that day'),
      ('What it does not establish', 'whether the pocket is getting deeper'),
      ('Nor', 'whether the inflammation is active today'),
      ('Nor', 'how much alveolar bone has been lost')],
     callouts=[(2, 'the three lines below this one are all about time or tissue')],
     note='Five lines. The measurement is correct in every one of them.'),
   fig_cap='One correct measurement, and the three things it was never going to say.',
   script=[('Dr Nilsen', 'You have written: six millimetres, so periodontitis is '
                         'active.'),
           ('Daniel', 'Six is deep.'),
           ('Dr Nilsen', 'Six is deep. Is it getting deeper?'),
           ('Daniel', 'I do not know.'),
           ('Dr Nilsen', 'Then you know the depth, and not the activity.'),
           ('Daniel', 'I would need an earlier measurement.'),
           ('Dr Nilsen', 'You would. What else might tell you something today?'),
           ('Daniel', 'Whether it bleeds on probing.'),
           ('Dr Nilsen', 'Good. And what does bleeding tell you?'),
           ('Daniel', 'That the tissue is inflamed.'),
           ('Dr Nilsen', 'Inflamed today. Not that it is losing attachment today.'),
           ('Daniel', 'So neither number is a diagnosis on its own.'),
           ('Dr Nilsen', 'Neither is. Together they are a great deal better.'),
           ('Daniel', 'And the radiograph?'),
           ('Dr Nilsen', 'Shows the bone level. Also a state, not a rate.'),
           ('Daniel', 'Everything I have is a photograph of one day.'),
           ('Dr Nilsen', 'That is exactly it, and it is why we measure again.'),
           ('Daniel', 'Then six months is not an empty rule.'),
           ('Dr Nilsen', 'It is the only way the word active ever becomes true.'),
           ('Daniel', 'What should I have written?'),
           ('Dr Nilsen', 'Six millimetres, bleeding on probing, bone loss on the '
                         'radiograph.'),
           ('Daniel', 'And then the conclusion separately.'),
           ('Dr Nilsen', 'Appears consistent with periodontitis. Review at six months.'),
           ('Daniel', 'That is Unit 6 again.'),
           ('Dr Nilsen', 'It is the same rule in a different tissue. It usually is.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='What had Daniel written?  (six millimetres, so periodontitis is active)',
     pairs=[('What had Daniel written?',
             'six millimetres, so periodontitis is active'),
            ('What does one measurement establish?', 'the depth on that day'),
            ('What would he need to know whether it is worse?',
             'an earlier measurement'),
            ('What does bleeding on probing tell him?', 'that the tissue is inflamed'),
            ('What does the radiograph show?', 'the bone level'),
            ('What should he have written instead?',
             'the three findings, and the conclusion separately')])},
   post=dict(kind='short', rubric='Write what each piece of evidence does and does not '
                                  'establish.',
     example='six millimetres  (the depth today, not whether it is changing)',
     pairs=[('six millimetres', 'the depth today, not whether it is changing'),
            ('bleeding on probing', 'inflammation today, not loss of attachment today'),
            ('bone loss on a radiograph', 'the bone level, not the rate'),
            ('a measurement six months ago', 'what it was then, so change can be seen'),
            ('all three together', 'a picture of one day, which is why we measure again')]),
   point='You now know that depth, bleeding and bone level are three states on one day, '
         'and that the word active needs two days.',
   ask='What exactly does one measurement of six millimetres establish?',
   icons=['probe', 'clock', 'xray', 'cross']),

 dict(title='In the clinic: six measurements round one tooth',
   genre='clinical supervision',
   what='Dr Rahman has Leila call out six sites and say what the set of them shows.',
   speakers=['Dr Yusuf Rahman', 'Leila Mansour'],
   conv_lines=[('L', 'Six sites. Start distobuccal and work round.'),
               ('R', 'Five, three, three.'),
               ('L', 'And the lingual?'),
               ('R', 'Six, four, four. Bleeding on the two deepest.'),
               ('L', 'Good. What does the set tell you?'),
               ('R', 'Deeper on the lingual, and inflamed where it is deepest.')],
   conv_cap='Six turns at the chair, in which six numbers become one statement.',
   pre=dict(kind='choice',
     rubric='Before you listen, decide why six sites are measured and not one.',
     how='Three of these are real reasons. One is not.',
     example='One site per tooth is   a) enough   b) not enough.   Answer: b',
     bank=['six sites', 'one site', 'bleeding', 'the deepest'],
     bank_head='What a set of measurements can show that one cannot',
     pics=['a pocket', 'attachment', 'periodontitis', 'gingivitis'],
     pairs=[('Six sites are measured because   a) disease is not even round a tooth   '
             'b) it is traditional   c) the probe is small', 'a'),
            ('The number usually recorded for the tooth is   a) the mean   '
             'b) the deepest   c) the first', 'b'),
            ('Bleeding is recorded   a) for the tooth   b) site by site   '
             'c) not at all', 'b')]),
   fig=F.mini_table('SIX SITES ROUND ONE TOOTH',
     ['Site', 'Depth, mm', 'Bleeding on probing'],
     [['distobuccal', '5', 'no'],
      ['buccal', '3', 'no'],
      ['mesiobuccal', '3', 'no'],
      ['distolingual', '6', 'yes'],
      ['lingual', '4', 'yes'],
      ['mesiolingual', '4', 'no']],
     highlight=[4], note='Six numbers, one tooth. The shaded row is the one that is '
                         'recorded for the tooth as a whole.'),
   fig_cap='One tooth, six sites, and the site that gives the tooth its number.',
   script=[('Dr Rahman', 'Six sites on this one. Start distobuccal and work round.'),
           ('Leila', 'Distobuccal, five.'),
           ('Dr Rahman', 'Bleeding?'),
           ('Leila', 'No.'),
           ('Dr Rahman', 'Say both together. It saves me asking.'),
           ('Leila', 'Buccal, three, no bleeding. Mesiobuccal, three, no bleeding.'),
           ('Dr Rahman', 'Good. Now the lingual.'),
           ('Leila', 'Distolingual, six, bleeding.'),
           ('Leila', 'Lingual, four, bleeding. Mesiolingual, four, no bleeding.'),
           ('Dr Rahman', 'What do you record for the tooth?'),
           ('Leila', 'Six. The deepest site.'),
           ('Dr Rahman', 'And what does the set tell you that six alone does not?'),
           ('Leila', 'That it is deeper on the lingual than the buccal.'),
           ('Dr Rahman', 'Which suggests what?'),
           ('Leila', 'That cleaning is reaching the buccal and not the lingual.'),
           ('Dr Rahman', 'That is a conclusion. Keep it separate.'),
           ('Leila', 'Findings first. Six sites, two bleeding.'),
           ('Dr Rahman', 'Then the conclusion. Then what you would do.'),
           ('Leila', 'Show her the lingual surfaces with a mirror.'),
           ('Dr Rahman', 'That is worth more than telling her to brush better.'),
           ('Leila', 'Because she can see where she is missing.'),
           ('Dr Rahman', 'Because she can see it. Now, is this gingivitis?'),
           ('Leila', 'Not at six millimetres with bone loss on the film.'),
           ('Dr Rahman', 'So what do you call it?'),
           ('Leila', 'Periodontitis, and I say so in the conclusion line.'),
           ('Dr Rahman', 'And what do you tell her it means?'),
           ('Leila', 'That we can stop it, and that we cannot undo it.'),
           ('Dr Rahman', 'Both halves. Every time.')],
   **{'while': dict(kind='short', rubric='Listen and answer in your own words.',
     example='How many sites are measured?  (six)',
     pairs=[('How many sites are measured?', 'six'),
            ('Which site is deepest?', 'distolingual'),
            ('How many sites bleed?', 'two'),
            ('What is recorded for the tooth?', 'the deepest site'),
            ('What does the pattern suggest?',
             'cleaning is reaching the buccal and not the lingual'),
            ('What is the patient told?',
             'we can stop it and we cannot undo it')])},
   post=dict(kind='short', rubric='Write the line Leila would record for each thing.',
     example='the six depths  (5, 3, 3 buccal; 6, 4, 4 lingual)',
     pairs=[('the six depths', '5, 3, 3 buccal; 6, 4, 4 lingual'),
            ('the bleeding', 'bleeding on probing at two sites, both lingual'),
            ('the number for the tooth', '6 millimetres, distolingual'),
            ('the conclusion', 'appears consistent with periodontitis'),
            ('what she would do', 'show the lingual surfaces with a mirror')]),
   point='You now know why a tooth is measured at six sites, which of the six is '
         'recorded, and what the pattern says that the single number does not.',
   ask='Why does the pattern round the tooth matter as much as the deepest number?',
   icons=['probe', 'gum', 'pen', 'tick']),
],

speaking=[
 dict(title='The chain, in five links',
   rubric='Explain the chain from plaque to bone loss to a partner, naming each link.',
   how='Student B says “and then?” after each link and nothing else. Three minutes '
       'each, then swap.',
   conv=['Dr Petra Nilsen', 'Leila Mansour'],
   conv_lines=[('R', 'Plaque left at the gum margin leads to inflammation.'),
               ('L', 'And then?'),
               ('R', 'If it is not removed, it hardens into calculus.'),
               ('L', 'And then?'),
               ('R', 'Inflammation continues below the gum, out of reach.'),
               ('L', 'And then?')],
   model=[('Student', 'Plaque left at the gum margin leads to inflammation of the '
                      'gingiva.'),
          ('Student', 'That is gingivitis, and it is reversible, because no attachment '
                      'has been lost.'),
          ('Student', 'If the plaque is not removed, it hardens into calculus, which '
                      'holds more plaque.'),
          ('Student', 'Calculus cannot be brushed away, so the inflammation continues '
                      'below the gum.'),
          ('Student', 'If inflammation continues, then attachment and alveolar bone are '
                      'lost.'),
          ('Student', 'That is periodontitis. It can be stopped, and it cannot be '
                      'undone.')],
   frame=[['Change this', 'Keep this', 'Why'],
          ['the link you start from', 'leads to  ·  results in  ·  if … then',
           'the patterns are what is being marked'],
          ['nothing in the last line', 'stopped, and not undone',
           'both halves or neither'],
          ['the examples', 'because no attachment has been lost',
           'this is the clause that defines gingivitis']],
   checklist=['you named all five links in order',
              'you used at least two different cause patterns',
              'you said where it stops being reversible',
              'the last sentence had both halves'],
   point='You can explain the whole chain without notes, which is what it takes to '
         'explain it to a patient who interrupts.',
   icons=['book', 'gum', 'probe', 'tick']),

 dict(title='Calling out six sites',
   rubric='Call out six measurements round a tooth and say what the set shows.',
   how='Student B writes down only what is said, in order. Four minutes, then swap. '
       'Use real numbers from a patient you have charted, if you have them.',
   conv=['Dr Yusuf Rahman', 'Leila Mansour'],
   conv_lines=[('R', 'Distobuccal, five, no bleeding.'),
               ('L', 'Go on.'),
               ('R', 'Buccal, three, no bleeding. Mesiobuccal, three, no bleeding.'),
               ('L', 'And the lingual?'),
               ('R', 'Distolingual, six, bleeding. Lingual, four, bleeding.'),
               ('L', 'And the tooth?')],
   model=[('Student', 'Distobuccal, five, no bleeding.'),
          ('Student', 'Buccal, three, no bleeding. Mesiobuccal, three, no bleeding.'),
          ('Student', 'Distolingual, six, bleeding. Lingual, four, bleeding.'),
          ('Student', 'Mesiolingual, four, no bleeding.'),
          ('Student', 'For the tooth: six millimetres, distolingual, with bleeding at '
                      'two sites.'),
          ('Student', 'The set is deeper lingually than buccally.')],
   cards=[dict(who='Student A', brief='the student charting. Say the depth and the '
                                      'bleeding together, every site.'),
          dict(who='Student B', brief='the one writing. Stop your partner the moment a '
                                      'site arrives without its bleeding.')],
   checklist=['every site had its depth and its bleeding in one breath',
              'the six sites came in a fixed order',
              'you said which number is recorded for the tooth',
              'you described the pattern, not only the deepest number'],
   point='You can chart a tooth at six sites by voice, which is what makes a full-mouth '
         'chart possible in a single appointment.',
   icons=['probe', 'pen', 'speech', 'tick']),

 dict(title='Telling a patient what cannot be undone',
   rubric='Explain periodontitis to the patient without any of the eight terms.',
   how='Student B is a patient who asks whether it will grow back. Three minutes, then '
       'swap. Then say which of your sentences you would also write in the record.',
   conv=['Leila Mansour', 'Thandiwe Mabaso'],
   conv_lines=[('R', 'Will the bone grow back?'),
               ('L', 'It will not. I would rather tell you that plainly.'),
               ('R', 'Then what is the point of treating it?'),
               ('L', 'To stop it going further. That part we can do.'),
               ('R', 'How much further would it go?'),
               ('L', 'Without treatment, further every year.')],
   model=[('Student', 'The gum has come away from the tooth, and part of the bone under '
                      'it has gone.'),
          ('Student', 'The bone will not grow back. I would rather tell you that '
                      'plainly.'),
          ('Student', 'What we can do is stop it going further, and that part works '
                      'well.'),
          ('Student', 'The deep places cannot be reached with a brush, which is why '
                      'cleaning them is my job and not yours.'),
          ('Student', 'Everything above the gum is yours, and that is where it starts.'),
          ('Student', 'Together those two things stop it. Neither of them alone does.')],
   fig=F.conversation('“WILL IT GROW BACK?”',
     dict(name='You', role='the student', skin='3', hair='black', style='tied',
          tunic='teal'),
     dict(name='Your partner', role='the patient', skin='5', hair='black', style='long',
          tunic='plum'),
     [('R', 'Will the bone grow back?'),
      ('L', 'It will not. I would rather tell you plainly.'),
      ('R', 'Then what is the point of treating it?'),
      ('L', 'To stop it going further. That we can do.'),
      ('R', 'How much further would it go?'),
      ('L', 'Without treatment, further every year.')],
     note='The second question is the one that decides whether the patient comes back. '
          'Answer it before they ask it.'),
   fig_cap='The hardest thing in this unit to say, and the sentence that follows it.',
   checklist=['you used none of the eight terms',
              'you said plainly that it does not come back',
              'you said what treatment does achieve',
              'you divided the work between you and the patient'],
   point='You can tell a patient something irreversible without leaving them with '
         'nothing to do about it.',
   icons=['person', 'speech', 'gum', 'tick']),
],

fluency=dict(
  title='The chain, three times',
  rubric='Explain the chain from plaque to bone loss to three different partners.',
  how='Four minutes with the first, three with the second, two with the third. The same '
      'five links every time. Nothing new is added.',
  content=['Begin with plaque at the gum margin and name what it leads to.',
           'Name the reversible stage and say why it is reversible.',
           'Say what happens if the plaque is not removed.',
           'Name the point where attachment is lost.',
           'Name what is lost with it, and say that it does not return.',
           'End with the two halves: it can be stopped, it cannot be undone.'],
  words=['the periodontium', 'the periodontal ligament', 'alveolar bone', 'a pocket',
         'calculus', 'gingivitis', 'periodontitis', 'attachment'],
  fig_title='THE SAME CHAIN, IN FOUR MINUTES, THEN THREE, THEN TWO',
  point='You can explain the chain without searching for the next link, which is what '
        'lets you say it to a patient rather than recite it.',
  ask='Which link still made you stop on the third attempt?',
  icons=['book', 'clock', 'gum', 'tick']),

reading=[
 dict(title='Textbook: the periodontium and its diseases', genre='textbook page',
   pre=dict(rubric='Before you read, find these four things in the passage.',
     how='Two minutes. Do not read every sentence yet.',
     items=['the four tissues of the periodontium',
            'what a healthy sulcus measures',
            'the difference between gingivitis and periodontitis',
            'what a probe measures and what it does not']),
   fig=F.tooth_section('THE PERIODONTIUM IN SECTION',
     labels=['the gingiva', 'the sulcus', 'the periodontal ligament', 'cementum',
             'alveolar bone'],
     caption_terms=['the gingiva', 'the periodontal ligament', 'cementum',
                    'alveolar bone']),
   fig_cap='The four tissues of the periodontium, with the sulcus the probe enters.',
   text=[
    'A tooth is not fixed in the jaw in the way a nail is fixed in wood. It is suspended '
    'in its socket by a system of four tissues, which together are called the '
    'periodontium.',
    'The first is the gingiva, the part of the mucosa that surrounds the neck of the '
    'tooth. Between the gingiva and the tooth there is a shallow space called the '
    'sulcus, and in health it measures between one and three millimetres.',
    'The second is the periodontal ligament. This is a system of fibres running between '
    'the root of the tooth and the bone of the socket. The fibres are fixed into '
    'cementum at one end and into bone at the other, and they allow a healthy tooth a '
    'very small amount of movement under load.',
    'The third is cementum, which was met as one of the four dental tissues and belongs '
    'equally to this group. Without cementum the fibres of the ligament would have '
    'nothing on the tooth to hold on to.',
    'The fourth is the alveolar bone, the part of the jaw that carries the sockets. It '
    'is shaped round the roots it holds, and it is the tissue whose loss is permanent.',
    'Disease of these tissues follows a chain that begins with plaque. Plaque is a soft '
    'deposit which forms on every tooth surface and which a toothbrush removes.',
    'Plaque left at the gum margin leads to inflammation of the gingiva. That '
    'inflammation is called gingivitis. It shows as redness, swelling and bleeding when '
    'the area is probed, and it is reversible: when the plaque is removed, the gingiva '
    'returns to normal.',
    'If plaque is not removed it hardens into calculus. Calculus is rough and firmly '
    'attached, a toothbrush cannot remove it, and it holds further plaque against the '
    'tissues. From this point the patient can no longer resolve the problem alone.',
    'Where inflammation continues below the gum margin, the attachment between tooth and '
    'tissue may be destroyed and alveolar bone may be lost. This is periodontitis, and '
    'it is not reversible. Treatment can arrest it; treatment cannot return what has '
    'gone.',
    'The clinical difference between the two conditions is therefore not how much the '
    'gum bleeds. It is whether attachment has been lost.',
    'Loss of attachment results in a space between gum and tooth that is deeper than a '
    'healthy sulcus. That space is a pocket, and its depth is measured in millimetres '
    'with a periodontal probe at six sites round each tooth.',
    'A single measurement establishes the depth of a pocket on the day it was taken. It '
    'does not establish whether the pocket is deepening, and it does not establish how '
    'much bone has been lost. The first of those requires an earlier measurement to '
    'compare with, and the second requires a radiograph.'],
   source=('The account of the periodontium and of periodontal disease follows standard '
           'dental anatomy and periodontology reference works.',
           'General dental anatomy and periodontology reference works, 2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='How many tissues make up the periodontium?  (four)',
     pairs=[('How many tissues make up the periodontium?', 'four'),
            ('How deep is a healthy sulcus?', 'one to three millimetres'),
            ('What are the ligament fibres fixed into?', 'cementum and bone'),
            ('What hardens from plaque?', 'calculus'),
            ('What is the clinical difference between the two conditions?',
             'whether attachment has been lost'),
            ('What does one measurement not establish?',
             'whether the pocket is deepening')])},
   post=dict(kind='tf', rubric='True or false? If it is false, write the correction in '
                               'eight words or fewer.',
     how='Then say which of these your own textbook states differently.',
     example='Gingivitis is not reversible.  —  false — it is reversible',
     bank=['gingivitis', 'periodontitis', 'calculus', 'a pocket', 'attachment'],
     bank_head='The five terms these statements concern',
     pics=['gingivitis', 'periodontitis', 'calculus', 'a pocket'],
     pairs=[('Gingivitis is not reversible.', 'false — it is reversible'),
            ('A healthy sulcus measures one to three millimetres.', 'true'),
            ('The difference between the two conditions is how much it bleeds.',
             'false — it is loss of attachment'),
            ('Calculus can be removed with a toothbrush.',
             'false — it needs instruments'),
            ('Treatment can arrest periodontitis.', 'true')]),
   point='Four tissues, one chain, and one line across it: attachment lost or not lost.',
   ask='Name the four tissues, and say which of them does not come back.',
   icons=['book', 'gum', 'probe', 'xray']),

 dict(title='A case: the patient who brushed harder', genre='written case',
   pre=dict(rubric='Before you read, decide what you expect.',
     how='Say your answer out loud, then read and compare.',
     items=['What happens when a patient is told only to brush better?',
            'What can a toothbrush not reach?',
            'What would you have shown her instead of telling her?']),
   fig=F.mini_table('THE SAME TOOTH, TWO VISITS',
     ['Site', 'March', 'September'],
     [['distobuccal', '4, no bleeding', '3, no bleeding'],
      ['buccal', '3, no bleeding', '2, no bleeding'],
      ['distolingual', '6, bleeding', '7, bleeding'],
      ['lingual', '5, bleeding', '6, bleeding']],
     highlight=[3], note='The buccal sites improved. The lingual sites did not, and the '
                         'patient had been brushing harder than before.'),
   fig_cap='Four sites on one tooth over six months, with the two that went the wrong '
           'way.',
   text=[
    'A woman of fifty-two attended in March with generalised bleeding on probing and '
    'pockets of four to six millimetres. She was told that her cleaning was not good '
    'enough and that she should brush better.',
    'She took the instruction seriously. She bought a new brush, she brushed for longer, '
    'and she brushed harder.',
    'At the September visit the buccal sites had improved by one millimetre and no '
    'longer bled. The lingual sites were a millimetre deeper than in March and still '
    'bled. She had also developed recession on two upper canines, where the gum had been '
    'brushed away from the crown.',
    'The instruction she was given was not wrong, but it was incomplete in two ways, and '
    'the September measurements show both.',
    'The first is that brushing harder does not reach further. The pockets on the '
    'lingual surfaces were five and six millimetres deep in March. No toothbrush, used '
    'with any force, reaches the base of a six-millimetre pocket. The force she added '
    'went entirely into the tissue she could already reach, and two canines show the '
    'result.',
    'The second is that she was never shown where she was missing. Lingual surfaces are '
    'the hardest in the mouth to see and the easiest to under-clean. A patient who has '
    'never seen her own lingual surfaces in a mirror is working blind.',
    'What the March visit needed was not a stronger instruction but a different one. Two '
    'minutes with a mirror would have shown her the lingual surfaces of the lower front '
    'teeth. That would have made the pattern in the chart visible to the person who had '
    'to act on it.',
    'It also needed the division of labour stated plainly. Pockets of five and six '
    'millimetres are cleaned by a clinician with instruments, not by a patient with a '
    'brush. A patient who believes that everything depends on her brushing will brush '
    'harder when it does not work, because that is the only thing she has been given to '
    'do.',
    'The clinical outcome here was not a disaster. Four sites improved, two worsened, '
    'and the recession is permanent but small.',
    'The point is narrower and more useful than that. Her brushing was never the whole '
    'of the problem, and telling her that it was guaranteed that the only change she '
    'could make was the wrong one.',
    'It is worth noticing how reasonable the March instruction sounds. It is short, it '
    'is true as far as it goes, and it places the work with the person who has to do it '
    'every day.',
    'What it does not do is tell her which surfaces, or how far a brush can reach, or '
    'what the clinician was going to contribute.',
    'A patient who is given a task and no limits on it will push the task further when '
    'the result disappoints her. That is not a failure of character. It is what anybody '
    'does with the only tool they have been handed.'],
   source=('The case is invented for teaching; the relationship between pocket depth, '
           'brushing and recession follows standard periodontology reference works.',
           'General periodontology and clinical reference works, 2025–2026.'),
   source_tier='A',
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='How old was the patient?  (fifty-two)',
     pairs=[('How old was the patient?', 'fifty-two'),
            ('What was she told in March?', 'to brush better'),
            ('What happened to the buccal sites?', 'they improved'),
            ('What happened to the lingual sites?', 'they got deeper'),
            ('What else developed?', 'recession on two upper canines'),
            ('What cleans a six-millimetre pocket?',
             'a clinician with instruments')])},
   post=dict(kind='short', rubric='Rewrite each instruction so that it names who does '
                                  'what.',
     example='Brush better.  (Clean the lingual surfaces with the brush at the gum '
             'margin; I shall clean below it with instruments.)',
     pairs=[('Brush better.',
             'Clean the lingual surfaces at the gum margin; I shall clean below it with '
             'instruments.'),
            ('Brush for longer.',
             'Two minutes, and spend half of it on the surfaces you cannot see.'),
            ('Your cleaning is not good enough.',
             'The buccal surfaces are clean; the lingual ones are not.'),
            ('You need to try harder.',
             'Harder will not reach further. Let me show you where to aim.'),
            ('Come back in six months.',
             'Come back in six months so that we can compare these numbers.')]),
   point='An instruction a patient cannot carry out will be carried out harder, and the '
         'damage that follows is the instruction’s, not the patient’s.',
   ask='What exactly was incomplete about the March instruction?',
   icons=['gum', 'brush', 'probe', 'cross']),

 dict(title='Procedure: charting six sites round every tooth', genre='procedure',
   pre=dict(rubric='Before you read, put these steps in the order you would expect.',
     how='Thirty seconds, in pencil. Then read and correct your order.',
     items=['agree the order of the sites', 'call depth and bleeding together',
            'record the deepest site for the tooth', 'compare with the last chart']),
   fig=F.step_sequence('CHARTING SIX SITES, IN ORDER',
     ['Agree with your recorder which site you start from.',
      'Work round each tooth in the same direction, every tooth.',
      'Call the depth and the bleeding together, in one breath.',
      'Do not round a measurement to make it match the last one.',
      'Record the deepest of the six as the tooth’s figure.',
      'Note the pattern round the tooth, not only the number.',
      'Compare with the previous chart before you draw any conclusion.'],
     stop_points=[7],
     note='Seven steps. The last one is the only one that can turn a depth into a rate.'),
   fig_cap='The order of a six-point chart, with the step that gives the numbers '
           'meaning.',
   text=[
    'A full periodontal chart is six measurements for every tooth present, which is '
    'about a hundred and seventy numbers in a complete adult mouth. The procedure exists '
    'to make that possible in one appointment and to make the result comparable with the '
    'last one.',
    'Agree the starting site with whoever is recording before you begin. Most clinics '
    'start distobuccal and work round to mesiolingual. Which order is used matters less '
    'than that it is the same order for every tooth and every visit.',
    'Call the depth and the bleeding together. Five, no bleeding. Six, bleeding. A '
    'recorder who has to ask about bleeding after every site doubles the length of the '
    'appointment, and a site whose bleeding is never recorded is half a measurement.',
    'Do not round a number to make it agree with the last chart. The temptation is real '
    'and it is strongest when you expect improvement. A chart that has been adjusted '
    'towards what you hoped for cannot be compared with anything, which destroys the '
    'only purpose it had.',
    'Record the deepest of the six sites as the figure for the tooth. That is the '
    'convention, and it is the right one: the deepest site is where the disease is and '
    'where the treatment has to reach.',
    'Note the pattern as well as the number. Six millimetres on both lingual sites and '
    'three on both buccal sites is one clinical picture. Six millimetres at a single '
    'site is another, although the tooth carries the same figure in both.',
    'Only then compare with the previous chart. This is the step that converts a set of '
    'depths into a statement about change, and it is the only step that justifies the '
    'word active.',
    'Do the comparison with both charts in front of you, not from memory. Clinicians '
    'remember the teeth they treated and not the ones they did not.',
    'A full chart takes between fifteen and twenty-five minutes once the order has '
    'become a habit. Almost all of the time a fixed order saves comes from the recorder '
    'never having to ask a question.',
    'One question comes up whenever this procedure is taught. Students ask whether six '
    'sites per tooth is really necessary, or whether the deepest site alone would do.',
    'The answer is that you cannot know which site is the deepest until you have '
    'measured them all. A chart of deepest sites is a chart that was taken twice.',
    'There is a better reason as well. A tooth with six millimetres at one site and '
    'three at the rest is a local problem. A tooth with six at both lingual sites is a '
    'cleaning problem.',
    'Both teeth carry the figure six, and the treatment they need is not the same. The '
    'five numbers that were not recorded are the ones that would have told you which '
    'of the two teeth you were looking at.'],
   **{'while': dict(kind='short', rubric='Read and answer in your own words.',
     example='How many numbers in a full adult chart?  (about a hundred and seventy)',
     pairs=[('How many numbers in a full adult chart?',
             'about a hundred and seventy'),
            ('What is agreed before you begin?', 'the starting site'),
            ('What is called together?', 'the depth and the bleeding'),
            ('Why must a number not be rounded?',
             'the chart could not be compared with anything'),
            ('Which site is recorded for the tooth?', 'the deepest'),
            ('Which step justifies the word active?',
             'comparing with the previous chart')])},
   post=dict(kind='order', rubric='Put the seven steps of the procedure in order.',
     how='Then say which step your own clinic does differently, and why.',
     example='Agree the starting site.  —  1',
     bank=['the starting site', 'the direction', 'depth and bleeding', 'no rounding',
           'the deepest site', 'the pattern', 'the comparison'],
     bank_head='The seven things the steps establish',
     pics=['a pocket', 'attachment', 'periodontitis', 'calculus'],
     pairs=[('Agree the starting site with your recorder.', '1'),
            ('Work round every tooth in the same direction.', '2'),
            ('Call the depth and the bleeding together.', '3'),
            ('Do not round a measurement towards the last chart.', '4'),
            ('Record the deepest site as the tooth’s figure.', '5'),
            ('Note the pattern round the tooth.', '6'),
            ('Compare with the previous chart.', '7')]),
   point='A hundred and seventy numbers are worth nothing on their own. The seventh step '
         'is the one that makes the other six worth taking.',
   ask='Which step would you be most tempted to skip, and what would it cost?',
   icons=['probe', 'pen', 'clock', 'xray']),
],

writing=[
 dict(title='The chain, in five sentences',
   rubric='Write the chain from plaque to bone loss, one sentence for each link.',
   how='Use at least three different cause patterns. The last sentence has two halves.',
   fig=F.mini_table('FIVE LINKS, FIVE SENTENCES',
     ['Link', 'What the sentence must carry'],
     [['1', 'plaque, and what it leads to'],
      ['2', 'the name of the reversible stage, and why it is reversible'],
      ['3', 'what happens if plaque stays'],
      ['4', 'the point where attachment is lost'],
      ['5', 'what is lost with it, and the two halves']], highlight=[5]),
   fig_cap='Five sentences, and the one that has to carry both halves.',
   scaffold=['Plaque left at the gum margin …', 'That is …, and it is reversible '
             'because …', 'If the plaque is not removed, …',
             'If inflammation continues below the gum, …',
             'That is …, and it …'],
   model=['Plaque left at the gum margin leads to inflammation of the gingiva.',
          'That is gingivitis, and it is reversible because no attachment has been lost.',
          'If the plaque is not removed, it hardens into calculus, which holds further '
          'plaque against the tissues.',
          'If inflammation continues below the gum, then attachment is destroyed and '
          'alveolar bone is lost.',
          'That is periodontitis, and it can be arrested but it cannot be undone.'],
   checklist=['at least three different cause patterns appear',
              'sentence two gives the reason gingivitis is reversible',
              'sentence four names both attachment and bone',
              'sentence five has both halves'],
   point='You can write the whole chain in five sentences, which is the length it has to '
         'be to fit in a tutorial answer.',
   icons=['pen', 'book', 'gum', 'tick']),

 dict(title='A six-point entry for one tooth',
   rubric='Write the entry for one tooth: six sites, the figure, the pattern, the '
          'conclusion and the action.',
   how='Keep the findings and the conclusion visibly apart, as in Unit 6.',
   fig=F.form_annotated('WHAT A SIX-POINT ENTRY CARRIES', 'ONE TOOTH  ·  FIVE LINES',
     [('Sites', 'six depths, in the agreed order, each with its bleeding'),
      ('Figure', 'the deepest of the six, named by site'),
      ('Pattern', 'where the depth is, not only how much'),
      ('Conclusion', 'marked as a conclusion'),
      ('Action', 'what happens next, with a time')],
     callouts=[(2, 'the line that distinguishes two teeth carrying the same figure')],
     note='Five lines. The third is the one that is usually left out.'),
   fig_cap='The five lines of a six-point entry, with the one that carries the pattern.',
   scaffold=['Sites:', 'Figure:', 'Pattern:', 'Conclusion:', 'Action:'],
   model=['Sites: LL6 — distobuccal 5 no bleeding; buccal 3 no bleeding; mesiobuccal 3 '
          'no bleeding; distolingual 6 bleeding; lingual 4 bleeding; mesiolingual 4 no '
          'bleeding.',
          'Figure: 6 millimetres, distolingual.',
          'Pattern: deeper lingually than buccally; both bleeding sites are lingual.',
          'Conclusion: appears consistent with periodontitis; cleaning appears to be '
          'reaching the buccal surfaces and not the lingual.',
          'Action: show the patient the lingual surfaces with a mirror today; '
          'instrumentation of the lingual sites; re-chart in three months.'],
   checklist=['all six sites carry a depth and a bleeding state',
              'the figure names the site as well as the number',
              'the pattern line says where, not only how much',
              'the conclusion is marked as one and the action has a time'],
   point='You can write an entry in which two teeth carrying the same figure can still '
         'be told apart.',
   icons=['probe', 'form', 'pen', 'tick']),

 dict(title='Two paragraphs: for the record and for the patient',
   rubric='Write the same finding twice: four sentences for the record, four for the '
          'patient.',
   how='The patient version uses none of the eight terms and still says what cannot be '
       'undone.',
   fig=F.mini_table('THE SAME FINDING, TWO READERS',
     ['For the record', 'For the patient'],
     [['the terms', 'no terms at all'],
      ['the numbers', 'what the numbers mean for her'],
      ['what is irreversible', 'what is irreversible, said plainly'],
      ['the action, with a time', 'what she does, and what you do']]),
   fig_cap='Four jobs each, and only the third is the same sentence in both columns.',
   scaffold=['FOR THE RECORD. ', 'FOR THE PATIENT. '],
   model=['FOR THE RECORD. LL6: pockets of 5 and 6 millimetres on the lingual sites, '
          'with bleeding on probing at both.',
          'Loss of attachment and alveolar bone loss are visible on the radiograph.',
          'The condition appears consistent with periodontitis and is not reversible.',
          'Action: instrumentation of the lingual sites, oral hygiene instruction with a '
          'mirror, re-chart in three months.',
          'FOR THE PATIENT. The gum has come away from this tooth on the tongue side, '
          'and part of the bone underneath has gone.',
          'That bone will not grow back, and I would rather tell you that plainly.',
          'What we can do is stop it going further, and that works well when we both do '
          'our part.',
          'Mine is cleaning the deep places you cannot reach; yours is the surfaces you '
          'can, and I shall show you where they are.'],
   checklist=['the record version carries the numbers and the terms',
              'the patient version carries neither',
              'both say what cannot be undone',
              'the patient version divides the work between two people'],
   point='You can say the same true thing twice, in two vocabularies, without making either '
         'of them softer.',
   icons=['pen', 'person', 'form', 'tick']),
],

cases_intro='Three cases about measurements, what they mean and what patients are told '
            'about them. Each can be answered in more than one defensible way. Work in '
            'threes, give a reason for every position you take, and use the eight terms '
            'when you take it.',
cases=[
 dict(tier='A', title='Six millimetres, and no earlier chart',
  situation=['Leila charts a new patient and finds pockets of six millimetres at several '
             'sites, with bleeding. There is no previous chart, because the patient has '
             'not seen a dentist for nine years.',
             'Her supervisor asks whether the disease is active. Leila has every '
             'measurement she could take today and no way of answering the question.'],
  who=['Leila Mansour', 'Dr Yusuf Rahman'],
  facts=['Pockets of six millimetres were recorded at several sites.',
         'There is bleeding on probing.',
         'There is bone loss on the radiograph.',
         'There is no earlier chart to compare with.'],
  question='What can be said today, and what has to wait?',
  questions=['What do the three findings establish between them?',
             'What would you write, so that the next chart can be compared with it?',
             'What would you tell the patient today?'],
  words=['a pocket', 'attachment', 'periodontitis', 'gingivitis', 'alveolar bone'],
  language=[('Saying what today establishes',
             ['Pockets of six millimetres with bleeding on probing.',
              'Bone loss on the radiograph.',
              'Consistent with periodontitis; this chart is the baseline.']),
            ('Saying what has to wait',
             ['Whether it is progressing cannot be established from one chart.',
              'Re-chart in three months.'])],
  how='In threes. Eight minutes. One of you writes the entry that today’s chart becomes.',
  point='You can say exactly what a first set of measurements establishes, and name the '
        'one question that a second set will answer.',
  ask='Read out the conclusion line your group would write today.',
  note='Treating today on the strength of the depths alone is also defensible. Say what '
       'it risks and what waiting risks.',
  icons=['probe', 'xray', 'clock', 'cross'],
  guidance=('Reference practice', 'Pocket depth, bleeding on probing and radiographic '
            'bone level recorded as a baseline for later comparison',
            'General periodontology and record-keeping reference works, 2025–2026.')),

 dict(tier='C', title='The patient who wants the bone back',
  situation=['A patient has read that bone can be regrown and asks Leila to do it. She '
             'has periodontitis with moderate bone loss, and she is willing to pay.',
             'Leila knows that the honest answer is complicated, and that the simple '
             'answer the patient wants is no.'],
  who=['Leila Mansour', 'Thandiwe Mabaso'],
  facts=['The patient has asked for a specific outcome.',
         'What she read is not simply false, but it does not apply to her.',
         'She is willing to pay for treatment.',
         'The student is not the person who decides the treatment plan.'],
  question='What does Leila say today, and what does she leave to her supervisor?',
  questions=['What can a student say about treatment she does not plan?',
             'How do you say no to something a patient has read, without dismissing it?',
             'What would you write in the record about this conversation?'],
  words=['alveolar bone', 'attachment', 'periodontitis', 'a pocket', 'the periodontium'],
  language=[('Saying what is true today',
             ['The bone that has gone does not grow back on its own.',
              'There are treatments that aim at some of it, and they do not suit every '
              'case.']),
            ('Handing it on properly',
             ['That is a question for the dentist who plans your treatment.',
              'I shall write down that you asked, so that she raises it with you.'])],
  how='In threes. Eight minutes. One of you is the patient and has read a great deal.',
  point='You can be honest about what you do not decide without leaving a patient with '
        'the impression that their question was silly.',
  ask='Say the two sentences your group would use, and the record line.',
  note='Saying simply “no, it does not come back” is defended by many clinicians. Say '
       'what it costs with this patient.',
  icons=['person', 'speech', 'xray', 'pen']),

 dict(tier='C', title='The numbers that improved by exactly one',
  situation=['Daniel re-charts a patient at three months. Every site he measures is '
             'exactly one millimetre shallower than at the first visit.',
             'His supervisor points out that disease rarely improves that evenly across a '
             'whole mouth, and asks him how confident he is in the second set of '
             'numbers.'],
  who=['Dr Petra Nilsen', 'Daniel Owusu'],
  facts=['Every site improved by exactly one millimetre.',
         'The student took both sets of measurements himself.',
         'He knew what the first set said while he was taking the second.',
         'Even improvement across a whole mouth is unusual.'],
  question='What should be done with the second chart?',
  questions=['How could knowing the first set have changed the second?',
             'What is a chart that cannot be trusted worth, beside no chart at all?',
             'What would you change about how the re-chart is done?'],
  words=['a pocket', 'attachment', 'periodontitis', 'alveolar bone', 'gingivitis'],
  language=[('Saying it without accusing anybody',
             ['Even improvement across every site is unusual.',
              'I should like a second set taken without the first chart in view.']),
            ('Changing the procedure',
             ['Re-chart before looking at the previous figures.',
              'Have a colleague chart alternate quadrants.'])],
  how='In threes. Eight minutes. One of you argues that the numbers are simply good news.',
  point='You can question a set of measurements without accusing the person who took '
        'them, and change the procedure rather than the person.',
  ask='Say the change your group would make to how a re-chart is taken.',
  note='Accepting the second chart is defensible: improvement does happen. Say what '
       'would persuade you.',
  icons=['probe', 'form', 'clock', 'cross']),
],

review_intro='Five activities, one for each skill, and one that brings back Units 1 to 6. '
             'Nothing in this part repeats a task you have already done. Thirty minutes.',
review=[
 dict(skill='reading', title='The chain, with the links shuffled',
   kind='order', rubric='Put the six links of the chain into the order they occur.',
   how='Then say which link your own patients believe can be undone.',
   example='Plaque forms at the gum margin.  —  1',
   bank=['plaque', 'inflammation', 'calculus', 'below the gum', 'attachment', 'bone'],
   bank_head='The six links of the chain',
   pics=['calculus', 'gingivitis', 'attachment', 'periodontitis'],
   pairs=[('Plaque forms at the gum margin.', '1'),
          ('The gingiva becomes inflamed.', '2'),
          ('Plaque hardens into calculus, which a brush cannot remove.', '3'),
          ('Inflammation continues below the gum margin.', '4'),
          ('Attachment is destroyed.', '5'),
          ('Alveolar bone is lost.', '6')],
   fig=F.step_sequence('THE SIX LINKS, ONCE THEY ARE IN ORDER',
     ['Plaque at the gum margin.', 'The gingiva is inflamed.',
      'Plaque hardens into calculus.', 'Inflammation continues below the gum.',
      'Attachment is destroyed.', 'Alveolar bone is lost.'],
     stop_points=[5],
     note='Everything above the marked link can still be undone.'),
   fig_cap='Six links in order, with the one where the answer changes.'),

 dict(skill='listening', title='Four things from 5.1 you were not asked about',
   kind='choice', rubric='Listen to 5.1 once more and circle a, b or c.',
   how='These are not the questions you answered in part 5. One listening is enough.',
   example='Bleeding is   a) the line   b) a sign.   Answer: b',
   bank=['the sign', 'the line', 'both halves', 'alone'],
   bank_head='The four small points to listen for this time',
   pics=['gingivitis', 'attachment', 'periodontitis', 'calculus'],
   pairs=[('Dr Nilsen says bleeding is   a) the line   b) a sign, not the line   '
           'c) irrelevant', 'b'),
          ('What changes first when calculus forms is   a) the pain   b) that the '
           'patient cannot fix it alone   c) the colour', 'b'),
          ('A patient told only that it can be stopped will   a) not come back   '
           'b) try harder   c) be reassured', 'a'),
          ('A patient told only that it cannot be undone will   a) not try   '
           'b) come back   c) ask questions', 'a')],
   fig=F.mini_table('WHAT YOU ARE LISTENING FOR THIS TIME',
     ['Not this', 'But this'],
     [['the chain', 'what Dr Nilsen says bleeding is and is not'],
      ['calculus', 'what calculus changes for the patient, not the tissue'],
      ['the last sentence', 'why it has to have two halves']]),
   fig_cap='The same lecture, listened to for what it says about telling rather than '
           'about tissue.'),

 dict(skill='speaking', title='A patient who says her gums have always bled',
   rubric='Answer a patient who believes that bleeding gums are normal for her.',
   how='Student B says “they have always done that” twice and means it. Four minutes, '
       'then swap.',
   model=[('Patient', 'They have always bled. That is just how my gums are.'),
          ('Student', 'They have bled for a long time. That is not the same as normal.'),
          ('Patient', 'My mother was the same.'),
          ('Student', 'That may well be true, and it still means something is '
                      'happening.'),
          ('Student', 'A healthy gum does not bleed when it is cleaned, at any age.'),
          ('Patient', 'So what has been going on all this time?')],
   checklist=['you did not argue with her experience',
              'you separated long-standing from normal',
              'you gave her one fact she can check in her own mouth',
              'you left her asking a question rather than defending herself'],
   fig=F.conversation('“THEY HAVE ALWAYS BLED”',
     dict(name='You', role='the student', skin='3', hair='black', style='tied',
          tunic='teal'),
     dict(name='Your partner', role='the patient', skin='2', hair='grey', style='short',
          tunic='sand'),
     [('R', 'They have always bled. That is how my gums are.'),
      ('L', 'They have bled for a long time.'),
      ('L', 'That is not the same as normal.'),
      ('R', 'My mother was the same.'),
      ('L', 'A healthy gum does not bleed when it is cleaned.'),
      ('R', 'So what has been going on all this time?')],
     note='The last line is the aim. A patient who asks that question has stopped '
          'defending the belief.'),
   fig_cap='The belief that delays most periodontal treatment, and the sentence that '
           'moves it.'),

 dict(skill='writing', title='A three-month re-chart, compared',
   rubric='Write the entry for a re-chart, comparing it with the first one.',
   how='Not the entry you wrote in part 8. Here you have two sets of numbers, and the '
       'comparison is the point.',
   model=['Sites, June: LL6 — distobuccal 4 no bleeding; buccal 3 no bleeding; '
          'mesiobuccal 3 no bleeding; distolingual 6 bleeding; lingual 5 bleeding; '
          'mesiolingual 4 no bleeding.',
          'Figure: 6 millimetres, distolingual, unchanged since March.',
          'Change since March: buccal sites improved by 1 millimetre and no longer '
          'bleed; lingual sites unchanged and still bleeding.',
          'Pattern: the improvement is entirely buccal.',
          'Conclusion: the response is partial; the lingual surfaces appear not to be '
          'being cleaned, or not reachable by the patient.',
          'Action: instrumentation of the lingual sites; mirror demonstration today; '
          're-chart in three months.'],
   scaffold=['Sites, June:', 'Figure:', 'Change since March:', 'Pattern:', 'Conclusion:',
             'Action:'],
   checklist=['the change line names what improved and what did not',
              'the pattern line says where the improvement was',
              'the conclusion offers two possible reasons, marked as a conclusion',
              'the action addresses the sites that did not improve'],
   fig=F.contrast('TWO WAYS TO READ THE SAME RE-CHART',
     'AS ONE NUMBER', ['still six millimetres',
                       'no improvement',
                       'the patient is not cleaning'],
     'AS A PATTERN', ['six millimetres at one site, buccal sites improved',
                      'improvement is entirely buccal',
                      'the lingual surfaces are not being reached'],
     'One conclusion, and it blames somebody.',
     'Two possible reasons, and one of them is something you can fix.'),
   fig_cap='The same two charts, read as a figure and read as a pattern.'),

 dict(skill='reading', title='Units 1 to 7: tissue, deposit, disease, or measurement?',
   kind='sort', rubric='Write T for a tissue, D for a deposit and M for a measurement or '
                       'a disease name.',
   columns=('T', 'D', 'M'),
   how='Four of these come from earlier units. Then find the one item your group '
       'disagrees about, and say why it is hard to place.',
   example='cementum  —  T',
   bank=['a tissue', 'a deposit', 'a measurement or a disease name'],
   bank_head='The three classes everything in seven units falls into',
   pics=['the periodontium', 'calculus', 'a pocket', 'periodontitis'],
   pairs=[('cementum', 'T'), ('calculus', 'D'), ('periodontitis', 'M'),
          ('the periodontal ligament', 'T'), ('plaque', 'D'),
          ('a pocket of six millimetres', 'M')],
   fig=F.contrast('THREE KINDS OF THING IN SEVEN UNITS',
     'PART OF THE BODY', ['enamel', 'cementum', 'the gingiva',
                          'the periodontal ligament'],
     'NOT PART OF THE BODY', ['plaque', 'calculus', 'a pocket of six millimetres',
                              'periodontitis'],
     'You could section it and look at it.',
     'A deposit sits on the body; a measurement and a name describe it.'),
   fig_cap='The distinction that has run under all seven units, now including what the '
           'probe measures.'),
],
end_fig_title='FOUR TISSUES, ONE CHAIN, ONE LINE',
end_fig_steps=['The periodontium: gingiva, ligament, cementum, alveolar bone.',
               'A healthy sulcus is one to three millimetres.',
               'Plaque leads to inflammation: this is gingivitis, and it reverses.',
               'Calculus holds plaque where a brush cannot reach it.',
               'Attachment and bone are lost: this is periodontitis, and it does not.',
               'Six sites per tooth, the deepest recorded, compared with last time.'],
end_fig_note='Six lines. The fifth is the line across the chain; the sixth is the only '
             'way to know which side of it a patient is moving towards.',
end_fig_cap='The whole of Unit 7 on one page.',

p1_recap=['You have named what holds a tooth in the jaw, and said what a bleeding gum '
          'does and does not tell you.',
          'You have seen the four tissues of the periodontium, and the four questions a '
          'single measurement cannot all answer.'],
p1_ask='What is the deepest pocket you have measured, and what did you do about it?',
p1_icons=['gum', 'probe', 'xray', 'clock'],
p2_recap=['Eight terms you can now use: the periodontium, the periodontal ligament, '
          'alveolar bone, a pocket, calculus, gingivitis, periodontitis and attachment.',
          'Four groups of sentences: naming a cause, naming a consequence, putting the '
          'chain together, and saying what can and cannot be undone.',
          'One rule to hold on to: the line is the attachment, not the bleeding.'],
p2_ask='Which two of the eight could never be true of the same tooth at the same time?',
p3_recap=['You have moved from recognising these terms to building a chain of causes '
          'with them under time.',
          'All eight appear in the lecture in part 5. Say them out loud before you '
          'listen.'],
p3_ask='State the chain in five links out loud, without looking at the page.',
p3_icons=['book', 'gum', 'speech', 'tick'],
p4_recap=['Leads to names the process that follows; results in names the state that '
          'follows; if … then states the rule in general.',
          'Because takes a clause and because of takes a noun, and both appear in this '
          'unit’s explanations.'],
p4_ask='Say one sentence with leads to, one with results in and one with if … then.',
p10_recap=['You can name the four tissues that hold a tooth and say which of them does '
           'not come back.',
           'You can chart six sites round a tooth, record the right one, read the '
           'pattern, and say what a single chart cannot establish.',
           'Unit 8 turns to caries, the commonest disease of the hard tissues, and '
           'describes it with the same tools: a chain, an extent and a limit.'],
p10_ask='Explain the chain to the person next to you, with the book closed, in ninety '
        'seconds.',
)
