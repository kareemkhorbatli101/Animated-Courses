# -*- coding: utf-8 -*-
"""Unit 39 — Innovation, Patents and Ideas. Volume 4."""
from content._g import gaps

_GT, _GA = gaps(
    'A patent is not a reward for having an idea. It is a deal: twenty years of exclusive '
    'use in exchange for publishing how the thing w{orks}, so that anybody can build on it '
    'once the term exp{ires}. Understood that way, most arguments about patents become '
    'arguments about whether the deal is well pri{ced}. Twenty years for a new kind of '
    'bearing may be gener{ous} and twenty years for a drug that took fourteen years to test '
    'may be nothing like en{ough}.')

_ET, _EA = gaps(
    'The lone inventor is the most durable myth in the history of technology and one of the '
    'least support{ed} by the record. Almost every significant invention of the last two '
    'centuries was arrived at independently by two or more people within a few years, and '
    'frequently within a few mon{ths}, which tells you that the determining factor was not '
    'individual genius but the state of everything else. A device becomes thinkable when its '
    'component problems have already been sol{ved} elsewhere, and at that point it occurs to '
    'everybody competent who is looking in the right direc{tion}. The patent system is built '
    'on the opposite assumption. It awards the whole of a monopoly lasting two decades to '
    'whoever filed fi{rst}, which in a race between simultaneous inventors is often decided '
    'by we{eks}. Defenders of the system usually concede the point about simultan{eity} and '
    'argue '
    'that a sharp rule is still better than a vague one, because any attempt to apportion '
    'credit would produce litigation without end. That argument is strong and it is an '
    'argument about administr{ation}, not about desert. It is worth being clear which one is '
    'being made, because the system is routinely defended as though it rewarded '
    'contribut{ion}, and the people it rewards know perfectly well that it rewards '
    'spe{ed}.')

UNIT = dict(
    n=39, vol=4, level='B2',
    title='Innovation, Patents and Ideas',
    icons=['hammer', 'news', 'chart'],
    subs=['What a patent actually is', 'Simultaneous invention',
          'Who owns what a student makes'],
    grammar='Complex noun phrases',
    field='patent, prior art, licence',
    opener_line='B2 writing is compressed writing, and the main engine of compression in '
                'English is the noun phrase: a filing date, the first-to-file rule, a '
                'twenty-year exclusivity period. This unit teaches how to build them and how '
                'to stop before they collapse.',
    candos=[
        'I can build a complex noun phrase with modifiers before and after the noun.',
        'I can use a compound modifier with hyphens correctly.',
        'I can compress a clause into a noun phrase without losing the agent.',
        'I can recognise when a noun phrase has become unreadable.',
        'I can follow a talk that separates a legal argument from a moral one.',
        'I can write about a rule whose justification is administrative.',
    ],

    acad=[
        ('patent', 'a time-limited monopoly granted for a disclosed invention'),
        ('prior art', 'everything already known before a filing'),
        ('licence', 'permission to use something somebody else owns'),
        ('royalty', 'a payment per use or per sale'),
        ('infringement', 'use of a protected right without permission'),
        ('disclosure', 'making an invention public in the application'),
        ('novelty', 'the requirement of being genuinely new'),
        ('obviousness', 'the test that an invention must not be an easy step'),
        ('claim', 'the part of a patent defining what is protected'),
        ('assignee', 'the person or body to whom a right is transferred'),
        ('proprietary', 'owned and not freely available'),
        ('open source', 'released with permission to use and modify'),
        ('incremental', 'advancing in small steps'),
        ('trade secret', 'valuable information kept undisclosed'),
        ('exclusivity', 'the right to exclude others'),
        ('portfolio', 'a set of rights held together'),
        ('cross-licence', 'a mutual exchange of permissions'),
        ('monopoly', 'exclusive control of a market'),
    ],
    family=('invent', [
        ('invention', 'noun', 'the invention was filed twice in one month'),
        ('inventive', 'adjective', 'an inventive step over the prior art'),
        ('inventorship', 'noun', 'a dispute about inventorship, not ownership'),
    ]),
    collocs=[
        ('file for', 'to make a formal application'),
        ('build on', 'to develop further from'),
        ('come up with', 'to produce an idea'),
        ('sit on', 'to hold without using'),
        ('see off', 'to defeat a challenge'),
        ('tie up', 'to make unavailable'),
        ('in the public domain', 'free for anybody to use'),
        ('ahead of the field', 'further advanced than competitors'),
        ('by a matter of weeks', 'with only weeks between them'),
        ('on the face of the record', 'judging only by the documents'),
    ],
    stance=[
        ('on the face of the record', 'judging only by the documents'),
        ('it is tempting to suppose', 'the writer names a likely error'),
        ('as it happens', 'the writer adds a fact that complicates'),
        ('there is no question that', 'the writer marks something as certain'),
        ('one might object that', 'the writer raises a counterargument'),
    ],
    nuance=[
        ('invention / innovation', 'the idea / getting it used'),
        ('patent / trade secret', 'disclose and own / conceal and hope'),
        ('inventorship / ownership', 'who made it / who holds the right'),
    ],
    vocab_talk=[
        'Describe something invented twice. Why did that happen?',
        'Is a patent a reward or a bargain? Explain the difference.',
        'Should a university own what a student invents? Why?',
        'What is the strongest argument for a simple rule you think is unfair?',
    ],
    again=['filing date', 'grace period', 'examiner', 'opposition',
           'standard-essential patent', 'patent pool', 'evergreening', 'compulsory licence'],

    r1=dict(
        sub='What a patent actually is',
        skill=('Completing nouns, adjectives and the verbs between them',
               ['Legal and technical writing stacks nouns: disclosure, exclusivity, '
                'administration.',
                'Watch for -ous and -ed adjectives: generous, supported, solved.',
                'Where a gap follows a modal, it needs a bare infinitive whatever the '
                'surrounding nouns look like.']),
        guided_text=_GT, guided=_GA,
        guided_hint='w---- is works — the slot follows how the thing, so it needs a '
                    'present-tense verb.',
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='Simultaneous invention',
        skill=('Reading a regulation against a timeline',
               ['Where a rule turns on dates, build the timeline before you read the '
                'argument.',
                'A grace period, a priority date and a publication date are three different '
                'things.',
                'The decisive fact is usually which event came first, not which was more '
                'important.']),
        docs=[
            ('notice', 'University Technology Transfer Office · student inventions', [
                '# What the University claims',
                '* Inventions made using University facilities, funding or supervised project '
                'time.',
                '* A 60-day disclosure obligation from the date an invention is reduced to '
                'practice.',
                '# What the University does not claim',
                '* Inventions made entirely outside project time and without University '
                'resources.',
                '* Anything already in the public domain at the date of disclosure.',
                '# Revenue sharing',
                '* Net licensing revenue is shared 40 per cent to the inventors where '
                'disclosure was timely, and 20 per cent where it was not.',
            ], 'notice'),
            ('email', 'p.sundaresan@tto.uni.ac.uk', 't.okafor@student.uni.ac.uk',
             '06/11/2028', 'Your disclosure — the timing, and some bad news about Dresden', [
                 'Dear Ms Okafor,',
                 '',
                 'Thank you for the disclosure and for the lab notebook scans, which are',
                 'dated and unusually thorough.',
                 '',
                 'Two things, one procedural and one substantive. The procedural one first.',
                 'Your notebook shows the device working on 12 August. You disclosed on 4',
                 'November, which is 84 days, so the timely-disclosure tier does not apply',
                 'and the inventor share falls to 20 per cent. I am required to apply that',
                 'and I am not going to pretend I think it is a good rule for a student who',
                 'spent the intervening period finishing a dissertation.',
                 '',
                 'The substantive one is worse. A group in Dresden filed on essentially the',
                 'same mechanism on 29 September. On the face of the record they are ahead',
                 'of us by five weeks and the jurisdiction is first-to-file, so there is no',
                 'route by which your August notebook helps.',
                 '',
                 'What is still available: their claims cover a rotary configuration only.',
                 'Your notebook shows the linear variant on 3 September, which their filing',
                 'does not touch and which your own account says is the commercially useful',
                 'one. That is worth filing and I would move quickly.',
                 '',
                 'Dr Sundaresan',
             ]),
        ],
        guided=[
            ('What does the University claim?',
             ('All student inventions', 'Inventions using its facilities, funding or project time',
              'Only funded research', 'Nothing from students'), 1,
             'The three triggers are listed together and any one of them is enough.'),
            ('What is the disclosure obligation?',
             ('30 days', '60 days from reduction to practice',
              '90 days', 'There is none'), 1,
             'The clock runs from the date the invention is reduced to practice, not from '
             'the idea.'),
            ('What is the inventor share where disclosure is late?',
             ('40 per cent', '20 per cent', 'Nothing', 'Unchanged'), 1,
             'The policy halves the share rather than removing it, which is why the officer '
             'applies it rather than refusing the case.'),
            ('What does the University not claim?',
             ('Supervised project work', 'Inventions made outside project time without its resources',
              'Anything disclosed late', 'Rotary mechanisms'), 1,
             'That exclusion and the public-domain exclusion are listed together.'),
        ],
        exam=[
            ('Why does the inventor share fall to 20 per cent?',
             ('The invention was unfunded', 'The disclosure was 84 days after reduction to practice',
              'Dresden filed first', 'The device was not novel'), 1,
             'Eighty-four days against a sixty-day obligation is the whole procedural '
             'point.'),
            ('What does the officer say about applying the rule?',
             ('It is clearly correct', 'He is required to apply it and does not think it a good rule here',
              'It may be waived', 'It is under appeal'), 1,
             'He names the dissertation as the reason the rule fits badly in this case.'),
            ('What happened in Dresden?',
             ('A paper was published', 'A filing was made on the same mechanism on 29 September',
              'A licence was granted', 'A patent was refused'), 1,
             'Five weeks ahead of the University in a first-to-file jurisdiction is what '
             'makes it decisive.'),
            ('Why does the August notebook not help?',
             ('It is undated', 'The jurisdiction is first-to-file',
              'It shows the wrong device', 'It was not witnessed'), 1,
             'Priority goes to the filing date rather than to the date of invention.'),
            ('What do the Dresden claims cover?',
             ('Both configurations', 'The rotary configuration only',
              'The linear configuration only', 'Neither'), 1,
             'That limitation is what leaves the student something to file.'),
            ('What does the student’s notebook show on 3 September?',
             ('The rotary variant', 'The linear variant',
              'A failed test', 'The first working device'), 1,
             'The officer adds that her own account calls this the commercially useful '
             'one.'),
            ('What is the officer’s advice?',
             ('Challenge the Dresden filing', 'File on the linear variant quickly',
              'Appeal the revenue share', 'Publish immediately'), 1,
             'It is the one route the Dresden claims leave open, which is why he says move '
             'quickly.'),
        ],
    ),

    r3=dict(
        sub='Who owns what a student makes',
        title='The Invention That Belongs to Nobody in Particular',
        words=298,
        paras=[
            'University invention policies are written as though the central difficulty were '
            'dishonesty, and it is actually attribution. It is tempting to suppose that a '
            'research group can say who invented what, and in a group of four working two '
            'years on one apparatus it usually cannot. The '
            'supervisor framed the problem, a postdoctoral researcher ruled out the obvious '
            'approach, a technician suggested the configuration that worked and a student '
            'built it and found out why it worked. There is no question that all four '
            'contributed, and no principled way to convert those contributions into '
            'percentages.',

            'Institutions have responded by writing rules that are administratively clean and '
            'substantively arbitrary: the named inventors are those listed on the filing, '
            'the filing is prepared by an office, and the office relies on whoever came to '
            'see it. On the face of the record this is a neutral procedure. As it happens this produces a mild and consistent bias towards senior '
            'staff, not because anybody intends it but because senior staff know the office '
            'exists, know the deadline, and are not finishing a dissertation during the '
            'sixty days in which the disclosure has to be made.',

            'One might object that the alternative is unworkable, and the objection is '
            'correct. A tribunal apportioning inventive contribution inside a research group '
            'would be slow, intrusive and probably worse than what we have. But what follows '
            'is not that the current rule is fair; it is that we have chosen a workable rule '
            'over a fair one, and '
            'that is a respectable choice which ought to be defended in its own terms. The '
            'institutions that describe their revenue-sharing formula as recognising '
            'contribution are not defending the choice. They are concealing it, and the '
            'people whose contribution goes unrecognised are the ones least able to say so.',
        ],
        skill=('Reading a passage that defends a rule and refuses its justification',
               ['An author may accept a rule as necessary and reject the reason officially '
                'given for it.',
                'Look for the sentence distinguishing a workable rule from a fair one.',
                'The final criticism is usually about language rather than policy.']),
        guided=[
            ('What does the author say the central difficulty is?',
             ('Dishonesty', 'Attribution', 'Funding', 'Delay'), 1,
             'Policies are written for the first and the real problem is the second.'),
            ('What is the author’s example meant to show?',
             ('That students are exploited', 'That four people genuinely contributed and cannot be ranked',
              'That supervisors do the work', 'That technicians are overlooked'), 1,
             'There is no question that all four contributed, and no principled way to '
             'convert that into percentages.'),
            ('How do institutions decide who the inventors are?',
             ('By tribunal', 'By who is listed on the filing prepared by an office',
              'By seniority', 'By contribution'), 1,
             'The office relies on whoever came to see it, which is the mechanism the '
             'paragraph exposes.'),
            ('What bias does the author say this produces?',
             ('Against students', 'A mild and consistent bias towards senior staff',
              'Towards technicians', 'None'), 1,
             'Knowing the office exists and not writing a dissertation during the sixty days '
             'is the explanation given.'),
        ],
        exam=[
            ('What objection does the author raise and accept?',
             ('That attribution does not matter', 'That the alternative would be unworkable',
              'That students rarely invent', 'That filings are rare'), 1,
             'A tribunal apportioning contribution would be slow, intrusive and probably '
             'worse.'),
            ('What conclusion does the author say follows?',
             ('The current rule is fair', 'A workable rule has been chosen over a fair one',
              'The rule should be abolished', 'Tribunals should be created'), 1,
             'The author calls that a respectable choice that ought to be defended in its own '
             'terms.'),
            ('What does the author object to in institutional language?',
             ('Its complexity', 'Describing the formula as recognising contribution',
              'Its vagueness', 'Its legal style'), 1,
             'The author says this conceals the choice rather than defending it.'),
            ('Who does the author say is least able to object?',
             ('Supervisors', 'Those whose contribution goes unrecognised',
              'Technology transfer offices', 'External examiners'), 1,
             'That is the closing sentence and the point the whole passage builds to.'),
            ('What does "as it happens" signal?',
             ('A coincidence', 'A complicating fact the author is adding',
              'A quotation', 'An uncertainty'), 1,
             'It introduces the bias as a consequence nobody intended rather than as an '
             'accusation.'),
            ('Why does the author say nobody intends the bias?',
             ('It is illegal', 'It follows from who knows the deadline and who is busy',
              'It is denied', 'It is recent'), 1,
             'The mechanism is informational and circumstantial rather than deliberate.'),
            ('Which would most weaken the second paragraph?',
             ('Evidence that offices are well funded',
              'Evidence that students and junior staff disclose at the same rate as senior staff',
              'Evidence that filings are increasing',
              'Evidence that revenue shares are generous'), 1,
             'The claimed bias depends entirely on differential rates of coming to the '
             'office.'),
            ('All of the following are stated EXCEPT:',
             ('Four people may all genuinely contribute',
              'A tribunal would probably be worse',
              'The current rule favours senior staff mildly',
              'The current rule recognises contribution accurately'), 3,
             'The author says institutions claiming this are concealing a choice rather than '
             'describing one.'),
            ('What is the author’s position on the current rule?',
             ('It should be abolished', 'It is defensible as workable and indefensible as fair',
              'It is fair', 'It is unimportant'), 1,
             'The whole third paragraph separates those two defences and accepts only the '
             'first.'),
        ],
    ),

    l1=dict(
        sub='What a patent actually is',
        caption='Two students after an intellectual property seminar',
        skill=('Hearing a definition corrected',
               ['A speaker correcting a definition will give the common one, then the '
                'accurate one.',
                'Listen for: it is not a reward, it is a deal.',
                'The items usually test what the accurate definition implies, not the words '
                'of it.']),
        warm=[
            ('Man: So a patent rewards you for having an idea?',
             ('It is a trade, not a reward.', 'Yes, exactly.',
              'About twenty years.', 'At the patent office.'), 0,
             'A so-is-it question answered by replacing the category rather than '
             'confirming.'),
            ('Woman: What does the inventor give up?',
             ('Secrecy — you have to publish how it works.', 'Nothing at all.',
              'About twenty years.', 'To the office.'), 0,
             'A what-do-you-give question answered with the consideration on the other '
             'side.'),
            ('Man: Is twenty years the right length?',
             ('It depends entirely on the field.', 'Yes, for everything.',
              'About fourteen years.', 'In this jurisdiction.'), 0,
             'An is-it-right question answered by making the answer conditional.'),
        ],
        script=[
            ('Woman', 'Everybody arrives thinking a patent is a prize for inventing '
                      'something. It is a contract.'),
            ('Man', 'Between the inventor and whom?'),
            ('Woman', 'The public, effectively. You get twenty years in which nobody else may '
                      'use it. In return you publish a document explaining exactly how it '
                      'works, in enough detail that a competent person could build it.'),
            ('Man', 'So the alternative is not patenting it.'),
            ('Woman', 'The alternative is keeping it secret, which sometimes works better. '
                      'Nobody has ever patented the Coca-Cola formula. A trade secret lasts '
                      'as long as you can keep it and a patent lasts twenty years, so the '
                      'choice depends on how easy the thing is to reverse-engineer.'),
            ('Man', 'And twenty years is the same for everything?'),
            ('Woman', 'Which is the obvious objection. Twenty years for a bearing is very '
                      'generous — the engineering is cheap and the term is long. Twenty years '
                      'for a drug that took fourteen years of trials leaves you six, which may '
                      'be nothing like enough.'),
            ('Man', 'So why not vary it?'),
            ('Woman', 'Because somebody would then have to decide which field each invention '
                      'belongs to, for every application, and that is a worse problem than the '
                      'one it solves. Most defences of the patent system are like this. They '
                      'are not arguments that the rule is right. They are arguments that the '
                      'alternatives are worse to administer, and those are respectable '
                      'arguments that nobody makes out loud.'),
        ],
        items=[
            ('What does she say a patent actually is?',
             ('A prize', 'A contract', 'A licence', 'A monopoly only'), 1,
             'She replaces the category in her first sentence and the rest follows from it.'),
            ('What does the inventor provide in return?',
             ('A fee', 'A document explaining exactly how it works',
               'A licence', 'A share of revenue'), 1,
             'The detail requirement is that a competent person could build it.'),
            ('What is the alternative to patenting?',
             ('Publishing freely', 'Keeping it secret',
              'Licensing', 'Applying abroad'), 1,
             'She gives the Coca-Cola formula as the example of a secret that has never been '
             'patented.'),
            ('What determines the choice between the two?',
             ('The cost of filing', 'How easy the thing is to reverse-engineer',
              'The length of the term', 'The field of invention'), 1,
             'A secret lasts as long as it can be kept and a patent lasts twenty years.'),
            ('Why is twenty years generous for a bearing?',
             ('Bearings are valuable', 'The engineering is cheap and the term is long',
              'Bearings are rarely patented', 'Competition is weak'), 1,
             'She contrasts it directly with a drug that took fourteen years to test.'),
            ('Why does she say the term is not varied?',
             ('Nobody has proposed it', 'Somebody would have to classify every application',
              'The law forbids it', 'Inventors object'), 1,
             'She calls that a worse problem than the one it would solve.'),
            ('What does she say most defences of the system are?',
             ('Arguments that the rule is right', 'Arguments that the alternatives are worse to administer',
              'Arguments from history', 'Arguments about incentives'), 1,
             'She adds that these are respectable arguments nobody makes out loud.'),
        ],
    ),

    l2=dict(
        sub='Simultaneous invention',
        caption='A technology transfer briefing to research students',
        poster=['Technology Transfer Office · drop-in Wednesdays',
                'Disclose within 60 days',
                'First to file, not first to invent'],
        skill=('Hearing a deadline explained by its consequence',
               ['A briefing on a deadline will usually give the cost of missing it rather '
                'than the rule alone.',
                'Listen for: the figure, then what changes if you are outside it.',
                'A speaker may criticise the rule they are enforcing, and both are '
                'examinable.']),
        warm=[
            ('Woman: When does the sixty days start?',
             ('When the device first works, not when you think of it.', 'When you file.',
              'About eighty-four days.', 'In August.'), 0,
             'A when question answered with the trigger and a contrast that prevents a '
             'mistake.'),
            ('Man: Does my dated notebook protect me?',
             ('Not here — the jurisdiction is first to file.', 'Yes, completely.',
              'About five weeks.', 'With the scans.'), 0,
             'A does-it-protect question answered with the rule that decides priority.'),
            ('Woman: What happens if I disclose late?',
             ('Your share halves, from forty to twenty.', 'Nothing happens.',
              'About sixty days.', 'The office decides.'), 0,
             'A what-happens question answered with the specific consequence.'),
        ],
        script=[
            ('Man', 'Three numbers and then an opinion you did not ask for. Sixty: the days '
                    'you have to disclose an invention to this office, counted from the date '
                    'the thing first works — not from the idea, from the working device. '
                    'Forty: the percentage of net licensing revenue that goes to you if you '
                    'disclose inside that window. Twenty: the percentage if you do not. The '
                    'rule is mechanical and I apply it mechanically, because an office that '
                    'applied it sympathetically would be applying it unevenly. Now the opinion. '
                    'The sixty days is measured in a way that is almost perfectly designed to '
                    'catch research students, because the period after a device first works is '
                    'exactly when you are writing it up, and writing up is not an excuse the '
                    'policy recognises. I have raised it twice. Second thing, and this one is '
                    'not about us. This jurisdiction is first to file. Your notebook, dated, '
                    'witnessed, signed by three people, does not establish priority over '
                    'somebody who filed a fortnight before you. It establishes what you knew '
                    'and when, which matters for inventorship disputes inside a team and does '
                    'nothing at all against an outside filing. People find this very hard to '
                    'believe and the belief has cost at least two groups in this building a '
                    'patent.'),
        ],
        items=[
            ('When does the sixty-day period begin?',
             ('When the idea occurs', 'When the device first works',
              'When the application is filed', 'When the supervisor is told'), 1,
             'He draws the contrast explicitly: not from the idea, from the working '
             'device.'),
            ('What are the two revenue percentages?',
             ('Fifty and twenty-five', 'Forty and twenty',
              'Sixty and thirty', 'Thirty and fifteen'), 1,
             'Forty inside the window and twenty outside it, which is the cost of being '
             'late.'),
            ('Why does he apply the rule mechanically?',
             ('The law requires it', 'An office applying it sympathetically would apply it unevenly',
              'He has no discretion', 'Students expect it'), 1,
             'That is his stated reason, and it sits alongside his criticism of the rule.'),
            ('What is his criticism of the sixty days?',
             ('It is too long', 'It is measured so as to catch research students',
              'It is unclear', 'It is rarely enforced'), 1,
             'The period after a device first works is when a student is writing up.'),
            ('What does a dated notebook establish?',
             ('Priority over any filing', 'What you knew and when',
              'Ownership', 'Novelty'), 1,
             'He says it matters for disputes inside a team and does nothing against an '
             'outside filing.'),
            ('What has the mistaken belief cost?',
             ('A revenue share', 'At least two groups in the building a patent',
              'Several disclosures', 'Nothing yet'), 1,
             'He offers that as evidence that people find the rule hard to believe.'),
        ],
    ),

    l3=dict(
        sub='Who owns what a student makes',
        caption='A lecture on attribution in research',
        board=['Policies assume dishonesty',
               'The real problem is attribution',
               'Four contributors, no percentages',
               'Workable rule, not a fair one'],
        skill=('Following a talk that accepts a rule and rejects its justification',
               ['A speaker may say that a rule should stay and that the reason given for it '
                'is false.',
                'Listen for: the objection is correct, and the conclusion does not follow.',
                'The last item is usually about how the rule is described rather than what '
                'it does.']),
        warm=[
            ('Man: Can a research group say who invented what?',
             ('After two years on one apparatus, usually not.', 'Yes, easily.',
              'About four people.', 'In the policy.'), 0,
             'A can-they question answered with the condition under which the answer is '
             'no.'),
            ('Woman: Who gets named as inventor?',
             ('Whoever came to the office before the deadline.', 'The supervisor always.',
              'About forty per cent.', 'On the filing.'), 0,
             'A who question answered with the mechanism rather than the principle.'),
            ('Man: Should there be a tribunal instead?',
             ('It would probably be worse than this.', 'Yes, certainly.',
              'About sixty days.', 'The office decides.'), 0,
             'A should-there-be question answered by conceding the objection to the '
             'alternative.'),
        ],
        script=[
            ('Woman', 'Invention policies are written as though the problem were people '
                      'cheating. The problem is that nobody can say who invented it. Take an '
                      'ordinary case. Four people, two years, one apparatus. The supervisor '
                      'framed the question. A postdoc ruled out the approach everybody would '
                      'have tried first, which saved a year. A technician suggested the '
                      'configuration that worked. A student built it and worked out why it '
                      'worked. There is no question that all four contributed and there is no '
                      'principled way to turn that into percentages. So institutions do '
                      'something administratively clean instead. The inventors are whoever is '
                      'named on the filing; the filing is prepared by an office; the office '
                      'works with whoever came to see it. And as it happens that produces a '
                      'consistent mild bias towards senior people. Not because anyone intends '
                      'it. Because senior people know the office exists, know the deadline, '
                      'and are not writing a dissertation during the sixty days. Now, one '
                      'might object that the alternative is unworkable, and that objection is '
                      'correct. A tribunal apportioning inventive contribution inside a lab '
                      'would be slow, intrusive and probably worse than what we have. Fine. '
                      'But the conclusion is not that the rule is fair. It is that we picked a '
                      'workable rule over a fair one, which is a respectable choice and should '
                      'be defended as that. What I object to is the universities that describe '
                      'their revenue formula as recognising contribution. That is not a '
                      'defence of the choice. It is a concealment of it, and the people whose '
                      'contribution is not recognised are precisely the people with no '
                      'standing to say so.'),
        ],
        items=[
            ('What do invention policies assume the problem is?',
             ('Attribution', 'People cheating', 'Delay', 'Funding'), 1,
             'She immediately replaces that assumption with the attribution problem.'),
            ('What did the postdoctoral researcher contribute?',
             ('The apparatus', 'Ruling out the approach everybody would have tried first',
              'The configuration', 'The explanation'), 1,
             'She adds that this saved a year, which is why it counts as a contribution.'),
            ('Who are the named inventors, in practice?',
             ('The most senior', 'Whoever is named on the filing prepared by the office',
              'All contributors', 'Whoever built the device'), 1,
             'The office works with whoever came to see it, which is the operative step.'),
            ('Why does the bias arise?',
             ('Deliberate favouritism', 'Senior people know the office and the deadline and are not writing up',
              'Students do not invent', 'Offices prefer staff'), 1,
             'She is explicit that nobody intends it.'),
            ('What does she concede about a tribunal?',
             ('It would be fairer', 'It would be slow, intrusive and probably worse',
              'It is already used', 'It would be cheap'), 1,
             'She calls the objection correct before refusing the conclusion drawn from it.'),
            ('What conclusion does she say follows?',
             ('The rule is fair', 'A workable rule was chosen over a fair one',
              'The rule should go', 'Students should be excluded'), 1,
             'She calls that a respectable choice that should be defended as such.'),
            ('What does she object to?',
             ('The sixty-day rule', 'Describing the revenue formula as recognising contribution',
              'The tribunal proposal', 'The filing process'), 1,
             'She calls it a concealment of the choice rather than a defence of it.'),
        ],
    ),

    sp=[
        dict(
            sub='What a patent actually is',
            focus='saying a long noun phrase cleanly',
            skill=('Keeping a noun phrase intelligible',
                   ['A long noun phrase needs one stress, on the head noun: a twenty-year '
                    'exclusivity PERIOD.',
                    'Do not pause inside the phrase. A pause suggests the phrase has '
                    'ended.',
                    'If you cannot say it in one breath, it is too long. Break it into two.']),
            repeat=[
                'A patent is a contract.',
                'The inventor publishes a full description.',
                'A competent person could build it from the document.',
                'The term is a twenty-year exclusivity period.',
                'A trade secret has no fixed term and no disclosure requirement.',
                'The choice depends on how easily the device can be reverse-engineered.',
                'Most defences of the system are not arguments that the rule is right but arguments that every alternative is worse to administer.',
            ],
            theme='invention, ownership and incentives',
            qs=[
                'Thanks for joining me. To begin, have you ever made or built something '
                'yourself?',
                'Patents are meant to encourage invention. Do you think they do?',
                'Now your opinion. Should medicines be patentable? Why or why not?',
                'A final question. Does anybody ever really invent something alone?',
            ],
            model=[(2, 'In some fields clearly yes, in others they mainly protect what '
                       'already exists. The problem is that the same twenty years applies to '
                       'both.'),
                   (4, 'Almost never, and the record is quite clear about it. Everything '
                       'significant has been invented twice within a few years.')],
            selfcheck=['I put one stress on the head noun.',
                       'I did not pause inside the noun phrase.',
                       'I broke up anything I could not say in one breath.'],
        ),
        dict(
            sub='Simultaneous invention',
            focus='stating a deadline and its cost',
            skill=('Giving a rule and its consequence together',
                   ['Say the number, then what changes: sixty days, and after that your '
                    'share halves.',
                    'Stress the number. It is the only part the listener will retain.',
                    'If you criticise the rule, mark the switch clearly: that is the rule; '
                    'here is what I think of it.']),
            repeat=[
                'You have sixty days to disclose.',
                'The clock starts when the device first works.',
                'Inside the window your share is forty per cent.',
                'Outside it the share falls to twenty.',
                'This jurisdiction awards priority to the first filing, not the first invention.',
                'A dated and witnessed notebook establishes what you knew and when.',
                'It does nothing at all against an outside filing, and that belief has cost at least two groups in this building a patent.',
            ],
            theme='deadlines, rules and the people they catch',
            qs=[
                'Thank you for your time. First, are you good with deadlines? What goes wrong '
                'when you are not?',
                'A rule applied sympathetically is applied unevenly. Is that a good reason to '
                'be rigid?',
                'Now an opinion question. Should a university take a share of what a student '
                'invents? Why?',
                'One last question. Would you rather have a fair rule that is slow or a rough '
                'rule that is fast?',
            ],
            model=[(2, 'It is a good reason, and it does not make the rigid outcome right. '
                       'Both things are true and institutions usually only say the first.'),
                   (4, 'A rough fast rule, provided it is described honestly. Most of the '
                       'damage comes from rough rules presented as fair ones.')],
            selfcheck=['I stressed the numbers.',
                       'I gave the consequence with the rule.',
                       'I marked the switch to my own opinion.'],
        ),
        dict(
            sub='Who owns what a student makes',
            focus='compressing a clause into a noun phrase',
            skill=('Turning a sentence into a phrase',
                   ['Compression is a B2 skill: the office relies on whoever came to see it '
                    'becomes a reliance on self-reporting.',
                    'Compression hides the agent, so put it back where it matters: a '
                    'reliance by the office on self-reporting.',
                    'Say the compressed phrase and then unpack it once, so the listener gets '
                    'both.']),
            repeat=[
                'Nobody can say who invented it.',
                'Four people worked on one apparatus for two years.',
                'All four contributed and no percentages are possible.',
                'The named inventors are whoever appears on the filing.',
                'The resulting bias towards senior staff is consistent and unintended.',
                'The sixty-day disclosure obligation falls when a student is writing up.',
                'What we have is a workable rule described as a fair one, and the people whose contribution goes unrecognised have no standing to say so.',
            ],
            theme='credit, hierarchy and institutional language',
            qs=[
                'Thanks for taking part. To start, have you ever worked in a group where '
                'credit was shared unevenly?',
                'Institutions often describe a practical rule as a fair one. Why do they do '
                'that?',
                'Now your opinion. Should contribution to research be ranked at all? Why or '
                'why not?',
                'And finally. Is it better to admit a rule is rough, or to defend it as '
                'right?',
            ],
            model=[(2, 'Because defending a rule as merely workable invites somebody to look '
                       'for a better one, and nobody in an institution wants that review on '
                       'their desk.'),
                   (4, 'Admit it. A rough rule honestly described can be improved. A rough '
                       'rule defended as right has to be overthrown first.')],
            selfcheck=['I compressed at least one clause into a noun phrase.',
                       'I restored the agent where it mattered.',
                       'I unpacked the compressed phrase once.'],
        ),
    ],

    w1=dict(
        sub='Questions about ownership',
        skill=('Build a Sentence with a complex noun phrase',
               ['The two non-question items in this unit build a long noun phrase as subject '
                'or object.',
                'Modifiers before the noun are adjectives and compounds; modifiers after it '
                'are phrases and clauses.',
                'A compound modifier before a noun is hyphenated: a sixty-day obligation, a '
                'twenty-year term.']),
        guided=[
            ('The disclosure was eighty-four days late.',
             ['know', 'do', 'you', 'whether', 'that', 'can', 'at all', 'appealed', 'be'],
             'Do you know whether that can be appealed at all?'),
            ('A group in Dresden filed five weeks earlier.',
             ['to know', 'nobody', 'seems', 'how', 'they', 'the same', 'problem', 'reached', 'actually'],
             'Nobody seems to know how they actually reached the same problem.'),
            ('My supervisor asked about the notebook dates.',
             ['she', 'whether', 'to know', 'wanted', 'I', 'had', 'them', 'witnessed', 'properly'],
             'She wanted to know whether I had them properly witnessed.'),
        ],
        exam=[
            ('The jurisdiction awards priority to the first filing.',
             ['do', 'whether', 'know', 'you', 'every', 'country', 'rule', 'that', 'uses'],
             'Do you know whether every country uses that rule?'),
            ('The notebook does not establish priority.',
             ['explain', 'can', 'anybody', 'why', 'a dated', 'record', 'to me', 'count', 'does not'],
             'Can anybody explain to me why a dated record does not count?'),
            ('The Dresden claims cover the rotary configuration only.',
             ['know', 'does', 'anybody', 'whether', 'the linear', 'one', 'free', 'is', 'still'],
             'Does anybody know whether the linear one is still free?'),
            ('The inventor share depends on the disclosure date.',
             ['us', 'told', 'nobody', 'when', 'the sixty', 'days', 'were', 'supposed', 'to start'],
             'Nobody told us when the sixty days were supposed to start.'),
            ('Two groups in the building lost a patent this way.',
             ['told', 'he', 'me', 'which', 'mistake', 'they', 'both', 'made', 'had'],
             'He told me which mistake they had both made.'),
            ('A patent gives twenty years of exclusive use.',
             ['a', 'twenty-year', 'exclusivity', 'period', 'is', 'the', 'standard', 'in', 'term'],
             'A twenty-year exclusivity period is the standard term in it.'),
            ('Students must disclose within sixty days of the device working.',
             ['the', 'sixty-day', 'disclosure', 'obligation', 'runs', 'from', 'the first', 'working', 'device'],
             'The sixty-day disclosure obligation runs from the first working device.'),
        ],
    ),

    w2=dict(
        sub='Simultaneous invention',
        to='tto@uni.ac.uk',
        date='13/11/2028',
        subject='Linear variant — filing, and a request about the revenue tier',
        scenario=[
            'The office has told you the Dresden filing blocks the rotary mechanism, that '
            'your late disclosure drops your share to 20 per cent, and that the linear '
            'variant in your 3 September notebook entry is still available and worth filing '
            'quickly. You want to file. You also want to ask whether the 20 per cent tier '
            'applies to the linear variant, which you disclosed within sixty days of building '
            'it.',
            'Write an email to the technology transfer office.',
        ],
        bullets=['Confirm you want to file and what on.',
                 'Set out the argument about which invention the clock applies to.',
                 'Say what you will do whatever the answer is.',
        ],
        skill=('Making a technical argument about a rule',
               ['Identify which fact the rule actually turns on, then show your case against '
                'that fact alone.',
                'Dates in a list are more persuasive than dates in a sentence.',
                'Separate the argument from the request. One paragraph each.']),
        model=[
            'Dear Dr Sundaresan,',
            '',
            'Yes — please file on the linear variant, and I can be in the office any morning '
            'this week to sign whatever is needed.',
            '',
            'A question about the revenue tier, which I think turns on a fact rather than on '
            'discretion. The dates are:',
            '',
            '12 August — rotary configuration first works (notebook pp. 41–44)',
            '3 September — linear variant first works (pp. 58–61)',
            '4 November — disclosure to the office',
            '',
            'The policy counts sixty days from the date an invention is reduced to practice. '
            'For the rotary configuration that is 12 August and I was 84 days late, which I '
            'accept. For the linear variant it is 3 September, and 4 November is 62 days. '
            'Two days over, not twenty-four.',
            '',
            'I am not asking you to overlook the two days. I am asking whether the policy '
            'treats these as one invention or two, because the Dresden filing has already '
            'treated them as two and the configurations work on different principles. If they '
            'are two inventions, the linear one has its own sixty-day clock and I am close to '
            'it rather than far outside.',
            '',
            'If the answer is that it is one invention, that is the end of it and I would '
            'rather know than argue. Either way I want the filing to go in this week, and the '
            'tier can be settled afterwards.',
            '',
            'With thanks,',
            'Tochukwu Okafor',
        ],
        notes=['The instruction to file comes first and unconditionally, so the argument '
               'cannot delay the filing.',
               'The dates are set out as a list with page references, which makes them '
               'checkable in seconds.',
               'The argument identifies the fact the rule turns on — one invention or two — '
               'and borrows the Dresden filing as independent support.',
               'The writer concedes the late rotary disclosure outright, which makes the '
               'narrower claim credible.'],
        bandpair=dict(
            mid=[
                'Dear Dr Sundaresan,',
                'Thank you very much for your email, and for looking into the Dresden filing '
                'so quickly. I would definitely like to go ahead with filing on the linear '
                'variant and I am available whenever suits you this week.',
                'I did want to raise one thing about the revenue share. I understand that my '
                'disclosure was late for the rotary version and I accept that. However, I only '
                'built the linear version in September, so I was not nearly as late with that '
                'one, and I wondered whether the twenty per cent tier really ought to apply to '
                'it as well.',
                'I realise this may not be possible and I do not want to seem as though I am '
                'complaining about the rules, especially as you have been so helpful. But it '
                'did seem worth asking whether the two versions are treated separately or not.',
                'Thank you again for everything. Best wishes, Tochukwu Okafor',
            ],
            top=[
                'Dear Dr Sundaresan,',
                'Yes — please file on the linear variant. I can sign anything needed any '
                'morning this week.',
                'A question about the tier, which I think turns on a fact rather than on '
                'discretion. 12 August: rotary first works (pp. 41–44). 3 September: linear '
                'first works (pp. 58–61). 4 November: disclosure.',
                'The policy counts sixty days from reduction to practice. For the rotary that '
                'is 12 August and I was 84 days late, which I accept. For the linear it is 3 '
                'September, and 4 November is 62 days — two days over, not twenty-four.',
                'I am not asking you to overlook two days. I am asking whether the policy '
                'treats these as one invention or two. The Dresden filing has already treated '
                'them as two and the configurations work on different principles. If it is one '
                'invention, that is the end of it and I would rather know than argue. The '
                'filing should go in this week either way. Tochukwu Okafor',
            ],
            diffs=[
                'It lays the three dates out with page references, so the reader can verify '
                'the claim instead of taking it on trust.',
                'It does the arithmetic — 62 days, not 84 — which is the entire argument and '
                'is absent from the middle answer.',
                'It names the fact the rule turns on, one invention or two, rather than '
                'appealing to how late the writer was.',
                'It cites the Dresden filing as independent support for treating the variants '
                'separately.',
                'It drops the apology for asking, which in the middle answer undercuts the '
                'request it is attached to.',
            ],
        ),
    ),

    w3=dict(
        sub='Who owns what a student makes',
        prof='Dr Castellanos',
        question='Almost every significant invention of the last two centuries was made '
                 'independently by two or more people within a few years. The patent system '
                 'nonetheless awards a full twenty-year monopoly to whoever files first, a '
                 'race often decided by weeks. Some argue that this is indefensible and that '
                 'rights should be shared among simultaneous inventors. Others argue that any '
                 'apportionment rule would generate endless litigation, and that a sharp '
                 'arbitrary rule is better than a fair unworkable one. Which position is '
                 'better founded?',
        posts=[('Mireille', 'w',
                'Share the rights. The present rule pays an enormous premium for a few weeks '
                'of administrative speed, which has nothing to do with invention and '
                'everything to do with having a patent attorney on retainer. That is a '
                'subsidy to large firms dressed up as a reward for creativity.'),
               ('Jarrah', 'm',
                'Mireille is describing a real unfairness and proposing something far worse. '
                'Any sharing rule requires somebody to decide who counts as a simultaneous '
                'inventor and in what proportion, and every answer to that is litigable. The '
                'firms she is worried about are the ones who would win those cases.')],
        skill=('Answering an argument about workability',
               ['A workability objection is usually right about the proposal and silent '
                'about the status quo.',
                'Ask whether the current rule also generates the cost the objection names.',
                'Then look for a change that is cheap to administer.']),
        starters=['Jarrah is right about the proposal and has not costed the alternative.',
                  'Mireille has diagnosed the problem and prescribed the wrong remedy.',
                  'What both leave out is…',
                  'The cheap change nobody has proposed is…'],
        model=[
            'Jarrah is right about the proposal and has not costed the alternative, which is '
            'the standard shape of a workability argument. Any apportionment of inventive '
            'contribution is litigable, and the parties best placed to litigate are the ones '
            'Mireille wants to constrain. That is a serious objection and it is not a defence '
            'of the present rule; it is a reason to prefer it, which is a different and much '
            'weaker claim than the one usually made for first-to-file.',
            'Mireille has diagnosed the problem and prescribed the wrong remedy. The premium '
            'paid for administrative speed is real and large, and her remedy relocates the '
            'whole question into a tribunal where the advantage of having lawyers is greater '
            'rather than smaller. What she should be attacking is not who gets the right but '
            'how much the right is worth, because the unfairness scales with the size of the '
            'prize and not with the rule for awarding it.',
            'What both leave out is that the term and the remedy are adjustable without any '
            'new finding of fact. Shortening exclusivity in fields where development is cheap '
            'reduces the premium on filing first by exactly the amount it reduces the monopoly, '
            'and requires nobody to decide who invented anything. A compulsory licence '
            'available to a demonstrably independent inventor who filed within, say, six '
            'months does the same thing: it needs only two dates and a document, both of '
            'which already exist.',
            'So the cheap change nobody has proposed is to keep first-to-file for '
            'the grant and attach a late-filer licence to it. Jarrah keeps his sharp rule and '
            'his empty courtroom, Mireille loses most of the premium she objects to, and '
            'nothing turns on anybody weighing one contribution against another.',
        ],
        model_words=286,
    ),

    gram=dict(
        title='Complex noun phrases',
        headers=['Position', 'What goes there'],
        rows=[
            ('determiner', 'a, the, this, every, no'),
            ('before the noun: adjective', 'a mild consistent bias'),
            ('before the noun: compound', 'a sixty-day obligation, a twenty-year term'),
            ('before the noun: noun modifier', 'a patent attorney, a disclosure deadline'),
            ('the head noun', 'the word everything else describes'),
            ('after the noun: phrase', 'a bias towards senior staff'),
            ('after the noun: clause', 'the configuration that worked'),
        ],
        notes=[
            'A compound modifier before a noun is hyphenated and singular: a sixty-day '
            'obligation, a twenty-year term. After the noun it is neither: an obligation of '
            'sixty days, a term of twenty years.',
            'Noun modifiers stack, and three is usually the limit of comfort: a student '
            'invention disclosure deadline is readable; a student invention disclosure '
            'deadline extension request is not. Break it with of.',
            'Compression removes the agent. A reliance on self-reporting does not say who '
            'relies. At B2 this is sometimes what you want and more often an accident; decide '
            'which, every time.',
        ],
        watch='Do not write "a sixty-days obligation" or "a twenty-years term". A compound '
              'modifier before a noun is always singular, however many days or years it '
              'names.',
        ex=[
            ('Compress the clause into a noun phrase before the noun.',
             ['an obligation lasting sixty days',
              'a term of twenty years',
              'a bias that is mild and consistent',
              'a deadline for disclosing an invention',
              'a rule that gives priority to the first filing',
              'a period of exclusivity lasting twenty years'],
             ['a sixty-day obligation', 'a twenty-year term', 'a mild consistent bias',
              'an invention disclosure deadline', 'a first-to-file rule',
              'a twenty-year exclusivity period']),
            ('Correct the noun phrase.',
             ['a sixty-days disclosure obligation',
              'a twenty-years exclusivity period',
              'a student invention disclosure deadline extension request',
              'a bias towards of senior staff'],
             ['a sixty-day disclosure obligation',
              'a twenty-year exclusivity period',
              'a request to extend the student invention disclosure deadline',
              'a bias towards senior staff']),
            ('Unpack the noun phrase into a clause, naming the agent.',
             ['a reliance on self-reporting',
              'the apportionment of inventive contribution',
              'a consistent bias towards senior staff',
              'the recognition of contribution'],
             ['the office relies on people reporting their own inventions',
              'somebody has to decide how much each person contributed',
              'the process consistently favours senior staff',
              'the formula claims to recognise what each person contributed']),
        ],
        bas='Two of the ten Build a Sentence items in this unit build a long noun phrase. '
            'A hyphenated tile such as sixty-day or twenty-year sits immediately before its '
            'head noun, and nothing comes between them.',
    ),

    fault=dict(
        text='The policy sets a sixty-days disclosure obligation and a twenty-years '
             'exclusivity period. The office relies on self-reporting, which produces a bias '
             'towards of senior staff. Nobody knows whether did the student disclose in time. '
             'Having filed in September, the rotary claims were already blocked.',
        faults=[
            ('a sixty-days disclosure obligation', 'a sixty-day disclosure obligation',
             'A compound modifier before a noun is singular however many days it names.'),
            ('a twenty-years exclusivity period', 'a twenty-year exclusivity period',
             'The same rule applies to years, and the plural before the noun is a '
             'conspicuous error.'),
            ('a bias towards of senior staff', 'a bias towards senior staff',
             'Towards already governs the noun phrase, so the second preposition has nothing '
             'to do.'),
            ('whether did the student disclose', 'whether the student disclosed',
             'An embedded question keeps statement order and takes no auxiliary.'),
            ('Having filed in September, the rotary claims were already blocked',
             'Having filed in September, the Dresden group had already blocked the rotary '
             'claims',
             'The claims did not file anything; the participle needs the subject that '
             'acted.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('everything already known before a filing', 'prior art'),
            ('a payment per use or per sale', 'royalty'),
            ('use of a protected right without permission', 'infringement'),
            ('making an invention public in the application', 'disclosure'),
            ('the requirement of being genuinely new', 'novelty'),
            ('the part of a patent defining what is protected', 'claim'),
            ('the person or body to whom a right is transferred', 'assignee'),
            ('owned and not freely available', 'proprietary'),
            ('advancing in small steps', 'incremental'),
            ('valuable information kept undisclosed', 'trade secret'),
            ('the right to exclude others', 'exclusivity'),
            ('a mutual exchange of permissions', 'cross-licence'),
        ],
        gram=[
            ('The policy sets a sixty-______ disclosure obligation.', 'day'),
            ('A twenty-______ exclusivity period is standard.', 'year'),
            ('The office relies on self-______.', 'reporting'),
            ('There is a mild bias ______ senior staff.', 'towards'),
            ('It is a first-to-______ jurisdiction.', 'file'),
            ('The configuration ______ worked was the technician’s.', 'that'),
            ('An obligation ______ sixty days is the same thing.', 'of'),
            ('A patent ______ is not the same as an inventor.', 'attorney'),
        ],
        mini=[
            ('A patent is best described as',
             ('a reward for invention', 'a trade of disclosure for exclusivity',
              'a form of ownership', 'a licence to sell'), 1,
             'The inventor publishes how the thing works in exchange for a limited '
             'monopoly.'),
            ('Simultaneous invention is common because',
             ('inventors copy each other', 'a device becomes thinkable once its component problems are solved',
              'patents are published', 'funding is concentrated'), 1,
             'At that point the idea occurs to everybody competent who is looking in the '
             'right direction.'),
            ('In a first-to-file jurisdiction a dated notebook establishes',
             ('priority over any filing', 'what you knew and when',
              'ownership', 'novelty'), 1,
             'It matters for disputes inside a team and does nothing against an outside '
             'filing.'),
            ('Which noun phrase is correct?',
             ('a sixty-days obligation', 'a sixty-day obligation',
              'a sixty day’s obligation', 'a sixty-days’ obligation'), 1,
             'A compound modifier before a noun is hyphenated and singular.'),
            ('"One might object that" signals that the writer',
             ('agrees', 'is raising a counterargument in order to address it',
              'is quoting', 'is uncertain'), 1,
             'It introduces an objection the writer intends to take seriously rather than '
             'dismiss.'),
            ('The passage says institutions describing their formula as recognising contribution are',
             ('defending a choice', 'concealing a choice',
              'measuring contribution', 'following the law'), 1,
             'The author accepts the rule as workable and objects only to that '
             'description.'),
        ],
    ),

    tip='The noun phrase is where B2 writing gets its density, and it is also where it most '
        'often collapses. Three modifiers before the head noun is the practical limit. '
        'Beyond that, break the phrase with of — and check whether compressing the clause '
        'has quietly removed the person who did the thing.',
)
