# -*- coding: utf-8 -*-
import figs

U = dict(
num=5, title='What We Really Do',
gram='cleft sentences: what we do is...',
ai='tone, brand, and the risk of sounding like everyone else',
strap='CEFR B2 · Grammar: cleft sentences · AI: tone, brand and sounding like everyone else',
cando=['use a cleft sentence to put the emphasis where I want it',
       'rewrite a flat statement so that it foregrounds the thing that matters',
       'identify what makes a company’s writing recognisable',
       'say what is lost when everybody in a sector writes the same way',
       'decide which parts of a house voice are worth protecting'],
hero=('FIVE LETTERS FROM FIVE COMPANIES',
      ['They were shown to eleven people with the names removed.',
       'Nobody could match more than two of the five.'],
      [(880, 'orange', 'short'), (1620, 'purple', 'long'), (2360, 'grey', 'short')]),
hero_cap='The risk is not sounding bad. It is sounding like everybody else.',

warm=['Could you recognise your organisation’s writing with the name removed?',
      'What is the difference between "we check every letter" and "what we do is check every letter"?',
      'What phrase does your workplace use that nobody else does?'],
read=[
 'Victor ran a second experiment in the autumn. He collected one client letter from each of '
 'five companies in the same business, removed every name, address and reference, and asked '
 'eleven colleagues and two clients to say which was which. Nobody matched more than two of '
 'the five, and four people matched none.',
 'One of the five was Arclight’s. Three of the eleven guessed it correctly, which is roughly '
 'what guessing would produce. The letter was good: clear, accurate, polite, under a hundred '
 'and eighty words, and entirely consistent with the house style that had taken an afternoon '
 'to write and a year to establish.',
 'What struck Victor was not that the letters were similar in quality, which he expected, but '
 'that they were similar in construction. All five opened by referring to previous '
 'correspondence. All five used some version of please do not hesitate to contact us. Four '
 'of the five put the amount in the second paragraph rather than the first.',
 'The explanation is not mysterious. Everybody in the sector learned to write from the same '
 'sources, nobody has an incentive to be unusual, and the safest sentence in any genre is the '
 'one everybody else is already writing. Automation did not create this convergence and it '
 'does accelerate it, because the most ordinary available phrasing is the one that arrives '
 'most readily.',
 'Arclight’s response was narrow and specific. Three things were identified as worth '
 'protecting: the amount in the first two lines, because Samuel reads it that way; the '
 'absence of the phrase about not hesitating, because Priya once said it made her feel '
 'managed; and a closing sentence that says what will happen next rather than offering help. '
 'Everything else was left to converge.'],
c_a=[('What did Victor’s second experiment test?', 'whether people could identify five companies’ letters with the names removed'),
     ('How many did people match?', 'nobody matched more than two of five, and four matched none'),
     ('What struck Victor about the five letters?', 'that they were similar in construction, not only in quality'),
     ('Why does the sector converge?', 'everybody learned from the same sources and the safest sentence is the commonest one'),
     ('What three things did Arclight protect?', 'the amount in the first two lines, the absence of a particular phrase, and a closing that says what happens next')],
c_b=[('Arclight’s letter was poorly written.', 'F'),
     ('Three of eleven guessed Arclight’s letter correctly.', 'T'),
     ('All five letters used a version of the same closing phrase.', 'T'),
     ('Automation created the convergence.', 'F'),
     ('Arclight protected everything about its house style.', 'F'),
     ('Priya said one phrase made her feel managed.', 'T')],
c_c=[('He removed every name, address and ____________.', 'reference'),
     ('Roughly what ____________ would produce.', 'guessing'),
     ('All five opened by referring to previous ____________.', 'correspondence'),
     ('The safest sentence in any genre is the one everybody else is already ____________.', 'writing'),
     ('The most ordinary available ____________ is the one that arrives most readily.', 'phrasing'),
     ('Everything else was left to ____________.', 'converge')],
c_d=[('The experiment showed the letters were similar in ( quality / construction ).', ['quality', 'construction'], 1),
     ('Three correct guesses out of eleven is', ['a strong result', 'roughly what guessing produces', 'impossible', 'conclusive'], 1),
     ('Automation’s effect on convergence is to', ['create it', 'accelerate it', 'reverse it', 'conceal it'], 1),
     ('Arclight decided to protect', ['the whole house style', 'three specific things', 'nothing', 'the opening only'], 1),
     ('The closing sentence Arclight chose', ['offers help', 'says what happens next', 'is longer', 'is formal'], 1)],
c_e=('Plain or cleft? Put each sentence in the right column.',
     [('We check every outbound letter.', 'Plain'),
      ('What we do is check every outbound letter.', 'Cleft'),
      ('A person releases the queue.', 'Plain'),
      ('It is a person who releases the queue.', 'Cleft'),
      ('The amount goes in the first two lines.', 'Plain'),
      ('What matters is where the amount goes.', 'Cleft')],
     ['Plain', 'Cleft']),

v_fig_title='SOUNDING LIKE SOMEBODY',
v_fig=[('bulb', 'distinctiveness'), ('doc', 'a signature'), ('scale', 'parity'),
       ('chart', 'positioning'), ('note', 'cadence'), ('bank', 'a commodity')],
v_fig_cap='Six words for the difference between being good and being recognisable.',
vocab=[
 ('brand', 'the accumulated impression a company has created of itself'),
 ('voice', 'the recognisable manner in which an organisation writes'),
 ('distinctiveness', 'the quality of being noticeably different from the rest'),
 ('differentiation', 'the act of making your offer distinguishable from others'),
 ('positioning', 'the place a company occupies relative to its competitors'),
 ('generic', 'belonging to a whole class, with nothing particular about it'),
 ('homogeneous', 'all of the same kind, with differences smoothed away'),
 ('bland', 'inoffensive and uninteresting in equal measure'),
 ('signature', 'a feature so characteristic that it identifies the source'),
 ('house phrase', 'a form of words a particular organisation always uses'),
 ('turn of phrase', 'a particular way of expressing something'),
 ('cadence', 'the rhythm of a piece of writing when read'),
 ('lexicon', 'the set of words a particular group habitually uses'),
 ('hallmark', 'a distinguishing feature taken as a sign of origin'),
 ('recognisable', 'able to be identified as what it is without being told'),
 ('interchangeable', 'able to be swapped for another without anybody noticing'),
 ('commodity', 'a thing whose instances are treated as identical'),
 ('parity', 'the state of being equal, with no advantage either way'),
 ('stand out', 'to be noticeably different from what surrounds you'),
 ('in-house', 'done within the organisation rather than bought in')],
v_a=[('A feature so characteristic that it identifies the source is a ____________.', 'signature'),
     ('A thing whose instances are treated as identical is a ____________.', 'commodity'),
     ('Able to be swapped without anybody noticing is ____________.', 'interchangeable'),
     ('The rhythm of a piece of writing is its ____________.', 'cadence'),
     ('Belonging to a whole class with nothing particular about it is ____________.', 'generic'),
     ('The set of words a group habitually uses is its ____________.', 'lexicon'),
     ('The state of being equal with no advantage is ____________.', 'parity'),
     ('A form of words an organisation always uses is a ____________.', 'house phrase')],
v_b=[('Voice is the recognisable manner', 'in which an organisation writes.'),
     ('Positioning is the place a company occupies', 'relative to its competitors.'),
     ('Homogeneous means all of the same kind,', 'with differences smoothed away.'),
     ('A hallmark is a distinguishing feature', 'taken as a sign of origin.'),
     ('In-house means done within the organisation', 'rather than bought in.')],

g_title='Grammar: cleft sentences',
g_rule=['A what-cleft moves the emphasis: what we do is check every letter.',
        'An it-cleft foregrounds one element: it is a person who releases the queue.',
        'The verb after a what-cleft is singular, even when what follows is plural.',
        'Clefts are for contrast; used without something to contrast with, they merely delay.'],
g_fig=('LOOSE',
       ['We check every letter.',
        'A person releases the queue.',
        'The amount goes in the first lines.',
        'Fatima noticed the four letters.'],
       'PRECISE',
       ['What we do is check every letter, not sample them.',
        'It is a person who releases it, not a rule.',
        'What matters is where the amount goes.',
        'It was Fatima who noticed, not a check.'],
       'a statement with even emphasis',
       'one element foregrounded, against an alternative'),
g_fig_cap='A cleft without a contrast is a long way of saying something short.',
g_a=[('____________ we do is check every letter, not sample them. (what)', 'What'),
     ('It ____________ a person who releases the queue, not a rule. (be)', 'is'),
     ('What matters ____________ where the amount goes. (be)', 'is'),
     ('It ____________ Fatima who noticed, not a check. (be)', 'was'),
     ('____________ changed was the opening, not the closing. (what)', 'What'),
     ('What the client wanted ____________ the invoice, not an apology. (be)', 'was'),
     ('It is the ____________ that identifies us, not the wording. (layout)', 'layout'),
     ('____________ we protect is three things, and nothing else. (what)', 'What'),
     ('It was ____________ Priya said that changed the rule. (what)', 'what')],
g_b=[('( What / That ) we do is check every letter.', ['What', 'That'], 0),
     ('It ____ a person who releases the queue.', ['are', 'is', 'be', 'were'], 1),
     ('What matters ____ where the amount goes.', ['are', 'is', 'were', 'be'], 1),
     ('____ changed was the opening, not the closing.', ['That', 'What', 'Which', 'It'], 1),
     ('It was Fatima ____ noticed, not a check.', ['which', 'who', 'whom', 'what'], 1),
     ('What we protect ____ three things.', ['are', 'is', 'were', 'have'], 1)],

d1=dict(title='Three out of eleven',
        fig=(['Did anybody pick ours?', 'Three of eleven.'],
             ['That is not bad.', 'That is chance.']),
        cap='Victor and Ines, with five anonymous letters.',
        lines=[('Ines', 'Five letters, names removed. How many people picked ours correctly?'),
               ('Victor', 'Three of eleven, which with five letters is what random guessing produces.'),
               ('Ines', 'So we are indistinguishable from four competitors.'),
               ('Victor', 'We are indistinguishable from four competitors in a single client letter, '
                          'which is a narrower finding and still not a comfortable one.'),
               ('Ines', 'Is the letter bad?'),
               ('Victor', 'The letter is good. All five are good. That is what makes it interesting.'),
               ('Ines', 'What is it we have, then, that a client could point at?'),
               ('Victor', 'Three things, and I had to look hard to find them. Where the amount sits, '
                          'the phrase we do not use, and the way we close.'),
               ('Ines', 'That is a thin list for a year of work on house style.'),
               ('Victor', 'It is a thin list and I think it is the honest one. The rest of the house '
                          'style made us consistent, which is different from making us recognisable.'),
               ('Ines', 'And consistency was what we were actually trying to achieve.'),
               ('Victor', 'It was, and we got it, and then we started describing it as a voice.')],
        a=[('How many of eleven picked Arclight’s letter?', 'three, which is roughly chance'),
           ('What does Victor say about the quality of the five?', 'that all five are good, which is what makes it interesting'),
           ('What three things did he find?', 'where the amount sits, the phrase they do not use, and the way they close'),
           ('What did the house style actually achieve?', 'consistency'),
           ('What is the distinction Victor draws?', 'between being consistent and being recognisable')],
        b=[('What random ____________ produces.', 'guessing'),
           ('All five are good. That is what makes it ____________.', 'interesting'),
           ('It is a thin list and I think it is the ____________ one.', 'honest'),
           ('Then we started describing it as a ____________.', 'voice')]),
d2=dict(title='Which three are worth keeping?',
        fig=(['Protect the whole style.', 'That is forty rules.'],
             ['Then protect three.', 'And let the rest go?']),
        cap='Fatima and Victor, deciding what to defend.',
        lines=[('Fatima', 'If we are converging, the answer is to protect the house style harder, not less.'),
               ('Victor', 'The house style has about forty rules in it and thirty-seven of them are the '
                          'same as everybody else’s, because they are the right answers.'),
               ('Fatima', 'Such as?'),
               ('Victor', 'Put the reference number near the top. Use the client’s surname. Keep it '
                          'under two hundred words. Every competent company does all three.'),
               ('Fatima', 'So defending those defends nothing distinctive.'),
               ('Victor', 'Defending those keeps us competent. It does not make us identifiable, and '
                          'pretending otherwise is how companies spend money on a voice they do not have.'),
               ('Fatima', 'Then which three?'),
               ('Victor', 'The amount in the first two lines, because it is unusual and Samuel built a '
                          'habit on it. Not saying do not hesitate, because Priya noticed. And closing '
                          'with what happens next instead of an offer of help.'),
               ('Fatima', 'Two of those three came from a client saying something.'),
               ('Victor', 'All the real ones do. Nobody inside a company can hear its own voice.'),
               ('Fatima', 'Then I want a fourth thing, which is that we ask clients what they notice, '
                          'every year, rather than deciding it in a room.')],
        a=[('How many rules does the house style contain?', 'about forty'),
           ('Why are thirty-seven of them the same as competitors’?', 'because they are the right answers'),
           ('What does defending those achieve?', 'it keeps Arclight competent, not identifiable'),
           ('Where did two of the three distinctive things come from?', 'from clients saying something'),
           ('What does Fatima want added?', 'asking clients what they notice, every year')],
        b=[('Thirty-seven of them are the same as everybody ____________.', 'else’s'),
           ('It does not make us ____________.', 'identifiable'),
           ('Because it is unusual and Samuel built a ____________ on it.', 'habit'),
           ('Nobody inside a company can hear its own ____________.', 'voice')]),

speak=[('Cleft it',
        ['Student A: make four plain statements about your organisation.',
         'Student B: rewrite each as a cleft, supplying the contrast it needs.',
         'Decide which ones were improved and which were merely lengthened.']),
       ('Spoken specification: protect three things',
        ['Choose a document type your organisation produces.',
         'Brief aloud the three things about it you would protect, and why those three.',
         'Your partner asks which of the three a customer has ever mentioned.']),
       ('Remove the name',
        ['Bring a short piece of writing from your organisation and read it aloud.',
         'Your partner says what, if anything, identifies where it came from.',
         'Agree on one feature that is genuinely yours.'])],

ext_title='Consistency is not the same as a voice',
ext_fig=figs.datatable('FIVE LETTERS, FORTY RULES',
                       ['Feature', 'Arclight', 'The other four', 'Distinctive?'],
                       [['reference near the top', 'yes', 'all four', 'no'],
                        ['under 200 words', 'yes', 'three of four', 'no'],
                        ['amount in first 2 lines', 'yes', 'none', 'yes'],
                        ['"do not hesitate"', 'never', 'all four', 'yes'],
                        ['closes with next step', 'yes', 'one of four', 'partly']]),
ext_fig_cap='Three rows out of five are simply competence. Two of them are the voice.',
ext=[
 'Most organisations that invest in a house style achieve consistency, which is a real and '
 'valuable thing, and then describe what they have achieved as a voice, which is usually not '
 'true. Consistency means that everything you send looks as though it came from one place. '
 'A voice means that somebody could identify which place without being told, and the second '
 'is much rarer and much harder.',
 'The reason is structural rather than a failure of effort. Most of the rules in any good '
 'house style are the right answers to questions with right answers: put the reference near '
 'the top, use the reader’s surname, keep it short, state the amount plainly. Every '
 'competent competitor arrives at the same rules, because they are what the job requires, '
 'and the result is a sector in which good writing is uniform writing.',
 'This convergence predates any of the technology in this book and the technology '
 'accelerates it, for a reason worth understanding. The phrasing that arrives most readily '
 'is the phrasing that is most common in the material the system learned from, which is by '
 'definition the sector’s existing average. Nothing is wrong with the output. It is the '
 'median of the genre, which is exactly what it should be and exactly what makes it '
 'indistinguishable.',
 'The practical response is narrow. Identify the small number of things that are genuinely '
 'yours, protect those specifically, and let everything else converge, because defending '
 'the thirty-seven rules you share with everybody costs effort and buys no distinction. '
 'Arclight found three, and two of the three came from a client remark rather than from '
 'anybody inside the company.',
 'That last point is the one worth generalising. Nobody inside an organisation can hear its '
 'own voice, because everything it does sounds normal from inside. The features that '
 'identify you are the ones somebody outside has noticed and mentioned, and the only '
 'reliable way to find them is to ask, which almost nobody does because it feels like '
 'fishing for compliments and is nothing of the kind.'],
dp1=('Convergence in business writing',
     'Studies of institutional writing commonly report strong convergence of structure and '
     'phrasing within sectors, with distinguishing features concentrated in a small number '
     'of recurring choices.',
     'Source: general discourse-analysis research, 2026. Degree of convergence varies by genre.'),
e_a=[('What is the difference between consistency and a voice?', 'consistency means everything looks as if it came from one place; a voice means somebody can say which'),
     ('Why is convergence structural?', 'because most house-style rules are the right answers that every competent competitor reaches'),
     ('Why does automation accelerate it?', 'because the phrasing that arrives most readily is the sector’s existing average'),
     ('What is the practical response?', 'identify the few things that are genuinely yours and let the rest converge'),
     ('Why can nobody inside hear the voice?', 'because everything the organisation does sounds normal from inside')],
e_b=[('Consistency is worthless.', 'F'),
     ('Most house-style rules are arbitrary preferences.', 'F'),
     ('Convergence began with automation.', 'F'),
     ('Defending shared rules buys distinction.', 'F'),
     ('Two of Arclight’s three features came from clients.', 'T'),
     ('Asking clients what they notice is common practice.', 'F')],

w_model=(
 'Purpose: keep the 3 features that identify Arclight and stop defending the 37 that do '
 'not. Scope: client letters and reminders; internal documents are excluded. Inputs: house '
 'style version 2 and the 5 anonymised letters from the September comparison. Criteria: '
 'the amount appears in the first 2 lines; the phrase "do not hesitate" is never used; the '
 'letter closes by saying what happens next rather than offering help; everything else '
 'follows the house style and is not defended as distinctive. Done: 1 revised style note '
 'naming the 3 protected features and marking the rest as shared practice. Fallback: if a '
 'client names a fourth feature they recognise, add it and record who said so.'),
w_fig=figs.split('COMPETENCE AND VOICE',
                 'Shared with everybody — keep, do not defend',
                 ['reference near the top',
                  'the reader’s surname',
                  'under 200 words',
                  'plain statement of the amount'],
                 'Ours — protect specifically',
                 ['the amount in the first two lines',
                  'never "do not hesitate"',
                  'closing with the next step',
                  'anything a client has named']),
w_fig_cap='The left column is the job. The right column is the only part worth an argument.',
w_task='Identify what is genuinely distinctive about your organisation’s writing.',
w_steps=['Collect one document each from you and three competitors.',
         'Remove every name and reference, and ask somebody to identify yours.',
         'List the features that are the same across all four.',
         'List the features that are yours alone, and say which a customer has mentioned.',
         'Decide which of those to protect, and let the rest converge.'],
w_bank=['The following features appear in all … documents: …',
        'The following appear only in ours: …',
        'Of these, … was named by … on …',
        'We will protect … and allow … to follow general practice.',
        'If a client names … , we will …'],
w_check=['Did you test identification with the names removed?',
         'Have you separated what is competent from what is distinctive?',
         'Does any protected feature rest on something a customer actually said?',
         'Have you explicitly released the shared features from being defended?'],

t_title='Tone, brand, and the risk of sounding like everyone else',
t_fig=figs.handover('WHERE A VOICE COMES FROM',
                    ['Write to the house style', 'Produce consistent letters', 'Compare with four competitors'],
                    'A client says which part they notice',
                    'Only the fourth box can tell you what is yours.'),
t_fig_cap='The first three boxes produce competence. The fourth produces the list worth defending.',
t_body=[
 'Test identification before deciding what to protect, because what feels distinctive from '
 'inside almost never is. Collect four documents from four companies, remove the names and '
 'ask somebody to pick yours. If they cannot, you have consistency rather than a voice, and '
 'the distinction matters because the two require different responses.',
 'Then separate the rules that are competence from the ones that are yours. Most of a good '
 'house style is the former: it is what any capable organisation would arrive at, and '
 'defending it as a brand asset wastes effort and makes people cynical about the whole '
 'exercise. Three or four genuine features is a normal result and is not a disappointment.',
 'And find the genuine ones by asking outside, because nobody inside can hear them. The '
 'features that identify you are the ones a customer has mentioned without being prompted, '
 'and the way to discover more of them is to ask what people notice, which costs one '
 'question a year and is almost never asked.'],
t_say=[('Test it: ', 'Remove the names and ask somebody to pick ours out of four.'),
       ('Separate the two: ', 'Thirty-seven rules are competence; three are ours.'),
       ('Ask outside: ', 'What do you notice about the way we write to you?')],
t_bound=('Protecting three features keeps them from drifting; it does not make anybody '
         'notice them. A client who has never remarked on your closing sentence will '
         'continue not to remark on it, however carefully it is defended, and distinctiveness '
         'that nobody perceives is indistinguishable from none.'),
t_a=[('Remove the names and ask somebody to ____________ ours out of four.', 'pick'),
     ('Thirty-seven rules are competence; ____________ are ours.', 'three'),
     ('What do you ____________ about the way we write to you?', 'notice'),
     ('What feels distinctive from inside almost never ____________.', 'is'),
     ('Three or four genuine features is a normal ____________.', 'result'),
     ('Nobody inside can ____________ them.', 'hear')],
t_b_rubric='Say whether each feature is competence or voice, and how you would know.',
t_b=[('The reference number near the top.', 'competence; every competitor does it'),
     ('Never using "do not hesitate".', 'voice; a client noticed and said so'),
     ('Keeping letters under 200 words.', 'competence; three of four competitors do the same'),
     ('Closing with what happens next.', 'partly voice; one of four competitors does it too')],

case=dict(
 title='Decision Clinic · Defend the style, or the three features?',
 brief=[
  'Arclight has a house style of about forty rules, maintained by Fatima, which takes '
  'roughly two hours a month and generates about one disagreement a fortnight.',
  'Victor proposes reducing the defended set to three features and letting the remaining '
  'thirty-seven follow ordinary good practice, on the grounds that they are shared with '
  'every competitor and defending them buys nothing.',
  'Fatima is not opposed to the analysis and is opposed to the consequence. She says that '
  'the thirty-seven are what stop new staff writing badly, and that calling them '
  '"ordinary good practice" will be read as calling them optional.'],
 exhibit=figs.datatable('WHAT THE HOUSE STYLE ACTUALLY DOES',
                        ['Rule group', 'Count', 'Shared with competitors', 'Disagreements a year'],
                        [['structure and placement', '14', '14', '3'],
                         ['wording and register', '11', '10', '19'],
                         ['length and format', '8', '8', '1'],
                         ['the 3 protected features', '3', '0', '2'],
                         ['other', '4', '3', '1']]),
 exhibit_cap='Nineteen of the twenty-six annual disagreements concern wording, which is where the sector agrees most.',
 exhibit_note='The disagreement count comes from Fatima’s own log. It does not record who '
              'was right, only that the question arose.',
 voices=[('Victor Sandoval', 'operations and quality',
          'Nineteen disagreements a year about wording rules that every competitor shares. '
          'We are spending our argument budget on the part of the style that distinguishes '
          'us least.'),
         ('Fatima Zahra', 'client manager',
          'Those nineteen disagreements are how a new writer learns. If I stop defending the '
          'wording rules, the letters get worse within a quarter, and worse is a bigger '
          'problem than undistinguished.'),
         ('Ines Carvalho', 'managing director',
          'Both of those are true, which usually means the disagreement is about the word '
          '"defend" and not about the rules.')],
 steps=[('Find it', 'Where do the disagreements concentrate?'),
        ('Compare it', 'What does defending the shared rules achieve, and what does it not?'),
        ('Infer it', 'Why does Ines think they are arguing about a word?'),
        ('Weigh it', 'Teaching new writers against spending effort on undifferentiated rules.'),
        ('Decide', 'What is protected, what is taught, and what is let go?')],
 analysis=[('Find it. Where are most disagreements?', 'in wording and register, nineteen of twenty-six'),
           ('Compare it. What do the shared rules achieve?', 'they keep the writing competent and teach new staff'),
           ('Infer it. What distinction is being missed?', 'between a rule worth teaching and a feature worth defending as distinctive'),
           ('Weigh it. What would dropping the wording rules cost?', 'worse letters within a quarter, by Fatima’s estimate'),
           ('Decide. What arrangement keeps both?', 'keeping all forty as standards, and marking only three as distinctive')],
 decision='Write the note that goes to the team.',
 decision_steps=['Say what changes and what does not, in the first two sentences.',
                 'Name the three distinctive features and say how they were identified.',
                 'Say what status the other rules have, in words that do not mean optional.',
                 'Say how a new feature gets onto the distinctive list.'],
 bank=['Nothing in the house style becomes optional.',
       'Three features are marked distinctive, because …',
       'The remaining … remain … , which means …',
       'A feature joins the distinctive list when …',
       'Fatima continues to …'],
 outcome='All forty rules stayed in force and three were marked, in the document itself, as '
         'features a client had named. Fatima’s maintenance work was unchanged. The marking '
         'had an effect nobody predicted: two new staff asked how the three had been '
         'identified, and the answer led to the annual question being added, which produced '
         'a fourth feature within the year — a client who said that Arclight is the only '
         'supplier that puts the next action in the last line.',
 outcome_q=[('Why did the disagreement dissolve?', 'because the two were arguing about the status of the rules, not about whether to keep them'),
            ('What did marking the three produce?', 'a question from new staff that led to a fourth feature being found')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Give us a distinctive voice',
 task=['This is the brief Ines wrote after the five-letter experiment, in the twenty minutes '
       'after Victor showed her the result.',
       'It asks for distinctiveness, which is the right ambition, and it asks the people '
       'inside the company to supply it, which is the one group that cannot hear it.'],
 draft=['We need our written communication to be more distinctive.',
        'Work out what makes us different and build on it.',
        'Make sure it still sounds professional.',
        'Avoid anything that competitors are already doing.',
        'Keep what is working and change what is not.',
        'Bring me something to look at next month.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief asking a company to identify a voice it cannot hear from inside.',
 asked=['Blind identification against competitors',
        'Features named by people outside',
        'Shared rules explicitly released from defence'],
 back=['A workshop producing invented differences',
       'Three features nobody outside had noticed',
       'A longer house style, defended harder'],
 gap='"Work out what makes us different" asks the inside to judge, "sounds professional" and '
     '"what is working" name no test, and "avoid what competitors do" would delete the '
     'thirty-seven rules that constitute competence.',
 back_cap='A workshop, a longer document, and no evidence that anybody outside could tell.',
 back_note='The first attempt produced four new "voice principles". None had been mentioned '
           'by any client, and a repeat of the blind test six months later produced the same '
           'three correct guesses out of eleven.',
 diagnosis=[('[1] "more distinctive" — distinctive to whom, tested how?', 'unstated criterion'),
            ('[2] "what makes us different" — judged by whom?', 'ambiguous referent'),
            ('[3] "still sounds professional" — by what measure?', 'unstated criterion'),
            ('[4] "anything competitors are already doing" — including the right answers?', 'hidden assumption'),
            ('[5] "keep what is working" — working at what?', 'ambiguous referent'),
            ('[6] "something to look at" — judged by you, from inside?', 'hidden assumption')],
 rewrite='Rewrite the brief so that distinctiveness is tested blind, judged from outside, '
         'and separated from the rules that constitute ordinary competence.',
 scaffold=['Why a company cannot identify its own voice from inside',
           'Which documents are compared, and against whose',
           'The five anonymised letters and the current house style',
           'How identification is tested, and who judges it',
           'The list of shared features and the list of distinctive ones',
           'What to do if no feature can be identified at all'],
 bank=['Establish … so that … rather than …',
       'Compare … against … competitors in the same …',
       'Work from … and house style version …',
       'Test identification by … ; the judges must be …',
       'Return 1 list of … and 1 list of … , by …',
       'If no feature can be identified, …'],
 check=['Is identification tested blind rather than asserted?',
        'Are the judges outside the company?',
        'Are shared rules separated from distinctive ones rather than deleted?',
        'Is there an instruction for the case where nothing distinctive is found?'],
 model=['Establish which features of our writing a reader outside the company could actually use to identify us',
        'Client letters and reminders; internal documents and proposals are excluded',
        'The 5 anonymised letters from the September comparison and house style version 2',
        'Test identification blind, with every name, address and reference removed, judged by at least 8 people outside the writing team including 2 clients; separate the features shared with all 4 competitors from those appearing only in ours',
        '1 list of shared features and 1 list of distinctive ones, each marked with whether a client has ever mentioned it, by 30 November',
        'If no feature can be identified at a rate better than chance, record that finding and make no changes rather than inventing a difference'],
 cost='1 workshop producing 4 invented voice principles, none of them mentioned by any '
      'client, a house style 9 rules longer, and a repeat blind test 6 months later scoring '
      'exactly the same as the first.'),

rev_fig=figs.split('PLAIN AND CLEFT',
                   'Plain — even emphasis',
                   ['We check every outbound letter.',
                    'A person releases the queue.',
                    'The amount goes in the first lines.',
                    'Fatima noticed the four letters.'],
                   'Cleft — one element foregrounded',
                   ['What we do is check every letter.',
                    'It is a person who releases it.',
                    'What matters is where the amount goes.',
                    'It was Fatima who noticed.']),
rev_fig_cap='Use a cleft when there is an alternative to push against. Otherwise it only delays.',
rev=dict(
 read=[('Consistency differs from a voice in that a voice', ['is prettier', 'lets somebody identify the source', 'is shorter', 'is formal'], 1),
       ('A what-cleft takes', ['a plural verb', 'a singular verb', 'no verb', 'the past tense'], 1),
       ('Most house-style rules are', ['arbitrary', 'the right answers everybody reaches', 'distinctive', 'legal'], 1),
       ('In the Clinic, what happened to the forty rules?', ['thirty-seven dropped', 'all kept, three marked', 'all dropped', 'nine added'], 1)],
 listen_text='Test identification before you decide what to protect, because what feels '
             'distinctive from inside almost never is. Take four documents from four '
             'companies, remove the names and ask somebody to pick yours. Then separate the '
             'rules that make you competent from the ones that make you identifiable, and '
             'find the second kind by asking outside, because nobody inside can hear them.',
 listen=[('Test ____________ before you decide what to protect.', 'identification'),
         ('Remove the names and ask somebody to ____________ yours.', 'pick'),
         ('Separate the rules that make you competent from the ones that make you ____________.', 'identifiable'),
         ('Nobody inside can ____________ them.', 'hear')],
 speak=['Read a short piece of your organisation’s writing aloud. Your partner says what identifies it.',
        'If nothing does, decide together whether that matters.'],
 write='List the features of your writing that are competence and the ones that are yours.',
 vocab=[('A feature so characteristic that it identifies the source is a ____________.', 'signature'),
        ('A thing whose instances are treated as identical is a ____________.', 'commodity'),
        ('Able to be swapped without anybody noticing is ____________.', 'interchangeable'),
        ('Belonging to a whole class with nothing particular about it is ____________.', 'generic'),
        ('The set of words a group habitually uses is its ____________.', 'lexicon')],
 gram=[('____________ we do is check every letter, not sample them.', 'What'),
       ('It ____________ a person who releases the queue, not a rule.', 'is'),
       ('What matters ____________ where the amount goes.', 'is'),
       ('It ____________ Fatima who noticed, not a check.', 'was'),
       ('____________ changed was the opening, not the closing.', 'What')]),

found=['Take four documents from four companies and see whether anybody can pick yours.',
       'List the rules in your house style that every competitor also follows.',
       'Ask one customer what they notice about the way you write to them.',
       'Rewrite one flat sentence as a cleft, and check that it has something to contrast with.'],
end_line='We got consistency, which was what we wanted, and then started calling it a voice.',
end_next='Next: Not Only, But Also',
)
