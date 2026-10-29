# -*- coding: utf-8 -*-
"""Item EM031 - Write an Email - Decline and counter-offer."""

ITEM = {
 'id': 'EM 031', 'task': 'WRITE AN EMAIL', 'time': '7 minutes',
 'function': 'Decline and counter-offer',
 'payload': {
   'Strategy':   'refuse, then repair - never let a refusal be the last thing you say',
   'Grammar':    'the unreal conditional as a politeness device',
   'Vocabulary': 'softening adverbials; collocations for rooms and bookings',
   'Convention': 'how much apology is too much, and whose fault it is',
 },

 'scenario': [
   'Your student drama society reserved the Rehearsal Hall for Saturday 14 March '
   'for a workshop with a visiting director. The bookings office has just emailed '
   'to say that the hall was double-booked, and has offered you the Sunday instead. '
   'Your visiting director can only travel on the Saturday.',
 ],
 'bullets': [
   'Thank the office for offering an alternative date.',
   'Explain why Sunday will not work for your society.',
   'Propose a solution that could still allow the workshop to go ahead.',
 ],
 'header': [('To:', 'bookings@northgate.ac.uk'),
            ('Subject:', 'Rehearsal Hall booking, Saturday 14 March')],

 # ------------------------------------------------------------ preview
 'preview': [
  ('P1', 'Decode the task', [
     'a.  Who will read this email, and what is your relationship to them?',
     'b.  Which of the three required points carries a risk of sounding rude, and why?',
     'c.  The bullets are given in a particular order. Is that order an accident?',
   ]),
  ('P2', 'Prime the vocabulary', [
     'a.  Put these in order from most casual to most formal, then choose the two '
     'that belong in this email:',
     ('mono', ['(i)   Sunday’s no good for us.',
               '(ii)  Sunday is unfortunately not workable for us.',
               '(iii) Sunday does not work for us.',
               '(iv)  Sunday is impossible.']),
     'b.  Which verbs collocate with a room?   book  ·  reserve  ·  order  ·  hire',
   ]),
  ('P3', 'Write it before you read it', [
     'Rewrite this so that it could be sent to a stranger who has done nothing '
     'wrong. Keep it under 25 words.',
     ('mono', ['Sunday is no good. Give us another room on Saturday.']),
     ('note', 'Write your version down before you look at the key. You will not '
              'notice what the model does unless you have first tried to do it yourself.'),
   ]),
  ('P4', 'Commit to a plan', [
     'Set a timer for 7 minutes and write the whole email now. Before you start, '
     'write three words in the margin — one for the job each paragraph will do.',
   ]),
  ('P5', 'Predict the pitfall', [
     'Three candidates opened their email like this. One scores well and two lose '
     'marks. Which is which, and what exactly is wrong?',
     ('mono', [
       '(A) I am writing to complain about the double-booking of the Rehearsal Hall.',
       '(B) Thank you so much for your email. I am extremely sorry to trouble you',
       '    and I do apologise for any inconvenience caused, and I hope you will',
       '    forgive me for writing to you again about this matter...',
       '(C) Thank you for letting me know so quickly, and for offering us the',
       '    Sunday slot.']),
   ]),
 ],

 # ------------------------------------------------------------ model
 'model_band': 5,
 'model': [
   'Dear Bookings Office,',
   'Thank you for letting me know so quickly, and for offering us the Sunday slot '
   '— I appreciate you finding an alternative at such short notice.',
   'Unfortunately Sunday will not work for us. The workshop is being led by a '
   'visiting director who is travelling down for the day, and Saturday 14 March is '
   'the only date she is available; moving the session to Sunday would mean '
   'cancelling it altogether rather than postponing it.',
   'If any other space were free on Saturday afternoon, we could go ahead as '
   'planned — the group is small, so a seminar room with the chairs cleared would '
   'serve us perfectly well. Failing that, would it be possible to keep our '
   'Saturday booking and offer the other group the Sunday slot instead?',
   'I am happy to come by the office and sort this out in person if that is easier.',
   'Best wishes,',
   'Layla Haddad — Secretary, Northgate Drama Society',
 ],

 # ------------------------------------------------------------ follow-up
 'followup': [
  ('F1', 'Take the answer apart', [
     'a.  Give each paragraph a one-word job description.',
     'b.  Which sentence discharges which of the three required bullets?',
     'c.  One sentence does work that no bullet asked for. Find it. Why does it '
     'earn marks instead of wasting words?',
   ]),
  ('F2', 'Harvest the grammar', [
     ['a.  Find the unreal conditional. Why “if any other space ',
      ('were', {'italic': True}), ' free … we ', ('could', {'italic': True}),
      ' go ahead” rather than “if any other space ',
      ('is', {'italic': True}), ' free … we ', ('can', {'italic': True}),
      ' go ahead”?'],
     'b.  Rewrite “would it be possible to keep our Saturday booking” as a direct '
     'question. What changes — not in meaning, but in force?',
     ['c.  “Moving the session to Sunday would mean cancelling it” — what is '
      'the subject of ', ('would mean', {'italic': True}),
      '? Why is a gerund useful to you here, in an email where somebody has '
      'made a mistake?'],
   ]),
  ('F3', 'Harvest the vocabulary', [
     ['a.  ', ('at', {'bold': True}), ' short notice — why not ',
      ('in', {'bold': True}), ' short notice?'],
     ['b.  Why “a seminar room … would ', ('serve', {'italic': True}),
      ' us perfectly well”, rather than ', ('work', {'italic': True}),
      ' or ', ('suit', {'italic': True}), '?'],
     ['c.  What does ', ('Failing that', {'italic': True}),
      ' do in two words that a plainer phrase needs more words to do?'],
     'd.  Complete: the hall was double-________ ; the two bookings ________.',
   ]),
  ('F4', 'Why this is a 5 and that is a 3', [
     'Below is another answer to the same task. Using the official band '
     'descriptors at the front of this book, name the three things that hold '
     'it at band 3.',
   ]),
  ('F5', 'Now you do it', [
     'The library has cancelled your group’s study-room booking for the evening '
     'before a deadline, and offered you a morning slot instead. In no more than '
     '60 words write only the middle of the email: one sentence that declines with '
     'a reason, and one unreal conditional that proposes a way round it.',
   ]),
 ],

 'degraded_band': 3,
 'degraded': [
   'Dear Sir,',
   'Thank you for your email. But Sunday is impossible for us because our director '
   'cannot come in this day. He is very busy person and we are already prepare '
   'everything for Saturday. So please give us the hall in Saturday like we booked '
   'it before. We don’t want to cancel the workshop.',
   'Thank you. Best regards.',
 ],

 # ------------------------------------------------------------ keys
 'keys': [
  ('P1', [
    ['a.  ', ('An administrative colleague you have never met', {'bold': True}),
     ' — not a friend, and not somebody you need to flatter. That fixes the '
     'register as neutral-professional: ', ('Dear Bookings Office', {'italic': True}),
     ' is right; ', ('Hi there', {'italic': True}), ' and ',
     ('Dear Sir or Madam', {'italic': True}),
     ' are respectively too warm and too distant for a named office.'],
    ['b.  ', ('The second', {'bold': True}),
     '. Saying “no” to something that was offered as a favour is the one '
     'moment in this email where you can give offence. Everything the examiner '
     'calls ', ('social conventions', {'italic': True}),
     ' is really about how you handle that sentence.'],
    ['c.  ', ('No.', {'bold': True}),
     ' Thanks → problem → solution puts the refusal between two positives. '
     'You may reorder the bullets, but if you move the refusal to the end the '
     'email finishes on a negative and reads as a complaint.'],
  ]),
  ('P2', [
    ['a.  (i) < (iii) < (ii).  Use ', ('(ii)', {'bold': True}), ' or ',
     ('(iii)', {'bold': True}), '. Note the trap: ', ('(iv)', {'bold': True}),
     ' is formal in ', ('shape', {'italic': True}), ' but absolute in ',
     ('force', {'italic': True}), ' — “impossible” shuts the door and '
     'invites no negotiation, which is the opposite of what you want from an '
     'office that has just offered to help.'],
    ['b.  ', ('book', {'bold': True}), ' and ', ('reserve', {'bold': True}),
     ' both collocate with ', ('a room', {'italic': True}), '. ',
     ('hire', {'italic': True}), ' implies you are paying for a venue; ',
     ('order', {'italic': True}), ' does not go with rooms at all. '
     'Collocation is not logic — it is memorised in chunks.'],
  ]),
  ('P3', [
    ['Many rewrites work. The one the model chooses is the ',
     ('unreal conditional', {'bold': True}), ': “If another room were free on '
     'Saturday afternoon, we could keep the session as planned.”'],
    ['Look at what that does. It turns a ', ('request aimed at a person', {'italic': True}),
     ' into a ', ('hypothetical state of the world', {'italic': True}),
     '. Nobody is being told to do anything, so nobody has to defend themselves.'],
  ]),
  ('P4', [
    ['No single answer. Score your own draft against three questions:'],
    ('bullets', [
      'Did you thank them for something specific, or just say “thank you”?',
      'Did you give a reason, or only a refusal? A refusal without a reason reads as a preference.',
      'Did you propose something somebody could actually act on, or only ask for help?']),
  ]),
  ('P5', [
    [('(C) is the strong one.', {'bold': True})],
    ['(A) ', ('misreads the task.', {'bold': True}),
     ' The office is not the offender here — it has spotted a problem and '
     'offered a remedy. Opening with “complain” picks a fight with somebody '
     'who is trying to help, and the rubric scores exactly this.'],
    ['(B) ', ('over-apologises.', {'bold': True}),
     ' Thirty-five words before any content, apologising for a mistake that is '
     'not yours. In a 7-minute task that is a quarter of your time spent '
     'sounding unconfident.'],
    ['(C) thanks them for ', ('two specific things', {'italic': True}),
     ' — the speed and the offer. Specific thanks reads as sincere; generic '
     'thanks reads as a formula.'],
  ]),
  ('F1', [
    ['a.  Thank · Refuse · Repair · Offer.'],
    ['b.  Bullet 1 → sentence 1. Bullet 2 → “Unfortunately Sunday will '
     'not work … rather than postponing it.” Bullet 3 → the whole of '
     'paragraph three, which contains ', ('two', {'bold': True}),
     ' proposals, not one.'],
    ['c.  “I am happy to come by the office …”. No bullet asked for it. '
     'It earns marks because the band-5 descriptor rewards ',
     ('elaboration that effectively supports the communicative purpose', {'italic': True}),
     ' — and this sentence lowers the cost to the reader of saying yes. That '
     'is elaboration doing a job, which is quite different from padding.'],
  ]),
  ('F2', [
    ['a.  The real conditional (“if … is free”) presupposes that a room ',
     ('probably', {'italic': True}), ' is free, so it presses for a yes. The '
     'unreal form presents the possibility as remote, which leaves the reader '
     'genuinely free to say no — and it is that freedom which makes it polite. '
     'Politeness in English is largely the grammar of giving people an exit.'],
    ['b.  Direct: “Can you keep our Saturday booking and give the other group '
     'Sunday?” That is an ', ('instruction addressed to the reader', {'italic': True}),
     '. “Would it be possible to …” asks about the ',
     ('world', {'italic': True}), ', not about their willingness, so refusing '
     'costs them nothing.'],
    ['c.  The subject is the gerund phrase ',
     ('moving the session to Sunday', {'bold': True}),
     '. A gerund lets you make the ', ('event', {'italic': True}),
     ' the subject and keep a person out of the sentence: compare “',
     ('you would make us cancel', {'italic': True}),
     '”, which assigns blame. When somebody has made a mistake, grammar that '
     'avoids naming an agent is worth a great deal.'],
  ]),
  ('F3', [
    ['a.  ', ('at short notice', {'bold': True}), ' (British) or ',
     ('on short notice', {'bold': True}), ' (American). Neither preposition is '
     'derivable from meaning — fixed phrases have to be stored whole.'],
    ['b.  ', ('serve', {'bold': True}), ' takes a person as object (',
     ('serve us', {'italic': True}), ') and means “be adequate for the '
     'purpose”. It concedes the room is not ideal while confirming it is '
     'enough — both at once. ', ('work', {'italic': True}),
     ' is correct but flat; ', ('suit', {'italic': True}),
     ' suggests preference rather than sufficiency. This is what the band-5 '
     'descriptor means by ', ('precise, idiomatic word choice', {'italic': True}), '.'],
    ['c.  ', ('Failing that', {'bold': True}),
     ' = “if that is not possible”, and it marks what follows as a ',
     ('ranked fallback', {'italic': True}),
     '. In two words it tells the reader you have thought in order of '
     'preference. “If that is not possible” needs five words; '
     '“Otherwise” is shorter but vaguer.'],
    ['d.  double-', ('booked', {'bold': True}), ' ; the two bookings ',
     ('clash', {'bold': True}), '.'],
  ]),
  ('F4', [
    ['1.  ', ('Social conventions.', {'bold': True}),
     ' “But” immediately after the thanks cancels the thanks, and '
     '“please give us the hall … like we booked it before” is a demand '
     'dressed as a request. The band-5 line asks for ',
     ('consistent use of appropriate social conventions', {'italic': True}), '.'],
    ['2.  ', ('The third bullet is never addressed.', {'bold': True}),
     ' No alternative is proposed at all — the writer only repeats the '
     'original demand. Band 3 is worded ',
     ('elaboration that partially supports the communicative purpose', {'italic': True}),
     ', and this is what that looks like.'],
    ['3.  ', ('Consequential language errors.', {'bold': True}),
     ' “in this day” / “in Saturday” (on), “very busy '
     'person” (a very busy person), “we are already prepare” (have '
     'already prepared). Compare the official ETS email sample reproduced at '
     'the front of this book: it contains three misspellings and still earns a '
     '4. What capped ',
     ('that', {'italic': True}), ' response was a ',
     ('verb-tense', {'italic': True}), ' failure. Errors cost you marks in '
     'proportion to how much they damage meaning, not in proportion to how many '
     'there are.'],
  ]),
  ('F5', [
    ['A model middle:'],
    [('“Unfortunately the morning slot will not help us, as two of the group '
      'are in labs until one o’clock and the work has to be finished that day. '
      'If a room were free after six, even for an hour, we could still get the '
      'draft done.”', {'italic': True})],
    ['Check yours for three things: an ',
     ('external', {'bold': True}), ' reason rather than a preference; an unreal '
     'conditional rather than a request; and a ',
     ('specific', {'bold': True}), ' alternative (“after six”), because '
     'vague alternatives give the reader nothing to say yes to.'],
  ]),
 ],
}
