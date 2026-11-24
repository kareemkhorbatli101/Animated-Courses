# -*- coding: utf-8 -*-
import figs

U = dict(
num=2, title='It Must Be, It Might Be',
gram="modals of deduction: must be, might be, can't be",
ai='confident and wrong: why fluency is not accuracy',
strap='CEFR B2 · Grammar: modals of deduction · AI: confident and wrong',
cando=['use must, might, could and cannot to express degrees of certainty',
       'state how certain I am and on what evidence, in the same sentence',
       'explain why fluent output is trusted more than it deserves',
       'separate the quality of the writing from the quality of the claim',
       'describe what a confident tone does and does not indicate'],
hero=('TWO REPORTS, SIDE BY SIDE ON A DESK',
      ['One is awkward, hesitant and correct.',
       'The other is elegant and three of its figures are invented.'],
      [(880, 'grey', 'long'), (1620, 'purple', 'short'), (2360, 'teal', 'long')]),
hero_cap='Which of the two a reader trusts has very little to do with which is right.',

warm=['Have you ever believed something because of how well it was put?',
      'What is the difference between "it must be" and "it might be"?',
      'How do you judge whether a document you cannot verify is trustworthy?'],
read=[
 'Victor ran an experiment in his second month which Arclight has repeated twice since, '
 'because the result is uncomfortable enough that people want to see it for themselves. He '
 'took two summaries of the same client meeting and asked eleven colleagues which they would '
 'rely on, without telling them anything else about either document.',
 'The first summary was written by Thomas in a hurry. It is ungainly, it hedges in three '
 'places, and it says at one point that he was not certain whether a figure quoted in the '
 'meeting was annual or quarterly. Every statement in it is correct, and the uncertainty it '
 'reports is real uncertainty that Thomas actually had.',
 'The second was produced in nine seconds. It reads beautifully, it is better organised than '
 'anything Thomas has ever written, and it states the figure as annual without qualification. '
 'The figure was quarterly. It also contains two further assertions about what the client '
 'intends, neither of which the client said and both of which sound exactly like things that '
 'client would say.',
 'Nine of the eleven colleagues chose the second document. When Victor told them why he was '
 'asking, several of them went back and read both again, and the common reaction was not '
 'that they had been careless but that nothing in the second document had given them any '
 'reason to doubt it. That reaction is the whole finding.',
 'What people rely on, when they cannot check something, is a set of signals that normally '
 'accompany care: organisation, confidence, specificity and an absence of hedging. Those '
 'signals are produced by the writing rather than by the knowing, and in a document where '
 'the two have come apart, every one of them points the wrong way.'],
c_a=[('What did Victor’s experiment compare?', 'two summaries of the same client meeting'),
     ('What was wrong with the second summary?', 'it stated a quarterly figure as annual and contained two assertions the client never made'),
     ('How many colleagues chose the second?', 'nine of eleven'),
     ('What was the common reaction afterwards?', 'that nothing in the second document had given them any reason to doubt it'),
     ('What signals do readers rely on when they cannot check?', 'organisation, confidence, specificity and an absence of hedging')],
c_b=[('Thomas’s summary contained factual errors.', 'F'),
     ('The second summary was better organised.', 'T'),
     ('The quarterly figure was reported correctly in the second summary.', 'F'),
     ('Two of the eleven chose the first document.', 'T'),
     ('The colleagues concluded that they had been careless.', 'F'),
     ('Signals of care are produced by the knowing rather than the writing.', 'F')],
c_c=[('The result is uncomfortable enough that people want to see it for ____________.', 'themselves'),
     ('It ____________ in three places.', 'hedges'),
     ('The second was produced in nine ____________.', 'seconds'),
     ('Both of which sound exactly like things that client would ____________.', 'say'),
     ('Nothing in the second document had given them any reason to ____________ it.', 'doubt'),
     ('Every one of them points the ____________ way.', 'wrong')],
c_d=[('The experiment shows that readers rely on ( signals / evidence ).', ['signals', 'evidence'], 0),
     ('Thomas’s hedging reflected', ['poor writing', 'real uncertainty he had', 'a house rule', 'caution about blame'], 1),
     ('The two extra assertions were dangerous because they', ['were obviously false', 'sounded like things the client would say', 'were very long', 'were in the wrong place'], 1),
     ('The colleagues’ reaction suggests the problem is', ['carelessness', 'that the usual signals of care were absent from the correct document', 'inexperience', 'time pressure'], 1),
     ('Arclight has repeated the experiment', ['never', 'once', 'twice', 'monthly'], 2)],
c_e=('How certain? Put each sentence in the right column.',
     [('It must be quarterly — the annual figure is four times this.', 'Near certainty'),
      ('It might be quarterly; I have not checked.', 'Possibility'),
      ('It cannot be annual — the contract began in March.', 'Near certainty'),
      ('It could be either, on this evidence.', 'Possibility'),
      ('It must have been sent twice.', 'Near certainty'),
      ('It may have been sent twice.', 'Possibility')],
     ['Near certainty', 'Possibility']),

v_fig_title='HOW SURE, AND ON WHAT',
v_fig=[('bulb', 'inference'), ('scale', 'plausibility'), ('doc', 'a warrant'),
       ('chart', 'coherence'), ('note', 'tentative'), ('bank', 'credibility')],
v_fig_cap='Six words for the gap between sounding right and being right.',
vocab=[
 ('deduction', 'a conclusion that follows necessarily from what you know'),
 ('inference', 'a conclusion drawn from evidence, which may be wrong'),
 ('conjecture', 'a guess offered without claiming evidence for it'),
 ('surmise', 'to suppose something on slight evidence'),
 ('warrant', 'the reason that entitles you to draw a particular conclusion'),
 ('plausibility', 'the quality of seeming reasonable, whether or not it is true'),
 ('coherence', 'the quality of hanging together without contradiction'),
 ('consistency', 'agreement between parts that ought to agree'),
 ('articulate', 'expressing ideas clearly and fluently'),
 ('persuasive', 'likely to make somebody believe or agree'),
 ('compelling', 'so convincing that it is hard to resist'),
 ('glib', 'fluent in a way that suggests little thought behind it'),
 ('assured', 'showing confidence, whether or not it is justified'),
 ('unqualified', 'stated without any limiting condition'),
 ('categorical', 'stated absolutely, admitting no exception'),
 ('tentative', 'offered provisionally, open to revision'),
 ('reservation', 'a doubt held back about part of what is being accepted'),
 ('credibility', 'the quality of being believed by others'),
 ('polish', 'the smoothness of a finished piece of work'),
 ('sincerity', 'the quality of meaning what you say')],
v_a=[('A conclusion drawn from evidence that may be wrong is an ____________.', 'inference'),
     ('The reason entitling you to a conclusion is its ____________.', 'warrant'),
     ('A statement made with no limiting condition is ____________.', 'unqualified'),
     ('Fluent in a way that suggests little thought is ____________.', 'glib'),
     ('Offered provisionally and open to revision is ____________.', 'tentative'),
     ('The quality of hanging together without contradiction is ____________.', 'coherence'),
     ('A doubt held back about part of what you accept is a ____________.', 'reservation'),
     ('Seeming reasonable, whether true or not, is ____________.', 'plausibility')],
v_b=[('A deduction is a conclusion that follows', 'necessarily from what you know.'),
     ('To surmise is to suppose something', 'on slight evidence.'),
     ('Categorical means stated absolutely,', 'admitting no exception.'),
     ('Credibility is the quality of', 'being believed by others.'),
     ('Polish is the smoothness of', 'a finished piece of work.')],

g_title='Grammar: modals of deduction',
g_rule=['Must expresses near certainty from evidence: it must be quarterly, given the total.',
        'Might, may and could express possibility, with no claim about which is more likely.',
        "Cannot and can't express near-certain impossibility: it cannot be annual.",
        'For past deductions use must have, might have, cannot have + past participle.'],
g_fig=('LOOSE',
       ['The figure is annual.',
        'He has already paid.',
        'The file was replaced.',
        'They did not receive it.'],
       'PRECISE',
       ['It must be quarterly — the year is 4 times this.',
        'He might have paid; I have not checked the bank.',
        'The file cannot be current — it predates the policy.',
        'They may not have received it; nothing confirms delivery.'],
       'a claim with its evidence removed',
       'a claim, its strength and its grounds'),
g_fig_cap='The right-hand column tells you three things. The left tells you one, confidently.',
g_a=[('It ____________ be quarterly, given that the year is four times this. (must)', 'must'),
     ('He ____________ have paid; I have not checked the bank. (might)', 'might'),
     ('The file ____________ be current — it predates the policy. (cannot)', 'cannot'),
     ('They ____________ not have received it; nothing confirms delivery. (may)', 'may'),
     ('She ____________ have signed it, because the queue was released. (must)', 'must'),
     ('It ____________ be either, on the evidence we have. (could)', 'could'),
     ('That ____________ have been the March export; March was a Sunday. (cannot)', 'cannot'),
     ('There ____________ be a second file somewhere. (might)', 'might'),
     ('He ____________ have known; it was in the brief he wrote. (must)', 'must')],
g_b=[('It ( might / must ) be quarterly — the annual figure is four times this.', ['might', 'must'], 1),
     ('He ____ have paid; I have not checked.', ['must', 'cannot', 'might', 'will'], 2),
     ('The file ____ be current; it predates the policy.', ['must', 'might', 'cannot', 'could'], 2),
     ('She must ____ signed it — the queue was released.', ['have', 'has', 'had', 'having'], 0),
     ('That cannot ____ been the March export.', ['have', 'has', 'had', 'be'], 0),
     ('It ____ be either, on this evidence.', ['must', 'cannot', 'could', 'should'], 2)],

d1=dict(title='Nine out of eleven',
        fig=(['Nine chose the second one.', 'Including me.'],
             ['What made you choose it?', 'Nothing made me doubt it.']),
        cap='Victor and Fatima, after the experiment.',
        lines=[('Victor', 'Nine of the eleven chose the second summary. You were one of them.'),
               ('Fatima', 'I was. I have read it again since and I cannot defend it.'),
               ('Victor', 'What made you choose it at the time?'),
               ('Fatima', 'Nothing made me doubt it. That is not quite the same thing.'),
               ('Victor', 'It is not the same thing at all. Say more.'),
               ('Fatima', 'Thomas’s version says he was not sure about the figure. That stood out.'),
               ('Victor', 'It stood out as a weakness.'),
               ('Fatima', 'It stood out as the only uncertainty in either document.'),
               ('Victor', 'And the other document had no uncertainty in it at all.'),
               ('Fatima', 'Because it had none, or because it reported none?'),
               ('Victor', 'That is the question, and from the page you cannot tell.'),
               ('Fatima', 'Then I was comparing the wrong two things and so was everybody else.')],
        a=[('How many chose the second summary?', 'nine of eleven, including Fatima'),
           ('What does Fatima say made her choose it?', 'that nothing made her doubt it'),
           ('How does Victor respond to that?', 'that not doubting is not the same as having reason to trust'),
           ('What stood out in Thomas’s version?', 'that he was not sure about one figure'),
           ('What is the question Fatima ends on?', 'whether the other document had no uncertainty or merely reported none')],
        b=[('Nothing made me ____________ it.', 'doubt'),
           ('It stood out as a ____________.', 'weakness'),
           ('Because it had none, or because it ____________ none?', 'reported'),
           ('From the ____________ you cannot tell.', 'page')]),
d2=dict(title='Must, or might?',
        fig=(['It must be a duplicate.', 'Must, or might?'],
             ['The amounts are identical.', 'So are two separate deliveries.']),
        cap='Kenji and Victor, over two matching lines.',
        lines=[('Kenji', 'These two lines are identical. It must be a duplicate.'),
               ('Victor', 'Must, or might?'),
               ('Kenji', 'Same supplier, same amount, same day.'),
               ('Victor', 'Two deliveries from one supplier on one day would look exactly like that.'),
               ('Kenji', 'They would. Does that happen?'),
               ('Victor', 'For this supplier, eleven times last year.'),
               ('Kenji', 'Then it might be a duplicate, and I was about to say must.'),
               ('Victor', 'You were about to say must and then remove one of them.'),
               ('Kenji', 'Which would be a payment we owed and did not make.'),
               ('Victor', 'What would turn might into must?'),
               ('Kenji', 'The delivery note. Two notes means two deliveries; one note means one.'),
               ('Victor', 'Then the rule is not about matching lines. It is about the note.')],
        a=[('What does Kenji conclude at first?', 'that the two identical lines must be a duplicate'),
           ('Why is that not certain?', 'because two deliveries from one supplier on one day would look identical'),
           ('How often did that happen last year?', 'eleven times for this supplier'),
           ('What would have happened if he had acted on "must"?', 'a payment that was owed would not have been made'),
           ('What turns might into must?', 'the delivery note: two notes means two deliveries')],
        b=[('It ____________ be a duplicate.', 'must'),
           ('For this supplier, ____________ times last year.', 'eleven'),
           ('Which would be a payment we ____________ and did not make.', 'owed'),
           ('It is about the ____________.', 'note')]),

speak=[('Must, might or cannot?',
        ['Student A: state four conclusions about your workplace as plain facts.',
         'Student B: ask what evidence each rests on, and rate it must, might or cannot.',
         'Find the one that was stated as must and is really might.']),
       ('Spoken specification: ask for the strength',
        ['Choose a question somebody could answer confidently without knowing.',
         'Brief it aloud, requiring the answer to state how certain it is and why.',
         'Your partner answers twice: once confidently, once honestly. Compare.']),
       ('Read two versions',
        ['Write two versions of the same two-sentence claim: one hedged, one categorical.',
         'Read both to a third person and ask which they would act on.',
         'Discuss what in the wording produced their answer.'])],

ext_title='The signals of care are produced by the writing, not by the knowing',
ext_fig=figs.datatable('WHAT READERS USED TO JUDGE THE TWO SUMMARIES',
                       ['Signal', 'Thomas’s version', 'The second version', 'Which was correct?'],
                       [['organisation', 'poor', 'excellent', 'Thomas'],
                        ['hedging', 'three hedges', 'none', 'Thomas'],
                        ['specificity', 'moderate', 'high', 'Thomas'],
                        ['confidence', 'low', 'high', 'Thomas'],
                        ['chosen by', '2 of 11', '9 of 11', '—']]),
ext_fig_cap='Every signal in the first column pointed away from the correct document.',
ext=[
 'When we cannot verify something directly, we fall back on a set of indirect signals that '
 'have served reasonably well for a long time. A document that is well organised, specific, '
 'internally consistent and free of hedging has usually been produced by somebody who knew '
 'what they were doing, because producing those qualities without knowledge used to be '
 'difficult and slow.',
 'That relationship is not a law of nature; it is a correlation that held because of how '
 'documents were made. Where output can be fluent without being informed, the correlation '
 'breaks, and every one of the signals continues to be emitted. The reader’s instincts are '
 'not faulty. They are calibrated to a world that, for this particular class of document, '
 'has changed.',
 'The consequence is specific and worth stating precisely. It is not that output is '
 'untrustworthy in general; much of it is correct. It is that the surface of a document no '
 'longer carries information about whether it is correct, so reading more carefully does not '
 'help. Careful reading of a fluent and wrong document produces a confident wrong reader.',
 'What does help is asking for the strength of a claim alongside the claim, and for the '
 'grounds alongside the strength. The figure is quarterly, stated on page three of the '
 'minutes, is a different kind of sentence from the figure is quarterly, and a reader can do '
 'something with the difference. The second sentence can be checked in thirty seconds; the '
 'first cannot be checked at all.',
 'This is why the grammar of deduction matters commercially rather than only grammatically. '
 'A document that distinguishes must from might, and attaches the reason to each, is '
 'reporting its own reliability. A document that states everything in the same register is '
 'withholding exactly the information a reader most needs, whether or not anybody intended '
 'to withhold it.'],
dp1=('Fluency and judgement',
     'Research on processing fluency consistently finds that statements which are easier to '
     'read are judged more likely to be true, with the effect persisting even when readers '
     'are warned about it.',
     'Source: general cognitive-psychology research, 2026. Effect sizes vary by task.'),
e_a=[('What signals do readers fall back on?', 'organisation, specificity, internal consistency and an absence of hedging'),
     ('Why did those signals work in the past?', 'because producing them without knowledge used to be difficult and slow'),
     ('Why does reading more carefully not help?', 'because the surface no longer carries information about correctness'),
     ('What does help?', 'asking for the strength of a claim and the grounds for it, alongside the claim'),
     ('What is a document that states everything in one register withholding?', 'the information about its own reliability')],
e_b=[('The signals readers use are arbitrary.', 'F'),
     ('Most output of this kind is incorrect.', 'F'),
     ('Careful reading of a fluent wrong document helps.', 'F'),
     ('"Stated on page three of the minutes" can be checked quickly.', 'T'),
     ('Distinguishing must from might reports a document’s own reliability.', 'T'),
     ('The fluency effect disappears when readers are warned.', 'F')],

w_model=(
 'Purpose: make the reliability of a claim visible to a reader who cannot check it. Scope: '
 'all client-facing summaries of meetings and calls; internal notes are excluded. Inputs: '
 'the recording or the notes, with their date. Criteria: every factual claim is marked as '
 'stated, inferred or assumed; every inferred claim names what it was inferred from; where '
 'a figure could be read 2 ways, the summary says so rather than choosing. Done: 1 summary '
 'with every claim marked, and 1 list of points that could not be resolved from the source. '
 'Fallback: where the source does not settle a question, write "not stated" and quote the '
 'nearest thing the source does say.'),
w_fig=figs.split('ONE CLAIM, TWO WAYS',
                 'Withholds its reliability',
                 ['The figure is annual.',
                  'The client intends to extend.',
                  'The complaint was resolved.',
                  'They were satisfied with the outcome.'],
                 'Reports its reliability',
                 ['Stated as 48,000; period not specified.',
                  'Not stated; they said they would think about it.',
                  'Resolved per the reply of 14 March.',
                  'Not stated; they said that is fine.']),
w_fig_cap='The right-hand column is longer and lets a reader know what to check.',
w_task='Write a summary brief that makes reliability visible.',
w_steps=['Choose work where somebody summarises something other people did not attend.',
         'Require every claim to be marked stated, inferred or assumed.',
         'Require an inferred claim to name what it was inferred from.',
         'Say what to do when the source could be read two ways.',
         'Say what "not stated" looks like, and require it to be used.'],
w_bank=['Mark every claim as … , … or …',
        'An inferred claim must name …', 'Where the source admits 2 readings, …',
        'Write "not stated" and quote …', 'Return … and a list of …'],
w_check=['Can a reader tell, from the page, which claims rest on what?',
         'Is "not stated" an available and expected answer?',
         'Does the brief forbid choosing between two readings silently?',
         'Would the output tell a reader what to check first?'],

t_title='Confident and wrong: why fluency is not accuracy',
t_fig=figs.handover('A CLAIM, ITS STRENGTH AND ITS GROUNDS',
                    ['Produce the summary', 'Mark each claim stated or inferred', 'Name the source line for each'],
                    'Victor reads only the inferred claims, and checks 3',
                    'Marking the claims tells the checker where to look.'),
t_fig_cap='The marking is not bureaucracy. It is what makes a four-minute check possible.',
t_body=[
 'Ask for the strength of a claim and its grounds in the same sentence, every time, because '
 'a claim arriving without either is indistinguishable from a claim with both behind it. '
 'This is a small change in what you request and it transfers the reader’s problem from '
 'judging a whole document to examining a short list of marked assertions.',
 'Insist on the vocabulary of deduction, which exists precisely for this and is not '
 'decoration. It must be quarterly because the annual figure is four times this is a '
 'deduction with a warrant attached. It might be quarterly is a possibility honestly '
 'reported. The figure is quarterly is neither, and it is the sentence you will get unless '
 'you ask for something else.',
 'And remember what the marking does not do. Marking a claim as stated does not make it '
 'stated; the mark is itself an assertion, produced by the same process, and it can be '
 'wrong in exactly the same way. What the marking buys is a short list of places to look, '
 'which turns an unbounded checking problem into a bounded one.'],
t_say=[('Ask for strength: ', 'Mark each claim as stated, inferred or assumed.'),
       ('Ask for grounds: ', 'For anything inferred, name the line it was inferred from.'),
       ('Permit the gap: ', 'Where the source does not say, write "not stated".')],
t_bound=('Marking does not verify. A claim marked "stated, page three" can be marked that '
         'way wrongly, by the same process that produced the claim, and the mark will read '
         'exactly as convincingly as a correct one. What marking produces is a shorter list '
         'to check, not a checked list.'),
t_a=[('Mark each claim as stated, inferred or ____________.', 'assumed'),
     ('For anything inferred, name the ____________ it was inferred from.', 'line'),
     ('Where the source does not say, write "not ____________".', 'stated'),
     ('A claim arriving without either is ____________ from a claim with both.', 'indistinguishable'),
     ('It must be quarterly is a deduction with a ____________ attached.', 'warrant'),
     ('What the marking buys is a short list of places to ____________.', 'look')],
t_b_rubric='Rewrite each claim so that its strength and grounds are visible.',
t_b=[('The figure is annual.', 'stated as 48,000 on page 3; the period is not specified'),
     ('The client wants to extend.', 'not stated; they said they would think about it over the weekend'),
     ('This is a duplicate payment.', 'it might be; two identical lines, but no delivery note checked'),
     ('The complaint was resolved.', 'stated in the reply of 14 March, which the client acknowledged')],

case=dict(
 title='Decision Clinic · The summary the client believed',
 brief=[
  'A client used a meeting summary produced by Arclight to brief their own board. The '
  'summary stated that a supplier had agreed to a price reduction. The supplier had said '
  'that they would look at it.',
  'The client made a decision at that board meeting which assumed the reduction. When the '
  'supplier’s invoice arrived at the old price, the client asked Arclight for the recording.',
  'The recording exists. The summary is wrong in one sentence out of nineteen, and that '
  'sentence is the only one anybody acted on. Nobody at Arclight read the summary before it '
  'went, because summaries were in the plausible pile and were not being sampled.'],
 exhibit=figs.datatable('THE NINETEEN SENTENCES',
                        ['', 'Sentences', 'Supported by the recording', 'Acted on'],
                        [['factual, stated', '14', '14', '0'],
                         ['factual, inferred', '4', '3', '0'],
                         ['the price sentence', '1', 'no', '1'],
                         ['total', '19', '17 of 19', '1'],
                         ['read by anybody before sending', '0', '—', '—']]),
 exhibit_cap='Seventeen of nineteen correct, and the two that were not were where the money was.',
 exhibit_note='The error rate of the summary is about eleven per cent. The error rate of the '
              'sentences anybody acted on is one hundred per cent.',
 voices=[('Victor Sandoval', 'operations and quality',
          'The sampling rate for summaries is zero and I set it there, because they were in '
          'the plausible pile and I was working on the wrong pile first.'),
         ('Marta Olsen', 'risk and liability',
          'A client took a board decision on our document. Whether we sampled is a second '
          'question. The first is whether we should be producing a document a client will '
          'rely on without a person reading it.'),
         ('Dalia Rahman', 'co-founder',
          'If a person reads every summary we cannot sell summaries at this price. I would '
          'rather hear that said out loud than discover it by a rule we cannot afford.')],
 steps=[('Find it', 'How many sentences were wrong, and how many were acted on?'),
        ('Compare it', 'What does sampling give, and what does reading everything give?'),
        ('Infer it', 'Why does the sentence that mattered differ from the others?'),
        ('Weigh it', 'The price of the product against a client board decision.'),
        ('Decide', 'What changes about summaries, and what is accepted?')],
 analysis=[('Find it. What was the error rate of the summary?', 'about eleven per cent, two sentences in nineteen'),
           ('Compare it. What is wrong with sampling here?', 'it reduces the overall error rate but does not target the sentences anybody acts on'),
           ('Infer it. What distinguishes the price sentence?', 'it reports a commitment, which is the kind of sentence clients act on'),
           ('Weigh it. What does Dalia want stated plainly?', 'that reading every summary would change what Arclight can charge'),
           ('Decide. What rule targets the risk without reading everything?', 'reading only the sentences that report a commitment, which are few per summary')],
 decision='Write the rule for client-facing summaries.',
 decision_steps=['Say which sentences must be read by a person, and how they are identified.',
                 'Say what happens to the rest.',
                 'Put a figure on the time this adds per summary.',
                 'Say what the client is told about how summaries are produced.'],
 bank=['Any sentence that reports … must be …',
       'All other sentences are …', 'This adds approximately … per summary.',
       'Clients are told that …', 'This is reviewed if …'],
 outcome='Summaries now mark every sentence that reports a commitment, and only those '
         'sentences are read against the source before sending. There are typically two or '
         'three per summary and the check takes about ninety seconds. Over nine months it '
         'caught four errors, three of them in commitment sentences and one in a date. Marta '
         'accepted the rule and recorded a written reservation that a sentence could report '
         'a commitment without being marked as one, which happened once, in month seven.',
 outcome_q=[('Why was reading only commitment sentences defensible?', 'because the sentences clients act on are a small, identifiable subset'),
            ('What did Marta’s recorded reservation turn out to be worth?', 'it identified the failure mode that actually occurred, in month seven')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Summarise the client meeting',
 task=['This is the brief under which the nineteen-sentence summary was produced. It is the '
       'brief Arclight had used for about four hundred summaries without incident.',
       'Nothing in it distinguishes what was said from what was understood, and nothing asks '
       'for the strength of any claim. Four hundred summaries had been fine because nobody '
       'had acted on one.'],
 draft=['Write up the client meeting for their records.',
        'Capture the key points and what was agreed.',
        'Keep it clear and readable.',
        'Include anything that seems important.',
        'Make sure it reads as a proper record.',
        'Send it straight across to them.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief asking for a record, with no distinction between what was said and what was gathered.',
 asked=['Claims marked stated, inferred or assumed',
        '"Not stated" where the source is silent',
        'Commitment sentences identified'],
 back=['All 19 sentences in one register',
       '2 inferences presented as record',
       '1 commitment reported that was never made'],
 gap='"What was agreed" invites a conclusion where the source has only a discussion, and '
     '"anything that seems important" selects by significance rather than by what the '
     'recording supports.',
 back_cap='A document a client took to its board, with one invented agreement in it.',
 back_note='The phrase "what was agreed" is the whole failure. The meeting contained no '
           'agreement; it contained somebody saying they would look at it.',
 diagnosis=[('[1] "the key points" — key by whose judgement?', 'unstated criterion'),
            ('[2] "what was agreed" — and if nothing was agreed?', 'hidden assumption'),
            ('[3] "anything that seems important" — important to whom?', 'unstated criterion'),
            ('[4] "it reads as a proper record" — a record of what, exactly?', 'ambiguous referent'),
            ('[5] "for their records" — who will read it, and act on it how?', 'hidden assumption'),
            ('[6] "send it straight across" — read by whom first?', 'ambiguous referent')],
 rewrite='Rewrite the brief so that the summary distinguishes what was said from what was '
         'inferred, and so that an absent agreement is reported as absent.',
 scaffold=['Why a client may act on this document, and what that requires of it',
           'Which meetings are covered, and what is excluded',
           'The recording with its date, and nothing else',
           'How each claim is marked, and what happens where the source is silent',
           'The summary and the list that comes back with it',
           'What to write when the source does not settle a question'],
 bank=['Produce a record that … so that …',
       'Cover … meetings; exclude …', 'Work from the recording dated … only.',
       'Mark every claim as … ; where the source is silent, …',
       'Return … and a list of …', 'If the source admits 2 readings, …'],
 check=['Does the brief distinguish what was said from what was concluded?',
        'Is "nothing was agreed" an available and expected output?',
        'Are sentences that report a commitment identified?',
        'Does the brief say who reads it before it reaches the client?'],
 model=['Produce a record a client can take to their own board, in which they can tell what was said from what we concluded',
        'Client meetings and calls that are recorded; internal discussions and unrecorded conversations are excluded',
        'The recording dated 11 April, and nothing else',
        'Mark every claim as stated, inferred or assumed; an inferred claim names the minute it was inferred from; mark separately every sentence that reports a commitment; where the source is silent, write "not stated" and quote the nearest thing that was said',
        '1 marked summary, 1 list of commitment sentences and 1 list of questions the recording does not settle, before it is sent',
        'Where the recording admits 2 readings of a figure or a date, report both readings rather than choosing one'],
 cost='1 client board decision taken on a commitment nobody had made, 1 supplier invoice at '
      'the old price, about 4,800 euros of difference, and 400 earlier summaries whose '
      'reliability nobody can now establish.'),

rev_fig=figs.split('STRENGTH AND GROUNDS',
                   'Near certainty — must, cannot',
                   ['It must be quarterly — the year is 4 times this.',
                    'She must have signed; the queue was released.',
                    'It cannot be current; it predates the policy.',
                    'That cannot have been the March export.'],
                   'Possibility — might, may, could',
                   ['It might be quarterly; I have not checked.',
                    'He may have paid; the bank is not reconciled.',
                    'It could be either, on this evidence.',
                    'There might be a second file.']),
rev_fig_cap='Both columns are honest. A document with neither is the one to worry about.',
rev=dict(
 read=[('Nine of eleven colleagues chose the second summary because', ['it was shorter', 'nothing in it gave them reason to doubt it', 'it was signed', 'it was first'], 1),
       ('"It must be quarterly" expresses', ['possibility', 'near certainty from evidence', 'obligation', 'permission'], 1),
       ('The signals readers use are produced by', ['the knowing', 'the writing', 'the subject', 'the length'], 1),
       ('In the Clinic, which sentences are now read by a person?', ['all of them', 'those reporting a commitment', 'the first three', 'none'], 1)],
 listen_text='Ask for three things in one sentence: the claim, how certain it is, and what '
             'that certainty rests on. The figure is quarterly tells you one thing. It must '
             'be quarterly, because the annual total is four times this, tells you three, '
             'and a reader can check the third in half a minute. A document that states '
             'everything in the same register is withholding the thing you most need.',
 listen=[('Ask for the claim, how ____________ it is, and what it rests on.', 'certain'),
         ('It must be quarterly, because the annual ____________ is four times this.', 'total'),
         ('A reader can check the third in half a ____________.', 'minute'),
         ('A document that states everything in the same ____________ is withholding something.', 'register')],
 speak=['State four conclusions about your work. Your partner grades each must, might or cannot.',
        'Find one you stated as fact and can only support as might.'],
 write='Rewrite four claims from your own work with their strength and grounds attached.',
 vocab=[('A conclusion drawn from evidence that may be wrong is an ____________.', 'inference'),
        ('The reason entitling you to a conclusion is its ____________.', 'warrant'),
        ('A statement made with no limiting condition is ____________.', 'unqualified'),
        ('Fluent in a way that suggests little thought is ____________.', 'glib'),
        ('Offered provisionally and open to revision is ____________.', 'tentative')],
 gram=[('It ____________ be quarterly, given that the year is four times this.', 'must'),
       ('He ____________ have paid; I have not checked the bank.', 'might'),
       ('The file ____________ be current — it predates the policy.', 'cannot'),
       ('She ____________ have signed it, because the queue was released.', 'must'),
       ('It ____________ be either, on the evidence we have.', 'could')]),

found=['Find a claim in your own writing stated as fact that you could only support as might.',
       'Ask for the grounds next time somebody tells you something you cannot check.',
       'Compare two documents on the same subject and notice which signals you used.',
       'Mark one piece of your own work for what is stated and what is inferred.'],
end_line='Nothing in it gave them reason to doubt it, which is not the same as giving them reason to trust it.',
end_next='Next: How Much to Check',
)
