# -*- coding: utf-8 -*-
"""Unit 57 - Language, Thought and Category. IELTS Volume 6, band 7.5."""

_OLD = dict(kind='bar',
            title='Population by category, old definition',
            sub='thousands, four census rounds, under the definition in use '
                'until 2011',
            cats=['2001', '2006', '2011', '2016'],
            series=[('Urban', [1840, 1912, 1974, 0]),
                    ('Semi-urban', [612, 640, 668, 0]),
                    ('Rural', [1448, 1401, 1356, 0])])

_NEW = dict(kind='bar',
            title='Population by category, revised definition',
            sub='thousands, the same four rounds, with 2001-2011 '
                'recalculated on the definition introduced in 2016',
            cats=['2001', '2006', '2011', '2016'],
            series=[('Urban', [2104, 2186, 2258, 2341]),
                    ('Semi-urban', [497, 520, 544, 566]),
                    ('Rural', [1299, 1247, 1196, 1148])])

UNIT = dict(
 n=57, vol=6, level='C1', band='7.5',
 theme='Language, Thought and Category',
 opener=(
   'Two charts of one population, one of which has a hole in 2016 and one '
   'of which does not, because the definition changed and the earlier '
   'years were recalculated. The Task 1 lesson is the hardest in the '
   'series: a jump in a series is sometimes a change in the world and '
   'sometimes a change in the counting, and describing it as the first '
   'when it is the second is the costliest error available on this task. '
   'From there the unit goes to the oldest problem about categories, and '
   'to the question of whether arguing about definitions is ever worth '
   'anybody’s time.'),

 cycles=[
  dict(
   sub='Official terminology',
   step=2,
   read=[
    dict(heading='Why the official term changed',
         kind='Policy notice',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('A terminology notice is read for what the change does and '
                'does not affect',
                ['A change of wording almost never changes an entitlement, '
                 'and readers reliably assume it does.',
                 'Find the sentence saying whether anybody’s position '
                 'alters. It is usually one line and it is the only line '
                 'that affects a reader directly.']),
         paras=[
          'From 1 September the term used on all departmental forms and '
          'correspondence changes from "claimant" to "applicant". The '
          'change follows a two-year review and a consultation to which '
          'four hundred and eleven people responded, of whom a clear '
          'majority preferred the new term.',
          'No entitlement, obligation or procedure changes. A person who '
          'would have qualified under the old wording qualifies under the '
          'new one, in identical circumstances and by the same test. The '
          'department states this at the outset because the commonest '
          'reaction to a terminology change is the assumption that '
          'something substantive has been altered quietly.',
          'The reasons given in the review were three. The old term was '
          'used outside the department in a pejorative sense that the '
          'department could not control. It implied an assertion of right '
          'that had not yet been assessed, which was inaccurate at the '
          'point the form was completed. And it was not used in the '
          'legislation, which says applicant throughout.',
          'The department does not claim that the change will alter how '
          'people are treated. Evidence that terminology affects the '
          'behaviour of officials is mixed, and the review found two '
          'studies suggesting a small effect and one suggesting none. The '
          'change is defended as accuracy rather than as an intervention.',
          'Existing forms remain valid until stock is exhausted, expected '
          'in the second quarter of next year. A form using the old term '
          'is not defective and will not be returned, and no one need '
          'resubmit anything. Guidance using the old term remains in force '
          'until individually revised.',
          'A review of the new term is scheduled for four years from '
          'implementation. The previous term was itself introduced in '
          '1987 as an improvement on the one before it, and this sequence '
          'is normal rather than a sign of futility.'],
         items=[
          ('The term changes from "claimant" to ____________.', None,
           'applicant',
           'Paragraph 1, following a two-year review.'),
          ('How many people responded to the consultation?',
           ['forty-one', 'four hundred and eleven', 'four thousand',
            'not stated'], 1,
           'Paragraph 1, a clear majority preferring the new term.'),
          ('What changes as a result?',
           ['entitlements', 'procedures', 'nothing substantive',
            'the assessment test'], 2,
           'Paragraph 2, stated at the outset to pre-empt the usual '
           'assumption.'),
          ('The old term was not used in the ____________.', None,
           'legislation',
           'Paragraph 3, one of three reasons given.'),
          ('The review found how many studies suggesting a small effect?',
           ['none', 'one', 'two', 'four'], 2,
           'Paragraph 4, with one suggesting no effect.'),
          ('Existing forms remain valid until ____________ is '
           'exhausted.', None, 'stock',
           'Paragraph 5: nobody need resubmit anything.')]),
    dict(heading='Guidance on describing people',
         kind='Style guidance', task='Matching features',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Prefer the term people use about themselves, where this is '
          'known and where a single term is used. Where a group is divided '
          'about its own description, say so rather than choosing, and '
          'where the division runs along lines the document is about, say '
          'what the division is.',
          'Avoid constructions that make a condition into an identity '
          'unless the people concerned prefer them. Some groups prefer '
          'person-first wording and others reject it firmly, and the '
          'guidance cannot resolve this because the disagreement is '
          'between the people the guidance is about.',
          'Do not use a term in official writing solely because it appears '
          'in legislation, where that term is now widely felt to be '
          'offensive. Quote the statutory term where legal accuracy '
          'requires it, in quotation marks, and use the current term '
          'elsewhere in the same document.',
          'Revise this guidance every three years and record what was '
          'changed and why. The record matters more than the guidance: a '
          'reader in ten years needs to know whether a term was current, '
          'contested or already avoided at the time a document was '
          'written.',
          'Do not revise historical documents to match current usage. '
          'Where an old document is republished, the original wording '
          'stands and a dated note explains the position, because a '
          'silently corrected record is worse than an awkward one and '
          'cannot be distinguished from it afterwards.'],
         items=[
          ('Where a group is divided about its own description, the writer '
           'should', ['choose the commoner term', 'say so rather than '
            'choosing', 'use both alternately', 'avoid naming the '
            'group'], 1,
           'Paragraph 1, and describe the division if relevant.'),
          ('Person-first wording is',
           ['always preferred', 'preferred by some groups and rejected by '
            'others', 'never used', 'required by statute'], 1,
           'Paragraph 2: a disagreement the guidance cannot resolve.'),
          ('A statutory term now felt to be offensive should be quoted in '
           '____________ where legal accuracy requires it.', None,
           'quotation marks',
           'Paragraph 3, with the current term used elsewhere.'),
          ('The guidance is revised every ____________ years.', None,
           'three',
           'Paragraph 4, with a record of what changed and why.')])],
   listen=[
    dict(heading='Querying a term used on a form', part='Part 1',
         task='A call to a department enquiry line', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Officer', 'Enquiries, Perpetua speaking.'),
          ('Caller', 'Hello. I have a form here that uses a word I think '
           'has been changed.'),
          ('Officer', 'Which form?'),
          ('Caller', 'It says H S two two at the bottom.'),
          ('Officer', 'HS22, thank you. And the word?'),
          ('Caller', 'It calls me a claimant. I understood that had been '
           'changed to applicant.'),
          ('Officer', 'It has, from the first of September. You have an '
           'older printing. Existing stock stays valid until it runs out, '
           'which we expect in the second quarter.'),
          ('Caller', 'So the form is still accepted?'),
          ('Officer', 'Accepted and not defective. Nobody needs to '
           'resubmit anything on those grounds and I would hate you to '
           'start again.'),
          ('Caller', 'Does the change affect what I am entitled to?'),
          ('Officer', 'Not in any respect. Same test, same circumstances, '
           'same outcome. That is the question I am asked most often and '
           'the answer is always no.'),
          ('Caller', 'Then why change it?'),
          ('Officer', 'Three reasons in the review. It is used outside the '
           'department as an insult. It implies you are asserting a right '
           'before anybody has assessed it. And the legislation says '
           'applicant, so we were out of step with our own law.'),
          ('Caller', 'The last one sounds like the real reason.'),
          ('Officer', 'It is the one that is hardest to argue with. I '
           'would not say it is the one that drove it.'),
          ('Caller', 'Will it change how I am treated?'),
          ('Officer', 'The department does not claim it will, and the '
           'evidence is thin — two studies suggesting a small effect and '
           'one suggesting none. It is defended as accuracy rather than as '
           'a fix.'),
          ('Caller', 'That is a more honest answer than I expected.'),
          ('Officer', 'It is in the notice. People do not read notices.'),
          ('Caller', 'Will it change again?'),
          ('Officer', 'There is a review in four years. The word before '
           'this one came in in 1987, so you should probably expect '
           'so.'),
          ('Caller', 'Is there a reference for this call?'),
          ('Officer', 'E as in enquiry, six zero one four.')],
         items=[
          ('Form reference: ____________', None, 'HS22',
           'Given by the caller from the bottom of the form.'),
          ('The term changed on the ____________ of September.', None,
           'first',
           'With older printings remaining valid.'),
          ('Older forms are valid until stock runs out in the second '
           '____________.', None, 'quarter',
           'And are not defective in the meantime.'),
          ('The caller’s entitlement changes',
           ['slightly', 'not in any respect', 'after four years',
            'on resubmission'], 1,
           'The question the officer says she is asked most often.'),
          ('The term before this one was introduced in ____________.',
           None, '1987',
           'Which the officer offers as a reason to expect another '
           'change.'),
          ('Reference number: E-____________', None, '6014',
           'Given at the very end of the call.')])],
   speak=dict(
    part='Part 1', focus='Words that have changed',
    intro=('Two or three sentences each. A word you have noticed changing '
           'beats a general observation.'),
    qs=['Have any words changed their meaning in your lifetime?',
        'Do official forms where you live use clear language?',
        'Does it matter what words institutions use?',
        'Do you notice when a word is replaced?'],
    shape=[('answer', 'The word our council uses for tenants changed '
            'twice in ten years.'),
           ('support', 'It went from "tenant" to "customer" and then back '
            'again.'),
           ('follow-up', 'Nothing about the tenancy changed either time, '
            'which was more revealing than the words were.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Suggesting a change to wording on an official form',
         prompt=('A word used on an official form seems to you '
                 'inaccurate. Write a letter suggesting a change. In your '
                 'letter: identify the form and the wording; explain why '
                 'it is inaccurate; propose an alternative. Write at least '
                 '150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about form HS22, revision of March, and '
          'specifically question 9, which asks the applicant to state '
          'their "normal residence".',
          'The term appears to be inaccurate for a substantial group of '
          'people rather than merely unclear. Question 9 offers a single '
          'address box and the guidance notes define normal residence as '
          'the address at which a person spends most nights in a year. '
          'People working rotational shifts offshore, students in term-time '
          'accommodation and those sharing care of a child across two '
          'households may have no address meeting that definition, and the '
          'form provides no way of saying so. I have completed it three '
          'times and given a different answer each time, all of them '
          'defensible and at most one of them correct.',
          'I would suggest two changes. The first is to add the option '
          '"no single address meets this definition", with a free-text box '
          'beneath it. The second is to amend the guidance note to say '
          'what the department does with such cases, which it presumably '
          'already knows, since the situation cannot be rare.',
          'I am not suggesting that the definition itself is wrong. It is '
          'a reasonable definition and the difficulty is that the form '
          'assumes everybody falls under it.',
          'Yours faithfully,',
          'K. Thwaite-Beckwith'],
         notes=[
          'The complaint is that a category does not fit some people, '
          'which is a far stronger objection than that a word is '
          'disliked. Three examples establish that the gap is systematic '
          'rather than personal, and the writer’s own three different '
          'answers establish that it is not confusion on their part.',
          'The proposal has two parts, one about the form and one about '
          'the guidance, and the second observes that the department must '
          'already have a practice. Pointing out that the answer exists '
          'somewhere and is not written down is a very hard thing for an '
          'institution to refuse.',
          'The last paragraph protects the definition. An objection that '
          'attacks the definition invites a defence of the definition; '
          'this one leaves the department nothing to defend and only '
          'something to add.'],
         criterion=[('Objecting that a category does not fit, not that a '
                     'word is disliked', 'Task Response'),
                    ('Examples establishing that the gap is systematic',
                     'Task Achievement'),
                    ('Leaving the reader nothing to defend',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Proposing a change of wording without attacking the writer',
    explain=('A proposal about language is read as criticism unless it is '
             'carefully framed. These patterns put the problem in the fit '
             'between word and world rather than in the drafter.'),
    examples=['The term appears to be inaccurate for a substantial group '
              'rather than merely unclear.',
              'I am not suggesting the definition itself is wrong.',
              'The difficulty is that the form assumes everybody falls '
              'under it.',
              'I have given a different answer each time, all of them '
              'defensible.'],
    task='Rewrite each complaint so that it describes a misfit rather '
         'than a fault.',
    items=[('Question 9 is badly written.',
            'Question 9 offers a single address box for a definition that '
            'some people cannot satisfy with one address.'),
           ('Whoever drafted this did not think.',
            'The form assumes that every respondent has one address '
            'meeting the definition, which is true of most and not of '
            'all.'),
           ('The definition is wrong.',
            'The definition is reasonable; the difficulty is that the form '
            'offers no way of recording a case outside it.'),
           ('I could not answer it.',
            'I have completed the question three times and given a '
            'different answer on each occasion, each defensible.'),
           ('You should fix this.',
            'I would suggest an additional option and an amendment to the '
            'guidance note setting out existing practice.')]),
   vocab=[('usage', 'how a word is actually used'),
          ('what a word suggests', 'the associations a term carries '
           'beyond its sense'),
          ('revision', 'a changed version of a document'),
          ('recommended term', 'the wording guidance prefers'),
          ('pejorative', 'carrying an insulting sense'),
          ('statutory term', 'the word used in legislation'),
          ('person-first', 'naming the person before the condition'),
          ('bearing on rights', 'affecting entitlement rather than '
           'wording')],
   expr=[('The term appears to be inaccurate rather than merely unclear',
          'raises a wording objection to a factual one'),
         ('no entitlement, obligation or procedure changes',
          'pre-empts the usual assumption about renaming'),
         ('defended as accuracy rather than as an intervention',
          'states what a change is and is not claimed to do'),
         ('the record matters more than the guidance',
          'explains why changes should be logged')],
   trans=['furthermore', 'in this connection', 'I would suggest',
          'I am not suggesting'],
  ),

  dict(
   sub='Where a category ends',
   step=4,
   read=[
    dict(heading='Four officials applying one definition',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Hieronymus, planning: The definition says a building is '
          '"substantially complete" when it is weathertight and the '
          'services are connected. I have refused one with no front door '
          'and approved one with no kitchen, and I can defend both. What I '
          'cannot do is tell you where the line is, and I have been doing '
          'this for nineteen years.',
          'B  Marguerite, benefits: Ours defines a household as people who '
          'share living arrangements. I have had a case of two sisters, one '
          'flat, separate food, separate bills, one shared fridge. I made a '
          'decision and the appeal reversed it and the appeal was also '
          'defensible. Nobody was wrong.',
          'C  Thaddeus, who drafts these definitions: I am aware of what I '
          'am doing to them. Every definition I write has a sharp edge '
          'because the law requires one, and nothing I am defining has a '
          'sharp edge. The sharpness is mine and the vagueness is the '
          'world’s, and we have agreed to pretend that mine is a '
          'discovery.',
          'D  Winifred, appeals: What strikes me is how rarely the '
          'borderline cases are the contested ones. People appeal when they '
          'are plainly inside the definition and were told otherwise, which '
          'is an error about the facts. The genuine edge cases get decided '
          'and accepted, because both sides can see there is nothing to '
          'appeal to.'],
         items=[
          ('Which official says they cannot state where the line falls?',
           ['Hieronymus', 'Marguerite', 'Thaddeus', 'Winifred'], 0,
           'After nineteen years of applying the definition.'),
          ('Which official describes a case where their decision was '
           'reversed and both were defensible?',
           ['Hieronymus', 'Marguerite', 'Thaddeus', 'Winifred'], 1,
           'Two sisters, one flat, one shared fridge.'),
          ('Which official says the sharpness belongs to the law and not '
           'to the world?',
           ['Hieronymus', 'Marguerite', 'Thaddeus', 'Winifred'], 2,
           'And calls it a shared pretence.'),
          ('Which official reports that borderline cases are rarely '
           'appealed?',
           ['Hieronymus', 'Marguerite', 'Thaddeus', 'Winifred'], 3,
           'Because both sides can see there is nothing to appeal to.'),
          ('Marguerite believes her original decision was wrong.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says nobody was wrong and both decisions were '
           'defensible.'),
          ('Thaddeus believes the definitions he writes reflect '
           'distinctions already present in the world.',
           ['Yes', 'No', 'Not Given'], 1,
           'He says the sharpness is his and the vagueness is the '
           'world’s.')])],
   listen=[
    dict(heading='A short talk: where a category ends', part='Part 2',
         task='A talk to trainee decision-makers', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'You are going to spend your careers applying sharp '
           'definitions to a world that does not have sharp edges, and I '
           'want to spend twenty minutes on what that does to you, because '
           'nobody told me and it took me about six years to work out.'),
          ('Speaker', 'Here is the structure. The law requires a yes or a '
           'no. Is this building substantially complete; are these people '
           'one household; is this person ordinarily resident. The world '
           'supplies a continuum, and you are required to return a verdict '
           'from a set of two.'),
          ('Speaker', 'The first thing that follows is that there will be '
           'cases where you could decide either way and defend either '
           'decision, and this is not a failure of your judgement. A '
           'colleague of mine spent two years believing she was bad at '
           'this. She was not. She was correctly perceiving that the cases '
           'in front of her did not determine an answer.'),
          ('Speaker', 'The second is that consistency becomes a separate '
           'obligation from correctness, and sometimes competes with it. '
           'Where the facts do not determine an answer, the only thing '
           'that distinguishes a good decision from an arbitrary one is '
           'that like cases are treated alike, and that requires you to '
           'know what you did last time.'),
          ('Speaker', 'The third is counter-intuitive and I would ask you '
           'to remember it when you are being complained at. The genuine '
           'borderline cases are almost never the ones that get appealed. '
           'People appeal when they are plainly inside a definition and '
           'were told they were outside it, which is an error about facts '
           'and is correctable. The true edge cases get decided and '
           'accepted, because everybody involved can see there is nothing '
           'to appeal to.'),
          ('Speaker', 'And the last thing, which is a matter of language '
           'rather than law. Say "this case falls outside the definition" '
           'and not "you are not a household". The first is true and '
           'reviewable. The second is a claim about people that the '
           'definition does not license you to make, and it is the '
           'sentence that produces most of the anger we receive.')],
         items=[
          ('The structure he describes is a sharp definition applied to',
           ['incomplete evidence', 'a world supplying a continuum',
            'changing circumstances', 'unclear law'], 1,
           'While the law requires a verdict from a set of two.'),
          ('His colleague who believed she was bad at the job was in fact',
           ['undertrained', 'correctly perceiving that cases did not '
            'determine an answer', 'applying the wrong test', 'too '
            'slow'], 1,
           'A conclusion she took two years to reach.'),
          ('Where facts do not determine an answer, what distinguishes a '
           'good decision from an arbitrary one?',
           ['speed', 'treating like cases alike', 'seniority',
            'documentation'], 1,
           'Which requires knowing what was decided last time.'),
          ('He says appeals come mostly from',
           ['genuine borderline cases', 'people plainly inside a '
            'definition who were told otherwise', 'legal '
            'representatives', 'repeat applicants'], 1,
           'Which is an error about facts and is correctable.')]),
    dict(heading='Two lawyers disagree about a definition', part='Part 3',
         task='A discussion between two lawyers', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Casimir', 'I want the statute to define "household" precisely '
           'and I know you will say the world does not work that way.'),
          ('Thomasina', 'I will say something more specific than that. '
           'Tell me what precision buys you.'),
          ('Casimir', 'Consistency. At the moment two decision-makers '
           'reach opposite conclusions on the same facts and both are '
           'upheld on appeal.'),
          ('Thomasina', 'That is a real cost and I accept it entirely. Now '
           'the other side. A precise definition does not remove the '
           'borderline; it moves it and makes it sharper. If you say '
           '"sharing at least three of the following five arrangements", '
           'you have created a case at exactly two and a half.'),
          ('Casimir', 'There is no two and a half.'),
          ('Thomasina', 'There is a shared fridge and separate bills and a '
           'rota for one bathroom, and somebody will argue about whether '
           'the rota counts, and the argument will be about the definition '
           'rather than about the people. That is what you have '
           'bought.'),
          ('Casimir', 'I would rather argue about a rule than about a '
           'feeling.'),
          ('Thomasina', 'That is the strongest form of your position and '
           'it is why I only half disagree. An argument about a rule is '
           'public, reviewable and the same for everybody. An argument '
           'about an impression is none of those.'),
          ('Casimir', 'So where do we actually differ?'),
          ('Thomasina', 'On whether the precision should be in the statute '
           'or in published guidance. Statute is slow to change and binds '
           'the appeal courts. Guidance can be revised when the edge case '
           'turns up, and it will turn up.'),
          ('Casimir', 'Guidance can also be ignored.'),
          ('Thomasina', 'Not where a decision-maker has to explain a '
           'departure from it. That is the middle position and I think it '
           'is right: a vague statutory test, precise published guidance, '
           'and a duty to give reasons when you depart from the '
           'guidance.'),
          ('Casimir', 'One difficulty with guidance. A decision-maker who '
           'never departs from it has effectively been bound by something '
           'Parliament did not pass.'),
          ('Thomasina', 'That is the real objection to my position and I '
           'have no answer beyond saying it is a smaller harm than a '
           'statute nobody can amend when the first unforeseen case '
           'arrives. Smaller harms are what this subject offers.'),
          ('Casimir', 'That gives me most of what I wanted and I notice it '
           'is not what I asked for.'),
          ('Thomasina', 'It rarely is. Write it up as a joint note and put '
           'the duty to give reasons first, because that is the part that '
           'does the work and it is the part a reader skims.')],
         items=[
          ('Casimir wants precision in order to secure',
           ['speed', 'consistency', 'simplicity', 'fairness to '
            'appellants'], 1,
           'Two decision-makers reaching opposite conclusions and both '
           'being upheld.'),
          ('Thomasina argues that a precise definition',
           ['removes the borderline', 'moves the borderline and makes it '
            'sharper', 'is impossible to draft', 'binds nobody'], 1,
           'Creating an argument at exactly the threshold.'),
          ('Casimir’s strongest point, in her view, is that an argument '
           'about a rule is', ['faster', 'public, reviewable and the same '
            'for everybody', 'cheaper', 'more likely to succeed'], 1,
           'Which an argument about an impression is not.'),
          ('Their actual disagreement is about whether precision belongs '
           'in', ['the statute or published guidance', 'the courts',
            'training', 'the appeal process'], 0,
           'Statute being slow to change and binding the courts.'),
          ('Her answer to the objection that guidance can be ignored is',
           ['inspection', 'a duty to explain a departure from it',
            'penalties', 'publication'], 1,
           'Which she calls the middle position.'),
          ('She advises putting which element first in the joint note?',
           ['the statutory test', 'the published guidance',
            'the duty to give reasons', 'the examples'], 2,
           'Because it does the work and is the part a reader skims.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Categories',
    intro=('Short answers, then the long turn. The last bullet decides '
           'the band.'),
    cue=('Describe a time you did not fit a category on a form.',
         ['what the form was asking', 'why you did not fit',
          'what you did',
          'and explain how you think such forms should handle cases like '
          'yours']),
    qs=['Do you often fill in official forms?',
        'Are they usually easy to complete?',
        'Now look at the card. You have one minute to make notes.',
        'Why do forms ask people to choose categories?'],
    shape=[('answer', 'A form asking for my normal address while I was '
            'working two weeks on and two weeks off.'),
           ('support', 'I had two addresses and spent exactly half the '
            'year at each.'),
           ('follow-up', 'I gave the one where my post went and it was '
            'arbitrary.'),
           ('support', 'A box saying "no single address applies" would '
            'have taken one line.'),
           ('follow-up', 'And the department must already know what to do '
            'with such cases, because I cannot be the only one.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should legal definitions be precise?',
         prompt=('Some argue that legal definitions should be as precise '
                 'as possible; others argue that precision is impossible '
                 'where reality is continuous. Discuss both views and give '
                 'your own opinion. Write at least 250 words.'),
         model=[
          'Precision in a legal definition does not remove a borderline. '
          'It moves it and makes it sharper, and almost everything worth '
          'saying about this question follows from that one observation, '
          'which neither side usually makes.',
          'The case for precision is strong and is about fairness rather '
          'than tidiness. Where a test is vague, two officials applying it '
          'to identical facts reach opposite conclusions and both are '
          'upheld, which means the outcome depends on who happened to open '
          'the file. A precise rule produces arguments about the rule, and '
          'an argument about a rule is public, reviewable and the same for '
          'everybody; an argument about an impression is none of those.',
          'The case against is not that precision is impossible but that '
          'it relocates the difficulty. Define a household as people '
          'sharing at least three of five arrangements, and the dispute '
          'that used to concern whether two sisters were a household now '
          'concerns whether a bathroom rota counts as an arrangement. The '
          'edge case has not gone; it has become a question about '
          'drafting, and the people it decides are no longer visible in '
          'it.',
          'What follows is that neither "precise" nor "vague" is the right '
          'answer, because the real question is where the precision '
          'should sit. A vague statutory test with precise published '
          'guidance obtains most of what the first camp wants without '
          'freezing an edge case into legislation that takes a decade to '
          'amend, and guidance can be revised the month a new kind of case '
          'appears, which it always does.',
          'My own position adds one requirement to that arrangement, '
          'because guidance without it is advisory and will be ignored: a '
          'decision-maker departing from the guidance must give reasons '
          'in writing. That single duty converts guidance into something '
          'reviewable, keeps the flexibility a continuous world requires, '
          'and produces a record of exactly where the hard cases are '
          'falling — which is the information anybody revising the '
          'definition will need and currently does not have.'],
         notes=[
          'The first sentence states the point the whole essay turns on '
          'and notes that neither side makes it. Structure 6 at this level '
          'is strongest when the choice is reframed before it is made.',
          'The two sisters and the bathroom rota do a great deal of work '
          'in paragraph 3. A single concrete case carried through an '
          'abstract argument is worth more than three examples '
          'gestured at.',
          'The conclusion adds one implementable duty and says what it '
          'produces. "A record of exactly where the hard cases are '
          'falling" is a second-order benefit the essay noticed on its own '
          'way through, and noticing one is a band 9 signal.'],
         criterion=[('Reframing the choice before making it',
                     'Task Response'),
                    ('One concrete case carried through the argument',
                     'Coherence and Cohesion'),
                    ('A duty that is implementable and produces a record',
                     'Task Response')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Stating a borderline without pretending it is sharp',
    explain=('Writing about cases that could go either way requires '
             'language that holds the indeterminacy without sounding '
             'evasive. These patterns do it.'),
    examples=['The case falls outside the definition, which is not a claim '
              'about the people in it.',
              'Either decision would have been defensible on these '
              'facts.',
              'A precise rule moves the borderline rather than removing '
              'it.',
              'The facts do not determine an answer, so consistency '
              'becomes the test.'],
    task='Rewrite each sentence so that the indeterminacy is stated '
         'rather than hidden.',
    items=[('They are not a household.',
            'These circumstances fall outside the statutory definition of '
            'a household.'),
           ('I made the wrong decision.',
            'The facts admitted of either decision, and the appeal reached '
            'the other one.'),
           ('A clear rule would solve this.',
            'A precise rule would relocate the dispute to the wording of '
            'the rule rather than dissolve it.'),
           ('The official was inconsistent.',
            'Where the facts do not determine an outcome, treating like '
            'cases alike is the only available discipline.'),
           ('It is obvious where the line is.',
            'Nineteen years of applying the test has not produced a '
            'statement of where the line falls.')]),
   vocab=[('borderline', 'a case that could fall either way'),
          ('edge case', 'an instance at the limit of a definition'),
          ('vagueness', 'having no sharp boundary'),
          ('sharp boundary', 'a line with nothing in between'),
          ('determinate', 'settled by the facts'),
          ('entry level', 'the point at which a category begins'),
          ('reviewable', 'open to being checked by somebody else'),
          ('without a reason', 'settled by nothing in the case '
           'itself')],
   expr=[('The target was met and the case still falls outside the '
          'definition', 'separates a rule from the thing it names'),
         ('a precise rule moves the borderline rather than removing it',
          'the cycle’s central observation'),
         ('the sharpness is mine and the vagueness is the world’s',
          'locates where a distinction comes from'),
         ('this case falls outside the definition, not "you are not a '
          'household"', 'states a decision without a claim about '
          'people')],
   trans=['whereas', 'that said', 'what follows is',
          'the case against is'],
  ),

  dict(
   sub='Counting the uncountable',
   step=5,
   read=[
    dict(heading='How a census decides who counts as what',
         kind='Data article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_OLD, figure2=_NEW,
         paras=[
          'The two charts show the same national population divided into '
          'three settlement categories across four census rounds. The '
          'first uses the definition in force until 2011. The second uses '
          'the definition introduced for the 2016 round, with the three '
          'earlier rounds recalculated on the new basis.',
          'The first chart has no bars for 2016. This is not missing data. '
          'The category boundaries used until 2011 were not applied in '
          '2016, so there is no figure to show, and a chart of the old '
          'series simply stops.',
          'The definitional change was to the urban threshold. Until 2011 a '
          'settlement counted as urban at ten thousand residents; from '
          '2016 the threshold is five thousand together with a density '
          'condition. Several hundred settlements moved category without '
          'anybody moving house.',
          'The effect on the recalculated figures is substantial and is '
          'visible immediately. Urban for 2001 rises from 1,840 thousand '
          'under the old definition to 2,104 under the new one, an '
          'increase of 264 thousand people reclassified rather than '
          'relocated. Rural falls from 1,448 to 1,299 and semi-urban from '
          '612 to 497 over the same single year.',
          'The direction of travel is the same under both definitions, '
          'which is worth stating because it is the thing readers most '
          'often doubt. Urban rises and rural falls across the whole '
          'period on either basis. What changes is the level, and the '
          'level is what gets quoted.',
          'The danger the recalculation is designed to avoid is a break in '
          'series: a jump between two adjacent years produced by a change '
          'in counting rather than in the world. Had the 2016 figure '
          'simply been appended to the old series, urban would have '
          'appeared to rise by 367 thousand in five years, of which the '
          'great majority would have been definitional.',
          'Recalculation is expensive and is not always possible. It '
          'requires the underlying records to contain whatever the new '
          'definition needs, which for a density condition means '
          'settlement-level data that older rounds may not hold. Where it '
          'cannot be done, the convention is to publish both series with '
          'an overlap year and to refuse to join them, which readers find '
          'unsatisfactory and statisticians regard as the only honest '
          'option.'],
         items=[
          ('Which paragraph explains why the first chart has no 2016 '
           'bars?', ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'The old boundaries were not applied in that round.'),
          ('Which paragraph defines a break in series?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 2,
           'A jump produced by a change in counting rather than in the '
           'world.'),
          ('Which paragraph explains when recalculation is impossible?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 4'], 2,
           'Where older records lack what the new definition needs.'),
          ('The urban threshold fell from ten thousand residents to '
           '____________ thousand plus a density condition.', None,
           'five',
           'Paragraph 3, moving several hundred settlements.'),
          ('Urban in 2001 rises from 1,840 to ____________ thousand on '
           'the new basis.', None, '2,104',
           'Paragraph 4, an increase of 264 thousand reclassified.'),
          ('Where recalculation is impossible, the convention is to '
           'publish both series and refuse to ____________ them.', None,
           'join',
           'Paragraph 7, which statisticians regard as the only honest '
           'option.')])],
   listen=[
    dict(heading='A statistician on classification', part='Part 4',
         task='A lecture on definitional change in official statistics',
         band='l4', qtype='Questions 39-44',
         figure=_OLD, figure2=_NEW,
         script=[
          ('Statistician', 'Two charts of one population. The first stops '
           'in 2011 and the second does not, and if you can say why in one '
           'sentence by the end of this hour you will be ahead of most '
           'people who write about official statistics for a living.'),
          ('Statistician', 'The first chart uses the definition in force '
           'until 2011. There are no 2016 bars on it, and that is not '
           'missing data. Nobody counted the 2016 population using the old '
           'boundaries, so there is no number to put there. The series '
           'stops because the thing it measured stopped being '
           'measured.'),
          ('Statistician', 'What changed was the urban threshold. Ten '
           'thousand residents until 2011; five thousand plus a density '
           'condition from 2016. Several hundred settlements changed '
           'category and not one person moved house.'),
          ('Statistician', 'Look at what that does to 2001, the same year '
           'on both charts. Urban: one million eight hundred and forty '
           'thousand on the old definition, two million one hundred and '
           'four thousand on the new one. Two hundred and sixty-four '
           'thousand people reclassified. Rural falls from one four four '
           'eight to one two nine nine.'),
          ('Statistician', 'Now the crucial point, and it cuts against '
           'what people expect. The direction is the same on both. Urban '
           'up, rural down, across the whole period, on either definition. '
           'The definitional change moved the level and not the trend, and '
           'the level is what gets quoted in a headline.'),
          ('Statistician', 'The thing the recalculation exists to prevent '
           'is a break in series. Append the 2016 figure to the old series '
           'and urban appears to rise by three hundred and sixty-seven '
           'thousand in five years, most of it definitional. A reader sees '
           'a jump and reaches for an explanation about migration, and '
           'there is nothing to explain.'),
          ('Statistician', 'That is the single most common error in reading '
           'official statistics and it is not confined to amateurs. I have '
           'seen it in ministerial speeches, in two national newspapers in '
           'one week, and in a doctoral thesis I was examining.'),
          ('Statistician', 'Recalculation is expensive and sometimes '
           'impossible. The old records have to contain whatever the new '
           'definition needs, and a density condition needs '
           'settlement-level data that older rounds often do not hold. '
           'When it cannot be done we publish both series with an overlap '
           'year and refuse to join them.'),
          ('Statistician', 'Readers hate that and ask us to join them '
           'anyway, and we decline, and I would ask you to understand why. '
           'A joined series is a single line that is false at one point. '
           'Two series are two lines that are each true, and the gap '
           'between them is information.')],
         items=[
          ('The first chart has no 2016 bars because',
           ['the data were lost', 'nobody counted 2016 using the old '
            'boundaries', 'the figures are confidential',
            'the round was cancelled'], 1,
           'So the series stops rather than being incomplete.'),
          ('The urban threshold changed from ten thousand residents to',
           ['two thousand', 'five thousand plus a density condition',
            'seven thousand', 'twenty thousand'], 1,
           'Moving several hundred settlements between categories.'),
          ('The reclassification added how many thousand to urban in '
           '2001?', ['149', '264', '367', '612'], 1,
           'From 1,840 thousand to 2,104 thousand on the new basis.'),
          ('The definitional change moved',
           ['the trend', 'the level and not the trend', 'both equally',
            'neither'], 1,
           'Urban rising and rural falling on either basis.'),
          ('Appending the 2016 figure to the old series would show urban '
           'rising by', ['264 thousand', '367 thousand', '149 '
            'thousand', '544 thousand'], 1,
           'Most of it definitional rather than real.'),
          ('Where recalculation is impossible, he says a joined series '
           'would be', ['two lines each true', 'a single line false at '
            'one point', 'acceptable with a footnote',
            'more useful'], 1,
           'Which is why the two series are published separately.')])],
   speak=dict(
    part='Part 3', focus='Counting and categories',
    intro=('Five or six sentences. Try once to say that a jump in a figure '
           'may be a change in counting.'),
    qs=['Why do governments count their populations?',
        'Can everything about a population be measured?',
        'What happens when definitions change?',
        'Should statistics be comparable over long periods?'],
    shape=[('answer', 'Mostly so that money and seats can be '
            'allocated.'),
           ('support', 'But a change in definition can move hundreds of '
            'thousands of people.'),
           ('follow-up', 'In one census the urban threshold dropped and '
            'nobody moved house.'),
           ('support', 'If you join the old and new series you get a jump '
            'that never happened.'),
           ('follow-up', 'Which is why statisticians publish two lines and '
            'refuse to join them, and readers find that '
            'infuriating.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Population by category under two definitions',
         prompt=('The charts below show a population by settlement '
                 'category under two different definitions. Summarise the '
                 'information by selecting and reporting the main '
                 'features, and make comparisons where relevant. Write at '
                 'least 150 words.'),
         figure=_OLD, figure2=_NEW,
         model=[
          'The two bar charts show a national population divided into '
          'three settlement categories across four census rounds, first '
          'under the definition used until 2011 and then under a revised '
          'definition applied from 2016, with the earlier rounds '
          'recalculated. Overall, both charts show the same direction of '
          'change — urban rising and rural falling throughout — while '
          'the revised definition places substantially more of the '
          'population in the urban category in every year.',
          'Under the old definition the urban figure rises from 1,840 to '
          '1,974 thousand between 2001 and 2011, while rural falls from '
          '1,448 to 1,356 and semi-urban rises slightly from 612 to 668. '
          'No figures are given for 2016 on this basis.',
          'Under the revised definition the same three categories follow '
          'the same directions but from different levels. Urban runs from '
          '2,104 in 2001 to 2,341 in 2016, rural from 1,299 down to 1,148, '
          'and semi-urban from 497 to 566.',
          'The clearest comparison is between the two accounts of a single '
          'year. For 2001 the revised definition gives 264 thousand more '
          'urban residents, 149 thousand fewer rural and 115 thousand '
          'fewer semi-urban than the original, so that the recategorisation '
          'draws from both of the other groups and principally from the '
          'rural one.'],
         notes=[
          'The Overall statement separates direction from level: the same '
          'trend on both charts, different levels. A question built on a '
          'definitional change is asking whether the candidate can hold '
          'those apart, and most answers cannot.',
          'The absence of 2016 figures on the first chart is stated '
          'plainly and not explained. Why the old series stops is not on '
          'the page, and an answer that speculates has invented '
          'content.',
          'The final paragraph reads one year across both charts and shows '
          'where the reclassified people came from. That is the highest-'
          'value comparison here and requires three subtractions the chart '
          'does not print.'],
         criterion=[('Separating direction from level',
                     'Task Achievement'),
                    ('Reporting the missing year without explaining it',
                     'Task Achievement'),
                    ('Reading one year across both charts',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing a break in series',
    explain=('A jump caused by counting is described differently from a '
             'jump caused by change. These patterns keep the two apart, '
             'which is the whole of this cycle.'),
    examples=['The figure rose because the definition changed, not '
              'because the population did.',
              'Several hundred settlements changed category without '
              'anybody moving house.',
              'The two series are not comparable and are shown '
              'separately.',
              'The revised definition moved the level and left the trend '
              'unchanged.'],
    task='Rewrite each sentence so that a definitional change is not read '
         'as a real one.',
    items=[('The urban population jumped in 2016.',
            'The urban figure for 2016 is not comparable with earlier '
            'years, which used a different threshold.'),
           ('More people moved to cities.',
            'More people fall within the urban category, of whom 264 '
            'thousand were reclassified rather than relocated.'),
           ('Rural areas lost 149 thousand people.',
            'The revised definition places 149 thousand fewer people in '
            'the rural category for the same year.'),
           ('The old data is missing for 2016.',
            'No 2016 figure exists on the old basis, because the old '
            'boundaries were not applied in that round.'),
           ('The trend changed after 2011.',
            'The trend is unchanged on both definitions; what changed '
            'between the two charts is the level.')]),
   vocab=[('break in series', 'a jump caused by a change in counting'),
          ('category change', 'moving between groups without moving '
           'anywhere'),
          ('re-derived', 'worked out again on a new basis'),
          ('comparability over time', 'whether two years can be set '
           'against each other'),
          ('cut-point', 'the value at which a category begins'),
          ('overlap year', 'a year counted on both definitions'),
          ('harmonise', 'to make two series use one basis'),
          ('town or village', 'a place treated as a single unit')],
   expr=[('Several hundred settlements changed category without anybody '
          'moving house', 'the cycle’s governing sentence'),
         ('the definitional change moved the level and not the trend',
          'separates two things a jump can mean'),
         ('a joined series is a single line that is false at one point',
          'defends publishing two series'),
         ('the gap between them is information',
          'treats a discontinuity as data')],
   trans=['while', 'by contrast', 'taken together',
          'read across both charts'],
  ),

  dict(
   sub='Why the sorites bites',
   step=5,
   read=[
    dict(heading='One grain, one more grain, and no line',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'A solitary grain of sand constitutes no heap. Adding a single '
          'grain to something that constitutes no heap cannot render it one. '
          'Therefore no quantity of sand constitutes a heap. The argument is '
          'two and a half thousand years old, every premise is plausible, '
          'the conclusion is false, and no response to it commands '
          'agreement, which constitutes an unusual combination. '
          'Philosophical difficulties ordinarily dissolve or subdivide; this '
          'one has resisted both for sufficiently long that the resistance '
          'itself constitutes evidence about what variety of difficulty it '
          'is.',
          'It is tempting to treat this as a curiosity concerning sand, and '
          'the temptation merits resistance, since the identical structure '
          'operates wherever a predicate admits of degrees and a decision '
          'demands an affirmative or a negative. Is this person disabled for '
          'the purposes of the statute; is this settlement urban; is this '
          'building substantially complete. Every administrative apparatus '
          'in existence operates on predicates of this variety. The paradox '
          'therefore constitutes no ornament of the seminar room; it is the '
          'daily working condition of several million individuals whose '
          'occupation is deciding things.',
          'The initial response denies the general truth of the second '
          'premise: a precise quantity of grains exists at which a heap '
          'commences, and nobody knows what that quantity is. This preserves '
          'the logic wholly at the cost of a claim most individuals find '
          'incredible, namely that a solitary grain constitutes the '
          'difference and the fact is simply unknowable. The position is '
          'designated epistemicism and is maintained by serious '
          'philosophers, which merits mention because it is ordinarily '
          'introduced as the view nobody could conceivably hold.',
          'Its defenders note that the incredulity is not an argument, and '
          'that the view explains something its rivals do not: why we are so '
          'reluctant to specify a number. On this view the reluctance is '
          'appropriate, because the number exists and we have no access to '
          'it, and an arbitrary stipulation would probably be mistaken.',
          'The second response holds that truth comes in degrees: '
          '"That is a heap" is true to degree 0.3 at some point and '
          '0.7 at another. The attraction is that it matches how the '
          'cases feel; the difficulty is that it reproduces the '
          'problem one level up, because the boundary between degree '
          '0.49 and degree 0.51 is as sharp as the one it replaced.',
          'The third response locates the vagueness in our language rather '
          'than in the world. No fact about heaps exists because "heap" does '
          'not isolate a determinate class; what exists is a term we employ '
          'loosely and successfully, and the argument exploits a precision '
          'the term never possessed. On this reading the second premise is '
          'not false but ill-formed: it poses a question about a boundary in '
          'an instance where the term supplies no boundary to interrogate.',
          'This third view is probably the majority position among '
          'philosophers and carries a cost readily overlooked. If vagueness '
          'is linguistic, then a sufficiently careful stipulation would '
          'dissolve the difficulty, and stipulations notoriously do not. '
          'Define urban as five thousand residents with a density condition, '
          'and an argument about what constitutes a resident has been '
          'generated. Each successive stipulation is narrower than its '
          'predecessor and each generates a fresh question, and no evidence '
          'from any field suggests that the sequence terminates.',
          'That last observation is the one with practical '
          'consequences and it generalises beyond this debate: a '
          'precise definition does not remove a borderline; it '
          'relocates one. The relocation is occasionally worth doing \u2014 '
          'an argument about a stated rule is public and reviewable '
          'where an argument about an impression is neither \u2014 and it '
          'should be understood as a relocation rather than a '
          'solution.',
          'The administrative version of the problem has a feature the '
          'philosophical version lacks, which is that somebody must decide '
          'today. A philosopher may suspend judgement about the heap; an '
          'official must return a yes or a no about a household before five '
          'o’clock, and the question of what renders such a decision good '
          'rather than arbitrary is live in a way the abstract question is '
          'not.',
          'The available answer is procedural rather than substantive. Where '
          'the facts do not determine an outcome, what distinguishes a '
          'defensible decision from an arbitrary one is that like cases are '
          'treated alike, that the reasoning is recorded, and that '
          'departures from previous practice are explained. None of that '
          'renders the decision correct; it renders it reviewable, which is '
          'a distinct and achievable property.',
          'A further observation from practice is seldom noted in the '
          'theoretical literature, and merits recording: genuine '
          'borderline instances are seldom the contested ones. Appeals '
          'cluster around instances plainly inside or outside a '
          'definition and decided erroneously on the facts, while the '
          'authentic edge instances are decided and accepted, '
          'apparently because both parties perceive that nothing '
          'exists to appeal to. Several appeal bodies report the '
          'identical pattern independently, and none appears to have '
          'anticipated it.',
          'That is not a solution to the paradox and it is a useful '
          'corrective to a common assumption. The vagueness of our '
          'categories generates far less dispute in practice than its '
          'theoretical severity would predict, and the reason appears to '
          'be that people recognise an undetermined case when they are in '
          'one, and adjust their expectations accordingly.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['The argument', 'A hidden sharp boundary nobody can locate',
            'Degrees of truth', 'Vagueness in language'], 1,
           'A precise number of grains that is unknowable.'),
          ('Choose the best heading for paragraph 5.',
           ['A hidden boundary', 'Degrees of truth',
            'Vagueness in language', 'The administrative version'], 1,
           'True to degree 0.3 at one point and 0.7 at another.'),
          ('Choose the best heading for paragraph 10.',
           ['The administrative version',
            'A procedural answer', 'Borderline cases in practice',
            'Degrees of truth'], 1,
           'Like cases alike, reasoning recorded, departures '
           'explained.'),
          ('The writer believes the conclusion of the sorites argument is '
           'true.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 calls the conclusion false.'),
          ('The writer believes vagueness generates as much dispute in '
           'practice as in theory.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says it generates far less.'),
          ('The objection to degrees of truth is that it reproduces the '
           'problem one level ____________.', None, 'up',
           'Paragraph 5: the boundary between 0.49 and 0.51.'),
          ('A precise definition does not remove a borderline; it '
           '____________ one.', None, 'relocates',
           'Paragraph 8, which the writer says generalises.'),
          ('A procedural answer makes a decision ____________ rather than '
           'correct.', None, 'reviewable',
           'Paragraph 10, which calls that an achievable property.')])],
   listen=[
    dict(heading='A lecture on vagueness', part='Part 4',
         task='A lecture on borderline cases', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'One grain is not a heap. Adding one grain to a '
           'non-heap cannot make a heap. Therefore nothing is a heap. Two '
           'and a half thousand years old, every premise plausible, '
           'conclusion obviously false, and there is still no agreed '
           'solution. That combination is rare enough to be worth an '
           'hour.'),
          ('Lecturer', 'And it is not about sand. The same structure runs '
           'wherever a predicate comes in degrees and a decision needs a '
           'yes or a no. Is this person disabled under the statute. Is '
           'this settlement urban. Is this building substantially '
           'complete. Every administrative system on earth runs on '
           'predicates like these.'),
          ('Lecturer', 'Response one: there is a precise number and nobody '
           'knows it. One grain genuinely makes the difference and the '
           'fact is simply beyond our reach. People find that incredible, '
           'and incredulity is not an argument, and the view does explain '
           'something: why we are so reluctant to name a number.'),
          ('Lecturer', 'Response two: truth comes in degrees. "That is a '
           'heap" is true to degree nought point three here and nought '
           'point seven there. It matches how the cases feel, and it '
           'reproduces the problem one floor up, because the line between '
           'nought point four nine and nought point five one is exactly as '
           'sharp as the line you were trying to avoid.'),
          ('Lecturer', 'Response three, and this is probably the majority '
           'view: the vagueness is in our language, not in the world. '
           '"Heap" was never a precise word and the argument exploits a '
           'precision it never had.'),
          ('Lecturer', 'And here is the cost of that view, which is easy '
           'to miss. If the vagueness is linguistic, a careful enough '
           'stipulation should dissolve it. Stipulations do not dissolve '
           'it. Define urban as five thousand residents plus a density '
           'condition and you have started an argument about what counts '
           'as a resident.'),
          ('Lecturer', 'Which gives the practical lesson and it '
           'generalises well beyond philosophy: a precise definition does '
           'not remove a borderline, it relocates one. Sometimes worth '
           'doing, because an argument about a stated rule is public and '
           'reviewable where an argument about an impression is neither. '
           'But a relocation, not a solution.'),
          ('Lecturer', 'The administrative version has one feature the '
           'philosophical one lacks: somebody has to decide today. I can '
           'suspend judgement about the heap. An official cannot suspend '
           'judgement about a household before five o’clock, and what '
           'makes that decision good rather than arbitrary is a live '
           'question.'),
          ('Lecturer', 'The answer is procedural. Treat like cases alike, '
           'record the reasoning, explain departures from previous '
           'practice. That does not make the decision correct. It makes it '
           'reviewable, which is a different property and is the one you '
           'can actually have.')],
         items=[
          ('The lecturer calls the combination rare because the premises '
           'are plausible and the conclusion is',
           ['unproven', 'obviously false', 'controversial',
            'ancient'], 1,
           'With no agreed solution after two and a half thousand '
           'years.'),
          ('The structure applies wherever a predicate comes in degrees '
           'and a decision requires',
           ['evidence', 'a yes or a no', 'expertise', 'consensus'], 1,
           'Which covers every administrative system on earth.'),
          ('The first response holds that',
           ['there is no fact', 'a precise number exists and is '
            'unknowable', 'truth has degrees', 'language is vague'], 1,
           'And explains our reluctance to name a number.'),
          ('The objection to degrees of truth is that it',
           ['is unmeasurable', 'reproduces the problem one floor up',
            'is unpopular', 'conflicts with logic'], 1,
           'The line between 0.49 and 0.51 being equally sharp.'),
          ('The cost of the majority view is that stipulations',
           ['are illegal', 'do not dissolve the vagueness',
            'are expensive', 'change too often'], 1,
           'Defining urban starts an argument about residents.'),
          ('The procedural answer makes a decision',
           ['correct', 'reviewable', 'faster', 'popular'], 1,
           'Which he calls the property you can actually have.')])],
   speak=dict(
    part='Part 3', focus='Lines and cases',
    intro=('Five or six sentences. Try once to say that a sharper rule '
           'does not remove the hard case.'),
    qs=['Should rules have exact limits?',
        'What should an official do when a case falls on the line?',
        'Is it fairer to have a rule or to use judgement?',
        'Do people accept decisions they disagree with?'],
    shape=[('answer', 'Exact limits help, and not for the reason people '
            'expect.'),
           ('support', 'A sharper rule does not remove the hard case; it '
            'moves it.'),
           ('follow-up', 'Say "three of five arrangements" and somebody '
            'argues about the third.'),
           ('support', 'But an argument about a written rule is public '
            'and the same for everybody.'),
           ('follow-up', 'Whereas an argument about an impression is '
            'neither, which is the real gain.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='When the dispute is about a word',
         prompt=('Should the law set precise thresholds where reality is '
                 'continuous? Brainstorm ten, run the six tests, and for '
                 'each survivor ask whether the disagreement is about the '
                 'world or about a word. Twelve minutes.'),
         plan=('Precise thresholds should be set in published guidance '
               'rather than in statute, because precision relocates a '
               'borderline instead of removing it and the gain is that an '
               'argument about a stated rule is reviewable, which is a '
               'procedural benefit rather than a substantive one',
               [('The case for precision rests on a premise about what '
                 'precision achieves, which is false as usually stated and '
                 'true in a narrower form',
                 ['a precise rule does not dissolve the edge case; it '
                  'moves the argument to the wording',
                  'an argument about a stated rule is public and the same '
                  'for everybody']),
                ('The case against rests on a premise that vagueness in '
                 'the world requires vagueness in the rule, which does not '
                 'follow',
                 ['officials must return a yes or a no whatever the world '
                  'is like',
                  'what makes such a decision defensible is procedural '
                  'rather than substantive'])]),
         notes=[
          'The test this unit adds is to ask, of each surviving idea, '
          'whether the disagreement is about the world or about a word. '
          'Disputes about words are not thereby empty, and they are '
          'settled differently: by stipulation and its consequences, not '
          'by evidence.',
          'Both premises here fail in their usual form and survive in a '
          'narrower one, which is the most common and most useful outcome '
          'of the premise test. The narrowing of the first premise is what '
          'produces the thesis.',
          'Notice that the thesis is about where precision should sit '
          'rather than whether there should be any. Relocating a question '
          'from whether to where is available far more often than '
          'candidates notice, and usually produces a more defensible '
          'position.'],
         criterion=[('Asking whether the dispute is about a word or the '
                     'world', 'Task Response'),
                    ('Both premises narrowed rather than discarded',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this in cycle 5.',
         lines=12)],
   gram=dict(
    point='Degrees, boundaries and hedged assertion',
    explain=('Writing about things that come in degrees needs language '
             'that does not accidentally assert a sharp line. These '
             'patterns hedge precisely rather than vaguely.'),
    examples=['The predicate admits of degrees and the decision does '
              'not.',
              'There is no point at which one grain makes the '
              'difference.',
              'A precise definition relocates a borderline rather than '
              'removing it.',
              'The case is undetermined rather than difficult.'],
    task='Rewrite each sentence so that it does not assert a sharp '
         'boundary.',
    items=[('A heap starts at ten thousand grains.',
            'No number of grains has been identified at which a heap '
            'begins, and the predicate may admit of none.'),
           ('This case is difficult.',
            'The facts of this case do not determine an outcome, which is '
            'different from their being hard to establish.'),
           ('The rule solves the problem.',
            'The rule moves the argument from the circumstances to the '
            'wording, which is a gain of a particular kind.'),
           ('Either it is urban or it is not.',
            'The decision must be binary; the settlement pattern it '
            'describes is continuous.'),
           ('The official got it wrong.',
            'The official reached one of two defensible outcomes, and the '
            'appeal reached the other.')]),
   vocab=[('sorites', 'the paradox of the heap'),
          ('heap', 'the classic example of a vague predicate'),
          ('degrees of truth', 'the view that truth comes in '
           'gradations'),
          ('threshold case', 'an instance sitting at a defined limit'),
          ('predicate', 'what is asserted of a subject'),
          ('fixing a meaning', 'settling a term by decision rather than '
           'discovery'),
          ('undetermined', 'not settled by the facts available'),
          ('relocate', 'to move a difficulty rather than remove it')],
   expr=[('A precise definition relocates a borderline rather than '
          'removing it', 'the cycle’s governing sentence'),
         ('incredulity is not an argument',
          'refuses a reaction as a refutation'),
         ('it reproduces the problem one level up',
          'identifies a failed escape'),
         ('reviewable, which is a different and achievable property',
          'substitutes an attainable goal for an unattainable one')],
   trans=['consequently', 'which in turn', 'as a result',
          'the cost of that view'],
  ),

  dict(
   sub='Whether the answer matters',
   step=5,
   read=[
    dict(heading='Three responses to vagueness and what each costs',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'A familiar complaint about philosophical disputes alleges that '
          'they are merely verbal: the parties concur about everything in '
          'the world and diverge about how to employ a term, and the dispute '
          'could be dissolved by stipulating a meaning and proceeding. The '
          'complaint is occasionally correct, and the interesting question '
          'concerns how to establish when it is. Treating the complaint as '
          'generally true constitutes itself a substantive position about '
          'numerous disputes, adopted without examining any of them.',
          'The clearest test enquires whether anything turns on the '
          'answer. If two parties concur on every fact about a '
          'settlement, and diverge solely on whether to designate it '
          'urban, and nothing whatever follows from the designation, '
          'then the dispute is verbal and stipulation would terminate '
          'it. Such instances exist and are considerably less frequent '
          'than the complaint presupposes: most terms that generate '
          'protracted argument have acquired consequences, which is '
          'ordinarily why the argument commenced.',
          'What renders most definitional disputes substantive is that '
          'consequences are attached to the term. Whether a settlement '
          'constitutes an urban one determines its funding formula, its '
          'planning regime and its representation. The parties are not '
          'disputing usage; they are disputing which settlements should '
          'receive a specific treatment, employing the term as the '
          'instrument. Nothing improper is occurring: a term triggering a '
          'funding formula constitutes the natural location for a dispute '
          'about funding to settle, and attacking the formula directly is '
          'frequently unavailable.',
          'This generates a diagnostic applicable rapidly: enquire '
          'what would alter if the disputed term were replaced '
          'throughout by a neutral designation. If the argument '
          'proceeds unchanged, it never concerned the term; if it '
          'evaporates, the complaint was justified, and the test '
          'occupies a minute and is scarcely ever applied. It is '
          'additionally inexpensive enough to apply mentally while '
          'somebody is still speaking, which constitutes the test of a '
          'usable diagnostic rather than a publishable one.',
          'Applied to the settlement case, the argument continues '
          'unchanged: replace "urban" with "category B" and the parties '
          'still disagree about which places belong in it and still care '
          'for the same reasons. The word was carrying consequences and '
          'the dispute was about who should bear them.',
          'A second variety of substantive definitional dispute '
          'equally escapes the complaint, and is subtler: occasionally '
          'the selection of a term configures what is subsequently '
          'noticed. Categories direct attention: a classification '
          'distinguishing two varieties of instance will generate '
          'separate statistics for them, separate procedures, and '
          'eventually separate expertise. Once those exist, the '
          'distinction is sustained by the institutions constructed '
          'around it rather than by whatever evidence originally '
          'suggested it.',
          'The evidence for this is strongest in medicine, where the '
          'separation of conditions previously treated as one has '
          'repeatedly produced distinct research literatures and distinct '
          'treatments within a decade. Whether the distinction was '
          'discovered or created is frequently impossible to establish '
          'afterwards, because the research that would settle it was '
          'itself organised around the new categories.',
          'A third kind of dispute is genuinely verbal and matters anyway, '
          'because of what the term does to the people it is applied to. '
          'Here the parties may agree about every fact and about every '
          'consequence, and differ about a term’s associations. The '
          'complaint that this is merely verbal is correct and beside the '
          'point: the associations are real effects on real people, and '
          'calling them verbal does not make them small.',
          'Against that, the evidence that altering an official term alters '
          'how individuals are treated is mixed and thin. Reviews typically '
          'identify a marginal effect in certain settings and none whatever '
          'in others, which constitutes the pattern generated by a genuine '
          'but tenuous phenomenon and equally by publication practices in a '
          'field where null results are difficult to place. Distinguishing a '
          'tenuous genuine effect from a publication artefact demands '
          'pre-registered work of which this literature possesses very '
          'little indeed.',
          'The honest position is therefore that terminological change is '
          'defensible as accuracy and overclaimed as intervention. A '
          'department that adopts a term because its legislation employs it, '
          'or because the previous term was used as an insult, has given a '
          'sufficient reason. A department that promises the change will '
          'alter outcomes has promised something the evidence does not '
          'support. The distinction matters because the second kind of claim '
          'invites a later audit against outcomes, and the audit will find '
          'nothing, and the finding will be used against changes that were '
          'justified on the first ground all along.',
          'What follows for a reader is a habit of asking what a '
          'definitional dispute is actually about, in one of three '
          'ways. Does something follow from the label, will the '
          'category shape what is subsequently studied, or is the '
          'dispute about what  the term does to those it describes? '
          'Each is a genuine possibility and each is settled by '
          'different considerations. Running them together produces '
          'the familiar stalemate in which one party is answering a '
          'question the other is not asking.',
          'The one position that the analysis excludes is the comfortable '
          'one: that arguments about definitions are a waste of time in '
          'general. They are a waste of time where nothing turns on the '
          'answer, and establishing that nothing turns on the answer '
          'requires exactly the examination that the complaint is offered '
          'as a reason for skipping.'],
         items=[
          ('Which paragraph sets out the test of replacing the disputed '
           'word with a neutral label?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'If the argument continues unchanged, it was never about the '
           'word.'),
          ('Which paragraph describes categories directing attention?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 1,
           'Separate statistics, procedures and eventually expertise.'),
          ('Which paragraph says the merely-verbal complaint is correct '
           'and beside the point?',
           ['Paragraph 7', 'Paragraph 8', 'Paragraph 9',
            'Paragraph 10'], 1,
           'Because associations are real effects on real people.'),
          ('The writer believes most definitional disputes are merely '
           'verbal.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 says such cases are less common than the '
           'complaint assumes.'),
          ('The writer believes terminological change reliably alters how '
           'people are treated.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 9 calls the evidence mixed and thin.'),
          ('In medicine, separating conditions previously treated as one '
           'has produced distinct research ____________ within a decade.',
           None, 'literatures',
           'Paragraph 7, making the question hard to settle '
           'afterwards.'),
          ('Terminological change is described as defensible as accuracy '
           'and ____________ as intervention.', None, 'overclaimed',
           'Paragraph 10, which distinguishes sufficient from '
           'insufficient reasons.'),
          ('Establishing that nothing turns on an answer requires the '
           'examination the complaint is offered as a reason for '
           '____________.', None, 'skipping',
           'The final paragraph, which excludes the comfortable '
           'position.')])],
   listen=[
    dict(heading='Two philosophers disagree about vagueness', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Professor Adeyemi-Kowalczyk works on vagueness. Dr '
           'Beaumont-Nakamura works on legal philosophy.'),
          ('Beaumont-Nakamura', 'I will open by conceding what my side is '
           'always accused of, because the accusation is fair. We spend our '
           'time on the sorites and produce nothing an official can use at '
           'four o’clock on a Friday with a file in front of them.'),
          ('Adeyemi-Kowalczyk', 'And I will concede that my side solves '
           'that by ignoring the problem. "Treat like cases alike" is good '
           'advice and it presupposes you can tell which cases are alike, '
           'which is the thing vagueness makes hard.'),
          ('Beaumont-Nakamura', 'That is a better objection than I usually '
           'get. Can I answer it partly?'),
          ('Adeyemi-Kowalczyk', 'Please.'),
          ('Beaumont-Nakamura', 'Likeness for this purpose is comparative '
           'rather than absolute. The official does not need to know where '
           'the line is. They need to know that this case is on the same '
           'side of wherever it is as last Tuesday’s. That is a weaker '
           'requirement and it is often satisfiable.'),
          ('Adeyemi-Kowalczyk', 'That is genuinely useful and it has a '
           'limit. Two cases can each be indistinguishable from the one '
           'before it and the first and the fiftieth plainly '
           'different.'),
          ('Beaumont-Nakamura', 'Which is the sorites again, arriving in '
           'the filing cabinet.'),
          ('Adeyemi-Kowalczyk', 'It is, and I would say that is the '
           'strongest practical argument for a stipulated threshold, '
           'whatever its philosophical merits. A stipulation is wrong in '
           'some individual cases and it stops the drift.'),
          ('Beaumont-Nakamura', 'And I would add that the drift is the '
           'thing officials actually fear, not the hard case. Nobody '
           'loses sleep over one borderline file. They lose sleep over '
           'discovering that fifty small, defensible steps have carried '
           'the office somewhere nobody chose.'),
          ('Adeyemi-Kowalczyk', 'That is the practical content of the '
           'paradox and I have never heard a philosopher put it that '
           'way.'),
          ('Beaumont-Nakamura', 'I agree, and I want to be precise about '
           'what I am agreeing to. Not that the stipulation is true. That '
           'it is useful, and that its usefulness is procedural, and that '
           'anybody defending it as a discovery about the world is '
           'overclaiming.'),
          ('Adeyemi-Kowalczyk', 'Can I ask what it would cost you to '
           'write it down? Not in a judgement. In guidance.'),
          ('Beaumont-Nakamura', 'Less than I have been assuming, and I '
           'have never seen it done. Guidance saying "this threshold is '
           'a stipulation adopted for consistency and does not assert a '
           'natural boundary" would be honest and I cannot name a '
           'jurisdiction that says it.'),
          ('Adeyemi-Kowalczyk', 'Which is the sentence I have been trying '
           'to get a lawyer to say for about fifteen years.'),
          ('Beaumont-Nakamura', 'Most of us would say it. What we will not '
           'do is write it in a judgement, because a judgement that '
           'describes its own threshold as a useful fiction invites every '
           'appeal that threshold was meant to prevent.')],
         items=[
          ('Beaumont-Nakamura opens by conceding that his field',
           ['is unrigorous', 'produces nothing an official can use',
            'ignores the law', 'is too narrow'], 1,
           'With a file in front of them on a Friday.'),
          ('Adeyemi-Kowalczyk’s concession is that "treat like cases '
           'alike" presupposes',
           ['good records', 'that you can tell which cases are alike',
            'adequate training', 'a written rule'], 1,
           'Which is what vagueness makes hard.'),
          ('His partial answer is that likeness for this purpose is',
           ['absolute', 'comparative rather than absolute',
            'statistical', 'legal'], 1,
           'The official needing only to know which side of the line a '
           'case shares.'),
          ('Her limit on that answer is that cases can each be '
           'indistinguishable from the last while the first and the',
           ['tenth', 'fiftieth', 'hundredth', 'next'], 1,
           'Which is the sorites arriving in the filing cabinet.'),
          ('She calls that the strongest practical argument for',
           ['judicial discretion', 'a stipulated threshold',
            'more training', 'appeals'], 1,
           'Because a stipulation stops the drift.'),
          ('He will not write his agreement in a judgement because '
           'describing a threshold as a useful fiction would invite',
           ['criticism', 'every appeal it was meant to prevent',
            'legislation', 'delay'], 1,
           'Which is the reason he gives for keeping it unwritten.')])],
   speak=dict(
    part='Part 3', focus='Arguing about words',
    intro=('The hardest turn in the unit. Try once to say when an argument '
           'about a word is not just about a word.'),
    qs=['Are arguments about definitions a waste of time?',
        'When does the choice of a word matter?',
        'Should institutions change their terminology?',
        'Can changing a word change anything?'],
    shape=[('answer', 'Only where nothing follows from the answer, which '
            'is rarer than people think.'),
           ('support', 'There is a quick test: replace the word with '
            '"category B".'),
           ('follow-up', 'If the argument carries on unchanged, it was '
            'never about the word.'),
           ('support', 'With urban and rural it carries on, because '
            'funding follows the label.'),
           ('follow-up', 'So the parties were arguing about money and '
            'using a word as the instrument.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Are arguments about definitions a waste of time?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some say arguments about definitions are a waste '
                 'of time. To what extent do you agree? Write at least 250 '
                 'words.'),
         model=[
          'Such arguments are a waste of time where nothing follows from '
          'the answer, and establishing that nothing follows requires '
          'precisely the examination the complaint is offered as a reason '
          'for skipping. That circularity is the main thing wrong with the '
          'position, and there is a quick way of testing it in any '
          'particular case.',
          'The test is to replace the disputed word throughout with a '
          'neutral label and see what happens to the argument. If it '
          'continues unchanged, it was never about the word. Applied to a '
          'dispute over which settlements count as "urban", the argument '
          'survives the substitution intact: call them category B and the '
          'parties still disagree about which places belong, because '
          'funding formulae, planning regimes and representation all '
          'follow the label. They were arguing about who receives a '
          'particular treatment and using a word as the instrument.',
          'A second kind of definitional dispute is substantive in a less '
          'obvious way, because categories direct attention. A '
          'classification that separates two kinds of case will generate '
          'separate statistics for them, then separate procedures, then '
          'separate expertise. In medicine, splitting conditions '
          'previously treated as one has repeatedly produced distinct '
          'research literatures within a decade, and whether the '
          'distinction was discovered or created becomes impossible to '
          'establish afterwards, since the research that would settle it '
          'was organised around the new categories.',
          'Where I do agree is narrower than the complaint and worth '
          'stating. A department renaming a term is entitled to defend the '
          'change as accuracy — because the legislation uses the other '
          'word, or because the old one had become an insult — and is '
          'overclaiming if it promises the change will alter outcomes. '
          'The evidence that official terminology changes how people are '
          'treated is mixed and thin, and a reasonable department says so '
          'rather than implying otherwise.',
          'So my answer depends on which of three things a given dispute '
          'is about: whether consequences attach to the label, whether the '
          'category will shape what is later studied, or whether the '
          'quarrel concerns what a word does to the people it describes. '
          'Each is real and each is settled differently. What the analysis '
          'excludes is the comfortable general verdict, which saves time '
          'only by assuming the answer to the question it refuses to '
          'ask.'],
         notes=[
          'The first paragraph identifies a circularity in the position '
          'being examined, which is a stronger opening than disagreeing '
          'with it. The rest of the essay then supplies the examination '
          'the complaint wanted to skip.',
          'The substitution test is stated and then performed on a case, '
          'which is the difference between describing a method and '
          'demonstrating one. A reader can apply it to a dispute the essay '
          'never mentions.',
          'Paragraph 4 concedes real ground on the writer’s own side '
          '— terminological change is overclaimed — and the concession '
          'is specific about what is and is not a sufficient reason. '
          'To-what-extent answers are built out of concessions of exactly '
          'this shape.'],
         criterion=[('Identifying a circularity rather than '
                     'disagreeing', 'Task Response'),
                    ('A test stated and then performed',
                     'Task Response'),
                    ('A concession specific about what it concedes',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Verbal and substantive disputes distinguished',
    explain=('Saying that a dispute is or is not about words requires '
             'language that names what would change. These patterns make '
             'the distinction testable rather than asserted.'),
    examples=['Replace the word with a neutral label and the argument '
              'continues unchanged.',
              'Consequences attach to the label, so the dispute is not '
              'about usage.',
              'The parties agree about the facts and differ about what '
              'follows.',
              'The complaint is correct and beside the point.'],
    task='Rewrite each claim so that the test is visible.',
    items=[('This is just an argument about words.',
            'Replacing the term with a neutral label would end this '
            'argument, which is the test for a verbal dispute.'),
           ('They are really arguing about money.',
            'The argument survives substitution of the word, because '
            'funding follows the classification.'),
           ('Changing the term will help people.',
            'Evidence that official terminology alters treatment is mixed, '
            'and the change is better defended as accuracy.'),
           ('Categories do not matter.',
            'A classification that separates two kinds of case generates '
            'separate statistics, procedures and expertise for them.'),
           ('That objection is pedantic.',
            'The objection is verbal in form and concerns real effects on '
            'the people described.')]),
   vocab=[('verbal dispute', 'a disagreement only about how to use a '
           'word'),
          ('about substance', 'concerning what is the case rather than '
           'what to say'),
          ('arbitrary line', 'a boundary fixed by decision alone'),
          ('principled', 'resting on a reason rather than on '
           'convenience'),
          ('consequence', 'what follows from a classification'),
          ('neutral label', 'a name chosen to carry no associations'),
          ('finding of no effect', 'a study that detects nothing'),
          ('overclaim', 'to assert more than the evidence supports')],
   expr=[('An argument that survives the substitution was never about the '
          'word', 'the cycle’s diagnostic'),
         ('they were arguing about who receives a treatment and using a '
          'word as the instrument', 'identifies what a dispute is for'),
         ('defensible as accuracy and overclaimed as intervention',
          'splits a justification in two'),
         ('the complaint is correct and beside the point',
          'concedes a form while rejecting a conclusion')],
   trans=['admittedly', 'nevertheless', 'in short', 'where I do agree'],
  ),
 ],
 technique=dict(
  title='A break in series: a jump that is not a change',
  body=('This is the most dangerous Task 1 in the series, because the '
        'wrong answer is fluent, confident and wrong. A figure jumps '
        'between two years; the candidate describes a sharp rise; the '
        'rise never happened, because what changed was the counting. The '
        'signals are learnable and they are usually on the page: a note '
        'about a revised definition, a series that stops rather than '
        'continuing, two charts of the same thing with different levels '
        'and the same shape. When you see them, describe the two series '
        'separately, compare one year across both, and say that the '
        'difference is definitional — which the chart does tell you '
        '— without saying why the definition changed, which it does not. '
        'And watch the direction: a definitional change frequently moves '
        'the level while leaving the trend exactly as it was, and saying '
        'so is the sentence that shows you understood the question.'),
  panel=[('A stopped series is not missing data',
          'No bars for the last year means the old definition was not '
          'applied. Say that; do not speculate.'),
         ('Compare one year across both',
          'The same year on two definitions is where the size of the '
          'change lives.'),
         ('Level and trend are different',
          'The level moves; the trend usually does not. That sentence is '
          'worth a band.'),
         ('Reclassified, not relocated',
          '264 thousand people changed category without moving. Use '
          'language that says so.')],
  task='Describe the two charts in cycle 3, with a paragraph reading 2001 '
       'across both and a sentence separating level from trend.',
  qs=['Why does the first chart stop, and how did you say so?',
      'What are the three differences for 2001 between the charts?',
      'Did the trend change, or only the level?',
      'Which words did you use to avoid implying people moved?',
      'Did you explain why the definition changed? Delete it.']),
 outlining=dict(
  title='Premise testing where the dispute is about words',
  body=('Some of the hardest Task 2 prompts are disputes about '
        'definitions wearing the clothes of disputes about the world, and '
        'the premise test needs an extra question for them: is this '
        'disagreement about how things are, or about what to call them? '
        'The test is substitution. Replace the contested word throughout '
        'with a neutral label and see whether the argument survives. If it '
        'does, the dispute was never verbal and you should stop writing '
        'about language. If it evaporates, the dispute was verbal — '
        'which does not make it unimportant, because words have '
        'consequences attached to them and effects on the people they '
        'describe, but it does change what evidence could settle it. '
        'Ninety seconds, and it frequently redirects a whole essay.'),
  frame=('Precise thresholds should be set in published guidance rather '
         'than in statute, because precision relocates a borderline '
         'instead of removing it and the gain is that an argument about a '
         'stated rule is reviewable, which is a procedural benefit rather '
         'than a substantive one',
         [('The case for precision rests on a premise about what precision '
           'achieves, which is false as usually stated and true in a '
           'narrower form',
           ['a precise rule does not dissolve the edge case; it moves the '
            'argument to the wording',
            'an argument about a stated rule is public and the same for '
            'everybody']),
          ('The case against rests on a premise that vagueness in the '
           'world requires vagueness in the rule, which does not follow',
           ['officials must return a yes or a no whatever the world is '
            'like',
            'what makes such a decision defensible is procedural rather '
            'than substantive'])]),
  task='Take the cycle 4 prompt, substitute a neutral label for its key '
       'term, and record what happens to each of your ten ideas.',
  qs=['Which term is the prompt built on?',
      'What happens to the prompt when you substitute for it?',
      'How many of your ideas survive the substitution?',
      'For those that do not, is the dispute therefore unimportant?',
      'What kind of evidence would settle it now?'],
  answers=['usually one word, and it is usually in the question',
           'sometimes nothing, which tells you it was never verbal',
           'the survivors are your substantive ideas',
           'no, and saying why is worth a paragraph',
           'consequences and effects, rather than facts about the '
           'world']),
 candos=['I can read a terminology notice for what does and does not '
         'change',
         'I can describe a break in series without inventing a real '
         'change',
         'I can explain why a precise rule relocates a borderline',
         'I can test whether a dispute is about a word or about the '
         'world',
         'I can say what makes a decision reviewable rather than '
         'correct'],
 tip=('Before describing a jump between two years, ask whether the '
      'counting changed. If a chart stops, or a note mentions a revised '
      'definition, the jump may be entirely definitional, and the words '
      '"reclassified rather than relocated" are what the examiner is '
      'waiting for.'),
)
