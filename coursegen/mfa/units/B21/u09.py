# -*- coding: utf-8 -*-
import figs

U = dict(
num=9, title='Footnotes a Director Can Check',
gram='contrast and concession: whereas, while, although',
ai='sourcing: footnotes a Director can check',
strap='CEFR B2 · Grammar: contrast and concession · AI: footnotes a Director can check',
cando=['use whereas, while and although with the right clause order',
       'concede a point in one clause and hold a position in the next',
       'write a reference that a reader can act on in under a minute',
       'say what makes a footnote checkable rather than decorative',
       'write a sourcing standard for a brief'],
hero=('FORTY-ONE FOOTNOTES, NINE MINUTES EACH',
      ['Every assertion in the brief carried a reference.',
       'Checking one took nine minutes, so the Director checked none.'],
      [(730, 'teal', 'long'), (1390, 'orange', 'short'),
       (2050, 'purple', 'long'), (2690, 'blue', 'short')]),
hero_cap='The Director’s outer office, on a brief that had done everything asked of it.',

warm=['When did you last follow a reference in a document you were given?',
      'What stopped you, if you did not?',
      'What would a reference have to contain for you to check it in a minute?'],
read=[
 'By the autumn the sourcing rule was working. Every assertion in a Policy Planning brief '
 'carried a reference, and a sample check found that the references were accurate: the '
 'documents existed and said what the brief said they said.',
 'The Director nevertheless told Dr Hana Mourad that she had not checked a reference in three '
 'months. Asked why, she said that the last one she had tried had taken nine minutes: the '
 'footnote gave a document title and a year, the registry held four documents with similar '
 'titles, and the passage was somewhere in a forty-page annex.',
 'The reference had satisfied the rule and failed its purpose. A reference exists so that a '
 'reader can act on it quickly, and a reader who cannot act on it quickly will stop acting on '
 'references at all, which returns the Ministry to where it was before the rule.',
 'Hana rewrote the standard around a test rather than a form. A reference is adequate if a '
 'reader who has never seen the document can open the exact passage within one minute. In '
 'practice that means a file number rather than a title, a paragraph or page reference rather '
 'than a document reference, and the date of the version used.',
 'The new standard made the briefs longer by about a tenth and the footnotes about twice as '
 'long. While that was unwelcome, the Director now checks two or three references in every '
 'brief, which she says has changed what she reads for. Although nothing in the briefs has '
 'been found wrong since, she says the useful effect is on the drafters, who write differently '
 'when they expect a particular sentence to be opened.'],
c_a=[('What was working by the autumn?', 'the sourcing rule: every assertion carried an accurate reference'),
     ('What had the Director not done in three months?', 'checked a reference'),
     ('Why not?', 'the last attempt took nine minutes because the footnote gave only a title and a year'),
     ('What is a reference for?', 'so that a reader can act on it quickly'),
     ('What is the new test?', 'that a reader who has never seen the document can open the exact passage within a minute'),
     ('What does Hana say the useful effect is?', 'on the drafters, who write differently when they expect a sentence to be opened')],
c_b=[('The references were inaccurate.', 'F'),
     ('The registry held four documents with similar titles.', 'T'),
     ('The new standard made footnotes shorter.', 'F'),
     ('The Director now checks two or three references per brief.', 'T'),
     ('Something has been found wrong since the change.', 'F'),
     ('A file number is preferred to a title.', 'T')],
c_c=[('The documents existed and said what the brief said they ____________.', 'said'),
     ('The passage was somewhere in a forty-page ____________.', 'annex'),
     ('The reference had satisfied the rule and failed its ____________.', 'purpose'),
     ('A reference is adequate if a reader can open the exact ____________ within one minute.', 'passage'),
     ('The briefs are longer by about a ____________.', 'tenth'),
     ('Drafters write differently when they expect a sentence to be ____________.', 'opened')],
c_d=[('The old reference failed because it was ( inaccurate / unusable ).', ['inaccurate', 'unusable'], 1),
     ('How long did the Director’s last check take?', ['one minute', 'nine minutes', 'an hour', 'three months'], 1),
     ('What does the new standard require instead of a title?', ['an author', 'a file number', 'a year', 'a summary'], 1),
     ('By how much did the briefs lengthen?', ['a half', 'about a tenth', 'twice', 'not at all'], 1),
     ('What has changed most, in Hana’s view?', ['the accuracy', 'how drafters write', 'the length', 'the registry'], 1)],
c_e=('Contrast or concession? Put each in the right column.',
     [('Whereas the first brief cited titles, the second cites file numbers.', 'contrast'),
      ('Although the briefs are longer, they are now checked.', 'concession'),
      ('While the rule was followed, it did not work.', 'concession'),
      ('The 2019 series is indexed, whereas the 2017 series is not.', 'contrast'),
      ('Although nothing was found wrong, the effect was real.', 'concession'),
      ('References were accurate, whereas they were not usable.', 'contrast')],
     ['contrast', 'concession']),

v_fig_title='THE PARTS OF A REFERENCE',
v_fig=[('doc', 'a file number'), ('pin', 'a paragraph reference'), ('book', 'a series number'),
       ('clock', 'a date of access'), ('key', 'a document identifier'), ('shield', 'a classification marking')],
v_fig_cap='Six parts, of which the first two decide whether anybody will follow it.',
vocab=[
 ('a footnote', 'a reference printed at the foot of the page it belongs to'),
 ('an endnote', 'a reference collected at the end of a document'),
 ('a source line', 'the line beneath a figure or table naming where it came from'),
 ('a full reference', 'a reference giving everything needed to find the document'),
 ('a short reference', 'an abbreviated reference used after a full one'),
 ('a bibliography', 'the list of works a document has drawn on'),
 ('a date of access', 'the date on which a source was consulted'),
 ('a stable link', 'a reference to a document that will not move'),
 ('a document identifier', 'the code that names one document and no other'),
 ('an internal reference', 'a reference to another part of the same document'),
 ('a page number', 'the page on which a passage is found'),
 ('a paragraph reference', 'the numbered paragraph in which a passage is found'),
 ('an annex reference', 'the identification of an attached document and its part'),
 ('a source note', 'a short statement of where material came from and its limits'),
 ('an attribution line', 'the line naming who said or wrote something'),
 ('a classification marking', 'the words stating how far a document may be circulated'),
 ('a holdings reference', 'the code by which a collection identifies what it holds'),
 ('a series number', 'the number of a document within a published sequence'),
 ('a file number', 'the registry code identifying the file a document sits in'),
 ('a registry entry', 'the record showing that a document was received and filed')],
v_a=[('The registry code identifying the file a document sits in is a ____________.', 'file number'),
     ('The code that names one document and no other is a ____________.', 'document identifier'),
     ('The numbered paragraph in which a passage is found is a ____________.', 'paragraph reference'),
     ('The words stating how far a document may be circulated are a ____________.', 'classification marking'),
     ('A short statement of where material came from and its limits is a ____________.', 'source note'),
     ('The record showing that a document was received and filed is a ____________.', 'registry entry'),
     ('A reference to a document that will not move is a ____________.', 'stable link'),
     ('The line beneath a figure naming where it came from is a ____________.', 'source line')],
v_b=[('A footnote is a reference printed at the foot', 'of the page it belongs to.'),
     ('A full reference is a reference giving everything', 'needed to find the document.'),
     ('A date of access is the date', 'on which a source was consulted.'),
     ('An internal reference is a reference to another part', 'of the same document.'),
     ('A series number is the number of a document', 'within a published sequence.')],

g_title='Grammar: contrast and concession',
g_rule=['Whereas sets two facts against each other and needs both clauses stated.',
        'Although and though concede a point, then the main clause holds the position.',
        'While does both: while the rule was followed, it did not work.',
        'Do not use but in the same sentence as although; one marker is enough.'],
g_fig=('LOOSE',
       ['Although the briefs are longer, but they are checked.',
        'The references were accurate, whereas.',
        'While the rule worked. It did not help.',
        'Despite the briefs are longer, they are checked.'],
       'PRECISE',
       ['Although the briefs are longer, they are now checked.',
        'The 2019 series is indexed, whereas the 2017 series is not.',
        'While the rule was followed, it did not achieve its purpose.',
        'Despite the extra length, the briefs are now checked.'],
       'a doubled marker, a half sentence, a fragment and a wrong preposition',
       'four sentences, each with one marker correctly placed'),
g_fig_cap='Despite and in spite of take a noun; although and while take a clause.',
g_a=[('____________ the briefs are longer, they are now checked.', 'Although'),
     ('The 2019 series is indexed, ____________ the 2017 series is not.', 'whereas'),
     ('____________ the rule was followed, it did not achieve its purpose.', 'While'),
     ('____________ the extra length, the briefs are now checked.', 'Despite'),
     ('The references were accurate, ____________ they were not usable.', 'whereas'),
     ('____________ nothing has been found wrong, the effect is real.', 'Although'),
     ('____________ of the cost, the standard was adopted.', 'In spite'),
     ('A title identifies a class, ____________ a file number identifies a document.', 'whereas'),
     ('____________ she had the rule, she had stopped checking.', 'Although')],
g_b=[('Although takes ( a clause / a noun ).', ['a clause', 'a noun'], 0),
     ('____ the briefs are longer, they are checked.', ['Despite', 'Although', 'In spite', 'Whereas of'], 1),
     ('____ the extra length, the briefs are checked.', ['Although', 'Despite', 'While', 'Whereas'], 1),
     ('Which sets two facts against each other?', ['although', 'whereas', 'despite', 'though'], 1),
     ('Which is wrong?', ['Although it is longer, it is checked.', 'Although it is longer, but it is checked.', 'While it was followed, it failed.', 'Despite the length, it is checked.'], 1),
     ('A title identifies a class, ____ a file number identifies a document.', ['although', 'whereas', 'despite', 'while of'], 1)],

d1=dict(title='Nine minutes',
        fig=(['Every assertion has a reference.', 'And I have checked none in three months.'],
             ['They are accurate.', 'They are also unusable.']),
        cap='The Director and Dr Hana Mourad.',
        lines=[('Director', 'Your briefs are properly sourced and I have not followed a '
                            'reference in three months.'),
               ('Hana', 'The references are accurate. We sample them.'),
               ('Director', 'I am sure they are. The last one I tried took nine minutes. The '
                            'footnote gave a title and a year, the registry has four documents '
                            'with that sort of title, and when I found the right one the passage '
                            'was somewhere in a forty-page annex.'),
               ('Hana', 'Which satisfied the rule as written.'),
               ('Director', 'Entirely. Whereas what I need is to open the sentence, read it, and '
                            'put the brief down again, in a minute.'),
               ('Hana', 'If I require file numbers and paragraph references the footnotes double '
                        'in length.'),
               ('Director', 'Double them. A long footnote I use is worth more than a short one I '
                            'do not.'),
               ('Hana', 'There is a second effect I would want before I agreed to the first.'),
               ('Director', 'Go on.'),
               ('Hana', 'A drafter who expects a particular sentence to be opened writes that '
                        'sentence differently. At the moment nobody expects any sentence to be '
                        'opened, including the drafter.'),
               ('Director', 'Then the standard is not about my time. It is about what your '
                            'officers believe when they write.'),
               ('Hana', 'It is about both, and I would rather argue for it on the second ground '
                        'because that one does not depend on how busy you are in any given '
                        'week.')],
        a=[('How long did the Director’s last check take?', 'nine minutes'),
           ('What did the footnote give?', 'a title and a year'),
           ('What does the Director need to be able to do?', 'open the sentence, read it and put the brief down, in a minute'),
           ('What is the cost?', 'the footnotes double in length'),
           ('What is the second effect Hana names?', 'that drafters write differently when they expect a sentence to be opened')],
        b=[('Four documents with that sort of ____________.', 'title'),
           ('A long footnote I use is worth more than a short one I do ____________.', 'not'),
           ('Nobody expects any sentence to be ____________.', 'opened'),
           ('What your officers ____________ when they write.', 'believe')]),
d2=dict(title='A title is not a reference',
        fig=(['Title and year.', 'Four documents match.'],
             ['It is what the house style says.', 'Then the house style is the problem.']),
        cap='Hana and Omar Nasri, rewriting the standard.',
        lines=[('Omar', 'The house style has required title and year since 1998.'),
               ('Hana', 'And in 1998 the registry held a tenth of what it holds and a desk '
                        'officer knew the titles.'),
               ('Omar', 'The style was written for a reader who already knew the collection. We '
                        'now have a reader who has never seen the document and a collection of '
                        'four hundred thousand.'),
               ('Hana', 'So the test replaces the form. A reference is adequate if somebody who '
                        'has never seen the document can open the exact passage in a minute.'),
               ('Omar', 'That is a test somebody has to apply, which means a drafter has to try '
                        'it.'),
               ('Hana', 'Once per brief, on one reference chosen by the drafter.'),
               ('Omar', 'Chosen by the drafter is the weak point. They will choose the easy one.'),
               ('Hana', 'Then chosen by the checker, at random, and the result recorded on the '
                        'face of the brief: reference 14 opened in 40 seconds.'),
               ('Omar', 'Although that is a small thing, it is the part that will change '
                        'behaviour, because it is visible.'),
               ('Hana', 'And it costs forty seconds, which is the only reason it will survive '
                        'the first busy week.'),
               ('Omar', 'I will draft the new paragraph. One sentence of test, one sentence of '
                        'what that usually means in practice, and the line for the checker.')],
        a=[('What has the house style required since 1998?', 'title and year'),
           ('Why was that adequate then?', 'the registry was a tenth of the size and officers knew the titles'),
           ('What is the new test?', 'that somebody who has never seen the document can open the exact passage in a minute'),
           ('Why should the checker choose the reference?', 'because a drafter would choose the easy one'),
           ('What is recorded on the brief?', 'which reference was opened and how long it took')],
        b=[('A reader who has never ____________ the document.', 'seen'),
           ('Chosen by the ____________, at random.', 'checker'),
           ('Reference 14 opened in 40 ____________.', 'seconds'),
           ('It costs forty seconds, which is why it will ____________ a busy week.', 'survive')]),

speak=[('Concede and hold',
        ['Student A: state a weakness in something you do at work.',
         'Student B: concede it with although and hold the position in the main clause.',
         'Do three each, without using but in the same sentence.']),
       ('Open it in a minute',
        ['Take a reference from a document you hold.',
         'Your partner tries to say exactly where the passage is.',
         'Rewrite the reference so that they could.']),
       ('Two series',
        ['Describe two sources in your field that differ.',
         'Set them against each other using whereas.',
         'Say which you would cite and why.'])],

ext_title='A reference is adequate when a reader who has never seen the document can open the passage in a minute',
ext_fig=figs.datatable('THE SAME SOURCE, TWO REFERENCES',
                       ['Element', 'Old form', 'New form'],
                       [['the document', 'Report on transit, 2019', 'file 2019/KAV/114'],
                        ['the part', 'not given', 'paragraph 11'],
                        ['the version', 'not given', 'as cleared, 14 June 2019'],
                        ['where it sits', 'not given', 'Records, bilateral series'],
                        ['length of footnote', '6 words', '14 words'],
                        ['time to open the passage', '9 minutes', '40 seconds']]),
ext_fig_cap='Eight extra words, and the difference between a reference that is followed and '
            'one that is not.',
ext=[
 'Sourcing rules are among the first things an analytical unit adopts once research is being '
 'assisted, and they are usually written as a form: every assertion carries a reference, and '
 'the reference gives a title and a year. The rule is followed, the references are accurate, '
 'and nothing improves, which puzzles the office that wrote it.',
 'The reason is that a reference has a purpose and the form does not serve it. A reference '
 'exists so that a reader can open the passage, read it and put the document down. If opening '
 'it takes nine minutes, because a title matches four documents in the registry and the '
 'passage is somewhere in a forty-page annex, then a busy reader will stop following '
 'references, and a brief whose references are never followed is no better sourced than one '
 'with no references at all.',
 'The standard that works is therefore a test rather than a form: a reference is adequate if '
 'somebody who has never seen the document can open the exact passage within a minute. In '
 'practice that means a registry file number rather than a title, which identifies a document '
 'rather than a class of documents; a paragraph or page reference rather than a reference to '
 'the whole; and the version and date, because a document cleared in June may read differently '
 'from the draft of May.',
 'This costs something and the cost should be stated. Footnotes roughly double in length and a '
 'brief grows by about a tenth. Whereas a form can be complied with cheaply, a test has to be '
 'applied, which means somebody has to try one reference and see whether it works. The '
 'practice that holds is for the checker, not the drafter, to pick a reference at random and '
 'record on the face of the brief which one was opened and how long it took.',
 'The effect worth having is not the Director’s time, although that is what the argument is '
 'usually made about. It is that a drafter who expects a particular sentence to be opened '
 'writes that sentence differently, and where nobody expects any sentence to be opened, the '
 'sourcing rule is decoration which the office has mistaken for a control.'],
dp1=('Sourcing standards',
     'Analytical units in several foreign services replaced form-based citation rules with '
     'usability tests in 2025, requiring that a named reference be opened and timed during '
     'clearance.',
     'Source: reported practice in diplomatic briefing standards, 2025–2026.'),
e_a=[('How are sourcing rules usually written?', 'as a form: every assertion carries a title and a year'),
     ('Why does nothing improve?', 'because the form does not serve the purpose, which is opening the passage quickly'),
     ('What is the standard that works?', 'a test: a stranger can open the exact passage within a minute'),
     ('What does that mean in practice?', 'a file number, a paragraph reference, and the version with its date'),
     ('What is the effect worth having?', 'that drafters write differently when they expect a sentence to be opened')],
e_b=[('Form-based rules are usually broken.', 'F'),
     ('A title may match several documents.', 'T'),
     ('A test can be complied with as cheaply as a form.', 'F'),
     ('The drafter should pick the reference to be tested.', 'F'),
     ('Footnotes roughly double in length.', 'T'),
     ('The main benefit is the Director’s time.', 'F')],

w_model=(
 'Purpose: source the brief so that a reader who has not seen the documents can open any '
 'passage relied on within 1 minute. Scope: every assertion of fact and every figure; the '
 'section’s own assessments carry no reference and are marked as assessments. Inputs: the '
 'closed collection and the registry. Criteria: give the registry file number rather than a '
 'title; give the paragraph or page where the passage sits; give the version and its date; '
 'where a document is held outside the collection, say where it is held and whether the reader '
 'can reach it. Done: 1 sourced brief in which the checker has opened 1 reference chosen at '
 'random and recorded which and how long it took, before clearance. Fallback: where a passage '
 'cannot be located to a paragraph, cite the section and say that the paragraph could not be '
 'fixed.'),
w_fig=figs.spec_card('THE TASKING FOR SOURCING',
                     [('Purpose', 'a stranger can open any passage within 1 minute'),
                      ('Scope', 'facts and figures; assessments marked, not referenced'),
                      ('Inputs', 'the closed collection and the registry'),
                      ('Criteria', 'file number, paragraph, version and date; external holdings named'),
                      ('Done', '1 reference opened at random and timed, before clearance'),
                      ('Fallback', 'paragraph not fixable: cite the section and say so')]),
w_fig_cap='The timed random check is forty seconds and is the only part that changes behaviour.',
w_task='Write a sourcing standard for a document in your own work.',
w_steps=['State the test in terms of a reader and a time.',
         'Say what must carry a reference and what must not.',
         'Require the identifier, the part and the version.',
         'Require one reference to be opened and timed by a checker.',
         'Say what to do where a passage cannot be pinned down.'],
w_bank=['Source … so that a reader who … can … within …',
        'Cover … ; … carry no reference and are marked as …',
        'Work from … and …',
        'Give … rather than … ; give … ; give … ; where … , say …',
        'Where a passage cannot be located to … , cite … and say …'],
w_check=['Is the standard a test with a time in it?',
         'Is a file number required instead of a title?',
         'Is the part of the document required?',
         'Is a timed random check required before clearance?'],

t_title='Sourcing a brief',
t_fig=figs.split('A REFERENCE',
                 'Checkable',
                 ['a registry file number',
                  'the paragraph or page',
                  'the version and its date',
                  'opened in under a minute'],
                 'Decorative',
                 ['a title and a year',
                  'the document as a whole',
                  'no version stated',
                  'nine minutes, so never opened']),
t_fig_cap='Both columns satisfy a rule that says every assertion carries a reference.',
t_body=[
 'A sourcing rule written as a form will be followed and will change nothing. Every assertion '
 'carries a title and a year, the references are accurate, and no reader follows one, because '
 'a title matches four documents in a large registry and the passage is somewhere inside a '
 'long annex. Nine minutes is enough to stop a busy reader for good.',
 'Write the standard as a test instead: a reference is adequate if a reader who has never seen '
 'the document can open the exact passage within a minute. In practice that means a file '
 'number rather than a title, because the number identifies a document and the title '
 'identifies a class; a paragraph or page rather than the whole document; and the version with '
 'its date, since a text cleared in June is not the draft of May.',
 'The cost is real: footnotes about double and a brief grows by a tenth. Whereas a form can be '
 'complied with cheaply, a test has to be applied, so have the checker, never the drafter, '
 'open one reference at random and record on the brief which one and how long it took. '
 'Although the saving in a Director’s time is the usual argument, the effect that matters is '
 'on drafting: a sentence somebody expects to be opened is written more carefully, and where '
 'no sentence is ever opened the whole apparatus is decoration mistaken for a control.'],
t_say=[('State the test: ', 'Openable by a stranger, to the exact passage, in 1 minute.'),
       ('Name the document: ', 'File 2019/KAV/114, paragraph 11, as cleared 14 June 2019.'),
       ('Record the check: ', 'Reference 14 opened by the checker in 40 seconds.')],
t_bound=('A reference can be accurate and useless. Nothing in a title and a year identifies '
         'one document in a large collection or locates a passage inside it, and an accurate '
         'reference nobody follows gives a brief no more protection than none at all. Only a '
         'reference somebody has actually opened is known to work.'),
t_a=[('Openable by a stranger, to the exact passage, in 1 ____________.', 'minute'),
     ('File 2019/KAV/114, paragraph 11, as cleared 14 ____________ 2019.', 'June'),
     ('Reference 14 opened by the checker in 40 ____________.', 'seconds'),
     ('The number identifies a document and the title identifies a ____________.', 'class'),
     ('Footnotes about ____________ and a brief grows by a tenth.', 'double'),
     ('Decoration mistaken for a ____________.', 'control')],
t_b_rubric='Rewrite each sentence with one correct marker of contrast or concession.',
t_b=[('Although the briefs are longer, but they are checked.', 'although the briefs are longer, they are now checked'),
     ('The references were accurate. They were not usable.', 'the references were accurate, whereas they were not usable'),
     ('Despite the briefs are longer, they are checked.', 'despite the extra length, the briefs are now checked'),
     ('While the rule worked. It did not help.', 'while the rule was followed, it did not achieve its purpose')],

case=dict(
 title='The Decision Room · The reference the reader cannot reach',
 brief=[
  'The new standard requires a reference a reader can open in a minute. Nine assertions in the '
  'current brief rest on documents held by posts and not in the central collection.',
  'A reader in the Ministry cannot open any of the nine. The posts can, and the documents are '
  'genuine and were seen by the drafter.',
  'Omar Nasri says the nine must be marked as unreachable. Hana says marking nine of forty-one '
  'assertions as unreachable will read as a weak brief when the material is sound. Karim '
  'Dalati says the real answer is to get the nine into the collection and asks who pays for '
  'that.'],
 exhibit=figs.datatable('THE 41 ASSERTIONS',
                        ['', 'Figure', 'Note'],
                        [['assertions carrying a reference', '41', '—'],
                         ['openable from the central collection', '32', 'in under a minute'],
                         ['held only at posts', '9', 'genuine, seen by the drafter'],
                         ['of those, available on request', '9', '1 to 3 days'],
                         ['of those, previously cited in briefs', '6', 'never challenged'],
                         ['cost of bringing 9 into the collection', '~2 officer-days', 'estimate']]),
 exhibit_cap='Nine of forty-one are sound, genuine and unopenable by the reader.',
 exhibit_note='Bringing a post’s document into the central collection requires the post to '
              'register and transmit it, which takes 1 to 3 days per document.',
 voices=[('Omar Nasri', 'Translation and Documentation',
          'Mark them unreachable. The standard is about the reader, and the reader cannot reach '
          'them. If that makes the brief look weak, the brief is weak in that respect.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Nine marks on forty-one will be read as nine doubts. The material is sound and the '
          'mark will mislead in the other direction, which is also a failure.'),
         ('Karim Dalati', 'Information Security and Records',
          'Two officer-days brings all nine into the collection and the question disappears '
          'for every future brief. Six of the nine have been cited before, so we will pay this '
          'again if we do not.')],
 steps=[('Find it', 'How many assertions cannot be opened by the reader?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Hana think the mark misleads?'),
        ('Weigh it', 'An honest mark against two officer-days.'),
        ('Decide', 'What happens to the nine?')],
 analysis=[('Find it. How many of the forty-one are openable centrally?', 'thirty-two'),
           ('Compare it. What does Karim propose?', 'registering the nine documents into the central collection'),
           ('Infer it. What is Hana’s objection to marking?', 'that nine marks will be read as nine doubts about sound material'),
           ('Weigh it. How many of the nine have been cited before?', 'six'),
           ('Decide. What would you do?', 'answers vary; registering them removes the question for all future briefs')],
 decision='Write what is done about references held only at posts.',
 decision_steps=['Say what happens to the nine documents.',
                 'Say what the brief says about them in the meantime.',
                 'Say what the rule is for future briefs.',
                 'Say who bears the cost and on what authority.'],
 bank=['The 9 documents are …',
       'Until they are … , the brief states …',
       'In future, an assertion resting on … may be used only if …',
       'The cost falls on …',
       'This is reviewed …'],
 outcome='The nine documents were registered into the central collection over three days, and '
         'the brief carried a line for those three days saying that nine references were held '
         'at posts and were being registered. The rule adopted for the future is that an '
         'assertion resting on a document not in the collection may be used once, with the mark, '
         'and the document must be registered before it is cited again. Over the following year '
         'that produced 61 newly registered documents, of which 14 were later cited by other '
         'sections. Omar says he had been arguing about how to describe a gap and Karim was '
         'arguing about how to close it, and that closing it turned out to cost less than the '
         'argument.',
 outcome_q=[('What happened to the nine?', 'they were registered into the central collection over three days'),
            ('What is the future rule?', 'an unregistered document may be cited once, with a mark, and must then be registered')],
 tags=[]),

lab=dict(
 title='Brief Lab · Source every assertion',
 task=['This is the sourcing instruction in the house style, unchanged since 1998 and complied '
       'with in full.',
       'It produced forty-one accurate references, none of which the Director followed.'],
 draft=['Source every assertion in the brief.',
        'Give the document and the year.',
        'Use the house style for footnotes.',
        'Reference the material you relied on.',
        'Keep the footnotes brief.',
        'Senior staff may dispense with this.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, all followed, and the Director has not opened a reference in three '
           'months.',
 asked=['A file number and a paragraph',
        'The version and its date',
        'One reference opened and timed by a checker'],
 back=['41 references giving titles and years',
       '9 minutes to open one of them',
       'No reference opened during clearance'],
 gap='"The document and the year" identifies a class rather than a document, "the material you '
     'relied on" does not say which part, "keep the footnotes brief" works directly against '
     'usability, and the dispensation has no limit.',
 back_cap='A rule obeyed exactly, producing references that nobody can use.',
 back_note='Line two is the failure. A title and a year was sufficient in 1998 for a reader '
           'who knew the collection; it is not sufficient for a stranger and four hundred '
           'thousand documents.',
 diagnosis=[('[1] "every assertion" — including the section’s own assessments?', 'ambiguous referent'),
            ('[2] "the document and the year" — which document, where, and which part?', 'ambiguous referent'),
            ('[3] "use the house style" — complied with means what, tested how?', 'undefined done'),
            ('[4] "keep the footnotes brief" — brief enough to be unusable?', 'unstated exception'),
            ('[5] "senior staff may dispense with this" — how far, recorded where?', 'unstated exception'),
            ('[6] nothing on checking — sourced means nobody has opened one', 'undefined done')],
 rewrite='Rewrite the instruction so that the standard is a test and one reference is opened.',
 scaffold=['The test, in terms of a reader and a time',
           'What carries a reference and what is marked instead',
           'The collection and the registry',
           'File number, paragraph, version and date; external holdings named',
           'One reference opened at random and timed, before clearance',
           'What to do where a passage cannot be located to a paragraph'],
 bank=['Source … so that a reader who … can open … within …',
       'Cover … ; … are marked as … and carry no reference.',
       'Work from … and …',
       'Give … rather than … ; give … ; give … ; where a document is held … , say …',
       'Return 1 sourced brief in which … has opened … and recorded … , before …',
       'Where a passage cannot be located … , cite … and say …'],
 check=['Is the standard a test with a reader and a time?',
        'Is an identifier required rather than a title?',
        'Is the part of the document required?',
        'Is the dispensation bounded and recorded?'],
 model=['Source the brief so that a reader who has not seen the documents can open any passage relied on within 1 minute',
        'Every assertion of fact and every figure; the section’s own assessments carry no reference and are marked as assessments',
        'The closed collection and the registry',
        'Give the registry file number rather than a title; give the paragraph or page where the passage sits; give the version and its date; where a document is held outside the collection, say where it is held and whether the reader can reach it',
        '1 sourced brief in which the checker has opened 1 reference chosen at random and recorded which and how long it took, before clearance',
        'Where a passage cannot be located to a paragraph, cite the section and say that the paragraph could not be fixed'],
 cost='3 months in which a Director read sourced briefs without following a single reference, '
      'and 41 references per brief whose only function was to be present.'),

rev_fig=figs.split('CONTRAST AND CONCESSION',
                   'Wrong',
                   ['Although longer, but checked.',
                    'The references were accurate, whereas.',
                    'While the rule worked. It failed.',
                    'Despite the briefs are longer …'],
                   'Right',
                   ['Although longer, they are now checked.',
                    'Accurate, whereas they were not usable.',
                    'While the rule was followed, it failed.',
                    'Despite the extra length …']),
rev_fig_cap='Although and while take clauses; despite and in spite of take nouns; never double the marker.',
rev=dict(
 read=[('A sourcing rule written as a form', ['is broken', 'is followed and changes nothing', 'is unusable', 'is too long'], 1),
       ('A title identifies', ['one document', 'a class of documents', 'a paragraph', 'a version'], 1),
       ('The effect that matters is on', ['the Director’s time', 'how drafters write', 'footnote length', 'the registry'], 1),
       ('In the Decision Room, what happened to the nine documents?', ['they were marked unreachable', 'they were registered centrally', 'they were dropped', 'they were classified'], 1)],
 listen_text='A reference exists so that a reader can open the passage, read it and put the '
             'document down. If opening it takes nine minutes, a busy reader will stop '
             'following references, and a brief whose references are never followed is no '
             'better sourced than one with no references at all.',
 listen=[('Open the passage, read it and put the document ____________.', 'down'),
         ('If opening it takes nine ____________.', 'minutes'),
         ('A busy reader will stop ____________ references.', 'following'),
         ('No better ____________ than one with no references at all.', 'sourced')],
 speak=['Say what a reference in your work would need to be openable in a minute.',
        'Concede one weakness in your own process and hold the position after it.'],
 write='Write one reference in the new form, with identifier, part and version.',
 vocab=[('The registry code identifying the file a document sits in is a ____________.', 'file number'),
        ('The code that names one document and no other is a ____________.', 'document identifier'),
        ('The numbered paragraph in which a passage is found is a ____________.', 'paragraph reference'),
        ('A short statement of where material came from and its limits is a ____________.', 'source note'),
        ('The record showing that a document was received and filed is a ____________.', 'registry entry')],
 gram=[('____________ the briefs are longer, they are now checked.', 'Although'),
       ('The 2019 series is indexed, ____________ the 2017 series is not.', 'whereas'),
       ('____________ the rule was followed, it did not achieve its purpose.', 'While'),
       ('____________ the extra length, the briefs are now checked.', 'Despite'),
       ('A title identifies a class, ____________ a file number identifies a document.', 'whereas')]),

found=['Try to open one reference from a document you were given, and time it.',
       'Rewrite one of your own references so a stranger could open the passage.',
       'Ask who in your office has followed a reference this month.',
       'Concede one point and hold your position, in one sentence, three times.'],
end_line='An accurate reference nobody follows protects nobody.',
end_next='Next: Right, and Useless',
)
