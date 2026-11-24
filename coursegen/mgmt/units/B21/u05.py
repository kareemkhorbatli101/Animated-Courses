# -*- coding: utf-8 -*-
import figs

U = dict(
num=5, title='Adding Without Changing',
gram='non-defining relative clauses',
ai='making it show its source',
strap='CEFR B2 · Grammar: non-defining relative clauses · AI: making it show its source',
cando=['use a non-defining relative clause to add information without narrowing a set',
       'punctuate defining and non-defining clauses correctly, and explain the difference',
       'require an output to carry the source of every claim it makes',
       'tell a locator that can be checked from one that cannot',
       'say what a citation establishes and what it leaves entirely open'],
hero=('A PARAGRAPH WITH ELEVEN SENTENCES AND NINE LOCATORS',
      ['Two of the sentences carry no reference at all,',
       'which is the only thing about the page worth looking at.'],
      [(880, 'purple', 'long'), (1640, 'teal', 'short'), (2380, 'grey', 'long')]),
hero_cap='The sentences without a source are the ones that need reading twice.',

warm=['How would somebody check a claim you made in an email last week?',
      'What is the difference between "the clients who pay late" and "the clients, who pay late"?',
      'What makes a reference useful: the fact that it exists, or something else?'],
read=[
 'The requirement Arclight settled on, after the contract answers that quoted a clause which '
 'did not exist, is that every factual claim leaving the company must carry a locator: a '
 'document, a version and a position within it, so that anybody holding the document can '
 'arrive at the claim in under half a minute without knowing anything about how the answer '
 'was produced.',
 'Victor, who arrived six months after that rule was introduced, spent a week examining what '
 'it had actually achieved and found two things worth reporting. The first was that the rule '
 'worked: of ninety sampled claims carrying locators, eighty-six could be reached in under '
 'thirty seconds and the remaining four were in documents that had moved rather than claims '
 'that were wrong.',
 'The second finding was the interesting one. In the same ninety-claim sample, eleven '
 'sentences carried no locator at all, and nobody had noticed them, because a page in which '
 'most sentences carry references reads as a sourced page. The eye stops registering the '
 'references after the fourth or fifth, and a sentence without one becomes invisible rather '
 'than conspicuous.',
 'Those eleven unsourced sentences, which were scattered through documents that were '
 'otherwise meticulous, turned out to include three of the four claims that had caused '
 'problems that quarter. This is not a coincidence: a claim with no document behind it is '
 'exactly the kind of claim that was produced by something other than reading a document.',
 'What changed as a result was small and unglamorous. Unsourced sentences are now marked '
 'rather than merely absent from the reference list, with the words "no source" set in '
 'square brackets at the end of the sentence, so that a reader skimming a page sees a '
 'positive statement of absence rather than having to notice a gap.'],
c_a=[('What must every factual claim leaving Arclight carry?', 'a locator: a document, a version and a position within it'),
     ('How many of the ninety sampled claims could be reached quickly?', 'eighty-six in under thirty seconds'),
     ('What was the second finding?', 'that eleven sentences carried no locator and nobody had noticed'),
     ('Why do unsourced sentences become invisible?', 'because the eye stops registering references and a gap does not stand out'),
     ('What changed as a result?', 'unsourced sentences are now marked "no source" in square brackets')],
c_b=[('The locator rule was introduced before Victor arrived.', 'T'),
     ('Four claims could not be reached because they were wrong.', 'F'),
     ('The eleven unsourced sentences had been noticed earlier.', 'F'),
     ('Three of the quarter’s four problem claims were unsourced.', 'T'),
     ('A page where most sentences carry references reads as sourced.', 'T'),
     ('The fix was to add more references.', 'F')],
c_c=[('Every factual claim must carry a ____________.', 'locator'),
     ('Eighty-six could be reached in under thirty ____________.', 'seconds'),
     ('A sentence without one becomes ____________ rather than conspicuous.', 'invisible'),
     ('Documents that were otherwise ____________.', 'meticulous'),
     ('The words "no source" set in ____________ brackets.', 'square'),
     ('A reader sees a positive statement of ____________.', 'absence')],
c_d=[('The eleven unsourced sentences were ( noticed / invisible ).', ['noticed', 'invisible'], 1),
     ('The four unreachable claims failed because', ['they were invented', 'the documents had moved', 'the versions were wrong', 'nobody looked'], 1),
     ('Unsourced sentences correlate with problems because', ['they are longer', 'they were produced without reading a document', 'they are at the end', 'they are shorter'], 1),
     ('The remedy was to', ['add references everywhere', 'mark absence explicitly', 'shorten the pages', 'stop citing'], 1),
     ('A locator consists of', ['a document only', 'a document, a version and a position', 'a date', 'a name'], 1)],
c_e=('Defining or non-defining? Put each sentence in the right column.',
     [('Victor, who arrived in March, examined the rule.', 'Non-defining'),
      ('The claims that carry locators can be checked.', 'Defining'),
      ('The eleven sentences, which were scattered, caused problems.', 'Non-defining'),
      ('Documents which have moved are relocated.', 'Defining'),
      ('Arclight, which employs eleven people, adopted the rule.', 'Non-defining'),
      ('The clients who complained were reviewed.', 'Defining')],
     ['Defining', 'Non-defining']),

v_fig_title='SHOWING WHERE IT CAME FROM',
v_fig=[('doc', 'a citation'), ('note', 'a footnote'), ('scale', 'traceability'),
       ('bank', 'an appendix'), ('bulb', 'an anchor'), ('chart', 'a locator')],
v_fig_cap='Six words for the apparatus that makes a claim checkable in half a minute.',
vocab=[
 ('citation', 'a formal naming of the source a statement rests on'),
 ('footnote', 'a note at the foot of a page, usually giving a source'),
 ('annotation', 'a note added to a text to explain or record something'),
 ('appendix', 'material placed at the end of a document to support it'),
 ('exhibit', 'a document attached as evidence for something claimed'),
 ('index', 'an ordered list showing where things may be found'),
 ('locator', 'the information needed to find a particular passage'),
 ('traceability', 'the property of being followable back to an origin'),
 ('evidential', 'serving as evidence, or relating to evidence'),
 ('underpin', 'to support something from below, so that it holds up'),
 ('bibliography', 'a list of the sources used in preparing a document'),
 ('cross-check', 'to confirm something by examining a second source'),
 ('anchor', 'a fixed point that something else is tied to'),
 ('pointer', 'a short indication of where something else may be found'),
 ('quotation', 'a passage repeated exactly, with its source identified'),
 ('supporting document', 'a document kept to substantiate a statement'),
 ('corroboration', 'confirmation from an independent second source'),
 ('page reference', 'the page on which a cited passage appears'),
 ('audit evidence', 'material kept so that a decision can be examined later'),
 ('chain of custody', 'the record of who has held something, and when')],
v_a=[('The information needed to find a passage is a ____________.', 'locator'),
     ('Confirmation from an independent second source is ____________.', 'corroboration'),
     ('The property of being followable back to an origin is ____________.', 'traceability'),
     ('Material kept so that a decision can be examined later is ____________.', 'audit evidence'),
     ('A document attached as evidence is an ____________.', 'exhibit'),
     ('The record of who has held something is the ____________.', 'chain of custody'),
     ('To support something so that it holds up is to ____________ it.', 'underpin'),
     ('A list of the sources used in a document is a ____________.', 'bibliography')],
v_b=[('A citation is a formal naming of the source', 'a statement rests on.'),
     ('An annotation is a note added to a text', 'to explain or record something.'),
     ('To cross-check is to confirm something', 'by examining a second source.'),
     ('An anchor is a fixed point', 'that something else is tied to.'),
     ('A supporting document is kept', 'to substantiate a statement.')],

g_title='Grammar: non-defining relative clauses',
g_rule=['A non-defining clause adds information about something already identified.',
        'It takes commas, and the commas are not optional: Victor, who arrived in March, ...',
        'Use who or which, never that, in a non-defining clause.',
        'Removing a non-defining clause leaves a complete and unchanged statement.'],
g_fig=('LOOSE',
       ['The clients, who pay late, get a letter.',
        'The rows, which disagreed, were checked.',
        'The files, which have moved, are missing.',
        'The staff, who are trained, may sign.'],
       'PRECISE',
       ['The clients who pay late get a letter.',
        'The rows which disagreed were checked.',
        'The files that have moved are missing.',
        'Only staff who are trained may sign.'],
       'the comma says all of them',
       'no comma says only some of them'),
g_fig_cap='The left-hand column is the same four sentences, applied to everybody.',
g_a=[('Victor, ____________ arrived in March, examined the rule. (who)', 'who'),
     ('The eleven sentences, ____________ were scattered, caused problems. (which)', 'which'),
     ('The claims ____________ carry locators can be checked. (that)', 'that'),
     ('Arclight, ____________ employs eleven people, adopted it. (which)', 'which'),
     ('Documents ____________ have moved are relocated. (which)', 'which'),
     ('Fatima, ____________ releases the queue, confirms four facts. (who)', 'who'),
     ('The clients ____________ complained were all reviewed. (who)', 'who'),
     ('The March export, ____________ was four days old, was used anyway. (which)', 'which'),
     ('Only staff ____________ have the training may sign. (who)', 'who')],
g_b=[('The clients ( who / , who ) pay late get a letter — only the late ones.', ['who', ', who'], 0),
     ('Victor, ____ arrived in March, examined the rule.', ['that', 'who', 'which', 'whom of'], 1),
     ('The eleven sentences, ____ were scattered, caused problems.', ['that', 'who', 'which', 'what'], 2),
     ('Only staff ____ have the training may sign.', ['which', 'who', ', who', 'whose'], 1),
     ('Arclight, ____ employs eleven people, adopted it.', ['that', 'who', 'which', 'what'], 2),
     ('The claims ____ carry locators can be checked.', ['that', ', which', ', that', 'who'], 0)],

d1=dict(title='The sentences nobody saw',
        fig=(['Eleven sentences with no source.', 'In documents that look meticulous.'],
             ['Why did nobody notice?', 'Because the page as a whole looked sourced.']),
        cap='Victor and Marta, going through the sample.',
        lines=[('Victor', 'Eleven of the ninety sentences carry no locator, and they are in documents '
                          'that are otherwise extremely careful about references.'),
               ('Marta', 'Which means somebody read those documents and did not notice the gaps?'),
               ('Victor', 'Several people read them, and I do not think any of them was careless.'),
               ('Marta', 'Then explain to me how eleven absences survive four readers.'),
               ('Victor', 'Because by the fifth reference on a page, you have stopped reading the '
                          'references and started reading the text as a sourced document.'),
               ('Marta', 'So the presence of references makes their absence harder to see.'),
               ('Victor', 'That is exactly what the sample suggests, and it is not an obvious result.'),
               ('Marta', 'It is the opposite of what anybody designing the rule would have predicted.'),
               ('Victor', 'Three of the four claims that caused us trouble this quarter are in those eleven.'),
               ('Marta', 'Which is also not a coincidence, if you think about where such a sentence comes from.'),
               ('Victor', 'A sentence with no document behind it was not produced by reading a document.'),
               ('Marta', 'Then mark the absence. Do not rely on anybody noticing a gap in a page of references.')],
        a=[('How many sentences carried no locator?', 'eleven of ninety'),
           ('Why did readers not notice?', 'because after several references the page reads as a sourced document'),
           ('How many of the quarter’s problem claims were among them?', 'three of four'),
           ('Why is that not a coincidence?', 'because a claim with no document behind it was not produced by reading one'),
           ('What does Marta propose?', 'marking the absence rather than relying on anybody noticing a gap')],
        b=[('Eleven of the ninety sentences carry no ____________.', 'locator'),
           ('You have stopped reading the ____________.', 'references'),
           ('Three of the four claims that caused us ____________.', 'trouble'),
           ('Do not rely on anybody noticing a ____________.', 'gap')]),
d2=dict(title='A locator you can use',
        fig=(['It cites the service policy.', 'Which version, and which page?'],
             ['It does not say.', 'Then it is not a locator.']),
        cap='Fatima and Victor, over a client answer.',
        lines=[('Fatima', 'This answer cites the service policy, so by the rule it is properly sourced.'),
               ('Victor', 'Which version of the service policy, and whereabouts in it?'),
               ('Fatima', 'It does not say. It says "as set out in the service policy".'),
               ('Victor', 'There are four versions in the archive and the current one runs to nine pages.'),
               ('Fatima', 'So checking it means reading nine pages, which nobody is going to do.'),
               ('Victor', 'Which makes it a reference rather than a locator, and the difference is the whole point.'),
               ('Fatima', 'I would have said that citing the policy was better than citing nothing.'),
               ('Victor', 'It is better in one sense and worse in another, because it looks checked.'),
               ('Fatima', 'It passes the rule, and it buys nothing.'),
               ('Victor', 'It passes the rule as written, which means the rule is written badly.'),
               ('Fatima', 'Then say version and page, and say it in the rule rather than in a conversation.'),
               ('Victor', 'Version, page and the first six words of the passage, which costs about four seconds.')],
        a=[('What does the answer cite?', 'the service policy, without naming a version or a page'),
           ('Why is that insufficient?', 'there are four versions and the current one runs to nine pages'),
           ('What distinction does Victor draw?', 'between a reference and a locator'),
           ('Why is a vague citation worse in one sense?', 'because it looks checked'),
           ('What does Victor want the rule to require?', 'version, page and the first six words of the passage')],
        b=[('There are four versions in the ____________.', 'archive'),
           ('A reference rather than a ____________.', 'locator'),
           ('It passes the rule, and it buys ____________.', 'nothing'),
           ('The first six ____________ of the passage.', 'words')]),

speak=[('Comma or no comma?',
        ['Student A: say four sentences about your workplace using relative clauses.',
         'Student B: say whether each defines a subset or adds information about all of them.',
         'Find the one where putting commas in would change a rule.']),
       ('Spoken specification: require a locator',
        ['Choose a question somebody at your work answers from a document.',
         'Brief it aloud, specifying exactly what the answer must name to be checkable.',
         'Your partner tries to satisfy your brief with a vague citation. Tighten it.']),
       ('Half a minute',
        ['In pairs, take three claims from your own documents.',
         'Time how long it takes the other person to verify each from the locator given.',
         'Anything over half a minute needs a better locator, not a better claim.'])],

ext_title='A reference is not a locator',
ext_fig=figs.datatable('NINETY SAMPLED CLAIMS',
                       ['', 'Count', 'Reached in 30 sec', 'Caused trouble'],
                       [['full locator', '61', '59', '0'],
                        ['document named only', '18', '3', '1'],
                        ['no source at all', '11', '0', '3'],
                        ['total', '90', '62', '4'],
                        ['of the 4, unsourced', '—', '—', '3 of 4']]),
ext_fig_cap='The middle row looks sourced and behaves almost exactly like the bottom row.',
ext=[
 'Requiring output to show its source is the single most effective change a small company '
 'can make to the reliability of what it sends out, and it is effective for a reason that '
 'is worth stating precisely: it converts an assertion, which can only be accepted or '
 'rejected, into a claim with an address, which can be examined by anybody in well under a '
 'minute.',
 'The requirement only works, however, if what is produced is a locator rather than a '
 'gesture towards one. "As set out in the service policy" names a document that exists in '
 'four versions and runs to nine pages, which means that checking it costs several minutes '
 'rather than thirty seconds, and a check that costs several minutes is a check that will '
 'not be performed. The citation then functions as reassurance rather than as evidence.',
 'A usable locator has three parts, and the third is the one most often omitted. It names '
 'the document, which almost everybody does. It names the version or the date, which about '
 'half of people do. And it names a position within the document, whether a clause number, '
 'a page or simply the first few words of the passage, which hardly anybody does unless the '
 'rule explicitly requires it.',
 'The second lesson, which Arclight learned by sampling rather than by reasoning, concerns '
 'what happens to sentences that carry no source at all. On a page where most sentences are '
 'referenced, an unreferenced sentence does not stand out; it disappears. Readers register '
 'the general property of being sourced and stop auditing individual sentences for it, which '
 'is a sensible economy in most circumstances and a dangerous one here.',
 'The remedy is to make absence positive. A sentence that cannot be sourced should say so, '
 'in the text, in words a skimming reader will see. This feels like an admission of weakness '
 'and it is the opposite: a document that marks its own unsupported claims is telling a '
 'reader exactly where to spend their attention, which is the most useful thing any document '
 'can do.'],
dp1=('Checking cost and behaviour',
     'Research on verification behaviour generally finds that the probability of a reader '
     'checking a cited claim falls sharply as the effort required rises beyond a few seconds.',
     'Source: general information-behaviour research, 2026. Thresholds vary by setting.'),
e_a=[('What does requiring a source convert an assertion into?', 'a claim with an address, which anybody can examine quickly'),
     ('Why is "as set out in the service policy" insufficient?', 'because the document has four versions and nine pages, so checking costs minutes'),
     ('What are the three parts of a usable locator?', 'the document, the version or date, and a position within it'),
     ('Why does an unsourced sentence disappear on a referenced page?', 'because readers register the general property and stop auditing individual sentences'),
     ('What is the remedy?', 'making absence positive, by marking unsourced sentences in the text')],
e_b=[('A citation that costs several minutes to check will usually be checked.', 'F'),
     ('Most people name a position within the document.', 'F'),
     ('An unreferenced sentence stands out on a referenced page.', 'F'),
     ('Readers stopping to audit every sentence is usually a sensible economy.', 'T'),
     ('Marking unsupported claims tells readers where to spend attention.', 'T'),
     ('A vague citation functions as evidence.', 'F')],

w_model=(
 'Purpose: make every claim Arclight sends checkable by a client in under 30 seconds. '
 'Scope: all client-facing answers about contracts, policies and prior correspondence; '
 'internal notes are excluded. Inputs: the Current folder, in which each document carries a '
 'version and a date. Criteria: every factual claim names the document, its version and a '
 'position within it, being a clause number, a page, or the first 6 words of the passage; '
 'a claim that cannot be sourced is marked "[no source]" at the end of the sentence. Done: '
 '1 answer in which every sentence either carries a locator or is marked. Fallback: if a '
 'document has moved and cannot be located, mark the claim "[source moved]" and name the '
 'document as last known.'),
w_fig=figs.spec_card('THE THREE PARTS OF A LOCATOR',
                     [('Document', 'Named exactly, not by category'),
                      ('Version', 'A version number or a date on its face'),
                      ('Position', 'A clause, a page, or the first 6 words'),
                      ('Absence', 'Marked in the text, not left as a gap'),
                      ('Test', 'A reader reaches the passage in under 30 seconds'),
                      ('Moved', 'Marked as moved, with the last known name')]),
w_fig_cap='The third and fourth lines are the two that nearly every citation rule leaves out.',
w_task='Write a sourcing rule for claims your organisation sends out.',
w_steps=['Say which claims the rule covers, and which are outside it.',
         'Require the document, the version and a position within it.',
         'Set a time test: how long a reader should need to reach the passage.',
         'Say how a sentence that cannot be sourced is marked, in words.',
         'Say what happens when a document has moved or been superseded.'],
w_bank=['Every claim about … must name … , … and …',
        'A reader must be able to reach the passage in …',
        'A claim that cannot be sourced is marked …',
        'If the document has moved, …', 'This rule does not cover …'],
w_check=['Does your rule require a position, not only a document?',
         'Is there a time test that a vague citation would fail?',
         'Is absence marked positively, in the text?',
         'Does the rule say what to do with a superseded document?'],

t_title='Making it show its source',
t_fig=figs.handover('A CLAIM AND ITS ADDRESS',
                    ['Produce the answer', 'Attach document, version, position', 'Mark anything unsourced'],
                    'The client reaches the passage in 25 seconds',
                    'The time test is the only test that matters.'),
t_fig_cap='The whole apparatus exists to make the fourth box take seconds rather than minutes.',
t_body=[
 'Require three things rather than one, because a source named loosely produces the usual '
 'result. Name the document, which everybody does; name the version, which stops an answer '
 'resting on something superseded; and name a position inside it, which is what turns a '
 'reference into something a reader will actually follow. A clause number, a page, or the '
 'first half-dozen words of the passage will all do.',
 'Then set a time test and state it in the rule, because the time is what the rule is '
 'really about. A locator that lets a reader reach the passage in twenty-five seconds will '
 'be used; one that takes four minutes will not, and a citation nobody follows provides the '
 'appearance of evidence without any of its value, which is a worse position than citing '
 'nothing at all.',
 'Finally, require absence to be marked in the text. A page carrying references trains the '
 'eye to stop checking for them, so a sentence without one becomes invisible exactly when '
 'it most needs to be visible. Three words in square brackets cost nothing and convert a '
 'silent gap into a signal that a reader cannot skim past.'],
t_say=[('Require the position: ', 'Name the clause, the page or the first six words.'),
       ('Set the time test: ', 'A reader must reach the passage in under thirty seconds.'),
       ('Mark the absence: ', 'Any claim without a source ends with "[no source]".')],
t_bound=('A locator establishes where a claim came from, not whether the document it came '
         'from is correct, current or relevant. A perfectly formed citation to clause seven '
         'of a policy that was superseded in February points precisely at the wrong place, '
         'and the precision will make it more convincing rather than less.'),
t_a=[('Name the clause, the page or the first six ____________.', 'words'),
     ('A reader must reach the passage in under thirty ____________.', 'seconds'),
     ('Any claim without a source ends with "[no ____________]".', 'source'),
     ('A citation nobody follows provides the ____________ of evidence.', 'appearance'),
     ('A page carrying references trains the ____________ to stop checking.', 'eye'),
     ('Three words in square brackets convert a silent gap into a ____________.', 'signal')],
t_b_rubric='Say what each citation is missing before it becomes a locator.',
t_b=[('As set out in the service policy.', 'the version and a position: which of four versions, and where in nine pages'),
     ('According to the contract.', 'which contract, which date, and the clause number'),
     ('As we agreed previously.', 'the message, its date, and the sentence in which it was agreed'),
     ('Per our standard terms.', 'the version of the terms and the paragraph relied on')],

case=dict(
 title='Decision Clinic · The citation that pointed at the wrong policy',
 brief=[
  'A client answer cited clause seven of the service policy, version 3, page four, and '
  'quoted the first six words of the passage. It satisfied every part of Arclight’s '
  'locator rule, and a reader could reach the passage in about fifteen seconds.',
  'Version 3 was superseded in February. The current version is 4, in which the equivalent '
  'provision reads differently and gives the client thirty days rather than sixty.',
  'The client relied on the answer, missed the thirty-day window and lost a right to object '
  'to a supplier charge worth about 2,100 euros. Nothing about the answer was careless '
  'except that it was anchored to the wrong document.'],
 exhibit=figs.datatable('WHAT THE RULE CHECKED, AND WHAT IT DID NOT',
                        ['Requirement', 'Satisfied?', 'Would it have caught this?'],
                        [['names the document', 'yes', 'no'],
                         ['names the version', 'yes', 'no'],
                         ['names a position', 'yes', 'no'],
                         ['reachable in 30 seconds', 'yes, 15', 'no'],
                         ['version is the current one', 'not required', 'yes']]),
 exhibit_cap='Four requirements satisfied. The fifth row was never a requirement.',
 exhibit_note='Version 3 was in the Current folder when the answer was produced. It was '
              'moved to Archive eleven days later, as part of a tidy-up nobody announced.',
 voices=[('Victor Sandoval', 'operations and quality',
          'The locator rule checks the form of a citation and says nothing about whether the '
          'document is the live one. We added precision and assumed it brought currency with '
          'it. It does not.'),
         ('Marta Olsen', 'risk and liability',
          'Version 3 was in the Current folder on the day. The answer was correct against '
          'the company’s own arrangements, and the arrangements were wrong. That is a '
          'different failure from the one we are about to fix.'),
         ('Fatima Zahra', 'client manager',
          'The client reached the passage in fifteen seconds and read exactly what we told '
          'them to read. Everything we have built worked. The only thing that did not work '
          'was knowing which document was live.')],
 steps=[('Find it', 'Which parts of the locator rule were satisfied?'),
        ('Compare it', 'What does precision buy, and what does it leave open?'),
        ('Infer it', 'Why does Marta call this a different failure?'),
        ('Weigh it', 'Adding a currency check against trusting the Current folder.'),
        ('Decide', 'What is added to the rule, and what is left to the folder?')],
 analysis=[('Find it. How quickly could the passage be reached?', 'about fifteen seconds'),
           ('Compare it. What does a locator establish?', 'where a claim came from, not whether that document is current'),
           ('Infer it. What is Marta’s point?', 'that the folder was wrong, not the citation, so fixing the citation rule misses the cause'),
           ('Weigh it. What would a currency check cost?', 'a comparison of the cited version against the Current folder at the moment of answering'),
           ('Decide. Where does the fix belong?', 'in both: a currency comparison in the answer, and an announcement rule for moving documents')],
 decision='Write the addition to the sourcing rule.',
 decision_steps=['Say what is now compared, and at what moment.',
                 'Say what happens when the cited version is not the current one.',
                 'Say what must happen when a document is moved out of Current.',
                 'Say which of the two changes you consider the more important, and why.'],
 bank=['At the moment of answering, … is compared with …',
       'If the cited version is not … , then …',
       'A document may be moved out of Current only when …',
       'The more important of these is … , because …',
       'This is reviewed if …'],
 outcome='Both changes were made. Answers now state the version cited and the current '
         'version, and where they differ the answer stops and asks. Moving a document out '
         'of Current now requires a line in a log and a message to Fatima. In the following '
         'year the comparison fired four times, three of them on the same policy during a '
         'fortnight when it was being rewritten. Victor regards the log as the more important '
         'of the two changes and says he would have ranked them the other way round before '
         'this happened.',
 outcome_q=[('Why did the comparison fire three times in one fortnight?', 'because the policy was being rewritten, so versions were changing faster than usual'),
            ('Why does Victor now rank the log higher?', 'because it addresses the cause, whereas the comparison catches the symptom at the point of use')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Make the answers show their working',
 task=['This is the brief that introduced sourcing at Arclight, written the week after the '
       'invented contract clause in Book 1. It is the brief that produced eighteen answers '
       'citing a document and nothing else.',
       'It requires a source, which is the important idea. It does not say what a source '
       'consists of, and so it was satisfied by the words "as set out in the service policy" '
       'about a fifth of the time.'],
 draft=['From now on every answer should show where it comes from.',
        'Quote the relevant part and say which document it is in.',
        'Make sure a client could check it if they wanted to.',
        'Use the documents in the usual place.',
        'If you cannot find a source, do your best.',
        'Apply this to the important answers.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A sourcing rule that can be satisfied by naming a nine-page document.',
 asked=['Document, version and position',
        'A time test a reader could apply',
        'Unsourced claims marked in the text'],
 back=['18 answers citing a document only',
       'Checks taking 4 minutes, so not done',
       '11 unsourced sentences, unmarked'],
 gap='"Where it comes from" is satisfied by a document name, "could check it if they wanted '
     'to" sets no time, and "do your best" leaves an unsourced claim looking exactly like a '
     'sourced one.',
 back_cap='A sourcing rule that produced the appearance of evidence about a fifth of the time.',
 back_note='The eighteen answers citing a document only were the ones nobody checked, '
           'because checking them meant reading nine pages. Two of the eighteen were wrong.',
 diagnosis=[('[1] "where it comes from" — named to what level of detail?', 'unscoped set'),
            ('[2] "the relevant part" — relevant by what test?', 'unstated exception'),
            ('[3] "could check it if they wanted to" — in how long?', 'unstated exception'),
            ('[4] "the documents in the usual place" — which place, which versions?', 'unscoped set'),
            ('[5] "do your best" — and the reader sees what, exactly?', 'ambiguous referent'),
            ('[6] "the important answers" — important to whom?', 'ambiguous referent')],
 rewrite='Rewrite the brief so that a citation names three things, a reader can reach the '
         'passage in under half a minute, and an unsourced claim is visibly marked.',
 scaffold=['Why a client must be able to check a claim without asking us',
           'Which answers are covered, and which are outside the rule',
           'The one folder answers may draw on, with versions and dates on each document',
           'The three parts of a locator, the time test, and how absence is marked',
           'What a finished answer looks like, sentence by sentence',
           'What to do when a cited document has moved or been superseded'],
 bank=['Make every claim … so that a client can …',
       'Cover … ; exclude …', 'Draw only on … , in which each document carries …',
       'Every claim names … , … and … ; a reader must reach it in …',
       'Return … in which every sentence either … or …',
       'If the document has moved, …'],
 check=['Does the rule require a position inside the document?',
        'Is there a time test that a vague citation would fail?',
        'Is an unsourced claim marked where a skimming reader will see it?',
        'Does the brief say what happens when a document has moved?'],
 model=['Make every claim Arclight sends checkable by a client in under 30 seconds, without asking us anything',
        'All client-facing answers about contracts, policies and prior correspondence; internal notes and drafts are excluded',
        'The Current folder only, in which every document carries a version number and a date on its face',
        'Every factual claim names the document, its version and a position within it, being a clause number, a page, or the first 6 words of the passage; any claim that cannot be sourced ends with the words "[no source]" in the text',
        '1 answer in which every sentence either carries a 3-part locator or is marked, returned the same day',
        'If a cited document has moved or been superseded, mark the claim "[source moved]", name the document as last known, and do not substitute a different version'],
 cost='18 answers in 6 weeks citing a 9-page document with no position, 2 of them wrong and '
      'neither checked, 11 unsourced sentences nobody saw, and 3 of the quarter’s 4 problem '
      'claims hiding among them.'),

rev_fig=figs.split('COMMAS CHANGE THE SET',
                   'Defining — only some of them',
                   ['The clients who pay late get a letter.',
                    'The rows which disagreed were checked.',
                    'Only staff who are trained may sign.',
                    'The claims that carry locators can be checked.'],
                   'Non-defining — all of them',
                   ['The clients, who pay late, get a letter.',
                    'The rows, which disagreed, were checked.',
                    'The staff, who are trained, may sign.',
                    'The claims, which carry locators, can be checked.']),
rev_fig_cap='Two commas turn a rule about some people into a rule about everybody.',
rev=dict(
 read=[('A usable locator names', ['the document only', 'the document, version and position', 'the author', 'the date only'], 1),
       ('A non-defining relative clause', ['narrows the set', 'adds information about a set already identified', 'takes that', 'needs no commas'], 1),
       ('An unsourced sentence on a referenced page tends to', ['stand out', 'disappear', 'be rewritten', 'be deleted'], 1),
       ('In the Clinic, which change did Victor rank higher afterwards?', ['the comparison', 'the move log', 'the time test', 'the marking'], 1)],
 listen_text='Three parts, a time test and a mark. Name the document, name the version, and '
             'name a position inside it, because a reference without a position costs four '
             'minutes to follow and nobody follows it. Then state the time test in the rule '
             'itself. And mark the sentences that have no source, because on a page full of '
             'references an absence does not stand out, it vanishes.',
 listen=[('Name the document, name the version, and name a ____________.', 'position'),
         ('A reference without a position costs four ____________ to follow.', 'minutes'),
         ('State the time test in the ____________ itself.', 'rule'),
         ('On a page full of references an absence ____________.', 'vanishes')],
 speak=['Give your partner a claim with a citation. They time how long it takes to verify.',
        'Improve the locator until it is under thirty seconds.'],
 write='Write a sourcing rule with three parts, a time test and a marking convention.',
 vocab=[('The information needed to find a passage is a ____________.', 'locator'),
        ('Confirmation from an independent second source is ____________.', 'corroboration'),
        ('The property of being followable back to an origin is ____________.', 'traceability'),
        ('Material kept so a decision can be examined later is ____________.', 'audit evidence'),
        ('A document attached as evidence is an ____________.', 'exhibit')],
 gram=[('Victor, ____________ arrived in March, examined the rule.', 'who'),
       ('The eleven sentences, ____________ were scattered, caused problems.', 'which'),
       ('The claims ____________ carry locators can be checked.', 'that'),
       ('Arclight, ____________ employs eleven people, adopted it.', 'which'),
       ('Only staff ____________ have the training may sign.', 'who')]),

found=['Take a claim you made this week and write a three-part locator for it.',
       'Time a colleague verifying one of your citations.',
       'Find a sentence in your own work that has no source and mark it.',
       'Check whether a document you cite is the current version.'],
end_line='Eleven absences survived four readers, because the page as a whole looked sourced.',
end_next='Next: It Is Said That',
)
