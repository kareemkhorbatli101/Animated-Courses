# -*- coding: utf-8 -*-
import figs

U = dict(
num=6, title='Somebody Else’s Voice',
gram='reference and substitution within a text',
ai='statement and speech drafting, and the voice problem',
strap='CEFR B2 · Grammar: reference and substitution · AI: somebody else’s voice',
cando=['use pronouns, this, that, such and one so that the reference is unmistakable',
       'substitute to avoid repetition without creating ambiguity',
       'say what a drafting step can do for a statement and what it cannot',
       'identify the sentences in a speech that only the speaker can supply',
       'write a tasking that separates the argument from the voice'],
hero=('IT SOUNDED LIKE NOBODY',
      ['The statement was correct, well organised and in the right register.',
       'Three delegations said afterwards that they could not tell what we cared about.'],
      [(730, 'purple', 'long'), (1390, 'blue', 'short'),
       (2050, 'orange', 'long'), (2690, 'teal', 'short')]),
hero_cap='After the plenary, in the corridor where the real assessments are given.',

warm=['Whose voice is a ministerial statement written in?',
      'What makes a spoken statement sound like a particular person?',
      'What is the cost of a statement that sounds like nobody in particular?'],
read=[
 'Yara Ibrahim’s section drafts statements: for the Minister, for heads of delegation, for '
 'the spokesman. Since February a drafting step has produced first versions, and the gain is '
 'not in evenness.',
 'A statement has three parts that behave differently. The substance is the Ministry’s '
 'position and comes from the file. The structure is a convention: what is said first, what is '
 'conceded, what is held. Both of those can be produced quickly and well, and a first version '
 'that gets them right saves a drafter an hour.',
 'The third part is voice, and voice is not decoration. A statement in the Minister’s voice '
 'tells a room which of the four points she minds about, because she will dwell on one and '
 'move briskly past three. Delegations read that. It is often the only information in the '
 'statement they did not already have.',
 'In March a statement was delivered that had been drafted in this way and lightly edited. It '
 'was accurate, well organised and in the correct register. Three delegations afterwards made '
 'the same remark in the corridor, which was that they could not tell what the Ministry cared '
 'about.',
 'Yara now treats the first version as the argument and writes the voice herself, which takes '
 'twenty minutes and consists mostly of deciding which sentence the speaker slows down for. '
 'She says the step gave her back the hour she used to spend on structure and took nothing she '
 'wanted to keep, provided somebody remembers that an even statement is a statement with the '
 'emphasis removed.'],
c_a=[('What three parts does a statement have?', 'the substance, the structure and the voice'),
     ('Where does the substance come from?', 'the Ministry’s position, on the file'),
     ('What does voice tell a room?', 'which of the points the speaker minds about'),
     ('What did the March statement lack?', 'any indication of what the Ministry cared about'),
     ('How long does Yara spend on voice?', 'twenty minutes'),
     ('What does that work consist of?', 'deciding which sentence the speaker slows down for')],
c_b=[('The gain is in evenness.', 'F'),
     ('Structure is a convention.', 'T'),
     ('Voice is decoration.', 'F'),
     ('The March statement was inaccurate.', 'F'),
     ('Three delegations made the same remark.', 'T'),
     ('Yara writes the voice herself.', 'T')],
c_c=[('A first version that gets them right saves a drafter an ____________.', 'hour'),
     ('She will ____________ on one and move briskly past three.', 'dwell'),
     ('Often the only ____________ in the statement they did not already have.', 'information'),
     ('They could not tell what the Ministry ____________ about.', 'cared'),
     ('Which sentence the speaker ____________ down for.', 'slows'),
     ('An even statement is a statement with the ____________ removed.', 'emphasis')],
c_d=[('The March statement failed because it was ( even / inaccurate ).', ['even', 'inaccurate'], 0),
     ('How many points did the statement contain?', ['three', 'four', 'twenty', 'one'], 1),
     ('Where were the three remarks made?', ['in the plenary', 'in the corridor', 'in writing', 'to the Minister'], 1),
     ('What did the step give back?', ['the voice', 'the hour spent on structure', 'the substance', 'the register'], 1),
     ('What does voice tell delegations?', ['the position', 'what the Ministry minds about', 'the structure', 'the length'], 1)],
c_e=('What does each word refer back to? Match them.',
     [('such a proposal', 'a proposal already described'),
      ('that would be unacceptable', 'the whole preceding clause'),
      ('the latter', 'the second of two things named'),
      ('one of these', 'a member of a set already listed'),
      ('this Article', 'the article being read'),
      ('do so', 'the action already named by a verb')],
     ['a proposal already described', 'the whole preceding clause',
      'the second of two things named', 'a member of a set already listed',
      'the article being read', 'the action already named by a verb']),

v_fig_title='THE PARTS OF A SPOKEN TEXT',
v_fig=[('doc', 'a speaking note'), ('people', 'a form of address'), ('bulb', 'a signature phrase'),
       ('clock', 'a pause for effect'), ('key', 'a house voice'), ('pin', 'a quotable sentence')],
v_fig_cap='Six words for the parts of a statement that a room actually hears.',
vocab=[
 ('a speech', 'a prepared spoken text delivered by one person'),
 ('a statement', 'a formal text delivered or issued on behalf of a state'),
 ('an intervention', 'a contribution made in a session, prepared or not'),
 ('a speaking note', 'the text a speaker works from, in points rather than prose'),
 ('a scripted remark', 'a sentence written in advance to be said as written'),
 ('an opening remark', 'what a speaker says before the substance'),
 ('a closing remark', 'what a speaker says after the substance'),
 ('a cadence', 'the rhythm of a sentence as it is spoken'),
 ('a register of speech', 'the level of formality a speaker uses'),
 ('an idiom', 'a fixed expression whose meaning is not the sum of its words'),
 ('a turn of phrase', 'a particular way of putting something'),
 ('a signature phrase', 'a form of words a particular speaker is known for'),
 ('a borrowed phrase', 'wording taken from another speaker or text'),
 ('a house voice', 'the manner of expression an institution uses'),
 ('a personal voice', 'the manner of expression of one speaker'),
 ('a delivery', 'the manner in which a text is spoken aloud'),
 ('a pause for effect', 'a silence used to give weight to what follows'),
 ('an applause line', 'a sentence written to draw a response'),
 ('a quotable sentence', 'a sentence written so that it can be reported alone'),
 ('a form of address', 'the words by which a speaker names those present')],
v_a=[('The text a speaker works from, in points, is a ____________.', 'speaking note'),
     ('A form of words a particular speaker is known for is a ____________.', 'signature phrase'),
     ('The manner of expression an institution uses is a ____________.', 'house voice'),
     ('A silence used to give weight to what follows is a ____________.', 'pause for effect'),
     ('A sentence written so that it can be reported alone is a ____________.', 'quotable sentence'),
     ('The words by which a speaker names those present are a ____________.', 'form of address'),
     ('The rhythm of a sentence as it is spoken is a ____________.', 'cadence'),
     ('A contribution made in a session is an ____________.', 'intervention')],
v_b=[('A statement is a formal text delivered', 'on behalf of a state.'),
     ('An idiom is a fixed expression whose meaning', 'is not the sum of its words.'),
     ('A borrowed phrase is wording taken', 'from another speaker or text.'),
     ('A delivery is the manner in which', 'a text is spoken aloud.'),
     ('An applause line is a sentence written', 'to draw a response.')],

g_title='Grammar: reference and substitution within a text',
g_rule=['This and that point back; this to what is near, that to what is further or to a whole '
        'clause.',
        'Such a plus noun points back to a thing already described.',
        'The former and the latter pick out the first and second of two things named.',
        'Do so substitutes for a verb phrase already used; one substitutes for a countable '
        'noun.'],
g_fig=('LOOSE',
       ['They proposed a review and a cap. This is unacceptable.',
        'The Ministry rejected it, which they did before.',
        'Oristan and Kavara objected; they will be answered.',
        'We considered the figure and the date. It is settled.'],
       'PRECISE',
       ['They proposed a review and a cap. The latter is unacceptable.',
        'The Ministry rejected the proposal, as it had done in March.',
        'Oristan and Kavara objected; both will be answered.',
        'We considered the figure and the date; the date is settled.'],
       'four references that could point at two things each',
       'four references with exactly one reading'),
g_fig_cap='In a text that will be read against you, every pronoun is a place to lose an argument.',
g_a=[('They proposed a review and a cap. The ____________ is unacceptable.', 'latter'),
     ('The Ministry rejected the proposal, as it had ____________ in March.', 'done'),
     ('Oristan and Kavara objected; ____________ will be answered.', 'both'),
     ('We considered two formulations and prefer the ____________.', 'former'),
     ('____________ a proposal would require new instructions.', 'Such'),
     ('The delegation declined to accept the text and said so; it will do ____________ again.', 'so'),
     ('If a cap is needed, the Ministry will propose ____________.', 'one'),
     ('The review is agreed; ____________ settles the article.', 'that'),
     ('Two issues remain: the fee and the date. ____________ is the harder.', 'The former')],
g_b=[('That can point back to ( only a noun / a whole clause ).', ['only a noun', 'a whole clause'], 1),
     ('They proposed a review and a cap. The ____ is unacceptable.', ['former ones', 'latter', 'these', 'such'], 1),
     ('Such a plus noun points back to', ['a speaker', 'a thing already described', 'a clause', 'a verb'], 1),
     ('Do so substitutes for', ['a noun', 'a verb phrase', 'a clause', 'a pronoun'], 1),
     ('One substitutes for', ['a countable noun', 'a verb', 'a clause', 'an adverb'], 1),
     ('Which has one reading?', ['This is unacceptable.', 'The latter is unacceptable.', 'It is unacceptable.', 'They are unacceptable.'], 1)],

d1=dict(title='They could not tell what we cared about',
        fig=(['The statement was accurate.', 'And it told them nothing.'],
             ['All four points were there.', 'All four were the same size.']),
        cap='Yara Ibrahim and Nadia Barakat, after the plenary.',
        lines=[('Nadia', 'Three delegations said the same thing to me in the corridor. They '
                         'could not tell what we cared about.'),
               ('Yara', 'All four of our points were in it, correctly stated.'),
               ('Nadia', 'All four were the same size and the same temperature. In a plenary that '
                         'is information: it says the Ministry has no preference among its own '
                         'positions, which is never true.'),
               ('Yara', 'What do they normally read?'),
               ('Nadia', 'Length and slowness. Which point the Minister spends two minutes on '
                         'and which she disposes of in a clause. Which sentence she repeats. '
                         'Whether she says the word unacceptable or declines to.'),
               ('Yara', 'None of which is substance.'),
               ('Nadia', 'All of which is substance in a room. I have written reports where the '
                         'only new thing was that a head of delegation slowed down on the second '
                         'of three points.'),
               ('Yara', 'The first version was good. The structure was right and the register was '
                        'right, and it saved me an hour.'),
               ('Nadia', 'Keep the hour. Spend twenty minutes of it deciding which sentence is '
                         'the one she dwells on, and then make that sentence longer and the '
                         'others shorter.'),
               ('Yara', 'That is almost the whole of it, said in one line.'),
               ('Nadia', 'It is the whole of it. Emphasis is a distribution of length, and an '
                         'evenly written statement has distributed it flat.')],
        a=[('What did three delegations say?', 'that they could not tell what the Ministry cared about'),
           ('What does evenness tell a room?', 'that the Ministry has no preference among its positions, which is never true'),
           ('What do delegations read?', 'length and slowness: what is dwelt on and what is disposed of'),
           ('What did the first version save?', 'an hour, by getting structure and register right'),
           ('What is Nadia’s instruction?', 'decide which sentence is dwelt on and make it longer, the others shorter')],
        b=[('The same size and the same ____________.', 'temperature'),
           ('Which she disposes of in a ____________.', 'clause'),
           ('Emphasis is a distribution of ____________.', 'length'),
           ('An evenly written statement has distributed it ____________.', 'flat')]),
d2=dict(title='Whose sentence is it',
        fig=(['She said it in the plenary.', 'And she did not write it.'],
             ['Nor did I.', 'Then whose sentence was it?']),
        cap='Yara and Samir Haddad.',
        lines=[('Samir', 'The Minister said in the plenary that the Ministry would not regard '
                         'the matter as settled. That is a strong sentence. Whose was it?'),
               ('Yara', 'It was in the first version. I kept it because it was well made and it '
                        'matched the position.'),
               ('Samir', 'Did the Minister see the position file?'),
               ('Yara', 'She saw the statement, approved it, and delivered it.'),
               ('Samir', 'So a sentence that commits the Ministry to not regarding a matter as '
                         'settled was written by nobody, approved in the ordinary way, and is '
                         'now the Ministry’s position because she said it aloud.'),
               ('Yara', 'That is also true of sentences I write.'),
               ('Samir', 'It is, and when you write one you have a reason for the words you '
                         'chose. If I ask you in two years why we said would not regard rather '
                         'than does not accept, you will have an answer, and that answer is '
                         'sometimes the whole of a negotiating position.'),
               ('Yara', 'Whereas here the answer is that it read well.'),
               ('Samir', 'Which is a reason for a phrase and not for a commitment. I am not '
                         'suggesting the sentence was wrong. I am saying the Ministry cannot '
                         'reconstruct why it holds the position in that form.'),
               ('Yara', 'Then every sentence that commits us has to be chosen by somebody who '
                        'can say why.'),
               ('Samir', 'That is my view and I do not know how to operate it. In a '
                         'twelve-hundred-word statement I cannot tell you which eleven sentences '
                         'commit the Ministry and which eleven hundred are prose.'),
               ('Yara', 'Nor can I, and I have been doing this for nine years. I would rather '
                        'we both said so than agreed a rule neither of us could apply.')],
        a=[('What did the Minister say in the plenary?', 'that the Ministry would not regard the matter as settled'),
           ('Who wrote the sentence?', 'nobody; it was in the first version and Yara kept it'),
           ('What is Samir’s objection?', 'that the Ministry cannot reconstruct why it holds the position in that form'),
           ('Why does the exact wording matter?', 'because the reason for choosing it is sometimes the whole of a negotiating position'),
           ('Is the problem resolved?', 'no; neither can identify which sentences in a long statement commit the Ministry')],
        b=[('A sentence that ____________ the Ministry.', 'commits'),
           ('The answer is that it read ____________.', 'well'),
           ('A reason for a phrase and not for a ____________.', 'commitment'),
           ('Which eleven sentences ____________ the Ministry.', 'commit')],
        unresolved=True),

speak=[('Point back exactly',
        ['Student A: say two things, then refer back to one of them.',
         'Student B: say which one was meant.',
         'Rewrite with the former, the latter, such a, or do so until there is one reading.']),
       ('Where does she slow down',
        ['Take four points you would make in a meeting.',
         'Say which one you would dwell on, and say it at length.',
         'Your partner says what they learned about your priorities.']),
       ('Whose sentence',
        ['Find a sentence in a document that commits your organisation.',
         'Say why those words rather than others.',
         'Your partner asks what would change if the words changed.'])],

ext_title='A drafting step can supply the substance and the structure of a statement; voice carries the information a room cannot get elsewhere',
ext_fig=figs.datatable('ONE STATEMENT, THREE PARTS',
                       ['Part', 'Comes from', 'Assembled?'],
                       [['the substance', 'the position on the file', 'yes'],
                        ['the structure', 'the convention of the forum', 'yes'],
                        ['the register', 'the house voice', 'yes'],
                        ['which point is dwelt on', 'a decision about priority', 'no'],
                        ['which words commit the Ministry', 'a negotiating judgement', 'no'],
                        ['the sentence to be quoted', 'a decision about what is wanted', 'no']]),
ext_fig_cap='Three rows assemble well. The last three are decisions and the room reads only '
            'those.',
ext=[
 'Statement and speech drafting divides neatly into three, and the division is the whole of '
 'the practice. The substance is the ministry’s position and is on the file. The structure is '
 'a convention of the forum: what is said first, what is acknowledged, what is held, how long '
 'an intervention runs. The register is the house voice, which is learnable and consistent.',
 'All three of those can be produced quickly and competently, and a first version that gets '
 'them right is worth an hour of a drafter’s time. Press sections that have adopted this '
 'report that the structure is the surprise: conventions of the forum turn out to be well '
 'enough documented to be followed exactly.',
 'What does not come from any of those three is voice, and voice in a plenary is not '
 'decoration. A room reads emphasis. Which of four points a speaker dwells on, which is '
 'disposed of in a clause, which sentence is repeated, whether the word unacceptable is used '
 'or avoided: delegations report these because they are frequently the only information in a '
 'statement that was not already known. Emphasis is in practice a distribution of length, and '
 'an evenly written statement distributes it flat, which says that the ministry has no '
 'preference among its own positions. That is never true and the room knows it is never true, '
 'so the statement reads as a text written by nobody.',
 'The practice that works is to treat the first version as the argument and write the voice by '
 'hand, which takes twenty minutes and consists mostly of choosing the sentence the speaker '
 'slows down for and then making it longer while the others get shorter.',
 'A harder question sits underneath and is not solved. In a statement of twelve hundred words, '
 'perhaps a dozen sentences commit the ministry: would not regard the matter as settled is a '
 'position, read as one by every delegation in the room and reconstructable in two years only '
 'if somebody chose those words for a reason. The rest is prose. Nobody has a reliable way to '
 'mark which dozen, which means a drafter who keeps a well-made sentence because it reads well '
 'may be keeping a commitment nobody decided.'],
dp1=('Statement drafting',
     'Press and public diplomacy sections in several foreign services adopted assisted first '
     'drafts of statements in 2025, retaining human drafting of emphasis and of any wording '
     'that states a position.',
     'Source: reported practice in diplomatic communications, 2025–2026.'),
e_a=[('What are the three parts of a statement?', 'the substance, the structure and the register'),
     ('What is the reported surprise?', 'that conventions of the forum are well enough documented to be followed exactly'),
     ('Why is voice not decoration?', 'because a room reads emphasis and it is often the only new information'),
     ('What is emphasis in practice?', 'a distribution of length'),
     ('What is the unsolved question?', 'which dozen sentences in twelve hundred words commit the ministry')],
e_b=[('The structure of a statement is a convention.', 'T'),
     ('A first version saves no time.', 'F'),
     ('An even statement conveys no preference.', 'T'),
     ('Delegations ignore emphasis.', 'F'),
     ('Writing the voice takes a day.', 'F'),
     ('There is a reliable way to mark committing sentences.', 'F')],

w_model=(
 'Purpose: produce a first version of the Minister’s plenary statement so that the drafter '
 'can spend her time on emphasis rather than on structure. Scope: the 4 points in the agreed '
 'line to take; no new position is to be introduced and no point added. Inputs: the line to '
 'take, the Ministry’s position file, and the 3 most recent statements in the same forum. '
 'Criteria: follow the convention of the forum for order and length; keep each of the 4 points '
 'to the same length, so that emphasis is left to the drafter; use no sentence that states a '
 'position in words not taken from the line to take; mark every sentence drawn from the '
 'position file with its reference. Done: 1 first version of no more than 900 words, with all '
 '4 points of equal length and every positional sentence referenced, within 1 hour. Fallback: '
 'where the line to take does not cover a point that the convention requires to be addressed, '
 'leave a marked gap rather than supplying a position.'),
w_fig=figs.spec_card('THE TASKING FOR A FIRST VERSION',
                     [('Purpose', 'the drafter spends her time on emphasis'),
                      ('Scope', 'the 4 points in the line to take; no new positions'),
                      ('Inputs', 'the line to take, the position file, 3 recent statements'),
                      ('Criteria', 'equal length for all 4 points; no unreferenced positional wording'),
                      ('Done', '1 version of 900 words or fewer, within 1 hour'),
                      ('Fallback', 'a required point uncovered: a marked gap, never a position')]),
w_fig_cap='Equal length for all four points is deliberate: it hands the emphasis back to a person.',
w_task='Write a tasking for a first version of a spoken text in your own work.',
w_steps=['Say what the drafter is left to do.',
         'Limit the points to the agreed line.',
         'Require equal treatment so that emphasis is not pre-empted.',
         'Forbid positional wording that is not referenced.',
         'Say what happens where a required point is not covered.'],
w_bank=['Produce … so that the drafter can spend … rather than …',
        'Cover … ; no new … is to be introduced and no …',
        'Work from … , … and …',
        'Follow … ; keep each of the … to the same length, so that … ; use no sentence that … ; mark …',
        'Where … does not cover a point … , leave … rather than …'],
w_check=['Is emphasis explicitly left to the drafter?',
         'Is unreferenced positional wording forbidden?',
         'Are the points held to equal length?',
         'Is a marked gap required rather than an invented position?'],

t_title='Statement drafting and the voice problem',
t_fig=figs.split('A STATEMENT',
                 'Can be assembled',
                 ['the position, from the file',
                  'the order, from the forum’s convention',
                  'the register, from the house voice',
                  'a first version in an hour'],
                 'Must be written',
                 ['which point is dwelt on',
                  'which sentence is repeated',
                  'which words commit the Ministry',
                  'the sentence meant to be quoted']),
t_fig_cap='The left column saves an hour. The right column is what the room hears.',
t_body=[
 'Take the first version and keep it. The substance is the position on the file, the structure '
 'is a convention of the forum, and the register is the house voice; all three can be produced '
 'competently and quickly, and the structure in particular turns out to be better documented '
 'than most drafters expect. An hour saved on every statement is an hour, and the register '
 'will be right.',
 'Then write the voice yourself, because a room reads emphasis and nothing else in the '
 'statement is new to it. Which of four points the speaker dwells on, which she disposes of '
 'in a clause, whether she uses the word unacceptable: delegations report exactly these '
 'things. Emphasis is a distribution of length, so an evenly written statement has distributed '
 'it flat, and flat says the Ministry has no preference among its own positions, which no '
 'delegation believes.',
 'And hold one question open rather than pretending it is solved. In twelve hundred words, a '
 'dozen sentences commit the Ministry: would not regard the matter as settled is a position, '
 'and somebody is entitled to ask later why those words. If they were kept because they read '
 'well, there is no answer. Nobody has a dependable method for marking which dozen, which '
 'means a drafter has to assume that any sentence which could be read as a position was chosen '
 'by somebody, and make sure it was.'],
t_say=[('Hand back the emphasis: ', 'All 4 points of equal length in the first version.'),
       ('Protect the position: ', 'No positional wording except from the line to take.'),
       ('Choose the sentence: ', 'The Minister dwells on point 2; make it 3 sentences longer.')],
t_bound=('A first version can carry the Ministry’s position, the forum’s convention and the '
         'house register. It cannot decide what the Ministry minds about most, and a statement '
         'with the emphasis left flat tells a room something false. Nor can it know which of '
         'its own well-made sentences commits the Ministry, so a sentence kept because it reads '
         'well may be a position nobody chose.'),
t_a=[('All 4 points of ____________ length in the first version.', 'equal'),
     ('No positional wording except from the ____________ to take.', 'line'),
     ('The Minister dwells on point 2; make it 3 sentences ____________.', 'longer'),
     ('Emphasis is a distribution of ____________.', 'length'),
     ('Flat says the Ministry has no ____________ among its own positions.', 'preference'),
     ('A position nobody ____________.', 'chose')],
t_b_rubric='Rewrite each so that the reference has exactly one reading.',
t_b=[('They proposed a review and a cap. This is unacceptable.', 'they proposed a review and a cap; the latter is unacceptable'),
     ('The Ministry rejected it, which they did before.', 'the Ministry rejected the proposal, as it had done in March'),
     ('Oristan and Kavara objected; they will be answered.', 'Oristan and Kavara objected; both will be answered'),
     ('We considered the figure and the date. It is settled.', 'we considered the figure and the date; the date is settled')],

case=dict(
 title='The Decision Room · The sentence the Minister liked',
 brief=[
  'The Minister has asked for the phrase would not regard the matter as settled to be used '
  'again, in a different context, because it worked.',
  'In the new context the phrase commits the Ministry on a question where its position is that '
  'the matter is settled.',
  'Yara wants to supply a different phrase without raising the inconsistency. Samir wants the '
  'inconsistency put in writing to the Minister’s office. Faris Said says the Minister will '
  'use the phrase from memory if nobody explains why not.'],
 exhibit=figs.datatable('THE PHRASE AND ITS USES',
                        ['', 'Finding', 'Note'],
                        [['first use', 'March plenary, transit', 'in the first version'],
                         ['who chose the wording', 'nobody', 'kept because it read well'],
                         ['the Ministry’s position in March', 'matter not settled', 'consistent'],
                         ['the proposed new context', 'border formalities', '—'],
                         ['the Ministry’s position there', 'matter settled since 2019', 'inconsistent'],
                         ['delegations likely to notice', '2', 'both quoted the March phrase']]),
 exhibit_cap='The phrase was never chosen and is now a habit, and in the new context it '
             'reverses a position.',
 exhibit_note='Two delegations quoted the March phrase back to the Ministry in their own '
              'statements.',
 voices=[('Yara Ibrahim', 'Press and Public Diplomacy',
          'Offer her a better phrase for this context and say nothing about March. She wanted '
          'an effect, not those exact words.'),
         ('Samir Haddad', 'Legal and Treaties',
          'Put it in writing. Two delegations have quoted the March phrase; if she uses it on '
          'border formalities, the Ministry has reopened a question settled in 2019 and nobody '
          'will be able to say it was inadvertent.'),
         ('Ambassador Faris Said', 'Head of Mission, Astrene',
          'She will use it anyway unless somebody tells her what it does. Ministers remember '
          'phrases that worked, and a substitute offered without a reason gets overruled in '
          'the car.')],
 steps=[('Find it', 'Who chose the March wording?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Faris expect a silent substitution to fail?'),
        ('Weigh it', 'Sparing the Minister an explanation against reopening a settled question.'),
        ('Decide', 'What goes to the Minister’s office?')],
 analysis=[('Find it. How did the phrase enter the March statement?', 'it was in the first version and kept because it read well'),
           ('Compare it. What does Samir want?', 'the inconsistency put in writing to the Minister’s office'),
           ('Infer it. What does Faris predict?', 'that a substitute offered without a reason will be overruled'),
           ('Weigh it. How many delegations quoted the phrase?', 'two'),
           ('Decide. What would you do?', 'answers vary; a short written note gives the Minister the reason she needs to choose')],
 decision='Write what the Minister’s office is told.',
 decision_steps=['Say whether the inconsistency is raised.',
                 'Say what alternative wording is offered, and with what reason.',
                 'Say what is recorded about the March phrase.',
                 'Say what changes about keeping well-made sentences.'],
 bank=['The Minister’s office is told that …',
       'The alternative offered is … , on the ground that …',
       'It is recorded that the March phrase …',
       'In future, wording that states a position …',
       'This is reviewed …'],
 outcome='A four-line note went to the Minister’s office setting out what the phrase had meant '
         'in March, which two delegations had quoted it, and what it would mean on border '
         'formalities, with an alternative phrase and the reason for it. The Minister used the '
         'alternative and asked afterwards who had chosen the March wording; the honest answer '
         'was that nobody had. The section now marks every sentence in a first version that '
         'could be read as a position, and a drafter either adopts it with a reason or replaces '
         'it. Yara says the marking is imperfect and catches perhaps two-thirds, and that '
         'two-thirds is the difference between a habit and a position.',
 outcome_q=[('What did the note contain?', 'the March meaning, who had quoted it, the new meaning, and an alternative with its reason'),
            ('What does the section now do?', 'marks every sentence that could be read as a position for the drafter to adopt or replace')],
 tags=[]),

lab=dict(
 title='Brief Lab · Draft the plenary statement',
 task=['This is the tasking behind the March statement, the one three delegations could not '
       'read.',
       'It produced an accurate, well-structured text in which all four points were the same '
       'size.'],
 draft=['Draft the Minister’s statement for the plenary.',
        'Cover our main points.',
        'Use our usual style.',
        'Make it strong where it needs to be.',
        'Keep it to the usual length.',
        'Base it on the line to take and the file.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fourth asks for emphasis without saying where.',
 asked=['The four points at equal length',
        'No positional wording outside the line to take',
        'A marked gap where a point is uncovered'],
 back=['Four points, evenly weighted, correctly stated',
       'One committing phrase chosen by nobody',
       'No indication of which sentences state positions'],
 gap='"Our main points" does not number them, "our usual style" does not say which forum’s '
     'convention, "strong where it needs to be" leaves the emphasis to the method, and "the '
     'line to take and the file" permits positional wording from either.',
 back_cap='A statement that read well, committed the Ministry in one sentence, and told the '
          'room nothing.',
 back_note='Line four is the failure. Emphasis asked for in general is emphasis distributed '
           'evenly, which is the one distribution that misinforms.',
 diagnosis=[('[1] "our main points" — which, and how many?', 'ambiguous referent'),
            ('[2] "our usual style" — which forum’s convention, from which statements?', 'ambiguous referent'),
            ('[3] "strong where it needs to be" — strong judged by whom?', 'unstated criterion'),
            ('[4] "the usual length" — in words, and against which examples?', 'unstated criterion'),
            ('[5] "base it on the line to take and the file" — assumes the file may supply wording that commits', 'hidden assumption'),
            ('[6] nothing on emphasis — assumes even treatment is neutral', 'hidden assumption')],
 rewrite='Rewrite the tasking so that emphasis is left to the drafter and positional wording '
         'is bounded.',
 scaffold=['What the drafter is to spend her time on',
           'The points covered and what may not be added',
           'The line to take, the file and the recent statements',
           'Forum convention, equal lengths, no unreferenced positional wording, references marked',
           'The length, the equality and the deadline',
           'What to do where a required point is not covered'],
 bank=['Produce … so that the drafter can … rather than …',
       'Cover … ; no new … and no …',
       'Work from … , … and …',
       'Follow … ; keep each of the … to … , so that … ; use no sentence that … ; mark …',
       'Return 1 first version of no more than … , within …',
       'Where … , leave … rather than …'],
 check=['Is emphasis reserved to the drafter in words?',
        'Are the points numbered?',
        'Is positional wording limited to the line to take?',
        'Is a marked gap required?'],
 model=['Produce a first version of the Minister’s plenary statement so that the drafter can spend her time on emphasis rather than on structure',
        'The 4 points in the agreed line to take; no new position is to be introduced and no point added',
        'The line to take, the Ministry’s position file, and the 3 most recent statements in the same forum',
        'Follow the convention of the forum for order and length; keep each of the 4 points to the same length, so that emphasis is left to the drafter; use no sentence that states a position in words not taken from the line to take; mark every sentence drawn from the position file with its reference',
        '1 first version of no more than 900 words, with all 4 points of equal length and every positional sentence referenced, within 1 hour',
        'Where the line to take does not cover a point that the convention requires to be addressed, leave a marked gap rather than supplying a position'],
 cost='1 plenary statement from which 3 delegations could not tell the Ministry’s priorities, '
      'and 1 committing phrase that entered the Ministry’s vocabulary without anybody choosing '
      'it.'),

rev_fig=figs.split('REFERENCE',
                   'Two readings',
                   ['They proposed a review and a cap. This is …',
                    'The Ministry rejected it, which they did …',
                    'Oristan and Kavara objected; they will …',
                    'We considered the figure and the date. It is …'],
                   'One reading',
                   ['… the latter is unacceptable.',
                    '… as it had done in March.',
                    '… both will be answered.',
                    '… the date is settled.']),
rev_fig_cap='This, that, such a, the former, the latter, do so, one.',
rev=dict(
 read=[('The three parts of a statement are substance, structure and', ['length', 'register', 'emphasis', 'delivery'], 1),
       ('Emphasis is in practice', ['a tone of voice', 'a distribution of length', 'a register', 'a convention'], 1),
       ('An evenly written statement tells a room', ['the position', 'that there is no preference', 'the structure', 'nothing at all'], 1),
       ('In the Decision Room, what went to the Minister’s office?', ['nothing', 'a four-line note', 'a new statement', 'a protest'], 1)],
 listen_text='A room reads emphasis. Which of four points a speaker dwells on, which is '
             'disposed of in a clause, whether the word unacceptable is used or avoided: '
             'delegations report these because they are frequently the only information in a '
             'statement that was not already known.',
 listen=[('A room reads ____________.', 'emphasis'),
         ('Which is disposed of in a ____________.', 'clause'),
         ('Whether the word ____________ is used or avoided.', 'unacceptable'),
         ('The only information that was not already ____________.', 'known')],
 speak=['Say four points and dwell on one; your partner says which you minded about.',
        'Refer back to one of two things so that only one reading is possible.'],
 write='Write one line reserving emphasis to the drafter.',
 vocab=[('The text a speaker works from, in points, is a ____________.', 'speaking note'),
        ('A form of words a particular speaker is known for is a ____________.', 'signature phrase'),
        ('The manner of expression an institution uses is a ____________.', 'house voice'),
        ('A sentence written so that it can be reported alone is a ____________.', 'quotable sentence'),
        ('The words by which a speaker names those present are a ____________.', 'form of address')],
 gram=[('They proposed a review and a cap. The ____________ is unacceptable.', 'latter'),
       ('The Ministry rejected the proposal, as it had ____________ in March.', 'done'),
       ('Oristan and Kavara objected; ____________ will be answered.', 'both'),
       ('____________ a proposal would require new instructions.', 'Such'),
       ('If a cap is needed, the Ministry will propose ____________.', 'one')]),

found=['Find the sentence in a recent statement of your own that carries the emphasis.',
       'Mark one sentence in a draft that could be read as a commitment.',
       'Ask who chose the wording of a phrase your office uses often.',
       'Rewrite one ambiguous reference so that it has a single reading.'],
end_line='An even statement is a statement with the emphasis removed.',
end_next='Next: Preambular and Operative',
)
