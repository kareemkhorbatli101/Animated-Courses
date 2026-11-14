# -*- coding: utf-8 -*-
"""Unit 34 — Materials and Engineering Design. Volume 4."""
from content._g import gaps

_GT, _GA = gaps(
    'A material is chosen, not found. Steel is not simply strong; it is strong in tension, '
    'predictable in failure, and cheap enough to use in quant{ity}, and an engineer selects '
    'it for whichever of those properties the job act{ually} needs. The commonest mistake a '
    'student makes is to rank materials on a single axis, as though one could be better than '
    'another in gen{eral}. Nothing is better in general. Everything is better for some '
    'purp{ose} and worse for the next, and learning to say which is most of the '
    'train{ing}.')

_ET, _EA = gaps(
    'Failure is the subject engineering is organised around, and students arrive expecting it '
    'to be about avoiding breakage. It is not. A structure that cannot fail at any load is '
    'either impossib{le} or absurdly expensive, so the real design question is how a thing '
    'fails and whether anybody is warned before{hand}. A steel beam loaded beyond its limit '
    'bends visibly for a long time before it gives way, which is why it is spec{ified} in '
    'buildings people occupy. A ceramic of the same strength shatters without any prior '
    'deform{ation} at all, and the absence of warning is the proper{ty} that rules it out, '
    'not any deficiency in strength. This way of thinking generalises far beyond '
    'mater{ials}. A system designed so that its faults appear early and conspicuously is '
    'safer than one designed to be fault{less}, because the second design is a claim about '
    'the future and the first is a provi{sion} for being wrong about it. Engineers learned '
    'this through a century of collapses and the lesson is still resisted by almost everybody '
    'who commis{sions} a building, because a structure advertised as incapable of failing is '
    'easier to sell than one adver{tised} as failing politely.')

UNIT = dict(
    n=34, vol=4, level='B2',
    title='Materials and Engineering Design',
    icons=['hammer', 'chart', 'speech'],
    subs=['Choosing a material', 'Tolerance and failure', 'Designing for being wrong'],
    grammar='Purpose, means and instrument',
    field='tensile, ductile, tolerance',
    opener_line='Engineering is the discipline of deliberate compromise, and the language it '
                'needs is the language of purpose: what is this for, how is it done, what '
                'with. This unit teaches the structures that answer those three questions '
                'and keeps them apart.',
    candos=[
        'I can state what something is for without confusing purpose with result.',
        'I can use so as to, in order that, by means of and with a view to accurately.',
        'I can compare two options on several criteria at once.',
        'I can explain why the obvious choice is wrong for a particular job.',
        'I can follow a talk about a design decision and its trade-offs.',
        'I can write a recommendation that names what it gives up.',
    ],

    acad=[
        ('tensile', 'to do with being pulled apart'),
        ('compressive', 'to do with being pushed together'),
        ('ductile', 'able to deform a long way before breaking'),
        ('brittle', 'breaking suddenly with no deformation'),
        ('fatigue', 'weakening caused by repeated loading'),
        ('tolerance', 'the permitted range of variation'),
        ('alloy', 'a metal mixed with another element'),
        ('corrosion', 'gradual chemical destruction of a surface'),
        ('stiffness', 'resistance to being bent'),
        ('yield', 'the load at which permanent deformation begins'),
        ('fracture', 'a break in a material'),
        ('load', 'the force a structure has to carry'),
        ('stress', 'force per unit area inside a material'),
        ('polymer', 'a material made of long repeating molecules'),
        ('composite', 'two materials combined to get both sets of properties'),
        ('thermal expansion', 'change of size with temperature'),
        ('buckling', 'sudden sideways collapse of a slender member under load'),
        ('elasticity', 'the ability to return to the original shape'),
    ],
    family=('conduct', [
        ('conduction', 'noun', 'heat loss by conduction through the frame'),
        ('conductive', 'adjective', 'a conductive coating on the glass'),
        ('conductivity', 'noun', 'copper has very high conductivity'),
    ]),
    collocs=[
        ('rule out', 'to eliminate as a possibility'),
        ('allow for', 'to leave room for in a calculation'),
        ('trade off', 'to accept less of one thing for more of another'),
        ('give way', 'to collapse under load'),
        ('stand up to', 'to withstand'),
        ('at the expense of', 'by sacrificing'),
        ('over-engineer', 'to build with far more capacity than needed'),
        ('fit for purpose', 'adequate for the job it has to do'),
        ('by design', 'deliberately, not by accident'),
        ('in practice', 'as things actually turn out'),
    ],
    stance=[
        ('by design', 'deliberately rather than by accident'),
        ('is commonly assumed', 'widely believed, not demonstrated'),
        ('in practice', 'as it actually turns out'),
        ('rightly or wrongly', 'the writer declines to judge'),
        ('the evidence suggests', 'the writer cites rather than asserts'),
    ],
    nuance=[
        ('strength / stiffness', 'what it survives / how much it bends'),
        ('ductile / brittle', 'warns before failing / does not'),
        ('tolerance / accuracy', 'permitted variation / closeness to target'),
    ],
    vocab_talk=[
        'Name something badly designed. What was it optimised for instead?',
        'Why is a material never simply better than another?',
        'Describe a failure that gave warning, and one that did not.',
        'Is over-engineering a virtue or a waste? Defend your answer.',
    ],
    again=['beam', 'column', 'strain', 'safety factor',
           'prototype', 'stress test', 'failure mode', 'maintenance interval'],

    r1=dict(
        sub='Choosing a material',
        skill=('Completing technical nouns and negative adjectives',
               ['Engineering prose is dense with -ity and -ion nouns: quantity, property, '
                'deformation, provision.',
                'The -less ending marks absence: faultless, flawless. The -ible and -able '
                'endings mark possibility.',
                'A gap after the or a needs a noun, whatever the root looks like.']),
        guided_text=_GT, guided=_GA,
        guided_hint='quant--- is quantity — it follows in and names an amount, so the slot is '
                    'a noun.',
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='Tolerance and failure',
        skill=('Reading a specification against a substitution request',
               ['A specification states required properties. A substitution asks to meet '
                'them another way.',
                'Check each required property separately. A substitute can pass four tests '
                'and fail the fifth.',
                'The decisive property is often the one that is not about strength.']),
        docs=[
            ('notice', 'Faculty workshop · materials specification for student builds', [
                '# Required for any load-bearing member',
                '* A ductile failure mode: visible deformation before fracture.',
                '* A documented yield strength from the supplier, not a catalogue estimate.',
                '* Resistance to corrosion for the life of the build, or a stated coating.',
                '# Substitutions',
                '* A substitution may be approved where every required property is met by '
                'other means.',
                '* Equal or greater strength alone is not sufficient grounds.',
                '# Prohibited without a separate risk assessment',
                '* Any brittle material in a member above head height.',
            ], 'notice'),
            ('email', 'w.tanaka@eng.uni.ac.uk', 'm.szabo@student.uni.ac.uk',
             '08/05/2028', 'Your substitution request — the carbon tube', [
                 'Dear Ms Szabo',
                 '',
                 'Good request, clearly argued, and I am going to refuse the main part of it',
                 'for a reason that is not about strength.',
                 '',
                 'You are right that the carbon tube beats the aluminium on stiffness and',
                 'on strength to weight by a wide margin, and your supplier data is proper',
                 'test data rather than a catalogue figure. Four of the five boxes are',
                 'ticked.',
                 '',
                 'The fifth is the failure mode. Carbon composite in this layup fails',
                 'suddenly and completely, with no visible deformation first. Your member',
                 'sits above head height in a space the public walks through during the',
                 'show, so the workshop rule applies and I will not waive it. The point of',
                 'the rule is not that the tube is likely to fail; it is that if it does,',
                 'nobody gets a warning.',
                 '',
                 'Two ways forward. Use the carbon in the diagonal braces, which are below',
                 'head height and where its stiffness actually earns something. Or keep it',
                 'in the overhead member and add a steel tension cable as redundancy — then',
                 'the brittle part can fail and the structure does not.',
                 '',
                 'The second option is more interesting and I would supervise it.',
                 '',
                 'Dr Tanaka',
             ]),
        ],
        guided=[
            ('What failure mode is required for a load-bearing member?',
             ('Any', 'A ductile one, with visible deformation before fracture',
              'A brittle one', 'None is specified'), 1,
             'The specification puts it first precisely because it is the property students '
             'overlook.'),
            ('What kind of yield strength figure is acceptable?',
             ('A catalogue estimate', 'Documented supplier test data',
              'A calculated value', 'Any published figure'), 1,
             'The notice rules out catalogue estimates explicitly, which is why the student’s '
             'data is accepted.'),
            ('On what grounds may a substitution be approved?',
             ('Greater strength', 'Every required property being met by other means',
              'Lower cost', 'Supervisor approval alone'), 1,
             'Equal or greater strength alone is stated not to be sufficient grounds.'),
            ('What is prohibited without a separate risk assessment?',
             ('Any substitution', 'A brittle material above head height',
              'Composite materials', 'Uncoated steel'), 1,
             'That rule is what the carbon tube runs into, rather than anything about its '
             'strength.'),
        ],
        exam=[
            ('Why is the request refused?',
             ('The strength is inadequate', 'The failure mode gives no warning',
              'The data is unreliable', 'The cost is too high'), 1,
             'The supervisor says explicitly that the reason is not about strength.'),
            ('What does the supervisor concede about the carbon tube?',
             ('Nothing', 'It beats the aluminium on stiffness and strength to weight',
              'It is cheaper', 'It is easier to work'), 1,
             'He grants four of the five requirements before refusing on the fifth.'),
            ('What does he say the point of the rule is?',
             ('That the tube will probably fail', 'That nobody would be warned if it did',
              'That composites are untested', 'That the public dislikes them'), 1,
             'He separates the probability of failure from the consequence of an unannounced '
             'one.'),
            ('Why does the location matter?',
             ('It is hard to reach', 'It is above head height in a public space',
              'It is exposed to weather', 'It carries the heaviest load'), 1,
             'The prohibition is tied to height and occupancy rather than to load.'),
            ('What is the first alternative offered?',
             ('A thicker tube', 'Using the carbon in the diagonal braces',
              'A different composite', 'Dropping the member'), 1,
             'Those braces sit below head height and are where the stiffness earns '
             'something.'),
            ('How does the second alternative solve the problem?',
             ('By strengthening the tube', 'A steel cable means the brittle part can fail without the structure failing',
              'By lowering the member', 'By adding a coating'), 1,
             'Redundancy changes the consequence of failure rather than its likelihood.'),
            ('What does the supervisor’s closing line tell you?',
             ('He prefers the simpler option', 'He favours the redundancy solution and will support it',
              'He doubts the project', 'He wants a risk assessment'), 1,
             'Calling it more interesting and offering supervision is an endorsement rather '
             'than a permission.'),
        ],
    ),

    r3=dict(
        sub='Designing for being wrong',
        title='Designing So That Mistakes Are Visible',
        words=265,
        paras=[
            'It is commonly assumed that the best engineering is the engineering that does '
            'not fail, and the profession has spent a century learning why this is the wrong '
            'target. Nothing can be made incapable of failure at any load, and a design that '
            'claims to be is making a prediction about conditions nobody has seen. The more '
            'useful question is what happens at the moment the prediction turns out to be '
            'wrong, and the answer is a property of the design rather than an accident.',

            'Two systems with the same probability of failure can therefore be very '
            'differently safe. A steel beam deflects conspicuously for a long time before it '
            'yields, and the deflection is a message to anybody in the building. A brittle '
            'member of equal strength sends no message at all. By design, good structures '
            'distribute the consequence of a wrong assumption: a redundant load path means '
            'the failing part can fail without the structure doing so, which converts a '
            'collapse into a repair.',

            'The evidence suggests this way of thinking transfers well beyond structures, and '
            'that it transfers badly in one specific respect. Software, aviation procedure '
            'and clinical protocol all now build in visible failure and spare capacity. What '
            'does not transfer is the willingness to pay for it, because the cost of '
            'graceful failure is visible and the benefit is a collapse that did not happen. '
            'Rightly or wrongly, the person authorising the expenditure is rarely the person '
            'who would have been standing underneath, and in practice that asymmetry does '
            'more to shape what gets built than any disagreement about engineering.',
        ],
        skill=('Reading a passage that reframes a goal',
               ['The move is to show that the obvious objective is the wrong one, then '
                'supply a better one.',
                'Look for the sentence that converts a question of probability into a '
                'question of consequence.',
                'The last paragraph often explains why the better idea is not adopted, and '
                'the reason is usually not technical.']),
        guided=[
            ('What does the author say is the wrong target?',
             ('Low cost', 'Engineering that does not fail',
              'Rapid construction', 'Maximum strength'), 1,
             'The first sentence names the common assumption so that the paragraph can '
             'replace it.'),
            ('What is a design that claims never to fail actually doing?',
             ('Meeting the specification', 'Making a prediction about unseen conditions',
              'Wasting material', 'Following regulation'), 1,
             'That reframing is the author’s central objection to the goal.'),
            ('Why can two systems with equal failure probability differ in safety?',
             ('One is cheaper', 'They differ in what happens when failure occurs',
              'One is newer', 'One is better maintained'), 1,
             'The steel beam sends a message and the brittle member does not.'),
            ('What does a redundant load path achieve?',
             ('Greater strength', 'The failing part can fail without the structure failing',
              'Lower cost', 'Faster construction'), 1,
             'The author calls this converting a collapse into a repair.'),
        ],
        exam=[
            ('What does the author say the deflection of a steel beam is?',
             ('A defect', 'A message to anybody in the building',
              'A sign of poor material', 'A calculation error'), 1,
             'The contrast with a brittle member that sends no message is the point of the '
             'paragraph.'),
            ('Which fields does the author say have adopted this thinking?',
             ('Only structural engineering', 'Software, aviation procedure and clinical protocol',
              'Architecture and law', 'None of them'), 1,
             'All three are named as building in visible failure and spare capacity.'),
            ('What does the author say does not transfer?',
             ('The engineering itself', 'The willingness to pay for it',
              'The terminology', 'The regulation'), 1,
             'The cost is visible and the benefit is an event that did not occur.'),
            ('Why is graceful failure hard to fund?',
             ('It is technically difficult', 'Its cost is visible and its benefit is invisible',
              'It is rarely effective', 'Regulators forbid it'), 1,
             'A collapse that did not happen cannot be shown to whoever authorised the '
             'spending.'),
            ('What asymmetry does the author identify?',
             ('Between materials', 'Between the person paying and the person at risk',
              'Between disciplines', 'Between regulators and builders'), 1,
             'The author says this does more to shape what gets built than any engineering '
             'disagreement.'),
            ('What does "rightly or wrongly" signal here?',
             ('The author approves', 'The author declines to judge the asymmetry',
              'The author is uncertain of the facts', 'The author is quoting'), 1,
             'It marks a deliberate refusal to evaluate while still reporting the effect.'),
            ('Which would most strengthen the final paragraph?',
             ('Evidence that composites are improving',
              'Evidence that projects with the decision-maker exposed to the risk specify more redundancy',
              'Evidence that collapses are rare',
              'Evidence that regulation has tightened'), 1,
             'The claim is specifically about who bears the risk relative to who authorises '
             'the spending.'),
            ('All of the following are stated EXCEPT:',
             ('Nothing can be made incapable of failure',
              'Redundancy converts a collapse into a repair',
              'Several other fields have adopted this thinking',
              'The cost of graceful failure is usually small'), 3,
             'The passage says the cost is visible, and never says it is small.'),
            ('What is the structure of the passage as a whole?',
             ('A history of failures', 'A reframing, its mechanism, and why it is not funded',
              'A comparison of materials', 'An argument for regulation'), 1,
             'Each paragraph does one of those three jobs in that order.'),
        ],
    ),

    l1=dict(
        sub='Choosing a material',
        caption='Two students in the faculty workshop',
        skill=('Hearing a choice justified on several criteria',
               ['When a speaker chooses between options, they will name the criteria and say '
                'which one decides.',
                'The deciding criterion is the examinable part, not the list.',
                'Listen for: it wins on, it loses on, and the one that matters here is.']),
        warm=[
            ('Man: Is aluminium not weaker than steel?',
             ('Per kilogram it is not, which is the point.', 'Yes, much weaker.',
              'About three millimetres.', 'In the workshop.'), 0,
             'A negative question answered by changing the basis of comparison rather than '
             'agreeing.'),
            ('Woman: Why not just use the strongest thing available?',
             ('Because strength is rarely what decides.', 'Yes, we should.',
              'About two hundred megapascals.', 'From the supplier.'), 0,
             'A why-not question answered with the principle rather than a specific '
             'material.'),
            ('Man: Does the tube have test data?',
             ('Proper test data, not a catalogue figure.', 'Yes, it is strong.',
              'About six metres.', 'Last Tuesday.'), 0,
             'A does-it-have question answered with the distinction the workshop rule turns '
             'on.'),
        ],
        script=[
            ('Woman', 'I have been going round in circles on the overhead member. The carbon '
                      'tube is better than the aluminium on everything I can measure.'),
            ('Man', 'Everything you can measure, or everything on your list?'),
            ('Woman', 'Fair. Stiffness, strength to weight, mass, and the supplier sent real '
                      'test data rather than a catalogue number.'),
            ('Man', 'So four criteria and it wins on four. What is the fifth?'),
            ('Woman', 'That is the bit I keep not wanting to look at. It fails suddenly. No '
                      'deformation, no noise, nothing.'),
            ('Man', 'And the member is where?'),
            ('Woman', 'Above head height, over the walkway, during the public show.'),
            ('Man', 'Then the fifth criterion is the only one that matters and the other four '
                    'are decoration. That is not a strength problem, it is a warning problem.'),
            ('Woman', 'So I go back to aluminium and lose the stiffness.'),
            ('Man', 'Or you keep the tube and put a steel cable behind it. Then the tube is '
                    'allowed to fail, because the cable catches the load and the structure '
                    'sags instead of dropping. That is the answer Tanaka will like, because '
                    'it is the answer to the actual question.'),
        ],
        items=[
            ('What does the man question in her first statement?',
             ('Her measurements', 'Whether her list of criteria is complete',
              'Her supplier', 'Her calculation'), 1,
             'Everything you can measure, or everything on your list, is a challenge to the '
             'criteria rather than the data.'),
            ('On how many criteria does the carbon tube win?',
             ('Three', 'Four', 'Five', 'All of them'), 1,
             'She names stiffness, strength to weight, mass and real test data.'),
            ('What is the fifth criterion?',
             ('Cost', 'The failure mode', 'Corrosion', 'Availability'), 1,
             'She admits it is the one she keeps not wanting to look at.'),
            ('Why does the man say the other four are decoration?',
             ('They were measured badly', 'The fifth criterion decides this case',
              'They are irrelevant generally', 'The supplier data is weak'), 1,
             'He calls it a warning problem rather than a strength problem.'),
            ('What does the location contribute to the decision?',
             ('Nothing', 'Above head height over a public walkway makes the warning essential',
              'It affects the load', 'It affects corrosion'), 1,
             'The absence of warning only matters because people are underneath it.'),
            ('What does the cable solution achieve?',
             ('It strengthens the tube', 'It lets the tube fail without the structure dropping',
              'It reduces the load', 'It replaces the tube'), 1,
             'The structure sags instead of dropping, which is a change of consequence rather '
             'than of probability.'),
            ('Why does the man think the supervisor will prefer it?',
             ('It is cheaper', 'It answers the actual question',
              'It uses less material', 'It is quicker to build'), 1,
             'The actual question was about warning, and the cable addresses that rather than '
             'the strength figures.'),
        ],
    ),

    l2=dict(
        sub='Tolerance and failure',
        caption='A workshop induction on specifications',
        poster=['Workshop induction · compulsory before any build',
                'Ductile failure in every load-bearing member',
                'Substitutions: ask before you buy'],
        skill=('Hearing a rule explained by its purpose',
               ['A good induction gives the reason, not just the rule. The reason is what '
                'the items test.',
                'Listen for: the rule exists because, what we are actually protecting '
                'against.',
                'A rule with a stated purpose can be argued with. That is deliberate.']),
        warm=[
            ('Woman: Why must failure be ductile?',
             ('So that somebody gets a warning.', 'Because it is stronger.',
              'About five millimetres.', 'In every member.'), 0,
             'A why-must question answered with the purpose rather than a property.'),
            ('Man: Is greater strength enough for a substitution?',
             ('No — every property has to be met.', 'Yes, always.',
              'About twice as strong.', 'Ask the workshop.'), 0,
             'An is-it-enough question answered with the rule that makes the answer no.'),
            ('Woman: What if I have already bought the material?',
             ('Then you have bought it and we still say no.', 'Then it is approved.',
              'About forty pounds.', 'Last week.'), 0,
             'A what-if question answered plainly, because the point of the rule is that it '
             'does not bend to sunk cost.'),
        ],
        script=[
            ('Man', 'Three rules, and I am going to give you the reason for each, because a '
                    'rule you understand is a rule you will apply when I am not watching. '
                    'First: every load-bearing member must fail ductile. That means it '
                    'deforms visibly, for a long time, before it breaks. The rule is not '
                    'about strength. A brittle tube can be twice as strong as a steel bar and '
                    'still be refused, because when the steel bar is overloaded it bends and '
                    'everybody underneath it can see that something is wrong. The brittle '
                    'tube gives you nothing. We are not protecting against failure; we are '
                    'protecting against failure without warning. Second: supplier test data, '
                    'not catalogue figures. A catalogue number is a typical value for a family '
                    'of products and your piece is not the typical piece. Third, and this is '
                    'the one that causes arguments: equal or greater strength is not grounds '
                    'for a substitution on its own. Every required property has to be met, by '
                    'some means. If you have already bought something, that is unfortunate '
                    'and it changes nothing — I have refused things that were already '
                    'delivered and I will do it again. Come and ask first. The conversation '
                    'takes ten minutes and it is free.'),
        ],
        items=[
            ('Why does he give the reason for each rule?',
             ('To fill time', 'Because an understood rule is applied when nobody is watching',
              'Because the rules are optional', 'Because students complain'), 1,
             'That is his stated justification for the whole structure of the induction.'),
            ('What does ductile failure mean?',
             ('It fails at a higher load', 'It deforms visibly for a long time before breaking',
              'It does not fail', 'It fails quietly'), 1,
             'The visible deformation is what makes the warning possible.'),
            ('Why can a stronger brittle tube be refused?',
             ('It is more expensive', 'It gives no warning when overloaded',
              'It cannot be tested', 'It corrodes'), 1,
             'He says they are protecting against failure without warning rather than against '
             'failure.'),
            ('What is wrong with a catalogue figure?',
             ('It is usually too low', 'It is a typical value for a family, not this piece',
              'It is out of date', 'It cannot be verified'), 1,
             'The specification needs the property of the actual member being used.'),
            ('What does he say about material already bought?',
             ('It will be approved', 'It changes nothing',
              'It needs a risk assessment', 'It can be returned'), 1,
             'He says he has refused delivered material before and will again.'),
            ('What is his closing advice?',
             ('Read the specification', 'Ask first, because the conversation is short and free',
              'Buy from approved suppliers', 'Keep receipts'), 1,
             'He contrasts ten free minutes with the cost of a refused purchase.'),
        ],
    ),

    l3=dict(
        sub='Designing for being wrong',
        caption='A lecture on failure and design philosophy',
        board=['Wrong target: never fails',
               'Right question: how does it fail',
               'Redundancy turns collapse into repair',
               'Cost visible, benefit invisible'],
        skill=('Following a talk that names a non-technical obstacle',
               ['Many engineering lectures end on an economic or institutional problem '
                'rather than a technical one.',
                'Listen for the switch: the engineering here is settled, and what is not '
                'settled is who pays.',
                'The final item will usually be about that obstacle.']),
        warm=[
            ('Man: Should a bridge be designed never to fail?',
             ('Nothing can be, so that is the wrong target.', 'Yes, obviously.',
              'About a century.', 'By the engineers.'), 0,
             'A should-it question answered by rejecting the target rather than the '
             'ambition.'),
            ('Woman: What does redundancy actually buy you?',
             ('A repair instead of a collapse.', 'Yes, it helps.',
              'About ten per cent more cost.', 'In the load path.'), 0,
             'A what-does-it-buy question answered with the change in outcome.'),
            ('Man: Why is graceful failure hard to fund?',
             ('The cost shows and the benefit never does.', 'Because it is expensive.',
              'About fifteen per cent.', 'From the client.'), 0,
             'A why-is-it-hard question answered with the asymmetry rather than the price.'),
        ],
        script=[
            ('Woman', 'I want to unsettle something you probably arrived with, which is that '
                      'the best engineering is the engineering that does not fail. Nothing can '
                      'be made incapable of failing at any load. A design that claims '
                      'otherwise is making a prediction about conditions nobody has observed, '
                      'and the history of this profession is a history of such predictions '
                      'being wrong in ways nobody had thought of. So the better question, and '
                      'the one we actually design around, is: when the prediction is wrong, '
                      'what happens? And that is not luck. It is a property you choose. Two '
                      'structures with identical probability of failure can be very '
                      'differently safe. A steel beam sags for a long time before it yields, '
                      'and the sag is a message. A brittle member of the same strength sends '
                      'no message. Add a redundant load path and the failing component is '
                      'permitted to fail: the structure sags, somebody notices, and you have '
                      'converted a collapse into a repair. Now, the part that is not '
                      'engineering. Software, aviation and medicine have all adopted this, and '
                      'what has not travelled with it is the willingness to pay. The cost of '
                      'graceful failure appears on a budget line. The benefit is a collapse '
                      'that did not occur, and you cannot show anybody that. Rightly or '
                      'wrongly, the person signing the cheque is almost never the person who '
                      'would have been standing underneath, and in practice that single fact '
                      'shapes the built environment more than anything in my field.'),
        ],
        items=[
            ('What assumption does she set out to unsettle?',
             ('That engineering is expensive', 'That the best engineering never fails',
              'That materials matter most', 'That regulation works'), 1,
             'She says nothing can be made incapable of failing at any load.'),
            ('What is a design that claims never to fail doing?',
             ('Meeting the code', 'Predicting conditions nobody has observed',
              'Wasting material', 'Following tradition'), 1,
             'She ties this to a history of such predictions being wrong unexpectedly.'),
            ('What does she say about the sag of a steel beam?',
             ('It is a defect', 'It is a message', 'It is unavoidable', 'It is a sign of overload only'), 1,
             'The brittle member of the same strength sends no message, which is the '
             'contrast.'),
            ('What does a redundant load path permit?',
             ('A stronger structure', 'The failing component to fail without a collapse',
              'A cheaper build', 'A longer life'), 1,
             'She calls the result converting a collapse into a repair.'),
            ('What has not travelled to other fields with the idea?',
             ('The terminology', 'The willingness to pay for it',
              'The regulation', 'The evidence'), 1,
             'She names this as the part that is not engineering.'),
            ('Why can the benefit not be shown?',
             ('It is too small', 'It is a collapse that did not occur',
              'It is disputed', 'It arrives too late'), 1,
             'The cost appears on a budget line and the benefit is a non-event.'),
            ('What does she say shapes the built environment most?',
             ('Material science', 'The gap between who pays and who is at risk',
              'Regulation', 'Client taste'), 1,
             'She says that single fact does more than anything in her own field.'),
        ],
    ),

    sp=[
        dict(
            sub='Choosing a material',
            focus='stating what something is for',
            skill=('Saying purpose out loud',
                   ['So as to and in order to state purpose; so that states purpose with a '
                    'new subject.',
                    'Do not use for plus -ing to state the purpose of an action: use it for '
                    'the function of a thing.',
                    'Stress the purpose clause. It is the reason the sentence exists.']),
            repeat=[
                'A material is chosen, not found.',
                'Steel is specified in occupied buildings.',
                'It bends visibly before it gives way.',
                'The cable is added so that the tube may fail safely.',
                'We use aluminium in order to save mass without losing warning.',
                'Nothing is better in general; everything is better for some purpose.',
                'The deformation exists so that somebody standing underneath can see that something has gone wrong in time to move.',
            ],
            theme='design, choices and trade-offs',
            qs=[
                'Thanks for joining me. To begin, have you ever built or repaired something '
                'yourself?',
                'Every design gives something up. Do people understand that about the objects '
                'they buy?',
                'Now your opinion. Should products be designed to last longer even if they '
                'cost more? Why?',
                'A final question. Is there anything that should never be optimised for '
                'cost?',
            ],
            model=[(2, 'Not really, because the thing given up is usually invisible. Nobody '
                       'sees the repairability that was traded for thinness.'),
                   (4, 'Anything where the person bearing the risk did not choose the '
                       'product. A ladder I buy is my problem; a handrail in a station is '
                       'not.')],
            selfcheck=['I used so as to and in order to correctly.',
                       'I stressed the purpose clause.',
                       'I did not use for plus -ing for a purpose.'],
        ),
        dict(
            sub='Tolerance and failure',
            focus='explaining a rule by its purpose',
            skill=('Giving a reason rather than an instruction',
                   ['A rule stated with its purpose is easier to say and harder to argue '
                    'with.',
                    'The pattern is: the rule is X, and the reason is Y, which is why Z does '
                    'not count.',
                    'Keep the reason in one clause. A long reason sounds like an excuse.']),
            repeat=[
                'Every load-bearing member must fail ductile.',
                'That means it deforms visibly before it breaks.',
                'The rule is not about strength at all.',
                'A brittle tube can be twice as strong and still be refused.',
                'We are protecting against failure without warning, by means of the deformation itself.',
                'A catalogue figure is a typical value and your piece is not the typical piece.',
                'Equal strength is not grounds for a substitution, because every required property has to be met by some means or other.',
            ],
            theme='rules, reasons and sunk costs',
            qs=[
                'Thank you for your time. First, do you prefer rules explained or rules kept '
                'short?',
                'People argue hardest about rules after they have already spent money. How '
                'should that be handled?',
                'Now an opinion question. Should safety rules ever be relaxed for a student '
                'project? Why or why not?',
                'One last question. Is a rule you understand genuinely easier to follow, or '
                'does that just sound true?',
            ],
            model=[(2, 'By refusing anyway and saying so in advance. The moment sunk cost '
                       'buys an exception, everybody buys first and asks afterwards.'),
                   (4, 'It is genuinely easier, but not for the reason people give. You do '
                       'not follow it more faithfully; you apply it correctly in the case '
                       'nobody wrote down.')],
            selfcheck=['I gave the purpose in one clause.',
                       'I kept the reason short.',
                       'I used by means of or so that accurately.'],
        ),
        dict(
            sub='Designing for being wrong',
            focus='naming a non-technical obstacle',
            skill=('Saying that the problem is not the thing it looks like',
                   ['Signal the switch clearly: the engineering here is settled, and the '
                    'problem is elsewhere.',
                    'Describe the obstacle as a structure, not as a villain.',
                    'End on what would have to change, not on blame.']),
            repeat=[
                'Nothing can be made incapable of failing.',
                'The question is what happens when the prediction is wrong.',
                'Two structures with the same risk can be differently safe.',
                'Redundancy converts a collapse into a repair.',
                'Other fields have adopted the idea with a view to the same benefit.',
                'What has not travelled is the willingness to pay for it.',
                'The cost appears on a budget line and the benefit is a collapse that did not happen, which nobody can be shown.',
            ],
            theme='risk, cost and who decides',
            qs=[
                'Thanks for taking part. To start, do you think buildings where you live are '
                'well built?',
                'Spending to prevent something invisible is always hard to justify. Why?',
                'Now your opinion. Should the person approving a design be personally liable '
                'if it fails? Why or why not?',
                'And finally. Can an invisible benefit ever be made visible? How would you '
                'try?',
            ],
            model=[(2, 'Because success looks identical to never having had the problem. The '
                       'budget line is the only evidence that anything happened.'),
                   (4, 'You can make the near-misses public. Aviation did exactly that, and '
                       'it is the only field where the invisible benefit has a paper trail.')],
            selfcheck=['I signalled the switch away from the technical question.',
                       'I described the obstacle as a structure.',
                       'I ended on what would have to change.'],
        ),
    ],

    w1=dict(
        sub='Questions about design',
        skill=('Build a Sentence with a purpose clause',
               ['The two non-question items in this unit build purpose or means: so as to, '
                'in order that, by means of.',
                'So as to and in order to take a bare infinitive; so that takes a clause '
                'with its own subject.',
                'By means of is followed by a noun phrase and never by a verb.']),
        guided=[
            ('The substitution was refused on the failure mode.',
             ['know', 'do', 'you', 'whether', 'the cable', 'would', 'that', 'solve', 'actually'],
             'Do you know whether the cable would actually solve that?'),
            ('The catalogue figure was not accepted.',
             ['to know', 'nobody', 'seems', 'why', 'a typical', 'value', 'counts', 'not', 'does'],
             'Nobody seems to know why a typical value does not count.'),
            ('My supervisor asked about the test data.',
             ['she', 'whether', 'to know', 'wanted', 'I', 'had', 'the supplier', 'asked', 'directly'],
             'She wanted to know whether I had asked the supplier directly.'),
        ],
        exam=[
            ('Brittle members are prohibited above head height.',
             ['do', 'whether', 'know', 'you', 'that', 'applies', 'the braces', 'to', 'as well'],
             'Do you know whether that applies to the braces as well?'),
            ('The benefit of redundancy cannot be demonstrated.',
             ['explain', 'can', 'anybody', 'why', 'a prevented', 'collapse', 'to me', 'count', 'does not'],
             'Can anybody explain to me why a prevented collapse does not count?'),
            ('The workshop refuses material that has already been bought.',
             ['know', 'does', 'anybody', 'how', 'often', 'that', 'happens', 'actually', 'here'],
             'Does anybody know how often that actually happens here?'),
            ('Aviation publishes its near-misses.',
             ['us', 'told', 'nobody', 'which', 'other', 'fields', 'that', 'do', 'routinely'],
             'Nobody told us which other fields do that routinely.'),
            ('The cable catches the load if the tube fails.',
             ['told', 'he', 'me', 'what', 'the structure', 'would', 'do', 'that case', 'in'],
             'He told me what the structure would do in that case.'),
            ('The beam is allowed to deform before it yields.',
             ['so as to', 'the beam', 'deforms', 'visibly', 'give', 'everybody', 'underneath', 'a', 'warning'],
             'The beam deforms visibly so as to give everybody underneath a warning.'),
            ('A redundant path takes the load when a part fails.',
             ['by means of', 'a redundant', 'path', 'a collapse', 'is', 'converted', 'into', 'a', 'repair'],
             'By means of a redundant path, a collapse is converted into a repair.'),
        ],
    ),

    w2=dict(
        sub='Tolerance and failure',
        to='workshop@eng.uni.ac.uk',
        date='15/05/2028',
        subject='Overhead member — revised design with a redundant load path',
        scenario=[
            'Your substitution was refused because the carbon tube fails without warning in a '
            'member above head height. Your supervisor offered two routes and said he would '
            'supervise the second. You have designed it: carbon tube plus a steel tension '
            'cable. You need workshop approval and you have one problem — the cable anchors '
            'need a bolt pattern the workshop does not stock.',
            'Write an email to the workshop.',
        ],
        bullets=['Describe the revised design and what it does about the original objection.',
                 'State the one thing you still need, precisely.',
                 'Say what you will do if it cannot be supplied.'],
        skill=('Submitting a revision',
               ['Name the objection and answer it in the first paragraph. Do not make the '
                'reader reconstruct the history.',
                'Separate what is decided from what you are asking for. Mixing them makes '
                'both look provisional.',
                'A fallback that is slightly worse and clearly workable gets approved '
                'faster than a perfect design with a dependency.']),
        model=[
            'Dear Workshop,',
            '',
            'This is the revised overhead member, with Dr Tanaka supervising. The original '
            'objection was the failure mode: the carbon tube fails suddenly and the member '
            'sits above head height over the public walkway. The revision keeps the tube and '
            'adds a steel tension cable along the full span, sized to carry the whole design '
            'load on its own.',
            '',
            'So the failure sequence is now: the tube fails, the cable takes the load, the '
            'member deflects by about sixty millimetres and stays up. The deflection is '
            'visible from the floor and the walkway can be closed. That converts the member '
            'from brittle to a system that fails with warning, by means of the cable rather '
            'than by changing the tube.',
            '',
            'One thing I need. The cable anchors take an M12 four-bolt pattern at 60 '
            'millimetre centres, which the workshop does not stock. The drawing is attached '
            'with the pattern dimensioned.',
            '',
            'If that cannot be supplied in time, I will move to the aluminium member and put '
            'the carbon in the diagonal braces, which was Dr Tanaka’s first suggestion. That '
            'loses about a third of the stiffness and it is a design I can build with stock '
            'parts, so the show is not at risk either way.',
            '',
            'With thanks,',
            'Márta Szabó',
        ],
        notes=['The objection is named and answered in the first paragraph, so the reader '
               'needs no history.',
               'The failure sequence is given step by step with a number attached, which is '
               'what makes the claim checkable.',
               'The single outstanding need is stated with the exact specification and an '
               'attached drawing.',
               'The fallback is named, costed in one clause, and buildable from stock, which '
               'removes the schedule risk from the reader’s decision.'],
        bandpair=dict(
            mid=[
                'Dear Workshop,',
                'I am writing about my overhead member, which was refused last week because '
                'of the failure mode of the carbon tube. I have now revised the design as Dr '
                'Tanaka suggested and I hope it will be acceptable.',
                'The new design uses the carbon tube together with a steel cable, so that if '
                'the tube fails the cable will hold the load and the structure will not come '
                'down. This should deal with the safety concern that was raised, as there '
                'will now be a clear warning if anything goes wrong.',
                'There is one difficulty, which is that the anchors need a bolt pattern that I '
                'do not think the workshop has in stock. Could you let me know whether this '
                'would be possible? If it is a problem then I will have to think about '
                'alternatives, as I am quite short of time before the show.',
                'Thank you very much for your help. Best wishes, Márta Szabó',
            ],
            top=[
                'Dear Workshop,',
                'This is the revised overhead member, with Dr Tanaka supervising. The '
                'objection was the failure mode: the tube fails suddenly and the member sits '
                'above head height over the public walkway. The revision keeps the tube and '
                'adds a steel cable along the span, sized to carry the whole design load '
                'alone.',
                'The failure sequence is now: tube fails, cable takes the load, the member '
                'deflects about sixty millimetres and stays up. The deflection is visible from '
                'the floor and the walkway can be closed.',
                'One thing I need: the anchors take an M12 four-bolt pattern at 60 millimetre '
                'centres, which is not stock. Drawing attached, pattern dimensioned.',
                'If it cannot be supplied in time I will move to the aluminium member and put '
                'the carbon in the diagonal braces. That loses about a third of the stiffness '
                'and builds from stock, so the show is not at risk either way. Márta Szabó',
            ],
            diffs=[
                'It states the failure sequence as ordered steps with a measured deflection, '
                'so the safety claim can be checked rather than believed.',
                'It specifies the part exactly — M12, four bolts, 60 millimetre centres, '
                'drawing attached — instead of saying the workshop may not have it.',
                'It commits to a named fallback rather than saying it will think about '
                'alternatives, which removes the decision from the reader.',
                'It costs the fallback in one clause, a third of the stiffness, so the reader '
                'can see what is being given up.',
                'It closes the schedule risk explicitly, which is the thing a workshop '
                'actually worries about before a public show.',
            ],
        ),
    ),

    w3=dict(
        sub='Designing for being wrong',
        prof='Dr Haddad',
        question='Engineers have long argued that systems should be designed to fail visibly '
                 'and gradually rather than to be incapable of failing, and that spare '
                 'capacity should be built in even where failure is improbable. The cost of '
                 'doing so is immediate and measurable; the benefit is an event that does not '
                 'occur. Some argue that regulation should therefore mandate graceful failure, '
                 'since no client will voluntarily buy an invisible benefit. Others argue that '
                 'mandates freeze a particular technical solution and remove the incentive to '
                 'find cheaper ones. Which view is better founded?',
        posts=[('Priya', 'w',
                'Mandate it. The asymmetry is not going to be argued away: whoever signs the '
                'cheque is not standing underneath, and asking that person to buy something '
                'they cannot be shown is asking for a decision nobody has ever made.'),
               ('Søren', 'm',
                'Every mandate I have worked under specified a method rather than an outcome, '
                'and within a decade the specified method was the ceiling rather than the '
                'floor. You do not get graceful failure that way, you get whatever the 2019 '
                'committee thought graceful failure looked like.')],
        skill=('Answering an argument about regulatory form',
               ['When one side wants a mandate and the other fears it, the disagreement is '
                'usually about the form of the rule rather than its existence.',
                'Distinguish a rule that specifies a method from one that specifies an '
                'outcome and who must demonstrate it.',
                'Then say which failure mode you would rather have.']),
        starters=['Søren is describing a specific kind of mandate, not mandates as such.',
                  'Priya is right about the asymmetry, and her remedy does not follow from it.',
                  'The distinction that resolves this is…',
                  'Which leaves one real question…'],
        model=[
            'Søren is describing a specific kind of mandate, not mandates as such, and the '
            'distinction does most of the work here. A rule that says use a steel tension '
            'cable does become a ceiling, exactly as he says, and the mechanism is well '
            'documented across several industries. A rule that says demonstrate, before '
            'approval, what your structure does at one and a half times the design load, and '
            'publish it, specifies no method at all. It makes the behaviour the requirement '
            'and leaves the means open, which is the form Priya needs and the form Søren is '
            'not objecting to.',
            'Priya is right about the asymmetry, and her remedy does not follow from it. '
            'Whoever signs is not underneath, and that is a structural fact rather than a '
            'failure of character. But the conclusion she draws is that the state must buy '
            'the benefit on everybody’s behalf, and there is a weaker intervention that '
            'exploits the same asymmetry: require the demonstration to be public. A client '
            'who cannot be shown an invisible benefit can still be shown a published number '
            'alongside a competitor’s, and that converts the thing into something a buyer '
            'will pay for.',
            'Which leaves one real question, and neither post addresses it: who performs the '
            'demonstration. An outcome mandate with self-certification is a method mandate '
            'with extra paperwork, because the cheapest way to pass is to interpret the '
            'outcome loosely. Independent verification is what makes the difference, and it '
            'is also the expensive part nobody campaigns for.',
            'So: an outcome requirement, published, independently verified, and silent about '
            'method. That satisfies Søren’s objection in full and Priya’s concern in '
            'substance, and it fails in the one way I would accept, which is slowly and '
            'visibly.',
        ],
        model_words=287,
    ),

    gram=dict(
        title='Purpose, means and instrument',
        headers=['Form', 'What it says'],
        rows=[
            ('in order to / so as to + infinitive', 'purpose, same subject: deforms so as to give warning'),
            ('so that / in order that + clause', 'purpose, new subject: so that somebody notices'),
            ('for + noun', 'the function of a thing: a cable for the overhead member'),
            ('by + -ing', 'the means: by adding a cable'),
            ('by means of + noun phrase', 'formal means: by means of a redundant path'),
            ('with + noun', 'the instrument: tightened with a torque wrench'),
            ('with a view to + -ing', 'a longer-term purpose: with a view to reducing mass'),
        ],
        notes=[
            'So as to and in order to need the same subject in both halves. If the subject '
            'changes, you need so that: the cable was added so that the tube could fail '
            'safely.',
            'By plus -ing gives the means and never the purpose. By adding a cable answers '
            'how, not why. Students who write by adding a cable to make it safe have '
            'answered two questions with one structure and blurred both.',
            'With a view to is followed by a gerund, not an infinitive: with a view to '
            'reducing mass. With a view to reduce mass is a common and conspicuous error.',
        ],
        watch='Do not use for plus -ing to state the purpose of an action. "He added a cable '
              'for making it safer" is wrong; for plus -ing states the function of a thing '
              '(a tool for cutting steel), while an action takes in order to or so as to.',
        ex=[
            ('Choose so as to, so that, by or with a view to.',
             ['The beam deforms ______ give a warning.',
              'The cable was added ______ the tube could fail safely.',
              'The load is carried ______ adding a redundant path.',
              'The alloy was chosen ______ reducing mass.',
              'The anchors are tightened ______ a torque wrench.',
              'Test data is required ______ the figure applies to this piece.'],
             ['so as to', 'so that', 'by', 'with a view to', 'with', 'so that']),
            ('Correct the purpose or means.',
             ['He added a cable for making it safer.',
              'The alloy was chosen with a view to reduce mass.',
              'By adding a cable to make the member safe, the problem was solved.',
              'The beam deforms so as the occupants notice.'],
             ['He added a cable in order to make it safer.',
              'The alloy was chosen with a view to reducing mass.',
              'The problem was solved by adding a cable, so that the member fails safely.',
              'The beam deforms so that the occupants notice.']),
            ('Rewrite using by means of.',
             ['A collapse is converted into a repair by adding a redundant path.',
              'The warning is produced by the visible deformation.',
              'Mass was reduced by substituting an aluminium alloy.',
              'The load is shared by using two independent members.'],
             ['By means of a redundant path, a collapse is converted into a repair.',
              'The warning is produced by means of the visible deformation.',
              'Mass was reduced by means of an aluminium alloy substitution.',
              'The load is shared by means of two independent members.']),
        ],
        bas='Two of the ten Build a Sentence items in this unit state purpose or means. A '
            'tile reading so as to takes a bare infinitive with the same subject; a tile '
            'reading by means of takes a noun phrase and usually opens the sentence.',
    ),

    fault=dict(
        text='He added a cable for making the member safer. The alloy was chosen with a view '
             'to reduce mass. The beam deforms so as the occupants notice in time. Nobody '
             'knows whether was the figure taken from a catalogue. Having failed suddenly, '
             'the walkway had to be closed.',
        faults=[
            ('for making the member safer', 'in order to make the member safer',
             'For plus -ing gives the function of a thing, while the purpose of an action '
             'takes in order to.'),
            ('with a view to reduce mass', 'with a view to reducing mass',
             'With a view to is followed by a gerund rather than by an infinitive.'),
            ('so as the occupants notice', 'so that the occupants notice',
             'So as to needs the same subject in both halves, so a new subject requires so '
             'that.'),
            ('whether was the figure taken', 'whether the figure was taken',
             'An embedded question keeps statement order and does not invert the verb.'),
            ('Having failed suddenly, the walkway had to be closed',
             'Having failed suddenly, the member forced the closure of the walkway',
             'The walkway did not fail; the participle needs the subject that performed the '
             'action.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('to do with being pulled apart', 'tensile'),
            ('able to deform a long way before breaking', 'ductile'),
            ('breaking suddenly with no deformation', 'brittle'),
            ('weakening caused by repeated loading', 'fatigue'),
            ('the permitted range of variation', 'tolerance'),
            ('a metal mixed with another element', 'alloy'),
            ('gradual chemical destruction of a surface', 'corrosion'),
            ('the load at which permanent deformation begins', 'yield'),
            ('force per unit area inside a material', 'stress'),
            ('two materials combined to get both sets of properties', 'composite'),
            ('sudden sideways collapse of a slender member under load', 'buckling'),
            ('resistance to being bent', 'stiffness'),
        ],
        gram=[
            ('The beam deforms ______ as to give a warning.', 'so'),
            ('The cable was added ______ that the tube could fail safely.', 'so'),
            ('The load is carried ______ adding a redundant path.', 'by'),
            ('The alloy was chosen with a view to ______ mass.', 'reducing'),
            ('The anchors are tightened ______ a torque wrench.', 'with'),
            ('______ means of a redundant path, a collapse becomes a repair.', 'By'),
            ('A tool ______ cutting steel is kept in the rack.', 'for'),
            ('______ order to make it safer, he added a cable.', 'In'),
        ],
        mini=[
            ('A material is ruled out for an overhead member mainly because',
             ('it is not strong enough', 'it fails without warning',
              'it corrodes', 'it is expensive'), 1,
             'The workshop rule protects against failure without warning rather than against '
             'failure.'),
            ('A redundant load path changes',
             ('the probability of failure', 'the consequence of failure',
              'the strength of the member', 'the cost only'), 1,
             'The failing component is permitted to fail because something else takes the '
             'load.'),
            ('Graceful failure is hard to fund because',
             ('it is technically difficult', 'its cost is visible and its benefit is a non-event',
              'regulators forbid it', 'clients prefer speed'), 1,
             'A collapse that did not happen cannot be shown to whoever authorised the '
             'spending.'),
            ('Which sentence is correct?',
             ('The alloy was chosen with a view to reduce mass.',
              'The alloy was chosen with a view to reducing mass.',
              'The alloy was chosen with a view of reduce mass.',
              'The alloy was chosen for reduce mass.'), 1,
             'With a view to takes a gerund, which is one of the most visible B2 errors in '
             'technical writing.'),
            ('"By design" tells you that something is',
             ('accidental', 'deliberate', 'unproven', 'regulated'), 1,
             'It marks the property as chosen rather than as a side effect.'),
            ('Equal or greater strength is not grounds for a substitution because',
             ('strength cannot be measured', 'every required property has to be met',
              'suppliers are unreliable', 'cost matters more'), 1,
             'A substitute can satisfy four requirements and fail the one that decides the '
             'case.'),
        ],
    ),

    tip='Purpose, means and instrument are three different questions — why, how and with '
        'what — and English answers them with three different structures. Most B2 writing '
        'errors in technical subjects come from answering two of them with one phrase. Keep '
        'them apart and your explanations stop being ambiguous.',
)


# ---------------------------------------------------------------------------
# The two academic cycles, added by the Volumes 3-6 work.
#
# Unit 34 gains its two academic cycles. Cycle 4 demotes strength from
# an objective to a requirement and puts the choice of failure mode in
# its place: a ductile material announces its distress for weeks before
# it separates, a brittle one of the same strength says nothing at all,
# and the factor of safety exists largely to keep the structure in the
# region where an inspection has something to find. Cycle 5 relocates
# the problem: in most large structural failures investigated since the
# nineteen seventies the warning was given exactly as designed and
# reached a file rather than a decision, so the warning itself has to be
# designed, with a named recipient, a duty to reply and an automatic
# escalation.
# ---------------------------------------------------------------------------
UNIT['fieldwords'] = [('profession', 'an occupation with its own training and standards'),
 ('deform', 'to change shape under load without breaking'),
 ('deflection', 'the amount a loaded beam bends out of line'),
 ('inspection', 'the regular looking over of a structure in service'),
 ('maintenance', 'the work of keeping something in working order'),
 ('negligence', 'a failure to take the care that was owed'),
 ('girder', 'a large beam carrying the weight of a structure'),
 ('rivet', 'a metal pin used to fasten two plates together'),
 ('overload', 'a load greater than the one a thing was designed for'),
 ('catastrophic', 'happening all at once and with no recovery'),
 ('inspector', 'a person employed to examine work in service'),
 ('sudden', 'happening without warning')]
UNIT['r4'] = {'sub': 'Designing for being wrong',
 'title': 'Choosing the Way a Thing Will Fail',
 'words': 333,
 'skill': ('Reading a design principle stated against expectation',
           ['The passage replaces one aim with another. Note both aims, because a question '
            'will contrast them.',
            'Two kinds of failure are described and the difference is about warning. Hold '
            'that difference.',
            'A question about the factor of safety wants what it is for, not what it '
            'equals.']),
 'paras': ['The first instinct of a student in this profession is to make the structure '
           'strong, and the instruction of the first year is largely devoted to the '
           'replacement of that instinct with a better one. Strength is a requirement and '
           'not an objective. Every structure encounters a load it was not designed for '
           'eventually, and the question that governs the consequences is not how strong it '
           'was but what it does at the moment it gives way. A design decision about '
           'material is therefore a decision about the behaviour of a failure, and the '
           'selection of a material is made with that behaviour in view, alongside the cost, '
           'the availability and everything else that constrains the choice.',
           'The distinction that carries the argument is between a failure with warning and '
           'a failure without one. A ductile material, mild steel being the standard '
           'example, begins to deform under excessive load and goes on deforming visibly for '
           'a considerable period before any separation occurs. A deflection in a girder is '
           'therefore an announcement that something is wrong and an invitation to '
           'intervene. A brittle material of the same nominal strength gives no such '
           'announcement. It carries its load without complaint until the load exceeds its '
           'capacity, and then it separates in an instant. That is why the collapse of a '
           'cast iron structure is catastrophic, while the collapse of a steel one is '
           'usually preceded by weeks of visible distress.',
           'The factor of safety belongs to the same reasoning and is widely misunderstood '
           'as a margin for an overload. Its larger purpose is to keep the structure in the '
           'region where its behaviour is predictable and its distress is visible, so that '
           'an inspection has something to find. A design that would be adequate under '
           'perfect maintenance and gives no warning at all under imperfect maintenance is, '
           'by the standards of the profession, a bad design, whatever its calculated '
           'strength, and the examination at the end of this course will ask you to say '
           'why.'],
 'guided': [('What does the passage say the first year is largely devoted to?',
             ('Teaching the strength of materials',
              'Replacing the instinct to make things strong with a better one',
              'Calculating factors of safety',
              'Studying collapses'),
             1,
             'The instruction of the first year replaces that instinct.'),
            ('What question governs the consequences of a load?',
             ('How strong the structure was',
              'What it does at the moment it gives way',
              'How old the structure was',
              'Who inspected it'),
             1,
             'Strength is called a requirement and not an objective for exactly this '
             'reason.'),
            ('What does a deflection in a girder amount to?',
             ('A sign that the design was weak',
              'An announcement that something is wrong',
              'Evidence of poor material',
              'A catastrophic failure'),
             1,
             'It is an announcement and an invitation to intervene.')],
 'exam': [('How does a brittle material of the same strength behave?',
           ('It deforms more slowly',
            'It carries the load without complaint and then separates in an instant',
            'It deflects visibly first',
            'It fails at a lower load'),
           1,
           'The absence of warning is the whole difference the passage draws.'),
          ('Why is the collapse of a steel structure usually preceded by distress?',
           ('Steel is weaker',
            'Steel deforms visibly before separation',
            'Steel structures are better inspected',
            'Steel is more often overloaded'),
           1,
           'Ductile behaviour produces visible deformation first.'),
          ('How is the factor of safety widely misunderstood?',
           ('As a legal requirement',
            'As a margin for an overload',
            'As a property of the material',
            'As a maintenance schedule'),
           1,
           'The passage says its larger purpose is different.'),
          ('What is the larger purpose of the factor of safety?',
           ('To reduce cost',
            'To keep behaviour predictable and distress visible',
            'To allow for poor workmanship',
            'To satisfy an inspector'),
           1,
           'So that an inspection has something to find, as the passage puts it.'),
          ('The word distress in paragraph 2 is closest in meaning to',
           ('anxiety', 'visible signs of strain', 'sudden collapse', 'poor maintenance'),
           1,
           'In this subject distress is what a structure shows before it fails.')]}
UNIT['r5'] = {'sub': 'Designing for being wrong',
 'title': 'A Warning Nobody Was Reading',
 'words': 335,
 'skill': ('Reading an objection that moves a problem to another place',
           ['The writer accepts the principle and says it solves the easier half. Note which '
            'half.',
            'Two cases are summarised. What they have in common is the point of the passage.',
            'A question about the recommendation wants what should be designed, not what '
            'should be built.']),
 'paras': ['The argument for a visible failure is correct and it is only half of a system. A '
           'deflection is an announcement to nobody unless an inspection takes place, unless '
           'the inspector is competent to read it, and unless the organisation that receives '
           'the report acts on it. Each of those three conditions has failed more often in '
           'the last fifty years than the materials have. The profession trains its members '
           'at length in the first half of the problem and leaves the second half to the '
           'people least equipped and least rewarded for solving it.',
           'The pattern is visible in the record. In a majority of the large structural '
           'failures investigated since the nineteen seventies, the structure had given '
           'exactly the warning the design intended: cracking had been photographed, a '
           'deflection had been measured and recorded, or a rivet line had been reported as '
           'working loose. The warning reached a file. It did not reach a decision, because '
           'the person who received it had no authority to close a bridge, the person with '
           'that authority received a summary that omitted it, and nobody in the chain was '
           'accountable for the difference between the two. The failure was a failure of '
           'transmission, and a material that deforms more visibly would not have altered '
           'any part of it, because the deformation was already there and already measured.',
           'What follows is that the warning itself has to be designed, and it has to be '
           'designed by somebody who assumes that normal organisations behave normally, '
           'which is to say imperfectly and under pressure. That means a reporting route '
           'with a named recipient rather than a department, an obligation to respond in '
           'writing within a stated period, and an escalation that happens automatically '
           'when the response does not arrive. None of that is engineering in the sense the '
           'first year teaches, and it safeguards more structures than any choice of '
           'material has ever done. The instruction a profession gives is a statement of '
           'what it believes its problem to be.'],
 'guided': [('What does the writer say the argument for a visible failure is?',
             ('Mistaken',
              'Correct and only half of a system',
              'Out of date',
              'Too expensive to apply'),
             1,
             'The objection concerns what is missing, not what is wrong.'),
            ('What three conditions does a deflection depend on?',
             ('Strength, maintenance and age',
              'An inspection, a competent inspector, and an organisation that acts',
              'Design, material and load',
              'Reporting, recording and repair'),
             1,
             'Those are the three the passage names, and all three have failed often.'),
            ('What does the writer say the profession leaves to others?',
             ('The choice of material',
              'The second half of the problem',
              'The factor of safety',
              'The inspection schedule'),
             1,
             'It is left to the people least able to solve it.')],
 'exam': [('In most of the failures investigated, what had the structure done?',
           ('Failed without warning',
            'Given exactly the warning the design intended',
            'Been overloaded repeatedly',
            'Been built from the wrong material'),
           1,
           'Cracking photographed, deflection recorded, rivets reported loose.'),
          ('Where did the warning reach?',
           ('A decision', 'A file', 'An inspector only', 'The designer'),
           1,
           'It reached a file and did not reach a decision.'),
          ('Why did it not reach a decision?',
           ('The reports were lost',
            'The recipient had no authority and the person with authority got a summary that '
            'omitted it',
            'The warnings were unclear',
            'Nobody read the file'),
           1,
           'Both halves of that answer are in the passage, and so is the absence of '
           'accountability.'),
          ('What does the writer say a more visibly deforming material would have changed?',
           ('The outcome entirely',
            'No part of it',
            'The speed of the collapse',
            'The quality of the reports'),
           1,
           'The failure was a failure of transmission, which material cannot touch.'),
          ('Which is NOT one of the three things the writer recommends?',
           ('A named recipient rather than a department',
            'An obligation to respond in writing within a stated period',
            'An automatic escalation when no response arrives',
            'A stronger factor of safety'),
           3,
           'The three concern the route a warning takes, not the design margin.')]}
UNIT['l4'] = {'sub': 'Designing for being wrong',
 'caption': 'A lecture on failure modes and what the factor of safety is really for',
 'board': ['Strength: a requirement, not an aim',
           'Ductile: deforms, then separates',
           'Brittle: no warning at all',
           'Safety factor: keeps distress visible'],
 'skill': ('A lecture that corrects the aim of a whole subject',
           ['The lecturer replaces one objective with another in the first minute. Hold '
            'both.',
            'Two materials of the same strength, two different behaviours. The comparison is '
            'the lecture.',
            'A question about the final example wants why he calls the design bad.']),
 'warm': [('Woman: Is strength the objective?',
           ('No, it is a requirement.',
            'Yes, it is the objective.',
            'Yes, strength matters.',
            'Mild steel.'),
           0,
           'He separates the two in the first minute and keeps them apart.'),
          ('Woman: What does a ductile material do first?',
           ('It deforms visibly.',
            'It separates in an instant.',
            'Yes, it fails.',
            'Cast iron.'),
           0,
           'Visible deformation before separation is the whole advantage.'),
          ('Woman: What is the factor of safety mostly for?',
           ('Keeping the distress visible.',
            'Allowing for an overload.',
            'Yes, it is for safety.',
            'A factor of three.'),
           0,
           'He is explicit that the margin for overload is the smaller part of it.')],
 'script': [('Man',
             'Strength is a requirement. It is not the objective, and if you leave this '
             'course believing that it is, I have failed. Here is why. Every structure '
             'eventually meets a load that nobody designed it for, and the thing that '
             'determines whether that is an inconvenience or a funeral is not how strong it '
             'was. It is what the structure does in the moment it gives way. Write that '
             'sentence down, because it is the one idea in this course that will still be '
             'useful to you in thirty years. So take two materials of identical strength. '
             'The first is ductile. Load it beyond what it can take and it deforms, and it '
             'goes on deforming, visibly, for weeks, and a bent girder is a structure '
             'telling you in plain language that it is in trouble. The second is brittle. '
             'Same strength on paper. It carries the load without any complaint at all, '
             'right up to the point where it cannot, and then it is on the floor and so is '
             'everything above it. Now the factor of safety, which most of you think is a '
             'margin for an overload. That is part of it. The larger part is that it keeps '
             'the structure in the region where it behaves predictably and shows its '
             'distress, so that an inspection has something to find. Which gives you my test '
             'for a design. If it is adequate under perfect maintenance and silent under '
             'imperfect maintenance, it is a bad design, and I do not care what the '
             'arithmetic says, and neither will the inquiry.')],
 'items': [('What does the lecturer say he will have failed to do?',
            ('Teach the arithmetic',
             'Stop students believing strength is the objective',
             'Cover brittle materials',
             'Explain the factor of safety'),
            1,
            'He says so in the opening lines and returns to it at the end.'),
           ('What determines whether an overload is an inconvenience or worse?',
            ('How strong the structure was',
             'What the structure does at the moment it gives way',
             'Who inspected it',
             'The size of the load'),
            1,
            'That is the substitution the whole lecture is built on.'),
           ('What does he call a bent girder?',
            ('A sign of poor material',
             'A structure telling you in plain language that it is in trouble',
             'A failure of maintenance',
             'An acceptable deflection'),
            1,
            'The deformation is the message, which is why ductility is valuable.'),
           ('What does he say is the larger part of the factor of safety?',
            ('A margin for an overload',
             'Keeping behaviour predictable and distress visible',
             'Allowing for poor workmanship',
             'Satisfying the regulations'),
            1,
            'So that an inspection has something to find.'),
           ('What is his test for a design?',
            ('Whether the arithmetic is correct',
             'Whether it stays adequate and vocal under imperfect maintenance',
             'Whether it uses ductile material',
             'Whether an inspector approves it'),
            1,
            'Adequate under perfect maintenance and silent under imperfect maintenance is '
            'his definition of a bad design.')]}
UNIT['l5'] = {'sub': 'Designing for being wrong',
 'caption': 'A short talk on warnings that were given and never arrived',
 'board': ['The structure did warn',
           'The warning reached a file',
           'It did not reach a decision',
           'Design the route, not only the beam'],
 'skill': ('A talk that relocates a problem',
           ['The speaker agrees with the design principle and says the failure happened '
            'elsewhere. Note where.',
            'Three reasons the warning stopped. Keep them in order.',
            'A question about her recommendation wants what has a name attached to it.']),
 'warm': [('Man: Did the structures give warning?',
           ('Yes, in most of the cases.',
            'No, they failed suddenly.',
            'Yes, they did.',
            'Since the seventies.'),
           0,
           'The warning was given as designed, which is what makes the cases interesting.'),
          ('Man: What stopped the warning?',
           ('It reached a file and not a decision.',
            'It was never recorded.',
            'Yes, something stopped it.',
            'A deflection.'),
           0,
           'The route, not the measurement, is where her argument puts the failure.'),
          ('Man: What does she want named?',
           ('The person a report goes to.',
            'The material.',
            'Yes, a name.',
            'The department.'),
           0,
           'A named recipient rather than a department is the first of her three measures.')],
 'script': [('Woman',
             'I have no argument with the last lecture. Ductile materials, visible distress, '
             'all of it correct, and I want to tell you where the failures actually happen. '
             'Go through the large structural collapses investigated since the nineteen '
             'seventies. In most of them, the structure did precisely what the designer '
             'intended. The cracking was photographed. The deflection was measured and '
             'written down. Somebody reported that a line of rivets was working loose. The '
             'warning was given, in good time, exactly as designed, and it reached a file. '
             'It did not reach a decision, and here is why, in the order it usually happens. '
             'The person who received the report had no authority to close anything. The '
             'person who had that authority received a summary with the item removed. And '
             'nobody anywhere in that chain was answerable for the gap between the two. A '
             'material that bent twice as far would have changed none of that. Let me say it '
             'again, because this is the part engineers resist. The metal did its job. So my '
             'position is that the warning has to be designed as carefully as the beam, and '
             'designed by somebody who expects ordinary organisations to behave in ordinary '
             'ways. A named person, not a department. A duty to answer in writing inside a '
             'stated number of days. And an escalation that happens by itself when the '
             'answer does not come. None of that is engineering as you were taught it, and '
             'it has saved more buildings than any material ever chosen, which is a sentence '
             'I would like somebody to put in a first-year textbook.')],
 'items': [('What does the speaker say about the last lecture?',
            ('It was mistaken about ductility',
             'She has no argument with it',
             'It overstated the factor of safety',
             'It was too theoretical'),
            1,
            'She agrees with it and moves the location of the problem.'),
           ('What had happened in most of the collapses she describes?',
            ('The material was wrong',
             'The structure did precisely what the designer intended',
             'No warning was possible',
             'Inspections had been skipped'),
            1,
            'The warning was given in good time and as designed.'),
           ('What is the first reason the warning stopped?',
            ('The report was lost',
             'The person who received it had no authority to close anything',
             'The summary was late',
             'The deflection was too small'),
            1,
            'She gives the three reasons in the order they usually happen.'),
           ('What does she say about a material that bent twice as far?',
            ('It would have saved the structure',
             'It would have changed none of that',
             'It would have failed sooner',
             'It was unavailable'),
            1,
            'Her point is that the failure was in the route the warning took.'),
           ('What does she claim about her three measures?',
            ('They are required by law',
             'They have saved more buildings than any material ever chosen',
             'They are expensive',
             'They replace inspection'),
            1,
            'That is the claim she closes on.')]}
UNIT['w4'] = {'sub': 'Designing for being wrong',
 'skill': ('Purpose, means and instrument: so that, by, by means of',
           ['So that gives a purpose and needs a clause: so that an inspection has something '
            'to find.',
            'By plus an -ing form gives the means: by keeping the structure in the '
            'predictable region.',
            'By means of takes a noun and is heavier. Use it when the instrument is the '
            'point.']),
 'guided': [('You want to give the purpose of the safety factor.',
             ['the margin',
              'is',
              'chosen',
              'so that',
              'an inspection',
              'has',
              'something',
              'to',
              'find'],
             'The margin is chosen so that an inspection has something to find.'),
            ('You want to give the means.',
             ['the design',
              'warns',
              'the owner',
              'by',
              'deforming',
              'visibly',
              'for',
              'several',
              'weeks'],
             'The design warns the owner by deforming visibly for several weeks.'),
            ('You want to name the instrument.',
             ['the deflection',
              'was',
              'recorded',
              'by means of',
              'a',
              'gauge',
              'fixed',
              'to',
              'the',
              'girder'],
             'The deflection was recorded by means of a gauge fixed to the girder.')],
 'exam': [('You want a purpose clause about the route a report takes.',
           ['a name',
            'is',
            'attached',
            'so that',
            'somebody',
            'is',
            'answerable',
            'for',
            'the',
            'response'],
           'A name is attached so that somebody is answerable for the response.'),
          ('You want the means by which a failure is made visible.',
           ['the engineer',
            'makes',
            'the failure',
            'visible',
            'by',
            'selecting',
            'a',
            'ductile',
            'material'],
           'The engineer makes the failure visible by selecting a ductile material.'),
          ('You want to state an instrument formally.',
           ['the load',
            'was',
            'applied',
            'by means of',
            'a',
            'jack',
            'bearing',
            'on',
            'the',
            'lower',
            'flange'],
           'The load was applied by means of a jack bearing on the lower flange.'),
          ('You want purpose and means in one sentence.',
           ['the structure',
            'is',
            'kept',
            'predictable',
            'by',
            'limiting',
            'the load',
            'so that',
            'the',
            'distress',
            'shows'],
           'The structure is kept predictable by limiting the load, so that the distress '
           'shows.'),
          ('You want a purpose clause with a negative.',
           ['the escalation',
            'is',
            'automatic',
            'so that',
            'no',
            'report',
            'can',
            'stop',
            'at',
            'a',
            'desk'],
           'The escalation is automatic, so that no report can stop at a desk.')]}
UNIT['w5'] = {'sub': 'Designing for being wrong',
 'prof': 'Dr Lindqvist',
 'question': 'A city can spend a fixed budget either on replacing the brittle components in '
             'its older bridges with ductile ones, or on a new reporting system that puts '
             'every inspection finding in front of a named official within a week. Its '
             'engineers favour the first. Which should it choose?',
 'posts': [('Yuki',
            'w',
            'The components. A reporting system is a promise about future behaviour and a '
            'ductile girder is a physical fact, and in forty years the system will have been '
            'reorganised four times while the girder is still bending before it breaks.'),
           ('Mateo',
            'm',
            'That is an argument for doing both, dressed up as an argument for one. The '
            'second passage shows that the physical fact has been in place for decades in '
            'these cases and did not save anybody, because nobody read what it was saying.')],
 'skill': ('A question about durable hardware against fragile process',
           ['Yuki argues from what lasts; Mateo from what the record shows actually failed.',
            'The second passage says the warning has to be designed by somebody who expects '
            'organisations to behave normally, which bears on Yuki’s strongest point.',
            'A strong answer takes Yuki’s objection seriously and still reaches a '
            'decision.']),
 'starters': ['Yuki is right that…, and that is the strongest argument on her side…',
              'The distinction worth drawing is between… and…',
              'What the passage actually requires is…',
              'So the budget should go to…, on condition that…'],
 'model': ['Yuki has the best objection in the discussion and it does not reach her '
           'conclusion. A reporting system does decay, and the passage says as much when it '
           'insists that the route be designed by somebody who expects ordinary '
           'organisations to behave in ordinary ways. The answer to decay is not to abandon '
           'the route; it is to build the route so that neglect of it is visible, which is '
           'the same principle the engineers are applying to the metal.',
           'Mateo is right about the record and too quick with the budget, because doing '
           'both is not among the options given. The question is which of the two the money '
           'should buy, and the evidence in the second passage is directly about that: in '
           'most of the investigated failures the ductile warning was present and was not '
           'acted on, so buying more of the half that worked solves nothing.',
           'So the budget should go to the reporting system, with the conditions that answer '
           'Yuki. The route needs a named recipient, a duty to reply in writing inside a '
           'stated period, and an escalation that fires without anybody deciding to fire it, '
           'because those three are what make its own neglect visible. What the city gives '
           'up is a permanent improvement to the bridges themselves, and that is a real '
           'loss, since the next reorganisation will test the system and not the steel. It '
           'is the smaller loss, because a bridge that warns nobody is in the condition '
           'these bridges were already in.'],
 'model_words': 252}
UNIT['sp'] = list(UNIT['sp']) + [{'sub': 'Designing for being wrong',
  'focus': 'replacing one aim with another',
  'skill': ('Strength is a requirement, not the objective',
            ['Say the thing you are demoting first, and grant it fully. A dismissal sounds '
             'like carelessness.',
             'Then name what takes its place, with the stress on the new aim.',
             'Keep the pause between the two halves short, or the first half sounds like '
             'your view.']),
  'repeat': ['Strength is a requirement.',
             'It is not the objective.',
             'A ductile material deforms before it separates.',
             'The factor of safety keeps the distress visible.',
             'What matters is what it does when it gives way.',
             'A bent girder is a structure in trouble, and saying so.',
             'A design that is adequate under perfect maintenance and silent under imperfect '
             'maintenance is a bad design.'],
  'theme': 'an aim that turns out to be the wrong aim',
  'qs': ['Tell me about a time you were working towards the wrong goal. When did you notice?',
         'Some people say the safest thing is always the strongest thing. How far would you '
         'agree?',
         'How would you explain to a friend why a warning sign is worth more than extra '
         'strength?',
         'Finally, describe something you own that tells you when it is about to fail.'],
  'model': [(2,
             'I would put it differently. The safest thing is the thing that fails in a way '
             'you can see coming, and strength on its own can hide how close something is to '
             'the edge.'),
            (4,
             'The brakes on my bicycle, which start making a noise about a month before they '
             'stop working. I would rather have those than silent brakes that last slightly '
             'longer.')],
  'selfcheck': ['I granted the first aim before demoting it',
                'I stressed the new aim',
                'I used at least two of the unit’s field words']},
 {'sub': 'Designing for being wrong',
  'focus': 'saying where a failure actually happened',
  'skill': ('The warning was given. It reached a file and not a decision.',
            ['Short sentences here. The sequence is the argument and long sentences bury it.',
             'Land on the two nouns that contrast: a file, a decision.',
             'Do not raise your voice at the end. The flat delivery is what makes it sound '
             'established.']),
  'repeat': ['The warning was given.',
             'It reached a file.',
             'It did not reach a decision.',
             'Nobody in the chain was answerable for the gap.',
             'A material that bent twice as far would have changed nothing.',
             'The warning has to be designed as carefully as the beam.',
             'A named person, not a department, and a duty to answer in writing inside a '
             'stated number of days.'],
  'theme': 'a problem that was not where people looked for it',
  'qs': ['Tell me about something that went wrong where the obvious cause turned out to be '
         'innocent. What was the real cause?',
         'Some people think most failures are caused by people not trying hard enough. What '
         'do you think?',
         'How should an organisation make sure a warning reaches somebody who can act?',
         'Finally, describe a time you reported a problem and nothing happened.'],
  'model': [(2,
             'I think that explanation is popular because it is cheap. Most of the failures '
             'I have seen involved people doing their jobs inside a system that had no route '
             'from the person who noticed to the person who could act.'),
            (3,
             'Put a name on it rather than a department, require an answer in writing by a '
             'date, and make the thing escalate on its own when the answer does not '
             'arrive.')],
  'selfcheck': ['I kept the sentences short',
                'I landed on the contrast between the two nouns',
                'I kept the delivery flat rather than raised']}]
