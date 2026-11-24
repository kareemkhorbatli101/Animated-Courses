# -*- coding: utf-8 -*-
import figs

U = dict(
num=9, title='Rehearsing Against Nobody',
gram='concession in drafting: notwithstanding, without prejudice to',
ai='rehearsing a negotiation against a simulated counterpart',
strap='CEFR B2 · Grammar: concession in drafting · AI: rehearsing against nobody',
cando=['use notwithstanding and without prejudice to correctly in a text',
       'concede a point in drafting without conceding a position',
       'say what a rehearsal against a simulated counterpart is good for',
       'name the thing a rehearsal cannot supply',
       'write a rehearsal tasking that states what the counterpart may not do'],
hero=('THE ROOM WAS NOT LIKE THAT',
      ['Eleven rehearsals, and the delegation answered every question fluently.',
       'The Oristani delegate said nothing for forty minutes and then asked one thing.'],
      [(730, 'teal', 'long'), (1390, 'blue', 'short'),
       (2050, 'orange', 'long'), (2690, 'purple', 'short')]),
hero_cap='The Diplomatic Institute, where rehearsals are run, and the room where they are not.',

warm=['How does your office prepare somebody for a difficult meeting?',
      'What can a rehearsal teach, and what can it only pretend to teach?',
      'What does a real counterpart do that a rehearsal will not?'],
read=[
 'Maya Sarkis runs rehearsals at the Diplomatic Institute. Before a round, a delegation sits '
 'in a room and is put through the questions it is likely to face, and since the spring the '
 'counterpart has been simulated rather than played by a colleague.',
 'The gain is in volume and in availability. A colleague playing an Oristani delegate can be '
 'found for two hours on a Thursday; a simulated counterpart can be faced eleven times in a '
 'week, at midnight, by a third secretary who would never have been given two hours of a '
 'senior officer’s time.',
 'What it is good at is also specific. It asks the obvious hostile questions reliably, it '
 'never gets tired, it does not let a delegate off a weak answer out of politeness, and it '
 'will press the same point six times, which is uncomfortable and is what the other side '
 'sometimes does.',
 'In May a delegation that had rehearsed eleven times went to Astrene. The Oristani delegate '
 'said nothing for the first forty minutes, let the Ministry’s side set out its position in '
 'full, and then asked one question about a figure in paragraph 9. Nobody had rehearsed '
 'silence.',
 'Maya says this is not a defect to be fixed by better rehearsals. A simulated counterpart '
 'engages, because engagement is what it is for, and the hardest things a real negotiator does '
 'are not moves but absences: not replying, not objecting where an objection was expected, '
 'allowing a long silence to make somebody fill it. She now ends every rehearsal with one '
 'instruction, which is that the delegation prepare for the counterpart doing nothing.'],
c_a=[('What has changed since the spring?', 'the counterpart is simulated rather than played by a colleague'),
     ('What is the gain?', 'volume and availability: eleven rehearsals in a week, at any hour'),
     ('What is it good at?', 'asking hostile questions reliably, not tiring, and pressing a point six times'),
     ('What did the Oristani delegate do?', 'said nothing for forty minutes, then asked one question about a figure'),
     ('Why is that not a fixable defect?', 'because a simulated counterpart engages, and engagement is what it is for'),
     ('How does Maya end every rehearsal now?', 'with an instruction to prepare for the counterpart doing nothing')],
c_b=[('A colleague can be found for eleven rehearsals a week.', 'F'),
     ('The simulated counterpart tires.', 'F'),
     ('It will press the same point repeatedly.', 'T'),
     ('The delegation had rehearsed silence.', 'F'),
     ('Maya thinks better rehearsals would fix it.', 'F'),
     ('The hardest things a negotiator does are moves.', 'F')],
c_c=[('A third secretary who would never have been given two hours of a ____________ officer’s time.', 'senior'),
     ('It does not let a delegate off a weak ____________ out of politeness.', 'answer'),
     ('It will press the same point six ____________.', 'times'),
     ('Let the Ministry’s side set out its position in ____________.', 'full'),
     ('The hardest things a real negotiator does are not moves but ____________.', 'absences'),
     ('Prepare for the counterpart doing ____________.', 'nothing')],
c_d=[('The failure was that nobody had rehearsed ( weak answers / silence ).', ['weak answers', 'silence'], 1),
     ('How many rehearsals had the delegation had?', ['two', 'eleven', 'six', 'forty'], 1),
     ('How long was the silence?', ['six minutes', 'forty minutes', 'two hours', 'a day'], 1),
     ('What did the delegate then ask about?', ['the preamble', 'a figure in paragraph 9', 'the annex', 'the date'], 1),
     ('What does a simulated counterpart always do?', ['stay silent', 'engage', 'object', 'concede'], 1)],
c_e=('Match each concession formula to its effect.',
     [('notwithstanding paragraph 2', 'overrides the other provision'),
      ('without prejudice to paragraph 2', 'leaves the other provision intact'),
      ('subject to paragraph 2', 'gives way to the other provision'),
      ('for the avoidance of doubt', 'states what was already the case'),
      ('nothing in this Article affects', 'preserves rights elsewhere'),
      ('save as provided in paragraph 2', 'excepts the other provision')],
     ['overrides the other provision', 'leaves the other provision intact',
      'gives way to the other provision', 'states what was already the case',
      'preserves rights elsewhere', 'excepts the other provision']),

v_fig_title='THE PARTS OF A REHEARSAL',
v_fig=[('people', 'a role-play'), ('bulb', 'a devil’s advocate'), ('clock', 'a time pressure'),
       ('pin', 'a hostile question'), ('doc', 'a debrief'), ('shield', 'a weakness exposed')],
v_fig_cap='Six words for the apparatus of being asked something before it matters.',
vocab=[
 ('a rehearsal', 'a practice run of something that will be done for real'),
 ('a simulated counterpart', 'a stand-in for the other side in a practice run'),
 ('a role-play', 'an exercise in which people act out positions'),
 ('a devil’s advocate', 'somebody appointed to argue the opposite case'),
 ('a stress test', 'an exercise designed to find where something fails'),
 ('a tabletop exercise', 'a discussion-based exercise around a table'),
 ('a scenario', 'a described situation used as the basis of an exercise'),
 ('a hostile question', 'a question designed to expose a weakness'),
 ('an unexpected move', 'a step the other side was not prepared for'),
 ('a prepared answer', 'a reply worked out in advance'),
 ('an improvised answer', 'a reply made up in the moment'),
 ('a fallback rehearsal', 'practice in moving to a second position'),
 ('a time pressure', 'a limit that forces a decision before it is ready'),
 ('a dress rehearsal', 'a final practice run under real conditions'),
 ('a debrief', 'the discussion after an exercise about what happened'),
 ('a lesson recorded', 'a finding written down so that it survives'),
 ('a weakness exposed', 'a failure found in practice rather than in the event'),
 ('a false confidence', 'confidence produced by practice that was too easy'),
 ('a predictable counterpart', 'an opposite side whose moves can be anticipated'),
 ('an unpredictable counterpart', 'an opposite side whose moves cannot be anticipated')],
v_a=[('A stand-in for the other side in a practice run is a ____________.', 'simulated counterpart'),
     ('Somebody appointed to argue the opposite case is a ____________.', 'devil’s advocate'),
     ('Confidence produced by practice that was too easy is a ____________.', 'false confidence'),
     ('A finding written down so that it survives is a ____________.', 'lesson recorded'),
     ('A final practice run under real conditions is a ____________.', 'dress rehearsal'),
     ('An exercise designed to find where something fails is a ____________.', 'stress test'),
     ('A limit that forces a decision before it is ready is a ____________.', 'time pressure'),
     ('The discussion after an exercise is a ____________.', 'debrief')],
v_b=[('A rehearsal is a practice run of something', 'that will be done for real.'),
     ('A scenario is a described situation used', 'as the basis of an exercise.'),
     ('A hostile question is a question designed', 'to expose a weakness.'),
     ('A fallback rehearsal is practice in moving', 'to a second position.'),
     ('A weakness exposed is a failure found in practice', 'rather than in the event.')],

g_title='Grammar: concession in drafting',
g_rule=['Notwithstanding X means this provision applies even though X says otherwise.',
        'Without prejudice to X means this provision leaves X entirely as it is.',
        'Subject to X means this provision gives way where X applies.',
        'These three are not interchangeable and reversing one reverses the provision.'],
g_fig=('LOOSE',
       ['Despite paragraph 2, access shall be granted.',
        'Without affecting paragraph 2, access shall be granted.',
        'Subject to anything else, access shall be granted.',
        'Notwithstanding anything, the fee stands.'],
       'PRECISE',
       ['Notwithstanding paragraph 2, access shall be granted.',
        'Without prejudice to paragraph 2, access shall be granted.',
        'Subject to paragraph 2, access shall be granted.',
        'Notwithstanding paragraphs 4 and 5, the fee shall not be altered.'],
       'two near-formulas and two provisions with nothing identified',
       'four provisions in which the relationship is exact'),
g_fig_cap='Notwithstanding overrides; without prejudice to preserves; subject to gives way.',
g_a=[('____________ paragraph 2, access shall be granted.', 'Notwithstanding'),
     ('Without ____________ to paragraph 2, access shall be granted.', 'prejudice'),
     ('____________ to paragraph 2, access shall be granted.', 'Subject'),
     ('Notwithstanding paragraphs 4 and 5, the fee shall ____________ be altered.', 'not'),
     ('Nothing in this Article ____________ rights under Article 9.', 'affects'),
     ('____________ as provided in paragraph 2, the Parties shall consult.', 'Save'),
     ('For the avoidance of ____________, the review is not automatic.', 'doubt'),
     ('This Article is ____________ to the dispute settlement clause.', 'subject'),
     ('Without prejudice to the foregoing, the Parties ____________ consult.', 'shall')],
g_b=[('Notwithstanding X means this provision ( overrides / gives way to ) X.', ['overrides', 'gives way to'], 0),
     ('Without prejudice to paragraph 2 means paragraph 2 is', ['overridden', 'left as it is', 'excepted', 'repealed'], 1),
     ('Subject to X means this provision', ['overrides X', 'gives way where X applies', 'preserves X', 'repeals X'], 1),
     ('Are the three interchangeable?', ['yes', 'no', 'in annexes only', 'in preambles only'], 1),
     ('For the avoidance of doubt', ['creates a new rule', 'states what was already the case', 'overrides', 'excepts'], 1),
     ('Which preserves rights elsewhere?', ['notwithstanding', 'nothing in this Article affects', 'subject to', 'save as provided'], 1)],

d1=dict(title='Nobody had rehearsed silence',
        fig=(['Eleven rehearsals.', 'And forty minutes of nothing.'],
             ['We filled it.', 'That is what it was for.']),
        cap='Maya Sarkis and the head of the delegation that went to Astrene.',
        lines=[('Head', 'We rehearsed eleven times. Every hostile question we met in the room we '
                        'had answered before.'),
               ('Maya', 'And?'),
               ('Head', 'Their delegate said nothing for forty minutes. We set out the whole '
                        'position, including two things we had not intended to reach on the '
                        'first day, and then he asked one question about a figure in paragraph '
                        'nine.'),
               ('Maya', 'What had you said about that figure?'),
               ('Head', 'More than I would have said if he had argued with me, which is '
                        'presumably the point. A silence is uncomfortable and somebody fills it, '
                        'and the person who fills it is the person who prepared.'),
               ('Maya', 'You had rehearsed answering. You had not rehearsed not being asked.'),
               ('Head', 'Can that be rehearsed?'),
               ('Maya', 'The counterpart in a rehearsal engages, because a rehearsal that sits '
                        'in silence for forty minutes is not an exercise anybody will run twice. '
                        'Engagement is the premise of the whole thing.'),
               ('Head', 'So there is a class of move it cannot show me.'),
               ('Maya', 'A class of absence. Not replying. Not objecting where you expect an '
                        'objection. Agreeing immediately to something you were prepared to fight '
                        'for, which tells you that you have misunderstood what they want.'),
               ('Head', 'All of which my predecessors learned by being caught.'),
               ('Maya', 'And will continue to, which is why I now end every rehearsal with the '
                        'same sentence: prepare for the counterpart doing nothing.')],
        a=[('How many rehearsals had the delegation had?', 'eleven'),
           ('What did the delegation do in the silence?', 'set out the whole position, including two things it had not intended to reach'),
           ('Why does a silence work?', 'because somebody fills it, and it is the person who prepared'),
           ('Why can a rehearsal not sit in silence?', 'because nobody would run such an exercise twice'),
           ('What three absences does Maya name?', 'not replying, not objecting where expected, and agreeing immediately')],
        b=[('More than I would have said if he had ____________ with me.', 'argued'),
           ('Engagement is the ____________ of the whole thing.', 'premise'),
           ('A class of ____________.', 'absence'),
           ('Prepare for the counterpart doing ____________.', 'nothing')]),
d2=dict(title='Eleven times at midnight',
        fig=(['Eleven rehearsals in a week.', 'By a third secretary.'],
             ['Who would have had none.', 'And is now the best prepared.']),
        cap='Maya and Samir Haddad.',
        lines=[('Samir', 'The thing I keep coming back to is the third secretary. She had eleven '
                         'rehearsals and under the old system she would have had none.'),
               ('Maya', 'She would have watched one. Two hours of a senior officer’s time goes '
                        'to the head of delegation, which is rational.'),
               ('Samir', 'And she arrived knowing her brief in a way I did not at her stage.'),
               ('Maya', 'That is the largest single gain I can point to in the Institute’s work, '
                        'and I want to be careful about it, because there is a cost I cannot '
                        'measure.'),
               ('Samir', 'Which is?'),
               ('Maya', 'A rehearsal with a colleague teaches two things. It teaches the brief, '
                        'and it teaches you what a senior officer thinks is worth pressing, '
                        'because you watch them choose. The second is most of what I learned in '
                        'my first five years and none of it was in the exercise.'),
               ('Samir', 'So the eleven rehearsals give her the brief and not the apprenticeship.'),
               ('Maya', 'And the apprenticeship is the part that made me useful at forty. I '
                        'cannot tell you how to keep both, because the senior officer’s two '
                        'hours do not exist and never did.'),
               ('Samir', 'Could the senior officer watch one of the eleven?'),
               ('Maya', 'That is the best suggestion I have heard and it is not the same thing, '
                        'because watching is not choosing. Still, it costs twenty minutes and I '
                        'will try it.'),
               ('Samir', 'Then try it and tell me in a year whether it works. I think we may be '
                         'training people who know more and have learned less, and I would '
                         'rather say that out loud than find it in ten years.')],
        a=[('How many rehearsals did the third secretary have?', 'eleven, where she would have had none'),
           ('What two things does a rehearsal with a colleague teach?', 'the brief, and what a senior officer thinks is worth pressing'),
           ('Which does the simulated rehearsal not teach?', 'the second, which comes from watching a senior officer choose'),
           ('What does Samir suggest?', 'that a senior officer watch one of the eleven'),
           ('Is the question resolved?', 'no; Maya will try it and both record the concern')],
        b=[('Two hours of a senior officer’s time goes to the ____________ of delegation.', 'head'),
           ('What a senior officer thinks is worth ____________.', 'pressing'),
           ('Watching is not ____________.', 'choosing'),
           ('People who know more and have ____________ less.', 'learned')],
        unresolved=True),

speak=[('Concede in drafting',
        ['Student A: state a rule from your work.',
         'Student B: add a provision that overrides it, then one that preserves it.',
         'Say which formula each used and why.']),
       ('Rehearse the silence',
        ['In pairs, one sets out a position and the other says nothing at all.',
         'Keep going for two minutes.',
         'Say what the silent partner learned.']),
       ('Eleven times',
        ['Describe something you would rehearse eleven times if you could.',
         'Say what the eleventh rehearsal would teach that the second did not.',
         'Say what no rehearsal would teach you.'])],

ext_title='A simulated counterpart gives a delegation volume and availability; it engages, so it cannot teach absence',
ext_fig=figs.datatable('REHEARSAL, OLD AND NEW',
                       ['', 'With a colleague', 'Simulated'],
                       [['rehearsals available per week', '1', '11 or more'],
                        ['who gets them', 'the head of delegation', 'anybody'],
                        ['hostile questions asked', 'as time allows', 'reliably, all of them'],
                        ['tolerance of a weak answer', 'polite', 'none'],
                        ['will press a point 6 times', 'rarely', 'yes'],
                        ['will sit in silence for 40 minutes', 'possible', 'no']]),
ext_fig_cap='Five rows favour the new method. The sixth is the one the room used.',
ext=[
 'Rehearsal before a negotiation is old practice and has always been rationed. A colleague '
 'playing the other side costs two hours of a senior officer’s time, which means the head of '
 'delegation gets one run and everybody else watches. That allocation is rational and it has '
 'meant that the people who most need practice get least.',
 'A simulated counterpart removes the rationing, and the effect is the largest single change '
 'in preparation that training institutes report. A third secretary can face the hostile '
 'questions eleven times in a week, at midnight, and arrive knowing her brief in a way that '
 'was previously available only to people who had done the job for fifteen years. The quality '
 'of the questioning is also better than a tired colleague at the end of a Thursday: it asks '
 'all the obvious hostile questions rather than the three somebody remembered, it does not let '
 'a weak answer pass out of politeness, and it will press the same point six times, which is '
 'unpleasant and is a thing real counterparts do.',
 'Its limit is structural rather than a matter of quality, and it follows from what a '
 'rehearsal is for. The exercise exists to make somebody answer, so the counterpart engages. '
 'Engagement is the premise. What a real negotiator does that is hardest to meet is often not '
 'a move but an absence: saying nothing for forty minutes while the other side fills the '
 'silence; not objecting where an objection was expected, so that a delegation cannot tell '
 'whether its point landed; agreeing at once to something you came prepared to fight for, '
 'which means you have misunderstood what they want.',
 'None of that can be rehearsed against something whose purpose is to respond, and a rehearsal '
 'that sat in silence for forty minutes would not be run twice. So the practice is to end '
 'every rehearsal by naming the gap: prepare for the counterpart doing nothing. That is an '
 'instruction rather than an exercise, and it is the honest form of the limitation.',
 'A second cost is harder to state and should be stated anyway. A rehearsal with a senior '
 'colleague taught two things: the brief, and what an experienced officer thinks is worth '
 'pressing, which was learned by watching them choose. The new method teaches the first very '
 'well and does not teach the second at all, and the two hours of senior time that used to '
 'carry it were never available in sufficient quantity either. Ministries may be training '
 'people who know more and have learned less, and nobody yet has evidence either way.'],
dp1=('Negotiation rehearsal',
     'Diplomatic academies and training units in several foreign services introduced simulated '
     'counterparts for negotiation rehearsal in 2025, reporting much wider access to practice '
     'and adding explicit preparation for non-engagement.',
     'Source: reported practice in diplomatic training, 2025–2026.'),
e_a=[('Why has rehearsal always been rationed?', 'because a colleague playing the other side costs two hours of senior time'),
     ('What is the largest change?', 'that junior officers can rehearse many times and arrive knowing their brief'),
     ('Why is the questioning better than a tired colleague?', 'it asks all the hostile questions, lets no weak answer pass, and presses a point six times'),
     ('Why can absence not be rehearsed?', 'because the exercise exists to make somebody answer, so the counterpart engages'),
     ('What is the second cost?', 'the apprenticeship of watching a senior officer choose what to press')],
e_b=[('Rationing gave practice to those who needed it most.', 'F'),
     ('A simulated counterpart tires towards the end.', 'F'),
     ('A rehearsal in silence would be run repeatedly.', 'F'),
     ('Naming the gap is an instruction rather than an exercise.', 'T'),
     ('The new method teaches what to press.', 'F'),
     ('There is evidence that officers have learned less.', 'F')],

w_model=(
 'Purpose: rehearse the delegation against the hostile questions it is likely to face, so '
 'that every member has answered each of them aloud at least twice. Scope: the 9 issues in '
 'the round brief; the 2 issues reserved to the capital are out of scope and are not to be '
 'raised. Inputs: the round brief, the last 3 round reports, and the Ministry’s agreed line '
 'to take. Criteria: put every hostile question that arises from the 9 issues; press any '
 'answer that does not state a position in the words of the line to take; do not concede on '
 'behalf of the counterpart and do not invent an Oristani position not found in the reports; '
 'end each run by stating what the counterpart might have done instead of engaging. Done: 1 '
 'run of no more than 45 minutes per member, with a 5-line debrief naming the weakest answer, '
 'before the delegation departs. Fallback: where a question falls outside the 9 issues, say so '
 'and do not pursue it.'),
w_fig=figs.spec_card('THE TASKING FOR A REHEARSAL',
                     [('Purpose', 'every member has answered each question aloud twice'),
                      ('Scope', 'the 9 issues; 2 reserved issues excluded'),
                      ('Inputs', 'the round brief, 3 reports, the line to take'),
                      ('Criteria', 'all hostile questions; press weak answers; invent no positions'),
                      ('Done', '45 minutes a member, 5-line debrief, before departure'),
                      ('Fallback', 'question outside the 9 issues: say so, do not pursue')]),
w_fig_cap='End each run by stating what the counterpart might have done instead of engaging: the gap, named.',
w_task='Write a rehearsal tasking for a difficult meeting in your own work.',
w_steps=['Say what every participant must have done by the end.',
         'Bound the issues and exclude the reserved ones.',
         'Require weak answers to be pressed.',
         'Forbid the invention of the other side’s positions.',
         'Require the non-engagement gap to be named.'],
w_bank=['Rehearse … so that every member has …',
        'Cover … ; … are out of scope and are not to be …',
        'Work from … , … and …',
        'Put every … ; press any answer that … ; do not concede … and do not invent … ; end each run by …',
        'Where a question falls outside … , say so and …'],
w_check=['Is the standard stated per participant?',
         'Is inventing the counterpart’s positions forbidden?',
         'Must weak answers be pressed rather than accepted?',
         'Is the non-engagement gap named at the end?'],

t_title='Rehearsing against a simulated counterpart',
t_fig=figs.split('A REHEARSAL',
                 'Teaches',
                 ['the brief, by repetition',
                  'the hostile questions, all of them',
                  'where an answer is weak',
                  'what six presses on one point feels like'],
                 'Cannot teach',
                 ['what a silence does to you',
                  'an objection that does not come',
                  'an immediate concession and what it means',
                  'what a senior officer chooses to press']),
t_fig_cap='The left column is now available to everybody. The right column is still learned by being caught.',
t_body=[
 'Rehearsal has always been rationed by the cost of a colleague’s two hours, so the head of '
 'delegation got one run and the third secretary watched. A simulated counterpart removes the '
 'rationing, which is the largest change in preparation anybody reports: eleven runs in a '
 'week, at any hour, for anybody. The questioning is also better than a tired colleague on a '
 'Thursday, because it asks every obvious hostile question, lets no weak answer pass out of '
 'politeness, and will press one point six times.',
 'The limit follows from the purpose. A rehearsal exists to make somebody answer, so the '
 'counterpart engages, and engagement is the premise of the exercise. The hardest things a '
 'real counterpart does are absences: forty minutes of silence while your side fills it, no '
 'objection where you expected one, instant agreement to the thing you came to fight for. '
 'None of these can be practised against something built to respond, and a rehearsal that sat '
 'silent for forty minutes would never be run twice.',
 'So name the gap rather than pretending to close it: end every rehearsal with the instruction '
 'to prepare for the counterpart doing nothing. And note the second cost honestly. A rehearsal '
 'with a senior colleague taught the brief and, by watching them choose, what is worth '
 'pressing. The new method teaches the first and not the second, and the two hours that used '
 'to carry the second were never there in quantity either.'],
t_say=[('Name the gap: ', 'Prepare for the counterpart doing nothing.'),
       ('Set the standard: ', 'Every member answers each question aloud twice.'),
       ('Bound the invention: ', 'Invent no Oristani position not found in the reports.')],
t_bound=('A simulated counterpart will engage, press and tire of nothing, and it cannot sit in '
         'silence, because an exercise that does is not an exercise. It therefore cannot '
         'rehearse the class of move that consists of doing nothing, cannot teach what an '
         'experienced officer chooses to press, and will produce a confidence that is real '
         'about questions and misplaced about rooms.'),
t_a=[('Prepare for the counterpart doing ____________.', 'nothing'),
     ('Every member answers each question aloud ____________.', 'twice'),
     ('Invent no Oristani position not found in the ____________.', 'reports'),
     ('Engagement is the ____________ of the exercise.', 'premise'),
     ('Instant agreement to the thing you came to ____________ for.', 'fight'),
     ('A confidence that is real about questions and misplaced about ____________.', 'rooms')],
t_b_rubric='Rewrite each using the correct concession formula.',
t_b=[('Despite paragraph 2, access shall be granted.', 'notwithstanding paragraph 2, access shall be granted'),
     ('Without affecting paragraph 2, access shall be granted.', 'without prejudice to paragraph 2, access shall be granted'),
     ('Subject to anything else, access shall be granted.', 'subject to paragraph 2, access shall be granted'),
     ('Notwithstanding anything, the fee stands.', 'notwithstanding paragraphs 4 and 5, the fee shall not be altered')],

case=dict(
 title='The Decision Room · Who watches the eleventh rehearsal',
 brief=[
  'Rehearsals are now available to everybody and the Institute runs about ninety a month. '
  'Junior officers arrive knowing their briefs.',
  'Maya believes something is being lost: the apprenticeship of watching a senior officer '
  'decide what is worth pressing.',
  'Samir proposes that a senior officer attend one rehearsal per delegation as an observer. '
  'Faris Said says an observer who says nothing teaches nothing. Nadia Barakat says the '
  'teaching happened in the corridor afterwards, not in the room.'],
 exhibit=figs.datatable('REHEARSALS, A MONTH',
                        ['', 'Figure', 'Note'],
                        [['rehearsals run', '~90', 'all grades'],
                         ['rehearsals run before 2025', '~6', 'senior time'],
                         ['officers below first secretary rehearsing', '61', 'was 2'],
                         ['senior officer hours available monthly', '~12', 'unchanged'],
                         ['debriefs written', '90', '5 lines each'],
                         ['debriefs read by a senior officer', '8', '—']]),
 exhibit_cap='Fifteen times the practice, with the same twelve hours of senior attention.',
 exhibit_note='Of the 90 debriefs, 8 are read by a senior officer; the other 82 are read by the '
              'officer who was rehearsed.',
 voices=[('Samir Haddad', 'Legal and Treaties',
          'Put a senior officer in one rehearsal per delegation. Twenty minutes, as an '
          'observer, and then they say which answer they would have pressed.'),
         ('Ambassador Faris Said', 'Head of Mission, Astrene',
          'An observer teaches nothing. What taught me was watching a Head of Mission choose '
          'to let something go, which you only see when they are the one negotiating.'),
         ('Nadia Barakat', 'Multilateral Affairs, Geneva',
          'What taught me was the twenty minutes in the corridor afterwards. Use the senior '
          'hours on the debriefs, not on attendance: eight of ninety are read, and reading one '
          'takes four minutes.')],
 steps=[('Find it', 'How many debriefs are read by a senior officer?'),
        ('Compare it', 'What are the three proposals?'),
        ('Infer it', 'Why does Faris doubt the observer?'),
        ('Weigh it', 'Senior attendance against senior reading.'),
        ('Decide', 'How are the twelve hours spent?')],
 analysis=[('Find it. How many rehearsals are run monthly?', 'about ninety, against six before 2025'),
           ('Compare it. What does Nadia propose?', 'spending senior hours on reading debriefs rather than attending'),
           ('Infer it. What does Faris say taught him?', 'watching a Head of Mission choose to let something go while negotiating'),
           ('Weigh it. How long does reading a debrief take?', 'four minutes'),
           ('Decide. What would you do?', 'answers vary; reading ninety debriefs costs six hours and reaches everybody')],
 decision='Write how the senior hours are allocated.',
 decision_steps=['Say what senior officers do with rehearsals.',
                 'Say what happens to the debriefs.',
                 'Say what is written back to the officer rehearsed.',
                 'Say what is measured after a year.'],
 bank=['Senior officers …',
       'Every debrief is …',
       'The officer rehearsed receives …',
       'After 1 year, … is measured.',
       'This is reviewed …'],
 outcome='All ninety debriefs went to a senior officer, who returned two lines on each saying '
         'which answer they would have pressed and why; that cost about seven hours a month. '
         'Senior attendance at rehearsals was not introduced. After a year the Institute asked '
         'officers which had taught them most, and the two returned lines came second, behind '
         'the rehearsals themselves and ahead of the formal course. Nadia says the two lines '
         'worked because they were a judgement rather than a presence, and Faris still thinks '
         'nothing replaces watching somebody negotiate, which the Institute records as an open '
         'question.',
 outcome_q=[('How were the senior hours spent?', 'returning two lines on each of the ninety debriefs, about seven hours a month'),
            ('What did officers rank the two lines above?', 'the formal course')],
 tags=[]),

lab=dict(
 title='Brief Lab · Rehearse the delegation',
 task=['This is the tasking the Institute used for the delegation that went to Astrene.',
       'The delegation answered every question it was asked and was unprepared for forty '
       'minutes of silence.'],
 draft=['Rehearse the delegation before the round.',
        'Put the difficult questions to them.',
        'Make it realistic.',
        'Cover the main issues.',
        'Give them feedback.',
        'As often as useful.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the third one is the one nobody can deliver.',
 asked=['Every member answering each question aloud twice',
        'The non-engagement gap named at the end',
        'No invented positions for the other side'],
 back=['Eleven fluent runs',
       'Confidence about every question',
       'No preparation for a counterpart who says nothing'],
 gap='"The difficult questions" does not say which or how many, "make it realistic" asks for '
     'something a rehearsal cannot be, "the main issues" is not the nine in the brief, and '
     '"feedback" names no form and no recipient.',
 back_cap='A delegation that had answered everything and had never been left to fill a '
          'silence.',
 back_note='Line three is the failure, and it is a failure of honesty rather than of design: '
           'realism is exactly what a rehearsal cannot supply, so asking for it hides the gap.',
 diagnosis=[('[1] "rehearse the delegation" — assumes the rehearsal can stand in for the room', 'hidden assumption'),
            ('[2] "the difficult questions" — which, and how many?', 'unstated criterion'),
            ('[3] "make it realistic" — assumes realism is achievable here', 'hidden assumption'),
            ('[4] "cover the main issues" — main judged by whom?', 'unstated criterion'),
            ('[5] "give them feedback" — in what form, to whom, recorded where?', 'undefined done'),
            ('[6] "as often as useful" — how many runs, per person?', 'undefined done')],
 rewrite='Rehearse the rehearsal: rewrite the tasking so that its limit is named rather than '
         'denied.',
 scaffold=['What every member must have done by the end',
           'The issues covered and those excluded',
           'The brief, the reports and the line to take',
           'All hostile questions; weak answers pressed; no invented positions; the gap named',
           'The length per member, the debrief, and by when',
           'What to do with a question outside the issues'],
 bank=['Rehearse … so that every member has …',
       'Cover … ; … are out of scope and are not to be …',
       'Work from … , … and …',
       'Put every … ; press any answer that … ; do not invent … ; end each run by …',
       'Return 1 run of no more than … per member, with … , before …',
       'Where a question falls outside … , …'],
 check=['Is the standard per participant and countable?',
        'Is the non-engagement gap named in the tasking?',
        'Is inventing the other side’s position forbidden?',
        'Is the debrief given a form and a length?'],
 model=['Rehearse the delegation against the hostile questions it is likely to face, so that every member has answered each of them aloud at least twice',
        'The 9 issues in the round brief; the 2 issues reserved to the capital are out of scope and are not to be raised',
        'The round brief, the last 3 round reports, and the Ministry’s agreed line to take',
        'Put every hostile question that arises from the 9 issues; press any answer that does not state a position in the words of the line to take; do not concede on behalf of the counterpart and do not invent an Oristani position not found in the reports; end each run by stating what the counterpart might have done instead of engaging',
        '1 run of no more than 45 minutes per member, with a 5-line debrief naming the weakest answer, before the delegation departs',
        'Where a question falls outside the 9 issues, say so and do not pursue it'],
 cost='1 delegation that set out 2 positions it had not intended to reach on the first day, '
      'because 11 rehearsals had taught it to answer and none had taught it to wait.'),

rev_fig=figs.split('CONCESSION',
                   'Loose',
                   ['Despite paragraph 2 …',
                    'Without affecting paragraph 2 …',
                    'Subject to anything else …',
                    'Notwithstanding anything …'],
                   'Exact',
                   ['Notwithstanding paragraph 2 …',
                    'Without prejudice to paragraph 2 …',
                    'Subject to paragraph 2 …',
                    'Notwithstanding paragraphs 4 and 5 …']),
rev_fig_cap='Notwithstanding overrides; without prejudice to preserves; subject to gives way.',
rev=dict(
 read=[('The largest gain from simulated rehearsal is', ['realism', 'volume and availability', 'cost', 'accuracy'], 1),
       ('A simulated counterpart cannot', ['press a point', 'sit in silence', 'ask hostile questions', 'refuse a weak answer'], 1),
       ('The hardest things a counterpart does are often', ['moves', 'absences', 'questions', 'concessions'], 1),
       ('In the Decision Room, how were the senior hours spent?', ['attending rehearsals', 'returning two lines on each debrief', 'writing a course', 'nothing'], 1)],
 listen_text='A rehearsal exists to make somebody answer, so the counterpart engages, and '
             'engagement is the premise of the exercise. The hardest things a real counterpart '
             'does are absences: forty minutes of silence while your side fills it.',
 listen=[('A rehearsal exists to make somebody ____________.', 'answer'),
         ('Engagement is the ____________ of the exercise.', 'premise'),
         ('The hardest things a real counterpart does are ____________.', 'absences'),
         ('While your side ____________ it.', 'fills')],
 speak=['Say what you would do if a counterpart said nothing for forty minutes.',
        'State one rule and then override it with notwithstanding.'],
 write='Write one line naming what a rehearsal cannot prepare you for.',
 vocab=[('A stand-in for the other side in a practice run is a ____________.', 'simulated counterpart'),
        ('Somebody appointed to argue the opposite case is a ____________.', 'devil’s advocate'),
        ('Confidence produced by practice that was too easy is a ____________.', 'false confidence'),
        ('A finding written down so that it survives is a ____________.', 'lesson recorded'),
        ('An exercise designed to find where something fails is a ____________.', 'stress test')],
 gram=[('____________ paragraph 2, access shall be granted.', 'Notwithstanding'),
       ('Without ____________ to paragraph 2, access shall be granted.', 'prejudice'),
       ('____________ to paragraph 2, access shall be granted.', 'Subject'),
       ('Nothing in this Article ____________ rights under Article 9.', 'affects'),
       ('For the avoidance of ____________, the review is not automatic.', 'doubt')]),

found=['Rehearse one difficult question aloud twice before your next meeting.',
       'Ask a colleague to say nothing for two minutes while you set out a position.',
       'Write down what a rehearsal in your office could not prepare you for.',
       'Use notwithstanding and without prejudice to correctly once each.'],
end_line='Engagement is the premise of a rehearsal, and absence is what you will meet.',
end_next='Next: What a Draft Cannot Tell You',
)
