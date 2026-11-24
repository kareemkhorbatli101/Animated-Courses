# -*- coding: utf-8 -*-
import figs

U = dict(
num=5, title='Names, Dates and Figures',
gram='noun phrases and titles: the order of modifiers',
ai='pulling names, dates, titles and figures out of a document',
strap='CEFR B1 · Grammar: noun phrases and titles · AI: extraction',
cando=['put modifiers before a noun in the right order',
       'write a full official title correctly and in full',
       'pull names, dates and figures out of a document into a list',
       'say what extraction is reliable at and what it is not',
       'check an extracted list against the document it came from'],
hero=('NINE NAMES, EIGHT OF THEM RIGHT',
      ['The list was produced in four seconds and it was almost perfect.',
       'The eighth name was a Deputy Minister, and we met her as an adviser.'],
      [(740, 'teal', 'short'), (1400, 'purple', 'long'),
       (2060, 'orange', 'short'), (2700, 'blue', 'long')]),
hero_cap='The airport, eleven minutes before the aircraft doors opened.',

warm=['Who checks the delegation list in your office, and against what?',
      'What goes wrong when a title is wrong?',
      'Which facts in a document can be pulled out mechanically, and which cannot?'],
read=[
 'Eleven days before the Verenian visit, the embassy sent a note with the delegation list as '
 'an enclosure. It ran to three pages in continuous prose, in the Verenian style, with the '
 'names and functions inside the sentences rather than in a table. Tarek Zayed needed a table '
 'by the following morning.',
 'Lina put the enclosure through an extraction step and asked for a list of every person '
 'named, with their title and their function. The result came back in about four seconds. It '
 'had nine rows, it was correctly spelled, the transliterations followed the Ministry’s own '
 'glossary, and the dates of arrival were right.',
 'Eight of the nine rows were correct. The eighth person was listed as an adviser on economic '
 'affairs. She is in fact a Deputy Minister, and the Verenian text had said so, in a '
 'subordinate clause four lines after her name, which is where the Verenian style puts rank.',
 'Nobody checked, because the list looked finished. It went into the programme, and the '
 'seating at the airport and at the first meeting was arranged on it. A Deputy Minister was '
 'met and seated as an adviser, in front of her own delegation and ours.',
 'Tarek’s view afterwards was that the extraction had done nothing wrong. It had been asked '
 'for titles and it had taken the words next to the names, which is what a title usually is. '
 'In Verenian prose it often is not, and nobody had told the system that, because nobody had '
 'thought of it as a thing you tell anybody.'],
c_a=[('How was the delegation list sent?', 'as an enclosure, in three pages of continuous prose'),
     ('How long did the extraction take?', 'about four seconds'),
     ('How many rows were correct?', 'eight of nine'),
     ('What is the eighth person’s real rank?', 'Deputy Minister'),
     ('Where had the Verenian text said so?', 'in a subordinate clause four lines after her name'),
     ('Why did nobody check?', 'because the list looked finished')],
c_b=[('The list was sent as a table.', 'F'),
     ('The transliterations followed the Ministry’s glossary.', 'T'),
     ('The extraction misspelled the names.', 'F'),
     ('The Verenian text did not mention her rank.', 'F'),
     ('The seating was arranged from the extracted list.', 'T'),
     ('Tarek blamed the extraction step.', 'F')],
c_c=[('It ran to three pages in continuous ____________.', 'prose'),
     ('The transliterations followed the Ministry’s own ____________.', 'glossary'),
     ('She is in fact a Deputy ____________.', 'Minister'),
     ('Which is where the Verenian style puts ____________.', 'rank'),
     ('It had taken the words next to the ____________.', 'names'),
     ('Nobody had thought of it as a thing you ____________ anybody.', 'tell')],
c_d=[('The extraction took the words ( four lines after / next to ) the names.', ['four lines after', 'next to'], 1),
     ('How many rows did the list have?', ['three', 'nine', 'eleven', 'eight'], 1),
     ('What was arranged from the list?', ['the flights', 'the seating', 'the agenda', 'the translation'], 1),
     ('Why did the error survive?', ['the list looked unfinished', 'the list looked finished', 'nobody read it', 'it was late'], 1),
     ('Where does Verenian prose put rank?', ['beside the name', 'in a later subordinate clause', 'in a table', 'nowhere'], 1)],
c_e=('Which order? Put each phrase in the right column.',
     [('a senior Verenian economic adviser', 'correct order'),
      ('an economic senior Verenian adviser', 'wrong order'),
      ('the new three-day official programme', 'correct order'),
      ('the official three-day new programme', 'wrong order'),
      ('a short written ministerial reply', 'correct order'),
      ('a ministerial short written reply', 'wrong order')],
     ['correct order', 'wrong order']),

v_fig_title='WHO IS WHO, AND IN WHAT ORDER',
v_fig=[('people', 'a head of delegation'), ('seal', 'an honorific'), ('doc', 'a nominal roll'),
       ('book', 'a biographical note'), ('clock', 'an itinerary'), ('chart', 'a cross-check')],
v_fig_cap='Six words for getting a person’s name and standing right before you meet them.',
vocab=[
 ('a title', 'the official name of a post, such as Deputy Minister'),
 ('a style', 'the form in which somebody is correctly addressed'),
 ('an honorific', 'a word of respect used before a name or title'),
 ('a rank', 'a person’s level in a service, which fixes their precedence'),
 ('a given name', 'the personal name, as distinct from the family name'),
 ('a surname', 'the family name'),
 ('a transliteration', 'a name written in the letters of another alphabet'),
 ('a nominal roll', 'a list of people by name, in order'),
 ('an itinerary', 'the route and timing of a journey'),
 ('a manifest', 'the official list of who or what is travelling'),
 ('a biographical note', 'a short account of a person’s career, for a principal'),
 ('a diary', 'the record of a principal’s appointments'),
 ('an entry', 'one item in a list or a record'),
 ('a field', 'one named piece of information in a record, such as the date'),
 ('a column', 'one vertical set of entries in a table'),
 ('a cross-check', 'a second check of a fact against a different source'),
 ('a duplicate', 'a second copy of the same entry, often by mistake'),
 ('a variant spelling', 'another accepted way of writing the same name'),
 ('to collate', 'to bring material together in the right order'),
 ('a head of delegation', 'the person who speaks for a delegation')],
v_a=[('A name written in the letters of another alphabet is a ____________.', 'transliteration'),
     ('The official list of who or what is travelling is a ____________.', 'manifest'),
     ('A short account of a person’s career, for a principal, is a ____________.', 'biographical note'),
     ('A second check of a fact against a different source is a ____________.', 'cross-check'),
     ('Another accepted way of writing the same name is a ____________.', 'variant spelling'),
     ('The person who speaks for a delegation is the ____________.', 'head of delegation'),
     ('A person’s level in a service, which fixes their precedence, is their ____________.', 'rank'),
     ('To bring material together in the right order is to ____________ it.', 'collate')],
v_b=[('A style is the form in which', 'somebody is correctly addressed.'),
     ('A nominal roll is a list of people', 'by name, in order.'),
     ('A field is one named piece of information', 'in a record, such as the date.'),
     ('A duplicate is a second copy of the same entry,', 'often by mistake.'),
     ('An itinerary is the route and timing', 'of a journey.')],

g_title='Grammar: noun phrases and the order of modifiers',
g_rule=['Modifiers run in a settled order: opinion, size, age, shape, colour, origin, purpose.',
        'Numbers and compounds take a hyphen before the noun: a three-day visit.',
        'An official title is written in full and is not a description: Deputy Minister.',
        'Three modifiers is the working limit; past that, use a clause instead.'],
g_fig=('LOOSE',
       ['an economic senior Verenian adviser',
        'the official three-day new programme',
        'a three days visit',
        'a ministerial short written reply'],
       'PRECISE',
       ['a senior Verenian economic adviser',
        'the new official three-day programme',
        'a three-day visit',
        'a short written ministerial reply'],
       'four phrases with the order or the hyphen wrong',
       'four in the order an English ear expects'),
g_fig_cap='Nobody can state the rule from memory, and every reader hears a breach of it at once.',
g_a=[('a visit lasting three days → a ____________ visit', 'three-day'),
     ('an adviser from Verenia who is senior and deals with economics → a ____________ adviser', 'senior Verenian economic'),
     ('a programme that is official, new and lasts three days → the ____________ programme', 'new official three-day'),
     ('a reply that is short, written and from the Minister → a ____________ reply', 'short written ministerial'),
     ('a note of two pages → a ____________ note', 'two-page'),
     ('a meeting at a high level held every year → an ____________ meeting', 'annual high-level'),
     ('Write in full: Dep. Min. for Econ. Affairs → ____________', 'Deputy Minister for Economic Affairs'),
     ('a delegation of eleven people → an ____________ delegation', 'eleven-person'),
     ('Unpack: a new official three-day bilateral review process → a process of ____________', 'three days in which the two sides review the relationship')],
g_b=[('Three modifiers is the working ( limit / minimum ).', ['limit', 'minimum'], 0),
     ('Which is correct?', ['a three days visit', 'a three-day visit', 'a three day’s visit', 'a three-days visit'], 1),
     ('Which order is right?', ['an economic senior Verenian adviser', 'a senior Verenian economic adviser', 'a Verenian economic senior adviser', 'an economic Verenian senior adviser'], 1),
     ('An official title should be written', ['as a description', 'in full', 'abbreviated', 'in lower case'], 1),
     ('a note of two pages →', ['a two pages note', 'a two-page note', 'a two-pages note', 'a two page’s note'], 1),
     ('Past three modifiers, use', ['a hyphen', 'a clause', 'a comma', 'capitals'], 1)],

d1=dict(title='Eight of nine',
        fig=(['The list was right.', 'Eight ninths right.'],
             ['Which is the ninth?', 'The one we seated wrongly.']),
        cap='Tarek Zayed and Lina, after the airport.',
        lines=[('Tarek', 'Row eight. Adviser on economic affairs.'),
               ('Lina', 'That is what the list said. I did not write it, the extraction did.'),
               ('Tarek', 'I know. Read me the Verenian text, four lines below her name.'),
               ('Lina', 'In the working version it says, who holds the rank of Deputy Minister.'),
               ('Tarek', 'So it was there. It was just not beside the name.'),
               ('Lina', 'The step took the words next to each name, because that is where a title '
                        'usually is.'),
               ('Tarek', 'In our prose it is. In theirs the rank goes in a clause afterwards, and '
                         'everybody who has worked on Verenia knows that.'),
               ('Lina', 'Nobody told the system.'),
               ('Tarek', 'Nobody told the system, because nobody has ever had to tell anybody. It '
                         'is the kind of thing you learn in your first month and never say aloud '
                         'again.'),
               ('Lina', 'And the cost?'),
               ('Tarek', 'A Deputy Minister was seated as an adviser in front of her own '
                         'delegation. She said nothing, which is worse than if she had.'),
               ('Lina', 'Then the rule is that a title is cross-checked.')],
        a=[('What did row eight say?', 'adviser on economic affairs'),
           ('Where was the rank stated?', 'four lines below the name, in a subordinate clause'),
           ('Why did the extraction miss it?', 'it took the words next to each name, where a title usually is'),
           ('Why had nobody told the system?', 'because it is learned in the first month and never said aloud again'),
           ('What was the cost?', 'a Deputy Minister was seated as an adviser in front of her delegation')],
        b=[('Who holds the rank of Deputy ____________.', 'Minister'),
           ('It was just not beside the ____________.', 'name'),
           ('You learn it in your first ____________ and never say it aloud again.', 'month'),
           ('She said nothing, which is ____________ than if she had.', 'worse')]),
d2=dict(title='What extraction is good at',
        fig=(['So we stop using it.', 'No. We use it properly.'],
             ['What is the difference?', 'Which facts you trust it with.']),
        cap='Lina and Karim Dalati, in the records office.',
        lines=[('Lina', 'After the airport I am inclined not to use extraction at all.'),
               ('Karim', 'That would be the wrong lesson. It read nine names out of three pages of '
                         'prose in four seconds, and got every spelling right.'),
               ('Lina', 'And one title wrong.'),
               ('Karim', 'One title wrong out of nine, where the information was not where it '
                         'normally is. Could you have done better at eleven at night?'),
               ('Lina', 'Probably not. I would have missed something else.'),
               ('Karim', 'So the question is not whether to use it. It is which fields you may '
                         'take from it directly and which you must check.'),
               ('Lina', 'Which are which?'),
               ('Karim', 'Things written in one place, in one form, take them. Names, dates, '
                         'numbers, places. Things assembled from the sense of a passage, check '
                         'them. Rank, function, who is senior to whom.'),
               ('Lina', 'That is a usable rule.'),
               ('Karim', 'It is the whole rule. A field is safe if you could point at it in the '
                         'document with one finger.'),
               ('Lina', 'And if I cannot point at it?'),
               ('Karim', 'Then somebody read the document and decided, and if the somebody was not '
                         'a person, you check.')],
        a=[('What does Karim say the extraction did well?', 'read nine names from three pages in four seconds, with correct spellings'),
           ('What is the real question?', 'which fields may be taken directly and which must be checked'),
           ('Which fields are safe?', 'things written in one place in one form: names, dates, numbers, places'),
           ('Which are not?', 'things assembled from the sense of a passage: rank, function, seniority'),
           ('What is the one-finger test?', 'a field is safe if you could point at it in the document with one finger')],
        b=[('That would be the wrong ____________.', 'lesson'),
           ('Could you have done better at eleven at ____________?', 'night'),
           ('A field is safe if you could ____________ at it with one finger.', 'point'),
           ('Then somebody read the document and ____________.', 'decided')]),

speak=[('Say it correctly',
        ['Student A: describe six things using two or three modifiers each.',
         'Student B: check the order and the hyphens.',
         'Find the phrase that needed a clause instead.']),
       ('Spoken tasking',
        ['Choose a document you take facts out of.',
         'Say which fields you would take directly and which you would check.',
         'Your partner applies the one-finger test to each one.']),
       ('Titles in full',
        ['In pairs, write out three official titles from your own ministry in full.',
         'Say them aloud as you would in an introduction.',
         'Find the one that is usually abbreviated and should not be.'])],

ext_title='Extraction is safe where a fact sits in one place, and unsafe where a fact has to be understood',
ext_fig=figs.datatable('NINE ROWS, AND WHERE EACH FIELD CAME FROM',
                       ['Field', 'Where it sits in the source', 'Safe to take?'],
                       [['surname', 'written once, in one form', 'yes'],
                        ['given name', 'written once, in one form', 'yes'],
                        ['date of arrival', 'written once, as a date', 'yes'],
                        ['flight number', 'written once, as a number', 'yes'],
                        ['function', 'words beside the name', 'usually'],
                        ['rank', 'a clause four lines later', 'no, check it']]),
ext_fig_cap='Four fields you can point at with one finger, and one you cannot.',
ext=[
 'Pulling particular facts out of a document is one of the four operations, and it is the one '
 'with the best ratio of saving to risk. A delegation list buried in three pages of '
 'continuous prose becomes a table in seconds, spellings intact and transliterations '
 'following the Ministry’s own glossary. An officer doing it by hand at eleven at night will '
 'be slower and will miss more.',
 'The reliability, however, is not even across fields, and the division is worth learning '
 'because it is simple. Some facts sit in one place, written once, in one form: a surname, a '
 'date, a flight number, a sum of money. These are read, not interpreted, and extraction is '
 'very good at them.',
 'Other facts are not written anywhere in particular. Rank, function, seniority and '
 'relationship are often carried by the shape of a passage rather than by a phrase, and they '
 'differ by language and by house style. Where one service writes the rank beside the name, '
 'another puts it in a subordinate clause several lines later, and a reader who does not know '
 'that will take the nearest words instead.',
 'This gives a test that any officer can apply in a second. Could you point at this fact in '
 'the document with one finger? If yes, take it from the extraction. If no, somebody has read '
 'the passage and decided, and you must check who that somebody was and against what.',
 'The practical consequence is a short list of fields that are always cross-checked, agreed '
 'in advance and written into the tasking. In a ministry that list almost always contains '
 'rank, title, precedence and anything that determines where a person sits, because those are '
 'the fields where an error is seen by everybody in the room and corrected by nobody.'],
dp1=('Document handling in diplomatic services',
     'Foreign ministries report document handling and information extraction among the '
     'earliest uses adopted, alongside translation, with checking retained for fields that '
     'determine protocol or entitlement.',
     'Source: reported practice in several foreign ministries, 2025–2026.'),
e_a=[('Why is extraction a good ratio of saving to risk?', 'it turns prose into a table in seconds with spellings intact'),
     ('Which facts is it very good at?', 'facts written once, in one place, in one form'),
     ('Which facts is it unreliable at?', 'facts carried by the shape of a passage, such as rank and seniority'),
     ('What is the one-finger test?', 'whether you could point at the fact in the document with one finger'),
     ('What should the tasking contain?', 'a short agreed list of fields that are always cross-checked')],
e_b=[('Extraction reliability is even across all fields.', 'F'),
     ('A surname is read rather than interpreted.', 'T'),
     ('All services write rank beside the name.', 'F'),
     ('The one-finger test takes a long time to apply.', 'F'),
     ('Protocol fields are usually on the cross-check list.', 'T'),
     ('An officer working late will miss less than extraction.', 'F')],

w_model=(
 'Purpose: produce the delegation table for the Verenian visit so that Protocol can seat the '
 'delegation correctly. Scope: the enclosure to the note of 3 May; the programme itself is '
 'out of scope. Inputs: the Verenian enclosure, the Ministry’s transliteration glossary, and '
 'the biographical notes held on 4 of the party. Criteria: 1 row per person with 6 fields — '
 'surname, given name, title in full, function, date of arrival, flight; take surname, given '
 'name, date and flight directly; cross-check title and function against a second source and '
 'name that source in the row. Done: 1 table of 9 rows with a source named in every title '
 'field, by 6 May. Fallback: where a title cannot be cross-checked against a second source, '
 'write the title as unconfirmed and tell Protocol before the seating plan is made.'),
w_fig=figs.spec_card('THE TASKING FOR A DELEGATION TABLE',
                     [('Purpose', 'a delegation table so Protocol can seat them correctly'),
                      ('Scope', 'the enclosure to the note of 3 May'),
                      ('Inputs', 'the enclosure, the transliteration glossary, 4 biographies'),
                      ('Criteria', '6 fields; 4 taken directly, title and function cross-checked'),
                      ('Done', '9 rows, a source named in every title field, by 6 May'),
                      ('Fallback', 'no second source: mark unconfirmed and tell Protocol')]),
w_fig_cap='The criteria line divides the fields you may take from the fields you must check.',
w_task='Write a tasking for a list extracted from a document in your own work.',
w_steps=['Say what the list is for, and who will act on it.',
         'Name the document and what is out of scope.',
         'List the fields, by name, that each row must carry.',
         'Say which fields may be taken directly and which must be cross-checked.',
         'Say what happens where a field cannot be confirmed.'],
w_bank=['Produce … so that … can …',
        'Cover … ; … is out of scope.',
        'Work from … , … and …',
        '1 row per … with … fields — … ; take … directly; cross-check … against …',
        'Where … cannot be cross-checked, … and tell …'],
w_check=['Are the fields named individually?',
         'Is the direct/cross-check division explicit?',
         'Must the second source be named in the row?',
         'Is there a rule for a field that cannot be confirmed?'],

t_title='Pulling names, dates, titles and figures out of a document',
t_fig=figs.split('TWO KINDS OF FIELD',
                 'Point at it with one finger',
                 ['surname and given name',
                  'date of arrival',
                  'flight number',
                  'a sum of money'],
                 'Somebody has to read and decide',
                 ['rank and precedence',
                  'function and portfolio',
                  'who is senior to whom',
                  'what a person is empowered to agree']),
t_fig_cap='The right-hand column is where a correct-looking table goes wrong.',
t_body=[
 'Use extraction wherever a document hides a list inside prose, because this is the cheapest '
 'reliable gain in the whole subject. Three pages of Verenian courtesies become a nine-row '
 'table in seconds, with the spellings right and the transliterations following your own '
 'glossary. Nothing about the work was ever worth a senior officer’s evening.',
 'Then divide the fields before you look at the result. Some facts are written once, in one '
 'place, in one form, and those you may take as they come. Others are not written anywhere '
 'exactly: rank, function and seniority are often carried by the shape of a passage, and '
 'different services carry them in different places. Apply the one-finger test and the '
 'division makes itself.',
 'Finally, write the cross-checked fields into the tasking rather than relying on your own '
 'care. In a ministry that list will almost always include title, rank and anything that '
 'decides where a person sits, because a protocol error is seen by everybody in the room, '
 'corrected by nobody, and remembered by the person it was done to.'],
t_say=[('Name the fields: ', 'Six fields: surname, given name, title, function, date, flight.'),
       ('Apply the test: ', 'Can I point at this with one finger?'),
       ('Fix the check: ', 'Title and function are cross-checked and the source is named.')],
t_bound=('Extraction finds what a document states. It cannot find what a document assumes, '
         'it cannot tell that a title is out of date, and it reads the nearest words when the '
         'fact it was asked for is somewhere else. A complete-looking table is not evidence '
         'that the document contained all of it.'),
t_a=[('Six fields: surname, given name, title, function, date, ____________.', 'flight'),
     ('Can I ____________ at this with one finger?', 'point'),
     ('Title and function are cross-checked and the ____________ is named.', 'source'),
     ('Different services carry rank in different ____________.', 'places'),
     ('A protocol error is corrected by ____________.', 'nobody'),
     ('It reads the nearest ____________ when the fact is somewhere else.', 'words')],
t_b_rubric='Rewrite each field instruction so that it says how the field is to be got.',
t_b=[('Get the delegation list.', 'one row per person with six named fields, from the enclosure'),
     ('Include their titles.', 'cross-check each title against a second source and name it'),
     ('Make sure it is accurate.', 'take surname, given name, date and flight directly; check the rest'),
     ('Flag anything unclear.', 'where a title has no second source, write it as unconfirmed')],

case=dict(
 title='The Decision Room · The seating that could not be undone',
 brief=[
  'A Deputy Minister of Verenia was met at the airport and seated at the first meeting as an '
  'adviser, on a delegation table extracted from the embassy’s enclosure. She said nothing at '
  'the time and nothing since.',
  'The error was found on the second day, when Protocol compared the table with a '
  'biographical note. The remaining three days of the programme were corrected before the '
  'next session.',
  'Dr Mourad wants the matter raised with the embassy and an apology offered. Tarek Zayed '
  'does not. The Verenian embassy has given no sign that it noticed.'],
 exhibit=figs.datatable('WHAT WAS AFFECTED',
                        ['', 'Position', 'Note'],
                        [['sessions seated wrongly', '2 of 7', 'days one and two'],
                         ['corrected from session 3', 'yes', 'without comment'],
                         ['Verenian reaction', 'none recorded', '—'],
                         ['our record of the error', 'protocol file only', 'not in the visit report'],
                         ['biographical note held', 'yes, since March', 'nobody opened it'],
                         ['cost of opening it', 'about 2 minutes', '—']]),
 exhibit_cap='The fact that would have prevented this had been on the file for seven weeks.',
 exhibit_note='The biographical notes are prepared routinely for every visiting delegation and '
              'are read by Protocol on the morning of arrival, which was too late here.',
 voices=[('Dr Hana Mourad', 'Policy Planning',
          'Raise it and apologise. If they noticed, an apology costs us nothing and buys '
          'something. If they did not, we have told them we take precedence seriously, which '
          'is also worth having.'),
         ('Tarek Zayed', 'Protocol',
          'Raising it tells a foreign ministry that we seated their Deputy Minister as an '
          'adviser for two days. If she chose to say nothing, the courteous answer is to let '
          'her choose that. We correct the file and we correct the process.'),
         ('Lina Khalil', 'desk officer, Bilateral Affairs',
          'The part nobody is discussing is that the biographical note had been on the file '
          'since March, and the reason nobody opened it is that the table looked complete.')],
 steps=[('Find it', 'How many sessions were affected, and what was done?'),
        ('Compare it', 'What was already on the file?'),
        ('Infer it', 'Why does Lina say the table itself was the problem?'),
        ('Weigh it', 'An apology that informs against a silence that respects a choice.'),
        ('Decide', 'Is the matter raised, and what changes?')],
 analysis=[('Find it. How many sessions were seated wrongly?', 'two of seven'),
           ('Compare it. What had been on the file since March?', 'the biographical note giving her rank'),
           ('Infer it. What is Lina’s point?', 'that a complete-looking table stopped anybody opening the other source'),
           ('Weigh it. What does Tarek weigh?', 'the Deputy Minister’s own choice to say nothing'),
           ('Decide. What would you do?', 'answers vary; the process change is required either way')],
 decision='Write what the Ministry does about the error and the process.',
 decision_steps=['Say whether the embassy is told, and by whom.',
                 'Say when biographical notes are read in future.',
                 'Say which fields are always cross-checked.',
                 'Say what the visit report records.'],
 bank=['The embassy …',
       'Biographical notes are read …',
       'The fields … are always …',
       'The visit report records …',
       'This is reviewed …'],
 outcome='The Ministry did not raise the matter with the embassy and did record it in the '
         'visit report. Biographical notes are now read against the delegation table on the '
         'day the table is made, not on the morning of arrival, and title, rank and precedence '
         'are cross-checked fields in every extraction tasking. Dr Mourad, who had wanted an '
         'apology, accepts the outcome and notes that she has no way of knowing whether it was '
         'right, because the one party who could say has said nothing, which was her argument '
         'for asking.',
 outcome_q=[('When are biographical notes now read?', 'on the day the delegation table is made'),
            ('Why does Dr Mourad say the decision cannot be tested?', 'because the only person who could say whether it mattered has said nothing')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Get me the delegation list',
 task=['This is the tasking Tarek gave Lina at six in the evening, eleven days before the '
       'visit, while walking to another meeting.',
       'It produced a table that was ninety per cent right, and the missing ten per cent was '
       'the part that decides where people sit.'],
 draft=['Get me the delegation list out of their enclosure.',
        'Names, titles, the usual fields.',
        'Make sure the spellings are right.',
        'Include anyone important.',
        'Table format, nice and clear.',
        'First thing tomorrow.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines that name one field, one format and no check at all.',
 asked=['Six named fields, one row per person',
        'Title and function cross-checked',
        'A source named in every title field'],
 back=['A clean 9-row table',
       'Spellings and transliterations correct',
       '1 title wrong, nothing marked'],
 gap='"The usual fields" names no fields, "anyone important" sets no test and no set, "nice '
     'and clear" is a format instruction, and nothing anywhere says which fields must be '
     'checked against a second source.',
 back_cap='A table that looked finished, which is why nobody opened the biography on the file.',
 back_note='"Make sure the spellings are right" asked for the one thing the extraction is '
           'reliably good at, and asked for nothing about the field that was wrong.',
 diagnosis=[('[1] "the delegation list" — from which enclosure, of what date?', 'unscoped set'),
            ('[2] "the usual fields" — which fields, named how?', 'unscoped set'),
            ('[3] "make sure the spellings are right" — against what source?', 'unstated criterion'),
            ('[4] "anyone important" — important by what test?', 'unstated criterion'),
            ('[5] "nice and clear" — finished meaning formatted, or checked?', 'undefined done'),
            ('[6] "first thing tomorrow" — finished meaning checked, or produced?', 'undefined done')],
 rewrite='Rewrite the tasking so that the fields are named and the checked fields are '
         'separated from the direct ones.',
 scaffold=['What the table is for, and who acts on it',
           'Which enclosure is covered, and what is not',
           'The glossary and the biographies to work from',
           'The fields, which may be taken directly, and which must be cross-checked',
           'How many rows come back, with what named in each',
           'What to do where a field cannot be confirmed'],
 bank=['Produce … so that … can …',
       'Cover … ; … is out of scope.',
       'Work from … , … and the biographical notes held on …',
       '1 row per person with … fields — … ; take … directly; cross-check … and name that source in the row.',
       'Return 1 table of … rows with … , by …',
       'Where … cannot be cross-checked, write … and tell …'],
 check=['Are all six fields named?',
        'Is it said which fields are taken directly?',
        'Must the cross-check source appear in the row?',
        'Is there a rule for an unconfirmable title?'],
 model=['Produce the delegation table for the Verenian visit so that Protocol can seat the delegation correctly',
        'The enclosure to the note of 3 May; the programme itself is out of scope',
        'The Verenian enclosure, the Ministry’s transliteration glossary, and the biographical notes held on 4 of the party',
        '1 row per person with 6 fields — surname, given name, title in full, function, date of arrival, flight; take surname, given name, date and flight directly; cross-check title and function against a second source and name that source in the row',
        '1 table of 9 rows with a source named in every title field, by 6 May',
        'Where a title cannot be cross-checked against a second source, write the title as unconfirmed and tell Protocol before the seating plan is made'],
 cost='2 sessions of a 7-session visit seated wrongly, a Deputy Minister placed among '
      'advisers, and a biographical note that had been on the file for 7 weeks unopened.'),

rev_fig=figs.split('MODIFIERS AND TITLES',
                   'Wrong',
                   ['an economic senior Verenian adviser',
                    'a three days visit',
                    'the official three-day new programme',
                    'Dep. Min. for Econ. Affairs'],
                   'Right',
                   ['a senior Verenian economic adviser',
                    'a three-day visit',
                    'the new official three-day programme',
                    'Deputy Minister for Economic Affairs']),
rev_fig_cap='Order, hyphen, order, and a title written out in full.',
rev=dict(
 read=[('Extraction is most reliable for facts that are', ['implied', 'written once in one place', 'repeated', 'important'], 1),
       ('Rank and seniority are often carried by', ['a phrase beside the name', 'the shape of a passage', 'a table', 'a footnote'], 1),
       ('The one-finger test asks whether you can', ['read the fact', 'point at the fact', 'translate the fact', 'date the fact'], 1),
       ('In the Decision Room, what had been on the file since March?', ['the enclosure', 'the biographical note', 'the programme', 'the seating plan'], 1)],
 listen_text='Use extraction wherever a document hides a list inside prose, because this is '
             'the cheapest reliable gain in the whole subject. Then divide the fields before '
             'you look at the result. Some facts are written once, in one place, in one form. '
             'Others are carried by the shape of a passage, and different services carry them '
             'in different places.',
 listen=[('Wherever a document hides a list inside ____________.', 'prose'),
         ('Divide the fields before you look at the ____________.', 'result'),
         ('Written once, in one place, in one ____________.', 'form'),
         ('Carried by the ____________ of a passage.', 'shape')],
 speak=['Name three fields you would take directly from an extraction and three you would check.',
        'Apply the one-finger test to each one aloud.'],
 write='Write one tasking line that separates direct fields from cross-checked fields.',
 vocab=[('A name written in the letters of another alphabet is a ____________.', 'transliteration'),
        ('The official list of who or what is travelling is a ____________.', 'manifest'),
        ('A second check of a fact against a different source is a ____________.', 'cross-check'),
        ('The person who speaks for a delegation is the ____________.', 'head of delegation'),
        ('To bring material together in the right order is to ____________ it.', 'collate')],
 gram=[('a visit lasting three days → a ____________ visit', 'three-day'),
       ('a note of two pages → a ____________ note', 'two-page'),
       ('an adviser from Verenia who is senior and deals with economics → a ____________ adviser', 'senior Verenian economic'),
       ('a meeting at a high level held every year → an ____________ meeting', 'annual high-level'),
       ('Write in full: Dep. Min. for Econ. Affairs → ____________', 'Deputy Minister for Economic Affairs')]),

found=['Take one document and list which fields pass the one-finger test.',
       'Write down the fields your office always cross-checks.',
       'Find a title in your files that is abbreviated and should not be.',
       'Open the biographical note before the table, not after.'],
end_line='A field is safe if you could point at it in the document with one finger.',
end_next='Next: Sorting the Morning',
)
