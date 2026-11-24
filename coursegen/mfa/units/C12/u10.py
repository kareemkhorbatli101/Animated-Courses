# -*- coding: utf-8 -*-
import figs

U = dict(
num=10, title='The Part That Cannot Be Delegated',
gram='summative and valedictory register',
ai='the part of diplomacy that cannot be delegated',
strap='CEFR C1 · Grammar: summative and valedictory register · AI: what cannot be delegated',
cando=['write a summative paragraph that states a position rather than a feeling',
       'use valedictory register without sentimentality',
       'say which part of the work cannot be delegated and why',
       'distinguish a limit of principle from a limit of present capability',
       'close a professional document in a register a successor will trust'],
hero=('THE WORD OF A STATE',
      ['Everything in the file could have been produced in an afternoon.',
       'What the other side accepted was that a named person had said it.'],
      [(730, 'teal', 'long'), (1390, 'orange', 'short'),
       (2050, 'purple', 'long'), (2690, 'blue', 'short')]),
hero_cap='The signing room, after four years of rounds and eleven hundred pages.',

warm=['What in your work is accepted because of who said it?',
      'What could be produced by anybody and still carry your signature?',
      'What would you want a successor to understand on their first day?'],
read=[
 'The arrangement with Oristan was concluded in March after four years of rounds. The file '
 'runs to eleven hundred pages: assembled briefs, compared versions, bracket histories, source '
 'inventories, chronologies on a single clock, and a sign-off statement against every '
 'signature.',
 'Almost all of it could now be produced in an afternoon, and most of it was. That is the '
 'subject of this book and it is not in dispute: the preparation of a negotiation has been '
 'transformed, and a ministry of this size could not have conducted this negotiation at all '
 'ten years ago.',
 'What concluded it was two people in a room agreeing a form of words, one of whom had '
 'authority to bind a state and had been given a limit by somebody who would answer for it. '
 'The other side accepted the arrangement because a named person said that his state would '
 'observe it, and because that person’s predecessors had observed what they said.',
 'Karim Dalati’s closing minute on the file puts the distinction in two sentences. Everything '
 'that can be written down was written down faster and better than before. What could not be '
 'written down was the undertaking, which is a relationship between states carried by '
 'individuals, and which has no technical component at all.',
 'He adds a third sentence, which he describes as the only sentence in the minute he is not '
 'certain of. The Ministry should expect the boundary to move, because it has moved twice in '
 'his own service, and the duty of an officer is not to defend where the boundary happens to '
 'be but to know which side of it they are standing on at the time.'],
c_a=[('How long did the negotiation take, and how large is the file?', 'four years of rounds and eleven hundred pages'),
     ('What is not in dispute?', 'that the preparation of a negotiation has been transformed'),
     ('What concluded the arrangement?', 'two people in a room agreeing a form of words'),
     ('Why did the other side accept it?', 'because a named person said his state would observe it, and his predecessors had'),
     ('What are the two sentences of the closing minute?', 'that everything writable was written faster and better, and that the undertaking could not be written'),
     ('What is the third sentence?', 'that the boundary will move and an officer must know which side of it they are on')],
c_b=[('The file could mostly have been produced in an afternoon.', 'T'),
     ('A ministry of this size could have conducted this negotiation ten years ago.', 'F'),
     ('The undertaking has a technical component.', 'F'),
     ('Karim is certain of all three sentences.', 'F'),
     ('The boundary has moved twice in his service.', 'T'),
     ('The duty of an officer is to defend the present boundary.', 'F')],
c_c=[('A sign-off statement against every ____________.', 'signature'),
     ('Could not have conducted this negotiation at ____________ ten years ago.', 'all'),
     ('Had been given a limit by somebody who would ____________ for it.', 'answer'),
     ('That person’s ____________ had observed what they said.', 'predecessors'),
     ('A relationship between states carried by ____________.', 'individuals'),
     ('Which side of it they are ____________ on at the time.', 'standing')],
c_d=[('The negotiation was concluded by ( two people in a room / the file ).', ['two people in a room', 'the file'], 0),
     ('How many pages is the file?', ['one hundred', 'eleven hundred', 'four hundred', 'eleven'], 1),
     ('What carries the undertaking?', ['the text', 'individuals', 'the file', 'the annexes'], 1),
     ('How often has the boundary moved in Karim’s service?', ['never', 'twice', 'once', 'four times'], 1),
     ('What is the duty of an officer?', ['to defend the boundary', 'to know which side of it they are on', 'to move it', 'to record it'], 1)],
c_e=('Summative or valedictory? Put each in the right column.',
     [('The position, in short, is this.', 'summative'),
      ('It has been a privilege to work on this file.', 'valedictory'),
      ('Three things follow from the foregoing.', 'summative'),
      ('I leave the file in better order than I found it.', 'valedictory'),
      ('The Ministry’s interest is stated at paragraph 9.', 'summative'),
      ('My successor will find the difficulty at paragraph 14.', 'valedictory')],
     ['summative', 'valedictory']),

v_fig_title='WHAT IS CARRIED BY A PERSON',
v_fig=[('people', 'a word given'), ('shield', 'a plenipotentiary authority'), ('key', 'a relationship of trust'),
       ('doc', 'a final responsibility'), ('clock', 'a continuity of persons'), ('bulb', 'a limit of delegation')],
v_fig_cap='Six words for the part of the work that has no technical component.',
vocab=[
 ('a representation', 'a statement made on behalf of a state to another'),
 ('a plenipotentiary authority', 'authority to bind a state in a negotiation'),
 ('a personal undertaking', 'a commitment given by a named individual'),
 ('a relationship of trust', 'the expectation between parties built by past conduct'),
 ('a bearing of responsibility', 'the carrying of answerability for an act'),
 ('an exercise of discretion', 'the use of a judgement the rules leave open'),
 ('a moral weight', 'the seriousness an act carries beyond its legal effect'),
 ('an irreducible act', 'an act that cannot be divided into simpler ones'),
 ('a presence in the room', 'the fact of being physically present where something is decided'),
 ('an attendance in person', 'appearance by the individual rather than by proxy'),
 ('a handshake honoured', 'an unwritten commitment subsequently kept'),
 ('a word given', 'an undertaking made in speech by a person'),
 ('a credibility of a state', 'the expectation that a state will do what it says'),
 ('a standing of an officer', 'the weight an officer’s word carries with counterparts'),
 ('a career-long acquaintance', 'knowledge of a counterpart built over a working life'),
 ('a succession of officers', 'the sequence of people holding a post over time'),
 ('a continuity of persons', 'the carrying of a relationship across changes of personnel'),
 ('a final responsibility', 'the responsibility that cannot be passed further'),
 ('a limit of delegation', 'the point beyond which a task may not be given to another'),
 ('a professional formation', 'the making of an officer by training and practice')],
v_a=[('Authority to bind a state in a negotiation is a ____________.', 'plenipotentiary authority'),
     ('The point beyond which a task may not be given to another is a ____________.', 'limit of delegation'),
     ('The expectation that a state will do what it says is a ____________.', 'credibility of a state'),
     ('The carrying of a relationship across changes of personnel is a ____________.', 'continuity of persons'),
     ('An act that cannot be divided into simpler ones is an ____________.', 'irreducible act'),
     ('The responsibility that cannot be passed further is a ____________.', 'final responsibility'),
     ('The weight an officer’s word carries with counterparts is a ____________.', 'standing of an officer'),
     ('The making of an officer by training and practice is a ____________.', 'professional formation')],
v_b=[('A representation is a statement made on behalf', 'of a state to another.'),
     ('A relationship of trust is the expectation between parties', 'built by past conduct.'),
     ('A moral weight is the seriousness an act carries', 'beyond its legal effect.'),
     ('A word given is an undertaking made', 'in speech by a person.'),
     ('A career-long acquaintance is knowledge of a counterpart', 'built over a working life.')],

g_title='Grammar: summative and valedictory register',
g_rule=['A summative paragraph states the position reached and what follows from it, in the '
        'present tense.',
        'It carries no new argument and no adjective that was not earned earlier.',
        'Valedictory register addresses a successor and states what is left undone.',
        'Neither register permits sentiment in place of content: a closing paragraph that says '
        'nothing is read as an absence of judgement.'],
g_fig=('LOOSE',
       ['It has been a fascinating and rewarding four years on this remarkable file.',
        'I am sure my successor will do an excellent job.',
        'Much has been achieved and much remains to be done.',
        'In conclusion, this has been a most important negotiation.'],
       'PRECISE',
       ['The arrangement is concluded on the terms at Annex 1; 3 questions are left open and '
        'are listed at paragraph 14.',
        'My successor will find the transit question unresolved and the file complete to 14 '
        'March.',
        'What was achieved is at paragraph 2; what was not is at paragraph 14.',
        'The Ministry should expect the boundary to move; I am not certain of this sentence.'],
       'four closings that say nothing and could close any file',
       'four closings that state a position, a gap, or an uncertainty'),
g_fig_cap='A valedictory paragraph is read by a successor on their first morning; write it for '
          'them.',
g_a=[('The arrangement is ____________ on the terms at Annex 1.', 'concluded'),
     ('Three questions are left ____________ and are listed at paragraph 14.', 'open'),
     ('My successor will ____________ the transit question unresolved.', 'find'),
     ('The file is complete ____________ 14 March.', 'to'),
     ('What was achieved is at paragraph 2; what was ____________ is at paragraph 14.', 'not'),
     ('The Ministry should ____________ the boundary to move.', 'expect'),
     ('I am not ____________ of this sentence.', 'certain'),
     ('____________ remains for my successor is set out below.', 'What'),
     ('I leave the file in ____________ order than I found it, and the difficulty is unchanged.', 'better')],
g_b=[('A summative paragraph carries ( new argument / the position reached ).', ['new argument', 'the position reached'], 1),
     ('Valedictory register addresses', ['the Minister', 'a successor', 'the counterpart', 'nobody'], 1),
     ('A closing paragraph that says nothing is read as', ['modesty', 'an absence of judgement', 'formality', 'courtesy'], 1),
     ('Which could close any file?', ['3 questions are left open at paragraph 14.', 'Much has been achieved and much remains to be done.', 'The file is complete to 14 March.', 'I am not certain of this sentence.'], 1),
     ('A summative paragraph uses', ['the past perfect', 'the present tense', 'conditionals', 'the subjunctive'], 1),
     ('Which states an uncertainty?', ['It has been rewarding.', 'I am not certain of this sentence.', 'Much remains to be done.', 'My successor will do well.'], 1)],

d1=dict(title='Two people in a room',
        fig=(['Eleven hundred pages.', 'And two people in a room.'],
             ['Which concluded it?', 'The second, on the strength of the first.']),
        cap='Karim Dalati and Samir Haddad, after the signature.',
        lines=[('Samir', 'Eleven hundred pages on the file, and almost all of it producible in '
                         'an afternoon now.'),
               ('Karim', 'Most of it was produced in an afternoon, and the negotiation could not '
                         'have been conducted at all ten years ago by a ministry of this size. I '
                         'want that in the minute first, because the book that ends with a '
                         'paragraph about the human element is usually a book arguing that '
                         'nothing has changed.'),
               ('Samir', 'And what ended it?'),
               ('Karim', 'Two people in a room agreeing a form of words. One of them had '
                         'authority to bind a state and a limit given to him by somebody who '
                         'would answer for it.'),
               ('Samir', 'The authority is a legal fact. It could in principle attach to '
                         'anything.'),
               ('Karim', 'In principle. What the other side accepted was not a legal fact. They '
                         'accepted that a named man said his state would observe the '
                         'arrangement, and they accepted it because the three men who held that '
                         'post before him did what they said.'),
               ('Samir', 'Which is a relationship and not a document.'),
               ('Karim', 'It is a relationship carried by individuals across a succession, and '
                         'it has no technical component whatever. Nothing in the eleven hundred '
                         'pages produced it and nothing in them could.'),
               ('Samir', 'You will be accused of ending on sentiment.'),
               ('Karim', 'Which is why the sentence is about credibility rather than about '
                         'humanity. A state that keeps its word is believed next time, and the '
                         'keeping is done by people who can be named.')],
        a=[('What does Karim want in the minute first?', 'that the negotiation could not have been conducted at all ten years ago'),
           ('What ended the negotiation?', 'two people in a room agreeing a form of words'),
           ('What did the other side accept?', 'that a named man said his state would observe the arrangement'),
           ('Why did they accept it?', 'because his three predecessors did what they said'),
           ('Why is the sentence about credibility?', 'to avoid ending on sentiment: a state that keeps its word is believed next time')],
        b=[('A book that ends with a paragraph about the human ____________.', 'element'),
           ('A limit given to him by somebody who would ____________ for it.', 'answer'),
           ('It has no technical component ____________.', 'whatever'),
           ('The keeping is done by people who can be ____________.', 'named')]),
d2=dict(title='The boundary has moved twice',
        fig=(['This is the limit.', 'It has moved twice already.'],
             ['Then it will move again.', 'And I do not know which way.']),
        cap='Karim and Dr Hana Mourad, on the third sentence.',
        lines=[('Hana', 'Your third sentence says the Ministry should expect the boundary to '
                        'move. You describe it as the only sentence you are not certain of.'),
               ('Karim', 'In my service it has moved twice. In 2016 nobody would have allowed a '
                         'translation into a note verbale without a human translator; in 2019 '
                         'nobody would have allowed a first draft of an instruction to be '
                         'produced by anything.'),
               ('Hana', 'Both of those are now ordinary.'),
               ('Karim', 'Both are ordinary and both were right to allow. That is what makes the '
                         'sentence difficult. I cannot tell you that the present boundary is '
                         'principled rather than habitual, because the people who defended the '
                         'two earlier boundaries thought theirs were principled too, and they '
                         'were wrong.'),
               ('Hana', 'Does that not dissolve the whole register in your book?'),
               ('Karim', 'It does not dissolve the condolence letter, which is an act rather '
                         'than a document, and I would defend that in any decade. It does '
                         'unsettle the assessment paragraph, which I defend on a calibration '
                         'argument that somebody may answer.'),
               ('Hana', 'So the honest position is that some of your exclusions are principled '
                        'and some are provisional, and you cannot sort them.'),
               ('Karim', 'I can sort two of the five with confidence and I cannot sort the other '
                         'three, and anybody who tells you they can sort all five has not '
                         'watched a boundary move.'),
               ('Hana', 'What do you want in the minute?'),
               ('Karim', 'That the duty of an officer is not to defend where the boundary '
                         'happens to be, but to know which side of it they are standing on at '
                         'the time, and to say which. I am aware that is less than a principle. '
                         'It is what I have.')],
        a=[('How often has the boundary moved in Karim’s service?', 'twice'),
           ('What were the two movements?', 'translation into a note verbale, and the first draft of an instruction'),
           ('Why is the sentence difficult?', 'because those who defended earlier boundaries also thought theirs principled'),
           ('Which exclusion would he defend in any decade?', 'the condolence letter, which is an act rather than a document'),
           ('What does he want in the minute?', 'that an officer should know which side of the boundary they stand on, and say which')],
        b=[('Both were right to ____________.', 'allow'),
           ('Principled rather than ____________.', 'habitual'),
           ('I can sort ____________ of the five with confidence.', 'two'),
           ('That is less than a ____________. It is what I have.', 'principle')],
        unresolved=True),

speak=[('Summarise without adjectives',
        ['Student A: describe a piece of work you have finished.',
         'Student B: write the summative paragraph aloud, in the present tense.',
         'Remove every adjective that was not earned earlier in the description.']),
       ('For your successor',
        ['Say what you would write for whoever takes your work next.',
         'Name what is left undone and where it is.',
         'Your partner asks what they would still not know.']),
       ('Which side of the boundary',
        ['Name one task in your field that will be delegated to a system within five years.',
         'Say whether you think it should be.',
         'Say which side of the line you are standing on now.'])],

ext_title='Preparation can be transformed and the undertaking cannot be delegated, because it '
          'is a relationship between states carried by individuals',
ext_fig=figs.datatable('ONE ARRANGEMENT, FOUR YEARS',
                       ['', 'Could be assembled', 'Could not'],
                       [['the country briefs', 'yes, in a night', '—'],
                        ['the version comparisons', 'yes, in minutes', '—'],
                        ['the bracket histories', 'yes, in an afternoon', '—'],
                        ['the chronologies on one clock', 'yes, in hours', '—'],
                        ['the red lines', '—', 'a decision by an authority'],
                        ['the undertaking in the room', '—', 'a named person’s word']]),
ext_fig_cap='Four rows transformed, and the last two are the negotiation.',
ext=[
 'This book has argued, at every point, that the gains are real and should be taken. A '
 'ministry of eleven officers answering eight thousand consular enquiries a month in eleven '
 'languages; a legal section comparing fourteen pages against fourteen pages in minutes; a '
 'delegation arriving with every fallback referenced and every bracket traced; a crisis '
 'acknowledged in two minutes at three in the morning. None of that was available ten years '
 'ago to a ministry of this size, and a service that declines it is not preserving a tradition '
 'but failing its citizens.',
 'It has argued with equal consistency that each of those gains has an edge, and that the edge '
 'is where the work is. The summary that drops the comment paragraph. The classification that '
 'governs documents and not sets of them. The brief that is accurate and useless. The reach '
 'figure that rises when you publish more. In every case the capability does exactly what it '
 'was asked and the failure is in the asking, which is why this has been a book about writing '
 'instructions.',
 'What remains at the end is narrower than the usual closing paragraph about the human '
 'element, and it is not a claim about creativity or warmth. An arrangement between states is '
 'concluded when a person with authority to bind a state says that the state will do '
 'something, and is believed because that person’s predecessors did what they said. The '
 'belief is the asset. It is accumulated by individuals, held across a succession of them, and '
 'destroyed by a single failure to perform.',
 'Nothing in that has a technical component. A text can be assembled, a precedent found, a '
 'limit retrieved from a file; the limit itself is set by somebody who will answer for it, and '
 'the undertaking is given by somebody whose word has a history. That is why the register of '
 'the last three units has been about accountability, dissent and what is kept: a service that '
 'cannot say who decided, cannot record who disagreed, and cannot show what its officer read '
 'has nothing to be believed about.',
 'And the boundary will move. In one officer’s service it has moved twice, and both movements '
 'were resisted on grounds that felt like principle and turned out to be habit. That should '
 'produce neither complacency nor the opposite. Two of the five exclusions in the Ministry’s '
 'register can be defended in any decade; three are provisional and their defenders cannot '
 'reliably tell which kind they are holding. The duty is not to defend the present line but to '
 'know which side of it you are standing on, to say which, and to write down why, so that '
 'whoever finds the file in four years knows what you thought and what you could not show.'],
dp1=('The limit of delegation',
     'Foreign ministries reviewing their use of these capabilities in 2025 kept '
     'representations, undertakings and the setting of negotiating limits with named officers, '
     'while treating the composition of supporting material as assisted work.',
     'Source: reported practice in diplomatic institutional governance, 2025–2026.'),
e_a=[('What has the book argued at every point?', 'that the gains are real and should be taken'),
     ('Where is the work, in every case?', 'at the edge of each gain, in the asking rather than the capability'),
     ('What concludes an arrangement between states?', 'a person with authority saying the state will do something, and being believed'),
     ('Why is the belief the asset?', 'because it is accumulated by individuals and destroyed by a single failure to perform'),
     ('What is the duty of an officer?', 'to know which side of the boundary they stand on, say which, and write down why')],
e_b=[('A service that declines these gains preserves a tradition.', 'F'),
     ('The failure is usually in the capability.', 'F'),
     ('The closing claim is about creativity and warmth.', 'F'),
     ('The boundary has moved twice in one officer’s service.', 'T'),
     ('All five exclusions can be defended in any decade.', 'F'),
     ('Earlier boundaries were resisted on grounds that felt like principle.', 'T')],

w_model=(
 'Purpose: close the file so that a successor knows what was concluded, what was left open, '
 'and what the writer could not establish. Scope: the arrangement concluded on 14 March and '
 'the 4 years of rounds leading to it; the implementation arrangements are out of scope and are '
 'the subject of a separate file. Inputs: the file, the writer’s own minutes, and the signed '
 'text. Criteria: state in the present tense what is concluded and on what terms; list every '
 'question left open with the paragraph where it is set out; name what the writer believes and '
 'cannot evidence, and say so; state the date to which the file is complete; use no adjective '
 'that is not supported by something earlier in the file. Done: 1 closing minute of no more '
 'than 1 page, addressed to the writer’s successor, placed at the front of the file. Fallback: '
 'where the writer cannot say whether a question is open or closed, list it as open and say '
 'that it is unclear.'),
w_fig=figs.spec_card('THE TASKING FOR A CLOSING MINUTE',
                     [('Purpose', 'a successor knows what is concluded, open and unestablished'),
                      ('Scope', 'the arrangement and 4 years of rounds; implementation elsewhere'),
                      ('Inputs', 'the file, the writer’s minutes, the signed text'),
                      ('Criteria', 'present tense; open questions with paragraphs; unevidenced beliefs named'),
                      ('Done', '1 page to the successor, at the front of the file'),
                      ('Fallback', 'unclear: listed as open and said to be unclear')]),
w_fig_cap='No adjective unsupported by the file: the rule that keeps a closing minute readable in four years.',
w_task='Write a closing minute tasking for a file in your own work.',
w_steps=['Say who the minute is for.',
         'Name what is covered and what is handled elsewhere.',
         'Require the present tense and the open questions with references.',
         'Require unevidenced beliefs to be named as such.',
         'Say what happens where open and closed cannot be distinguished.'],
w_bank=['Close … so that a successor knows … , … and …',
        'Cover … ; … are out of scope and are …',
        'Work from … , … and …',
        'State in the present tense … ; list … with … ; name what the writer … and say so; state … ; use no …',
        'Where the writer cannot say whether … , list it as … and say …'],
w_check=['Is the minute addressed to a successor?',
         'Are open questions given with their paragraph references?',
         'Must unevidenced beliefs be named?',
         'Is the completeness date stated?'],

t_title='The part of diplomacy that cannot be delegated',
t_fig=figs.split('AT THE END OF FOUR YEARS',
                 'Assembled',
                 ['the briefs, the comparisons, the histories',
                  'the chronologies and the inventories',
                  'the fallbacks, referenced',
                  'eleven hundred pages, mostly in an afternoon'],
                 'Not assembled',
                 ['the limit, set by somebody answerable',
                  'the undertaking, given by a named person',
                  'the belief that it will be kept',
                  'the record of who decided and who disagreed']),
t_fig_cap='The right-hand column is short, and it is the negotiation.',
t_body=[
 'The part of diplomacy that cannot be delegated is narrow, and it is reached last. Take the gains and say so first. A ministry of this size could not have conducted a '
 'four-year negotiation ten years ago, could not have answered eight thousand consular '
 'enquiries a month in eleven languages, and could not have compared two fourteen-page texts '
 'in minutes at two in the morning. A service that declines these things is not keeping a '
 'tradition; it is failing the people it exists for.',
 'Then hold the edges, which is what this book has been about. Every gain has one, the '
 'capability always does what it was asked, and the failure is in the asking: the summary that '
 'loses the comment paragraph, the classification that governs documents and not sets, the '
 'brief that is accurate and useless, the figure that rises when you publish more. The work '
 'has moved from doing to specifying, and specifying is a skill of language.',
 'What is left at the end is narrow and is not about warmth. An arrangement between states '
 'holds because a person with authority said the state would do something and is believed, on '
 'the strength of what that person’s predecessors did. That belief is accumulated by '
 'individuals and destroyed by one failure to perform, and nothing in it has a technical '
 'component. And the line will move: it has moved twice in one officer’s service and both '
 'movements were resisted on grounds that felt like principle. So do not undertake to defend '
 'the present line. Know which side of it you are standing on, say which, and write down why, '
 'for whoever finds the file.'],
t_say=[('State the gain: ', 'This could not have been done 10 years ago by a ministry of this size.'),
       ('State the limit: ', 'The undertaking is given by a named person and cannot be delegated.'),
       ('State the uncertainty: ', 'The boundary will move; I am not certain which way.')],
t_bound=('Nothing in this book establishes where the line between delegated and undelegated '
         'work should be. It has moved twice in one service and was defended both times on '
         'grounds that felt like principle. Two exclusions can be defended in any decade and '
         'three are provisional, and their holders cannot reliably tell which kind they are '
         'holding. What can be done is to say where you stand and why, in a document somebody '
         'will find.'),
t_a=[('This could not have been done 10 years ago by a ministry of this ____________.', 'size'),
     ('The undertaking is given by a named person and cannot be ____________.', 'delegated'),
     ('The boundary will move; I am not certain which ____________.', 'way'),
     ('The work has moved from doing to ____________.', 'specifying'),
     ('Destroyed by one failure to ____________.', 'perform'),
     ('Say where you stand and why, in a document somebody will ____________.', 'find')],
t_b_rubric='Rewrite each closing sentence so that it states a position, a gap or an uncertainty.',
t_b=[('It has been a fascinating and rewarding four years on this remarkable file.', 'the arrangement is concluded on the terms at Annex 1; three questions are left open and are listed at paragraph 14'),
     ('I am sure my successor will do an excellent job.', 'my successor will find the transit question unresolved and the file complete to 14 March'),
     ('Much has been achieved and much remains to be done.', 'what was achieved is at paragraph 2; what was not is at paragraph 14'),
     ('In conclusion, this has been a most important negotiation.', 'the Ministry should expect the boundary to move; I am not certain of this sentence')],

case=dict(
 title='The Decision Room · The last paragraph of the minute',
 brief=[
  'Karim’s closing minute states the gains, states that the undertaking cannot be delegated, '
  'and states that the boundary will move and that he is uncertain which way.',
  'The Deputy Minister has asked for the third sentence to be removed, on the ground that a '
  'closing minute expressing uncertainty about its own central claim will be quoted against '
  'the Ministry by anybody who wants to move the boundary.',
  'Karim wants it kept. Hana Mourad says the sentence is the most durable thing in the minute. '
  'Samir Haddad asks what a successor would conclude from its absence.'],
 exhibit=figs.datatable('THE THREE SENTENCES',
                        ['', 'Contested?', 'What it does'],
                        [['the gains are real and should be taken', 'no', 'states the position'],
                         ['the undertaking cannot be delegated', 'no', 'states the limit'],
                         ['the boundary will move; I am uncertain', 'yes', 'states the uncertainty'],
                         ['boundaries moved in 2016 and 2019', 'no', 'evidence for the third'],
                         ['2 of 5 exclusions defensible in any decade', 'no', 'sorts the register'],
                         ['3 of 5 are provisional', 'yes', 'admits the sorting is partial']]),
 exhibit_cap='Two sentences are contested, and both of them are the ones that admit something.',
 exhibit_note='The minute will be read by every officer joining the section, as part of the '
              'file.',
 voices=[('the Deputy Minister', 'who signed the arrangement',
          'Remove the third sentence. A minute that doubts its own central claim hands an '
          'argument to whoever wants the line moved next year, and they will not quote the '
          'first two sentences.'),
         ('Karim Dalati', 'Information Security and Records',
          'Keep it. A successor who finds a confident minute and then watches the boundary move '
          'will conclude that the minute was written by somebody who did not understand his own '
          'subject, and will discount all three sentences.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'And the sentence is the most durable thing in the document. The first two will be '
          'out of date within a decade. The third will still be true.')],
 steps=[('Find it', 'Which sentences are contested?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Karim think a confident minute is weaker?'),
        ('Weigh it', 'An argument handed away against a successor’s trust.'),
        ('Decide', 'Does the third sentence stay?')],
 analysis=[('Find it. Which two entries are contested?', 'the uncertainty and the admission that the sorting is partial'),
           ('Compare it. What does the Deputy Minister fear?', 'that the sentence will be quoted by whoever wants the line moved'),
           ('Infer it. What does Karim predict a successor would conclude?', 'that a confident minute was written by somebody who did not understand his subject'),
           ('Weigh it. Who will read the minute?', 'every officer joining the section'),
           ('Decide. What would you do?', 'answers vary; the sentence is the one most likely to be true in ten years')],
 decision='Write the last paragraph of the minute.',
 decision_steps=['Say whether the third sentence stays.',
                 'Say what it says, exactly.',
                 'Say what the minute says about the five exclusions.',
                 'Say who the minute is addressed to.'],
 bank=['The third sentence …',
       'It states that …',
       'Of the 5 exclusions, the minute says …',
       'The minute is addressed to …',
       'This is reviewed …'],
 outcome='The sentence stayed, in a form Karim and the Deputy Minister agreed in an afternoon: '
         'that the boundary between what may be delegated and what may not has moved twice in '
         'the service’s recent history, that it will move again, that two of the five current '
         'exclusions are defensible on grounds that do not depend on the state of any '
         'technology and three are not, and that the duty of an officer is to know which side '
         'of the line they are standing on and to say which. Four years later the minute is the '
         'first document every officer joining the section is given. The Deputy Minister, who '
         'had asked for the removal, says the sentence has been quoted twice, both times by '
         'officers arguing to move the line, and that on both occasions the argument was better '
         'for having started from an honest statement of where the Ministry stood.',
 outcome_q=[('What does the agreed sentence state?', 'that the boundary has moved and will move, that two of five exclusions are technology-independent, and what an officer’s duty is'),
            ('What does the Deputy Minister now say?', 'that the sentence has been quoted twice and the argument was better for it')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Close the file',
 task=['This is the Ministry’s standing guidance on closing a file, unchanged since 2011.',
       'Under it, a successor inherits a file whose last page says that the work was '
       'interesting.'],
 draft=['Close the file when the business is concluded.',
        'Summarise what was achieved.',
        'Thank those who contributed.',
        'Note any outstanding matters.',
        'Ensure the file is complete.',
        'Hand over to the incoming officer.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the second and third between them produce a page about the writer.',
 asked=['Open questions with their paragraph references',
        'Unevidenced beliefs named as such',
        'The date to which the file is complete'],
 back=['A summary of achievements',
       'A paragraph of thanks',
       'Outstanding matters noted in general terms'],
 gap='"Summarise what was achieved" invites a record of success, "thank those who contributed" '
     'is the only instruction most writers follow, "any outstanding matters" produces generality, '
     'and "ensure the file is complete" names no date.',
 back_cap='A closing page addressed to nobody, which a successor reads once and never again.',
 back_note='Line four is the failure. An outstanding matter without a paragraph reference is a '
           'matter a successor cannot find, and a successor who cannot find it will conclude '
           'there was none.',
 diagnosis=[('[1] "when the business is concluded" — and where part of it continues on another file?', 'unstated exception'),
            ('[2] "summarise what was achieved" — assumes the minute is a record of success', 'hidden assumption'),
            ('[3] "thank those who contributed" — assumes the minute is addressed to colleagues', 'hidden assumption'),
            ('[4] "any outstanding matters" — with references, and how many?', 'undefined done'),
            ('[5] "ensure the file is complete" — and the parts held on another file?', 'unstated exception'),
            ('[6] "hand over to the incoming officer" — handing over what, and when?', 'undefined done')],
 rewrite='Rewrite the guidance so that the minute is written for a successor.',
 scaffold=['Who the minute is for and what they must know',
           'What is covered and what is handled elsewhere',
           'The file, the writer’s minutes and the signed text',
           'Present tense, open questions with references, unevidenced beliefs named, no unsupported adjectives',
           'One page at the front of the file',
           'What to do where open and closed cannot be distinguished'],
 bank=['Close … so that a successor knows …',
       'Cover … ; … are out of scope …',
       'Work from … , … and …',
       'State in the present tense … ; list … with … ; name … ; state … ; use no …',
       'Return 1 closing minute of … , addressed to … , placed …',
       'Where … , list it as … and say …'],
 check=['Is the minute addressed to a successor?',
        'Do open questions carry references?',
        'Are unevidenced beliefs required to be named?',
        'Is a completeness date required?'],
 model=['Close the file so that a successor knows what was concluded, what was left open, and what the writer could not establish',
        'The arrangement concluded on 14 March and the 4 years of rounds leading to it; the implementation arrangements are out of scope and are the subject of a separate file',
        'The file, the writer’s own minutes, and the signed text',
        'State in the present tense what is concluded and on what terms; list every question left open with the paragraph where it is set out; name what the writer believes and cannot evidence, and say so; state the date to which the file is complete; use no adjective that is not supported by something earlier in the file',
        '1 closing minute of no more than 1 page, addressed to the writer’s successor, placed at the front of the file',
        'Where the writer cannot say whether a question is open or closed, list it as open and say that it is unclear'],
 cost='15 years of closing minutes recording that the work had been interesting, and successors '
      'who inherited a complete file and no account of what its author could not establish.'),

rev_fig=figs.split('CLOSING',
                   'Says nothing',
                   ['a fascinating and rewarding four years',
                    'my successor will do an excellent job',
                    'much achieved, much to be done',
                    'in conclusion, a most important matter'],
                   'Says something',
                   ['concluded on the terms at Annex 1; 3 open at para 14',
                    'the transit question is unresolved; complete to 14 March',
                    'achieved: para 2. Not achieved: para 14.',
                    'the boundary will move; I am not certain of this']),
rev_fig_cap='Present tense, references, and no adjective the file does not support.',
rev=dict(
 read=[('What does the book argue first?', ['that nothing has changed', 'that the gains are real', 'that the risks dominate', 'that the work is unchanged'], 1),
       ('Where is the failure in every case?', ['in the capability', 'in the asking', 'in the officer', 'in the record'], 1),
       ('What concludes an arrangement between states?', ['the text', 'a named person’s word, believed', 'the annexes', 'the chronology'], 1),
       ('In the Decision Room, what happened to the third sentence?', ['removed', 'kept in an agreed form', 'shortened to nothing', 'moved to an annex'], 1)],
 listen_text='An arrangement between states is concluded when a person with authority to bind '
             'a state says that the state will do something, and is believed because that '
             'person’s predecessors did what they said. The belief is the asset.',
 listen=[('Authority to ____________ a state.', 'bind'),
         ('Says that the state will do ____________.', 'something'),
         ('Because that person’s ____________ did what they said.', 'predecessors'),
         ('The belief is the ____________.', 'asset')],
 speak=['State the summative paragraph of a piece of your own work.',
        'Say which side of a moving boundary you are standing on, and why.'],
 write='Write one closing sentence stating an uncertainty you hold.',
 vocab=[('Authority to bind a state in a negotiation is a ____________.', 'plenipotentiary authority'),
        ('The point beyond which a task may not be given to another is a ____________.', 'limit of delegation'),
        ('The expectation that a state will do what it says is a ____________.', 'credibility of a state'),
        ('The carrying of a relationship across changes of personnel is a ____________.', 'continuity of persons'),
        ('The responsibility that cannot be passed further is a ____________.', 'final responsibility')],
 gram=[('The arrangement is ____________ on the terms at Annex 1.', 'concluded'),
       ('Three questions are left ____________ and are listed at paragraph 14.', 'open'),
       ('My successor will ____________ the transit question unresolved.', 'find'),
       ('The Ministry should ____________ the boundary to move.', 'expect'),
       ('I am not ____________ of this sentence.', 'certain')]),

found=['Write the closing minute for a file you are leaving.',
       'List the open questions with their references.',
       'Name one thing you believe and cannot evidence.',
       'Say which side of a moving boundary you are standing on.'],
end_line='Know which side of the line you are standing on, and say which.',
end_next='End of the series',
)
