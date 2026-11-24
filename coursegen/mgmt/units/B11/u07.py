# -*- coding: utf-8 -*-
import figs

U = dict(
num=7, title='Better Than What',
gram='comparatives and superlatives with a stated basis',
ai='translation and shifting register',
strap='CEFR B1 · Grammar: comparatives and superlatives with a stated basis · AI: translation and shifting register',
cando=['say that one thing is better than another and name the basis',
       'use the superlative with a measure, not as an opinion',
       'ask for a text in a different language or a different register',
       'describe what changes and what must not change when register shifts',
       'say what a translation can be checked against and what it cannot'],
hero=('THE SAME LETTER, FOUR WAYS',
      ['One client wants formal. One wants plain.',
       'Two want it in a language nobody here speaks.'],
      [(900, 'orange', 'long'), (1700, 'grey', 'short'), (2450, 'teal', 'long')]),
hero_cap='Register work: the facts stay still while everything round them moves.',

warm=['If somebody says a letter is "better", what have they not told you?',
      'How do you write differently to a client you have known for ten years?',
      'What would be lost if your work emails were translated word for word?'],
read=[
 'Priya Menon is a consultant who works alone, and she is the smallest account Arclight has. '
 'She is also the only client who has ever sent a letter back. The letter was accurate, it '
 'was polite, and she said it sounded like a bank writing to somebody it did not trust. She '
 'asked for it again, shorter, and with fewer words of three syllables.',
 'Fatima rewrote it and sent it. Priya replied in four words: much better, thank you. Fatima '
 'then spent twenty minutes trying to work out what she had actually done differently, '
 'because she wanted to do it again on purpose and could not describe the rule she had just '
 'followed.',
 'This is the problem with the word better. It is a comparative with the second half missing. '
 'Better than what, and better by what measure? Shorter is a measure. Fewer passive '
 'constructions is a measure. Easier for somebody reading on a phone is nearly a measure. '
 'More professional is not a measure at all, although it is the most commonly requested one.',
 'Arclight now holds four registers and names them. Formal, which goes to institutions. '
 'Standard, which is the house default. Plain, which is shorter sentences and no legal '
 'vocabulary. And Direct, which Priya gets, and which Fatima describes privately as the '
 'register you use with somebody who is busier than you are.',
 'The same discipline applies when the language changes rather than the register. A '
 'translation can be checked against its source, sentence by sentence, by anybody who reads '
 'both. What cannot be checked that way is whether the result sounds like a company somebody '
 'would want to work with, and that is a judgement that has to be made by a person who '
 'knows the market.'],
c_a=[('Who is the smallest account Arclight has?', 'Priya Menon'),
     ('What did Priya say the first letter sounded like?', 'a bank writing to somebody it did not trust'),
     ('Why did Fatima spend twenty minutes afterwards?', 'she wanted to describe the rule she had followed so she could repeat it'),
     ('What is wrong with the word "better"?', 'it is a comparative with the basis missing'),
     ('What are the four registers?', 'Formal, Standard, Plain and Direct')],
c_b=[('Priya is Arclight’s largest client.', 'F'),
     ('The first letter contained factual errors.', 'F'),
     ('Fatima could immediately explain what she had changed.', 'F'),
     ('"More professional" is described as a measure.', 'F'),
     ('A translation can be checked sentence by sentence against its source.', 'T'),
     ('Direct is the register Priya receives.', 'T')],
c_c=[('She asked for it again, shorter, and with fewer words of three ____________.', 'syllables'),
     ('Priya replied in four ____________.', 'words'),
     ('It is a comparative with the second half ____________.', 'missing'),
     ('Standard is the house ____________.', 'default'),
     ('Plain is shorter sentences and no ____________ vocabulary.', 'legal'),
     ('That is a judgement made by a person who knows the ____________.', 'market')],
c_d=[('"Better" fails as an instruction because it omits the ( verb / basis ).', ['verb', 'basis'], 1),
     ('Which of these is a usable measure?', ['more professional', 'fewer passive constructions', 'nicer', 'warmer'], 1),
     ('Arclight solved the problem by', ['writing longer letters', 'naming four registers', 'hiring a writer', 'asking clients each time'], 1),
     ('A translation can be checked against', ['the market', 'its source, sentence by sentence', 'nothing', 'the register'], 1),
     ('The thing that cannot be checked mechanically is whether it', ['is accurate', 'sounds like a company you would work with', 'is complete', 'is grammatical'], 1)],
c_e=('Measurable or not? Put each request in the right column.',
     [('Make it shorter than 180 words.', 'Measurable'),
      ('Make it more professional.', 'Not measurable'),
      ('Use fewer passive constructions.', 'Measurable'),
      ('Make it warmer.', 'Not measurable'),
      ('Keep every sentence under 20 words.', 'Measurable'),
      ('Make it sound better.', 'Not measurable')],
     ['Measurable', 'Not measurable']),

v_fig_title='FOUR REGISTERS, ONE SET OF FACTS',
v_fig=[('scale', 'a benchmark'), ('chart', 'a baseline'), ('doc', 'formality'),
       ('globe', 'an idiom'), ('bulb', 'nuance'), ('bank', 'a trade-off')],
v_fig_cap='Six words for comparing two versions of the same thing.',
vocab=[
 ('benchmark', 'a standard that other things are measured against'),
 ('baseline', 'the starting measurement that later ones are compared with'),
 ('yardstick', 'an informal standard used for judging'),
 ('comparable', 'similar enough to be fairly set beside something else'),
 ('equivalent', 'equal in value or meaning, though not identical'),
 ('rank', 'to place things in order from best to worst'),
 ('outperform', 'to do better than something else, by a stated measure'),
 ('trade-off', 'something given up in order to gain something else'),
 ('merit', 'the quality of being good, judged on its own terms'),
 ('shortlist', 'the small group kept after the first round of choosing'),
 ('weighting', 'how much importance each factor is given in a decision'),
 ('scorecard', 'a table showing how options perform against each measure'),
 ('rival', 'a company or product competing for the same customers'),
 ('superior', 'better in a way that can be stated'),
 ('discernible', 'able to be noticed, though perhaps only just'),
 ('fluency', 'the quality of running smoothly, without obvious effort'),
 ('idiom', 'a phrase whose meaning is not the sum of its words'),
 ('colloquial', 'the kind of language used in ordinary conversation'),
 ('formality', 'how far a text keeps to official or ceremonious language'),
 ('nuance', 'a small difference in meaning or feeling')],
v_a=[('A standard that other things are measured against is a ____________.', 'benchmark'),
     ('Something given up to gain something else is a ____________.', 'trade-off'),
     ('How much importance each factor is given is its ____________.', 'weighting'),
     ('A phrase whose meaning is not the sum of its words is an ____________.', 'idiom'),
     ('The language of ordinary conversation is ____________.', 'colloquial'),
     ('There was a ____________ improvement, though only just.', 'discernible'),
     ('A table showing how options perform against each measure is a ____________.', 'scorecard'),
     ('The two versions were ____________ in meaning if not in wording.', 'equivalent')],
v_b=[('A baseline is the starting measurement', 'later ones are compared with.'),
     ('To outperform something is to do better', 'by a stated measure.'),
     ('A shortlist is the small group kept', 'after the first round of choosing.'),
     ('Nuance is a small difference in', 'meaning or feeling.'),
     ('Formality is how far a text keeps to', 'official or ceremonious language.')],

g_title='Grammar: comparatives and superlatives with a stated basis',
g_rule=['Short words add -er and -est: shorter, shortest. Longer words take more and most.',
        'A comparative needs a second half: shorter than the March version.',
        'A superlative needs a field and a measure: the shortest of the four, by word count.',
        'A comparative with no basis is an opinion wearing the clothes of an instruction.'],
g_fig=('LOOSE',
       ['Make it better.',
        'This version is more professional.',
        'Pick the best option.',
        'It should be clearer.'],
       'PRECISE',
       ['Make it shorter than 180 words.',
        'This version has 4 passives; the other has 19.',
        'Pick the option with the lowest cost per item.',
        'No sentence should exceed 20 words.'],
       'better than what, by what measure?',
       'the field and the measure are both named'),
g_fig_cap='Every sentence on the right could be settled by counting.',
g_a=[('This draft is ____________ than the March one. (short)', 'shorter'),
     ('It is the ____________ of the four, by word count. (short)', 'shortest'),
     ('Plain is ____________ formal than Standard. (little)', 'less'),
     ('This option is ____________ expensive per item. (little)', 'less'),
     ('Which is the ____________ reliable of the three? (much)', 'most'),
     ('The second version was ____________ clear than the first. (much)', 'more'),
     ('Direct is the ____________ register we have. (brief)', 'briefest'),
     ('Her reply was ____________ than I expected. (good)', 'better'),
     ('That is the ____________ error rate we have recorded. (bad)', 'worst')],
g_b=[('This draft is ( shorter / more short ) than the March one.', ['shorter', 'more short'], 0),
     ('It is the ____ of the four, by word count.', ['shorter', 'shortest', 'most short', 'short'], 1),
     ('Plain is ____ formal than Standard.', ['lesser', 'less', 'least', 'little'], 1),
     ('Which is the ____ reliable of the three?', ['more', 'much', 'most', 'many'], 2),
     ('Her reply was ____ than I expected.', ['gooder', 'more good', 'better', 'best'], 2),
     ('That is the ____ error rate we have recorded.', ['worse', 'worst', 'baddest', 'more bad'], 1)],

d1=dict(title='Much better, thank you',
        fig=(['Much better, thank you.', 'I wish I knew what I did.'],
             ['Count the sentences.', 'Nineteen against forty-one.']),
        cap='Fatima and Thomas, reverse-engineering a success.',
        lines=[('Fatima', 'She said much better. I have no idea what I changed.'),
               ('Thomas', 'Put the two side by side and count something.'),
               ('Fatima', 'Count what?'),
               ('Thomas', 'Anything. Words, sentences, passives, syllables. Start counting.'),
               ('Fatima', 'Forty-one sentences became nineteen. That is a big difference.'),
               ('Thomas', 'And the average sentence?'),
               ('Fatima', 'Twenty-six words down to fourteen. I did not do that deliberately.'),
               ('Thomas', 'You did it deliberately. You did not do it consciously.'),
               ('Fatima', 'So the rule is: under fifteen words a sentence for Priya.'),
               ('Thomas', 'That is a rule somebody else can follow. Better is not.'),
               ('Fatima', 'It feels like turning something I am good at into arithmetic.'),
               ('Thomas', 'It is exactly that. That is how three people do what one person did.')],
        a=[('What did Priya say?', 'much better, thank you'),
           ('What does Thomas tell Fatima to do?', 'put the versions side by side and count something'),
           ('What changed between the drafts?', 'forty-one sentences became nineteen, and average length fell from twenty-six words to fourteen'),
           ('What distinction does Thomas draw?', 'between doing something deliberately and doing it consciously'),
           ('What rule do they end with?', 'under fifteen words a sentence for Priya')],
        b=[('Put the two side by side and ____________ something.', 'count'),
           ('Twenty-six words down to ____________.', 'fourteen'),
           ('You did not do it ____________.', 'consciously'),
           ('Better is not a ____________ somebody else can follow.', 'rule')]),
d2=dict(title='Fluent and wrong',
        fig=(['The Portuguese reads beautifully.', 'Does it say the same thing?'],
             ['Line for line, yes.', 'Then why did he query clause four?']),
        cap='Jonas and a reviewer, on a translated contract summary.',
        lines=[('Jonas', 'The Portuguese version reads beautifully. Better than the English.'),
               ('Reviewer', 'Does it say the same thing?'),
               ('Jonas', 'Line for line, yes. I checked all nineteen paragraphs.'),
               ('Reviewer', 'Then why did the client query clause four?'),
               ('Jonas', 'He said it sounded like we were offering something we were not.'),
               ('Reviewer', 'That is a register problem, not a translation problem.'),
               ('Jonas', 'The words are correct.'),
               ('Reviewer', 'The words are correct and the effect is wrong. Those are different.'),
               ('Jonas', 'Then how do I check for that?'),
               ('Reviewer', 'You cannot, from here. Somebody who sells in that market has to read it.'),
               ('Jonas', 'Which is slower and costs money and is not a rule I can write down.'),
               ('Reviewer', 'No. And I am not going to pretend otherwise to make you comfortable.')],
        a=[('What does Jonas say about the Portuguese version?', 'that it reads beautifully, better than the English'),
           ('What did the client query?', 'clause four, which sounded like an offer that was not intended'),
           ('What kind of problem does the reviewer call it?', 'a register problem rather than a translation problem'),
           ('Who does the reviewer say has to read it?', 'somebody who sells in that market'),
           ('Does the reviewer offer a rule?', 'no; he says explicitly that he will not pretend one exists')],
        b=[('Line for line, I checked all nineteen ____________.', 'paragraphs'),
           ('That is a ____________ problem, not a translation problem.', 'register'),
           ('The words are correct and the ____________ is wrong.', 'effect'),
           ('Somebody who sells in that ____________ has to read it.', 'market')]),

speak=[('Better than what?',
        ['Student A: say that something at work is better than something else.',
         'Student B: ask "better by what measure?" until you get a number or a count.',
         'Note how many turns it took. Three is normal.']),
       ('Spoken specification: brief a register change',
        ['Choose a document you would send to two different readers.',
         'Brief your partner aloud: name the register, the measure, and what must not change.',
         'Your partner repeats the "must not change" line back to you.']),
       ('Count something',
        ['Take any two short texts. Count sentences, average length and passives in each.',
         'State one comparison with a number in it.',
         'Decide which count told you the most and why.'])],

ext_title='Register is measurable; sounding right is not',
ext_fig=figs.datatable('FOUR REGISTERS, NAMED AND MEASURED',
                       ['Register', 'Mean sentence', 'Legal vocabulary', 'Goes to'],
                       [['Formal', 'up to 28 words', 'permitted', 'institutions'],
                        ['Standard', 'up to 22 words', 'sparing', 'most clients'],
                        ['Plain', 'up to 18 words', 'none', 'small businesses'],
                        ['Direct', 'up to 15 words', 'none', 'Priya Menon']]),
ext_fig_cap='The second and third columns are what make the first column usable by anybody.',
ext=[
 'Shifting register is one of the few things in this book that works almost perfectly out of '
 'the box, and it is also one of the easiest places to deceive yourself. The mechanical part '
 'is genuinely solved: ask for the same content in shorter sentences with simpler vocabulary '
 'and you will get it, consistently, and you can check the result by counting. The part that '
 'is not solved is knowing which register the reader wanted.',
 'That is why naming registers is worth the afternoon it takes. Formal, Standard, Plain, '
 'Direct is not an elegant taxonomy and it does not have to be. What it has to do is let one '
 'person say a word to another person and have them both mean the same thing, which is '
 'exactly what better fails to do. Attach a measure to each name and the word becomes an '
 'instruction rather than a hope.',
 'Translation behaves similarly, with one extra trap. A translated document can be checked '
 'against its source by anybody who reads both languages, and that check is real and worth '
 'doing. What it cannot tell you is whether the result reads like something written by a '
 'company in that market or like something written somewhere else and carried across.',
 'The difference matters commercially, because fluency is persuasive. A text that reads '
 'smoothly is trusted more than one that does not, independently of whether it is right. A '
 'fluent translation with a wrong register will be read carefully and believed, and the '
 'reader will form a view of your company from it that you never intended to offer.',
 'The practical answer is unglamorous. Use the mechanical part for everything, because it '
 'is cheap and reliable. Reserve a human reader for anything that will be read by somebody '
 'deciding whether to do business with you, and accept that this is slower, costs money and '
 'cannot be reduced to a rule. Not every part of this work becomes a procedure.'],
dp1=('Fluency and trust',
     'Research in reading and persuasion consistently finds that texts which are easier to '
     'process are judged more credible, independently of their accuracy.',
     'Source: general processing-fluency research, 2026. Effect sizes vary with reader expertise.'),
e_a=[('Which part of register work is described as solved?', 'the mechanical part: shorter sentences and simpler vocabulary, checkable by counting'),
     ('What is not solved?', 'knowing which register the reader wanted'),
     ('Why is naming registers worth an afternoon?', 'so two people saying the same word mean the same thing'),
     ('What can a translation check tell you, and what can it not?', 'it can confirm the content matches; it cannot tell you whether the register suits the market'),
     ('Why is fluency commercially risky?', 'because a smooth text is trusted more, independently of whether it is right')],
e_b=[('Register can be checked by counting.', 'T'),
     ('The writer says the taxonomy must be elegant.', 'F'),
     ('A fluent translation is always a correct one.', 'F'),
     ('Easier texts are generally judged more credible.', 'T'),
     ('The writer recommends a human reader for everything.', 'F'),
     ('Some of this work cannot be reduced to a rule.', 'T')],

w_model=(
 'Purpose: send Priya Menon a payment reminder she will actually read. Scope: her 2 overdue '
 'invoices on the 14 March ledger. Inputs: the ledger export and follow-up template version '
 '4. Criteria: register Direct, which means no sentence over 15 words, no legal vocabulary, '
 'and under 120 words in total; the amount, the due date and the reference must appear '
 'unchanged. Done: 1 letter and a word count. Fallback: if the content cannot be said in '
 '120 words without dropping a required fact, keep the fact and report the overrun.'),
w_fig=figs.split('WHAT MOVES AND WHAT MUST NOT',
                 'Free to change',
                 ['sentence length', 'vocabulary', 'order of paragraphs', 'level of formality'],
                 'Must not change',
                 ['the amount', 'the due date', 'the reference number',
                  'anything that could be read as a promise']),
w_fig_cap='A register brief is two lists. Most briefs write only the first one.',
w_task='Write a brief for sending the same content to a different reader.',
w_steps=['Name the register you want, and give it at least one number.',
         'List the facts that must appear unchanged, one by one.',
         'Say what may be cut if the text runs long.',
         'Say what must never be cut, even if the text runs long.',
         'Ask for a count, so the register can be checked rather than admired.'],
w_bank=['Rewrite this in register … , which means …', 'No sentence over … words.',
        'The following must appear unchanged: …', 'If the text runs long, cut … first.',
        'Return the letter and its …'],
w_check=['Does your register name carry at least one number?',
         'Have you listed the facts that must survive the rewrite?',
         'Is there an instruction for the case where it will not fit?',
         'Could somebody check your register by counting, without asking you?'],

t_title='Translation and shifting register',
t_fig=figs.handover('A TRANSLATION, AND WHERE A PERSON IS STILL REQUIRED',
                    ['Translate the 19 paragraphs', 'Check line against line', 'Report any clause that gained or lost meaning'],
                    'A seller in that market reads clause 4 and says how it lands',
                    'Accuracy is checkable. Effect is not.'),
t_fig_cap='The first three boxes are cheap and reliable. The fourth cannot be removed.',
t_body=[
 'Begin by refusing the word better. It is the single most expensive word in this subject, '
 'because it feels like an instruction and carries no information at all. Replace it with a '
 'named register and a number: Direct, no sentence over fifteen words. Now two people can '
 'disagree about whether the output met the brief, which is the whole point of a brief.',
 'Then write the second list, which almost nobody writes. A register change is permission to '
 'alter how something is said, and it is not permission to alter what is said. List the '
 'facts that must come through unchanged: the amount, the date, the reference, anything that '
 'could be read as a commitment. Without that list, the shortest version is always the one '
 'that dropped something.',
 'For translation, do the same and then add the honest line. The content can be checked '
 'against the source by anybody who reads both languages, so ask for that check and specify '
 'it. Whether it sounds like a company worth dealing with is a different question, it '
 'requires somebody who sells in that market, and no amount of specification will replace '
 'them.'],
t_say=[('Name the register: ', 'Rewrite this in Direct: no sentence over 15 words.'),
       ('Protect the facts: ', 'The amount, the due date and the reference must appear unchanged.'),
       ('Be honest about the limit: ', 'A speaker who sells in that market must read it before it goes.')],
t_bound=('A register change does not tell you whether the register was the right one, and a '
         'translation check does not tell you how the text lands on a reader. Both can be '
         'done faultlessly and still produce a document that costs you the client, and '
         'nothing in the output will indicate that this has happened.'),
t_a=[('Rewrite this in Direct: no sentence over 15 ____________.', 'words'),
     ('The amount, the due date and the reference must appear ____________.', 'unchanged'),
     ('A speaker who sells in that ____________ must read it before it goes.', 'market'),
     ('Refuse the word ____________.', 'better'),
     ('A register change is not permission to alter what is ____________.', 'said'),
     ('Without that list, the shortest version is the one that ____________ something.', 'dropped')],
t_b_rubric='Replace each vague comparative with a measure.',
t_b=[('Make it better.', 'name the register and a number, for example Direct, under 15 words a sentence'),
     ('Make it more professional.', 'state the measure: no contractions, no colloquial vocabulary, Formal register'),
     ('This one is clearer.', 'say by what: average sentence length, or number of passive constructions'),
     ('Pick the best translation.', 'pick the one that matches the source line for line and passes a market reader')],

case=dict(
 title='Decision Clinic · Who reads the Portuguese?',
 brief=[
  'Arclight has won work from a client selling into Portugal, and about four hundred '
  'customer replies a month now have to go out in Portuguese. Nobody at Arclight speaks '
  'Portuguese.',
  'The translations are checked line against line by a reviewer in Lisbon, who confirms '
  'that the content matches. She costs about 600 euros a month and she is fast. She has '
  'said twice, in writing, that she is checking accuracy and not tone, and that these are '
  'different jobs.',
  'A second reviewer, who sells in that market, would cost about 1,900 euros a month. In '
  'four months there has been one complaint about tone, from a customer who did not buy '
  'anything anyway.'],
 exhibit=figs.datatable('FOUR MONTHS OF PORTUGUESE REPLIES',
                        ['', 'Replies', 'Content errors', 'Tone complaints', 'Orders'],
                        [['month 1', '380', '4', '0', '41'],
                         ['month 2', '410', '1', '1', '38'],
                         ['month 3', '395', '0', '0', '29'],
                         ['month 4', '420', '1', '0', '26']]),
 exhibit_cap='Content errors fell to almost nothing. So, quietly, did orders.',
 exhibit_note='Nobody has established whether the fall in orders has anything to do with the '
              'replies. The seasonal pattern for this client is unknown; this is their first year.',
 voices=[('Jonas Riedel', 'co-founder, systems',
          'One complaint in four months and content errors at almost zero. The Lisbon '
          'reviewer is doing the job. Nineteen hundred a month for a tone we cannot measure '
          'is not a decision, it is a worry.'),
         ('Marta Olsen', 'risk and liability',
          'Orders went from forty-one to twenty-six while we were congratulating ourselves on '
          'accuracy. I am not saying the two are connected. I am saying nobody has looked.'),
         ('Ines Carvalho', 'managing director',
          'The reviewer has told us twice, in writing, that she is not checking tone. We have '
          'a documented warning and no response to it. That is the part that would read badly.')],
 steps=[('Find it', 'What happened to orders over the four months, and to content errors?'),
        ('Compare it', 'What does a market reviewer check that a line reviewer does not?'),
        ('Infer it', 'Why can nobody say whether the two numbers are connected?'),
        ('Weigh it', '1,900 a month against a fall nobody has explained.'),
        ('Decide', 'What should Arclight do, and what would settle the question?')],
 analysis=[('Find it. What happened to orders?', 'they fell from forty-one to twenty-six over four months'),
           ('Compare it. What does the Lisbon reviewer explicitly not check?', 'tone, which she has stated in writing twice'),
           ('Infer it. Why is the connection unknown?', 'this is the client’s first year, so there is no seasonal pattern to compare against'),
           ('Weigh it. What is Ines worried about that Jonas is not?', 'that a documented warning has been received and not acted on'),
           ('Decide. What would actually settle the question?', 'having a market reader review a sample of past replies, which costs far less than a full second reviewer')],
 decision='Write the proposal Ines takes to the client.',
 decision_steps=['Say what is known and separate it clearly from what is guessed.',
                 'Propose the cheapest thing that would answer the question.',
                 'Put a cost and a date on it.',
                 'Say what you will do depending on each answer.'],
 bank=['What we can show is…', 'What we cannot yet separate is…',
       'The cheapest way to find out is…', 'This would cost … and take …',
       'If the answer is … , we will … ; if it is … , we will …'],
 outcome='Ines paid a market reader 240 euros to review sixty past replies rather than '
         'hiring a second reviewer. Eleven of the sixty were judged to read as though written '
         'by a foreign company, and four used a level of formality that the reader described '
         'as cold rather than wrong. Arclight changed the register setting and added a market '
         'reader for one week in four. Orders recovered to thirty-four the following month, '
         'which proves nothing and was enough for the client.',
 outcome_q=[('Why was the 240-euro sample a better first step than either proposal?', 'it answered the open question cheaply instead of acting on a guess in either direction'),
            ('Why does the outcome say the recovery proves nothing?', 'because one month is not evidence of cause, and the seasonal pattern is still unknown')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Make it better for Priya',
 task=['Priya Menon has sent a letter back. Fatima is annoyed, a little embarrassed, and '
       'about to write a brief for the rewrite in the two minutes before her next call.',
       'She knows what Priya wants, because she has spoken to her forty times. What she does '
       'not have is any way of saying it that another person could act on.'],
 draft=['Priya sent it back. Can you do a better version.',
        'Make it shorter and more professional.',
        'Cut the heavy words, there are quite a few.',
        'Keep all the important details in.',
        'Something that reads more like how we actually talk to her.',
        'Send it over as soon as you can.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Four comparatives, none with a second half, and one contradiction.',
 asked=['Under 120 words, Direct register',
        'Amount, due date and reference unchanged',
        'Shorter sentences, plainer vocabulary'],
 back=['A 260-word letter in Formal register',
       'The reference number dropped',
       'Longer sentences, grander vocabulary'],
 gap='Shorter and more professional pull in opposite directions, and nothing said which '
     'facts counted as important, so the shortest thing to cut was the reference number.',
 back_cap='A letter that is more professional, longer, and missing the number she needs.',
 back_note='The brief contained two instructions that cannot both be followed. Faced with a '
           'contradiction, something will follow one of them, and you will not be told which.',
 diagnosis=[('[1] "a better version" — better than what, by what measure?', 'unstated criterion'),
            ('[2] "shorter and more professional" — which wins?', 'unstated criterion'),
            ('[3] "quite a few heavy words" — how many is a few?', 'unbounded quantity'),
            ('[4] "all the important details" — important by whose test?', 'unbounded quantity'),
            ('[5] "how we actually talk to her" — written down where?', 'undefined done'),
            ('[6] "as soon as you can" — by when, exactly?', 'undefined done')],
 rewrite='Rewrite the brief so that the register is a number, the protected facts are a list, '
         'and nothing in it contradicts anything else.',
 scaffold=['Why Priya sent the first one back, in one clause',
           'Which letter is being rewritten, and which facts must survive it',
           'The original letter and the register table that defines Direct',
           'The register by name and by number, and what to cut first if it runs long',
           'The letter and the word count that proves the register',
           'What to do if the required facts will not fit in the word limit'],
 bank=['Rewrite the … letter in register … , which means …',
       'The following must appear unchanged: …', 'No sentence over … words.',
       'If it runs long, cut … before …', 'Return the letter and its …',
       'If the required facts will not fit, …'],
 check=['Does every comparative in your brief have a second half?',
        'Is the register named and numbered?',
        'Is there a list of facts that must survive?',
        'Have you removed every pair of instructions that fight each other?'],
 model=['Send Priya a reminder she will read in full, after she returned the first one',
        'The reminder covering her 2 overdue invoices on the 14 March ledger; the amount, the due date and the reference number must appear unchanged',
        'The returned letter of 12 March and the register table dated 2 February',
        'Register Direct: no sentence over 15 words, no legal vocabulary, under 120 words in total; cut background before cutting facts',
        '1 letter, its word count and its longest sentence length',
        'If the required facts will not fit in 120 words, keep every fact and report the overrun rather than cutting one'],
 cost='A second letter 260 words long with the reference number missing, a third rewrite 2 '
      'days later, and 1 client out of 11 who now opens post from Arclight expecting to be '
      'irritated.'),

rev_fig=figs.split('COMPARATIVE WITHOUT AND WITH A BASIS',
                   'No basis — an opinion',
                   ['Make it better.', 'This is clearer.',
                    'Pick the best one.', 'It should be more professional.'],
                   'With a basis — an instruction',
                   ['Make it shorter than 180 words.',
                    'This has 4 passives; that has 19.',
                    'Pick the lowest cost per item.',
                    'No sentence over 20 words.']),
rev_fig_cap='Everything on the right could be settled by two people and a counter.',
rev=dict(
 read=[('The word "better" fails because it', ['is informal', 'omits the basis of comparison', 'is too short', 'is rude'], 1),
       ('A superlative needs', ['a field and a measure', 'a longer word', 'an article only', 'no basis'], 0),
       ('A translation check against the source can confirm', ['tone', 'content', 'market fit', 'formality'], 1),
       ('In the Clinic, what settled the question cheaply?', ['a second reviewer', 'a 240-euro sample review', 'more translations', 'waiting'], 1)],
 listen_text='Two lists and you have a register brief. The first list is the register itself, '
             'with a number attached, because Direct means nothing until it means under '
             'fifteen words a sentence. The second list is the facts that must survive the '
             'rewrite. Almost nobody writes the second list, and that is why the shortest '
             'version is always the one that dropped the reference number.',
 listen=[('The first list is the register itself, with a ____________ attached.', 'number'),
         ('Direct means nothing until it means under ____________ words a sentence.', 'fifteen'),
         ('The second list is the ____________ that must survive the rewrite.', 'facts'),
         ('The shortest version is the one that dropped the ____________ number.', 'reference')],
 speak=['Say three comparatives about your own work. Your partner supplies the missing second half each time.',
        'Then agree which of the three could actually be counted.'],
 write='Write a register brief with a numbered register and a list of protected facts.',
 vocab=[('A standard that other things are measured against is a ____________.', 'benchmark'),
        ('Something given up to gain something else is a ____________.', 'trade-off'),
        ('A phrase whose meaning is not the sum of its words is an ____________.', 'idiom'),
        ('The language of ordinary conversation is ____________.', 'colloquial'),
        ('A small difference in meaning or feeling is a ____________.', 'nuance')],
 gram=[('This draft is ____________ than the March one.', 'shorter'),
       ('It is the ____________ of the four, by word count.', 'shortest'),
       ('Plain is ____________ formal than Standard.', 'less'),
       ('Her reply was ____________ than I expected.', 'better'),
       ('That is the ____________ error rate we have recorded.', 'worst')]),

found=['Find a "better" in your own writing this week and give it a second half.',
       'Name three registers your workplace actually uses, and put a number on each.',
       'List the facts that must survive any rewrite of a document you send often.',
       'Count the sentences in two versions of something and state the difference.'],
end_line='Better is a feeling. Under fifteen words a sentence is an instruction.',
end_next='Next: Deadlines That Cannot Be Misread',
)
