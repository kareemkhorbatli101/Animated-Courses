# -*- coding: utf-8 -*-
import figs

U = dict(
num=2, title='Whose Infrastructure Is It',
gram='modal perfects for evaluation: ought to have, needn’t have',
ai='sovereignty and dependence: whose infrastructure is it',
strap='CEFR C1 · Grammar: modal perfects · AI: whose infrastructure is it',
cando=['evaluate a past decision with ought to have, should have and needn’t have',
       'distinguish a criticism of a decision from a criticism of its outcome',
       'say what a ministry gives up when its capability sits outside its control',
       'identify a single point of failure in an arrangement that works',
       'write a tasking that requires the exit to be costed before the entry'],
hero=('THE NOTICE PERIOD IS NINETY DAYS',
      ['Four years of records, eleven languages, a section rebuilt around it.',
       'Ninety days is the whole of what the Ministry would have.'],
      [(730, 'teal', 'long'), (1390, 'purple', 'short'),
       (2050, 'orange', 'long'), (2690, 'blue', 'short')]),
hero_cap='Information Security and Records, reading a contract nobody had read for four years.',

warm=['What does your organisation depend on that it does not control?',
      'How long would you have if it were withdrawn?',
      'What is the difference between criticising a decision and criticising its result?'],
read=[
 'The Ministry’s consular systems have run for four years on infrastructure provided from '
 'outside the state. The arrangement has worked: the systems have been available, the costs '
 'have been predictable, and the service a section of eleven officers now provides was not '
 'possible before it.',
 'In February Karim Dalati read the contract, which nobody had done since it was signed, and '
 'found three things. The notice period for withdrawal of service is ninety days. The provider '
 'may vary the price annually without limit. And the data may be held in any of four '
 'jurisdictions at the provider’s discretion.',
 'None of the three is unusual and none of them has caused any difficulty. The Ministry has '
 'had four years of good service at a predictable price and its material has in fact been held '
 'in one jurisdiction throughout.',
 'What Karim reported was not a failure but an exposure: if the service were withdrawn on '
 'notice, the Ministry would have ninety days to replace a system on which a consular service '
 'for eight thousand monthly enquiries now depends, and it has no plan, no costing and no '
 'domestic alternative identified.',
 'The Deputy Minister who took the original decision said, in the meeting, that the Ministry '
 'ought to have negotiated a longer notice period and needn’t have accepted the jurisdiction '
 'clause, both of which were available in 2022 and neither of which anybody asked for. He '
 'added that he would take the same decision again, because the alternative in 2022 was no '
 'consular system at all, and that the error was not the decision but the four years in which '
 'nobody wrote down what it had cost.'],
c_a=[('How long have the systems run on outside infrastructure?', 'four years'),
     ('What three things did Karim find in the contract?', 'a ninety-day notice period, unlimited annual price variation, and four possible jurisdictions'),
     ('Have any of the three caused difficulty?', 'no; the service has been good and the price predictable'),
     ('What did Karim report?', 'not a failure but an exposure'),
     ('What would the Ministry have on withdrawal?', 'ninety days, with no plan, costing or alternative identified'),
     ('What did the Deputy Minister say the error was?', 'not the decision but the four years in which nobody wrote down what it had cost')],
c_b=[('The arrangement has failed.', 'F'),
     ('The provider may vary the price without limit.', 'T'),
     ('The data has in fact been held in four jurisdictions.', 'F'),
     ('A longer notice period was available in 2022.', 'T'),
     ('The Deputy Minister regrets the decision itself.', 'F'),
     ('The Ministry has a domestic alternative identified.', 'F')],
c_c=[('The costs have been ____________.', 'predictable'),
     ('Nobody had done since it was ____________.', 'signed'),
     ('In any of four ____________ at the provider’s discretion.', 'jurisdictions'),
     ('Not a failure but an ____________.', 'exposure'),
     ('The Ministry ought to have negotiated a longer ____________ period.', 'notice'),
     ('The four years in which nobody wrote down what it had ____________.', 'cost')],
c_d=[('The report described an ( exposure / failure ).', ['exposure', 'failure'], 0),
     ('What is the notice period?', ['thirty days', 'ninety days', 'a year', 'none'], 1),
     ('How many jurisdictions may hold the data?', ['one', 'four', 'eleven', 'two'], 1),
     ('What was the alternative in 2022?', ['a domestic system', 'no consular system at all', 'a regional arrangement', 'a shared facility'], 1),
     ('What does the Deputy Minister call the error?', ['the decision', 'the four years of silence about its cost', 'the contract', 'the price'], 1)],
c_e=('Match each modal perfect to what it evaluates.',
     [('ought to have negotiated', 'a duty not discharged'),
      ('needn’t have accepted', 'something done that was unnecessary'),
      ('could have asked', 'an available option not taken'),
      ('must have been considered', 'a deduction about the past'),
      ('would have been refused', 'a hypothetical outcome'),
      ('should not have been signed', 'a judgement that it was wrong')],
     ['a duty not discharged', 'something done that was unnecessary',
      'an available option not taken', 'a deduction about the past',
      'a hypothetical outcome', 'a judgement that it was wrong']),

v_fig_title='DEPENDENCE',
v_fig=[('shield', 'a sovereign capability'), ('key', 'a notice period'), ('chart', 'a price increase'),
       ('pin', 'a jurisdiction'), ('clock', 'an exit plan'), ('bulb', 'a single point of failure')],
v_fig_cap='Six words for what an arrangement costs while it is working perfectly.',
vocab=[
 ('a dependence', 'a reliance on something one does not control'),
 ('a sovereign capability', 'a capability a state can operate without another’s consent'),
 ('an external provider', 'a body outside the state supplying a service'),
 ('a hosting arrangement', 'the terms on which material is held by another'),
 ('a jurisdiction', 'the legal authority under which material falls'),
 ('a legal exposure', 'the liability or risk a legal position creates'),
 ('a contractual term', 'a provision of an agreement for services'),
 ('a notice period', 'the time that must be given before a service ends'),
 ('a service withdrawal', 'the ending of a service by the provider'),
 ('a price increase', 'a rise in what a service costs'),
 ('a lock-in', 'the condition of being unable to leave at reasonable cost'),
 ('an exit plan', 'the written plan for ceasing to depend on a provider'),
 ('a portability of data', 'the ability to take material elsewhere in usable form'),
 ('a domestic alternative', 'a provider or capability within the state'),
 ('a shared facility', 'a facility used jointly by several bodies'),
 ('a regional arrangement', 'an arrangement among neighbouring states'),
 ('a procurement decision', 'the decision to buy a service and on what terms'),
 ('a continuity requirement', 'the standard of availability a service must meet'),
 ('a single point of failure', 'a component whose loss stops everything'),
 ('a diversification', 'the spreading of dependence across more than one provider')],
v_a=[('A capability a state can operate without another’s consent is a ____________.', 'sovereign capability'),
     ('The condition of being unable to leave at reasonable cost is a ____________.', 'lock-in'),
     ('The written plan for ceasing to depend on a provider is an ____________.', 'exit plan'),
     ('The ability to take material elsewhere in usable form is a ____________.', 'portability of data'),
     ('A component whose loss stops everything is a ____________.', 'single point of failure'),
     ('The time that must be given before a service ends is a ____________.', 'notice period'),
     ('The legal authority under which material falls is a ____________.', 'jurisdiction'),
     ('The spreading of dependence across more than one provider is a ____________.', 'diversification')],
v_b=[('A dependence is a reliance on something', 'one does not control.'),
     ('A hosting arrangement is the terms', 'on which material is held by another.'),
     ('A continuity requirement is the standard of availability', 'a service must meet.'),
     ('A procurement decision is the decision to buy a service', 'and on what terms.'),
     ('A regional arrangement is an arrangement', 'among neighbouring states.')],

g_title='Grammar: modal perfects for evaluation',
g_rule=['Ought to have and should have state a duty that was not discharged.',
        'Needn’t have states that something done was unnecessary; didn’t need to states that '
        'it was not required and may not have been done.',
        'Could have states an option that was available and not taken.',
        'Must have and can’t have are deductions about the past, not evaluations.'],
g_fig=('LOOSE',
       ['The Ministry made a mistake with the contract.',
        'It was bad that nobody read it.',
        'The jurisdiction clause was unnecessary.',
        'Somebody probably considered the notice period.'],
       'PRECISE',
       ['The Ministry ought to have negotiated a notice period of 12 months.',
        'The contract should have been read annually; it was read once in 4 years.',
        'The Ministry needn’t have accepted the jurisdiction clause: 2 providers offered a '
        'single jurisdiction in 2022.',
        'Somebody must have considered the notice period, because the figure was amended in '
        'draft.'],
       'four evaluations with no duty, option or evidence named',
       'two duties, one unnecessary acceptance and one deduction from evidence'),
g_fig_cap='Ought to have names a duty; needn’t have names an option that existed; neither is a '
          'synonym for was a pity.',
g_a=[('The Ministry ____________ to have negotiated a longer notice period.', 'ought'),
     ('The contract ____________ have been read annually.', 'should'),
     ('The Ministry ____________ have accepted the jurisdiction clause.', 'needn’t'),
     ('Somebody ____________ have considered the notice period, because the figure was amended.', 'must'),
     ('The Ministry ____________ have asked for portability in 2022.', 'could'),
     ('The decision ____________ not have been taken without an exit costing.', 'should'),
     ('Nobody ____________ have known in 2022 what the volumes would be.', 'could'),
     ('The clause ____________ have been refused, on the evidence of 2 other offers.', 'might'),
     ('The section ____________ have been rebuilt around a 90-day notice period.', 'should not')],
g_b=[('Ought to have names ( a preference / a duty ).', ['a preference', 'a duty'], 1),
     ('Needn’t have states that something done was', ['forbidden', 'unnecessary', 'late', 'wrong'], 1),
     ('Could have states', ['a duty', 'an available option not taken', 'a deduction', 'a hypothesis'], 1),
     ('Must have is', ['an evaluation', 'a deduction about the past', 'a duty', 'a permission'], 1),
     ('Which names a duty not discharged?', ['could have asked', 'should have been read annually', 'must have been considered', 'might have been refused'], 1),
     ('Which is not an evaluation?', ['ought to have', 'needn’t have', 'must have', 'should not have'], 1)],

d1=dict(title='Ninety days',
        fig=(['Ninety days’ notice.', 'For four years of records.'],
             ['It has never been given.', 'That is not the point.']),
        cap='Karim Dalati and Rana Deeb, in February.',
        lines=[('Karim', 'The notice period in the hosting contract is ninety days. The provider '
                         'may vary the price annually without limit, and may hold our material '
                         'in any of four jurisdictions.'),
               ('Rana', 'None of which has happened.'),
               ('Karim', 'None of which has happened in four years, and the service has been '
                         'better than anything we could have built. I want to be exact that I am '
                         'not reporting a failure.'),
               ('Rana', 'Then what are you reporting?'),
               ('Karim', 'That if notice were given tomorrow, you would have ninety days to '
                         'replace the system your section is now built around, and there is no '
                         'plan, no costing and no identified alternative anywhere in this '
                         'building.'),
               ('Rana', 'How long would a replacement take?'),
               ('Karim', 'I do not know, which is the most serious sentence in my report. '
                         'Nobody has ever estimated it, because estimating it costs about three '
                         'weeks of work and nothing has gone wrong.'),
               ('Rana', 'And in ninety days, with no plan, my section goes back to four-day '
                         'response times and two in five enquiries unanswered.'),
               ('Karim', 'In ninety days your section goes back to 2021, and the eleven '
                         'languages go first, because they were never possible by hand.'),
               ('Rana', 'Then the three weeks are worth spending.'),
               ('Karim', 'The three weeks were worth spending in 2022, before the section was '
                         'rebuilt around something with ninety days’ notice. They are worth '
                         'spending now because the alternative is to continue not knowing.')],
        a=[('What are the three contractual terms?', 'ninety days’ notice, unlimited annual price variation, and four possible jurisdictions'),
           ('What is Karim careful to say?', 'that he is not reporting a failure'),
           ('What is the exposure?', 'ninety days to replace a system with no plan, costing or alternative'),
           ('What is the most serious sentence in his report?', 'that he does not know how long a replacement would take'),
           ('What would go first?', 'the eleven languages, which were never possible by hand')],
        b=[('Better than anything we could have ____________.', 'built'),
           ('Estimating it costs about three ____________ of work.', 'weeks'),
           ('Your section goes back to ____________.', '2021'),
           ('The alternative is to continue not ____________.', 'knowing')]),
d2=dict(title='I would take the same decision',
        fig=(['Ought to have negotiated longer.', 'And would sign it again.'],
             ['Both?', 'Both, and they are different sentences.']),
        cap='The Deputy Minister who took the 2022 decision, with Karim and Dr Hana Mourad.',
        lines=[('Deputy Minister', 'I took this decision in 2022. The Ministry ought to have '
                                   'negotiated a longer notice period, and needn’t have accepted '
                                   'the jurisdiction clause, because two of the four bidders '
                                   'offered a single jurisdiction and nobody asked them to '
                                   'compete on it.'),
               ('Hana', 'That is a criticism of the decision.'),
               ('Deputy Minister', 'It is a criticism of how the decision was negotiated. I '
                                   'would take the same decision again, because the alternative '
                                   'in 2022 was no consular system at all, and I had the choice '
                                   'between a dependence and a service that did not exist.'),
               ('Karim', 'Most of the terms were not negotiated at all.'),
               ('Deputy Minister', 'They were not, and the reason is worth saying plainly: '
                                   'nobody in the room in 2022 knew which terms would matter. We '
                                   'negotiated price and availability, which is what a ministry '
                                   'knows how to negotiate, and accepted the rest.'),
               ('Hana', 'Would an exit costing have changed the terms?'),
               ('Deputy Minister', 'An exit costing would have changed the notice period, '
                                   'because a figure for what leaving would cost is the only '
                                   'argument a negotiator has for a longer notice period. '
                                   'Without it you are asking for something that sounds like '
                                   'caution.'),
               ('Karim', 'So the rule should be that no dependence is entered into without a '
                         'costed exit.'),
               ('Karim', 'And repeated, or it is a figure from the year we signed.'),
               ('Deputy Minister', 'That is the rule, and I want the second half of it written '
                                   'too, which is that the costing is to be repeated every '
                                   'second year. The error in this case was not the signature in '
                                   '2022. It was four years in which the exposure grew and '
                                   'nobody wrote down what it had become.')],
        a=[('What does the Deputy Minister say the Ministry ought to have done?', 'negotiated a longer notice period'),
           ('What needn’t it have accepted?', 'the jurisdiction clause; two bidders offered a single jurisdiction'),
           ('Would he take the decision again?', 'yes; the alternative was no consular system at all'),
           ('Why were most terms not negotiated?', 'because nobody knew which terms would matter'),
           ('What does an exit costing give a negotiator?', 'a figure, which is the only argument for a longer notice period')],
        b=[('A criticism of how the decision was ____________.', 'negotiated'),
           ('We negotiated price and ____________.', 'availability'),
           ('Something that sounds like ____________.', 'caution'),
           ('Repeated every ____________ year.', 'second')]),

speak=[('Evaluate the past',
        ['Student A: describe a decision taken in your organisation some years ago.',
         'Student B: evaluate it with ought to have, needn’t have and could have.',
         'Say which of the three names a duty and which an option.']),
       ('Ninety days',
        ['Name something your office depends on and does not control.',
         'Say how long you would have if it stopped.',
         'Say what would go first.']),
       ('Cost the exit',
        ['Take a dependence in your work.',
         'Estimate aloud what leaving would cost and how long it would take.',
         'Your partner asks what the figure is based on.'])],

ext_title='A dependence costs nothing until it is withdrawn, and the cost cannot be argued for without a figure',
ext_fig=figs.datatable('THE 2022 ARRANGEMENT, FOUR YEARS ON',
                       ['', 'Position', 'Note'],
                       [['availability', 'better than any domestic option', 'four years'],
                        ['price', 'predictable', 'no increase imposed'],
                        ['jurisdiction in fact', 'one', 'of four permitted'],
                        ['notice period', '90 days', 'as signed'],
                        ['exit plan', 'none', '—'],
                        ['estimated replacement time', 'not known', 'never estimated']]),
ext_fig_cap='Three rows of good fortune, one row of contract, and two rows of silence.',
ext=[
 'A foreign ministry acquires a capability it could not have built, on infrastructure it does '
 'not own, in a jurisdiction it does not control, and the service is excellent. This is the '
 'ordinary case and it should be described without drama: the consular service of a small '
 'ministry answering eight thousand enquiries a month in eleven languages is a real public '
 'good that did not exist before and could not have been produced domestically on any budget '
 'the ministry was ever going to have.',
 'The exposure that accompanies it is also ordinary, and it is not a prediction of bad faith. '
 'A commercial provider may withdraw a service on notice, may raise a price, and may hold '
 'material where its own arrangements take it. None of these is a hostile act. All of them are '
 'terms, and terms are what a ministry is supposed to read.',
 'What makes the position uncomfortable is a sequence rather than a clause. The arrangement '
 'works; the section is rebuilt around it; the capability becomes the ordinary standard of '
 'service; and the notice period, which was adequate for a pilot, is now the whole of the time '
 'available to replace something an entire section depends on. Nobody decided that. It '
 'happened by the service being good for four years.',
 'The practical defect is the absence of a figure. A ministry that cannot say what leaving '
 'would cost and how long it would take cannot negotiate for a longer notice period, because '
 'the request sounds like caution and caution is the cheapest thing to concede in a '
 'negotiation. With a costing, the request becomes an argument: our replacement time is '
 'eighteen months, so a ninety-day notice period is not a term we can accept.',
 'So the rule has two halves. No dependence is entered into without a costed exit, which gives '
 'the negotiator an argument at the only moment when terms are available. And the costing is '
 'repeated at a stated interval, because the exposure grows with the dependence while the '
 'contract stays as it was signed. The error in most such cases is not the original decision, '
 'which is usually right, but the years in which nobody wrote down what it had come to cost.'],
dp1=('Dependence and continuity',
     'Foreign ministries reviewing externally hosted capability in 2025 introduced requirements '
     'for costed exit plans before procurement and at fixed intervals thereafter, citing notice '
     'periods negotiated for pilots and retained for production services.',
     'Source: reported practice in diplomatic information management, 2025–2026.'),
e_a=[('Why should the ordinary case be described without drama?', 'because the capability is a real public good that could not have been built domestically'),
     ('Why is the exposure not a prediction of bad faith?', 'because withdrawal, price rises and jurisdiction are terms, not hostile acts'),
     ('What is the uncomfortable sequence?', 'the service works, the section is rebuilt around it, and the pilot notice period becomes the whole margin'),
     ('What is the practical defect?', 'the absence of a figure for what leaving would cost and how long it would take'),
     ('What are the two halves of the rule?', 'a costed exit before entry, and the costing repeated at a stated interval')],
e_b=[('The arrangement described was a failure.', 'F'),
     ('A notice period is a hostile act.', 'F'),
     ('Somebody decided to make the notice period the whole margin.', 'F'),
     ('Caution is expensive to concede in a negotiation.', 'F'),
     ('A costing turns a request into an argument.', 'T'),
     ('The original decision is usually the error.', 'F')],

w_model=(
 'Purpose: establish what it would cost and how long it would take to replace each externally '
 'provided capability, so that notice periods can be negotiated against a figure. Scope: the 6 '
 'externally provided services on which a Ministry section depends; services used by '
 'individual officers without section dependence are out of scope. Inputs: the contracts, the '
 'section’s own description of what it uses the service for, and the market as it stands. '
 'Criteria: state for each service the notice period, the price variation terms and the '
 'permitted jurisdictions; state what the section would lose on the day of withdrawal and what '
 'it would lose after 90 days; give an estimated replacement time in months and an estimated '
 'cost, with the basis of each; identify any domestic or regional alternative, or say that '
 'none exists. Done: 1 costing per service, with a replacement time and a figure, within 6 '
 'weeks, and repeated every 2 years. Fallback: where a replacement time cannot be estimated, '
 'say so and state what work would be required to estimate it.'),
w_fig=figs.spec_card('THE TASKING FOR AN EXIT COSTING',
                     [('Purpose', 'notice periods negotiated against a figure'),
                      ('Scope', 'the 6 services sections depend on'),
                      ('Inputs', 'the contracts, the sections’ uses, the market'),
                      ('Criteria', 'terms stated; losses at day 1 and day 90; time and cost with basis'),
                      ('Done', '1 costing per service within 6 weeks, repeated every 2 years'),
                      ('Fallback', 'not estimable: say so and name the work required')]),
w_fig_cap='Repeated every two years: the exposure grows with the dependence and the contract does not.',
w_task='Write an exit-costing tasking for a dependence in your own work.',
w_steps=['Say what the costing is to make possible.',
         'Name the dependences covered and exclude the personal ones.',
         'Require the terms to be stated as they are.',
         'Require a time and a figure, each with a basis.',
         'Say what happens where no estimate can be made.'],
w_bank=['Establish … so that … can be negotiated against …',
        'Cover … ; … are out of scope.',
        'Work from … , … and …',
        'State for each … ; state what … would lose … ; give … with the basis of each; identify … or say that …',
        'Where … cannot be estimated, say so and state …'],
w_check=['Is a replacement time required, in months?',
         'Is the basis of each figure required?',
         'Is the costing repeated at a stated interval?',
         'Is "no alternative exists" an allowed answer?'],

t_title='Sovereignty and dependence',
t_fig=figs.split('AN EXTERNAL DEPENDENCE',
                 'Gives',
                 ['a capability you could not build',
                  'availability better than your own',
                  'a predictable price, mostly',
                  'a service your citizens now expect'],
                 'Takes',
                 ['the notice period as your whole margin',
                  'the jurisdiction out of your hands',
                  'the price out of your control',
                  'the option of not deciding']),
t_fig_cap='Both columns are consequences of the same signature.',
t_body=[
 'Describe the ordinary case without drama. A ministry acquires, on infrastructure it does not '
 'own, a consular capability it could never have built: eight thousand enquiries a month, '
 'eleven languages, availability better than anything domestic. That is a public good and it '
 'did not exist before.',
 'The exposure is equally ordinary and is not a prediction of bad faith. A provider may '
 'withdraw on notice, may raise a price and may hold material where its arrangements take it; '
 'these are terms, and terms are what a ministry reads. What makes the position uncomfortable '
 'is the sequence rather than any clause: the service is good, the section is rebuilt around '
 'it, the capability becomes the ordinary standard, and a notice period adequate for a pilot '
 'becomes the entire time available to replace something a section depends on. Nobody decided '
 'that; four good years did it.',
 'The defect that can be repaired is the absence of a figure. Without a costing, a request for '
 'a longer notice period sounds like caution, and caution is the cheapest concession in any '
 'negotiation; with one, it is an argument. So require a costed exit before entering a '
 'dependence, and require the costing to be repeated at a stated interval, because the '
 'exposure grows while the contract stays as signed. And evaluate the past precisely: the '
 'Ministry ought to have negotiated the notice period and needn’t have accepted the '
 'jurisdiction clause, and the decision itself was still right.'],
t_say=[('State the exposure: ', 'On 90 days’ notice the section returns to 2021.'),
       ('Give the figure: ', 'Replacement is estimated at 18 months and a stated sum.'),
       ('Evaluate precisely: ', 'We ought to have negotiated the notice period; the decision was right.')],
t_bound=('No costing prevents a withdrawal and no contract term makes a dependence into a '
         'sovereign capability. What a figure does is give a negotiator an argument at the one '
         'moment when terms are open, and what a repeated costing does is stop the exposure '
         'growing silently. Neither changes the fact that the capability is better than '
         'anything the Ministry could build.'),
t_a=[('On 90 days’ notice the section returns to ____________.', '2021'),
     ('Replacement is estimated at ____________ months.', '18'),
     ('We ____________ to have negotiated the notice period.', 'ought'),
     ('Caution is the cheapest ____________ in any negotiation.', 'concession'),
     ('The exposure grows while the contract stays as ____________.', 'signed'),
     ('A notice period adequate for a ____________.', 'pilot')],
t_b_rubric='Rewrite each as a precise evaluation of the past.',
t_b=[('The Ministry made a mistake with the contract.', 'the Ministry ought to have negotiated a notice period of twelve months'),
     ('It was bad that nobody read it.', 'the contract should have been read annually; it was read once in four years'),
     ('The jurisdiction clause was unnecessary.', 'the Ministry needn’t have accepted the jurisdiction clause: two providers offered a single jurisdiction'),
     ('Somebody probably considered the notice period.', 'somebody must have considered the notice period, because the figure was amended in draft')],

case=dict(
 title='The Decision Room · Eighteen months and ninety days',
 brief=[
  'The costing is done. Replacement would take about eighteen months and cost a stated sum. The '
  'notice period is ninety days.',
  'The provider has offered a three-year extension on existing terms, with a twelve-month notice '
  'period in exchange for a nine per cent price increase.',
  'Karim recommends accepting. Rana Deeb says nine per cent of her budget is two officers. The '
  'Deputy Minister asks what the Ministry does with the gap between twelve months and eighteen.'],
 exhibit=figs.datatable('THE OFFER',
                        ['', 'Current', 'Offered'],
                        [['notice period', '90 days', '12 months'],
                         ['price', 'as now', 'plus 9 per cent'],
                         ['jurisdictions permitted', '4', '4'],
                         ['term', 'rolling', '3 years'],
                         ['estimated replacement time', '18 months', '18 months'],
                         ['cost of 9 per cent, in officers', '—', 'about 2']]),
 exhibit_cap='Twelve months against eighteen, and the price is two officers.',
 exhibit_note='The jurisdiction clause is unchanged in the offer, and the provider has declined '
              'to vary it.',
 voices=[('Karim Dalati', 'Information Security and Records',
          'Accept. Twelve months is four times ninety days and the figure we now have is what '
          'bought it. The remaining gap is six months, which is a planning problem rather than '
          'an exposure.'),
         ('Rana Deeb', 'Consular Affairs',
          'Nine per cent of my budget is two officers, which is two officers off the welfare '
          'caseload for three years to insure against something that has not happened in four. '
          'I would rather have the officers.'),
         ('the Deputy Minister', 'who took the 2022 decision',
          'Both of you are arguing about the premium. Tell me what the Ministry does in month '
          'thirteen, because twelve months of notice and eighteen months of replacement is a '
          'six-month gap in which a consular service does not exist.')],
 steps=[('Find it', 'What is the gap between notice and replacement?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does the Deputy Minister refuse to discuss the premium?'),
        ('Weigh it', 'Two officers for three years against a six-month gap.'),
        ('Decide', 'Is the offer accepted, and what is done about the gap?')],
 analysis=[('Find it. How long is the gap?', 'six months'),
           ('Compare it. What does Rana prefer?', 'the two officers the nine per cent would cost'),
           ('Infer it. What is the Deputy Minister’s point?', 'that a six-month gap means the service does not exist for six months'),
           ('Weigh it. What has happened in four years?', 'nothing; no notice, no price rise, one jurisdiction'),
           ('Decide. What would you do?', 'answers vary; the gap has to be closed by a degraded fallback whatever is paid')],
 decision='Write what the Ministry does.',
 decision_steps=['Say whether the offer is accepted.',
                 'Say what covers the gap between notice and replacement.',
                 'Say what the Ministry would do in month thirteen.',
                 'Say when the costing is repeated.'],
 bank=['The offer is …',
       'The gap between … and … is covered by …',
       'In month 13, the Ministry …',
       'The costing is repeated …',
       'This is reviewed …'],
 outcome='The offer was accepted and the premium paid from the Ministry’s central budget rather '
         'than from Consular Affairs, which was the Deputy Minister’s decision and not a '
         'compromise anybody proposed. The six-month gap was covered by writing a degraded '
         'service specification: what the section would do in month thirteen, in writing, '
         'approved in advance, with the eleven languages reduced to three and the triage '
         'reduced to acknowledgement only. Rana says the specification was the most useful '
         'document produced that year and that she had been arguing about a premium when the '
         'answer was to write down what the Ministry would do without the service at all.',
 outcome_q=[('Where did the premium come from?', 'the Ministry’s central budget, by the Deputy Minister’s decision'),
            ('What covered the six-month gap?', 'a degraded service specification approved in advance')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Procure the hosting',
 task=['This is the procurement instruction of 2022, under which the hosting arrangement was '
       'bought.',
       'It produced a service that worked for four years and terms nobody had read since.'],
 draft=['Procure hosting for the consular systems.',
        'Obtain the best price and availability.',
        'Ensure the provider is reputable.',
        'Check the contract terms.',
        'Report the outcome to the Deputy Minister.',
        'Conclude by the end of the quarter.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the second names the two things a ministry knows how to negotiate.',
 asked=['A costed exit before signature',
        'The notice period negotiated against the replacement time',
        'A stated interval for repeating the costing'],
 back=['The best available price and availability',
       'A 90-day notice period, unnegotiated',
       'A jurisdiction clause 2 bidders would have varied'],
 gap='"Best price and availability" sets the negotiation on the two terms that are easy to '
     'compare, "reputable" is not a term of the contract, "check the terms" does not say '
     'against what, and nothing requires an exit to be costed before anything is signed.',
 back_cap='A good procurement on the two dimensions it was told to optimise.',
 back_note='Line two is the failure. A negotiation aimed at price and availability will concede '
           'everything else, because everything else has no figure attached to it.',
 diagnosis=[('[1] "procure hosting" — assumes the dependence is the thing being bought, not its exit', 'hidden assumption'),
            ('[2] "best price and availability" — and the terms with no figures?', 'hidden assumption'),
            ('[3] "ensure the provider is reputable" — reputable by what test?', 'unstated criterion'),
            ('[4] "check the contract terms" — against what standard?', 'unstated criterion'),
            ('[5] nothing on notice periods — what if the notice is shorter than replacement?', 'missing condition'),
            ('[6] "conclude by the end of the quarter" — and if the exit cannot be costed by then?', 'missing condition')],
 rewrite='Rewrite the instruction so that the exit is costed before anything is signed.',
 scaffold=['What the procurement must make possible as well as acquire',
           'The services covered and what is excluded',
           'The bids, the sections’ uses and the market',
           'Terms stated, losses at day 1 and day 90, replacement time and cost with bases, alternatives identified',
           'What is produced before signature and at what interval afterwards',
           'What to do where a replacement time cannot be estimated'],
 bank=['Establish … before … , so that …',
       'Cover … ; … are out of scope.',
       'Work from … , … and …',
       'State for each … ; state what … ; give … with the basis of each; identify … or …',
       'Return 1 … per service before … , and repeat …',
       'Where … cannot be estimated, …'],
 check=['Is an exit costing required before signature?',
        'Is the notice period compared with the replacement time?',
        'Is the costing repeated at a stated interval?',
        'Must the basis of each figure be given?'],
 model=['Establish what it would cost and how long it would take to replace each externally provided capability, so that notice periods can be negotiated against a figure',
        'The 6 externally provided services on which a Ministry section depends; services used by individual officers without section dependence are out of scope',
        'The contracts, the section’s own description of what it uses the service for, and the market as it stands',
        'State for each service the notice period, the price variation terms and the permitted jurisdictions; state what the section would lose on the day of withdrawal and what it would lose after 90 days; give an estimated replacement time in months and an estimated cost, with the basis of each; identify any domestic or regional alternative, or say that none exists',
        '1 costing per service, with a replacement time and a figure, within 6 weeks, and repeated every 2 years',
        'Where a replacement time cannot be estimated, say so and state what work would be required to estimate it'],
 cost='4 years in which a consular service for 8,000 monthly enquiries rested on a 90-day '
      'notice period negotiated for a pilot, with no exit plan, no costing and no identified '
      'alternative.'),

rev_fig=figs.split('MODAL PERFECTS',
                   'Vague',
                   ['The Ministry made a mistake.',
                    'It was bad that nobody read it.',
                    'The clause was unnecessary.',
                    'Somebody probably considered it.'],
                   'Precise',
                   ['The Ministry ought to have negotiated 12 months.',
                    'The contract should have been read annually.',
                    'The Ministry needn’t have accepted the clause.',
                    'Somebody must have considered it; the figure was amended.']),
rev_fig_cap='Ought to have, should have: duties. Needn’t have: unnecessary. Must have: a deduction.',
rev=dict(
 read=[('The arrangement of 2022 was', ['a failure', 'a capability that could not have been built', 'a breach', 'a pilot'], 1),
       ('The exposure arose from', ['bad faith', 'a sequence of good service', 'a price rise', 'a withdrawal'], 1),
       ('Without a costing, a request for longer notice sounds like', ['an argument', 'caution', 'a demand', 'a threat'], 1),
       ('In the Decision Room, what covered the six-month gap?', ['nothing', 'a degraded service specification', 'a longer notice period', 'two officers'], 1)],
 listen_text='The arrangement works; the section is rebuilt around it; the capability becomes '
             'the ordinary standard of service; and the notice period, which was adequate for '
             'a pilot, is now the whole of the time available to replace something an entire '
             'section depends on.',
 listen=[('The section is ____________ around it.', 'rebuilt'),
         ('The ordinary ____________ of service.', 'standard'),
         ('Adequate for a ____________.', 'pilot'),
         ('The whole of the ____________ available.', 'time')],
 speak=['Evaluate a past decision in your work with ought to have and needn’t have.',
        'Say how long you would have if a dependence were withdrawn.'],
 write='Write one line requiring a costed exit before a dependence is entered into.',
 vocab=[('A capability a state can operate without another’s consent is a ____________.', 'sovereign capability'),
        ('The condition of being unable to leave at reasonable cost is a ____________.', 'lock-in'),
        ('The written plan for ceasing to depend on a provider is an ____________.', 'exit plan'),
        ('A component whose loss stops everything is a ____________.', 'single point of failure'),
        ('The spreading of dependence across more than one provider is a ____________.', 'diversification')],
 gram=[('The Ministry ____________ to have negotiated a longer notice period.', 'ought'),
       ('The contract ____________ have been read annually.', 'should'),
       ('The Ministry ____________ have accepted the jurisdiction clause.', 'needn’t'),
       ('Somebody ____________ have considered the notice period.', 'must'),
       ('The Ministry ____________ have asked for portability in 2022.', 'could')]),

found=['Find the notice period in a contract your office depends on.',
       'Estimate how long a replacement would take.',
       'Ask when the exit was last costed.',
       'Evaluate one past decision with ought to have and needn’t have.'],
end_line='The error was not the signature; it was the four years of not writing down the cost.',
end_next='Next: What You Must Be Able to Show',
)
