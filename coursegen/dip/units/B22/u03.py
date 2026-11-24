# -*- coding: utf-8 -*-
import figs

U = dict(
num=3,
title='The Doorstep Question',
gram='tentative language: would, might, it may be that',
ai='the doorstep: holding language that is still honest',
strap='CEFR B2 · Grammar: tentative language: would, might, it may be that · '
      'AI: the doorstep: holding language that is still honest',
cando=['use would, might and it may be that without implying what is untrue',
       'answer a doorstep question in one sentence',
       'tell empty holding language from dishonest holding language',
       'test a phrase by asking whether it would survive checking',
       'write a six-line tasking for a line to take'],

hero=('TWELVE PHRASES, EIGHT OF THEM TRUE, AND FOUR THAT IMPLIED WORK NOBODY HAD DONE',
      ['We are working closely with the authorities to resolve this.',
       'Nobody at the Mission had telephoned anybody by half past eight.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A pavement in Ostport at 08:40, two cameras and one question shouted twice.',

warm=['What can you say when you genuinely do not know?',
      'What makes an answer empty but honest?',
      'Which empty phrases imply more than they say?'],

read=[
 'A doorstep is eleven seconds long. You are on a pavement, you are walking, there is a '
 'microphone in front of you, and a question is shouted twice before you reach the car.',
 'Nothing about the format rewards accuracy, and everything about it rewards a sentence that '
 'is short, repeatable and complete, which is why diplomats prepare one sentence and say it, '
 'rather than three and choose.',
 'At twenty past eight Bassel Tannous learns that a consular case has appeared overnight in '
 'the local press and that two cameras are outside. He asks for holding language and receives '
 'twelve phrases in under a minute, all of them smooth.',
 'Eight of the twelve are usable: we are aware of the reports; I am not able to discuss an '
 'individual case; it would not be right for me to comment before the facts are established.',
 'Four are not. We are working closely with the authorities to resolve this sounds like '
 'holding language and is in fact a claim about what the Mission has been doing, and at '
 'twenty past eight nobody at the Mission had telephoned anybody.'],

dp1=('Holding language', 'Press-handling guidance commonly distinguishes between holding '
     'language, which commits the speaker to nothing while remaining accurate, and '
     'formulations which imply action, knowledge or contact that has not taken place and '
     'which are therefore statements capable of being falsified.',
     'Source: general media practice literature, 2025–2026.'),

c_a=[('How long is a doorstep?', 'about eleven seconds'),
     ('What does the format reward?', 'a short, repeatable, complete sentence'),
     ('What did Bassel learn at 08:20?', 'a consular case was in the press and cameras were outside'),
     ('How many phrases came back?', 'twelve, in under a minute'),
     ('How many were usable?', 'eight'),
     ('What was wrong with the others?', 'they implied work nobody had done')],

c_b=[('A doorstep rewards accuracy.', 'F'),
     ('Diplomats prepare one sentence rather than three.', 'T'),
     ('All twelve phrases were smooth.', 'T'),
     ('I am not able to discuss an individual case is usable.', 'T'),
     ('Working closely with the authorities was accurate.', 'F'),
     ('An empty phrase can still be a factual claim.', 'T')],

c_c=[('It ____________ not be right for me to comment at this stage.', 'would'),
     ('There ____________ be a further statement later today.', 'may'),
     ('It ____________ be that the reports are incomplete.', 'may'),
     ('I ____________ not want to add to speculation.', 'would'),
     ('The position ____________ change once the facts are established.', 'might'),
     ('I ____________ rather give you an accurate answer this afternoon.', 'would')],

c_d=[('Would not be right for me to comment commits you to ( an action / nothing ).', ['an action', 'nothing'], 1),
     ('It may be that introduces ( a possibility / a fact ).', ['a possibility', 'a fact'], 0),
     ('We are working closely with the authorities is ( a factual claim / holding language ).',
      ['a factual claim', 'holding language'], 0),
     ('The test of a phrase is whether it ( survives checking / sounds calm ).',
      ['survives checking', 'sounds calm'], 0),
     ('On a doorstep you should prepare ( one sentence / three ).',
      ['one sentence', 'three'], 0)],

c_e=('Empty and honest, or a claim? Put each phrase in the right column.',
     [('We are aware of the reports', 'empty and honest'),
      ('We are working closely with the authorities', 'a claim'),
      ('I am not able to discuss an individual case', 'empty and honest'),
      ('We have been in contact since last night', 'a claim'),
      ('It would not be right to comment yet', 'empty and honest'),
      ('Our consul is on his way to the scene', 'a claim')],
     ['empty and honest', 'a claim']),

v_fig_title='ELEVEN SECONDS ON A PAVEMENT',
v_fig=[('speech', 'a doorstep'), ('people', 'a scrum'), ('clock', 'a walking answer'),
       ('key', 'a cleared phrase'), ('doc', 'a form of words'), ('chart', 'a neutral formulation')],
v_fig_cap='Six words for the shortest and most quoted format in public life.',

vocab=[
 ('a doorstep', 'an unscheduled interview as somebody enters or leaves a building'),
 ('a microphone thrust forward', 'a microphone pushed towards a speaker without invitation'),
 ('a camera position', 'the place from which filming takes place'),
 ('a walking answer', 'an answer given while continuing to move'),
 ('a cleared phrase', 'wording approved in advance for use in public'),
 ('a form of words', 'a fixed phrasing adopted for use'),
 ('a no comment', 'a refusal to say anything at all'),
 ('an unattributed briefing', 'information given without naming its source'),
 ('a stock answer', 'a prepared reply used repeatedly'),
 ('a bridging phrase', 'wording used to move from a question to one’s own point'),
 ('a deflection', 'an answer that turns a question aside'),
 ('an honest refusal', 'a plain statement that one will not answer, and why'),
 ('a one-sentence answer', 'a complete reply in a single sentence'),
 ('a pavement question', 'a question shouted in the street'),
 ('a departure from the building', 'the moment of leaving premises, often filmed'),
 ('a scrum', 'a crowd of journalists pressing around a speaker'),
 ('a shouted question', 'a question called out rather than asked in turn'),
 ('a last question', 'the final question allowed before a speaker leaves'),
 ('a neutral formulation', 'wording that takes no side and asserts nothing'),
 ('a confirmed fact', 'something established and capable of being stated')],

v_a=[('Wording approved in advance for public use is a ____________ phrase.', 'cleared'),
     ('A crowd of journalists pressing around a speaker is a ____________.', 'scrum'),
     ('An answer that turns a question aside is a ____________.', 'deflection'),
     ('A plain statement that one will not answer is an honest ____________.', 'refusal'),
     ('Wording that takes no side is a ____________ formulation.', 'neutral'),
     ('An answer given while continuing to move is a ____________ answer.', 'walking'),
     ('Information given without naming its source is an ____________ briefing.', 'unattributed'),
     ('Wording used to move to one’s own point is a ____________ phrase.', 'bridging')],

v_b=[('A doorstep is an unscheduled interview', 'as somebody enters or leaves a building.'),
     ('A stock answer is a prepared reply', 'used repeatedly.'),
     ('A confirmed fact is something established', 'and capable of being stated.'),
     ('A no comment is a refusal', 'to say anything at all.'),
     ('A last question is the final question', 'allowed before a speaker leaves.')],

g_title='Grammar: tentative language: would, might, it may be that',
g_rule=['Would softens a refusal into a judgement: it would not be right for me to comment.',
        'Might and may mark possibility without asserting it: the position might change.',
        'It may be that introduces a possibility you are not endorsing: it may be that the '
        'reports are incomplete.',
        'Tentative forms describe your own position safely; they do not make an untrue statement '
        'about facts safe, because it may be that we have been in contact still claims contact.'],
g_fig=('BLUNT OR UNTRUE',
       ['I cannot comment.',
        'The position will change.',
        'The reports are wrong.',
        'We are working closely with the authorities.'],
       'TENTATIVE AND TRUE',
       ['It would not be right for me to comment before the facts are established.',
        'The position might change once the facts are established.',
        'It may be that the reports are incomplete; I have not seen the file.',
        'We are aware of the reports and we are looking into them this morning.'],
       'four answers that are either rude or false',
       'the same four, tentative where tentativeness is honest'),
g_fig_cap='Tentative language protects a position, not a falsehood. Check what the sentence implies.',

g_a=[('It ____________ not be right for me to comment at this stage.', 'would'),
     ('There ____________ be a further statement later today.', 'may'),
     ('It ____________ be that the reports are incomplete.', 'may'),
     ('I ____________ not want to add to speculation.', 'would'),
     ('The position ____________ change once the facts are established.', 'might'),
     ('I ____________ rather give you an accurate answer this afternoon.', 'would'),
     ('It ____________ be premature to draw conclusions this morning.', 'would'),
     ('There ____________ well be an explanation we have not yet heard.', 'may'),
     ('I ____________ be able to say more by four o’clock.', 'might')],

g_b=[('( It would not be right for me to comment / I cannot comment ) — softer and fuller.', ['It would not be right for me to comment', 'I cannot comment'], 0),
     ('( The position might change / The position will change ) — possibility only.',
      ['The position might change', 'The position will change'], 0),
     ('( It may be that the reports are incomplete / The reports are wrong ) — not endorsed.',
      ['It may be that the reports are incomplete', 'The reports are wrong'], 0),
     ('( We are aware of the reports / We are working closely with the authorities ) — true at 08:20.',
      ['We are aware of the reports', 'We are working closely with the authorities'], 0),
     ('( I might be able to say more by four / I will say more by four ) — no promise.',
      ['I might be able to say more by four', 'I will say more by four'], 0),
     ('( I would rather give you an accurate answer later / No comment ) — a reason given.',
      ['I would rather give you an accurate answer later', 'No comment'], 0)],

d1=dict(
 title='Twelve phrases at twenty past eight',
 fig=(['Twelve phrases. Which do I use?', 'Which of them are true?'],
      ['Eight. Four are claims.', 'Then you have eight.']),
 cap='Bassel Tannous and Rim Haddad, twenty minutes before leaving the building.',
 lines=[('Rim', 'Two cameras at the front and one at the side entrance.'),
        ('Bassel', 'I have twelve phrases. They are all perfectly calm.'),
        ('Rim', 'Read me the one you like best.'),
        ('Bassel', 'We are working closely with the authorities to resolve this.'),
        ('Rim', 'Have we telephoned anybody this morning?'),
        ('Bassel', 'Not yet. I was going to do it after the doorstep.'),
        ('Rim', 'Then that sentence is false, and somebody will ask the authorities whether it is true.'),
        ('Bassel', 'It sounds like holding language.'),
        ('Rim', 'It sounds like it and it is not. It says what we have done, and we have done nothing yet.'),
        ('Bassel', 'So: we are aware of the reports and we are looking into them this morning.'),
        ('Rim', 'That is true at twenty past eight, and it will still be true at six tonight.'),
        ('Bassel', 'One sentence, then, and the same sentence to both cameras.')],
 a=[('How many cameras were there?', 'three, two at the front and one at the side'),
    ('How many phrases did he have?', 'twelve'),
    ('Why was his favourite false?', 'nobody had telephoned anybody'),
    ('What test does Rim apply?', 'whether somebody could check it'),
    ('What sentence does he settle on?', 'we are aware and we are looking into it this morning')],
 b=[('They are all perfectly ____________.', 'calm'),
    ('It says what we have ____________.', 'done'),
    ('It will still be ____________ at six tonight.', 'true'),
    ('The same sentence to both ____________.', 'cameras')]),

d2=dict(
 title='The second question, which nobody prepared',
 fig=(['He asked about the family.', 'And you said?'],
      ['That I could not discuss it.', 'Did he ask whether you had met them?']),
 cap='Bassel and Dr Suhair Kanaan, later that morning.',
 lines=[('Suhair', 'How many questions?'),
        ('Bassel', 'Two. The case, and then whether I had met the family.'),
        ('Suhair', 'And had you?'),
        ('Bassel', 'Twice, in January. It is in the consular file.'),
        ('Suhair', 'What did you say?'),
        ('Bassel', 'That I was not able to discuss an individual case, which is true and sounded evasive.'),
        ('Suhair', 'It was true and it was evasive, and both of those will be noticed.'),
        ('Bassel', 'Should I have said that I had met them?'),
        ('Suhair', 'You cannot, without their consent. But you can say that the Mission has been in contact with the family since January.'),
        ('Bassel', 'Which is true, says nothing about them, and sounds like work rather than avoidance.'),
        ('Suhair', 'And it is the sentence you should have had ready, because that question was obvious.'),
        ('Bassel', 'And what do I say when he asks what the family told me?')],
 unresolved=True,
 a=[('How many questions were asked?', 'two'),
    ('Had he met the family?', 'twice, in January'),
    ('What did he say?', 'that he could not discuss an individual case'),
    ('Why was that unsatisfactory?', 'it was true and sounded evasive'),
    ('What better sentence was available?', 'that the Mission had been in contact since January')],
 b=[('It is in the consular ____________.', 'file'),
    ('Both of those will be ____________.', 'noticed'),
    ('Without their ____________.', 'consent'),
    ('That question was ____________.', 'obvious')]),

speak=[('Tentative but true',
        ['Make nine answers using would, might and it may be that.',
         'Your partner says what each one commits you to.',
         'Remove any that assert a fact you have not checked.']),
       ('Eleven seconds',
        ['Your partner shouts a question as you walk past.',
         'Answer in one sentence and keep walking.',
         'Repeat the same sentence when the question is repeated.']),
       ('Would it survive checking?',
        ['Write five holding phrases you have heard in public life.',
         'Say for each what somebody could telephone to check.',
         'Keep only the ones that would hold.'])],

ext_title='Holding language is easy to generate and the difficult part is whether it is true',
ext_fig=figs.datatable('TWELVE PHRASES AT 08:20',
                       ['Phrase', 'Implies', 'True at 08:20?'],
                       [['we are aware of the reports', 'nothing beyond awareness', 'yes'],
                        ['I cannot discuss an individual case', 'nothing', 'yes'],
                        ['it would be wrong to comment yet', 'nothing', 'yes'],
                        ['we are working closely with the authorities', 'contact has taken place', 'no'],
                        ['our consul is on his way', 'a consul has left', 'no'],
                        ['we have been in touch since last night', 'contact last night', 'no']]),
ext_fig_cap='Three phrases that commit to nothing and three that assert things nobody had done.',
ext=[
 'Asking for holding language is one of the most reasonable uses of a system in a Mission, '
 'because the task is a language task: produce ten neutral, calm, repeatable sentences that '
 'answer a question without answering it, in the register of public life.',
 'It does this very well, and the phrases it produces are better than the ones most people '
 'improvise at twenty past eight with a camera outside, which are usually either too blunt or '
 'too long to survive being quoted.',
 'The trouble is that the register of holding language and the register of reassurance are '
 'almost the same, and reassurance makes claims. We are working closely with the authorities '
 'is grammatically a statement about the present conduct of your Mission.',
 'A journalist can check it with one telephone call, and if the answer is that nobody has been '
 'in touch, the story is no longer about a consular case: it is about a Mission that says '
 'things that are not true, which is a far worse story.',
 'So apply one test to every phrase before you use it: what would somebody find if they '
 'checked this sentence? Keep the phrases that would hold at six o’clock tonight, and strike '
 'the ones that describe work you have not yet done, however calm they sound.'],

dp2=('Verifiable implicature', 'Media guidance commonly warns that reassuring formulations '
     'about contact, cooperation or ongoing work are routinely verified with the third parties '
     'named or implied, and that a formulation found to be inaccurate becomes a separate and '
     'more damaging story.',
     'Source: general media practice literature, 2025–2026.'),

e_a=[('Why is holding language suited to a system?', 'it is a language task in a fixed register'),
     ('What do improvised phrases usually get wrong?', 'they are too blunt or too long'),
     ('Which two registers are almost the same?', 'holding language and reassurance'),
     ('What is the grammatical status of working closely?', 'a statement about present conduct'),
     ('What is the single test?', 'what somebody would find if they checked it')],
e_b=[('Generated holding phrases are usually clumsy.', 'F'),
     ('Reassurance makes claims.', 'T'),
     ('A journalist is unlikely to check a formulation.', 'F'),
     ('An inaccurate formulation becomes a worse story.', 'T'),
     ('A phrase should hold at the end of the day.', 'T'),
     ('Calmness is evidence of accuracy.', 'F')],

w_model='Purpose: so that the consul has one sentence he can repeat on the pavement at 08:40 '
        'and still defend at 18:00. Scope: the consular case reported overnight; the visa '
        'question is handled separately. Inputs: the press reports of this morning, the Mission’s '
        'consular file note of January, and the record of what the Mission has actually done '
        'since 07:00. Criteria: 10 phrases, each marked for what it implies and whether that is '
        'true as at 08:20; no phrase asserting contact, travel or cooperation that has not taken '
        'place; one sentence chosen and used for every camera. Done: the line to take with the '
        'consul by 08:30. Fallback: where no true phrase covers a question, the consul says he '
        'will come back with an answer and names a time.',
w_fig=figs.spec_card('SIX LINES FOR A LINE TO TAKE',
                     [('Purpose', 'one sentence, defensible at 18:00'),
                      ('Scope', 'the overnight consular report'),
                      ('Inputs', 'the reports, the file note, what we have actually done'),
                      ('Criteria', '10 phrases marked for implication and truth at 08:20'),
                      ('Done', 'with the consul by 08:30'),
                      ('Fallback', 'no true phrase: promise an answer and name a time')]),
w_fig_cap='Line 3’s last clause is what makes the difference: a record of what has actually been done.',
w_task='Write a six-line tasking for a line to take.',
w_steps=['Line 1: what the sentence must do, and for how long.',
         'Line 2: which subject, and what is handled separately.',
         'Line 3: the reports, the file and the record of action taken.',
         'Line 4: how many phrases, marked how, and what may not be asserted.',
         'Line 5: who has it and by when.',
         'Line 6: what is said where no true phrase exists.'],
w_bank=['Purpose: so that … has one sentence he can repeat at … and still defend at … ',
        'Scope: the … reported … ; … is handled separately',
        'Inputs: the press reports of … , the file note of … , and the record of what we have done since … ',
        'Criteria: … phrases, each marked for what it implies and whether that is true as at … ',
        'Done: the line to take with … by … . Fallback: where no true phrase covers a question, … '],
w_check=['Does line 3 include what has actually been done?',
         'Is each phrase marked for what it implies?',
         'Is asserting unperformed work forbidden?',
         'Does line 6 give a time rather than a refusal?'],

t_title='The doorstep: holding language that is still honest',
t_fig=figs.split('BEFORE YOU WALK OUT',
                 'Ask for this',
                 ['ten neutral phrases for this question',
                  'what each one implies',
                  'which imply contact or action',
                  'the shortest honest refusal'],
                 'Supply this yourself',
                 ['what the Mission has actually done',
                  'what time it was done',
                  'what you may say about a person',
                  'what you will know by this afternoon']),
t_fig_cap='The phrases are cheap. The record of what you have really done is the part that costs.',
t_body=[
 'Ask for ten neutral phrases that answer the question without answering it, and then ask the '
 'second question, which is the one that matters: for each phrase, what does it imply about what '
 'we have done, and could somebody check it?',
 'Give it the record of what has actually happened since seven o’clock — one telephone call, no '
 'visit, a note to the capital — and ask it to strike any phrase that asserts more than that. '
 'What survives is holding language; what is struck is reassurance, and reassurance is '
 'checkable.',
 'Then choose one sentence, not three, and use it for every camera, every repetition and every '
 'side entrance. A doorstep is eleven seconds and the only variation that helps you is none at '
 'all, because a second formulation is a second sentence to defend.'],
t_say=[('Ask for phrases: ', 'Ten neutral phrases for this question, each under twelve words.'),
       ('Ask the real question: ', 'For each, what does it imply we have done, and could it be checked?'),
       ('Give the record: ', 'This is what we have actually done since seven o’clock.')],
t_bound='A system does not know what your Mission has done this morning. It will produce a '
        'calm sentence describing close cooperation because that is the register, and it has no '
        'way of knowing that nobody has made a telephone call yet.',
t_a=[('Ten neutral phrases, each under twelve ____________.', 'words'),
     ('What does it ____________ we have done?', 'imply'),
     ('And could it be ____________?', 'checked'),
     ('This is what we have actually done since ____________ o’clock.', 'seven'),
     ('It will produce a calm sentence describing close ____________.', 'cooperation'),
     ('Nobody has made a telephone ____________ yet.', 'call')],
t_b_rubric='Say whether each phrase is usable at twenty past eight.',
t_b=[('We are aware of the reports.', 'usable: it asserts only awareness'),
     ('We are working closely with the authorities.', 'not usable: no contact has been made'),
     ('It would not be right to comment before the facts are established.', 'usable: it commits to nothing'),
     ('Our consul is on his way to the scene.', 'not usable unless he has actually left')],

case=dict(
 title='The Decision Room · The sentence that could be telephoned',
 brief=[
  'At twenty past eight a consul learns that a consular case has been reported overnight and '
  'that three cameras are outside the building. He asks for holding language and receives '
  'twelve calm, well-formed phrases in under a minute.',
  'Eight commit the Mission to nothing: awareness of reports, an inability to discuss an '
  'individual case, a judgement that comment would be premature. Four describe activity: close '
  'cooperation with the authorities, a consul on his way, contact since the previous night.',
  'None of the four is true at twenty past eight. The Mission has made no telephone call, sent '
  'nobody anywhere, and spoken to no authority, and each of the four could be checked by a '
  'journalist with one call before lunch.'],
 exhibit=figs.datatable('WHAT HAD ACTUALLY HAPPENED BY 08:20',
                        ['Action', 'Done?', 'Time'],
                        [['press reports read', 'yes', '08:05'],
                         ['consular file retrieved', 'yes', '08:12'],
                         ['capital informed', 'no', '—'],
                         ['authorities contacted', 'no', '—'],
                         ['consul despatched', 'no', '—'],
                         ['family contacted today', 'no', '—']]),
 exhibit_cap='Two actions completed and four phrases asserting four that were not.',
 exhibit_note='The four phrases are not inventions about the case. They are inventions about '
              'the Mission, which is the one subject on which the Mission will certainly be '
              'checked.',
 voices=[('Bassel Tannous', 'consul',
          'Twelve phrases in a minute, and eight of them better than anything I would have said on a pavement.'),
         ('Rim Haddad', 'consular assistant',
          'And four that say what we have been doing, at an hour when we had done two things.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'The test is not whether a sentence is calm. It is what a journalist finds when she telephones.')],
 steps=[('Find it', 'What was produced?'),
        ('Compare it', 'The four phrases against the record of the morning.'),
        ('Infer it', 'Why does the register produce claims?'),
        ('Weigh it', 'Eight usable phrases against four checkable falsehoods.'),
        ('Decide', 'What test is applied before a phrase is used?')],
 analysis=[('Find it. What came back?', 'twelve calm phrases in under a minute'),
           ('Compare it. Phrases against record?', 'four asserted actions not taken'),
           ('Infer it. Why?', 'reassurance and holding language share a register'),
           ('Weigh it. What is the balance?', 'eight good phrases and four that invite a worse story'),
           ('Decide. What is the test?', 'what somebody would find if they checked the sentence')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what is asked for and in what quantity.',
                 'Say what second question is put about each phrase.',
                 'Say what record must be supplied.',
                 'Say how many sentences are used on a doorstep.'],
 bank=['Ten neutral phrases are requested, each short enough to be quoted whole.',
       'Each phrase is tested by asking what it implies the Mission has done, and whether that could be checked.',
       'The record of what has actually been done, with times, is supplied before any phrase is chosen.',
       'One sentence is chosen and used for every camera and every repetition.'],
 outcome='Bassel uses one sentence at both exits: the Mission is aware of the reports and is '
         'looking into them this morning. It is quoted three times and remains true at six '
         'o’clock. The four discarded phrases reappear in the afternoon line to take, by which '
         'time two of them have become accurate, and the other two are still struck.',
 outcome_q=[('What sentence did he use?', 'that the Mission was aware and looking into it'),
            ('How often was it quoted?', 'three times'),
            ('Was it still true at six?', 'yes'),
            ('What happened to the four phrases?', 'two became accurate by the afternoon'),
            ('And the other two?', 'they were still struck')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Give me something to say outside',
 task=['A consul asked for holding language twenty minutes before leaving the building.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Give me something to say outside.',
        'Keep it calm.',
        'Do not commit us to anything.',
        'Make it sound like we are on top of it.',
        'A few options would be good.',
        'Two minutes, I am leaving at 08:40.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fourth one asks for exactly the sentence that cannot be true.',
 asked=['Calm', 'No commitment', 'On top of it'],
 back=['12 phrases', '4 implying action not taken', '0 marked for what they imply'],
 gap='Nobody said what the Mission had actually done, or that a phrase must survive a telephone call.',
 back_cap='Twelve calm phrases, four of which a journalist could disprove before lunch.',
 back_note='Make it sound like we are on top of it and do not commit us to anything cannot '
           'both be satisfied honestly at twenty past eight, because sounding on top of it '
           'means asserting activity, and the activity has not happened.',
 diagnosis=[('“something to say”', 'undefined done'),
            ('“on top of it”', 'undefined done'),
            ('“a few options”', 'ambiguous referent'),
            ('“anything”', 'ambiguous referent'),
            ('“keep it calm”', 'unstated exception'),
            ('“two minutes”', 'unstated exception')],
 rewrite='Rewrite it on the six lines so that every phrase would survive being checked.',
 scaffold=['what the sentence must do and for how long',
           'which subject, and what is handled separately',
           'the reports, the file and the record of what has been done',
           'how many phrases, marked how, and what may not be asserted',
           'who has it and by when',
           'what is said where no true phrase exists'],
 bank=['Purpose: so that the consul has one sentence he can repeat at … and defend at … ',
       'Scope: the case reported overnight; … handled separately',
       'Inputs: this morning’s reports, the file note of … , and the record of what we have done since … ',
       'Criteria: … phrases, each marked for what it implies and whether that is true as at … ; no phrase asserting contact or action not taken',
       'Done: the line to take with the consul by … ',
       'Fallback: where no true phrase covers a question, he promises an answer and names a time'],
 check=['Is the record of actual action an input?',
        'Is each phrase marked for its implication?',
        'Is asserting unperformed action forbidden?',
        'Is one sentence chosen rather than several?'],
 model=['so that the consul has one sentence he can repeat on the pavement at 08:40 and still defend at 18:00',
        'the consular case reported overnight; the visa question is handled separately',
        'this morning’s press reports, the consular file note of January, and the record of what the Mission has done since 07:00',
        '10 phrases, each marked for what it implies and whether that is true as at 08:20; no phrase asserting contact, travel or cooperation not taken',
        'the line to take with the consul by 08:30, one sentence chosen for every camera',
        'where no true phrase covers a question, the consul promises an answer and names a time'],
 cost='4 of 12 phrases asserted work not done. 1 telephone call by any journalist turns a '
      'consular story into a story about the Mission.'),

feet=dict(
 title='On Your Feet · The question is shouted a third time as you reach the car',
 setting=[
  'You have used your one sentence twice, at the front door and at the foot of the steps. It '
  'is accurate and you are satisfied with it. You are four metres from the car.',
  'The question comes a third time, sharper, with a name in it this time, and a second '
  'journalist adds a question about whether you have met the family. Both cameras are running '
  'and you have perhaps eight seconds.'],
 ladder=[('Have you met the family?', 'the question with a person in it'),
         ('So you have nothing to say to them', 'the inference you must not leave'),
         ('Will you resign over this?', 'the question designed for a clip')],
 cap='Three shouted questions in eight seconds, with the car door open.',
 turns=[('Turn 1 · Journalist', 'Have you met the family yourself?'),
        ('Turn 2 · Journalist', 'So you have nothing to say to them this morning.'),
        ('Turn 3 · Second journalist', 'Will you be resigning over this?')],
 holds=['The Mission has been in contact with the family since January.',
        'I am not going to discuss an individual case in the street, and I would not expect you to want me to.',
        'It is not that I have nothing to say to them; it is that I will say it to them and not to a camera.',
        'I am not able to answer a question about a person without their consent.',
        'No, and I would rather answer that properly than in four words on a pavement.',
        'My press officer will have something for you by one o’clock, and it will be the same for everybody.'],
 redline='You must not say anything about an individual without consent, you must not leave '
         'the words nothing to say standing, and you must not answer a resignation question '
         'with a joke or a shrug. Do not invent a time you cannot keep.',
 score=['Answered the contact question truthfully without discussing the person.',
        'Corrected the inference about having nothing to say.',
        'Named consent as the reason, not evasion.',
        'Answered the resignation question with a plain word.',
        'Gave a time and a channel for the proper answer.'],
 a=[('What can you say about the family?', 'that the Mission has been in contact since January'),
    ('What can you not say?', 'anything about the people without their consent'),
    ('What inference must you correct?', 'that you have nothing to say to them'),
    ('How do you answer the resignation question?', 'with a plain no, and an offer to answer properly'),
    ('What do you offer at the end?', 'a time and the same answer for everybody'),
    ('What must you not invent?', 'a time you cannot keep')]),

rev_fig=figs.split('A DOORSTEP SENTENCE',
                   'Must be',
                   ['true at eight and at six',
                    'short enough to quote whole',
                    'the same at every exit',
                    'about you, not about a person'],
                   'Must not',
                   ['assert contact not made',
                    'describe a journey not begun',
                    'claim cooperation not sought',
                    'name anybody without consent']),
rev_fig_cap='Eight phrases survive these tests. Four calm ones do not, and the four sound better.',
rev=dict(
 read=[('How long is a doorstep?',
        ['about eleven seconds', 'three minutes', 'twenty minutes', 'an hour'], 0),
       ('How many phrases came back?',
        ['twelve', 'eight', 'four', 'twenty'], 0),
       ('How many were usable?',
        ['eight', 'twelve', 'two', 'none'], 0),
       ('What was wrong with the other four?',
        ['they asserted action not taken', 'they were too long',
         'they were rude', 'they named the family'], 0)],
 listen_text='Ask for ten neutral phrases, each under twelve words, and then ask what each '
             'one implies the Mission has done and whether it could be checked. Supply the '
             'record of what has actually happened since seven o’clock.',
 listen=[('Ask for ten ____________ phrases.', 'neutral'),
         ('Each under twelve ____________.', 'words'),
         ('What each one implies the Mission has ____________.', 'done'),
         ('And whether it could be ____________.', 'checked')],
 speak=['Make nine answers using would, might and it may be that, and say what each commits you to.',
        'Then answer one shouted question in one sentence, three times, without varying it.'],
 write='Write a six-line tasking for a line to take.',
 vocab=[('Wording approved in advance for use in public is a ____________ phrase.', 'cleared'),
        ('A crowd of journalists pressing around you is a ____________.', 'scrum'),
        ('An answer that turns a question aside is a ____________.', 'deflection'),
        ('Wording that takes no side is a ____________ formulation.', 'neutral')],
 gram=[('It ____________ not be right for me to comment yet.', 'would'),
       ('It ____________ be that the account is incomplete.', 'may'),
       ('The answer ____________ change once the file is read.', 'might'),
       ('I ____________ be able to say more by four o’clock.', 'might')]),

found=['Prepare one sentence for a doorstep, and use it at every exit.',
       'Ask what each holding phrase implies you have done, and whether it could be checked.',
       'Supply the record of what has actually been done, with times, before choosing a phrase.',
       'Say nothing about an individual without consent, and say why.'],
end_line='Calm is easy to generate. True at six o’clock is the test.',
end_next='Next: A Question About the Past')
