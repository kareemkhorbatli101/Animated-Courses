# -*- coding: utf-8 -*-
import figs

U = dict(
num=4, title='Who Answers for the Brief',
gram='stance reporting verbs: claim, acknowledge, concede, maintain',
ai='accountability for a brief a system helped write',
strap='CEFR C1 · Grammar: stance reporting verbs · AI: who answers for the brief',
cando=['choose between claim, acknowledge, concede and maintain accurately',
       'report a position without endorsing or dismissing it',
       'say who answers for a document a system helped produce',
       'see why a defence of reliance is not available to a signatory',
       'write a sign-off that states what the signatory has personally checked'],
hero=('I SIGNED IT',
      ['Three sections contributed, a drafting step produced the first version.',
       'One name is at the bottom, and the question has only one answer.'],
      [(730, 'orange', 'long'), (1390, 'blue', 'short'),
       (2050, 'teal', 'long'), (2690, 'purple', 'short')]),
hero_cap='The Ministry, in the week a brief was examined paragraph by paragraph.',

warm=['Who answers for a document that four people contributed to?',
      'Does it change if part of it was drafted by a system?',
      'What have you personally checked when you sign something?'],
read=[
 'In March a brief given to the Minister was found to contain a figure that was eleven months '
 'out of date. The consequence was small: the Minister used it in a meeting and was corrected '
 'politely by the other side.',
 'The examination that followed established the history. A drafting step had produced the first '
 'version, drawing the figure from a source that was current when the step was configured. '
 'Two sections had contributed text. A desk officer had assembled the brief. A head of section '
 'had cleared it. A Director had signed it.',
 'Each of the five said something true. The step had taken the figure from the source it was '
 'pointed at. The two sections maintained that they had contributed only the paragraphs they '
 'were asked for. The desk officer acknowledged that she had not checked figures she had not '
 'written. The head of section conceded that his clearance had been of the argument and not of '
 'the data.',
 'The Director said: I signed it. Karim Dalati, who conducted the examination, says that '
 'sentence ended a line of enquiry that would otherwise have run for three weeks, and that it '
 'is the only sentence in the whole file with no qualification in it.',
 'The rule that came out of it is about the sign-off rather than about the drafting. A '
 'signature now carries a statement of what the signatory has personally verified: the figures, '
 'or the argument, or the sources, or none of them. Karim says the rule has made some '
 'signatures longer and some briefs slower, and that the useful effect was on the people who '
 'discovered, on writing the statement, that the honest version was none of them.'],
c_a=[('What was wrong with the March brief?', 'it contained a figure eleven months out of date'),
     ('What was the consequence?', 'the Minister used it and was corrected politely by the other side'),
     ('What had produced the first version?', 'a drafting step, drawing the figure from a source current when it was configured'),
     ('How many people were in the chain?', 'five: the step, two sections, a desk officer, a head of section and a Director'),
     ('What did the Director say?', 'I signed it'),
     ('What does a signature now carry?', 'a statement of what the signatory has personally verified')],
c_b=[('The error had a serious consequence.', 'F'),
     ('The source had been current when the step was configured.', 'T'),
     ('The desk officer had checked all the figures.', 'F'),
     ('The head of section had cleared the data.', 'F'),
     ('The Director’s sentence contained a qualification.', 'F'),
     ('The new rule changes the drafting.', 'F')],
c_c=[('Corrected ____________ by the other side.', 'politely'),
     ('Current when the step was ____________.', 'configured'),
     ('She had not checked figures she had not ____________.', 'written'),
     ('His clearance had been of the argument and not of the ____________.', 'data'),
     ('The only sentence in the whole file with no ____________ in it.', 'qualification'),
     ('The honest version was ____________ of them.', 'none')],
c_d=[('The rule addresses the ( sign-off / drafting ).', ['sign-off', 'drafting'], 0),
     ('How out of date was the figure?', ['one month', 'eleven months', 'a year', 'three weeks'], 1),
     ('What did the head of section concede?', ['nothing', 'that his clearance was of the argument only', 'that he wrote the figure', 'that he did not read it'], 1),
     ('What ended the line of enquiry?', ['the step’s configuration', 'the Director’s sentence', 'the sections’ statements', 'the desk officer'], 1),
     ('What did some people discover on writing the statement?', ['that they had checked everything', 'that the honest version was none of them', 'that the rule was wrong', 'that signatures are shorter'], 1)],
c_e=('Match each verb to the stance it reports.',
     [('claims', 'asserts, and the writer does not endorse'),
      ('acknowledges', 'accepts a fact against their own interest'),
      ('concedes', 'yields a point under pressure'),
      ('maintains', 'continues to assert against contradiction'),
      ('states', 'asserts, neutrally reported'),
      ('denies', 'rejects an assertion')],
     ['asserts, and the writer does not endorse', 'accepts a fact against their own interest',
      'yields a point under pressure', 'continues to assert against contradiction',
      'asserts, neutrally reported', 'rejects an assertion']),

v_fig_title='THE CHAIN',
v_fig=[('people', 'a responsible officer'), ('doc', 'an approval chain'), ('key', 'a sign-off statement'),
       ('shield', 'a duty of care'), ('pin', 'an attribution of authorship'), ('bulb', 'a defence of reliance')],
v_fig_cap='Six words for the question of who answers when five people contributed.',
vocab=[
 ('an accountability', 'the position of having to answer for something'),
 ('a responsible officer', 'the officer who must answer for a document or decision'),
 ('a sign-off statement', 'the words accompanying a signature, stating what was checked'),
 ('an approval chain', 'the sequence of people through whom a document passed'),
 ('a delegated decision', 'a decision taken under authority given by another'),
 ('a liability', 'legal responsibility for a consequence'),
 ('a disciplinary consequence', 'a sanction following a failure of duty'),
 ('an institutional responsibility', 'responsibility borne by a body rather than a person'),
 ('a personal responsibility', 'responsibility borne by a named individual'),
 ('an attribution of authorship', 'the statement of who wrote what'),
 ('a declaration of assistance', 'a statement that a document was produced with assistance'),
 ('an assurance', 'a statement given to allow another to rely on something'),
 ('a defence of reliance', 'the argument that one relied reasonably on another’s work'),
 ('a duty of care', 'the obligation to take the care a reasonable officer would take'),
 ('a standard of diligence', 'the degree of checking expected in the circumstances'),
 ('a reasonable officer', 'the notional officer whose conduct sets the standard'),
 ('a post-hoc justification', 'a reason produced after the fact'),
 ('a blameless error', 'an error no reasonable care would have prevented'),
 ('a culpable omission', 'a failure to do what duty required'),
 ('a shared responsibility', 'responsibility held by more than one person at once')],
v_a=[('The words accompanying a signature, stating what was checked, are a ____________.', 'sign-off statement'),
     ('The argument that one relied reasonably on another’s work is a ____________.', 'defence of reliance'),
     ('The notional officer whose conduct sets the standard is a ____________.', 'reasonable officer'),
     ('An error no reasonable care would have prevented is a ____________.', 'blameless error'),
     ('A failure to do what duty required is a ____________.', 'culpable omission'),
     ('A statement that a document was produced with assistance is a ____________.', 'declaration of assistance'),
     ('The degree of checking expected in the circumstances is a ____________.', 'standard of diligence'),
     ('The sequence of people through whom a document passed is an ____________.', 'approval chain')],
v_b=[('An accountability is the position of having', 'to answer for something.'),
     ('A delegated decision is a decision taken', 'under authority given by another.'),
     ('An assurance is a statement given', 'to allow another to rely on something.'),
     ('A post-hoc justification is a reason', 'produced after the fact.'),
     ('A shared responsibility is responsibility held', 'by more than one person at once.')],

g_title='Grammar: stance reporting verbs',
g_rule=['Claims reports an assertion the writer does not endorse; states reports it neutrally.',
        'Acknowledges reports acceptance of a fact against the speaker’s own interest.',
        'Concedes reports a point yielded under pressure; maintains reports continued '
        'assertion against contradiction.',
        'The verb is the writer’s judgement and must be defensible: a wrong verb is a wrong '
        'report.'],
g_fig=('LOOSE',
       ['The section said they only wrote two paragraphs.',
        'The officer said she had not checked the figures.',
        'The head of section said his clearance was of the argument.',
        'The Director said he signed it.'],
       'PRECISE',
       ['The 2 sections maintain that they contributed only the paragraphs requested.',
        'The desk officer acknowledges that she did not check figures she had not written.',
        'The head of section concedes that his clearance was of the argument and not the '
        'data.',
        'The Director states that he signed the brief.'],
       'four neutral reports that lose the stance of each speaker',
       'four reports in which the verb carries the stance accurately'),
g_fig_cap='Said is accurate about the words and silent about the position; in an examination '
          'the position is the finding.',
g_a=[('The 2 sections ____________ that they contributed only the paragraphs requested.', 'maintain'),
     ('The desk officer ____________ that she did not check figures she had not written.', 'acknowledges'),
     ('The head of section ____________ that his clearance was of the argument.', 'concedes'),
     ('The Director ____________ that he signed the brief.', 'states'),
     ('The provider ____________ that the source was current when configured.', 'claims'),
     ('Nobody ____________ that the figure was checked.', 'maintains'),
     ('The section ____________ any responsibility for figures it did not supply.', 'denies'),
     ('The officer ____________ that the practice had been the same for 3 years.', 'points out'),
     ('The Director ____________ no defence of reliance.', 'advances')],
g_b=[('Claims reports an assertion the writer ( endorses / does not endorse ).', ['endorses', 'does not endorse'], 1),
     ('Which reports acceptance against one’s own interest?', ['claims', 'acknowledges', 'maintains', 'denies'], 1),
     ('Which reports a point yielded under pressure?', ['states', 'concedes', 'claims', 'maintains'], 1),
     ('Which reports continued assertion against contradiction?', ['concedes', 'maintains', 'acknowledges', 'states'], 1),
     ('A wrong verb is', ['a stylistic matter', 'a wrong report', 'neutral', 'a hedge'], 1),
     ('Said is silent about', ['the words', 'the position', 'the date', 'the speaker'], 1)],

d1=dict(title='I signed it',
        fig=(['Five contributors.', 'And one signature.'],
             ['Whose figure was it?', 'Mine. I signed it.']),
        cap='Karim Dalati and the Director who signed the March brief.',
        lines=[('Karim', 'The figure came from a source the drafting step was pointed at in '
                         '2024. Two sections contributed text and neither wrote the figure. The '
                         'desk officer did not check it. Your head of section cleared the '
                         'argument.'),
               ('Director', 'I signed it.'),
               ('Karim', 'You are entitled to say more than that. The chain is five deep and '
                          'nobody in it did anything a reasonable officer would not have done.'),
               ('Director', 'That may all be true and it does not help me. The Minister took a '
                            'figure into a meeting on my signature. If my signature means that '
                            'the brief has passed through a process, it is worth nothing, '
                            'because the Minister cannot read a process.'),
               ('Karim', 'Most of the Ministry would say a signature certifies that proper '
                          'procedures were followed.'),
               ('Director', 'Then most of the Ministry is wrong, or at least it is signing '
                            'something different from what the Minister thinks she is reading. '
                            'She thinks a named person has satisfied himself.'),
               ('Karim', 'Had you satisfied yourself about the figure?'),
               ('Director', 'No. I read the argument, which was good, and I did not look at a '
                            'single figure, and I would not have looked at a single figure in '
                            'any brief in the last four years. That is the answer to your '
                            'question and it is not a defence.'),
               ('Karim', 'It is the most useful answer I have had this week.'),
               ('Director', 'Then write the rule about signatures rather than about drafting. '
                            'The drafting was fine. What is wrong is that my signature says '
                            'nothing about what I did.')],
        a=[('How deep is the chain?', 'five'),
           ('What does the Director refuse to do?', 'say more than that he signed it'),
           ('What does he say a signature means to the Minister?', 'that a named person has satisfied himself'),
           ('Had he satisfied himself about the figure?', 'no; he read the argument and looked at no figures'),
           ('What rule does he propose?', 'a rule about signatures rather than about drafting')],
        b=[('Nobody in it did anything a ____________ officer would not have done.', 'reasonable'),
           ('The Minister cannot read a ____________.', 'process'),
           ('A named person has ____________ himself.', 'satisfied'),
           ('My signature says nothing about what I ____________.', 'did')]),
d2=dict(title='None of them',
        fig=(['The statement has four boxes.', 'And a fifth option.'],
             ['Which is?', 'None of them.']),
        cap='Karim and Dr Hana Mourad, on the new sign-off.',
        lines=[('Hana', 'Your sign-off statement asks the signatory to say what they have '
                        'personally verified: the figures, the argument, the sources, or none '
                        'of them.'),
               ('Karim', 'In those words.'),
               ('Hana', 'The fifth option is the one that will cause trouble.'),
               ('Karim', 'It is the one that matters. Four Directors have now signed briefs '
                         'stating that they verified none of it, which is honest and was always '
                         'true and had never been written down.'),
               ('Hana', 'And if a brief with none of them in the box turns out to be wrong?'),
               ('Karim', 'Then the Ministry knows exactly what the signature meant, which is '
                         'more than it knew in March. The signature still carries the '
                         'responsibility. What it no longer carries is an implication of '
                         'checking that did not happen.'),
               ('Hana', 'Does that not simply shift the pressure to the desk officer?'),
               ('Karim', 'Partly, and that is my concern with it. An officer who writes figures '
                         'verified is exposed in a way that a Director writing none of them is '
                         'not, and the officer is junior and the Director is not.'),
               ('Hana', 'So the honest statement produces an unequal exposure.'),
               ('Karim', 'An exposure that falls on the person who did the work rather than on '
                         'the person who signed, and I have no answer to it. I can see that the '
                         'old position was worse, because under it nobody’s exposure was '
                         'recorded at all, and I cannot tell you that the new one is fair.')],
        a=[('What does the sign-off ask?', 'what the signatory has personally verified: the figures, the argument, the sources, or none'),
           ('Which option matters?', 'none of them'),
           ('How many Directors have used it?', 'four'),
           ('What does the signature still carry?', 'the responsibility; what it loses is an implication of checking'),
           ('What is Karim’s unresolved concern?', 'that the exposure falls on the junior officer who did the work')],
        b=[('Honest and was always ____________.', 'true'),
           ('An implication of ____________ that did not happen.', 'checking'),
           ('The officer is ____________ and the Director is not.', 'junior'),
           ('Nobody’s exposure was ____________ at all.', 'recorded')],
        unresolved=True),

speak=[('Report the stance',
        ['Student A: state a position of your own about your work.',
         'Student B: report it with claims, states, maintains or concedes.',
         'Say why that verb and not the others.']),
       ('What did you check',
        ['Take something you signed recently.',
         'Say what you personally verified.',
         'Your partner asks what the signature implied to its reader.']),
       ('Five deep',
        ['Describe a document in your work that several people contributed to.',
         'Say who answers for it.',
         'Say who the reader thinks answers for it.'])],

ext_title='A signature is read as a personal assurance, and in a five-deep chain it has usually '
          'become a procedural one',
ext_fig=figs.datatable('THE MARCH BRIEF, FIVE DEEP',
                       ['Who', 'Stance', 'Did they check the figure?'],
                       [['the drafting step', 'took it from its configured source', 'n/a'],
                        ['section A', 'maintains it supplied 2 paragraphs only', 'no'],
                        ['section B', 'maintains the same', 'no'],
                        ['the desk officer', 'acknowledges she checked no figures she had not written', 'no'],
                        ['the head of section', 'concedes his clearance was of the argument', 'no'],
                        ['the Director', 'states that he signed it', 'no']]),
ext_fig_cap='Six rows, five defensible positions and one unqualified sentence.',
ext=[
 'A brief that reaches a minister has usually passed through four or five hands, and once a '
 'drafting step produces the first version it has passed through one more. When something in '
 'it turns out to be wrong, the examination that follows produces a characteristic result: '
 'everybody in the chain did what a reasonable officer would have done, and nobody checked the '
 'thing that was wrong.',
 'The temptation is to treat this as a problem of attribution, and to ask which link failed. '
 'It is better treated as a question about what a signature means. A minister reading a brief '
 'with a name at the bottom understands that a named person has satisfied himself about its '
 'contents. In most ministries, by the time a document has passed through a chain, the '
 'signature certifies that the chain operated, which is a different thing, and the difference '
 'is invisible to the reader.',
 'An assisted first draft sharpens this because it adds a link that cannot be asked anything. '
 'A step that drew a figure from the source it was configured to use did exactly what it was '
 'told; there is no officer in that link to acknowledge, concede or maintain anything, and a '
 'chain with such a link in it cannot be audited by asking its members what they did.',
 'The rule that works is about the sign-off and not about the drafting. A signature carries a '
 'short statement of what the signatory has personally verified: the figures, the argument, '
 'the sources, or none of them. The statement changes nothing about responsibility, which '
 'stays with the signatory, and changes what the reader is entitled to infer.',
 'Two effects follow, one intended and one not. The intended effect is that officers writing '
 'the statement discover what they actually do, and a number of senior signatories find that '
 'the honest entry is none of them, which was always the case and had never been recorded. The '
 'unintended effect is an unequal exposure: an officer who writes figures verified has made a '
 'personal assurance, while a Director who writes none of them has not, and the officer is '
 'junior. That is a real objection and the answer to it is not obvious; what can be said is '
 'that under the previous arrangement nobody’s exposure was recorded at all, and a reader was '
 'invited to infer a checking that had not occurred.'],
dp1=('Accountability for assisted documents',
     'Several foreign ministries introduced sign-off statements in 2025 specifying what a '
     'signatory had personally verified, following examinations in which every link in an '
     'approval chain was found to have acted properly.',
     'Source: reported practice in diplomatic accountability arrangements, 2025–2026.'),
e_a=[('What result does an examination characteristically produce?', 'that everybody acted reasonably and nobody checked the thing that was wrong'),
     ('What is the better question than which link failed?', 'what a signature means'),
     ('What does a minister understand a signature to mean?', 'that a named person has satisfied himself'),
     ('Why does an assisted draft sharpen the problem?', 'because it adds a link that cannot be asked anything'),
     ('What are the two effects of the sign-off statement?', 'officers discover what they actually do, and exposure becomes unequal')],
e_b=[('Somebody in the chain acted unreasonably.', 'F'),
     ('A signature usually certifies personal satisfaction in practice.', 'F'),
     ('The step can be asked what it did.', 'F'),
     ('The statement changes who is responsible.', 'F'),
     ('Some senior signatories find the honest entry is none.', 'T'),
     ('The unequal exposure has an obvious answer.', 'F')],

w_model=(
 'Purpose: record with each signature what the signatory has personally verified, so that a '
 'reader knows what the signature asserts. Scope: every brief and submission going above head '
 'of section level; internal notes within a section are out of scope. Inputs: the document, '
 'the drafting history, and the Ministry’s sign-off form. Criteria: state which of the 4 '
 'categories the signatory has personally verified, being the figures, the argument, the '
 'sources, or none of them; name any part of the document produced with drafting assistance '
 'and the source it drew on; do not permit a statement that the signatory relied on the chain; '
 'where a signatory has verified part of a category, say which part. Done: 1 sign-off '
 'statement per signature, present before the document leaves the section. Fallback: where a '
 'signatory declines to complete the statement, the document goes forward with the statement '
 'left blank and the blank recorded.'),
w_fig=figs.spec_card('THE TASKING FOR A SIGN-OFF',
                     [('Purpose', 'a reader knows what the signature asserts'),
                      ('Scope', 'briefs above head of section; internal notes excluded'),
                      ('Inputs', 'the document, the drafting history, the form'),
                      ('Criteria', '4 categories or none; assistance named; no reliance on the chain'),
                      ('Done', '1 statement per signature, before the document leaves'),
                      ('Fallback', 'declined: blank, and the blank recorded')]),
w_fig_cap='No statement that the signatory relied on the chain: that is the sentence the rule exists to prevent.',
w_task='Write a sign-off tasking for documents in your own work.',
w_steps=['Say what the reader must be able to know.',
         'Name the documents covered and those excluded.',
         'List the categories and allow none of them.',
         'Forbid a defence of reliance in the statement.',
         'Say what happens where a signatory will not complete it.'],
w_bank=['Record … so that a reader knows …',
        'Cover … ; … are out of scope.',
        'Work from … , … and …',
        'State which of the … the signatory has … , being … ; name … ; do not permit … ; where … , say …',
        'Where a signatory declines … , the document goes forward with … and …'],
w_check=['Is none of them an available answer?',
         'Is reliance on the chain excluded?',
         'Must assistance be named with its source?',
         'Is a refusal recorded rather than blocked?'],

t_title='Accountability for a brief a system helped write',
t_fig=figs.split('A SIGNATURE',
                 'What the reader infers',
                 ['a named person read this',
                  'he satisfied himself about it',
                  'he would notice an error',
                  'he answers for it'],
                 'What it often certifies',
                 ['the chain operated',
                  'each link did its own part',
                  'nobody checked the whole',
                  'he answers for it anyway']),
t_fig_cap='The last line is the same in both columns. The first three are not.',
t_body=[
 'When a brief turns out to contain an error, the examination produces the same finding every '
 'time: each person in the chain did what a reasonable officer would have done, and nobody '
 'checked the thing that was wrong. Treating that as a question of which link failed wastes '
 'three weeks, because the honest answer is none of them.',
 'Ask instead what the signature means. A minister reading a brief with a name at the bottom '
 'infers that a named person has satisfied himself about its contents; after four or five '
 'hands, what the signature usually certifies is that the chain operated. The gap is invisible '
 'to the reader, and an assisted first draft widens it by adding a link that cannot be asked '
 'anything: a step that drew a figure from its configured source did exactly as instructed and '
 'can neither acknowledge nor concede.',
 'So legislate for the sign-off rather than the drafting. A signature carries a short statement '
 'of what the signatory personally verified — figures, argument, sources, or none of them — '
 'and the responsibility does not move. Expect two effects. Officers writing the statement '
 'find out what they actually do, and senior signatories who honestly write none of them have '
 'recorded something that was always true. And the exposure becomes unequal, falling on the '
 'junior officer who writes figures verified rather than on the Director who writes none, '
 'which is a real objection to which the only answer is that the previous arrangement recorded '
 'nobody’s exposure at all.'],
t_say=[('Name what you checked: ', 'Verified personally: the argument. Not the figures.'),
       ('Name the assistance: ', 'Paragraphs 1 to 4 produced with drafting assistance from the 2024 series.'),
       ('Refuse the defence: ', 'No statement of reliance on the chain is permitted.')],
t_bound=('A sign-off statement records what a signatory did and cannot make the chain '
         'auditable, because one link in it is a step that did exactly as configured and has '
         'nothing to say. Nor does the statement redistribute responsibility, which stays with '
         'the signature; what it redistributes is exposure, and it falls hardest on the person '
         'who did the most work.'),
t_a=[('Verified personally: the argument. Not the ____________.', 'figures'),
     ('Produced with drafting ____________ from the 2024 series.', 'assistance'),
     ('No statement of ____________ on the chain is permitted.', 'reliance'),
     ('The honest answer is ____________ of them.', 'none'),
     ('A link that cannot be ____________ anything.', 'asked'),
     ('It falls hardest on the person who did the most ____________.', 'work')],
t_b_rubric='Rewrite each with the stance verb that reports the position accurately.',
t_b=[('The section said they only wrote two paragraphs.', 'the two sections maintain that they contributed only the paragraphs requested'),
     ('The officer said she had not checked the figures.', 'the desk officer acknowledges that she did not check figures she had not written'),
     ('The head of section said his clearance was of the argument.', 'the head of section concedes that his clearance was of the argument and not the data'),
     ('The Director said he signed it.', 'the Director states that he signed the brief')],

case=dict(
 title='The Decision Room · Who is exposed by honesty',
 brief=[
  'The sign-off statement has run for two quarters. Four Directors have recorded none of them; '
  'eleven desk officers have recorded figures verified.',
  'In July a figure in a brief signed with none of them was wrong, and the examination '
  'identified the desk officer who had recorded figures verified three levels below.',
  'Karim must decide whether the statement stays as it is. Rana Deeb says it has made junior '
  'officers the only exposed people in the Ministry. Samir Haddad says that is what verification '
  'means and the alternative is nobody verifying anything.'],
 exhibit=figs.datatable('TWO QUARTERS OF SIGN-OFFS',
                        ['', 'Figure', 'Note'],
                        [['briefs with a sign-off statement', '412', '—'],
                         ['signatures recording none of them', '96', 'of which 4 Directors'],
                         ['signatures recording figures verified', '71', 'mostly desk officers'],
                         ['errors found in the period', '3', '—'],
                         ['of those, traced to a figures verified entry', '2', '—'],
                         ['of those, traced to a none entry', '0', '—']]),
 exhibit_cap='Every error traced so far has landed on somebody who claimed to have checked.',
 exhibit_note='Of the 71 figures verified entries, 68 were made by officers below first '
              'secretary.',
 voices=[('Rana Deeb', 'Consular Affairs',
          'The statement has made honesty expensive for the junior and free for the senior. The '
          'only people exposed are the ones who said they did the work.'),
         ('Samir Haddad', 'Legal and Treaties',
          'Which is what a verification is. A person who says they checked a figure and did not '
          'is the only person who has made a false statement, and the Ministry cannot treat '
          'that as an unfairness.'),
         ('Karim Dalati', 'Information Security and Records',
          'Both of those are right, and the figure that worries me is the second column: '
          'ninety-six signatures recording none of them, including every Director who has '
          'signed a brief this quarter.')],
 steps=[('Find it', 'Where have the errors landed?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does the second column worry Karim?'),
        ('Weigh it', 'Honest exposure against where it falls.'),
        ('Decide', 'Does the statement stay, change, or acquire something?')],
 analysis=[('Find it. How many errors were traced to a figures verified entry?', 'two of three'),
           ('Compare it. What does Samir say a verification is?', 'a statement that one checked, which is false if one did not'),
           ('Infer it. What worries Karim?', 'that ninety-six signatures, including every Director, record none of them'),
           ('Weigh it. How many figures verified entries came from junior officers?', 'sixty-eight of seventy-one'),
           ('Decide. What would you do?', 'answers vary; requiring a verifier to be named at a senior level changes where the exposure falls')],
 decision='Write what happens to the sign-off statement.',
 decision_steps=['Say whether the statement stays in its present form.',
                 'Say what is required where a signatory records none of them.',
                 'Say who must verify figures in a brief going to a Minister.',
                 'Say what is published about the figures.'],
 bank=['The statement …',
       'Where a signatory records none of them, …',
       'Figures in a brief going to a Minister are verified by …',
       'The distribution of entries is published …',
       'This is reviewed …'],
 outcome='The statement stayed, with one addition: where a signatory records none of them, the '
         'brief must name the person who did verify the figures, and that person must be at or '
         'above first secretary. The effect was that figures verified entries moved up the '
         'Ministry: within two quarters, forty-one of seventy-four such entries were made at '
         'first secretary level or above, and the number of briefs on which no figure had been '
         'verified by anybody fell from fourteen to one. Rana, who had argued that the statement '
         'exposed the junior, says the addition answered her objection by making seniority a '
         'condition of verification rather than a shield from it.',
 outcome_q=[('What was added?', 'that a none entry must name a verifier at or above first secretary'),
            ('What was the effect?', 'verification entries moved up the Ministry and unverified briefs fell from fourteen to one')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Clear the brief',
 task=['This is the clearance instruction in force in March, and it is the instruction every '
       'link in the chain complied with.',
       'A figure eleven months out of date reached a Minister through five hands.'],
 draft=['Briefs are to be cleared before submission.',
        'Each contributing section is responsible for its own material.',
        'The desk officer assembles and checks the brief.',
        'The head of section clears it.',
        'The signatory satisfies himself that it is in order.',
        'Record the clearances on the file.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines in which everybody is responsible for something and nobody for the '
           'figure.',
 asked=['A statement of what each signatory personally verified',
        'Assistance named with its source',
        'No defence of reliance available'],
 back=['Five compliant clearances',
       'A figure 11 months out of date',
       'Nobody who had checked it, and nobody at fault'],
 gap='"Its own material" leaves derived material unowned, "checks the brief" does not say '
     'what, "satisfies himself that it is in order" is a form of words with no content, and '
     '"record the clearances" records that the chain operated.',
 back_cap='A chain in which every link discharged a duty and the document was not checked.',
 back_note='Line five is the failure. In order means whatever the signatory took it to mean, '
           'and after five hands it meant that the chain had operated.',
 diagnosis=[('[1] "cleared before submission" — cleared as to what?', 'unstated criterion'),
            ('[2] "its own material" — and material a drafting step produced?', 'ambiguous referent'),
            ('[3] "assembles and checks the brief" — checks which elements?', 'ambiguous referent'),
            ('[4] "the head of section clears it" — clears what, to what standard?', 'unstated criterion'),
            ('[5] "satisfies himself that it is in order" — satisfied by what act?', 'undefined done'),
            ('[6] "record the clearances" — recording what each person did or that they signed?', 'undefined done')],
 rewrite='Rewrite the instruction so that each signature states what was personally verified.',
 scaffold=['What a reader must be able to know from a signature',
           'The documents covered and those excluded',
           'The document, the drafting history and the form',
           'The categories or none, assistance named, no reliance, partial verification specified',
           'One statement per signature, before the document leaves',
           'What happens where a signatory will not complete the statement'],
 bank=['Record … so that a reader knows …',
       'Cover … ; … are out of scope.',
       'Work from … , … and …',
       'State which of the … , being … ; name … ; do not permit … ; where … , say …',
       'Return 1 … per signature, present before …',
       'Where a signatory declines … , …'],
 check=['Does each signature state what was verified?',
        'Is none of them permitted as an answer?',
        'Is assistance named with its source?',
        'Is reliance on the chain excluded?'],
 model=['Record with each signature what the signatory has personally verified, so that a reader knows what the signature asserts',
        'Every brief and submission going above head of section level; internal notes within a section are out of scope',
        'The document, the drafting history, and the Ministry’s sign-off form',
        'State which of the 4 categories the signatory has personally verified, being the figures, the argument, the sources, or none of them; name any part of the document produced with drafting assistance and the source it drew on; do not permit a statement that the signatory relied on the chain; where a signatory has verified part of a category, say which part',
        '1 sign-off statement per signature, present before the document leaves the section',
        'Where a signatory declines to complete the statement, the document goes forward with the statement left blank and the blank recorded'],
 cost='1 figure 11 months out of date used by a Minister in a meeting, through a chain of 5 in '
      'which every link had complied with the instruction.'),

rev_fig=figs.split('STANCE VERBS',
                   'Said',
                   ['The section said they wrote two paragraphs.',
                    'The officer said she had not checked.',
                    'The head said his clearance was of the argument.',
                    'The Director said he signed it.'],
                   'With stance',
                   ['The sections maintain …',
                    'The officer acknowledges …',
                    'The head of section concedes …',
                    'The Director states …']),
rev_fig_cap='Claims, states, acknowledges, concedes, maintains, denies — each a judgement by the writer.',
rev=dict(
 read=[('An examination of a chain usually finds', ['one failed link', 'that everybody acted reasonably', 'negligence', 'a false statement'], 1),
       ('A minister infers from a signature that', ['the chain operated', 'a named person satisfied himself', 'it was drafted well', 'the figures are current'], 1),
       ('An assisted draft adds a link that', ['can be asked', 'cannot be asked anything', 'checks figures', 'signs'], 1),
       ('In the Decision Room, what was added to the statement?', ['nothing', 'a named verifier at first secretary or above', 'a new category', 'a signature block'], 1)],
 listen_text='A minister reading a brief with a name at the bottom understands that a named '
             'person has satisfied himself about its contents. By the time a document has '
             'passed through a chain, the signature certifies that the chain operated, which '
             'is a different thing.',
 listen=[('A name at the ____________.', 'bottom'),
         ('A named person has ____________ himself.', 'satisfied'),
         ('The signature certifies that the chain ____________.', 'operated'),
         ('Which is a ____________ thing.', 'different')],
 speak=['Report three positions with claims, concedes and maintains.',
        'Say what you personally verified in the last thing you signed.'],
 write='Write one sign-off statement naming what you verified and what you did not.',
 vocab=[('The words accompanying a signature, stating what was checked, are a ____________.', 'sign-off statement'),
        ('The argument that one relied reasonably on another’s work is a ____________.', 'defence of reliance'),
        ('The notional officer whose conduct sets the standard is a ____________.', 'reasonable officer'),
        ('A failure to do what duty required is a ____________.', 'culpable omission'),
        ('A statement that a document was produced with assistance is a ____________.', 'declaration of assistance')],
 gram=[('The 2 sections ____________ that they contributed only the paragraphs requested.', 'maintain'),
       ('The desk officer ____________ that she did not check figures she had not written.', 'acknowledges'),
       ('The head of section ____________ that his clearance was of the argument.', 'concedes'),
       ('The Director ____________ that he signed the brief.', 'states'),
       ('The provider ____________ that the source was current when configured.', 'claims')]),

found=['Write down what you personally verified in the last document you signed.',
       'Ask what your signature is understood to assert.',
       'Report three colleagues’ positions with accurate stance verbs.',
       'Find one document in your office that a chain cleared and nobody checked.'],
end_line='The honest entry is sometimes none of them, and it was always true.',
end_next='Next: Where the Slant Entered',
)
