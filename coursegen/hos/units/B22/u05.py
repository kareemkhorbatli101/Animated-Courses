# -*- coding: utf-8 -*-
import figs

U = dict(
num=5,
title='A Regulator’s Question, Answered Exactly',
gram='answering a regulator within the exact scope of the question',
ai='a regulator’s question answered within its exact scope',
strap='CEFR B2 · Grammar: answering a regulator within the exact scope of the question · '
      'AI: a regulator’s question answered within its exact scope',
cando=['answer the question asked and not the one you prepared for',
       'keep inside the date range and the subject of the question',
       'ask the regulator rather than assume',
       'enclose numbered annexes and keep a copy',
       'write a six-line tasking for a regulatory answer'],

hero=('ANSWER THE QUESTION. NOT THE SUBJECT.',
      ['A volunteered paragraph opens a line of enquiry',
       'that nobody had thought to begin.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Four questions, one date range, and eleven pages that answer two of them.',

warm=['Who answers regulatory correspondence where you work?',
      'What is enclosed, and who keeps a copy?',
      'When was an answer last longer than the question?'],

vocab=[
 ('a question with a precise scope', 'a question with dates and a subject'),
 ('an answer that exceeds the scope', 'an answer that invites a further question'),
 ('an answer that falls short of it', 'an answer that will be asked again'),
 ('a date range in the question', 'the period you must not stray outside'),
 ('a document the regulator has asked for', 'a document that must be enclosed'),
 ('a document the regulator has not asked for', 'a document to mention, not to send'),
 ('a volunteered explanation', 'the paragraph that creates a new enquiry'),
 ('an explanation that was requested', 'the paragraph the question asked for'),
 ('a deadline in the letter', 'the date the answer is due'),
 ('an extension you must request in writing', 'the request to make early'),
 ('a figure you must certify', 'a number somebody signs for'),
 ('a certification somebody signs', 'the signature that carries the liability'),
 ('a question you must ask the regulator about', 'an ambiguity you may not resolve yourself'),
 ('an assumption you should not make', 'the guess that produces a wrong answer'),
 ('an answer drafted by four people', 'an answer with four voices in it'),
 ('an answer drafted by one and checked by three', 'an answer with one voice and three checks'),
 ('a covering letter that says what is enclosed', 'the page that prevents a dispute'),
 ('an annex that is numbered', 'a document the regulator can cite'),
 ('a copy kept of what you sent', 'the only reliable record of the answer'),
 ('a question that will be followed by another', 'the normal course of regulation')],

read=[
 'The regulator asks four questions about the period from the first of January to '
 'the thirty-first of March, and the draft reply is eleven pages that answer two '
 'of them and volunteer a great deal about April.',
 'Answer the question asked. If the question is about January to March, nothing '
 'about April belongs in the reply, however much better April looks.',
 'An answer that exceeds the scope is not helpfulness but the opening of a new '
 'line of enquiry, and the regulator is obliged to pursue whatever you put in '
 'front of them.',
 'Where a question is ambiguous, ask. A telephone call to the case officer costs '
 'ten minutes; an answer built on your own interpretation of an ambiguous question '
 'costs a second round of correspondence and some credibility.',
 'And enclose what was asked for, numbered, listed in the covering letter, with a '
 'copy of everything kept. Somebody will ask in two years what was sent, and the '
 'only reliable answer is the copy.'],

dp1=('Regulatory correspondence', 'Regulatory guidance commonly recommends '
     'answering within the stated scope and period, enclosing requested documents '
     'as numbered annexes, listing enclosures in a covering letter, seeking '
     'clarification of ambiguity, and retaining a complete copy. Obligations are '
     'set by the regulator and by law.',
     'Source: general healthcare regulation guidance, 2025–2026.'),

c_a=[('How many questions and what period?', 'four, about January to March'),
     ('What does the draft do?', 'answers two of them and volunteers material about April'),
     ('What belongs in a reply about January to March?', 'nothing about April'),
     ('What is an answer that exceeds the scope?', 'the opening of a new line of enquiry'),
     ('What do you do where a question is ambiguous?', 'ask the case officer'),
     ('What is kept?', 'a copy of everything sent')],

c_b=[('The questions cover January to March.', 'T'),
     ('April material is helpful in the reply.', 'F'),
     ('Ambiguity is resolved by asking.', 'T'),
     ('Enclosures need not be numbered.', 'F'),
     ('The covering letter lists what is enclosed.', 'T'),
     ('A copy of everything is kept.', 'T')],

c_c=[('The question ____________ the period from January to March.', 'covers'),
     ('We ____________ not address April in this reply.', 'shall'),
     ('Annex three ____________ the ventilation audit of March.', 'contains'),
     ('I ____________ telephoned the case officer about question two.', 'have'),
     ('An extension ____________ been requested in writing.', 'has'),
     ('The figures ____________ certified by the finance director.', 'are')],

c_d=[('Answer ( the subject raised / the question asked ).', ['the subject raised', 'the question asked'], 1),
     ('Keep inside ( the date range / the general period ).',
      ['the date range', 'the general period'], 0),
     ('Resolve ambiguity by ( asking / interpreting ).',
      ['asking', 'interpreting'], 0),
     ('Number ( the annexes / the paragraphs ).',
      ['the annexes', 'the paragraphs'], 0),
     ('Keep ( a copy of everything / the covering letter ).',
      ['a copy of everything', 'the covering letter'], 0)],

c_e=('Inside the scope, outside it, an ambiguity to ask about or a document to '
     'enclose? Decide what each is.',
     [('the bed closures between January and March', 'inside the scope'),
      ('the improvement made in April', 'outside the scope'),
      ('whether “incidents” includes near misses', 'an ambiguity to ask about'),
      ('the ventilation audit of the fourth of March', 'a document to enclose'),
      ('the staffing position in the previous year', 'outside the scope'),
      ('whether the period includes the thirty-first', 'an ambiguity to ask about')],
     ['inside the scope', 'outside the scope', 'an ambiguity to ask about',
      'a document to enclose']),

v_fig_title='SIX WORDS OF A REGULATORY ANSWER',
v_fig=[('key', 'a question with a precise scope'), ('clock', 'a date range in the question'),
       ('doc', 'an annex that is numbered'),
       ('people', 'a certification somebody signs'),
       ('scale', 'a volunteered explanation'),
       ('note', 'a copy kept of what you sent')],
v_fig_cap='Six words for four questions and one date range.',

v_a=[('An answer that invites a further question is an answer that ____________ the scope.', 'exceeds'),
     ('A document to mention, not to send, is a document the regulator has not ____________ for.', 'asked'),
     ('The paragraph that creates a new enquiry is a ____________ explanation.', 'volunteered'),
     ('The request to make early is an extension you must request in ____________.', 'writing'),
     ('An ambiguity you may not resolve yourself is a question you must ____________ the regulator about.', 'ask'),
     ('An answer with four voices in it is an answer ____________ by four people.', 'drafted'),
     ('The page that prevents a dispute is a covering letter that says what is ____________.', 'enclosed'),
     ('The normal course of regulation is a question that will be followed by ____________.', 'another')],

v_b=[('An answer that falls short of it is an answer', 'that will be asked again.'),
     ('A figure you must certify is a number', 'somebody signs for.'),
     ('An assumption you should not make is the guess', 'that produces a wrong answer.'),
     ('An answer drafted by one and checked by three is an answer', 'with one voice and three checks.'),
     ('A copy kept of what you sent is the only', 'reliable record of the answer.')],

g_title='Grammar: answering a regulator within the exact scope of the question',
g_rule=['Restate the scope before answering, in the present: your question covers '
        'the period from the first of January to the thirty-first of March. The '
        'restatement disciplines everything after it.',
        'Answer in the same order and the same numbering as the questions, and say '
        'so: the answers below follow the numbering of your letter of the ninth.',
        'Decline to volunteer with a single sentence rather than silence: we have '
        'not addressed the position after the thirty-first of March, which falls '
        'outside your question.',
        'Record clarification in the reply itself: following my telephone call to '
        'your case officer on the eleventh, I have taken incidents to include near '
        'misses.'],
g_fig=('LOOSE',
       ['We are pleased to provide a comprehensive response to your enquiry.',
        'It may be helpful to set out some of the wider context first.',
        'Considerable improvement has been achieved in recent months.',
        'We enclose a range of documents which we hope will assist.'],
       'PRECISE',
       ['Your question covers the period from the first of January to the thirty-first of March.',
        'The answers below follow the numbering of your letter of the ninth of April.',
        'We have not addressed the position after the thirty-first of March, which falls outside your question.',
        'Annexes one to four are the documents requested; annex four is the ventilation audit of the fourth of March.'],
       'four sentences that open a new enquiry',
       'four sentences that close this one'),
g_fig_cap='Your question covers. The answers follow your numbering. We have not addressed. Annexes one to four.',

g_a=[('Your question ____________ the period from January to March.', 'covers'),
     ('The answers ____________ the numbering of your letter.', 'follow'),
     ('____________ the ninth of April.', 'Of'),
     ('We ____________ not addressed the position after March.', 'have'),
     ('Which falls ____________ your question.', 'outside'),
     ('Annexes one ____________ four are the documents requested.', 'to'),
     ('Annex four ____________ the ventilation audit.', 'is'),
     ('Following my telephone call ____________ the eleventh.', 'on'),
     ('I ____________ taken incidents to include near misses.', 'have')],

g_b=[('( your question covers January to March / we are pleased to respond comprehensively ) — the scope.', ['your question covers January to March', 'we are pleased to respond comprehensively'], 0),
     ('( the answers follow the numbering of your letter / it may be helpful to set out some context ) — the structure.',
      ['the answers follow the numbering of your letter', 'it may be helpful to set out some context'], 0),
     ('( we have not addressed the position after March / considerable improvement has been achieved ) — the restraint.',
      ['we have not addressed the position after March', 'considerable improvement has been achieved'], 0),
     ('( annexes one to four are the documents requested / we enclose a range of documents ) — the enclosures.',
      ['annexes one to four are the documents requested', 'we enclose a range of documents'], 0),
     ('( following my call to your case officer on the eleventh / we have interpreted your question as follows ) — the clarification.',
      ['following my call to your case officer on the eleventh', 'we have interpreted your question as follows'], 0),
     ('( the figures at annex two are certified by the finance director / the figures are believed to be accurate ) — the certification.',
      ['the figures at annex two are certified by the finance director', 'the figures are believed to be accurate'], 0)],

d1=dict(
 title='Four questions, two answered',
 fig=(['Four questions.', 'Eleven pages.'],
      ['Two answered.', 'One new enquiry.']),
 cap='Margarida Pires and Siobhán Carrick, deputy chief executive, over a draft reply.',
 lines=[('Siobhán', 'Eleven pages. The regulator asked four questions about January to March.'),
        ('Margarida', 'And three of the eleven pages are about April, because April was better.'),
        ('Siobhán', 'Which shows we have improved.'),
        ('Margarida', 'It shows that we answered a question nobody asked, and the case officer will now have to ask about April properly.'),
        ('Siobhán', 'Surely volunteering good news is harmless.'),
        ('Margarida', 'Nothing volunteered to a regulator is harmless. They are obliged to pursue what we put in front of them, and now they have a new period and a new set of figures.'),
        ('Siobhán', 'And questions two and four?'),
        ('Margarida', 'Not answered at all. Question four asks for the escalation log and we have described it instead of enclosing it.'),
        ('Siobhán', 'The log is forty pages.'),
        ('Margarida', 'Then annex four is forty pages. A description of a document is not the document, and we shall be asked again in a fortnight.'),
        ('Siobhán', 'You telephoned them about question two.'),
        ('Margarida', 'I did, and the fact of the call and what I was told goes in the reply, so that nobody in two years has to reconstruct what we assumed.')],
 a=[('How many pages and about what?', 'eleven pages, three of them about April'),
    ('What does volunteering April do?', 'opens a new line of enquiry'),
    ('What is wrong with question four?', 'the log was described rather than enclosed'),
    ('How long is the log?', 'forty pages'),
    ('What goes in the reply about the telephone call?', 'the fact of the call and what she was told')],
 b=[('Three of the eleven pages are about ____________.', 'April'),
    ('They are obliged to ____________ what we put in front of them.', 'pursue'),
    ('A description of a document is not the ____________.', 'document'),
    ('Nobody has to ____________ what we assumed.', 'reconstruct')]),

d2=dict(
 title='The assumption nobody recorded',
 fig=(['Ambiguous question.', 'Interpretation made.'],
      ['Answer wrong.', 'Credibility spent.']),
 cap='Margarida Pires and Dr Leila Rahman, medical director.',
 lines=[('Leila', 'The regulator says our March answer understated incidents by forty-one.'),
        ('Margarida', 'Because we excluded near misses, and their question did not say either way.'),
        ('Leila', 'Somebody decided that near misses were not incidents.'),
        ('Margarida', 'Somebody reasonable decided it, in a hurry, and did not write down that they had decided anything.'),
        ('Leila', 'Would a telephone call have settled it?'),
        ('Margarida', 'In about ten minutes, and the case officer would have remembered being asked.'),
        ('Leila', 'The regulator now thinks we were minimising.'),
        ('Margarida', 'They think it is possible, which is worse than their thinking we were careless, and it is entirely the product of an unrecorded assumption.'),
        ('Leila', 'What do we do?'),
        ('Margarida', 'Write within three days, say what we assumed and why, enclose the forty-one, and say that we should have asked.'),
        ('Leila', 'That is an admission.'),
        ('Margarida', 'It is the smallest available admission, and the alternative is a year of being treated as an organisation that counts selectively.')],
 unresolved=True,
 a=[('What does the regulator say?', 'that the answer understated incidents by forty-one'),
    ('Why?', 'near misses were excluded and the question was silent'),
    ('What was not written down?', 'that an interpretation had been made'),
    ('What would a call have cost?', 'about ten minutes'),
    ('What does Margarida propose?', 'writing within three days, enclosing the forty-one and saying they should have asked')],
 b=[('Their question did not say ____________ way.', 'either'),
    ('In a ____________.', 'hurry'),
    ('The product of an ____________ assumption.', 'unrecorded'),
    ('The smallest available ____________.', 'admission')]),

speak=[('Inside or outside',
        ['Your partner reads out eight pieces of material.',
         'Say which falls inside the scope of a stated question.',
         'Four each, then swap.']),
       ('Ask or assume',
        ['Your partner gives you six ambiguous questions.',
         'Say what you would ask the case officer.',
         'Three each, then swap.']),
       ('List the enclosures',
        ['Your partner gives you six requests for documents.',
         'Draft the covering sentence listing numbered annexes.',
         'Three each, then swap.'])],

ext_title='A regulator’s question answered within its exact scope',
ext_fig=figs.datatable('WHAT THE ANSWER CARRIES',
                       ['Line', 'Content'],
                       [['the scope', 'the period and subject restated'],
                        ['the structure', 'the regulator’s own numbering'],
                        ['the answers', 'inside the scope only'],
                        ['the restraint', 'what has not been addressed, and why'],
                        ['the annexes', 'numbered and listed'],
                        ['the clarifications', 'any call, with its date']]),
ext_fig_cap='Six lines, and the fourth one is the one that keeps the enquiry closed.',
ext=[
 'A regulator’s question answered within its exact scope produces a reply that '
 'closes an enquiry rather than opening a second one.',
 'Give it the regulator’s letter verbatim, the documents requested, the figures '
 'with their certification, any clarification obtained, and the deadline.',
 'Ask it to restate the period and subject before answering, and to mark every '
 'draft sentence that falls outside either.',
 'Ask it to follow the regulator’s own numbering exactly, so that nobody has to '
 'match your paragraphs to their questions.',
 'Ask for a single sentence recording anything deliberately not addressed, which '
 'is both honest and a defence against the charge of omission.',
 'What it cannot do is telephone the case officer. Ten minutes on the telephone '
 'resolves an ambiguity that an interpretation turns into a year of being '
 'suspected.'],

dp2=('Regulatory correspondence', 'Regulatory literature commonly reports that '
     'material volunteered beyond the scope of a question frequently generates '
     'further enquiry, and that unrecorded interpretations of ambiguous requests '
     'are a common source of apparent inconsistency between submissions.',
     'Source: general healthcare regulation literature, 2025–2026.'),

e_a=[('What does the answer produce?', 'a reply that closes an enquiry rather than opening another'),
     ('What five things are given to it?', 'the letter verbatim, the documents, the certified figures, any clarification and the deadline'),
     ('What is restated before answering?', 'the period and the subject'),
     ('Whose numbering is followed?', 'the regulator’s'),
     ('Why record what is not addressed?', 'because it is honest and defends against a charge of omission')],
e_b=[('The scope is restated before the answers.', 'T'),
     ('The regulator’s numbering is followed.', 'T'),
     ('It telephones the case officer.', 'F'),
     ('Material outside the scope is marked.', 'T'),
     ('Volunteered material generates further enquiry.', 'T'),
     ('Unrecorded interpretations cause no difficulty.', 'F')],

w_model='Purpose: so that a reply answers the question asked and does not open a '
       'second enquiry. Scope: regulatory correspondence on operational and '
       'corporate matters; clinical questions are answered by the medical '
       'director, questions about an identifiable patient follow the '
       'confidentiality route, and nothing in my reply certifies a figure I have '
       'not had certified. Inputs: the regulator’s letter verbatim, every document '
       'requested, the figures with the name of whoever certified each, any '
       'clarification obtained with its date, and the deadline. Criteria: the '
       'period and subject restated in the first paragraph; the regulator’s own '
       'numbering followed; nothing outside the stated period or subject included; '
       'one sentence recording anything deliberately not addressed; annexes '
       'numbered and listed in the covering letter; and every clarification '
       'recorded with the date and the person spoken to. Done: sent before the '
       'deadline with a complete copy retained, including the annexes as sent. '
       'Fallback: where the question is ambiguous, I telephone the case officer '
       'and record the answer in the reply rather than interpreting it myself.',
w_fig=figs.spec_card('SIX LINES FOR A REGULATORY ANSWER',
                     [('Purpose', 'close this enquiry, not open another'),
                      ('Scope', 'operational correspondence; not clinical, not patients'),
                      ('Inputs', 'the letter, documents, certified figures, clarifications'),
                      ('Criteria', 'scope restated, their numbering, nothing extra'),
                      ('Done', 'before the deadline, with a complete copy kept'),
                      ('Fallback', 'ambiguity: telephone, and record the answer')]),
w_fig_cap='Six lines, and the sixth one costs ten minutes and saves a year.',
w_task='Write a six-line tasking for a regulatory answer.',
w_steps=['Line 1: say what the reply must do and must not do.',
         'Line 2: say which correspondence is yours, and what you may not certify.',
         'Line 3: say what you are giving it.',
         'Line 4: say what the reply must contain and exclude.',
         'Line 5: say when it is sent and what is kept.',
         'Line 6: say what you do with an ambiguous question.'],
w_bank=['Purpose: so that a reply answers the question asked and does not open a second enquiry',
        'Scope: regulatory correspondence on operational and corporate matters; clinical questions are answered by the medical director and nothing in my reply certifies a figure I have not had certified',
        'Inputs: the regulator’s letter verbatim, every document requested, the figures with the name of whoever certified each, any clarification obtained with its date, and the deadline',
        'Criteria: the period and subject restated first; the regulator’s own numbering followed; nothing outside the stated period or subject; one sentence recording anything deliberately not addressed; annexes numbered and listed; every clarification recorded with its date',
        'Done: sent before the deadline with a complete copy retained, including the annexes as sent',
        'Fallback: where the question is ambiguous, I telephone the case officer and record the answer in the reply rather than interpreting it myself'],
w_check=['Is the scope restated?',
         'Is their numbering followed?',
         'Is everything outside the scope removed?',
         'Are the annexes numbered and listed?'],

t_title='A regulator’s question answered within its exact scope',
t_fig=figs.split('FOUR QUESTIONS AND ONE DATE RANGE',
                 'It can draft',
                 ['the scope restatement',
                  'answers in their numbering',
                  'the not-addressed sentence',
                  'the numbered annex list'],
                 'It must not supply',
                 ['an interpretation of ambiguity',
                  'a certified figure',
                  'a clinical answer',
                  'the telephone call']),
t_fig_cap='It drafts the reply. Ten minutes on the telephone is the whole defence.',
t_body=[
 'Give it the letter verbatim, the documents requested, the certified figures and '
 'any clarification with its date.',
 'A regulator’s question answered within its exact scope restates the period and '
 'follows their numbering.',
 'Then ask it to mark every sentence outside the scope.'],
t_say=[('Your question covers: ', 'January to March.'),
       ('We have not addressed: ', 'The position after March.'),
       ('Annexes one to four: ', 'Are the documents requested.')],
t_bound='It cannot telephone the case officer, and an unrecorded interpretation '
        'cost a year of being suspected of counting selectively.',
t_a=[('Give it the regulator’s letter ____________.', 'verbatim'),
     ('And every document ____________.', 'requested'),
     ('And the figures with their ____________.', 'certification'),
     ('Restate the ____________ before answering.', 'period'),
     ('And follow ____________ numbering.', 'their'),
     ('And mark every sentence ____________ the scope.', 'outside')],
t_b_rubric='Say what the regulatory work should do with each item.',
t_b=[('three pages about April', 'remove them as outside the scope'),
     ('a described but unenclosed log', 'enclose it as a numbered annex'),
     ('an ambiguous definition of incidents', 'telephone the case officer and record it'),
     ('“we enclose a range of documents”', 'list the numbered annexes')],

case=dict(
 title='The Decision Room · The three pages about April',
 brief=[
  'A hospital answered regulatory enquiries with comprehensive responses that '
  'included wider context and subsequent improvement beyond the period asked '
  'about.',
  'Over three years, 27 enquiries were answered. 18 replies included material '
  'outside the stated scope. 11 of those 18 were followed by a further enquiry '
  'about the volunteered material. 4 replies described a requested document '
  'instead of enclosing it, and all 4 were asked again. In 2 cases an ambiguous '
  'question was interpreted without asking, and both interpretations were later '
  'found to have understated a figure.',
  'A rule was introduced that replies restate the scope, follow the regulator’s '
  'numbering, exclude anything outside the period and record every clarification. '
  'Further enquiries arising from volunteered material fell to none.'],
 exhibit=figs.datatable('THREE YEARS OF REGULATORY REPLIES',
                        ['Item', 'Before / After'],
                        [['enquiries answered', '27 / 24'],
                         ['replies with material outside scope', '18 / 1'],
                         ['further enquiries about volunteered material', '11 / 0'],
                         ['documents described rather than enclosed', '4 / 0'],
                         ['ambiguities interpreted without asking', '2 / 0'],
                         ['mean pages per reply', '9 / 4']]),
 exhibit_cap='The same enquiries, answered exactly, in less than half the pages.',
 exhibit_note='Eleven further enquiries arose from material nobody had asked for. '
              'Each had been volunteered to demonstrate that the organisation had '
              'improved.',
 voices=[('A director', 'about context',
          'Answering a regulator in four lines looks evasive. Context demonstrates that we understand our own position.'),
         ('Margarida Pires', 'director of corporate affairs',
          'Eleven further enquiries came from context nobody had requested, and each took about forty staff hours.'),
         ('A case officer', 'quoted in correspondence',
          'Where a provider supplies information beyond the scope of our request, we are obliged to consider it.')],
 steps=[('Find it', 'How many replies went outside the scope?'),
        ('Compare it', 'Volunteered material against further enquiries.'),
        ('Infer it', 'Why did helpfulness generate work?'),
        ('Weigh it', 'The appearance of openness against forty hours each.'),
        ('Decide', 'What does a reply contain?')],
 analysis=[('Find it. How many?', '18 of 27'),
           ('Compare it. How many followed up?', '11 of the 18'),
           ('Infer it. Why?', 'because a regulator must consider what it is given'),
           ('Weigh it. What was traded?', 'the appearance of openness for eleven enquiries at forty hours each'),
           ('Decide. What does it contain?', 'the scope restated and answers within it only')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say what a reply restates.',
                 'Say what a reply excludes.',
                 'Say how documents are provided.',
                 'Say what happens with an ambiguous question.'],
 bank=['Every reply to a regulator restates the period and subject of the question in its first paragraph and answers in the regulator’s own numbering.',
       'No reply includes information outside the stated period or subject of the question, and anything deliberately not addressed is recorded in one sentence.',
       'Every document requested is enclosed as a numbered annex and listed in the covering letter, and no document is described in place of being enclosed.',
       'Where a question is capable of more than one reading, the case officer is asked, and the question put and the answer received are recorded in the reply.'],
 outcome='The hospital adopts the four lines. Replies containing material outside '
         'the scope fall from eighteen to one, further enquiries arising from '
         'volunteered material from eleven to none, documents described rather '
         'than enclosed from four to none, unrecorded interpretations from two to '
         'none, and the mean length of a reply from nine pages to four.',
 outcome_q=[('What happened to out-of-scope material?', 'it fell from eighteen replies to one'),
            ('What happened to further enquiries?', 'they fell from eleven to none'),
            ('What happened to described documents?', 'there were none'),
            ('What happened to unrecorded interpretations?', 'there were none'),
            ('What happened to reply length?', 'it fell from nine pages to four')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · A comprehensive response',
 task=['This was the opening of an eleven-page reply to four regulatory questions.',
       'This is what it said.'],
 draft=['We are pleased to provide a comprehensive response to your enquiry.',
        'It may be helpful to set out some of the wider context first.',
        'Considerable improvement has been achieved in recent months.',
        'We enclose a range of documents which we hope will assist you.',
        'The escalation log is maintained and reviewed on a regular basis.',
        'We trust this addresses the matters you have raised.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines of a reply that answer none of the four questions asked.',
 asked=['a comprehensive response', 'wider context',
        'a range of documents'],
 back=['18 of 27 replies outside scope',
       '11 further enquiries', '4 documents described not enclosed'],
 gap='Nobody could tell which question each paragraph answered, what period it covered, or what was actually enclosed.',
 back_cap='Six lines that will produce a second letter within a fortnight.',
 back_note='“The escalation log is maintained and reviewed” describes the document '
           'the regulator asked to be sent.',
 diagnosis=[('“a comprehensive response”', 'unbounded quantity'),
            ('“wider context”', 'unscoped set'),
            ('“a range of documents”', 'unscoped set'),
            ('“considerable improvement”', 'unbounded quantity'),
            ('“on a regular basis”', 'unstated criterion'),
            ('“we trust this addresses the matters”', 'unstated criterion')],
 rewrite='Rewrite it on the six lines so that the enquiry can be closed.',
 scaffold=['what the reply must do and must not do',
           'which correspondence is yours, and what you may not certify',
           'what you are giving it',
           'what the reply must contain and exclude',
           'when it is sent and what is kept',
           'what you do with an ambiguous question'],
 bank=['Purpose: so that a reply answers the question asked and does not open a second enquiry',
       'Scope: regulatory correspondence on operational and corporate matters; clinical questions are answered by the medical director, questions about an identifiable patient follow the confidentiality route, and nothing in my reply certifies a figure I have not had certified',
       'Inputs: the regulator’s letter verbatim, every document requested, the figures with the name of whoever certified each, any clarification obtained with its date, and the deadline',
       'Criteria: the period and subject restated in the first paragraph; the regulator’s own numbering followed; nothing outside the stated period or subject included; one sentence recording anything deliberately not addressed; annexes numbered and listed in the covering letter; and every clarification recorded with the date and the person spoken to',
       'Done: sent before the deadline with a complete copy retained, including the annexes as sent',
       'Fallback: where the question is ambiguous, I telephone the case officer and record the answer in the reply rather than interpreting it myself'],
 check=['Is the period restated?',
        'Does it follow their numbering?',
        'Is the log enclosed as an annex?',
        'Is the out-of-scope material removed?'],
 model=['so that a reply answers the question asked and does not open a second enquiry',
        'regulatory correspondence on operational and corporate matters; clinical questions are answered by the medical director, questions about an identifiable patient follow the confidentiality route, and nothing in my reply certifies a figure I have not had certified',
        'the regulator’s letter verbatim, every document requested, the figures with the name of whoever certified each, any clarification obtained with its date, and the deadline',
        'the period and subject restated in the first paragraph; the regulator’s own numbering followed; nothing outside the stated period or subject included; one sentence recording anything deliberately not addressed; annexes numbered and listed in the covering letter; and every clarification recorded with the date and the person spoken to',
        'sent before the deadline with a complete copy retained, including the annexes as sent',
        'where the question is ambiguous, I telephone the case officer and record the answer in the reply rather than interpreting it myself'],
 cost='18 of 27 replies going outside scope, 11 further enquiries, and 4 documents described rather than sent.'),

lang=dict(
 title='The Unwelcome Number · Removing three pages a director wants to keep',
 setting=[
  'A director has written three pages about April’s improvement into a reply about '
  'January to March. Margarida intends to delete them.',
  'She has to remove the material without implying that the improvement does not '
  'matter or that he was trying to mislead anybody.'],
 ladder=[('A director proud of April', 'and a question about January to March'),
         ('Eleven further enquiries', 'from material nobody asked for'),
         ('Either keep the context', 'or remove it and send four pages')],
 cap='Four questions, one date range, three pages to delete.',
 turns=[('Turn 1 · Margarida', 'The three pages about April are coming out, because the question covers January to March.'),
        ('Turn 2 · Director', 'Then we look like an organisation that will not say anything beyond the minimum.'),
        ('Turn 3 · Margarida', 'Eleven of our last eighteen out-of-scope replies produced a further enquiry, at about forty staff hours each.')],
 holds=['The April improvement is real, and I shall offer it in the next quarterly return where it belongs.',
        'A case officer who is given April must consider April, and that is their duty rather than their choice.',
        'The reply will say in one sentence that we have not addressed the period after March.',
        'That sentence protects us against any suggestion that we were concealing the later position.',
        'Nobody thinks you were overstating anything; the instinct to show improvement is the right one.',
        'And if the regulator ever criticises us for answering exactly, I shall take that criticism myself.'],
 redline='Never volunteer material outside the scope of a regulator’s question, '
         'and never describe a document that has been asked for.',
 score=['Stated the deletion in the first sentence.',
        'Gave the further-enquiry figures.',
        'Found the right home for the April material.',
        'Added the not-addressed sentence as protection.',
        'Took any criticism on herself.'],
 a=[('What is coming out of the reply?', 'the three pages about April'),
    ('Why?', 'the question covers January to March'),
    ('What happened with eighteen previous replies?', 'eleven produced a further enquiry'),
    ('Where will the April material go?', 'into the next quarterly return'),
    ('What sentence protects the organisation?', 'that the period after March has not been addressed'),
    ('What is the redline?', 'never volunteer material outside the scope')]),

rev_fig=figs.split('A REGULATORY ANSWER',
                   'Say',
                   ['your question covers January to March',
                    'the answers follow the numbering of your letter',
                    'we have not addressed the position after March',
                    'annexes one to four are the documents requested'],
                   'Never say',
                   ['we are pleased to provide a comprehensive response',
                    'it may be helpful to set out some context',
                    'considerable improvement has been achieved',
                    'we enclose a range of documents']),
rev_fig_cap='Four sentences that close an enquiry, and four that open another.',
rev=dict(
 read=[('How many questions and what period?',
        ['four, about January to March', 'two, about April',
         'eleven, about the year', 'four, about the year'], 0),
       ('What does volunteering material do?',
        ['opens a new line of enquiry', 'demonstrates openness',
         'shortens the reply', 'satisfies the regulator'], 0),
       ('What is done with an ambiguous question?',
        ['the case officer is asked', 'the narrower reading is taken',
         'the wider reading is taken', 'both answers are given'], 0),
       ('How are requested documents provided?',
        ['as numbered annexes, listed in the letter', 'described in the text',
         'summarised in a table', 'offered on request'], 0)],
 listen_text='Give it the letter verbatim, the documents requested, the certified '
             'figures and any clarification with its date. Restate the period '
             'before answering.',
 listen=[('Give it the regulator’s letter ____________.', 'verbatim'),
         ('And every document ____________.', 'requested'),
         ('And the figures with their ____________.', 'certification'),
         ('Restate the ____________ before answering.', 'period')],
 speak=['Sort eight items into inside and outside a stated scope.',
        'Then draft the clarification you would seek for six ambiguities.'],
 write='Write a six-line tasking for a regulatory answer.',
 vocab=[('A question with dates and a subject is a question with a precise ____________.', 'scope'),
        ('The period you must not stray outside is a date ____________ in the question.', 'range'),
        ('The signature that carries the liability is a certification somebody ____________.', 'signs'),
        ('A document the regulator can cite is an annex that is ____________.', 'numbered')],
 gram=[('I ____________ taken incidents to include near misses.', 'have'),
       ('Following my telephone call ____________ the eleventh.', 'on'),
       ('Annexes one ____________ four are the documents requested.', 'to'),
       ('Which falls ____________ your question.', 'outside')]),

found=['Restate the period and the subject before you answer.',
       'Follow the regulator’s numbering, and answer inside the scope only.',
       'Enclose what was asked for, numbered and listed.',
       'Telephone about an ambiguity, and record the answer in the reply.'],
end_line='Eleven further enquiries arose from material nobody had asked for, and each had been volunteered to show that the organisation had improved.',
end_next='Next: A Public Meeting About a Change')
