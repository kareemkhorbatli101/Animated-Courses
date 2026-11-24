# -*- coding: utf-8 -*-
import figs

U = dict(
num=4, title='Show, Don’t Describe',
gram='verb patterns: ask, tell, want somebody to do',
ai='examples beat adjectives: showing instead of describing',
strap='CEFR B1 · Grammar: verb patterns: ask, tell, want somebody to do · AI: examples beat adjectives',
cando=['use ask, tell and want with an object and an infinitive',
       'replace an adjective in a brief with an example of what I mean',
       'choose examples that show the edge of what I want, not only the middle',
       'say how many examples are enough, and why three is usually better than one',
       'explain what an example cannot communicate'],
hero=('THREE LETTERS PINNED TO THE WALL',
      ['One we would send. One we would not.',
       'One that is nearly right, which is the useful one.'],
      [(900, 'purple', 'long'), (1680, 'grey', 'short'), (2420, 'teal', 'long')]),
hero_cap='Arclight stopped describing the house style and started showing it.',

warm=['How would you describe "professional" to somebody who had never seen your work?',
      'When you train a new colleague, do you explain or do you show them?',
      'What is the difference between telling somebody to do something and asking them to?'],
read=[
 'The house style ran to one page and it was a good page. It said what register to use, how '
 'to open, where the reference number went and how to close. People read it, agreed with it '
 'and then produced letters that still did not look like each other.',
 'The problem was the word professional, which appeared twice. Everybody who read it nodded, '
 'and everybody meant something slightly different by it. Fatima meant warm and brief. '
 'Thomas meant precise and slightly formal. One of the new people meant the register of a '
 'bank, which is where the whole problem had started eighteen months earlier.',
 'Thomas suggested pinning three real letters to the wall instead. One that Arclight had '
 'sent and was pleased with. One that it had sent and should not have. And a third that was '
 'nearly right, with a note saying which two sentences were the problem.',
 'The third one turned out to be the valuable one, and nobody had expected that. The good '
 'letter showed the middle of the target and the bad letter showed something far outside it, '
 'but neither of them showed where the edge was. The nearly-right letter was the edge, with '
 'two sentences marked.',
 'The same thing holds when the work is handed to a system rather than to a new colleague. '
 'An adjective is a description of a feeling you have about a text. An example is the text. '
 'Three examples, one good, one bad and one marginal, communicate more in ten seconds than a '
 'page of careful adjectives does in five minutes, and they cannot be misread in the way '
 'that professional can.'],
c_a=[('What was wrong with the one-page house style?', 'it used the word professional, which everybody understood differently'),
     ('What did Fatima mean by professional?', 'warm and brief'),
     ('What did Thomas suggest?', 'pinning three real letters to the wall'),
     ('Which of the three turned out to be most valuable?', 'the nearly-right one'),
     ('Why?', 'because it showed where the edge was, which neither the good nor the bad letter did')],
c_b=[('The house style page was badly written.', 'F'),
     ('Everybody agreed on what professional meant.', 'F'),
     ('The three letters were invented for the purpose.', 'F'),
     ('The nearly-right letter had two sentences marked.', 'T'),
     ('An adjective describes a feeling about a text.', 'T'),
     ('The good letter showed where the edge of the target was.', 'F')],
c_c=[('The house style ran to one ____________.', 'page'),
     ('Everybody meant something slightly ____________ by it.', 'different'),
     ('One that it had sent and ____________ not have.', 'should'),
     ('The third one turned out to be the ____________ one.', 'valuable'),
     ('An example is the ____________.', 'text'),
     ('They cannot be ____________ in the way that professional can.', 'misread')],
c_d=[('The useful example was the ( marginal / good ) one.', ['marginal', 'good'], 0),
     ('The word professional failed because it', ['was too formal', 'meant different things to different readers', 'was too short', 'was unclear English'], 1),
     ('Three examples are better than one because they', ['take longer', 'show the edge as well as the middle', 'are more formal', 'are easier to write'], 1),
     ('An adjective in a brief is described as', ['precise', 'a description of a feeling', 'illegal', 'efficient'], 1),
     ('The bad letter showed', ['the edge', 'something far outside the target', 'the middle', 'nothing'], 1)],
c_e=('Which pattern? Put each sentence in the right column.',
     [('She asked him to rewrite it.', 'ask somebody to'),
      ('He told her to use template 4.', 'tell somebody to'),
      ('I want you to see this one.', 'want somebody to'),
      ('They asked us to shorten it.', 'ask somebody to'),
      ('She told them to flag the gaps.', 'tell somebody to'),
      ('We want them to follow the examples.', 'want somebody to')],
     ['ask somebody to', 'tell somebody to', 'want somebody to']),

v_fig_title='SHOWING, NOT TELLING',
v_fig=[('doc', 'an example'), ('scale', 'a sample'), ('bulb', 'a prototype'),
       ('chart', 'a pattern'), ('note', 'a descriptor'), ('bank', 'an instance')],
v_fig_cap='Six words for the thing you hold up instead of the adjective you reach for.',
vocab=[
 ('example', 'one actual case shown to make a general point clear'),
 ('sample', 'a small part taken to show what the whole is like'),
 ('specimen', 'a single item kept as a representative of its kind'),
 ('illustration', 'something shown to make an idea easier to grasp'),
 ('demonstrate', 'to show how something works by doing it'),
 ('exemplar', 'the best or clearest example of something'),
 ('prototype', 'an early working version made to be tried out'),
 ('mock-up', 'a model built to show what something will look like'),
 ('worked example', 'a case shown with each step completed'),
 ('calibrate', 'to adjust something until it matches a known standard'),
 ('convey', 'to get a meaning across to somebody'),
 ('approximate', 'close to, but not exactly'),
 ('resemble', 'to look or be similar to'),
 ('pattern', 'a regular form that repeats and can be recognised'),
 ('instance', 'one particular occurrence of something'),
 ('depict', 'to show or represent in a picture or words'),
 ('gauge', 'to judge or measure the size or extent of something'),
 ('adjective', 'a word describing a quality, such as clear or professional'),
 ('descriptor', 'a word or short phrase used to classify something'),
 ('imitate', 'to copy the manner or form of something else')],
v_a=[('A case shown with each step completed is a ____________.', 'worked example'),
     ('An early working version made to be tried is a ____________.', 'prototype'),
     ('To adjust something until it matches a known standard is to ____________ it.', 'calibrate'),
     ('A small part taken to show what the whole is like is a ____________.', 'sample'),
     ('The clearest example of something is an ____________.', 'exemplar'),
     ('A regular form that repeats and can be recognised is a ____________.', 'pattern'),
     ('To get a meaning across to somebody is to ____________ it.', 'convey'),
     ('A model built to show what something will look like is a ____________.', 'mock-up')],
v_b=[('To demonstrate something is to show', 'how it works by doing it.'),
     ('An instance is one particular', 'occurrence of something.'),
     ('To gauge something is to judge', 'its size or extent.'),
     ('A descriptor is a word or phrase used', 'to classify something.'),
     ('To imitate is to copy the manner', 'or form of something else.')],

g_title='Grammar: verb patterns — ask, tell, want somebody to do',
g_rule=['Ask, tell and want take an object and then to + verb: she asked him to rewrite it.',
        'The object is who does the action: I want you to see this one.',
        'The negative goes before to: she asked him not to send it.',
        'Say is different: it takes no object before that. She said that it was ready.'],
g_fig=('LOOSE',
       ['I want this done properly.',
        'Tell them it needs rewriting.',
        'They should not send it yet.',
        'Ask about shortening it.'],
       'PRECISE',
       ['I want Thomas to compare it with letter 2.',
        'Tell Fatima to rewrite the first paragraph.',
        'Ask them not to send it before Friday.',
        'Ask Priya to say which two sentences failed.'],
       'no object: who does it is missing',
       'object named, action named'),
g_fig_cap='The right-hand column always names the person who has to act.',
g_a=[('She asked him ____________ rewrite the first paragraph. (to)', 'to'),
     ('I want you ____________ compare it with letter two. (to)', 'to'),
     ('He told Fatima ____________ use template four. (to)', 'to'),
     ('They asked us ____________ to send it before Friday. (not)', 'not'),
     ('She wants Thomas ____________ mark the two sentences. (to)', 'to'),
     ('He asked ____________ to shorten the second page. (her)', 'her'),
     ('We told ____________ to follow the three examples. (them)', 'them'),
     ('She asked the client ____________ say which part failed. (to)', 'to'),
     ('I want ____________ to see this one first. (everybody)', 'everybody')],
g_b=[('She asked him ( rewrite / to rewrite ) the first paragraph.', ['rewrite', 'to rewrite'], 1),
     ('I want you ____ compare it with letter two.', ['compare', 'comparing', 'to compare', 'compared'], 2),
     ('They asked us ____ send it before Friday.', ['not', 'not to', 'to not', 'no'], 1),
     ('He ____ Fatima to use template four.', ['said', 'told', 'spoke', 'asked for'], 1),
     ('She ____ that it was ready.', ['told', 'asked', 'said', 'wanted'], 2),
     ('We told ____ to follow the examples.', ['to them', 'them', 'for them', 'that them'], 1)],

d1=dict(title='What does professional mean?',
        fig=(['It says professional.', 'What does that mean to you?'],
             ['Warm and brief.', 'I read it as formal. Same page.']),
        cap='Fatima and Thomas, over the house style.',
        lines=[('Thomas', 'The page says professional. What do you picture when you read that?'),
               ('Fatima', 'Warm and brief. Short sentences, friendly, no stiffness.'),
               ('Thomas', 'I picture precise and slightly formal. Longer sentences, no contractions.'),
               ('Fatima', 'Those are two different letters.'),
               ('Thomas', 'They are two different companies, from the outside.'),
               ('Fatima', 'Then the page does not work and we both thought it did.'),
               ('Thomas', 'We both agreed with it. Agreeing is not the same as matching.'),
               ('Fatima', 'So we write a longer page with more adjectives on it.'),
               ('Thomas', 'Or we pin three letters to the wall and stop writing adjectives.'),
               ('Fatima', 'A new person will still have to interpret the three letters.'),
               ('Thomas', 'They will. But they will be interpreting letters, not interpreting me.'),
               ('Fatima', 'I am not convinced that is as different as you think it is.')],
        unresolved=True,
        a=[('What does Fatima picture when she reads "professional"?', 'warm and brief, with short friendly sentences'),
           ('What does Thomas picture?', 'precise and slightly formal, with longer sentences and no contractions'),
           ('What does Thomas say about agreeing?', 'that agreeing with a page is not the same as matching it'),
           ('What does he propose instead?', 'pinning three letters to the wall and writing no more adjectives'),
           ('Does Fatima accept it?', 'no; she says interpreting letters is not as different from interpreting a person as he thinks')],
        b=[('What do you ____________ when you read that?', 'picture'),
           ('They are two different ____________, from the outside.', 'companies'),
           ('Agreeing is not the same as ____________.', 'matching'),
           ('Stop writing ____________.', 'adjectives')]),
d2=dict(title='The third letter',
        fig=(['Why keep the bad one?', 'It is the nearly one that works.'],
             ['Two sentences marked.', 'That is the edge, written down.']),
        cap='Dalia and Thomas, pinning things up.',
        lines=[('Dalia', 'A good one and a bad one. Why do you want a third?'),
               ('Thomas', 'Because the good one and the bad one are both easy.'),
               ('Dalia', 'Easy how?'),
               ('Thomas', 'Nobody was ever going to write the bad one. It is miles outside.'),
               ('Dalia', 'And the good one?'),
               ('Thomas', 'The good one is the middle. It tells you nothing about where it stops being fine.'),
               ('Dalia', 'So the third one is the edge.'),
               ('Thomas', 'The third one is a letter we nearly sent, with two sentences circled.'),
               ('Dalia', 'That is the one where somebody will argue with you.'),
               ('Thomas', 'Good. That argument is the training. The other two produce nodding.'),
               ('Dalia', 'Nodding is what the page produced for eighteen months.'),
               ('Thomas', 'Exactly. I would rather have an argument on a Tuesday than nodding for a year.')],
        a=[('How many letters does Thomas want, and why?', 'three; the good and bad ones are both easy'),
           ('What does the good letter fail to show?', 'where the text stops being acceptable'),
           ('What is the third letter?', 'one Arclight nearly sent, with two sentences circled'),
           ('What does Dalia predict about the third one?', 'that somebody will argue about it'),
           ('How does Thomas respond?', 'that the argument is the training, and the other two produce only nodding')],
        b=[('Nobody was ever going to write the ____________ one.', 'bad'),
           ('The good one is the ____________.', 'middle'),
           ('A letter we nearly sent, with two sentences ____________.', 'circled'),
           ('That argument is the ____________.', 'training')]),

speak=[('Replace the adjective',
        ['Student A: describe a standard at your work using three adjectives.',
         'Student B: ask for an example of each. Refuse any answer that is another adjective.',
         'Decide which adjective was hardest to replace, and why.']),
       ('Spoken specification: brief by example',
        ['Choose work where quality is hard to describe.',
         'Brief your partner aloud using one good example, one bad and one marginal.',
         'They state the rule they think you mean. Correct it once, then stop.']),
       ('Find the edge',
        ['In pairs, take something you both do and name a clearly good version.',
         'Then change it, one detail at a time, until you disagree about whether it is acceptable.',
         'That disagreement is the edge. Write it down in one sentence.'])],

ext_title='Three examples beat a page of adjectives, and one example beats none',
ext_fig=figs.datatable('WHAT EACH EXAMPLE TELLS YOU',
                       ['Example', 'Shows', 'Does not show'],
                       [['the good letter', 'the middle of the target', 'where it ends'],
                        ['the bad letter', 'what is clearly outside', 'anything near the line'],
                        ['the nearly-right one', 'the edge, with reasons', 'the middle'],
                        ['all three together', 'middle and edge', 'the exception nobody has met'],
                        ['one adjective', 'what you feel about it', 'almost everything']]),
ext_fig_cap='The fourth row is why three is the usual number, and the fifth is why none of them is optional.',
ext=[
 'When people are asked to describe a standard they reach for adjectives, because adjectives '
 'are how we talk about quality in ordinary speech. Professional, clear, friendly, concise. '
 'Each of these words is doing a great deal of work and none of it is work anybody can '
 'check. Two people who agree about the word will produce different things and both believe '
 'they followed the instruction.',
 'An example does something an adjective cannot: it fixes the meaning in a form that cannot '
 'drift. Here is a letter we were pleased with. This is what we mean. Nobody has to decode '
 'anything, and if somebody disagrees, they disagree about a concrete object rather than '
 'about a feeling, which is an argument that can actually be resolved.',
 'One example is a great deal better than none and it has a known weakness: it shows the '
 'middle of the target and nothing about its edges. People given one good example tend to '
 'produce close copies of it, including copying things that were accidental, and they have '
 'nothing to go on the first time a case arrives that the example did not cover.',
 'This is why the usual advice is three, and why the third one matters most. A good example '
 'and a bad example bracket the target very widely, which is easy and not very informative. '
 'An example that is nearly right, with the specific failures marked, says where the line '
 'is, and the line is the only part anybody actually needs to learn.',
 'What examples cannot do is explain why. They show the what, reliably and without '
 'ambiguity, and they leave the reason entirely implicit, which means that a case the '
 'examples did not anticipate will be handled by guesswork. So the practice that works is '
 'both: three examples to fix the meaning, and one sentence of reason to cover what the '
 'examples missed.'],
dp1=('Examples in instruction',
     'Instructional research generally finds that worked examples improve performance on '
     'similar tasks more than descriptive rules alone, with the advantage narrowing as '
     'learners gain experience.',
     'Source: general instructional-design research, 2026. Effects vary with task type.'),
e_a=[('Why do people reach for adjectives?', 'because adjectives are how we talk about quality in ordinary speech'),
     ('What does an example do that an adjective cannot?', 'it fixes the meaning in a form that cannot drift'),
     ('What is the known weakness of a single example?', 'it shows the middle of the target and nothing about the edges'),
     ('Why does the third example matter most?', 'because it shows where the line is, and the line is what has to be learnt'),
     ('What can examples not do?', 'explain why, which leaves unanticipated cases to guesswork')],
e_b=[('Two people agreeing about an adjective will produce the same thing.', 'F'),
     ('An example can be disagreed about concretely.', 'T'),
     ('One good example tends to produce close copies.', 'T'),
     ('Good and bad examples bracket the target narrowly.', 'F'),
     ('Examples make the reason explicit.', 'F'),
     ('The recommended practice is examples plus a sentence of reason.', 'T')],

w_model=(
 'Purpose: get first reminders that look as though 1 company wrote them. Scope: the 338 '
 'ordinary overdue accounts; the 3 disputed accounts are excluded. Inputs: the 3 pinned '
 'letters dated 9 June, labelled GOOD, OUTSIDE and NEARLY, and house style version 2. '
 'Criteria: match letter GOOD in register and length; do not do what the 2 marked sentences '
 'in NEARLY do; the reason is that a client must be able to read it in under 30 seconds. '
 'Done: 338 drafts and 1 note of any case the 3 examples did not cover. Fallback: if a case '
 'is not covered by any of the 3 examples, write the draft and flag it rather than '
 'inventing a fourth standard.'),
w_fig=figs.split('ADJECTIVE OR EXAMPLE',
                 'What the page said',
                 ['Keep it professional.', 'Be clear and concise.',
                  'Sound friendly but firm.', 'Use an appropriate register.'],
                 'What the wall says',
                 ['Letter GOOD, 9 June, 118 words.',
                  'Letter OUTSIDE, with 6 lines struck through.',
                  'Letter NEARLY, 2 sentences circled.',
                  'Reason: readable in under 30 seconds.']),
w_fig_cap='The right-hand column took one afternoon to assemble and replaced eighteen months of nodding.',
w_task='Write a brief that uses examples instead of adjectives.',
w_steps=['Choose work where you would normally write "professional" or "clear".',
         'Find a real good example. Not an invented one.',
         'Find a real bad one, and a real nearly-right one.',
         'Mark on the nearly-right one exactly what makes it fail.',
         'Add one sentence saying why, to cover the cases your examples missed.'],
w_bank=['Match example … in … and …', 'Do not do what the marked sentences in … do.',
        'The reason is that …', 'If a case is not covered by …, then …',
        'Return … and a note of …'],
w_check=['Have you removed every adjective that could mean two things?',
         'Are your examples real, rather than written for the purpose?',
         'Does the nearly-right example have its failures marked specifically?',
         'Is there one sentence of reason for the cases the examples do not cover?'],

t_title='Examples beat adjectives: showing instead of describing',
t_fig=figs.handover('THREE EXAMPLES AND A REASON',
                    ['Match the GOOD letter', 'Avoid what NEARLY does', 'Flag anything none of them covers'],
                    'Fatima reads the flagged ones and adds a fourth example',
                    'The flagged pile is how the examples grow.'),
t_fig_cap='The fourth box is how a set of examples stays current without anybody writing a page.',
t_body=[
 'Take the adjectives out of your brief and count what is left. In most briefs the '
 'adjectives are carrying the whole of the quality standard, which means the standard is '
 'being communicated by a word that each reader resolves privately. Professional, clear, '
 'appropriate and sensible are the four commonest, and all four are feelings rather than '
 'tests.',
 'Replace them with three real examples. One you were pleased with, one you would not send, '
 'and one that was nearly right with the failing sentences marked. The third is the '
 'expensive one to find, because it means going back through work you nearly sent, and it '
 'is the one that does most of the teaching.',
 'Then add a single sentence saying why, because examples are silent about reasons and a '
 'case will arrive that none of them covers. A client must be able to read it in under '
 'thirty seconds is a reason. It tells somebody what to do in a situation your examples '
 'never anticipated, which is the situation that always turns up eventually.'],
t_say=[('Show the target: ', 'Match letter GOOD of 9 June in register and length.'),
       ('Show the edge: ', 'Do not do what the two circled sentences in NEARLY do.'),
       ('Give the reason: ', 'The reason is that a client must read it in under thirty seconds.')],
t_bound=('Examples do not say why they are good, so they are copied in full, including the '
         'parts that were accidental. A date format, a greeting, an order of paragraphs that '
         'happened to be in the sample will be reproduced as though it were the standard, '
         'and nothing will tell you which parts were deliberate.'),
t_a=[('Match letter GOOD of 9 June in register and ____________.', 'length'),
     ('Do not do what the two ____________ sentences in NEARLY do.', 'circled'),
     ('The reason is that a client must read it in under thirty ____________.', 'seconds'),
     ('The four commonest adjectives are feelings rather than ____________.', 'tests'),
     ('The third example is the ____________ one to find.', 'expensive'),
     ('Examples are ____________ about reasons.', 'silent')],
t_b_rubric='Replace each adjective with what you would actually show.',
t_b=[('Keep it professional.', 'show the GOOD letter and say match its register and length'),
     ('Make it clear.', 'show a nearly-right version with the unclear sentences circled'),
     ('Use an appropriate tone.', 'show two letters, one acceptable and one not, and name the difference'),
     ('Be concise.', 'give the word count of the GOOD letter and make it the limit')],

case=dict(
 title='Decision Clinic · Four examples, or one rule?',
 brief=[
  'The three pinned letters have been running for four months and drafts now match each '
  'other. In month three, a new kind of case arrived: a client who had paid in part, which '
  'none of the three examples covered.',
  'Fourteen such drafts were flagged rather than sent, as the brief required. Fatima handled '
  'all fourteen by hand, which took about three hours in total, and then had to decide what '
  'to do about the next ones.',
  'Thomas wants a fourth example, pinned beside the others. Marta wants a written rule '
  'instead, because she says a partial payment has legal consequences that an example cannot '
  'convey and should not be left to be inferred.'],
 exhibit=figs.datatable('FOUR MONTHS OF DRAFTS',
                        ['Month', 'Drafts', 'Flagged', 'Reason'],
                        [['June', '322', '4', 'odd addresses'],
                         ['July', '341', '2', 'odd addresses'],
                         ['August', '338', '14', 'partial payment'],
                         ['September', '345', '19', 'partial payment'],
                         ['total', '1,346', '39', '—']]),
 exhibit_cap='Thirty-nine flags in four months, thirty-three of them one new kind of case.',
 exhibit_note='The flagging worked exactly as the brief specified. Nothing wrong was sent; '
              'the cost was Fatima’s time, which nobody had budgeted.',
 voices=[('Thomas Reed', 'service delivery',
          'Pin a fourth letter. It took eighteen months of adjectives to learn this lesson '
          'and we are about to unlearn it in a meeting.'),
         ('Marta Olsen', 'risk and liability',
          'A partial payment changes what we may and may not say about the balance. That is '
          'a rule with a reason, and an example conveys the words without the reason. '
          'Somebody will copy the words into a case where they are wrong.'),
         ('Fatima Zahra', 'client manager',
          'I have written fourteen of these by hand. They are not all the same letter. The '
          'difference depends on whether the client disputes the remainder, which is not '
          'visible in any example I could pin up.')],
 steps=[('Find it', 'How many drafts were flagged, and how many for the same reason?'),
        ('Compare it', 'What does an example convey, and what does a written rule convey?'),
        ('Infer it', 'Why does Fatima say the fourteen were not all the same letter?'),
        ('Weigh it', 'The cost of adjectives returning against the cost of a wrong inference.'),
        ('Decide', 'What goes on the wall, and what goes in writing?')],
 analysis=[('Find it. How many of the thirty-nine flags were partial payments?', 'thirty-three'),
           ('Compare it. What does an example fail to convey here?', 'the reason, which is that a partial payment changes what may be said about the balance'),
           ('Infer it. Why are the fourteen not one letter?', 'because the wording depends on whether the client disputes the remainder'),
           ('Weigh it. What is the risk in Thomas’s position?', 'that the words of an example get copied into a case where they are legally wrong'),
           ('Decide. Is there a form that carries both?', 'two examples covering the two cases, each with its one-sentence reason written beside it')],
 decision='Write what is added to the wall and what is added in writing.',
 decision_steps=['Say what goes on the wall, and how many items.',
                 'Say what is written beside each one, in one sentence.',
                 'Say which cases still get flagged rather than drafted.',
                 'Say who adds the next example, and on what evidence.'],
 bank=['We will add … to the wall.', 'Beside each one, the reason: …',
       'Any case where … is still flagged.', '… adds a new example when …',
       'The written rule covers … and only …'],
 outcome='Two examples went up, not one: a partial payment with the balance agreed, and a '
         'partial payment with the balance disputed, each with one sentence of reason '
         'written beside it. Flags fell from nineteen a month to three. In November a flag '
         'arrived for a case where a client had overpaid, which nobody had imagined, and '
         'Fatima wrote the fifth example that afternoon. Marta said afterwards that she had '
         'been arguing against examples when her objection was really to examples without '
         'reasons.',
 outcome_q=[('Why were two examples needed rather than one?', 'because the wording depends on whether the balance is disputed, which is a different case'),
            ('What was Marta actually objecting to?', 'not examples themselves, but examples pinned up without the reason written beside them')],
 tags=[]),

lab=dict(
 title='Brief Lab · Make the drafts match',
 task=['This is the brief Dalia wrote when the house style page was still the only standard, '
       'two weeks before anybody pinned anything to a wall.',
       'She has a very clear picture in her head of what she wants. The picture is made '
       'entirely of adjectives, and there are four of them in six lines.'],
 draft=['Can you get the drafts looking consistent with each other.',
        'They should be professional but not stiff.',
        'Keep them clear and reasonably concise.',
        'Make sure they sound like us.',
        'Fix anything that does not fit.',
        'Carry on until they are all right.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, four adjectives, no examples and nothing anybody could check.',
 asked=['Drafts matching one named example',
        'The failing sentences named specifically',
        'Unanticipated cases flagged'],
 back=['3 drafts matching 3 different ideas',
       'Sentences changed without a reason given',
       'New cases resolved silently'],
 gap='Professional, clear, concise and "sound like us" are four feelings, and the only person '
     'who could resolve any of them was the person who wrote the brief.',
 back_cap='Three people, one brief, three entirely reasonable and incompatible results.',
 back_note='All three drafts followed the brief. Dalia rejected two of them and could not '
           'say, when asked, which rule they had broken.',
 diagnosis=[('[1] "consistent with each other" — consistent with which one?', 'ambiguous referent'),
            ('[2] "professional but not stiff" — judged how?', 'unstated criterion'),
            ('[3] "clear and reasonably concise" — concise to what length?', 'unstated criterion'),
            ('[4] "sound like us" — like which of us?', 'ambiguous referent'),
            ('[5] "fix anything that does not fit" — fixed until when?', 'undefined done'),
            ('[6] "until they are all right" — right by whose judgement?', 'undefined done')],
 rewrite='Rewrite the brief so that it contains no adjective of quality, three named examples '
         'and one sentence of reason.',
 scaffold=['Why the drafts have to match, and who notices when they do not',
           'Which drafts are covered, and which are excluded',
           'The three pinned letters by label and date, and the house style version',
           'What to match, what to avoid, and the reason behind both',
           'How many drafts come back, with what list beside them',
           'What to do with a case none of the three examples covers'],
 bank=['Produce drafts that … so that …', 'Cover the … accounts; exclude …',
       'Work from letters … , … and … , dated …',
       'Match … in … and … ; do not do what … does.',
       'Return … drafts and a note of …', 'If a case is not covered by any example, …'],
 check=['Have you removed every adjective of quality?',
        'Are all three examples named by label and date?',
        'Is there one sentence of reason, for the cases the examples miss?',
        'Does the brief say to flag rather than invent a new standard?'],
 model=['Produce reminders that read as though one company wrote all of them',
        'The 338 ordinary overdue accounts; the 3 disputed accounts are excluded entirely',
        'The 3 pinned letters dated 9 June, labelled GOOD, OUTSIDE and NEARLY, and house style version 2',
        'Match letter GOOD in register and length, within 20 words either side of its 118; do not do what the 2 circled sentences in NEARLY do; the reason is that a client must be able to read it in under 30 seconds',
        '338 drafts and 1 list of every case that none of the 3 examples covers, by 16:00 on Wednesday',
        'If a case is not covered by any of the 3 examples, produce the draft, flag it and do not invent a fourth standard'],
 cost='3 incompatible sets of drafts, 2 of them rejected without a stated reason, about 6 '
      'hours of rework, and 1 person who stopped volunteering to write anything for 2 months.'),

rev_fig=figs.split('ASK, TELL, WANT',
                   'Object + to + verb',
                   ['She asked him to rewrite it.',
                    'He told Fatima to use template 4.',
                    'I want you to compare them.',
                    'They asked us not to send it.'],
                   'Say takes no object',
                   ['She said that it was ready.',
                    'He said the index was out of date.',
                    'They said nothing about Friday.',
                    'She said she would flag it.']),
rev_fig_cap='Ask, tell and want name who acts. Say does not, and is not an instruction.',
rev=dict(
 read=[('The most useful of three examples is usually', ['the good one', 'the bad one', 'the nearly-right one', 'none of them'], 2),
       ('"She asked him to rewrite it" uses the pattern', ['verb + that', 'verb + object + to', 'verb + gerund', 'verb + bare infinitive'], 1),
       ('Examples cannot convey', ['the words', 'the reason', 'the length', 'the register'], 1),
       ('In the Clinic, the answer was', ['one example', 'two examples with reasons', 'a rule only', 'nothing'], 1)],
 listen_text='Take the adjectives out and count what is left. If professional and clear were '
             'carrying your whole standard, you had no standard. Pin three real examples '
             'instead: one you were pleased with, one you would not send, and one that was '
             'nearly right with the failing sentences marked. Then add one sentence of '
             'reason, because examples never say why.',
 listen=[('Take the ____________ out and count what is left.', 'adjectives'),
         ('Pin three ____________ examples instead.', 'real'),
         ('One that was nearly right with the failing sentences ____________.', 'marked'),
         ('Add one sentence of ____________.', 'reason')],
 speak=['Describe a standard using one adjective. Your partner asks for an example until you give one.',
        'Then find the nearly-right case you disagree about.'],
 write='Write a brief with three named examples and one sentence of reason, and no adjectives.',
 vocab=[('A case shown with each step completed is a ____________.', 'worked example'),
        ('To adjust something until it matches a known standard is to ____________ it.', 'calibrate'),
        ('The clearest example of something is an ____________.', 'exemplar'),
        ('A model built to show what something will look like is a ____________.', 'mock-up'),
        ('To get a meaning across to somebody is to ____________ it.', 'convey')],
 gram=[('She asked him ____________ rewrite the first paragraph.', 'to'),
       ('I want you ____________ compare it with letter two.', 'to'),
       ('They asked us ____________ to send it before Friday.', 'not'),
       ('He told Fatima ____________ use template four.', 'to'),
       ('We told ____________ to follow the three examples.', 'them')]),

found=['Find one adjective of quality in something you wrote and replace it with an example.',
       'Look for a nearly-right piece of work and mark exactly what fails in it.',
       'Ask a colleague what "professional" means in your workplace. Compare answers.',
       'Write one sentence of reason beside an example you already use.'],
end_line='They all agreed with the page. Agreeing with it was never the same as matching it.',
end_next='Next: Passing On What We Were Told',
)
