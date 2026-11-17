# -*- coding: utf-8 -*-
"""Unit 50 - Translation and Meaning. IELTS Volume 5, band 7.0."""

_ERR = dict(kind='bar',
            title='Change in machine translation scores, 2019 to 2024',
            sub='points gained or lost, four language pairs, human-rated',
            cats=['German–English', 'Spanish–English',
                  'Turkish–English', 'Yoruba–English'],
            series=[('Fluency', [14, 16, 21, 19]),
                    ('Adequacy', [11, 9, 0, -3])])

UNIT = dict(
 n=50, vol=5, level='B2+/C1', band='7.0',
 theme='Translation and Meaning',
 opener=(
   'The last unit of the volume, and the place where everything it has '
   'taught comes due. A bar chart whose four categories fall into two '
   'groups that behave alike. Two academic passages on whether a '
   'translation can be judged at all, which is a criteria argument of the '
   'kind cycle 5 has been building towards all volume. The whole outlining '
   'toolkit against a twelve-minute clock. And at the end of the book, a '
   'full Reading paper at Volume 5 length, under the real sixty '
   'minutes.'),

 cycles=[
  dict(
   sub='Getting a document translated',
   step=1,
   read=[
    dict(heading='Certified translation — what is required',
         kind='Official guidance',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('Official guidance is read for which authority wants which '
                'document',
                ['Documents for official use are accepted by one body and '
                 'refused by another, and the guidance that matters is the '
                 'guidance of the body you are submitting to.',
                 'Find the sentences that name a body and what that body '
                 'requires. Three of these six questions turn on a '
                 'distinction between two bodies, which is where the real '
                 'cost of getting this wrong sits.']),
         paras=[
          'A certified translation is a translation accompanied by a signed '
          'statement from the translator or agency confirming that it is a '
          'complete and accurate rendering of the document supplied. The '
          'statement must name the translator, give the date, and state the '
          'languages. It is not a legal oath and no court is involved in '
          'producing it.',
          'A sworn translation is produced by a translator holding a formal '
          'appointment, which exists in some countries and not in others. '
          'Where the receiving country has no such system, a certified '
          'translation plus a notarised statement is the usual equivalent, '
          'and asking the receiving body which it wants is cheaper than '
          'guessing.',
          'The Passport Office accepts certified translations. The Home '
          'Office does too, but requires the translator’s contact details '
          'on the certification page. A university will usually accept a '
          'certified transcript but not a certified degree certificate, '
          'for which it wants the original sent by the awarding '
          'institution.',
          'Where a document is to be used abroad, an apostille may be '
          'required. An apostille certifies the signature on the original '
          'document, not the translation, and is issued by the Foreign '
          'Office. Applicants who order the translation first often find '
          'they must start again.',
          'Every page must be translated, including stamps, seals, '
          'handwritten notes and anything struck through. The accepted '
          'practice for an unreadable stamp is to render it and add the '
          'word illegible in square brackets, which is a statement about '
          'the original rather than about the translator.',
          'Turnaround is three working days for documents under two '
          'thousand words. Certification adds one working day because the '
          'statement is signed in wet ink and posted. Scanned '
          'certifications are accepted by some bodies and not others.'],
         items=[
          ('A certified translation must be accompanied by a signed '
           '____________ from the translator.', None, 'statement',
           'Paragraph 1, naming the translator, the date and the '
           'languages.'),
          ('A sworn translation requires a translator holding',
           ['a university degree', 'a formal appointment',
            'agency membership', 'a notary licence'], 1,
           'Paragraph 2, a system that exists in some countries only.'),
          ('For a degree certificate, a university usually wants',
           ['a certified translation', 'a sworn translation',
            'the original sent by the awarding institution',
            'an apostille'], 2,
           'Paragraph 3, which distinguishes it from a transcript.'),
          ('An apostille certifies the signature on the ____________.',
           None, 'original',
           'Paragraph 4: not the translation, and issued by the Foreign '
           'Office.'),
          ('An illegible stamp should be rendered with the word illegible '
           'in square ____________.', None, 'brackets',
           'Paragraph 5: a statement about the original, not the '
           'translator.'),
          ('Certification adds ____________ working day to turnaround.',
           None, 'one',
           'Paragraph 6, because the statement is signed in wet ink and '
           'posted.')]),
    dict(heading='Submitting documents for certification',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Ask the receiving body what it requires, in writing, before '
          'ordering anything. The three questions to ask are whether it '
          'accepts certified or requires sworn, whether it accepts a scanned '
          'certification, and whether it needs an apostille on the '
          'original.',
          'Send a legible scan of every page, including blank reverses where '
          'a stamp appears. A photograph taken at an angle is rejected '
          'because the certification covers the document as supplied, and a '
          'document the translator cannot read is a document they cannot '
          'certify.',
          'Approve the glossary of names and places before translation '
          'begins. Personal names, place names and institution names are '
          'the items most often disputed afterwards, and a name changed '
          'after certification requires the whole statement to be reissued '
          'rather than amended.',
          'Check the draft within two working days. Checking is your '
          'responsibility for factual content: dates, figures, names and '
          'spellings. The translator is responsible for the rendering and '
          'cannot know that your mother’s name is spelt with one l rather '
          'than two.',
          'Approve the draft in writing. The certification statement is '
          'signed against the approved draft and is reissued rather than '
          'amended if anything changes afterwards, so an approval given '
          'quickly to save a day frequently costs three.'],
         items=[
          ('Ask the receiving body what it requires, in ____________.',
           None, 'writing',
           'Paragraph 1, before ordering anything.'),
          ('A photograph taken at an ____________ is rejected.', None,
           'angle',
           'Paragraph 2: certification covers the document as supplied.'),
          ('Approve the ____________ of names and places before '
           'translation begins.', None, 'glossary',
           'Paragraph 3, since a later change requires reissue.'),
          ('The client is responsible for checking ____________ content.',
           None, 'factual',
           'Paragraph 4: dates, figures, names and spellings.')])],
   listen=[
    dict(heading='Arranging a certified translation', part='Part 1',
         task='A call to a translation agency', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Agent', 'Caldecott Linguistic Services, Benedetta speaking.'),
          ('Caller', 'Hello. I need a birth certificate translated for a '
           'visa application.'),
          ('Agent', 'Which language into English?'),
          ('Caller', 'Portuguese into English.'),
          ('Agent', 'Fine. And which body is receiving it?'),
          ('Caller', 'The Home Office.'),
          ('Agent', 'Good, because that one I can answer. They accept '
           'certified, which is what we do, but they want the '
           'translator’s contact details on the same page as the '
           'certification. Not every agency does that and it is a common '
           'rejection.'),
          ('Caller', 'Certified rather than sworn, then.'),
          ('Agent', 'Portugal has sworn translators and the United Kingdom '
           'does not, so people ask for sworn and do not need it. Certified '
           'plus notarised is the equivalent if anybody insists.'),
          ('Caller', 'Nobody has insisted. How long will it take?'),
          ('Agent', 'Three working days for the translation, and '
           'certification adds one, because the statement is signed in ink '
           'and posted.'),
          ('Caller', 'Four days. My deadline is the twenty-second.'),
          ('Agent', 'Then we are comfortable. Now, the certificate — how '
           'many pages?'),
          ('Caller', 'One, but there is a stamp on the back and I cannot '
           'read it.'),
          ('Agent', 'Scan the back as well. We render the stamp and put '
           '"illegible" in square brackets, which is a statement about the '
           'document rather than about us.'),
          ('Caller', 'And my name is spelt two ways on the original.'),
          ('Agent', 'Then tell me which you want before we start. That goes '
           'in the glossary, and a name changed after certification means '
           'the whole statement is reissued rather than corrected.'),
          ('Caller', 'Ribeiro-Nakamura, with the hyphen.'),
          ('Agent', 'With the hyphen. And one last thing: will the document '
           'be used outside the United Kingdom?'),
          ('Caller', 'No, only here.'),
          ('Agent', 'Then you do not need an apostille, which is a relief, '
           'because it goes on the original and people order it last.'),
          ('Caller', 'What does the whole thing cost?'),
          ('Agent', 'Eighty-five pounds including certification and '
           'postage.')],
         items=[
          ('Language pair: ____________ into English', None, 'Portuguese',
           'For a birth certificate needed for a visa application.'),
          ('The Home Office requires the translator’s ____________ details '
           'on the certification page.', None, 'contact',
           'Which the agent calls a common cause of rejection.'),
          ('Total turnaround: ____________ working days', None, 'four',
           'Three for the translation and one for certification.'),
          ('The illegible stamp will be marked with the word illegible in '
           'square ____________.', None, 'brackets',
           'A statement about the document rather than the agency.'),
          ('The spelling to be used goes in the ____________.', None,
           'glossary',
           'Because a later change means reissuing the whole statement.'),
          ('Total cost: £____________', None, '85',
           'Including certification and postage.')])],
   speak=dict(
    part='Part 1', focus='Languages in your daily life',
    intro=('Two or three sentences each. Concrete and from your own week.'),
    qs=['How many languages do you use in a week?',
        'Do you ever need documents translated?',
        'Do you use translation apps?',
        'Is it important to learn languages where you live?'],
    shape=[('answer', 'Two, and a third badly.'),
           ('support', 'I speak Portuguese at home and English at work.'),
           ('follow-up', 'The third is Spanish, which I can read and cannot '
            'produce, which I am told is normal.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Querying a translation that contains errors',
         prompt=('You paid for a translation and it contains errors. Write a '
                 'letter to the agency. In your letter: say what you ordered '
                 'and when; give the specific errors; say what you want '
                 'done. Write at least 150 words.'),
         model=[
          'Dear Ms Osterhagen,',
          'I am writing about order 7731, a certified translation of a '
          'Portuguese birth certificate ordered on 3 April and received on '
          '11 April.',
          'Three specific renderings appear to alter the meaning of the '
          'original. First, the place of birth is given as Santo Andre; the '
          'original reads Santo Antonio do Descoberto, which is a different '
          'municipality in a different state. Second, the father’s '
          'occupation is rendered as "builder"; the original gives '
          '"engenheiro civil", which is a chartered profession and not a '
          'trade. Third, the registrar’s stamp on the reverse is omitted '
          'entirely, although it was included in the scan I sent on 3 April '
          'and your guidance states that every stamp must be rendered.',
          'I am not querying the style of the translation and I accept that '
          'two of the three may be transcription errors rather than '
          'mistranslations. The effect is the same: the document as '
          'certified does not match the document supplied, and it will be '
          'refused.',
          'I would like a corrected translation with a reissued '
          'certification statement, at no further charge, within five '
          'working days, and confirmation in writing that the reverse of the '
          'certificate has been rendered.',
          'Yours sincerely,',
          'T. Ribeiro-Nakamura'],
         notes=[
          'The errors are numbered, quoted in both languages, and each is '
          'followed by why it matters. "Builder" against "engenheiro civil" '
          'with the words "a chartered profession and not a trade" is an '
          'argument; "the translation is poor" is a complaint.',
          'Conceding that two may be transcription errors costs nothing and '
          'buys the paragraph that follows. The writer then closes the '
          'concession off: the effect is the same and the document will be '
          'refused.',
          'The remedy is specific on all four dimensions — what, with what, '
          'at what cost, by when — plus one thing in writing. Each of those '
          'is something the agency has to answer or decline.'],
         criterion=[('Errors numbered and quoted in both languages',
                     'Task Achievement'),
                    ('A concession that is then closed off',
                     'Task Response'),
                    ('A remedy specified on four dimensions',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Precise complaint with specific instances',
    explain=('A complaint about quality is weighed by how specific it is. '
             'These patterns put an instance on the page and say what it '
             'cost, which is what a supplier has to answer.'),
    examples=['Three specific renderings appear to alter the meaning of the '
              'original.',
              'The original reads "engenheiro civil", which is a chartered '
              'profession and not a trade.',
              'I accept that two of the three may be transcription errors '
              'rather than mistranslations.',
              'The document as certified does not match the document '
              'supplied.'],
    task='Rewrite each complaint so that it names an instance and its '
         'effect.',
    items=[('The translation is full of mistakes.',
            'Three renderings alter the meaning of the original, of which '
            'one changes the place of birth to a different '
            'municipality.'),
           ('They got my father’s job wrong.',
            'The original gives "engenheiro civil"; the translation gives '
            '"builder", which is a trade rather than a chartered '
            'profession.'),
           ('Part of it is missing.',
            'The registrar’s stamp on the reverse is omitted, although it '
            'appeared in the scan supplied on 3 April.'),
           ('I want this fixed quickly and free.',
            'I would like a corrected translation with a reissued '
            'certification, at no further charge, within five working '
            'days.'),
           ('Maybe it was a typing error.',
            'I accept that two of the three may be transcription errors; the '
            'effect on the submission is the same.')]),
   vocab=[('certified', 'accompanied by a signed statement of accuracy'),
          ('sworn', 'produced by a formally appointed translator'),
          ('source text', 'the document being translated from'),
          ('target text', 'the document produced by translating'),
          ('rendering', 'the way a passage has been put into the other '
           'language'),
          ('apostille', 'a certificate confirming a signature for use '
           'abroad'),
          ('notary', 'an officer who witnesses signatures'),
          ('turnaround', 'the time taken to complete a job')],
   expr=[('Three specific renderings appear to alter the meaning of the '
          'original', 'opens a precise quality complaint'),
         ('a statement about the original rather than about the translator',
          'locates responsibility for a defect'),
         ('the document as certified does not match the document supplied',
          'states the failure in terms the body cares about'),
         ('asking the receiving body which it wants is cheaper than '
          'guessing', 'practical advice stated as a comparison')],
   trans=['furthermore', 'in this connection', 'accordingly', 'in any '
          'event'],
  ),

  dict(
   sub='What gets lost',
   step=2,
   read=[
    dict(heading='Four translators on one sentence',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Hyacinth: The sentence has a word for the particular '
          'embarrassment of being thanked for something you did badly. '
          'English has no such word and I will not invent one, because an '
          'invented word puts the reader outside the text looking at my '
          'cleverness. I used eleven words and a comma and I lost the '
          'compression, which is a real loss and the smaller of the two '
          'available.',
          'B  Casimir: I kept the word. Readers of translated fiction are '
          'not children and a word in italics with no gloss teaches them '
          'something within two pages. Hyacinth calls this showing off. I '
          'call it declining to pretend the two languages map onto each '
          'other, and the reader can tell which of us is pretending.',
          'C  Perpetua: Both of them are solving the wrong problem. The '
          'sentence is funny, and neither version is funny, and the function '
          'of that sentence in the chapter is to make you laugh before a '
          'death four pages later. I would substitute a different English '
          'joke in the same position and I accept that this is indefensible '
          'on any theory I could write down.',
          'D  Ignatius: I have translated this novel and I did what Casimir '
          'did, and I now think Perpetua is right and I lacked the nerve. '
          'The loss I chose was invisible to reviewers, which is why I chose '
          'it. Her loss is visible on the page and she would be criticised '
          'for it, and the book would work.'],
         items=[
          ('Which person used a longer English phrase and accepted the loss '
           'of compression?', ['Hyacinth', 'Casimir', 'Perpetua',
            'Ignatius'], 0,
           'Eleven words and a comma, rather than an invented word.'),
          ('Which person left the original word in the text?',
           ['Hyacinth', 'Casimir', 'Perpetua', 'Ignatius'], 1,
           'In italics with no gloss, on the view that readers learn '
           'it.'),
          ('Which person would replace the joke with a different one?',
           ['Hyacinth', 'Casimir', 'Perpetua', 'Ignatius'], 2,
           'Because the sentence’s function in the chapter is to make the '
           'reader laugh.'),
          ('Which person says they chose the loss that reviewers would not '
           'notice?', ['Hyacinth', 'Casimir', 'Perpetua', 'Ignatius'], 3,
           'And now thinks another approach was right.'),
          (
           'Perpetua claims her solution can be defended on '
           'theoretical grounds.',
           ['Yes', 'No', 'Not Given'], 1,
           'She calls it indefensible on any theory she could write '
           'down.',
           {0: 'Yes would need a defence; she calls it indefensible on '
               'any theory.', 2: 'Not Given is wrong because she rates her own solution.'}),
          (
           'Casimir believes readers of translated fiction can learn '
           'from an untranslated word.',
           ['Yes', 'No', 'Not Given'], 0,
           'He says a word in italics teaches them within two pages.',
           {1: 'No would need doubt; he says a word in italics teaches '
               'them in two pages.', 2: 'Not Given is wrong because he gives the mechanism.'})])],
   listen=[
    dict(heading='A short talk: what gets lost', part='Part 2',
         task='A talk at a literary festival', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'I have been asked to say what gets lost in '
           'translation, and I am going to refuse the question in its usual '
           'form, because "lost" suggests an accident. Nothing is lost. '
           'Things are given up, by somebody, on purpose, and that person '
           'can usually tell you why.'),
          ('Speaker', 'So here is the structure of the choice. Any sentence '
           'does several things at once: it states something, it sounds a '
           'certain way, it sits at a certain level of formality, and it has '
           'a function in the paragraph around it. In the original these '
           'four arrive together. In the translation you will get three, and '
           'you choose which three.'),
          ('Speaker', 'The commonest choice, and the one reviewers reward, '
           'is to keep the statement and the register and give up the sound. '
           'Nobody notices. A reviewer comparing the two texts can check the '
           'statement, can feel the register, and has no vocabulary for the '
           'sound, so the translator who sacrifices rhythm is never '
           'criticised for it.'),
          ('Speaker', 'The bravest choice, and the one that gets people '
           'attacked, is to keep the function and give up the statement. If '
           'a sentence is there to make you laugh before a death, and the '
           'joke does not survive, you can substitute another joke. That is '
           'indefensible on paper and it is often right, and the people who '
           'do it are called unfaithful by people who have given up more.'),
          ('Speaker', 'And the choice nobody admits to is the invisible one. '
           'Most working translators, under deadline, give up whatever the '
           'reviewers cannot see. I have done it. It is not a theory of '
           'translation, it is a response to who is watching, and it shapes '
           'more published prose than every theory in the field '
           'combined.'),
          ('Speaker', 'So when somebody tells you a translation is faithful, '
           'the question to ask is: faithful to which of the four? They will '
           'usually not have thought about it, and the answer will usually '
           'be the two that are easiest to check.')],
         items=[
          ('The speaker objects to the word "lost" because it suggests',
           ['carelessness', 'an accident', 'incompetence',
            'disagreement'], 1,
           'Things are given up on purpose, by somebody.'),
          ('How many things does he say a sentence does at once?',
           ['two', 'three', 'four', 'five'], 2,
           'Statement, sound, level of formality, and function.'),
          ('The choice reviewers never criticise is giving up',
           ['the statement', 'the register', 'the sound', 'the '
            'function'], 2,
           'Because reviewers have no vocabulary for it.'),
          ('The choice nobody admits to is giving up',
           ['the hardest element', 'whatever reviewers cannot see',
            'the author’s intention', 'the title'], 1,
           'Which he says shapes more published prose than any theory.')]),
    dict(heading='Two translators disagree about fidelity', part='Part 3',
         task='A discussion between two translators', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Casimir', 'I want to put my position at its weakest before you '
           'do it for me. I keep the foreign word, and the cost is that some '
           'readers stop at it and the sentence stops with them.'),
          ('Perpetua', 'That is honest, and it is the cost I would not '
           'pay.'),
          ('Casimir', 'Then take mine at its strongest. A reader who meets '
           'that word four times in a novel owns it by the end. A reader '
           'given eleven English words owns nothing, and has been told by '
           'the translator that there was nothing there to learn.'),
          ('Perpetua', 'I accept the whole of that for a novel read twice. '
           'My difficulty is the sentence that has a job. If it is there to '
           'be funny forty seconds before a death, and your version is '
           'instructive rather than funny, the chapter does not work, and I '
           'would rather have a working chapter than an accurate '
           'sentence.'),
          ('Casimir', 'And you substitute a different joke.'),
          ('Perpetua', 'I substitute a different joke, and I cannot defend '
           'it on any principle. I can only point at the chapter.'),
          ('Casimir', 'That is the part I have stopped being able to answer, '
           'and it took me about a decade. If I were judging the two books '
           'rather than the two sentences, you win more often than I '
           'do.'),
          ('Perpetua', 'Say more about why, because I want to know whether '
           'you believe it.'),
          ('Casimir', 'Because the unit a reader experiences is the chapter '
           'and the unit a critic examines is the sentence, and I have been '
           'optimising for the critic while telling myself I was serving the '
           'text.'),
          ('Perpetua', 'That is a bigger concession than I was going to ask '
           'for.'),
          ('Casimir', 'It is, and it has a limit. In philosophy and in law I '
           'am right and you are dangerous, because there the sentence is '
           'the unit, and a working paragraph that misstates a premise is '
           'worse than an awkward one that does not.'),
          ('Perpetua', 'I agree entirely, and that is where I think the '
           'whole argument actually lives. Not which of us is right, but '
           'which kind of text we are each right about.'),
          ('Casimir', 'Which means the question "is this translation '
           'faithful" is unanswerable until somebody says what the text is '
           'for.'),
          ('Perpetua', 'And nobody asks, because asking looks like evading '
           'the question.')],
         items=[
          ('Casimir states the cost of his own approach as',
           ['inaccuracy', 'some readers stopping at the foreign word',
            'length', 'expense'], 1,
           'And the sentence stopping with them.'),
          ('Perpetua’s concern is with a sentence that',
           ['is long', 'has a job in the chapter', 'is untranslatable',
            'is famous'], 1,
           'Such as being funny shortly before a death.'),
          ('What does Casimir concede after about a decade?',
           ['that he was wrong about words',
            'that judged as books rather than sentences, she wins more '
            'often', 'that fidelity is impossible',
            'that critics are useless'], 1,
           'Because the unit a reader experiences is the chapter.'),
          ('He says he has been optimising for',
           ['the author', 'the reader', 'the critic', 'the '
            'publisher'], 2,
           'While telling himself he was serving the text.'),
          ('Where does he say his approach is right and hers dangerous?',
           ['poetry', 'philosophy and law', 'journalism',
            'children’s books'], 1,
           'Because there the sentence is the unit.'),
          ('They agree the real question is',
           ['who is more faithful', 'which kind of text each is right '
            'about', 'how long a translation takes',
            'who the audience is'], 1,
           'Which makes "is this faithful" unanswerable until the text’s '
           'purpose is stated.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Languages',
    intro=('Short answers, then the long turn. The explanation bullet is '
           'where the marks are.'),
    cue=('Describe something that is hard to say in another language.',
         ['what it is', 'which languages are involved',
          'how people usually translate it',
          'and explain what is given up in doing so']),
    qs=['Do you find any language easier than others?',
        'Have you ever been unable to explain something?',
        'Now look at the card. You have one minute to make notes.',
        'Does language affect how people think?'],
    shape=[('answer', 'A Portuguese word for being thanked for something '
            'you did badly.'),
           ('support', 'English needs about eleven words for it.'),
           ('follow-up', 'So people usually drop it and say '
            '"embarrassed".'),
           ('support', 'Which is accurate and loses the whole point, which '
            'was the compression.'),
           ('follow-up', 'A single word for a feeling tells you the feeling '
            'is common enough to need one.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Freely or literally?',
         prompt=('Some people believe literature should be translated as '
                 'literally as possible; others believe the translator '
                 'should recreate the effect even if the words change. '
                 'Discuss both views and give your own opinion. Write at '
                 'least 250 words.'),
         model=[
          'Neither position can be held in general, and the reason is that '
          '"literal" and "free" are answers to a question nobody has asked: '
          'what is this text for? Once that is answered the dispute '
          'largely dissolves, and until it is answered it cannot be '
          'settled.',
          'The case for literal translation is strongest where the sentence '
          'is the unit of meaning. In philosophy, law and scripture, a '
          'reader is following an argument or relying on a provision, and a '
          'rendering that reads more smoothly while shifting a premise has '
          'done real damage that no amount of fluency repays. Here an '
          'awkward sentence that preserves the claim is simply better, and '
          'the translator’s discomfort is not a cost worth considering.',
          'The case for recreating the effect is strongest where the '
          'paragraph or the chapter is the unit. A sentence in a novel often '
          'has a job: it is funny shortly before something terrible, or it '
          'slows the reader down before a revelation. A translation that '
          'preserves the words while losing the job has preserved the '
          'evidence and lost the case, and the reader experiences chapters '
          'rather than sentences.',
          'What makes the debate worse than it needs to be is a bias in how '
          'the two are judged. A reviewer can check a statement and can '
          'feel a register, and has almost no vocabulary for rhythm or '
          'function. The translator who sacrifices sound and effect is '
          'therefore never criticised, while the one who substitutes a joke '
          'is called unfaithful — so the safer choice is systematically '
          'rewarded, whatever it does to the book.',
          'My own view is that the question should be settled per text and '
          'stated openly in a translator’s note. Where the sentence is the '
          'unit, translate the sentence; where the chapter is the unit, '
          'translate the chapter and say so. What I would not accept is the '
          'position that is actually most common, which is to give up '
          'whatever the reviewers cannot see and call the result '
          'faithful.'],
         notes=[
          'The introduction relocates the question rather than choosing a '
          'side: both labels answer an unasked question. Structure 6 done '
          'at this level narrows the ground before taking it.',
          'Each case is tied to a unit of meaning — sentence or chapter — '
          'which is what makes the two cases comparable instead of merely '
          'opposed. "Preserved the evidence and lost the case" is doing '
          'work no adjective could.',
          'Paragraph 4 adds the asymmetry in how the two are judged, which '
          'neither side raises, and the conclusion names the position the '
          'writer rejects rather than only the one they hold.'],
         criterion=[('Relocating the question before answering it',
                     'Task Response'),
                    ('Tying each case to a unit of meaning',
                     'Coherence and Cohesion'),
                    ('Naming the position you reject',
                     'Task Response')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Reporting at a distance: is said to, purportedly',
    explain=('Writing about claims you neither endorse nor dispute needs '
             'language that reports without agreeing. These patterns mark '
             'the distance precisely, which is a band 7 skill in both '
             'tasks.'),
    examples=['Faithful to the words and faithful to the effect pull '
              'apart.',
              'The version is said to be the more accurate of the two.',
              'The substitution is purportedly indefensible, and is '
              'frequently right.',
              'Reviewers are held to reward the choice they can check.'],
    task='Rewrite each sentence so that the claim is reported rather than '
         'asserted.',
    items=[('Her translation is better.',
            'Her version is widely held to be the better of the two, on '
            'grounds she does not herself accept.'),
           ('Translators always lose the rhythm.',
            'Rhythm is said to be the element most often given up, although '
            'the claim is hard to test.'),
           ('He substituted a joke and it was wrong.',
            'The substitution is purportedly a departure from fidelity, a '
            'description its author accepts and does not regret.'),
           ('Critics only look at sentences.',
            'Criticism is reported to operate at the level of the sentence '
            'rather than the chapter.'),
           ('Nobody admits to this.',
            'The practice is said to be widespread and is rarely '
            'acknowledged in print.')]),
   vocab=[('equivalence', 'the relation of meaning the same'),
          ('idiom', 'a phrase whose meaning is not its words'),
          ('domestication', 'making a translation read as if written '
           'here'),
          ('foreignisation', 'leaving a translation visibly foreign'),
          ('gloss', 'a brief explanation added to a word'),
          ('calque', 'a phrase translated word by word'),
          ('false friend', 'a word that looks the same and means '
           'otherwise'),
          ('terseness', 'saying much in very few words')],
   expr=[('Faithful to the words and faithful to the effect pull apart',
          'states the central tension of the cycle'),
         ('preserved the evidence and lost the case',
          'a compressed statement of a translation failure'),
         ('the unit a reader experiences is the chapter',
          'relocates the standard of judgement'),
         ('give up whatever the reviewers cannot see',
          'names a practice nobody defends')],
   trans=['whereas', 'that said', 'at its strongest', 'in general terms'],
  ),

  dict(
   sub='Machines and meaning',
   step=3,
   read=[
    dict(heading='What machine translation gets right and wrong',
         kind='Data article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_ERR,
         paras=[
          'The chart shows the change between 2019 and 2024 in two '
          'human-rated scores for machine translation into English from four '
          'languages. Fluency measures whether the output reads as English. '
          'Adequacy measures whether it says what the original said. Both '
          'are rated by bilingual assessors on a hundred-point scale.',
          'Fluency rose in all four pairs, by between fourteen and '
          'twenty-one points. The largest gain was Turkish to English at '
          'twenty-one points and the smallest was German to English at '
          'fourteen, which is partly a ceiling effect: German output was '
          'already the most readable of the four in 2019.',
          'Adequacy behaved differently and the difference is the finding. '
          'It rose by eleven points for German and nine for Spanish, did '
          'not move at all for Turkish, and fell by three points for Yoruba. '
          'The same five years that made every output more readable made two '
          'of the four no more accurate, and one of them less so.',
          'The four pairs therefore fall into two groups rather than four '
          'cases. German and Spanish gained substantially on both measures. '
          'Turkish and Yoruba gained heavily on fluency and nothing or less '
          'than nothing on adequacy. Describing the chart language by '
          'language takes four paragraphs and hides this; describing it by '
          'group takes two and shows it.',
          'The explanation offered in the literature is about training data '
          'rather than about grammar. The systems improved by learning from '
          'very large quantities of English text, which makes output more '
          'English-like whatever its source. Improving adequacy requires '
          'large quantities of matched text in both languages, which exist '
          'for German and Spanish and barely exist for Yoruba.',
          'That combination has a practical consequence that ought to be '
          'better known. Output that reads well and says the wrong thing is '
          'more dangerous than output that reads badly, because a reader who '
          'cannot check the original has no signal that anything is wrong. '
          'The broken English of 2019 announced its own unreliability; the '
          'smooth English of 2024 does not.',
          'The same pattern appears in reported use. Among professional '
          'users, post-editing of machine output is now standard for German '
          'and Spanish and is explicitly discouraged for Yoruba by three of '
          'the four agencies surveyed, on the grounds that correcting fluent '
          'wrong text takes longer than translating from the source.'],
         items=[
          ('Which paragraph groups the four language pairs into two sets?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'German and Spanish against Turkish and Yoruba.'),
          ('Which paragraph explains the pattern in terms of training '
           'data?', ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'English text improves fluency; matched text improves '
           'adequacy.'),
          ('Which paragraph says fluent wrong output is the more dangerous '
           'kind?', ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 2,
           'Because the reader has no signal that anything is wrong.'),
          ('The largest fluency gain was ____________ to English.', None,
           'Turkish',
           'Paragraph 2, at twenty-one points.'),
          ('Adequacy fell by ____________ points for Yoruba.', None,
           'three',
           'Paragraph 3, while its fluency rose by nineteen.'),
          ('Three of four agencies discourage ____________ of Yoruba '
           'output.', None, 'post-editing',
           'Paragraph 7: correcting fluent wrong text takes longer than '
           'translating afresh.')])],
   listen=[
    dict(heading='A researcher on evaluating translation', part='Part 4',
         task='A lecture on translation evaluation', band='l4',
         qtype='Questions 39-44',
         figure=_ERR,
         script=[
          ('Researcher', 'Two scores, four language pairs, five years. '
           'Fluency: does it read as English. Adequacy: does it say what the '
           'original said. Bilingual assessors, hundred-point scale, and by '
           'the end of this you will know why the industry quotes one of '
           'these two numbers and not the other.'),
          ('Researcher', 'Fluency first, and it is the boring series. Up in '
           'all four. Fourteen for German, sixteen for Spanish, twenty-one '
           'for Turkish, nineteen for Yoruba. German is lowest because '
           'German was already the most readable in 2019, so that is a '
           'ceiling and not a failure.'),
          ('Researcher', 'Adequacy is where the chart earns its keep. Up '
           'eleven for German, up nine for Spanish, flat for Turkish, and '
           'down three for Yoruba. Five years in which everything became '
           'more readable and half of it became no more accurate.'),
          ('Researcher', 'So do not read this chart as four stories. It is '
           'two. German and Spanish gained on both. Turkish and Yoruba '
           'gained on fluency alone. Grouping the categories that behave '
           'alike is the whole skill here and it halves the length of any '
           'description you write.'),
          ('Researcher', 'The cause is data and not grammar, which '
           'disappoints linguists including me. These systems got better by '
           'reading enormous amounts of English, and that improves fluency '
           'from any source. Adequacy needs matched pairs of text in both '
           'languages. German has them in millions. Yoruba has them in '
           'thousands.'),
          ('Researcher', 'A word on the scores themselves, because somebody '
           'always asks whether human ratings can be trusted. Two '
           'assessors per sentence, blind to the system and to the year, '
           'and we report the pairs where they disagreed by more than ten '
           'points. That was four per cent of sentences, and dropping them '
           'does not change any figure on this chart.'),
          ('Researcher', 'And one caution about the scale. These are '
           'changes, not levels. Yoruba fell three points on adequacy from '
           'a low starting score, so the absolute position is worse than '
           'the bar makes it look, and a chart of changes always flatters '
           'whoever started badly.'),
          ('Researcher', 'And here is the sentence I would like you to carry '
           'out of the room. Fluent wrong output is more dangerous than '
           'broken output, because broken output warns you. A reader with no '
           'access to the original has no signal at all from a sentence that '
           'reads perfectly and says the opposite of what was written.'),
          ('Researcher', 'Which is why three of the four agencies we '
           'surveyed now tell their staff not to post-edit Yoruba machine '
           'output. Not because the output is bad. Because correcting fluent '
           'wrong text takes longer than translating the source, and the '
           'errors it leaves behind are the invisible kind.')],
         items=[
          ('Fluency rose in',
           ['two pairs', 'three pairs', 'all four pairs', 'none'], 2,
           'By between fourteen and twenty-one points.'),
          ('Why is the German fluency gain the smallest?',
           ['poor data', 'a ceiling effect', 'grammar', 'fewer '
            'assessors'], 1,
           'German output was already the most readable in 2019.'),
          ('Adequacy for Yoruba',
           ['rose eleven points', 'rose nine points', 'did not move',
            'fell three points'], 3,
           'While its fluency rose by nineteen.'),
          ('He says the chart should be read as',
           ['four stories', 'two stories', 'one story', 'eight '
            'stories'], 1,
           'German and Spanish together; Turkish and Yoruba together.'),
          ('The cause of the pattern is',
           ['grammar', 'the quantity of matched text in both languages',
            'assessor bias', 'the scale used'], 1,
           'English text alone improves fluency from any source.'),
          ('Agencies discourage post-editing Yoruba output because',
           ['it is too expensive', 'correcting fluent wrong text takes '
            'longer than translating afresh', 'staff refuse',
            'clients object'], 1,
           'And the remaining errors are the invisible kind.')])],
   speak=dict(
    part='Part 3', focus='Translating by machine',
    intro=('Five or six sentences. Try once to say that a better-sounding '
           'output can be a worse one.'),
    qs=['Will machine translation replace human translators?',
        'Do you trust automatic translation?',
        'Is it a problem if a translation sounds right but is wrong?',
        'Should children still learn languages?'],
    shape=[('answer', 'For some languages it already has, and not for the '
            'reason people assume.'),
           ('support', 'Readability rose for all four languages in the '
            'study I read.'),
           ('follow-up', 'Accuracy rose for two of them and fell for '
            'one.'),
           ('support', 'And fluent wrong text is harder to catch than '
            'broken text.'),
           ('follow-up', 'Because broken text tells you not to trust it, '
            'and smooth text does not.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Error types in machine translation across four languages',
         prompt=('The chart below shows the change between 2019 and 2024 in '
                 'two human-rated scores for machine translation into '
                 'English from four languages. Summarise the information by '
                 'selecting and reporting the main features, and make '
                 'comparisons where relevant. Write at least 150 words.'),
         figure=_ERR,
         model=[
          'The bar chart shows how two scores for machine translation into '
          'English — fluency and adequacy — changed between 2019 and 2024 '
          'for four source languages. Overall, fluency improved in all four '
          'pairs while adequacy improved substantially in only two, so that '
          'the four languages fall into two clear groups rather than four '
          'separate cases.',
          'The first group consists of German and Spanish, which gained on '
          'both measures. German rose by fourteen points on fluency and '
          'eleven on adequacy, and Spanish by sixteen and nine '
          'respectively, giving each a gain of similar size on the two '
          'scores.',
          'The second group, Turkish and Yoruba, behaved quite differently. '
          'Both recorded the largest fluency gains in the chart, at '
          'twenty-one and nineteen points, and yet Turkish showed no change '
          'at all in adequacy and Yoruba fell by three points.',
          'The contrast between the groups is therefore sharpest in the '
          'relationship between the two series rather than in either series '
          'alone. Where German and Spanish gained roughly two points of '
          'adequacy for every three of fluency, Turkish and Yoruba gained '
          'none or less than none against the largest fluency increases '
          'recorded.'],
         notes=[
          'The answer groups the four categories into two sets that behave '
          'alike and names each group before giving figures. Four '
          'paragraphs of language-by-language reporting would contain the '
          'same numbers and none of the finding.',
          'The Overall statement contains the grouping, which is what makes '
          'it an Overall statement and not a first sentence. A reader who '
          'read only that sentence would know the chart’s point.',
          'The final paragraph compares the relationship between the two '
          'series across groups, which is the highest-scoring thing '
          'available on a two-series chart. Nothing explains why the '
          'languages differ: training data is not on the chart.'],
         criterion=[('Grouping categories that behave alike',
                     'Coherence and Cohesion'),
                    ('An Overall statement that carries the grouping',
                     'Task Achievement'),
                    ('Comparing the relationship between the series',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Grouping categories by shared behaviour',
    explain=('A chart with four or more categories is almost always two or '
             'three groups. These patterns name a group and attach its '
             'members, which is what lets one sentence replace four.'),
    examples=['Fluency rose in all four while adequacy improved in only '
              'two.',
              'German and Spanish gained on both measures; Turkish and '
              'Yoruba on one.',
              'The four pairs fall into two groups rather than four '
              'cases.',
              'Both recorded the largest fluency gains and the smallest '
              'adequacy gains.'],
    task='Rewrite each description so that it groups rather than lists.',
    items=[('German went up on both. Spanish went up on both.',
            'German and Spanish both gained substantially on the two '
            'measures, by eleven and nine points of adequacy '
            'respectively.'),
           ('Turkish did not change on adequacy. Yoruba fell.',
            'Turkish and Yoruba gained nothing or less than nothing on '
            'adequacy, despite the two largest fluency increases.'),
           ('All the fluency bars are positive.',
            'Fluency rose in every pair, by between fourteen and twenty-one '
            'points.'),
           ('There are four languages with different results.',
            'The four pairs fall into two groups: those gaining on both '
            'measures and those gaining on fluency alone.'),
           ('German rose least on fluency.',
            'The smallest fluency gain, German’s fourteen points, came from '
            'the pair with the highest 2019 starting score.')]),
   vocab=[('adequacy', 'whether a translation says what the original '
           'said'),
          ('readability', 'how easily a text can be read'),
          ('error type', 'a category of mistake counted separately'),
          ('benchmark', 'a fixed test used to compare systems'),
          ('post-edit', 'to correct machine output rather than '
           'translate'),
          ('matched text', 'the same content held in two languages'),
          ('ceiling effect', 'little room left to improve on a measure'),
          ('hallucination', 'output a system produces from nothing')],
   expr=[('Fluency rose in all four while adequacy improved in only two',
          'the chart’s finding in one sentence'),
         ('do not read this chart as four stories; it is two',
          'instructs a grouping'),
         ('broken output warns you and fluent wrong output does not',
          'states an asymmetry of risk'),
         ('a ceiling and not a failure',
          'reinterprets a small figure correctly')],
   trans=['while', 'by contrast', 'taken together', 'the first group'],
  ),

  dict(
   sub='Why equivalence is hard to define',
   step=4,
   read=[
    dict(heading='Two texts, one meaning, no shared words',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'The notion that two sentences in different languages can mean the '
          'same thing is so commonplace that it is startling to discover how '
          'intractable it is to formulate precisely. Translation depends '
          'upon it, pedagogy depends upon it, and every machine evaluation '
          'score presupposes it. Four decades of attempts at a definition '
          'have yielded a succession of formulations, each of which succeeds '
          'for one class of cases and collapses for the class its '
          'predecessor handled.',
          'The simplest definition is referential: two sentences are '
          'equivalent if they are true in exactly the same '
          'circumstances. This is precise, testable in principle, and '
          'immediately too weak and too strong at once: it makes "the '
          'glass is half full" equivalent to "the glass is half '
          'empty", and it makes any pair of sentences about different '
          'things non-equivalent even where one is the obvious '
          'rendering of the other. Any definition that puts "half '
          'full" and "half empty" in the same box has failed before it '
          'reaches a disputed case.',
          'The second family of definitions adds what a sentence suggests '
          'without stating. Connotation does real work here: two words may '
          'pick out the same thing and carry opposite attitudes to it, and a '
          'translation that swaps one for the other has changed something a '
          'reader will notice. The difficulty is that connotation is not '
          'stable across readers, and a definition that varies by reader '
          'cannot settle a dispute between two translators, which is the '
          'only thing anybody wanted a definition of equivalence for in '
          'the first place.',
          'The third approach gives up on the sentence and moves to '
          'function. Two sentences are equivalent if they do the same thing '
          'in the same position: ask the same question, issue the same '
          'warning, produce the same laugh. This handles the cases the first '
          'two cannot, including greetings and jokes, where the words '
          'overlap hardly at all and nobody doubts the equivalence. It is '
          'the working definition of almost every practising translator, '
          'whether or not they would state it that way.',
          'The functional definition has an obvious cost and one that is '
          'less obvious. The obvious cost is that it licenses substitutions '
          'that look like inventions: a different joke, a different '
          'proverb, a different unit of measurement. The less obvious cost '
          'is that function is only defined relative to a purpose, so the '
          'definition cannot be applied until somebody states what the text '
          'is for, and that statement is not itself a matter of '
          'translation.',
          'A fourth position, held by a minority and deserving more '
          'attention than it receives, is that the question is malformed. On '
          'this view there exists no single relation of equivalence, merely '
          'a family of partial relations — identical reference, identical '
          'connotation, identical register, identical function, identical '
          'sound — which coincide in straightforward cases and diverge in '
          'precisely the cases anybody disputes.',
          'The practical consequence of the fourth position is unexpectedly '
          'concrete. If equivalence is a family, then asking whether a '
          'translation is equivalent is unanswerable, and asking which of '
          'the five relations it preserves is answerable, cheap and useful. '
          'Every real dispute between translators that has been examined in '
          'detail turns out to be a disagreement about which relation '
          'matters for a specific text. That is a reframing rather than a '
          'solution, and it has the merit of turning an unanswerable '
          'question into a list of answerable ones.',
          'Evaluation practice has moved in this direction without saying '
          'so. Machine translation is now scored on two separate measures '
          'rather than one, precisely because a single score hid the case '
          'where output became more readable and no more accurate. Splitting '
          'the measure was a concession to the fourth position made by '
          'people who would not have signed up to it as a theory. The same '
          'thing has happened in educational assessment, where a single '
          'mark was replaced by criteria for reasons that are formally '
          'identical and were never described as philosophical.',
          'There is one objection to the fourth position that its holders '
          'should answer and ordinarily do not. If equivalence is only a '
          'family of relations, it is unclear what a translation is a '
          'translation of, and the ordinary notion that two texts say the '
          'same thing is left with nothing behind it. Most people, including '
          'most translators, do not experience the relation as fragmented. '
          'They experience reading a translation as reading the book, and a '
          'theory that denies them a single object is owed an account of why '
          'the illusion is so complete.',
          'The available answer is that the ordinary notion survives as a '
          'useful approximation for easy cases, in the way that ordinary '
          'talk of weight survives the distinction between mass and force. '
          'That is a respectable answer, and it is less satisfying than the '
          'experience it is explaining, which is ordinarily a sign that '
          'there is more work to do.',
          'What follows for anybody actually translating is modest and '
          'immediately serviceable. Determine which relations matter for the '
          'text in front of you, in writing, before commencing. Anticipate '
          'preserving three of the five and select which three deliberately. '
          'And when somebody enquires whether the result is faithful, answer '
          'the question they ought to have asked, which is faithful in which '
          'respect.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['The referential definition', 'Connotation',
            'Function', 'Equivalence as a family'], 0,
           'True in exactly the same circumstances.'),
          ('Choose the best heading for paragraph 5.',
           ['Function', 'The costs of the functional definition',
            'Connotation', 'What follows for translators'], 1,
           'It licenses substitutions and needs a stated purpose.'),
          ('Choose the best heading for paragraph 9.',
           ['Equivalence as a family', 'Evaluation practice',
            'An objection the minority view must answer',
            'The practical consequence'], 2,
           'What a translation would then be a translation of.'),
          (
           'The writer believes the referential definition is too weak '
           'and too strong at once.',
           ['Yes', 'No', 'Not Given'], 0,
           'Paragraph 2 gives an example of each failing.',
           {1: 'No would need one failing only; paragraph 2 gives an '
               'example of each.', 2: 'Not Given is wrong because both failings are '
               'illustrated.'}),
          (
           'The writer believes evaluators adopted the fourth position '
           'deliberately.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 8 calls it a concession made by people who would '
           'not have signed up to the theory.',
           {0: 'Yes would need deliberation; paragraph 8 calls it a '
               'concession.', 2: 'Not Given is wrong because how the position was '
               'reached is described.'}),
          ('The referential definition makes "half full" equivalent to '
           '"half ____________".', None, 'empty',
           'Paragraph 2: both are true in the same circumstances.'),
          ('The functional definition cannot be applied until somebody '
           'states what the text is ____________.', None, 'for',
           'Paragraph 5, which is not itself a matter of translation.'),
          ('The writer advises translators to expect to preserve '
           '____________ of the five relations.', None, 'three',
           'The final paragraph, chosen on purpose.')])],
   listen=[
    dict(heading='A lecture on equivalence', part='Part 4',
         task='A lecture on defining equivalence', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'Here is a question you have never needed to ask and '
           'cannot answer. What is it for two sentences in different '
           'languages to mean the same thing? You use the notion fifty times '
           'a day. Four decades of this field have failed to define it, and '
           'the failures are more instructive than any of the '
           'definitions.'),
          ('Lecturer', 'Attempt one: same truth conditions. True in the same '
           'circumstances. Beautifully precise, and it tells you that "the '
           'glass is half full" and "the glass is half empty" mean the same '
           'thing, which no speaker of any language believes. Too weak. It '
           'is also too strong, and for the opposite reason, in cases where '
           'the obvious rendering changes what is being talked about.'),
          ('Lecturer', 'Attempt two: add connotation. What the sentence '
           'suggests without saying. This fixes the glass, because full and '
           'empty carry opposite attitudes. And it breaks immediately, '
           'because connotation is not stable across readers, and a '
           'definition that varies by reader cannot settle an argument '
           'between two translators, which is the only thing we wanted it '
           'for.'),
          ('Lecturer', 'Attempt three: function. Two sentences are '
           'equivalent if they do the same job in the same place. Same '
           'question, same warning, same laugh. This handles greetings and '
           'jokes, where the words barely overlap and nobody doubts the '
           'equivalence, and it is why it is the working definition of '
           'almost every practising translator.'),
          ('Lecturer', 'And its cost, which is where the interesting part '
           'starts. Function is only defined relative to a purpose. So you '
           'cannot apply the definition until somebody tells you what the '
           'text is for, and that is not a translation question. The '
           'definition has pushed the hard part outside the field.'),
          ('Lecturer', 'Attempt four, which is a minority view and is the '
           'one I hold. The question is malformed. There is no single '
           'relation. There is a family: same reference, same connotation, '
           'same register, same function, same sound. In easy cases they '
           'coincide, which is why the ordinary notion works. In every case '
           'anybody argues about, they come apart.'),
          ('Lecturer', 'Before that, the objection my own position has to '
           'answer, which I would rather state than have you find. If '
           'equivalence is only a family of relations, what is a '
           'translation a translation of? Most people do not experience '
           'the relation as fragmented, and my answer, that the ordinary '
           'notion survives as an approximation, is weaker than the '
           'experience it explains.'),
          ('Lecturer', 'And the reason I would have you take it seriously is '
           'not theoretical. Machine translation is now scored on two '
           'numbers instead of one, because one number hid the case where '
           'output got more readable and no more accurate. That is the '
           'fourth position being adopted in practice by people who would '
           'reject it as a theory, which is usually how these things '
           'arrive.')],
         items=[
          ('The first definition fails because it makes "half full" '
           'equivalent to',
           ['"the glass is empty"', '"half empty"', '"nearly full"',
            '"a glass"'], 1,
           'Which no speaker of any language believes.'),
          ('Adding connotation fails because connotation',
           ['cannot be measured', 'is not stable across readers',
            'is untranslatable', 'varies by language'], 1,
           'So it cannot settle an argument between two translators.'),
          ('The functional definition handles',
           ['legal texts', 'greetings and jokes', 'poetry',
            'technical manuals'], 1,
           'Where the words barely overlap and nobody doubts the '
           'equivalence.'),
          ('Its cost is that function is defined relative to',
           ['a reader', 'a purpose', 'a language', 'a period'], 1,
           'So the definition pushes the hard part outside the field.'),
          ('How many relations does the fourth position name?',
           ['three', 'four', 'five', 'six'], 2,
           'Reference, connotation, register, function and sound.'),
          ('He cites two-number scoring of machine translation as',
           ['a refutation', 'the fourth position adopted in practice',
            'irrelevant', 'a measurement error'], 1,
           'By people who would reject it as a theory.')])],
   speak=dict(
    part='Part 3', focus='Saying the same thing differently',
    intro=('Five or six sentences. Try once to say that two sentences mean '
           'the same and do not do the same.'),
    qs=['Can two sentences ever mean exactly the same thing?',
        'Does it matter how something is said as well as what is said?',
        'Are some ideas impossible to express in another language?',
        'How would you judge whether two texts match?'],
    shape=[('answer', 'In easy cases yes, and the easy cases are not the '
            'ones anybody argues about.'),
           ('support', '"Half full" and "half empty" are true in exactly '
            'the same circumstances.'),
           ('follow-up', 'And nobody thinks they mean the same thing.'),
           ('support', 'So meaning the same and doing the same come '
            'apart.'),
           ('follow-up', 'Which is why I would ask what the text is for '
            'before judging a translation of it.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Every family, premises named, twelve minutes',
         prompt=('Will machine translation make language learning '
                 'unnecessary? Run the whole toolkit: brainstorm ten, six '
                 'tests, premise under each survivor, test each premise '
                 'against three cases, check distinct and equal, order '
                 'strongest last. Twelve minutes, timed. Do not write the '
                 'essay yet.'),
         plan=('Machine translation already removes the practical need to '
               'learn a language for most transactional purposes and cannot '
               'remove it for purposes where the exchange is the point, so '
               'the honest answer is that it changes which languages are '
               'worth learning and why rather than whether any are',
               [('The transactional case rests on a premise about '
                 'sufficiency that now holds for some language pairs',
                 ['fluency rose in all four pairs studied and adequacy in '
                  'two',
                  'post-editing is standard practice for the pairs with '
                  'matched text']),
                ('The relational case rests on a premise about what a '
                 'conversation is for, which no system addresses',
                 ['a translated exchange has three participants and the '
                  'third is not a person',
                  'the pairs where adequacy did not improve are the pairs '
                  'where most learners actually live'])]),
         notes=[
          'The thesis refuses the yes/no framing and names what actually '
          'changes. That refusal has to be earned by the two ideas, which is '
          'why one is about sufficiency and the other about purpose rather '
          'than both being about quality.',
          'Each premise gets the cycle 5 treatment from unit 48: push it to '
          'three cases it was not built for. The sufficiency premise '
          'survives for German and collapses for Yoruba, which is a '
          'narrowing rather than a refutation.',
          'The second idea is ordered last because it is the one a machine '
          'cannot answer by improving. An argument whose strongest point '
          'cannot be overtaken by the next release belongs at the end.'],
         criterion=[('Refusing a yes/no framing and naming what changes',
                     'Task Response'),
                    ('Each premise tested against cases it was not built '
                     'for', 'Task Response')],
         instruct='  Twelve minutes, timed. Keep the sheet; you write this '
                  'in cycle 5.',
         lines=12)],
   gram=dict(
    point='Scope ambiguity and its repair',
    explain=('Sentences about meaning go wrong when a word could attach to '
             'two things. At band 7 you repair the ambiguity rather than '
             'hope the reader resolves it correctly.'),
    examples=['The sentences mean the same and do not do the same.',
              'Not every relation is preserved, rather than no relation '
              'being preserved.',
              'Only two of the four improved on adequacy, which is not the '
              'same as two improving only on adequacy.',
              'All the definitions fail for some cases; none fails for '
              'all.'],
    task='Rewrite each sentence so that its scope is unambiguous.',
    items=[('Translations do not preserve everything.',
            'No translation preserves every relation, although each '
            'preserves some.'),
           ('Not all languages improved on both measures.',
            'Two of the four languages improved on both measures; the other '
            'two improved on fluency alone.'),
           ('Every definition does not work.',
            'Each definition fails for some class of cases; none fails for '
            'every case.'),
           ('They only argue about hard cases.',
            'Disputes arise only in the cases where the relations come '
            'apart, which is not to say that all such cases are '
            'disputed.'),
           ('The machine is not always wrong.',
            'The output is wrong in a minority of sentences, and in those '
            'sentences it reads no differently from the rest.')]),
   vocab=[('connotation', 'what a word suggests beyond what it names'),
          ('pragmatics', 'what an utterance does rather than says'),
          ('context', 'what surrounds an utterance and shapes it'),
          ('reference', 'the thing a word picks out in the world'),
          ('truth conditions', 'the circumstances in which a claim is '
           'true'),
          ('incommensurable', 'not able to be measured on one scale'),
          ('stylistic level', 'how formal or casual a text is'),
          ('nuance', 'a small difference of meaning')],
   expr=[('The sentences mean the same and do not do the same',
          'the cycle’s central distinction'),
         ('the definition has pushed the hard part outside the field',
          'names where a theory evades a problem'),
         ('in easy cases they coincide; in every disputed case they come '
          'apart', 'explains why an ordinary notion survives'),
         ('faithful in which respect',
          'replaces an unanswerable question with an answerable one')],
   trans=['consequently', 'which in turn', 'as a result',
          'it follows that'],
  ),

  dict(
   sub='Whether a translation can be judged',
   step=5,
   read=[
    dict(heading='Three translations, three defences',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'A short novel published in 1961 has been rendered into English '
          'three times, in 1968, in 1994 and in 2019. All three translators '
          'have written about their choices, all three are accomplished '
          'practitioners, and the three versions diverge on almost every '
          'sentence. The instance is instructive precisely because none of '
          'the three can be dismissed, which forecloses the customary manner '
          'in which such arguments terminate.',
          'The 1968 version follows the original sentence by sentence. Its '
          'word order is frequently strange in English, its idioms are '
          'rendered literally with footnotes, and the reader is never '
          'allowed to forget that the book was written elsewhere. Its '
          'translator defended this as a refusal to flatter: an English '
          'reader who wants an English novel can read one. The version has '
          'been out of print twice and brought back twice, which is itself a '
          'fact about who buys translated fiction.',
          'The 1994 version reads as if written in English. Idioms are '
          'replaced with English idioms, two paragraphs of local political '
          'detail are compressed into one sentence, and a running joke about '
          'a bus timetable becomes a joke about a railway. Its translator '
          'defended this on the ground that the original is funny and the '
          '1968 version is not, and that a comic novel which does not amuse '
          'has failed in a way no footnote repairs. It has outsold the '
          'other two together by a factor of roughly nine.',
          'The 2019 version does something neither of the others attempted. '
          'It preserves the sentence rhythm of the original at the cost of '
          'both literal accuracy and English idiom, producing a text that '
          'is strange in a different way: the sentences are the length and '
          'shape of the originals, and several mean something slightly '
          'different. Its translator argued that the book’s subject is '
          'tedium and that its rhythm is therefore its argument, so that a '
          'version which varies the sentence length to read pleasantly has '
          'translated a book about tedium into a different book.',
          'Readers divide along a pattern that is itself informative: '
          'those acquainted with the original language overwhelmingly '
          'prefer the 2019 version. Those encountering the book for '
          'the first time overwhelmingly prefer 1994. Critics writing '
          'for literary reviews prefer 1968, and the three preferences '
          'correlate almost perfectly with whatever each constituency '
          'is positioned to verify.',
          'That correlation is the most significant fact in the case '
          'and it is rarely stated. Each group prefers the version '
          'that is best by the standard it can apply. A reader with '
          'the original can hear the rhythm; a first-time reader can '
          'only experience the effect. A critic can compare sentences, '
          'which is what literal fidelity optimises for. Nobody in any '
          'of the three groups is applying a standard they chose; each '
          'is applying the only standard available from where they '
          'stand.',
          'What the instance demonstrates is not that judgement is '
          'impossible but that it is impossible in the absence of a stated '
          'standard. "Better" is incomplete in the manner that "faster" '
          'would be incomplete without specifying over what distance. The '
          'three versions are not three attempts at one undertaking of '
          'differing quality; they are three distinct undertakings, each '
          'approaching excellence by its own criterion.',
          'A sceptical conclusion is sometimes drawn from this and it does '
          'not follow. If judgement requires a standard, it does not follow '
          'that all standards are equal or that any text may be judged by '
          'any standard. A thriller translated for rhythm at the cost of '
          'plot has chosen a standard that nothing in the text supports, and '
          'that is a criticisable choice rather than a matter of taste.',
          'The defensible position is therefore two-stage and is more '
          'demanding than either scepticism or confidence. First, ask '
          'whether the standard chosen is appropriate to this text, which is '
          'arguable on evidence from the text itself. Second, ask how well '
          'the translation meets the standard it chose, which is a technical '
          'question with better and worse answers. Keeping the two stages '
          'apart is the whole of the method, because almost every bad '
          'review of a translation collapses them, judging the execution '
          'of one standard against the appropriateness of another.',
          'Applied to the three versions, the two-stage test gives a result '
          'that satisfies nobody and is probably right. All three standards '
          'are defensible for this specific novel, because it is '
          'simultaneously foreign, funny and about tedium. All three '
          'versions meet their chosen standard well. The honest verdict is '
          'that there are three good translations of this book and a reader '
          'should be told which one they are holding. Nothing in that '
          'verdict requires the reader to agree with any of the three '
          'translators, which is what makes it usable.',
          'That last recommendation is the only one in this literature that '
          'nobody has tried. Translations are published without stating '
          'their standard, reviewed against a standard the reviewer has '
          'chosen privately, and compared as though the standard were '
          'settled. A paragraph at the front of each book, naming what was '
          'preserved and what was given up, would end a surprising '
          'proportion of these disputes and cost nothing.'],
         items=[
          ('Which paragraph describes the version that preserves sentence '
           'rhythm?', ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'At the cost of literal accuracy and English idiom.'),
          ('Which paragraph reports which groups of readers prefer which '
           'version?', ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 1,
           'And notes that preference matches what each group can '
           'check.'),
          ('Which paragraph argues that not all standards are equal?',
           ['Paragraph 7', 'Paragraph 8', 'Paragraph 9',
            'Paragraph 10'], 1,
           'A thriller translated for rhythm has chosen an unsupported '
           'standard.'),
          (
           'The writer believes the three versions are three attempts '
           'at the same thing.', ['Yes', 'No', 'Not Given'],
           1, 'Paragraph 7 says they are three different things.',
           {0: 'Yes would need one aim; paragraph 7 says they are '
               'three different things.', 2: 'Not Given is wrong because the three are compared.'}),
          (
           'The writer believes judgement of translations is '
           'impossible.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7: impossible without a stated standard, which '
           'is not the same.',
           {0: 'Yes would need impossibility; paragraph 7 makes it '
               'conditional on a standard.', 2: 'Not Given is wrong because the condition is stated.'}),
          ('Readers who know the original language mostly prefer the '
           '____________ version.', None, '2019',
           'Paragraph 5, the one that preserves rhythm.'),
          ('The 1994 translator argued that a comic novel that does not '
           '____________ has failed.', None, 'amuse',
           'Paragraph 3, in a way no footnote repairs.'),
          ('The writer’s final recommendation is a paragraph at the front '
           'naming what was preserved and what was ____________.', None,
           'given up',
           'The final paragraph, which he says nobody has tried.')])],
   listen=[
    dict(heading='A translator and a critic disagree', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Dr Fairweather-Oduya made the 2019 translation. Mr '
           'Valdemarsson reviewed it, unfavourably.'),
          ('Valdemarsson', 'I will begin by conceding the thing that '
           'undermines my review. I compared your version with the 1968 one '
           'sentence by sentence, found yours less accurate, and said so. I '
           'did not ask what you were preserving instead, and that was a '
           'failure of the review rather than of the book.'),
          ('Fairweather-Oduya', 'I did not expect that and I would rather '
           'have it than the apology.'),
          ('Valdemarsson', 'It is not an apology. I still think you were '
           'wrong. I now think I argued it badly, which is a different '
           'complaint and a more serious one for me.'),
          ('Fairweather-Oduya', 'Then let me say what I was preserving. The '
           'book is about tedium. Its sentences are the same length for '
           'ninety pages, which is unbearable in the original and is the '
           'argument the book is making. Both earlier versions varied the '
           'sentence length to read well in English, and in doing so they '
           'translated a book about tedium into a book that is pleasant to '
           'read.'),
          ('Valdemarsson', 'That is a real claim and it is checkable, and I '
           'did not check it. Where I still disagree is that you paid for it '
           'in meaning. Several of your sentences say something slightly '
           'different from the original.'),
          ('Fairweather-Oduya', 'Eleven of them say something slightly '
           'different, and I can list them, and I chose each one. That is '
           'the price of the rhythm and I would pay it again. What I object '
           'to is being charged for it by somebody who paid a larger price '
           'without noticing.'),
          ('Valdemarsson', 'Meaning the earlier versions.'),
          ('Fairweather-Oduya', 'Meaning the earlier versions, which gave up '
           'the whole formal argument of the book and were praised for '
           'fluency.'),
          ('Valdemarsson', 'And I want to put one thing on the record in my '
           'own favour, since I have conceded a good deal. The eleven '
           'sentences are not footnoted and not listed anywhere in the '
           'book. A reader with no access to the original cannot know they '
           'exist, and that is a choice you made as well.'),
          ('Fairweather-Oduya', 'That is correct and I have no defence for '
           'it beyond practice, which is not a defence. The list should '
           'have been at the back and my publisher would have printed it '
           'if I had asked.'),
          ('Valdemarsson', 'So what would you have me do? I review eleven '
           'translations a year and I cannot learn eleven languages.'),
          ('Fairweather-Oduya', 'Ask the publisher for the translator’s '
           'note, and if there is not one, say in the review that there is '
           'not one. Every one of these arguments would be shorter if each '
           'book said at the front what it preserved and what it gave '
           'up.'),
          ('Valdemarsson', 'That I will do, and I notice it is a demand on '
           'publishers rather than on either of us, which is probably why '
           'neither of us thought of it.')],
         items=[
          ('Valdemarsson opens by conceding that his review',
           ['was too short', 'did not ask what the translation was '
            'preserving instead', 'was unfair', 'misquoted the book'], 1,
           'Which he calls a failure of the review rather than of the '
           'book.'),
          ('He says his concession is',
           ['an apology', 'not an apology; he still thinks she was '
            'wrong', 'a retraction', 'a joke'], 1,
           'But that he argued it badly, which is more serious for him.'),
          ('What does Fairweather-Oduya say she was preserving?',
           ['the idioms', 'the sentence rhythm, because the book is about '
            'tedium', 'the political detail', 'the jokes'], 1,
           'Sentences of the same length for ninety pages.'),
          ('How many of her sentences does she say differ in meaning?',
           ['three', 'seven', 'eleven', 'twenty'], 2,
           'Each of them chosen, and listable.'),
          ('Her objection to the charge is that',
           ['it is untrue', 'it comes from somebody who paid a larger '
            'price without noticing', 'it is unfair to publishers',
            'nobody read the book'], 1,
           'Meaning the earlier versions, praised for fluency.'),
          ('What does she ask reviewers to do?',
           ['learn the languages', 'ask for the translator’s note and '
            'say when there is none', 'stop reviewing translations',
            'review only new books'], 1,
           'A demand on publishers rather than on either of them.')])],
   speak=dict(
    part='Part 3', focus='Judging a translation',
    intro=('The last long turn of the volume. Try once to say that '
           '"better" is incomplete without a standard.'),
    qs=['How can you tell whether a translation is good?',
        'Can a translation ever be better than the original?',
        'Should translators explain their choices?',
        'Who is qualified to judge?'],
    shape=[('answer', 'Not without knowing what it was trying to '
            'preserve.'),
           ('support', 'One novel has three English versions and all three '
            'are good.'),
           ('follow-up', 'Each is good by a different standard.'),
           ('support', '"Better" on its own is like "faster" with no '
            'distance.'),
           ('follow-up', 'So I would want a paragraph at the front saying '
            'what was kept and what was given up.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Can a translation be as good as the original?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say a translation can never be as '
                 'good as the original. To what extent do you agree? Write '
                 'at least 250 words.'),
         model=[
          'I agree in the cases where the claim is usually made and '
          'disagree in the cases where it matters, and the difference '
          'between them is not quality but what the original was doing with '
          'its language.',
          'Where a text’s value lies partly in the sound and shape of its '
          'sentences, something has to go. A translator faces a sentence '
          'that states something, sounds a certain way, sits at a level of '
          'formality and performs a function in its paragraph, and in the '
          'original these arrive together. In the translation three of the '
          'four arrive, and the choice of which three is a choice. To that '
          'extent the claim is simply true, and no amount of skill '
          'dissolves it.',
          'But the claim is usually offered as a verdict rather than a '
          'description, and as a verdict it depends on a standard nobody '
          'states. One short novel exists in three English versions: one '
          'literal with footnotes, one rewritten to be funny, one preserving '
          'the sentence rhythm because the book is about tedium. Readers who '
          'know the original prefer the third, first-time readers prefer the '
          'second, and critics prefer the first — and each group prefers '
          'the version that is best by the standard it is able to apply.',
          'That pattern shows what "as good as" is missing. "Better" is '
          'incomplete in the way "faster" would be without a distance. The '
          'three versions are not three attempts at one thing; they are '
          'three different things, each close to excellent on its own '
          'measure, and a reader who has only met one of them is not in a '
          'position to rank them.',
          'My own position, then, is that the claim is true of a '
          'translation’s relation to its original and false as a judgement '
          'of worth. A translation gives up something the original had; it '
          'may also do something the original could not, such as making a '
          'formal argument legible to a reader who would never have reached '
          'it. What I would ask for is not better translations but a '
          'paragraph at the front of each one, naming what was preserved and '
          'what was given up — which would settle more of these arguments '
          'than either side has managed and costs a publisher nothing.'],
         notes=[
          'Structure 11: agree in some circumstances, disagree in others, '
          'with the dividing line named in the first sentence. "Not quality '
          'but what the original was doing with its language" is the line, '
          'and the essay then holds to it.',
          'The three-version case does the work of an argument because the '
          'preferences correlate with what each group can check. A single '
          'well-chosen case reported precisely beats three examples '
          'gestured at.',
          'The ending separates two things the prompt runs together — the '
          'relation between two texts and the worth of one of them — and '
          'then asks for something concrete and cheap. A to-what-extent '
          'answer is strongest when it says what the question conflated.'],
         model65=[
                  'Some people say a translation can never be as good '
                  'as the original. I think this depends entirely on '
                  'what good is taken to mean.',
                  'There is something in the claim. A poem depends on '
                  'the sound of particular words, and no other '
                  'language has words with the same sound and meaning '
                  'together. Something is always chosen and something '
                  'always lost, and a reader of the translation cannot '
                  'know which.',
                  'But the claim assumes there is one standard. A '
                  'translation intended for a student of the original '
                  'aims at literal fidelity; one intended for a reader '
                  'who will never learn the language aims at the '
                  'effect the original had on its first audience. '
                  'These are different tasks, and a version can '
                  'succeed at one while failing at the other.',
                  'I think a translation cannot be the same as the '
                  'original, but it can be as good, once the standard '
                  'is stated. The honest version of the question is '
                  'which standard a particular translation was trying '
                  'to meet, and whether it met it.',
                  ],
         gap65=[
                'It defines the standards first and then judges, which '
                'is the move that makes the question answerable at '
                'all.',
                'It explains why readers who know the original and '
                'readers who do not prefer different versions, rather '
                'than reporting that they do.',
                'It says what evaluators actually do when they concede '
                'the fourth position.',
                ],
         criterion=[('Naming the dividing line in the first sentence',
                     'Task Response'),
                    ('One case reported precisely instead of three '
                     'gestured at', 'Task Response'),
                    ('Separating what the prompt conflated',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Criteria arguments and the standard being used',
    explain=('Disputes about whether something is better are usually '
             'disputes about the standard. These patterns put the standard '
             'on the page, which is what lets the argument progress.'),
    examples=['Better by which standard is the question the dispute is '
              'really about.',
              '"Better" is incomplete in the way "faster" would be without '
              'a distance.',
              'Each group prefers the version that is best by the standard '
              'it can apply.',
              'All three meet their chosen standard well.'],
    task='Rewrite each judgement so that the standard is stated.',
    items=[('The 2019 version is better.',
            'The 2019 version is the best of the three by the standard of '
            'formal fidelity, and the weakest by that of readability.'),
           ('Critics got it wrong.',
            'Critics applied the standard of sentence-level accuracy, which '
            'is the one their position allows them to check.'),
           ('A translation is always worse.',
            'A translation preserves fewer relations than the original '
            'carried, which is a claim about the relation rather than about '
            'worth.'),
           ('That version is unfaithful.',
            'That version gives up literal accuracy in eleven sentences in '
            'order to preserve the rhythm of all of them.'),
           ('Both are good.',
            'Each meets the standard it chose, and whether that standard '
            'suits this text is a separate and arguable question.')]),
   vocab=[('standard of judgement', 'the measure a verdict is made '
           'against'),
          ('faithfulness', 'closeness to what the original did'),
          ('yardstick', 'a measure used for comparison'),
          ('naturalness', 'reading as if written in the language'),
          ('literal', 'following the words of the original'),
          ('paraphrase', 'restating in different words'),
          ('translator’s note', 'a statement of what a version aimed '
           'at'),
          ('settled judgement', 'a conclusion reached on evidence')],
   expr=[('Better by which standard is the question the dispute is really '
          'about', 'the move that unblocks a criteria argument'),
         ('three different things, each close to excellent by its own '
          'measure', 'refuses a ranking without refusing judgement'),
         ('each group prefers the version that is best by the standard it '
          'can apply', 'explains a pattern of preference'),
         ('being charged for it by somebody who paid a larger price without '
          'noticing', 'turns a criticism around')],
   trans=['admittedly', 'nevertheless', 'in short', 'to that extent'],
  ),
 ],
 technique=dict(
  title='A full timed Reading paper, at Volume 5 length',
  body=('You have now run the loop on two hundred and fifty passages across '
        'three volumes. The paper at the end of this book puts three '
        'Volume 5 passages together under the real clock, and the arithmetic '
        'has moved again because the texts have. Thirty seconds to orient '
        'and two minutes to load the questions costs seven and a half '
        'minutes across three passages. At a hundred and seventy words a '
        'minute, two thousand six hundred words of text costs fifteen. That '
        'leaves about thirty-seven minutes for forty questions, or '
        'fifty-five seconds each. Notice what has happened across the '
        'volumes: the texts got longer and harder and the time per question '
        'went up, because you read faster. That is the whole point of the '
        'speed ladder, and this is the paper where you find out whether you '
        'climbed it.'),
  panel=[('Twenty minutes a passage',
          'Write 20, 40, 60 on the paper before you start. The third '
          'passage is the one people lose.'),
         ('Load before you read, including when behind',
          'Two minutes on the questions every time. The urge to skip it '
          'peaks exactly when skipping costs most.'),
         ('Mark and move',
          'A question you cannot close after reading its paragraph gets a '
          'margin mark. Two minutes on one is three you never reach.'),
         ('Nothing blank at fifty-nine',
          'No penalty for a wrong answer. The last ninety seconds are for '
          'filling gaps, not for a last reread.')],
  task='Sit the timed paper at the end of this volume under exam '
       'conditions, then answer these five in writing before the key.',
  qs=['What were your clock times at the end of each passage?',
      'Which passage cost most, and was it the text or the questions?',
      'How many questions did you mark and return to?',
      'Did you load before the third passage, or skip it?',
      'What was your reading speed, and is it inside 170-185?']),
 outlining=dict(
  title='Every outlining family, premises named, against the clock',
  body=('This is the whole strand, run once, timed, and then kept. Ten '
        'ideas in two minutes without judging any. The six tests. The '
        'premise under each survivor. Each premise pushed against three '
        'cases it was not built for. The distinct-and-equal check. '
        'Strongest last. Twelve minutes. Do it on the cycle 4 prompt and '
        'then do it again on any Task 2 prompt you have written badly '
        'before, because the second run is where you find out which two '
        'tools are actually yours. Everybody ends up using two. Nobody '
        'predicts which two correctly, and the ones you keep are not the '
        'ones you liked.'),
  frame=('Machine translation already removes the practical need to learn a '
         'language for most transactional purposes and cannot remove it '
         'where the exchange itself is the point, so it changes which '
         'languages are worth learning and why rather than whether any '
         'are',
         [('The transactional case rests on a premise about sufficiency '
           'that now holds for some language pairs and not others',
           ['fluency rose in all four pairs studied and adequacy in two',
            'post-editing is standard for the pairs with matched text and '
            'discouraged for those without']),
          ('The relational case rests on a premise about what a '
           'conversation is for, which no improvement in output addresses',
           ['a translated exchange has a third participant that is not a '
            'person',
            'the pairs where adequacy did not improve are the pairs where '
            'most learners live'])]),
  task='Run the full toolkit twice: once on the cycle 4 prompt, once on a '
       'prompt you have answered badly before. Keep both sheets.',
  qs=['Did you get to ten before judging any?',
      'Which test did most of the work this time?',
      'Did any premise commit you to something you reject?',
      'Were your two survivors distinct, and equal in weight?',
      'Which two tools did you use both times?'],
  answers=['ten first; the four-idea outline is the commonest cause of a '
           'thin essay',
           'the overlap test on most prompts, the premise test on moral '
           'ones',
           'if not, you have not pushed it against cases it was not built '
           'for',
           'distinct by subject, equal by the weight of their evidence',
           'whichever two they are, those are yours; stop practising the '
           'rest']),
 candos=['I can read official guidance for which body wants which document',
         'I can group chart categories that behave alike',
         'I can say what a translation preserved and what it gave up',
         'I can name the standard a judgement is being made against',
         'I can sit a full Reading paper at Volume 5 length in sixty '
         'minutes'],
 tip=('"Better" is incomplete, like "faster" with no distance. Before '
      'judging anything in Task 2 — a policy, a translation, a system — '
      'say what standard you are judging it by. One clause, and the whole '
      'paragraph becomes arguable.'),
)
