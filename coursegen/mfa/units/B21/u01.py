# -*- coding: utf-8 -*-
import figs

U = dict(
num=1, title='What Is Actually Checkable',
gram='hedging: appears, suggests, is reported to',
ai='open-source research: what is actually checkable',
strap='CEFR B2 · Grammar: hedging · AI: what is actually checkable',
cando=['hedge a claim precisely with appears, suggests and is reported to',
       'distinguish a hedge that carries information from one that carries none',
       'separate what open-source material can establish from what it cannot',
       'state for each claim in a brief what would have to be true for it to be wrong',
       'write a research tasking that names the checkable questions only'],
hero=('WHAT CAN BE ESTABLISHED, AND WHAT CANNOT',
      ['The dredging is visible, dated and measurable from four sources.',
       'What Kavara intends by it is visible from none of them.'],
      [(730, 'blue', 'long'), (1390, 'teal', 'short'),
       (2050, 'purple', 'long'), (2690, 'orange', 'short')]),
hero_cap='Policy Planning, the week the port question came down from the Minister’s office.',

warm=['What questions does your work ask that could never be answered from public material?',
      'When you read that a state "is seeking" something, what do you think the evidence was?',
      'What is the difference between a fact, an inference and a guess in a brief?'],
read=[
 'In October the Minister’s office asked Policy Planning a single question: is Kavara '
 'building a naval facility at its southern port, and if so, why. Dr Hana Mourad had six '
 'working days and two officers.',
 'Her section used an open-source research step over published material, and within two days '
 'it had assembled a great deal. Dredging had been under way at the southern basin since '
 'March; the dredged depth, visible in dated imagery, had gone from nine to fourteen metres; '
 'a tender notice in the official gazette of April named works described as harbour '
 'deepening and quay reinforcement; customs figures showed a rise in imported steel sections '
 'of a kind used for heavy quays.',
 'All of that is checkable. Each item has a source that an officer in the Ministry can open, '
 'with a date on it, and each can be wrong in a way somebody can discover. Fourteen metres '
 'is either right or it is not.',
 'The second half of the question is not checkable in the same way, and this was the point at '
 'which the section nearly produced something it would have regretted. Fourteen metres is '
 'deeper than any commercial vessel calling at that port requires. It suggests a military '
 'purpose. It does not establish one, and the published material contains nothing about what '
 'Kavara intends, because intentions are not published.',
 'Samir Haddad, reading the draft, objected to one sentence: Kavara is seeking to establish a '
 'naval presence. He asked what document that rested on. The answer was that it rested on the '
 'depth, which is to say on an inference the drafter had made and the sentence did not admit '
 'to making. The brief went up with the sentence rewritten and the inference marked as the '
 'section’s own.'],
c_a=[('What was the Minister’s question?', 'whether Kavara is building a naval facility at its southern port, and why'),
     ('How long did Policy Planning have?', 'six working days and two officers'),
     ('What four kinds of material did they find?', 'dated imagery, a tender notice, customs figures on steel sections, and the dredged depth'),
     ('What makes those items checkable?', 'each has a source that can be opened, with a date, and each can be shown wrong'),
     ('What is not checkable?', 'what Kavara intends, because intentions are not published'),
     ('What did Samir object to?', 'the sentence that Kavara is seeking to establish a naval presence')],
c_b=[('The dredged depth went from nine to fourteen metres.', 'T'),
     ('The tender notice described naval works.', 'F'),
     ('Fourteen metres is required by commercial vessels at that port.', 'F'),
     ('The published material explains Kavara’s intentions.', 'F'),
     ('The sentence Samir objected to rested on a document.', 'F'),
     ('The brief went up with the inference marked.', 'T')],
c_c=[('Dredging had been under way since ____________.', 'March'),
     ('A tender notice in the official ____________ of April.', 'gazette'),
     ('Imported steel ____________ of a kind used for heavy quays.', 'sections'),
     ('It suggests a military purpose; it does not ____________ one.', 'establish'),
     ('Intentions are not ____________.', 'published'),
     ('An inference the drafter had made and the sentence did not ____________ to making.', 'admit')],
c_d=[('The depth ( establishes / suggests ) a military purpose.', ['establishes', 'suggests'], 1),
     ('How deep was the basin dredged to?', ['nine metres', 'fourteen metres', 'four metres', 'forty metres'], 1),
     ('What did the April notice call the works?', ['naval construction', 'harbour deepening and quay reinforcement', 'dredging only', 'nothing'], 1),
     ('What did the objected sentence rest on?', ['a document', 'an unadmitted inference', 'a leak', 'a conversation'], 1),
     ('Why are intentions unavailable in open sources?', ['they are classified', 'they are not published', 'nobody looks', 'they change'], 1)],
c_e=('Checkable or not checkable from published material? Put each in the right column.',
     [('the dredged depth in metres', 'checkable'),
      ('the date dredging began', 'checkable'),
      ('what the works are intended for', 'not checkable'),
      ('the wording of a tender notice', 'checkable'),
      ('whether a decision has been taken in cabinet', 'not checkable'),
      ('the tonnage of steel imported', 'checkable')],
     ['checkable', 'not checkable']),

v_fig_title='WHERE A CHECKABLE FACT COMES FROM',
v_fig=[('doc', 'an official gazette'), ('map', 'a satellite image'), ('chart', 'a customs figure'),
       ('book', 'a parliamentary record'), ('pin', 'a tender notice'), ('key', 'a licence register')],
v_fig_cap='Six classes of published material, each with a date and an opener.',
vocab=[
 ('open-source material', 'information that has been published and can be consulted by anyone'),
 ('a primary source', 'the document in which something was first recorded'),
 ('a secondary source', 'an account that rests on a primary source'),
 ('a claim', 'a statement offered as true and capable of being tested'),
 ('verifiable', 'able to be shown true or false by some available means'),
 ('unverifiable', 'not able to be shown true or false by any available means'),
 ('a trace', 'a mark an activity leaves in the public record'),
 ('a satellite image', 'a dated picture of a place taken from orbit'),
 ('a shipping record', 'a published entry of a vessel’s movement or cargo'),
 ('a company filing', 'a document a company is required to publish'),
 ('an official gazette', 'the state publication in which notices must appear'),
 ('a parliamentary record', 'the published account of what was said in a legislature'),
 ('a court listing', 'the published schedule of cases before a court'),
 ('a tender notice', 'a published invitation to bid for work'),
 ('a flight record', 'a published entry of an aircraft’s movement'),
 ('a customs figure', 'an official statistic on goods crossing a border'),
 ('a trade statistic', 'an official figure on goods bought and sold across borders'),
 ('a procurement record', 'the published account of what a body has bought'),
 ('a licence register', 'the public list of permissions granted'),
 ('a wire report', 'a short agency report circulated to subscribers')],
v_a=[('The document in which something was first recorded is a ____________.', 'primary source'),
     ('The state publication in which notices must appear is an ____________.', 'official gazette'),
     ('A published invitation to bid for work is a ____________.', 'tender notice'),
     ('A mark an activity leaves in the public record is a ____________.', 'trace'),
     ('Not able to be shown true or false is ____________.', 'unverifiable'),
     ('The public list of permissions granted is a ____________.', 'licence register'),
     ('The published account of what a body has bought is a ____________.', 'procurement record'),
     ('A short agency report circulated to subscribers is a ____________.', 'wire report')],
v_b=[('Open-source material is information that has been published', 'and can be consulted by anyone.'),
     ('A claim is a statement offered as true', 'and capable of being tested.'),
     ('A satellite image is a dated picture of a place', 'taken from orbit.'),
     ('A parliamentary record is the published account', 'of what was said in a legislature.'),
     ('A customs figure is an official statistic', 'on goods crossing a border.')],

g_title='Grammar: hedging with appears, suggests and is reported to',
g_rule=['It appears that and it would appear that mark the writer’s own reading of evidence.',
        'X suggests Y attributes the inference to the evidence, not to the writer.',
        'Is reported to have attributes the claim to somebody else, unnamed in the sentence.',
        'A hedge must be followed by the basis: suggests a military purpose, on the depth alone.'],
g_fig=('LOOSE',
       ['Kavara is seeking a naval presence.',
        'It seems that something is happening.',
        'It is thought that the works are military.',
        'Apparently the depth is unusual.'],
       'PRECISE',
       ['The depth suggests a military purpose; no document states one.',
        'The dredging appears, from dated imagery, to have begun in March.',
        'The works are reported by two wire agencies to be military.',
        'Fourteen metres is deeper than any vessel now calling requires.'],
       'one bare assertion and three hedges with no basis',
       'three hedges with their basis and one plain fact'),
g_fig_cap='A hedge with no basis conveys less than silence, because it looks like evidence.',
g_a=[('The depth ____________ a military purpose; no document states one.', 'suggests'),
     ('The dredging ____________ to have begun in March.', 'appears'),
     ('The works are ____________ by two agencies to be military.', 'reported'),
     ('It would ____________ that the tender was published in April.', 'appear'),
     ('The steel imports ____________ that heavy quays are planned.', 'suggest'),
     ('Kavara is ____________ to have taken a decision in September.', 'reported'),
     ('On the imagery alone, the basin ____________ to be fourteen metres.', 'appears'),
     ('Nothing in the gazette ____________ a naval use.', 'establishes'),
     ('The pattern ____________ , but does not prove, a change of plan.', 'suggests')],
g_b=[('A hedge must be followed by its ( basis / length ).', ['basis', 'length'], 0),
     ('The depth ____ a military purpose.', ['establishes', 'suggests', 'proves', 'states'], 1),
     ('The dredging ____ to have begun in March.', ['appear', 'appears', 'is appearing', 'appeared to'], 1),
     ('Which attributes a claim to somebody else?', ['it appears that', 'is reported to have', 'suggests', 'evidently'], 1),
     ('Which hedge carries no information?', ['the depth suggests', 'apparently', 'reported by two agencies', 'appears from imagery'], 1),
     ('Nothing in the gazette ____ a naval use.', ['suggests', 'establishes', 'appears', 'reports'], 1)],

d1=dict(title='What does that sentence rest on?',
        fig=(['Kavara is seeking a naval presence.', 'On what document?'],
             ['On fourteen metres.', 'Then say fourteen metres.']),
        cap='Samir Haddad and Dr Hana Mourad, reading the draft brief.',
        lines=[('Samir', 'Paragraph four says Kavara is seeking to establish a naval presence. '
                         'What does that sentence rest on?'),
               ('Hana', 'On the depth. Fourteen metres is deeper than anything commercial that '
                        'calls there.'),
               ('Samir', 'That is an inference, and a reasonable one. The sentence does not say '
                         'it is an inference. It reads as something we know.'),
               ('Hana', 'If I hedge every sentence in the brief, the Minister will stop reading '
                        'at paragraph two.'),
               ('Samir', 'I am not asking you to hedge every sentence. I am asking you to hedge '
                         'the ones where we have no source, which in this brief is two of '
                         'eleven.'),
               ('Hana', 'And what would you have the two say?'),
               ('Samir', 'That the dredged depth exceeds commercial requirement at that port, '
                         'which is checkable, and that in the section’s assessment this '
                         'suggests a military purpose, which is ours and is marked as ours.'),
               ('Hana', 'That is longer and it is better. My worry is the Minister reading '
                        '"the section assesses" and hearing "the section is not sure".'),
               ('Samir', 'She will hear that we have told her which parts she can quote to '
                         'Kavara and which parts she cannot. That is the most useful thing a '
                         'brief does.'),
               ('Hana', 'The depth is quotable. The purpose is not.'),
               ('Samir', 'And if she quotes the purpose as established, Kavara will ask for the '
                         'evidence and we will have none, which costs us more than a longer '
                         'sentence.'),
               ('Hana', 'Rewrite the two paragraphs. You are right and I would rather be told '
                        'now than by the Minister’s office on Thursday.')],
        a=[('What does paragraph four claim?', 'that Kavara is seeking to establish a naval presence'),
           ('What does it actually rest on?', 'the dredged depth, which is an inference'),
           ('How many of eleven paragraphs lack a source?', 'two'),
           ('What does Samir propose the two should say?', 'the checkable depth, and the section’s own assessment marked as such'),
           ('What is the cost of quoting the purpose as established?', 'Kavara would ask for evidence the Ministry does not have')],
        b=[('Deeper than anything ____________ that calls there.', 'commercial'),
           ('The sentence does not say it is an ____________.', 'inference'),
           ('In the section’s ____________, this suggests a military purpose.', 'assessment'),
           ('The depth is ____________. The purpose is not.', 'quotable')]),
d2=dict(title='Six days and two officers',
        fig=(['Six working days.', 'And two officers.'],
             ['Then narrow the question.', 'The Minister asked both halves.']),
        cap='Hana and Nadia Barakat, by telephone from Geneva.',
        lines=[('Nadia', 'You have been asked whether Kavara is building a naval facility and '
                         'why. The second half cannot be answered from published material.'),
               ('Hana', 'I know. I cannot send back a brief that answers half a question the '
                        'Minister asked.'),
               ('Nadia', 'You can send back a brief that answers the first half from sources and '
                         'states, in one paragraph, what would be needed to answer the second.'),
               ('Hana', 'Which is a request for collection that I am not in a position to make.'),
               ('Nadia', 'You are in a position to say what it would take. That is not the same '
                         'as asking for it, and it tells the Minister something true: that the '
                         'purpose is not available to us by these means.'),
               ('Hana', 'There is a risk in that. A paragraph saying what we cannot know invites '
                        'somebody to find a source that is not a source.'),
               ('Nadia', 'That risk exists in any case. It is larger when the brief is silent '
                         'about the gap, because then the gap gets filled by whoever is '
                         'confident.'),
               ('Hana', 'I have seen that happen twice and both times it was filled by a wire '
                        'report quoting an unnamed official.'),
               ('Nadia', 'Which is a trace of somebody’s intention to have it believed and '
                         'nothing else.'),
               ('Hana', 'Then I will write the gap paragraph, and I expect to be asked why '
                        'Policy Planning cannot answer a simple question.'),
               ('Nadia', 'You will be. The answer is that it is not a simple question, and the '
                         'brief will be the document that proves it.')],
        a=[('Which half of the question cannot be answered?', 'why Kavara is building, from published material'),
           ('What does Nadia propose?', 'answering the first half and stating what would be needed for the second'),
           ('What is Hana’s worry about a gap paragraph?', 'that it invites somebody to find a source that is not a source'),
           ('What has filled such gaps before?', 'a wire report quoting an unnamed official'),
           ('What does Nadia say that report is a trace of?', 'somebody’s intention to have it believed')],
        b=[('What would be needed to answer the ____________.', 'second'),
           ('The gap gets filled by whoever is ____________.', 'confident'),
           ('A ____________ report quoting an unnamed official.', 'wire'),
           ('It is not a simple question, and the brief will ____________ it.', 'prove')]),

speak=[('Hedge it with a basis',
        ['Student A: make six claims about a situation in your own work.',
         'Student B: ask what each one rests on.',
         'Rewrite each claim so that the hedge and the basis are both in the sentence.']),
       ('Checkable or not',
        ['List six questions your office is asked.',
         'Sort them into what published material could settle and what it could not.',
         'For one of the second kind, say what would be needed instead.']),
       ('The gap paragraph',
        ['In pairs, choose a question you cannot answer from sources.',
         'Write aloud the paragraph that says so without apologising.',
         'Your partner says whether a reader would accept it.'])],

ext_title='Open-source research establishes activity, dates and quantities; it does not establish intention',
ext_fig=figs.source_check('THE PORT QUESTION, CLAIM BY CLAIM',
                          [('dredging began in March', 'dated imagery, 2 passes', 'verified'),
                           ('the basin is now 14 metres', 'imagery and the April tender', 'verified'),
                           ('works described as quay reinforcement', 'the official gazette, April', 'verified'),
                           ('imported steel sections rose 31 per cent', 'published customs figures', 'verified'),
                           ('14 metres exceeds commercial requirement', 'port’s own published draught limits', 'single'),
                           ('Kavara intends a naval presence', 'no document', 'none')],
                          note='Five claims rest on openable sources. The sixth is the question '
                               'the Minister asked and it rests on nothing.'),
ext_fig_cap='The last line is not a failure of research. It is the boundary of the method.',
ext=[
 'Open-source research has become the first move in almost every foreign ministry’s '
 'analytical work, and the reason is not that published material has grown more revealing. '
 'It is that the volume of it has grown beyond what a section of three officers can read, '
 'while the capability to search, translate and extract from it has become cheap. A question '
 'that would have taken a fortnight of reading now takes two days.',
 'What the method establishes is a particular class of thing: activity, dates, quantities, '
 'wording. Dredging either began in March or it did not, and dated imagery from two passes '
 'settles it. A tender notice either described quay reinforcement or it did not, and the '
 'official gazette settles that. Customs figures either rose or they did not. Each of these '
 'claims has a source an officer can open and each can be shown to be wrong, which is what '
 'makes it worth writing down.',
 'What the method does not establish is intention, and this is not a limitation that better '
 'searching removes. States do not publish their intentions, and the documents that record '
 'them are precisely the documents that are not in the public record. A brief can say that a '
 'dredged depth exceeds the requirement of any vessel now calling at the port, which is '
 'checkable against the port’s own published limits. It cannot say what the depth is for.',
 'The failure that follows is predictable and it is a failure of writing rather than of '
 'research. A section that has established five checkable things and been asked a sixth '
 'question will write a sentence that reads like a finding and is in fact an inference: '
 'Kavara is seeking to establish a naval presence. Nobody has lied. An inference has simply '
 'been given the grammar of a fact, and a Minister who quotes it will be asked for evidence '
 'that does not exist.',
 'The practice that holds, across services that do this work seriously, is to mark every '
 'sentence in a brief as one of three things: established and sourced, inferred by the '
 'section from stated evidence, or not available by these means. The third category is the '
 'one offices are most reluctant to write and the one that protects them, because a gap the '
 'brief names cannot be filled by whoever is most confident.'],
dp1=('Open-source research in foreign ministries',
     'Analytical units across several foreign services expanded open-source collection and '
     'automated extraction through 2025, while tightening requirements that each assertion in '
     'a brief carry a source or be marked as the unit’s own assessment.',
     'Source: reported practice in diplomatic analytical units, 2025–2026.'),
e_a=[('Why has open-source research become the first move?', 'because the volume of published material exceeds what a section can read while searching it has become cheap'),
     ('What class of thing does it establish?', 'activity, dates, quantities and wording'),
     ('Why can it not establish intention?', 'because states do not publish intentions and the documents that record them are not public'),
     ('What is the predictable failure?', 'giving an inference the grammar of a fact'),
     ('What are the three categories?', 'established and sourced, inferred from stated evidence, or not available by these means')],
e_b=[('Published material has become more revealing.', 'F'),
     ('A checkable claim can be shown to be wrong.', 'T'),
     ('Better searching would reveal intentions.', 'F'),
     ('The failure described is one of writing.', 'T'),
     ('Offices readily write the third category.', 'F'),
     ('A named gap can be filled by the most confident person.', 'F')],

w_model=(
 'Purpose: establish what can be shown about the works at Kavara’s southern port so that the '
 'Minister knows which statements she may quote and which she may not. Scope: published '
 'material dated from 1 January of this year; the 2 commentaries circulated by think tanks '
 'are out of scope, as is any question of intention. Inputs: dated imagery, the official '
 'gazette, published customs figures and the port authority’s own published limits. Criteria: '
 'for each assertion give the source and its date; where the section infers rather than '
 'establishes, say so in the sentence and name the evidence relied on; where a question '
 'cannot be answered from these inputs, say so and state what would be required; carry every '
 'figure exactly as published. Done: 1 brief of no more than 2 pages, every assertion '
 'classified as sourced, inferred or unavailable, by 17:00 on the fifth day. Fallback: where '
 '2 sources give different figures, give both with their dates and do not reconcile them.'),
w_fig=figs.spec_card('THE TASKING FOR AN OPEN-SOURCE BRIEF',
                     [('Purpose', 'what the Minister may quote and what she may not'),
                      ('Scope', 'published material from 1 January; intention excluded'),
                      ('Inputs', 'imagery, the gazette, customs figures, the port’s own limits'),
                      ('Criteria', 'a source and date per assertion; inferences marked; gaps named'),
                      ('Done', '2 pages, every assertion classified, by 17:00 day 5'),
                      ('Fallback', '2 figures conflict: give both with dates, do not reconcile')]),
w_fig_cap='Every assertion classified is the line that decides whether the brief is usable.',
w_task='Write a research tasking for a question in your own work.',
w_steps=['Say what the reader must be able to do with the result.',
         'Date the material and exclude what is out of scope.',
         'Name the inputs that may be used.',
         'Require each assertion to be sourced, marked as inference, or named as a gap.',
         'Say what to do when two sources disagree.'],
w_bank=['Establish what can be shown about … so that … knows which statements …',
        'Cover … ; … are out of scope, as is …',
        'Work from … , … , … and …',
        'For each assertion give … ; where the section infers … , say so … ; where a question cannot be answered … , …',
        'Where 2 sources give different figures, … and do not …'],
w_check=['Does the purpose distinguish quotable from unquotable?',
         'Is intention explicitly out of scope?',
         'Must every assertion be classified?',
         'Is disagreement between sources handled without reconciliation?'],

t_title='Open-source research and its boundary',
t_fig=figs.split('WHAT THE METHOD DOES',
                 'Establishes',
                 ['that an activity occurred',
                  'when it began, from dated material',
                  'how much, from published figures',
                  'what a notice actually said'],
                 'Cannot establish',
                 ['why it is being done',
                  'what was decided in a cabinet',
                  'what a government will do next',
                  'what an unnamed official believes']),
t_fig_cap='The left column is checkable and quotable. The right column is where briefs get into trouble.',
t_body=[
 'Begin with what open-source research is for. The volume of published material now exceeds what any '
 'section can read, and searching, translating and extracting from it has become cheap, '
 'which means a question that took a fortnight of reading takes two days. That is the whole '
 'of the gain and it is a large one.',
 'Be exact about what it yields. It yields activity, dates, quantities and wording: the '
 'dredging began in March on two dated passes of imagery; the April gazette described quay '
 'reinforcement; imported steel sections rose by a published percentage. Each of those has a '
 'source an officer can open and each can be shown wrong, which is the test of whether a '
 'claim belongs in a brief at all.',
 'Then hold the boundary, because this is where the work fails. Intention is not published, '
 'and no amount of better searching will produce it. A section that has established five '
 'things and been asked a sixth will write an inference in the grammar of a fact, and the '
 'Minister who quotes it will be asked for evidence that does not exist. So mark every '
 'sentence as sourced, as the section’s inference from stated evidence, or as not available '
 'by these means, and write the third kind even though it is the one nobody wants to sign.'],
t_say=[('Source it: ', 'Dated imagery of 3 and 19 March; the gazette of 14 April.'),
       ('Mark the inference: ', 'In the section’s assessment, on the depth alone, this suggests …'),
       ('Name the gap: ', 'The purpose of the works is not available from published material.')],
t_bound=('Open-source material records what leaves a trace. Intention leaves none, and a '
         'confident sentence about intention is not research but writing. The method cannot '
         'tell a drafter that an inference has been given the grammar of a fact; only a reader '
         'asking what the sentence rests on will catch it.'),
t_a=[('Dated imagery of 3 and 19 ____________.', 'March'),
     ('In the section’s ____________, on the depth alone …', 'assessment'),
     ('The purpose of the works is not ____________ from published material.', 'available'),
     ('It yields activity, dates, quantities and ____________.', 'wording'),
     ('An inference in the ____________ of a fact.', 'grammar'),
     ('Each can be shown ____________, which is the test.', 'wrong')],
t_b_rubric='Rewrite each sentence so that it is either sourced, marked as an inference, or named as a gap.',
t_b=[('Kavara is seeking a naval presence.', 'in the section’s assessment, on the dredged depth alone, a military purpose is suggested'),
     ('The works began in spring.', 'dated imagery of 3 and 19 March shows dredging under way'),
     ('A decision was taken in September.', 'whether a decision was taken is not available from published material'),
     ('Steel imports have soared.', 'published customs figures show imported steel sections up 31 per cent on 2024')],

case=dict(
 title='The Decision Room · The paragraph the Minister’s office wants removed',
 brief=[
  'The brief went up with eleven paragraphs: nine sourced, one marked as the section’s '
  'inference, and one stating that the purpose of the works is not available from published '
  'material.',
  'The Minister’s office has asked for the eleventh paragraph to be removed, on the ground '
  'that a brief should tell the Minister what is known rather than what is not.',
  'Hana must decide. Samir holds that the paragraph is the most important one in the document. '
  'Yara Ibrahim points out that the Minister is being interviewed on Thursday and will be '
  'asked directly what Kavara is doing.'],
 exhibit=figs.datatable('THE BRIEF AS SENT',
                        ['Paragraphs', 'Class', 'Quotable?'],
                        [['1–4', 'sourced: dredging, dates, depth', 'yes'],
                         ['5–7', 'sourced: gazette wording, tender', 'yes'],
                         ['8–9', 'sourced: customs figures, port limits', 'yes'],
                         ['10', 'the section’s inference on purpose', 'no, as the section’s view'],
                         ['11', 'purpose not available from open sources', 'as a statement of limits'],
                         ['annex', 'the 6 sources with dates', '—']]),
 exhibit_cap='Nine quotable paragraphs, one marked inference, and one that says where the '
             'evidence stops.',
 exhibit_note='Two wire agencies have reported, citing unnamed officials, that the facility is '
              'naval. Neither names a document.',
 voices=[('Samir Haddad', 'Legal and Treaties',
          'Paragraph eleven is the paragraph that protects her. Without it she has nine facts '
          'and an inference and nothing telling her where the line is.'),
         ('Yara Ibrahim', 'Press and Public Diplomacy',
          'On Thursday she will be asked what Kavara is doing. If she has read paragraph '
          'eleven she can answer about the dredging and decline the purpose. If she has not, '
          'she will reach for the wire reports.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'I take the point from the Minister’s office too. A brief full of what we cannot '
          'say is a brief that gets skimmed. The question is whether one paragraph in eleven '
          'is full.')],
 steps=[('Find it', 'What do the two wire agencies cite?'),
        ('Compare it', 'What are the arguments for and against paragraph eleven?'),
        ('Infer it', 'Why does Yara think the paragraph matters on Thursday?'),
        ('Weigh it', 'A readable brief against a Minister without a line.'),
        ('Decide', 'Does paragraph eleven stay, go, or change?')],
 analysis=[('Find it. What do the wire reports rest on?', 'unnamed officials; neither names a document'),
           ('Compare it. What is the office’s objection?', 'that a brief should say what is known, not what is not'),
           ('Infer it. What will happen on Thursday without the paragraph?', 'the Minister will reach for the wire reports'),
           ('Weigh it. How many of eleven paragraphs are sourced?', 'nine'),
           ('Decide. What would you do?', 'answers vary; shortening the paragraph keeps the line without the length')],
 decision='Write what happens to paragraph eleven.',
 decision_steps=['Say whether it stays, and in what form.',
                 'Say where it sits in the brief.',
                 'Say how the Minister is to use it on Thursday.',
                 'Say what the Ministry does about the wire reports.'],
 bank=['Paragraph 11 …',
       'It is placed …',
       'For Thursday, the Minister may … and should decline …',
       'The wire reports are …',
       'This is reviewed …'],
 outcome='Paragraph eleven stayed, cut to two sentences and moved to the top of the brief as a '
         'line on what may and may not be said. On Thursday the Minister was asked three times '
         'what the facility was for and answered each time with the dredged depth and the '
         'tender wording, declining the purpose. Kavara’s own spokesman then described the '
         'works as commercial, which gave the Ministry a sourced statement it had not had. '
         'Samir says the useful part was not the paragraph’s argument but its position: at the '
         'top it was read, and at the bottom it would have been the paragraph everybody '
         'skipped.',
 outcome_q=[('What happened to the paragraph?', 'it stayed, cut to two sentences and moved to the top'),
            ('What did the Ministry gain on Thursday?', 'a sourced statement, after Kavara’s spokesman described the works as commercial')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Find out about the port',
 task=['This is the tasking as it came down from the Minister’s office and was passed to the '
       'two officers.',
       'It produced a draft whose fourth paragraph asserted an intention no document '
       'supported.'],
 draft=['Find out what Kavara is doing at its southern port and why.',
        'Use the available material.',
        'Tell us what the situation is.',
        'Include anything significant.',
        'Keep it brief.',
        'By the end of the week.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the first one contains a question published material cannot answer.',
 asked=['Assertions classified as sourced, inferred or unavailable',
        'Material limited and dated',
        'A stated test for significance'],
 back=['Eleven paragraphs with no classification',
       'An asserted intention resting on the depth',
       'Two think-tank commentaries treated as sources'],
 gap='"And why" asks for intention, "the available material" admits anything, "what the '
     'situation is" sets no standard of evidence, and "anything significant" leaves the test '
     'to the drafter.',
 back_cap='A fluent draft in which the one unsourced sentence reads exactly like the nine '
          'sourced ones.',
 back_note='The first line is the failure. A tasking that asks for intention from open sources '
           'guarantees that somebody will supply it.',
 diagnosis=[('[1] "and why" — answerable from published material at all?', 'hidden assumption'),
            ('[2] "the available material" — which sources, and from what date?', 'unscoped set'),
            ('[3] "tell us what the situation is" — to what standard of evidence?', 'unstated criterion'),
            ('[4] "anything significant" — significant by what test?', 'unstated criterion'),
            ('[5] "keep it brief" — and if the sourcing needs an annex?', 'unscoped set'),
            ('[6] "by the end of the week" — assumes 6 days is enough for both halves', 'hidden assumption')],
 rewrite='Rewrite the tasking so that intention is excluded and every assertion is classified.',
 scaffold=['What the Minister must be able to do with the result',
           'The dates of material covered, and what is excluded',
           'The inputs that may be used',
           'A source per assertion, inferences marked, gaps named, figures exact',
           'The length, the classification requirement and the deadline',
           'What to do where two sources give different figures'],
 bank=['Establish what can be shown about … so that …',
       'Cover … ; … are out of scope, as is …',
       'Work from … and …',
       'For each assertion give … ; where the section infers … ; where a question cannot be answered … ; carry …',
       'Return 1 brief of no more than … , every assertion … , by …',
       'Where 2 sources give … , …'],
 check=['Is intention excluded in words?',
        'Is the material dated and bounded?',
        'Must every assertion be classified?',
        'Is there a rule for conflicting figures?'],
 model=['Establish what can be shown about the works at Kavara’s southern port so that the Minister knows which statements she may quote and which she may not',
        'Published material dated from 1 January of this year; the 2 commentaries circulated by think tanks are out of scope, as is any question of intention',
        'Dated imagery, the official gazette, published customs figures and the port authority’s own published limits',
        'For each assertion give the source and its date; where the section infers rather than establishes, say so in the sentence and name the evidence relied on; where a question cannot be answered from these inputs, say so and state what would be required; carry every figure exactly as published',
        '1 brief of no more than 2 pages, every assertion classified as sourced, inferred or unavailable, by 17:00 on the fifth day',
        'Where 2 sources give different figures, give both with their dates and do not reconcile them'],
 cost='1 draft paragraph asserting a foreign state’s intention on no evidence, which would '
      'have been quoted to that state within 9 days.'),

rev_fig=figs.split('HEDGING',
                   'Empty',
                   ['Kavara is seeking a naval presence.',
                    'It seems that something is happening.',
                    'It is thought that the works are military.',
                    'Apparently the depth is unusual.'],
                   'With a basis',
                   ['On the depth alone, a military purpose is suggested.',
                    'Imagery of 3 March shows dredging under way.',
                    'Two agencies report the works as military.',
                    '14 metres exceeds the port’s published limits.']),
rev_fig_cap='Appears, suggests, is reported to — each followed by what it rests on.',
rev=dict(
 read=[('Open-source material establishes', ['intention', 'activity, dates and quantities', 'cabinet decisions', 'future policy'], 1),
       ('A claim worth writing down can be', ['hedged', 'shown wrong', 'repeated', 'shortened'], 1),
       ('The predictable failure is', ['bad searching', 'an inference in the grammar of a fact', 'too many sources', 'translation'], 1),
       ('In the Decision Room, where did paragraph eleven end up?', ['removed', 'at the top, in two sentences', 'in an annex', 'unchanged'], 1)],
 listen_text='Intention is not published, and no amount of better searching will produce it. '
             'A section that has established five things and been asked a sixth will write an '
             'inference in the grammar of a fact, and the Minister who quotes it will be asked '
             'for evidence that does not exist.',
 listen=[('Intention is not ____________.', 'published'),
         ('No amount of better ____________ will produce it.', 'searching'),
         ('An inference in the ____________ of a fact.', 'grammar'),
         ('Evidence that does not ____________.', 'exist')],
 speak=['Make a claim about your work and say what it rests on.',
        'Name one question in your work that published material could not settle.'],
 write='Write one sentence marking an inference as the section’s own.',
 vocab=[('The document in which something was first recorded is a ____________.', 'primary source'),
        ('The state publication in which notices must appear is an ____________.', 'official gazette'),
        ('A mark an activity leaves in the public record is a ____________.', 'trace'),
        ('The public list of permissions granted is a ____________.', 'licence register'),
        ('Not able to be shown true or false is ____________.', 'unverifiable')],
 gram=[('The depth ____________ a military purpose; no document states one.', 'suggests'),
       ('The dredging ____________ to have begun in March.', 'appears'),
       ('The works are ____________ by two agencies to be military.', 'reported'),
       ('It would ____________ that the tender was published in April.', 'appear'),
       ('Nothing in the gazette ____________ a naval use.', 'establishes')]),

found=['Take one claim from a brief you read this week and ask what it rests on.',
       'Sort three questions from your work into checkable and not checkable.',
       'Write one gap paragraph for a question you cannot answer.',
       'Find one published source your office has never used.'],
end_line='A claim worth writing down is a claim somebody could show to be wrong.',
end_next='Next: Before It Enters the Brief',
)
