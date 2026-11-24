# -*- coding: utf-8 -*-
import figs

U = dict(
num=1, title='Answered in Seconds',
gram='register shifting: the same point for a citizen and for a note',
ai='consular enquiries at volume: triage that answers in seconds',
strap='CEFR C1 · Grammar: register shifting · AI: answered in seconds',
cando=['state the same point in two registers without altering its content',
       'move between plain language for a citizen and formal language for a note',
       'say what triage at volume can decide and what it must refer',
       'design a triage rule whose failures are visible rather than silent',
       'write a triage tasking in which the error that matters is the one that is caught'],
hero=('EIGHT THOUSAND ENQUIRIES A MONTH',
      ['Seven thousand six hundred of them have one of nine answers.',
       'The other four hundred are the reason the section exists.'],
      [(730, 'teal', 'long'), (1390, 'orange', 'short'),
       (2050, 'blue', 'long'), (2690, 'purple', 'short')]),
hero_cap='Consular Affairs, on a Monday in August, which is the worst week of the year.',

warm=['How many of the questions your office receives have the same answer?',
      'What is the cost of answering a routine question slowly?',
      'What is the cost of answering an unusual question as though it were routine?'],
read=[
 'Rana Deeb’s section receives about eight thousand consular enquiries a month, rising by half '
 'again in August, and has eleven officers. Before this year the median first response took '
 'four days and the section’s own estimate was that two in five enquiries never received a '
 'substantive reply at all.',
 'Of the eight thousand, something close to seven thousand six hundred fall into nine '
 'categories, each with an answer that has not changed in years: how a passport is renewed '
 'abroad, what documents a birth registration requires, whether a marriage certificate needs '
 'legalisation, and six others of the same kind. These are not trivial questions to the person '
 'asking, and the answers are nevertheless identical from one asker to the next.',
 'Since February a triage step has classified every incoming enquiry and answered the nine '
 'categories directly, in the language the enquiry arrived in, citing the relevant published '
 'requirement. The median first response is now eleven minutes. Officers see the remaining '
 'four hundred, which is approximately the number eleven people can actually handle.',
 'The design decision that made this defensible was not the classification. It was the rule '
 'about uncertainty: where the step cannot place an enquiry in one of the nine categories with '
 'confidence, it does not guess and does not send a general answer. It sends an acknowledgement '
 'naming a human officer and a time, and puts the case in front of that officer.',
 'Rana had initially resisted the acknowledgement, on the ground that a citizen in difficulty '
 'wants an answer rather than a promise, and that promising a reply within a stated time '
 'created an obligation the section might not meet in August. She was persuaded by the '
 'arithmetic: an unanswered enquiry and a general answer to a particular question both produce '
 'a second enquiry, and the second enquiry arrives angry.'],
c_a=[('How many enquiries does the section receive, and with how many officers?', 'about eight thousand a month, with eleven officers'),
     ('What was the position before?', 'a median first response of four days, and two in five never substantively answered'),
     ('How many enquiries fall into nine categories?', 'close to seven thousand six hundred'),
     ('What is the median first response now?', 'eleven minutes'),
     ('What is the rule about uncertainty?', 'where the step cannot classify with confidence it sends an acknowledgement naming an officer and a time'),
     ('What persuaded Rana?', 'that an unanswered enquiry and a general answer both produce a second, angrier enquiry')],
c_b=[('The nine categories are trivial to the people asking.', 'F'),
     ('Officers now see about four hundred cases a month.', 'T'),
     ('The step guesses where it cannot classify.', 'F'),
     ('Rana proposed the acknowledgement.', 'F'),
     ('August is the busiest month.', 'T'),
     ('The answers in the nine categories vary by asker.', 'F')],
c_c=[('Rising by half again in ____________.', 'August'),
     ('Two in five enquiries never received a ____________ reply.', 'substantive'),
     ('Citing the relevant published ____________.', 'requirement'),
     ('The number eleven people can actually ____________.', 'handle'),
     ('It sends an acknowledgement naming a human officer and a ____________.', 'time'),
     ('The second enquiry arrives ____________.', 'angry')],
c_d=[('The important design decision was the rule about ( classification / uncertainty ).', ['classification', 'uncertainty'], 1),
     ('How many categories cover most enquiries?', ['four', 'nine', 'eleven', 'forty'], 1),
     ('What was the median first response before February?', ['eleven minutes', 'four days', 'two weeks', 'an hour'], 1),
     ('What does the acknowledgement name?', ['a category', 'an officer and a time', 'a requirement', 'a reference only'], 1),
     ('What was Rana’s original objection?', ['the cost', 'that a promise creates an obligation', 'the language', 'the classification'], 1)],
c_e=('Match each formulation to its register.',
     [('You will need two documents.', 'to a citizen'),
      ('The applicant is required to produce two documents.', 'in a note'),
      ('We cannot do this for you, but here is who can.', 'to a citizen'),
      ('The Ministry is not competent in this matter.', 'in a note'),
      ('I am sorry; this will take about three weeks.', 'to a citizen'),
      ('The procedure requires approximately three weeks.', 'in a note')],
     ['to a citizen', 'in a note']),

v_fig_title='THE SHAPE OF A CASELOAD',
v_fig=[('envelope', 'a consular enquiry'), ('clock', 'a response time'), ('doc', 'a case reference'),
       ('key', 'a triage rule'), ('shield', 'an escalation threshold'), ('people', 'a duty officer')],
v_fig_cap='Six words for the apparatus between eight thousand people and eleven officers.',
vocab=[
 ('a consular enquiry', 'a request for help or information from a citizen abroad'),
 ('a routine enquiry', 'an enquiry whose answer does not depend on the particular case'),
 ('an emergency case', 'a case in which delay itself causes harm'),
 ('a caseload', 'the body of cases an officer or section is carrying'),
 ('a waiting list', 'the ordered set of cases not yet reached'),
 ('a response time', 'the interval between an enquiry and a reply'),
 ('a first response', 'the first reply of any kind that the enquirer receives'),
 ('a substantive reply', 'a reply that answers the question asked'),
 ('an interim reply', 'a reply that reports progress without answering'),
 ('an acknowledgement', 'a reply confirming receipt and naming what happens next'),
 ('a case reference', 'the number by which a case is identified in correspondence'),
 ('a triage rule', 'the rule by which incoming cases are sorted'),
 ('an escalation threshold', 'the point at which a case must go to a person'),
 ('a duty officer', 'the officer responsible for cases outside office hours'),
 ('an out-of-hours line', 'the channel by which urgent cases reach the Ministry at night'),
 ('a volume of enquiries', 'the number of enquiries received in a period'),
 ('a seasonal peak', 'the predictable rise in volume at a time of year'),
 ('a standard answer', 'the agreed reply to a recurring question'),
 ('a tailored answer', 'a reply written for one case'),
 ('a misrouted case', 'a case sent to the wrong officer or section')],
v_a=[('A reply confirming receipt and naming what happens next is an ____________.', 'acknowledgement'),
     ('The point at which a case must go to a person is an ____________.', 'escalation threshold'),
     ('The predictable rise in volume at a time of year is a ____________.', 'seasonal peak'),
     ('A case in which delay itself causes harm is an ____________.', 'emergency case'),
     ('A reply that reports progress without answering is an ____________.', 'interim reply'),
     ('The officer responsible for cases outside office hours is a ____________.', 'duty officer'),
     ('The rule by which incoming cases are sorted is a ____________.', 'triage rule'),
     ('An enquiry whose answer does not depend on the case is a ____________.', 'routine enquiry')],
v_b=[('A consular enquiry is a request for help or information', 'from a citizen abroad.'),
     ('A substantive reply is a reply that answers', 'the question asked.'),
     ('A caseload is the body of cases', 'an officer or section is carrying.'),
     ('A misrouted case is a case sent', 'to the wrong officer or section.'),
     ('An out-of-hours line is the channel by which', 'urgent cases reach the Ministry at night.')],

g_title='Grammar: register shifting',
g_rule=['The same content can be stated for a citizen and for a note; only the register moves.',
        'To a citizen: short clauses, you as subject, concrete nouns, an apology where one is '
        'owed.',
        'In a note: nominalisation, the passive, the third person, no apology and no promise '
        'that is not an undertaking.',
        'Shifting register must not shift content: if the formal version concedes more, the '
        'shift has failed.'],
g_fig=('LOOSE',
       ['Unfortunately the Ministry regrets that your application cannot be processed.',
        'You are hereby informed that documents are required.',
        'We are sorry to advise that the competent authority is not the Ministry.',
        'Kindly be advised it will take three weeks approximately.'],
       'PRECISE',
       ['I am sorry: we cannot process your application until the registry reopens on 3 '
        'September.',
        'You will need two documents: your birth certificate and the original marriage '
        'certificate.',
        'This is decided by the civil registry and not by the Ministry; here is how to reach '
        'them.',
        'This usually takes three weeks. I will write to you by 24 March whatever has '
        'happened.'],
       'four mixtures of formal and plain, apologising formally and helping nobody',
       'four plain-register replies, each with the fact and the next step'),
g_fig_cap='Formal politeness to a citizen in difficulty reads as evasion, which is how it is '
          'usually meant.',
g_a=[('____________ sorry: we cannot process your application until 3 September.', 'I am'),
     ('____________ will need two documents.', 'You'),
     ('This is decided by the civil ____________ and not by the Ministry.', 'registry'),
     ('I will write to you ____________ 24 March whatever has happened.', 'by'),
     ('The applicant is ____________ to produce two documents.', 'required'),
     ('The Ministry is not ____________ in this matter.', 'competent'),
     ('The procedure requires ____________ three weeks.', 'approximately'),
     ('Here is ____________ to reach them.', 'how'),
     ('No undertaking ____________ be given as to the outcome.', 'can')],
g_b=[('Shifting register must not shift ( content / length ).', ['content', 'length'], 0),
     ('To a citizen, the subject should usually be', ['the Ministry', 'you', 'the applicant', 'the procedure'], 1),
     ('In a note, an apology is', ['required', 'not used', 'doubled', 'implied'], 1),
     ('Which is plain register?', ['You are hereby informed', 'You will need two documents', 'Kindly be advised', 'It is regretted'], 1),
     ('If the formal version concedes more, the shift has', ['succeeded', 'failed', 'no effect', 'been shortened'], 1),
     ('Which belongs in a note?', ['I am sorry', 'The Ministry is not competent in this matter', 'Here is how to reach them', 'I will write by 24 March'], 1)],

d1=dict(title='A promise we might not keep',
        fig=(['An acknowledgement naming a time.', 'And in August we will miss it.'],
             ['Then name a time you will meet.', 'In August there is no such time.']),
        cap='Rana Deeb and Karim Dalati, in February.',
        lines=[('Karim', 'Where the step cannot classify an enquiry, it should send an '
                         'acknowledgement naming an officer and a date.'),
               ('Rana', 'Which commits me to a date. In August I receive twelve thousand '
                        'enquiries with eleven officers, and I will miss it.'),
               ('Karim', 'What happens now, in August, to an enquiry you cannot reach?'),
               ('Rana', 'Nothing happens to it. That is the honest answer and it is why I am '
                        'cautious about promising anything.'),
               ('Karim', 'So the choice is between a promise you may break and a silence you '
                         'certainly will not keep.'),
               ('Rana', 'That is a better way of putting it than I would have accepted a month '
                        'ago. My objection is about the citizen’s expectation. A date creates '
                        'an expectation and a missed date creates a complaint.'),
               ('Karim', 'And silence creates a second enquiry, which you also cannot answer, '
                         'and then a complaint, and the complaint takes an officer forty '
                         'minutes instead of four.'),
               ('Rana', 'I have the arithmetic. Two in five enquiries never received a '
                        'substantive answer last year and we received eleven hundred '
                        'complaints, almost all of them from people who had written twice.'),
               ('Karim', 'Then the acknowledgement is not a courtesy. It is the thing that stops '
                         'the second enquiry.'),
               ('Rana', 'Provided the date is one I can meet. I will name fourteen days in '
                        'August and five in February, which is ugly and honest.'),
               ('Karim', 'Ugly and honest is the whole of consular work.'),
               ('Rana', 'Then write it that way, and put the seasonal figure in the rule rather '
                        'than in my head.')],
        a=[('What does Karim propose for unclassifiable enquiries?', 'an acknowledgement naming an officer and a date'),
           ('What is Rana’s objection?', 'that a date commits her and she will miss it in August'),
           ('What happens now to an enquiry she cannot reach?', 'nothing'),
           ('What does silence produce?', 'a second enquiry, then a complaint that takes forty minutes instead of four'),
           ('What does Rana decide about the date?', 'to name fourteen days in August and five in February')],
        b=[('Twelve thousand enquiries with ____________ officers.', 'eleven'),
           ('A missed date creates a ____________.', 'complaint'),
           ('Almost all of them from people who had written ____________.', 'twice'),
           ('Ugly and ____________ is the whole of consular work.', 'honest')]),
d2=dict(title='The same point, twice',
        fig=(['The Ministry is not competent.', 'To a citizen?'],
             ['This is decided by the registry.', 'And here is how to reach them.']),
        cap='Rana and Omar Nasri, on the standard answers.',
        lines=[('Omar', 'Standard answer four says the Ministry is not competent in this matter '
                        'and that the applicant should approach the competent authority.'),
               ('Rana', 'Which is correct and tells a woman in Kavara with a sick child '
                        'precisely nothing.'),
               ('Omar', 'It is the wording from the note we send to posts.'),
               ('Rana', 'And in a note it is right. A note is read by somebody who knows what a '
                        'competent authority is and has a list of them on the wall. The same '
                        'sentence to a citizen is a door closing.'),
               ('Omar', 'So the content stays and the register moves.'),
               ('Rana', 'The content stays exactly. This is decided by the civil registry and '
                        'not by the Ministry: here is the address, the opening hours and what to '
                        'take with you.'),
               ('Omar', 'That is four facts the note does not contain.'),
               ('Rana', 'It is four facts the note does not need and the citizen cannot act '
                        'without. That is what register means in this work: not politeness, but '
                        'what the reader is able to do next.'),
               ('Omar', 'There is a trap in it. Writing warmly to a citizen invites you to '
                        'promise something.'),
               ('Rana', 'Which is the one rule that never bends. Plain language, concrete next '
                        'step, and no undertaking the Ministry cannot give. I am sorry is '
                        'allowed. We will sort this out is not.')],
        a=[('What does standard answer four say?', 'that the Ministry is not competent and the applicant should approach the competent authority'),
           ('Why is that right in a note?', 'because a note is read by somebody who knows what a competent authority is'),
           ('What does the citizen version add?', 'the address, the opening hours and what to take'),
           ('What does register mean in this work?', 'not politeness but what the reader is able to do next'),
           ('What is the rule that never bends?', 'no undertaking the Ministry cannot give')],
        b=[('A door ____________.', 'closing'),
           ('The content stays ____________.', 'exactly'),
           ('What the reader is able to do ____________.', 'next'),
           ('I am sorry is allowed. We will sort this out is ____________.', 'not')]),

speak=[('Same point, two registers',
        ['Student A: state a fact from your work plainly, to a member of the public.',
         'Student B: state the identical content as it would appear in a formal note.',
         'Check that neither version concedes more than the other.']),
       ('Nine answers',
        ['List the questions your office answers most often.',
         'Say how many have an answer that does not depend on the asker.',
         'Say what you would do with the remainder.']),
       ('The date you can meet',
        ['Name a realistic time by which you could reply to a difficult request.',
         'Your partner asks what happens in your busiest month.',
         'Revise the time so that it holds in that month too.'])],

ext_title='Triage at volume is defensible only if the uncertain case is routed to a person rather than answered generally',
ext_fig=figs.datatable('EIGHT THOUSAND ENQUIRIES',
                       ['', 'Before', 'After'],
                       [['median first response', '4 days', '11 minutes'],
                        ['enquiries with no substantive reply', '2 in 5', '1 in 40'],
                        ['cases reaching an officer', 'all, in theory', '~400'],
                        ['answered directly by category', '0', '~7,600'],
                        ['acknowledgements naming an officer', '0', '~450'],
                        ['complaints received', '1,100 a year', '260 a year']]),
ext_fig_cap='Every row improved, and the fifth row is the one that made the second row possible.',
ext=[
 'Consular work is the part of a foreign ministry that operates at a volume no other part '
 'recognises. A section of eleven officers receiving eight thousand enquiries a month cannot '
 'give each one the attention a case deserves, and the historical response to that arithmetic '
 'was not a system but an informal one: the officers answered what they could reach, and the '
 'rest waited, and a substantial proportion were never answered at all.',
 'The great majority of those enquiries have answers that do not depend on the person asking. '
 'How a passport is renewed abroad, what a birth registration requires, whether a certificate '
 'needs legalisation: these are not trivial questions to the person asking, and the answers '
 'are nevertheless the same from one asker to the next, published, and unchanged for years. '
 'Classifying an incoming enquiry into one of nine such categories and answering it directly, '
 'in the language it arrived in, is the single largest improvement in service that this '
 'capability has produced anywhere in a foreign ministry.',
 'What makes it defensible rather than reckless is a rule about the cases it cannot place. '
 'There are two ways to handle an enquiry that does not fit: guess at the nearest category, or '
 'send a general answer that covers several. Both are catastrophic in consular work, because '
 'the enquiry that does not fit is disproportionately the one that matters: the detained '
 'citizen, the missing relative, the document that is required for a funeral on Thursday. The '
 'rule that works is that uncertainty produces an acknowledgement naming a human officer and '
 'a date, and the case goes to that officer.',
 'The acknowledgement is resisted in most sections, on a reasonable ground: a named date is an '
 'obligation, and a missed date generates a complaint. The arithmetic answers it. An '
 'unanswered enquiry produces a second enquiry and then a complaint, and a complaint costs an '
 'officer ten times what the original enquiry would have cost. A date that can be met in the '
 'section’s worst month is worth more than a date that flatters the section in March.',
 'Register is the other half of the work and is widely underestimated. The same content has to '
 'be said to a citizen and in a note, and only the register moves. The Ministry is not '
 'competent in this matter is correct in a note to a post and is a door closing to a woman '
 'with a sick child; this is decided by the civil registry, and here is the address and what '
 'to take, is the same content and is actionable. The rule that must not bend is that plain '
 'language licenses no undertaking the Ministry cannot give: an apology is permitted, a '
 'reassurance is not.'],
dp1=('Consular triage',
     'Consular services in several foreign ministries introduced automated triage and direct '
     'answering of routine categories in 2025, with mandatory routing of unclassifiable cases '
     'to a named officer; reported first-response times fell from days to minutes.',
     'Source: reported practice in consular services, 2025–2026.'),
e_a=[('Why is consular work different in kind?', 'because it operates at a volume no other part of a ministry recognises'),
     ('What was the historical response to the arithmetic?', 'officers answered what they could reach and the rest waited'),
     ('What makes direct answering defensible?', 'a rule that uncertainty produces an acknowledgement naming an officer and a date'),
     ('Why is the misfit case disproportionately important?', 'because it is the detained citizen, the missing relative, the urgent document'),
     ('What must not bend in plain register?', 'that no undertaking the Ministry cannot give may be offered')],
e_b=[('Most consular enquiries have individual answers.', 'F'),
     ('A general answer is a safe response to a misfit case.', 'F'),
     ('A complaint costs about the same as an enquiry.', 'F'),
     ('A date should flatter the section.', 'F'),
     ('Register shifting changes the content.', 'F'),
     ('An apology is permitted to a citizen.', 'T')],

w_model=(
 'Purpose: classify every incoming consular enquiry and answer the 9 published categories '
 'directly, so that officers see only the cases that require a person. Scope: enquiries '
 'received through the consular mailbox and the web form; the out-of-hours line is out of '
 'scope and reaches the duty officer unclassified. Inputs: the enquiry as received and the 9 '
 'published standard answers. Criteria: reply in the language of the enquiry; cite the '
 'published requirement; where the enquiry cannot be placed in 1 of the 9 categories with '
 'confidence, send no substantive answer and instead send an acknowledgement naming the '
 'officer and a date within 14 days; where an enquiry mentions detention, death, a missing '
 'person or a medical emergency, route it to the duty officer within 5 minutes whatever its '
 'classification. Done: 1 reply or acknowledgement per enquiry within 15 minutes of receipt, '
 'and a daily list of routed cases. Fallback: where the language of the enquiry cannot be '
 'identified, send the acknowledgement in both official languages and route the case.'),
w_fig=figs.spec_card('THE TASKING FOR CONSULAR TRIAGE',
                     [('Purpose', 'officers see only the cases that need a person'),
                      ('Scope', 'mailbox and web form; the out-of-hours line excluded'),
                      ('Inputs', 'the enquiry and the 9 published standard answers'),
                      ('Criteria', 'the enquiry’s language; no guess; 4 words route immediately'),
                      ('Done', '1 reply or acknowledgement within 15 minutes, plus a daily list'),
                      ('Fallback', 'language unidentifiable: both languages and route')]),
w_fig_cap='Detention, death, a missing person, a medical emergency: four words that override every classification.',
w_task='Write a triage tasking for the enquiries your own office receives.',
w_steps=['Say what the officers are to be left with.',
         'Name the channels covered and those excluded.',
         'Forbid a guess and forbid a general answer.',
         'Name the words that override classification.',
         'Say what happens when the language cannot be identified.'],
w_bank=['Classify … and answer … directly, so that …',
        'Cover … ; … is out of scope and …',
        'Work from … and …',
        'Reply in … ; cite … ; where … cannot be placed … , send no … and instead … ; where an enquiry mentions … , route it … whatever …',
        'Where … cannot be identified, … and route …'],
w_check=['Is guessing a category forbidden?',
         'Is a general answer forbidden as a response to uncertainty?',
         'Do the emergency words override classification?',
         'Is the acknowledgement date one the section can meet in its worst month?'],

t_title='Triage that answers in seconds',
t_fig=figs.split('EIGHT THOUSAND ENQUIRIES',
                 'Answerable by category',
                 ['how a passport is renewed abroad',
                  'what a birth registration needs',
                  'whether a certificate needs legalisation',
                  '6 more of the same kind'],
                 'Must reach a person',
                 ['a detained citizen',
                  'a missing relative',
                  'a document needed for Thursday',
                  'anything the rule cannot place']),
t_fig_cap='Ninety-five per cent on the left, and the section exists for the right.',
t_body=[
 'Eleven officers and eight thousand enquiries a month is an arithmetic that has never been '
 'answered honestly. Officers answered what they could reach and the rest waited, and two in '
 'five were never answered at all, which is the true state of consular work in most '
 'ministries and is not usually written down.',
 'Most of those enquiries have answers that do not depend on the asker, are published, and '
 'have not changed in years. Classify an enquiry into one of nine such categories, answer it '
 'in the language it arrived in and cite the published requirement, and a median first '
 'response of four days becomes eleven minutes. There is no serious argument against this and '
 'it is the largest improvement in service the capability has produced anywhere in a ministry.',
 'The whole of the risk sits in the cases that do not fit, because in consular work the misfit '
 'case is disproportionately the one that matters: the detention, the death, the document '
 'needed for a funeral. So forbid the two natural responses, which are to guess at the nearest '
 'category and to send a general answer covering several. Uncertainty produces an '
 'acknowledgement naming an officer and a date the section can meet in August, and the case '
 'goes to that officer. Expect the date to be resisted, and answer with the arithmetic: '
 'silence produces a second enquiry and then a complaint that costs ten times the original. '
 'Then watch the register, because plain language to a citizen invites a reassurance, and an '
 'apology is permitted where an undertaking is not.'],
t_say=[('Forbid the guess: ', 'Where it cannot be placed, send no substantive answer.'),
       ('Name the override: ', 'Detention, death, a missing person, a medical emergency: route in 5 minutes.'),
       ('Hold the register: ', 'I am sorry is allowed; we will sort this out is not.')],
t_bound=('Triage can place an enquiry in a published category and can answer it. It cannot '
         'recognise the case that is unlike anything it has seen, which is the case the section '
         'exists for, and a general answer to such an enquiry is worse than no answer because '
         'it looks like a reply. Everything depends on what happens to the cases the rule '
         'cannot place.'),
t_a=[('Where it cannot be placed, send no ____________ answer.', 'substantive'),
     ('Detention, death, a missing person, a medical ____________.', 'emergency'),
     ('I am sorry is allowed; we will ____________ this out is not.', 'sort'),
     ('Two in five were never answered at ____________.', 'all'),
     ('The misfit case is disproportionately the one that ____________.', 'matters'),
     ('A complaint that costs ____________ times the original.', 'ten')],
t_b_rubric='Rewrite each for a citizen, keeping the content exactly.',
t_b=[('The Ministry is not competent in this matter.', 'this is decided by the civil registry and not by the Ministry; here is how to reach them'),
     ('The applicant is required to produce two documents.', 'you will need two documents: your birth certificate and the original marriage certificate'),
     ('The procedure requires approximately three weeks.', 'this usually takes about three weeks; I will write to you by 24 March whatever has happened'),
     ('It is regretted that processing cannot be undertaken at present.', 'I am sorry: we cannot process this until the registry reopens on 3 September')],

case=dict(
 title='The Decision Room · The date in August',
 brief=[
  'The acknowledgement names a date. The section has set it at 14 days, which it met in 94 per '
  'cent of cases from February to June.',
  'In August the section received 12,400 enquiries and met the 14-day date in 61 per cent of '
  'routed cases. It received 140 complaints about missed dates, where in the previous August it '
  'received 410 complaints about silence.',
  'Rana, who had argued against naming a date at all, must decide what the date says in '
  'August. Karim wants 14 days all year. Maya Sarkis asks what the officers were told to say '
  'when they missed it.'],
 exhibit=figs.datatable('THE 14-DAY DATE',
                        ['', 'Feb–Jun', 'August'],
                        [['routed cases', '~1,900', '~1,100'],
                         ['date met', '94 per cent', '61 per cent'],
                         ['complaints about a missed date', '18', '140'],
                         ['complaints about silence', '0', '0'],
                         ['complaints in August 2024', '—', '410, all silence'],
                         ['officer time per complaint', '40 minutes', '40 minutes']]),
 exhibit_cap='A hundred and forty complaints about a broken promise, against four hundred and '
             'ten about nothing at all.',
 exhibit_note='No officer had been given wording for a missed date; each wrote their own.',
 voices=[('Karim Dalati', 'Information Security and Records',
          'Keep 14 days all year. A hundred and forty complaints is a quarter of what silence '
          'cost, and a varying date is a date nobody can quote back to us.'),
         ('Rana Deeb', 'Consular Affairs',
          'I said in February that I would name 14 days in August and 5 in February, and I did '
          'not, because a single number was easier to publish. The 140 are mine.'),
         ('Maya Sarkis', 'the Diplomatic Institute',
          'Before you change the number, look at what the officers wrote when they missed it. '
          'There was no agreed wording, so 1,100 citizens received 1,100 different '
          'explanations, some of them promising a second date.')],
 steps=[('Find it', 'What did silence cost in the previous August?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Maya look at the missed-date wording?'),
        ('Weigh it', 'A quotable single date against a date that holds in August.'),
        ('Decide', 'What does the acknowledgement say, and what happens when it is missed?')],
 analysis=[('Find it. How many complaints did silence produce in August 2024?', 'four hundred and ten'),
           ('Compare it. What does Rana now say?', 'that she should have named a seasonal date and the hundred and forty are hers'),
           ('Infer it. What did Maya find?', 'that there was no agreed wording for a missed date, so each officer wrote their own'),
           ('Weigh it. What does a complaint cost?', 'forty minutes of officer time'),
           ('Decide. What would you do?', 'answers vary; a seasonal date plus agreed missed-date wording addresses both failures')],
 decision='Write what the acknowledgement promises and what happens when it is missed.',
 decision_steps=['Say what date the acknowledgement names, and whether it varies.',
                 'Say what is sent when the date is missed, and by whom.',
                 'Say whether a second date may be promised.',
                 'Say what is measured each month.'],
 bank=['The acknowledgement names …',
       'Where the date is missed, … sends …',
       'A second date …',
       'Each month the section measures …',
       'This is reviewed …'],
 outcome='The date became seasonal: five working days from October to June and twenty-one in '
         'July, August and September, published on the web form so that nobody could claim to '
         'have been told otherwise. Agreed wording was written for a missed date, which '
         'apologises, states the current position and names a second date, and the second date '
         'may be named once only. The following August the section met the twenty-one-day date '
         'in 97 per cent of cases and received 31 complaints. Karim, who had argued for a single '
         'figure, says the seasonal date was right and that his argument about quotability was '
         'answered by publishing it, which he had not thought of.',
 outcome_q=[('What did the date become?', 'five working days from October to June and twenty-one in July to September, published'),
            ('What does the missed-date wording do?', 'apologises, states the position and names a second date, once only')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Answer the consular mailbox',
 task=['This is the instruction the section worked to in January, before triage, in the form in '
       'which it had stood for years.',
       'It was followed, and two in five enquiries received no substantive answer.'],
 draft=['Answer the consular mailbox.',
        'Deal with the urgent ones first.',
        'Use the standard answers where they fit.',
        'Reply as soon as you can.',
        'Refer anything difficult upwards.',
        'Keep on top of the volume.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines that describe a section coping, which is not the same as a rule.',
 asked=['Every enquiry answered or acknowledged',
        'The nine categories answered directly',
        'Emergency words overriding classification'],
 back=['Officers answering what they could reach',
       '2 in 5 enquiries never answered',
       'Urgency judged case by case, from the subject line'],
 gap='"The consular mailbox" does not bound the channels, "the urgent ones" leaves urgency to '
     'whoever opens the message, "where they fit" sets no test of fit, and "keep on top of the '
     'volume" is an aspiration rather than a rule.',
 back_cap='A section doing its best, with no rule that could be audited and no record of what '
          'was left.',
 back_note='Line two is the failure. Urgency decided from a subject line by a tired officer is '
           'the step at which a detention becomes a document query.',
 diagnosis=[('[1] "the consular mailbox" — which channels, and the out-of-hours line too?', 'unscoped set'),
            ('[2] "the urgent ones" — urgent by what test, and how many?', 'unbounded quantity'),
            ('[3] "where they fit" — fit judged how, and what if nothing fits?', 'undefined done'),
            ('[4] "as soon as you can" — within what time, and what counts as a reply?', 'undefined done'),
            ('[5] "anything difficult" — how many a day, and to whom?', 'unbounded quantity'),
            ('[6] "keep on top of the volume" — what volume, over what period?', 'unscoped set')],
 rewrite='Rewrite the instruction as a triage rule in which no enquiry is left unanswered.',
 scaffold=['What officers are to be left with',
           'The channels covered and excluded',
           'The enquiry and the published standard answers',
           'Language, citation, no guess, emergency override',
           'A reply or acknowledgement per enquiry, within a stated time',
           'What to do where the language cannot be identified'],
 bank=['Classify … and answer … , so that …',
       'Cover … ; … is out of scope …',
       'Work from … and …',
       'Reply in … ; cite … ; where … , send no … and instead … ; where an enquiry mentions … , route …',
       'Return 1 … per enquiry within … , and …',
       'Where … , … and route …'],
 check=['Is every enquiry answered or acknowledged?',
        'Is urgency decided by named words rather than by judgement?',
        'Is a general answer forbidden for an unplaceable enquiry?',
        'Is the response time a number?'],
 model=['Classify every incoming consular enquiry and answer the 9 published categories directly, so that officers see only the cases that require a person',
        'Enquiries received through the consular mailbox and the web form; the out-of-hours line is out of scope and reaches the duty officer unclassified',
        'The enquiry as received and the 9 published standard answers',
        'Reply in the language of the enquiry; cite the published requirement; where the enquiry cannot be placed in 1 of the 9 categories with confidence, send no substantive answer and instead send an acknowledgement naming the officer and a date within 14 days; where an enquiry mentions detention, death, a missing person or a medical emergency, route it to the duty officer within 5 minutes whatever its classification',
        '1 reply or acknowledgement per enquiry within 15 minutes of receipt, and a daily list of routed cases',
        'Where the language of the enquiry cannot be identified, send the acknowledgement in both official languages and route the case'],
 cost='2 in 5 enquiries a year receiving no substantive answer, 1,100 complaints, and an '
      'unknown number of serious cases triaged from a subject line by an officer with 600 '
      'messages waiting.'),

rev_fig=figs.split('REGISTER',
                   'To a citizen',
                   ['I am sorry: we cannot do this until …',
                    'You will need two documents.',
                    'This is decided by the registry; here is …',
                    'I will write to you by 24 March.'],
                   'In a note',
                   ['Processing cannot be undertaken until …',
                    'The applicant is required to produce …',
                    'The Ministry is not competent in this matter.',
                    'A reply will be furnished in due course.']),
rev_fig_cap='Same content, two registers, and no undertaking in either that cannot be given.',
rev=dict(
 read=[('Most consular enquiries', ['are unique', 'have answers that do not depend on the asker', 'are urgent', 'arrive by telephone'], 1),
       ('The misfit enquiry is', ['usually trivial', 'disproportionately the one that matters', 'rare and unimportant', 'always an emergency'], 1),
       ('Uncertainty should produce', ['a general answer', 'an acknowledgement naming an officer and a date', 'a guess', 'silence'], 1),
       ('In the Decision Room, what did the date become?', ['14 days all year', 'seasonal, 5 and 21 days', '5 days all year', 'no date'], 1)],
 listen_text='There are two ways to handle an enquiry that does not fit: guess at the nearest '
             'category, or send a general answer that covers several. Both are catastrophic in '
             'consular work, because the enquiry that does not fit is disproportionately the '
             'one that matters.',
 listen=[('Guess at the nearest ____________.', 'category'),
         ('A general answer that covers ____________.', 'several'),
         ('Both are ____________ in consular work.', 'catastrophic'),
         ('Disproportionately the one that ____________.', 'matters')],
 speak=['State one fact from your work for a citizen and then for a formal note.',
        'Name a date you could meet in your busiest month.'],
 write='Write one acknowledgement naming an officer and a date.',
 vocab=[('A reply confirming receipt and naming what happens next is an ____________.', 'acknowledgement'),
        ('The point at which a case must go to a person is an ____________.', 'escalation threshold'),
        ('The predictable rise in volume at a time of year is a ____________.', 'seasonal peak'),
        ('A case in which delay itself causes harm is an ____________.', 'emergency case'),
        ('The rule by which incoming cases are sorted is a ____________.', 'triage rule')],
 gram=[('____________ sorry: we cannot process your application until 3 September.', 'I am'),
       ('____________ will need two documents.', 'You'),
       ('The applicant is ____________ to produce two documents.', 'required'),
       ('The Ministry is not ____________ in this matter.', 'competent'),
       ('I will write to you ____________ 24 March whatever has happened.', 'by')]),

found=['Count how many of last week’s enquiries had the same answer.',
       'Write one standard answer twice: for a citizen and for a note.',
       'Name the words that should route a case to a person immediately.',
       'Find out what your office does with an enquiry it cannot place.'],
end_line='The enquiry that does not fit is the one the section exists for.',
end_next='Next: The Case That Must Reach a Person',
)
