# -*- coding: utf-8 -*-
"""Unit 25 - Technology and Privacy. IELTS Volume 3, band 6.0."""

_REC = dict(kind='device', title='How a recommendation system builds a profile',
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

 cycles=[
  dict(
   sub='Data and your rights',
   step=1,
   read=[
    dict(heading='How we use your data',
         kind='Privacy notice', task='Matching features and short answer',
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
           ['one month', 'twenty-four months', 'six years',
            'indefinitely'], 1,
           'Paragraph 2, after which they are deleted automatically.'),
          ('Account records are kept for six years because',
           ['of marketing', 'tax law requires it', 'customers ask',
            'the supplier requires it'], 1,
           'Paragraph 2, counted from the closing of the account.'),
          ('You may complain to the regulator',
           ['only after complaining to the company', 'at any time',
            'only within a month', 'only about deletion'], 1,
           'Paragraph 5: whether or not you have complained to the company '
           'first.'),
          ('The company must answer a request for a copy within one '
           '____________ month.', None, 'calendar',
           'Paragraph 3, alongside correcting anything inaccurate without '
           'delay.'),
          ('The supplier list is updated each ____________.', None,
           'quarter',
           'Paragraph 4, which names three categories of supplier.')]),
    dict(heading='Making a subject access request',
         kind='Procedure notice', task='Flow-chart completion',
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
         task='A call to a data protection team', band='l1',
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
         task='A talk at a consumer research briefing', band='l2',
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
          ('The study’s main finding is that',
           ['people dislike tracking', 'what people say and do are almost '
            'unrelated', 'discounts are too small', 'surveys are '
            'unreliable'], 1,
           'Ninety per cent object in the survey; seventy per cent accept '
           'for a discount.'),
          ('The speaker says pricing a privacy trade is impossible '
           'because', ['people are irrational', 'nobody has the necessary '
            'information', 'the law is unclear', 'discounts vary'], 1,
           'Including the company doing the collecting.'),
          ('People object most strongly to',
           ['how much is collected', 'who sees the data', 'how long it is '
            'kept', 'where it is stored'], 1,
           'Four times the objection when shared with an insurer.'),
          ('What question does the speaker recommend asking?',
           ['Did they consent?', 'Would they have predicted the use?',
            'Is it lawful?', 'Is it profitable?'], 1,
           'Because that is what predicts complaints.')])],
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
           'Ten minutes a week, which she calls the price.'),
          ('Which person blames the design of the choice?',
           ['Beatriz', 'Teodor', 'Noor', 'Lajos'], 1,
           'A large green button, with the alternative three clicks away.'),
          ('Which person cares about the recipient rather than the amount?',
           ['Beatriz', 'Teodor', 'Noor', 'Lajos'], 2,
           'The shop may know everything; it may not pass it to an insurer.'),
          ('Which person sees the decision as collective?',
           ['Beatriz', 'Teodor', 'Noor', 'Lajos'], 3,
           'What he agrees to sets what the next person is offered.'),
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
    dict(heading='Two users disagree about tracking', part='Part 3',
         task='A conversation about a tracking setting', band='l3',
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
          ('What has got worse since Dev changed the setting?',
           ['Battery life', 'The maps', 'The recommendations',
            'Nothing'], 1,
           'It offers the route a tourist would take, costing four minutes a '
           'week.'),
          ('Marisol says the setting governs',
           ['what is recorded', 'what is shown', 'both', 'neither'], 1,
           'So Dev is still logged and has lost the benefit.'),
          ('Why does she say people misread it?',
           ['They do not read it', 'The wording invites it',
            'It is translated badly', 'It changes often'], 1,
           'Personalisation is the use, not the collection.'),
          ('What does she say would actually stop collection?',
           ['Another setting', 'Deleting the account or using a different '
            'device', 'A complaint', 'Nothing at all'], 1,
           'Everything in between she calls theatre.'),
          ('What does she say worked?',
           ['The setting', 'The data request', 'The complaint',
            'The new phone'], 1,
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
   read=[
    dict(heading='Signals, inference and the picture they make',
         kind='Article', task='Matching information and True/False/Not Given',
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
          ('Which paragraph explains the point at which behaviour becomes '
           'description?', ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Summarising the log into features: what you did becomes what you '
           'are like.'),
          ('Which paragraph names the first feedback path?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'Your response is recorded in the same log.'),
          ('Which paragraph explains why clearing your history changes '
           'little?', ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 3,
           'The log is retained for twenty-four months.'),
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
         task='A talk on how profiles are built', band='l4',
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
          ('The engineer says the system should be described as',
           ['a pipeline', 'apparatus with two loops', 'a database',
            'a sequence of steps'], 1,
           'Because the process description is how everybody gets it wrong.'),
          ('An example of a recorded action is',
           ['your name', 'a two-second hesitation', 'your address',
            'your payment card'], 1,
           'Alongside a page opened and a scroll depth.'),
          ('The feature store turns ten thousand events into about',
           ['forty numbers', 'four hundred numbers', 'four thousand '
            'numbers', 'one number'], 1,
           'Frequency by category, time of day, speed of return, variance in '
           'basket size.'),
          ('What does he say about the confidences on inferred traits?',
           ['They are too low', 'They are honest but used badly',
            'They are hidden', 'They are inaccurate'], 1,
           'The way they are used downstream is not always honest.'),
          ('Why is loop one uncomfortable for him?',
           ['It is slow', 'The system records its own influence as '
            'information about you', 'It is expensive',
            'It is inaccurate'], 1,
           'If it shows you more of something and you click, it has learned '
           'and also caused it.'),
          ('Retention is set at', ['three months', 'twelve months',
            'twenty-four months', 'five years'], 2,
           'A number in a policy document rather than in his code.')])],
   speak=dict(
    part='Part 3', focus='Being predicted',
    intro=('Four or five sentences. Try once to distinguish what was given '
           'from what was guessed.'),
    qs=['How do websites decide what to show you?',
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
   read=[
    dict(heading='Three fields and a name',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
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
           ['Removing the name', 'Where identity actually lives',
            'The linkage attack', 'Defences and their cost'], 1,
           'In the combination of attributes unique to one person in a '
           'population.'),
          ('Choose the best heading for paragraph 4.',
           ['Where identity lives', 'Quasi-identifiers',
            'The linkage attack', 'A structural problem'], 2,
           'Matching the anonymised file against a second dataset containing '
           'names.'),
          ('Choose the best heading for paragraph 7.',
           ['A structural problem', 'Defences and their cost',
            'Published demonstrations', 'The honest summary'], 1,
           'Aggregation, generalisation and noise addition, all of which '
           'reduce usefulness.'),
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
    dict(heading='A lecture on re-identification', part='Part 4',
         task='A lecture on anonymised data', band='l4',
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
           ['Name, address, age', 'Date of birth, postcode, sex',
            'Postcode, income, sex', 'Name, postcode, diagnosis'], 1,
           'None of which is an identifier in the ordinary sense.'),
          ('Adding a field multiplies the combinations while',
           ['the population grows', 'the population stays the same',
            'the file shrinks', 'accuracy falls'], 1,
           'Which is why almost every combination ends up describing one '
           'person or nobody.'),
          ('The second file in the attack contains',
           ['the same fields and a name', 'medical records', 'postcodes '
            'only', 'nothing useful'], 0,
           'From an electoral register, a leaked list, or what people post '
           'themselves.'),
          ('In several published cases, re-identification took',
           ['several years', 'about a week', 'a month', 'a decade'], 1,
           'By a student, using a laptop and a public register.'),
          ('The structural claim is that anonymity is a property of',
           ['a file', 'a file together with every other dataset',
            'an organisation', 'a law'], 1,
           'So somebody else’s publication can de-anonymise your file '
           'later.'),
          ('Why do researchers resist the defences?',
           ['They are expensive', 'They make the data less useful',
            'They are illegal', 'They are untested'], 1,
           'And the lecturer says they are not being unreasonable.')])],
   speak=dict(
    part='Part 3', focus='Data that cannot be taken back',
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
    intro=('Four or five sentences. Try once to say that a property depends '
           'on something outside the thing itself.'),
    qs=['Can information about people ever be made completely anonymous?',
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
   read=[
    dict(heading='A law written for files, applied to inferences',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
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
          ('Which paragraph gives the example of a sixty-eight per cent '
           'estimate?', ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'Where the three rights are each tested against an inference.'),
          ('Which paragraph explains the technology-neutral strategy?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'Principles rather than specifics, which half worked.'),
          ('Which paragraph describes the asymmetry in enforcement?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 2,
           'Consent is a document; a model requires access, skills and a '
           'reason to look.'),
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
         task='A recorded exchange', band='l4', qtype='Questions 62-67',
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
           ['too slow', 'aimed at the wrong event', 'too strict',
            'well designed'], 1,
           'Because nothing that upsets anybody happens at the moment of '
           'collection.'),
          ('Why does the regulator say consent is what they audit?',
           ['It is most important', 'It is a document they can check',
            'The law requires only that', 'Companies prefer it'], 1,
           'What a regulator with forty staff can check.'),
          ('The difficulty with correcting an inference is that',
           ['it is encrypted', 'it is a sound output that is wrong about the '
            'person', 'it cannot be seen', 'it is not stored'], 1,
           'A sixty-eight per cent estimate of household composition.'),
          ('The regulator calls the problem',
           ['unsolvable', 'a drafting failure', 'a funding problem',
            'an engineering problem'], 1,
           'And says drafting failures are repairable.'),
          ('Which problem does Halvorsen say would remain?',
           ['Consent', 'Retention', 'Correction', 'Enforcement'], 1,
           'Twenty-four months, set in a policy a product manager can '
           'change.'),
          ('What does the regulator admit at the end?',
           ['The law is adequate', 'The four needed repairs are each blocked '
            'by somebody specific', 'She has no powers',
            'Engineers are to blame'], 1,
           'And says she would rather be told she is slow.')])],
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
