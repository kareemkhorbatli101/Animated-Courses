# -*- coding: utf-8 -*-
"""Write an Email - function 2 of 10: Complaint and remedy (EM 011-015)."""

T = 'WRITE AN EMAIL'
M = '7 minutes'
FN = 'Complaint and remedy'

ITEMS = [

# ------------------------------------------------------------------ 011
{
 'id': 'EM 011', 'task': T, 'time': M, 'function': FN + ' · anchor item',
 'payload': {
   'Strategy': 'complain about the fault, ask for the remedy, never prosecute the reader',
   'Grammar': 'the agentless passive; the perfect modal of reproach',
   'Vocabulary': 'faults and repairs: intermittent, report, log, attend to',
   'Convention': 'a complaint that names a remedy is twice as likely to get one',
 },
 'scenario': [
   'The heating in your room has been failing intermittently for three weeks. '
   'You reported it twice through the online portal and received an automatic '
   'acknowledgement each time, but nobody has come. The temperature dropped '
   'sharply this week.'],
 'bullets': ['Describe the fault and its history.',
             'Explain what you have already done about it.',
             'Say clearly what you would like to happen now.'],
 'header': [('To:', 'accommodation@northgate.ac.uk'),
            ('Subject:', 'Heating fault, Room 212 Elmfield — reported 4 and 11 Feb')],
 'preview': [
  ('P1', 'Decode the task', [
     'a.  You are annoyed. Which of the three bullets is the one where that '
     'will leak out, and what will it cost you?',
     'b.  The second bullet looks like background. Argue that it is actually '
     'the strongest part of your case.',
     'c.  What is the difference between “please fix the heating” '
     'and a remedy?',
   ]),
  ('P2', 'Prime the vocabulary', [
     'a.  Which word describes a fault that comes and goes?',
     ('mono', ['constant · intermittent · occasional · permanent']),
     'b.  Match: to ______ a fault (first time) · to ______ a call '
     '· to ______ to a problem · to ______ a job.',
     ('mono', ['attend · report · log · complete']),
   ]),
  ('P3', 'Write it before you read it', [
     'Say that nobody came, without saying that anybody failed. One sentence.',
   ]),
  ('P4', 'Commit to a plan', [
     'Seven minutes, the whole email. Decide in advance what you will ask '
     'for: a visit, a date, a temporary heater, or a reason. Only one of '
     'these is hard to refuse.',
   ]),
  ('P5', 'Predict the pitfall', [
     'Which sentence belongs in a band-5 complaint?',
     ('mono', ['(A) This is completely unacceptable and I have had enough.',
               '(B) I appreciate the department is busy, but three weeks',
               '    seems a long time for a heating fault in February.',
               '(C) If nobody comes this week I will be contacting the',
               '    Students’ Union.']),
   ]),
 ],
 'model_band': 5,
 'model': [
   'Dear Accommodation Office,',
   'The heating in Room 212, Elmfield, has been failing intermittently since '
   'the end of January. It runs normally for a day or two and then goes cold, '
   'usually overnight, and the radiator stays cold until it resets itself.',
   'I logged the fault through the portal on 4 February and again on 11 '
   'February, and received an automatic acknowledgement each time (references '
   'EF-2291 and EF-2340). As far as I know nobody has been able to look at it '
   'yet.',
   'I appreciate that February is a busy month for maintenance. Would it be '
   'possible to have someone attend in the next few days, or failing that, to '
   'borrow a portable heater until the repair can be scheduled? The room has '
   'been around twelve degrees this week and it is difficult to work in.',
   'I am in most mornings and happy to give access at any time.',
   'Thank you very much.',
   'Best wishes,',
   'Ravi Shankar — Room 212, Elmfield',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  Give each paragraph a one-word job.',
     'b.  The email contains two reference numbers and a temperature. What do '
     'these do that adjectives could not?',
     'c.  Find the only sentence that could be read as criticism. How has it '
     'been defused?',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “As far as I know nobody has been able to look at it yet.'
      '” Rewrite as a plain accusation. Then list what the original has '
      'added: there are three separate softeners.'],
     ['b.  “The heating ', ('has been failing', {'italic': True}),
      ' since the end of January.” Why this form and not ',
      ('failed', {'italic': True}), ' or ', ('is failing', {'italic': True}),
      '?'],
     ['c.  “or failing that, to borrow a portable heater” — '
      'what is the subject of ', ('to borrow', {'italic': True}),
      ', and why is the ambiguity harmless here?'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  Why ', ('logged the fault', {'italic': True}), ' rather than ',
      ('complained', {'italic': True}), ' or ', ('told you', {'italic': True}),
      '?'],
     ['b.  ', ('attend', {'italic': True}),
      ' is used here without an object. What does it mean in this register, '
      'and where else would you meet it?'],
     ['c.  Why ', ('it is difficult to work in', {'italic': True}),
      ' rather than ', ('it is freezing', {'italic': True}), '?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Using the official band descriptors at the front of this book, name the '
     'three things that hold the version below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'The hot water in your shared kitchen has not worked for ten days and '
     'two reports have gone unanswered. In 60 words write the middle of the '
     'email: the history, and a request that offers the office an easy way to '
     'say yes.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'Dear Sir/Madam,',
   'I am writing to complain about the heating in my room 212 which is not '
   'working since three weeks. I reported two times on your website but '
   'nobody came, so obviously nobody is reading these reports. It is '
   'completely unacceptable that students must live in the cold in February '
   'while we are paying so much money for the accommodation. Please send '
   'someone immediately to repair it, otherwise I will have to contact the '
   'Students Union.',
   'I hope for your urgent action.',
 ],
 'keys': [
  ('P1', [
    ['a.  The second. Describing what you did and what did not happen is '
     'where the sentence “and nobody bothered to come” writes '
     'itself. It costs you the social-conventions mark, which is explicit in '
     'the descriptor for this task.'],
    ['b.  Because it converts your complaint from a feeling into a record. '
     'Two dates and two reference numbers are facts the office can check '
     'against its own system, and they establish that the delay is theirs '
     'without you having to say so.'],
    ['c.  A remedy is a specific, achievable action with a time attached. '
     '“Fix the heating” names an outcome the reader may not control '
     'this week; “someone to attend in the next few days, or a portable '
     'heater” names two things they can actually authorise today.'],
  ]),
  ('P2', [
    ['a.  ', ('Intermittent', {'bold': True}),
     ' — the technical word, and the one that tells a maintenance team '
     'something useful. ', ('Occasional', {'italic': True}),
     ' describes frequency but not the on-off pattern.'],
    ['b.  to ', ('report', {'bold': True}), ' a fault · to ',
     ('log', {'bold': True}), ' a call · to ',
     ('attend', {'bold': True}), ' to a problem · to ',
     ('complete', {'bold': True}), ' a job.'],
  ]),
  ('P3', [
    ['Model: ', ('As far as I know nobody has been able to look at it yet.',
                 {'italic': True})],
    ['Three devices in eleven words: ', ('as far as I know', {'italic': True}),
     ' limits the claim to your own knowledge, ',
     ('has been able to', {'italic': True}),
     ' attributes the gap to capacity rather than will, and ',
     ('yet', {'italic': True}),
     ' presupposes it is still going to happen.'],
  ]),
  ('P4', [
    ['The portable heater. A visit requires a technician who may not be free; '
     'a date commits the office to something it may miss; a reason invites a '
     'defensive reply. A loan heater is cheap, immediate, within the '
     'reader’s authority, and visibly reasonable — and offering it '
     'as a fallback makes the first request easier to grant too.'],
  ]),
  ('P5', [
    [('(B).', {'bold': True})],
    ['(A) is pure affect. It gives the reader nothing to act on and invites '
     'them to defend themselves rather than help you.'],
    ['(C) is a threat. Escalation may be justified eventually, but announcing '
     'it in a first direct email converts a maintenance request into a '
     'dispute, and disputes move more slowly than requests.'],
    ['(B) concedes a real constraint and then states the problem as a '
     'measurement (',  ('three weeks', {'italic': True}),
     '). The concession is what earns it the right to the complaint.'],
  ]),
  ('F1', [
    ['a.  Describe · Evidence · Request · Offer.'],
    ['b.  They are checkable. ', ('Very cold', {'italic': True}),
     ' is a feeling the reader may discount; twelve degrees is a fact they '
     'must deal with. The same is true of the reference numbers, which turn '
     '“I reported it” into something verifiable in thirty seconds.'],
    ['c.  “As far as I know nobody has been able to look at it yet.” '
     'Defused by the opening of the next paragraph — ',
     ('I appreciate that February is a busy month', {'italic': True}),
     ' — which supplies the excuse before the reader has to invent one.'],
  ]),
  ('F2', [
    ['a.  Plain: ', ('You have not come.', {'italic': True}),
     ' The original adds: a limit on your own knowledge (',
     ('as far as I know', {'italic': True}),
     '), a shift from unwillingness to inability (',
     ('has been able to', {'italic': True}),
     '), and an expectation that it will still happen (',
     ('yet', {'italic': True}), ').'],
    ['b.  Present perfect continuous: the failing started in the past, is '
     'still going on, and is the reason for writing. ',
     ('Failed', {'italic': True}), ' would close it off as finished; ',
     ('is failing', {'italic': True}),
     ' would lose the three weeks of history, which is the whole case.'],
    ['c.  Strictly, the subject of ', ('to borrow', {'italic': True}),
     ' is the writer, while the subject of ',
     ('to have someone attend', {'italic': True}),
     ' is the office — so the parallel is imperfect. It is harmless '
     'because both are governed by ',
     ('would it be possible', {'italic': True}),
     ', which is about the world rather than about any particular agent. In a '
     'formal report you would tidy it; in a seven-minute email nobody will '
     'notice, and it reads naturally.'],
  ]),
  ('F3', [
    ['a.  Because ', ('logged', {'italic': True}),
     ' is the system’s own word for what you did. It frames your action '
     'as a correct use of their process rather than as an emotional event, '
     'and it implicitly asks them to check the log.'],
    ['b.  “Come out to deal with it”. It is the standard verb in '
     'British maintenance and service English — ',
     ('an engineer will attend', {'italic': True}),
     ' — and also appears in medical contexts. Using the trade’s own '
     'verb signals that you know how the process works.'],
    ['c.  Because it ties the complaint to a legitimate interest the '
     'institution recognises. ', ('Freezing', {'italic': True}),
     ' is about your comfort; ', ('difficult to work in', {'italic': True}),
     ' is about your studies, which is what the accommodation exists to '
     'support. Pick the version of your grievance that the reader is '
     'institutionally obliged to care about.'],
  ]),
  ('F4', [
    ['1.  ', ('It prosecutes the reader.', {'bold': True}),
     ' “obviously nobody is reading these reports”, '
     '“completely unacceptable”, and a threat to escalate. The task '
     'asked for a remedy; this asks for an admission of guilt.'],
    ['2.  ', ('No usable remedy and no evidence.', {'bold': True}),
     ' “Please send someone immediately” names no alternative, no '
     'access times, and no reference numbers — so the office cannot even '
     'find the original reports. The second bullet is therefore only half '
     'addressed.'],
    ['3.  ', ('Consequential errors.', {'bold': True}),
     ' “is not working since three weeks” (has not been working for '
     'three weeks — both the tense and the preposition are wrong), '
     '“I reported two times” (twice), “Students Union” '
     '(Students’ Union). The tense error in particular obscures the '
     'history, which is the one thing the email needed to establish.'],
  ]),
  ('F5', [
    ['Model: ', ('I reported the fault on 2 March and again on 6 March '
                 '(references KT-118 and KT-140), and as far as I know nobody '
                 'has been able to attend yet. I appreciate this is a busy '
                 'time; would it be possible for someone to look at it this '
                 'week, or for us to be told when it is likely to be '
                 'scheduled?', {'italic': True})],
    ['The fallback here is information rather than equipment — and a '
     'date is something an office can always give you, which is exactly why '
     'it makes a good second ask.'],
  ]),
 ],
},

# ------------------------------------------------------------------ 012
{
 'id': 'EM 012', 'task': T, 'time': M, 'function': FN,
 'payload': {
   'Strategy': 'complain about behaviour, never about people',
   'Grammar': 'nominalisation to depersonalise',
   'Vocabulary': 'noise: carry, travel, audible, consideration, quiet hours',
   'Convention': 'complaining about neighbours you must go on living beside',
 },
 'scenario': [
   'The flat above yours plays music late on weeknights. You have knocked '
   'twice and been met politely but nothing changed. You do not want the '
   'residents disciplined; you want to sleep. Quiet hours are after eleven.'],
 'bullets': ['Describe the problem factually.',
             'Say what you have already tried.',
             'Ask for something proportionate.'],
 'header': [('To:', 'residences@northgate.ac.uk'),
            ('Subject:', 'Noise after quiet hours — Flat 14, Beechwood')],
 'preview': [
  ('P1', 'Decode the task', [
     'a.  You will still be living below these people next month. How should '
     'that shape the email?',
     'b.  What is the difference between asking for enforcement and asking '
     'for a reminder?',
   ]),
  ('P2', 'Prime the vocabulary', [
     ['a.  Noise does not ', ('go', {'italic': True}),
      ' through a ceiling. Which verbs does English use?'],
     ('mono', ['carry · travel · pass · come through · leak']),
     'b.  Turn these into nouns: to disturb → ; to be considerate '
     '→ ; to repeat → .',
   ]),
  ('P3', 'Write it before you read it', [
     'Describe the problem in one sentence in which no person is the subject.',
   ]),
  ('P4', 'Predict the pitfall', [
     'Why would “the students in Flat 14 are extremely inconsiderate'
     '” damage your case even if it is true?',
   ]),
 ],
 'model_band': 5,
 'model': [
   'Dear Residences Team,',
   'I live in Flat 10, Beechwood, directly below Flat 14. Over the past month '
   'music has been playing in the flat above until well after midnight, '
   'usually three or four nights a week. The bass carries through the ceiling '
   'clearly enough to be audible with the door shut.',
   'I have been up twice to mention it, and on both occasions I was met '
   'perfectly pleasantly and the music was turned down for that night. The '
   'pattern has returned each week, though, and I do not think another knock '
   'on the door is going to change it.',
   'I am not asking for anyone to be disciplined. Would it be possible for '
   'the office simply to send the flat a general reminder about quiet hours, '
   'without naming me? I think a note from residences would carry more weight '
   'than another conversation on the landing.',
   'Thank you for considering it.',
   'Best wishes,',
   'Elena Novak — Flat 10, Beechwood',
 ],
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  The writer reports that the neighbours were polite. Why include '
     'something that weakens the complaint?',
     'b.  Find the sentence that tells the office exactly how much action is '
     'wanted. Why is naming the ceiling as well as the floor important?',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  “music has been playing in the flat above”. Who is '
      'playing it? Rewrite with the neighbours as subject and describe what '
      'changes.'],
     ['b.  “I am not asking for anyone to be disciplined.” Why '
      'state what you are ', ('not', {'italic': True}), ' asking for?'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  ', ('audible', {'italic': True}), ' versus ',
      ('loud', {'italic': True}), ' — why is the first the better word '
      'in a complaint?'],
     ['b.  What does ', ('carry more weight', {'italic': True}),
      ' mean, and why is it flattering to the reader?'],
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Name three things that hold the version below at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'A neighbour’s smoking is coming through your window. In 50 words, '
     'describe it without a human subject and ask for something proportionate.',
   ]),
 ],
 'degraded_band': 3,
 'degraded': [
   'Dear Sir,',
   'The students who live in the flat 14 are very noisy and inconsiderate '
   'people. They are playing loud music every night until 2 or 3 o’clock '
   'and they don’t care about other people who must study. I went two '
   'times to speak with them but they just laughed and continued. I think you '
   'should give them a warning or move them to another building because this '
   'situation cannot continue like this.',
   'Please take action urgently.',
 ],
 'keys': [
  ('P1', [
    ['a.  It has to survive being read aloud on the landing. Anything you '
     'would not say to their faces should not be in it — and the request '
     'should be the smallest one that solves your problem, because you will '
     'be living with the consequences of the office’s response.'],
    ['b.  Enforcement makes the neighbours your opponents and the office your '
     'instrument. A reminder lets everybody keep their standing: nobody is '
     'accused, nobody is punished, and the behaviour still changes.'],
  ]),
  ('P2', [
    ['a.  ', ('carry', {'bold': True}), ', ', ('travel', {'bold': True}),
     ' and ', ('come through', {'bold': True}),
     ' are all idiomatic. ', ('Pass', {'italic': True}),
     ' is odd, and ', ('leak', {'italic': True}),
     ' is used of light and secrets rather than sound.'],
    ['b.  a ', ('disturbance', {'bold': True}), ' ; ',
     ('consideration', {'bold': True}), ' ; ',
     ('repetition', {'bold': True}),
     '. Each turns an action into a thing, which is precisely how you talk '
     'about behaviour without talking about a person.'],
  ]),
  ('P3', [
    ['Model: ', ('Music has been playing in the flat above until well after '
                 'midnight, three or four nights a week.', {'italic': True})],
    ['The subject is ', ('music', {'italic': True}),
     '. Nobody is doing anything to you; a sound is occurring. That is the '
     'whole technique.'],
  ]),
  ('P4', [
    ['Because it is a judgement about character, and character is not '
     'something the office can investigate or remedy. It also forces them to '
     'take a side. Report the behaviour and the hours, and let the conclusion '
     'be theirs — it will be the same conclusion, and it will be one '
     'they can act on.'],
  ]),
  ('F1', [
    ['a.  Because it is true, and because it makes the writer credible. '
     'Someone who concedes the other side was pleasant is obviously not '
     'exaggerating the rest. It also rules out the office’s easiest '
     'response — “have you tried talking to them?”'],
    ['b.  “Would it be possible for the office simply to send the flat a '
     'general reminder about quiet hours, without naming me?” The ceiling '
     'is the limit of what is wanted; the floor is ',
     ('without naming me', {'italic': True}),
     '. Setting both tells the reader exactly which action is acceptable, and '
     'prevents a well-meant escalation you would have to live with.'],
  ]),
  ('F2', [
    ['a.  The neighbours, obviously — but naming them makes them agents '
     'of an act done to you. ',
     ('The students in Flat 14 have been playing music until after midnight',
      {'italic': True}),
     ' is an accusation; the original is an observation. Same facts, '
     'different relationship.'],
    ['b.  Because the office’s standard response to a noise complaint is '
     'a disciplinary process, and once that starts you cannot stop it. '
     'Ruling it out explicitly is the only way to get the small remedy rather '
     'than the large one.'],
  ]),
  ('F3', [
    ['a.  ', ('Audible', {'italic': True}),
     ' states a measurable fact: it can be heard, with the door shut. ',
     ('Loud', {'italic': True}),
     ' is relative to the hearer and invites the reply that it did not seem '
     'loud to anyone else.'],
    ['b.  It means “be taken more seriously”. It is flattering '
     'because it attributes authority to the reader — and a reader who '
     'has just been told their word counts is more likely to spend it.'],
  ]),
  ('F4', [
    ['1.  ', ('It attacks people, not behaviour.', {'bold': True}),
     ' “very noisy and inconsiderate people”, “they don’t '
     'care”, “they just laughed”. None of this is actionable, '
     'and the last claim is unverifiable.'],
    ['2.  ', ('The remedy is disproportionate.', {'bold': True}),
     ' Asking for residents to be moved over music is a request the office '
     'will not grant, so the email achieves nothing — and the third '
     'bullet asked for something proportionate.'],
    ['3.  ', ('Language.', {'bold': True}),
     ' “the flat 14” (Flat 14), “I went two times” '
     '(twice), “this situation cannot continue like this” '
     '(redundant), and “they are playing” for a repeated habit '
     '(they play).'],
  ]),
  ('F5', [
    ['Model: ', ('Cigarette smoke comes through my window most evenings from '
                 'the balcony next door. I would rather not raise it '
                 'directly. Could you circulate a reminder?', {'italic': True})],
  ]),
 ],
},
]
