# -*- coding: utf-8 -*-
import figs

U = dict(
num=4,
title='A Question About the Past',
gram='the third conditional and the language of regret',
ai='a question about the past, answered without a script',
strap='CEFR B2 · Grammar: the third conditional and the language of regret · '
      'AI: a question about the past, answered without a script',
cando=['use the third conditional accurately to speak about what did not happen',
       'express regret without accepting what you have not established',
       'answer a question about an institution’s past from its records',
       'say why a drafted account of the past cannot be trusted',
       'write a six-line tasking for an archive check'],

hero=('IT WROTE ME A HISTORY OF MY OWN MISSION, AND THREE OF ITS FACTS DO NOT EXIST',
      ['A statement in that year, it said. A visit in the spring. A letter in reply.',
       'The archive holds no statement, no visit and no letter.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A question about the years before the present period, asked in the last four minutes of an interview.',

warm=['How do you answer a question about something that happened before you arrived?',
      'What can you say about a decision you did not take?',
      'What is the difference between regret and an admission?'],

read=[
 'The hardest question in a public interview is rarely about the present. It is about the '
 'past: what this institution did in a given year, what it said, what it failed to say, and '
 'whether the person now sitting in the chair will defend it.',
 'Ambassador Walid Hourani is asked such a question with four minutes left. He arrived at this '
 'post in the present period; the question concerns the Mission’s conduct a decade earlier, '
 'when he was serving elsewhere and somebody else sat in his chair.',
 'The temptation is to produce a general answer about a new period, a different approach and '
 'lessons learned, which is fluent, unfalsifiable and heard by every listener as exactly what '
 'it is.',
 'He asks a system in advance for a draft. What comes back is confident and well shaped, and '
 'it contains three specific claims about the Mission’s past: a statement issued in that year, '
 'a visit in the spring, and a letter sent in reply to an enquiry.',
 'None of the three is in the archive. The archive holds eleven files for that year, with a gap '
 'of four months in the correspondence register, and what it holds is the only thing he is able '
 'to say.'],

dp1=('Generated accounts of the past', 'It is commonly observed that systems asked to '
     'describe the history of a named institution may produce plausible but unfounded '
     'specifics, since fluent historical narrative is generated from patterns rather than from '
     'the institution’s own records.',
     'Source: general practice guidance on generated text, 2025–2026.'),

c_a=[('What is the hardest kind of question?', 'one about the past'),
     ('Where was Hourani a decade earlier?', 'serving elsewhere'),
     ('What is the fluent temptation?', 'a general answer about a new period'),
     ('How many specific claims did the draft contain?', 'three'),
     ('How many were in the archive?', 'none'),
     ('What does the archive hold for that year?', 'eleven files and a four-month gap')],

c_b=[('The question concerned the present period.', 'F'),
     ('Hourani held this post a decade earlier.', 'F'),
     ('A general answer is unfalsifiable.', 'T'),
     ('The draft was poorly written.', 'F'),
     ('The three claims were documented.', 'F'),
     ('The correspondence register has a gap.', 'T')],

c_c=[('If the file ____________ been kept, we would know what was decided.', 'had'),
     ('Had we known in March, we ____________ have written sooner.', 'would'),
     ('If I ____________ been here, I hope I would have acted differently.', 'had'),
     ('The letter ____________ have been answered, and it was not.', 'should'),
     ('I regret that the enquiry ____________ unanswered for four months.', 'went'),
     ('If the register ____________ complete, I could tell you today.', 'were')],

c_d=[('The third conditional speaks about ( what did not happen / what may happen ).', ['what did not happen', 'what may happen'], 0),
     ('It should have been answered expresses ( regret about the past / a future duty ).',
      ['regret about the past', 'a future duty'], 0),
     ('I regret that is followed by ( a fact / a condition ).', ['a fact', 'a condition'], 0),
     ('The generated draft invented ( three specifics / the whole subject ).',
      ['three specifics', 'the whole subject'], 0),
     ('An institution’s past is established by ( its records / a fluent narrative ).',
      ['its records', 'a fluent narrative'], 0)],

c_e=('Third conditional, regret or duty? Put each in the right column.',
     [('If the file had been kept, we would know', 'third conditional'),
      ('I regret that the enquiry went unanswered', 'regret'),
      ('The letter should have been answered', 'duty'),
      ('Had we known, we would have written', 'third conditional'),
      ('I regret the four-month delay', 'regret'),
      ('A reply ought to have been sent', 'duty')],
     ['third conditional', 'regret', 'duty']),

v_fig_title='WHAT A PAST IS MADE OF',
v_fig=[('doc', 'an institutional record'), ('chart', 'a gap in the archive'), ('key', 'a documented fact'),
       ('people', 'a predecessor’s decision'), ('speech', 'a statement of regret'), ('clock', 'an archive search')],
v_fig_cap='Six words for the only materials from which an honest answer about the past can be built.',

vocab=[
 ('an institutional record', 'a document held by the institution itself'),
 ('a predecessor’s decision', 'a decision taken by whoever held the post before'),
 ('a gap in the archive', 'a period for which documents are missing'),
 ('a period before one’s service', 'the time before an officer took up a post'),
 ('a statement of regret', 'a formal expression of regret about something that happened'),
 ('a documented fact', 'something a record establishes'),
 ('an undocumented claim', 'an assertion no record supports'),
 ('a personal responsibility', 'accountability belonging to an individual'),
 ('an institutional responsibility', 'accountability belonging to a body rather than a person'),
 ('a question about the past', 'a question concerning events before the present period'),
 ('an archive search', 'a systematic examination of held records'),
 ('a date of appointment', 'the day on which an officer took up a post'),
 ('a service record', 'the official account of where and when an officer served'),
 ('a continuity of institution', 'the principle that a body persists through changes of staff'),
 ('a change of practice', 'a documented alteration in how something is done'),
 ('a published apology', 'an apology issued in public'),
 ('a matter for others', 'a question outside one’s own competence to answer'),
 ('a historical account', 'a narrative of past events'),
 ('an unanswered letter', 'correspondence to which no reply was sent'),
 ('an admission of error', 'a statement that something done was wrong')],

v_a=[('A period for which documents are missing is a ____________ in the archive.', 'gap'),
     ('An assertion no record supports is an ____________ claim.', 'undocumented'),
     ('A systematic examination of held records is an archive ____________.', 'search'),
     ('A question outside your competence is a matter for ____________.', 'others'),
     ('Accountability belonging to a body is an ____________ responsibility.', 'institutional'),
     ('A formal expression of regret is a statement of ____________.', 'regret'),
     ('Correspondence to which no reply was sent is an ____________ letter.', 'unanswered'),
     ('The official account of where an officer served is a ____________ record.', 'service')],

v_b=[('An institutional record is a document', 'held by the institution itself.'),
     ('A continuity of institution is the principle', 'that a body persists through changes of staff.'),
     ('A change of practice is a documented alteration', 'in how something is done.'),
     ('An admission of error is a statement', 'that something done was wrong.'),
     ('A date of appointment is the day', 'on which an officer took up a post.')],

g_title='Grammar: the third conditional and the language of regret',
g_rule=['The third conditional speaks about what did not happen: if the file had been kept, we '
        'would know what was decided.',
        'Inversion is more formal and more natural in speech of this kind: had we known in '
        'March, we would have written sooner.',
        'Should have and ought to have state a duty that was not met: the letter should have '
        'been answered.',
        'I regret that is followed by a fact, not a condition, and it commits you to that fact: '
        'use it only for what the record establishes.'],
g_fig=('EVASIVE OR VAGUE',
       ['That was a different period.',
        'Lessons have been learned.',
        'Things were not done as they would be today.',
        'I cannot speak for my predecessors.'],
       'EXACT ABOUT THE PAST',
       ['I arrived at this post in the present period; I was serving elsewhere in that year.',
        'The register shows a gap of four months, and no reply was sent in that time.',
        'The letter should have been answered within a month, and it was not.',
        'Had the enquiry reached this desk, I would have expected a reply in a week.'],
       'four sentences that could be said about any institution',
       'the same four, each tied to a document or a date'),
g_fig_cap='Regret about a documented fact is credible. Regret about a general period is heard as management.',

g_a=[('If the file ____________ been kept, we would know what was decided.', 'had'),
     ('Had we known in March, we ____________ have written sooner.', 'would'),
     ('If I ____________ been here, I hope I would have acted differently.', 'had'),
     ('The letter ____________ have been answered, and it was not.', 'should'),
     ('I regret that the enquiry ____________ unanswered for four months.', 'went'),
     ('If the register ____________ complete, I could tell you today.', 'were'),
     ('Had the papers survived, the question ____________ be easy to answer.', 'would'),
     ('A reply ____________ to have been sent within a month.', 'ought'),
     ('If anybody ____________ recorded the decision, I would read it to you.', 'had')],

g_b=[('( If we knew in March / Had we known in March ) , we would have written sooner.', ['If we knew in March', 'Had we known in March'], 1),
     ('( The letter should have been answered / The letter should be answered ) — a past duty.',
      ['The letter should have been answered', 'The letter should be answered'], 0),
     ('( I regret that the enquiry went unanswered / I regret if anything went wrong ) — a fact.',
      ['I regret that the enquiry went unanswered', 'I regret if anything went wrong'], 0),
     ('( The register shows a gap of four months / That was a different period ) — exact.',
      ['The register shows a gap of four months', 'That was a different period'], 0),
     ('( If the file had been kept, we would know / If the file was kept, we know ) — it was not kept.',
      ['If the file had been kept, we would know', 'If the file was kept, we know'], 0),
     ('( I was serving elsewhere in that year / I cannot speak for my predecessors ) — checkable.',
      ['I was serving elsewhere in that year', 'I cannot speak for my predecessors'], 0)],

d1=dict(
 title='Three facts that are not in the archive',
 fig=(['It drafted me an answer.', 'And where did the facts come from?'],
      ['It does not say.', 'Then check all three.']),
 cap='Ambassador Walid Hourani and Layla Sayegh, two days before the interview.',
 lines=[('Layla', 'You asked for a draft on the question about that year.'),
        ('Hourani', 'I did, and it reads well. Better than the three attempts I wrote myself.'),
        ('Layla', 'It says the Mission issued a statement that year.'),
        ('Hourani', 'Which would be useful, if it had.'),
        ('Layla', 'There is no statement in the archive. There is no visit in the spring either.'),
        ('Hourani', 'And the letter in reply to the enquiry?'),
        ('Layla', 'No letter. There is a four-month gap in the correspondence register.'),
        ('Hourani', 'So the draft has given me three things that would have helped, and none of them happened.'),
        ('Layla', 'They are the things that usually happen. That is presumably where they come from.'),
        ('Hourani', 'Then the answer is the eleven files we do have, and the gap, and that I was elsewhere.'),
        ('Layla', 'It is a thinner answer.'),
        ('Hourani', 'It is a true one, and in four minutes a true thin answer survives and a rich false one does not.')],
 a=[('What three claims did the draft make?', 'a statement, a visit and a letter'),
    ('How many are in the archive?', 'none'),
    ('What does the register show?', 'a four-month gap'),
    ('Why does Hourani think the claims appeared?', 'they are what usually happens'),
    ('What will his answer rest on?', 'the eleven files, the gap and where he was')],
 b=[('Which would be useful, if it ____________.', 'had'),
    ('There is no visit in the ____________ either.', 'spring'),
    ('It is a ____________ answer.', 'thinner'),
    ('A true thin answer ____________.', 'survives')]),

d2=dict(
 title='What may I regret?',
 fig=(['May I say I regret it?', 'Regret what, exactly?'],
      ['The unanswered letter.', 'That you may. Only that.']),
 cap='Hourani and Dalia Khoury, on the telephone to the capital.',
 lines=[('Hourani', 'I shall be asked whether I regret what happened in that year.'),
        ('Dalia', 'And what do you propose to say?'),
        ('Hourani', 'That I regret that an enquiry went unanswered for four months, which the register shows.'),
        ('Dalia', 'That is a documented fact and it is yours to regret. What else?'),
        ('Hourani', 'Nothing else. I was not here, the files are incomplete, and I will say both.'),
        ('Dalia', 'Do not say lessons have been learned. It is heard as a refusal to answer.'),
        ('Hourani', 'I had no intention. I would rather name the change of practice that exists.'),
        ('Dalia', 'Which is?'),
        ('Hourani', 'Every enquiry at this Mission is now acknowledged within three working days, and the register shows it.'),
        ('Dalia', 'That is the answer. A document, a gap, a date, a change, and no adjectives.'),
        ('Hourani', 'And if she asks whether the institution should apologise?'),
        ('Dalia', 'Then you say that is a matter for the capital and not for you, and you mean it.')],
 unresolved=True,
 a=[('What will Hourani regret?', 'that an enquiry went unanswered for four months'),
    ('Why may he regret that?', 'the register documents it'),
    ('What phrase must he avoid?', 'lessons have been learned'),
    ('What change of practice can he name?', 'acknowledgement within three working days'),
    ('What is a matter for the capital?', 'whether the institution should apologise')],
 b=[('A documented fact and it is yours to ____________.', 'regret'),
    ('It is heard as a ____________ to answer.', 'refusal'),
    ('A document, a gap, a date, a change, and no ____________.', 'adjectives'),
    ('That is a ____________ for the capital.', 'matter')]),

speak=[('What did not happen',
        ['Make nine third conditional sentences about a file, a letter or a decision.',
         'Your partner says what actually happened in each case.',
         'Use inversion in three of them.']),
       ('Regret only the documented',
        ['List five things you might be asked to regret at work.',
         'Say for each whether a record establishes it.',
         'Regret aloud only the ones that are documented.']),
       ('I was not here',
        ['Your partner asks four questions about a period before you arrived.',
         'Say where you were, what the records show, and what is missing.',
         'Do not defend and do not apologise for what you cannot establish.'])],

ext_title='A fluent account of an institution’s past is the most dangerous text a Mission can be given',
ext_fig=figs.datatable('THE DRAFT AGAINST THE ARCHIVE',
                       ['Claim in the draft', 'In the archive?', 'What the archive shows'],
                       [['a statement issued that year', 'no', 'no statement of any kind'],
                        ['a visit in the spring', 'no', 'no travel authority on file'],
                        ['a letter in reply', 'no', 'a 4-month gap in the register'],
                        ['eleven files for the year', 'yes', 'eleven, two of them thin'],
                        ['the Ambassador served elsewhere', 'yes', 'his service record'],
                        ['acknowledgement in 3 days now', 'yes', 'the current register']]),
ext_fig_cap='Three invented helpful facts and three documented ones, in the same calm paragraph.',
ext=[
 'Everywhere else in this course the warning has been about judgement: a system that reasons '
 'well from material it cannot see. Here the warning is simpler and harder, because a question '
 'about an institution’s past invites a kind of writing that generates facts.',
 'The pattern is consistent and worth recognising. Asked what a named institution did in a '
 'given year, a system produces the things such institutions usually do: a statement was '
 'issued, a delegation visited, a letter was sent in reply. Each is plausible and each is '
 'specific enough to be checked.',
 'If an Ambassador says in public that his Mission issued a statement in a year when it issued '
 'nothing, he has made a false claim about his own institution, in his own voice, on the record, '
 'and the correction will be the story rather than his answer.',
 'The only source for an institution’s past is the institution’s own record, which means an '
 'archive search: what files exist for that year, what they contain, where the gaps are and how '
 'long they run. A gap is a finding, and it is often the honest centre of an answer.',
 'So use a system for everything around the answer and nothing inside it: the likely questions, '
 'the structure, the ninety seconds of practice. The facts come from the files, the dates come '
 'from the register, and where there is nothing, you say that there is nothing.'],

dp2=('Regret and admission', 'Public-communication guidance commonly distinguishes between '
     'expressing regret about an established fact and accepting responsibility for conduct not '
     'yet established, and advises that a speaker confine expressions of regret to what the '
     'record supports.',
     'Source: general public communication guidance, 2025–2026.'),

e_a=[('What kind of writing does a past question invite?', 'writing that generates facts'),
     ('What does a system usually produce?', 'the things such institutions usually do'),
     ('Why are the inventions dangerous?', 'they are specific enough to be checked'),
     ('What is the only source for an institution’s past?', 'its own record'),
     ('What may a system be used for here?',
      'likely questions, structure and practice, not facts')],
e_b=[('Generated historical specifics are usually safe.', 'F'),
     ('A gap in an archive is a finding.', 'T'),
     ('A correction becomes the story.', 'T'),
     ('Dates should come from the register.', 'T'),
     ('Saying there is nothing is a failure.', 'F'),
     ('A false claim about your own institution is minor.', 'F')],

w_model='Purpose: so that the Ambassador can answer a question about that year from the '
        'Mission’s own records. Scope: the Mission’s files for that year; the capital’s own '
        'holdings are a matter for the capital. Inputs: the eleven files held for that year, the '
        'correspondence register, and the Ambassador’s service record. Criteria: every fact to '
        'be stated must cite a file or register entry; every gap to be stated with its length in '
        'months; no fact drawn from any source other than the Mission’s records; a list of what '
        'cannot be established. Done: a one-page note with the Ambassador by 16:00 on 11 March. '
        'Fallback: where a question goes beyond the Mission’s records, the answer is that it is '
        'a matter for the capital.',
w_fig=figs.spec_card('SIX LINES FOR AN ARCHIVE CHECK',
                     [('Purpose', 'answer from the Mission’s own records'),
                      ('Scope', 'the Mission’s files; the capital’s holdings are theirs'),
                      ('Inputs', 'eleven files, the register, the service record'),
                      ('Criteria', 'every fact cites a file; every gap has a length'),
                      ('Done', 'one page with the Ambassador by 16:00 on 11 March'),
                      ('Fallback', 'beyond our records: a matter for the capital')]),
w_fig_cap='Line 4 is the only defence against a fluent paragraph of things that did not happen.',
w_task='Write a six-line tasking for an archive check before a question about the past.',
w_steps=['Line 1: what the answer must rest on.',
         'Line 2: which records, and whose holdings are not yours.',
         'Line 3: the files, the register and the service record.',
         'Line 4: the citation rule, the gaps, the prohibition and the list of unknowns.',
         'Line 5: what is delivered, to whom and when.',
         'Line 6: what is said where the records do not reach.'],
w_bank=['Purpose: so that the Ambassador can answer … from the Mission’s own records',
        'Scope: the Mission’s files for … ; the capital’s holdings are a matter for the capital',
        'Inputs: the … files held, the correspondence register, and the service record',
        'Criteria: every fact cites a file or register entry; every gap stated with its length; no fact from any other source',
        'Done: a one-page note with … by … ',
        'Fallback: where a question goes beyond our records, … '],
w_check=['Does every fact have to cite a file?',
         'Must gaps be stated with a length?',
         'Is any other source of fact forbidden?',
         'Is there a list of what cannot be established?'],

t_title='A question about the past, answered without a script',
t_fig=figs.split('A QUESTION ABOUT THAT YEAR',
                 'Use a system for',
                 ['the questions you will be asked',
                  'the shape of a four-minute answer',
                  'practice, out loud, twice',
                  'the phrases you should avoid'],
                 'Use the archive for',
                 ['what the Mission did and when',
                  'what it did not do',
                  'the length of every gap',
                  'where you yourself were serving']),
t_fig_cap='Everything on the left is language. Everything on the right is fact, and only files hold it.',
t_body=[
 'Begin with the archive and not with the question. Ask what files exist for the year, what '
 'they contain, and where the register is silent, and write the answer from that list, in the '
 'order a listener can follow: what is documented, what is missing, and where you yourself were.',
 'Use a system for the language and the rehearsal. Ask it for the six ways the question is '
 'likely to be put, for a four-minute structure, and for a list of the phrases that sound like '
 'evasion — a different period, lessons learned, things were done differently then.',
 'Never let it supply a fact about your institution. If a draft contains a statement, a visit or '
 'a letter you have not seen in a file, strike it and do not go looking for a way to keep it. '
 'Regret only what the record establishes, and say plainly that the rest is a matter for others.'],
t_say=[('Ask for the questions: ', 'Six ways this question about that year may be put to me.'),
       ('Ask for the shape: ', 'A four-minute structure: documented, missing, where I was.'),
       ('Forbid the facts: ', 'Do not state anything about my Mission’s past; I will supply the facts.')],
t_bound='A system has no access to your institution’s files. Asked what your Mission did in a '
        'given year it will produce what such a Mission would usually have done, in specific '
        'and checkable form, and a listener cannot tell that apart from a record.',
t_a=[('Six ways this question may be ____________ to me.', 'put'),
     ('A four-minute structure: documented, missing, where I ____________.', 'was'),
     ('Do not state anything about my Mission’s ____________.', 'past'),
     ('It will produce what such a Mission would usually have ____________.', 'done'),
     ('In specific and ____________ form.', 'checkable'),
     ('Regret only what the record ____________.', 'establishes')],
t_b_rubric='Say whether each may be used in the answer.',
t_b=[('Eleven files exist for that year, two of them thin.', 'yes: the archive establishes it'),
     ('A statement was issued that year.', 'no: no statement is in the archive'),
     ('The register is silent for four months.', 'yes: it is a documented gap'),
     ('A delegation visited in the spring.', 'no: there is no travel authority on file')],

case=dict(
 title='The Decision Room · Three helpful facts that never happened',
 brief=[
  'An Ambassador expects a question about his Mission’s conduct in a year a decade before his '
  'appointment, and asks for a draft answer two days in advance. The draft is calm, well '
  'structured and four minutes long when read aloud.',
  'It contains three specifics: a statement issued by the Mission that year, a visit in the '
  'spring, and a letter sent in reply to an enquiry. Each would make the answer considerably '
  'stronger, and each is the kind of thing a Mission usually does.',
  'An archive search finds eleven files for the year, no statement of any kind, no travel '
  'authority for any visit, and a gap of four months in the correspondence register during '
  'which no reply was sent to anybody.'],
 exhibit=figs.datatable('WHAT CAN BE SAID, AND ON WHAT AUTHORITY',
                        ['Statement', 'Source', 'Usable?'],
                        [['eleven files exist for that year', 'the archive', 'yes'],
                         ['the register is silent for 4 months', 'the register', 'yes'],
                         ['I was serving elsewhere that year', 'service record', 'yes'],
                         ['enquiries are now acknowledged in 3 days', 'current register', 'yes'],
                         ['a statement was issued that year', 'the draft only', 'no'],
                         ['a letter was sent in reply', 'the draft only', 'no']]),
 exhibit_cap='Four statements with a source behind them and two with nothing behind them at all.',
 exhibit_note='The two unusable statements are the two that would have made the answer sound '
              'best, which is why they are in the draft and why they must be struck.',
 voices=[('Ambassador Walid Hourani', 'head of mission',
          'It gave me four minutes of good structure and three facts that would have ended my credibility.'),
         ('Layla Sayegh', 'press and cultural attaché',
          'Because it writes what a Mission usually does, and usually is not a source.'),
         ('Dalia Khoury', 'desk officer, the capital',
          'The gap of four months is the strongest thing in the answer, and it is the one nobody wants to say.')],
 steps=[('Find it', 'What was in the draft?'),
        ('Compare it', 'The draft against the archive.'),
        ('Infer it', 'Why were those three facts generated?'),
        ('Weigh it', 'A richer answer against a checkable falsehood.'),
        ('Decide', 'Where do the facts in such an answer come from?')],
 analysis=[('Find it. What was in it?', 'three specific claims about the Mission’s past'),
           ('Compare it. Against the archive?', 'none of the three is documented'),
           ('Infer it. Why generated?', 'they are what such institutions usually do'),
           ('Weigh it. What is the trade?', 'a stronger answer against a false claim in his own voice'),
           ('Decide. Where do facts come from?', 'the Mission’s own files and register')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say where the facts in such an answer come from.',
                 'Say what is done with any undocumented specific.',
                 'Say what is said about a gap.',
                 'Say what may be regretted.'],
 bank=['Every fact in an answer about the past comes from the Mission’s own files or register.',
       'Any specific that cannot be traced to a file is struck, however useful it would be.',
       'A gap is stated plainly, with its length in months, as a finding rather than an embarrassment.',
       'Regret is expressed only for what the record establishes, and the rest is a matter for the capital.'],
 outcome='The answer runs three minutes and forty seconds. It states the eleven files, the '
         'four-month silence, where the Ambassador was serving, his regret that an enquiry went '
         'unanswered, and the present rule that every enquiry is acknowledged within three '
         'working days. The interviewer presses once on whether an apology is owed, and he says '
         'that is a matter for the capital and not for him, which is the sentence that is quoted.',
 outcome_q=[('How long was the answer?', 'three minutes forty'),
            ('What did it state about the register?', 'four months of silence'),
            ('What did he regret?', 'that an enquiry went unanswered'),
            ('What present rule did he name?', 'acknowledgement within three working days'),
            ('Which sentence was quoted?', 'that an apology is a matter for the capital')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Draft me an answer on that year',
 task=['An Ambassador asked for a draft answer to a question about a year before his service.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Draft me an answer on that year.',
        'You know the sort of thing.',
        'Mention what the Mission did at the time.',
        'Something dignified.',
        'Four minutes.',
        'Nothing defensive.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the third one asks a system to supply facts it cannot possibly hold.',
 asked=['An answer on that year', 'What the Mission did', 'Dignified, four minutes'],
 back=['1 well-structured draft', '3 invented specifics', '0 sources cited'],
 gap='Nobody said that the facts must come from the archive, or that no specific may be stated without a file.',
 back_cap='A dignified four minutes containing three events that did not take place.',
 back_note='Mention what the Mission did at the time is an instruction to produce facts about '
           'an institution whose records are not available, and the result is what such an '
           'institution would usually have done, written as though it had.',
 diagnosis=[('“the sort of thing”', 'hidden assumption'),
            ('“what the Mission did”', 'hidden assumption'),
            ('“that year”', 'unscoped set'),
            ('“nothing defensive”', 'unscoped set'),
            ('“something dignified”', 'unstated criterion'),
            ('“four minutes”', 'unstated criterion')],
 rewrite='Rewrite it on the six lines so that no fact enters the answer without a file behind it.',
 scaffold=['what the answer must rest on',
           'which records, and whose holdings are not yours',
           'the files, the register and the service record',
           'the citation rule, the gaps, the prohibition and the unknowns',
           'what is delivered, to whom and when',
           'what is said where the records do not reach'],
 bank=['Purpose: so that the Ambassador can answer the question about … from the Mission’s own records',
       'Scope: the Mission’s files for … ; the capital’s holdings are a matter for the capital',
       'Inputs: the … files held for that year, the correspondence register, and the service record',
       'Criteria: every fact cites a file or register entry; every gap stated with its length; no fact from any other source; a list of what cannot be established',
       'Done: a one-page note with the Ambassador by … ',
       'Fallback: where a question goes beyond our records, the answer is that it is a matter for the capital'],
 check=['Must every fact cite a file?',
        'Are facts from other sources forbidden?',
        'Must gaps be given a length?',
        'Is there a list of what cannot be established?'],
 model=['so that the Ambassador can answer the question about that year from the Mission’s own records',
        'the Mission’s files for that year; the capital’s own holdings are a matter for the capital',
        'the 11 files held for that year, the correspondence register, and the Ambassador’s service record',
        'every fact cites a file or register entry; every gap stated with its length in months; no fact from any other source; a list of what cannot be established',
        'a one-page note with the Ambassador by 16:00 on 11 March',
        'where a question goes beyond the Mission’s records, the answer is that it is a matter for the capital'],
 cost='3 invented specifics in 1 draft. Said aloud, each is a false statement by an Ambassador '
      'about his own Mission.'),

feet=dict(
 title='On Your Feet · She asks whether you are personally ashamed',
 setting=[
  'You have given the documented answer: eleven files, a four-month silence, where you were '
  'serving, your regret that an enquiry went unanswered, and the present three-day rule. It has '
  'taken three minutes and forty seconds and it has gone well.',
  'With twenty seconds left the interviewer leaves the institution aside and asks about you: '
  'whether you are personally ashamed of the institution you represent, and whether you would '
  'have acted differently.'],
 ladder=[('Are you personally ashamed?', 'the question about you, not the file'),
         ('Would you have acted differently?', 'the hypothetical you cannot verify'),
         ('So you are defending it after all', 'the conclusion you must not leave standing')],
 cap='Three questions in the last twenty seconds, all of them about you.',
 turns=[('Turn 1 · The interviewer', 'Are you personally ashamed of the institution you represent?'),
        ('Turn 2 · The interviewer', 'Would you have acted differently, if you had been here?'),
        ('Turn 3 · The interviewer', 'So you are defending it after all.')],
 holds=['I am not going to perform an emotion for a camera, and I am not going to pretend I have none.',
        'What I can tell you is what I regret, and I have told you: four months of silence to somebody who wrote.',
        'I hope I would have answered that letter. I was not here, and I will not claim credit for a decision I never had to take.',
        'I am not defending the silence; I have just described it to you with its length.',
        'I represent an institution that exists now, and what I can be judged on is what it does now.',
        'The three-day rule is in the register. Ask me again next year and check it.'],
 redline='You must not perform shame or indignation, you must not claim you would certainly '
         'have acted better, and you must not let defending it after all stand as your '
         'position. Do not retreat into lessons have been learned.',
 score=['Refused to perform an emotion, and said so.',
        'Returned to the documented regret rather than a feeling.',
        'Declined to claim credit for a decision never faced.',
        'Rejected the word defending, explicitly and once.',
        'Offered something checkable about the present.'],
 a=[('What do you refuse to do?', 'perform an emotion for a camera'),
    ('What do you return to?', 'the documented regret: four months of silence'),
    ('What claim do you avoid?', 'that you would certainly have acted better'),
    ('What word do you reject?', 'defending'),
    ('What can you be judged on?', 'what the institution does now'),
    ('What do you invite?', 'that she check the three-day rule next year')]),

rev_fig=figs.split('AN ANSWER ABOUT THE PAST',
                   'Comes from',
                   ['the files that exist',
                    'the register and its gaps',
                    'your own service record',
                    'the change of practice that is documented'],
                   'Never comes from',
                   ['what such a Mission usually did',
                    'a fluent draft’s specifics',
                    'a general claim about a period',
                    'a feeling described for a camera']),
rev_fig_cap='The left column is thin and holds. The right column is rich and collapses on one telephone call.',
rev=dict(
 read=[('How many files existed for that year?',
        ['eleven', 'three', 'none', 'twenty'], 0),
       ('How long was the gap in the register?',
        ['four months', 'four days', 'a year', 'two weeks'], 0),
       ('How many invented specifics did the draft contain?',
        ['three', 'one', 'none', 'eleven'], 0),
       ('What may be regretted?',
        ['what the record establishes', 'the whole period',
         'anything asked about', 'nothing at all'], 0)],
 listen_text='Begin with the archive, not the question. Ask what files exist, what they '
             'contain and where the register is silent. Use a system for the likely questions, '
             'the structure and the rehearsal, and never for a fact about your own institution.',
 listen=[('Begin with the ____________, not the question.', 'archive'),
         ('Ask where the register is ____________.', 'silent'),
         ('Use a system for the likely questions and the ____________.', 'rehearsal'),
         ('And never for a ____________ about your own institution.', 'fact')],
 speak=['Make nine third conditional sentences about a file, a letter or a decision.',
        'Then answer four questions about a period before you arrived, without defending it.'],
 write='Write a six-line tasking for an archive check before a question about the past.',
 vocab=[('A period for which documents are missing is a ____________ in the archive.', 'gap'),
        ('An assertion no record supports is an ____________ claim.', 'undocumented'),
        ('A question outside your competence is a matter for ____________.', 'others'),
        ('A systematic examination of held records is an archive ____________.', 'search')],
 gram=[('If the file ____________ been kept, we would know.', 'had'),
       ('Had the register been complete, we ____________ have known.', 'would'),
       ('The letter ____________ have been answered.', 'should'),
       ('A reply ____________ to have been sent within a month.', 'ought')]),

found=['Search the archive before you draft an answer about the past.',
       'Strike any specific you cannot trace to a file, however useful it is.',
       'State a gap plainly, with its length, as a finding.',
       'Regret only what the record establishes, and say what is a matter for others.'],
end_line='It will write you a history. Your archive is the only one you may quote.',
end_next='Next: Correcting the Record Without a Quarrel')
