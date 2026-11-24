# -*- coding: utf-8 -*-
import figs

U = dict(
num=10, title='Working Without You',
gram='purpose and result: so that, in order to, so...that',
ai='an assistant and an agent: what acting on your behalf means',
strap='CEFR B1 · Grammar: purpose and result: so that, in order to, so...that · AI: an assistant and an agent',
cando=['use so that, in order to and so...that correctly',
       'say why a process is arranged the way it is, in one clause',
       'tell the difference between something that helps me and something that acts for me',
       'write the limits inside which something may act on my behalf',
       'say who is answerable when something acts for me and gets it wrong'],
hero=('THE LAST PAGE OF BOOK TWO',
      ['Eleven people, eleven runs, four checkpoints.',
       'And one question that has not been answered yet.'],
      [(840, 'teal', 'short'), (1560, 'purple', 'long'),
       (2200, 'grey', 'short'), (2740, 'orange', 'long')]),
hero_cap='The end of delegation, and the beginning of a harder question.',

warm=['What is the difference between a tool that helps you and somebody who acts for you?',
      'If somebody acts on your behalf and gets it wrong, who is answerable?',
      'What would you never give anybody standing permission to do?'],
read=[
 'Everything in this book has been about handing work over, and almost all of it has been '
 'about one kind of handing over: you ask for something, it is produced, and you look at it '
 'before anything happens. That is an assistant. The work is done for you and the decision '
 'remains yours.',
 'An agent is different in one specific way, and the difference is not intelligence or '
 'capability. An agent acts without being asked each time. It has standing permission to do '
 'something when a condition is met, and it does it, and you find out afterwards or you do '
 'not find out at all.',
 'Arclight crossed that line in January without deciding to. A rule was added so that an '
 'acknowledgement went out automatically when a client message arrived outside working '
 'hours. Nobody thought of it as a decision about agency. It was a convenience, and it '
 'worked perfectly for seven weeks.',
 'In the eighth week a client wrote at eleven at night to say that she was ending the '
 'contract. The acknowledgement that went back thanked her for getting in touch and assured '
 'her that her enquiry was important. She forwarded it to Ines with a single line: "Is this '
 'what we have become?"',
 'What Ines wrote afterwards is now the last page of the handbook. An agent may act on '
 'Arclight’s behalf so that routine work does not wait for office hours. It may not act in '
 'any exchange where a client is ending, complaining or distressed, because those are '
 'exchanges in which being answered by nobody is worse than waiting until nine.'],
c_a=[('What is an assistant, as described here?', 'something that does work for you while the decision remains yours'),
     ('What makes an agent different?', 'it acts without being asked each time, under standing permission'),
     ('When did Arclight cross the line?', 'in January, by adding an automatic out-of-hours acknowledgement'),
     ('What happened in the eighth week?', 'a client ending her contract received a cheerful acknowledgement'),
     ('What rule did Ines write?', 'an agent may act for routine work but not where a client is ending, complaining or distressed')],
c_b=[('An assistant leaves the decision with you.', 'T'),
     ('The difference between assistant and agent is capability.', 'F'),
     ('Arclight decided deliberately to use an agent.', 'F'),
     ('The acknowledgement worked well for seven weeks.', 'T'),
     ('The client telephoned about it.', 'F'),
     ('Ines’s rule allows agents in complaints.', 'F')],
c_c=[('The work is done for you and the decision remains ____________.', 'yours'),
     ('It has standing ____________ to do something when a condition is met.', 'permission'),
     ('Arclight crossed that line in January without ____________ to.', 'deciding'),
     ('It was a ____________, and it worked perfectly for seven weeks.', 'convenience'),
     ('Is this what we have ____________?', 'become'),
     ('Being answered by ____________ is worse than waiting until nine.', 'nobody')],
c_d=[('The line was crossed ( accidentally / deliberately ).', ['accidentally', 'deliberately'], 0),
     ('The defining feature of an agent is that it', ['is cleverer', 'acts without being asked each time', 'is faster', 'costs more'], 1),
     ('The acknowledgement failed because', ['it was late', 'it was wrong about the content of the message', 'it was ungrammatical', 'it was too long'], 1),
     ('Ines’s rule turns on', ['the time of day', 'the kind of exchange', 'the client’s size', 'the length of the message'], 1),
     ('The client’s reaction was', ['a phone call', 'a forwarded message with one line', 'a formal complaint', 'nothing'], 1)],
c_e=('Purpose or result? Put each sentence in the right column.',
     [('We hold the queue so that a person can check it.', 'Purpose'),
      ('The queue was so long that nobody read it.', 'Result'),
      ('We log each item in order to trace a failure.', 'Purpose'),
      ('It failed so quietly that nobody noticed.', 'Result'),
      ('We wrote it down so that others could run it.', 'Purpose'),
      ('The brief was so vague that four readings were possible.', 'Result')],
     ['Purpose', 'Result']),

v_fig_title='ACTING ON SOMEBODY’S BEHALF',
v_fig=[('people', 'an agent'), ('doc', 'a standing instruction'), ('scale', 'discretion'),
       ('bank', 'liability'), ('note', 'a proxy'), ('bulb', 'initiative')],
v_fig_cap='Six words from a much older subject than this one.',
vocab=[
 ('agent', 'somebody or something acting on another party’s behalf'),
 ('assistant', 'somebody or something that helps while the decision stays with you'),
 ('initiative', 'acting without being told to on each occasion'),
 ('unattended', 'running without anybody watching at the time'),
 ('supervise', 'to watch work closely enough to stop it if necessary'),
 ('intervene', 'to step in and change what would otherwise happen'),
 ('standing instruction', 'an instruction that applies until it is withdrawn'),
 ('discretion', 'the freedom to decide within agreed limits'),
 ('proxy', 'a person or thing authorised to act in another’s place'),
 ('principal', 'the party on whose behalf an agent acts'),
 ('liability', 'legal responsibility for a loss or a harm'),
 ('undertake', 'to commit yourself formally to doing something'),
 ('commit', 'to bind yourself or your company to a course of action'),
 ('bind', 'to place under an obligation that cannot simply be dropped'),
 ('representative', 'somebody who speaks or acts for another'),
 ('instruct', 'to tell somebody formally what to do'),
 ('revocable', 'able to be withdrawn by the party who gave it'),
 ('ceiling', 'the upper limit of what may be done without further approval'),
 ('trust', 'confidence that somebody will act properly without being watched'),
 ('answerable', 'required to explain and accept the consequences')],
v_a=[('An instruction that applies until withdrawn is a ____________.', 'standing instruction'),
     ('The party on whose behalf an agent acts is the ____________.', 'principal'),
     ('The upper limit of what may be done without approval is the ____________.', 'ceiling'),
     ('Freedom to decide within agreed limits is ____________.', 'discretion'),
     ('A permission that can be withdrawn is ____________.', 'revocable'),
     ('Running without anybody watching is ____________.', 'unattended'),
     ('Legal responsibility for a loss is ____________.', 'liability'),
     ('To step in and change what would otherwise happen is to ____________.', 'intervene')],
v_b=[('An agent is somebody or something acting', 'on another party’s behalf.'),
     ('To be answerable is to be required to explain', 'and accept the consequences.'),
     ('A proxy is authorised to act', 'in another’s place.'),
     ('To bind somebody is to place them under', 'an obligation they cannot simply drop.'),
     ('Initiative is acting without being told', 'on each occasion.')],

g_title='Grammar: purpose and result — so that, in order to, so...that',
g_rule=['So that + clause gives the purpose: we hold the queue so that a person can check it.',
        'In order to + verb gives the purpose with no new subject: we log each item in order to trace faults.',
        'So + adjective + that gives the result: it failed so quietly that nobody noticed.',
        'Purpose explains why something was arranged. Result reports what followed.'],
g_fig=('LOOSE',
       ['We hold the queue.',
        'We log each item.',
        'The brief was vague.',
        'The check got faster.'],
       'PRECISE',
       ['We hold it so that Fatima can check 4 facts.',
        'We log each item in order to trace a failure.',
        'The brief was so vague that 4 readings were possible.',
        'It got so fast that nothing was being checked.'],
       'the arrangement, with no reason',
       'the arrangement and the reason for it'),
g_fig_cap='A rule whose reason is not written down is a rule somebody will remove.',
g_a=[('We hold the queue ____________ that a person can check it. (so)', 'so'),
     ('We log each item in ____________ to trace a failure. (order)', 'order'),
     ('The brief was ____________ vague that four readings were possible. (so)', 'so'),
     ('It got so fast ____________ nothing was being checked. (that)', 'that'),
     ('We write it down ____________ that somebody else can run it. (so)', 'so'),
     ('In ____________ to catch a stale export, the run checks the file date. (order)', 'order'),
     ('The failure was ____________ quiet that it lasted two days. (so)', 'so'),
     ('We name the owner ____________ that the grant can be reviewed. (so)', 'so'),
     ('The letter was ____________ long that nobody read it. (so)', 'so')],
g_b=[('We hold the queue ( in order to / so that ) a person can check it.', ['in order to', 'so that'], 1),
     ('We log each item ____ trace a failure.', ['so that', 'in order to', 'so as', 'for to'], 1),
     ('The brief was ____ vague that four readings were possible.', ['such', 'so', 'too', 'very'], 1),
     ('It got so fast ____ nothing was being checked.', ['so', 'as', 'that', 'which'], 2),
     ('We name the owner ____ the grant can be reviewed.', ['in order to', 'so that', 'so as to', 'for'], 1),
     ('The failure was so quiet ____ it lasted two days.', ['as', 'that', 'so', 'which'], 1)],

d1=dict(title='Is this what we have become?',
        fig=(['She was ending the contract.', 'And we thanked her for getting in touch.'],
             ['The rule did what it was asked.', 'Yes. That is the problem.']),
        cap='Ines and Jonas, the morning after.',
        lines=[('Ines', 'She wrote at eleven at night to end the contract.'),
               ('Jonas', 'And the acknowledgement thanked her for getting in touch.'),
               ('Ines', 'And assured her that her enquiry was important to us.'),
               ('Jonas', 'The rule did exactly what it was asked to do.'),
               ('Ines', 'I know. That is what I keep thinking about.'),
               ('Jonas', 'We can add a condition. Do not acknowledge anything mentioning ending.'),
               ('Ines', 'That catches this one. It does not catch the next one.'),
               ('Jonas', 'Nothing catches the next one. We do not know what it is.'),
               ('Ines', 'Then the rule is not about words. It is about which exchanges we are in.'),
               ('Jonas', 'Which is a judgement, and I cannot write a judgement into a condition.'),
               ('Ines', 'No. So the condition has to be narrow enough that judgement is not needed.'),
               ('Jonas', 'That will make it much less useful. I think that is the right answer anyway.')],
        a=[('When did the client write?', 'at eleven at night'),
           ('What did the acknowledgement say?', 'that it thanked her and that her enquiry was important'),
           ('What does Jonas suggest first?', 'adding a condition about messages mentioning ending'),
           ('Why does Ines reject that?', 'because it catches this case and not the next one'),
           ('What do they conclude?', 'that the condition must be narrow enough that no judgement is needed')],
        b=[('She wrote at eleven at ____________.', 'night'),
           ('The rule did exactly what it was ____________ to do.', 'asked'),
           ('It is about which ____________ we are in.', 'exchanges'),
           ('Narrow enough that ____________ is not needed.', 'judgement')]),
d2=dict(title='Who is answerable?',
        fig=(['It acted for us.', 'So who is answerable?'],
             ['We are, obviously.', 'Then say so in the rule.']),
        cap='Marta and Ines, writing the last page.',
        lines=[('Marta', 'When an agent acts for us and gets it wrong, who is answerable?'),
               ('Ines', 'We are. Obviously.'),
               ('Marta', 'Then write that down, because it is not obvious at nine at night.'),
               ('Ines', 'Nobody at Arclight thinks otherwise.'),
               ('Marta', 'Nobody thinks otherwise now. In two years there will be people here I have never met.'),
               ('Ines', 'And the sentence is one line.'),
               ('Marta', 'The sentence is one line and it decides what people do when something goes wrong.'),
               ('Ines', 'You mean whether they fix it or explain it.'),
               ('Marta', 'I mean whether they say "the system did that" out loud to a client.'),
               ('Ines', 'Which somebody would.'),
               ('Marta', 'Somebody always does, once, and the client never forgets it.'),
               ('Ines', 'Then it goes in the first line of the page, not the last.')],
        unresolved=True,
        a=[('What question does Marta ask?', 'who is answerable when an agent acts and gets it wrong'),
           ('Why does she want it written down?', 'because in two years there will be people who do not know'),
           ('What does the sentence decide?', 'what people do when something goes wrong'),
           ('What phrase does Marta not want said to a client?', '"the system did that"'),
           ('Where does Ines decide to put it?', 'in the first line of the page rather than the last')],
        b=[('When an agent acts for us and gets it ____________.', 'wrong'),
           ('It is not obvious at nine at ____________.', 'night'),
           ('Whether they fix it or ____________ it.', 'explain'),
           ('The client never ____________ it.', 'forgets')]),

speak=[('Purpose or result?',
        ['Student A: describe four arrangements at your work.',
         'Student B: ask why each exists, and answer in a so that clause.',
         'Find the one where neither of you can state the purpose.']),
       ('Spoken specification: set the limits',
        ['Choose something that could act on your behalf without asking each time.',
         'Brief it aloud: what it may do, when, and what it may never do.',
         'Your partner invents one situation your limits do not cover.']),
       ('Who is answerable?',
        ['In pairs, name three things at work that happen automatically.',
         'For each, say who answers for it if it goes wrong.',
         'Find the one where you both hesitated, and write the sentence it needs.'])],

ext_title='An assistant does the work; an agent takes the decision',
ext_fig=figs.datatable('THE SAME SYSTEM, TWO ARRANGEMENTS',
                       ['', 'Assistant', 'Agent'],
                       [['who starts it', 'you, each time', 'a condition'],
                        ['who sees it first', 'you', 'the recipient'],
                        ['when you find out', 'before', 'after, or never'],
                        ['what a mistake costs', 'your time', 'whatever it reaches'],
                        ['who is answerable', 'you', 'you']]),
ext_fig_cap='Only the first four rows differ. The fifth is the same, and it is the one people forget.',
ext=[
 'The distinction between an assistant and an agent is not technical and it is much older '
 'than any of this. An assistant does work that you then act on. An agent acts, within '
 'limits you set in advance, and tells you afterwards if it tells you at all. Every '
 'profession that has ever delegated authority has a body of thinking about this, and almost '
 'none of it is about capability.',
 'Companies cross the line without noticing, which is the main practical danger. Nobody at '
 'Arclight held a meeting about agency. Somebody added an out-of-hours acknowledgement '
 'because clients were waiting until nine in the morning for a reply, and it was a good '
 'idea, and it was also a decision to let something speak for the company without anybody '
 'reading what it said.',
 'The useful test is not whether something is capable of acting alone but what happens in '
 'the worst exchange it will meet. Routine acknowledgements are fine ninety-nine times. The '
 'hundredth is somebody writing at eleven at night to end a relationship, and the cost of '
 'that one is not a hundredth of anything. It is a particular kind of insult that people '
 'remember for years.',
 'So the limits should be written in terms of the exchange rather than the content. '
 'Filtering on words is tempting and it fails, because the next case will use different '
 'words. A rule that says an agent may handle requests for documents, delivery dates and '
 'passwords, and nothing else, is narrow enough to be safe without requiring anybody to '
 'anticipate what a distressed client will write.',
 'And the answerability line has to be explicit, in writing, before anything goes wrong. '
 'When an agent acts on a company’s behalf, the company is answerable; that is what acting '
 'on behalf of somebody means, and it has meant that for several hundred years. The reason '
 'to write it down is not that anybody disagrees. It is that under pressure somebody will '
 'reach for "the system did that", and a client hearing it once will never hear anything '
 'else from you again.'],
dp1=('Out-of-hours expectations',
     'Customer-service research generally reports rising expectations of rapid acknowledgement '
     'alongside strong negative reactions to responses perceived as automated in sensitive '
     'exchanges.',
     'Source: general customer-service research, 2026. Strongly segment-dependent.'),
e_a=[('What is the difference between an assistant and an agent?', 'an assistant does work you then act on; an agent acts within preset limits and tells you afterwards'),
     ('Why is crossing the line dangerous in practice?', 'because companies do it without holding a meeting about it'),
     ('What is the useful test?', 'what happens in the worst exchange it will meet, not whether it is capable'),
     ('Why should limits be written in terms of the exchange?', 'because filtering on words fails, since the next case uses different words'),
     ('Why write the answerability line down if nobody disagrees?', 'because under pressure somebody will say "the system did that" to a client')],
e_b=[('The assistant/agent distinction is a technical one.', 'F'),
     ('Arclight held a meeting before introducing the acknowledgement.', 'F'),
     ('The cost of the hundredth case is a hundredth of the cost of the rest.', 'F'),
     ('Filtering on words is recommended.', 'F'),
     ('Acting on behalf of somebody has long implied their answerability.', 'T'),
     ('A client who hears "the system did that" once tends to remember it.', 'T')],

w_model=(
 'Purpose: acknowledge routine out-of-hours messages so that clients do not wait until 09:00 '
 'for a reply. Scope: messages whose subject matches 1 of the 3 routine categories — a '
 'request for a document already sent, a delivery date, or a password reset. Everything else '
 'waits for a person. Inputs: the shared inbox and acknowledgement template version 1. '
 'Criteria: 1 acknowledgement per message, stating that a person will reply by 10:00; the '
 'agent may not use any wording about the content of the message. Done: 1 sent count by '
 '09:00 and a list of every message it did not answer. Fallback: if a message matches no '
 'routine category, send nothing at all; silence until 09:00 is the intended behaviour.'),
w_fig=figs.handover('WHERE AN AGENT STOPS',
                    ['A document request', 'A delivery date', 'A password reset'],
                    'Everything else waits for a person at 09:00',
                    'The list is short on purpose.'),
w_fig_cap='Three categories, named. Everything that is not on the list is not on the list.',
w_task='Write the limits for something that may act on your behalf.',
w_steps=['Name what it may do, as a short closed list of situations.',
         'Say explicitly that anything not on the list waits for a person.',
         'Write the purpose in a so that clause, so the reason survives you.',
         'Say who is answerable when it acts and is wrong.',
         'Say what it may never say, regardless of the situation.'],
w_bank=['It may … so that …', 'It may act only where …',
        'Anything not listed …', 'Arclight is answerable for …',
        'It may never … , in any circumstances.'],
w_check=['Is your list of permitted situations closed, rather than open?',
         'Does the brief say what happens to everything else, explicitly?',
         'Is the purpose written down, so the rule survives the person who wrote it?',
         'Does it say who is answerable, in one line?'],

t_title='An assistant and an agent: what acting on your behalf means',
t_fig=figs.split('ASSISTANT AND AGENT',
                 'Assistant — you decide',
                 ['It drafts; you send.',
                  'It extracts; you check.',
                  'It sorts; you read.',
                  'It proposes; you release.'],
                 'Agent — it decides, within limits',
                 ['It replies out of hours.',
                  'It routes without being asked.',
                  'It schedules on your behalf.',
                  'It acknowledges before anybody reads.']),
t_fig_cap='The right-hand column needs limits written in advance. The left-hand column does not.',
t_body=[
 'Decide on purpose, and write down which of the two you are arranging. The difference is '
 'whether anybody sees the output before the world does, and it is worth a sentence in the '
 'brief, because a company that has never said the word agent out loud will become one by '
 'accident about four months after the first convenience is added.',
 'Where something will act, write the permitted situations as a closed list and say '
 'explicitly what happens to everything else. A closed list is safe in a way that a filter '
 'is not: a filter has to anticipate what a bad case looks like, and the bad case is always '
 'the one nobody imagined. Three named categories and silence for everything else cannot be '
 'surprised.',
 'Then write the purpose with so that, because a rule with no stated reason gets removed by '
 'somebody reasonable in about a year. We hold the queue so that a person confirms four '
 'facts. We acknowledge routine messages so that clients do not wait until nine. Both of '
 'those survive the departure of the person who wrote them, and a bare rule does not.'],
t_say=[('Name which it is: ', 'This is an agent: it acts before anybody reads what it says.'),
       ('Close the list: ', 'It may act on three categories. Everything else waits for a person.'),
       ('State the purpose: ', 'We acknowledge out of hours so that clients do not wait until nine.')],
t_bound=('Limits written in advance cannot anticipate the situation nobody imagined, which '
         'is the situation that matters. A closed list narrows the harm; it does not remove '
         'it, and no wording you write today will cover the exchange that arrives in '
         'eighteen months.'),
t_a=[('This is an agent: it acts before anybody ____________ what it says.', 'reads'),
     ('It may act on three categories. Everything else waits for a ____________.', 'person'),
     ('We acknowledge out of hours so that clients do not ____________ until nine.', 'wait'),
     ('A ____________ list is safe in a way that a filter is not.', 'closed'),
     ('The bad case is always the one nobody ____________.', 'imagined'),
     ('A rule with no stated reason gets ____________ in about a year.', 'removed')],
t_b_rubric='Say whether each is an assistant or an agent, and what limit it needs.',
t_b=[('It drafts reminder letters for release.', 'assistant; no standing limits needed beyond the release step'),
     ('It replies to messages outside working hours.', 'agent; a closed list of categories and silence for everything else'),
     ('It routes inbox messages into folders.', 'agent in effect; a default category and a person reading it'),
     ('It books meeting rooms when two people agree a time.', 'agent; a ceiling on what it may book and a rule for conflicts')],

case=dict(
 title='Decision Clinic · Keep the acknowledgement, or turn it off?',
 brief=[
  'The out-of-hours acknowledgement has run for eight weeks. It has answered 412 messages, '
  'of which 408 were routine. Clients mentioned it favourably three times in that period.',
  'In the eighth week it answered a client ending her contract. She did not leave, but she '
  'forwarded the reply to Ines with one line, and has not written outside working hours '
  'since.',
  'Jonas can add a closed category list in a day, which would have left that message '
  'unanswered until nine. Thomas wants it turned off altogether. Fatima points out that '
  'before it existed, clients writing at night waited eleven hours for any reply at all.'],
 exhibit=figs.datatable('EIGHT WEEKS OF OUT-OF-HOURS MESSAGES',
                        ['', 'Messages', 'Acknowledged', 'Outcome'],
                        [['document requests', '231', '231', 'no comment'],
                         ['delivery dates', '114', '114', '3 favourable'],
                         ['password resets', '63', '63', 'no comment'],
                         ['other routine', '3', '3', 'no comment'],
                         ['the contract message', '1', '1', '1 client, badly']]),
 exhibit_cap='Four hundred and eleven invisible successes, and one that was not invisible.',
 exhibit_note='The three favourable mentions were all about speed. Nobody has asked the 408 '
              'clients whether they noticed that the reply was automatic.',
 voices=[('Thomas Reed', 'service delivery',
          'Turn it off. Four hundred and eleven people got a reply they did not need at '
          'midnight, and one person got something she will remember for years.'),
         ('Fatima Zahra', 'client manager',
          'Before this existed, somebody writing at ten at night heard nothing until nine '
          'the next morning. Three clients have said they like it. Nobody has ever thanked '
          'us for silence.'),
         ('Marta Olsen', 'risk and liability',
          'Both of you are arguing about whether to have it. The question is what it may be '
          'allowed to touch, and that is answerable in a day.')],
 steps=[('Find it', 'How many messages, and how many produced any reaction at all?'),
        ('Compare it', 'What does turning it off restore, and what does it cost?'),
        ('Infer it', 'Why does Marta say the argument is about the wrong question?'),
        ('Weigh it', 'Eleven hours of silence against one exchange handled badly.'),
        ('Decide', 'What happens to the acknowledgement, and under what limits?')],
 analysis=[('Find it. How many of the 412 produced any client reaction?', 'four: three favourable and one badly'),
           ('Compare it. What does turning it off restore?', 'eleven hours of silence for clients writing at night'),
           ('Infer it. What is Marta’s reframing?', 'that the question is what the agent may touch, not whether it exists'),
           ('Weigh it. Why is the one bad case not simply outweighed?', 'because its cost is of a different kind, and lasts years rather than minutes'),
           ('Decide. What limit would have prevented the bad case without the cost?', 'a closed list of three routine categories, with silence for everything else')],
 decision='Write the standing instruction for the out-of-hours acknowledgement.',
 decision_steps=['Say in the first line who is answerable for what it sends.',
                 'List the categories it may answer, as a closed list.',
                 'Say what happens to everything else, in those words.',
                 'Write the purpose in a so that clause.'],
 bank=['Arclight is answerable for…', 'It may acknowledge only…',
       'Anything not listed above…', 'This exists so that…',
       'It may never…'],
 outcome='The closed list went in, with silence for everything else, and the first line of '
         'the page says that Arclight is answerable for anything an agent sends in its name. '
         'Over the next six months it acknowledged about 2,900 messages and stayed silent on '
         '94. Four of those 94 turned out to be complaints. Thomas, who wanted it off, says '
         'the list is the right answer and that he still thinks somebody will one day write '
         'something distressing that fits a routine category exactly.',
 outcome_q=[('Why was the closed list better than either original position?', 'it kept the benefit for routine messages and removed the agent from every exchange that might matter'),
            ('What does Thomas’s remaining objection point at?', 'that a closed list classifies by category, not by what the message actually means')],
 tags=[]),

lab=dict(
 title='Brief Lab · The out-of-hours reply',
 task=['This is the brief that created the acknowledgement in January. It was written in '
       'four lines by somebody solving a real problem: clients writing at night and hearing '
       'nothing until nine the next morning.',
       'It does not contain the word agent. Nobody involved thought of it as a decision '
       'about authority, and that is exactly how the line gets crossed.'],
 draft=['Set up an automatic reply for messages that arrive out of hours.',
        'Let clients know we have got their message.',
        'Keep it warm and reassuring.',
        'Send it to anything that comes in after six.',
        'Use the usual sort of wording.',
        'Keep an eye on it for a bit.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A four-line convenience that gave something standing permission to speak for the company.',
 asked=['A closed list of 3 routine categories',
        'Silence for everything else',
        'A named party answerable for what it sends'],
 back=['Every out-of-hours message answered',
       'Warm wording applied to a cancellation',
       'No statement of who answers for it'],
 gap='"Anything that comes in after six" is an open set, "warm and reassuring" is applied '
     'before anybody knows what the message says, and nothing names who is answerable when '
     'it goes wrong.',
 back_cap='Four hundred and twelve replies, one of which thanked a client for leaving.',
 back_note='The brief never asked whether this was an assistant or an agent. The distinction '
           'did not come up until the eighth week, when it came up all at once.',
 diagnosis=[('[1] "messages that arrive out of hours" — which messages, of what kind?', 'unstated criterion'),
            ('[2] "keep it warm and reassuring" — even when the message is not?', 'missing condition'),
            ('[3] "anything that comes in after six" — how many kinds is anything?', 'unbounded quantity'),
            ('[4] "the usual sort of wording" — usual by what standard?', 'unstated criterion'),
            ('[5] "keep an eye on it for a bit" — for how long?', 'unbounded quantity'),
            ('[6] "set up an automatic reply" — and when it answers badly, who answers?', 'missing condition')],
 rewrite='Rewrite the brief so that the permitted situations are a closed list, everything '
         'else is met with silence, and somebody is named as answerable.',
 scaffold=['Why clients should not wait until nine, in one clause',
           'The categories it may answer, and the explicit treatment of everything else',
           'The inbox and the acknowledgement template, both named',
           'What a reply may say, and what it may never refer to',
           'What comes back in the morning, and by when',
           'What happens to a message that matches no category'],
 bank=['Acknowledge … so that …', 'It may answer only … ; anything else …',
       'Work from … and template …', 'A reply states … ; it may never …',
       'Return … by … .', 'If a message matches no category, …'],
 check=['Is the list of permitted situations closed?',
        'Does the brief say that silence is the intended behaviour for everything else?',
        'Is there a line naming who is answerable?',
        'Does the purpose appear in a so that clause?'],
 model=['Acknowledge routine out-of-hours messages so that clients do not wait until 09:00 for any reply at all',
        'Messages matching 1 of 3 routine categories: a request for a document already sent, a delivery date, or a password reset; everything else waits for a person',
        'The shared inbox and acknowledgement template version 1 dated 14 January',
        'Arclight is answerable for anything sent in its name; 1 acknowledgement per message, stating only that a person will reply by 10:00; the reply may never refer to the content of the message',
        '1 sent count by 09:00 each morning, with a list of every message left unanswered',
        'If a message matches none of the 3 categories, send nothing at all; silence until 09:00 is the intended behaviour and not a failure'],
 cost='412 replies in 8 weeks, 1 of them thanking a client for a message ending her contract, '
      '1 client who has not written outside office hours since, and 8 weeks during which '
      'nobody had decided who answered for what it said.'),

rev_fig=figs.split('PURPOSE AND RESULT',
                   'Purpose — so that, in order to',
                   ['We hold it so that Fatima can check.',
                    'We log items in order to trace faults.',
                    'We name the owner so that it can be reviewed.',
                    'We acknowledge so that nobody waits.'],
                   'Result — so ... that',
                   ['It was so vague that four readings fitted.',
                    'It failed so quietly that it lasted two days.',
                    'The check got so fast that nothing was checked.',
                    'The letter was so long that nobody read it.']),
rev_fig_cap='Book 2 in one picture: the left column is why, and it is the column that gets left out.',
rev=dict(
 read=[('An agent differs from an assistant in that it', ['is cleverer', 'acts without being asked each time', 'is faster', 'costs more'], 1),
       ('"So that" introduces', ['a result', 'a purpose', 'a condition', 'a contrast'], 1),
       ('Limits on an agent should be written as', ['a word filter', 'a closed list of situations', 'a tone of voice', 'a time of day'], 1),
       ('In the Clinic, the first line of the page states', ['the categories', 'who is answerable', 'the hours', 'the template'], 1)],
 listen_text='Two things to close the book. Decide on purpose whether you are arranging an '
             'assistant or an agent, because a company that never says the word becomes one '
             'by accident. And where something acts for you, write the permitted situations '
             'as a closed list, say that everything else waits for a person, and name who is '
             'answerable, because under pressure somebody will say the system did it.',
 listen=[('Decide on purpose whether you are arranging an assistant or an ____________.', 'agent'),
         ('Write the permitted situations as a ____________ list.', 'closed'),
         ('Everything else waits for a ____________.', 'person'),
         ('Somebody will say the ____________ did it.', 'system')],
 speak=['Name something that acts for you without asking. Your partner invents the worst message it could meet.',
        'Decide together whether your limits cover it.'],
 write='Write a standing instruction with a closed list, a purpose clause and an answerability line.',
 vocab=[('An instruction that applies until withdrawn is a ____________.', 'standing instruction'),
        ('The party on whose behalf an agent acts is the ____________.', 'principal'),
        ('The upper limit of what may be done without approval is the ____________.', 'ceiling'),
        ('Running without anybody watching is ____________.', 'unattended'),
        ('To step in and change what would otherwise happen is to ____________.', 'intervene')],
 gram=[('We hold the queue ____________ that a person can check it.', 'so'),
       ('We log each item in ____________ to trace a failure.', 'order'),
       ('The brief was ____________ vague that four readings were possible.', 'so'),
       ('It got so fast ____________ nothing was being checked.', 'that'),
       ('We name the owner ____________ that the grant can be reviewed.', 'so')]),

found=['Decide, for one arrangement at your work, whether it is an assistant or an agent.',
       'Write the closed list of situations in which it may act.',
       'Write one line saying who is answerable when it acts and is wrong.',
       'Add a so that clause to a rule somebody might otherwise remove.'],
end_line='Nobody held a meeting about it. It was a convenience, and it worked for seven weeks.',
end_next='Next: Book 3, Checking and Quality',
)
