# -*- coding: utf-8 -*-
import figs

U = dict(
num=2, title='Checking You Understood',
gram='question tags and checking',
ai='complaints as a data source',
strap='CEFR B2 · Grammar: question tags and checking · AI: complaints as a data source',
cando=['form question tags correctly and use them to check rather than to assert',
       'check my understanding of a complaint before responding to it',
       'treat complaints as evidence about a population rather than as individual events',
       'say what a complaint rate measures and what it does not',
       'find the complaint that was never made'],
hero=('FOUR COMPLAINTS IN TWO YEARS, AND WHAT THEY MEANT',
      ['Four complaints, from four different clients.',
       'And about two hundred occasions when somebody decided not to.'],
      [(880, 'purple', 'short'), (1620, 'teal', 'long'), (2360, 'grey', 'short')]),
hero_cap='The complaints you receive are a sample, and nobody drew it by a rule.',

warm=['When did you last decide not to complain about something? Why?',
      'What does "you have read it, haven’t you?" ask that "have you read it?" does not?',
      'What would your organisation know if every unhappy customer said so?'],
read=[
 'Arclight received four complaints in its first two years, and for most of that time the '
 'figure was quoted inside the company as evidence that the work was good. Victor’s first '
 'memorandum on the subject pointed out that four complaints is a measure of how many '
 'people complained, which is a different quantity from how many had cause to.',
 'The point is not a clever one and it is persistently ignored. Complaining is work. It '
 'requires the customer to decide that the problem is worth the effort, to compose something, '
 'to risk an awkward conversation with somebody they may need next month, and to accept that '
 'the likely outcome is an apology rather than a remedy.',
 'Most people, most of the time, decline to do this. They absorb the problem, adjust their '
 'own behaviour to avoid it recurring, and say nothing. Occasionally they say something to '
 'another customer, and very occasionally they leave without ever having mentioned why, '
 'which is the pattern Arclight has observed in both of the clients it has lost.',
 'What a complaint record can do, properly handled, is point at categories rather than '
 'count incidents. Four complaints in two years is not a rate. But if three of the four '
 'concern the same step in the same process, that is a finding, and it is a finding about a '
 'process rather than about four people who happened to be annoyed.',
 'The harder discipline is asking the question that invites the complaint that was never '
 'made. Victor now asks every client, once a quarter, what the last thing was that annoyed '
 'them about Arclight, phrased in a way that presupposes there was one. The question '
 'produces an answer about seventy per cent of the time, and the answers bear almost no '
 'relation to the four recorded complaints.'],
c_a=[('How many complaints did Arclight receive in two years?', 'four'),
     ('What does Victor say four complaints measures?', 'how many people complained, not how many had cause to'),
     ('Why do most people not complain?', 'because complaining is work with an awkward conversation and an uncertain remedy'),
     ('What can a complaint record do properly?', 'point at categories rather than count incidents'),
     ('What question does Victor now ask?', 'what the last thing was that annoyed them, phrased to presuppose there was one')],
c_b=[('Four complaints was quoted as evidence of good work.', 'T'),
     ('Complaining is described as easy.', 'F'),
     ('Both lost clients explained why they were leaving.', 'F'),
     ('Three complaints about one step would be a finding.', 'T'),
     ('The quarterly question produces an answer every time.', 'F'),
     ('The answers closely match the four recorded complaints.', 'F')],
c_c=[('A measure of how many people ____________.', 'complained'),
     ('To risk an awkward ____________ with somebody they may need next month.', 'conversation'),
     ('They absorb the problem and adjust their own ____________.', 'behaviour'),
     ('Point at ____________ rather than count incidents.', 'categories'),
     ('Phrased in a way that ____________ there was one.', 'presupposes'),
     ('The question produces an answer about seventy per ____________ of the time.', 'cent')],
c_d=[('A complaint count measures ( complaining / harm ).', ['complaining', 'harm'], 0),
     ('Most customers respond to a problem by', ['complaining', 'absorbing it and adjusting', 'leaving at once', 'asking for a refund'], 1),
     ('A useful finding from complaints is', ['the total number', 'three of four concerning one step', 'the names', 'the dates'], 1),
     ('Victor’s question presupposes', ['that nothing is wrong', 'that something annoyed them', 'that they will leave', 'that they are happy'], 1),
     ('Both lost clients', ['complained first', 'left without saying why', 'were asked to leave', 'returned'], 1)],
c_e=('Checking or asserting? Put each one in the right column.',
     [('You have read it, haven’t you?', 'Checking'),
      ('You have read it, I assume.', 'Asserting'),
      ('That was the March export, wasn’t it?', 'Checking'),
      ('That was obviously the March export.', 'Asserting'),
      ('You would tell us, wouldn’t you?', 'Checking'),
      ('You would certainly tell us.', 'Asserting')],
     ['Checking', 'Asserting']),

v_fig_title='WHAT A COMPLAINT IS EVIDENCE OF',
v_fig=[('doc', 'a grievance'), ('scale', 'redress'), ('bulb', 'a theme'),
       ('people', 'the silent majority'), ('chart', 'under-reporting'), ('note', 'closure')],
v_fig_cap='Six words for the difference between the complaints you get and the harm you cause.',
vocab=[
 ('complaint', 'a statement that something has fallen short, made to the provider'),
 ('grievance', 'a sense of having been treated unfairly, whether or not it is voiced'),
 ('redress', 'putting right a wrong that has been done'),
 ('remedy', 'the specific thing done to correct a particular failure'),
 ('goodwill gesture', 'something offered beyond what is owed, to preserve a relationship'),
 ('acknowledgement', 'a reply confirming that something has been received'),
 ('apology', 'an expression of regret for something your side did'),
 ('resolution', 'the point at which the underlying problem is actually fixed'),
 ('closure', 'the formal ending of a case, whether or not it is resolved'),
 ('dissatisfaction', 'a state of being unhappy with a service, often unvoiced'),
 ('categorise', 'to sort cases into groups so that patterns become visible'),
 ('theme', 'a pattern running through several separate cases'),
 ('under-reporting', 'the gap between events that occur and events that are reported'),
 ('silent majority', 'the larger group who have a view and do not express it'),
 ('vocal', 'inclined to say what you think, and therefore over-represented'),
 ('triangulate', 'to establish something by approaching it from several sources'),
 ('sample bias', 'a distortion caused by who ends up in the sample'),
 ('root complaint', 'the underlying grievance beneath the thing somebody mentioned'),
 ('repeat contact', 'a customer having to get in touch again about the same thing'),
 ('first-time fix', 'resolving a problem on the first occasion it is raised')],
v_a=[('The gap between events occurring and events reported is ____________.', 'under-reporting'),
     ('A distortion caused by who ends up in the sample is ____________.', 'sample bias'),
     ('The larger group who have a view and do not express it is the ____________.', 'silent majority'),
     ('Something offered beyond what is owed is a ____________.', 'goodwill gesture'),
     ('A customer getting in touch again about the same thing is a ____________.', 'repeat contact'),
     ('Resolving a problem the first time it is raised is a ____________.', 'first-time fix'),
     ('To establish something from several sources is to ____________.', 'triangulate'),
     ('A pattern running through several separate cases is a ____________.', 'theme')],
v_b=[('A grievance is a sense of having been treated unfairly,', 'whether or not it is voiced.'),
     ('Closure is the formal ending of a case,', 'whether or not it is resolved.'),
     ('To categorise is to sort cases into groups', 'so that patterns become visible.'),
     ('A root complaint is the underlying grievance', 'beneath the thing somebody mentioned.'),
     ('Redress is putting right', 'a wrong that has been done.')],

g_title='Grammar: question tags and checking',
g_rule=['A tag reverses the main clause: you have read it, haven’t you; it isn’t ready, is it.',
        'Falling intonation makes a tag rhetorical; rising intonation makes it a real question.',
        'Use a tag when you believe something and want it confirmed, not to soften an assertion.',
        'With I am, the negative tag is aren’t I; with let’s, the tag is shall we.'],
g_fig=('LOOSE',
       ['You got the March file, I assume.',
        'That was the one we sent, obviously.',
        'You would have told us, surely.',
        'It arrived on time, presumably.'],
       'PRECISE',
       ['You got the March file, didn’t you?',
        'That was the one we sent, wasn’t it?',
        'You would have told us, wouldn’t you?',
        'It arrived on time, didn’t it?'],
       'an assumption wearing a hedge',
       'a question that can be answered no'),
g_fig_cap='The left column cannot be contradicted without an argument. The right can be answered.',
g_a=[('You got the March file, ____________ you? (do)', 'didn’t'),
     ('That was the one we sent, ____________ it? (be)', 'wasn’t'),
     ('You would have told us, ____________ you? (will)', 'wouldn’t'),
     ('It isn’t ready yet, ____________ it? (be)', 'is'),
     ('She has signed it, ____________ she? (have)', 'hasn’t'),
     ('They never replied, ____________ they? (do)', 'did'),
     ('I am right about this, ____________ I? (be)', 'aren’t'),
     ('Let us check it again, ____________ we? (shall)', 'shall'),
     ('Nobody mentioned it, ____________ they? (do)', 'did')],
g_b=[('You got the March file, ( did / didn’t ) you?', ['did', 'didn’t'], 1),
     ('It isn’t ready yet, ____ it?', ['isn’t', 'is', 'does', 'has'], 1),
     ('They never replied, ____ they?', ['didn’t', 'did', 'do', 'have'], 1),
     ('I am right about this, ____ I?', ['amn’t', 'aren’t', 'isn’t', 'don’t'], 1),
     ('Let us check it again, ____ we?', ['will', 'shall', 'do', 'don’t'], 1),
     ('She has signed it, ____ she?', ['didn’t', 'hasn’t', 'isn’t', 'doesn’t'], 1)],

d1=dict(title='What was the last thing that annoyed you?',
        fig=(['Is everything all right?', 'Yes, fine.'],
             ['What was the last thing that annoyed you?', 'Well. Since you ask.']),
        cap='Victor and Nora Lindqvist, two versions of one call.',
        lines=[('Victor', 'When I used to ask whether everything was all right, what did you say?'),
               ('Nora', 'I said yes, fine, because that is what the question asks you to say.'),
               ('Victor', 'And when I asked what the last thing was that annoyed you about us?'),
               ('Nora', 'I told you about the credit note that arrived on a Friday afternoon in May.'),
               ('Victor', 'Which you had never mentioned, in seven months.'),
               ('Nora', 'It was not worth a phone call. It cost me about twenty minutes and a mild '
                        'irritation, and I have six people to run.'),
               ('Victor', 'If it had happened four times, would you have rung?'),
               ('Nora', 'If it had happened four times I would have started looking for somebody else, '
                        'and I am not certain I would have rung first.'),
               ('Victor', 'That is the sentence that keeps me awake.'),
               ('Nora', 'It should not. It is how everybody behaves. You are the only supplier who has '
                        'ever asked me the second question.'),
               ('Victor', 'Which means the other suppliers think their complaint rate is low.'),
               ('Nora', 'Their complaint rate is low. That is what makes it such a comfortable number.')],
        a=[('What did Nora say when asked whether everything was all right?', 'yes, fine'),
           ('What did she say when asked what had annoyed her?', 'about a credit note that arrived on a Friday afternoon in May'),
           ('Why had she not mentioned it?', 'because it cost twenty minutes and a mild irritation, and she has six people to run'),
           ('What would four occurrences have produced?', 'looking for another supplier, and possibly no call at all'),
           ('What does Nora say about low complaint rates?', 'that they are genuinely low, which is what makes them comfortable')],
        b=[('That is what the question asks you to ____________.', 'say'),
           ('It was not worth a phone ____________.', 'call'),
           ('I would have started looking for somebody ____________.', 'else'),
           ('That is what makes it such a comfortable ____________.', 'number')]),
d2=dict(title='Three of the four',
        fig=(['Four complaints is not a rate.', 'No. But look at which four.'],
             ['Three concern the same step.', 'Then that is a finding.']),
        cap='Victor and Marta, over the complaint record.',
        lines=[('Marta', 'You have told everybody that four complaints in two years means nothing.'),
               ('Victor', 'Four complaints as a count means nothing. Four complaints as a sample might mean a great deal.'),
               ('Marta', 'Go on.'),
               ('Victor', 'Three of the four concern the same step: a document arriving after the client '
                          'needed it, by a few hours.'),
               ('Marta', 'Three cases is not enough to establish anything on its own.'),
               ('Victor', 'Three cases out of four, when the four were selected by whoever found it worth '
                          'complaining about, is a different kind of evidence from three out of four hundred.'),
               ('Marta', 'Because the selection filtered for things bad enough to be worth a phone call.'),
               ('Victor', 'Exactly. The complaint record is a sample biased towards severity, which makes '
                          'it useless for counting and quite good for finding categories.'),
               ('Marta', 'So the number is worthless and the pattern is not.'),
               ('Victor', 'The number is worse than worthless, because people quote it as reassurance.'),
               ('Marta', 'Then stop reporting the number and report the categories.'),
               ('Victor', 'I would like to, and somebody will ask for the number within a month, and they '
                          'will be right to, which is the part I have not solved.')],
        a=[('What does Victor say four complaints as a count means?', 'nothing'),
           ('What do three of the four concern?', 'a document arriving a few hours after the client needed it'),
           ('Why is three out of four different from three out of four hundred?', 'because the four were selected by being worth complaining about'),
           ('What is the complaint record biased towards?', 'severity'),
           ('Why is the number worse than worthless?', 'because people quote it as reassurance')],
        b=[('Four complaints as a ____________ might mean a great deal.', 'sample'),
           ('A document arriving after the client ____________ it.', 'needed'),
           ('A sample biased towards ____________.', 'severity'),
           ('People quote it as ____________.', 'reassurance')]),

speak=[('Tag it',
        ['Student A: make four assertions about your partner’s work.',
         'Student B: notice which ones you could disagree with comfortably.',
         'Rewrite each as a question tag and compare how easy disagreement becomes.']),
       ('Spoken specification: ask the second question',
        ['Choose a customer or a colleague whose view you need.',
         'Brief aloud the two questions: the comfortable one and the one that presupposes a problem.',
         'Your partner answers both. Compare what you learn.']),
       ('The complaint nobody made',
        ['In pairs, think of something at work you have been annoyed by and not reported.',
         'Say why you did not report it, and what would have made you.',
         'Decide what your organisation would have to do to hear about it.'])],

ext_title='The complaints you receive are a sample nobody drew',
ext_fig=figs.datatable('FOUR COMPLAINTS, AND WHAT THEY POINT AT',
                       ['Complaint', 'Client', 'Step involved', 'Severity'],
                       [['page arrived after payment run', 'Boateng', 'delivery timing', 'high'],
                        ['reminder to a settled account', 'Lindqvist', 'export age', 'high'],
                        ['credit note arrived Friday 4pm', 'Menon', 'delivery timing', 'low'],
                        ['summary asserted an agreement', 'a 4th client', 'delivery timing', 'high'],
                        ['3 of 4 concern', '—', 'delivery timing', '—']]),
ext_fig_cap='As a count, four means nothing. As a pattern, the fourth column is the finding.',
ext=[
 'Complaint counts are among the most reassuring numbers in business and among the least '
 'informative. A low complaint rate is consistent with excellent service and it is equally '
 'consistent with customers who have decided that complaining is not worth the effort, and '
 'nothing about the number itself distinguishes the two.',
 'The reason is that complaining is costly for the person doing it. It takes time, it '
 'requires composing something, it risks an awkward relationship with a supplier you may '
 'need next month, and the usual outcome is an apology rather than a remedy. A rational '
 'customer with a mild problem and a busy week does not complain, and most problems are '
 'mild and most weeks are busy.',
 'What happens instead is quieter and more expensive. The customer absorbs the problem, '
 'adjusts their own behaviour to avoid it recurring, mentions it to a peer rather than to '
 'you, and in a small number of cases eventually leaves without ever having told you why. '
 'Companies that lose customers this way usually describe it as unexpected, and from inside '
 'it genuinely is.',
 'The complaint record remains useful if it is read as what it is: a sample selected by '
 'severity rather than drawn by a rule. It will not tell you how often something goes wrong. '
 'It will tell you which categories of failure were bad enough to overcome the cost of '
 'complaining, and that is a genuinely informative list.',
 'The other half of the discipline is asking in a way that makes the answer easy. A question '
 'that presupposes a problem, such as what was the last thing that annoyed you, costs the '
 'customer nothing to answer and removes the implication that they are making a fuss. It '
 'produces answers that bear little relation to the formal complaint record, which is '
 'precisely why it is worth asking.'],
dp1=('Unvoiced dissatisfaction',
     'Customer-service research consistently reports that only a minority of dissatisfied '
     'customers complain to the provider, with the remainder taking no action or switching '
     'without explanation.',
     'Source: general customer-service research, 2026. Proportions vary widely by sector and value.'),
e_a=[('What is a low complaint rate consistent with?', 'excellent service, and with customers deciding complaining is not worth it'),
     ('Why does a rational customer with a mild problem not complain?', 'because it costs time, risks the relationship and usually produces only an apology'),
     ('What do customers do instead?', 'absorb the problem, adjust their behaviour, tell a peer, and occasionally leave without saying why'),
     ('How should a complaint record be read?', 'as a sample selected by severity rather than drawn by a rule'),
     ('Why does a presupposing question work?', 'because it costs nothing to answer and removes the implication of making a fuss')],
e_b=[('A low complaint rate proves good service.', 'F'),
     ('Most problems are severe and most weeks are quiet.', 'F'),
     ('Customers who leave quietly are usually a surprise from inside.', 'T'),
     ('A complaint record can tell you how often something goes wrong.', 'F'),
     ('It can tell you which failures were severe enough to be reported.', 'T'),
     ('Presupposing questions produce answers similar to the formal record.', 'F')],

w_model=(
 'Purpose: find the dissatisfaction that is not reaching us as complaints. Scope: all 11 '
 'active clients, once a quarter; prospective clients are excluded. Inputs: 1 question '
 'asked by the account manager during an existing call. Criteria: ask what the last thing '
 'was that annoyed them about Arclight, in words that presuppose there was one; do not ask '
 'whether they are satisfied; record the answer in their words and categorise it by the '
 'step involved. Done: 11 answers a quarter and 1 list of categories with counts. Fallback: '
 'if a client says nothing annoyed them, ask what the last thing was that took them longer '
 'than it should have.'),
w_fig=figs.split('TWO QUESTIONS',
                 'Invites reassurance',
                 ['Is everything all right?',
                  'Are you happy with the service?',
                  'Any problems at all?',
                  'Is there anything we can do?'],
                 'Invites the answer',
                 ['What was the last thing that annoyed you?',
                  'What took longer than it should have?',
                  'When did you last have to ring us?',
                  'What do you work around?']),
w_fig_cap='The right-hand column presupposes a problem, which is what makes it cheap to answer.',
w_task='Write a brief for collecting the complaints nobody makes.',
w_steps=['Say who is asked, how often, and by whom.',
         'Write the question so that it presupposes a problem exists.',
         'Say explicitly which questions must not be asked.',
         'Require the answer in the customer’s words, and a category.',
         'Write a second question for the client who says nothing is wrong.'],
w_bank=['Ask each … once a … , during …',
        'Ask what … , in words that presuppose …',
        'Do not ask … , because it invites …',
        'Record … and categorise by …',
        'If a client says nothing … , ask …'],
w_check=['Does your question presuppose a problem rather than ask whether there is one?',
         'Have you forbidden the reassurance questions?',
         'Is the answer recorded in the customer’s own words?',
         'Is there a follow-up for the client who says nothing is wrong?'],

t_title='Complaints as a data source',
t_fig=figs.capacity('WHAT REACHES YOU',
                    ('Occasions a client was annoyed, estimated', 200),
                    ('Complaints actually received', 4),
                    'The gap is not a measurement. It is the reason the number is comfortable.'),
t_fig_cap='The estimate is rough and the shape of it is not in doubt.',
t_body=[
 'Stop quoting the complaint count as a quality figure, because it measures the willingness '
 'of your customers to spend effort on you rather than the quality of what you send them. A '
 'falling complaint rate is consistent with improvement and with customers giving up, and '
 'the second is more common at the point where a relationship is about to end.',
 'Read the record for categories instead. Four complaints that all concern the same step is '
 'a strong finding, because the selection that produced those four filtered for severity, '
 'not for category, so a category appearing three times out of four appeared despite the '
 'selection rather than because of it.',
 'And ask the question that presupposes a problem. What was the last thing that annoyed you '
 'is answerable in ten seconds and costs the customer nothing socially, because it does not '
 'ask them to decide whether something is worth raising. The answers will not match your '
 'complaint record, and the difference between the two is the thing you were missing.'],
t_say=[('Refuse the comfort: ', 'Four complaints measures complaining, not quality.'),
       ('Read the pattern: ', 'Three of the four concern delivery timing, which is a finding.'),
       ('Presuppose a problem: ', 'What was the last thing that annoyed you about us?')],
t_bound=('Asking the question reaches the dissatisfaction a client is willing to describe to '
         'you, which is a larger set than complaints and still not all of it. The grievance '
         'somebody considers too trivial to mention, or too awkward because it concerns a '
         'person, will not surface in either channel.'),
t_a=[('Four complaints measures complaining, not ____________.', 'quality'),
     ('Three of the four concern delivery ____________.', 'timing'),
     ('What was the last thing that ____________ you about us?', 'annoyed'),
     ('A falling complaint rate is consistent with customers giving ____________.', 'up'),
     ('The selection filtered for ____________, not for category.', 'severity'),
     ('The answers will not match your complaint ____________.', 'record')],
t_b_rubric='Rewrite each question so that it presupposes a problem.',
t_b=[('Is everything all right?', 'what was the last thing that annoyed you about us?'),
     ('Are you happy with the reporting?', 'what in the report takes you longer than it should?'),
     ('Any problems?', 'when did you last have to ring us about something?'),
     ('How is the service?', 'what do you work around rather than tell us about?')],

case=dict(
 title='Decision Clinic · Stop reporting the number?',
 brief=[
  'The complaint count appears on an internal page and has been quoted in two client '
  'proposals as evidence of service quality. Victor wants it removed on the grounds that it '
  'is actively misleading.',
  'Ines points out that clients ask for it, competitors publish theirs, and that removing it '
  'from a proposal will read as concealment rather than as rigour.',
  'The quarterly question has now run for two quarters and produced thirty-one items of '
  'dissatisfaction from eleven clients, against one formal complaint in the same period.'],
 exhibit=figs.datatable('TWO QUARTERS, TWO CHANNELS',
                        ['', 'Formal complaints', 'Quarterly question', 'Overlap'],
                        [['delivery timing', '1', '12', '1'],
                         ['wording or tone', '0', '7', '0'],
                         ['having to ask twice', '0', '9', '0'],
                         ['errors in figures', '0', '3', '0'],
                         ['total', '1', '31', '1']]),
 exhibit_cap='Thirty-one items, one of which also arrived as a complaint.',
 exhibit_note='"Having to ask twice" did not exist as a category before the question was '
              'introduced. Nobody had ever complained about it.',
 voices=[('Victor Sandoval', 'operations and quality',
          'One complaint and thirty-one items. If we publish the one and not the thirty-one, '
          'we are publishing the number that flatters us and suppressing the one that is '
          'informative.'),
         ('Ines Carvalho', 'managing director',
          'Clients ask for a complaint figure because every supplier gives one. Refusing to '
          'provide it reads as having something to hide, whatever we say about methodology.'),
         ('Fatima Zahra', 'client manager',
          'Publish both. One formal complaint and thirty-one items we found by asking. A '
          'client who hears that will understand immediately, because they do exactly the '
          'same thing to their own suppliers.')],
 steps=[('Find it', 'How many items did each channel produce?'),
        ('Compare it', 'What does publishing the complaint figure alone imply?'),
        ('Infer it', 'Why does "having to ask twice" appear in one channel and not the other?'),
        ('Weigh it', 'The appearance of concealment against the publication of a misleading figure.'),
        ('Decide', 'What goes in the next proposal?')],
 analysis=[('Find it. How many items came from each channel?', 'one complaint and thirty-one from the quarterly question'),
           ('Compare it. What does the complaint figure alone imply?', 'that there was almost nothing wrong, which the second channel contradicts'),
           ('Infer it. Why is "having to ask twice" absent from complaints?', 'because it is irritating rather than severe, so it never justifies a phone call'),
           ('Weigh it. What is Ines protecting against?', 'a client reading the absence of a figure as concealment'),
           ('Decide. What does publishing both achieve?', 'it gives the expected figure and the context that makes it honest')],
 decision='Write the paragraph that goes into the next client proposal.',
 decision_steps=['Give the complaint figure, because they asked for it.',
                 'Give the second figure immediately, and say how it was collected.',
                 'Say in one sentence why the first figure alone would mislead.',
                 'Say what you do with the second set of items.'],
 bank=['In the last … we received … formal complaints.',
       'In the same period we asked … and recorded …',
       'We report both because …', 'The … items are categorised and …',
       'The commonest category was …'],
 outcome='Both figures went into the next three proposals. Two prospective clients mentioned '
         'it unprompted, one of them saying that it was the first supplier document they had '
         'read that contained a number which did not flatter the supplier. Arclight won both. '
         'Victor notes that this proves nothing about the practice and that he would have '
         'argued for it regardless, which he says is the correct relationship between a '
         'principle and its outcome.',
 outcome_q=[('Why did publishing both work commercially?', 'because a number that does not flatter the supplier is read as evidence of candour'),
            ('Why does Victor refuse to treat the result as proof?', 'because two cases establish nothing, and he would have argued for the practice either way')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Review the complaints',
 task=['This is the brief for the first complaint review, written when the record contained '
       'four items and everybody regarded that as a good sign.',
       'It asks for the complaints to be analysed, which is reasonable, and it assumes that '
       'the four complaints are the data rather than a sample of something larger.'],
 draft=['Have a look at the complaints we have received.',
        'See whether there is anything we should learn from them.',
        'Check that each one was dealt with properly.',
        'Tell me whether the number is going up or down.',
        'Let me know if any of them is still open.',
        'Come back with anything significant.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief that treats four complaints as a population and a trend.',
 asked=['Complaints read as a severity-biased sample',
        'Categorisation by the step involved',
        'A channel for the dissatisfaction nobody reports'],
 back=['Four cases, each reviewed individually',
       'A statement that the number is low',
       'No pattern identified across them'],
 gap='"Whether the number is going up or down" treats four cases over two years as a trend, '
     'and nothing in the brief asks what the four have in common or what did not reach the '
     'record at all.',
 back_cap='Four well-handled cases, a reassuring number and no finding.',
 back_note='Three of the four concerned the same step. The review examined each case on its '
           'own merits and nobody put the four side by side.',
 diagnosis=[('[1] "the complaints we have received" — and the ones we did not?', 'unstated exception'),
            ('[2] "anything we should learn" — learned by what method?', 'ambiguous referent'),
            ('[3] "dealt with properly" — properly against what standard?', 'undefined done'),
            ('[4] "whether the number is going up or down" — with four cases in two years?', 'unstated exception'),
            ('[5] "if any of them is still open" — open meaning unresolved or unclosed?', 'ambiguous referent'),
            ('[6] "anything significant" — significant enough to do what?', 'undefined done')],
 rewrite='Rewrite the brief so that the complaints are read as a sample, categorised by the '
         'step involved, and supplemented by a channel for what never arrives.',
 scaffold=['Why four complaints is a sample and not a count',
           'Which cases are covered, and what is deliberately sought beyond them',
           'The complaint record and the quarterly question responses',
           'How cases are categorised, and what must not be inferred from the total',
           'The categories with counts, and what is asked of clients alongside',
           'What to record for a client who reports nothing at all'],
 bank=['Read the … as a sample of … rather than as …',
       'Cover … ; in addition, ask …', 'Work from … and …',
       'Categorise each case by … ; do not infer … from the total.',
       'Return … categories with counts, and …',
       'Where a client reports nothing, …'],
 check=['Does the brief forbid treating the count as a rate?',
        'Are cases categorised so that a pattern across them is visible?',
        'Is there a channel for dissatisfaction that never becomes a complaint?',
        'Is there an instruction for a client who reports nothing?'],
 model=['Find what the complaint record points at, and find the dissatisfaction that never reaches it',
        'All formal complaints received since the company started, plus a quarterly question put to all 11 active clients',
        'The complaint record and the quarterly question responses, both to 30 June',
        'Categorise every case by the process step involved; do not infer a rate or a trend from the total, because the record is a sample selected by severity; ask each client what the last thing was that annoyed them, in words that presuppose there was one',
        '1 list of categories with counts from both channels, and 11 quarterly answers in the clients’ own words, by 15 July',
        'If a client reports nothing, ask what the last thing was that took them longer than it should have, and record that instead'],
 cost='4 cases reviewed individually with no pattern found, 3 of which concerned one step, '
      'and 2 further years during which a comfortable number was quoted in 2 client '
      'proposals as evidence of quality.'),

rev_fig=figs.split('ASSERTING AND CHECKING',
                   'Assertion with a hedge',
                   ['You got the March file, I assume.',
                    'That was the one we sent, obviously.',
                    'You would have told us, surely.',
                    'Everything is fine, presumably.'],
                   'Tag — answerable with no',
                   ['You got the March file, didn’t you?',
                    'That was the one we sent, wasn’t it?',
                    'You would have told us, wouldn’t you?',
                    'Everything is fine, isn’t it?']),
rev_fig_cap='A tag invites disagreement. A hedge makes disagreement a correction.',
rev=dict(
 read=[('A complaint count measures', ['harm caused', 'willingness to complain', 'client numbers', 'severity'], 1),
       ('The tag for "I am right" is', ['amn’t I', 'aren’t I', 'isn’t I', 'don’t I'], 1),
       ('A complaint record is useful for', ['counting incidents', 'identifying categories', 'measuring trends', 'pricing'], 1),
       ('In the Clinic, what went into the proposal?', ['the complaint figure only', 'both figures', 'neither', 'a verbal account'], 1)],
 listen_text='Stop quoting the complaint count, because it measures how willing your '
             'customers are to spend effort on you. Read the record for categories instead: '
             'three of four concerning one step is a finding, because the selection filtered '
             'for severity and not for category. And ask the question that presupposes a '
             'problem, because it costs the customer nothing to answer.',
 listen=[('It measures how willing your customers are to spend ____________ on you.', 'effort'),
         ('Read the record for ____________ instead.', 'categories'),
         ('The selection filtered for ____________ and not for category.', 'severity'),
         ('Ask the question that ____________ a problem.', 'presupposes')],
 speak=['Ask your partner what the last thing was that annoyed them at work.',
        'Then ask whether they reported it, and why or why not.'],
 write='Write the quarterly question and the follow-up for a client who says nothing is wrong.',
 vocab=[('The gap between events occurring and events reported is ____________.', 'under-reporting'),
        ('A distortion caused by who ends up in the sample is ____________.', 'sample bias'),
        ('The larger group who have a view and do not express it is the ____________.', 'silent majority'),
        ('A customer getting in touch again about the same thing is a ____________.', 'repeat contact'),
        ('A pattern running through several separate cases is a ____________.', 'theme')],
 gram=[('You got the March file, ____________ you?', 'didn’t'),
       ('It isn’t ready yet, ____________ it?', 'is'),
       ('They never replied, ____________ they?', 'did'),
       ('I am right about this, ____________ I?', 'aren’t'),
       ('Let us check it again, ____________ we?', 'shall')]),

found=['Ask one customer what the last thing was that annoyed them about you.',
       'Put your complaints side by side and look for a common step.',
       'Think of something you have not complained about, and say why.',
       'Find a place where your organisation quotes a complaint figure as quality.'],
end_line='Their complaint rate is low. That is what makes it such a comfortable number.',
end_next='Next: Would You Mind',
)
