# -*- coding: utf-8 -*-
import figs

U = dict(
num=5, title='Where the Slant Entered',
gram='impersonal structures: there is a case for, it remains to be seen',
ai='bias in sources, and where it enters a brief',
strap='CEFR C1 · Grammar: impersonal structures · AI: where the slant entered',
cando=['use there is a case for and it remains to be seen with precision',
       'use an impersonal structure to report a balance of argument without taking sides',
       'say where bias enters an assisted brief, and where it does not',
       'audit a source mix rather than a conclusion',
       'write a tasking that requires the composition of the sources to be reported'],
hero=('NINE SOURCES IN ONE LANGUAGE',
      ['Every source was reputable, dated and correctly cited.',
       'Eight of the nine were published in the same language, in two cities.'],
      [(730, 'blue', 'long'), (1390, 'teal', 'short'),
       (2050, 'purple', 'long'), (2690, 'orange', 'short')]),
hero_cap='Policy Planning, with a source inventory nobody had asked for before.',

warm=['Where do the sources your office relies on come from?',
      'Which views in your field are well documented, and which are not?',
      'How would you notice that something was missing from your reading?'],
read=[
 'In April Policy Planning produced a brief on the regional transit question. It was well '
 'sourced: nine sources, each reputable, each dated, each correctly cited, and the brief’s '
 'assessment followed from them.',
 'Karim Dalati, auditing the research process rather than the brief, produced a source '
 'inventory. Eight of the nine sources were published in the same language. Seven came from '
 'institutions in two cities. None came from Kavara, which is the state whose conduct the '
 'brief assessed.',
 'Nothing had been excluded. Nobody had decided to prefer one view. The nine sources were the '
 'nine that a search over the Ministry’s closed collection and the open record returned, '
 'because material published in that language and in those two cities is indexed, digitised '
 'and searchable, and material published in Kavara is largely neither.',
 'The brief’s assessment may well have been right. Karim’s finding was not that it was wrong '
 'but that the Ministry could not tell, because the input to the assessment was the shape of '
 'the searchable record rather than the shape of the available argument, and nobody in the '
 'chain had looked at the composition of the sources at all.',
 'Dr Hana Mourad, who had signed the brief, said in the meeting that there was a case for '
 'reporting the source composition on every brief and that it remained to be seen whether '
 'officers would act on it. The rule was adopted. She says the surprising result was not that '
 'briefs changed but that two sections began commissioning translations.'],
c_a=[('How many sources did the April brief use?', 'nine, each reputable, dated and correctly cited'),
     ('What did the inventory show?', 'eight in one language, seven from two cities, none from Kavara'),
     ('Had anything been excluded?', 'no; the nine were what a search returned'),
     ('Why were those the nine?', 'because that material is indexed, digitised and searchable and Kavaran material largely is not'),
     ('What was Karim’s finding?', 'not that the assessment was wrong but that the Ministry could not tell'),
     ('What was the surprising result of the rule?', 'that two sections began commissioning translations')],
c_b=[('The brief was poorly sourced.', 'F'),
     ('Somebody decided to prefer one view.', 'F'),
     ('None of the sources came from Kavara.', 'T'),
     ('Karim found the assessment to be wrong.', 'F'),
     ('The input was the shape of the searchable record.', 'T'),
     ('The rule changed what briefs concluded.', 'F')],
c_c=[('The brief’s assessment ____________ from them.', 'followed'),
     ('Seven came from institutions in two ____________.', 'cities'),
     ('Indexed, digitised and ____________.', 'searchable'),
     ('The shape of the searchable record rather than the shape of the available ____________.', 'argument'),
     ('Nobody had looked at the ____________ of the sources.', 'composition'),
     ('Two sections began commissioning ____________.', 'translations')],
c_d=[('The bias entered at the ( assessment / search ).', ['assessment', 'search'], 1),
     ('How many sources were in one language?', ['nine', 'eight', 'seven', 'two'], 1),
     ('How many came from Kavara?', ['one', 'none', 'two', 'seven'], 1),
     ('What could the Ministry not tell?', ['who wrote the brief', 'whether the assessment was right', 'the date', 'the language'], 1),
     ('What did two sections begin doing?', ['refusing briefs', 'commissioning translations', 'reducing sources', 'citing more'], 1)],
c_e=('Match each impersonal structure to what it does.',
     [('There is a case for', 'reports an argument without adopting it'),
      ('It remains to be seen whether', 'states that an outcome is not yet known'),
      ('It is arguable that', 'reports a position as tenable'),
      ('It is established that', 'reports a fact as settled'),
      ('It is not clear whether', 'reports an uncertainty'),
      ('It has been suggested that', 'reports a proposal without a source')],
     ['reports an argument without adopting it', 'states that an outcome is not yet known',
      'reports a position as tenable', 'reports a fact as settled',
      'reports an uncertainty', 'reports a proposal without a source']),

v_fig_title='THE SHAPE OF THE SOURCES',
v_fig=[('chart', 'a source mix'), ('book', 'an over-represented source'), ('pin', 'a blind spot'),
       ('key', 'a source inventory'), ('bulb', 'a selection effect'), ('shield', 'a balance of sources')],
v_fig_cap='Six words for the composition of what a brief rests on.',
vocab=[
 ('a leaning in the record', 'a consistent tilt in a body of available material'),
 ('a selection effect', 'a distortion caused by which items came to be included'),
 ('a sampling bias', 'a distortion caused by how material was gathered'),
 ('a source mix', 'the composition of the sources used, by kind and origin'),
 ('an over-represented source', 'a source appearing more often than its weight warrants'),
 ('an under-represented source', 'a source appearing less often than its weight warrants'),
 ('a language of availability', 'the language in which material on a subject happens to exist'),
 ('a documented view', 'a position that has been written down and published'),
 ('an undocumented view', 'a position held and not published'),
 ('a dominant framing', 'the terms in which most available material presents a question'),
 ('a minority view', 'a position held by few of those writing on a subject'),
 ('a prevalence in the record', 'how often a position appears in the material available'),
 ('a weight of coverage', 'how much has been published on one side of a question'),
 ('a source inventory', 'a list of the sources used with their origins and languages'),
 ('a correction for availability', 'an adjustment for what happens not to be searchable'),
 ('a blind spot', 'a subject or view the available material does not cover'),
 ('a reading list', 'the set of material an officer has in fact read'),
 ('an unrepresented constituency', 'a group whose view appears nowhere in the material'),
 ('a provenance mix', 'the distribution of sources by where they came from'),
 ('a balance of sources', 'a composition that reflects the argument rather than the archive')],
v_a=[('A list of the sources used with their origins and languages is a ____________.', 'source inventory'),
     ('A distortion caused by which items came to be included is a ____________.', 'selection effect'),
     ('The language in which material on a subject happens to exist is a ____________.', 'language of availability'),
     ('A group whose view appears nowhere in the material is an ____________.', 'unrepresented constituency'),
     ('An adjustment for what happens not to be searchable is a ____________.', 'correction for availability'),
     ('A composition that reflects the argument rather than the archive is a ____________.', 'balance of sources'),
     ('How often a position appears in the material available is a ____________.', 'prevalence in the record'),
     ('The terms in which most available material presents a question are a ____________.', 'dominant framing')],
v_b=[('A leaning in the record is a consistent tilt', 'in a body of available material.'),
     ('A source mix is the composition of the sources used,', 'by kind and origin.'),
     ('An undocumented view is a position held', 'and not published.'),
     ('A blind spot is a subject or view', 'the available material does not cover.'),
     ('A provenance mix is the distribution of sources', 'by where they came from.')],

g_title='Grammar: impersonal structures',
g_rule=['There is a case for reports an argument without adopting it.',
        'It remains to be seen whether states that an outcome is not yet known, and implies '
        'that it will become known.',
        'It is arguable that reports a position as tenable; it is established that reports it '
        'as settled.',
        'An impersonal structure must still name whose case it is where that matters.'],
g_fig=('LOOSE',
       ['It is thought that the sources are unbalanced.',
        'There are concerns about the language mix.',
        'It is felt that more Kavaran material would help.',
        'It is understood that translations are expensive.'],
       'PRECISE',
       ['There is a case, made by Information Security, for reporting the source mix on every '
        'brief.',
        'It remains to be seen whether officers will act on a source inventory.',
        'It is established that 8 of the 9 sources were in 1 language.',
        'It is arguable that a corrected mix would have produced the same assessment.'],
       'four impersonal forms with no owner and no content',
       'two sourced impersonals, one established fact and one tenable position'),
g_fig_cap='An impersonal structure with no owner is an opinion with the author removed.',
g_a=[('There is a ____________, made by Information Security, for reporting the source mix.', 'case'),
     ('It ____________ to be seen whether officers will act on a source inventory.', 'remains'),
     ('It is ____________ that 8 of the 9 sources were in 1 language.', 'established'),
     ('It is ____________ that a corrected mix would have produced the same assessment.', 'arguable'),
     ('It is not ____________ whether Kavaran material exists on this question.', 'clear'),
     ('It has been ____________ that two sections commission translations.', 'suggested'),
     ('There is ____________ case for excluding the brief’s assessment.', 'no'),
     ('It is ____________ accepted that availability shapes a reading list.', 'generally'),
     ('It ____________ be seen whether the practice survives a busy quarter.', 'remains to')],
g_b=[('There is a case for ( reports / adopts ) an argument.', ['reports', 'adopts'], 0),
     ('It remains to be seen implies that the outcome', ['is unknowable', 'will become known', 'is settled', 'is irrelevant'], 1),
     ('It is arguable reports a position as', ['settled', 'tenable', 'false', 'sourced'], 1),
     ('An impersonal structure with no owner is', ['neutral', 'an opinion with the author removed', 'established', 'formal'], 1),
     ('Which reports a fact as settled?', ['it is thought', 'it is established', 'it is felt', 'it is understood'], 1),
     ('Which names the owner of the case?', ['There are concerns …', 'There is a case, made by Information Security, for …', 'It is felt that …', 'It is understood that …'], 1)],

d1=dict(title='Eight of nine',
        fig=(['Nine reputable sources.', 'Eight in one language.'],
             ['Nothing was excluded.', 'Nothing had to be.']),
        cap='Karim Dalati and Dr Hana Mourad, in April.',
        lines=[('Karim', 'Your brief uses nine sources. Eight are in one language, seven come '
                         'from institutions in two cities, and none is from Kavara.'),
               ('Hana', 'Is any of them unreliable?'),
               ('Karim', 'All nine are reputable and correctly cited. I am not auditing your '
                         'brief. I am auditing where its inputs came from.'),
               ('Hana', 'Nothing was excluded. Those are the nine the search returned.'),
               ('Karim', 'Which is the finding. Material published in that language and in '
                         'those cities is indexed, digitised and searchable; material published '
                         'in Kavara is largely none of those things. The search returned the '
                         'shape of the searchable record.'),
               ('Hana', 'And my assessment may still be right.'),
               ('Karim', 'It may well be right. My finding is that the Ministry cannot tell, '
                         'because the composition of the input is unexamined and nobody in the '
                         'chain looked at it, including me until last week.'),
               ('Hana', 'The honest response is that there is a case for reporting the source '
                        'mix on every brief, and that it remains to be seen whether anybody '
                        'acts on it.'),
               ('Karim', 'That is the right way to put both halves of it.'),
               ('Hana', 'And I would add the thing that troubles me most. I have been reading '
                        'material in that language for twenty years, so a search that returns '
                        'it feels to me like a search that has worked.')],
        a=[('What did the inventory find?', 'eight sources in one language, seven from two cities, none from Kavara'),
           ('Was any source unreliable?', 'no; all nine were reputable and correctly cited'),
           ('Why were those the nine?', 'because that material is indexed and searchable and Kavaran material largely is not'),
           ('What is Karim’s finding?', 'that the Ministry cannot tell whether the assessment is right'),
           ('What troubles Hana most?', 'that a search returning familiar material feels like a search that has worked')],
        b=[('I am auditing where its ____________ came from.', 'inputs'),
           ('The shape of the ____________ record.', 'searchable'),
           ('The composition of the input is ____________.', 'unexamined'),
           ('Feels to me like a search that has ____________.', 'worked')]),
d2=dict(title='Where it does not enter',
        fig=(['So the method is biased.', 'The method has no view.'],
             ['Then what is biased?', 'The record it is pointed at.']),
        cap='Karim and Samir Haddad.',
        lines=[('Samir', 'Your finding will be reported as a finding of bias.'),
                ('Karim', 'It will, and the word will do damage, because it suggests that '
                          'something in the process has a view about Kavara.'),
               ('Samir', 'Does it not?'),
               ('Karim', 'Nothing in the search has a view. It returned what is indexed. The '
                         'slant is in what the world has digitised, which is a fact about '
                         'publishing and libraries and funding over forty years, and it was '
                         'exactly as present in 1990 when an officer walked to a reading room.'),
               ('Samir', 'In 1990 the officer knew what was not on the shelves.'),
               ('Karim', 'Some officers did. The difference is not that the slant is new; it is '
                         'that a search returns nine sources in four seconds and a reading room '
                         'took a week, and a week of walking past empty shelves teaches you '
                         'something that four seconds does not.'),
               ('Samir', 'So the remedy is the inventory.'),
               ('Karim', 'The remedy is the inventory, which puts the empty shelf back in front '
                         'of the officer. It will not tell anybody what the missing material '
                         'says.'),
               ('Samir', 'Then be careful how you write it. A finding that our research is '
                         'biased will be read as a criticism of Policy Planning, which did '
                         'nothing wrong, and the people who did nothing wrong are the ones who '
                         'will stop cooperating with you.'),
               ('Karim', 'I will write it as a finding about the record and not about the '
                         'section, and I expect it to be quoted as the other thing anyway.')],
        a=[('How will the finding be reported?', 'as a finding of bias'),
           ('Where is the slant?', 'in what the world has digitised, not in the search'),
           ('What has changed since 1990?', 'not the slant but the speed; a week of empty shelves taught something four seconds does not'),
           ('What does the inventory do?', 'puts the empty shelf back in front of the officer'),
           ('What does Samir warn about?', 'that the finding will be read as a criticism of a section that did nothing wrong')],
        b=[('Nothing in the search has a ____________.', 'view'),
           ('A fact about publishing and libraries and ____________.', 'funding'),
           ('Puts the empty ____________ back in front of the officer.', 'shelf'),
           ('The people who did nothing wrong are the ones who will stop ____________.', 'cooperating')]),

speak=[('Report without adopting',
        ['Student A: state a contested position in your field.',
         'Student B: report it with there is a case for and with it is arguable that.',
         'Then name whose case it is.']),
       ('Inventory your sources',
        ['List the sources you used for your last piece of work.',
         'Say how many were in one language and from one place.',
         'Say what is missing and why.']),
       ('The empty shelf',
        ['Name a view in your field that is held and not published.',
         'Say how you would ever encounter it.',
         'Say what your office would have to pay for it.'])],

ext_title='The slant is in the record rather than in the method, and the method returns it in four seconds',
ext_fig=figs.datatable('THE APRIL BRIEF, BY SOURCE',
                       ['', 'Figure', 'Note'],
                       [['sources used', '9', 'all reputable and cited'],
                        ['in 1 language', '8', '—'],
                        ['from institutions in 2 cities', '7', '—'],
                        ['from the state assessed', '0', '—'],
                        ['excluded by anybody', '0', 'nothing was excluded'],
                        ['Kavaran material searchable', 'little', 'not digitised or indexed']]),
ext_fig_cap='Nothing was excluded, and the sixth row is why the fourth is zero.',
ext=[
 'Bias in an assisted brief is usually discussed as though it were a property of the method, '
 'and the discussion is mostly misdirected. A search over a closed collection and the open '
 'record has no view about the state whose conduct is being assessed. It returns what is '
 'indexed, digitised and searchable.',
 'The slant is in the record. Material published in certain languages, by institutions in '
 'certain cities, with certain funding, is catalogued, digitised and findable; material '
 'published elsewhere, in other languages, often is not. This is a fact about forty years of '
 'publishing, library funding and digitisation programmes, and it was exactly as true when an '
 'officer walked to a reading room in 1990.',
 'What has changed is the speed, and the speed changes what an officer learns. A week in a '
 'reading room teaches you where the empty shelves are: you go looking for the Kavaran material, '
 'you fail to find it, and the failure is part of your education. A search returns nine sources '
 'in four seconds, all of them good, and reports nothing about the nine thousand that do not '
 'exist in searchable form. The officer is better informed and worse calibrated.',
 'The remedy is an audit of composition rather than of conclusion. A source inventory on every '
 'brief, giving the number of sources by language, by provenance and by relation to the subject '
 '— how many from the state being assessed — puts the empty shelf back in front of the '
 'officer. It does not say what the missing material would have said, and claiming that it '
 'corrects the bias would be a second error.',
 'Two cautions about reporting this. The first is that the word bias will be read as a '
 'criticism of the section that wrote the brief, which did nothing wrong and excluded nothing, '
 'and the officers who did nothing wrong are the ones who will stop cooperating with an '
 'auditor. The second is harder: an officer who has read in a language for twenty years '
 'experiences a search that returns it as a search that has worked, and no inventory reaches '
 'that. What an inventory does is make the composition visible to somebody who did not choose '
 'it.'],
dp1=('Source composition in analysis',
     'Analytical units in several foreign ministries added source-composition reporting to '
     'briefs in 2025, recording sources by language and provenance after audits found heavy '
     'concentration arising from differences in digitisation rather than from any editorial '
     'choice.',
     'Source: reported practice in diplomatic analysis, 2025–2026.'),
e_a=[('Why is the usual discussion misdirected?', 'because the search has no view; it returns what is searchable'),
     ('Where is the slant?', 'in the record: what has been catalogued, digitised and funded'),
     ('What has changed?', 'the speed, and with it what an officer learns'),
     ('What did a week in a reading room teach?', 'where the empty shelves are'),
     ('What does a source inventory do and not do?', 'it makes composition visible; it does not say what the missing material would have said')],
e_b=[('The method has a view about the state assessed.', 'F'),
     ('The slant is new.', 'F'),
     ('An officer with nine good sources is better calibrated.', 'F'),
     ('An inventory corrects the bias.', 'F'),
     ('The word bias will be read as a criticism of the drafting section.', 'T'),
     ('Familiarity makes a search feel successful.', 'T')],

w_model=(
 'Purpose: report the composition of the sources used in each brief, so that a reader can see '
 'what the brief rests on as well as what it says. Scope: every brief going above head of '
 'section level; internal notes and press summaries are out of scope. Inputs: the sources '
 'cited, the closed collection’s catalogue, and the brief itself. Criteria: give the number of '
 'sources by language of publication; give the number by state or institution of origin; give '
 'the number originating in the state or states whose conduct the brief assesses; state what '
 'was searched for and not found; do not characterise the brief’s assessment and do not state '
 'what missing material would have shown. Done: 1 source inventory of no more than half a '
 'page, attached to every brief above head of section level. Fallback: where the language or '
 'origin of a source cannot be determined, list it as not established rather than assigning '
 'it.'),
w_fig=figs.spec_card('THE TASKING FOR A SOURCE INVENTORY',
                     [('Purpose', 'what the brief rests on, as well as what it says'),
                      ('Scope', 'briefs above head of section; notes and press excluded'),
                      ('Inputs', 'the sources cited, the catalogue, the brief'),
                      ('Criteria', 'counts by language, origin and relation to the subject; searches that failed'),
                      ('Done', 'half a page attached to every such brief'),
                      ('Fallback', 'origin undeterminable: not established, never assigned')]),
w_fig_cap='State what was searched for and not found: that line is the empty shelf.',
w_task='Write a source-composition tasking for your own work.',
w_steps=['Say what the reader must be able to see.',
         'Name the documents covered and those excluded.',
         'Require counts by language and origin.',
         'Require the failed searches to be stated.',
         'Forbid any characterisation of the conclusion.'],
w_bank=['Report … so that a reader can see … as well as …',
        'Cover … ; … are out of scope.',
        'Work from … , … and …',
        'Give the number of sources by … ; give … ; give … ; state what … ; do not characterise … and do not state …',
        'Where … cannot be determined, list it as … rather than …'],
w_check=['Are counts required by language and origin?',
         'Is the number from the assessed state required?',
         'Are failed searches recorded?',
         'Is speculation about missing material forbidden?'],

t_title='Bias in sources and where it enters',
t_fig=figs.split('WHERE THE SLANT IS',
                 'Not here',
                 ['in the search, which has no view',
                  'in the citation, which is correct',
                  'in the section, which excluded nothing',
                  'in the assessment, which may be right'],
                 'Here',
                 ['in what has been digitised',
                  'in what is catalogued and indexed',
                  'in which languages were funded',
                  'in the four seconds that hide it']),
t_fig_cap='The left column is where the word bias will be aimed. The right column is where the problem is.',
t_body=[
 'Do not locate the problem in the method. A search over a closed collection and the open '
 'record has no view about the state it is reading about; it returns what is indexed and '
 'digitised. Nothing was excluded from the April brief and nothing had to be.',
 'The slant sits in the record. What has been catalogued, digitised and funded over forty '
 'years is not evenly distributed across languages, institutions or states, and a search over '
 'it returns that distribution faithfully. It was as true in a reading room in 1990 as it is '
 'now. What has changed is four seconds against a week, and a week of looking for material '
 'that is not there teaches an officer where the empty shelves are, while four seconds of nine '
 'excellent sources teaches nothing about the nine thousand that were never digitised. The '
 'officer ends better informed and worse calibrated.',
 'So audit the composition rather than the conclusion. Report, on every brief, the number of '
 'sources by language, by origin, and by relation to the subject — how many came from the '
 'state whose conduct is being assessed — and what was searched for and not found. Then '
 'resist two temptations: do not claim the inventory corrects anything, because it says nothing '
 'about what the missing material held; and do not let the word bias be aimed at the section, '
 'which did nothing wrong and whose cooperation you need.'],
t_say=[('Audit the input: ', '9 sources: 8 in 1 language, 7 from 2 cities, 0 from Kavara.'),
       ('State the failure: ', 'Searched for Kavaran material on this question; none found in searchable form.'),
       ('Refuse the inference: ', 'What the missing material holds is not known.')],
t_bound=('An inventory counts sources and can state what a search failed to find. It cannot '
         'say what the unsearchable material would have shown, cannot weigh an undocumented '
         'view, and does not correct a composition it merely describes. Nor does it reach the '
         'officer for whom a search returning familiar material feels like a search that '
         'worked.'),
t_a=[('9 sources: 8 in 1 language, 7 from 2 cities, 0 from ____________.', 'Kavara'),
     ('Searched for Kavaran material; none found in ____________ form.', 'searchable'),
     ('What the missing material holds is not ____________.', 'known'),
     ('Four seconds against a ____________.', 'week'),
     ('Better informed and worse ____________.', 'calibrated'),
     ('A composition it merely ____________.', 'describes')],
t_b_rubric='Rewrite each impersonal structure so that it carries an owner or a content.',
t_b=[('It is thought that the sources are unbalanced.', 'there is a case, made by Information Security, for reporting the source mix on every brief'),
     ('There are concerns about the language mix.', 'it is established that eight of the nine sources were in one language'),
     ('It is felt that more Kavaran material would help.', 'it remains to be seen whether officers will act on a source inventory'),
     ('It is understood that translations are expensive.', 'it is arguable that a corrected mix would have produced the same assessment')],

case=dict(
 title='The Decision Room · What the inventory is for',
 brief=[
  'The source inventory is attached to every brief above head of section level. Two sections '
  'have begun commissioning translations of material that was not searchable.',
  'A third section has begun citing Kavaran material of poor quality in order to make the '
  'inventory look balanced.',
  'Karim must decide what to do. Hana Mourad says a bad source cited for balance is worse than '
  'no source. Samir Haddad asks what the Ministry would have said if the inventory had '
  'produced nothing at all.'],
 exhibit=figs.datatable('TWO QUARTERS OF INVENTORIES',
                        ['', 'Figure', 'Note'],
                        [['briefs with an inventory', '160', '—'],
                         ['sources from the assessed state, before', '4 per cent', '—'],
                         ['sources from the assessed state, now', '11 per cent', '—'],
                         ['translations commissioned', '31', '2 sections'],
                         ['poor-quality sources cited for balance', '9', '1 section'],
                         ['briefs whose assessment changed', '2', 'of 160']]),
 exhibit_cap='Thirty-one translations and nine bad citations, and two briefs in which the '
             'assessment moved.',
 exhibit_note='The 9 poor-quality citations were all in briefs from the same section and were '
              'each cited once and not relied on.',
 voices=[('Dr Hana Mourad', 'Policy Planning',
          'The nine citations are worse than the gap they fill. A source cited for the '
          'inventory and not relied on is a false signal to every later reader.'),
         ('Karim Dalati', 'Information Security and Records',
          'They are worse, and they are nine out of a hundred and sixty. Thirty-one '
          'translations is the result I did not expect and would not have predicted, and I am '
          'reluctant to change a rule that produced it.'),
         ('Samir Haddad', 'Legal and Treaties',
          'Ask the other question. If the inventory had changed nothing at all, would you have '
          'kept it? If the answer is yes, then it is a disclosure rule and not an improvement '
          'rule, and the nine citations are a disclosure problem.')],
 steps=[('Find it', 'What did the inventory produce in two quarters?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Samir ask about a null result?'),
        ('Weigh it', 'Thirty-one translations against nine false signals.'),
        ('Decide', 'What is the inventory for, and what is done about the nine?')],
 analysis=[('Find it. How did the proportion from the assessed state change?', 'from four per cent to eleven'),
           ('Compare it. What does Hana say about the nine?', 'that a source cited for balance and not relied on is a false signal'),
           ('Infer it. What does Samir’s question establish?', 'whether the inventory is a disclosure rule or an improvement rule'),
           ('Weigh it. How many assessments changed?', 'two of a hundred and sixty'),
           ('Decide. What would you do?', 'answers vary; requiring the inventory to mark reliance distinguishes a cited source from a used one')],
 decision='Write what the inventory must now show.',
 decision_steps=['Say what the inventory is for, in one sentence.',
                 'Say what it must record about reliance.',
                 'Say what happens to a source cited and not relied on.',
                 'Say what is published about the figures.'],
 bank=['The inventory exists in order to …',
       'For each source the inventory records …',
       'A source cited and not relied on is …',
       'The figures by section are …',
       'This is reviewed …'],
 outcome='The inventory was defined as a disclosure rule: it exists so that a reader can see '
         'the composition of the input, and not in order to improve it. For each source it now '
         'records whether the brief relies on it, and a source cited and not relied on is '
         'listed separately under not relied on. The nine citations moved into that column and '
         'the section stopped making them within a quarter. Translations continued at about '
         'fifteen a quarter. Hana, who had wanted the nine treated as a failure of the rule, '
         'says the reliance column solved it without an argument and that her objection had '
         'been to a signal rather than to a citation.',
 outcome_q=[('How was the inventory defined?', 'as a disclosure rule, so a reader can see the composition of the input'),
            ('What does it now record per source?', 'whether the brief relies on it, with unrelied sources listed separately')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Research the transit question',
 task=['This is the research tasking behind the April brief, and it is a good tasking by the '
       'standards of Book 3.',
       'It produced nine reputable sources, eight of them in one language.'],
 draft=['Research the regional transit question.',
        'Use reputable sources and cite each one.',
        'Cover the positions of the states concerned.',
        'Draw on the closed collection and the open record.',
        'Set out the assessment with its basis.',
        'Within five working days.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, every one of them sound, and nothing about the composition of what '
           'comes back.',
 asked=['Counts by language and origin',
        'The number from the state assessed',
        'What was searched for and not found'],
 back=['9 reputable sources, each cited',
       '8 in 1 language, 7 from 2 cities',
       'No record that anything had been looked for and not found'],
 gap='"Reputable sources" is a test of each source and not of the set, "the positions of the '
     'states concerned" assumes those positions are documented, "the closed collection and the '
     'open record" is where the slant lives, and nothing asks what was missing.',
 back_cap='A tasking that would pass any inspection, producing a set nobody had looked at as a '
          'set.',
 back_note='Line three is the failure. It assumes that a state’s position is available in '
           'searchable form, and where it is not the brief simply does without it.',
 diagnosis=[('[1] "the regional transit question" — which states, over what period?', 'unscoped set'),
            ('[2] "reputable sources" — tested individually or as a set?', 'unstated criterion'),
            ('[3] "the positions of the states concerned" — assumes each is documented and searchable', 'hidden assumption'),
            ('[4] "the closed collection and the open record" — assumes these represent the argument', 'hidden assumption'),
            ('[5] "with its basis" — basis meaning the sources used or the sources available?', 'unstated criterion'),
            ('[6] nothing on what was not found — recorded or not?', 'unscoped set')],
 rewrite='Rewrite the tasking so that the composition of the sources is reported.',
 scaffold=['What the reader must be able to see besides the assessment',
           'The question and period covered, and what is excluded',
           'The sources, the catalogue and the brief',
           'Counts by language and origin, the number from the assessed state, failed searches, no characterisation',
           'The inventory, its length and where it is attached',
           'What to do where a source’s origin cannot be determined'],
 bank=['Report … so that a reader can see …',
       'Cover … ; … are out of scope.',
       'Work from … , … and …',
       'Give … by … ; give … ; state what … ; do not characterise …',
       'Return 1 … of no more than … , attached to …',
       'Where … cannot be determined, list it as …'],
 check=['Is the set tested as well as each source?',
        'Is the number from the assessed state required?',
        'Are failed searches recorded?',
        'Is characterising the assessment forbidden?'],
 model=['Report the composition of the sources used in each brief, so that a reader can see what the brief rests on as well as what it says',
        'Every brief going above head of section level; internal notes and press summaries are out of scope',
        'The sources cited, the closed collection’s catalogue, and the brief itself',
        'Give the number of sources by language of publication; give the number by state or institution of origin; give the number originating in the state or states whose conduct the brief assesses; state what was searched for and not found; do not characterise the brief’s assessment and do not state what missing material would have shown',
        '1 source inventory of no more than half a page, attached to every brief above head of section level',
        'Where the language or origin of a source cannot be determined, list it as not established rather than assigning it'],
 cost='1 brief assessing a state’s conduct on 9 sources, none of them from that state, with '
      'nothing on the file recording that anybody had noticed.'),

rev_fig=figs.split('IMPERSONALS',
                   'No owner',
                   ['It is thought that …',
                    'There are concerns about …',
                    'It is felt that …',
                    'It is understood that …'],
                   'With owner or content',
                   ['There is a case, made by … , for …',
                    'It is established that 8 of 9 …',
                    'It remains to be seen whether …',
                    'It is arguable that …']),
rev_fig_cap='There is a case for; it remains to be seen; it is arguable; it is established.',
rev=dict(
 read=[('The slant sits in', ['the method', 'the record', 'the citation', 'the section'], 1),
       ('What has changed since 1990 is', ['the slant', 'the speed', 'the languages', 'the libraries'], 1),
       ('A source inventory', ['corrects the composition', 'makes the composition visible', 'weighs missing views', 'excludes sources'], 1),
       ('In the Decision Room, what does the inventory now record?', ['nothing new', 'whether the brief relies on each source', 'the cost', 'the language only'], 1)],
 listen_text='A search returns nine sources in four seconds, all of them good, and reports '
             'nothing about the nine thousand that do not exist in searchable form. The '
             'officer is better informed and worse calibrated.',
 listen=[('Nine sources in four ____________.', 'seconds'),
         ('The nine ____________ that do not exist in searchable form.', 'thousand'),
         ('Better ____________.', 'informed'),
         ('And worse ____________.', 'calibrated')],
 speak=['Inventory the sources of your last piece of work by language and origin.',
        'Report a contested position with there is a case for, naming whose case it is.'],
 write='Write one line stating what a search looked for and did not find.',
 vocab=[('A list of the sources used with their origins and languages is a ____________.', 'source inventory'),
        ('A distortion caused by which items came to be included is a ____________.', 'selection effect'),
        ('The language in which material on a subject happens to exist is a ____________.', 'language of availability'),
        ('A group whose view appears nowhere in the material is an ____________.', 'unrepresented constituency'),
        ('A composition that reflects the argument rather than the archive is a ____________.', 'balance of sources')],
 gram=[('There is a ____________, made by Information Security, for reporting the source mix.', 'case'),
       ('It ____________ to be seen whether officers will act on a source inventory.', 'remains'),
       ('It is ____________ that 8 of the 9 sources were in 1 language.', 'established'),
       ('It is ____________ that a corrected mix would have produced the same assessment.', 'arguable'),
       ('It has been ____________ that two sections commission translations.', 'suggested')]),

found=['Count the languages and origins of the sources in your last piece of work.',
       'Name one view in your field that is held and not published.',
       'Write one line recording what you searched for and did not find.',
       'Report one contested position with its owner named.'],
end_line='The officer ends better informed and worse calibrated.',
end_next='Next: Decided Not To, On Purpose',
)
