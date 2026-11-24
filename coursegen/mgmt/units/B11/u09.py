# -*- coding: utf-8 -*-
import figs

U = dict(
num=9, title='Must, Should, Could',
gram='modals of obligation: must, have to, should, need to',
ai='why it does not say "I do not know"',
strap='CEFR B1 · Grammar: modals of obligation: must, have to, should, need to · AI: why it does not say "I do not know"',
cando=['choose between must, have to, should and need to according to how binding a rule is',
       'write a rule that distinguishes what is required from what is advised',
       'explain why a confident answer is not evidence of a complete picture',
       'ask for the basis of an answer rather than the answer alone',
       'build a step where somebody has to say "I do not know" on purpose'],
hero=('THE ANSWER THAT WAS NEVER IN DOUBT',
      ['Every answer arrives in the same tone of voice.',
       'The correct ones and the invented ones alike.'],
      [(840, 'blue', 'short'), (1560, 'purple', 'long'), (2320, 'grey', 'short')]),
hero_cap='There is no tone of voice for "I am guessing". That is the whole unit.',

warm=['When did somebody last give you a confident answer that turned out to be invented?',
      'What is the difference between "you must" and "you should"?',
      'How do you find out whether somebody actually knows, or is being agreeable?'],
read=[
 'In March, Fatima asked a straightforward question about a client’s contract: what is the '
 'notice period? The answer came back immediately. Ninety days, with a clear explanation of '
 'where the figure sat in the document and why it mattered. It was wrong. The contract says '
 'sixty, and the sentence that was quoted back at her does not exist anywhere in it.',
 'What unsettled Fatima was not the error. It was that the wrong answer looked exactly like '
 'the eleven right answers she had received that morning. There was no hesitation in it, no '
 'hedge, no sign anywhere in the wording that this one was different from the others.',
 'This is worth understanding properly, because people tend to explain it badly in both '
 'directions. It is not that the system is dishonest, and it is not that it is unreliable in '
 'general. It is that producing a fluent answer and knowing whether that answer is true are '
 'two different operations, and only the first one is happening.',
 'So uncertainty does not announce itself. A person who is not sure usually signals it '
 'without meaning to: they slow down, they qualify, they say I think or probably or you '
 'should check. Those signals are the thing most of us actually rely on when we decide '
 'whether to trust an answer, and here they are simply absent.',
 'Arclight’s response was not to stop asking questions. It was to stop asking for answers '
 'and start asking for sources. The rule now is that any question about a document must come '
 'back with the clause quoted and its location, and if the quotation cannot be produced, the '
 'answer does not count. Fatima says this has changed less about her work than she expected '
 'and more about her reading.'],
c_a=[('What did Fatima ask?', 'what the notice period was in a client’s contract'),
     ('What was wrong with the answer?', 'it said ninety days instead of sixty, and quoted a sentence that does not exist'),
     ('What unsettled her most?', 'that the wrong answer looked exactly like the right ones'),
     ('What two operations does the text distinguish?', 'producing a fluent answer, and knowing whether it is true'),
     ('What is Arclight’s rule now?', 'any question about a document must come back with the clause quoted and located')],
c_b=[('The contract notice period is ninety days.', 'F'),
     ('The quoted sentence appears in the contract.', 'F'),
     ('The wrong answer was worded more cautiously than the right ones.', 'F'),
     ('The writer says the system is dishonest.', 'F'),
     ('People usually signal uncertainty without meaning to.', 'T'),
     ('Arclight stopped asking questions about documents.', 'F')],
c_c=[('The contract says ____________.', 'sixty'),
     ('There was no ____________ in it.', 'hesitation'),
     ('Only the ____________ operation is happening.', 'first'),
     ('A person who is not sure usually ____________ it.', 'signals'),
     ('Stop asking for answers and start asking for ____________.', 'sources'),
     ('If the quotation cannot be produced, the answer does not ____________.', 'count')],
c_d=[('The problem is best described as missing ( accuracy / signals ).', ['accuracy', 'signals'], 1),
     ('The writer warns against explaining this', ['too simply', 'badly in both directions', 'to clients', 'at all'], 1),
     ('Arclight’s fix was to require', ['shorter answers', 'a quoted and located source', 'two systems', 'no questions'], 1),
     ('Fatima says the rule changed', ['nothing', 'her work completely', 'her reading more than her work', 'the contract'], 2),
     ('The signals we normally rely on are', ['tone, hedging and slowing down', 'length', 'formatting', 'speed'], 0)],
c_e=('How binding? Put each rule in the right column.',
     [('Every reply must quote its source.', 'Required'),
      ('You should check the date as well.', 'Advised'),
      ('Staff have to sign the register.', 'Required'),
      ('It would be sensible to ask Marta.', 'Advised'),
      ('You need to log the exception.', 'Required'),
      ('You could also copy in Kenji.', 'Advised')],
     ['Required', 'Advised']),

v_fig_title='HOW BINDING IS IT?',
v_fig=[('scale', 'an obligation'), ('doc', 'a requirement'), ('bank', 'a commitment'),
       ('bulb', 'latitude'), ('note', 'an assertion'), ('chart', 'certainty')],
v_fig_cap='Six words between "you may" and "you must".',
vocab=[
 ('obligation', 'something you are required to do, by rule or by agreement'),
 ('requirement', 'a thing that must be present or done before something counts'),
 ('mandatory', 'required, with no choice about it'),
 ('optional', 'left to the person to decide'),
 ('discretionary', 'decided case by case by somebody with the authority to do so'),
 ('waive', 'to decide not to insist on a rule in a particular case'),
 ('enforce', 'to make sure a rule is actually followed'),
 ('comply', 'to do what a rule or an instruction requires'),
 ('breach', 'a failure to keep to a rule or an agreement'),
 ('undertaking', 'a formal promise to do something'),
 ('commitment', 'a promise that others are entitled to rely on'),
 ('stipulate', 'to state clearly as a condition of an agreement'),
 ('binding', 'having force that cannot simply be ignored'),
 ('latitude', 'freedom to act within broad limits'),
 ('leeway', 'the room available to act differently without breaking a rule'),
 ('assert', 'to state something firmly as though it were established'),
 ('certainty', 'the state of having no doubt at all'),
 ('plausible', 'sounding reasonable, whether or not it is true'),
 ('unfounded', 'not supported by any evidence'),
 ('overconfident', 'more certain than the evidence allows')],
v_a=[('A rule with no choice about it is ____________.', 'mandatory'),
     ('To state something clearly as a condition is to ____________ it.', 'stipulate'),
     ('A failure to keep to an agreement is a ____________.', 'breach'),
     ('A claim not supported by evidence is ____________.', 'unfounded'),
     ('Something that sounds reasonable, true or not, is ____________.', 'plausible'),
     ('An agreement with force that cannot be ignored is ____________.', 'binding'),
     ('To decide not to insist on a rule this once is to ____________ it.', 'waive'),
     ('The room to act differently without breaking a rule is ____________.', 'leeway')],
v_b=[('An undertaking is a formal promise', 'to do something.'),
     ('To comply is to do what a rule', 'or an instruction requires.'),
     ('Discretionary means decided case by case', 'by somebody with the authority.'),
     ('To assert something is to state it firmly', 'as though it were established.'),
     ('Latitude is freedom to act', 'within broad limits.')],

g_title='Grammar: modals of obligation — must, have to, should, need to',
g_rule=['Must is the strongest: the rule leaves no room. Every reply must quote its source.',
        'Have to is close to must, and usually points at an outside rule.',
        'Should advises: the reader may still decide otherwise and be within the rules.',
        'Need to describes a necessity rather than imposing one: you need to log it first.'],
g_fig=('LOOSE',
       ['Replies should quote a source.',
        'It is a good idea to log exceptions.',
        'Try to get it signed.',
        'Ideally we would check these.'],
       'PRECISE',
       ['Every reply must quote its source.',
        'You have to log every exception.',
        'It must be signed before it is sent.',
        'All 60 are checked; none is optional.'],
       'advice, which anybody may decline',
       'a requirement, which nobody may'),
g_fig_cap='The left column is what a rule looks like just before it stops being followed.',
g_a=[('Every reply ____________ quote its source. (must)', 'must'),
     ('You ____________ log the exception before you close it. (have)', 'have to'),
     ('You ____________ check the date as well, if there is time. (should)', 'should'),
     ('We ____________ to agree a tolerance before April. (need)', 'need'),
     ('Nothing ____________ be sent without a signature. (must)', 'must'),
     ('Staff ____________ to sign the register each morning. (have)', 'have'),
     ('You ____________ copy in Kenji, but it is not required. (could)', 'could'),
     ('It ____________ be read by a person first. (must)', 'must'),
     ('You ____________ not waive this without Marta. (must)', 'must')],
g_b=[('Every reply ( must / should ) quote its source — there is no exception.', ['must', 'should'], 0),
     ('You ____ log the exception before closing it.', ['could', 'have to', 'might', 'may well'], 1),
     ('You ____ check the date, if there is time.', ['must', 'have to', 'should', 'need'], 2),
     ('We ____ to agree a tolerance before April.', ['need', 'must to', 'should to', 'have'], 0),
     ('Nothing ____ be sent without a signature.', ['should', 'could', 'must', 'might'], 2),
     ('You ____ copy in Kenji, but it is not required.', ['must', 'have to', 'need to', 'could'], 3)],

d1=dict(title='Where is that sentence?',
        fig=(['Ninety days, it says here.', 'Show me where.'],
             ['It quoted the clause.', 'The clause is not in the contract.']),
        cap='Fatima and Marta, with the contract open.',
        lines=[('Fatima', 'It says ninety days and it quotes the clause. Clause eleven, it says.'),
               ('Marta', 'Read me clause eleven from the actual contract.'),
               ('Fatima', 'Clause eleven is about insurance.'),
               ('Marta', 'And the notice period?'),
               ('Fatima', 'Clause seven. Sixty days. The quoted sentence is not in here at all.'),
               ('Marta', 'So we have a figure, a clause number and a quotation, and all three are wrong.'),
               ('Fatima', 'Why would it invent a quotation? That is the part I do not understand.'),
               ('Marta', 'It did not decide to. It produced something shaped like an answer.'),
               ('Fatima', 'It was more detailed than the real answer would have been.'),
               ('Marta', 'Detail is cheap. That is why detail is not evidence.'),
               ('Fatima', 'Then what do I do, stop asking?'),
               ('Marta', 'Ask for the quotation and then open the document. Always the second part.')],
        a=[('What three things were wrong?', 'the figure, the clause number and the quotation'),
           ('What is clause eleven actually about?', 'insurance'),
           ('What is the real notice period?', 'sixty days, in clause seven'),
           ('What does Marta say about detail?', 'that detail is cheap and therefore not evidence'),
           ('What two-part habit does Marta recommend?', 'ask for the quotation, then open the document and look')],
        b=[('Clause eleven is about ____________.', 'insurance'),
           ('It produced something ____________ like an answer.', 'shaped'),
           ('____________ is cheap.', 'Detail'),
           ('Always the ____________ part.', 'second')]),
d2=dict(title='Must, or should?',
        fig=(['Replies should quote a source.', 'Should, or must?'],
             ['Must sounds heavy-handed.', 'Should sounds optional. It is.']),
        cap='Dalia and Thomas, writing the rule down.',
        lines=[('Dalia', 'Replies should quote a source. That is the rule.'),
               ('Thomas', 'Should, or must?'),
               ('Dalia', 'Should. Must sounds heavy-handed for a team of eleven.'),
               ('Thomas', 'Then on a Friday at five it will not happen, and that is allowed.'),
               ('Dalia', 'Nobody will read it that closely.'),
               ('Thomas', 'Everybody reads a rule that closely at exactly the moment it is inconvenient.'),
               ('Dalia', 'So must, and then we have a rule people break.'),
               ('Thomas', 'You have a rule people break and know they are breaking. That is different.'),
               ('Dalia', 'I would rather have a culture than a rulebook.'),
               ('Thomas', 'So would I. The rulebook is for the Friday when the culture is tired.'),
               ('Dalia', 'Must for anything that leaves the building. Should for internal.'),
               ('Thomas', 'That I can work with, although I think you will regret the second half.')],
        a=[('What does Dalia first propose?', 'that replies should quote a source'),
           ('Why does she prefer "should"?', 'because "must" sounds heavy-handed for a small team'),
           ('What does Thomas say about when people read rules closely?', 'at exactly the moment the rule is inconvenient'),
           ('What is the difference Thomas draws?', 'between a rule people break, and a rule people break knowing they are breaking it'),
           ('What do they agree?', 'must for anything leaving the building, should for internal work')],
        b=[('____________ sounds heavy-handed.', 'Must'),
           ('Everybody reads a rule that closely when it is ____________.', 'inconvenient'),
           ('The rulebook is for the Friday when the ____________ is tired.', 'culture'),
           ('Must for anything that leaves the ____________.', 'building')]),

speak=[('Must or should?',
        ['Student A: state four rules from your own workplace, as you would normally say them.',
         'Student B: ask of each one whether it is must or should, and what happens if it is broken.',
         'Mark any rule where neither of you is sure. Those are the ones that fail first.']),
       ('Spoken specification: brief with a required check',
        ['Choose a task where somebody could give you a confident wrong answer.',
         'Brief it aloud, including one sentence beginning "this must come back with".',
         'Your partner tells you how they would fake it. Close that gap.']),
       ('Ask for the basis',
        ['One of you states a fact about your work. The other asks only: how do you know?',
         'Keep asking until you reach something that could be shown to a third person.',
         'Count the steps. More than three usually means nobody has checked.'])],

ext_title='There is no tone of voice for "I do not know"',
ext_fig=figs.datatable('WHAT A PERSON DOES, AND WHAT IS MISSING HERE',
                       ['Signal of doubt', 'A person', 'Here'],
                       [['slowing down', 'usually', 'never'],
                        ['hedging words', 'often', 'only if asked'],
                        ['saying "check it"', 'sometimes', 'rarely unprompted'],
                        ['shorter answer', 'often', 'no'],
                        ['refusing to answer', 'occasionally', 'almost never']]),
ext_fig_cap='The third column is what the whole problem looks like in one table.',
ext=[
 'When somebody we work with does not know something, we usually find out without either '
 'party saying so. They take a moment longer. They say I think, or probably, or you would '
 'want to check that. Their answer gets shorter rather than longer. We have spent our whole '
 'lives reading these signals and we are good enough at it that we do not notice we are '
 'doing it.',
 'None of those signals is produced here, and the reason is worth stating precisely because '
 'it is often stated wrongly. It is not that the system is deceiving anybody. It is that '
 'generating a fluent, well-formed answer and establishing whether that answer corresponds '
 'to reality are separate operations, and the second one is not happening unless something '
 'in the process makes it happen.',
 'The consequence is specific rather than general: the failure mode is not that answers are '
 'often wrong, because they are often right. It is that the wrong ones are indistinguishable '
 'from the right ones at the point of reading. A ten per cent error rate with visible '
 'uncertainty is a manageable thing. A two per cent error rate with no visible uncertainty '
 'is harder to handle, because there is nowhere to point the attention.',
 'What works in practice is not asking harder questions but changing what you ask for. '
 'Do not ask what the notice period is; ask for the clause that states it and where it sits. '
 'A quotation can be checked in four seconds by opening the document. An assertion cannot be '
 'checked at all without redoing the work.',
 'This has a secondary effect that people report more often than the first. Once answers '
 'have to arrive with their sources attached, the cases where no source exists become '
 'visible, and those cases turn out to be interesting. The question that has no clause behind '
 'it is usually a question about something the contract does not actually address, which is '
 'a thing worth knowing a month before it matters.'],
dp1=('Confidence and accuracy',
     'Research on expert judgement has long found that stated confidence and actual accuracy '
     'can come apart, and that confident presentation increases how far an answer is trusted.',
     'Source: general judgement and decision-making research, 2026. Patterns vary by domain.'),
e_a=[('Name three ways a person signals uncertainty.', 'slowing down, hedging words, and suggesting you check'),
     ('Why does the writer say the usual explanations are wrong?', 'because this is not deception, but two separate operations of which only one is happening'),
     ('Why is a low error rate with no visible uncertainty harder to handle?', 'because there is nowhere to direct your attention'),
     ('What should you ask for instead of an answer?', 'the clause that states it, and where it sits'),
     ('What is the secondary effect of requiring sources?', 'questions with no source behind them become visible, and they are usually important')],
e_b=[('People usually announce when they are unsure.', 'F'),
     ('The writer says answers are usually wrong.', 'F'),
     ('A quotation can be checked quickly by opening the document.', 'T'),
     ('A visible ten per cent error rate is harder to manage than an invisible two per cent.', 'F'),
     ('Requiring sources reveals questions with no source.', 'T'),
     ('Asking harder questions is the recommended fix.', 'F')],

w_model=(
 'Purpose: answer client questions about contracts without anybody relying on an unchecked '
 'assertion. Scope: the 14 live client contracts in the shared folder; exclude the 2 under '
 'negotiation. Inputs: the signed PDFs dated on or before 1 April. Criteria: every answer '
 'must quote the clause it rests on, give the clause number and the page, and must say '
 '"not addressed" where no clause covers the question. Done: 1 answer, 1 quotation, 1 '
 'location, for each question. Fallback: where no clause covers the question, return "not '
 'addressed" and name the nearest clause; do not infer an answer from the nearest clause.'),
w_fig=figs.handover('AN ANSWER AND ITS EVIDENCE',
                    ['Find the clause', 'Quote it exactly', 'Give number and page'],
                    'Fatima opens the PDF and reads the clause',
                    'Four seconds, and the check is real.'),
w_fig_cap='The last box takes four seconds and is the only part that establishes anything.',
w_task='Write a brief for work where a confident wrong answer would be expensive.',
w_steps=['Choose a question somebody might answer plausibly without knowing.',
         'Write Criteria as a must: every answer must come back with X.',
         'Say exactly what X is, so that it can be checked without redoing the work.',
         'Write the instruction for the case where the evidence does not exist.',
         'Make the "not addressed" answer explicitly acceptable, in writing.'],
w_bank=['Every answer must quote…', 'Each answer must give … and …',
        'Where no … covers the question, return …', 'Do not infer … from …',
        'An answer without … does not count.'],
w_check=['Is your evidence requirement a must, not a should?',
         'Could a reader check the evidence without redoing the work?',
         'Have you made "I do not know" an acceptable answer, in writing?',
         'Does the brief forbid inferring from the nearest thing?'],

t_title='Why it does not say "I do not know"',
t_fig=figs.split('ASK FOR THIS, NOT THAT',
                 'An assertion — cannot be checked',
                 ['What is the notice period?',
                  'Is this clause standard?',
                  'Does the contract allow it?',
                  'When does it renew?'],
                 'Evidence — checkable in seconds',
                 ['Quote the clause that sets the notice period.',
                  'Quote the clause and give its number.',
                  'Quote the permitting words, or say not addressed.',
                  'Quote the renewal clause and its page.']),
t_fig_cap='Both columns ask the same four questions. Only one can be verified at a glance.',
t_body=[
 'The habit to build is simple, and it exists because you cannot tell from the answer whether anybody knows anything. It has to be built deliberately, because it runs against '
 'how we normally ask things. Stop asking for conclusions and start asking for the evidence '
 'a conclusion would rest on. Not what is the notice period, but quote the clause that sets '
 'the notice period and tell me where it is. The second question is harder to answer '
 'plausibly without actually having the document.',
 'Then make "not addressed" a permitted answer, in writing, in the brief. This matters more '
 'than it sounds. If every question must produce an answer, every question will produce one, '
 'including the questions whose honest answer is that the contract says nothing about this. '
 'Naming the empty answer as acceptable is what makes it available.',
 'Finally, use must rather than should for anything that leaves the building. Should is '
 'read as a preference at five o’clock on a Friday, and the moment when somebody is tired '
 'and in a hurry is precisely the moment the rule exists for. A rule that is only followed '
 'when it is convenient is not a rule; it is a description of what people were going to do '
 'anyway.'],
t_say=[('Ask for evidence: ', 'Quote the clause that sets the notice period, with its number.'),
       ('Permit the empty answer: ', 'Where no clause covers this, return "not addressed".'),
       ('Make it binding: ', 'An answer that does not quote its source does not count.')],
t_bound=('Requiring a source does not guarantee the source is real. A quotation can be '
         'produced that does not appear in the document, as it was in March, and the only '
         'thing that establishes otherwise is somebody opening the file. The rule makes '
         'checking possible; it does not do the checking.'),
t_a=[('Quote the clause that sets the notice period, with its ____________.', 'number'),
     ('Where no clause covers this, return "not ____________".', 'addressed'),
     ('An answer that does not quote its source does not ____________.', 'count'),
     ('Stop asking for conclusions and start asking for the ____________.', 'evidence'),
     ('Naming the empty answer as acceptable is what makes it ____________.', 'available'),
     ('Should is read as a ____________ at five o’clock on a Friday.', 'preference')],
t_b_rubric='Rewrite each question so that the answer can be checked in seconds.',
t_b=[('What is the notice period?', 'quote the clause that sets the notice period, with its number and page'),
     ('Is this a standard clause?', 'quote the clause and name the two contracts you compared it with'),
     ('Did we agree to that?', 'quote the sentence where it was agreed, and give the date of the message'),
     ('How many clients are affected?', 'list the clients by name and give the ledger line for each')],

case=dict(
 title='Decision Clinic · The rule people will break',
 brief=[
  'Arclight has run the quote-your-source rule for two months on anything that leaves the '
  'building. In those two months it has caught four answers that could not be supported, '
  'two of which would have gone to clients.',
  'The rule costs about ninety seconds a question. Thomas has measured it. On an ordinary '
  'day that is about twenty minutes across the team, and on a busy day it is the first '
  'thing that quietly stops happening.',
  'Dalia has noticed that it stopped happening entirely during the week of the Boateng '
  'audit, which was exactly the week when the risk of a wrong answer was highest. Nobody '
  'decided to suspend it. It simply did not occur.'],
 exhibit=figs.datatable('COMPLIANCE WITH THE SOURCE RULE, BY WEEK',
                        ['Week', 'Questions', 'Sourced', 'Rate'],
                        [['week 1', '88', '86', '98%'],
                         ['week 2', '91', '84', '92%'],
                         ['week 5', '103', '79', '77%'],
                         ['week 7 (audit)', '140', '41', '29%'],
                         ['week 8', '96', '71', '74%']]),
 exhibit_cap='The rule was followed least in the week it mattered most.',
 exhibit_note='Nobody was asked to suspend the rule in week seven and nobody reported '
              'suspending it. The figures come from the reply log, not from self-report.',
 voices=[('Dalia Rahman', 'co-founder',
          'Make it mandatory and enforce it. A reply without a source gets returned '
          'unanswered. It is harsh and it is the only thing that survives a busy week.'),
         ('Thomas Reed', 'service delivery',
          'Enforcement will push people to paste in a clause number without opening the '
          'file. You will get compliance and lose the check, and the figures will look '
          'better than week one.'),
         ('Marta Olsen', 'risk and liability',
          'Then make the rule smaller. Not every question. The questions where being wrong '
          'is expensive. Twelve per cent of them, properly done, beats all of them badly.')],
 steps=[('Find it', 'What was the compliance rate in the audit week?'),
        ('Compare it', 'What does enforcement give, and what does Thomas say it costs?'),
        ('Infer it', 'Why did the rule fail in the week it mattered most?'),
        ('Weigh it', 'Full coverage badly done against partial coverage properly done.'),
        ('Decide', 'What is the rule, what does it cover, and how is it enforced?')],
 analysis=[('Find it. What was the rate in week seven?', 'twenty-nine per cent, on a hundred and forty questions'),
           ('Compare it. What does Thomas predict enforcement produces?', 'pasted clause numbers without anybody opening the file'),
           ('Infer it. Why did it fail in the busiest week?', 'because it cost ninety seconds a question and nothing made it unavoidable'),
           ('Weigh it. What is Marta proposing to trade?', 'coverage for reliability, by applying the rule only where being wrong is expensive'),
           ('Decide. Which questions would you cover, and why those?', 'the ones whose answers go to a client or affect money, because those are the ones where an invented answer is costly')],
 decision='Write the rule as it will appear in the handbook.',
 decision_steps=['Say in the first sentence which questions are covered.',
                 'Say what must come back with a covered answer.',
                 'Say what happens to a covered answer with no source.',
                 'Say what is deliberately not covered, so nobody has to guess.'],
 bank=['This rule applies to any question that…', 'A covered answer must include…',
       'A covered answer without … is…', 'This rule does not apply to…',
       'Where no source exists, the answer is…'],
 outcome='Dalia adopted Marta’s version and narrowed the rule to answers going to a client '
         'or affecting a payment, which turned out to be about fourteen per cent of '
         'questions. Compliance in that group ran between 94 and 100 per cent for the next '
         'five months, including two busy weeks. Thomas’s prediction about pasted clause '
         'numbers was tested by a spot check in month four: two cases in sixty, both from '
         'the same person, both on a Friday.',
 outcome_q=[('Why did narrowing the rule raise compliance?', 'because the cost fell to a level people could absorb even in a busy week'),
            ('Was Thomas’s prediction wrong?', 'not entirely; the spot check found two cases, which suggests the risk is real but small at this scale')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Answer the client’s contract questions',
 task=['Nora Lindqvist has sent eleven questions about her contract before a board meeting '
       'on Thursday. Fatima has an hour and writes the brief in the four minutes before a '
       'call with somebody else.',
       'Three of the eleven questions are about things the contract does not address at all. '
       'Fatima does not know this yet, and nothing in her brief makes it possible to find out.'],
 draft=['Nora has sent some questions about her contract.',
        'Please answer them all properly before Thursday.',
        'Be as helpful as you can with each one.',
        'Give her a good amount of detail.',
        'If something is unclear, make a sensible interpretation.',
        'Let me have it back in good time.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Line 5 is the one that does the damage, and it was written to be helpful.',
 asked=['An answer with its clause quoted',
        '"Not addressed" where the contract is silent',
        'Delivery before Thursday morning'],
 back=['11 confident answers, no quotations',
       '3 interpretations presented as terms',
       'Delivered Thursday afternoon'],
 gap='Answer them properly set no standard for what an answer contains, and make a sensible '
     'interpretation instructed exactly the behaviour that turns silence into a contract term.',
 back_cap='Eleven answers, three of which describe clauses that do not exist.',
 back_note='The three inferred answers were the most detailed and the most useful-sounding. '
           'Nora took two of them into a board meeting.',
 diagnosis=[('[1] "some questions" — how many, and which?', 'unbounded quantity'),
            ('[2] "answer them all properly" — what makes an answer proper?', 'unstated criterion'),
            ('[3] "as helpful as you can" — helpful measured how?', 'unstated criterion'),
            ('[4] "a good amount of detail" — how much detail?', 'unbounded quantity'),
            ('[5] "make a sensible interpretation" — finished when?', 'undefined done'),
            ('[6] "in good time" — by what hour on what day?', 'undefined done')],
 rewrite='Rewrite the brief so that an unsupported answer is impossible and "the contract '
         'does not say" is an acceptable result.',
 scaffold=['Why Nora needs these answers and what she will do with them',
           'Which contract, which questions, and which are out of scope',
           'The signed PDF with its date, and nothing else',
           'What every answer must contain, and what must never be inferred',
           'How many answers come back, in what form, by what hour',
           'What to return when the contract is silent on a question'],
 bank=['Nora needs … for … on …', 'Answer the … questions listed in … about contract … dated …',
       'Work only from the signed PDF dated …',
       'Every answer must quote … and give …', 'Return … by … on …',
       'Where no clause covers a question, return … and name …'],
 check=['Is the evidence requirement a must rather than a should?',
        'Is "not addressed" explicitly permitted, in writing?',
        'Does the brief forbid inferring an answer from a nearby clause?',
        'Does Done carry an hour as well as a day?'],
 model=['Give Nora answers she can take into a board meeting without anybody checking them again',
        'The 11 questions in her message of 2 April about the signed contract dated 14 January; questions 4 and 9 are about the previous contract and are out of scope',
        'The signed PDF dated 14 January, and nothing else',
        'Every answer must quote the clause it rests on and give the clause number and page; where no clause covers a question, answer "not addressed" and name the nearest clause; never infer a term from a nearby clause',
        '9 answers, each with 1 quotation and 1 location, by 17:00 on Wednesday',
        'Where the contract is silent, return "not addressed" and say which clause was closest; do not supply an interpretation'],
 cost='3 invented contract terms taken into a client board meeting, 1 of them quoted in the '
      'minutes, 2 days to withdraw them and about 5 hours of Marta’s time writing the '
      'correction.'),

rev_fig=figs.split('REQUIRED AND ADVISED',
                   'Must / have to — no choice',
                   ['Every reply must quote its source.',
                    'You have to log every exception.',
                    'It must be signed before it is sent.',
                    'You must not waive this alone.'],
                   'Should / could — your call',
                   ['You should check the date too.',
                    'You could copy in Kenji.',
                    'It would be sensible to ask Marta.',
                    'You might add the reference.']),
rev_fig_cap='On a Friday at five, only the left column is still a rule.',
rev=dict(
 read=[('The central problem of this unit is that', ['answers are usually wrong', 'wrong answers look like right ones', 'answers are too short', 'answers are slow'], 1),
       ('"Must" differs from "should" because', ['it is more formal', 'it leaves no choice', 'it is shorter', 'it is older'], 1),
       ('The recommended fix is to ask for', ['shorter answers', 'evidence rather than conclusions', 'two answers', 'no answers'], 1),
       ('In the Clinic, what raised compliance?', ['enforcement', 'narrowing the rule', 'training', 'more staff'], 1)],
 listen_text='Three things. Ask for the evidence, not the conclusion, because a quotation '
             'can be checked in four seconds and an assertion cannot be checked at all. Make '
             'not addressed an acceptable answer in writing, or every question will produce '
             'an answer whether one exists or not. And use must, not should, for anything '
             'that leaves the building.',
 listen=[('Ask for the ____________, not the conclusion.', 'evidence'),
         ('A quotation can be checked in four ____________.', 'seconds'),
         ('Make not addressed an acceptable answer in ____________.', 'writing'),
         ('Use must, not should, for anything that leaves the ____________.', 'building')],
 speak=['State a rule from your workplace using should. Your partner says what happens on a busy Friday.',
        'Rewrite it with must, and decide together whether you actually mean it.'],
 write='Write a Criteria line requiring evidence, and a Fallback permitting "not addressed".',
 vocab=[('A rule with no choice about it is ____________.', 'mandatory'),
        ('A claim not supported by evidence is ____________.', 'unfounded'),
        ('To decide not to insist on a rule this once is to ____________ it.', 'waive'),
        ('An agreement with force that cannot be ignored is ____________.', 'binding'),
        ('Something that sounds reasonable, true or not, is ____________.', 'plausible')],
 gram=[('Every reply ____________ quote its source.', 'must'),
       ('You ____________ log the exception before you close it.', 'have to'),
       ('You ____________ check the date as well, if there is time.', 'should'),
       ('We ____________ to agree a tolerance before April.', 'need'),
       ('Nothing ____________ be sent without a signature.', 'must')]),

found=['Take one rule in your workplace and decide honestly whether it is must or should.',
       'Rewrite one question you ask often so that the answer arrives with its evidence.',
       'Give somebody explicit permission, in writing, to answer "I do not know".',
       'Check one confident answer you received this month by opening the source.'],
end_line='A two per cent error rate you cannot see is worse than a ten per cent rate you can.',
end_next='Next: If This, Then That',
)
