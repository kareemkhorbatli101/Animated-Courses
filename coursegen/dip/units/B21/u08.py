# -*- coding: utf-8 -*-
import figs

U = dict(
num=8,
title='Drafting Jointly, Word by Word',
gram='degree and proportion stated exactly',
ai='joint drafting: tracking who proposed what',
strap='CEFR B2 · Grammar: degree and proportion stated exactly · '
      'AI: joint drafting: tracking who proposed what',
cando=['state degree and proportion without vagueness',
       'work in a drafting group with brackets and versions',
       'keep a record of who proposed each change',
       'say why a change log is not a record of authorship',
       'write a six-line tasking for a drafting record'],

hero=('FOURTEEN VERSIONS, SIX HUNDRED CHANGES, AND NOBODY COULD REMEMBER WHO ASKED FOR WHERE PRACTICABLE',
      ['The log found it: version 7, Tuesday afternoon, three words inserted.',
       'It could not say who had asked for them, because nobody had typed it.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A drafting group of nine delegations, four days, fourteen versions of eleven paragraphs.',

warm=['How do you keep track of changes to a text nine people are editing?',
      'Why does it matter who proposed a particular phrase?',
      'What gets agreed in a room and never written down?'],

read=[
 'Joint drafting is the part of negotiation that looks least like negotiation: nine '
 'delegations, eleven paragraphs, a screen at the front of the room, and four days of '
 'arguing about whether a sentence says shall or should.',
 'By the fourth day the text is in its fourteenth version and has absorbed something close to '
 'six hundred changes, rather more than a third of which were made, reversed and then made '
 'again in slightly different words.',
 'Nobody can now remember when the phrase where practicable entered paragraph 6, and it '
 'matters, because that phrase reduces a firm commitment to an aspiration and at least two '
 'delegations believe it was never agreed at all.',
 'Hala Darwish has kept every version. A system reads all fourteen and produces a change log '
 'in minutes: where practicable entered in version 7, on Tuesday afternoon, together with two '
 'other insertions in the same paragraph.',
 'It cannot say who asked for it. Version 7 was circulated by the secretariat, so the log '
 'attributes every change in it to the chair, and three of those changes were in fact proposed '
 'orally by a single delegation whose name appears nowhere.'],

dp1=('Rolling texts and attribution', 'Multilateral drafting practice commonly works through '
     'successive versions of a rolling text, in which proposals may be made orally and '
     'incorporated by a chair or secretariat, with the result that the text itself does not '
     'record which delegation proposed a given change.',
     'Source: reported multilateral drafting practice, 2025–2026.'),

c_a=[('How many delegations were in the drafting group?', 'nine'),
     ('How many versions by the fourth day?', 'fourteen'),
     ('About how many changes?', 'close to six hundred'),
     ('Which phrase was in dispute?', 'where practicable'),
     ('When did it enter the text?', 'in version 7, on Tuesday afternoon'),
     ('Why is the attribution wrong?', 'the secretariat circulated the version')],

c_b=[('Joint drafting is quick work.', 'F'),
     ('More than a third of changes were made and reversed.', 'T'),
     ('Where practicable strengthens a commitment.', 'F'),
     ('The change log found the version and the day.', 'T'),
     ('The log identified who proposed the phrase.', 'F'),
     ('Oral proposals leave no trace in the text.', 'T')],

c_c=[('Rather more than ____________ third of the changes were reversed.', 'a'),
     ('The deadline was extended ____________ 15 per cent.', 'by'),
     ('We received ____________ fewer than four proposals.', 'no'),
     ('The period may be extended ____________ to six months.', 'up'),
     ('Their delegation is ____________ as large as ours.', 'twice'),
     ('____________ least two delegations dispute the phrase.', 'At')],

c_d=[('By 15 per cent states ( the size of a change / a final figure ).', ['the size of a change', 'a final figure'], 0),
     ('Up to six months means ( six at most / six at least ).',
      ['six at most', 'six at least'], 0),
     ('No fewer than four means ( four or more / four or fewer ).',
      ['four or more', 'four or fewer'], 0),
     ('Where practicable makes a commitment ( weaker / stronger ).',
      ['weaker', 'stronger'], 0),
     ('The log tracks ( the text / the authorship ).', ['the text', 'the authorship'], 0)],

c_e=('Proportion, limit or comparison? Put each in the right column.',
     [('a third of the changes', 'proportion'),
      ('up to six months', 'limit'),
      ('twice as large as ours', 'comparison'),
      ('15 per cent of the budget', 'proportion'),
      ('no fewer than four', 'limit'),
      ('half as long as the first', 'comparison')],
     ['proportion', 'limit', 'comparison']),

v_fig_title='A TEXT IN NINE HANDS',
v_fig=[('doc', 'a rolling text'), ('key', 'a square bracket'), ('people', 'a drafting group'),
       ('chart', 'a change log'), ('clock', 'a drafting session'), ('speech', 'a compromise proposal')],
v_fig_cap='Six words for four days spent on eleven paragraphs.',

vocab=[
 ('a drafting group', 'a small body charged with producing agreed text'),
 ('a square bracket', 'the mark showing that wording is not yet agreed'),
 ('a footnote of attribution', 'a note recording which delegation proposed wording'),
 ('a rolling text', 'a document revised repeatedly as negotiation proceeds'),
 ('a chair’s text', 'a version produced by the chair on their own responsibility'),
 ('a compromise proposal', 'wording offered to bridge two positions'),
 ('a drafting suggestion', 'a proposed change of wording rather than of substance'),
 ('an agreed paragraph', 'a paragraph no delegation is still contesting'),
 ('a pending paragraph', 'a paragraph still carrying unagreed wording'),
 ('a reinstated phrase', 'wording restored after having been removed'),
 ('a deleted phrase', 'wording removed from a version'),
 ('a textual proposal', 'a proposal expressed as words for the text'),
 ('an attribution of authorship', 'the record of who proposed a given change'),
 ('a version number', 'the label distinguishing one draft from another'),
 ('a change log', 'a list of what altered between versions'),
 ('a drafting session', 'a meeting devoted to producing text'),
 ('a plenary reading', 'the consideration of a text by all delegations together'),
 ('a first reading', 'the initial consideration of a text paragraph by paragraph'),
 ('a second reading', 'a further consideration after revision'),
 ('a drafting history', 'the sequence of versions through which a text passed')],

v_a=[('The mark showing wording is not yet agreed is a square ____________.', 'bracket'),
     ('A version produced by the chair alone is a ____________ text.', 'chair’s'),
     ('A list of what altered between versions is a change ____________.', 'log'),
     ('Wording restored after removal is a ____________ phrase.', 'reinstated'),
     ('A paragraph still carrying unagreed wording is a ____________ paragraph.', 'pending'),
     ('The record of who proposed a change is an attribution of ____________.', 'authorship'),
     ('A document revised repeatedly is a ____________ text.', 'rolling'),
     ('The sequence of versions a text passed through is its drafting ____________.', 'history')],

v_b=[('A drafting group is a small body charged', 'with producing agreed text.'),
     ('A compromise proposal is wording offered', 'to bridge two positions.'),
     ('A footnote of attribution is a note recording', 'which delegation proposed wording.'),
     ('A first reading is the initial consideration of a text', 'paragraph by paragraph.'),
     ('A textual proposal is a proposal expressed', 'as words for the text.')],

g_title='Grammar: degree and proportion stated exactly',
g_rule=['Proportion: a third of, half of, 15 per cent of, two in every five.',
        'Change: by 15 per cent (the size of the change), to 15 per cent (the new level).',
        'Limits: up to six months is a maximum; no fewer than four is a minimum; at least two '
        'is also a minimum.',
        'Comparison: twice as large as, half as long as, three times the number of.'],
g_fig=('VAGUE',
       ['A lot of the changes were reversed.',
        'The deadline was extended quite a bit.',
        'We got several proposals.',
        'The period might be extended for a while.'],
       'EXACT',
       ['Rather more than a third of the changes were reversed.',
        'The deadline was extended by 15 per cent.',
        'We received no fewer than four proposals.',
        'The period may be extended up to six months.'],
       'four statements nobody can check',
       'the same four, each with a figure or a limit'),
g_fig_cap='A negotiation is arithmetic conducted in words. Vague degree is where positions leak.',

g_a=[('Rather more than ____________ third of the changes were reversed.', 'a'),
     ('The deadline was extended ____________ 15 per cent.', 'by'),
     ('We received ____________ fewer than four proposals.', 'no'),
     ('The period may be extended ____________ to six months.', 'up'),
     ('Their delegation is ____________ as large as ours.', 'twice'),
     ('____________ least two delegations dispute the phrase.', 'At'),
     ('The quota was raised ____________ 40 per cent, from 35.', 'to'),
     ('____________ in every five paragraphs is still in brackets.', 'One'),
     ('The second reading took ____________ as long as the first.', 'half')],

g_b=[('( A lot / Rather more than a third ) of the changes were reversed.', ['A lot', 'Rather more than a third'], 1),
     ('The deadline was extended ( by 15 per cent / to 15 per cent ) — the size of the change.',
      ['by 15 per cent', 'to 15 per cent'], 0),
     ('( No fewer than four / Several ) proposals were received — a stated minimum.',
      ['No fewer than four', 'Several'], 0),
     ('The period may be extended ( up to six months / for a while ) — a maximum.',
      ['up to six months', 'for a while'], 0),
     ('Their delegation is ( twice as large as ours / much larger ) — a comparison.',
      ['twice as large as ours', 'much larger'], 0),
     ('The quota was raised ( to 40 per cent / by 40 per cent ) , from 35 — the new level.',
      ['to 40 per cent', 'by 40 per cent'], 0)],

d1=dict(
 title='Version 7, Tuesday afternoon',
 fig=(['Where practicable. Version 7.', 'And who asked for it?'],
      ['The log says the chair.', 'The log is wrong, then.']),
 cap='Hala Darwish and Hala’s drafting partner, Ziad Mikhail, on the fourth morning.',
 lines=[('Ziad', 'Did you find it?'),
        ('Hala', 'Version 7, Tuesday afternoon, three insertions in paragraph 6 at the same time.'),
        ('Ziad', 'Including where practicable.'),
        ('Hala', 'Including where practicable, which turns a commitment into an intention.'),
        ('Ziad', 'And whose was it?'),
        ('Hala', 'The log attributes all three to the chair, because the secretariat circulated version 7.'),
        ('Ziad', 'The secretariat circulates everything. That is not authorship.'),
        ('Hala', 'No. Somebody proposed it out loud on Tuesday and it went straight into the text.'),
        ('Ziad', 'Then somebody in that room remembers. There were nine delegations and three interpreters.'),
        ('Hala', 'I remember two of them objecting to something in paragraph 6, but not to what.'),
        ('Ziad', 'Ask them. If two delegations objected on Tuesday, they will not have forgotten by Friday.'),
        ('Hala', 'And this afternoon I propose that paragraph 6 goes back into brackets.')],
 a=[('Where did the phrase enter?', 'version 7, Tuesday afternoon'),
    ('How many insertions were made together?', 'three'),
    ('What does where practicable do?', 'turns a commitment into an intention'),
    ('Why does the log name the chair?', 'the secretariat circulated that version'),
    ('What will Hala propose?', 'that paragraph 6 goes back into brackets')],
 b=[('That is not ____________.', 'authorship'),
    ('It went ____________ into the text.', 'straight'),
    ('Nine delegations and three ____________.', 'interpreters'),
    ('Back into ____________.', 'brackets')]),

d2=dict(
 title='What was agreed at lunch',
 fig=(['There is nothing in the log about the annex.', 'Because it was agreed at a table.'],
      ['Then it is not agreed.', 'Try telling them that on Friday.']),
 cap='Hala and Hala Darwish’s counterpart in the capital, Dalia Khoury.',
 lines=[('Dalia', 'Your telegram says the annex is settled. The log you attached shows nothing.'),
        ('Hala', 'Because it was settled over lunch on Wednesday, between four of us, verbally.'),
        ('Dalia', 'Four of nine delegations, with no text and no record.'),
        ('Hala', 'There is a text. I wrote it on a napkin and typed it that evening.'),
        ('Dalia', 'Typed where? Into the rolling text, or into your own note?'),
        ('Hala', 'Into my own note. The rolling text still has the annex in brackets.'),
        ('Dalia', 'So four delegations believe the annex is agreed and the document says it is not.'),
        ('Hala', 'That is exactly the position, and on Friday one of them will say so out loud.'),
        ('Dalia', 'Then get it into the rolling text this afternoon, with the four names attached.'),
        ('Hala', 'The chair will ask whether the other five accept it.'),
        ('Dalia', 'Good. That is the question that needs asking, and better on Thursday than on Friday.'),
        ('Hala', 'And if two of the five say they never heard about it?')],
 unresolved=True,
 a=[('Where was the annex settled?', 'over lunch, verbally, between four delegations'),
    ('What does the rolling text show?', 'the annex still in brackets'),
    ('Where did Hala type her text?', 'into her own note'),
    ('What does Dalia tell her to do?', 'get it into the rolling text with four names'),
    ('What will the chair ask?', 'whether the other five accept it')],
 b=[('With no text and no ____________.', 'record'),
    ('The rolling text still has the annex in ____________.', 'brackets'),
    ('With the four ____________ attached.', 'names'),
    ('Better on Thursday than on ____________.', 'Friday')]),

speak=[('Say the number',
        ['Make nine statements of degree and proportion about a text or a budget.',
         'Your partner says whether each is a proportion, a limit or a comparison.',
         'Replace any vague quantity your partner challenges.']),
       ('Who proposed it?',
        ['Describe three changes to a document you have worked on.',
         'Say who proposed each and how you know.',
         'Your partner asks what would settle a dispute about it.']),
       ('Back into brackets',
        ['Argue for two minutes that a phrase was never agreed.',
         'Your partner argues that it was.',
         'Agree what evidence either of you would accept.'])],

ext_title='A change log tells you when a phrase entered a text, and the text does not know who asked for it',
ext_fig=figs.datatable('PARAGRAPH 6 ACROSS FOURTEEN VERSIONS',
                       ['Version', 'Change', 'Attributed to'],
                       [['v4', 'shall to should', 'chair (circulated)'],
                        ['v5', 'should back to shall', 'chair (circulated)'],
                        ['v7', 'where practicable inserted', 'chair (circulated)'],
                        ['v7', 'two further insertions', 'chair (circulated)'],
                        ['v11', 'annex reference added', 'chair (circulated)'],
                        ['all', 'actual proposers', 'not recorded anywhere']]),
ext_fig_cap='Every change correctly dated and placed, and every attribution the same and useless.',
ext=[
 'Comparing fourteen versions of eleven paragraphs by hand is a day’s work and nobody does '
 'it, which is why disputes about when a phrase entered a text are usually settled by whoever '
 'remembers most confidently rather than by evidence.',
 'A system settles them properly. Give it all fourteen files and it will tell you that where '
 'practicable appeared in version 7 along with two other insertions in the same paragraph, and '
 'that shall became should in version 4 and was restored in version 5.',
 'That is genuinely new information in a drafting group, and it changes an argument: a '
 'delegation claiming a phrase was there from the beginning can be shown, with version '
 'numbers, that it arrived on the third day.',
 'Attribution is a different matter entirely. Versions are circulated by a secretariat, so a '
 'log built from the files attributes every change to whoever sent the file, and the real '
 'proposer spoke for forty seconds in a room and is recorded nowhere.',
 'Worse, up to a third of what a drafting group settles is settled outside the text: over '
 'lunch, in a corridor, between four of nine delegations. None of that is in any version, and '
 'the only record is the note an officer makes the same evening, with the names.'],

dp2=('The unwritten understanding', 'Accounts of drafting practice commonly note that '
     'significant parts of a negotiated outcome may be agreed informally among a subset of '
     'delegations and incorporated later, so that the written record of versions does not '
     'reflect when or by whom agreement was reached.',
     'Source: reported multilateral drafting practice, 2025–2026.'),

e_a=[('Why are drafting disputes usually settled badly?', 'by memory rather than evidence'),
     ('What can a log establish?', 'the version in which a phrase appeared'),
     ('How does that change an argument?', 'a claim can be disproved with version numbers'),
     ('Why is attribution wrong in a log?', 'the secretariat circulates every version'),
     ('Where is much of a text actually settled?', 'outside the text, informally')],
e_b=[('Comparing fourteen versions by hand is quick.', 'F'),
     ('A log can date a phrase precisely.', 'T'),
     ('The file sender is the proposer.', 'F'),
     ('Oral proposals appear in the change log.', 'F'),
     ('An officer’s own note may be the only record of authorship.', 'T'),
     ('Some agreement happens over lunch.', 'T')],

w_model='Purpose: so that the delegation can show when each disputed phrase entered the text '
        'and who proposed it. Scope: paragraphs 4 to 8 of the rolling text, versions 1 to 14; '
        'the annexes are tracked separately. Inputs: all 14 circulated versions and the '
        'delegation’s own session notes of 12–15 May. Criteria: every change listed with its '
        'version, paragraph and date; attribution taken only from our session notes, never '
        'from who circulated the file; changes with no recorded proposer marked unattributed. '
        'Done: the log and the attribution table with the head of delegation by 08:00 on 16 '
        'May. Fallback: where a change is unattributed, two delegations present at the session '
        'are asked before the paragraph is reopened.',
w_fig=figs.spec_card('SIX LINES FOR A DRAFTING RECORD',
                     [('Purpose', 'show when a phrase entered and who proposed it'),
                      ('Scope', 'paragraphs 4–8, versions 1–14; annexes separately'),
                      ('Inputs', '14 versions and our own session notes'),
                      ('Criteria', 'version, paragraph, date; attribution only from our notes'),
                      ('Done', 'log and attribution table by 08:00 on 16 May'),
                      ('Fallback', 'unattributed: ask two delegations who were there')]),
w_fig_cap='Line 4 forbids the one inference that makes a change log misleading.',
w_task='Write a six-line tasking for a drafting record.',
w_steps=['Line 1: what the record must let you show.',
         'Line 2: which paragraphs and versions, and what is tracked separately.',
         'Line 3: the versions and your own notes.',
         'Line 4: what each change carries, and where attribution may come from.',
         'Line 5: what is delivered, to whom and when.',
         'Line 6: what is done with an unattributed change.'],
w_bank=['Purpose: so that the delegation can show when … and who … ',
        'Scope: paragraphs … of the rolling text, versions … ; … tracked separately',
        'Inputs: all … circulated versions and our own session notes of … ',
        'Criteria: every change with version, paragraph and date; attribution only from … ',
        'Done: … with … by … . Fallback: where a change is unattributed, … '],
w_check=['Does line 4 forbid attribution from the circulating party?',
         'Are unattributed changes marked as such?',
         'Are your own session notes an input?',
         'Does line 6 say who is asked?'],

t_title='Joint drafting: tracking who proposed what',
t_fig=figs.split('FOURTEEN VERSIONS',
                 'A log can establish',
                 ['the version a phrase entered in',
                  'the date and the paragraph',
                  'changes made and then reversed',
                  'what is still in brackets'],
                 'Only the room establishes',
                 ['which delegation proposed it',
                  'what was agreed over lunch',
                  'who objected and was overruled',
                  'what the chair was asked to insert']),
t_fig_cap='The left column is in the files. The right column is in somebody’s notebook, or nowhere.',
t_body=[
 'Keep every version as a separate file with its number and date, and at the end of a drafting '
 'round ask for a change log across all of them: every insertion, deletion and substitution, '
 'with the version, the paragraph and the date, including changes that were made and later '
 'reversed.',
 'Instruct it explicitly not to attribute changes to whoever circulated the file. A secretariat '
 'circulates every version, so an attribution built that way is both uniform and wrong, and a '
 'wrong attribution in a drafting dispute is worse than an honest blank.',
 'Attribution comes from your own session notes, which is why you take them: one line per '
 'proposal, with the delegation, the paragraph and the words, written in the session and not '
 'that evening. Up to a third of what a group agrees is agreed outside the text, and your note '
 'is the only place it exists.'],
t_say=[('Ask for the log: ', 'List every change across versions 1 to 14, with version, paragraph and date.'),
       ('Forbid the inference: ', 'Do not attribute changes to whoever circulated the version.'),
       ('Ask for the gaps: ', 'Mark every change for which we have no recorded proposer.')],
t_bound='A change log is built from the text. It cannot know that a phrase was proposed '
        'orally, that four delegations settled an annex over lunch, or that the chair was asked '
        'privately to insert something, because none of that is in any version of the document.',
t_a=[('List every change across versions 1 to ____________.', '14'),
     ('With version, paragraph and ____________.', 'date'),
     ('Do not attribute changes to whoever ____________ the version.', 'circulated'),
     ('Mark every change for which we have no recorded ____________.', 'proposer'),
     ('A phrase was proposed ____________.', 'orally'),
     ('Four delegations settled an annex over ____________.', 'lunch')],
t_b_rubric='Say whether each can come from the versions or only from the room.',
t_b=[('Where practicable entered in version 7.', 'the versions: it is textual'),
     ('Lysmark proposed where practicable.', 'the room: nobody typed it'),
     ('Shall became should and was restored.', 'the versions, with both numbers'),
     ('Four delegations agreed the annex at lunch.', 'the room, and only your note has it')],

case=dict(
 title='The Decision Room · Six hundred changes and one phrase nobody owns',
 brief=[
  'A drafting group of nine delegations produces fourteen versions of eleven paragraphs in '
  'four days, absorbing close to six hundred changes, rather more than a third of which are '
  'made, reversed and remade in different words.',
  'On the fourth morning two delegations contend that the phrase where practicable in paragraph '
  '6 was never agreed. A change log across all fourteen versions establishes in minutes that it '
  'entered in version 7, on the Tuesday afternoon, with two other insertions in the same '
  'paragraph.',
  'Because version 7 was circulated by the secretariat, the log puts all three insertions down '
  'to the chair. In fact one delegation proposed them orally in a forty-second intervention, and '
  'the only record of that is a line in one officer’s session notebook.'],
 exhibit=figs.datatable('WHAT THE FILES SHOW AND WHAT THE NOTEBOOK SHOWS',
                        ['Question', 'From the versions', 'From the notebook'],
                        [['when did it enter?', 'version 7, Tuesday', '—'],
                         ['how many insertions?', 'three, same paragraph', '—'],
                         ['who proposed it?', 'chair (circulated)', 'one delegation, orally'],
                         ['who objected?', 'not recorded', 'two delegations, by name'],
                         ['was the annex agreed?', 'still in brackets', 'four delegations, at lunch'],
                         ['reversals in para 6', 'two, v4 and v5', '—']]),
 exhibit_cap='Two columns that answer different questions, and neither is complete on its own.',
 exhibit_note='The log is correct about everything it can see. Its one false statement is the '
              'attribution, and that is the statement the dispute turns on.',
 voices=[('Hala Darwish', 'delegate to the Regional Council',
          'Fourteen versions compared in minutes, and the phrase dated to an afternoon. That ends an argument.'),
         ('Ziad Mikhail', 'commercial attaché',
          'And begins another, because the log says the chair proposed it and the chair did not.'),
         ('Dalia Khoury', 'desk officer, the capital',
          'The notebook is the only document in this case that knows who was in the room.')],
 steps=[('Find it', 'What did the log establish?'),
        ('Compare it', 'The files against the notebook.'),
        ('Infer it', 'Why is the attribution uniform?'),
        ('Weigh it', 'A dated phrase against a false proposer.'),
        ('Decide', 'How does the delegation keep a drafting record?')],
 analysis=[('Find it. What was established?', 'the phrase entered in version 7 on Tuesday'),
           ('Compare it. Files against notebook?', 'the files date changes; the notebook names people'),
           ('Infer it. Why uniform attribution?', 'the secretariat circulated every version'),
           ('Weigh it. What is each worth?', 'the date ends one argument; the attribution starts another'),
           ('Decide. What is the record?', 'a log from the versions and a note from the room')],
 decision='Decide the method, in four lines.',
 decision_steps=['Say what is kept during a drafting round.',
                 'Say what is asked for at the end of it.',
                 'Say where attribution may come from.',
                 'Say what is done about what is agreed outside the text.'],
 bank=['Every circulated version is kept as a separate numbered and dated file.',
       'At the end of each round a change log is produced across all versions, with paragraphs and dates.',
       'Attribution comes only from our own session notes, and changes without a recorded proposer are marked unattributed.',
       'Anything agreed outside the text is written into the rolling text the same day, with the names of those who agreed it.'],
 outcome='Paragraph 6 goes back into brackets on the Thursday afternoon, after two delegations '
         'confirm from their own notes that they objected on Tuesday. The annex agreed at lunch '
         'goes into the rolling text with four names attached, and two of the remaining five '
         'delegations ask for time to consider it, which is better asked on Thursday than on '
         'Friday. The final text carries a footnote of attribution on every disputed phrase.',
 outcome_q=[('What happened to paragraph 6?', 'it went back into brackets'),
            ('What confirmed the objection?', 'two delegations’ own notes'),
            ('How did the annex enter the text?', 'with four names attached'),
            ('What did two delegations ask for?', 'time to consider it'),
            ('What does the final text carry?', 'a footnote of attribution on disputed phrases')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Tell me who put that phrase in',
 task=['A delegate asked for the history of a disputed phrase on the fourth day of drafting.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Tell me who put that phrase in.',
        'Here are the versions.',
        'Go through them all.',
        'Say who proposed each change.',
        'Give me a lot of detail.',
        'Unless it is obvious, skip it.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and line 4 asks for something the versions cannot contain.',
 asked=['Who put it in', 'Who proposed each change', 'A lot of detail'],
 back=['600 changes listed', '600 changes attributed to the chair', '0 marked unattributed'],
 gap='Nobody said that the circulating party is not the proposer, or that blanks are allowed.',
 back_cap='Six hundred changes, every one attributed to the person who pressed send.',
 back_note='Say who proposed each change requires information that exists only in a room and '
           'in a notebook, so the request is satisfied by inference, and an inference from who '
           'circulated the file is uniform, confident and wrong six hundred times.',
 diagnosis=[('“that phrase”', 'ambiguous referent'),
            ('“who proposed each change”', 'ambiguous referent'),
            ('“a lot of detail”', 'unbounded quantity'),
            ('“go through them all”', 'unbounded quantity'),
            ('“unless it is obvious”', 'unstated exception'),
            ('“skip it”', 'unstated exception')],
 rewrite='Rewrite it on the six lines so that attribution is not invented.',
 scaffold=['why the record is wanted and what it must let you show',
           'which paragraphs and versions, and what is tracked separately',
           'the versions and your own session notes',
           'what each change carries, and the one source attribution may use',
           'what is delivered, to whom and when',
           'what is done with a change nobody can attribute'],
 bank=['Purpose: so that the delegation can show when each disputed phrase entered and who proposed it',
       'Scope: paragraphs … , versions … ; annexes tracked separately',
       'Inputs: all … versions and our session notes of … ',
       'Criteria: version, paragraph and date for every change; attribution only from our notes',
       'Done: the log and attribution table with … by … ',
       'Fallback: where a change is unattributed, two delegations present are asked before reopening'],
 check=['Does it forbid attribution from the circulating party?',
        'Are unattributed changes to be marked?',
        'Are the delegation’s own notes named as the source?',
        'Is there a rule before a paragraph is reopened?'],
 model=['so that the delegation can show when each disputed phrase entered the text and who proposed it',
        'paragraphs 4 to 8 of the rolling text, versions 1 to 14; the annexes tracked separately',
        'all 14 circulated versions and the delegation’s own session notes of 12–15 May',
        'every change with version, paragraph and date; attribution only from our session notes',
        'the log and the attribution table with the head of delegation by 08:00 on 16 May',
        'where a change is unattributed, 2 delegations present are asked before the paragraph is reopened'],
 cost='600 changes were attributed to 1 person who proposed none of them. 1 forbidden '
      'inference would have left 600 honest blanks.'),

feet=dict(
 title='On Your Feet · The chair asks you to withdraw an objection you never made',
 setting=[
  'It is the fourth afternoon. The chair, moving briskly through paragraph 6, says that your '
  'delegation objected to the phrase where practicable on Tuesday and asks whether you are now '
  'content to withdraw that objection so the paragraph can close.',
  'You did not object on Tuesday; two other delegations did. Your own position on the phrase is '
  'that it weakens the paragraph, but you have not yet raised it, and you have no instruction '
  'to close paragraph 6 today.'],
 ladder=[('You objected on Tuesday', 'the record that is wrong about you'),
         ('Then you have no difficulty', 'the inference drawn from your correction'),
         ('I shall close the paragraph', 'the closure you must stop without being obstructive')],
 cap='Three turns in a drafting group of nine, with the chair moving fast.',
 turns=[('Turn 1 · The chair', 'Your delegation objected to where practicable on Tuesday. Will you withdraw the objection?'),
        ('Turn 2 · The chair', 'If it was not your objection, then you have no difficulty with the phrase.'),
        ('Turn 3 · The chair', 'Very well. I shall take paragraph 6 as agreed and we move to paragraph 7.')],
 holds=['With respect, the objection on Tuesday was not ours, and I would not want the record to say it was.',
        'It does not follow that we are content: we have not stated a position on the phrase.',
        'Our position is that the phrase weakens the paragraph, and I am not instructed to agree it today.',
        'I would ask that paragraph 6 remain in brackets, and that the two delegations concerned be heard.',
        'I am not trying to delay the group; I am trying not to agree something I was not asked to agree.',
        'If it assists, we can state our position on the phrase in writing before tomorrow morning.'],
 redline='You must not accept an objection you did not make, you must not let silence be '
         'taken as agreement, and you must not agree to close a paragraph without an '
         'instruction. Do not correct the record in a way that concedes the substance.',
 score=['Corrected the attribution without arguing about it.',
        'Blocked the inference that correction equals contentment.',
        'Stated the delegation’s own position on the phrase.',
        'Asked for brackets and for the two delegations to be heard.',
        'Offered something constructive instead of a bare refusal.'],
 a=[('What do you correct first?', 'that the objection was not yours'),
    ('What inference must you block?', 'that you therefore have no difficulty'),
    ('What is your own position?', 'that the phrase weakens the paragraph'),
    ('What do you ask for?', 'that the paragraph stay in brackets'),
    ('Who should be heard?', 'the two delegations that objected'),
    ('What do you offer?', 'a written position before the morning')]),

rev_fig=figs.split('A DRAFTING ROUND',
                   'From the versions',
                   ['every change, dated and placed',
                    'reversals and reinstatements',
                    'what is still in brackets',
                    'the version a phrase entered in'],
                   'From your notebook',
                   ['which delegation proposed it',
                    'who objected and when',
                    'what four delegations settled at lunch',
                    'what the chair was asked to insert']),
rev_fig_cap='Keep both. A log without a notebook attributes everything to whoever pressed send.',
rev=dict(
 read=[('How many versions were there?',
        ['fourteen', 'seven', 'nine', 'eleven'], 0),
       ('Where did where practicable enter?',
        ['version 7', 'version 4', 'version 11', 'version 1'], 0),
       ('Why did the log name the chair?',
        ['the secretariat circulated the version', 'the chair drafted it',
         'the chair said so', 'the delegations agreed'], 0),
       ('Where was the annex agreed?',
        ['over lunch, between four delegations', 'in plenary',
         'in version 11', 'in a footnote'], 0)],
 listen_text='Ask for a change log across every version, with the version, paragraph and date '
             'of each change. Forbid attribution to whoever circulated the file, and ask for '
             'every change with no recorded proposer to be marked unattributed.',
 listen=[('Ask for a change ____________ across every version.', 'log'),
         ('With the version, paragraph and ____________.', 'date'),
         ('Forbid attribution to whoever ____________ the file.', 'circulated'),
         ('Mark changes with no recorded proposer as ____________.', 'unattributed')],
 speak=['Make nine statements of degree and proportion, each with a figure or a limit.',
        'Then argue for two minutes that a phrase in a text was never agreed.'],
 write='Write a six-line tasking for a drafting record.',
 vocab=[('The mark showing wording is not yet agreed is a square ____________.', 'bracket'),
        ('A document revised repeatedly is a ____________ text.', 'rolling'),
        ('A list of what altered between versions is a change ____________.', 'log'),
        ('A version produced by the chair alone is a ____________ text.', 'chair’s')],
 gram=[('Half ____________ the paragraphs are now agreed.', 'of'),
       ('The annex was shortened ____________ 20 per cent.', 'by'),
       ('There were ____________ fewer than nine delegations present.', 'no'),
       ('We may sit ____________ to four hours on Friday.', 'up')]),

found=['Keep every circulated version as a numbered, dated file.',
       'Take one line of notes per proposal, with the delegation and the words.',
       'Never let a log attribute a change to whoever circulated the file.',
       'Write what was agreed at lunch into the rolling text the same day, with names.'],
end_line='The files know when. Only your notebook knows who.',
end_next='Next: Reporting a Negotiation Honestly')
