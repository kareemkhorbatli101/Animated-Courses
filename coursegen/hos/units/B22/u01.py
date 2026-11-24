# -*- coding: utf-8 -*-
import figs

U = dict(
num=1,
title='A Board Paper in Two Pages',
gram='a board paper: recommendation first, assurance second',
ai='a board paper drafted with the recommendation in the first line',
strap='CEFR B2 · Grammar: a board paper: recommendation first, assurance second · '
      'AI: a board paper drafted with the recommendation in the first line',
cando=['put the resolution in the first line of a board paper',
       'give assurance after the recommendation rather than instead of it',
       'state a risk with its owner',
       'write a paper you would be content to see published',
       'write a six-line tasking for a board paper'],

hero=('THE RESOLUTION GOES IN LINE ONE.',
      ['A board that reaches page four before it knows what it is deciding',
       'has already spent its attention on your background section.'],
      [(300, 'teal', 'short'), (900, 'blue', 'long'), (300, 'grey', 'short')]),
hero_cap='Two pages, nine readers, and one sentence the minute can adopt.',

warm=['How long is the longest board paper you have read?',
      'What did it ask the board to do?',
      'Where in the paper did you find out?'],

vocab=[
 ('a resolution the board is asked to pass', 'the sentence the minute will adopt'),
 ('an assurance that follows it', 'the evidence that the recommendation is safe'),
 ('a paper of two pages', 'a paper a board reads in full'),
 ('a paper of nineteen pages', 'a paper a board reads in part'),
 ('a board that meets in public', 'a board whose papers are read outside'),
 ('a board that meets in private session', 'a board with narrower reasons for doing so'),
 ('a non-executive who reads everything', 'the reader who finds the appendix error'),
 ('a non-executive who reads the first page', 'the reader you must satisfy first'),
 ('an executive summary that summarises nothing', 'a page of adjectives'),
 ('a risk stated with its owner', 'a risk somebody can be asked about'),
 ('a risk stated as a theme', 'a risk nobody will ever close'),
 ('a figure the finance director has seen', 'a figure that will survive the meeting'),
 ('a figure nobody has checked', 'a figure that will end the paper'),
 ('a decision the board may lawfully take', 'a decision within its powers'),
 ('a decision that is not the board’s', 'a decision to be referred, not recommended'),
 ('a paper that invites a question', 'a paper that trusts its readers'),
 ('a paper that forecloses one', 'a paper that will be distrusted'),
 ('an appendix that carries the evidence', 'the proper home of detail'),
 ('a minute the board can adopt', 'the wording to write for them'),
 ('a paper you would be content to see published', 'the only test that matters')],

read=[
 'The board meets for three hours and has nine papers. Yours is the fourth, and '
 'it will have about eleven minutes, of which the first two decide everything.',
 'So the resolution goes in the first line, written as the minute should read. '
 'The board is asked to approve the closure of the Harbourview inpatient unit '
 'with effect from the thirtieth of June.',
 'Assurance comes second, not instead. Three sentences on what has been done to '
 'test the recommendation: who has been consulted, what the clinical opinion is '
 'and who has checked the figures.',
 'Every risk carries an owner. A risk belonging to a theme belongs to nobody, and '
 'a board that is given four themes and no names has been given a mood rather '
 'than a register.',
 'And write the whole paper as though it will be published, because in a public '
 'board it will be. The sentence you would not want quoted is the sentence a '
 'journalist will quote, and writing it differently is not concealment but '
 'precision.'],

dp1=('Board papers', 'Corporate governance guidance commonly recommends stating '
     'the decision sought at the head of a paper, limiting length, identifying '
     'risk owners, confirming financial verification, and drafting on the '
     'assumption of publication where the board meets in public. Standing orders '
     'are set by the organisation.',
     'Source: general corporate governance guidance, 2025–2026.'),

c_a=[('How many papers does the board have?', 'nine, in three hours'),
     ('How long will this paper have?', 'about eleven minutes'),
     ('Where does the resolution go?', 'in the first line, written as the minute should read'),
     ('What comes second?', 'assurance, in three sentences'),
     ('What does every risk carry?', 'an owner'),
     ('How is the paper written?', 'as though it will be published')],

c_b=[('The board has nine papers.', 'T'),
     ('The resolution appears on page four.', 'F'),
     ('Assurance follows the recommendation.', 'T'),
     ('A themed risk has an owner.', 'F'),
     ('The figures have been checked by finance.', 'T'),
     ('The paper is written for publication.', 'T')],

c_c=[('The board ____________ asked to approve the closure.', 'is'),
     ('____________ effect from the thirtieth of June.', 'With'),
     ('The figures ____________ been checked by the finance director.', 'have'),
     ('Each risk ____________ a named owner.', 'has'),
     ('The clinical opinion ____________ attached at appendix two.', 'is'),
     ('I ____________ written it for publication.', 'have')],

c_d=[('Put the resolution ( after the background / in line one ).', ['after the background', 'in line one'], 1),
     ('Give assurance ( after the recommendation / instead of it ).',
      ['after the recommendation', 'instead of it'], 0),
     ('State each risk ( with an owner / as a theme ).',
      ['with an owner', 'as a theme'], 0),
     ('Put the detail ( in an appendix / in the body ).',
      ['in an appendix', 'in the body'], 0),
     ('Write as though it will be ( published / read closely ).',
      ['published', 'read closely'], 0)],

c_e=('A resolution, assurance, a risk with an owner or something that belongs in '
     'an appendix? Decide what each is.',
     [('the board is asked to approve the closure from the thirtieth of June', 'a resolution'),
      ('the clinical director supports the recommendation', 'assurance'),
      ('staff transfer risk, owned by the people director', 'a risk with an owner'),
      ('the full option appraisal, forty pages', 'something for an appendix'),
      ('the finance director has verified the figures', 'assurance'),
      ('the consultation responses in full', 'something for an appendix')],
     ['a resolution', 'assurance', 'a risk with an owner',
      'something for an appendix']),

v_fig_title='SIX WORDS OF A BOARD PAPER',
v_fig=[('doc', 'a resolution the board is asked to pass'), ('scale', 'a paper of two pages'),
       ('key', 'a risk stated with its owner'),
       ('people', 'a non-executive who reads the first page'),
       ('clock', 'a minute the board can adopt'),
       ('note', 'a paper you would be content to see published')],
v_fig_cap='Six words for eleven minutes and nine readers.',

v_a=[('The evidence that the recommendation is safe is an ____________ that follows it.', 'assurance'),
     ('A paper a board reads in part is a paper of ____________ pages.', 'nineteen'),
     ('The reader who finds the appendix error is a non-executive who reads ____________.', 'everything'),
     ('A page of adjectives is an executive summary that summarises ____________.', 'nothing'),
     ('A risk nobody will ever close is a risk stated as a ____________.', 'theme'),
     ('A figure that will end the paper is a figure nobody has ____________.', 'checked'),
     ('A decision to be referred, not recommended, is a decision that is not the ____________.', 'board’s'),
     ('The proper home of detail is an appendix that carries the ____________.', 'evidence')],

v_b=[('A board that meets in public is a board whose papers', 'are read outside.'),
     ('A paper that forecloses one is a paper', 'that will be distrusted.'),
     ('A figure the finance director has seen is a figure', 'that will survive the meeting.'),
     ('A decision the board may lawfully take is a decision', 'within its powers.'),
     ('A minute the board can adopt is the wording', 'to write for them.')],

g_title='Grammar: a board paper: recommendation first, assurance second',
g_rule=['Write the resolution as the minute should read, in the passive with the '
        'board as subject: the board is asked to approve the closure of the '
        'Harbourview inpatient unit with effect from the thirtieth of June.',
        'Write assurance in the present perfect, which shows completed work: the '
        'clinical director has reviewed the proposal; the finance director has '
        'verified the figures; the unions have been consulted on three occasions.',
        'Write each risk as a noun phrase with an owner: staff transfer risk, '
        'owned by the people director. Never as a theme, such as workforce risks, '
        'which no individual can be asked about.',
        'Write every sentence as if it will be read aloud at a public meeting, '
        'which in a public board is not a hypothesis but a description of what '
        'happens next.'],
g_fig=('LOOSE',
       ['This paper provides the board with an update on the Harbourview project.',
        'Considerable work has been undertaken by colleagues across the system.',
        'There are a number of workforce and financial risks to be managed.',
        'The board is invited to note the contents of this paper.'],
       'PRECISE',
       ['The board is asked to approve the closure of the Harbourview inpatient unit from the thirtieth of June.',
        'The clinical director has reviewed the proposal and the finance director has verified the figures.',
        'Staff transfer risk is owned by the people director; the transport risk is owned by the chief operating officer.',
        'Two of the eleven consultation responses opposed the closure, and both are at appendix three.'],
       'four sentences that produce a discussion',
       'four sentences that produce a minute'),
g_fig_cap='The board is asked to. Has reviewed, has verified. Owned by. Both are at appendix.',

g_a=[('The board ____________ asked to approve the closure.', 'is'),
     ('____________ the thirtieth of June.', 'From'),
     ('The clinical director ____________ reviewed the proposal.', 'has'),
     ('The finance director ____________ verified the figures.', 'has'),
     ('Staff transfer risk ____________ owned by the people director.', 'is'),
     ('Two ____________ the eleven responses opposed it.', 'of'),
     ('Both are ____________ appendix three.', 'at'),
     ('The unions ____________ been consulted three times.', 'have'),
     ('I ____________ written it for publication.', 'have')],

g_b=[('( the board is asked to approve the closure from the thirtieth / this paper provides an update ) — the resolution.', ['the board is asked to approve the closure from the thirtieth', 'this paper provides an update'], 0),
     ('( the finance director has verified the figures / considerable work has been undertaken ) — the assurance.',
      ['the finance director has verified the figures', 'considerable work has been undertaken'], 0),
     ('( staff transfer risk, owned by the people director / a number of workforce risks ) — the risk.',
      ['staff transfer risk, owned by the people director', 'a number of workforce risks'], 0),
     ('( two of eleven responses opposed it, both at appendix three / the consultation was broadly supportive ) — the opposition.',
      ['two of eleven responses opposed it, both at appendix three', 'the consultation was broadly supportive'], 0),
     ('( the board is asked to approve / the board is invited to note ) — the ask.',
      ['the board is asked to approve', 'the board is invited to note'], 0),
     ('( the full appraisal is at appendix one / detailed analysis is available ) — the evidence.',
      ['the full appraisal is at appendix one', 'detailed analysis is available'], 0)],

d1=dict(
 title='Eleven minutes, two pages',
 fig=(['Nine papers.', 'Three hours.'],
      ['Two pages.', 'One resolution.']),
 cap='Margarida Pires, director of communications and corporate affairs, and Peter Lindqvist, non-executive director.',
 lines=[('Peter', 'Your Harbourview paper is the only two-page paper in the pack. The others average eleven.'),
        ('Margarida', 'And the board reads mine in full, which is the only reason I write it that way.'),
        ('Peter', 'The first line asks us to approve the closure from the thirtieth of June. Most papers ask us to note.'),
        ('Margarida', 'Most papers ask you to note because noting cannot be refused.'),
        ('Peter', 'That is a hard thing to say about your colleagues.'),
        ('Margarida', 'It is an observation about institutions. A paper for noting carries no risk for its author, and the board is left to guess what it is for.'),
        ('Peter', 'Your risk section has four risks and four names.'),
        ('Margarida', 'Because I can ask a person a question. I cannot ask workforce risks anything.'),
        ('Peter', 'And the two consultation responses against?'),
        ('Margarida', 'In full, at appendix three. If the board approves this, somebody will read those two letters in public, and I would rather it were you first.'),
        ('Peter', 'You are assuming we shall be criticised.'),
        ('Margarida', 'I am assuming the paper will be read by people who were not in the room, which has been true of every paper I have written for eleven years.')],
 a=[('How long is Margarida’s paper?', 'two pages, against an average of eleven'),
    ('What does its first line ask?', 'that the board approve the closure from the thirtieth of June'),
    ('Why do most papers ask the board to note?', 'because noting cannot be refused'),
    ('Why does each risk have a name?', 'because a person can be asked a question'),
    ('Where are the two opposing responses?', 'in full, at appendix three')],
 b=[('The board reads mine in ____________.', 'full'),
    ('Noting cannot be ____________.', 'refused'),
    ('Four risks and four ____________.', 'names'),
    ('Read by people who were not in the ____________.', 'room')]),

d2=dict(
 title='The paper that asked to note',
 fig=(['Nineteen pages.', 'Invited to note.'],
      ['Approved by silence.', 'Nobody owned it.']),
 cap='Margarida Pires and Siobhán Carrick, deputy chief executive.',
 lines=[('Siobhán', 'The pathology paper went through in January. The board was invited to note the direction of travel.'),
        ('Margarida', 'And in March the direction of travel turned out to be a four million pound commitment.'),
        ('Siobhán', 'The board says it never approved it. The executive says the board noted it.'),
        ('Margarida', 'Both are true, which is the problem with asking a board to note something consequential.'),
        ('Siobhán', 'The author would say he was being appropriately cautious.'),
        ('Margarida', 'He was being personally cautious. The caution transferred the exposure from him to a board that had not understood what it was agreeing.'),
        ('Siobhán', 'What should the paper have said?'),
        ('Margarida', 'The board is asked to approve a commitment of up to four million pounds, with the breakdown at appendix one.'),
        ('Siobhán', 'He would never have got that through in January.'),
        ('Margarida', 'Then January was the right time to find that out, rather than March.'),
        ('Siobhán', 'Some directors genuinely believe noting is a form of approval.'),
        ('Margarida', 'Many do, and that belief is why the standing orders now say that a paper seeking a decision must say so in its first line.')],
 unresolved=True,
 a=[('What was the board invited to do?', 'to note the direction of travel'),
    ('What did it turn out to be?', 'a four million pound commitment'),
    ('What do the board and executive each say?', 'the board never approved it; the executive says it noted it'),
    ('What should the paper have asked?', 'approval of a commitment of up to four million pounds'),
    ('What do the standing orders now say?', 'that a paper seeking a decision must say so in its first line')],
 b=[('The ____________ of travel.', 'direction'),
    ('He was being ____________ cautious.', 'personally'),
    ('With the breakdown at ____________ one.', 'appendix'),
    ('Must say so in its first ____________.', 'line')]),

speak=[('Line one',
        ['Your partner describes six board papers.',
         'Write the resolution for each, as the minute should read.',
         'Three each, then swap.']),
       ('Name the owner',
        ['Your partner gives you six themed risks.',
         'Restate each as a risk with a named owner.',
         'Three each, then swap.']),
       ('Note or approve',
        ['Your partner gives you six papers inviting the board to note.',
         'Say which should seek a decision, and what the decision is.',
         'Three each, then swap.'])],

ext_title='A board paper drafted with the recommendation in the first line',
ext_fig=figs.datatable('WHAT THE PAPER CARRIES',
                       ['Line', 'Content'],
                       [['the resolution', 'as the minute should read'],
                        ['the assurance', 'who has reviewed and verified'],
                        ['the risks', 'each with a named owner'],
                        ['the opposition', 'what was said against, and where'],
                        ['the evidence', 'in appendices, not the body'],
                        ['the publication test', 'written to be read outside']]),
ext_fig_cap='Six lines on two pages, and the last one changes every other.',
ext=[
 'A board paper drafted with the recommendation in the first line gives nine '
 'people eleven minutes of useful attention instead of four pages of context.',
 'Give it the decision sought, the verification already obtained, the risks with '
 'their owners, the consultation including what was said against, and the '
 'evidence that belongs in appendices.',
 'Ask for the resolution in the first line in the words the minute should use, so '
 'that the board can adopt it without redrafting.',
 'Ask it to convert every themed risk into a risk with an owner, since a risk '
 'nobody owns cannot be reported on or closed.',
 'Ask for what was said against the recommendation to appear in the body rather '
 'than only in an appendix, because a board that discovers opposition later stops '
 'trusting the papers.',
 'What it cannot do is decide whether to seek a decision or invite a note. Asking '
 'to note is safer for the author and worse for the organisation, and choosing '
 'the harder route is a matter of character.'],

dp2=('Papers and decisions', 'Governance literature commonly reports that papers '
     'inviting a board to note consequential matters are a frequent source of '
     'later disagreement about what was approved, and that risks recorded without '
     'named owners are less often closed.',
     'Source: general corporate governance literature, 2025–2026.'),

e_a=[('What does the paper give nine people?', 'eleven minutes of useful attention'),
     ('What five things are given to it?', 'the decision sought, the verification, the risks with owners, the consultation and the evidence'),
     ('How is the resolution written?', 'in the words the minute should use'),
     ('What happens to a themed risk?', 'it becomes a risk with an owner'),
     ('Where does opposition appear?', 'in the body, not only in an appendix')],
e_b=[('The resolution is written as the minute should read.', 'T'),
     ('Themed risks are given owners.', 'T'),
     ('It decides whether to seek a decision.', 'F'),
     ('Opposition appears in the body.', 'T'),
     ('Papers inviting a note cause later disagreement.', 'T'),
     ('Risks without owners are closed more often.', 'F')],

w_model='Purpose: so that a board of nine can take a decision in eleven minutes '
       'and the minute can be written from my first line. Scope: papers on '
       'corporate and operational matters that I author; clinical quality papers '
       'are the medical director’s, and no paper of mine recommends a decision '
       'outside the board’s powers. Inputs: the decision sought, the verification '
       'already obtained and by whom, the risks with their owners, the '
       'consultation including every response against, the evidence for the '
       'appendices, and whether the board meets in public. Criteria: the '
       'resolution in the first line in the words the minute should use; assurance '
       'in three sentences naming who has reviewed and verified; every risk with '
       'a named individual owner; opposition stated in the body with its weight; '
       'no more than two pages excluding appendices; and every sentence written to '
       'be read outside the organisation. Done: circulated seven days before the '
       'meeting with the appendices, and published in the same form where the '
       'board meets in public. Fallback: where the decision is not the board’s to '
       'take, I say so in the first line and recommend referral rather than '
       'inviting a note.',
w_fig=figs.spec_card('SIX LINES FOR A BOARD PAPER',
                     [('Purpose', 'a decision in eleven minutes, a minute from line one'),
                      ('Scope', 'corporate and operational papers I author'),
                      ('Inputs', 'decision, verification, risks, consultation, evidence'),
                      ('Criteria', 'resolution first, named risk owners, two pages'),
                      ('Done', 'seven days ahead, published in the same form'),
                      ('Fallback', 'not the board’s decision: recommend referral')]),
w_fig_cap='Six lines, and the sixth one is the alternative to inviting a note.',
w_task='Write a six-line tasking for a board paper.',
w_steps=['Line 1: say what the board must be able to do.',
         'Line 2: say which papers are yours, and what you may not recommend.',
         'Line 3: say what you are giving it.',
         'Line 4: say what the paper must contain and in what order.',
         'Line 5: say when it goes out and how it is published.',
         'Line 6: say what you do when the decision is not the board’s.'],
w_bank=['Purpose: so that a board of nine can take a decision in eleven minutes and the minute can be written from my first line',
        'Scope: papers on corporate and operational matters that I author; clinical quality papers are the medical director’s and no paper of mine recommends a decision outside the board’s powers',
        'Inputs: the decision sought, the verification obtained and by whom, the risks with their owners, the consultation including every response against, the evidence for the appendices, and whether the board meets in public',
        'Criteria: the resolution in the first line in the words the minute should use; assurance in three sentences naming who has reviewed and verified; every risk with a named owner; opposition stated in the body; no more than two pages excluding appendices; every sentence written to be read outside',
        'Done: circulated seven days before the meeting with the appendices, and published in the same form where the board meets in public',
        'Fallback: where the decision is not the board’s to take, I say so in the first line and recommend referral rather than inviting a note'],
w_check=['Is the resolution in the first line?',
         'Has every risk a named owner?',
         'Is opposition in the body?',
         'Is the paper two pages?'],

t_title='A board paper drafted with the recommendation in the first line',
t_fig=figs.split('NINE PAPERS AND THREE HOURS',
                 'It can draft',
                 ['the resolution as a minute',
                  'assurance with names',
                  'risks with owners',
                  'the appendix structure'],
                 'It must not decide',
                 ['whether to seek a decision',
                  'what the board may lawfully do',
                  'which risk matters most',
                  'what to leave out']),
t_fig_cap='It drafts the paper. Choosing to ask rather than to note is character.',
t_body=[
 'Give it the decision sought, the verification obtained, the risks with owners '
 'and the consultation including the responses against.',
 'A board paper drafted with the recommendation in the first line puts the '
 'resolution in the words the minute should use.',
 'Then ask it to give every themed risk a named owner.'],
t_say=[('The board is asked: ', 'To approve the closure from the thirtieth.'),
       ('Verified by: ', 'The finance director, on the ninth.'),
       ('Risk owner: ', 'The people director, for staff transfer.')],
t_bound='It cannot decide whether to seek a decision or invite a note, and '
        'inviting a note is always safer for whoever signs the paper.',
t_a=[('Give it the decision ____________.', 'sought'),
     ('And the verification ____________.', 'obtained'),
     ('And the risks with their ____________.', 'owners'),
     ('Put the resolution in the ____________ line.', 'first'),
     ('In the words the ____________ should use.', 'minute'),
     ('And give every themed risk a named ____________.', 'owner')],
t_b_rubric='Say what the board paper work should do with each item.',
t_b=[('“this paper provides an update”', 'state the resolution in the first line'),
     ('“a number of workforce risks”', 'name an owner for each risk'),
     ('“the consultation was broadly supportive”', 'state what was said against'),
     ('a decision outside the board’s powers', 'recommend referral in the first line')],

case=dict(
 title='The Decision Room · The direction of travel',
 brief=[
  'A hospital board received papers of which the majority invited it to note '
  'rather than to decide, on the view that noting preserved the board’s freedom.',
  'Over three years, 214 papers were received. 161 invited the board to note. In 7 '
  'cases a matter noted by the board was subsequently treated by the executive as '
  'approved, including a commitment of about four million pounds. In 2 of those 7 '
  'the board minuted its disagreement a year later. A review found risks recorded '
  'without an owner in 38 papers, of which 31 remained open.',
  'Standing orders were changed so that a paper seeking a decision states the '
  'resolution in its first line and every risk names an owner. Papers inviting a '
  'note fell to 71 of 198, and risks without owners to 2.'],
 exhibit=figs.datatable('THREE YEARS OF BOARD PAPERS',
                        ['Item', 'Before / After'],
                        [['papers received', '214 / 198'],
                         ['papers inviting a note', '161 / 71'],
                         ['noted matters later treated as approved', '7 / 0'],
                         ['risks recorded without an owner', '38 / 2'],
                         ['those risks still open', '31 / 1'],
                         ['mean pages per paper', '11 / 4']]),
 exhibit_cap='The same business, decided rather than noted, in a third of the pages.',
 exhibit_note='A four million pound commitment was noted in January and discovered '
              'in March. Both the board and the executive were describing the same '
              'minute accurately.',
 voices=[('A director', 'about seeking decisions',
          'A paper that asks the board to approve something invites a refusal that delays the work by a month.'),
         ('Margarida Pires', 'director of corporate affairs',
          'Seven matters the board noted were later treated as approved, and one of them was four million pounds.'),
         ('A non-executive', 'about noting',
          'I have noted a great many things I would not have approved, and nobody ever told me the difference mattered.')],
 steps=[('Find it', 'How many papers invited a note?'),
        ('Compare it', 'Noted matters against those later treated as approved.'),
        ('Infer it', 'Why did noting cause disagreement?'),
        ('Weigh it', 'A month of delay against four million pounds.'),
        ('Decide', 'What must a paper seeking a decision do?')],
 analysis=[('Find it. How many?', '161 of 214'),
           ('Compare it. How many disputed?', '7 later treated as approved'),
           ('Infer it. Why?', 'because noting and approving produce the same silence'),
           ('Weigh it. What was traded?', 'a month of possible delay for a four million pound dispute'),
           ('Decide. What must it do?', 'state the resolution in its first line')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say what a paper seeking a decision must do.',
                 'Say what a paper for noting may not contain.',
                 'Say how risks are recorded.',
                 'Say how long a paper is.'],
 bank=['A paper seeking a decision states the resolution in its first line, in the words in which the minute would record it.',
       'A paper inviting the board to note contains no proposal, commitment or expenditure requiring the board’s approval.',
       'Every risk in a board paper names an individual owner, and no risk is recorded as a theme or a category.',
       'No board paper exceeds two pages excluding appendices, and all supporting evidence is placed in appendices.'],
 outcome='The board adopts the four lines. Papers inviting a note fall from a '
         'hundred and sixty-one to seventy-one, noted matters later treated as '
         'approved from seven to none, risks without an owner from thirty-eight to '
         'two, and the mean length of a paper from eleven pages to four.',
 outcome_q=[('What happened to papers inviting a note?', 'they fell from 161 to 71'),
            ('What happened to disputed noted matters?', 'they fell from seven to none'),
            ('What happened to risks without owners?', 'they fell from thirty-eight to two'),
            ('What happened to paper length?', 'it fell from eleven pages to four'),
            ('What was the largest disputed commitment?', 'about four million pounds')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · The board is invited to note',
 task=['This was the opening of a nineteen-page paper taken to a hospital board.',
       'This is what it said.'],
 draft=['This paper provides the board with an update on the Harbourview project.',
        'Considerable work has been undertaken by colleagues across the system.',
        'There are a number of workforce and financial risks to be managed.',
        'The direction of travel is broadly supported by key stakeholders.',
        'Further detail is set out in the sections which follow.',
        'The board is invited to note the contents of this paper.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines of a board paper that asks the board for nothing.',
 asked=['an update', 'a number of workforce and financial risks',
        'invited to note'],
 back=['161 of 214 papers inviting a note',
       '7 noted matters later treated as approved', '38 risks without an owner'],
 gap='Nobody could tell what decision was sought, who owned any risk, who had verified anything, or what was said against.',
 back_cap='Six lines that will be noted in January and disputed in March.',
 back_note='“Broadly supported by key stakeholders” describes a consultation in '
           'which two of eleven responses opposed the proposal outright.',
 diagnosis=[('“a number of workforce and financial risks”', 'unscoped set'),
            ('“key stakeholders”', 'unscoped set'),
            ('“considerable work”', 'unbounded quantity'),
            ('“broadly supported”', 'unbounded quantity'),
            ('“the direction of travel”', 'hidden assumption'),
            ('“invited to note”', 'hidden assumption')],
 rewrite='Rewrite it on the six lines so that the board takes a decision.',
 scaffold=['what the board must be able to do',
           'which papers are yours, and what you may not recommend',
           'what you are giving it',
           'what the paper must contain and in what order',
           'when it goes out and how it is published',
           'what you do when the decision is not the board’s'],
 bank=['Purpose: so that a board of nine can take a decision in eleven minutes and the minute can be written from my first line',
       'Scope: papers on corporate and operational matters that I author; clinical quality papers are the medical director’s, and no paper of mine recommends a decision outside the board’s powers',
       'Inputs: the decision sought, the verification already obtained and by whom, the risks with their owners, the consultation including every response against, the evidence for the appendices, and whether the board meets in public',
       'Criteria: the resolution in the first line in the words the minute should use; assurance in three sentences naming who has reviewed and verified; every risk with a named individual owner; opposition stated in the body with its weight; no more than two pages excluding appendices; and every sentence written to be read outside the organisation',
       'Done: circulated seven days before the meeting with the appendices, and published in the same form where the board meets in public',
       'Fallback: where the decision is not the board’s to take, I say so in the first line and recommend referral rather than inviting a note'],
 check=['Is there a resolution in the first line?',
        'Has every risk an owner?',
        'Is the opposition stated?',
        'Is it two pages?'],
 model=['so that a board of nine can take a decision in eleven minutes and the minute can be written from my first line',
        'papers on corporate and operational matters that I author; clinical quality papers are the medical director’s, and no paper of mine recommends a decision outside the board’s powers',
        'the decision sought, the verification already obtained and by whom, the risks with their owners, the consultation including every response against, the evidence for the appendices, and whether the board meets in public',
        'the resolution in the first line in the words the minute should use; assurance in three sentences naming who has reviewed and verified; every risk with a named individual owner; opposition stated in the body with its weight; no more than two pages excluding appendices; and every sentence written to be read outside the organisation',
        'circulated seven days before the meeting with the appendices, and published in the same form where the board meets in public',
        'where the decision is not the board’s to take, I say so in the first line and recommend referral rather than inviting a note'],
 cost='161 of 214 papers inviting a note, 7 later treated as approved, and 38 risks without an owner.'),

lang=dict(
 title='The Unwelcome Number · Telling a director his paper must ask for a decision',
 setting=[
  'A director has written a nineteen-page paper inviting the board to note a '
  'project that will commit about four million pounds.',
  'Margarida has to require a resolution, keep a colleague’s cooperation, and not '
  'suggest he was trying to avoid scrutiny.'],
 ladder=[('A director protecting a timetable', 'and a board noting four million'),
         ('Seven noted matters', 'later treated as approved'),
         ('Either let it be noted', 'or require the resolution and risk the refusal')],
 cap='Nineteen pages, four million pounds, and one line that has to change.',
 turns=[('Turn 1 · Margarida', 'The paper has to ask the board to approve a commitment of up to four million pounds, in its first line.'),
        ('Turn 2 · Director', 'If I ask for approval in January they will defer it and I lose the quarter.'),
        ('Turn 3 · Margarida', 'Seven matters this board noted were later treated as approved, and two of those ended in a minuted disagreement.')],
 holds=['A deferral in January is cheaper than a dispute about four million in March.',
        'I am not suggesting you were avoiding scrutiny; the convention invited this paper.',
        'I shall write the resolution with you, and the breakdown goes to appendix one.',
        'The two consultation responses against belong in the body, not the appendix.',
        'If the board defers, I shall support a special meeting within three weeks.',
        'And if a decision-seeking paper costs you the quarter, bring it to me and I shall take the timetable to the chief executive myself.'],
 redline='Never invite a board to note a commitment that requires its approval, '
         'and never leave a risk without a named owner.',
 score=['Stated the requirement in the first sentence.',
        'Gave the historical figures.',
        'Cleared the colleague of intent.',
        'Offered practical help with the resolution.',
        'Offered to carry the timetable consequence.'],
 a=[('What must the paper ask?', 'approval of a commitment of up to four million pounds'),
    ('What is the director’s objection?', 'that approval will be deferred and he loses the quarter'),
    ('How many noted matters were later treated as approved?', 'seven'),
    ('Where do the opposing responses belong?', 'in the body, not the appendix'),
    ('What does Margarida offer if the board defers?', 'to support a special meeting within three weeks'),
    ('What is the redline?', 'never invite a board to note a commitment needing approval')]),

rev_fig=figs.split('A BOARD PAPER',
                   'Say',
                   ['the board is asked to approve the closure from the thirtieth',
                    'the finance director has verified the figures',
                    'staff transfer risk, owned by the people director',
                    'two of eleven responses opposed it, both at appendix three'],
                   'Never say',
                   ['this paper provides an update',
                    'considerable work has been undertaken',
                    'a number of workforce risks',
                    'the board is invited to note']),
rev_fig_cap='Four sentences that produce a minute, and four that produce a dispute in March.',
rev=dict(
 read=[('How long will the paper have?',
        ['about eleven minutes', 'an hour', 'three hours', 'two minutes'], 0),
       ('Where does the resolution go?',
        ['in the first line', 'in the conclusion',
         'in the executive summary', 'in the covering email'], 0),
       ('What does every risk carry?',
        ['a named owner', 'a score', 'a mitigation', 'a theme'], 0),
       ('How is the paper written?',
        ['as though it will be published', 'for the executive team',
         'for the chair alone', 'as briefly as possible'], 0)],
 listen_text='Give it the decision sought, the verification obtained, the risks '
             'with owners and the consultation including the responses against. '
             'Put the resolution first.',
 listen=[('Give it the decision ____________.', 'sought'),
         ('And the verification ____________.', 'obtained'),
         ('And the risks with their ____________.', 'owners'),
         ('Put the resolution in the ____________ line.', 'first')],
 speak=['Write resolutions for six papers, as the minute should read.',
        'Then give six themed risks named owners.'],
 write='Write a six-line tasking for a board paper.',
 vocab=[('A paper a board reads in full is a paper of ____________ pages.', 'two'),
        ('The reader you must satisfy first is a non-executive who reads the ____________ page.', 'first'),
        ('A risk somebody can be asked about is a risk stated with its ____________.', 'owner'),
        ('A paper that trusts its readers is a paper that ____________ a question.', 'invites')],
 gram=[('The resolution ____________ in the first line of the paper.', 'is'),
       ('The unions ____________ been consulted three times.', 'have'),
       ('Both are ____________ appendix three.', 'at'),
       ('Two ____________ the eleven responses opposed it.', 'of')]),

found=['Put the resolution in the first line, as the minute should read.',
       'Give assurance after the recommendation, with names.',
       'Give every risk an owner who can be asked about it.',
       'Write the paper as though it will be published, because it will.'],
end_line='A four million pound commitment was noted in January and discovered in March, and both the board and the executive were describing the same minute accurately.',
end_next='Next: Chairing a Committee That Decides Something')
