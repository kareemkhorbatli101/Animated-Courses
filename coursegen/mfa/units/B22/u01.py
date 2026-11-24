# -*- coding: utf-8 -*-
import figs

U = dict(
num=1, title='Instructions That Cannot Be Misread',
gram='authority and instruction: shall, is to, may, is authorised to',
ai='drafting instructions to a post that cannot be misread',
strap='CEFR B2 · Grammar: authority and instruction · AI: instructions that cannot be misread',
cando=['distinguish shall, is to, may and is authorised to in an instruction',
       'state a limit of authority so that a post cannot exceed it by accident',
       'say what a drafting step can do to an instruction and what it must not',
       'write an instruction whose negative half is as clear as its positive half',
       'test an instruction by asking what a tired officer would do at midnight'],
hero=('THE POST DID EXACTLY WHAT IT WAS TOLD',
      ['You may indicate flexibility on the review date.',
       'The post indicated flexibility on the review date, and on the fee.'],
      [(730, 'teal', 'long'), (1390, 'purple', 'short'),
       (2050, 'orange', 'long'), (2690, 'blue', 'short')]),
hero_cap='Legal and Treaties, reading the post’s report of what it had been authorised to say.',

warm=['What is the difference between may and is authorised to in an instruction?',
      'Have you ever carried out an instruction correctly and produced the wrong result?',
      'What would you want written down before speaking for your ministry?'],
read=[
 'Samir Haddad drafts instructions to posts. He describes the work as writing sentences that '
 'will be read once, at night, by somebody who is about to speak for the Ministry and cannot '
 'telephone for clarification.',
 'In April an instruction to Astrene said that the post may indicate flexibility on the review '
 'date. The post indicated flexibility on the review date and, in the same conversation, on '
 'the fee, having formed the reasonable view that flexibility on a date was pointless without '
 'some movement on the figure it attached to.',
 'The Ministry had no intention of moving on the fee. Nothing in the instruction forbade it, '
 'because the drafter had not thought of it, and the post had not exceeded its authority in '
 'any sense it could have detected.',
 'Since June the section has used a drafting step over its instructions. It does not write '
 'them. It takes a drafted instruction and reports four things: every verb of authority and '
 'which category it falls into, every permission with no stated limit, every subject on which '
 'the instruction is silent, and any sentence that could be read two ways. The section then '
 'decides what to do about each.',
 'Samir says the useful output is the third: the list of subjects on which the instruction '
 'says nothing. A drafter cannot see a silence in his own text, because he knows what he '
 'meant, and the step has no idea what he meant, which for this one purpose is exactly the '
 'quality required.'],
c_a=[('How does Samir describe his work?', 'writing sentences read once, at night, by somebody who cannot telephone for clarification'),
     ('What did the April instruction permit?', 'that the post may indicate flexibility on the review date'),
     ('What did the post do?', 'indicated flexibility on the date and also on the fee'),
     ('Why?', 'it formed the view that flexibility on a date was pointless without movement on the figure'),
     ('What four things does the drafting step report?', 'verbs of authority, unlimited permissions, silences, and sentences readable two ways'),
     ('Which output does Samir find most useful?', 'the list of subjects on which the instruction says nothing')],
c_b=[('The post exceeded its authority.', 'F'),
     ('The instruction forbade movement on the fee.', 'F'),
     ('The drafting step writes the instructions.', 'F'),
     ('The step reports sentences that could be read two ways.', 'T'),
     ('A drafter can see silences in his own text.', 'F'),
     ('The step knows what the drafter meant.', 'F')],
c_c=[('Somebody who is about to ____________ for the Ministry.', 'speak'),
     ('The post may indicate ____________ on the review date.', 'flexibility'),
     ('Having formed the ____________ view.', 'reasonable'),
     ('Every permission with no stated ____________.', 'limit'),
     ('A drafter cannot see a ____________ in his own text.', 'silence'),
     ('For this one purpose exactly the quality ____________.', 'required')],
c_d=[('The failure was in the ( post’s judgement / instruction’s silence ).', ['post’s judgement', 'instruction’s silence'], 1),
     ('When is an instruction read, in Samir’s description?', ['in the morning', 'once, at night', 'twice', 'in a meeting'], 1),
     ('What did the post also move on?', ['the date', 'the fee', 'the wording', 'nothing'], 1),
     ('What does the step not do?', ['report silences', 'write instructions', 'list permissions', 'flag ambiguity'], 1),
     ('Why is the step useful on silences?', ['it is faster', 'it does not know what was meant', 'it is more senior', 'it has the file'], 1)],
c_e=('Match each verb of authority to what it does.',
     [('shall', 'imposes an obligation'),
      ('is to', 'imposes an obligation in instructions to a post'),
      ('may', 'confers a permission'),
      ('is authorised to', 'confers a bounded permission'),
      ('shall not', 'imposes a prohibition'),
      ('is not authorised to', 'withholds a permission')],
     ['imposes an obligation', 'imposes an obligation in instructions to a post',
      'confers a permission', 'confers a bounded permission', 'imposes a prohibition',
      'withholds a permission']),

v_fig_title='THE PARTS OF AN INSTRUCTION',
v_fig=[('doc', 'an instruction telegram'), ('key', 'authority to act'), ('shield', 'a limit of authority'),
       ('pin', 'a prohibition'), ('clock', 'a deadline for report'), ('bulb', 'a point of reference back')],
v_fig_cap='Six parts, and the one most often missing is the third.',
vocab=[
 ('a written direction', 'a direction from the Ministry telling a post what to do or say'),
 ('an ad hoc instruction', 'an instruction issued for one occasion only'),
 ('authority to act', 'the power a post has been given to commit the Ministry'),
 ('a delegated authority', 'authority passed from one level to a lower one'),
 ('a latitude', 'room within which an officer may choose how to act'),
 ('a remit', 'the field of business an officer is responsible for'),
 ('a limit of authority', 'the point beyond which an officer may not go'),
 ('an instruction telegram', 'the despatch by which instructions reach a post'),
 ('a sign-off', 'the recorded approval that releases a document'),
 ('a counter-signatory', 'the second person whose approval a document requires'),
 ('a reporting requirement', 'what a post must report back, and about what'),
 ('a deadline for report', 'the time by which a post must have reported'),
 ('a contingency instruction', 'an instruction for a case that may not arise'),
 ('an operative instruction', 'the sentence that tells the post what to do'),
 ('a negative instruction', 'a sentence telling the post what not to do'),
 ('a prohibition', 'an express direction not to do something'),
 ('a permission', 'an express statement that something may be done'),
 ('an obligation', 'something that must be done'),
 ('a condition precedent', 'something that must happen before a step may be taken'),
 ('an escalation route', 'the named path by which a question goes to a higher level')],
v_a=[('The point beyond which an officer may not go is a ____________.', 'limit of authority'),
     ('A sentence telling the post what not to do is a ____________.', 'negative instruction'),
     ('Something that must happen before a step may be taken is a ____________.', 'condition precedent'),
     ('The named path by which a question goes higher is an ____________.', 'escalation route'),
     ('Room within which an officer may choose how to act is a ____________.', 'latitude'),
     ('The second person whose approval a document requires is a ____________.', 'counter-signatory'),
     ('An instruction for a case that may not arise is a ____________.', 'contingency instruction'),
     ('Authority passed from one level to a lower one is a ____________.', 'delegated authority')],
v_b=[('A written direction is a direction from the Ministry', 'telling a post what to do or say.'),
     ('Authority to act is the power a post has been given', 'to commit the Ministry.'),
     ('A remit is the field of business', 'an officer is responsible for.'),
     ('A reporting requirement is what a post must report back,', 'and about what.'),
     ('A prohibition is an express direction', 'not to do something.')],

g_title='Grammar: authority and instruction',
g_rule=['Shall and is to impose obligations; in instructions to a post, prefer is to.',
        'May confers a permission and must carry its limit in the same sentence.',
        'Is authorised to confers a bounded permission; state the bound.',
        'Is not authorised to withholds a permission; shall not prohibits. They are not the '
        'same and both may be needed.'],
g_fig=('LOOSE',
       ['The post should try to be flexible.',
        'The post may indicate flexibility.',
        'The post can discuss the fee if needed.',
        'The post must not go too far.'],
       'PRECISE',
       ['The post is to indicate flexibility on the review date only.',
        'The post is authorised to accept a review in 2027 and no earlier date.',
        'The post is not authorised to discuss the fee and shall not refer to it.',
        'The post is to report any request to discuss the fee within 2 hours.'],
       'a should, an unbounded may, a conditional can and a vague prohibition',
       'two obligations, one bounded authority, one prohibition and one reporting duty'),
g_fig_cap='Should has no place in an instruction; a post cannot act on an aspiration.',
g_a=[('The post ____________ indicate flexibility on the review date only.', 'is to'),
     ('The post is ____________ to accept a review in 2027 and no earlier date.', 'authorised'),
     ('The post is not authorised to discuss the fee and ____________ not refer to it.', 'shall'),
     ('The post ____________ report any such request within 2 hours.', 'is to'),
     ('The post ____________ raise the visa question at its discretion.', 'may'),
     ('No commitment ____________ be given on the figure.', 'shall'),
     ('The post is to seek instructions before ____________ (agree) any date.', 'agreeing'),
     ('The post ____________ authorised to initial the text.', 'is not'),
     ('Flexibility ____________ be indicated only on the date.', 'is to')],
g_b=[('In instructions to a post, prefer ( is to / should ) for an obligation.', ['is to', 'should'], 0),
     ('The post ____ to accept a review in 2027 and no earlier date.', ['may', 'is authorised', 'should', 'can'], 1),
     ('Which withholds a permission?', ['shall not', 'is not authorised to', 'may not wish to', 'should avoid'], 1),
     ('A may must carry', ['a date', 'its limit', 'a signature', 'a deadline'], 1),
     ('Which has no place in an instruction?', ['is to', 'should', 'shall not', 'is authorised to'], 1),
     ('Which prohibits?', ['is not authorised to', 'shall not', 'may not need to', 'is to consider'], 1)],

d1=dict(title='Nothing in it said no',
        fig=(['You moved on the fee.', 'Nothing said I could not.'],
             ['Nothing said you could.', 'It said I may indicate flexibility.']),
        cap='Samir Haddad and the officer at the post in Astrene, by telephone.',
        lines=[('Samir', 'You indicated flexibility on the fee. The instruction covered the '
                         'review date.'),
               ('Officer', 'The instruction said I may indicate flexibility on the review date. '
                           'It said nothing about the fee.'),
               ('Samir', 'Which is not a permission.'),
               ('Officer', 'It is not a prohibition either. I had four minutes, the Astrene side '
                           'asked whether a later review would come with any movement on the '
                           'figure, and a flexible date attached to a fixed figure is not a '
                           'concession at all. I took the view that the instruction’s purpose '
                           'required it.'),
               ('Samir', 'That was a reasonable view and it was wrong, and I am not going to '
                         'pretend you could have known.'),
               ('Officer', 'If the instruction had said the post is not authorised to discuss '
                           'the fee, I would have declined in one sentence and reported it.'),
               ('Samir', 'It should have said exactly that. I did not think of the fee, which '
                         'means I wrote an instruction with a hole in it and sent it to somebody '
                         'who had to stand in a room with it.'),
               ('Officer', 'Everybody writes those. The question is how you find them.'),
               ('Samir', 'Not by rereading. I knew what I meant when I wrote it, so the hole is '
                         'invisible to me and will be invisible every time.'),
               ('Officer', 'Then somebody who does not know what you meant has to read it.'),
               ('Samir', 'Which is what I am going to arrange. And the first question that '
                         'reader is asked will be: what does this instruction say nothing about?'),
               ('Officer', 'Put me on the list of readers. I will have the room in mind.')],
        a=[('What did the officer do?', 'indicated flexibility on the fee as well as the date'),
           ('What was the officer’s reasoning?', 'that a flexible date with a fixed figure is not a concession'),
           ('What would have stopped it?', 'a sentence saying the post is not authorised to discuss the fee'),
           ('Why can Samir not find such holes by rereading?', 'because he knows what he meant, so the silence is invisible to him'),
           ('What question will the new reader be asked?', 'what the instruction says nothing about')],
        b=[('It is not a ____________ either.', 'prohibition'),
           ('A flexible date attached to a fixed ____________.', 'figure'),
           ('An instruction with a ____________ in it.', 'hole'),
           ('Somebody who does not know what you ____________ has to read it.', 'meant')]),
d2=dict(title='Four outputs and no drafting',
        fig=(['It reads the instruction.', 'It does not write it.'],
             ['Why not?', 'Because authority is not a style.']),
        cap='Samir and Dr Hana Mourad.',
        lines=[('Hana', 'Your step reads instructions and does not draft them. Several sections '
                        'would want it to draft.'),
               ('Samir', 'An instruction is an exercise of authority. The sentence the post reads '
                         'is the Ministry speaking, and somebody has to have decided every word '
                         'of it on purpose.'),
               ('Hana', 'A draft could be corrected.'),
               ('Samir', 'A draft would be corrected where it was wrong and accepted where it '
                         'was plausible, and the whole difficulty in this work is that the '
                         'plausible sentence is the dangerous one. May indicate flexibility is '
                         'a plausible sentence.'),
               ('Hana', 'So it reports rather than proposes.'),
               ('Samir', 'Four reports. The verbs of authority and their category. The '
                         'permissions with no limit. The subjects on which the instruction is '
                         'silent. And the sentences that can be read two ways.'),
               ('Hana', 'The third is the one you value.'),
               ('Samir', 'The third is the one no human reader produces reliably, because a '
                         'reader supplies the context the text lacks without noticing. The step '
                         'has no context to supply.'),
               ('Hana', 'That is the first argument I have heard in this building for the '
                        'absence of understanding being a qualification.'),
               ('Samir', 'For this one task it is the whole qualification. For every other task '
                         'in my section it is the disqualification, which is why the step does '
                         'not draft.')],
        a=[('What does the step not do?', 'draft instructions'),
           ('Why is drafting refused?', 'because an instruction is an exercise of authority and every word must be decided on purpose'),
           ('Why is a plausible draft dangerous?', 'because it is accepted where it is plausible and the plausible sentence is the dangerous one'),
           ('What are the four reports?', 'verbs of authority, unlimited permissions, silences, and ambiguous sentences'),
           ('Why is the step good at silences?', 'because it has no context to supply, unlike a human reader')],
        b=[('An instruction is an exercise of ____________.', 'authority'),
           ('The ____________ sentence is the dangerous one.', 'plausible'),
           ('A reader supplies the ____________ the text lacks.', 'context'),
           ('For every other task it is the ____________.', 'disqualification')]),

speak=[('Say it with authority',
        ['Student A: give six instructions about your own work.',
         'Student B: classify each as obligation, permission, bounded permission or prohibition.',
         'Rewrite any that used should or can.']),
       ('Find the silence',
        ['Write three sentences of instruction and hand them to your partner.',
         'Your partner says what the instruction is silent about.',
         'Add the sentence that closes the most dangerous silence.']),
       ('At midnight',
        ['Take an instruction you have received.',
         'Say what a tired officer could do with it that you did not intend.',
         'Say which word would have prevented it.'])],

ext_title='A drafting step cannot write an instruction; it can report the silences a drafter cannot see',
ext_fig=figs.datatable('THE APRIL INSTRUCTION, AS REPORTED',
                       ['Output', 'What it found', 'Section’s decision'],
                       [['verbs of authority', '1 may, 2 is to', 'may replaced by is authorised to'],
                        ['permissions with no limit', '1: indicate flexibility', 'limit added: date only'],
                        ['subjects not mentioned', 'the fee, the duration, initialling', '3 sentences added'],
                        ['sentences readable 2 ways', '1: flexibility on the review date', 'rewritten'],
                        ['reporting requirement', 'none found', 'added: within 2 hours'],
                        ['escalation route', 'none found', 'added: Legal and Treaties']]),
ext_fig_cap='Six outputs, three of which name things that were not in the text at all.',
ext=[
 'An instruction to a post is a short document with an unusual property: it is read once, '
 'under time pressure, by somebody who is about to speak for the ministry and who cannot ask '
 'what was meant. Every other document in a foreign ministry can be clarified by a telephone '
 'call. An instruction is tested at the moment it is too late to ask.',
 'The characteristic failure is not disobedience and not ambiguity in the ordinary sense. It '
 'is silence. An instruction says the post may indicate flexibility on the review date; the '
 'other side asks whether a later date would come with movement on the fee; and the post, '
 'reasonably, treats the purpose of the instruction as requiring an answer. Nothing has been '
 'exceeded, because nothing was said.',
 'A drafter cannot find his own silences, and this is not carelessness. He knows what he '
 'meant, so when he rereads the text his knowledge fills the gap and the gap is invisible. '
 'The same is true of a colleague who has discussed the case with him. What is needed is a '
 'reader with no idea what was intended, and until recently such a reader was a luxury no '
 'section had.',
 'That is the use that has been adopted in several legal and treaty sections, and it is '
 'deliberately narrow. The step does not draft. It reports: every verb of authority and its '
 'category, every permission without a stated limit, every subject on which the text is '
 'silent, and every sentence that will carry two readings. The section decides what to do '
 'about each item, and the decisions are the exercise of authority that a drafted sentence '
 'would have quietly pre-empted.',
 'The refusal to let it draft is the important half of the practice and is argued about. A '
 'drafted instruction would be corrected where it was wrong and accepted where it was '
 'plausible, and in this field the plausible sentence is precisely the dangerous one: may '
 'indicate flexibility reads perfectly well. Authority cannot be conferred by a sentence '
 'nobody chose, and an instruction is nothing but a conferral of authority.'],
dp1=('Instruction drafting',
     'Legal and treaty sections in several foreign services adopted assisted review of '
     'instructions in 2025, reporting authority verbs, unbounded permissions and omitted '
     'subjects, while keeping drafting with the officer.',
     'Source: reported practice in diplomatic legal services, 2025–2026.'),
e_a=[('What is unusual about an instruction?', 'it is read once, under pressure, by somebody who cannot ask what was meant'),
     ('What is the characteristic failure?', 'silence: the instruction says nothing about a subject that arises'),
     ('Why can a drafter not find his own silences?', 'because his knowledge of what he meant fills the gap invisibly'),
     ('What four things does the step report?', 'authority verbs, unbounded permissions, silences and two-reading sentences'),
     ('Why is drafting refused?', 'because a plausible drafted sentence would be accepted, and authority cannot be conferred by a sentence nobody chose')],
e_b=[('An instruction can usually be clarified by telephone.', 'F'),
     ('The April failure was disobedience.', 'F'),
     ('A colleague who discussed the case can see the silences.', 'F'),
     ('The step decides what to do about each item.', 'F'),
     ('The plausible sentence is the dangerous one.', 'T'),
     ('The step drafts contingency instructions.', 'F')],

w_model=(
 'Purpose: report what the draft instruction to Astrene does not settle, so that the section '
 'can decide each point before the instruction is sent. Scope: the 1 draft instruction '
 'attached; earlier instructions on the same question are out of scope and are not to be '
 'treated as filling a gap. Inputs: the draft and the Ministry’s list of authority verbs. '
 'Criteria: list every verb of authority with its category; list every permission that has no '
 'stated limit; list every subject raised in the attached round brief on which the draft is '
 'silent; list every sentence that carries more than 1 reading, with both readings; propose '
 'nothing and redraft nothing. Done: 1 report in 5 lists, no redrafting, within 1 hour of '
 'receipt. Fallback: where it cannot be determined whether a sentence confers a permission or '
 'imposes an obligation, list it under both and say so.'),
w_fig=figs.spec_card('THE TASKING FOR AN INSTRUCTION REVIEW',
                     [('Purpose', 'what the draft does not settle, decided before sending'),
                      ('Scope', 'the 1 draft; earlier instructions excluded'),
                      ('Inputs', 'the draft and the list of authority verbs'),
                      ('Criteria', 'authority verbs, unbounded permissions, silences, double readings'),
                      ('Done', '1 report in 5 lists, no redrafting, within 1 hour'),
                      ('Fallback', 'permission or obligation unclear: list under both')]),
w_fig_cap='Propose nothing and redraft nothing is the clause that keeps the authority where it belongs.',
w_task='Write a review tasking for an instruction used in your own work.',
w_steps=['Say what the review is for and when it happens.',
         'Limit it to the document in front of it.',
         'Require silences to be listed against a named source of subjects.',
         'Forbid proposing or redrafting.',
         'Say what to do where a sentence cannot be classified.'],
w_bank=['Report what … does not settle, so that … before …',
        'Cover … ; … are out of scope and are not to be treated as …',
        'Work from … and …',
        'List every … ; list every … ; list every subject … on which … ; list every sentence … ; propose nothing and …',
        'Where it cannot be determined whether … , list it under both and …'],
w_check=['Is redrafting forbidden in words?',
         'Are silences measured against a named list of subjects?',
         'Must every authority verb be categorised?',
         'Is an unclassifiable sentence listed twice rather than judged?'],

t_title='Instructions that cannot be misread',
t_fig=figs.split('AN INSTRUCTION',
                 'Must state',
                 ['what the post is to do',
                  'what it is authorised to accept, and the bound',
                  'what it shall not do or refer to',
                  'what it must report, and by when'],
                 'Usually omits',
                 ['the subject nobody thought of',
                  'the limit on a permission',
                  'the escalation route',
                  'the case that arises at midnight']),
t_fig_cap='The right-hand column is where instructions fail, and none of it is visible to the drafter.',
t_body=[
 'An instruction is read once, at speed, by an officer who is about to speak for the Ministry '
 'and cannot ask what was meant. That makes it unlike every other document in the building: '
 'it is tested at the one moment when clarification is impossible.',
 'Its characteristic failure is silence rather than ambiguity. Tell a post that it may '
 'indicate flexibility on the review date and the other side will ask whether a later date '
 'comes with movement on the fee. The post answers, because the purpose of the instruction '
 'appears to require it, and nothing has been exceeded because nothing was said. The drafter '
 'cannot find that gap by rereading: he knows what he meant, and his knowledge fills the hole '
 'every time he looks at it.',
 'So use a reader with no idea what was intended, and keep its role narrow. A drafting step '
 'over instructions should report four things and propose none: every verb of authority with '
 'its category, every permission with no stated limit, every subject on which the text is '
 'silent, and every sentence carrying two readings. Let it draft and it will produce plausible '
 'sentences, which in this work are the dangerous ones, and authority cannot be conferred by a '
 'sentence nobody chose.'],
t_say=[('Bound the permission: ', 'The post is authorised to accept a review in 2027 and no earlier date.'),
       ('Close the silence: ', 'The post is not authorised to discuss the fee and shall not refer to it.'),
       ('Require the report: ', 'The post is to report any request to discuss the fee within 2 hours.')],
t_bound=('A drafting step can report what a text says and what it fails to say; it cannot '
         'decide what authority the Ministry wishes to confer. Its value here comes from not '
         'knowing what was intended, which is also why nothing it proposes may be adopted '
         'unread. A plausible instruction is worse than an obviously defective one.'),
t_a=[('The post is authorised to accept a review in 2027 and no ____________ date.', 'earlier'),
     ('The post is not authorised to discuss the fee and shall not ____________ to it.', 'refer'),
     ('The post is to report any such request within 2 ____________.', 'hours'),
     ('Its characteristic failure is ____________ rather than ambiguity.', 'silence'),
     ('His knowledge fills the ____________ every time he looks at it.', 'hole'),
     ('Authority cannot be conferred by a sentence nobody ____________.', 'chose')],
t_b_rubric='Rewrite each instruction with the correct verb of authority and its limit.',
t_b=[('The post should try to be flexible.', 'the post is to indicate flexibility on the review date only'),
     ('The post may indicate flexibility.', 'the post is authorised to accept a review in 2027 and no earlier date'),
     ('The post can discuss the fee if needed.', 'the post is not authorised to discuss the fee and shall not refer to it'),
     ('The post must not go too far.', 'the post is to seek instructions before agreeing any date earlier than 2027')],

case=dict(
 title='The Decision Room · The contingency nobody wrote',
 brief=[
  'The review of the next Astrene instruction lists eleven subjects on which the draft is '
  'silent. Three are plainly irrelevant. Six can be closed in a sentence each.',
  'The remaining two are contingencies: what the post is to do if the Astrene side offers a '
  'binding review in exchange for a fee increase, and what it is to do if initialling is '
  'proposed on the spot.',
  'Samir wants both written. Lina Khalil says an instruction that anticipates every '
  'contingency becomes a document nobody can read at night. Ambassador Faris Said says he '
  'would rather have four pages he can search than one page that leaves him guessing.'],
 exhibit=figs.datatable('THE REVIEW OF THE DRAFT',
                        ['', 'Figure', 'Note'],
                        [['subjects on which the draft is silent', '11', '—'],
                         ['plainly irrelevant', '3', 'section’s judgement'],
                         ['closable in 1 sentence', '6', '—'],
                         ['contingencies requiring a decision', '2', 'fee-for-review, initialling'],
                         ['length of draft', '1 page', '—'],
                         ['length if all 8 are addressed', '2.5 pages', 'estimate']]),
 exhibit_cap='Eight sentences would close the gaps and would make the instruction two and a '
            'half times longer.',
 exhibit_note='The last instruction the post reported difficulty with was 4 pages long; the '
              'officer said the relevant sentence took 3 minutes to find.',
 voices=[('Samir Haddad', 'Legal and Treaties',
          'Write both contingencies. The cost of a long instruction is three minutes of '
          'searching. The cost of a silence is a commitment the Ministry did not authorise.'),
         ('Lina Khalil', 'Bilateral Affairs',
          'Every contingency you add makes the operative sentence harder to find at eleven at '
          'night. There is a length beyond which an instruction stops functioning as an '
          'instruction.'),
         ('Ambassador Faris Said', 'Head of Mission, Astrene',
          'Give me four pages with headings. I would rather search than guess, and a heading '
          'that says Fee lets me find it in twenty seconds.')],
 steps=[('Find it', 'How many silences are there, and of what kinds?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Faris prefer length to brevity?'),
        ('Weigh it', 'Searchability against an unauthorised commitment.'),
        ('Decide', 'What goes into the instruction, and how is it arranged?')],
 analysis=[('Find it. How many silences require a decision?', 'two contingencies'),
           ('Compare it. What is Lina’s objection?', 'that length makes the operative sentence hard to find at night'),
           ('Infer it. What does a heading give Faris?', 'the relevant sentence in twenty seconds'),
           ('Weigh it. What did the four-page instruction cost the post?', 'three minutes to find the relevant sentence'),
           ('Decide. What would you do?', 'answers vary; headings convert a length problem into a search problem')],
 decision='Write how the instruction is to be structured.',
 decision_steps=['Say whether the two contingencies are written.',
                 'Say how the instruction is arranged for finding.',
                 'Say what the first page must contain whatever the length.',
                 'Say what the post is to do on a subject not covered at all.'],
 bank=['The 2 contingencies are …',
       'The instruction is arranged …',
       'The first page carries … whatever the length.',
       'On a subject not covered, the post is to …',
       'This is reviewed …'],
 outcome='Both contingencies were written, the instruction went out at two and a half pages '
         'with headings, and the first page carried the operative instruction, the limits and '
         'the escalation route. A standing sentence was added to the house form: on any subject '
         'not covered by this instruction the post is to decline to express a view and report '
         'within 2 hours. In the following year that sentence was invoked by posts nineteen '
         'times, in eleven cases on subjects nobody in the Ministry had foreseen. Lina, who '
         'had argued for brevity, says the headings answered her objection and the standing '
         'sentence answered a problem she had not raised, which was that no instruction can '
         'anticipate everything however long it is.',
 outcome_q=[('How was the instruction arranged?', 'two and a half pages with headings, the operative instruction and limits on page one'),
            ('What standing sentence was added?', 'on an uncovered subject the post is to decline a view and report within two hours')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Instruct the post',
 task=['This is the April instruction to Astrene, in the form in which it was sent and '
       'carried out.',
       'The post did exactly what it said and committed the Ministry on a figure it had not '
       'considered.'],
 draft=['The post should press for a later review date.',
        'The post may indicate flexibility on the review date.',
        'Be firm on the principle.',
        'Report the outcome.',
        'Consult if necessary.',
        'Senior staff at post may use their judgement.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the one that caused the damage is the only one that looks precise.',
 asked=['Flexibility bounded to the date alone',
        'The fee expressly excluded',
        'A reporting deadline and an escalation route'],
 back=['Flexibility indicated on the date and the fee',
       'A commitment the Ministry had not authorised',
       'No report for 3 days'],
 gap='"Should press" is an aspiration, "may indicate flexibility" has no limit, "firm on the '
     'principle" names no principle, "report the outcome" sets no time, and the judgement '
     'clause has no boundary.',
 back_cap='An instruction carried out faithfully, producing a position the Ministry did not '
          'hold.',
 back_note='Line two is the failure, and it is a failure of silence: the fee is not mentioned, '
           'so the post had to decide.',
 diagnosis=[('[1] "should press" — obligation or aspiration?', 'ambiguous referent'),
            ('[2] "may indicate flexibility" — on what, and up to what point?', 'unscoped set'),
            ('[3] "firm on the principle" — which principle?', 'ambiguous referent'),
            ('[4] "report the outcome" — by when, and to whom?', 'undefined done'),
            ('[5] "consult if necessary" — consulted meaning what, and completed when?', 'undefined done'),
            ('[6] "may use their judgement" — within what limit?', 'unscoped set')],
 rewrite='Rewrite the instruction so that the permission is bounded and the fee is excluded.',
 scaffold=['What the post is to achieve and for whom',
           'The subjects covered, and the subjects expressly excluded',
           'What the post is to work from',
           'The obligation, the bounded authority, the prohibition and the reporting duty',
           'What must have happened, and by when',
           'What the post is to do on a subject not covered'],
 bank=['The post is to … so that …',
       'This instruction covers … ; … is expressly excluded.',
       'The post is to work from …',
       'The post is to … ; is authorised to … and no … ; is not authorised to … and shall not … ; is to report …',
       'The post is to have … by …',
       'On any subject not covered, the post is to … and report within …'],
 check=['Is every permission bounded in the same sentence?',
        'Is the excluded subject named?',
        'Is there a reporting deadline?',
        'Is there a rule for an uncovered subject?'],
 model=['The post is to seek a review date no earlier than 2027 so that the Ministry retains the position agreed in March',
        'This instruction covers the review date and the duration of the arrangement; the fee is expressly excluded',
        'The post is to work from this instruction and the round brief of 2 April',
        'The post is to indicate flexibility on the review date only; is authorised to accept a review in 2027 and no earlier date; is not authorised to discuss the fee and shall not refer to it; is to report any request to discuss the fee within 2 hours',
        'The post is to have reported the outcome of the round to Legal and Treaties by 09:00 the following day',
        'On any subject not covered by this instruction the post is to decline to express a view and report within 2 hours'],
 cost='1 indication of flexibility on a fee the Ministry had no intention of moving, given in '
      'good faith by an officer with 4 minutes and no sentence to rely on.'),

rev_fig=figs.split('AUTHORITY',
                   'Unusable',
                   ['The post should try to be flexible.',
                    'The post may indicate flexibility.',
                    'The post can discuss the fee if needed.',
                    'The post must not go too far.'],
                   'Usable',
                   ['The post is to indicate flexibility on the date only.',
                    'Is authorised to accept 2027 and no earlier.',
                    'Is not authorised to discuss the fee.',
                    'Is to report any such request within 2 hours.']),
rev_fig_cap='Shall, is to, may, is authorised to, is not authorised to, shall not.',
rev=dict(
 read=[('An instruction is tested', ['in the office', 'when clarification is impossible', 'at drafting', 'in review'], 1),
       ('Its characteristic failure is', ['disobedience', 'silence', 'length', 'tone'], 1),
       ('The step is valuable on silences because it', ['is faster', 'has no context to supply', 'is senior', 'reads twice'], 1),
       ('In the Decision Room, what standing sentence was added?', ['nothing', 'decline a view and report in 2 hours', 'use judgement', 'consult if necessary'], 1)],
 listen_text='A drafter cannot find his own silences, and this is not carelessness. He knows '
             'what he meant, so when he rereads the text his knowledge fills the gap and the '
             'gap is invisible. What is needed is a reader with no idea what was intended.',
 listen=[('A drafter cannot find his own ____________.', 'silences'),
         ('This is not ____________.', 'carelessness'),
         ('His knowledge fills the ____________.', 'gap'),
         ('A reader with no idea what was ____________.', 'intended')],
 speak=['Give one instruction with its authority verb, its limit and its reporting duty.',
        'Say what an instruction you have received was silent about.'],
 write='Write one sentence closing a silence in an instruction.',
 vocab=[('The point beyond which an officer may not go is a ____________.', 'limit of authority'),
        ('A sentence telling the post what not to do is a ____________.', 'negative instruction'),
        ('Something that must happen before a step may be taken is a ____________.', 'condition precedent'),
        ('The named path by which a question goes higher is an ____________.', 'escalation route'),
        ('An instruction for a case that may not arise is a ____________.', 'contingency instruction')],
 gram=[('The post ____________ indicate flexibility on the review date only.', 'is to'),
       ('The post is ____________ to accept a review in 2027 and no earlier date.', 'authorised'),
       ('The post is not authorised to discuss the fee and ____________ not refer to it.', 'shall'),
       ('The post ____________ report any such request within 2 hours.', 'is to'),
       ('No commitment ____________ be given on the figure.', 'shall')]),

found=['Take an instruction you have sent or received and list what it is silent about.',
       'Bound one permission in it in the same sentence.',
       'Add a reporting deadline to one instruction this week.',
       'Ask what your office does on a subject no instruction covers.'],
end_line='Nothing was exceeded, because nothing was said.',
end_next='Next: What Changed Between Versions',
)
