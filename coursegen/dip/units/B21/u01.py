# -*- coding: utf-8 -*-
import figs

U = dict(
num=1,
title='Instructions From the Capital',
gram='modals of deduction: must, may, might, cannot',
ai='turning an instruction into a position you can hold',
strap='CEFR B2 · Grammar: modals of deduction: must, may, might, cannot · '
      'AI: turning an instruction into a position you can hold',
cando=['deduce and express degrees of certainty with must, may, might and cannot',
       'distinguish an instruction from a position and a position from a script',
       'identify the interest that lies behind an instruction',
       'say why a confident restatement of an instruction is dangerous',
       'write a six-line negotiating position from an instruction'],

hero=('AN INSTRUCTION OF ELEVEN LINES AND A POSITION OF NINETY',
      ['The capital wrote eleven lines, of which four were about tone.',
       'The system produced a position that answered questions nobody had asked.'],
      [(720, 'teal', 'long'), (720, 'grey', 'short'), (720, 'blue', 'short')]),
hero_cap='A delegate’s desk in Rhene on a Sunday evening, two days before a negotiation opens.',

warm=['What is the difference between being told what to achieve and being told what to say?',
      'How do you work out what your own capital actually wants?',
      'When is it right to ask for a new instruction rather than interpret an old one?'],

read=[
 'An instruction is the shortest document in diplomacy and the one on which everything '
 'rests. It states what the capital wants, what it will not accept, and occasionally, if '
 'the desk officer has had time, why. The third of these is worth more than the other two '
 'together, and it is the one most often missing.',
 'Hala Darwish has eleven lines for a negotiation that will run for three days. Four of the '
 'eleven concern tone. Two state outcomes that must be secured. Three state outcomes that '
 'cannot be accepted. The remaining two say that she should use her judgement, which is '
 'either generous or evasive depending on how the week goes.',
 'An instruction is not a position. A position is what the delegation says in the room, in '
 'its own words, at a level of detail the instruction never reaches. Converting the one '
 'into the other is the work, and it cannot be done by expanding the words.',
 'On Sunday she gives the instruction to a system and asks for a full negotiating position. '
 'Ninety lines come back in four minutes, organised by article, fluent and internally '
 'consistent, covering every clause of the draft text including eleven the instruction '
 'never mentions.',
 'Every one of the ninety lines is plausible. Perhaps sixty follow from the instruction. '
 'The rest are reasonable inventions, written in the same confident register, and in a room '
 'at ten the next morning there is no way to tell the two apart.'],

dp1=('Why instructions carry a reason', 'Negotiating practice commonly requires that an '
     'instruction state the interest behind the position as well as the position itself, '
     'because a delegate who knows the interest can protect it when the text moves and a '
     'delegate who knows only the words cannot.',
     'Source: reported negotiating practice, 2025–2026.'),

c_a=[('How long is the instruction?', 'eleven lines'),
     ('How many lines concern tone?', 'four'),
     ('What is the third thing an instruction should state?', 'why the capital wants it'),
     ('What is the difference between an instruction and a position?',
      'a position is what is said in the room, in far more detail'),
     ('How many lines did the system produce?', 'ninety'),
     ('How many of them follow from the instruction?', 'perhaps sixty')],

c_b=[('An instruction is a long document.', 'F'),
     ('The reason behind an instruction is often missing.', 'T'),
     ('A position is simply the instruction expanded.', 'F'),
     ('The ninety lines were internally inconsistent.', 'F'),
     ('All ninety followed from the instruction.', 'F'),
     ('The invented lines were written in a different register.', 'F')],

c_c=[('They ____________ have intended the clause to cover transit, given the context.', 'must'),
     ('The capital ____________ accept a reference to arbitration, but we have no authority.', 'may'),
     ('There ____________ be a reason for the deadline, although none is stated.', 'must'),
     ('This ____________ be what they meant; the wording rules it out entirely.', 'cannot'),
     ('They ____________ have seen the second draft before writing to us.', 'might'),
     ('The desk ____________ not have known about the amendment when it wrote.', 'can')],

c_d=[('Must, in deduction, expresses ( obligation / near certainty ).', ['obligation', 'near certainty'], 1),
     ('Cannot, in deduction, expresses ( impossibility / prohibition ).',
      ['impossibility', 'prohibition'], 0),
     ('A position differs from an instruction mainly in ( detail / tone ).',
      ['detail', 'tone'], 0),
     ('The ninety lines were ( fluent and partly invented / badly written ).',
      ['fluent and partly invented', 'badly written'], 0),
     ('The most valuable part of an instruction is ( the reason / the wording ).',
      ['the reason', 'the wording'], 0)],

c_e=('Which modal of deduction? Put each sentence in the right column.',
     [('They must have intended transit.', 'near certainty'),
      ('They may accept arbitration.', 'possibility'),
      ('They might have seen the draft.', 'weaker possibility'),
      ('That cannot be what they meant.', 'impossibility'),
      ('There must be a reason.', 'near certainty'),
      ('The desk cannot have known.', 'impossibility')],
     ['near certainty', 'possibility', 'weaker possibility', 'impossibility']),

v_fig_title='FROM AN INSTRUCTION TO A POSITION',
v_fig=[('doc', 'a mandate letter'), ('key', 'a red line'), ('chart', 'a fallback position'),
       ('people', 'a core interest'), ('clock', 'a sequencing of concessions'), ('door', 'an escalation to capital')],
v_fig_cap='Six words for the distance between eleven lines and three days in a room.',

vocab=[
 ('an instruction', 'the capital’s written statement of what a delegation is to achieve'),
 ('a negotiating position', 'what a delegation says and defends in the room'),
 ('a fallback position', 'what is offered if the opening position cannot be sustained'),
 ('a red line', 'a point beyond which a delegation may not go at all'),
 ('a bottom line', 'the least acceptable outcome overall'),
 ('a mandate letter', 'the document conferring authority to negotiate'),
 ('a flexibility', 'an area in which movement is permitted'),
 ('a tradeable point', 'something a delegation may give in exchange for something else'),
 ('a core interest', 'the underlying objective a position exists to protect'),
 ('a reservation', 'a formal statement that a party does not accept a provision'),
 ('an opening position', 'what a delegation states first, before any movement'),
 ('a concession', 'something given up in order to obtain something else'),
 ('a package', 'a set of items negotiated together rather than separately'),
 ('a linkage', 'a connection made between two otherwise separate issues'),
 ('a sequencing of concessions', 'the order in which movement is offered'),
 ('a negotiating brief', 'the internal paper preparing a delegation for talks'),
 ('an escalation to capital', 'the referral of a question beyond a delegation’s authority'),
 ('a scope note', 'a statement of what a negotiation does and does not cover'),
 ('a defensive point', 'an argument prepared against an expected attack'),
 ('an interest behind a position', 'the reason a party wants what it says it wants')],

v_a=[('A point beyond which a delegation may not go is a ____________.', 'red line'),
     ('The underlying objective a position protects is a ____________ interest.', 'core'),
     ('The order in which movement is offered is a ____________ of concessions.', 'sequencing'),
     ('The referral of a question beyond authority is an ____________ to capital.', 'escalation'),
     ('An argument prepared against an expected attack is a ____________ point.', 'defensive'),
     ('A connection made between two separate issues is a ____________.', 'linkage'),
     ('The document conferring authority to negotiate is a ____________ letter.', 'mandate'),
     ('A statement of what a negotiation covers is a ____________ note.', 'scope')],

v_b=[('A fallback position is what is offered', 'if the opening position cannot be sustained.'),
     ('A reservation is a formal statement that a party', 'does not accept a provision.'),
     ('A package is a set of items negotiated together', 'rather than separately.'),
     ('A tradeable point is something a delegation may give', 'in exchange for something else.'),
     ('An interest behind a position is the reason', 'a party wants what it says it wants.')],

g_title='Grammar: modals of deduction: must, may, might, cannot',
g_rule=['must + infinitive: you are nearly certain. They must have seen the draft.',
        'may and might + infinitive: it is possible; might is slightly weaker.',
        'cannot + infinitive: you are nearly certain it is false. That cannot be what they meant.',
        'For the past, add have + past participle: must have known, cannot have known.'],
g_fig=('OVERSTATED OR WRONG',
       ['They have certainly seen the second draft.',
        'It is impossible that the desk knew.',
        'Maybe they will accept arbitration, maybe not.',
        'That is definitely not what they meant.'],
       'PROPERLY GRADED',
       ['They must have seen the second draft.',
        'The desk cannot have known.',
        'They may accept a reference to arbitration.',
        'That cannot be what they meant.'],
       'four judgements stated as facts',
       'the same four, graded by how sure you are'),
g_fig_cap='A delegate who grades certainty correctly is believed on the one occasion it matters.',

g_a=[('They ____________ have intended the clause to cover transit.', 'must'),
     ('The capital ____________ accept arbitration, but we have no authority to offer it.', 'may'),
     ('There ____________ be a reason for the deadline, although none is stated.', 'must'),
     ('That ____________ be what they meant; the wording excludes it.', 'cannot'),
     ('They ____________ have seen the second draft before writing.', 'might'),
     ('The desk ____________ have known about the amendment; it was published later.', 'cannot'),
     ('He ____________ be new; he asked which article we were on.', 'must'),
     ('The chair ____________ propose a break, if the text does not move.', 'may'),
     ('They ____________ have decided already, but I doubt it.', 'might')],

g_b=[('They ( must have seen / must saw ) the draft.', ['must have seen', 'must saw'], 0),
     ('That ( cannot be / must not be ) what they meant — it is excluded.',
      ['cannot be', 'must not be'], 0),
     ('They ( may accept / may to accept ) arbitration.', ['may accept', 'may to accept'], 0),
     ('The desk ( cannot have known / could not knew ).',
      ['cannot have known', 'could not knew'], 0),
     ('He ( must be / must being ) new.', ['must be', 'must being'], 0),
     ('They ( might have decided / might decided ) already.',
      ['might have decided', 'might decided'], 0)],

d1=dict(
 title='Sixty of ninety',
 fig=(['Ninety lines in four minutes.', 'And how many are instructed?'],
      ['About sixty.', 'Which sixty?']),
 cap='Hala Darwish and Dalia Khoury, by telephone on the Sunday evening.',
 lines=[('Hala', 'I have a full position. Ninety lines, article by article.'),
        ('Dalia', 'From eleven lines of instruction?'),
        ('Hala', 'From eleven lines and a draft text and a great deal of fluency.'),
        ('Dalia', 'How many of the ninety follow from what we told you?'),
        ('Hala', 'About sixty.'),
        ('Dalia', 'Which sixty?'),
        ('Hala', 'That is precisely the problem. They are written in the same voice.'),
        ('Dalia', 'Then it is not a position. It is a draft of a position that needs marking up.'),
        ('Hala', 'I am marking it now. Instructed, inferred, invented.'),
        ('Dalia', 'And send me the inferred ones. If the inference is right, I would rather instruct it.'),
        ('Hala', 'And the invented ones?'),
        ('Dalia', 'Keep them. Some of them may be better than anything we wrote on Friday.')],
 a=[('How many lines did the position have?', 'ninety'),
    ('How long is the instruction?', 'eleven lines'),
    ('How many follow from the instruction?', 'about sixty'),
    ('What is the problem?', 'they are all written in the same voice'),
    ('What three labels does Hala use?', 'instructed, inferred, invented')],
 b=[('They are written in the same ____________.', 'voice'),
    ('A draft of a position that needs ____________ up.', 'marking'),
    ('If the inference is right, I would rather ____________ it.', 'instruct'),
    ('Some of them ____________ be better than what we wrote.', 'may')]),

d2=dict(
 title='What is the instruction for?',
 fig=(['It says secure a reference to transit.', 'Why do we want it?'],
      ['It does not say.', 'Then you cannot defend it when the text moves.']),
 cap='Hala and Ambassador Walid Hourani, reviewing the instruction.',
 lines=[('Hourani', 'What does the instruction require on transit?'),
        ('Hala', 'A reference to transit in article 4.'),
        ('Hourani', 'And why does the capital want it in article 4?'),
        ('Hala', 'The instruction does not say.'),
        ('Hourani', 'Then on Wednesday, when the chair proposes moving it to a protocol, what do you do?'),
        ('Hala', 'If I know why, I can judge whether the protocol protects it.'),
        ('Hourani', 'And if you do not know why, you defend a location rather than an interest.'),
        ('Hala', 'And lose the interest while winning the article.'),
        ('Hourani', 'Which is the commonest way a delegation fails while appearing to succeed.'),
        ('Hala', 'I shall ask for the reason before Tuesday.'),
        ('Hourani', 'Ask tonight. A reason given on Tuesday is already an argument about Wednesday.'),
        ('Hala', 'And if the desk cannot say, because nobody at home remembers either?')],
 unresolved=True,
 a=[('What does the instruction require?', 'a reference to transit in article 4'),
    ('What does it not say?', 'why the capital wants it there'),
    ('What might the chair propose?', 'moving it to a protocol'),
    ('What happens without the reason?', 'the delegate defends a location, not an interest'),
    ('When should Hala ask?', 'tonight')],
 b=[('You defend a ____________ rather than an interest.', 'location'),
    ('Lose the interest while ____________ the article.', 'winning'),
    ('Failing while appearing to ____________.', 'succeed'),
    ('Ask ____________.', 'tonight')]),

speak=[('Grade your certainty',
        ['Make ten deductions about a situation your partner describes.',
         'Use must, may, might and cannot, and justify the grade each time.',
         'Your partner challenges any grade that seems too strong.']),
       ('Instruction into position',
        ['Your partner gives you a three-line instruction.',
         'Build an opening position aloud, marking each element as instructed or inferred.',
         'Say which inference you would ask the capital to confirm.']),
       ('What is it for?',
        ['Name four things your organisation insists on.',
         'For each, say what interest lies behind it.',
         'Decide which you could protect by a different means entirely.'])],

ext_title='An instruction gives you an outcome; only the reason behind it lets you defend it when the text moves',
ext_fig=figs.datatable('ELEVEN LINES, NINETY LINES',
                       ['Element of the position', 'Source', 'Status'],
                       [['transit reference in article 4', 'instruction', 'instructed'],
                        ['no reference to arbitration', 'instruction', 'instructed'],
                        ['fallback: transit in a protocol', 'inference', 'to be confirmed'],
                        ['language on review after 5 years', 'invention', 'plausible, unauthorised'],
                        ['position on 11 further clauses', 'invention', 'plausible, unauthorised'],
                        ['the reason for any of it', 'nowhere', 'missing']]),
ext_fig_cap='Two instructed elements, one sensible inference, and a great deal of fluent invention.',
ext=[
 'The instruction is the hinge of the whole system. A capital that cannot write a clear one '
 'sends a delegation into a room with nothing to hold, and a delegation that cannot read '
 'one carefully converts ambiguity into commitment at a speed nobody intended.',
 'What an instruction gives is an outcome: secure this, resist that, do not accept the '
 'other. What it usually fails to give is the interest behind the outcome, and the interest '
 'is what a delegate actually needs, because the text will not stay where it was when the '
 'instruction was written.',
 'Turning an instruction into a position is therefore interpretation, and a drafting system '
 'is very good at it in the way that is most dangerous. Given eleven lines and a draft '
 'treaty it produces ninety lines of coherent, well-ordered, fluent position in minutes.',
 'Roughly two-thirds of those lines will follow from the instruction. The remaining third '
 'will be reasonable extensions of it, invented to fill clauses the capital never '
 'considered, and written in exactly the same confident register as the instructed parts.',
 'The remedy is mechanical and takes twenty minutes. Mark every line as instructed, '
 'inferred or invented. Send the inferred list to the capital and ask for confirmation. '
 'Keep the invented list for yourself, and never say any of it in a room as though it were '
 'the position of a government.'],

dp2=('Marking the provenance of a position', 'Delegation practice commonly requires each '
     'element of a negotiating position to be traceable to an instruction, with inferred '
     'elements identified and referred for confirmation before they are stated in a '
     'negotiation.',
     'Source: reported negotiating practice, 2025–2026.'),

e_a=[('What does an instruction give?', 'an outcome to secure or resist'),
     ('What does it usually fail to give?', 'the interest behind the outcome'),
     ('Why does the interest matter?', 'the text will move from where it was'),
     ('What proportion of the generated position follows from the instruction?', 'about two-thirds'),
     ('What are the three labels?', 'instructed, inferred and invented')],
e_b=[('A clear instruction is easy to write.', 'F'),
     ('The interest behind a position is usually stated.', 'F'),
     ('A generated position is internally consistent.', 'T'),
     ('Invented lines are written in a weaker register.', 'F'),
     ('Marking provenance takes about twenty minutes.', 'T'),
     ('Inferred elements may be stated without confirmation.', 'F')],

w_model='Purpose: so that the delegation can state a position in the room and know, for each '
        'element, what authorises it. Scope: articles 1 to 9 of the draft text; the '
        'financial annex is instructed separately. Inputs: the instruction of 14 January and '
        'the draft text of 2 January. Criteria: 6 lines, each marked instructed, inferred or '
        'invented, with the instruction paragraph cited for each instructed line. Done: 6 '
        'lines cleared with the capital by 09:00 on 16 January. Fallback: an inferred line '
        'that is not confirmed is not stated in the room and is held as a fallback only.',
w_fig=figs.spec_card('SIX LINES WITH THEIR PROVENANCE',
                     [('Purpose', 'state a position and know what authorises each part'),
                      ('Scope', 'articles 1 to 9; financial annex separate'),
                      ('Inputs', 'the instruction of 14 January, the draft of 2 January'),
                      ('Criteria', 'each line marked instructed, inferred or invented'),
                      ('Done', 'cleared with the capital by 09:00 on 16 January'),
                      ('Fallback', 'unconfirmed inference is held, not stated')]),
w_fig_cap='A position whose provenance is marked can be defended at three in the afternoon on day three.',
w_task='Write a six-line negotiating position from a short instruction.',
w_steps=['Line 1: the outcome the capital requires, quoted from the instruction.',
         'Line 2: the interest behind it, if stated; if not, say not stated.',
         'Line 3: the opening position, in the words you will use.',
         'Line 4: the fallback, and what it protects.',
         'Line 5: the red line, in one sentence.',
         'Line 6: the inferred elements that need confirmation, listed.'],
w_bank=['Instruction, paragraph 3: “secure a reference to transit in article 4”.',
        'Interest: not stated; requested from the desk on … .',
        'Opening: the delegation will seek … .',
        'Fallback: a protocol reference, provided that … .',
        'For confirmation: whether a protocol reference satisfies paragraph 3.'],
w_check=['Is every instructed line quoted, not paraphrased?',
         'Does line 2 say not stated where it is not stated?',
         'Does the fallback say what it protects, not only what it concedes?',
         'Is the list in line 6 genuinely short?'],

t_title='Turning an instruction into a position you can hold',
t_fig=figs.split('ELEVEN LINES AND A DRAFT TEXT',
                 'Ask the system for this',
                 ['a first draft position, article by article',
                  'every clause the instruction does not cover',
                  'the questions the instruction leaves open',
                  'arguments the other side will make'],
                 'Do this yourself',
                 ['mark each line instructed, inferred or invented',
                  'ask the capital for the reason behind each outcome',
                  'decide what you will not say without authority',
                  'choose the sequence of concessions']),
t_fig_cap='The generation is four minutes. The marking is twenty, and it is the position.',
t_body=[
 'Ask for the draft, and ask explicitly for the list of clauses on which the instruction is '
 'silent. That second list is the valuable one: it is the map of everything you will be '
 'asked about in the room and have no authority to answer, and it can be sent to the '
 'capital on Sunday night rather than discovered on Wednesday afternoon.',
 'Then mark the draft line by line. Instructed, where a paragraph of the instruction can be '
 'cited. Inferred, where it follows but is not stated. Invented, where it is a reasonable '
 'position that nobody has authorised. The three categories look identical on the page, '
 'which is exactly why they must be written on it.',
 'And ask the capital one question that instructions rarely answer: what is this for? A '
 'delegate who knows the interest can accept a different article, a protocol or a '
 'declaration and still protect it. A delegate who knows only the words will defend the '
 'words, win them, and lose the thing the words were there to secure.'],
t_say=[('Ask for the gaps: ', 'List every clause on which my instruction is silent.'),
       ('Mark the provenance: ', 'Instructed, inferred, invented — line by line.'),
       ('Ask for the interest: ', 'What is the reference in article 4 intended to protect?')],
t_bound='A drafting system cannot distinguish what your capital has authorised from what '
        'follows plausibly from it, because both are consistent with the same eleven lines. '
        'It writes authority and invention in one register, and the page does not show which '
        'is which.',
t_a=[('List every clause on which my instruction is ____________.', 'silent'),
     ('Instructed, ____________, invented.', 'inferred'),
     ('What is the reference in article 4 intended to ____________?', 'protect'),
     ('Both are consistent with the same eleven ____________.', 'lines'),
     ('It writes authority and invention in one ____________.', 'register'),
     ('A delegate who knows only the words will defend the ____________.', 'words')],
t_b_rubric='Say how each element should be marked, and what follows.',
t_b=[('A reference to transit in article 4.', 'instructed: cite the paragraph and state it'),
     ('A protocol reference as a fallback.', 'inferred: ask the capital before offering it'),
     ('Language on review after five years.', 'invented: hold it, do not state it'),
     ('Resistance to any arbitration clause.', 'instructed, if the instruction says so in terms')],

case=dict(
 title='The Decision Room · The sentence nobody had authorised',
 brief=[
  'A delegation arrives in Rhene with an eleven-line instruction and a position of ninety '
  'lines produced over the weekend. The position is coherent, well ordered and covers every '
  'article of the draft text, including eleven on which the instruction is silent.',
  'On the second morning the chair asks each delegation for its view on article 12, a '
  'review clause the capital has never considered. The delegation states the position '
  'prepared for it, which is sensible, moderate and entirely unauthorised.',
  'The statement is recorded in the chair’s summary as the delegation’s position. On the '
  'third day another delegation builds a compromise on it. By the time the capital sees the '
  'summary, the sentence has become a building block of the draft.'],
 exhibit=figs.datatable('WHERE EACH ELEMENT CAME FROM',
                        ['Element', 'Instruction', 'Stated in the room', 'Recorded as'],
                        [['transit in article 4', 'paragraph 3', 'yes', 'our position'],
                         ['no arbitration', 'paragraph 5', 'yes', 'our position'],
                         ['protocol fallback', 'inference', 'yes', 'our position'],
                         ['article 12 review clause', 'silent', 'yes', 'our position'],
                         ['articles 13 to 23', 'silent', 'partly', 'our position'],
                         ['the reason for any of it', 'not stated', '—', '—']]),
 exhibit_cap='Two instructed elements and four that the capital had never seen, all recorded identically.',
 exhibit_note='Nothing stated was unreasonable, and the delegation believed every word of '
              'it. The chair’s summary records positions, not provenance, and no summary '
              'anywhere distinguishes an instructed sentence from a well-drafted guess.',
 voices=[('Hala Darwish', 'delegate to the Regional Council',
          'Ninety lines by Sunday night. Without it I would have had nothing to say on article 12 at all.'),
         ('Dalia Khoury', 'desk officer',
          'And nothing to say would have been the correct position, because we had not decided.'),
         ('Ambassador Walid Hourani', 'head of mission',
          'The failure is ours at both ends: eleven lines from the capital, ninety from a machine, and no marking in between.')],
 steps=[('Find it', 'Which stated elements had no instruction behind them?'),
        ('Compare it', 'How were instructed and unauthorised elements recorded?'),
        ('Infer it', 'Why did the delegation state the article 12 position at all?'),
        ('Weigh it', 'Twenty minutes of marking against a compromise built on an unauthorised sentence.'),
        ('Decide', 'What may be stated in a room, and what must be held?')],
 analysis=[('Find it. Which elements were unauthorised?', 'the article 12 position and the later articles'),
           ('Compare it. How were they recorded?', 'identically, as the delegation’s position'),
           ('Infer it. Why were they stated?', 'they were in the prepared position and read exactly like the rest'),
           ('Weigh it. What followed?', 'another delegation built a compromise on the sentence'),
           ('Decide. What must be held?', 'anything inferred or invented, until the capital confirms it')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say how each element of a position is marked.',
                 'Say what may be stated in a negotiation.',
                 'Say what is done with clauses on which the instruction is silent.',
                 'Say what the delegation asks the capital for, and when.'],
 bank=['Every element of a position is marked instructed, inferred or invented.',
       'Only instructed and confirmed elements are stated as the position of the delegation.',
       'Clauses on which the instruction is silent are listed and sent to the capital before talks open.',
       'The delegation asks for the interest behind each instructed outcome, not only the outcome.'],
 outcome='The delegation tells the chair on the fourth morning that its article 12 '
         'intervention was made without instruction and asks that the summary record the '
         'position as preliminary. The chair agrees, with some amusement and no difficulty. '
         'From that negotiation the delegation marks every line of every position, sends the '
         'silent-clause list to the capital before talks open, and asks, each time, what the '
         'instructed outcome is for.',
 outcome_q=[('What did the delegation tell the chair?', 'that the intervention was made without instruction'),
            ('How did the chair respond?', 'with agreement and some amusement'),
            ('What is marked on every position now?', 'whether each line is instructed, inferred or invented'),
            ('What is sent before talks open?', 'the list of clauses on which the instruction is silent'),
            ('What does the delegation now ask for?', 'the interest behind each outcome')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Prepare our position for the negotiation',
 task=['A delegation had eleven lines of instruction and three days of talks ahead.',
       'This is the instruction as it was given, and the position that was prepared from it.'],
 draft=['Prepare our position for the negotiation.',
        'Cover the main articles.',
        'Follow the instruction.',
        'Be ready for anything they raise.',
        'Keep it manageable.',
        'Have it ready before we open.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them distinguishes what we were told from what we worked out.',
 asked=['A position', 'The main articles', 'Ready for anything'],
 back=['90 lines', '30 with no instruction behind them', '0 marked'],
 gap='Nobody said that each element must be traceable, or what may be said without authority.',
 back_cap='Ninety lines of position, thirty of them unauthorised, and nothing on the page to show which.',
 back_note='Be ready for anything they raise is the line that produces a position on every '
           'article, including the eleven the capital has never considered.',
 diagnosis=[('“the main articles”', 'unstated exception'),
            ('“be ready for anything”', 'unstated exception'),
            ('“our position”', 'unscoped set'),
            ('“follow the instruction”', 'unscoped set'),
            ('“keep it manageable”', 'unbounded quantity'),
            ('“before we open”', 'unbounded quantity')],
 rewrite='Rewrite it on the six lines so that nothing unauthorised can be stated as a position.',
 scaffold=['why the position is needed and who will state it',
           'which articles are covered and which are instructed separately',
           'which documents the position may be drawn from',
           'how each element is marked and what may be stated',
           'how long it is and when it is cleared',
           'what is done with clauses the instruction does not cover'],
 bank=['Purpose: so that the delegation can state a position and know what authorises each part',
       'Scope: articles … to … ; the … annex is instructed separately',
       'Inputs: the instruction of … and the draft text of … ; no other source',
       'Criteria: each line marked instructed, inferred or invented, with the paragraph cited',
       'Done: … lines cleared with the capital by … ',
       'Fallback: clauses on which the instruction is silent are listed and referred before talks open'],
 check=['Is every instructed line required to cite a paragraph?',
        'Does it say what may be stated in the room?',
        'Are silent clauses handled explicitly?',
        'Is there a clearance deadline?'],
 model=['so that the delegation can state a position and know what authorises each part',
        'articles 1 to 9 of the draft; the financial annex is instructed separately',
        'the instruction of 14 January and the draft text of 2 January; no other source',
        'each line marked instructed, inferred or invented, citing the instruction paragraph where it exists',
        '6 lines cleared with the capital by 09:00 on 16 January',
        'clauses on which the instruction is silent are listed and sent to the capital before talks open'],
 cost='30 unmarked lines produced 1 unauthorised position in a chair’s summary and 1 '
      'compromise built on it. Marking 90 lines takes about 20 minutes.'),

feet=dict(
 title='On Your Feet · The chair asks for your position on article 12',
 setting=[
  'It is the second morning. The chair is going round the table article by article, which '
  'nobody expected, and has reached article 12, a review clause on which your instruction '
  'is entirely silent. Eleven delegations are waiting and the note-takers are writing.',
  'You have a prepared paragraph on article 12 in front of you, drafted at the weekend, '
  'moderate and sensible. You have no authority for it. You have about ninety seconds, and '
  'saying nothing is also a position.'],
 ladder=[('Your position, please', 'decline to state without authority'),
         ('A preliminary view?', 'the softer formulation that binds just as much'),
         ('Everyone else has', 'the pressure of the table')],
 cap='Three turns at a table of eleven, with a summary being written in real time.',
 turns=[('Turn 1 · Chair', 'And the position of your delegation on article 12?'),
        ('Turn 2 · Chair', 'A preliminary view would be helpful at this stage.'),
        ('Turn 3 · Chair', 'Every other delegation has spoken. Surely you have something.')],
 holds=['My delegation is not in a position to state a view on article 12 this morning.',
        'I would rather be silent than state something I cannot stand behind on Thursday.',
        'I can say what we would need to know before taking a view.',
        'We would want to understand how article 12 interacts with article 4.',
        'I will seek instructions today and come back to the chair tomorrow morning.',
        'I ask that the summary record that my delegation reserved its position.'],
 redline='You must not state a view you have no authority for, you must not give a '
         'preliminary view that will be recorded as a position, and you must not say that '
         'your capital has not thought about it. Do not let the summary record silence as '
         'agreement.',
 score=['Declined clearly, in the first sentence, without apology.',
        'Refused the preliminary framing, which binds in a summary exactly as a position does.',
        'Gave something genuinely useful: what you would need to know.',
        'Committed to returning with instructions, with a time.',
        'Asked for the reservation to be recorded in the summary.'],
 a=[('What do you say first?', 'that you are not in a position to state a view'),
    ('Why refuse a preliminary view?', 'it is recorded exactly as a position is'),
    ('What can you offer instead?', 'what you would need to know before taking a view'),
    ('What do you commit to?', 'seeking instructions and returning tomorrow'),
    ('What must you not reveal?', 'that your capital has not considered it'),
    ('What must the summary record?', 'that your delegation reserved its position')]),

rev_fig=figs.split('A NEGOTIATING POSITION',
                   'Must not be stated',
                   ['An inference nobody has confirmed.',
                    'A clause the instruction never mentions.',
                    'A preliminary view on anything uninstructed.',
                    'A fallback not yet authorised.'],
                   'May be stated',
                   ['An outcome quoted from the instruction.',
                    'A confirmed inference, cleared by the desk.',
                    'What we would need to know before taking a view.',
                    'A reservation, recorded in the summary.']),
rev_fig_cap='Everything on the right can be defended on Thursday by somebody who was not there on Tuesday.',
rev=dict(
 read=[('How long was the instruction?', ['eleven lines', 'ninety lines', 'four lines', 'two pages'], 0),
       ('How many lines did the generated position have?',
        ['ninety', 'eleven', 'sixty', 'twelve'], 0),
       ('What are the three labels?',
        ['instructed, inferred, invented', 'open, closed, pending',
         'red, amber, green', 'draft, final, agreed'], 0),
       ('What does a delegate need besides the outcome?',
        ['the interest behind it', 'the tone', 'the article number', 'the deadline'], 0)],
 listen_text='Ask for the draft and for the list of clauses on which your instruction is '
             'silent. Then mark every line instructed, inferred or invented. And ask the '
             'capital what the outcome is for, because the text will move.',
 listen=[('Ask for the list of clauses on which your instruction is ____________.', 'silent'),
         ('Mark every line instructed, ____________ or invented.', 'inferred'),
         ('Ask the capital what the outcome is ____________.', 'for'),
         ('Because the text will ____________.', 'move')],
 speak=['Make ten graded deductions about a situation, using four different modals.',
        'Then build a position from a three-line instruction, marking each element aloud.'],
 write='Write a six-line negotiating position from a short instruction.',
 vocab=[('A point beyond which a delegation may not go is a ____________.', 'red line'),
        ('The underlying objective a position protects is a ____________ interest.', 'core'),
        ('The referral of a question beyond authority is an ____________ to capital.', 'escalation'),
        ('A connection between two separate issues is a ____________.', 'linkage')],
 gram=[('They ____________ have seen the draft; it was circulated on Monday.', 'must'),
       ('That ____________ be what they meant; the wording excludes it.', 'cannot'),
       ('They ____________ accept arbitration, but I doubt it.', 'might'),
       ('The desk ____________ have known; it was published later.', 'cannot')]),

found=['Mark your next prepared position line by line before you take it into a room.',
       'Ask your capital for the interest behind one instruction this month.',
       'List the clauses on which you have no instruction, before talks open.',
       'Practise reserving a position in one sentence, until it costs you nothing to say.'],
end_line='Mark every line. State only what is instructed, and ask what the instruction is for.',
end_next='Next: The Bilateral Meeting')
