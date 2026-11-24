# -*- coding: utf-8 -*-
import figs

U = dict(
num=7, title='Claimed, Acknowledged, Conceded',
gram='stance reporting verbs: claim, acknowledge, concede, maintain',
ai='explaining a decision a system helped you make',
strap='CEFR C1 · Grammar: stance reporting verbs · AI: explaining a shared decision',
cando=['choose a reporting verb that conveys your stance accurately',
       'report what another party said without endorsing or dismissing it',
       'explain a decision in which a system’s analysis played a part',
       'state what weight you gave to an input you did not produce',
       'say honestly what you would have decided without it'],
hero=('WHY DID YOU DECIDE THAT?',
      ['Because the analysis said so is not an explanation.',
       'Nor is I decided it myself, if that is not what happened.'],
      [(800, 'purple', 'short'), (1500, 'orange', 'long'),
       (2180, 'teal', 'short'), (2840, 'blue', 'long')]),
hero_cap='An explanation must describe what actually produced the decision, including the parts you did not.',

warm=['When did you last take a decision with an analysis in front of you?',
      'How much weight did you give it, and would you say so in writing?',
      'What would you have decided without it?'],
read=[
 'The letter from Samuel Boateng’s advisers was two sentences long and entirely reasonable. '
 'Arclight had declined to renew his guaranteed error rate, offering instead the standard '
 'service at the same price, and the advisers asked on what basis that decision had been '
 'taken. Ines Carvalho had taken it herself, in about forty minutes, with a system’s analysis '
 'of his exception history open in front of her.',
 'Her first draft of the reply said that the decision reflected a review of the client’s '
 'exception history over twenty-four months. Marta Olsen’s objection was that this was true, '
 'incomplete, and written in a way that concealed the incompleteness: it did not say who '
 'produced the review, what it recommended, or what Ines had done with the recommendation.',
 'The second draft was accurate and Ines found it uncomfortable to sign. It stated that a '
 'system had analysed the exception history and had recommended declining; that she had read '
 'the analysis, agreed with it, and taken the decision; that she had not independently '
 'recomputed the figures; and that the two factors she considered most important were the '
 'concentration of exceptions in two particular fields and the client’s change of accounting '
 'software in March.',
 'What she could not write, and was asked twice, is what she would have decided without the '
 'analysis. She maintains that she would have reached the same conclusion; she concedes that '
 'she cannot demonstrate it; and she acknowledges that the analysis arrived before she had '
 'formed any view, which is the ordinary sequence and makes the question unanswerable in her '
 'own case.',
 'The advisers’ reply accepted the explanation without comment and asked one further '
 'question, which Marta describes as the better one: whether the same analysis had been run '
 'for clients whose renewals were not declined. It had not. It is run when a renewal is '
 'queried internally, which means the analysis itself is produced only for cases somebody '
 'already has a doubt about, and nobody had previously noticed what that does to its apparent '
 'accuracy.'],
c_a=[('What did Samuel’s advisers ask?', 'on what basis the decision not to renew the guarantee had been taken'),
     ('What was wrong with the first draft?', 'it was true but concealed who produced the review and what was done with it'),
     ('What did the second draft state?', 'that a system recommended declining, that Ines read and agreed with it, and the two factors she weighed'),
     ('What could Ines not write?', 'what she would have decided without the analysis'),
     ('What was the advisers’ better question?', 'whether the analysis was run for clients whose renewals were not declined')],
c_b=[('The advisers’ letter was long and hostile.', 'F'),
     ('Ines took the decision herself.', 'T'),
     ('She did not independently recompute the figures.', 'T'),
     ('She can demonstrate what she would have decided without the analysis.', 'F'),
     ('The analysis is run for every renewal.', 'F'),
     ('The advisers accepted the explanation.', 'T')],
c_c=[('Offering instead the standard service at the same ____________.', 'price'),
     ('Written in a way that concealed the ____________.', 'incompleteness'),
     ('She had not independently ____________ the figures.', 'recomputed'),
     ('The analysis arrived before she had formed any ____________.', 'view'),
     ('It is run when a renewal is ____________ internally.', 'queried'),
     ('What that does to its apparent ____________.', 'accuracy')],
c_d=[('The second draft was uncomfortable because it was ( long / accurate ).', ['long', 'accurate'], 1),
     ('Which two factors did Ines weigh most?', ['price and volume', 'exception concentration and a software change', 'size and age', 'tenure and revenue'], 1),
     ('The analysis arrived', ['after she formed a view', 'before she formed any view', 'a month later', 'from the client'], 1),
     ('The analysis is produced', ['for every renewal', 'only where somebody already has a doubt', 'annually', 'on request'], 1),
     ('What nobody had noticed is the effect on', ['cost', 'its apparent accuracy', 'speed', 'the client'], 1)],
c_e=('Which stance does the verb convey? Put each in the right column.',
     [('She maintains that she would have decided the same.', 'holds the position'),
      ('She concedes that she cannot demonstrate it.', 'gives ground'),
      ('She acknowledges that the analysis came first.', 'gives ground'),
      ('The advisers claim the basis was inadequate.', 'reported, not endorsed'),
      ('She contends that the two factors were decisive.', 'holds the position'),
      ('They assert that no analysis was disclosed.', 'reported, not endorsed')],
     ['holds the position', 'gives ground', 'reported, not endorsed']),

v_fig_title='EXPLAINING A DECISION',
v_fig=[('doc', 'a rationale'), ('scale', 'weight'), ('key', 'auditability'),
       ('bulb', 'an inference'), ('bank', 'stated basis'), ('chart', 'a contributing factor')],
v_fig_cap='Six words for the parts of an explanation somebody outside the firm can test.',
vocab=[
 ('an explanation', 'an account of why something happened, addressed to somebody'),
 ('a rationale', 'the reasoning offered in support of a decision'),
 ('a justification', 'the argument that a decision was the right one'),
 ('interpretability', 'the degree to which a process’s reasoning can be followed'),
 ('inscrutability', 'the quality of not permitting its reasoning to be seen'),
 ('a black box', 'a process whose inputs and outputs are visible and whose workings are not'),
 ('auditability', 'the ability to follow a result back to what produced it'),
 ('to substantiate', 'to supply the evidence that makes a claim stand up'),
 ('a contributing factor', 'something that formed part of the cause without determining it'),
 ('weight', 'the relative importance given to one factor among several'),
 ('salience', 'the quality of standing out and therefore being attended to'),
 ('to defer to', 'to accept another party’s view in place of forming your own'),
 ('reliance', 'the act of depending on something in reaching a conclusion'),
 ('a second opinion', 'an independent view sought to test the first'),
 ('an account', 'a narrative of what was done, offered to somebody entitled to it'),
 ('stated basis', 'the reasons given, on which a decision rests'),
 ('to impute', 'to attribute something to somebody, often without their stating it'),
 ('an inference', 'a conclusion drawn from evidence rather than observed directly'),
 ('a determinant', 'a factor that settles the outcome rather than merely influencing it'),
 ('a reasoned basis', 'grounds set out in a form another person can follow and test')],
v_a=[('A process whose workings are not visible is a ____________.', 'black box'),
     ('The ability to follow a result back to what produced it is ____________.', 'auditability'),
     ('Something that formed part of the cause without determining it is a ____________.', 'contributing factor'),
     ('A factor that settles the outcome is a ____________.', 'determinant'),
     ('To accept another party’s view in place of forming your own is to ____________ it.', 'defer to'),
     ('Grounds set out so another person can follow and test them are a ____________.', 'reasoned basis'),
     ('To attribute something to somebody without their stating it is to ____________ it.', 'impute'),
     ('The relative importance given to one factor among several is its ____________.', 'weight')],
v_b=[('A rationale is the reasoning offered', 'in support of a decision.'),
     ('Interpretability is the degree to which', 'a process’s reasoning can be followed.'),
     ('To substantiate is to supply the evidence', 'that makes a claim stand up.'),
     ('Salience is the quality of standing out', 'and therefore being attended to.'),
     ('An inference is a conclusion drawn from evidence', 'rather than observed directly.')],

g_title='Grammar: stance reporting verbs',
g_rule=['Claim and assert report a statement without endorsing it; allege adds doubt.',
        'Acknowledge and concede report a statement against the speaker’s own interest.',
        'Maintain and contend report a position held under challenge.',
        'Note, observe and accept report neutrally; the choice of verb is itself a claim.'],
g_fig=('LOOSE',
       ['She said that she would have decided the same.',
        'She said that she cannot demonstrate it.',
        'The advisers said the basis was inadequate.',
        'She said the analysis came first.'],
       'PRECISE',
       ['She maintains that she would have decided the same.',
        'She concedes that she cannot demonstrate it.',
        'The advisers contend that the basis was inadequate.',
        'She acknowledges that the analysis came first.'],
       'four uses of said, carrying no stance at all',
       'four verbs that place each statement precisely'),
g_fig_cap='Said is neutral and therefore useless where the stance is the information.',
g_a=[('She ____________ that she would have decided the same, under challenge. (maintain)', 'maintains'),
     ('She ____________ that she cannot demonstrate it. (concede)', 'concedes'),
     ('The advisers ____________ that the basis was inadequate. (contend)', 'contend'),
     ('She ____________ that the analysis arrived first. (acknowledge)', 'acknowledges'),
     ('Marta ____________ that the first draft was true. (accept)', 'accepts'),
     ('The letter ____________ no impropriety. (allege)', 'alleges'),
     ('He ____________ that the figures were recomputed. (deny)', 'denies'),
     ('The report ____________ that the analysis is run selectively. (note)', 'notes'),
     ('They ____________ that disclosure was required. (assert)', 'assert')],
g_b=[('The choice of reporting verb is itself a ( claim / courtesy ).', ['claim', 'courtesy'], 0),
     ('Which verb reports a statement against the speaker’s own interest?', ['maintain', 'concede', 'assert', 'contend'], 1),
     ('Which adds doubt to what is reported?', ['note', 'allege', 'acknowledge', 'accept'], 1),
     ('Which reports a position held under challenge?', ['observe', 'maintain', 'concede', 'accept'], 1),
     ('Said is useless where', ['the fact matters', 'the stance is the information', 'the speaker is known', 'the date is known'], 1),
     ('Which is neutral?', ['allege', 'note', 'concede', 'contend'], 1)],

d1=dict(title='True and incomplete',
        fig=(['It reflected a review of the history.', 'That is true.'],
             ['Then what is wrong with it?', 'It does not say who did the review.']),
        cap='Ines and Marta, over the first draft.',
        lines=[('Marta', 'Your draft says the decision reflected a review of the exception history '
                         'over twenty-four months. Every word of that is true.'),
               ('Ines', 'Then I do not see the problem.'),
               ('Marta', 'It does not say who produced the review, what it recommended, or what you '
                         'did with the recommendation. A reader takes reflected a review to mean that '
                         'you reviewed it.'),
               ('Ines', 'I did read it.'),
               ('Marta', 'You read an analysis that recommended declining, agreed with it, and '
                         'signed. That is a perfectly respectable way to take a decision and it is '
                         'not what the sentence describes.'),
               ('Ines', 'If I write the accurate version, the advisers will ask whether I would have '
                        'decided the same without it.'),
               ('Marta', 'They will, and you should decide now what you are going to say, because you '
                         'will say it badly if you compose it in a reply.'),
               ('Ines', 'I believe I would have reached the same conclusion. The concentration in two '
                        'fields and the software change in March are the two things that persuaded '
                        'me, and both would have been visible to me anyway.'),
               ('Marta', 'And can you demonstrate that?'),
               ('Ines', 'No. The analysis was in front of me before I had formed any view at all, '
                        'which is how it always is, and I cannot separate what I thought from what I '
                        'read.'),
               ('Marta', 'Then write exactly that. Maintain the first part, concede the second, and '
                         'acknowledge the third. Three verbs, and the reader will know precisely '
                         'where you stand on each.')],
        a=[('What is wrong with the first draft?', 'it omits who produced the review, what it recommended, and what Ines did with it'),
           ('How does a reader take "reflected a review"?', 'as meaning that Ines reviewed it herself'),
           ('What two factors persuaded Ines?', 'the concentration of exceptions in two fields and the March software change'),
           ('Why can she not demonstrate the counterfactual?', 'because the analysis arrived before she had formed any view'),
           ('What does Marta advise?', 'to maintain the first part, concede the second and acknowledge the third')],
        b=[('A reader takes reflected a review to mean that ____________ reviewed it.', 'you'),
           ('That is a perfectly ____________ way to take a decision.', 'respectable'),
           ('You will say it badly if you ____________ it in a reply.', 'compose'),
           ('I cannot separate what I ____________ from what I read.', 'thought')]),
d2=dict(title='Only where there is already a doubt',
        fig=(['Is it run for every renewal?', 'No. Only queried ones.'],
             ['Then what is its accuracy?', 'Nobody has asked that question.']),
        cap='Marta and Jonas, after the advisers’ second letter.',
        lines=[('Marta', 'Their second question is better than their first. Is the analysis run for '
                         'renewals that are not declined?'),
               ('Jonas', 'No. It runs when somebody queries a renewal internally.'),
               ('Marta', 'So every analysis we have ever produced is for a case somebody already had '
                         'a doubt about.'),
               ('Jonas', 'Yes. And I can see where you are going and you are right.'),
               ('Marta', 'Tell me, so that I know we mean the same thing.'),
               ('Jonas', 'The analysis agrees with the person’s doubt about four times in five, and '
                         'everybody treats that as the analysis being accurate. It is also exactly '
                         'what you would see if the analysis were worthless and the doubt were '
                         'usually right.'),
               ('Marta', 'Can you separate them?'),
               ('Jonas', 'Only by running it on renewals nobody has queried, which is about nine '
                         'hundred a year and costs almost nothing.'),
               ('Marta', 'Then why has nobody done it?'),
               ('Jonas', 'Because nobody formulated the question until a client’s adviser did. I have '
                         'read the specification I wrote and it says the analysis runs on query, and '
                         'I wrote that because that was when somebody wanted it.'),
               ('Marta', 'Run it on all nine hundred from next month, and report the disagreements '
                         'separately, because those are the only cases that will tell us anything.'),
               ('Jonas', 'I will. And I would like it recorded that the useful question in this '
                         'matter came from the other side.')],
        a=[('When is the analysis run?', 'when somebody queries a renewal internally'),
           ('Why is its apparent accuracy uninformative?', 'because agreeing with an existing doubt is what a worthless analysis would also do'),
           ('How could the two be separated?', 'by running it on the nine hundred unqueried renewals'),
           ('Why had nobody done it?', 'because nobody formulated the question until a client’s adviser did'),
           ('What does Jonas want recorded?', 'that the useful question came from the other side')],
        b=[('Every analysis is for a case somebody already had a ____________ about.', 'doubt'),
           ('Exactly what you would see if the analysis were ____________.', 'worthless'),
           ('Report the ____________ separately.', 'disagreements'),
           ('The useful question came from the other ____________.', 'side')]),

speak=[('Say it correctly',
        ['Student A: report six statements using maintain, concede, acknowledge and contend.',
         'Student B: say what stance each verb conveyed.',
         'Find the one where said would have lost the point entirely.']),
       ('Spoken specification: explain a shared decision',
        ['Choose a decision you took with an analysis in front of you.',
         'Brief aloud what the analysis said, what weight you gave it, and the two factors you weighed.',
         'Your partner asks what you would have decided without it.']),
       ('Where does the analysis run?',
        ['In pairs, take an analysis one of you uses at work.',
         'Establish whether it runs on all cases or only on queried ones.',
         'Find the case where its apparent accuracy cannot be interpreted.'])],

ext_title='An explanation must describe what produced the decision, including the part you did not produce',
ext_fig=figs.datatable('THREE VERSIONS OF ONE EXPLANATION',
                       ['Version', 'Accurate?', 'What a reader infers'],
                       [['"reflected a review of the history"', 'true', 'Ines reviewed it herself'],
                        ['"the analysis recommended declining"', 'true', 'Ines simply followed it'],
                        ['analysis recommended, I read, agreed, decided', 'complete', 'what happened'],
                        ['"I would have decided the same"', 'belief', 'not demonstrable'],
                        ['"I cannot demonstrate that"', 'true', 'conceded']]),
 ext_fig_cap='Only the third row describes the decision; the fourth and fifth belong with it.',
ext=[
 'When a decision is taken by a person with a system’s analysis in front of them, the '
 'explanation owed to an outside party is harder to write than either pure case, and the two '
 'easy formulations are both misleading. Saying the decision followed a review of the '
 'evidence is true and invites the reader to believe the decision-maker performed the review; '
 'saying the analysis recommended it invites the reader to believe nobody exercised judgement '
 'at all.',
 'An adequate explanation has four parts and each of them is uncomfortable in a different '
 'way. What the analysis said; that the decision-maker read it and whether they recomputed '
 'anything; which factors the decision-maker gave weight to, named specifically; and what '
 'they would have decided without it. The fourth part is usually unanswerable, and the honest '
 'treatment is to maintain the belief, concede that it cannot be demonstrated, and acknowledge '
 'why: the analysis arrived before any view had formed.',
 'The grammar for this is the set of stance reporting verbs, and the choice among them is '
 'itself part of the explanation. Maintain places a position as held under challenge; concede '
 'reports something against your own interest; acknowledge accepts a point without conceding '
 'the argument; claim and contend report what another party says without endorsing it. A '
 'document that uses said throughout has discarded exactly the information a reader is '
 'looking for.',
 'A separate and sharper problem arises from where the analysis is run. In many organisations '
 'an analysis of this kind is produced only when somebody has already queried a case, which '
 'means every analysis in existence concerns a case about which a person already had a doubt. '
 'Its apparent agreement rate with those doubts is then uninterpretable: a high rate is '
 'equally consistent with a good analysis and with a worthless analysis attached to usually '
 'correct doubts.',
 'The remedy is to run it on the cases nobody queried and to report the disagreements '
 'separately, since those are the only informative cases. This is usually cheap and almost '
 'never done, because the question is not formulated until somebody outside the organisation '
 'asks it, and the specification that limits the analysis to queried cases was written by '
 'somebody answering a request rather than designing a test.'],
dp1=('Explanation of assisted decisions',
     'Work on accountability for assisted decisions generally finds that explanations omit '
     'either the system’s contribution or the human’s, and that selective triggering of an '
     'analysis makes its observed agreement rate uninterpretable.',
     'Source: general literature on decision support, 2026.'),
e_a=[('Why are the two easy formulations misleading?', 'one implies the person reviewed it, the other that nobody exercised judgement'),
     ('What are the four parts of an adequate explanation?', 'what the analysis said, whether anything was recomputed, which factors were weighed, and the counterfactual'),
     ('How should the fourth part be handled?', 'maintain the belief, concede it cannot be demonstrated, acknowledge why'),
     ('Why is "said" inadequate?', 'because it discards the stance, which is the information the reader wants'),
     ('Why is a selective analysis’s agreement rate uninterpretable?', 'because it is equally consistent with a good analysis and with correct doubts')],
e_b=[('"The decision followed a review of the evidence" is false.', 'F'),
     ('The counterfactual part is usually answerable.', 'F'),
     ('The choice of reporting verb is part of the explanation.', 'T'),
     ('A high agreement rate proves the analysis is good.', 'F'),
     ('Running the analysis on unqueried cases is usually expensive.', 'F'),
     ('The limiting specification was written as a test design.', 'F')],

w_model=(
 'Purpose: state, for the 1 declined renewal of Samuel Boateng, how the decision was reached '
 'and what part the analysis played, so that the account can be sent to his advisers. Scope: '
 'the renewal decision only; the guarantee terms themselves are out of scope. Inputs: the '
 'analysis dated 14 February, Ines Carvalho’s note of the decision, and the 24 months of '
 'exception history. Criteria: state in 1 sentence what the analysis recommended; state '
 'whether any figure was independently recomputed and by whom; name the 2 factors given most '
 'weight; state the counterfactual position using 1 maintaining verb, 1 conceding verb and 1 '
 'acknowledging verb; state whether the analysis is run for renewals that are not queried. '
 'Done: 1 letter of no more than 1 page and 1 internal note recording the 2 factors. '
 'Fallback: where the weight given to a factor cannot be stated, record that it cannot be '
 'stated rather than assigning a figure after the event.'),
w_fig=figs.spec_card('THE EXPLANATION BRIEF',
                     [('Purpose', 'state how the renewal decision was reached and the analysis’s part'),
                      ('Scope', 'the renewal decision only; the guarantee terms excluded'),
                      ('Inputs', 'analysis of 14 February, decision note, 24 months of history'),
                      ('Criteria', 'recommendation, recomputation, 2 weighted factors, counterfactual'),
                      ('Done', '1-page letter and 1 internal note of the 2 factors'),
                      ('Fallback', 'weight not stateable: record that, do not assign a figure later')]),
w_fig_cap='The fallback row prevents an explanation becoming a reconstruction.',
w_task='Write an explanation specification for a decision you took with an analysis in front of you.',
w_steps=['State what the analysis recommended, in one sentence.',
         'Say whether anything was independently recomputed, and by whom.',
         'Name the factors you gave most weight to, specifically.',
         'State the counterfactual with a maintaining, a conceding and an acknowledging verb.',
         'Say what happens when the weight given to a factor cannot be stated.'],
w_bank=['State, for … , how the decision was reached and what part … played, so that …',
        'Cover … only; … is out of scope.',
        'Work from … dated … , … , and the … months of …',
        'State in 1 sentence what … recommended; state whether … ; name the … factors given most weight; state the counterfactual using …',
        'Where the weight given to a factor cannot be stated, … rather than assigning a figure after the event.'],
w_check=['Is the analysis’s recommendation stated separately from the decision?',
         'Is recomputation addressed explicitly?',
         'Are the weighted factors named rather than described?',
         'Is the counterfactual handled with three distinct stance verbs?'],

t_title='Explaining a decision a system helped you make',
t_fig=figs.split('TWO EASY ANSWERS, BOTH MISLEADING',
                 'Hides the system',
                 ['the decision reflected a review',
                  'we considered the history',
                  'on the basis of the evidence',
                  'following an assessment'],
                 'Hides the person',
                 ['the analysis recommended declining',
                  'the model indicated a decline',
                  'the system scored it below threshold',
                  'per the automated assessment']),
t_fig_cap='A complete explanation contains both columns and a sentence about weight.',
t_body=[
 'Write the explanation of a decision a system helped you make in four parts, and accept that '
 'each is uncomfortable. What the analysis '
 'recommended; whether you recomputed anything and the honest answer is usually no; which two '
 'or three factors you actually gave weight to, named so that the reader can test them; and '
 'what you would have decided without it. The fourth is the one that will be asked and the '
 'one you cannot answer, and a prepared answer is far better than one composed inside a '
 'reply.',
 'Use stance verbs to place each part exactly. I maintain that I would have reached the same '
 'conclusion; I concede that I cannot demonstrate it; I acknowledge that the analysis was in '
 'front of me before I had formed a view. Three verbs tell a reader precisely where you stand '
 'on three different claims, and a document that writes said three times has thrown away the '
 'only thing the reader is trying to establish.',
 'Then ask the question a good adviser will ask next, before they ask it: is this analysis '
 'run for the cases nobody queried? If it is produced only where somebody already has a '
 'doubt, its agreement rate with those doubts tells you nothing at all, because a worthless '
 'analysis attached to usually sound doubts produces the same number. Running it on the '
 'unqueried cases is normally cheap, and the disagreements are the only informative output.'],
t_say=[('Separate the parts: ', 'The analysis recommended it; I read it; I agreed; I decided.'),
       ('Place each claim: ', 'I maintain, I concede, I acknowledge.'),
       ('Test the trigger: ', 'Is it run where nobody has a doubt?')],
t_bound=('An explanation of this kind describes how a decision was reached. It cannot '
         'establish that the decision was right, it cannot recover what the decision-maker '
         'would have thought unaided, and a complete and honest account of a poor decision is '
         'still a poor decision.'),
t_a=[('The analysis recommended it; I read it; I agreed; I ____________.', 'decided'),
     ('I maintain, I concede, I ____________.', 'acknowledge'),
     ('Is it run where nobody has a ____________?', 'doubt'),
     ('A prepared answer is better than one composed inside a ____________.', 'reply'),
     ('Named so that the reader can ____________ them.', 'test'),
     ('The ____________ are the only informative output.', 'disagreements')],
t_b_rubric='Rewrite each sentence with a stance verb that places the claim.',
t_b=[('She said she would have decided the same.', 'she maintains that she would have decided the same'),
     ('She said she could not prove it.', 'she concedes that she cannot demonstrate it'),
     ('She said the analysis came first.', 'she acknowledges that the analysis arrived before she formed a view'),
     ('The advisers said the basis was inadequate.', 'the advisers contend that the basis was inadequate')],

case=dict(
 title='Decision Clinic · Nine hundred renewals nobody queried',
 brief=[
  'Arclight ran the renewal analysis on all nine hundred and six renewals, including those '
  'nobody had queried. On queried cases it had agreed with the internal doubt in 81 per cent '
  'of instances, which the firm had treated as evidence of accuracy.',
  'On the unqueried cases it recommended declining 34 renewals that had been granted without '
  'question. Of those 34, Victor’s manual review found 7 where the recommendation was clearly '
  'right, 19 where it was clearly wrong, and 8 he could not resolve.',
  'Ines proposes disclosing the 7 to the clients concerned and revisiting their terms. Fatima '
  'opposes this strongly. Marta says the finding that matters is not the 7 at all.'],
 exhibit=figs.datatable('NINE HUNDRED AND SIX RENEWALS',
                        ['', 'Count', 'Note'],
                        [['queried renewals', '62', '81% agreement'],
                         ['unqueried renewals', '844', '34 flagged'],
                         ['of the 34: clearly right', '7', 'Victor’s review'],
                         ['of the 34: clearly wrong', '19', '—'],
                         ['of the 34: unresolved', '8', '—'],
                         ['implied precision, unqueried', '~21%', '7 of 34']]),
 exhibit_cap='Eighty-one per cent on cases somebody doubted, and about twenty-one on cases nobody did.',
 exhibit_note='Victor’s classification is his own judgement on 34 cases and was not blind to '
              'the recommendation.',
 voices=[('Ines Carvalho', 'managing director',
          'Seven clients are on terms we would not have given them had anybody looked. I would '
          'rather tell them and revisit it than hold a list of seven I know about.'),
         ('Fatima Zahra', 'client manager',
          'Telling seven clients that an analysis we have just discovered is twenty-one per '
          'cent accurate says they should be on worse terms is not candour, it is handing them '
          'a reason to leave on the strength of a number we do not trust.'),
         ('Marta Olsen', 'risk and liability',
          'The seven are a side issue. The finding is that we spent two years quoting '
          'eighty-one per cent as the accuracy of this analysis, in board papers and in one '
          'letter to a client’s advisers, and that figure was never a measure of accuracy at '
          'all.')],
 steps=[('Find it', 'What did the full run show?'),
        ('Compare it', 'How do the two agreement figures differ in meaning?'),
        ('Infer it', 'Why does Marta say the seven are a side issue?'),
        ('Weigh it', 'Disclosure to seven clients against the standing of a figure already quoted.'),
        ('Decide', 'What is done about the seven, and about the figure?')],
 analysis=[('Find it. What did the analysis flag among unqueried renewals?', 'thirty-four, of which seven were clearly right'),
           ('Compare it. What does the eighty-one per cent measure?', 'agreement with doubts somebody already had, not accuracy'),
           ('Infer it. What is the larger finding?', 'that a figure quoted for two years, including to a client’s advisers, measured nothing'),
           ('Weigh it. What is Fatima’s objection?', 'that disclosure rests on a number the firm does not trust'),
           ('Decide. What would you do?', 'answers vary; correcting the record about the figure is required whatever happens to the seven')],
 decision='Write what Arclight does about the seven clients and the quoted figure.',
 decision_steps=['Say what is done about the seven, and when.',
                 'Say what is said to the advisers who were given the figure.',
                 'Say how the analysis is described in future.',
                 'Say what would have to be true before the figure is quoted again.'],
 bank=['The … clients are …',
       'The advisers who were given the figure are told …',
       'In future the analysis is described as …',
       'The figure is not quoted again until …',
       'This is reviewed after …'],
 outcome='Arclight wrote to Samuel Boateng’s advisers correcting the eighty-one per cent '
         'figure, and took no action on the seven clients beyond flagging them for the next '
         'ordinary renewal. The advisers replied that the correction was noted and asked '
         'nothing further. Ines, who had wanted to act on the seven, accepts that acting would '
         'have meant relying on a figure she had just told a client not to rely on, and says '
         'she had not seen the contradiction until Fatima put it in exactly those terms; she '
         'adds that she is still uneasy about holding a list of seven and doing nothing.',
 outcome_q=[('What contradiction had Ines not seen?', 'that acting on the seven would rely on the figure she was correcting'),
            ('What remains unresolved for her?', 'holding a list of seven clients and taking no action')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Draft the reply to the advisers',
 task=['This is the brief Ines gave her assistant on the morning the advisers’ letter arrived, '
       'intending to produce a reply by the end of the day.',
       'It produced the first draft, the one that was true, incomplete, and concealed its own '
       'incompleteness.'],
 draft=['Draft a reply explaining the basis for the renewal decision.',
        'Keep it brief and professional.',
        'Refer to the review of their exception history.',
        'Do not go into unnecessary detail about our internal processes.',
        'Mention the main factors.',
        'Get it out today if you can.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions, one of which forbids the only thing the letter had to say.',
 asked=['What the analysis recommended, separately stated',
        'The factors given weight, named',
        'The counterfactual, with its three stance verbs'],
 back=['"reflected a review of the history"',
       '"a number of factors were considered"',
       'No counterfactual, no analysis mentioned'],
 gap='"The basis for the decision" does not say whose basis, "unnecessary detail about our '
     'internal processes" rules out the system’s role, "the main factors" names no number and '
     'no requirement to be specific, and "today if you can" fixes a deadline shorter than the '
     'thinking.',
 back_cap='A short, professional letter that a reader would reasonably misunderstand.',
 back_note='The instruction not to go into internal process is why the analysis went '
           'unmentioned. It was written to be helpful.',
 diagnosis=[('[1] "the basis for the decision" — whose basis, and including what?', 'ambiguous referent'),
            ('[2] "brief and professional" — brief to what length?', 'unbounded quantity'),
            ('[3] "refer to the review" — refer, or state who produced it?', 'ambiguous referent'),
            ('[4] "unnecessary detail about internal processes" — unnecessary judged how?', 'unstated criterion'),
            ('[5] "mention the main factors" — how many, named or described?', 'unbounded quantity'),
            ('[6] "today if you can" — and if the counterfactual needs deciding first?', 'unstated criterion')],
 rewrite='Rewrite the brief so that the analysis’s role, the weighted factors and the '
         'counterfactual are all required.',
 scaffold=['What the letter must state and what it is for',
           'Which decision is covered and what is out of scope',
           'The analysis, notes and history it is built from',
           'What must be stated about the recommendation, the recomputation, the factors and the counterfactual',
           'What comes back, in what length, and by when',
           'What to do where the weight given to a factor cannot be stated'],
 bank=['State, for … , how the decision was reached and what part … played, so that …',
       'Cover … only; … is out of scope.',
       'Work from … dated … , … , and the … months of …',
       'State in 1 sentence what the analysis recommended; state whether any figure was … and by whom; name the … factors given most weight; state the counterfactual using 1 maintaining verb, 1 conceding verb and 1 acknowledging verb.',
       'Return 1 letter of no more than … and 1 internal note, by …',
       'Where the weight given to a factor cannot be stated, … rather than …'],
 check=['Is the analysis’s recommendation required to be stated?',
        'Must the weighted factors be named rather than described?',
        'Is the counterfactual required, with three distinct stance verbs?',
        'Is there a rule forbidding weights assigned after the event?'],
 model=['State, for the 1 declined renewal of Samuel Boateng, how the decision was reached and what part the analysis played, so that the account can be sent to his advisers',
        'The renewal decision only; the guarantee terms themselves are out of scope',
        'The analysis dated 14 February, Ines Carvalho’s note of the decision, and the 24 months of exception history',
        'State in 1 sentence what the analysis recommended; state whether any figure was independently recomputed and by whom; name the 2 factors given most weight; state the counterfactual position using 1 maintaining verb, 1 conceding verb and 1 acknowledging verb; state whether the analysis is run for renewals that are not queried',
        '1 letter of no more than 1 page and 1 internal note recording the 2 factors, by 3 March',
        'Where the weight given to a factor cannot be stated, record that it cannot be stated rather than assigning a figure after the event'],
 cost='1 letter withdrawn before sending, 2 days of redrafting, and a reply that would have '
      'left a client’s advisers with a reasonable and false impression.'),

rev_fig=figs.split('STANCE REPORTING VERBS',
                   'Said — no stance',
                   ['She said she would have decided the same.',
                    'She said she could not prove it.',
                    'She said the analysis came first.',
                    'They said the basis was inadequate.'],
                   'Placed precisely',
                   ['She maintains that she would have.',
                    'She concedes that she cannot.',
                    'She acknowledges that it came first.',
                    'They contend that it was inadequate.']),
rev_fig_cap='Four verbs, four different relations between a speaker and a claim.',
rev=dict(
 read=[('"The decision reflected a review" invites the reader to believe', ['nobody decided', 'the decision-maker performed the review', 'a system decided', 'nothing'], 1),
       ('The fourth part of an explanation is', ['the cost', 'the counterfactual', 'the date', 'the author'], 1),
       ('A selectively triggered analysis has an agreement rate that is', ['high and meaningful', 'uninterpretable', 'always low', 'irrelevant'], 1),
       ('In the Clinic, what did Marta call the real finding?', ['the seven clients', 'that the 81 per cent measured nothing', 'the cost', 'Victor’s review'], 1)],
 listen_text='Write the explanation in four parts: what the analysis recommended, whether you '
             'recomputed anything, which factors you gave weight to, and what you would have '
             'decided without it. Use stance verbs to place each part exactly. Then ask whether '
             'the analysis is run for the cases nobody queried, because if not, its agreement '
             'rate tells you nothing.',
 listen=[('Whether you ____________ anything.', 'recomputed'),
         ('Which factors you gave ____________ to.', 'weight'),
         ('Use stance verbs to ____________ each part exactly.', 'place'),
         ('Its agreement rate tells you ____________.', 'nothing')],
 speak=['Explain a decision you took with an analysis in front of you, in four parts.',
        'Say what you would have decided without it, and whether you can show it.'],
 write='Write three sentences about one decision using maintain, concede and acknowledge.',
 vocab=[('A process whose workings are not visible is a ____________.', 'black box'),
        ('The ability to follow a result back to what produced it is ____________.', 'auditability'),
        ('A factor that settles the outcome is a ____________.', 'determinant'),
        ('To accept another’s view instead of forming your own is to ____________ it.', 'defer to'),
        ('Grounds another person can follow and test are a ____________.', 'reasoned basis')],
 gram=[('She ____________ that she would have decided the same. (maintain)', 'maintains'),
       ('She ____________ that she cannot demonstrate it. (concede)', 'concedes'),
       ('The advisers ____________ that the basis was inadequate. (contend)', 'contend'),
       ('She ____________ that the analysis arrived first. (acknowledge)', 'acknowledges'),
       ('The report ____________ that the analysis is run selectively. (note)', 'notes')]),

found=['Take a decision you made with an analysis present and write it in four parts.',
       'Name the two factors you actually gave weight to.',
       'Write what you would have decided without it, and whether you can show it.',
       'Find out whether that analysis is run on cases nobody has queried.'],
end_line='The useful question in this matter came from the other side.',
end_next='Next: If It Had Been Otherwise',
)
