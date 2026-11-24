# -*- coding: utf-8 -*-
import figs

U = dict(
num=8, title='Our Documents, Not the Open Web',
gram='reported questions and requests',
ai='working from the Ministry’s own documents, not the open web',
strap='CEFR B1 · Grammar: reported questions and requests · AI: a closed document set',
cando=['report a question with whether, if or a question word, in statement order',
       'report a request with asked me to and told me to',
       'say why a closed document set is used for Ministry work',
       'require a citation to a document the Ministry holds',
       'write a tasking that forbids any source outside the collection'],
hero=('WHAT DOES THE MINISTRY HOLD?',
      ['The answer named a 2019 agreement, an article and a paragraph.',
       'The Ministry has never held such an agreement.'],
      [(730, 'blue', 'long'), (1390, 'purple', 'short'),
       (2050, 'orange', 'long'), (2690, 'teal', 'short')]),
hero_cap='Information Security and Records, the morning the citation was checked.',

warm=['Where do you look first when you need a fact for work?',
      'How would you check that a document you were told about exists?',
      'What should never be looked up outside your own files?'],
read=[
 'In February a desk officer asked a general research step what the Ministry’s position on '
 'transit fees had been in 2019. The answer was clear, well written and gave a source: a '
 '2019 agreement with Kavara, article 4, paragraph 2.',
 'The officer asked Records to send him the agreement. Karim Dalati replied that no such '
 'agreement existed. There had been a 2019 exchange of notes, which is a different instrument, '
 'and it had no article 4.',
 'Nothing dishonest had happened and nobody had been careless. The step had been asked a '
 'question about the Ministry and had answered from the open web, where a plausible '
 'arrangement between two states can be assembled out of general knowledge about how such '
 'arrangements usually look.',
 'The Ministry then did the thing that matters. It built a closed collection: 412,000 of its '
 'own documents, indexed, with a research step that may draw on nothing else. Ask it a '
 'question and it answers from the collection or says that the collection does not contain an '
 'answer. Every statement carries a file reference, and the file reference can be opened.',
 'Karim had asked, at the February meeting, whether anybody had checked a citation before '
 'quoting it. Nobody had. He asks the same question now at every review, and he says he will '
 'go on asking it, because the closed collection has made invented citations impossible and '
 'has not made unchecked ones less tempting.'],
c_a=[('What did the officer ask in February?', 'what the Ministry’s position on transit fees had been in 2019'),
     ('What source did the answer give?', 'a 2019 agreement with Kavara, article 4, paragraph 2'),
     ('What did Karim reply?', 'that no such agreement existed'),
     ('What did exist?', 'a 2019 exchange of notes, with no article 4'),
     ('How large is the closed collection?', '412,000 of the Ministry’s own documents'),
     ('What does every statement carry?', 'a file reference that can be opened')],
c_b=[('The February answer was badly written.', 'F'),
     ('The 2019 exchange of notes had an article 4.', 'F'),
     ('Somebody had acted dishonestly.', 'F'),
     ('The closed collection may draw on the open web.', 'F'),
     ('Karim asks the same question at every review.', 'T'),
     ('The collection has made unchecked citations less tempting.', 'F')],
c_c=[('The answer was clear, well written and gave a ____________.', 'source'),
     ('An exchange of notes is a different ____________.', 'instrument'),
     ('A ____________ arrangement can be assembled out of general knowledge.', 'plausible'),
     ('It answers from the collection or says that the collection does not contain an ____________.', 'answer'),
     ('Every statement carries a file ____________.', 'reference'),
     ('Invented citations are now ____________.', 'impossible')],
c_d=[('The February answer was ( plausible / dishonest ).', ['plausible', 'dishonest'], 0),
     ('How many documents are in the collection?', ['4,120', '412,000', '41,200', '4.12 million'], 1),
     ('What may the research step draw on?', ['the open web', 'the collection only', 'both', 'whatever is faster'], 1),
     ('What does the step say when it has no answer?', ['it guesses', 'that the collection does not contain one', 'it searches the web', 'nothing'], 1),
     ('What has not changed?', ['invented citations', 'the temptation not to check', 'the file references', 'the index'], 1)],
c_e=('Reported question or reported request? Put each in the right column.',
     [('He asked whether anybody had checked it.', 'question'),
      ('She asked me to send the agreement.', 'request'),
      ('He asked what the position had been.', 'question'),
      ('They told us to cite the file reference.', 'request'),
      ('She asked if the collection was closed.', 'question'),
      ('He asked us not to quote it.', 'request')],
     ['question', 'request']),

v_fig_title='WHERE AN ANSWER COMES FROM',
v_fig=[('book', 'a corpus'), ('shield', 'a closed collection'), ('doc', 'a citation'),
       ('pin', 'a page reference'), ('key', 'provenance'), ('bulb', 'grounding')],
v_fig_cap='Six words for the difference between an answer and a sourced answer.',
vocab=[
 ('a corpus', 'a defined body of documents used as the source for answers'),
 ('a closed collection', 'a document set that cannot be added to from outside'),
 ('the open web', 'everything publicly published, of unknown origin and date'),
 ('a repository', 'the store in which a collection is held'),
 ('a citation', 'the identification of the document a statement rests on'),
 ('to cite', 'to name the document a statement rests on'),
 ('a quotation', 'words reproduced exactly from a document'),
 ('a passage', 'a continuous stretch of text within a document'),
 ('a page reference', 'the place in a document where a passage is found'),
 ('grounding', 'the tying of each statement to a named source'),
 ('to ground', 'to tie a statement to a named source'),
 ('an internal document', 'a document produced within the Ministry'),
 ('a public document', 'a document the Ministry has published'),
 ('a holding', 'a document or set of documents the Ministry possesses'),
 ('a search index', 'the structure that makes a collection searchable'),
 ('a snippet', 'the short extract returned with a search result'),
 ('provenance', 'the record of where a document came from'),
 ('a document set', 'the documents chosen for a particular purpose'),
 ('to restrict', 'to limit what may be used'),
 ('an excerpt', 'a part taken out of a document and presented alone')],
v_a=[('A document set that cannot be added to from outside is a ____________.', 'closed collection'),
     ('The tying of each statement to a named source is ____________.', 'grounding'),
     ('The record of where a document came from is ____________.', 'provenance'),
     ('A document or set of documents the Ministry possesses is a ____________.', 'holding'),
     ('The short extract returned with a search result is a ____________.', 'snippet'),
     ('The structure that makes a collection searchable is a ____________.', 'search index'),
     ('A part taken out of a document and presented alone is an ____________.', 'excerpt'),
     ('A defined body of documents used as the source for answers is a ____________.', 'corpus')],
v_b=[('A citation is the identification of the document', 'a statement rests on.'),
     ('The open web is everything publicly published,', 'of unknown origin and date.'),
     ('A passage is a continuous stretch', 'of text within a document.'),
     ('An internal document is a document', 'produced within the Ministry.'),
     ('To restrict is to limit', 'what may be used.')],

g_title='Grammar: reported questions and requests',
g_rule=['A reported question keeps statement order: he asked what the position was.',
        'Use whether or if for a yes-no question: she asked whether it existed.',
        'A reported request uses asked or told plus to: he asked me to send it.',
        'For a negative request use asked me not to: she asked me not to quote it.'],
g_fig=('LOOSE',
       ['He asked what was the position?',
        'She asked did it exist.',
        'He asked me that I send it.',
        'She said me not to quote it.'],
       'PRECISE',
       ['He asked what the position had been.',
        'She asked whether it existed.',
        'He asked me to send it.',
        'She asked me not to quote it.'],
       'a question mark, an inversion and two wrong patterns',
       'two reported questions and two reported requests'),
g_fig_cap='A reported question is a statement about a question; it does not keep the question’s shape.',
g_a=[('He asked what the position ____________ (be) in 2019.', 'had been'),
     ('She asked ____________ the agreement existed.', 'whether'),
     ('He asked me ____________ send him the text.', 'to'),
     ('She asked me ____________ to quote it.', 'not'),
     ('Karim asked ____________ anybody had checked the citation.', 'whether'),
     ('They asked us ____________ (cite) the file reference.', 'to cite'),
     ('He asked where the document ____________ (be) held.', 'was'),
     ('She asked ____________ the collection was closed.', 'if'),
     ('The Director told us ____________ (use) the collection only.', 'to use')],
g_b=[('A reported question keeps ( question / statement ) order.', ['question', 'statement'], 1),
     ('He asked what the position ____.', ['was it', 'had been', 'is', 'be'], 1),
     ('She asked ____ the agreement existed.', ['did', 'whether', 'that', 'what'], 1),
     ('He asked me ____ send it.', ['that I', 'to', 'for', 'should'], 1),
     ('A negative request is', ['asked me no to', 'asked me not to', 'said me not', 'told me no'], 1),
     ('Which is correct?', ['He asked did it exist.', 'He asked whether it existed.', 'He asked what was it.', 'He asked that it exists.'], 1)],

d1=dict(title='No such agreement',
        fig=(['Article 4, paragraph 2.', 'There is no article 4.'],
             ['The answer gave a source.', 'The answer gave a shape.']),
        cap='Karim Dalati and the desk officer who had asked the question.',
        lines=[('Officer', 'I asked you to send me the 2019 agreement with Kavara on transit '
                           'fees. You replied that it does not exist.'),
               ('Karim', 'It does not. There is a 2019 exchange of notes. That is a different '
                         'instrument and it has no articles at all.'),
               ('Officer', 'Then where did article 4, paragraph 2 come from?'),
               ('Karim', 'From how such arrangements usually look. Most transit arrangements of '
                         'that period have an article 4 and most article 4s have two '
                         'paragraphs.'),
               ('Officer', 'So it was not told anything false. It assembled something true in '
                           'general.'),
               ('Karim', 'Which in our work is the same as false. You asked a question about '
                         'what the Ministry holds, and nothing in the answer came from what the '
                         'Ministry holds.'),
               ('Officer', 'I should have checked the citation before I used it.'),
               ('Karim', 'You should. I asked at the meeting whether anybody had, and nobody '
                         'had, including two people more senior than you.'),
               ('Officer', 'Had I put it in a note to the Director, we would have asserted the '
                           'existence of an agreement to our own Minister.'),
               ('Karim', 'You did put it in a note to the Director. I stopped it at eleven '
                         'o’clock.'),
               ('Officer', 'Then I owe you a great deal more than I thought I did.'),
               ('Karim', 'You owe me nothing. Ask the collection next time, and open the file '
                         'reference before you quote it.')],
        a=[('What had the officer asked Karim to send?', 'the 2019 agreement with Kavara on transit fees'),
           ('What exists instead?', 'a 2019 exchange of notes, with no articles'),
           ('Where did article 4 come from?', 'from how such arrangements usually look'),
           ('Why is a generally true answer the same as false here?', 'because the question was about what the Ministry holds'),
           ('What had the officer already done?', 'put it in a note to the Director, which Karim stopped')],
        b=[('That is a different ____________.', 'instrument'),
           ('It assembled something true in ____________.', 'general'),
           ('I asked whether anybody had ____________ it.', 'checked'),
           ('Open the file ____________ before you quote it.', 'reference')]),
d2=dict(title='Closed is not the same as true',
        fig=(['Everything now has a file reference.', 'And is everything in the files right?'],
             ['It is what the Ministry wrote.', 'Which is not the same thing.']),
        cap='Karim and Dr Hana Mourad, at the quarterly review.',
        lines=[('Hana', 'The collection has solved the invented citation. I want to raise what '
                        'it has not solved.'),
               ('Karim', 'Go on.'),
               ('Hana', 'Every answer now points to a document the Ministry holds. That makes '
                        'the answer traceable. It does not make it correct, because some of our '
                        'documents are wrong.'),
               ('Karim', 'That is true and I have no way to mark it. The 2017 note on Kavaran '
                         'transit was superseded in 2019 and nothing on the face of it says so.'),
               ('Hana', 'So an officer asks the collection a question, gets a grounded answer '
                        'citing a real file, and quotes a position the Ministry abandoned eight '
                        'years ago.'),
               ('Karim', 'With a file reference, which makes it harder to catch, not easier. '
                         'Nobody checks a citation that opens.'),
               ('Hana', 'Could you mark superseded documents?'),
               ('Karim', 'For the ones I know about. There is no list of what supersedes what, '
                         'and building one means reading four hundred thousand documents and '
                         'making a judgement on each.'),
               ('Hana', 'Then we are trading one failure for a quieter one.'),
               ('Karim', 'I think we are trading a loud failure for a quieter and rarer one, '
                         'and I would still make the trade. But I am not going to pretend the '
                         'second failure is small, because the day it matters it will matter '
                         'very much.'),
               ('Hana', 'I would rather we both say that in the minute than agree that the '
                        'problem is solved.')],
        a=[('What has the collection solved?', 'the invented citation'),
           ('What has it not solved?', 'that some of the Ministry’s own documents are wrong or superseded'),
           ('What is the example?', 'the 2017 note on Kavaran transit, superseded in 2019'),
           ('Why is a file reference a problem here?', 'because nobody checks a citation that opens'),
           ('Is the matter resolved?', 'no; both record that the second failure is real')],
        b=[('That makes the answer ____________.', 'traceable'),
           ('The 2017 note was ____________ in 2019.', 'superseded'),
           ('Nobody checks a citation that ____________.', 'opens'),
           ('A loud failure for a quieter and ____________ one.', 'rarer')],
        unresolved=True),

speak=[('Report it',
        ['Student A: ask six questions about your partner’s work.',
         'Student B: report each one back: you asked whether … , you asked what …',
         'Then report three requests: you asked me to …']),
       ('Open the reference',
        ['Describe a fact you used at work last month.',
         'Say where it came from and whether you opened the source.',
         'Your partner asks what would have happened if it had been wrong.']),
       ('Inside the collection',
        ['In pairs, list the documents your office would put in a closed collection.',
         'Say what you would exclude and why.',
         'Say how you would mark a document that is out of date.'])],

ext_title='A closed collection makes an answer traceable; it does not make the Ministry’s own documents right',
ext_fig=figs.source_check('ONE ANSWER, FOUR CLAIMS',
                          [('a 2019 exchange of notes exists', 'file ref 2019/KAV/114', 'verified'),
                           ('it concerns transit fees', 'file ref 2019/KAV/114', 'verified'),
                           ('the fee was fixed at a stated rate', 'file ref 2017/KAV/061', 'single'),
                           ('that rate is still the Ministry position', 'no document', 'none'),
                           ('a 2019 agreement with article 4 exists', 'no document', 'none'),
                           ('the 2017 note was superseded', 'not marked anywhere', 'none')]),
ext_fig_cap='Two claims hold, one rests on a superseded note, and three rest on nothing at all.',
ext=[
 'Ask a general research step what a particular ministry’s position was on a particular '
 'question in a particular year and you may get a confident answer with a citation to a '
 'document that does not exist. This is not dishonesty and it is not rare. Arrangements '
 'between states follow patterns, and a plausible instrument can be assembled from the '
 'pattern alone, complete with an article number.',
 'The response adopted across several foreign services is to restrict the work to a closed '
 'collection of the ministry’s own holdings. Documents are indexed; the research step may '
 'draw on nothing outside the collection; every statement carries a file reference; and where '
 'the collection holds no answer, the step says so instead of reaching further. This is the '
 'single most important design decision in the whole field, and it is not a technical one. It '
 'is the decision that an answer about the Ministry must come from the Ministry.',
 'What the closed collection buys is traceability. An officer can open the reference, read '
 'the passage and see whether it says what the answer said it said. Invented instruments '
 'become impossible, because an instrument must be in the collection to be cited.',
 'What it does not buy is correctness, and this is the part that is easy to state and hard to '
 'act on. A ministry’s holdings include positions it has abandoned, notes that were '
 'superseded without anything on their face saying so, and drafts that were never cleared. A '
 'grounded answer citing a real 2017 note may hand an officer a position the ministry left '
 'behind in 2019, and the file reference makes it less likely, not more, that anybody checks.',
 'So the collection is a boundary, not a guarantee. The practices that go with it are a '
 'marking of superseded material wherever it is known, a requirement that the officer open '
 'the reference before quoting it, and an honest statement in the record that the second '
 'failure has not been solved. A ministry that tells itself the problem is closed has '
 'exchanged a loud error for a quiet one.'],
dp1=('Closed-collection research',
     'Foreign ministries deploying research assistance in 2025 restricted it to internal '
     'document collections with mandatory source citation, after early trials produced '
     'confident references to instruments that did not exist.',
     'Source: reported practice in diplomatic research systems, 2025–2026.'),
e_a=[('Why can a plausible instrument be assembled?', 'because arrangements between states follow patterns'),
     ('What is the closed collection?', 'the ministry’s own holdings, indexed, with nothing outside allowed'),
     ('What does it buy?', 'traceability: the officer can open the reference and check the passage'),
     ('What does it not buy?', 'correctness, because the ministry’s own documents include superseded positions'),
     ('Why does a file reference make checking less likely?', 'because nobody checks a citation that opens')],
e_b=[('Invented citations are dishonest.', 'F'),
     ('The closed collection allows the open web for hard questions.', 'F'),
     ('Every statement carries a file reference.', 'T'),
     ('Ministries’ own documents are always current.', 'F'),
     ('The collection is a boundary, not a guarantee.', 'T'),
     ('Superseded notes always say so on their face.', 'F')],

w_model=(
 'Purpose: answer the desk officer’s question on Kavaran transit fees from the Ministry’s own '
 'holdings so that every statement can be opened and checked. Scope: the closed collection of '
 'Ministry documents; no source outside the collection may be used, and the 2 published '
 'commentaries on the file are excluded. Inputs: the collection and the question as put. '
 'Criteria: give a file reference for every statement; quote the passage relied on; where the '
 'collection holds no answer, say that it holds none and stop; where 2 documents conflict, '
 'give both with their dates and do not choose. Done: 1 answer of no more than 1 page, every '
 'statement referenced, within 4 hours. Fallback: where a cited document is marked superseded, '
 'say so beside the reference and name what supersedes it if the collection says.'),
w_fig=figs.spec_card('THE TASKING FOR A CLOSED-COLLECTION ANSWER',
                     [('Purpose', 'answer from the Ministry’s holdings, openable and checkable'),
                      ('Scope', 'the closed collection; nothing outside; 2 commentaries excluded'),
                      ('Inputs', 'the collection and the question as put'),
                      ('Criteria', 'a reference per statement; quote the passage; no answer means say so'),
                      ('Done', '1 page, every statement referenced, within 4 hours'),
                      ('Fallback', 'superseded document: say so beside the reference')]),
w_fig_cap='Where the collection holds no answer, say that it holds none and stop. That line is the whole tasking.',
w_task='Write a tasking for a research question answered from your own files only.',
w_steps=['Say why the answer must be openable.',
         'Name the collection and exclude everything else.',
         'Require a reference and a quotation for every statement.',
         'Say what to do when the collection has no answer.',
         'Say what to do when two documents conflict.'],
w_bank=['Answer … from … so that …',
        'Cover … ; no source outside … may be used, and … are excluded.',
        'Work from … and …',
        'Give … for every statement; quote … ; where … , say that … and stop; where 2 documents conflict, …',
        'Where a cited document is marked … , say so …'],
w_check=['Is every source outside the collection excluded in words?',
         'Is a reference required for every statement?',
         'Is there an instruction to stop rather than reach further?',
         'Is conflict between two documents handled?'],

t_title='Working from the Ministry’s own documents',
t_fig=figs.split('TWO SOURCES FOR ONE QUESTION',
                 'The open web',
                 ['answers every question',
                  'knows how instruments usually look',
                  'can cite what does not exist',
                  'unknown origin and date'],
                 'The closed collection',
                 ['answers or says it cannot',
                  'knows only what the Ministry holds',
                  'can cite only real files',
                  'every reference opens']),
t_fig_cap='The left column is wider. The right column is the only one a ministry can quote.',
t_body=[
 'A question about what the Ministry holds must be answered from what the Ministry holds. Put '
 'it to anything wider and you may get an instrument assembled from the general shape of such '
 'instruments: a 2019 agreement, article 4, paragraph 2, confidently cited and never written. '
 'The error is not dishonesty; it is a question answered from the wrong collection.',
 'So restrict the collection and make the restriction absolute. The Ministry’s own '
 'documents, indexed; nothing from outside; a file reference on every statement; a quotation '
 'of the passage relied on; and where the collection holds no answer, a plain statement that '
 'it holds none, rather than a reach for something further away. This is the single most '
 'important decision in the field and it is a decision about boundaries, not about tools.',
 'Then be honest about the limit, because this is where offices deceive themselves. A closed '
 'collection buys traceability, not correctness. The Ministry holds positions it has '
 'abandoned, notes superseded without a word on their face, and drafts never cleared. An '
 'answer citing a real 2017 note can hand an officer a position dropped in 2019, and the '
 'reference makes it less likely that anybody looks. Mark what you know to be superseded, '
 'open the reference before you quote it, and write in the record that this failure is not '
 'solved.'],
t_say=[('Set the boundary: ', 'No source outside the collection may be used.'),
       ('Require the reference: ', 'A file reference for every statement, and the passage quoted.'),
       ('Permit the silence: ', 'Where the collection holds no answer, say so and stop.')],
t_bound=('A closed collection cannot tell a current position from an abandoned one, and a '
         'reference that opens is not a reference that has been read. Traceability is what it '
         'buys. Correctness remains an officer’s work, and the day a superseded note is '
         'quoted with a real file number is the day the quiet failure becomes a loud one.'),
t_a=[('No source outside the ____________ may be used.', 'collection'),
     ('A file reference for every ____________.', 'statement'),
     ('Where the collection holds no answer, say so and ____________.', 'stop'),
     ('A question answered from the wrong ____________.', 'collection'),
     ('A closed collection buys traceability, not ____________.', 'correctness'),
     ('Notes ____________ without a word on their face.', 'superseded')],
t_b_rubric='Report each question or request correctly.',
t_b=[('"Does the agreement exist?" he asked.', 'he asked whether the agreement existed'),
     ('"What was the position in 2019?" she asked.', 'she asked what the position had been in 2019'),
     ('"Send me the text," he said.', 'he asked me to send him the text'),
     ('"Do not quote it," she said.', 'she asked me not to quote it')],

case=dict(
 title='The Decision Room · The note that was never marked',
 brief=[
  'An officer has quoted the 2017 note on Kavaran transit in a brief for the Minister. The '
  'citation is real and the passage says what the brief says it says.',
  'The 2017 note was superseded by the 2019 exchange of notes. Nothing on the face of the '
  '2017 note says so, and the collection does not mark it.',
  'Karim can mark the documents he knows about, which is perhaps 300 of 412,000. Hana wants '
  'a general rule instead. Samir Haddad says a general rule that officers cannot follow is '
  'worse than none.'],
 exhibit=figs.datatable('THE COLLECTION, BY STATUS',
                        ['', 'Figure', 'Note'],
                        [['documents in the collection', '412,000', '—'],
                         ['known to be superseded and marked', '300', 'by hand'],
                         ['believed superseded, not identified', 'unknown', 'no list exists'],
                         ['answers given with a file reference', '100%', 'since March'],
                         ['references opened by the officer before use', '31%', 'sampled'],
                         ['briefs withdrawn for a superseded citation', '2', 'this year']]),
 exhibit_cap='Every answer carries a reference. Fewer than a third of those references are '
             'opened.',
 exhibit_note='Building a full list of what supersedes what would require a judgement on each '
              'document and has been estimated at four officer-years.',
 voices=[('Karim Dalati', 'Information Security and Records',
          'I will mark what I know. Three hundred documents is not a solution and it is what I '
          'can do by Friday without pretending to more.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Require the officer to check the currency of any document older than three years '
          'before quoting it. That covers the whole collection rather than three hundred '
          'documents.'),
         ('Samir Haddad', 'Legal and Treaties',
          'Check it against what? There is no list. You are asking every officer to do four '
          'officer-years of work individually, which means they will tick the box and quote '
          'it anyway.')],
 steps=[('Find it', 'What proportion of references are opened?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Samir call Hana’s rule unfollowable?'),
        ('Weigh it', 'A partial marking that is real against a general rule that is not.'),
        ('Decide', 'What is required of an officer quoting an old document?')],
 analysis=[('Find it. How many references are opened before use?', 'thirty-one per cent'),
           ('Compare it. What does Hana propose?', 'checking the currency of any document older than three years'),
           ('Infer it. What is Samir’s objection?', 'that there is nothing to check against, so officers will tick the box'),
           ('Weigh it. How long would a full supersession list take?', 'about four officer-years'),
           ('Decide. What would you do?', 'answers vary; marking plus a required line in the brief makes the gap visible')],
 decision='Write the rule for quoting a document from the collection.',
 decision_steps=['Say what the officer must do before quoting.',
                 'Say what the brief must state about the document’s currency.',
                 'Say what Records marks and publishes.',
                 'Say what is reviewed and when.'],
 bank=['Before quoting … , the officer …',
       'The brief states … for any document older than …',
       'Records marks … and publishes …',
       'Where currency cannot be established, …',
       'This is reviewed …'],
 outcome='The rule adopted was narrow: a brief quoting a document more than three years old '
         'must carry one line saying whether its currency was confirmed and how, and where it '
         'could not be, the line says so. Records marked the three hundred and published the '
         'count. In the first year 1,100 briefs carried the line, 410 of them saying currency '
         'could not be established, and two of those 410 were stopped by a reader who '
         'recognised the document. Samir, who had opposed a general rule, says the line worked '
         'precisely because it demanded an admission rather than a check, and that he had been '
         'arguing against the wrong rule.',
 outcome_q=[('What must a brief quoting an old document carry?', 'one line on whether currency was confirmed and how'),
            ('Why does Samir say the line worked?', 'because it demanded an admission rather than a check nobody could perform')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Ask it about transit fees',
 task=['This is the question as it was put in February, written out as a tasking.',
       'It produced a confident page citing an agreement the Ministry has never held.'],
 draft=['Find out our position on transit fees.',
        'Look at the relevant material.',
        'Give sources.',
        'Cover the recent period.',
        'One page.',
        'This morning.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says where an answer may come from.',
 asked=['An answer from Ministry holdings only',
        'A file reference per statement',
        'Silence where the collection has nothing'],
 back=['A page assembled from general practice',
       'A citation to a 2019 agreement that does not exist',
       'No indication that anything was missing'],
 gap='"Our position" does not say as stated to whom, "the relevant material" does not say '
     'which collection, "give sources" does not require them to be Ministry files, and '
     'nothing says what to do when there is no answer.',
 back_cap='A clear, well-written page resting on an instrument that was never written.',
 back_note='Line two is the failure. "Relevant material" allowed the open web, and the open '
           'web knows how such agreements usually look.',
 diagnosis=[('[1] "our position" — as stated to which state, in which year?', 'ambiguous referent'),
            ('[2] "the relevant material" — which collection, and may anything outside it be used?', 'unscoped set'),
            ('[3] "give sources" — sources of what kind, and openable by whom?', 'ambiguous referent'),
            ('[4] "the recent period" — from which year?', 'unscoped set'),
            ('[5] "one page" — and if the collection holds nothing?', 'missing condition'),
            ('[6] "this morning" — and if the answer cannot be grounded by then?', 'missing condition')],
 rewrite='Rewrite the tasking so that the answer can come only from Ministry holdings and '
         'silence is permitted.',
 scaffold=['Why the answer must be openable and checkable',
           'The collection, and what is excluded',
           'The collection and the question as put',
           'A reference per statement, the passage quoted, silence where there is nothing, conflict shown',
           'The length, the referencing and the deadline',
           'What to do with a document marked superseded'],
 bank=['Answer … from … so that …',
       'Cover … ; no source outside … may be used, and … are excluded.',
       'Work from … and …',
       'Give … for every statement; quote … ; where the collection holds no answer, … ; where 2 documents conflict, …',
       'Return 1 answer of no more than … , within …',
       'Where a cited document is marked … , …'],
 check=['Is every outside source excluded in words?',
        'Is a file reference required per statement?',
        'Is saying nothing explicitly permitted?',
        'Is a superseded document handled?'],
 model=['Answer the desk officer’s question on Kavaran transit fees from the Ministry’s own holdings so that every statement can be opened and checked',
        'The closed collection of Ministry documents; no source outside the collection may be used, and the 2 published commentaries on the file are excluded',
        'The collection and the question as put',
        'Give a file reference for every statement; quote the passage relied on; where the collection holds no answer, say that it holds none and stop; where 2 documents conflict, give both with their dates and do not choose',
        '1 answer of no more than 1 page, every statement referenced, within 4 hours',
        'Where a cited document is marked superseded, say so beside the reference and name what supersedes it if the collection says'],
 cost='1 note to the Director asserting the existence of a 2019 agreement, stopped at 11 '
      'o’clock by the head of Records, and 3 weeks of a desk officer’s work resting on it.'),

rev_fig=figs.split('REPORTING',
                   'Wrong',
                   ['He asked what was the position?',
                    'She asked did it exist.',
                    'He asked me that I send it.',
                    'She said me not to quote it.'],
                   'Right',
                   ['He asked what the position had been.',
                    'She asked whether it existed.',
                    'He asked me to send it.',
                    'She asked me not to quote it.']),
rev_fig_cap='Statement order; whether or if; asked me to; asked me not to.',
rev=dict(
 read=[('The February citation was', ['dishonest', 'assembled from how such instruments look', 'copied from a file', 'a typing error'], 1),
       ('A closed collection buys', ['correctness', 'traceability', 'speed only', 'secrecy'], 1),
       ('What proportion of references were opened before use?', ['all', 'about a third', 'none', 'two thirds'], 1),
       ('In the Decision Room, what must a brief quoting an old document carry?', ['nothing', 'a line on currency', 'a second citation', 'the Director’s approval'], 1)],
 listen_text='A question about what the Ministry holds must be answered from what the '
             'Ministry holds. Put it to anything wider and you may get an instrument '
             'assembled from the general shape of such instruments, confidently cited and '
             'never written. A closed collection buys traceability, not correctness.',
 listen=[('Answered from what the Ministry ____________.', 'holds'),
         ('An instrument assembled from the general ____________ of such instruments.', 'shape'),
         ('Confidently cited and never ____________.', 'written'),
         ('Traceability, not ____________.', 'correctness')],
 speak=['Report three questions a colleague asked you this week.',
        'Say what your office would put in a closed collection, and what it would exclude.'],
 write='Write one line forbidding any source outside your own files.',
 vocab=[('A document set that cannot be added to from outside is a ____________.', 'closed collection'),
        ('The tying of each statement to a named source is ____________.', 'grounding'),
        ('The record of where a document came from is ____________.', 'provenance'),
        ('The short extract returned with a search result is a ____________.', 'snippet'),
        ('A part taken out of a document and presented alone is an ____________.', 'excerpt')],
 gram=[('He asked what the position ____________ (be) in 2019.', 'had been'),
       ('She asked ____________ the agreement existed.', 'whether'),
       ('He asked me ____________ send him the text.', 'to'),
       ('She asked me ____________ to quote it.', 'not'),
       ('They asked us ____________ (cite) the file reference.', 'to cite')]),

found=['Ask what collection your office searches when it needs a precedent.',
       'Open one reference you used last month and read the passage.',
       'Find one document in your files that has been superseded and is not marked.',
       'Report three questions from your week in correct reported form.'],
end_line='An answer about the Ministry must come from the Ministry.',
end_next='Next: A Telegram on One Page',
)
