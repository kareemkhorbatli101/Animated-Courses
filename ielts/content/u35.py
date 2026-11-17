# -*- coding: utf-8 -*-
"""Unit 35 - Heritage and Ownership. IELTS Volume 4, band 6.5."""

_M1540 = ('1540',
 [(0.06, 0.08, 0.60, 0.18, 'Abbey church', 'building'),
  (0.70, 0.08, 0.24, 0.26, 'Fish ponds', 'water'),
  (0.06, 0.32, 0.34, 0.18, 'Cloister', 'building'),
  (0.44, 0.32, 0.22, 0.18, 'Refectory', 'building'),
  (0.06, 0.58, 0.40, 0.24, 'Orchard', 'green'),
  (0.52, 0.60, 0.36, 0.16, 'Gatehouse', 'building')],
 [(0.0, 0.90, 1.0, 0.90, 'Mill Lane')])

_M1890 = ('1890',
 [(0.06, 0.08, 0.34, 0.18, 'Ruined nave', 'gone'),
  (0.42, 0.08, 0.22, 0.18, 'Parish church', 'building'),
  (0.68, 0.08, 0.26, 0.18, 'Mill', 'new'),
  (0.06, 0.34, 0.60, 0.18, 'Terraced housing', 'new'),
  (0.70, 0.34, 0.24, 0.20, 'Mill pond', 'water'),
  (0.06, 0.58, 0.40, 0.18, 'Allotments', 'green'),
  (0.56, 0.58, 0.38, 0.18, 'Station', 'new')],
 [(0.0, 0.90, 1.0, 0.90, 'Mill Lane'),
  (0.0, 0.80, 1.0, 0.80, 'Railway')])

_MNOW = ('Today',
 [(0.06, 0.08, 0.34, 0.20, 'Abbey ruins', 'building'),
  (0.44, 0.08, 0.22, 0.20, 'Parish church', 'building'),
  (0.70, 0.08, 0.24, 0.20, 'Visitor centre', 'new'),
  (0.06, 0.34, 0.60, 0.18, 'Terraced housing', 'building'),
  (0.70, 0.34, 0.24, 0.18, 'Car park', 'new'),
  (0.06, 0.58, 0.40, 0.18, 'Wetland reserve', 'water'),
  (0.56, 0.58, 0.38, 0.18, 'Cycle path', 'green')],
 [(0.0, 0.90, 1.0, 0.90, 'Mill Lane')])

_KEY = [('Standing building', 'building'), ('Ruined or lost', 'gone'),
        ('New since the previous map', 'new'), ('Water', 'water'),
        ('Open ground', 'green')]

_MAP = dict(kind='map', title='Hallowfield Abbey site in 1540, 1890 and today',
            sub='three maps of the same ground', panels=[_M1540, _M1890, _MNOW],
            key=_KEY)

UNIT = dict(
 n=35, vol=4, level='B2', band='6.5',
 theme='Heritage and Ownership',
 opener=(
   'This unit begins with a homeowner who cannot replace a window and ends '
   'with a museum that cannot decide whether an object is its own. In between '
   'it puts three maps of one site side by side, which is the hardest Task 1 '
   'visual there is, and asks what a community is really keeping when it keeps '
   'a building nobody uses.'),

 cycles=[
  dict(
   sub='Listing a building',
   step=1,
   read=[
    dict(heading='What listing means for an owner',
         kind='Official guidance', task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('Reading a grade as a level of constraint',
                ['Where official guidance sorts things into grades, bands or '
                 'classes, the grade is almost always the answer to several '
                 'questions at once.',
                 'Find the sentence that says what the grade changes. That '
                 'sentence, not the list of grades, is what the questions '
                 'test.']),
         figure=dict(kind='table', title='Grades of listing in England',
                     sub='share of listed buildings and what each grade means',
                     headers=['Grade', 'Share', 'Description'],
                     rows=[['I', '2.5%', 'Exceptional interest'],
                           ['II*', '5.8%', 'Particularly important'],
                           ['II', '91.7%', 'Special interest']],
                     widths=[0.6, 0.6, 2.4]),
         paras=[
          'A listed building is one entered on a national register because of '
          'its special architectural or historic interest. Listing is not a '
          'preservation order and it does not freeze a building: it means that '
          'consent is required before the building is altered, extended or '
          'demolished in any way that affects its character.',
          'Buildings are listed in three grades. Grade I covers buildings of '
          'exceptional interest and accounts for about one listed building in '
          'forty. Grade II* covers particularly important buildings of more '
          'than special interest. Grade II, which covers buildings of special '
          'interest, accounts for nine in every ten.',
          'The grade does not change what consent is needed. It affects how '
          'applications are assessed and which bodies must be consulted, and '
          'owners frequently misunderstand this: the duty to apply is the '
          'same at every grade, and a Grade II owner who assumes otherwise '
          'is the commonest source of unauthorised work.',
          'Listing covers the whole of a building, inside and out, and extends '
          'to any object or structure fixed to it. It also covers free-standing '
          'structures within the curtilage that pre-date July 1948, which is '
          'why a boundary wall, a privy or a coach house may be listed without '
          'ever being mentioned in the entry.'],
         items=[
          ('Which grade covers about nine in ten listed buildings?',
           ['Grade I', 'Grade II*', 'Grade II', 'All equally'], 2,
           'Paragraph 2, and the table beside the passage gives the same '
           'share as 91.7 per cent.'),
          ('Which grade covers buildings of exceptional interest?',
           ['Grade I', 'Grade II*', 'Grade II', 'None of these'], 0,
           'Paragraph 2: about one listed building in forty.'),
          ('What does the grade affect?',
           ['Whether consent is needed', 'How applications are assessed',
            'The amount of any grant', 'The age of the building'], 1,
           'Paragraph 3, which states that the duty to apply is the same at '
           'every grade.'),
          ('Listing is not a ____________ order.', None, 'preservation',
           'Paragraph 1, which adds that listing does not freeze a '
           'building.'),
          ('Free-standing structures in the curtilage are covered if they '
           'pre-date ____________.', None, '1948',
           'Paragraph 4, July 1948, which is why a wall or privy may be '
           'listed without being named.')]),
    dict(heading='Applying for consent to alter',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'Before applying, obtain pre-application advice from the '
          'conservation officer. This is free, it is not binding on the '
          'authority, and it is the single most useful step available to an '
          'owner, because it identifies at this stage the elements of the '
          'proposal that will not be acceptable.',
          'The application itself must be accompanied by a heritage statement. '
          'This document describes the significance of the building, explains '
          'how the proposed works would affect that significance, and sets out '
          'what alternatives were considered. An application without one is '
          'invalid and will not be registered.',
          'Once registered, the application is publicised for twenty-one days '
          'and notified to the relevant national body where the building is '
          'Grade I or II*. The authority then determines it, normally within '
          'eight weeks, and may grant consent subject to conditions, which is '
          'the commonest outcome by a wide margin.',
          'Work carried out without consent is a criminal offence, and the '
          'offence is one of strict liability: it is committed whether or not '
          'the owner knew consent was required. Retrospective applications are '
          'possible but are assessed on the merits of the work as built, which '
          'is a weaker position than applying beforehand.'],
         items=[
          ('Obtain ____________ advice from the conservation officer.', None,
           'pre-application',
           'Paragraph 1, which notes it is free and not binding on the '
           'authority.'),
          ('Submit the application with a ____________ statement.', None,
           'heritage',
           'Paragraph 2: without one the application is invalid and is not '
           'registered.'),
          ('The application is publicised for ____________ days.', None,
           'twenty-one',
           'Paragraph 3, with notification to the national body for Grade I '
           'and II*.'),
          ('Consent is commonly granted subject to ____________.', None,
           'conditions',
           'Paragraph 3 calls this the commonest outcome by a wide '
           'margin.')])],
   listen=[
    dict(heading='Applying for listed building consent', part='Part 1',
         task='A call to a conservation officer', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Officer', 'Conservation team, Priya Nandakumar.'),
          ('Owner', 'Hello. We have just bought a cottage and we want to '
           'replace the windows. Somebody told us we might need permission.'),
          ('Officer', 'Is the cottage listed?'),
          ('Owner', 'It is. Grade two.'),
          ('Officer', 'Then yes, you will need listed building consent for '
           'the windows. Can I take the address?'),
          ('Owner', 'It is four, Weavers Row.'),
          ('Officer', 'Weavers Row. And is that the terrace near the old '
           'mill?'),
          ('Owner', 'That is the one.'),
          ('Officer', 'Good. Now, one thing to say straight away, because it '
           'saves people a great deal of money. Grade two does not mean a '
           'lighter procedure. People hear two out of three and assume the '
           'rules are softer. The duty to apply is identical at every grade.'),
          ('Owner', 'Oh. We had rather assumed otherwise.'),
          ('Officer', 'Most people do. What differs is who gets consulted, not '
           'whether you apply. Now, what are the existing windows?'),
          ('Owner', 'Timber sashes, and three of them are rotten at the '
           'bottom.'),
          ('Officer', 'Then I would expect repair to be the starting point '
           'instead of replacement, and I should tell you that an application '
           'to put in units with sealed double glazing is very unlikely to '
           'succeed on a terrace of that date. Slim-profile secondary glazing '
           'behind the existing sash usually does.'),
          ('Owner', 'That had not occurred to us. What do we have to send '
           'you?'),
          ('Officer', 'A heritage statement, which is the part people leave '
           'out and which makes the application invalid. And before any of '
           'that, book a pre-application visit. It is free, it takes an hour, '
           'and I will tell you on the day which parts of your proposal are '
           'not going to work.')],
         items=[
          ('Address of the property: ____________ Row', None, 'Weavers',
           'Four, Weavers Row, which the officer repeats and places near the '
           'old mill.'),
          ('The cottage is listed at Grade ____________.', None, 'two',
           'The owner gives it, and the officer immediately corrects the '
           'assumption that follows.'),
          ('The duty to apply is ____________ at every grade.', None,
           'identical',
           'What differs is who gets consulted, not whether you apply.'),
          ('The officer suggests slim-profile ____________ glazing.', None,
           'secondary',
           'Behind the existing sash, in place of sealed double-glazed '
           'units.'),
          ('The document owners most often omit is the ____________ '
           'statement.', None, 'heritage',
           'Leaving it out makes the application invalid, as the officer '
           'says.')]),
    dict(heading='A short talk: what a conservation officer actually does',
         part='Part 2', task='A talk to new homeowners', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'I have fifteen minutes and I want to use them to '
           'correct the single most expensive misunderstanding about my job, '
           'which is that I exist to say no.'),
          ('Speaker', 'Last year this authority determined two hundred and '
           'forty listed building consent applications. We refused nineteen. '
           'The overwhelming majority were granted with conditions. If you '
           'take one number away from this evening, take that one, because the '
           'owners who get into trouble are almost never the ones we refused. '
           'They are the ones who never applied.'),
          ('Speaker', 'What I am actually assessing is not whether a building '
           'changes. Buildings have always changed, and most listed buildings '
           'are a record of four centuries of alteration. I am assessing '
           'whether a particular change removes something that cannot be put '
           'back. A lime-plastered wall skimmed with gypsum is gone. A badly '
           'chosen paint colour is a Saturday.'),
          ('Speaker', 'That distinction explains almost all of our decisions, '
           'and it explains the ones that surprise people. We will often allow '
           'a frankly modern extension at the back and refuse a sympathetic '
           'reproduction staircase inside, because the extension is reversible '
           'and takes nothing away, and the staircase replaces the thing the '
           'building was listed for.'),
          ('Speaker', 'Two consequences follow from that and they are worth '
           'having in writing. The first is that material matters more than '
           'appearance. Cement pointing on a soft brick wall looks tidier '
           'than lime and will quietly destroy the brick over twenty years, '
           'and we will refuse it every time while allowing a repair that '
           'looks rougher. The second is that we are far more interested in '
           'what you take out than in what you add.'),
          ('Speaker', 'Finally, the practical point. Come and see me first. '
           'Pre-application advice is free, it is not binding on the '
           'authority, and in nine cases out of ten the version of the '
           'proposal we agree in that hour is the version that gets consent. '
           'The alternative is an enforcement notice, and I would far rather '
           'spend the hour.')],
         items=[
          ('How many applications were refused last year?',
           ['Nineteen', 'Forty', 'Two hundred', 'Two hundred and forty'], 0,
           'Out of two hundred and forty determined, the rest granted with '
           'conditions.'),
          ('The speaker says the owners who get into trouble are those who',
           ['were refused', 'never applied', 'appealed', 'used the wrong '
            'materials'], 1,
           'Almost never the ones refused, which is the point of the '
           'number.'),
          ('What is she assessing?',
           ['Whether a building changes',
            'Whether a change can be put back',
            'Whether the work is well done', 'Whether the owner is local'], 1,
           'Buildings have always changed; she asks what cannot be '
           'reversed.'),
          ('She gives as an example of a surprising decision',
           ['allowing a modern extension and refusing a reproduction '
            'staircase',
            'refusing a modern extension',
            'allowing gypsum plaster', 'refusing a paint colour'], 0,
           'The extension is reversible; the staircase replaces what the '
           'building was listed for.')])],
   speak=dict(
    part='Part 1', focus='Old buildings you know',
    intro=('Two or three sentences each. Part 1 rewards a clear answer with '
           'one reason, not a lecture on architecture.'),
    qs=['Are there any old buildings in the area where you live?',
        'Do you think old buildings should be protected by law?',
        'Would you like to live in a very old house?',
        'Has any building near you changed its use?'],
    shape=[('answer', 'There is a chapel at the end of our street that is now '
            'a bakery.'),
           ('support', 'They kept the windows and the stone over the door.'),
           ('follow-up', 'So you can still tell what it was, which I like.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Writing to a conservation officer',
         prompt=('You own a listed building and want to make a change to it. '
                 'Write a letter to the conservation officer at your local '
                 'authority. In your letter: describe the change you want to '
                 'make; explain why the building needs it; ask what you must '
                 'submit with an application. Write at least 150 words.'),
         model=[
          'Dear Ms Nandakumar,',
          'I am writing about 4 Weavers Row, a Grade II listed cottage which '
          'my family bought in September, and about the windows at the front '
          'of the property.',
          'The change we would like to make is to the three ground-floor '
          'sashes. We do not wish to replace them with modern units; our '
          'preference would be to repair the existing frames and to fit '
          'slim-profile secondary glazing behind them. The reason the work is '
          'needed is that the lower rails of all three have rotted through, so '
          'that two of the windows can no longer be opened at all and the '
          'third lets in water in heavy rain. The room behind them is the one '
          'our children sleep in.',
          'I would be grateful if you could tell me what the application must '
          'contain. I understand that a heritage statement is required and '
          'that an application without one cannot be registered, and I would '
          'welcome your advice on how much detail it should go into for work '
          'of this scale.',
          'I would also be glad to arrange a pre-application visit at your '
          'convenience.',
          'Yours sincerely,',
          'H. Varga'],
         notes=[
          'The letter answers the three bullets in order and in separate '
          'movements, and each one is identifiable at a glance. An examiner '
          'checking coverage should never have to hunt.',
          'Notice what the second bullet does: it gives a reason the reader '
          'can act on — rot, water, a child’s bedroom — instead of saying '
          'the windows are in poor condition. Specifics are the difference '
          'between 6.0 and 7.0 on Task Achievement here.',
          'Proposing repair before the officer can propose it is a quiet '
          'strategic move. The writer sounds like somebody the officer can '
          'work with, which is also exactly how the real procedure rewards '
          'you.'],
         criterion=[('Three bullets answered in order and visibly',
                     'Task Achievement'),
                    ('Reasons the reader can act on', 'Task Achievement'),
                    ('Register that matches an official correspondent',
                     'Lexical Resource')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing a condition and its consequence',
    explain=('In a letter about a building, a defect is only persuasive when '
             'its consequence is attached to it. These patterns join the two '
             'without a second sentence, which keeps a 150-word letter '
             'tight.'),
    examples=['The lower rails have rotted through, so that two of the '
              'windows can no longer be opened.',
              'The frame has moved, with the result that the door no longer '
              'closes.',
              'Water enters at the sill, which has caused the plaster below '
              'to fail.',
              'The pointing has washed out, leaving the stone exposed to '
              'frost.'],
    task='Join each defect to its consequence in one sentence.',
    items=[('The roof leaks. The ceiling is stained.',
            'The roof leaks, with the result that the ceiling below is '
            'stained.'),
           ('The gutter is blocked. Water runs down the wall.',
            'The gutter is blocked, so that water runs down the wall instead '
            'of away from it.'),
           ('The sash is rotten. It cannot be opened.',
            'The sash has rotted at the rail, which means it can no longer be '
            'opened.'),
           ('The floor has sunk. The door sticks.',
            'The floor has sunk slightly, leaving the door catching on the '
            'frame.'),
           ('The render is cracked. Damp has spread inside.',
            'The render is cracked, and damp has spread inside as a '
            'result.')]),
   vocab=[('curtilage', 'the ground and structures belonging to a building'),
          ('consent', 'formal permission from an authority'),
          ('designation', 'the act of giving something official status'),
          ('fabric', 'the physical material a building is made of'),
          ('like-for-like', 'replacing something with the same material and '
           'detail'),
          ('enforcement notice', 'an order requiring unauthorised work to be '
           'put right'),
          ('retrospective', 'applied for after the work has been done'),
          ('strict liability', 'an offence committed whether or not it was '
           'intended')],
   expr=[('I am writing about', 'opens a letter by naming its subject at '
          'once'),
         ('our preference would be to', 'proposes without demanding'),
         ('I would be grateful if you could tell me',
          'asks for information in official register'),
         ('at your convenience', 'offers a meeting without fixing a time')],
   trans=['so that', 'with the result that', 'before any of that',
          'I would also'],
  ),

  dict(
   sub='What a community keeps',
   step=2,
   read=[
    dict(heading='Four residents on a building nobody uses',
         kind='Four short texts', task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  Wilhelmina: I have lived opposite that chapel for thirty-one '
          'years and I have been inside it twice. I still do not want it '
          'pulled down, and I am honest enough to find that strange. What I am '
          'defending is not a building I use. It is the fact that the street '
          'has something in it older than me.',
          'B  Oluwaseun: The campaign talks about saving it for the community, '
          'and the community has been offered it twice and has not raised the '
          'money. At some point refusing to say what you will pay is the same '
          'as saying you do not want it. I would rather have eleven flats and '
          'the truth.',
          'C  Bartholomew: My objection is to the choice we are being given. '
          'Either it stays shut and rots, or it becomes flats. Nobody has put '
          'the third option on the table, which is that the council buys it, '
          'takes the roof off the risk register and lets it to whoever wants '
          'it next, even if that is in fifteen years.',
          'D  Chiedza: I grew up going to that chapel and I would vote for the '
          'flats. The congregation is eleven people and all of us are over '
          'seventy. Keeping an empty building because it mattered to my '
          'generation is asking the next one to pay rent somewhere else so '
          'that we can be remembered.'],
         items=[
          ('Which person says they rarely used the building themselves?',
           ['Wilhelmina', 'Oluwaseun', 'Bartholomew', 'Chiedza'], 0,
           'She has been inside twice in thirty-one years and finds her own '
           'position strange.'),
          ('Which person argues that a refusal to pay reveals a preference?',
           ['Wilhelmina', 'Oluwaseun', 'Bartholomew', 'Chiedza'], 1,
           'At some point refusing to say what you will pay is the same as '
           'saying you do not want it.'),
          ('Which person objects to the way the options have been framed?',
           ['Wilhelmina', 'Oluwaseun', 'Bartholomew', 'Chiedza'], 2,
           'He wants a third option in which the council holds it until a use '
           'appears.'),
          ('Which person was a user of the building but supports '
           'redevelopment?',
           ['Wilhelmina', 'Oluwaseun', 'Bartholomew', 'Chiedza'], 3,
           'She grew up going to the chapel and would vote for the flats.'),
          (
           'Wilhelmina believes the chapel should be converted into '
           'housing.', ['Yes', 'No', 'Not Given'], 2,
           'She says only that she does not want it pulled down; '
           'conversion is never addressed.',
           {0: 'Yes would need conversion; she says only that it '
               'should not be pulled down.', 1: 'No would need her to rule conversion out, and she '
               'never raises it.'}),
          (
           'Bartholomew thinks a use for the building may take many '
           'years to appear.', ['Yes', 'No', 'Not Given'], 0,
           'He says let it to whoever wants it next, even if that is '
           'in fifteen years.',
           {1: 'No would need urgency; he allows fifteen years.', 2: 'Not Given is wrong because he gives a timescale.'})])],
   listen=[
    dict(heading='Two trustees disagree about a chapel', part='Part 3',
         task='A trustees’ meeting', band='l3',
         qtype='Questions 25-29',
         script=[
          ('Rosalind', 'The surveyor’s figure is four hundred and twelve '
           'thousand for the roof alone. I think we have to accept that we '
           'cannot do this.'),
          ('Tobias', 'We have to accept that we cannot do it this year. Those '
           'are different sentences and the second one does not require us to '
           'sell.'),
          ('Rosalind', 'We are paying nine thousand a year to insure an empty '
           'building. In fifteen years that is more than a third of the roof '
           'and we will have nothing to show for it.'),
          ('Tobias', 'That is the strongest argument you have and I want to '
           'answer it properly. The insurance is not a payment towards '
           'anything, you are right. But it buys time, and time is the only '
           'thing that has ever solved a building like this. The mill was '
           'empty for twenty-two years.'),
          ('Rosalind', 'And the chapel at Thornbeck fell down while its '
           'trustees waited. You are choosing the example that flatters you.'),
          ('Tobias', 'Thornbeck is the better example and I knew it.'),
          ('Rosalind', 'There is also a question nobody wants to ask. Who is '
           'this for? The congregation is eleven. If we spend four hundred '
           'thousand of somebody’s money on a building eleven people use, we '
           'should be able to say whose money and why.'),
          ('Tobias', 'The answer is that it is not for the eleven. It is for '
           'the street. A building like that sets what the street is, and once '
           'it is flats nobody will ever build it again.'),
          ('Rosalind', 'I agree with that and I still think we should sell, '
           'which is an uncomfortable place to be standing.'),
          ('Tobias', 'May I put one more thing on the table, because it '
           'changes the arithmetic you have been using. If we list it, we '
           'become eligible for the heritage fund, and that is a hundred and '
           'eighty thousand towards a roof of this kind. Your four hundred '
           'and twelve becomes two hundred and thirty.'),
          ('Rosalind', 'If we are awarded it. Those funds are heavily '
           'oversubscribed and we would be competing against buildings in '
           'active use, which is the criterion we fail.'),
          ('Tobias', 'That is true, and it is an argument for applying anyway.'),
          ('Tobias', 'Then let me put something concrete. Give me eighteen '
           'months and a commitment to list it. If I cannot raise the roof '
           'money in that time I will second the sale myself.'),
          ('Rosalind', 'Eighteen months and listing. I would accept that, and '
           'I would want the deadline written into the minutes, not merely '
           'understood.')],
         items=[
          ('The surveyor’s figure for the roof is',
           ['£9,000', '£112,000', '£412,000', '£400,000 a year'], 2,
           'Four hundred and twelve thousand for the roof alone.'),
          ('Which of Rosalind’s points does Tobias call her strongest?',
           ['The size of the congregation', 'The insurance cost',
            'The Thornbeck chapel', 'The surveyor’s figure'], 1,
           'Nine thousand a year with nothing to show for it, which he says '
           'he wants to answer properly.'),
          ('How does Rosalind undermine Tobias’s example of the mill?',
           ['She disputes the dates', 'She cites a building that collapsed',
            'She says it was cheaper', 'She says it was listed'], 1,
           'The chapel at Thornbeck fell down while its trustees waited.'),
          ('Tobias argues the building is for',
           ['the congregation', 'the trustees', 'the street',
            'future buyers'], 2,
           'He says a building like that sets what the street is.'),
          ('What do they agree to?',
           ['An immediate sale', 'Eighteen months and listing',
            'A public meeting', 'A new survey'], 1,
           'With the deadline written into the minutes, where an understanding would not hold.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Places that matter',
    longturn=[('The building I want to describe is a Victorian swimming baths '
               'at the end of my street, built in 1904, closed in 1998 and '
               'reopened eight years later as a library and a cafe.'),
              ('It stands on a corner where four roads meet, and it is the '
               'tallest thing for several streets, with a brick front and a '
               'glass roof that was originally there to light the water.'),
              ('What it is used for now is mostly reading and sitting. The '
               'main pool has a floor over it and the shelves are where the '
               'water was, the shallow end is a children\'s section, and the '
               'old changing cubicles along both sides are study rooms. The '
               'cafe is in the entrance hall, which was the ticket office.'),
              ('Why it matters to people there is not architecture, and I '
               'think that is important. Almost everybody over fifty in those '
               'streets learned to swim in that building, and they will tell '
               'you which cubicle they used. When it closed there was a '
               'campaign for six years, and what the campaigners argued for '
               'was never the pool, because the council had costed that and it '
               'was impossible. They argued for the building to remain in '
               'public use, and they won that. So the thing people care about '
               'turned out to be the walls and the fact that you can still go '
               'in, rather than the activity it was built for.')],
    intro=('Short answers, then the long turn. Four bullets, in order, '
           'roughly equal weight, and developed one at a time.'),
    cue=('Describe a building that matters to people where you live.',
         ['what the building is', 'where it is',
          'what it is used for now',
          'and explain why it matters to people there']),
    qs=['Is there a building that local people are proud of?',
        'Do people in your area go to public buildings often?',
        'Now look at the card. You have one minute to make notes.',
        'Should local people decide what happens to old buildings?'],
    shape=[('answer', 'It is a covered market in the middle of town.'),
           ('support', 'The iron roof is the oldest thing standing there.'),
           ('follow-up', 'Everything around it has been rebuilt twice.'),
           ('support', 'Half the stalls are empty now, to be honest.'),
           ('follow-up', 'But people still arrange to meet under the clock, '
            'which is why I think it matters more than it earns.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Who should pay to keep old buildings?',
         prompt=('Some people believe that the cost of preserving historic '
                 'buildings should be met by the public. Others argue that '
                 'owners and users should pay. Discuss both views and give '
                 'your own opinion. Write at least 250 words.'),
         model=[
          'Arguments about who should pay to keep an old building usually '
          'proceed as though the only question were fairness. I think the more '
          'useful question is what kind of good a historic building is, '
          'because the answer to that settles who can reasonably be asked.',
          'The case for public funding rests on a feature of these buildings '
          'that is easy to state and hard to dispute. The benefit a listed '
          'terrace produces is enjoyed overwhelmingly by people who do not own '
          'it: the neighbours who see it, the town whose character it sets, '
          'the visitors it draws into shops it has no share in. An owner '
          'cannot charge for any of that, which means an owner left alone will '
          'always spend less on the building than its value to everybody '
          'justifies.',
          'The case against is that public money is finite and the claims on '
          'it are not. A roof repaired at public expense is a roof paid for by '
          'people who may live nowhere near it, and the owner meanwhile '
          'enjoys a capital asset whose value the repair has increased. There '
          'is also a question of incentives: an owner who expects a grant has '
          'no reason to maintain the building before it becomes an emergency.',
          'My own view is that the two arguments are about different costs and '
          'that separating them resolves most of the dispute. Routine '
          'maintenance is properly the owner’s: it preserves an asset they '
          'own and benefit from. The additional cost imposed by listing — lime '
          'mortar instead of cement, a repaired sash instead of a new window, '
          'a conservation architect instead of a builder — is a cost the public '
          'has chosen to impose for a public benefit, and it is reasonable for '
          'the public to carry it.',
          'That division is not tidy and it would be argued over in every '
          'individual case. It is, however, arguing about the right thing, '
          'which is more than either of the original positions manages.'],
         notes=[
          'Structure 3 with a reconciling third position. The reconciliation '
          'is not splitting the difference: it divides the cost into two kinds '
          'and assigns each on its own principle.',
          'Paragraph 2 contains the essay’s best sentence — the benefit is '
          'enjoyed by people who do not own it — and everything after it is '
          'that idea applied. One clearly stated mechanism will carry a whole '
          'body paragraph.',
          'The final paragraph admits the position is untidy. Conceding a '
          'weakness you have identified yourself reads as confidence, not '
          'doubt, provided you say why the position survives it.'],
         criterion=[('A third position that divides, not one that splits',
                     'Task Response'),
                    ('One mechanism developed through a whole paragraph',
                     'Coherence and Cohesion'),
                    ('Conceding a weakness and surviving it',
                     'Task Response')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Naming who benefits and who pays',
    explain=('Essays about public funding collapse into vagueness unless the '
             'beneficiary and the payer are named in the same sentence. These '
             'patterns do that compactly.'),
    examples=['The benefit is enjoyed by people who do not own the building.',
              'A roof repaired at public expense is paid for by people who '
              'live nowhere near it.',
              'The owner cannot charge for a benefit the street receives.',
              'The cost falls on one party and the gain accrues to '
              'another.'],
    task='Rewrite each sentence so that both the payer and the beneficiary '
         'are named.',
    items=[('Preservation is expensive.',
            'Preservation is expensive for the owner and valuable to the '
            'street.'),
           ('The public should pay.',
            'The public should pay for the part of the cost that produces a '
            'public benefit.'),
           ('Grants are unfair.',
            'A grant transfers money from taxpayers to an owner whose asset '
            'the repair improves.'),
           ('Old buildings help tourism.',
            'Old buildings draw visitors whose spending reaches shops the '
            'owner has no share in.'),
           ('Owners neglect buildings.',
            'An owner who cannot recover the cost of repair has little reason '
            'to carry it out.')]),
   vocab=[('stewardship', 'looking after something on behalf of others'),
          ('dereliction', 'the state of being abandoned and decaying'),
          ('adaptive reuse', 'giving an old building a new function'),
          ('amenity', 'something that makes a place pleasant to live in'),
          ('trustee', 'a person legally responsible for property held for '
           'others'),
          ('endowment', 'a fund given to support something permanently'),
          ('capital asset', 'property held for its long-term value'),
          ('incentive', 'something that makes a course of action worth '
           'taking')],
   expr=[('Those are different sentences',
          'separates two claims an opponent has merged'),
         ('That is the strongest argument you have and I want to answer it '
          'properly', 'concedes force before replying'),
         ('You are choosing the example that flatters you',
          'challenges selective evidence'),
         ('which is an uncomfortable place to be standing',
          'admits a tension without abandoning the position')],
   trans=['at some point', 'meanwhile', 'that division',
          'more than either'],
  ),

  dict(
   sub='A site through time',
   step=3,
   read=[
    dict(heading='The abbey site in 1540, 1890 and today',
         kind='Three maps with notes',
         task='Map labelling and matching information',
         band='gt_work', qtype='Questions 30-35',
         figure=_MAP,
         paras=[
          'The three maps show the same forty acres at Hallowfield at three '
          'dates. In 1540 the site was a working monastery. The abbey church '
          'ran along the northern edge, with the cloister immediately south of '
          'it and the refectory to the east of the cloister. A chain of fish '
          'ponds occupied the north-eastern corner, an orchard the '
          'south-west, and a gatehouse stood on the southern side facing Mill '
          'Lane, which has been the southern boundary of the site at every '
          'date.',
          'By 1890 the monastic buildings had largely gone. The nave of the '
          'abbey church stood as a roofless ruin; only the eastern end '
          'survived in use, as the parish church. A woollen mill had been '
          'built in the north-east, where the fish ponds had been, and one of '
          'the ponds had been enlarged and retained to serve it. A terrace of '
          'housing had been laid out across the middle of the site, and the '
          'orchard had become allotments. A railway crossed the southern part '
          'of the site, with a station beside it.',
          'The present-day map records a third transformation, and this one is '
          'a reversal of the second. The mill has been demolished '
          'and a visitor centre built on part of its footprint, with a car '
          'park where the mill pond was. The railway and station have gone, and '
          'the line of the track is now a cycle path. The mill pond site has '
          'been re-excavated as a wetland reserve on the southern side, where '
          'the allotments were.',
          'Two features are unchanged at all three dates and are easy to miss. '
          'Mill Lane has formed the southern edge throughout. More strikingly, '
          'the eastern end of the abbey church has been in continuous use as a '
          'place of worship for more than five hundred years, through the '
          'destruction of everything around it, and it is the only structure '
          'on the site that appears on all three maps in the same role.'],
         items=[
          ('In 1540, the cloister lay immediately ____________ of the abbey '
           'church.', None, 'south',
           'Paragraph 1, with the refectory east of the cloister.'),
          ('The woollen mill of 1890 was built where the ____________ had '
           'been.', None, 'fish ponds',
           'Paragraph 2: one pond was enlarged and retained to serve it.'),
          ('By 1890 the orchard had become ____________.', None, 'allotments',
           'Paragraph 2, in the south-western part of the site.'),
          ('Today the line of the railway is a ____________.', None,
           'cycle path',
           'Paragraph 3, after the railway and station were removed.'),
          ('Which paragraph describes a change that reverses an earlier one?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'], 2,
           'Paragraph 3 calls the present-day transformation a reversal of what came before it.'),
          ('Which paragraph identifies what has not changed?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'], 3,
           'Paragraph 4: Mill Lane and the continuous use of the eastern end '
           'of the church.')])],
   listen=[
    dict(heading='An archaeologist on the site phases', part='Part 2',
         task='A guided walk around the site', band='l2',
         qtype='Questions 36-39',
         figure=_MAP,
         script=[
          ('Guide', 'Stand here with your back to the lane and you are '
           'looking north across five hundred years, which is the only reason '
           'I bring groups to this exact spot.'),
          ('Guide', 'Directly ahead, that long low wall is the south side of '
           'the abbey church. It ran the full width of what you can see. The '
           'cloister was behind me — sorry, in front of you and below the '
           'church — and the refectory was to its east, which is now under the '
           'end of the terrace.'),
          ('Guide', 'Now, the thing I want you to notice first is the ponds. '
           'Up in the north-eastern corner there was a chain of fish ponds, '
           'and they matter because they explain the mill. When the woollen '
           'mill was built on that corner in the 1830s it did not choose the '
           'spot for the view. It chose it because the water was already '
           'managed, and one of the monastic ponds was simply enlarged and '
           'kept.'),
          ('Guide', 'That is the pattern of this site and it is the pattern of '
           'most sites. Each phase reuses the infrastructure of the last one '
           'and destroys its buildings. The mill took the water and demolished '
           'the ponds; the housing took the levelled ground of the cloister '
           'and destroyed what stood on it; the railway took the flat southern '
           'strip where the orchard had been.'),
          ('Guide', 'And then it reverses, which is unusual. The mill came '
           'down in 1974. The pond site is now the wetland you can hear from '
           'here. The railway closed and the track bed is the cycle path. If '
           'you came back in 1890 and in 1540 you would find, in that corner, '
           'water, then industry, then water again.'),
          ('Guide', 'One last thing before we walk up. Everything I have '
           'described has gone, been replaced, and in two cases come back. The '
           'exception is forty feet to your right: the eastern end of the '
           'abbey church, which has been a working place of worship '
           'continuously since before any of this began. On a site like this '
           'the survival is always more interesting than the destruction.')],
         items=[
          ('The refectory now lies beneath',
           ['the visitor centre', 'the end of the terrace', 'the car park',
            'the cycle path'], 1,
           'The guide places it east of the cloister, under the end of the '
           'terrace.'),
          ('Why was the mill built in the north-eastern corner?',
           ['The ground was level', 'The water was already managed',
            'The railway was there', 'The land was cheap'], 1,
           'One of the monastic ponds was enlarged and kept, which is his '
           'point about reuse.'),
          ('What does the guide say each phase does?',
           ['Reuses the infrastructure and destroys the buildings',
            'Destroys everything', 'Preserves the water',
            'Follows the railway'], 0,
           'He gives three examples: the mill, the housing and the '
           'railway.'),
          ('What does he call the most interesting thing about the site?',
           ['The destruction', 'The reversal', 'The survival',
            'The ponds'], 2,
           'On a site like this the survival is always more interesting than '
           'the destruction.')])],
   speak=dict(
    part='Part 3', focus='Layers of a place',
    intro=('Four or five sentences. These questions reward a candidate who '
           'can describe change over time without losing the thread.'),
    qs=['Why do you think some old buildings survive and others do not?',
        'Is it a good thing when industrial sites become parks?',
        'Should towns keep a record of what used to stand where?',
        'How much should a new building have to fit in with old ones?'],
    shape=[('answer', 'Usually because somebody kept using them.'),
           ('support', 'A building in continuous use gets repaired without '
            'anybody deciding to save it.'),
           ('follow-up', 'Whereas an empty one needs a decision every few '
            'years.'),
           ('support', 'Being useful probably protects a building more than '
            'being beautiful.'),
           ('follow-up', 'Which is slightly depressing but seems to be how it '
            'works.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Three maps of one site',
         prompt=('The maps below show the site of Hallowfield Abbey in 1540, '
                 '1890 and the present day. Summarise the information by '
                 'selecting and reporting the main features, and make '
                 'comparisons where relevant. Write at least 150 words.'),
         figure=_MAP,
         model=[
          'The three maps show the same site at Hallowfield at three dates. '
          'Overall, the ground has been comprehensively rebuilt twice, first '
          'from a monastic complex into an industrial and residential '
          'district and then into a visitor and recreational site, and in the '
          'course of these changes the north-eastern corner has returned to '
          'something close to its original condition.',
          'In 1540 the site was occupied by a monastery. The abbey church ran '
          'along the northern edge with the cloister directly below it and the '
          'refectory to the east of the cloister, while a chain of fish ponds '
          'filled the north-eastern corner and an orchard the south-west. A '
          'gatehouse stood on the southern side, facing Mill Lane.',
          'By 1890 most of this had been replaced. The nave of the church '
          'survived only as a ruin, although its eastern end remained in use '
          'as the parish church, and a woollen mill had been built over the '
          'fish ponds, one of which was enlarged to serve it. Terraced housing '
          'had been laid out across the former cloister, the orchard had '
          'become allotments, and a railway and station crossed the southern '
          'part of the site.',
          'The present-day map reverses much of this. The mill has been '
          'replaced by a visitor centre and a car park, the railway by a cycle '
          'path, and the allotments by a wetland reserve. The housing '
          'remains, as do Mill Lane along the southern boundary and the '
          'eastern end of the church, which is the only building to appear on '
          'all three maps in the same use.'],
         notes=[
          'Maps are two-dimensional — space by time — so a structuring '
          'dimension has to be chosen. This answer structures by time, one '
          'paragraph per map, and runs a spatial order inside each paragraph. '
          'The alternative, structuring by zone, would work but is far harder '
          'to control with three dates.',
          'Notice that the second and third paragraphs describe change instead '
          'of listing contents: the mill is over the fish ponds, the housing '
          'across the former cloister. A later map described as a list of '
          'buildings throws away the comparison the task asks for.',
          'The Overall statement names the two transformations and the '
          'reversal. The final sentence names what did not change, which is '
          'the feature candidates most reliably omit and examiners most '
          'reliably notice.'],
         criterion=[('Structuring three maps by time, space inside',
                     'Coherence and Cohesion'),
                    ('Later maps described as change, naming what was '
                     'replaced', 'Task Achievement'),
                    ('What did not change reported as a finding',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing a site as it changes',
    explain=('Map answers need two things English does not give you by '
             'accident: a way of saying where something is, and a way of '
             'saying what it replaced. Pair them and the whole answer '
             'tightens.'),
    examples=['A mill had been built over the fish ponds.',
              'The orchard had given way to allotments.',
              'Housing had been laid out across the former cloister.',
              'The track bed of the railway is now a cycle path.'],
    task='Rewrite each pair as a single sentence describing the change.',
    items=[('There were ponds in 1890 there was a mill.',
            'By 1890 a mill had been built where the ponds were.'),
           ('There was an orchard. Now there are allotments.',
            'The orchard had been replaced by allotments.'),
           ('There was a railway. Now there is a cycle path.',
            'The railway has been removed and its track bed is now a cycle '
            'path.'),
           ('There was a mill pond. Now there is a car park.',
            'A car park now occupies the site of the former mill pond.'),
           ('Mill Lane was there in 1540 and is there now.',
            'Mill Lane has formed the southern boundary throughout the '
            'period.')]),
   vocab=[('footprint', 'the ground area a building occupies'),
          ('demolish', 'to pull a building down'),
          ('excavate', 'to dig out ground, especially for study'),
          ('phase', 'one period in a site’s development'),
          ('precinct', 'the enclosed ground around an important building'),
          ('boundary', 'the line marking the edge of a site'),
          ('track bed', 'the strip of ground a railway line ran along'),
          ('continuous use', 'use without interruption over a long period')],
   expr=[('ran along the northern edge', 'places a long structure'),
         ('had been built over', 'names what a later feature replaced'),
         ('had given way to', 'describes replacement without repeating built'),
         ('throughout the period', 'reports something that did not change')],
   trans=['by 1890', 'in the course of these changes', 'although',
          'as do'],
  ),

  dict(
   sub='Who owns an object',
   step=4,
   read=[
    dict(heading='Four claims on one collection',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 40-46',
         paras=[
          'A museum in northern Europe holds a group of nine hundred objects '
          'excavated from a single site between 1902 and 1911. Four separate '
          'claims have been made on the collection in the past two decades, '
          'and they are worth examining together, because each rests on a '
          'different principle and the four principles are not compatible '
          'with one another.',
          'The first claim is made by the state in whose territory the site '
          'now lies, and it rests on legality. The excavation was conducted '
          'under a permit issued by an imperial administration that the modern '
          'state regards as having had no authority to issue it. On this view '
          'the objects were never lawfully acquired, the museum has never held '
          'good title, and the question of what the museum has done with them '
          'since is irrelevant.',
          'The second claim is made by a descendant community, now living '
          'largely in a different country, and it rests on continuity of relationship, which is a claim about people. The objects are argued to be the property of a people wherever that people now lives, and the claim '
          'would be unaffected if the borders moved again. It is also the only '
          'one of the four claims that distinguishes among the objects: it '
          'concerns the two hundred that are funerary and is indifferent to '
          'the rest.',
          'The third claim comes from a regional museum within the same '
          'country as the site, and it rests on an argument about access. Its '
          'case is that the objects should be held where the people whose '
          'history they document can reach them without a visa, and that a '
          'collection twelve hundred miles away is in practice the property of '
          'those who can afford the journey. This claim is explicitly not '
          'about wrongdoing.',
          'The fourth position is the holding museum’s own, and it is usually '
          'described as a defence, a label which obscures its '
          'structure. It rests on stewardship and on the integrity of the '
          'assemblage: the objects have been conserved, catalogued and '
          'published as a unit for over a century, dispersal would destroy '
          'information that no individual object carries, and no claimant has '
          'yet demonstrated comparable conservation capacity.',
          'Each of these arguments is reasonable and each has a cost the '
          'others do not. Legality, applied consistently, would unwind a large '
          'fraction of every major collection in the world, including '
          'acquisitions that the claimant states themselves made under '
          'administrations now regarded as illegitimate. Continuity of '
          'relationship raises the question of who speaks for a dispersed '
          'people, and in this case two organisations claim to.',
          'Access, as a principle, cuts in several directions at once. It '
          'supports moving the collection closer to the descendant community, '
          'but it also supports keeping objects where the most visitors will '
          'see them, which in raw numbers is where they currently are. '
          'Stewardship is the weakest of the four as a matter of principle, '
          'since it amounts to a claim that competence confers title, and the '
          'strongest as a matter of practice, since objects that are destroyed '
          'settle nobody’s claim.',
          'There is a fifth position that is never stated as a claim because '
          'nobody holds it as one, and it governs more outcomes than any of '
          'the four. It is inertia. Objects stay where they are unless '
          'somebody with resources decides otherwise, and the cost of making '
          'a claim — legal advice, archival research, political attention '
          'sustained across a decade — falls entirely on the party that does '
          'not currently hold the object. The distribution of restitution '
          'outcomes therefore tracks the distribution of capacity to bring a '
          'case, which is not a principle anybody would defend in writing.',
          'Noticing this changes how the four claims should be read. They are '
          'not four competing answers submitted to a neutral adjudicator; '
          'they are arguments made by parties in very unequal positions, '
          'three of which must act and one of which need only decline. A '
          'holding institution that says it awaits a properly constituted '
          'claim is describing a condition it is not paying for, and that '
          'asymmetry is invisible in every statement of principle the case '
          'has produced.',
          'What the case illustrates is that restitution disputes are not '
          'usually disagreements about facts. The facts here are not '
          'contested: everybody agrees when the objects were removed, under '
          'what permit, and in what condition they are now. The disagreement '
          'is about which of four principles should govern, and that is not a '
          'question any amount of further research will answer.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['A claim based on access', 'A claim based on legality',
            'A claim based on continuity', 'A defence based on stewardship'],
           1, 'The permit was issued by an administration the modern state '
           'regards as having had no authority.'),
          ('Choose the best heading for paragraph 4.',
           ['A claim based on access', 'A claim based on legality',
            'A claim based on continuity', 'A defence based on stewardship'],
           0, 'The regional museum argues objects should be reachable without '
           'a visa.'),
          ('Choose the best heading for paragraph 8.',
           ['What the facts show', 'Why research will not settle it',
            'The strongest claim', 'A proposal for resolution'], 1,
           'The facts are agreed; the disagreement is about which principle '
           'governs.'),
          (
           'The writer believes the holding museum has the strongest '
           'claim.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 calls stewardship the weakest of the four as a '
           'matter of principle.',
           {0: 'Yes would need stewardship to win; paragraph 7 calls '
               'it the weakest in principle.', 2: 'Not Given is wrong because the four claims are ranked.'}),
          (
           'The writer believes the four claims could all be satisfied '
           'at once.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 states that the four principles are not '
           'compatible with one another.',
           {0: 'Yes would need compatibility; paragraph 1 says they '
               'are incompatible.', 2: 'Not Given is wrong because their relationship is '
               'stated.'}),
          ('The claim based on continuity concerns only the ____________ '
           'objects.', None, 'funerary',
           'Paragraph 3: the two hundred funerary objects, and it is '
           'indifferent to the rest.'),
          ('The museum’s defence rests on stewardship and on the integrity '
           'of the ____________.', None, 'assemblage',
           'Paragraph 5, because dispersal would destroy information no '
           'individual object carries.')])],
   listen=[
    dict(heading='A lecture on provenance and restitution', part='Part 4',
         task='A lecture on four kinds of claim', band='l4',
         qtype='Questions 47-52',
         script=[
          ('Lecturer', 'Today I want to take the heat out of a subject that '
           'generates a great deal of it, by doing something quite dry: '
           'separating the arguments people actually make when they ask for an '
           'object back.'),
          ('Lecturer', 'There are four, and I have never met a dispute that '
           'did not reduce to some combination of them. Legality. Continuity. '
           'Access. Stewardship. Keep those four words and you will be able to '
           'follow any restitution argument you ever read, including the ones '
           'where the participants are talking past each other without '
           'noticing.'),
          ('Lecturer', 'Legality says the object was never lawfully acquired. '
           'It is the strongest-sounding claim and it has an awkward property: '
           'applied consistently it unwinds an enormous amount, including '
           'acquisitions made by claimant states themselves under '
           'administrations now regarded as illegitimate. Very few people want '
           'the principle applied consistently, which tells you it is doing '
           'less work than it appears to.'),
          ('Lecturer', 'Continuity says the object belongs to a people wherever they are. This is the claim that has moved furthest in thirty '
           'years and it is now the one museums find hardest to resist, '
           'particularly for human remains and funerary material. Its '
           'difficulty is representation: who speaks for a dispersed people, '
           'and what do you do when two organisations both say they do.'),
          ('Lecturer', 'Access says the object should be where the relevant '
           'public can reach it. Notice that this one has no villain in it, '
           'which makes it the most negotiable and the least reported. It also '
           'cuts both ways, because on raw visitor numbers the metropolitan '
           'museum usually wins, and I think that argument is weaker than it '
           'sounds but it is not empty.'),
          ('Lecturer', 'Stewardship says we have looked after it and you '
           'cannot. As a principle it is close to indefensible, since it makes '
           'competence a source of title, and you will notice it is now '
           'usually advanced quietly. As a practical matter it is not nothing: '
           'an object destroyed in transit or storage has settled nobody’s '
           'claim.'),
          ('Lecturer', 'Before the conclusion, one thing none of the four '
           'captures. Objects stay put unless somebody spends money moving '
           'them, and the whole cost of bringing a claim falls on the party '
           'that does not have the object. Legal advice, archive work, '
           'political attention for ten years. So which objects go home '
           'tracks which claimants can afford a decade, and that is not a '
           'principle any of us would write down.'),
          ('Lecturer', 'What I want you to take away is that these disputes '
           'are rarely factual. In the case on your handout nobody disagrees '
           'about dates, permits or condition. They disagree about which of '
           'four principles should govern, and that is a question no further '
           'excavation, archive visit or scientific test will settle.')],
         items=[
          ('How many kinds of claim does the lecturer identify?',
           ['Three', 'Four', 'Five', 'Six'], 1,
           'Legality, continuity, access and stewardship.'),
          ('What awkward property does he attribute to legality?',
           ['It is hard to prove', 'Applied consistently it unwinds too much',
            'It ignores the public', 'It is recent'], 1,
           'Including acquisitions by claimant states under administrations '
           'now regarded as illegitimate.'),
          ('Which claim does he say has moved furthest in thirty years?',
           ['Legality', 'Continuity', 'Access', 'Stewardship'], 1,
           'And museums find it hardest to resist for human remains and '
           'funerary material.'),
          ('Why does he call the access argument the most negotiable?',
           ['It is supported by data', 'It has no villain in it',
            'It is recent', 'It is cheap to satisfy'], 1,
           'Which he also says makes it the least reported.'),
          ('What is his view of stewardship as a principle?',
           ['The strongest', 'Close to indefensible',
            'Legally decisive', 'Untested'], 1,
           'Because it makes competence a source of title, though he allows '
           'it practical force.'),
          ('He says these disputes are rarely',
           ['political', 'factual', 'public', 'expensive'], 1,
           'Nobody disagrees about dates, permits or condition in the case on '
           'the handout.')])],
   speak=dict(
    part='Part 3', focus='Objects far from where they were made',
    followup=[(('You would return the objects. Who should decide where an '
                'object belongs?'),
               ('Not the museum alone, which is the current arrangement and an '
                'obvious conflict. I would want a joint body with the '
                'community of origin represented and a published reasoning, so '
                'that the decisions can be compared with each other, because '
                'the inconsistency between cases does more damage than any '
                'single refusal.')),
              (('Does it matter where an object is kept, if people can see it '
                'online?'),
               ('It matters a great deal, and the question tends to be asked '
                'by whoever currently holds it. A photograph serves '
                'scholarship quite well and serves the other uses hardly at '
                'all, since you cannot hold a ceremony around a screen, and '
                'for many of the contested objects that use is the point.')),
              (('Is there a difference between a sacred object and an ordinary '
                'one?'),
               ('Yes, and it is the difference that makes the general argument '
                'about cases unhelpful. An ordinary artefact raises a question '
                'about ownership. A sacred object raises a question about use, '
                'and keeping it on display may be the harm, in which case a '
                'loan agreement answers nothing.'))],
    intro=('Four or five sentences. At least once, name which principle you '
           'are arguing from instead of only asserting a conclusion.'),
    qs=['Should museums return objects taken during colonial rule?',
        'Who should decide where an object belongs?',
        'Does it matter where an object is kept, if people can see it '
        'online?',
        'Is there a difference between a sacred object and an ordinary one?'],
    shape=[('answer', 'In many cases yes, but it depends which argument you '
            'are making.'),
           ('support', 'If the claim is that the object was taken unlawfully, '
            'that is a question with an answer.'),
           ('follow-up', 'And it should be settled the way other property '
            'questions are.'),
           ('support', 'If the claim is about where people can reach it, that '
            'is negotiable.'),
           ('follow-up', 'Which is probably why loans settle more disputes '
            'than courts do.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Brainstorm and outline: should museums return objects?',
         prompt=('Some people argue that museums should return objects to the '
                 'countries they came from. Others say the objects are better '
                 'kept where they are. Do not write the essay yet. Brainstorm '
                 'and build the outline below.'),
         plan=('Return should turn on how the object was acquired, not on '
               'where it is best kept',
               [('Acquisition is a question with an answer, and it decides '
                 'title',
                 ['an object taken unlawfully was never the museum’s to '
                  'keep',
                  'quality of care does not create ownership']),
                ('Arguments about access and conservation are real but belong '
                 'after title, not instead of it',
                 ['they are properly settled by loans and training, not by '
                  'refusal',
                  'a holder who offers them in place of title is changing the '
                  'subject'])]),
         notes=[
          'The two main ideas are ordered as a sequence: '
          'the second only makes sense once the first has established what '
          'kind of question comes first. An examiner reads that as '
          'progression.',
          'Both ideas answer the question asked. Neither is about whether '
          'museums are good institutions, which is the nearest available '
          'drift.',
          'Notice the position does not say return everything. A plan whose '
          'thesis contains a criterion is easier to develop than one that '
          'contains a side.'],
         criterion=[('A thesis containing a criterion, not a side',
                     'Task Response'),
                    ('Main ideas ordered as a sequence',
                     'Coherence and Cohesion')],
         instruct='  Produce the outline only. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Attributing a claim to a principle',
    explain=('Writing about a dispute is much clearer when each position is '
             'named by what it rests on. These patterns do that in one clause '
             'and let you evaluate the principle instead of the person.'),
    examples=['The first claim rests on legality, not on need.',
              'This argument turns on continuity of relationship.',
              'The defence appeals to stewardship, which makes competence a '
              'source of title.',
              'On this view the museum has never held good title.'],
    task='Rewrite each sentence so that the principle is named.',
    items=[('They say the objects were stolen.',
            'Their claim rests on legality: the objects were never lawfully '
            'acquired.'),
           ('They say the objects belong to their people.',
            'Their claim turns on continuity of relationship, which territory does not affect.'),
           ('The museum says it looks after them well.',
            'The museum appeals to stewardship, arguing that it alone has '
            'demonstrated the capacity to conserve them.'),
           ('They want them closer to home.',
            'Their argument is about access: the relevant public should be '
            'able to reach the collection.'),
           ('The museum says splitting them up would be bad.',
            'The museum relies on the integrity of the assemblage, which '
            'dispersal would destroy.')]),
   vocab=[('provenance', 'the recorded history of an object’s ownership'),
          ('restitution', 'the return of property to a rightful owner'),
          ('title', 'the legal right of ownership'),
          ('assemblage', 'a group of objects found and recorded together'),
          ('dispersal', 'the breaking up of a collection'),
          ('funerary', 'relating to burial of the dead'),
          ('descendant community', 'the living people of a culture studied'),
          ('inalienable', 'not able to be transferred to another owner')],
   expr=[('rests on', 'names the principle a claim depends on'),
         ('On this view', 'reports a position without adopting it'),
         ('applied consistently', 'tests a principle by extending it'),
         ('which obscures its structure',
          'notes that a label hides what an argument actually is')],
   trans=['the first claim', 'rather than', 'in this case',
          'what the case illustrates'],
  ),

  dict(
   sub='What return would and would not settle',
   step=5,
   read=[
    dict(heading='Three returns and what happened next',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 53-59',
         paras=[
          'Arguments about restitution are conducted almost entirely '
          'in advance of the event, with both sides describing what '
          'return would mean, and both descriptions are predictions. '
          'Three substantial returns have now been completed and '
          'followed for long enough to be examined, and what they show '
          'is that the predictions on both sides were wrong in the '
          'same way: they overstated how much the transfer itself '
          'would settle.',
          'The first case involved a set of carved panels returned to a '
          'national museum in 1998 after a nine-year negotiation. The '
          'receiving institution displayed them for four years and then placed '
          'them in storage, where they remain, because the gallery was needed '
          'for an exhibition programme that generates the museum’s income. '
          'Opponents of return cite this constantly and the citation is fair, '
          'but the inference usually drawn from it is not: the panels are in '
          'storage in their own country under the control of their own '
          'curators, which is what was asked for.',
          'The second case is a collection of human remains returned to a '
          'descendant community in 2004. These were reburied within eighteen '
          'months and are no longer available to research of any kind. '
          'Scientists who opposed the return describe this as a loss, and in '
          'the narrow sense it plainly is; the community describes it as the '
          'point. There is no neutral position available here, because the two '
          'parties disagree about what the objects are, not about what should '
          'be done with things of an agreed nature.',
          'The third case is the most instructive and the least discussed. A '
          'group of manuscripts was returned in 2011 together with a funded '
          'programme of digitisation, conservation training and a reciprocal '
          'loan agreement. Twelve years later the manuscripts are consulted '
          'more than they were in the holding museum, three of the trained '
          'conservators now lead departments elsewhere in the region, and the '
          'former holder has borrowed from the collection twice.',
          'What distinguishes the third case is not goodwill, of which there '
          'was no more than in the first. It is that the transfer was designed '
          'as the beginning of a relationship, where the others ended a dispute. The agreement specified what would happen after the '
          'objects arrived, and the costs of that were budgeted by the '
          'returning institution as part of the return instead of left to the '
          'recipient as a consequence of it.',
          'This points to a conclusion that neither campaign literature nor '
          'museum policy documents find convenient. The question of who owns '
          'an object and the question of what happens to it afterwards are '
          'genuinely separate, and conflating them has damaged both arguments. '
          'Those who oppose return cite the storage cases as though poor '
          'subsequent display defeated the ownership claim, which it does not. '
          'Those who demand return sometimes treat the transfer as the whole '
          'of the remedy, which the first case suggests it is not.',
          'A further asymmetry deserves attention. In all three cases the '
          'returning institution retained something the recipient did not '
          'acquire: a complete photographic and documentary record, built over '
          'decades. The objects moved and the scholarly archive did not. In '
          'the third case this was addressed explicitly through digitisation; '
          'in the other two it was not raised by either side during the '
          'negotiation, which is a remarkable omission given what it means for '
          'who can write the history.',
          'It is worth saying what these three cases cannot support, since '
          'three is not a sample. They were selected because they are old '
          'enough to have outcomes, which biases towards returns that were seen through, and towards institutions willing '
          'to be studied afterwards. A fourth case, in which a negotiation '
          'collapsed and nothing moved, would be the most informative of all '
          'and has never been written up by either party.',
          'None of this tells us whether any particular object should be '
          'returned. What it tells us is that the arguments used to decide '
          'that question are mostly about consequences, that the consequences '
          'turn out to depend on the design of the transfer far more than on the fact of it, and that a dispute which has spent thirty years '
          'predicting outcomes could now begin reading them.'],
         items=[
          ('Which paragraph describes a return followed by reburial?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'], 1,
           'Paragraph 3: human remains returned in 2004 and reburied within '
           'eighteen months.'),
          ('Which paragraph explains what made the third case different?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'], 1,
           'Paragraph 5: the transfer was designed as the beginning of a '
           'relationship, with costs budgeted by the returning '
           'institution.'),
          ('Which paragraph identifies something neither side raised?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'], 2,
           'Paragraph 7: the documentary record stayed behind and was not '
           'discussed in two of the three negotiations.'),
          (
           'The writer thinks the storage case shows the first return '
           'was a mistake.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 says the panels are under the control of their '
           'own curators, which is what was asked for.',
           {0: 'Yes would need a mistake; paragraph 2 says the panels '
               'are where they were asked to be.', 2: 'Not Given is wrong because the storage case is '
               'interpreted.'}),
          ('The writer believes all three returns should be reversed.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph declines to say whether any object '
           'should be returned at all, and nothing suggests reversal.',
           {0: 'Yes would need reversal; the final paragraph declines '
               'to say any object should move.', 2: 'Not Given is wrong because the writer states what he '
               'will not conclude.'}),
          ('The third case included digitisation, conservation training and a '
           'reciprocal ____________ agreement.', None, 'loan',
           'Paragraph 4, which is why the former holder has since borrowed '
           'twice.'),
          ('What did the returning institutions retain in all three cases?',
           None, 'the documentary record',
           'Paragraph 7: a complete photographic and documentary record built '
           'over decades.')])],
   listen=[
    dict(heading='A curator and a campaigner disagree', part='Part 4',
         task='A recorded panel discussion', band='l4',
         qtype='Questions 60-65',
         script=[
          ('Chair', 'Dr Fenwick-Oyelaran curates the collection in question. '
           'Mr Abeyratne campaigns for its return. Dr Fenwick-Oyelaran.'),
          ('Fenwick-Oyelaran', 'I want to start with the 1998 panels, because '
           'they are the case my side always cites and I think we cite them '
           'dishonestly. They went back, they were shown for four years, they '
           'are now in storage. My colleagues present that as a refutation. It '
           'is not a refutation of anything. They are in storage in their own '
           'country, curated by their own museum, which was the request.'),
          ('Abeyratne', 'I did not expect to hear that and I am grateful for '
           'it.'),
          ('Fenwick-Oyelaran', 'It costs me nothing, because my actual '
           'objection is elsewhere. In all three completed returns the '
           'photographic and documentary record stayed with the returning '
           'institution. The objects went home and the archive did not. Which '
           'means we still hold the material anybody has to use to write about '
           'them, and nobody on your side asked for it.'),
          ('Abeyratne', 'That is a serious point and you are right that we '
           'missed it. Although notice what you have just described: an '
           'advantage your institution retains because our negotiators were '
           'less sophisticated than yours. That is not an argument for keeping '
           'the objects.'),
          ('Fenwick-Oyelaran', 'No. It is an argument for designing returns '
           'properly, which is the only thing I actually believe about this.'),
          ('Abeyratne', 'Then we agree on the 2011 manuscripts.'),
          ('Fenwick-Oyelaran', 'Entirely. Digitisation, training, reciprocal '
           'loans, and the costs carried by us instead of left behind as a '
           'problem for you. Twelve years on those manuscripts are consulted '
           'more than they ever were here. If every return looked like that I '
           'would have no position left.'),
          ('Abeyratne', 'My difficulty with you is the step before all of '
           'this. You keep discussing how a transfer should be arranged, and '
           'the prior question is whose they are. If they were never lawfully '
           'yours, the quality of your conservation is irrelevant to whether '
           'you keep them.'),
          ('Fenwick-Oyelaran', 'And my answer is that I agree in principle '
           'and that the principle underdetermines almost every real case, '
           'because title is contested on both sides in nearly all of them.'),
          ('Fenwick-Oyelaran', 'May I add one caution about the evidence we '
           'have both been using. Three cases. All three completed, all three '
           'with institutions willing to be examined afterwards. The '
           'negotiations that collapsed are not in anybody’s literature, and '
           'they are the ones I would most want to read.'),
          ('Abeyratne', 'Agreed, and I will say that my side has no interest '
           'in publishing those either.'),
          ('Abeyratne', 'Then let us at least agree the order of the '
           'questions. Title first, arrangements second. Most of this debate '
           'takes them in the wrong order, and both of us have profited from '
           'that at different times.')],
         items=[
          ('What does the curator say about the 1998 panels?',
           ['They prove return fails', 'Her own side cites them dishonestly',
            'They should be returned again', 'They were never displayed'], 1,
           'She says they are in storage under their own curators, which was '
           'the request.'),
          ('Her actual objection concerns',
           ['conservation standards', 'the documentary record',
            'visitor numbers', 'legal title'], 1,
           'In all three returns the archive stayed with the returning '
           'institution.'),
          ('How does the campaigner respond to that point?',
           ['He disputes it', 'He accepts it and turns it round',
            'He ignores it', 'He asks for evidence'], 1,
           'He grants the omission and says it is an argument for better '
           'negotiation, not for keeping the objects.'),
          ('What do both speakers praise about the 2011 manuscripts?',
           ['The speed of the transfer',
            'That costs were carried by the returning institution',
            'That nothing was digitised', 'That no loans were agreed'], 1,
           'Along with digitisation, training and reciprocal loans.'),
          ('The campaigner’s central objection is that the curator',
           ['denies the history', 'discusses arrangements before title',
            'exaggerates the costs', 'speaks for others'], 1,
           'He says the prior question is whose they are.'),
          ('What do they finally agree on?',
           ['An immediate return', 'The order of the questions',
            'A joint exhibition', 'Further research'], 1,
           'Title first, arrangements second, and both admit having taken '
           'them in the wrong order.')])],
   speak=dict(
    part='Part 3', focus='Access, ownership and the public',
    sounds=[('Place names and building names have their own stress, and it is '
             'not predictable from spelling. Learn the stress of the places '
             'you will mention, because a mispronounced local name is the one '
             'thing an examiner cannot help you with.'),
            ('Dates are said in fixed shapes: nineteen oh four, eighteen '
             'nineties, the turn of the century. Practise the dates you will '
             'need for your own building.'),
            ('Compounds dominate this unit: SWIMming baths, LIbrary service, '
             'HEritage site, LISted building. The first word takes the stress '
             'in all four.'),
            ('A long noun phrase needs one pause and not three: a Victorian '
             'swimming baths on the corner of the street. Say it as two '
             'chunks.'),
            ('Record yourself describing a building. Count your pauses inside '
             'noun phrases; each one costs a little of what the sentence was '
             'worth.')],
    intro=('The hardest turn in the unit. Try to state once what would change '
           'your mind, which is the clearest signal of a developed position '
           'an examiner can hear.'),
    qs=['Is ownership or access more important for cultural objects?',
        'Should a museum be able to keep an object because it looks after it '
        'well?',
        'What should happen to the research records when an object is '
        'returned?',
        'Can a dispute like this ever be fully settled?'],
    shape=[('answer', 'Ownership first, I think, but access is what actually '
            'matters to people.'),
           ('support', 'Looking after something well cannot be what makes it '
            'yours.'),
           ('follow-up', 'Otherwise the richest institution owns everything by '
            'definition.'),
           ('support', 'That said, a return that leaves the archive behind '
            'has not really returned much.'),
           ('follow-up', 'So what would change my mind is seeing the records '
            'treated as part of the object.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should museums return objects to their countries of '
                 'origin?',
         prompt=('Write the essay you planned in cycle 4. Some people argue '
                 'that museums should return objects to the countries they '
                 'came from. Others say the objects are better kept where they '
                 'are. Discuss both views and give your own opinion. Write at '
                 'least 250 words.'),
         model=[
          'Debates about returning museum objects are usually conducted as a '
          'single argument, when in fact two quite different questions are '
          'being asked at once: who owns the object, and where is it best '
          'kept. My own position is that these have to be answered in that '
          'order, and that most of the confusion in the public argument comes '
          'from taking them in the other one.',
          'Those who argue for return rest their case, at its strongest, on '
          'acquisition. Many collections were assembled under administrations '
          'whose authority the countries concerned never accepted, and if an '
          'object was never lawfully acquired then it was never the museum’s '
          'to keep. This is a question of a familiar kind, answered the way '
          'other property questions are answered, and the quality of the '
          'holder’s conservation has no bearing on it. A principle that '
          'allowed good care to create ownership would hand every contested '
          'object to whichever institution was richest.',
          'Those who argue against return make a different kind of point, and '
          'the serious version of it is not about ownership at all. It is that '
          'returns have sometimes been followed by objects going into storage, '
          'by research access being lost, and by conservation falling below '
          'what the objects need. These are real outcomes and they are not '
          'invented by museums to protect themselves.',
          'The difficulty is that they are arguments about consequences '
          'offered in answer to a question about title, and consequences are '
          'the one thing a transfer can be designed to fix. Where returns have '
          'included funded digitisation, conservation training and reciprocal '
          'loans, the objects have ended up more used than before. Where they '
          'have not, the costs have simply been left with the recipient and '
          'then cited against them.',
          'I therefore think museums should return objects whose acquisition '
          'cannot be defended, and should carry the cost of designing those '
          'returns properly instead of offering good stewardship in place of '
          'ownership. The second obligation is the one currently missing; the '
          'first is the one currently argued about.'],
         notes=[
          'Structure 3 with a reconciling position, and the reconciliation is '
          'an ordering: title first, consequences second. Both views are given '
          'their strongest form before the position arrives.',
          'Paragraph 4 is the hinge, and it does one thing well: it accepts '
          'the opposing evidence completely and reclassifies it. That is '
          'harder and more persuasive than disputing it.',
          'The last sentence distinguishes what is missing from what is '
          'argued about, which leaves the reader with a sharper statement than '
          'a summary would. A conclusion should add the final turn, not repeat '
          'the essay.'],
         model65=[
                  'Some people argue that museums should return '
                  'objects to their countries of origin. I think many '
                  'should be returned, but the decision cannot be made '
                  'by one rule.',
                  'The case for return is strong where objects were '
                  'taken by force. A country that lost its objects '
                  'while it had no power to refuse has a claim that '
                  'does not expire, and objects often mean more where '
                  'they were made than in a case abroad.',
                  'Museums make arguments that are not only '
                  'self-interested. They have conserved objects for a '
                  'long time, and a large collection allows comparison '
                  'that a single national museum cannot. They also '
                  'warn that one return may become a rule that empties '
                  'their shelves.',
                  'I think the strongest claims are those of origin '
                  'and of consent: where an object was taken without '
                  'consent and is asked for, it should go back. '
                  'Stewardship is the weakest claim, because care can '
                  'now be provided in most countries. Loans in both '
                  'directions would keep much of what the museums '
                  'value.',
                  ],
         gap65=[
                'It tests each of the four principles separately and '
                'says which is weakest and why, instead of weighing '
                'two sides.',
                'It reports what happened to objects that were '
                'returned, which is evidence rather than prediction.',
                'It refuses the general rule and says what a decision '
                'would need in each case.',
                ],
         criterion=[('A position that orders the questions instead of '
                     'picking a side', 'Task Response'),
                    ('Accepting opposing evidence and reclassifying it',
                     'Task Response'),
                    ('A conclusion that adds a final distinction',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=20)],
   gram=dict(
    point='Reclassifying an opponent’s point instead of denying it',
    explain=('The strongest move available in a discussion essay is to accept '
             'what the other side has established and show that it answers a '
             'different question. These patterns perform that move.'),
    examples=['These are arguments about consequences offered in answer to a '
              'question about title.',
              'That is a reason to design the transfer better, not a reason to '
              'keep the objects.',
              'The point is correct and it belongs at a later stage of the '
              'argument.',
              'This tells us how to return an object, not whether we should.'],
    task='Accept each point and reclassify it.',
    items=[('Returned objects sometimes end up in storage.',
            'That is true, and it is an argument about display, which is a separate question from ownership.'),
           ('Museums conserve objects better.',
            'Often they do, and that is a reason to fund training as part of '
            'a return, not a reason to refuse one.'),
           ('More people see the objects where they are.',
            'More people do, which bears on access alone.'),
           ('The objects were bought legally at the time.',
            'They were, under administrations whose authority is precisely '
            'what is in dispute.'),
           ('Splitting a collection destroys information.',
            'It can, which is an argument for returning it as a unit.')]),
   vocab=[('reciprocal', 'given by each side to the other'),
          ('digitisation', 'making a photographic or digital record'),
          ('reburial', 'burying human remains again after return'),
          ('conflate', 'to treat two different things as one'),
          ('remedy', 'what is done to put a wrong right'),
          ('underdetermine', 'to fail to settle a question on its own'),
          ('negotiated settlement', 'an agreement reached by discussion'),
          ('documentary record', 'the archive of photographs and notes about '
           'a collection')],
   expr=[('I did not expect to hear that and I am grateful for it',
          'acknowledges an opponent’s concession'),
         ('It costs me nothing, because my actual objection is elsewhere',
          'gives ground on a weak point to protect a strong one'),
         ('the prior question is', 'insists on the order of two questions'),
         ('underdetermines almost every real case',
          'accepts a principle while limiting its reach')],
   trans=['in all three cases', 'a further asymmetry', 'therefore',
          'currently'],
  ),
 ],
 technique=dict(
  title='Three maps: parallel order, and what did not change',
  body=('A pair of maps is ordinary. Three maps of the same ground is the '
        'hardest visual the paper sets, and it is hard for one reason: there '
        'are two dimensions, space and time, and only one of them can '
        'structure your paragraphs. Choose time, take one map per paragraph, '
        'and run the same spatial order inside each paragraph so the reader '
        'can track a feature from map to map without searching. Then, before '
        'you finish, find what did not change. It is almost always there, it '
        'is almost always the most interesting sentence available, and it is '
        'the thing candidates leave out.'),
  panel=[('Anchor', 'In map one, place features against something fixed — a '
          'road, a river, a boundary. That anchor is what later maps are '
          'described against.'),
         ('Change, not contents', 'Describe maps two and three as change: a '
          'mill over the fish ponds, housing across the cloister. A list of '
          'what is present throws away the comparison.'),
         ('Parallel order', 'Take the features in the same order in every '
          'paragraph. The reader should be able to read down your answer, not '
          'across it.'),
         ('The survival', 'Name what is unchanged, and say so as a finding, with a sentence of its own.')],
  task='Look at the three maps again. Write the four sentences this panel '
       'asks for: an anchor, two changes described as change, a parallel '
       'order you will use, and the survival.',
  qs=['Which feature will you use as the spatial anchor, and why?',
      'Write one sentence describing the 1890 mill as a change.',
      'Write one sentence describing the present-day wetland as a change.',
      'What order will you take the features in, in all three paragraphs?',
      'What did not change, and how will you phrase it?']),
 outlining=dict(
  title='From a 740-word argument to an outline',
  body=('The passage in cycle 4 is a piece of argument, not information, and '
        'the fastest way to prove you understood it is to reduce it to the '
        'outline its writer must have worked from. Four claims, each resting '
        'on a principle, then a cost for each, then a conclusion about what '
        'kind of question the dispute is. If your outline of a passage comes '
        'out with eight main ideas, you have listed paragraphs instead of '
        'finding the structure.'),
  frame=('Restitution disputes are disagreements about principles, not facts',
         [('Four claims, each resting on a different principle',
           ['legality, continuity, access, stewardship',
            'the four are not compatible with one another']),
          ('Each principle carries a cost the others do not',
           ['legality applied consistently unwinds too much',
            'stewardship makes competence a source of title'])]),
  task='Outline the cycle 5 passage the same way: a thesis, two main ideas, '
       'two supports each. Then compare your outline with a neighbour’s and '
       'find where you divided the argument differently.',
  qs=['What is the thesis of the cycle 5 passage in one sentence?',
      'Is the third case a main idea or a support? Defend your answer.',
      'Where does the asymmetry about the documentary record belong?',
      'Which paragraph is doing no structural work, and could be cut?'],
  answers=['the design of a transfer, not the fact of it, determines what '
           'return achieves',
           'a support: it is the evidence for the claim about design',
           'a second main idea, or a support under consequences, depending on '
           'the thesis chosen',
           'none is dispensable, which is itself worth noticing about '
           'well-built argument']),
 candos=['I can tell what a grade changes from what it does not',
         'I can structure three maps by time and keep a parallel spatial '
         'order',
         'I can name what did not change and report it as a finding',
         'I can attribute a claim to the principle it rests on',
         'I can accept an opponent’s evidence and reclassify it'],
 tip=('In a map answer, the sentence that earns the most is almost never '
      'about a new building. It is the one that says what is still there.'),
)
