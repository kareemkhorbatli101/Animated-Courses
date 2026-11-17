# -*- coding: utf-8 -*-
"""Volume 2 second timed Reading paper: Academic, 3 passages, 40 questions."""

PAPER = dict(
 vol=2, level='B1+', band='5.5', form='a',
 title='Reading Paper 2 · Academic',
 intro=(
   'One hour. Forty questions. Three passages, totalling about eighteen '
   'hundred words. Sit this paper at least a week after the first one, '
   'and only after you have read every explanation in the first key. A '
   'second paper sat the same afternoon measures your stamina and '
   'nothing else.'),
 instruct=[
  'Write 20, 40 and 60 at the top of this page before you begin. Those '
  'are the clock times by which each passage should be finished.',
  'Before you start, write down the two question types that cost you '
  'most marks on the first paper. Be slow and careful on those here.',
  'Move on when your time is up, even in the middle of a question. '
  'Passage 3 carries as many marks as Passage 1.',
  'Answer every question, including the ones you are guessing. A blank '
  'is a mark given away.',
  'When you mark this paper, compare the two scores question type by '
  'question type. Two totals tell you almost nothing you can act on.'],

 passages=[

  dict(no=1, first=1,
       heading='The price tag',
       kind='Reading Passage 1',
       blurb='You should spend about 20 minutes on Questions 1–13, '
             'which are based on Reading Passage 1 below.',
       qtype='Questions 1-13',
       paras=[
        'For most of the history of buying and selling there were no '
        'prices. There were asking prices, and what you paid depended on '
        'who you were, how much the seller needed the money that day, and '
        'how good you were at arguing. The fixed price, printed on a label '
        'and the same for everybody, is about a hundred and seventy years '
        'old.',
        'It appears to have been introduced in several places at once in '
        'the eighteen-fifties. A Quaker shopkeeper in Pennsylvania is often '
        'credited with the first, and the religious argument he gave is '
        'worth repeating: charging two customers different sums for the '
        'same goods was, he said, a form of lying. The commercial argument '
        'came later and mattered more.',
        'That argument was about staff. A shop where every sale is '
        'negotiated needs assistants who can negotiate, and such people are '
        'expensive and hard to replace. A shop with fixed prices can employ '
        'somebody on their first morning, because the only skill required '
        'is reading the label. The department stores that grew in the '
        'eighteen-sixties and seventies were built on this, and they could '
        'not have existed without it.',
        'The fixed price also changed what a shop could be. If the price is '
        'on the goods, the customer can look without speaking to anybody, '
        'and browsing becomes possible for the first time. Window displays, '
        'wide aisles and the idea of going shopping rather than going to '
        'buy a particular thing all follow from a small piece of card.',
        'There was a cost, and it fell on the customers who had been good '
        'at arguing. A fixed price is the same for a confident buyer and a '
        'nervous one, which helps the nervous and removes an advantage from '
        'the confident. Several nineteenth-century writers complained that '
        'the new shops were impersonal, and they were right, although what '
        'they were describing as coldness was in part the absence of a '
        'contest they had been winning.',
        'Fixed prices were never universal and are becoming less so. A '
        'house, a car and a salary are still negotiated. More interestingly, '
        'online selling has made it cheap to show different prices to '
        'different people, based on where they live, what they have bought '
        'before, or which device they are using. Several airlines and '
        'retailers have been found doing exactly this.',
        'That is not a return to the old market, and the difference matters. '
        'In a market both parties could see each other and both knew a '
        'negotiation was happening. In the online version only one party '
        'knows that the price is personal, and the other believes they are '
        'looking at the price. The printed label, which was introduced as a '
        'guarantee of honesty, turns out to have been doing exactly that '
        'job for a century and a half.',
              ('One further consequence is worth recording, because it was not '
               'foreseen by anybody. A shop with fixed prices can be audited. '
               'If the label says the price, then the till can be reconciled '
               'with the stock, and an owner can tell whether an assistant is '
               'pocketing the difference. Under negotiation this was '
               'impossible, because the price of any particular sale was '
               'whatever the assistant said it had been. Several of the large '
               'stores of the period introduced the fixed price and the cash '
               'register within a few years of each other, and the historians '
               'who have looked at the accounts think the second mattered more '
               'to the owners than the first.')],
       items=[
        ('How old is the fixed price?',
         ['about fifty years', 'about a hundred and seventy years', 'about four hundred years', 'nobody knows'],
         1, 'Paragraph 1 gives the approximate age at the end.',
         {0: 'Fifty years is far too recent for the fixed price.', 2: 'Four hundred years predates the eighteen-fifties.', 3: 'Paragraph 1 does give an approximate age.'}),
        ('In which decade was the fixed price introduced?',
         None, 'eighteen-fifties',
         'Paragraph 2 says it appeared in several places at once in that '
         'decade.'),
        ('What religious argument was given for fixed prices?',
         ['that bargaining wasted time', 'that different prices were a form of lying', 'that shops should close on Sundays', 'that prices should be low'],
         1,
         'Paragraph 2 reports the Pennsylvania shopkeeper\u2019s reasoning.',
         {0: 'Wasted time is a commercial argument, not a religious '
             'one.', 2: 'Sunday closing is not mentioned in the passage.', 3: 'Low prices are not what the shopkeeper argued for.'}),
        ('The writer says the commercial argument came first.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 2 says it came later and mattered more.'),
        ('A shop with negotiated prices needs assistants who are',
         ['cheap to employ', 'able to read labels', 'expensive and hard to replace', 'available in the evening'],
         2, 'Paragraph 3 explains the staffing cost of negotiation.',
         {0: 'Cheap staff are what the fixed price allows.', 1: 'Reading labels is the only skill a fixed price needs.', 3: 'Evening availability is not discussed.'}),
        ('In which decades did department stores grow?',
         None, 'eighteen-sixties and seventies',
         'Paragraph 3 says they could not have existed without fixed '
         'prices.'),
        ('What became possible for the first time once prices were '
         'displayed?', None, 'browsing',
         'Paragraph 4 says the customer can look without speaking to '
         'anybody.'),
        ('Fixed prices help nervous customers.',
         ['True', 'False', 'Not Given'], 0,
         'Paragraph 5 says the same price helps the nervous and removes '
         'an advantage from the confident.'),
        (
         'Nineteenth-century writers who called the new shops '
         'impersonal were, the writer says,',
         ['completely wrong', 'exaggerating', 'right', 'writing about a different kind of shop'],
         2,
         'Paragraph 5 says they were right, while explaining what else '
         'they were describing.',
         {0: 'Paragraph 5 says they were right.', 1: 'The writer does not call them exaggerated.', 3: 'They were describing the new fixed-price shops.'}),
        ('Which of these is still negotiated, according to the passage?',
         None, 'a salary',
         'Paragraph 6 lists a house, a car and a salary.'),
        ('Online sellers may vary prices according to the ____________ a '
         'customer is using.', None, 'device',
         'Paragraph 6 lists location, purchase history and device.'),
        ('The writer thinks online pricing is a return to the old '
         'market.', ['True', 'False', 'Not Given'], 1,
         'Paragraph 7 opens by denying it and gives the difference.'),
        ('In the online version, how many parties know the price is '
         'personal?', None, 'one',
         'The last paragraph contrasts this with the open negotiation of '
         'a market.')]),

  dict(no=2, first=14,
       heading='Why every banana is the same banana',
       kind='Reading Passage 2',
       blurb='You should spend about 20 minutes on Questions 14–26, '
             'which are based on Reading Passage 2 below.',
       qtype='Questions 14-26',
       paras=[
        'The bananas sold in European and North American shops are not a '
        'variety in the ordinary sense. They are a single plant. Every one '
        'of them is a cutting, descended from one original, and genetically '
        'they are as similar to each other as the two hands of one person. '
        'This is not a recent development, and it has already caused one '
        'disaster.',
        'Cultivated bananas do not produce usable seeds. The small black '
        'specks in the fruit are the remains of seeds that no longer work. '
        'A grower who wants a new plant therefore takes a shoot from an old '
        'one, which means every plantation is a copy, and a field of '
        'bananas has no genetic variation at all.',
        'Until the nineteen-fifties the variety grown for export was called '
        'the Gros Michel. Growers and shippers regarded it as better than '
        'what we eat now: it travelled well, it was sweeter, and it came in '
        'larger bunches. Then a soil fungus began to spread through '
        'plantations in Central America.',
        'The fungus, known as Panama disease, enters through the roots and '
        'blocks the vessels that carry water up the plant. The leaves wilt '
        'and the plant dies. It cannot be treated, and because it lives in '
        'the soil it cannot be removed by destroying the crop. Once a field '
        'is infected, that field cannot grow bananas of that kind again, '
        'possibly for decades.',
        'The industry lost the Gros Michel almost entirely. What saved it '
        'was another variety, the Cavendish, which was resistant to that '
        'strain of the fungus and which nobody had previously thought good '
        'enough to export. By 1965 it had replaced the Gros Michel across '
        'the trade. Almost every banana now sold outside the countries where '
        'they grow is a Cavendish.',
        'The difficulty is that nothing about the underlying problem was '
        'solved. The Cavendish is also a single clone, planted in enormous '
        'quantities, and a new strain of the same fungus appeared in the '
        'nineteen-nineties. It has since been found in Asia, Australia, '
        'Africa and, in 2019, South America. The Cavendish has no '
        'resistance to it.',
        'Several responses are being tried. Plant breeders are working on '
        'hybrids, which is slow because the plants have no seeds to breed '
        'from. Others are editing the Cavendish genome directly, which is '
        'faster and which several markets would not accept. A third group '
        'argues that the real fault is the monoculture rather than the '
        'variety, and that an industry built on one plant will keep meeting '
        'this problem whatever the plant is.',
        'That last argument has the history on its side. The banana trade '
        'has now twice built itself on a single clone, and the first time it '
        'took about thirty years for a fungus to find it. What makes the '
        'case interesting is that everybody involved knew the risk. The '
        'economics of shipping and ripening a soft fruit across an ocean '
        'reward uniformity so strongly that the industry chose the risk '
        'with its eyes open, twice.',
              ('There is one more detail that makes the case unusually clear. '
               'Because the plants are clones, a disease that can kill one can '
               'kill all of them, and this is known in advance rather than '
               'discovered afterwards. Plant pathologists published warnings '
               'about the Cavendish in the nineteen-sixties, at the moment of '
               'its triumph, and the warnings were specific about the '
               'mechanism and vague about the date. Being right about a risk '
               'and wrong about its timing is, in commercial terms, almost the '
               'same as being wrong, which is why the warnings changed nothing '
               'for thirty years.')],
       items=[
        ('What are the black specks in a cultivated banana?',
         ['young seeds', 'the remains of seeds that no longer work', 'a fungus', 'fibres'],
         1,
         'Paragraph 2 explains why the plants cannot be grown from '
         'seed.',
         {0: 'They are remains rather than young seeds.', 2: 'The fungus attacks the roots, not the fruit.', 3: 'Fibres are not what paragraph 2 describes.'}),
        ('How does a grower produce a new banana plant?',
         None, 'a cutting',
         'Paragraph 1 and paragraph 2 both describe taking a shoot from '
         'an old plant.'),
        ('Which variety was exported before the nineteen-fifties?',
         None, 'Gros Michel',
         'Paragraph 3 names it and says growers preferred it.'),
        ('The Gros Michel was considered worse than what is eaten now.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 3 says growers and shippers regarded it as better.'),
        ('Where does Panama disease enter the plant?',
         ['the leaves', 'the fruit', 'the roots', 'the flower'], 2,
         'Paragraph 4 describes the route and the blockage it causes.',
         {0: 'The leaves wilt once the vessels are blocked.', 1: 'The fruit is not the route of entry.', 3: 'The flower plays no part in the infection.'}),
        ('Panama disease can be treated with chemicals.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 4 says it cannot be treated.'),
        ('Why does destroying the crop not remove the disease?',
         ['it spreads through the air', 'it lives in the soil', 'it is carried by insects', 'it survives in the fruit'],
         1,
         'Paragraph 4 gives the reason an infected field stays '
         'infected.',
         {0: 'Air is not how the fungus spreads in paragraph 4.', 2: 'Insects are not named as carriers.', 3: 'The fruit is not where it survives.'}),
        ('By which year had the Cavendish replaced the Gros Michel?',
         None, '1965', 'Paragraph 5 gives the year the trade had '
         'changed over.'),
        ('Before the disaster, the Cavendish was thought good enough to '
         'export.', ['True', 'False', 'Not Given'], 1,
         'Paragraph 5 says nobody had previously thought so.'),
        ('When did a new strain of the fungus appear?',
         None, 'nineteen-nineties',
         'Paragraph 6 gives the decade and then the spread.'),
        ('In which year was the new strain found in South America?',
         None, '2019', 'Paragraph 6 lists the continents in order of '
         'discovery.'),
        ('Breeding hybrids is slow because the plants have no '
         '____________ to breed from.', None, 'seeds',
         'Paragraph 7 explains the difficulty facing plant breeders.'),
        ('What does the writer say the history supports?',
         ['the use of gene editing', 'the breeding of hybrids', 'the argument that monoculture is the real fault', 'a return to the Gros Michel'],
         2,
         'Paragraph 8 says that last argument has the history on its '
         'side.',
         {0: 'Gene editing is one response markets may refuse.', 1: 'Hybrid breeding is slow and seedless.', 3: 'The Gros Michel was lost to the first strain.'})]),

  dict(no=3, first=27,
       heading='How a word gets into a dictionary',
       kind='Reading Passage 3',
       blurb='You should spend about 20 minutes on Questions 27–40, '
             'which are based on Reading Passage 3 below.',
       qtype='Questions 27-40',
       paras=[
        'People often speak of a word being accepted into the language, as '
        'though a committee somewhere had voted. For English there is no '
        'such committee. What there is, instead, is a set of publishers who '
        'watch what people write and record it, which is a weaker and more '
        'interesting kind of authority.',
        'The method is called a corpus. A modern dictionary publisher '
        'collects text continuously: newspapers, books, transcripts, '
        'websites, and increasingly spoken material. The collection runs to '
        'billions of words, and it is searched by computer for strings that '
        'the dictionary does not yet contain. Anything appearing often '
        'enough, in enough different places, is put on a list for a human '
        'being to look at.',
        'The tests a lexicographer then applies are about spread rather '
        'than frequency. A word used ten thousand times by one community '
        'and nowhere else is not yet general English. A word used a hundred '
        'times across medicine, journalism, fiction and conversation almost '
        'certainly is. The publishers also want to see it used without '
        'explanation, because a writer who defines a word in passing is '
        'telling you the reader does not know it.',
        'Then there is the question of time. Most publishers want to see a '
        'word in use for several years before they include it, and the main '
        'reason is embarrassment. Dictionaries that moved quickly in the '
        'nineteen-nineties recorded a quantity of computing slang that '
        'nobody has used since, and those entries now have to be carried or '
        'removed, both of which are awkward.',
        'What makes the whole process harder to describe is that '
        'dictionaries disagree about what they are for. One tradition holds '
        'that a dictionary records what people say. Another holds that it '
        'advises on what they ought to say. In practice most modern English '
        'dictionaries do the first and are read as though they did the '
        'second, which is why their decisions are reported as rulings.',
        'The clearest example is a usage note. When a publisher writes that '
        'a word is widely regarded as incorrect, it is reporting a fact '
        'about readers rather than a fact about the word. Newspapers '
        'routinely translate such notes into announcements that the '
        'dictionary has banned or permitted something, which it has no '
        'power to do and no intention of doing.',
        'Removal is rarer than inclusion and more revealing. A large '
        'dictionary almost never deletes a word, because its purpose is '
        'historical as well as current, and a reader meeting an old novel '
        'needs the obsolete entry. A small one has to delete, because its '
        'pages are finite. The words that go are usually not the oldest but '
        'the ones whose moment passed, which is why a discarded print '
        'dictionary is such a precise record of what mattered in the decade '
        'it was made.',
        'None of this gives anybody the authority people assume. A word is '
        'in the language when enough people use it as though it were, and '
        'the dictionary is a report on that process which arrives several '
        'years late. The authority it has is the authority of a careful '
        'observer, which is considerable and is not the same thing as a '
        'vote.',
              ('A last observation concerns who notices any of this. Almost '
               'nobody reads a dictionary through, and the entries that are '
               'read are looked up because a reader was already unsure. That '
               'means the parts of the work that are most carefully done, the '
               'ordinary words with twenty senses apiece, are almost '
               'invisible, while the new entries, which are the least secure '
               'part of the whole book, are the ones that reach the '
               'newspapers. A lexicographer once observed that the public '
               'judges the work by the few hundred words the publisher is '
               'least confident about.')],
       items=[
        (
         'Which paragraph explains why publishers wait before '
         'including a word?',
         ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 7'],
         2,
         'Paragraph 4 gives the time test and the embarrassment that '
         'produced it.',
         {0: 'Paragraph 2 describes the corpus method.', 1: 'Paragraph 3 gives the spread test.', 3: 'Paragraph 7 explains why a large dictionary keeps '
             'obsolete words.'}),
        (
         'Which paragraph describes what a usage note actually '
         'reports?',
         ['Paragraph 3', 'Paragraph 5', 'Paragraph 6', 'Paragraph 8'],
         2,
         'Paragraph 6 explains that it reports a fact about readers.',
         {0: 'Paragraph 3 gives the spread test.', 1: 'Paragraph 5 describes the two traditions.', 3: 'Paragraph 8 states what authority a dictionary has.'}),
        (
         'Which paragraph explains why a large dictionary keeps '
         'obsolete words?',
         ['Paragraph 4', 'Paragraph 5', 'Paragraph 7', 'Paragraph 8'],
         2,
         'Paragraph 7 contrasts a historical purpose with finite '
         'pages.',
         {0: 'Paragraph 4 explains why publishers wait before '
             'including a word.', 1: 'Paragraph 5 describes the two traditions.', 3: 'Paragraph 8 states what authority a dictionary has.'}),
        ('What is the collection of text called?',
         None, 'a corpus',
         'Paragraph 2 names the method and describes its scale.'),
        ('English has an official committee that approves words.',
         ['True', 'False', 'Not Given'], 1,
         'Paragraph 1 says there is no such committee.'),
        ('The tests a lexicographer applies are mainly about',
         ['frequency', 'spelling', 'spread', 'age'], 2,
         'Paragraph 3 contrasts spread with frequency and gives an '
         'example of each.',
         {0: 'Paragraph 3 contrasts spread with frequency.', 1: 'Spelling is not among the tests described.', 3: 'Age is the separate time test of paragraph 4.'}),
        ('A writer who explains a word in passing shows that the reader '
         'does not ____________ it.', None, 'know',
         'Paragraph 3 gives this as a test of whether a word is '
         'established.'),
        ('Which decade produced computing slang that dictionaries now '
         'regret?', None, 'nineteen-nineties',
         'Paragraph 4 gives the decade and the awkwardness it caused.'),
        ('Most modern English dictionaries record what people say.',
         ['True', 'False', 'Not Given'], 0,
         'Paragraph 5 says most do the first of the two things '
         'described.'),
        (
         'According to the writer, newspapers report dictionary '
         'decisions as',
         ['careful observations', 'announcements of bans or permissions', 'historical records', 'usage notes'],
         1,
         'Paragraph 6 describes the translation newspapers routinely '
         'make.',
         {0: 'Careful observation is what the writer credits, not the '
             'papers.', 2: 'Historical records are the large dictionary\u2019s purpose.', 3: 'Usage notes are what the newspapers translate.'}),
        ('Small dictionaries have to remove words because their pages are '
         '____________.', None, 'finite',
         'Paragraph 7 gives the practical reason for deletion.'),
        ('The words removed from a small dictionary are usually the '
         'oldest ones.', ['True', 'False', 'Not Given'], 1,
         'Paragraph 7 says they are usually the ones whose moment '
         'passed.'),
        ('A word is in the language when enough people use it as though '
         'it ____________.', None, 'were',
         'The final paragraph states the writer’s own test.'),
        (
         'What kind of authority does the writer say a dictionary has?',
         ['none at all', 'the authority of a vote', 'legal authority', 'the authority of a careful observer'],
         3,
         'The last sentence of the passage names it and says what it '
         'is not.',
         {0: 'The writer calls the authority considerable.', 1: 'A vote is exactly what it is not.', 2: 'No legal authority is claimed anywhere.'})]),
 ])
