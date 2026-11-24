# -*- coding: utf-8 -*-
import figs

U = dict(
num=3, title='Would You Mind',
gram='would, could and might for politeness',
ai='where a machine answer is welcome, and where it is an insult',
strap='CEFR B2 · Grammar: would, could and might for politeness · AI: where a machine answer is welcome',
cando=['use would, could and might to soften a request without weakening it',
       'choose the level of politeness a situation actually calls for',
       'decide which exchanges may be answered without a person reading them',
       'say what makes a machine answer welcome in one case and insulting in another',
       'write the rule that keeps an automatic reply out of a sensitive exchange'],
hero=('TWO REPLIES, SENT ELEVEN MINUTES APART',
      ['One saved a client forty minutes and was welcome.',
       'One arrived at a client who was ending the relationship.'],
      [(860, 'teal', 'long'), (1600, 'orange', 'short'), (2340, 'grey', 'long')]),
hero_cap='The same reply, the same wording, and two entirely different acts.',

warm=['When has an automatic reply been genuinely useful to you?',
      'When has one been worse than silence?',
      'What makes "could you send it" different from "send it"?'],
read=[
 'The out-of-hours acknowledgement at Arclight has now run for eighteen months under a '
 'closed list of three routine categories, and it answers about two thousand nine hundred '
 'messages a year. Clients have mentioned it favourably eleven times and complained about '
 'it twice, both times before the closed list existed.',
 'The question Victor keeps returning to is why the same reply, in the same words, can be '
 'welcome at eleven at night and offensive at eleven at night, and the answer turns out not '
 'to be about the reply at all. It is about what the customer was doing when they wrote.',
 'A customer asking for a copy of an invoice wants the invoice. An acknowledgement that '
 'their request has arrived and will be dealt with by ten is useful, because it removes the '
 'uncertainty, which was the only thing they were going to worry about overnight. Nothing '
 'about the exchange is personal and nothing is at stake except a document.',
 'A customer writing at eleven at night to end a contract is doing something else entirely. '
 'They have made a decision, possibly with difficulty, and the act of writing it down is '
 'part of ending a relationship that has run for two years. What they are owed, at that '
 'moment, is a person’s attention, and an immediate cheerful reply demonstrates that they '
 'did not receive it.',
 'The rule Arclight uses is therefore not about content or tone but about the kind of '
 'exchange. Three named categories may be answered automatically. Everything else waits '
 'until nine, and waiting is the intended behaviour rather than a failure of the '
 'arrangement. Ines wrote that sentence into the handbook specifically because somebody '
 'would otherwise try to fix it.'],
c_a=[('How many messages a year does the acknowledgement answer?', 'about two thousand nine hundred'),
     ('What is the difference between the two cases?', 'what the customer was doing when they wrote'),
     ('Why is an acknowledgement useful to somebody wanting an invoice?', 'it removes the uncertainty, which was all they would worry about overnight'),
     ('What is a customer ending a contract owed?', 'a person’s attention'),
     ('What did Ines write into the handbook, and why?', 'that waiting is the intended behaviour, because somebody would otherwise try to fix it')],
c_b=[('The acknowledgement has been complained about since the closed list existed.', 'F'),
     ('The difference lies in the wording of the reply.', 'F'),
     ('An acknowledgement removes overnight uncertainty.', 'T'),
     ('Ending a contract is described as a personal act.', 'T'),
     ('Waiting until nine is treated as a failure.', 'F'),
     ('Clients have mentioned it favourably eleven times.', 'T')],
c_c=[('A closed list of three routine ____________.', 'categories'),
     ('The answer turns out not to be about the ____________ at all.', 'reply'),
     ('It removes the ____________, which was the only thing they were going to worry about.', 'uncertainty'),
     ('They have made a decision, possibly with ____________.', 'difficulty'),
     ('What they are owed is a person’s ____________.', 'attention'),
     ('Waiting is the intended ____________.', 'behaviour')],
c_d=[('The difference between the two cases is the ( wording / exchange ).', ['wording', 'exchange'], 1),
     ('An acknowledgement is welcome when', ['the customer is upset', 'nothing personal is at stake', 'it is well written', 'it is fast'], 1),
     ('The rule turns on', ['content', 'tone', 'the kind of exchange', 'the hour'], 2),
     ('Ines wrote the sentence about waiting because', ['clients asked', 'somebody would otherwise try to fix it', 'it was required', 'it was shorter'], 1),
     ('Both complaints occurred', ['last month', 'before the closed list existed', 'every quarter', 'never'], 1)],
c_e=('Neutral, polite or very formal? Put each request in the right column.',
     [('Send me the file.', 'Neutral'),
      ('Could you send me the file?', 'Polite'),
      ('I wonder whether you might be able to send it.', 'Very formal'),
      ('Let me have it by Friday.', 'Neutral'),
      ('Would you mind letting me have it by Friday?', 'Polite'),
      ('I should be most grateful if you could send it.', 'Very formal')],
     ['Neutral', 'Polite', 'Very formal']),

v_fig_title='HOW A REPLY LANDS',
v_fig=[('people', 'courtesy'), ('note', 'tact'), ('doc', 'an overture'),
       ('scale', 'an imposition'), ('bulb', 'warmth'), ('bank', 'canned')],
v_fig_cap='Six words for the thing a reply does besides conveying information.',
vocab=[
 ('courtesy', 'behaviour that shows regard for other people'),
 ('deference', 'the yielding of your own position out of respect for another'),
 ('tact', 'skill in saying difficult things without causing offence'),
 ('politeness', 'observance of the forms that make interaction comfortable'),
 ('imposition', 'a demand on somebody’s time or goodwill'),
 ('overture', 'an opening approach made to begin something'),
 ('gesture', 'an act whose meaning lies in what it signals'),
 ('warmth', 'the quality of appearing to care about the other person'),
 ('brusque', 'abrupt to the point of rudeness, usually unintentionally'),
 ('curt', 'noticeably short, in a way that suggests impatience'),
 ('perfunctory', 'done as a matter of form, with no real attention'),
 ('considerate', 'taking account of how something will affect somebody'),
 ('condescending', 'treating somebody as less capable than they are'),
 ('patronising', 'showing kindness in a way that implies superiority'),
 ('impersonal', 'showing no sign of a particular person behind it'),
 ('canned', 'prepared in advance and used unchanged in many cases'),
 ('sincere', 'meaning what is said, without pretence'),
 ('offhand', 'casual in a way that suggests the matter is unimportant'),
 ('attentive', 'noticing and responding to what somebody needs'),
 ('cordial', 'friendly in a polite and slightly formal way')],
v_a=[('Done as a matter of form, with no real attention, is ____________.', 'perfunctory'),
     ('Prepared in advance and used unchanged is ____________.', 'canned'),
     ('Showing kindness in a way that implies superiority is ____________.', 'patronising'),
     ('Abrupt to the point of rudeness is ____________.', 'brusque'),
     ('A demand on somebody’s time or goodwill is an ____________.', 'imposition'),
     ('Skill in saying difficult things without offence is ____________.', 'tact'),
     ('Casual in a way suggesting the matter is unimportant is ____________.', 'offhand'),
     ('Friendly in a polite and slightly formal way is ____________.', 'cordial')],
v_b=[('Deference is the yielding of your own position', 'out of respect for another.'),
     ('An overture is an opening approach', 'made to begin something.'),
     ('Impersonal means showing no sign', 'of a particular person behind it.'),
     ('To be considerate is to take account of', 'how something will affect somebody.'),
     ('Warmth is the quality of appearing to care', 'about the other person.')],

g_title='Grammar: would, could and might for politeness',
g_rule=['Could you and would you turn an instruction into a request without changing it.',
        'Would you mind + -ing is more deferential: would you mind sending it.',
        'Might is the most tentative: I wondered whether you might be able to.',
        'Politeness is about the cost you are imposing, not about how much you want it.'],
g_fig=('LOOSE',
       ['Send me the March file.',
        'Confirm by Friday.',
        'Let me know about the invoice.',
        'I need an answer today.'],
       'PRECISE',
       ['Could you send me the March file?',
        'Would you be able to confirm by Friday?',
        'Would you mind letting me know about the invoice?',
        'I wondered whether you might manage an answer today.'],
       'the same request, with its cost unacknowledged',
       'the same request, with its cost acknowledged'),
g_fig_cap='Politeness scales with what you are asking of somebody, not with how senior they are.',
g_a=[('____________ you send me the March file? (could)', 'Could'),
     ('____________ you be able to confirm by Friday? (would)', 'Would'),
     ('Would you ____________ letting me know about the invoice? (mind)', 'mind'),
     ('I wondered whether you ____________ manage an answer today. (might)', 'might'),
     ('____________ it be possible to move the deadline? (would)', 'Would'),
     ('I should be grateful if you ____________ confirm. (could)', 'could'),
     ('____________ I ask what you decided in the end? (may)', 'May'),
     ('Would you mind ____________ it again before it goes? (check)', 'checking'),
     ('____________ you prefer to speak rather than write? (would)', 'Would')],
g_b=[('( Could / Should ) you send me the March file?', ['Could', 'Should'], 0),
     ('Would you mind ____ it again?', ['check', 'to check', 'checking', 'checked'], 2),
     ('I wondered whether you ____ manage an answer today.', ['can', 'might', 'will', 'shall'], 1),
     ('____ it be possible to move the deadline?', ['Will', 'Would', 'Shall', 'Does'], 1),
     ('I should be grateful if you ____ confirm.', ['can', 'will', 'could', 'would have'], 2),
     ('Would you ____ to speak rather than write?', ['prefer', 'preferring', 'preferred', 'prefers'], 0)],

d1=dict(title='Welcome at eleven at night',
        fig=(['The acknowledgement was useful.', 'It was. Which worries me.'],
             ['Why worry about something that worked?', 'Because the wording was identical.']),
        cap='Victor and Fatima, on the eleven favourable mentions.',
        lines=[('Fatima', 'Eleven clients have said unprompted that the out-of-hours reply is useful.'),
               ('Victor', 'They have, and the wording is exactly the wording that caused the complaint '
                          'eighteen months ago.'),
               ('Fatima', 'So the reply is not the variable.'),
               ('Victor', 'The reply is not the variable. The exchange is, and nothing in the words '
                          'distinguishes the two.'),
               ('Fatima', 'What does a client get from it when it works?'),
               ('Victor', 'Certainty. They wanted an invoice copy, they know it is coming, and they can '
                          'stop thinking about it until morning.'),
               ('Fatima', 'And when it fails, what have they lost?'),
               ('Victor', 'The thing they wrote the message for. Somebody reading what they said.'),
               ('Fatima', 'Which an acknowledgement cannot provide and appears to.'),
               ('Victor', 'Appears to, which is worse than silence, because silence at least leaves the '
                          'possibility that somebody will read it properly tomorrow.'),
               ('Fatima', 'So the rule has to be about what they were doing, and we can never know that '
                          'from the message.'),
               ('Victor', 'We can know it for three categories and not for the rest, which is precisely '
                          'why the list is closed.')],
        a=[('How many clients have mentioned the reply favourably?', 'eleven, unprompted'),
           ('What is not the variable?', 'the wording of the reply, which is identical'),
           ('What does a client get when it works?', 'certainty, so they can stop thinking about it until morning'),
           ('What do they lose when it fails?', 'the sense that somebody read what they said'),
           ('Why is appearing to provide attention worse than silence?', 'because silence leaves open the possibility of proper reading tomorrow')],
        b=[('The reply is not the ____________.', 'variable'),
           ('They can stop thinking about it until ____________.', 'morning'),
           ('Somebody ____________ what they said.', 'reading'),
           ('Which is precisely why the list is ____________.', 'closed')]),
d2=dict(title='Could we not detect it?',
        fig=(['Surely we can detect distress.', 'We can detect some of it.'],
             ['Then detect it and hold those.', 'And the ones we do not detect?']),
        cap='Jonas and Marta, revisiting the closed list.',
        lines=[('Jonas', 'We could hold back any message that reads as distressed or angry, rather than '
                         'restricting ourselves to three categories.'),
               ('Marta', 'You could detect some of it. What happens to the ones you do not detect?'),
               ('Jonas', 'They get the acknowledgement, as they do now.'),
               ('Marta', 'They get the acknowledgement, and now they get it from a system that was '
                         'supposed to be screening for exactly their case and decided they were fine.'),
               ('Jonas', 'That is true of any screening arrangement anywhere.'),
               ('Marta', 'It is, and in most of them the cost of a miss is an inconvenience. Here it is '
                         'a client who has just been told that their situation is routine.'),
               ('Jonas', 'The closed list has the same problem. A message about a delivery date could be '
                         'written by somebody who is extremely upset.'),
               ('Marta', 'It could, and it is a much narrower opening than any screening rule would be.'),
               ('Jonas', 'Narrower, and we lose the two thousand messages a year that are not in the three.'),
               ('Marta', 'We lose them to a nine o’clock reply, which was the position for the whole of '
                         'the first two years.'),
               ('Jonas', 'I think you are trading a real benefit for a rare harm and doing it by instinct.'),
               ('Marta', 'I think I am trading a small convenience for a rare and unrecoverable harm, and '
                         'I accept that neither of us can prove the exchange rate.')],
        a=[('What does Jonas propose?', 'holding back any message that reads as distressed or angry'),
           ('What is Marta’s objection?', 'that a message the screening misses now comes from a system that judged it routine'),
           ('What weakness does Jonas identify in the closed list?', 'that a delivery date message could be written by somebody extremely upset'),
           ('What does Marta concede about that?', 'that it could, though the opening is much narrower'),
           ('What do they agree about at the end?', 'that neither can prove the exchange rate between the benefit and the harm')],
        b=[('Any message that reads as ____________ or angry.', 'distressed'),
           ('Told that their situation is ____________.', 'routine'),
           ('A much ____________ opening than any screening rule.', 'narrower'),
           ('Neither of us can prove the ____________ rate.', 'exchange')]),

speak=[('Scale the politeness',
        ['Student A: make four requests as plain instructions.',
         'Student B: rewrite each at the politeness the imposition actually warrants.',
         'Decide which one you over-softened, and what that signals.']),
       ('Spoken specification: draw the line',
        ['Choose an exchange at your work that could be answered automatically.',
         'Brief aloud which cases may be, and which must wait for a person.',
         'Your partner invents a message that satisfies your rule and should not have.']),
       ('Welcome or insulting?',
        ['In pairs, list six messages a customer might send you.',
         'For each, say whether an immediate automatic acknowledgement would help or harm.',
         'Find the one you disagree about and say what the disagreement turns on.'])],

ext_title='The same reply is welcome or insulting depending on what the customer was doing',
ext_fig=figs.datatable('THE SAME ACKNOWLEDGEMENT, FIVE MESSAGES',
                       ['The message', 'What they wanted', 'The reply gives', 'Verdict'],
                       [['send me a copy of invoice 41', 'the invoice', 'certainty it is coming', 'welcome'],
                        ['when is the delivery due?', 'a date', 'certainty by 10:00', 'welcome'],
                        ['I have forgotten my password', 'access', 'certainty by 10:00', 'welcome'],
                        ['I am ending the contract', 'to be heard', 'proof nobody read it', 'insulting'],
                        ['my father has died, we must pause', 'to be heard', 'proof nobody read it', 'insulting']]),
ext_fig_cap='The fourth column changes entirely while the third column stays the same.',
ext=[
 'An automatic acknowledgement is not a message. It is an act, and like any act its meaning '
 'depends on what it is a response to. The same fourteen words can relieve somebody of an '
 'overnight worry or demonstrate to them that nobody has read what they wrote, and nothing '
 'in the wording distinguishes the two cases.',
 'The distinction lies in what the customer wanted. Somebody requesting a document wants the '
 'document; an acknowledgement is useful because it removes uncertainty about whether the '
 'request arrived, which was the only thing they were going to think about. The exchange is '
 'transactional in the precise sense that nothing personal is at stake.',
 'Somebody writing to end a relationship, to report a bereavement or to express a grievance '
 'wants something different and more specific: a person to have read what they wrote. An '
 'immediate reply proves that this did not happen, and it proves it faster and more clearly '
 'than silence would, because silence leaves the possibility open until morning.',
 'This is why the rule must be about the kind of exchange rather than about the tone of the '
 'reply: the same fourteen words are a welcome machine answer in one exchange and an insult in the next. Softening the wording does not help; a gentler automatic reply to somebody ending a '
 'contract is still an automatic reply to somebody ending a contract. The problem is not '
 'that the words are wrong but that the act is wrong.',
 'And it is why a closed list beats a screening rule, which is the point people resist. '
 'Screening attempts to detect sensitive messages and lets through the ones it misses, and '
 'a message that gets through a screen designed to catch it has been positively classified '
 'as routine. A closed list makes no claim about anything outside it; everything else simply '
 'waits, which is the position every company occupied before any of this existed.'],
dp1=('Automated responses in sensitive contexts',
     'Service research commonly finds that automated acknowledgement improves satisfaction '
     'for transactional contacts and reduces it for contacts involving complaint, loss or '
     'relationship change.',
     'Source: general service-research literature, 2026. Effects differ by channel and sector.'),
e_a=[('What is an automatic acknowledgement, in the writer’s terms?', 'an act, whose meaning depends on what it responds to'),
     ('Why is it useful to somebody requesting a document?', 'it removes uncertainty about whether the request arrived'),
     ('What does somebody ending a relationship want?', 'a person to have read what they wrote'),
     ('Why does softening the wording not help?', 'because the problem is the act, not the words'),
     ('Why does a closed list beat a screening rule?', 'because a message that escapes a screen has been positively classified as routine')],
e_b=[('The wording distinguishes a welcome reply from an insulting one.', 'F'),
     ('A transactional exchange has nothing personal at stake.', 'T'),
     ('Silence is worse than an immediate automatic reply to a grievance.', 'F'),
     ('A gentler automatic reply solves the problem.', 'F'),
     ('A closed list makes claims about messages outside it.', 'F'),
     ('Waiting until morning is the position companies occupied before.', 'T')],

w_model=(
 'Purpose: acknowledge routine out-of-hours messages without ever replying to an exchange '
 'that requires a person. Scope: messages matching 1 of 3 named categories; everything else '
 'waits until 09:00, which is the intended behaviour. Inputs: the shared inbox and '
 'acknowledgement template version 2. Criteria: the reply states only that a person will '
 'respond by 10:00 and may not refer to the content of the message; no screening or '
 'sentiment rule is used to widen the list. Done: 1 sent count by 09:00 and 1 list of '
 'messages left unanswered. Fallback: if a message matches a category but also mentions '
 'ending, complaint or bereavement, send nothing and flag it for 09:00.'),
w_fig=figs.handover('WHERE AN AUTOMATIC REPLY STOPS',
                    ['A document request', 'A delivery date', 'A password reset'],
                    'Everything else waits for a person at 09:00',
                    'Waiting is the intended behaviour, not a failure.'),
w_fig_cap='The fourth box is the rule. The first three are the exception to it.',
w_task='Write the rule for automatic replies at your own organisation.',
w_steps=['List the categories that may be answered automatically, as a closed list.',
         'Say in those words that everything else waiting is intended.',
         'Say what the reply may contain, and what it may never refer to.',
         'Forbid widening the list by detection or screening, and say why.',
         'Write the override for a message that matches a category and should not be answered.'],
w_bank=['Only … may be acknowledged automatically.',
        'Everything else waits until … , which is …',
        'The reply states only … and may never …',
        'The list may not be widened by … , because …',
        'If a message matches a category but also … , then …'],
w_check=['Is your list closed rather than open?',
         'Have you said that waiting is intended, in those words?',
         'Does the reply avoid referring to the content of the message?',
         'Is there an override for a message that matches but should not be answered?'],

t_title='Where a machine answer is welcome, and where it is an insult',
t_fig=figs.split('TWO KINDS OF EXCHANGE',
                 'Transactional — answer it',
                 ['send me a copy of invoice 41',
                  'when is the delivery due?',
                  'I have forgotten my password',
                  'which address do I send it to?'],
                 'Personal — wait for a person',
                 ['I am ending the contract',
                  'this is the third time this month',
                  'we need to pause, my father has died',
                  'I am not sure we can keep working with you']),
t_fig_cap='The right-hand column is what people write at eleven at night, which is also when the reply fires.',
t_body=[
 'Classify by exchange rather than by content or tone, because the question is what the '
 'customer was doing when they wrote and not what words they happened to use. Somebody '
 'asking for an invoice copy wants the invoice; somebody ending a relationship wants to be '
 'heard. An acknowledgement serves the first and actively defeats the second.',
 'Keep the list closed, and resist the pressure to widen it by detection. A screening rule '
 'that tries to spot distress will catch some of it and will let the rest through, and a '
 'message that passes a screen designed to catch it has been positively judged routine by '
 'your company. A closed list says nothing about anything outside it, which is a much '
 'smaller claim and a much safer one.',
 'Then write down that waiting is intended, because somebody will eventually treat the '
 'two thousand unanswered messages as a gap to be closed. They are not a gap. They are the '
 'ordinary position of a company that is closed at night, and they were nobody’s complaint '
 'for the first two years.'],
t_say=[('Classify by exchange: ', 'Three routine categories may be answered; nothing else.'),
       ('Refuse the screen: ', 'The list may not be widened by detecting sentiment.'),
       ('Protect the silence: ', 'Everything else waits until nine, which is intended.')],
t_bound=('A closed list does not identify sensitive messages; it identifies routine ones and '
         'stays out of everything else. A message in a routine category can still have been '
         'written by somebody in distress, and the reply will go, and nothing in the '
         'arrangement will catch it.'),
t_a=[('Three routine categories may be answered; ____________ else.', 'nothing'),
     ('The list may not be widened by detecting ____________.', 'sentiment'),
     ('Everything else waits until nine, which is ____________.', 'intended'),
     ('The question is what the customer was ____________ when they wrote.', 'doing'),
     ('A message that passes a screen designed to catch it has been judged ____________.', 'routine'),
     ('They were nobody’s complaint for the first two ____________.', 'years')],
t_b_rubric='Say whether each message should get an automatic reply, and why.',
t_b=[('Could you resend invoice 41?', 'yes; transactional, and the reply removes overnight uncertainty'),
     ('This is the third time this month.', 'no; a grievance, and an automatic reply proves nobody read it'),
     ('What time is the Thursday delivery?', 'yes; transactional, nothing personal is at stake'),
     ('I think we need to talk about the arrangement.', 'no; a relationship message, which requires a person')],

case=dict(
 title='Decision Clinic · Widen the list, or leave it?',
 brief=[
  'The closed list covers about nine hundred messages a quarter. Another two thousand a '
  'quarter arrive out of hours and wait until nine, of which Jonas estimates that about '
  'eighty-five per cent are equally routine.',
  'Jonas proposes a sentiment rule: acknowledge anything that does not read as distressed, '
  'angry or relationship-related, which he estimates would cover about ninety per cent of '
  'the remaining two thousand.',
  'Marta opposes it on the grounds already argued. Fatima has raised something neither of '
  'them had considered: clients who write at night about routine matters and receive no '
  'reply have, in three recorded cases, telephoned the following morning to check that the '
  'message had arrived.'],
 exhibit=figs.datatable('OUT-OF-HOURS MESSAGES, ONE QUARTER',
                        ['', 'Messages', 'Acknowledged', 'Morning chase calls'],
                        [['3 named categories', '900', '900', '0'],
                         ['routine, outside the list', '1,700', '0', '3'],
                         ['grievance or relationship', '280', '0', '0'],
                         ['unclear', '20', '0', '0'],
                         ['total', '2,900', '900', '3']]),
 exhibit_cap='Three chase calls in a quarter, against two hundred and eighty sensitive messages.',
 exhibit_note='The three chase calls took about six minutes each. No complaint has arisen '
              'from an unanswered routine message.',
 voices=[('Jonas Riedel', 'systems and workflows',
          'Seventeen hundred routine messages a quarter get nothing, and the only measured '
          'harm from the closed list is three chase calls, which is eighteen minutes.'),
         ('Marta Olsen', 'risk and liability',
          'Eighteen minutes against two hundred and eighty messages that must not be '
          'answered, and a rule that would have to judge each one correctly. I will take '
          'the eighteen minutes.'),
         ('Fatima Zahra', 'client manager',
          'There is a third option. Widen the list by naming more categories rather than by '
          'detecting sentiment. Delivery changes, address queries, opening hours. That is '
          'still a closed list.')],
 steps=[('Find it', 'How many routine messages go unanswered, and what has that cost?'),
        ('Compare it', 'What does a sentiment rule do that a longer closed list does not?'),
        ('Infer it', 'Why is Fatima’s option different in kind from Jonas’s?'),
        ('Weigh it', 'Eighteen minutes of chase calls against the risk of a misjudged message.'),
        ('Decide', 'What happens to the list?')],
 analysis=[('Find it. What has the closed list cost in measured harm?', 'three chase calls, about eighteen minutes in a quarter'),
           ('Compare it. What does a sentiment rule require?', 'a judgement about every message, including the ones it misjudges'),
           ('Infer it. Why is naming more categories different?', 'because it makes no claim about anything outside the named list'),
           ('Weigh it. What is the asymmetry Marta relies on?', 'eighteen recoverable minutes against a harm that cannot be taken back'),
           ('Decide. Which proposal keeps the benefit without the claim?', 'adding named categories, which is still a closed list')],
 decision='Write the revised rule.',
 decision_steps=['Say how the list is widened, and by what method.',
                 'Say explicitly what method is not used, and why.',
                 'Name the new categories.',
                 'Say what would cause a category to be removed.'],
 bank=['The list is widened by … , not by …',
       'We do not use … , because …', 'The following categories are added: …',
       'A category is removed if …', 'Everything else continues to …'],
 outcome='Four categories were added by name, taking coverage from nine hundred to about two '
         'thousand one hundred messages a quarter. No sentiment rule was introduced. In the '
         'following year one category, "address queries", was removed after a client used it '
         'to raise a dispute about where correspondence had been sent, which was a grievance '
         'wearing a routine subject line. Marta had not predicted that case and says it is '
         'the best argument for the closed list she has, because the category could be '
         'removed in a minute.',
 outcome_q=[('Why could the problem be fixed in a minute?', 'because removing a named category is a single change, unlike adjusting a screening rule'),
            ('What did the address-query case show?', 'that a routine subject line can carry a grievance, which no list can prevent')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Widen the out-of-hours reply',
 task=['This is Jonas’s brief for widening the acknowledgement, written after a quarter in '
       'which seventeen hundred routine messages went unanswered and three clients rang to '
       'check.',
       'It is a reasonable response to a real inefficiency, and it replaces a closed list '
       'with a judgement about every message that arrives.'],
 draft=['Widen the out-of-hours reply to cover more of what comes in.',
        'Acknowledge anything that is clearly routine.',
        'Hold back anything that seems sensitive.',
        'Use the tone of the message to decide.',
        'Keep the wording warm and reassuring.',
        'Review it after a while and see how it is going.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief that replaces a list with a judgement, and the judgement with a tone.',
 asked=['Named categories, added by name',
        'No widening by sentiment detection',
        'An override for a routine subject carrying a grievance'],
 back=['Every message judged individually',
       'Sensitive messages judged routine',
       'Warm wording applied before reading'],
 gap='"Clearly routine" and "seems sensitive" are the same judgement stated twice, "the tone '
     'of the message" is exactly what a distressed client may not display, and nothing says '
     'what happens to a message that satisfies the rule and should not have.',
 back_cap='A rule that classifies every message, including the ones it classifies wrongly.',
 back_note='The important difference is not accuracy. A closed list makes no claim about '
           'messages outside it; a screening rule positively judges every message routine '
           'that it does not catch.',
 diagnosis=[('[1] "more of what comes in" — which categories, named?', 'unstated criterion'),
            ('[2] "anything that is clearly routine" — clear to whom?', 'unstated criterion'),
            ('[3] "anything that seems sensitive" — and the ones that do not seem it?', 'missing condition'),
            ('[4] "the tone of the message" — and a calm message about ending?', 'hidden assumption'),
            ('[5] "warm and reassuring" — applied before anybody has read it?', 'hidden assumption'),
            ('[6] "review it after a while" — and if harm occurs before then?', 'missing condition')],
 rewrite='Rewrite the brief so that the list is widened by naming categories, and so that no '
         'message outside the list is classified at all.',
 scaffold=['Why clients who write at night about routine matters deserve a reply',
           'Which named categories may be acknowledged, and what happens to everything else',
           'The inbox and the acknowledgement template, both numbered',
           'What the reply may say, and the method that may not be used to widen the list',
           'What comes back each morning, and by when',
           'What to do with a message that matches a category but mentions something sensitive'],
 bank=['Acknowledge … so that … without …',
       'Only the … named categories; everything else … , which is intended.',
       'Work from … and template version …',
       'The reply states only … ; the list may not be widened by …',
       'Return … by … each morning.',
       'If a message matches a category but also mentions … , then …'],
 check=['Is the list widened by naming categories rather than by judging messages?',
        'Is sentiment detection forbidden explicitly, with a reason?',
        'Does the reply avoid referring to the content?',
        'Is there an override for a routine category carrying something sensitive?'],
 model=['Acknowledge more of the routine out-of-hours traffic without ever classifying a message we have not named',
        'Messages matching 1 of the 7 named categories; everything else waits until 09:00, which is the intended behaviour and not a gap',
        'The shared inbox and acknowledgement template version 2 dated 3 March',
        'The reply states only that a person will respond by 10:00 and may never refer to the content of the message; the list may not be widened by sentiment or tone detection, because a message that escapes such a rule has been positively judged routine',
        '1 sent count and 1 list of messages left unanswered, by 09:00 each morning',
        'If a message matches a named category but also mentions ending, complaint or bereavement, send nothing and flag it for 09:00'],
 cost='Had the sentiment rule run, an estimated 280 sensitive messages a quarter would have '
      'been classified by a rule that misses some, against a measured cost of 3 chase calls '
      'and about 18 minutes.'),

rev_fig=figs.split('PLAIN AND POLITE',
                   'Plain — cost unacknowledged',
                   ['Send me the March file.',
                    'Confirm by Friday.',
                    'Let me know about the invoice.',
                    'I need an answer today.'],
                   'Polite — cost acknowledged',
                   ['Could you send me the March file?',
                    'Would you be able to confirm by Friday?',
                    'Would you mind letting me know?',
                    'I wondered whether you might manage today.']),
rev_fig_cap='Politeness is proportionate to what you are asking of somebody, not to their rank.',
rev=dict(
 read=[('What distinguishes a welcome reply from an insulting one is', ['the wording', 'the kind of exchange', 'the hour', 'the client'], 1),
       ('"Would you mind" is followed by', ['the infinitive', 'the -ing form', 'the past tense', 'a that-clause'], 1),
       ('A closed list is preferred to a screening rule because', ['it is faster', 'it makes no claim about what is outside it', 'it is cheaper', 'it is shorter'], 1),
       ('In the Clinic, how was the list widened?', ['by sentiment', 'by naming categories', 'not at all', 'by hour'], 1)],
 listen_text='Classify by exchange, not by content, because the question is what the '
             'customer was doing when they wrote. Keep the list closed and resist widening '
             'it by detection, because a message that escapes a screen built to catch it has '
             'been positively judged routine by you. And write down that waiting is intended, '
             'or somebody will treat the unanswered messages as a gap to be closed.',
 listen=[('Classify by ____________, not by content.', 'exchange'),
         ('The question is what the customer was ____________ when they wrote.', 'doing'),
         ('A message that escapes a screen has been judged ____________.', 'routine'),
         ('Write down that ____________ is intended.', 'waiting')],
 speak=['Name four messages a customer might send. Your partner says which could be answered automatically.',
        'Find the one you disagree about and say what the disagreement rests on.'],
 write='Write a closed list of categories and the sentence protecting the silence around it.',
 vocab=[('Done as a matter of form, with no real attention, is ____________.', 'perfunctory'),
        ('Prepared in advance and used unchanged is ____________.', 'canned'),
        ('Showing kindness in a way that implies superiority is ____________.', 'patronising'),
        ('A demand on somebody’s time or goodwill is an ____________.', 'imposition'),
        ('Skill in saying difficult things without offence is ____________.', 'tact')],
 gram=[('____________ you send me the March file?', 'Could'),
       ('Would you ____________ letting me know about the invoice?', 'mind'),
       ('I wondered whether you ____________ manage an answer today.', 'might'),
       ('____________ it be possible to move the deadline?', 'Would'),
       ('I should be grateful if you ____________ confirm.', 'could')]),

found=['List the exchanges at your work that could be answered without a person.',
       'List the ones that must never be, and say what they have in common.',
       'Check whether any rule at your work judges a message by its tone.',
       'Rewrite one blunt request at the politeness its imposition warrants.'],
end_line='The reply was identical. What the customer was doing when they wrote was not.',
end_next='Next: Although They Said',
)
