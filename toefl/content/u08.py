# -*- coding: utf-8 -*-
"""Unit 8 · Economics and Markets."""

UNIT = dict(
    n=8, vol=1, title='Economics and Markets',
    icons=('coin', 'chart', 'people'),
    subs=('What a price means', 'A part-time job fair', 'Why trade happens'),
    grammar='Articles and generalisation',
    field='value, exchange, demand',
    opener_line='Economics generalises constantly: a price tells you…, buyers respond to… '
                'Getting a, the and no article right is what makes a generalisation sound like '
                'one.',

    candos=[
        'complete word endings in a text about prices and value',
        'read a job advertisement and an interview email for the conditions',
        'follow a passage that explains why two countries both gain from trade',
        'understand two people comparing two jobs',
        'talk about money and work without preparing',
        'write an email asking about conditions, and a post that questions an assumption',
    ],

    acad=[
        ('economy', 'the system by which a country makes and uses money'),
        ('finance', 'the management of money'),
        ('income', 'money that you receive regularly'),
        ('invest', 'to put money into something to gain more later'),
        ('purchase', 'to buy'),
        ('revenue', 'money a business receives'),
        ('currency', 'the money used in a country'),
        ('commodity', 'a raw material that is bought and sold'),
        ('credit', 'an arrangement to pay later'),
        ('fund', 'to provide money for something'),
        ('margin', 'the difference between cost and selling price'),
        ('incentive', 'something that encourages you to act'),
        ('sector', 'one part of a country’s economy'),
        ('labour', 'work, especially physical work'),
        ('export', 'to sell goods to another country'),
        ('contract', 'a written agreement'),
        ('sum', 'a total amount of money'),
        ('percent', 'one part in a hundred'),
        ('statistic', 'a number that describes a group'),
        ('index', 'a number showing how something has changed'),
        ('allocate', 'to give out for a particular purpose'),
        ('distribute', 'to share out among many'),
        ('transfer', 'to move from one place or person to another'),
        ('equate', 'to treat two things as equal'),
    ],
    campus=[
        ('job fair', 'an event where employers meet possible staff'),
        ('part-time', 'working fewer than full hours'),
        ('shift', 'a period of work'),
        ('wage', 'money paid for work, usually by the hour'),
        ('interview', 'a formal meeting to decide if someone is suitable'),
        ('CV', 'a short written record of your education and jobs'),
        ('application', 'a formal request for a job or place'),
        ('employer', 'a person or company that pays people to work'),
        ('contract hours', 'the number of hours you have agreed to work'),
        ('payslip', 'a paper showing what you were paid'),
        ('overtime', 'hours worked beyond the agreed number'),
        ('reference', 'a statement about you from someone who knows your work'),
    ],
    vocab_talk=[
        'What is the main sector of the economy where you live?',
        'Name one thing whose price has changed a lot recently. What do you think caused it?',
        'If you had a sum of money to invest, what would you put it into and why?',
        'What incentive would actually make students use less electricity?',
    ],
    again=['significant', 'estimate', 'impact', 'vary', 'alternative', 'evaluate', 'exceed', 'proportion'],

    r1=dict(
        sub='What a price means',
        skill=('Let the collocation finish the word',
               ['Words travel in pairs. After supply you expect and demand; after make you '
                'expect a profit.',
                'Endings to expect here: -ers, -ing, -ment, -ity.',
                'If the gap follows a number or a quantity word, think plural.',
                'Read the finished sentence back. Economics texts repeat their key words.']),
        guided_text='A price is a message. When something becomes scarce, its price ri---, and '
                    'the rise tells every buy-- to use less of it and every sell-- to make more. '
                    'Nobody has to be t---. The price does the tell--- by itself.',
        guided_hint='1  ri---  →  ses  (rises)',
        guided=['ses', 'er', 'er', 'old', 'ing'],
        exam_text='Ask what a price is and most people say it is what something co---. That is '
                  'what it is to you. What it is to an economy is a sig---. A price carries '
                  'information from people you will never meet to people who will never meet '
                  'you. When a harvest fails somewhere, the price of that comm----- rises '
                  'everywhere, and millions of buy--- quietly use a little less of it without '
                  'ever hear--- about the harvest. At the same time the higher margin gives '
                  'produ---- an incentive to grow more. No committee decides any of this and no '
                  'government annou---- it. The difficulty is that a price only carries the '
                  'information that somebody actually pa--. If a factory can pour waste into a '
                  'river at no co--, the price of what it makes says noth--- about the river, '
                  'and everyone downstream pays a bill that never appears on anybody’s receipt.',
        exam=['sts', 'nal', 'odity', 'ers', 'ing', 'cers', 'nces', 'ys', 'st', 'ing'],
    ),

    r2=dict(
        sub='A part-time job fair',
        skill=('Read the conditions, not the headline',
               ['A job advertisement sells. The testable information is in the small print.',
                'Pay, hours, start date and requirements are the four things usually asked about.',
                'An email offering an interview will contain a time, a place and a thing to bring.',
                'If two documents give different numbers, one of them is a condition on the other.']),
        docs=[
            ('notice', 'Autumn Job Fair · Thursday 16 October, Sports Hall, 11.00–16.00', [
                '# Twenty-eight employers, all offering part-time work for students',
                '* Riverside Museum — weekend visitor assistant. £12.60 an hour. Two Saturdays '
                'in four. Training provided.',
                '* Hartley Bookshop — shop floor and stockroom. £11.80 an hour, rising to £12.40 '
                'after six months.',
                '* Lennox Catering — evening events. £13.20 an hour plus travel. Minimum four '
                'hours per shift.',
                '* Campus Nursery — afternoons only. £12.00 an hour. A background check is '
                'required and takes about three weeks.',
                '# Before you come',
                '* Bring ten printed copies of your CV. There is no printer in the Sports Hall.',
                '* Most employers interview on the day. Dress as you would for an interview.',
                '* The university limits students to sixteen paid hours a week in term time.',
            ], 'ad'),
            ('email', 'k.adeyemi@hartley.edu', 'jobs@lennoxcatering.co.uk',
             '17/10/2025', 'Interview — Monday 20 October, 15.00', [
                 'Dear Kofi,',
                 '',
                 'Thank you for speaking to us at yesterday’s fair. We would like to',
                 'offer you an interview on Monday 20 October at three, at our office',
                 'on Dunn Street (not at the university).',
                 '',
                 'Please bring photo identification and the name and email address of',
                 'one referee. We do not need a written reference at this stage.',
                 '',
                 'The role is evening events, mostly Thursday to Saturday, and shifts',
                 'are never shorter than four hours. If you cannot commit to at least',
                 'two evenings a week, it is better to tell us now than in November.',
                 '',
                 'Ellie Dunn, Lennox Catering',
             ]),
        ],
        guided=[
            ('Which employer pays the most per hour at the start?',
             ('Riverside Museum', 'Hartley Bookshop', 'Lennox Catering', 'Campus Nursery'), 2,
             'Lennox pays £13.20, above the museum’s £12.60 and the bookshop’s £11.80.'),
            ('Which job requires a background check?',
             ('Riverside Museum', 'Hartley Bookshop', 'Lennox Catering', 'Campus Nursery'), 3,
             'Only the nursery, and the notice adds that it takes about three weeks.'),
            ('What must students bring to the fair?',
             ('A payslip', 'Ten printed copies of a CV', 'A reference', 'Photo identification'), 1,
             'There is no printer in the Sports Hall, which is why the notice says printed.'),
            ('How many paid hours a week may a student work in term time?',
             ('Four', 'Twelve', 'Sixteen', 'Twenty'), 2,
             'The university limit, in the last line before the email.'),
        ],
        exam=[
            ('Where will Kofi’s interview take place?',
             ('At the Sports Hall', 'At the university', 'At an office on Dunn Street',
              'At an evening event'), 2,
             'The email says Dunn Street and adds not at the university in brackets, because that '
             'is the mistake people make.'),
            ('What does Kofi need to bring?',
             ('A written reference', 'Photo identification and a referee’s details',
              'Ten copies of his CV', 'A payslip'), 1,
             'And the email explicitly says a written reference is not needed at this stage.'),
            ('What is the shortest shift Lennox offers?',
             ('Two hours', 'Three hours', 'Four hours', 'Six hours'), 2,
             'The notice and the email agree: never shorter than four hours.'),
            ('Why does Ellie mention November?',
             ('The job starts then', 'Interviews continue until then',
              'It is better to withdraw now than later', 'Pay rises then'), 2,
             'If you cannot commit to two evenings a week, it is better to tell us now than in '
             'November.'),
            ('A student working two Lennox shifts a week would earn about',
             ('£50', '£105', '£160', '£210'), 1,
             'Two shifts of at least four hours at £13.20 is about £105.60, and both numbers are '
             'given.'),
            ('What can be inferred about the job fair?',
             ('Only final-year students may attend', 'Employers may offer a job the same day',
              'All the jobs are on campus', 'Applications close in November'), 1,
             'Most employers interview on the day, and Kofi is offered an interview the following '
             'morning.'),
        ],
    ),

    r3=dict(
        sub='Why trade happens',
        title='Why Two Countries Both Gain from Trade',
        words=275,
        paras=[
            'The oldest argument against trade is the simplest: if we buy from them, the money '
            'leaves. It sounds obviously true, and economists have spent two centuries '
            'explaining why it is not. The explanation is counter-intuitive enough that it is '
            'worth doing slowly.',
            'Imagine two countries. One is better than the other at making absolutely '
            'everything — better at growing wheat and better at making cloth. The intuition '
            'says the efficient country should make both and the other should make nothing. '
            'But think about what the efficient country gives up. Every hour it spends making '
            'cloth is an hour it does not spend growing wheat, and it is very good at wheat. '
            'The other country is worse at both, but it is less bad at cloth, and an hour it '
            'spends on cloth costs it very little wheat. So both countries end up with more of '
            'everything if each concentrates on what it gives up least to produce, and then '
            'they exchange.',
            'This is why trade is not a competition with a winner. It is also why the argument '
            'is so often lost in public. The gains are spread thinly across millions of buyers '
            'who never notice them, while the losses are concentrated on the few thousand people '
            'whose industry closes, and who notice very sharply indeed. Both effects are real. '
            'An economist who says only the first thing is answering a different question from '
            'the one being asked.',
        ],
        skill=('Follow an argument, not a description',
               ['An argument passage sets up a belief, gives a counter-argument, and then '
                'qualifies it. Expect all three.',
                'Imagine two countries signals a worked example. Follow it number by number.',
                'The last paragraph often concedes something. That concession is usually tested.',
                'Main-idea questions want the whole argument, not the example inside it.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why trade can benefit both sides, and why that is hard to see',
              'How wheat and cloth are made', 'Why some countries are more efficient',
              'The history of economics'), 0,
             'Paragraph 2 gives the argument and paragraph 3 explains why it loses in public.'),
            ('What is "the oldest argument against trade"?',
             ('That it costs jobs', 'That money leaves the country',
              'That it is inefficient', 'That it favours large countries'), 1,
             'The first sentence states it in exactly those words.'),
            ('In the example, what is true of the second country?',
             ('It is better at cloth', 'It is better at wheat',
              'It is worse at both but less bad at cloth', 'It makes nothing'), 2,
             'That is the hinge of the whole argument.'),
            ('The phrase "gives up" in paragraph 2 refers to',
             ('money spent', 'what is not produced instead', 'goods exported',
              'hours worked'), 1,
             'Every hour spent on cloth is an hour not spent on wheat — that is what is given up.'),
        ],
        exam=[
            ('According to the passage, what should each country concentrate on?',
             ('What it makes best', 'What it gives up least to produce',
              'What it can sell most of', 'What its neighbours cannot make'), 1,
             'The distinction between these first two options is the entire point of the argument.'),
            ('Why does the author say trade is "not a competition with a winner"?',
             ('Because governments regulate it', 'Because both sides end up with more',
              'Because prices are fixed', 'Because money does not actually move'), 1,
             'Both countries end up with more of everything if each specialises and they exchange.'),
            ('All of the following are stated in the passage EXCEPT:',
             ('The gains from trade are spread thinly', 'The losses are concentrated',
              'Both effects are real', 'The losses are smaller than people think'), 3,
             'The author insists both effects are real and never minimises the losses.'),
            ('Why is the argument "so often lost in public"?',
             ('It is too technical to explain', 'The people who gain do not notice and the '
              'people who lose do', 'Economists disagree about it',
              'Governments prefer the opposite'), 1,
             'Spread thinly across millions who never notice, concentrated on thousands who '
             'notice sharply.'),
            ('What does the author say about an economist who mentions only the gains?',
             ('They are being dishonest', 'They are answering a different question',
              'They are usually correct', 'They have misread the data'), 1,
             'The final sentence says exactly that, which is a criticism of the answer rather '
             'than of the facts.'),
            ('What can be inferred about the author’s view?',
             ('Trade should be restricted', 'Trade is good but its costs are real',
              'Economists are usually wrong', 'The old argument is correct'), 1,
             'The argument is defended in paragraph 2 and its human cost conceded in paragraph 3.'),
            ('Which best states the main idea of paragraph 3?',
             ('Public debate ignores the gains because of how they are distributed',
              'Industries close every year', 'Economists should speak more clearly',
              'Trade creates more jobs than it destroys'), 0,
             'The paragraph is about the distribution of the effects, not their size.'),
        ],
    ),

    l1=dict(
        sub='A part-time job fair',
        caption='Two students compare two jobs',
        skill=('Track the trade-off',
               ['When two options are compared, each will have one advantage and one cost. '
                'Note all four.',
                'The speaker who changes their mind is usually the subject of a question.',
                'Numbers said once are testable; numbers repeated are definitely tested.',
                'The decision comes in the last two lines.']),
        warm=[
            ('Woman: Did you get anything from the fair?',
             ('Twenty-eight employers.', 'An interview, actually.', 'In the Sports Hall.',
              'Yes, it was busy.'), 1,
             'A did-you-get question wants the thing obtained.'),
            ('Man: How much does the bookshop pay?',
             ('Eleven eighty an hour.', 'On the shop floor.', 'Two Saturdays in four.',
              'Yes, it does.'), 0,
             'How much wants an amount.'),
            ('Woman: Four-hour shifts are quite long.',
             ('They’re in the evening.', 'They are, but the pay is better.',
              'Thursday to Saturday.', 'No, I don’t think so.'), 1,
             'An opinion is naturally met with agreement plus the other side.'),
        ],
        script=[
            ('Man', 'So, bookshop or catering?'),
            ('Woman', 'Catering pays more. Thirteen twenty against eleven eighty.'),
            ('Man', 'That’s a pound forty an hour.'),
            ('Woman', 'Plus travel. The bookshop doesn’t pay travel.'),
            ('Man', 'But the bookshop goes up to twelve forty after six months.'),
            ('Woman', 'In six months. And I’d be there, what, eight hours a week? That’s four '
                      'pounds eighty a week more now, against five pounds a week more in April.'),
            ('Man', 'When you put it like that. So catering.'),
            ('Woman', 'Except the shifts are evenings, Thursday to Saturday, minimum four hours. '
                      'I have a nine o’clock lecture on Fridays.'),
            ('Man', 'Ah.'),
            ('Woman', 'And that’s the thing nobody puts on the poster. The money is easy to '
                      'compare. Whether you can actually do the hours isn’t.'),
            ('Man', 'So which one?'),
            ('Woman', 'Bookshop. I’ll be poorer and I’ll pass statistics.'),
        ],
        items=[
            ('What are the speakers mainly discussing?',
             ('Which job to take', 'How to get an interview', 'Where the job fair was',
              'How many hours students may work'), 0,
             'The first line sets the choice and the last line settles it.'),
            ('How much more per hour does catering pay at the start?',
             ('80p', '£1.40', '£2.00', '60p'), 1,
             'Thirteen twenty against eleven eighty, and the man does the arithmetic aloud.'),
            ('What extra does catering offer besides the hourly rate?',
             ('Training', 'Travel costs', 'A pay rise after six months', 'Shorter shifts'), 1,
             'Plus travel. The bookshop doesn’t pay travel.'),
            ('Why does the woman reject the catering job?',
             ('The pay is too low', 'The shifts clash with a lecture',
              'It is too far away', 'She has no experience'), 1,
             'Evening shifts Thursday to Saturday against a nine o’clock Friday lecture.'),
            ('What does the woman mean by "the thing nobody puts on the poster"?',
             ('The pay is advertised dishonestly', 'Whether the hours actually fit your life',
              'The travel costs are hidden', 'Training is not mentioned'), 1,
             'She contrasts the money, which is easy to compare, with the hours, which are not.'),
            ('What does the woman decide?',
             ('To take the catering job', 'To take the bookshop job',
              'To apply to both', 'To wait until April'), 1,
             'Bookshop. I’ll be poorer and I’ll pass statistics.'),
        ],
    ),

    l2=dict(
        sub='A part-time job fair',
        caption='An announcement about the job fair',
        poster=['Sports Hall, Thursday, 11.00–16.00',
                'Bring ten printed CVs — no printer there',
                'Term-time limit: 16 paid hours a week'],
        skill=('Hear the limit',
               ['Announcements about work always carry a limit: hours, age, visa, dates.',
                'A limit with a reason attached is always tested.',
                'Advice and rules sound similar. Listen for must, cannot, you are not allowed.',
                'What the speaker calls the most common mistake is a guaranteed question.']),
        warm=[
            ('Man: What time does it open?',
             ('Eleven.', 'In the Sports Hall.', 'Twenty-eight employers.', 'On Thursday.'), 0,
             'What time wants a clock time, and only one option gives one.'),
            ('Woman: Do I need to bring my CV?',
             ('There’s no printer there.', 'Yes — ten printed copies.',
              'It’s on Thursday.', 'Most of them interview on the day.'), 1,
             'A do-I-need question wants a yes or no plus the detail.'),
            ('Man: Can I work full time in term?',
             ('Sixteen hours is the limit.', 'It depends on the employer.',
              'In the evenings, mostly.', 'Yes, if you want.'), 0,
             'A can-I question about permission; the answer gives the rule.'),
        ],
        script=[
            ('Woman', 'The autumn job fair is on Thursday, eleven until four, in the Sports Hall. '
                      'Twenty-eight employers, all of them offering part-time work that fits '
                      'round a degree. Three things. First, bring ten printed copies of your CV. '
                      'Every year people arrive with it on their phone and there is no printer in '
                      'the building. Second, most employers interview on the day, so come dressed '
                      'as you would for an interview, not as you would for a Thursday. Third, and '
                      'this is the one that causes real problems later: the university limits you '
                      'to sixteen paid hours a week during term. That is not advice. If you '
                      'exceed it and your department finds out, the usual outcome is that you '
                      'have to give up the job, and by then you have signed a contract. So before '
                      'you agree to anything, add up the shifts. One four-hour evening shift '
                      'sounds like nothing; four of them is sixteen hours and you are already at '
                      'the limit.'),
        ],
        items=[
            ('What is the main purpose of the announcement?',
             ('To advertise one employer', 'To prepare students for the fair',
              'To change the date of the fair', 'To explain how to write a CV'), 1,
             'Three things, all of them things to do or know before going.'),
            ('Why must students bring printed CVs?',
             ('Employers prefer paper', 'There is no printer in the building',
              'Phones are not allowed', 'Ten employers ask for one'), 1,
             'Every year people arrive with it on their phone — and the building has no printer.'),
            ('How should students dress?',
             ('Comfortably', 'As for an interview', 'In university colours',
              'It does not matter'), 1,
             'Because most employers interview on the day.'),
            ('What is the sixteen-hour rule?',
             ('A recommendation', 'A limit set by employers',
              'A university rule with consequences', 'A legal maximum for all workers'), 2,
             'That is not advice — exceeding it usually means giving up the job.'),
            ('Why does the speaker mention four evening shifts?',
             ('They pay the most', 'They add up to the whole weekly limit',
              'They are the hardest to get', 'They clash with lectures'), 1,
             'Four four-hour shifts is sixteen hours, which is already the limit.'),
        ],
    ),

    l3=dict(
        sub='What a price means',
        caption='A talk on what happens when supply falls',
        board=['Supply falls → price rises', 'Buyers: use less',
               'Sellers: make more', 'Nobody is told'],
        skill=('Follow a chain of effects',
               ['A talk built on a chain will say each link once. Miss one and the rest will '
                'not connect.',
                'Listen for notice that, the point is, what matters here.',
                'An objection raised by the speaker (but, of course, the difficulty is) is '
                'always tested.',
                'The final qualification is usually the main idea in disguise.']),
        warm=[
            ('Woman: Did she say supply or demand?',
             ('Supply.', 'It rises.', 'On the board.', 'Yes, she did.'), 0,
             'The question offers two terms and the answer picks one.'),
            ('Man: What happens to the price?',
             ('Because supply has fallen.', 'It goes up.', 'Buyers and sellers.',
              'In the long run.'), 1,
             'What happens wants the change itself, not its cause.'),
            ('Woman: I don’t follow the last bit.',
             ('Nor do I — shall we ask her?', 'It’s about supply.', 'At the end.',
              'Yes, it was long.'), 0,
             'A stated difficulty is met with a practical suggestion.'),
        ],
        script=[
            ('Professor', 'Here is the thing economists find beautiful and almost everyone else '
                          'finds suspicious. Suppose a harvest fails and the supply of coffee '
                          'falls. The price rises. Now watch what the rise does. Every buyer in '
                          'the world, without being told anything about any harvest, finds coffee '
                          'slightly more expensive and uses slightly less of it. At the same '
                          'moment every grower in the world finds coffee slightly more profitable '
                          'and plants slightly more of it. Nobody has issued an instruction. '
                          'Nobody even knows the whole story. A price has carried a piece of '
                          'information from a field in one country to a kitchen in another, and '
                          'the two parties have coordinated without meeting. That is the '
                          'argument for leaving prices alone. But notice the condition hidden in '
                          'it. The price only carries the information that somebody pays. If a '
                          'factory can tip waste into a river for nothing, then the river is not '
                          'in the price, and the signal that reaches the buyer is simply wrong — '
                          'not slightly wrong, but wrong in the one direction that matters. The '
                          'question for the rest of this term is therefore not whether prices '
                          'carry information. It is which costs we have left out of them.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Prices carry information, but only about costs that somebody pays',
              'Coffee prices are unusually unstable', 'Governments should control prices',
              'Buyers and sellers rarely cooperate'), 0,
             'The first half makes the case and the second half states the condition, which is '
             'where the talk is going.'),
            ('What happens when supply falls?',
             ('The price falls', 'The price rises', 'Demand rises', 'Nothing changes'), 1,
             'It is the first link of the chain and it is on the board.'),
            ('According to the speaker, how do buyers learn about the failed harvest?',
             ('From the news', 'From the government', 'They do not — they only see the price',
              'From growers'), 2,
             'Without being told anything about any harvest, they find it more expensive and use '
             'less.'),
            ('Why does the speaker mention a factory and a river?',
             ('To give an example of a cost left out of the price',
              'To explain how factories are built', 'To compare two industries',
              'To describe pollution laws'), 0,
             'If the river is free, it is not in the price, so the signal is wrong.'),
            ('What does the speaker say about a signal that leaves out a cost?',
             ('It is slightly inaccurate', 'It is wrong in the direction that matters',
              'It corrects itself over time', 'It affects only local buyers'), 1,
             'Not slightly wrong, but wrong in the one direction that matters.'),
            ('What will the rest of the term be about?',
             ('Whether prices carry information', 'Which costs are left out of prices',
              'How coffee is grown', 'How governments set prices'), 1,
             'The last sentence says so directly.'),
        ],
    ),

    sp=[
        dict(sub='What a price means', focus='contracted auxiliaries',
             skill=('Contract, like a speaker',
                    ['It’s, they’re, doesn’t, I’d — full forms sound like reading aloud.',
                     'Contract the auxiliary, never the main verb.',
                     'Do not contract at the end of a clause: Yes, I am — not Yes, I’m.',
                     'Say the whole sentence, contractions and all, at a steady speed.']),
             repeat=['It’s more expensive now.',
                     'They don’t pay travel costs.',
                     'She’s been looking for work since September.',
                     'If the harvest fails, the price won’t stay the same.',
                     'I’d rather earn less and keep my Friday morning free.',
                     'Nobody’s been told anything, and yet everybody’s using slightly less of it.',
                     'A price that doesn’t include the cost of the river isn’t telling the buyer the truth about what they’re buying.'],
             theme='a job you have had or want',
             qs=['First, have you ever had a paid job?',
                 'People feel very differently about their first job. How did you feel about '
                 'yours, or how do you imagine feeling, and why?',
                 'Some people say students should not work during term time at all. Do you agree? '
                 'Why or why not?',
                 'Finally, should universities help students find part-time work, or is that not '
                 'their job? Why?'],
             model=[(2, 'Mine was in a supermarket and I hated the first month and quite liked '
                        'the rest, mostly because of the people.'),
                    (4, 'I think they should. A student who has to work will work either way, and '
                        'a job the university knows about is one that respects the sixteen-hour '
                        'limit.')],
             selfcheck=['I used contracted forms where a speaker would',
                        'I did not contract at the end of a clause',
                        'I gave a reason after every opinion']),
        dict(sub='A part-time job fair', focus='talking about money',
             skill=('Say the amount, then the comparison',
                    ['Thirteen twenty an hour, which is a pound forty more than the bookshop.',
                     'Per hour, a week, a month — always say the period.',
                     'Rounding is fine in speech: about a hundred pounds a week.',
                     'One figure, one comparison, one conclusion is a full answer.']),
             repeat=['The wage is twelve pounds an hour.',
                     'Catering pays more than the bookshop does.',
                     'That is about a hundred pounds a week before tax.',
                     'The rate rises to twelve forty after six months of work.',
                     'Four hours a shift at thirteen twenty comes to nearly fifty-three pounds.',
                     'I would earn four pounds eighty a week more now, against five pounds more in April.',
                     'The money is the easy part to compare; whether you can actually work those hours alongside your lectures is not.'],
             theme='work and study together',
             qs=['To start, do students in your country usually work while they study?',
                 'People manage work and study differently. How would you manage it, and why '
                 'that way?',
                 'Some people argue that paid work teaches students things a degree cannot. Do '
                 'you agree? Why or why not?',
                 'Last question. Should employers be required to give students time off before '
                 'examinations? Why or why not?'],
             model=[(3, 'I agree with that, up to a point. A job taught me how to speak to '
                        'strangers, which no seminar has ever done.'),
                    (4, 'Yes, but with notice from the student. An employer cannot plan a rota '
                        'around exams nobody has told them about.')],
             selfcheck=['I said the period after every amount',
                        'I made one clear comparison',
                        'I finished every sentence']),
        dict(sub='Why trade happens', focus='academic register',
             skill=('Concede, then argue',
                    ['Use the unit’s words: incentive, margin, allocate, distribute, equate.',
                     'Admit the strong point on the other side first: it is true that…',
                     'Then say why it does not settle the question: however, that applies to…',
                     'Mark yourself against the three statements below.']),
             repeat=['Trade is not a competition.',
                     'Each country specialises in what it gives up least.',
                     'The gains are distributed thinly across many buyers.',
                     'The losses are concentrated on a small number of workers.',
                     'An incentive to produce more appears as soon as the margin widens.',
                     'It is true that some industries close, and that is not a small thing to the people in them.',
                     'The argument is usually lost in public because the people who gain never notice, while the people who lose notice very sharply indeed.'],
             theme='work, trade and your country',
             qs=['First, what does your country mainly sell to other countries?',
                 'Economies change, and people respond differently. How have people where you '
                 'live responded to that change, and why?',
                 'Some people argue that a country should protect industries that are closing. '
                 'Do you agree? Why or why not?',
                 'Finally, if an industry closes, who should be responsible for the people who '
                 'worked in it? Why?'],
             model=[(3, 'It is true that closing an industry destroys a town, and that is not a '
                        'small thing. However, protecting it usually means the same town closes '
                        'ten years later with less money to move.'),
                    (4, 'Whoever gained from the change. If the gains are spread across '
                        'everybody, then everybody, through taxation.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I conceded a point before arguing against it',
                        'My last answer had an opinion, a reason and an example']),
    ],

    w1=dict(
        sub='What a price means',
        skill=('Articles in the gaps',
               ['A tile that says a or the belongs with a noun. Find the noun first.',
                'How much + uncountable (money, work); how many + countable (hours, jobs).',
                'A question about a general truth takes no article: Do prices carry information?',
                'Use every tile exactly once.']),
        guided=[
            ('Catering pays thirteen twenty an hour.',
             ['much', 'how', 'does', 'catering', 'pay'],
             'How much does catering pay?'),
            ('Twenty-eight employers came to the fair.',
             ['employers', 'how', 'many', 'came'],
             'How many employers came?'),
            ('The shifts are never shorter than four hours.',
             ['know', 'you', 'do', 'how', 'long', 'the', 'shifts', 'are'],
             'Do you know how long the shifts are?'),
        ],
        exam=[
            ('Students may work sixteen hours a week in term time.',
             ['hours', 'how', 'many', 'can', 'I', 'work'],
             'How many hours can I work?'),
            ('The interview is on Dunn Street, not at the university.',
             ['tell', 'can', 'you', 'me', 'where', 'the', 'interview', 'is'],
             'Can you tell me where the interview is?'),
            ('The bookshop rate rises after six months.',
             ['does', 'when', 'the', 'rate', 'rise'],
             'When does the rate rise?'),
            ('Lennox pays travel costs as well as the hourly rate.',
             ['know', 'do', 'you', 'whether', 'they', 'pay', 'travel'],
             'Do you know whether they pay travel?'),
            ('The employer who interviewed me emailed the next day.',
             ['the', 'employer', 'who', 'interviewed', 'me', 'emailed', 'the', 'next', 'day'],
             'The employer who interviewed me emailed the next day.'),
            ('A background check takes about three weeks.',
             ['long', 'how', 'does', 'a', 'check', 'take'],
             'How long does a check take?'),
            ('Prices carry information from one country to another.',
             ['do', 'what', 'prices', 'carry'],
             'What do prices carry?'),
        ],
    ),
    w2=dict(
        sub='A part-time job fair',
        to='jobs@lennoxcatering.co.uk',
        date='17/10/2025',
        subject='Interview Monday — question about shift times',
        scenario=[
            'You have been offered an interview with Lennox Catering for evening event work, '
            'Thursday to Saturday, minimum four hours a shift. You have a nine o’clock lecture '
            'every Friday morning, and you are not sure how late Thursday shifts finish.',
            'Write an email to Ellie Dunn before the interview.',
        ],
        bullets=['Confirm the interview.',
                 'Ask the question you need answered before you can commit.',
                 'Say what you can offer if the answer is difficult.'],
        skill=('Ask before the interview, not during it',
               ['A question asked in advance saves both sides a wasted meeting.',
                'Give the constraint, then the question: I have a 9.00 lecture on Friday, so…',
                'Offer an alternative. Two evenings that do work beats three that might not.',
                'Seven minutes. 110–140 words.']),
        model=[
            'Dear Ms Dunn,',
            'Thank you for the interview on Monday 20 October at three on Dunn Street. I will be '
            'there, with photo identification and my referee’s details.',
            'Before Monday, may I ask one thing? I have a lecture at nine every Friday morning, '
            'so I need to know how late Thursday evening shifts usually finish. Could you tell '
            'me whether they normally end by about eleven, or whether they can run past '
            'midnight?',
            'If Thursdays are late, I could still offer two shifts a week on Friday and Saturday '
            'evenings, which would meet the minimum you mentioned. I would rather tell you that '
            'now than agree to a rota I cannot keep.',
            'Many thanks,',
            'Kofi Adeyemi',
        ],
        notes=['The interview is confirmed in one sentence, with the two things to bring, so '
               'nothing has to be chased.',
               'The constraint comes before the question, and the question offers two concrete '
               'possibilities rather than an open one.',
               'The alternative is specific and meets the employer’s stated minimum of two '
               'evenings.',
               'The last sentence explains why the email exists, which makes the writer look '
               'reliable rather than difficult.'],
    ),
    w3=dict(
        sub='Why trade happens',
        prof='Dr Marchetti',
        question='The argument for free trade says that both countries gain overall, while the '
                 'losses fall on a small number of workers whose industry closes. If the gains '
                 'are real, is a government right to let an industry close? Why or why not?',
        posts=[('Lucia', 'w',
                'Yes, if it also pays for what follows. The passage is clear that the total is '
                'larger. A government that blocks trade makes everybody slightly poorer to keep '
                'a few thousand jobs, which is a very expensive way to help those people. Take '
                'the gain and spend part of it on retraining and on the town.'),
               ('Hassan', 'm',
                'Retraining is what governments always promise and almost never deliver at the '
                'scale required. Meanwhile the town has lost the one employer that made it a '
                'town. The gains are real but they appear somewhere else, often in another '
                'country, and you cannot retrain a fifty-year-old into a job that is two hundred '
                'miles away.')],
        skill=('Attack the weakest link, not the conclusion',
               ['Both posts may be right about different steps. Find the step that actually '
                'fails.',
                'Here, the weak link is whether compensation is ever delivered.',
                'Name a classmate and give their argument its strongest form first.',
                'At least 100 words in ten minutes.']),
        starters=['Lucia’s argument has one weak link, and Hassan has found it:…',
                  'The disagreement is not about economics but about…',
                  'If Hassan is right about delivery, then Lucia’s conclusion…',
                  'What would change my mind is…'],
        model=[
            'Lucia’s argument has one weak link and Hassan has found it. The economics is not '
            'the disagreement; the delivery is.',
            'Lucia is right that blocking trade is an expensive way to protect a few thousand '
            'jobs, and the passage supports her: the total really is larger. But her conclusion '
            'depends entirely on the second half of her own sentence — and spend part of it on '
            'retraining and on the town. If that part never happens, her policy is simply the '
            'losses without the compensation, which is what Hassan has watched.',
            'So I would answer the question conditionally. A government is right to let the '
            'industry close only if the compensation is legislated at the same time as the trade '
            'agreement, in the same act, with the money committed before the factory shuts. '
            'Promised afterwards, it is not a policy. It is a hope.',
        ],
        model_words=160,
    ),

    gram=dict(
        title='Articles and generalisation',
        headers=['Form', 'Example'],
        rows=[
            ['a / an: one of many, first mention', 'A price carries information.'],
            ['the: we both know which one', 'The price of coffee rose.'],
            ['No article: plural general', 'Prices carry information.'],
            ['No article: uncountable general', 'Trade is not a competition.'],
            ['the + singular = the whole class', 'The consumer is better off.'],
            ['the + superlative / only / same', 'the oldest argument, the same question'],
            ['a + job title', 'She works as a visitor assistant.'],
        ],
        notes=[
            'There are three ways to generalise in English and they are not interchangeable in '
            'register. Prices carry information is neutral; A price carries information is '
            'explanatory; The price carries information is formal or technical.',
            'Use no article with an uncountable noun used generally: trade, labour, information, '
            'money.',
            'Use the when the noun has already been introduced, or when the context makes it '
            'unique: the harvest, the river, the factory in that example.',
        ],
        watch='Never write *the trade is good* or *the information is carried by the prices* '
              'when you mean these things in general. General plural and general uncountable '
              'nouns take no article at all.',
        ex=[
            ('Complete with a, an, the or – (no article).',
             ['__________ prices carry information.',
              '__________ price of coffee rose last month.',
              'She works as __________ visitor assistant at the museum.',
              '__________ trade is not a competition with a winner.',
              'I read __________ advertisement for a part-time job.',
              '__________ advertisement said the pay was twelve pounds an hour.'],
             ['–', 'The', 'a', '–', 'an', 'The']),
            ('One sentence in each pair is correct. Which?',
             ['a) The students must bring the CV.   b) Students must bring a CV.',
              'a) The information is free.   b) Information is free.  (in general)',
              'a) He got a interview.   b) He got an interview.'],
             ['b', 'b', 'b']),
            ('Correct the mistake in each sentence.',
             ['The trade between two countries makes both richer.',
              'She has got the job in a bookshop.',
              'A prices carry information from one country to another.'],
             ['Trade between two countries makes both richer.',
              'She has got a job in a bookshop.',
              'Prices carry information from one country to another.']),
        ],
        bas='Articles rarely appear as the point of a Build a Sentence item, but a wrong article '
            'spoils an otherwise correct sentence. When a tile says a or the, decide which noun '
            'it belongs to before you decide the order.',
    ),

    rev=dict(
        vocab=[
            ('money that you receive regularly', 'income'),
            ('money a business receives', 'revenue'),
            ('a raw material that is bought and sold', 'commodity'),
            ('something that encourages you to act', 'incentive'),
            ('the difference between cost and selling price', 'margin'),
            ('one part of a country’s economy', 'sector'),
            ('to give out for a particular purpose', 'allocate'),
            ('to treat two things as equal', 'equate'),
            ('a number showing how something has changed', 'index'),
            ('to sell goods to another country', 'export'),
            ('hours worked beyond the agreed number', 'overtime'),
            ('a statement about you from someone who knows your work', 'reference'),
        ],
        gram=[
            ('__________ prices carry information.', '– (no article)'),
            ('__________ price of coffee rose last month.', 'The'),
            ('She works as __________ visitor assistant.', 'a'),
            ('__________ trade is not a competition.', '– (no article)'),
            ('He got __________ interview on Monday.', 'an'),
            ('__________ advertisement said twelve pounds an hour.', 'The'),
            ('Students must bring __________ CV to the fair.', 'a'),
            ('__________ information in a price is only as good as the costs included.', 'The'),
        ],
        mini=[
            ('According to the passage on page 130, each country should concentrate on',
             ('what it makes best', 'what it gives up least to produce',
              'what sells for most', 'what its neighbours cannot make'), 1,
             'The difference between those first two is the entire argument.'),
            ('In the talk, a price fails to carry information when',
             ('supply falls', 'demand rises', 'a cost is not paid by anyone',
              'the government intervenes'), 2,
             'If the river is free, the river is not in the price.'),
            ('Which sentence is correct?',
             ('The trade makes both countries richer.', 'Prices carry information.',
              'He got a interview.', 'The students must bring the CV.'), 1,
             'A general plural takes no article, and the others misuse the, a and an.'),
            ('A student in term time may work at most',
             ('eight hours a week', 'twelve hours a week', 'sixteen hours a week',
              'twenty hours a week'), 2,
             'The university limit, which the announcement says is a rule and not advice.'),
            ('In Read in Daily Life, the answer is',
             ('always printed in the text', 'sometimes inferred from outside knowledge',
              'always a number', 'in the heading'), 0,
             'This task never requires knowledge from outside the page.'),
            ('In Writing, the email task allows',
             ('five minutes', 'seven minutes', 'ten minutes', 'fifteen minutes'), 1,
             'Seven for the email and ten for the discussion post.'),
        ],
    ),
    tip='In Read in Daily Life the answer is always printed on the page. If you find yourself '
        'reasoning about what is probably true, you have left the text — go back and find the '
        'line. This task rewards finding, not thinking.',
)
