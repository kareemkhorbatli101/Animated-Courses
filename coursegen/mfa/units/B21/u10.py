# -*- coding: utf-8 -*-
import figs

U = dict(
num=10, title='Right, and Useless',
gram='separating fact, inference and opinion in one sentence',
ai='selection: the brief that is accurate and useless',
strap='CEFR B2 · Grammar: fact, inference and opinion · AI: right, and useless',
cando=['separate fact, inference and opinion inside a single sentence',
       'mark which part of a sentence the Ministry can be held to',
       'say why completeness and usefulness pull against each other',
       'identify the decision a brief is meant to serve',
       'write a tasking that names the decision and the reader'],
hero=('EVERY SENTENCE TRUE',
      ['Six pages, forty-one sourced assertions, no error of any kind.',
       'The Director asked what she was supposed to do on Thursday.'],
      [(730, 'orange', 'long'), (1390, 'teal', 'short'),
       (2050, 'blue', 'long'), (2690, 'purple', 'short')]),
hero_cap='The last brief of the year, and the one the section argued about longest.',

warm=['What is the most accurate useless document you have read?',
      'What question should a brief answer that a report need not?',
      'How do you show a reader which part of a sentence is your opinion?'],
read=[
 'The December brief on the transit question was the best-made document Policy Planning '
 'produced that year. Six pages, forty-one assertions, every one sourced to a file number and '
 'a paragraph, every figure carrying its comparator and basis, every inference marked, two '
 'paragraphs saying what was not known.',
 'The Director read it twice and asked what she was supposed to do on Thursday. Nothing in '
 'the six pages answered that, because nothing in it had been asked to.',
 'Dr Hana Mourad had resisted putting recommendations in briefs for most of the year, on the '
 'ground that Policy Planning’s business is to establish what is true and that the choice '
 'belongs to the Minister. The position is defensible and it is widely held. It also produced '
 'a document that left the whole of the difficulty exactly where it had been.',
 'What the Director wanted was not a recommendation. She wanted the brief to say which of the '
 'forty-one facts bore on Thursday’s decision, which were background, and what followed if '
 'she said nothing. Those are statements about relevance, and relevance is a judgement about a '
 'decision, which means somebody who knows the decision has to make it.',
 'Hana rewrote the brief in ninety minutes without adding a single new fact. One page: the '
 'decision as she understood it, the four facts that bore on it, what followed from each, what '
 'was not known, and five pages of the original as an annex. She says she had spent a year '
 'defending the distinction between establishing and advising, and that the distinction is '
 'real and was not the one in question. Selecting is not advising.'],
c_a=[('What was in the December brief?', 'six pages, forty-one sourced assertions, marked inferences and two paragraphs on what was not known'),
     ('What did the Director ask?', 'what she was supposed to do on Thursday'),
     ('Why did the brief not answer?', 'because nothing in it had been asked to'),
     ('What had Hana resisted all year?', 'putting recommendations in briefs'),
     ('What did the Director actually want?', 'to know which facts bore on the decision, which were background, and what followed from silence'),
     ('What did the rewrite add?', 'no new facts: one page of selection, with the rest as an annex')],
c_b=[('The brief contained errors.', 'F'),
     ('Every figure carried its comparator.', 'T'),
     ('The Director wanted a recommendation.', 'F'),
     ('Relevance is a judgement about a decision.', 'T'),
     ('The rewrite added new facts.', 'F'),
     ('Hana concluded that selecting is advising.', 'F')],
c_c=[('Every one sourced to a file number and a ____________.', 'paragraph'),
     ('Nothing in it had been asked ____________.', 'to'),
     ('The choice belongs to the ____________.', 'Minister'),
     ('Left the whole of the difficulty exactly where it had ____________.', 'been'),
     ('Somebody who knows the ____________ has to make it.', 'decision'),
     ('Selecting is not ____________.', 'advising')],
c_d=[('The brief was ( right and useless / wrong ).', ['right and useless', 'wrong'], 0),
     ('How many of the forty-one facts bore on the decision?', ['all', 'four', 'none', 'twenty'], 1),
     ('How long did the rewrite take?', ['a day', 'ninety minutes', 'a week', 'six pages'], 1),
     ('What happened to the original six pages?', ['they were destroyed', 'five became an annex', 'they were published', 'they were shortened'], 1),
     ('What distinction does Hana say was not in question?', ['fact and opinion', 'establishing and advising', 'relevance and length', 'source and figure'], 1)],
c_e=('Fact, inference or opinion? Put each in the right column.',
     [('The basin was dredged to 14 metres.', 'fact'),
      ('14 metres exceeds commercial requirement.', 'fact'),
      ('This suggests a military purpose.', 'inference'),
      ('The Ministry should say nothing.', 'opinion'),
      ('No document states a purpose.', 'fact'),
      ('Silence is the safer course here.', 'opinion')],
     ['fact', 'inference', 'opinion']),

v_fig_title='WHAT A BRIEF DOES WITH FACTS',
v_fig=[('key', 'selection'), ('bulb', 'relevance'), ('pin', 'a decisive fact'),
       ('doc', 'a background fact'), ('chart', 'a trade-off'), ('shield', 'a decision point')],
v_fig_cap='Six words for the work that happens after the facts are established.',
vocab=[
 ('selection', 'the choosing of what goes in and what is left out'),
 ('relevance', 'the bearing a fact has on the decision in hand'),
 ('salience', 'the quality of standing out as mattering'),
 ('a decision point', 'the moment at which a choice must actually be made'),
 ('a recommendation', 'a stated course proposed to the person deciding'),
 ('an option', 'one of the courses available'),
 ('a trade-off', 'what must be given up to obtain something else'),
 ('a consequence', 'what follows in fact from a course taken'),
 ('an implication', 'what a fact means for a decision, if it is read out'),
 ('a judgement call', 'a choice the evidence does not settle'),
 ('a standing concern', 'a matter the Ministry weighs in every such decision'),
 ('a material fact', 'a fact that could change the decision'),
 ('an immaterial fact', 'a fact that could not change the decision'),
 ('completeness', 'the property of leaving nothing relevant out'),
 ('a reader’s question', 'the question the reader actually needs answered'),
 ('an actionable finding', 'a finding on which somebody can do something'),
 ('a dead end', 'a line of enquiry that leads nowhere'),
 ('a background fact', 'a fact needed for understanding and not for deciding'),
 ('a decisive fact', 'a fact that settles or nearly settles a question'),
 ('a so-what sentence', 'the sentence saying what a fact means for the reader')],
v_a=[('A fact that could change the decision is a ____________.', 'material fact'),
     ('The sentence saying what a fact means for the reader is a ____________.', 'so-what sentence'),
     ('A choice the evidence does not settle is a ____________.', 'judgement call'),
     ('What must be given up to obtain something else is a ____________.', 'trade-off'),
     ('A fact needed for understanding and not for deciding is a ____________.', 'background fact'),
     ('The moment at which a choice must actually be made is a ____________.', 'decision point'),
     ('A matter the Ministry weighs in every such decision is a ____________.', 'standing concern'),
     ('A finding on which somebody can do something is an ____________.', 'actionable finding')],
v_b=[('Selection is the choosing of what goes in', 'and what is left out.'),
     ('Relevance is the bearing a fact has', 'on the decision in hand.'),
     ('An implication is what a fact means for a decision,', 'if it is read out.'),
     ('Completeness is the property of leaving', 'nothing relevant out.'),
     ('A dead end is a line of enquiry', 'that leads nowhere.')],

g_title='Grammar: separating fact, inference and opinion in one sentence',
g_rule=['Put the fact in the main clause and the inference in a marked clause.',
        'Mark an inference with on which the section assesses, or which suggests.',
        'Mark an opinion with in the section’s view, or the section recommends.',
        'A sentence may carry all three if each is marked; it must not blur them.'],
g_fig=('LOOSE',
       ['The dangerous depth shows Kavara is arming.',
        'Clearly the Ministry should wait.',
        'The worrying trade figures mean we must respond.',
        'Obviously no document exists.'],
       'PRECISE',
       ['The basin is 14 metres (file 2019/114, para 11), which the section assesses to '
        'exceed commercial need.',
        'In the section’s view the Ministry should wait until the review is agreed.',
        'Trade fell 11 per cent over 2 years (official series, final); the section does not '
        'assess a cause.',
        'No document in the collection states a purpose; this is established.'],
       'three facts fused to opinions and one adverb doing the work of evidence',
       'four sentences in which each element is marked separately'),
g_fig_cap='Clearly and obviously are not markers of evidence; they are markers of its absence.',
g_a=[('The basin is 14 metres, ____________ the section assesses to exceed commercial need.', 'which'),
     ('In the section’s ____________ the Ministry should wait.', 'view'),
     ('Trade fell 11 per cent; the section does not ____________ a cause.', 'assess'),
     ('No document in the collection states a purpose; this is ____________.', 'established'),
     ('The works began in March, ____________ suggests a decision in February.', 'which'),
     ('The section ____________ that the Ministry say nothing before Thursday.', 'recommends'),
     ('Prices rose a fifth, ____________ the nominal figure overstates the rise.', 'so'),
     ('Whether a decision was taken is not ____________.', 'known'),
     ('On the depth ____________, a military purpose is possible.', 'alone')],
g_b=[('A fact belongs in the ( marked / main ) clause.', ['marked', 'main'], 1),
     ('An inference is marked with', ['clearly', 'which the section assesses', 'obviously', 'of course'], 1),
     ('An opinion is marked with', ['evidently', 'in the section’s view', 'plainly', 'as everyone knows'], 1),
     ('Clearly and obviously mark', ['strong evidence', 'the absence of evidence', 'a fact', 'a source'], 1),
     ('May one sentence carry all three?', ['no', 'yes, if each is marked', 'only in an annex', 'only in a footnote'], 1),
     ('Which is correctly separated?', ['The dangerous depth shows arming.', 'The basin is 14 metres, which the section assesses to exceed need.', 'Clearly we should wait.', 'The worrying figures mean we must act.'], 1)],

d1=dict(title='What do I do on Thursday?',
        fig=(['Forty-one sourced assertions.', 'And what do I do on Thursday?'],
             ['That is the Minister’s choice.', 'I am not asking you to choose.']),
        cap='The Director and Dr Hana Mourad.',
        lines=[('Director', 'This is the best-made brief I have had from your section. What am I '
                            'supposed to do on Thursday?'),
               ('Hana', 'That is a decision for the Minister. Our business is what is true.'),
               ('Director', 'I am not asking you to take the decision. I am asking which of '
                            'these forty-one facts bears on it.'),
               ('Hana', 'All of them bear on the question.'),
               ('Director', 'All of them bear on the subject. Four of them bear on Thursday, and '
                            'you know which four, and I have to find them by reading six pages '
                            'twice.'),
               ('Hana', 'If I choose four, I have shaped the decision.'),
               ('Director', 'You have shaped it already by choosing which forty-one facts to '
                            'establish out of everything that could have been established. The '
                            'choice happened in November and nobody recorded it.'),
               ('Hana', 'That is an argument I have not heard and cannot answer.'),
               ('Director', 'Then answer the practical half. Put the decision at the top as you '
                            'understand it, the facts that bear on it, what follows from each, '
                            'and what you do not know. Annex the rest.'),
               ('Hana', 'And if I have misunderstood the decision?'),
               ('Director', 'Then I will correct it in one line and the misunderstanding will '
                            'have been visible, which it is not now.'),
               ('Hana', 'Ninety minutes. And no new facts, because I do not think any are '
                        'missing.')],
        a=[('What does the Director ask for?', 'which of the forty-one facts bears on Thursday’s decision'),
           ('What is Hana’s objection?', 'that choosing four shapes the decision'),
           ('What is the Director’s answer?', 'that the choice was already made in November and not recorded'),
           ('What structure does the Director propose?', 'the decision, the facts bearing on it, what follows, what is unknown, and an annex'),
           ('What is the benefit of stating the decision wrongly?', 'it can be corrected in one line and the misunderstanding becomes visible')],
        b=[('All of them bear on the ____________.', 'subject'),
           ('The choice happened in ____________ and nobody recorded it.', 'November'),
           ('Then I will correct it in one ____________.', 'line'),
           ('No new ____________, because none are missing.', 'facts')]),
d2=dict(title='Selecting is not advising',
        fig=(['If I select, I advise.', 'If you do not, somebody else selects.'],
             ['Who?', 'Whoever reads it last.']),
        cap='Hana and Samir Haddad, after the rewrite.',
        lines=[('Samir', 'You spent the year arguing that selection is advising. What changed?'),
               ('Hana', 'The Director pointed out that I had already selected, in November, when '
                        'I decided which forty-one things to establish.'),
               ('Samir', 'That is true of any brief ever written.'),
               ('Hana', 'It is, and I had been treating the invisible selection as neutral and '
                        'the visible one as interference. They are the same act and only one of '
                        'them can be argued with.'),
               ('Samir', 'There is still a line. Which facts bear on a decision is one thing; '
                         'what the Minister should do is another.'),
               ('Hana', 'That line I will defend. In the section’s view the Ministry should '
                        'wait is a sentence I will write when asked and mark as opinion. These '
                        'four facts bear on the decision is a sentence I will write always, '
                        'because if I do not, the four will be chosen by whoever reads the '
                        'document last and under more pressure than me.'),
               ('Samir', 'Which is usually somebody in a car on the way to a meeting.'),
               ('Hana', 'And that is the worst place in the Ministry to perform an act of '
                        'judgement, and it is where we have been putting it for twenty years '
                        'while calling it impartiality.'),
               ('Samir', 'I would add one thing to the new form. Say what follows if nothing is '
                         'done, because the option of saying nothing is the one most often '
                         'taken and least often analysed.'),
               ('Hana', 'That goes in as a standing line. What follows if the Ministry says '
                        'nothing.')],
        a=[('What had Hana been arguing all year?', 'that selection is advising'),
           ('What changed her mind?', 'that she had already selected in November, invisibly'),
           ('What line does she still defend?', 'between which facts bear on a decision and what the Minister should do'),
           ('Who selects if the brief does not?', 'whoever reads the document last, under more pressure'),
           ('What does Samir add to the form?', 'what follows if nothing is done')],
        b=[('I had been treating the invisible selection as ____________.', 'neutral'),
           ('They are the same act and only one can be ____________ with.', 'argued'),
           ('Somebody in a ____________ on the way to a meeting.', 'car'),
           ('What follows if the Ministry says ____________.', 'nothing')]),

speak=[('Three in one sentence',
        ['Student A: state a fact from your work.',
         'Student B: add an inference, marked, and an opinion, marked, in the same sentence.',
         'Check that a reader could tell the three apart.']),
       ('Which four',
        ['Describe a decision your office faces.',
         'List eight facts about it, then name the four that bear on the decision.',
         'Say what follows from each of the four.']),
       ('If nothing is done',
        ['Take a question in front of you now.',
         'Say what follows if nobody does anything.',
         'Your partner says whether that was obvious before you said it.'])],

ext_title='A brief that establishes everything and selects nothing moves the judgement to the worst possible place',
ext_fig=figs.datatable('THE SAME MATERIAL, TWO DOCUMENTS',
                       ['', 'The six-page brief', 'The one-page brief'],
                       [['assertions', '41, all sourced', '41, all sourced, 5 pages annexed'],
                        ['new facts', '—', '0'],
                        ['the decision stated', 'no', 'yes, at the top'],
                        ['facts bearing on it named', 'no', '4'],
                        ['what follows from each', 'no', 'yes'],
                        ['what follows from silence', 'no', 'yes']]),
ext_fig_cap='The same forty-one facts. One document is complete and the other is usable.',
ext=[
 'Once an analytical unit has sourcing, verification, base rates and graded confidence, it '
 'becomes capable of producing documents in which every sentence is defensible. This is a real '
 'achievement and it introduces the last failure in the sequence, which is the hardest to see '
 'because nothing in the document is wrong.',
 'A brief exists to serve a decision. A six-page document containing forty-one sourced '
 'assertions about a subject serves the subject, which is a different thing. The reader who '
 'has a meeting on Thursday must work out which assertions bear on Thursday, and that work is '
 'a judgement requiring knowledge of the decision, performed in whatever time is left, usually '
 'by somebody more senior and more rushed than the drafter.',
 'The usual defence of the complete brief is a principled one and it is worth taking '
 'seriously: an analytical section establishes what is true and the choice belongs to the '
 'person who must answer for it. The reply is that the section has already chosen. Deciding '
 'which forty-one facts to establish out of the thousands that could have been established is '
 'an act of selection, performed earlier, by the same people, and recorded nowhere. Treating '
 'the invisible selection as neutral and the visible one as interference is not impartiality; '
 'it is the same act, done where nobody can argue with it.',
 'What the practice requires is therefore narrower than a recommendation and goes further than '
 'a list. State the decision as the section understands it, which allows a reader to correct a '
 'misunderstanding in one line. Name the facts that bear on it, and what follows from each. '
 'State what is not known. Say what follows if nothing is done, because silence is the '
 'commonest course and the least analysed. And annex the rest, so nothing established is lost.',
 'The grammar matters at this point more than anywhere else in a brief, because the one-page '
 'form puts facts, inferences and opinions next to each other. Each has to be marked inside '
 'its own sentence: the fact with its reference, the inference with the section’s assessment '
 'named as such, the opinion with in the section’s view. A reader must be able to tell, in '
 'every sentence, what the Ministry can be held to and what is the section’s reading of it, '
 'and clearly and obviously will not do that work. They are the words a drafter reaches for '
 'when the marking is missing.'],
dp1=('Briefing for decisions',
     'Analytical units in several foreign services adopted decision-led brief formats in 2025, '
     'requiring the decision, the material facts and the consequence of inaction on the first '
     'page, with supporting material annexed.',
     'Source: reported practice in diplomatic briefing standards, 2025–2026.'),
e_a=[('What becomes possible once the disciplines are in place?', 'documents in which every sentence is defensible'),
     ('Why is the complete brief a failure?', 'because it serves the subject rather than the decision'),
     ('Where does the judgement get performed instead?', 'by somebody more senior and more rushed, in whatever time is left'),
     ('What is the reply to the principled defence?', 'that the section already selected, invisibly, when it chose what to establish'),
     ('What five things does the one-page form carry?', 'the decision, the material facts, what follows from each, what is unknown, and what follows from silence')],
e_b=[('The complete brief contains errors.', 'F'),
     ('Choosing what to establish is an act of selection.', 'T'),
     ('Silence is the least analysed course.', 'T'),
     ('The annex is discarded.', 'F'),
     ('Clearly and obviously mark evidence.', 'F'),
     ('Stating the decision lets a reader correct it in one line.', 'T')],

w_model=(
 'Purpose: brief the Director for Thursday’s meeting so that she knows which facts bear on the '
 'decision, what follows from each, and what follows if the Ministry says nothing. Scope: the '
 'transit question as it stands for Thursday; the 2 related questions on fees and visas are '
 'out of scope. Inputs: the 41 established assertions in the December brief and nothing new. '
 'Criteria: state the decision as the section understands it in 1 sentence; name no more than '
 '5 facts that bear on it, each with its reference; give the consequence of each; mark every '
 'inference as the section’s assessment and every opinion as the section’s view; state what '
 'is not known; state what follows if nothing is done. Done: 1 page, with the remaining '
 'material annexed and nothing deleted, by 09:00 Thursday. Fallback: where the section cannot '
 'establish what follows from a fact, say that the consequence is not established rather than '
 'omitting the fact.'),
w_fig=figs.spec_card('THE TASKING FOR A DECISION BRIEF',
                     [('Purpose', 'what bears on the decision, and what follows from silence'),
                      ('Scope', 'the transit question for Thursday; 2 related questions excluded'),
                      ('Inputs', 'the 41 established assertions, and nothing new'),
                      ('Criteria', 'the decision in 1 sentence; max 5 facts; inferences and opinions marked'),
                      ('Done', '1 page with the rest annexed, by 09:00 Thursday'),
                      ('Fallback', 'consequence not established: say so, keep the fact')]),
w_fig_cap='Nothing new is the clause that makes this a selection task rather than more research.',
w_task='Write a decision-brief tasking for something in front of your office now.',
w_steps=['Name the decision and the reader.',
         'Bound the question and exclude the neighbouring ones.',
         'Limit the inputs to what is already established.',
         'Cap the number of material facts.',
         'Require the consequence of doing nothing.'],
w_bank=['Brief … so that … knows which facts … and what follows if …',
        'Cover … ; … are out of scope.',
        'Work from … and nothing new.',
        'State the decision in … ; name no more than … , each with … ; give … ; mark … ; state … ; state …',
        'Where the section cannot establish … , say … rather than …'],
w_check=['Is the decision named, not just the subject?',
         'Is the number of material facts capped?',
         'Are inferences and opinions separately marked?',
         'Is the consequence of inaction required?'],

t_title='Selection, and the brief that is accurate and useless',
t_fig=figs.split('TWO KINDS OF BRIEF',
                 'Serves the subject',
                 ['everything established',
                  'all of it sourced',
                  'no order of importance',
                  'the reader selects, in a car'],
                 'Serves the decision',
                 ['the decision stated at the top',
                  'the facts that bear on it',
                  'what follows from each, and from silence',
                  'the rest annexed, nothing lost']),
t_fig_cap='The same facts in both columns. Only the right-hand one has been thought about.',
t_body=[
 'With sourcing, verification and graded confidence in place, a section can produce a document '
 'in which every sentence is defensible, and will then produce the last failure in the series: '
 'a brief that is entirely accurate and does not help. Nothing in it is wrong, which is why it '
 'survives review.',
 'The cause is that a brief serves a decision while a complete document serves a subject. '
 'Forty-one sourced assertions about transit do not tell a Director which four bear on '
 'Thursday, so she performs that selection herself, late, under pressure, having read six '
 'pages twice. The principled defence, that the section establishes and the Minister chooses, '
 'does not survive one question: who chose which forty-one facts to establish? The selection '
 'happened earlier, invisibly, and calling that impartiality mistakes where the judgement is '
 'for whether it occurred.',
 'So select visibly and keep the line that matters. State the decision as you understand it, '
 'which lets a reader correct you in one line. Name the facts that bear on it, with what '
 'follows from each. Say what is not known, and say what follows if nothing is done, since '
 'silence is the course most often taken and least often examined. Annex everything else. And '
 'mark each element inside its sentence, the fact with its reference, the inference as the '
 'section’s assessment, the opinion as the section’s view, because a one-page brief puts all '
 'three within a line of each other and clearly will not tell them apart.'],
t_say=[('State the decision: ', 'The decision for Thursday, as the section understands it, is …'),
       ('Mark the three: ', 'The basin is 14 metres (file 2019/114, para 11), which the section assesses to exceed commercial need; in the section’s view the Ministry should not raise it.'),
       ('Analyse silence: ', 'If the Ministry says nothing, Astrene moves within 6 weeks.')],
t_bound=('A brief cannot be both complete and selective, and completeness is the easier of the '
         'two to defend in review. Selection requires knowing the decision, which means a '
         'section that declines to select has not avoided the judgement; it has moved it to '
         'the reader with the least time. No method supplies the decision, and a brief written '
         'without one serves whatever question the reader brings.'),
t_a=[('The decision for Thursday, as the section ____________ it, is …', 'understands'),
     ('Which the section ____________ to exceed commercial need.', 'assesses'),
     ('If the Ministry says nothing, Astrene moves within 6 ____________.', 'weeks'),
     ('A brief serves a decision while a complete document serves a ____________.', 'subject'),
     ('Who chose which forty-one facts to ____________?', 'establish'),
     ('Moved it to the reader with the least ____________.', 'time')],
t_b_rubric='Rewrite each sentence so that fact, inference and opinion are separately marked.',
t_b=[('The dangerous depth shows Kavara is arming.', 'the basin is 14 metres (file 2019/114, para 11), which the section assesses to exceed commercial need'),
     ('Clearly the Ministry should wait.', 'in the section’s view the Ministry should wait until the review is agreed'),
     ('The worrying trade figures mean we must respond.', 'trade fell 11 per cent over two years (official series, final); the section does not assess a cause'),
     ('Obviously no document exists.', 'no document in the collection states a purpose; this is established')],

case=dict(
 title='The Decision Room · Five facts or forty-one',
 brief=[
  'The one-page form has been used for a quarter. Directors prefer it, and two of the three '
  'Deputy Ministers have asked for it by name.',
  'In February a one-page brief named four material facts. A fifth fact, annexed, turned out to '
  'be the one that mattered: a published Kavaran regulation that made the Ministry’s proposed '
  'wording unlawful in Kavara.',
  'Hana, who argued for the one-page form after a year of resisting it, must decide whether the '
  'form caused the failure. Samir says the fact was in the annex and the annex was not read. '
  'Maya Sarkis asks who is trained to choose the five.'],
 exhibit=figs.datatable('THE FEBRUARY BRIEF',
                        ['', 'Figure', 'Note'],
                        [['assertions established', '38', 'all sourced'],
                         ['named on the front page', '4', 'as material'],
                         ['annexed', '34', 'including the regulation'],
                         ['the regulation’s position in the annex', 'item 29 of 34', '—'],
                         ['readers who opened the annex', '1 of 6', 'the drafter'],
                         ['briefs in the quarter', '31', '1 failure of selection']]),
 exhibit_cap='Thirty-one briefs, one failure, and the failed fact was item twenty-nine of '
             'thirty-four.',
 exhibit_note='Under the old six-page form the regulation would have appeared as assertion 29 '
              'of 38 on page 5.',
 voices=[('Samir Haddad', 'Legal and Treaties',
          'The form did not cause this. Under the old form the same fact was on page five of '
          'six and would have been read by the same one person. The failure is that nobody '
          'asked a lawyer whether the wording was lawful where it had to operate.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'I chose four facts and the fifth was decisive. Whatever else is true, that was my '
          'judgement and it was wrong, and I am not going to describe it as a process failure.'),
         ('Maya Sarkis', 'the Diplomatic Institute',
          'Then teach the judgement. The question that would have caught it is: is the course '
          'we propose lawful and possible where it has to happen? That is a checklist line, '
          'not a talent.')],
 steps=[('Find it', 'Where in the brief was the decisive fact?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Samir say the form is not to blame?'),
        ('Weigh it', 'A drafter’s judgement against a standing question.'),
        ('Decide', 'What changes, and what does not?')],
 analysis=[('Find it. How many of the thirty-eight were named as material?', 'four'),
           ('Compare it. What does Samir say the real failure was?', 'that nobody asked whether the wording was lawful where it had to operate'),
           ('Infer it. What would the old form have done differently?', 'nothing: the fact would have been assertion 29 of 38 on page five'),
           ('Weigh it. What does Maya propose?', 'a standing checklist question about lawfulness and practicability'),
           ('Decide. What would you do?', 'answers vary; the standing question costs nothing and would have caught it under either form')],
 decision='Write what changes in the one-page form.',
 decision_steps=['Say whether the form is kept.',
                 'Say what standing questions a drafter must answer before selecting.',
                 'Say what the annex must carry at its head.',
                 'Say what is taught, and to whom.'],
 bank=['The 1-page form is …',
       'Before selecting, the drafter must answer …',
       'The annex carries, at its head, …',
       'Officers are taught …',
       'This is reviewed …'],
 outcome='The form was kept. Three standing questions were added before selection: is the '
         'course proposed lawful where it must operate, is it practicable there, and has '
         'anybody with local knowledge seen it. The annex now carries a one-line contents list '
         'at its head rather than beginning at item one. Over the following year thirty-nine '
         'briefs were written and the three questions caught two further cases, one of them a '
         'licensing requirement in Oristan. Hana says the useful thing was refusing to call her '
         'own misjudgement a process failure, because the three questions were written to catch '
         'a judgement and would not have been written to repair a form.',
 outcome_q=[('What three questions were added?', 'lawful where it must operate, practicable there, and seen by somebody with local knowledge'),
            ('What does Hana say made the fix possible?', 'refusing to describe her own misjudgement as a process failure')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Brief me on transit',
 task=['This is the tasking behind the six-page December brief, the one in which nothing was '
       'wrong.',
       'It produced forty-one sourced assertions and no answer to the question the Director '
       'actually had.'],
 draft=['Brief me on the transit question.',
        'Cover what we know.',
        'Include the relevant background.',
        'Source everything properly.',
        'Set out the main considerations.',
        'Before the meeting.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them names a decision.',
 asked=['The decision, stated in one sentence',
        'A capped number of material facts',
        'The consequence of doing nothing'],
 back=['41 sourced assertions across 6 pages',
       'No statement of what bears on Thursday',
       'The selection left to the reader'],
 gap='"The transit question" names a subject and not a decision, "what we know" is unbounded, '
     '"the relevant background" leaves relevance to the drafter with no decision to test it '
     'against, and "the main considerations" names no number and no reader.',
 back_cap='A document in which every sentence is defensible and the reader must do the '
          'thinking in a car.',
 back_note='The first line is the failure. A brief written against a subject cannot select, '
           'because selection is relative to a decision and no decision was stated.',
 diagnosis=[('[1] "the transit question" — which decision, for which meeting?', 'hidden assumption'),
            ('[2] "cover what we know" — all of it, or what bears on the decision?', 'unscoped set'),
            ('[3] "the relevant background" — relevant to what, judged how?', 'unstated criterion'),
            ('[4] "source everything properly" — assumes sourcing is the measure of a brief', 'hidden assumption'),
            ('[5] "the main considerations" — how many, and chosen by what test?', 'unstated criterion'),
            ('[6] "before the meeting" — which meeting, and covering what agenda?', 'unscoped set')],
 rewrite='Rewrite the tasking so that a decision is named and selection is required.',
 scaffold=['The decision and the reader, and what the reader must know',
           'The question as it stands for that meeting, and what is excluded',
           'The established assertions, and nothing new',
           'The decision in a sentence, a capped set of material facts with references, consequences, marked inferences and opinions, the unknown, and the consequence of silence',
           'One page with the rest annexed, by when',
           'What to do where a consequence cannot be established'],
 bank=['Brief … so that … knows … and what follows if …',
       'Cover … ; … are out of scope.',
       'Work from … and nothing new.',
       'State … in 1 sentence; name no more than … , each with … ; give … ; mark … ; state … ; state …',
       'Return 1 page, with … annexed and nothing … , by …',
       'Where the section cannot establish … , … rather than …'],
 check=['Is a decision named rather than a subject?',
        'Is the number of material facts capped?',
        'Is the consequence of inaction required?',
        'Is the annexed material preserved rather than cut?'],
 model=['Brief the Director for Thursday’s meeting so that she knows which facts bear on the decision, what follows from each, and what follows if the Ministry says nothing',
        'The transit question as it stands for Thursday; the 2 related questions on fees and visas are out of scope',
        'The 41 established assertions in the December brief and nothing new',
        'State the decision as the section understands it in 1 sentence; name no more than 5 facts that bear on it, each with its reference; give the consequence of each; mark every inference as the section’s assessment and every opinion as the section’s view; state what is not known; state what follows if nothing is done',
        '1 page, with the remaining material annexed and nothing deleted, by 09:00 Thursday',
        'Where the section cannot establish what follows from a fact, say that the consequence is not established rather than omitting the fact'],
 cost='1 Director reading 6 defensible pages twice, 36 hours before a meeting, to find the 4 '
      'facts the section already knew were the ones that mattered.'),

rev_fig=figs.split('FACT, INFERENCE, OPINION',
                   'Blurred',
                   ['The dangerous depth shows arming.',
                    'Clearly the Ministry should wait.',
                    'The worrying figures mean we must act.',
                    'Obviously no document exists.'],
                   'Separated',
                   ['14 metres (file 2019/114, para 11), which the section assesses …',
                    'In the section’s view, the Ministry should wait.',
                    'Trade fell 11 per cent; no cause assessed.',
                    'No document states a purpose; established.']),
rev_fig_cap='The fact with its reference, the inference as an assessment, the opinion as a view.',
rev=dict(
 read=[('The last failure in the sequence is a brief that is', ['unsourced', 'accurate and useless', 'too short', 'ungraded'], 1),
       ('A brief serves', ['a subject', 'a decision', 'an archive', 'a reader’s interest'], 1),
       ('The reply to the principled defence is that', ['completeness is impossible', 'the section already selected', 'Ministers prefer short briefs', 'sourcing is enough'], 1),
       ('In the Decision Room, what was added before selection?', ['nothing', 'three standing questions', 'a longer annex', 'a second drafter'], 1)],
 listen_text='A section that declines to select has not avoided the judgement; it has moved it '
             'to the reader with the least time. Deciding which forty-one facts to establish is '
             'itself an act of selection, performed earlier, by the same people, and recorded '
             'nowhere.',
 listen=[('Has not ____________ the judgement.', 'avoided'),
         ('The reader with the least ____________.', 'time'),
         ('An act of ____________, performed earlier.', 'selection'),
         ('By the same people, and recorded ____________.', 'nowhere')],
 speak=['Name a decision in front of your office and the three facts that bear on it.',
        'Say what follows if nothing is done.'],
 write='Write one sentence carrying a fact, an inference and an opinion, each marked.',
 vocab=[('A fact that could change the decision is a ____________.', 'material fact'),
        ('The sentence saying what a fact means for the reader is a ____________.', 'so-what sentence'),
        ('A choice the evidence does not settle is a ____________.', 'judgement call'),
        ('A fact needed for understanding and not for deciding is a ____________.', 'background fact'),
        ('The moment at which a choice must actually be made is a ____________.', 'decision point')],
 gram=[('The basin is 14 metres, ____________ the section assesses to exceed commercial need.', 'which'),
       ('In the section’s ____________ the Ministry should wait.', 'view'),
       ('Trade fell 11 per cent; the section does not ____________ a cause.', 'assess'),
       ('No document in the collection states a purpose; this is ____________.', 'established'),
       ('The section ____________ that the Ministry say nothing before Thursday.', 'recommends')]),

found=['Take the last brief you wrote and name the decision it served.',
       'Name the three facts in it that bore on that decision.',
       'Add one line saying what follows if nothing is done.',
       'Mark one sentence of yours so that fact, inference and opinion are distinguishable.'],
end_line='A section that will not select has moved the judgement, not avoided it.',
end_next='Book 4: Positions and Texts',
)
