# -*- coding: utf-8 -*-
import figs

U = dict(
num=10, title='Not Yet, and Why',
gram='the first conditional in undertakings',
ai='the ministry work not to delegate yet, and the reason',
strap='CEFR B1 · Grammar: the first conditional · AI: the work not to delegate yet',
cando=['form the first conditional correctly in an undertaking',
       'state a condition and a consequence in one sentence',
       'name work that should not yet be delegated, and say why',
       'give a reason that does not rest on what a system can do today',
       'write the condition under which a decision would be revisited'],
hero=('SIX THINGS WE DO NOT DO YET',
      ['One page, six lines, and a reason beside each of them.',
       'Five of the reasons were about capability. Those five were wrong.'],
      [(750, 'blue', 'short'), (1410, 'purple', 'long'),
       (2070, 'orange', 'short'), (2710, 'teal', 'long')]),
hero_cap='The first draft of the list, which did not survive the week.',

warm=['What work in your ministry is not given to a system, and why not?',
      'Is that a rule, or has nobody got round to it?',
      'What would have to change for the answer to change?'],
read=[
 'At the end of Lina’s first year, Dr Mourad asked the department for one page: the work on a '
 'bilateral desk that should not yet be delegated to a system, with a reason beside each '
 'item. The page came back with six items on it and it was discussed for two meetings.',
 'Five of the six reasons were about what systems can do. A system cannot judge tone in a '
 'difficult exchange. A system cannot weigh two conflicting reports from a post. A system '
 'does not know which silences are deliberate. All of these statements were true when they '
 'were written.',
 'Karim Dalati objected to all five, and not because he disagreed with them. If the reason a '
 'thing is not delegated is that the system cannot do it, then the rule lasts exactly as long '
 'as that remains true, and the person who decides when it stops being true will be whoever '
 'is selling the next system.',
 'The sixth reason was different. The item was deciding whether to answer a note at all, and '
 'the reason given was that somebody must be answerable to the other state for the decision. '
 'That reason does not change if the systems improve, because answerability is not a thing a '
 'process can hold.',
 'The page was rewritten over the following fortnight. It now has four items and each one '
 'carries a reason of the second kind. Lina notes that the rewriting made the list shorter and '
 'that this felt like a loss until she understood that a shorter list that holds is worth more '
 'than a longer one that expires.'],
c_a=[('What did Dr Mourad ask for?', 'one page of work that should not yet be delegated, with a reason beside each item'),
     ('How many items were on the first page?', 'six'),
     ('What were five of the reasons about?', 'what systems can do'),
     ('Why did Karim object to them?', 'because such a rule lasts only as long as the capability claim does'),
     ('What was the sixth reason?', 'that somebody must be answerable to the other state'),
     ('How many items does the page have now?', 'four')],
c_b=[('The five capability reasons were untrue.', 'F'),
     ('Karim disagreed with the content of the five.', 'F'),
     ('Answerability changes as systems improve.', 'F'),
     ('The page was rewritten over a fortnight.', 'T'),
     ('The rewritten page is longer.', 'F'),
     ('Lina regards the shorter list as worse.', 'F')],
c_c=[('It was discussed for two ____________.', 'meetings'),
     ('A system does not know which ____________ are deliberate.', 'silences'),
     ('The person who decides will be whoever is ____________ the next system.', 'selling'),
     ('Somebody must be ____________ to the other state.', 'answerable'),
     ('Answerability is not a thing a ____________ can hold.', 'process'),
     ('A shorter list that holds is worth more than a longer one that ____________.', 'expires')],
c_d=[('A reason about capability lasts as long as the ( capability claim / rule ) does.', ['capability claim', 'rule'], 0),
     ('How many items are on the rewritten page?', ['six', 'four', 'five', 'one'], 1),
     ('What was the sixth item?', ['judging tone', 'deciding whether to answer at all', 'weighing reports', 'reading silences'], 1),
     ('Who decides when a capability claim stops being true?', ['the Ministry', 'whoever sells the next system', 'the Minister', 'the drafter'], 1),
     ('Lina’s final view is that a shorter list is', ['a loss', 'worth more', 'the same', 'premature'], 1)],
c_e=('First conditional or not? Put each sentence in the right column.',
     [('If they confirm the dates, we will issue the programme.', 'first conditional'),
      ('If they confirmed the dates, we would issue it.', 'second conditional'),
      ('We will issue the programme when they confirm.', 'when + present'),
      ('If they do not reply, we shall send a reminder.', 'first conditional'),
      ('Unless they reply by Friday, we will proceed.', 'unless + present'),
      ('If they had confirmed, we would have issued it.', 'third conditional')],
     ['first conditional', 'second conditional', 'when + present',
      'unless + present', 'third conditional']),

v_fig_title='WHAT BINDS AND WHAT DOES NOT',
v_fig=[('scale', 'an undertaking'), ('key', 'a reservation'), ('doc', 'ad referendum'),
       ('seal', 'binding'), ('shield', 'a limit'), ('book', 'a mandate')],
v_fig_cap='Six words for the difference between agreeing and appearing to agree.',
vocab=[
 ('to withhold', 'to decline to give something that could have been given'),
 ('a reservation', 'a formal statement limiting what a state accepts'),
 ('a qualification', 'words that limit how far a statement goes'),
 ('an undertaking', 'a promise given formally enough to be relied on'),
 ('to commit', 'to bind yourself or your state to a course'),
 ('a commitment', 'the obligation created when you commit'),
 ('binding', 'creating an obligation that can be enforced or invoked'),
 ('non-binding', 'agreed, but creating no enforceable obligation'),
 ('ad referendum', 'agreed by the negotiator, subject to approval at home'),
 ('subject to confirmation', 'not final until confirmed by somebody else'),
 ('an authority', 'the permission under which an official may act'),
 ('to be empowered', 'to have been given the authority to do something'),
 ('a mandate', 'the authority to act, with its stated limits'),
 ('discretion', 'the freedom of an official to decide within limits'),
 ('a limit', 'the point beyond which an official may not go'),
 ('a condition', 'something that must be true for an undertaking to apply'),
 ('provisional', 'holding good for now, pending something further'),
 ('final', 'not open to further change'),
 ('to confirm', 'to state that something provisional now holds'),
 ('to withdraw', 'to take back something offered or said')],
v_a=[('Agreed by the negotiator, subject to approval at home, is ____________.', 'ad referendum'),
     ('A formal statement limiting what a state accepts is a ____________.', 'reservation'),
     ('The authority to act, with its stated limits, is a ____________.', 'mandate'),
     ('Agreed but creating no enforceable obligation is ____________.', 'non-binding'),
     ('Something that must be true for an undertaking to apply is a ____________.', 'condition'),
     ('To take back something offered or said is to ____________ it.', 'withdraw'),
     ('Holding good for now, pending something further, is ____________.', 'provisional'),
     ('The freedom of an official to decide within limits is ____________.', 'discretion')],
v_b=[('An undertaking is a promise given formally enough', 'to be relied on.'),
     ('To be empowered is to have been given', 'the authority to do something.'),
     ('A limit is the point beyond which', 'an official may not go.'),
     ('To confirm is to state that something provisional', 'now holds.'),
     ('To withhold is to decline to give something', 'that could have been given.')],

g_title='Grammar: the first conditional in undertakings',
g_rule=['If plus the present simple, then will or shall: if they confirm, we will issue.',
        'Never use will in the if-clause: not if they will confirm.',
        'Unless means if not: unless they reply by Friday, we will proceed.',
        'When means it is going to happen; if means it may or may not.'],
g_fig=('LOOSE',
       ['If they will confirm, we will issue the programme.',
        'If they do not reply, we would send a reminder.',
        'Unless they do not reply, we will proceed.',
        'If the Minister will agree, we shall inform the post.'],
       'PRECISE',
       ['If they confirm, we will issue the programme.',
        'If they do not reply, we will send a reminder.',
        'Unless they reply, we will proceed.',
        'If the Minister agrees, we shall inform the post.'],
       'two futures in the if-clause and one double negative',
       'four undertakings a lawyer could read'),
g_fig_cap='The commonest error in English conditionals is also the commonest error in diplomatic drafting.',
g_a=[('If they ____________ (confirm) the dates, we will issue the programme.', 'confirm'),
     ('If they do not reply by Friday, we ____________ (send) a reminder.', 'will send'),
     ('____________ they reply by Friday, we will proceed. (if not)', 'Unless'),
     ('If the Minister ____________ (agree), we shall inform the post.', 'agrees'),
     ('We will issue the programme ____________ they confirm. (it is going to happen)', 'when'),
     ('If the note ____________ (arrive) today, Legal will see it tomorrow.', 'arrives'),
     ('____________ Legal objects, the text will go forward as drafted. (if not)', 'Unless'),
     ('If we ____________ (not/hear) by Thursday, the matter will be closed.', 'do not hear'),
     ('If the delegation ____________ (be) larger, we shall need a second room.', 'is')],
g_b=[('In the if-clause, use the ( future / present simple ).', ['future', 'present simple'], 1),
     ('If they ____ the dates, we will issue the programme.', ['will confirm', 'confirm', 'would confirm', 'confirmed'], 1),
     ('____ they reply by Friday, we will proceed.', ['If not', 'Unless', 'Unless not', 'If no'], 1),
     ('If the note arrives today, Legal ____ it tomorrow.', ['sees', 'will see', 'would see', 'saw'], 1),
     ('Use when rather than if when the event', ['may not happen', 'is going to happen', 'is undesirable', 'is formal'], 1),
     ('Which is wrong?', ['If they confirm, we will issue.', 'Unless they do not reply, we will proceed.', 'If they do not reply, we will send a reminder.', 'When they confirm, we will issue.'], 1)],

d1=dict(title='Five reasons that expire',
        fig=(['A system cannot judge tone.', 'That is true.'],
             ['So it stays with us.', 'Until the day it is not true.']),
        cap='Karim Dalati and Lina, over the first draft of the page.',
        lines=[('Karim', 'Item two says we do not delegate difficult exchanges because a system '
                         'cannot judge tone. Do you believe that?'),
               ('Lina', 'Yes. So do you.'),
               ('Karim', 'I do. And that is why I am objecting. The sentence is true today.'),
               ('Lina', 'A reason being true is usually a point in its favour.'),
               ('Karim', 'Not for a rule. If the reason is that it cannot, the rule ends the day '
                         'somebody shows that it can, and that day will be announced by a company '
                         'with something to sell.'),
               ('Lina', 'Then we would look at it again, which seems right.'),
               ('Karim', 'We would look at it again under pressure, with a demonstration in front '
                         'of us and a deadline. That is the worst moment to decide anything.'),
               ('Lina', 'What would hold instead?'),
               ('Karim', 'Look at item six. We do not delegate the decision to answer a note '
                         'because somebody must be answerable to the other state.'),
               ('Lina', 'And that does not change.'),
               ('Karim', 'That does not change if the systems become perfect. A process cannot be '
                         'answerable to anybody. It is not a question of ability at all.'),
               ('Lina', 'So the page shrinks to the items with a reason like that.')],
        a=[('What does item two say?', 'that difficult exchanges are not delegated because a system cannot judge tone'),
           ('Why does Karim object to it?', 'because the rule ends the day somebody shows the system can'),
           ('Who will announce that day?', 'a company with something to sell'),
           ('Why is that a bad moment to decide?', 'because the decision is taken under pressure, with a demonstration and a deadline'),
           ('What reason holds instead?', 'that somebody must be answerable to the other state')],
        b=[('The sentence is true ____________.', 'today'),
           ('A reason being true is usually a point in its ____________.', 'favour'),
           ('We would look at it again under ____________.', 'pressure'),
           ('It is not a question of ____________ at all.', 'ability')]),
d2=dict(title='Four items, and the fifth nobody could write',
        fig=(['Four items held.', 'And the fifth?'],
             ['I could not find the reason.', 'That is not the same as there not being one.']),
        cap='Lina and Dr Mourad, with the rewritten page.',
        lines=[('Dr Mourad', 'Four items. What happened to the other two?'),
               ('Lina', 'One collapsed into item one. The other I could not write a reason for.'),
               ('Dr Mourad', 'Which was it?'),
               ('Lina', 'Deciding how to characterise another state’s position in a record. I am '
                        'certain we should not delegate it and I cannot say why in Karim’s terms.'),
               ('Dr Mourad', 'Try.'),
               ('Lina', 'If we describe their position wrongly, the record is wrong for years, and '
                        'a wrong record is quoted. But that is about consequence, not '
                        'answerability.'),
               ('Dr Mourad', 'Is it? Who answers when it is quoted?'),
               ('Lina', 'The officer who wrote it. Which is a person, and could not be a process.'),
               ('Dr Mourad', 'Then you have the reason.'),
               ('Lina', 'I am not sure I have. I reached it by looking for one, which is different '
                        'from having found one.'),
               ('Dr Mourad', 'That is an honest distinction and I do not know what to do with it. '
                             'Put the item on the page and put your sentence under it.'),
               ('Lina', 'Including the part where I say I am not sure?'),
               ('Dr Mourad', 'Especially that part. Somebody will read this in three years and '
                             'they should know which items we were sure about.')],
        unresolved=True,
        a=[('How many items survived, and what happened to the other two?', 'four survived; one collapsed into item one and one had no reason'),
           ('Which item could Lina not justify?', 'deciding how to characterise another state’s position'),
           ('What reason did she eventually reach?', 'that the officer who wrote it answers when it is quoted'),
           ('Why is she uneasy about it?', 'because she reached it by looking for one'),
           ('What does Dr Mourad tell her to include?', 'the item, her sentence, and the part where she says she is not sure')],
        b=[('A wrong record is ____________.', 'quoted'),
           ('That is about consequence, not ____________.', 'answerability'),
           ('I reached it by ____________ for one.', 'looking'),
           ('They should know which items we were ____________ about.', 'sure')]),

speak=[('Say it correctly',
        ['Student A: make six undertakings using if and will.',
         'Student B: check that no if-clause contains a future.',
         'Convert two of them to unless and say how the meaning changed.']),
       ('Spoken tasking',
        ['Name one piece of your work you would not give to a system.',
         'Say the reason aloud without mentioning what systems can do.',
         'Your partner asks whether the reason would survive better systems.']),
       ('Not yet, or never?',
        ['In pairs, list three tasks your office does not delegate.',
         'Decide for each whether the reason is capability or answerability.',
         'Find the one where nobody has thought about it at all.'])],

ext_title='A reason about capability expires; a reason about answerability does not',
ext_fig=figs.datatable('SIX ITEMS, AND WHAT HAPPENED TO EACH',
                       ['Item', 'Reason first given', 'Survived?'],
                       [['difficult exchanges', 'cannot judge tone', 'no'],
                        ['conflicting post reports', 'cannot weigh them', 'no'],
                        ['reading silences', 'does not know which are deliberate', 'no'],
                        ['choosing what to raise', 'needs unwritten knowledge', 'no'],
                        ['whether to answer at all', 'somebody must answer for it', 'yes'],
                        ['characterising their position', 'the writer answers when quoted', 'yes']]),
ext_fig_cap='Four reasons about ability, none of which survived. Two about answerability, both of which did.',
ext=[
 'Every ministry that has begun using these systems has drawn up, formally or informally, a '
 'list of work that is not to be given to them. The lists are usually written quickly, they '
 'are usually sensible, and they are usually justified in a way that will not last the year.',
 'The common justification is capability. We do not delegate this because a system cannot '
 'judge tone, cannot weigh conflicting reports, does not know which silences are deliberate. '
 'These statements are typically true when written, and that is precisely the problem: a rule '
 'resting on what something cannot do has an expiry date attached, and the date will be '
 'announced by somebody selling the replacement.',
 'Worse, the rule will be revisited at the worst possible moment. A capability claim is '
 'challenged by a demonstration, and a demonstration arrives with a salesman, a deadline and '
 'an audience. Deciding a question of principle in that room is not a decision; it is a '
 'reaction.',
 'The reason that holds is answerability. For some decisions, a named person must be able to '
 'explain themselves to somebody outside the Ministry: the state whose note went unanswered, '
 'the citizen whose case was decided, the Minister who was briefed. A process cannot be '
 'answerable to anybody, however well it performs, and that is not a statement about '
 'performance at all.',
 'Rewriting a list on this basis makes it much shorter, and the shortening is the point. '
 'Four items with reasons that hold are worth more than ten with reasons that expire, and the '
 'exercise also tells you which items you are protecting out of habit rather than principle. '
 'Where you cannot write the reason, say so on the page, so that the next person knows which '
 'entries were certain.'],
dp1=('Reserved decisions and accountability',
     'Governance guidance on these systems in public bodies converges on named accountable '
     'officers and on decisions reserved to people, with reservations framed around '
     'responsibility rather than around current technical limits.',
     'Source: government and foreign-service AI guidance, 2025–2026.'),
e_a=[('What do ministries usually draw up?', 'a list of work not to be given to these systems'),
     ('What is the common justification?', 'capability: that a system cannot do the thing'),
     ('Why is that a problem?', 'because the rule expires when the capability claim does'),
     ('Why is the moment of revisiting bad?', 'because a demonstration arrives with a salesman, a deadline and an audience'),
     ('What reason holds instead?', 'answerability: a named person must explain themselves to somebody outside')],
e_b=[('Capability reasons are usually untrue when written.', 'F'),
     ('A capability rule has an expiry date attached.', 'T'),
     ('A demonstration is a good moment to decide principle.', 'F'),
     ('A process can be answerable to an outside party.', 'F'),
     ('Rewriting on answerability makes the list longer.', 'F'),
     ('Items you cannot justify should be left off silently.', 'F')],

w_model=(
 'Purpose: state the work on a bilateral desk that is not delegated to a system, and the '
 'reason, so that each entry is a rule rather than a habit. Scope: the work of a bilateral '
 'desk; consular and press work are out of scope and are listed separately. Inputs: the 6 '
 'items proposed by the department, the 3 project proposals that would have touched them, and '
 'the standing instructions. Criteria: state each item in 1 sentence; give for each the party '
 'outside the Ministry to whom a named person must be answerable; state explicitly that no '
 'item rests on what a system can currently do; state for each what a system may still do, so '
 'the rule is bounded. Done: 1 page of no more than 6 items, each with a named outside party '
 'and a line on what remains permitted. Fallback: where no outside party can be named, keep '
 'the item on the page and write that the reason has not been found, rather than dropping it '
 'or justifying it on capability.'),
w_fig=figs.spec_card('THE RESERVED-WORK BRIEF',
                     [('Purpose', 'state what is not delegated, and why, as a rule'),
                      ('Scope', 'a bilateral desk; consular and press listed separately'),
                      ('Inputs', '6 proposed items, 3 proposals, the standing instructions'),
                      ('Criteria', 'name the outside party; no capability reasons; bound each item'),
                      ('Done', '6 items or fewer, each with a party and a permitted line'),
                      ('Fallback', 'no party nameable: keep it and say the reason is not found')]),
w_fig_cap='The fallback line is unusual: it keeps the honest uncertainty on the page.',
w_task='Write the reserved-work page for your own section.',
w_steps=['State each item in one sentence, with no hedging.',
         'Name the party outside the Ministry who is owed an explanation.',
         'State that no item rests on current capability.',
         'Say for each item what a system may still do.',
         'Say what happens where you cannot find the reason.'],
w_bank=['State the work … that is not delegated … , and the reason, so that …',
        'Cover … ; … is out of scope.',
        'Work from the … items, the … proposals, and …',
        'State each item in 1 sentence; give for each … ; state explicitly that … ; state for each what …',
        'Where no outside party can be named, … rather than …'],
w_check=['Does every item name an outside party?',
         'Is capability excluded as a reason?',
         'Is each item bounded by what remains permitted?',
         'Is an unjustified item kept with its uncertainty stated?'],

t_title='The ministry work not to delegate yet, and the reason',
t_fig=figs.split('TWO KINDS OF REASON',
                 'Capability — expires',
                 ['it cannot judge tone',
                  'it cannot weigh two reports',
                  'it does not know our silences',
                  'the technology is not ready'],
                 'Answerability — holds',
                 ['the other state is owed an answer',
                  'the citizen is owed an answer',
                  'the Minister is owed an answer',
                  'the writer answers when it is quoted']),
t_fig_cap='The left-hand column will be quoted back at you by somebody holding a demonstration.',
t_body=[
 'Write the list, because an unwritten reservation is not a reservation at all. Everything '
 'your section does not currently delegate falls into two groups that look identical from '
 'inside: things nobody has got round to, and things that must not be done. Only a page with '
 'items on it separates them.',
 'Then write the reason in terms of answerability. For each item, name the party outside the '
 'Ministry to whom a named person must be able to explain themselves: the state, the citizen, '
 'the Minister, the tribunal. If you cannot name one, the item may belong to the first group '
 'after all, and finding that out is worth the afternoon.',
 'And bound each item, because a reservation phrased too widely will be resented and then '
 'ignored. Nothing in an answerability argument prevents a system drafting the note, '
 'assembling the material or proposing the answer. It requires only that a person decide, be '
 'able to explain, and carry it, which is a much smaller rule than it first appears and '
 'therefore one that can be kept.'],
t_say=[('Separate the two: ', 'Is this a rule, or has nobody got round to it?'),
       ('Name the party: ', 'Who outside the Ministry is owed an explanation?'),
       ('Bound the rule: ', 'A system may draft it; a person must decide it.')],
t_bound=('A reserved-work page says who must decide. It does not say the decision will be '
         'taken well, it gives no protection where the named person simply approves what was '
         'put in front of them, and it says nothing about the work that is already delegated '
         'and perhaps should not be.'),
t_a=[('Is this a rule, or has nobody got ____________ to it?', 'round'),
     ('Who outside the Ministry is owed an ____________?', 'explanation'),
     ('A system may draft it; a person must ____________ it.', 'decide'),
     ('An unwritten reservation is not a ____________ at all.', 'reservation'),
     ('If you cannot name one, the item may belong to the first ____________.', 'group'),
     ('It requires only that a person decide, explain, and ____________ it.', 'carry')],
t_b_rubric='Rewrite each capability reason as an answerability reason.',
t_b=[('A system cannot judge tone in a difficult exchange.', 'the other state is owed an answer from a person who can be asked why'),
     ('It cannot weigh two conflicting post reports.', 'the Minister is owed a judgement from somebody who will carry it'),
     ('It does not know which silences are deliberate.', 'the officer who records a silence answers for that record when it is quoted'),
     ('The technology is not ready for consular decisions.', 'the citizen is owed a decision by a person who can be asked to explain it')],

case=dict(
 title='The Decision Room · The demonstration in November',
 brief=[
  'In November a supplier demonstrated a system that drafts replies to difficult '
  'correspondence, including exchanges the Ministry had put on its not-yet list for reasons '
  'of tone. On the ten sample cases, three officers rated the drafts as good as a desk '
  'officer’s.',
  'The not-yet list had already been rewritten on answerability grounds, so the item about '
  'tone was no longer on it. The item that is on it is deciding whether to answer at all.',
  'The supplier has offered a six-month trial at no cost. Thomas of the private office wants '
  'it. Karim Dalati points out that the trial covers both the drafting and the decision, and '
  'that nobody in the demonstration drew the line between them.'],
 exhibit=figs.datatable('THE DEMONSTRATION, AND THE LIST',
                        ['', 'Position', 'Note'],
                        [['sample cases shown', '10', 'chosen by the supplier'],
                         ['rated as good as a desk officer', '3 of 3 raters', '—'],
                         ['item about tone', 'removed in October', 'capability reason'],
                         ['item about deciding to answer', 'on the list', 'answerability reason'],
                         ['trial covers drafting', 'yes', '—'],
                         ['trial covers the decision', 'yes', 'not separated']]),
 exhibit_cap='The capability item had already gone. The answerability item is the one the trial crosses.',
 exhibit_note='The ten cases were selected by the supplier and the Ministry has not seen the '
              'cases that were not selected.',
 voices=[('Karim Dalati', 'Information Security and Records',
          'October was six weeks ago and the capability reason is already dead. That is the '
          'argument for why we rewrote the list, and it is also the argument for reading the '
          'trial scope very carefully.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Take the trial for the drafting and exclude the decision in writing. If they will '
          'not separate the two, that tells us what the trial is actually for.'),
         ('Lina Khalil', 'desk officer, Bilateral Affairs',
          'Ten cases chosen by the person selling it. I would like to see the ten they did '
          'not choose, and I notice that nobody has asked.')],
 steps=[('Find it', 'What did the demonstration show?'),
        ('Compare it', 'Which list item does the trial cross?'),
        ('Infer it', 'Why does Karim say October proves the point?'),
        ('Weigh it', 'A free trial against a boundary that was written six weeks ago.'),
        ('Decide', 'Is the trial taken, and on what terms?')],
 analysis=[('Find it. How many cases, chosen by whom?', 'ten, chosen by the supplier'),
           ('Compare it. Which item does the trial cross?', 'deciding whether to answer at all'),
           ('Infer it. What does October show?', 'that the capability reason died within six weeks of being written'),
           ('Weigh it. What is Dr Mourad’s test?', 'whether the supplier will separate drafting from deciding in writing'),
           ('Decide. What would you do?', 'answers vary; the scope of the trial matters more than its price')],
 decision='Write the terms on which the Ministry would take the trial.',
 decision_steps=['Say what the trial covers and what it excludes, in writing.',
                 'Say who decides whether a note is answered during the trial.',
                 'Say what cases the Ministry will choose to test.',
                 'Say what would end the trial early.'],
 bank=['The trial covers … and excludes …',
       'During the trial, … decides …',
       'The Ministry will test … cases chosen by …',
       'The trial ends early if …',
       'This is minuted at …'],
 outcome='The Ministry took the trial for drafting only, excluded the decision to answer in '
         'writing, and insisted on testing twenty cases of its own choosing alongside the '
         'supplier’s ten. On the Ministry’s cases the drafts were rated as good as a desk '
         'officer’s in eleven of twenty. The supplier accepted the exclusion without argument, '
         'which Dr Mourad says removes her suspicion and Karim says removes nothing, since a '
         'supplier who wanted the decision work would also have accepted, in order to be '
         'inside the building.',
 outcome_q=[('How did the drafts perform on the Ministry’s own cases?', 'rated as good as a desk officer’s in eleven of twenty'),
            ('Why does Karim not take the supplier’s agreement as reassurance?', 'because a supplier wanting the decision work would also have accepted, to get inside the building')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · What should we not be giving it?',
 task=['This is the tasking that produced the first six-item page, written by Dr Mourad in a '
       'margin and passed to the department.',
       'It is a good question asked in a way that could only produce answers with an expiry '
       'date on them.'],
 draft=['Put together a page on what we should not be giving to these systems.',
        'Think about where they are not good enough yet.',
        'Cover the obvious areas.',
        'Give a short reason for each.',
        'Keep it to a page.',
        'For the department meeting.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the second one decides what kind of reasons the page will contain.',
 asked=['Items stated as decisions, not areas',
        'A named outside party for each',
        'What a system may still do, per item'],
 back=['6 items, 5 of them areas',
       '5 capability reasons, all true, all expiring',
       'No bounds, no permitted activities'],
 gap='"Where they are not good enough yet" names the kind of reason in advance, "the obvious '
     'areas" asks for areas rather than decisions, "a short reason" sets no test for what '
     'counts as a reason, and "keep it to a page" is the only measurement anywhere.',
 back_cap='Six sensible items, five of which were out of date within six weeks.',
 back_note='The word yet in instruction two did the damage. It told the reader that the '
           'reasons were to be about current capability.',
 diagnosis=[('[1] "what we should not be giving" — which decisions, or which areas?', 'unscoped set'),
            ('[2] "where they are not good enough yet" — a capability test by another name', 'unstated criterion'),
            ('[3] "the obvious areas" — obvious to whom?', 'unscoped set'),
            ('[4] "a short reason for each" — of what kind?', 'unstated criterion'),
            ('[5] "keep it to a page" — finished meaning drafted, or agreed?', 'undefined done'),
            ('[6] no instruction about what remains permitted', 'undefined done')],
 rewrite='Rewrite the tasking so that it asks for decisions, requires an outside party, and '
         'forbids capability reasoning.',
 scaffold=['What the page states, and what it must therefore not rest on',
           'Whose work is covered, and what is listed elsewhere',
           'The proposed items, the proposals and the instructions to work from',
           'What each item carries, and what must also be stated to bound it',
           'How many items, with what attached to each',
           'What to do where no reason of the right kind can be found'],
 bank=['State the work … that is not delegated to a system, and the reason, so that each entry is …',
       'Cover … ; … are out of scope and are listed …',
       'Work from the … items proposed, the … proposals that would have touched them, and …',
       'State each item in 1 sentence; give for each the party outside … ; state explicitly that no item rests on … ; state for each what a system may still do.',
       'Return 1 page of no more than … items, each with …',
       'Where no outside party can be named, … rather than …'],
 check=['Does it ask for decisions rather than areas?',
        'Must each item name an outside party?',
        'Is capability reasoning explicitly excluded?',
        'Is an item without a reason kept and marked?'],
 model=['State the work on a bilateral desk that is not delegated to a system, and the reason, so that each entry is a rule rather than a habit',
        'The work of a bilateral desk; consular and press work are out of scope and are listed separately',
        'The 6 items proposed by the department, the 3 project proposals that would have touched them, and the standing instructions',
        'State each item in 1 sentence; give for each the party outside the Ministry to whom a named person must be answerable; state explicitly that no item rests on what a system can currently do; state for each what a system may still do, so the rule is bounded',
        '1 page of no more than 6 items, each with a named outside party and a line on what remains permitted',
        'Where no outside party can be named, keep the item on the page and write that the reason has not been found, rather than dropping it or justifying it on capability'],
 cost='1 page of 6 items of which 5 expired within 6 weeks, 2 department meetings, and a '
      'rewrite that should have been the first draft.'),

rev_fig=figs.split('THE FIRST CONDITIONAL',
                   'Wrong',
                   ['If they will confirm, we will issue.',
                    'If they do not reply, we would send a reminder.',
                    'Unless they do not reply, we will proceed.',
                    'If the Minister will agree, we shall inform.'],
                   'Right',
                   ['If they confirm, we will issue.',
                    'If they do not reply, we will send a reminder.',
                    'Unless they reply, we will proceed.',
                    'If the Minister agrees, we shall inform.']),
rev_fig_cap='No future in the if-clause, and unless already contains the not.',
rev=dict(
 read=[('A reason about capability', ['holds permanently', 'expires', 'is untrue', 'is strongest'], 1),
       ('A capability rule is revisited', ['calmly', 'under a demonstration and a deadline', 'annually', 'never'], 1),
       ('The reason that holds is', ['cost', 'answerability', 'tradition', 'security'], 1),
       ('In the Decision Room, who chose the ten sample cases?', ['the Ministry', 'the supplier', 'Legal', 'the Minister'], 1)],
 listen_text='Write the list, because an unwritten reservation is not a reservation at all. '
             'Then write the reason in terms of answerability, naming the party outside the '
             'Ministry to whom a named person must be able to explain themselves. And bound '
             'each item, because a reservation phrased too widely will be resented and then '
             'ignored.',
 listen=[('An unwritten reservation is not a ____________ at all.', 'reservation'),
         ('In terms of ____________.', 'answerability'),
         ('The party outside the Ministry to whom a named person must ____________ themselves.', 'explain'),
         ('A reservation phrased too widely will be resented and then ____________.', 'ignored')],
 speak=['Name two decisions your section should not delegate, with the outside party for each.',
        'Say what a system may still do in each case.'],
 write='Write one reserved item with its outside party and its bound.',
 vocab=[('Agreed by the negotiator, subject to approval at home, is ____________.', 'ad referendum'),
        ('A formal statement limiting what a state accepts is a ____________.', 'reservation'),
        ('The authority to act, with its stated limits, is a ____________.', 'mandate'),
        ('Something that must be true for an undertaking to apply is a ____________.', 'condition'),
        ('Holding good for now, pending something further, is ____________.', 'provisional')],
 gram=[('If they ____________ (confirm) the dates, we will issue the programme.', 'confirm'),
       ('If they do not reply by Friday, we ____________ (send) a reminder.', 'will send'),
       ('____________ they reply by Friday, we will proceed. (if not)', 'Unless'),
       ('If the Minister ____________ (agree), we shall inform the post.', 'agrees'),
       ('If we ____________ (not/hear) by Thursday, the matter will be closed.', 'do not hear')]),

found=['List what your section does not delegate, and mark which are rules.',
       'Name the outside party owed an explanation for each one.',
       'Remove any item whose only reason is what systems cannot do today.',
       'Say, for each item that stays, what a system may still do.'],
end_line='A shorter list that holds is worth more than a longer one that expires.',
end_next='End of Book 1. Next: Reading the Traffic',
)
