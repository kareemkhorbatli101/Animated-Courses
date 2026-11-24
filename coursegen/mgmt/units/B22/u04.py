# -*- coding: utf-8 -*-
import figs

U = dict(
num=4, title='Although They Said',
gram='contrast and concession: although, despite, whereas, however',
ai='disclosure: what you tell customers, and when',
strap='CEFR B2 · Grammar: contrast and concession · AI: disclosure',
cando=['use although, despite, whereas and however with the right grammar after each',
       'concede a point without surrendering the argument that follows it',
       'decide what a customer should be told about how work is produced',
       'tell a disclosure that informs from one that protects only the supplier',
       'say when something should be volunteered rather than answered on request'],
hero=('THE PARAGRAPH THAT WENT INTO EVERY CONTRACT',
      ['Forty-one words, agreed over three weeks,',
       'and two clients out of eleven ever mentioned it.'],
      [(900, 'grey', 'long'), (1640, 'blue', 'short'), (2380, 'teal', 'long')]),
hero_cap='Disclosure: easy to write badly, surprisingly hard to write usefully.',

warm=['What would you want to know about how a supplier produces your work?',
      'What is the difference between "although it is cheaper" and "despite being cheaper"?',
      'When should a company volunteer something rather than wait to be asked?'],
read=[
 'Arclight spent three weeks in the spring deciding what to tell clients about how their '
 'work is produced, and the argument divided the company in a way that none of the '
 'quality questions had. Everybody agreed that concealment was unacceptable. Almost nobody '
 'agreed about what the alternative was.',
 'Marta wanted a clause in every contract. Fatima thought a clause nobody reads is a legal '
 'protection rather than a disclosure, and that the honest version is telling people in the '
 'conversation where it matters. Kenji pointed out that four competitors had published '
 'nothing at all and that being first carries a cost whether or not it is the right thing.',
 'The paragraph they wrote says that routine document handling, extraction and first drafts '
 'are produced with automated assistance; that every item leaving Arclight is released by a '
 'named person; and that any client may ask which parts of their own work are produced which '
 'way, and will be told.',
 'Two clients mentioned it. Priya Menon said she had assumed as much and was glad to see it '
 'written down. Another asked, under the third limb, which parts of her work were affected, '
 'and received a four-line answer that took Fatima about twenty minutes to assemble. Nobody '
 'left, nobody renegotiated, and nobody else said anything at all.',
 'Victor’s view, which he holds more firmly a year later, is that the value of the paragraph '
 'is not in what clients do with it. It is that writing it forced Arclight to decide what '
 'was true, and the third limb in particular means that the company must be able to answer a '
 'question it had never previously been able to answer about itself.'],
c_a=[('How long did Arclight spend deciding?', 'three weeks'),
     ('What did everybody agree about?', 'that concealment was unacceptable'),
     ('What was Fatima’s objection to a contract clause?', 'that a clause nobody reads is legal protection rather than disclosure'),
     ('What are the three limbs of the paragraph?', 'what is produced with assistance, that a named person releases everything, and that any client may ask'),
     ('What does Victor think the paragraph is worth?', 'that writing it forced the company to decide what was true')],
c_b=[('Everybody agreed about what the alternative to concealment was.', 'F'),
     ('Four competitors had published nothing.', 'T'),
     ('Two clients mentioned the paragraph.', 'T'),
     ('A client renegotiated as a result.', 'F'),
     ('The third limb requires Arclight to answer a question about itself.', 'T'),
     ('Fatima wanted the clause in every contract.', 'F')],
c_c=[('The argument divided the company in a way that none of the quality questions ____________.', 'had'),
     ('A clause nobody reads is a legal ____________ rather than a disclosure.', 'protection'),
     ('Every item leaving Arclight is released by a ____________ person.', 'named'),
     ('She had ____________ as much and was glad to see it written down.', 'assumed'),
     ('A four-line answer that took Fatima about twenty ____________ to assemble.', 'minutes'),
     ('The company must be able to answer a question it had never previously been able to ____________.', 'answer')],
c_d=[('The paragraph’s main value was ( internal clarity / client reaction ).', ['internal clarity', 'client reaction'], 0),
     ('Fatima’s objection was that a contract clause', ['is illegal', 'protects the supplier rather than informing', 'is too long', 'is unnecessary'], 1),
     ('Kenji’s concern was about', ['accuracy', 'being first when competitors publish nothing', 'cost', 'wording'], 1),
     ('The third limb entitles a client to', ['a discount', 'ask which parts are produced which way', 'a different service', 'nothing'], 1),
     ('How many of eleven clients mentioned it?', ['none', 'two', 'six', 'all'], 1)],
c_e=('Which connector? Put each sentence in the right column.',
     [('Although it is cheaper, we did not take it.', 'although + clause'),
      ('Despite being cheaper, we did not take it.', 'despite + noun or -ing'),
      ('It is cheaper; however, we did not take it.', 'however + new sentence'),
      ('Ours costs more, whereas theirs is free.', 'whereas + contrast clause'),
      ('Although the rate fell, nobody noticed.', 'although + clause'),
      ('Despite the fall, nobody noticed.', 'despite + noun or -ing')],
     ['although + clause', 'despite + noun or -ing', 'however + new sentence',
      'whereas + contrast clause']),

v_fig_title='WHAT YOU SAY, AND WHEN',
v_fig=[('doc', 'disclosure'), ('scale', 'a material fact'), ('bulb', 'upfront'),
       ('note', 'small print'), ('people', 'informed consent'), ('bank', 'withhold')],
v_fig_cap='Six words from a subject that is older than any of this and has not changed.',
vocab=[
 ('disclosure', 'the act of making something known that was not previously'),
 ('openness', 'a general willingness to let others see how things are done'),
 ('concealment', 'deliberately keeping something from somebody entitled to know'),
 ('forthright', 'direct and frank, without evasion'),
 ('upfront', 'said at the beginning rather than when it becomes unavoidable'),
 ('volunteer', 'to say something without being asked'),
 ('withhold', 'to keep back something you could have given'),
 ('material fact', 'a fact that would change somebody’s decision if they knew it'),
 ('informed consent', 'agreement given by somebody who understands what they are agreeing to'),
 ('small print', 'the terms nobody reads, whether or not they are hidden'),
 ('terms', 'the conditions on which a service is provided'),
 ('inform', 'to tell somebody something they need in order to act'),
 ('misleading', 'creating a false impression without necessarily lying'),
 ('half-truth', 'a statement that is true and leaves out what matters'),
 ('selective', 'choosing what to present in a way that shapes the impression'),
 ('proactive', 'acting before being prompted or required'),
 ('reactive', 'acting only when prompted or required'),
 ('duty to disclose', 'an obligation to say something without being asked'),
 ('on request', 'provided only when somebody asks for it'),
 ('in advance', 'before the point at which it would otherwise matter')],
v_a=[('A fact that would change somebody’s decision is a ____________.', 'material fact'),
     ('A statement that is true and leaves out what matters is a ____________.', 'half-truth'),
     ('An obligation to say something unasked is a ____________.', 'duty to disclose'),
     ('Acting before being prompted is ____________.', 'proactive'),
     ('To keep back something you could have given is to ____________ it.', 'withhold'),
     ('Agreement from somebody who understands it is ____________.', 'informed consent'),
     ('Creating a false impression without lying is ____________.', 'misleading'),
     ('Direct and frank, without evasion, is ____________.', 'forthright')],
v_b=[('Concealment is deliberately keeping something', 'from somebody entitled to know.'),
     ('To volunteer something is to say it', 'without being asked.'),
     ('Selective means choosing what to present', 'in a way that shapes the impression.'),
     ('Small print is the terms nobody reads,', 'whether or not they are hidden.'),
     ('Upfront means said at the beginning', 'rather than when it becomes unavoidable.')],

g_title='Grammar: contrast and concession',
g_rule=['Although and though take a clause: although it is cheaper, we declined.',
        'Despite and in spite of take a noun or an -ing form: despite being cheaper.',
        'However begins a new sentence or follows a semicolon, with a comma after it.',
        'Whereas sets two facts directly against each other, both of them true.'],
g_fig=('LOOSE',
       ['Despite it is cheaper, we declined.',
        'Although being cheaper, we declined.',
        'It is cheaper, however we declined.',
        'Although it is cheaper, but we declined.'],
       'PRECISE',
       ['Although it is cheaper, we declined.',
        'Despite being cheaper, it was declined.',
        'It is cheaper; however, we declined.',
        'Ours costs more, whereas theirs is free.'],
       'four of the commonest errors in business English',
       'the same four contrasts, correctly joined'),
g_fig_cap='Each line on the left is written somewhere in the world about four thousand times a day.',
g_a=[('____________ it is cheaper, we declined the offer. (although)', 'Although'),
     ('____________ being cheaper, it was declined. (despite)', 'Despite'),
     ('It is cheaper; ____________, we declined. (however)', 'however'),
     ('Ours costs more, ____________ theirs is free. (whereas)', 'whereas'),
     ('____________ the fall in the rate, nobody noticed. (despite)', 'Despite'),
     ('____________ the rate fell, nobody noticed. (although)', 'Although'),
     ('____________ of the delay, the client was patient. (in spite)', 'In spite'),
     ('Two clients mentioned it; ____________, nine did not. (however)', 'however'),
     ('He signed it, ____________ she refused to. (whereas)', 'whereas')],
g_b=[('( Despite / Although ) it is cheaper, we declined.', ['Despite', 'Although'], 1),
     ('____ being cheaper, it was declined.', ['Although', 'Despite', 'However', 'Whereas'], 1),
     ('It is cheaper; ____, we declined.', ['although', 'despite', 'however', 'whereas'], 2),
     ('Ours costs more, ____ theirs is free.', ['despite', 'although', 'whereas', 'however'], 2),
     ('____ of the delay, the client was patient.', ['Although', 'However', 'In spite', 'Whereas'], 2),
     ('____ the rate fell, nobody noticed.', ['Despite', 'Although', 'However', 'In spite'], 1)],

d1=dict(title='A clause, or a conversation?',
        fig=(['Put it in the contract.', 'Nobody reads the contract.'],
             ['That is their problem.', 'It is ours if the point is to inform them.']),
        cap='Marta and Fatima, in week two of three.',
        lines=[('Marta', 'A clause in every contract, so that the position is unambiguous and recorded.'),
               ('Fatima', 'Nobody reads the contract. Priya read ours; the other ten did not.'),
               ('Marta', 'A client who does not read a contract they have signed is in a weaker position, '
                         'not a stronger one.'),
               ('Fatima', 'Legally, yes. I am not arguing about where they stand legally.'),
               ('Marta', 'Then what are you arguing about?'),
               ('Fatima', 'Whether we have told them. A clause they have not read protects us and informs '
                          'nobody, and those are different purposes.'),
               ('Marta', 'They are different purposes and we need both.'),
               ('Fatima', 'Then say so. Put the clause in for the protection, and have the conversation '
                          'for the informing, and do not pretend that the first does the second.'),
               ('Marta', 'I have no objection to that at all, as long as somebody owns the conversation.'),
               ('Fatima', 'I own the conversation. I am asking you not to tell me that the clause has '
                          'already covered it.'),
               ('Marta', 'That is fair and I think I have been doing exactly that for two weeks.'),
               ('Fatima', 'You have. It is the commonest thing in this subject and it is not dishonest, '
                          'which is why it survives.')],
        unresolved=True,
        a=[('What does Marta want?', 'a clause in every contract'),
           ('What is Fatima’s objection?', 'that a clause nobody reads protects the supplier and informs nobody'),
           ('What two purposes does Fatima distinguish?', 'protection and informing'),
           ('What do they agree?', 'to have both, with somebody owning the conversation'),
           ('What does Marta concede?', 'that she has been treating the clause as though it did the informing')],
        b=[('Priya read ours; the other ten did ____________.', 'not'),
           ('A clause they have not read protects us and informs ____________.', 'nobody'),
           ('Somebody owns the ____________.', 'conversation'),
           ('It is not dishonest, which is why it ____________.', 'survives')]),
d2=dict(title='Which parts of my work?',
        fig=(['Which parts of my work are affected?', 'Give me twenty minutes.'],
             ['You do not know?', 'Not in a form I could show you.']),
        cap='Fatima and a client, under the third limb.',
        lines=[('Client', 'Your paragraph says I may ask which parts of my work are produced which way. '
                          'So I am asking.'),
               ('Fatima', 'You are, and I am going to need about twenty minutes to answer it properly.'),
               ('Client', 'You do not know?'),
               ('Fatima', 'I know roughly. I do not know in a form I would be willing to show you, which '
                          'is a different thing and a worse one.'),
               ('Client', 'That is a more honest answer than I expected.'),
               ('Fatima', 'It is the answer the paragraph forces. We wrote that you could ask, so we have '
                          'to be able to answer.'),
               ('Client', 'And if the answer had been embarrassing?'),
               ('Fatima', 'Then you would have it anyway, which is the point of having written it down '
                          'before anybody asked.'),
               ('Client', 'Most suppliers would have said they would come back to me and then not.'),
               ('Fatima', 'Most suppliers have not written a sentence that commits them, which is the '
                          'only reason I am sitting here working it out.'),
               ('Client', 'Send me the four lines. I do not think I will do anything with them.'),
               ('Fatima', 'I think that is probably true, and I would still rather you had them.')],
        a=[('What does the client ask?', 'which parts of her work are produced which way'),
           ('How long does Fatima need?', 'about twenty minutes'),
           ('What does Fatima admit?', 'that she knows roughly but not in a form she would show'),
           ('Why does she have to answer at all?', 'because the paragraph commits Arclight to answering'),
           ('What does the client say she will do with the answer?', 'probably nothing')],
        b=[('Not in a form I would be willing to ____________ you.', 'show'),
           ('It is the answer the ____________ forces.', 'paragraph'),
           ('Most suppliers have not written a sentence that ____________ them.', 'commits'),
           ('I would still rather you ____________ them.', 'had')]),

speak=[('Join the contrast',
        ['Student A: say two facts that are both true and point in opposite directions.',
         'Student B: join them four ways, using although, despite, however and whereas.',
         'Check the grammar after each connector.']),
       ('Spoken specification: write the disclosure',
        ['Choose something about how your work is produced that a customer might want to know.',
         'Brief aloud what you would tell them, when, and whether they would have to ask.',
         'Your partner asks the awkward follow-up question. Answer it.']),
       ('Clause or conversation?',
        ['In pairs, name three things your organisation discloses in writing.',
         'For each, say whether a customer would ever read it.',
         'Decide which would need a conversation to count as having been told.'])],

ext_title='A clause nobody reads protects you and informs nobody',
ext_fig=figs.datatable('FOUR WAYS OF TELLING SOMEBODY',
                       ['Method', 'Protects you?', 'Informs them?', 'Costs'],
                       [['contract clause', 'yes', 'rarely', 'one afternoon'],
                        ['a line in the proposal', 'partly', 'sometimes', 'nothing'],
                        ['a conversation at the start', 'no', 'yes', '10 minutes each'],
                        ['answering when asked', 'no', 'only the asker', 'varies'],
                        ['all four together', 'yes', 'yes', 'a few hours a year']]),
ext_fig_cap='The two middle columns are the ones that come apart, and the first is the one companies optimise.',
ext=[
 'Disclosure is an old subject with a settled vocabulary, and nothing about the present '
 'situation changes its structure. The questions are the same ones that arise about any '
 'material fact: what would a reasonable customer want to know, when would they want to '
 'know it, and does telling them require them to ask.',
 'The first trap is confusing protection with information, and it is easy to fall into '
 'because the two are usually produced by the same document. A clause in a contract '
 'establishes that a customer was told, in the sense that matters to a lawyer, and it does '
 'not establish that they know, in the sense that matters to a relationship. Both purposes '
 'are legitimate and only one of them is served by small print.',
 'The second trap is disclosure that is accurate and useless. "Some elements of our service '
 'may involve automated processing" is true of nearly every company in the world and tells a '
 'reader nothing they can act on. A disclosure is useful to the extent that it lets '
 'somebody ask a better next question, and a sentence that applies to everybody permits no '
 'question at all.',
 'The most useful element Arclight found is the one that commits the company to answering. '
 'Saying that a client may ask which parts of their own work are produced which way, and '
 'will be told, converts a general statement into a specific obligation, and it does so in '
 'a way that forces the company to be able to answer. A great deal of the value of that '
 'sentence was consumed internally before any client used it.',
 'What the experience does not support is any expectation that customers will respond. Two '
 'of eleven mentioned it; one asked a question; nobody changed anything. Disclosure done '
 'properly is mostly invisible, like most of the work in the previous unit, and it should '
 'be justified on that basis rather than on a hope that clients will reward it.'],
dp1=('What customers do with disclosure',
     'Research into consumer and business disclosure consistently finds low rates of reading '
     'and lower rates of acting, with the main effects arising at the point of a specific '
     'question rather than from general statements.',
     'Source: general disclosure research, 2026. Patterns differ between consumer and business contexts.'),
e_a=[('What are the three disclosure questions?', 'what would they want to know, when, and must they ask'),
     ('Why is confusing protection with information easy?', 'because the same document usually produces both'),
     ('Why is "some elements may involve automated processing" useless?', 'it is true of nearly everybody and permits no further question'),
     ('What makes the third limb useful?', 'it converts a general statement into a specific obligation to answer'),
     ('What should disclosure be justified on?', 'its own merits, not on an expectation that clients will reward it')],
e_b=[('The present situation changes the structure of disclosure.', 'F'),
     ('A contract clause establishes that a customer knows.', 'F'),
     ('A disclosure that applies to everybody permits a good next question.', 'F'),
     ('Much of the value of the third limb was consumed internally.', 'T'),
     ('Most customers responded to the paragraph.', 'F'),
     ('Both protection and information are legitimate purposes.', 'T')],

w_model=(
 'Purpose: tell clients what they would want to know, in a form that lets them ask 1 '
 'follow-up question. Scope: all 11 client contracts and all new proposals; internal documents are '
 'excluded. Inputs: the service description and the process mapping dated 12 May. Criteria: '
 'state which categories of work involve automated assistance, name that a person releases '
 'every outbound item, and state that a client may ask which parts of their own work are '
 'affected and will be told within 2 working days; avoid any statement that would be true '
 'of every company. Done: 1 paragraph of no more than 60 words and 1 internal note showing '
 'how a client question would be answered. Fallback: if the internal note cannot be '
 'produced, the paragraph does not go out until it can.'),
w_fig=figs.spec_card('A DISCLOSURE THAT IS WORTH MAKING',
                     [('Specific', 'Names categories, not "some elements"'),
                      ('Actionable', 'Lets the reader ask a better next question'),
                      ('Committing', 'Says what you will tell them if they ask'),
                      ('Answerable', 'You can actually answer it before you publish'),
                      ('Placed', 'Where it will be read, not only where it is binding'),
                      ('Owned', 'A named person holds the conversation')]),
w_fig_cap='The fourth line is the test most disclosures fail, and the only one that costs anything.',
w_task='Write a disclosure paragraph for something your organisation does.',
w_steps=['Decide what a reasonable customer would want to know, and write it in one sentence.',
         'Remove anything that would be true of every organisation in your sector.',
         'Add a sentence committing you to answer a specific question if asked.',
         'Work out, before publishing, how you would answer it.',
         'Decide where it is placed, and who owns the conversation.'],
w_bank=['… work involves … ; every … is released by …',
        'Any client may ask … and will be told within …',
        'This statement avoids … , because …',
        'The named owner of this conversation is …',
        'Before publication, … must be able to …'],
w_check=['Would your paragraph be true of every competitor? If so, cut it.',
         'Does it commit you to answering something specific?',
         'Could you answer that question today?',
         'Is it placed where it will be read, as well as where it binds?'],

t_title='Disclosure: what you tell customers, and when',
t_fig=figs.split('ACCURATE AND USELESS',
                 'True of everybody',
                 ['Some elements may involve automated processing.',
                  'We use technology to improve efficiency.',
                  'Our processes are kept under review.',
                  'Quality is monitored throughout.'],
                 'True of you, specifically',
                 ['Extraction and first drafts are produced with assistance.',
                  'Every outbound item is released by a named person.',
                  'You may ask which parts of your work are affected.',
                  'We will tell you within two working days.']),
t_fig_cap='A sentence that fits every company tells a reader nothing about yours.',
t_body=[
 'Separate protection from information deliberately, because one document will not do both '
 'well. A contract clause is the right instrument for establishing that a customer was told; '
 'a conversation at the start of a relationship is the right instrument for their actually '
 'knowing. Doing both is not duplication, and treating the first as though it had achieved '
 'the second is the commonest failure in this area.',
 'Then test every sentence against your competitors. If it would be equally true printed on '
 'their letterhead, it conveys nothing about you and the reader cannot do anything with it. '
 'Specificity is what makes a disclosure useful, and specificity is what makes it '
 'uncomfortable to write, which is why most published statements on this subject are '
 'interchangeable.',
 'And include something that commits you to answering. A client may ask which parts of their '
 'own work are affected, and will be told within two working days, is a sentence with '
 'consequences: it means the company must be able to answer, and the work of becoming able '
 'to answer is where most of the value sits, long before any client uses the right.'],
t_say=[('Separate the purposes: ', 'The clause protects us; the conversation informs them.'),
       ('Test for specificity: ', 'Would this be true on a competitor’s letterhead?'),
       ('Commit to answering: ', 'You may ask which parts are affected, and we will tell you.')],
t_bound=('A disclosure tells a customer what you have decided to tell them, in the words you '
         'chose. It does not establish that they understood it, that they would have chosen '
         'differently had they understood it, or that the categories you named are the ones '
         'they would have cared about.'),
t_a=[('The clause protects us; the conversation ____________ them.', 'informs'),
     ('Would this be true on a ____________ letterhead?', "competitor’s"),
     ('You may ask which parts are ____________, and we will tell you.', 'affected'),
     ('One document will not do both ____________.', 'well'),
     ('Specificity is what makes it ____________ to write.', 'uncomfortable'),
     ('The work of becoming able to answer is where most of the ____________ sits.', 'value')],
t_b_rubric='Rewrite each disclosure so that it could not appear on a competitor’s letterhead.',
t_b=[('Some elements may involve automated processing.', 'extraction and first drafts are produced with automated assistance'),
     ('We use technology to improve efficiency.', 'routine document handling is automated; client correspondence is not'),
     ('Quality is monitored throughout.', 'every outbound item is released by a named person, who confirms four facts'),
     ('Processes are kept under review.', 'you may ask which parts of your work are affected and we will answer in two days')],

case=dict(
 title='Decision Clinic · Volunteer it, or answer on request?',
 brief=[
  'Arclight has won work from a client whose own customers are individuals rather than '
  'businesses, which is new. The client has not asked how the work is produced and the '
  'standard paragraph is in their contract.',
  'Fatima believes this client should be told specifically, in conversation, before the '
  'work starts, because their customers are individuals and the sensitivity is different.',
  'Kenji points out that volunteering it to one client and not to the other eleven creates '
  'a position that is hard to defend if anybody compares notes, and that the eleven have '
  'been treated the same way for a year.'],
 exhibit=figs.datatable('WHAT EACH CLIENT HAS BEEN TOLD',
                        ['Client type', 'Count', 'Contract clause', 'Conversation'],
                        [['business customers', '11', 'yes', '2, on request'],
                         ['individual customers', '1 (new)', 'yes', 'not yet'],
                         ['asked under limb 3', '1', 'yes', 'yes'],
                         ['volunteered unprompted', '0', '—', '—'],
                         ['total', '12', '12', '2']]),
 exhibit_cap='Nothing has ever been volunteered. Two conversations happened because clients asked.',
 exhibit_note='The new client’s own customers are individuals who did not choose Arclight '
              'and have no contract with it.',
 voices=[('Fatima Zahra', 'client manager',
          'Their customers are individuals who never chose us. That is a different situation '
          'from a business that signed a contract, and I think it changes what we owe.'),
         ('Kenji Watanabe', 'finance',
          'If we volunteer to one and not to eleven, the position is that we tell people when '
          'we think it matters, which is a judgement nobody outside the company can see us '
          'making.'),
         ('Marta Olsen', 'risk and liability',
          'Then volunteer it to all twelve. It is one conversation each, about ten minutes, '
          'and the inconsistency Kenji is describing is real and it is the thing that would '
          'actually embarrass us.')],
 steps=[('Find it', 'How many clients have had a conversation, and how many asked for it?'),
        ('Compare it', 'What is different about the new client’s situation?'),
        ('Infer it', 'Why does Kenji regard selective disclosure as the problem?'),
        ('Weigh it', 'Two hours of conversations against a position nobody can see you taking.'),
        ('Decide', 'Who is told, when, and by what method?')],
 analysis=[('Find it. How many conversations have happened, and why?', 'two, both because the client asked'),
           ('Compare it. What is different about the new client?', 'their customers are individuals who never chose Arclight'),
           ('Infer it. What is Kenji’s objection?', 'that telling some and not others is a hidden judgement about when it matters'),
           ('Weigh it. What does Marta’s proposal cost?', 'about ten minutes per client, roughly two hours in total'),
           ('Decide. What rule removes the hidden judgement?', 'volunteering to every client, at the same point in the relationship')],
 decision='Write the rule for when the conversation happens.',
 decision_steps=['Say who the conversation happens with, and at what point.',
                 'Say what it covers, in three or four items.',
                 'Say who owns it and what is recorded afterwards.',
                 'Say what happens with clients already onboarded.'],
 bank=['The conversation takes place with … at …',
       'It covers … , … and …', '… owns it and records …',
       'For existing clients, … by …', 'It is repeated when …'],
 outcome='All twelve had the conversation within six weeks, at about nine minutes each. One '
         'client asked for a note afterwards and shared it with their own customers, which '
         'nobody had anticipated and which Fatima regards as the best outcome available. Two '
         'said that they had assumed it and were glad to have it confirmed. The remaining '
         'nine said some version of thank you and moved on, which Kenji had predicted '
         'precisely and regards as the correct reason to have done it anyway.',
 outcome_q=[('What outcome had nobody anticipated?', 'a client sharing the note with their own customers'),
            ('Why does Kenji regard the muted response as the right reason to do it?', 'because disclosure is justified by what it is, not by how customers react')],
 tags=[]),

lab=dict(
 title='Brief Lab · Write what we tell clients',
 task=['This is the brief that began the three-week argument. It was written by Ines after '
       'a conference at which two other companies had been asked awkward questions and had '
       'answered badly.',
       'It asks for a statement, which is reasonable, and it does not say what the statement '
       'is for, which is the question that took three weeks.'],
 draft=['Draft something we can tell clients about how the work is produced.',
        'Keep it accurate but do not go into unnecessary detail.',
        'Make sure it protects us properly.',
        'Something similar to what others in the sector say would be fine.',
        'It should go somewhere clients will see it.',
        'Let me see a draft when you have one.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines that ask for protection and information at once, and name neither.',
 asked=['A specific statement, not a sector-standard one',
        'A commitment to answer a named question',
        'Protection and information separated'],
 back=['A paragraph true of every competitor',
       'No commitment of any kind',
       'A clause doing both jobs and neither'],
 gap='"Similar to what others say" guarantees a sentence that conveys nothing about Arclight, '
     '"unnecessary detail" is unbounded, and "protects us properly" and "tell clients" are '
     'two purposes treated as one.',
 back_cap='A paragraph that could have been printed on any competitor’s letterhead.',
 back_note='The first draft said that "some elements of the service may involve automated '
           'processing". It was accurate, it protected the company, and no client reading '
           'it would have learned anything.',
 diagnosis=[('[1] "something we can tell clients" — to inform, or to protect?', 'unscoped set'),
            ('[2] "unnecessary detail" — unnecessary for which purpose?', 'unstated exception'),
            ('[3] "protects us properly" — against what, exactly?', 'unscoped set'),
            ('[4] "similar to what others say" — and if that says nothing?', 'missing condition'),
            ('[5] "somewhere clients will see it" — and if they do not read it?', 'missing condition'),
            ('[6] "accurate but not detailed" — where the two conflict, which wins?', 'unstated exception')],
 rewrite='Rewrite the brief so that the two purposes are separated, and so that the statement '
         'must say something a competitor could not copy.',
 scaffold=['Why a clause and a conversation do different jobs',
           'Which documents and which clients the statement covers',
           'The service description and the process mapping, both dated',
           'What the statement must contain, and the test it must pass',
           'The paragraph, its length, and the internal note that must exist alongside it',
           'What happens if the question it commits to cannot yet be answered'],
 bank=['Produce … for … , and … for …',
       'Cover … contracts and … ; exclude …',
       'Work from … and the mapping dated …',
       'State … and … ; the statement must not be true of …',
       'Return … of no more than … words, and …',
       'If … cannot be answered, …'],
 check=['Does the brief separate the protective purpose from the informing one?',
        'Does it require a statement a competitor could not copy?',
        'Does it commit to answering something specific?',
        'Must the company be able to answer it before publication?'],
 model=['Tell clients what they would want to know, in a form that lets them ask 1 follow-up question',
        'All 11 client contracts and all new proposals; internal documents and supplier agreements are excluded',
        'The service description and the process mapping dated 12 May',
        'State which categories of work involve automated assistance, that a person releases every outbound item, and that a client may ask which parts of their own work are affected and will be told within 2 working days; no sentence may be one that would be equally true on a competitor’s letterhead',
        '1 paragraph of no more than 60 words, plus 1 internal note showing how a client question under the third limb would be answered, by 30 April',
        'If the internal note cannot be produced, the paragraph does not go out until it can'],
 cost='3 weeks of argument that would have taken 3 days had the two purposes been separated '
      'at the start, and a first draft that was accurate, protective and informed nobody.'),

rev_fig=figs.split('CONCESSION, FOUR WAYS',
                   'Takes a clause',
                   ['Although it is cheaper, we declined.',
                    'Although the rate fell, nobody noticed.',
                    'Ours costs more, whereas theirs is free.',
                    'He signed, whereas she refused.'],
                   'Takes a noun or -ing',
                   ['Despite being cheaper, it was declined.',
                    'Despite the fall, nobody noticed.',
                    'In spite of the delay, they were patient.',
                    'It is cheaper; however, we declined.']),
rev_fig_cap='Get the grammar after the connector right and half of business English improves.',
rev=dict(
 read=[('A contract clause establishes that a customer', ['knows', 'was told', 'agrees', 'has read it'], 1),
       ('"Despite" is followed by', ['a clause', 'a noun or -ing form', 'a comma only', 'the past tense'], 1),
       ('A useful disclosure', ['is true of everybody', 'lets the reader ask a better question', 'is short', 'is legal'], 1),
       ('In the Clinic, what was decided about the conversation?', ['only the new client', 'all twelve clients', 'nobody', 'on request only'], 1)],
 listen_text='Separate protection from information, because one document does not do both '
             'and treating the clause as though it had informed anybody is the commonest '
             'failure here. Then test every sentence against your competitors: if it would '
             'be equally true on their letterhead, it says nothing about you. And commit to '
             'answering something specific, because becoming able to answer is where most of '
             'the value is.',
 listen=[('Separate ____________ from information.', 'protection'),
         ('If it would be equally true on their ____________, it says nothing.', 'letterhead'),
         ('Commit to answering something ____________.', 'specific'),
         ('Becoming able to ____________ is where most of the value is.', 'answer')],
 speak=['Read out a disclosure from your own sector. Your partner says whether a competitor could print it.',
        'Rewrite it until they could not.'],
 write='Write a disclosure paragraph with one sentence committing you to answer a question.',
 vocab=[('A fact that would change somebody’s decision is a ____________.', 'material fact'),
        ('A statement that is true and leaves out what matters is a ____________.', 'half-truth'),
        ('An obligation to say something unasked is a ____________.', 'duty to disclose'),
        ('Acting before being prompted is ____________.', 'proactive'),
        ('Creating a false impression without lying is ____________.', 'misleading')],
 gram=[('____________ it is cheaper, we declined the offer.', 'Although'),
       ('____________ being cheaper, it was declined.', 'Despite'),
       ('It is cheaper; ____________, we declined.', 'however'),
       ('Ours costs more, ____________ theirs is free.', 'whereas'),
       ('____________ of the delay, the client was patient.', 'In spite')]),

found=['Find a disclosure in your sector and check whether a competitor could print it.',
       'Decide which of your written statements protect you and which inform anybody.',
       'Write one sentence committing your organisation to answer a specific question.',
       'Check whether you could answer it today.'],
end_line='A clause they have not read protects us and informs nobody, and those are different purposes.',
end_next='Next: What We Really Do',
)
