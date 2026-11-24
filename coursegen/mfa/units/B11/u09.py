# -*- coding: utf-8 -*-
import figs

U = dict(
num=9, title='It Never Says It Does Not Know',
gram='modals of obligation: must, shall, should, is to',
ai='why it does not say that it does not know',
strap='CEFR B1 · Grammar: modals of obligation · AI: why it never says it does not know',
cando=['use must, shall, should and is to with the force each one carries',
       'write a rule that says what is required and what is merely advised',
       'recognise a confident answer that has no source behind it',
       'require a source for every fact that will leave the building',
       'say what must be done when a fact cannot be corroborated'],
hero=('A CITATION THAT DID NOT EXIST',
      ['Paragraph three cited an exchange of letters from 2016.',
       'The letters are perfectly described, and there are no such letters.'],
      [(740, 'teal', 'long'), (1400, 'orange', 'short'),
       (2060, 'purple', 'long'), (2700, 'blue', 'short')]),
hero_cap='The reference room, where somebody finally went to look.',

warm=['How do you check a fact that somebody has put in front of you?',
      'What does your office do when a fact cannot be corroborated?',
      'What is the difference between must, should and is to in a rule?'],
read=[
 'In June the Ministry prepared a short background note on the border agreements with '
 'Verenia. Paragraph three cited an exchange of letters between the two foreign ministers in '
 'November 2016, gave the subject, gave both names correctly, and summarised what each letter '
 'had said.',
 'Everything about the paragraph was plausible. The two ministers named had indeed been in '
 'office in November 2016. The two ministries did exchange letters on border questions in '
 'that period. The summary described exactly the sort of thing such letters contain.',
 'There is no such exchange. Samir Haddad went to the reference room to pull the letters, '
 'because he wanted to quote one of them precisely, and found nothing under that date, that '
 'subject or those names. The registry has no record of it, and nor does the published treaty '
 'series.',
 'What had happened is not mysterious once it is stated. The system had been asked what the '
 'two states had agreed about the border, it had material about the period, the ministers and '
 'the subject, and it produced the most likely-looking answer. It had no way of saying that '
 'it did not know, because it was not looking anything up; it was producing text.',
 'The difficulty is that a fabrication of this kind is not sloppy. It is exactly as fluent, '
 'as well formed and as confident as the paragraphs on either side of it, which are correct. '
 'Nothing about the writing distinguishes the invented paragraph from the true ones, and that '
 'is why the rule the Ministry wrote afterwards is about sources rather than about care.'],
c_a=[('What did paragraph three cite?', 'an exchange of letters between the two foreign ministers in November 2016'),
     ('What was plausible about it?', 'the ministers were in office, the ministries did exchange letters on border questions then'),
     ('Why did Samir go to the reference room?', 'because he wanted to quote one of the letters precisely'),
     ('What did he find?', 'nothing under that date, subject or those names'),
     ('Why could the system not say it did not know?', 'because it was not looking anything up; it was producing text'),
     ('What distinguishes the invented paragraph from the true ones?', 'nothing about the writing')],
c_b=[('The ministers named were not in office in 2016.', 'F'),
     ('The two ministries did exchange letters on border questions in that period.', 'T'),
     ('The registry has a record of the exchange.', 'F'),
     ('The invented paragraph reads less fluently than the others.', 'F'),
     ('Samir found the letters eventually.', 'F'),
     ('The rule written afterwards is about care.', 'F')],
c_c=[('Gave both names ____________.', 'correctly'),
     ('The summary described exactly the sort of thing such letters ____________.', 'contain'),
     ('He wanted to quote one of them ____________.', 'precisely'),
     ('It was not looking anything up; it was producing ____________.', 'text'),
     ('A fabrication of this kind is not ____________.', 'sloppy'),
     ('The rule is about ____________ rather than about care.', 'sources')],
c_d=[('The invented paragraph reads ( worse than / exactly like ) the true ones.', ['worse than', 'exactly like'], 1),
     ('What was wrong with the two names?', ['nothing', 'they were invented', 'they were misspelled', 'they were wrong dates'], 0),
     ('Why did the fabrication appear?', ['carelessness', 'it produced the most likely-looking answer', 'bad data', 'a typing error'], 1),
     ('Who found the error?', ['the registry', 'Samir Haddad', 'the system', 'the Minister'], 1),
     ('The rule the Ministry wrote is about', ['care', 'sources', 'speed', 'length'], 1)],
c_e=('How strong? Put each sentence in the right column.',
     [('Every fact must carry a source.', 'required, no exception'),
      ('The note is to be cleared by Legal.', 'required, by arrangement'),
      ('Officers should check the registry first.', 'advised'),
      ('No fact shall go forward unsourced.', 'required, formal'),
      ('Drafters should ask if they are unsure.', 'advised'),
      ('Quotations must be checked against the original.', 'required, no exception')],
     ['required, no exception', 'required, by arrangement', 'advised', 'required, formal']),

v_fig_title='TRUE, FALSE, AND NEITHER',
v_fig=[('bulb', 'a fabrication'), ('book', 'a reference work'), ('scale', 'corroboration'),
       ('key', 'a source'), ('shield', 'a safeguard'), ('doc', 'a correction')],
v_fig_cap='Six words for the distance between a sentence and the thing it claims.',
vocab=[
 ('a fabrication', 'something invented and presented as fact'),
 ('plausible', 'looking true, whether or not it is'),
 ('unfounded', 'resting on nothing that can be pointed to'),
 ('corroboration', 'support for a claim from a second, independent place'),
 ('to corroborate', 'to confirm a claim from another source'),
 ('a source', 'the document or person a fact comes from'),
 ('unsourced', 'given without saying where it came from'),
 ('to attest', 'to state formally that something is true'),
 ('reliable', 'able to be depended on to be accurate'),
 ('unreliable', 'not able to be depended on'),
 ('an error of fact', 'a statement that is simply untrue'),
 ('a correction', 'a formal statement putting an error right'),
 ('to retract', 'to withdraw something said or written'),
 ('a disclaimer', 'a statement limiting what may be relied on'),
 ('a limitation', 'a stated boundary on what something covers'),
 ('certainty', 'the state of having no doubt'),
 ('doubt', 'the state of not being sure'),
 ('to question', 'to ask whether something is so'),
 ('a reference work', 'a book or database kept in order to be consulted'),
 ('a safeguard', 'an arrangement whose only purpose is to prevent a harm')],
v_a=[('Something invented and presented as fact is a ____________.', 'fabrication'),
     ('Support for a claim from a second, independent place is ____________.', 'corroboration'),
     ('Given without saying where it came from is ____________.', 'unsourced'),
     ('A formal statement putting an error right is a ____________.', 'correction'),
     ('To withdraw something said or written is to ____________ it.', 'retract'),
     ('A statement limiting what may be relied on is a ____________.', 'disclaimer'),
     ('A book or database kept in order to be consulted is a ____________.', 'reference work'),
     ('Resting on nothing that can be pointed to is ____________.', 'unfounded')],
v_b=[('Plausible means looking true,', 'whether or not it is.'),
     ('To attest is to state formally', 'that something is true.'),
     ('An error of fact is a statement', 'that is simply untrue.'),
     ('A safeguard is an arrangement whose only purpose', 'is to prevent a harm.'),
     ('A limitation is a stated boundary', 'on what something covers.')],

g_title='Grammar: modals of obligation',
g_rule=['Must states a requirement with no exception: every fact must carry a source.',
        'Shall states a formal requirement in rules and texts: no fact shall go forward unsourced.',
        'Is to states a requirement arising from an arrangement: the note is to be cleared by Legal.',
        'Should advises: officers should check the registry first. It does not require.'],
g_fig=('LOOSE',
       ['Every fact should carry a source, without exception.',
        'The note must be cleared by Legal, as agreed yesterday.',
        'Officers must ask if they feel unsure.',
        'No fact will go forward unsourced.'],
       'PRECISE',
       ['Every fact must carry a source.',
        'The note is to be cleared by Legal.',
        'Officers should ask if they are unsure.',
        'No fact shall go forward unsourced.'],
       'four rules whose force does not match their words',
       'four in which the modal says what is meant'),
g_fig_cap='A rule written with should is a rule that has already agreed not to be enforced.',
g_a=[('Every fact ____________ carry a source. (requirement, no exception)', 'must'),
     ('No fact ____________ go forward unsourced. (formal rule)', 'shall'),
     ('The note ____________ be cleared by Legal. (by arrangement)', 'is to'),
     ('Officers ____________ check the registry first. (advice)', 'should'),
     ('Quotations ____________ be checked against the original. (requirement)', 'must'),
     ('Drafters ____________ consult the desk officer where a date is in doubt. (advice)', 'should'),
     ('The delegation ____________ arrive on Tuesday. (arrangement)', 'is to'),
     ('Nothing ____________ be sent before clearance. (formal rule)', 'shall'),
     ('Officers ____________ not quote a document they have not seen. (requirement)', 'must')],
g_b=[('A rule written with should is ( advisory / enforceable ).', ['advisory', 'enforceable'], 0),
     ('Every fact ____ carry a source.', ['should', 'must', 'may', 'could'], 1),
     ('No fact ____ go forward unsourced.', ['will', 'shall', 'would', 'can'], 1),
     ('The note ____ cleared by Legal, as agreed.', ['must be', 'is to be', 'should be', 'can be'], 1),
     ('Officers ____ check the registry first.', ['must', 'should', 'shall', 'are to'], 1),
     ('Which modal carries the least force?', ['must', 'should', 'shall', 'is to'], 1)],

d1=dict(title='There are no such letters',
        fig=(['I went to pull the letters.', 'And?'],
             ['There are no letters.', 'The paragraph is perfect.']),
        cap='Samir Haddad and Dr Mourad, in the reference room.',
        lines=[('Samir', 'Paragraph three cites an exchange of letters in November 2016. I came to '
                         'quote one. There is no such exchange.'),
               ('Dr Mourad', 'You are certain?'),
               ('Samir', 'Nothing under the date, nothing under the subject, nothing under either '
                         'name. Not in the registry and not in the treaty series.'),
               ('Dr Mourad', 'And the two ministers named?'),
               ('Samir', 'Both in office at the time. Both dealt with border questions. That is '
                         'what makes it dangerous.'),
               ('Dr Mourad', 'Because everything around the invention is true.'),
               ('Samir', 'Everything around it is true, and the paragraph reads exactly like the '
                         'two beside it, which are correct.'),
               ('Dr Mourad', 'Why did it do that?'),
               ('Samir', 'It was asked what the two states had agreed. It had the period, the '
                         'names and the subject, and it wrote the most likely-looking answer. It '
                         'was never looking anything up.'),
               ('Dr Mourad', 'So it cannot say that it does not know.'),
               ('Samir', 'It has nothing to say that with. Not knowing is not a state it can be '
                         'in, because it is producing text rather than retrieving it.'),
               ('Dr Mourad', 'Then care is not the answer. Nobody can read their way past that.')],
        a=[('What did Samir go to do?', 'quote one of the letters precisely'),
           ('What did he search?', 'the registry and the treaty series, under date, subject and both names'),
           ('What makes the fabrication dangerous?', 'that everything around it is true'),
           ('Why did the system produce it?', 'it had period, names and subject and wrote the most likely-looking answer'),
           ('Why is care not the answer?', 'because nothing in the writing distinguishes the invention from the truth')],
        b=[('Nothing under the date, nothing under the ____________.', 'subject'),
           ('Everything around the invention is ____________.', 'true'),
           ('It was never looking anything ____________.', 'up'),
           ('Not knowing is not a ____________ it can be in.', 'state')]),
d2=dict(title='A rule about sources',
        fig=(['So what is the rule?', 'Every fact names where it came from.'],
             ['That is slow.', 'It is twenty minutes a brief.']),
        cap='Dr Mourad and Lina.',
        lines=[('Dr Mourad', 'Write me the rule. Not a warning, a rule.'),
               ('Lina', 'Every fact in a brief must carry a source that a reader can go and look '
                        'at.'),
               ('Dr Mourad', 'Good. Now the hard half. What happens to a fact with no source?'),
               ('Lina', 'It comes out.'),
               ('Dr Mourad', 'Even if it is probably true?'),
               ('Lina', 'Even then, or the rule means nothing. But it should go somewhere, not '
                        'just vanish.'),
               ('Dr Mourad', 'Where?'),
               ('Lina', 'A line at the foot: the following were not corroborated and have been '
                        'removed. Then the next person knows what to look for.'),
               ('Dr Mourad', 'That is better than my version. What does it cost?'),
               ('Lina', 'About twenty minutes on a four-page brief, mostly spent in the reference '
                        'room.'),
               ('Dr Mourad', 'Twenty minutes against a Minister quoting a document that does not '
                             'exist. Write it as must, not as should.'),
               ('Lina', 'I had written should.')],
        a=[('What is the rule Lina proposes?', 'every fact must carry a source a reader can look at'),
           ('What happens to a fact with no source?', 'it comes out'),
           ('Where does it go instead?', 'a line at the foot listing what was not corroborated and removed'),
           ('What does the rule cost?', 'about twenty minutes on a four-page brief'),
           ('Which modal does Dr Mourad require?', 'must, not should')],
        b=[('Not a warning, a ____________.', 'rule'),
           ('Even then, or the rule means ____________.', 'nothing'),
           ('Then the next person knows what to ____________ for.', 'look'),
           ('Mostly spent in the ____________ room.', 'reference')]),

speak=[('Say it correctly',
        ['Student A: state six rules from your office using must, shall, is to and should.',
         'Student B: say which are requirements and which are advice.',
         'Find the rule that is written as advice and meant as a requirement.']),
       ('Spoken tasking',
        ['Choose a fact you used in a document this month.',
         'Say aloud where it came from and how a reader could check it.',
         'Your partner asks what you would do if the source could not be found.']),
       ('Plausible and untrue',
        ['In pairs, describe a claim that sounded true and was not.',
         'Say what made it sound true.',
         'Find the check that would have caught it.'])],

ext_title='A system cannot say that it does not know, so the safeguard must be a source and not a warning',
ext_fig=figs.source_check('SIX CLAIMS IN THE BACKGROUND NOTE',
                          [('The 2004 border protocol was ratified in March', 'treaty series, checked', 'verified'),
                           ('Both ministries exchanged letters in 2016', 'one press report', 'single'),
                           ('The November 2016 exchange said X and Y', 'nothing on file', 'none'),
                           ('The commission met four times in 2018', 'registry, checked', 'verified'),
                           ('The crossing closes in winter', 'post reporting, checked', 'verified')],
                          'One claim in five had nothing behind it, and it was the longest paragraph.'),
ext_fig_cap='The unsourced row is the one that was quoted, because it was the most useful.',
ext=[
 'These systems produce text rather than retrieve it. That sentence is the whole of the '
 'matter and it is worth reading twice. When a question is asked, the answer is composed from '
 'what such an answer usually looks like, not assembled from documents that have been found '
 'and opened.',
 'The consequence is that there is no state corresponding to not knowing. A person asked for '
 'a citation they do not have will hesitate, qualify, or say they will check. A system has '
 'nothing to hesitate with. If it has the period, the names and the subject, it will produce '
 'a well-formed citation, and that citation may describe a document that has never existed.',
 'Such a fabrication is not careless and does not read as careless. It arrives in the same '
 'register, at the same length, with the same confident structure as the paragraphs around '
 'it, which are correct. Readers are not failing to notice something noticeable; there is '
 'nothing in the prose to notice.',
 'This is why instructions to be careful do not work and why every ministry that has thought '
 'about the problem has ended up in the same place. The safeguard cannot be attention, '
 'because attention has nothing to catch. It has to be a rule about sources: every fact that '
 'will leave the building names where it came from, in a form a reader can go and look at.',
 'The rule needs its second half to be a rule at all. A fact that cannot be corroborated is '
 'removed, even when it is probably true, and is listed at the foot of the brief as removed '
 'and not corroborated. That list is useful in itself, because it tells the next officer '
 'exactly which questions are still open.'],
dp1=('Fabrication and verification',
     'Policy analysis of these systems in diplomatic use warns that generated fabrications '
     'make fact-checking harder rather than easier, because the invented material is as '
     'fluent as the accurate material around it.',
     'Source: policy analysis of AI in diplomatic practice, 2025–2026.'),
e_a=[('What do these systems do instead of retrieving?', 'they produce text'),
     ('Why is there no state of not knowing?', 'because the answer is composed, not assembled from documents found'),
     ('What does a fabrication read like?', 'exactly like the correct paragraphs around it'),
     ('Why does "be careful" not work?', 'because attention has nothing to catch'),
     ('What are the two halves of the rule?', 'every fact names a checkable source; an uncorroborated fact is removed and listed')],
e_b=[('These systems look documents up before answering.', 'F'),
     ('A person without a citation will usually hesitate.', 'T'),
     ('A fabrication is written less fluently.', 'F'),
     ('Attention is a sufficient safeguard.', 'F'),
     ('A removed fact should be listed.', 'T'),
     ('An uncorroborated fact may stay if it is probably true.', 'F')],

w_model=(
 'Purpose: produce a background note on the border agreements with Verenia in which every '
 'fact can be checked by the reader. Scope: agreements and exchanges from 2004 to the present '
 'day; the current dispute over crossings is out of scope. Inputs: the treaty series, the '
 'registry index, and the 9 post reports held on the border. Criteria: every fact must carry '
 'a source giving the document, its date and where it is held; no fact shall appear that '
 'cannot be found in one of the 3 named inputs; quotations must be checked against the '
 'original and not reproduced from a summary. Done: 1 note of no more than 4 pages, with a '
 'line at the foot listing every fact removed for want of a source. Fallback: where a fact '
 'cannot be corroborated, remove it and list it; do not include it with a qualification.'),
w_fig=figs.spec_card('THE TASKING FOR A SOURCED NOTE',
                     [('Purpose', 'a background note in which every fact can be checked'),
                      ('Scope', '2004 to the present; the current dispute excluded'),
                      ('Inputs', 'treaty series, registry index, 9 post reports'),
                      ('Criteria', 'document, date and location for every fact; quotations checked'),
                      ('Done', '4 pages or fewer, with a list of facts removed'),
                      ('Fallback', 'uncorroborated: remove and list, do not qualify')]),
w_fig_cap='The fallback line forbids the compromise everybody reaches for, which is to hedge and keep.',
w_task='Write a tasking for a sourced note in your own work.',
w_steps=['Say what the note is for and what period it covers.',
         'Name the sources that may be used, as a closed list.',
         'Require a document, a date and a location for every fact.',
         'Require quotations to be checked against originals.',
         'Say what happens to a fact that cannot be corroborated.'],
w_bank=['Produce … in which every fact …',
        'Cover … ; … is out of scope.',
        'Work from … , … and …',
        'Every fact must carry … ; no fact shall appear that … ; quotations must …',
        'Where a fact cannot be corroborated, … ; do not …'],
w_check=['Is the list of permitted sources closed?',
         'Must a source give document, date and location?',
         'Are quotations required to be checked against originals?',
         'Is hedging an uncorroborated fact expressly forbidden?'],

t_title='Why it does not say that it does not know',
t_fig=figs.split('A PERSON AND A SYSTEM, ASKED FOR A CITATION',
                 'A person who does not have it',
                 ['hesitates',
                  'says they will check',
                  'gives the date but not the reference',
                  'asks whether it matters'],
                 'A system that does not have it',
                 ['produces a full citation',
                  'in the correct form',
                  'with plausible names and dates',
                  'in the same register as the truth']),
t_fig_cap='The right-hand column has no hesitation in it, because hesitation is not a thing it can do.',
t_body=[
 'Start from the mechanism rather than from the warning. These systems compose text rather '
 'than look things up, so an answer is built from what such an answer usually looks like. '
 'There is no internal state that corresponds to not knowing, and therefore no behaviour '
 'that corresponds to admitting it.',
 'Accept what follows for your own checking. A fabricated citation arrives in the same '
 'register, at the same length and with the same confidence as the true paragraphs beside '
 'it, and the names and dates in it will often be real. You are not failing to notice a '
 'warning sign; there is no warning sign in the prose at all.',
 'So make the safeguard structural. Every fact that will leave the building names a document, '
 'a date and a place where a reader can find it, and a fact that cannot be corroborated is '
 'removed and listed at the foot as removed. Write that rule with must rather than should, '
 'because a rule written as advice is a rule that has already agreed not to be kept.'],
t_say=[('Name the mechanism: ', 'It produces text; it does not look things up.'),
       ('Require the source: ', 'Document, date, and where a reader can find it.'),
       ('Remove and list: ', 'Not corroborated, so removed, and listed at the foot.')],
t_bound=('A sourcing rule catches facts that do not exist. It does not catch a true document '
         'quoted out of context, a correct citation of a document that was itself wrong, or '
         'an argument built soundly on checked facts and still mistaken. It makes the facts '
         'checkable and leaves the judgement where it was.'),
t_a=[('It produces text; it does not ____________ things up.', 'look'),
     ('Document, date, and where a reader can ____________ it.', 'find'),
     ('Not corroborated, so removed, and ____________ at the foot.', 'listed'),
     ('There is no ____________ sign in the prose at all.', 'warning'),
     ('Write that rule with ____________ rather than should.', 'must'),
     ('A rule written as advice has already agreed not to be ____________.', 'kept')],
t_b_rubric='Rewrite each instruction so that it is a rule rather than advice.',
t_b=[('Officers should be careful with citations.', 'every fact must carry a document, a date and a location'),
     ('Try to check anything doubtful.', 'no fact shall appear that cannot be found in the three named sources'),
     ('Quote accurately where possible.', 'quotations must be checked against the original, not a summary'),
     ('Flag anything you could not verify.', 'an uncorroborated fact is removed and listed at the foot')],

case=dict(
 title='The Decision Room · Twenty minutes a brief',
 brief=[
  'The sourcing rule has been in force for four months. Every fact in a brief carries a '
  'document, a date and a location, and uncorroborated facts are removed and listed at the '
  'foot.',
  'It has caught three further fabrications, all of them citations. It has also removed '
  'eleven facts that were probably true but held only in somebody’s memory, four of which '
  'were later corroborated and restored.',
  'Dr Mourad proposed the rule and now reports that briefs have become longer, slower and in '
  'one respect worse: the footer lists have grown, and two Directors have told her they read '
  'the footer first and the brief second.'],
 exhibit=figs.datatable('FOUR MONTHS OF THE RULE',
                        ['', 'Count', 'Note'],
                        [['briefs produced', '96', '—'],
                         ['fabrications caught', '3', 'all citations'],
                         ['facts removed as unsourced', '11', '—'],
                         ['later corroborated and restored', '4', 'took weeks'],
                         ['added time per brief', '~20 min', '—'],
                         ['Directors reading the footer first', '2', 'unintended']]),
 exhibit_cap='Three fabrications caught in ninety-six briefs, at twenty minutes each.',
 exhibit_note='Whether the three would have been caught without the rule is unknown; one was '
              'found by the rule itself and two by officers who said they were looking harder.',
 voices=[('Dr Hana Mourad', 'Policy Planning',
          'Thirty-two hours of officer time for three fabrications. I wrote this rule and I '
          'am the person who has to say that the arithmetic is not obviously in its favour.'),
         ('Samir Haddad', 'Legal and Treaties',
          'One of the three was in a note going to a Minister who was about to meet the '
          'Verenian Foreign Minister. You cannot divide that by thirty-two hours. It is not '
          'that kind of quantity.'),
         ('Karim Dalati', 'Information Security and Records',
          'The footer is the finding nobody intended. Two Directors now read the list of what '
          'we could not source before they read what we could. That is a better habit than '
          'anything in the rule.')],
 steps=[('Find it', 'What has the rule caught and cost?'),
        ('Compare it', 'What happened to the eleven removed facts?'),
        ('Infer it', 'Why does Samir refuse the division?'),
        ('Weigh it', 'Thirty-two hours against three fabrications, one of them ministerial.'),
        ('Decide', 'Does the rule stand, change, or go?')],
 analysis=[('Find it. How many fabrications in how many briefs?', 'three in ninety-six'),
           ('Compare it. What happened to the eleven?', 'four were later corroborated and restored'),
           ('Infer it. Why is the arithmetic the wrong frame?', 'because one fabrication was going to a Minister about to meet his counterpart'),
           ('Weigh it. What is the unintended benefit?', 'two Directors read the footer list first'),
           ('Decide. What would you do?', 'answers vary; the rule’s value cannot be divided by its cost in the usual way')],
 decision='Write what the Ministry does about the sourcing rule.',
 decision_steps=['Say whether the rule stands and in what form.',
                 'Say what happens to the footer list.',
                 'Say what is done about facts that are probably true.',
                 'Say what evidence would cause the rule to be dropped.'],
 bank=['The rule …',
       'The footer list is …',
       'A fact that is probably true but unsourced …',
       'The rule would be dropped if …',
       'This is reviewed after …'],
 outcome='The rule stands unchanged and the footer list was formalised as a section headed '
         'OPEN QUESTIONS, which the Institute now teaches as the first thing to read in any '
         'brief. In the following six months the section carried an average of four entries '
         'and two of them each quarter were later corroborated and moved into the text. Dr '
         'Mourad, who had questioned the arithmetic, says she still cannot show the rule pays '
         'for itself and has stopped trying, because the quantity on the other side is a '
         'Minister saying something untrue to a foreign minister.',
 outcome_q=[('What became of the footer list?', 'a section headed OPEN QUESTIONS, taught as the first thing to read'),
            ('Why has Dr Mourad stopped trying to justify the rule arithmetically?', 'because the cost on the other side is a Minister saying something untrue')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Give me the background on the border',
 task=['This is the tasking that produced the background note with the invented exchange of '
       'letters in it, given verbally and typed up by the drafter afterwards.',
       'Nothing in it is unreasonable, and nothing in it would have stopped the fabrication.'],
 draft=['Give me the background on the border agreements with Verenia.',
        'Go back far enough to make sense of where we are.',
        'Cover the main instruments and exchanges.',
        'Reference things properly.',
        'Flag anything you are not sure about.',
        'Four pages or so, for Thursday.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fifth one asks for something a drafter cannot give.',
 asked=['Every fact with document, date and location',
        'A closed list of permitted sources',
        'Uncorroborated facts removed and listed'],
 back=['A clear 4-page note',
       '1 invented exchange of letters',
       'Nothing flagged as uncertain'],
 gap='"Far enough" fixes no date, "the main instruments" names no set, "reference things '
     'properly" sets no form for a reference, and "flag anything you are not sure about" asks '
     'for a judgement the drafter is not in a position to make, because an invented citation '
     'does not feel uncertain.',
 back_cap='A clean and useful note with one paragraph in it about a document that does not exist.',
 back_note='"Flag anything you are not sure about" is the line everybody writes and it cannot '
           'work: uncertainty is not a property the drafter can observe.',
 diagnosis=[('[1] "the background" — for what decision, at what length?', 'undefined done'),
            ('[2] "far enough back" — from which year?', 'unscoped set'),
            ('[3] "the main instruments and exchanges" — which, from what list?', 'unscoped set'),
            ('[4] "reference things properly" — in what form, giving what?', 'unstated criterion'),
            ('[5] "flag anything you are not sure about" — judged how?', 'unstated criterion'),
            ('[6] "four pages or so" — and what is dropped to fit?', 'undefined done')],
 rewrite='Rewrite the tasking so that sourcing is a requirement and uncorroborated facts are '
         'removed rather than flagged.',
 scaffold=['What the note is for and what it must allow a reader to do',
           'Which period is covered and what is out of scope',
           'The closed list of sources that may be used',
           'What every fact must carry, and how quotations are handled',
           'How long the note is and what list comes at the foot',
           'What to do with a fact that cannot be corroborated'],
 bank=['Produce … in which every fact can be …',
       'Cover … ; … is out of scope.',
       'Work from … , … and the … reports held on …',
       'Every fact must carry … ; no fact shall appear that cannot be found in … ; quotations must be checked against …',
       'Return 1 note of no more than … , with a line at the foot listing …',
       'Where a fact cannot be corroborated, … ; do not include it with …'],
 check=['Must every fact carry a document, a date and a location?',
        'Is the list of permitted sources closed?',
        'Is flagging replaced by removing and listing?',
        'Is qualifying an unsourced fact forbidden?'],
 model=['Produce a background note on the border agreements with Verenia in which every fact can be checked by the reader',
        'Agreements and exchanges from 2004 to the present day; the current dispute over crossings is out of scope',
        'The treaty series, the registry index, and the 9 post reports held on the border',
        'Every fact must carry a source giving the document, its date and where it is held; no fact shall appear that cannot be found in one of the 3 named inputs; quotations must be checked against the original and not reproduced from a summary',
        '1 note of no more than 4 pages, with a line at the foot listing every fact removed for want of a source',
        'Where a fact cannot be corroborated, remove it and list it; do not include it with a qualification'],
 cost='1 invented exchange of letters in a note to a Director, found only because a lawyer '
      'went to quote it, and 4 months of a sourcing rule written afterwards.'),

rev_fig=figs.split('MODALS OF OBLIGATION',
                   'Weaker than intended',
                   ['Every fact should carry a source.',
                    'Officers must ask if they feel unsure.',
                    'No fact will go forward unsourced.',
                    'The note must be cleared, as agreed.'],
                   'As intended',
                   ['Every fact must carry a source.',
                    'Officers should ask if they are unsure.',
                    'No fact shall go forward unsourced.',
                    'The note is to be cleared by Legal.']),
rev_fig_cap='Four rules, and in each the modal is doing the work.',
rev=dict(
 read=[('These systems', ['retrieve documents', 'produce text', 'index files', 'search registries'], 1),
       ('A fabrication reads', ['carelessly', 'like the true paragraphs', 'incoherently', 'briefly'], 1),
       ('The safeguard must be', ['attention', 'a rule about sources', 'a warning', 'more time'], 1),
       ('In the Decision Room, what did the footer list become?', ['nothing', 'a section headed OPEN QUESTIONS', 'an appendix', 'a separate file'], 1)],
 listen_text='Start from the mechanism rather than from the warning. These systems compose '
             'text rather than look things up, so there is no internal state that corresponds '
             'to not knowing. Accept what follows for your own checking, and make the '
             'safeguard structural: every fact names a document, a date and a place where a '
             'reader can find it.',
 listen=[('They compose text rather than ____________ things up.', 'look'),
         ('No internal state that corresponds to not ____________.', 'knowing'),
         ('Make the safeguard ____________.', 'structural'),
         ('A document, a date and a ____________ where a reader can find it.', 'place')],
 speak=['Say where one fact in your last document came from.',
        'Say what you would do if you could not corroborate it.'],
 write='Write one rule using must and one using should, and say why each is right.',
 vocab=[('Something invented and presented as fact is a ____________.', 'fabrication'),
        ('Support from a second independent place is ____________.', 'corroboration'),
        ('Given without saying where it came from is ____________.', 'unsourced'),
        ('To withdraw something said or written is to ____________ it.', 'retract'),
        ('A statement limiting what may be relied on is a ____________.', 'disclaimer')],
 gram=[('Every fact ____________ carry a source. (requirement)', 'must'),
       ('No fact ____________ go forward unsourced. (formal rule)', 'shall'),
       ('The note ____________ be cleared by Legal. (arrangement)', 'is to'),
       ('Officers ____________ check the registry first. (advice)', 'should'),
       ('Quotations ____________ be checked against the original.', 'must')]),

found=['Take one fact from your last document and find its source.',
       'Write your office’s sourcing rule with must rather than should.',
       'Decide what happens to a fact that cannot be corroborated.',
       'Read the open questions at the foot of a brief before the brief.'],
end_line='Not knowing is not a state it can be in.',
end_next='Next: Not Yet, and Why',
)
