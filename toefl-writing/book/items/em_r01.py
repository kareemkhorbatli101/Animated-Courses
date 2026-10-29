# -*- coding: utf-8 -*-
"""Email practice items: EM 007-010 (requests), EM 013-020 (complaints)."""
from _kit import em

R = 'Request and ask for help'
C = 'Complaint and remedy'

ITEMS = [

em('EM 007', R,
   ('say what you need the account for, not just that you need it',
    'the infinitive of purpose',
    'reactivate, credentials, lapse, in order to',
    'writing to a service desk that handles hundreds of tickets'),
   'Your library and printing account was deactivated when you interrupted '
   'your studies for a year. You have now returned, your student card works, '
   'but the online account does not.',
   ['Say who you are and what has stopped working.',
    'Explain why you need it now.',
    'Give the details that will let them find your record.'],
   'servicedesk@northgate.ac.uk', 'Account not reactivated after return from interruption',
   [('P1', 'Decode the task', [
      'a.  A service desk reads hundreds of these. What single thing makes '
      'yours answerable without a reply asking for more information?',
      'b.  Why does the second bullet exist at all?']),
    ('P2', 'Prime the vocabulary', [
      ['a.  Which verb: to ', ('reactivate', {'italic': True}), ' · to ',
       ('restore', {'italic': True}), ' · to ',
       ('renew', {'italic': True}), ' an account that was switched off?'],
      'b.  What are your credentials, and what does it mean for access to lapse?']),
    ('P3', 'Write it before you read it', [
      ['State the purpose of the request in one clause beginning with ',
       ('to', {'italic': True}), '.']])],
   ['Dear Service Desk,',
    'I interrupted my studies last September and returned this week. My '
    'student card opens the buildings again, but my library and printing '
    'account still appears as inactive when I try to log in.',
    'I have two assessed essays due at the end of the month and need the '
    'account in order to access the e-journals and to print.',
    'My details are: Rosa Ilundain, student number 2191447, MA History, '
    'returned from interruption on 20 October. Happy to come to the desk in '
    'person with my card if that is simpler.',
    'Thank you very much.',
    'Best wishes,', 'Rosa Ilundain'],
   [('F1', 'Take the answer apart', [
      'a.  Which paragraph would a busy desk read first, and is it in the '
      'right place?',
      'b.  Four separate identifiers appear. Name them and say why four is '
      'not excessive.']),
    ('F2', 'Harvest the language', [
      ['a.  “', ('in order to', {'italic': True}),
       ' access the e-journals”. What does the full form add over a '
       'bare ', ('to', {'italic': True}), '?'],
      ['b.  Why ', ('appears as inactive', {'italic': True}), ' rather than ',
       ('is deactivated', {'italic': True}), '?']]),
    ('F3', 'Why this is a 5 and that is a 3', [
      'Name the three things that hold the version below at band 3.'])],
   ['Hello,', 'My account is not working since I came back to the university '
    'after one year of interruption. I can enter the buildings with my card '
    'but I cannot login to the system. Please fix this problem urgently '
    'because I need to print my essays. Thank you.', 'Rosa'],
   [('P1', [['a.  Your student number. Without it the desk cannot find your '
             'record, and the first reply will simply ask for it — '
             'which costs you a day.'],
            ['b.  Because it tells the desk how urgent the ticket is without '
             'you having to claim urgency. A deadline is a fact; '
             '“urgent” is an opinion they have heard already '
             'today.']]),
    ('P2', [['a.  ', ('Reactivate', {'bold': True}),
             ' — it is the system’s own word for switching a '
             'dormant account back on. ', ('Renew', {'italic': True}),
             ' implies an expiry; ', ('restore', {'italic': True}),
             ' suggests data was lost.'],
            ['b.  Your ', ('credentials', {'bold': True}),
             ' are the username and password that prove who you are. Access ',
             ('lapses', {'bold': True}),
             ' when it quietly expires through inaction rather than being '
             'withdrawn.']]),
    ('P3', [['Model: ', ('I need the account in order to access the '
                        'e-journals and to print.', {'italic': True})],
            ['The purpose clause is what converts a complaint about a broken '
             'system into a request with a reason attached.']]),
    ('F1', [['a.  The fourth — the identifiers. It is in the right '
             'place: the desk reads the first line to classify the ticket, '
             'then jumps to the details. Putting the student number first '
             'would read as a form rather than a message.'],
            ['b.  Name, number, programme, date of return. Four, because '
             'each unlocks a different system — and supplying them '
             'unasked removes the single commonest cause of delay.']]),
    ('F2', [['a.  ', ('In order to', {'italic': True}),
             ' marks the purpose explicitly and slightly more formally. A '
             'bare ', ('to', {'italic': True}),
             ' would also work; the full form is useful when the infinitive '
             'sits a long way from its verb, as here, because it tells the '
             'reader at once that a reason is coming.'],
            ['b.  Because you do not know that it was deactivated — you '
             'know what your screen says. Reporting the symptom rather than '
             'diagnosing the cause is both more accurate and less likely to '
             'send the desk down the wrong path.']]),
    ('F3', [['1.  ', ('No identifiers.', {'bold': True}),
             ' No student number, no programme, no name in the body. The '
             'third bullet is unaddressed and the ticket cannot be actioned.'],
            ['2.  ', ('It instructs.', {'bold': True}),
             ' “Please fix this problem urgently” claims a priority '
             'the writer cannot assign, and gives no deadline that would '
             'justify it.'],
            ['3.  ', ('Language.', {'bold': True}),
             ' “is not working since I came back” (has not worked '
             'since), “login” as a verb (log in), “one year '
             'of interruption” (a year’s interruption).']])]),

em('EM 008', R,
   ('offer something in return, and make the offer concrete',
    'the conditional offer of reciprocity',
    'accommodation, adjustment, invigilator, seating',
    'asking for an adjustment without disclosing more than you wish'),
   'You have a hearing impairment and need to sit your exams near the front, '
   'away from the corridor door. You have no formal adjustment on file '
   'because you were only diagnosed last month. Exams begin in three weeks.',
   ['Explain what you need.',
    'Say why there is nothing on file.',
    'Offer whatever will help the office act quickly.'],
   'exams@northgate.ac.uk', 'Seating adjustment request — exams, May sitting',
   [('P1', 'Decode the task', [
      'a.  How much medical detail does the office actually need?',
      'b.  Three weeks is short. What should you do about that in the email '
      'itself?']),
    ('P2', 'Prime the vocabulary', [
      ['a.  In an exams office, what is an ',
       ('adjustment', {'italic': True}), ', and how does it differ from ',
       ('special consideration', {'italic': True}), '?'],
      'b.  Who is the invigilator, and why might they need to know?']),
    ('P3', 'Write it before you read it', [
      'Explain the missing paperwork in one sentence that does not sound '
      'like an excuse.'])],
   ['Dear Exams Office,',
    'I am writing to ask about a seating adjustment for the May exams. I have '
    'a hearing impairment and need to sit near the front of the room and away '
    'from the corridor door, where the noise makes it hard to follow '
    'announcements.',
    'There is nothing on my record yet because I was only diagnosed last '
    'month; the audiology report is dated 14 April and I can forward it '
    'today. I realise three weeks is not much notice, which is why I wanted '
    'to raise it now rather than wait for the full disability assessment.',
    'If it helps, I am happy to sit in a different room, to take the paper at '
    'a different time, or to speak to the invigilator beforehand — '
    'whichever is least disruptive for you.',
    'Thank you for looking at this.',
    'Yours sincerely,', 'Tobias Lindemann — 2203118'],
   [('F1', 'Take the answer apart', [
      'a.  How much is disclosed about the condition, and how much about its '
      'effect? Why that balance?',
      'b.  The writer offers three alternatives. What does offering a menu '
      'achieve that one request would not?']),
    ('F2', 'Harvest the language', [
      ['a.  “which is why I wanted to raise it now rather than wait'
       '” — what does this clause pre-empt?'],
      ['b.  Why ', ('whichever is least disruptive for you', {'italic': True}),
       ' rather than ', ('whichever you prefer', {'italic': True}), '?']]),
    ('F3', 'Why this is a 5 and that is a 3', [
      'Name the three things that hold the version below at band 3.'])],
   ['Dear Sir or Madam,', 'I have a problem with my hearing and I need to '
    'sit in the front in the exams. Unfortunately I don’t have any '
    'document in my file because the doctors in this country took very long '
    'time to give me the diagnosis, which was not my fault. I hope you can '
    'arrange this for me because otherwise I will not be able to do my exams '
    'properly.', 'Thank you for understanding.'],
   [('P1', [['a.  Almost none about the condition; everything about the '
             'effect. The office is not assessing your health, it is '
             'allocating a seat — so what it needs is the functional '
             'consequence (front of room, away from the door) and evidence '
             'that it is real.'],
            ['b.  Name it yourself, before they do. Acknowledging the short '
             'notice and explaining why it could not be helped removes the '
             'reply “you should have told us sooner”.']]),
    ('P2', [['a.  An ', ('adjustment', {'bold': True}),
             ' changes the conditions in which you sit the exam. ',
             ('Special consideration', {'bold': True}),
             ' is applied afterwards, to the mark, when something went wrong '
             'on the day. You are asking for the first.'],
            ['b.  The person supervising the room. They need to know because '
             'the adjustment is useless if the invigilator moves you or does '
             'not know to face you when speaking.']]),
    ('P3', [['Model: ', ('There is nothing on my record yet because I was '
                        'only diagnosed last month; the audiology report is '
                        'dated 14 April and I can forward it today.',
                        {'italic': True})],
            ['A date and a document turn an explanation into evidence. '
             'Without them it is an assertion the office cannot act on.']]),
    ('F1', [['a.  One clause on the condition, two on the effect. That is '
             'the right balance because the effect is what the office can '
             'act on, and because you keep control of what you disclose.'],
            ['b.  It converts a request they might refuse into a problem they '
             'can solve. A single demand has one answer; a menu almost always '
             'has at least one item the office can grant today.']]),
    ('F2', [['a.  The reply that you should have waited for the full '
             'assessment. By naming the slower, more correct route and '
             'explaining why you did not take it, you close off the easiest '
             'way to defer your request.'],
            ['b.  Because ', ('you prefer', {'italic': True}),
             ' makes it a matter of their taste; ',
             ('least disruptive for you', {'italic': True}),
             ' names their actual constraint, which is workload. Speaking to '
             'the reader’s real problem is what gets a quick answer.']]),
    ('F3', [['1.  ', ('No evidence and no offer.', {'bold': True}),
             ' There is no report, no date and no alternative — the '
             'third bullet is unaddressed entirely, so the office has '
             'nothing to act on.'],
            ['2.  ', ('It blames and then pressures.', {'bold': True}),
             ' “the doctors in this country took very long time” '
             'and “which was not my fault” argue with an accusation '
             'nobody made; “otherwise I will not be able to do my exams '
             'properly” puts the consequence on them.'],
            ['3.  ', ('Language.', {'bold': True}),
             ' “sit in the front in the exams” (at the front, in '
             'exams), “very long time” (a very long time), '
             '“any document” (any documentation).']])]),

em('EM 009', R,
   ('ask for a place by removing the reasons to refuse you',
    'the indirect speech act — a statement that works as a request',
    'oversubscribed, waiting list, capped, prerequisite',
    'asking for an exception to a numerical limit'),
   'A seminar you need for your dissertation is full. The convenor has '
   'capped it at sixteen. You have the prerequisite, your dissertation '
   'depends on it, and you would take it pass/fail if that helped.',
   ['Ask to be added.',
    'Show that you meet the requirements.',
    'Reduce the cost to the convenor of saying yes.'],
   'h.nakamura@northgate.ac.uk', 'HIST430 — request to be added to the seminar',
   [('P1', 'Decode the task', [
      'a.  The cap exists for a reason. What is it likely to be, and what '
      'follows for your argument?',
      'b.  Why is “I really need this module” a weak argument '
      'however true?']),
    ('P2', 'Prime the vocabulary', [
      ['a.  Distinguish ', ('oversubscribed', {'italic': True}), ', ',
       ('capped', {'italic': True}), ' and ',
       ('full', {'italic': True}), '.'],
      'b.  What is a prerequisite, and why name yours unprompted?']),
    ('P3', 'Write it before you read it', [
      'Make a request without a question mark: one statement that functions '
      'as an ask.'])],
   ['Dear Dr Nakamura,',
    'I am writing about HIST430, which is showing as full. I wondered whether '
    'there might be any flexibility on the cap.',
    'I took HIST212 last year and got a first, so I have the prerequisite, '
    'and my dissertation is on the Meiji land reforms — your seminar is '
    'the only place in the department where that material is taught. Without '
    'it I would be writing the dissertation from secondary sources alone.',
    'I know a cap of sixteen is there to keep the discussion workable, and I '
    'would not want to be the person who makes it unworkable. If a '
    'seventeenth is genuinely too many, I would be glad to audit it instead '
    'and not take up assessment time, or to go on a waiting list in case '
    'anyone drops.',
    'Thank you for considering it.',
    'With best wishes,', 'Amelia Strand'],
   [('F1', 'Take the answer apart', [
      'a.  The writer states the convenor’s reason for the cap, and '
      'agrees with it. Why is that the strongest move available?',
      'b.  Two fallback offers are made. Which costs the convenor least, and '
      'why is that the one that will probably be taken?']),
    ('F2', 'Harvest the language', [
      ['a.  “I wondered whether there might be any flexibility on the '
       'cap.” There is no question mark. What makes it a request?'],
      ['b.  “I would not want to be the person who makes it unworkable'
       '” — what does this sentence do for the writer?']]),
    ('F3', 'Why this is a 5 and that is a 3', [
      'Name the three things that hold the version below at band 3.'])],
   ['Dear Professor,', 'I saw that your seminar HIST430 is full but I really '
    'need this module for my dissertation and it is very important for me. I '
    'am a very good student and I am sure I will not cause any problem in the '
    'class. Please add me to the list, one more student cannot make a big '
    'difference for the discussion. I am waiting for your positive answer.',
    'Thank you.'],
   [('P1', [['a.  Seminar quality — above a certain number the '
             'discussion stops working. So the argument cannot be that one '
             'more makes no difference; it has to be that you will not be '
             'the one who breaks it, or that you can be added without '
             'counting against the cap.'],
            ['b.  Because every student excluded from a full module needs it. '
             'Need does not distinguish you; a prerequisite, a specific '
             'dissertation topic and a willingness to audit do.']]),
    ('P2', [['a.  ', ('Full', {'bold': True}),
             ' is the state; ', ('capped', {'bold': True}),
             ' says a deliberate limit was set, which implies a person who '
             'could unset it; ', ('oversubscribed', {'bold': True}),
             ' says demand exceeded places, which is the convenor’s '
             'framing and the sympathetic one.'],
            ['b.  The condition you must have met to take the module. Naming '
             'yours unprompted removes the first and easiest reason to refuse '
             'you.']]),
    ('P3', [['Model: ', ('I wondered whether there might be any flexibility '
                        'on the cap.', {'italic': True})],
            ['It reports a thought rather than asking a question, so the '
             'reader is free to respond to it or not. That freedom is what '
             'makes it polite — and it is still unmistakably a request.']]),
    ('F1', [['a.  Because it proves you are not asking the convenor to '
             'pretend the problem does not exist. Once you have conceded '
             'that the cap is right, any flexibility he offers is his own '
             'judgement rather than a defeat — and people grant far more '
             'readily when agreeing does not mean admitting they were wrong.'],
            ['b.  Auditing. It costs no assessment time, no marking and no '
             'place on the register, which means it falls outside the reason '
             'the cap exists. An offer engineered to sidestep the '
             'reader’s actual constraint is worth more than any amount '
             'of pleading.']]),
    ('F2', [['a.  Context and the modal stack. ',
             ('I wondered whether there might be any flexibility',
              {'italic': True}),
             ' could literally be a report of a private thought, but no '
             'reader takes it that way — an indirect speech act works '
             'precisely because both parties know what it means while '
             'neither has to say it.'],
            ['b.  It pre-empts the convenor’s unspoken objection by '
             'voicing it first, and in doing so shows that the writer values '
             'the seminar for the same reason he does. It also makes refusal '
             'easy, which paradoxically makes acceptance likelier.']]),
    ('F3', [['1.  ', ('It argues against the cap.', {'bold': True}),
             ' “one more student cannot make a big difference” '
             'tells the convenor his judgement is wrong, which is the one '
             'argument guaranteed not to work.'],
            ['2.  ', ('No evidence and no fallback.', {'bold': True}),
             ' “I am a very good student” is unverifiable; the '
             'prerequisite, the dissertation topic and any alternative to '
             'full enrolment are all missing, so bullets two and three are '
             'unaddressed.'],
            ['3.  ', ('Language and register.', {'bold': True}),
             ' “Please add me to the list” is an instruction, '
             '“I am waiting for your positive answer” forecloses '
             'the refusal, and “very important for me” should be '
             '“to me”. There is also a comma splice at '
             '“the list, one more student”.']])]),

em('EM 010', R,
   ('close by making the next step unambiguous',
    'pre-closing formulae',
    'transcript, certified, third party, on my behalf',
    'asking an office to send your data to someone else'),
   'A scholarship body needs an official transcript sent directly from the '
   'university, not by you. Their deadline is 6 June. The records office '
   'normally takes ten working days and charges a fee.',
   ['Say exactly what you need sent and to whom.',
    'Give the deadline and acknowledge the processing time.',
    'Deal with the fee without being asked.'],
   'records@northgate.ac.uk', 'Official transcript to be sent to the Varga Foundation by 6 June',
   [('P1', 'Decode the task', [
      'a.  Everything here is administrative. What is the single way this '
      'email can still go wrong?',
      'b.  Why mention the fee before they do?']),
    ('P2', 'Prime the vocabulary', [
      ['a.  What makes a transcript ', ('official', {'italic': True}),
       ' or ', ('certified', {'italic': True}),
       ', and why will a PDF you forward yourself not do?'],
      ['b.  What does ', ('on my behalf', {'italic': True}), ' mean, and who '
       'is the ', ('third party', {'italic': True}), ' here?']]),
    ('P3', 'Write it before you read it', [
      'Write a closing line that tells the reader exactly what happens next '
      'and who does it.'])],
   ['Dear Records Office,',
    'I need an official transcript sent directly to a scholarship body, and '
    'I understand it has to come from the University rather than from me.',
    'The details are: Varga Foundation, Admissions Office, 14 Rakoczi ut, '
    '1088 Budapest, Hungary, marked for the attention of Dr Eszter Nagy. '
    'Their deadline for receipt is 6 June. My record: Jonas Weiss, 2184902, '
    'BSc Economics, graduated 2024.',
    'I realise ten working days is the normal turnaround and that 6 June is '
    'close, so if it would help I can collect a sealed copy and arrange '
    'courier delivery myself — their rules allow that provided the '
    'envelope is sealed and stamped by the University.',
    'I have paid the £15 fee online this morning; the reference is '
    'TR-44027.',
    'Could you confirm when it has been sent, so that I can tell them to '
    'expect it?',
    'Thank you very much.',
    'Yours sincerely,', 'Jonas Weiss'],
   [('F1', 'Take the answer apart', [
      'a.  Count the pieces of information the office would otherwise have '
      'had to ask for.',
      'b.  The last line is a question. Why end on one rather than on thanks?']),
    ('F2', 'Harvest the language', [
      ['a.  “provided the envelope is sealed and stamped” — '
       'why ', ('provided', {'italic': True}), ' rather than ',
       ('if', {'italic': True}), '?'],
      ['b.  “I have paid the fee this morning”. Why the present '
       'perfect with ', ('this morning', {'italic': True}), '?']]),
    ('F3', 'Why this is a 5 and that is a 3', [
      'Name the three things that hold the version below at band 3.'])],
   ['Dear Sir/Madam,', 'I need you to send my transcript to a scholarship '
    'foundation in Hungary. It is quite urgent because their deadline is '
    'soon. Please send it as fast as possible, I think you have all my '
    'details in the system already. Also please tell me if there is any fee '
    'for this service.', 'Thanks in advance.'],
   [('P1', [['a.  By being incomplete. There is no argument to win and no '
             'tone to get right — the only failure mode is a missing '
             'address, deadline, record number or payment, each of which '
             'costs a round trip you cannot afford against a deadline.'],
            ['b.  Because it is the one obstacle the office will otherwise '
             'stop at. Paying it unprompted removes a step and signals that '
             'you have read their procedure, which makes everything else you '
             'say more credible.']]),
    ('P2', [['a.  It is sent by the institution, usually sealed and stamped, '
             'so the recipient knows it has not passed through your hands. A '
             'PDF you forward proves nothing about its integrity, which is '
             'the entire point of the requirement.'],
            ['b.  ', ('On my behalf', {'bold': True}),
             ' means acting in your place, with your authority. The ',
             ('third party', {'bold': True}),
             ' is the Varga Foundation — anyone who is neither you nor '
             'the university, and whose involvement is why the data '
             'protection question arises at all.']]),
    ('P3', [['Model: ', ('Could you confirm when it has been sent, so that I '
                        'can tell them to expect it?', {'italic': True})],
            ['It names the next action, who performs it, and why — and '
             'it gives you a record of dispatch, which is what you will need '
             'if it goes astray.']]),
    ('F1', [['a.  Nine: full postal address, named recipient, their deadline, '
             'your name, student number, programme, graduation year, the fee '
             'payment and its reference. Each one is a reply the office does '
             'not have to send.'],
            ['b.  Because thanks closes a conversation and this one is not '
             'finished. A question leaves an action open and makes a reply '
             'the natural response — and you want the confirmation on '
             'record.']]),
    ('F2', [['a.  ', ('Provided', {'italic': True}),
             ' sets a requirement rather than imagining a possibility: it '
             'says the foundation permits this, and here is the exact '
             'condition. ', ('If', {'italic': True}),
             ' would leave the arrangement sounding uncertain.'],
            ['b.  Because the relevance is present — the fee is paid, '
             'the obstacle is gone. ', ('This morning', {'italic': True}),
             ' is an unfinished period, so the present perfect is '
             'correct; after midnight it would have to be ',
             ('I paid yesterday', {'italic': True}), '.']]),
    ('F3', [['1.  ', ('No usable details.', {'bold': True}),
             ' No address, no named recipient, no actual deadline, no student '
             'number. The office cannot send anything, so the first and '
             'second bullets both fail.'],
            ['2.  ', ('It asks about the fee instead of settling it.',
                      {'bold': True}),
             ' That guarantees at least two more emails before anything is '
             'posted, against a deadline the writer calls urgent.'],
            ['3.  ', ('Language.', {'bold': True}),
             ' “I need you to send” is an instruction, “as '
             'fast as possible” is vague where a date was needed, and '
             'there is a comma splice at “as possible, I think”.']])]),

em('EM 013', C,
   ('report the charge, not the character of whoever made it',
    'the concessive although',
    'itemised, debit, in error, reconcile',
    'complaining about money without implying bad faith'),
   'Your meal card has been debited twice for the same lunch on 4 March, '
   '£8.40 each time. The catering office told you in person to email. '
   'You have the receipt.',
   ['State what the charge was and when.',
    'Say what you have already done.',
    'Say what you would like.'],
   'catering@northgate.ac.uk', 'Duplicate debit, meal card 4418 — 4 March',
   [('P1', 'Decode the task', [
      'a.  This is almost certainly a system error. How should that shape '
      'the tone?',
      'b.  What is the one detail that makes this provable?']),
    ('P2', 'Prime the vocabulary', [
      ['a.  Which is the accounting word for a charge taken from an '
       'account: ', ('debit', {'italic': True}), ', ',
       ('deduction', {'italic': True}), ', ', ('withdrawal', {'italic': True}),
       '?'],
      ['b.  What does it mean to ', ('reconcile', {'italic': True}),
       ' two records, and what does ', ('in error', {'italic': True}),
       ' imply that ', ('wrongly', {'italic': True}), ' does not?']]),
    ('P3', 'Write it before you read it', [
      'Report the double charge in one sentence that assumes it was a '
      'mistake.'])],
   ['Dear Catering Office,',
    'My meal card (4418) appears to have been debited twice for the same '
    'lunch on 4 March — £8.40 at 12:41 and £8.40 at 12:42. I '
    'have the till receipt, which shows a single transaction, and can send a '
    'photograph of it.',
    'Although I mentioned it at the counter the same week and was told it '
    'would be looked at, the second charge is still showing on my statement.',
    'Could the duplicate be refunded to the card? If it is easier to '
    'reconcile it against the till record at your end than to work from my '
    'receipt, I am happy to leave it with you.',
    'Thank you very much.',
    'Best wishes,', 'Nia Okoro — card 4418'],
   [('F1', 'Take the answer apart', [
      'a.  Two timestamps one minute apart are quoted. What do they prove '
      'that “twice” does not?',
      'b.  Find the phrase that lets the office fix it their own way.']),
    ('F2', 'Harvest the language', [
      ['a.  Why ', ('appears to have been debited', {'italic': True}),
       ' rather than ', ('was debited', {'italic': True}), '?'],
      ['b.  The complaint about being ignored sits inside an ',
       ('although', {'italic': True}),
       '-clause. What does that placement do to its force?']]),
    ('F3', 'Why this is a 5 and that is a 3', [
      'Name the three things that hold the version below at band 3.'])],
   ['Hello,', 'You charged me two times for one lunch on 4 March, 8.40 each '
    'time. I already told your staff at the counter but nobody did anything, '
    'as usual. This is my money and I want it back on my card immediately. '
    'If this is not solved I will report it to the Students Union.',
    'Nia'],
   [('P1', [['a.  It should be almost apologetic in its confidence: state '
             'the facts plainly, assume good faith, and ask. Nobody '
             'deliberately double-charges £8.40, so any hint of '
             'accusation makes you look unreasonable rather than wronged.'],
            ['b.  The two timestamps. One minute apart is the signature of a '
             'card reader retrying, and it is the fact that will let the '
             'office find the transaction in seconds.']]),
    ('P2', [['a.  ', ('Debit', {'bold': True}),
             ' — the term used of a card or account in a ledger. The '
             'others describe the movement of money generally.'],
            ['b.  To ', ('reconcile', {'bold': True}),
             ' is to compare two records and account for the difference. ',
             ('In error', {'bold': True}),
             ' attributes the fault to the process; ',
             ('wrongly', {'italic': True}),
             ' hints at someone doing something wrong.']]),
    ('P3', [['Model: ', ('My card appears to have been debited twice for the '
                        'same lunch on 4 March — £8.40 at 12:41 '
                        'and £8.40 at 12:42.', {'italic': True})],
            ['No agent, a hedge, and two timestamps. The sentence is both '
             'gentler and more damning than an accusation would be, because '
             'it is checkable.']]),
    ('F1', [['a.  They prove it was one transaction read twice rather than '
             'two lunches. “Twice” is a claim; 12:41 and 12:42 is '
             'evidence, and it tells the office exactly where to look.'],
            ['b.  “If it is easier to reconcile it against the till '
             'record at your end … I am happy to leave it with you.'
             '” It offers to stop managing their process, which busy '
             'offices value more than help.']]),
    ('F2', [['a.  Because you are reading a statement, not their ledger. The '
             'hedge costs nothing, is more accurate, and means you are not '
             'contradicted if the explanation turns out to be something '
             'else.'],
            ['b.  It subordinates it. The grievance is reported but is '
             'grammatically secondary to the fact that the charge is still '
             'there — so the email registers that you were ignored '
             'without making that the complaint.']]),
    ('F3', [['1.  ', ('It accuses and generalises.', {'bold': True}),
             ' “You charged me”, “nobody did anything, as '
             'usual”. The second phrase turns one error into a '
             'character judgement about the department.'],
            ['2.  ', ('It threatens, and supplies no evidence.',
                      {'bold': True}),
             ' The receipt, the card number and the timestamps are all '
             'missing, so the office cannot locate the transaction — '
             'and the threat arrives before they have had a chance to fix '
             'anything.'],
            ['3.  ', ('Language.', {'bold': True}),
             ' “two times” (twice), “I want it back '
             'immediately”, “Students Union” '
             '(Students’ Union), and no greeting to a named office.']])]),

em('EM 014', C,
   ('separate the fault from the money you want back',
    'the perfect modal of reproach, used sparingly',
    'credit, retain, voucher, goodwill',
    'complaining to a machine’s owner rather than the machine'),
   'A printing machine took £5 of credit and produced nothing. You '
   'reported it on the touchscreen fault log, which gave you a reference. '
   'Nothing has happened in two weeks.',
   ['Report what happened.',
    'Say what you did about it.',
    'Ask for the credit back, not for the machine to be fixed.'],
   'printservices@northgate.ac.uk', 'Lost print credit — machine LIB-07, fault ref PR-3318',
   [('P1', 'Decode the task', [
      'a.  The third bullet rules something out. Why?',
      'b.  Which single piece of information makes this traceable?']),
    ('P2', 'Prime the vocabulary', [
      ['a.  Your account holds ', ('credit', {'italic': True}),
       '. What verb goes with returning it — ',
       ('refund', {'italic': True}), ', ', ('reimburse', {'italic': True}),
       ', ', ('credit back', {'italic': True}), '?'],
      ['b.  What is a ', ('goodwill', {'italic': True}),
       ' payment, and why might an office prefer it to admitting a fault?']]),
    ('P3', 'Write it before you read it', [
      'Say the machine kept your money without saying anyone stole it.'])],
   ['Dear Print Services,',
    'On 2 April the printer in the library foyer (LIB-07) took £5.00 of '
    'credit from my account and then stopped before printing anything. The '
    'job does not appear in my history, but the credit is gone.',
    'I logged it on the touchscreen the same afternoon and was given '
    'reference PR-3318. That was a fortnight ago and the credit has not come '
    'back.',
    'I am not asking for the machine to be looked at — I imagine that '
    'has been done. Could the £5.00 simply be credited back to my '
    'account? If it is easier to add it as a goodwill credit than to trace '
    'the original transaction, that would be perfectly fine by me.',
    'Thank you.',
    'Best wishes,', 'Ewan Carrick — 2199031'],
   [('F1', 'Take the answer apart', [
      'a.  The writer explicitly declines to ask about the machine. What '
      'does that buy?',
      'b.  Why offer to accept a goodwill credit rather than insist on a '
      'traced refund?']),
    ('F2', 'Harvest the language', [
      ['a.  “the credit is gone” — why not ',
       ('you took my credit', {'italic': True}), '?'],
      ['b.  “I imagine that has been done.” What is the function '
       'of this very short sentence?']]),
    ('F3', 'Why this is a 5 and that is a 3', [
      'Name the three things that hold the version below at band 3.'])],
   ['Dear Sir, Your printer in the library stole 5 pounds from my account two '
    'weeks ago and printed nothing at all. I reported it immediately but of '
    'course nobody answered me. These machines are always broken and the '
    'university should buy new ones instead of wasting our money. Please '
    'return my 5 pounds and also fix the printer because other students are '
    'losing their money too.', 'Ewan'],
   [('P1', [['a.  Because the two requests have different owners and '
             'different speeds. Repairs go to a technician and take weeks; a '
             'credit adjustment is a clerk and takes a minute. Asking for '
             'both lets the fast one get stuck behind the slow one.'],
            ['b.  The fault reference. It proves the report was made and '
             'dates it, which is the whole of your case for the two-week '
             'delay.']]),
    ('P2', [['a.  All three are possible, but ',
             ('credit back', {'bold': True}),
             ' is the precise one for a balance on an internal account. ',
             ('Refund', {'italic': True}), ' suggests money returning to a '
             'bank; ', ('reimburse', {'italic': True}),
             ' suggests repaying an expense you incurred.'],
            ['b.  A payment made without accepting liability. Offices like '
             'it because it settles the matter without creating a precedent '
             'or an admission — so offering to accept one is a genuine '
             'concession, not a surrender.']]),
    ('P3', [['Model: ', ('The printer took £5.00 of credit and then '
                        'stopped before printing anything.',
                        {'italic': True})],
            ['The machine is the subject, the verb is neutral, and the '
             'sequence does the accusing.']]),
    ('F1', [['a.  Speed. It strips the email down to one request, owned by '
             'one person, actionable today — and it signals that you '
             'are not using a £5 problem as a platform for complaining '
             'about the service generally.'],
            ['b.  Because tracing a failed transaction may be genuinely '
             'difficult or impossible, and insisting on it could leave the '
             'office unable to help you at all. You want the £5, not an '
             'audit.']]),
    ('F2', [['a.  Because the money has not gone to them in any meaningful '
             'sense — it has been lost between systems. Accusing the '
             'reader of taking it is both inaccurate and the fastest way to '
             'make a clerk defensive.'],
            ['b.  It performs generosity cheaply. By assuming the repair has '
             'been handled, the writer avoids the implication that nothing '
             'has been done, while still making clear that the one thing '
             'that matters to him has not.']]),
    ('F3', [['1.  ', ('It accuses the machine of theft and the office of '
                      'indifference.', {'bold': True}),
             ' “stole”, “of course nobody answered”, '
             '“always broken”, “wasting our money”. None '
             'of it is actionable and all of it invites a defensive reply.'],
            ['2.  ', ('It asks for the wrong things.', {'bold': True}),
             ' The third bullet specifically ruled out asking for the machine '
             'to be fixed; this asks for that, for new machines, and for a '
             'refund, with no reference number to find the report.'],
            ['3.  ', ('Language and register.', {'bold': True}),
             ' “Dear Sir” to a service team, “5 pounds” '
             '(£5), and the run-together opening line with the greeting '
             'on the same line as the first sentence.']])]),
]
