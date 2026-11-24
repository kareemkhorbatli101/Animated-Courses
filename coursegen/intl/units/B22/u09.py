# -*- coding: utf-8 -*-
import figs

U = dict(
num=9,
title='The Handover',
gram='quoting and paraphrasing accurately',
ai='a handover for a successor from a different service',
strap='CEFR B2 · Grammar: quoting and paraphrasing accurately · '
      'AI: a handover for a successor from a different service',
cando=['quote and paraphrase without altering meaning',
       'write a handover for a successor you have never met',
       'separate fact from judgement from impression',
       'say what cannot responsibly be written down',
       'write a six-line tasking for a handover note'],

hero=('FORTY-ONE PAGES, AND THE SUCCESSOR ASKED THE SAME ELEVEN QUESTIONS',
      ['Everything in the note was accurate.',
       'Nothing in it distinguished a fact from a judgement.'],
      [(1100, 'teal', 'long'), (260, 'grey', 'short'), (280, 'blue', 'short')]),
hero_cap='A handover note of forty-one pages, and the eleven questions it did not answer.',

warm=['What would you need to know on your first day in somebody else’s job?',
      'What would you not find in any file?',
      'What should never be written down?'],

read=[
 'The Ambassador is leaving after four years and her successor comes from a different service, '
 'has not served in the region and arrives in eleven days.',
 'A handover note is produced in forty-one pages: the political background, the bilateral '
 'relationship, the programme, the staff, the premises and eleven annexes.',
 'Every sentence in it is accurate. The difficulty is that a fact, a judgement and an '
 'impression are written in the same voice throughout, so that “the ministry is '
 'well disposed towards the project” and “the project has three signed agreements” look '
 'equally solid.',
 'Her successor telephones with eleven questions, of which nine are of the form: is that '
 'established, or is that your view? The note cannot answer them, because it is written as a '
 'single continuous assertion.',
 'A handover is not a description of a post. It is a transfer of three distinct things — what '
 'is established, what the outgoing officer judges, and what she has been told in confidence — '
 'and the third of them is largely unwritable.'],

dp1=('Handover practice', 'Practice commonly requires a handover note to distinguish '
     'established fact from the outgoing officer’s assessment, to attribute opinions to those '
     'who hold them, and to exclude information given in confidence that cannot be attributed.',
     'Source: general handover and continuity guidance, 2025–2026.'),

c_a=[('How long has the Ambassador served?', 'four years'),
     ('Where does her successor come from?', 'a different service'),
     ('In how many days does the successor arrive?', 'eleven'),
     ('How long is the note?', 'forty-one pages'),
     ('How many questions did the successor ask?', 'eleven'),
     ('What form were nine of them in?', 'is that established, or is that your view')],

c_b=[('The note contained errors.', 'F'),
     ('Facts and judgements were distinguished.', 'F'),
     ('The successor has served in the region.', 'F'),
     ('Some information cannot be written down.', 'T'),
     ('A handover describes a post.', 'F'),
     ('The note had eleven annexes.', 'T')],

c_c=[('She said, and I quote, that the project ____________ her full support.', 'had'),
     ('In her own words, the ministry is ____________ disposed.', 'well'),
     ('He told me, in substance, that the decision ____________ been taken.', 'had'),
     ('My own assessment ____________ that the programme will continue.', 'is'),
     ('I have been told, and cannot ____________ it, that the post will be cut.', 'attribute'),
     ('She ____________ that the agreement would be signed in March.', 'stated')],

c_d=[('A direct quotation uses ( your own / the speaker’s exact words ).', ['your own', 'the speaker’s exact words'], 1),
     ('A paraphrase must be ( marked as a paraphrase / presented as a quotation ).',
      ['marked as a paraphrase', 'presented as a quotation'], 0),
     ('“In substance” signals ( a faithful paraphrase / an exact quotation ).',
      ['a faithful paraphrase', 'an exact quotation'], 0),
     ('A judgement should be ( labelled as the writer’s / written as a fact ).',
      ['labelled as the writer’s', 'written as a fact'], 0),
     ('Information given in confidence is ( largely unwritable / recorded in full ).',
      ['largely unwritable', 'recorded in full'], 0)],

c_e=('Fact, judgement or impression? Put each statement in the right column.',
     [('the project has three signed agreements', 'fact'),
      ('the ministry is well disposed towards the project', 'judgement'),
      ('the director seemed uneasy on Tuesday', 'impression'),
      ('the programme ends in June', 'fact'),
      ('the new minister will probably continue it', 'judgement'),
      ('the atmosphere in the ministry has cooled', 'impression')],
     ['fact', 'judgement', 'impression']),

v_fig_title='A HANDOVER IN SIX WORDS',
v_fig=[('doc', 'a handover note'), ('people', 'a successor'), ('key', 'a judgement distinguished from a fact'),
       ('clock', 'a date of last contact'), ('chart', 'an unfinished matter'), ('speech', 'a thing that cannot be written')],
v_fig_cap='Six words for the document that is the whole of a mission’s memory.',

vocab=[
 ('a handover note', 'the account left for a successor'),
 ('a successor', 'the person taking over'),
 ('a judgement of a predecessor', 'the outgoing officer’s own assessment'),
 ('a direct quotation in a note', 'somebody’s exact words, quoted'),
 ('a paraphrase marked as such', 'a restatement identified as one'),
 ('an attribution of an opinion', 'naming who holds a view'),
 ('a contact of value', 'a person worth knowing'),
 ('a relationship of trust', 'a connection that has been earned'),
 ('a warning passed on', 'a caution handed to a successor'),
 ('an unfinished matter', 'something not yet concluded'),
 ('a standing commitment', 'an undertaking that continues'),
 ('a local sensitivity', 'a subject requiring care locally'),
 ('an assessment of staff', 'a judgement about colleagues'),
 ('a confidence of a colleague', 'something told to you privately'),
 ('a judgement distinguished from a fact', 'an opinion clearly marked as one'),
 ('an impression recorded as impression', 'a feeling labelled as such'),
 ('a date of last contact', 'when somebody was last spoken to'),
 ('a thing that cannot be written', 'information that must be said in person'),
 ('a first week of a successor', 'the arriving officer’s first days'),
 ('a continuity of a mission', 'the carrying forward of work')],

v_a=[('The outgoing officer’s own assessment is a ____________ of a predecessor.', 'judgement'),
     ('A restatement identified as one is a ____________ marked as such.', 'paraphrase'),
     ('Naming who holds a view is an ____________ of an opinion.', 'attribution'),
     ('A caution handed to a successor is a ____________ passed on.', 'warning'),
     ('Something told to you privately is a ____________ of a colleague.', 'confidence'),
     ('A feeling labelled as such is an ____________ recorded as impression.', 'impression'),
     ('When somebody was last spoken to is a ____________ of last contact.', 'date'),
     ('The carrying forward of work is a ____________ of a mission.', 'continuity')],

v_b=[('A handover note is the account', 'left for a successor.'),
     ('A contact of value is a person', 'worth knowing.'),
     ('A standing commitment is an undertaking', 'that continues.'),
     ('A local sensitivity is a subject', 'requiring care locally.'),
     ('A thing that cannot be written is information', 'that must be said in person.')],

g_title='Grammar: quoting and paraphrasing accurately',
g_rule=['A direct quotation reproduces the speaker’s exact words within quotation marks, with '
        'the speaker named: she said, “the project has my full support”.',
        'A paraphrase restates in your own words and must be marked as one: in substance, she '
        'said that she supported the project.',
        'Use a reporting verb that fits what happened: said, stated, told me, assured me, '
        'suggested, implied. Implied and suggested are judgements and must be used as such.',
        'Never present a paraphrase as a quotation, and never attribute to a speaker a '
        'conclusion you drew. In a handover both faults are permanent, because your successor '
        'cannot ask the speaker what was meant.'],
g_fig=('LOOSE',
       ['She said the project had her full support, more or less.',
        'The ministry is well disposed, as everybody knows.',
        'He implied that the decision was taken.',
        'They assured me that it would be signed, I think.'],
       'PRECISE',
       ['She said, “the project has my full support” (4 March).',
        'In my assessment the ministry is well disposed; the director has not said so.',
        'He said that the decision had been taken; I did not ask when.',
        'They stated that it would be signed in March; nothing has been signed.'],

       'four reports mixing quotation, paraphrase and inference',
       'the same four with each one labelled for what it is'),
g_fig_cap='Exact words in quotation marks. Your own words marked as yours. Inference labelled as inference.',

g_a=[('She said, and I quote, that the project ____________ her full support.', 'had'),
     ('In her own words, the ministry is ____________ disposed.', 'well'),
     ('He told me, in substance, that the decision ____________ been taken.', 'had'),
     ('My own assessment ____________ that the programme will continue.', 'is'),
     ('I have been told, and cannot ____________ it, that the post will be cut.', 'attribute'),
     ('She ____________ that the agreement would be signed in March.', 'stated'),
     ('He ____________ me on 4 March that the funds were available.', 'assured'),
     ('I ____________ from his manner that he was uneasy; he said nothing.', 'inferred'),
     ('The director ____________ nothing about the timetable.', 'said')],

g_b=[('( She said, “the project has my full support” / She said the project had her full support, more or less ) — quotation.', ['She said, “the project has my full support”', 'She said the project had her full support, more or less'], 0),
     ('( In my assessment the ministry is well disposed / The ministry is well disposed, as everybody knows ) — labelled.',
      ['In my assessment the ministry is well disposed',
       'The ministry is well disposed, as everybody knows'], 0),
     ('( He said that the decision had been taken / He implied that the decision was taken ) — what he said.',
      ['He said that the decision had been taken',
       'He implied that the decision was taken'], 0),
     ('( I inferred from his manner that he was uneasy / He was uneasy, clearly ) — inference labelled.',
      ['I inferred from his manner that he was uneasy', 'He was uneasy, clearly'], 0),
     ('( They stated that it would be signed in March / They assured me it would be signed, I think ) — precise.',
      ['They stated that it would be signed in March',
       'They assured me it would be signed, I think'], 0),
     ('( He assured me on 4 March that the funds were available / He assured me at some point about funds ) — dated.',
      ['He assured me on 4 March that the funds were available',
       'He assured me at some point about funds'], 0)],

d1=dict(
 title='Is that established, or is that your view',
 fig=(['Forty-one pages.', 'And eleven questions.'],
      ['Which eleven?', 'Nine of them the same one.']),
 cap='Ambassador Clara Mendel and her successor, by telephone.',
 lines=[('Successor', 'I have read your note twice. May I ask eleven questions?'),
        ('Mendel', 'Please.'),
        ('Successor', 'Nine of them are the same question. Is this established, or is it your view?'),
        ('Mendel', 'Give me an example.'),
        ('Successor', 'The ministry is well disposed towards the project.'),
        ('Mendel', 'That is my assessment, from four years of meetings.'),
        ('Successor', 'And three signed agreements?'),
        ('Mendel', 'That is a fact, and the dates are in annex four.'),
        ('Successor', 'They are written in the same voice, so I cannot tell them apart.'),
        ('Mendel', 'Nobody has ever asked me that before, and you are entirely right.'),
        ('Successor', 'Could you mark every sentence as fact, assessment or impression?'),
        ('Mendel', 'In two days, and the note will be shorter and far more useful.')],
 a=[('How many times had the successor read it?', 'twice'),
    ('How many questions were the same?', 'nine'),
    ('What was the question?', 'is this established or is it your view'),
    ('Which example was a judgement?', 'that the ministry is well disposed'),
    ('What will Mendel do?', 'mark every sentence as fact, assessment or impression')],
 b=[('Written in the same ____________.', 'voice'),
    ('I cannot tell them ____________.', 'apart'),
    ('You are entirely ____________.', 'right'),
    ('Shorter and far more ____________.', 'useful')]),

d2=dict(
 title='What cannot be written',
 fig=(['And the rest?', 'The rest I say to you in person.'],
      ['Why not write it?', 'Because a note is read by people it was not written for.']),
 cap='Mendel and Amara Sow, on the third category.',
 lines=[('Amara', 'There are four things you know that are not in the note.'),
        ('Mendel', 'Five. And none of them can be written.'),
        ('Amara', 'Because they came to you in confidence.'),
        ('Mendel', 'Two did. One is an assessment of a colleague that would be unfair in writing. Two concern people who would be at risk.'),
        ('Amara', 'And your successor needs all five.'),
        ('Mendel', 'Which is why I shall fly back for a day and tell her in a room.'),
        ('Amara', 'Is that proportionate?'),
        ('Mendel', 'Four years of relationships against the price of one journey, yes.'),
        ('Amara', 'And what goes in the note instead?'),
        ('Mendel', 'A line saying that there are five matters I shall convey in person, and the date I shall do it.'),
        ('Amara', 'So the note records the existence of what it cannot contain.'),
        ('Mendel', 'And if I cannot travel, who tells her, and in what room?')],
 unresolved=True,
 a=[('How many things are not in the note?', 'five'),
    ('Why can they not be written?', 'confidence, fairness and risk to people'),
    ('What will Mendel do?', 'return for a day and tell her in person'),
    ('What goes in the note?', 'a line recording that five matters will be conveyed in person'),
    ('What does the note then record?', 'the existence of what it cannot contain')],
 b=[('They came to you in ____________.', 'confidence'),
    ('People who would be at ____________.', 'risk'),
    ('The price of one ____________.', 'journey'),
    ('The ____________ I shall do it.', 'date')]),

speak=[('Quote, paraphrase, infer',
        ['Report six things people have said to you at work.',
         'Mark each as quotation, paraphrase or inference.',
         'Your partner challenges any that is mislabelled.']),
       ('Fact or view',
        ['Describe your own job in twelve sentences.',
         'Your partner asks of each: established, or your view?',
         'Relabel anything you cannot support.']),
       ('What you would not write',
        ['Name three things about your work you would not put in a note.',
         'Say why for each: confidence, fairness or risk.',
         'Agree with your partner how each should be conveyed instead.'])],

ext_title='A handover transfers three things, and only two of them can be written',
ext_fig=figs.datatable('FORTY-ONE PAGES, SORTED',
                       ['Category', 'Pages', 'How marked'],
                       [['established facts, with dates', '14', 'fact'],
                        ['the outgoing officer’s assessments', '19', 'unmarked'],
                        ['impressions', '5', 'unmarked'],
                        ['received in confidence', '0', 'absent'],
                        ['annexes of documents', '11', 'cited'],
                        ['what will be said in person', '0', 'not recorded']]),
ext_fig_cap='Twenty-four pages of judgement and impression written in the voice of fact.',
ext=[
 'A handover note can be assembled quickly from four years of files, and it will be accurate, '
 'comprehensive and long. Length and accuracy are not the difficulty.',
 'The difficulty is that a file does not distinguish between what was established and what the '
 'outgoing officer concluded. Both appear as sentences, in the same voice, and a successor who '
 'has never served in the region cannot tell them apart.',
 'So the instruction must require every statement to be marked: fact, with its source and date; '
 'assessment, with whose assessment it is; or impression, labelled as impression. The marking '
 'costs nothing in length and converts a description into something that can be acted on.',
 'Quotation requires the same discipline. Exact words in quotation marks with a date; '
 'paraphrase marked in substance; inference marked as inference. A successor cannot telephone a '
 'minister to ask what he meant in March, so what you write is all there will ever be.',
 'The third category cannot be written at all. Information received in confidence, an '
 'assessment of a colleague that would be unfair on paper, and anything that would put a person '
 'at risk belong in a room, and a note that contains them is a note that will be read by '
 'somebody it was not written for.',
 'What the note can do is record that they exist: a line saying that there are five matters to '
 'be conveyed in person, and the date on which that will happen. A handover that ends without '
 'that line has quietly decided that four years of confidences die with the posting.'],

dp2=('Confidences', 'Handover practice commonly provides for information received in confidence '
     'to be conveyed orally and for the handover note to record that such matters exist and when '
     'they will be transmitted, rather than omitting them without trace.',
     'Source: general handover and continuity guidance, 2025–2026.'),

e_a=[('What is not the difficulty?', 'length and accuracy'),
     ('What is the difficulty?', 'a file does not distinguish fact from conclusion'),
     ('How must every statement be marked?', 'fact with source and date, assessment, or impression'),
     ('What are the three quotation rules?', 'exact words dated, paraphrase marked, inference labelled'),
     ('What can the note do about confidences?', 'record that they exist and when they will be conveyed')],
e_b=[('A long note is necessarily a useful one.', 'F'),
     ('A successor can usually check what was meant.', 'F'),
     ('Marking costs length.', 'F'),
     ('Some matters belong in a room.', 'T'),
     ('A note should record that confidences exist.', 'T'),
     ('Impressions should be labelled.', 'T')],

w_model='Purpose: so that my successor, who comes from another service and has not served here, '
        'can act in her first week without telephoning me. Scope: the four years of my posting; '
        'the administrative inventory is a separate document. Inputs: the political files, the '
        'programme records, my own diary and the staff assessments. Criteria: every statement '
        'marked as fact, with its source and date; as assessment, with whose it is; or as '
        'impression; every quotation in the speaker’s exact words with the date, every '
        'paraphrase marked in substance, every inference marked as inference; a list of '
        'unfinished matters with the date of last contact on each; and a closing line recording '
        'that there are matters to be conveyed in person and when I shall convey them. Done: '
        'with her four days before she arrives. Fallback: where I cannot establish whether a '
        'statement is fact or assessment, it is marked as assessment.',
w_fig=figs.spec_card('SIX LINES FOR A HANDOVER NOTE',
                     [('Purpose', 'she can act in her first week without telephoning me'),
                      ('Scope', 'the four years; the inventory separately'),
                      ('Inputs', 'political files, programme records, diary, staff assessments'),
                      ('Criteria', 'fact / assessment / impression; quotations dated; unfinished matters'),
                      ('Done', 'four days before she arrives'),
                      ('Fallback', 'uncertain? mark it as assessment')]),
w_fig_cap='The fallback resolves every doubt downwards, which is the only safe direction here.',
w_task='Write a six-line tasking for a handover note.',
w_steps=['Line 1: say what your successor must be able to do.',
         'Line 2: say which period, and what is separate.',
         'Line 3: say what you are giving it.',
         'Line 4: say the marking, the quotation rules and the unfinished matters.',
         'Line 5: say when it must be with her.',
         'Line 6: say what happens where fact and assessment cannot be separated.'],
w_bank=['Purpose: so that my successor can act in her first week without telephoning me',
        'Scope: the … years of my posting; the administrative inventory is a separate document',
        'Inputs: the political files, the programme records, my own diary and the staff assessments',
        'Criteria: every statement marked as fact with source and date, as assessment with whose it is, or as impression; quotations in exact words with dates; paraphrases marked in substance; inferences marked as inference; unfinished matters with the date of last contact; a closing line recording what will be conveyed in person',
        'Done: with her … before she arrives. Fallback: where fact and assessment cannot be separated, the statement is marked as assessment'],
w_check=['Is every statement marked?',
         'Are quotations exact and dated?',
         'Do unfinished matters carry a last-contact date?',
         'Is the existence of confidences recorded?'],

t_title='A handover for a successor from a different service',
t_fig=figs.split('FOUR YEARS',
                 'Mark every sentence',
                 ['fact, with source and date',
                  'assessment, and whose',
                  'impression, as impression',
                  'inference, as inference'],
                 'Keep out of writing',
                 ['confidences received',
                  'unfair assessments of people',
                  'anything putting a person at risk',
                  'but record that they exist']),
t_fig_cap='Two columns, and the right-hand one is the reason a handover needs a room as well as a note.',
t_body=[
 'Name the successor’s position in the instruction, because it sets the standard: an officer '
 'from a different service who has not served in the region and must act in her first week '
 'without telephoning you.',
 'Require every statement to be marked as fact, with its source and date; as assessment, with '
 'whose assessment it is; or as impression. Require every quotation to be the speaker’s exact '
 'words with a date, every paraphrase to be marked in substance, and every inference to be '
 'labelled as inference.',
 'Then deal honestly with the third category. Confidences, unfair assessments and anything that '
 'would put a person at risk are conveyed in a room and not in a document — and the note '
 'records that they exist, how many there are, and when you will convey them.'],
t_say=[('Name the reader: ', 'An officer from another service who has not served here.'),
       ('Require the marking: ', 'Fact with a date, assessment with a name, impression as impression.'),
       ('Record the gap: ', 'Five matters to be conveyed in person, on the fourteenth.')],
t_bound='It can read the files and cannot know which sentences in them are conclusions you drew. '
        'It will also write everything you give it, including the five things that belong in a '
        'room and nowhere else.',
t_a=[('An officer from another ____________.', 'service'),
     ('Fact with a ____________.', 'date'),
     ('Assessment with a ____________.', 'name'),
     ('Impression as ____________.', 'impression'),
     ('Five matters to be conveyed in ____________.', 'person'),
     ('Things that belong in a ____________ and nowhere else.', 'room')],
t_b_rubric='Say how each item should be handled.',
t_b=[('Three agreements signed, with dates.', 'fact, with the annex cited'),
     ('That the ministry is well disposed.', 'assessment, marked as yours'),
     ('That a director seemed uneasy in March.', 'impression, labelled'),
     ('What a colleague told you in confidence.', 'in person, with its existence noted')],

case=dict(
 title='The Decision Room · Forty-one pages in one voice',
 brief=[
  'An ambassador completing a four-year posting prepares a handover note of forty-one pages '
  'with eleven annexes. Her successor comes from a different service, has not served in the '
  'region, and arrives in eleven days.',
  'Every sentence in the note is accurate. Fourteen pages are established fact; nineteen are '
  'the outgoing officer’s assessments; five are impressions. All are written in the same voice, '
  'and none is marked.',
  'Five further matters are known to the outgoing officer and appear nowhere: two were given in '
  'confidence, one is an assessment of a colleague that would be unfair in writing, and two '
  'concern people who would be at risk if the note were read by anybody else.'],
 exhibit=figs.datatable('THE SUCCESSOR’S ELEVEN QUESTIONS',
                        ['Question type', 'Number'],
                        [['is this established or your view?', '9'],
                         ['when was this last checked?', '1'],
                         ['who said this, and when?', '1'],
                         ['questions about facts as such', '0'],
                         ['questions answered by the note', '0'],
                         ['matters not in the note at all', '5']]),
 exhibit_cap='Eleven questions, nine of them one question, and five matters the note never mentions.',
 exhibit_note='The note is a good description of a post. A successor does not need a '
              'description; she needs to know which sentences she may rely on.',
 voices=[('the successor', 'incoming head of mission',
          'Nine of my questions are the same question: is this established, or is it your view?'),
         ('Ambassador Clara Mendel', 'outgoing head of mission',
          'Nobody has ever asked me that, and marking every sentence will take two days.'),
         ('Amara Sow', 'senior locally engaged assistant',
          'And five things cannot be written at all, so somebody must be in a room with her.')],
 steps=[('Find it', 'What does the note contain?'),
        ('Compare it', 'Fact against assessment.'),
        ('Infer it', 'Why are they indistinguishable?'),
        ('Weigh it', 'Two days of marking.'),
        ('Decide', 'What must a handover do?')],
 analysis=[('Find it. What was produced?', 'forty-one accurate pages'),
           ('Compare it. What is unmarked?', 'nineteen pages of assessment and five of impression'),
           ('Infer it. Why?', 'files do not distinguish fact from conclusion'),
           ('Weigh it. What does marking cost?', 'two days'),
           ('Decide. What must it do?', 'mark every statement, and record what must be said in person')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say how every statement is marked.',
                 'Say how quotations are handled.',
                 'Say what is excluded from writing.',
                 'Say what the note records about the exclusion.'],
 bank=['Every statement in a handover note is marked as fact, with source and date; as assessment, with whose it is; or as impression.',
       'Quotations give the speaker’s exact words with the date; paraphrases are marked in substance; inferences are marked as inference.',
       'Confidences, assessments that would be unfair in writing, and anything putting a person at risk are not written down.',
       'The note records that such matters exist, how many there are, and when they will be conveyed in person.'],
 outcome='The note is reissued in twenty-six pages with every statement marked, and the '
         'successor’s eleven questions fall to two. The outgoing Ambassador returns for one day '
         'in the third week of the handover and conveys the five matters in a room, and the note '
         'records that she did so and when. Two years later the same marking convention is '
         'required for every handover in the service, and the first week of a posting ceases to '
         'begin with a telephone call to a predecessor on holiday.',
 outcome_q=[('How long is the reissued note?', 'twenty-six pages'),
            ('How many questions remained?', 'two'),
            ('When were the five matters conveyed?', 'in the third week, in person'),
            ('What does the note record?', 'that they were conveyed, and when'),
            ('What happened two years later?', 'the convention was required service-wide')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Write my handover note',
 task=['A departing head of mission asked for a handover note.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Write my handover note.',
        'Everything my successor needs.',
        'Four years, with no exceptions.',
        'Thorough.',
        'Include my assessments.',
        'Before I leave.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and “include my assessments” put nineteen pages of opinion in the voice of fact.',
 asked=['Everything my successor needs', 'No exceptions', 'Include my assessments'],
 back=['41 pages', '19 pages of assessment', '0 statements marked'],
 gap='Nobody asked for fact, assessment and impression to be distinguished, or for the quotations to be dated.',
 back_cap='Forty-one accurate pages in a single voice, which produced eleven questions in one.',
 back_note='“Thorough” and “everything my successor needs” both reward length, and length is '
           'the one thing a handover never lacks.',
 diagnosis=[('“everything my successor needs”', 'unstated exception'),
            ('“thorough”', 'unstated criterion'),
            ('“include my assessments”', 'hidden assumption'),
            ('“with no exceptions”', 'unstated exception'),
            ('“before I leave”', 'unstated criterion'),
            ('“write my handover note”', 'hidden assumption')],
 rewrite='Rewrite it on the six lines so that your successor knows what she may rely on.',
 scaffold=['what your successor must be able to do',
           'which period, and what is separate',
           'what you are giving it',
           'the marking, the quotation rules and the unfinished matters',
           'when it must be with her',
           'what happens where fact and assessment cannot be separated'],
 bank=['Purpose: so that my successor, who comes from another service and has not served here, can act in her first week without telephoning me',
       'Scope: the four years of my posting; the administrative inventory is a separate document',
       'Inputs: the political files, the programme records, my own diary and the staff assessments',
       'Criteria: every statement marked as fact, with its source and date; as assessment, with whose it is; or as impression; every quotation in the speaker’s exact words with the date, every paraphrase marked in substance, every inference marked as inference; a list of unfinished matters with the date of last contact on each; and a closing line recording that there are matters to be conveyed in person and when I shall convey them',
       'Done: with her four days before she arrives',
       'Fallback: where I cannot establish whether a statement is fact or assessment, it is marked as assessment'],
 check=['Is every statement marked?',
        'Are quotations exact and dated?',
        'Are unfinished matters dated?',
        'Is the oral category recorded?'],
 model=['so that my successor, who comes from another service and has not served here, can act in her first week without telephoning me',
        'the four years of my posting; the administrative inventory is a separate document',
        'the political files, the programme records, my own diary and the staff assessments',
        'every statement marked as fact, with its source and date; as assessment, with whose it is; or as impression; every quotation in the speaker’s exact words with the date, every paraphrase marked in substance, every inference marked as inference; a list of unfinished matters with the date of last contact on each; and a closing line recording that there are matters to be conveyed in person and when I shall convey them',
        'with her four days before she arrives',
        'where I cannot establish whether a statement is fact or assessment, it is marked as assessment'],
 cost='41 pages, 19 of assessment unmarked, 0 statements labelled, and eleven questions in the first week.'),

lang=dict(
 title='Across the Language Line · A judgement that reads as a fact in translation',
 setting=[
  'The handover note is read by a locally engaged colleague who will brief the successor on '
  'arrival. She reads it in English and renders key passages in the host language for her own '
  'notes.',
  'The sentence the ministry is well disposed towards the project becomes, in her rendering, a '
  'statement of the ministry’s position. The hedge that made it an assessment was never there '
  'in the English.'],
 ladder=[('An unmarked assessment', 'in the English'),
         ('A rendering', 'as the ministry’s position'),
         ('A briefing', 'citing the ministry for a view it has never stated')],
 cap='An unmarked judgement, hardening at every stage of its journey.',
 turns=[('Turn 1 · The colleague', 'Your note says the ministry supports the project.'),
        ('Turn 2 · Mendel', 'It says that I assess them as well disposed.'),
        ('Turn 3 · The colleague', 'It does not say that at all. It says they are well disposed.')],
 holds=['You are right; the sentence should begin in my assessment.',
        'The ministry has never stated a position on the project.',
        'Could you mark every such sentence where you find one?',
        'I would rather be told I was imprecise than have it repeated.',
        'Shall we go through the nineteen pages together?',
        'I will add the marking before the note is sent.'],
 redline='Never leave an assessment unmarked where it will be translated, and never allow a '
         'ministry to be cited for a view it has not stated.',
 score=['Accepted the correction at once.',
        'Stated plainly that the ministry had taken no position.',
        'Asked the colleague to mark further instances.',
        'Preferred correction to repetition.',
        'Undertook to mark the note before sending.'],
 a=[('What does the note appear to say?', 'that the ministry supports the project'),
    ('What did the writer mean?', 'that she assesses them as well disposed'),
    ('What was missing?', 'the marking of the assessment'),
    ('What happens in translation?', 'the judgement hardens into a position'),
    ('What should be done?', 'mark every such sentence before sending'),
    ('What must never happen?', 'a ministry cited for a view it has not stated')]),

rev_fig=figs.split('A HANDOVER',
                   'In the note',
                   ['facts, dated and sourced',
                    'assessments, attributed',
                    'impressions, labelled',
                    'unfinished matters, dated'],
                   'In a room',
                   ['confidences received',
                    'unfair assessments',
                    'risks to people',
                    'and the note says they exist']),
rev_fig_cap='Two columns and one line joining them: five matters, conveyed in person, on a named date.',
rev=dict(
 read=[('How long was the note?',
        ['forty-one pages', 'twenty-six pages', 'eleven pages', 'four pages'], 0),
       ('How many of the successor’s questions were the same?',
        ['nine', 'two', 'eleven', 'none'], 0),
       ('How many matters could not be written?',
        ['five', 'two', 'nineteen', 'none'], 0),
       ('What does the note record about them?',
        ['that they exist and when they will be conveyed', 'their content',
         'nothing', 'the names involved'], 0)],
 listen_text='Require every statement to be marked as fact with its source and date, as '
             'assessment with whose it is, or as impression; and record that there are matters '
             'to be conveyed in person, and when.',
 listen=[('Every statement ____________.', 'marked'),
         ('As fact with its source and ____________.', 'date'),
         ('Or as ____________.', 'impression'),
         ('Matters to be conveyed in ____________.', 'person')],
 speak=['Report six statements as quotation, paraphrase or inference, correctly marked.',
        'Then name three things you would not write down, and say why.'],
 write='Write a six-line tasking for a handover note.',
 vocab=[('The outgoing officer’s own assessment is a ____________ of a predecessor.', 'judgement'),
        ('A restatement identified as one is a ____________ marked as such.', 'paraphrase'),
        ('Something told to you privately is a ____________ of a colleague.', 'confidence'),
        ('When somebody was last spoken to is a ____________ of last contact.', 'date')],
 gram=[('He ____________ me on 4 March that the funds were available.', 'assured'),
       ('I ____________ from his manner that he was uneasy; he said nothing.', 'inferred'),
       ('The director ____________ nothing about the timetable.', 'said'),
       ('In substance, he ____________ me that the funds were secure.', 'told')]),

found=['Mark every statement as fact, assessment or impression.',
       'Quote exact words with a date; mark paraphrase; label inference.',
       'Keep confidences and risks out of writing, and convey them in a room.',
       'Record in the note that such matters exist, and the date you will convey them.'],
end_line='A successor cannot ask a minister what he meant. What you write is all there is.',
end_next='Next: The End of a Posting')
