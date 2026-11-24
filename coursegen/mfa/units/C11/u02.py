# -*- coding: utf-8 -*-
import figs

U = dict(
num=2, title='The Case That Must Reach a Person',
gram='reassurance and the stating of limits',
ai='the consular case that must reach a person',
strap='CEFR C1 · Grammar: reassurance and limits · AI: the case that must reach a person',
cando=['offer reassurance that does not exceed what the Ministry can do',
       'state a limit of assistance without appearing to refuse help',
       'say which consular cases must reach a person and why',
       'design a routing rule whose false positives cost less than its false negatives',
       'write a tasking in which the safe failure is the one that happens'],
hero=('HE HAS BEEN HELD FOR ELEVEN DAYS',
      ['The enquiry was classified under travel documents, correctly, by its own words.',
       'The sixth sentence said that her brother had not been seen since the ninth.'],
      [(730, 'orange', 'long'), (1390, 'purple', 'short'),
       (2050, 'teal', 'long'), (2690, 'blue', 'short')]),
hero_cap='Consular Affairs, reading back through a case that took nine days to reach an officer.',

warm=['What would you want a stranger to notice in a message you wrote in distress?',
      'What can a consular service actually do for a detained citizen?',
      'How do you reassure somebody without promising what you cannot deliver?'],
read=[
 'In April a woman wrote to the consular mailbox asking how to obtain a replacement passport '
 'for her brother, who had lost his in Kavara. The enquiry was long, it began with the '
 'passport question, and it was classified under travel documents, which is where its own '
 'first two sentences put it.',
 'The sixth sentence said that her brother had not been seen since the ninth and that the '
 'family had been told by a neighbour that he had been taken to a police station. The reply she '
 'received set out, correctly and in her own language, how a replacement passport is obtained '
 'abroad.',
 'She wrote again four days later, and again five days after that, each time beginning with '
 'the passport. The case reached an officer on the ninth day because the third message '
 'contained the word detained in its opening line, which was the only line the routing rule '
 'had ever examined.',
 'Rana Deeb’s section rebuilt the rule the same week. It now examines the whole of an enquiry, '
 'not its opening, for a short list of terms: detained, arrested, police, hospital, missing, '
 'died, and nine others. Any enquiry containing one of them goes to the duty officer within '
 'five minutes whatever else it says and whatever it appears to be about.',
 'The rule produces false positives at a rate of about one in six, because a citizen asking '
 'whether a hospital letter needs legalisation is routed as an emergency. Rana regards that as '
 'the correct design: the cost of a false positive is four minutes of an officer’s time, and '
 'the cost of a false negative was nine days.'],
c_a=[('What did the April enquiry ask?', 'how to obtain a replacement passport for her brother'),
     ('Why was it classified under travel documents?', 'because its own first two sentences put it there'),
     ('What did the sixth sentence say?', 'that her brother had not been seen since the ninth and had been taken to a police station'),
     ('When did the case reach an officer, and why?', 'on the ninth day, because a later message had the word detained in its opening line'),
     ('What does the rule now examine?', 'the whole of an enquiry, for a list of fifteen terms'),
     ('What is the false positive rate, and why is it accepted?', 'about one in six; a false positive costs four minutes and a false negative cost nine days')],
c_b=[('The reply she received was incorrect.', 'F'),
     ('She wrote three times in all.', 'T'),
     ('The old rule examined the whole enquiry.', 'F'),
     ('The new rule routes within five minutes.', 'T'),
     ('A hospital legalisation query may be routed as an emergency.', 'T'),
     ('Rana regards the false positive rate as a defect.', 'F')],
c_c=[('The enquiry was long, and it ____________ with the passport question.', 'began'),
     ('The family had been told by a ____________.', 'neighbour'),
     ('Each time ____________ with the passport.', 'beginning'),
     ('The only line the routing rule had ever ____________.', 'examined'),
     ('Whatever it appears to be ____________.', 'about'),
     ('The cost of a false negative was nine ____________.', 'days')],
c_d=[('The classification was ( correct and fatal / wrong ).', ['correct and fatal', 'wrong'], 0),
     ('How many terms are on the list?', ['six', 'fifteen', 'nine', 'one'], 1),
     ('How quickly must a flagged case be routed?', ['five minutes', 'an hour', 'a day', 'nine days'], 1),
     ('What is the false positive rate?', ['one in sixty', 'one in six', 'one in two', 'none'], 1),
     ('What does a false positive cost?', ['nine days', 'four minutes', 'a complaint', 'nothing'], 1)],
c_e=('Match each formulation to what it does.',
     [('I will write to you by Friday.', 'an undertaking the Ministry can keep'),
      ('We will get him released.', 'a promise the Ministry cannot keep'),
      ('We cannot intervene in a local prosecution.', 'a stated limit'),
      ('I understand how frightening this is.', 'an acknowledgement, not a promise'),
      ('The Ministry will seek consular access.', 'an undertaking as to its own conduct'),
      ('Try not to worry.', 'a reassurance with no content')],
     ['an undertaking the Ministry can keep', 'a promise the Ministry cannot keep',
      'a stated limit', 'an acknowledgement, not a promise',
      'an undertaking as to its own conduct', 'a reassurance with no content']),

v_fig_title='A CONSULAR CASE',
v_fig=[('people', 'a detained national'), ('key', 'consular access'), ('doc', 'an emergency travel document'),
       ('shield', 'a limit of assistance'), ('clock', 'a welfare visit'), ('pin', 'a next of kin')],
v_fig_cap='Six words from the part of the work where a mistake is measured in days.',
vocab=[
 ('a detained national', 'a citizen held by the authorities of another state'),
 ('consular access', 'the right of a consular officer to visit and speak to a detained national'),
 ('a welfare visit', 'a visit to check the condition of a detained or hospitalised citizen'),
 ('a next of kin', 'the closest relative, for the purposes of notification'),
 ('a power of attorney', 'authority given to another to act in one’s legal affairs'),
 ('a local lawyer', 'a lawyer qualified where the case is being heard'),
 ('a court appearance', 'an occasion on which a person must attend a court'),
 ('a bail application', 'a request for release pending trial'),
 ('a prison transfer', 'the moving of a prisoner from one establishment to another'),
 ('a medical report', 'a doctor’s written account of a person’s condition'),
 ('a repatriation', 'the return of a person to their own state'),
 ('a hospital admission', 'the taking of a patient into hospital care'),
 ('a missing person report', 'a formal report that somebody cannot be found'),
 ('a death abroad', 'the death of a citizen outside their own state'),
 ('a death certificate', 'the official document recording a death'),
 ('a repatriation of remains', 'the return of a body to the state of nationality'),
 ('a local burial', 'burial in the state where the death occurred'),
 ('an emergency travel document', 'a single-use document allowing return without a passport'),
 ('a financial assistance request', 'a request for money from the state'),
 ('a limit of assistance', 'the point beyond which a consular service cannot help')],
v_a=[('The right to visit and speak to a detained national is ____________.', 'consular access'),
     ('A single-use document allowing return without a passport is an ____________.', 'emergency travel document'),
     ('The point beyond which a consular service cannot help is a ____________.', 'limit of assistance'),
     ('The return of a body to the state of nationality is a ____________.', 'repatriation of remains'),
     ('A visit to check the condition of a detained citizen is a ____________.', 'welfare visit'),
     ('The closest relative, for notification, is a ____________.', 'next of kin'),
     ('A request for release pending trial is a ____________.', 'bail application'),
     ('Authority given to another to act in one’s legal affairs is a ____________.', 'power of attorney')],
v_b=[('A detained national is a citizen held', 'by the authorities of another state.'),
     ('A local lawyer is a lawyer qualified', 'where the case is being heard.'),
     ('A medical report is a doctor’s written account', 'of a person’s condition.'),
     ('A missing person report is a formal report', 'that somebody cannot be found.'),
     ('A limit of assistance is the point beyond which', 'a consular service cannot help.')],

g_title='Grammar: reassurance and the stating of limits',
g_rule=['An undertaking may be given only about the Ministry’s own conduct: we will seek '
        'access.',
        'Never undertake an outcome the Ministry does not control: we will get him released.',
        'Acknowledge feeling without promising: I understand how frightening this is.',
        'State a limit in the same message as the help: we cannot intervene in a prosecution, '
        'and we can do these three things.'],
g_fig=('LOOSE',
       ['Try not to worry; we will sort this out.',
        'Everything will be fine.',
        'There is nothing the Ministry can do.',
        'We are doing all we can.'],
       'PRECISE',
       ['I understand how frightening this is. Here is what we will do this week.',
        'We will seek consular access and will tell you the outcome by Friday.',
        'We cannot intervene in a local prosecution. We can attend the hearing, provide a list '
        'of lawyers, and visit him.',
        'Three things are in hand; 1 of them has a date, and the other 2 do not.'],
       'two empty reassurances and two statements that close the conversation',
       'four replies that acknowledge, undertake only what is controlled, and state limits'),
g_fig_cap='A reassurance with no content is read, correctly, as an absence of help.',
g_a=[('I understand how frightening this ____________.', 'is'),
     ('We will ____________ consular access and will tell you the outcome by Friday.', 'seek'),
     ('We cannot ____________ in a local prosecution.', 'intervene'),
     ('We can attend the hearing, provide a list of lawyers, and ____________ him.', 'visit'),
     ('I will write to you by Friday ____________ has happened.', 'whatever'),
     ('The Ministry has no ____________ to require his release.', 'power'),
     ('Three things are in ____________.', 'hand'),
     ('I cannot ____________ you when the hearing will be listed.', 'tell'),
     ('What we can do is set out ____________.', 'below')],
g_b=[('An undertaking may be given only about ( the outcome / the Ministry’s own conduct ).', ['the outcome', 'the Ministry’s own conduct'], 1),
     ('Which is permitted?', ['We will get him released.', 'We will seek consular access.', 'Everything will be fine.', 'Try not to worry.'], 1),
     ('A limit should be stated', ['in a separate letter', 'in the same message as the help', 'at the end only', 'never'], 1),
     ('I understand how frightening this is', ['promises an outcome', 'acknowledges without promising', 'states a limit', 'refuses help'], 1),
     ('Which closes the conversation?', ['Here is what we will do.', 'There is nothing the Ministry can do.', 'We will seek access.', 'I will write by Friday.'], 1),
     ('Which is empty?', ['We will attend the hearing.', 'We are doing all we can.', 'We cannot intervene.', 'I will write by Friday.'], 1)],

d1=dict(title='The sixth sentence',
        fig=(['Classified under travel documents.', 'Correctly.'],
             ['And the sixth sentence?', 'The rule never read it.']),
        cap='Rana Deeb and the officer who found the case on the ninth day.',
        lines=[('Officer', 'The April case. Three messages, nine days, and the third one had '
                           'detained in the first line, which is why it came to me.'),
               ('Rana', 'What did the first message say?'),
               ('Officer', 'It asked how to replace a lost passport. That is the first two '
                           'sentences and that is what it was classified as, which on any '
                           'reading of those two sentences is correct.'),
               ('Rana', 'And the sixth sentence.'),
               ('Officer', 'Says he has not been seen since the ninth and that a neighbour told '
                           'the family he was taken to a police station. She did not put it '
                           'first because she was asking us a question she thought we could '
                           'answer.'),
               ('Rana', 'Which is what people do. Nobody writes to a ministry leading with the '
                        'thing they are most frightened of. They lead with the thing they think '
                        'is in our competence.'),
               ('Officer', 'The old rule read the subject line and the opening.'),
               ('Rana', 'Because that is where the subject of a message is, in every other kind '
                        'of correspondence this Ministry handles. It is the one place it is not '
                        'in a consular enquiry from a frightened family.'),
               ('Officer', 'So the rule reads everything.'),
               ('Rana', 'The rule reads everything, for fifteen words, and anything containing '
                        'one of them is with the duty officer in five minutes whatever it looks '
                        'like it is about.'),
               ('Officer', 'That will route a great many hospital legalisation queries.'),
               ('Rana', 'About one in six. Four minutes each. I am buying that at that price '
                        'without hesitation and I will defend the arithmetic to anybody who '
                        'wants to discuss the officers’ time.')],
        a=[('Why was the case classified under travel documents?', 'because its first two sentences asked how to replace a lost passport'),
           ('Why did she not lead with the detention?', 'because she led with the question she thought was in the Ministry’s competence'),
           ('What did the old rule read?', 'the subject line and the opening'),
           ('What does the new rule read?', 'everything, for fifteen words'),
           ('What is the price of the new rule?', 'about one in six routed wrongly, at four minutes each')],
        b=[('A ____________ told the family he was taken to a police station.', 'neighbour'),
           ('They lead with the thing they think is in our ____________.', 'competence'),
           ('The rule reads everything, for fifteen ____________.', 'words'),
           ('I am buying that at that ____________.', 'price')]),
d2=dict(title='What we can and cannot do',
        fig=(['She asked us to get him out.', 'And we cannot.'],
             ['So what do we write?', 'The limit and the three things.']),
        cap='Rana and Samir Haddad.',
        lines=[('Samir', 'Your draft reply says the Ministry cannot intervene in a local '
                         'prosecution. That is correct and it is the second sentence.'),
               ('Rana', 'Where would you put it?'),
               ('Samir', 'After the three things we can do, not before them. A limit read first '
                         'is read as a refusal, and she will not reach the third paragraph.'),
               ('Rana', 'My difficulty is the opposite. If I lead with attending the hearing and '
                        'providing a list of lawyers, she will read that as the beginning of a '
                        'process that ends with his release.'),
               ('Samir', 'She will read it that way whatever you write.'),
               ('Rana', 'Which is why the limit has to be in the same message and in plain '
                        'words. Not the Ministry is unable to intervene, which sounds like '
                        'reluctance. The Ministry has no power to require his release, which is '
                        'a fact about the world.'),
               ('Samir', 'That is better and it is harsher.'),
               ('Rana', 'It is harsher on the day and it is the only version that does not '
                        'produce a conversation in six weeks in which she says we told her we '
                        'would get him out. I have had that conversation. It is the worst part '
                        'of this work.'),
               ('Samir', 'Then the order is: acknowledgement, the three things with dates where '
                         'there are dates, the limit in plain words, and a named officer.'),
               ('Rana', 'And one sentence I have fought for, which is that I will write again by '
                        'a stated day whatever has happened. Most of what families cannot bear '
                        'is not the limit. It is not knowing when they will next hear anything.')],
        a=[('Where does Samir want the limit?', 'after the three things the Ministry can do'),
           ('What is Rana’s difficulty?', 'that leading with the help will be read as a process ending in release'),
           ('What wording does she prefer?', 'the Ministry has no power to require his release'),
           ('Why?', 'because unable to intervene sounds like reluctance rather than a fact'),
           ('What sentence has she fought for?', 'that she will write again by a stated day whatever has happened')],
        b=[('A limit read first is read as a ____________.', 'refusal'),
           ('A fact about the ____________.', 'world'),
           ('It is harsher on the ____________.', 'day'),
           ('Not knowing when they will next ____________ anything.', 'hear')]),

speak=[('Undertake and limit',
        ['Student A: ask for something your partner’s office cannot deliver.',
         'Student B: acknowledge, undertake only what you control, and state the limit.',
         'Do it in four sentences, in that order.']),
       ('The sixth sentence',
        ['Write a short message about a problem, burying the serious part in the middle.',
         'Exchange messages and read only the first two sentences.',
         'Say what you missed.']),
       ('A date whatever happens',
        ['Promise your partner a date by which you will write again.',
         'Your partner asks what you will say if nothing has happened.',
         'Say it aloud.'])],

ext_title='In consular work the case that must reach a person is the case that does not announce itself',
ext_fig=figs.source_check('THE APRIL CASE, AS THE RULE SAW IT',
                          [('the subject line', 'lost passport', 'verified'),
                           ('the first 2 sentences', 'how to replace a passport', 'verified'),
                           ('the 6th sentence', 'not seen since the 9th; police station', 'verified'),
                           ('the classification applied', 'travel documents', 'verified'),
                           ('the reply sent', 'correct, in her language', 'verified'),
                           ('what the reply addressed', 'the passport only', 'none')]),
ext_fig_cap='Everything the rule examined was handled correctly.',
ext=[
 'Triage at volume works because most enquiries are what they say they are. Consular work '
 'contains a systematic exception to that, and it is not an occasional exception: a person in '
 'serious difficulty very often writes about something else.',
 'The reason is ordinary and human. A family whose relative has disappeared does not write to '
 'a ministry leading with the disappearance, because they do not believe the ministry can do '
 'anything about it. They lead with the question they think is within its competence, which is '
 'usually a document. The frightening fact arrives in the middle of a long message, stated '
 'once, without emphasis, as background.',
 'A routing rule that reads a subject line and an opening paragraph is reading the part of the '
 'message the writer composed deliberately, and the part they composed deliberately is the '
 'part that reflects their theory of what a ministry does. Everywhere else in a foreign '
 'ministry the subject of a document is at the top. In a consular enquiry from a frightened '
 'family it frequently is not, and a rule designed on the ordinary assumption will fail '
 'precisely on the cases where failure costs most.',
 'The correction is a word list applied to the whole text: detained, arrested, police, '
 'hospital, missing, died, and a dozen others, with any enquiry containing one of them routed '
 'to a duty officer within minutes whatever the enquiry appears to be about. This is crude, and '
 'crudeness is the point: a list of words has no theory of what the message is about and '
 'therefore cannot be misled by one.',
 'It produces false positives at perhaps one in six, since a question about legalising a '
 'hospital letter contains the word hospital. The arithmetic is the whole justification. A '
 'false positive costs an officer four minutes; the false negative in the April case cost nine '
 'days of a detention nobody had looked at. Any routing rule in this field should be designed '
 'so that its cheap failure is the one that happens often and its expensive failure is the one '
 'that is almost impossible.'],
dp1=('Consular case routing',
     'Consular services in several foreign ministries moved in 2025 from subject-based '
     'classification to whole-text keyword routing for welfare indicators, accepting high '
     'false-positive rates to reduce missed cases.',
     'Source: reported practice in consular services, 2025–2026.'),
e_a=[('Why does triage at volume normally work?', 'because most enquiries are what they say they are'),
     ('Why do families write about something else?', 'because they lead with the question they believe is within the ministry’s competence'),
     ('What is a routing rule reading when it reads the opening?', 'the part the writer composed deliberately, which reflects their theory of what a ministry does'),
     ('What is the correction?', 'a word list applied to the whole text, routing within minutes'),
     ('Why is crudeness the point?', 'because a list of words has no theory of the message and cannot be misled by one')],
e_b=[('A person in difficulty usually leads with the difficulty.', 'F'),
     ('The subject of a consular enquiry is always at the top.', 'F'),
     ('The word list is sophisticated.', 'F'),
     ('False positives are about one in six.', 'T'),
     ('A false positive costs about four minutes.', 'T'),
     ('The expensive failure should be the common one.', 'F')],

w_model=(
 'Purpose: route every enquiry that may concern the safety or liberty of a citizen to a duty '
 'officer, so that no such case waits behind a classification. Scope: the whole text of every '
 'enquiry on every channel, including attachments; nothing is excluded on the ground of what '
 'the enquiry appears to be about. Inputs: the enquiry and the list of 15 welfare terms. '
 'Criteria: search the whole text and not the subject line or opening alone; where any term on '
 'the list appears, route the case to the duty officer within 5 minutes and send no '
 'classified answer; do not weigh the term against the apparent subject of the enquiry; where '
 'a term appears in a quotation or a document title, route the case anyway. Done: 1 routing '
 'decision per enquiry within 5 minutes, and a daily count of routed cases with the term that '
 'triggered each. Fallback: where the text cannot be read, for example an image attachment, '
 'route the case rather than classifying it.'),
w_fig=figs.spec_card('THE TASKING FOR WELFARE ROUTING',
                     [('Purpose', 'no safety case waits behind a classification'),
                      ('Scope', 'the whole text, every channel, attachments included'),
                      ('Inputs', 'the enquiry and the 15 welfare terms'),
                      ('Criteria', 'whole text; no weighing against the apparent subject'),
                      ('Done', '1 decision within 5 minutes, plus a daily count by term'),
                      ('Fallback', 'unreadable text: route, never classify')]),
w_fig_cap='Do not weigh the term against the apparent subject: that weighing is exactly what failed in April.',
w_task='Write a routing tasking for the cases in your own work that must reach a person.',
w_steps=['Say what must never wait.',
         'Cover the whole text and exclude nothing.',
         'Name the terms that trigger routing.',
         'Forbid weighing a term against the apparent subject.',
         'Say what happens where the text cannot be read.'],
w_bank=['Route … so that no … waits behind …',
        'Cover … ; nothing is excluded on the ground of …',
        'Work from … and …',
        'Search … and not … ; where any term … , route … and send no … ; do not weigh … ; where a term appears in … , route …',
        'Where the text cannot be read … , route … rather than …'],
w_check=['Is the whole text searched?',
         'Is weighing against the apparent subject forbidden?',
         'Is a term in a quotation treated the same way?',
         'Is routing the default where reading fails?'],

t_title='The case that must reach a person',
t_fig=figs.split('A CONSULAR ENQUIRY',
                 'What the writer puts first',
                 ['a document question',
                  'a procedural question',
                  'something they think we handle',
                  'the part they composed carefully'],
                 'What is in the middle',
                 ['he has not been seen since the 9th',
                  'she is in hospital',
                  'the police came',
                  'the fact they cannot act on']),
t_fig_cap='The right-hand column is what the Ministry exists for, and the writer buried it.',
t_body=[
 'Triage works because most messages are about what they say they are about. Consular work has '
 'a systematic exception that is not occasional: a person in serious trouble very often writes '
 'about a document, because they lead with the question they believe is within the Ministry’s '
 'competence and the frightening fact arrives in the middle, stated once, without emphasis.',
 'That means a rule reading a subject line and an opening paragraph is reading the part of the '
 'message that reflects the writer’s theory of what a ministry does. In every other kind of '
 'correspondence the subject is at the top. Here it frequently is not, and a rule built on the '
 'ordinary assumption fails on exactly the cases where failure is most expensive.',
 'So search the whole text for a short list of words — detained, arrested, police, hospital, '
 'missing, died and a dozen more — and route anything containing one of them to a duty '
 'officer within minutes whatever it appears to be about. The crudeness is the design: a word '
 'list has no theory of the message and cannot be misled by one. Accept the false positives, '
 'which will run at about one in six, and justify them with the arithmetic rather than with '
 'sentiment: four minutes against nine days. And when a person does reach the officer, '
 'acknowledge what they feel, undertake only what the Ministry controls, state the limit in '
 'plain words in the same message, and promise a date on which you will write again whatever '
 'has happened.'],
t_say=[('Route on the word: ', 'Any of the 15 terms, anywhere in the text, routed in 5 minutes.'),
       ('Undertake what you control: ', 'We will seek consular access and tell you the outcome by Friday.'),
       ('State the limit: ', 'The Ministry has no power to require his release.')],
t_bound=('A routing rule can find a word; it cannot understand a message, and it must not be '
         'asked to weigh a word against what the message seems to be about, because that '
         'weighing is what failed. Nor can any rule supply the reply: what a frightened family '
         'needs is an acknowledgement, an undertaking the Ministry controls, a limit in plain '
         'words and a date, and all four of those are written by a person.'),
t_a=[('Any of the 15 terms, anywhere in the ____________.', 'text'),
     ('We will seek consular ____________ and tell you the outcome by Friday.', 'access'),
     ('The Ministry cannot require his ____________.', 'release'),
     ('A word list has no ____________ of the message.', 'theory'),
     ('Four minutes against nine ____________.', 'days'),
     ('A date on which you will write again whatever has ____________.', 'happened')],
t_b_rubric='Rewrite each so that it acknowledges, undertakes only what is controlled, or states a limit.',
t_b=[('Try not to worry; we will sort this out.', 'I understand how frightening this is; here is what we will do this week'),
     ('Everything will be fine.', 'we will seek consular access and will tell you the outcome by Friday'),
     ('There is nothing the Ministry can do.', 'the Ministry has no power to require his release; we can attend the hearing, provide a list of lawyers and visit him'),
     ('We are doing all we can.', 'three things are in hand; one has a date and the other two do not')],

case=dict(
 title='The Decision Room · One in six',
 brief=[
  'The whole-text rule has run for four months. It routes about 1,100 cases a month to duty '
  'officers, of which about 180 are false positives.',
  'The duty officers say the false positives are costing them more than four minutes each, '
  'because every routed case has to be read in full before it can be sent back.',
  'Rana defends the rule. The duty officers propose that the step be allowed to weigh the term '
  'against the apparent subject. Maya Sarkis asks what a new duty officer would do with a '
  'routed hospital query at three in the morning.'],
 exhibit=figs.datatable('FOUR MONTHS OF ROUTING',
                        ['', 'Figure', 'Note'],
                        [['cases routed monthly', '~1,100', '—'],
                         ['false positives', '~180', 'about 1 in 6'],
                         ['average time per false positive', '9 minutes', 'duty officers’ count'],
                         ['serious cases found that would have been classified', '14', 'in 4 months'],
                         ['of those, cases where the term was not in the opening', '11', '—'],
                         ['duty officer hours per month on false positives', '27', '—']]),
 exhibit_cap='Twenty-seven hours a month, and eleven cases that the old rule would have '
             'answered with a leaflet.',
 exhibit_note='Of the 14, 3 concerned a detention of more than a week that no officer had seen.',
 voices=[('the duty officers', 'Consular Affairs',
          'Let the step weigh the term. A query that says my hospital letter needs legalisation '
          'is not a welfare case and we read 180 of them a month at nine minutes each.'),
         ('Rana Deeb', 'Consular Affairs',
          'Weighing the term against the apparent subject is the exact decision that failed in '
          'April. Eleven of the fourteen cases we found had the term outside the opening, which '
          'is to say they looked like something else.'),
         ('Maya Sarkis', 'the Diplomatic Institute',
          'Then reduce the cost rather than the rule. A routed case arrives with no summary; a '
          'duty officer at three in the morning reads eleven paragraphs to find the word. Give '
          'them the sentence containing the term, highlighted, at the top.')],
 steps=[('Find it', 'How many serious cases were found in four months?'),
        ('Compare it', 'What are the three proposals?'),
        ('Infer it', 'Why does Rana refuse weighing?'),
        ('Weigh it', 'Twenty-seven hours a month against eleven cases.'),
        ('Decide', 'Does the rule change, or the handling?')],
 analysis=[('Find it. How many of the fourteen had the term outside the opening?', 'eleven'),
           ('Compare it. What do the duty officers propose?', 'that the step weigh the term against the apparent subject'),
           ('Infer it. What is Rana’s reason?', 'that weighing is the exact decision that failed in April'),
           ('Weigh it. What does Maya propose instead?', 'giving the duty officer the sentence containing the term, highlighted, at the top'),
           ('Decide. What would you do?', 'answers vary; reducing the handling cost preserves the rule and answers the complaint')],
 decision='Write what changes.',
 decision_steps=['Say whether the routing rule is altered.',
                 'Say what a routed case must arrive with.',
                 'Say what a duty officer does with a clear false positive.',
                 'Say what is measured monthly.'],
 bank=['The routing rule is …',
       'A routed case arrives with …',
       'Where a case is clearly not a welfare case, the duty officer …',
       'Each month the section measures …',
       'This is reviewed …'],
 outcome='The rule was not altered. Routed cases now arrive with the triggering sentence '
         'highlighted at the top and the term named, and a duty officer who judges a case a '
         'false positive returns it with one click and no written reason. The average handling '
         'time for a false positive fell from nine minutes to under two, and duty officer hours '
         'on false positives from twenty-seven a month to about six. In the following four '
         'months eleven further serious cases were found, nine of them with the term outside '
         'the opening. The duty officers, who had proposed weighing, say the highlighted '
         'sentence answered the complaint entirely and that they had been asking for the rule '
         'to be weakened when what they needed was the case to be presented.',
 outcome_q=[('What changed?', 'the presentation: the triggering sentence highlighted, and one-click return'),
            ('What did the duty officers conclude?', 'that they had asked for a weaker rule when they needed better presentation')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Spot the serious case',
 task=['This is the routing instruction that was in force in April, written when the mailbox '
       'was first triaged.',
       'It was followed exactly and a detention waited nine days behind a passport query.'],
 draft=['Identify urgent consular cases and route them to the duty officer.',
        'Look at the subject line and the opening.',
        'Use judgement about what the enquiry is really about.',
        'Route anything that looks serious.',
        'Avoid routing routine queries unnecessarily.',
        'Act promptly.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fifth is the one that cost nine days.',
 asked=['The whole text searched for named terms',
        'No weighing against the apparent subject',
        'Routing as the default where reading fails'],
 back=['Subject lines and openings read',
       'A detention classified as a passport query',
       '9 days before any officer saw the case'],
 gap='"The subject line and the opening" is the wrong part of a consular enquiry, "judgement '
     'about what it is really about" is the weighing that fails, "anything that looks serious" '
     'names no terms, and "avoid routing unnecessarily" sets the incentive the wrong way round.',
 back_cap='An instruction that optimised for the cheap error and produced the expensive one.',
 back_note='Line five is the failure. Any instruction that penalises over-routing will '
           'under-route, and in this work under-routing is the failure measured in days.',
 diagnosis=[('[1] "urgent consular cases" — urgent by what test?', 'unstated criterion'),
            ('[2] "the subject line and the opening" — assumes the subject is at the top', 'hidden assumption'),
            ('[3] "judgement about what the enquiry is really about" — assumes the apparent subject is informative', 'hidden assumption'),
            ('[4] "anything that looks serious" — serious by what test?', 'unstated criterion'),
            ('[5] "avoid routing routine queries unnecessarily" — and where the two conflict?', 'missing condition'),
            ('[6] "act promptly" — within what time, and if the text cannot be read?', 'missing condition')],
 rewrite='Rewrite the instruction so that the whole text is searched and the cheap failure is '
         'the one that happens.',
 scaffold=['What must never wait behind a classification',
           'The whole text, every channel, nothing excluded',
           'The enquiry and the list of terms',
           'Whole-text search, no weighing, quotations included, no classified answer',
           'One decision within a stated time, and a daily count',
           'What to do where the text cannot be read'],
 bank=['Route … so that no … waits behind …',
       'Cover … ; nothing is excluded on the ground of …',
       'Work from … and …',
       'Search … ; where any term … , route … and send no … ; do not weigh … ; where a term appears in … , …',
       'Return 1 … within … , and …',
       'Where the text cannot be read … , …'],
 check=['Is the whole text searched rather than the opening?',
        'Are the triggering terms named?',
        'Is weighing forbidden?',
        'Does the instruction prefer over-routing to under-routing?'],
 model=['Route every enquiry that may concern the safety or liberty of a citizen to a duty officer, so that no such case waits behind a classification',
        'The whole text of every enquiry on every channel, including attachments; nothing is excluded on the ground of what the enquiry appears to be about',
        'The enquiry and the list of 15 welfare terms',
        'Search the whole text and not the subject line or opening alone; where any term on the list appears, route the case to the duty officer within 5 minutes and send no classified answer; do not weigh the term against the apparent subject of the enquiry; where a term appears in a quotation or a document title, route the case anyway',
        '1 routing decision per enquiry within 5 minutes, and a daily count of routed cases with the term that triggered each',
        'Where the text cannot be read, for example an image attachment, route the case rather than classifying it'],
 cost='1 detention unseen for 9 days behind a correctly classified passport enquiry, and 3 '
      'replies to a frightened family about the replacement of a passport.'),

rev_fig=figs.split('REASSURANCE',
                   'Empty or closing',
                   ['Try not to worry.',
                    'Everything will be fine.',
                    'There is nothing we can do.',
                    'We are doing all we can.'],
                   'Usable',
                   ['I understand how frightening this is.',
                    'We will seek access and tell you by Friday.',
                    'We have no power to require release; we can …',
                    'I will write by 24 March whatever has happened.']),
rev_fig_cap='Acknowledge; undertake only what you control; state the limit; name a date.',
rev=dict(
 read=[('A person in serious difficulty often writes about', ['the difficulty', 'a document', 'the law', 'nothing'], 1),
       ('The old rule read', ['the whole text', 'the subject line and opening', 'attachments', 'the signature'], 1),
       ('The crudeness of a word list is', ['a defect', 'the design', 'unavoidable', 'a cost'], 1),
       ('In the Decision Room, what changed?', ['the rule', 'the presentation of routed cases', 'the terms', 'nothing'], 1)],
 listen_text='A family whose relative has disappeared does not write leading with the '
             'disappearance, because they do not believe the ministry can do anything about '
             'it. They lead with the question they think is within its competence, which is '
             'usually a document.',
 listen=[('Does not write leading with the ____________.', 'disappearance'),
         ('They do not ____________ the ministry can do anything.', 'believe'),
         ('The question they think is within its ____________.', 'competence'),
         ('Which is usually a ____________.', 'document')],
 speak=['Acknowledge, undertake and state a limit in four sentences.',
        'Say which words should route a case in your own work.'],
 write='Write one sentence stating a limit of assistance in plain words.',
 vocab=[('The right to visit and speak to a detained national is ____________.', 'consular access'),
        ('A single-use document allowing return without a passport is an ____________.', 'emergency travel document'),
        ('The point beyond which a consular service cannot help is a ____________.', 'limit of assistance'),
        ('The return of a body to the state of nationality is a ____________.', 'repatriation of remains'),
        ('A visit to check the condition of a detained citizen is a ____________.', 'welfare visit')],
 gram=[('I understand how frightening this ____________.', 'is'),
       ('We will ____________ consular access and will tell you the outcome by Friday.', 'seek'),
       ('We cannot ____________ in a local prosecution.', 'intervene'),
       ('The Ministry has no ____________ to require his release.', 'power'),
       ('I will write to you by Friday ____________ has happened.', 'whatever')]),

found=['Read a message you received this week to the end before deciding what it is about.',
       'Write the list of words that should route a case in your office immediately.',
       'Rewrite one reassurance so that it undertakes only what you control.',
       'Name a date on which you will write again whatever has happened.'],
end_line='Design the rule so that the cheap failure is the one that happens.',
end_next='Next: Answering in Their Language',
)
