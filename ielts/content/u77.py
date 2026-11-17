# -*- coding: utf-8 -*-
"""Foundation 2, Unit 7 - Clothes and Fashion.

Buying, uniforms, where clothes come from, why old styles return, and
what to do with a mountain of unwanted clothing. The technique page
takes the keyword trap apart using a real paraphrase pattern rather
than a warning.
"""

_SPEND = dict(kind='line',
              title='Spending on clothes as a share of income',
              sub='per cent of household spending, three countries',
              x=['1980', '1995', '2010', '2024'],
              series=[('Country A', [8.4, 6.1, 4.3, 3.6]),
                      ('Country B', [11.2, 9.0, 6.2, 4.8]),
                      ('Country C', [6.0, 5.4, 4.9, 4.5])],
              ylab='per cent')

_SHIRT = dict(kind='process',
              title='The journey of a cotton shirt',
              sub='six stages, four countries',
              stages=[
               ('Growing', 'cotton is grown and picked'),
               ('Spinning', 'the fibre is spun into thread'),
               ('Weaving', 'thread is woven into cloth'),
               ('Cutting', 'the cloth is cut to a pattern'),
               ('Sewing', 'the pieces are sewn together'),
               ('Shipping', 'the shirt travels to a shop or a '
                'warehouse')],
              phases=[('Raw material', 0, 0), ('Making cloth', 1, 2),
                      ('Making the shirt', 3, 5)])

UNIT = dict(
 n=7, vol=8, level='A2-B1', band='4.0-4.5',
 theme='Clothes and Fashion',
 opener=(
   'This unit begins with a size guide and ends with a mountain of '
   'unwanted clothes. In between you will argue about uniforms at work, '
   'follow a cotton shirt through four countries, and read why styles '
   'that nobody wanted twenty years ago return. The technique page '
   'takes apart the keyword trap: not the warning you were given in '
   'Foundation 1, but the actual pattern the test uses to build one.'),

 cycles=[
  dict(
   sub='Buying clothes',
   step=1,
   read=[
    dict(heading='Size guide and returns',
         kind='Shop information', task='Short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('A size and returns page is read for the exception',
                ['Sizes are rarely asked about directly. The '
                 'conditions attached to them are.',
                 'Find every number of days on the page before you '
                 'start.']),
         paras=[
          'Our sizes are cut to the European standard. If you are '
          'between two sizes, we recommend the larger for jackets and '
          'the smaller for knitwear, which shrinks slightly on the '
          'first wash.',
          'You may return anything within twenty-eight days. Items must '
          'be unworn and the label must still be attached. The return '
          'is free if you use the code on your delivery note.',
          'Items bought in a sale may be exchanged but not refunded. '
          'This is stated at the till and on the receipt, and it is the '
          'point most often disputed.',
          'If something is faulty, none of the above applies. A faulty '
          'item may be returned at any time within a year, worn or not, '
          'and the amount refunded is the full price you paid.'],
         items=[
          ('For knitwear, choose the ____________ size if you are '
           'between two.', None, 'smaller',
           'Because it shrinks slightly on the first wash.'),
          ('Returns are accepted within ____________ days.', None,
           'twenty-eight', 'If the item is unworn and labelled.'),
          ('The return is free if you use the code on the '
           '____________ note.', None, 'delivery',
           'The note that comes with the parcel.'),
          ('What may be done with a sale item?',
           ['exchanged but not refunded', 'refunded but not exchanged',
            'neither exchanged nor refunded',
            'both, within twenty-eight days'], 0,
           'Which the page says is most often disputed.'),
          ('A faulty item may be returned within a ____________.',
           None, 'year', 'Worn or not, at the full price paid.')])],
   listen=[
    dict(heading='Exchanging a jacket', part='Part 1',
         task='A conversation at a customer desk', band='l1',
         qtype='Questions 6-11',
         script=[
          ('Desk', 'How can I help?'),
          ('Customer', 'I would like to exchange this jacket for the '
           'next size up.'),
          ('Desk', 'Do you have the receipt?'),
          ('Customer', 'It was a present. I have the delivery note.'),
          ('Desk', 'That is better than a receipt, because it shows '
           'the order. Was it bought in the sale?'),
          ('Customer', 'I do not know.'),
          ('Desk', 'The note says full price, so you could have a '
           'refund if you preferred. Sale items are exchange only.'),
          ('Customer', 'An exchange is fine. Do you have the larger '
           'size?'),
          ('Desk', 'Not in this colour. I can order it and it arrives '
           'in three working days, or there is grey in stock now.'),
          ('Customer', 'I will wait for the blue.'),
          ('Desk', 'Then I will take this one back and the new one '
           'comes to the shop. We will text you when it arrives.'),
          ('Customer', 'Is there anything to pay?'),
          ('Desk', 'No. Same price, same item, different size. One '
           'thing: keep the delivery note until you have the jacket, '
           'because the exchange is recorded against it.'),
          ('Customer', 'Understood.'),
          ('Desk', 'And the label needs to stay on the new one until '
           'you are sure.')],
         items=[
          ('The customer wants the next size ____________.', None,
           'up', 'In the same jacket and the same colour.'),
          ('Instead of a receipt, the customer has the '
           '____________ note.', None, 'delivery',
           'Which the assistant says is better.'),
          ('Because it was not a sale item, a ____________ would be '
           'possible.', None, 'refund',
           'Sale items can only be exchanged.'),
          ('The blue jacket will take ____________ working days.',
           None, 'three', 'Grey is in stock now if they prefer.'),
          ('The shop will ____________ the customer when it '
           'arrives.', None, 'text',
           'And the new jacket comes to the shop.'),
          ('The customer should keep the note until the jacket '
           '____________.', None, 'arrives',
           'Because the exchange is recorded against it.')])],
   speak=dict(
    part='Part 1', focus='Clothes you buy',
    intro='Describe what you actually do. Two or three sentences each '
          'time.',
    qs=['Do you enjoy shopping for clothes?',
        'Do you buy online or in shops?',
        'How often do you buy something new?',
        'Do you keep clothes for a long time?'],
    shape=[('answer', 'I do not enjoy it, which is why I do it twice '
            'a year and buy several things at once.'),
           ('support', 'I buy in shops rather than online, mostly '
            'because returning things is the part I hate.'),
           ('follow-up', 'I keep things a long time: the coat I wear '
            'most is nine years old and has been repaired twice.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Returning something bought as a present',
         prompt='Somebody gave you an item of clothing that does not '
                'fit. Write to the shop. In your letter: explain the '
                'situation; say what you would like; ask what you need '
                'to provide.',
         instruct='  Write at least 110 words in about 20 minutes.',
         lines=13,
         model=[
          'Dear Sir or Madam,',
          'I was given a jacket bought from your shop in December, '
          'order number 88417. It is a size too small and I would like '
          'to exchange it for the next size in the same colour.',
          'The jacket has not been worn and the label is still '
          'attached. I do not have a receipt, because it was a '
          'present, but the person who bought it has given me the '
          'delivery note.',
          'Could you tell me whether the delivery note is enough, and '
          'whether the twenty-eight day period runs from the date of '
          'purchase or the date of delivery? If the larger size is not '
          'in stock, I am happy to wait for it to be ordered.',
          'Yours faithfully,',
          'S. Marchetti'],
         notes=['The order number is given in the first sentence, '
                'which is what lets a shop find the sale.',
                'The condition of the item is stated before anything '
                'is asked for, because it decides the answer.',
                'The two questions are the two things a shop would '
                'otherwise have to write back about.'],
         criterion=[('Order details and situation given first',
                     'Task Achievement'),
                    ('The condition of the item stated', 'Task '
                     'Response'),
                    ('Questions that anticipate the reply', 'Task '
                     'Achievement'),
                    ('Formal register', 'Coherence and Cohesion')])],
   gram=dict(
    point='Reporting a request: ask somebody to, ask whether',
    explain='Use ask somebody to do for a request and ask whether for '
            'a question.',
    examples=['I asked them to exchange the jacket.',
              'She asked whether the note was enough.',
              'They asked me to keep the label on.',
              'He asked when the item would arrive.'],
    items=[('"Please exchange it." (I / ask them)',
            'I asked them to exchange it.'),
           ('"Is the note enough?" (she / ask)',
            'She asked whether the note was enough.'),
           ('"Keep the label on." (they / ask me)',
            'They asked me to keep the label on.'),
           ('"When will it arrive?" (he / ask)',
            'He asked when it would arrive.'),
           ('"Do not wear it." (they / ask me)',
            'They asked me not to wear it.')],
    task='Write each sentence as reported speech.'),
   vocab=[('amount', 'a quantity'),
          ('opposite', 'completely different; facing'),
          ('required', 'needed or demanded'),
          ('obvious', 'easy to see or understand'),
          ('disappear', 'to stop being visible or to go away'),
          ('task', 'a piece of work to be done'),
          ('created', 'made or brought into existence'),
          ('useless', 'of no use'),
          ('software', 'the programs a computer runs')],
   expr=[('It was a present.', 'explaining why there is no receipt'),
         ('An exchange is fine.', 'accepting an option'),
         ('Is there anything to pay?', 'checking for extra cost'),
         ('Keep it until you are sure.', 'practical advice')],
   trans=['and', 'then', 'but', 'so']),

  dict(
   sub='Clothes for work and clothes for home',
   step=2,
   read=[
    dict(heading='Should there be a uniform?',
         kind='Short article', task='Matching information',
         band='gt_work', qtype='Questions 12-17',
         paras=[
          'Arguments about uniforms at work are usually arguments about '
          'two different things at once, and separating them makes the '
          'question easier. The first is practical: does the job '
          'require particular clothing for safety or identification? '
          'Where the answer is yes, there is little to discuss, and '
          'where it is no, the practical argument has nothing left to '
          'say.',
          'The second is about cost, and it runs in both directions. A '
          'uniform is an expense if the worker buys it, and a saving if '
          'the employer provides it, because the worker then does not '
          'need a separate set of clothes for work. Surveys of '
          'lower-paid workers consistently find that a provided uniform '
          'is popular for exactly this reason, which surprises people '
          'who think of uniforms as something imposed.',
          'The third strand is the one that causes the arguments and is '
          'rarely stated. A dress code is a rule about how a person '
          'looks, and rules about appearance affect people unequally. '
          'What counts as smart is learned at home, so a vague code '
          'penalises those who learned different conventions, while a '
          'specific one, however dull, treats everybody the same.'],
         items=[
          ('How many strands does the writer separate?', None,
           'three', 'Practical, cost, and appearance.'),
          ('Where a job requires clothing for safety, there is little '
           'to ____________.', None, 'discuss',
           'The practical argument settles it.'),
          ('A uniform is a saving if the ____________ provides it.',
           None, 'employer',
           'Because no separate work clothes are needed.'),
          ('Which group finds a provided uniform popular?',
           ['managers', 'customers', 'lower-paid workers',
            'young workers'], 2,
           'Surveys find this consistently.'),
          ('What counts as smart is learned at ____________.', None,
           'home', 'Which is why a vague code is unequal.'),
          ('A ____________ code treats everybody the same, however '
           'dull.', None, 'specific',
           'Unlike a vague one, the writer argues.')])],
   listen=[
    dict(heading='Two colleagues on the dress code', part='Part 3',
         task='A discussion between two colleagues', band='l3',
         qtype='Questions 18-23',
         script=[
          ('Manager', 'You both replied to the dress code '
           'consultation and you disagreed. Tell me why.'),
          ('Dan', 'I want no code at all. We do not meet customers and '
           'nobody can see us.'),
          ('Rita', 'And I want a specific one, which sounds like the '
           'opposite and is not, because what I am against is the '
           'current code.'),
          ('Manager', 'Which says smart casual.'),
          ('Rita', 'Which means nothing and therefore means whatever '
           'the person reviewing you thinks it means. I have watched '
           'two people in three years be told they looked '
           'unprofessional, and both of them were wearing what half the '
           'office wears.'),
          ('Dan', 'That is a strong point and it is an argument for '
           'specificity rather than for no rule.'),
          ('Rita', 'It is. I would take a list over a vibe every '
           'time.'),
          ('Manager', 'Dan, does that change your position?'),
          ('Dan', 'Partly. I still think no code is best for a team '
           'nobody sees. But if there is to be one, I would rather it '
           'were written down, because what Rita is describing is the '
           'worst of both.'),
          ('Rita', 'Then we agree on the ranking and disagree about '
           'the top of it.'),
          ('Manager', 'That I can work with. Write it as a ranking and '
           'I will take it to the meeting.')],
         items=[
          ('Dan wants ____________ code at all.', None, 'no',
           'Because the team does not meet customers.'),
          ('Rita wants a ____________ code.', None, 'specific',
           'Which sounds like the opposite of Dan’s view.'),
          ('The current code says smart ____________.', None,
           'casual', 'Which Rita says means nothing.'),
          ('____________ people in three years were told they looked '
           'unprofessional.', None, 'Two',
           'Both wearing what half the office wears.'),
          ('Rita says she would take a list over a ____________.',
           None, 'vibe', 'She would take a list every time.'),
          ('They agree on the ____________ and disagree about the top '
           'of it.', None, 'ranking',
           'Which the manager says she can work with.')])],
   speak=dict(
    part='Part 2', focus='Clothes you wear for different occasions',
    longturn=[('I am going to talk about the clothes I wear for a particular '
               'occasion. The occasion is a job interview.'),
              ('An interview in my field is usually an hour, in an office, '
               'with two or three people on the other side of a table, and it '
               'is the only hour in which a stranger decides something '
               'important about you.'),
              ('What I wear is a dark blue suit, a plain shirt with no '
               'pattern, and leather shoes that I clean the night before. I do '
               'not wear anything that makes a noise or that I might play '
               'with, because I know I do that when I am nervous.'),
              ('How I decided took two bad experiences. At the first interview '
               'I ever had, I wore a jacket that did not match the '
               'trousers, and I spent the hour aware of it instead of '
               'listening to the questions. At the second I wore a new '
               'shirt that was too tight. So what I learned is that '
               'the purpose of interview clothes is not to impress '
               'anybody. It is to be the thing you think about least '
               'in the room, and anything new, tight or unusual fails '
               'that test however good it looks.')],
    intro='One minute, four lines. Be concrete about one situation.',
    qs=['Describe the clothes you wear for a particular occasion.',
        'Say what the occasion is.',
        'Say what you wear and why.',
        'Say how you decided.'],
    shape=[('answer', 'The clothes I think about most are the ones I '
            'wear for job interviews.'),
           ('support', 'I wear the same jacket and shirt every time, '
            'which I bought for that purpose.'),
           ('support', 'I chose them because they are plain enough not '
            'to be noticed, which is what I want.'),
           ('follow-up', 'I decided after an interview where I was '
            'uncomfortable all morning and could not stop thinking '
            'about it.')]),
   write=[
    dict(task='Task 2',
         heading='Should employers be allowed to tell staff what to '
                 'wear?',
         prompt='Some people think employers should be able to set '
                'rules about clothing at work. Others think this is '
                'unnecessary. Discuss both views and give your own '
                'opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('A specific code or none, but never a vague one',
               [('The case for rules',
                 ['safety and identification settle it in some jobs',
                  'and a provided uniform is a saving for lower-paid '
                  'staff']),
                ('The case against',
                 ['in a job nobody sees, appearance affects nothing',
                  'and a rule about looks is a rule about the '
                  'person']),
                ('Why vagueness is the real problem',
                 ['smart casual means whatever the reviewer thinks',
                  'so it penalises people who learned different '
                  'conventions'])]),
         model=[
          'Whether an employer may set rules about clothing is three '
          'questions wearing one coat, and the argument improves as '
          'soon as they are separated.',
          'Some rules are not really about appearance at all. Where a '
          'job involves machinery or where the public must be able to '
          'identify staff, the clothing is equipment and the argument '
          'ends there. A provided uniform also saves money for '
          'lower-paid workers, who otherwise need a second set of '
          'clothes, and surveys find it is popular with them for that '
          'reason.',
          'Against that, in a job where nobody sees the worker, a rule '
          'about appearance affects nothing except the worker. It is a '
          'rule about the person rather than about the work, and an '
          'employer who cannot say what it achieves should not have '
          'it.',
          'What decides the matter for me is the form the rule takes. '
          'A vague code such as "smart casual" means whatever the '
          'person reviewing you thinks it means. What counts as smart '
          'is learned at home, so a vague rule quietly penalises people '
          'who grew up with different conventions, while a specific '
          'list, however unexciting, applies equally to everybody.',
          'So my position is that an employer should have a specific '
          'code or no code, and that the common middle option is the '
          'worst of the three.'],
         notes=['The opening sentence does the separating work that '
                'the rest of the answer depends on.',
                'The strongest paragraph is the third-from-last, which '
                'explains why a vague rule is unequal rather than '
                'merely annoying.',
                'The conclusion ranks three options rather than '
                'choosing between two.'],
         criterion=[('The question separated into parts', 'Task '
                     'Response'),
                    ('Both views discussed', 'Task Response'),
                    ('An argument about form rather than principle',
                     'Task Achievement'),
                    ('Accurate concessive and relative clauses',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Obligation and permission: must, have to, be allowed to',
    explain='Be allowed to is the passive-sounding form of let. Have '
            'to shows an outside rule; must often shows the '
            'speaker’s own.',
    examples=['Staff have to wear a badge.',
              'Nobody is allowed to wear open shoes.',
              'You must keep the label on.',
              'We are not allowed to change the rule.'],
    items=[('Staff (have to) wear a badge.',
            'Staff have to wear a badge.'),
           ('Nobody (be allowed) wear open shoes.',
            'Nobody is allowed to wear open shoes.'),
           ('You (must) keep the label on.',
            'You must keep the label on.'),
           ('We (not be allowed) change the rule.',
            'We are not allowed to change the rule.'),
           ('Visitors (have to) sign in.',
            'Visitors have to sign in.')],
    task='Write each sentence with the right form.'),
   vocab=[('predicted', 'said in advance what would happen'),
          ('printing', 'making copies with a machine'),
          ('dying', 'coming to the end of life'),
          ('process', 'a series of steps'),
          ('regret', 'to feel sorry about something'),
          ('arranged', 'organised or planned'),
          ('pretending', 'acting as if something were true'),
          ('electricity', 'power carried by wires'),
          ('confirmed', 'said definitely that something is true')],
   expr=[('That sounds like the opposite and is not.',
          'correcting an apparent disagreement'),
         ('It means whatever the reviewer thinks it means.',
          'criticising a vague rule'),
         ('I would take a list over a vibe.',
          'preferring the specific'),
         ('We agree on the ranking.', 'locating partial agreement')],
   trans=['also', 'too', 'and', 'but']),

  dict(
   sub='Where clothes come from',
   step=3,
   read=[
    dict(heading='The journey of a cotton shirt',
         kind='Short factual article',
         task='Flow-chart completion and matching',
         band='acad', qtype='Questions 24-30',
         paras=[
          'A cotton shirt on a shelf in Europe has usually travelled '
          'further than the person buying it has ever travelled, and '
          'has been through at least four countries. The cotton is '
          'grown in one, spun into thread in a second, woven into cloth '
          'and dyed in a third, and cut and sewn in a fourth. Each '
          'stage goes where it is cheapest for that stage, not where it '
          'is cheapest overall.',
          'The reason the stages separate is that they need different '
          'things. Spinning and weaving are done by machines and need '
          'reliable electricity and capital; they go where power is '
          'steady. Cutting and sewing are still done by hand, because '
          'cloth is floppy and no machine handles it well, so those '
          'stages go where wages are lowest. The migration of the work '
          'between countries has happened several times for that '
          'reason alone.',
          'The shirt is then shipped, and shipping is the part people '
          'overestimate. Moving a shirt from Asia to Europe by sea '
          'produces less than a tenth of the emissions created by '
          'growing and making it. The real cost is in the water and '
          'energy used in growing cotton and dyeing cloth, which '
          'happens before the shirt starts moving at all.',
          'Knowing the stages changes what a shopper can usefully do. '
          'Buying a shirt made nearer home moves one stage of '
          'production, usually the sewing, and leaves the larger costs '
          'where they were. Buying fewer shirts and keeping them '
          'longer affects every stage at once, which is why it is the '
          'advice that every honest summary reaches and almost no '
          'advertisement gives.'],
         items=[
          ('A cotton shirt has usually passed through at least '
           '____________ countries.', None, 'four',
           'Paragraph 1, one for each main stage.'),
          ('Each stage goes where it is cheapest for that '
           '____________.', None, 'stage',
           'Paragraph 1, rather than cheapest overall.'),
          ('Spinning and weaving go where ____________ is steady.',
           None, 'power',
           'Paragraph 2, because they are done by machine.'),
          (
           'Cutting and sewing stay manual because cloth is '
           '____________.', None, 'floppy',
           'Paragraph 2, so those stages follow low wages.'),
          ('Shipping produces less than a ____________ of the '
           'emissions of growing and making.', None, 'tenth',
           'Paragraph 3, which people overestimate.'),
          ('The real cost is in the water and energy used in growing '
           'and ____________.', None, 'dyeing',
           'Paragraph 3, before the shirt moves.'),
          ('Which action affects every stage at once?', None,
           'buying fewer shirts',
           'Paragraph 4, which advertisements do not say.')])],
   listen=[
    dict(heading='A talk on the clothing supply chain', part='Part 4',
         task='A talk to design students', band='l4',
         qtype='Questions 31-36',
         script=[
          ('Speaker', 'I want to correct the thing most people believe '
           'about clothes and distance, because it leads to the wrong '
           'decisions.'),
          ('Speaker', 'A shirt crosses four countries. Cotton grown in '
           'one, spun in another, woven and dyed in a third, cut and '
           'sewn in a fourth. People hear that and think the shipping '
           'is the problem. It is not, and it is not close.'),
          ('Speaker', 'Sea freight is extraordinarily efficient per '
           'item. Moving a shirt from Asia to Europe is under a tenth '
           'of the emissions of growing the cotton and dyeing the '
           'cloth. If you buy a locally sewn shirt made from cloth dyed '
           'the same way, you have changed almost nothing.'),
          ('Speaker', 'Where the cost really sits is water and energy '
           'at the dyeing stage, and in growing cotton in places where '
           'irrigation is required. Those are decisions made by the '
           'mill and the farm, not by the shop and not by you.'),
          ('Speaker', 'Which leaves one lever a shopper actually has, '
           'and it is dull: buy fewer things and keep them longer. '
           'Doubling the life of a garment halves everything in this '
           'talk, at a stroke, with no new technology.'),
          ('Speaker', 'For you as designers, the equivalent lever is '
           'repairability. A seam that can be restitched and a button '
           'that can be replaced do more than any claim printed on a '
           'label.')],
         items=[
          ('A shirt crosses ____________ countries.', None, 'four',
           'Growing, spinning, weaving and sewing.'),
          ('Sea freight is under a ____________ of the emissions of '
           'growing and dyeing.', None, 'tenth',
           'Which is why shipping is not the problem.'),
          ('The real cost sits in water and energy at the '
           '____________ stage.', None, 'dyeing',
           'And in growing cotton where irrigation is needed.'),
          ('Those decisions are made by the mill and the '
           '____________.', None, 'farm',
           'Not by the shop or the shopper.'),
          ('____________ the life of a garment halves everything in '
           'the talk.', None, 'Doubling',
           'With no new technology, the speaker says.'),
          ('For designers the equivalent lever is ____________.',
           None, 'repairability',
           'A seam that can be restitched, a button replaced.')])],
   speak=dict(
    part='Part 3', focus='How things are made',
    intro='Give the fact, then the conclusion you draw from it.',
    qs=['Should people know how their clothes are made?',
        'Is it reasonable to expect shoppers to check?',
        'What should companies be required to tell us?'],
    shape=[('answer', 'I think the useful knowledge is narrower than '
            'people assume.'),
           ('support', 'Shipping a shirt across the world is under a '
            'tenth of the cost of growing and dyeing it.'),
           ('support', 'So buying locally sewn clothes changes less '
            'than buying fewer of them.'),
           ('follow-up', 'What companies should have to state is water '
            'and energy at the dyeing stage, because that is where the '
            'decision actually is.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='The journey of a cotton shirt',
         figure=_SHIRT,
         prompt='The diagram shows the stages a cotton shirt passes '
                'through. Describe the process.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The diagram shows the six stages through which a cotton '
          'shirt passes, grouped into three phases and spread across '
          'four countries.',
          'The first phase is the raw material: cotton is grown and '
          'picked. In the second phase the fibre is spun into thread '
          'and the thread is woven into cloth.',
          'The third phase turns the cloth into a garment. It is cut to '
          'a pattern, the pieces are sewn together, and the finished '
          'shirt is shipped to a shop or a warehouse.',
          'The division into phases is the point of the diagram. The '
          'first two stages of making the shirt are done by machine and '
          'the later ones by hand, and that is why the process is '
          'divided between countries rather than completed in one.'],
         notes=['The three phases are used to organise the four '
                'paragraphs, and all six stages appear.',
                'The passive is used throughout, since the diagram '
                'names no actor.',
                'The final sentence explains the shape of the process, '
                'which is what the phases are there to show.'],
         criterion=[('All six stages covered', 'Task Achievement'),
                    ('The three phases used as structure',
                     'Coherence and Cohesion'),
                    ('A closing observation about the shape', 'Task '
                     'Response'),
                    ('The passive used throughout', 'Grammatical '
                     'Range and Accuracy')])],
   gram=dict(
    point='Reason and result in a process',
    explain='Use because and since for reasons, and which is why to '
            'attach a result to a whole clause.',
    examples=['Sewing is done by hand because cloth is floppy.',
              'Since power must be steady, weaving goes elsewhere.',
              'Wages differ, which is why the stages separate.',
              'The cloth is dyed first, so the colour is even.'],
    items=[('Sewing is done by hand. Cloth is floppy. (because)',
            'Sewing is done by hand because cloth is floppy.'),
           ('Power must be steady. Weaving goes elsewhere. (since)',
            'Since power must be steady, weaving goes elsewhere.'),
           ('Wages differ. The stages separate. (which is why)',
            'Wages differ, which is why the stages separate.'),
           ('The cloth is dyed first. The colour is even. (so)',
            'The cloth is dyed first, so the colour is even.'),
           ('Shipping is efficient. It is not the problem. (which is '
            'why)',
            'Shipping is efficient, which is why it is not the '
            'problem.')],
    task='Join each pair with the connector given.'),
   vocab=[('affected', 'changed or influenced'),
          ('disagree', 'to have a different opinion'),
          ('sickness', 'illness'),
          ('unlikely', 'probably not going to happen'),
          ('wages', 'money paid for work, usually weekly'),
          ('cupboard', 'a piece of furniture with shelves and doors'),
          ('candidates', 'people applying or standing for something'),
          ('diagnosis', 'the identifying of an illness'),
          ('vanish', 'to disappear suddenly')],
   expr=[('It is not, and it is not close.', 'rejecting a belief '
          'firmly'),
         ('You have changed almost nothing.',
          'describing an ineffective action'),
         ('One lever a shopper actually has.',
          'identifying what can be controlled'),
         ('At a stroke, with no new technology.',
          'describing a simple large gain')],
   trans=['first', 'next', 'then', 'finally']),

  dict(
   sub='Fashion that comes back',
   step=2,
   read=[
    dict(heading='Why old styles return',
         kind='Short article', task='Matching information',
         band='gt_work', qtype='Questions 37-42',
         paras=[
          'Styles return on a cycle of roughly twenty to thirty years, '
          'and the length of that cycle is not a coincidence. It is '
          'about the age of the people making the decisions. A designer '
          'of thirty-five is drawing on what looked exciting when they '
          'were ten, and a buyer of the same age recognises it without '
          'knowing why.',
          'The second reason is that a style has to be out of fashion '
          'long enough to stop looking merely old. Clothes from five '
          'years ago look wrong; clothes from twenty-five years ago '
          'look like a decision. Anything in between is in the gloomy '
          'middle where nothing can be sold.',
          'The third reason is practical and is the one the industry '
          'talks about least. Reviving a style is cheaper and safer '
          'than inventing one. The patterns exist, the photographs '
          'exist, and the risk is lower because somebody has already '
          'proved that people will wear it. What is presented as a '
          'creative decision is often a decision about risk, which is '
          'not an insult: every industry does this and only this one is '
          'expected to pretend otherwise.'],
         items=[
          ('Styles return on a cycle of about ____________ to thirty '
           'years.', None, 'twenty',
           'Which the writer says is not a coincidence.'),
          ('A designer of thirty-five draws on what excited them at '
           '____________.', None, 'ten',
           'Which explains the length of the cycle.'),
          ('Clothes from five years ago look ____________.', None,
           'wrong', 'While clothes from twenty-five look like a '
           'decision.'),
          ('What is the period in between called?', None,
           'the gloomy middle', 'The years where nothing can be sold.'),
          ('Reviving a style is cheaper and ____________ than '
           'inventing one.', None, 'safer',
           'Because the patterns and photographs exist.'),
          ('What is presented as a creative decision is often a '
           'decision about ____________.', None, 'risk',
           'Which the writer says is not an insult.')])],
   listen=[
    dict(heading='A fashion historian on cycles', part='Part 2',
         task='One speaker explaining a pattern', band='l2',
         qtype='Questions 43-48',
         script=[
          ('Speaker', 'I am going to explain why your parents’ '
           'clothes are in the shops, and the explanation has nothing '
           'to do with taste.'),
          ('Speaker', 'First, the people deciding. A designer is '
           'typically between thirty and forty-five. The images that '
           'formed them are from when they were children, which is '
           'twenty-five to thirty-five years earlier. That alone would '
           'produce a cycle of about the length we observe.'),
          ('Speaker', 'Second, a style has to be properly dead before '
           'it can come back. Something five years old looks like a '
           'mistake. Something twenty-five years old looks like a '
           'choice. The years in between are commercially useless and '
           'the trade knows it.'),
          ('Speaker', 'Third, and the industry says this least '
           'willingly: a revival is low risk. The pattern exists, the '
           'photographs exist, and somebody has already demonstrated '
           'that people will buy it. Reviving is cheaper than '
           'inventing, and when margins are thin, cheaper wins.'),
          ('Speaker', 'None of this is cynical. Publishing does it, '
           'film does it, and nobody is embarrassed. Fashion is '
           'unusual only in presenting every decision as '
           'inspiration.'),
          ('Speaker', 'The useful prediction: look at what was popular '
           'about twenty-five years ago and is not yet back.')],
         items=[
          ('A designer is typically between thirty and ____________.',
           None, 'forty-five',
           'So the images that formed them are decades old.'),
          ('Something five years old looks like a ____________.',
           None, 'mistake',
           'While something twenty-five years old looks like a '
           'choice.'),
          ('The years in between are commercially ____________.',
           None, 'useless', 'And the trade knows that perfectly well.'),
          ('A revival is low ____________ because the pattern '
           'exists.', None, 'risk',
           'And somebody has proved people will buy it.'),
          ('The speaker says fashion is unusual in presenting every '
           'decision as ____________.', None, 'inspiration',
           'Although other industries do the same thing.'),
          ('To predict the next revival, look at what was popular '
           'about ____________ years ago.', None, 'twenty-five',
           'And has not yet come back into fashion.')])],
   speak=dict(
    part='Part 3', focus='Fashion and change',
    intro='Explain the mechanism before giving an opinion.',
    qs=['Why do fashions change?',
        'Do people follow fashion less than they used to?',
        'Is it a waste of money to buy fashionable clothes?'],
    shape=[('answer', 'Mostly because the people deciding are drawing '
            'on what they saw as children.'),
           ('support', 'A designer of thirty-five is reusing images '
            'from twenty-five years earlier, which sets the length of '
            'the cycle.'),
           ('support', 'Reviving is also cheaper and safer than '
            'inventing, which matters when margins are thin.'),
           ('follow-up', 'So I would not call it a waste, but I would '
            'say it is a less creative industry than it presents '
            'itself as being.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Spending on clothes as a share of income',
         figure=_SPEND,
         prompt='The graph shows spending on clothes as a share of '
                'household spending in three countries. Describe the '
                'graph and compare the countries.',
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=17,
         model=[
          'The graph shows what share of household spending went on '
          'clothes in three countries between 1980 and 2024.',
          'All three fell, but by very different amounts. Country B '
          'began highest at eleven point two per cent and ended at four '
          'point eight, a fall of six and a half points. Country A fell '
          'from eight point four to three point six, and ended lowest '
          'of the three.',
          'Country C changed least, from six per cent to four point '
          'five, a fall of only one and a half points.',
          'The three countries were four and a half points apart in '
          '1980 and about one point apart in 2024, so they have become '
          'much more alike. The country that started lowest, Country C, '
          'is now the highest of the three.'],
         notes=['The shared direction is given first and the '
                'differences second, which is the right order for '
                'three falling lines.',
                'The crossing is identified: the lowest line in 1980 '
                'is the highest in 2024.',
                'The spread is calculated at both ends, which turns '
                'three descriptions into one comparison.'],
         criterion=[('All three lines with start and end figures',
                     'Task Achievement'),
                    ('The crossing identified', 'Task Response'),
                    ('The change in spread calculated', 'Task '
                     'Response'),
                    ('Decimals and points written correctly',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Approximation: about, roughly, just under, nearly',
    explain='Use these before a figure to show it is not exact. Just '
            'under and just over are precise about the direction.',
    examples=['It fell by roughly six points.',
              'Spending is just under five per cent.',
              'Nearly half the fall happened before 1995.',
              'The cycle is about twenty-five years.'],
    items=[('It fell by (roughly) six points.',
            'It fell by roughly six points.'),
           ('Spending is (just under) five per cent.',
            'Spending is just under five per cent.'),
           ('(nearly) half the fall came before 1995.',
            'Nearly half the fall came before 1995.'),
           ('The cycle is (about) twenty-five years.',
            'The cycle is about twenty-five years.'),
           ('The gap is (just over) one point.',
            'The gap is just over one point.')],
    task='Write each sentence with the approximation given.'),
   vocab=[('encouraged', 'given support or confidence'),
          ('tractor', 'a vehicle used on farms'),
          ('beforehand', 'in advance'),
          ('curricula', 'the subjects taught in a course'),
          ('economists', 'people who study how money and goods move'),
          ('fifty-five', 'the number 55'),
          ('fifty-six', 'the number 56'),
          ('gloomiest', 'most dark or most hopeless')],
   expr=[('It has nothing to do with taste.',
          'rejecting the obvious explanation'),
         ('Properly dead before it can come back.',
          'describing a fashion cycle'),
         ('When margins are thin, cheaper wins.',
          'explaining a commercial decision'),
         ('It is not a mysterious process.', 'demystifying an '
          'industry')],
   trans=['after that', 'before', 'then', 'finally']),

  dict(
   sub='Fast fashion and waste',
   step=3,
   read=[
    dict(heading='Three answers to a mountain of clothes',
         kind='Short factual article',
         task='Matching information and short answer',
         band='acad', qtype='Questions 49-55',
         paras=[
          'Households in rich countries now buy roughly twice as many '
          'garments a year as they did in 2000 and keep each one about '
          'half as long. The result is a quantity of unwanted clothing '
          'that no existing system was built for, and three answers '
          'are usually proposed. Each of them does something, and only '
          'one of them addresses the quantity.',
          'The first is recycling. It sounds like the obvious answer '
          'and it is the weakest, because most garments are mixtures of '
          'fibres and no cheap process separates them. A cotton shirt '
          'with a little stretch fibre in it cannot be turned back into '
          'cotton. Most clothing collected for recycling is therefore '
          'shredded into low-value material or burned for energy, which '
          'is better than a hole in the ground and is not what the word '
          'suggests.',
          'The second is reuse: selling or giving garments to somebody '
          'else. This works well and is limited by demand rather than '
          'by supply. The second-hand market in several countries is '
          'now saturated. A significant share of donated clothing is '
          'shipped abroad, where some of it is worn and some of it '
          'arrives in places with no system for what cannot be sold. '
          'Reuse postpones the problem and moves it, which is a delay '
          'rather than a solution.',
          'The third is the only one that reduces the quantity: buying '
          'fewer things and keeping them longer. Doubling the life of '
          'a garment halves its share of every cost in this article. '
          'It requires no technology and no new arrangement, which is '
          'why it appears in every honest summary and in almost no '
          'commercial campaign. An industry cannot be expected to '
          'advertise against its own volume, and that is not '
          'hypocrisy; it is a reason to expect the push to come from '
          'somewhere else.'],
         items=[
          ('Households buy roughly ____________ as many garments as '
           'in 2000.', None, 'twice',
           'Paragraph 1, and keep each about half as long.'),
          (
           'Recycling is weak because most garments are mixtures of '
           '____________.', None, 'fibres',
           'Paragraph 2: no cheap process separates them.'),
          ('Most collected clothing is shredded or ____________ for '
           'energy.', None, 'burned',
           'Paragraph 2, which is not what recycling suggests.'),
          ('Reuse is limited by ____________ rather than by supply.',
           None, 'demand',
           'Paragraph 3: the second-hand market is saturated.'),
          ('Which answer reduces the quantity?',
           ['recycling', 'buying fewer and keeping longer', 'reuse',
            'shipping abroad'], 1,
           'Paragraph 4, the only one that does.'),
          ('____________ the life of a garment halves its share of '
           'every cost.', None, 'Doubling',
           'Paragraph 4, with no technology needed.'),
          ('The writer says an industry cannot advertise against its '
           'own ____________.', None, 'volume',
           'Paragraph 4, and calls that a reason rather than '
           'hypocrisy.')])],
   listen=[
    dict(heading='A campaigner and a retailer disagree', part='Part 3',
         task='A discussion between two speakers', band='l3',
         qtype='Questions 56-61',
         script=[
          ('Chair', 'You two have argued in public before. Keep it '
           'specific.'),
          ('Ada', 'My position is that recycling schemes in shops are '
           'advertising rather than policy. Under a tenth of what is '
           'collected becomes new clothing.'),
          ('Joel', 'The figure is right and the conclusion is wrong. '
           'The schemes exist because customers ask for them. If I '
           'stop, they do not buy less; they put it in the bin.'),
          ('Ada', 'That is an argument for honesty in how they are '
           'described, not for continuing to describe them as '
           'recycling.'),
          ('Joel', 'I would accept a requirement about wording. I '
           'would accept it today, in fact, and so would most of my '
           'competitors, because none of us can move first.'),
          ('Chair', 'That is interesting. Say more.'),
          ('Joel', 'Any retailer who labels honestly while others do '
           'not simply looks worse. A rule applied to everybody removes '
           'that problem, which is why industries sometimes ask to be '
           'regulated.'),
          ('Ada', 'Then we agree on something I did not expect to '
           'agree on.'),
          ('Joel', 'Where we still disagree is volume. You want us to '
           'sell less. I do not know how to run a company on that '
           'basis, and I am not going to pretend I do.'),
          ('Ada', 'At least that is an honest place to stop.')],
         items=[
          ('Ada says under a ____________ of collected clothing '
           'becomes new clothing.', None, 'tenth',
           'Which Joel accepts as accurate.'),
          ('Joel says the schemes exist because ____________ ask for '
           'them.', None, 'customers',
           'And that without them people use the bin.'),
          ('Ada says that is an argument for ____________ in how they '
           'are described.', None, 'honesty',
           'Rather than for continuing as they are.'),
          ('Joel would accept a requirement about ____________.',
           None, 'wording', 'And says competitors would too.'),
          ('He says no retailer can move ____________.', None,
           'first', 'Because an honest label looks worse alone.'),
          ('They still disagree about ____________.', None, 'volume',
           'Which Joel says he cannot run a company against.')])],
   speak=dict(
    part='Part 3', focus='Waste and responsibility',
    sounds=[('Say your word endings. Shoes, clothes and trousers all end in a '
             'z sound, and shirts and jackets end in s. The sound before '
             'decides.'),
            ('Say these three and keep them different: I wear, he wears, I '
             'wore.'),
            ('Clothes words put the stress at the front: JACket, TROUsers, '
             'COLlar. Occasion and material take the second part.'),
            ('Practise one sentence: I wear a dark blue suit and a plain shirt '
             'with no pattern.'),
            ('Record yourself describing what you wear for an occasion. Count '
             'the plural endings you dropped.')],
    intro='Say where responsibility sits and why, then what you would '
          'require.',
    qs=['Who is responsible for clothing waste?',
        'Should shops be required to take back what they sell?',
        'Can individual choices make a difference?'],
    shape=[('answer', 'Responsibility is shared, but the lever each '
            'party holds is different.'),
           ('support', 'A shopper can double the life of a garment, '
            'which halves its share of every cost.'),
           ('support', 'A company cannot advertise against its own '
            'volume, so that push has to come from rules.'),
           ('follow-up', 'I would start by requiring honest wording on '
            'collection schemes, since under a tenth becomes new '
            'clothing.')]),
   write=[
    dict(task='Task 2',
         heading='Should clothing companies be responsible for what '
                 'they sell after it is thrown away?',
         prompt='Some people think clothing companies should be '
                'responsible for dealing with their products when they '
                'are thrown away. Others think this is the '
                'customer’s responsibility. Discuss both views '
                'and give your own opinion.',
         instruct='  Write at least 200 words in about 35 minutes.',
         lines=22, wband='essay',
         plan=('Make companies pay the disposal cost; leave the choice '
               'to customers',
               [('The case for company responsibility',
                 ['the company chose the mixed fibres that cannot be '
                  'separated',
                  'and the cost of dealing with that is currently paid '
                  'by councils']),
                ('The case for customer responsibility',
                 ['nobody made anybody buy twice as many clothes',
                  'and the only answer that reduces the amount is '
                  'buying less']),
                ('A charge at the point of sale answers both',
                 ['it puts the disposal cost on the product that '
                  'causes it',
                  'and leaves the buying decision where it has to '
                  'stay'])]),
         model=[
          'Clothing waste has grown faster than any system for dealing '
          'with it, and the argument about who should pay is genuinely '
          'difficult.',
          'There is a strong case for putting the responsibility on '
          'companies. A garment made from mixed fibres cannot be '
          'separated by any cheap process, and that was a decision made '
          'by the manufacturer, not by the person who bought the shirt. '
          'At present the cost of dealing with the result falls on '
          'local councils, which means it is paid by everybody '
          'including people who buy very little.',
          'The case on the other side is equally real. Nobody required '
          'households to buy twice as many garments as they did in '
          '2000 or to keep each one half as long. The only answer that '
          'reduces the quantity rather than moving it is buying less, '
          'and no company can make that decision for a customer.',
          'What follows, I think, is a charge collected at the point of '
          'sale and used to pay for disposal. It puts the cost on the '
          'product that creates it, which gives manufacturers a reason '
          'to design for separation. It raises the price slightly, '
          'which affects how much people buy. And it leaves the '
          'decision itself with the buyer, where it has to stay.',
          'That is not a complete answer, but it moves the cost to '
          'where the decisions are made, which no present system does.'],
         notes=['Each side is argued with a specific mechanism rather '
                'than a general sentiment.',
                'The proposal answers both arguments at once, which is '
                'what makes it a conclusion rather than a '
                'compromise.',
                'The final sentence admits the limits of the proposal, '
                'which strengthens it.'],
         criterion=[('Both views discussed with mechanisms',
                     'Task Response'),
                    ('A proposal that answers both', 'Task '
                     'Response'),
                    ('Limits of the proposal acknowledged',
                     'Coherence and Cohesion'),
                    ('Accurate passives and relative clauses',
                     'Grammatical Range and Accuracy')])],
   gram=dict(
    point='Expressing proportion: a tenth, twice as many, half as '
          'long',
    explain='Use a fraction with of, and twice or half with as plus '
            'the adjective plus as.',
    examples=['Under a tenth of it becomes new clothing.',
              'Households buy twice as many garments.',
              'They keep each one half as long.',
              'A significant share is shipped abroad.'],
    items=[('Under (a tenth) it becomes new clothing.',
            'Under a tenth of it becomes new clothing.'),
           ('Households buy (twice / many) garments.',
            'Households buy twice as many garments.'),
           ('They keep each one (half / long).',
            'They keep each one half as long.'),
           ('(a significant share) is shipped abroad.',
            'A significant share of it is shipped abroad.'),
           ('Doubling the life (halve) the cost.',
            'Doubling the life halves the cost.')],
    task='Write each sentence with the proportion given.'),
   vocab=[('headings', 'titles at the top of sections'),
          ('highest-scoring', 'getting the most points'),
          ('justified', 'shown to be reasonable'),
          ('nineteenth', 'number nineteen in an order'),
          ('requirements', 'things that are needed or demanded'),
          ('stationery', 'paper, pens and office supplies'),
          ('summarise', 'to give the main points briefly'),
          ('fifty-five-year-old', 'aged fifty-five')],
   expr=[('The figure is right and the conclusion is wrong.',
          'accepting data while rejecting an inference'),
         ('None of us can move first.',
          'explaining why an industry asks for rules'),
         ('I am not going to pretend I do.',
          'refusing to overclaim'),
         ('At least that is an honest place to stop.',
          'ending a disagreement well')],
   trans=['because', 'so', 'however', 'for example'])],

 technique=dict(
  title='The keyword trap, taken apart',
  body='Foundation 1 warned you about the keyword trap: the paragraph '
       'that contains all the words of the question and none of the '
       'answer. This page shows you how one is actually built, because '
       'knowing the construction is more useful than knowing the '
       'warning. The test writer starts from the answer, which is a '
       'sentence in some paragraph. They then write the question using '
       'different words for the same idea, which is the paraphrase you '
       'are supposed to find. That alone would be too easy, so they '
       'also place, somewhere else in the passage, a sentence that uses '
       'the question’s actual words about a different idea. The '
       'result is that the words of the question appear in one '
       'paragraph and the meaning of the question in another, and the '
       'candidate who searches for words finds the wrong one first. '
       'Now that you know the pattern, use it in reverse. Before '
       'searching, rewrite the question in your own words. If the '
       'question says "the main reason prices fall near the date", your '
       'version might be "why late rooms are cheap". You are now '
       'carrying the meaning rather than the words, and the decoy '
       'paragraph loses its power entirely. If you find a paragraph '
       'containing every word of the question, treat it as a warning '
       'rather than as an arrival.',
  panel=[('The writer starts from the answer',
          'Then paraphrases it into the question.'),
         ('The decoy is deliberate',
          'The question’s words appear elsewhere, about '
          'something else.'),
         ('Rewrite the question first',
          'In your own words, before you search.'),
         ('All the words together is a warning',
          'Not an arrival.')],
  qs=['What is this question asking, in my own words?',
      'Which paragraph has the words, and which has the idea?',
      'Did I search for words or for meaning?',
      'Is this paragraph the decoy?',
      'What was the paraphrase the writer used?'],
  task='In the cycle 5 passage, find for three questions the paragraph '
       'that contains the question’s words and the paragraph that '
       'contains the answer. Write down the paraphrase used in each '
       'case.'),

 outlining=dict(
  title='Outline to essay, then essay back to outline',
  body='This page closes a loop you have been working on since '
       'Foundation 1. First, write the essay from a given plan, adding '
       'nothing. Use the eleven-line plan for the cycle 5 question in '
       'this unit. Write it in thirty-five minutes, as a real Task 2, '
       'and stop when the plan runs out rather than when you think of '
       'something else. Second, put it away for a day. Third, take your '
       'own essay and reverse it: write out the plan it actually '
       'contains, not the plan you started from. Then compare the two. '
       'Where they differ, you have found the exact places where your '
       'writing wandered from your thinking, and those places are '
       'almost always the same three: a body paragraph that acquired a '
       'second idea halfway through, a concession that turned into a '
       'new argument, and a conclusion that introduced something not in '
       'the plan. Every candidate has a characteristic drift, and '
       'yours will be visible in one page of comparison. Once you know '
       'which of the three you do, you can watch for it, and it stops '
       'happening within about four essays.',
  frame=('Make companies pay the disposal cost; leave the choice to '
         'customers',
         [('The company chose the materials',
           ['mixed fibres cannot be separated by any cheap process',
            'and councils pay for the result, so everybody does']),
          ('The customer chose the quantity',
           ['nobody required households to buy twice as many garments',
            'and buying less is the only answer that reduces the '
            'amount']),
          ('A charge at the point of sale answers both',
           ['it gives manufacturers a reason to design for separation',
            'and leaves the buying decision where it has to stay'])]),
  qs=['Did I add anything that was not in the plan?',
      'Which body paragraph acquired a second idea?',
      'Did my concession turn into a new argument?',
      'Did the conclusion introduce something new?',
      'What is my characteristic drift?'],
  task='Write the cycle 5 essay from the plan above in thirty-five '
       'minutes. A day later, reverse your own essay into a plan and '
       'compare the two.',
  answers=['a second idea in a body paragraph is the commonest drift',
           'a concession that grows is the second commonest',
           'a new idea in the conclusion is the third',
           'everybody has one characteristic drift',
           'naming it stops it within about four essays']),

 candos=['I can exchange an item and understand what proof is needed',
         'I can separate three arguments that are usually mixed',
         'I can describe a six-stage process in three phases',
         'I can recognise how a keyword trap is built and avoid it',
         'I can compare my essay with the plan I wrote it from'],

 tip=('A keyword trap is built on purpose: the words of the question '
      'are placed in one paragraph and the meaning in another. Rewrite '
      'the question in your own words before you search, and the decoy '
      'loses its power.'))
