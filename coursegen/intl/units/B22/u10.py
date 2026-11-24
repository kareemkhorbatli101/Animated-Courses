# -*- coding: utf-8 -*-
import figs

U = dict(
num=10,
title='The End of a Posting',
gram='nominalisation and summary in a final report',
ai='what a machine cannot do for a person who represents',
strap='CEFR B2 · Grammar: nominalisation and summary in a final report · '
      'AI: what a machine cannot do for a person who represents',
cando=['use nominalisation to summarise without losing the agent',
       'write a final report on a posting',
       'state plainly what a system cannot do for a representative',
       'record a judgement that turned out to be wrong',
       'write a six-line tasking for a final report'],

hero=('FOUR YEARS SUMMARISED IN NINE PAGES, AND THE DECISIONS WERE ALL HERS',
      ['Every document in the posting had been drafted with help.',
       'Every signature, every judgement and every apology was her own.'],
      [(1120, 'blue', 'long'), (240, 'grey', 'short'), (260, 'teal', 'short')]),
hero_cap='A final report on a four-year posting, written in the last week of it.',

warm=['What have you done in your work that nothing could have done for you?',
      'What would you want recorded about a decision that went wrong?',
      'What does a representative actually represent?'],

read=[
 'The final report runs to nine pages and covers four years. The drafting took an afternoon; '
 'the judgements in it took four years and belong to one person.',
 'Almost every document of the posting was prepared with assistance: the notes, the records, '
 'the briefings, the statements, the speeches, the glossaries and the budget tables. The '
 'assistance was valuable and the report says so.',
 'What no assistance touched was the decision to go to a hospital at two in the morning, the '
 'decision not to issue a rebuttal, the judgement that a partner could be trusted and the '
 'apology offered in a room with no record kept.',
 'The report records one judgement that was wrong. A recommendation made in the second year '
 'rested on an assessment of a minister’s standing that proved mistaken, and the paragraph '
 'says so, in the first person, with the reasoning as it was at the time.',
 'Representation is the one function that cannot be delegated to anything. A signature is a '
 'person; a trust is a person; an apology is a person; and the whole of this book has been '
 'about getting everything else out of their way.'],

dp1=('Final reports', 'Practice commonly requires an end-of-posting report to state '
     'assessments in the first person, to record recommendations that proved mistaken with the '
     'reasoning available at the time, and to distinguish institutional achievement from '
     'personal judgement.',
     'Source: general diplomatic practice literature, 2025–2026.'),

c_a=[('How long is the report?', 'nine pages'),
     ('How long did the drafting take?', 'an afternoon'),
     ('What was prepared with assistance?', 'almost every document of the posting'),
     ('What was not?', 'the decisions, the judgements and the apology'),
     ('What does the report record as wrong?', 'an assessment of a minister’s standing'),
     ('What cannot be delegated?', 'representation')],

c_b=[('The judgements took an afternoon.', 'F'),
     ('The assistance was valuable.', 'T'),
     ('A rebuttal was issued.', 'F'),
     ('The mistaken judgement is recorded.', 'T'),
     ('A signature can be delegated.', 'F'),
     ('The report is in the first person where it assesses.', 'T')],

c_c=[('The ____________ of the programme took three years.', 'establishment'),
     ('Our ____________ of the minister’s standing proved mistaken.', 'assessment'),
     ('The ____________ of the agreement was completed in March.', 'signature'),
     ('A ____________ of the register has been opened.', 'record'),
     ('The ____________ of local staff has been the Mission’s principal asset.', 'loyalty'),
     ('My ____________ is that the project will survive a change of government.', 'judgement')],

c_d=[('A nominalisation turns a verb into ( a noun / an adjective ).', ['a noun', 'an adjective'], 0),
     ('Nominalisation is useful in a summary because it ( compresses / decorates ).',
      ['compresses', 'decorates'], 0),
     ('Its danger is that it ( hides the agent / lengthens the text ).',
      ['hides the agent', 'lengthens the text'], 0),
     ('An assessment in a final report should be ( in the first person / impersonal ).',
      ['in the first person', 'impersonal'], 0),
     ('A mistaken recommendation should be ( recorded with its reasoning / omitted ).',
      ['recorded with its reasoning', 'omitted'], 0)],

c_e=('Who did it? Put each nominalisation in the right column.',
     [('the establishment of the programme by the Mission', 'agent named'),
      ('the establishment of the programme', 'agent hidden'),
      ('my assessment of his standing', 'agent named'),
      ('an assessment of his standing', 'agent hidden'),
      ('the apology offered by me', 'agent named'),
      ('an apology was offered', 'agent hidden')],
     ['agent named', 'agent hidden']),

v_fig_title='A POSTING IN SIX WORDS',
v_fig=[('doc', 'a final report of a posting'), ('key', 'a judgement that was wrong'), ('people', 'a trust built over time'),
       ('clock', 'a decision taken alone'), ('chart', 'a legacy of a posting'), ('speech', 'a conversation nobody recorded')],
v_fig_cap='Six words for four years, and for the part of them that was nobody else’s work.',

vocab=[
 ('a final report of a posting', 'the account written at the end'),
 ('a valedictory', 'a farewell despatch'),
 ('a summary of four years', 'a short account of a long period'),
 ('a nominalisation in a report', 'a verb written as a noun'),
 ('a judgement of a person', 'an assessment of an individual'),
 ('a trust built over time', 'confidence earned slowly'),
 ('a presence in a room', 'being there in person'),
 ('a decision taken alone', 'a choice nobody shared'),
 ('an instinct of a representative', 'a trained sense of what to do'),
 ('a responsibility that cannot be delegated', 'a duty only you can discharge'),
 ('a signature on a document', 'a personal commitment in writing'),
 ('a conversation nobody recorded', 'an exchange with no written trace'),
 ('a name remembered', 'somebody recalled by name'),
 ('a courtesy returned', 'a kindness answered in kind'),
 ('a loyalty of local staff', 'the commitment of locally engaged colleagues'),
 ('a thing learned too late', 'knowledge that arrived after it was needed'),
 ('a first question of a successor', 'what the next officer asks first'),
 ('a legacy of a posting', 'what remains after you leave'),
 ('a record for the archive', 'what is kept permanently'),
 ('a judgement that was wrong', 'an assessment that proved mistaken')],

v_a=[('A farewell despatch is a ____________.', 'valedictory'),
     ('A verb written as a noun is a ____________ in a report.', 'nominalisation'),
     ('Confidence earned slowly is a ____________ built over time.', 'trust'),
     ('A duty only you can discharge is a responsibility that cannot be ____________.', 'delegated'),
     ('The commitment of locally engaged colleagues is a ____________ of local staff.', 'loyalty'),
     ('Knowledge that arrived after it was needed is a thing learned too ____________.', 'late'),
     ('What remains after you leave is a ____________ of a posting.', 'legacy'),
     ('An assessment that proved mistaken is a judgement that was ____________.', 'wrong')],

v_b=[('A final report of a posting is the account', 'written at the end.'),
     ('A decision taken alone is a choice', 'nobody shared.'),
     ('A conversation nobody recorded is an exchange', 'with no written trace.'),
     ('A courtesy returned is a kindness', 'answered in kind.'),
     ('A record for the archive is what is kept', 'permanently.')],

g_title='Grammar: nominalisation and summary in a final report',
g_rule=['A nominalisation turns a verb into a noun: we established the programme becomes the '
        'establishment of the programme. It compresses, which is why summaries use it.',
        'Its danger is that the agent disappears. The establishment of the programme does not '
        'say who established it, and in a final report that information is the point.',
        'So nominalise for compression and restore the agent: the establishment of the '
        'programme by the Mission; my assessment of his standing; the apology offered by me.',
        'Where a judgement is yours, write it in the first person. A final report that says an '
        'assessment was made has concealed the only person who can be held to it.'],
g_fig=('LOOSE',
       ['The programme was established.',
        'An assessment was made of his standing.',
        'An apology was offered.',
        'A decision was taken not to respond.'],
       'PRECISE',
       ['The establishment of the programme by the Mission took three years.',
        'My assessment of his standing proved mistaken.',
        'I offered an apology in person on 4 March.',
        'I decided not to respond, for the reasons in paragraph 9.'],

       'four nominalisations with the agent removed',
       'the same four with the agent restored and the person named'),
g_fig_cap='Nominalise to compress. Restore the agent, always, because a report is about who did what.',

g_a=[('The ____________ of the programme took three years.', 'establishment'),
     ('Our ____________ of the minister’s standing proved mistaken.', 'assessment'),
     ('The ____________ of the agreement was completed in March.', 'signature'),
     ('A ____________ of the register has been opened.', 'record'),
     ('The ____________ of local staff has been the Mission’s principal asset.', 'loyalty'),
     ('My ____________ is that the project will survive a change of government.', 'judgement'),
     ('The ____________ of the public section took eleven months.', 'refurbishment'),
     ('His ____________ of the invitation was courteous and immediate.', 'acceptance'),
     ('The ____________ of the glossary ended an eighteen-month argument.', 'adoption')],

g_b=[('( The programme was established / The establishment of the programme by the Mission ) — agent restored.', ['The programme was established', 'The establishment of the programme by the Mission'], 1),
     ('( My assessment of his standing proved mistaken / An assessment was made of his standing ) — first person.',
      ['My assessment of his standing proved mistaken',
       'An assessment was made of his standing'], 0),
     ('( I offered an apology in person on 4 March / An apology was offered ) — who and when.',
      ['I offered an apology in person on 4 March', 'An apology was offered'], 0),
     ('( I decided not to respond, for the reasons in paragraph 9 / A decision was taken not to respond ) — accountable.',
      ['I decided not to respond, for the reasons in paragraph 9',
       'A decision was taken not to respond'], 0),
     ('( The adoption of the glossary ended the argument / There was an ending of the argument by adoption ) — natural.',
      ['The adoption of the glossary ended the argument',
       'There was an ending of the argument by adoption'], 0),
     ('( His acceptance of the invitation was immediate / The invitation was accepted ) — who.',
      ['His acceptance of the invitation was immediate', 'The invitation was accepted'], 0)],

d1=dict(
 title='The paragraph about being wrong',
 fig=(['Nine pages for four years.', 'And one paragraph that matters.'],
      ['Which one?', 'The one where I was wrong.']),
 cap='Ambassador Clara Mendel and Elena Duarte, in the last week.',
 lines=[('Elena', 'Nine pages for four years. What was hardest to write?'),
        ('Mendel', 'Paragraph nine. My assessment of the minister’s standing in the second year.'),
        ('Elena', 'Which was wrong.'),
        ('Mendel', 'Which was wrong, and a recommendation rested on it.'),
        ('Elena', 'Most reports omit that paragraph.'),
        ('Mendel', 'Most reports are therefore useless to the next person who has to make the same judgement.'),
        ('Elena', 'How have you written it?'),
        ('Mendel', 'In the first person, with the reasoning I actually had in the second year and not the reasoning I have now.'),
        ('Elena', 'That is the difficult part.'),
        ('Mendel', 'It is the only honest part. Hindsight makes any judgement look foolish.'),
        ('Elena', 'And the rest of the nine pages?'),
        ('Mendel', 'Drafted in an afternoon, with help, and all the better for it.')],
 a=[('What was hardest to write?', 'paragraph nine'),
    ('What did it concern?', 'her assessment of the minister’s standing'),
    ('Why do most reports omit such a paragraph?', 'because it records being wrong'),
    ('How is it written?', 'in the first person, with the reasoning of the time'),
    ('Why not use present reasoning?', 'hindsight makes any judgement look foolish')],
 b=[('A ____________ rested on it.', 'recommendation'),
    ('Useless to the next ____________.', 'person'),
    ('The reasoning I actually ____________.', 'had'),
    ('All the better for ____________.', 'it')]),

d2=dict(
 title='What nobody could have done for her',
 fig=(['Everything was drafted with help.', 'And nothing was decided with it.'],
      ['Is that the lesson?', 'It is the whole of it.']),
 cap='Mendel and Amara Sow, on the last afternoon.',
 lines=[('Amara', 'In four years, what did none of it help with?'),
        ('Mendel', 'The hospital at two in the morning. I had to be in the room.'),
        ('Amara', 'And the decision not to issue the rebuttal.'),
        ('Mendel', 'Which was mine, and which I could not have justified to anybody at the time.'),
        ('Amara', 'And the judgement that the association could be trusted with the programme.'),
        ('Mendel', 'Four years of meetings, and no document in the world could have told me.'),
        ('Amara', 'And the apology.'),
        ('Mendel', 'In a room, with no record, to a man who had been insulted by an error of ours.'),
        ('Amara', 'None of which appears in nine pages.'),
        ('Mendel', 'Three of them do now, in a paragraph about what cannot be delegated.'),
        ('Amara', 'And the fourth?'),
        ('Mendel', 'The fourth I shall tell your next Ambassador in a room, as I was told four things by mine. And what happens when nobody is left who was in that room?')],
 unresolved=True,
 a=[('What could nothing help with?', 'the hospital at two in the morning'),
    ('What was the hardest decision?', 'not to issue the rebuttal'),
    ('What took four years to judge?', 'whether the association could be trusted'),
    ('Where was the apology offered?', 'in a room, with no record'),
    ('How many of these are in the report?', 'three of the four')],
 b=[('I had to be in the ____________.', 'room'),
    ('Which was ____________.', 'mine'),
    ('No document in the world could have ____________ me.', 'told'),
    ('What cannot be ____________.', 'delegated')]),

speak=[('Restore the agent',
        ['Give your partner eight nominalised sentences.',
         'They restore the agent in each.',
         'Decide together which ones needed it most.']),
       ('Four years in nine pages',
        ['Summarise a long period of your own work in six sentences.',
         'Your partner asks who did each thing.',
         'Rewrite any sentence that hides a person.']),
       ('What nothing could do',
        ['Name three things in your work that no system could do for you.',
         'Your partner tests each one.',
         'Say what they have in common.'])],

ext_title='Everything can be drafted, and nothing can be represented, by anything but a person',
ext_fig=figs.datatable('FOUR YEARS, DIVIDED',
                       ['Done with assistance', 'Done by a person alone'],
                       [['notes and records', 'a signature'],
                        ['briefings and summaries', 'a judgement about a person'],
                        ['statements and speeches', 'an apology in a room'],
                        ['glossaries and tables', 'a decision at two in the morning'],
                        ['translations and checks', 'a trust built over four years'],
                        ['nine pages in an afternoon', 'the judgements of four years']]),
ext_fig_cap='The left column is work. The right column is why a person was sent.',
ext=[
 'A final report on a posting can be drafted in an afternoon from four years of files, and the '
 'draft will be well ordered, properly summarised and accurate. There is no reason to refuse '
 'that help, and this book has spent six volumes explaining how to ask for it well.',
 'The division it leaves behind is the subject of this last unit. Almost everything a mission '
 'produces can be prepared with assistance: the record, the summary, the comparison, the '
 'checklist, the glossary, the translation, the first draft of nearly every document that '
 'leaves the building.',
 'What cannot be is representation itself. A signature is a person accepting consequences. A '
 'judgement about whether somebody can be trusted is four years of meetings and no document. An '
 'apology is a person in a room, and its value lies precisely in the fact that it cost '
 'something to give.',
 'The practical consequence runs through every unit of this series. Specify the work so '
 'precisely that the help is genuinely useful, and keep the irreducible part — the decision, '
 'the judgement, the presence, the apology — unmistakably your own.',
 'A final report should also contain the paragraph that most reports omit: a recommendation '
 'that proved mistaken, in the first person, with the reasoning as it stood at the time and not '
 'as it looks now. Hindsight makes every judgement look foolish, and a successor facing the same '
 'decision needs the reasoning rather than the verdict.',
 'And the last thing is not written at all. Four things were told to this Ambassador in a room '
 'by her predecessor; she will tell four to her successor in another room; and the only '
 'continuity that matters is the one that passes between two people who are both present.'],

dp2=('Recording error', 'Practice commonly regards the recording of a mistaken assessment, '
     'with the information and reasoning available at the time, as of greater value to '
     'successors than a report of successes alone.',
     'Source: general diplomatic practice literature, 2025–2026.'),

e_a=[('How long does a final report take to draft?', 'an afternoon'),
     ('What can be prepared with assistance?', 'almost everything a mission produces'),
     ('What cannot?', 'representation itself'),
     ('What is a signature?', 'a person accepting consequences'),
     ('What paragraph do most reports omit?', 'a recommendation that proved mistaken')],
e_b=[('Help with drafting should be refused.', 'F'),
     ('A judgement about trust can be documented.', 'F'),
     ('An apology costs something to give.', 'T'),
     ('Hindsight flatters old judgements.', 'F'),
     ('A successor needs the reasoning, not the verdict.', 'T'),
     ('Some continuity passes only between people present.', 'T')],

w_model='Purpose: so that my successor and the archive can see what this Mission achieved, what '
        'I judged, and where I was wrong. Scope: the four years of my posting; the handover note '
        'and the administrative inventory are separate documents. Inputs: the political files, '
        'the programme records, my diary and the register of undertakings. Criteria: nine pages '
        'at most; nominalisation used for compression but the agent restored in every sentence; '
        'every assessment in the first person; one paragraph on a recommendation that proved '
        'mistaken, giving the reasoning available at the time and not with hindsight; a closing '
        'paragraph on what could not be delegated. Done: with the capital and the archive before '
        'I leave. Fallback: where I cannot distinguish the institution’s achievement from my own '
        'judgement, the sentence is written as judgement.',
w_fig=figs.spec_card('SIX LINES FOR A FINAL REPORT',
                     [('Purpose', 'what was achieved, what I judged, where I was wrong'),
                      ('Scope', 'the four years; handover and inventory separate'),
                      ('Inputs', 'files, programme records, diary, register'),
                      ('Criteria', 'nine pages; agents restored; first person; one error paragraph'),
                      ('Done', 'before I leave'),
                      ('Fallback', 'cannot separate? write it as judgement')]),
w_fig_cap='The error paragraph is the one nobody requires and every successor needs.',
w_task='Write a six-line tasking for a final report on a posting.',
w_steps=['Line 1: say what the reader must be able to see.',
         'Line 2: say which period, and what is separate.',
         'Line 3: say what you are giving it.',
         'Line 4: say the length, the agents, the first person and the error paragraph.',
         'Line 5: say when it must be filed.',
         'Line 6: say what happens where achievement and judgement cannot be separated.'],
w_bank=['Purpose: so that my successor and the archive can see what this Mission achieved, what I judged, and where I was wrong',
        'Scope: the … years of my posting; the handover note and the inventory are separate',
        'Inputs: the political files, the programme records, my diary and the register of undertakings',
        'Criteria: … pages at most; nominalisation for compression with the agent restored in every sentence; every assessment in the first person; one paragraph on a recommendation that proved mistaken, with the reasoning available at the time; a closing paragraph on what could not be delegated',
        'Done: with the capital and the archive before I leave. Fallback: where achievement and judgement cannot be distinguished, the sentence is written as judgement'],
w_check=['Is the agent restored in every nominalisation?',
         'Is every assessment in the first person?',
         'Is there a paragraph on a mistaken recommendation?',
         'Is the reasoning of the time given rather than hindsight?'],

t_title='What a machine cannot do for a person who represents',
t_fig=figs.split('A POSTING',
                 'Ask for help with',
                 ['the record and the summary',
                  'the comparison and the checklist',
                  'the glossary and the translation',
                  'the first draft of anything'],
                 'Keep as yours',
                 ['the signature',
                  'the judgement of a person',
                  'the presence in a room',
                  'the apology']),
t_fig_cap='Six books to make the left column excellent, so that the right column has your whole attention.',
t_body=[
 'Ask for the draft and ask for it precisely: nine pages, nominalisation for compression with '
 'the agent restored in every sentence, every assessment in the first person, and the closing '
 'paragraph on what could not be delegated.',
 'Require the paragraph that no instruction ever asks for: a recommendation of yours that '
 'proved mistaken, with the reasoning you actually had at the time. A successor facing the same '
 'decision needs your reasoning; your verdict is worth nothing to her.',
 'And know what the help cannot reach. A signature accepts consequences; a judgement about '
 'trust is four years and no document; a presence is a person in a room at two in the morning; '
 'and an apology is valuable precisely because it cost somebody something. Everything else in '
 'this series exists to clear the way to those four things.'],
t_say=[('Ask for the draft: ', 'Nine pages, agents restored, assessments in the first person.'),
       ('Require the error: ', 'One paragraph on a recommendation that proved mistaken.'),
       ('Keep what is yours: ', 'The signature, the judgement, the presence and the apology.')],
t_bound='It can draft four years in an afternoon and cannot sign anything, cannot be in a room '
        'at two in the morning, cannot be trusted by a minister, and cannot apologise, because '
        'an apology that costs nothing is not one.',
t_a=[('____________ pages, agents restored.', 'Nine'),
     ('Assessments in the ____________ person.', 'first'),
     ('One paragraph on a recommendation that proved ____________.', 'mistaken'),
     ('With the reasoning you actually ____________.', 'had'),
     ('A ____________ accepts consequences.', 'signature'),
     ('An apology that costs ____________ is not one.', 'nothing')],
t_b_rubric='Say whether each can be delegated.',
t_b=[('The first draft of a nine-page report.', 'yes, with a precise instruction'),
     ('The judgement that a partner can be trusted.', 'no: four years and no document'),
     ('A translation checked against the original.', 'yes, with a local reader'),
     ('An apology to somebody your Mission has wronged.', 'no: it must cost something')],

case=dict(
 title='The Decision Room · Nine pages, and the paragraph most people leave out',
 brief=[
  'An ambassador completing four years writes a final report of nine pages. The draft is '
  'prepared in an afternoon from the files and is accurate, well ordered and properly '
  'summarised.',
  'In its first version every achievement appears as a nominalisation without an agent — the '
  'establishment of the programme, the adoption of the glossary, the refurbishment of the '
  'public section — and every assessment is impersonal.',
  'The posting included one recommendation that proved mistaken: an assessment of a minister’s '
  'standing in the second year, on which a recommendation to the capital rested. The '
  'conventional practice is to omit it.'],
 exhibit=figs.datatable('TWO VERSIONS OF NINE PAGES',
                        ['First version', 'Final version'],
                        [['the establishment of the programme', 'the Mission established it in three years'],
                         ['an assessment was made', 'my assessment was'],
                         ['an apology was offered', 'I apologised in person on 4 March'],
                         ['a decision was taken', 'I decided, for these reasons'],
                         ['the error omitted', 'paragraph 9, with the reasoning of the time'],
                         ['nothing on delegation', 'a closing paragraph on what could not be']]),
 exhibit_cap='The same nine pages, with the agents restored and one paragraph added.',
 exhibit_note='Nothing in the first version was untrue. It simply contained no person, which '
              'in a report about representation is the whole of the subject.',
 voices=[('Ambassador Clara Mendel', 'head of mission',
          'Paragraph nine was the hardest, and it is the only part a successor will actually need.'),
         ('Elena Duarte', 'delegate, the Assembly',
          'Most reports omit it, and are therefore useless to the next person making the same judgement.'),
         ('Amara Sow', 'senior locally engaged assistant',
          'And four things will pass to the next Ambassador in a room, as four passed to you.')],
 steps=[('Find it', 'What did the first version contain?'),
        ('Compare it', 'Agent hidden against agent restored.'),
        ('Infer it', 'Why is the error paragraph usually omitted?'),
        ('Weigh it', 'One paragraph and the reasoning of the time.'),
        ('Decide', 'What does a final report carry?')],
 analysis=[('Find it. What was drafted?', 'nine accurate impersonal pages'),
           ('Compare it. What changed?', 'the agents were restored and assessments made personal'),
           ('Infer it. Why is error omitted?', 'convention, and hindsight makes it look foolish'),
           ('Weigh it. What does it cost?', 'one paragraph'),
           ('Decide. What does it carry?', 'achievement with agents, judgement in the first person, one error')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say how achievements are written.',
                 'Say how assessments are written.',
                 'Say what one paragraph must contain.',
                 'Say what the closing paragraph records.'],
 bank=['Achievements are written with the agent named, not as nominalisations without a doer.',
       'Every assessment is written in the first person, so that it can be attributed to the person who made it.',
       'One paragraph records a recommendation that proved mistaken, with the reasoning available at the time rather than with hindsight.',
       'A closing paragraph records what could not be delegated: the signature, the judgement, the presence and the apology.'],
 outcome='The report is filed in nine pages with the agents restored, the assessments in the '
         'first person and paragraph nine as written. The capital circulates paragraph nine to '
         'three other missions facing similar judgements. Her successor cites it in her own '
         'first-year recommendation, with the reasoning amended rather than reversed; and four '
         'matters pass between two people in a room, as four did four years earlier.',
 outcome_q=[('How was the report filed?', 'in nine pages, agents restored, first person'),
            ('What did the capital do?', 'circulated paragraph nine to three missions'),
            ('How did the successor use it?', 'cited it, with the reasoning amended'),
            ('What passed in a room?', 'four matters'),
            ('How many had passed four years earlier?', 'four')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Write my final report',
 task=['A departing head of mission asked for an end-of-posting report.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Write my final report.',
        'Four years.',
        'What the Mission achieved.',
        'The same shape as the last one.',
        'Suitably formal.',
        'Before I go.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and “what the Mission achieved” removed every person from nine pages.',
 asked=['Four years', 'The same shape as the last one', 'Suitably formal'],
 back=['9 pages', '31 nominalisations without an agent', '0 assessments in the first person'],
 gap='Nobody asked for the agent to be restored, for assessments in the first person, or for the error paragraph.',
 back_cap='Nine formal pages about a Mission, in which no person decides, judges or apologises.',
 back_note='“Suitably formal” produces impersonal nominalisation, which is the register that '
           'removes the one thing a report about representation is for.',
 diagnosis=[('“what the Mission achieved”', 'hidden assumption'),
            ('“suitably formal”', 'hidden assumption'),
            ('“the same shape as the last one”', 'ambiguous referent'),
            ('“the last one”', 'ambiguous referent'),
            ('“write my final report”', 'unstated criterion'),
            ('“before I go”', 'unstated criterion')],
 rewrite='Rewrite it on the six lines so that the report contains the people who did the work.',
 scaffold=['what the reader must be able to see',
           'which period, and what is separate',
           'what you are giving it',
           'the length, the agents, the first person and the error paragraph',
           'when it must be filed',
           'what happens where achievement and judgement cannot be separated'],
 bank=['Purpose: so that my successor and the archive can see what this Mission achieved, what I judged, and where I was wrong',
       'Scope: the four years of my posting; the handover note and the administrative inventory are separate documents',
       'Inputs: the political files, the programme records, my diary and the register of undertakings',
       'Criteria: nine pages at most; nominalisation used for compression but the agent restored in every sentence; every assessment in the first person; one paragraph on a recommendation that proved mistaken, giving the reasoning available at the time and not with hindsight; a closing paragraph on what could not be delegated',
       'Done: with the capital and the archive before I leave',
       'Fallback: where I cannot distinguish the institution’s achievement from my own judgement, the sentence is written as judgement'],
 check=['Is the agent restored everywhere?',
        'Is every assessment in the first person?',
        'Is there an error paragraph with contemporaneous reasoning?',
        'Is there a closing paragraph on what could not be delegated?'],
 model=['so that my successor and the archive can see what this Mission achieved, what I judged, and where I was wrong',
        'the four years of my posting; the handover note and the administrative inventory are separate documents',
        'the political files, the programme records, my diary and the register of undertakings',
        'nine pages at most; nominalisation used for compression but the agent restored in every sentence; every assessment in the first person; one paragraph on a recommendation that proved mistaken, giving the reasoning available at the time and not with hindsight; a closing paragraph on what could not be delegated',
        'with the capital and the archive before I leave',
        'where I cannot distinguish the institution’s achievement from my own judgement, the sentence is written as judgement'],
 cost='9 pages, 31 agentless nominalisations, 0 first-person assessments and no record of being wrong.'),

lang=dict(
 title='Across the Language Line · A farewell call in the language you never learned',
 setting=[
  'On her last week the Ambassador pays farewell calls. In four years she has learned perhaps '
  'two hundred words of the host language, and all four calls are conducted in English or '
  'through an interpreter.',
  'At the last call the minister speaks, for the first time in four years, in his own language '
  'for three sentences, and waits. The interpreter renders them. They are personal and they are '
  'not about policy at all.'],
 ladder=[('Four years of English', 'and two hundred words'),
         ('Three sentences in his language', 'at the last meeting'),
         ('A rendering', 'of something personal')],
 cap='A courtesy offered in a language you never learned, at the last possible moment.',
 turns=[('Turn 1 · The minister', '(three sentences in his own language, then a pause)'),
        ('Turn 2 · The interpreter', '(renders them: they concern her conduct during the crisis)'),
        ('Turn 3 · Mendel', 'Would you tell him that I understood the courtesy before I understood the words.')],
 holds=['Would you tell him that I understood the courtesy before the words.',
        'I regret that I never learned enough of his language to answer properly.',
        'May I reply in English and ask you to render it carefully?',
        'Please tell him exactly what I say, including the regret.',
        'I shall write to him in both languages this week.',
        'I will record in my report that this was said, and in which language.'],
 redline='Never pretend to a competence in a language you do not have, and never let a personal '
         'courtesy be answered with a policy formulation.',
 score=['Acknowledged the courtesy before the content.',
        'Expressed the regret about the language plainly.',
        'Asked for careful rendering of the reply.',
        'Answered personally rather than formally.',
        'Undertook to write in both languages.'],
 a=[('How many words had she learned?', 'about two hundred'),
    ('What did the minister do?', 'spoke three sentences in his own language'),
    ('What were they about?', 'something personal, not policy'),
    ('What did she say first?', 'that she understood the courtesy before the words'),
    ('What did she regret?', 'never having learned enough of the language'),
    ('What must never be answered formally?', 'a personal courtesy')]),

rev_fig=figs.split('THE WHOLE SERIES IN TWO COLUMNS',
                   'Specify and delegate',
                   ['records and summaries',
                    'comparisons and checklists',
                    'glossaries and translations',
                    'first drafts of everything'],
                   'Reserve to yourself',
                   ['the signature',
                    'the judgement of a person',
                    'the presence in a room',
                    'the apology']),
rev_fig_cap='Six books for the left column, so that the right column gets everything you have.',
rev=dict(
 read=[('How long is the final report?',
        ['nine pages', 'forty-one pages', 'four pages', 'two pages'], 0),
       ('How long did the drafting take?',
        ['an afternoon', 'four years', 'a week', 'eleven days'], 0),
       ('What does paragraph nine record?',
        ['a recommendation that proved mistaken', 'the programme’s success',
         'the staff assessments', 'the inventory'], 0),
       ('What cannot be delegated?',
        ['representation', 'drafting', 'translation', 'summarising'], 0)],
 listen_text='Ask for nine pages with the agent restored in every sentence and every assessment '
             'in the first person; require one paragraph on a recommendation that proved '
             'mistaken, with the reasoning of the time.',
 listen=[('Nine pages with the ____________ restored.', 'agent'),
         ('Every assessment in the ____________ person.', 'first'),
         ('One paragraph on a recommendation that proved ____________.', 'mistaken'),
         ('With the reasoning of the ____________.', 'time')],
 speak=['Restore the agent in eight nominalised sentences.',
        'Then name three things in your work that nothing could do for you.'],
 write='Write a six-line tasking for a final report on a posting.',
 vocab=[('A verb written as a noun is a ____________ in a report.', 'nominalisation'),
        ('A duty only you can discharge is a responsibility that cannot be ____________.', 'delegated'),
        ('What remains after you leave is a ____________ of a posting.', 'legacy'),
        ('An assessment that proved mistaken is a judgement that was ____________.', 'wrong')],
 gram=[('The ____________ of the public section took eleven months.', 'refurbishment'),
       ('His ____________ of the invitation was courteous and immediate.', 'acceptance'),
       ('The ____________ of the glossary ended an eighteen-month argument.', 'adoption'),
       ('My ____________ of his standing proved mistaken.', 'assessment')]),

found=['Nominalise to compress, and restore the agent in every sentence.',
       'Write every assessment in the first person, so that it can be attributed.',
       'Record one recommendation that proved mistaken, with the reasoning of the time.',
       'Keep the signature, the judgement, the presence and the apology as your own.'],
end_line='Everything else can be drafted. Only a person can represent.',
end_next='End of the series. The rest is practice.')
