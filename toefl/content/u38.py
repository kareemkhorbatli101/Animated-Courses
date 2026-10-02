# -*- coding: utf-8 -*-
"""Unit 38 — Memory, Heritage and Museums. Volume 4."""
from content._g import gaps

_GT, _GA = gaps(
    'A museum does not display the past. It displays a selection, made by people with '
    'budgets, and the things not shown outnumber the things shown by a factor few visitors '
    'would gu{ess}. This is not a criticism. No building could hold everything, and a '
    'collection with no principle of select{ion} would be a warehouse rather than a '
    'muse{um}. What deserves scrutiny is not that choices are made but whether anybody can '
    'find out what they w{ere}, and in most institutions the answer is still '
    'n{o}.')

_ET, _EA = gaps(
    'Whose object is it, and who decides? Those two questions have dominated museum debate '
    'for thirty years, and they are often run together when they ought to be kept '
    'sep{arate}. A claim of ownership is a legal matter with documents, dates and, in some '
    'cases, a clear answer. A claim about who should decide the display of an object is '
    'about author{ity}, and no document settles it. Institutions that treat the second as '
    'though it were the first produce the reply that infuriates everyone: we have examined '
    'the title and it is so{und}. That may be true and it answers a question nobody '
    'a{sked}. The more honest institutions have begun publishing their acquisition records '
    'in f{ull}, which is harder than it sounds and has had one consequence nobody '
    'expec{ted}. The disputes have not multiplied. What has happened instead is that the '
    'arguments have become specific: this object, this date, this gap of eleven years in the '
    'documen{tation}. Vagueness favours whoever is in possess{ion}, because a general '
    'accusation is answered by a general den{ial}, and both sides can repeat themselves '
    'indefinitely. Detail is uncomfortable for everybody and it is the only thing that has '
    'ever moved a single ca{se}.')

UNIT = dict(
    n=38, vol=4, level='B2',
    title='Memory, Heritage and Museums',
    icons=['museum', 'news', 'speech'],
    subs=['What a collection leaves out', 'Provenance and ownership',
          'Who speaks for a community'],
    grammar='Cohesion: substitution and ellipsis',
    field='provenance, repatriation, curation',
    opener_line='This unit is about what makes a text hang together. Substitution and '
                'ellipsis are the structures that let English avoid repeating itself, and '
                'they are the difference between writing that flows and writing that '
                'restates its own nouns every sentence.',
    candos=[
        'I can avoid repetition using one, ones, so, do so and the former.',
        'I can leave out what the reader can supply, and know when I cannot.',
        'I can keep a reference clear across several sentences.',
        'I can distinguish a legal question from a question about authority.',
        'I can follow a talk about a dispute in which both sides are partly right.',
        'I can write about a contested history without flattening it.',
    ],

    acad=[
        ('provenance', 'the documented history of an object’s ownership'),
        ('repatriation', 'returning an object to its place of origin'),
        ('curation', 'the selection and arrangement of a collection'),
        ('artefact', 'an object made by a person'),
        ('acquisition', 'the act of obtaining something for a collection'),
        ('bequest', 'something left to an institution in a will'),
        ('deaccession', 'formally removing an object from a collection'),
        ('conservator', 'a specialist who preserves objects'),
        ('interpretation', 'the explanation offered to a visitor'),
        ('custodian', 'somebody who holds something on another’s behalf'),
        ('title', 'legal ownership of property'),
        ('restitution', 'giving back what was wrongly taken'),
        ('inventory', 'a complete list of holdings'),
        ('commemorate', 'to mark publicly in memory of something'),
        ('vernacular', 'ordinary, local and everyday'),
        ('canonical', 'treated as standard and authoritative'),
        ('archive', 'a store of records kept for the long term'),
        ('ephemera', 'items not made to be kept'),
    ],
    family=('inherit', [
        ('inheritance', 'noun', 'an inheritance of disputed objects'),
        ('heritage', 'noun', 'heritage funding was cut again'),
        ('inherited', 'adjective', 'inherited categories nobody chose'),
    ]),
    collocs=[
        ('hand down', 'to pass to a later generation'),
        ('come to light', 'to become known'),
        ('bring to the surface', 'to make visible'),
        ('put on display', 'to exhibit'),
        ('stand in for', 'to represent something absent'),
        ('lay claim to', 'to assert a right over'),
        ('in trust', 'held on behalf of somebody else'),
        ('on loan', 'lent temporarily'),
        ('as a rule', 'usually, as a general principle'),
        ('in its own right', 'considered independently'),
    ],
    stance=[
        ('as a rule', 'usually, as a general principle'),
        ('to its credit', 'the writer praises one specific thing'),
        ('what is less often said', 'the writer adds a neglected point'),
        ('nobody seriously disputes', 'the writer marks a settled fact'),
        ('for better or worse', 'the writer declines to evaluate'),
    ],
    nuance=[
        ('provenance / title', 'the documented history / the legal ownership'),
        ('restitution / repatriation', 'giving back a wrong / returning to a place'),
        ('archive / collection', 'records kept / objects shown'),
    ],
    vocab_talk=[
        'Describe a museum you have visited. What did it choose not to show?',
        'Who should decide how an object is displayed?',
        'Is returning an object the same as admitting it was stolen?',
        'What would you keep from this decade for a museum in 2200?',
    ],
    again=['storeroom', 'accession number', 'catalogue entry', 'wall label',
           'loan agreement', 'due diligence', 'source community', 'oral history'],

    r1=dict(
        sub='What a collection leaves out',
        skill=('Completing nouns, and short words you nearly skip',
               ['Museum writing is dense with -tion and -ity nouns: selection, authority, '
                'documentation.',
                'Short gaps matter too: were, no, so. A two-letter gap is still a word with '
                'a job.',
                'Read the whole sentence before filling a short gap. Its identity comes '
                'from the grammar, not the letters.']),
        guided_text=_GT, guided=_GA,
        guided_hint='gu-- is guess — the slot follows would, so it needs a bare infinitive.',
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='Provenance and ownership',
        skill=('Reading an acquisitions policy against an offer',
               ['A policy sets the conditions under which something may be accepted. An '
                'offer tests them.',
                'Provenance rules usually turn on a date and on the completeness of the '
                'record.',
                'A refusal to acquire is not an accusation, and a careful institution will '
                'say so explicitly.']),
        docs=[
            ('notice', 'City Museum · acquisitions and provenance policy', [
                '# What the Museum will acquire',
                '* Objects with a documented ownership history from 1970 to the present, '
                'without gaps.',
                '* Objects with a gap of under five years, where a curator sets out in '
                'writing why the gap is explicable.',
                '# What the Museum will not acquire',
                '* Objects whose record has a gap of five years or more, regardless of the '
                'seller’s good faith.',
                '# Loans and deposits',
                '* An object the Museum will not acquire may still be accepted on deposit '
                'for research, with no display and no transfer of title.',
            ], 'notice'),
            ('email', 'a.oyedepo@citymuseum.org', 'v.kowalczyk@privatecollection.eu',
             '02/10/2028', 'The bronze figure — why we cannot acquire, and what we can do', [
                 'Dear Dr Kowalczyk,',
                 '',
                 'Thank you for the file, which is more complete than most, and for sending',
                 'it before we asked.',
                 '',
                 'We cannot acquire the figure. There is a gap of eleven years in the',
                 'ownership record, between the 1974 sale and the 1985 inventory, and our',
                 'policy stops at five. That rule has no exception and I would not want one:',
                 'the whole value of a bright line is that it does not bend for people we',
                 'like.',
                 '',
                 'I want to be exact about what that does and does not mean. It is not an',
                 'allegation. Nothing in your file suggests anything improper, your own',
                 'acquisition in 1998 is fully documented, and I have no reason to think the',
                 'gap conceals anything at all. What I have is an absence of evidence, and',
                 'our policy treats an absence as disqualifying rather than as suspicious.',
                 '',
                 'Two things we can do. We can take it on deposit for research — no display,',
                 'no transfer of title — which would let our conservator examine the casting',
                 'seams. Those often date a piece to a workshop and a decade, and if the',
                 'result is consistent with the 1974 sale, that is a real part of the record',
                 'rather than an argument about it.',
                 '',
                 'And if the eleven years can be closed, the policy admits the piece at once.',
                 '',
                 'Dr Oyedepo, Senior Curator',
             ]),
        ],
        guided=[
            ('What ownership history does the Museum require?',
             ('From 1900', 'From 1970 to the present without gaps',
              'From the date of manufacture', 'None'), 1,
             'The 1970 threshold with no gaps is the general rule, and everything else is an '
             'exception to it.'),
            ('When may a gap be accepted?',
             ('Any gap, with curatorial support', 'A gap under five years, explained in writing',
              'A gap under eleven years', 'Never'), 1,
             'Both conditions apply: the length and a written curatorial explanation.'),
            ('What is the Museum’s position on a gap of five years or more?',
             ('It depends on the seller', 'It will not acquire, regardless of good faith',
              'It requires a legal opinion', 'It requires a deposit first'), 1,
             'The policy says regardless of the seller’s good faith, which is why the curator '
             'can refuse without accusing.'),
            ('What may happen to an object the Museum will not acquire?',
             ('Nothing', 'It may be accepted on deposit for research, without display',
              'It may be displayed on loan', 'Title may transfer'), 1,
             'That route is what the curator then offers, with the two exclusions '
             'restated.'),
        ],
        exam=[
            ('Why can the Museum not acquire the figure?',
             ('The seller’s title is defective', 'There is an eleven-year gap in the record',
              'The object is a forgery', 'The price is too high'), 1,
             'Eleven years against a five-year limit is the whole reason given.'),
            ('What does the curator say about having no exception?',
             ('It is regrettable', 'The value of a bright line is that it does not bend for people we like',
              'It may change', 'It applies only to bronzes'), 1,
             'She treats the absence of discretion as the point of the rule rather than a '
             'defect in it.'),
            ('What does she say the refusal is not?',
             ('Final', 'An allegation', 'A matter of policy', 'A legal judgement'), 1,
             'She says nothing in the file suggests anything improper and the 1998 '
             'acquisition is documented.'),
            ('How does the policy treat an absence of evidence?',
             ('As suspicious', 'As disqualifying rather than suspicious',
              'As irrelevant', 'As a matter for the courts'), 1,
             'That distinction is what lets her refuse the object without impugning the '
             'owner.'),
            ('What could the casting seams establish?',
             ('Legal title', 'A workshop and a decade',
              'The 1974 price', 'The owner in 1980'), 1,
             'She says a result consistent with the 1974 sale would be part of the record '
             'rather than an argument about it.'),
            ('What are the two conditions of the deposit offer?',
             ('No research and no display', 'No display and no transfer of title',
              'No conservation and no publication', 'No insurance and no loan'), 1,
             'She repeats both from the policy, which keeps the offer clearly inside it.'),
            ('What does the curator’s last line tell you?',
             ('The decision is final', 'Closing the gap would make the piece acquirable immediately',
              'The policy is under review', 'A legal opinion is needed'), 1,
             'The refusal is tied to the record rather than to the object or the owner.'),
        ],
    ),

    r3=dict(
        sub='Who speaks for a community',
        title='Who Is Entitled to Decide',
        words=294,
        paras=[
            'Nobody seriously disputes that some museum objects were taken in circumstances '
            'that would now be criminal, and the argument has long since moved on from '
            'whether to what follows. What follows is harder than either side admits, '
            'because ownership and authority are different questions and only the first has '
            'documents. A title can be traced. '
            'The right to decide how an object is displayed, named and explained cannot be, '
            'and as a rule the institutions that have handled this worst are the ones that '
            'answered a question about authority with an answer about title.',

            'The practical difficulty is that a community is not a committee. An object may '
            'be claimed by a national government, by a regional authority, by a descendant '
            'family and by a religious institution, and these four may want incompatible '
            'things: display, return, reburial, or destruction. To its credit, the field has '
            'stopped pretending that identifying the correct claimant is usually easy, and '
            'has started treating the plurality as a fact to be worked with rather than a '
            'problem to be resolved before anything can happen.',

            'What is less often said is that this has produced a quiet transfer of power to '
            'whoever is best organised. A ministry with a legal department will out-argue a '
            'descendant family every time, and the museum that deals with the ministry can '
            'say truthfully that it consulted the recognised authority. For better or worse, '
            'the institutions getting this right are doing something slower and harder than '
            'consultation: publishing the full record, including the gaps, and accepting '
            'that the first consequence is a more specific argument rather than a resolved '
            'one. That is an unattractive offer to make to a board, and it is the only '
            'approach that has moved a single case in thirty years.',
        ],
        skill=('Reading a passage that separates two questions',
               ['A common academic move is to show that a debate confuses two different '
                'questions.',
                'Look for the sentence naming each and saying which has evidence available '
                'to it.',
                'The last paragraph often identifies who benefits from the confusion.']),
        guided=[
            ('What does the author say the argument has moved on from?',
             ('Who owns objects', 'Whether some objects were wrongly taken',
              'How to display objects', 'Whether museums should exist'), 1,
             'Nobody seriously disputes it, so the live question is what follows.'),
            ('Which of the two questions has documents?',
             ('Authority', 'Ownership', 'Both', 'Neither'), 1,
             'A title can be traced; the right to decide display cannot.'),
            ('What mistake have the worst-handling institutions made?',
             ('Returning objects too quickly', 'Answering a question about authority with an answer about title',
              'Refusing to publish records', 'Consulting too widely'), 1,
             'The author gives this as the characteristic failure rather than as one '
             'example.'),
            ('Why is "a community is not a committee"?',
             ('Communities are large', 'Several bodies may claim and want incompatible things',
              'Communities change', 'Committees are formal'), 1,
             'Government, region, family and religious institution may want display, return, '
             'reburial or destruction.'),
        ],
        exam=[
            ('What does the author credit the field with?',
             ('Returning more objects', 'Stopping the pretence that identifying the correct claimant is easy',
              'Publishing more research', 'Reducing acquisitions'), 1,
             'To its credit marks a specific and limited piece of praise.'),
            ('What has the field started doing instead?',
             ('Waiting for legal rulings', 'Treating the plurality of claims as a fact to work with',
              'Consulting ministries only', 'Deaccessioning routinely'), 1,
             'The contrast is with resolving the question before anything can happen.'),
            ('What does the author say has quietly happened?',
             ('Objects have been returned', 'Power has transferred to whoever is best organised',
              'Museums have closed collections', 'Records have been destroyed'), 1,
             'What is less often said introduces it as a neglected consequence.'),
            ('Why can a museum dealing with a ministry say it consulted properly?',
             ('The ministry owns the object', 'The ministry is the recognised authority',
              'No other claimant exists', 'The law requires it'), 1,
             'The statement is truthful, which is precisely the author’s complaint about '
             'it.'),
            ('What are the institutions getting it right doing?',
             ('Returning everything', 'Publishing the full record including the gaps',
              'Refusing all claims', 'Consulting more widely'), 1,
             'The author calls this slower and harder than consultation.'),
            ('What is the first consequence of that approach?',
             ('Fewer disputes', 'A more specific argument rather than a resolved one',
              'Faster returns', 'Legal challenges'), 1,
             'The author concedes that this makes it an unattractive offer to a board.'),
            ('Which would most strengthen the final paragraph?',
             ('Evidence that museums are underfunded',
              'Evidence that cases involving published records have been resolved more often',
              'Evidence that ministries are well staffed',
              'Evidence that claims are increasing'), 1,
             'The claim is specifically that publication is the only thing that has moved '
             'cases.'),
            ('All of the following are stated EXCEPT:',
             ('Ownership and authority are different questions',
              'A community may contain incompatible claims',
              'Publication produces more specific arguments',
              'Publication reduces the number of disputes'), 3,
             'The passage says the first consequence is specificity, not fewer disputes.'),
            ('What is the author’s attitude to the field?',
             ('Hostile', 'Critical of its failures and specific about its one real improvement',
              'Uncritical', 'Indifferent'), 1,
             'To its credit praises one change while the rest of the passage criticises the '
             'handling.'),
        ],
    ),

    l1=dict(
        sub='What a collection leaves out',
        caption='Two students in a museum storeroom',
        skill=('Hearing a proportion that surprises',
               ['When a speaker gives a ratio, the item is usually about the ratio rather '
                'than the subject.',
                'Listen for: of those, only, the rest.',
                'A speaker correcting a visitor’s assumption will state the assumption '
                'first.']),
        warm=[
            ('Man: How much of the collection is on display?',
             ('Under two per cent, as a rule.', 'Yes, most of it.',
              'About four galleries.', 'In the storeroom.'), 0,
             'A how-much question answered with the proportion and a hedge about '
             'generality.'),
            ('Woman: Is that a scandal?',
             ('No — no building could hold it all.', 'Yes, it is terrible.',
              'About ninety thousand objects.', 'The curators decide.'), 0,
             'An is-it question answered by rejecting the framing and giving the reason.'),
            ('Man: Can I find out why something is not shown?',
             ('In most museums, no. That is the real problem.', 'Yes, it is published.',
              'About eleven years.', 'Ask a conservator.'), 0,
             'A can-I question answered with a frank no and a redirection of the '
             'criticism.'),
        ],
        script=[
            ('Woman', 'Ninety-one thousand objects in this building. How many do you think '
                      'are on display?'),
            ('Man', 'A third?'),
            ('Woman', 'One and a half thousand. Under two per cent.'),
            ('Man', 'That feels like a scandal.'),
            ('Woman', 'It is the first thing everybody says and it is wrong. No building could '
                      'show ninety thousand objects, and a collection that showed everything '
                      'would have no principle of selection, which would make it a warehouse. '
                      'The storeroom is not a failure. It is what a collection is.'),
            ('Man', 'So where is the real problem?'),
            ('Woman', 'In whether you can find out why these one and a half thousand. Somebody '
                      'chose. They had a view about what mattered, and a budget, and a '
                      'deadline. Can you read that reasoning anywhere?'),
            ('Man', 'I assume not.'),
            ('Woman', 'In most museums you cannot, and that is the thing worth being angry '
                      'about. Not the two per cent — the invisibility of the decision. Three '
                      'institutions in Europe now publish their selection criteria and the '
                      'minutes behind them.'),
            ('Man', 'Did anything change when they did?'),
            ('Woman', 'The complaints got much better. Which sounds like a joke and is '
                      'actually the whole point: a specific complaint can be answered, and a '
                      'vague one just gets a press statement.'),
        ],
        items=[
            ('What proportion of the collection is on display?',
             ('A third', 'Under two per cent', 'About ten per cent', 'Half'), 1,
             'One and a half thousand out of ninety-one thousand is the figure she gives.'),
            ('Why does she say the storeroom is not a failure?',
             ('It is well managed', 'A collection showing everything would have no principle of selection',
              'The objects are fragile', 'Visitors prefer fewer objects'), 1,
             'She calls such a collection a warehouse rather than a museum.'),
            ('Where does she locate the real problem?',
             ('In the proportion displayed', 'In whether the reasoning behind the selection can be read',
              'In the storeroom conditions', 'In the budget'), 1,
             'Somebody chose, with a view and a budget and a deadline, and that reasoning is '
             'usually unavailable.'),
            ('What does she say is worth being angry about?',
             ('The two per cent', 'The invisibility of the decision',
              'The funding', 'The curators'), 1,
             'She explicitly contrasts the two, which is the structure of her whole '
             'argument.'),
            ('What have three European institutions done?',
             ('Displayed more objects', 'Published their selection criteria and the minutes',
              'Returned objects', 'Closed their storerooms'), 1,
             'That publication is what she offers as the practical alternative.'),
            ('What changed as a result?',
             ('Fewer complaints', 'The complaints got much better',
              'More visitors', 'Nothing'), 1,
             'She says it sounds like a joke and is the whole point.'),
            ('Why does a specific complaint matter more?',
             ('It is shorter', 'It can be answered, whereas a vague one gets a press statement',
              'It is more polite', 'It reaches more people'), 1,
             'That contrast is the reason she gives for publishing the reasoning at all.'),
        ],
    ),

    l2=dict(
        sub='Provenance and ownership',
        caption='A briefing to museum volunteers on provenance',
        poster=['City Museum · volunteer briefing, Thursday',
                'Provenance: 1970 to present, no gaps',
                'A refusal is not an accusation'],
        skill=('Hearing a rule defended for an unexpected reason',
               ['A speaker may defend a strict rule on grounds you would not predict.',
                'Listen for: the reason we have no exception is not what you would think.',
                'The unexpected reason is the examinable part.']),
        warm=[
            ('Woman: Why does the record have to start in 1970?',
             ('It is the date of the convention.', 'Because it is recent.',
              'About five years.', 'In the policy.'), 0,
             'A why-that-date question answered with the reason behind the threshold.'),
            ('Man: Can a curator make an exception?',
             ('For under five years, with reasons in writing.', 'Yes, any exception.',
              'About eleven years.', 'The director decides.'), 0,
             'A can-they question answered with the limit and the condition on it.'),
            ('Woman: Does refusing mean the object is stolen?',
             ('No — it means the record is incomplete.', 'Yes, usually.',
              'About two per cent.', 'Ask the seller.'), 0,
             'A does-it-mean question answered by separating absence of evidence from '
             'wrongdoing.'),
        ],
        script=[
            ('Man', 'Provenance, in twenty minutes, and the part I want you to remember is '
                    'not the rule but why we refuse to bend it. The rule: a documented '
                    'ownership history from 1970 to the present, with no gaps. 1970 is the '
                    'date of the international convention, so it is not arbitrary. A curator '
                    'may accept a gap of under five years if they write down why it is '
                    'explicable. Five years or more: we do not acquire, full stop, whatever '
                    'the seller’s good faith. Now, you would expect the reason for that '
                    'rigidity to be about catching wrongdoers. It is not. Most sellers who '
                    'come to us are entirely honest and most gaps are somebody’s grandmother '
                    'not keeping receipts. The reason we have no exception is that a rule with '
                    'an exception is a rule that gets applied generously to people we like and '
                    'strictly to people we do not, and nobody involved can tell from the '
                    'inside which is happening. A bright line protects us from our own '
                    'judgement. One more thing, and it is the sentence I would like you to be '
                    'able to say to a donor: refusing to acquire is not an allegation. We are '
                    'not saying the object was taken. We are saying the record has a hole in '
                    'it, and our policy treats a hole as disqualifying rather than as '
                    'suspicious. Those are different sentences and the difference matters '
                    'enormously to somebody who has just been told no.'),
        ],
        items=[
            ('What does he want volunteers to remember?',
             ('The rule', 'Why the rule is not bent',
              'The 1970 date', 'The deposit option'), 1,
             'He says so in his first sentence and builds the whole briefing on it.'),
            ('Why is 1970 the threshold?',
             ('It is recent enough', 'It is the date of the international convention',
              'Records improve after it', 'The Museum was founded then'), 1,
             'He adds that this is why the date is not arbitrary.'),
            ('What does he say about most sellers?',
             ('They conceal things', 'They are entirely honest',
              'They are dealers', 'They dispute the rule'), 1,
             'Most gaps are somebody’s grandmother not keeping receipts, which is his '
             'illustration.'),
            ('What is the real reason for having no exception?',
             ('To catch wrongdoers', 'A rule with an exception is applied generously to people we like',
              'To save curators time', 'To satisfy the convention'), 1,
             'He adds that nobody involved can tell from the inside which is happening.'),
            ('What does he say a bright line protects the Museum from?',
             ('Litigation', 'Its own judgement', 'Public criticism', 'Dishonest sellers'), 1,
             'That is the conclusion of the argument about generosity and strictness.'),
            ('What sentence does he want volunteers to be able to say?',
             ('The object may be stolen', 'Refusing to acquire is not an allegation',
              'The policy may change', 'A deposit is always possible'), 1,
             'He distinguishes saying the record has a hole from saying the object was '
             'taken.'),
        ],
    ),

    l3=dict(
        sub='Who speaks for a community',
        caption='A lecture on restitution and authority',
        board=['Ownership: documents exist',
               'Authority: no document settles it',
               'A community is not a committee',
               'Vagueness favours the holder'],
        skill=('Following a talk that identifies who benefits',
               ['When a lecturer separates two questions, ask who gains from them being '
                'confused.',
                'Listen for: and the effect of that, which nobody intended, is.',
                'The last item usually concerns that beneficiary.']),
        warm=[
            ('Man: Is this an argument about ownership?',
             ('Partly. The harder part is about authority.', 'Yes, entirely.',
              'About thirty years.', 'In the lecture.'), 0,
             'An is-it question answered by splitting the question rather than answering '
             'it.'),
            ('Woman: Who speaks for a community?',
             ('Often several bodies, wanting different things.', 'The government does.',
              'About four claimants.', 'Nobody knows.'), 0,
             'A who question answered with the plurality that makes it hard.'),
            ('Man: Why does vagueness help the museum?',
             ('A general claim gets a general denial.', 'It does not help anybody.',
              'About eleven years.', 'In the press statement.'), 0,
             'A why question answered with the mechanism rather than a judgement.'),
        ],
        script=[
            ('Woman', 'Thirty years ago this argument was about whether some objects were '
                      'wrongly taken. That is settled; nobody seriously disputes it. The '
                      'argument now is about what follows, and it is harder, because two '
                      'different questions have been wound together. Question one: who owns '
                      'this? That is a legal question. There are documents, dates, sometimes a '
                      'clear answer. Question two: who is entitled to decide how it is '
                      'displayed, named and explained? No document settles that, and the '
                      'institutions that have handled this worst are the ones that answered '
                      'the second question with an answer to the first. We have examined the '
                      'title and it is sound. Possibly true, and nobody asked. Now the part '
                      'that gets least attention. A community is not a committee. One object '
                      'may be claimed by a national ministry, a regional authority, a '
                      'descendant family and a religious institution, and those four may want '
                      'display, return, reburial and destruction respectively. To its credit '
                      'the field has stopped pretending that this is usually easy. But the '
                      'effect, which nobody intended, is a quiet transfer of power to whoever '
                      'is best organised. A ministry with a legal department will out-argue a '
                      'descendant family every single time, and the museum that deals with the '
                      'ministry can say truthfully that it consulted the recognised authority. '
                      'For better or worse, the institutions actually getting somewhere are '
                      'doing the slow thing: publishing the whole record, gaps included, and '
                      'accepting that what they get first is a more specific argument rather '
                      'than a resolved one. Vagueness favours whoever is holding the object. '
                      'Detail is uncomfortable for everybody, and it is the only thing that has '
                      'ever moved a case.'),
        ],
        items=[
            ('What does she say is settled?',
             ('Who owns the objects', 'That some objects were wrongly taken',
              'How to display them', 'Who should decide'), 1,
             'She says nobody seriously disputes it and that the argument has moved on.'),
            ('Which question has documents?',
             ('Who decides display', 'Who owns the object', 'Both', 'Neither'), 1,
             'The second question, about authority, is settled by no document at all.'),
            ('What reply does she say infuriates people?',
             ('We are reviewing the case', 'We have examined the title and it is sound',
              'We will consult', 'We cannot comment'), 1,
             'She calls it possibly true and an answer to a question nobody asked.'),
            ('What does "a community is not a committee" mean?',
             ('Communities are informal', 'Several bodies may claim and want incompatible outcomes',
              'Communities are large', 'Committees are slow'), 1,
             'Ministry, region, family and religious institution may want four different '
             'things.'),
            ('What unintended effect does she identify?',
             ('More returns', 'Power transferring to whoever is best organised',
              'Fewer claims', 'Slower decisions'), 1,
             'A ministry with a legal department out-argues a descendant family every '
             'time.'),
            ('What are the institutions getting somewhere doing?',
             ('Returning objects quickly', 'Publishing the whole record including the gaps',
              'Consulting ministries', 'Refusing to comment'), 1,
             'She calls it the slow thing and says the first result is a more specific '
             'argument.'),
            ('Why does vagueness favour the holder?',
             ('Holders have lawyers', 'A general claim can be met with a general denial',
              'Vagueness delays courts', 'The public loses interest'), 1,
             'Detail is uncomfortable for everybody, which is why she says it is the only '
             'thing that moves a case.'),
        ],
    ),

    sp=[
        dict(
            sub='What a collection leaves out',
            focus='avoiding repetition out loud',
            skill=('Substituting instead of repeating',
                   ['One and ones replace a countable noun: the shown ones and the stored '
                    'ones.',
                    'So replaces a whole clause after think, hope, say: I think so, and the '
                    'minutes say so too.',
                    'Do so replaces a verb phrase: three museums publish the minutes, and '
                    'they began doing so in 2019.']),
            repeat=[
                'A museum displays a selection.',
                'The stored objects outnumber the displayed ones.',
                'Showing everything would make it a warehouse rather than a museum.',
                'Somebody chose these objects and not those.',
                'Can you read the reasoning anywhere? In most museums you cannot.',
                'Three institutions publish their criteria, and they began doing so recently.',
                'The complaints got better when they did so, which sounds like a joke and is in fact the entire argument for publishing.',
            ],
            theme='museums, choices and what gets kept',
            qs=[
                'Thanks for joining me. To begin, when did you last go to a museum? What do '
                'you remember?',
                'Almost everything in a museum is in storage. Does that change how you think '
                'about what you saw?',
                'Now your opinion. Should museums publish the reasons behind what they '
                'display? Why?',
                'A final question. What from your own life would be worth keeping for two '
                'hundred years?',
            ],
            model=[(2, 'It does, because it turns the gallery from a summary of the past into '
                       'somebody’s argument about it, and an argument is a thing you can '
                       'disagree with.'),
                   (4, 'The ordinary things nobody is saving. Receipts, timetables, the '
                       'notices in a shop window. The important objects will survive without '
                       'my help.')],
            selfcheck=['I used one and ones instead of repeating the noun.',
                       'I used so after think, say or hope.',
                       'I used do so for a repeated verb phrase.'],
        ),
        dict(
            sub='Provenance and ownership',
            focus='saying no without accusing',
            skill=('Refusing on the record rather than the person',
                   ['Put the reason in the document, not in the person: the record has a '
                    'gap, rather than you cannot prove it.',
                    'Ellipsis helps here: we cannot acquire it, though we can hold it. The '
                    'second verb phrase is left out.',
                    'Say what the refusal is not. That sentence does most of the work.']),
            repeat=[
                'The record must run from 1970 with no gaps.',
                'A curator may accept a short gap; a long one, never.',
                'Eleven years is too many.',
                'Refusing to acquire is not an allegation.',
                'We are not saying the object was taken; only that the record has a hole in it.',
                'Our policy treats a hole as disqualifying rather than as suspicious.',
                'A rule with an exception is applied generously to people we like and strictly to people we do not, and nobody can tell from the inside which they are doing.',
            ],
            theme='rules, trust and saying no',
            qs=[
                'Thank you for your time. First, are you good at refusing people? Why do you '
                'think that is?',
                'A strict rule protects an institution from its own bias. Does that justify '
                'unfair individual outcomes?',
                'Now an opinion question. Should museums be able to keep objects whose history '
                'is unclear? Why?',
                'One last question. How would you tell somebody their family object cannot be '
                'accepted?',
            ],
            model=[(2, 'Sometimes, and only if the institution says that is what it is doing. '
                       'An unfair outcome defended as a correct one is much worse than an '
                       'unfair outcome admitted.'),
                   (4, 'By putting it on the paperwork. The sentence has to be about the '
                       'record, because anything about the family is heard as an '
                       'accusation.')],
            selfcheck=['I located the reason in the record, not the person.',
                       'I used ellipsis to avoid repeating a verb phrase.',
                       'I said what the refusal was not.'],
        ),
        dict(
            sub='Who speaks for a community',
            focus='keeping a long reference clear',
            skill=('Referring back across several sentences',
                   ['The former and the latter are precise and formal, and only work with '
                    'exactly two things.',
                    'This plus a noun is safer than this alone: this distinction, this '
                    'claim.',
                    'If you have four claimants, name them. Substitution fails when there '
                    'are too many candidates.']),
            repeat=[
                'Two questions have been wound together.',
                'The first is legal; the latter is not.',
                'No document settles the question of authority.',
                'A ministry, a region, a family and a religious institution may all claim one object.',
                'Those four may want display, return, reburial and destruction respectively.',
                'This plurality is a fact to work with rather than a problem to solve first.',
                'The effect nobody intended is a transfer of power to whoever is best organised, and a museum dealing with that body can say truthfully that it consulted.',
            ],
            theme='heritage, authority and competing claims',
            qs=[
                'Thanks for taking part. To start, is there an object or a place that your '
                'community would say belongs to it?',
                'When several groups claim the same object, how should an institution decide?',
                'Now your opinion. Should objects be returned even when the claimants '
                'disagree among themselves? Why?',
                'And finally. Does publishing an uncomfortable record help, or just create '
                'more argument?',
            ],
            model=[(2, 'By publishing everything it knows and declining to pick a '
                       'representative. The moment it chooses one claimant it has taken a '
                       'side in somebody else’s dispute.'),
                   (4, 'Both, and the more argument is the help. A vague grievance can be '
                       'managed indefinitely; a specific one has to be answered.')],
            selfcheck=['I used the former and the latter only with two items.',
                       'I added a noun after this.',
                       'I named the claimants when there were several.'],
        ),
    ],

    w1=dict(
        sub='Questions about collections',
        skill=('Build a Sentence with substitution or ellipsis',
               ['The two non-question items in this unit use substitution or ellipsis: one, '
                'ones, do so, the former.',
                'Do so replaces a whole verb phrase and must follow an auxiliary or a '
                'subject: they began doing so.',
                'Ellipsis leaves out what the first half already supplied: we cannot acquire '
                'it, though we can hold it.']),
        guided=[
            ('There is an eleven-year gap in the record.',
             ['know', 'do', 'you', 'whether', 'that', 'can', 'at all', 'closed', 'be'],
             'Do you know whether that can be closed at all?'),
            ('Only two per cent of the collection is displayed.',
             ['to know', 'nobody', 'seems', 'who', 'those', 'objects', 'actually', 'chose', 'in the end'],
             'Nobody seems to know who actually chose those objects in the end.'),
            ('My tutor asked about the deposit arrangement.',
             ['she', 'whether', 'to know', 'wanted', 'I', 'had', 'the policy', 'read', 'myself'],
             'She wanted to know whether I had read the policy myself.'),
        ],
        exam=[
            ('A refusal to acquire is not an allegation.',
             ['do', 'whether', 'know', 'you', 'donors', 'that', 'understand', 'actually', 'distinction'],
             'Do you know whether donors actually understand that distinction?'),
            ('No document settles the question of authority.',
             ['explain', 'can', 'anybody', 'why', 'the title', 'to me', 'is', 'then', 'irrelevant'],
             'Can anybody explain to me why the title is irrelevant then?'),
            ('Three institutions publish their selection minutes.',
             ['know', 'does', 'anybody', 'when', 'they', 'doing', 'began', 'so', 'actually'],
             'Does anybody know when they actually began doing so?'),
            ('Four bodies claim the same object.',
             ['us', 'told', 'nobody', 'which', 'of', 'them', 'museum', 'the', 'consulted'],
             'Nobody told us which of them the museum consulted.'),
            ('The casting seams can date the piece.',
             ['told', 'he', 'me', 'what', 'a result', 'like', 'that', 'prove', 'would'],
             'He told me what a result like that would prove.'),
            ('The stored objects far outnumber the displayed objects.',
             ['the', 'stored', 'objects', 'far', 'outnumber', 'the', 'displayed', 'in', 'ones'],
             'The stored objects far outnumber the displayed ones in here.'),
            ('We cannot acquire the figure but we can hold it.',
             ['we', 'cannot', 'acquire', 'it', 'though', 'we', 'hold', 'can', 'it'],
             'We cannot acquire it, though we can hold it.'),
        ],
    ),

    w2=dict(
        sub='Provenance and ownership',
        to='acquisitions@citymuseum.org',
        date='09/10/2028',
        subject='The bronze figure — accepting the deposit, and what I found in Kraków',
        scenario=[
            'The Museum has refused to acquire your bronze because of an eleven-year gap, '
            'offered to take it on deposit for research, and said the policy would admit it '
            'at once if the gap could be closed. You have found a 1979 auction catalogue that '
            'covers four of the eleven years. You want the deposit, and you want to know '
            'whether partial evidence is worth submitting.',
            'Write an email to the acquisitions office.',
        ],
        bullets=['Accept the deposit and set out what you want examined.',
                 'Describe the new evidence precisely and say what it does not cover.',
                 'Ask whether partial closure is worth pursuing before you spend more.'],
        skill=('Reporting partial evidence honestly',
               ['State what the evidence covers and, in the same sentence, what it does '
                'not. A reader who finds the limit themselves discounts the whole.',
                'Give the document, not your conclusion from it. The curator will draw a '
                'better one.',
                'Ask whether to continue before you continue. It is cheaper for both of '
                'you.']),
        model=[
            'Dear Dr Oyedepo,',
            '',
            'Thank you for a refusal I would rather have than most acceptances. I accept the '
            'deposit for research on the terms you set out — no display, no transfer of '
            'title — and the casting seams are exactly what I would want examined. I can '
            'deliver it any week from the 20th.',
            '',
            'Since your letter I have found something, and I want to be precise about how '
            'much it is worth. The Habsburger auction catalogue for March 1979 lists the '
            'figure as lot 211, with a photograph that matches ours including the repair to '
            'the left foot. The consignor is named as the Weiss estate. That places the piece '
            'in Vienna in 1979 and, with the 1985 inventory, closes four of the eleven years.',
            '',
            'It does not touch 1974 to 1979. Those five years are the ones that matter and I '
            'have nothing on them. The Weiss estate papers are in a private archive in '
            'Kraków which requires a written application and, I am told, about four months.',
            '',
            'So my question before I spend the four months: does partial closure help at all? '
            'If the policy needs the whole eleven years, I would rather know now and simply '
            'leave the piece on deposit. If seven years with a named consignor at each end is '
            'materially different from eleven with nothing, I will apply.',
            '',
            'With thanks,',
            'Weronika Kowalczyk',
        ],
        notes=['The acceptance restates the terms, so the deposit is agreed on the record '
               'rather than in principle.',
               'The evidence is given as a document with a lot number, a photograph and a '
               'named consignor, not as a conclusion.',
               'The limit of the evidence is stated in its own short paragraph, which is more '
               'convincing than any amount of assurance.',
               'The question is asked before the cost is incurred and offers the reader an '
               'easy answer either way.'],
        bandpair=dict(
            mid=[
                'Dear Dr Oyedepo,',
                'Thank you very much for your email, which I thought was extremely fair even '
                'though the news was not what I had hoped for. I am very happy to accept your '
                'offer of a research deposit and I think examining the casting seams is an '
                'excellent idea.',
                'I also have some good news. I have managed to find an old auction catalogue '
                'from 1979 which seems to show the same figure, and this would help to fill in '
                'part of the missing period. Unfortunately it does not cover the whole of the '
                'gap, but I think it is definitely a step forward.',
                'There are some further papers in an archive in Poland which might help, '
                'although apparently it takes a long time to get access. Before I go to all '
                'that trouble, I wondered whether you thought it would be worthwhile? I would '
                'be grateful for your advice.',
                'Thank you again for your help. Best wishes, Weronika Kowalczyk',
            ],
            top=[
                'Dear Dr Oyedepo,',
                'Thank you for a refusal I would rather have than most acceptances. I accept '
                'the deposit on the terms you set out — no display, no transfer of title — and '
                'the casting seams are what I would want examined. Available from the 20th.',
                'I have found something and want to be precise about its worth. The Habsburger '
                'catalogue for March 1979 lists the figure as lot 211, photographed, including '
                'the repair to the left foot, consignor named as the Weiss estate. With the '
                '1985 inventory that closes four of the eleven years.',
                'It does not touch 1974 to 1979. Those five are the ones that matter and I have '
                'nothing on them. The Weiss papers are in a private archive in Kraków: written '
                'application, about four months.',
                'So, before I spend the four months: does partial closure help? If the policy '
                'needs all eleven years I would rather know now and leave the piece on '
                'deposit. Weronika Kowalczyk',
            ],
            diffs=[
                'It identifies the evidence by catalogue, date, lot number and a matching '
                'repair, so the curator can verify it rather than take it on trust.',
                'It names the consignor, which is the detail that makes the catalogue useful '
                'at all.',
                'It states the limit in a paragraph of its own and names the exact years still '
                'missing, instead of saying it does not cover the whole gap.',
                'It quantifies the cost of the next step — written application, four months — '
                'so the question being asked has a price attached.',
                'It offers the reader the easy answer explicitly, which is what makes a '
                'request for advice answerable in one line.',
            ],
        ),
    ),

    w3=dict(
        sub='Who speaks for a community',
        prof='Dr Beaumont',
        question='Museums holding contested objects increasingly consult the communities those '
                 'objects came from. In practice a single object may be claimed by a national '
                 'government, a regional body, a descendant family and a religious '
                 'institution, who may want incompatible outcomes. Some argue that '
                 'institutions should deal only with the recognised state authority, since '
                 'any other choice means a museum arbitrating somebody else’s internal '
                 'dispute. Others argue that this hands decisions to whoever is best '
                 'organised and excludes the claimants with the strongest moral case. What '
                 'should an institution do?',
        posts=[('Lerato', 'w',
                'Deal with the state. A museum has no standing to decide which of four '
                'claimants truly represents a community, and every attempt to do so has '
                'involved a European institution ranking the legitimacy of non-European '
                'bodies. The state at least has a procedure for its own internal '
                'disagreements.'),
               ('Anders', 'm',
                'Lerato’s rule looks neutral and is not. Choosing the state is a choice, and '
                'it reliably selects the claimant with lawyers over the claimant with the '
                'grave. Deferring to whoever is already powerful is not abstention from the '
                'dispute, it is participation on one side.')],
        skill=('Answering an argument from institutional modesty',
               ['Claims that an institution should not decide often conceal a decision '
                'already made.',
                'Ask what the default rule does, and who it favours in practice.',
                'Then look for a procedure that avoids the choice rather than making it '
                'differently.']),
        starters=['Anders has identified the flaw in Lerato’s rule and has no rule of his own.',
                  'Lerato’s worry is the right one and her remedy inherits the problem.',
                  'What neither considers is…',
                  'The procedure that avoids the choice is…'],
        model=[
            'Anders has identified the flaw in Lerato’s rule and has no rule of his own, which '
            'leaves the argument half finished. He is right that deferring to the state is a '
            'choice rather than an abstention, and right that it selects the claimant with a '
            'legal department. But the objection does not generate an alternative, and the '
            'alternative he implies — the museum weighing which claimant has the stronger '
            'moral case — is exactly what Lerato warns against, for reasons he never '
            'addresses.',
            'Lerato’s worry is the right one and her remedy inherits the problem she is trying '
            'to avoid. A European institution ranking the legitimacy of non-European bodies is '
            'a genuinely bad position to be in. Yet recognising the state as the sole '
            'interlocutor is itself such a ranking, made once, in advance, and then treated as '
            'neutral because it was made by somebody else. The decision has not been avoided; '
            'its authorship has been outsourced.',
            'What neither considers is that the museum does not have to be the body that '
            'chooses. Its position gives it one thing nobody else has, which is the record, '
            'and the record can be handed to every claimant simultaneously. An institution '
            'that publishes the full provenance, writes to all four claimants with the same '
            'document, and states publicly that it will transfer the object to whichever body '
            'the claimants jointly nominate has not arbitrated anything. It has made the '
            'internal dispute visible and put the cost of not resolving it where it belongs.',
            'That is slower than dealing with a ministry and it will sometimes produce no '
            'answer for years, which is the real objection to it and not the one either post '
            'raises. I would still prefer it, because a museum holding an object while four '
            'claimants argue is at least honest about what it is doing, and a museum that '
            'handed the object to a ministry can no longer be asked.',
        ],
        model_words=320,
    ),

    gram=dict(
        title='Cohesion: substitution and ellipsis',
        headers=['Device', 'How it works'],
        rows=[
            ('one / ones', 'replaces a countable noun: the displayed ones'),
            ('so', 'replaces a clause after think, hope, say, do: I think so'),
            ('do so / did so', 'replaces a verb phrase: they began doing so in 2019'),
            ('do / does / did', 'replaces a verb phrase in short answers and comparisons'),
            ('the former / the latter', 'refers back to two things, in order'),
            ('ellipsis after and, but, though', 'we cannot acquire it, though we can hold it'),
            ('this / that + noun', 'this distinction, that claim — safer than this alone'),
        ],
        notes=[
            'One and ones replace countable nouns only. For an uncountable noun English uses '
            'nothing at all: I need information and she has some, not she has one.',
            'The former and the latter work only with exactly two items, and in that order. '
            'With three or more claimants they are wrong, and naming is the only option.',
            'Ellipsis is only available where the reader can reconstruct the missing words '
            'exactly. We cannot acquire it, though we can hold it works because hold shares '
            'the object. If the second half needs a different object, nothing may be left '
            'out.',
        ],
        watch='Do not write "this is the main problem" when two problems have just been '
              'mentioned. A bare this with more than one possible referent is the commonest '
              'cohesion failure at B2. Add the noun: this second problem.',
        ex=[
            ('Replace the repeated words with one, ones, so or do so.',
             ['The displayed objects are fewer than the stored objects.',
              'Three museums publish their minutes and they began to publish their minutes in 2019.',
              'I think the record is incomplete. — I think the record is incomplete too.',
              'She wanted the older catalogue, not the newer catalogue.',
              'They promised to publish the gaps and they published the gaps.',
              'He hoped the seams would date it, and the seams did date it.'],
             ['The displayed objects are fewer than the stored ones.',
              'Three museums publish their minutes and they began doing so in 2019.',
              'I think so too.',
              'She wanted the older catalogue, not the newer one.',
              'They promised to publish the gaps and they did so.',
              'He hoped the seams would date it, and they did.']),
            ('Correct the cohesion error.',
             ['The record has a gap and the title is disputed. This is the main problem.',
              'I need information and she has one.',
              'Four bodies claimed it: the former wanted display.',
              'We cannot acquire it, though we can the figure hold.'],
             ['The record has a gap and the title is disputed. This second problem is the '
              'more serious.',
              'I need information and she has some.',
              'Four bodies claimed it: the ministry wanted display.',
              'We cannot acquire it, though we can hold it.']),
            ('Rewrite using the former and the latter.',
             ['Ownership is a legal question. Authority is not. Ownership has documents.',
              'A ministry and a family both claimed it. The ministry had lawyers.',
              'The 1974 sale and the 1985 inventory are both documented. The 1974 sale is earlier.',
              'Display and reburial were both proposed. Reburial was accepted.'],
             ['Ownership and authority are different questions; the former has documents and '
              'the latter has none.',
              'A ministry and a family both claimed it, and the former had lawyers.',
              'The 1974 sale and the 1985 inventory are both documented, the former being the '
              'earlier.',
              'Display and reburial were both proposed, and the latter was accepted.']),
        ],
        bas='Two of the ten Build a Sentence items in this unit use substitution or ellipsis. '
            'A tile reading ones replaces a noun already in the prompt, and a tile reading so '
            'after doing or did replaces a whole verb phrase.',
    ),

    fault=dict(
        text='The record has a gap and the title is disputed. This is the main problem. The '
             'displayed objects are fewer than the stored objects. I need information and she '
             'has one. Nobody knows whether was the catalogue consulted. Having examined the '
             'seams, the date became clear to the conservator.',
        faults=[
            ('This is the main problem', 'This second problem is the more serious',
             'Two problems have just been named, so a bare this has no single referent.'),
            ('fewer than the stored objects', 'fewer than the stored ones',
             'A countable noun already mentioned is replaced by ones rather than repeated.'),
            ('she has one', 'she has some',
             'One replaces countable nouns only, and information is uncountable.'),
            ('whether was the catalogue consulted', 'whether the catalogue was consulted',
             'An embedded question keeps statement order and does not invert the verb.'),
            ('Having examined the seams, the date became clear to the conservator',
             'Having examined the seams, the conservator saw the date clearly',
             'The date did not examine anything; the participle needs the subject that '
             'acted.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('the documented history of an object’s ownership', 'provenance'),
            ('returning an object to its place of origin', 'repatriation'),
            ('the selection and arrangement of a collection', 'curation'),
            ('the act of obtaining something for a collection', 'acquisition'),
            ('something left to an institution in a will', 'bequest'),
            ('formally removing an object from a collection', 'deaccession'),
            ('somebody who holds something on another’s behalf', 'custodian'),
            ('giving back what was wrongly taken', 'restitution'),
            ('a complete list of holdings', 'inventory'),
            ('ordinary, local and everyday', 'vernacular'),
            ('treated as standard and authoritative', 'canonical'),
            ('items not made to be kept', 'ephemera'),
        ],
        gram=[
            ('The displayed objects are fewer than the stored ______.', 'ones'),
            ('They began doing ______ in 2019.', 'so'),
            ('I think ______ too.', 'so'),
            ('Ownership and authority differ; the ______ has documents.', 'former'),
            ('Display and reburial were proposed; the ______ was accepted.', 'latter'),
            ('We cannot acquire it, though we can ______ it.', 'hold'),
            ('I need information and she has ______.', 'some'),
            ('This ______ problem is the more serious.', 'second'),
        ],
        mini=[
            ('Most of a museum collection is',
             ('on display', 'in storage', 'on loan', 'deaccessioned'), 1,
             'Under two per cent on display is the figure given, and the storeroom is what a '
             'collection mostly is.'),
            ('The City Museum will not acquire an object whose record has',
             ('any gap', 'a gap of five years or more',
              'an unnamed seller', 'no photograph'), 1,
             'The rule applies regardless of the seller’s good faith, which is why a refusal '
             'is not an accusation.'),
            ('The two questions the lecture separates are',
             ('price and provenance', 'ownership and authority',
              'display and storage', 'law and ethics'), 1,
             'Only the first has documents, and confusing them produces the reply that '
             'infuriates claimants.'),
            ('Which sentence is correct?',
             ('I need information and she has one.',
              'I need information and she has some.',
              'I need information and she has ones.',
              'I need information and she has it one.'), 1,
             'One replaces countable nouns, and an uncountable noun takes some or nothing at '
             'all.'),
            ('"As a rule" tells you the writer means',
             ('always', 'usually, with exceptions', 'never', 'by law'), 1,
             'It is a general claim that leaves room for cases that do not fit.'),
            ('Publishing a full provenance record first produces',
             ('fewer disputes', 'more specific disputes',
              'faster returns', 'legal immunity'), 1,
             'Vagueness favours the holder, because a general claim can be met with a general '
             'denial.'),
        ],
    ),

    tip='Cohesion is invisible when it works and glaring when it fails. The single most '
        'common fault at B2 is a bare this with two possible referents. Add the noun. It '
        'costs one word and it is the difference between a reader following you and a reader '
        'going back a sentence.',
)
