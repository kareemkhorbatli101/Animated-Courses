# -*- coding: utf-8 -*-
"""Unit 45 - Conservation and Trade-offs. IELTS Volume 5, band 7.0."""

_SURV = dict(kind='bar',
             title='Species recorded by three survey methods',
             sub='Fennimore Wood, same twelve months, species counts by '
                 'group',
             cats=['Birds', 'Mammals', 'Beetles', 'Fungi'],
             series=[('Walked transect, daytime', [46, 7, 19, 11]),
                     ('Camera traps, continuous', [23, 21, 2, 0]),
                     ('Specimen sampling, quarterly', [9, 4, 84, 63])])

UNIT = dict(
 n=45, vol=5, level='B2+/C1', band='7.0',
 theme='Conservation and Trade-offs',
 opener=(
   'Three surveys of one wood, producing three species lists that barely '
   'overlap, none of them wrong. The Task 1 lesson is what a method cannot '
   'detect and how to report that without accusing anybody of '
   'incompetence; the rest of the unit follows the same idea outwards, '
   'through payments that buy things that would have happened anyway, '
   'protection for one species that costs another, and a boundary drawn '
   'round a problem in a way that excludes the thing doing the damage.'),

 cycles=[
  dict(
   sub='A protected site near you',
   step=1,
   read=[
    dict(heading='Designated sites — what the status means',
         kind='Official guidance',
         task='Multiple choice and note completion',
         band='gt_short', qtype='Questions 1-6',
         skill=('Designation guidance is read for what is protected, not '
                'where',
                ['A designated site is protected for named features — a '
                 'species, a habitat, a geological exposure — and not as a '
                 'general amenity.',
                 'Find the sentence naming the features before reading '
                 'anything else. Every rule in the document, and every '
                 'question about it, attaches to those features rather '
                 'than to the land.']),
         paras=[
          'A designated site is protected because of specified features '
          'listed in the notification document: in most cases a habitat '
          'type, a population of a named species, or a geological exposure. '
          'The protection attaches to those features and not to the land in '
          'general, which is the point that produces most of the '
          'correspondence this office receives.',
          'The practical effect is that an activity harmful to a listed '
          'feature requires permission, and an activity that does not '
          'affect a listed feature may proceed whatever else it does to the '
          'site. Removing a hedge on a site designated for its orchids is '
          'not controlled; draining the field beside it very probably is, '
          'because the orchids depend on the water table.',
          'Each site is assessed periodically and recorded as in favourable '
          'or unfavourable condition. Unfavourable is further divided into '
          'recovering, no change and declining, and the three carry quite '
          'different consequences for what will be permitted. A site '
          'recorded as declining will not normally receive permission for '
          'anything affecting the feature in question.',
          'Designation confers no public access and does not prevent the '
          'owner using the land. Many designated sites are working farms, '
          'and the arrangement depends on that: a habitat maintained by '
          'grazing ceases to be that habitat if the grazing stops, and '
          'several of the worst assessments on record followed a decision '
          'to leave a site alone.',
          'Work affecting a feature requires written permission in advance. '
          'Carrying out such work without it is an offence of strict '
          'liability, meaning that a genuine belief that the work was '
          'harmless is not a defence, although it is relevant to what '
          'follows. Most cases are resolved by a requirement to restore '
          'rather than by prosecution.'],
         items=[
          ('Protection attaches to',
           ['the land as a whole', 'the specified features', 'public access rights', 'the owner'],
           1,
           'Paragraph 1, which is the source of most of the '
           'correspondence.',
           {0: 'Paragraph 1 says protection does not attach to the '
               'land in general.', 2: 'Paragraph 4 says designation confers no public access.', 3: 'The owner may continue using the land.'}),
          ('Removing a hedge on a site designated for orchids is',
           ['always prohibited', 'not controlled', 'permitted with notice', 'an offence'],
           1,
           'Paragraph 2, whereas draining the adjacent field probably '
           'is.',
           {0: 'The hedge is not a listed feature, so it is not '
               'prohibited.', 2: 'No notice is required for work not affecting a '
               'feature.', 3: 'An offence requires work affecting a listed feature.'}),
          ('A site recorded as declining will normally',
           ['receive permission readily', 'not receive permission affecting that feature', 'be sold', 'lose its designation'],
           1,
           'Paragraph 3, which divides unfavourable into three states.',
           {0: 'Declining is the state least likely to attract '
               'permission.', 2: 'Sale of the land is not mentioned in the notice.', 3: 'Condition does not remove the designation.'}),
          ('Designation does not confer public ____________.', None,
           'access',
           'Paragraph 4, and does not prevent the owner using the land.'),
          ('Unauthorised work is an offence of strict ____________.',
           None, 'liability',
           'Paragraph 5, so a genuine belief in harmlessness is no '
           'defence.'),
          ('Most cases are resolved by a requirement to ____________.',
           None, 'restore', 'Paragraph 5, rather than by prosecution.')]),
    dict(heading='Applying for permission to work on a site',
         kind='Procedure notice', task='Note completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Identify the site code from the map on our website. Codes begin '
          'with two letters for the county and four digits, and an '
          'application quoting the site name but not the code takes about '
          'three weeks longer, because the name is not unique and two of our '
          'sites are called Fennimore Wood.',
          'Describe the works and, separately, the features you think they '
          'affect. Applicants who leave the second part blank are not '
          'refused; they are sent a request for it, which costs a month. '
          'Where you believe no listed feature is affected, say so and give '
          'your reason, and the application is assessed on that basis.',
          'Propose measures to reduce the effect. The timing of work is the '
          'measure that most often resolves an application, and it is free: '
          'the same operation carried out in September rather than May is '
          'frequently permissible where the May version is not.',
          'Submit at least sixteen weeks before you intend to start. '
          'Permission may be granted with conditions, refused, or granted in '
          'part, and a refusal states which feature could not be protected, '
          'which is the sentence to read before deciding whether to '
          'resubmit.'],
         items=[
          ('Quote the site ____________ rather than the site name.', None,
           'code', 'Paragraph 1: two letters and four digits.'),
          ('Describe the works and, separately, the ____________ they '
           'affect.', None, 'features',
           'Paragraph 2, or the application is delayed by a month.'),
          ('The measure that most often resolves an application is the '
           '____________ of the work.', None, 'timing',
           'Paragraph 3, and it costs nothing.'),
          ('Submit at least ____________ weeks before starting.', None,
           'sixteen',
           'Paragraph 4, after which permission may be full, partial or '
           'refused.')])],
   listen=[
    dict(heading='Applying for permission on a designated site',
         part='Part 1', task='A call to a conservation agency · note completion', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Officer', 'Site permissions, Rosalind speaking.'),
          ('Caller', 'Hello. I want to put in a new track across a field and '
           'somebody told me the field is designated.'),
          ('Officer', 'Let us find out. Do you have a site code?'),
          ('Caller', 'I have a letter that says Fennimore Wood.'),
          ('Officer', 'There are two Fennimore Woods, which is why we ask '
           'for the code. Can you see two letters and four digits anywhere '
           'on the letter?'),
          ('Caller', 'P-K, then one-four-zero-six.'),
          ('Officer', 'PK1406. That is the one south of the river, and it is '
           'designated for its beetle assemblage in the dead wood and for a '
           'population of great crested newts in the ponds.'),
          ('Caller', 'Not the trees themselves?'),
          ('Officer', 'Not the trees as such, which surprises most people. '
           'The protection attaches to the listed features, so the question '
           'about your track is whether it affects beetles in dead wood or '
           'newts in ponds, and not whether it is in a wood.'),
          ('Caller', 'It runs along the eastern edge, nowhere near the '
           'ponds. But I would have to take out two fallen trunks.'),
          ('Officer', 'Then it is the beetles, and that needs permission. '
           'What month were you planning?'),
          ('Caller', 'May, because the ground is dry.'),
          ('Officer', 'May is the worst month for this feature. If you can '
           'do it in September the application is much more likely to '
           'succeed, and timing is the measure that resolves more of these '
           'than anything else. It also costs you nothing.'),
          ('Caller', 'September would be harder but possible.'),
          ('Officer', 'Then propose September, and propose moving the '
           'trunks to the northern corner rather than removing them, '
           'because a trunk relocated within the site is usually acceptable '
           'and a trunk taken away is usually not.'),
          ('Caller', 'How long does all this take?'),
          ('Officer', 'Submit sixteen weeks before you want to start. And '
           'do not begin early on the assumption it will be fine — this is '
           'strict liability, so believing the work was harmless is not a '
           'defence.'),
          ('Caller', 'Understood. What happens if I get it wrong?'),
          ('Officer', 'In practice, a requirement to restore rather than a '
           'prosecution, in almost every case I have handled. That is not a '
           'promise and it is what usually happens.')],
         items=[
          ('Site code: PK____________', None, '1406',
           'The site south of the river, of the two called Fennimore '
           'Wood.'),
          ('Listed features: the beetle assemblage and the ____________ in '
           'the ponds.', None, 'newts',
           'Great crested newts, alongside the dead-wood beetles.'),
          ('The affected feature here is the ____________ assemblage.',
           None, 'beetle',
           'Because the track requires two fallen trunks to be moved.'),
          ('Proposed month: ____________', None, 'September',
           'Rather than May, which the officer calls the worst month.'),
          ('Proposed measure: move the trunks to the ____________ corner.',
           None, 'northern',
           'Relocation within the site rather than removal.'),
          ('Submit at least ____________ weeks before starting.', None,
           'sixteen', 'With strict liability for starting early.')]),
    dict(heading='A short talk: who pays to protect', part='Part 2',
         task='A talk at an agricultural college · multiple choice and matching', band='l2',
         qtype='Questions 17-20',
         script=[
          ('Speaker', 'I ran a payment scheme for conservation on farmland '
           'for twelve years and I want to describe the one problem that '
           'nobody outside the field takes seriously and everybody inside it '
           'thinks about constantly.'),
          ('Speaker', 'The problem is additionality. We pay a farmer to '
           'manage a margin in a particular way. The question that decides '
           'whether the money bought anything is what would have happened '
           'without the payment, and that is a counterfactual: it is not '
           'observable, it is not recorded anywhere, and the only person who '
           'knows is the one receiving the money.'),
          ('Speaker', 'The consequence is predictable and the figures are '
           'worse than you would guess. In the schemes where somebody has '
           'gone back and checked, between a third and a half of payments go '
           'to practices the recipient was already following or had already '
           'decided on. That money is not stolen. It buys nothing.'),
          ('Speaker', 'And the people most likely to apply are the ones '
           'already doing the thing, because the application is easy for '
           'them and the change is zero. We designed a scheme that is '
           'cheapest to enter for the applicants from whom we obtain the '
           'least, which is a sentence I have said in four different '
           'ministries.'),
          ('Speaker', 'The fixes all work and all cost something. Paying for '
           'measured outcomes rather than for actions solves additionality '
           'completely and requires monitoring nobody will fund. Offering '
           'payment by reverse auction, where farmers state what they would '
           'accept, works well and is politically awkward because it reveals '
           'that different people want different amounts for the same '
           'thing.'),
          ('Speaker', 'My own preference is the dull one: pay for practices '
           'that are unambiguously expensive and rare. Nobody is already '
           'restoring a leaky dam, so a payment for that is wholly '
           'additional. Everybody is already leaving a field margin, so a '
           'payment for that is mostly not. That rule is crude and it '
           'captures most of what the sophisticated methods capture, at '
           'about a hundredth of the administrative cost.')],
         items=[
          (
           'Additionality is the question of what would have happened '
           'without the ____________.', None, 'payment',
           'A counterfactual known only to the recipient.'),
          (
           'In schemes that have been checked, how much goes to '
           'practices already being followed?',
           ['Under a tenth', 'Between a third and a half', 'About three quarters', 'Nearly all'],
           1, 'Money the speaker says is not stolen but buys nothing.',
           {0: 'Smaller than the share she reports.', 2: 'Larger than the range she gives.', 3: 'She reports between a third and a half, not nearly '
               'all.'}),
          ('Who is most likely to apply?',
           ['Those who would have to change most', 'Those already doing the thing', 'The largest farms', 'New entrants'],
           1, 'Because the application is easy and the change is zero.',
           {0: 'Those who must change most are least likely to apply.', 2: 'Farm size is not what she says predicts application.', 3: 'New entrants are not the group she identifies.'}),
          (
           'The speaker\u2019s own preference is to pay for practices that '
           'are expensive and ____________.', None, 'rare',
           'Because nobody is already doing them, making payment '
           'wholly additional.')])],
   speak=dict(
    part='Part 1', focus='Wild places near you',
    intro=('Two or three sentences each. Name a place rather than '
           'describing nature in general.'),
    qs=['Are there any wild or natural places near where you live?',
        'Do you spend time outdoors?',
        'Have these places changed in your lifetime?',
        'Should such places be protected?'],
    shape=[('answer', 'A strip of woodland along the railway, about ten '
            'minutes away.'),
           ('support', 'It is neither managed nor much visited, which may '
            'be why it still has owls.'),
           ('follow-up', 'There was a proposal to tidy it up two years ago '
            'and it went nowhere, fortunately.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Objecting to development next to a protected site',
         prompt=('A development is proposed next to a protected natural '
                 'site near you. Write a letter of objection to the '
                 'planning authority. In your letter: identify the proposal; '
                 'set out your objection; say what you would like to '
                 'happen. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing to object to application 25/0188, for forty dwellings '
          'on land adjoining the designated site at Fennimore Wood, site code '
          'PK1406.',
          'My objection concerns the listed features rather than the loss of '
          'the field itself. The site is designated for its dead-wood beetle '
          'assemblage and for great crested newts in the two ponds at its '
          'southern end. The application does not address the effect on '
          'either, and the ecological assessment at Appendix F surveys the '
          'application site only, stopping at the boundary hedge.',
          'The specific mechanism I would ask the authority to consider is '
          'drainage. The newt ponds are fed by surface water from the field '
          'in question, and the drainage strategy proposes to direct that '
          'water into the highway system. Nothing in the documents mentions '
          'the ponds, and I would be glad to be told that I have misread '
          'the plans.',
          'I would ask that the application be refused, or alternatively '
          'that determination be deferred until an assessment covering the '
          'designated features has been carried out. If it assists, the '
          'county record centre holds survey data for the ponds from 2019 '
          'and 2023 which the applicant does not appear to have obtained.',
          'Yours faithfully,',
          'A. Berendsen-Oyinlola'],
         notes=[
          'The objection is framed around the designated features in its '
          'first sentence, because that is the only ground on which this '
          'authority can act. An objection about the loss of a field, '
          'however deeply felt, has nowhere to go.',
          'One mechanism is named and traced: surface water from the field '
          'feeds the ponds, and the drainage strategy redirects it. A single '
          'traced pathway is worth more than a list of concerns, and the '
          'offer to be corrected makes it harder to dismiss.',
          'The final paragraph supplies something the applicant lacks and '
          'tells them where to get it. A letter that makes the authority’s '
          'next step easier is read differently from one that makes it '
          'harder.'],
         criterion=[('Framing the objection on the designated features',
                     'Task Achievement'),
                    ('One mechanism traced rather than a list of concerns',
                     'Task Response'),
                    ('Supplying what the decision-maker lacks',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Objection citing designation and evidence',
    explain=('An objection that cites the ground of protection and traces a '
             'mechanism is acting on the decision-maker’s own terms. These '
             'patterns do both.'),
    examples=['The application does not address the effect on the '
              'designated feature.',
              'The assessment surveys the application site only, stopping '
              'at the boundary hedge.',
              'I would be glad to be told that I have misread the plans.',
              'The county record centre holds survey data the applicant '
              'does not appear to have obtained.'],
    task='Rewrite each objection so that it cites a feature and a '
         'mechanism.',
    items=[('This development will damage the wood.',
            'The drainage strategy redirects surface water that currently '
            'feeds the ponds supporting the designated newt population.'),
           ('They have not done a proper survey.',
            'The ecological assessment covers the application site only and '
            'does not extend to the designated features beyond the '
            'boundary.'),
           ('I think they are wrong.',
            'I would be glad to be told that I have misread the drainage '
            'plans at Appendix F.'),
           ('There is other information available.',
            'The county record centre holds pond survey data from 2019 and '
            '2023 which the applicant does not appear to have obtained.'),
           ('You should refuse it.',
            'I would ask that determination be deferred until an assessment '
            'covering the designated features has been carried out.')]),
   vocab=[('designated site', 'land protected for named natural features'),
          ('listed feature', 'the specific thing a site is protected for'),
          ('mitigation', 'work done to reduce an effect'),
          ('favourable condition', 'the state a protected feature should '
           'be in'),
          ('liability without fault', 'responsibility regardless of '
           'intention'),
          ('species set', 'the species found together in one place'),
          ('restore', 'to put a damaged feature back'),
          ('determination', 'the formal decision on an application')],
   expr=[('The application does not address the effect on the designated '
          'feature', 'objects on the only available ground'),
         ('the protection attaches to the listed features',
          'corrects a common misunderstanding of a rule'),
         ('I would be glad to be told that I have misread the plans',
          'offers a route for being wrong'),
         ('timing is the measure that resolves more of these than anything '
          'else', 'identifies the cheapest available remedy')],
   trans=['furthermore', 'in this connection', 'the specific mechanism',
          'alternatively'],
  ),

  dict(
   sub='Who pays to protect',
   step=2,
   read=[
    dict(heading='Four landowners on conservation agreements',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 21-26',
         paras=[
          'A  Ottoline: I signed up for the margins payment and I had '
          'already been leaving those margins for six years. The money is '
          'welcome and I am clear about what it bought, which is nothing. '
          'If somebody wants to defend the scheme they should defend it as '
          'income support for farms, which I would support, rather than as '
          'conservation, which it was not in my case.',
          'B  Lazarus: I took the hardest option on the list because it paid '
          'most, and it nearly finished me. Restoring the wet corner meant '
          'losing eleven acres of grazing in a year when I could not afford '
          'to lose any. It worked, there are lapwings on it now, and I would '
          'not do it again, which the scheme designers should probably know '
          'about the thing they are most proud of.',
          'C  Mirembe: What I object to is the inspection regime rather than '
          'the payment. Three visits a year, and the inspector checks '
          'whether I did the action, never whether anything happened as a '
          'result. I have asked twice whether anybody counts the birds and '
          'the answer is that birds are not what the payment is for.',
          'D  Thorvald: I am in the scheme, I think it is poorly designed, '
          'and I would be worse off without it, and I do not find those '
          'three positions difficult to hold at once. The alternative on '
          'offer was not a better scheme. It was no scheme, and the margins '
          'would have gone under the plough in the second bad year.'],
         items=[
          ('Which person says their payment bought no change at all?',
           ['Ottoline', 'Lazarus', 'Mirembe', 'Thorvald'], 0,
           'She had been leaving the margins for six years already.',
           {1: 'Lazarus took an option that worked and would not '
               'repeat it.', 2: 'Mirembe objects to what the inspection measures.', 3: 'Thorvald defends the scheme against the realistic '
               'alternative.'}),
          (
           'Which person took an option that worked and would not '
           'repeat it?',
           ['Ottoline', 'Lazarus', 'Mirembe', 'Thorvald'], 1,
           'Eleven acres of grazing lost in a year he could not afford '
           'it.',
           {0: 'Ottoline says their payment bought no change at all.', 2: 'Mirembe objects to what the inspection measures.', 3: 'Thorvald defends the scheme against the realistic '
               'alternative.'}),
          ('Which person objects to what the inspection measures?',
           ['Ottoline', 'Lazarus', 'Mirembe', 'Thorvald'], 2,
           'The inspector checks the action and never the result.',
           {0: 'Ottoline says their payment bought no change at all.', 1: 'Lazarus took an option that worked and would not '
               'repeat it.', 3: 'Thorvald defends the scheme against the realistic '
               'alternative.'}),
          (
           'Which person defends the scheme against the realistic '
           'alternative?',
           ['Ottoline', 'Lazarus', 'Mirembe', 'Thorvald'], 3,
           'Which he says was no scheme rather than a better one.',
           {0: 'Ottoline says their payment bought no change at all.', 1: 'Lazarus took an option that worked and would not '
               'repeat it.', 2: 'Mirembe objects to what the inspection measures.'}),
          ('Ottoline believes the payment scheme should be abolished.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says she would support it as income support if '
           'defended as such.',
           {0: 'Yes would need abolition; she would support it as '
               'income support.', 2: 'Not Given is wrong because she says what she would '
               'support.'}),
          ('Mirembe has asked whether the results are measured.',
           ['Yes', 'No', 'Not Given'], 0,
           'She says she has asked twice and been told birds are not '
           'what the payment is for.',
           {1: 'No would need her not to have asked; she says she '
               'asked twice.', 2: 'Not Given is wrong because she reports the answer she '
               'got.'})])],
   listen=[
    dict(heading='Two officers disagree about payments', part='Part 3',
         task='A conversation between two scheme officers · multiple choice', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Ingrid', 'The uptake figures are excellent and I am not going to '
           'pretend to be pleased about them.'),
          ('Obadiah', 'Say the second half of that.'),
          ('Ingrid', 'Ninety-one per cent of applications are for the three '
           'cheapest options, and the three cheapest options are the ones '
           'most people were already doing. We are buying the status quo at '
           'scale and reporting it as coverage.'),
          ('Obadiah', 'I accept the additionality point and I want to put '
           'the other side of it, because I do not think you will like where '
           'your argument leads.'),
          ('Ingrid', 'Go on.'),
          ('Obadiah', 'If we pay only for what would not otherwise happen, '
           'we pay nothing to the farms that have been managing well for '
           'twenty years and everything to the ones that have not. That is '
           'defensible as economics and it is a scheme that rewards previous '
           'neglect, and it will be described that way in the farming press '
           'within a week.'),
          ('Ingrid', 'That is the strongest version of the objection and I '
           'have been avoiding it. My answer is that it is an argument for '
           'two payments rather than one.'),
          ('Obadiah', 'Meaning?'),
          ('Ingrid', 'A maintenance payment for keeping something that '
           'exists, defended as what it is and priced low. And a separate '
           'payment for change, priced properly and assessed on '
           'additionality. At the moment we have one payment pretending to '
           'be both and failing at each.'),
          ('Obadiah', 'That would survive the farming press and I think it '
           'would not survive the finance ministry, because the maintenance '
           'payment is the expensive one and it buys nothing new.'),
          ('Ingrid', 'It buys the absence of a loss, which is a real '
           'purchase that no accounting system we use can record.'),
          ('Obadiah', 'I agree with you and I am telling you how it will be '
           'read. If you want the maintenance payment, you will need the '
           'counterfactual for it: what happened on comparable land without '
           'the payment.'),
          ('Ingrid', 'We have that. The four counties that left the scheme '
           'in 2016 lost margins at four times our rate over the following '
           'six years.'),
          ('Obadiah', 'Then lead with that and do not mention additionality '
           'until page four, which is advice about ministers rather than '
           'about ecology and is the most useful thing I know.')],
         items=[
          (
           'What proportion of applications are for the three cheapest '
           'options?', None, 'ninety-one per cent',
           'Which Ingrid says were mostly already being done.'),
          (
           'Obadiah objects that paying only for change rewards '
           'previous ____________.', None, 'neglect',
           'Paying nothing to farms that have managed well for twenty '
           'years.'),
          ('Ingrid proposes ____________ payments rather than one.',
           None, 'two',
           'A maintenance payment and a separate payment for change.'),
          (
           'Obadiah thinks the maintenance payment would fail with the '
           '____________ ministry.', None, 'finance',
           'Because it is expensive and buys nothing new.'),
          (
           'Ingrid says the maintenance payment buys the absence of a '
           '____________.', None, 'loss',
           'Which no accounting system they use can record.'),
          ('What evidence does she have for that?',
           ['A national survey', 'Four counties that left the scheme in 2016', 'An academic study', 'Inspection records'],
           1,
           'Which lost margins at four times their rate over six '
           'years.',
           {0: 'No national survey is cited.', 2: 'No academic study is mentioned.', 3: 'Inspection records are not her evidence.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Protection',
    longturn=[('The place I think should be protected is an area of raised bog '
               'about forty minutes from where I live, roughly six square '
               'kilometres of it.'),
              ('It is not attractive in any conventional sense. It is flat, '
               'wet, treeless and brown for most of the year, the ground moves '
               'under you, and there is nothing to look at from a distance. '
               'Close up there are plants that grow nowhere else in the region '
               'and insects that depend entirely on them, and the peat '
               'underneath is several metres deep and about nine thousand '
               'years old.'),
              ('What threatens it is drainage rather than development, which '
               'is why nobody notices. The land around it is farmed, the '
               'ditches at the edge have been deepened twice in forty years, '
               'and each deepening dries the margin a little further in. '
               'Nobody has ever proposed building on it, and no planning '
               'decision has ever been taken about it.'),
              ('Why I think it is worth protecting rests on two arguments, and '
               'the one I find more persuasive is the less popular one. The '
               'first is the usual one about species, and it is true: several '
               'of them have nowhere else to go. The second is that the bog is '
               'a record. The peat holds pollen in layers, which is a '
               'continuous account of what grew in that valley since the last '
               'ice, and it cannot be reconstructed once it has oxidised. '
               'Drain it and we do not lose a view; we lose the only copy of '
               'something, and nobody will be able to tell what the question '
               'was that we could no longer answer.')],
    intro=('Short answers, then the long turn. The explanation bullet is '
           'where the band is decided.'),
    cue=('Describe somewhere you think should be protected.',
         ['where it is', 'what it is like', 'what threatens it',
          'and explain why you think it is worth protecting']),
    qs=['Are natural places well protected in your country?',
        'Do people there care about such things?',
        'Now look at the card. You have one minute to make notes.',
        'Who should pay for protecting the natural world?'],
    shape=[('answer', 'A tidal marsh about twelve miles from where I grew '
            'up.'),
           ('support', 'Flat, grey, not beautiful in any obvious way, and '
            'full of birds in February.'),
           ('follow-up', 'It is threatened by a flood defence that would '
            'sit on its seaward edge.'),
           ('support', 'And I would find it hard to argue for on grounds of '
            'beauty.'),
           ('follow-up', 'What I would say instead is that it is the only '
            'one left on that coast, which is a different kind of '
            'argument.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should landowners be paid to protect wildlife?',
         prompt=('Some people believe landowners should be paid to protect '
                 'wildlife on their land; others believe they should simply '
                 'be required to. Discuss both views and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'The choice between paying and requiring is usually argued as a '
          'question about fairness, and it is better treated as a question '
          'about which outcomes each instrument can actually deliver, '
          'because the two are good at almost exactly opposite things.',
          'Regulation can reliably stop an action. Prohibiting the drainage '
          'of a wetland works, is cheap to enforce because the breach is '
          'visible from the air, and does not require anybody to trust the '
          'landowner’s intentions. What regulation cannot do is produce '
          'positive management: a rule can forbid ploughing a meadow and '
          'cannot compel the annual cut that the meadow needs, which depends '
          'on somebody choosing to do it well in a wet August.',
          'Payment is the mirror image. It is the only instrument that '
          'produces active management, and it is poor at preventing loss '
          'because it must be renewed and can be declined. Its '
          'characteristic failure is also well documented: between a third '
          'and a half of payments in schemes that have been audited go to '
          'practices the recipient had already adopted, which is money spent '
          'buying something that was not for sale.',
          'The second objection to payment is the one its critics usually '
          'lead with and it is weaker than it sounds. Paying people not to '
          'damage things does reward a threat, but only where the damage '
          'would otherwise have been lawful, and the obvious response is to '
          'make it unlawful and then pay for the positive management on top. '
          'That is not a defence of payment as currently designed; it is an '
          'argument for the combination.',
          'My own position follows from the division of labour. Prohibit the '
          'destructive acts by regulation, since they are visible and '
          'enforceable, and pay for the maintenance that nobody can be '
          'compelled to do well. Within the payment side, price by what the '
          'action costs the landowner rather than by what it is worth, '
          'because the second is unknowable and the first is why the '
          'management does not happen already.'],
         notes=[
          'The essay reframes an argument about fairness as one about '
          'instruments, which is the move that makes both positions '
          'correct about different things.',
          'Paragraphs 2 and 3 are deliberately symmetrical — what each can '
          'do, what each cannot, and the characteristic failure of each. '
          'Parallel construction across two paragraphs is marked under '
          'Coherence and Cohesion and is easy to do once noticed.',
          'Paragraph 4 improves the opposing argument, concedes part of it, '
          'and converts it into an argument for combining the instruments. '
          'By Volume 5 this should be automatic.'],
         criterion=[('Reframing a fairness question as one about '
                     'instruments', 'Task Response'),
                    ('Two deliberately parallel paragraphs',
                     'Coherence and Cohesion'),
                    ('Converting an objection into an argument for '
                     'combination', 'Task Response')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Concessive conditionals and graded commitment',
    explain=('A concessive conditional grants a condition and limits what '
             'follows from it. At band 7 these replace the flat "although" '
             'and carry much finer distinctions.'),
    examples=['Paying for what would have happened anyway buys nothing.',
              'Even if the practice continued, the payment bought no '
              'change.',
              'Only where the damage would otherwise have been lawful does '
              'the objection hold.',
              'Granted that uptake is high, uptake is not the measure that '
              'matters.'],
    task='Rewrite each sentence as a concessive conditional.',
    items=[('Uptake is high but it does not mean much.',
            'Granted that uptake is high, it measures applications rather '
            'than changes in management.'),
           ('The payment may be deserved but it bought nothing.',
            'Even where the payment is deserved as income, it purchased no '
            'change in what was done.'),
           ('Paying polluters is wrong in some cases.',
            'The objection holds only where the damaging act would '
            'otherwise have been lawful.'),
           ('Regulation works sometimes.',
            'Regulation reliably prevents an act, provided the act is '
            'visible once done.'),
           ('The scheme is bad but better than nothing.',
            'Poorly designed as the scheme is, the realistic alternative '
            'was no scheme rather than a better one.')]),
   vocab=[('additionality', 'whether a payment changed what happened'),
          ('unobserved alternative', 'the course events would have taken '
           'anyway'),
          ('reverse auction', 'a process where sellers state their price'),
          ('margin', 'the uncropped strip at the edge of a field'),
          ('status quo', 'the situation as it already is'),
          ('maintenance payment', 'money for keeping something as it is'),
          ('audited', 'checked after the event by an independent body'),
          ('income support', 'money paid to sustain a livelihood')],
   expr=[('Paying for what would have happened anyway buys nothing',
          'states the additionality problem in six words'),
         ('we are buying the status quo at scale and reporting it as '
          'coverage', 'contrasts what is bought with what is reported'),
         ('it buys the absence of a loss',
          'names a benefit that accounting cannot record'),
         ('a scheme that rewards previous neglect',
          'states the strongest objection to paying for change')],
   trans=['whereas', 'that said', 'granted that', 'the mirror image'],
  ),

  dict(
   sub='Counting what is there',
   step=3,
   read=[
    dict(heading='Three surveys of one wood',
         kind='Data article',
         task='Matching information and note completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_SURV,
         paras=[
          'Three surveys of Fennimore Wood were carried out over the same '
          'twelve months by three teams using three methods, and they '
          'produced species lists that overlap less than anybody expected. '
          'The chart shows the counts by group. None of the three teams made '
          'an error.',
          'The walked transect, conducted in daylight by two observers '
          'following a fixed route, recorded 46 bird species, 7 mammals, 19 '
          'beetles and 11 fungi. It is the method most often used because it '
          'is cheap, and its strength is obvious in the bird column.',
          'The camera traps, left running continuously at twelve points, '
          'recorded 23 birds, 21 mammals, 2 beetles and no fungi at all. '
          'They find three times as many mammals as the transect and half as '
          'many birds, which is a consequence of being at knee height and of '
          'operating at night.',
          'Specimen sampling, carried out quarterly with traps and plates, '
          'recorded 9 birds, 4 mammals, 84 beetles and 63 fungi. It finds '
          'four times as many beetles as the transect and is the only method '
          'that detects fungi in any number, because fungi require a '
          'specimen to identify and most of them are not visible as '
          'fruiting bodies when the transect happens to pass.',
          'The pattern is therefore not that one method is better. Each '
          'method detects what it is built to detect and is blind to the '
          'rest, and the blindness is not random: it is a property of the '
          'method that can be stated in advance. A camera at knee height '
          'will never record a canopy warbler however long it runs.',
          'This has a consequence for anybody comparing two sites or two '
          'periods, and it is the reason the three teams were commissioned '
          'together. A wood surveyed by transect in 2004 and by camera in '
          '2024 will appear to have lost most of its birds and gained most '
          'of its mammals, and the change will be entirely an artefact of '
          'the method.',
          'The honest way to report any of these surveys is to state what '
          'the method cannot detect in the same paragraph as the result. The '
          'convention in the field is to do this in a methods section that '
          'is not read, and the three reports here were written to a '
          'different instruction: each states its own blind spots in its '
          'summary, which makes all three less impressive and makes the set '
          'of them usable.'],
         items=[
          (
           'Which paragraph explains why camera traps find more '
           'mammals?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1, 'Being at knee height and operating at night.',
           {0: 'Paragraph 2 describes the walked transect.', 2: 'Paragraph 4 describes specimen sampling.', 3: 'Paragraph 5 states the general pattern.'}),
          ('Which paragraph warns about comparing two periods?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           2, 'A change that is entirely an artefact of the method.',
           {0: 'Paragraph 4 describes specimen sampling.', 1: 'Paragraph 5 states the general pattern.', 3: 'Paragraph 7 describes how the three reports were '
               'written.'}),
          (
           'Which paragraph describes how the three reports were '
           'written?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 4'],
           2,
           'Each states its blind spots in its summary rather than in '
           'a methods section.',
           {0: 'Paragraph 5 states the general pattern.', 1: 'Paragraph 6 warns about comparing two periods.', 3: 'Paragraph 4 describes specimen sampling.'}),
          ('How many beetles were recorded by specimen sampling?',
           None, '84', 'Paragraph 4, four times the transect figure.'),
          ('How many mammals were recorded by camera traps?', None,
           '21', 'Paragraph 3, three times the transect figure.'),
          ('How many fungi were recorded by camera traps?', None,
           'none',
           'Paragraph 3, because fungi cannot be detected that way.')])],
   listen=[
    dict(heading='An ecologist on survey method', part='Part 4',
         task='A lecture on detection and absence · multiple choice', band='l4',
         qtype='Questions 39-44',
         figure=_SURV,
         script=[
          ('Ecologist', 'Three surveys, one wood, twelve months, and three '
           'species lists that barely overlap. Nobody made a mistake. '
           'Everything I want to say this hour comes out of explaining why '
           'that is the expected result rather than a scandal.'),
          ('Ecologist', 'The transect is two people walking a fixed route in '
           'daylight. Forty-six birds, seven mammals, nineteen beetles, '
           'eleven fungi. It is cheap, it is what most surveys are, and you '
           'can see what it is good at in the bird column, because birds '
           'advertise themselves in daylight and that is the whole of why.'),
          ('Ecologist', 'Cameras: twenty-three birds, twenty-one mammals, '
           'two beetles, no fungi. Three times the mammals, half the birds. '
           'A camera is at knee height and runs at night, so it finds what '
           'moves past a knee in the dark and misses what sings in a canopy '
           'at noon.'),
          ('Ecologist', 'Specimen sampling: nine birds, four mammals, '
           'eighty-four beetles, sixty-three fungi. And the fungi number is '
           'the one to think about. Zero from cameras, eleven from the '
           'transect, sixty-three from sampling. Most fungi are not visible '
           'as anything when you walk past; you need the specimen and a '
           'microscope. The zero is not a finding about the wood.'),
          ('Ecologist', 'Which gives you the sentence I most want you to '
           'take away. A zero in a survey is either an absence or a failure '
           'to detect, and nothing in the number itself distinguishes them. '
           'We call the second a false absence, and in published site '
           'reports it is far more common than true absence.'),
          ('Ecologist', 'The practical danger is comparison. A wood '
           'surveyed by transect in 2004 and by camera in 2024 will appear '
           'to have lost its birds and gained its mammals, and you will have '
           'measured a change of method. Half the local extinctions I am '
           'sent to verify turn out to be this.'),
          ('Ecologist', 'So the rule for your own reports: state what your '
           'method cannot detect in the same paragraph as your result, not '
           'in a methods section at the back. It makes your report less '
           'impressive and it is the only thing that makes it usable by '
           'somebody who did not run the survey.'),
          ('Ecologist', 'And one last thing for those of you who will '
           'commission rather than conduct these. Do not ask for the best '
           'method. Ask what you intend to do with the answer, then choose '
           'the method whose blind spot you can live with. A survey '
           'commissioned without that conversation produces a number that '
           'is accurate and useless, and I have written several.')],
         items=[
          ('The transect recorded how many bird species?', None,
           'forty-six',
           'Against twenty-three from cameras and nine from sampling.'),
          (
           'Camera traps find more mammals because they are at knee '
           'height and run at ____________.', None, 'night',
           'So they miss what sings in a canopy at noon.'),
          (
           'The zero for fungi from cameras is a failure to '
           '____________.', None, 'detect',
           'Most fungi need a specimen and a microscope to identify.'),
          (
           'A zero that reflects failure to detect is called a false '
           '____________.', None, 'absence',
           'More common in published site reports than true absence.'),
          (
           'Comparing a 2004 transect with a 2024 camera survey '
           'measures a change of ____________.', None,
           'method',
           'Half the local extinctions he verifies turn out to be '
           'this.'),
          (
           'His rule for reports is to state what a method cannot '
           'detect',
           ['in the methods section', 'in the same paragraph as the result', 'in an appendix', 'only if asked'],
           1, 'Which makes the report less impressive and more usable.',
           {0: 'He says the methods section is not read.', 2: 'An appendix is where he says such things go to be '
               'ignored.', 3: 'He wants it stated whether or not anybody asks.'})])],
   speak=dict(
    part='Part 3', focus='Knowing what you have',
    intro=('Five or six sentences. Try once to say that a zero is '
           'ambiguous.'),
    qs=['How do scientists know what species live in a place?',
        'Can we be sure something has disappeared?',
        'Should surveys be repeated in the same way each time?',
        'How should uncertainty be reported to the public?'],
    shape=[('answer', 'Much less completely than a species list '
            'suggests.'),
           ('support', 'Three methods in one wood produced lists that '
            'barely overlapped.'),
           ('follow-up', 'And a zero can mean absence or simply failure to '
            'detect.'),
           ('support', 'Which matters most when two surveys are '
            'compared.'),
           ('follow-up', 'A change of method can look exactly like a local '
            'extinction.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Species recorded by three survey methods',
         prompt=('The chart below shows the number of species recorded in '
                 'one wood by three survey methods over the same twelve '
                 'months. Summarise the information by selecting and '
                 'reporting the main features, and make comparisons where '
                 'relevant. Write at least 150 words.'),
         figure=_SURV,
         model=[
          'The bar chart compares the numbers of bird, mammal, beetle and '
          'fungus species recorded in a single wood by three survey methods '
          'over the same twelve-month period. Overall, no method recorded '
          'the most species in more than one group, and each was '
          'substantially the strongest in a different group, with specimen '
          'sampling the strongest in two.',
          'The walked transect produced by far the highest bird count, at 46 '
          'species, double the 23 recorded by camera traps and five times '
          'the 9 from specimen sampling. It was otherwise unremarkable, '
          'recording 7 mammals, 19 beetles and 11 fungi.',
          'The camera traps show the opposite pattern. They recorded the '
          'highest number of mammals, at 21, three times the transect '
          'figure, but the lowest figures in every other group: 23 birds, '
          'only 2 beetles, and no fungi at all.',
          'Specimen sampling dominates the two remaining groups by wide '
          'margins, with 84 beetle species against 19 and 2, and 63 fungus '
          'species against 11 and none. Its bird and mammal counts, at 9 and '
          '4, are the lowest recorded by any method. The clearest single '
          'contrast on the chart is in fungi, where the three methods '
          'produced 63, 11 and zero.'],
         notes=[
          'The Overall statement reports the structure — each method '
          'strongest in a different group — rather than naming the largest '
          'bar. Where a chart has no overall winner, saying so is the main '
          'feature.',
          'Each method gets a paragraph that gives its one strength and then '
          'its weaknesses as a set. The alternative, going group by group, '
          'produces four paragraphs of three numbers and no shape.',
          'Note that nothing in this answer explains why the methods '
          'differ. Task 1 asks for what the chart shows, and a sentence '
          'about cameras being at knee height would be unsupported '
          'speculation however true it happens to be.'],
         criterion=[('An Overall statement reporting structure, not a '
                     'maximum', 'Task Achievement'),
                    ('One paragraph per method, weaknesses as a set',
                     'Coherence and Cohesion'),
                    ('No explanation offered for the differences',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing what a method cannot see',
    fix=dict(
     text=('The survey recorded 48 species, but it was carried out in July '
           'only. Species which are active in spring would therefore not '
           'appear, however common they was. The method can show what is '
           'present and it cannot show what is absent. The figure of 48 is '
           'therefore a minimum rather than a count.'),
     faults=[('however common they was',
              'however common they were',
              'The subject they is plural, so the verb is were.'),
             (('The method can show what is present and it cannot show what is '
               'absent'),
              'The method can show what is present but not what is absent',
              ('And joins two statements of the same kind; this is a contrast, '
               'so it takes but.')),
             ('but it was carried out in July only',
              ('but it was carried out in July alone, so the count covers one '
               'season'),
              ('Only at the end of the clause is ambiguous, and the sentence '
               'stops before saying what the limitation costs.'))]),
    explain=('Reporting a limitation without implying incompetence is a '
             'specific skill. These patterns attribute the gap to the '
             'method rather than to the people using it.'),
    examples=['The third method found fewest because it was designed to.',
              'A camera at knee height will never record a canopy '
              'warbler.',
              'The zero is not a finding about the wood.',
              'A false absence is a failure to detect, not an absence.'],
    task='Rewrite each sentence so that the limitation sits with the '
         'method.',
    items=[('The camera survey missed the fungi.',
            'Camera traps cannot detect fungi, which require a specimen for '
            'identification.'),
           ('The transect team did not find many beetles.',
            'A daytime walked route detects the beetles that are visible on '
            'vegetation and few of those in dead wood.'),
           ('There are no fungi in the wood.',
            'No fungi were recorded by this method, which is consistent with '
            'both absence and non-detection.'),
           ('The 2024 survey found fewer birds.',
            'The 2024 survey used cameras, which record roughly half the '
            'bird species a transect records at the same site.'),
           ('The results disagree.',
            'The three methods detect different groups, and the lists '
            'overlap only where more than one method can see the same '
            'species.')]),
   vocab=[('transect', 'a fixed route walked and recorded'),
          ('detectability', 'how likely a method is to find something '
           'present'),
          ('false absence', 'a zero produced by failure to detect'),
          ('survey effort', 'how much observation a result rests on'),
          ('specimen', 'an individual collected for identification'),
          ('fruiting body', 'the visible part of a fungus'),
          ('method effect', 'a result caused by how it was measured'),
          ('blind spot', 'what a method systematically cannot see')],
   expr=[('The third method found fewest because it was designed to',
          'attributes a result to a method rather than to failure'),
         ('a zero is either an absence or a failure to detect',
          'states an ambiguity in a number'),
         ('you will have measured a change of method',
          'warns about comparing across instruments'),
         ('less impressive and more usable',
          'prefers one quality of a report over another')],
   trans=['while', 'by contrast', 'taken together', 'the pattern is '
          'therefore'],
  ),

  dict(
   sub='Why protecting one thing costs another',
   step=4,
   read=[
    dict(heading='The fence that saved a bird and stopped a herd',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and note completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'Conservation is conducted in public as though its difficulty were '
          'opposition: developers, poachers, indifferent governments. Inside '
          'the field, the recurring difficulty is of another kind wholly, '
          'and it is that almost every successful protective measure imposes '
          'a cost on something else that somebody also wants to protect. The '
          'cases below are chosen because the measures worked: a trade-off '
          'is only visible where the intervention did what it was supposed '
          'to do.',
          'A fence erected in 1998 across eleven kilometres of a southern '
          'African rangeland was intended to exclude cattle from a breeding '
          'area for a ground-nesting bird, and it did: the population rose '
          'from under forty pairs to over three hundred within fifteen '
          'years. The same fence cut a migration route used by wildebeest, '
          'and the herd that used it declined by approximately two thirds '
          'over the same period.',
          'The significant feature of this case is that nobody was at fault. '
          'The migration was known, it was mapped, and the fence was sited '
          'to cross it at the narrowest point precisely in order to minimise '
          'the effect. The population consequences were simply larger than '
          'the modelling predicted, in a direction the modelling had not '
          'been designed to examine. That is the common shape of these '
          'cases. The question that turns out to matter is almost never the '
          'one the assessment was commissioned to answer, and nothing in the '
          'process requires anybody to ask it.',
          'A second class of trade-off arises from funding rather than from '
          'physical structures. Conservation money is raised '
          'disproportionately by a small number of large, visible species, '
          'and is then spent disproportionately on them. A programme for a '
          'single large mammal can absorb more than the entire invertebrate '
          'budget of the country it operates in, and the invertebrates in '
          'question frequently include the pollinators the same ecosystem '
          'depends on.',
          'The standard defence of this arrangement is the flagship '
          'argument: the large species raises money that would not otherwise '
          'be raised, and its habitat requirements protect everything else '
          'living in the same place. The first half of that is demonstrably '
          'true. The second half holds only where the flagship’s '
          'requirements genuinely overlap those of the rest, and the '
          'measured overlap is far lower than the argument assumes — in '
          'several studied systems, under a third. The overlap is also '
          'highest for the species most like the flagship — other large '
          'vertebrates needing large areas — and lowest for the '
          'invertebrates and fungi that constitute most of the '
          'biodiversity being claimed.',
          'A third trade-off is temporal and is the least discussed. '
          'Intensive protection of a small remaining population \u2014 '
          'fencing, guarding, captive breeding \u2014 is expensive per '
          'individual and produces results that are visible within a '
          'political cycle. Habitat restoration is cheap per hectare, '
          'benefits far more species, and demonstrates nothing '
          'measurable for fifteen years, while budgets are allocated '
          'annually. The consequence is not that anybody prefers the '
          'worse option. It is that the better option cannot '
          'demonstrate anything before the next funding decision, and '
          'a programme that cannot show a result is a programme that '
          'is cut in the second bad year.',
          'Faced with these, the field has developed a vocabulary of '
          'prioritisation that is more honest than its public presentation. '
          'Formal frameworks ask which populations can be saved with '
          'available resources, which will probably persist without '
          'intervention, and which are unlikely to persist whatever is '
          'done. Resources are then directed at the first group, and the '
          'third group is where the difficulty lies, because membership of '
          'it is a prediction rather than an observation and the '
          'prediction has sometimes been wrong in the direction that '
          'cannot be undone.',
          'Stated plainly, that means deciding not to act for some species '
          'that could be helped if more money existed, which is a decision '
          'conservation organisations make continuously and describe '
          'publicly almost never. The reticence is understandable, since the '
          'organisations are funded by people who are not being asked to '
          'accept the logic, and it has a cost: a field that cannot discuss '
          'its own choices in public cannot defend them when they are '
          'discovered.',
          'The practical conclusion drawn by most practitioners is not that '
          'trade-offs should be avoided but that they should be stated at '
          'the point of decision, in the documents, with the thing being '
          'given up named. A proposal recording that it will cost a '
          'migration route is a proposal somebody can improve. A proposal '
          'that records only the bird population is one that will be '
          'defended for twenty years by people who do not know what it '
          'cost. The cost of the practice is low and the cost of changing '
          'it is a habit of mind, which in this field as in others is the '
          'expensive kind.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['The fence and the herd', 'Nobody was negligent', 'Funding and flagship species', 'Prioritisation frameworks'],
           1,
           'The migration was mapped and the fence sited to minimise '
           'the effect.',
           {0: 'The fence and the herd is paragraph 2.', 2: 'Funding and flagships is paragraph 4.', 3: 'The frameworks are paragraph 7.'}),
          ('Choose the best heading for paragraph 5.',
           ['Funding and flagship species', 'The flagship argument examined', 'The temporal trade-off', 'What practitioners conclude'],
           1,
           'The second half holds only where requirements genuinely '
           'overlap.',
           {0: 'Funding and flagships is paragraph 4.', 2: 'The temporal trade-off is the heading for paragraph 6.', 3: 'What practitioners conclude is paragraph 9.'}),
          ('Choose the best heading for paragraph 6.',
           ['The flagship argument examined', 'The temporal trade-off', 'Prioritisation frameworks', 'Public reticence'],
           1,
           'Intensive protection shows results in a political cycle; '
           'restoration does not.',
           {0: 'The flagship argument examined is the heading for '
               'paragraph 5.', 2: 'The frameworks are paragraph 7.', 3: 'Public reticence is paragraph 8.'}),
          (
           'The writer believes the fence project was carried out '
           'carelessly.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3 states that nobody was negligent and the route '
           'was mapped.',
           {0: 'Yes would need carelessness; paragraph 3 says nobody '
               'was negligent.', 2: 'Not Given is wrong because the conduct of the project '
               'is described.'}),
          (
           'The writer believes the flagship argument is entirely '
           'false.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5 calls its first half demonstrably true.',
           {0: 'Yes would need total falsity; paragraph 5 calls half '
               'of it demonstrably true.', 2: 'Not Given is wrong because the argument is split and '
               'rated.'}),
          ('The bird population rose from under forty pairs to over '
           '____________ within fifteen years.', None, 'three hundred',
           'Paragraph 2, while the wildebeest herd fell by two thirds.'),
          ('Measured overlap between a flagship’s requirements and other '
           'species is under a ____________ in several studied systems.',
           None, 'third',
           'Paragraph 5, far lower than the argument assumes.'),
          ('The writer says a field that cannot discuss its choices '
           'publicly cannot ____________ them.', None, 'defend',
           'Paragraph 8, when they are discovered.')])],
   listen=[
    dict(heading='A lecture on conservation trade-offs', part='Part 4',
         task='A lecture on choosing what to save · multiple choice', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'The public version of this field is a fight against '
           'opposition. The working version is a series of choices between '
           'things we all want, and I am going to spend the hour on three of '
           'them, using cases where the conservation measure worked.'),
          ('Lecturer', 'Case one. A fence, eleven kilometres, put up in 1998 '
           'to keep cattle off a ground-nesting bird’s breeding area. It '
           'worked beautifully: under forty pairs to over three hundred in '
           'fifteen years. It also crossed a wildebeest migration route, and '
           'that herd is down by about two thirds.'),
          ('Lecturer', 'And I want to stop you reaching for negligence, '
           'because it is not available. The migration was mapped. The fence '
           'was deliberately sited at the narrowest crossing to minimise the '
           'damage. The modelling simply was not built to answer the '
           'question that turned out to matter.'),
          ('Lecturer', 'Case two is about money. Funding is raised by a few '
           'large charismatic species and then spent on them. A single large '
           'mammal programme can exceed the entire invertebrate budget of '
           'its country, and those invertebrates include the pollinators the '
           'whole system runs on.'),
          ('Lecturer', 'The defence is the flagship argument: the big animal '
           'raises money nobody would give otherwise, and protecting its '
           'habitat protects everything in it. The first half is true and '
           'well evidenced. The second half depends on overlap between its '
           'requirements and everything else’s, and where that overlap has '
           'been measured it has come out under a third.'),
          ('Lecturer', 'Case three is about time, and it is the one that '
           'governs budgets. Fencing and guarding a tiny population is '
           'expensive per animal and shows results inside four years. '
           'Habitat restoration is cheap per hectare, helps far more '
           'species, and shows nothing for fifteen. Now tell me which one a '
           'minister funds.'),
          ('Lecturer', 'What follows is not that we should avoid trade-offs, '
           'which is impossible, but that we should write them down. A '
           'proposal that records what it will cost can be improved by '
           'somebody. A proposal that records only the benefit gets defended '
           'for twenty years by people who never knew the price.'),
          ('Lecturer', 'I will finish with the practice I would like you '
           'to adopt, and it takes one line. In every proposal you write, '
           'put a sentence beginning "this will cost" and complete it '
           'with something real. Not risks, which is a word that means '
           'nothing by itself. A named thing that will be worse because '
           'you did this.'),
          ('Lecturer', 'You will be told it weakens the proposal. It does, '
           'in the short run, and the proposals written that way are the '
           'ones still running in fifteen years, because nobody could '
           'discover anything about them that the authors had not already '
           'said.')],
         items=[
          (
           'The bird population rose from under forty pairs to over '
           '____________ hundred.', None, 'three',
           'Within fifteen years of the fence being erected.'),
          (
           'The lecturer rules out negligence because the migration '
           'route was',
           ['unknown', 'mapped and deliberately crossed at its narrowest point', 'abandoned', 'outside the project area'],
           1,
           'The modelling was not built for the question that '
           'mattered.',
           {0: 'He says the migration was known and mapped.', 2: 'The migration was in use, which is why it mattered.', 3: 'The fence crossed it, so it was inside the area.'}),
          (
           'A single large mammal programme can exceed the entire '
           '____________ budget of its country.', None,
           'invertebrate',
           'Including funding for pollinators the system depends on.'),
          ('The measured overlap supporting the flagship argument is',
           ['over three quarters', 'about half', 'under a third', 'not measurable'],
           2, 'Far lower than the argument assumes.',
           {0: 'Far higher than the measured overlap.', 1: 'Higher than the figure he reports.', 3: 'It has been measured in several systems.'}),
          (
           'Habitat restoration shows measurable results after about '
           '____________ years.', None, 'fifteen',
           'Against four years for intensive protection of a small '
           'population.'),
          ('His conclusion is that trade-offs should be',
           ['avoided', 'written down at the point of decision', 'decided by ministers', 'left to funders'],
           1, 'So that a proposal recording its cost can be improved.',
           {0: 'He says avoiding them is impossible.', 2: 'Ministers are who fund, not who should decide the '
               'trade-off.', 3: 'Funders are not who he says should record it.'})])],
   speak=dict(
    part='Part 3', focus='Choosing what to save',
    followup=[(('You say the famous species take the money. How should '
                'organisations decide what to protect?'),
               ('By something closer to triage than to popularity: how '
                'distinct the species is, how likely it is to be lost, and '
                'what the chance of success is. That produces a list almost '
                'nobody would donate to, which is the real constraint, and it '
                'is why public funding has to do the part that charity cannot.')),
              ('Is it ever right to let a species disappear?',
               ('It is already happening by default, and the choice is whether '
                'to make it deliberately. Where saving one would consume the '
                'budget for twenty, refusing to decide is itself a decision, '
                'taken badly. I would rather it were taken explicitly, '
                'published, and argued about.')),
              ('Should famous animals receive most of the funding?',
               ('They should receive some, because they raise money that funds '
                'other things, and that is a better argument than the one '
                'usually made for them. What I object to is pretending the '
                'allocation is biological when it is a marketing decision, '
                'because then nobody can audit what the flagship actually '
                'brought in.')),
              ('Who should make these decisions?',
               ('A body that includes the scientists, the funders and the '
                'people who live where the work happens, with the reasoning '
                'published. The scientists cannot be left alone with it, '
                'because the trade-offs are not scientific, and the funders '
                'cannot, because they are answering to donors.'))],
    intro=('Five or six sentences. Try once to describe a choice in which '
           'both options are things you want.'),
    qs=['How should conservation organisations decide what to protect?',
        'Is it right to let some species disappear?',
        'Should famous animals receive most of the funding?',
        'Who should make these decisions?'],
    shape=[('answer', 'By asking what can be saved with the money that '
            'exists.'),
           ('support', 'Which means deciding not to act for some things '
            'that could be helped.'),
           ('follow-up', 'That decision is made constantly and described '
            'publicly almost never.'),
           ('support', 'I understand the reticence, given who funds '
            'them.'),
           ('follow-up', 'But a choice that cannot be explained cannot be '
            'defended when somebody finds out about it.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='A premise under each idea, and equal weight',
         prompt=('Should conservation prioritise individual species or '
                 'whole habitats? Brainstorm eleven ideas, run the six '
                 'tests, name the premise under each survivor, and check '
                 'that your two main ideas carry equal weight. Do not write '
                 'the essay yet.'),
         plan=('Conservation should prioritise habitats and fund them '
               'through species, because the case for species-led work '
               'rests on a premise about fundraising that is true and a '
               'premise about ecological overlap that is not',
               [('The fundraising premise holds and is the strongest thing '
                 'the species-led case has',
                 ['large visible species raise money nothing else raises',
                  'that money is additional rather than diverted']),
                ('The overlap premise does not hold and is what the '
                 'argument actually rests on',
                 ['protecting a flagship is said to protect its '
                  'neighbours',
                  'measured overlap is under a third in studied '
                  'systems'])]),
         notes=[
          'This plan does something the earlier ones have not: it accepts '
          'one premise of the opposing argument and rejects the other, and '
          'the thesis then uses the accepted one. Keeping what works in the '
          'position you are rejecting is the most sophisticated use of the '
          'premise test.',
          'Equal weight is checked mechanically. Each main idea has two '
          'supports and each support is a fact rather than a restatement. '
          'An idea supported by two restatements of itself has one support, '
          'whatever the layout suggests.',
          'Eleven ideas is deliberately more than you need. The premise test '
          'is cheap to apply to four and expensive to apply to eleven, which '
          'is why the six tests come first and why this order is not '
          'arbitrary.'],
         criterion=[('Accepting one premise and rejecting the other',
                     'Task Response'),
                    ('Checking equal weight by counting real supports',
                     'Coherence and Cohesion')],
         instruct='  Produce the eleven ideas, the tests, the premises and '
                  'the weight check. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Trade-off and opportunity cost in argument',
    explain=('An argument about priorities needs language that keeps both '
             'sides of a choice visible. These patterns state what is given '
             'up in the same sentence as what is gained.'),
    examples=['Every pound spent on one species is a pound not spent on the '
              'habitat.',
              'The fence saved the bird and cost the migration.',
              'The measure worked, which is why the case is worth '
              'discussing.',
              'Results within a political cycle are preferred to results '
              'that are larger.'],
    task='Rewrite each sentence so that the thing given up is named.',
    items=[('The fence protected the breeding area.',
            'The fence raised the bird population fivefold and cut a '
            'migration route used by a herd that then fell by two thirds.'),
           ('The programme was well funded.',
            'The programme absorbed more than the national invertebrate '
            'budget, including the pollinators of the same system.'),
           ('They chose intensive protection.',
            'They funded intensive protection, which shows results in four '
            'years, instead of restoration, which helps more species after '
            'fifteen.'),
           ('Resources are limited.',
            'Directing resources at the species that can be saved means '
            'declining to act for others that could be helped with more '
            'money.'),
           ('The flagship raises money.',
            'The flagship raises money nothing else would raise, and absorbs '
            'it in proportions its habitat argument does not justify.')]),
   vocab=[('flagship species', 'a popular species used to raise support'),
          ('ecosystem service', 'a benefit a working ecosystem supplies'),
          ('prioritisation', 'deciding what to act on first'),
          ('captive breeding', 'breeding animals under controlled '
           'conditions'),
          ('invertebrate', 'an animal without a backbone'),
          ('pollinator', 'an animal that carries pollen between plants'),
          ('overlap', 'the extent to which two requirements coincide'),
          ('reticence', 'unwillingness to say something publicly')],
   expr=[('Every pound spent on one species is a pound not spent on the '
          'habitat', 'states an opportunity cost directly'),
         ('I want to stop you reaching for negligence',
          'blocks an easy explanation before it is offered'),
         ('a proposal that records its cost can be improved',
          'argues for disclosure on practical grounds'),
         ('a field that cannot discuss its choices cannot defend them',
          'names the cost of institutional silence')],
   trans=['consequently', 'which in turn', 'as a result', 'what follows'],
  ),

  dict(
   sub='What a boundary excludes',
   step=5,
   read=[
    dict(heading='The threats that walk across a reserve',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and note completion',
         band='acad', qtype='Questions 59-66',
         paras=[
          'The protected area is the central instrument of global '
          'conservation and has been for a century. Roughly sixteen per cent '
          'of the world’s land now sits inside one, the figure is rising, '
          'and international targets are stated in terms of it. The '
          'instrument works, in a sense that is measurable and worth being '
          'precise about, and its characteristic failures are all of one '
          'kind.',
          'What a protected area does reliably is prevent the conversion of '
          'land inside its boundary. Comparisons between protected areas and '
          'matched unprotected land consistently find lower rates of '
          'clearance inside, with the difference largest where enforcement '
          'is funded and smallest where designation exists only on paper. '
          'This is a real effect and it is the effect the instrument was '
          'designed for. It is also measurable, repeatedly measured and '
          'rarely disputed, which distinguishes it from a good deal else '
          'in conservation policy.',
          'Its failures follow from the same property. A boundary stops the '
          'processes that have to cross it physically and does nothing about '
          'the ones that do not. Airborne nitrogen, altered rainfall, '
          'introduced disease and the loss of migratory species that spend '
          'nine months elsewhere are all unaffected by the line on the map, '
          'and all are now among the dominant threats to the sites '
          'themselves. The shift is recent enough that most of the '
          'institutional architecture was designed when it had not '
          'happened.',
          'Hydrology is the clearest case and the one most frequently '
          'encountered. A wetland reserve is defined by a water regime, and '
          'the water regime is determined by abstraction and drainage across '
          'a catchment that is typically twenty to fifty times the area of '
          'the reserve. The protection covers the twentieth and not the '
          'twenty.',
          'A second class of failure is displacement, and it is '
          'underestimated because it is invisible from inside the boundary. '
          'Where protection prevents an activity that remains profitable, '
          'the activity relocates. Studies of logging and of fishing find '
          'substantial leakage of this kind, and a protected area assessed '
          'on what happens within it will record a success in exactly the '
          'cases where total harm has not fallen. Measuring the leakage '
          'requires monitoring outside the area, which is nobody’s '
          'responsibility and appears in nobody’s budget.',
          'The edge itself is a third problem. A protected area is not '
          'uniform: the outer two or three hundred metres differ measurably '
          'in microclimate, predation and vegetation from the interior, and '
          'for a small reserve this edge zone can be most of the area. Two '
          'reserves of identical size and different shape contain '
          'substantially different amounts of true interior, which is a '
          'design variable that costs nothing and is rarely used. A compact '
          'reserve and a long thin one of the same area are different '
          'conservation instruments, and the shape is ordinarily determined '
          'by whose land was available.',
          'None of this is an argument against protected areas, and the '
          'strongest evidence in their favour comes from the same '
          'literature that documents the failures. Where the threat is '
          'conversion — which is still the dominant threat in most tropical '
          'systems — the instrument is the most effective one available by a '
          'wide margin, and nothing proposed as a replacement performs as '
          'well on that threat. Any argument for redirecting effort has '
          'to carry that finding rather than ignore it, and the arguments '
          'that ignore it have been easy to dismiss for thirty years.',
          'The honest formulation is about matching. A protected area is an '
          'instrument against threats that cross boundaries physically and '
          'is close to useless against threats that do not. Since the '
          'balance between those two categories has shifted over the last '
          'forty years, the share of conservation effort going into '
          'boundaries should have shifted too, and it has not: it has '
          'risen, because boundaries are countable and international targets '
          'are written in percentages of land. An instrument that can be '
          'reported will out-compete one that cannot, regardless of which '
          'addresses the live threat.',
          'That last observation is the one practitioners make privately and '
          'rarely in print. A target expressed as a percentage of area '
          'protected is met by designating area, and the cheapest area to '
          'designate is the area nobody wants, which is typically high, dry, '
          'cold or steep. The global protected estate is systematically '
          'biased towards land of low agricultural value and, consequently, '
          'of low biodiversity value, and this bias is a direct product of '
          'how the target was written.',
          'What would follow from taking all of this seriously is not '
          'abandoning the instrument but changing what is counted. Targets '
          'stated in terms of the condition of features rather than the area '
          'of land would direct effort to catchments, flyways and the '
          'processes that cross lines, and would be substantially harder to '
          'report, which is the only serious objection to them and is also '
          'the reason they have not been adopted.'],
         items=[
          ('Which paragraph explains the hydrological case?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           2,
           'A catchment twenty to fifty times the area of the reserve.',
           {0: 'Paragraph 2 describes what protection reliably '
               'achieves.', 1: 'Paragraph 3 lists the threats that cross boundaries.', 3: 'Paragraph 5 is about displacement and leakage.'}),
          ('Which paragraph concerns the edge of a reserve?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
           1,
           'The outer two or three hundred metres differing from the '
           'interior.',
           {0: 'Paragraph 5 is about displacement and leakage.', 2: 'Paragraph 7 gives the evidence in favour of reserves.', 3: 'Paragraph 8 states the matching argument.'}),
          (
           'Which paragraph explains the bias in which land is '
           'protected?',
           ['Paragraph 8', 'Paragraph 9', 'Paragraph 10', 'Paragraph 7'],
           1,
           'The cheapest area to designate is the area nobody wants.',
           {0: 'Paragraph 8 states the matching argument.', 2: 'Paragraph 10 proposes changing what is counted.', 3: 'Paragraph 7 gives the evidence in favour of reserves.'}),
          ('The writer believes protected areas do not work.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 reports a real and measured effect on '
           'conversion.',
           {0: 'Yes would need failure; paragraph 2 reports a measured '
               'effect.', 2: 'Not Given is wrong because their effect is quantified.'}),
          (
           'The writer believes targets should be abandoned rather '
           'than rewritten.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph proposes changing what is counted.',
           {0: 'Yes would need abandonment; the final paragraph '
               'proposes changing what is counted.', 2: 'Not Given is wrong because the remedy is stated.'}),
          ('A wetland’s water regime is determined by a catchment twenty '
           'to ____________ times the reserve’s area.', None, 'fifty',
           'Paragraph 4: the protection covers the twentieth and not the '
           'twenty.'),
          ('When a prevented activity relocates, the effect is called '
           '____________.', None, 'leakage',
           'Paragraph 5, documented in logging and fishing studies.'),
          (
           'The only serious objection is that they are harder to '
           '____________.', None, 'report',
           'The final paragraph, which is also why they are not '
           'adopted.')])],
   listen=[
    dict(heading='Two conservationists disagree about reserves',
         part='Part 4', task='A recorded exchange · multiple choice', band='l4',
         qtype='Questions 67-72',
         script=[
          ('Chair', 'Dr Oyelaran-Fitzwilliam works on protected area '
           'effectiveness. Professor Mbeki-Sandoval works on landscape-scale '
           'conservation.'),
          ('Mbeki-Sandoval', 'I want to begin by conceding the thing my '
           'side of this argument routinely skips. Protected areas work '
           'against conversion. Matched comparisons show lower clearance '
           'inside the boundary, consistently, and nothing I advocate '
           'performs as well against that specific threat.'),
          ('Oyelaran-Fitzwilliam', 'Then I will concede mine, which is that '
           'conversion is no longer the dominant threat in most of the '
           'systems I monitor. It is nitrogen, hydrology, disease and the '
           'loss of things that spend most of the year somewhere else, and a '
           'boundary does nothing about any of those.'),
          ('Mbeki-Sandoval', 'So we agree on the diagnosis and will '
           'disagree about what follows.'),
          ('Oyelaran-Fitzwilliam', 'We will, and let me put my version '
           'first. The instrument is not failing. It is being used against '
           'threats it was never built for, which is a different problem '
           'with a different remedy.'),
          ('Mbeki-Sandoval', 'And my objection is that the instrument '
           'absorbs the effort. Sixteen per cent of land, targets written in '
           'percentages, and every ministry I work with measures success by '
           'area designated. The hydrology work that would actually save the '
           'wetland sits in a different budget that is a fortieth the '
           'size.'),
          ('Oyelaran-Fitzwilliam', 'That is the strongest thing you have '
           'and I would add to it rather than answer it. The target itself '
           'produces the bias. Designate by area and you designate the '
           'cheapest land, which is high, dry, cold or steep, and therefore '
           'the land with least to protect.'),
          ('Mbeki-Sandoval', 'You are making my argument.'),
          ('Oyelaran-Fitzwilliam', 'I am making half of it. The other half '
           'is that your alternative has never been expressed as a target '
           'anybody can report against, and a conservation goal that cannot '
           'be reported does not get funded. That is not a reason it is '
           'wrong. It is the reason it has not happened.'),
          ('Mbeki-Sandoval', 'Then let me propose the thing I have been '
           'reluctant to propose, which is a condition target running '
           'alongside the area target rather than replacing it. Harder to '
           'measure, politically survivable, and it would move money into '
           'catchments within a decade.'),
          ('Oyelaran-Fitzwilliam', 'I would support that, and I would want '
           'us both to say in public that we expect the area figure to keep '
           'rising and to stop treating that as the headline, which is a '
           'harder sentence for me than for you.'),
          ('Mbeki-Sandoval', 'I will say it with you, and I would want us '
           'to add why we are saying it: not because the area figure is '
           'wrong, but because it is the only one anybody reports and the '
           'things it misses are now most of the problem.')],
         items=[
          ('Mbeki-Sandoval concedes that protected areas',
           ['are unnecessary', 'work against conversion', 'are too expensive', 'are well funded'],
           1,
           'With nothing he advocates performing as well against that '
           'threat.',
           {0: 'He concedes they work, so not unnecessary.', 2: 'Cost is not what he concedes about them.', 3: 'Funding is his complaint about where effort goes.'}),
          ('Oyelaran-Fitzwilliam concedes that conversion',
           ['is increasing', 'is no longer the dominant threat in most systems she monitors', 'cannot be measured', 'is irrelevant'],
           1,
           'Naming nitrogen, hydrology, disease and migratory losses '
           'instead.',
           {0: 'She reports conversion as displaced, not increasing.', 2: 'Clearance rates are measured repeatedly.', 3: 'She calls it dominant in most tropical systems still.'}),
          ('Her position is that the instrument is',
           ['failing', 'being used against threats it was not built for', 'too small', 'well matched to current threats'],
           1, 'A different problem with a different remedy.',
           {0: 'She says explicitly that it is not failing.', 2: 'Size of the estate is not her point.', 3: 'She says it is matched to an older threat.'}),
          ('His objection is that the instrument',
           ['costs too much', 'absorbs the effort and the budgets', 'is unpopular', 'damages local people'],
           1, 'The hydrology budget being a fortieth the size.',
           {0: 'Cost is not his objection to the instrument.', 2: 'Popularity is not what he raises.', 3: 'Local people are not mentioned in the exchange.'}),
          (
           'She says an area target produces a bias towards land that '
           'is high, dry, cold or ____________.', None,
           'steep', 'And therefore has least to protect.'),
          ('What do they finally propose?',
           ['Replacing area targets', 'A condition target alongside the area target', 'Abolishing targets', 'A larger area target'],
           1, 'Harder to measure and politically survivable.',
           {0: 'She proposes a target alongside, not instead.', 2: 'Neither proposes abolishing targets.', 3: 'A larger area target is not what they propose.'})])],
   speak=dict(
    part='Part 3', focus='Conservation and the people nearby',
    sounds=[('Latin and Greek technical names are regular once you know where '
             'the stress goes, and most candidates put it too early: '
             'biodiVERsity, ecoSYStem services, enDEmic, hyDROlogy.'),
            ('Say three species or habitat words from this unit inside a full '
             'clause. Alone they are vocabulary; in a clause they are speech.'),
            ('The phrase worth protecting has its stress on protecting, and '
             'the whole phrase is one unit. Stressing worth turns a judgement '
             'into an argument about value.'),
            ('Where a long name is unavoidable, slow the clause and not the '
             'word. The word should run at speed and the pause belongs before '
             'it.'),
            ('Record yourself describing somewhere that should be protected. '
             'Count the technical words you avoided, and practise two of them '
             'for next time.')],
    intro=('The hardest turn in the unit. Try once to say that an '
           'instrument is being used against the wrong problem.'),
    qs=['Are protected areas the best way to conserve wildlife?',
        'What should happen to people living inside them?',
        'Can conservation work without local support?',
        'How should success be measured?'],
    shape=[('answer', 'They are excellent against one threat and close to '
            'useless against the others.'),
           ('support', 'A boundary stops what has to cross it '
            'physically.'),
           ('follow-up', 'It does nothing about nitrogen, water abstraction '
            'or a species that migrates.'),
           ('support', 'And a wetland’s water is decided across a '
            'catchment forty times its size.'),
           ('follow-up', 'So the instrument is not failing; it is being '
            'pointed at the wrong problem.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Are protected areas the best way to conserve wildlife?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say protected areas are the best way '
                 'to conserve wildlife. Discuss both views and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'Both of the usual positions here are answers to the question '
          '"does this instrument work", and the useful question is "against '
          'which threat", because the answer differs so sharply between '
          'threats that a single verdict is bound to be wrong about half of '
          'them.',
          'Against the conversion of land, protected areas are the most '
          'effective instrument available and the evidence is not seriously '
          'contested. Comparisons with matched unprotected land find lower '
          'rates of clearance inside boundaries wherever enforcement is '
          'funded, and in tropical systems, where conversion remains the '
          'dominant threat, nothing proposed as an alternative performs as '
          'well.',
          'Against everything else, a boundary does very little, and for a '
          'structural reason rather than a failure of implementation. A line '
          'on a map stops the processes that must physically cross it. '
          'Airborne nitrogen, altered rainfall, introduced disease and the '
          'decline of species that spend most of the year elsewhere are '
          'untouched by it, and these are now the dominant threats in '
          'temperate systems. A wetland reserve is defined by its water, and '
          'its water is determined across a catchment perhaps forty times '
          'its size.',
          'Neither position in the debate follows from that, and the third '
          'one does. The instrument is not failing; it is being used against '
          'threats it was never designed for, and the reason is '
          'measurement. International targets are written as percentages of '
          'land protected, so effort flows to designation, and designation '
          'flows to the cheapest land, which is high, dry, cold or steep and '
          'therefore has least to protect. The bias is a direct product of '
          'how the target is written.',
          'What I would propose is therefore not fewer protected areas but a '
          'second target expressed in the condition of features rather than '
          'the area of land, running alongside the first. It would direct '
          'money to catchments and flyways, where the live threats operate, '
          'and it would be considerably harder to report. That difficulty is '
          'the only serious objection to it, and it is also the whole '
          'explanation of why a field that has understood this for thirty '
          'years has not acted on it.'],
         notes=[
          'The introduction replaces the question with a better one in a '
          'single sentence — not "does it work" but "against which threat" '
          '— and then the essay is organised by that distinction.',
          'Paragraphs 2 and 3 are the two positions, each stated at full '
          'strength, and paragraph 4 is the third position arrived at by '
          'diagnosis rather than compromise. That is structure 3 done '
          'properly.',
          'The conclusion identifies measurement as the mechanism and '
          'predicts the objection to its own proposal. Naming why your '
          'solution will be resisted is a stronger close than claiming it '
          'is obvious.'],
         model65=[
                  'Some people say protected areas are the best way to '
                  'conserve wildlife. I think they are needed but '
                  'not sufficient.',
                  'The evidence for protection is real. Land inside '
                  'reserves is measurably less likely to be converted '
                  'to farming or building, which is the largest single '
                  'cause of species loss. A reserve is also a decision '
                  'that can be made once and enforced for decades.',
                  'But a fence does not stop the threats that matter '
                  'most now. Water is extracted upstream, pollution '
                  'arrives on the wind, and the climate inside a '
                  'reserve changes with the climate outside it. '
                  'Several famous wetlands have dried out while '
                  'remaining fully protected in law.',
                  'I think protection should continue and should be '
                  'judged differently. What is counted at present is '
                  'the area protected, which is easy to measure and '
                  'says nothing about condition. Measuring the '
                  'condition of what is inside would show where '
                  'protection is working, and where a reserve exists '
                  'only on a map.',
                  ],
         gap65=[
                'It explains why area is the measure that gets '
                'counted, which is the reason the target rewards the '
                'wrong thing.',
                'It says what the flagship argument gets right before '
                'showing where it fails.',
                'It names the objection to condition-based measurement '
                'and answers it.',
                ],
         criterion=[('Replacing the question with a better one',
                     'Task Response'),
                    ('A third position arrived at by diagnosis, not '
                     'compromise', 'Task Response'),
                    ('Predicting the objection to your own proposal',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='The boundary of a problem as a hidden premise',
    explain=('Every argument draws a line around the problem it is solving, '
             'and the line is almost never stated. Naming it is often the '
             'strongest objection available.'),
    examples=['The line drawn round the problem excluded the pathway that '
              'mattered.',
              'The protection covers the twentieth and not the twenty. A reserve '
          'manager in this position has authority over the thing being '
          'damaged and none at all over what is damaging it.',
              'Assessed on what happens inside it, the scheme records a '
              'success.',
              'The instrument is not failing; it is pointed at a different '
              'problem.'],
    task='Rewrite each claim so that it names the boundary being assumed.',
    items=[('The reserve is well managed.',
            'The reserve is well managed within its boundary, while its '
            'water regime is determined across a catchment forty times its '
            'size.'),
           ('Protection reduced logging.',
            'Logging fell inside the protected area; studies of leakage find '
            'much of it relocating rather than ceasing.'),
           ('The policy worked.',
            'The policy achieved its stated measure, which counts activity '
            'inside the area and not activity displaced beyond it.'),
           ('We have protected sixteen per cent of land.',
            'Sixteen per cent of land is designated, disproportionately in '
            'places of low agricultural and biological value.'),
           ('The threats are being addressed.',
            'The threats that cross the boundary physically are addressed; '
            'those arriving through air and water are not.')]),
   vocab=[('relocation', 'an activity moving rather than ceasing'),
          ('edge effect', 'conditions near a boundary differing from the '
           'interior'),
          ('drainage basin', 'all the land whose water reaches one place'),
          ('abstraction', 'water taken out of a river or aquifer'),
          ('flyway', 'the route a migratory bird population uses'),
          ('protected status', 'the formal standing given to a site'),
          ('matched comparison', 'comparing like with like to isolate an '
           'effect'),
          ('interior', 'the part of an area away from its edges')],
   expr=[('The line drawn round the problem excluded the pathway that '
          'mattered', 'names a boundary as the source of a failure'),
         ('the protection covers the twentieth and not the twenty',
          'states a scale mismatch compactly'),
         ('it is being used against threats it was never built for',
          'defends an instrument while criticising its use'),
         ('a goal that cannot be reported does not get funded',
          'explains an institutional outcome by its measurement')],
   trans=['admittedly', 'and yet', 'on balance', 'against everything else'],
  ),
 ],
 technique=dict(
  title='What a method cannot detect, and reporting that honestly',
  body=('Some Task 1 visuals compare methods, instruments or sources rather '
        'than places or years, and they are the hardest kind to describe '
        'well because the obvious move — saying which is best — is '
        'unavailable. Three surveys that disagree are not a ranking. What '
        'the chart shows is that each method is strongest somewhere and '
        'weakest elsewhere, and your Overall statement should say that '
        'structure rather than naming a winner. Describe each method by its '
        'one strength and its weaknesses as a set, and resist the '
        'temptation to explain why: a sentence about cameras being at knee '
        'height is knowledge you brought, not data you were given, and Task '
        '1 marks the second and penalises the first.'),
  panel=[('No winner, no ranking',
          'If each series leads in a different category, that structure is '
          'the main feature.'),
         ('Strength first, weaknesses as a set',
          'One paragraph per method: what it leads in, then the rest '
          'together.'),
         ('A zero is data, not nothing',
          'The most informative cell is often the empty one. Report it and '
          'do not interpret it.'),
         ('Do not explain',
          'Why the methods differ is not on the chart. Speculation costs '
          'Task Achievement marks.')],
  task='Take the chart in cycle 3. Write the Overall statement about the '
       'structure, and one sentence reporting the zero without explaining '
       'it.',
  qs=['Which series leads in which category?',
      'Is there any category where two series are close?',
      'Write the Overall statement naming the structure.',
      'How would you report the zero without interpreting it?',
      'What explanation were you tempted to add, and why must it stay '
      'out?']),
 outlining=dict(
  title='Premise naming on a brainstorm of eleven',
  body=('By now the premise test is familiar on four ideas. Running it on '
        'eleven is a different exercise and is worth doing once, because at '
        'that volume you start to see that your ideas share premises. Three '
        'ideas about funding usually rest on one assumption about what '
        'donors respond to; four ideas about enforcement rest on one about '
        'what can be observed. When several ideas share a premise, they are '
        'one idea with three illustrations, and treating them as three '
        'paragraphs produces an essay that feels repetitive for reasons the '
        'writer cannot identify. Group by shared premise, keep the best '
        'illustration of each group, and you will usually find you have two '
        'ideas rather than eleven — which is the number you needed.'),
  frame=('Conservation should prioritise habitats and fund them through '
         'species, because the case for species-led work rests on a premise '
         'about fundraising that is true and a premise about ecological '
         'overlap that is not',
         [('The fundraising premise holds and is the strongest thing the '
           'species-led case has',
           ['large visible species raise money nothing else raises',
            'that money is additional rather than diverted']),
          ('The overlap premise does not hold and is what the argument '
           'actually rests on',
           ['protecting a flagship is said to protect its neighbours',
            'measured overlap is under a third in studied systems'])]),
  task='Brainstorm eleven ideas for the cycle 4 prompt, write the premise '
       'under each, then group the ideas by shared premise and count how '
       'many distinct ideas you actually have.',
  qs=['How many distinct premises are there under eleven ideas?',
      'Which group of ideas is really one idea with illustrations?',
      'Which illustration is the strongest in each group?',
      'Did any premise support ideas on both sides of the argument?',
      'How many body paragraphs does your outline now have?'],
  answers=['usually three or four, which is the useful discovery',
           'the funding group, almost always',
           'the one with a number attached to it',
           'occasionally, and that premise is where the essay should '
           'start',
           'two, which is what a 250-word essay can carry properly']),
 candos=['I can read designation guidance for the features that are '
         'protected',
         'I can describe a chart comparing methods without ranking them',
         'I can explain why a payment may buy nothing at all',
         'I can group brainstormed ideas by the premise they share',
         'I can name the boundary an argument has drawn around its '
         'problem'],
 tip=('When a Task 1 chart compares methods rather than places, there is no '
      'winner to name. Say that each is strongest somewhere, report the '
      'zeros, and explain nothing.'),
)
