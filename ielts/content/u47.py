# -*- coding: utf-8 -*-
"""Unit 47 - Land and Agriculture. IELTS Volume 5, band 7.0."""

_FARM = dict(kind='line',
             title='Yield, input use and soil organic matter',
             sub='one holding, 1993 to 2023, each series indexed to '
                 '1993 = 100',
             ylab='',
             x=['1993', '1998', '2003', '2008', '2013', '2018', '2023'],
             series=[('Yield per hectare', [100, 112, 124, 131, 138, 141, 144]),
                     ('Purchased inputs per hectare',
                      [100, 118, 139, 158, 171, 180, 186]),
                     ('Soil organic matter', [100, 97, 93, 88, 84, 79, 74])])

UNIT = dict(
 n=47, vol=5, level='B2+/C1', band='7.0',
 theme='Land and Agriculture',
 opener=(
   'A chart with three series indexed to the same starting point, two of '
   'them rising and one falling, and the honest description of it is '
   'harder than it looks. The unit works outwards from there: a harvest is '
   'income and the soil that produced it is capital, only one of the two '
   'appears in any account, and the three attempts to pay farmers for the '
   'one that does not appear all ran into the same problem.'),

 cycles=[
  dict(
   sub='Using a right of way',
   step=1,
   read=[
    dict(heading='Public rights of way — what they allow',
         kind='Official guidance',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('Rights guidance is read for the verb that defines the '
                'right',
                ['A right of way permits a specific activity — passing on '
                 'foot, on horseback, with a vehicle — and permits nothing '
                 'else, however reasonable the other thing sounds.',
                 'Mark the verb attached to each category as you read. The '
                 'questions and the real disputes both come from somebody '
                 'assuming a right covers an activity it does not name.']),
         paras=[
          'A public right of way is a right to pass along a specified '
          'route, recorded on the definitive map. It is not a right to be '
          'on the land in general: a walker stepping off the line to avoid '
          'mud is trespassing, which is technically true and almost never '
          'acted on.',
          'There are four categories and each permits a different activity. '
          'A footpath permits passage on foot only. A bridleway permits '
          'foot, horse and bicycle. A restricted byway adds horse-drawn '
          'vehicles. A byway open to all traffic adds motor vehicles, and '
          'there are very few of these because almost none were recorded '
          'before the deadline for claims.',
          'The definitive map is conclusive evidence of what it shows and is '
          'not evidence of what it omits. A path missing from the map may '
          'still be a public right of way, established by twenty years of '
          'use as of right, and the procedure for having it added is '
          'separate from everything else on this page and takes several '
          'years.',
          'Landowners have duties rather than discretion. The surface of a '
          'cross-field path must be reinstated within fourteen days of '
          'ploughing, gates must be openable with one hand, and crops must '
          'not encroach on the recorded width. These are obligations '
          'enforceable by the council, which may do the work and recover the '
          'cost.',
          'Diversion is possible and is the proper route for a landowner '
          'with a genuine difficulty. An application is made to the council, '
          'advertised, and granted where the new route is not substantially '
          'less convenient. Obstructing a path in order to encourage its '
          'disuse is not diversion and does not become one with the passage '
          'of time.'],
         items=[
          ('A right of way is a right to',
           ['be on the land', 'pass along a specified route',
            'use the land for recreation', 'park a vehicle'], 1,
           'Paragraph 1, which is why leaving the line is technically '
           'trespass.'),
          ('Which category permits bicycles but not motor vehicles?',
           ['Footpath', 'Bridleway', 'Byway open to all traffic',
            'None of them'], 1,
           'Paragraph 2, which also permits foot and horse.'),
          ('A path missing from the definitive map',
           ['is not a right of way', 'may still be a right of way',
            'can never be added', 'is automatically private'], 1,
           'Paragraph 3: the map is not evidence of what it omits.'),
          ('A ploughed cross-field path must be reinstated within '
           '____________ days.', None, 'fourteen',
           'Paragraph 4, one of three obligations listed.'),
          ('Gates must be openable with one ____________.', None, 'hand',
           'Paragraph 4, enforceable by the council.'),
          ('A diversion is granted where the new route is not '
           'substantially less ____________.', None, 'convenient',
           'Paragraph 5, after advertisement.')]),
    dict(heading='Reporting an obstructed path',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Find the path number from the interactive map. Numbers are given '
          'by parish and run in the form of three letters and a number, and '
          'a report quoting a description instead takes about a fortnight '
          'longer because somebody has to identify the path before anything '
          'else can happen.',
          'Record what the obstruction is, where it is along the path, '
          'when you encountered it and whether you were able to get past '
          'it at all. A photograph with something of known '
          'size in it is worth more than a description of width, and a grid '
          'reference is worth more than both.',
          'We write to the landowner first in every case except where the '
          'obstruction is dangerous. The letter allows twenty-eight days, '
          'and about seven obstructions in ten are removed at this stage '
          'without any further action by anybody.',
          'Where nothing happens we may serve a notice, carry out the work '
          'ourselves and recover the cost, or prosecute. The first of '
          'those is used most and the last almost never. The file is '
          'closed whichever happens, so a path obstructed again six months '
          'later needs a fresh report with a new reference rather than a '
          'message quoting the old one.'],
         items=[
          ('Path numbers are given by ____________.', None, 'parish',
           'Paragraph 1, in the form of three letters and a number.'),
          ('A photograph should include something of known ____________.',
           None, 'size',
           'Paragraph 2, which is worth more than a description of '
           'width.'),
          ('The letter to the landowner allows ____________ days.', None,
           'twenty-eight',
           'Paragraph 3, after which further action may follow.'),
          ('About ____________ obstructions in ten are removed after the '
           'first letter.', None, 'seven',
           'Paragraph 3, without any further action.')])],
   listen=[
    dict(heading='Reporting a blocked footpath', part='Part 1',
         task='A call to a rights of way team', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Officer', 'Rights of way, Celestine speaking.'),
          ('Caller', 'Hello. There is a footpath behind our village that has '
           'been fenced across.'),
          ('Officer', 'Can you give me the path number? It will be three '
           'letters and a number, by parish.'),
          ('Caller', 'I have it from the map. B-R-K, then forty-two.'),
          ('Officer', 'BRK42. That runs from Mill Lane to the old quarry. '
           'Whereabouts is the fence?'),
          ('Caller', 'About four hundred metres in, where it leaves the '
           'wood.'),
          ('Officer', 'And what sort of fence?'),
          ('Caller', 'Stock fencing with barbed wire along the top. It is '
           'new, and the stile that used to be there has gone.'),
          ('Officer', 'Have you got a photograph?'),
          ('Caller', 'I have, with my walking pole against it for scale.'),
          ('Officer', 'That is better than most reports I receive. Send it '
           'with a grid reference if you can get one from your phone, '
           'because that saves an officer a site visit to establish where '
           'you mean.'),
          ('Caller', 'Will anything actually happen?'),
          ('Officer', 'Probably, and the first thing is a letter to the '
           'landowner allowing twenty-eight days. About seven in ten are '
           'resolved at that stage, which is better than people expect.'),
          ('Caller', 'And if they ignore it?'),
          ('Officer', 'Then we can serve a notice, or do the work and bill '
           'them, which is what usually happens. Prosecution is available '
           'and I have seen it twice in nine years.'),
          ('Caller', 'The farmer will say the path should be moved. It goes '
           'straight through the middle of his yard now.'),
          ('Officer', 'Then he should apply for a diversion, and I would '
           'say that to him. It is advertised, it takes about eight months, '
           'and it is granted where the new route is not substantially less '
           'convenient. What he may not do is fence it and wait.'),
          ('Caller', 'Should I tell him that?'),
          ('Officer', 'You can, and it will come better from us. One more '
           'thing: if it is fenced again in six months, report it again '
           'with a new reference. We close the file when the obstruction '
           'goes, so an old reference does not reopen anything.')],
         items=[
          ('Path number: BRK____________', None, '42',
           'Running from Mill Lane to the old quarry.'),
          ('Location: about ____________ metres in, where the path leaves '
           'the wood.', None, 'four hundred',
           'Which the officer asks to have fixed by a grid reference.'),
          ('The obstruction: stock fencing with ____________ wire along '
           'the top.', None, 'barbed',
           'Replacing a stile that has been removed.'),
          ('The landowner letter allows ____________ days.', None,
           'twenty-eight',
           'With about seven in ten resolved at that stage.'),
          ('The landowner should apply for a ____________ instead.', None,
           'diversion',
           'Which is advertised and takes about eight months.'),
          ('If obstructed again, the caller must make a ____________ '
           'report.', None, 'fresh',
           'Because the file is closed when the obstruction goes.')]),
    dict(heading='A short talk: who the land is for', part='Part 2',
         task='A talk at a rural studies seminar', band='l2',
         qtype='Questions 17-20',
         script=[
          ('Speaker', 'I want to dismantle a sentence that appears in almost '
           'every argument about land, from both sides: "it is private '
           'property". It is true, it settles nothing, and understanding why '
           'it settles nothing is most of this subject.'),
          ('Speaker', 'Ownership of land has never been a single right. It '
           'is a bundle of separable rights: to occupy, to exclude others, '
           'to take the crop, to extract minerals, to build, to sell, to '
           'pass it on. These have been held by different people routinely '
           'for about eight centuries.'),
          ('Speaker', 'That is not a modern erosion of property, which is '
           'how it is usually described. Tenancy, commons, mineral rights '
           'held separately from surface rights, and public rights of way '
           'across private ground all predate the idea of absolute ownership '
           'by a very long way. The unified version is the recent invention '
           'and the separable version is the historical norm.'),
          ('Speaker', 'Which tells you what kind of argument is actually '
           'happening when somebody says "it is private property". They are '
           'not stating a fact that ends the discussion. They are making a '
           'claim about which sticks in the bundle are held together, and '
           'that is a question with a different answer in every country and '
           'in every century.'),
          ('Speaker', 'The practical consequence for anybody working in this '
           'area is to stop arguing about ownership and start arguing about '
           'the specific right in dispute. Does the public right to pass '
           'along a line conflict with the right to exclude? Yes, and it has '
           'for six hundred years, and the resolution has always been a line '
           'rather than a principle.'),
          ('Speaker', 'And I would add the observation that keeps me '
           'employed. Almost every heated dispute I am called to is between '
           'two people who each hold a genuine right, correctly, and have '
           'been told by somebody that their right is the whole of '
           'ownership. Neither of them is lying and both of them have been '
           'misinformed.')],
         items=[
          ('The speaker says "it is private property"',
           ['is false', 'is true but settles nothing', 'is a modern '
            'invention', 'applies only to buildings'], 1,
           'And understanding why is most of the subject.'),
          ('Ownership of land is described as',
           ['a single right', 'a bundle of separable rights',
            'a recent concept', 'a public arrangement'], 1,
           'Held by different people routinely for eight centuries.'),
          ('The speaker says the unified version of ownership is',
           ['the historical norm', 'the recent invention',
            'a legal fiction', 'universal'], 1,
           'While the separable version is the historical norm.'),
          ('In most heated disputes he attends,',
           ['one party is dishonest', 'both parties hold genuine rights '
            'and have been misinformed', 'the law is unclear',
            'the map is wrong'], 1,
           'Each told that their right is the whole of ownership.')])],
   speak=dict(
    part='Part 1', focus='Walking and the countryside',
    intro=('Two or three sentences each. A specific walk or place beats a '
           'general statement about nature.'),
    qs=['Do you enjoy walking?',
        'Is there countryside near where you live?',
        'Can people walk freely in the countryside in your country?',
        'Has that changed in your lifetime?'],
    shape=[('answer', 'Most weekends, usually the same four-mile loop.'),
           ('support', 'It runs along a river and then back across two '
            'fields.'),
           ('follow-up', 'One of those fields has had a padlocked gate on '
            'it since March, which is a separate conversation.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking a council to clear a blocked path',
         prompt=('A public footpath near your home has been blocked. Write '
                 'a letter to the council. In your letter: identify the '
                 'path; describe the obstruction; say what you would like '
                 'the council to do. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about public footpath BRK42, which runs from Mill '
          'Lane to the old quarry, and which has been obstructed since '
          'approximately 12 March.',
          'The path is recorded on the definitive map and has been '
          'obstructed since that date by new stock fencing with barbed wire '
          'along the top, erected across the line of the path about four '
          'hundred metres from the Mill Lane end, at the point where it '
          'leaves the wood. The stile previously at that point has been '
          'removed. I attach two photographs with a walking pole included '
          'for scale, and the grid reference is SK 4471 9032.',
          'I have not approached the landowner, since I understand that the '
          'council writes in the first instance and that a letter from you '
          'carries a weight that one from me would not.',
          'I should add that the line of the path now passes through what '
          'has become a working yard, and that a diversion may well be '
          'justified. If the landowner were to apply for one I would not '
          'object. What I would ask is that the path be reopened in the '
          'meantime, since an obstruction maintained while an application is '
          'considered sets a precedent that would make the next one harder '
          'to resolve.',
          'Yours faithfully,',
          'R. Delacroix-Mbeki'],
         notes=[
          'The second paragraph is a single sentence of fact containing the '
          'status, the date, the obstruction, the location and the '
          'evidence. That is the sentence an enforcement officer needs and '
          'the rest of the letter is context.',
          'Volunteering support for a diversion gives away nothing — the '
          'writer has no power to grant or refuse one — and establishes '
          'that the complaint is about the method rather than the outcome. '
          'That distinction is what makes the request hard to refuse.',
          'The final clause gives a reason that is about the council’s '
          'future caseload rather than the writer’s convenience. Appeals to '
          'the reader’s interest outperform appeals to your own.'],
         criterion=[('One sentence containing status, date, obstruction and '
                     'evidence', 'Task Achievement'),
                    ('Conceding something you have no power over',
                     'Task Response'),
                    ('A reason framed around the reader’s interest',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Statement of fact, duty and requested action',
    explain=('A letter to an enforcement body is strongest when it '
             'separates what is the case, what the law requires, and what '
             'you are asking for. These patterns keep the three apart.'),
    examples=['The path is recorded on the definitive map and has been '
              'obstructed since 12 March.',
              'A cross-field path must be reinstated within fourteen days.',
              'I have not approached the landowner.',
              'What I would ask is that the path be reopened in the '
              'meantime.'],
    task='Rewrite each sentence so that fact, duty and request are not '
         'mixed.',
    items=[('They have illegally blocked the path and must open it.',
            'The path is recorded on the definitive map and has been fenced '
            'across since 12 March; I would ask that it be reopened.'),
           ('Something should be done about the gate.',
            'The gate at the eastern end cannot be opened with one hand, '
            'which the guidance states is a requirement.'),
           ('The farmer is in the wrong.',
            'The obstruction has been in place for eleven weeks; whether it '
            'was intentional is not something I can say.'),
           ('I want this sorted out quickly.',
            'I would be grateful if the twenty-eight day letter could be '
            'issued before the main walking season begins in May.'),
           ('He should move the path instead.',
            'A diversion application would be the proper route, and I would '
            'not object to one.')]),
   vocab=[('right of way', 'a public right to pass along a route'),
          ('definitive map', 'the legal record of public paths'),
          ('obstruction', 'anything preventing passage along a path'),
          ('reinstate', 'to restore a path surface after ploughing'),
          ('encroach', 'to extend into a space reserved for something '
           'else'),
          ('stile', 'a step or opening allowing people over a fence'),
          ('trespass', 'being on land without permission to be there'),
          ('as of right', 'openly and without permission being given')],
   expr=[('The path is recorded on the definitive map and has been '
          'obstructed since', 'the standard opening sentence of this '
          'complaint'),
         ('What he may not do is fence it and wait',
          'names the unlawful version of a lawful aim'),
         ('it will come better from us',
          'offers a practical reason to let somebody else act'),
         ('an obstruction maintained while an application is considered '
          'sets a precedent', 'argues from the reader’s future caseload')],
   trans=['furthermore', 'in this connection', 'I should add',
          'in the meantime'],
  ),

  dict(
   sub='Who the land is for',
   step=2,
   read=[
    dict(heading='Four people with a claim on one field',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 21-26',
         paras=[
          'A  Ignatius: I own it and I am aware that owning it is not the '
          'end of the argument, which took me about fifteen years to accept. '
          'There is a path across it that predates my family, a tenancy on '
          'the eastern half that I cannot end at will, and a water authority '
          'that can dig it up with a fortnight’s notice. I own the bits '
          'nobody else has a claim on.',
          'B  Bernadette: I have farmed it for nineteen years under a '
          'tenancy and I will not be the one who benefits from anything I '
          'do to the soil. If I spend four years rebuilding organic matter '
          'and the tenancy ends, I have made Ignatius richer and myself '
          'poorer, and no arrangement anybody has offered me addresses that. '
          'So I farm it for the year I am in.',
          'C  Oluwafemi: I walk the path twice a week and I have no claim on '
          'anything except that line. I want to say that clearly, because '
          'the walking organisations I belong to sometimes talk as though we '
          'had a general interest in the field, and we do not. The line is a '
          'real right and it is a narrow one.',
          'D  Perpetua: I am the parish clerk and what I see is four parties '
          'each entirely correct and nobody able to say so out loud. Every '
          'dispute I minute is between people who have been told their own '
          'right is the whole of the matter, and the meetings would take '
          'twenty minutes if anybody had explained the bundle to them.'],
         items=[
          ('Which person describes ownership as what remains after other '
           'claims?', ['Ignatius', 'Bernadette', 'Oluwafemi',
            'Perpetua'], 0,
           'He owns the parts nobody else has a claim on.'),
          ('Which person has no incentive to improve the land?',
           ['Ignatius', 'Bernadette', 'Oluwafemi', 'Perpetua'], 1,
           'Because the benefit of rebuilding soil would go to the '
           'owner.'),
          ('Which person deliberately limits the scope of their own '
           'claim?', ['Ignatius', 'Bernadette', 'Oluwafemi',
            'Perpetua'], 2,
           'A real right and a narrow one, confined to the line.'),
          ('Which person attributes disputes to people being '
           'misinformed?', ['Ignatius', 'Bernadette', 'Oluwafemi',
            'Perpetua'], 3,
           'Each told that their own right is the whole of the matter.'),
          ('Bernadette believes her approach to the soil is the best one '
           'for the land.', ['Yes', 'No', 'Not Given'], 1,
           'She explains it as a response to the tenancy rather than as '
           'good practice.'),
          ('Oluwafemi belongs to a walking organisation.',
           ['Yes', 'No', 'Not Given'], 0,
           'He refers to the walking organisations he belongs to.')])],
   listen=[
    dict(heading='Two officers disagree about access', part='Part 3',
         task='A conversation between two council officers', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Rosalind', 'I want to recommend the permissive route and close '
           'the enforcement file.'),
          ('Emeka', 'Which solves this week and I think creates a problem in '
           'four years.'),
          ('Rosalind', 'Tell me the four-year problem, because the '
           'this-week problem is that the path is fenced and a prosecution '
           'costs us eleven thousand pounds.'),
          ('Emeka', 'A permissive route is permission, and permission can be '
           'withdrawn. In four years the farm is sold, the new owner '
           'withdraws it, and the recorded right has gone because we agreed '
           'not to enforce it.'),
          ('Rosalind', 'The recorded right does not go. It stays on the '
           'definitive map whatever we agree.'),
          ('Emeka', 'On the map, yes. In practice, nobody has walked the '
           'recorded line for four years, there is a fence and a crop on it, '
           'and the officer handling it in 2029 is reopening something '
           'rather than maintaining it. I have watched that happen on three '
           'paths in this district.'),
          ('Rosalind', 'That is a better objection than the legal one I was '
           'prepared for, and it does not deal with the eleven thousand '
           'pounds.'),
          ('Emeka', 'No. Can I propose the version I think works? Accept the '
           'permissive route and simultaneously open a diversion '
           'application on the landowner’s behalf, which he will pay for '
           'because it is what he wants anyway.'),
          ('Rosalind', 'He will not pay for it. He thinks he has already won '
           'by fencing.'),
          ('Emeka', 'Then tell him the permissive route is available for '
           'twelve months and conditional on the application being made. '
           'That is lawful, it costs us nothing, and it converts a situation '
           'that decays into one that resolves.'),
          ('Rosalind', 'I would want that in writing from legal before I '
           'offered it.'),
          ('Emeka', 'So would I, and I would add one line to the letter: '
           'that the recorded route remains recorded and the permissive '
           'route is in addition to it rather than instead of it. If that '
           'sentence is missing, in four years somebody will produce our '
           'letter as evidence that we extinguished the right.'),
          ('Rosalind', 'That is the sentence that matters and it is the one '
           'I would have left out.'),
          ('Emeka', 'It is the one everybody leaves out, which is why I '
           'keep a paragraph of it in a file and paste it into every '
           'letter of this kind.')],
         items=[
          ('Rosalind’s immediate problem is that',
           ['the map is wrong', 'the path is fenced and prosecution costs '
            'eleven thousand pounds', 'the landowner has appealed',
            'the route is dangerous'], 1,
           'Which is why she wants to accept a permissive route.'),
          ('Emeka’s objection is that permission',
           ['is unlawful', 'can be withdrawn', 'costs more',
            'requires advertising'], 1,
           'Leaving a successor to reopen rather than maintain the '
           'route.'),
          ('Rosalind points out that the recorded right',
           ['is extinguished', 'stays on the definitive map',
            'must be re-registered', 'lapses after four years'], 1,
           'Whatever the two officers agree.'),
          ('Emeka answers that in practice the 2029 officer would be',
           ['maintaining it', 'reopening it', 'prosecuting',
            'diverting it'], 1,
           'Having watched this happen on three paths in the district.'),
          ('What does he propose?',
           ['Prosecution', 'A permissive route conditional on a diversion '
            'application', 'Closing the file', 'A public inquiry'], 1,
           'Available for twelve months and conditional.'),
          ('Which sentence does he insist the letter contains?',
           ['That prosecution remains available',
            'That the recorded route remains recorded and the permissive '
            'route is in addition', 'That the landowner pays costs',
            'That the file is closed'], 1,
           'Or the letter becomes evidence that the right was '
           'extinguished.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Land',
    intro=('Short answers, then the long turn. Specific people and a '
           'specific place.'),
    cue=('Describe a piece of land that matters to people you know.',
         ['where it is', 'what it is used for', 'who cares about it',
          'and explain why it matters to them']),
    qs=['Is land expensive where you live?',
        'Do people argue about land in your country?',
        'Now look at the card. You have one minute to make notes.',
        'Should land ownership be limited in any way?'],
    shape=[('answer', 'A field behind the village hall, about six '
            'acres.'),
           ('support', 'It is grazed in summer and used for the fair in '
            'September.'),
           ('follow-up', 'The owner, the grazier and the fair committee all '
            'have something at stake in it.'),
           ('support', 'And each of them is quite right about their own '
            'piece of it.'),
           ('follow-up', 'Which is why the annual argument is never about '
            'facts and never gets resolved.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='A right to walk on private land?',
         prompt=('Some people believe the public should have a right to '
                 'walk on privately owned land; others believe this '
                 'interferes with property rights. Discuss both views and '
                 'give your own opinion. Write at least 250 words.'),
         model=[
          'This argument is usually conducted as though a right of access '
          'and a right of property were opposed in principle, and the '
          'historical record suggests something less dramatic: ownership of '
          'land has been a bundle of separable rights for eight centuries, '
          'and the question is only which of them are held together.',
          'The case against public access is strongest where it is stated '
          'narrowly. A farmer whose crop is trampled, whose livestock are '
          'disturbed during lambing, or who is liable for an injury on land '
          'they cannot supervise, has a complaint that no appeal to '
          'landscape or wellbeing answers. These costs are real, they fall '
          'on an identifiable person, and in most access regimes they are '
          'uncompensated.',
          'The case for access is also stronger than its advocates usually '
          'make it. It is not primarily about health or enjoyment, which are '
          'benefits a landowner could reasonably say are not their '
          'responsibility to provide. It is that exclusive possession of '
          'land is already qualified in every developed system — by '
          'planning control, by rights of way, by mineral and water rights, '
          'by compulsory purchase — so that access is a question of degree '
          'inside an arrangement everybody already accepts, rather than a '
          'new intrusion into something absolute.',
          'My own position is that a right of access is justified and that '
          'almost everything depends on its design. The countries where it '
          'works have three features in common: the right is to specified '
          'activities rather than general presence, it is suspended in '
          'stated circumstances such as lambing or standing crops, and the '
          'occupier’s liability is limited by statute so that access does '
          'not transfer a legal risk along with a public benefit.',
          'Without those three, a general right produces exactly the '
          'conflicts its opponents predict, and the predictions are then '
          'cited as evidence against the principle rather than against the '
          'drafting. That is the actual failure in most of the disputes I '
          'have read about, and it is a failure of design in a right that '
          'was worth having.'],
         notes=[
          'The introduction supplies a historical fact that reframes the '
          'question — ownership has always been separable — and the whole '
          'essay then operates inside that frame.',
          'Both cases are deliberately improved: the landowner’s complaint '
          'is stated at its narrowest and strongest, and the access case is '
          'moved off wellbeing onto something harder to answer. Improving '
          'both sides is the clearest signal of control at this level.',
          'The conclusion is a design rather than a verdict, with three '
          'named features, and the final paragraph explains what happens '
          'when the design is absent. Ending on the diagnosis of a common '
          'failure is stronger than ending on the recommendation.'],
         criterion=[('Reframing with a fact rather than an assertion',
                     'Task Response'),
                    ('Improving both cases before adjudicating',
                     'Task Response'),
                    ('A design with named features rather than a verdict',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Competing rights in one paragraph',
    explain=('Where two parties each hold a genuine right, the grammar has '
             'to keep both standing. These patterns assert one without '
             'denying the other.'),
    examples=['Ownership and access have been separable for centuries.',
              'The right to pass is real and it is narrow.',
              'Both parties hold a genuine right and each has been told it '
              'is the whole of the matter.',
              'The recorded route remains recorded; the permissive route is '
              'in addition to it.'],
    task='Rewrite each sentence so that both rights remain standing.',
    items=[('The public should be allowed to walk there.',
            'The public right to pass along the line is real and does not '
            'extend to the rest of the field.'),
           ('It is his land, so he decides.',
            'He owns the land, subject to a recorded path, a tenancy and a '
            'statutory water easement.'),
           ('Walkers have no business there.',
            'Walkers have a right to the recorded line and no claim on the '
            'land either side of it.'),
           ('The tenant should improve the soil.',
            'The tenant has the use of the land and no interest in an '
            'improvement that matures after the tenancy ends.'),
           ('The council must enforce the right.',
            'The council has a duty to keep the route open, which does not '
            'require it to refuse a properly made diversion.')]),
   vocab=[('tenure', 'the terms on which land is held'),
          ('permissive route', 'a path allowed by permission, not by '
           'right'),
          ('extinguish', 'to end a legal right permanently'),
          ('easement', 'a right over somebody else’s land'),
          ('occupier', 'the person in actual possession of land'),
          ('legal responsibility', 'being answerable in law for harm'),
          ('bundle of rights', 'the separable rights ownership consists '
           'of'),
          ('lambing', 'the season when sheep give birth')],
   expr=[('Ownership and access have been separable for centuries',
          'answers an absolutist claim with history'),
         ('I own the bits nobody else has a claim on',
          'defines ownership by what remains'),
         ('a situation that decays into one that resolves',
          'describes what a procedural fix achieves'),
         ('each entirely correct and nobody able to say so out loud',
          'describes a dispute between valid claims')],
   trans=['whereas', 'that said', 'the case against', 'my own position'],
  ),

  dict(
   sub='What a field produces',
   step=3,
   read=[
    dict(heading='Yield, inputs and what leaves the gate',
         kind='Data article',
         task='Matching information and table completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_FARM,
         paras=[
          'The chart follows one arable holding over thirty years with three '
          'series, each indexed so that 1993 equals 100. Indexing is what '
          'allows three quantities measured in different units — tonnes, '
          'pounds and a percentage — to share an axis, and it is also what '
          'makes the chart easy to misread.',
          'Yield per hectare rises throughout, from 100 to 144, with most of '
          'the gain in the first half of the period. Purchased inputs per '
          'hectare rise further and faster, from 100 to 186, and the gap '
          'between the two lines widens in every five-year interval shown.',
          'Soil organic matter falls throughout, from 100 to 74, and the '
          'decline is close to linear: roughly four points every five years '
          'with no interruption. It is the only one of the three series that '
          'moves in a single direction without variation.',
          'The relationship between the first two is the one a farm '
          'accountant would notice. Output rose by 44 per cent and the '
          'purchased inputs required rose by 86, so each additional unit '
          'cost more to obtain than the last. A margin can fall while a '
          'yield rises.',
          'The third series is the one an agronomist would notice, and the '
          'indexing conceals how serious it is. A fall from 100 to 74 on '
          'this index corresponds to a decline from 4.1 per cent organic '
          'matter to 3.0, and the agronomic threshold below which structure '
          'begins to fail is usually put at 2.0. The holding is not in '
          'trouble and is two decades from being so at the current rate.',
          'What cannot be read off the chart is causation, and the '
          'temptation to supply it is strong because a plausible story is '
          'available: inputs substituting for fertility as fertility '
          'declines. That story is consistent with the chart and so are '
          'several others, including a change of crop rotation, a change of '
          'tenant, and a national rise in input prices that would make the '
          'input line rise without any change in what was applied.',
          'The honest summary of the chart is therefore shorter than most '
          'readers want. Two series rise and one falls; the two that rise '
          'diverge from each other; and the three together are consistent '
          'with a farm obtaining more output from more purchased input on '
          'soil that is gradually losing the property that makes it a soil '
          'rather than a medium.'],
         items=[
          ('Which paragraph explains what indexing makes possible?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 0,
           'Three quantities in different units sharing an axis.'),
          ('Which paragraph gives the underlying percentages behind the '
           'index?', ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           '4.1 per cent falling to 3.0, against a threshold of 2.0.'),
          ('Which paragraph lists alternative explanations?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 2,
           'Rotation, tenant and input prices, all consistent with the '
           'chart.'),
          ('Yield index in 2023: ____________', None, '144',
           'Paragraph 2, against 186 for purchased inputs.'),
          ('Soil organic matter index in 2023: ____________', None, '74',
           'Paragraph 3, declining about four points every five years.'),
          ('The agronomic threshold for structural failure is usually put '
           'at ____________ per cent.', None, '2.0',
           'Paragraph 5, against a current level of 3.0.')])],
   listen=[
    dict(heading='An agronomist on measuring a farm', part='Part 4',
         task='A lecture on farm measurement', band='l4',
         qtype='Questions 39-44',
         figure=_FARM,
         script=[
          ('Agronomist', 'Three lines, thirty years, one farm, all indexed '
           'to a hundred in 1993. I am going to describe them, then tell you '
           'the four things this chart does not say, because that second '
           'list is longer than the first and is where the examinable '
           'material is.'),
          ('Agronomist', 'Yield goes from a hundred to a hundred and '
           'forty-four. Purchased inputs go from a hundred to a hundred and '
           'eighty-six. Soil organic matter goes from a hundred to '
           'seventy-four, almost perfectly straight, about four points every '
           'five years.'),
          ('Agronomist', 'The first thing worth saying is about the gap '
           'between the top two lines. Output up forty-four per cent, inputs '
           'up eighty-six. Each extra tonne is costing more to get than the '
           'one before it, and a farm can be increasing yield every year '
           'while its margin shrinks. Yield is not profit and these are not '
           'the same chart.'),
          ('Agronomist', 'Second: the indexing hides the magnitude of the '
           'third line. Seventy-four of a hundred sounds survivable. In the '
           'original units it is four point one per cent organic matter '
           'falling to three point zero, and the level at which soil '
           'structure starts to fail is usually taken as two. This farm is '
           'about twenty years from that at the current rate, which is not a '
           'crisis and is a direction.'),
          ('Agronomist', 'Third, and this is the one I want you to resist: '
           'the chart does not show that inputs are replacing fertility. '
           'That story fits. So does a change of rotation, a change of '
           'tenant, or a rise in the price of nitrogen, which would lift the '
           'input line without a single extra kilogram being applied.'),
          ('Agronomist', 'Fourth, an index hides its own base. If 1993 was '
           'an unusually bad year for yield, every subsequent point is '
           'flattered, and nothing on the chart tells you whether it was. '
           'When you are given an indexed series, the first question is '
           'always what happened in the base year.'),
          ('Agronomist', 'So the honest reading is short. Two up, one down, '
           'the two that are up diverging from each other, and a farm '
           'obtaining more output from more purchased input on soil that is '
           'losing the thing that makes it soil. Everything beyond that '
           'sentence is something you brought with you.'),
          ('Agronomist', 'One closing thought for those of you heading '
           'into advisory work. When a farmer shows you a chart like this, '
           'the useful question is not what it proves. It is which measure '
           'is missing, and on almost every farm chart I am shown the '
           'missing one is the cost of the inputs rather than their '
           'quantity.')],
         items=[
          ('The purchased input index reaches',
           ['144', '164', '186', '200'], 2,
           'Against 144 for yield over the same period.'),
          ('The gap between the top two lines shows that',
           ['yield is falling', 'each extra unit of output costs more to '
            'obtain', 'inputs are cheaper', 'the farm is profitable'], 1,
           'So a margin can shrink while yield rises.'),
          ('In the original units, soil organic matter fell from',
           ['4.1 to 3.0 per cent', '7.4 to 4.0 per cent',
            '10 to 7.4 per cent', '2.0 to 1.5 per cent'], 0,
           'Against a structural failure threshold of about 2.0.'),
          ('Which explanation does he tell students to resist?',
           ['That yields rose', 'That inputs are replacing fertility',
            'That the soil is declining', 'That the farm is one '
            'holding'], 1,
           'Because rotation, tenancy and prices fit equally well.'),
          ('The fourth thing an index hides is its own',
           ['units', 'base year', 'source', 'frequency'], 1,
           'An unusually bad base year flatters everything after it.'),
          ('His honest reading is that the three series are consistent '
           'with', ['a failing farm', 'more output from more purchased '
            'input on declining soil', 'a profitable expansion',
            'a change of ownership'], 1,
           'With everything beyond that brought by the reader.')])],
   speak=dict(
    part='Part 3', focus='Measuring a farm',
    intro=('Five or six sentences. Try once to say what an index conceals.'),
    qs=['How should the success of a farm be measured?',
        'Is producing more always better?',
        'What do agricultural statistics leave out?',
        'Should farmers be judged on their output?'],
    shape=[('answer', 'Not by yield alone, which can rise while the margin '
            'falls.'),
           ('support', 'On one holding output rose forty-four per cent and '
            'inputs eighty-six.'),
           ('follow-up', 'So each additional tonne cost more than the one '
            'before it.'),
           ('support', 'And the soil measure fell throughout, which an '
            'index makes look milder than it is.'),
           ('follow-up', 'Seventy-four out of a hundred sounds survivable; '
            'in the real units it is most of the way to a threshold.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Yield, input use and soil organic matter',
         prompt=('The graph below shows yield, purchased input use and soil '
                 'organic matter on one holding over thirty years, each '
                 'indexed to 1993. Summarise the information by selecting '
                 'and reporting the main features, and make comparisons '
                 'where relevant. Write at least 150 words.'),
         figure=_FARM,
         model=[
          'The line graph shows three measures for a single agricultural '
          'holding between 1993 and 2023, each indexed so that its 1993 '
          'value is 100. Overall, two of the series rise and one falls '
          'throughout, with purchased inputs rising considerably faster than '
          'yield, and soil organic matter declining steadily across the '
          'whole period.',
          'Yield per hectare rises in every interval, from 100 to 144, '
          'although the increase slows markedly: it gains 24 points in the '
          'first decade and only 6 in the last. Purchased inputs rise '
          'throughout and by more, reaching 186 by 2023, with the gap '
          'between the two series widening at every point measured.',
          'Soil organic matter is the only series to decline, and its path '
          'is the most regular of the three. It falls from 100 to 74, losing '
          'between three and five points in each five-year interval, with no '
          'period of recovery or stability at any point.',
          'The clearest comparison is between the two rising series. Inputs '
          'increase by 86 points against 44 for yield, so that by 2023 '
          'inputs stand roughly 42 points above yield, having started level '
          'with it thirty years earlier.'],
         notes=[
          'Each series is described as a direction and a shape, and the '
          'yield paragraph reports that the rise slows — 24 points in the '
          'first decade against 6 in the last. On an indexed chart the '
          'change in rate is usually the finding.',
          'The answer reports no causes. The chart cannot show whether '
          'inputs rose because fertility fell, and an answer saying so would '
          'be marked down for including unsupported information however '
          'plausible it sounds.',
          'The final paragraph compares the two rising series in index '
          'points, which is the only honest unit available: the underlying '
          'quantities are tonnes and pounds and cannot be compared '
          'directly.'],
         criterion=[('Reporting the change in rate, not just the direction',
                     'Task Achievement'),
                    ('No causal claim anywhere in the answer',
                     'Task Achievement'),
                    ('Comparing in index points because the units differ',
                     'Lexical Resource')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Three series, two axes, one honest comparison',
    explain=('Indexed series can be compared with each other and not with '
             'their own underlying quantities. These patterns keep the '
             'comparison inside what the chart supports.'),
    examples=['Yield and inputs rise together while the third line falls '
              'throughout.',
              'Inputs gained 86 index points against 44 for yield.',
              'The index conceals the magnitude of the underlying change.',
              'Nothing on the chart distinguishes a price rise from a '
              'volume rise.'],
    task='Rewrite each claim so that it stays within what an indexed chart '
         'shows.',
    items=[('Farmers are using more fertiliser.',
            'The purchased input index rises from 100 to 186, which may '
            'reflect quantity, price or both.'),
           ('The soil is nearly exhausted.',
            'Soil organic matter falls by 26 index points across the '
            'period, at a steady rate.'),
           ('Higher inputs caused the yield rise.',
            'Yield and input use both rise, and the chart does not establish '
            'a relationship between them.'),
           ('Yields have risen a lot.',
            'Yield rises by 44 index points, with the rate of increase '
            'falling from 24 points per decade to 6.'),
           ('Inputs are now double yields.',
            'The input index stands 42 points above the yield index, both '
            'having started at 100.')]),
   vocab=[('indexed series', 'figures expressed against a base of 100'),
          ('base year', 'the year an index is set to 100'),
          ('purchased input', 'anything bought in and applied to a crop'),
          ('gross margin', 'output value less the variable costs of '
           'producing it'),
          ('arable', 'land used for growing crops'),
          ('farm unit', 'a farm treated as one business'),
          ('agronomic', 'to do with the science of crop production'),
          ('medium', 'a material that holds a plant without feeding it')],
   expr=[('Yield and inputs rise together while the third line falls '
          'throughout', 'states a three-series pattern in one clause'),
         ('yield is not profit and these are not the same chart',
          'separates two measures readers conflate'),
         ('an index hides its own base',
          'names a limitation of a presentation'),
         ('everything beyond that sentence is something you brought with '
          'you', 'distinguishes data from inference')],
   trans=['while', 'by contrast', 'taken together', 'the honest reading'],
  ),

  dict(
   sub='Why the soil is not in the accounts',
   step=4,
   read=[
    dict(heading='The asset that is consumed without appearing',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'A farm business keeps accounts that record the value of its land, '
          'its buildings, its machinery and its stock. The accounts do not '
          'record the condition of the soil, which is the asset that '
          'produces the income the accounts exist to measure. This is not an '
          'oversight by any specific farmer; it is a property of the '
          'accounting conventions used everywhere, and it has consequences '
          'that are visible in the behaviour of the industry. The convention '
          'is not arbitrary either: it records what was bought and what was '
          'sold, and a soil was neither.',
          'The structure of the problem is a distinction between income and '
          'capital. A harvest is income: it is produced in a year, sold in '
          'that year and recorded in that year. The soil is capital: it took '
          'centuries to form, it is drawn on each year, and the drawing down '
          'is not recorded anywhere, because no convention exists for '
          'depreciating a natural asset that nobody bought. The same gap '
          'appears wherever a productive asset arrived without a '
          'transaction, which is why fisheries, aquifers and old-growth '
          'timber present the identical problem in their own accounts.',
          'Machinery, by contrast, is depreciated carefully. A combine '
          'harvester bought for three hundred thousand appears on the '
          'balance sheet at a declining value each year, and the decline is '
          'treated as a cost of the output it produced. The same logic '
          'applied to soil would record a farm consuming its organic matter '
          'as having earned less than its sales suggest, and no standard '
          'requires this of anybody. Several large agricultural '
          'businesses now do it voluntarily in management accounts that '
          'are not published, which suggests the calculation is possible '
          'and that the obstacle is disclosure rather than arithmetic.',
          'The consequence is that two farms with identical accounts may be '
          'in wholly different positions. One has maintained its soil and '
          'earned its profit; the other has produced the same profit by '
          'drawing down an asset that will have to be rebuilt over decades '
          'or replaced by purchased inputs for ever. A buyer, a lender and a '
          'tax authority all see the same figures. The difference becomes '
          'visible only when the second farm needs to buy the fertility '
          'back, at which point it appears as an unusually large input bill '
          'with no explanation attached.',
          'Tenancy sharpens this into something close to a designed '
          'incentive. A tenant who rebuilds organic matter over four years '
          'confers the benefit on the landowner and bears the cost '
          'personally, and most agricultural tenancies are shorter than the '
          'period over which soil improvements mature. The rational tenant '
          'farms for the term of the tenancy, and does so without any '
          'intention of degrading anything. Longer tenancies are the '
          'obvious remedy and are resisted by landowners for reasons that '
          'have nothing to do with soil and everything to do with wanting '
          'the land back.',
          'Natural capital accounting is the proposed remedy and it has been '
          'discussed for thirty years. The principle is to place a monetary '
          'value on the stock of a natural asset and to record changes in it '
          'as income or loss, bringing the soil onto the balance sheet in '
          'the way the combine already is. The arguments for it are '
          'straightforward and the arguments against it are more interesting '
          'than its advocates ordinarily allow. Three of them recur, and the '
          'third is the one that has actually stopped the reform rather than '
          'merely delayed it.',
          'The first difficulty is valuation. A soil has no market price '
          'separable from the land it is part of, and valuations are '
          'therefore constructed from an estimate of future output, which '
          'makes the asset value a function of the income it produces rather '
          'than an independent check on it. The circularity is not fatal and '
          'it is real.',
          'The second is that measurement is expensive relative to the '
          'holdings being measured. A credible organic matter assessment '
          'costs several hundred pounds per field and must be repeated to '
          'show a trend, which on a small holding can exceed the margin on '
          'the field in question. Schemes that have tried it have '
          'universally reduced the sampling density until the result became '
          'too noisy to act on. That is a specific and repeated failure '
          'rather than a general suspicion about cost.',
          'The third objection is the most substantial and is rarely made by '
          'opponents, who prefer the first two. Bringing soil onto a balance '
          'sheet makes it collateral. An asset that can be valued can be '
          'borrowed against, and a farm that has borrowed against its soil '
          'has a new and powerful reason to report its condition '
          'favourably, which is the opposite of what the reform was for.',
          'None of this argues for leaving things as they are, and the '
          'position most practitioners have arrived at is narrower than full '
          'natural capital accounting. Record the physical quantity rather '
          'than a monetary value; require it at the start and end of a '
          'tenancy, where the incentive problem is sharpest and the cost is '
          'justified by the transaction; and leave it off the balance sheet '
          'wholly, which addresses the third objection by declining to '
          'create the asset.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['Income and capital', 'How machinery is treated differently',
            'The effect on tenancies', 'Valuation difficulties'], 1,
           'A combine is depreciated and soil is not.'),
          ('Choose the best heading for paragraph 5.',
           ['The effect on tenancies', 'Natural capital accounting',
            'Valuation difficulties', 'The collateral objection'], 0,
           'A tenant confers the benefit on the owner and bears the '
           'cost.'),
          ('Choose the best heading for paragraph 9.',
           ['Valuation difficulties', 'The cost of measurement',
            'The collateral objection', 'A narrower proposal'], 2,
           'An asset that can be valued can be borrowed against.'),
          ('The writer believes farmers deliberately conceal soil '
           'decline.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 calls it a property of accounting conventions '
           'rather than an oversight.'),
          ('The writer believes full natural capital accounting should be '
           'adopted.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph proposes something deliberately '
           'narrower.'),
          ('No convention exists for ____________ a natural asset that '
           'nobody bought.', None, 'depreciating',
           'Paragraph 2, unlike machinery which is depreciated '
           'carefully.'),
          ('The writer says a valued asset can be ____________ against.',
           None, 'borrowed',
           'Paragraph 9, creating a reason to report its condition '
           'favourably.'),
          ('The narrower proposal records a ____________ quantity rather '
           'than a monetary value.', None, 'physical',
           'The final paragraph, required at the start and end of a '
           'tenancy.')])],
   listen=[
    dict(heading='A lecture on natural capital', part='Part 4',
         task='A lecture on accounting for natural assets', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'A farm’s accounts record its land, its buildings, '
           'its machinery and its stock. They do not record the condition of '
           'its soil, which is the thing that produces everything else. I '
           'want to explain why that is, and then why the obvious fix is '
           'more dangerous than it looks.'),
          ('Lecturer', 'The distinction is income and capital. The harvest '
           'is income: made this year, sold this year, recorded this year. '
           'The soil is capital: formed over centuries, drawn on annually, '
           'and recorded nowhere, because there is no convention for '
           'depreciating an asset nobody purchased.'),
          ('Lecturer', 'Compare the combine. Three hundred thousand pounds, '
           'depreciated over its life, and that depreciation is treated as a '
           'cost of the grain it harvested. Do the same arithmetic for soil '
           'and a farm drawing down organic matter has earned less than its '
           'sales suggest. No accounting standard anywhere requires that '
           'calculation.'),
          ('Lecturer', 'Now the consequence, which is sharpest in tenancy. A '
           'tenant who spends four years rebuilding organic matter has '
           'enriched the landlord and impoverished himself, and most '
           'tenancies are shorter than the time soil improvement takes. The '
           'rational tenant farms for the term, and nobody involved intends '
           'any harm whatever.'),
          ('Lecturer', 'So: natural capital accounting. Put a monetary value '
           'on the stock and record the change as income or loss. Thirty '
           'years of advocacy. Three objections, and the one that worries me '
           'is the third.'),
          ('Lecturer', 'Valuation is circular, because a soil has no price '
           'apart from the land and so you value it from the output it '
           'produces. Measurement is expensive, several hundred pounds a '
           'field, repeated, which on a small holding exceeds the margin. '
           'Those two are real and they are solvable.'),
          ('Lecturer', 'The third is not. An asset that can be valued can be '
           'borrowed against. Put soil on a balance sheet and within a '
           'decade farms are lending against it, at which point every farmer '
           'has a powerful financial reason to report good soil condition, '
           'which is precisely the opposite of what the reform was for. So '
           'what I argue for is the unglamorous version: measure the '
           'physical quantity, require it at the start and end of a tenancy, '
           'and keep it off the balance sheet entirely.'),
          ('Lecturer', 'And notice what that proposal gives up, because '
           'you should always know. It gives up any ability to compare one '
           'farm with another in money, which is what the reformers '
           'actually wanted. I think that is a price worth paying and I '
           'would not pretend it is free.')],
         items=[
          ('Soil is not recorded because there is no convention for',
           ['valuing land', 'depreciating an asset nobody purchased',
            'measuring organic matter', 'taxing natural assets'], 1,
           'Unlike machinery, which is depreciated carefully.'),
          ('If soil were treated like machinery, a farm drawing it down '
           'would appear to have', ['earned more than its sales',
            'earned less than its sales suggest', 'no profit at all',
            'a larger asset base'], 1,
           'Because the depreciation would be a cost of the output.'),
          ('The tenancy problem is that a tenant who rebuilds soil',
           ['breaks the tenancy', 'enriches the landlord and impoverishes '
            'himself', 'loses the crop', 'must pay more rent'], 1,
           'Most tenancies being shorter than soil improvement takes.'),
          ('Valuation is circular because a soil',
           ['changes constantly', 'has no price apart from the land, so '
            'is valued from its output', 'cannot be measured',
            'is owned jointly'], 1,
           'Making the asset value a function of the income.'),
          ('The objection that worries him most is that soil on a balance '
           'sheet becomes', ['taxable', 'collateral', 'tradeable',
            'insurable'], 1,
           'Giving every farmer a reason to report good condition.'),
          ('His own proposal is to measure the physical quantity and',
           ['value it annually', 'keep it off the balance sheet',
            'report it publicly', 'tax it'], 1,
           'Required at the start and end of a tenancy.')])],
   speak=dict(
    part='Part 3', focus='What a balance sheet leaves out',
    intro=('Five or six sentences. Try once to distinguish income from '
           'capital.'),
    qs=['What do financial accounts fail to capture?',
        'Should natural resources be given a monetary value?',
        'Who should be responsible for the condition of farmland?',
        'Can long-term damage be measured in money?'],
    shape=[('answer', 'Mostly things that are drawn down rather than '
            'bought.'),
           ('support', 'A harvest is income and the soil that produced it '
            'is capital.'),
           ('follow-up', 'Machinery gets depreciated and soil does not.'),
           ('support', 'I am cautious about simply putting a price on '
            'it.'),
           ('follow-up', 'Because anything with a value becomes something '
            'to borrow against, which creates a reason to overstate it.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='The premise under each idea, before writing',
         prompt=('Should farmers be paid for soil health rather than for '
                 'output? Brainstorm ten ideas, run the six tests, and name '
                 'the premise under each survivor. Do not write the essay '
                 'yet.'),
         plan=('Payments should be made for measured physical condition at '
               'defined moments rather than for soil health in general, '
               'because every argument for outcome payment rests on a '
               'premise about measurement cost that holds only at '
               'transaction points',
               [('The outcome-payment argument rests on a premise that the '
                 'outcome can be measured often enough to pay for',
                 ['a credible assessment costs several hundred pounds a '
                  'field',
                  'schemes reducing sampling have produced unusable '
                  'noise']),
                ('At a transaction point the premise holds, because the '
                 'cost is carried by the transaction',
                 ['a tenancy start and end already involve valuation',
                  'the incentive problem is also sharpest exactly '
                  'there'])]),
         notes=[
          'The premise here is about cost rather than about truth, which is '
          'a kind worth recognising. "This can be measured" is usually '
          'true; "this can be measured at a price somebody will pay, as '
          'often as the policy requires" is the premise that actually '
          'carries the argument.',
          'Notice how the thesis is built: the premise fails in general and '
          'holds in a specific case, so the policy is restricted to that '
          'case rather than abandoned. Finding where a failed premise does '
          'hold is the most constructive use of this tool.',
          'This also disposes of several brainstormed ideas at once. '
          'Anything that depended on frequent measurement — annual bonuses, '
          'continuous monitoring, index-linked payments — shares the failed '
          'premise and goes together.'],
         criterion=[('Recognising a premise about cost rather than truth',
                     'Task Response'),
                    ('Restricting a policy to where the premise holds',
                     'Task Response')],
         instruct='  Produce the brainstorm, the tests and the premise '
                  'under each survivor. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Accounting boundaries as hidden premises',
    explain=('Every account draws a line around what counts, and the line '
             'is a premise nobody states. Naming it is frequently the '
             'strongest move available in an essay about measurement.'),
    examples=['A harvest is income; the soil that produced it is capital, '
              'and only one is counted.',
              'Two farms with identical accounts may be in entirely '
              'different positions.',
              'The convention records what was purchased and not what was '
              'consumed.',
              'The asset value becomes a function of the income it '
              'produces.'],
    task='Rewrite each sentence so that the accounting boundary is named.',
    items=[('The farm was profitable.',
            'The farm recorded a profit on a convention that counts the '
            'harvest and not the organic matter consumed to produce it.'),
           ('Machinery costs are accounted for.',
            'Machinery is depreciated as a cost of output; soil is drawn '
            'down without any corresponding entry.'),
           ('The two farms performed the same.',
            'The two farms report identical figures, one having maintained '
            'its soil and one having spent it.'),
           ('Nothing was recorded.',
            'The decline appears in no account, because no convention '
            'requires the depreciation of an asset nobody bought.'),
           ('Tenants farm for the short term.',
            'A tenancy shorter than the maturation period of soil '
            'improvement makes short-term management the rational '
            'choice.')]),
   vocab=[('natural capital', 'natural assets treated as a stock'),
          ('depreciation', 'recording the using-up of an asset as a cost'),
          ('balance sheet', 'a statement of what is owned and owed'),
          ('collateral', 'an asset pledged against a loan'),
          ('using-up', 'the gradual consumption of a stock'),
          ('convention', 'an agreed practice rather than a law of '
           'nature'),
          ('sampling density', 'how many samples are taken per area'),
          ('maturation', 'the time an investment takes to produce a '
           'return')],
   expr=[('A harvest is income; the soil that produced it is capital',
          'states an accounting distinction that drives behaviour'),
         ('nobody involved intends any harm whatever',
          'rules out intention as the explanation'),
         ('an asset that can be valued can be borrowed against',
          'names an unintended consequence of a reform'),
         ('addresses the objection by declining to create the asset',
          'describes a solution by what it refuses to do')],
   trans=['consequently', 'which in turn', 'as a result',
          'the first difficulty'],
  ),

  dict(
   sub='Whether a payment can measure it',
   step=5,
   read=[
    dict(heading='Three schemes that paid for an outcome nobody could '
                 'measure',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'Paying for environmental outcomes rather than for actions is the '
          'standard recommendation of the economics of agricultural policy '
          'and has been for forty years. The logic is unanswerable: paying '
          'for an action buys the action whether or not it produces '
          'anything, while paying for the outcome buys the thing actually '
          'wanted and leaves the method to the person who knows the field. '
          'Three schemes have attempted it at scale and the comparison is '
          'instructive, not least because two of the three were '
          'abandoned and the survivor is the one the economics advises '
          'against.',
          'The first paid for measured increases in soil organic matter, at '
          'a rate per tonne of carbon, with sampling at entry and after five '
          'years. It was abandoned in its fourth year. The difficulty was '
          'not fraud but noise: organic matter varies by more within a '
          'single field than the scheme was paying for between years, and '
          'the sampling density required to detect the change cost more than '
          'the payment. Nothing about that was foreseeable from the design '
          'documents, and it was wholly foreseeable from a day in a field '
          'with an auger.',
          'The scheme’s designers had anticipated this and specified a '
          'sampling protocol that would have worked. It was reduced twice '
          'during implementation on cost grounds, each reduction defensible '
          'on its own, and the final protocol could not distinguish a real '
          'improvement from a sampling artefact in approximately half of '
          'participating fields. The sequence is worth noting for its own '
          'sake: a sound design degraded by a series of defensible cost '
          'reductions into one that could not do its job.',
          'The second scheme paid for a bird population index on '
          'participating farms, assessed by an independent surveyor. It ran '
          'for eleven years and produced a measurable rise in the index. It '
          'was also the subject of a finding that twenty-three per cent of '
          'the improvement was attributable to participating farms '
          'concentrating existing habitat near survey points rather than '
          'creating additional habitat. The remaining seventy-seven per '
          'cent was additional and is the largest verified gain any such '
          'scheme has produced.',
          'That finding is ordinarily reported as gaming and the term is '
          'misleading. The farms did what the payment asked: the index rose '
          'and the surveyor measured it correctly. What failed was the '
          'assumption that an index measured at defined points would behave '
          'like the quantity it stood for when the people being measured '
          'knew where the points were. An assumption of that kind is '
          'invisible in a design document because nobody writes down the '
          'things they take for granted.',
          'The third scheme avoided outcome measurement altogether and paid '
          'for a list of actions, which is the arrangement the economics '
          'advises against. It is still running, it is the cheapest of the '
          'three to administer, and its ecological results are the weakest '
          'of the three and are positive.',
          'The comparison yields a conclusion that neither camp in this '
          'debate finds comfortable. Outcome payment is better in principle '
          'and is bounded by measurement cost, which is a practical '
          'constraint rather than a theoretical one, and the constraint '
          'binds hardest exactly where the environmental benefit is most '
          'diffuse. Action payment is worse in principle and works, '
          'modestly, everywhere. Choosing between a principle that fails '
          'and a compromise that works is uncomfortable and is the choice '
          'actually on offer.',
          'There is a second finding about proxies that generalises well '
          'beyond agriculture. Any proxy measured at known points will, over '
          'time, diverge from the thing it proxies for, and the divergence '
          'is produced by the ordinary behaviour of people responding to a '
          'measurement rather than by anybody deciding to cheat. Designing '
          'around this requires either unpredictable measurement points or '
          'a proxy that cannot be concentrated. Neither is easy and the '
          'first is cheaper, which is why unannounced inspection has '
          'quietly replaced published survey points in several schemes '
          'since.',
          'The practical synthesis adopted by several administrations is a '
          'hybrid that the literature does not much discuss. Pay for actions '
          'as the base layer, because it works and is cheap; pay a premium '
          'for measured outcomes only where measurement is cheap relative to '
          'the benefit, which in practice means a small number of indicators '
          'on larger holdings; and measure everything else at transaction '
          'points, where somebody else is paying for a valuation anyway.',
          'The intellectual cost of that synthesis is that it abandons a '
          'clean principle for an arrangement that has to be justified case '
          'by case. The practical benefit is that it is the only version of '
          'the policy that has run for more than a decade anywhere without '
          'being abandoned or quietly reclassified, which is a lower '
          'standard than the economics proposes and is the standard that '
          'actual schemes are judged by.'],
         items=[
          ('Which paragraph explains why the first scheme failed?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'Organic matter varies by more within a field than the scheme '
           'paid for.'),
          ('Which paragraph rejects the word "gaming"?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 1,
           'The farms did what the payment asked and the index rose.'),
          ('Which paragraph describes the hybrid arrangement?',
           ['Paragraph 7', 'Paragraph 8', 'Paragraph 9',
            'Paragraph 10'], 2,
           'Actions as a base layer with outcome premiums where '
           'measurement is cheap.'),
          ('The writer believes the first scheme failed because of '
           'dishonesty.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 says the difficulty was noise rather than fraud.'),
          ('The writer believes outcome payment is wrong in principle.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 calls it better in principle and bounded by '
           'measurement cost.'),
          ('In the second scheme, ____________ per cent of the improvement '
           'came from concentrating existing habitat.', None,
           'twenty-three',
           'Paragraph 4, near the survey points rather than creating new '
           'habitat.'),
          ('The writer says any proxy measured at known points will '
           '____________ from what it stands for.', None, 'diverge',
           'Paragraph 8, through ordinary behaviour rather than cheating.'),
          (
           'Actual schemes are judged by running for a ____________ '
           'without being abandoned.', None, 'decade',
           'The final paragraph, which he calls lower than the '
           'economics proposes.')])],
   listen=[
    dict(heading='A policy adviser and a farmer disagree', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Dr Ferreira-Oyelude advises on agricultural payments. '
           'Mr Lindqvist-Abara farms twelve hundred hectares and has been in '
           'all three schemes.'),
          ('Ferreira-Oyelude', 'I will begin with the concession my '
           'profession owes. We have recommended outcome payment for forty '
           'years, the two schemes that tried it properly have both failed, '
           'and the one still running pays for actions, which is what we '
           'said not to do.'),
          ('Lindqvist-Abara', 'Then I will concede mine, because farmers are '
           'not blameless here. The bird scheme worked and part of what it '
           'measured was us moving habitat towards the survey points. I did '
           'that. I did not think of it as cheating and I would not do it '
           'again now that somebody has written it down.'),
          ('Ferreira-Oyelude', 'That is the honest version of a finding '
           'that gets reported as fraud, and it was not fraud. You did what '
           'the payment asked. The design assumed you did not know where the '
           'survey points were.'),
          ('Lindqvist-Abara', 'Everybody knew where the survey points were. '
           'They were in the agreement.'),
          ('Ferreira-Oyelude', 'Which is the whole lesson in one sentence. '
           'Now, the soil scheme. That one I would defend differently, '
           'because the design was right and the implementation reduced the '
           'sampling twice.'),
          ('Lindqvist-Abara', 'And I will tell you what it was like from my '
           'end. I was paid for an increase I could not see, measured by a '
           'method I did not understand, and in the second year my neighbour '
           'got a payment and I did not on fields that are the same soil '
           'and the same rotation. That is corrosive in a way I do not think '
           'your papers capture.'),
          ('Ferreira-Oyelude', 'They do not, and the noise explains your '
           'neighbour entirely. A scheme that pays two identical farms '
           'differently teaches everybody that it is a lottery, and after '
           'that the behaviour it is trying to encourage stops being '
           'connected to the money in anybody’s mind.'),
          ('Lindqvist-Abara', 'So what do you want me to be paid for?'),
          ('Ferreira-Oyelude', 'Actions, for most of it, which I would have '
           'refused to say ten years ago. Outcomes where the measurement is '
           'cheap, which is a short list. And a proper soil measurement at '
           'the start and end of a tenancy, which is the one place the cost '
           'is already being incurred by somebody.'),
          ('Lindqvist-Abara', 'That last one I would sign tomorrow, and I '
           'would want it compulsory, because a voluntary version is signed '
           'by the farms with good soil.'),
          ('Ferreira-Oyelude', 'Compulsory at the transaction only, '
           'though. The moment anybody proposes it annually we are back in '
           'the scheme that collapsed, and I would rather have one '
           'measurement that everybody trusts than six that nobody '
           'does.')],
         items=[
          ('Ferreira-Oyelude concedes that',
           ['farmers cheated', 'the two outcome schemes failed while the '
            'action scheme runs', 'the data was poor',
            'payments were too low'], 1,
           'Which is the opposite of what her profession recommended.'),
          ('Lindqvist-Abara admits that he',
           ['falsified records', 'moved habitat towards survey points',
            'left the scheme early', 'under-reported his land'], 1,
           'Without thinking of it as cheating at the time.'),
          ('The design of the bird scheme assumed that farmers',
           ['would create habitat', 'did not know where the survey points '
            'were', 'would not participate', 'would under-report'], 1,
           'Though the points were stated in the agreement.'),
          ('He says the soil scheme was corrosive because',
           ['payments were late', 'identical farms were paid differently',
            'the sampling was intrusive', 'the rate was too low'], 1,
           'Which teaches everybody that the scheme is a lottery.'),
          ('What does she now recommend for most payments?',
           ['Outcomes', 'Actions', 'A mixture of both at every farm',
            'No payment'], 1,
           'With outcome payments only where measurement is cheap.'),
          ('What does he say should be compulsory?',
           ['Annual soil testing', 'Soil measurement at the start and end '
            'of a tenancy', 'Habitat creation', 'Public reporting'], 1,
           'Because a voluntary version is signed by farms with good '
           'soil.')])],
   speak=dict(
    part='Part 3', focus='Paying for things that are hard to see',
    intro=('The hardest turn in the unit. Try once to say that a proxy '
           'drifts from what it stands for.'),
    qs=['Should people be paid for results or for effort?',
        'What happens when a measure becomes a target?',
        'How should governments reward things that are hard to measure?',
        'Is it fair to pay two people differently for the same work?'],
    shape=[('answer', 'For results where the result can be measured '
            'cheaply, and for actions otherwise.'),
           ('support', 'One scheme paid for soil carbon and the measurement '
            'cost more than the payment.'),
           ('follow-up', 'Another paid for a bird index and farms moved '
            'habitat towards the survey points.'),
           ('support', 'Which is not cheating; it is doing what the payment '
            'asked.'),
           ('follow-up', 'Any proxy measured at known points drifts away '
            'from the thing it stands for.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Paying farmers for environment rather than food',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say farmers should be paid for '
                 'environmental benefits rather than for producing food. '
                 'Discuss both views and give your own opinion. Write at '
                 'least 250 words.'),
         model=[
          'The two positions here are both arguments about what payment '
          'should be attached to, and both are stated as though the '
          'attaching were the difficult part. It is not: the difficult part '
          'is measurement, and once that is recognised the disagreement '
          'turns into a question about which benefits can be measured at a '
          'cost worth paying.',
          'The case for paying for environmental benefits is close to '
          'unanswerable as economics. Food has a market and the price '
          'signals how much is wanted; clean water, pollinators and stable '
          'soil have no market and are produced incidentally or not at all. '
          'Paying for what the market already pays for is a subsidy; paying '
          'for what it does not is a correction.',
          'The case for continuing to support food production is weaker in '
          'principle and is usually put badly, as an argument about national '
          'security. Its better form is about scale: a payment system that '
          'ignores output entirely has no mechanism for keeping land in '
          'agricultural use at all, and the environmental benefits in '
          'question are largely produced by farmed landscapes rather than by '
          'abandoned ones.',
          'What decides between them, in practice, is neither argument. Two '
          'large schemes have paid for measured environmental outcomes. One '
          'collapsed because the measurement cost more than the payment and '
          'the reduced sampling could not distinguish a real improvement '
          'from noise. The other succeeded and was found to owe '
          'twenty-three per cent of its improvement to habitat being moved '
          'towards known survey points — not fraud, but the ordinary '
          'consequence of measuring a proxy at places people can see.',
          'My own position follows from that. Pay for actions as the base, '
          'because it is cheap and demonstrably produces a modest benefit; '
          'add outcome payments only for the small number of indicators that '
          'can be measured cheaply and cannot be concentrated; and require '
          'physical soil measurement at the start and end of a tenancy, '
          'where the incentive problem is sharpest and somebody is paying '
          'for a valuation anyway. That is less elegant than either position '
          'in the debate, and it is the only version that has survived a '
          'decade in practice.'],
         notes=[
          'The introduction identifies what both sides treat as easy — '
          'measurement — and makes it the subject. A prompt about principle '
          'answered on implementation is a legitimate and often superior '
          'move, provided the principle is also addressed.',
          'Paragraph 4 brings evidence that neither position anticipated, '
          'and reads the second scheme carefully: twenty-three per cent from '
          'concentration, described as ordinary behaviour rather than '
          'cheating. Refusing the pejorative description is what makes the '
          'analysis credible.',
          'The conclusion is a three-part design and admits it is '
          'inelegant. Preferring what has survived to what is clean is a '
          'defensible position and should be stated as a choice rather than '
          'smuggled in.'],
         criterion=[('Making what both sides treat as easy the subject',
                     'Task Response'),
                    ('Reading evidence carefully rather than pejoratively',
                     'Task Response'),
                    ('Preferring what works and saying so',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Proxy measures and what they invite',
    explain=('Writing about measurement effects requires describing '
             'behaviour that is rational and unwanted at once. These '
             'patterns do it without accusing anybody.'),
    examples=['What can be measured gets paid for, and what gets paid for '
              'gets produced.',
              'The farms did what the payment asked.',
              'Any proxy measured at known points diverges from what it '
              'stands for.',
              'The design assumed the participants did not know where the '
              'points were.'],
    task='Rewrite each sentence so that the behaviour is rational rather '
         'than dishonest.',
    items=[('Farmers cheated the bird scheme.',
            'Participants concentrated existing habitat near the survey '
            'points, which the payment rewarded and the design had not '
            'anticipated.'),
           ('The measure was gamed.',
            'The proxy diverged from the quantity it represented, as any '
            'proxy measured at known points will.'),
           ('They only did what they were paid for.',
            'Participants responded to the measure rather than to the '
            'intention behind it, which is what a measure is for.'),
           ('The scheme was a failure.',
            'The scheme achieved its stated indicator and about a quarter of '
            'the movement reflected relocation rather than creation.'),
           ('People exploit any system.',
            'Any system that pays on a measurement will shift behaviour '
            'towards the measurement, in proportion to how visible it '
            'is.')]),
   vocab=[('proxy measure', 'something measured in place of what is '
           'wanted'),
          ('outcome payment', 'payment for a result rather than an '
           'action'),
          ('action payment', 'payment for carrying out a specified '
           'practice'),
          ('random variation', 'fluctuation that obscures a real change'),
          ('survey point', 'a fixed location where a measurement is '
           'taken'),
          ('indicator', 'a measurable stand-in for a broader condition'),
          ('hybrid', 'an arrangement combining two approaches'),
          ('administer', 'to run a scheme day to day')],
   expr=[('What can be measured gets paid for, and what gets paid for gets '
          'produced', 'states the central risk of proxy payment'),
         ('the difficulty was not fraud but noise',
          'corrects the expected diagnosis'),
         ('a scheme that pays two identical farms differently teaches '
          'everybody that it is a lottery',
          'describes how a design destroys its own incentive'),
         ('a voluntary version is signed by the farms with good soil',
          'names a selection effect in one clause')],
   trans=['admittedly', 'and yet', 'on balance', 'what decides between '
          'them'],
  ),
 ],
 technique=dict(
  title='Three series on two axes without misleading anyone',
  body=('Three series on one chart almost always means indexing, a second '
        'axis, or both, and each carries a specific risk you have to write '
        'around. An indexed series can be compared with another indexed '
        'series in points, and cannot be compared with its own underlying '
        'quantity: a fall from 100 to 74 may be a catastrophe or a trifle '
        'depending on units the chart does not show. A second axis makes two '
        'lines cross at a point the designer chose, so a crossing on a '
        'two-axis chart is not a finding. Say what the base is, compare in '
        'the units the chart actually provides, and never report a crossing '
        'between series on different axes as though the two quantities had '
        'become equal.'),
  panel=[('Find the base',
          '"Indexed to 1993 = 100" means every statement is relative to '
          'that year. Say so once.'),
         ('Compare in index points',
          'Series on one index compare with each other. None of them '
          'compares with tonnes or pounds.'),
         ('Crossings on two axes are artefacts',
          'Where two lines use different axes, their crossing is a choice '
          'of scale, not an event.'),
         ('Report direction, rate and change of rate',
          'With three series the shape of each is the content: rising, '
          'rising more slowly, falling steadily.')],
  task='Take the chart in cycle 3. Write the Overall statement, then one '
       'comparison that the indexing permits and one that it does not.',
  qs=['What is the base year and what does 100 mean?',
      'Which comparisons between the three series are legitimate?',
      'What would you need to know to judge the size of the fall?',
      'Is there a crossing, and does it mean anything?',
      'Write one sentence about a change of rate rather than a '
      'direction.']),
 outlining=dict(
  title='Premise naming, then write from the surviving ideas',
  body=('This is the exercise that joins planning to writing, and it is '
        'where students discover that an outline containing premises almost '
        'writes its own body paragraphs. Each surviving idea gives you a '
        'topic sentence; its premise gives you the second sentence, which is '
        'the one that usually goes missing; and the evidence that reaches '
        'the premise gives you the third and fourth. Try it on the cycle 4 '
        'plan: write the two body paragraphs using only the outline and '
        'without adding any new material, and see how close to complete they '
        'are. What is missing, when you compare them to the model, is '
        'almost always the sentence that connects the premise to the thesis '
        '— which is a thing you can now look for specifically.'),
  frame=('Payments should be made for measured physical condition at '
         'defined moments rather than for soil health in general, because '
         'every argument for outcome payment rests on a premise about '
         'measurement cost that holds only at transaction points',
         [('The outcome-payment argument rests on a premise that the '
           'outcome can be measured often enough to pay for',
           ['a credible assessment costs several hundred pounds a field',
            'schemes reducing sampling have produced unusable noise']),
          ('At a transaction point the premise holds, because the cost is '
           'carried by the transaction',
           ['a tenancy start and end already involve valuation',
            'the incentive problem is also sharpest exactly there'])]),
  task='Write the two body paragraphs of the cycle 4 essay using only the '
       'outline, then compare them with the cycle 5 model and list what you '
       'had to add.',
  qs=['Did each topic sentence come straight from the main idea?',
      'Did the premise give you your second sentence?',
      'What did you have to add that the outline did not contain?',
      'Was anything in the outline unusable in a paragraph?',
      'How long did the two paragraphs take?'],
  answers=['it should, almost word for word',
           'if it did not, the premise was a restatement rather than an '
           'assumption',
           'usually the sentence linking the premise back to the thesis',
           'occasionally a support that turns out to be an example of '
           'another',
           'about twelve minutes once the outline is right, which is the '
           'point']),
 candos=['I can read rights guidance for the activity a right actually '
         'permits',
         'I can describe three indexed series without comparing them to '
         'their own units',
         'I can explain why soil appears in no account',
         'I can write body paragraphs directly from an outline with '
         'premises',
         'I can describe a proxy drifting from what it stands for'],
 tip=('On an indexed chart, say the base once and then compare only in '
      'index points. A fall from 100 to 74 tells you nothing about '
      'magnitude until somebody supplies the units.'),
)
