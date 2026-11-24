# -*- coding: utf-8 -*-
import figs

U = dict(
num=7,
title='An Announcement for the International Trade Press',
gram='news register for the trade press: the active voice and a named source',
ai='an announcement written for a trade journal’s own international readers',
strap='CEFR B2 · Grammar: news register for the trade press: the active voice and a named source · '
      'AI: an announcement written for a trade journal’s own international readers',
cando=['write a lead paragraph a technical editor can use unchanged',
       'attribute a claim to a named person who will stand behind it',
       'strip a superlative your company cannot prove',
       'answer an editor’s questions before he asks them',
       'write a six-line tasking for a press announcement'],

hero=('THE EDITOR CUT EVERYTHING AFTER THE FIRST LINE',
      ['Nine paragraphs were sent.',
       'One paragraph was printed.'],
      [(980, 'teal', 'long'), (200, 'grey', 'short'), (300, 'blue', 'short')]),
hero_cap='A trade editor prints the facts and deletes the adjectives, in every language.',

warm=['Has your company ever appeared in a trade journal?',
      'Who in your company may be quoted by name?',
      'What claim in your last announcement could an editor not check?'],

read=[
 'A trade journal exists for its readers, who are engineers and buyers, and not for the companies '
 'that write to it. An editor therefore reads an announcement as raw material and keeps only what '
 'his readers can use.',
 'What he keeps is the news: what the company has done, when, where, for whom, at what scale, and '
 'what it means for somebody buying this class of equipment. What he deletes is every adjective '
 'that the company awarded itself.',
 'The register is news register and it is simpler than company prose: the active voice, the past '
 'tense for what has happened, and a named human source for anything that is an opinion rather '
 'than a fact.',
 'An announcement that arrives already in that form is printed nearly as written, which is why '
 'the first paragraph should contain the whole story: company, action, object, place, date and '
 'scale, in about thirty words.',
 'Aurora announces a new analyser and sends nine paragraphs to eleven journals in six languages. '
 'Four print the first paragraph, two ask for photographs, and one asks the question Aurora had '
 'avoided.'],

dp1=('News structure', 'Trade press practice commonly expects an announcement to carry the whole '
     'substance in its opening paragraph, with quotations attributed to a named individual and '
     'claims supported on request.',
     'Source: general trade media guidance, 2025–2026.'),

c_a=[('Whom does a trade journal exist for?', 'its readers, who are engineers and buyers'),
     ('How does an editor read an announcement?', 'as raw material'),
     ('What does he keep?', 'what, when, where, for whom, at what scale, and what it means for a buyer'),
     ('What does he delete?', 'every adjective the company awarded itself'),
     ('What three features does news register have?', 'the active voice, the past tense and a named source'),
     ('What should the first paragraph contain?', 'the whole story in about thirty words')],

c_b=[('A trade journal exists to help companies.', 'F'),
     ('An editor keeps the scale of a thing.', 'T'),
     ('Self-awarded adjectives survive editing.', 'F'),
     ('An opinion needs a named source.', 'T'),
     ('The first paragraph should contain the whole story.', 'T'),
     ('Aurora sent nine paragraphs.', 'T')],

c_c=[('Aurora Instruments ____________ a new analyser in Porto on 3 March.', 'launched'),
     ('The company ____________ 140 people at two sites.', 'employs'),
     ('“The instrument halves calibration time,” ____________ Dr Anna Lindqvist.', 'said'),
     ('The analyser ____________ delivered to four laboratories in January.', 'was'),
     ('Aurora ____________ not disclose the development cost.', 'did'),
     ('Photographs ____________ available on request from the media contact.', 'are')],

c_d=[('News register prefers ( the passive voice / the active voice ).', ['the passive voice', 'the active voice'], 1),
     ('An opinion must carry ( a named source / a company name ).', ['a named source', 'a company name'], 0),
     ('The first paragraph should be ( the whole story / an introduction ).',
      ['the whole story', 'an introduction'], 0),
     ('A superlative you cannot prove should be ( deleted / softened ).',
      ['deleted', 'softened'], 0),
     ('An embargo date tells the editor ( when he may print / when you wrote it ).',
      ['when he may print', 'when you wrote it'], 0)],

c_e=('News, opinion or deletion? Decide for each sentence.',
     [('Aurora launched the AX-40 analyser in Porto on 3 March', 'news'),
      ('“It halves calibration time,” said Dr Anna Lindqvist', 'opinion'),
      ('a revolutionary breakthrough for the industry', 'deletion'),
      ('four units were delivered to laboratories in January', 'news'),
      ('“We expect strong demand,” said the export manager', 'opinion'),
      ('the finest instrument of its kind anywhere', 'deletion')],
     ['news', 'opinion', 'deletion']),

v_fig_title='SIX WORDS OF AN ANNOUNCEMENT',
v_fig=[('doc', 'a press announcement'), ('chart', 'a lead paragraph'), ('people', 'a quoted spokesman'),
       ('scale', 'an embargo date'), ('key', 'a media contact'), ('box', 'a fact sheet')],
v_fig_cap='Six words for a page a technical editor can print without telephoning you.',

vocab=[
 ('a press announcement', 'a written statement issued to journalists'),
 ('a trade journal', 'a magazine for one industry'),
 ('an embargo date', 'the date before which nothing may be printed'),
 ('a place and date line', 'the place and date at the head of an announcement'),
 ('a lead paragraph', 'the opening paragraph carrying the story'),
 ('a quoted spokesman', 'the named person whose words are quoted'),
 ('a boilerplate paragraph', 'the standing paragraph describing the company'),
 ('a media contact', 'the person journalists should telephone'),
 ('a fact sheet', 'a page of figures and specifications'),
 ('a photograph caption', 'the text explaining a photograph'),
 ('a technical editor', 'an editor with engineering knowledge'),
 ('an unsupported superlative', 'a “best” or “first” nobody can verify'),
 ('an approval before publication', 'the right to see an article before it appears'),
 ('a correction notice', 'a published statement correcting an error'),
 ('a reprint request', 'a request to reuse published material'),
 ('an advertorial', 'paid matter resembling an article'),
 ('an editorial independence', 'an editor’s freedom from the companies he writes about'),
 ('a launch date', 'the date a product becomes available'),
 ('a product designation', 'the official name or code of a product'),
 ('a press list', 'the journalists an announcement is sent to')]
,
v_a=[('The date before which nothing may be printed is an ____________ date.', 'embargo'),
     ('The opening paragraph carrying the story is a ____________ paragraph.', 'lead'),
     ('The standing paragraph describing the company is a ____________ paragraph.', 'boilerplate'),
     ('A page of figures and specifications is a ____________ sheet.', 'fact'),
     ('A “best” or “first” nobody can verify is an unsupported ____________.', 'superlative'),
     ('A published statement correcting an error is a ____________ notice.', 'correction'),
     ('Paid matter resembling an article is an ____________.', 'advertorial'),
     ('The official name or code of a product is a product ____________.', 'designation')],

v_b=[('A trade journal is a magazine', 'for one industry.'),
     ('A media contact is the person', 'journalists should telephone.'),
     ('A technical editor is an editor', 'with engineering knowledge.'),
     ('An editorial independence is an editor’s freedom', 'from the companies he writes about.'),
     ('A press list is the journalists', 'an announcement is sent to.')],

g_title='Grammar: news register for the trade press: the active voice and a named source',
g_rule=['News register puts the actor first and the action next: Aurora Instruments launched the '
        'AX-40 analyser in Porto on 3 March. Not “the AX-40 was launched”, which hides who did it '
        'and reads as a company announcing itself.',
        'Facts are stated flatly in the past tense and opinions are quoted and attributed: “The '
        'instrument halves calibration time,” said Dr Anna Lindqvist, head of Aurora’s export '
        'desk. The claim belongs to her, and she must be willing to defend it.',
        'Figures carry their basis: four units were delivered to laboratories in January; '
        'calibration time fell from forty minutes to nineteen in Aurora’s own tests. “Our own '
        'tests” is three words and the difference between news and advertising.',
        'Where the company declines to say something, say that too, in the same register: Aurora '
        'did not disclose the development cost. An editor respects a stated refusal and distrusts '
        'a silence he discovers himself.'],
g_fig=('LOOSE',
       ['A revolutionary new analyser has been launched.',
        'It is the fastest instrument of its kind.',
        'Industry experts are calling it a breakthrough.',
        'Prices are competitive and available on request.'],
       'PRECISE',
       ['Aurora Instruments launched the AX-40 analyser in Porto on 3 March.',
        'Calibration time fell from forty minutes to nineteen in Aurora’s own tests.',
        '“It halves calibration time in routine use,” said Dr Anna Lindqvist, head of Aurora’s export desk.',
        'The analyser is listed at €14,800 ex works Porto; Aurora did not disclose the development cost.'],
       'four paragraphs an editor deletes',
       'the same four as news'),
g_fig_cap='Actor first, figures with a basis, opinions named, refusals stated.',

g_a=[('Aurora Instruments ____________ a new analyser in Porto on 3 March.', 'launched'),
     ('The company ____________ 140 people at two sites.', 'employs'),
     ('“The instrument halves calibration time,” ____________ Dr Anna Lindqvist.', 'said'),
     ('The analyser ____________ delivered to four laboratories in January.', 'was'),
     ('Aurora ____________ not disclose the development cost.', 'did'),
     ('Photographs ____________ available on request from the media contact.', 'are'),
     ('Calibration time ____________ from forty minutes to nineteen.', 'fell'),
     ('The figures ____________ from Aurora’s own tests.', 'come'),
     ('The analyser ____________ listed at fourteen thousand eight hundred euros.', 'is')],

g_b=[('( Aurora Instruments launched the AX-40 in Porto on 3 March / A revolutionary new analyser has been launched ) — news.', ['Aurora Instruments launched the AX-40 in Porto on 3 March', 'A revolutionary new analyser has been launched'], 0),
     ('( Calibration time fell from forty minutes to nineteen in Aurora’s own tests / It is the fastest instrument of its kind ) — based.',
      ['Calibration time fell from forty minutes to nineteen in Aurora’s own tests', 'It is the fastest instrument of its kind'], 0),
     ('( “It halves calibration time,” said Dr Anna Lindqvist / Industry experts are calling it a breakthrough ) — attributed.',
      ['“It halves calibration time,” said Dr Anna Lindqvist', 'Industry experts are calling it a breakthrough'], 0),
     ('( Listed at €14,800 ex works Porto / Prices are competitive ) — stated.',
      ['Listed at €14,800 ex works Porto', 'Prices are competitive'], 0),
     ('( Aurora did not disclose the development cost / no mention of the development cost ) — a stated refusal.',
      ['Aurora did not disclose the development cost', 'no mention of the development cost'], 0),
     ('( Photographs are available from the media contact named below / Pictures can be arranged ) — actionable.',
      ['Photographs are available from the media contact named below', 'Pictures can be arranged'], 0)],

d1=dict(
 title='The question Aurora had avoided',
 fig=(['Four journals printed the lead.', 'One telephoned.'],
      ['He had read the figure.', 'He wanted the test conditions.']),
 cap='Dr Anna Lindqvist and a technical editor in Hamburg.',
 lines=[('Editor', 'You say calibration time fell from forty minutes to nineteen. Under what conditions?'),
        ('Anna', 'In our own laboratory, on our own reference samples, at twenty degrees.'),
        ('Editor', 'And in a customer’s laboratory with his samples?'),
        ('Anna', 'We have one measurement from January: twenty-six minutes.'),
        ('Editor', 'Then your announcement should say nineteen in your tests and twenty-six at the one customer site measured.'),
        ('Anna', 'That is a less impressive sentence.'),
        ('Editor', 'It is a sentence I can print without a reader writing to tell me I have been used.'),
        ('Anna', 'You could have printed the nineteen and let us defend it.'),
        ('Editor', 'My readers are the people buying this. If I print a figure they cannot reproduce, they stop reading my pages, not yours.'),
        ('Anna', 'I shall send you both figures and the conditions for each.'),
        ('Editor', 'Send the test method as well, and I shall give you four hundred words instead of forty.'),
        ('Anna', 'And if the customer will not let us name his laboratory?')],
 a=[('What did the editor ask?', 'the conditions of the calibration measurement'),
    ('What were they?', 'Aurora’s own laboratory, own reference samples, twenty degrees'),
    ('What figure came from a customer site?', 'twenty-six minutes'),
    ('What should the announcement say?', 'nineteen in Aurora’s tests and twenty-six at the one customer site'),
    ('What does the editor offer?', 'four hundred words instead of forty, if the test method is sent')],
 b=[('Under what ____________?', 'conditions'),
    ('One ____________ from January.', 'measurement'),
    ('A reader writing to tell me I have been ____________.', 'used'),
    ('Send the test ____________ as well.', 'method')]),

d2=dict(
 title='Who may be quoted',
 fig=(['Everyone wanted a quotation.', 'Only one could defend it.'],
      ['A quotation is a promise.', 'It carries a name.']),
 cap='Anna and Daniel Okonjo, Porto.',
 lines=[('Daniel', 'The announcement quotes you. It should quote me; this is a sales story.'),
        ('Anna', 'The quotation says the instrument halves calibration time. Can you defend that figure to a technical editor?'),
        ('Daniel', 'I can say what the engineers told me.'),
        ('Anna', 'Then the engineers’ head should say it, or I should, because I have read the test sheets.'),
        ('Daniel', 'A quotation from the export manager reaches buyers better.'),
        ('Anna', 'A quotation that collapses under one telephone call reaches them for a week and damages us for a year.'),
        ('Daniel', 'So I get no quotation at all?'),
        ('Anna', 'You get the commercial sentence, which is yours and which you can defend: that the instrument is listed at fourteen thousand eight hundred euros and that two distributors hold stock.'),
        ('Daniel', 'That is a dull quotation.'),
        ('Anna', 'It is a true one, and an editor will print it beside mine without checking it twice.'),
        ('Daniel', 'And if a journalist telephones me about the calibration figure anyway?'),
        ('Anna', 'Say that it is not your figure and give him my number, which costs you nothing at all.')],
 unresolved=True,
 a=[('What does Daniel want?', 'to be the quoted spokesman'),
    ('What test does Anna apply?', 'whether he can defend the figure to a technical editor'),
    ('Who should state a technical claim?', 'the person who has read the test sheets'),
    ('What sentence is Daniel given?', 'the commercial one: the list price and the distributors holding stock'),
    ('What should he do if telephoned about calibration?', 'say it is not his figure and give Anna’s number')],
 b=[('Can you ____________ that figure?', 'defend'),
    ('Collapses under one telephone ____________.', 'call'),
    ('The ____________ sentence is yours.', 'commercial'),
    ('Give him my ____________.', 'number')]),

speak=[('News, opinion or deletion?',
        ['Your partner reads a sentence from a draft announcement.',
         'You classify it and say what becomes of it.',
         'Six each, then swap.']),
       ('Attribute it',
        ['Your partner states an opinion as a fact.',
         'You turn it into a quotation with a named source.',
         'Six each, then swap.']),
       ('Under what conditions?',
        ['Your partner gives you a performance figure.',
         'You ask the three questions an editor would ask.',
         'Four each, then swap.'])],

ext_title='Written for his readers, not for your company',
ext_fig=figs.datatable('WHAT AN EDITOR KEEPS',
                       ['Element', 'Kept or cut'],
                       [['company, action, place, date', 'kept'],
                        ['a figure with its conditions', 'kept'],
                        ['a quotation with a name and a title', 'kept'],
                        ['a list price and availability', 'kept'],
                        ['a self-awarded superlative', 'cut'],
                        ['an unnamed “industry expert”', 'cut']]),
ext_fig_cap='Four kept, two cut, and the two cut are the ones companies fight for.',
ext=[
 'An announcement written for a trade journal’s own international readers is an exercise in '
 'writing for somebody whose interests are not yours, and the test is simple: could a technical '
 'editor print the first paragraph unchanged without risking his readers’ trust?',
 'Give it the draft, the test sheets behind any performance figure, the list price and '
 'availability, and the name and title of the person willing to be quoted. Ask for the lead '
 'paragraph first, in about thirty words.',
 'Ask for every performance figure to be rewritten with its conditions and its source, and for '
 'the strongest figure you cannot support under those conditions to be deleted rather than '
 'qualified into safety.',
 'Ask for every opinion to become a quotation attributed to a named person with a title, and for '
 'anonymous praise to be struck out entirely. An unnamed expert is read as the company talking to '
 'itself.',
 'Ask for a fact sheet behind the announcement: designation, specification, price basis, '
 'availability, test method, and a media contact with a direct telephone number and the hours he '
 'answers it.',
 'What no system can do is tell you whether your own people will stand behind a claim when an '
 'editor telephones. Ask the person named in the quotation to read it aloud, and if he hesitates, '
 'take the sentence out.'],

dp2=('Attribution', 'Editorial practice commonly requires that evaluative claims be attributed to '
     'a named individual and that performance figures state their test conditions, with '
     'unattributed praise removed.',
     'Source: general trade media guidance, 2025–2026.'),

e_a=[('What is the test for an announcement?', 'whether an editor could print the first paragraph unchanged'),
     ('What four inputs are needed?', 'the draft, the test sheets, the price and availability, and a named spokesman'),
     ('What should happen to an unsupportable figure?', 'it is deleted, not qualified into safety'),
     ('What happens to anonymous praise?', 'it is struck out entirely'),
     ('What can no system tell you?', 'whether your people will stand behind a claim')],
e_b=[('An editor’s interests are the same as yours.', 'F'),
     ('A performance figure needs its conditions.', 'T'),
     ('An unnamed expert reads as the company talking to itself.', 'T'),
     ('A fact sheet should name a direct telephone number.', 'T'),
     ('A hesitant spokesman is a reason to keep the sentence.', 'F'),
     ('Qualifying a weak claim is better than deleting it.', 'F')],

w_model='Purpose: so that a technical editor can print our first paragraph unchanged. Scope: the '
        'announcement of the AX-40 analyser for eleven trade journals; the advertising campaign '
        'and the distributor letters are separate and are not part of this. Inputs: the draft of '
        '20 February, the calibration test sheets for our laboratory and the January customer '
        'measurement, the list price and availability, and Dr Lindqvist as the named spokesman. '
        'Criteria: a lead paragraph of about thirty words carrying company, action, object, place, '
        'date and scale; every figure with its test conditions and source; every opinion as a '
        'quotation attributed to a name and title; anonymous praise deleted; and a fact sheet with '
        'designation, specification, price basis, availability, test method and a direct telephone '
        'number. Done: with me by Thursday, with the embargo date on every copy. Fallback: where a '
        'figure cannot be stated with its conditions, it is deleted and not qualified.',
w_fig=figs.spec_card('SIX LINES FOR AN ANNOUNCEMENT',
                     [('Purpose', 'printable unchanged by a technical editor'),
                      ('Scope', 'eleven journals, not the advertising'),
                      ('Inputs', 'draft, test sheets, price, named spokesman'),
                      ('Criteria', 'thirty-word lead, conditions, attribution, fact sheet'),
                      ('Done', 'Thursday, with the embargo date'),
                      ('Fallback', 'no conditions? delete, do not qualify')]),
w_fig_cap='Six lines, and the last one would rather lose a figure than hedge it.',
w_task='Write a six-line tasking for a press announcement.',
w_steps=['Line 1: say what an editor must be able to do.',
         'Line 2: say which announcement, and what is separate.',
         'Line 3: say what you are giving it.',
         'Line 4: say the lead, the figures, the attribution and the fact sheet.',
         'Line 5: say when you need it and what every copy carries.',
         'Line 6: say what happens to a figure without conditions.'],
w_bank=['Purpose: so that a technical editor can print our first paragraph unchanged',
        'Scope: the announcement of … for … journals; the advertising campaign is separate',
        'Inputs: the draft, the test sheets, the list price and availability, and … as the named spokesman',
        'Criteria: a lead paragraph of about thirty words carrying company, action, object, place, date and scale; every figure with its test conditions and source; every opinion as an attributed quotation; anonymous praise deleted; a fact sheet with designation, specification, price basis, availability, test method and a direct telephone number',
        'Done: with me by … , with the embargo date on every copy',
        'Fallback: where a figure cannot be stated with its conditions, it is deleted and not qualified'],
w_check=['Could the lead be printed unchanged?',
         'Does every figure carry its conditions?',
         'Is every opinion attributed to a name?',
         'Is there a direct telephone number?'],

t_title='An announcement written for a trade journal’s own international readers',
t_fig=figs.split('A DRAFT AND SOME TEST SHEETS',
                 'It can produce',
                 ['a thirty-word lead',
                  'figures with conditions',
                  'quotations with names and titles',
                  'a fact sheet and a contact'],
                 'It must not supply',
                 ['a figure your sheets lack',
                  'an unnamed industry expert',
                  'a superlative you cannot prove',
                  'a spokesman who has not agreed']),
t_fig_cap='It writes the news. Who will answer the telephone is a decision, not a draft.',
t_body=[
 'Give it the draft, the test sheets, the price and availability and the name and title of your '
 'spokesman, and ask for the lead paragraph first in about thirty words.',
 'An announcement written for a trade journal’s own international readers survives on conditions, '
 'so ask for every figure to carry its test conditions and its source.',
 'Then ask for every opinion to be attributed to a named person, anonymous praise to be deleted, '
 'and a fact sheet with a direct telephone number behind it all.'],
t_say=[('Lead first: ', 'Company, action, object, place, date and scale, in thirty words.'),
       ('Conditions always: ', 'Every figure with its test conditions and its source.'),
       ('Name the voice: ', 'Every opinion as a quotation with a name and a title.')],
t_bound='It cannot tell you whether your engineer will defend the calibration figure at nine in '
        'the morning to a hostile editor, and it will not know which journals printed your rival’s '
        'claim last month.',
t_a=[('Give it the draft and the test ____________.', 'sheets'),
     ('Ask for the ____________ paragraph first.', 'lead'),
     ('About ____________ words.', 'thirty'),
     ('Every figure with its ____________.', 'conditions'),
     ('Every opinion ____________ to a name.', 'attributed'),
     ('Anonymous praise ____________.', 'deleted')],
t_b_rubric='Say what the announcement should do with each item.',
t_b=[('“the fastest instrument of its kind”', 'delete: an unsupported superlative'),
     ('“calibration time fell to nineteen minutes”', 'rewrite with test conditions and source'),
     ('“industry experts call it a breakthrough”', 'delete: no named source'),
     ('“it halves calibration time in routine use”', 'quote it, attributed to a named person with a title')],

case=dict(
 title='The Decision Room · The figure that could not be reproduced',
 brief=[
  'Aurora announces the AX-40 with the sentence “calibration time reduced from forty minutes to '
  'nineteen”. The figure comes from its own laboratory with its own reference samples.',
  'Four journals print the lead paragraph. Two months later a reader in Finland publishes a '
  'letter reporting twenty-nine minutes in his own laboratory, and one editor telephones to ask '
  'whether the nineteen was ever achieved outside Porto.',
  'Aurora can stand on its own tests, which were honestly run, or publish the customer figure and '
  'the conditions for both. The first costs nothing today, and the second costs a paragraph.'],
 exhibit=figs.datatable('ONE FIGURE, THREE LABORATORIES',
                        ['Where measured', 'Minutes'],
                        [['Aurora laboratory, reference samples', '19'],
                         ['customer site, January', '26'],
                         ['reader in Finland, own samples', '29'],
                         ['journals that printed 19', '4'],
                         ['months before the letter appeared', '2'],
                         ['words the editor offered for the method', '400']]),
 exhibit_cap='Nineteen, twenty-six and twenty-nine, all honestly measured and all different.',
 exhibit_note='Nothing in Aurora’s announcement was false. It was measured under conditions no '
              'reader could reproduce, and it was published without them.',
 voices=[('Daniel Okonjo', 'export manager',
          'Our tests gave nineteen. Every manufacturer quotes its own laboratory.'),
         ('Dr Anna Lindqvist', 'head of the export desk',
          'Every manufacturer who does that is read as every manufacturer. We wanted to be read as us.'),
         ('A technical editor', 'Hamburg',
          'I would rather print twenty-six with a method than nineteen with nothing.')],
 steps=[('Find it', 'What was published?'),
        ('Compare it', 'What the readers measured.'),
        ('Infer it', 'Why did the conditions not appear?'),
        ('Weigh it', 'A striking figure against a reproducible one.'),
        ('Decide', 'What goes out now?')],
 analysis=[('Find it. What was published?', 'nineteen minutes, with no conditions'),
           ('Compare it. What did readers measure?', 'twenty-six and twenty-nine minutes'),
           ('Infer it. Why no conditions?', 'the conditions made the figure less striking'),
           ('Weigh it. What was at stake?', 'the credibility of every figure Aurora publishes'),
           ('Decide. What goes out?', 'both figures with their conditions, and the test method')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say what accompanies every published figure.',
                 'Say what is done with a figure that cannot be reproduced.',
                 'Say who may be quoted on a technical claim.',
                 'Say what is offered to an editor who asks.'],
 bank=['Every published performance figure is accompanied by its test conditions and the place it was measured.',
       'A figure that a customer cannot reproduce under stated conditions is not published, whatever our own laboratory recorded.',
       'A technical claim is quoted only from the person who has read the test sheets and will defend it by telephone.',
       'Any editor who asks is sent the full test method and both our own and the customer measurements, without conditions attached.'],
 outcome='Aurora publishes the method and both figures. The Hamburg journal runs four hundred '
         'words on the test method, two more journals reprint it, and the Finnish reader writes '
         'again to say his time fell to twenty-four when he adopted the method. Aurora’s next four '
         'announcements are printed with their figures intact and no editor telephones to check '
         'one.',
 outcome_q=[('What did Aurora publish?', 'the test method and both figures'),
            ('How many words did Hamburg run?', 'four hundred'),
            ('How many journals reprinted it?', 'two'),
            ('What did the Finnish reader report?', 'twenty-four minutes with the method'),
            ('What happened to the next four announcements?', 'printed with figures intact, with no checking calls')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Write something for the trade press',
 task=['An export manager asked a correspondent to announce a new product.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Write something for the trade press about the new analyser.',
        'Make it exciting.',
        'Use the calibration figure.',
        'Quote somebody senior.',
        'Send it everywhere.',
        'This week.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and “make it exciting” produced three superlatives and one unusable figure.',
 asked=['Make it exciting', 'Use the calibration figure', 'Quote somebody senior'],
 back=['9 paragraphs sent', '3 superlatives', '1 figure without conditions'],
 gap='Nobody said that the figure needed its conditions or that the spokesman must defend it.',
 back_cap='Nine paragraphs, of which an editor could print one, and a figure he later queried.',
 back_note='“Quote somebody senior” produced a quotation from a manager who had not read the test '
           'sheets and could not answer the first question asked.',
 diagnosis=[('“make it exciting”', 'unstated criterion'),
            ('“quote somebody senior”', 'ambiguous referent'),
            ('“use the calibration figure”', 'hidden assumption'),
            ('“send it everywhere”', 'ambiguous referent'),
            ('“write something for the trade press”', 'unstated criterion'),
            ('“this week”', 'hidden assumption')],
 rewrite='Rewrite it on the six lines so that an editor can print the lead unchanged.',
 scaffold=['what an editor must be able to do',
           'which announcement, and what is separate',
           'what you are giving it',
           'the lead, the figures, the attribution and the fact sheet',
           'when you need it and what every copy carries',
           'what happens to a figure without conditions'],
 bank=['Purpose: so that a technical editor can print our first paragraph unchanged',
       'Scope: the announcement of the AX-40 analyser for eleven trade journals; the advertising campaign and the distributor letters are separate and are not part of this',
       'Inputs: the draft of 20 February, the calibration test sheets for our laboratory and the January customer measurement, the list price and availability, and Dr Lindqvist as the named spokesman',
       'Criteria: a lead paragraph of about thirty words carrying company, action, object, place, date and scale; every figure with its test conditions and source; every opinion as a quotation attributed to a name and title; anonymous praise deleted; and a fact sheet with designation, specification, price basis, availability, test method and a direct telephone number',
       'Done: with me by Thursday, with the embargo date on every copy',
       'Fallback: where a figure cannot be stated with its conditions, it is deleted and not qualified'],
 check=['Is the lead about thirty words and complete?',
        'Does every figure carry its conditions?',
        'Is the spokesman able to defend the claim?',
        'Is there a fact sheet with a direct number?'],
 model=['so that a technical editor can print our first paragraph unchanged',
        'the announcement of the AX-40 analyser for eleven trade journals; the advertising campaign and the distributor letters are separate and are not part of this',
        'the draft of 20 February, the calibration test sheets for our laboratory and the January customer measurement, the list price and availability, and Dr Lindqvist as the named spokesman',
        'a lead paragraph of about thirty words carrying company, action, object, place, date and scale; every figure with its test conditions and source; every opinion as a quotation attributed to a name and title; anonymous praise deleted; and a fact sheet with designation, specification, price basis, availability, test method and a direct telephone number',
        'with me by Thursday, with the embargo date on every copy',
        'where a figure cannot be stated with its conditions, it is deleted and not qualified'],
 cost='9 paragraphs sent, 1 printed, 3 superlatives cut and 1 figure queried publicly 2 months later.'),

lang=dict(
 title='The Money Conversation · Telling an editor your own figure was not reproducible',
 setting=[
  'A reader’s letter has reported twenty-nine minutes where Aurora published nineteen, and a '
  'technical editor in Hamburg has telephoned to ask whether nineteen was ever achieved outside '
  'Porto.',
  'Anna can defend her laboratory honestly, or she can give the editor more than he asked for. '
  'The journal reaches most of her northern European buyers, and so will whatever she says now.'],
 ladder=[('A published figure questioned', 'in print, by a reader'),
         ('An honest test under narrow conditions', 'and a journal full of buyers'),
         ('Either defend the nineteen', 'or publish the method and all three figures')],
 cap='Nineteen minutes in Porto, twenty-six at a customer, twenty-nine in Finland.',
 turns=[('Turn 1 · The editor', 'Was nineteen minutes ever achieved outside your own laboratory?'),
        ('Turn 2 · Anna', 'No. Nineteen is our laboratory with our reference samples at twenty degrees, and we published it without saying so.'),
        ('Turn 3 · The editor', 'Most companies would be arguing with me by now.')],
 holds=['The figure is honest and the sentence was not, because a figure without its conditions is not a figure.',
        'I shall send you the full test method today, our sheets, and the January customer measurement of twenty-six minutes.',
        'Print whichever figure your readers can reproduce, and print the conditions for all three if you have room.',
        'I am not asking you to run a correction on our behalf; that is your decision and not mine.',
        'Our next announcement will carry conditions beside every figure, and you may hold me to that.',
        'And if your reader in Finland will tell me his sample preparation, I should like to understand the difference.'],
 redline='Never defend a figure by narrowing the question, and never ask an editor to protect your '
         'announcement from his own readers.',
 score=['Answered the question with a plain no.',
        'Named what the sentence had omitted.',
        'Sent the method and the less flattering figures.',
        'Left the correction decision to the editor.',
        'Turned the reader’s letter into a technical question.'],
 a=[('What does the editor ask?', 'whether nineteen minutes was achieved outside Aurora’s laboratory'),
    ('What does Anna answer?', 'no, and the conditions were not published'),
    ('What does she send?', 'the test method, the sheets and the customer measurement'),
    ('What does she leave to the editor?', 'whether to run a correction'),
    ('What will the next announcement carry?', 'conditions beside every figure'),
    ('What is the redline?', 'never defend a figure by narrowing the question')]),

rev_fig=figs.split('AN ANNOUNCEMENT THAT PRINTS',
                   'Carries',
                   ['a thirty-word lead',
                    'figures with conditions',
                    'named quotations',
                    'a direct telephone number'],
                   'Carries no',
                   ['self-awarded superlative',
                    'anonymous expert',
                    'figure without a basis',
                    'spokesman who has not read the sheets']),
rev_fig_cap='Four things present, four absent, and an editor who need not telephone.',
rev=dict(
 read=[('Whom does a trade journal serve?',
        ['its readers', 'its advertisers',
         'the companies it writes about', 'its printers'], 0),
       ('What must a performance figure carry?',
        ['its test conditions and source', 'a percentage',
         'a comparison with a rival', 'a price'], 0),
       ('What happens to anonymous praise?',
        ['it is deleted', 'it is attributed to the company',
         'it is moved to the end', 'it is put in quotation marks'], 0),
       ('What should the lead paragraph contain?',
        ['the whole story in about thirty words', 'a greeting',
         'the company history', 'the price list'], 0)],
 listen_text='Give it the draft, the test sheets, the price and availability and a named '
             'spokesman. Ask for a thirty-word lead, every figure with its conditions, every '
             'opinion attributed, and a fact sheet with a direct number.',
 listen=[('Give it the draft and the test ____________.', 'sheets'),
         ('Ask for the ____________ paragraph first.', 'lead'),
         ('Every figure with its ____________.', 'conditions'),
         ('Every opinion ____________ to a name.', 'attributed')],
 speak=['Classify twelve draft sentences as news, opinion or deletion.',
        'Then attribute six opinions to a named source who could defend them.'],
 write='Write a six-line tasking for a press announcement.',
 vocab=[('The date before which nothing may be printed is an ____________ date.', 'embargo'),
        ('The standing paragraph describing the company is a ____________ paragraph.', 'boilerplate'),
        ('A “best” or “first” nobody can verify is an unsupported ____________.', 'superlative'),
        ('Paid matter resembling an article is an ____________.', 'advertorial')],
 gram=[('Aurora Instruments ____________ four units to laboratories in January.', 'delivered'),
       ('“It halves calibration time,” ____________ Dr Anna Lindqvist.', 'said'),
       ('Calibration time ____________ from forty minutes to nineteen.', 'fell'),
       ('The company ____________ not comment on its development programme.', 'would')]),

found=['Write the whole story in the first paragraph, in the active voice and the past tense.',
       'Give every figure its test conditions and its source, or delete the figure.',
       'Attribute every opinion to a named person who will defend it by telephone.',
       'Send a fact sheet and a direct telephone number, and answer the editor the same day.'],
end_line='The editor is not your reader. He is your reader’s reader, and he will print what his own readers can check.',
end_next='Next: Writing That Will Be Machine-Translated')
