# -*- coding: utf-8 -*-
import figs

U = dict(
num=6, title='Findable in Four Years',
gram='comparatives and superlatives with a stated basis',
ai='indexing and retrieval: making a file findable in four years',
strap='CEFR B1 · Grammar: comparatives with a stated basis · AI: indexing and retrieval',
cando=['form comparatives and superlatives correctly',
       'always state the basis of a comparison: longer than what, by what measure',
       'say what makes a document findable years later',
       'write a naming convention and a set of descriptors',
       'task an indexing job so that the result can be checked'],
hero=('IT IS ON THE FILE',
      ['Four hundred thousand documents are on the file.',
       'The one you need was saved as Final version 3 revised.docx.'],
      [(730, 'teal', 'long'), (1390, 'blue', 'short'),
       (2050, 'purple', 'long'), (2690, 'orange', 'short')]),
hero_cap='Records, basement level, where everything is kept and nothing is found.',

warm=['How do you name a document you save today?',
      'Could a colleague find it in four years without asking you?',
      'What is the oldest document you have had to find at work?'],
read=[
 'Karim Dalati runs Information Security and Records. His section holds about four hundred '
 'thousand documents, and the number grows by roughly twenty thousand a year.',
 'In January a desk officer needed the Ministry’s position on a transit question, as stated '
 'to Kavara in 2021. The position existed. It had been written, cleared and sent. Finding it '
 'took eleven days, and it was found in the end because a retired colleague remembered the '
 'name of the officer who had drafted it.',
 'The document was not lost. It was saved as Final version 3 revised.docx in a folder named '
 'after a meeting that had been renamed twice since. Nothing in the file name said transit, '
 'Kavara or 2021, and nothing in the folder structure said anything at all.',
 'Karim’s section now runs an indexing step over every incoming record. It reads the '
 'document and proposes a file name to the Ministry’s convention, a date, the states '
 'concerned, the subject from a fixed list of ninety-one headings, and up to five keywords. '
 'A records officer checks the proposal, which takes about forty seconds, and files it.',
 'Retrieval of the 2021 position, if it were needed today, would take under a minute. Karim '
 'is careful about how he puts this. The indexing is better than what the Ministry had, by '
 'the measure that matters, which is the time between a question and an answer. It is not '
 'better than a good records officer. It is faster than one, and there is only one of him.'],
c_a=[('How many documents does the section hold?', 'about four hundred thousand'),
     ('How long did the 2021 position take to find?', 'eleven days'),
     ('How was it found in the end?', 'a retired colleague remembered who had drafted it'),
     ('What was the document called?', 'Final version 3 revised.docx'),
     ('What does the indexing step propose?', 'a file name, a date, the states concerned, a subject heading and up to five keywords'),
     ('How long does the check take?', 'about forty seconds')],
c_b=[('The 2021 document had been lost.', 'F'),
     ('The folder had been renamed twice.', 'T'),
     ('The file name mentioned Kavara.', 'F'),
     ('There are ninety-one subject headings.', 'T'),
     ('Karim says the indexing is better than a good records officer.', 'F'),
     ('Retrieval today would take under a minute.', 'T')],
c_c=[('The number grows by roughly twenty thousand a ____________.', 'year'),
     ('The position had been written, cleared and ____________.', 'sent'),
     ('A folder named after a meeting that had been ____________ twice.', 'renamed'),
     ('The subject comes from a fixed list of ninety-one ____________.', 'headings'),
     ('The measure that matters is the time between a question and an ____________.', 'answer'),
     ('It is ____________ than a good records officer.', 'faster')],
c_d=[('The document was ( unfindable / lost ).', ['unfindable', 'lost'], 0),
     ('How many keywords does the step propose?', ['one', 'up to five', 'ninety-one', 'twenty'], 1),
     ('Who checks the proposal?', ['nobody', 'a records officer', 'the Director', 'the drafter'], 1),
     ('What is the measure Karim uses?', ['cost', 'time between question and answer', 'number of files', 'accuracy of names'], 1),
     ('How many good records officers does the section have?', ['none', 'one', 'ninety-one', 'twenty thousand'], 1)],
c_e=('Comparative or superlative? Put each in the right column.',
     [('faster than a records officer', 'comparative'),
      ('the slowest of the three routes', 'superlative'),
      ('better than what we had', 'comparative'),
      ('the most used heading', 'superlative'),
      ('less precise than the convention', 'comparative'),
      ('the fewest keywords of any file', 'superlative')],
     ['comparative', 'superlative']),

v_fig_title='HOW A FILE IS FOUND',
v_fig=[('doc', 'an index'), ('key', 'a keyword'), ('book', 'a subject heading'),
       ('pin', 'a file reference'), ('chart', 'metadata'), ('clock', 'a date range')],
v_fig_cap='Six words for the apparatus that stands between a question and an answer.',
vocab=[
 ('an index', 'an ordered list that says where things are'),
 ('to index', 'to record where a document is and what it is about'),
 ('a keyword', 'a word chosen to make a document findable'),
 ('a descriptor', 'a term from a fixed list used to classify a document'),
 ('retrieval', 'the act of finding a stored document again'),
 ('to retrieve', 'to find and bring back a stored document'),
 ('a search term', 'the words a person actually types when looking'),
 ('a file reference', 'the code that identifies a file uniquely'),
 ('a naming convention', 'the agreed rule for how documents are named'),
 ('a folder structure', 'the arrangement of folders within folders'),
 ('metadata', 'information about a document rather than in it'),
 ('a subject heading', 'the topic a document is filed under'),
 ('a cross-reference', 'a pointer from one record to a related one'),
 ('to tag', 'to attach a label to a document for later searching'),
 ('an archive', 'the store of records no longer in current use'),
 ('to archive', 'to move a record into long-term storage'),
 ('a register', 'a running list of documents received or sent'),
 ('a catalogue', 'a complete description of what a collection holds'),
 ('a finding aid', 'a document written to help somebody search a collection'),
 ('a date range', 'the period between two dates, used to narrow a search')],
v_a=[('A term from a fixed list used to classify a document is a ____________.', 'descriptor'),
     ('The code that identifies a file uniquely is a ____________.', 'file reference'),
     ('The agreed rule for how documents are named is a ____________.', 'naming convention'),
     ('Information about a document rather than in it is ____________.', 'metadata'),
     ('A pointer from one record to a related one is a ____________.', 'cross-reference'),
     ('A running list of documents received or sent is a ____________.', 'register'),
     ('A document written to help somebody search a collection is a ____________.', 'finding aid'),
     ('The words a person actually types when looking are the ____________.', 'search term')],
v_b=[('An index is an ordered list', 'that says where things are.'),
     ('Retrieval is the act of finding', 'a stored document again.'),
     ('An archive is the store of records', 'no longer in current use.'),
     ('A catalogue is a complete description', 'of what a collection holds.'),
     ('A date range is the period between two dates,', 'used to narrow a search.')],

g_title='Grammar: comparatives and superlatives with a stated basis',
g_rule=['Short adjectives take -er and -est: faster, the fastest.',
        'Longer adjectives take more and the most: more precise, the most precise.',
        'A comparison without a stated basis is not a claim; say than what.',
        'Add the measure where it is not obvious: faster, by time to first answer.'],
g_fig=('LOOSE',
       ['The new system is better.',
        'Retrieval is much faster now.',
        'This is the most important heading.',
        'More documents are indexed.'],
       'PRECISE',
       ['The index is better than the folder names, for finding a subject.',
        'Retrieval is faster than before: under a minute against eleven days.',
        'Transit is the most used heading, by number of documents filed in 2025.',
        'More documents are indexed than in 2024: 19,400 against 11,200.'],
       'four comparisons with nothing to compare against',
       'four comparisons, each with its basis and its measure'),
g_fig_cap='Than what, and by what measure. Without both, a comparative says nothing.',
g_a=[('The index is ____________ (good) than the folder names.', 'better'),
     ('Retrieval is ____________ (fast) than before.', 'faster'),
     ('Transit is the ____________ (used) heading.', 'most used'),
     ('This route is ____________ (slow) than the register.', 'slower'),
     ('It is the ____________ (precise) of the three descriptors.', 'most precise'),
     ('Fewer keywords are ____________ (helpful) than five good ones.', 'less helpful'),
     ('The 2021 file was the ____________ (hard) to find.', 'hardest'),
     ('Indexing is ____________ (reliable) than memory.', 'more reliable'),
     ('This is the ____________ (short) file reference in use.', 'shortest')],
g_b=[('A comparative needs a stated ( keyword / basis ).', ['keyword', 'basis'], 1),
     ('Retrieval is ____ than before.', ['more fast', 'faster', 'fastest', 'the faster'], 1),
     ('Transit is ____ used heading.', ['more', 'the most', 'most of', 'the more'], 1),
     ('Which is a complete comparison?', ['It is better.', 'It is better than folder names, for finding a subject.', 'It is the best.', 'It is much better.'], 1),
     ('Indexing is ____ reliable than memory.', ['most', 'more', 'the more', 'much'], 1),
     ('The 2021 file was the ____ to find.', ['harder', 'hardest', 'most hard', 'more hard'], 1)],

d1=dict(title='Eleven days for a document nobody had lost',
        fig=(['Where is the 2021 transit position?', 'It is on the file.'],
             ['Which file?', 'That is the eleven days.']),
        cap='Karim Dalati and Lina Khalil, in Records.',
        lines=[('Lina', 'I need the position we gave Kavara on transit in 2021.'),
               ('Karim', 'It will be on the file.'),
               ('Lina', 'That is what three people have told me. Which file?'),
               ('Karim', 'That is the question I cannot answer in under a week, and I am the '
                         'head of this section.'),
               ('Lina', 'Why not? It was written, cleared and sent. It is a real document.'),
               ('Karim', 'It is. It is called Final version 3 revised, it is in a folder named '
                         'after a meeting that has been renamed twice, and nothing anywhere on '
                         'it says transit or Kavara.'),
               ('Lina', 'So you can only find it if you already know where it is.'),
               ('Karim', 'Or if somebody remembers who drafted it. That is how we found the '
                         '2019 one.'),
               ('Lina', 'A retired colleague.'),
               ('Karim', 'A retired colleague who answers the telephone. He is the most '
                         'reliable finding aid this Ministry has, by any measure, and he is '
                         'seventy-one.'),
               ('Lina', 'That is not a records system.'),
               ('Karim', 'It is not. It is a man, and I would like to replace him with '
                         'something that will still be here in 2040.')],
        a=[('What does Lina need?', 'the 2021 position given to Kavara on transit'),
           ('Why can Karim not find it quickly?', 'the file name and folder say nothing about the subject'),
           ('How was the 2019 position found?', 'somebody remembered who had drafted it'),
           ('Who does Karim call the most reliable finding aid?', 'a retired colleague of seventy-one'),
           ('What does Karim want?', 'something that will still be there in 2040')],
        b=[('It was written, cleared and ____________.', 'sent'),
           ('A folder named after a meeting that has been ____________ twice.', 'renamed'),
           ('He is the most reliable finding ____________ this Ministry has.', 'aid'),
           ('Something that will still be here in ____________.', '2040')]),
d2=dict(title='Ninety-one headings and one of them is wrong',
        fig=(['The step filed it under Transit.', 'It is a consular case.'],
             ['The word transit is in it nine times.', 'And the point of it is a citizen.']),
        cap='Karim and Rana Deeb of Consular Affairs.',
        lines=[('Rana', 'A case of mine has been filed under Transit. It is a consular case '
                        'about a citizen detained at a border.'),
               ('Karim', 'The word transit appears in it nine times. That is why.'),
               ('Rana', 'The word appears because the border is a transit point. The subject is '
                        'a detained citizen.'),
               ('Karim', 'I agree with you. And I want to be honest that this will keep '
                         'happening, because the step reads words and a subject heading is a '
                         'judgement about what a document is for.'),
               ('Rana', 'Then the heading is wrong more often than you are telling people.'),
               ('Karim', 'It is wrong about four times in a hundred, which is better than the '
                         'folder names were, by the only measure I can take. It is also wrong '
                         'in a particular direction: it follows the most frequent word.'),
               ('Rana', 'Which on a consular case is almost never the point of the case.'),
               ('Karim', 'That is the part I have not solved. Consular work is about a person, '
                         'and the person’s name is in the document twice while the place is in '
                         'it nine times.'),
               ('Rana', 'So consular cases should be indexed by a consular officer.'),
               ('Karim', 'Perhaps. Then I have forty thousand consular documents and one '
                         'consular records officer, and we are back to a person who retires.'),
               ('Rana', 'I do not have an answer to that either. I would rather the four per '
                         'cent were written down than discussed in corridors.'),
               ('Karim', 'Agreed. I will publish the error rate by heading, and we will both '
                         'look at it every quarter and probably still disagree.')],
        a=[('How was Rana’s case filed?', 'under Transit'),
           ('What is it actually about?', 'a citizen detained at a border'),
           ('Why did the step choose Transit?', 'the word appears nine times; it follows the most frequent word'),
           ('What is the error rate?', 'about four in a hundred'),
           ('Is the consular problem solved?', 'no; both say they have no answer')],
        b=[('A subject heading is a ____________ about what a document is for.', 'judgement'),
           ('It follows the most frequent ____________.', 'word'),
           ('Consular work is about a ____________.', 'person'),
           ('I will publish the error rate by ____________.', 'heading')],
        unresolved=True),

speak=[('State the basis',
        ['Student A: make six comparisons about your own work.',
         'Student B: ask than what, and by what measure.',
         'Rewrite each one until both questions are answered in the sentence.']),
       ('Find it in four years',
        ['Describe how you name documents now.',
         'Your partner tries to find one of them from your description alone.',
         'Agree one change to the naming convention.']),
       ('The wrong heading',
        ['In pairs, take a document from your work.',
         'Each choose a subject heading for it, separately, then compare.',
         'Say what made you choose differently.'])],

ext_title='Indexing is cheap and retrieval is the point; the subject heading is still a judgement',
ext_fig=figs.datatable('ONE DOCUMENT, SIX FIELDS',
                       ['Field', 'Before', 'After'],
                       [['file name', 'Final version 3 revised.docx', '2021-06-14_KAV_transit_position'],
                        ['date', 'file date only', '14 June 2021, as sent'],
                        ['states concerned', 'none', 'Kavara'],
                        ['subject heading', 'none', 'Transit and border regimes'],
                        ['keywords', 'none', 'transit, border, 2021, position, clearance'],
                        ['time to retrieve', '11 days', 'under 1 minute']]),
ext_fig_cap='Five fields that did not exist, and the only one anybody measures is the last.',
ext=[
 'A ministry’s records are its memory, and the memory is only as good as what can be found '
 'in it. The problem is never that documents are lost. It is that they were named by the '
 'person who wrote them, on the day they were written, for the purpose of that afternoon, and '
 'nobody asked what a stranger would type in four years.',
 'Indexing is one of the clearest uses of the capability in a foreign service, and several '
 'have adopted it. The step reads an incoming document and proposes the fields that make it '
 'findable: a name to the house convention, the date, the states concerned, a subject heading '
 'from a fixed list, and a small number of keywords. A records officer then accepts or '
 'corrects the proposal in well under a minute.',
 'The gain should be stated with its basis, because a vague claim here is worse than none. '
 'The index is not more accurate than a skilled records officer working carefully. It is '
 'faster than one, by a very large factor, and it is available for every document rather than '
 'for the ones somebody had time for. Where a ministry has one records officer and twenty '
 'thousand incoming documents a year, that is the whole of the argument.',
 'The weak point is the subject heading, because a heading is not a summary of the words in a '
 'document; it is a judgement about what the document is for. A consular case about a '
 'detained citizen at a border crossing contains the word transit nine times and the '
 'person’s name twice, and a method that follows frequency will file it under transit. The '
 'error is not random: it runs in a predictable direction, which at least means it can be '
 'measured and published.',
 'So the practice that holds is a fixed list of headings, an officer’s check before filing, '
 'and a published error rate by heading so that the sections most often misfiled know it and '
 'can argue about it. The alternative is not a better system. It is a retired colleague who '
 'answers the telephone.'],
dp1=('Records and retrieval',
     'Foreign services that applied automated indexing to incoming records in 2025 reported '
     'retrieval times falling from days to minutes, while keeping a human check on '
     'classification before filing.',
     'Source: reported practice in diplomatic records management, 2025–2026.'),
e_a=[('What is the real problem with records?', 'documents are named for the day they were written, not for a stranger in four years'),
     ('What fields does an indexing step propose?', 'a name to convention, the date, the states concerned, a subject heading and keywords'),
     ('How should the gain be stated?', 'faster than a records officer, not more accurate, and available for every document'),
     ('Why is the subject heading the weak point?', 'because a heading is a judgement about what a document is for, not a count of words'),
     ('What practice holds?', 'a fixed list, an officer’s check, and a published error rate by heading')],
e_b=[('Documents are usually lost.', 'F'),
     ('Indexing is more accurate than a careful records officer.', 'F'),
     ('Indexing is faster, by a large factor.', 'T'),
     ('Heading errors run in a predictable direction.', 'T'),
     ('The error rate should be kept quiet.', 'F'),
     ('A fixed list of headings is part of the practice.', 'T')],

w_model=(
 'Purpose: index every incoming record so that an officer who was not involved can find it in '
 '4 years from a subject and a date. Scope: records received by the Ministry from 1 January '
 'onward; the 2 archives of pre-2015 material are out of scope. Inputs: the document itself '
 'and the Ministry’s list of 91 subject headings. Criteria: propose a file name to the '
 'Ministry convention, the date as sent, every state named in the document, 1 subject heading '
 'from the list of 91 and no more than 5 keywords; where 2 headings would fit, propose both '
 'and mark the record for an officer’s decision. Done: 1 proposal per document, presented for '
 'a records officer’s acceptance, within 1 working day of receipt. Fallback: where the '
 'document names no state or no date, propose the other fields and mark the missing ones as '
 'absent rather than guessing.'),
w_fig=figs.spec_card('THE TASKING FOR INDEXING',
                     [('Purpose', 'findable in 4 years by a stranger, from subject and date'),
                      ('Scope', 'records received from 1 January; 2 old archives excluded'),
                      ('Inputs', 'the document and the list of 91 headings'),
                      ('Criteria', 'name, date, states, 1 heading, max 5 keywords; 2 headings flagged'),
                      ('Done', '1 proposal per document for acceptance, within 1 working day'),
                      ('Fallback', 'missing state or date marked absent, never guessed')]),
w_fig_cap='The fallback line is what stops an index filling with plausible inventions.',
w_task='Write a tasking for indexing the records your own office receives.',
w_steps=['Say who must be able to find the document, and when.',
         'Say which records are in scope and which are not.',
         'Name the fixed list the heading must come from.',
         'Put a number on the keywords.',
         'Say what happens where a field is absent from the document.'],
w_bank=['Index … so that … can find it in …',
        'Cover … ; … are out of scope.',
        'Work from … and …',
        'Propose … , 1 … from the list of … and no more than … ; where … , propose both and mark …',
        'Where the document names no … , mark … as absent rather than guessing.'],
w_check=['Does the purpose name the person who will search, and the horizon?',
         'Is the heading tied to a fixed list?',
         'Is the number of keywords stated?',
         'Is guessing a missing field forbidden?'],

t_title='Indexing and retrieval',
t_fig=figs.split('TWO WAYS TO FIND A 2021 FILE',
                 'The old way',
                 ['ask three colleagues',
                  'guess the folder',
                  'telephone a retired officer',
                  '11 days'],
                 'The indexed way',
                 ['search the subject heading',
                  'narrow by date range and state',
                  'read the keywords',
                  'under 1 minute']),
t_fig_cap='The right-hand column is not cleverer. It is the same work, written down in advance.',
t_body=[
 'Nothing in a ministry is lost; things are unfindable, which is a different failure and a '
 'worse one, because everybody believes the document is available. It is unfindable because '
 'it was named by its drafter on the afternoon it was written, and nobody asked what a '
 'stranger would type in four years.',
 'So index on receipt. A step that reads an incoming document and proposes a name to the '
 'house convention, a date, the states concerned, one subject heading from a fixed list and a '
 'handful of keywords puts five fields where there were none, and a records officer checks '
 'the proposal in well under a minute. State the gain with its basis: not more accurate than '
 'a careful records officer, but faster by a large factor, and applied to every document '
 'rather than to the ones somebody had time for.',
 'Then watch the heading, because it is the one field that is a judgement rather than a '
 'reading. A consular case about a detained citizen will contain a place name nine times and '
 'a person’s name twice, and a method that follows frequency files it under the place. Keep '
 'the list fixed, keep the officer’s check, and publish the error rate by heading so the '
 'sections that suffer most can see it and argue.'],
t_say=[('State the horizon: ', 'Findable in 4 years by an officer who was not involved.'),
       ('Fix the list: ', '1 subject heading from the list of 91.'),
       ('Forbid the guess: ', 'Mark a missing field as absent rather than guessing.')],
t_bound=('An index makes retrieval fast; it does not make classification right. The subject '
         'heading is a judgement about what a document is for, and a method that follows the '
         'most frequent word will misfile a case whose point is a person. Keep the check, and '
         'publish how often the heading is wrong.'),
t_a=[('Findable in 4 years by an officer who was not ____________.', 'involved'),
     ('1 subject heading from the list of ____________.', '91'),
     ('Mark a missing field as ____________ rather than guessing.', 'absent'),
     ('Things are ____________, which is a different failure.', 'unfindable'),
     ('Not more accurate, but ____________ by a large factor.', 'faster'),
     ('Publish the error rate by ____________.', 'heading')],
t_b_rubric='Rewrite each comparison so that it states its basis and measure.',
t_b=[('The new system is better.', 'the index is better than the folder names for finding a subject by name and date'),
     ('Retrieval is much faster.', 'retrieval takes under a minute against eleven days before'),
     ('This is the most important heading.', 'transit is the most used heading, by documents filed in 2025'),
     ('More documents are indexed.', '19,400 documents were indexed in 2025 against 11,200 in 2024')],

case=dict(
 title='The Decision Room · Who indexes the consular cases',
 brief=[
  'The indexing step is wrong about the subject heading in 4 cases per hundred overall. On '
  'consular records the rate is 19 per hundred, and the error always runs the same way: a case '
  'about a person is filed under a place.',
  'Rana Deeb wants consular records taken out of the step and indexed by a consular officer. '
  'There are 40,000 consular documents and one consular records officer.',
  'Karim proposes keeping the step and adding a rule that any document containing a citizen’s '
  'name is flagged for a consular decision. Maya Sarkis from the Diplomatic Institute asks '
  'what either option teaches the next generation of officers.'],
 exhibit=figs.datatable('HEADING ERRORS BY SECTION',
                        ['Section', 'Errors per 100', 'Direction'],
                        [['overall', '4', 'follows frequent word'],
                         ['bilateral', '3', 'follows frequent word'],
                         ['multilateral', '2', 'follows frequent word'],
                         ['legal and treaties', '5', 'follows frequent word'],
                         ['press and public diplomacy', '6', 'follows frequent word'],
                         ['consular', '19', 'person filed under place']]),
 exhibit_cap='One section carries nearly five times the average error, for one reason.',
 exhibit_note='A misfiled consular record is found, on average, after 6 days rather than under '
              'a minute.',
 voices=[('Rana Deeb', 'Consular Affairs',
          'Take consular records out. Nineteen in a hundred is not a margin, it is a pattern, '
          'and the cost falls on a detained citizen rather than on a file.'),
         ('Karim Dalati', 'Information Security and Records',
          'Flag any document with a citizen’s name for a consular decision. That is forty '
          'minutes a day for your officer rather than forty thousand documents.'),
         ('Maya Sarkis', 'the Diplomatic Institute',
          'Whichever you choose, teach it. An officer who has never chosen a subject heading '
          'cannot check one, and in five years every officer will be checking.')],
 steps=[('Find it', 'What is the consular error rate and its direction?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Maya raise training?'),
        ('Weigh it', 'One officer’s capacity against a pattern that falls on citizens.'),
        ('Decide', 'Who indexes consular records, and what is taught?')],
 analysis=[('Find it. How many consular records are misfiled per hundred?', 'nineteen'),
           ('Compare it. What does Karim propose?', 'flagging any document with a citizen’s name for a consular decision'),
           ('Infer it. What is Maya’s point?', 'that officers who have never chosen a heading cannot check one'),
           ('Weigh it. What is the cost of a misfiled consular record?', 'six days instead of under a minute, and it falls on a citizen'),
           ('Decide. What would you do?', 'answers vary; the flag plus training keeps capacity and closes the pattern')],
 decision='Write the rule for indexing consular records.',
 decision_steps=['Say which documents are flagged, and by what test.',
                 'Say who decides the heading on a flagged document.',
                 'Say what is measured and published.',
                 'Say what new officers are taught and when.'],
 bank=['Any document containing … is flagged for …',
       'The heading on a flagged document is decided by …',
       'The error rate by … is published …',
       'Officers are taught … during …',
       'This is reviewed …'],
 outcome='Documents containing a citizen’s name were flagged for a consular decision, which '
         'came to about thirty minutes a day, and the consular error rate fell from nineteen '
         'per hundred to three within two quarters. The Diplomatic Institute added a '
         'two-hour session on subject headings to the entry course. Maya says the session is '
         'the part she would defend hardest, because the flag depends on an officer who can '
         'tell a case about a person from a case about a place, and that is a skill the '
         'Ministry had stopped teaching when it stopped filing by hand.',
 outcome_q=[('What was flagged, and what did it cost?', 'documents naming a citizen; about thirty minutes a day'),
            ('What did the Institute add?', 'a two-hour session on subject headings in the entry course')],
 tags=[]),

lab=dict(
 title='Brief Lab · Index the incoming post',
 task=['This is the tasking Records used in the first month of indexing, before the error '
       'rate was measured.',
       'It produced an index that looked complete and could not be checked.'],
 draft=['Index the documents.',
        'Give each one a name and some keywords.',
        'Choose a suitable subject.',
        'Fill in the states and dates.',
        'Make it searchable.',
        'As they come in.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says where the subject heading comes from.',
 asked=['A heading from the fixed list of 91',
        'A stated number of keywords',
        'Missing fields marked absent'],
 back=['Headings invented freely, 400 distinct ones',
       '2 to 30 keywords per document',
       'Plausible dates where the document gave none'],
 gap='"The documents" does not say which intake, "some keywords" sets no number, "a suitable '
     'subject" invites invention, and nothing says what to do when a document names no state '
     'or date.',
 back_cap='Four hundred headings, which is not a classification but a second set of file names.',
 back_note='Line three is the failure. Without a fixed list, every document gets its own '
           'heading and the index cannot be searched by subject at all.',
 diagnosis=[('[1] "the documents" — which intake, and from when?', 'unscoped set'),
            ('[2] "some keywords" — how many?', 'unbounded quantity'),
            ('[3] "a suitable subject" — from which list?', 'unscoped set'),
            ('[4] "fill in the states and dates" — and where the document gives none?', 'undefined done'),
            ('[5] "make it searchable" — searchable by whom, to what standard?', 'undefined done'),
            ('[6] "as they come in" — how many a day, and within what time?', 'unbounded quantity')],
 rewrite='Rewrite the tasking so that the heading comes from the fixed list and nothing is '
         'guessed.',
 scaffold=['Who must be able to find the record, and how far ahead',
           'Which intake is covered and which archives are not',
           'The document and the list of 91 headings',
           'The fields, the number of keywords, and what to do with 2 candidate headings',
           'One proposal per document, for acceptance, within a stated time',
           'What to do where a field is absent from the document'],
 bank=['Index … so that … can find it in …',
       'Cover … ; … are out of scope.',
       'Work from … and …',
       'Propose … , 1 … from the list of … and no more than … ; where … , propose both and mark …',
       'Return 1 proposal per … , within …',
       'Where the document names no … , … rather than guessing.'],
 check=['Is the heading tied to a fixed list by number?',
        'Is the keyword count capped?',
        'Is guessing forbidden in words?',
        'Is there a deadline per document?'],
 model=['Index every incoming record so that an officer who was not involved can find it in 4 years from a subject and a date',
        'Records received by the Ministry from 1 January onward; the 2 archives of pre-2015 material are out of scope',
        'The document itself and the Ministry’s list of 91 subject headings',
        'Propose a file name to the Ministry convention, the date as sent, every state named in the document, 1 subject heading from the list of 91 and no more than 5 keywords; where 2 headings would fit, propose both and mark the record for an officer’s decision',
        '1 proposal per document, presented for a records officer’s acceptance, within 1 working day of receipt',
        'Where the document names no state or no date, propose the other fields and mark the missing ones as absent rather than guessing'],
 cost='1 month of records indexed under 400 invented headings, which had to be reclassified by '
      'hand, and 11 documents filed under dates the Ministry had never written.'),

rev_fig=figs.split('COMPARISONS',
                   'Incomplete',
                   ['The system is better.',
                    'Retrieval is much faster.',
                    'This is the most important heading.',
                    'More documents are indexed.'],
                   'Complete',
                   ['Better than folder names, for finding a subject.',
                    'Under a minute against eleven days.',
                    'The most used heading, by 2025 filings.',
                    '19,400 against 11,200.']),
rev_fig_cap='Than what, and by what measure.',
rev=dict(
 read=[('The real problem with records is that documents are', ['lost', 'unfindable', 'destroyed', 'duplicated'], 1),
       ('The weak field in an index is', ['the date', 'the subject heading', 'the file name', 'the state'], 1),
       ('Consular heading errors run', ['at random', 'person filed under place', 'place filed under person', 'by date'], 1),
       ('In the Decision Room, what was flagged?', ['all consular records', 'documents naming a citizen', 'all border cases', 'nothing'], 1)],
 listen_text='Nothing in a ministry is lost; things are unfindable, which is a worse failure '
             'because everybody believes the document is available. So index on receipt, and '
             'state the gain with its basis: not more accurate than a careful records '
             'officer, but faster by a large factor.',
 listen=[('Things are ____________.', 'unfindable'),
         ('Everybody believes the document is ____________.', 'available'),
         ('Index on ____________.', 'receipt'),
         ('____________ by a large factor.', 'Faster')],
 speak=['Compare two ways of finding a document, stating your basis.',
        'Say what you would teach a new officer about subject headings.'],
 write='Write one comparison about your own work with its basis and measure.',
 vocab=[('A term from a fixed list used to classify a document is a ____________.', 'descriptor'),
        ('Information about a document rather than in it is ____________.', 'metadata'),
        ('The agreed rule for how documents are named is a ____________.', 'naming convention'),
        ('A document written to help somebody search a collection is a ____________.', 'finding aid'),
        ('A pointer from one record to a related one is a ____________.', 'cross-reference')],
 gram=[('The index is ____________ (good) than the folder names.', 'better'),
       ('Transit is the ____________ (used) heading.', 'most used'),
       ('Indexing is ____________ (reliable) than memory.', 'more reliable'),
       ('The 2021 file was the ____________ (hard) to find.', 'hardest'),
       ('It is the ____________ (precise) of the three descriptors.', 'most precise')]),

found=['Rename one document you saved this week so a stranger could find it.',
       'Find out whether your office has a naming convention written down.',
       'Choose a subject heading for a document and ask a colleague to choose one too.',
       'Write one comparison about your work with its basis stated.'],
end_line='A document nobody can find is a document the Ministry does not have.',
end_next='Next: One Shape for Every Record',
)
