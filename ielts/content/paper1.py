# -*- coding: utf-8 -*-
"""Volume 1 timed Reading paper: Academic, 3 passages, 40 questions, 60 min."""

PAPER = dict(
 vol=1, level='B1', band='5.0',
 title='Reading Paper · Academic',
 intro=(
   'One hour. Forty questions. Three passages of increasing difficulty, '
   'totalling about fifteen hundred words. There is no extra time at '
   'the end for transferring answers on the computer-delivered test: '
   'whatever is recorded at sixty minutes is your score.'),
 instruct=[
  'Write 20, 40 and 60 at the top of this page before you begin. Those '
  'are the clock times by which each passage should be finished.',
  'Move on when your time is up, even in the middle of a question. '
  'Passage 3 carries as many marks as Passage 1 and is the one '
  'candidates never reach.',
  'Answer every question, including the ones you are guessing. There is '
  'no penalty for a wrong answer and a blank is a mark given away.',
  'Transfer your answers as you go rather than at the end. Neither '
  'format gives you extra time for it.',
  'A question that will not close after you have read its paragraph '
  'gets a mark in the margin and nothing else. Two minutes spent on one '
  'question costs you three somewhere else.'],

 passages=[

  dict(no=1, first=1,
       heading='Why clocks run clockwise',
       kind='Reading Passage 1',
       blurb='You should spend about 20 minutes on Questions 1–13, '
             'which are based on Reading Passage 1 below.',
       qtype='Questions 1-13',
       paras=[
        'Clocks run clockwise because the first mechanical clocks were '
        'constructed in the northern hemisphere, and because the shadow on a '
        'sundial there travels in that direction. Nothing about the '
        'mechanism required it. If clocks had been invented in Australia or '
        'South Africa, the hands on every watch today would almost certainly '
        'turn the other way.',
        'A sundial is nothing more complicated than a stick set in the '
        'ground with a scale marked around it. In the northern '
        'hemisphere the sun appears in the east, crosses the southern '
        'sky and sets in the west. The shadow of the stick therefore '
        'travels from west to north to east: precisely the direction '
        'we now describe as clockwise. South of the equator the sun '
        'crosses the northern sky instead, and the shadow travels the '
        'opposite way.',
        'When the first mechanical clocks were built in Europe in the '
        'fourteenth century, they were made for people who had used sundials '
        'all their lives. A clock whose hand moved the other way would have '
        'been read wrongly, so the makers copied the shadow. The decision '
        'was apparently never debated, as far as any surviving record shows, '
        'because at the time it did not resemble a decision at all.',
        'A few early clocks did run the other way. The cathedral clock at '
        'Münster has an anticlockwise dial, and so did several clocks in '
        'Italy, which also divided the day into twenty-four hours rather '
        'than two sets of twelve. These disappeared within about a century, '
        'not because they kept time badly but because travellers arriving '
        'from elsewhere could not read them at a glance.',
        'That last point is the interesting one. Once a convention is widely '
        'established, the cost of departing from it is borne entirely by '
        'whoever departs, however sensible their reasons may be. A clock '
        'that told the time perfectly well was useless if a visitor misread '
        'it, and the clocks that survived are therefore the ordinary ones '
        'rather than the good ones.',
        'The same pattern appears wherever a standard has settled. The '
        'arrangement of letters on a keyboard was designed for '
        'mechanical typewriters and is not the fastest arrangement '
        'possible, and better layouts have been invented and have '
        'failed. The width between railway lines in most of the world '
        'was chosen for horse-drawn wagons, and every train built since '
        'has had to fit it.',
        'None of this means standards are bad. A shared convention, even an '
        'entirely arbitrary one, spares everybody the expense of working the '
        'matter out afresh each time, and that saving ordinarily exceeds the '
        'improvement a superior system would deliver. The lesson is a '
        'narrower one: a standard that is widely used is evidence of having '
        'arrived early rather than evidence of having been well designed.'],
       items=[
        (
         'Clocks run clockwise because of how sundial shadows move '
         'north of the equator.',
         ['True', 'False', 'Not Given'], 0,
         'Paragraphs 1 and 2 give exactly this explanation.',
         {1: 'False would need a different cause; paragraphs 1 and 2 '
             'give this one.', 2: 'Not Given is wrong because the explanation is the '
             'passage\u2019s subject.'}),
        (
         'Mechanical clocks were first built in the southern half of '
         'the world.', ['True', 'False', 'Not Given'], 1,
         'Paragraph 1 says they were built in the north.',
         {0: 'True would need a southern origin; paragraph 1 places '
             'them in the north.', 2: 'Not Given is wrong because where they were built is '
             'stated.'}),
        ('Early clockmakers discussed which direction to use.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 3 says no record shows any discussion.',
         {0: 'True would need a record of discussion; paragraph 3 says '
             'none exists.', 2: 'Not Given is wrong because the absence of any record is '
             'itself stated.'}),
        ('The clock at M\u00fcnster still works today.',
         ['True', 'False', 'Not Given'], 2,
         'Its present condition is not mentioned.',
         {0: 'True would need its present condition, which the passage '
             'never gives.', 1: 'False would need it to say the clock has stopped, and it '
             'does not.'}),
        ('The writer believes keyboard layouts should be changed.',
         ['True', 'False', 'Not Given'], 1,
         'The final paragraph says standards are not bad and better '
         'layouts have failed.',
         {0: 'True would need that recommendation; the final paragraph '
             'defends standards.', 2: 'Not Given is wrong because keyboards are the closing '
             'example.'}),
        ('In the northern half of the world, a sundial shadow moves '
         'from west to north to ____________.', None, 'east',
         'Paragraph 2, which is the direction now called '
         'clockwise.'),
        ('Mechanical clocks were first built in Europe in the '
         '____________ century.', None, 'fourteenth',
         'Paragraph 3, for people used to sundials.'),
        ('Anticlockwise clocks disappeared because ____________ could '
         'not read them.', None, 'travellers',
         'Paragraph 4, rather than because they worked badly.'),
        ('The width between railway lines was chosen for '
         '____________ wagons.', None, 'horse-drawn',
         'Paragraph 6, and trains have fitted it ever since.'),
        ('Which paragraph explains why being different is costly?',
         ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
          'Paragraph 6'], 2,
         'The cost is paid by the person who differs.'),
        ('Which paragraph gives two examples from outside '
         'timekeeping?',
         ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
          'Paragraph 7'], 2,
         'Keyboards and the width between railway lines.'),
        ('Which paragraph describes clocks that divided the day into '
         'twenty-four hours?',
         ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
          'Paragraph 5'], 2,
         'Several clocks in Italy, alongside the anticlockwise '
         'dials.'),
        ('According to the final paragraph, a widely used standard is '
         'evidence of',
         ['good design', 'early arrival', 'public demand',
          'careful testing'], 1,
         'Rather than of the system being the best available.')]),

  dict(no=2, first=14,
       heading='The penny that changed the post',
       kind='Reading Passage 2',
       blurb='You should spend about 20 minutes on Questions 14–26, '
             'which are based on Reading Passage 2 below.',
       qtype='Questions 14-26',
       paras=[
        'Before 1840, sending a letter in Britain was an expensive '
        'business, and the charge was collected from the person who '
        'received it. The cost depended on the distance travelled and '
        'on the number of sheets of paper used, and it was high enough '
        'to matter. A single sheet carried from London to Edinburgh '
        'cost more than a labourer earned in half a day of work.',
        'The arrangement produced some remarkable behaviour among the '
        'people subject to it. People wrote across the page and then '
        'turned the paper and wrote across their own writing at a '
        'right angle, to keep a letter to one sheet. Others agreed a '
        'private code in advance. An agreed mark on the outside of the '
        'letter carried the whole message, and the receiver examined '
        'the outside and learned what was needed. The receiver then '
        'refused to pay, so that the information travelled the length '
        'of the country free of charge.',
        'Rowland Hill, a schoolteacher, published a pamphlet in 1837 arguing '
        'that the whole arrangement was wrong. His central objection was '
        'essentially arithmetical rather than moral. The expensive part of '
        'carrying a letter was not the distance but the handling: '
        'calculating the charge, recording it, finding the person and '
        'collecting the money. Distance cost almost nothing, because the '
        'mail coach made its journey whether it was carrying one letter or '
        'four hundred.',
        'His proposal was therefore a single low price for any letter to '
        'anywhere in the country, paid in advance by the sender, with a '
        'small printed label as proof of payment. Every part of that '
        'sentence was new. The Post Office opposed the plan throughout, '
        'predicting that revenue would collapse within a year, and '
        'Parliament passed it anyway in 1839.',
        'The outcome corresponded to the expectations of neither side in the '
        'argument. The number of letters rose from about 76 million a year '
        'to 168 million within two years, and reached 347 million by 1850. '
        'Revenue fell at first, as the Post Office had warned, and passed '
        'its previous level after about a decade. Both predictions were '
        'correct, and about the different years.',
        'The change in what people wrote was larger than the change in how '
        'many letters they sent. Ordinary families began writing to one '
        'another about nothing in particular, which had never been worth a '
        'shilling of somebody else’s money and was easily worth a penny of '
        'their own. The habit of casual written contact between people who '
        'were not conducting business began, as far as anybody can tell, in '
        'the 1840s.',
        'Hill’s argument is worth remembering for a reason that has nothing '
        'to do with letters. He won his argument by showing that the cost '
        'everybody was charging for was not the cost that the service '
        'actually incurred. That particular mistake is extremely common, it '
        'is invariably invisible to the people committing it, and '
        'identifying it is ordinarily worth considerably more than any '
        'improvement in efficiency.'],
       items=[
        ('Choose the best heading for paragraph 2.',
         ['What letters cost', 'How people avoided paying',
          'Hill’s pamphlet', 'What happened to revenue'], 1,
         'Writing across the page and private codes on the '
         'outside.'),
        ('Choose the best heading for paragraph 3.',
         ['The real cost of a letter', 'The Post Office objects',
          'Letters from ordinary families', 'A single low price'], 0,
         'Handling rather than distance.'),
        ('Choose the best heading for paragraph 6.',
         ['Numbers rise', 'What people began to write about',
          'A lesson beyond letters', 'The label as proof'], 1,
         'Families writing about nothing in particular.'),
        ('Before 1840, the cost of a letter depended on distance and '
         'the number of ____________.', None, 'sheets',
         'Paragraph 1, and the receiver paid.'),
        ('Rowland Hill published his pamphlet in ____________.',
         None, '1837', 'Paragraph 3, two years before the law '
         'passed.'),
        ('Hill argued that the expensive part of carrying a letter '
         'was the ____________.', None, 'handling',
         'Paragraph 3, rather than the distance.'),
        ('Letters rose from about 76 million a year to '
         '____________ million within two years.', None, '168',
         'Paragraph 5, reaching 347 million by 1850.'),
        ('Revenue passed its previous level after about a '
         '____________.', None, 'decade',
         'Paragraph 5, having fallen at first.'),
        ('The Post Office predicted that revenue would',
         ['rise sharply', 'collapse', 'stay the same',
          'become easier to collect'], 1,
         'Paragraph 4, which is why it opposed the change.'),
        ('People wrote across their own writing in order to',
         ['save ink', 'keep to one sheet', 'confuse readers',
          'write faster'], 1,
         'Paragraph 2, because cost depended on sheets.'),
        ('A private code on the outside of a letter allowed the '
         'receiver to',
         ['pay less', 'refuse to pay', 'send a reply free',
          'claim a refund'], 1,
         'Paragraph 2, after examining the mark.'),
        ('The writer says Hill won his argument by showing that',
         ['postage was too expensive',
          'the charge was based on the wrong cost',
          'the Post Office was badly run',
          'more people wanted to write'], 1,
         'The final paragraph, which calls the mistake very '
         'common.'),
        ('According to the writer, finding such a mistake is usually '
         'worth more than',
         ['any new technology', 'any improvement in efficiency',
          'a change of management', 'a lower price'], 1,
         'The final sentence of the passage.')]),

  dict(no=3, first=27,
       heading='Why witnesses are confident and wrong',
       kind='Reading Passage 3',
       blurb='You should spend about 20 minutes on Questions 27–40, '
             'which are based on Reading Passage 3 below.',
       qtype='Questions 27-40',
       paras=[
        'A witness who saw an event clearly, who remembers it vividly and '
        'who has no conceivable reason to lie is the most persuasive single '
        'piece of evidence that a court can hear. Juries believe such '
        'witnesses, and they are right to find them credible, because '
        'nothing about the witness suggests otherwise. The difficulty is '
        'that confidence, vividness and honesty are all entirely compatible '
        'with being completely mistaken, and the research demonstrating this '
        'is now approximately fifty years old.',
        'Memory does not work in the way that the legal system has '
        'traditionally assumed it does. It is not a recording that is stored '
        'and later played back. A memory is reconstructed afresh each time '
        'it is recalled, from fragments and from assumptions about what must '
        'have occurred, and the reconstructed version is then stored again '
        'in place of the original. Anything added during that process of '
        'reassembly is stored as part of the memory itself, and afterwards '
        'it feels exactly like the parts that were there at the beginning.',
        'This is why the questions asked of a witness matter so much. '
        'In a well-known experiment, people watched a film of a car '
        'accident and were asked how fast the cars were going when they '
        '"hit" each other, or when they "smashed into" each other. The '
        'second group gave higher speeds, and a week later they were '
        'more likely to report having seen broken glass. There was no '
        'broken glass in the film.',
        'The effect is not limited to wording. A witness who is told that '
        'another witness identified a particular person becomes more '
        'confident in their own identification of that person, without any '
        'new information about the event itself. Confidence and accuracy, '
        'which ought in principle to rise together, separate immediately '
        'once a witness receives information of any kind about their '
        'performance.',
        'That finding has a practical consequence which several police '
        'forces have now adopted as standard procedure. An identification '
        'parade should be conducted by an officer who does not know which '
        'person is the suspect, because an officer who knows cannot help '
        'giving small, unintended signals. The witness’s confidence should '
        'be recorded in their own words immediately, before anybody says '
        'anything at all about whether they were right.',
        'Where those procedures are followed, witness confidence is '
        'actually quite a good guide to accuracy. The relationship '
        'between the two is strong at the moment of first '
        'identification and weakens steadily afterwards. That is '
        'almost exactly the opposite of how courts have traditionally '
        'treated it. The confidence a jury hears is the confidence of '
        'a witness who has told the story many times.',
        'None of this means witnesses should be disbelieved. It means that a '
        'witness’s confidence in court is a measurement of something other '
        'than what they originally observed, and that the genuinely useful '
        'figure was available at the outset and was ordinarily never '
        'recorded. Several countries now require that first statement of '
        'confidence to be written down at the time, which costs nothing '
        'whatever and changes what a jury is permitted to be told about it '
        'later.'],
       items=[
        (
         'The writer believes juries are wrong to find confident '
         'witnesses credible.', ['Yes', 'No', 'Not Given'], 1,
         'Paragraph 1 says they are right to find them credible.',
         {0: 'Yes would need criticism; paragraph 1 says they are '
             'right to.', 2: 'Not Given is wrong because the writer judges the jury\u2019s '
             'instinct.'}),
        ('The writer believes memory works like a recording.',
         ['Yes', 'No', 'Not Given'], 1,
         'Paragraph 2 says explicitly that it does not.',
         {0: 'Yes would need the recording model; paragraph 2 rejects '
             'it explicitly.', 2: 'Not Given is wrong because the model is named and '
             'refused.'}),
        ('The writer believes witnesses often lie deliberately.',
         ['Yes', 'No', 'Not Given'], 1,
         'Paragraph 1 describes witnesses with no reason to lie.',
         {0: 'Yes would need deliberate lying; paragraph 1 describes '
             'honest witnesses.', 2: 'Not Given is wrong because the witnesses\u2019 motives are '
             'described.'}),
        (
         'The writer believes identification parades should be '
         'abolished.', ['Yes', 'No', 'Not Given'], 1,
         'Paragraph 5 describes how they should be conducted instead.',
         {0: 'Yes would need abolition; paragraph 5 says how to run '
             'them better.', 2: 'Not Given is wrong because the writer prescribes a '
             'procedure.'}),
        (
         'The writer believes most police forces now record initial '
         'confidence.', ['Yes', 'No', 'Not Given'], 2,
         'Several countries require it; how many forces do so is not '
         'stated.',
         {0: 'Yes would need a figure for forces; only several '
             'countries are named.', 1: 'No would need him to say most do not, and he gives no '
             'such count.'}),
        ('Which paragraph explains how a memory is rebuilt each time '
         'it is recalled?',
         ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
          'Paragraph 4'], 1,
         'From fragments and expectations, then stored again.'),
        ('Which paragraph describes an experiment with different '
         'verbs?',
         ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
          'Paragraph 5'], 1,
         '"Hit" against "smashed into", and the broken glass a week '
         'later.'),
        ('Which paragraph explains who should conduct an '
         'identification parade?',
         ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
          'Paragraph 6'], 2,
         'An officer who does not know which person is the '
         'suspect.'),
        ('Which paragraph states when confidence is most closely '
         'related to accuracy?',
         ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
          'Paragraph 7'], 2,
         'At the moment of first identification.'),
        ('Participants who heard the word "smashed" were more likely '
         'to report seeing broken ____________.', None, 'glass',
         'Paragraph 3, although there was none in the film.'),
        ('A witness told that another witness made the same '
         'identification becomes more ____________.', None,
         'confident', 'Paragraph 4, without any new information.'),
        ('Confidence should be recorded in the witness’s own '
         '____________ immediately.', None, 'words',
         'Paragraph 5, before any feedback is given.'),
        ('The relationship between confidence and accuracy '
         '____________ steadily after the first identification.',
         None, 'weakens',
         'Paragraph 6, which is the reverse of courtroom practice.'),
        ('Recording the first statement of confidence costs '
         '____________.', None, 'nothing',
         'The final paragraph, and changes what a jury can be '
         'told.')]),
 ],
)
