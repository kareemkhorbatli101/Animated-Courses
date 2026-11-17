# -*- coding: utf-8 -*-
"""Unit 48 - Markets and Their Limits. IELTS Volume 5, band 7.0."""

_MKT_A = dict(kind='line',
              title='Market A: a staple with few substitutes',
              sub='price and quantity, four quarters before and after a tax '
                  'of 20 per unit',
              ylab='',
              x=['Q-4', 'Q-3', 'Q-2', 'Q-1', 'Q+1', 'Q+2', 'Q+3', 'Q+4'],
              series=[('Price paid by buyer', [100, 101, 100, 102, 118, 119,
                                               119, 120]),
                      ('Quantity sold', [100, 99, 100, 101, 97, 96, 96, 95])])

_MKT_B = dict(kind='line',
              title='Market B: a product with many substitutes',
              sub='price and quantity, four quarters before and after the '
                  'same tax',
              ylab='',
              x=['Q-4', 'Q-3', 'Q-2', 'Q-1', 'Q+1', 'Q+2', 'Q+3', 'Q+4'],
              series=[('Price paid by buyer', [100, 100, 101, 100, 104, 105,
                                               104, 105]),
                      ('Quantity sold', [100, 101, 100, 100, 82, 79, 77,
                                         76])])

UNIT = dict(
 n=48, vol=5, level='B2+/C1', band='7.0',
 theme='Markets and Their Limits',
 opener=(
   'One tax, two markets, two completely different outcomes, and the '
   'difference is not in the tax. The Task 1 problem is a pair of charts '
   'that have to be organised by market rather than by quarter, and the '
   'argument that follows runs from there to the goods that get worse when '
   'they are priced — and then to the objection this volume has been '
   'building towards, which is what to do when an argument you agree with '
   'turns out to forbid almost everything.'),

 cycles=[
  dict(
   sub='Switching and competing',
   step=1,
   read=[
    dict(heading='Switching provider — your rights',
         kind='Consumer guidance',
         task='Note completion and multiple choice',
         band='gt_short', qtype='Questions 1-6',
         skill=('Consumer guidance is read for the clock that starts',
                ['Every stage of a complaint or a switch starts a period, '
                 'and rights expire with those periods rather than with the '
                 'problem.',
                 'Mark each period and what starts it. The commonest '
                 'practical failure in this area is a right lost by '
                 'waiting, and the commonest question is about which event '
                 'begins a count.']),
         paras=[
          'You may switch supplier at any time unless you are inside a fixed '
          'term with an exit fee, and the fee may not be charged in the '
          'final forty-nine days of that term. A supplier may not block a '
          'switch because of a disputed balance, although it may block one '
          'where a balance is undisputed and overdue.',
          'The switch itself takes five working days plus a fourteen-day '
          'cooling-off period during which you may cancel without reason. '
          'The cooling-off period runs from the date of the contract and not '
          'from the date the supply changes, which is the source of most of '
          'the confusion about it.',
          'If something goes wrong, complain to the supplier first. It has '
          'eight weeks to resolve the matter. At the end of that period, or '
          'earlier if it issues a final response, you may take the complaint '
          'to the ombudsman, and a final response must state in terms that '
          'it is final.',
          'The ombudsman is free to the consumer and is funded by a charge '
          'on the supplier for each case accepted, whatever the outcome. '
          'Suppliers therefore have an incentive to resolve complaints '
          'before this point, and the great majority of complaints that '
          'reach eight weeks are settled in the week the ombudsman is '
          'mentioned.',
          'An ombudsman decision binds the supplier and does not bind you. '
          'If you accept it, the matter is closed and you may not litigate. '
          'If you reject it, you keep your right to go to court and lose '
          'nothing except the time, which is why rejecting a decision you '
          'consider too low carries less risk than most people assume.'],
         items=[
          ('An exit fee may not be charged in the final ____________ days '
           'of a fixed term.', None, 'forty-nine',
           'Paragraph 1, which also covers disputed balances.'),
          ('The cooling-off period runs from',
           ['the date supply changes', 'the date of the contract', 'the end of the switch', 'the first bill'],
           1, 'Paragraph 2, which is the usual source of confusion.',
           {0: 'Paragraph 2 says it does not run from the supply '
               'change.', 2: 'The switch completes after the cooling-off period '
               'begins.', 3: 'The first bill arrives long after the contract date.'}),
          ('A supplier has ____________ weeks to resolve a complaint.',
           None, 'eight',
           'Paragraph 3, or less if it issues a final response.'),
          ('The ombudsman is funded by',
           ['the consumer', 'a charge on the supplier per case', 'government', 'a levy on all suppliers equally'],
           1, 'Paragraph 4, payable whatever the outcome.',
           {0: 'Paragraph 4 says it is free to the consumer.', 2: 'No government funding is mentioned in the notice.', 3: 'The charge falls on the supplier in each case, not on '
               'all equally.'}),
          ('An ombudsman decision binds',
           ['both parties', 'the supplier only', 'the consumer only', 'neither'],
           1, 'Paragraph 5: accepting it closes the matter for you.',
           {0: 'Paragraph 5 says it does not bind the consumer.', 2: 'The consumer may reject it and go to court.', 3: 'The supplier is bound by the decision.'}),
          ('If you reject a decision you keep the right to go to '
           '____________.', None, 'court',
           'Paragraph 5, losing nothing except the time.')]),
    dict(heading='Making a complaint to the ombudsman',
         kind='Procedure notice', task='Note completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Obtain a deadlock letter or wait eight weeks. A deadlock letter '
          'is a final response and must say so; a letter saying the supplier '
          'considers the matter closed is not one, and submitting with the '
          'wrong document is the commonest reason a case is returned '
          'unopened.',
          'Submit within twelve months of that letter or of the eight-week '
          'point. Late submissions are refused rather than considered late, '
          'and the twelve months runs from the letter rather than from the '
          'events complained of, which occasionally helps.',
          'State the remedy you want, in figures. A complaint that describes '
          'what went wrong without saying what would put it right is '
          'assessed on the ombudsman’s own view of an appropriate remedy, '
          'which is on average lower than the figure complainants ask for.',
          'The supplier is given fifteen working days to respond and the '
          'file is then assessed on the documents. Hearings are rare and are '
          'held only where the facts are disputed rather than their '
          'consequences. A decision normally follows within eight weeks of '
          'acceptance, and longer where a hearing has been directed.',
          'Keep every letter, note the date and name of every telephone '
          'call, and send documents in one bundle rather than in stages. '
          'Cases submitted in pieces take on average three weeks longer, '
          'and the delay is caused by the assessment being paused each time '
          'something new arrives.'],
         items=[
          ('A ____________ letter is a final response and must say so.',
           None, 'deadlock',
           'Paragraph 1, and the wrong document gets a case returned.'),
          ('Submit within ____________ months of the letter.', None,
           'twelve', 'Paragraph 2: late submissions are refused.'),
          ('State the remedy you want, in ____________.', None, 'figures',
           'Paragraph 3, or the ombudsman applies its own view.'),
          ('The supplier is given ____________ working days to respond.',
           None, 'fifteen',
           'Paragraph 4, after which the file is assessed on documents.')])],
   listen=[
    dict(heading='Escalating a complaint to an ombudsman', part='Part 1',
         task='A call to a consumer advice line · note completion', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Adviser', 'Consumer line, Marguerite speaking.'),
          ('Caller', 'Hello. I have been arguing with my energy supplier '
           'since May and somebody said I should go to the ombudsman.'),
          ('Adviser', 'Possibly. When did you first complain?'),
          ('Caller', 'The ninth of May.'),
          ('Adviser', 'Then the eight weeks expired in early July, so you '
           'can go whenever you like. Do you have a final response from '
           'them?'),
          ('Caller', 'I have a letter from August saying they consider the '
           'matter closed.'),
          ('Adviser', 'That is probably not a final response, and the '
           'distinction matters. A final response has to say that it is '
           'final, in those terms. A letter saying the matter is closed is '
           'the commonest thing people submit and the commonest reason a '
           'case comes straight back.'),
          ('Caller', 'So I need to ask them for one?'),
          ('Adviser', 'You do not, because your eight weeks are long past. '
           'You can go on the eight-week route instead and never mention the '
           'letter. Just be aware your twelve months runs from early July.'),
          ('Caller', 'Twelve months from July. That is plenty.'),
          ('Adviser', 'It is, and I would not use all of it. Now, the part '
           'most people get wrong: what are you asking for?'),
          ('Caller', 'For them to admit the bill was wrong.'),
          ('Adviser', 'Put a figure on it. If you ask for a figure, that '
           'figure anchors the assessment. If you do not, the ombudsman '
           'applies its own view, which is on average lower than what people '
           'ask for.'),
          ('Caller', 'The overcharge was about four hundred and ten pounds '
           'and I have spent perhaps nine hours on it.'),
          ('Adviser', 'Then ask for the four hundred and ten and a sum for '
           'the time and trouble, and say what the nine hours were. They '
           'will have fifteen working days to respond and a decision '
           'normally comes within eight weeks.'),
          ('Caller', 'And if the decision is too low?'),
          ('Adviser', 'Reject it. The decision binds them and not you, so '
           'rejecting costs you nothing but the time and keeps your right to '
           'go to court. Almost nobody knows that, and it is the single most '
           'useful thing on this call.')],
         items=[
          ('First complained: ____________ May', None, 'ninth',
           'Making the eight-week point early July.'),
          ('The August letter is probably not a ____________ response.',
           None, 'final',
           'Because a final response must say that it is final.'),
          ('The twelve-month limit runs from ____________.', None,
           'July', 'The eight-week point rather than the letter.'),
          ('Amount of the overcharge: £____________', None, '410',
           'Which the adviser says should be claimed as a figure.'),
          ('The supplier has ____________ working days to respond.', None,
           'fifteen',
           'With a decision normally within eight weeks.'),
          ('An ombudsman decision binds the supplier and not the '
           '____________.', None, 'consumer',
           'So rejecting it preserves the right to go to court.')]),
    dict(heading='A short talk: when choice is not a choice',
         part='Part 2', task='A talk at a consumer policy briefing · multiple choice',
         band='l2', qtype='Questions 17-20',
         script=[
          ('Speaker', 'I have evaluated switching markets for eleven years, '
           'and I want to start from the finding that gets me into arguments '
           'with my own profession: in most of these markets, switching '
           'rates are low because switching is not worth doing, and not '
           'because consumers are passive.'),
          ('Speaker', 'Take the standard policy response. If switching is '
           'low, make it easier: faster transfers, clearer tariffs, '
           'comparison sites. We have done all of that for twenty years. '
           'Switching rates rose for about three years in each market and '
           'then returned to roughly where they started.'),
          ('Speaker', 'The reason is that the gain from switching is '
           'competed away in a specific pattern. Suppliers offer a discount '
           'to new customers, fund it from customers who stay, and the '
           'average saving available to a well-informed switcher falls as '
           'more people switch. A market in which everybody switches '
           'optimally has no switching discount left to capture.'),
          ('Speaker', 'And there is a distributional consequence that took '
           'us far too long to notice. The customers who do not switch are '
           'disproportionately old, poor, or without internet access, so the '
           'discount offered to the active is funded by the inactive. A '
           'market working exactly as designed transfers money from the '
           'least able to the most able, continuously, and nobody '
           'intended it.'),
          ('Speaker', 'The remedy that has worked is the one the economics '
           'likes least, which is a cap on the price charged to customers '
           'who do not act. It reduces the discount available to switchers, '
           'it reduces switching, and it raises total consumer welfare, '
           'which is three sentences that are very uncomfortable to put '
           'together in my field.'),
          ('Speaker', 'So the thing I would ask you to take away is that '
           '"make switching easier" is not a neutral intervention. It is a '
           'policy that benefits the people who were going to switch '
           'anyway, and in a market with this structure it is paid for by '
           'the people it was supposed to help.')],
         items=[
          (
           'The speaker says switching rates are low because switching '
           'is not ____________ doing.', None, 'worth',
           'A finding that puts him at odds with his own profession.'),
          (
           'After reforms, switching rates rose for about ____________ '
           'years and then returned.', None, 'three',
           'In each market where the reforms were tried.'),
          (
           'The switching discount is funded by customers who '
           '____________.', None, 'stay',
           'Which produces a transfer from inactive to active '
           'customers.'),
          (
           'The remedy that worked was a ____________ on the price '
           'charged to inactive customers.', None, 'cap',
           'Which reduces switching and raises total consumer welfare.')])],
   speak=dict(
    part='Part 1', focus='Choosing between providers',
    intro=('Two or three sentences each. Real examples from your own life '
           'are what this part rewards.'),
    qs=['Do you compare prices before buying services?',
        'Have you ever changed supplier for something?',
        'Is it easy to change providers in your country?',
        'Do you think competition keeps prices down?'],
    shape=[('answer', 'For large things, yes; for anything under about '
            'fifty pounds, never.'),
           ('support', 'I changed energy supplier twice and then stopped '
            'bothering.'),
           ('follow-up', 'The saving was about forty pounds and it took an '
            'hour and a half, which is a wage I would not accept for '
            'anything else.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Escalating an unresolved complaint',
         prompt=('You have complained to a company and the matter is still '
                 'unresolved. Write a letter to the ombudsman. In your '
                 'letter: give the history of the complaint; explain why you '
                 'are dissatisfied; state the remedy you want. Write at '
                 'least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing to bring a complaint against Pellow Energy, account '
          '4471-9032, which has been unresolved since 9 May.',
          'I complained on 9 May that four months of estimated bills had '
          'been issued despite meter readings being submitted each month, '
          'and that the account had been placed in arrears on the basis of '
          'those estimates. The provider acknowledged the complaint on 14 '
          'May, requested the readings again on 2 June, and wrote on 11 '
          'August stating that it considered the matter closed. I am '
          'treating that letter as the end of the matter rather than as a '
          'final response, since it does not describe itself as one, and I '
          'submit on the basis that eight weeks expired on 4 July.',
          'I am dissatisfied because the overcharge has not been corrected '
          'and because the arrears marker remains on the account, which has '
          'already affected a credit application.',
          'The remedy I am seeking is as follows: repayment of £410.62, '
          'being the difference between the estimated and actual '
          'consumption; removal of the arrears marker and written '
          'confirmation that this has been done; and £150 for the time and '
          'trouble involved, which amounts to approximately nine hours of '
          'telephone calls and correspondence across four months.',
          'Yours faithfully,',
          'K. Oyinlola-Vasquez'],
         notes=[
          'The third paragraph is a dated sequence with nothing editorial '
          'in it. An ombudsman is assessing a file, and a letter that reads '
          'like a file is assessed faster and more favourably than one that '
          'reads like a grievance.',
          'The writer states which route they are using and why, '
          'pre-empting a return of the case for the wrong document. '
          'Demonstrating that you understand the procedure removes the '
          'commonest reason for delay.',
          'The remedy is in three numbered parts with figures and a '
          'justification for each. The guidance says a complaint without a '
          'figure is assessed on the ombudsman’s own view, which is lower, '
          'so this is the paragraph that decides the outcome.'],
         criterion=[('A dated sequence with nothing editorial in it',
                     'Task Achievement'),
                    ('Showing you understand which route you are using',
                     'Task Response'),
                    ('A remedy in figures with a justification for each',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Chronology and remedy sought',
    explain=('A complaint to an adjudicator has two halves: what happened, '
             'in order, and what you want, in figures. These patterns keep '
             'the two separate and keep feeling out of both.'),
    examples=['The provider issued a final response on 11 August with which '
              'I am dissatisfied.',
              'I complained on 9 May; the provider acknowledged on 14 May '
              'and wrote again on 11 August.',
              'The remedy I am seeking is as follows.',
              'I submit on the basis that eight weeks expired on 4 July.'],
    task='Rewrite each sentence as part of a chronology or a remedy.',
    items=[('They have messed me about for months.',
            'I complained on 9 May; the account remains in dispute '
            'fourteen weeks later.'),
           ('I want compensation.',
            'The remedy sought is £150 for time and trouble, representing '
            'approximately nine hours over four months.'),
           ('Their letter was useless.',
            'The letter of 11 August does not describe itself as a final '
            'response and does not address the estimated readings.'),
           ('My credit rating has suffered.',
            'The arrears marker applied on 2 June remains on the account and '
            'has affected one credit application.'),
           ('I want this sorted.',
            'I am seeking repayment of £410.62, removal of the marker, and '
            'written confirmation that both have been done.')]),
   vocab=[('deadlock letter', 'a final response allowing escalation'),
          ('ombudsman', 'an independent body deciding consumer disputes'),
          ('redress', 'the putting right of a wrong'),
          ('cancellation window', 'time in which a contract may be '
           'cancelled'),
          ('exit fee', 'a charge for leaving a contract early'),
          ('arrears', 'money owed and overdue'),
          ('refer upward', 'to take a complaint to a higher stage'),
          ('binding', 'legally obliging one party to comply')],
   expr=[('The provider issued a final response on... with which I am '
          'dissatisfied', 'the standard escalation sentence'),
         ('I am treating that letter as the end of the matter rather than '
          'as a final response', 'handles an ambiguous document'),
         ('the decision binds them and not you',
          'states an asymmetry worth knowing'),
         ('that figure anchors the assessment',
          'explains why a number should be named')],
   trans=['furthermore', 'in this connection', 'I submit that',
          'the remedy sought'],
  ),

  dict(
   sub='When choice is not a choice',
   step=2,
   read=[
    dict(heading='Four customers who could not switch',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 21-26',
         paras=[
          'A  Rosamund: There are four suppliers in my village and all four '
          'buy from the same wholesaler and resell at within nine pounds of '
          'each other. I switched twice to establish that. It is not a '
          'cartel, nobody is doing anything wrong, and it is also not a '
          'choice in any sense that would be recognised by somebody '
          'explaining markets to a class.',
          'B  Thaddeus: I could switch and the cost of switching is the '
          'problem. Two days off work to be at home for the engineer, a '
          'thirty-pound fee, and a fortnight of uncertainty about whether '
          'the direct debit transfers. The saving is sixty pounds a year. '
          'The arithmetic works and the arithmetic is not why anybody '
          'decides anything.',
          'C  Oyelaran: I am on a prepayment meter because of a debt from '
          'four years ago, and the tariffs available to me are the most '
          'expensive ones. The people who most need the saving are offered '
          'the worst prices, which everybody in this industry knows and '
          'describes as a risk-based differential.',
          'D  Winifred: I switched eleven times in nine years and I am the '
          'reason the system works, if it works. The discount I get is paid '
          'for by my neighbours who never switch, and I have known that for '
          'about four years. I have not stopped switching, which tells you '
          'something about how much knowing a thing changes it.'],
         items=[
          (
           'Which person found several suppliers offering nearly '
           'identical prices?',
           ['Rosamund', 'Thaddeus', 'Oyelaran', 'Winifred'], 0,
           'Four suppliers within nine pounds of each other.',
           {1: 'Thaddeus is deterred by the non-financial costs of '
               'switching.', 2: 'Oyelaran faces the highest prices because of past '
               'debt.', 3: 'Winifred benefits from the arrangement and knows who '
               'pays for it.'}),
          (
           'Which person is deterred by the non-financial costs of '
           'switching?',
           ['Rosamund', 'Thaddeus', 'Oyelaran', 'Winifred'], 1,
           'Two days off work and a fortnight of uncertainty against '
           'sixty pounds.',
           {0: 'Rosamund found several suppliers offering nearly '
               'identical prices.', 2: 'Oyelaran faces the highest prices because of past '
               'debt.', 3: 'Winifred benefits from the arrangement and knows who '
               'pays for it.'}),
          (
           'Which person faces the highest prices because of past '
           'debt?',
           ['Rosamund', 'Thaddeus', 'Oyelaran', 'Winifred'], 2,
           'A prepayment meter and the most expensive tariffs '
           'available.',
           {0: 'Rosamund found several suppliers offering nearly '
               'identical prices.', 1: 'Thaddeus is deterred by the non-financial costs of '
               'switching.', 3: 'Winifred benefits from the arrangement and knows who '
               'pays for it.'}),
          (
           'Which person benefits from the arrangement and knows who '
           'pays for it?',
           ['Rosamund', 'Thaddeus', 'Oyelaran', 'Winifred'], 3,
           'And has continued switching anyway.',
           {0: 'Rosamund found several suppliers offering nearly '
               'identical prices.', 1: 'Thaddeus is deterred by the non-financial costs of '
               'switching.', 2: 'Oyelaran faces the highest prices because of past '
               'debt.'}),
          ('Rosamund believes the suppliers are acting unlawfully.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says it is not a cartel and nobody is doing anything '
           'wrong.',
           {0: 'Yes would need unlawfulness; she says nobody is doing '
               'anything wrong.', 2: 'Not Given is wrong because she judges their conduct.'}),
          ('Thaddeus has calculated the saving available to him.',
           ['Yes', 'No', 'Not Given'], 0,
           'He gives it as sixty pounds a year against the costs '
           'involved.',
           {1: 'No would need no calculation; he gives sixty pounds a '
               'year.', 2: 'Not Given is wrong because the figure is his own.'})])],
   listen=[
    dict(heading='Two regulators disagree about competition',
         part='Part 3', task='A conversation between two regulators · multiple choice',
         band='l3', qtype='Questions 27-32',
         script=[
          ('Beatrix', 'I am going to recommend the cap stays and I know what '
           'you are going to say.'),
          ('Hieronymus', 'Then let me say it properly rather than the '
           'cartoon version. A cap reduces switching, switching is what '
           'disciplines suppliers, and a market with no switching is a '
           'market where price is set by us rather than by competition. I '
           'do not want that job and neither do you.'),
          ('Beatrix', 'That is the serious version and I accept the whole of '
           'it except the first step. Switching has already fallen back to '
           'where it was before every reform we have made. The discipline '
           'you are describing stopped operating about six years ago.'),
          ('Hieronymus', 'Because of the cap.'),
          ('Beatrix', 'Before the cap. I have the series. Switching peaked '
           'in the third year after the comparison-site reforms and fell '
           'for four years before we capped anything.'),
          ('Hieronymus', 'I had not seen that broken out by year and it '
           'does damage the sequence I was relying on. Can I shift my '
           'objection rather than drop it?'),
          ('Beatrix', 'Please.'),
          ('Hieronymus', 'The cap sets a price. Prices set by regulators go '
           'wrong slowly and are extremely hard to unwind, because the '
           'moment you lift one somebody’s bill rises and it is attributed '
           'to you personally. In ten years you will have a cap nobody can '
           'remove and no mechanism for finding out what the price should '
           'have been.'),
          ('Beatrix', 'That is the objection I find hardest and it is about '
           'the exit rather than about the policy.'),
          ('Hieronymus', 'It is. Which is why I would support the cap if it '
           'came with a sunset and a stated test for renewal, rather than as '
           'a permanent feature nobody revisits.'),
          ('Beatrix', 'What test?'),
          ('Hieronymus', 'The gap between the cheapest tariff and the '
           'default tariff. If that gap closes to under eight per cent for '
           'two consecutive years, the cap lapses automatically unless we '
           'actively renew it. That puts the burden on us to justify keeping '
           'it rather than on somebody else to remove it.'),
          ('Beatrix', 'I would sign that, and I would want the figure in the '
           'instrument rather than in guidance, because guidance is what '
           'gets quietly revised in year four.')],
         items=[
          ('Hieronymus\u2019s initial objection is that a cap',
           ['raises prices', 'reduces switching, which disciplines suppliers', 'is unlawful', 'costs too much to administer'],
           1,
           'Leaving price to be set by the regulator rather than '
           'competition.',
           {0: 'He argues the cap keeps prices down for the inactive.', 2: 'Legality is not raised by either regulator.', 3: 'Administrative cost is not his objection.'}),
          (
           'Beatrix answers that switching had already fallen back '
           '____________ any cap.', None, 'before',
           'Peaking three years after the comparison-site reforms.'),
          ('What does Hieronymus do when shown the series?',
           ['Withdraws entirely', 'Shifts his objection rather than dropping it', 'Disputes the data', 'Ends the discussion'],
           1, 'Having relied on a sequence the figures damage.',
           {0: 'He keeps an objection rather than withdrawing.', 2: 'He accepts the figures he had not seen.', 3: 'He continues the discussion to a proposal.'}),
          (
           'His revised objection concerns how a ____________ price is '
           'ever removed.', None, 'regulated',
           'Because lifting a cap raises somebody\u2019s bill personally.'),
          ('What would he accept?',
           ['A permanent cap', 'A cap with a sunset and a stated test for renewal', 'No cap', 'A cap set by ministers'],
           1,
           'Putting the burden on the regulator to justify keeping it.',
           {0: 'A permanent cap is what he objects to.', 2: 'He is willing to support a cap with conditions.', 3: 'Ministerial setting is not what he proposes.'}),
          (
           'The test proposed is the gap between the cheapest and '
           'default tariff closing to under ____________ per cent.',
           None, 'eight',
           'Measured over two consecutive years, and in the instrument '
           'rather than in guidance.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Choice',
    longturn=[('The time I had no real alternative was when the only nursery '
               'within reach of my work raised its fees by a third, with six '
               'weeks\' notice.'),
              ('The options that appeared to exist were three. I could move my '
               'daughter to a cheaper nursery eleven kilometres away, I could '
               'reduce my hours, or I could stay and pay.'),
              ('What I did was stay and pay, and I spent a weekend convincing '
               'myself it was a decision.'),
              ('Why the alternatives were not real ones is worth setting out, '
               'because at the time I could not see it. The cheaper nursery '
               'was in the opposite direction from my office, so the two '
               'journeys together added eighty minutes a day, which meant I '
               'would arrive after the start of the shift I was contracted to; '
               'the fee saving was about a fifth of what the extra travel '
               'cost. Reducing my hours would have taken me below the '
               'threshold at which the childcare subsidy applied, so the net '
               'loss was greater than the fee rise. And moving was not '
               'available at all, because the waiting list was nine months and '
               'the notice was six weeks. So there were three options on paper '
               'and one in fact, and the nursery, which was not behaving '
               'badly, knew the arithmetic as well as I did. What I learned is '
               'that a market with choice in it can still leave each '
               'individual with none, and that the published list of '
               'alternatives tells you nothing about this.')],
    intro=('Short answers, then the long turn. The explanation bullet '
           'should carry the weight.'),
    cue=('Describe a time you had no real alternative.',
         ['what the situation was', 'what options appeared to exist',
          'what you did',
          'and explain why the alternatives were not real ones']),
    qs=['Do you like having a lot of choice?',
        'Is there plenty of choice where you live?',
        'Now look at the card. You have one minute to make notes.',
        'Can too much choice be a problem?'],
    shape=[('answer', 'Finding somewhere to live in the town where my job '
            'was.'),
           ('support', 'There were eleven flats advertised and nine of them '
            'went before a viewing.'),
           ('follow-up', 'I took the one I could get on the day I could get '
            'it.'),
           ('support', 'On paper that is a market with choice in it.'),
           ('follow-up', 'In practice I chose between one option and '
            'commuting ninety minutes, which is a different thing.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should essential services be run by the state?',
         prompt=('Some people believe essential services such as water and '
                 'energy should be run by the state; others believe private '
                 'companies run them better. Discuss both views and give '
                 'your own opinion. Write at least 250 words.'),
         model=[
          'The usual argument here is about ownership and the evidence is '
          'mostly about market structure, which is why the two sides so '
          'rarely meet. What determines performance in these industries is '
          'whether competition is possible at all, and ownership matters '
          'chiefly through its effect on that.',
          'The case for private operation rests on a mechanism that is real '
          'where it can operate. A firm that loses customers to a rival has '
          'an immediate and personal reason to reduce costs, and no '
          'committee of officials reproduces that pressure reliably. In '
          'markets where entry is cheap and customers can leave — '
          'telecommunications, energy retail, air travel — the record of '
          'private operation on price and innovation is good and is not '
          'seriously disputed.',
          'The case for state operation is strongest exactly where that '
          'mechanism cannot operate. A water network is a natural monopoly: '
          'nobody is going to build a second set of pipes, customers cannot '
          'switch, and the discipline the private case relies on is '
          'therefore absent by construction. What replaces it is regulation, '
          'which means the price is set by officials either way, and the '
          'question becomes whether a dividend should be paid on top of a '
          'price that officials have set.',
          'There is a complication that neither side is comfortable with. '
          'Even where switching is possible, it may not discipline anything: '
          'in retail energy, the discount offered to switchers is funded by '
          'customers who stay, who are disproportionately old or poor, so a '
          'functioning competitive market produces a continuous transfer '
          'from the least able to the most able and nobody intends it.',
          'My own position follows from the structure rather than from '
          'principle. Where entry is genuinely possible, private operation '
          'with light regulation; where the asset is a monopoly network, '
          'public ownership or a regulated utility with no dividend, since '
          'the alleged advantage cannot operate; and where switching exists '
          'but does not discipline, a cap on the price paid by those who do '
          'not act. That is three answers to one question, and the question '
          'contains three different industries.'],
         notes=[
          'The introduction diagnoses why the debate fails to progress '
          '— one side argues ownership, the other structure — and then '
          'organises the essay around structure.',
          'Each case is stated where it is strongest rather than in '
          'general, which is the only honest way to handle a prompt that '
          'bundles several industries into one word. Paragraph 4 then adds '
          'a complication neither side wants.',
          'The conclusion gives three answers and says why: the question '
          'contains three industries. Refusing a single answer to a question '
          'that contains several is a legitimate and high-scoring move when '
          'the reason is stated.'],
         criterion=[('Diagnosing why the two sides do not meet',
                     'Task Response'),
                    ('Stating each case where it is strongest',
                     'Task Response'),
                    ('Three answers, with the reason for refusing one',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Ellipsis in comparison and coordination',
    explain=('At band 7 repeated words are omitted where the structure '
             'makes them recoverable. This is a marker of fluent written '
             'English and it is also how long comparisons stay readable.'),
    examples=['A market with one supplier and a complaints procedure is not '
              'a market.',
              'The discount is funded by those who stay, not by those who '
              'switch.',
              'Private operation works where entry is cheap; public, where '
              'it is not.',
              'The tax fell on the seller in one market and the buyer in the '
              'other.'],
    task='Rewrite each pair of sentences using ellipsis.',
    items=[('Private firms work well in some markets. The state works '
            'better in others.',
            'Private operation suits contestable markets; public ownership, '
            'monopoly networks.'),
           ('Switchers get a discount. Non-switchers pay for it.',
            'The discount goes to those who switch and is paid for by those '
            'who do not.'),
           ('The first market absorbed the tax in the price. The second '
            'absorbed it in quantity.',
            'The first market absorbed the tax in price, the second in '
            'quantity.'),
           ('Some services can be competed for. Others cannot be competed '
            'for.',
            'Some services are contestable and others are not.'),
           ('The cap reduces switching. It also raises welfare.',
            'The cap reduces switching and raises welfare, which is '
            'uncomfortable and true.')]),
   vocab=[('switching cost', 'everything it takes to change supplier'),
          ('lock-in', 'being unable to leave without real cost'),
          ('natural monopoly', 'a market where one supplier is '
           'unavoidable'),
          ('contestable', 'open to a new entrant if prices rise'),
          ('default tariff', 'the price paid by those who do not choose'),
          ('cross-subsidy', 'one group’s price funding another’s'),
          ('sunset', 'a date on which a rule lapses automatically'),
          ('prepayment meter', 'a meter paid for before use')],
   expr=[('A market with one supplier and a complaints procedure is not a '
          'market', 'denies that a form amounts to a substance'),
         ('the arithmetic works and the arithmetic is not why anybody '
          'decides anything', 'separates a calculation from a decision'),
         ('it puts the burden on us to justify keeping it',
          'describes what a sunset clause does'),
         ('a market working exactly as designed transfers money from the '
          'least able to the most able', 'states an unintended '
          'distributional effect')],
   trans=['whereas', 'that said', 'the case for', 'my own position'],
  ),

  dict(
   sub='Prices and who pays them',
   step=3,
   read=[
    dict(heading='Where a tax actually lands',
         kind='Data article',
         task='Matching information and note completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_MKT_A, figure2=_MKT_B,
         paras=[
          'The two charts show two markets in which the same tax of twenty '
          'units per item was introduced at the same moment. Each shows the '
          'price paid by buyers and the quantity sold, indexed to 100 '
          'before the tax. The tax is identical; the outcomes are not.',
          'In Market A, the price paid by buyers rose from 102 to 118 in the '
          'first quarter after the tax and settled at 120. Quantity fell '
          'from 101 to 97 and then to 95. Most of the tax appears in the '
          'price and very little in the quantity.',
          'In Market B, the price paid by buyers rose from 100 to 104 and '
          'settled at 105. Quantity fell from 100 to 82 in the first quarter '
          'and continued down to 76. Here almost none of the tax appears in '
          'the price and a great deal appears in the quantity.',
          'The economic term for this is incidence: who actually bears a tax '
          'as opposed to who hands over the money. In both markets the '
          'seller remits the tax. In Market A the buyers bear most of it, '
          'through a higher price. In Market B the sellers bear most of it, '
          'because they cannot raise the price without losing the custom '
          'the quantity line records them losing anyway.',
          'What differs between the two markets is substitutability. Market '
          'A is a staple with few alternatives: buyers who face a higher '
          'price mostly pay it. Market B has many alternatives: buyers faced '
          'with a higher price buy something else, so a seller attempting to '
          'pass the tax on loses more in volume than the price rise '
          'recovers.',
          'Two practical consequences follow and both are frequently '
          'misunderstood in public argument. The first is that whoever a tax '
          'is formally levied on tells you nothing about who pays it, so an '
          'argument that a tax is "on companies" is a statement about '
          'paperwork. The second is that a tax designed to reduce '
          'consumption works in Market B and raises revenue in Market A, and '
          'a government cannot have both from the same tax in the same '
          'market.',
          'The charts also show something easy to miss. In Market A the '
          'quantity line drifts down for four quarters; in Market B the '
          'price line is flat after the first while quantity keeps falling. '
          'A measurement taken one quarter after a tax understates its '
          'eventual effect in both markets.'],
         items=[
          ('Which paragraph defines incidence?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           2, 'Who bears a tax as opposed to who hands over the money.',
           {0: 'Paragraph 2 describes Market A.', 1: 'Paragraph 3 describes Market B.', 3: 'Paragraph 5 explains the difference between the '
               'markets.'}),
          (
           'Which paragraph explains the difference between the '
           'markets?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2,
           'Substitutability: whether buyers can buy something else.',
           {0: 'Paragraph 3 describes Market B.', 1: 'Paragraph 4 defines incidence.', 3: 'Paragraph 6 draws the two practical consequences.'}),
          ('Which paragraph notes that adjustment takes time?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 4'],
           2,
           'A measurement after one quarter understates the eventual '
           'effect.',
           {0: 'Paragraph 5 explains substitutability.', 1: 'Paragraph 6 draws the two practical consequences.', 3: 'Paragraph 4 defines incidence.'}),
          ('Where did the buyer price settle in Market A?', None,
           '120', 'Paragraph 2, from 102 before the tax.'),
          (
           'To what did the quantity fall in Market B by the fourth '
           'quarter?', None, '76',
           'Paragraph 3, while the price rose only to 105.'),
          ('What does a tax raise in Market A?', None, 'revenue',
           'Paragraph 6: a government cannot have both from one tax in '
           'one market.')])],
   listen=[
    dict(heading='An economist on tax incidence', part='Part 4',
         task='A lecture on who bears a tax · multiple choice', band='l4',
         qtype='Questions 39-44',
         figure=_MKT_A, figure2=_MKT_B,
         script=[
          ('Economist', 'One tax, twenty units an item, imposed on the same '
           'day in two markets. Two completely different outcomes, and '
           'nothing about the tax differs. By the end of this hour you '
           'should never again say that a tax is "on" anybody.'),
          ('Economist', 'Market A. The buyer price goes from a hundred and '
           'two to a hundred and eighteen in one quarter and settles at a '
           'hundred and twenty. Quantity drifts from a hundred and one down '
           'to ninety-five. Almost all of the tax shows up in the price.'),
          ('Economist', 'Market B, same tax. The buyer price moves from a '
           'hundred to a hundred and five, and stops. Quantity falls from a '
           'hundred to eighty-two in a single quarter and carries on to '
           'seventy-six. Almost none of the tax shows up in the price and a '
           'great deal shows up in volume.'),
          ('Economist', 'The word for this is incidence: who bears a tax as '
           'opposed to who writes the cheque. The seller remits it in both '
           'markets. In A the buyers bear it. In B the sellers do, because '
           'they cannot raise the price without losing customers, and you '
           'can watch them losing customers anyway on the quantity line.'),
          ('Economist', 'What makes the difference is substitutes. A is a '
           'staple: buyers mostly pay. B has alternatives: buyers leave. '
           'And notice that this is a property of the market rather than of '
           'the tax, which is why the same tax can be regressive in one '
           'sector and barely noticeable in another.'),
          ('Economist', 'Two consequences for policy and I want you to have '
           'both. "A tax on companies" is a statement about paperwork. And '
           'a tax that reduces consumption does not raise much revenue, '
           'while a tax that raises revenue does not reduce consumption '
           'much. Any minister promising both from one tax in one market is '
           'describing two different markets.'),
          ('Economist', 'One more thing about Market B, because it is the '
           'one students get wrong in essays. The sellers there are not '
           'being generous. They would raise the price if they could, and '
           'the quantity line is the record of what happens when they try. '
           'Nobody chose to absorb that tax; the market absorbed it for '
           'them.'),
          ('Economist', 'And a word on who the sellers are, because '
           '"sellers bear it" sounds like shareholders and often is not. '
           'A tax borne by a labour-intensive business is borne partly by '
           'its employees, in hours and in wages, and tracing that takes '
           'another two steps that almost nobody takes.'),
          ('Economist', 'Last thing, which is a measurement warning. In both '
           'charts the adjustment is still happening four quarters later. '
           'Evaluate a tax one quarter after it starts and you will '
           'understate its effect, and the direction of that error is the '
           'same every time.')],
         items=[
          ('In Market A the buyer price settles at ____________.',
           None, '120', 'Having risen from 102 before the tax.'),
          (
           'In Market B the quantity falls in the first quarter to '
           '____________.', None, '82',
           'Continuing to 76 by the fourth quarter.'),
          (
           'Incidence refers to who ____________ a tax rather than who '
           'remits it.', None, 'bears',
           'The seller remits it in both markets shown.'),
          (
           'The difference between the markets is the availability of '
           '____________.', None, 'substitutes',
           'A is a staple; B has many alternatives.'),
          ('A tax that raises substantial revenue',
           ['also reduces consumption sharply', 'does not reduce consumption much', 'always falls on sellers', 'is regressive'],
           1,
           'Which is why a minister cannot promise both from one tax.',
           {0: 'Sharp reduction is what the other kind of tax '
               'achieves.', 2: 'Incidence depends on the market, not on the revenue.', 3: 'Regressiveness is a separate property of the market.'}),
          (
           'Measuring a tax one quarter after it starts will '
           '____________ its effect.', None, 'understate',
           'With the error in the same direction every time.')])],
   speak=dict(
    part='Part 3', focus='Who really pays',
    intro=('Five or six sentences. Try once to separate who hands over the '
           'money from who bears the cost.'),
    qs=['Who really pays a tax on a company?',
        'Should taxes be used to change behaviour?',
        'Are some taxes unfair to poorer people?',
        'How should a government decide what to tax?'],
    shape=[('answer', 'Whoever has fewest alternatives, rather than '
            'whoever writes the cheque.'),
           ('support', 'The same tax raised the price by eighteen per cent '
            'in one market and four in another.'),
           ('follow-up', 'Where buyers could switch, sellers absorbed '
            'it.'),
           ('support', 'Which also means a tax that changes behaviour '
            'raises little money.'),
           ('follow-up', 'And a tax that raises a lot of money has not '
            'changed much behaviour.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Price and quantity before and after a tax, two markets',
         prompt=('The graphs below show the price paid by buyers and the '
                 'quantity sold in two markets, in the four quarters before '
                 'and after the introduction of the same tax. Summarise the '
                 'information by selecting and reporting the main features, '
                 'and make comparisons where relevant. Write at least 150 '
                 'words.'),
         figure=_MKT_A, figure2=_MKT_B,
         model=[
          'The two line graphs show price and quantity in two markets over '
          'eight quarters, with the same tax introduced between the fourth '
          'and fifth. Overall, the tax produced opposite effects in the two '
          'markets: in Market A it appears almost entirely in the price '
          'buyers paid, while in Market B it appears almost entirely in the '
          'quantity sold.',
          'In Market A, both series were stable before the tax, within two '
          'points of 100. Afterwards the buyer price rose sharply, from 102 '
          'to 118 in a single quarter, and continued gently upwards to 120. '
          'Quantity fell only slightly over the same period, from 101 to 95.',
          'Market B shows the reverse. Its buyer price rose by only five '
          'points, from 100 to 105, and was flat thereafter. Its quantity '
          'fell from 100 to 82 in the first quarter after the tax and '
          'continued down to 76, a fall of nearly a quarter.',
          'The contrast is sharpest when the two measures are set against '
          'each other. In Market A price rose by twenty points while '
          'quantity fell by six; in Market B price rose by five while '
          'quantity fell by twenty-four, so that the larger movement is in '
          'the opposite series in each case.'],
         notes=[
          'The answer is organised by market rather than by quarter, which '
          'is the unit 46 structuring lesson applied where the two visuals '
          'differ in outcome rather than in shape.',
          'The Overall statement names the reversal between the two markets '
          'in one sentence. Both graphs are needed for it, which is the test '
          'of whether an Overall statement on a paired visual is doing its '
          'job.',
          'The final paragraph sets the two measures against each other with '
          'four figures. Nothing in the answer explains why the markets '
          'differ: substitutability is not on the chart and a sentence about '
          'it would be unsupported.'],
         criterion=[('Organising by market rather than by quarter',
                     'Coherence and Cohesion'),
                    ('An Overall statement requiring both graphs',
                     'Task Achievement'),
                    ('No explanation of why the markets differ',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing a shift and where it lands',
    fix=dict(
     text=('Spending shifted from the high street to online during the period. '
           'The online share rose from 6 to 28 per cent, while the high street '
           'share fell by 71 to 54 per cent. The shift did not land evenly: '
           'almost all of the gain went to three companies, which the chart '
           'shows in the second panel. By 2022 online had overtaken the whole '
           'of the out-of-town sector.'),
     faults=[('fell by 71 to 54 per cent',
              'fell from 71 to 54 per cent',
              ('The starting figure takes from; by would state the size of the '
               'fall.')),
             ('which the chart shows in the second panel',
              'as the second panel shows',
              ('Which has no clear antecedent, and the natural link for this '
               'is as.')),
             ('online had overtaken the whole of the out-of-town sector',
              'online had overtaken the out-of-town sector as a whole',
              ('The whole of the sector is a quantity; the comparison is with '
               'the sector taken together.'))]),
    explain=('Describing a change that affects two quantities differently '
             'requires language that attributes the movement, not just '
             'reports it. These patterns do that within the data.'),
    examples=['The same tax fell on the seller in one market and the buyer '
              'in the other.',
              'Most of the increase appears in the price rather than the '
              'quantity.',
              'Price rose by twenty points while quantity fell by six.',
              'Adjustment continues for four quarters after the change.'],
    task='Rewrite each sentence so that it says where the movement '
         'appears.',
    items=[('Both markets changed.',
            'In Market A the change appears in the price; in Market B, in '
            'the quantity.'),
           ('Prices went up in Market A.',
            'In Market A the buyer price rose by eighteen points while '
            'quantity fell by only four.'),
           ('Market B sold less.',
            'Market B absorbed the change almost entirely in volume, with '
            'quantity falling by nearly a quarter.'),
           ('The effect took time.',
            'In both markets the series were still moving four quarters '
            'after the change.'),
           ('The tax affected buyers and sellers.',
            'Buyers bore the larger share in Market A and sellers in Market '
            'B, from an identical measure.')]),
   vocab=[('tax incidence', 'who actually bears a tax'),
          ('remit', 'to hand over tax that has been collected'),
          ('substitutability', 'how easily buyers can switch to something '
           'else'),
          ('pass-through', 'the share of a cost that reaches the price'),
          ('necessity good', 'a good bought regularly and hard to do '
           'without'),
          ('units sold', 'quantity counted in items rather than in '
           'money'),
          ('regressive', 'falling more heavily on those with less'),
          ('price elasticity', 'how far quantity responds to a price '
           'change')],
   expr=[('The same tax fell on the seller in one market and the buyer in '
          'the other', 'states incidence as a comparison'),
         ('a statement about paperwork',
          'dismisses a formal claim about who pays'),
         ('a property of the market rather than of the tax',
          'locates a cause correctly'),
         ('any minister promising both is describing two different '
          'markets', 'exposes an incompatible pair of promises')],
   trans=['while', 'by contrast', 'taken together', 'what differs'],
  ),

  dict(
   sub='Why some things resist a market',
   step=4,
   read=[
    dict(heading='Goods that get worse when they are priced',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and note completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'Economic analysis ordinarily treats a price as information: it '
          'tells a buyer what something costs to produce and a seller what '
          'it is worth to somebody else, and attaching one to a good that '
          'previously had none makes the allocation of that good more '
          'efficient. For a large class of goods this is straightforwardly '
          'right. For a smaller class it is wrong in an interesting way, '
          'because the price changes what the good is. The claim is not '
          'that pricing such a good is immoral, which is a separate '
          'argument, but that it does not do what pricing is supposed to '
          'do: the thing allocated afterwards is not quite the thing that '
          'was there before.',
          'The clearest documented case is blood donation. Systems relying '
          'on unpaid donors have repeatedly been found to collect more blood '
          'per head than systems offering payment, and the finding has '
          'survived forty years of attempts to explain it away. Offering '
          'money converts an act of civic contribution into a low-paid job, '
          'and a substantial proportion of donors decline the job having '
          'been willing to make the contribution. The effect is not '
          'explained by the sort of person who donates, since it appears '
          'within the same population when payment is introduced and '
          'withdrawn, and it is not explained by the size of the payment, '
          'since raising the sum does not reliably reverse it.',
          'The mechanism is ordinarily called crowding out: an extrinsic '
          'reward displacing an intrinsic one rather than adding to it. The '
          'effect is not universal and is not small where it occurs. In '
          'controlled studies, introducing a modest payment for a task '
          'performed voluntarily reduces participation in roughly a third of '
          'cases, has no effect in another third, and increases it in the '
          'remainder. Those three figures are rarely quoted together, and '
          'the asymmetry in how they are quoted is itself informative: '
          'opponents of payment cite the first third and advocates cite the '
          'last, and the honest summary is that the effect exists and cannot '
          'be assumed.',
          'A second and distinct mechanism concerns what a price '
          'communicates about the acceptability of an act. A frequently '
          'cited study of nurseries introduced a fine for collecting '
          'children late; late collection increased and did not return to '
          'its previous level when the fine was removed. The fine was read '
          'as a price, and a price makes an act permissible in a way that '
          'disapproval does not. Parents who had previously felt that they '
          'were imposing on a member of staff could now understand '
          'themselves as purchasing an extra service, and the price was low '
          'enough to make that purchase look reasonable.',
          'That second mechanism is the more troubling of the two for '
          'policy, because it is not reversible. A norm that has been '
          'converted into a transaction does not convert back when the '
          'transaction is withdrawn, and the nursery study is the standard '
          'illustration precisely because the removal of the fine left the '
          'new behaviour in place. Policy is ordinarily evaluated on the '
          'assumption that an intervention can be withdrawn if it fails, and '
          'this is the clearest documented case of an intervention that '
          'cannot be, which should change how such measures are piloted '
          'rather than only whether they are adopted.',
          'A third category is different again and is frequently confused '
          'with the first two. Some goods are degraded by sale because what '
          'is valued is partly the absence of a market: a friendship that '
          'can be purchased is not the thing people wanted, and the '
          'objection is conceptual rather than empirical. No study is '
          'required and none would be relevant. The test of whether an '
          'objection belongs in this category is straightforward: imagine '
          'the evidence coming out the other way and ask whether you would '
          'change your mind. If no finding could move you, the objection is '
          'conceptual, and saying so is more honest than citing studies that '
          'are not doing the work.',
          'Distinguishing these three matters because they imply different '
          'policies. Crowding out is an empirical risk to be tested before a '
          'payment is introduced. Norm conversion is an argument for '
          'caution about fines and prices in areas governed by social '
          'expectation. The conceptual objection applies to a very small '
          'number of goods and is frequently invoked for a much larger '
          'number by people who mean one of the first two. Arguments in '
          'this area would improve considerably if speakers simply named '
          'which of the three they were making, because much of what looks '
          'like disagreement about markets turns out to be two people '
          'making different objections at each other.',
          'The limits of all three are worth stating because advocates '
          'rarely state them. Crowding out is a minority finding across the '
          'studied cases, not a general law. Norm conversion is documented '
          'in settings with strong existing norms and is not established '
          'where the norm is weak or absent. And the conceptual objection, '
          'applied loosely, prohibits paid care work, paid teaching and paid '
          'medicine, which almost nobody intends. None of this means the '
          'three mechanisms are unimportant; it means they are narrower '
          'than the use made of them, and a narrow argument that holds is '
          'worth more in practice than a broad one that collapses when '
          'somebody pushes on it.',
          'The honest conclusion is narrower than either camp ordinarily '
          'wants. Markets allocate most goods better than the alternatives '
          'and make a minority of goods worse, the minority is identifiable '
          'in advance by asking whether the good is currently supplied by '
          'people who would be insulted by payment, and that test is '
          'imperfect, cheap and considerably better than the arguments '
          'ordinarily conducted in its place.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['Blood donation', 'Crowding out', 'Norm conversion', 'The conceptual objection'],
           1, 'An extrinsic reward displacing an intrinsic one.',
           {0: 'Blood donation is paragraph 2, the documented case.', 2: 'Norm conversion is paragraph 4, with the nursery.', 3: 'The conceptual objection is paragraph 6.'}),
          ('Choose the best heading for paragraph 5.',
           ['Crowding out', 'Norm conversion', 'Why it is not reversible', 'The conceptual objection'],
           2,
           'A norm converted into a transaction does not convert back.',
           {0: 'Crowding out is the heading for paragraph 3.', 1: 'Norm conversion is paragraph 4, with the nursery.', 3: 'The conceptual objection is paragraph 6.'}),
          ('Choose the best heading for paragraph 8.',
           ['Distinguishing the three', 'The limits of all three', 'The honest conclusion', 'Blood donation'],
           1,
           'Crowding out is a minority finding and norm conversion '
           'needs a strong norm.',
           {0: 'Distinguishing the three is paragraph 7.', 2: 'The honest conclusion is paragraph 9.', 3: 'Blood donation is paragraph 2.'}),
          (
           'The writer believes crowding out occurs in most cases '
           'studied.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3 reports it in roughly a third of cases.',
           {0: 'Yes would need most; paragraph 3 reports about a '
               'third.', 2: 'Not Given is wrong because the frequency is given.'}),
          (
           'The writer believes the conceptual objection applies '
           'widely.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 says it applies to a very small number of '
           'goods.',
           {0: 'Yes would need wide application; paragraph 7 says very '
               'few goods.', 2: 'Not Given is wrong because the objection\u2019s reach is '
               'stated.'}),
          ('An extrinsic reward displacing an intrinsic one is called '
           '____________ out.', None, 'crowding',
           'Paragraph 3, found in roughly a third of controlled studies.'),
          ('In the nursery study, late collection did not return to its '
           'previous level when the fine was ____________.', None,
           'removed',
           'Paragraph 4, which is why the case is the standard '
           'illustration.'),
          ('The writer’s test is whether the good is supplied by people '
           'who would be ____________ by payment.', None, 'insulted',
           'The final paragraph, which he calls imperfect and cheap.')])],
   listen=[
    dict(heading='A lecture on the limits of markets', part='Part 4',
         task='A lecture on goods that resist pricing · multiple choice', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'A price is normally information. It tells you what '
           'something cost to make and what somebody else would give for it, '
           'and attaching one to a good that had none usually improves how '
           'that good gets allocated. Today is about the exceptions, and '
           'there are three kinds, which almost everybody runs together.'),
          ('Lecturer', 'Kind one: crowding out. Blood donation is the '
           'classic case. Unpaid systems collect more per head than paid '
           'ones, consistently, for forty years. Offer money and a civic act '
           'becomes a badly paid job, and a lot of people who would do the '
           'first decline the second.'),
          ('Lecturer', 'And here is the number that keeps me honest about '
           'it. In controlled studies, introducing a small payment for a '
           'voluntary task reduces participation in about a third of cases, '
           'does nothing in a third, and increases it in a third. Crowding '
           'out is real and it is a minority result, and my own side of this '
           'argument quotes the third and omits the other two.'),
          ('Lecturer', 'Kind two: norm conversion. The nursery study. A fine '
           'for late collection; lateness went up, because a fine reads as a '
           'price and a price makes a thing permissible. And then they '
           'removed the fine and lateness stayed high. That is the part that '
           'matters. You cannot put the norm back.'),
          ('Lecturer', 'Kind three is not empirical at all. Some things are '
           'degraded by sale because the absence of a market is part of what '
           'was valued. A purchased friendship is not a friendship. No study '
           'bears on that and none would be relevant, and confusing it with '
           'the first two is the commonest mistake in this literature.'),
          ('Lecturer', 'Now the limits, because you will be asked. The '
           'conceptual objection applied loosely forbids paid teaching, paid '
           'nursing and paid medicine, which nobody intends and which is the '
           'reductio your examiners will reach for. If your argument '
           'forbids everything, it is not doing any work.'),
          ('Lecturer', 'Before I give you the test, one distinction that '
           'will save you in an exam. Crowding out is about why people act. '
           'Norm conversion is about what an act means to the people around '
           'them. The first is psychology, the second is social, and a '
           'policy can trigger either without the other.'),
          ('Lecturer', 'What I would send you away with is a cheap test. '
           'Before introducing a payment, ask whether the thing is currently '
           'supplied by people who would be insulted to be paid for it. If '
           'the answer is yes, test the payment on a small scale before '
           'rolling it out. That is imperfect and it is far better than what '
           'is usually done, which is nothing.')],
         items=[
          (
           'How many kinds of exception does the lecturer distinguish?',
           None, 'three',
           'Crowding out, norm conversion, and the conceptual '
           'objection.'),
          (
           'In controlled studies, a small payment reduces '
           'participation in about a ____________ of cases.',
           None, 'third',
           'With no effect in a third and an increase in the rest.'),
          ('He says his own side of the argument',
           ['overstates the data', 'quotes the third that supports it and omits the rest', 'has no evidence', 'misreads the studies'],
           1, 'Which is why he quotes all three figures.',
           {0: 'He says the data is sound and selectively quoted.', 2: 'He cites controlled studies, so evidence exists.', 3: 'He says the studies are read correctly and quoted '
               'partly.'}),
          (
           'The important part of the nursery study is that lateness '
           'stayed high after the ____________ was removed.',
           None, 'fine', 'Because the norm could not be restored.'),
          ('The third kind of objection is',
           ['empirical', 'not empirical at all', 'about efficiency', 'about fairness'],
           1, 'A purchased friendship is not a friendship.',
           {0: 'He says no study bears on it.', 2: 'Efficiency is what the first two kinds concern.', 3: 'Fairness is not the basis of the third objection.'}),
          (
           'His cheap test is to ask whether the good is supplied by '
           'people who would be',
           ['underpaid', 'insulted to be paid', 'better organised', 'difficult to recruit'],
           1, 'And if so, to test a payment on a small scale first.',
           {0: 'Low pay is a different objection, about exploitation.', 2: 'Organisation is not part of the test.', 3: 'Recruitment difficulty is not what the test asks '
               'about.'})])],
   speak=dict(
    part='Part 3', focus='Things that should not be bought and sold',
    followup=[(('You say some things should not be for sale. Does paying '
                'people change why they do things?'),
               ('Sometimes, and the direction is not reliable, which is what '
                'makes the design difficult. Payment crowds out willingness '
                'where the activity carried a signal, as with blood donation, '
                'and it has no such effect in most ordinary work. So the '
                'question has to be asked case by case rather than settled by '
                'principle.')),
              ('Should people who volunteer be paid for their time?',
               ('Expenses, always, and a wage only where the work has become a '
                'job in all but name. Paying expenses removes a barrier that '
                'excludes poorer volunteers; paying a wage changes the '
                'relationship, and organisations that have done it report '
                'losing the people who were there for the reason the role '
                'existed.')),
              ('Who should decide what can be bought?',
               ('Legislatures, after argument, rather than economists or '
                'ethicists, because the judgements involved are about what a '
                'society is willing to treat as a commodity and there is no '
                'technical answer. What experts can supply is evidence about '
                'what happens when a market is opened, which is frequently '
                'surprising.')),
              (('Is the real objection about inequality rather than the sale '
                'itself?'),
               ('In most cases, yes, and that is a reason to be precise. Where '
                'the seller is acting only because they have no alternative, '
                'the wrong is the absence of alternatives, and banning the '
                'transaction removes their least bad option. Those cases need '
                'better alternatives, not a prohibition.'))],
    intro=('Five or six sentences. Try once to say that paying for '
           'something changed what it meant.'),
    qs=['Are there things that should not be for sale?',
        'Does paying people change why they do things?',
        'Should volunteers be paid?',
        'Who should decide what can be bought?'],
    shape=[('answer', 'A few, and fewer than the argument is usually '
            'applied to.'),
           ('support', 'Paid blood systems collect less per head than '
            'unpaid ones.'),
           ('follow-up', 'Because the payment turns a civic act into a '
            'badly paid job.'),
           ('support', 'That effect appears in about a third of studies, '
            'not all.'),
           ('follow-up', 'So I would test a payment before introducing it '
            'rather than argue about it in principle.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Premise under each, and the strongest last',
         prompt=('Are there things that should never be bought and sold? '
                 'Brainstorm ten ideas, run the six tests, name the premise '
                 'under each survivor, and order so the strongest comes '
                 'last. Do not write the essay yet.'),
         plan=('A small number of goods are made worse by sale, the class '
               'is identifiable empirically rather than by principle, and '
               'the principled versions of the argument should be rejected '
               'because they forbid things nobody intends to forbid',
               [('The empirical objection rests on a premise about '
                 'motivation that is testable and sometimes true',
                 ['unpaid blood systems collect more per head than paid '
                  'ones',
                  'payment reduces participation in about a third of '
                  'studied cases']),
                ('The principled objection rests on a premise about '
                 'categories that proves too much',
                 ['it forbids paid teaching, nursing and medicine',
                  'an argument forbidding everything forbids nothing in '
                  'particular'])]),
         notes=[
          'The second premise is being tested by the method cycle 5 teaches: '
          'push it to its limit and see what it forbids. An argument that '
          'proves too much is not refuted by evidence; it is refuted by '
          'being followed through.',
          'Notice the asymmetry in how the two premises fail or hold. The '
          'first is empirical and holds in a minority of cases, which is a '
          'reason to test rather than to assume. The second is conceptual '
          'and fails at its own hands.',
          'Ordering puts the reductio last because it is the strongest and '
          'because it is the move the essay has been preparing. A reductio '
          'offered in paragraph two reads as a trick; offered last, as a '
          'conclusion.'],
         criterion=[('Testing a premise by following it to its limit',
                     'Task Response'),
                    ('Distinguishing an empirical from a conceptual '
                     'failure', 'Task Response')],
         instruct='  Produce the brainstorm, the tests, the premises and '
                  'the order. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Category arguments and their premises',
    explain=('Arguments that a thing belongs to a category which must be '
             'treated differently all depend on the category being '
             'definable. These patterns state the category claim so that it '
             'can be examined.'),
    examples=['Paying for it changed what the act meant, and then how often '
              'it happened.',
              'The objection is conceptual rather than empirical.',
              'The class is identifiable by a test rather than by a '
              'principle.',
              'What is valued is partly the absence of a market.'],
    task='Rewrite each claim so that the category and its test are '
         'visible.',
    items=[('Some things should not be sold.',
            'A small class of goods is degraded by sale, identifiable by '
            'whether its current suppliers would be insulted by payment.'),
           ('Money ruins everything.',
            'Payment displaces intrinsic motivation in about a third of '
            'studied cases and adds to it in the rest.'),
           ('Fines make people behave worse.',
            'A fine read as a price can convert a norm into a transaction, '
            'which the nursery study found to be irreversible.'),
           ('You cannot buy friendship.',
            'Friendship is partly constituted by not being purchasable, '
            'which is a conceptual claim rather than an empirical one.'),
           ('Markets are bad for public services.',
            'Payment may reduce supply where the service is currently '
            'provided by people acting on something other than price.')]),
   vocab=[('crowding out', 'a reward displacing an existing motive'),
          ('intrinsic motivation', 'doing something for its own sake'),
          ('extrinsic reward', 'a payment or prize from outside'),
          ('commodification', 'turning something into a thing that is '
           'sold'),
          ('norm', 'an expectation people hold without a rule'),
          ('civic', 'to do with being a member of a community'),
          ('ratchet', 'a change that moves in one direction only'),
          ('ration', 'to limit how much of a scarce thing each may '
           'have')],
   expr=[('Paying for it changed what the act meant, and then how often it '
          'happened', 'states a mechanism in the right order'),
         ('a price makes an act permissible in a way disapproval does not',
          'explains a counter-intuitive result'),
         ('no study is required and none would be relevant',
          'marks a claim as conceptual'),
         ('my own side quotes the third and omits the other two',
          'concedes selective citation by allies')],
   trans=['consequently', 'which in turn', 'as a result',
          'distinguishing these three'],
  ),

  dict(
   sub='Whether the objection proves too much',
   step=5,
   read=[
    dict(heading='The argument that would ban almost everything',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given, sentence completion and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'An argument proves too much when the reasoning that supports its '
          'conclusion also supports conclusions nobody accepts, including '
          'the person making it. It is not a refutation of the conclusion, '
          'which may be true on other grounds, and it is a demonstration '
          'that this specific route to it cannot be the right one. It is the '
          'most useful tool in a certain kind of argument and it is also the '
          'one most frequently misapplied. Most of the misapplications take '
          'the same form: an opponent is held to a version of their '
          'principle they never stated, and the absurdity follows from the '
          'version rather than from anything they believe.',
          'The objection to markets in certain goods supplies a good '
          'example. In its strong form the claim is that where money changes '
          'hands, the character of a relationship changes, and that some '
          'relationships should not be changed in that way. Applied to the '
          'sale of organs or of votes, this is widely accepted. Applied '
          'consistently, it prohibits paid nursing, paid teaching, paid '
          'childcare and paid medicine, since each involves exactly the '
          'transaction the premise condemns. A nurse is paid to care, a '
          'teacher is paid to attend to a child, and in each case money '
          'changes hands in exactly the relationship the strong form says '
          'should not be mediated by money.',
          'The customary response is to assert that these cases are '
          'different, and the response is correct and incomplete. They are '
          'different, and the distinction has to be articulated, because an '
          'argument that reaches the correct answer in the cases its author '
          'cares about and the erroneous one everywhere else is not yet an '
          'argument. Until the distinction is articulated it remains a '
          'catalogue of conclusions with a principle appended to whichever '
          'of them required defending.',
          'Attempts to state the difference have produced three candidate '
          'lines and none of them survives contact with the others. The '
          'first is that payment is acceptable where the activity would not '
          'otherwise occur, which permits paid nursing and also permits paid '
          'organ donation, since that would not otherwise occur either. '
          'Every attempt to narrow this line has ended up naming organs '
          'specifically, which is the conclusion rather than a reason '
          'for it.',
          'The second is that payment is unacceptable where it exploits '
          'desperation. This is a real consideration and it is a different '
          'argument, about coercion rather than about commodification, and '
          'it would be equally violated by a low-paid job offered to '
          'somebody with no alternatives. A great many people who invoke the '
          'first argument are actually making the second, and the two have '
          'different remedies: a worry about desperation is answered by '
          'improving the alternatives available to the weaker party, not by '
          'prohibiting the transaction.',
          'The third is the empirical line discussed in the previous cycle: '
          'payment is unacceptable where it reduces the supply of the thing '
          'wanted. This one works, is testable, and has the disadvantage '
          'that it does not reach the cases its proponents care about most. '
          'Paid organ markets would increase the supply of organs, which is '
          'why they are proposed. A line that works, is testable, and '
          'reaches none of the cases it was wanted for is a genuinely '
          'awkward result, and it is ordinarily met by changing the subject.',
          'What follows from this is not that the strong objection is wrong '
          'but that it is doing something other than it claims. When '
          'somebody says a thing should not be for sale, they are ordinarily '
          'reporting a settled moral judgement about that thing and then '
          'reaching for a general principle to justify it, and the general '
          'principle is not what produced the judgement. This is why such '
          'arguments are so hard to settle: refuting the principle leaves '
          'the judgement untouched, and its holder reaches for another '
          'principle rather than revising the view.',
          'That is not a criticism of the judgement. Settled moral '
          'intuitions about specific cases are frequently more reliable than '
          'the principles constructed afterwards to systematise them, which '
          'is a position with a respectable philosophical history. It does '
          'mean that arguments of this kind should be conducted case by '
          'case, with the relevant feature of the case identified, rather '
          'than by deriving each case from a principle that will not bear '
          'the weight. Case-by-case reasoning is not a retreat from rigour '
          'provided the relevant feature is named each time, which is also '
          'what stops it collapsing into mere preference.',
          'The practical version of that is a brief catalogue of questions '
          'applied to each proposed market separately. Does payment diminish '
          'the supply of whatever is wanted? Does the transaction depend '
          'upon one party having no alternatives? Is the commodity '
          'constituted partly by not being sold? Does the sale impose a cost '
          'upon somebody outside it? Each is answerable, three of the four '
          'are empirical, and collectively they reach almost every instance '
          'the general principle was devised to handle.',
          'The cost of this approach is that it produces no slogan and '
          'settles no argument in advance, which is why it has made so '
          'little progress against a principle that does both. An argument '
          'that forbids everything forbids nothing in particular, and an '
          'argument that must be conducted afresh each time is one that '
          'nobody can put on a placard.'],
         items=[
          ('Which paragraph defines proving too much?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           0, 'Reasoning that supports conclusions nobody accepts.',
           {1: 'Paragraph 2 applies the idea to markets in some goods.', 2: 'Paragraph 3 discusses the customary response.', 3: 'Paragraph 4 gives the first candidate line.'}),
          (
           'Which paragraph says the exploitation argument is a '
           'different argument?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           1, 'About coercion rather than about commodification.',
           {0: 'Paragraph 4 gives the first candidate line.', 2: 'Paragraph 6 gives the empirical line.', 3: 'Paragraph 7 says what the objection is really doing.'}),
          ('Which paragraph lists the four questions?',
           ['Paragraph 7', 'Paragraph 8', 'Paragraph 9', 'Paragraph 10'],
           2, 'Supply, alternatives, constitution and external cost.',
           {0: 'Paragraph 7 says what the objection is really doing.', 1: 'Paragraph 8 defends case-by-case reasoning.', 3: 'Paragraph 10 gives the cost of the approach.'}),
          (
           'The writer believes the strong objection reaches the wrong '
           'conclusion about selling votes.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 says the application to votes is widely '
           'accepted.',
           {0: 'Yes would need error on votes; paragraph 2 says that '
               'application is accepted.', 2: 'Not Given is wrong because votes are the worked '
               'example.'}),
          (
           'The writer believes moral intuitions about particular '
           'cases are worthless.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 8 calls them often more reliable than the '
           'principles built afterwards.',
           {0: 'Yes would need worthlessness; paragraph 8 calls them '
               'often more reliable.', 2: 'Not Given is wrong because intuitions are rated '
               'against principles.'}),
          ('The empirical line does not reach the cases its proponents care '
           'about because paid organ markets would ____________ supply.',
           None, 'increase',
           'Paragraph 6, which is why such markets are proposed.'),
          ('The writer says a general principle is usually reached for '
           'after a ____________ judgement has been made.', None, 'moral',
           'Paragraph 7, and is not what produced the judgement.'),
          ('How many of the four questions are empirical?', None, 'three',
           'Paragraph 9, with the constitution question the exception.')])],
   listen=[
    dict(heading='A philosopher and an economist disagree', part='Part 4',
         task='A recorded exchange · multiple choice and matching', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Professor Oyelaran-Whitlock works on the ethics of '
           'markets. Dr Bergström-Adeyemi is an economist.'),
          ('Oyelaran-Whitlock', 'I will open by giving away the strongest '
           'objection to my own position, because it is going to come up '
           'anyway. The principle I defend — that some relationships are '
           'changed by payment in ways that matter — does, applied '
           'consistently, forbid paid nursing. I do not want to forbid paid '
           'nursing.'),
          ('Bergström-Adeyemi', 'That is more than I was going to ask for, '
           'and I will match it. My side says the test should be whether '
           'payment increases supply. That test permits an organ market, '
           'which I am not comfortable defending, and I have watched '
           'colleagues avoid saying so.'),
          ('Oyelaran-Whitlock', 'So we have each conceded that our general '
           'principle reaches a case we reject.'),
          ('Bergström-Adeyemi', 'Which raises the question of whether either '
           'of us should be using a general principle at all.'),
          ('Oyelaran-Whitlock', 'That is where I have ended up, and it took '
           'me fifteen years. When somebody says a thing should not be for '
           'sale, they usually have a settled judgement about that thing and '
           'then reach for a principle to justify it. The principle is '
           'reconstruction, not derivation.'),
          ('Bergström-Adeyemi', 'And a philosopher is allowed to say that?'),
          ('Oyelaran-Whitlock', 'A philosopher is required to say it if it '
           'is true. The intuitions about particular cases are frequently '
           'more reliable than the systems built to explain them, which is '
           'an old position and not a comfortable one.'),
          ('Oyelaran-Whitlock', 'And I want to resist one reading of that, '
           'because it is the reading my critics prefer. Saying the '
           'principle came after the judgement is not saying the judgement '
           'is arbitrary. It is saying that the judgement is the evidence '
           'and the principle is the hypothesis, which is the ordinary '
           'relation between the two in every other field.'),
          ('Bergström-Adeyemi', 'That I can work with, and it is close to '
           'what we do with revealed preference, which is also a theory '
           'built backwards from behaviour we already trust.'),
          ('Bergström-Adeyemi', 'Then can I propose the working version? '
           'Four questions, asked separately for each market. Does payment '
           'reduce supply? Does the deal depend on one side having no '
           'alternatives? Is the thing partly constituted by not being '
           'sold? Does the sale cost somebody outside it?'),
          ('Oyelaran-Whitlock', 'I would accept all four, and I notice that '
           'three of them are yours and one of them is mine.'),
          ('Bergström-Adeyemi', 'Three of them are empirical, which is not '
           'quite the same as mine. The third one is yours and it is the one '
           'that cannot be settled by evidence, and I would rather have it '
           'in the list honestly than keep pretending economics can answer '
           'it.')],
         items=[
          ('Oyelaran-Whitlock opens by conceding that his principle',
           ['has no support', 'forbids paid nursing if applied consistently', 'is new', 'applies only to organs'],
           1, 'Which he does not want to forbid.',
           {0: 'He is defending the principle, not abandoning its '
               'support.', 2: 'Novelty is not what he concedes.', 3: 'He concedes it reaches far beyond organs.'}),
          ('Bergstr\u00f6m-Adeyemi concedes that his test',
           ['cannot be measured', 'permits an organ market he is not comfortable defending', 'is unpopular', 'was disproved'],
           1, 'And that colleagues avoid saying so.',
           {0: 'Supply effects are exactly what his test measures.', 2: 'Popularity is not what he concedes.', 3: 'He says the test works, not that it was disproved.'}),
          ('They agree that each general principle',
           ['is well supported', 'reaches a case its holder rejects', 'is untestable', 'is the same argument'],
           1,
           'Which raises the question of using general principles at '
           'all.',
           {0: 'They concede the opposite about their own principles.', 2: 'The supply test is testable, which is its merit.', 3: 'The two principles are different, which is the point.'}),
          (
           'Oyelaran-Whitlock says a principle offered for such a '
           'judgement is usually',
           ['the source of it', 'reconstruction rather than derivation', 'irrelevant', 'borrowed from economics'],
           1, 'A position that took him fifteen years to reach.',
           {0: 'He says the judgement comes first, not the principle.', 2: 'He treats the principle as evidence of the judgement.', 3: 'Economics is the other speaker\u2019s field, not his '
               'source.'}),
          ('How many questions does the working version contain?',
           None, 'four',
           'Supply, alternatives, constitution, and cost to outsiders.'),
          (
           'Which question does Bergstr\u00f6m-Adeyemi say cannot be '
           'settled by evidence?',
           ['Supply', 'Alternatives', 'Whether the thing is constituted by not being sold', 'External cost'],
           2, 'Which he would rather have in the list honestly.',
           {0: 'Supply effects can be measured directly.', 1: 'Whether alternatives exist is an empirical question.', 3: 'External costs are empirical as well.'})])],
   speak=dict(
    part='Part 3', focus='Drawing a line',
    sounds=[('Market vocabulary is full of words that change stress with their '
             'part of speech: a TRANSfer and to transFER, a SUBsidy and to '
             'SUBsidise, a CONtract and to contRACT.'),
            ('Say each pair inside a sentence from this unit. The grammar is '
             'already right in your writing; this is about the mouth.'),
            ('The phrase no real alternative stresses real, and the whole '
             'phrase is one chunk. Stressing alternative makes it sound like a '
             'complaint about the options rather than a claim that there were '
             'none.'),
            ('Practise crowding out, opportunity cost and willingness to pay '
             'as single units. Each is three or four words and one idea.'),
            ('Record yourself on whether volunteers should be paid. Check the '
             'stress on every noun-verb pair you used.')],
    intro=('The hardest turn in the volume so far. Try once to say that an '
           'argument you agree with proves too much.'),
    qs=['Where should the line be drawn on what can be sold?',
        'Is it possible to have a general rule about this?',
        'Should we trust our instincts about such questions?',
        'Who should decide?'],
    shape=[('answer', 'Case by case, because every general rule I have seen '
            'proves too much.'),
           ('support', 'The strong version forbids paid nursing and paid '
            'teaching.'),
           ('follow-up', 'And the economic version permits an organ '
            'market.'),
           ('support', 'So I would ask four questions of each case '
            'separately.'),
           ('follow-up', 'Which produces no slogan, and is why it loses to '
            'arguments that do.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should some things never be sold for profit?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say certain goods and services should '
                 'never be sold for profit. To what extent do you agree? '
                 'Write at least 250 words.'),
         model=[
          'I agree that a small class of goods is made worse by being sold, '
          'and disagree with every general principle I have seen offered for '
          'identifying that class, including the ones I find most '
          'sympathetic.',
          'The empirical part of the case is solid and is narrower than it '
          'is usually presented. Payment can displace an existing motive '
          'rather than adding to it: unpaid blood donation systems collect '
          'more per head than paid ones, consistently and over decades. But '
          'in controlled studies, introducing a payment for a voluntary task '
          'reduces participation in about a third of cases, has no effect in '
          'a third, and increases it in the remainder, so the effect is real '
          'and is a minority result rather than a law.',
          'A second mechanism is more worrying because it is irreversible. '
          'Where a fine is introduced for an act previously governed by '
          'disapproval, the fine is read as a price and the act becomes '
          'permissible; the nursery study that established this found '
          'lateness remained high after the fine was withdrawn. A norm '
          'converted into a transaction does not convert back.',
          'The difficulty is with the principle rather than the evidence. '
          'The strong claim — that payment changes relationships in ways '
          'that should not be permitted — forbids paid nursing, paid '
          'teaching and paid medicine when applied consistently, and almost '
          'nobody who makes it intends that. An argument that forbids '
          'everything forbids nothing in particular, and the usual reply '
          'that those cases are different is correct and incomplete until '
          'the difference is stated.',
          'To the extent that I agree, then, I agree with the conclusion in '
          'particular cases and not with the route to it. I would ask four '
          'questions of each proposed market separately: whether payment '
          'reduces the supply of what is wanted, whether the transaction '
          'depends on one party having no alternatives, whether the thing is '
          'partly constituted by not being sold, and whether the sale costs '
          'somebody outside it. Three of those are empirical, all four are '
          'answerable, and together they reach nearly every case the general '
          'principle was invented for — at the cost of producing no slogan, '
          'which is the only reason it keeps losing.'],
         notes=[
          'The first sentence agrees with a conclusion and rejects the '
          'arguments for it, including sympathetic ones. Separating a '
          'conclusion from its justification is the most sophisticated form '
          'of a to-what-extent answer.',
          'The reductio is held until paragraph 4 and is stated in one '
          'sentence with three examples. Deployed early it would read as a '
          'debating trick; deployed after the evidence it reads as a '
          'finding.',
          'The four questions are the constructive replacement, and the '
          'final clause names the cost of the writer’s own position. An '
          'essay that admits its conclusion is harder to campaign with is '
          'describing the world rather than recruiting.'],
         model65=[
                  'Some people say certain goods and services should '
                  'never be sold for profit. I agree in a small number '
                  'of cases, and I think the usual arguments are too '
                  'broad.',
                  'The strongest argument is that selling something '
                  'can change what it is. A gift of blood and a sale '
                  'of blood are not the same act, and where payment '
                  'reduces the supply of what is wanted, the market '
                  'has defeated its own purpose.',
                  'But the argument is often stretched. Most goods are '
                  'not changed by being sold, and the objection then '
                  'rests on inequality: the worry is not the sale but '
                  'that one party has no alternative. That is a reason '
                  'to improve the alternatives rather than to forbid '
                  'the transaction.',
                  'I think the test should be whether the payment '
                  'destroys what is being bought, or whether one party '
                  'is acting only because they have no choice. Votes '
                  'fail the first test and much low-paid work fails '
                  'the second. Most other goods pass both, and should '
                  'be left alone.',
                  ],
         gap65=[
                'It gives the two tests as questions anybody can '
                'apply, and shows which case fails which.',
                'It reports how often crowding out is actually found, '
                'instead of relying on the famous examples.',
                'It treats the intuition about particular cases as '
                'evidence rather than as sentiment.',
                ],
         criterion=[('Agreeing with a conclusion and rejecting its route',
                     'Task Response'),
                    ('Holding the reductio until after the evidence',
                     'Coherence and Cohesion'),
                    ('Naming the practical cost of your own position',
                     'Task Response')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Reductio and the limits of an argument',
    explain=('Showing that an argument proves too much requires stating '
             'what it also commits its holder to, without implying they '
             'believe it. These patterns do that cleanly.'),
    examples=['An argument that forbids everything forbids nothing in '
              'particular.',
              'Applied consistently, it prohibits paid nursing.',
              'That reply is correct and incomplete.',
              'The principle is reconstruction rather than derivation.'],
    task='Rewrite each objection as a demonstration that the argument '
         'proves too much.',
    items=[('That argument is too broad.',
            'Applied consistently, that principle forbids paid teaching, '
            'which its author does not intend.'),
           ('They only apply it when it suits them.',
            'The principle reaches the right answer in the cases its author '
            'cares about and the wrong one elsewhere, which means the '
            'difference has not yet been stated.'),
           ('You cannot have a rule for this.',
            'Every general rule proposed so far either permits an organ '
            'market or forbids paid nursing.'),
           ('That is just intuition.',
            'The judgement precedes the principle offered for it, which is a '
            'description rather than a criticism.'),
           ('The exploitation argument is different.',
            'The objection from desperation concerns coercion rather than '
            'commodification, and would be violated equally by a low-paid '
            'job.')]),
   vocab=[('proves too much', 'supporting conclusions nobody accepts'),
          ('reductio', 'refuting a claim by following it to an absurdity'),
          ('principled line', 'a general rule for deciding similar cases'),
          ('slippery slope', 'the claim that one step leads to others'),
          ('coercion', 'pressure that removes a real choice'),
          ('intuition', 'a judgement held without argument'),
          ('systematise', 'to organise judgements under a principle'),
          ('constituted', 'made what it is by a particular feature')],
   expr=[('An argument that forbids everything forbids nothing in '
          'particular', 'states the cost of an over-broad principle'),
         ('correct and incomplete',
          'accepts a reply and asks for the rest of it'),
         ('reconstruction, not derivation',
          'describes where a principle really came from'),
         ('it produces no slogan and settles no argument in advance',
          'names the practical cost of a careful position')],
   trans=['admittedly', 'nevertheless', 'in short', 'applied consistently'],
  ),
 ],
 technique=dict(
  title='Two markets, one tax: structure by market and say why',
  body=('A pair of charts showing the same intervention in two settings is '
        'the clearest case of the structuring choice this volume keeps '
        'returning to, and it is also the one where organising by time does '
        'most damage. If you walk through the quarters you will describe '
        'eight points twice and never say the thing the question is '
        'testing, which is that the same measure produced opposite effects. '
        'Organise by setting: one paragraph per market, both series inside '
        'it, so that each market’s story arrives whole. Then give the final '
        'paragraph to the contrast, in figures, and resist explaining it '
        '— the reason one market behaved differently is economics you '
        'brought with you and is not on the page.'),
  panel=[('One paragraph per setting',
          'Both series for Market A, then both for Market B. Never '
          'quarter by quarter.'),
         ('The Overall needs both charts',
          '"Opposite effects from an identical measure" is a sentence '
          'neither chart supports alone.'),
         ('Contrast in figures at the end',
          'Twenty points against five; six against twenty-four. Four '
          'numbers do the work of a paragraph.'),
         ('Do not explain the difference',
          'Substitutability is not drawn. A sentence about it is '
          'unsupported however true.')],
  task='Take the two charts in cycle 3. Write the Overall statement, the '
       'two topic sentences, and the closing contrast in four figures.',
  qs=['What is identical between the two charts, and what differs?',
      'Which series moves most in each market?',
      'Write the Overall statement using both charts.',
      'Write the closing contrast using four numbers.',
      'What explanation were you tempted to give, and why leave it '
      'out?']),
 outlining=dict(
  title='Testing whether a premise proves too much',
  body=('The premise test has asked you to name what an idea assumes and '
        'whether your evidence reaches it. The third question is what else '
        'the premise commits you to. Take the premise, apply it to three '
        'cases you have not been discussing, and see what it says about '
        'them. If it says something you do not believe, you have found '
        'either a better premise or a reason to abandon the idea, and '
        'either is worth more than the paragraph you were about to write. '
        'This matters most for moral and categorical arguments, where the '
        'premise is usually a principle and principles generalise whether '
        'you want them to or not. The test costs about ninety seconds and '
        'catches the objection an examiner would make.'),
  frame=('A small number of goods are made worse by sale, the class is '
         'identifiable empirically rather than by principle, and the '
         'principled versions of the argument should be rejected because '
         'they forbid things nobody intends to forbid',
         [('The empirical objection rests on a premise about motivation '
           'that is testable and sometimes true',
           ['unpaid blood systems collect more per head than paid ones',
            'payment reduces participation in about a third of studied '
            'cases']),
          ('The principled objection rests on a premise about categories '
           'that proves too much',
           ['it forbids paid teaching, nursing and medicine',
            'an argument forbidding everything forbids nothing in '
            'particular'])]),
  task='Take each premise from your cycle 4 brainstorm, apply it to three '
       'cases you were not discussing, and write what it implies about '
       'each.',
  qs=['Which premise implied something you do not believe?',
      'Could you narrow it so that it stops implying that?',
      'Does the narrowed version still support your thesis?',
      'Which premise survived all three test cases?',
      'Is your strongest idea now the one you started with?'],
  answers=['the categorical one, almost always',
           'usually yes, by adding a condition about supply or coercion',
           'if not, the thesis was resting on the broad version',
           'the empirical ones, because they claim less',
           'frequently not, which is the point of doing this before '
           'writing']),
 candos=['I can read consumer guidance for the clock each stage starts',
         'I can structure a pair of charts by setting rather than by time',
         'I can explain who bears a tax rather than who remits it',
         'I can test whether a premise proves too much',
         'I can agree with a conclusion while rejecting the argument for '
         'it'],
 tip=('When two charts show one intervention in two settings, write one '
      'paragraph per setting and save the contrast for the end. Organising '
      'by time describes everything twice and selects nothing.'),
)
