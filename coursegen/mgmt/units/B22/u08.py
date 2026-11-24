# -*- coding: utf-8 -*-
import figs

U = dict(
num=8, title='Following Up, Sorting Out',
gram='phrasal verbs of service: follow up, sort out, get back to',
ai="answering in the customer's language",
strap='CEFR B2 · Grammar: phrasal verbs of service · AI: answering in the customer’s language',
cando=['use the common phrasal verbs of customer service accurately',
       'separate a phrasal verb from its formal equivalent and choose between them',
       'answer in the vocabulary the customer used rather than my own',
       'say what is lost when a customer’s words are translated into company words',
       'decide when answering in another language requires a speaker of it'],
hero=('THE WORD A CLIENT USED FOR NINE MONTHS',
      ['They called it the manifest. We called it the schedule.',
       'Both of us were right and nobody noticed for nine months.'],
      [(900, 'orange', 'long'), (1640, 'grey', 'short'), (2380, 'blue', 'long')]),
hero_cap='Answering in the customer’s language starts long before any other language is involved.',

warm=['What does your organisation call something that customers call by another name?',
      'What is the difference between "sort it out" and "resolve it"?',
      'When would you want an answer in your own words rather than in a company’s?'],
read=[
 'Samuel Boateng’s business calls the list of shipments on a given day the manifest. '
 'Arclight has always called it the schedule, because that is what the file is named and '
 'what the software calls it. For nine months both parties used their own word, each '
 'understood the other, and nothing went wrong at all.',
 'What went wrong, when it eventually did, was small and instructive. A stand-in at '
 'Arclight replied to a query about "the manifest for the 14th" with an answer about the '
 'schedule, and the client’s own customer, reading the reply, asked what a schedule was and '
 'whether it was the same document.',
 'The incident produced a rule that Victor regards as among the most useful in the company '
 'and that sounds trivial: answer in the words the customer used. If they wrote manifest, '
 'the reply says manifest. If they wrote invoice number, the reply does not say reference. '
 'If they wrote the site, the reply does not say the delivery location.',
 'The rule is useful for two reasons that are easy to confuse. The obvious one is that it '
 'prevents confusion, which it does. The less obvious one is that it stops a company '
 'quietly insisting on its own vocabulary, which is a small assertion of whose terms the '
 'relationship runs on, repeated several times a week.',
 'The same principle governs the harder case of answering in another language. Arclight '
 'answers in Portuguese for one client and the translations are checked line against line, '
 'which establishes that the content matches. Whether the reply uses the words that client’s '
 'own customers use is a different question, and it is the one that requires somebody who '
 'sells in that market.'],
c_a=[('What does Samuel’s business call the daily shipment list?', 'the manifest'),
     ('What does Arclight call it?', 'the schedule'),
     ('What went wrong?', 'a stand-in answered about the schedule, and the client’s own customer asked what that was'),
     ('State the rule.', 'answer in the words the customer used'),
     ('What is the less obvious reason for the rule?', 'it stops the company quietly insisting on its own vocabulary')],
c_b=[('The two words caused problems from the start.', 'F'),
     ('The stand-in used the client’s word.', 'F'),
     ('The rule is that the reply uses the customer’s word.', 'T'),
     ('The rule only prevents confusion.', 'F'),
     ('Line-against-line checking establishes that the vocabulary suits the market.', 'F'),
     ('Arclight answers in Portuguese for one client.', 'T')],
c_c=[('That is what the file is ____________.', 'named'),
     ('A ____________ at Arclight replied to a query.', 'stand-in'),
     ('Whether it was the same ____________.', 'document'),
     ('A small assertion of whose ____________ the relationship runs on.', 'terms'),
     ('Repeated several times a ____________.', 'week'),
     ('Somebody who ____________ in that market.', 'sells')],
c_d=[('The two words coexisted for nine months with ( no / constant ) trouble.', ['no', 'constant'], 0),
     ('The confusion arose when', ['the client changed words', 'a third party read the reply', 'the file was renamed', 'a translation failed'], 1),
     ('The less obvious benefit of the rule is that it', ['saves time', 'stops the company insisting on its own vocabulary', 'shortens replies', 'is cheaper'], 1),
     ('Line-against-line checking establishes', ['market fit', 'that the content matches', 'tone', 'nothing'], 1),
     ('Whose words does the reply use?', ['the company’s', 'the customer’s', 'the software’s', 'the market’s'], 1)],
c_e=('Phrasal verb or formal equivalent? Put each one in the right column.',
     [('We will look into it.', 'Phrasal'),
      ('We will investigate it.', 'Formal'),
      ('I will get back to you.', 'Phrasal'),
      ('I will respond to you.', 'Formal'),
      ('We will sort it out.', 'Phrasal'),
      ('We will resolve it.', 'Formal')],
     ['Phrasal', 'Formal']),

v_fig_title='THE VERBS OF SERVICE',
v_fig=[('people', 'get back to'), ('doc', 'look into'), ('truck', 'chase up'),
       ('scale', 'sort out'), ('note', 'pass on'), ('chart', 'follow through')],
v_fig_cap='Six of the twenty verbs this unit is made of, and the ones clients use most.',
vocab=[
 ('follow through', 'to carry something on to its completion rather than stopping part way'),
 ('sort out', 'to put a confused or faulty situation right'),
 ('get back to', 'to return to somebody with an answer at a later point'),
 ('chase up', 'to pursue something that has not arrived when it should have'),
 ('pass on', 'to give a message or a task to the next person who needs it'),
 ('look into', 'to examine something in order to find out what happened'),
 ('deal with', 'to take the action a situation requires'),
 ('put through', 'to connect a caller to the person they need'),
 ('take up', 'to begin dealing with a matter somebody has raised'),
 ('carry out', 'to perform something that has been decided or ordered'),
 ('see to', 'to attend to something personally'),
 ('clear up', 'to remove a misunderstanding or an outstanding item'),
 ('draw up', 'to prepare a formal document'),
 ('go through', 'to examine something item by item'),
 ('set out', 'to present something in an organised and explicit way'),
 ('hold on', 'to wait briefly without ending the conversation'),
 ('call back', 'to telephone somebody again, usually as promised'),
 ('pick up on', 'to notice something and respond to it'),
 ('run through', 'to go over something quickly for confirmation'),
 ('bear with', 'to be patient with somebody for a short period')],
v_a=[('To pursue something that has not arrived is to ____________ it.', 'chase up'),
     ('To examine something item by item is to ____________ it.', 'go through'),
     ('To notice something and respond to it is to ____________ it.', 'pick up on'),
     ('To present something explicitly and in order is to ____________ it.', 'set out'),
     ('To remove a misunderstanding is to ____________ it.', 'clear up'),
     ('To carry something on to completion is to ____________.', 'follow through'),
     ('To attend to something personally is to ____________ it.', 'see to'),
     ('To go over something quickly for confirmation is to ____________ it.', 'run through')],
v_b=[('To get back to somebody is to return', 'with an answer at a later point.'),
     ('To put a caller through is to connect them', 'to the person they need.'),
     ('To draw up a document is to prepare it', 'in a formal shape.'),
     ('To bear with somebody is to be patient', 'for a short period.'),
     ('To take up a matter is to begin dealing with it', 'after somebody has raised it.')],

g_title='Grammar: phrasal verbs of service',
g_rule=['Many are separable: sort it out, chase it up, clear it up, pick it up.',
        'Some are not: look into it, deal with it, see to it, get back to you.',
        'A pronoun object always comes before the particle in a separable verb: sort it out.',
        'The phrasal verb is usually warmer than its single-word equivalent, and less precise.'],
g_fig=('LOOSE',
       ['We will resolve the matter.',
        'We shall investigate.',
        'A response will follow.',
        'The issue will be addressed.'],
       'PRECISE',
       ['We will sort it out by Thursday.',
        'I will look into it this afternoon.',
        'I will get back to you by 16:00.',
        'I will chase it up with the supplier.'],
       'formal, impersonal and undated',
       'warmer, and with a person and a time in it'),
g_fig_cap='The phrasal version usually comes with a person attached. That is most of why clients prefer it.',
g_a=[('We will sort ____________ out by Thursday. (it)', 'it'),
     ('I will look ____________ it this afternoon. (into)', 'into'),
     ('I will get back ____________ you by four. (to)', 'to'),
     ('I will chase ____________ up with the supplier. (it)', 'it'),
     ('Could you pass ____________ on to Fatima? (it)', 'it'),
     ('I will see ____________ it personally. (to)', 'to'),
     ('Let us run ____________ the figures again. (through)', 'through'),
     ('Would you bear ____________ me for a moment? (with)', 'with'),
     ('She picked ____________ on the discrepancy at once. (up)', 'up')],
g_b=[('We will sort ( out it / it out ) by Thursday.', ['out it', 'it out'], 1),
     ('I will look ____ it this afternoon.', ['at into', 'into', 'in', 'over into'], 1),
     ('Could you pass ____ to Fatima?', ['on it', 'it on', 'it to on', 'on'], 1),
     ('I will get ____ you by four.', ['back at', 'back to', 'back for', 'to back'], 1),
     ('Would you ____ me for a moment?', ['bear with', 'bear on', 'bear to', 'bear up'], 0),
     ('She ____ the discrepancy at once.', ['picked on up', 'picked up on', 'picked on', 'picked up'], 1)],

d1=dict(title='The manifest and the schedule',
        fig=(['They asked about the manifest.', 'I answered about the schedule.'],
             ['Same document.', 'Their customer did not know that.']),
        cap='Victor and a stand-in, after the query.',
        lines=[('Victor', 'The client asked about the manifest for the fourteenth and you replied about '
                          'the schedule.'),
               ('Stand-in', 'They are the same document. The file is called the schedule.'),
               ('Victor', 'They are the same document and the client’s own customer read your reply and '
                          'asked what a schedule was.'),
               ('Stand-in', 'So I should have used their word even though ours is the correct one?'),
               ('Victor', 'Neither of them is the correct one. There is a document and two companies call '
                          'it two things, which is the ordinary condition of business.'),
               ('Stand-in', 'Then why does it matter which I use?'),
               ('Victor', 'Because the reply gets forwarded. Yours went to somebody who had never heard '
                          'our word and had to ask whether two documents existed.'),
               ('Stand-in', 'That is a narrow problem.'),
               ('Victor', 'It is a narrow problem and it is also a habit. Using our word every time is '
                          'a small insistence that the relationship runs on our terms.'),
               ('Stand-in', 'I would not have described it that way and I can see that somebody might.'),
               ('Victor', 'Somebody did. Samuel mentioned it about four months ago, lightly, and nobody '
                          'wrote it down.'),
               ('Stand-in', 'Then the rule is cheap. I will use whatever word they used.')],
        a=[('What did the client ask about?', 'the manifest for the fourteenth'),
           ('What did the stand-in answer about?', 'the schedule'),
           ('Why does Victor say neither word is correct?', 'because two companies call one document two things, which is ordinary'),
           ('Why does it matter which word is used?', 'because the reply gets forwarded to somebody who has not heard the other word'),
           ('Who had mentioned it before?', 'Samuel, about four months earlier, lightly')],
        b=[('The file is called the ____________.', 'schedule'),
           ('The reply gets ____________.', 'forwarded'),
           ('A small insistence that the relationship runs on our ____________.', 'terms'),
           ('Nobody wrote it ____________.', 'down')]),
d2=dict(title='Correct, and not their words',
        fig=(['The Portuguese is accurate.', 'Line for line.'],
             ['And the words?', 'Not the ones they use.']),
        cap='Fatima and a market reader, on a batch of replies.',
        lines=[('Reader', 'The Portuguese is accurate. I have checked it line against line and nothing '
                          'has been added or lost.'),
               ('Fatima', 'But.'),
               ('Reader', 'But four of the twenty use words that nobody in that trade uses. They are '
                          'correct Portuguese and they are not the Portuguese of this business.'),
               ('Fatima', 'Give me one.'),
               ('Reader', 'The word for delivery note. Yours is the dictionary word. Their customers '
                          'all use a different one, which is shorter and slightly informal.'),
               ('Fatima', 'Does the dictionary word cause confusion?'),
               ('Reader', 'It causes a half-second of recognition rather than none. Twenty times a '
                          'week, with people who are busy.'),
               ('Fatima', 'That is not a complaint anybody would ever make.'),
               ('Reader', 'Nobody will ever complain about it. They will form a view about where the '
                          'letter came from, and they will be right.'),
               ('Fatima', 'Which is exactly what the English version of this problem does.'),
               ('Reader', 'It is the same problem. The only difference is that you can hear it in English '
                          'and you cannot hear it in Portuguese.'),
               ('Fatima', 'And we have no way of hearing it except by paying you, which is not a system.')],
        unresolved=True,
        a=[('What did the reader confirm about the Portuguese?', 'that it is accurate line against line'),
           ('What is wrong with four of the twenty?', 'they use correct words that nobody in that trade uses'),
           ('What does the dictionary word cost?', 'a half-second of recognition rather than none, twenty times a week'),
           ('Why will nobody complain?', 'because they will form a view about where the letter came from instead'),
           ('What does Fatima point out at the end?', 'that they can only hear it by paying the reader, which is not a system')],
        b=[('Nothing has been added or ____________.', 'lost'),
           ('Yours is the ____________ word.', 'dictionary'),
           ('A half-second of ____________ rather than none.', 'recognition'),
           ('You can hear it in English and you cannot hear it in ____________.', 'Portuguese')]),

speak=[('Phrasal or formal?',
        ['Student A: say four service sentences using formal single verbs.',
         'Student B: rewrite each with a phrasal verb and add a person and a time.',
         'Decide which version you would rather receive, and why.']),
       ('Spoken specification: use their words',
        ['Choose a document or process your organisation names differently from its customers.',
         'Brief aloud a rule about which word a reply uses.',
         'Your partner asks what happens when the customer uses the wrong word for something.']),
       ('Whose vocabulary?',
        ['In pairs, list four things your customers call by names you do not use.',
         'For each, say which word appears in your written replies.',
         'Decide whether changing would cost anything at all.'])],

ext_title='Answer in the words they used',
ext_fig=figs.datatable('FOUR WORDS, TWO COMPANIES',
                       ['The client says', 'Arclight says', 'Which appears in the reply now?'],
                       [['the manifest', 'the schedule', 'manifest'],
                        ['the site', 'the delivery location', 'site'],
                        ['the invoice number', 'the reference', 'invoice number'],
                        ['the run', 'the batch', 'run'],
                        ['everything else', 'the same', '—']]),
ext_fig_cap='Four words, no cost to change, and nine months of a quiet insistence nobody intended.',
ext=[
 'Every organisation develops its own names for things, and the names are usually better '
 'than the ones customers use, because they come from the system, the file name or the '
 'specification. They are also unknown outside the company, and the gap between the two '
 'vocabularies is invisible to the people inside who created it.',
 'For most of the time this costs nothing. Two parties use two words for one document, each '
 'understands the other, and the translation happens silently in both heads. The cost '
 'appears at the moment a reply travels further than the person it was sent to, which with '
 'email is most of the time and is never planned for.',
 'There is a second cost, smaller per occasion and more cumulative. A company that always '
 'answers in its own vocabulary is making a small claim about whose terms the relationship '
 'runs on, several times a week, for years. Nobody ever objects to it, because objecting '
 'would be absurd, and it contributes to a relationship in which the customer is the one '
 'doing the adapting.',
 'The rule that fixes both is cheap: use the words the customer used. If they wrote '
 'manifest, the reply says manifest. This requires no judgement, no list and no training, '
 'and it is one of the very few improvements in this book that costs nothing at all and '
 'can be adopted on a Tuesday.',
 'The same principle extends to answering in another language, where it becomes much harder '
 'to apply and much more expensive to get wrong. A translation can be checked line against '
 'line, which establishes that the content survived. Whether it uses the vocabulary that the '
 'reader’s own trade uses is a separate question, nobody inside the company can hear the '
 'difference, and nobody outside it will ever complain about it.'],
dp1=('Vocabulary alignment',
     'Research in professional communication generally finds that using the recipient’s own '
     'terminology improves comprehension and perceived responsiveness, with the effect '
     'strongest where messages are forwarded beyond the original recipient.',
     'Source: general professional-communication research, 2026. Effects vary by domain.'),
e_a=[('Why are a company’s own names usually better?', 'because they come from the system, the file name or the specification'),
     ('When does the vocabulary gap cost something?', 'when a reply travels further than the person it was sent to'),
     ('What is the second, cumulative cost?', 'a small claim about whose terms the relationship runs on, repeated for years'),
     ('Why is the rule unusual among improvements?', 'because it costs nothing and needs no judgement, list or training'),
     ('What is the separate question in translation?', 'whether the vocabulary is the one the reader’s own trade uses')],
e_b=[('The vocabulary gap is visible to the people inside who created it.', 'F'),
     ('Two parties using two words usually causes immediate trouble.', 'F'),
     ('Customers frequently object to a company’s vocabulary.', 'F'),
     ('The rule requires training and a list.', 'F'),
     ('Line-against-line checking settles the vocabulary question.', 'F'),
     ('Nobody outside will complain about trade vocabulary.', 'T')],

w_model=(
 'Purpose: make a reply usable by whoever it is forwarded to. Scope: all client-facing '
 'replies; internal notes are excluded. Inputs: the client’s own message and, for '
 'Portuguese replies, the trade glossary dated 4 August. Criteria: use the noun the client '
 'used for any document, place or process they named; do not substitute the internal term; '
 'where a reply is in Portuguese, use the glossary term rather than the dictionary term. '
 'Done: 1 reply, using the client’s own nouns. Fallback: if the client’s word is ambiguous '
 'between 2 things we hold, use their word and add our term once in brackets.'),
w_fig=figs.split('WHOSE WORD GOES IN THE REPLY',
                 'Ours — from the system',
                 ['the schedule', 'the delivery location',
                  'the reference', 'the batch'],
                 'Theirs — from the message',
                 ['the manifest', 'the site',
                  'the invoice number', 'the run']),
w_fig_cap='Nothing on the left is wrong. Everything on the right is what the reply says.',
w_task='Write the vocabulary rule for replies at your organisation.',
w_steps=['List four things your customers name differently from you.',
         'Decide which word appears in a reply, and say why.',
         'Write the rule in one sentence that needs no list to apply.',
         'Say what happens when the customer’s word is ambiguous.',
         'Say what happens when the reply is in another language.'],
w_bank=['Use the … the client used for any … they named.',
        'Do not substitute …', 'If the client’s word is ambiguous, …',
        'Where the reply is in … , use …', 'This rule needs no … to apply.'],
w_check=['Can your rule be applied without consulting a list?',
         'Does it say what to do when the customer’s word is ambiguous?',
         'Does it cover replies in another language?',
         'Would it survive a stand-in on their first day?'],

t_title='Answering in the customer’s language',
t_fig=figs.handover('A REPLY THAT TRAVELS',
                    ['The client writes "manifest"', 'We hold a file called "schedule"', 'The reply says "manifest"'],
                    'Their own customer reads it and understands',
                    'The reply is forwarded more often than anybody plans for.'),
t_fig_cap='The fourth box is the one that the vocabulary rule is actually protecting.',
t_body=[
 'Mirror the customer’s nouns, which is the whole of the rule and needs nothing else. If '
 'they wrote manifest, the reply says manifest; if they wrote the site, the reply says the '
 'site. This requires no glossary, survives a stand-in’s first day, and removes an entire '
 'category of confusion at the moment a reply is forwarded to somebody who does not share '
 'your vocabulary.',
 'Notice the second effect as well, because it is the one that accumulates. A company that '
 'always uses its own words is making the customer do the translating, every time, for '
 'years, and nobody will ever say so because saying so would be absurd about a single '
 'instance. Mirroring the vocabulary is a small courtesy repeated often enough to be a '
 'position.',
 'For another language, accept that the rule becomes expensive. Checking a translation line '
 'against line establishes that the content survived, and it says nothing about whether the '
 'words are the ones that trade uses. Nobody in your company can hear the difference and no '
 'customer will complain about it, so the only way to know is to pay somebody who sells '
 'there to read a sample.'],
t_say=[('Mirror the noun: ', 'They wrote manifest, so the reply says manifest.'),
       ('Refuse the substitution: ', 'Do not replace their word with the file name.'),
       ('Admit the limit: ', 'Line-against-line checking says nothing about trade vocabulary.')],
t_bound=('Mirroring vocabulary makes a reply readable in the customer’s terms; it does not '
         'make the reply correct, and it will faithfully reproduce a customer’s own '
         'mistaken word for something, which can carry an error further rather than '
         'catching it.'),
t_a=[('They wrote manifest, so the reply says ____________.', 'manifest'),
     ('Do not replace their word with the ____________ name.', 'file'),
     ('Line-against-line checking says nothing about ____________ vocabulary.', 'trade'),
     ('This requires no ____________ and survives a stand-in’s first day.', 'glossary'),
     ('A company that always uses its own words makes the customer do the ____________.', 'translating'),
     ('The only way to know is to pay somebody who ____________ there.', 'sells')],
t_b_rubric='Say which word the reply should use, and why.',
t_b=[('Client writes "manifest"; our file is "schedule".', 'manifest, because the reply may be forwarded to somebody who has never seen our word'),
     ('Client writes "the site"; we say "delivery location".', 'the site, for the same reason, and at no cost'),
     ('Client writes "the invoice" for a credit note.', 'use their word once, then add ours in brackets, because the two are different documents'),
     ('Reply in Portuguese for a trade with its own term.', 'the trade term, which requires somebody who sells in that market to confirm')],

case=dict(
 title='Decision Clinic · Who reads the Portuguese vocabulary?',
 brief=[
  'Arclight sends about four hundred Portuguese replies a month for one client. The '
  'translations are checked line against line by a reviewer in Lisbon for about 600 euros a '
  'month, which establishes that content matches.',
  'A market reader has sampled sixty replies and found that four in twenty use correct but '
  'non-trade vocabulary. Correcting the glossary would take about four hours once, and '
  'keeping it current would take about one hour a month.',
  'The client has not complained, has not mentioned it, and would not be expected to, since '
  'their own customers would not raise it either.'],
 exhibit=figs.datatable('SIXTY SAMPLED PORTUGUESE REPLIES',
                        ['', 'Count', 'Content correct?', 'Trade vocabulary?'],
                        [['fully correct', '48', 'yes', 'yes'],
                         ['dictionary word used', '12', 'yes', 'no'],
                         ['content error', '0', '—', '—'],
                         ['client complaints', '0', '—', '—'],
                         ['their customers’ complaints', '0', '—', '—']]),
 exhibit_cap='Twelve of sixty use a word the trade does not. Nobody has complained about any of them.',
 exhibit_note='The twelve concern four distinct terms. A glossary of those four would cover '
              'all twelve and would need occasional updating.',
 voices=[('Fatima Zahra', 'client manager',
          'Four hours and an hour a month, for four terms. I cannot see what the argument '
          'against it is.'),
         ('Kenji Watanabe', 'finance',
          'The argument is that we are about to build and maintain a glossary for a problem '
          'with zero recorded complaints, and that there will be a second language next '
          'year, and a third.'),
         ('Marta Olsen', 'risk and liability',
          'The absence of complaints is not evidence here and we established that two books '
          'ago. Nobody complains that a letter reads as foreign. They form a view and we '
          'never hear it.')],
 steps=[('Find it', 'How many sampled replies used non-trade vocabulary, and across how many terms?'),
        ('Compare it', 'What does the line-against-line check establish, and what does it not?'),
        ('Infer it', 'Why is the absence of complaints weak evidence?'),
        ('Weigh it', 'Five hours in the first month against an effect nobody will report.'),
        ('Decide', 'What is built, and what happens when a second language arrives?')],
 analysis=[('Find it. How many terms account for the twelve?', 'four'),
           ('Compare it. What does the Lisbon check not cover?', 'whether the vocabulary is the one the trade uses'),
           ('Infer it. Why does Marta say complaints prove nothing?', 'because nobody complains that a letter reads as foreign; they form a view instead'),
           ('Weigh it. What is Kenji really worried about?', 'the precedent, and the cost when a second and third language arrive'),
           ('Decide. What rule covers the second language in advance?', 'a glossary is built only where volume exceeds a stated threshold')],
 decision='Write the rule for trade vocabulary in another language.',
 decision_steps=['Say what is built for Portuguese, and what it costs.',
                 'Say who maintains it and how often.',
                 'Say what triggers a glossary for a new language.',
                 'Say what happens below that threshold.'],
 bank=['For … , a glossary of … terms is built, costing …',
       '… maintains it … ', 'A glossary is built for a new language when …',
       'Below that threshold, …', 'This is reviewed when …'],
 outcome='A four-term glossary was built for Portuguese and a threshold set: a glossary is '
         'built where a language exceeds a hundred replies a month, and below that a market '
         'reader samples twenty replies twice a year. Spanish arrived eight months later at '
         'about thirty replies a month and took the sampling route, which cost 180 euros a '
         'year. The Portuguese glossary has been updated three times, twice because the '
         'client’s own vocabulary changed rather than the trade’s.',
 outcome_q=[('Why was a threshold better than deciding each language separately?', 'because it settles the next case in advance instead of repeating the argument'),
            ('What did the glossary updates reveal?', 'that the client’s own vocabulary changed more often than the trade’s')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Reply to client queries',
 task=['This is the standing brief for replying to client queries, which has been in use '
       'since the second year and which produced the manifest incident.',
       'It is about tone, speed and accuracy, all of which it handles well. It says nothing '
       'about vocabulary, because nobody inside a company notices their own.'],
 draft=['Reply to client queries promptly and helpfully.',
        'Use clear language and avoid jargon.',
        'Refer to documents by their proper names.',
        'Keep the tone consistent with the house style.',
        'Make sure the answer is complete.',
        'Aim to resolve things in one exchange where you can.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Line three is the one that caused it, and it was written to prevent confusion.',
 asked=['The client’s own nouns mirrored',
        'A rule for an ambiguous client word',
        'Trade vocabulary for other languages'],
 back=['Internal file names used throughout',
       'One document described as two',
       'Dictionary Portuguese in 12 of 60 replies'],
 gap='"Their proper names" means the names in our system, "avoid jargon" removes the '
     'customer’s own trade words as readily as ours, and nothing anywhere says whose '
     'vocabulary a reply belongs to.',
 back_cap='A reply that was prompt, clear, accurate and in the wrong company’s words.',
 back_note='The instruction that caused the problem was written to prevent exactly this kind '
           'of confusion, which is why it survived for two years unexamined.',
 diagnosis=[('[1] "client queries" — from the client, or forwarded onward?', 'unscoped set'),
            ('[2] "avoid jargon" — whose jargon, theirs or ours?', 'ambiguous referent'),
            ('[3] "their proper names" — proper according to whom?', 'ambiguous referent'),
            ('[4] "complete" — complete to what level of detail?', 'unbounded quantity'),
            ('[5] "resolve in one exchange where you can" — how many attempts?', 'unbounded quantity'),
            ('[6] "clear language" — clear to the reader or to the next reader?', 'unscoped set')],
 rewrite='Rewrite the brief so that a reply uses the client’s own nouns and remains usable '
         'when it is forwarded to somebody who has never dealt with Arclight.',
 scaffold=['Why a reply is read by more people than it is sent to',
           'Which replies are covered, and which are excluded',
           'The client’s own message, and the glossary for replies in another language',
           'Whose nouns a reply uses, and what happens when their word is ambiguous',
           'What a finished reply looks like',
           'What to do when the reply is in a language nobody here reads'],
 bank=['Reply so that … can read it without …',
       'Cover … ; exclude …', 'Work from the client’s own … and …',
       'Use the … the client used; do not substitute …',
       'Return … .', 'If the client’s word is ambiguous, …'],
 check=['Does the brief say whose vocabulary a reply uses?',
        'Does it handle the forwarded reader?',
        'Is there a rule for an ambiguous client word?',
        'Does it cover replies in a language nobody in the office reads?'],
 model=['Produce replies that remain usable when they are forwarded to somebody who has never dealt with us',
        'All client-facing replies; internal notes and supplier correspondence are excluded',
        'The client’s own message, and for Portuguese replies the trade glossary dated 4 August',
        'Use the noun the client used for any document, place or process they named, and do not substitute the internal term; where a reply is in Portuguese, use the glossary term rather than the dictionary term',
        '1 reply using the client’s own nouns, sent the same working day',
        'If the client’s word is ambiguous between 2 things we hold, use their word and add ours once in brackets at first mention'],
 cost='9 months of replies in Arclight’s vocabulary, 1 client’s customer asking whether two '
      'documents existed, and 12 of 60 Portuguese replies using words that trade does not.'),

rev_fig=figs.split('PHRASAL AND FORMAL',
                   'Phrasal — warmer, with a person',
                   ['I will look into it this afternoon.',
                    'I will get back to you by four.',
                    'We will sort it out by Thursday.',
                    'I will chase it up with the supplier.'],
                   'Formal — cooler, often undated',
                   ['The matter will be investigated.',
                    'A response will follow.',
                    'The issue will be resolved.',
                    'The supplier will be contacted.']),
rev_fig_cap='The right-hand column has no person in it, which is most of why it reads as it does.',
rev=dict(
 read=[('The rule in this unit is to use', ['the company’s words', 'the words the customer used', 'formal vocabulary', 'the file name'], 1),
       ('In a separable phrasal verb, a pronoun object goes', ['after the particle', 'before the particle', 'at the end', 'nowhere'], 1),
       ('The cost of the vocabulary gap appears when', ['the client writes', 'a reply is forwarded', 'a file is renamed', 'volume rises'], 1),
       ('In the Clinic, what was set for new languages?', ['a glossary each', 'a volume threshold', 'nothing', 'a ban'], 1)],
 listen_text='Mirror the customer’s nouns and the rule is finished. If they wrote manifest, '
             'the reply says manifest, because the reply gets forwarded to somebody who has '
             'never seen your file names. And notice the second effect: a company that always '
             'uses its own words is making the customer do the translating, every time, for '
             'years, and nobody will ever mention it.',
 listen=[('Mirror the customer’s ____________.', 'nouns'),
         ('The reply gets ____________ to somebody who has never seen your file names.', 'forwarded'),
         ('Making the customer do the ____________.', 'translating'),
         ('Nobody will ever ____________ it.', 'mention')],
 speak=['Name three things your customers call by other names. Your partner asks which appears in your replies.',
        'Decide what changing would cost.'],
 write='Write a vocabulary rule that needs no glossary and survives a stand-in’s first day.',
 vocab=[('To pursue something that has not arrived is to ____________ it.', 'chase up'),
        ('To examine something item by item is to ____________ it.', 'go through'),
        ('To notice something and respond to it is to ____________ it.', 'pick up on'),
        ('To remove a misunderstanding is to ____________ it.', 'clear up'),
        ('To carry something on to completion is to ____________.', 'follow through')],
 gram=[('We will sort ____________ out by Thursday.', 'it'),
       ('I will look ____________ it this afternoon.', 'into'),
       ('I will get back ____________ you by four.', 'to'),
       ('Could you pass ____________ on to Fatima?', 'it'),
       ('Would you bear ____________ me for a moment?', 'with')]),

found=['List four things your customers call by names you do not use.',
       'Check which word appears in your last ten replies.',
       'Find a reply of yours that was forwarded, and read it as the third reader.',
       'Ask whether anybody in your organisation can hear your foreign-language vocabulary.'],
end_line='Both companies were right, and the reply was forwarded to somebody who was not in the conversation.',
end_next='Next: What We Recommend',
)
