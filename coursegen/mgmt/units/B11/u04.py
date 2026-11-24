# -*- coding: utf-8 -*-
import figs

U = dict(
num=4, title='Exactly How Much',
gram='countable and uncountable with exact measures',
ai='extracting structure from unstructured documents',
strap='CEFR B1 · Grammar: countable and uncountable with exact measures · AI: extracting structure from unstructured documents',
cando=['use the right measure word with a countable or uncountable noun',
       'replace "a lot of information" with a measurable quantity',
       'name the fields I want pulled out of a document, one by one',
       'explain what extraction can and cannot guarantee about a source',
       'write a tolerance, so that near enough is defined rather than assumed'],
hero=('SIXTY SUPPLIER INVOICES, NONE OF THEM THE SAME SHAPE',
      ['Every one of them contains the same six facts.',
       'No two of them put those facts in the same place.'],
      [(900, 'grey', 'short'), (1650, 'purple', 'long'), (2400, 'blue', 'short')]),
hero_cap='Extraction work: the facts are there, buried in sixty different layouts.',

warm=['What is the difference between "a lot of invoices" and "sixty invoices"?',
      'Which facts appear on every invoice you have ever seen?',
      'When is "about right" good enough, and when is it not?'],
read=[
 'Samuel Boateng’s logistics brokerage receives about sixty supplier invoices a month, from '
 'about forty different suppliers, and no two of those suppliers lay out an invoice the same '
 'way. Some put the total at the bottom; some put it in a box at the top. Some call it Total '
 'Due and some call it Balance Payable and one of them calls it, for reasons nobody has ever '
 'established, Position.',
 'Samuel used to type the numbers into a spreadsheet himself, on Sunday evenings, and it '
 'took him between two and three hours. He asked Arclight whether that could stop. It could, '
 'and the work of making it stop had almost nothing to do with the typing and almost '
 'everything to do with deciding what, exactly, he wanted pulled out.',
 'Dalia sat with him for forty minutes and they listed six fields: supplier name, invoice '
 'number, invoice date, net amount, tax amount, total. It sounds trivial written down like '
 'that. It was not trivial at all, because Samuel discovered during the conversation that '
 'he did not have a rule for what to do when an invoice shows two dates.',
 'There were four such problems by the end of the forty minutes, and all four had been '
 'resolved by Samuel on Sunday evenings for three years without him noticing he was '
 'resolving them. Two dates: use the later one. Amount in a foreign currency: record both, '
 'flag it. No tax line at all: record zero, flag it. A credit note: do not record it here.',
 'The run now takes four minutes and produces a spreadsheet with six columns and a flag '
 'column. Samuel checks the flags, which average seven a month, and does nothing else. He '
 'says the two hours were never the problem. The problem was that nobody had ever written '
 'down what he was actually doing with them.'],
c_a=[('How many supplier invoices does Samuel receive each month?', 'about sixty'),
     ('What does one supplier call the total?', 'Position'),
     ('How long did the Sunday typing take?', 'between two and three hours'),
     ('What six fields did they list?', 'supplier name, invoice number, invoice date, net amount, tax amount, total'),
     ('What does Samuel say the real problem was?', 'that nobody had written down what he was doing with the invoices')],
c_b=[('The forty suppliers all use the same invoice layout.', 'F'),
     ('Samuel used to do the typing on Sunday evenings.', 'T'),
     ('The hard part was the typing.', 'F'),
     ('Samuel had a written rule for invoices showing two dates.', 'F'),
     ('The run now produces a flag column as well as six fields.', 'T'),
     ('Samuel checks about seven flags a month.', 'T')],
c_c=[('No two suppliers lay out an invoice the same ____________.', 'way'),
     ('One of them calls the total ____________.', 'Position'),
     ('They listed six ____________.', 'fields'),
     ('Two dates: use the ____________ one.', 'later'),
     ('A ____________ note is not recorded here.', 'credit'),
     ('The flags average ____________ a month.', 'seven')],
c_d=[('The difficult part of the work was ( deciding / typing ).', ['deciding', 'typing'], 0),
     ('Samuel’s four rules had previously existed', ['in writing', 'in his head, unnoticed', 'in the software', 'nowhere at all'], 1),
     ('The flag column exists so that', ['everything is checked', 'only the unusual cases are checked', 'nothing is checked', 'the total is correct'], 1),
     ('"Record both, flag it" is a rule for', ['two dates', 'foreign currency', 'no tax line', 'credit notes'], 1),
     ('The run now takes', ['two hours', 'forty minutes', 'four minutes', 'seven minutes'], 2)],
c_e=('Countable or uncountable? Put each one in the right column.',
     [('invoice', 'Countable'), ('information', 'Uncountable'),
      ('field', 'Countable'), ('evidence', 'Uncountable'),
      ('document', 'Countable'), ('data', 'Uncountable')],
     ['Countable', 'Uncountable']),

v_fig_title='SIX FIELDS AND A FLAG',
v_fig=[('doc', 'free text'), ('scale', 'a field'), ('bank', 'a record'),
       ('chart', 'a subtotal'), ('coin', 'a currency'), ('note', 'a timestamp')],
v_fig_cap='What goes in, and the shape it has to come out in.',
vocab=[
 ('field', 'one named piece of information in a record, such as the date'),
 ('record', 'one complete set of fields about a single thing'),
 ('line item', 'one priced row on an invoice or order'),
 ('subtotal', 'the total of part of a list, before other amounts are added'),
 ('currency', 'the money system an amount is expressed in'),
 ('decimal', 'the part of a number written after the point'),
 ('rounding', 'replacing a number with a nearby simpler one'),
 ('tolerance', 'the amount of difference you have agreed to accept'),
 ('timestamp', 'the exact date and time something was recorded'),
 ('reference', 'a code used to identify one document among many'),
 ('metadata', 'information about a document rather than information in it'),
 ('parse', 'to work out the structure of something written'),
 ('structured', 'already arranged in named fields, such as a spreadsheet'),
 ('unstructured', 'written freely, with no fields marked out'),
 ('free text', 'writing with no fixed form, as in an email or a note'),
 ('header', 'the information at the top of a document or a column'),
 ('schema', 'the agreed list of fields a record must contain'),
 ('mismatch', 'a difference between two things that should agree'),
 ('reconcile', 'to compare two records and account for every difference'),
 ('digit', 'a single figure from 0 to 9')],
v_a=[('Supplier name is one ____________; invoice date is another.', 'field'),
     ('An email is ____________ text: nothing in it is labelled.', 'free'),
     ('The agreed list of fields a record must contain is the ____________.', 'schema'),
     ('We accept a ____________ of two cents on the total.', 'tolerance'),
     ('There is a ____________ between the ledger and the bank statement.', 'mismatch'),
     ('Every month we ____________ the two records and explain each difference.', 'reconcile'),
     ('The exact date and time of recording is the ____________.', 'timestamp'),
     ('A spreadsheet is ____________ data; a letter is not.', 'structured')],
v_b=[('A line item is one priced row', 'on an invoice or an order.'),
     ('Metadata is information about a document', 'rather than information in it.'),
     ('To parse something is to work out', 'the structure of what is written.'),
     ('A subtotal is the total of part of a list', 'before other amounts are added.'),
     ('Rounding means replacing a number', 'with a nearby simpler one.')],

g_title='Grammar: countable and uncountable nouns with exact measures',
g_rule=['Countable nouns take a number directly: six fields, sixty invoices, two dates.',
        'Uncountable nouns need a measure: three pages of text, two hours of work.',
        'Information, evidence, data, advice and work are uncountable in English.',
        'In a brief, every uncountable noun needs a unit, or it is not a quantity at all.'],
g_fig=('LOOSE',
       ['Pull out a lot of information.',
        'There is too much data to check.',
        'Give me some evidence for the figure.',
        'That is a great deal of work.'],
       'PRECISE',
       ['Pull out these 6 fields per invoice.',
        'There are 1,900 rows to check.',
        'Give me the 2 source lines for the figure.',
        'That is about 3 hours of work a week.'],
       'uncountable, so unmeasured',
       'the unit makes it countable'),
g_fig_cap='The right-hand column is the same sentence with a unit attached.',
g_a=[('Pull out six ____________ from every invoice. (field)', 'fields'),
     ('There is too much ____________ to check by hand. (data)', 'data'),
     ('Give me the two source ____________ for that figure. (line)', 'lines'),
     ('That is about three ____________ of work a week. (hour)', 'hours'),
     ('He needs more ____________ before he will sign. (evidence)', 'evidence'),
     ('We received sixty ____________ last month. (invoice)', 'invoices'),
     ('There are four ____________ of free text on page two. (paragraph)', 'paragraphs'),
     ('She gave me one piece of ____________ worth having. (advice)', 'advice'),
     ('Seven ____________ were raised in March. (flag)', 'flags')],
g_b=[('There ( are / is ) too much data to check.', ['are', 'is'], 1),
     ('Pull out six ____ per invoice.', ['field', 'fields', 'field’s', 'the field'], 1),
     ('He needs more ____ before he signs.', ['evidences', 'evidence', 'an evidence', 'evidence’s'], 1),
     ('That is three ____ of work a week.', ['hour', 'hours', 'hourly', 'the hour'], 1),
     ('She gave me one ____ of advice.', ['piece', 'number', 'amount', 'item'], 0),
     ('We received sixty ____ last month.', ['invoice', 'invoices', 'invoicing', 'of invoices'], 1)],

d1=dict(title='Forty minutes that saved three years of Sundays',
        fig=(['Which date do you use?', 'The later one. Obviously.'],
             ['Obviously is doing a lot of work there.', 'Yes. Write it down.']),
        cap='Dalia and Samuel Boateng, listing the fields.',
        lines=[('Dalia', 'Six fields. Supplier, number, date, net, tax, total. Agreed?'),
               ('Samuel', 'Agreed. That is everything I type.'),
               ('Dalia', 'What do you do when an invoice shows two dates?'),
               ('Samuel', 'The later one. Obviously.'),
               ('Dalia', 'Obviously is doing a lot of work in that sentence.'),
               ('Samuel', 'It is the one I have always used. I have never thought about it.'),
               ('Dalia', 'Then it is a rule and it has never been written down. What else?'),
               ('Samuel', 'Foreign currency. I record both and I put a note in the margin.'),
               ('Dalia', 'That is a flag. What about an invoice with no tax line?'),
               ('Samuel', 'Zero. And another note, because it is usually a mistake.'),
               ('Dalia', 'Four rules in twenty minutes, none of which existed on paper.'),
               ('Samuel', 'They existed. They lived in my Sunday evenings.')],
        a=[('How many fields do they agree on?', 'six'),
           ('What is Samuel’s rule for two dates?', 'use the later one'),
           ('Why does Dalia object to the word "obviously"?', 'because it hides a real rule that has never been written down'),
           ('What does Samuel do with a foreign currency amount?', 'records both and adds a note, which is a flag'),
           ('Where does Samuel say the rules lived?', 'in his Sunday evenings')],
        b=[('Six ____________. Supplier, number, date, net, tax, total.', 'fields'),
           ('The ____________ one. Obviously.', 'later'),
           ('That is a ____________.', 'flag'),
           ('They lived in my ____________ evenings.', 'Sunday')]),
d2=dict(title='Two cents',
        fig=(['The total is two cents out.', 'Two cents.'],
             ['It is out. That is the point.', 'Then set the tolerance.']),
        cap='Kenji Watanabe and Jonas, over a reconciliation.',
        lines=[('Kenji', 'Forty-one of the sixty reconcile exactly. Nineteen are out by small amounts.'),
               ('Jonas', 'How small?'),
               ('Kenji', 'Between one and four cents. Rounding on the tax line.'),
               ('Jonas', 'So it is working. Rounding differences are expected.'),
               ('Kenji', 'It is out. Expected and out are different words.'),
               ('Jonas', 'Do you want it to flag a two-cent difference sixty times a month?'),
               ('Kenji', 'I want to decide that, rather than have it decided for me.'),
               ('Jonas', 'Fair. What tolerance do you want?'),
               ('Kenji', 'Five cents, flagged above that. And a monthly total of the differences.'),
               ('Jonas', 'The monthly total is a good idea. Why that?'),
               ('Kenji', 'Because two cents sixty times a month is fourteen euros a year, and I would rather know than assume.'),
               ('Jonas', 'Then it is written down and it is yours. That is all I wanted.')],
        a=[('How many of the sixty reconcile exactly?', 'forty-one'),
           ('What is causing the small differences?', 'rounding on the tax line'),
           ('What does Kenji object to?', 'having the tolerance decided for him rather than deciding it'),
           ('What tolerance does he set?', 'five cents, flagged above that'),
           ('Why does he want a monthly total?', 'because small differences repeated add up to a figure he would rather know than assume')],
        b=[('Nineteen are out by small ____________.', 'amounts'),
           ('Expected and out are different ____________.', 'words'),
           ('What ____________ do you want?', 'tolerance'),
           ('I would rather know than ____________.', 'assume')]),

speak=[('Name the fields',
        ['Student A: describe a document you handle regularly. Do not say what is on it.',
         'Student B: ask questions until you can list every field it contains.',
         'Count the questions. The number is how undefined the document was.']),
       ('Spoken specification: brief an extraction',
        ['Choose a real document type: an invoice, a CV, a booking, a form.',
         'Brief your partner aloud: name the source, the fields, and one awkward case.',
         'Your partner must repeat the awkward-case rule back. That is the part that matters.']),
       ('Put a unit on it',
        ['One of you says five sentences containing information, work, data, evidence or advice.',
         'The other rewrites each one with a unit and a number.',
         'Decide which of the five was hardest to measure, and why.'])],

ext_title='The facts are already there; what is missing is the shape',
ext_fig=figs.datatable('THE SAME SIX FACTS, FORTY DIFFERENT LAYOUTS',
                       ['Field', 'Appears as', 'How often it moves'],
                       [['total', 'Total Due / Balance Payable / Position', 'every supplier'],
                        ['invoice date', 'top right, or beside the number', 'most'],
                        ['tax', 'a line, a box, or absent', 'about a third'],
                        ['reference', '6 to 12 characters, no pattern', 'every supplier'],
                        ['supplier name', 'letterhead, or footer only', 'a few']]),
ext_fig_cap='Extraction is easy. Agreeing what counts as the total is the work.',
ext=[
 'Most of the documents a small company handles are unstructured, which is a technical way '
 'of saying that the information in them is not labelled. An invoice contains a total, but '
 'nothing in the file says this is the total; a human being knows it because of where it '
 'sits, what word is next to it, and what the other numbers add up to. Extraction is the '
 'work of turning that into something a machine can hold.',
 'The useful thing about extraction, compared with almost everything else in this book, is '
 'that it has right answers. The total on an invoice is a fact. Either the figure pulled out '
 'matches the figure on the page or it does not, and checking is a matter of looking. That '
 'makes extraction the cheapest place for a small company to start, and the easiest place to '
 'prove to a doubtful colleague that the work is real.',
 'The difficulty is never the pulling out. The difficulty is in the four or five cases a '
 'month where the document does not behave, and those cases are where the value of the '
 'conversation lies. Two dates on one invoice. A credit note that looks exactly like an '
 'invoice except for a minus sign. An amount in a currency nobody expected. A tax line that '
 'is missing because the supplier is not registered for tax.',
 'Every one of those has always been decided by somebody, usually without noticing. The '
 'person who does the job has a rule, the rule is consistent, and the rule has never been '
 'said out loud. Extraction work forces it into the open, and that is most of why the first '
 'conversation takes forty minutes rather than four.',
 'This is also why the flag column matters more than the six data columns. A run that '
 'returns sixty rows and no flags is telling you that nothing was difficult, which is '
 'usually false. A run that returns sixty rows and seven flags is telling you where to look, '
 'and seven things to look at on a Sunday evening is not a job at all.'],
dp1=('Where the time goes',
     'Studies of document-handling work in small firms typically find that exception cases, '
     'though a small share of volume, account for a disproportionate share of the time spent.',
     'Source: general document-process research, 2026. Proportions differ widely by document type.'),
e_a=[('What does "unstructured" mean here?', 'the information in the document is not labelled'),
     ('Why does a person know which number is the total?', 'from where it sits, the word next to it, and what the other numbers add up to'),
     ('Why is extraction a good place to start?', 'because it has right answers that can be checked by looking'),
     ('Where does the real difficulty lie?', 'in the four or five cases a month where the document does not behave'),
     ('Why does the writer say the flag column matters most?', 'because it tells you where to look, instead of implying nothing was difficult')],
e_b=[('An invoice file contains a label saying which number is the total.', 'F'),
     ('Extraction results can be checked against the source document.', 'T'),
     ('The writer says pulling the data out is the hard part.', 'F'),
     ('A credit note can look almost identical to an invoice.', 'T'),
     ('A run with no flags always means nothing was difficult.', 'F'),
     ('Exception cases take a disproportionate share of the time.', 'T')],

w_model=(
 'Purpose: stop Samuel typing supplier invoices on Sunday evenings. Scope: every supplier '
 'invoice received in the month; exclude credit notes, which carry a minus sign in the total '
 'box. Inputs: the invoice folder for the month and the 6-field schema dated 2 March. '
 'Criteria: pull supplier name, invoice number, invoice date, net, tax and total; where an '
 'invoice shows 2 dates use the later; record 0 tax where no tax line appears, and flag it; '
 'record both amounts for any invoice not in euros, and flag it. Done: 1 spreadsheet of 6 '
 'columns plus a flag column, and a count of flags. Fallback: if the total cannot be read '
 'with certainty, leave the row blank and flag it rather than guessing.'),
w_fig=figs.spec_card('AN EXTRACTION BRIEF',
                     [('Purpose', 'Stop the Sunday typing'),
                      ('Scope', 'All supplier invoices this month, credit notes excluded'),
                      ('Inputs', 'The month folder and the 6-field schema'),
                      ('Criteria', '6 named fields, plus the 3 awkward-case rules'),
                      ('Done', 'One sheet, 7 columns, and a flag count'),
                      ('Fallback', 'Cannot read it: blank and flag, never guess')]),
w_fig_cap='The Criteria line holds the four rules that used to live in somebody’s head.',
w_task='Write an extraction brief for a document type you handle regularly.',
w_steps=['Name the document type and where the documents actually live.',
         'List every field you want, one by one. Do not write "the usual details".',
         'Write a rule for at least two awkward cases you know occur.',
         'Say what should be flagged rather than decided.',
         'Make the Fallback line say blank and flag, not guess.'],
w_bank=['Pull the following … fields from every …', 'Where a document shows two … , use the …',
        'Record … and flag it where …', 'Return … columns plus a flag column.',
        'If … cannot be read with certainty, …'],
w_check=['Have you listed the fields individually, or hidden them behind a phrase?',
         'Does your brief contain a rule for at least two awkward cases?',
         'Is there a flag column, and does anything actually go in it?',
         'Does the Fallback forbid guessing, in those words?'],

t_title='Extracting structure from unstructured documents',
t_fig=figs.handover('EXTRACTION, AND WHERE A PERSON STILL SITS',
                    ['Read the 60 invoices', 'Pull the 6 fields', 'Raise a flag on any awkward case'],
                    'Samuel checks 7 flags and signs the sheet',
                    'Seven minutes replaces three hours.'),
t_fig_cap='The person does not disappear. The person moves to the seven cases that need them.',
t_body=[
 'An extraction brief is a list, and the discipline is to write the list out in full rather '
 'than gesturing at it. The usual details is not a list. Supplier name, invoice number, '
 'invoice date, net amount, tax amount, total is a list, and it takes eleven seconds longer '
 'to write. Every field you leave off the list is a field somebody will have to add by hand '
 'later, one row at a time.',
 'Then write the awkward cases down, because they are the whole of the difficulty and they '
 'are already decided. Ask the person who does the job what they do when the document is '
 'strange. They will say it is obvious, and then they will describe a rule they have been '
 'applying consistently for three years without ever saying it aloud. Write that sentence '
 'down exactly as they say it.',
 'Finally, insist on a flag rather than a guess. A blank cell with a flag beside it costs '
 'somebody four seconds. A plausible wrong number costs whatever it costs, discovered later, '
 'by somebody else. The instruction that produces the first rather than the second is one '
 'sentence long, and it is the sentence that most briefs do not contain.'],
t_say=[('Name the fields: ', 'Pull supplier, number, date, net, tax and total from each one.'),
       ('Name the awkward case: ', 'Where an invoice shows two dates, use the later one.'),
       ('Forbid the guess: ', 'If the total cannot be read with certainty, leave it blank and flag it.')],
t_bound=('Extraction does not tell you whether the document is correct. A supplier who has '
         'invoiced you twice for the same delivery will have both invoices extracted '
         'perfectly, into neat rows, with no flag at all. Pulling a figure out faithfully is '
         'not the same as the figure being right.'),
t_a=[('Pull supplier, number, date, net, tax and ____________ from each one.', 'total'),
     ('Where an invoice shows two dates, use the ____________ one.', 'later'),
     ('If the total cannot be read with certainty, leave it blank and ____________ it.', 'flag'),
     ('The usual details is not a ____________.', 'list'),
     ('Ask the person who does the job what they do when the document is ____________.', 'strange'),
     ('A plausible wrong number costs whatever it costs, discovered ____________.', 'later')],
t_b_rubric='Name the field list that each vague phrase is hiding.',
t_b=[('Pull out the usual details.', 'name the fields individually: supplier, number, date, net, tax, total'),
     ('Get the key information from each CV.', 'name the fields: name, current role, years of experience, languages'),
     ('Take the important bits off the booking form.', 'name the fields: passenger, date, route, reference, price'),
     ('Just grab what matters from the contract.', 'name the fields: parties, start date, notice period, value, renewal date')],

case=dict(
 title='Decision Clinic · The month the totals were right and the ledger was wrong',
 brief=[
  'The extraction run has been going for four months and Samuel has stopped doing Sunday '
  'evenings. In month four, Kenji notices that the monthly supplier total is about 3,100 '
  'euros higher than the same month last year, and the business has not grown.',
  'Every extracted row is correct. Dalia checks forty of them by hand and every figure '
  'matches its invoice exactly. Jonas points out, reasonably, that this is what success '
  'looks like, and that supplier prices go up.',
  'Marta asks a different question: how many invoices were there last year, and how many '
  'are there now? Last year, fifty-four. This month, sixty-one. Nobody has looked at why.'],
 exhibit=figs.datatable('MONTH FOUR, BESIDE THE SAME MONTH LAST YEAR',
                        ['', 'Last year', 'This month', 'Change'],
                        [['invoices received', '54', '61', '+7'],
                         ['suppliers', '38', '40', '+2'],
                         ['total', '28,400', '31,500', '+3,100'],
                         ['extraction errors found', 'n/a', '0 of 40 checked', '—'],
                         ['duplicates checked for', 'by Samuel, weekly', 'nobody', '—']]),
 exhibit_cap='Every number in the third column is correct, and the last row is the problem.',
 exhibit_note='The extraction is faultless. The weekly duplicate check that Samuel used to '
              'perform while typing has not happened since January.',
 voices=[('Jonas Riedel', 'co-founder, systems',
          'The run is doing exactly what it was asked to do, and doing it perfectly. Prices '
          'rise. Seven more invoices is seven more suppliers invoicing.'),
         ('Marta Olsen', 'risk and liability',
          'Samuel used to catch duplicates while he typed. Nobody asked him to, he just did '
          'it. We removed the typing and we removed the check with it, and nobody noticed '
          'for four months.'),
         ('Kenji Watanabe', 'finance',
          'I want the 3,100 explained before I want anybody to be right. Check the sixty-one '
          'against each other, not against their invoices.')],
 steps=[('Find it', 'How many invoices this month, against the same month last year?'),
        ('Compare it', 'What did checking against the invoice miss that checking against each other would catch?'),
        ('Infer it', 'Why did nobody notice for four months?'),
        ('Weigh it', 'A perfect extraction against a check that was never specified.'),
        ('Decide', 'What should be added, and who should own it?')],
 analysis=[('Find it. How many more invoices than last year?', 'seven'),
           ('Compare it. What does checking rows against each other catch?', 'duplicates, which are individually correct and collectively wrong'),
           ('Infer it. Why was the loss invisible?', 'because the check had never been written down, so removing the typing removed it silently'),
           ('Weigh it. Was the extraction brief wrong?', 'no; it did exactly what it specified, and what it specified was incomplete'),
           ('Decide. What check belongs in the brief now?', 'a duplicate test across the month, on supplier plus amount plus date')],
 decision='Write the paragraph adding a duplicate check to Samuel’s monthly run.',
 decision_steps=['Say what the check compares, precisely enough to be run.',
                 'Say what counts as a duplicate, including the near case.',
                 'Say what happens when one is found: flag, or stop.',
                 'Say who looks at the result, and in what week of the month.'],
 bank=['Compare every row against…', 'Treat two rows as a duplicate when…',
       'Where a possible duplicate is found, …', '… reviews the duplicate list in week …',
       'This does not replace…'],
 outcome='Jonas added a duplicate check on supplier, amount and date within seven days. It '
         'found four duplicates in month four worth 2,180 euros, two in month five, and '
         'then roughly one a month afterwards. The remaining 900 euros of the increase was '
         'exactly what Jonas had said it was: prices going up. He was right about the cause '
         'and wrong about the question, and he is the one who points this out in training.',
 outcome_q=[('What did the duplicate check find in month four?', 'four duplicates worth 2,180 euros'),
            ('In what sense was Jonas both right and wrong?', 'right that prices had risen, wrong that this explained the whole increase')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Get the invoices into a spreadsheet',
 task=['This is the brief Samuel wrote himself, before the forty-minute conversation, when '
       'he still thought the problem was typing. He sent it on a Sunday night, which tells '
       'you something about how he was feeling when he wrote it.',
       'He knows all four awkward-case rules. He has been applying them every week for three '
       'years. None of them is in the brief, because he does not experience them as rules.'],
 draft=['Can you get these invoices into a spreadsheet for me.',
        'Pull out all the usual details from each one.',
        'There is a lot of information on some of them.',
        'Use your judgement on the odd ones.',
        'Make sure the totals are accurate.',
        'Send it over when you have a moment.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines containing no field names, no rules and no number.',
 asked=['6 named fields per invoice',
        'Awkward cases flagged, not decided',
        'Credit notes left out'],
 back=['11 fields, 5 of them unwanted',
       'Every awkward case silently resolved',
       '4 credit notes recorded as invoices'],
 gap='The usual details named no fields, use your judgement handed over four rules Samuel '
     'had already made, and a lot of information is not a quantity at all.',
 back_cap='Eleven columns, four of which are credit notes entered as money owed.',
 back_note='The four credit notes came out as positive amounts. Nothing flagged them, '
           'because nothing had been told that they existed.',
 diagnosis=[('[1] "these invoices" — which ones, from where?', 'unscoped set'),
            ('[2] "all the usual details" — which fields?', 'unscoped set'),
            ('[3] "a lot of information" — how much, measured how?', 'unbounded quantity'),
            ('[4] "use your judgement on the odd ones" — by what rule?', 'unstated criterion'),
            ('[5] "make sure the totals are accurate" — accurate to what tolerance?', 'unstated criterion'),
            ('[6] "when you have a moment" — how much time is that?', 'unbounded quantity')],
 rewrite='Rewrite Samuel’s brief so that the four rules in his head are on the page, and '
         'nothing is left to judgement.',
 scaffold=['Why this is being done at all, from Samuel’s point of view',
           'Which documents are in, and how a credit note is recognised',
           'Where the invoices live, and which schema names the fields',
           'The six fields by name, and the rule for each awkward case',
           'The sheet that comes back, and the flag count with it',
           'What to do with a figure that cannot be read'],
 bank=['Pull the following six fields from …', 'Exclude any document that …',
       'Where an invoice shows two … , use …', 'Record … and flag it where …',
       'Return … columns plus a flag column and a count of …',
       'If … cannot be read with certainty, …'],
 check=['Are all six fields named individually?',
        'Is there a written rule for at least three awkward cases?',
        'Does the brief say how a credit note is recognised?',
        'Does the Fallback forbid guessing in so many words?'],
 model=['Stop Samuel entering supplier invoices by hand on Sunday evenings',
        'Every supplier invoice in the month folder, excluding credit notes, which carry a minus sign in the total box',
        'The month folder of 61 scanned invoices and the 6-field schema dated 2 March',
        'Pull supplier name, invoice number, invoice date, net, tax and total; where 2 dates appear use the later; record 0 tax where no tax line appears and flag it; record both amounts where the currency is not euros and flag it',
        '1 spreadsheet of 6 columns plus a flag column, and a count of flags raised',
        'If a total cannot be read with certainty, leave the cell blank and flag the row; do not estimate it'],
 cost='11 columns instead of 6, 4 credit notes booked as money owed, about 760 euros wrongly '
      'shown as payable, and 2 hours of Kenji’s time to find out why the month looked odd.'),

rev_fig=figs.split('COUNTABLE AND UNCOUNTABLE', 'Takes a number directly',
                   ['six fields', 'sixty invoices', 'two dates', 'seven flags'],
                   'Needs a unit first',
                   ['three pages of text', 'two hours of work',
                    'one piece of advice', 'four lines of evidence']),
rev_fig_cap='If you cannot put a number straight in front of it, find the unit.',
rev=dict(
 read=[('Extraction is a good place to start because', ['it is cheap', 'it has right answers you can check', 'it is impressive', 'it needs no rules'], 1),
       ('"Data" and "evidence" are', ['countable', 'uncountable', 'both', 'neither'], 1),
       ('A flag column exists to', ['count the rows', 'show where a person should look', 'replace the fields', 'record the total'], 1),
       ('In the Clinic, what had silently disappeared?', ['the extraction', 'the typing', 'the duplicate check', 'the supplier list'], 2)],
 listen_text='Three things and you can write an extraction brief. Name the fields one by one, '
             'because the usual details is not a list. Write down the awkward cases, because '
             'somebody has been deciding them for years without saying so. And insist on a '
             'flag instead of a guess, because a blank cell costs four seconds and a plausible '
             'wrong number costs whatever it costs, later.',
 listen=[('Name the ____________ one by one.', 'fields'),
         ('The usual details is not a ____________.', 'list'),
         ('Write down the ____________ cases.', 'awkward'),
         ('Insist on a ____________ instead of a guess.', 'flag')],
 speak=['Describe a document you handle. Your partner lists the fields they think it has.',
        'Correct them, and notice which field you forgot to mention first.'],
 write='Write the Criteria line for an extraction, including two awkward-case rules.',
 vocab=[('One named piece of information in a record is a ____________.', 'field'),
        ('The agreed list of fields a record must contain is the ____________.', 'schema'),
        ('The amount of difference you accept is the ____________.', 'tolerance'),
        ('Writing with no fixed form is ____________ text.', 'free'),
        ('To compare two records and explain every difference is to ____________.', 'reconcile')],
 gram=[('Pull out six ____________ from every invoice.', 'fields'),
       ('There is too much ____________ to check by hand.', 'data'),
       ('That is about three ____________ of work a week.', 'hours'),
       ('He needs more ____________ before he will sign.', 'evidence'),
       ('She gave me one piece of ____________ worth having.', 'advice')]),

found=['Take a document you handle weekly and write out every field it contains.',
       'Ask the person who does a job what they do when the document is strange.',
       'Find one uncountable noun in your own writing and attach a unit to it.',
       'Work out what quiet check disappears if a manual step is automated.'],
end_line='The figures were all correct. The month was still wrong.',
end_next='Next: Which Ones, Exactly',
)
