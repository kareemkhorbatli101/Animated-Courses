# -*- coding: utf-8 -*-
import figs

U = dict(
num=7, title='Stop Doing, Remember To Do',
gram='gerunds and infinitives that change meaning',
ai='what must never be automated in a customer relationship',
strap='CEFR B2 · Grammar: gerunds and infinitives that change meaning · AI: what must never be automated',
cando=['use stop, remember, try and go on with the right form and the right meaning',
       'notice when a gerund and an infinitive produce two different sentences',
       'name the exchanges in a relationship that must involve a person',
       'say what is actually being bought when a person makes a call',
       'write a rule that survives a busy week'],
hero=('THE CALL NOBODY WANTED TO MAKE',
      ['It takes eleven minutes and it cannot be delegated.',
       'Everything else about the failure was handled in forty.'],
      [(880, 'grey', 'long'), (1620, 'purple', 'short'), (2360, 'teal', 'long')]),
hero_cap='The short list of things that stay with a person, and why they stay.',

warm=['What at your work would you never want handled by anybody but a person?',
      'What is the difference between "stop checking" and "stop to check"?',
      'When somebody apologises to you, what are you actually receiving?'],
read=[
 'The Not Yet list from Book 1 had three items on it and has had four since the second '
 'year. Three of the four are about irreversibility. The fourth is different in kind and '
 'Marta added it: the first call after a failure.',
 'There is no technical reason for it. A failure notification could be produced faster, '
 'more consistently and with better information than Fatima manages at eleven minutes a '
 'call, and in the one case where Arclight tested a written notification the client said '
 'afterwards that it had been clear and prompt and that she had found it cold.',
 'What a person provides in that exchange is not information. It is the demonstration that '
 'somebody has spent something. Eleven minutes of a named person’s attention, offered when '
 'the company is embarrassed and would rather not, is a cost, and the fact that it is a cost '
 'is the whole of what it communicates.',
 'This is why the item resists the usual arguments. A faster notification is better '
 'information and worse communication; a more detailed one is the same. Improving it in any '
 'of the directions the company would naturally improve things makes it worse at the thing '
 'it is for, which is a pattern that recurs wherever the signal is the expenditure rather '
 'than the content.',
 'The rule is therefore written in terms of occasions rather than quality. After any failure '
 'that reached a client, a named person telephones within four working hours. Not writes, '
 'not arranges for somebody to write, and not after the investigation is complete. Ines '
 'added the last clause after a month in which two calls were delayed while the facts were '
 'established, which is a reasonable thing to do and the wrong thing to do.'],
c_a=[('How many items are on the Not Yet list now?', 'four'),
     ('How is the fourth different from the other three?', 'the other three are about irreversibility; this one is not'),
     ('What did the client say about the written notification?', 'that it was clear and prompt and that she found it cold'),
     ('What does a person provide in that exchange?', 'the demonstration that somebody has spent something'),
     ('What clause did Ines add, and why?', 'that the call is not delayed until the investigation is complete, after two calls were delayed for that reason')],
c_b=[('There is a technical reason for keeping the call with a person.', 'F'),
     ('The written notification was less clear than a call.', 'F'),
     ('The signal is the content rather than the expenditure.', 'F'),
     ('A more detailed notification would be better at the thing it is for.', 'F'),
     ('The call must happen within four working hours.', 'T'),
     ('Marta added the fourth item.', 'T')],
c_c=[('Three of the four are about ____________.', 'irreversibility'),
     ('She had found it ____________.', 'cold'),
     ('Eleven minutes of a named person’s ____________.', 'attention'),
     ('Offered when the company is ____________ and would rather not.', 'embarrassed'),
     ('A faster notification is better information and worse ____________.', 'communication'),
     ('Two calls were delayed while the facts were ____________.', 'established')],
c_d=[('The call communicates through its ( content / cost ).', ['content', 'cost'], 1),
     ('Improving the notification in the usual directions makes it', ['better', 'worse at what it is for', 'faster only', 'unchanged'], 1),
     ('The rule is written in terms of', ['quality', 'occasions', 'length', 'tone'], 1),
     ('Delaying the call until the investigation is complete is', ['required', 'reasonable and wrong', 'forbidden by law', 'preferred'], 1),
     ('The call must be made by', ['anybody available', 'a named person', 'the client', 'a system'], 1)],
c_e=('Gerund or infinitive? Put each sentence in the right column.',
     [('She stopped checking the queue.', 'Gerund — she no longer checks'),
      ('She stopped to check the queue.', 'Infinitive — she paused in order to'),
      ('He remembered sending it.', 'Gerund — he recalls the act'),
      ('He remembered to send it.', 'Infinitive — he did not forget'),
      ('They tried writing instead.', 'Gerund — an experiment'),
      ('They tried to write it.', 'Infinitive — an attempt')],
     ['Gerund — she no longer checks', 'Infinitive — she paused in order to',
      'Gerund — he recalls the act', 'Infinitive — he did not forget',
      'Gerund — an experiment', 'Infinitive — an attempt']),

v_fig_title='WHAT A PERSON IS FOR',
v_fig=[('people', 'goodwill'), ('scale', 'reciprocity'), ('bank', 'a bond'),
       ('doc', 'amends'), ('bulb', 'forbearance'), ('note', 'continuity')],
v_fig_cap='Six words for the thing that is being exchanged when nothing is being transmitted.',
vocab=[
 ('goodwill', 'the accumulated willingness of others to give you the benefit of the doubt'),
 ('reciprocity', 'the expectation that an effort made will be returned in some form'),
 ('bond', 'a connection strong enough to survive a disagreement'),
 ('allegiance', 'a loyalty that holds when a better offer appears'),
 ('estrangement', 'a gradual loss of closeness, usually unannounced'),
 ('repair', 'the work of restoring a relationship after damage'),
 ('amends', 'something done to make up for harm already caused'),
 ('grace', 'allowance given to somebody who has fallen short'),
 ('forbearance', 'the choice not to insist on something you are entitled to'),
 ('courtesy call', 'a call made because it is owed rather than because it is needed'),
 ('personal touch', 'a sign that a particular person was involved'),
 ('human contact', 'an exchange in which another person is present to you'),
 ('irreplaceable', 'such that no substitute performs the same function'),
 ('stand-in', 'somebody acting temporarily in another’s place'),
 ('continuity', 'the same person remaining across a sequence of dealings'),
 ('hand-written', 'written by hand, and therefore evidently costly to produce'),
 ('face to face', 'in each other’s physical presence'),
 ('in person', 'by the individual concerned rather than through anybody else'),
 ('severance', 'the formal ending of a relationship'),
 ('long-standing', 'having continued for a considerable time')],
v_a=[('The choice not to insist on something you are entitled to is ____________.', 'forbearance'),
     ('A call made because it is owed rather than needed is a ____________.', 'courtesy call'),
     ('A gradual loss of closeness, usually unannounced, is ____________.', 'estrangement'),
     ('The same person remaining across a sequence of dealings is ____________.', 'continuity'),
     ('Something done to make up for harm already caused is ____________.', 'amends'),
     ('A loyalty that holds when a better offer appears is ____________.', 'allegiance'),
     ('Somebody acting temporarily in another’s place is a ____________.', 'stand-in'),
     ('The formal ending of a relationship is ____________.', 'severance')],
v_b=[('Goodwill is the accumulated willingness of others', 'to give you the benefit of the doubt.'),
     ('Reciprocity is the expectation that an effort made', 'will be returned in some form.'),
     ('Repair is the work of restoring a relationship', 'after damage.'),
     ('Irreplaceable means such that no substitute', 'performs the same function.'),
     ('In person means by the individual concerned', 'rather than through anybody else.')],

g_title='Grammar: gerunds and infinitives that change meaning',
g_rule=['Stop + -ing means cease; stop + to do means pause in order to do something else.',
        'Remember + -ing recalls a past act; remember + to do is not forgetting a duty.',
        'Try + -ing is an experiment; try + to do is an attempt that may fail.',
        'Go on + -ing is continuing; go on + to do is moving to the next thing.'],
g_fig=('LOOSE',
       ['She stopped checking the queue.',
        'He remembered sending it.',
        'They tried writing instead.',
        'He went on explaining.'],
       'PRECISE',
       ['She stopped to check the queue.',
        'He remembered to send it.',
        'They tried to write it.',
        'He went on to explain.'],
       'four sentences about what happened',
       'four different sentences, same verbs'),
g_fig_cap='Eight sentences, four verbs, and no overlap of meaning anywhere.',
g_a=[('She stopped ____________ the queue and went home. (check)', 'checking'),
     ('She stopped ____________ the queue before she left. (check)', 'to check'),
     ('He remembered ____________ it on Tuesday, and it went. (send)', 'to send'),
     ('He remembered ____________ it, though he could not find it. (send)', 'sending'),
     ('They tried ____________ instead, as an experiment. (write)', 'writing'),
     ('They tried ____________ it and could not. (write)', 'to write'),
     ('He went on ____________ for another ten minutes. (explain)', 'explaining'),
     ('He went on ____________ what would happen next. (explain)', 'to explain'),
     ('I regret ____________ you that the run failed. (tell)', 'to tell')],
g_b=[('She stopped ( to check / checking ) the queue before she left.', ['to check', 'checking'], 0),
     ('He remembered ____ it on Tuesday, and it went out.', ['sending', 'to send', 'send', 'to sending'], 1),
     ('They tried ____ instead, as an experiment.', ['to write', 'writing', 'write', 'written'], 1),
     ('He went on ____ what would happen next.', ['explaining', 'to explain', 'explain', 'explained'], 1),
     ('I regret ____ you that the run failed.', ['telling', 'to tell', 'tell', 'to telling'], 1),
     ('She stopped ____ the queue and went home.', ['to check', 'checking', 'check', 'checked'], 1)],

d1=dict(title='Clear, prompt and cold',
        fig=(['The notification was clear.', 'She said it was cold.'],
             ['Then make it warmer.', 'That is not what cold meant.']),
        cap='Jonas and Fatima, after the written notification test.',
        lines=[('Jonas', 'The written notification went out in six minutes with more detail than you '
                         'could give on a call, and the client said it was clear and prompt.'),
               ('Fatima', 'She said it was clear and prompt and that she found it cold, and you keep '
                          'quoting the first half.'),
               ('Jonas', 'Then we make it warmer. That is a wording problem.'),
               ('Fatima', 'It is not a wording problem. A warmer notification produced in six minutes '
                          'is a warmer notification produced in six minutes.'),
               ('Jonas', 'You are saying the content is irrelevant.'),
               ('Fatima', 'I am saying the content is doing a different job from the one she needed. '
                          'She knew what had happened before we wrote; her own customer told her.'),
               ('Jonas', 'So what was she missing?'),
               ('Fatima', 'Somebody minding. Eleven minutes of a person who would rather be doing '
                          'anything else, spent on her.'),
               ('Jonas', 'That is not a thing I can build.'),
               ('Fatima', 'No, and it is not a thing I can describe in a way you would accept either, '
                          'which is why it keeps coming back.'),
               ('Jonas', 'I accept the rule. I do not accept the explanation and I notice that the rule '
                          'works anyway.'),
               ('Fatima', 'Then let us keep the rule and go on arguing about the explanation.')],
        a=[('How long did the written notification take?', 'six minutes'),
           ('What did the client say about it?', 'that it was clear and prompt, and that she found it cold'),
           ('Why does Fatima say it is not a wording problem?', 'because a warmer notification produced in six minutes is still produced in six minutes'),
           ('What does Fatima say the client was missing?', 'somebody minding, in the form of time spent'),
           ('What do they agree at the end?', 'to keep the rule and continue disagreeing about why it works')],
        b=[('You keep quoting the first ____________.', 'half'),
           ('Her own ____________ told her.', 'customer'),
           ('Somebody ____________.', 'minding'),
           ('I notice that the rule ____________ anyway.', 'works')]),
d2=dict(title='Before the facts are in',
        fig=(['We do not know what happened yet.', 'Call anyway.'],
             ['And say what?', 'That we do not know yet.']),
        cap='Victor and Ines, on the four-hour rule.',
        lines=[('Victor', 'Two of the calls last month were made at the end of day two, because we were '
                          'still establishing what had gone wrong.'),
               ('Ines', 'Which is reasonable and is exactly what the clause now forbids.'),
               ('Victor', 'Forbidding it means calling somebody to tell them we do not yet know what '
                          'happened, which feels worse than waiting.'),
               ('Ines', 'It feels worse to the person making the call. Ask the client which they prefer.'),
               ('Victor', 'I did, after the fact, with both of them.'),
               ('Ines', 'And?'),
               ('Victor', 'Both said they would rather have heard on day one with nothing. One said she '
                          'had spent two days assuming we had not noticed.'),
               ('Ines', 'Which is the cost nobody counts, because it happens inside somebody else.'),
               ('Victor', 'So the call is not conveying findings at all. It is conveying that we know '
                          'and are working on it.'),
               ('Ines', 'Which takes about ninety seconds and we were taking two days to do it properly.'),
               ('Victor', 'Doing it properly is the phrase I would like removed from this conversation.'),
               ('Ines', 'From this one and about four others.')],
        a=[('Why were two calls made at the end of day two?', 'because the facts were still being established'),
           ('What does Victor find difficult about calling earlier?', 'telling somebody you do not yet know what happened'),
           ('What did both clients say afterwards?', 'that they would rather have heard on day one with nothing'),
           ('What had one client assumed during the two days?', 'that Arclight had not noticed'),
           ('What is the call actually conveying?', 'that the company knows and is working on it')],
        b=[('Still ____________ what had gone wrong.', 'establishing'),
           ('It feels worse to the person making the ____________.', 'call'),
           ('She had spent two days assuming we had not ____________.', 'noticed'),
           ('It takes about ninety ____________.', 'seconds')]),

speak=[('Two meanings, same verb',
        ['Student A: say four sentences using stop, remember, try or go on.',
         'Student B: say which meaning each carries, and then say the other version.',
         'Find the pair where the two meanings are furthest apart.']),
       ('Spoken specification: write the exception',
        ['Choose an exchange at your work that should stay with a person.',
         'Brief aloud the rule: which occasions, who, within what time.',
         'Your partner proposes a reasonable exception. Decide whether to allow it.']),
       ('What is being bought?',
        ['In pairs, think of a time somebody apologised to you properly.',
         'Say what you actually received, apart from information.',
         'Decide whether anything could have substituted for it.'])],

ext_title='Where the signal is the expenditure, improvement makes it worse',
ext_fig=figs.datatable('THE SAME FAILURE, TWO RESPONSES',
                       ['', 'Written notification', 'Telephone call'],
                       [['time to produce', '6 minutes', '11 minutes'],
                        ['information conveyed', 'more', 'less'],
                        ['consistency', 'high', 'varies'],
                        ['client description', 'clear, prompt, cold', 'uncomfortable, fine'],
                        ['relationship afterwards', 'unchanged or worse', 'repaired']]),
ext_fig_cap='The written version wins four of the five rows and loses the one that was the point.',
ext=[
 'Nearly everything in this book improves when it is made faster, more consistent and more '
 'detailed. There is a small class of exchanges in a customer relationship where those three improvements make the '
 'thing worse, and recognising the class is more useful than arguing about any individual '
 'case, because the arguments are always the same.',
 'The class is the one where the signal being sent is the cost of sending it. An apology '
 'delivered by a named person, in real time, when the company would rather not, communicates '
 'that somebody has spent something uncomfortable. The information content is low and it is '
 'not the point. The expenditure is the message, which is why a cheaper version of the same '
 'message conveys less.',
 'This runs against every instinct a well-run company has, and it should be stated plainly '
 'because otherwise it will be improved away. Somebody will observe, correctly, that a '
 'written notification is faster, contains more detail and can be produced consistently by '
 'anybody. All three observations are true and all three are reasons the written version '
 'does not work.',
 'The rule has to be written in terms of occasions rather than of quality, for the same '
 'reason. A rule saying the response must be warm and personal will be satisfied by a warm '
 'and personal message produced in six minutes. A rule saying a named person telephones '
 'within four working hours cannot be satisfied any other way, which is its entire value.',
 'The last element is the hardest to hold. The call should happen before the facts are '
 'established, because its function is not to convey findings. Waiting until you can explain '
 'properly is the behaviour of a company doing its best, and from the other side it is '
 'indistinguishable from a company that has not noticed, which is what the client spends '
 'the intervening days believing.'],
dp1=('Service recovery',
     'Service-recovery research commonly finds that speed of acknowledgement and the '
     'involvement of an identifiable person predict relationship outcomes more strongly '
     'than the completeness of the explanation offered.',
     'Source: general service-recovery literature, 2026. Effects vary by severity and sector.'),
e_a=[('What class of exchange is the exception?', 'the one where the signal is the cost of sending it'),
     ('Why does a cheaper version convey less?', 'because the expenditure is the message'),
     ('Why must this be stated plainly?', 'because otherwise it will be improved away'),
     ('Why is the rule written in terms of occasions?', 'because a quality rule can be satisfied by a cheap version'),
     ('Why should the call precede the facts?', 'because waiting is indistinguishable from not having noticed')],
e_b=[('Most things in the book improve with speed and detail.', 'T'),
     ('The information content of an apology call is high.', 'F'),
     ('A written notification is slower than a call.', 'F'),
     ('A rule requiring warmth cannot be satisfied cheaply.', 'F'),
     ('The call conveys findings.', 'F'),
     ('Clients can tell the difference between care and inattention during a delay.', 'F')],

w_model=(
 'Purpose: make sure that a client who has been let down hears from a person before they '
 'wonder whether we noticed. Scope: any failure that reached a client or a client’s own '
 'customer; internal failures caught before anything left are excluded. Inputs: the '
 'incident record and the client contact list. Criteria: a named person telephones within '
 '4 working hours; the call is not delayed until the facts are established; the caller says '
 'what is known, what is not, and when the client will hear again. Done: 1 call logged with '
 'the name, the time and the 3 things said. Fallback: if the client cannot be reached on 2 '
 'attempts, a named person writes and the call is still made within 24 hours.'),
w_fig=figs.handover('WHAT STAYS WITH A PERSON',
                    ['Detect the failure', 'Establish the queue state', 'Draft the written follow-up'],
                    'A named person telephones within 4 hours',
                    'The fourth box is not an improvement on the first three.'),
w_fig_cap='Everything before the call can be produced. The call is the part that cannot.',
w_task='Write the rule for what must stay with a person at your organisation.',
w_steps=['Name the occasions, not the quality required.',
         'Say who acts, by role and by name, and within what time.',
         'Say explicitly what must not delay it.',
         'Say what the person says when they do not yet know anything.',
         'Write the fallback for when the person cannot be reached.'],
w_bank=['After any … that … , a named person …',
        'The … is not delayed until …', 'The caller says … , … and …',
        'If … cannot be reached on … attempts, …',
        'This applies regardless of …'],
w_check=['Is your rule about occasions rather than about quality?',
         'Could it be satisfied by a cheaper substitute? If so, rewrite it.',
         'Does it forbid waiting for the facts?',
         'Is there a fallback that does not quietly become the normal route?'],

t_title='What must never be automated in a customer relationship',
t_fig=figs.split('IMPROVEMENT AND HARM',
                 'Makes it better',
                 ['a faster reconciliation',
                  'a more accurate extraction',
                  'a more consistent letter',
                  'a more detailed report'],
                 'Makes it worse',
                 ['a faster apology',
                  'a more consistent condolence',
                  'a more detailed explanation first',
                  'a cheaper version of a costly gesture']),
t_fig_cap='The right-hand column is short, and everything on it resists the usual arguments.',
t_body=[
 'Identify the class before arguing about the case, because the cases all look like '
 'exceptions and the class is a pattern. Wherever the message is carried by what it cost to '
 'send, making it cheaper removes the message. Apologies, condolences, personal thanks and '
 'the first contact after a failure all sit in this class; almost nothing else does.',
 'Write the rule as an occasion and a person, never as a standard of quality. "The response '
 'must be warm and personal" is satisfiable by a warm and personal message produced in six '
 'minutes, and it will be satisfied that way within a year, by somebody reasonable, for '
 'good operational reasons. "A named person telephones within four working hours" has only '
 'one way of being complied with.',
 'And forbid the delay that feels responsible. Waiting until you can explain what happened '
 'is the instinct of a company that takes the failure seriously, and it produces two days '
 'in which the client believes nobody has noticed. The call conveys that you know. Everything '
 'else can follow in writing when it is ready.'],
t_say=[('Name the class: ', 'This is a case where the cost of sending is the message.'),
       ('Write the occasion: ', 'A named person telephones within four working hours.'),
       ('Forbid the delay: ', 'The call is not delayed until the facts are established.')],
t_bound=('A rule about who makes contact does not make the contact good. A named person '
         'telephoning within four hours can handle the call badly, say the wrong thing, or '
         'make the relationship worse, and the rule guarantees only that the expenditure was '
         'made, not that it was well spent.'),
t_a=[('This is a case where the cost of sending is the ____________.', 'message'),
     ('A named person telephones within four working ____________.', 'hours'),
     ('The call is not delayed until the facts are ____________.', 'established'),
     ('The cases all look like ____________ and the class is a pattern.', 'exceptions'),
     ('It will be satisfied that way within a year, by somebody ____________.', 'reasonable'),
     ('Everything else can follow in writing when it is ____________.', 'ready')],
t_b_rubric='Say whether each belongs in the class, and why.',
t_b=[('A monthly reconciliation.', 'no; faster, more accurate and more consistent are all improvements'),
     ('The first contact after a failure.', 'yes; the expenditure is the message, so a cheaper version conveys less'),
     ('A routine delivery confirmation.', 'no; the information is the whole of it'),
     ('A note after a client bereavement.', 'yes; cost of production is what it communicates')],

case=dict(
 title='Decision Clinic · The call that cannot be made',
 brief=[
  'Arclight has eleven clients across three countries and the four-hour rule has worked for '
  'eighteen months. A failure occurred on a Friday afternoon affecting a client whose '
  'working week ends at midday on Friday.',
  'Fatima could not reach them. The four working hours expired at Monday lunchtime under '
  'the client’s calendar and at Monday morning under Arclight’s, and neither reading had '
  'been written down.',
  'The client’s own customers had been affected and had contacted the client over the '
  'weekend. By the time Fatima spoke to them on Monday they had spent three days handling '
  'something they did not understand.'],
 exhibit=figs.datatable('THE WEEKEND, FROM BOTH SIDES',
                        ['Time', 'Arclight', 'The client'],
                        [['Fri 15:40', 'failure detected', 'office closed'],
                         ['Fri 16:10', '2 call attempts, no answer', '—'],
                         ['Sat', '—', '4 of their customers contact them'],
                         ['Sun', '—', 'client emails their own customers'],
                         ['Mon 09:15', 'call made', 'already handled it alone']]),
 exhibit_cap='Three days during which the client managed a failure they could not explain.',
 exhibit_note='Arclight had the client’s mobile number, which had been given for use in '
              'emergencies and had never been used.',
 voices=[('Fatima Zahra', 'client manager',
          'I had their mobile number and I did not use it on a Friday evening, because '
          'ringing a client at home felt like an escalation they had not asked for.'),
         ('Marta Olsen', 'risk and liability',
          'They gave us the number for emergencies. A failure reaching their own customers '
          'is the emergency. We held a key and declined to use it out of politeness.'),
         ('Ines Carvalho', 'managing director',
          'Fatima made a judgement that most people would make. The rule did not help her, '
          'which is the failure here. Four working hours means nothing when the two parties '
          'do not share a working week.')],
 steps=[('Find it', 'How long was it before the client heard, and what happened meanwhile?'),
        ('Compare it', 'What did the rule say, and what did it fail to say?'),
        ('Infer it', 'Why did Fatima not use the mobile number?'),
        ('Weigh it', 'The discomfort of a Friday evening call against three days of silence.'),
        ('Decide', 'What does the rule say now?')],
 analysis=[('Find it. How long before the client heard?', 'three days, over a weekend'),
           ('Compare it. What did "four working hours" not define?', 'whose working week it referred to'),
           ('Infer it. Why was the mobile not used?', 'because ringing a client at home felt like an escalation they had not requested'),
           ('Weigh it. What did the silence cost?', 'the client handled a failure they could not explain, in front of their own customers'),
           ('Decide. What has to be specified?', 'whose calendar applies, and that the emergency number is used when the trigger is met')],
 decision='Write the revised rule.',
 decision_steps=['Say whose working hours the time limit refers to.',
                 'Say what happens when the limit would fall outside the client’s week.',
                 'Say when the emergency number is used, so it is not a judgement.',
                 'Say what the caller says if they reach somebody at home.'],
 bank=['The … hours are counted in … working hours, not ours.',
       'If the limit would fall outside … , then …',
       'The emergency number is used whenever … , not when somebody judges that …',
       'A caller reaching somebody outside working hours says …',
       'This applies regardless of …'],
 outcome='The rule now counts in the client’s working hours and provides that where a '
         'failure has reached the client’s own customers, the emergency number is used '
         'immediately regardless of the hour, with an opening sentence that says exactly '
         'that and apologises for the timing. It has been used twice since, both times on a '
         'Saturday. Neither client minded; one said that being telephoned at home was the '
         'first time she had believed a supplier took something seriously.',
 outcome_q=[('Why was making the mobile a rule rather than a judgement important?', 'because the judgement at the time was made by somebody reluctant to intrude, and that reluctance is predictable'),
            ('What did the Saturday calls show?', 'that the intrusion the caller feared was welcomed by the client')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Handle a failure that reached a client',
 task=['This is the brief for failure response as it stood before the four-hour rule, '
       'written in the second year when the first serious failure occurred and nobody knew '
       'what to do.',
       'It is thoughtful, it describes the right behaviours, and every one of them is '
       'phrased as a quality rather than as an occasion.'],
 draft=['When something goes wrong that affects a client, respond properly.',
        'Make sure they hear from us promptly.',
        'The response should be personal and should not feel automated.',
        'Explain what happened as clearly as you can.',
        'Make sure somebody senior is involved.',
        'Follow up afterwards to check they are satisfied.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six sentences describing good behaviour, every one of which can be satisfied cheaply.',
 asked=['A named person telephoning within 4 client working hours',
        'The call not delayed for the facts',
        'A rule for reaching somebody out of hours'],
 back=['A prompt, warm written notification',
       'Calls delayed 2 days for investigation',
       'A client who waited 3 days over a weekend'],
 gap='"Promptly", "personal" and "should not feel automated" are all satisfied by a warm '
     'message produced in six minutes, and "explain what happened as clearly as you can" '
     'instructs the delay that caused the worst of it.',
 back_cap='Three failures, three different responses, none of them a call within a day.',
 back_note='The phrase "should not feel automated" is the one that failed hardest. A written '
           'notification can be made not to feel automated in about four minutes.',
 diagnosis=[('[1] "respond properly" — by what means, within what time?', 'undefined done'),
            ('[2] "promptly" — and if the client’s week has ended?', 'missing condition'),
            ('[3] "personal and not automated" — satisfiable by a warm message?', 'hidden assumption'),
            ('[4] "explain as clearly as you can" — and before you know?', 'missing condition'),
            ('[5] "somebody senior involved" — involved to what extent?', 'undefined done'),
            ('[6] "check they are satisfied" — satisfied with what, judged by whom?', 'hidden assumption')],
 rewrite='Rewrite the brief so that every requirement names an occasion, a person and a '
         'time, and so that none of them can be satisfied by a written message.',
 scaffold=['Why the cost of the contact is the thing being communicated',
           'Which failures the rule covers, and which are excluded',
           'The incident record and the client contact list, including emergency numbers',
           'Who contacts whom, by what means, within what time, and what must not delay it',
           'What is logged afterwards, and by whom',
           'What happens when the client cannot be reached'],
 bank=['After any … , a named person … within …',
       'This covers … ; … are excluded.',
       'Work from … and … , including …',
       'The … is not delayed until … ; the caller says … , … and …',
       'Log … , … and …', 'If the client cannot be reached, …'],
 check=['Does every requirement name an occasion rather than a quality?',
        'Could any requirement be satisfied by a written message?',
        'Does the brief forbid waiting for the investigation?',
        'Is the out-of-hours case a rule rather than a judgement?'],
 model=['Make sure a client who has been let down hears from a person before they begin to wonder whether we noticed',
        'Any failure that reached a client or a client’s own customer; failures caught before anything left Arclight are excluded',
        'The incident record and the client contact list, including the emergency numbers held for each client',
        'A named person telephones within 4 of the client’s working hours; the call is not delayed until the facts are established; the caller says what is known, what is not, and when the client will hear again',
        '1 call logged with the caller’s name, the time and the 3 things said, within 1 hour of the call',
        'If the client cannot be reached on 2 attempts and the failure reached their own customers, use the emergency number regardless of the hour and open by apologising for the timing'],
 cost='3 days over a weekend during which a client handled a failure they could not explain '
      'in front of 4 of their own customers, 1 unused emergency number, and a response rule '
      'that could have been satisfied by a six-minute message.'),

rev_fig=figs.split('GERUND AND INFINITIVE',
                   'Gerund — one meaning',
                   ['She stopped checking the queue.',
                    'He remembered sending it.',
                    'They tried writing instead.',
                    'He went on explaining.'],
                   'Infinitive — another',
                   ['She stopped to check the queue.',
                    'He remembered to send it.',
                    'They tried to write it.',
                    'He went on to explain.']),
rev_fig_cap='Eight sentences. No two of them mean the same thing.',
rev=dict(
 read=[('The class of exception is where', ['the content is complex', 'the cost of sending is the message', 'the client is large', 'the law requires it'], 1),
       ('"She stopped to check" means she', ['no longer checks', 'paused in order to check', 'forgot to check', 'checked twice'], 1),
       ('A rule about quality fails because', ['it is vague', 'it can be satisfied by a cheap substitute', 'it is long', 'nobody reads it'], 1),
       ('In the Clinic, what had to be specified?', ['the wording', 'whose working hours applied', 'the caller’s seniority', 'the length'], 1)],
 listen_text='There is a small class where making something faster, cheaper and more '
             'consistent destroys it, and it is the class where the cost of sending is the '
             'message. Write those rules as an occasion and a person, never as a standard of '
             'quality, because a quality standard will be met by a warm message produced in '
             'six minutes. And forbid waiting for the facts, because from the other side a '
             'careful silence looks exactly like not having noticed.',
 listen=[('The class where the ____________ of sending is the message.', 'cost'),
         ('Write those rules as an occasion and a ____________.', 'person'),
         ('A quality standard will be met by a warm message produced in six ____________.', 'minutes'),
         ('A careful ____________ looks exactly like not having noticed.', 'silence')],
 speak=['Name an exchange at your work that should stay with a person. Your partner tests the rule.',
        'Find the cheap substitute that would satisfy your wording, and close it.'],
 write='Write a rule naming an occasion, a person and a time, with nothing about quality in it.',
 vocab=[('The choice not to insist on something you are entitled to is ____________.', 'forbearance'),
        ('A call made because it is owed rather than needed is a ____________.', 'courtesy call'),
        ('A gradual loss of closeness, usually unannounced, is ____________.', 'estrangement'),
        ('Something done to make up for harm already caused is ____________.', 'amends'),
        ('The same person remaining across a sequence of dealings is ____________.', 'continuity')],
 gram=[('She stopped ____________ the queue before she left.', 'to check'),
       ('He remembered ____________ it on Tuesday, and it went.', 'to send'),
       ('They tried ____________ instead, as an experiment.', 'writing'),
       ('He went on ____________ what would happen next.', 'to explain'),
       ('I regret ____________ you that the run failed.', 'to tell')]),

found=['Name the exchanges at your work where the cost of contact is the message.',
       'Check whether your rule about them could be satisfied by a cheaper substitute.',
       'Find out whose working hours a time limit at your work refers to.',
       'Ask one client whether they would rather hear early with nothing or late with everything.'],
end_line='She knew what had happened. What she was missing was somebody minding.',
end_next='Next: Following Up, Sorting Out',
)
