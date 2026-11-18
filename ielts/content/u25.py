# -*- coding: utf-8 -*-
"""Unit 25 - Technology and Privacy. IELTS Volume 3, band 6.0."""

_REC = dict(kind='device', teaches='device',
            title='How a recommendation system builds a profile',
            sub='the components, and the path a single click takes through '
                'them',
            parts=[('act', 0.02, 0.02, 0.25, 0.17, 'Actions you take'),
                   ('log', 0.02, 0.29, 0.25, 0.17, 'Event log'),
                   ('feat', 0.37, 0.15, 0.26, 0.17, 'Feature store'),
                   ('inf', 0.72, 0.02, 0.26, 0.17, 'Inferred traits'),
                   ('rank', 0.72, 0.29, 0.26, 0.17, 'Ranking model'),
                   ('shown', 0.37, 0.56, 0.26, 0.17, 'What you are shown'),
                   ('resp', 0.02, 0.56, 0.25, 0.17, 'Your response'),
                   ('ret', 0.37, 0.83, 0.26, 0.17, 'Retained for 24 months')],
            flows=[('act', 'log', 'recorded'),
                   ('log', 'feat', 'summarised'),
                   ('feat', 'inf', 'predicted'),
                   ('inf', 'rank', 'used as input'),
                   ('rank', 'shown', 'ordered'),
                   ('shown', 'resp', ''),
                   ('resp', 'log', 'fed back'),
                   ('log', 'ret', 'stored')])

UNIT = dict(
 n=25, vol=3, level='B2', band='6.0',
 theme='Technology and Privacy',
 opener=(
   'A privacy notice, a request to have your data deleted, and a diagram of '
   'the machine that decides what you see. The unit ends on two things most '
   'courses leave out: why a file with the names removed is often not '
   'anonymous, and why a law written about files struggles with a system that '
   'produces guesses.'),

 field='privacy',
 unitmap=dict(kind='unitmap', teaches='navigation', n=25,
              theme='Technology and Privacy',
              rows=[('Data and your rights',
                     'Reading for one detail against the clock',
                     'Multiple choice · sentence completion · note '
                     'completion · Parts 1-2'),
                    ('What people will trade',
                     'Task 2: the opinion essay is not the discussion '
                     'essay',
                     'Yes/No/Not Given · matching features · Part 2'),
                    ('What a profile is built from',
                     'Task 1: a process, and the verbs it needs',
                     'True/False/Not Given · matching information · '
                     'plan labelling · Task 1 Academic'),
                    ('Why anonymised data is not anonymous',
                     'Task 2 planning: generate, then discard',
                     'Matching headings · Yes/No/Not Given · Part 4'),
                    ('Whether rules can keep up',
                     'Task 2: one paragraph, one job',
                     'Matching information · Yes/No/Not Given · Task '
                     '2')],
              note='This is the last unit of the first half of the '
                   'book and the one that gathers the writing strand: '
                   'cycle 2 sorts the question types, cycle 4 plans, '
                   'cycle 5 builds the paragraph. The reading skills '
                   'are revision at speed, which is what they should '
                   'be by unit 25.'),
 sceneintro='Eight things from the apparatus that watches people, and '
            'the words for them. Six are used in cycle 1 and five come '
            'back in cycle 3, where the subject is how they are joined '
            'together.',
 scene=dict(kind='scene', teaches='activate',
            title='Unit 25 · the apparatus',
            instr='Write the number of each thing beside its word. Two '
                  'words in the bank are not in the picture.',
            cells=[('brief', 'privacy notice'),
                   ('laptop', 'subject access request'),
                   ('clock', 'retention period'),
                   ('people', 'data controller'),
                   ('chart', 'profile'),
                   ('cpu', 'inferred data'),
                   ('envelope', 'breach notification'),
                   ('note', 'consent record')],
            bank=['privacy notice', 'subject access request',
                  'retention period', 'data controller', 'profile',
                  'inferred data', 'breach notification',
                  'consent record', 'regulator', 'third party'],
            answers=['privacy notice', 'subject access request',
                     'retention period', 'data controller', 'profile',
                     'inferred data', 'breach notification',
                     'consent record'],
            note='Answers: 1 privacy notice · 2 subject access '
                 'request · 3 retention period · 4 data controller · '
                 '5 profile · 6 inferred data · 7 breach notification '
                 '· 8 consent record. Not in the picture: regulator, '
                 'third party.'),
 puzzle=dict(kind='puzzle', teaches='curiosity',
             title='What people say, and what people do',
             question='The same people were asked how much they cared '
                      'about privacy and then watched while they chose. '
                      'Which bar is what they said?',
             bars=[('Said they cared', 82), ('Read the notice', 11),
                   ('Changed a setting', 17), ('Refused cookies', 23),
                   ('Paid to avoid ads', 4)],
             mark=0, ylab='% of the same 2,000 people',
             note='Cycle 2 is about this gap and about the three '
                  'explanations for it, only one of which is '
                  '"people are hypocrites". Write your guess in the '
                  'margin before you read.'),
 cycles=[
  dict(
   sub='Data and your rights',
   step=1,
   notes=dict(
    serves='Multiple choice and sentence completion, Reading Parts '
           '1-2; note completion in Listening Parts 1-2',
    because='By unit 25 the reading sub-skills are known and the thing '
            'that is still lost is time: candidates read a 230-word '
            'notice three times for four questions, which at the pace '
            'of the real paper is a third of Part 1 gone',
    skill='Finding one stated detail in a dense document without '
          'reading the document',
    evidence='The speed page measures 190 to 210 words a minute; Part '
             '1 gives about seventeen minutes for two texts and '
             'thirteen questions, so a text read three times cannot '
             'fit',
    watch='Learners will read the privacy notice from the top. Give '
          'them the four questions first and time both methods on the '
          'same text',
    time='75 minutes, or 55 without the free grammar production'),
   lead=dict(
    title='The document nobody reads',
    body='A privacy notice is the most-presented and least-read '
         'document in the world: eighty-two per cent of people in the '
         'survey at the front of this unit said privacy mattered to '
         'them and eleven per cent had read one. That is not simply '
         'laziness. These documents are long, they are written to be '
         'legally safe rather than clear, and the thing you actually '
         'want from one is almost always a single sentence buried in '
         'the middle. This cycle is about getting that sentence out in '
         'ninety seconds.',
    task='Answer these honestly before you read anything.',
    qs=['When did you last read a privacy notice? What made you?',
        'What would you want to know from one, if you could ask three '
        'questions?',
        'Is consent meaningful when nobody reads what they consent '
        'to?',
        'Should a notice be allowed to be longer than one page?']),
   vocabwork=dict(
    title='The vocabulary of a right and a duty',
    body='Sixteen words from data protection, and the register will be '
         'familiar: it is the same institutional language you met in '
         'unit 21 cycle 1 and unit 23 cycle 1, which is why six of '
         'these words are ones you already have. What is new is that '
         'here the institution owes you something, and the vocabulary '
         'of entitlement is worth having in any language.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='your data, and who holds it',
                sub='cycle 1 · and six of these are from unit 21',
                branches=[('who is who',
                           ['data subject', 'controller', 'processor',
                            'regulator']),
                          ('what you may demand',
                           ['subject access', 'erasure',
                            'rectification', 'portability']),
                          ('what they must do',
                           ['privacy notice', 'retention period',
                            'breach notification', 'lawful basis']),
                          ('how it goes wrong',
                           ['repurpose', 'third party', 'profiling',
                            'inferred data'])],
                note='Inferred data is data about you that nobody '
                     'gave anybody: your likely age, your probable '
                     'income, whether you are moving house. It is the '
                     'category the whole of cycle 3 is about and the '
                     'one the law handles least well.'),
    figure2=dict(kind='family', teaches='word-formation',
                 sub='cycle 1 · and note the two with no verb',
                 rows=[(('con-sent', 2), ('con-sent', 2), '', '', ''),
                       (('e-rase', 2), ('e-ra-sure', 2), '', '', ''),
                       (('pro-cess', 1), ('pro-ces-sing', 1),
                        ('pro-ces-sor', 1), '', ''),
                       (('re-tain', 2), ('re-ten-tion', 2), '', '',
                        ''),
                       (('in-fer', 2), ('in-fe-rence', 1), '',
                        ('in-ferred', 2), '')],
                 note='Consent is both noun and verb with the same '
                      'stress. Infer and inference move the stress, '
                      'and you met that pair in unit 22 cycle 5 where '
                      'the subject was arguing rather than data.'),
    task='Complete each sentence with a word from this cycle, in the '
         'right form.',
    items=[
     ('The organisation that decides why data is held is the '
      '____________.', None, 'controller'),
     ('A demand to see what is held about you is a subject '
      '____________ request.', None, 'access'),
     ('Data about you that nobody supplied is ____________ data.',
      None, 'inferred'),
     ('How long a record may be kept is the ____________ period.',
      None, 'retention'),
     ('The noun from erase is ____________.', None, 'erasure'),
     ('Using data for something it was not collected for is to '
      '____________ it.', None, 'repurpose'),
     ('The person the data is about is the data ____________.',
      None, 'subject'),
     ('The legal reason an organisation may hold it is its lawful '
      '____________.', None, 'basis')]),
   builder=dict(
    skill='Finding one detail without reading the document',
    qkind='skill',
    explain='Part 1 of the Reading paper gives you about seventeen '
            'minutes for two texts and thirteen questions, and the '
            'texts are deliberately dense: a notice, a set of '
            'conditions, a page of regulations. Read one of those '
            'three times and Part 1 is gone. The method is the same '
            'retrieval skill you met in unit 24 cycle 5 and it is '
            'faster here, because these documents are structured. Read '
            'the questions first and note what KIND of thing each '
            'wants - a number, a period, a person, a condition, an '
            'exception. Then look at the document’s own furniture: '
            'headings, bold terms, numbered clauses, the word if, and '
            'the word unless. Almost every question in Part 1 is '
            'answered in a sentence containing if, unless, except, '
            'must, may or within, because those are the words that '
            'make a condition, and a condition is the only thing a '
            'document like this contains worth asking about. Scan for '
            'the word, not for the meaning. Then read one sentence.',
    worked=[
     'QUESTION: how long does the controller have to respond to a '
     'subject access request?',
     'The kind of thing: a period. Scan for within, days, month, and '
     'for digits.',
     'The notice contains “within one calendar month” in clause 7 and '
     '“within 72 hours” in clause 11.',
     'Two candidates in six seconds. Read those two sentences only: '
     'clause 11 is about breaches, clause 7 is about access '
     'requests.',
     'The answer is one calendar month, and the trap is 72 hours, '
     'which is a real period in the same document for a different '
     'duty. You never read clauses 1 to 6 or 8 to 10 at all.'],
    figure=dict(kind='anatomy', teaches='question-anatomy',
                qtype='Multiple choice', sub='cycle 1, question 3',
                stem='A controller must notify the regulator of a '
                     'breach',
                options=['within 72 hours of becoming aware of it',
                         'within one calendar month',
                         'only if individuals are at risk',
                         'before informing the individuals '
                         'concerned'],
                answer=0,
                why='Clause 11 says within 72 hours of becoming aware. '
                    'The phrase of becoming aware is in the clause and '
                    'in the option, and it is what makes A exactly '
                    'right rather than nearly right.',
                trap=(1, 'One calendar month is in the same notice, '
                         'in clause 7, and applies to subject access '
                         'requests. A candidate who scanned for a '
                         'period and stopped at the first one found '
                         'this.'),
                note='Both A and B are periods stated in the document. '
                     'Scanning gets you to the shortlist in seconds; '
                     'the last step is always reading one sentence '
                     'properly.'),
    task='For each question write the KIND of thing and the word you '
         'would scan for.',
    items=[
     ('How long may the data be kept?', None, 'period, retained for'),
     ('Who may make a request on a child’s behalf?',
      None, 'person, on behalf'),
     ('In what circumstances may consent be refused?',
      None, 'condition, unless'),
     ('What must be included in the notification?',
      None, 'list, must include'),
     ('When does the right not apply?', None, 'exception, except'),
     ('How much may be charged for a copy?', None, 'number, fee')],
    note='Five of the six scan words are if, unless, except, must and '
         'within. A document of this kind is almost entirely made of '
         'conditions, and the questions are made out of the same '
         'material, which is why this works.'),
   figures=[
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 1 · six moves the questions make',
         pairs=[('ask to see what is held',
                 'make a subject access request', 'nominalisation'),
                ('tell the regulator', 'notify the supervisory '
                 'authority', 'synonym'),
                ('the company that decides', 'the data controller',
                 'reformulation'),
                ('they may not keep it forever',
                 'a retention period applies', 'negation'),
                ('a copy must be given free',
                 'no fee may be charged', 'voice'),
                ('names, addresses and card numbers',
                 'personal data', 'hypernym')],
         note='The fifth is the pattern worth knowing: a duty in the '
              'question becomes a prohibition in the text, and the '
              'two are the same rule seen from opposite ends.'),
   ],
   advice='In Reading Part 1 read the questions before the text, '
          'always. These are not passages, they are documents, and '
          'nobody reads a document end to end for information - you '
          'look things up in it. The paper is modelling real reading '
          'and candidates who treat it as literature run out of time '
          'in Part 3, which is where the difficult marks are.',
   debrief=dict(
    read=['Question 3 has two periods to choose between and both are '
          'in the notice. The phrase of becoming aware is in the '
          'clause and in the right option.',
     'Question 6 asks what the controller must do and an option '
     'describes what it may do. Must and may are four lines apart in '
     'the same clause.',
     'The gap in question 9 wants the noun and the notice uses the '
     'verb. The word-family table in this cycle has it.'],
    listen=['The caller gives a reference, is asked to confirm it, and '
            'repeats it differently. The second version is the answer, '
            'as always.',
     'Question 13 asks for a period and two are said. The words '
     'either side of the gap say which.']),
   outside='Everything an organisation owes you is written in a '
           'document somebody assumed you would not read, and all of '
           'it is findable in about two minutes if you know to scan '
           'for if, unless, within and must. That is worth more in '
           'ordinary life than almost anything else in this book.',
   recycled=['eligible', 'criteria', 'notify', 'retention', 'risk',
             'liability'],
   read=[
    dict(preview=True,
         heading='Three words from a privacy notice',
         kind='Glossary box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='Two hundred words before four hundred. These three words '
             'decide what everything else in the notice means, and two '
             'of them are not what most people assume.',
         paras=[
          'A data controller is whoever decides why data is collected '
          'and what happens to it. It is not whoever physically holds '
          'it - a company that stores records for somebody else is a '
          'processor and has far fewer duties. When a notice says the '
          'controller is responsible, that is who it means.',
          'Personal data is anything that identifies a living person, '
          'directly or in combination with something else. A postcode '
          'is not personal data; a postcode plus a date of birth often '
          'is, because very few people share both. This is the idea '
          'cycle 4 is built on.',
          'Inferred data is data about a person that nobody supplied: '
          'a guess at their income, their likely health, whether they '
          'are about to move house. It is produced rather than '
          'collected, it is personal data in law, and it is the part '
          'of the system that people are least aware of and that '
          'cycle 3 is about.',
          'The three words are the skeleton of every notice you will '
          'ever meet. The controller is who is liable, personal data '
          'is what the duties attach to, and inferred data is the part '
          'that was never anybody’s to give away.'],
         items=[
          ('Whoever decides why data is collected is the '
           '____________.', None, 'controller',
           'Paragraph 1: a company that merely stores it is a '
           'processor.'),
          ('A postcode plus a date of birth is usually '
           '____________ data.', None, 'personal',
           'Paragraph 2, because very few people share both.'),
          ('Data produced rather than collected is ____________ '
           'data.', None, 'inferred',
           'Paragraph 3, which is what cycle 3 is about.')]),
    dict(heading='How we use your data',
         kind='Privacy notice', task='Multiple choice and sentence completion',
         band='gt_short', qtype='Questions 1-5',
         skill=('A notice of rights is read for the verbs that bind',
                ['Notices of this kind mix three things: what the '
                 'organisation does, what it may do, and what you may '
                 'require it to do.',
                 'Mark the third group as you read. Almost every question '
                 'comes from a sentence containing "you may", "we must" or '
                 '"on request".']),
         paras=[
          'We collect the information you give us when you open an account, '
          'the records of what you buy, and technical data about the device '
          'you use. We also receive information from payment providers, '
          'which we use only to confirm that a transaction completed.',
          'We keep account records for six years after an account closes, '
          'because tax law requires it. Records of browsing on our site are '
          'kept for twenty-four months and are then deleted automatically. '
          'Where you have asked for marketing, we keep that preference until '
          'you withdraw it.',
          'You may ask us at any time for a copy of the information we hold '
          'about you, and we must respond within one calendar month. You may '
          'ask us to correct anything inaccurate, and we must do so without '
          'delay. You may ask us to delete information, and we must comply '
          'unless we are required by law to keep it.',
          'We do not sell your information. We do share it with three '
          'categories of supplier: delivery firms, payment processors and the '
          'company that hosts our website. A current list of those suppliers '
          'is published on this page and is updated each quarter.',
          'If you are unhappy with how we have handled a request, you may '
          'complain to us using the address below, and you may complain to '
          'the national regulator whether or not you have complained to us '
          'first.'],
         items=[
          ('Browsing records are kept for',
           ['one month', 'twenty-four months', 'six years', 'indefinitely'],
           1,
           'Paragraph 2, after which they are deleted automatically.',
           {0: 'Shorter than the period paragraph 2 gives for '
               'browsing.', 2: 'Six years is the retention for account records.', 3: 'Browsing records are deleted automatically after two '
               'years.'}),
          ('Account records are kept for six years because',
           ['of marketing', 'tax law requires it', 'customers ask', 'the supplier requires it'],
           1, 'Paragraph 2, counted from the closing of the account.',
           {0: 'Marketing preferences are kept until withdrawn, '
               'separately.', 2: 'Customer requests are not the reason given in '
               'paragraph 2.', 3: 'Suppliers are listed in paragraph 4 for a different '
               'purpose.'}),
          ('You may complain to the regulator',
           ['only after complaining to the company', 'at any time', 'only within a month', 'only about deletion'],
           1,
           'Paragraph 5: whether or not you have complained to the '
           'company first.',
           {0: 'Paragraph 5 says the two complaints are independent.', 2: 'One month is the time the company has to reply.', 3: 'The right to complain is not limited to deletion.'}),
          ('The company must answer a request for a copy within one '
           '____________ month.', None, 'calendar',
           'Paragraph 3, alongside correcting anything inaccurate without '
           'delay.'),
          ('The supplier list is updated each ____________.', None,
           'quarter',
           'Paragraph 4, which names three categories of supplier.')]),
    dict(heading='Making a subject access request',
         kind='Procedure notice', task='Sentence completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'Decide what you are asking for. A request for everything is '
          'allowed and is usually a mistake, because it produces a large file '
          'in which what you wanted is hard to find. A request naming a date '
          'range and a type of record is answered faster and more usefully.',
          'Send the request in writing to the address on the privacy notice. '
          'You do not have to use a form, you do not have to give a reason, '
          'and you may not be charged, except where a request is repeated '
          'without a change of circumstances.',
          'Expect to be asked to prove who you are. This is lawful and is '
          'the commonest point at which requests stall, usually because the '
          'identity documents are sent to a different address from the one '
          'that asked for them.',
          'The organisation then has one calendar month, extendable to three '
          'where a request is complex. If nothing arrives, write once more '
          'citing the date of your original request, and then complain to '
          'the regulator, which accepts complaints online and does not '
          'charge.'],
         items=[
          ('Name a date range and a ____________ of record.', None, 'type',
           'Paragraph 1, because a request for everything is hard to use.'),
          ('You do not have to give a ____________.', None, 'reason',
           'Paragraph 2, and you may not be charged for a first request.'),
          ('Expect to be asked to prove your ____________.', None,
           'identity',
           'Paragraph 3, which is the commonest point at which requests '
           'stall.'),
          ('The time limit is one month, extendable to ____________ months.',
           None, 'three',
           'Paragraph 4, where a request is complex.')])],
   listen=[
    dict(heading='Making a data request', part='Part 1',
         task='A call to a data protection team · note completion', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Officer', 'Data protection team, Benedikt speaking.'),
          ('Caller', 'Hello. I would like a copy of everything you hold '
           'about me.'),
          ('Officer', 'I can start that. May I say first that everything is '
           'rarely what people want? Last month I sent somebody eleven '
           'hundred pages and they rang back to ask where the complaint '
           'was.'),
          ('Caller', 'That is fair. It is the complaint I made in March that '
           'I want, and whatever was written about it.'),
          ('Officer', 'Then I will scope it to the complaint file and all '
           'internal correspondence from March to today, and I will note '
           'that you asked for everything so that nothing is lost if you '
           'change your mind.'),
          ('Caller', 'Thank you. Do I need to fill in a form?'),
          ('Officer', 'No form and no reason, and there is no charge. What I '
           'do need is proof of identity, which is where most requests get '
           'stuck.'),
          ('Caller', 'What counts?'),
          ('Officer', 'A photograph of a passport or a driving licence, plus '
           'something with your address on it dated in the last three '
           'months. Send both to the email I will give you, not to the '
           'general enquiries address.'),
          ('Caller', 'Why does that matter?'),
          ('Officer', 'Because general enquiries will not forward identity '
           'documents, for good reasons, and the request then sits there. '
           'Half the delays I see are that.'),
          ('Caller', 'How long will it take?'),
          ('Officer', 'One calendar month from the day I have your identity '
           'documents, not from today. If it turns out to be complex I may '
           'extend it to three, and if I do I have to tell you why.'),
          ('Caller', 'And the reference number?'),
          ('Officer', 'S-A-R, then four-nine-two-one. Quote that on '
           'anything you send.')],
         items=[
          ('Reference number: SAR ____________', None, '4921',
           'Which the caller is asked to quote on anything sent.'),
          ('The request is scoped to the ____________ file and internal '
           'correspondence.', None, 'complaint',
           'From March to the date of the call.'),
          ('Proof of address must be dated within the last ____________ '
           'months.', None, 'three',
           'Alongside a passport or driving licence.'),
          ('Identity documents should go to the officer’s email, not to '
           '____________ enquiries.', None, 'general',
           'Which will not forward them, causing half the delays.'),
          ('The month runs from the day the ____________ documents arrive.',
           None, 'identity', 'Rather than from the day of the call.')]),
    dict(heading='A short talk: what people will trade', part='Part 2',
         task='A talk at a consumer research briefing · sentence completion and multiple choice', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'We have run this study for six years, asking people '
           'what they will accept in exchange for data, and the headline '
           'finding has not moved: what people say they will trade and what '
           'they do trade are almost unrelated.'),
          ('Speaker', 'In the survey, ninety per cent say they are '
           'uncomfortable with tracking. In the behavioural part of the same '
           'study, where we offer a small discount for the same tracking, '
           'about seventy per cent accept it. We have stopped calling that '
           'hypocrisy, because the more we look at it the less it looks like '
           'inconsistency and the more it looks like a sensible response to '
           'an impossible calculation.'),
          ('Speaker', 'Here is what I mean. To price a privacy trade you '
           'would need to know what is collected, what can be inferred from '
           'it, who it will be shared with, and what any of that will be '
           'worth to somebody in four years. Nobody has that information, '
           'including the company collecting it. So people fall back on the '
           'one number they can see, which is the discount.'),
          ('Speaker', 'Two findings do hold up. First, people care far more '
           'about who sees the data than about how much is collected. The '
           'same information shared with an insurer provokes four times the '
           'objection it provokes when it stays with the retailer.'),
          ('Speaker', 'Second, and this is the one businesses find '
           'expensive, objection rises sharply when the use is one the person '
           'did not imagine. Nobody minds a shop remembering their size. '
           'Almost everybody minds a shop inferring a pregnancy, and the '
           'second thing follows from the first by a short chain of '
           'arithmetic.'),
          ('Speaker', 'So my practical advice to anybody designing these '
           'systems is to stop asking whether people consent. They do. Ask '
           'instead whether they would have predicted the use, because that '
           'is the question that predicts complaints, and it is also the one '
           'the law is slowly moving towards.')],
         items=[
          (
           'The study\u2019s main finding is that what people say and do '
           'are almost ____________.', None, 'unrelated',
           'Ninety per cent object in the survey; seventy per cent '
           'accept for a discount.'),
          (
           'Pricing a privacy trade is impossible because nobody has '
           'the necessary ____________.', None,
           'information', 'Including the company doing the collecting.'),
          (
           'People object most strongly to ____________ sees the data.',
           None, 'who',
           'Four times the objection when shared with an insurer.'),
          ('What question does the speaker recommend asking?',
           ['Did they consent?', 'Would they have predicted the use?', 'Is it lawful?', 'Is it profitable?'],
           1, 'Because that is what predicts complaints.',
           {0: 'He says people do consent, so that question is '
               'settled.', 2: 'Lawfulness is not the question he recommends.', 3: 'Profit is not what predicts complaints.'})])],
   speak=dict(
    part='Part 1', focus='Information you share online',
    intro=('Two or three sentences each. Concrete examples beat general '
           'statements here.'),
    qs=['Do you share much information about yourself online?',
        'Do you read the terms before you agree to them?',
        'Have you ever decided not to use an app or a website?',
        'Do you think young people worry about this more or less than older '
        'people?'],
    shape=[('answer', 'Less than I used to, and more than I think I do.'),
           ('support', 'I stopped posting photographs about five years '
            'ago.'),
           ('follow-up', 'But my phone still knows everywhere I have been, '
            'which is the larger half.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking an organisation to delete your data',
         prompt=('You closed an account with a company a year ago but are '
                 'still receiving messages from them. Write a letter to the '
                 'company. In your letter: explain the situation; say what '
                 'you have already done; say what you want them to do. Write '
                 'at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about marketing messages I continue to receive from '
          'you, and to make a formal request under your own privacy policy.',
          'I closed my account on 3 November last year and received written '
          'confirmation at the time, which I can forward. Since then I have '
          'received at least eighteen emails and four text messages, the most '
          'recent on 2 October.',
          'I have used the unsubscribe link on three separate occasions, in '
          'January, April and July. On each occasion the messages stopped for '
          'a few weeks and then resumed, which suggests the preference is '
          'being overwritten rather than ignored, possibly by a second '
          'system.',
          'Under the terms of your own policy I am entitled to require you to '
          'delete information held for marketing purposes, and I now do so '
          'formally. I would also be grateful if you would confirm which '
          'systems hold my contact details, so that the problem of them '
          'returning can be addressed rather than suppressed.',
          'Please treat this letter as a request for erasure of marketing '
          'data and for confirmation of the systems involved. I would be '
          'grateful for a reply within one calendar month.',
          'Yours faithfully,',
          'P. Nakagawa-Ferris'],
         notes=[
          'The letter diagnoses rather than complains: the pattern of '
          'stopping and resuming is offered as evidence of a second system. A '
          'reader who is given a hypothesis has something to check.',
          'Two requests, and the second one is the useful one. Asking which '
          'systems hold the details turns a request to stop into a request to '
          'fix.',
          'The closing sentence names the request in the organisation’s own '
          'vocabulary and states the time limit, which is how a letter gets '
          'routed to the team that can act on it.'],
         criterion=[('Offering a diagnosis, not only a complaint',
                     'Task Achievement'),
                    ('A second request that addresses the cause',
                     'Task Response'),
                    ('Naming the request in the reader’s own terms',
                     'Lexical Resource')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    ref='L18',
    context=[
     'From the letter in this cycle:',
     'I am writing to make a subject access request under Article 15. '
     'I am entitled to a copy of the personal data you hold about me, '
     'and you are required to respond within one calendar month of '
     'receipt. I should be grateful if you would confirm that this '
     'request has been received, and I look forward to your response '
     'within the statutory period.'],
    notice=[
     ('The writer states a right and an obligation in two consecutive '
      'clauses. Copy out the first words of each.',
      'I am entitled to; you are required to'),
     ('What preposition follows entitled, and what follows required?',
      'entitled TO; required TO plus a verb')],
    noticetask='Answer both from the letter above, which you read '
               'earlier in this cycle.',
    contrast='Asserting a right has a fixed register and getting it '
             'wrong is expensive in a General Training Task 1. Compare '
             '"I demand you send me my data" with "I am entitled to a '
             'copy of the personal data you hold about me, and you are '
             'required to respond within one calendar month". The '
             'second is firmer, not softer: it states what is owed '
             'rather than what is wanted, names the instrument, and '
             'puts a deadline on the page. Note the prepositions, '
             'which are the most-marked error here: entitled TO a '
             'thing, entitled TO DO something, required TO DO '
             'something, and within one calendar month and not within '
             'one month calendar.',
    task2='Rewrite each in the register of a right asserted.',
    items2=[
     ('Send me my data. ____________',
      None, 'I am entitled to a copy of the data you hold about me.'),
     ('You have to answer in a month. ____________',
      None, 'You are required to respond within one calendar month.'),
     ('Correct: I am entitled for a copy. ____________',
      None, 'I am entitled to a copy.'),
     ('Correct: I demand you to erase it. ____________',
      None, 'I am requesting that the data be erased.')],
    task3='Now write the whole request. You want to see what an '
          'organisation holds about you and you want one thing '
          'corrected. Write the opening and the two requests, about '
          'eighty words, naming the instrument and the deadline.',
    items3=8,
    point='Asserting a right you have been given',
    explain=('Where a right comes from a policy or a law, the strongest '
             'formulation cites the source and then states the action. These '
             'patterns are formal without being aggressive.'),
    examples=['Under the terms of your own policy I am entitled to require '
              'you to delete it.',
              'You must respond within one calendar month.',
              'I now make that request formally.',
              'Please treat this letter as a request for erasure.'],
    task='Rewrite each sentence so that it cites the source of the right.',
    items=[('Please stop emailing me.',
            'Under your own marketing policy I am entitled to withdraw '
            'consent, and I do so now.'),
           ('I want my data deleted.',
            'I am making a formal request for erasure of the marketing data '
            'you hold.'),
           ('You took too long.',
            'Your policy commits you to a reply within one calendar month; my '
            'request was sent nine weeks ago.'),
           ('Send me my file.',
            'I am requesting a copy of the information you hold about me, as '
            'your notice provides.'),
           ('This is not acceptable.',
            'This falls short of the standard set out in paragraph four of '
            'your notice.')]),
   vocab=[('privacy notice', 'a published statement of how data is used'),
          ('subject access', 'a request for a copy of your own data'),
          ('retention', 'how long information is kept'),
          ('controller', 'the organisation that decides how data is used'),
          ('erasure', 'deletion at the request of the person'),
          ('revoke', 'to cancel a permission formally'),
          ('regulator', 'a body that enforces rules on organisations'),
          ('calendar month', 'a month measured from a date, not thirty '
           'days')],
   expr=[('Under the terms of your own policy I am entitled to',
          'cites the reader’s own rules back to them'),
         ('which suggests the preference is being overwritten',
          'offers a diagnosis rather than a complaint'),
         ('Please treat this letter as a request for',
          'tells the reader how to route your letter'),
         ('everything is rarely what people want',
          'narrows a request before it becomes useless')],
   trans=['furthermore', 'in this connection', 'since then',
          'on each occasion'],
  ),

  dict(
   sub='What people will trade',
   step=2,
   notes=dict(
    serves='Yes/No/Not Given and matching features, Reading Part 2; '
           'multiple choice in Listening Part 2; Task 2, agree or '
           'disagree',
    because='Candidates lose Task Response before writing by answering '
            'the wrong kind of question: a discuss-both-views prompt '
            'answered as an opinion essay, or an agree-or-disagree '
            'prompt answered as a balanced survey with no position in '
            'it',
    skill='Sorting a Task 2 prompt into its kind, and knowing what '
          'each kind obliges',
    evidence='Unit 21 cycle 5 taught the four obligations of a '
             'discuss-both-views question; the census shows five '
             'distinct Task 2 forms in this book and the other four '
             'had no taught procedure',
    watch='Learners will write a balanced essay for "to what extent do '
          'you agree". Balance is not a position, and the rubric asked '
          'for an extent',
    time='80 minutes, or 60 without the free grammar production'),
   lead=dict(
    title='Eighty-two per cent and eleven per cent',
    body='The chart at the front of this unit is the most-replicated '
         'finding in the field: people say privacy matters enormously '
         'and behave as though it did not. The lazy reading is that '
         'people are hypocrites. There are two better explanations - '
         'that consent is asked for at the worst possible moment, and '
         'that the cost of refusing is immediate while the cost of '
         'agreeing is invisible and years away - and this cycle is '
         'four writers disagreeing about which of the three it is.',
    task='Answer these before you read, and look again at the guess on '
         'the puzzle chart.',
    qs=['Have you ever agreed to something online you would have '
        'refused if asked at a different moment?',
        'Is it consent if refusing means not getting the thing?',
        'Whose job is it to fix this - the companies, the regulator, '
        'or the user?',
        'Which of the three explanations do you believe, and what '
        'would change your mind?']),
   vocabwork=dict(
    title='The vocabulary of a trade',
    body='Twelve words about exchange and cost. The structure is the '
         'one you met in unit 24 cycle 2 - a benefit falling on one '
         'party and a cost on another - and five of these words are '
         'the same. What is new is the language of a cost that is '
         'deferred and invisible, which is the whole of the privacy '
         'argument and a good deal of the climate one.',
    figure=dict(kind='collocation', teaches='collocation',
                node='consent', sub='cycle 2',
                groups=[('verb + consent',
                         ['give consent', 'withdraw consent',
                          'obtain consent', 'imply consent',
                          'manufacture consent']),
                        ('adjective + consent',
                         ['informed consent', 'explicit consent',
                          'freely given consent', 'implied consent']),
                        ('consent + preposition',
                         ['consent to processing',
                          'consent for marketing',
                          'consent from the user'])],
                note='Freely given is a term of art: consent obtained '
                     'by making refusal costly is not freely given, '
                     'and that single phrase is what three of the '
                     'four texts in this cycle are arguing about.'),
    figure2=dict(kind='cline', teaches='scale',
                 title='How real is the choice?',
                 sub='cycle 2 · and compare the cline in unit 24 cycle '
                     '2',
                 left='no choice in practice',
                 right='a considered decision',
                 items=[('clicked through to get the thing', 0.04),
                        ('accepted the default', 0.2),
                        ('did not change the setting', 0.36),
                        ('agreed to the terms', 0.56),
                        ('weighed it up', 0.76),
                        ('read the notice and consented', 0.95)],
                 note='The same person doing the same thing can be '
                      'described by any phrase on this line, and the '
                      'matching-features questions in this cycle are '
                      'about which phrase each writer chooses. That '
                      'is the same exercise as unit 24 cycle 2 with '
                      'a different subject.'),
    task='Complete each with a collocation or a phrase from the cline.',
    items=[
     ('Consent obtained by making refusal costly is not '
      '____________ given.', None, 'freely'),
     ('Consent that can be shown by a positive act is '
      '____________.', None, 'explicit'),
     ('To stop consenting is to ____________ consent.',
      None, 'withdraw'),
     ('The preposition before the activity: consent ____________ '
      'processing.', None, 'to'),
     ('Consent assumed from silence is ____________ consent.',
      None, 'implied'),
     ('The weakest phrase on the cline: clicked ____________.',
      None, 'through'),
     ('Consent given with a real understanding of what follows is '
      '____________.', None, 'informed'),
     ('A cost that arrives years later and invisibly is '
      '____________.', None, 'deferred')]),
   builder=dict(
    skill='Task 2: five kinds of question, five obligations',
    qkind='skill',
    explain='There are five Task 2 forms and each obliges something '
            'different, and more Task Response marks are lost to '
            'answering the wrong kind than to anything else. Discuss '
            'both views and give your own opinion: both views fairly, '
            'in roughly equal space, plus your own position - that is '
            'unit 21 cycle 5. To what extent do you agree: a position '
            'with a degree attached, which means fully, largely or '
            'only in part, and a balanced survey with no extent in it '
            'is not an answer. Advantages and disadvantages: both, and '
            'no opinion is wanted unless the prompt asks - supplying '
            'one wastes a paragraph. Problem and solution, or cause '
            'and solution: two halves, and the solution half must '
            'answer the problem you actually named rather than a '
            'general one. And the two-part question, which gives you '
            'two direct questions and obliges you to answer both, '
            'where the commonest failure is answering the first at '
            'length and the second in a clause. Read the last sentence '
            'of the prompt twice. It is where the form is declared, '
            'and it takes eight seconds.',
    worked=[
     'PROMPT: “Some people believe privacy online is already lost. To '
     'what extent do you agree?”',
     'The form is declared in the last sentence: to what extent.',
     'The obligation is a position with a degree. Not both sides '
     'weighed; not a survey. Largely, or only in part, or scarcely at '
     'all - and then the reason for that degree.',
     'A balanced essay here would be a band 5 or 6 for Task Response '
     'however good the English, because the rubric asked for an '
     'extent and received a survey.',
     'A good opening: “Largely, though not for the reason usually '
     'given.” That sentence commits to a degree and promises an '
     'argument, in nine words.'],
    figure=dict(kind='taskread', teaches='task-analysis',
                sub='cycle 2 · the five forms, and what each obliges',
                prompt='Some people believe that privacy online is '
                       'already lost and that regulation cannot '
                       'recover it. To what extent do you agree?',
                parts=[('THE TOPIC', 'online privacy and regulation',
                        'what you write about, not what you argue'),
                       ('THE CLAIM', 'privacy is lost and cannot be '
                        'recovered',
                        'two claims, and you may agree with one'),
                       ('THE FORM', 'to what extent do you agree',
                        'a position WITH A DEGREE, not a balance'),
                       ('YOUR TASK', 'state the degree, then earn it',
                        'largely / in part / scarcely, plus the '
                        'reason')],
                misreadings=['A balanced essay surveying both sides '
                             'and declining to say how far.',
                             'An essay on whether privacy matters, '
                             'which is a different prompt.'],
                note='The two claims in the prompt can be separated: '
                     'you may agree that privacy is largely lost and '
                     'deny that regulation cannot recover it. That is '
                     'the division from unit 22 cycle 2, used on a '
                     'rubric.'),
    task='For each prompt write the FORM and what it obliges, in six '
         'words.',
    items=[
     ('Discuss both views and give your own opinion.',
      None, 'both fairly plus a position'),
     ('To what extent do you agree?', None, 'a position with a '
      'degree'),
     ('What are the advantages and disadvantages?',
      None, 'both, no opinion wanted'),
     ('What problems does this cause and how can they be solved?',
      None, 'two halves, matched to each other'),
     ('Why is this happening, and what should be done?',
      None, 'causes then measures, both fully'),
     ('Some say X. Others say Y. Discuss.',
      None, 'both fairly, opinion optional')],
    note='Two of the six want no opinion at all and one of them '
         'wants a degree rather than a side. Supplying the wrong '
         'thing is not a small error: Task Response is a quarter of '
         'the mark for Writing Task 2, and it is the criterion an '
         'examiner settles first.'),
   figures=[
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 2 · the matching-features set turns on these',
         pairs=[('people do not read it',
                 'the notice goes unread', 'voice'),
                ('agreeing without thinking',
                 'consent at the point of need', 'nominalisation'),
                ('the cost comes much later',
                 'a deferred cost', 'reformulation'),
                ('it is not really a choice',
                 'consent is not freely given', 'negation'),
                ('firms, regulators and users',
                 'the parties involved', 'hypernym'),
                ('the default setting', 'what happens if you do '
                 'nothing', 'synonym')],
         note='The fourth is a term of art in the text and an '
              'ordinary phrase in the question. That pairing is '
              'where most of this set’s marks are.'),
   ],
   advice='Read the last sentence of a Task 2 prompt twice before you '
          'plan anything. It declares the form, and the form decides '
          'what a complete answer is. An examiner marking Task '
          'Response is asking one question first - has this candidate '
          'done what was asked - and an essay that answers a different '
          'kind of question is capped before a word of its English is '
          'considered.',
   debrief=dict(
    read=['Two writers use the phrase "freely given" and only one of '
          'them is using it as the legal term. The other means it '
          'loosely, and the matching question is about the '
          'difference.',
     'The Yes/No/Not Given statement about hypocrisy is one the '
     'passage reports and rejects. It is the voice problem from unit '
     '23 cycle 2 and the handover is four words.',
     'Statement 24 is stronger than the passage: the passage says '
     '"most people most of the time" and the statement says '
     '"people". That is the scope problem from unit 23 cycle 4.'],
    listen=['Suki concedes Dev’s joke and then reverses it. The '
            'answer is after the reversal.',
     'Question 31 offers an option built from the pound example, '
     'which she uses to make the opposite point.']),
   outside='Knowing what kind of question you have been asked is the '
           'whole of answering it, in an exam, in an interview and in '
           'an argument. Most people answer the question they wish '
           'they had been asked, and nobody notices they have done it '
           'except the person marking.',
   recycled=['consent', 'risk', 'deferred', 'evidence', 'liability',
             'exposure'],
   read=[
    dict(heading='Four people on privacy and convenience',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  Beatriz: I turn everything off and I know it costs me. The maps '
          'are worse, the recommendations are useless, and I spend about ten '
          'minutes a week doing things my phone would do for me. I have '
          'decided those ten minutes are the price and I pay them without '
          'complaining, which is more than most people who agree with me '
          'do.',
          'B  Teodor: I accept all of it and I would like to be honest about '
          'why. It is not that I have thought about it and decided the trade '
          'is fair. It is that the button saying accept is large and green '
          'and the other one is three clicks away, and after a long day I am '
          'not the person my principles describe.',
          'C  Noor: My rule is about who, and not about how much. The shop '
          'can know my size, my address and every jumper I have ever bought. '
          'The shop may not pass any of it to an insurer or an employer, and '
          'the policy that lets them is the only paragraph I read.',
          'D  Lajos: I used to think this was a personal decision and I have '
          'changed my mind. What I agree to also sets what is normal, and '
          'what is normal is what the next person is offered. I still accept '
          'most of it, because refusing alone achieves nothing, which is '
          'precisely the shape of the problem.'],
         items=[
          ('Which person accepts a practical cost for their position?',
           ['Beatriz', 'Teodor', 'Noor', 'Lajos'], 0,
           'Ten minutes a week, which she calls the price.',
           {1: 'Teodor blames the design of the choice.', 2: 'Noor cares about the recipient rather than the amount.', 3: 'Lajos sees the decision as collective.'}),
          ('Which person blames the design of the choice?',
           ['Beatriz', 'Teodor', 'Noor', 'Lajos'], 1,
           'A large green button, with the alternative three clicks '
           'away.',
           {0: 'Beatriz accepts a practical cost for their position.', 2: 'Noor cares about the recipient rather than the amount.', 3: 'Lajos sees the decision as collective.'}),
          (
           'Which person cares about the recipient rather than the '
           'amount?', ['Beatriz', 'Teodor', 'Noor', 'Lajos'],
           2,
           'The shop may know everything; it may not pass it to an '
           'insurer.',
           {0: 'Beatriz accepts a practical cost for their position.', 1: 'Teodor blames the design of the choice.', 3: 'Lajos sees the decision as collective.'}),
          ('Which person sees the decision as collective?',
           ['Beatriz', 'Teodor', 'Noor', 'Lajos'], 3,
           'What he agrees to sets what the next person is offered.',
           {0: 'Beatriz accepts a practical cost for their position.', 1: 'Teodor blames the design of the choice.', 2: 'Noor cares about the recipient rather than the amount.'}),
          ('Teodor believes the trade he accepts is a fair one.',
           ['Yes', 'No', 'Not Given'], 1,
           'He says explicitly that this is not why he accepts it.',
           {0: 'Yes would need fairness; he says that is not why he '
               'accepts it.', 2: 'Not Given is wrong because he gives his reason.'}),
          ('Noor has read the whole privacy policy.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says the sharing paragraph is the only one she reads.',
           {0: 'Yes would need the whole policy; she names one '
               'paragraph.', 2: 'Not Given is wrong because she says exactly how much '
               'she reads.'})])],
   listen=[
    dict(preview=True,
         heading='Two people and a free torch',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='Ninety seconds before five minutes. The Part 2 you are '
             'about to hear argues about the same gap, with figures '
             'attached.',
         script=[
          ('Dev', 'I downloaded a torch app and it wanted my contacts. '
                  'A torch.'),
          ('Suki', 'And did you give them?'),
          ('Dev', 'Of course I did. It was dark.'),
          ('Suki', 'That is the whole research finding in one '
                   'sentence, you know. People do not trade privacy '
                   'for value. They trade it for immediacy.'),
          ('Dev', 'That sounds like a polite way of saying we are '
                  'stupid.'),
          ('Suki', 'It is the opposite. If you offered somebody a '
                   'pound to hand over their contacts they would '
                   'refuse, and the pound is worth more than the '
                   'torch. What they will not do is stop and think at '
                   'the moment they want the thing.'),
          ('Dev', 'So the problem is the moment.'),
          ('Suki', 'The problem is that consent is asked for at '
                   'exactly the instant a person is least able to '
                   'give it. Change the moment and the behaviour '
                   'changes. We have tested that.'),
          ('Dev', 'And nobody designs it that way.'),
          ('Suki', 'Nobody designs it that way because the people '
                   'designing it are paid for the yes.')],
         items=[
          ('Suki says people do not trade privacy for value but for '
           '____________.', None, 'immediacy',
           'Her second turn, which she calls the whole research '
           'finding.'),
          ('Consent is asked for at the instant a person is least '
           'able to ____________ it.', None, 'give',
           'Her fourth turn, which is the argument of the whole '
           'cycle.'),
          ('She says the designers are paid for the ____________.',
           None, 'yes',
           'Her last turn, and it is the sentence the Part 2 comes '
           'back to.')]),
    dict(heading='Two users disagree about tracking', part='Part 3',
         task='A conversation about a tracking setting · sentence completion and multiple choice', band='l3',
         qtype='Questions 25-29',
         script=[
          ('Marisol', 'You turned it all off, then.'),
          ('Dev', 'Everything the settings let me turn off, which is not '
           'everything.'),
          ('Marisol', 'And has anything got worse?'),
          ('Dev', 'The maps, badly. It no longer knows I go to the same '
           'place every Tuesday, so it offers me the route a tourist would '
           'take. I lose maybe four minutes a week.'),
          ('Marisol', 'Four minutes a week for a principle sounds like a '
           'bargain, and I still think you have bought the wrong thing.'),
          ('Dev', 'Go on.'),
          ('Marisol', 'The setting you turned off governs what they show '
           'you. It does not govern what they record. You are still logged, '
           'you have simply stopped receiving the benefit.'),
          ('Dev', 'I had read it as covering both.'),
          ('Marisol', 'Most people do, and I would say the wording invites '
           'it. The paragraph says personalisation, and personalisation is '
           'the use, not the collection.'),
          ('Dev', 'Then what would actually stop the collection?'),
          ('Marisol', 'Deleting the account, which I am not recommending, or '
           'using a different device for the things you mind about. '
           'Everything in between is theatre.'),
          ('Dev', 'That is a bleaker answer than I wanted.'),
          ('Marisol', 'It is, and I would add one thing in your favour. The '
           'request you filed last month is the part that worked. You now '
           'have their own list of what they hold, in writing, and that is '
           'the only leverage any of us has.'),
          ('Dev', 'So the setting was theatre and the letter was not.'),
          ('Marisol', 'The letter made somebody look. That is rarer than it '
           'sounds.'),
          ('Dev', 'Should I file another one in a year?'),
          ('Marisol', 'File one every time something changes, and keep '
           'the replies. Two answers a year apart are worth more than '
           'either on its own, because the difference between them is the '
           'only record anybody has of what they started doing in '
           'between.'),
          ('Dev', 'That had not occurred to me at all.'),
          ('Marisol', 'It is the one thing I would tell everybody. A '
           'single answer tells you what they hold. Two answers tell you '
           'what they have begun to hold, and nothing else available to '
           'us does that.')],
         items=[
          (
           'What has got worse since Dev changed the setting is the '
           '____________.', None, 'maps',
           'It offers the route a tourist would take, costing four '
           'minutes a week.'),
          ('Marisol says the setting governs what is ____________.',
           None, 'shown',
           'So Dev is still logged and has lost the benefit.'),
          (
           'She says people misread it because the ____________ '
           'invites it.', None, 'wording',
           'Personalisation is the use, not the collection.'),
          ('What does she say would actually stop collection?',
           ['Another setting', 'Deleting the account or using a different device', 'A complaint', 'Nothing at all'],
           1, 'Everything in between she calls theatre.',
           {0: 'Everything between the two she calls theatre.', 2: 'A complaint is what worked for leverage, not for '
               'collection.', 3: 'She names two things that would work.'}),
          ('She says what worked was the data ____________.', None,
           'request',
           'Because it produced their own list of what they hold, in '
           'writing.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Privacy',
    longturn=[('The thing I decided not to share was a copy of my identity '
               'document, which an online marketplace asked me to upload '
               'before it would release a payment.'),
              ('I was asked for it because I had sold something for more than '
               'their threshold, and the message said it was a legal '
               'requirement for checks against fraud, which as far as I could '
               'tell was broadly true.'),
              ('I decided not to for two reasons. The first was that the '
               'request arrived by email with a link, and the email was '
               'indistinguishable from the fake ones I had been warned about, '
               'so I could not tell what I would be uploading it to. The '
               'second reason survived even after I had found the same request '
               'inside my account, where it was clearly genuine: once that '
               'image exists on their system I have no way of knowing who can '
               'see it, how long it is kept, or what happens to it when the '
               'company is sold.'),
              ('Whether I was right, I think yes, although it cost me '
               'something. I never received about ninety, which I have written '
               'off. What I would say is that the decision was easier to '
               'defend afterwards than it felt at the time, because six months '
               'later that company announced a breach involving exactly those '
               'documents. I would like to claim foresight. In fact I simply '
               'did not trust a link, and the rest followed.')],
    intro=('Short answers, then the long turn. Take the bullets in order and '
           'develop each one before moving on.'),
    cue=('Describe something you decided not to share online.',
         ['what it was', 'why you were asked to share it',
          'why you decided not to',
          'and explain whether you think you made the right decision']),
    qs=['Do you think about privacy when you use your phone?',
        'Are young people in your country careful about this?',
        'Now look at the card. You have one minute to make notes.',
        'Is it possible to keep anything private now?'],
    shape=[('answer', 'A photograph of my daughter on her first day at '
            'school.'),
           ('support', 'Everybody in the family group was posting theirs.'),
           ('follow-up', 'I realised I was about to publish a decision she '
            'would live with.'),
           ('support', 'So I sent it to four people instead.'),
           ('follow-up', 'And I think that was right, although I felt like '
            'the difficult one for a day.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Tracking in exchange for free services',
         prompt=('Should companies be allowed to track people in exchange '
                 'for providing free services? Discuss the advantages and '
                 'disadvantages and give your own opinion. Write at least '
                 '250 words.'),
         model=[
          'The exchange is real and is worth stating plainly before '
          'criticising it: a great deal of what people use daily is paid for '
          'by advertising that tracking makes more valuable, and a version '
          'without it would either cost money or not exist.',
          'The advantages are therefore not trivial. Services that would be '
          'unaffordable for most households are free at the point of use, '
          'which is a genuine redistribution, and the tracking also makes '
          'some of them work better, since a map that knows where you go is '
          'more useful than one that does not.',
          'The disadvantages are of a different kind, and this is why the two '
          'sides of the argument rarely meet. The costs are not bad '
          'experiences now; they are capabilities created for later. Data '
          'collected to sell advertising can be sold, breached, subpoenaed or '
          'repurposed by a company with different owners and a worse policy, '
          'and the person who agreed in 2019 agreed to none of that.',
          'There is also a problem with consent itself. Consent is '
          'meaningful where the person can price what they are giving up, and '
          'here nobody can, because the value depends on inferences not yet '
          'drawn by systems not yet built.',
          'My own view is that the exchange should be permitted and the '
          'terms of it constrained, because the thing that goes wrong is '
          'rarely the collection and almost always the later use. I would '
          'allow tracking for the service it funds, prohibit the sale of the '
          'data to third parties, and cap retention at two years, so that a '
          'profile has to be re-earned rather than inherited. That keeps the '
          'free service, which people clearly want, and removes the part '
          'nobody agreed to.'],
         notes=[
          'The first paragraph concedes the strongest point for the other '
          'side, which buys the right to be hard on it later. An essay that '
          'calls the exchange worthless is arguing with something nobody '
          'defends.',
          'Paragraph 3 explains why the two sides do not meet: one is talking '
          'about experience and the other about capability. Naming the '
          'mismatch is worth more than another disadvantage.',
          'The conclusion separates collection from use and then gives three '
          'specific limits. Two years is checkable; "stronger regulation" is '
          'not.'],
         criterion=[('Conceding the strongest opposing point first',
                     'Task Response'),
                    ('Naming why the two sides do not meet', 'Task Response'),
                    ('Three checkable limits in the conclusion',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    ref='L19',
    context=[
     'From text C, which you have just read:',
     'The exchange is real but it is not the one people imagine. A user '
     'gives up a quantity of future, invisible risk in return for an '
     'immediate and very small convenience, and the more immediate the '
     'convenience, the less carefully the risk is weighed. That is not '
     'a bad bargain struck by foolish people. It is a bargain struck at '
     'the cost of the only thing that could have made it a good one, '
     'which is a moment to think.'],
    notice=[
     ('Find the phrase that names what is given and what is received.',
      'gives up ... in return for'),
     ('Find the structure that links two quantities moving together.',
      'the more immediate the convenience, the less carefully the risk '
      'is weighed')],
    noticetask='Answer both from the paragraph above, which you met '
               'earlier in this cycle.',
    contrast='A trade-off is one of the few ideas that has its own '
             'grammar in English, and the two structures do different '
             'work. In return for and in exchange for name the two '
             'sides of a single swap. The more X, the more Y names a '
             'relationship that holds across many cases, which is a '
             'stronger claim and needs evidence. At the cost of names '
             'the price of something you are recommending anyway, '
             'which is the most useful of the three in Task 2 because '
             'it concedes and argues in one phrase. Note the '
             'prepositions - in return FOR, in exchange FOR, at the '
             'cost OF - and note that the more... the more pattern '
             'needs the in both halves and a comma between them.',
    task2='Rewrite each with the structure named.',
    items2=[
     ('People give data and get a free service. (in return for) '
      '____________',
      None, 'People give up data in return for a free service.'),
     ('More convenience, less care. (the more) ____________',
      None, 'The more immediate the convenience, the less carefully '
      'the risk is weighed.'),
     ('Correct: in exchange of a discount. ____________',
      None, 'in exchange for a discount'),
     ('Convenience is worth having and privacy is the price. (at the '
      'cost of) ____________',
      None, 'Convenience is bought at the cost of privacy.')],
    task3='Now write it. Take any trade in this unit - data for a '
          'torch, convenience for risk, a free service for a profile - '
          'and write sixty to eighty words that name both sides of it, '
          'use the more... the more once, and concede with at the cost '
          'of.',
    items3=8,
    point='Trade-off and exchange structures',
    explain=('An exchange has two sides and a price. English has a set of '
             'structures for holding both sides in one sentence, and using '
             'them keeps an advantages-and-disadvantages essay from reading '
             'as two lists.'),
    examples=['The service is free at the point of use and is paid for by '
              'advertising.',
              'What you gain is convenience; what you give up is a record '
              'that outlasts the convenience.',
              'Consent given once covers uses nobody described.',
              'In exchange for a discount, the shop acquires a permanent '
              'record.'],
    task='Rewrite each statement so that both sides of the exchange appear.',
    items=[('The app is free.',
            'The app is free to download and is funded by the advertising '
            'your activity makes valuable.'),
           ('Tracking is useful.',
            'Tracking makes the service more accurate and makes the record '
            'of you more complete.'),
           ('People agree to it.',
            'People agree to a stated use and are bound by the agreement for '
            'uses invented afterwards.'),
           ('Discounts are popular.',
            'In exchange for a visible discount, shoppers hand over a value '
            'nobody has priced.'),
           ('You can refuse.',
            'Refusal is available and costs you the service, which is why so '
            'few people refuse.')]),
   vocab=[('opt-out', 'a choice you must make to avoid something'),
          ('profiling', 'building a description of a person from data'),
          ('inferred data', 'facts guessed rather than given'),
          ('tailor', 'to adjust something to one person'),
          ('breach', 'an incident in which data escapes'),
          ('third party', 'somebody outside the original agreement'),
          ('repurpose', 'to use something for a new purpose'),
          ('leverage', 'something that gives you bargaining power')],
   expr=[('Everything in between is theatre',
          'dismisses measures that only appear to act'),
         ('the person who agreed in 2019 agreed to none of that',
          'dates a consent to limit it'),
         ('I am not the person my principles describe',
          'admits a gap between belief and behaviour'),
         ('refusing alone achieves nothing',
          'names a collective-action problem')],
   trans=['whereas', 'that said', 'therefore', 'there is also'],
  ),

  dict(
   sub='What a profile is built from',
   step=3,
   notes=dict(
    serves='Matching information and True/False/Not Given, Reading '
           'Part 3; plan and diagram labelling; Task 1 Academic, a '
           'process',
    because='A process diagram is the Task 1 that band 6 answers '
            'describe as a list of boxes, with no agent, no passive '
            'and no sequence markers - the three things a process '
            'description is actually made of',
    skill='Describing a process: the passive, the sequence, and what '
          'to do when nobody is named',
    evidence='Phase 4: the band 6.5 models for process diagrams in '
             'this series average four passive constructions against '
             'eleven in the band 9 models, and the difference is '
             'almost the whole band',
    watch='Learners will write "then the system makes a profile" five '
          'times. Ask who is named on the diagram, and what that '
          'implies about the voice',
    time='85 minutes, or 65 without the free grammar production'),
   lead=dict(
    title='Nobody wrote this down about you',
    body='Everything in your file that you gave somebody is the small '
         'part. The large part was produced: inferred from how long '
         'you looked, what you scrolled past, when you opened the app, '
         'which of two headlines you chose. In cycle 1 you learned '
         'what a data controller owes you; this cycle is about the '
         'material those duties were not written for, because nobody '
         'supplied it and so nobody can be said to have given it '
         'away.',
    task='Answer these before you look at the diagram.',
    qs=['What could somebody work out about you from the times of day '
        'you use a phone?',
        'Is a guess about you personal data? Should it be?',
        'If a system predicts you will like something and then shows '
        'it to you, who chose?',
        'What would you want the right to see - the data, or the '
        'conclusions?']),
   vocabwork=dict(
    title='The vocabulary of a process',
    body='Twelve words, and half of them are the vocabulary of any '
         'process rather than of this one - stage, input, output, '
         'feed, derive, loop. That half is what Task 1 Academic needs '
         'whenever it gives you a diagram instead of a chart, which is '
         'roughly one time in four.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='how a profile is built',
                sub='cycle 3 · half of these work on any process',
                branches=[('what goes in',
                           ['signal', 'input', 'raw event',
                            'scroll depth']),
                          ('what happens to it',
                           ['aggregate', 'derive', 'weight',
                            'compress']),
                          ('what comes out',
                           ['feature', 'profile', 'prediction',
                            'confidence']),
                          ('and back again',
                           ['feedback loop', 'downstream',
                            'reinforce', 'drift'])],
                note='Downstream is worth having in any subject: it '
                     'means at a later stage of the process, and the '
                     'metaphor works in English for supply chains, '
                     'rivers, software and consequences.'),
    figure2=dict(kind='family', teaches='word-formation',
                 sub='cycle 3 · the verbs a process description needs',
                 rows=[(('ag-gre-gate', 1), ('ag-gre-ga-tion', 3), '',
                        ('ag-gre-ga-ted', 1), ''),
                       (('de-rive', 2), ('de-ri-va-tion', 3), '',
                        ('de-rived', 2), ''),
                       (('pre-dict', 2), ('pre-dic-tion', 2), '',
                        ('pre-dic-tive', 2), ''),
                       (('in-fer', 2), ('in-fe-rence', 1), '',
                        ('in-ferred', 2), ''),
                       (('re-in-force', 3), ('re-in-force-ment', 3),
                        '', '', '')],
                 note='Every one of these is used in the passive in '
                      'the model answer, and that is not an accident: '
                      'a process diagram names stages and not agents, '
                      'so English puts the stage in the subject and '
                      'the verb in the passive.'),
    task='Complete each sentence with a word from this cycle, in the '
         'right form.',
    items=[
     ('An observable thing the system treats as evidence is a '
      '____________.', None, 'signal'),
     ('Many raw events combined into one number have been '
      '____________.', None, 'aggregated'),
     ('A number worked out from others is ____________ from them.',
      None, 'derived'),
     ('The noun from infer is ____________.', None, 'inference'),
     ('At a later stage of the process is ____________.',
      None, 'downstream'),
     ('When the output becomes the next input, a ____________ loop '
      'has formed.', None, 'feedback'),
     ('The adjective from predict is ____________.',
      None, 'predictive'),
     ('How sure the system is of its guess is its ____________.',
      None, 'confidence')]),
   builder=dict(
    skill='Task 1: describing a process',
    qkind='skill',
    explain='About one Task 1 in four is a process rather than a '
            'chart, and it is the one candidates most often describe '
            'as a list. The reason is that the diagram gives you boxes '
            'and arrows and no people, so there is nobody to put in '
            'the subject of a sentence - and the English answer to that '
            'is the passive, which is why a process description '
            'contains more passives than anything else you will write '
            'in the exam. Three things make the difference. Use the '
            'passive wherever the diagram names no agent: the signals '
            'are aggregated, a profile is derived, the prediction is '
            'fed back. Mark the sequence explicitly, because the '
            'reader cannot see your diagram: first, once this has '
            'happened, at the next stage, finally. And say how many '
            'stages there are in your overview, because a process '
            'overview is a statement of shape - linear, cyclical, '
            'branching - and "the diagram shows a six-stage cycle '
            'which returns to its starting point" is worth more than '
            'any description of a single box.',
    worked=[
     'The diagram: six boxes, five arrows, and one arrow going back '
     'from the last box to the second.',
     'The overview, as shape: “The diagram shows a six-stage process '
     'which is cyclical rather than linear, since the output of the '
     'final stage is returned as an input to the second.”',
     'A stage, in the passive: “Raw events are first aggregated into '
     'features, which are then weighted according to how recent they '
     'are.”',
     'Sequence marked: “Once a profile has been assembled, '
     'predictions are generated and served to the user.”',
     'What not to write: “The system collects data. Then the system '
     'makes features. Then the system makes a profile.” Three '
     'sentences, one verb, no sequence, and an agent the diagram '
     'never named.'],
    figure=dict(kind='ladder', teaches='band-move',
                criterion='Grammatical Range, on a process',
                sub='cycle 3 · the same stage, three bands',
                rungs=[('5.5', 'The system takes the signals. Then the '
                        'system makes them into features.', ''),
                       ('6.5', 'The signals are collected and then '
                        'turned into features.',
                        'the passive, and the two steps joined'),
                       ('7.5', 'Once the raw signals have been '
                        'aggregated, they are weighted by recency '
                        'before being converted into the features from '
                        'which the profile is derived.',
                        'a time clause, two passives and a relative '
                        'clause, with the sequence carried inside one '
                        'sentence')],
                note='The third rung names no agent at all, which is '
                     'correct, because the diagram names none. Writing '
                     '"the system" five times is an invention, and an '
                     'examiner reads it as one.'),
    task='Rewrite each in the passive, with no agent.',
    items=[
     ('The system collects the signals.',
      None, 'the signals are collected'),
     ('Then it combines them into features.',
      None, 'they are then combined into features'),
     ('After that it builds a profile.',
      None, 'a profile is then built'),
     ('The system sends the prediction to the user.',
      None, 'the prediction is served to the user'),
     ('It uses the result as a new signal.',
      None, 'the result is used as a new signal'),
     ('The system does this again and again.',
      None, 'the cycle is repeated')],
    note='Six sentences, six passives, no agent in any of them. Read '
         'them in order and notice that they are also a complete '
         'description of the diagram, which is what a process answer '
         'is: a sequence of stages, in the passive, with the sequence '
         'marked. One caution. The passive is right here because the '
         'diagram names nobody, and it is wrong in a Task 2 essay '
         'where you are the one making the claim - "it is believed '
         'that" is a way of not saying who believes it, and examiners '
         'read it as evasion. Use the passive where the agent is '
         'genuinely absent and the active where it is you.'),
   figures=[
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 3 · what the questions do to the article',
         pairs=[('worked out rather than collected',
                 'inferred', 'nominalisation'),
                ('the system shows you more of it',
                 'the prediction is reinforced', 'voice'),
                ('at a later stage', 'downstream', 'synonym'),
                ('nobody supplied it',
                 'it was produced rather than given', 'negation'),
                ('time of day, scroll depth, dwell time',
                 'behavioural signals', 'hypernym'),
                ('how sure the system is',
                 'the confidence attached to the prediction',
                 'reformulation')],
         note='The fourth decides two questions and it is the whole '
              'legal argument of the passage in one pair.'),
   ],
   advice='On a process diagram, count the stages and say how many '
          'there are, then say whether the process is linear or '
          'cyclical. That is your overview and it takes one sentence. '
          'Then describe the stages in order, in the passive, with the '
          'sequence marked. Do not invent an agent the diagram does '
          'not name, and do not describe every arrow - about six '
          'stages is what 170 words will carry.',
   debrief=dict(
    read=['The True/False/Not Given statement about consent is FALSE '
          'rather than NOT GIVEN, because the passage addresses '
          'inferred data and consent explicitly in paragraph D.',
     'Two paragraphs describe the feedback loop and only one explains '
     'why it is a problem. Matching information asks for the '
     'explanation.',
     'In the diagram-labelling task two boxes could be called '
     '"profile". The arrow directions decide which, and the labels '
     'are in the passage rather than on the diagram.'],
    listen=['The speaker describes the stages out of order and then '
            'corrects herself. The corrected order is the answer.',
     'In the labelling task she says "before that" once, and it '
     'reverses two stages you have already written down.']),
   outside='Almost everything is a process with stages and no named '
           'agent - a planning application, a visa, a diagnosis, a '
           'complaint. Being able to describe one in the passive, with '
           'the sequence marked, is how you write a clear account of '
           'what happened to you.',
   recycled=['inferred', 'signal', 'evidence', 'confidence',
             'aggregate', 'consent'],
   read=[
    dict(preview=True,
         heading='What a signal is',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The diagram in this cycle has the word signal on it nine '
             'times and nobody ever explains it. Two hundred words.',
         paras=[
          'A signal is any observable thing a system treats as evidence '
          'about a person. How long you looked at something, whether '
          'you scrolled past it, what time of day you opened the app, '
          'which of two headlines you chose. None of these is '
          'information about you in the ordinary sense and all of them '
          'are used as if they were.',
          'Signals are weak individually and strong in combination. '
          'That you paused on one article tells almost nothing. That '
          'you paused on forty articles sharing a subject, at the same '
          'hour, over three weeks, is a conclusion - and it is a '
          'conclusion nobody told anybody.',
          'A feature is a signal that has been processed into a number '
          'the system can use. Scroll depth is a signal; average scroll '
          'depth on political content over thirty days is a feature. '
          'The distinction matters because the law was written about '
          'data people supply, and features are produced.',
          'A feedback loop closes when the system’s own output becomes '
          'the next signal. It shows you more of something, you look at '
          'more of it, and the profile that predicted the behaviour has '
          'now caused it. Almost nothing in the apparatus is designed '
          'to notice when this has happened.'],
         items=[
          ('Anything a system treats as evidence about a person is a '
           '____________.', None, 'signal',
           'Paragraph 1: how long you looked, what time you opened '
           'it.'),
          ('A signal processed into a number the system can use is a '
           '____________.', None, 'feature',
           'Paragraph 3: scroll depth against average scroll depth '
           'over thirty days.'),
          ('When the system’s output becomes the next signal, a '
           '____________ loop has closed.', None, 'feedback',
           'Paragraph 4: the profile that predicted the behaviour has '
           'now caused it.')]),
    dict(heading='Signals, inference and the picture they make',
         kind='Article', task='Matching information, diagram labelling and True/False/Not Given',
         band='gt_work', qtype='Questions 30-35',
         figure=_REC,
         paras=[
          'A recommendation system is a device before it is a process, and '
          'the diagram shows why describing it as a sequence of steps leaves '
          'out the thing that matters. There are eight components, and two of '
          'them feed back into earlier ones.',
          'Actions you take are recorded in an event log: pages opened, '
          'things bought, how long a page stayed on the screen, how far it '
          'was scrolled. None of these is personal information in the sense a '
          'privacy notice means. Each is a signal, and the log holds millions '
          'of them.',
          'The feature store summarises the log into a smaller set of '
          'numbers. Instead of ten thousand events, there are perhaps four '
          'hundred features: how often you buy in a category, how quickly you '
          'return, how your activity is distributed across the week. '
          'Summarising is also the point at which the system stops holding '
          'what you did and starts holding what you are like.',
          'From those features, traits are predicted. Nobody told the system '
          'an age, an income or a household composition, and it has estimates '
          'for all three, each with a confidence attached. These are the '
          'inferred traits, and they are the part of the system people are '
          'least aware of and most often surprised by.',
          'The ranking model takes the traits and the features together and '
          'orders what you are shown. Your response is then recorded in the '
          'same log, which is the first feedback path: the system is '
          'measuring its own effect on you and treating the result as new '
          'evidence about you.',
          'The second path is retention. The log is kept for twenty-four '
          'months, so a profile is built from two years of behaviour and not '
          'from a session. This is why clearing your history changes so '
          'little, and why the component that governs how much the system '
          'knows is a number in a retention policy and not a setting on your '
          'phone.'],
         items=[
          (
           'Which paragraph explains the point at which behaviour '
           'becomes description?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'Summarising the log into features: what you did becomes '
           'what you are like.',
           {0: 'Paragraph 2 describes the event log and its signals.', 2: 'Paragraph 4 describes the traits the system infers.', 3: 'Paragraph 5 names the first feedback path.'}),
          ('Which paragraph names the first feedback path?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2, 'Your response is recorded in the same log.',
           {0: 'Paragraph 3 explains the point at which behaviour '
               'becomes description.', 1: 'Paragraph 4 describes the traits the system infers.', 3: 'Paragraph 6 explains why clearing your history changes '
               'little.'}),
          (
           'Which paragraph explains why clearing your history changes '
           'little?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           3, 'The log is retained for twenty-four months.',
           {0: 'Paragraph 3 explains the point at which behaviour '
               'becomes description.', 1: 'Paragraph 4 describes the traits the system infers.', 2: 'Paragraph 5 names the first feedback path.'}),
          ('The log is summarised into about four hundred ____________.',
           None, 'features',
           'Paragraph 3, from perhaps ten thousand events.'),
          ('The system is given the user\'s age by the user.',
           ['True', 'False', 'Not Given'], 1,
           'Paragraph 4 says nobody told the system an age, and that '
           'it estimates one.',
           {0: 'True contradicts paragraph 4, which is explicit that '
               'nothing was told.', 2: 'Not Given is wrong because paragraph 4 addresses '
               'exactly this.'}),
          ('The event log is kept for two years.',
           ['True', 'False', 'Not Given'], 0,
           'Paragraph 6 gives the retention period as twenty-four '
           'months.',
           {1: 'False would need a different period, and twenty-four '
               'months is stated.', 2: 'Not Given is wrong because the retention period is '
               'given.'})])],
   listen=[
    dict(heading='An engineer on inference', part='Part 4',
         task='A talk on how profiles are built · diagram labelling and multiple choice', band='l4',
         qtype='Questions 36-41',
         figure=_REC,
         script=[
          ('Engineer', 'I build the middle box on that diagram, and I want to '
           'describe it as apparatus rather than as a process, because the '
           'process description is how everybody gets it wrong. This is not a '
           'pipeline. It is a machine with two loops in it.'),
          ('Engineer', 'Start at the left. Your actions go into an event log, '
           'and I want to be precise about what an action is: a page opened, '
           'a scroll depth, a hesitation of two seconds before a purchase. '
           'None of that is personal data in the sense the policy means, and '
           'all of it is extremely informative in bulk.'),
          ('Engineer', 'The feature store is where my work starts. I take a '
           'log of maybe ten thousand events and produce four hundred '
           'numbers: frequency by category, time of day, speed of return, '
           'variance in basket size. That compression is the interesting '
           'step, because a log records what you did and a feature describes '
           'what you tend to do.'),
          ('Engineer', 'Then inference. From those four hundred numbers we '
           'predict traits nobody gave us: an age band, an income band, '
           'whether there is a child in the household. Each comes with a '
           'confidence, and I would say the confidences are honest and the '
           'way they are used downstream is not always.'),
          ('Engineer', 'The ranking model consumes both and orders your '
           'feed. Your response to that ordering goes straight back into the '
           'log, which is loop one, and it is the part I find genuinely '
           'uncomfortable. We are measuring our own influence and recording '
           'it as information about you. If we show you more of something and '
           'you click it, the system has learned that you like it, and it has '
           'also caused it.'),
          ('Engineer', 'Loop two is retention. Twenty-four months. That '
           'number, which lives in a policy document and not in my code, '
           'determines more about how well the system knows you than anything '
           'I will do this year. If somebody changed it to three months the '
           'whole machine would be weaker, and nobody would need to ask my '
           'permission.'),
          ('Engineer', 'So if you take one thing from the diagram, take '
           'the direction of the arrows at the bottom. Everything above '
           'them is engineering and can be argued about with me. The two '
           'at the bottom are policy, and the people who set them have '
           'never seen this slide.')],
         items=[
          (
           'The engineer says the system should be described as '
           'apparatus with two ____________.', None, 'loops',
           'Because the process description is how everybody gets it '
           'wrong.'),
          (
           'An example of a recorded action is a two-second '
           '____________.', None, 'hesitation',
           'Alongside a page opened and a scroll depth.'),
          (
           'The feature store turns ten thousand events into about '
           '____________ hundred numbers.', None, 'four',
           'Frequency by category, time of day, speed of return, '
           'variance in basket size.'),
          (
           'What does he say about the confidences on inferred traits?',
           ['They are too low', 'They are honest but used badly', 'They are hidden', 'They are inaccurate'],
           1, 'The way they are used downstream is not always honest.',
           {0: 'He does not say the confidences are too low.', 2: 'He states the confidences openly, so they are not '
               'hidden.', 3: 'He calls them honest, which is the opposite of '
               'inaccurate.'}),
          ('Why is loop one uncomfortable for him?',
           ['It is slow', 'The system records its own influence as information about you', 'It is expensive', 'It is inaccurate'],
           1,
           'If it shows you more of something and you click, it has '
           'learned and also caused it.',
           {0: 'Speed is not what troubles him about the loop.', 2: 'Cost is not mentioned in connection with the loop.', 3: 'His worry is that the loop works, not that it fails.'}),
          ('Retention is set at ____________ months.', None,
           'twenty-four',
           'A number in a policy document rather than in his code.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Being predicted',
    intro=('Take the card first. One minute to make notes, then one to two '
           'minutes of talk, and the bullets are the order to take them '
           'in. Then the discussion: four or five sentences. Try once to '
           'distinguish what was given from what was guessed.'),
    cue=('Describe something you were recommended online that you liked.',
         ['what it was',
          'where the recommendation came from',
          'why you took it',
          'and explain whether you would have found it otherwise']),
    qs=['Now look at the card. You have one minute to make notes.',
        'How do you think it was chosen for you?',
        'Do you usually follow suggestions like that?',
        'How do websites decide what to show you?',
        'Is it a problem if a company guesses things about you?',
        'Should people be told what has been guessed about them?',
        'Do recommendations make choices easier or narrower?'],
    shape=[('answer', 'From a record of what I did, summarised into a '
            'description of what I am like.'),
           ('support', 'I gave them the clicks; they produced an age and an '
            'income.'),
           ('follow-up', 'Neither of those was ever asked for.'),
           ('support', 'I would mind that less if I could see the list.'),
           ('follow-up', 'What I mind is being described accurately by '
            'somebody who never asked.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='A recommendation system',
         prompt=('The diagram below shows how a recommendation system builds '
                 'and uses a profile. Summarise the information by selecting '
                 'and reporting the main features. Write at least 150 '
                 'words.'),
         figure=_REC,
         model=[
          'The diagram shows a recommendation system consisting of eight '
          'components, through which a record of a user’s activity is '
          'converted into an ordered selection of what that user is shown. '
          'Overall, the system is not a simple sequence: two of its paths '
          'return to an earlier stage, so the output becomes part of the '
          'input.',
          'There are eight components in all. On the input side are the '
          'actions a user takes and the event log that records them. These '
          'feed a feature store, which supplies both a set of inferred traits '
          'and a ranking model. The output side consists of what the user is '
          'shown, the user’s response, and a store in which the log is '
          'retained for twenty-four months.',
          'In operation, actions are recorded in the event log and the log is '
          'then summarised in the feature store. From these features the '
          'system predicts a set of traits, which are passed as an input to '
          'the ranking model. The model orders the material the user sees.',
          'Two paths complete the device. The user’s response to what is '
          'shown is fed back into the event log, so that the effect of the '
          'system becomes further evidence about the user, while the log '
          'itself is stored for a further twenty-four months.'],
         notes=[
          'Components first, operation second. The paragraph listing the '
          'eight parts comes before any description of what happens, which is '
          'the organisation a device demands and a process forbids.',
          'The Overall statement names the feedback, because a loop is the '
          'single feature that distinguishes this diagram from a flow chart. '
          'That is the selection the rubric asks for.',
          'The final paragraph takes the two return paths together instead of '
          'burying them in the sequence, which is what keeps the description '
          'from reading as a list of arrows.'],
         criterion=[('Components before operation',
                     'Coherence and Cohesion'),
                    ('An Overall statement naming the feedback',
                     'Task Achievement'),
                    ('The return paths handled together',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    ref='L20',
    context=[
     'From the article you have just read:',
     'Only the aggregated features are retained. The raw events '
     'themselves are discarded within thirty days, which sounds '
     'reassuring and is not, because the features are the part that '
     'describes you. The notice says the company retains only what is '
     'necessary; it does not say that only the company may see it, nor '
     'that it retains it only for the stated purpose.'],
    notice=[
     ('The word only appears four times and in different positions. '
      'Copy out two of them and say what each limits.',
      'Only the aggregated features - limits WHICH data; retains only '
      'what is necessary - limits HOW MUCH'),
     ('What is the difference between "only the company may see it" '
      'and "the company may only see it"?',
      'the first limits who, the second limits what may be done')],
    noticetask='Answer both from the paragraph above, which is from '
               'the passage you read earlier in this cycle.',
    contrast='Only, even, just and at least attach to whatever follows '
             'them, and moving one moves the meaning of the whole '
             'sentence. Only the regulator may inspect the data means '
             'nobody else may. The regulator may only inspect the data '
             'means they may do nothing else with it. The regulator may '
             'inspect only the data means not the code and not the '
             'staff. All three are grammatical and they are three '
             'different rules. In speech, stress does this work; in '
             'writing, position does, and a misplaced only is one of '
             'the few errors that changes what you have promised '
             'rather than merely how you sound.',
    task2='Rewrite each so that only limits the thing named in '
          'brackets.',
    items2=[
     ('The regulator may inspect the data. (nobody else may) '
      '____________',
      None, 'Only the regulator may inspect the data.'),
     ('The regulator may inspect the data. (and do nothing else) '
      '____________',
      None, 'The regulator may only inspect the data.'),
     ('The regulator may inspect the data. (not the code) '
      '____________',
      None, 'The regulator may inspect only the data.'),
     ('Correct: I only read the first page. (I read nothing else) '
      '____________', None, 'I read only the first page.')],
    task3='Now write it carefully. Draft three sentences about what an '
          'organisation may do with your data, using only in three '
          'different positions so that each sentence makes a different '
          'promise. Then write one sentence saying which of the three '
          'you would want in a notice, and why. About seventy words.',
    items3=8,
    point='Qualification and scope: only, even, at least',
    fix=dict(
     text=('Only the figure for 2019 was published, so the earlier years '
           'cannot be checked. Even the authors admit that the sample was '
           'small. At least three of the twelve sites were excluded, which the '
           'paper does not explain. The study covered only urban areas, so the '
           'finding apply to cities and not to the country as a whole.'),
     faults=[('which the paper does not explain',
              'a decision the paper does not explain',
              ('Which here has no clear antecedent, so the reader cannot tell '
               'what is unexplained.')),
             ('the finding apply to cities',
              'the finding applies to cities',
              'The subject finding is singular, so the verb is applies.'),
             ('Only the figure for 2019 was published',
              'Only the figure for 2019 was published, and the method was not',
              'Only sets up a contrast that the sentence never completes.')]),
    explain=('Small words change the scope of a claim completely, and '
             'examiners notice when they are placed carelessly. Put the '
             'qualifier directly before what it limits.'),
    examples=['Only the retention period determines how much is stored.',
              'The retention period determines only how much is stored.',
              'Even the hesitation before a purchase is recorded.',
              'At least four hundred features are produced from the log.'],
    task='Rewrite each sentence so that the qualifier limits the right '
         'thing.',
    items=[('The system only records what you buy.',
            'The system records not only what you buy but how long you '
            'looked.'),
           ('Even the company knows your income.',
            'The company knows even your income, which you never gave it.'),
           ('The log is at least kept for two years.',
            'The log is kept for at least two years.'),
           ('Only inferred traits are predicted.',
            'Traits are predicted, and only they carry a confidence '
            'figure.'),
           ('The setting only governs the display.',
            'The setting governs only the display, and not the '
            'collection.')]),
   vocab=[('signal', 'a small piece of evidence about behaviour'),
          ('feature', 'a number summarising many events'),
          ('feedback loop', 'a path by which an output becomes an input'),
          ('scroll depth', 'how far down a page somebody reads'),
          ('confidence', 'how sure a system is of an estimate'),
          ('compression', 'reducing a large record to a small one'),
          ('downstream', 'later in a system, after this stage'),
          ('apparatus', 'a set of parts considered together')],
   expr=[('a device before it is a process',
          'announces the organisation of a description'),
         ('a log records what you did and a feature describes what you tend '
          'to do', 'marks the step from record to description'),
         ('the system has learned that you like it, and it has also caused '
          'it', 'identifies a circularity'),
         ('a number in a policy document and not in my code',
          'locates power outside the obvious place')],
   trans=['first', 'at this point', 'thereafter', 'which is'],
  ),

  dict(
   sub='Why anonymised data is not anonymous',
   step=4,
   notes=dict(
    serves='Matching headings and Yes/No/Not Given, Reading Part 3, on '
           'a seven-hundred-word passage; Task 2 planning',
    because='Band 6 essays are planned by writing down the first two '
            'ideas that arrive and arguing them; the band 7 difference '
            'is a plan with more ideas than the essay needs and a '
            'deliberate discarding',
    skill='Generating ideas fast and then throwing most of them away '
          'on a stated criterion',
    evidence='Unit 21 cycle 5 taught reading the question; unit 25 '
             'cycle 2 taught sorting it by form; what remains between '
             'the rubric and the first sentence is the plan, and the '
             'audit found it taught in one cycle of the ten',
    watch='Learners will plan three ideas and use three. Ask for ten '
          'in four minutes and then ask which two survive, and why '
          'those two',
    time='90 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='Eighty-seven per cent, from three facts',
    body='A postcode, a date of birth and a sex identify most people '
         'in most countries, and none of the three is a name. That '
         'single finding is why anonymised data is a weaker promise '
         'than it sounds, and it is the subject of the hardest reading '
         'in this unit. It is also an unusually good Task 2 subject, '
         'because the obvious positions - publish nothing, publish '
         'everything - are both clearly wrong, and the interesting '
         'answers are in between.',
    task='Answer these before you read, and write quickly: you will be '
         'asked to do the same thing against a clock later in the '
         'cycle.',
    qs=['What could be worked out about you from your postcode, your '
        'birthday and nothing else?',
        'Should medical records be published for research if names are '
        'removed?',
        'Who should decide what counts as anonymous enough?',
        'If making data safe makes it useless, what should be done '
        'with it?']),
   vocabwork=dict(
    title='The vocabulary of identifying somebody',
    body='Twelve words, and the first four are a framework rather than '
         'a list: identifier, quasi-identifier, linkage, '
         're-identification. Learn those four and the whole passage '
         'opens, because every paragraph in it is about one of them. '
         'Three of the remaining eight you met in unit 23 cycle 5, '
         'where the subject was a summary hiding a spread.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='identifying a person in a dataset',
                sub='cycle 4 · four of these are the framework',
                branches=[('what identifies',
                           ['identifier', 'quasi-identifier',
                            'linkage', 're-identification']),
                          ('making it safer',
                           ['aggregation', 'generalisation', 'noise',
                            'suppression']),
                          ('what is lost',
                           ['granularity', 'utility', 'accuracy',
                            'resolution']),
                          ('the arithmetic',
                           ['combinatorial', 'group size',
                            'uniqueness', 'electoral register'])],
                note='Linkage is the operation that does the damage: '
                     'joining two harmless datasets so that each '
                     'supplies what the other lacks. Nothing in '
                     'either file was identifying and the join is.'),
    figure2=dict(kind='cline', teaches='scale',
                 title='How anonymous is it?',
                 sub='cycle 4 · the words the passage uses, in order',
                 left='fully identified', right='mathematically safe',
                 items=[('named', 0.02),
                        ('pseudonymised', 0.2),
                        ('de-identified', 0.36),
                        ('aggregated to groups of five', 0.56),
                        ('generalised and noised', 0.76),
                        ('provably private', 0.96)],
                 note='Only the last of these is a guarantee and only '
                      'the first two are in common use. Everything '
                      'between is a judgement about how much risk is '
                      'acceptable, which is why the argument never '
                      'ends.'),
    task='Complete each sentence with a word from this cycle.',
    items=[
     ('A fact that identifies nobody alone but does in combination is '
      'a ____________.', None, 'quasi-identifier'),
     ('Joining two datasets so each supplies what the other lacks is '
      '____________.', None, 'linkage'),
     ('Replacing an exact age with a ten-year band is '
      '____________.', None, 'generalisation'),
     ('Deliberately adding small errors is adding ____________.',
      None, 'noise'),
     ('How much detail survives the process is its '
      '____________.', None, 'granularity'),
     ('How useful the data still is afterwards is its '
      '____________.', None, 'utility'),
     ('Replacing a name with a code, reversibly, is '
      '____________.', None, 'pseudonymisation'),
     ('Being the only person in the data with a combination is '
      '____________.', None, 'uniqueness')]),
   builder=dict(
    skill='Task 2 planning: generate, then discard',
    qkind='skill',
    explain='The four minutes between reading a Task 2 prompt and '
            'writing the first sentence decide more of the mark than '
            'any four minutes afterwards, and most candidates spend '
            'them writing down the first two ideas that arrive and '
            'then arguing those. The trouble with your first two ideas '
            'is not that they are bad; it is that they are the two '
            'everybody has, so an essay built on them is competent and '
            'ordinary. The method is to separate generating from '
            'choosing, because doing both at once does neither well. '
            'Spend ninety seconds writing down as many ideas as you '
            'can without judging any of them - eight or ten, bad ones '
            'included, in note form. Then spend ninety seconds '
            'discarding on a stated criterion: which two can I '
            'actually support with an example, which two does my '
            'position need, which two are different from each other '
            'rather than the same idea twice. Keep two, or three for '
            'a longer essay. The discarded six are not wasted: they '
            'are what makes the kept two the strongest rather than '
            'merely the first.',
    worked=[
     'PROMPT: anonymised data should be published freely for research. '
     'To what extent do you agree?',
     'Ninety seconds of generating: research gains; privacy loss; '
     're-identification risk; who audits; consent was never given; '
     'the poor are over-represented in public datasets; anonymity is '
     'not binary; researchers are not the threat; commercial reuse; '
     'medicine has saved lives this way.',
     'Ten ideas, written badly, in ninety seconds. Now the criterion: '
     'which can I support with something concrete from this unit, and '
     'which two are genuinely different?',
     'Keep: anonymity is not binary - supported by the eighty-seven '
     'per cent finding. And commercial reuse - supported by the '
     'linkage example. Discard the rest.',
     'Notice that "research gains" and "medicine has saved lives" are '
     'the same idea, and that both were in the first three I thought '
     'of. That is what the discarding step is for.'],
    figure=dict(kind='matrix', teaches='comparison',
                title='Ten ideas, two survivors',
                sub='cycle 4 · the criterion, applied',
                cols=['Can I support it?', 'Is it distinct?',
                      'Keep or discard?'],
                rows=['Anonymity is not binary',
                      'Research saves lives',
                      'Commercial reuse',
                      'Consent was never given'],
                cells=[['yes - the 87% finding', 'yes', 'keep'],
                       ['yes - but general', '', ''],
                       ['yes - the linkage case', 'yes', 'keep'],
                       ['', '', '']],
                note='Five blanks. Fill them before you look at the '
                     'worked example, and notice how often "is it '
                     'distinct?" is the column that does the '
                     'discarding.'),
    task='For each pair of ideas, say whether they are DISTINCT or '
         'THE SAME IDEA TWICE.',
    items=[
     ('Research saves lives / medicine has advanced this way.',
      None, 'same idea twice'),
     ('Anonymity is not binary / re-identification is possible.',
      None, 'same idea twice'),
     ('Consent was never given / the poor are over-represented.',
      None, 'distinct'),
     ('Commercial reuse / who audits the researchers.',
      None, 'distinct'),
     ('Privacy is a right / people care about privacy.',
      None, 'same idea twice'),
     ('Noise costs accuracy / safe data is useless data.',
      None, 'same idea twice')],
    note='Four of the six pairs are the same idea wearing two coats, '
         'and in each case both halves would have arrived in the '
         'first thirty seconds of planning. An essay with two body '
         'paragraphs making one point is the commonest band 6 essay '
         'there is, and this exercise is the only reliable way to '
         'catch it before it is written.'),
   figures=[
    dict(kind='skeleton', teaches='text-structure',
         title='Seven hundred words, six functions',
         sub='cycle 4 · build your own from first and last lines',
         paras=[('A', 'claim', 'Anonymous is not a property of a '
                 'file'),
                ('B', 'definition', 'Identifier, quasi-identifier, '
                 'linkage'),
                ('C', 'evidence', 'Eighty-seven per cent, from three '
                 'fields'),
                ('D', 'example', 'Two public datasets, joined'),
                ('E', 'concession', 'What generalisation and noise '
                 'can do'),
                ('F', 'consequence', 'Why the question is one of '
                 'degree')],
         note='B defines and D illustrates, and both are full of '
              'datasets - the pair from unit 22 cycle 4. C is the '
              'paragraph to read whole, because every other '
              'paragraph points at its number.'),
   ],
   advice='Spend four minutes planning a Task 2 and split them in '
          'half: ninety seconds generating without judging, ninety '
          'seconds discarding on a criterion you can state. The '
          'commonest planning failure is not having too few ideas, it '
          'is keeping the first two - which are the two every other '
          'candidate also had, so the essay is correct and '
          'indistinguishable.',
   debrief=dict(
    read=['The heading naming the two public datasets belongs to '
          'paragraph D and not to paragraph B, which defines linkage '
          'and uses them as its example. That is unit 22 cycle 4 '
          'again, and it is the pair that costs most.',
     'The Yes/No/Not Given statement about researchers is one the '
     'passage reports from a critic and answers in the same '
     'paragraph.',
     'Statement 54 says anonymisation "cannot work" and the passage '
     'says it is a matter of degree. Scope, not content - which is '
     'unit 23 cycle 4.'],
    listen=['Dr Rossi gives the figure eighty-seven and then a second '
            'figure for a different country. The question names the '
            'country.',
     'She says "anyone who tells you otherwise is selling something", '
     'which is her view and sounds like a report. There is no '
     'handover phrase.']),
   outside='Generating and then discarding is how any decision with '
           'more than two options should be made, and almost nobody '
           'does it, because the first idea arrives with a feeling of '
           'rightness that the eighth does not. The eighth is often '
           'better.',
   recycled=['linkage', 'aggregate', 'spread', 'evidence',
             'granularity', 'inferred'],
   read=[
    dict(heading='Three fields and a name',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 42-48',
         paras=[
          'Organisations that wish to publish or share data about people '
          'usually begin by removing the obvious identifiers: the name, the '
          'address, the account number. The resulting file is described as '
          'anonymised, and a great deal of policy rests on the idea that such '
          'a file is no longer about identifiable individuals. The idea is '
          'approximately forty years old and has been known to be wrong for '
          'about half that time. It survives because it is administratively '
          'convenient and because the alternative requires somebody to '
          'make a judgement and sign it.',
          'The reason is that identity does not live in a name. It lives in '
          'the combination of attributes that happens to be unique to one '
          'person in a population, and most populations are far smaller than '
          'the number of possible combinations. A date of birth, a postcode '
          'and a sex are enough to pick out a single individual in a '
          'surprisingly large fraction of a national population, and none of '
          'those three is an identifier in the ordinary sense.',
          'Fields of this kind are called quasi-identifiers. Individually '
          'they describe thousands of people. Jointly they often describe '
          'one, and the arithmetic is unforgiving: each additional field '
          'multiplies the number of possible combinations, while the '
          'population it must be spread across stays the same. Three fields '
          'give a few hundred thousand possibilities; six give more than '
          'there are people, at which point almost every combination '
          'belongs to one person or to nobody.',
          'The attack that follows is called linkage. The analyst takes the '
          'anonymised file and a second dataset in which the same '
          'quasi-identifiers appear alongside names — an electoral register, '
          'a leaked customer list, a set of public profiles — and matches the '
          'two. Every record whose combination is unique in both files is '
          'then named, and the anonymised file has become a named one without '
          'anybody breaking into anything. The work requires no special access '
          'and no unusual skill, which is why so much of it has been done '
          'by students as coursework.',
          'Published demonstrations of this are now numerous enough to be '
          'boring. Hospital discharge records, taxi journeys, mobile phone '
          'location traces, film ratings and credit card transactions have '
          'all been re-identified at scale, in each case from a file its '
          'publisher believed to be anonymous and in several cases within '
          'days of publication.',
          'What makes the problem structural rather than fixable is that '
          'anonymity is not a property of a file. It is a property of a file '
          'and of everything else in the world that might be joined to it, '
          'which means it can be destroyed later by the publication of '
          'something unrelated, without the original file changing at all. A '
          'dataset can be anonymous on Monday and identifying on Friday.',
          'There are genuine defences, and their cost is the reason they are '
          'resisted. Aggregation publishes counts instead of records. '
          'Generalisation replaces a date of birth with a year and a postcode '
          'with a region. Noise addition perturbs each value slightly so that '
          'no single record is exactly right while the totals remain usable. '
          'All three reduce what the data can be used for, which is precisely '
          'what the people who want the data object to. A researcher asking '
          'whether a treatment works in one small region cannot answer '
          'the question from a file in which the region has been widened '
          'to a quarter of the country.',
          'The honest summary is that a file can be made safe or can be made '
          'useful, and that the two aims trade against each other along a '
          'curve nobody can escape by better engineering. What the law '
          'currently asks for is a file that is anonymous, which invites the '
          'cheapest possible answer: delete the name, declare the problem '
          'solved, and leave the arithmetic to somebody who is not reading '
          'the policy.',
                ('A last observation concerns who bears the risk of being '
                 'wrong. The institution releasing a file carries a '
                 'reputational cost if it is re-identified, and the cost is '
                 'bounded: an apology, an inquiry, a change of policy. The '
                 'person in the file carries an unbounded one, because a '
                 'medical record that has been linked to a name cannot be '
                 'unlinked, and no apology restores it. A rule that balances '
                 'the two interests has to notice that asymmetry, and the '
                 'present arrangement, in which the releasing body decides '
                 'alone, does not.')],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Removing the name', 'Where identity actually lives', 'The linkage attack', 'Defences and their cost'],
           1,
           'In the combination of attributes unique to one person in a '
           'population.',
           {0: 'Removing the name is paragraph 1, the standard '
               'practice.', 2: 'The linkage attack is the heading for paragraph 4.', 3: 'Defences and their cost is the heading for paragraph '
               '7.'}),
          ('Choose the best heading for paragraph 4.',
           ['Where identity lives', 'Quasi-identifiers', 'The linkage attack', 'A structural problem'],
           2,
           'Matching the anonymised file against a second dataset '
           'containing names.',
           {0: 'Where identity lives is paragraph 2, on combinations.', 1: 'Quasi-identifiers are named in paragraph 3.', 3: 'The structural problem is paragraph 6, on other '
               'datasets.'}),
          ('Choose the best heading for paragraph 7.',
           ['A structural problem', 'Defences and their cost', 'Published demonstrations', 'The honest summary'],
           1,
           'Aggregation, generalisation and noise addition, all of '
           'which reduce usefulness.',
           {0: 'The structural problem is paragraph 6, on other '
               'datasets.', 2: 'The demonstrations are paragraph 5, from taxis to card '
               'data.', 3: 'The honest summary is paragraph 8, on the trade-off.'}),
          (
           'The writer believes removing names makes a file anonymous.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 calls that idea known to be wrong for about '
           'twenty years.',
           {0: 'Yes would need anonymity; paragraph 1 calls that known '
               'to be wrong.', 2: 'Not Given is wrong because de-identification is the '
               'subject.'}),
          (
           'The writer believes better engineering will solve the '
           'problem.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph describes a curve nobody can escape by '
           'better engineering.',
           {0: 'Yes would need a technical solution; the final '
               'paragraph describes a curve nobody escapes.', 2: 'Not Given is wrong because the limits of engineering '
               'are stated.'}),
          ('Fields that describe many people individually but one person '
           'jointly are called ____________.', None, 'quasi-identifiers',
           'Paragraph 3, where each added field multiplies the '
           'combinations.'),
          ('The writer says a dataset can be anonymous on Monday and '
           '____________ on Friday.', None, 'identifying',
           'Paragraph 6, because something unrelated may be published in '
           'between.')])],
   listen=[
    dict(preview=True,
         heading='A statistician on the word anonymous',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='The lecture you are about to hear takes the word '
             'anonymous apart. Ninety seconds now and it stops being a '
             'surprise.',
         script=[
          ('Student', 'If they take the names off, it is anonymous. '
                      'That is what anonymous means.'),
          ('Dr Rossi', 'It is what the word means and it is not what '
                       'the data is. Give me a postcode, a date of '
                       'birth and a sex and I will identify about '
                       'eighty-seven per cent of the population of this '
                       'country.'),
          ('Student', 'From three things that are not names.'),
          ('Dr Rossi', 'From three things nobody thinks of as '
                       'identifying. We call them quasi-identifiers, '
                       'and the arithmetic is simple: each one divides '
                       'the population, and three divisions leave very '
                       'small groups. Often a group of one.'),
          ('Student', 'So what would make it actually anonymous?'),
          ('Dr Rossi', 'Removing enough that the smallest group is '
                       'still large. Which means removing the detail '
                       'that made the data worth publishing, and that '
                       'is the trade nobody wants to make out loud.'),
          ('Student', 'Can you not add noise?'),
          ('Dr Rossi', 'You can, and it works, and it costs accuracy '
                       'in proportion. There is no version of this '
                       'where you keep the usefulness and lose the '
                       'risk. Anyone who tells you otherwise is '
                       'selling something.')],
         items=[
          ('Dr Rossi says a postcode, a date of birth and a sex '
           'identify about ____________ per cent of the population.',
           None, 'eighty-seven',
           'Her first long answer, and it is the figure the lecture '
           'returns to.'),
          ('Things nobody thinks of as identifying are called '
           '____________.', None, 'quasi-identifiers',
           'Her second answer, with the arithmetic of dividing the '
           'population.'),
          ('Adding noise works but costs ____________ in proportion.',
           None, 'accuracy',
           'Her last turn: there is no version where you keep the '
           'usefulness and lose the risk.')]),
    dict(heading='A lecture on re-identification', part='Part 4',
         task='A lecture on anonymised data · matching, sentence completion and multiple choice', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'I am going to give you one number and then spend the '
           'rest of the hour on its consequences. Date of birth, postcode, '
           'sex. Three fields, none of them an identifier, and they pick out '
           'a single person in most national populations far more often than '
           'anybody designing a privacy policy expects.'),
          ('Lecturer', 'The reason is combinatorial and it is worth seeing '
           'rather than being told. Each field you add multiplies the number '
           'of possible combinations, while the number of people those '
           'combinations have to be spread across does not change. Add '
           'enough fields and almost every combination describes nobody or '
           'exactly one person.'),
          ('Lecturer', 'So the attack is simple. You have an anonymised file '
           'with those three fields and a medical diagnosis. I have a second '
           'file with the same three fields and a name, because electoral '
           'registers exist, leaked customer lists exist, and people post '
           'their own birthdays. I join the two on the three fields, and '
           'every unique match is now a named diagnosis.'),
          ('Lecturer', 'This has been demonstrated on hospital records, taxi '
           'trips, phone location traces, film ratings and card '
           'transactions. In several of those cases the re-identification was '
           'published within a week of the dataset, by a student, using a '
           'laptop and a public register.'),
          ('Lecturer', 'The part I want you to take away is the structural '
           'claim, because it is what people miss. Anonymity is not a '
           'property of your file. It is a property of your file together '
           'with every other dataset in the world. Which means somebody '
           'else’s publication can de-anonymise your file next year while '
           'your file sits untouched on a server, and no audit of your own '
           'practices would show it.'),
          ('Lecturer', 'The defences all work and they all cost. Publish '
           'counts instead of rows. Replace a date of birth with a year, a '
           'postcode with a region. Add small random errors so that no row is '
           'exactly right and the totals still are. Each of those makes the '
           'data less useful, which is why the researchers who want it push '
           'back, and they are not being unreasonable: a file safe enough to '
           'publish freely sometimes cannot answer the question it was '
           'collected to answer.'),
          ('Lecturer', 'I will finish on the practical consequence for '
           'anybody who ends up making these decisions. Do not ask '
           'whether a file is anonymous, because that question has no '
           'stable answer. Ask who will be able to join it to what, and '
           'how hard you have made that, and write down your reasoning so '
           'that somebody can revisit it when the world changes.')],
         items=[
          ('Which three fields does the lecturer name?',
           ['Name, address, age', 'Date of birth, postcode, sex', 'Postcode, income, sex', 'Name, postcode, diagnosis'],
           1, 'None of which is an identifier in the ordinary sense.',
           {0: 'A name and address are identifiers, which is his point '
               'against.', 2: 'Income is not among the three fields he names.', 3: 'A diagnosis is what the attack reveals, not an input '
               'field.'}),
          (
           'Adding a field multiplies the combinations while the '
           '____________ stays the same.', None,
           'population',
           'Which is why almost every combination ends up describing '
           'one person or nobody.'),
          ('The second file in the attack contains',
           ['the same fields and a name', 'medical records', 'postcodes only', 'nothing useful'],
           0,
           'From an electoral register, a leaked list, or what people '
           'post themselves.',
           {1: 'Medical records are in the anonymised file, not the '
               'second one.', 2: 'Postcodes alone would not name anybody.', 3: 'The second file supplies the names, so it is '
               'essential.'}),
          (
           'In several published cases, re-identification took about a '
           '____________.', None, 'week',
           'By a student, using a laptop and a public register.'),
          ('The structural claim is that anonymity is a property of',
           ['a file', 'a file together with every other dataset', 'an organisation', 'a law'],
           1,
           'So somebody else\u2019s publication can de-anonymise your file '
           'later.',
           {0: 'A file alone is what he says it is wrongly taken to '
               'be.', 2: 'The organisation is not where the property sits.', 3: 'The law is what fails to capture the property.'}),
          (
           'Researchers resist the defences because they make the data '
           'less ____________.', None, 'useful',
           'And the lecturer says they are not being unreasonable.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Data that cannot be taken back',
    followup=[(('You say data cannot be made completely anonymous. Is that not '
                'an argument against all research use?'),
               ('No, because the alternative also has a cost, and it is paid '
                'in treatments nobody develops. The realistic aim is not '
                'anonymity but a combination of restricted access, audited use '
                'and real penalties, so that re-identification is possible in '
                'theory and pointless in practice.')),
              ('Who should decide what gets published?',
               ('Not the body that benefits from publishing, which is the '
                'arrangement we usually have. I would want a panel that '
                'includes people whose records are in the dataset, because '
                'they are the only members with something to lose, and a '
                'published record of what was refused as well as what was '
                'approved.')),
              ('Can a release of information ever be undone?',
               ('Legally, sometimes. Practically, no, and that asymmetry is '
                'the whole reason for caution. A file can be copied in a '
                'second and deleted only where you know it is, so a decision '
                'to release has to be taken as though it were permanent, '
                'because for everybody affected it is.'))],
    intro=('The card comes first. Make your notes inside the minute you '
           'are given, speak until you are stopped, and let the last '
           'bullet carry the weight. Then the discussion: four or five '
           'sentences. Try once to say that a property depends on '
           'something outside the thing itself.'),
    cue=(('Describe a form you had to fill in with a lot of personal '
          'information.'),
         ['what it was for',
          'what it asked you',
          'who you gave it to',
          'and explain how you felt about handing it over']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Were you told what would happen to it?',
        'Could you have refused?',
        'Can information about people ever be made completely anonymous?',
        'Should researchers be given access to medical records?',
        'Who should decide what data is published?',
        'Is it possible to undo a release of information?'],
    shape=[('answer', 'Not reliably, because anonymity depends on what else '
            'exists.'),
           ('support', 'Three ordinary fields often identify one person.'),
           ('follow-up', 'So a file can stop being anonymous without '
            'changing.'),
           ('support', 'Which means release is effectively permanent.'),
           ('follow-up', 'And that is an argument for deciding slowly '
            'rather than for never deciding.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Ideas that are developable in four sentences',
         prompt=('Should the collection of personal data be strictly '
                 'limited? Brainstorm eight ideas, then test each one by '
                 'trying to write four sentences on it in your head. Keep '
                 'the two that survive. Do not write the essay yet.'),
         plan=('Collection should be limited by use and duration rather '
               'than by amount, because the harm lies in later use',
               [('A limit on amount fails because small signals are the '
                 'informative ones',
                 ['hesitation and scroll depth are not personal data',
                  'yet four hundred features are built from them']),
                ('A limit on duration bites where a limit on collection '
                 'does not',
                 ['a profile rests on two years, not on a session',
                  'retention is a number somebody can simply change'])]),
         notes=[
          'The four-sentence test is the whole exercise. An idea you cannot '
          'develop in four sentences will become a paragraph of restatement, '
          'and you will not notice until you are writing it under time '
          'pressure.',
          'Ideas usually fail the test for one of two reasons: they are true '
          'but have no second sentence ("privacy is important"), or they need '
          'six sentences of background before the point arrives. Both are '
          'worth discovering in the planning minute.',
          'Notice that both surviving ideas here attack the framing of the '
          'question rather than answering it as asked. That is permitted and '
          'is often where the best Task Response marks come from, provided '
          'you answer the question too.'],
         criterion=[('Testing each idea for developability',
                     'Task Response'),
                    ('Keeping only ideas with a second and third sentence',
                     'Coherence and Cohesion')],
         instruct='  Produce the eight ideas, the test and the outline. You '
                  'will write it in cycle 5.',
         lines=12)],
   gram=dict(
    ref='L9',
    context=[
     'From the passage you have just read:',
     'No study has yet shown that a properly generalised dataset can be '
     're-identified at scale. That is a negative result and it licenses '
     'less than it is usually taken to license. It does not show that '
     'such a dataset is safe; it shows that nobody has published a '
     'method, which is a fact about the literature rather than about '
     'the data. The honest summary is that the risk is unquantified, '
     'not that it is low.'],
    notice=[
     ('Find the sentence that says what the negative result does NOT '
      'establish.',
      'It does not show that such a dataset is safe'),
     ('What does the writer say the result is a fact about?',
      'the literature, rather than the data')],
    noticetask='Answer both from the paragraph above, which you met '
               'earlier in this cycle.',
    contrast='A negative result - no study has shown, no evidence was '
             'found, the trial found no effect - is one of the most '
             'misquoted things in English, and the misquotation is '
             'always the same: absence of evidence read as evidence of '
             'absence. The structures that keep it honest are worth '
             'memorising. No study has shown X; it does not follow '
             'that X is false. The trial found no effect, which is '
             'consistent with a small effect it was too small to '
             'detect. The risk is unquantified rather than low. You '
             'met the parent of this move in unit 22 cycle 4 - it does '
             'not follow that - and this is the version for evidence '
             'rather than for aggregates.',
    task2='Rewrite each so that the negative result licenses only what '
          'it should.',
    items2=[
     ('No study has found a risk, so it is safe. ____________',
      None, 'No study has found a risk; it does not follow that there '
      'is none.'),
     ('The trial found no effect, so the drug does not work. '
      '____________',
      None, 'The trial found no effect, which is consistent with an '
      'effect too small for it to detect.'),
     ('Nobody has re-identified it, so it cannot be done. '
      '____________',
      None, 'Nobody has published a method; the risk is unquantified '
      'rather than low.'),
     ('Correct: there is no evidence of harm, therefore there is '
      'evidence of no harm. ____________',
      None, 'absence of evidence is not evidence of absence')],
    task3='Now write it. Take the negative result in this cycle - no '
          'published method for re-identifying generalised data - '
          'state it fairly, say exactly what it does and does not '
          'license, and give the honest summary. Eighty to a hundred '
          'words.',
    items3=10,
    point='Negative results and what they license',
    explain=('A result showing that something cannot be done supports some '
             'conclusions and not others. These patterns state a negative '
             'result and its limits in one move.'),
    examples=['Anonymity is a property of a dataset and its neighbours, not '
              'of a file.',
              'No amount of engineering escapes the trade-off.',
              'That it cannot be made perfectly safe is not an argument for '
              'making it unsafe.',
              'The demonstration shows the method fails, and not that the '
              'aim is worthless.'],
    task='Rewrite each conclusion so that it does not claim more than the '
         'negative result allows.',
    items=[('Anonymisation does not work, so data should never be shared.',
            'Anonymisation cannot be guaranteed, which argues for controlled '
            'access rather than for no sharing.'),
           ('Re-identification is possible, so privacy is dead.',
            'Re-identification is possible from published files, which makes '
            'publication the decision that matters.'),
           ('The study found no effect, so there is no effect.',
            'The study found no effect at this sample size, which does not '
            'establish that none exists.'),
           ('Rules have failed, so rules are useless.',
            'This rule failed because it named files rather than uses, which '
            'is an argument about drafting.'),
           ('Nothing is secure, so security is pointless.',
            'Nothing is perfectly secure, and the useful question is how much '
            'effort an attack requires.')]),
   vocab=[('re-identification', 'naming people in a supposedly anonymous '
           'file'),
          ('quasi-identifier', 'a field that identifies only in combination'),
          ('linkage', 'matching two datasets on shared fields'),
          ('aggregation', 'publishing counts instead of records'),
          ('generalisation', 'replacing a precise value with a broader one'),
          ('noise', 'small deliberate errors added to data'),
          ('electoral register', 'a public list of voters'),
          ('combinatorial', 'to do with the number of possible '
           'combinations')],
   expr=[('identity does not live in a name',
          'relocates a concept before arguing about it'),
         ('numerous enough to be boring',
          'conveys that a result is no longer disputed'),
         ('anonymous on Monday and identifying on Friday',
          'dramatises a dependence on outside events'),
         ('they are not being unreasonable',
          'grants good faith to the opposing side')],
   trans=['consequently', 'which in turn', 'as a result', 'what makes'],
  ),

  dict(
   sub='Whether rules can keep up',
   step=5,
   notes=dict(
    serves='Matching information and Yes/No/Not Given, Reading Part 3; '
           'Task 2, discuss both views and give your own opinion',
    because='Band 6 body paragraphs do two or three jobs at once - '
            'they argue, concede, illustrate and digress inside eight '
            'lines - and Coherence and Cohesion is marked on whether a '
            'reader can say what each paragraph was for',
    skill='Building a paragraph that does one job, with a topic '
          'sentence that names the job',
    evidence='Phase 4: the band 6.5 models average 2.4 distinct jobs '
             'per body paragraph against 1.1 in the band 9 models, '
             'which is most of the Coherence gap',
    watch='Learners will write a paragraph that starts on regulation '
          'and ends on consent. Ask them to write its topic sentence '
          'afterwards and watch them need two',
    time='95 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='Precise and obsolete, or durable and unclear',
    body='This is the last cycle of the first half of the book, and '
         'the argument in it is one you have now met three times in '
         'three subjects: a genuine trade-off where both options are '
         'defensible and the usual public debate pretends one of them '
         'is obviously right. In unit 22 it was the market and the '
         'worker; in unit 24 it was the hazard and the exposure; here '
         'it is a rule you can understand and a rule that survives. '
         'The writing task is correspondingly the hardest in the book '
         'so far, which is why this cycle is about the paragraph '
         'rather than the essay.',
    task='Answer these before you read. Look back at what you wrote at '
         'the start of cycle 1, and at unit 22 cycle 5.',
    qs=['Would you rather have a rule you can understand or one that '
        'will still apply in ten years?',
        'Who benefits from a vague rule? Who from a precise one?',
        'Is "we will decide in court" an acceptable way to run a '
        'system?',
        'Has anything in this unit changed what you thought at the '
        'start of it? Which cycle did it?']),
   vocabwork=dict(
    title='The vocabulary of rules and their limits',
    body='The last vocabulary set of the first half of the book. '
         'Twelve words about how rules are written, enforced and '
         'avoided, and they transfer to any regulated activity - '
         'building, medicine, finance, food. Five of them you met in '
         'unit 24 cycle 5, where the subject was liability for a '
         'flood.',
    figure=dict(kind='field', teaches='vocabulary',
                centre='a rule, and the gap around it',
                sub='cycle 5 · five of these are from unit 24 cycle 5',
                branches=[('how it is written',
                           ['statute', 'technology-neutral',
                            'drafting', 'definition']),
                          ('how it is applied',
                           ['enforcement', 'guidance', 'inspect',
                            'test case']),
                          ('how it is avoided',
                           ['loophole', 'workaround',
                            'letter of the law', 'forum shopping']),
                          ('what it costs',
                           ['compliance burden', 'legal certainty',
                            'chilling effect', 'diffuse harm'])],
                note='A diffuse harm is one spread so thinly across so '
                     'many people that nobody has enough at stake to '
                     'complain. It is the reason privacy law is '
                     'enforced by regulators rather than by '
                     'individuals, and it applies equally to pollution '
                     'and to small overcharging.'),
    figure2=dict(kind='family', teaches='word-formation',
                 sub='cycle 5 · and the last word family of the half',
                 rows=[(('en-force', 2), ('en-force-ment', 2), '',
                        ('en-force-a-ble', 2), ''),
                       (('com-ply', 2), ('com-pli-ance', 2), '',
                        ('com-pli-ant', 2), ''),
                       (('reg-u-late', 1), ('reg-u-la-tion', 3),
                        ('reg-u-la-tor', 1), ('reg-u-la-to-ry', 1),
                        ''),
                       (('in-ter-pret', 2), ('in-ter-pre-ta-tion', 4),
                        '', '', ''),
                       ('', ('cer-tain-ty', 1), '', ('cer-tain', 1),
                        ('cer-tain-ly', 1))],
                 note='Comply takes with: comply with the rule, never '
                      'comply the rule. Regulate takes a direct '
                      'object. Both are tested and the first is '
                      'wrong about half the time at this band.'),
    task='Complete each sentence with a word from this cycle, in the '
         'right form.',
    items=[
     ('A rule describing conduct rather than a mechanism is '
      '____________.', None, 'technology-neutral'),
     ('A gap that lets somebody obey the words and defeat the purpose '
      'is a ____________.', None, 'loophole'),
     ('Knowing in advance whether you have broken a rule is legal '
      '____________.', None, 'certainty'),
     ('A harm spread so thinly nobody complains is ____________.',
      None, 'diffuse'),
     ('The noun from comply is ____________.', None, 'compliance'),
     ('The preposition after comply is ____________.', None, 'with'),
     ('The cost to everybody of obeying a rule is the compliance '
      '____________.', None, 'burden'),
     ('A case brought deliberately to settle what a rule means is a '
      '____________ case.', None, 'test')]),
   builder=dict(
    skill='Task 2: one paragraph, one job',
    qkind='skill',
    explain='Coherence and Cohesion is a quarter of the Task 2 mark '
            'and it is not mainly about linking words, which is what '
            'most candidates spend their effort on. It is about '
            'whether a reader can say, after each paragraph, what that '
            'paragraph was for. A band 6 body paragraph typically does '
            'two or three jobs: it states a view, concedes something, '
            'gives an example and then drifts into the next point, and '
            'because every sentence is relevant nothing feels wrong '
            'while writing it. The test is brutal and takes ten '
            'seconds. After you have written a paragraph, try to write '
            'its topic sentence in one clause. If you need two clauses '
            'joined by and, the paragraph was two paragraphs. The '
            'discipline that prevents it: decide the job before you '
            'write - argue, concede, illustrate, compare, qualify - '
            'write the topic sentence naming it, and then let every '
            'other sentence in the paragraph serve that job or go '
            'somewhere else. Four body paragraphs each doing one job '
            'is clearer than three doing two, and shorter.',
    worked=[
     'A band 6 paragraph: “Regulation is necessary because companies '
     'will not restrain themselves, although it is true that rules '
     'become outdated, and for example the cookie rules did nothing '
     'about fingerprinting, which shows that we should think about '
     'how rules are written.”',
     'Try the topic sentence: “Regulation is necessary AND rules '
     'become outdated AND the drafting matters.” Three clauses, so '
     'three jobs.',
     'Rewritten as one job: “Regulation is necessary because the harm '
     'here is diffuse: no individual loses enough to sue, so no '
     'individual will. The whole of privacy law follows from that '
     'single fact about the shape of the damage.”',
     'One claim, one reason, one consequence. The concession about '
     'obsolescence is a real point and it is the next paragraph’s '
     'job, where it will get the space it deserves.'],
    figure=dict(kind='langbank', teaches='useful-language',
                title='Topic sentences that name the job',
                sub='cycle 5 · one clause each, on purpose',
                groups=[('arguing',
                         ['The case for X rests on',
                          'X is necessary because',
                          'The decisive consideration is',
                          'What settles this is'],
                         'Regulation is necessary because the harm '
                         'here is diffuse.'),
                        ('conceding',
                         ['There is real force in the objection that',
                          'The strongest case against is',
                          'This is true as far as it goes',
                          'Granted'],
                         'There is real force in the objection that '
                         'rules naming a technology are obsolete '
                         'within a decade.'),
                        ('qualifying',
                         ['This holds only where',
                          'The claim is narrower than it looks',
                          'Two conditions limit this',
                          'It does not follow that'],
                         'This holds only where a regulator exists '
                         'and is funded to act.')]),
    task='For each paragraph opening, write how many jobs it promises '
         'and what they are.',
    items=[
     ('“Regulation is necessary because the harm is diffuse.”',
      None, 'one, arguing'),
     ('“Regulation is necessary, although rules go out of date.”',
      None, 'two, arguing and conceding'),
     ('“There is real force in the objection that rules age.”',
      None, 'one, conceding'),
     ('“Firms resist rules and users do not read notices, so '
      'something must change.”', None, 'two, two claims'),
     ('“This holds only where a regulator is funded.”',
      None, 'one, qualifying'),
     ('“For example, the cookie rules failed, which shows drafting '
      'matters and that neutrality is better.”',
      None, 'two, illustrating and arguing')],
    note='Three of the six promise two jobs, and all three would read '
         'perfectly well in an essay. That is what makes this hard to '
         'catch: nothing is wrong with the sentences, only with how '
         'many things the paragraph is about to try to do.'),
   figures=[
    dict(kind='skeleton', teaches='text-structure',
         title='The last passage of the half, in six boxes',
         sub='cycle 5 · one job each, which is the lesson',
         paras=[('A', 'context', 'How the last thirty years were '
                 'written'),
                ('B', 'claim', 'The choice is a trade, not a '
                 'mistake'),
                ('C', 'evidence', 'Cookies, fingerprinting, and ten '
                 'years'),
                ('D', 'concession', 'What vagueness costs the '
                 'cautious'),
                ('E', 'qualification', 'Where neutrality works '
                 'anyway'),
                ('F', 'consequence', 'What to write instead')],
         note='Six paragraphs, six jobs, one each. Read the first '
              'sentence of each and notice that you can name its job '
              'from that sentence alone. That is what your own '
              'paragraphs should do, and it is Coherence and Cohesion '
              'in one observation.'),
    dict(kind='bridge', teaches='paraphrase',
         sub='cycle 5 · the matching-information set turns on these',
         left='THE QUESTION SAYS', right='THE PASSAGE WROTE',
         pairs=[('a rule that names a machine',
                 'technology-specific drafting', 'nominalisation'),
                ('nobody knows if they have broken it',
                 'the absence of legal certainty', 'reformulation'),
                ('firms move to easier countries',
                 'forum shopping', 'hypernym'),
                ('it is not a problem to be fixed',
                 'a trade to be made deliberately', 'negation'),
                ('the law was overtaken',
                 'the statute was outpaced', 'synonym'),
                ('small losses spread widely',
                 'diffuse harm', 'reformulation')],
         note='The fourth is the claim of the whole passage and the '
              'answer to two questions. The passage refuses the '
              'question’s own framing, which is the move you met in '
              'unit 24 cycle 4.'),
   ],
   advice='Before each body paragraph, decide its job in one word - '
          'argue, concede, illustrate, qualify - and write a topic '
          'sentence that names it. After writing, try to summarise '
          'the paragraph in one clause; if you need an and, you have '
          'written two paragraphs stuck together, and Coherence and '
          'Cohesion is where that is paid for. Four paragraphs doing '
          'one job each beats three doing two.',
   debrief=dict(
    read=['The matching-information question about forum shopping has '
          'two candidate paragraphs. One names the practice and one '
          'gives an instance of it.',
     'The statement that the writer prefers precise rules is NO: the '
     'writer says explicitly that this is a trade rather than a '
     'problem with a right answer, which is the fourth pair on the '
     'bridge.',
     'One statement is a fair summary of paragraph D and presents it '
     'as the writer’s conclusion. D is a concession - the same trap '
     'as unit 24 cycle 5, and the third time this book has set it.'],
    listen=['The speaker lists three remedies and says the second is '
            'the only one that has been tried. The question asks what '
            'has been tried.',
     'In the matching task two of the three positions are described '
     'before anybody is named, which is why the names come last and '
     'the answers with them.']),
   outside='A paragraph that does one job is how anything gets read: '
           'a report, an email that needs an answer, a complaint that '
           'gets acted on. Most writing that fails at work fails here '
           'rather than at the level of the sentence, and nobody '
           'teaches it.',
   recycled=['enforcement', 'liability', 'evidence', 'diffuse',
             'certainty', 'compliance', 'loophole'],
   read=[
    dict(preview=True,
         heading='What technology-neutral means',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The last passage of the unit is an argument about how '
             'laws are written, and it turns on one phrase that sounds '
             'like jargon and is not.',
         paras=[
          'A technology-neutral rule describes what may not be done '
          'rather than what machine may not do it. "You may not use '
          'personal data for a purpose the person would not expect" is '
          'technology-neutral. "You may not use cookies for tracking" '
          'is not, because it names a mechanism, and mechanisms are '
          'replaced every few years.',
          'The argument for neutrality is obvious: a rule naming a '
          'technology is obsolete the moment the technology is, and '
          'the last thirty years have replaced the mechanism about '
          'once a decade. A rule about cookies did nothing about '
          'fingerprinting.',
          'The argument against is less obvious and is the subject of '
          'this passage. A technology-neutral rule is vague by '
          'construction, so nobody knows whether they have broken it '
          'until a regulator or a court says so, which can take years. '
          'Meanwhile the cautious comply more than they need to and '
          'the aggressive do as they like.',
          'So the choice is between a rule that is precise and '
          'obsolete and a rule that is durable and unclear, and the '
          'passage argues that this is not a problem to be solved but '
          'a trade to be made deliberately - which is the structure '
          'you met in cycle 2 of this unit.'],
         items=[
          ('A technology-neutral rule describes what may not be '
           '____________ rather than naming a mechanism.',
           None, 'done',
           'Paragraph 1, with the cookie example.'),
          ('The argument for neutrality is that a rule naming a '
           'technology becomes ____________.', None, 'obsolete',
           'Paragraph 2: the mechanism has been replaced about once a '
           'decade.'),
          ('The argument against is that such a rule is '
           '____________ by construction.', None, 'vague',
           'Paragraph 3, so nobody knows whether they have broken it '
           'until a court says so.')]),
    dict(heading='A law written for files, applied to inferences',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 55-61',
         paras=[
          'The complaint that privacy law cannot keep pace with technology is '
          'made so often that it has stopped being examined. It is partly '
          'true, and the part that is true is more specific and more '
          'interesting than the slogan: the difficulty is not speed but '
          'subject matter. The law was drafted about records, and the systems '
          'it now governs produce predictions. That is a difference of kind, '
          'and no amount of faster drafting addresses a difference of '
          'kind.',
          'Consider the architecture of a typical data protection statute. It '
          'gives people rights over data concerning them: a right to see it, '
          'to correct it, to have it deleted. Each of those rights makes '
          'immediate sense applied to a stored field. A date of birth can be '
          'shown, corrected or erased, and whether it is accurate is a '
          'question with an answer.',
          'Now apply the same rights to an inference. A system has estimated '
          'that a customer probably has a young child, with a confidence of '
          'sixty-eight per cent. Is that data concerning the customer? It is '
          'certainly about them and was never provided by them. Can it be '
          'corrected? If they have no child, the estimate is a reasonable '
          'output of a sound process on the evidence available, so correcting '
          'it is not the same as fixing an error. Can it be deleted? It will '
          'be regenerated from the features tomorrow. Each of the three '
          'rights, applied to this one estimate, produces either an '
          'absurdity or an answer that lasts a day.',
          'This is the real mismatch. The rights were built for a world in '
          'which the troubling thing was a wrong fact in a file, and the '
          'troubling thing now is a probably-right guess that nobody '
          'volunteered and that reappears when removed.',
          'Drafters anticipated obsolescence and tried to prevent it by '
          'writing technology-neutral rules: principles rather than '
          'specifics, so that a statute about personal data would apply to '
          'technologies not yet invented. The strategy half worked. It did '
          'keep the law from being tied to magnetic tape, and it also '
          'produced text so general that its application to a feature store '
          'is genuinely arguable by competent lawyers on both sides. A rule '
          'that applies to everything applies crisply to nothing, and '
          'that cost was accepted deliberately in exchange for not '
          'having to rewrite the statute every decade.',
          'The deeper structural problem is that the statutes regulate '
          'collection and the harm sits in use. Collection is a visible '
          'event, with a timestamp and a consent record, which makes it easy '
          'to legislate about and relatively harmless. Use is diffuse, '
          'repeated, and often invented years afterwards by a different team, '
          'which makes it hard to legislate about and where almost everything '
          'people object to actually happens.',
          'Enforcement has its own asymmetry. A regulator can audit whether '
          'consent was obtained, because that is a document. Auditing whether '
          'an inference was used to set a price requires access to a model, '
          'the skills to interrogate it and a reason to look, and regulators '
          'have less of all three than the organisations they supervise. The '
          'predictable result is that enforcement concentrates where the '
          'evidence is cheapest to gather, which is not where the harm '
          'is.',
          'None of this supports the fatalistic conclusion the slogan '
          'invites. Laws have been rewritten for new subject matter many '
          'times, and the specific repairs here are not mysterious: attach '
          'rights to inferences explicitly, regulate uses by category rather '
          'than collection by consent, cap retention numerically, and give '
          'regulators the technical staff to look inside a system. The '
          'obstacle is not that technology moves too fast for law. It is '
          'that each of those four repairs has an identifiable opponent with '
          'a reason to prefer the slogan.'],
         items=[
          (
           'Which paragraph gives the example of a sixty-eight per '
           'cent estimate?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1,
           'Where the three rights are each tested against an '
           'inference.',
           {0: 'Paragraph 2 applies the rights to a stored field.', 2: 'Paragraph 4 states the mismatch in general terms.', 3: 'Paragraph 5 explains the technology-neutral strategy.'}),
          ('Which paragraph explains the technology-neutral strategy?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2, 'Principles rather than specifics, which half worked.',
           {0: 'Paragraph 3 gives the example of a sixty-eight per '
               'cent estimate.', 1: 'Paragraph 4 states the mismatch in general terms.', 3: 'Paragraph 6 is about collection against use.'}),
          ('Which paragraph describes the asymmetry in enforcement?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
           2,
           'Consent is a document; a model requires access, skills and '
           'a reason to look.',
           {0: 'Paragraph 5 explains the technology-neutral strategy.', 1: 'Paragraph 6 is about collection against use.', 3: 'Paragraph 8 lists the four repairs.'}),
          (
           'The writer believes privacy law simply cannot keep up with '
           'technology.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph rejects that fatalistic conclusion and '
           'names four repairs.',
           {0: 'Yes would need that fatalism; the final paragraph '
               'names four repairs.', 2: 'Not Given is wrong because the writer answers the '
               'fatalistic view.'}),
          (
           'The writer believes the technology-neutral strategy failed '
           'completely.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5 says it half worked and explains which half.',
           {0: 'Yes would need total failure; paragraph 5 says half of '
               'it worked.', 2: 'Not Given is wrong because the strategy is assessed.'}),
          ('According to the writer, the statutes regulate collection while '
           'the harm sits in ____________.', None, 'use',
           'Paragraph 6, which is diffuse, repeated and often invented '
           'later.'),
          (
           'The real obstacle to repair is an ____________ for each '
           'repair.', None, 'opponent',
           'The final paragraph: each repair has an identifiable '
           'opponent with a reason to prefer the slogan.')])],
   listen=[
    dict(heading='A regulator and an engineer disagree', part='Part 4',
         task='A recorded exchange · multiple choice, sentence completion and matching', band='l4', qtype='Questions 62-67',
         script=[
          ('Chair', 'Ms Oyelaran-Petit is a deputy commissioner. Dr Halvorsen '
           'builds ranking systems.'),
          ('Halvorsen', 'My position is unpopular at these events, so let me '
           'put it carefully. I do not think the law is too slow. I think it '
           'is aimed at the wrong event. You regulate the moment data is '
           'collected. Nothing that upsets anybody happens at that moment.'),
          ('Oyelaran-Petit', 'I agree with more of that than you expect. '
           'Consent is what we can audit, which is not the same as consent '
           'being what matters. It is a document, and documents are what a '
           'regulator with forty staff can check.'),
          ('Halvorsen', 'And the thing you cannot check is the inference. I '
           'can tell you that a system of mine estimates household '
           'composition at sixty-eight per cent confidence. Your statute '
           'gives that person a right to correct inaccurate data. What would '
           'correcting it mean? The number is a sound output of a sound '
           'process. It is also wrong about them.'),
          ('Oyelaran-Petit', 'That is the clearest statement of the problem I '
           'have heard, and I would push back on where it leads. You are '
           'describing a drafting failure, and drafting failures are '
           'repairable. The rights were written about fields because in 1995 '
           'the trouble was a wrong field. Attach them to inferences '
           'explicitly and most of your objection goes away.'),
          ('Halvorsen', 'Most of it, and not the retention problem. The '
           'single number that determines how well my system knows somebody '
           'is twenty-four months, and it lives in a policy a product manager '
           'can change on a Thursday. No right exercised by any individual '
           'touches it.'),
          ('Oyelaran-Petit', 'Then cap it in the statute. A number is the '
           'easiest thing to legislate and the hardest thing to argue '
           'against in public, which is exactly why it has not been done. I '
           'would rather be told I am slow than admit that the four repairs '
           'we need are all blocked by somebody specific.'),
          ('Halvorsen', 'That is more candid than I expected and it leaves me '
           'without my argument.'),
          ('Oyelaran-Petit', 'Keep the argument. Aim it at the right people. '
           'I will send you the consultation and you can write the paragraph '
           'about retention yourself, which is worth more than either of us '
           'saying this again next year.')],
         items=[
          ('Halvorsen says the law is',
           ['too slow', 'aimed at the wrong event', 'too strict', 'well designed'],
           1,
           'Because nothing that upsets anybody happens at the moment '
           'of collection.',
           {0: 'He says explicitly that he does not think it is too '
               'slow.', 2: 'Strictness is not his complaint.', 3: 'He finds it aimed at the wrong moment.'}),
          ('Why does the regulator say consent is what they audit?',
           ['It is most important', 'It is a document they can check', 'The law requires only that', 'Companies prefer it'],
           1, 'What a regulator with forty staff can check.',
           {0: 'She separates what is audited from what matters.', 2: 'She does not say the law requires only consent.', 3: 'Company preference is not her reason.'}),
          ('The difficulty with correcting an inference is that',
           ['it is encrypted', 'it is a sound output that is wrong about the person', 'it cannot be seen', 'it is not stored'],
           1,
           'A sixty-eight per cent estimate of household composition.',
           {0: 'Encryption is not mentioned by either speaker.', 2: 'He can see and quote the estimate.', 3: 'It is stored, and regenerated when deleted.'}),
          ('The regulator calls the problem a ____________ failure.',
           None, 'drafting',
           'And says drafting failures are repairable.'),
          ('Which problem does Halvorsen say would remain?',
           ['Consent', 'Retention', 'Correction', 'Enforcement'], 1,
           'Twenty-four months, set in a policy a product manager can '
           'change.',
           {0: 'Consent is what the regulator can already audit.', 2: 'Correction is what she offers to repair by drafting.', 3: 'Enforcement is her difficulty, not what he says '
               'remains.'}),
          ('What does the regulator admit at the end?',
           ['The law is adequate', 'The four needed repairs are each blocked by somebody specific', 'She has no powers', 'Engineers are to blame'],
           1, 'And says she would rather be told she is slow.',
           {0: 'She argues the law needs four specific repairs.', 2: 'She describes limited staff, not an absence of powers.', 3: 'She blames identifiable opponents, not engineers.'})])],
   speak=dict(
    part='Part 3', focus='Regulating something that moves',
    sounds=[('Parenthesis is marked by pausing and lowering, not by '
             'punctuation you cannot hear. The data, once it is out, cannot be '
             'recalled has the middle phrase quieter and faster than what '
             'surrounds it.'),
            ('This is how you add a qualification without losing the sentence. '
             'Practise: anonymisation, as it is usually done, is reversible, '
             'keeping the main clause at full volume.'),
            ('If the parenthesis is said at the same level as the rest, the '
             'listener loses which clause the verb belongs to, and a long '
             'accurate sentence is marked as a confused one.'),
            ('Take one long sentence from this unit\'s reading and say it aloud '
             'three times, moving the parenthesis each time. Notice that only '
             'one version is comfortable.'),
            ('Record yourself on who should decide what data is published. '
             'Find a sentence where you ran a qualification into the main '
             'clause, and say it again with the drop.')],
    intro=('The hardest turn in the unit. Try once to distinguish a rule '
           'being slow from a rule being aimed at the wrong thing.'),
    qs=['Can laws keep up with new technology?',
        'Who should write the rules for technology companies?',
        'Should a country regulate alone or wait for agreement?',
        'What makes a rule easy or hard to enforce?'],
    shape=[('answer', 'The problem is less speed than aim.'),
           ('support', 'The rules govern collection, and the trouble is in '
            'later use.'),
           ('follow-up', 'So a faster version of the same law would miss the '
            'same thing.'),
           ('support', 'What is easy to enforce is whatever is written '
            'down.'),
           ('follow-up', 'Which is why consent gets audited and models do '
            'not.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Can privacy laws keep pace with technology?',
         prompt=('Write the essay you planned in cycle 4. Some people say '
                 'privacy laws cannot keep pace with technology. To what '
                 'extent do you agree? Write at least 250 words.'),
         model=[
          'I agree with this claim in one respect and disagree with it in '
          'another, and separating the two matters, because the version '
          'usually meant is the version I think is false.',
          'Where I agree is about subject matter. Data protection law was '
          'drafted about stored records, and its central rights — to see, to '
          'correct, to delete — were designed for a wrong fact in a file. '
          'Applied to an inference they stop making sense. A system '
          'estimating that somebody probably has a young child has produced '
          'something about that person which they never supplied, which is '
          'not inaccurate in any ordinary sense even when it is wrong about '
          'them, and which reappears tomorrow if deleted today.',
          'Where I disagree is with the conclusion usually drawn, that law '
          'is structurally incapable of catching up. The failures above are '
          'drafting failures, and the repairs are known: name inferences in '
          'the rights, regulate categories of use instead of moments of '
          'collection, and set retention limits as numbers in the statute '
          'rather than in a company policy.',
          'The honest difficulty is political and not technical. A numerical '
          'retention cap is the easiest thing in the world to legislate and '
          'the hardest to oppose in public, which is a good explanation of '
          'why it keeps not happening. Each available repair has an '
          'identifiable opponent who benefits from the current drafting, and '
          '"technology moves too fast" is a more comfortable account of the '
          'delay than naming them.',
          'To what extent do I agree, then? Entirely about the mismatch '
          'between the rights as written and the systems as built, and not '
          'at all about the inference that nothing can be done. The pace of '
          'technology is a real constraint; in this case it is also a '
          'convenient one.'],
         notes=[
          'The essay agrees and disagrees about different things, which is '
          'what structure 11 is for. The first sentence says so, which stops '
          'the reader from scoring it as a contradiction.',
          'Paragraph 3 answers its own paragraph 2 rather than changing '
          'subject, and the four repairs are concrete. A to-what-extent '
          'essay needs the boundary between agreement and disagreement drawn '
          'somewhere specific.',
          'The last sentence does a lot of work in few words: it concedes '
          'the constraint and names its function in the argument. Ending on a '
          'reframing is more effective than ending on a summary.'],
         model65=[
                  'Some people say privacy laws cannot keep pace with '
                  'technology. I agree that they lag, but I do not '
                  'think this is unavoidable.',
                  'The evidence for the lag is clear. Laws written for '
                  'files in cabinets were applied to databases, and '
                  'laws written for databases are now applied to '
                  'systems that infer information rather than storing '
                  'it. Removing names from a file no longer makes it '
                  'anonymous, because a few ordinary facts are often '
                  'enough to identify somebody.',
                  'But the laws are not helpless. Writing them in '
                  'terms of purposes rather than technologies has '
                  'worked better: a rule about what may be done with '
                  'information survives a change in how the '
                  'information is held. Enforcement has also improved '
                  'where regulators were given staff and money.',
                  'I think the problem is less about speed than about '
                  'design. Laws that describe technologies will always '
                  'be out of date, and laws that describe purposes and '
                  'harms will not. So I would write rules about what '
                  'may be inferred and what may be sold, and fund the '
                  'regulators properly.',
                  ],
         gap65=[
                'It shows which half of the technology-neutral '
                'strategy worked and which half did not, instead of '
                'recommending it whole.',
                'It explains the re-identification curve, so the '
                'reader sees why anonymity is a matter of degree '
                'rather than a property.',
                'It names four specific repairs rather than one '
                'general principle.',
                ],
         criterion=[('Agreeing and disagreeing about different things',
                     'Task Response'),
                    ('Concrete repairs in answer to your own objection',
                     'Task Response'),
                    ('Ending on a reframing rather than a summary',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    ref='L20',
    context=[
     'From the passage you have just read:',
     'The statute says that data may be processed only for the purpose '
     'for which it was collected. It does not say that it may be '
     'collected only for a stated purpose, nor that only the collector '
     'may process it. Three sentences, three different rules, and the '
     'drafter chose one of them - which is why a case about this took '
     'four years to reach a court and why the answer surprised '
     'everybody when it arrived.'],
    notice=[
     ('The writer gives three positions for the word only. Copy out '
      'the first two and say what each limits.',
      'processed only for the purpose - limits the USE; collected '
      'only for a stated purpose - limits the COLLECTION'),
     ('Why does the writer say the drafter chose?',
      'because the three sentences are three different rules and the '
      'wording settles which')],
    noticetask='Answer both from the paragraph above, which is from '
               'the passage you read earlier in this cycle.',
    contrast='You met the scope of only in cycle 3 of this unit, in a '
             'privacy notice. Here it is doing the same work in a '
             'statute, where the consequences are measured in years of '
             'litigation. The repair, when you find an ambiguous one '
             'in your own writing, is the same in both cases: move the '
             'word so that it stands immediately before what it '
             'limits, or rewrite with a cleft - it is only the '
             'collector who may process it. The cleft is longer and '
             'completely unambiguous, which is why legal drafting '
             'uses it and why it is worth having in a Task 2 sentence '
             'whose meaning matters.',
    task2='Rewrite each so the scope is unambiguous, using a cleft '
          'where the position alone will not do it.',
    items2=[
     ('The company may only process your data. (and do nothing else '
      'with it) ____________',
      None, 'The company may only process your data, and may not '
      'share or sell it.'),
     ('Only the company may process your data. (use a cleft) '
      '____________',
      None, 'It is only the company that may process your data.'),
     ('Correct: I only gave them my email. (nothing else) '
      '____________', None, 'I gave them only my email.'),
     ('The data may be used only for research. (use a cleft) '
      '____________',
      None, 'It is only for research that the data may be used.')],
    task3='Now write it where it matters. Draft the one sentence you '
          'would want in a privacy notice, limiting what an '
          'organisation may do with data about you. Then write the '
          'same sentence with only in a different position, and one '
          'sentence saying what changed. About eighty words.',
    items3=10,
    point='Scope ambiguity and its repair',
    explain=('A sentence whose scope is unclear is the commonest way a '
             'careful argument reads as a loose one. Repair it by saying what '
             'the claim covers and what it does not.'),
    examples=['The rule covers the data it names and not the inference drawn '
              'from it.',
              'I agree about the mismatch and not about the conclusion.',
              'This applies to collection, not to use.',
              'The right to correction assumes a fact that can be wrong.'],
    task='Rewrite each sentence so that its scope is explicit.',
    items=[('The law does not work.',
            'The law works for stored fields and not for predictions drawn '
            'from them.'),
           ('I agree with this statement.',
            'I agree that the rights are mismatched, and not that the '
            'mismatch is permanent.'),
           ('Consent is meaningless.',
            'Consent is meaningful about a described use and meaningless '
            'about an undescribed one.'),
           ('Regulators cannot enforce this.',
            'Regulators can enforce the documentary requirements and cannot '
            'currently inspect a model.'),
           ('Deleting data solves it.',
            'Deleting a record removes the record and not the features '
            'already summarised from it.')]),
   vocab=[('technology-neutral', 'written so as not to name a particular '
           'technology'),
          ('statute', 'a written law passed by a legislature'),
          ('enforcement', 'making sure a rule is actually followed'),
          ('loophole', 'a gap that allows a rule to be avoided'),
          ('inspect', 'to examine something from the inside'),
          ('diffuse', 'spread out and hard to locate'),
          ('drafting', 'the wording of a law as written'),
          ('candid', 'honest in a way that costs the speaker something')],
   expr=[('the difficulty is not speed but subject matter',
          'replaces a diagnosis with a better one'),
         ('the strategy half worked', 'grades an outcome instead of judging '
          'it'),
         ('it is also a convenient one',
          'names the function an argument serves'),
         ('Keep the argument. Aim it at the right people',
          'redirects rather than refutes')],
   trans=['consider', 'now apply', 'none of this', 'to what extent'],
  ),
 ],
 technique=dict(
  title='A device, not a sequence: apparatus before operation',
  body=('Task 1 Academic sometimes gives you a diagram that looks like a '
        'process and is not. A process has a beginning and an end; a device '
        'has parts, and some of them connect backwards. Describing a device '
        'as a sequence forces you to mention each box once, in an order the '
        'diagram does not have, and the feedback paths end up buried in the '
        'middle of a sentence about something else. The fix is an '
        'organisation, not a vocabulary: one paragraph naming the components '
        'in groups, then one or two on how a single input travels through '
        'them, then the loops taken together at the end.'),
  panel=[('Count the boxes and the arrows',
          'More arrows than boxes means at least one loop. That is the test, '
          'and it takes five seconds.'),
         ('Components first', 'Group them: input side, middle, output side. '
          'Name them all before anything happens.'),
         ('Then one journey', 'Follow one input through, in the present '
          'passive. Do not try to cover every arrow.'),
         ('Loops last, together',
          'The return paths are the main feature. Give them their own '
          'sentences at the end, not a clause in the middle.')],
  task='Take the diagram in cycle 3. Write the components paragraph in three '
       'sentences, then the Overall statement that names the loops.',
  qs=['How many components are there, and how many arrows?',
      'Which arrows return to an earlier component?',
      'What are the three groups you would use?',
      'Which single input would you follow through the device?',
      'Write the Overall statement in one sentence.']),
 outlining=dict(
  title='Ideas that are developable in four sentences',
  body=('Brainstorming produces ideas of two kinds and they look identical '
        'on the page. One kind has a second and a third sentence waiting '
        'behind it; the other is a true statement with nothing behind it at '
        'all. The test takes ten seconds an idea: try to say four sentences '
        'about it silently. An idea that stalls at two will become a '
        'paragraph of restatement, and you will discover this at minute '
        'twenty-five with no time to replace it. Run the test in the planning '
        'minute, keep the two that survive, and let the rest go without '
        'regret.'),
  frame=('Collection should be limited by use and duration rather than by '
         'amount, because the harm lies in later use',
         [('A limit on amount fails because the small signals are the '
           'informative ones',
           ['hesitation and scroll depth are not personal data',
            'yet four hundred features are built from them']),
          ('A limit on duration bites where a limit on collection does not',
           ['a profile rests on two years, not on a session',
            'retention is a number somebody can simply change'])]),
  task='Brainstorm eight ideas for the cycle 4 prompt, run the four-sentence '
       'test on each, and write down why each rejected idea failed.',
  qs=['Which ideas stalled at two sentences?',
      'Which needed too much background before the point arrived?',
      'Which two survived, and what is the second sentence of each?',
      'Does your thesis follow from the two that survived?'],
  answers=['usually the true-but-empty ones, such as "privacy matters"',
           'the ones requiring a technical explanation first',
           'the two in the frame above, each with a mechanism behind it',
           'it should; if it does not, the thesis came from somewhere else']),
 candos=['I can read a privacy notice for the rights it gives me',
         'I can describe a device by components and then by operation',
         'I can explain why removing a name does not make a file anonymous',
         'I can test an essay idea by trying to develop it in four '
         'sentences',
         'I can agree and disagree about different parts of one claim'],
 tip=('Before describing any Task 1 diagram, count the boxes and the arrows. '
      'More arrows than boxes means a loop, which means a device, which means '
      'components before operation.'),
)
