# -*- coding: utf-8 -*-
import figs

U = dict(
num=1, title='Which System May See This',
gram='prohibition and permission at the highest register',
ai='classification: which system may be shown which material',
strap='CEFR C1 · Grammar: prohibition and permission · AI: which system may see this',
cando=['express prohibition and permission at the highest formal register',
       'distinguish shall not, may not, is not to be and must never be',
       'say what a classification marking governs and what it does not',
       'identify an aggregation risk in material that is individually unclassified',
       'write a handling rule that an officer can apply in four seconds'],
hero=('NOTHING IN IT WAS CLASSIFIED',
      ['Eleven documents, each of them unclassified, each properly marked.',
       'Together they gave the Ministry’s negotiating position on three issues.'],
      [(730, 'blue', 'long'), (1390, 'teal', 'short'),
       (2050, 'purple', 'long'), (2690, 'orange', 'short')]),
hero_cap='Information Security and Records, with eleven documents on the table.',

warm=['How does your organisation decide what may go into which system?',
      'Can material that is individually harmless become sensitive in combination?',
      'Who in your office decides, and in how many seconds?'],
read=[
 'Karim Dalati’s section writes the handling rules. The rule in force since the spring is one '
 'sentence: material marked above unclassified is not to be entered into any system that has '
 'not been accredited for that marking.',
 'The rule is correct, it is understood, and in March it was complied with in every particular '
 'by an officer who assembled eleven unclassified documents and used an unaccredited system to '
 'summarise them for a colleague.',
 'Each of the eleven was properly marked and properly unclassified: a published tender notice, '
 'two press summaries, a trade statistic, a record of an open committee session, a list of '
 'attendees, and five pieces of internal correspondence that contained nothing a foreign '
 'ministry would protect.',
 'The summary he received set out, correctly, the Ministry’s negotiating position on three '
 'issues, because the position was the only reading that made all eleven documents consistent. '
 'Nothing had leaked and nothing had been misclassified. The position had been inferred from '
 'eleven things nobody had thought worth protecting.',
 'The rule now has a second sentence, and Karim is careful about how he describes its value. '
 'Material is not to be assembled from more than five sources in an unaccredited system '
 'without the authority of a records officer. He says the number five is arbitrary, that the '
 'rule will prevent some harmless things and permit some harmful ones, and that its only '
 'virtue is that an officer can apply it in four seconds, which the correct rule cannot.'],
c_a=[('What was the rule in force since the spring?', 'material above unclassified is not to be entered into an unaccredited system'),
     ('What did the officer do in March?', 'assembled eleven unclassified documents and summarised them in an unaccredited system'),
     ('What were the eleven documents?', 'public notices, press summaries, a statistic, a session record, a list of attendees and five pieces of internal correspondence'),
     ('What did the summary set out?', 'the Ministry’s negotiating position on three issues'),
     ('Why?', 'because the position was the only reading that made all eleven consistent'),
     ('What is the second sentence of the rule?', 'that material is not to be assembled from more than five sources in an unaccredited system without authority')],
c_b=[('The officer complied with the rule in every particular.', 'T'),
     ('One of the eleven documents was misclassified.', 'F'),
     ('The position was inferred rather than disclosed.', 'T'),
     ('Karim says the number five is well founded.', 'F'),
     ('The rule will permit some harmful things.', 'T'),
     ('Its virtue is that it can be applied in four seconds.', 'T')],
c_c=[('Any system that has not been ____________ for that marking.', 'accredited'),
     ('Complied with in every ____________.', 'particular'),
     ('Nothing a foreign ministry would ____________.', 'protect'),
     ('The only reading that made all eleven documents ____________.', 'consistent'),
     ('Inferred from eleven things nobody had thought worth ____________.', 'protecting'),
     ('An officer can apply it in four ____________.', 'seconds')],
c_d=[('The failure was one of ( classification / aggregation ).', ['classification', 'aggregation'], 1),
     ('How many documents were assembled?', ['five', 'eleven', 'three', 'four'], 1),
     ('How many issues did the summary cover?', ['one', 'three', 'eleven', 'five'], 1),
     ('What does the new rule limit?', ['markings', 'sources assembled in an unaccredited system', 'officers', 'systems'], 1),
     ('What does Karim say about the number five?', ['it is correct', 'it is arbitrary', 'it is secret', 'it is temporary'], 1)],
c_e=('Match each form to what it does.',
     [('shall not be entered', 'prohibits, in a rule'),
      ('is not to be entered', 'prohibits, in an instruction'),
      ('may not be entered', 'withholds permission'),
      ('must never be entered', 'prohibits absolutely'),
      ('may be entered with authority', 'permits conditionally'),
      ('is to be entered', 'requires')],
     ['prohibits, in a rule', 'prohibits, in an instruction', 'withholds permission',
      'prohibits absolutely', 'permits conditionally', 'requires']),

v_fig_title='HANDLING',
v_fig=[('shield', 'a protective marking'), ('key', 'a clearance level'), ('doc', 'a handling instruction'),
       ('bulb', 'an aggregation risk'), ('pin', 'a redaction'), ('clock', 'a declassification')],
v_fig_cap='Six words for the apparatus that decides where a document may go.',
vocab=[
 ('a classification', 'the level of protection a document is assigned'),
 ('a protective marking', 'the words printed on a document stating its classification'),
 ('a handling instruction', 'a rule stating how a marked document may be treated'),
 ('a need-to-know', 'the principle that access depends on a duty requiring it'),
 ('a clearance level', 'the classification a named person may see'),
 ('a caveat marking', 'an additional restriction narrowing who may see a document'),
 ('a declassification', 'the removal of a classification from a document'),
 ('a downgrading of classification', 'the reduction of a document’s protection level'),
 ('an aggregation risk', 'the risk that unclassified items together reveal something protected'),
 ('a data residency', 'the requirement that material be held in a stated place'),
 ('a processing boundary', 'the limit of the systems within which material may be handled'),
 ('an air-gapped system', 'a system with no connection to any network outside it'),
 ('an accredited system', 'a system formally approved for material at a stated marking'),
 ('an unaccredited system', 'a system not approved for marked material'),
 ('a spillage', 'the arrival of marked material in a system not approved for it'),
 ('a breach', 'a failure of a security rule, whether or not harm followed'),
 ('a sanitised version', 'a version from which protected material has been removed'),
 ('a redaction', 'the covering or removal of part of a document'),
 ('an extract for wider circulation', 'a part taken out so that more people may see it'),
 ('a handling receipt', 'the record that a marked document was received and by whom')],
v_a=[('The risk that unclassified items together reveal something protected is an ____________.', 'aggregation risk'),
     ('A system formally approved for material at a stated marking is an ____________.', 'accredited system'),
     ('The arrival of marked material in a system not approved for it is a ____________.', 'spillage'),
     ('An additional restriction narrowing who may see a document is a ____________.', 'caveat marking'),
     ('The limit of the systems within which material may be handled is a ____________.', 'processing boundary'),
     ('A version from which protected material has been removed is a ____________.', 'sanitised version'),
     ('The record that a marked document was received is a ____________.', 'handling receipt'),
     ('The requirement that material be held in a stated place is a ____________.', 'data residency')],
v_b=[('A classification is the level of protection', 'a document is assigned.'),
     ('A need-to-know is the principle that access', 'depends on a duty requiring it.'),
     ('An air-gapped system is a system with', 'no connection to any network outside it.'),
     ('A breach is a failure of a security rule,', 'whether or not harm followed.'),
     ('An extract for wider circulation is a part taken out', 'so that more people may see it.')],

g_title='Grammar: prohibition and permission at the highest register',
g_rule=['Shall not belongs in a rule; is not to be belongs in an instruction to a person.',
        'May not withholds permission; must never prohibits absolutely and admits no '
        'authority to permit.',
        'May plus with the authority of names who can lift a prohibition.',
        'A prohibition with no named authority to lift it is read as absolute, and should be '
        'written as absolute or given an authority.'],
g_fig=('LOOSE',
       ['Officers should avoid using unaccredited systems for sensitive material.',
        'It is not advisable to combine several documents.',
        'Marked material shouldn’t go into these systems.',
        'Please do not assemble documents in this way.'],
       'PRECISE',
       ['Material marked above unclassified is not to be entered into an unaccredited system.',
        'Material is not to be assembled from more than 5 sources in an unaccredited system '
        'without the authority of a records officer.',
        'Material carrying a caveat marking must never be entered into any system outside the '
        'Ministry.',
        'An extract may be circulated more widely with the authority of the originating '
        'section.'],
       'four prohibitions expressed as advice',
       'two prohibitions, one absolute prohibition and one conditional permission'),
g_fig_cap='A prohibition written as advice will be weighed against the officer’s workload, and '
          'will lose.',
g_a=[('Material marked above unclassified is not ____________ be entered into an unaccredited system.', 'to'),
     ('Material is not to be assembled from more than 5 sources ____________ the authority of a records officer.', 'without'),
     ('Material carrying a caveat marking ____________ never be entered into any outside system.', 'must'),
     ('An extract ____________ be circulated more widely with the authority of the originating section.', 'may'),
     ('No marked material ____________ leave the accredited boundary.', 'shall'),
     ('Officers ____________ not use an unaccredited system for this purpose.', 'may'),
     ('This prohibition ____________ not be lifted by a head of section.', 'may'),
     ('The material is ____________ be held within the Ministry’s own systems.', 'to'),
     ('Access is ____________ to those whose duties require it.', 'limited')],
g_b=[('Must never admits ( no authority to permit / an authority to permit ).', ['no authority to permit', 'an authority to permit'], 0),
     ('Which belongs in an instruction to a person?', ['shall not', 'is not to be', 'ought not', 'should avoid'], 1),
     ('Which withholds permission?', ['must never', 'may not', 'is to be', 'shall'], 1),
     ('A prohibition with no named authority to lift it is read as', ['advisory', 'absolute', 'conditional', 'temporary'], 1),
     ('Which is a conditional permission?', ['must never be entered', 'may be circulated with the authority of …', 'is not to be entered', 'shall not leave'], 1),
     ('A prohibition written as advice will be', ['followed', 'weighed against workload', 'absolute', 'recorded'], 1)],

d1=dict(title='Nothing in it was classified',
        fig=(['Eleven unclassified documents.', 'And the position on three issues.'],
             ['He broke no rule.', 'He broke no rule we had written.']),
        cap='Karim Dalati and Samir Haddad, in March.',
        lines=[('Samir', 'Your officer put eleven documents into an unaccredited system. What '
                         'was the marking on them?'),
               ('Karim', 'Unclassified. All eleven, correctly. A tender notice, two press '
                         'summaries, a trade figure, an open session record, an attendee list '
                         'and five pieces of internal correspondence with nothing in them.'),
               ('Samir', 'Then he complied with the rule.'),
               ('Karim', 'He complied with the rule in every particular, and the summary he got '
                         'back gives our negotiating position on three issues.'),
               ('Samir', 'From unclassified material.'),
               ('Karim', 'From eleven pieces of unclassified material, because the position is '
                         'the only thing that makes all eleven consistent with each other. '
                         'Nobody disclosed anything. It was inferred.'),
               ('Samir', 'That is not a new problem. Aggregation has been in the handling '
                         'literature for fifty years.'),
               ('Karim', 'It has, and for fifty years it has been a theoretical problem, '
                         'because nobody had the hours to read eleven documents in order to '
                         'infer a position from the pattern. It has stopped being theoretical, '
                         'and it has stopped costing anything.'),
               ('Samir', 'So the classification of individual documents has become the wrong '
                         'unit.'),
               ('Karim', 'The marking still governs the document. What it no longer governs is '
                         'what can be learned from a set of documents none of which is marked, '
                         'and I have no rule for that which is both correct and usable.')],
        a=[('What was the marking on the eleven documents?', 'unclassified, all of them correctly'),
           ('Did the officer comply with the rule?', 'yes, in every particular'),
           ('What did the summary give?', 'the Ministry’s negotiating position on three issues'),
           ('Why was aggregation theoretical for fifty years?', 'because nobody had the hours to infer a position from eleven documents'),
           ('What does the marking no longer govern?', 'what can be learned from a set of documents none of which is marked')],
        b=[('Five pieces of internal correspondence with ____________ in them.', 'nothing'),
           ('The only thing that makes all eleven ____________ with each other.', 'consistent'),
           ('It has stopped being ____________.', 'theoretical'),
           ('Both correct and ____________.', 'usable')]),
d2=dict(title='Five is arbitrary',
        fig=(['Why five?', 'Because four seconds.'],
             ['That is not a reason.', 'It is the only reason that works.']),
        cap='Karim and Dr Hana Mourad.',
        lines=[('Hana', 'Your new rule prohibits assembling material from more than five '
                        'sources in an unaccredited system. Why five?'),
               ('Karim', 'There is no answer to that question. Five is arbitrary.'),
               ('Hana', 'Then defend it.'),
               ('Karim', 'The correct rule is that material is not to be assembled where the '
                         'assembly would permit a protected inference. That rule is right, it '
                         'covers every case, and no officer can apply it, because applying it '
                         'requires knowing what inference is available from a set you have not '
                         'yet assembled.'),
               ('Hana', 'Which is the thing the assembly was for.'),
               ('Karim', 'Exactly. So the correct rule is unusable and an officer facing it at '
                         'six in the evening will comply by guessing, which means complying when '
                         'cautious and not complying when busy.'),
               ('Hana', 'And five?'),
               ('Karim', 'Five can be counted. An officer looks at what they are about to '
                         'assemble, counts, and either proceeds or asks a records officer. Four '
                         'seconds, no judgement, no knowledge of inference required.'),
               ('Hana', 'It will prevent a great many harmless assemblies.'),
               ('Karim', 'It will prevent hundreds, and it will permit some harmful ones, '
                         'because six trivial documents are usually harmless and three '
                         'well-chosen ones are sometimes not. I am trading accuracy for '
                         'applicability and I would rather say so than pretend five means '
                         'something.'),
               ('Hana', 'I would put that sentence in the instruction.'),
               ('Karim', 'It is in the instruction. The rule says, in terms, that the number is '
                         'a working limit and not a threshold of harm.')],
        a=[('Why five?', 'there is no answer; five is arbitrary'),
           ('What is the correct rule?', 'that material is not to be assembled where the assembly would permit a protected inference'),
           ('Why is the correct rule unusable?', 'because applying it requires knowing an inference available from a set not yet assembled'),
           ('What does five buy?', 'countability: four seconds, no judgement, no knowledge of inference'),
           ('What does the instruction say about the number?', 'that it is a working limit and not a threshold of harm')],
        b=[('Complying when cautious and not complying when ____________.', 'busy'),
           ('An officer looks at what they are about to ____________.', 'assemble'),
           ('I am trading accuracy for ____________.', 'applicability'),
           ('A working limit and not a threshold of ____________.', 'harm')]),

speak=[('Prohibit precisely',
        ['Student A: state six things that should not be done in your office.',
         'Student B: rewrite each as a prohibition, naming the authority that may lift it.',
         'Mark the ones that should be absolute.']),
       ('Count the sources',
        ['Describe something you assembled from several documents.',
         'Count the sources.',
         'Say what somebody could infer from the set that is in none of them.']),
       ('Four seconds',
        ['Take a rule in your organisation.',
         'Say how long it takes to apply at six in the evening.',
         'Rewrite it so that it can be applied by counting.'])],

ext_title='A marking governs a document; it says nothing about what a set of unmarked documents '
          'will yield',
ext_fig=figs.datatable('THE ELEVEN DOCUMENTS',
                       ['Document', 'Marking', 'Alone, reveals'],
                       [['a published tender notice', 'unclassified', 'nothing'],
                        ['2 press summaries', 'unclassified', 'nothing'],
                        ['a published trade figure', 'unclassified', 'nothing'],
                        ['a record of an open session', 'unclassified', 'nothing'],
                        ['a list of attendees', 'unclassified', 'nothing'],
                        ['5 internal letters', 'unclassified', 'nothing; together, the position']]),
ext_fig_cap='Six rows of nothing, and the last cell is the Ministry’s position on three issues.',
ext=[
 'Classification is the oldest control in a foreign ministry and it operates on documents. A '
 'document is assessed, marked, and handled according to its marking: who may see it, which '
 'systems may hold it, how it is transmitted and when it may be destroyed. The logic is sound '
 'and the unit of assessment is the document.',
 'The unit of assessment has become the wrong one, and the reason is not that marking has '
 'failed. It is that inference across a set of documents has become cheap. Aggregation risk — '
 'the possibility that items individually harmless reveal something protected in combination — '
 'has been in the handling literature for fifty years and has been almost entirely '
 'theoretical, because inferring a negotiating position from eleven unremarkable documents '
 'required somebody to read all eleven with that question in mind, and nobody had the hours.',
 'Where that work costs nothing, the theoretical risk becomes the ordinary case. An officer '
 'who assembles a tender notice, some press material, a published figure, an attendee list and '
 'a few pieces of unobjectionable internal correspondence, and asks for a summary, may receive '
 'the ministry’s position on three issues, because that position is the only hypothesis under '
 'which all eleven documents are consistent. No rule has been broken, nothing has been '
 'misclassified, and nothing has leaked.',
 'The correct rule is easy to state and impossible to apply: material is not to be assembled '
 'where the assembly would permit a protected inference. An officer cannot apply that, because '
 'knowing what inference a set permits requires having made the assembly, which is the act the '
 'rule is meant to govern. Faced with such a rule at the end of a working day, officers comply '
 'when cautious and do not comply when busy, which is the characteristic failure mode of every '
 'unusable security rule.',
 'What works is a crude countable limit: not more than a stated number of sources assembled in '
 'an unaccredited system without the authority of a records officer. The number is arbitrary '
 'and should be described as arbitrary in the instruction itself, because it will prevent '
 'hundreds of harmless assemblies and permit some harmful ones. Its single virtue is that an '
 'officer can apply it by counting, in four seconds, without any judgement about inference, '
 'and a rule that is applied badly by everybody is worth more than a rule that is applied '
 'correctly by the cautious alone.'],
dp1=('Classification and aggregation',
     'Information security sections in several foreign ministries added source-count limits on '
     'assembly in unaccredited systems during 2025, describing the limits as working controls '
     'rather than thresholds of harm.',
     'Source: reported practice in diplomatic information security, 2025–2026.'),
e_a=[('What is the unit of classification?', 'the document'),
     ('Why has it become the wrong unit?', 'because inference across a set of documents has become cheap'),
     ('Why was aggregation risk theoretical?', 'because inferring a position from eleven documents required hours nobody had'),
     ('Why is the correct rule unusable?', 'because knowing what inference a set permits requires having made the assembly'),
     ('What is the single virtue of a countable limit?', 'that it can be applied by counting, in four seconds, without judgement')],
e_b=[('Marking has failed as a control on documents.', 'F'),
     ('Aggregation risk is a new idea.', 'F'),
     ('The officer in the example broke a rule.', 'F'),
     ('The correct rule covers every case.', 'T'),
     ('The countable number is well founded.', 'F'),
     ('A rule applied badly by everybody may beat one applied correctly by the cautious.', 'T')],

w_model=(
 'Purpose: state which material may be entered into which system, so that an officer can '
 'comply without judging what inference a set of documents permits. Scope: all Ministry '
 'material and all systems available to officers; material held by posts under local '
 'arrangements is out of scope and is governed by the post’s own instruction. Inputs: the '
 'marking on each document, the list of accredited systems, and the list of records officers. '
 'Criteria: material marked above unclassified is not to be entered into an unaccredited '
 'system; material carrying a caveat marking must never be entered into any system outside the '
 'Ministry; unclassified material is not to be assembled from more than 5 sources in an '
 'unaccredited system without the authority of a records officer; state in the instruction '
 'that the figure of 5 is a working limit and not a threshold of harm. Done: 1 instruction of '
 'no more than 1 page, applicable by counting, issued to all officers. Fallback: where an '
 'officer cannot tell whether a system is accredited, the material is not to be entered and '
 'the question goes to a records officer.'),
w_fig=figs.spec_card('THE TASKING FOR A HANDLING RULE',
                     [('Purpose', 'compliance without judging inference'),
                      ('Scope', 'all material and systems; posts excluded'),
                      ('Inputs', 'markings, accredited systems, records officers'),
                      ('Criteria', 'two prohibitions, one absolute, one countable limit'),
                      ('Done', '1 page, applicable by counting, to all officers'),
                      ('Fallback', 'accreditation unknown: do not enter, ask')]),
w_fig_cap='State that the figure is a working limit: a rule that pretends to measure harm will be argued with.',
w_task='Write a handling rule for the systems your own office uses.',
w_steps=['Say what the officer must be able to do without judgement.',
         'Name the material and systems covered, and what is excluded.',
         'State the prohibitions in the right register.',
         'Give a countable limit and call it arbitrary.',
         'Say what happens where accreditation is unknown.'],
w_bank=['State … so that an officer can comply without …',
        'Cover … ; … is out of scope and is governed by …',
        'Work from … , … and …',
        '… is not to be … ; … must never be … ; … is not to be assembled from more than … without … ; state that …',
        'Where an officer cannot tell whether … , the material is not to be … and …'],
w_check=['Can the rule be applied by counting?',
         'Is one prohibition absolute and one liftable by a named authority?',
         'Is the arbitrariness of the number stated?',
         'Is the default, where accreditation is unknown, to refrain?'],

t_title='Classification and which system may see it',
t_fig=figs.split('WHAT A MARKING GOVERNS',
                 'Governs',
                 ['who may see this document',
                  'which systems may hold it',
                  'how it is transmitted',
                  'when it may be destroyed'],
                 'Does not govern',
                 ['what a set of unmarked documents yields',
                  'what can be inferred from a pattern',
                  'how many sources may be combined',
                  'the position that makes them all consistent']),
t_fig_cap='The left column is sound and unchanged. The right column is new and ungoverned.',
t_body=[
 'Classification works on documents and works well: a document is assessed, marked, and '
 'handled by its marking. Nothing in this unit suggests otherwise, and a ministry that '
 'abandons document marking has lost a control that functions.',
 'The difficulty is that the unit has become too small. Aggregation risk has sat in the '
 'handling literature for fifty years as a theoretical matter, because inferring a position '
 'from eleven unremarkable documents took hours nobody had. Where that reading is free, the '
 'theoretical case becomes the ordinary one: eleven correctly unclassified documents, assembled '
 'by an officer who broke no rule, yield the Ministry’s position on three issues, because that '
 'position is the only hypothesis under which all eleven are consistent.',
 'Resist the correct rule, which is that material may not be assembled where the assembly '
 'would permit a protected inference. It is right and it cannot be applied, because knowing '
 'the available inference requires having made the assembly. Officers facing such a rule comply '
 'when cautious and not when busy. Write a countable limit instead — not more than five '
 'sources in an unaccredited system without a records officer’s authority — say in the '
 'instruction that the number is arbitrary and not a threshold of harm, and accept that it '
 'will stop hundreds of harmless things. A rule everybody applies badly beats a rule the '
 'careful apply correctly.'],
t_say=[('Prohibit absolutely: ', 'Caveated material must never be entered into any outside system.'),
       ('Give the countable limit: ', 'Not more than 5 sources in an unaccredited system.'),
       ('Admit the arbitrariness: ', 'The figure of 5 is a working limit, not a threshold of harm.')],
t_bound=('A marking describes a document and cannot describe a set. No classification system '
         'reaches the inference available from unmarked material, the correct rule about '
         'inference cannot be applied by the person who has to apply it, and a countable limit '
         'is accurate about nothing. What it is, is used.'),
t_a=[('Caveated material must ____________ be entered into any outside system.', 'never'),
     ('Not more than 5 ____________ in an unaccredited system.', 'sources'),
     ('The figure of 5 is a working ____________, not a threshold of harm.', 'limit'),
     ('The only hypothesis under which all eleven are ____________.', 'consistent'),
     ('Officers comply when cautious and not when ____________.', 'busy'),
     ('A rule everybody applies badly ____________ a rule the careful apply correctly.', 'beats')],
t_b_rubric='Rewrite each at the proper register of prohibition or permission.',
t_b=[('Officers should avoid using unaccredited systems for sensitive material.', 'material marked above unclassified is not to be entered into an unaccredited system'),
     ('It is not advisable to combine several documents.', 'material is not to be assembled from more than five sources in an unaccredited system without the authority of a records officer'),
     ('Marked material shouldn’t go into these systems.', 'material carrying a caveat marking must never be entered into any system outside the Ministry'),
     ('Please do not circulate extracts without asking.', 'an extract may be circulated more widely with the authority of the originating section')],

case=dict(
 title='The Decision Room · The number and the exception',
 brief=[
  'The five-source limit has run for a quarter. It has generated 290 requests to records '
  'officers, of which 284 were authorised, taking about four minutes each.',
  'Two sections have asked for a standing exception: Policy Planning, which assembles from '
  'dozens of published sources as its ordinary work, and Press, which monitors 41 titles.',
  'Karim must decide. Hana Mourad says a standing exception for the sections that aggregate '
  'most is the exception that empties the rule. Yara Ibrahim says a rule that requires 290 '
  'authorisations a quarter for published material is a rule about the wrong thing.'],
 exhibit=figs.datatable('THE FIRST QUARTER OF THE LIMIT',
                        ['', 'Figure', 'Note'],
                        [['requests to records officers', '290', '—'],
                         ['authorised', '284', '98 per cent'],
                         ['refused', '6', 'all 6 involved internal correspondence'],
                         ['average time per request', '4 minutes', 'records officer'],
                         ['requests from Policy Planning and Press', '211', '73 per cent'],
                         ['of those, published material only', '208', '—']]),
 exhibit_cap='Seventy-three per cent of the requests come from two sections and almost all of '
             'them concern published material.',
 exhibit_note='All 6 refusals concerned assemblies that included internal correspondence.',
 voices=[('Dr Hana Mourad', 'Policy Planning',
          'Give the two sections a standing exception for published material. We assemble from '
          'thirty sources as our ordinary work and the rule is costing a records officer three '
          'hours a week to say yes.'),
         ('Karim Dalati', 'Information Security and Records',
          'An exception for the sections that aggregate most is how a rule becomes decorative. '
          'And every one of the six refusals involved internal correspondence mixed in with '
          'published material by somebody who had not noticed.'),
         ('Yara Ibrahim', 'Press and Public Diplomacy',
          'Then split the rule by the kind of source rather than by the section. Published '
          'material without limit; internal correspondence counted, at a much lower number.')],
 steps=[('Find it', 'Where do the requests come from?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'What did all six refusals have in common?'),
        ('Weigh it', 'An exception by section against an exception by source.'),
        ('Decide', 'How is the rule changed?')],
 analysis=[('Find it. What proportion of requests came from two sections?', 'seventy-three per cent'),
           ('Compare it. What does Yara propose?', 'splitting the rule by kind of source rather than by section'),
           ('Infer it. What did the six refusals involve?', 'internal correspondence mixed with published material'),
           ('Weigh it. What does the rule cost a records officer?', 'about three hours a week'),
           ('Decide. What would you do?', 'answers vary; counting only internal sources addresses the refusals and the cost together')],
 decision='Write the amended rule.',
 decision_steps=['Say what is counted and what is not.',
                 'Give the number for what is counted.',
                 'Say what happens where a source’s status is unclear.',
                 'Say what is measured and when it is reviewed.'],
 bank=['Published material …',
       'Internal correspondence is counted, and not more than …',
       'Where it is unclear whether a source is … , …',
       'The number of requests and refusals is …',
       'This is reviewed …'],
 outcome='The rule was split by kind of source. Published material may be assembled without '
         'limit in an unaccredited system; internal correspondence is counted, and not more '
         'than two such sources may be assembled there without authority. Where the status of a '
         'source is unclear it counts as internal. Requests fell from 290 a quarter to 61, '
         'refusals rose from 6 to 14, and all 14 concerned internal correspondence. Hana, who '
         'had asked for an exception for her own section, says the source-based rule is better '
         'than what she proposed and that she had been asking to be trusted when what was '
         'needed was a rule that distinguished her published sources from her internal ones.',
 outcome_q=[('How was the rule split?', 'published material without limit; internal correspondence counted, not more than two'),
            ('What happened to requests and refusals?', 'requests fell from 290 to 61 and refusals rose from 6 to 14, all internal')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Write the handling rule',
 task=['This is the handling rule in force in the spring, in the single sentence in which it '
       'was issued.',
       'It was complied with in every particular by an officer who obtained the Ministry’s '
       'negotiating position from eleven unclassified documents.'],
 draft=['Material marked above unclassified is not to be entered into an unaccredited system.',
        'Officers should exercise care with sensitive material generally.',
        'Use accredited systems where available.',
        'Seek advice in case of doubt.',
        'Report any spillage immediately.',
        'Heads of section may authorise exceptions.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, the first of which is excellent and five of which are advice.',
 asked=['A countable limit on assembly',
        'The arbitrariness of the number stated',
        'A named authority for each liftable prohibition'],
 back=['Full compliance with line one',
       'A position inferred from 11 unmarked documents',
       'Exceptions authorised by heads of section with no limit'],
 gap='"Care with sensitive material generally" is advice, "where available" makes an '
     'accredited system optional, "in case of doubt" requires the officer to feel doubt, and '
     'the exception power has no boundary and no record.',
 back_cap='A rule that governed documents perfectly and said nothing about sets of them.',
 back_note='Line two is the failure, and it is the characteristic one: the only part of the '
           'rule that reaches aggregation is expressed as a disposition rather than as a count.',
 diagnosis=[('[1] "material marked above unclassified" — and unmarked material in combination?', 'unscoped set'),
            ('[2] "exercise care generally" — care judged how, applied when?', 'unstated criterion'),
            ('[3] "where available" — and where an accredited system exists but is slower?', 'unstated exception'),
            ('[4] "in case of doubt" — and where the officer feels none?', 'unstated exception'),
            ('[5] "any spillage" — how is an officer to recognise one?', 'unstated criterion'),
            ('[6] "heads of section may authorise exceptions" — which exceptions, recorded where?', 'unscoped set')],
 rewrite='Rewrite the rule so that it reaches assembly and can be applied by counting.',
 scaffold=['What the officer must be able to do without judgement',
           'The material and systems covered, and what is excluded',
           'The markings, the accredited list and the records officers',
           'Two prohibitions, one absolute, a countable limit, and the arbitrariness stated',
           'One page, applicable by counting, to all officers',
           'What to do where accreditation is unknown'],
 bank=['State … so that an officer can comply without …',
       'Cover … ; … is out of scope …',
       'Work from … , … and …',
       '… is not to be … ; … must never be … ; … not more than … without … ; state that …',
       'Return 1 instruction of … , applicable by … , issued to …',
       'Where … cannot tell whether … , …'],
 check=['Does the rule reach assembly of unmarked material?',
        'Is the limit countable?',
        'Is the number described as arbitrary?',
        'Is the exception power bounded and recorded?'],
 model=['State which material may be entered into which system, so that an officer can comply without judging what inference a set of documents permits',
        'All Ministry material and all systems available to officers; material held by posts under local arrangements is out of scope and is governed by the post’s own instruction',
        'The marking on each document, the list of accredited systems, and the list of records officers',
        'Material marked above unclassified is not to be entered into an unaccredited system; material carrying a caveat marking must never be entered into any system outside the Ministry; unclassified material is not to be assembled from more than 5 sources in an unaccredited system without the authority of a records officer; state in the instruction that the figure of 5 is a working limit and not a threshold of harm',
        '1 instruction of no more than 1 page, applicable by counting, issued to all officers',
        'Where an officer cannot tell whether a system is accredited, the material is not to be entered and the question goes to a records officer'],
 cost='1 negotiating position on 3 issues, assembled from 11 correctly unclassified documents '
      'in an unaccredited system, in full compliance with the rule then in force.'),

rev_fig=figs.split('REGISTER',
                   'Advice',
                   ['Officers should avoid …',
                    'It is not advisable to …',
                    'Marked material shouldn’t …',
                    'Please do not …'],
                   'Prohibition and permission',
                   ['… is not to be entered.',
                    '… must never be entered.',
                    '… may not be assembled without …',
                    '… may be circulated with the authority of …']),
rev_fig_cap='Shall not in a rule; is not to be in an instruction; must never for the absolute.',
rev=dict(
 read=[('The unit of classification is', ['the set', 'the document', 'the system', 'the officer'], 1),
       ('Aggregation risk was theoretical because', ['it was unknown', 'inference across documents was expensive', 'markings were absolute', 'nobody cared'], 1),
       ('The correct rule about inference is', ['usable', 'unusable', 'absolute', 'countable'], 1),
       ('In the Decision Room, how was the rule split?', ['by section', 'by kind of source', 'by system', 'by marking'], 1)],
 listen_text='Knowing what inference a set permits requires having made the assembly, which '
             'is the act the rule is meant to govern. Faced with such a rule at the end of a '
             'working day, officers comply when cautious and do not comply when busy.',
 listen=[('Requires having made the ____________.', 'assembly'),
         ('The act the rule is meant to ____________.', 'govern'),
         ('At the end of a working ____________.', 'day'),
         ('Comply when cautious and do not comply when ____________.', 'busy')],
 speak=['State one prohibition in your office at the proper register.',
        'Count the sources in something you assembled recently.'],
 write='Write one countable handling limit and say that the number is arbitrary.',
 vocab=[('The risk that unclassified items together reveal something protected is an ____________.', 'aggregation risk'),
        ('A system formally approved for material at a stated marking is an ____________.', 'accredited system'),
        ('The arrival of marked material in a system not approved for it is a ____________.', 'spillage'),
        ('An additional restriction narrowing who may see a document is a ____________.', 'caveat marking'),
        ('The limit of the systems within which material may be handled is a ____________.', 'processing boundary')],
 gram=[('Material marked above unclassified is not ____________ be entered into an unaccredited system.', 'to'),
       ('Material carrying a caveat marking ____________ never be entered into any outside system.', 'must'),
       ('An extract ____________ be circulated more widely with the authority of the originating section.', 'may'),
       ('No marked material ____________ leave the accredited boundary.', 'shall'),
       ('Officers ____________ not use an unaccredited system for this purpose.', 'may')]),

found=['Count the sources in the last thing you assembled for a colleague.',
       'Ask which systems in your office are accredited for what.',
       'Rewrite one piece of security advice as a prohibition with an authority.',
       'Name one inference a set of your unmarked documents would support.'],
end_line='A rule everybody applies badly beats a rule the careful apply correctly.',
end_next='Next: Whose Infrastructure Is It',
)
