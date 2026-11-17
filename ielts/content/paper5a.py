# -*- coding: utf-8 -*-
"""Volume 5 second timed Reading paper: Academic, 3 passages, 40 questions."""

PAPER = dict(
 vol=5, level='B2+/C1', band='7.0', form='a',
 title='Reading Paper 2 · Academic',
 intro=(
   'One hour. Forty questions. Three passages, totalling about two '
   'thousand six hundred words, at the upper end of the real '
   'paper’s range. Sit this one at least a week after the first, '
   'and only once you have read every explanation in the first key.'),
 instruct=[
  'Write 20, 40 and 60 at the top of this page before you begin.',
  'Name the two question types that cost you most marks on the first '
  'paper, and be deliberately slower on those.',
  'Move on when your time is up. Passage 3 carries as many marks as '
  'Passage 1.',
  'Answer every question, including the guesses.',
  'Mark this paper by question type rather than by total, and keep both '
  'score sheets side by side.'],

 passages=[

  dict(no=1, first=1,
       heading='The invention of the index',
       kind='Reading Passage 1',
       blurb='You should spend about 20 minutes on Questions 1–13, '
             'which are based on Reading Passage 1 below.',
       qtype='Questions 1-13',
       paras=[
        'An index is the least admired part of a book and one of the few '
        'genuinely new intellectual technologies of the Middle Ages. It '
        'allows a reader to find a particular statement without reading '
        'what surrounds it, and that capability, so ordinary now that it is '
        'invisible, had to be invented, and its invention required three '
        'other things to exist first.',
        'The first was the page number, or some equivalent reference. A '
        'scroll cannot be indexed in any useful way, because there is no '
        'stable name for a position in it; the codex, a stack of leaves '
        'bound at one edge, makes the leaf countable. Manuscripts were '
        'foliated irregularly from the twelfth century and the practice '
        'became standard only with printing, which produced identical '
        'copies in which a given statement sat on the same page of every '
        'one.',
        'The second was alphabetical order, and this is stranger than it '
        'appears. Alphabetical arrangement was known in antiquity and '
        'regarded as intellectually improper, because it destroys the '
        'order of the subject. A medieval scholar who arranged topics '
        'alphabetically was abandoning the hierarchy of knowledge for the '
        'accident of spelling, and several early users of the method '
        'apologised for it in their prefaces.',
        'The third was a reason to want it. Monastic reading was slow, '
        'repeated and meditative: a reader was not looking anything up. '
        'What created the demand was the thirteenth-century preaching '
        'orders, whose members had to produce sermons on assigned themes at '
        'short notice and needed to find what authority had said about '
        'charity, or usury, or marriage, without reading the whole of '
        'Augustine again. The first great indexes were compiled by '
        'Dominicans for exactly this purpose.',
        'The scale of that work is easy to underestimate. A concordance to '
        'the Bible, listing every occurrence of every significant word, was '
        'produced in Paris in the twelve-thirties. It required a team, '
        'reportedly of several hundred friars, and it was revised twice '
        'within a generation because the first version gave references '
        'without enough context to be usable. The second version added '
        'short quotations, which is the form a concordance has kept ever '
        'since.',
        'Printing changed the economics rather than the idea. Once a '
        'thousand copies shared a pagination, the cost of making an index '
        'could be spread across all of them, and indexes became normal '
        'rather than exceptional. They also became a subject of complaint '
        'almost immediately. Within fifty years of printing there are '
        'authors objecting that readers consult the index instead of the '
        'argument, and the complaint has been made continuously ever '
        'since.',
        'That complaint is worth taking seriously, because it identifies '
        'something real. An index converts a book into a reference work '
        'whether its author intended that or not, and it rewards the kind '
        'of reading that extracts statements from their context. Scholars '
        'have found seventeenth-century readers quoting passages that the '
        'index had made findable and that the book, read whole, does not '
        'support. The index is a tool with a bias, and the bias favours '
        'the sentence over the argument.',
        'The modern form of the same technology is a search box, and the '
        'parallels are close enough to be instructive. Both find '
        'statements; neither finds arguments. Both are compiled by '
        'somebody whose choices are invisible to the user, and the medieval '
        'indexer who decided which words were significant was doing what a '
        'ranking algorithm now does less legibly. The chief difference is '
        'that the indexer’s name was often printed in the book.',
              ('There is a further parallel that is less often drawn and more '
               'revealing, concerning who has historically been permitted to '
               'compile these things. Medieval indexing was the work of people '
               'in religious orders, done anonymously or nearly so, and the '
               'labour was understood as service rather than authorship. When '
               'commercial printing arrived, indexing passed to a trade of its '
               'own, poorly paid and almost entirely unacknowledged, and it '
               'stayed there: the professional indexers of the nineteenth and '
               'twentieth centuries were disproportionately women working from '
               'home for piece rates, and their names appear in very few of '
               'the books they made usable. The point is not merely that '
               'credit was withheld. It is that a decision with real '
               'intellectual consequences, namely which of the ideas in a book '
               'a reader will be able to find, was consistently classified as '
               'clerical work, and classifying a decision as clerical is the '
               'most effective way yet devised of ensuring that nobody '
               'examines it.'),
              ('That classification has one practical consequence worth '
               'stating plainly for anybody who uses a reference work. An '
               'index is a reading of the book, and a bad index misrepresents '
               'its subject in a way the reader cannot detect from inside it, '
               'because what is missing leaves no trace at all. The only '
               'reliable test is to look up something you already know the '
               'book discusses and see whether the index finds it. Almost '
               'nobody applies that test, and the few published studies that '
               'have applied it to scholarly monographs report failure rates '
               'that would be considered unacceptable in any other part of '
               'publishing.')],
       items=[
        (
         'Which paragraph explains why alphabetical order was once '
         'thought improper?',
         ['Paragraph 2', 'Paragraph 3', 'Paragraph 5', 'Paragraph 7'],
         1,
         'Paragraph 3 describes the objection and the apologies in '
         'early prefaces.',
         {0: 'Paragraph 2 explains the page number and the codex.', 2: 'Paragraph 5 describes the Paris concordance.', 3: 'Paragraph 7 discusses the index\u2019s bias.'}),
        (
         'Which paragraph identifies who created the demand for '
         'indexes?',
         ['Paragraph 2', 'Paragraph 4', 'Paragraph 6', 'Paragraph 8'],
         1,
         'Paragraph 4 names the thirteenth-century preaching orders.',
         {0: 'Paragraph 2 explains the page number and the codex.', 2: 'Paragraph 6 covers printing and the early complaints.', 3: 'Paragraph 8 compares an index with a modern search.'}),
        ('Which paragraph compares an index with a modern search?',
         ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
         3,
         'Paragraph 8 sets out the parallels and the chief difference.',
         {0: 'Paragraph 5 describes the Paris concordance.', 1: 'Paragraph 6 covers printing and the early complaints.', 2: 'Paragraph 7 discusses the index\u2019s bias.'}),
        ('Why can a scroll not be indexed usefully?',
         ['it is too long', 'there is no stable name for a position', 'it cannot be copied', 'it has no title'],
         1,
         'Paragraph 2 contrasts the scroll with the countable leaves '
         'of a codex.',
         {0: 'Length is not the obstacle paragraph 2 names.', 2: 'Scrolls were copied; that is not the problem.', 3: 'Titles are not what an index needs.'}),
        ('From which century were manuscripts foliated irregularly?',
         None, 'twelfth',
         'Paragraph 2 says the practice became standard only with '
         'printing.'),
        ('Arranging topics alphabetically meant abandoning the '
         '____________ of knowledge.', None, 'hierarchy',
         'Paragraph 3 explains the intellectual objection.'),
        ('Monastic readers needed indexes for their work.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 4 says monastic reading was slow and meditative '
         'and that a reader was not looking anything up.',
         {0: 'Paragraph 4 says a monastic reader was not looking '
             'anything up.', 2: 'What monastic reading was like is described in paragraph '
             '4.'}),
        ('In which decade was the Paris concordance produced?',
         None, 'twelve-thirties',
         'Paragraph 5 describes the scale of the work.'),
        ('Why was the first version of the concordance revised?',
         ['it contained errors', 'the references lacked enough context', 'the alphabet had changed', 'it was too expensive'],
         1,
         'Paragraph 5 says the second version added short quotations.',
         {0: 'Errors are not the reason paragraph 5 gives.', 2: 'The alphabet did not change in a generation.', 3: 'Cost is not what prompted the revision.'}),
        ('Printing changed the ____________ of indexing rather than the '
         'idea.', None, 'economics',
         'Paragraph 6 explains how the cost could be spread.'),
        (
         'How soon after printing did authors begin complaining about '
         'indexes?',
         ['within five years', 'within fifty years', 'within two hundred years', 'only in the modern period'],
         1,
         'Paragraph 6 dates the complaint and says it has continued.',
         {0: 'Five years is sooner than paragraph 6 reports.', 2: 'Two hundred years is far later than the complaint began.', 3: 'The complaint began within fifty years of printing.'}),
        ('The writer says the bias of an index favours the sentence over '
         'the ____________.', None, 'argument',
         'Paragraph 7 states the bias after giving the historical '
         'evidence.'),
        (
         'What does the writer give as the chief difference between an '
         'index and a search box?',
         ['indexes are more accurate', 'searches are compiled by machines', 'the indexer\u2019s name was often printed', 'searches find arguments'],
         2,
         'The final sentence of the passage makes the contrast about '
         'visibility of the compiler.',
         {0: 'Accuracy is not the difference the passage names.', 1: 'Both are compiled with invisible choices.', 3: 'Neither finds arguments, the passage says.'})]),

  dict(no=2, first=14,
       heading='Bringing a language back',
       kind='Reading Passage 2',
       blurb='You should spend about 20 minutes on Questions 14–26, '
             'which are based on Reading Passage 2 below.',
       qtype='Questions 14-26',
       paras=[
        'Of the seven thousand languages now spoken, something like half '
        'are expected to have no native speakers by the end of the century. '
        'Against that background, a small number of deliberate revivals '
        'have succeeded well enough to be worth examining, and what they '
        'have in common is not what campaigners usually emphasise.',
        'The first distinction that has to be made is between a language '
        'that is endangered and one that is dormant. An endangered language '
        'still has native speakers, usually elderly, and the task is to '
        'produce more of them. A dormant language has none, and the task is '
        'to create native speakers from written records and from the memory '
        'of people who heard it as children. The second task has succeeded '
        'convincingly once.',
        'That case is Hebrew, and it is cited constantly and '
        'understood poorly. Hebrew was never dead in the sense that '
        'Etruscan is dead: it was in continuous liturgical and '
        'scholarly use for eighteen centuries, and a large body of '
        'adult men could read it fluently. What it lacked was children '
        'who spoke it at home. That was produced in Palestine between '
        'the eighteen-eighties and the nineteen-twenties by a '
        'combination no other case has repeated. There was a '
        'population of immigrants with many first languages and no '
        'shared one. There was a school system that used Hebrew for '
        'all subjects from the first year. And there was a political '
        'movement for which the language was the point rather than the '
        'means.',
        'The cases that follow are more modest and more informative. Welsh '
        'had about half a million speakers in 1991 and has rather more now, '
        'after a reversal that took thirty years and rested on three '
        'things: compulsory teaching to sixteen, a legal right to use the '
        'language in dealings with the state, and a television channel. The '
        'channel is often mentioned first and was probably the least '
        'important; the schools produced the speakers.',
        'Maori and Hawaiian both show the same pattern in sharper form. '
        'Both had falling numbers of elderly speakers and almost no child '
        'speakers by the nineteen-seventies. Both responded with '
        'immersion nurseries, in which small children spend the whole day '
        'with fluent older speakers, and both have produced a generation of '
        'fluent young adults. Both have also discovered the limit of the '
        'method, which is that a child who is fluent at six and then enters '
        'an English-medium school and an English-speaking labour market '
        'will not raise children in the language.',
        'That limit is the central finding of the whole literature, and it '
        'is unwelcome. Transmission between generations depends on there '
        'being somewhere, outside the school, where the language is the '
        'ordinary medium of consequential activity. Where that exists, as '
        'in parts of Wales for local government and broadcasting, numbers '
        'hold. Where it does not, a revival produces competent speakers who '
        'conduct their adult lives in another language, and the gains '
        'disappear in the following generation.',
        'The practical implications run against instinct. Dictionaries, '
        'grammars and archives are necessary and do not produce speakers. '
        'Adult evening classes have the poorest record of any intervention '
        'measured. What works is small children with fluent adults for many '
        'hours, and employment in which the language is used because the '
        'work requires it rather than because a policy encourages it.',
        'None of this answers the question of whether a revival is worth '
        'the money, which is not a linguistic question. What the evidence '
        'can settle is narrower and useful: a revival is a project in '
        'early-years education and in the labour market, and a government '
        'that funds a television channel and a dictionary while the schools '
        'teach the language for three hours a week has bought the symbols '
        'of a revival and not the thing itself.',
              ('One further complication deserves attention, because it '
               'divides people who agree about everything else. A revived '
               'language is not the language that was lost. The Hebrew spoken '
               'in Tel Aviv has a sound system shaped by the first languages '
               'of its earliest speakers, a vocabulary extended by deliberate '
               'coinage for everything invented after the second century, and '
               'a syntax that scholars of the older written language find in '
               'places simply wrong. Revived Cornish exists in three competing '
               'standardised forms, each with a defensible claim to '
               'authenticity and none with a continuous line of transmission. '
               'For some participants this is a fatal objection and for others '
               'a category error, on the ground that every living language '
               'changes and that a language with speakers has a better claim '
               'to existence than a correct one with none. The dispute cannot '
               'be settled by evidence, and it matters practically, because it '
               'determines which standard the schools adopt and whether the '
               'first generation of new speakers is told that what it speaks '
               'is the language or an approximation to it.')],
       items=[
        (
         'Which paragraph distinguishes two kinds of threatened '
         'language?',
         ['Paragraph 1', 'Paragraph 2', 'Paragraph 4', 'Paragraph 6'],
         1,
         'Paragraph 2 separates the endangered from the dormant case.',
         {0: 'Paragraph 1 sets out the scale of language loss.', 2: 'Paragraph 4 describes the Welsh case.', 3: 'Paragraph 6 states the central finding of the '
             'literature.'}),
        (
         'Which paragraph states the central finding of the '
         'literature?',
         ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 8'],
         2,
         'Paragraph 6 identifies transmission between generations as '
         'the limit.',
         {0: 'Paragraph 4 describes the Welsh case.', 1: 'Paragraph 5 describes Maori and Hawaiian.', 3: 'Paragraph 8 states what the evidence can settle.'}),
        (
         'Which paragraph names the intervention with the poorest '
         'record?',
         ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
         2, 'Paragraph 7 names adult evening classes.',
         {0: 'Paragraph 5 describes Maori and Hawaiian.', 1: 'Paragraph 6 states the central finding of the '
             'literature.', 3: 'Paragraph 8 states what the evidence can settle.'}),
        ('About what proportion of languages are expected to lose their '
         'native speakers this century?', None, 'half',
         'Paragraph 1 gives the figure against seven thousand '
         'languages.'),
        ('A dormant language has no ____________ speakers.',
         None, 'native',
         'Paragraph 2 contrasts this with an endangered language.'),
        (
         'Hebrew was in continuous use for how long before the '
         'revival?',
         ['eight centuries', 'eighteen centuries', 'two centuries', 'it was not in use'],
         1,
         'Paragraph 3 says it was in liturgical and scholarly use '
         'throughout.',
         {0: 'Eight centuries understates the period given.', 2: 'Two centuries understates the period given.', 3: 'It was in continuous liturgical and scholarly use.'}),
        ('What Hebrew lacked was ____________ who spoke it at home.',
         None, 'children',
         'Paragraph 3 identifies this as the gap the revival filled.'),
        (
         'The Hebrew school system used the language for all subjects '
         'from the first year.',
         ['True', 'False', 'Not Given'], 0,
         'Paragraph 3 lists this among the three conditions.',
         {1: 'Paragraph 3 lists it among the three conditions that '
             'held.', 2: 'The condition is stated explicitly in paragraph 3.'}),
        ('How long did the reversal in Welsh numbers take?',
         None, 'thirty years',
         'Paragraph 4 gives the period and the three measures behind '
         'it.'),
        (
         'Which of the three Welsh measures does the writer think was '
         'least important?',
         ['compulsory teaching', 'the legal right', 'the television channel', 'all were equal'],
         2, 'Paragraph 4 says the schools produced the speakers.',
         {0: 'Compulsory teaching produced the speakers.', 1: 'The legal right is not the one he discounts.', 3: 'Paragraph 4 ranks them rather than treating them '
             'equally.'}),
        ('What kind of institution did Maori and Hawaiian both use?',
         None, 'immersion nurseries',
         'Paragraph 5 describes small children spending the day with '
         'fluent older speakers.'),
        ('Transmission depends on somewhere outside the ____________ '
         'where the language is ordinary.', None, 'school',
         'Paragraph 6 states the condition on which numbers hold.'),
        ('According to the writer, a government that funds a channel and '
         'a dictionary while schools teach three hours a week has bought '
         'the ____________ of a revival.', None, 'symbols',
         'The final sentence states what such a government has not '
         'bought.')]),

  dict(no=3, first=27,
       heading='The last mile',
       kind='Reading Passage 3',
       blurb='You should spend about 20 minutes on Questions 27–40, '
             'which are based on Reading Passage 3 below.',
       qtype='Questions 27-40',
       paras=[
        'In the economics of delivering anything to anybody, the expensive '
        'part is almost never the long part. Moving a container of vaccine '
        'from a factory in India to a port in East Africa is cheap per dose '
        'and highly reliable. Moving the same dose from a district store to '
        'a village forty kilometres away, in a usable condition, on a day '
        'when a nurse is present and children have been brought, accounts '
        'for the majority of the cost and nearly all of the failure. The '
        'problem has a name, the last mile, and it is general.',
        'For vaccines the binding constraint is temperature. Most require '
        'storage between two and eight degrees, and both ends of that range '
        'matter: freezing destroys several vaccines as reliably as heat '
        'does, and freezing is the commoner failure, because a well-meaning '
        'health worker with a cold box and plenty of ice will produce it. '
        'Studies that have placed electronic monitors inside shipments '
        'repeatedly find that a substantial minority of consignments have '
        'been below zero at some point, in rich and poor countries alike.',
        'That finding has an uncomfortable implication. A coverage figure, '
        'which is what ministries report and donors fund against, counts '
        'doses administered. It does not count doses that were '
        'administered after being frozen, which are recorded as successes '
        'and confer no protection. The gap between the reported figure and '
        'the achieved one is unknown and is certainly not zero.',
        'The engineering responses have been more successful than the '
        'institutional ones. Vaccine vial monitors, small heat-sensitive '
        'labels that darken irreversibly, now appear on most doses and let '
        'a worker with no equipment discard what has been cooked. They do '
        'not detect freezing, which is the point at which the story becomes '
        'interesting: the cheap, elegant, widely adopted solution addresses '
        'the less common failure, because heat damage was the problem '
        'everybody expected.',
        'Solar refrigerators have removed the dependence on fuel deliveries '
        'and on grid electricity, and a generation of them failed for a '
        'reason nobody anticipated. The early models used batteries, and '
        'the batteries lasted about three years in field conditions, after '
        'which the refrigerator became a cupboard. Replacement batteries '
        'required a procurement cycle, a budget line and a technician, and '
        'in many districts they required all three to exist '
        'simultaneously. The current generation freezes water during the '
        'day and uses the ice to hold temperature overnight, which has no '
        'battery and therefore nothing to replace.',
        'That design principle, choosing the technology whose failure mode '
        'the local system can absorb, is the most transferable lesson in '
        'the field, and it generalises well beyond refrigeration. A '
        'slightly less efficient pump that any mechanic can repair will '
        'deliver more water over ten years than an efficient one that '
        'requires a part from abroad. The calculation that selects the '
        'second is not wrong about efficiency; it is answering a question '
        'about the machine rather than about the system the machine will '
        'live in.',
        'The remaining difficulties are not technical at all. A nurse who '
        'must travel to a village needs transport, a per diem and a day '
        'without a clinic to run, and these are the items that vanish '
        'first in a budget revision. Several evaluations have found that '
        'outreach sessions were cancelled for want of fuel in districts '
        'that had functioning refrigerators, monitored shipments and full '
        'stores, which is a system failing at its cheapest link while every '
        'expensive component works.',
        'The conclusion that the literature now reaches, with some '
        'reluctance, is that the last mile is not a logistics problem with '
        'a logistics solution. It is a problem about which activities have '
        'a protected budget line. Where outreach is funded as an '
        'entitlement rather than as an activity, coverage is stable; where '
        'it competes annually with everything else, it is the first thing '
        'cut, and the cold chain that was built to deliver it stands '
        'working and idle.',
              ('It is worth adding what has happened where the funding '
               'question was actually answered, because the number of such '
               'cases is small and they are consistent. In several states of '
               'southern India, outreach immunisation sessions are scheduled '
               'on fixed days of the month, published a year ahead, and paid '
               'for out of a line that district officers are not permitted to '
               'move. Coverage in those states has been stable for two '
               'decades, through changes of government and through periods '
               'when the health budget as a whole fell. The sessions are not '
               'better organised than elsewhere and the refrigerators are no '
               'better; what differs is that the cheapest item in the chain '
               'has been made the hardest one to cancel, which is the opposite '
               'of how budgets are normally constructed and is the entire '
               'finding.')],
       items=[
        (
         'Which paragraph explains why reported coverage may overstate '
         'protection?',
         ['Paragraph 1', 'Paragraph 3', 'Paragraph 5', 'Paragraph 7'],
         1,
         'Paragraph 3 explains that frozen doses are recorded as '
         'successes.',
         {0: 'Paragraph 1 introduces the last-mile problem.', 2: 'Paragraph 5 describes the solar refrigerators.', 3: 'Paragraph 7 describes a system failing at its cheapest '
             'link.'}),
        (
         'Which paragraph states a design principle that generalises '
         'beyond vaccines?',
         ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 8'],
         2, 'Paragraph 6 gives the pump example.',
         {0: 'Paragraph 4 describes the vial monitors.', 1: 'Paragraph 5 describes the solar refrigerators.', 3: 'Paragraph 8 gives the conclusion about budget lines.'}),
        (
         'Which paragraph describes a system failing at its cheapest '
         'link?',
         ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
         2, 'Paragraph 7 reports outreach cancelled for want of fuel.',
         {0: 'Paragraph 5 describes the solar refrigerators.', 1: 'Paragraph 6 states a design principle that generalises '
             'beyond vaccines.', 3: 'Paragraph 8 gives the conclusion about budget lines.'}),
        ('Most vaccines require storage between two and ____________ '
         'degrees.', None, 'eight',
         'Paragraph 2 says both ends of the range matter.'),
        ('Which is the commoner failure?',
         ['heat', 'freezing', 'light', 'vibration'], 1,
         'Paragraph 2 explains that a cold box with plenty of ice '
         'produces it.',
         {0: 'Heat is the failure everybody expected.', 2: 'Light is not among the failures discussed.', 3: 'Vibration is not mentioned in the passage.'}),
        (
         'Monitors placed inside shipments find below-zero episodes '
         'only in poor countries.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 2 says the finding holds in rich and poor '
         'countries alike.',
         {0: 'Paragraph 2 says the finding holds in rich countries '
             'too.', 2: 'Where the episodes are found is stated in paragraph 2.'}),
        ('A coverage figure counts doses ____________.',
         None, 'administered',
         'Paragraph 3 explains what it therefore cannot distinguish.'),
        ('What do vaccine vial monitors detect?',
         ['freezing', 'heat', 'light', 'expiry'], 1,
         'Paragraph 4 says they do not detect freezing, which is the '
         'point of the paragraph.',
         {0: 'Freezing the commoner failure.', 2: 'Light is not what the monitors respond to.', 3: 'Expiry dates are printed, not monitored by the label.'}),
        ('Early solar refrigerators failed because their ____________ '
         'lasted about three years.', None, 'batteries',
         'Paragraph 5 explains what happened to the refrigerator '
         'afterwards.'),
        ('The current generation of refrigerators holds temperature '
         'overnight using ____________.', None, 'ice',
         'Paragraph 5 says this leaves nothing to replace.'),
        ('A less efficient pump may deliver more water because any '
         '____________ can repair it.', None, 'mechanic',
         'Paragraph 6 contrasts this with a part from abroad.'),
        (
         'The writer says the efficiency calculation answers a '
         'question about the machine rather than about the',
         ['budget', 'system', 'manufacturer', 'climate'], 1,
         'Paragraph 6 states exactly this distinction.',
         {0: 'The budget appears later, in paragraph 7.', 2: 'The manufacturer is not the contrast drawn.', 3: 'Climate is part of the system, not the contrast.'}),
        ('Which items vanish first in a budget revision?',
         ['refrigerators', 'monitors', 'transport and allowances', 'vaccines'],
         2,
         'Paragraph 7 lists what a nurse travelling to a village '
         'needs.',
         {0: 'Refrigerators were working in the districts described.', 1: 'Monitors appear on most doses and were not cut.', 3: 'Full stores of vaccine are part of the same finding.'}),
        ('Coverage is stable where outreach is funded as an '
         '____________.', None, 'entitlement',
         'The final paragraph contrasts this with annual competition for '
         'funds.')]),
 ])
