# -*- coding: utf-8 -*-
"""Unit 26 — Law, Rights and Society. Volume 3. Grammar anchor 2."""
from content._g import gaps

_GT, _GA = gaps(
    'A precedent is not created by a judge announcing one. It is created by a decision being '
    'followed. When a court resolves a dispute it gives reasons, and later courts must decide '
    'which part of those reasons was essent{ial} to the outcome. That part is binding. The '
    'rest, however interesting, is treated as a remark made in pass{ing} and carries no '
    'obligat{ion}. Lawyers spend a great deal of their time arguing about which is which, '
    'because a case can be followed, distingu{ished} or, rarely, overrul{ed}, and the whole '
    'argument turns on how the earlier reasons are read.')

_ET, _EA = gaps(
    'Rights are usually written as though they were absol{ute}, and almost none of them are. '
    'A constit{ution} may state that everyone has the right to express an opinion, and in the '
    'same document that everyone has the right to a fair trial. The two are not in tension '
    'until a newspaper publishes the name of a juror, at which point a court has to decide '
    'which right y{ields}. This is sometimes described as a conflict between rights, though '
    'that phrase is slight{ly} misleading. What actually happens is that a court asks whether '
    'the restriction proposed is necess{ary}, whether it goes no further than it needs to, '
    'and whether the benefit is worth the cost to the person restric{ted}. The test is '
    'applied the same way whichever right is in question, which is what makes it a legal test '
    'rather than a political preference. It is widely believed that judges simply pick the '
    'right they prefer and reason back{wards}. The evidence for that is thin, and where it '
    'has been looked for sys{tematically} the pattern that emerges is less dramatic: judges '
    'differ most not on which right matters more but on how much def{erence} is owed to the '
    'body that made the original decis{ion}.')

UNIT = dict(
    n=26, vol=3, level='B2',
    title='Law, Rights and Society',
    icons=['brief', 'people', 'book'],
    subs=['How a precedent forms', 'Rights in conflict', 'Access to justice'],
    grammar='Passive reporting structures',
    field='uphold, provision, liable',
    opener_line='Legal English is the most careful writing most people ever read, and its '
                'care shows mainly in one structure: how to report a claim without owning '
                'it. This is the second grammar anchor of the course, and it is the single '
                'most useful thing in it for academic writing.',
    candos=[
        'I can report a claim without being taken to endorse it.',
        'I can use it is said that and X is thought to have correctly.',
        'I can follow a text that applies one test to several cases.',
        'I can read a rule and work out what it does not cover.',
        'I can distinguish a general principle from its application.',
        'I can build a question on a passive reporting structure.',
    ],

    acad=[
        ('uphold', 'to confirm a decision on appeal'),
        ('provision', 'a particular clause of a law or contract'),
        ('liable', 'legally responsible for something'),
        ('precedent', 'an earlier decision later courts must follow'),
        ('statute', 'a law passed by a legislature'),
        ('jurisdiction', 'the area or matters a court has power over'),
        ('binding', 'that must be followed, not merely considered'),
        ('ruling', 'a decision made by a court'),
        ('appeal', 'a request that a higher court review a decision'),
        ('tribunal', 'a body that decides a particular class of dispute'),
        ('remedy', 'what a court orders to put a wrong right'),
        ('discretion', 'freedom to decide within stated limits'),
        ('infringe', 'to act against a right or a rule'),
        ('mandate', 'authority to act, given by someone else'),
        ('testimony', 'evidence given by a witness'),
        ('enshrine', 'to write a principle permanently into law'),
        ('adjudicate', 'to decide formally between two parties'),
        ('redress', 'the putting right of a wrong'),
    ],
    family=('uphold', [
        ('upheld', 'past participle', 'the appeal was upheld'),
        ('upholding', 'noun', 'the upholding of the original ruling'),
        ('overturn', 'opposite verb', 'the ruling was overturned'),
    ]),
    collocs=[
        ('on the grounds that', 'for the stated reason that'),
        ('subject to review', 'able to be reconsidered'),
        ('in accordance with', 'following, as required by'),
        ('give effect to', 'to put into practice'),
        ('bring a case', 'to start legal proceedings'),
        ('set aside', 'to cancel a decision'),
        ('bear the burden of proof', 'to be the side that must prove it'),
        ('in the first instance', 'at the first stage, before any appeal'),
        ('have regard to', 'to take into account'),
        ('strike a balance', 'to find a workable middle position'),
    ],
    stance=[
        ('it is widely believed', 'many hold it; the writer may not'),
        ('is said to', 'reported, with the source unnamed'),
        ('is generally held', 'the standard view in the field'),
        ('is open to question', 'the writer doubts it'),
        ('has not been established', 'the writer says it is unproved'),
    ],
    nuance=[
        ('legal / lawful', 'to do with law / permitted by law'),
        ('liable / responsible', 'answerable in law / answerable in general'),
        ('precedent / principle', 'a decision followed / a rule stated'),
    ],
    vocab_talk=[
        'Should a court follow a decision it thinks was wrong? Why?',
        'Name two rights that could come into conflict. How would you decide?',
        'Is a law that nobody enforces still a law?',
        'Who should pay for a lawyer when somebody cannot?',
    ],
    again=['case law', 'burden of proof', 'reasonable doubt', 'judicial review',
           'legal aid', 'statutory interpretation', 'dissenting opinion', 'proportionality'],

    r1=dict(
        sub='How a precedent forms',
        skill=('Suffixes in formal registers',
               ['Legal and academic English prefers the noun: obligation rather than having '
                'to, provision rather than what it says.',
                'That means more -tion, -ance and -ity gaps than in everyday text.',
                'If you can replace the gap-word with a whole clause, it is a process noun.']),
        guided_text=_GT, guided=_GA,
        guided_hint='essent{ial} is essential — it follows was and describes the part of the '
                    'reasons, so it is an adjective.'.replace('{', '').replace('}', ''),
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='Rights in conflict',
        skill=('Reading a rule against a case',
               ['A rule is written in general terms and a case is specific. The question is '
                'always whether this case falls inside those words.',
                'Find the operative words of the rule — usually a verb and a condition — and '
                'test the facts against each.',
                'A fact that satisfies some of the conditions and not others is where the '
                'argument is.']),
        docs=[
            ('notice', 'Student Union · Room booking and external speakers policy', [
                '# Bookings',
                'Any registered society may book a room for a meeting of its members.',
                '# External speakers',
                '* A speaker who is not a student or member of staff must be notified to the '
                'Union at least 14 days in advance.',
                '* The Union may attach conditions where it considers there is a specific '
                'and credible risk to the safety of those attending.',
                '* The Union may not refuse a booking on the ground that the speaker’s views '
                'are objectionable to others.',
                '# Appeals',
                '* A society may appeal to the Trustee Board within 7 days. The Board may '
                'uphold, set aside or vary any condition.',
            ], 'notice'),
            ('email', 'law-society@northgate.edu', 'union-governance@northgate.edu',
             '20/03/2027', 'Conditions attached to our 12 April booking', [
                 'Dear Law Society,',
                 '',
                 'Thank you for the notification, which arrived in good time.',
                 '',
                 'We are attaching two conditions: that the meeting be ticketed, and that',
                 'stewards be present. I want to be clear about the basis, because it is',
                 'narrow. Two weeks ago a meeting on the same subject in another institution',
                 'was disrupted by people who travelled to attend it, and we have been told',
                 'that the same group has an interest in this event.',
                 '',
                 'The conditions are not a comment on your speaker or on what she is likely',
                 'to say. The policy does not permit us to take that into account and we have',
                 'not done so.',
                 '',
                 'You may appeal to the Trustee Board within seven days, and I will put the',
                 'file in front of them myself if you do.',
                 '',
                 'Union Governance',
             ]),
        ],
        guided=[
            ('How much notice is required for an external speaker?',
             ('7 days', '14 days', '28 days', 'None'), 1,
             'The policy sets 14 days, and the email confirms the notification arrived in '
             'good time.'),
            ('On what basis may the Union attach conditions?',
             ('The speaker’s views', 'A specific and credible safety risk',
              'The size of the society', 'The cost of the room'), 1,
             'That is the only ground the policy provides, and it is the one the email is '
             'careful to rely on.'),
            ('What may the Union NOT do?',
             ('Attach conditions', 'Refuse a booking because the views are objectionable',
              'Require stewards', 'Ask for notice'), 1,
             'The policy states that prohibition explicitly, which is why the email denies '
             'having considered the speaker’s views.'),
            ('Who hears an appeal?',
             ('The Union', 'The Trustee Board', 'The society', 'The university'), 1,
             'The Board may uphold, set aside or vary any condition, within seven days of '
             'the decision.'),
        ],
        exam=[
            ('Why does the Union say the basis is "narrow"?',
             ('The conditions are minor', 'It is relying on one specific ground only',
              'The society is small', 'The notice period was short'), 1,
             'It then gives that single ground — a disruption elsewhere and intelligence '
             'about the same group — and nothing else.'),
            ('What evidence does the Union give for a credible risk?',
             ('Complaints from students', 'A disrupted meeting elsewhere and reports about the same group',
              'The speaker’s record', 'Advice from the police'), 1,
             'Those two facts together are the whole of the case, and the email supplies no '
             'other material.'),
            ('Why does the email say the conditions are not a comment on the speaker?',
             ('To be polite', 'Because the policy forbids taking her views into account',
              'Because the speaker complained', 'To avoid an appeal'), 1,
             'The policy may not refuse on the ground that views are objectionable, so the '
             'denial is a statement of compliance.'),
            ('What does the Union offer the society?',
             ('A different room', 'To put the file before the Board personally',
              'To waive the conditions', 'A longer notice period'), 1,
             'The final paragraph names the appeal route and adds an offer that goes beyond '
             'the policy’s requirements.'),
            ('Which of the Union’s actions is NOT authorised by the policy as written?',
             ('Requiring tickets', 'Requiring stewards',
              'Nothing — both are within the policy', 'Notifying the Board'), 2,
             'Both conditions fall under the power to attach conditions where there is a '
             'credible safety risk, which the email has established.'),
            ('What would make the conditions unlawful under this policy?',
             ('If the society appealed', 'If they were motivated by the speaker’s views',
              'If notice were under 14 days', 'If stewards were unavailable'), 1,
             'That is the single prohibition, and the email’s careful denial shows the Union '
             'knows it is the vulnerable point.'),
            ('What is the tone of the email?',
             ('Defensive', 'Precise and procedurally careful', 'Apologetic', 'Hostile'), 1,
             'Each paragraph names a power, its basis, or a route of challenge, which is the '
             'register of someone expecting to be reviewed.'),
        ],
    ),

    r3=dict(
        sub='Access to justice',
        title='A Right You Cannot Use',
        words=273,
        paras=[
            'A right that cannot be exercised is a curious thing. It is not quite nothing: it '
            'can be cited, it shapes what officials expect to be challenged on, and it may be '
            'enforced one day. But for the person who holds it and cannot reach a court, the '
            'practical difference between a right and its absence can be hard to detect. This '
            'gap between a right as written and a right as used is what lawyers mean by '
            'access to justice.',

            'It is widely believed that the main barrier is the cost of a lawyer, and cost '
            'matters. But the research on why people with good claims do not bring them '
            'points at something less obvious. Many never identify their problem as legal at '
            'all. An unlawful deduction from wages is experienced as a bad month; an unsafe '
            'flat is experienced as a bad landlord. The classification that would turn the '
            'experience into a claim is itself specialist knowledge, and it is distributed '
            'very unevenly.',

            'This has consequences for how reform is designed. Schemes that reduce the cost '
            'of representation help people who have already decided they have a case. They do '
            'nothing for the much larger group who never reached that point, and it has not '
            'been established that cheaper representation increases the number of claims '
            'brought by that group at all. The interventions with the best evidence behind '
            'them are unglamorous: advice services in places people already go, and duties on '
            'the stronger party to say in plain words what the other side is entitled to. '
            'Neither looks like justice. Both appear to produce more of it than a courtroom '
            'does.',
        ],
        skill=('Reading a text that relocates a problem',
               ['A common B2 structure: the usual diagnosis is X, and X is real, but the '
                'bigger factor is Y.',
                'The author concedes the usual answer before replacing it, so do not mark '
                'the concession as the main point.',
                'The last paragraph normally draws out what follows for policy.']),
        guided=[
            ('What does the author mean by "access to justice"?',
             ('The cost of lawyers', 'The gap between a right as written and as used',
              'The number of courts', 'The speed of a trial'), 1,
             'The first paragraph closes by naming exactly that gap, having spent the rest '
             'of the paragraph describing it.'),
            ('What is the commonly believed barrier?',
             ('Distance from a court', 'The cost of a lawyer', 'Fear of officials',
              'Language'), 1,
             'It is widely believed that the main barrier is the cost of a lawyer, which the '
             'author then concedes matters before moving past it.'),
            ('What does the research point to instead?',
             ('Court delays', 'People not recognising their problem as legal',
              'Lack of evidence', 'Distrust of lawyers'), 1,
             'Many never identify their problem as legal at all is the finding the second '
             'paragraph is built on.'),
            ('The word "classification" in the second paragraph refers to',
             ('a type of court', 'recognising an experience as a legal claim',
              'the cost of advice', 'a kind of lawyer'), 1,
             'It is the step that turns a bad month into an unlawful deduction, which is what '
             'the paragraph says is specialist knowledge.'),
        ],
        exam=[
            ('Why does the author say a right that cannot be exercised "is not quite nothing"?',
             ('It can still be cited and may shape official behaviour',
              'It will eventually be removed', 'It costs nothing to hold',
              'It applies in other countries'), 0,
             'Three functions are listed before the concession that the practical difference '
             'may be undetectable.'),
            ('Who do cost-reduction schemes help?',
             ('Everyone with a claim', 'People who have already identified a case',
              'Landlords', 'Advice services'), 1,
             'The third paragraph draws that line precisely and then says what such schemes '
             'do not do.'),
            ('What has NOT been established?',
             ('That cost matters', 'That cheaper representation increases claims from the unaware group',
              'That advice services work', 'That rights can be cited'), 1,
             'The author uses has not been established for exactly this claim, which marks '
             'it as unproved rather than false.'),
            ('Which interventions does the author say have the best evidence?',
             ('Lower court fees', 'Advice in places people already go, and plain-language duties',
              'More courts', 'Free legal insurance'), 1,
             'Those two are named together and described as unglamorous, which is part of '
             'the author’s point.'),
            ('What does "Neither looks like justice" mean?',
             ('Neither is effective', 'Neither resembles the courtroom image of justice',
              'Neither is legal', 'Neither has been tried'), 1,
             'It is contrasted immediately with producing more of it than a courtroom does, '
             'so the objection is to appearance rather than effect.'),
            ('What is the author’s attitude to cost as a barrier?',
             ('It is irrelevant', 'It is real but not the main one',
              'It is the only barrier', 'It has been exaggerated deliberately'), 1,
             'And cost matters is a concession, placed before the evidence that something '
             'else explains more.'),
            ('All of the following are given as examples EXCEPT:',
             ('An unlawful wage deduction', 'An unsafe flat', 'A disputed will',
              'Neither of these appears'), 2,
             'Wages and housing are the two illustrations; inheritance is never mentioned.'),
            ('What does the structure of the passage suggest about the author’s purpose?',
             ('To defend lawyers', 'To redirect reform towards a different barrier',
              'To describe court procedure', 'To compare two countries'), 1,
             'Each paragraph moves the diagnosis further from cost and the last one says '
             'what should be funded instead.'),
            ('Which finding would most support the author’s position?',
             ('That legal fees have risen',
              'That advice desks in health centres raise the number of valid claims brought',
              'That court waiting times have fallen',
              'That more people know their rights in theory'), 1,
             'The claim is that reaching people before they classify the problem works '
             'better, and a desk where people already are tests exactly that.'),
        ],
    ),

    l1=dict(
        sub='How a precedent forms',
        caption='Two law students after a seminar',
        skill=('Hearing the difference between a rule and an example',
               ['A speaker explaining law moves constantly between the general rule and a '
                'particular case.',
                'Items will test whether you heard which was which.',
                'Listen for: in that case, as a rule, generally, here specifically.']),
        warm=[
            ('Man: Is everything the judge said binding?',
             ('Only the part the outcome turned on.', 'Yes, all of it.',
              'About forty pages.', 'She is a senior judge.'), 0,
             'A yes/no question about scope, answered by naming the test rather than '
             'agreeing or refusing.'),
            ('Woman: What happens if a later court disagrees?',
             ('It can distinguish the case, or rarely overrule it.', 'It is binding.',
              'Yes, that happens.', 'In the Court of Appeal.'), 0,
             'A what-happens question wants the options, and the answer gives both with '
             'their relative frequency.'),
            ('Man: Did you understand the dissent?',
             ('Not the second half of it.', 'Yes, it was a dissent.',
              'About two pages.', 'She disagreed.'), 0,
             'A yes/no about understanding, answered with the precise part that was not '
             'understood.'),
        ],
        script=[
            ('Man', 'Is everything the judge said binding?'),
            ('Woman', 'Only the part the outcome turned on. The rest is a remark in passing.'),
            ('Man', 'That seems like a very fine line.'),
            ('Woman', 'It is, and that is most of what practising lawyers argue about. Take '
                      'the case from this morning. The court held that the notice was invalid '
                      'because it did not state the reason. That is the ratio — remove it and '
                      'the result changes.'),
            ('Man', 'And the bit about electronic service?'),
            ('Woman', 'That is the interesting one. She spent two paragraphs on whether '
                      'emailing a notice counts as serving it, and then said it did not '
                      'matter here because the notice was invalid anyway.'),
            ('Man', 'So it is not binding.'),
            ('Woman', 'Not binding. But it is the only thing a senior judge has said on '
                      'electronic service in fifteen years, so the next court to face the '
                      'question will read it very carefully and probably follow it.'),
            ('Man', 'Follow something that is not binding?'),
            ('Woman', 'Persuasive rather than binding. Courts do it constantly. The '
                      'distinction matters for whether they have to explain themselves if '
                      'they do not.'),
            ('Man', 'Right — binding means you need a reason to depart, persuasive means you '
                    'need a reason to follow.'),
            ('Woman', 'Almost. Persuasive means you need no reason either way, which is '
                      'exactly why people argue about it.'),
        ],
        items=[
            ('What part of a judgment is binding?',
             ('All of it', 'The part the outcome turned on', 'The final paragraph',
              'Anything the judge emphasised'), 1,
             'She gives the test at the start and then demonstrates it with the notice '
             'point: remove it and the result changes.'),
            ('Why was the electronic service discussion not binding?',
             ('It was wrong', 'The case was decided on another ground',
              'It was too short', 'It was in a dissent'), 1,
             'The notice was invalid anyway, so the two paragraphs could not have changed '
             'the outcome.'),
            ('Why will later courts still read it carefully?',
             ('It is binding after all', 'It is the only senior statement on the point in fifteen years',
              'It was widely reported', 'It was in the headnote'), 1,
             'Scarcity of authority is the reason she gives, and it explains why non-binding '
             'remarks can still be decisive.'),
            ('What is the practical difference between binding and persuasive?',
             ('Binding needs a reason to depart; persuasive needs none either way',
              'Persuasive is stronger',
              'Binding applies only in the same court',
              'There is no practical difference'), 0,
             'She corrects the man’s nearly-right formulation precisely on this point.'),
            ('What does the man get slightly wrong?',
             ('Which part is the ratio', 'That persuasive requires a reason to follow',
              'The name of the case', 'The date of the judgment'), 1,
             'He says persuasive means you need a reason to follow, and she corrects it to '
             'needing no reason either way.'),
            ('What does the woman say lawyers mostly argue about?',
             ('Which court has jurisdiction', 'Which part of a judgment is binding',
              'How much a case costs', 'Whether to appeal'), 1,
             'She calls it most of what practising lawyers argue about, immediately after '
             'conceding the line is fine.'),
            ('What is the woman’s role in the conversation?',
             ('She is uncertain and thinking aloud', 'She is explaining and correcting precisely',
              'She disagrees with the judgment', 'She is revising for an exam'), 1,
             'Every turn either states a rule, illustrates it, or corrects a near-miss, '
             'which is sustained explanation.'),
        ],
    ),

    l2=dict(
        sub='Rights in conflict',
        caption='A briefing on the room booking policy',
        poster=['External speakers: 14 days’ notice',
                'Conditions only for a credible safety risk',
                'Appeals to the Trustee Board within 7 days'],
        skill=('Hearing a limit on a power',
               ['When a speaker describes a power, listen for the sentence that limits it. '
                'That sentence is the point.',
                'Phrases to catch: only where, may not, on no account, and nothing else.',
                'The limit is usually repeated, because the speaker expects to be tested '
                'on it.']),
        warm=[
            ('Woman: Can the Union refuse a booking it dislikes?',
             ('Not on the ground that the views are objectionable.', 'Yes, at any time.',
              'Within seven days.', 'It is a Union policy.'), 0,
             'A can-it question about power, answered by naming the prohibited ground.'),
            ('Man: How long do we have to appeal?',
             ('Seven days from the decision.', 'Fourteen days’ notice.',
              'Yes, you can appeal.', 'To the Trustee Board.'), 0,
             'A how-long question wants the period, and the other options give the notice '
             'rule, an agreement and a destination.'),
            ('Woman: What can the Board actually do?',
             ('Uphold, set aside or vary a condition.', 'It meets monthly.',
              'Yes, it can help.', 'About five members.'), 0,
             'A what-can-it-do question wants the powers, which the policy lists as three.'),
        ],
        script=[
            ('Man', 'I want to go through the speaker policy, because it is misunderstood in '
                    'both directions. First, what the Union can do. If a society invites '
                    'someone from outside, we need fourteen days. With that notice we may '
                    'attach conditions — ticketing, stewarding, a change of room — where we '
                    'consider there is a specific and credible risk to the safety of people '
                    'attending. Note both words. Specific means we can point to something. '
                    'Credible means it is more than somebody being annoyed on the internet. '
                    'Now the limit, and this is the part that matters. We may not refuse a '
                    'booking, and we may not attach conditions, because the speaker’s views '
                    'are objectionable to other students. Not if the views are offensive. Not '
                    'if a hundred people complain. Not if the officers personally find them '
                    'repellent. The policy is drafted that way deliberately, because a power '
                    'to protect people from being upset is a power with no edges, and whoever '
                    'holds it ends up using it against whoever is least popular that year. '
                    'Finally, appeals. Seven days, to the Trustee Board, which can uphold, set '
                    'aside or vary anything we have done. Use it. A policy nobody appeals '
                    'against is not a policy anybody is checking.'),
        ],
        items=[
            ('What does "specific" mean in the policy?',
             ('Affecting one person', 'Something that can be pointed to',
              'Written down in advance', 'Relating to one society'), 1,
             'He defines both operative words, and specific is the one requiring an '
             'identifiable thing rather than a general fear.'),
            ('What does "credible" rule out?',
             ('Risks from outside the university', 'Mere annoyance expressed online',
              'Risks to the speaker', 'Risks reported anonymously'), 1,
             'More than somebody being annoyed on the internet is his own gloss on the word.'),
            ('What may the Union NOT do?',
             ('Require stewards', 'Act because views are objectionable',
              'Ask for fourteen days’ notice', 'Change the room'), 1,
             'He states the prohibition three times with three different intensifiers, which '
             'marks it as the central point.'),
            ('Why is the policy drafted that way?',
             ('To protect the Union legally',
              'Because a power to prevent upset has no limits and falls on the unpopular',
              'Because students demanded it',
              'To reduce the Union’s workload'), 1,
             'That is his stated reason, and it is an argument about the shape of the power '
             'rather than about any particular speaker.'),
            ('What can the Trustee Board do?',
             ('Only uphold a decision', 'Uphold, set aside or vary a decision',
              'Overrule the policy', 'Extend the notice period'), 1,
             'Those three verbs are the Board’s powers, and he urges societies to use the '
             'route.'),
            ('Why does the speaker encourage appeals?',
             ('To reduce complaints', 'Because an unappealed policy is unchecked',
              'To delay bookings', 'Because the Board meets rarely'), 1,
             'A policy nobody appeals against is not a policy anybody is checking is his '
             'closing line and his reason.'),
        ],
    ),

    l3=dict(
        sub='Access to justice',
        caption='A lecture on why people do not bring claims',
        board=['Right as written vs right as used',
               'Cost is real; naming is bigger',
               'A bad month, not an unlawful deduction',
               'Advice where people already are'],
        skill=('Following a talk that reports research without endorsing all of it',
               ['A careful lecturer separates what is established, what is reported, and '
                'what they themselves think.',
                'Listen for the markers: it is widely believed, the evidence shows, my own '
                'view is.',
                'Items frequently ask which category a claim falls into.']),
        warm=[
            ('Woman: Is cost the main barrier?',
             ('It is a barrier, and the evidence says not the main one.', 'Yes, entirely.',
              'About two thousand pounds.', 'Lawyers are expensive.'), 0,
             'A question assuming the standard answer, met with a partial concession and a '
             'correction.'),
            ('Man: What stops people before cost does?',
             ('Not seeing the problem as legal at all.', 'The courts are slow.',
              'Yes, several things.', 'About half of them.'), 0,
             'A what-stops question wants the earlier barrier, which is the lecture’s whole '
             'subject.'),
            ('Woman: Does cheaper representation help?',
             ('It helps people who already know they have a case.', 'Yes, everybody.',
              'It costs less.', 'In the first instance.'), 0,
             'A does-it-help question answered by naming precisely who is helped, which '
             'implies who is not.'),
        ],
        script=[
            ('Woman', 'The question I want to ask is why people with good legal claims do not '
                      'bring them. The answer that is generally held is cost, and I want to be careful '
                      'here, because cost is a real barrier and I am not about to tell you it '
                      'is imaginary. But the research points somewhere earlier in the chain. '
                      'When you interview people who have been through something a lawyer '
                      'would immediately recognise as actionable — wages unlawfully deducted, '
                      'a flat that breaches every housing standard there is — a large '
                      'proportion of them never classified the experience as legal at all. '
                      'They experienced a bad month and a bad landlord. The step that turns '
                      'that into a claim is an act of classification, and classification is '
                      'specialist knowledge. Now, what follows from that is awkward for '
                      'policy. It is widely believed that reducing the cost of representation '
                      'is the main lever, and for the population who have already decided '
                      'they have a case, it is. For the much larger group who have not '
                      'reached that point, it has not been established that cheaper lawyers '
                      'change anything at all, because the barrier bites before any lawyer '
                      'enters the picture. My own view, and I want to flag it as a view, is '
                      'that the money is better spent on advice in places people already go — '
                      'health centres, job centres, schools — and on requiring the stronger '
                      'party to state plainly what the other side is owed. Neither of those '
                      'looks like justice. Both appear to produce more of it.'),
        ],
        items=[
            ('What answer does the speaker say is generally held?',
             ('Distrust of lawyers', 'Cost', 'Court delays', 'Lack of evidence'), 1,
             'She names it immediately and then takes care to say she is not dismissing it.'),
            ('What does the research point to?',
             ('Court fees', 'People not classifying their experience as legal',
              'Shortage of lawyers', 'Fear of employers'), 1,
             'A large proportion never classified the experience as legal, which she calls '
             'a step earlier in the chain.'),
            ('What examples does she give?',
             ('Unpaid fines and parking', 'Unlawful wage deductions and substandard housing',
              'Divorce and inheritance', 'Immigration and asylum'), 1,
             'Those are the two she names as things a lawyer would recognise immediately as '
             'actionable.'),
            ('For whom does cheaper representation work?',
             ('Everyone', 'Those who have already decided they have a case',
              'Landlords', 'Nobody'), 1,
             'She grants that it works for that population before saying the larger group is '
             'unreached.'),
            ('How does she mark her policy preference?',
             ('As established fact', 'As her own view, flagged explicitly',
              'As the consensus', 'As the research finding'), 1,
             'My own view, and I want to flag it as a view is a deliberate change of '
             'register from the reporting that precedes it.'),
            ('What does she propose instead?',
             ('More courts', 'Advice where people already go, and plain-language duties',
              'Lower court fees', 'Compulsory insurance'), 1,
             'Those are her two proposals, and she lists health centres, job centres and '
             'schools as the places she means.'),
            ('What does "Neither of those looks like justice" concede?',
             ('That they are ineffective', 'That they lack the appearance of justice',
              'That they are illegal', 'That they are untested'), 1,
             'The next sentence says both appear to produce more of it, so the concession is '
             'about how they look and not about what they do.'),
        ],
    ),

    sp=[
        dict(
            sub='How a precedent forms',
            focus='the weak forms in passive reporting chains',
            skill=('Repeating a passive reporting structure',
                   ['It is said to have been, is thought to have — these are long strings of '
                    'weak syllables with one stressed word at the end.',
                    'Do not stress the auxiliaries. Say them fast and lightly.',
                    'The listener is waiting for the main verb.']),
            repeat=[
                'The appeal was upheld.',
                'The notice was held to be invalid.',
                'It is said to be the leading case.',
                'The decision is thought to have been overruled.',
                'It has been argued that the remarks were not binding.',
                'The point is generally held to have been settled by the earlier judgment.',
                'That part of the reasoning is said to have been essential to the outcome, which is what makes it binding on later courts.',
            ],
            theme='rules, fairness and following decisions you disagree with',
            qs=[
                'Thank you for taking part. To start, is there a rule in your own life that '
                'you follow even though you think it is wrong?',
                'Courts are expected to follow earlier decisions even when they think they '
                'were mistaken. What is gained by that, and what is lost?',
                'Now your opinion. Should a judge be able to depart from a precedent they '
                'believe is unjust? Why or why not?',
                'A final question. Is it better for a legal system to be predictable or to be '
                'right in each individual case? Why?',
            ],
            model=[(2, 'What is gained is that people can predict what will happen to them, '
                       'which is most of what law is for. What is lost is that a mistake can '
                       'be locked in for decades.'),
                   (4, 'Predictable, mostly. A system that is right in each case and '
                       'unpredictable in general cannot be planned around, and almost '
                       'everybody deals with law by planning around it rather than by '
                       'appearing in court.')],
            selfcheck=['I kept the auxiliaries weak and fast.',
                       'I stressed the main verb.',
                       'I answered both halves of the question.'],
        ),
        dict(
            sub='Rights in conflict',
            focus='stating a limit clearly and without hedging it away',
            skill=('Saying what may not be done',
                   ['A limit stated hesitantly is not heard as a limit. This is one place '
                    'where hedging hurts.',
                    'Say the prohibition flatly and then explain. May not, full stop, then '
                    'the reason.',
                    'Repeat it if it matters. Repetition is how spoken English marks '
                    'importance.']),
            repeat=[
                'Societies may book rooms.',
                'External speakers need notice.',
                'Conditions require a credible risk.',
                'The Union may not act on the content of the views.',
                'Not if the views are offensive, and not if a hundred people complain.',
                'A power to protect people from being upset is a power with no edges.',
                'Whoever holds a power of that kind will end up using it against whoever happens to be least popular that year.',
            ],
            theme='speech, safety and who decides',
            qs=[
                'Thanks for joining me. First, have you ever been to a talk that you '
                'disagreed with strongly? Did you go deliberately?',
                'Universities sometimes attach conditions to controversial events. What makes '
                'a condition reasonable rather than a refusal in disguise?',
                'Now an opinion question. Should students be able to block a speaker invited '
                'by another society? Why or why not?',
                'One last question. Who should bear the cost of security at a controversial '
                'event — the society, the university, or the public? Why?',
            ],
            model=[(2, 'A reasonable condition is one that would be the same whoever was '
                       'speaking. Once the condition tracks the content rather than the '
                       'risk, it is a refusal with extra steps.'),
                   (4, 'The university, mostly. If the cost sits with the society, then the '
                       'price of speaking rises with how unpopular you are, and that is a '
                       'refusal operating through a budget.')],
            selfcheck=['I stated the limit without hedging it.',
                       'I gave the reason after, not instead.',
                       'I used a concrete example.'],
        ),
        dict(
            sub='Access to justice',
            focus='distinguishing what is known from what you think',
            skill=('Marking your own opinion as an opinion',
                   ['At B2 you must be able to report evidence and then separate your view '
                    'from it, audibly.',
                    'The evidence shows X. My own view, which is a view, is Y.',
                    'Examiners reward the separation itself, not the opinion.']),
            repeat=[
                'Cost is a real barrier.',
                'It is not the first one.',
                'People experience a bad month, not an unlawful deduction.',
                'Classification is specialist knowledge and it is unevenly spread.',
                'Cheaper representation helps those who already know they have a claim.',
                'It has not been established that it reaches the much larger group who never got that far.',
                'My own view, and I want to flag it as a view, is that the money does more good in a health centre than in a courtroom.',
            ],
            theme='fairness, knowledge and who gets help',
            qs=[
                'Thank you for your time. To begin, has anyone ever explained a right to you '
                'that you did not know you had?',
                'Many people do not realise a problem is a legal one. Whose job should it be '
                'to tell them, and why?',
                'Now your opinion. Should employers and landlords be legally required to '
                'state plainly what the other side is entitled to? Why or why not?',
                'Finally. If a government can fund either more courts or more advice '
                'services, which should it choose? Why?',
            ],
            model=[(2, 'The stronger party, because they already know. A landlord knows what '
                       'the standards are; a tenant frequently does not, and the gap is not '
                       'an accident.'),
                   (4, 'Advice services, on the evidence. Courts help people who have already '
                       'got that far, and the research suggests most people never do.')],
            selfcheck=['I marked my own opinion as an opinion.',
                       'I reported the evidence without claiming it as mine.',
                       'I gave a reason specific to the case.'],
        ),
    ],

    w1=dict(
        sub='Questions about rules',
        skill=('Build a Sentence on a passive reporting frame',
               ['Several items build a question around is said to, is thought to or has '
                'been argued.',
                'The frame holds together: is thought to have been is four tiles that '
                'behave as one.',
                'Inside an embedded question it still keeps statement order.']),
        guided=[
            ('The ruling was reported as a major change.',
             ['whether', 'know', 'do', 'you', 'it', 'is', 'said to', 'be', 'binding'],
             'Do you know whether it is said to be binding?'),
            ('The remarks on electronic service were not necessary to the outcome.',
             ['us', 'told', 'nobody', 'which', 'part', 'was', 'thought to', 'be', 'essential'],
             'Nobody told us which part was thought to be essential.'),
            ('My tutor asked about the dissent.',
             ['she', 'whether', 'to know', 'wanted', 'it', 'had', 'been', 'followed', 'ever'],
             'She wanted to know whether it had ever been followed.'),
        ],
        exam=[
            ('The policy forbids acting on the content of views.',
             ['do', 'whether', 'know', 'you', 'that', 'has', 'been', 'tested', 'ever'],
             'Do you know whether that has ever been tested?'),
            ('Two conditions were attached to the booking.',
             ['to know', 'nobody', 'seems', 'on what', 'they', 'were', 'imposed', 'grounds', 'actually'],
             'Nobody seems to know on what grounds they were actually imposed.'),
            ('The case is cited in every textbook.',
             ['explain', 'can', 'anybody', 'why', 'it', 'is', 'said to', 'matter', 'so much'],
             'Can anybody explain why it is said to matter so much?'),
            ('The claim was never brought.',
             ['know', 'does', 'anybody', 'whether', 'she', 'had', 'been', 'advised', 'properly'],
             'Does anybody know whether she had been properly advised?'),
            ('The Board can set aside any condition.',
             ['told', 'he', 'us', 'how long', 'we', 'had', 'to appeal', 'exactly', 'for'],
             'He told us exactly how long we had to appeal for.'),
            ('The decision is generally held to be correct.',
             ['the grounds', 'on which', 'it', 'was', 'decided', 'are', 'no longer', 'in', 'dispute'],
             'The grounds on which it was decided are no longer in dispute.'),
            ('Advice services are said to work better than courts.',
             ['whether', 'tell', 'can', 'me', 'you', 'that', 'has', 'been', 'measured'],
             'Can you tell me whether that has been measured?'),
        ],
    ),

    w2=dict(
        sub='Rights in conflict',
        to='union-governance@northgate.edu',
        date='24/03/2027',
        subject='Appeal — conditions on the Law Society booking, 12 April',
        scenario=[
            'The Union has attached ticketing and stewarding conditions to your society’s '
            'event. The stated basis is a credible safety risk. You believe the real reason '
            'is the speaker’s views, partly because two officers said so publicly last week. '
            'You want to appeal to the Trustee Board.',
            'Write an email beginning the appeal.',
        ],
        bullets=['State what you are appealing against and on what ground.',
                 'Set out the evidence, separating fact from inference.',
                 'Say what outcome you are asking the Board for.'],
        skill=('Writing an appeal that distinguishes fact from inference',
               ['An appeal fails when it asserts motive. It succeeds when it sets out facts '
                'and lets the reader draw the inference.',
                'Separate the two explicitly: these are the facts; what we infer from them '
                'is this.',
                'Ask for something the body can actually grant. The Board can vary a '
                'condition; it cannot discipline an officer.']),
        model=[
            'Dear Governance,',
            '',
            'The Law Society appeals to the Trustee Board against the two conditions attached '
            'to our booking of 12 April, on the ground that they were not imposed for the '
            'reason stated.',
            '',
            'The facts we rely on are these. On 14 March two officers posted publicly that '
            'the speaker should not have been invited and that the Union would, in one '
            'officer’s words, make sure it is not a comfortable evening. On 20 March the '
            'conditions were imposed. The stated basis was a disruption at another '
            'institution on 6 March and interest which is said to come from the same group. We '
             'have asked '
            'what that report consisted of and have not yet had an answer.',
            '',
            'What we infer is a matter for the Board rather than for us to assert. We would '
            'say only that the policy expressly prohibits acting on the content of a '
            'speaker’s views, and that the sequence above is at least consistent with its '
            'having been acted on.',
            '',
            'We ask the Board to set aside both conditions, or, if it considers a risk is '
            'made out, to require that the evidence of that risk be disclosed to us and the '
            'conditions varied to what the evidence supports.',
            '',
            'We are content for the hearing to be held in public.',
            '',
            'For the Law Society',
        ],
        notes=['It states the ground of appeal in the first sentence, so the Board knows what '
               'it is deciding.',
               'Facts are dated and separated from the inference, which is explicitly left '
               'to the Board.',
               '"At least consistent with" claims exactly as much as the evidence supports '
               'and no more.',
               'It asks for two outcomes, the second of which the Board can grant even if it '
               'finds against the first.'],
        bandpair=dict(
            mid=[
                'Dear Governance,',
                'We are writing to appeal against the conditions you have put on our event on '
                '12 April. We do not think these conditions are fair and we believe the real '
                'reason is that you do not like our speaker.',
                'Two of your officers said publicly last week that the speaker should not have '
                'been invited and that they would make sure the evening was not comfortable. '
                'Then a few days later you imposed these conditions. It is obvious what has '
                'happened here and we think it is a clear breach of your own policy.',
                'We would like the Trustee Board to remove the conditions. We also think the '
                'officers involved should be held accountable for what they said, which was '
                'completely inappropriate for people in their position.',
                'Yours faithfully, The Law Society',
            ],
            top=[
                'Dear Governance,',
                'The Law Society appeals to the Trustee Board against the two conditions '
                'attached to our booking of 12 April, on the ground that they were not imposed '
                'for the reason stated.',
                'The facts we rely on are these. On 14 March two officers posted publicly that '
                'the speaker should not have been invited and that the Union would make sure '
                'it was not a comfortable evening. On 20 March the conditions were imposed. We '
                'have asked what the reported risk consisted of and have not had an answer.',
                'What we infer is a matter for the Board. We would say only that the policy '
                'prohibits acting on the content of a speaker’s views, and that the sequence '
                'is at least consistent with its having been acted on.',
                'We ask the Board to set aside both conditions, or to require the evidence to '
                'be disclosed and the conditions varied to what it supports. For the Law '
                'Society',
            ],
            diffs=[
                'It names the ground of appeal in the first sentence, so the Board knows what '
                'question it is being asked.',
                'The facts are dated and listed separately from the conclusion, instead of '
                'being merged into "it is obvious what has happened".',
                '"At least consistent with" claims only what the evidence carries, which is '
                'far harder to rebut than an assertion of motive.',
                'It asks for a fallback outcome, so the Board can grant something even if it '
                'rejects the main ground.',
                'It drops the demand about disciplining officers, which the Board has no power '
                'to grant and which would have weakened the appeal.',
            ],
        ),
    ),

    w3=dict(
        sub='Access to justice',
        prof='Dr Nakamura',
        question='Most people with valid legal claims never bring them. Research suggests the '
                 'largest barrier is not cost but recognition: people do not identify their '
                 'problem as legal. Some argue that public money should therefore move from '
                 'courts and legal aid towards advice services in everyday settings. Others '
                 'argue that a right enforced only through advice workers is a weaker right, '
                 'and that courts must remain the centre of the system. Where should the money '
                 'go? Why?',
        posts=[('Rafael', 'm',
                'Move the money. A court that is formally open to everyone and used by almost '
                'nobody is a monument, not a service. If advice in a health centre produces '
                'more resolved problems per pound than legal aid does, the argument is over.'),
               ('Siobhan', 'w',
                'I am wary of this. Advice services negotiate; courts decide. Every '
                'improvement won through advice depends on the other side eventually fearing '
                'a court. Hollow out the court and within a decade the advice worker has '
                'nothing to point at.')],
        skill=('Showing that two positions depend on each other',
               ['Sometimes the strongest answer is that the two sides are not alternatives '
                'at all but complements.',
                'It must be argued, not asserted: show the mechanism by which one depends '
                'on the other.',
                'Then say what follows for the actual decision, or the point is academic.']),
        starters=['Siobhan has identified the mechanism that makes Rafael’s figures work.',
                  'The two are not alternatives, because…',
                  'Rafael’s test is right, and applied properly it gives…',
                  'What this means for the budget is…'],
        model=[
            'Siobhan has identified the mechanism that makes Rafael’s figures work, which is '
            'why they are not really opposed. An advice worker who tells a landlord that a '
            'flat breaches the housing standards is making a prediction about what a court '
            'would do. If no court would do it, the landlord has no reason to act, and the '
            'cheap resolution Rafael is counting simply does not occur. The resolutions '
            'achieved outside court are produced by the court existing.',
            'It follows that Rafael’s cost-per-resolution comparison, taken on its own, is '
            'misleading. That these are competing budget lines is open to question, and in '
            'accounting terms they are. Causally they are not: the cheap intervention is '
            'borrowing its authority from the expensive one.',
            'But Siobhan’s conclusion does not follow either. The number of cases a court must '
            'actually hear to remain credible is far smaller than the number of problems it '
            'resolves, which is the whole logic of a deterrent. A system can shift money '
            'towards advice and remain credible, provided the court stays capable of hearing '
            'the cases that reach it reasonably quickly.',
            'So the question is not where the money goes but what the court is for. Funded as '
            'the place most problems are resolved, it will always look wasteful. Funded as the '
            'thing that makes resolution elsewhere possible, it needs to be fast and visible '
            'rather than large, and the rest of the money can move.',
        ],
        model_words=236,
    ),

    gram=dict(
        title='Passive reporting structures',
        headers=['Structure', 'Example'],
        rows=[
            ('It is said / thought / believed that', 'It is thought that the notice was invalid.'),
            ('X is said / thought / believed to', 'The notice is thought to be invalid.'),
            ('X is said to have + past participle', 'The case is said to have been overruled.'),
            ('It has been argued that', 'It has been argued that the remarks were not binding.'),
            ('X is generally held to be', 'The decision is generally held to be correct.'),
            ('is reported / alleged / claimed to', 'The group is alleged to have travelled.'),
            ('in a question', 'Is it thought to be binding?  /  whether it is thought to be binding'),
        ],
        notes=[
            'These structures let you report a claim without saying whose it is and without '
            'endorsing it. That is why academic and legal writing uses them so heavily.',
            'There are two forms of the same meaning. It is thought that X is invalid and X '
            'is thought to be invalid say the same thing; the second is tighter.',
            'For an earlier event use the perfect infinitive: is thought to have been, not is '
            'thought to be, when the event is over.',
        ],
        watch='These structures are not a way of avoiding responsibility for a claim you are '
              'in fact making. If the view is yours, say so. Using it is widely believed for '
              'your own opinion is a recognised bad habit, and examiners notice it.',
        ex=[
            ('Rewrite using X is said / thought / believed to.',
             ['It is said that the case is the leading authority.',
              'It is thought that the notice was invalid.',
              'It is believed that the group travelled from another city.',
              'It is alleged that the officers acted on the content.',
              'It is reported that the meeting was disrupted.',
              'It is generally held that the test is the same for every right.'],
             ['The case is said to be the leading authority.',
              'The notice is thought to have been invalid.',
              'The group is believed to have travelled from another city.',
              'The officers are alleged to have acted on the content.',
              'The meeting is reported to have been disrupted.',
              'The test is generally held to be the same for every right.']),
            ('Choose the present or the perfect infinitive.',
             ['The ruling is thought ______ (be) binding today.',
              'The earlier case is said ______ (be) overruled in 1998.',
              'She is believed ______ (bring) the claim last year.',
              'The policy is understood ______ (apply) to all societies.'],
             ['to be', 'to have been', 'to have brought', 'to apply']),
            ('Make a question from each statement.',
             ['It is thought to be binding.',
              'The case is said to have been overruled.',
              'The conditions are alleged to have been imposed for another reason.',
              'The test is generally held to be the same.'],
             ['Is it thought to be binding?',
              'Is the case said to have been overruled?',
              'Are the conditions alleged to have been imposed for another reason?',
              'Is the test generally held to be the same?']),
        ],
        bas='This is anchor 2 of the course. Build a Sentence builds questions on exactly '
            'these frames: do you know whether it is said to be binding. The frame holds '
            'together as a block and the clause around it keeps statement order.',
    ),

    fault=dict(
        text='It is thought the notice was invalid at the time. The case is said to be '
             'overruled in 1998, which nobody disputes. It is widely believed, in my opinion, '
             'that the policy is unfair. Nobody knows whether was the condition imposed '
             'properly. The officers is alleged to have acted on the content of the views.',
        faults=[
            ('It is thought the notice', 'It is thought that the notice',
             'After it is thought the conjunction that is needed before a clause.'),
            ('is said to be overruled in 1998', 'is said to have been overruled in 1998',
             'A finished past event takes the perfect infinitive, not the present one.'),
            ('It is widely believed, in my opinion, that', 'In my opinion',
             'A reporting structure cannot carry your own opinion; pick one or the other.'),
            ('whether was the condition imposed', 'whether the condition was imposed',
             'An embedded question keeps statement order, so the subject precedes the verb.'),
            ('The officers is alleged', 'The officers are alleged',
             'A plural subject takes a plural verb even inside a reporting frame.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('to confirm a decision on appeal', 'uphold'),
            ('a particular clause of a law', 'provision'),
            ('legally responsible for something', 'liable'),
            ('an earlier decision later courts must follow', 'precedent'),
            ('the area or matters a court has power over', 'jurisdiction'),
            ('that must be followed, not merely considered', 'binding'),
            ('a body deciding a particular class of dispute', 'tribunal'),
            ('what a court orders to put a wrong right', 'remedy'),
            ('freedom to decide within stated limits', 'discretion'),
            ('to act against a right or rule', 'infringe'),
            ('to write a principle permanently into law', 'enshrine'),
            ('the putting right of a wrong', 'redress'),
        ],
        gram=[
            ('It is thought ______ the notice was invalid.', 'that'),
            ('The notice is thought ______ have been invalid.', 'to'),
            ('The case is ______ to be the leading authority.', 'said'),
            ('The group is believed ______ have travelled.', 'to'),
            ('It has ______ argued that the remarks were obiter.', 'been'),
            ('The test is generally ______ to be the same.', 'held'),
            ('______ it thought to be binding?', 'Is'),
            ('The officers ______ alleged to have acted on content.', 'are'),
        ],
        mini=[
            ('The binding part of a judgment is',
             ('everything the judge said', 'the part the outcome turned on',
              'the final paragraph', 'the dissent'), 1,
             'Remove it and the result changes, which is the test the seminar conversation '
             'applies to the notice point.'),
            ('A persuasive authority',
             ('must be followed', 'may be followed with no reason required either way',
              'can never be cited', 'binds lower courts only'), 1,
             'Binding requires a reason to depart; persuasive requires no reason in either '
             'direction, which is the correction made in the dialogue.'),
            ('The Union may attach conditions only where',
             ('students complain', 'there is a specific and credible safety risk',
              'the speaker is external', 'the Board agrees'), 1,
             'Both words do work: something that can be pointed to, and more than online '
             'annoyance.'),
            ('Research suggests the largest barrier to bringing a claim is',
             ('the cost of a lawyer', 'not recognising the problem as legal',
              'court delays', 'distance from a court'), 1,
             'People experience a bad month rather than an unlawful deduction, and the '
             'classification step is itself specialist knowledge.'),
            ('Which sentence is correct?',
             ('The case is said to be overruled in 1998.',
              'The case is said to have been overruled in 1998.',
              'The case is said being overruled in 1998.',
              'The case said to be overruled in 1998.'), 1,
             'A finished past event inside a reporting frame takes the perfect infinitive.'),
            ('"It is open to question" tells you the writer',
             ('accepts it', 'doubts it', 'has proved it false', 'has no view'), 1,
             'It signals the writer’s own doubt while stopping short of asserting that the '
             'claim is wrong.'),
        ],
    ),

    tip='Passive reporting is the structure that makes academic English sound academic, and '
        'the one most often misused. Use it to report what others hold. Do not use it to '
        'smuggle in your own opinion — an examiner who sees it is widely believed attached to '
        'an unsupported claim knows exactly what has happened.',
)
