# -*- coding: utf-8 -*-
"""Unit 15 · Business and Entrepreneurship — anchor unit for reported questions."""

UNIT = dict(
    n=15, vol=2, title='Business and Entrepreneurship',
    icons=('coin', 'people', 'chart'),
    subs=('What a small business needs', 'A start-up competition', 'What failure teaches'),
    grammar='Reported speech · reported and indirect questions',
    field='capital, risk, growth',
    opener_line='The third anchor unit. Unit 1 taught direct questions and Unit 6 embedded '
                'ones; this unit does the reported form, which is the third shape Build a '
                'Sentence uses.',

    candos=[
        'complete word endings in a text about starting something',
        'read a competition page and a confirmation email for the conditions',
        'follow a passage that explains why a common belief is only half true',
        'understand two people rehearsing and disagreeing about numbers',
        'report what somebody else said, out loud, without preparing',
        'write an email asking to change a slot, and a post that separates two claims',
    ],

    acad=[
        ('corporate', 'connected with a large company'),
        ('commission', 'to order work to be done; a payment for selling'),
        ('consent', 'permission, or to give permission'),
        ('undertake', 'to agree to do something'),
        ('strategy', 'a plan for achieving something over time'),
        ('target', 'a result you aim at'),
        ('pursue', 'to follow or try to achieve'),
        ('attain', 'to reach or achieve'),
        ('achieve', 'to succeed in doing something'),
        ('acquire', 'to get or buy'),
        ('prospect', 'the possibility of something happening'),
        ('potential', 'possible in the future'),
        ('project', 'a planned piece of work'),
        ('partner', 'a person who shares a business with you'),
        ('mediate', 'to help two sides reach agreement'),
        ('guarantee', 'a firm promise that something will happen'),
        ('initiate', 'to start something'),
        ('commence', 'to begin'),
        ('debate', 'a formal discussion of opposing views'),
        ('challenge', 'something difficult that tests you'),
        ('conflict', 'a serious disagreement'),
        ('compile', 'to put together from several sources'),
        ('team', 'a group working together'),
        ('panel', 'a group of people who judge or discuss'),
    ],
    campus=[
        ('pitch', 'a short talk persuading someone to back an idea'),
        ('start-up', 'a new and small company'),
        ('competition', 'an event where entrants are judged'),
        ('slide', 'one screen of a presentation'),
        ('judge', 'a person who decides a result'),
        ('prize', 'something given to a winner'),
        ('stall', 'a small open stand at an event'),
        ('customer', 'a person who buys something'),
        ('profit', 'money left after costs are paid'),
        ('loan', 'money borrowed that must be repaid'),
        ('business plan', 'a written description of how a business will work'),
        ('networking', 'meeting people who may be useful professionally'),
    ],
    vocab_talk=[
        'What challenge would you face if you started a business tomorrow?',
        'Name a company you admire. What strategy do you think it is pursuing?',
        'Would you prefer a guaranteed small income or a potential large one? Why?',
        'Who would you choose as a business partner, and what would they bring?',
    ],
    again=['economy', 'invest', 'revenue', 'margin', 'incentive', 'significant', 'estimate', 'evaluate'],

    r1=dict(
        sub='What a small business needs',
        skill=('Business texts repeat a small set of endings',
               ['-ment, -ity, -ance and -ers cover most of the nouns in this field.',
                'A gap after a number or a quantity word is almost always plural.',
                'Count the dashes before choosing between -ment and -ation.',
                'Read it back; this writing repeats its key words deliberately.']),
        guided_text='Most people think a new business needs an idea. It needs an idea l---, and '
                    'then it needs three duller things: enough money to survive the first year, '
                    'at least one person who will actually b--, and a way of being paid that '
                    'does not depend on anybody’s good--- will. Businesses rarely f--- because '
                    'the idea was w----.',
        guided_hint='1  l---  →  ast  (last)',
        guided=['ast', 'uy', 'ill', 'ail', 'rong'],
        exam_text='Ask a hundred people why small businesses f---, and most will say the idea '
                  'was bad. The record says someth--- duller. The commonest cause is running out '
                  'of cash while still profit----, which sounds impossible and happens '
                  'const----- . You sell something in March, you p-- your supplier in April, and '
                  'your customer pays you in June. On paper you made a profit. In May you cannot '
                  'pay the rent. The second commonest cause is gro---- too quickly: every new '
                  'customer costs money before they bring any in, so a business that doubles its '
                  'orders can double its way into fail---. Neither of these is a failure of '
                  'imagin-----. Both are failures of ti----, and timing is the part that nobody '
                  'finds interest--- until it is happening to them.',
        exam=['ail', 'ing', 'able', 'antly', 'ay', 'wing', 'ure', 'ation', 'ming', 'ing'],
    ),

    r2=dict(
        sub='A start-up competition',
        skill=('Judge the conditions, not the prize',
               ['Competition pages advertise the prize and bury the conditions. The conditions '
                'are tested.',
                'Eligibility, deadlines and what happens to your idea are the three usual '
                'questions.',
                'A confirmation email adds a time, a place and a length.',
                'If a rule has an exception, note who it applies to.']),
        docs=[
            ('notice', 'Northgate Venture Prize · open to all current students', [
                '# The prize',
                '* £5,000, plus a year of free workspace in the Enterprise Centre.',
                '* No equity is taken. The idea remains entirely yours.',
                '# Entering',
                '* A one-page summary by 20 January. No business plan at this stage.',
                '* Teams of up to four. At least half the team must be current students.',
                '* You may enter the same idea in other competitions.',
                '# The final',
                '* Twelve teams are shortlisted and pitch on 6 March.',
                '* Five minutes each, then five minutes of questions from the panel.',
                '* Slides are optional. Several winners have used none at all.',
            ], 'web'),
            ('email', 'team.loop@northgate.edu', 'venture@northgate.edu',
             '12/02/2027', 'Shortlisted — pitch slot, Friday 6 March', [
                 'Dear Loop team,',
                 '',
                 'You have been shortlisted. Your pitch is at 14.20 on Friday 6 March in',
                 'the Enterprise Centre, and you should arrive by 14.00.',
                 '',
                 'Five minutes, strictly timed. At five minutes you will be stopped',
                 'mid-sentence; this is not a threat but a warning, because every year',
                 'somebody puts their most important slide last and never reaches it.',
                 '',
                 'If you are using slides, send the file by Wednesday 4 March. Nothing',
                 'can be connected on the day.',
                 '',
                 'The judges have your one-page summary. Do not spend your five minutes',
                 'repeating it.',
                 '',
                 'Northgate Venture Prize',
             ]),
        ],
        guided=[
            ('What is the prize?',
             ('£5,000 only', '£5,000 and a year of workspace', 'A year of workspace only',
              'A business loan'), 1,
             'Both parts are listed under The prize.'),
            ('What does the competition take in return?',
             ('A share of the company', 'Nothing — the idea remains yours',
              'The first year’s profit', 'The right to publish the plan'), 1,
             'No equity is taken — the notice says the idea remains entirely yours.'),
            ('What must be submitted by 20 January?',
             ('A full business plan', 'A one-page summary', 'Slides', 'A team list'), 1,
             'And the notice adds no business plan at this stage.'),
            ('How large may a team be?',
             ('Two', 'Three', 'Four', 'There is no limit'), 2,
             'Teams of up to four, at least half of them current students.'),
        ],
        exam=[
            ('How long is each pitch?',
             ('Three minutes', 'Five minutes', 'Ten minutes', 'Five minutes plus slides'), 1,
             'Five minutes each, then five minutes of questions — the questions are separate.'),
            ('Why does the email warn about the time limit?',
             ('The room is booked', 'Teams put their key slide last and never reach it',
              'The judges leave at three', 'Other teams are waiting'), 1,
             'This is not a threat but a warning, and the reason follows.'),
            ('When must slides be sent?',
             ('On the day', 'Wednesday 4 March', 'Friday 6 March', '20 January'), 1,
             'Nothing can be connected on the day.'),
            ('What does the email tell the team not to do?',
             ('Use slides', 'Arrive early', 'Repeat the one-page summary',
              'Answer questions'), 2,
             'The judges have it already.'),
            ('What can be inferred about slides?',
             ('They are required', 'They are not necessary to win',
              'They must be sent on the day', 'They count towards the five minutes'), 1,
             'Slides are optional, and several winners have used none at all.'),
            ('A team of four with one current student would be',
             ('eligible', 'ineligible', 'eligible with permission',
              'placed in a separate category'), 1,
             'At least half the team must be current students, so four needs two.'),
        ],
    ),

    r3=dict(
        sub='What failure teaches',
        title='What a Failed Business Actually Teaches',
        words=280,
        paras=[
            'It is now almost compulsory to say that failure is valuable. Founders describe '
            'failed companies as an education, and investors say they prefer a founder who has '
            'failed once. There is something in this, but it is repeated so widely and so '
            'uncritically that it is worth asking what the evidence shows.',
            'It shows something narrower than the slogan. Founders whose first company failed do '
            'better the second time than first-time founders, but by a smaller margin than '
            'people assume, and much of the difference disappears when you account for the fact '
            'that people who start a second company are not a random sample of those who '
            'started a first. More interesting is which failures help. Failing because the '
            'market did not want the product appears to teach a great deal. Failing because the '
            'founders ran out of cash, or fell out with each other, teaches far less, and those '
            'two causes together account for most failures.',
            'There is a plausible explanation. A market failure produces information: you now '
            'know something specific about what customers will not buy, and that knowledge '
            'transfers. Running out of cash produces no information at all, only a memory of '
            'fear, and fear is a poor teacher because it changes behaviour without explaining '
            'why. The useful version of the slogan is therefore much less comfortable than the '
            'usual one. Failure teaches you something if, and only if, it tells you something '
            'you did not already know.',
        ],
        skill=('Test a slogan against evidence',
               ['A passage that quotes a popular saying will usually qualify it. Find the '
                'qualification.',
                'Watch for narrower, smaller than people assume, in part — they mark the real '
                'claim.',
                'When a passage divides a category into two kinds, the division is tested.',
                'The last sentence usually rewrites the slogan correctly.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why most businesses fail', 'Whether failure really teaches, and when',
              'How investors choose founders', 'Why founders fall out'), 1,
             'The slogan is introduced, tested and rewritten.'),
            ('According to paragraph 2, founders who failed once do',
             ('worse the second time', 'better, but by a smaller margin than assumed',
              'exactly the same', 'better only with investment'), 1,
             'And much of that difference disappears under closer analysis.'),
            ('Why does the author mention that second-time founders are not a random sample?',
             ('To praise them', 'To explain part of the measured advantage',
              'To criticise the research', 'To describe how surveys work'), 1,
             'People who start again differ from those who do not, so some of the advantage is '
             'selection.'),
            ('Which kind of failure teaches most?',
             ('Running out of cash', 'Falling out with partners',
              'The market not wanting the product', 'Growing too fast'), 2,
             'It appears to teach a great deal; the other two teach far less.'),
        ],
        exam=[
            ('What do the two least instructive causes have in common?',
             ('They are rare', 'Together they account for most failures',
              'They happen late', 'They involve investors'), 1,
             'Which is what makes the finding uncomfortable.'),
            ('Why does a market failure teach?',
             ('It is more dramatic', 'It produces transferable information',
              'It happens more slowly', 'It attracts investors'), 1,
             'You now know something specific about what customers will not buy.'),
            ('What does running out of cash produce, according to the author?',
             ('A useful warning', 'No information, only fear', 'A better strategy',
              'A smaller company'), 1,
             'And fear changes behaviour without explaining why.'),
            ('All of the following are stated about the slogan EXCEPT:',
             ('It is repeated widely', 'There is something in it',
              'It is uncritical in its usual form', 'It is entirely false'), 3,
             'The author says there is something in this and then narrows it, rather than '
             'rejecting it.'),
            ('The word "transfers" in paragraph 3 is closest in meaning to',
             ('moves to another situation', 'disappears', 'is written down',
              'is sold'), 0,
             'The knowledge is useful in the next company, which is what makes it valuable.'),
            ('What is the author’s rewritten version of the slogan?',
             ('Failure always teaches', 'Failure teaches only if it tells you something new',
              'Failure teaches investors', 'Failure should be avoided'), 1,
             'If, and only if, it tells you something you did not already know.'),
            ('Which best states the main idea of paragraph 3?',
             ('Fear is a poor teacher because it carries no information',
              'Cash problems are common', 'Customers are unpredictable',
              'Investors prefer experienced founders'), 0,
             'The information/fear contrast is the explanation the whole paragraph offers.'),
        ],
    ),

    l1=dict(
        sub='A start-up competition',
        caption='Two students rehearse a pitch',
        skill=('Track a disagreement about a number',
               ['When two speakers argue about a figure, both figures will be tested.',
                'Listen for where each number came from — that is usually the real question.',
                'A concession in the middle often marks the turning point.',
                'What they decide to change is the last question.']),
        warm=[
            ('Man: How long have we got?',
             ('Five minutes.', 'At twenty past two.', 'Twelve teams.',
              'Yes, quite long.'), 0,
             'How long wants a duration, not a time of day.'),
            ('Woman: Are slides compulsory?',
             ('By Wednesday.', 'No — several winners used none.',
              'In the Enterprise Centre.', 'Yes, send the file.'), 1,
             'A yes/no question about a requirement, answered and supported.'),
            ('Man: Shall I take the first two minutes?',
             ('It is five minutes.', 'Yes, and I will do the numbers.',
              'In the final.', 'No, they are optional.'), 1,
             'A shall-I offer is accepted and divided up.'),
        ],
        script=[
            ('Woman', 'Right. Five minutes. Go.'),
            ('Man', 'We think there are about forty thousand students in this city who—'),
            ('Woman', 'Stop. Where did forty thousand come from?'),
            ('Man', 'It is roughly the number of students.'),
            ('Woman', 'It is the number of students at all three institutions, including part '
                      'time and distance. Our product needs somebody physically on a campus '
                      'three days a week. That is not forty thousand.'),
            ('Man', 'It is a reasonable estimate.'),
            ('Woman', 'It is a reasonable estimate of a different thing. And the first question '
                      'the panel asks is always where the number came from. If the answer is a '
                      'bit vague, nothing you say afterwards is believed.'),
            ('Man', 'So what do we say?'),
            ('Woman', 'Say the smaller number and say how you got it. Eleven thousand '
                      'full-time undergraduates on this campus. It is a quarter of the size and '
                      'four times as convincing.'),
            ('Man', 'That does make the market look small.'),
            ('Woman', 'It makes it look real. Nobody has ever won this thing with a big number '
                      'and a shrug.'),
        ],
        items=[
            ('What are the speakers doing?',
             ('Writing a business plan', 'Rehearsing a pitch', 'Choosing a team',
              'Preparing slides'), 1,
             'The woman times him and stops him mid-sentence.'),
            ('Why does the woman object to forty thousand?',
             ('It is too small', 'It counts people the product cannot serve',
              'It is out of date', 'The panel already knows it'), 1,
             'It includes part-time and distance students, and the product needs people on '
             'campus.'),
            ('What does the woman say the panel always asks first?',
             ('How much money is needed', 'Where the number came from',
              'Who is on the team', 'How long it will take'), 1,
             'And she explains the consequence of a vague answer.'),
            ('What number does she recommend?',
             ('Forty thousand', 'Eleven thousand', 'Four thousand', 'None at all'), 1,
             'Eleven thousand full-time undergraduates on this campus.'),
            ('What does the man object to about the smaller number?',
             ('It is harder to remember', 'It makes the market look small',
              'It is not accurate', 'The panel will not believe it'), 1,
             'And the woman answers that it makes it look real.'),
            ('What does the woman mean by "a big number and a shrug"?',
             ('A large market with no evidence behind it', 'A confident presentation',
              'A team that disagrees', 'A pitch without slides'), 0,
             'The shrug is the vague answer to where the number came from.'),
        ],
    ),

    l2=dict(
        sub='A start-up competition',
        caption='A briefing about pitch day',
        poster=['Five minutes, strictly timed',
                'Slides by Wednesday or not at all',
                'Judges have read your summary'],
        skill=('Note what is strict and what is optional',
               ['Briefings mix firm rules with advice. Only the rules are tested as rules.',
                'Listen for strictly, must, cannot — and for optional, if you wish.',
                'A common mistake described by the speaker is a guaranteed question.',
                'The final instruction usually answers what should I do.']),
        warm=[
            ('Woman: What time should we arrive?',
             ('Twenty past two.', 'Twenty minutes before your slot.',
              'In the Enterprise Centre.', 'Yes, early.'), 1,
             'What time should we arrive wants the arrival rule, not the slot time.'),
            ('Man: Can we connect a laptop on the day?',
             ('By Wednesday.', 'No — nothing can be connected.',
              'Slides are optional.', 'Yes, if it works.'), 1,
             'A can-we question about permission, refused with the rule.'),
            ('Woman: Do the questions count in the five minutes?',
             ('Five minutes each.', 'No, they are separate.', 'The panel asks them.',
              'Yes, strictly.'), 1,
             'A do-they-count question about timing, answered directly.'),
        ],
        script=[
            ('Man', 'Pitch day, Friday the sixth. Twelve teams, each with five minutes, and then '
                    'five minutes of questions from the panel, which are separate and not part '
                    'of your five. The timing is strict and I want to explain why rather than '
                    'just assert it. Every year at least one team is stopped mid-sentence with '
                    'their most important point still coming, because they built the pitch like '
                    'an essay, with the conclusion at the end. Do not do that. Say what you are '
                    'building and who will pay for it in the first forty seconds, and use the '
                    'rest to support it. Slides. They are optional, and several past winners '
                    'used none. If you want them, the file must arrive by Wednesday the fourth — '
                    'nothing can be connected on the day, no exceptions, including adapters you '
                    'have brought yourself. Arrive twenty minutes before your slot, not five, '
                    'because the schedule runs early as often as it runs late. And one last '
                    'thing: the judges have read your one-page summary. Repeating it is the '
                    'commonest way to waste the only five minutes you get.'),
        ],
        items=[
            ('How long do teams have in total with the panel?',
             ('Five minutes', 'Ten minutes', 'Fifteen minutes', 'Twenty minutes'), 1,
             'Five to pitch and five of questions, which are separate.'),
            ('Why is the timing strict?',
             ('There are twelve teams', 'Teams leave their key point until the end',
              'The room is booked until four', 'The judges have other work'), 1,
             'The speaker says he wants to explain why rather than just assert it.'),
            ('What does the speaker advise for the first forty seconds?',
             ('Introduce the team', 'Say what you are building and who will pay',
              'Show the slides', 'Thank the panel'), 1,
             'And use the rest to support it.'),
            ('What is the rule about slides?',
             ('They are compulsory', 'They must arrive by Wednesday if used',
              'They may be brought on a memory stick', 'They count in the five minutes'), 1,
             'Nothing can be connected on the day, including your own adapter.'),
            ('Why should teams arrive twenty minutes early?',
             ('To set up slides', 'The schedule may run early',
              'To meet the judges', 'The building is hard to find'), 1,
             'The schedule runs early as often as it runs late.'),
        ],
    ),

    l3=dict(
        sub='What a small business needs',
        caption='A talk on why most new businesses close',
        board=['Profitable ≠ solvent',
               'Cash out before cash in',
               'Growth consumes cash',
               'Timing, not ideas'],
        skill=('Follow a counter-intuitive claim',
               ['A talk that opens with something that sounds impossible will explain it '
                'immediately.',
                'A worked example with dates is the usual explanation. Follow the months.',
                'Listen for the second cause — talks of this kind usually have exactly two.',
                'The last sentence states what the speaker wants remembered.']),
        warm=[
            ('Man: Did he say profitable or solvent?',
             ('Both — they are different.', 'On the board.', 'In May.',
              'Yes, he did.'), 0,
             'The question offers two terms and the answer distinguishes them.'),
            ('Woman: What does solvent mean?',
             ('Able to pay what you owe now.', 'Making a profit.', 'In the third month.',
              'Yes, exactly.'), 0,
             'A what-does-it-mean question wants a definition.'),
            ('Man: Can a profitable business fail?',
             ('In June.', 'Yes — that is the whole point.', 'It made a profit.',
              'No, never.'), 1,
             'A can-it question about possibility, answered and emphasised.'),
        ],
        script=[
            ('Professor', 'Here is a sentence that sounds like nonsense and is not: most '
                          'businesses that close were profitable when they closed. Profit and '
                          'cash are different things, and the difference kills companies. Let me '
                          'walk you through it with months. In March you win an order and buy '
                          'materials. In April your supplier invoices you and you pay, because '
                          'your supplier gives you thirty days. In June your customer pays you, '
                          'because you gave them ninety. On the year’s accounts you made a '
                          'healthy margin on that order. But in May you have to pay rent and '
                          'wages with money you have not received yet, and if you cannot, the '
                          'company stops — profitably. Now the second cause, which is the same '
                          'thing wearing a disguise. Growth. Every new customer costs you money '
                          'before they bring any in, so a company that doubles its orders '
                          'doubles the hole it has to fund. That is why fast-growing small '
                          'companies fail more often than slow ones, and why the advice that '
                          'sounds most unambitious — grow only as fast as you can finance — is '
                          'the advice that keeps companies alive. Neither of these is a failure '
                          'of imagination. Both are failures of timing.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Most businesses have bad ideas', 'Profit and cash are different, and timing is '
              'what closes companies', 'Growth should be avoided',
              'Suppliers should be paid late'), 1,
             'The opening claim and the closing sentence say the same thing.'),
            ('Why does the speaker use months?',
             ('To show how long a business lasts', 'To show cash leaving before it arrives',
              'To explain the tax year', 'To compare two companies'), 1,
             'March, April, June for the money and May for the bills.'),
            ('In the example, when does the company get paid?',
             ('March', 'April', 'May', 'June'), 3,
             'Ninety days after the March order.'),
            ('Why does growth make the problem worse?',
             ('Customers pay later', 'Every new customer costs money before bringing any in',
              'Staff must be paid more', 'Suppliers raise prices'), 1,
             'So doubling orders doubles the hole that has to be funded.'),
            ('What advice does the speaker call unambitious but life-saving?',
             ('Refuse large orders', 'Grow only as fast as you can finance',
              'Pay suppliers late', 'Keep prices high'), 1,
             'He names it as the advice that sounds most unambitious.'),
            ('What does the speaker say both causes have in common?',
             ('They are failures of imagination', 'They are failures of timing',
              'They are caused by customers', 'They happen in the first year'), 1,
             'The final sentence states it.'),
        ],
    ),

    sp=[
        dict(sub='What a small business needs', focus='reporting verbs',
             skill=('Choose the verb that carries the meaning',
                    ['She said, she told me, she asked, she explained, she warned — each one '
                     'means something different.',
                     'Tell needs an object: he told me. Say does not: he said that.',
                     'Keep the stress on the content, not on the reporting verb.',
                     'Finish the sentence even if the backshift goes wrong.']),
             repeat=['She said it was too vague.',
                     'He told me the figure was wrong.',
                     'They explained that profit and cash are different.',
                     'She asked where the number had come from.',
                     'He warned us that we would be stopped mid-sentence.',
                     'The panel wanted to know how many customers we had actually spoken to.',
                     'She said that nobody had ever won the competition with a large number and no explanation of where it came from.'],
             theme='a business you admire',
             qs=['First, is there a small business near you that you like?',
                 'People notice different things about businesses. What makes that one work, '
                 'and why do you think so?',
                 'Some people say that anybody can start a business now. Do you agree? Why or '
                 'why not?',
                 'Finally, should universities teach students how to start a business? Why or '
                 'why not?'],
             model=[(2, 'It is a bakery, and what makes it work is that the owner remembers what '
                        'everybody orders. That is not a strategy you can copy easily.'),
                    (3, 'Anybody can start one. Far fewer people can survive a year without '
                        'income, which is a different claim and the one that matters.')],
             selfcheck=['I chose reporting verbs that carried the meaning',
                        'I used told with an object and said without one',
                        'I gave a reason after every opinion']),
        dict(sub='A start-up competition', focus='relaying what was said',
             skill=('Report accurately, then react',
                    ['First say what was said, then what you think of it. Do not mix them.',
                     'Backshift one step: is → was, will → would, has → had.',
                     'Keep the present if it is still true: she said profit and cash are '
                     'different.',
                     'One report, one reaction, one reason.']),
             repeat=['He said the slides were optional.',
                     'She told us to arrive twenty minutes early.',
                     'They asked whether we had spoken to any customers.',
                     'He explained that the questions were separate from the five minutes.',
                     'She said she would send the file on Wednesday, which she did.',
                     'The panel asked where the figure had come from, and we did not have a good answer.',
                     'He warned us that every year a team is stopped mid-sentence with its most important point still to come.'],
             theme='presenting and being judged',
             qs=['To start, have you ever had to present something to a group?',
                 'People find presenting easy or frightening. How do you find it, and why?',
                 'Some people argue that presentation skills are overvalued compared with the '
                 'quality of the work. Do you agree? Why or why not?',
                 'Last question. Should students be assessed on presentations as well as on '
                 'written work? Why?'],
             model=[(2, 'Frightening for the first minute and then fine, which several people '
                        'have told me is normal and I did not believe until it happened.'),
                    (3, 'Partly. A good idea presented badly still loses, which is unfair, and '
                        'is also what happens in every meeting anybody will ever attend.')],
             selfcheck=['I backshifted correctly',
                        'I separated what was said from what I thought',
                        'I kept the present where the fact is still true']),
        dict(sub='What failure teaches', focus='academic register',
             skill=('Qualify a popular claim',
                    ['Use the unit’s words: attain, prospect, potential, initiate, compile.',
                     'It is often said that… The evidence shows something narrower:…',
                     'Give the condition under which the claim is true.',
                     'Mark yourself against the three statements below.']),
             repeat=['It is often said that failure teaches.',
                     'The evidence shows something narrower than the slogan.',
                     'Founders who start again are not a random sample.',
                     'A market failure produces information that transfers.',
                     'Running out of cash produces fear rather than knowledge.',
                     'Much of the apparent advantage disappears once selection is taken into account.',
                     'Failure teaches you something if, and only if, it tells you something that you did not already know.'],
             theme='risk and failure',
             qs=['First, have you ever tried something that did not work?',
                 'People react to failure differently. How did you react, and why do you think '
                 'that was?',
                 'Some people argue that societies should make it easier to fail in business. '
                 'Do you agree? Why or why not?',
                 'Finally, is it better to try many things badly or one thing well? Why?'],
             model=[(3, 'I agree, with a condition. Making failure cheap helps only if people '
                        'learn something from it, and the evidence suggests that depends on '
                        'why it failed.'),
                    (4, 'One thing well, probably, although the people who say that have '
                        'usually tried several things first.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I qualified a popular claim rather than repeating it',
                        'I gave the condition under which it holds']),
    ],

    w1=dict(
        sub='What a small business needs',
        skill=('The third shape: reported questions',
               ['She asked where I lived — no auxiliary, no question mark, statement order.',
                'He wanted to know whether we had spoken to customers — the same rule.',
                'Backshift one step: do → did, is → was, will → would, can → could.',
                'Use every tile exactly once.']),
        guided=[
            ('"Where did the number come from?" she asked.',
             ['asked', 'she', 'where', 'the', 'number', 'had', 'come', 'from'],
             'She asked where the number had come from.'),
            ('"Have you spoken to any customers?" they asked.',
             ['know', 'they', 'wanted', 'to', 'whether', 'we', 'had', 'spoken', 'to', 'customers'],
             'They wanted to know whether we had spoken to customers.'),
            ('"Are slides compulsory?" he asked.',
             ['asked', 'he', 'whether', 'slides', 'were', 'compulsory'],
             'He asked whether slides were compulsory.'),
        ],
        exam=[
            ('"When does the pitch start?" she asked.',
             ['asked', 'she', 'when', 'the', 'pitch', 'started'],
             'She asked when the pitch started.'),
            ('"Can I send the file on Thursday?" he asked.',
             ['asked', 'he', 'whether', 'he', 'could', 'send', 'it', 'on', 'Thursday'],
             'He asked whether he could send it on Thursday.'),
            ('"How many students are there?" the panel asked.',
             ['know', 'the', 'panel', 'wanted', 'to', 'how', 'many', 'students', 'there', 'were'],
             'The panel wanted to know how many students there were.'),
            ('The judges have read the summary already.',
             ['know', 'do', 'you', 'whether', 'they', 'have', 'read', 'it'],
             'Do you know whether they have read it?'),
            ('The team that arrived late lost two minutes.',
             ['the', 'team', 'that', 'arrived', 'late', 'lost', 'two', 'minutes'],
             'The team that arrived late lost two minutes.'),
            ('"Will you take equity?" we asked.',
             ['asked', 'we', 'whether', 'they', 'would', 'take', 'equity'],
             'We asked whether they would take equity.'),
            ('Most businesses close while still profitable.',
             ['know', 'do', 'you', 'why', 'profitable', 'businesses', 'close'],
             'Do you know why profitable businesses close?'),
        ],
    ),
    w2=dict(
        sub='A start-up competition',
        to='venture@northgate.edu',
        date='16/02/2027',
        subject='Pitch slot 14.20 on 6 March — request to move',
        scenario=[
            'Your team has been shortlisted and given a pitch slot at 14.20 on Friday 6 March. '
            'One of your four team members, who presents the financial section, has a compulsory '
            'laboratory assessment from 13.00 to 15.30 that day. The other three are free all '
            'day.',
            'Write an email to the organisers.',
        ],
        bullets=['Explain the clash precisely.',
                 'Ask whether the slot can be moved, and say when you are free.',
                 'Say what you will do if it cannot.'],
        skill=('Ask for the smallest change that solves it',
               ['A request for a whole new day is harder to grant than a request for a '
                'different hour.',
                'Give your availability as a window, not a single time.',
                'Say what happens if the answer is no, so the reply can be short.',
                'Seven minutes. 110–140 words.']),
        model=[
            'Dear Venture Prize team,',
            'Thank you for shortlisting Loop. Our slot is 14.20 on Friday 6 March, and we have '
            'one clash. Priya Raman, who presents our financial section, has a compulsory '
            'laboratory assessment from 13.00 to 15.30 that day. The other three of us are free '
            'all day.',
            'Would it be possible to move us to a slot before one o’clock or after four? We are '
            'available at any point in either window, and we would rather take an early morning '
            'slot than a different day.',
            'If the schedule cannot be changed, we will pitch with three people and I will take '
            'the financial section myself. Priya has written it and I can answer on it, so we '
            'would rather do that than withdraw.',
            'Thank you,',
            'Tom Whelan, Loop',
        ],
        notes=['The clash is given with the person, the reason and the exact times, so nothing '
               'has to be asked.',
               'The request is for a different hour, not a different day, and offers two windows.',
               'We would rather take an early morning slot shows flexibility in a way the '
               'organiser can use.',
               'The fallback means the organiser can reply no without creating a second problem.'],
    ),
    w3=dict(
        sub='What failure teaches',
        prof='Dr Whelan',
        question='The passage argues that failure teaches only when it produces information — '
                 'market failures teach, cash failures mostly do not. If that is right, should a '
                 'university start-up competition change what it rewards?',
        posts=[('Ana', 'h',
                'Yes. At the moment the prize goes to the best pitch, and a pitch rewards '
                'confidence and storytelling. If what matters is finding out early whether '
                'anybody wants the thing, the prize should go to the team that has learned the '
                'most from customers, including the team that has learned their idea is wrong.'),
               ('Marcus', 'm',
                'Rewarding teams for discovering their idea is wrong sounds good in a seminar '
                'and will not survive contact with a panel of investors, who are there to find '
                'something to fund. You would end up with a competition that no serious judge '
                'wants to sit on, and a prize that signals nothing to anybody outside the '
                'university.')],
        skill=('Weigh an ideal against what will actually happen',
               ['Ana argues from the evidence; Marcus argues from institutions. Both are '
                'legitimate.',
                'A good post says which constraint is binding and why.',
                'Propose something that survives both objections if you can.',
                'At least 100 words in ten minutes.']),
        starters=['Ana has the evidence and Marcus has the institution, and…',
                  'Marcus is right that a prize has to signal something, which means…',
                  'The change that would survive both objections is…',
                  'What I would not do is…'],
        model=[
            'Ana has the evidence and Marcus has the institution, and a competition has to live '
            'inside both.',
            'The passage does support Ana. A market failure produces knowledge that transfers; a '
            'cash failure produces fear that does not. If the point of a student competition is '
            'learning rather than investment, rewarding evidence about customers is exactly '
            'right. But Marcus is also right that a prize is a signal, and a prize that nobody '
            'outside the university recognises is worth less to the winners than it looks.',
            'The change that survives both objections is smaller than Ana’s. Keep one prize for '
            'the best venture, which is what the judges are there for, and add a second, smaller '
            'one for the team that has tested its assumption most seriously — awarded on '
            'evidence, and open to teams whose answer was no. That costs the panel nothing and '
            'changes what every entrant does in January.',
        ],
        model_words=168,
    ),

    gram=dict(
        title='Reported speech · reported and indirect questions',
        headers=['Direct', 'Reported'],
        rows=[
            ['"It is too vague."', 'She said (that) it was too vague.'],
            ['"I will send it."', 'He said he would send it.'],
            ['"Have you spoken to customers?"', 'They asked whether we had spoken to customers.'],
            ['"Where did it come from?"', 'She asked where it had come from.'],
            ['"Arrive early."', 'He told us to arrive early.'],
            ['say vs tell', 'She said that… / She told me that…'],
            ['Still true? No backshift needed', 'She said profit and cash are different.'],
        ],
        notes=[
            'Backshift one step: is → was, does → did, has → had, will → would, can → could. '
            'A past simple can stay as it is or become a past perfect.',
            'A reported question has no auxiliary, no inversion and no question mark. She asked '
            'where it was, never *she asked where was it*.',
            'Tell takes a person: he told me. Say does not: he said that. This is tested '
            'constantly and is the easiest mark in the unit to lose.',
            'If the reported fact is still true, backshift is optional: she said that profit and '
            'cash are different is perfectly correct.',
        ],
        watch='Never write *she asked where did it come from*. Once the question is reported, '
              'the word order is that of a statement.',
        ex=[
            ('Report each sentence.',
             ['"The slides are optional." → He said __________.',
              '"I will send the file." → She said __________.',
              '"Where did the number come from?" → She asked __________.',
              '"Have you spoken to customers?" → They asked __________.',
              '"Arrive twenty minutes early." → He told us __________.',
              '"Can I send it on Thursday?" → He asked __________.'],
             ['the slides were optional', 'she would send the file',
              'where the number had come from', 'whether we had spoken to customers',
              'to arrive twenty minutes early', 'whether he could send it on Thursday']),
            ('Choose say or tell in the right form.',
             ['She __________ that the figure was wrong.',
              'He __________ me that the slides were optional.',
              'They __________ us to arrive early.',
              'Nobody __________ anything about adapters.'],
             ['said', 'told', 'told', 'said']),
            ('Correct the mistake in each sentence.',
             ['She asked where did it come from.',
              'He said me that it was optional.',
              'They asked whether had we spoken to customers.'],
             ['She asked where it had come from.', 'He told me that it was optional.',
              'They asked whether we had spoken to customers.']),
        ],
        bas='This is the third anchor. The official practice test contains She wanted to know '
            'where she could buy a copy — a reported question ending in a full stop, with no '
            'inversion anywhere. If you can build that sentence, you can build every item of '
            'this type.',
    ),

    rev=dict(
        vocab=[
            ('a plan for achieving something over time', 'strategy'),
            ('to reach or achieve', 'attain'),
            ('the possibility of something happening', 'prospect'),
            ('to help two sides reach agreement', 'mediate'),
            ('a firm promise that something will happen', 'guarantee'),
            ('to start something', 'initiate'),
            ('to put together from several sources', 'compile'),
            ('a group of people who judge or discuss', 'panel'),
            ('permission, or to give permission', 'consent'),
            ('to agree to do something', 'undertake'),
            ('money borrowed that must be repaid', 'loan'),
            ('a short talk persuading someone to back an idea', 'pitch'),
        ],
        gram=[
            ('"The slides are optional." → He said they __________ optional.', 'were'),
            ('"I will send it." → She said she __________ send it.', 'would'),
            ('"Where did it come from?" → She asked where it __________ come from.', 'had'),
            ('"Have you spoken to them?" → They asked __________ we had spoken to them.',
             'whether'),
            ('He __________ (say / tell) me that it was optional.', 'told'),
            ('She __________ (say / tell) that the figure was wrong.', 'said'),
            ('"Arrive early." → He told us __________ early.', 'to arrive'),
            ('"Can I send it Thursday?" → He asked whether he __________ send it Thursday.',
             'could'),
        ],
        mini=[
            ('According to the passage on page 90, which failures teach most?',
             ('running out of cash', 'falling out with partners',
              'the market not wanting the product', 'growing too fast'), 2,
             'It produces transferable information; the others produce fear or nothing.'),
            ('In the talk, a profitable business can close because',
             ('its idea was bad', 'cash leaves before it arrives', 'it grew too slowly',
              'its customers disappeared'), 1,
             'The March-to-June example is built to show exactly that.'),
            ('Which sentence is correct?',
             ('She asked where did it come from.', 'He said me it was optional.',
              'They asked whether we had spoken to customers.',
              'They asked whether had we spoken.'), 2,
             'A reported question keeps statement order, and say never takes a person directly.'),
            ('A team wanting to use slides must send the file',
             ('on the day', 'by the Wednesday before', 'with the entry in January',
              'on a memory stick'), 1,
             'Nothing can be connected on the day, including your own adapter.'),
            ('In Build a Sentence, a reported question ends with',
             ('a question mark', 'a full stop', 'either', 'no punctuation'), 1,
             'She wanted to know where she could buy a copy. It is a statement about a question.'),
            ('The three shapes Build a Sentence uses are',
             ('present, past and future', 'direct question, embedded question, relative clause',
              'statement, question, command', 'active, passive, reported'), 1,
             'Eight items of the ten use one of the first two; two use the third.'),
        ],
    ),
    tip='In Write for an Academic Discussion, name one classmate’s point before you add your '
        'own. A post that engages with the thread scores above one that could have been written '
        'without reading it, and naming somebody is the cheapest way to show you did.',
)
