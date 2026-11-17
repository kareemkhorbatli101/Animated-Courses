# -*- coding: utf-8 -*-
"""Volume 4 timed Writing paper: both Task 1 forks and one Task 2, 60 min."""

_FARM = dict(kind='process',
             title='How drinking water reaches a city of one million',
             sub='six stages, from reservoir to tap',
             stages=[('Reservoir', 'Water is held for six to ten weeks, '
                      'which allows particles to settle'),
                     ('Screening', 'Leaves and debris are removed on a '
                      'moving mesh'),
                     ('Coagulation', 'A salt is added so that fine '
                      'particles clump together'),
                     ('Filtration', 'The water passes down through sand '
                      'beds about a metre deep'),
                     ('Disinfection', 'Chlorine is added and held for '
                      'thirty minutes'),
                     ('Storage and supply', 'Covered tanks feed the '
                      'network by gravity')])

WPAPER = dict(
 vol=4, band='6.5', level='B2',
 title='Writing Paper',
 intro=(
   'Sixty minutes, two tasks. Twenty minutes on Task 1 and forty on Task 2, '
   'because Task 2 carries twice the marks. Both Task 1 forks are printed: '
   'Academic candidates answer Task 1A, General Training candidates answer '
   'Task 1GT, and everybody answers Task 2.'),
 keyintro=(
   'A model at band 6.5 and the checks to apply to your own script. At 6.5 '
   'the examiner is no longer asking whether the task has been done. They '
   'are asking whether the answer selects well, whether every paragraph is '
   'needed, and whether the writer controls sentences long enough to hold a '
   'qualified idea.'),
 instruct=[
  'Write 20 and 60 at the top of the page. Stop Task 1 at minute twenty '
  'whatever state it is in; an unfinished Task 2 costs more.',
  'Spend three minutes outlining Task 2 before writing. Position, two '
  'paragraphs named, two supports each, and the concession you will make.',
  'In a process diagram, the stages are given to you. Your work is the '
  'linking and the selection, not the listing.',
  'Keep four minutes at the end for both tasks. Read for your own three '
  'habitual errors and for any sentence you cannot follow on one reading.',
  'Do not copy the prompt into your answer; it is not counted and it costs '
  'two minutes.'],

 tasks=[

  dict(no=1, task='Task 1', fork='A', clock='20 minutes',
       heading='How drinking water reaches a city of one million',
       figure=_FARM,
       prompt=('The diagram below shows the stages by which drinking water '
               'is supplied to a city of one million people. Summarise the '
               'information by selecting and reporting the main features. '
               'Write at least 150 words.'),
       instruct='  Write at least 150 words. You have 20 minutes.',
       lines=14,
       model=[
        'The diagram shows the six stages through which water passes before '
        'it is supplied to the taps of a city of one million people. The '
        'process is continuous and runs from a reservoir at one end to a '
        'network of covered storage tanks at the other.',
        'Water is first held in the reservoir for between six and ten weeks. '
        'This long period does no work beyond allowing suspended particles '
        'to settle, which means that the treatment proper begins with water '
        'that is already partly clean. It then passes over a moving mesh '
        'screen, where leaves and larger debris are taken out.',
        'The three central stages are chemical and physical in turn. A salt '
        'is added so that the remaining fine particles clump together into '
        'pieces large enough to be caught, after which the water filters '
        'downwards through sand beds roughly a metre deep. Chlorine is then '
        'added and the water is held for thirty minutes so that the '
        'disinfectant has time to act.',
        'Finally the treated water is stored in covered tanks, from which it '
        'is distributed through the network by gravity rather than by '
        'pumping. Overall, the sequence moves from the slow removal of large '
        'material to the rapid removal of invisible material, and only the '
        'last two stages involve anything being added.'],
       notes=[
        'The second paragraph says what the long reservoir stage is for and '
        'what follows from it. Explaining the purpose of a stage, where the '
        'diagram makes it clear, is selecting; copying the caption is not.',
        'The three middle stages are grouped under one organising sentence: '
        'chemical and physical in turn. At 6.5 the grouping is what the '
        'examiner reads as coherence, and it is worth more than any linking '
        'phrase.',
        'The final sentence is an overview and it is genuinely an '
        'observation: from slow and large to rapid and invisible, with '
        'addition only at the end. It could not have been written without '
        'reading the whole diagram.',
        'The tense is the present simple passive throughout, which is '
        'correct for a process and easy to get wrong halfway down. Note that '
        'no stage is numbered in the answer; the sequence is carried by the '
        'ordering words instead.'],
       checks=[
        'Have you grouped the stages, or did you write six sentences in a '
        'row beginning with the next stage?',
        'Is your overview an observation about the process as a whole, or a '
        'restatement of the first sentence?',
        'Is the tense consistent? Find the point where you slipped out of '
        'the passive; most answers have one.',
        'Have you added any fact the diagram does not show, such as why '
        'chlorine works?',
        'Did you reach 150 words without listing, and did you stop at '
        'twenty minutes?']),

  dict(no=2, task='Task 1', fork='GT', clock='20 minutes',
       heading='A letter recommending somebody for a post',
       prompt=('A colleague has applied for a post in another department and '
               'has asked you to write in support. Write a letter to the '
               'head of that department. In your letter explain how you '
               'know the person, describe the work they have done with you, '
               'and say why you think they are suited to the post. Write at '
               'least 150 words. Begin your letter Dear Dr Whitlock.'),
       instruct='  Write at least 150 words. You have 20 minutes.',
       lines=14,
       model=[
        'Dear Dr Whitlock,',
        'I am writing in support of Marta Osei, who has applied for the '
        'post of records officer in your department. Marta and I have shared '
        'an office for three years and I have been her line manager for the '
        'last eighteen months.',
        'For most of that time she has run the archive transfer, which '
        'involved cataloguing about nine thousand files and deciding which '
        'of them could be destroyed. The work was tedious, the rules were '
        'ambiguous in places, and she wrote the guidance we now use because '
        'nobody had written it before. She also trained two temporary staff '
        'and neither of them needed a second explanation of anything.',
        'I think she is well suited to the post for two reasons. The first '
        'is that she is unusually willing to say when a rule does not cover '
        'a case, rather than guessing and moving on, which is the quality '
        'the post most obviously needs. The second is that she writes '
        'clearly, and your department publishes what it decides.',
        'I would be glad to answer any questions about her work.',
        'Yours sincerely,',
        'J. Petrakis'],
       notes=[
        'The relationship is given with a duration and a role, which is what '
        'makes a recommendation worth anything: three years in one office, '
        'eighteen months as line manager.',
        'The work is described through a specific project with a number in '
        'it, and through a difficulty that was overcome. "She wrote the '
        'guidance because nobody had" is evidence; "she is hard-working" is '
        'not.',
        'The suitability is argued in two numbered reasons, each tied to '
        'something the receiving department actually does. A '
        'recommendation that lists virtues in the abstract reads as a '
        'template.',
        'Dear Dr Whitlock takes Yours sincerely. The register is formal '
        'throughout and the praise is specific rather than warm, which is '
        'the right tone for this task and the one candidates most often '
        'miss.'],
       checks=[
        'Does your first paragraph say who, what post, and how you know '
        'them, with a duration?',
        'Is there at least one number or named task in your description of '
        'the work?',
        'Are your reasons tied to the post, or would they fit any post at '
        'all?',
        'Is the register consistently formal, and is your sign-off matched '
        'to a named recipient?',
        'Did you answer all three bullets in identifiable places, and reach '
        '150 words?']),

  dict(no=3, task='Task 2', fork=None, clock='40 minutes',
       heading='Who should pay for public infrastructure',
       prompt=('Some people think that large public projects such as water '
               'systems and railways should be paid for by taxation. Others '
               'think the people who use them should pay through charges. '
               'Discuss both views and give your own opinion. Write at '
               'least 250 words.'),
       instruct='  Write at least 250 words. You have 40 minutes.',
       lines=20,
       criterion=[('A position that survives the strongest objection',
                   'Task Response'),
                  ('Each paragraph earns its place; nothing repeats',
                   'Coherence and Cohesion'),
                  ('Precision in the words that carry the argument',
                   'Lexical Resource'),
                  ('Long sentences held under control',
                   'Grammatical Range and Accuracy')],
       model=[
        'How a country pays for its water mains and its railways looks like '
        'an accounting question and is in fact a question about who is '
        'counted. My view is that taxation should pay for anything whose '
        'benefits cannot be confined to its users, and that charges are '
        'appropriate and even desirable where they can.',
        'The argument for user charges is that they are honest. If I pay for '
        'what I use, I use less of it, and the money follows demand rather '
        'than following political attention. Water metering has reduced '
        'household consumption wherever it has been introduced, and a '
        'railway whose fares cover its costs is not competing each year with '
        'schools for a share of the same budget.',
        'The argument for taxation rests on the fact that most '
        'infrastructure benefits people who never touch it. A treated water '
        'supply suppresses the diseases that would otherwise reach everybody '
        'in the city, including the household with a private well. A '
        'railway raises the value of land for miles around its stations, and '
        'those landowners pay no fare. If only users pay, the people who '
        'gain most contribute least, which is not a subsidy question but a '
        'fairness one.',
        'The strongest objection to my position is that almost any benefit '
        'can be described as spilling over, so the test I have proposed '
        'licenses unlimited public spending. I accept the difficulty, and '
        'would answer it by asking how large the uncounted benefit is '
        'relative to the private one. For water the answer is very large; '
        'for a city centre car park it is close to nothing.',
        'In conclusion, the choice is not between two philosophies of '
        'government but between two measurements, and the question worth '
        'asking of any project is how much of its benefit escapes the '
        'person who pays.'],
       notes=[
        'The position is a criterion rather than a side, which is what '
        'allows the essay to use both arguments without sitting on the '
        'fence. At 6.5 an examiner is looking for a position that organises '
        'the essay, not merely one that appears in it.',
        'The fourth paragraph states the strongest objection to the writer\'s '
        'own view and answers it. This is the single most reliable way to '
        'move an essay from 6 to 6.5, and it is a structural decision rather '
        'than a matter of language.',
        'The examples are chosen to carry the argument: the household with a '
        'private well, the landowner who pays no fare. Each is a case where '
        'the benefit escapes the payer, which is precisely the criterion '
        'being defended.',
        'The sentences are long where the idea is qualified and short where '
        'it is not. "For water the answer is very large; for a city centre '
        'car park it is close to nothing" is the shortest sentence in the '
        'essay and does the most work.'],
       checks=[
        'Is your position a criterion or a side? A criterion lets you use '
        'both sets of arguments without contradiction.',
        'Did you state the strongest objection to your own view and answer '
        'it? If not, add that paragraph before you add anything else.',
        'Is every example doing argumentative work, or is one of them '
        'decoration?',
        'Read your three longest sentences aloud. Is each one followable on '
        'a single reading?',
        'Does any paragraph repeat another in different words? Cut the '
        'weaker one; at this band length without content is visible.',
        'Did you reach 250 words and stop at forty minutes?']),
 ])
