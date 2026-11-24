# -*- coding: utf-8 -*-
import figs

U = dict(
num=1, title='What the Customer Actually Wants',
gram='indirect questions',
ai='what the customer notices, and what they do not',
strap='CEFR B2 · Grammar: indirect questions · AI: what the customer notices',
cando=['form an indirect question with statement word order',
       'soften a direct question without losing what it asks',
       'separate what a client says they want from what they act on',
       'identify the parts of a service a client never sees',
       'say what improving an unnoticed thing is actually worth'],
hero=('ELEVEN CLIENTS, AND WHAT EACH OF THEM LOOKS AT',
      ['Arclight improved four things in a year.',
       'Clients noticed one of them, and it was not the expensive one.'],
      [(840, 'orange', 'long'), (1560, 'grey', 'short'),
       (2220, 'teal', 'long'), (2760, 'purple', 'short')]),
hero_cap='The gap between what a company improves and what a customer experiences.',

warm=['What does your employer do well that customers would never know about?',
      'How would you ask a client a difficult question politely?',
      'When a client says they want something, how do you tell whether they mean it?'],
read=[
 'Victor Sandoval moved from quality into client work in his second year, and the first '
 'thing he did was something nobody had done: he asked each of the eleven clients what they '
 'looked at when an Arclight document arrived. The answers took about four minutes each and '
 'they were not what anybody had expected.',
 'Samuel Boateng looks at three places on a page and takes about forty seconds. Nora '
 'Lindqvist opens the attachment, checks that the total matches what she was expecting, and '
 'files it. Priya Menon reads everything, because she has nobody else to read it, and is the '
 'only client of the eleven who does.',
 'Set against that, Arclight had spent the previous year improving four things: the accuracy '
 'of extraction, which went from ninety-six to ninety-eight per cent; the speed of the '
 'monthly reconciliation, which halved; the consistency of client letters, which was '
 'transformed; and the layout of the client page, which was tidied twice.',
 'Of those four, clients noticed the consistency of the letters, which was the cheapest. '
 'Nobody mentioned the accuracy, because an error rate of two per cent against four per cent '
 'is invisible to somebody who sees eleven documents a month. Nobody mentioned the speed, '
 'because the page had always arrived before they needed it. Two clients complained about '
 'the layout change.',
 'What Victor took from this is not that the unnoticed improvements were worthless. The '
 'accuracy work is what prevents the single expensive error that ends a relationship, and no '
 'client will ever thank anybody for it. It is that the reasons for doing a piece of work '
 'should be stated honestly: some things are done because clients will value them and some '
 'because the company cannot afford not to, and conflating the two produces bad decisions in '
 'both directions.'],
c_a=[('What did Victor ask the eleven clients?', 'what they looked at when an Arclight document arrived'),
     ('How long does Samuel spend on a page?', 'about forty seconds, on three places'),
     ('Which of the four improvements did clients notice?', 'the consistency of the letters, which was the cheapest'),
     ('Why was the accuracy improvement invisible?', 'because two per cent against four is invisible to somebody seeing eleven documents a month'),
     ('What is Victor’s conclusion?', 'that the reason for doing a piece of work should be stated honestly')],
c_b=[('All eleven clients read the documents in full.', 'F'),
     ('The accuracy improvement was the cheapest of the four.', 'F'),
     ('Two clients complained about the layout change.', 'T'),
     ('Victor concluded that unnoticed work is worthless.', 'F'),
     ('Priya Menon reads everything.', 'T'),
     ('Clients mentioned the speed improvement.', 'F')],
c_c=[('The answers took about four ____________ each.', 'minutes'),
     ('Nora checks that the total matches what she was ____________.', 'expecting'),
     ('Accuracy went from ninety-six to ninety-eight per ____________.', 'cent'),
     ('No client will ever ____________ anybody for it.', 'thank'),
     ('Some things are done because clients will ____________ them.', 'value'),
     ('Conflating the two produces bad ____________ in both directions.', 'decisions')],
c_d=[('The noticed improvement was the ( most expensive / cheapest ).', ['most expensive', 'cheapest'], 1),
     ('An error rate change from four to two per cent is invisible because', ['it is small', 'clients see few documents', 'it is secret', 'it is slow'], 1),
     ('The accuracy work is justified by', ['client gratitude', 'preventing the single expensive error', 'speed', 'layout'], 1),
     ('Conflating the two kinds of reason produces', ['savings', 'bad decisions in both directions', 'clarity', 'nothing'], 1),
     ('Of the eleven clients, how many read everything?', ['all', 'most', 'one', 'none'], 2)],
c_e=('Direct or indirect question? Put each one in the right column.',
     [('What do you look at first?', 'Direct'),
      ('Could you tell me what you look at first?', 'Indirect'),
      ('Why did you change supplier?', 'Direct'),
      ('I wondered why you had changed supplier.', 'Indirect'),
      ('Do you read the whole page?', 'Direct'),
      ('May I ask whether you read the whole page?', 'Indirect')],
     ['Direct', 'Indirect']),

v_fig_title='WHAT A CLIENT SEES',
v_fig=[('people', 'a touchpoint'), ('chart', 'retention'), ('scale', 'a pain point'),
       ('doc', 'feedback'), ('bulb', 'an unmet need'), ('bank', 'loyalty')],
v_fig_cap='Six words for the narrow part of a service that a customer ever experiences.',
vocab=[
 ('expectation', 'what somebody has been led to believe will happen'),
 ('satisfaction', 'the state of having had an expectation met'),
 ('perception', 'how something appears to somebody, whatever it is'),
 ('touchpoint', 'any occasion on which a customer meets the service'),
 ('customer journey', 'the whole sequence of a customer’s dealings with a company'),
 ('friction', 'anything that makes a customer’s task harder than it need be'),
 ('retention', 'keeping customers rather than losing them'),
 ('churn', 'the rate at which customers leave and are replaced'),
 ('loyalty', 'a customer’s tendency to stay without being persuaded each time'),
 ('advocacy', 'a customer recommending you to somebody else unprompted'),
 ('pain point', 'a specific place where a customer experiences difficulty'),
 ('unmet need', 'something a customer wants that nothing currently provides'),
 ('stated need', 'what a customer says they want, in their own words'),
 ('survey', 'a set of questions asked of many people to establish a pattern'),
 ('feedback', 'what customers report back about a service'),
 ('cohort', 'a group of customers who share a characteristic or a start date'),
 ('account manager', 'the named person responsible for one customer relationship'),
 ('relationship', 'the accumulated history between a company and a customer'),
 ('service level', 'the standard of service a customer has been promised'),
 ('word of mouth', 'what customers say about you to each other')],
v_a=[('Any occasion on which a customer meets the service is a ____________.', 'touchpoint'),
     ('The rate at which customers leave is ____________.', 'churn'),
     ('A specific place where a customer struggles is a ____________.', 'pain point'),
     ('What a customer says they want is their ____________.', 'stated need'),
     ('A customer recommending you unprompted is ____________.', 'advocacy'),
     ('The standard a customer has been promised is the ____________.', 'service level'),
     ('A group of customers sharing a start date is a ____________.', 'cohort'),
     ('Anything making a customer’s task harder than it need be is ____________.', 'friction')],
v_b=[('Retention means keeping customers', 'rather than losing them.'),
     ('An unmet need is something a customer wants', 'that nothing currently provides.'),
     ('Word of mouth is what customers say', 'about you to each other.'),
     ('Perception is how something appears to somebody,', 'whatever it actually is.'),
     ('An account manager is the named person responsible', 'for one customer relationship.')],

g_title='Grammar: indirect questions',
g_rule=['An indirect question takes statement word order: could you tell me what you look at.',
        'Do not use do or did in the embedded clause: I wondered why you changed, not why did you change.',
        'Use if or whether for yes/no questions: may I ask whether you read it.',
        'The softening phrase carries the politeness; the question itself stays exactly as sharp.'],
g_fig=('LOOSE',
       ['Could I ask what is it you look at?',
        'I wondered why did you change supplier.',
        'May I ask do you read the whole page?',
        'Can you tell me how long does it take?'],
       'PRECISE',
       ['Could I ask what you look at first?',
        'I wondered why you had changed supplier.',
        'May I ask whether you read the whole page?',
        'Can you tell me how long it takes you?'],
       'the question word order survives into the clause',
       'statement order inside, politeness outside'),
g_fig_cap='The commonest error in English business writing, and a one-word fix.',
g_a=[('Could you tell me what you ____________ at first? (look)', 'look'),
     ('I wondered why you ____________ changed supplier. (have)', 'had'),
     ('May I ask ____________ you read the whole page? (whether)', 'whether'),
     ('Can you tell me how long it ____________ you? (take)', 'takes'),
     ('Do you know where the file ____________ kept? (be)', 'is'),
     ('I should like to know what you ____________ of it. (think)', 'think'),
     ('Could I ask ____________ the total was what you expected? (if)', 'if'),
     ('Would you mind telling me who ____________ it? (sign)', 'signed'),
     ('I am not sure what the client ____________ by that. (mean)', 'meant')],
g_b=[('Could you tell me what ( you look / do you look ) at first?', ['you look', 'do you look'], 0),
     ('I wondered why you ____ changed supplier.', ['have', 'had', 'did', 'has'], 1),
     ('May I ask ____ you read the whole page?', ['that', 'whether', 'what', 'which'], 1),
     ('Can you tell me how long ____?', ['does it take', 'it takes', 'takes it', 'is it taking'], 1),
     ('Do you know where ____?', ['is the file kept', 'the file is kept', 'does the file keep', 'keeps the file'], 1),
     ('Would you mind telling me who ____ it?', ['did sign', 'signed', 'has signing', 'sign'], 1)],

d1=dict(title='Forty seconds',
        fig=(['What do you actually look at?', 'Three places. Forty seconds.'],
             ['And the rest of the page?', 'I have never read it.']),
        cap='Victor and Samuel Boateng, on the telephone.',
        lines=[('Victor', 'Could I ask what you actually look at when the monthly page arrives?'),
               ('Samuel', 'Three places. Top line, the gaps column, and the total at the bottom right.'),
               ('Victor', 'And the rest of it?'),
               ('Samuel', 'I have never read the rest of it. Not once in three years, I should think.'),
               ('Victor', 'That is not a complaint about the page, I take it.'),
               ('Samuel', 'It is a compliment about the page. If I had to read it, it would not be working.'),
               ('Victor', 'We spent about forty hours last year making the extraction more accurate.'),
               ('Samuel', 'Which I would not notice unless it went wrong, and then I would notice very much.'),
               ('Victor', 'So the work is worth doing and you will never thank us for it.'),
               ('Samuel', 'I will never thank you for it and I would leave if you stopped. Those are both true.'),
               ('Victor', 'That is the most useful sentence anybody has said to me this quarter.'),
               ('Samuel', 'It is the ordinary position of every customer about every supplier. You just asked.')],
        a=[('Which three places does Samuel look at?', 'the top line, the gaps column and the total bottom right'),
           ('How much of the page has he read?', 'none of the rest, in about three years'),
           ('Why does he call that a compliment?', 'because if he had to read it, the page would not be working'),
           ('What does he say about the accuracy work?', 'that he would not notice it unless it went wrong, and would leave if it stopped'),
           ('What does he say is the ordinary customer position?', 'never thanking a supplier for something they would leave over')],
        b=[('Three places. ____________ seconds.', 'Forty'),
           ('If I had to read it, it would not be ____________.', 'working'),
           ('I would notice very ____________.', 'much'),
           ('You just ____________.', 'asked')]),
d2=dict(title='Which improvement do we fund?',
        fig=(['Clients noticed the letters.', 'The letters cost four hours.'],
             ['And the accuracy cost forty.', 'And prevents the thing that ends us.']),
        cap='Ines and Victor, over next year’s plan.',
        lines=[('Ines', 'Clients noticed one of our four improvements, and it was the one that cost four hours.'),
               ('Victor', 'Which is an argument for doing more cheap visible things and not an argument '
                          'against the expensive invisible ones.'),
               ('Ines', 'I am aware. I would still like to know how much of next year goes to work no '
                        'client will ever see.'),
               ('Victor', 'About sixty per cent, if we continue as we are.'),
               ('Ines', 'Say the sentence out loud and tell me whether you still believe it.'),
               ('Victor', 'Sixty per cent of our improvement effort goes into things no client will '
                          'notice unless they fail. Yes. I believe it and I am not comfortable with it.'),
               ('Ines', 'Where does the discomfort come from?'),
               ('Victor', 'From not being able to prove any of it. The accuracy work prevents an error '
                          'that has not happened.'),
               ('Ines', 'The credit note error happened.'),
               ('Victor', 'It did, and the accuracy work is why there has been one and not four. I '
                          'believe that and I cannot demonstrate it.'),
               ('Ines', 'Then say that in the plan, rather than finding a number that sounds like proof.'),
               ('Victor', 'I would still rather have the number. I am going to write it your way because '
                          'I cannot get the number honestly.')],
        unresolved=True,
        a=[('Which improvement did clients notice?', 'the one that cost four hours, the letters'),
           ('What proportion of next year goes to invisible work?', 'about sixty per cent'),
           ('Where does Victor’s discomfort come from?', 'from not being able to prove the value of work that prevents errors'),
           ('What does he believe about the credit note error?', 'that the accuracy work is why there has been one and not four'),
           ('What do they disagree about?', 'whether to state the belief honestly or to find a number that sounds like proof')],
        b=[('An argument for doing more cheap ____________ things.', 'visible'),
           ('Sixty per cent of our improvement ____________.', 'effort'),
           ('It prevents an error that has not ____________.', 'happened'),
           ('I cannot get the number ____________.', 'honestly')]),

speak=[('Ask it indirectly',
        ['Student A: ask four direct questions a client might find blunt.',
         'Student B: rephrase each as an indirect question without softening what it asks.',
         'Check the word order inside the clause every time.']),
       ('Spoken specification: find out what they look at',
        ['Choose a document your organisation sends somebody.',
         'Brief your partner aloud on how you would find out what the reader actually looks at.',
         'They play the reader and answer. Note what you would never have guessed.']),
       ('Noticed or not?',
        ['In pairs, list four improvements your workplace has made in a year.',
         'For each, say whether a customer would notice, and what noticing would look like.',
         'Decide which one you would fund again, and say why.'])],

ext_title='Most of a service is invisible, and most of it should be',
ext_fig=figs.datatable('FOUR IMPROVEMENTS, ONE YEAR',
                       ['Improvement', 'Cost', 'Noticed by clients?', 'Keep funding?'],
                       [['letter consistency', '4 hours', 'yes, 3 mentioned it', 'yes'],
                        ['extraction accuracy', '40 hours', 'no', 'yes'],
                        ['reconciliation speed', '18 hours', 'no', 'no'],
                        ['page layout', '6 hours', 'yes, 2 complained', 'no'],
                        ['total', '68 hours', '—', '—']]),
ext_fig_cap='The two rows worth continuing are one noticed and one invisible, for different reasons.',
ext=[
 'There is a question that very few companies ask their customers and that takes about four '
 'minutes to answer: what do you actually look at? Not what do you think of the service, '
 'which produces a polite generality, and not what would you like us to improve, which '
 'produces a wish list. What do you look at, in what order, and for how long.',
 'The answers are usually startling and they are usually consistent. Most customers of most '
 'services engage with a very small part of what the service produces, in a fixed order, for '
 'a short time, and they have built a habit around it. The rest of the output exists, is '
 'paid for, and is not read by anybody outside the company that makes it.',
 'This has an immediate practical consequence for where improvement effort goes, and the '
 'consequence is not the obvious one. The obvious inference is to stop improving what nobody '
 'sees, and it is wrong. The invisible parts of a service are frequently the ones that '
 'prevent the failures that end relationships, and a customer who never notices your '
 'accuracy will notice its absence exactly once.',
 'The useful distinction is between work done because customers will value it and work done '
 'because the company cannot afford the alternative. Both are legitimate. What causes '
 'trouble is conflating them, which happens in two directions: expensive invisible work '
 'gets justified with invented claims about customer perception, and cheap visible work gets '
 'dismissed as cosmetic when it is the only thing the customer experiences.',
 'The honest position is harder to write in a plan and better to hold. Some of this year’s '
 'effort is for the customer and we expect them to notice it. Some is insurance, nobody will '
 'thank us for it, and we are doing it because the failure it prevents would cost more than '
 'the work. Stating which is which costs a sentence and prevents a great deal of confusion '
 'about why anything is being funded.'],
dp1=('What customers report',
     'Customer research commonly finds a weak relationship between measured service quality '
     'on internal metrics and customer-reported satisfaction, with visible touchpoints '
     'dominating the reported experience.',
     'Source: general service-quality research, 2026. Relationships differ by sector.'),
e_a=[('What question does the writer recommend?', 'what do you actually look at, in what order, and for how long'),
     ('What do most customers engage with?', 'a very small part of the output, in a fixed order, for a short time'),
     ('Why is "stop improving what nobody sees" wrong?', 'because invisible work often prevents the failures that end relationships'),
     ('What is the useful distinction?', 'between work customers will value and work the company cannot afford to omit'),
     ('How does conflating them cause trouble?', 'invisible work gets justified with invented claims, and visible work gets dismissed as cosmetic')],
e_b=[('"What do you think of the service?" produces useful detail.', 'F'),
     ('Most customers read most of what a service produces.', 'F'),
     ('Invisible work should be stopped.', 'F'),
     ('A customer notices absent accuracy exactly once.', 'T'),
     ('Both kinds of work are legitimate.', 'T'),
     ('Stating which is which is expensive.', 'F')],

w_model=(
 'Purpose: find out which parts of what Arclight sends are actually read, before deciding '
 'where next year’s improvement effort goes. Scope: the 11 active clients; the 2 in '
 'onboarding are excluded. Inputs: 1 conversation with each client, of no more than 10 '
 'minutes. Criteria: ask what they look at, in what order and for how long; do not ask what '
 'they think of the service or what they would like improved; record their words rather '
 'than a summary of their meaning. Done: 11 records and 1 list of document sections nobody '
 'mentioned. Fallback: if a client cannot say what they look at, ask them to open the last '
 'one they received and describe what they do.'),
w_fig=figs.split('TWO WAYS OF ASKING',
                 'Produces a polite generality',
                 ['What do you think of the service?',
                  'Is there anything we could improve?',
                  'Are you happy with the reporting?',
                  'How are we doing?'],
                 'Produces something you can act on',
                 ['What do you look at first?',
                  'How long does it take you?',
                  'Which parts have you never read?',
                  'What would you notice if it were missing?']),
w_fig_cap='The left-hand column is what gets asked. The right-hand column is what gets answered.',
w_task='Write a brief for finding out what your customers actually use.',
w_steps=['Say who will be asked and who will not.',
         'Write the questions, and make them about behaviour rather than opinion.',
         'Say explicitly which questions must not be asked, and why.',
         'Require the customer’s own words rather than a summary.',
         'Say what to do when somebody cannot answer in the abstract.'],
w_bank=['Ask each … what they … , in what order and for how long.',
        'Do not ask … , because it produces …',
        'Record … rather than …', 'If a client cannot … , ask them to …',
        'Return … and a list of …'],
w_check=['Are your questions about behaviour rather than opinion?',
         'Have you forbidden the questions that produce generalities?',
         'Do you require their words rather than your summary?',
         'Is there a fallback for somebody who cannot answer in the abstract?'],

t_title='What the customer notices, and what they do not',
t_fig=figs.handover('WHERE THE VALUE IS FELT',
                    ['Extraction accuracy', 'Reconciliation speed', 'Letter consistency'],
                    'Samuel looks at 3 places for 40 seconds',
                    'Two of the three boxes he will never see.'),
t_fig_cap='The fourth box is the whole of the customer experience. The first three are the service.',
t_body=[
 'Ask about behaviour rather than opinion, because opinion about a service is a polite '
 'social performance and behaviour is not. What do you look at first is answerable in four '
 'seconds and is almost never wrong; what do you think of our reporting produces a sentence '
 'that was composed while you were asking.',
 'Then write down which parts of your output nobody mentioned, because that list is more '
 'useful than the answers. It tells you what is being produced for nobody, and some of it '
 'will turn out to be genuinely for nobody and some of it will turn out to be the part that '
 'quietly prevents disasters. Those two require opposite decisions and look identical on the '
 'list.',
 'And say which category any piece of work falls into when you fund it. Visible work is '
 'justified by what customers will experience; invisible work is justified by what it '
 'prevents, and the honest form of that justification admits that the prevention cannot be '
 'demonstrated. A plan that pretends otherwise is building an argument that will collapse '
 'the first time somebody tests it.'],
t_say=[('Ask about behaviour: ', 'Could I ask what you look at first when it arrives?'),
       ('Find the unread part: ', 'Which sections have you never read?'),
       ('Name the category: ', 'This is insurance; no client will notice it unless it fails.')],
t_bound=('Asking what customers look at tells you about the present and about habits already '
         'formed. It cannot tell you what they would value if it existed, because nobody '
         'reports a need for something they have never seen, and the answers will '
         'systematically favour whatever you already produce.'),
t_a=[('Could I ask what you look at ____________ when it arrives?', 'first'),
     ('Which sections have you ____________ read?', 'never'),
     ('This is insurance; no client will notice it unless it ____________.', 'fails'),
     ('Opinion about a service is a polite social ____________.', 'performance'),
     ('That list tells you what is being produced for ____________.', 'nobody'),
     ('A plan that pretends otherwise builds an argument that will ____________.', 'collapse')],
t_b_rubric='Rewrite each question so that it asks about behaviour.',
t_b=[('What do you think of the reports?', 'what do you look at first, and how long does it take you?'),
     ('Is there anything we could improve?', 'which parts of the report have you never read?'),
     ('Are you happy with the service?', 'what would you notice if it stopped tomorrow?'),
     ('How are we doing?', 'when did you last have to ring us about something?')],

case=dict(
 title='Decision Clinic · Sixty per cent for nobody',
 brief=[
  'Next year’s improvement budget is sixty-eight hours a quarter. About sixty per cent of '
  'it is currently allocated to work no client will notice unless it fails.',
  'Ines is not proposing to cut it. She is asking Victor to justify it in a form she can '
  'defend to a client who asks what they are paying for, which one of them did last month.',
  'Victor can show that the error rate fell and that one expensive error occurred rather '
  'than an estimated four. The estimate of four is his own, built from the pre-improvement '
  'rate, and he is uncomfortable presenting it as a finding.'],
 exhibit=figs.datatable('IMPROVEMENT EFFORT, BY WHETHER CLIENTS SEE IT',
                        ['', 'Hours a quarter', 'Client-visible?', 'Demonstrable?'],
                        [['accuracy and checking', '41', 'no', 'partly'],
                         ['letters and layout', '14', 'yes', 'yes'],
                         ['speed', '8', 'no', 'yes'],
                         ['new reporting', '5', 'yes', 'yes'],
                         ['total', '68', '27 visible', '—']]),
 exhibit_cap='Forty-one of sixty-eight hours go into the row that cannot be demonstrated.',
 exhibit_note='"Partly demonstrable" means the error rate can be shown to have fallen; the '
              'claim that this prevented specific failures cannot.',
 voices=[('Ines Carvalho', 'managing director',
          'A client asked what the fee covers. I said quality, and I could hear how thin it '
          'sounded. I want a sentence that is both true and sayable.'),
         ('Victor Sandoval', 'operations and quality',
          'The true sentence is that we spend forty hours a quarter preventing errors we '
          'cannot count, and that the one that got through cost four hundred and twenty '
          'euros. I do not think it sounds thin. I think it sounds unfamiliar.'),
         ('Fatima Zahra', 'client manager',
          'Samuel said he would leave if we stopped and would never thank us for it. That is '
          'the sentence. It is a client’s sentence, not ours, and it is worth more than '
          'anything we could compose.')],
 steps=[('Find it', 'How many hours go into work clients do not see?'),
        ('Compare it', 'What can be demonstrated, and what can only be believed?'),
        ('Infer it', 'Why does Victor think the true sentence sounds unfamiliar rather than thin?'),
        ('Weigh it', 'A defensible claim against an honest one.'),
        ('Decide', 'What does Ines say to the next client who asks?')],
 analysis=[('Find it. How many of the 68 hours are invisible to clients?', 'forty-one, in accuracy and checking'),
           ('Compare it. What can be shown?', 'that the error rate fell; not that specific failures were prevented'),
           ('Infer it. What does Victor mean by unfamiliar?', 'that companies rarely say out loud that they are buying prevention they cannot count'),
           ('Weigh it. Why is Fatima’s suggestion stronger?', 'because it is a client’s own formulation rather than a supplier’s claim'),
           ('Decide. What would you put in the client conversation?', 'the measured fall in error rate, and the honest statement that prevention cannot be counted')],
 decision='Write what Ines says to a client who asks what the fee covers.',
 decision_steps=['Lead with something measured, not with a claim about value.',
                 'Say plainly what cannot be demonstrated, before they find it.',
                 'Give them the thing they can check for themselves.',
                 'Ask them the behaviour question while you have their attention.'],
 bank=['What we can show you is…', 'What we cannot show you is…',
       'You can check this yourself by…', 'While I have you, could I ask…',
       'If we stopped doing it, what you would see is…'],
 outcome='Ines used the measured fall and the honest limit with four clients over two '
         'months. Three of the four asked no further questions. The fourth, Priya Menon, '
         'said that she had assumed Arclight was not doing any of it and had been pricing '
         'the relationship accordingly; she increased her engagement the following quarter. '
         'Fatima’s suggestion was never used, because Ines decided that quoting one client '
         'to another was a different kind of claim.',
 outcome_q=[('Why did Priya respond as she did?', 'she had assumed the invisible work was not happening and had priced the relationship on that basis'),
            ('Why did Ines not quote Samuel?', 'because quoting one client to another is a different kind of claim from reporting a measurement')],
 tags=[]),

lab=dict(
 title='Brief Lab · Find out what clients think',
 task=['This is the brief Ines wrote when the question of client value first came up. It is '
       'the brief that produced eleven conversations and no information.',
       'Every question in it asks for an opinion, and an opinion about a supplier, offered '
       'to that supplier, is a social act rather than a report.'],
 draft=['Have a conversation with each client about how we are doing.',
        'Find out whether they are happy with the service.',
        'Ask if there is anything they would like us to improve.',
        'Get a sense of what they value about what we do.',
        'Note down anything useful that comes up.',
        'Report back on the general picture.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six questions, every one of which can be answered truthfully and uselessly.',
 asked=['What each client looks at, and for how long',
        'The sections nobody has ever read',
        'The clients’ own words, recorded'],
 back=['11 clients said they were happy',
       'No section identified as unread',
       'A summary describing a general picture'],
 gap='"How we are doing" and "anything you would like improved" both invite a courtesy, and '
     '"a sense of what they value" produces the asker’s impression rather than the client’s '
     'behaviour.',
 back_cap='Eleven conversations, eleven polite answers and nothing anybody could act on.',
 back_note='All eleven clients said they were happy. Four months later the layout change '
           'produced two complaints, from clients who had said they were happy.',
 diagnosis=[('[1] "how we are doing" — measured by what?', 'unstated criterion'),
            ('[2] "whether they are happy" — and if they are being polite?', 'hidden assumption'),
            ('[3] "anything they would like improved" — against what they actually use?', 'hidden assumption'),
            ('[4] "a sense of what they value" — whose sense?', 'unstated criterion'),
            ('[5] "anything useful that comes up" — useful by what test?', 'unscoped set'),
            ('[6] "the general picture" — of which clients, in whose words?', 'unscoped set')],
 rewrite='Rewrite the brief so that every question asks about behaviour, and so that the '
         'answers are recorded in the client’s own words.',
 scaffold=['Why behaviour tells you more than opinion about a supplier',
           'Which clients are asked, and which are excluded',
           'One conversation each, with a length limit',
           'The questions that must be asked, and the ones that must not',
           'What comes back, including the list of unmentioned sections',
           'What to do when a client cannot answer in the abstract'],
 bank=['Find out … so that … can be decided.',
       'Ask the … active clients; exclude …',
       '1 conversation each, of no more than …',
       'Ask … ; do not ask … , because …',
       'Return … records and a list of …',
       'If a client cannot say … , ask them to …'],
 check=['Is every question about what the client does rather than what they think?',
        'Have you forbidden the opinion questions explicitly?',
        'Are the client’s own words required?',
        'Is there a list of what nobody mentioned?'],
 model=['Find out which parts of what we send are actually read, before allocating next year’s improvement effort',
        'The 11 active clients; the 2 clients in onboarding are excluded',
        '1 conversation with each client, of no more than 10 minutes',
        'Ask what they look at, in what order and for how long, and which sections they have never read; do not ask whether they are happy or what they would like improved, because those produce courtesies; record the client’s own words rather than a summary of their meaning',
        '11 records in the clients’ own words and 1 list of every document section nobody mentioned, by 30 April',
        'If a client cannot say what they look at, ask them to open the last document they received and describe what they do with it'],
 cost='11 conversations producing 11 statements of satisfaction, 0 usable findings, and a '
      'layout change 4 months later that drew 2 complaints from clients who had said they '
      'were happy.'),

rev_fig=figs.split('DIRECT AND INDIRECT',
                   'Direct — question word order',
                   ['What do you look at first?',
                    'Why did you change supplier?',
                    'Do you read the whole page?',
                    'How long does it take?'],
                   'Indirect — statement word order',
                   ['Could I ask what you look at first?',
                    'I wondered why you had changed supplier.',
                    'May I ask whether you read the whole page?',
                    'Can you tell me how long it takes?']),
rev_fig_cap='The politeness sits outside the clause. Inside it, nothing changes but the order.',
rev=dict(
 read=[('The recommended question asks about', ['opinion', 'behaviour', 'price', 'competitors'], 1),
       ('An indirect question uses', ['question word order', 'statement word order', 'the imperative', 'no verb'], 1),
       ('Invisible work is justified by', ['customer perception', 'what it prevents', 'its cost', 'tradition'], 1),
       ('In the Clinic, what did Priya reveal?', ['she was leaving', 'she had assumed the work was not happening', 'she read everything', 'she wanted a discount'], 1)],
 listen_text='Ask what they look at, not what they think, because an opinion offered to a '
             'supplier is a courtesy and a habit is not. Then write down which parts of your '
             'output nobody mentioned, and remember that some of that is genuinely for nobody '
             'and some of it is the part that prevents the failure that would end the '
             'relationship. Those two look identical on the list.',
 listen=[('Ask what they ____________ at, not what they think.', 'look'),
         ('An opinion offered to a supplier is a ____________.', 'courtesy'),
         ('Write down which parts nobody ____________.', 'mentioned'),
         ('Those two look ____________ on the list.', 'identical')],
 speak=['Ask your partner what they look at first in a document they receive regularly.',
        'Then ask what they would notice if it stopped. Compare the two answers.'],
 write='Write four behaviour questions for a customer, and the two you will not ask.',
 vocab=[('Any occasion on which a customer meets the service is a ____________.', 'touchpoint'),
        ('The rate at which customers leave is ____________.', 'churn'),
        ('A specific place where a customer struggles is a ____________.', 'pain point'),
        ('A customer recommending you unprompted is ____________.', 'advocacy'),
        ('Anything making a customer’s task harder is ____________.', 'friction')],
 gram=[('Could you tell me what you ____________ at first?', 'look'),
       ('I wondered why you ____________ changed supplier.', 'had'),
       ('May I ask ____________ you read the whole page?', 'whether'),
       ('Can you tell me how long it ____________ you?', 'takes'),
       ('Do you know where the file ____________ kept?', 'is')]),

found=['Ask one customer what they look at first, and time their answer.',
       'List the parts of your output that nobody has ever mentioned.',
       'Decide for one improvement whether it is for the customer or is insurance.',
       'Rewrite one blunt question you need to ask as an indirect one.'],
end_line='I will never thank you for it and I would leave if you stopped. Both of those are true.',
end_next='Next: Checking You Understood',
)
