# -*- coding: utf-8 -*-
import figs

U = dict(
num=5, title='There Is A Case For',
gram='impersonal structures: there is a case for, it remains to be seen',
ai='what you decide not to automate, on purpose',
strap='CEFR C1 · Grammar: impersonal structures · AI: what you decide not to automate',
cando=['use impersonal structures to put an argument without personalising it',
       'say that something is unresolved without appearing to evade it',
       'write a list of decisions your organisation will not delegate to a system',
       'give a reason for a red line that is not a claim about capability',
       'distinguish a prohibition from a mere absence of implementation'],
hero=('THE LIST OF THINGS WE WILL NOT DO',
      ['There is a case for automating almost everything here.',
       'There are seven things we will not, and the reason is not capability.'],
      [(780, 'blue', 'long'), (1500, 'teal', 'short'),
       (2200, 'purple', 'long'), (2840, 'orange', 'short')]),
hero_cap='A red line that rests on capability moves the moment capability does.',

warm=['Which decisions in your organisation are made by a person because they must be?',
      'Is that written down anywhere, or simply how things are?',
      'What reason is given, and would it survive the systems getting better?'],
read=[
 'The list Marta Olsen brought to the board in June has seven items and fits on one page. '
 'Terminating a client relationship. Refusing work on grounds of conscience. Responding to a '
 'complaint that names an individual. Any decision bearing on somebody’s employment. '
 'Deciding to disclose a breach. Setting a price below the stated floor. Overriding a '
 'reviewer who has refused to release something.',
 'It would have been possible to justify each of these on grounds of capability, and that was '
 'the first draft. A system handles complaints about named individuals badly; termination '
 'requires knowledge of a relationship; conscience is not a computable property. All three '
 'statements are true today and Marta withdrew the draft, because a red line resting on what '
 'something cannot currently do is not a red line but an estimate with a shelf life.',
 'The second draft gives one reason for all seven, stated impersonally and without '
 'qualification: these are decisions for which a named person must be answerable to somebody '
 'outside the firm, and answerability of that kind cannot be held by a process. There is a '
 'case for revisiting the list annually; there is no case for revisiting it because something '
 'has become technically possible.',
 'The distinction that made the list usable in practice is between a prohibition and an '
 'absence. Before June, none of the seven was automated, and the reason was that nobody had '
 'got round to it. That is an absence, and absences close quietly: a project with a deadline '
 'proposes to include one of the seven, nobody can point to a rule, and the question becomes '
 'a matter of scheduling. A prohibition has to be argued against in writing.',
 'It remains to be seen whether the list holds. Two of the seven have already been tested: a '
 'tender required an automated response to complaints and Arclight declined that part of the '
 'scope, losing nothing; and a pricing proposal would have let a system set a figure below '
 'the floor in defined circumstances, which the board refused after an argument lasting two '
 'meetings. Thomas Reed voted against the list and has defended it twice since, which he says '
 'is what a rule is for.'],
c_a=[('How many items are on Marta’s list?', 'seven'),
     ('Why did she withdraw the first draft?', 'because a red line resting on current capability is an estimate with a shelf life'),
     ('What single reason does the second draft give?', 'that a named person must be answerable to somebody outside the firm'),
     ('What is the difference between a prohibition and an absence?', 'an absence closes quietly; a prohibition must be argued against in writing'),
     ('What has happened to two of the seven?', 'a tender scope was declined, and a pricing proposal was refused after two meetings')],
c_b=[('The list runs to several pages.', 'F'),
     ('The first draft argued from capability.', 'T'),
     ('Marta thinks the capability claims are false.', 'F'),
     ('Before June the seven were simply not automated.', 'T'),
     ('Arclight lost business by declining the tender scope.', 'F'),
     ('Thomas voted for the list.', 'F')],
c_c=[('Refusing work on grounds of ____________.', 'conscience'),
     ('Conscience is not a ____________ property.', 'computable'),
     ('An estimate with a ____________ life.', 'shelf'),
     ('Answerability of that kind cannot be held by a ____________.', 'process'),
     ('The question becomes a matter of ____________.', 'scheduling'),
     ('A prohibition has to be argued against in ____________.', 'writing')],
c_d=[('The list rests on ( capability / answerability ).', ['capability', 'answerability'], 1),
     ('Why is a capability-based red line weak?', ['it is untrue', 'it moves when capability moves', 'it is too long', 'it is unpopular'], 1),
     ('An absence closes', ['loudly', 'quietly', 'never', 'annually'], 1),
     ('The pricing proposal was', ['approved', 'refused after two meetings', 'withdrawn', 'deferred'], 1),
     ('Thomas has defended the list', ['never', 'twice', 'once', 'every month'], 1)],
c_e=('Which impersonal structure? Put each sentence in the right column.',
     [('There is a case for revisiting it annually.', 'there is a case for'),
      ('It remains to be seen whether the list holds.', 'it remains to be seen'),
      ('It would be premature to remove the item.', 'it would be'),
      ('It is arguable that the floor is too high.', 'it is arguable that'),
      ('There is no case for revisiting it on capability.', 'there is a case for'),
      ('It is not yet clear what the effect will be.', 'it remains to be seen')],
     ['there is a case for', 'it remains to be seen', 'it would be', 'it is arguable that']),

v_fig_title='THINGS YOU DECIDE NOT TO DO',
v_fig=[('key', 'a red line'), ('doc', 'a carve-out'), ('scale', 'a reserved matter'),
       ('bank', 'a moratorium'), ('bulb', 'deliberate friction'), ('chart', 'a policy floor')],
v_fig_cap='Six words for decisions an organisation keeps, on purpose, in human hands.',
vocab=[
 ('a red line', 'a limit stated in advance that will not be crossed'),
 ('a carve-out', 'an area deliberately excluded from a general arrangement'),
 ('to withhold', 'to decline to give something that could have been given'),
 ('a reserved matter', 'a decision that only a stated body or person may take'),
 ('deliberate friction', 'difficulty kept in a process on purpose, to slow a decision'),
 ('a human in the loop', 'a person positioned so that nothing proceeds without them'),
 ('a veto', 'the power to stop something, whatever others have decided'),
 ('a prohibition', 'a stated rule that something is not to be done'),
 ('a safeguard', 'an arrangement whose only purpose is to prevent a harm'),
 ('an override', 'a power to set aside the ordinary outcome, with a record'),
 ('a manual gate', 'a point at which work stops until a person releases it'),
 ('a moratorium', 'a temporary and deliberate suspension of something'),
 ('to ring-fence', 'to protect something from being used for other purposes'),
 ('a standing exception', 'a permanent departure from a rule, recorded as such'),
 ('an exclusion list', 'the stated set of cases to which something does not apply'),
 ('to abstain', 'to decline to act or decide, deliberately'),
 ('restraint', 'the deliberate choice not to exercise a right you hold'),
 ('a bright line', 'a boundary drawn so that nobody can argue about which side they are on'),
 ('a policy floor', 'the lowest value a policy permits, whatever the circumstances'),
 ('a last resort', 'the course taken only when every other has been exhausted')],
v_a=[('A decision only a stated body may take is a ____________.', 'reserved matter'),
     ('Difficulty kept in a process on purpose is ____________.', 'deliberate friction'),
     ('A boundary drawn so nobody can argue about which side they are on is a ____________.', 'bright line'),
     ('The deliberate choice not to exercise a right you hold is ____________.', 'restraint'),
     ('A permanent recorded departure from a rule is a ____________.', 'standing exception'),
     ('A point at which work stops until a person releases it is a ____________.', 'manual gate'),
     ('A temporary deliberate suspension is a ____________.', 'moratorium'),
     ('The lowest value a policy permits is a ____________.', 'policy floor')],
v_b=[('A red line is a limit stated in advance', 'that will not be crossed.'),
     ('A carve-out is an area deliberately excluded', 'from a general arrangement.'),
     ('A safeguard is an arrangement whose only purpose', 'is to prevent a harm.'),
     ('An override is a power to set aside the ordinary outcome,', 'with a record.'),
     ('To ring-fence is to protect something', 'from being used for other purposes.')],

g_title='Grammar: impersonal structures',
g_rule=['There is a case for + -ing puts an argument without attributing it to anybody.',
        'It remains to be seen whether says a matter is unresolved, without evasion.',
        'It is arguable that, it would be premature to, it does not follow that: all impersonal.',
        'Use them for genuinely institutional positions; overuse removes every person from the page.'],
g_fig=('LOOSE',
       ['There is a case to revisit it annually.',
        'It remains to see whether the list holds.',
        'It would be premature removing the item.',
        'It does not follow it is impossible.'],
       'PRECISE',
       ['There is a case for revisiting it annually.',
        'It remains to be seen whether the list holds.',
        'It would be premature to remove the item.',
        'It does not follow that it is impossible.'],
       'four impersonal structures malformed',
       'four with the complement each one requires'),
g_fig_cap='These structures are formulaic; the formula is the point, and it must be exact.',
g_a=[('There is a case ____________ (revisit) the list annually.', 'for revisiting'),
     ('It remains ____________ (see) whether the list holds.', 'to be seen'),
     ('It would be premature ____________ (remove) the item.', 'to remove'),
     ('It does not ____________ (follow) that the decision is impossible.', 'follow'),
     ('It is ____________ (argue) that the floor is set too high.', 'arguable'),
     ('There is no case ____________ (reopen) it on capability grounds.', 'for reopening'),
     ('It is not yet ____________ (clear) what the effect will be.', 'clear'),
     ('It ____________ (be) open to the board to add an eighth item.', 'is'),
     ('There is something ____________ (say) for deliberate friction.', 'to be said')],
g_b=[('There is a case ( for revisiting / to revisit ) it annually.', ['for revisiting', 'to revisit'], 0),
     ('It remains ____ whether the list holds.', ['to see', 'to be seen', 'seeing', 'being seen'], 1),
     ('It would be premature ____ the item.', ['removing', 'to remove', 'remove', 'for removing'], 1),
     ('It does not follow ____ it is impossible.', ['than', 'that', 'what', 'which'], 1),
     ('There is something ____ for deliberate friction.', ['to say', 'to be said', 'saying', 'said'], 1),
     ('Impersonal structures should be used for', ['every sentence', 'institutional positions', 'instructions', 'apologies'], 1)],

d1=dict(title='Not because it cannot',
        fig=(['It handles named complaints badly.', 'True today.'],
             ['So that is the reason.', 'Then the rule expires when that changes.']),
        cap='Marta and Ines, over the first draft.',
        lines=[('Ines', 'Your first draft says we do not automate complaints about named individuals '
                        'because systems handle them badly. That is true and I would sign it.'),
               ('Marta', 'I know, and I have withdrawn it. If that is the reason, the rule expires the '
                         'moment somebody demonstrates a system that handles them well.'),
               ('Ines', 'Would that be so bad? If it handles them well, perhaps we should.'),
               ('Marta', 'Then there is no rule at all, only a current assessment. And the assessment '
                         'will be made by whoever is selling the system.'),
               ('Ines', 'So what is the reason?'),
               ('Marta', 'That somebody must be answerable to a person outside this firm for how '
                         'their complaint about a colleague was handled. Answerability is not a '
                         'quality a process can have, however good it is.'),
               ('Ines', 'That holds whatever the technology does.'),
               ('Marta', 'It holds whatever the technology does, and it is also narrower. It gives us '
                         'no grounds at all for refusing to let a system draft the response, provided '
                         'a named person reads it and answers for it.'),
               ('Ines', 'So you are proposing a stronger rule and a smaller one.'),
               ('Marta', 'Both. A capability argument looks stronger and protects nothing. This one '
                         'protects seven things permanently and nothing else at all.'),
               ('Ines', 'Put it to the board in those words. Half the room will want the capability '
                        'version because it sounds more cautious.'),
               ('Marta', 'They will, and I would rather lose the vote than win it with an argument '
                         'that will be quoted back at me in three years.')],
        a=[('What did the first draft argue from?', 'that systems handle named complaints badly'),
           ('Why did Marta withdraw it?', 'because the rule would expire when a system handled them well'),
           ('What reason replaces it?', 'that somebody must be answerable to a person outside the firm'),
           ('Why is the new rule narrower?', 'because it permits a system to draft, provided a named person answers'),
           ('What would Marta rather do than win on the capability argument?', 'lose the vote')],
        b=[('Only a current ____________.', 'assessment'),
           ('Answerability is not a quality a ____________ can have.', 'process'),
           ('A capability argument looks stronger and protects ____________.', 'nothing'),
           ('An argument that will be quoted back at me in three ____________.', 'years')]),
d2=dict(title='The eighth item',
        fig=(['Seven items.', 'Why not eight?'],
             ['Which eighth?', 'Deciding who gets the guarantee.']),
        cap='Thomas and Marta, after the vote.',
        lines=[('Thomas', 'I voted against the list and I will defend it, and I want to put an eighth '
                          'item to you now while nobody is watching.'),
               ('Marta', 'Go on.'),
               ('Thomas', 'Deciding which clients are offered the guaranteed error rate. A system '
                          'could do it from the exception history and it would do it well.'),
               ('Marta', 'Why should it be on the list?'),
               ('Thomas', 'Because the client who is refused will ask why, and the honest answer will '
                          'be a sentence about their own error history that nobody in this firm has '
                          'read.'),
               ('Marta', 'That is an answerability argument and it is a good one. Why did you not '
                         'make it in the meeting?'),
               ('Thomas', 'Because I had just voted against having a list, and arguing to extend a '
                          'list I opposed would have looked like something other than what it was.'),
               ('Marta', 'That is a bad reason and I think you know it.'),
               ('Thomas', 'It is a bad reason. I am telling you because I would rather the item were '
                          'on the list than that I looked consistent.'),
               ('Marta', 'I will bring it in September, as your proposal, with your name on it.'),
               ('Thomas', 'That is what I was afraid you would say, and I am not sure I want it. '
                          'There is a case for bringing it anonymously, and I cannot tell whether '
                          'that is prudence or cowardice.'),
               ('Marta', 'Nor can I, and I am not going to resolve it for you. I will bring it in '
                         'September either way.')],
        unresolved=True,
        a=[('What eighth item does Thomas propose?', 'deciding which clients are offered the guaranteed error rate'),
           ('What is his reason?', 'that a refused client will ask why and nobody will have read the answer'),
           ('Why did he not raise it in the meeting?', 'because he had just voted against having a list'),
           ('What does he say he would rather have?', 'the item on the list rather than looking consistent'),
           ('What does he leave unresolved?', 'whether bringing it anonymously is prudence or cowardice')],
        b=[('While nobody is ____________.', 'watching'),
           ('A sentence about their own error history that nobody has ____________.', 'read'),
           ('Rather the item were on the list than that I looked ____________.', 'consistent'),
           ('Whether that is prudence or ____________.', 'cowardice')]),

speak=[('Say it correctly',
        ['Student A: put six institutional positions using impersonal structures.',
         'Student B: check the complement each structure requires.',
         'Find the one that would be better with a person in it.']),
       ('Spoken specification: your own red lines',
        ['Name three decisions your organisation should not delegate to a system.',
         'Brief aloud the reason for each, without mentioning what systems can do.',
         'Your partner tests whether your reason would survive better technology.']),
       ('Prohibition or absence?',
        ['In pairs, name three things your organisation does not automate.',
         'Decide for each whether there is a rule or merely no project.',
         'Find the one that would close quietly if a deadline arrived.'])],

ext_title='A red line that rests on capability is an estimate; the reason has to be about answerability',
ext_fig=figs.datatable('SEVEN RESERVED DECISIONS, AND THE REASON',
                       ['Decision', 'Reason given', 'Survives better systems?'],
                       [['terminating a client', 'answerable to the client', 'yes'],
                        ['refusing work on conscience', 'answerable to the public', 'yes'],
                        ['a complaint naming a person', 'answerable to the complainant', 'yes'],
                        ['anything affecting employment', 'answerable to the employee', 'yes'],
                        ['disclosing a breach', 'answerable to the regulator', 'yes'],
                        ['pricing below the floor', 'answerable to the board', 'yes']]),
ext_fig_cap='Six of the seven, each with an external party who is owed an answer by a person.',
ext=[
 'Most organisations have decisions that are not automated, and in most organisations the '
 'reason is that nobody has got round to it. That is an absence rather than a prohibition, '
 'and absences close quietly: a project arrives with a deadline, proposes to include one of '
 'them, nobody can point to a rule, and what should have been a question of principle becomes '
 'a question of scheduling. Writing the list down is the whole of the difference.',
 'The temptation in writing it is to justify each item by what systems do badly, and that '
 'temptation should be resisted, because such a justification is an estimate with a shelf '
 'life. A rule that says we do not automate this because it would be done badly expires the '
 'moment somebody demonstrates otherwise, and the demonstration will be offered by whoever '
 'is selling the capability. There is a case for making capability assessments; there is no '
 'case for building permanent rules on them.',
 'The durable reason is answerability. For some decisions, a named person must be able to '
 'explain themselves to somebody outside the organisation: the client who was terminated, '
 'the employee whose job changed, the complainant who named a colleague, the regulator who '
 'was told of a breach. Answerability is not a property a process can hold, however well it '
 'performs, and that reason does not change when performance does.',
 'Stating the reason this way makes the list both stronger and considerably narrower, which '
 'is the point most often missed. It gives no grounds for keeping a system out of the drafting, '
 'the analysis, the preparation or the recommendation; it requires only that a named person '
 'decide, be able to explain, and bear the consequence. A firm that confuses the two ends up '
 'defending manual work it has no reason to defend, and loses the argument about the work it '
 'does.',
 'It remains to be seen whether such lists hold under commercial pressure, and the honest '
 'answer is that nobody has had one long enough to say. What can be said is that a written '
 'prohibition must be argued against in writing, which converts a scheduling decision into a '
 'board decision, and that the people most likely to defend a list are sometimes those who '
 'voted against having one, because a rule they opposed is still a rule they are now '
 'administering.'],
dp1=('Reserved decisions in regulated firms',
     'Governance research generally finds that organisations with explicitly reserved '
     'decisions, stated in advance, depart from them less often under pressure than those '
     'relying on custom, and that justifications based on current capability are revised more '
     'frequently.',
     'Source: general corporate-governance literature, 2026.'),
e_a=[('Why do most organisations not automate certain decisions?', 'because nobody has got round to it, which is an absence rather than a prohibition'),
     ('How do absences close?', 'quietly, when a project with a deadline proposes to include one'),
     ('Why is a capability justification weak?', 'because it is an estimate that expires when capability is demonstrated'),
     ('What is the durable reason?', 'that a named person must be answerable to somebody outside the organisation'),
     ('Why does this make the list narrower?', 'because it permits systems to draft, analyse and recommend')],
e_b=[('An absence and a prohibition behave the same way under pressure.', 'F'),
     ('Capability justifications are permanent.', 'F'),
     ('Answerability can be held by a process.', 'F'),
     ('The answerability reason makes the list narrower.', 'T'),
     ('A written prohibition must be argued against in writing.', 'T'),
     ('Those who opposed a list never defend it.', 'F')],

w_model=(
 'Purpose: state the decisions Arclight will not delegate to a system, and the reason, so '
 'that each is a prohibition rather than an absence. Scope: all decisions taken in the '
 'checking, advisory and client-management functions; internal administrative decisions are '
 'out of scope. Inputs: the 7 candidate decisions identified by the board, the 3 project '
 'proposals that would have touched them, and the governance schedule dated 5 May. Criteria: '
 'state each decision in 1 sentence; give for each the external party to whom a named person '
 'must be answerable; state explicitly that no item rests on what a system can currently do; '
 'state for each what a system may still do, so the prohibition is bounded; require that any '
 'addition or removal be made by the board in writing. Done: 1 page of no more than 7 items, '
 '7 named external parties, and 7 statements of what remains permitted. Fallback: where no '
 'external party can be named for a candidate item, leave it off the list and record why '
 'rather than keeping it on general grounds of caution.'),
w_fig=figs.spec_card('THE RESERVED-DECISIONS BRIEF',
                     [('Purpose', 'state what will not be delegated, and why, as a prohibition'),
                      ('Scope', 'checking, advisory and client management; admin excluded'),
                      ('Inputs', '7 candidate decisions, 3 proposals, governance schedule'),
                      ('Criteria', 'name the external party; no capability reasons; bound each item'),
                      ('Done', '7 items, 7 external parties, 7 statements of what is permitted'),
                      ('Fallback', 'no external party nameable: leave it off and record why')]),
w_fig_cap='The fallback row keeps a list of principles from becoming a list of preferences.',
w_task='Write a reserved-decisions specification for your own organisation.',
w_steps=['State each decision in one sentence, with no hedging.',
         'Name the external party to whom somebody must be answerable.',
         'State that no item rests on current capability.',
         'Bound each prohibition by saying what a system may still do.',
         'Say what happens to a candidate item with no nameable external party.'],
w_bank=['State the decisions … will not delegate … , and the reason, so that each is …',
        'Cover … ; … is out of scope.',
        'Work from the … candidate decisions, the … proposals … , and … dated …',
        'State each decision in 1 sentence; give for each … ; state explicitly that … ; state for each what a system may still do.',
        'Where no external party can be named, … rather than keeping it on general grounds of caution.'],
w_check=['Does every item name an external party?',
         'Is capability excluded as a reason?',
         'Is each prohibition bounded by what remains permitted?',
         'Is there a rule excluding items justified only by caution?'],

t_title='What you decide not to automate, on purpose',
t_fig=figs.split('TWO REASONS FOR A RED LINE',
                 'Capability — expires',
                 ['a system would do it badly',
                  'the judgement is too subtle',
                  'it needs real understanding',
                  'the technology is not ready'],
                 'Answerability — holds',
                 ['the client is owed an answer',
                  'the employee is owed an answer',
                  'the complainant is owed an answer',
                  'the regulator is owed an answer']),
t_fig_cap='The left column is true today and will be quoted back at you. The right column is not about systems at all.',
t_body=[
 'Write the list, because an unwritten reservation is not a reservation. Everything your '
 'organisation does not currently automate falls into two categories that look identical from '
 'inside: things nobody has got round to, and things that must not be done. The first '
 'category closes quietly under deadline pressure, with nobody able to point to a rule, and '
 'the only way to separate the two is a page with items on it.',
 'Then give the reason in terms of answerability rather than capability. For each item, name '
 'the party outside your organisation to whom a named person must be able to explain '
 'themselves: the client, the employee, the complainant, the regulator. If you cannot name '
 'such a party, the item probably does not belong on the list, and leaving it off is better '
 'than defending it later on grounds of general caution.',
 'Finally, bound each prohibition by stating what remains permitted, because a rule phrased '
 'as a prohibition on a subject rather than on a decision will be read far too widely and '
 'will then be resented and eventually ignored. Nothing in an answerability argument prevents '
 'a system drafting the letter, assembling the analysis or proposing the answer. It requires '
 'only that a person decide, be able to explain, and carry it; and that is a much smaller '
 'rule than it first appears, which is why it can be held.'],
t_say=[('Separate the two: ', 'Is this a rule, or has nobody got round to it?'),
       ('Name the party: ', 'Who outside this firm is owed an explanation?'),
       ('Bound the rule: ', 'A system may draft it; a person must decide it.')],
t_bound=('A reserved-decisions list says who must decide. It cannot say whether the decision '
         'will be taken well, it provides no protection where the named person simply '
         'ratifies what was proposed, and it has never been tested over a long enough period '
         'for anybody to claim that such lists hold under sustained commercial pressure.'),
t_a=[('Is this a rule, or has nobody got ____________ to it?', 'round'),
     ('Who outside this firm is owed an ____________?', 'explanation'),
     ('A system may draft it; a person must ____________ it.', 'decide'),
     ('An unwritten reservation is not a ____________.', 'reservation'),
     ('If you cannot name such a party, the item probably does not ____________.', 'belong'),
     ('It requires only that a person decide, explain, and ____________ it.', 'carry')],
t_b_rubric='Rewrite each capability reason as an answerability reason.',
t_b=[('A system would handle complaints badly.', 'the complainant is owed an explanation by a named person'),
     ('Termination needs real understanding of a relationship.', 'the client is owed a reason by somebody who can be asked for it'),
     ('Conscience is not computable.', 'the public is owed an answer by a person who can be held to it'),
     ('Pricing judgement is too subtle to encode.', 'the board is owed an account of any price below the floor')],

case=dict(
 title='Decision Clinic · The tender that wanted item three',
 brief=[
  'A tender worth eleven per cent of revenue requires the supplier to provide automated '
  'acknowledgement and first response to all complaints, including those naming individual '
  'staff. Item three of Arclight’s list reserves such responses to a named person.',
  'The client’s own reasoning is reasonable: they have a service standard of four hours and '
  'no supplier has met it manually. Arclight could meet four hours manually for their volume, '
  'at a cost of about one and a half people.',
  'Fatima proposes bidding with the manual process and the extra cost absorbed. Kenji says '
  'that makes the bid uncompetitive and that the list is costing eleven per cent of revenue '
  'eight weeks after being written. Marta says the list is doing exactly what it was written '
  'to do.'],
 exhibit=figs.datatable('THE TENDER AGAINST ITEM THREE',
                        ['', 'Figure', 'Note'],
                        [['tender value', '11% of revenue', '—'],
                         ['service standard required', '4 hours', 'first response'],
                         ['manual cost to meet it', '~1.5 people', 'about 96,000 EUR'],
                         ['complaints naming staff, estimated', '~40 a year', 'of ~900 total'],
                         ['item 3 applies to', '40 of 900', '4.4%']]),
 exhibit_cap='The rule bites on four per cent of the volume and the cost falls on all of it.',
 exhibit_note='The forty-a-year estimate is from Arclight’s own complaint mix and the client’s '
              'mix may differ.',
 voices=[('Fatima Zahra', 'client manager',
          'Bid it manually and absorb the cost. We lose margin on one contract and keep the '
          'rule, and the rule is eight weeks old. Breaking it now tells everybody what it is '
          'worth.'),
         ('Kenji Watanabe', 'finance',
          'Ninety-six thousand against eleven per cent of revenue is not absorbing a cost, it '
          'is a different bid. I am not arguing against the rule. I am saying somebody should '
          'say out loud that it has a price and that the price arrived immediately.'),
         ('Marta Olsen', 'risk and liability',
          'Item three applies to forty complaints a year out of nine hundred. Automate the '
          'eight hundred and sixty, route the forty to a person within four hours, and tell '
          'the client exactly that. If they refuse, we have learned something about the '
          'client.')],
 steps=[('Find it', 'What does the tender require and what does item three reserve?'),
        ('Compare it', 'What share of the volume does item three actually affect?'),
        ('Infer it', 'Why does Marta’s route exist at all?'),
        ('Weigh it', 'Eleven per cent of revenue against a rule eight weeks old.'),
        ('Decide', 'What does Arclight bid?')],
 analysis=[('Find it. What does the client require?', 'automated acknowledgement and first response to all complaints within four hours'),
           ('Compare it. How much of the volume does item three cover?', 'about forty of nine hundred, or four point four per cent'),
           ('Infer it. Why does Marta’s route exist?', 'because the prohibition was written bounded, on decisions rather than on subjects'),
           ('Weigh it. What is Kenji’s point?', 'that the rule has a price and the price arrived immediately'),
           ('Decide. What would you bid?', 'answers vary; the bounded route is available precisely because the rule was drafted narrowly')],
 decision='Write Arclight’s bid position on the complaint-handling requirement.',
 decision_steps=['Say what is automated and what is not.',
                 'Say what service standard is offered for each.',
                 'Say what the client is told about why.',
                 'Say what Arclight does if the client refuses.'],
 bank=['We automate … and route … to …',
       'The service standard is … for … and … for …',
       'The client is told that …',
       'If the client refuses, we …',
       'This is minuted at …'],
 outcome='Arclight bid automated handling for complaints not naming an individual and a named '
         'person within four hours for those that do, explaining item three in two sentences '
         'in the tender response. The client accepted without comment and the contract was '
         'won. Kenji notes that the bounded rule cost nothing on this occasion and that his '
         'point stands untested rather than refuted; Marta agrees, and adds that the version '
         'of item three she withdrew in June, which prohibited automated complaint handling '
         'generally, would have lost the tender outright.',
 outcome_q=[('Why was the tender winnable?', 'because item three prohibits a decision rather than a subject'),
            ('What would the withdrawn version have cost?', 'the tender outright')],
 tags=[]),

lab=dict(
 title='Brief Lab · Decide what we will not automate',
 task=['This is the brief Ines gave Marta in April, which produced the first draft of the '
       'list, the one that was withdrawn.',
       'The brief is short, reasonable, and contains the instruction that produced the '
       'capability argument.'],
 draft=['Put together a list of things we should not be automating.',
        'Think about where judgement is genuinely required.',
        'Cover the areas where it would obviously be inappropriate.',
        'Give a short reason for each.',
        'Keep the list to a sensible length.',
        'Leave out anything that is already settled.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions, and the second one determines the whole shape of the answer.',
 asked=['Decisions, with an external party named for each',
        'Reasons that do not rest on capability',
        'A statement of what remains permitted'],
 back=['9 subject areas, not decisions',
       'Reasons citing what systems do badly',
       'No bounds, no permitted activities'],
 gap='"Where judgement is genuinely required" directs the reasoning at capability, "obviously '
     'inappropriate" sets no test, "a sensible length" fixes no number, and "anything already '
     'settled" invites the reader to omit the absences that most needed converting into '
     'prohibitions.',
 back_cap='Nine subject areas with capability reasons, all of which would expire.',
 back_note='Because the brief asked for areas rather than decisions, the draft prohibited '
           'automated complaint handling generally, which would have lost an eleven per cent '
           'tender eight weeks later.',
 diagnosis=[('[1] "things we should not be automating" — decisions, or subject areas?', 'unscoped set'),
            ('[2] "where judgement is genuinely required" — a capability test by another name', 'unstated exception'),
            ('[3] "obviously inappropriate" — obvious to whom, on what ground?', 'unstated exception'),
            ('[4] "a short reason for each" — of what kind?', 'unscoped set'),
            ('[5] "a sensible length" — how many items?', 'unbounded quantity'),
            ('[6] "leave out anything already settled" — settled by a rule, or by nobody acting?', 'unbounded quantity')],
 rewrite='Rewrite the brief so that it asks for decisions, requires an external party for '
         'each, and forbids capability reasoning.',
 scaffold=['What the list must state and what it must therefore not rest on',
           'Which functions are covered and what is out of scope',
           'The candidate decisions, proposals and schedules it is built from',
           'What each item must carry, and what must also be stated to bound it',
           'How many items, how many named parties, and by when',
           'What to do with a candidate for which no external party can be named'],
 bank=['State the decisions … will not delegate to a system, and the reason, so that each is …',
       'Cover … ; … is out of scope.',
       'Work from the … candidate decisions, the … proposals that would have touched them, and … dated …',
       'State each decision in 1 sentence; give for each the external party … ; state explicitly that no item rests on … ; state for each what a system may still do.',
       'Return 1 page of no more than … items, … named parties, and … statements.',
       'Where no external party can be named, … rather than …'],
 check=['Does the brief ask for decisions rather than subject areas?',
        'Must each item name an external party?',
        'Is capability reasoning explicitly excluded?',
        'Must each item state what remains permitted?'],
 model=['State the decisions Arclight will not delegate to a system, and the reason, so that each is a prohibition rather than an absence',
        'All decisions taken in the checking, advisory and client-management functions; internal administrative decisions are out of scope',
        'The 7 candidate decisions identified by the board, the 3 project proposals that would have touched them, and the governance schedule dated 5 May',
        'State each decision in 1 sentence; give for each the external party to whom a named person must be answerable; state explicitly that no item rests on what a system can currently do; state for each what a system may still do, so the prohibition is bounded; require that any addition or removal be made by the board in writing',
        '1 page of no more than 7 items, 7 named external parties, and 7 statements of what remains permitted, by 10 June',
        'Where no external party can be named for a candidate item, leave it off the list and record why rather than keeping it on general grounds of caution'],
 cost='1 withdrawn draft of 9 subject areas, 3 weeks of a senior lawyer’s time, and a version '
      'that would have lost an 11 per cent tender had it been adopted.'),

rev_fig=figs.split('IMPERSONAL STRUCTURES',
                   'Wrong',
                   ['There is a case to revisit it.',
                    'It remains to see whether it holds.',
                    'It would be premature removing it.',
                    'It does not follow it is impossible.'],
                   'Right',
                   ['There is a case for revisiting it.',
                    'It remains to be seen whether it holds.',
                    'It would be premature to remove it.',
                    'It does not follow that it is impossible.']),
rev_fig_cap='Formulaic structures, which must be exact to carry any authority at all.',
rev=dict(
 read=[('An unwritten reservation behaves as', ['a prohibition', 'an absence', 'a safeguard', 'a veto'], 1),
       ('A capability justification', ['holds permanently', 'expires when capability is shown', 'is illegal', 'is strongest'], 1),
       ('The durable reason is', ['cost', 'answerability', 'tradition', 'client preference'], 1),
       ('In the Clinic, why was the tender winnable?', ['the rule was ignored', 'item three prohibits a decision, not a subject', 'the client relented', 'the price was cut'], 1)],
 listen_text='Write the list, because an unwritten reservation is not a reservation. Then give '
             'the reason in terms of answerability rather than capability, naming the party '
             'outside your organisation to whom a named person must be able to explain '
             'themselves. Finally, bound each prohibition by stating what remains permitted.',
 listen=[('An unwritten reservation is not a ____________.', 'reservation'),
         ('Answerability rather than ____________.', 'capability'),
         ('Naming the ____________ outside your organisation.', 'party'),
         ('Bound each prohibition by stating what remains ____________.', 'permitted')],
 speak=['Name two decisions your organisation should reserve to a person, and to whom they are answerable.',
        'Say what a system may still do in each case.'],
 write='Write one reserved decision with its external party and its bound.',
 vocab=[('A decision only a stated body may take is a ____________.', 'reserved matter'),
        ('Difficulty kept in a process on purpose is ____________.', 'deliberate friction'),
        ('The deliberate choice not to exercise a right is ____________.', 'restraint'),
        ('A boundary nobody can argue about is a ____________.', 'bright line'),
        ('A permanent recorded departure from a rule is a ____________.', 'standing exception')],
 gram=[('There is a case ____________ (revisit) the list annually.', 'for revisiting'),
       ('It remains ____________ (see) whether the list holds.', 'to be seen'),
       ('It would be premature ____________ (remove) the item.', 'to remove'),
       ('It does not ____________ (follow) that the decision is impossible.', 'follow'),
       ('There is something ____________ (say) for deliberate friction.', 'to be said')]),

found=['List the things your organisation does not automate and mark which are rules.',
       'For each rule, name the party outside the organisation who is owed an answer.',
       'Remove any item whose only reason is what systems currently do badly.',
       'State, for each remaining item, what a system may still do.'],
end_line='A capability argument looks stronger and protects nothing.',
end_next='Next: By Far, Nowhere Near',
)
