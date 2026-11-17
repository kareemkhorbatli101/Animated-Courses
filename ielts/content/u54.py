# -*- coding: utf-8 -*-
"""Unit 54 - Memory, History and Narrative. IELTS Volume 6, band 7.5."""

_SURV = dict(kind='bar',
             title='Records surviving in one county archive',
             sub='documents catalogued per thousand estimated to have been '
                 'created, by type and century',
             cats=['16th', '17th', '18th', '19th'],
             series=[('Court and legal', [41, 12, 88, 214]),
                     ('Estate and land', [26, 9, 61, 178]),
                     ('Parish and personal', [7, 2, 19, 96])])

UNIT = dict(
 n=54, vol=6, level='C1', band='7.5',
 theme='Memory, History and Narrative',
 opener=(
   'A bar chart with a hole in it. The seventeenth century in this archive '
   'is almost empty, and the Task 1 lesson is what to do about that: report '
   'the absence as a feature of the data, resist the explanation you are '
   'about to invent for it, and notice that the shortfall is not the same '
   'size for every category. The argument that follows asks what an archive '
   'is a sample of, and ends with the sceptical position taken seriously '
   'enough to be tested against itself.'),

 cycles=[
  dict(
   sub='Using an archive',
   step=2,
   read=[
    dict(heading='Access to records — what is open and what is closed',
         kind='Archive guidance',
         task='Note completion and multiple choice',
         band='gt_short', qtype='Questions 1-6',
         skill=('Archive guidance is read for the clock on each closure',
                ['Closure is not permanent and is almost never uniform. '
                 'Each class of record carries its own period, counted from '
                 'its own event.',
                 'Find which event starts each count. A reader who assumes '
                 'every period runs from the date on the document will '
                 'misjudge availability by decades.']),
         paras=[
          'Most records here are open on arrival. Closure applies to '
          'defined classes and is counted from a stated event, which is '
          'not always the date on the document. A file closed for '
          'eighty-four years from the birth of its youngest subject stays '
          'shut long after a file of the same date has opened.',
          'Personal information is closed for the lifetime of the person '
          'concerned plus a period, and where the date of death is unknown '
          'the archive assumes a lifespan of one hundred years from birth. '
          'Applicants evidencing a death may have the assumption set '
          'aside, and about a third succeed.',
          'Records closed on grounds of commercial confidentiality carry a '
          'thirty-year period from the end of the relationship rather than '
          'from the date of the record, which is why some twentieth-century '
          'commercial files remain closed while nineteenth-century personal '
          'files are open.',
          'Where only part of a file is closed, the archive produces a '
          'redacted copy rather than refusing the whole. Redaction is '
          'carried out on a copy and the extent of it is recorded in the '
          'catalogue, so that a reader can see that material has been '
          'withheld even where they cannot see what it was.',
          'A closed record may be opened early on application where the '
          'applicant shows a public interest in disclosure that outweighs '
          'the interest protected by the closure. The public interest is '
          'not the same as public curiosity, and applications are decided '
          'by a panel within forty working days.',
          'A refusal may be appealed once, to the same panel differently '
          'constituted, within three months. The appeal must identify what '
          'has changed or what the panel is said to have overlooked. An '
          'appeal that restates the original application is dismissed '
          'without a hearing, and about half of appeals received are of '
          'that kind.'],
         items=[
          ('Where a date of death is unknown, the archive assumes a '
           'lifespan of ____________ years from birth.', None, 'one '
           'hundred',
           'Paragraph 2, an assumption that can be set aside on '
           'evidence.'),
          ('Commercial closure runs from',
           ['the date of the record', 'the end of the relationship', 'the date of deposit', 'the date of cataloguing'],
           1,
           'Paragraph 3, which is why some recent files stay closed '
           'longer.',
           {0: 'Paragraph 3 says commercial closure does not run from '
               'the record date.', 2: 'Deposit is not the event the period runs from.', 3: 'Cataloguing is not the trigger for commercial closure.'}),
          ('Where part of a file is closed, the archive produces a '
           '____________ copy.', None, 'redacted',
           'Paragraph 4, with the extent recorded in the catalogue.'),
          ('Early opening requires a public interest that outweighs',
           ['public curiosity', 'the interest protected by the closure', 'the cost', 'the depositor\u2019s wishes'],
           1,
           'Paragraph 5, decided by a panel within forty working days.',
           {0: 'Paragraph 5 says curiosity is not the public interest.', 2: 'Cost is not what the public interest is weighed '
               'against.', 3: 'The depositor\u2019s wishes are not the interest named.'}),
          ('An appeal must be lodged within ____________ months.', None,
           'three',
           'Paragraph 6, to the same panel differently constituted.'),
          ('An appeal that restates the original application is',
           ['reheard', 'dismissed without a hearing', 'referred upward', 'held over'],
           1, 'Paragraph 6, which is about half of those received.',
           {0: 'Paragraph 6 says such an appeal is not reheard.', 2: 'The appeal goes to the same panel, differently '
               'constituted.', 3: 'It is dismissed rather than held over.'})]),
    dict(heading='Applying to see a closed record',
         kind='Procedure notice', task='Note completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Find the catalogue reference first and quote it exactly. The '
          'archive holds several series with similar titles, and an '
          'application naming a document by description rather than by '
          'reference is answered with a request for the reference, which '
          'costs three weeks.',
          'State the ground on which you say the closure should be lifted, '
          'and state only one. Applications advancing four grounds are '
          'assessed on the weakest, because the panel must consider each '
          'and records its decision against the application as a whole.',
          'Evidence any factual claim you make. If you assert that a named '
          'person is dead, attach the record of death; the panel does not '
          'search for evidence on an applicant’s behalf and will not '
          'assume a fact that could have been evidenced.',
          'Expect a decision within forty working days and a written '
          'reason whatever the outcome. The reason matters more than the '
          'decision if you intend to appeal, because an appeal must '
          'address what the panel said rather than what you believe it '
          'thought, and the two are frequently different.',
          'Where a decision is favourable, book a reading room place '
          'before travelling. An opened file is produced from outstore on '
          'three working days’ notice, and readers who arrive expecting '
          'same-day production are turned away in numbers the archive '
          'finds dispiriting.'],
         items=[
          ('Quote the catalogue ____________ exactly.', None,
           'reference',
           'Paragraph 1: a description costs three weeks.'),
          ('State ____________ ground for lifting the closure.', None,
           'one',
           'Paragraph 2: four grounds are assessed on the weakest.'),
          ('If you assert a person is dead, attach the record of '
           '____________.', None, 'death',
           'Paragraph 3: the panel does not search on your behalf.'),
          ('An appeal must address what the panel ____________ rather than '
           'what you believe it thought.', None, 'said',
           'Paragraph 4, which is why the written reason matters most.')])],
   listen=[
    dict(heading='Applying to consult a closed file', part='Part 1',
         task='A call to a county archive · note completion', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Archivist', 'County archive, enquiries. Beatrix speaking.'),
          ('Caller', 'Hello. I am trying to see a file that the catalogue '
           'says is closed.'),
          ('Archivist', 'Do you have the reference?'),
          ('Caller', 'It is the asylum admission registers, eighteen '
           'nineties.'),
          ('Archivist', 'There are three series with similar titles, so I '
           'need the reference rather than the description. It will be a '
           'letter, a slash and four digits.'),
          ('Caller', 'Here it is. H slash four one seven two.'),
          ('Archivist', 'H four one seven two. That one is closed for the '
           'lifetime of the people named plus a period.'),
          ('Caller', 'They were admitted in 1893. They cannot be alive.'),
          ('Archivist', 'Almost certainly not, and where we do not hold a '
           'date of death we assume a hundred years from birth, which for '
           'an eighteen-nineties admission can still leave the file closed '
           'on paper.'),
          ('Caller', 'Can that be set aside?'),
          ('Archivist', 'If you evidence the death. Attach the record; we '
           'do not search for it ourselves and we will not assume something '
           'you could have proved.'),
          ('Caller', 'I have a burial record for one of them.'),
          ('Archivist', 'Then apply on that ground and only that ground.'),
          ('Caller', 'Should I not give all my reasons?'),
          ('Archivist', 'No, and this is the thing people most often get '
           'wrong. The panel must consider every ground you raise and '
           'records its decision against the application as a whole, so a '
           'strong ground beside three weak ones is assessed with the weak '
           'ones.'),
          ('Caller', 'One ground only. Noted. How long?'),
          ('Archivist', 'Forty working days, and a written reason either '
           'way.'),
          ('Caller', 'And if it is refused?'),
          ('Archivist', 'One appeal, within three months, to the same panel '
           'differently constituted. It has to address what the reason '
           'actually said. About half the appeals we get simply say the '
           'same thing again, and those go without a hearing.'),
          ('Caller', 'Is there a fee?'),
          ('Archivist', 'Not for the application. Twelve pounds if you want '
           'a redacted copy produced, and that is per file rather than per '
           'page.')],
         items=[
          ('Catalogue reference: ____________', None, 'H/4172',
           'Which the archivist requires instead of a description.'),
          ('Where no date of death is held, the archive assumes '
           '____________ years from birth.', None, 'one hundred',
           'Which can leave an 1890s file closed on paper.'),
          ('To set the assumption aside, attach the record of '
           '____________.', None, 'death',
           'The archive will not search for it on the caller’s behalf.'),
          ('Number of grounds to state: ____________', None, 'one',
           'Because the panel assesses the application as a whole.'),
          ('Decision within ____________ working days.', None, 'forty',
           'With a written reason either way.'),
          ('Fee for a redacted copy: £____________ per file', None,
           '12',
           'There is no fee for the application itself.')])],
   speak=dict(
    part='Part 1', focus='Records your family keeps',
    intro=('Two or three sentences each. Something your family actually '
           'has beats a general observation about records.'),
    qs=['Does your family keep old documents or photographs?',
        'Who looks after them?',
        'Have you ever tried to find out about your family history?',
        'Are old records important?'],
    shape=[('answer', 'A biscuit tin of photographs and two '
            'certificates.'),
           ('support', 'My aunt has it and nobody has ever catalogued '
            'it.'),
           ('follow-up', 'About half the photographs have nothing written '
            'on the back, so we know the faces and not the names.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Appealing a refusal to open a record',
         prompt=('You applied to see a closed record and were refused. '
                 'Write a letter of appeal. In your letter: give the '
                 'reference and the history; say why you believe the '
                 'refusal was wrong; say what you are asking for. Write at '
                 'least 150 words.'),
         model=[
          'Dear Panel Secretary,',
          'I am appealing the refusal of 14 May concerning file H/4172, '
          'the asylum admission register for 1893, under the one appeal '
          'permitted within three months.',
          'The grounds for closure appear no longer to apply, in that the '
          'closure rests on the lifetime of the persons named plus a '
          'period, and the panel applied the assumed lifespan of one '
          'hundred years from birth because no date of death was held. I '
          'attached a burial record for Margaret Olusanya, dated 2 November '
          '1931, with the original application. The written reason does not '
          'refer to that record, and I am therefore unable to tell whether '
          'it was considered and rejected or was not before the panel at '
          'all.',
          'I am not asking the panel to reconsider the public interest '
          'ground, which it decided against me and which I accept. My '
          'appeal is confined to the factual question of whether the burial '
          'record was received.',
          'I am asking for two things: confirmation that the burial record '
          'of 2 November 1931 formed part of the papers before the panel, '
          'and, if it did not, a fresh decision on the application with '
          'that record in evidence.',
          'Yours faithfully,',
          'D. Olusanya-Thwaite'],
         notes=[
          'The appeal attacks the reason rather than the decision. The '
          'guidance says an appeal must address what the panel said, and '
          'this one identifies a specific silence in the written reason '
          'rather than restating the case — which is what gets half of '
          'appeals dismissed without a hearing.',
          'The writer abandons their weaker ground explicitly. Conceding '
          'the public interest point removes the panel’s easiest route to '
          'dismissing the whole appeal and leaves one factual question it '
          'must answer.',
          'The ask is in the alternative: confirm it was considered, or '
          'decide again with it. Both branches are cheap for the panel to '
          'grant, which is what makes an appeal of this shape hard to '
          'refuse.'],
         criterion=[('Attacking the reason rather than the decision',
                     'Task Achievement'),
                    ('Abandoning the weaker ground explicitly',
                     'Task Response'),
                    ('An ask framed in the alternative',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Appeal citing public interest and precedent',
    explain=('An appeal is a narrow instrument: it addresses what was '
             'said, not what was decided. These patterns keep the writing '
             'inside that narrow space, which is where appeals succeed.'),
    examples=['The grounds for closure appear no longer to apply, in '
              'that...',
              'The written reason does not refer to the burial record.',
              'I am not asking the panel to reconsider the public interest '
              'ground.',
              'I am unable to tell whether it was considered and rejected '
              'or was not before the panel.'],
    task='Rewrite each sentence so that it addresses the reason given.',
    items=[('The decision was unfair.',
            'The written reason does not address the burial record '
            'attached to the application.'),
           ('They should have opened the file.',
            'The closure rests on a lifetime assumption that the attached '
            'record of death displaces.'),
           ('I still think the public has a right to know.',
            'I am not pursuing the public interest ground, which the panel '
            'decided against me.'),
           ('Please look at it again.',
            'I am asking for confirmation that the record was before the '
            'panel, and failing that a fresh decision with it in '
            'evidence.'),
           ('Other files like this are open.',
            'Files in the same series with evidenced dates of death were '
            'opened in 2019, which the reason does not distinguish.')]),
   vocab=[('closure period', 'the time a record stays unavailable'),
          ('redaction', 'removing part of a copy before release'),
          ('public interest', 'a benefit to the public rather than '
           'curiosity'),
          ('catalogue reference', 'the identifier a document is held '
           'under'),
          ('accession', 'the transfer of records into an archive'),
          ('assumed lifespan', 'a default used when a death is '
           'unrecorded'),
          ('differently constituted', 'the same body with different '
           'members'),
          ('written reason', 'the published basis for a decision')],
   expr=[('The grounds for closure appear no longer to apply, in that...',
          'the standard opening of an archive appeal'),
         ('a strong ground beside three weak ones is assessed with the '
          'weak ones', 'explains why to plead one ground'),
         ('whether it was considered and rejected or was not before the '
          'panel at all', 'identifies a silence precisely'),
         ('we will not assume something you could have proved',
          'states an evidential rule in nine words')],
   trans=['furthermore', 'in this connection', 'in the alternative',
          'I am asking for'],
  ),

  dict(
   sub='Four accounts of one event',
   step=4,
   read=[
    dict(heading='Four witnesses, one afternoon',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  The constable’s notebook, written that evening: Crowd of '
          'approximately two hundred at the gates from 2pm. No disorder '
          'until the vehicles arrived at 3.40. I was stationed at the '
          'western end throughout and did not see the eastern gate at any '
          'point. Two arrests, both at the western end, both for obstruction '
          'rather than violence.',
          'B  A letter from a resident, written four days later: The whole '
          'street was full by two o’clock and there must have been a '
          'thousand of them. I watched from an upstairs window. It was '
          'perfectly good-natured until the lorries came and then it was '
          'not, and the trouble was at the far end from where the police '
          'were standing, which struck me as odd at the time.',
          'C  The newspaper report, published the following morning: Some '
          'four hundred demonstrators gathered. Our reporter arrived at '
          '3.30. Scuffles broke out shortly after the arrival of the '
          'vehicles and three men were taken away. The report names the '
          'western gate and gives no account of the eastern.',
          'D  An oral history interview, recorded in 1987: I was fourteen. '
          'There were thousands and it went on all day and the police '
          'charged us, and I have told that story at every family gathering '
          'for forty years. I was asked in 1974 and said several hundred '
          'and no charge, and I have no explanation for the difference '
          'except that I have told it so often.'],
         items=[
          ('Which account was written on the day of the events?',
           ['The constable\u2019s notebook', 'The resident\u2019s letter', 'The newspaper report', 'The oral history'],
           0, 'Written that evening, with crowd numbers and times.',
           {1: 'The resident\u2019s letter places the trouble away from the '
               'police.', 2: 'The newspaper report appeared the following morning.', 3: 'The oral history differs from the same person\u2019s '
               'earlier version.'}),
          (
           'Which account explicitly records what its author could not '
           'see?',
           ['The constable\u2019s notebook', 'The resident\u2019s letter', 'The newspaper report', 'The oral history'],
           0,
           'Stationed at the western end and never seeing the eastern '
           'gate.',
           {1: 'The resident\u2019s letter places the trouble away from the '
               'police.', 2: 'The newspaper names the western gate without saying '
               'why.', 3: 'The oral history differs from the same person\u2019s '
               'earlier version.'}),
          ('Which account places the trouble away from the police?',
           ['The constable\u2019s notebook', 'The resident\u2019s letter', 'The newspaper report', 'The oral history'],
           1, 'At the far end from where the police were standing.',
           {0: 'The constable records both arrests at the western end.', 2: 'The newspaper gives no account of the eastern gate.', 3: 'The oral history differs from the same person\u2019s '
               'earlier version.'}),
          (
           'Which account differs from the same person\u2019s earlier '
           'version?',
           ['The constable\u2019s notebook', 'The resident\u2019s letter', 'The newspaper report', 'The oral history'],
           3,
           'Several hundred and no charge in 1974; thousands and a '
           'charge in 1987.',
           {0: 'The notebook exists in one version, written that '
               'evening.', 1: 'The resident\u2019s letter places the trouble away from the '
               'police.', 2: 'The newspaper report was published once.'}),
          (
           'The newspaper report describes events at the eastern gate.',
           ['Yes', 'No', 'Not Given'], 1,
           'It names the western gate and gives no account of the '
           'eastern.',
           {0: 'Yes would need the eastern gate; the report names the '
               'western.', 2: 'Not Given is wrong because the gate is named.'}),
          (
           'The interviewee offers an explanation for the change in '
           'their account.', ['Yes', 'No', 'Not Given'], 1,
           'They say they have none except how often the story has '
           'been told.',
           {0: 'Yes would need an explanation; they say they have '
               'none.', 2: 'Not Given is wrong because they are asked and answer.'})])],
   listen=[
    dict(heading='A short talk: four accounts of one event', part='Part 2',
         task='A talk to a local history society · multiple choice', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'Four accounts of one afternoon, and I want to argue '
           'that the right question is not which of them is true. All four '
           'are accurate about something and the something is different in '
           'each case, and sorting out what each one was positioned to know '
           'is the whole of the method.'),
          ('Speaker', 'The constable’s notebook is written the same '
           'evening and gives two hundred, times to the minute, and two '
           'arrests. It is also the only one of the four that tells you '
           'what its author could not see: he was at the western end and '
           'never saw the eastern gate. That sentence makes it the most '
           'valuable document of the four and it is the sentence a careless '
           'reader skips.'),
          ('Speaker', 'The resident’s letter, four days later, says a '
           'thousand and puts the trouble at the far end from the police. '
           'She is almost certainly wrong on the number — crowd estimates '
           'from windows are high by a factor of three or four, reliably '
           '— and she is the only witness we have to the eastern gate, '
           'which the constable has told us he could not see.'),
          ('Speaker', 'The newspaper gives four hundred and its reporter '
           'arrived at half past three, which is ten minutes before the '
           'vehicles. So it has nothing on the hour and a half that '
           'preceded the trouble, and it reports the western gate because '
           'that is where the police were and the police are who reporters '
           'talk to.'),
          ('Speaker', 'And the oral history from 1987 gives thousands and a '
           'police charge. The same man was interviewed in 1974 and said '
           'several hundred and no charge. He volunteers this himself, '
           'which is unusual and admirable, and says he cannot explain it '
           'except that he has told the story a great many times.'),
          ('Speaker', 'That last case is the one I would have you think '
           'about, because the usual lesson drawn from it is that oral '
           'history is unreliable, and the lesson I draw is narrower. His '
           '1974 account is good evidence. His 1987 account is good '
           'evidence about 1987. Both are documents and they are documents '
           'about different years.')],
         items=[
          ('The speaker says the right question is not',
           ['who was present', 'which account is true', 'how many came', 'when it began'],
           1, 'All four are accurate about something different.',
           {0: 'Who was present is part of what each source can tell '
               'you.', 2: 'Crowd numbers are one of the things they differ about.', 3: 'Timing is one of the facts the notebook supplies well.'}),
          (
           'What makes the constable\u2019s notebook the most valuable '
           'document?',
           ['its detail', 'it records what he could not see', 'it is official', 'it names the arrested'],
           1, 'A sentence a careless reader skips.',
           {0: 'Detail alone is not what he says makes it valuable.', 2: 'Officialdom is not the quality he praises.', 3: 'It gives the number arrested, not their names.'}),
          (
           'Crowd estimates made from windows are, he says, high by a '
           'factor of',
           ['two', 'three or four', 'ten', 'an unknown amount'], 1,
           'Which is why he doubts the resident\u2019s thousand.',
           {0: 'Lower than the factor he reports.', 2: 'Higher than the factor he gives.', 3: 'He gives a definite factor for window estimates.'}),
          (
           'His lesson from the oral history is that the 1987 account '
           'is good evidence about',
           ['the afternoon', '1987', '1974', 'nothing'], 1,
           'And that both accounts are documents about different '
           'years.',
           {0: 'The afternoon is what the 1974 account is evidence '
               'about.', 2: '1974 is the date of the earlier interview, not the '
               'later one.', 3: 'He says both accounts are good evidence of something.'})]),
    dict(heading='Two historians disagree about a source', part='Part 3',
         task='A discussion between two historians · multiple choice', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Casimir', 'I want to use the resident’s letter as the main '
           'source for the eastern gate and I know what you think.'),
          ('Perpetua', 'You do not, actually, and that is worth '
           'establishing. I think you should use it. I object to how you '
           'are planning to cite it.'),
          ('Casimir', 'Go on.'),
          ('Perpetua', 'Your draft says "contemporary testimony records '
           'disorder at the eastern gate". It is four days later, it is the '
           'only account of that gate, and the writer gives a crowd figure '
           'we know to be out by a factor of about four. All of that is '
           'true and none of it is in your sentence.'),
          ('Casimir', 'If I put all of it in, the sentence becomes a '
           'paragraph.'),
          ('Perpetua', 'Then write the paragraph. This is the only evidence '
           'for the central claim of your chapter.'),
          ('Casimir', 'That is the argument that moves me and it is not the '
           'one you started with.'),
          ('Perpetua', 'I am aware. Let me put the other half, which is '
           'about the constable. You treat his notebook as the baseline and '
           'the letter as the doubtful source, and I would reverse that for '
           'the eastern gate specifically.'),
          ('Casimir', 'The notebook is same-day and official.'),
          ('Perpetua', 'And he tells you he never saw the eastern gate. On '
           'the western end he is your best source by a distance. On the '
           'eastern he is not a source at all, and the absence of eastern '
           'disorder from his notebook is not evidence of its absence.'),
          ('Casimir', 'Which is exactly the inference my draft makes in the '
           'next paragraph.'),
          ('Perpetua', 'It is, and I would not have raised the citation '
           'point if the inference were not resting on it.'),
          ('Casimir', 'Would you have raised it if the chapter had rested '
           'on something else?'),
          ('Perpetua', 'Probably not, and I am not sure that is '
           'defensible. A citation that overstates is wrong whether or not '
           'it is carrying weight, and I only ever notice the ones that '
           'are.'),
          ('Casimir', 'That is an honest thing to say and it does not '
           'help me fix the paragraph.'),
          ('Perpetua', 'Write what the letter is, what it is the only '
           'evidence for, and what we know about its crowd figure. Three '
           'clauses. Then the inference can stand on something a reader '
           'can check.'),
          ('Casimir', 'So your real objection was four paragraphs further '
           'on than where you started.'),
          ('Perpetua', 'They usually are. A citation that overstates a '
           'source is rarely an accident; it is nearly always load-bearing '
           'for something later, which is why it is worth chasing.')],
         items=[
          ('Perpetua\u2019s objection is to',
           ['using the letter', 'how the letter is cited', 'the chapter\u2019s claim', 'the constable\u2019s notebook'],
           1, 'She thinks the letter should be used.',
           {0: 'She says she thinks he should use the letter.', 2: 'She is defending the chapter\u2019s claim, not attacking '
               'it.', 3: 'The notebook comes up later, as the second half.'}),
          ('What does Casimir\u2019s draft call the letter?',
           ['a later recollection', 'contemporary testimony', 'an unreliable account', 'an eyewitness report'],
           1, 'Although it was written four days afterwards.',
           {0: 'A later recollection is what she says it should be '
               'called.', 2: 'He does not describe it as unreliable.', 3: 'Eyewitness is accurate but not the phrase she objects '
               'to.'}),
          ('What finally persuades him to expand the citation?',
           ['the crowd figure', 'that it is the only evidence for his central claim', 'the four-day gap', 'the editor'],
           1, 'An argument Perpetua says she did not start with.',
           {0: 'The crowd figure is part of her objection, not the '
               'clincher.', 2: 'The four-day gap is one clause she wants added.', 3: 'No editor is mentioned in the exchange.'}),
          ('For the eastern gate, Perpetua says the constable is',
           ['the best source', 'not a source at all', 'a corroborating source', 'an official source'],
           1, 'Because he records never having seen it.',
           {0: 'He is the best source for the western end.', 2: 'He cannot corroborate what he did not see.', 3: 'Being official does not make him a witness to it.'}),
          ('The absence of eastern disorder from the notebook is',
           ['evidence it did not happen', 'not evidence of its absence', 'proof of a cover-up', 'inconclusive about the west'],
           1,
           'Which is the inference Casimir\u2019s next paragraph makes.',
           {0: 'She says the absence proves nothing about the east.', 2: 'No concealment is alleged by either historian.', 3: 'The notebook is reliable about the west.'}),
          ('Perpetua says an overstating citation is nearly always',
           ['careless', 'load-bearing for something later', 'deliberate', 'harmless'],
           1, 'Which is why she chased the citation at all.',
           {0: 'She says it is rarely an accident.', 2: 'She does not say the overstatement is deliberate.', 3: 'She says it is worth chasing, so not harmless.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Remembering',
    longturn=[('The event I remember differently is a car accident my family '
               'was in when I was eleven, on a motorway, in which nobody was '
               'hurt.'),
              ('The others there were my mother, who was driving, my father in '
               'the front, and my younger brother, who was seven at the time '
               'and remembers nothing at all.'),
              ('How their accounts differ from mine is specific and '
               'consistent. I remember the car spinning twice, coming to rest '
               'facing the traffic, and a lorry stopping about ten metres '
               'away. My mother says we did not spin; we slid sideways onto '
               'the hard shoulder and stopped facing the right way. My father '
               'agrees with her, and adds that the lorry was already stopped '
               'some distance back. The police report, which my mother kept, '
               'describes a single rotation and gives a resting position '
               'consistent with her account rather than mine.'),
              ('Why I think the accounts differ is the part I have thought '
               'about most, because mine is clearly the wrong one and it has '
               'not faded. From the back seat I could see only out of the side '
               'window, so the world rotated past me once and then the traffic '
               'was in front of me, which is exactly what one rotation looks '
               'like from where I was sitting and exactly what two would look '
               'like as well. I had no way to distinguish them. On top of that '
               'I have told the story perhaps thirty times, and I suspect I am '
               'now remembering the telling. What I find unsettling is not '
               'being wrong; it is that the memory is as vivid as any I have, '
               'and that the vividness was never evidence of anything.')],
    intro=('Short answers, then the long turn. The last bullet is where '
           'the band is decided.'),
    cue=('Describe an event you remember differently from other people.',
         ['what the event was', 'who else was there',
          'how their account differs from yours',
          'and explain why you think the accounts differ']),
    qs=['Do you have a good memory for events?',
        'Do you and your family agree about the past?',
        'Now look at the card. You have one minute to make notes.',
        'Why do people remember the same thing differently?'],
    shape=[('answer', 'A move when I was nine, which I remember as rain.'),
           ('support', 'My sister remembers sun and a long wait for a van.'),
           ('follow-up', 'We agree on the house and on nothing about the day.'),
           ('support', 'Neither of us has any reason to be '
            'misremembering on purpose.'),
           ('follow-up', 'So I think we each kept the part that mattered to us, and lost the rest.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should history be taught as a single national story?',
         prompt=('Some people believe history in schools should be taught '
                 'as a single national story. Consider that view and then '
                 'give your own. Write at least 250 words.'),
         model=[
          'The case for a single national story is usually dismissed too '
          'quickly, and it deserves its strongest form before anything is '
          'said against it. A shared account is what allows a population to '
          'argue with itself: a disagreement about whether a past action '
          'was justified requires both parties to be talking about the same '
          'action, and the absence of any common narrative produces not '
          'pluralism but mutual incomprehension. Countries that have lost '
          'the shared frame have not gained nuance.',
          'The case is strongest about the frame and weakest about the '
          'verdict, and the two are routinely conflated by both sides. A '
          'curriculum can establish that a particular war happened, when, '
          'and what was done in it, as a common inheritance, while leaving '
          'the judgement open. What advocates of a national story usually '
          'want is the verdict settled too, and that is a different '
          'proposal wearing the first one’s clothes.',
          'The strongest objection is not that a single story is partial, '
          'which every story is, but that it is partial in a direction the '
          'records themselves produce. Archives are the residue of '
          'administration: litigation leaves a trail and contentment leaves '
          'none, the propertied leave estate papers and the propertyless '
          'leave entries in somebody else’s ledger. A national story built '
          'from what survives inherits the selection of what survived, and '
          'does so without anybody choosing it.',
          'That gives a more useful formulation than either camp offers. '
          'The question is not single story against many stories; it is '
          'whether the story taught includes an account of its own sources. '
          'A pupil who learns that the seventeenth century in their county '
          'archive is thin because of a fire, and not because the century '
          'was quiet, has learned something transferable about every claim '
          'they will meet.',
          'My own position is therefore that a common framework should be '
          'taught and that it should be taught together with how it was '
          'assembled: which documents survive, whose lives generated '
          'documents at all, and what the gaps are. That is harder to '
          'examine than a narrative and considerably harder to teach, and '
          'it is the only version of the proposal that does not require '
          'deciding in advance what pupils will conclude.'],
         notes=[
          'The first paragraph builds the opposing case to its strongest '
          'point and concedes something real to it. Structure 2 fails when '
          'the opposing view is a straw figure; here it is given a reason '
          'nobody usually offers.',
          'Paragraph 2 performs the most valuable single move in an essay '
          'of this kind: separating two claims that the question had fused '
          '— the frame and the verdict. Everything after it follows from '
          'that separation.',
          'The objection in paragraph 3 is evidential rather than '
          'political, which is why it survives. "Litigation leaves a trail '
          'and contentment leaves none" is an argument about archives that '
          'neither side of the political dispute can simply reject.'],
         criterion=[('The opposing view at its strongest',
                     'Task Response'),
                    ('Separating two claims the question had fused',
                     'Task Response'),
                    ('An objection that is evidential rather than '
                     'political', 'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Reported stance and free indirect style',
    explain=('Writing about what a source claims requires marking the '
             'distance between the source’s view and your own. At band '
             '7.5 that distance is varied deliberately rather than held at '
             'one setting.'),
    examples=['Each account is accurate about what its writer was '
              'positioned to see.',
              'The letter puts the crowd at a thousand; windows '
              'overestimate reliably.',
              'On his own account he never saw the eastern gate.',
              'The reporter arrived at half past three, so the hour before '
              'is not his to describe.'],
    task='Rewrite each sentence so that the source’s claim and your view '
         'are distinguishable.',
    items=[('There were a thousand people.',
            'The resident puts the crowd at a thousand, a figure from an '
            'upstairs window and probably high by a factor of three.'),
           ('The police were at the western gate.',
            'The constable records himself as stationed at the western end '
            'throughout, which is also why he is silent on the east.'),
           ('Nothing happened at the eastern gate.',
            'No disorder at the eastern gate appears in the notebook, whose '
            'author states he could not see it.'),
           ('The witness exaggerated.',
            'The 1987 interview gives figures substantially higher than the '
            'same witness gave in 1974.'),
           ('The newspaper account is incomplete.',
            'The reporter arrived at 3.30, so the report covers neither the '
            'gathering nor the ninety minutes before the vehicles '
            'came.')]),
   vocab=[('testimony', 'an account given by a witness'),
          ('corroboration', 'independent support for a claim'),
          ('reliability', 'how far an account can be depended on'),
          ('positioned', 'placed so as to see some things and not '
           'others'),
          ('contemporary', 'made at the time of the events'),
          ('recollection', 'an account given from memory later'),
          ('oral history', 'testimony recorded in interview'),
          ('interest', 'a stake that may shape what a source says')],
   expr=[('Each account is accurate about what its writer was positioned '
          'to see', 'the cycle’s governing sentence'),
         ('his 1987 account is good evidence about 1987',
          'relocates what a later source is evidence of'),
         ('not a source at all, for that gate',
          'limits a source by its position'),
         ('an overstating citation is nearly always load-bearing',
          'explains why a small inaccuracy matters')],
   trans=['whereas', 'that said', 'on his own account',
          'the strongest objection'],
  ),

  dict(
   sub='What survives',
   step=5,
   read=[
    dict(heading='Records surviving from four centuries',
         kind='Data article',
         task='Matching information, sentence completion and True/False/Not Given',
         band='gt_work', qtype='Questions 33-38',
         figure=_SURV,
         paras=[
          'The chart shows documents catalogued in one county archive per '
          'thousand estimated to have been created, by type and by century. '
          'The denominator is itself an estimate, built from administrative '
          'records of how many documents each office was required to '
          'produce, and is more reliable for court records than for '
          'personal ones.',
          'The overall pattern is a rise with recency, which is expected: '
          'later documents have had less time in which to be lost. Court '
          'and legal records rise from 41 per thousand in the sixteenth '
          'century to 214 in the nineteenth; estate and land records from '
          '26 to 178; parish and personal records from 7 to 96.',
          'The seventeenth century interrupts that pattern in every '
          'category and interrupts it severely. Court records fall from 41 '
          'to 12, estate records from 26 to 9, parish records from 7 to 2. '
          'A century later than the sixteenth, the seventeenth has survived '
          'at about a quarter of the rate.',
          'The cause in this archive is documented and specific: a fire in '
          'the county hall in 1783 destroyed the seventeenth-century '
          'deposits, which had been shelved together. The eighteenth-century '
          'material was held elsewhere in the building and the sixteenth '
          'had been moved to the cathedral in 1771. The gap is a fact about '
          'a building rather than about a century.',
          'This matters because the same shape appears in archives where no '
          'such event is recorded, and is there routinely explained in '
          'historical terms: a disordered period, a collapse of '
          'administration, a population too occupied to write. Some of '
          'those explanations are correct. The point is that the shape of '
          'the chart does not distinguish between them and a fire.',
          'A second feature repays attention and is easy to miss. The '
          'shortfall is not proportionally equal across the three '
          'categories. Court records fall to 29 per cent of their '
          'sixteenth-century rate, estate records to 35 per cent, and '
          'parish records to 29 per cent. The categories that survived '
          'worst overall are not the categories that lost most in the '
          'fire.',
          'That distinction between a general survival rate and a specific '
          'loss is the one a careful description preserves. Parish and '
          'personal records are the sparsest in every century, which is a '
          'fact about what was created and kept. The seventeenth-century '
          'collapse is a fact about one fire. Both are visible in the chart '
          'and they are different kinds of fact.'],
         items=[
          (
           'Which paragraph gives the documented cause of the '
           'seventeenth-century gap?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           2, 'A fire in the county hall in 1783.',
           {0: 'Paragraph 2 gives the overall pattern and figures.', 1: 'Paragraph 3 describes the interruption itself.', 3: 'Paragraph 5 warns that the same shape is elsewhere '
               'explained historically.'}),
          (
           'Which paragraph warns that the same shape is elsewhere '
           'explained historically?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           1, 'A disordered period, a collapse of administration.',
           {0: 'Paragraph 4 gives the documented cause of the '
               'seventeenth-century gap.', 2: 'Paragraph 6 compares the shortfall across categories.', 3: 'Paragraph 7 distinguishes a survival rate from a '
               'specific loss.'}),
          (
           'Which paragraph distinguishes a survival rate from a '
           'specific loss?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 4'],
           2, 'Two different kinds of fact, both visible in the chart.',
           {0: 'Paragraph 5 warns about historical explanations.', 1: 'Paragraph 6 compares the shortfall across categories.', 3: 'Paragraph 4 gives the documented cause.'}),
          ('Court and legal records in the nineteenth century: '
           '____________ per thousand', None, '214',
           'Paragraph 2, up from 41 in the sixteenth.'),
          (
           'The cause of the seventeenth-century gap in this archive '
           'is known.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 4 names a fire in the county hall in 1783.',
           {1: 'False would need the cause to be unknown, and '
               'paragraph 4 documents it.', 2: 'Not Given is wrong because paragraph 4 gives the event '
               'and the year.'}),
          (
           'The same shape appears only in archives where a fire is '
           'recorded.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 5 says it appears where no such event is '
           'recorded at all.',
           {0: 'True contradicts paragraph 5, which is the point of '
               'the paragraph.', 2: 'Not Given is wrong because paragraph 5 states the '
               'opposite.'})])],
   listen=[
    dict(heading='An archivist on survival and loss', part='Part 4',
         task='A lecture on what archives contain · multiple choice', band='l4',
         qtype='Questions 39-44',
         figure=_SURV,
         script=[
          ('Archivist', 'Look at the seventeenth century on this chart. '
           'Every category collapses. Now, before I tell you why, notice '
           'what you have already started doing, which is constructing an '
           'explanation. Civil war, disorder, administration breaking down. '
           'Hold that thought, because it is the thing this lecture is '
           'about.'),
          ('Archivist', 'First the pattern it interrupts. Court and legal '
           'records: forty-one per thousand in the sixteenth century, two '
           'hundred and fourteen in the nineteenth. Estate and land: '
           'twenty-six to a hundred and seventy-eight. Parish and personal: '
           'seven to ninety-six. Rising with recency, which is exactly what '
           'you expect, because later documents have had less time to be '
           'lost.'),
          ('Archivist', 'Now the seventeenth. Court records twelve. Estate '
           'records nine. Parish records two. A century more recent than '
           'the sixteenth and surviving at about a quarter of the rate.'),
          ('Archivist', 'And the cause, which is documented: a fire in the '
           'county hall in seventeen eighty-three. The seventeenth-century '
           'deposits had been shelved together, so they went together. The '
           'eighteenth-century material was in another part of the '
           'building. The sixteenth had been moved to the cathedral twelve '
           'years earlier. The gap is a fact about a building.'),
          ('Archivist', 'So: the explanation you began constructing was '
           'about a century, and the actual explanation is about a shelf. '
           'And here is why that matters beyond this archive. The same '
           'shape turns up in collections where no fire is recorded, and '
           'there it is routinely explained historically — and sometimes '
           'the historical explanation is right. The chart cannot tell you '
           'which.'),
          ('Archivist', 'A second thing, which is subtler and which I want '
           'you to take seriously. The shortfall is not proportionally '
           'equal. Court records fall to twenty-nine per cent of their '
           'sixteenth-century rate, estate to thirty-five, parish to '
           'twenty-nine. So the categories that survive worst overall are '
           'not the ones that lost most in the fire.'),
          ('Archivist', 'Which means two different facts are sitting in one '
           'chart. Parish and personal records are sparsest in every '
           'century: that is about what got created and kept, and it is '
           'about whose lives generated documents at all. The seventeenth '
           'century collapse is about one afternoon in 1783. A description '
           'that runs those together has lost most of the information.'),
          ('Archivist', 'And the rule I would send you away with is about '
           'describing, not explaining. When you report a chart with a hole '
           'in it, say where the hole is, how deep it is, and whether it is '
           'the same depth everywhere. Then stop. The cause is not in the '
           'chart, and the explanation you find most satisfying is the one '
           'you should distrust most, because you built it before you had '
           'any evidence at all.')],
         items=[
          (
           'He says that before hearing the cause, listeners have '
           'already begun',
           ['checking the figures', 'constructing an explanation', 'comparing archives', 'doubting the data'],
           1, 'Civil war, disorder, administration breaking down.',
           {0: 'The figures are not in dispute at that point.', 2: 'Other archives come up later in the lecture.', 3: 'The data is accepted; the explanation is the problem.'}),
          ('Court and legal records in the sixteenth century stood at',
           ['12', '26', '41', '214'], 2,
           'Rising to 214 by the nineteenth.',
           {0: 'Twelve is the seventeenth-century court figure.', 1: 'Twenty-six is the sixteenth-century estate figure.', 3: '214 is the nineteenth-century court figure.'}),
          ('The cause of the seventeenth-century gap was',
           ['civil war', 'a fire in 1783', 'poor cataloguing', 'theft'],
           1, 'The deposits having been shelved together.',
           {0: 'Civil war is the explanation he says listeners '
               'construct.', 2: 'Cataloguing is a separate distortion in the next '
               'cycle.', 3: 'Theft is not mentioned as a cause.'}),
          (
           'The sixteenth-century material survived because it had '
           'been',
           ['copied', 'moved to the cathedral', 'kept in another county', 'stored in metal cases'],
           1, 'Twelve years before the fire destroyed the rest.',
           {0: 'No copying is mentioned in the lecture.', 2: 'It stayed in the county, at the cathedral.', 3: 'Storage material is not what saved it.'}),
          (
           'Estate records fell to what percentage of their '
           'sixteenth-century rate?',
           ['twenty-nine', 'thirty-five', 'forty-one', 'fifty'], 1,
           'Against twenty-nine for both court and parish records.',
           {0: 'Twenty-nine is the court and parish figure.', 2: 'Forty-one is the sixteenth-century court rate.', 3: 'Higher than the percentage he gives.'}),
          ('His closing rule is to describe the hole and then',
           ['explain it', 'stop', 'compare archives', 'estimate the loss'],
           1,
           'Because the explanation you find satisfying was built '
           'without evidence.',
           {0: 'He says the cause is not in the chart.', 2: 'Comparison with other archives is a separate point.', 3: 'Estimating the loss is part of describing the hole.'})])],
   speak=dict(
    part='Part 3', focus='What the past left behind',
    intro=('Five or six sentences. Try once to say what an absence does '
           'and does not show.'),
    qs=['Why do some things from the past survive and others not?',
        'Should everything be preserved?',
        'Who decides what is worth keeping?',
        'Does it matter that some lives leave no record?'],
    shape=[('answer', 'Mostly by accident, and the accidents are not '
            'random.'),
           ('support', 'One archive I read about lost a whole century to a '
            'fire.'),
           ('follow-up', 'The chart looks like a quiet century and it was '
            'a shelf.'),
           ('support', 'But the records of poorer people are thin in every '
            'century.'),
           ('follow-up', 'So one gap is an accident and the other is a '
            'pattern, and they look identical on the page.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Surviving records by type and century',
         prompt=('The chart below shows documents surviving in one county '
                 'archive per thousand estimated to have been created, by '
                 'type and century. Summarise the information by selecting '
                 'and reporting the main features, and make comparisons '
                 'where relevant. Write at least 150 words.'),
         figure=_SURV,
         model=[
          'The bar chart shows survival rates for three types of record in '
          'one county archive across four centuries, expressed per thousand '
          'documents estimated to have been created. Overall, survival '
          'rises steeply with recency in all three categories, with one '
          'sharp interruption: the seventeenth century, which is markedly '
          'lower than the sixteenth in every type.',
          'Court and legal records survive best throughout. They rise from '
          '41 per thousand in the sixteenth century to 214 in the '
          'nineteenth, with estate and land records following a similar '
          'path at a lower level, from 26 to 178. Parish and personal '
          'records are the sparsest in every century, from 7 to 96.',
          'The seventeenth century is the exception to the upward trend. '
          'Court records fall to 12, estate records to 9 and parish records '
          'to 2, so that all three are substantially lower than in the '
          'century before them.',
          'The size of that shortfall is not identical across the three. '
          'Court and parish records both fall to a little under 30 per cent '
          'of their sixteenth-century level, while estate records fall to '
          'about 35 per cent, making estate records the least affected of '
          'the three in proportional terms although still the second '
          'sparsest overall.'],
         notes=[
          'The Overall statement names both the trend and the interruption. '
          'A chart with a hole in it is set precisely because weak answers '
          'describe the trend and mention the hole as an afterthought.',
          'The fourth paragraph does the thing almost nobody does: it asks '
          'whether the shortfall is the same size everywhere, and finds '
          'that it is not. That comparison is available from the figures '
          'and is where the marks are.',
          'Nothing explains why the seventeenth century is low. A fire, a '
          'war, a change in record-keeping — none of this is on the '
          'chart, and the explanation that feels most natural is the one '
          'the chart least supports.'],
         criterion=[('An Overall statement naming the interruption',
                     'Task Achievement'),
                    ('Asking whether the shortfall is proportionally '
                     'equal', 'Coherence and Cohesion'),
                    ('No explanation of the gap', 'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing absence as data',
    fix=dict(
     text=('The table gives figures for four groups, but no entry is recorded '
           'for agricultural labourers before 1840. The absence is itself a '
           'finding: the group was not counted, which do not mean it did not '
           'exist. Where a series begins is therefore a fact about the record '
           'and not about the population. The figures for landowners, which '
           'are complete from 1760, cover a much smaller number of people.'),
     faults=[('which do not mean it did not exist',
              'which does not mean it did not exist',
              ('Which stands for the preceding clause and takes a singular '
               'verb.')),
             ('a fact about the record and not about the population',
              'a fact about the record rather than about the population',
              ('And not is clumsy in a formal contrast; rather than is the '
               'usual form.')),
             ('The absence is itself a finding',
              ('The absence is itself a finding, and the most important one in '
               'the table'),
              ('A claim this strong needs to say why, or it reads as an '
               'assertion.'))]),
    explain=('A gap in a chart is a finding and has to be written as one, '
             'with its depth and its distribution reported. These patterns '
             'describe an absence without filling it in.'),
    examples=['The seventeenth century is thin because of a fire, not a '
              'silence.',
              'All three categories fall, and not by the same '
              'proportion.',
              'No record survives for that decade, which is not the same '
              'as nothing having happened.',
              'The shortfall is deepest in parish records and widest in '
              'the seventeenth century.'],
    task='Rewrite each sentence so that the absence is described rather '
         'than explained.',
    items=[('Nothing much happened in the seventeenth century.',
            'Seventeenth-century survival is about a quarter of the '
            'sixteenth-century rate in all three categories.'),
           ('The records were destroyed in the war.',
            'The seventeenth-century material is substantially sparser than '
            'the centuries either side of it.'),
           ('Poor people did not write things down.',
            'Parish and personal records survive at the lowest rate in '
            'every century shown.'),
           ('The gap proves the administration collapsed.',
            'The gap is present in all three categories and is of similar '
            'proportional depth in two of them.'),
           ('There is no evidence, so it did not happen.',
            'No surviving record addresses it, which leaves the question '
            'open rather than settled.')]),
   vocab=[('survival rate', 'how much of what was made still exists'),
          ('weeding', 'the deliberate destruction of records not kept'),
          ('retention schedule', 'the rule saying what is kept and for how '
           'long'),
          ('catalogue', 'the index by which holdings are found'),
          ('transferred body', 'a set of records that arrived '
           'together'),
          ('deficit', 'the amount by which a figure falls below '
           'expectation'),
          ('estimated total', 'the quantity a survival rate is measured '
           'against'),
          ('interruption', 'a break in an otherwise steady pattern')],
   expr=[('The seventeenth century is thin because of a fire, not a '
          'silence', 'the cycle’s governing sentence'),
         ('the explanation was about a century and the cause was about a '
          'shelf', 'contrasts a plausible with an actual cause'),
         ('the shortfall is not proportionally equal',
          'opens the comparison a weak answer misses'),
         ('describe the hole, then stop',
          'the discipline a gap in a chart requires')],
   trans=['while', 'it should be noted that', 'taken together',
          'the exception to this'],
  ),

  dict(
   sub='Why archives are not samples',
   step=5,
   read=[
    dict(heading='Litigation leaves a trail; contentment leaves none',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and note completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'An archive is frequently treated, in practice if not in theory, '
          'as a sample of the society that generated it. Researchers '
          'enumerate what survives, infer proportions, and reason about the '
          'past as though the surviving documents stood in the same relation '
          'to past existence as a survey stands to a population. They do '
          'not, and the respects in which they do not are systematic rather '
          'than random, which is what renders the error consequential. A '
          'random distortion would at worst introduce noise; a distortion '
          'possessing direction displaces every estimate identically, and '
          'displaces them without announcing that it has.',
          'The first and largest distortion is that documents are produced '
          'by administration. A transaction generates a record when some '
          'institution requires one: a court case, a land transfer, a tax '
          'assessment, a charge. Activities that no institution took an '
          'interest in generate nothing, and the resulting collection is '
          'the residue of an administration rather than a picture of a '
          'society.',
          'This generates a specific and well-established asymmetry: '
          'conflict is documented and consensus is not. A disputed '
          'boundary generates decades of paper; a boundary universally '
          'accepted generates a solitary entry when the land changes '
          'hands, if that. A reader enumerating disputes in a parish '
          'archive and concluding that the parish was quarrelsome has '
          'measured the record-generating properties of quarrels. The '
          'identical reasoning applies wherever a behaviour and its '
          'documentation are generated by the same circumstance, which '
          'covers a surprising proportion of what social historians '
          'enumerate.',
          'The second distortion follows the distribution of property. '
          'Individuals with land leave deeds, wills, rentals and '
          'estate correspondence; people without land appear, if at '
          'all, in somebody else\u2019s document, and appear there in a '
          'form shaped by that person\u2019s purposes. The archive is not '
          'silent about the poor: it records them as objects of '
          'administration, which is a distinct thing from recording '
          'their lives and is frequently mistaken for it. The '
          'distinction is not pedantic: a workhouse register tells you '
          'a great deal about the workhouse and only what the '
          'workhouse needed to know about the people in it.',
          'A third distortion is temporal and is generated subsequent to the '
          'event. Survival is not random with respect to format, storage or '
          'institutional continuity: parchment outlasts paper, material '
          'retained by a continuous institution outlasts material retained '
          'by one that dissolved, and anything shelved together perishes '
          'together. The last of these can excise a century from a '
          'collection without excising anything from the past. That '
          'mechanism is distinctively deceptive because its effects are '
          'chronologically configured, and a chronologically configured gap '
          'resembles a historical event precisely.',
          'A fourth operates through cataloguing and is the least discussed. '
          'Material that is uncatalogued constitutes, for most practical '
          'purposes, material that does not exist: it will not be located by '
          'a researcher unaware of its existence. Cataloguing effort has '
          'historically followed scholarly interest, with the consequence '
          'that the topics already studied are the topics whose sources are '
          'locatable, a feedback loop operating on a timescale of '
          'generations. A researcher entering a field therefore inherits not '
          'merely its questions but the sole sources with which those '
          'questions can conveniently be pursued.',
          'Recognising these does not license the sceptical conclusion that '
          'nothing can be known, which is the response most frequently '
          'generated by a first encounter with them. The distortions are '
          'systematic, which entails that they possess direction and are '
          'susceptible to reasoning, and an established bias constitutes a '
          'wholly distinct situation from an unidentified one. Much of the '
          'finest historical work consists precisely of reasoning backwards '
          'through an established distortion, and the reasoning is '
          'frequently more secure than the enumeration it corrects.',
          'The techniques for doing this are specific: where two '
          'administrations recorded overlapping populations for '
          'different purposes, the overlap can be used to estimate '
          'what each missed. Where a series is complete for one parish '
          'and fragmentary for its neighbours, the complete series '
          'calibrates the fragments. Where a document exists because '
          'of an exception, the exception implies the rule it departed '
          'from.',
          'That last technique is the most powerful and the most easily '
          'abused. A prosecution for an unusual offence tells you the '
          'offence was unusual enough to prosecute, which is evidence about '
          'the norm; it does not tell you how common the behaviour was, and '
          'the step from the first to the second is taken constantly and '
          'scarcely ever defended.',
          'What follows for a reader is a habit rather than a rule. On '
          'encountering a claim about the past supported by enumeration from '
          'an archive, enquire what generated the documents enumerated, and '
          'whether the quantity under measurement affects the rate at which '
          'documents were generated. If it does, the enumeration measures '
          'the document-generating process and the historical claim requires '
          'a separate argument. The enquiry occupies ten seconds and is '
          'answerable by anybody, a reader possessing no knowledge of the '
          'period included.',
          'The strongest version of this point is not epistemological but '
          'moral, and merits stating once. Most people who have lived left '
          'no durable trace, and the fraction who did was determined largely '
          'by their relation to property and administration. A history '
          'written from the archive alone is a history of the documented, '
          'and saying so is not a flourish but an accurate statement of what '
          'the sources are.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['The residue of administration', 'Why conflict is documented and agreement is not', 'Survival and format', 'Cataloguing'],
           1, 'A disputed boundary generates decades of paper.',
           {0: 'The residue of administration is paragraph 2.', 2: 'Survival and format is paragraph 5.', 3: 'Cataloguing is paragraph 6.'}),
          ('Choose the best heading for paragraph 6.',
           ['Property and the record', 'Survival and storage', 'Cataloguing as a filter', 'Reasoning through a distortion'],
           2, 'Uncatalogued material effectively does not exist.',
           {0: 'Property and the record is paragraph 4.', 1: 'Survival and storage is paragraph 5.', 3: 'Reasoning through a distortion is paragraph 7.'}),
          ('Choose the best heading for paragraph 8.',
           ['Why scepticism does not follow', 'Techniques for reasoning through the distortions', 'The reader\u2019s habit', 'The moral version'],
           1,
           'Overlapping administrations, complete series, exceptions.',
           {0: 'Why scepticism does not follow is paragraph 7.', 2: 'The reader\u2019s habit is paragraph 10.', 3: 'The moral version is paragraph 11.'}),
          (
           'The writer believes an archive is a sample of the society '
           'that produced it.', ['Yes', 'No', 'Not Given'],
           1, 'Paragraph 1 says the ways it is not are systematic.',
           {0: 'Yes would need representativeness; paragraph 1 calls '
               'the gaps systematic.', 2: 'Not Given is wrong because what an archive is is '
               'defined.'}),
          (
           'The writer believes the distortions mean nothing can be '
           'known about the past.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 calls that the response of a first encounter.',
           {0: 'Yes would need nothing; paragraph 7 calls that a first '
               'reaction.', 2: 'Not Given is wrong because the sceptical conclusion is '
               'addressed.'}),
          ('An archive is described as the ____________ of an '
           'administration rather than a picture of a society.', None,
           'residue',
           'Paragraph 2, where records follow institutional interest.'),
          ('The archive records the poor as objects of ____________.',
           None, 'administration',
           'Paragraph 4, which is frequently mistaken for recording their '
           'lives.'),
          ('A prosecution for an unusual offence is evidence about the '
           '____________ rather than about how common the behaviour was.',
           None, 'norm',
           'Paragraph 9, a step taken constantly and rarely defended.')])],
   listen=[
    dict(heading='A lecture on archival silence', part='Part 4',
         task='A lecture on what archives do not contain · multiple choice', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'What survives is the residue of an administration, '
           'not a sample of a society. Everything in this hour follows from '
           'that sentence, and almost every error I mark in doctoral work '
           'comes from treating a collection as though it were a '
           'survey.'),
          ('Lecturer', 'Documents exist because an institution wanted one. '
           'A court case, a land transfer, a tax assessment, a charge. '
           'Activities nobody official took an interest in produce nothing '
           'at all, and that is not a gap in the archive; it is what the '
           'archive is.'),
          ('Lecturer', 'From which the asymmetry everybody should know and '
           'many do not: litigation leaves a trail and contentment leaves '
           'none. A disputed boundary generates fifty years of paper. A '
           'boundary everybody accepted generates one line when the land '
           'sells. Count disputes in a parish and conclude the parish was '
           'quarrelsome, and you have measured how good quarrels are at '
           'making documents.'),
          ('Lecturer', 'Second distortion, and it tracks property. Land '
           'gives you deeds, wills, rentals, estate letters. No land and '
           'you appear in somebody else’s paper, described for their '
           'purposes. The archive is not silent about the poor — that is '
           'the comfortable version. It records them as objects of '
           'administration, which is different and is constantly mistaken '
           'for the other thing.'),
          ('Lecturer', 'Third, survival, which happens afterwards and is '
           'not random. Parchment beats paper. A continuous institution '
           'beats a dissolved one. And anything shelved together is lost '
           'together, which can take a century out of a collection without '
           'taking anything out of the past.'),
          ('Lecturer', 'Fourth, and this one is almost never taught. '
           'Uncatalogued is, in practice, non-existent: nobody finds what '
           'they do not know is there. Cataloguing has followed scholarly '
           'fashion for two centuries, so the findable sources are the '
           'sources for topics already studied. That is a feedback loop '
           'running on a generational timescale and we are all inside '
           'it.'),
          ('Lecturer', 'Now, the response I get at this point is that '
           'nothing can be known, and I want to block it firmly. These '
           'distortions are systematic. They have a direction. A known bias '
           'is a completely different situation from an unknown one, and '
           'most of the best work in this field is reasoning backwards '
           'through one.'),
          ('Lecturer', 'Three techniques, briefly. Two administrations '
           'recording overlapping populations: use the overlap to estimate '
           'what each missed. One complete parish series beside fragmentary '
           'neighbours: calibrate the fragments against the complete one. '
           'And a document that exists because something was exceptional: '
           'the exception implies the rule.'),
          ('Lecturer', 'That third one is the most powerful and the most '
           'abused, so take it carefully. A prosecution for an unusual '
           'offence tells you it was unusual enough to prosecute. It does '
           'not tell you how often the behaviour happened. People step from '
           'the first to the second constantly and almost nobody defends '
           'the step when challenged.')],
         items=[
          (
           'The sentence the lecture follows from is that what '
           'survives is the residue of',
           ['a society', 'an administration', 'a generation', 'a collection'],
           1, 'Rather than a sample of a society.',
           {0: 'A sample of a society is what it is not.', 2: 'A generation is not the unit he names.', 3: 'The collection is what the residue consists of.'}),
          ('Counting disputes in a parish archive measures',
           ['how quarrelsome the parish was', 'how good quarrels are at generating documents', 'the size of the parish', 'the quality of the archive'],
           1, 'Because agreement leaves no trail.',
           {0: 'That is the conclusion he says is unwarranted.', 2: 'Parish size is not what the count measures.', 3: 'Archive quality is not what is being measured.'}),
          ('He says the archive records the poor',
           ['not at all', 'as objects of administration', 'in their own words', 'only after 1800'],
           1, 'Which he calls different from the comfortable version.',
           {0: 'He says the archive is not silent about them.', 2: 'Their own words are what the record does not carry.', 3: 'No date threshold is given in the lecture.'}),
          ('Anything shelved together, he says, is',
           ['catalogued together', 'lost together', 'found first', 'copied'],
           1, 'Which can remove a century from a collection.',
           {0: 'Cataloguing is a separate, fourth distortion.', 2: 'Being found first is not what he says happens.', 3: 'Copying is not part of his account of survival.'}),
          ('The fourth distortion operates through',
           ['storage', 'cataloguing', 'language', 'ownership'], 1,
           'Since nobody finds what they do not know is there.',
           {0: 'Storage is the third distortion, not the fourth.', 2: 'Language is not among the four distortions.', 3: 'Ownership drives the second distortion.'}),
          (
           'He blocks the response that nothing can be known by saying '
           'the distortions are',
           ['small', 'systematic and directional', 'recent', 'correctable'],
           1, 'A known bias being different from an unknown one.',
           {0: 'He does not claim the distortions are small.', 2: 'Age of the distortions is not his answer.', 3: 'Correctability follows from direction, not the '
               'reverse.'})])],
   speak=dict(
    part='Part 3', focus='Whose past is recorded',
    followup=[('You say the record favours some lives. Is that changing?',
               ('Yes, and unevenly. Digital records capture far more people '
                'and keep them far less reliably, so we may be the first '
                'generation to be both exhaustively documented and largely '
                'unreadable in a century. The bias has shifted from literacy '
                'to format.')),
              ('Should governments keep more records or fewer?',
               ('More of some and fewer of others, which is not a compromise '
                'but a distinction. Administrative records of what the state '
                'did are the ones historians cannot reconstruct and should be '
                'kept indefinitely. Comprehensive records about individuals '
                'are a standing risk and should be kept only as long as the '
                'purpose lasts.')),
              ('Can we learn about people who left no records?',
               ('A surprising amount, and almost none of it from documents. '
                'Skeletons give diet, growth and illness; isotopes give '
                'movement; genetics gives relationships. It is a different '
                'kind of knowledge, impersonal and statistical, and it covers '
                'exactly the people writing missed.')),
              ('Does that mean the written record matters less than it did?',
               ('It means it is no longer the only evidence, which is a change '
                'in the balance rather than a demotion. Where the two conflict '
                'the material evidence usually wins, and the interesting work '
                'is in the cases where a document says something the bones '
                'contradict.'))],
    intro=('Five or six sentences. Try once to say whose lives generate '
           'documents.'),
    qs=['Whose lives are best recorded in history?',
        'Is that changing?',
        'Should governments keep more records or fewer?',
        'Can we learn about people who left no records?'],
    shape=[('answer', 'People who owned things or were in trouble.'),
           ('support', 'Documents get made when an institution wants '
            'one.'),
           ('follow-up', 'A land dispute makes fifty years of paper.'),
           ('support', 'Everyone agreeing about a boundary makes '
            'none.'),
           ('follow-up', 'So the archive is a record of administration '
            'rather than of life, and that is not a flaw in it — it is '
            'what it is.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Does the objection undermine itself?',
         prompt=('Can history be written from records alone? Brainstorm '
                 'ten, run the six tests, name the premise under each, and '
                 'then take the strongest objection to your thesis and ask '
                 'whether it survives being applied to itself. Twelve '
                 'minutes.'),
         plan=('History cannot be written from records alone and is not '
               'thereby impossible, because the distortions in the record '
               'are systematic rather than random, and a systematic '
               'distortion is something you can reason through rather than '
               'a reason to stop',
               [('The case that records are insufficient rests on a '
                 'premise about what generates a document, which holds and '
                 'is stronger than usually stated',
                 ['litigation leaves a trail and contentment leaves none',
                  'the archive records the propertyless as objects of '
                  'administration']),
                ('The sceptical objection rests on a premise that '
                 'undermines itself when applied to its own evidence',
                 ['the claim that no source can be trusted is itself '
                  'argued from sources',
                  'the distortions it cites were established by the '
                  'methods it rejects'])]),
         notes=[
          'The new move is reflexive: take the objection and apply it to '
          'itself. The sceptical position here is established from '
          'archival research, so if its premise held, the evidence for it '
          'would fall with everything else.',
          'This is not a debating trick and it has a limit worth knowing. '
          'An objection that undermines itself is defeated only in its '
          'strong form; the weaker version — that records are partial in '
          'knowable ways — survives intact and is the one worth having.',
          'Notice the thesis holds both halves: the records are '
          'insufficient AND history is possible. A plan that lets one half '
          'defeat the other has not found the position; it has picked a '
          'side.'],
         criterion=[('Applying an objection to itself',
                     'Task Response'),
                    ('Separating the strong form from the survivable one',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this in cycle 5.',
         lines=12)],
   gram=dict(
    point='Inference from absence and its limits',
    explain=('An absence supports some inferences and not others, and the '
             'difference turns on whether the thing would have left a '
             'trace. These patterns keep the inference inside what the '
             'silence licenses.'),
    examples=['What survives is the residue of an administration, not a '
              'sample of a society.',
              'No record survives, which is not the same as nothing having '
              'occurred.',
              'The silence is informative only where a record would have '
              'been made.',
              'The exception implies the rule it departed from.'],
    task='Rewrite each inference so that it stays inside what the absence '
         'licenses.',
    items=[('There is no record of it, so it did not happen.',
            'No record survives, which supports a conclusion only if such '
            'an event would have generated one.'),
           ('The parish was full of disputes.',
            'The parish archive contains many disputes, which reflects how '
            'reliably disputes generated documents.'),
           ('Poor people are absent from the archive.',
            'The propertyless appear chiefly within documents created for '
            'other purposes and by other people.'),
           ('This prosecution shows the practice was common.',
            'The prosecution shows the practice was unusual enough to '
            'prosecute, which is evidence about the norm rather than the '
            'frequency.'),
           ('The century was quiet.',
            'The century is thinly represented in this collection, which '
            'is a fact about the collection until a cause is '
            'established.')]),
   vocab=[('archival silence', 'the absence of records about a subject'),
          ('administration', 'the body of offices that generate records'),
          ('selection', 'the processes deciding what was kept'),
          ('consistent in direction', 'erring the same way each time'),
          ('correct against', 'to adjust a fragmentary series using a '
           'complete one'),
          ('shared population', 'the people two record systems both '
           'cover'),
          ('estate papers', 'documents generated by landholding'),
          ('exception', 'a case recorded because it departed from the '
           'norm')],
   expr=[('What survives is the residue of an administration, not a sample '
          'of a society', 'the cycle’s governing sentence'),
         ('litigation leaves a trail and contentment leaves none',
          'states the central asymmetry'),
         ('it records them as objects of administration',
          'refines a claim about silence'),
         ('a known bias is a different situation from an unknown one',
          'blocks the slide into scepticism')],
   trans=['consequently', 'which in turn', 'as a result',
          'what follows for a reader'],
  ),

  dict(
   sub='Whether the objection survives itself',
   step=5,
   read=[
    dict(heading='The argument that would make history impossible',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and note completion',
         band='acad', qtype='Questions 59-66',
         paras=[
          'A position encountered regularly in undergraduate work, and '
          'occasionally in print, maintains that we cannot ascertain '
          'what the past resembled because every source is partial, '
          'interested and configured by the purposes of whoever '
          'generated it. Each clause of that proposition is true; the '
          'conclusion extracted from them does not follow, and the '
          'reason it does not is instructive about an entire family of '
          'arguments. That family is extensive and encompasses '
          'positions about science, about measurement and about '
          'testimony, all of which share the identical structure and '
          'the identical weakness.',
          'The first difficulty is that the argument proves too much. If '
          'partiality and interest defeat a source, they defeat every '
          'source, including those establishing that sources are partial and '
          'interested. The evidence for archival distortion is itself '
          'archival: it derives from comparing record systems, from '
          'reconstructing what administrations required, from studying '
          'catalogues. An argument that disqualifies its own evidence has '
          'not reached a sceptical conclusion; it has lost track of its own '
          'structure. A reader can verify this without knowing any history: '
          'it is a property of how the argument is built rather than of the '
          'period it concerns.',
          'The customary reply maintains that the sceptic may employ sources '
          'provisionally while denying that anybody can rely upon them, and '
          'the reply collapses on inspection. A provisional use supporting a '
          'firm conclusion is not provisional. If the comparison of record '
          'systems suffices to establish that all records mislead, it '
          'suffices to establish other propositions of comparable '
          'difficulty, and the sceptic possesses no principle distinguishing '
          'the two instances. Requested to supply one, sceptics of this '
          'variety generally produce a criterion that readmits most of what '
          'they had excluded.',
          'A second difficulty concerns the standard being applied: '
          'the argument treats certainty as the threshold for '
          'knowledge and discovers, correctly, that the threshold is '
          'never attained about the past. The identical threshold is '
          'never attained about the present either: nobody possesses '
          'certainty about what occurred in the adjacent street an '
          'hour previously, and nobody concludes that the adjacent '
          'street is unknowable. A standard defeating all knowledge '
          'whatever constitutes no discovery about history.',
          'The third and most interesting difficulty is that the argument '
          'treats partiality as a single undifferentiated property. In '
          'practice, sources are partial in specific, identifiable and '
          'frequently opposite ways, and the identifiability is what renders '
          'historical work possible. A tax assessor understates and a '
          'claimant overstates; the two errors run in known directions; and '
          'where both survive for the same population the truth is '
          'constrained from both sides. Two sources that are each unreliable '
          'in opposite and known directions are jointly far more informative '
          'than one source of unknown reliability, which is a result the '
          'sceptical framing cannot express.',
          'This suggests that the sceptical argument, as ordinarily '
          'formulated, concerns not evidence at all but a demand for a '
          'variety of access that nothing could supply. What would '
          'satisfy the objection is not a superior source, since any '
          'source possesses a producer with purposes, and not '
          'additional sources, since the objection addresses the '
          'category. The position is unfalsifiable, a property it '
          'shares with other arguments of this configuration and the '
          'reason it survives contact with evidence so comfortably.',
          'None of this means the sceptic has contributed nothing. A weaker '
          'version of the same argument is correct, significant and widely '
          'resisted: that historical claims are underdetermined by the '
          'surviving evidence more frequently than historians acknowledge, '
          'that confident narratives are frequently built on sources that '
          'would support several accounts, and that the profession rewards '
          'confidence over the honest statement of uncertainty. That version '
          'is resisted precisely because it is actionable, and the strong '
          'version is welcomed because it is not.',
          'The weak version is doing real work and the strong version '
          'swallows it. Where somebody argues that nothing can be known, the '
          'specific and useful claim that this specific narrative exceeds '
          'its evidence becomes impossible to state, because it has no '
          'contrast class: if every claim is equally unsupported, saying one '
          'is poorly supported conveys nothing.',
          'That relationship between strong and weak versions merits '
          'generalising, because it recurs across many disputes. The strong '
          'form of a sceptical argument is ordinarily easier to state, more '
          'satisfying to hold and self-defeating; the weak form is harder to '
          'state, less satisfying and correct. Advocates reliably begin with '
          'the weak form in discussion and retreat to the strong form under '
          'pressure, which is the opposite of the usual direction and should '
          'be a warning.',
          'The practical test, applicable well beyond history, enquires what '
          'the argument permits. If an objection to a body of knowledge '
          'applies with equal force to the evidence advanced for the '
          'objection, it has identified no weakness in that body of '
          'knowledge; it has identified a standard nothing satisfies. Posing '
          'the question costs nothing and is scarcely ever posed of an '
          'argument the questioner finds congenial.',
          'What survives this scrutiny is a discipline possessing '
          'considerable knowledge, distributed patchily, with the patches '
          'determined by processes it can describe. That constitutes a '
          'considerably more interesting position than either certainty or '
          'despair, and it is the position practitioners actually occupy, '
          'which accounts for the sceptical argument being encountered so '
          'much more frequently outside the field than within it, and for '
          'the weariness with which practitioners greet it.'],
         items=[
          (
           'Which paragraph argues that the sceptical position cannot '
           'be satisfied by any source?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           2,
           'Not a better source and not more sources: the objection is '
           'to the kind.',
           {0: 'Paragraph 4 is about the standard of certainty.', 1: 'Paragraph 5 is about partiality in opposite '
               'directions.', 3: 'Paragraph 7 states the weaker version of the argument.'}),
          (
           'Which paragraph says the strong version swallows the weak '
           'one?',
           ['Paragraph 7', 'Paragraph 8', 'Paragraph 9', 'Paragraph 10'],
           1, 'Because a claim of poor support needs a contrast class.',
           {0: 'Paragraph 7 states the weaker version of the argument.', 2: 'Paragraph 9 generalises the strong and weak relation.', 3: 'Paragraph 10 gives a test applicable beyond history.'}),
          ('Which paragraph gives a test applicable beyond history?',
           ['Paragraph 8', 'Paragraph 9', 'Paragraph 10', 'Paragraph 11'],
           2, 'Ask whether the objection applies to its own evidence.',
           {0: 'Paragraph 8 says the strong version swallows the weak '
               'one.', 1: 'Paragraph 9 generalises the strong and weak relation.', 3: 'Paragraph 11 describes what survives the scrutiny.'}),
          (
           'The writer believes the clauses of the sceptical argument '
           'are false.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 says each clause is true and the conclusion '
           'does not follow.',
           {0: 'Yes would need falsity; paragraph 1 says each clause '
               'is true.', 2: 'Not Given is wrong because the argument is taken '
               'apart.'}),
          ('The writer believes the sceptic has contributed nothing.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 calls the weaker version correct and '
           'important.',
           {0: 'Yes would need nothing; paragraph 7 calls the weaker '
               'version important.', 2: 'Not Given is wrong because the contribution is '
               'weighed.'}),
          ('The evidence for archival distortion is itself ____________.',
           None, 'archival',
           'Paragraph 2, which is why the argument disqualifies its own '
           'evidence.'),
          ('A tax assessor understates and a claimant ____________.',
           None, 'overstates',
           'Paragraph 5, so the truth is constrained from both sides.'),
          ('Advocates begin with the weak form and retreat to the '
           '____________ form under pressure.', None, 'strong',
           'Paragraph 9, which the writer says should be a warning.')])],
   listen=[
    dict(heading='Two historians disagree about scepticism', part='Part 4',
         task='A recorded exchange · multiple choice', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Professor Mbeki-Thorsdottir works on early modern '
           'administration. Dr Villanueva-Oyelaran works on historical '
           'method.'),
          ('Villanueva-Oyelaran', 'I will state my own position at its '
           'weakest, because the strong version is the one people enjoy and '
           'it is not the one I hold. I do not say nothing can be known. I '
           'say that confident narratives are routinely built on evidence '
           'that would support three or four accounts, and that the '
           'profession rewards the confidence.'),
          ('Mbeki-Thorsdottir', 'Then we agree, and I want to say why I '
           'came prepared to disagree. Your weak version is correct and I '
           'teach it. What I meet in seminars is the strong version, '
           'usually quoting you, and the strong version is self-defeating '
           'in a way I think you would accept.'),
          ('Villanueva-Oyelaran', 'Say it and I will tell you.'),
          ('Mbeki-Thorsdottir', 'If partiality defeats a source, it defeats '
           'the sources establishing that sources are partial. Your evidence '
           'for archival distortion is archival: comparing record systems, '
           'reconstructing what offices required. The strong version eats '
           'its own footnotes.'),
          ('Villanueva-Oyelaran', 'I accept that completely and I would '
           'add the bit people miss. The strong version also destroys my '
           'claim, because if every narrative is equally unsupported then '
           'saying this one is badly supported means nothing. I need the '
           'contrast.'),
          ('Mbeki-Thorsdottir', 'That is a better statement of my '
           'objection than I managed, and it is the half my own students '
           'never reach. They arrive delighted to have found that nothing '
           'is knowable and have not noticed that the delight costs them '
           'every criticism they wanted to make.'),
          ('Villanueva-Oyelaran', 'It is my objection. I have been making '
           'it for years and being quoted as the opposite.'),
          ('Mbeki-Thorsdottir', 'Can I ask how that happened? Being '
           'quoted as the opposite of what you argued.'),
          ('Villanueva-Oyelaran', 'The strong version is quotable and the '
           'weak version takes a paragraph. I wrote one memorable sentence '
           'in 2011 and it has been doing the rounds without the three '
           'qualifications that followed it ever since, and I have stopped '
           'writing memorable sentences.'),
          ('Mbeki-Thorsdottir', 'Then where is the live disagreement '
           'between us? There must be one.'),
          ('Villanueva-Oyelaran', 'On how much of the published literature '
           'the weak version actually damages. You think it is a '
           'minority. I think it is most of the narrative work of the last '
           'forty years, and that is an empirical claim we could '
           'settle.'),
          ('Mbeki-Thorsdottir', 'How?'),
          ('Villanueva-Oyelaran', 'Take fifty monographs, identify the '
           'central claim of each, and ask whether the cited evidence '
           'excludes the two nearest rival accounts. It is about three '
           'years of work and nobody will fund it, because the result is '
           'uncomfortable whichever way it falls.')],
         items=[
          ('Villanueva-Oyelaran opens by stating',
           ['the strong version', 'his position at its weakest', 'his opponent\u2019s case', 'a new finding'],
           1, 'Because the strong version is the one people enjoy.',
           {0: 'He says the strong version is not the one he holds.', 2: 'He states his own position, not hers.', 3: 'He restates a position rather than reporting a '
               'finding.'}),
          ('Mbeki-Thorsdottir came prepared to disagree with',
           ['his weak version', 'the strong version usually quoted in his name', 'his evidence', 'his method'],
           1, 'Which she teaches the weak version against.',
           {0: 'She teaches his weak version and agrees with it.', 2: 'She does not question his evidence.', 3: 'His method is not what she came to dispute.'}),
          ('Her objection is that the strong version',
           ['lacks evidence', 'eats its own footnotes', 'is too recent', 'is unoriginal'],
           1, 'Since the evidence for archival distortion is archival.',
           {0: 'The strong version has evidence; the trouble is its '
               'own.', 2: 'Age of the argument is not her objection.', 3: 'Originality is not what she questions.'}),
          ('He adds that the strong version also destroys',
           ['the archive', 'his own claim, by removing the contrast', 'the profession', 'his evidence'],
           1,
           'Because saying one narrative is badly supported needs a '
           'contrast.',
           {0: 'The archive survives his argument intact.', 2: 'The profession is what he criticises, not what '
               'collapses.', 3: 'His evidence is archival and survives in the weak '
               'version.'}),
          ('Their live disagreement concerns',
           ['method', 'how much published work the weak version damages', 'funding', 'teaching'],
           1,
           'A minority against most of forty years of narrative work.',
           {0: 'They agree about method, which is why she came to '
               'disagree.', 2: 'Funding comes up only at the end, about the test.', 3: 'Teaching is where they agree, on the weak version.'}),
          (
           'He proposes settling it by examining fifty monographs and '
           'asking whether the evidence excludes the two nearest',
           ['sources', 'rival accounts', 'archives', 'critics'], 1,
           'About three years of work that nobody will fund.',
           {0: 'Sources are what the evidence consists of.', 2: 'Archives are where the evidence sits.', 3: 'Critics are not what the evidence must exclude.'})])],
   speak=dict(
    part='Part 3', focus='Knowing about the past',
    sounds=[('Narrative at this level needs the past forms audible, because '
             'the tense is the argument: I remembered, they described, the '
             'report recorded. Dropping the ending leaves the examiner '
             'guessing.'),
            ('Practise the three reporting shapes with their own stress: I '
             'remember it as, they say it was, and the record shows. The last '
             'word carries each one.'),
            ('The phrase as far as I can tell and the phrase as I remember it '
             'are single chunks under a second. Said slowly they sound like '
             'doubt about your own memory, which is not the same as the hedge '
             'you intended.'),
            ('Where two accounts are contrasted, the pitch separates them: '
             'high on I remember two, falling on she says one.'),
            ('Record yourself on an event remembered differently. Listen only '
             'for past endings, and count the ones that disappeared.')],
    intro=('The hardest turn in the unit. Try once to say that an '
           'objection defeats itself.'),
    qs=['Can we really know what life was like in the past?',
        'Are museums and documentaries reliable?',
        'Does it matter if historical accounts are uncertain?',
        'Should we be sceptical about all claims about the past?'],
    shape=[('answer', 'Patchily, and we can describe where the patches '
            'are.'),
           ('support', 'Every source is partial, which is true.'),
           ('follow-up', 'But the evidence that sources are partial comes '
            'from sources.'),
           ('support', 'So the strong version of the objection takes '
            'itself down with everything else.'),
           ('follow-up', 'The weaker version survives and is the useful '
            'one: some accounts claim more than their evidence '
            'carries.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Can we know what the past was really like?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some say we can never know what the past was '
                 'really like. To what extent do you agree? Write at least '
                 '250 words.'),
         model=[
          'I agree with a weak version of this claim and reject the strong '
          'one, and the distinction is not a hedge: the strong version '
          'defeats itself, while the weak version is correct, useful and '
          'widely resisted by the people it is about.',
          'The case for the claim begins from something undeniable about '
          'what archives are. Documents are produced when an institution '
          'wants one, so litigation leaves a trail and contentment leaves '
          'none, and people without property appear chiefly inside '
          'documents made by other people for other purposes. Survival then '
          'adds a second filter that has nothing to do with importance: '
          'parchment outlasts paper, continuous institutions outlast '
          'dissolved ones, and anything shelved together is lost together. '
          'What reaches a historian is the residue of an administration '
          'rather than a sample of a society.',
          'The strong conclusion drawn from this — that nothing can be '
          'known — does not survive being applied to itself. The evidence '
          'that archives distort is archival: it comes from comparing '
          'record systems and reconstructing what offices were required to '
          'produce. If partiality disqualifies a source, it disqualifies '
          'the sources establishing that sources are partial, and the '
          'argument has eaten its own footnotes. Worse for its holder, it '
          'destroys the criticism it was meant to support: if every account '
          'is equally unsupported, calling one of them poorly supported '
          'conveys nothing at all.',
          'There is a second failure, about standards. The argument treats '
          'certainty as the threshold for knowledge and finds it unmet '
          'about the past, which is true and is equally true of the next '
          'street an hour ago. A standard that defeats all knowledge '
          'whatever has not discovered something about history.',
          'What I do accept is the version the strong form swallows. '
          'Historical claims are underdetermined by surviving evidence far '
          'more often than confident narratives admit, and the distortions '
          'in the record are specific rather than general: an assessor '
          'understates where a claimant overstates, and knowing the '
          'direction of an error is what makes it possible to reason '
          'through it. So we can know a great deal about the past, in a '
          'patchy distribution, with the patches determined by processes we '
          'can describe — which is a more demanding position than either '
          'certainty or despair, and is the one the discipline actually '
          'occupies.'],
         notes=[
          'The first sentence distinguishes a strong from a weak version '
          'and says why that is not a hedge. Structure 9 needs the '
          'objection stated at full strength, and here the objection is '
          'given two paragraphs before it is answered.',
          'Paragraph 3 performs the reflexive move the unit teaches: the '
          'argument applied to its own evidence. The second half of that '
          'paragraph is the part that lifts it — the strong version also '
          'destroys the criticism it was meant to support.',
          'The final paragraph keeps the useful half of the opponent’s '
          'case and names the direction of specific errors. "Knowing the '
          'direction of an error is what makes it possible to reason '
          'through it" is the sentence that converts a rebuttal into a '
          'method.'],
         model65=[
                  'Some say we can never know what the past was really '
                  'like. In my view this confuses two claims: that our '
                  'knowledge is incomplete, and that it is unreliable.',
                  'Incompleteness is indisputable. The record survives '
                  'by accident and favours the literate, the wealthy '
                  'and the recent. Most people who have lived left '
                  'nothing at all, so any account of ordinary life is '
                  'built from a skewed sample.',
                  'However, incompleteness is not ignorance. Independent '
                  'sources can be checked against each other, and some '
                  'conclusions are now very secure: when a city was '
                  'abandoned, what people ate, how long they lived. '
                  'Archaeology and genetics have settled questions '
                  'that documents alone could not.',
                  'I think the sensible position is that we know some '
                  'things about the past with confidence and many '
                  'things not at all, and that the useful work is '
                  'distinguishing the two. Saying we can never know '
                  'collapses that distinction and makes careful '
                  'history indistinguishable from fabrication.',
                  ],
         gap65=[
                'It separates incompleteness from unreliability and '
                'keeps them apart, which is what makes the conclusion '
                'possible.',
                'It names the specific claims that cross-checking has '
                'made secure, so the second paragraph is evidence '
                'rather than optimism.',
                'It says what the sceptical position costs, which is '
                'the reason for rejecting it.',
                ],
         criterion=[('Distinguishing a strong from a weak version',
                     'Task Response'),
                    ('Applying the objection to its own evidence',
                     'Task Response'),
                    ('Keeping the useful half of the opposing case',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Self-undermining arguments',
    explain=('Showing that an argument defeats itself requires stating '
             'what it would have to say about its own evidence. These '
             'patterns make that move without sounding like a trick.'),
    examples=['An argument that no source can be trusted rests on '
              'sources.',
              'Applied to its own evidence, the objection removes it.',
              'The standard defeats all knowledge whatever, which is not a '
              'discovery about history.',
              'If every account is equally unsupported, the criticism has '
              'no contrast class.'],
    task='Rewrite each objection so that it is turned on its own '
         'evidence.',
    items=[('All sources are biased.',
            'The claim that all sources are biased is established from '
            'sources, and so cannot be stated without exempting some.'),
           ('Nothing can be proved about the past.',
            'The standard being applied is certainty, which is met no '
            'better about yesterday than about the sixteenth century.'),
           ('Historians just construct narratives.',
            'The evidence that narratives are constructed is itself a '
            'narrative built from archival work.'),
           ('That account is unsupported.',
            'That claim requires a contrast class, which the strong '
            'sceptical position removes.'),
           ('Science is just another story.',
            'The claim is offered as better supported than its rivals, '
            'which is the distinction it denies exists.')]),
   vocab=[('self-undermining', 'defeating itself when applied to '
           'itself'),
          ('reflexivity', 'turning a claim back on its own case'),
          ('underdetermined', 'supported by evidence that fits several '
           'accounts'),
          ('contrast class', 'the alternatives a judgement is made '
           'against'),
          ('bar a claim must clear', 'the standard a claim is held '
           'to'),
          ('congenial', 'agreeable to the person considering it'),
          ('monograph', 'a book-length study of one subject'),
          ('rival account', 'a different explanation of the same '
           'evidence')],
   expr=[('An argument that no source can be trusted rests on sources',
          'the cycle’s governing sentence'),
         ('it has eaten its own footnotes',
          'names a self-defeating position memorably'),
         ('a standard that defeats all knowledge whatever',
          'identifies an impossible threshold'),
         ('the strong version swallows the weak one',
          'explains what an overstatement costs its own side')],
   trans=['admittedly', 'nevertheless', 'in short', 'what I do accept'],
  ),
 ],
 technique=dict(
  title='Absence in a chart, and describing it without inventing it',
  body=('A chart with a hole in it is set because the hole is the finding, '
        'and almost every candidate does one of two things with it. The '
        'first is to describe the trend and mention the gap in a final '
        'clause, which treats the most interesting feature as an '
        'afterthought. The second is worse and is nearly irresistible: to '
        'explain it. A century that is thin on a chart invites a sentence '
        'about war, or collapse, or a population with other things to do, '
        'and that sentence is unsupported by anything in front of you '
        'however likely it is. Report the absence as you would report a '
        'peak: where it is, how deep, and — the question nobody asks — '
        'whether it is the same depth in every category. That last '
        'comparison is usually available, is usually revealing, and '
        'usually appears in no answer at all.'),
  panel=[('The gap goes in the Overall',
          'Trend and interruption in one sentence. Not a "however" at the '
          'end.'),
         ('Depth, in figures',
          '41 to 12 is not "a decline". It is a fall to under thirty per '
          'cent.'),
         ('Is the gap the same everywhere?',
          'Three categories, three proportional falls. Compare them; this '
          'is the paragraph nobody writes.'),
         ('Do not explain it',
          'Fire, war, bad record-keeping — none of it is on the chart, '
          'and the likeliest explanation costs the most marks.')],
  task='Describe the cycle 3 chart in 150 words with a paragraph '
       'comparing the proportional depth of the gap across the three '
       'categories.',
  qs=['Does your Overall statement contain both the trend and the gap?',
      'What are the three proportional falls, in per cent?',
      'Which category was least affected proportionally?',
      'Is that the same category that survives best overall?',
      'Did you explain the gap anywhere? Delete it.']),
 outlining=dict(
  title='Testing whether an objection undermines itself',
  body=('The premise test asks what an idea assumes. This unit adds a '
        'reflexive version of it, aimed at the strongest objection to your '
        'own thesis: take the objection and apply it to the evidence '
        'offered for the objection. A surprising number of powerful-'
        'sounding objections do not survive this. "No source can be '
        'trusted" is argued from sources. "Every measure distorts" is '
        'established by measuring. "All narratives are constructed" is a '
        'narrative. Where the move works it is decisive and takes one '
        'sentence. Where it does not, you have learned that the objection '
        'is real and must be answered on the merits, which is worth '
        'knowing before you have spent a paragraph pretending '
        'otherwise.'),
  frame=('History cannot be written from records alone and is not thereby '
         'impossible, because the distortions in the record are systematic '
         'rather than random, and a systematic distortion is something you '
         'can reason through rather than a reason to stop',
         [('The case that records are insufficient rests on a premise '
           'about what generates a document, which holds and is stronger '
           'than usually stated',
           ['litigation leaves a trail and contentment leaves none',
            'the archive records the propertyless as objects of '
            'administration']),
          ('The sceptical objection rests on a premise that undermines '
           'itself when applied to its own evidence',
           ['the claim that no source can be trusted is itself argued from '
            'sources',
            'the distortions it cites were established by the methods it '
            'rejects'])]),
  task='Write the strongest objection to your cycle 4 thesis, then apply '
       'it to its own evidence and record what happens.',
  qs=['What is the strongest objection to your thesis?',
      'What evidence is that objection based on?',
      'Does the objection, applied to that evidence, remove it?',
      'If so, is there a weaker version that survives?',
      'Does the weaker version still damage your thesis?'],
  answers=['state it in one sentence or you have not found it',
           'almost always something, which is the opening',
           'with sceptical objections, surprisingly often',
           'nearly always, and it is the one worth answering',
           'sometimes, and then you have real work to do']),
 candos=['I can read archive guidance for which event starts each closure',
         'I can describe a gap in a chart without explaining it',
         'I can say what an archive is a record of',
         'I can test whether an objection survives being applied to '
         'itself',
         'I can separate the strong form of a sceptical claim from the '
         'survivable one'],
 tip=('A hole in a chart is a finding, not an interruption to the finding. '
      'Report where it is, how deep it is, and whether it is the same depth '
      'everywhere — and then resist the explanation that has already '
      'formed in your head.'),
)
