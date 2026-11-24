# -*- coding: utf-8 -*-
import figs

U = dict(
num=2,
title='A Panel and Three Minutes',
gram='the passive to place and to withhold responsibility',
ai='three minutes: cutting a position to its bones',
strap='CEFR B2 · Grammar: the passive to place and to withhold responsibility · '
      'AI: three minutes: cutting a position to its bones',
cando=['use the passive deliberately, and name the actor when it is you',
       'cut a long position to a three-minute opening',
       'build an opening that survives being interrupted',
       'say which clauses a compression removes first',
       'write a six-line tasking for a three-minute opening'],

hero=('ELEVEN PAGES BECAME FOUR HUNDRED AND TWENTY WORDS, AND ONE CLAUSE WENT WITH THEM',
      ['The cut was clean, the rhythm was better, the argument was stronger.',
       'Provided the regional framework is in place had quietly gone.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A panel of four in Rhene, three minutes each, a moderator with a stopwatch.',

warm=['What can you say in three minutes that you cannot say in thirty?',
      'What is the first thing you would cut from a long argument?',
      'Why is the passive voice useful, and when is it evasive?'],

read=[
 'A panel is three minutes, an interruption and a final word, and the three minutes are the '
 'only part you control, which is why they are prepared to the word and the other two are '
 'prepared as habits.',
 'Dr Suhair Kanaan has an eleven-page position to deliver from. Eleven pages is roughly '
 'seventy minutes of speech, so the question is not what to say but what, out of everything '
 'true and relevant, to leave out.',
 'A system cuts it to four hundred and twenty words in seconds, and the cut is good: three '
 'points instead of nine, each with one example, in an order that builds, with the strongest '
 'sentence at the end rather than buried on page six.',
 'It reads better aloud than anything she would have written at eleven at night, and it is '
 'about ten seconds short of three minutes, which is exactly right for a moderator with a '
 'stopwatch and a tendency to interrupt.',
 'One clause has gone. The position is defensible only while a condition holds — provided the '
 'regional framework is in place — and that clause is rhetorically useless, grammatically '
 'awkward and the reason the position has been approved at all.'],

dp1=('Compression and qualification', 'Studies of summarisation commonly observe that '
     'conditional and qualifying clauses are among the first elements removed when a text is '
     'shortened, since they contribute least to the main propositional content while adding '
     'substantial length.',
     'Source: general summarisation literature, 2025–2026.'),

c_a=[('What are the three parts of a panel appearance?', 'three minutes, an interruption and a final word'),
     ('How long is eleven pages of speech?', 'roughly seventy minutes'),
     ('What is the real question?', 'what to leave out'),
     ('How long was the cut version?', 'four hundred and twenty words'),
     ('How many points did it keep?', 'three, each with one example'),
     ('What clause disappeared?', 'provided the regional framework is in place')],

c_b=[('The three minutes are the part you control.', 'T'),
     ('Eleven pages can be delivered in three minutes.', 'F'),
     ('The cut version was worse aloud.', 'F'),
     ('It ran about ten seconds short.', 'T'),
     ('The removed clause was rhetorically useful.', 'F'),
     ('The condition is why the position was approved.', 'T')],

c_c=[('The timetable ____________ revised twice in March.', 'was'),
     ('The Mission ____________ the first estimate, and I signed it.', 'prepared'),
     ('It ____________ agreed in April that the review would be annual.', 'was'),
     ('We ____________ the delay, and we told you about it in May.', 'caused'),
     ('The figures ____________ published on Tuesday as promised.', 'were'),
     ('I ____________ the judgement myself, on the evidence I had.', 'made')],

c_d=[('Mistakes were made withholds ( the actor / the mistake ).', ['the actor', 'the mistake'], 0),
     ('The passive is legitimate when the actor is ( unknown or irrelevant / yourself ).',
      ['unknown or irrelevant', 'yourself'], 0),
     ('When the actor is you, the honest voice is ( active / passive ).',
      ['active', 'passive'], 0),
     ('A compression removes ( qualifying clauses first / examples first ).',
      ['qualifying clauses first', 'examples first'], 0),
     ('Three minutes should run ( slightly short / slightly long ).',
      ['slightly short', 'slightly long'], 0)],

c_e=('Legitimate passive or evasive passive? Put each in the right column.',
     [('The figures were published on Tuesday', 'legitimate'),
      ('Mistakes were made in March', 'evasive'),
      ('The decree was published at eight', 'legitimate'),
      ('It was decided not to inform you', 'evasive'),
      ('The meeting was held in Rhene', 'legitimate'),
      ('The delay was experienced by all parties', 'evasive')],
     ['legitimate', 'evasive']),

v_fig_title='THREE MINUTES AND A STOPWATCH',
v_fig=[('people', 'a panel'), ('clock', 'a three-minute limit'), ('speech', 'an opening intervention'),
       ('key', 'a rebuttal'), ('chart', 'a summing-up'), ('doc', 'a prepared opening')],
v_fig_cap='Six words for a format in which the clock is the only honest participant.',

vocab=[
 ('a panel', 'a group speaking in turn before an audience'),
 ('a moderator', 'the person who runs a panel and keeps time'),
 ('an opening intervention', 'a speaker’s first prepared contribution'),
 ('a speaking slot', 'the time allotted to one speaker'),
 ('a time signal', 'the sign given that time is nearly up'),
 ('an intervention from the floor', 'a contribution from the audience'),
 ('a co-panellist', 'another speaker on the same panel'),
 ('a rebuttal', 'a reply to an argument just made'),
 ('a summing-up', 'a closing statement of one’s case'),
 ('a three-minute limit', 'a rule confining a speaker to three minutes'),
 ('a prepared opening', 'an opening written in advance'),
 ('an unprepared reply', 'an answer made without preparation'),
 ('a point of information', 'a short factual intervention during another’s speech'),
 ('a round of questions', 'a sequence of questions put to the panel'),
 ('a stage microphone', 'a fixed microphone on a platform'),
 ('a seat at the table', 'a place among those formally taking part'),
 ('an audience question', 'a question put by somebody present'),
 ('a chair’s interruption', 'the chair cutting a speaker short'),
 ('a final word', 'the last brief statement allowed to a speaker'),
 ('an overrun', 'speech continuing beyond the allotted time')],

v_a=[('The person who keeps time on a panel is the ____________.', 'moderator'),
     ('A reply to an argument just made is a ____________.', 'rebuttal'),
     ('Speech continuing beyond the allotted time is an ____________.', 'overrun'),
     ('A short factual intervention during another’s speech is a point of ____________.', 'information'),
     ('The sign given that time is nearly up is a time ____________.', 'signal'),
     ('The last brief statement allowed is a ____________ word.', 'final'),
     ('A place among those formally taking part is a seat at the ____________.', 'table'),
     ('Another speaker on the same panel is a ____________.', 'co-panellist')],

v_b=[('A moderator is the person who runs a panel', 'and keeps time.'),
     ('An opening intervention is a speaker’s', 'first prepared contribution.'),
     ('An intervention from the floor is a contribution', 'from the audience.'),
     ('A summing-up is a closing statement', 'of one’s case.'),
     ('A three-minute limit is a rule confining a speaker', 'to three minutes.')],

g_title='Grammar: the passive to place and to withhold responsibility',
g_rule=['The passive is legitimate when the actor is unknown, irrelevant or obvious: the '
        'figures were published on Tuesday.',
        'It is evasive when the actor is you: mistakes were made, it was decided, the delay was '
        'experienced.',
        'In public speech an evasive passive is heard as an admission with the name removed, '
        'which is worse than the admission.',
        'So use the active for your own acts, and the passive only where naming an actor would '
        'add nothing true.'],
g_fig=('EVASIVE',
       ['Mistakes were made in the first estimate.',
        'It was decided not to inform the committee.',
        'The delay was experienced by all parties.',
        'The judgement was taken on the available evidence.'],
       'ACCOUNTABLE',
       ['The Mission prepared the first estimate, and it was wrong.',
        'I decided not to inform the committee, and I was wrong to.',
        'We were six weeks late, and the delay was ours.',
        'I made the judgement myself, on the evidence I had.'],
       'four sentences in which nobody did anything',
       'the same four, each with a named actor'),
g_fig_cap='The passive is a tool. Used on your own conduct in public, it is heard as a confession.',

g_a=[('The timetable ____________ revised twice in March.', 'was'),
     ('The Mission ____________ the first estimate, and I signed it.', 'prepared'),
     ('It ____________ agreed in April that the review would be annual.', 'was'),
     ('We ____________ the delay, and we told you about it in May.', 'caused'),
     ('The figures ____________ published on Tuesday as promised.', 'were'),
     ('I ____________ the judgement myself, on the evidence I had.', 'made'),
     ('The decree ____________ published at eight that morning.', 'was'),
     ('I ____________ to inform the committee, and I was wrong.', 'decided'),
     ('The meeting ____________ held in Rhene on the fourteenth.', 'was')],

g_b=[('( Mistakes were made / The Mission prepared the first estimate ) — own it.', ['Mistakes were made', 'The Mission prepared the first estimate'], 1),
     ('( I decided not to inform the committee / It was decided not to inform the committee ) — your act.',
      ['I decided not to inform the committee', 'It was decided not to inform the committee'], 0),
     ('( The figures were published on Tuesday / Somebody published the figures on Tuesday ) — actor irrelevant.',
      ['The figures were published on Tuesday', 'Somebody published the figures on Tuesday'], 0),
     ('( We were six weeks late / The delay was experienced by all parties ) — plain.',
      ['We were six weeks late', 'The delay was experienced by all parties'], 0),
     ('( I made the judgement myself / The judgement was taken ) — in public.',
      ['I made the judgement myself', 'The judgement was taken'], 0),
     ('( The decree was published at eight / They published the decree at eight ) — if you do not know who.',
      ['The decree was published at eight', 'They published the decree at eight'], 0)],

d1=dict(
 title='Four hundred and twenty words',
 fig=(['Eleven pages into three minutes.', 'And what came out?'],
      ['Six points and every condition.', 'Then put one condition back.']),
 cap='Dr Suhair Kanaan and Ambassador Walid Hourani, the night before the panel.',
 lines=[('Hourani', 'How long is the position?'),
        ('Suhair', 'Eleven pages. About seventy minutes if I read it.'),
        ('Hourani', 'And you have three.'),
        ('Suhair', 'I have four hundred and twenty words, three points, one example each, and ten seconds spare.'),
        ('Hourani', 'That is a good opening. Read me the first point.'),
        ('Suhair', 'It is clean. It is also missing the clause about the regional framework.'),
        ('Hourani', 'Which is the clause the capital insisted on.'),
        ('Suhair', 'It is awkward to say and it ruins the rhythm of the sentence.'),
        ('Hourani', 'It is also the only reason you are allowed to take the position at all.'),
        ('Suhair', 'So I put it back and lose an example.'),
        ('Hourani', 'Lose two examples if you must. An unqualified position is not a shorter position.'),
        ('Suhair', 'It is a different one. I shall put it in the first sentence, not the last.')],
 a=[('How long is the full position?', 'eleven pages, about seventy minutes'),
    ('What did the cut version contain?', 'three points with one example each'),
    ('What was missing?', 'the clause about the regional framework'),
    ('Why does it matter?', 'it is why the position was approved'),
    ('Where will she put it?', 'in the first sentence')],
 b=[('Ten seconds ____________.', 'spare'),
    ('It ruins the ____________ of the sentence.', 'rhythm'),
    ('An unqualified position is not a ____________ position.', 'shorter'),
    ('It is a ____________ one.', 'different')]),

d2=dict(
 title='The interruption at ninety seconds',
 fig=(['He will cut me off at ninety seconds.', 'Then say it in ninety.'],
      ['I cannot. Three points.', 'Then put them in the first thirty.']),
 cap='Suhair and Layla Sayegh, an hour before the panel.',
 lines=[('Layla', 'The moderator cut two speakers off last month at about ninety seconds.'),
        ('Suhair', 'My opening is three minutes with the strongest sentence at the end.'),
        ('Layla', 'Then you may never say the strongest sentence.'),
        ('Suhair', 'A rhetorical arc wants the strongest thing last. That is how the cut was built.'),
        ('Layla', 'An arc assumes you are allowed to finish. You are not.'),
        ('Suhair', 'So three separate points, each complete in thirty seconds.'),
        ('Layla', 'And the condition in the first thirty, because that is the one you cannot lose.'),
        ('Suhair', 'It will sound less elegant.'),
        ('Layla', 'It will survive. Elegance is for a text somebody reads to the end.'),
        ('Suhair', 'I shall rebuild it as three blocks tonight.'),
        ('Layla', 'And learn the first block by heart, so the first thirty seconds are not improvised.'),
        ('Suhair', 'And if he cuts me off before thirty seconds?')],
 unresolved=True,
 a=[('What has the moderator done before?', 'cut speakers off at about ninety seconds'),
    ('What was wrong with the arc?', 'it assumes you are allowed to finish'),
    ('What structure does Layla propose?', 'three separate blocks of thirty seconds'),
    ('What goes in the first thirty seconds?', 'the condition'),
    ('What must be learned by heart?', 'the first block')],
 b=[('An arc assumes you are allowed to ____________.', 'finish'),
    ('Each complete in thirty ____________.', 'seconds'),
    ('It will ____________.', 'survive'),
    ('So the first thirty seconds are not ____________.', 'improvised')]),

speak=[('Own the act',
        ['Take nine evasive passive sentences and make each one accountable.',
         'Your partner says who the actor is in your version.',
         'Keep three in the passive and justify each.']),
       ('Three minutes, three blocks',
        ['Cut a position you hold to three blocks of thirty seconds.',
         'Deliver it while your partner interrupts after ninety seconds.',
         'Say what survived and what was lost.']),
       ('Put the condition first',
        ['Take a conditional position and state it with the condition last.',
         'Then state it with the condition first.',
         'Decide which version you would use on a panel.'])],

ext_title='A compression keeps what persuades and drops what qualifies, which is the wrong way round for a government',
ext_fig=figs.datatable('ELEVEN PAGES, AND WHAT SURVIVED THE CUT',
                       ['Element of the position', 'In 11 pages', 'In 420 words'],
                       [['the three main arguments', 'pages 2–7', 'kept, one example each'],
                        ['six further arguments', 'pages 7–10', 'dropped, correctly'],
                        ['the regional framework condition', 'page 2, one clause', 'dropped'],
                        ['the review period', 'page 9', 'dropped, correctly'],
                        ['the strongest sentence', 'page 6', 'moved to the end'],
                        ['total speaking time', 'about 70 min', '2 min 50 sec']]),
ext_fig_cap='Eight good decisions and one that changes the position the speaker is authorised to take.',
ext=[
 'Cutting a long position to three minutes is a genuinely difficult editorial task and a '
 'system does it well: it identifies the three arguments that carry the most weight, keeps one '
 'example for each, drops the rest without sentiment, and produces something that reads aloud '
 'at the right speed.',
 'The cut is also better structured than most officials manage under time pressure, because it '
 'is willing to throw away six arguments that are true, and an author is not. Most three-minute '
 'openings fail by trying to contain nine points in a hundred and eighty seconds.',
 'What a compression cannot weigh is legal and political necessity. A conditional clause '
 'contributes almost nothing to persuasion and almost nothing to length, so it is removed early '
 'and quietly, and it is frequently the clause on which the whole position was authorised.',
 'The same applies to anything that sounds like a hedge: the delegation is prepared to consider, '
 'subject to the outcome of, without prejudice to. Each of those phrases was fought for by '
 'somebody, and each of them reads as weak prose to any editor, human or otherwise.',
 'So cut with a system and restore by hand. Read the long text once for conditions only, list '
 'them, and put the one that matters in the first thirty seconds, where it cannot be lost to a '
 'moderator with a stopwatch.'],

dp2=('Interruption and structure', 'Broadcast and conference practice commonly notes that '
     'speakers subject to time limits are frequently interrupted before completing a '
     'rhetorical structure, so that material placed last may never be delivered.',
     'Source: general media practice literature, 2025–2026.'),

e_a=[('What does a compression identify well?', 'the three arguments carrying most weight'),
     ('Why do officials fail at three minutes?', 'they try to keep nine points'),
     ('What can a compression not weigh?', 'legal and political necessity'),
     ('Why are conditions dropped early?', 'they add nothing to persuasion'),
     ('What do you do after cutting?', 'read the long text for conditions and restore one')],
e_b=[('A compression is reluctant to drop true arguments.', 'F'),
     ('Most three-minute openings try to say too much.', 'T'),
     ('Hedging phrases read as weak prose.', 'T'),
     ('A dropped condition is a small change.', 'F'),
     ('Material placed last may never be said.', 'T'),
     ('Conditions should go in the first thirty seconds.', 'T')],

w_model='Purpose: so that the three-minute opening states the position with its condition and '
        'survives interruption at ninety seconds. Scope: the panel of 9 April; the written '
        'position of 2 April is not changed. Inputs: the 11-page position, the moderator’s '
        'record of interruptions, and the capital’s clearance of 3 April. Criteria: 3 blocks of '
        '30 seconds, each complete on its own; the regional framework condition in the first '
        'block; no phrase removed that appears in the clearance; 420 words or fewer. Done: the '
        'text with the Ambassador by 18:00 on 8 April, and the first block learned by heart. '
        'Fallback: if the clearance is varied before the panel, the opening is recut and '
        're-cleared rather than adjusted on the platform.',
w_fig=figs.spec_card('SIX LINES FOR THREE MINUTES',
                     [('Purpose', 'state the position with its condition; survive interruption'),
                      ('Scope', 'the panel of 9 April; the written position unchanged'),
                      ('Inputs', 'the 11-page position, the interruption record, the clearance'),
                      ('Criteria', '3 blocks of 30 seconds; condition first; 420 words'),
                      ('Done', 'with the Ambassador by 18:00; first block by heart'),
                      ('Fallback', 'clearance varied: recut and re-clear')]),
w_fig_cap='Line 4’s third clause is the whole lesson: nothing in the clearance may be cut.',
w_task='Write a six-line tasking for a three-minute opening.',
w_steps=['Line 1: what the opening must state and survive.',
         'Line 2: which panel, and what is not being changed.',
         'Line 3: the long position, the interruption record and the clearance.',
         'Line 4: the structure, the condition, the clearance rule and the word count.',
         'Line 5: what is delivered, to whom, and what is memorised.',
         'Line 6: what happens if the clearance changes.'],
w_bank=['Purpose: so that the … -minute opening states … and survives interruption at … ',
        'Scope: the panel of … ; the written position of … is not changed',
        'Inputs: the … -page position, the moderator’s record of … , and the clearance of … ',
        'Criteria: … blocks of … seconds, each complete; the … condition in the first block; no phrase from the clearance removed',
        'Done: the text with … by … , and the first block learned by heart',
        'Fallback: if the clearance is varied, … '],
w_check=['Does line 4 forbid cutting anything in the clearance?',
         'Are the blocks independently complete?',
         'Is the condition placed in the first block?',
         'Does line 5 require memorisation?'],

t_title='Three minutes: cutting a position to its bones',
t_fig=figs.split('ELEVEN PAGES TO THREE MINUTES',
                 'Let it cut',
                 ['six arguments of the nine',
                  'every subordinate example',
                  'the history and the recitals',
                  'the review period and the annexes'],
                 'Restore by hand',
                 ['the condition the position rests on',
                  'without prejudice to, subject to',
                  'the figure the capital agreed',
                  'anything inside the clearance']),
t_fig_cap='Let it throw away what you are too fond of. Put back what you are not allowed to lose.',
t_body=[
 'Give it the long position and ask for three minutes as three independent blocks of thirty '
 'seconds rather than one arc, each block complete in itself, so that an interruption at ninety '
 'seconds costs you a third of the argument and not the end of it.',
 'Ask for the word count and the reading time, and aim ten seconds short of the limit. Then ask '
 'it to list, separately, every conditional or qualifying clause it removed, which is a question '
 'it answers accurately and which no editor volunteers.',
 'Read that list against your clearance. Any phrase that appears in the clearance goes back in, '
 'even if it is ugly, and the one the position actually rests on goes into the first block. Then '
 'learn the first block by heart, because the first thirty seconds are the only ones nobody can '
 'take from you.'],
t_say=[('Ask for blocks: ', 'Three independent blocks of thirty seconds, not one arc.'),
       ('Ask for the cuts: ', 'List every conditional or qualifying clause you removed.'),
       ('Ask yourself: ', 'Which of those appears in the capital’s clearance?')],
t_bound='A compression weighs persuasive force and length. It has no way of knowing which '
        'clause a legal adviser insisted on, which figure was agreed in a meeting last month, '
        'or which phrase the clearance depends on, because none of that is in the text it is '
        'cutting.',
t_a=[('Three independent ____________ of thirty seconds.', 'blocks'),
     ('Not one ____________.', 'arc'),
     ('List every conditional or ____________ clause you removed.', 'qualifying'),
     ('Which of those appears in the capital’s ____________?', 'clearance'),
     ('Which clause a legal ____________ insisted on.', 'adviser'),
     ('Learn the first block by ____________.', 'heart')],
t_b_rubric='Say whether each should be cut from a three-minute opening.',
t_b=[('Six of the nine supporting arguments.', 'cut: three is all three minutes holds'),
     ('The condition the position rests on.', 'keep: the position is not approved without it'),
     ('The history in the first two pages.', 'cut: it persuades nobody in a panel'),
     ('The figure the capital agreed.', 'keep: it is inside the clearance')],

case=dict(
 title='The Decision Room · The clause that was not worth its words',
 brief=[
  'An eleven-page position must be delivered as a three-minute opening on a panel of four, '
  'moderated by somebody who has interrupted two speakers at about ninety seconds in recent '
  'months.',
  'A compression produces four hundred and twenty words in seconds: three arguments, one '
  'example each, six further arguments dropped, the strongest sentence moved to the end, and a '
  'reading time of two minutes fifty.',
  'One clause has been removed: provided the regional framework is in place. It is eight words, '
  'it adds nothing to the persuasive force of the opening, and it is the condition on which the '
  'capital cleared the position four days earlier.'],
 exhibit=figs.datatable('WHAT A COMPRESSION KEEPS',
                        ['Kind of material', 'Persuasive value', 'Kept?'],
                        [['a main argument', 'high', 'yes'],
                         ['an example', 'high', 'one each'],
                         ['historical recital', 'low', 'no, correctly'],
                         ['a conditional clause', 'very low', 'no, wrongly'],
                         ['a hedging phrase', 'negative', 'no, wrongly'],
                         ['the closing sentence', 'highest', 'yes, moved to the end']]),
 exhibit_cap='The ranking is by persuasive value, which is exactly the wrong axis for a cleared position.',
 exhibit_note='Nothing in the eleven pages marks the clause as the condition of the '
              'clearance. The marking exists in a separate document, which was not given to '
              'the system and would not have been understood if it had been.',
 voices=[('Dr Suhair Kanaan', 'deputy head of mission',
          'It threw away six arguments I was fond of, which I could not have done, and it was right.'),
         ('Ambassador Walid Hourani', 'head of mission',
          'And eight words the capital put in, without which you are speaking on your own authority.'),
         ('Layla Sayegh', 'press and cultural attaché',
          'And it built an arc, in a format where you are cut off before the arc arrives.')],
 steps=[('Find it', 'What did the compression do well?'),
        ('Compare it', 'Persuasive value against the clearance.'),
        ('Infer it', 'Why is a condition cut early?'),
        ('Weigh it', 'Six arguments well dropped against eight words wrongly dropped.'),
        ('Decide', 'How is a three-minute opening built?')],
 analysis=[('Find it. What was done well?', 'three arguments kept, six dropped, right length'),
           ('Compare it. Which axis was used?', 'persuasive value, not the clearance'),
           ('Infer it. Why cut the condition?', 'it adds nothing to persuasion'),
           ('Weigh it. What is the balance?', 'a better opening with an unauthorised position'),
           ('Decide. How is it built?', 'cut by machine, restore conditions by hand, in blocks')],
 decision='Decide the method, in four lines.',
 decision_steps=['Say how the long position is cut.',
                 'Say what structure the opening uses.',
                 'Say what is checked against the clearance.',
                 'Say what is memorised.'],
 bank=['The long position is cut to three minutes and the list of removed qualifying clauses is requested.',
       'The opening is built as three independent blocks of thirty seconds, not as one arc.',
       'Every removed clause is checked against the clearance, and anything inside it is restored.',
       'The first block, containing the condition, is learned by heart.'],
 outcome='Suhair rebuilds the opening as three blocks, with the condition in the first '
         'sentence, and loses two examples to make room. The moderator interrupts at one minute '
         'fifty, after the second block. Both delivered blocks are complete, the condition is on '
         'the record, and the third argument goes into her final word instead, which is thirty '
         'seconds she had not expected to use well.',
 outcome_q=[('How was the opening rebuilt?', 'as three independent blocks'),
            ('What was lost to make room?', 'two examples'),
            ('When was she interrupted?', 'at one minute fifty'),
            ('What was on the record by then?', 'two complete blocks and the condition'),
            ('Where did the third argument go?', 'into her final word')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Cut this down for the panel',
 task=['A deputy head of mission asked for an eleven-page position to be cut for a panel.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Cut this down for the panel.',
        'Three minutes, I think.',
        'Keep the strong parts.',
        'Lose anything legalistic.',
        'Make it flow.',
        'Tonight if possible.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and line 4 instructs the removal of the clearance itself.',
 asked=['Three minutes', 'The strong parts', 'Nothing legalistic'],
 back=['420 words, well cut', '1 condition removed', '3 hedging phrases removed'],
 gap='Nobody said that the condition is the clearance, or that the opening must survive interruption.',
 back_cap='A better opening for a position the speaker is no longer authorised to take.',
 back_note='Lose anything legalistic is a reasonable instruction for a speech and a '
           'catastrophic one for a cleared position, because the legalistic phrases are '
           'precisely the ones another government argued over.',
 diagnosis=[('“the strong parts”', 'unstated criterion'),
            ('“make it flow”', 'unstated criterion'),
            ('“anything legalistic”', 'hidden assumption'),
            ('“three minutes, I think”', 'hidden assumption'),
            ('“cut this down”', 'missing condition'),
            ('“tonight if possible”', 'missing condition')],
 rewrite='Rewrite it on the six lines so that the clearance survives the cut.',
 scaffold=['what the opening must state and survive',
           'which panel, and what is not changed',
           'the position, the interruption record and the clearance',
           'the structure, the condition, the clearance rule and the length',
           'what is delivered and what is memorised',
           'what happens if the clearance changes'],
 bank=['Purpose: so that the opening states the position with its condition and survives interruption at … ',
       'Scope: the panel of … ; the written position is not changed',
       'Inputs: the … -page position, the record of interruptions, and the clearance of … ',
       'Criteria: … blocks of … seconds, each complete; the condition in the first block; nothing in the clearance removed; … words or fewer',
       'Done: the text with … by … , first block by heart',
       'Fallback: if the clearance is varied, the opening is recut and re-cleared'],
 check=['Does it name the clearance as a constraint?',
        'Are the blocks independently complete?',
        'Is the condition placed first?',
        'Is a word count given?'],
 model=['so that the three-minute opening states the position with its condition and survives interruption at 90 seconds',
        'the panel of 9 April; the written position of 2 April is not changed',
        'the 11-page position, the moderator’s record of interruptions, and the capital’s clearance of 3 April',
        '3 blocks of 30 seconds, each complete; the regional framework condition in the first block; nothing in the clearance removed; 420 words or fewer',
        'the text with the Ambassador by 18:00 on 8 April, first block learned by heart',
        'if the clearance is varied before the panel, the opening is recut and re-cleared, not adjusted on the platform'],
 cost='8 words removed from 420. Without them the speaker holds no clearance for the position '
      'at all.'),

feet=dict(
 title='On Your Feet · The moderator cuts you off and gives the floor to a co-panellist',
 setting=[
  'You are ninety seconds into a three-minute opening, one block in, with the condition '
  'stated. The moderator interrupts, says time is short, and turns to a co-panellist who '
  'immediately characterises your position as unconditional support for a four-month timetable.',
  'You now have, if you are quick, about twenty seconds of a point of information, and after '
  'that nothing until the final word at the end of the session.'],
 ladder=[('I must stop you there', 'the interruption you must not argue with'),
         ('Your government backs four months outright', 'the characterisation already in the room'),
         ('We will come back to you at the end', 'the deferral you must use, not resist')],
 cap='Three turns on a platform, with twenty seconds of floor available.',
 turns=[('Turn 1 · The moderator', 'I must stop you there; we are short of time.'),
        ('Turn 2 · Co-panellist', 'So your government supports a four-month timetable outright.'),
        ('Turn 3 · The moderator', 'We will come back to you at the end for a final word.')],
 holds=['Of course; I am in your hands on time.',
        'On a point of information: our support is conditional, and I stated the condition.',
        'The condition is the regional framework, and without it the position does not stand.',
        'I am happy to leave the rest to the final word rather than take time now.',
        'I would only ask that the record show the condition, since it was in my first sentence.',
        'Thank you; I shall use the final word on the two arguments I did not reach.'],
 redline='You must not argue with the moderator about time, you must not let the word '
         'outright stand unanswered until the end of the session, and you must not use your '
         'twenty seconds on anything but the condition. Do not deliver the lost third of your '
         'opening now.',
 score=['Accepted the interruption without friction.',
        'Used the point of information for the condition only.',
        'Stated the condition in one sentence, concretely.',
        'Declined to take more time than offered.',
        'Reserved the remaining arguments for the final word.'],
 a=[('How do you respond to the interruption?', 'accept it without argument'),
    ('What do you use the twenty seconds for?', 'the condition, and nothing else'),
    ('What word must not stand?', 'outright'),
    ('What do you ask of the record?', 'that it show the condition'),
    ('What do you do with the final word?', 'the two arguments you did not reach'),
    ('What must you not do now?', 'deliver the rest of the opening')]),

rev_fig=figs.split('A THREE-MINUTE OPENING',
                   'Built as',
                   ['three blocks of thirty seconds',
                    'each one complete alone',
                    'the condition in block one',
                    'ten seconds short of the limit'],
                   'Not built as',
                   ['one rhetorical arc',
                    'nine points compressed',
                    'the best sentence at the end',
                    'anything you cannot say from memory']),
rev_fig_cap='Build for the interruption you will get, not the three minutes you were promised.',
rev=dict(
 read=[('How long is eleven pages spoken?',
        ['about seventy minutes', 'three minutes', 'ten minutes', 'two hours'], 0),
       ('How many words was the cut version?',
        ['four hundred and twenty', 'eleven hundred', 'two hundred', 'a thousand'], 0),
       ('What clause was removed?',
        ['the regional framework condition', 'the review period',
         'the strongest sentence', 'the opening recital'], 0),
       ('Where should a condition be placed?',
        ['in the first thirty seconds', 'at the end',
         'in the final word', 'in the written text only'], 0)],
 listen_text='Ask for three independent blocks of thirty seconds rather than one arc, and ask '
             'for a list of every conditional clause removed. Check that list against the '
             'clearance and restore anything inside it.',
 listen=[('Ask for three independent ____________ of thirty seconds.', 'blocks'),
         ('Rather than one ____________.', 'arc'),
         ('A list of every ____________ clause removed.', 'conditional'),
         ('And restore anything inside the ____________.', 'clearance')],
 speak=['Make nine evasive passive sentences accountable, naming the actor in each.',
        'Then deliver a three-block opening while your partner interrupts at ninety seconds.'],
 write='Write a six-line tasking for a three-minute opening.',
 vocab=[('The person who keeps time on a panel is the ____________.', 'moderator'),
        ('A reply to an argument just made is a ____________.', 'rebuttal'),
        ('Speech beyond the allotted time is an ____________.', 'overrun'),
        ('The last brief statement allowed is a ____________ word.', 'final')],
 gram=[('The consular section ____________ the revised estimate last week.', 'prepared'),
       ('The figures ____________ published on Tuesday.', 'were'),
       ('I ____________ to inform the committee, and I was wrong.', 'decided'),
       ('The meeting ____________ held in Rhene.', 'was')]),

found=['Cut your next long position to three blocks of thirty seconds each.',
       'Ask for the list of qualifying clauses that were removed, and read it.',
       'Put the condition your position rests on in your first sentence.',
       'Use the active voice for anything you yourself did.'],
end_line='It will cut what you are too fond of. Only you know what you may not lose.',
end_next='Next: The Doorstep Question')
