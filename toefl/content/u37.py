# -*- coding: utf-8 -*-
"""Unit 37 — Money, Debt and Crises. Volume 4."""
from content._g import gaps

_GT, _GA = gaps(
    'A bank does not keep your money in a drawer, and if everybody asked for it at once no '
    'bank could pay. This is not a scandal; it is the mechan{ism}. Deposits are lent out, '
    'the loans become somebody else’s deposits, and the system works because withdraw{als} '
    'are normally uncorrel{ated}. What makes a bank run dangerous is not that savers are '
    'irrati{onal} but the opposite: once a run begins, joining it is the only sens{ible} '
    'thing an individual saver can do.')

_ET, _EA = gaps(
    'If regulators had understood in 2006 what they understood by 2010, the crisis would '
    'have been smaller, and the reason they did not is more interesting than '
    'incompetence. The risk had not disappeared; it had been moved somewhere nobody was '
    'requ{ired} to look. Mortgages were bundled into securities, the securities were rated '
    'by agencies paid by the issu{ers}, and the resulting instruments were held by entities '
    'that did not appear on any bank’s balance sh{eet}. Each step was individually '
    'defens{ible} and legal, and the combination produced a system in which no single '
    'institution could see its own expos{ure}. Had any supervisor been able to add the '
    'positions together, the picture would have been obvious by 2005. Nobody could, because '
    'the information sat in different jurisdict{ions} under different reporting '
    'requirem{ents}, and the one authority with the legal power to demand it had no '
    'stat{utory} duty to do so. The lesson usually drawn is that bankers were greedy, which '
    'is true, unhelpful and constant. The lesson worth drawing is that a system can be '
    'compliant at every point and unsound as a wh{ole}, and that detecting this requires '
    'somebody whose job is to look at the whole and who has the authority to '
    'ins{ist}.')

UNIT = dict(
    n=37, vol=4, level='B2',
    title='Money, Debt and Crises',
    icons=['chart', 'news', 'speech'],
    subs=['What a bank actually does', 'How a crisis propagates',
          'Debt, default and who decides'],
    grammar='Unreal past and the subjunctive',
    field='liquidity, leverage, default',
    opener_line='Finance is the subject where counterfactuals do the most work: if the '
                'regulator had asked, had the position been visible, were the system sound. '
                'This unit teaches the structures English uses for things that did not '
                'happen but nearly did.',
    candos=[
        'I can write a third conditional and a mixed conditional accurately.',
        'I can use inverted conditionals: had it been, were it not for, should you need.',
        'I can use the mandative subjunctive: it is essential that the position be reported.',
        'I can explain a mechanism in which each step is reasonable and the whole is not.',
        'I can follow a talk that distinguishes a moral explanation from a structural one.',
        'I can write about a failure without reaching for blame.',
    ],

    acad=[
        ('liquidity', 'how easily an asset becomes cash'),
        ('solvency', 'having more assets than liabilities'),
        ('leverage', 'the use of borrowed money to increase a position'),
        ('collateral', 'an asset pledged against a loan'),
        ('default', 'failure to make a payment that is due'),
        ('creditor', 'somebody who is owed money'),
        ('debtor', 'somebody who owes money'),
        ('maturity', 'the date a debt falls due'),
        ('amortise', 'to pay off a debt in instalments over time'),
        ('arbitrage', 'profiting from a price difference between markets'),
        ('contagion', 'the spread of trouble from one institution to others'),
        ('exposure', 'the amount that could be lost'),
        ('insolvent', 'unable to pay what is owed'),
        ('underwrite', 'to accept a risk in return for a fee'),
        ('securitise', 'to turn loans into tradable instruments'),
        ('counterparty', 'the other side of a contract'),
        ('audit', 'an independent examination of accounts'),
        ('bailout', 'public money used to rescue an institution'),
    ],
    family=('regulate', [
        ('regulation', 'noun', 'regulation lagged the instruments'),
        ('regulator', 'noun', 'no regulator could see the whole'),
        ('deregulate', 'verb', 'the sector was deregulated in stages'),
    ]),
    collocs=[
        ('call in a loan', 'to demand repayment'),
        ('write off', 'to accept that a debt will not be paid'),
        ('run on a bank', 'a rush of savers withdrawing'),
        ('bail out', 'to rescue with money'),
        ('go under', 'to fail completely'),
        ('in the red', 'owing money, in deficit'),
        ('to the tune of', 'to the amount of'),
        ('across the system', 'everywhere in it at once'),
        ('in good faith', 'honestly, without intent to deceive'),
        ('after the fact', 'once it has already happened'),
    ],
    stance=[
        ('in good faith', 'honestly, without intent to deceive'),
        ('after the fact', 'only once it had happened'),
        ('the usual explanation is', 'the writer sets up a correction'),
        ('by any measure', 'however you assess it'),
        ('it remains unclear whether', 'the writer reports an open question'),
    ],
    nuance=[
        ('liquidity / solvency', 'can pay today / can pay at all'),
        ('debt / deficit', 'what is owed / what is overspent this year'),
        ('default / bankruptcy', 'a missed payment / a legal process'),
    ],
    vocab_talk=[
        'Explain why a bank cannot repay every depositor at once.',
        'Why is joining a bank run rational for one saver?',
        'What is the difference between being illiquid and being insolvent?',
        'Should a country ever be allowed to default? Why?',
    ],
    again=['central bank', 'interest rate', 'bond', 'credit rating',
           'stress test', 'moral hazard', 'lender of last resort', 'capital requirement'],

    r1=dict(
        sub='What a bank actually does',
        skill=('Completing abstract nouns and adjectives of judgement',
               ['Finance writing runs on -ity, -ure and -ence nouns: liquidity, exposure, '
                'incompetence.',
                'The -ible and -able endings mark judgement: defensible, sensible.',
                'A gap after the only usually needs an adjective, not a noun.']),
        guided_text=_GT, guided=_GA,
        guided_hint='mechan--- is mechanism — it follows it is the and names a thing, so the '
                    'slot is a noun.',
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='How a crisis propagates',
        skill=('Reading a reporting requirement against a position',
               ['A reporting rule says what must be disclosed, to whom, and when. A '
                'position tests whether it is caught.',
                'Look for the threshold and the definition. Most disclosure gaps are '
                'definitional, not numerical.',
                'An answer that says the rule does not catch something is usually followed '
                'by a rule that does.']),
        docs=[
            ('notice', 'Financial Supervision Authority · quarterly exposure reporting', [
                '# What must be reported',
                '* Any single counterparty exposure exceeding 10 per cent of own funds.',
                '* The aggregate of all exposures to entities within one group, where group '
                'is as defined in Schedule 2.',
                '# How it must be reported',
                '* Gross, before any netting or hedging, with hedges listed separately.',
                '# Outside the quarterly return',
                '* Exposures held through structures the firm does not consolidate, which '
                'are reported annually under the separate Schedule 7 return.',
                '* Intra-day positions closed before settlement.',
            ], 'notice'),
            ('email', 'h.lindgren@fsa.gov', 'c.ferreira@meridianbank.com',
             '04/09/2028', 'Your Schedule 2 query — and a question back', [
                 'Dear Ms Ferreira,',
                 '',
                 'Thank you for asking before filing rather than afterwards, which is rarer',
                 'than it should be.',
                 '',
                 'Your reading is right. The three vehicles are not consolidated, so the',
                 'exposures held through them fall outside the quarterly return and into the',
                 'annual Schedule 7. Nothing in your draft is wrong and I am not going to',
                 'ask you to change it.',
                 '',
                 'Now a question back, which you are free to decline. Taken together, those',
                 'three vehicles hold positions with a single counterparty that would be',
                 'about 14 per cent of your own funds if they sat on your balance sheet.',
                 'Nothing requires you to tell me that. You have just told me, in effect, by',
                 'asking the question, and I would rather have it in a letter than infer it',
                 'in March.',
                 '',
                 'I am not suggesting anything improper. The structure is legal, the',
                 'accounting is correct and it is plainly done in good faith. But the',
                 'quarterly return exists so that somebody can add positions together, and',
                 'on this one it cannot. If you wrote to me voluntarily with the aggregate,',
                 'I would treat it as responsive supervision rather than as a disclosure of',
                 'a problem, and I would say so in writing first if that helps.',
                 '',
                 'Mr Lindgren, Supervision Division',
             ]),
        ],
        guided=[
            ('What single-counterparty exposure must be reported?',
             ('Any exposure', 'Any exceeding 10 per cent of own funds',
              'Any over 14 per cent', 'Only group exposures'), 1,
             'The threshold is set against own funds rather than against a fixed sum.'),
            ('How must exposures be reported?',
             ('Net of hedging', 'Gross, with hedges listed separately',
              'After netting', 'As a single total'), 1,
             'Reporting gross is what allows a supervisor to see the underlying position.'),
            ('Where do non-consolidated exposures go?',
             ('The quarterly return', 'The annual Schedule 7 return',
              'Nowhere', 'The audit report'), 1,
             'That annual route is exactly the gap the supervisor is writing about.'),
            ('What is outside the quarterly return?',
             ('All hedges', 'Intra-day positions closed before settlement',
              'Group exposures', 'Collateral'), 1,
             'It is listed alongside non-consolidated structures as a stated exclusion.'),
        ],
        exam=[
            ('What does the supervisor say about the bank’s reading of the rules?',
             ('It is wrong', 'It is right and nothing needs changing',
              'It needs legal advice', 'It is arguable'), 1,
             'He confirms the position before raising anything else, which is what makes the '
             'request a request.'),
            ('What is the aggregate exposure through the three vehicles?',
             ('About 10 per cent of own funds', 'About 14 per cent of own funds',
              'Below the threshold', 'Not calculable'), 1,
             'That figure would breach the quarterly threshold if the vehicles were '
             'consolidated.'),
            ('Why does the supervisor say he now knows?',
             ('The bank filed it', 'The question itself told him',
              'An audit found it', 'A counterparty reported it'), 1,
             'He says he would rather have it in a letter than infer it in March.'),
            ('What does he explicitly not suggest?',
             ('That the structure is legal', 'That anything improper has occurred',
              'That the return is adequate', 'That the bank should restructure'), 1,
             'He calls the accounting correct and the arrangement plainly done in good '
             'faith.'),
            ('What does he say the quarterly return exists for?',
             ('Tax purposes', 'So that somebody can add positions together',
              'To check hedging', 'To record defaults'), 1,
             'His whole point is that on this exposure it cannot do that job.'),
            ('What does he offer in return for a voluntary letter?',
             ('A lighter audit', 'To treat it as responsive supervision and to say so in writing',
              'An extension', 'A change to Schedule 7'), 1,
             'Saying so in writing first is what removes the risk of volunteering the '
             'information.'),
            ('What is the structure of his email?',
             ('A refusal and an instruction', 'A confirmation, a question he cannot compel, and an assurance',
              'A warning', 'A request for an audit'), 1,
             'He settles the compliance point, asks for something outside the rules, and '
             'makes it safe to answer.'),
        ],
    ),

    r3=dict(
        sub='Debt, default and who decides',
        title='The Country That Cannot Pay',
        words=294,
        paras=[
            'A country that cannot service its debts has no bankruptcy court to go to, and '
            'the absence of one shapes everything that follows. A company in that position '
            'enters a process with a judge, a queue and a statutory outcome. A state enters '
            'a negotiation, and the usual explanation is that it borrowed irresponsibly and '
            'must now accept the consequences. '
            'Sometimes it is accurate, and much of the borrowing was done in good faith by '
            'governments two administrations ago. It is also the explanation that requires no '
            'reform, which may be why it survives.',

            'The economics are not seriously disputed. A debt that cannot be paid will not '
            'be paid, and the only question is how long the pretence lasts and what it costs. '
            'By any measure the costs of delay fall mainly on people who did not borrow '
            'anything: a decade of contracted spending, emigration of the young and '
            'skilled, a tax base shrinking faster than the debt. Creditors who refuse to '
            'write down a claim they '
            'will never collect are not protecting their money; they are protecting the '
            'accounting treatment of an asset they will admit is impaired only after the '
            'fact.',

            'It remains unclear whether an orderly process would be better; it would help '
            'some countries and harm others. A statutory '
            'mechanism would reduce the cost of default, which is the point, and would '
            'therefore raise the cost of borrowing for every government that might one '
            'day use it — a real cost, falling now, on countries that have done nothing '
            'wrong. The argument against reform is thus not a defence of creditors but a '
            'claim about who pays for the insurance, and it has never been answered by the '
            'reform camp, which has preferred to treat the opposition as venal.',
        ],
        skill=('Reading a passage that takes the opposing argument seriously',
               ['A strong author will restate the opposing case in a form its holders would '
                'accept.',
                'Look for the sentence that says what the argument is really about, as '
                'against how it is characterised.',
                'The criticism at the end may fall on the author’s own side.']),
        guided=[
            ('What does a state in default lack that a company has?',
             ('Creditors', 'A bankruptcy court with a statutory outcome',
              'Assets', 'Legal advice'), 1,
             'The absence of that process is what the first paragraph says shapes everything '
             'else.'),
            ('What does the author say about the usual explanation?',
             ('It is always wrong', 'It is sometimes accurate and requires no institutional reform',
              'It is new', 'It is unpopular'), 1,
             'The second observation is offered as a possible reason the explanation '
             'survives.'),
            ('What does the author say is not seriously disputed?',
             ('Who is to blame', 'That a debt which cannot be paid will not be paid',
              'The size of the debt', 'The legal position'), 1,
             'That leaves only the duration of the pretence and its cost as live '
             'questions.'),
            ('On whom do the costs of delay mainly fall?',
             ('Creditors', 'People who did not borrow anything',
              'Future governments', 'Rating agencies'), 1,
             'Contracted spending, emigration and a shrinking tax base are the examples '
             'given.'),
        ],
        exam=[
            ('What does the author say refusing creditors are protecting?',
             ('Their money', 'The accounting treatment of an impaired asset',
              'Their legal rights', 'Future lending'), 1,
             'The distinction is between the claim’s value and how it is carried on the '
             'books.'),
            ('What would a statutory mechanism do to the cost of default?',
             ('Raise it', 'Reduce it', 'Leave it unchanged', 'Make it unmeasurable'), 1,
             'The author adds that this is the point of such a mechanism.'),
            ('What is the consequence of reducing the cost of default?',
             ('Fewer defaults', 'A higher cost of borrowing for governments that might use it',
              'Stronger creditors', 'Larger debts'), 1,
             'The author calls it a real cost falling now on countries that have done nothing '
             'wrong.'),
            ('What does the author say the argument against reform really is?',
             ('A defence of creditors', 'A claim about who pays for the insurance',
              'A legal objection', 'A moral argument'), 1,
             'The author explicitly contrasts this with how the argument is usually '
             'characterised.'),
            ('What criticism does the author make of the reformers?',
             ('They are naive', 'They have treated the opposition as venal instead of answering it',
              'They lack evidence', 'They are too cautious'), 1,
             'The criticism falls on the side the passage otherwise appears to favour.'),
            ('What does "the pretence" refer to?',
             ('The debt figures', 'Maintaining that a debt which cannot be paid will be',
              'The creditors’ accounts', 'The negotiation'), 1,
             'It follows directly from the claim that such a debt will not be paid.'),
            ('Which would most weaken the third paragraph?',
             ('Evidence that defaults are rare',
              'Evidence that borrowing costs did not rise where such mechanisms exist',
              'Evidence that creditors oppose reform',
              'Evidence that delay is costly'), 1,
             'The whole argument against reform rests on that predicted rise in borrowing '
             'costs.'),
            ('All of the following are stated EXCEPT:',
             ('A state has no bankruptcy court',
              'The costs of delay fall mainly on non-borrowers',
              'A statutory mechanism would reduce the cost of default',
              'An orderly process would be better for every country'), 3,
             'The author says it would be better for some and worse for others.'),
            ('What is the author’s overall approach?',
             ('Advocacy for reform', 'Sympathetic to reform and critical of its advocates’ argument',
              'Opposition to reform', 'Neutral reporting'), 1,
             'The passage grants the economics, states the strongest objection fairly and '
             'faults the reformers for ignoring it.'),
        ],
    ),

    l1=dict(
        sub='What a bank actually does',
        caption='Two students after an economics lecture',
        skill=('Hearing a counterfactual argument',
               ['Counterfactual reasoning is common in economics. The items test the '
                'condition, not the outcome.',
                'Listen for: if they had, the result would have been, had anybody been able '
                'to.',
                'A speaker may use a counterfactual to show that a cause was not the obvious '
                'one.']),
        warm=[
            ('Man: So the bank does not have my money?',
             ('Not as cash, no. It has been lent out.', 'Yes, in a vault.',
              'About two per cent.', 'At the branch.'), 0,
             'A so-does-it question answered by correcting the form the money takes.'),
            ('Woman: Is joining a bank run irrational?',
             ('No — that is exactly the problem.', 'Yes, completely.',
              'About three days.', 'In a crisis.'), 0,
             'An is-it-irrational question answered by rejecting the premise and naming the '
             'difficulty.'),
            ('Man: Would a regulator have seen it in 2005?',
             ('Only if somebody could have added it up.', 'Yes, easily.',
              'About four years.', 'In the lecture.'), 0,
             'A would-it question answered with the condition the counterfactual depends '
             'on.'),
        ],
        script=[
            ('Woman', 'The part I keep turning over is that nobody had to break a rule.'),
            ('Man', 'Every step was legal. That is what makes it worth studying.'),
            ('Woman', 'Mortgages bundled into securities, securities rated by agencies the '
                      'issuers paid, instruments parked in entities nobody consolidated.'),
            ('Man', 'And each of those, taken alone, is defensible. Bundling spreads risk. '
                    'Ratings are a service somebody has to pay for. Off-balance-sheet '
                    'vehicles have perfectly ordinary uses.'),
            ('Woman', 'So where does it go wrong?'),
            ('Man', 'In the addition. No institution could see its own total exposure, and no '
                    'supervisor could see anybody’s. Had one person been able to add the '
                    'positions together, the picture would have been obvious by about 2005.'),
            ('Woman', 'Why could nobody?'),
            ('Man', 'Because the pieces sat in different jurisdictions with different '
                    'reporting rules, and the one authority with the legal power to demand the '
                    'lot had no duty to.'),
            ('Woman', 'The lecture said the greed explanation is useless.'),
            ('Man', 'It said it was true, unhelpful and constant. Greed is always there. If '
                    'it were the variable, we would have a crisis every year. What changed was '
                    'the visibility.'),
        ],
        items=[
            ('What does the woman find most striking?',
             ('The size of the losses', 'That nobody had to break a rule',
              'The role of ratings', 'The speed of the collapse'), 1,
             'He agrees and says that is what makes the episode worth studying.'),
            ('What does the man say about each individual step?',
             ('Each was illegal', 'Each taken alone is defensible',
              'Each was unprecedented', 'Each was concealed'), 1,
             'He gives an ordinary justification for bundling, ratings and '
             'off-balance-sheet vehicles.'),
            ('Where does he say it goes wrong?',
             ('In the ratings', 'In the addition', 'In the lending', 'In the law'), 1,
             'No institution could see its own total and no supervisor could see '
             'anybody’s.'),
            ('When would the picture have been obvious?',
             ('2010', 'About 2005', 'Never', '2008'), 1,
             'He attaches that date to the counterfactual about adding the positions '
             'together.'),
            ('Why could nobody add the positions?',
             ('The data did not exist', 'Different jurisdictions and reporting rules, and no duty to demand them',
              'The instruments were secret', 'Nobody thought of it'), 1,
             'He names both the fragmentation and the absence of a duty on the one authority '
             'with the power.'),
            ('What does he say about the greed explanation?',
             ('It is false', 'It is true, unhelpful and constant',
              'It is the main cause', 'It is unfashionable'), 1,
             'He adds that if greed were the variable there would be a crisis every year.'),
            ('What does he say changed?',
             ('The level of greed', 'The visibility', 'The regulations', 'The interest rate'), 1,
             'That contrast with the constant is the conclusion of the whole '
             'conversation.'),
        ],
    ),

    l2=dict(
        sub='How a crisis propagates',
        caption='A supervision briefing to compliance officers',
        poster=['Supervision Division · quarterly returns due Friday',
                'Report gross, hedges separately',
                'Ask before you file'],
        skill=('Hearing a request that cannot be compelled',
               ['A speaker may ask for something they have no power to require. The '
                'distinction will be stated.',
                'Listen for: nothing obliges you to, I am asking rather than requiring.',
                'The reason it is worth doing anyway is the examinable part.']),
        warm=[
            ('Woman: Must I report the unconsolidated positions quarterly?',
             ('No — those go in the annual return.', 'Yes, every quarter.',
              'About fourteen per cent.', 'On Friday.'), 0,
             'A must-I question answered with the route the rule actually sends it down.'),
            ('Man: Should I net the hedges off?',
             ('No — gross, with hedges listed separately.', 'Yes, always net.',
              'About ten per cent.', 'In Schedule 2.'), 0,
             'A should-I question answered with the reporting basis the rule requires.'),
            ('Woman: Can you require the aggregate figure?',
             ('No, which is why I am asking for it.', 'Yes, I can demand it.',
              'About four vehicles.', 'By March.'), 0,
             'A can-you question answered with the limit on the power and the reason for the '
             'request.'),
        ],
        script=[
            ('Man', 'Two things, and the second is a request rather than an instruction. '
                    'First, the mechanics. Single counterparty exposures above ten per cent of '
                    'own funds, reported gross — gross, not net — with your hedges listed '
                    'separately underneath. We ask for gross because a netted figure tells us '
                    'what you think your risk is, and we need to know what your position is. '
                    'Those are different questions and in 2008 the difference was the whole '
                    'story. Second, and here I have no authority at all. Exposures you hold '
                    'through structures you do not consolidate are outside the quarterly '
                    'return. They go in the annual Schedule 7. That is the rule, it is a '
                    'perfectly deliberate rule, and nothing obliges any of you to tell me '
                    'about them in between. But the quarterly return exists so that somebody '
                    'can add positions together across the system, and for anything held that '
                    'way, it cannot. So I am asking. If your aggregate through those '
                    'structures would cross the threshold were it on your balance sheet, '
                    'write to me. I will confirm in advance and in writing that I treat such a '
                    'letter as responsive supervision and not as the disclosure of a problem. '
                    'Two of you did this last year and in both cases it ended in nothing at '
                    'all, which is the outcome I am hoping for.'),
        ],
        items=[
            ('How must single-counterparty exposures be reported?',
             ('Net of hedges', 'Gross, with hedges listed separately',
              'Annually', 'Only above 14 per cent'), 1,
             'He repeats gross, not net, and explains the reason immediately afterwards.'),
            ('Why does the Authority want gross figures?',
             ('They are simpler', 'A netted figure shows what the firm thinks its risk is, not its position',
              'They are legally required', 'They are easier to audit'), 1,
             'He says those are different questions and that the difference was the whole '
             'story in 2008.'),
            ('Where do unconsolidated exposures go?',
             ('The quarterly return', 'The annual Schedule 7',
              'Nowhere', 'An audit report'), 1,
             'He calls this a perfectly deliberate rule rather than an oversight.'),
            ('What does he say about his authority on the second point?',
             ('It is discretionary', 'He has none at all',
              'It applies annually', 'It is under review'), 1,
             'Nothing obliges any of them to tell him in between, which is why he asks.'),
            ('What is he asking firms to do?',
             ('File early', 'Write to him if the aggregate would cross the threshold on balance sheet',
              'Consolidate the vehicles', 'Change their hedging'), 1,
             'The condition is counterfactual: were it on the balance sheet.'),
            ('What assurance does he offer?',
             ('A lighter inspection', 'Written confirmation in advance that such a letter is responsive supervision',
              'Anonymity', 'An extended deadline'), 1,
             'He also notes that two firms did it last year and nothing came of it.'),
        ],
    ),

    l3=dict(
        sub='Debt, default and who decides',
        caption='A lecture on sovereign default',
        board=['No bankruptcy court for a state',
               'A debt that cannot be paid will not be',
               'Costs of delay fall on non-borrowers',
               'Reform would raise borrowing costs now'],
        skill=('Following a talk that criticises its own side',
               ['A lecturer who favours one position may spend the strongest section '
                'attacking its advocates.',
                'Listen for: the argument against this is serious and we have not answered '
                'it.',
                'The final item is usually about the quality of the argument, not the '
                'policy.']),
        warm=[
            ('Man: Can a country go bankrupt?',
             ('There is no court for it to go to.', 'Yes, like a company.',
              'About a decade.', 'In the lecture.'), 0,
             'A can-it question answered by naming the institution that does not exist.'),
            ('Woman: Why delay a default that must happen?',
             ('Because somebody still has it as an asset.', 'Because it might not happen.',
              'About ten years.', 'The creditors decide.'), 0,
             'A why-delay question answered with the interest that is actually being '
             'protected.'),
            ('Man: Would a legal process be better?',
             ('For some countries. Worse for others.', 'Yes, obviously.',
              'About thirty years.', 'Under the treaty.'), 0,
             'A would-it-be-better question answered by splitting the answer rather than '
             'giving one.'),
        ],
        script=[
            ('Woman', 'A company that cannot pay goes to a court. There is a judge, a queue '
                      'of creditors, a statute and an outcome. A state that cannot pay goes '
                      'into a negotiation, and the difference between those two sentences is '
                      'the subject of this lecture. Start with what is not in dispute. A debt '
                      'that cannot be paid will not be paid. No economist of any school '
                      'disagrees. The only live questions are how long the pretence lasts and '
                      'what it costs, and by any measure the cost falls on people who '
                      'borrowed nothing: a decade of contracted public spending, the young '
                      'and skilled emigrating, a tax base shrinking faster than the debt. And '
                      'creditors who will not write down a claim they are never going to '
                      'collect are not defending their money. They are defending the '
                      'accounting treatment of an asset they have not yet called impaired. '
                      'Now the part where I am going to criticise my own side, because it '
                      'needs doing. People like me have argued for thirty years for a '
                      'statutory mechanism. There is a serious argument against it and we '
                      'have never answered it. A mechanism would lower the cost of default — '
                      'that is the point — and it would therefore raise the cost of borrowing '
                      'today for every government that might one day use it. That cost falls '
                      'now, on countries that have done nothing wrong. That is not a defence '
                      'of bondholders. It is a question about who pays for the insurance, and '
                      'the reform camp has mostly preferred to call the other side greedy '
                      'rather than engage with it. It remains unclear whether we are right. '
                      'It is entirely clear that we have argued badly.'),
        ],
        items=[
            ('What is the difference she builds the lecture on?',
             ('Between debt and deficit', 'Between a court process and a negotiation',
              'Between banks and states', 'Between default and bankruptcy'), 1,
             'A company has a judge, a statute and an outcome; a state has none of them.'),
            ('What does she say is not in dispute?',
             ('Who is at fault', 'That a debt which cannot be paid will not be paid',
              'The size of the debt', 'The legal framework'), 1,
             'She says no economist of any school disagrees with it.'),
            ('On whom does the cost of delay fall?',
             ('Creditors', 'People who borrowed nothing',
              'Rating agencies', 'Future lenders'), 1,
             'Contracted spending, emigration and a shrinking tax base are her examples.'),
            ('What does she say refusing creditors are defending?',
             ('Their money', 'The accounting treatment of an impaired asset',
              'Their legal rights', 'The negotiation'), 1,
             'She distinguishes the value of the claim from how it is carried on the '
             'books.'),
            ('What effect would a statutory mechanism have?',
             ('No effect on borrowing costs', 'Lower default costs and higher borrowing costs now',
              'Higher default costs', 'Fewer negotiations'), 1,
             'She says the first is the point and the second is the price.'),
            ('Who would bear that cost?',
             ('Bondholders', 'Countries that have done nothing wrong',
              'The institutions', 'Future governments only'), 1,
             'That is why she calls it a question about who pays for the insurance.'),
            ('What is her criticism of her own side?',
             ('They are wrong', 'They have called the other side greedy instead of answering the argument',
              'They lack evidence', 'They are too cautious'), 1,
             'Her closing line separates whether they are right from how they have '
             'argued.'),
        ],
    ),

    sp=[
        dict(
            sub='What a bank actually does',
            focus='saying a third conditional cleanly',
            skill=('Saying what would have happened',
                   ['The third conditional has two halves and both are past: if they had '
                    'seen it, the crisis would have been smaller.',
                    'Contract the auxiliaries in speech: if they’d seen it, it would’ve been. '
                    'Full forms sound like dictation.',
                    'Stress the condition, not the result. The condition is the claim.']),
            repeat=[
                'The bank does not hold your money as cash.',
                'Deposits are lent out and become other deposits.',
                'The system works because withdrawals are uncorrelated.',
                'If everybody asked at once, no bank could pay.',
                'If the positions had been visible, the crisis would have been smaller.',
                'Had one supervisor been able to add them up, the picture would have been obvious.',
                'If greed were the variable rather than the constant, we would have had a crisis every year instead of once a generation.',
            ],
            theme='money, trust and institutions',
            qs=[
                'Thanks for joining me. To begin, do you trust banks? Has that changed?',
                'Most people do not know how banking works. Does that matter?',
                'Now your opinion. Should banks be allowed to fail? Why or why not?',
                'A final question. Can confidence in an institution be rebuilt once it has '
                'gone?',
            ],
            model=[(2, 'It matters less than people think for ordinary decisions and more '
                       'than they think for voting, because the policy arguments are '
                       'conducted in terms nobody has been given.'),
                   (4, 'Slowly, and only by the institution being boring for a long time. '
                       'Anything faster is marketing.')],
            selfcheck=['I kept both halves of the third conditional in the past.',
                       'I contracted the auxiliaries.',
                       'I stressed the condition rather than the result.'],
        ),
        dict(
            sub='How a crisis propagates',
            focus='inverted conditionals and the subjunctive',
            skill=('Saying had it been and were it not for',
                   ['An inverted conditional drops if and inverts: had the position been '
                    'visible, were it not for the structure.',
                    'The mandative subjunctive uses the bare verb: it is essential that the '
                    'position be reported.',
                    'Both are formal. In speech, use one and then return to ordinary '
                    'forms.']),
            repeat=[
                'Report gross, not net.',
                'A netted figure says what you think your risk is.',
                'We need to know what your position is.',
                'Were those exposures on your balance sheet, they would cross the threshold.',
                'Had anybody been able to add them up, the picture would have been clear.',
                'It is essential that the aggregate be reported somewhere.',
                'Were it not for the fact that the pieces sat in different jurisdictions, one authority could have demanded the lot and nobody did.',
            ],
            theme='rules, disclosure and what nobody is required to say',
            qs=[
                'Thank you for your time. First, have you ever had to follow a rule you '
                'thought was pointless?',
                'A system can be fully compliant and still unsound. How should that be '
                'policed?',
                'Now an opinion question. Should regulators have the power to demand any '
                'information they want? Why?',
                'One last question. Would you volunteer information you were not required to '
                'give? Under what conditions?',
            ],
            model=[(2, 'By giving somebody the job of looking at the whole and the authority '
                       'to insist. Compliance at every point is not a substitute for anybody '
                       'adding it up.'),
                   (4, 'If the person asking said in advance, in writing, how they would '
                       'treat the answer. Without that, volunteering is just taking a risk '
                       'nobody will thank you for.')],
            selfcheck=['I inverted the conditional without using if.',
                       'I used the bare verb after it is essential that.',
                       'I did not stack formal structures.'],
        ),
        dict(
            sub='Debt, default and who decides',
            focus='criticising your own position',
            skill=('Granting the strongest objection',
                   ['State the objection as its holders would: not a caricature, a version '
                    'they would sign.',
                    'Say plainly that it has not been answered, if it has not.',
                    'Separate whether you are right from whether you have argued well.']),
            repeat=[
                'A company that cannot pay goes to a court.',
                'A state that cannot pay enters a negotiation.',
                'A debt that cannot be paid will not be paid.',
                'The cost of delay falls on people who borrowed nothing.',
                'A statutory mechanism would lower the cost of default.',
                'It would therefore raise the cost of borrowing today.',
                'That is not a defence of bondholders but a question about who pays for the insurance, and my own side has preferred to call it greed.',
            ],
            theme='debt, fairness and institutional design',
            qs=[
                'Thanks for taking part. To start, is personal debt viewed differently where '
                'you are from?',
                'Countries are told to accept the consequences of borrowing. Who is "the '
                'country" in that sentence?',
                'Now your opinion. Should there be an international bankruptcy process for '
                'states? Why?',
                'And finally. Is it a strength or a weakness to say your own side has argued '
                'badly?',
            ],
            model=[(2, 'Not the people who borrowed, usually. The government changed twice, '
                       'and the consequences are accepted by whoever is still in the country '
                       'in ten years.'),
                   (4, 'A strength, and only if you then answer the objection. Saying it and '
                       'stopping is a way of looking honest without doing the work.')],
            selfcheck=['I stated the objection in a form its holders would accept.',
                       'I said whether it had been answered.',
                       'I kept being right and arguing well apart.'],
        ),
    ],

    w1=dict(
        sub='Questions about money',
        skill=('Build a Sentence with an unreal condition',
               ['The two non-question items in this unit build an unreal condition, often '
                'inverted: had it been, were it not for.',
                'An inverted conditional has no if: had the position been visible, not if '
                'had the position.',
                'Were it not for is followed by a noun phrase, never by a clause.']),
        guided=[
            ('The three vehicles are not consolidated.',
             ['know', 'do', 'you', 'whether', 'that', 'is', 'deliberate', 'rule', 'a'],
             'Do you know whether that is a deliberate rule?'),
            ('No supervisor could see the total exposure.',
             ['to know', 'nobody', 'seems', 'why', 'nobody', 'the lot', 'demanded', 'simply', 'actually'],
             'Nobody seems to know why nobody actually simply demanded the lot.'),
            ('My tutor asked about the ratings agencies.',
             ['she', 'whether', 'to know', 'wanted', 'I', 'had', 'who', 'them', 'paid'],
             'She wanted to know whether I had asked who paid them.'),
        ],
        exam=[
            ('A netted figure hides the underlying position.',
             ['do', 'whether', 'know', 'you', 'the rule', 'that', 'allows', 'all', 'at'],
             'Do you know whether the rule allows that at all?'),
            ('The quarterly return cannot capture those exposures.',
             ['explain', 'can', 'anybody', 'why', 'the gap', 'to me', 'was', 'there', 'left'],
             'Can anybody explain to me why the gap was left there?'),
            ('A state has no bankruptcy court.',
             ['know', 'does', 'anybody', 'why', 'one', 'has', 'been', 'never', 'created'],
             'Does anybody know why one has never been created?'),
            ('The costs of delay fall on non-borrowers.',
             ['us', 'told', 'nobody', 'who', 'the costs', 'was', 'supposed', 'bear', 'to'],
             'Nobody told us who was supposed to bear the costs.'),
            ('Two firms wrote in voluntarily last year.',
             ['told', 'he', 'me', 'what', 'had', 'happened', 'to', 'in the end', 'them'],
             'He told me what had happened to them in the end.'),
            ('The positions were never added together.',
             ['had', 'anybody', 'added', 'them', 'up', 'the picture', 'would', 'have', 'been obvious'],
             'Had anybody added them up, the picture would have been obvious.'),
            ('The pieces sat in different jurisdictions.',
             ['were', 'it', 'not', 'for', 'that', 'one authority', 'could', 'the lot', 'have demanded'],
             'Were it not for that, one authority could have demanded the lot.'),
        ],
    ),

    w2=dict(
        sub='How a crisis propagates',
        to='supervision@fsa.gov',
        date='11/09/2028',
        subject='Voluntary notification — aggregate counterparty exposure through unconsolidated vehicles',
        scenario=[
            'The supervisor has confirmed your reading of the rules, pointed out that your '
            'aggregate exposure through three unconsolidated vehicles would breach the '
            'quarterly threshold if it sat on your balance sheet, and offered to treat a '
            'voluntary letter as responsive supervision. Your board has agreed to write. You '
            'also want to propose something about the rule itself.',
            'Write an email to the Supervision Division.',
        ],
        bullets=['Give the figure and the basis on which it is calculated.',
                 'Say what you have done about it internally.',
                 'Make one proposal about the reporting rule, and name its cost.'],
        skill=('Volunteering information that was not required',
               ['Lead with the number. A voluntary disclosure that buries the figure reads '
                'as reluctance.',
                'State the basis of calculation, because a figure without a basis cannot be '
                'compared with anything.',
                'Say what you have already done. It converts the letter from a confession '
                'into a report.']),
        model=[
            'Dear Mr Lindgren,',
            '',
            'Thank you for confirming in writing how this letter will be treated. The board '
            'met on Tuesday and agreed to write.',
            '',
            'The figure is 13.8 per cent of own funds as at 31 August, gross, aggregated '
            'across the three unconsolidated vehicles, against a single counterparty. The '
            'basis is the same as the quarterly return: gross, before netting, with hedges '
            'excluded from the numerator. On the same basis the equivalent figure at 31 May '
            'was 11.2 per cent, so the direction matters as much as the level.',
            '',
            'Three things have changed internally. The aggregate is now calculated monthly '
            'rather than annually and goes to the Risk Committee. We have set an internal '
            'limit of 12 per cent, which we are currently above and expect to be inside by '
            'December. And the Committee has asked for the same aggregation across the four '
            'next largest counterparties, which we did not previously produce at all.',
            '',
            'One proposal, with its cost stated. Schedule 7 could require the aggregate '
            'through unconsolidated structures to be reported quarterly rather than annually, '
            'as a single line, without the full Schedule 7 detail. For us that is about two '
            'days of work a quarter. For the Authority it closes the gap you described '
            'without asking anybody to consolidate anything. It would catch firms who are '
            'doing nothing wrong and who will nonetheless find the line uncomfortable, and '
            'that is a real cost rather than an imaginary one.',
            '',
            'With thanks,',
            'Constança Ferreira',
        ],
        notes=['The figure comes first, with a date, and the basis of calculation is stated '
               'so it can be compared.',
               'The previous quarter is given unprompted, which supplies the trend the '
               'supervisor would have asked for next.',
               'Three internal changes are reported, including an admission that the firm is '
               'currently above its own new limit.',
               'The proposal is specific, costed in days, and names who it would inconvenience '
               '— which is what makes it a proposal rather than a gesture.'],
        bandpair=dict(
            mid=[
                'Dear Mr Lindgren,',
                'Thank you very much for your email and for your reassurance about how a '
                'letter of this kind would be handled. Our board has now discussed the matter '
                'and has agreed that I should write to you about it.',
                'You are right that our aggregate exposure through the three vehicles would be '
                'above the quarterly threshold if the vehicles were consolidated. The figure '
                'is just under 14 per cent at the moment. We have been looking at this '
                'carefully and we are taking steps internally to monitor it more closely than '
                'we did before.',
                'We would also like to suggest that the reporting rules might be looked at, '
                'as it does seem that there is a gap here which could cause problems in '
                'future. We would be happy to discuss this further with you if that would be '
                'helpful at any point.',
                'Thank you again for your understanding. Best wishes, Constança Ferreira',
            ],
            top=[
                'Dear Mr Lindgren,',
                'Thank you for confirming in writing how this letter will be treated. The '
                'board met on Tuesday and agreed to write.',
                'The figure is 13.8 per cent of own funds at 31 August, gross, aggregated '
                'across the three vehicles against one counterparty, on the same basis as the '
                'quarterly return. At 31 May it was 11.2 per cent, so the direction matters as '
                'much as the level.',
                'Internally: the aggregate is now monthly rather than annual and goes to the '
                'Risk Committee; we have set an internal limit of 12 per cent, which we are '
                'above and expect to be inside by December; and the Committee has asked for '
                'the same aggregation across the next four counterparties.',
                'One proposal, costed. Schedule 7 could require this aggregate quarterly as a '
                'single line, without the full detail. For us, about two days a quarter. It '
                'would catch firms doing nothing wrong who will find the line uncomfortable, '
                'and that is a real cost. Constança Ferreira',
            ],
            diffs=[
                'It gives the exact figure and date rather than just under 14 per cent, and '
                'states the basis so the number can be compared with the return.',
                'It supplies the previous quarter unprompted, which turns a level into a '
                'trend.',
                'It lists three specific internal changes, including the admission that the '
                'firm is above its own new limit — which a regulator trusts far more than '
                'monitoring more closely.',
                'It makes a concrete drafting proposal instead of suggesting the rules be '
                'looked at.',
                'It costs the proposal in days and names whom it would inconvenience, so the '
                'supervisor can weigh it rather than investigate it.',
            ],
        ),
    ),

    w3=dict(
        sub='Debt, default and who decides',
        prof='Dr Abramović',
        question='There is no bankruptcy court for a sovereign state. A country that cannot '
                 'service its debts enters a negotiation whose outcome depends on bargaining '
                 'power, and the delay before a write-down typically costs a decade of '
                 'contracted public spending. Some argue for a statutory international '
                 'mechanism that would make default orderly and predictable. Others argue '
                 'that this would raise borrowing costs today for every government that might '
                 'one day use it, penalising countries that have borrowed prudently. Which '
                 'argument is stronger?',
        posts=[('Nkechi', 'w',
                'Create the mechanism. The present arrangement is not a market outcome, it is '
                'the absence of an institution, and the cost of that absence is paid by people '
                'who were children when the borrowing happened. No defensible principle '
                'assigns the cost to them.'),
               ('Lukas', 'm',
                'Nkechi has not priced her own proposal. Making default cheaper makes lending '
                'riskier, and the premium is charged immediately to every borrower in the '
                'category — including governments that will never default. She is proposing an '
                'insurance scheme and declining to say who pays the premium.')],
        skill=('Answering an argument about who bears a cost',
               ['When the dispute is about incidence, say who pays under each arrangement, '
                'now and later.',
                'Check whether the costs are of the same kind. A certain small cost and an '
                'uncertain large one are not comparable by size alone.',
                'Then propose the design feature that changes the incidence.']),
        starters=['Lukas is right that the proposal has a price and wrong about its shape.',
                  'Nkechi’s principle is the strongest thing in either post.',
                  'What neither has separated is…',
                  'The design feature that changes this is…'],
        model=[
            'Lukas is right that the proposal has a price and wrong about its shape. Making '
            'default orderly does raise the risk premium, and it raises it for a defined '
            'category of borrowers, which is a real and immediate cost. But he describes it '
            'as a penalty on the prudent, and that comparison only works if the current '
            'arrangement is costless to those same countries. It is not. The absence of a '
            'mechanism makes every default chaotic and contagious, and contagion is charged '
            'to neighbours and trading partners who did not borrow either. The choice is '
            'between a small certain premium and a large uncertain one, not between a premium '
            'and nothing.',
            'Nkechi’s principle is the strongest thing in either post and she states it too '
            'broadly. No defensible principle assigns the cost to people who were children at '
            'the time — agreed, and that argument also condemns a mechanism that lowered '
            'default costs so far that governments borrowed more freely against it. Her '
            'principle supports an orderly process and constrains its generosity, and she has '
            'used only the first half.',
            'What neither has separated is the two things a mechanism does. It fixes the '
            'procedure, and it fixes the depth of the write-down. The procedural part — a '
            'queue, a timetable, a stay on enforcement — is close to costless and is where '
            'the decade of delay actually comes from. The distributional part, how much '
            'creditors lose, is where Lukas’s premium lives.',
            'So the design feature that changes this is to legislate the procedure and leave '
            'the quantum to negotiation inside it. That removes most of the cost of delay '
            'without announcing in advance how much a creditor forfeits, which is the thing '
            'the premium is priced against. It satisfies Nkechi’s principle and gives Lukas '
            'very little left to charge for.',
        ],
        model_words=301,
    ),

    gram=dict(
        title='Unreal past and the subjunctive',
        headers=['Form', 'What it says'],
        rows=[
            ('if + past perfect, would have + participle', 'third conditional: if they had seen it, it would have been smaller'),
            ('had + subject + participle', 'inverted third conditional: had they seen it'),
            ('were + subject + to', 'formal future unreal: were the firm to consolidate'),
            ('were it not for + noun phrase', 'but for this: were it not for the jurisdictions'),
            ('mixed conditional', 'past condition, present result: if they had reported it, we would now know'),
            ('mandative subjunctive', 'it is essential that the position be reported'),
            ('should + subject + verb', 'formal open condition: should you need the figure'),
        ],
        notes=[
            'An inverted conditional never keeps if: had they seen it, not if had they seen '
            'it. The inversion replaces the conjunction and is one of the most reliable '
            'markers of formal written English.',
            'Were it not for is followed by a noun phrase. Were it not for the pieces sat in '
            'different jurisdictions is wrong; were it not for the fact that they sat in '
            'different jurisdictions is right.',
            'The mandative subjunctive uses the bare verb after essential, vital, '
            'recommended, required: it is essential that the aggregate be reported, not is '
            'reported. British English also allows should: that the aggregate should be '
            'reported.',
        ],
        watch='Do not write "if I would have known". The condition half of a third '
              'conditional takes the past perfect and never would: if I had known. The error '
              'is common in speech and fatal in writing.',
        ex=[
            ('Complete with the correct form.',
             ['If the positions ______ (be) visible, the crisis would have been smaller.',
              '______ anybody been able to add them up, the picture would have been clear.',
              'Were it not for the ______ (fact) that they sat in different jurisdictions, one authority could have acted.',
              'It is essential that the aggregate ______ (report) somewhere.',
              'If they had reported it, we ______ now know the total.',
              '______ you need the figure, I can supply it.'],
             ['had been', 'Had', 'fact', 'be', 'would', 'Should']),
            ('Correct the conditional.',
             ['If I would have known, I would have written.',
              'If had the position been visible, it would have been obvious.',
              'Were it not for the pieces sat in different jurisdictions, one authority could have acted.',
              'It is essential that the aggregate is reported.'],
             ['If I had known, I would have written.',
              'Had the position been visible, it would have been obvious.',
              'Were it not for the fact that the pieces sat in different jurisdictions, one '
              'authority could have acted.',
              'It is essential that the aggregate be reported.']),
            ('Rewrite as an inverted conditional.',
             ['If anybody had added the positions up, the picture would have been obvious.',
              'If the vehicles were consolidated, the exposure would breach the threshold.',
              'If the firm had written in March, nothing would have followed.',
              'If the mechanism had existed, the delay would have been shorter.'],
             ['Had anybody added the positions up, the picture would have been obvious.',
              'Were the vehicles consolidated, the exposure would breach the threshold.',
              'Had the firm written in March, nothing would have followed.',
              'Had the mechanism existed, the delay would have been shorter.']),
        ],
        bas='Two of the ten Build a Sentence items in this unit build an unreal condition, '
            'usually inverted. A tile reading had or were opening the sentence signals the '
            'inversion, and there will be no if tile anywhere in the set.',
    ),

    fault=dict(
        text='If I would have known the aggregate, I would have written in March. If had the '
             'position been visible, the picture would have been obvious. Were it not for the '
             'pieces sat in different jurisdictions, one authority could have acted. It is '
             'essential that the aggregate is reported somewhere. Nobody knows whether did '
             'the board agree.',
        faults=[
            ('If I would have known', 'If I had known',
             'The condition half of a third conditional takes the past perfect and never '
             'would.'),
            ('If had the position been visible', 'Had the position been visible',
             'An inverted conditional replaces if, so keeping both marks the condition '
             'twice.'),
            ('Were it not for the pieces sat in different jurisdictions',
             'Were it not for the fact that the pieces sat in different jurisdictions',
             'Were it not for takes a noun phrase rather than a clause with its own finite '
             'verb.'),
            ('It is essential that the aggregate is reported',
             'It is essential that the aggregate be reported',
             'Essential, vital and required take the bare verb in the subordinate clause.'),
            ('whether did the board agree', 'whether the board agreed',
             'An embedded question keeps statement order and takes no auxiliary.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('to pay off a debt in instalments over time', 'amortise'),
            ('having more assets than liabilities', 'solvency'),
            ('the use of borrowed money to increase a position', 'leverage'),
            ('an asset pledged against a loan', 'collateral'),
            ('failure to make a payment that is due', 'default'),
            ('the date a debt falls due', 'maturity'),
            ('the spread of trouble from one institution to others', 'contagion'),
            ('the amount that could be lost', 'exposure'),
            ('to turn loans into tradable instruments', 'securitise'),
            ('the other side of a contract', 'counterparty'),
            ('public money used to rescue an institution', 'bailout'),
            ('somebody who is owed money', 'creditor'),
        ],
        gram=[
            ('If the positions ______ been visible, it would have been obvious.', 'had'),
            ('______ anybody added them up, the picture would have been clear.', 'Had'),
            ('______ the vehicles consolidated, the limit would be breached.', 'Were'),
            ('It is essential that the aggregate ______ reported.', 'be'),
            ('______ you need the figure, I can supply it.', 'Should'),
            ('Were it not ______ that fact, one authority could have acted.', 'for'),
            ('If they had reported it, we ______ now know the total.', 'would'),
            ('______ the firm to consolidate, the exposure would appear.', 'Were'),
        ],
        mini=[
            ('A bank cannot repay every depositor at once because',
             ('it is insolvent', 'deposits have been lent out',
              'the law forbids it', 'cash is limited by regulation'), 1,
             'The loans become other people’s deposits, and the system relies on withdrawals '
             'being uncorrelated.'),
            ('The crisis spread largely because',
             ('bankers broke the law', 'no institution could see its own total exposure',
              'interest rates rose', 'ratings were secret'), 1,
             'Each step was legal and the information sat in different jurisdictions under '
             'different rules.'),
            ('A state that cannot pay differs from a company in that',
             ('it has no creditors', 'there is no court and no statutory outcome',
              'its debts are smaller', 'it cannot default'), 1,
             'It enters a negotiation whose outcome turns on bargaining power rather than '
             'statute.'),
            ('Which sentence is correct?',
             ('If I would have known, I would have written.',
              'If I had known, I would have written.',
              'If I had have known, I would have written.',
              'Had I would have known, I would have written.'), 1,
             'The condition half takes the past perfect, and would belongs only in the result '
             'half.'),
            ('"In good faith" tells you that the writer regards the conduct as',
             ('unlawful', 'honest, whatever its effect', 'careless', 'concealed'), 1,
             'It separates the absence of bad intent from the question of whether the result '
             'was sound.'),
            ('Refusing to write down an uncollectable claim protects',
             ('the creditor’s money', 'the accounting treatment of the asset',
              'the debtor', 'future lending'), 1,
             'The money is already gone; what is preserved is the asset’s carrying value on '
             'the books.'),
        ],
    ),

    tip='The unreal past is where careful writers are separated from fluent ones. If I would '
        'have known is the single most common error at B2 and it is entirely avoidable: the '
        'condition half never takes would. Learn the inverted forms too — had it been, were '
        'it not for — because they are what an examiner reads as range.',
)


# ---------------------------------------------------------------------------
# The two academic cycles, added by the Volumes 3-6 work.
#
# Unit 37 gains its two academic cycles. Cycle 4 separates insolvency
# from illiquidity, derives a bank exposure to the second from the
# transformation of short borrowing into long lending, and places the
# lender of last resort in the one case it exists for. Cycle 5 objects
# that the distinction is undecidable at the hour a decision is taken,
# shows that central banks replaced the judgement with a published list
# rather than solving it, and then moves to sovereign debt, where the
# absence of any statutory procedure leaves the outcome to a committee
# of creditors and to whoever can afford the longest litigation.
# ---------------------------------------------------------------------------
UNIT['fieldwords'] = [('statutory', 'set out in law, rather than left to agreement'),
 ('bankruptcy', 'the legal procedure for a debtor who cannot pay'),
 ('absence', 'the fact of something not being there'),
 ('insolvency', 'owing more than you own'),
 ('sovereign', 'belonging to a state rather than to a company'),
 ('restructuring', 'an agreed change to the terms of a debt'),
 ('depositor', 'somebody whose money a bank holds'),
 ('withdrawal', 'the taking of money out of an account'),
 ('committee', 'a small group appointed to settle something'),
 ('undecidable', 'impossible to settle with the information available'),
 ('illiquid', 'holding value that cannot be turned into cash quickly'),
 ('safeguard', 'something put in place in advance against a difficulty')]
UNIT['r4'] = {'sub': 'What a bank actually does',
 'title': 'Why a Bank That Owns More Than It Owes Can Still Fail',
 'words': 374,
 'skill': ('Reading a distinction between two things called failure',
           ['Two conditions are defined and they are not the same. A question will test '
            'whether you merged them.',
            'The mechanism in the middle explains why a bank is exposed to one of them. '
            'Follow it.',
            'A question about the lender of last resort wants what it is for.']),
 'paras': ['A bank can be unable to pay and still own more than it owes, and the separation '
           'of those two conditions is the foundation of the subject. Insolvency means that '
           'the value of what is owned falls short of the value of what is owed. Illiquidity '
           'means that the cash cannot be produced on the day it is demanded, whatever the '
           'eventual value of the assets. The two conditions are independent: a bank can be '
           'solvent and illiquid, which is the instructive case, or insolvent and liquid for '
           'a while, which is the hazardous one.',
           'The exposure of a bank to the first condition lies in what it does for a living. '
           'Its liabilities are short, since a depositor may demand the entire balance '
           'without warning, and its assets are long, since a mortgage runs for twenty-five '
           'years and admits of no cancellation on an afternoon. The transformation of short '
           'borrowing into long lending is not a defect of the arrangement but the service '
           'the arrangement provides, and it is what allows a society to finance the '
           'construction of houses and factories out of money its owners may want back next '
           'week. The safeguard against the obvious hazard is statistical. It holds as long '
           'as withdrawals stay within their usual distribution, and its protection is an '
           'average, not a guarantee. It fails the moment every depositor appears at once, '
           'and it fails for a bank whose assets would cover its liabilities three times '
           'over, because the assets are not there in the form of cash and their conversion '
           'into cash cannot be achieved that morning.',
           'The lender of last resort exists for precisely this case and for no other, which '
           'is worth memorising before the rest of the doctrine. A central bank that lends '
           'against good assets to a solvent institution facing a run is not rescuing a '
           'failure; it is supplying the only thing that was absent from the position, which '
           'was the timing. The classical statement of the doctrine is equally clear about '
           'the other case, in which the institution is insolvent and the lending merely '
           'transfers the loss to the public. Everything in the next passage follows from '
           'one difficulty with that clean division, and the difficulty is one of '
           'information.'],
 'guided': [('What does insolvency mean?',
             ('That cash cannot be produced on the day',
              'That what is owned falls short of what is owed',
              'That depositors have withdrawn their money',
              'That assets are long'),
             1,
             'That is the definition the passage gives, and it is a statement about value.'),
            ('What does illiquidity mean?',
             ('That what is owed exceeds what is owned',
              'That the money cannot be produced on the day it is demanded',
              'That the bank has no assets',
              'That depositors are nervous'),
             1,
             'Whatever the eventual value of the assets, as the passage adds.'),
            ('Why are a bank’s liabilities called short?',
             ('They are small',
              'A depositor may demand the whole balance without notice',
              'They are repaid quickly by the bank',
              'They last twenty-five years'),
             1,
             'The absence of notice is what makes them short.')],
 'exam': [('What does the passage say about transforming short borrowing into long lending?',
           ('It is a defect that regulation should remove',
            'It is the service the arrangement provides',
            'It is a recent development',
            'It applies only to mortgages'),
           1,
           'It is what allows a society to finance houses out of money its owners may want '
           'back next week.'),
          ('When does the provision fail?',
           ('When assets lose value',
            'When every depositor arrives at once',
            'When mortgages are called in',
            'When the central bank refuses to lend'),
           1,
           'And it fails even for a bank whose assets would cover its liabilities three '
           'times over.'),
          ('What is the lender of last resort for?',
           ('Rescuing failing banks',
            'Supplying the timing a solvent institution is absent',
            'Buying bad assets',
            'Preventing withdrawals'),
           1,
           'A central bank lending against good assets supplies what was missing, which was '
           'the timing.'),
          ('What does the doctrine say about the insolvent case?',
           ('The same lending applies',
            'The lending merely transfers the loss to the public',
            'The institution should be nationalised',
            'Depositors should be repaid first'),
           1,
           'The classical statement is equally clear about that case.'),
          ('The word run in paragraph 3 refers to',
           ('a fall in asset values',
            'depositors demanding their money at once',
            'a long period of lending',
            'a statutory procedure'),
           1,
           'A run is the simultaneous demand the second paragraph describes.')]}
UNIT['r5'] = {'sub': 'Debt, default and who decides',
 'title': 'A Distinction Nobody Can Make at Three in the Morning',
 'words': 356,
 'skill': ('Reading an objection about when a distinction is available',
           ['The writer accepts the distinction and attacks its availability. Note the '
            'difference.',
            'The second half moves from banks to countries. Hold what changes and what does '
            'not.',
            'A question about the recommendation wants what should be written down in '
            'advance.']),
 'paras': ['The division between an illiquid institution and an insolvent one is correct, '
           'and it is unavailable at the moment a decision has to be taken. Solvency is a '
           'statement about the value of assets. The value of an asset in a crisis is '
           'whatever somebody will pay for it that fortnight, and in the week of a run '
           'nobody is buying. The official who must decide at three in the morning whether '
           'an institution is illiquid or insolvent is being asked a question that is '
           'undecidable with the information in the room. The candid position is that the '
           'distinction does its work afterwards, in the account of what happened, rather '
           'than during.',
           'The response of the central banks has not been a solution to the problem but a '
           'replacement of the judgement by a rule. Lending is made against a published '
           'schedule of acceptable assets at a published discount. The question at three in '
           'the morning therefore becomes whether the paper on the table appears on the '
           'schedule, which is a question with an answer. The substitution is an improvement '
           'and it is not a solution, since the schedule was written in calm conditions by '
           'people estimating what would hold its value in conditions they were not in and '
           'could not easily imagine.',
           'For a country the same difficulty arrives without any of the machinery. A '
           'company that cannot pay enters a statutory procedure in which a court imposes an '
           'outcome on creditors who would individually prefer otherwise, and the absence of '
           'any equivalent for a sovereign borrower is the central fact about this whole '
           'half of the subject. What takes its place is a committee of creditors, a '
           'restructuring agreed under the threat of years of litigation, and an outcome '
           'that depends on who holds the debt rather than on what the debtor can pay. '
           'Proposals for a statutory procedure have been made repeatedly since the nineteen '
           'seventies and have failed every time, for a reason worth stating plainly and '
           'seldom stated at all: the governments that would have to legislate are the '
           'governments whose own lenders would lose the power the absence gives them.'],
 'guided': [('What does the writer say about the division between illiquid and insolvent?',
             ('It is mistaken',
              'It is correct and unavailable when a decision must be taken',
              'It applies only to countries',
              'It was abandoned in the seventies'),
             1,
             'The objection is about availability rather than truth.'),
            ('Why is the value of an asset in a crisis hard to establish?',
             ('It changes by the hour',
              'It is whatever somebody will pay that week, and nobody is buying',
              'It is set by the central bank',
              'It is not published'),
             1,
             'That is why solvency cannot be assessed during a run.'),
            ('When does the writer say the distinction does its work?',
             ('During the decision',
              'Afterwards, in the account of what happened',
              'Only for companies',
              'Never'),
             1,
             'The honest position is that it is a tool for the record rather than for the '
             'night.')],
 'exam': [('How have central banks responded?',
           ('By solving the problem',
            'By replacing the judgement with a published schedule',
            'By refusing to lend in a crisis',
            'By lending without security'),
           1,
           'Lending against a published list at a published discount.'),
          ('Why is the substitution not a solution?',
           ('The list is secret',
            'The list was written in calm conditions by people estimating conditions they '
            'were not in',
            'The discount is too small',
            'Banks do not accept it'),
           1,
           'The writer calls it an improvement and refuses to call it a solution.'),
          ('What does a statutory procedure do for a company?',
           ('Protects its depositors',
            'Lets a court impose an outcome on creditors who would prefer something else',
            'Values its assets',
            'Provides emergency lending'),
           1,
           'The imposition on unwilling creditors is the point of the procedure.'),
          ('What happens instead for a sovereign borrower?',
           ('A court procedure in the lending country',
            'A creditors’ committee and a restructuring agreed under the threat of '
            'litigation',
            'An automatic reduction of the debt',
            'A loan from the central bank'),
           1,
           'And the outcome depends on who holds the debt.'),
          ('Why does the writer say the proposals have failed?',
           ('They were badly drafted',
            'The governments that would legislate are those whose lenders would lose power',
            'Countries do not want them',
            'Courts refused to act'),
           1,
           'That is the reason the writer says is worth stating plainly.')]}
UNIT['l4'] = {'sub': 'What a bank actually does',
 'caption': 'A lecture on two kinds of failure and one kind of rescue',
 'board': ['Insolvent: owes more than it owns',
           'Illiquid: cannot pay today',
           'Short liabilities, long assets',
           'Last resort: supplies the timing'],
 'skill': ('A lecture built on one distinction',
           ['Two definitions, then the mechanism that makes one of them possible.',
            'The lecturer insists the arrangement is not a flaw. Note why.',
            'A question about the examination wants the error he expects.']),
 'warm': [('Woman: What is illiquidity?',
           ('Not being able to pay today.',
            'Owing more than you own.',
            'Yes, it happens.',
            'A run.'),
           0,
           'Illiquidity is about timing and insolvency is about value.'),
          ('Woman: Is maturity transformation a flaw?',
           ('No, it is the service.',
            'Yes, it should be removed.',
            'Yes, it is a flaw.',
            'Twenty-five years.'),
           0,
           'He is emphatic that it is what the arrangement is for.'),
          ('Woman: What error does he expect?',
           ('Treating the two failures as one.',
            'Forgetting the definitions.',
            'Yes, an error.',
            'In the examination.'),
           0,
           'Merging illiquidity and insolvency is the mistake he warns about.')],
 'script': [('Man',
             'Two words, and if you leave here able to keep them apart you have had your '
             'money from this lecture. Insolvent: you owe more than you own. Illiquid: you '
             'cannot produce the cash today, whatever you own. They are independent. A bank '
             'can be perfectly solvent and completely illiquid, and that is the case worth '
             'understanding. Why is a bank exposed to it? Because of what a bank is. Its '
             'liabilities are short. A depositor can ask for the lot this afternoon with no '
             'notice at all. Its assets are long. A mortgage has twenty-five years to run '
             'and you cannot call it in over lunch. Now, everybody’s first instinct is that '
             'this is a design fault and somebody should fix it. It is not a fault. It is '
             'the entire service. It is how a country builds houses and factories with money '
             'that its owners may want back next week, and if you removed it you would have '
             'removed the bank. What you get in exchange is that the arrangement works '
             'beautifully while withdrawals look normal and collapses the instant they all '
             'arrive together, and it collapses for an institution whose assets would cover '
             'its debts three times over, because the assets are not cash and cannot be made '
             'into cash by Thursday. Hence the lender of last resort, which exists for that '
             'case and no other: lend against good paper, to a solvent institution, and all '
             'you have supplied is the timing. In the examination, the error I expect is the '
             'one I have just spent an hour on. Do not merge them, and do not write '
             'insolvent when what you mean is out of cash.')],
 'items': [('What does the lecturer say the two words are?',
            ('Liquidity and leverage',
             'Insolvent and illiquid',
             'Deposit and mortgage',
             'Solvency and timing'),
            1,
            'He defines both in the first minute and spends the hour keeping them apart.'),
           ('Why can a depositor make a bank’s liabilities short?',
            ('Deposits are small',
             'A depositor can ask for the whole balance with no notice',
             'Deposits pay no interest',
             'Deposits are guaranteed'),
            1,
            'The absence of notice is what makes a liability short.'),
           ('What does he say about everybody’s first instinct?',
            ('It is correct',
             'It treats the arrangement as a design fault, and it is not one',
             'It underestimates the risk',
             'It confuses the two words'),
            1,
            'He calls the arrangement the entire service rather than a fault.'),
           ('What happens if you removed maturity transformation?',
            ('Banks would be safer',
             'You would have removed the bank',
             'Mortgages would shorten',
             'Deposits would rise'),
            1,
            'That is his answer to the instinct that it should be fixed.'),
           ('What error does he expect in the examination?',
            ('Confusing assets with liabilities',
             'Merging illiquidity and insolvency',
             'Forgetting the lender of last resort',
             'Misdefining a run'),
            1,
            'He ends with the instruction not to merge them.')]}
UNIT['l5'] = {'sub': 'Debt, default and who decides',
 'caption': 'A short talk on a judgement nobody can make in time',
 'board': ['Solvency: a view about value',
           'In a run, nobody is buying',
           'So: a published list instead',
           'For a country: no list at all'],
 'skill': ('A talk about the limits of a rule in practice',
           ['The speaker accepts the previous lecture and asks when its distinction can be '
            'used.',
            'A substitution is described, and she says why it is not a solution.',
            'A question about countries wants what is missing rather than what exists.']),
 'warm': [('Man: Can the distinction be made in the night?',
           ('No, not with what is in the room.',
            'Yes, easily.',
            'Yes, it can.',
            'At three in the morning.'),
           0,
           'She calls the question undecidable with the information available.'),
          ('Man: What did central banks do instead?',
           ('They published a list of acceptable assets.',
            'They stopped lending.',
            'Yes, they did something.',
            'A discount.'),
           0,
           'The rule replaces the judgement, which is her central point.'),
          ('Man: What do countries lack?',
           ('Any statutory procedure.',
            'A central bank.',
            'Yes, they lack something.',
            'Creditors.'),
           0,
           'The absence of a procedure is the fact she builds the second half on.')],
 'script': [('Woman',
             'Everything in the last lecture is right, and I want to ask when you are '
             'allowed to use it. Solvency is a claim about what the assets are worth. What '
             'an asset is worth in a crisis is whatever somebody will pay for it that week. '
             'In the week of a run, nobody is buying. So the official sitting at three in '
             'the morning, deciding whether this institution is illiquid or insolvent, has '
             'been handed a question that cannot be answered with anything in the room, and '
             'the honest thing to say is that the distinction is a tool for the inquiry '
             'afterwards and not for the night itself. What have central banks done about '
             'it? Not solved it. Replaced it. There is a published list of what they will '
             'lend against and a published discount, so the three o’clock question becomes '
             'whether the paper on the table is on the list, and that has an answer. Better, '
             'certainly. A solution, no, because the list was drawn up by calm people '
             'guessing what would hold its value in conditions they were not sitting in. Now '
             'take a country. Same difficulty, none of the machinery. A company that cannot '
             'pay goes into a statutory procedure and a court makes the creditors accept an '
             'outcome they dislike. For a sovereign there is nothing of the kind, so what '
             'you get is a committee, a restructuring signed under the threat of ten years '
             'of lawyers, and a result that depends on who owns the debt, and on which of '
             'them can afford the longest court case. I would like at least one person in '
             'this room to spend a career on that.')],
 'items': [('What question does the speaker ask about the last lecture?',
            ('Whether it is correct',
             'When its distinction is allowed to be used',
             'Whether banks accept it',
             'Who first stated it'),
            1,
            'She grants that it is right and asks about its availability.'),
           ('Why can the question not be answered in the night?',
            ('The official is inexperienced',
             'What an asset is worth is what somebody will pay, and nobody is buying',
             'The records are incomplete',
             'The central bank is closed'),
            1,
            'That chain is the whole of her argument on this point.'),
           ('What have central banks done about it?',
            ('Solved it', 'Replaced it with a rule', 'Ignored it', 'Handed it to the courts'),
            1,
            'She says plainly: not solved it, replaced it.'),
           ('Why is the published list not a solution?',
            ('It is too short',
             'It was drawn up by calm people guessing about conditions they were not in',
             'It changes too often',
             'Banks dispute it'),
            1,
            'She calls it better, certainly, and not a solution.'),
           ('What does a sovereign borrower get instead of a court?',
            ('A central bank loan',
             'A committee, a restructuring under threat of litigation, and a result '
             'depending on who owns the debt',
             'An automatic write-off',
             'A statutory procedure in the lending country'),
            1,
            'Those three are what she says fills the absence.')]}
UNIT['w4'] = {'sub': 'What a bank actually does',
 'skill': ('Unreal past and the subjunctive: were, had, should it',
           ['Were rather than was marks an unreal condition: if the list were written during '
            'a crisis, it would look different.',
            'Had plus the participle gives an unreal past: had the lending been refused, the '
            'bank would have closed.',
            'Should it plus the base form is a formal conditional: Should a run begin, the '
            'safeguard fails.']),
 'guided': [('You want an unreal present condition.',
             ['if',
              'the list',
              'were',
              'written',
              'during',
              'a crisis',
              'it',
              'would',
              'look',
              'very',
              'different'],
             'If the list were written during a crisis, it would look very different.'),
            ('You want an unreal past condition.',
             ['had',
              'the lending',
              'been',
              'refused',
              'the bank',
              'would',
              'have',
              'closed',
              'that',
              'morning'],
             'Had the lending been refused, the bank would have closed that morning.'),
            ('You want a formal conditional about a run.',
             ['should',
              'a run',
              'begin',
              'the safeguard',
              'fails',
              'however',
              'sound',
              'the',
              'assets',
              'are'],
             'Should a run begin, the safeguard fails, however sound the assets are.')],
 'exam': [('You want an unreal condition about a statutory procedure.',
           ['if',
            'a statutory',
            'procedure',
            'existed',
            'a court',
            'would',
            'impose',
            'the outcome',
            'on',
            'the creditors'],
           'If a statutory procedure existed, a court would impose the outcome on the '
           'creditors.'),
          ('You want an unreal past about the decision.',
           ['had',
            'the official',
            'known',
            'the asset',
            'values',
            'the',
            'decision',
            'would',
            'have',
            'been',
            'simple'],
           'Had the official known the asset values, the decision would have been simple.'),
          ('You want a formal conditional with should.',
           ['should',
            'the discount',
            'prove',
            'too',
            'small',
            'the loss',
            'passes',
            'to',
            'the public'],
           'Should the discount prove too small, the loss passes to the public.'),
          ('You want a wish about the absence.',
           ['many',
            'economists',
            'wish',
            'that',
            'a sovereign',
            'procedure',
            'were',
            'available',
            'in',
            'law'],
           'Many economists wish that a sovereign procedure were available in law.'),
          ('You want an unreal condition with a negative.',
           ['were',
            'the assets',
            'not',
            'illiquid',
            'the run',
            'would',
            'have',
            'done',
            'no',
            'damage'],
           'Were the assets not illiquid, the run would have done no damage.')]}
UNIT['w5'] = {'sub': 'Debt, default and who decides',
 'prof': 'Dr Marchetti',
 'question': 'Should there be a statutory bankruptcy procedure for countries, in which a '
             'court could impose a restructuring on unwilling creditors? Supporters say the '
             'present system rewards whoever is most willing to litigate. Opponents say a '
             'country that could be forced to restructure would find borrowing dearer for '
             'ever.',
 'posts': [('Soraya',
            'w',
            'Yes. The present arrangement settles the question by who owns the debt and who '
            'can afford the longest court case, which is not a principle anybody would '
            'defend if they had to say it out loud.'),
           ('Johan',
            'm',
            'The borrowing cost objection is not a detail. A poor country pays for that risk '
            'every year in interest, and it pays whether or not it ever reaches the '
            'procedure.')],
 'skill': ('A question where a remedy has a standing price',
           ['Soraya argues from how the present outcome is determined; Johan from what a '
            'remedy would cost borrowers in advance.',
            'The second passage gives a reason the proposals have failed that is about '
            'neither of their arguments.',
            'A strong answer prices Johan’s objection rather than brushing it aside.']),
 'starters': ['Johan is right that…, although the comparison he needs is…',
              'The distinction worth drawing is between… and…',
              'What the passage adds to both arguments is…',
              'So the procedure is worth having if…'],
 'model': ['Johan is right that the cost is permanent and he is comparing the procedure with '
           'a world that does not exist. A lender today already prices the risk of a '
           'restructuring, because restructurings happen; what the lender does not price is '
           'a fast and predictable one, and the premium attached to ten years of uncertain '
           'litigation is not obviously smaller than the premium attached to a court that '
           'acts in eighteen months.',
           'Soraya is right about how the present question is settled and she treats the '
           'reform as blocked by bad arguments. The passage says otherwise, and more '
           'usefully: the governments that would have to legislate are the governments whose '
           'own lenders hold the power that the absence of a procedure creates. That is not '
           'a view to be answered. It is an interest, and it explains fifty years of failure '
           'better than either of their positions does.',
           'So the procedure is worth having if it is fast, predictable and narrow, because '
           'those three are what convert Johan’s permanent premium into a smaller one rather '
           'than a larger one. What has to be given up is the hope that it will be enacted '
           'by agreement among the lending states, which is where every attempt since the '
           'nineteen seventies has died. The route that remains is unattractive and real: '
           'the terms written into the bonds themselves, one issue at a time, until the '
           'practice is standard and the statute is merely a record of it, which is how a '
           'great deal of commercial law arrived in the first place.'],
 'model_words': 258}
UNIT['sp'] = list(UNIT['sp']) + [{'sub': 'What a bank actually does',
  'focus': 'keeping two words apart',
  'skill': ('Insolvent is about value. Illiquid is about timing.',
            ['Define each one in a short sentence of its own. A single sentence with both '
             'tends to merge them.',
             'Stress the contrasting noun: value, timing.',
             'Then say explicitly that they are independent.']),
  'repeat': ['The two are independent.',
             'Illiquid means you cannot pay today.',
             'Insolvent means you owe more than you own.',
             'Maturity transformation is the service, not the fault.',
             'Its liabilities are short and its assets are long.',
             'The lender of last resort supplies the timing and nothing else.',
             'A run destroys a bank whose assets are three times its debts.'],
  'theme': 'two things that are easily confused',
  'qs': ['Tell me about two ideas people around you tend to confuse. What is the difference?',
         'Some people think a business that cannot pay its bills must be badly run. How far '
         'would you agree?',
         'How would you explain to a friend why a bank cannot simply keep everybody’s money '
         'in a safe?',
         'Finally, describe a time you could not pay for something you could easily afford.'],
  'model': [(2,
             'Not necessarily, and this unit gives the reason. A business can be worth far '
             'more than it owes and still be unable to produce cash on a particular Tuesday, '
             'and those are different failures.'),
            (3,
             'I would say that if the money sat in a safe, nobody could borrow it, so there '
             'would be no houses and no factories built with it. The usefulness and the '
             'fragility are the same arrangement.')],
  'selfcheck': ['I defined each term in its own sentence',
                'I stressed value against timing',
                'I used at least two of the unit’s field words']},
 {'sub': 'Debt, default and who decides',
  'focus': 'saying that a correct distinction cannot be used in time',
  'skill': ('The distinction is right, and it is not available tonight',
            ['Grant the distinction in full. Any hedging makes it sound as though you '
             'dispute it.',
             'Then say when it becomes usable, which is the real claim.',
             'Keep the time words stressed: tonight, afterwards, that week.']),
  'repeat': ['The distinction is correct.',
             'It is not available in the night.',
             'They did not solve it. They replaced it.',
             'The list was drawn up by calm people.',
             'In the week of a run, nobody is buying.',
             'An asset is worth what somebody will pay that week.',
             'A tool for the inquiry afterwards is not a tool for three in the morning.'],
  'theme': 'knowing something that does not help in time',
  'qs': ['Tell me about a rule that was correct and useless when you needed it. What '
         'happened?',
         'Some people say a decision should always wait for better information. What do you '
         'think?',
         'How should somebody decide when the information they need does not exist?',
         'Finally, describe a judgement that only looked obvious afterwards.'],
  'model': [(2,
             'I think that advice assumes the information will arrive, and often the point '
             'of the situation is that it will not. Then waiting is itself the decision, and '
             'usually the worst one.'),
            (3,
             'I would replace the judgement with a rule written in advance, the way the '
             'central banks did, and accept that the rule will be wrong sometimes, because '
             'at least it can be applied at three in the morning.')],
  'selfcheck': ['I granted the distinction without hedging',
                'I said when it becomes usable',
                'I stressed the time words']}]
