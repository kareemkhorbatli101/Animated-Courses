# -*- coding: utf-8 -*-
import figs

U = dict(
num=2, title='What Changed Between Versions',
gram='conditionals in negotiation: unless, provided that, failing that',
ai='comparing two versions of a text and reporting the difference',
strap='CEFR B2 · Grammar: conditionals in negotiation · AI: comparing two versions',
cando=['use unless, provided that and failing that in a negotiating text',
       'see that moving a condition changes who must act first',
       'distinguish a drafting change from a substantive one',
       'report a textual difference in terms of obligation, not wording',
       'write a tasking for a version comparison that asks the right question'],
hero=('FOUR WORDS MOVED',
      ['Twenty-nine changes, twenty-eight of them drafting.',
       'The twenty-ninth moved a condition four words to the left.'],
      [(730, 'purple', 'long'), (1390, 'orange', 'short'),
       (2050, 'blue', 'long'), (2690, 'teal', 'short')]),
hero_cap='Legal and Treaties, comparing the Oristani counter-draft with the Ministry’s text.',

warm=['How do you check what has changed between two versions of a document?',
      'What is the difference between a change of wording and a change of obligation?',
      'Which small words in a contract or agreement carry the most weight?'],
read=[
 'In September Oristan returned the Ministry’s draft with a counter-text. The two documents '
 'ran to fourteen pages each and differed in twenty-nine places.',
 'A comparison step produced the list in four minutes. Twenty-six of the changes were '
 'drafting: a defined term capitalised consistently, two renumberings, a cross-reference '
 'corrected, several insertions of the word respectively. Two were substantive and had been '
 'flagged by Oristan in its covering letter, as the practice requires.',
 'The twenty-ninth change was in article 7. The Ministry’s text read that the fee is to be '
 'reviewed in 2027 provided that both Parties so agree. Oristan’s text read that the fee is '
 'to be reviewed in 2027 unless both Parties otherwise agree.',
 'Those two sentences look like the same sentence. In the first, the review happens only if '
 'both sides act; silence means no review. In the second, the review happens unless both '
 'sides act; silence means a review. The condition had moved four words and the burden of '
 'obtaining agreement had moved from one capital to the other.',
 'Samir Haddad had ruled in July that the comparison step report changes by category: '
 'drafting, substantive, or consequential. The category of the article 7 change, by any '
 'ordinary test of wording, is drafting. He now requires a fourth report, which asks of every '
 'change what happens if neither Party does anything, and he says the three categories were a '
 'reasonable idea that would have cost the Ministry a review in 2027.'],
c_a=[('How long were the two documents?', 'fourteen pages each, differing in twenty-nine places'),
     ('How many changes were drafting?', 'twenty-six'),
     ('What did the Ministry’s article 7 say?', 'that the fee is to be reviewed in 2027 provided that both Parties so agree'),
     ('What did Oristan’s say?', 'that the fee is to be reviewed in 2027 unless both Parties otherwise agree'),
     ('What did the change do?', 'it moved the burden of obtaining agreement from one capital to the other'),
     ('What fourth report does Samir now require?', 'what happens if neither Party does anything')],
c_b=[('Oristan flagged two substantive changes in its covering letter.', 'T'),
     ('The twenty-ninth change was flagged.', 'F'),
     ('Under the Ministry’s text, silence means a review.', 'F'),
     ('Under Oristan’s text, silence means a review.', 'T'),
     ('The change would be classed as drafting by an ordinary test.', 'T'),
     ('Samir abandoned the three categories entirely.', 'F')],
c_c=[('A defined ____________ capitalised consistently.', 'term'),
     ('Several insertions of the word ____________.', 'respectively'),
     ('Reviewed in 2027 ____________ that both Parties so agree.', 'provided'),
     ('Reviewed in 2027 ____________ both Parties otherwise agree.', 'unless'),
     ('The condition had moved four ____________.', 'words'),
     ('What happens if neither Party does ____________.', 'anything')],
c_d=[('The change was ( substantive / drafting ) in effect.', ['substantive', 'drafting'], 0),
     ('How many of the twenty-nine were drafting?', ['two', 'twenty-six', 'twenty-nine', 'four'], 1),
     ('How long did the comparison take?', ['four minutes', 'four hours', 'a day', 'a week'], 1),
     ('Which text makes silence produce a review?', ['the Ministry’s', 'Oristan’s', 'both', 'neither'], 1),
     ('What does the fourth report ask?', ['who drafted it', 'what happens if nobody acts', 'how long it is', 'who flagged it'], 1)],
c_e=('What does silence produce? Put each formula in the right column.',
     [('provided that both Parties so agree', 'no review'),
      ('unless both Parties otherwise agree', 'a review'),
      ('if the Parties agree, a review shall be held', 'no review'),
      ('a review shall be held failing agreement to the contrary', 'a review'),
      ('subject to the agreement of both Parties', 'no review'),
      ('save where both Parties agree otherwise', 'a review')],
     ['no review', 'a review']),

v_fig_title='THE KINDS OF CHANGE',
v_fig=[('doc', 'an insertion'), ('key', 'a deletion'), ('pin', 'a substitution'),
       ('chart', 'a renumbering'), ('bulb', 'a substantive change'), ('shield', 'a shift of obligation')],
v_fig_cap='Six kinds, and only the last two matter to a negotiator.',
vocab=[
 ('a redline', 'a text showing the changes made to an earlier version'),
 ('a tracked change', 'a single recorded alteration within a document'),
 ('an insertion', 'words added to a text'),
 ('a deletion', 'words removed from a text'),
 ('a substitution', 'words replaced by other words'),
 ('a transposition', 'the moving of words or provisions to another place'),
 ('a renumbering', 'a change to the numbers of articles or paragraphs'),
 ('a consolidated text', 'a single text incorporating all agreed changes'),
 ('a clean text', 'a text with the marks of change removed'),
 ('a working draft', 'the text the negotiators are currently working on'),
 ('a rolling text', 'a text revised as a negotiation proceeds'),
 ('a variant reading', 'an alternative wording offered for the same provision'),
 ('a textual change', 'any difference between two versions of a text'),
 ('a substantive change', 'a change that alters a right, an obligation or a date'),
 ('a drafting change', 'a change that alters wording without altering effect'),
 ('a consequential amendment', 'a change required elsewhere by a change already made'),
 ('a cross-reference change', 'an alteration to a pointer from one provision to another'),
 ('a defined term', 'a word given a stated meaning for the purposes of a text'),
 ('a settled formula', 'a form of words accepted and reused without renegotiation'),
 ('a shift of obligation', 'a change in which side must act for something to happen')],
v_a=[('A change that alters a right, an obligation or a date is a ____________.', 'substantive change'),
     ('A change that alters wording without altering effect is a ____________.', 'drafting change'),
     ('A change in which side must act is a ____________.', 'shift of obligation'),
     ('A change required elsewhere by a change already made is a ____________.', 'consequential amendment'),
     ('A text revised as a negotiation proceeds is a ____________.', 'rolling text'),
     ('A single text incorporating all agreed changes is a ____________.', 'consolidated text'),
     ('A word given a stated meaning for the purposes of a text is a ____________.', 'defined term'),
     ('A form of words accepted and reused without renegotiation is a ____________.', 'settled formula')],
v_b=[('A redline is a text showing the changes', 'made to an earlier version.'),
     ('A transposition is the moving of words', 'or provisions to another place.'),
     ('A clean text is a text with the marks', 'of change removed.'),
     ('A variant reading is an alternative wording', 'offered for the same provision.'),
     ('A cross-reference change is an alteration to a pointer', 'from one provision to another.')],

g_title='Grammar: conditionals in negotiation',
g_rule=['Provided that makes the thing happen only if the condition is met.',
        'Unless makes the thing happen except where the condition is met.',
        'Failing that introduces what happens when the first course does not occur.',
        'In each case ask what follows if nobody does anything; that is the real effect.'],
g_fig=('LOOSE',
       ['A review will be held if the Parties want one.',
        'The fee may be looked at in 2027.',
        'The Parties will discuss the figure in due course.',
        'If there is no agreement, something else will happen.'],
       'PRECISE',
       ['The fee is to be reviewed in 2027 provided that both Parties so agree.',
        'The fee is to be reviewed in 2027 unless both Parties otherwise agree.',
        'The Parties are to agree a figure by 31 March; failing that, the 2024 figure applies.',
        'No review is to be held unless 1 Party requests one in writing.'],
       'four conditions in which it is unclear who must move',
       'four conditions in each of which inaction has a stated result'),
g_fig_cap='Provided that and unless are opposites; in a long sentence they look alike.',
g_a=[('The fee is to be reviewed in 2027 ____________ that both Parties so agree.', 'provided'),
     ('The fee is to be reviewed in 2027 ____________ both Parties otherwise agree.', 'unless'),
     ('The Parties are to agree a figure by 31 March; ____________ that, the 2024 figure applies.', 'failing'),
     ('No review is to be held ____________ one Party requests one in writing.', 'unless'),
     ('The arrangement continues ____________ either Party gives notice.', 'unless'),
     ('Notice is effective ____________ that it is given in writing.', 'provided'),
     ('____________ agreement by 31 March, the matter goes to the Joint Committee.', 'Failing'),
     ('The figure applies ____________ otherwise agreed in writing.', 'unless'),
     ('The review is to take place ____________ that notice has been given.', 'provided')],
g_b=[('Provided that makes the thing happen ( except if / only if ) the condition is met.', ['except if', 'only if'], 1),
     ('The fee is reviewed ____ both Parties otherwise agree: silence means a review.', ['provided that', 'unless', 'if', 'subject to'], 1),
     ('____ that, the 2024 figure applies.', ['Unless', 'Failing', 'Provided', 'Except'], 1),
     ('Which question reveals the real effect?', ['who drafted it', 'what happens if nobody acts', 'how long it is', 'which article'], 1),
     ('The arrangement continues ____ either Party gives notice.', ['provided that', 'unless', 'failing', 'if not that'], 1),
     ('Which pair are opposites?', ['unless and save where', 'provided that and unless', 'failing that and in default', 'subject to and conditional on'], 1)],

d1=dict(title='Four words to the left',
        fig=(['Twenty-eight drafting changes.', 'And one that moves a burden.'],
             ['Provided that, unless.', 'Four words, one capital.']),
        cap='Samir Haddad and Omar Nasri, over the two texts.',
        lines=[('Omar', 'Article 7. Ours says reviewed in 2027 provided that both Parties so '
                        'agree. Theirs says reviewed in 2027 unless both Parties otherwise '
                        'agree.'),
               ('Samir', 'Read them to me again slowly.'),
               ('Omar', 'Provided that both Parties so agree. Unless both Parties otherwise '
                        'agree.'),
               ('Samir', 'Under ours, if nobody does anything, there is no review. Under theirs, '
                         'if nobody does anything, there is a review.'),
               ('Omar', 'Which means the party who wants no review has to go and get agreement.'),
               ('Samir', 'And that party is us. We spent March establishing that the fee is not '
                         'reopened automatically, and this sentence reopens it automatically and '
                         'makes us responsible for stopping it.'),
               ('Omar', 'Oristan flagged two substantive changes in the covering letter. This '
                        'was not one of them.'),
               ('Samir', 'I do not think they were concealing it. A lawyer in their legal '
                         'department thought unless read better and is entirely unaware of what '
                         'it does, which happens here too.'),
               ('Omar', 'The comparison classed it as drafting.'),
               ('Samir', 'Correctly, on any test of wording. Same length, same register, same '
                         'two Parties, same year. The effect is reversed and the words are '
                         'almost identical, which is the whole problem with classifying changes '
                         'by what they look like.'),
               ('Omar', 'Then the classification has to ask something else.'),
               ('Samir', 'It has to ask, of every single change, what happens if neither Party '
                         'does anything. That question has no interest in how much text moved.')],
        a=[('What do the two versions of article 7 say?', 'reviewed provided that both agree; reviewed unless both otherwise agree'),
           ('What follows from silence under each?', 'no review under the Ministry’s text; a review under Oristan’s'),
           ('Who now has to obtain agreement?', 'the Ministry, which wants no automatic review'),
           ('Was the change flagged?', 'no; Oristan flagged two others'),
           ('What question must the classification ask?', 'what happens if neither Party does anything')],
        b=[('The party who wants no review has to go and get ____________.', 'agreement'),
           ('A lawyer thought unless read ____________.', 'better'),
           ('The effect is ____________ and the words are almost identical.', 'reversed'),
           ('That question has no interest in how much ____________ moved.', 'text')]),
d2=dict(title='The categories I wrote',
        fig=(['Drafting, substantive, consequential.', 'And a fourth column.'],
             ['My three were reasonable.', 'And would have cost us 2027.']),
        cap='Samir and Dr Hana Mourad.',
        lines=[('Hana', 'You wrote the three categories in July. Are you withdrawing them?'),
               ('Samir', 'No. They are useful and they are not sufficient, which is a different '
                         'thing and the one I got wrong.'),
               ('Hana', 'Wrong how?'),
               ('Samir', 'I classified changes by what kind of change they are, which is how a '
                         'lawyer thinks about a text. A negotiator has to classify them by what '
                         'they do to the default. Those two schemes mostly agree and where they '
                         'disagree the disagreement is invisible.'),
               ('Hana', 'Give me the general form of the error.'),
               ('Samir', 'A change can be trivial as text and decisive as obligation. Provided '
                         'that to unless. And or to or. Shall to may. Thirty days to within '
                         'thirty days. None of those is a substantive change on any wording '
                         'test, and each of them moves who must act.'),
               ('Hana', 'So the fourth report is the default question.'),
               ('Samir', 'What happens if neither Party does anything. Asked of every change, '
                         'including the capitalisations, because it costs nothing to ask of a '
                         'capitalisation and the answer is obviously nothing.'),
               ('Hana', 'And when the answer differs between the two versions?'),
               ('Samir', 'Then the change is substantive whatever it looks like, and it goes at '
                         'the top of the report with the two answers set out.'),
               ('Hana', 'I would like that written as an instruction rather than as a practice, '
                        'because practices leave with the officer who had them.'),
               ('Samir', 'It is being written. And I am putting my own July categories in it as '
                         'the example of what three sensible columns miss.')],
        a=[('Is Samir withdrawing the three categories?', 'no; they are useful but not sufficient'),
           ('What was his error?', 'classifying by kind of change rather than by effect on the default'),
           ('What examples does he give?', 'provided that to unless, and to or, shall to may, thirty days to within thirty days'),
           ('What is the fourth report?', 'what happens if neither Party does anything'),
           ('What happens when the two answers differ?', 'the change is substantive whatever it looks like and goes at the top')],
        b=[('Useful and not ____________.', 'sufficient'),
           ('A change can be trivial as text and decisive as ____________.', 'obligation'),
           ('It costs nothing to ask of a ____________.', 'capitalisation'),
           ('Practices leave with the ____________ who had them.', 'officer')]),

speak=[('Conditions and defaults',
        ['Student A: state a condition from your work using provided that.',
         'Student B: restate it with unless and say what changed.',
         'Say in each case what happens if nobody acts.']),
       ('Two versions',
        ['Take a sentence and alter one small word.',
         'Your partner says whether the obligation moved.',
         'Find the alteration that looks smallest and does most.']),
       ('Failing that',
        ['Describe a step in your work that may not happen.',
         'Say what happens failing that.',
         'Your partner asks who has to act for each outcome.'])],

ext_title='A version comparison that classifies changes by appearance will miss the change that reverses a default',
ext_fig=figs.datatable('ARTICLE 7, TWO TEXTS',
                       ['', 'Ministry text', 'Oristani text'],
                       [['words in the provision', '19', '19'],
                        ['the operative verb', 'is to be reviewed', 'is to be reviewed'],
                        ['the condition', 'provided that both agree', 'unless both agree otherwise'],
                        ['if both Parties act', 'review', 'no review'],
                        ['if neither Party acts', 'no review', 'review'],
                        ['classified by wording', 'drafting', 'drafting']]),
ext_fig_cap='Five rows identical or near-identical, one row reversed, and that row is the '
            'agreement.',
ext=[
 'Comparing two versions of a negotiating text is work that used to be done with two printed '
 'copies and a ruler, and done badly, because fourteen pages against fourteen pages at two in '
 'the morning defeats anybody. A comparison step produces the complete list of differences in '
 'minutes and does not miss a renumbering or a stray cross-reference. That part is settled and '
 'is a straightforward gain.',
 'The question is what the list is then sorted by. The natural scheme, and the one most legal '
 'sections adopt first, is by kind of change: drafting, substantive, consequential. It is a '
 'lawyer’s scheme, it is defensible, and it classifies by what the change is.',
 'A negotiator needs the changes classified by what they do, and specifically by what they do '
 'to the default. The two schemes agree about most changes, which is why the difficulty takes '
 'months to surface. Where they disagree, the disagreement is invisible: provided that both '
 'Parties so agree and unless both Parties otherwise agree are the same length, the same '
 'register and the same nineteen words, and they are opposites. One makes silence produce no '
 'review; the other makes silence produce a review; and the side that does not want the '
 'outcome of silence has to go and obtain agreement, which is the whole of what was negotiated.',
 'The same applies to a small family of alterations that no wording test will catch. And to '
 'or. Shall to may. Thirty days to within thirty days. May to is authorised to. Each is '
 'trivial as text and each moves who must act first, which in a negotiation between capitals '
 'is the thing being argued about.',
 'So the comparison needs one further report, and it is a question rather than a category: of '
 'every change, what happens if neither Party does anything? It is cheap to ask of a '
 'capitalisation and the answer is nothing. Where the answer differs between the two versions, '
 'the change is substantive whatever it looks like, and the report should carry both answers '
 'side by side so that a tired negotiator reads a consequence rather than a diff.'],
dp1=('Version comparison in negotiation',
     'Legal and treaty sections in several foreign services adopted automated version '
     'comparison in 2025 and added default-effect reporting after wording-based '
     'classifications were found to miss conditional reversals.',
     'Source: reported practice in diplomatic treaty work, 2025–2026.'),
e_a=[('How was version comparison done before?', 'with two printed copies and a ruler, badly, at two in the morning'),
     ('What scheme do legal sections adopt first?', 'by kind of change: drafting, substantive, consequential'),
     ('What does a negotiator need instead?', 'classification by effect on the default'),
     ('Why is the disagreement invisible?', 'because the two formulas are the same length and register and are opposites'),
     ('What is the further report?', 'what happens if neither Party does anything, asked of every change')],
e_b=[('Automated comparison misses renumberings.', 'F'),
     ('The lawyer’s scheme is indefensible.', 'F'),
     ('The two schemes disagree about most changes.', 'F'),
     ('And to or can move an obligation.', 'T'),
     ('The default question is expensive to ask.', 'F'),
     ('Both answers should be set out side by side.', 'T')],

w_model=(
 'Purpose: report every difference between the Ministry’s draft and the Oristani counter-text '
 'and what each does to the default, so that the delegation knows which changes move an '
 'obligation. Scope: the 2 texts as exchanged on 3 and 19 September; the covering letters are '
 'out of scope except as a record of what Oristan flagged. Inputs: the 2 texts and the '
 'Ministry’s list of settled formulas. Criteria: list every difference with its article and '
 'paragraph; for each, state what happens under each text if neither Party does anything; '
 'where those 2 answers differ, mark the change as substantive whatever its wording and place '
 'it first; classify the remainder as drafting or consequential; state which changes Oristan '
 'flagged and which it did not. Done: 1 report, differences ordered by effect and not by '
 'article, within 2 hours of receipt. Fallback: where the effect of inaction cannot be '
 'determined from the text alone, say so and mark the change for legal advice rather than '
 'classifying it.'),
w_fig=figs.spec_card('THE TASKING FOR A VERSION COMPARISON',
                     [('Purpose', 'which changes move an obligation'),
                      ('Scope', 'the 2 texts of 3 and 19 September; letters only as a record'),
                      ('Inputs', 'the 2 texts and the list of settled formulas'),
                      ('Criteria', 'the default question on every change; differing answers first'),
                      ('Done', '1 report ordered by effect, within 2 hours'),
                      ('Fallback', 'effect undeterminable: mark for legal advice')]),
w_fig_cap='Ordered by effect and not by article: a negotiator reads the first three lines.',
w_task='Write a tasking for comparing two versions of a document in your own work.',
w_steps=['Say what the reader must be able to see.',
         'Identify the two texts by date.',
         'Require the default question on every change.',
         'Require differing answers to be placed first.',
         'Say what to do where the effect cannot be determined.'],
w_bank=['Report every difference between … and what each does to … , so that …',
        'Cover … ; … are out of scope except as …',
        'Work from … and …',
        'List every difference with … ; for each, state … ; where those answers differ, … ; classify … ; state which …',
        'Where the effect of inaction cannot be determined … , say so and …'],
w_check=['Is the default question asked of every change?',
         'Is the report ordered by effect rather than by article?',
         'Must both answers be set out?',
         'Is an undeterminable effect referred rather than classified?'],

t_title='Comparing two versions',
t_fig=figs.split('TWO WAYS TO SORT 29 CHANGES',
                 'By kind',
                 ['26 drafting',
                  '2 substantive',
                  '1 consequential',
                  'article 7 sorted as drafting'],
                 'By default effect',
                 ['1 change reverses the default',
                  '2 changes alter a date',
                  '26 changes alter nothing',
                  'article 7 sorted first']),
t_fig_cap='The same twenty-nine changes. The right-hand sort puts the agreement at the top.',
t_body=[
 'The mechanical half of version comparison is solved. Fourteen pages against fourteen pages '
 'defeats a tired officer with two printed copies, and a comparison step lists every '
 'difference in minutes including the renumberings and the stray cross-references. Take that '
 'and move on to the part that still needs an officer’s decision.',
 'That part is the sort order. The natural scheme classifies changes by kind: drafting, '
 'substantive, consequential. It is a lawyer’s scheme and it is sound as far as it goes. A '
 'negotiator, however, needs them sorted by what they do to the default, and the two schemes '
 'disagree in exactly the cases that matter. Provided that both Parties so agree and unless '
 'both Parties otherwise agree run to the same nineteen words in the same register and have '
 'opposite effects: under one, silence produces no review; under the other, silence produces '
 'a review, and the side that dislikes that outcome must go and obtain agreement.',
 'So add one question and ask it of every change, including the capitalisations, since it '
 'costs nothing there: what happens if neither Party does anything? Where the answer differs '
 'between the two texts, the change is substantive however small it looks, and it goes at the '
 'top of the report with both answers side by side. The same catches the rest of the family '
 'that no wording test reaches: and to or, shall to may, thirty days to within thirty days.'],
t_say=[('Ask the default question: ', 'If neither Party acts, what happens under each text?'),
       ('Order by effect: ', 'Changes that alter the default first, then dates, then wording.'),
       ('Refuse the classification: ', 'Effect not determinable from the text; referred for advice.')],
t_bound=('A comparison can list every difference and can test a formula against a list of '
         'settled ones. It cannot know what was negotiated, so it cannot tell which reversed '
         'default matters, and a change it classifies correctly by wording may be the one that '
         'loses the point. The default question is the only test that does not depend on how '
         'much text moved.'),
t_a=[('If neither Party acts, what happens under each ____________?', 'text'),
     ('Changes that alter the ____________ first.', 'default'),
     ('Effect not determinable from the text; referred for ____________.', 'advice'),
     ('The two schemes disagree in exactly the cases that ____________.', 'matter'),
     ('Must go and obtain ____________.', 'agreement'),
     ('Thirty days to ____________ thirty days.', 'within')],
t_b_rubric='Rewrite each so that the effect of inaction is clear.',
t_b=[('A review will be held if the Parties want one.', 'the fee is to be reviewed in 2027 provided that both Parties so agree'),
     ('The fee may be looked at in 2027.', 'the fee is to be reviewed in 2027 unless both Parties otherwise agree'),
     ('The Parties will discuss the figure in due course.', 'the Parties are to agree a figure by 31 March; failing that, the 2024 figure applies'),
     ('If there is no agreement, something else will happen.', 'failing agreement by 31 March, the matter goes to the Joint Committee')],

case=dict(
 title='The Decision Room · Do we tell them what we found',
 brief=[
  'The Ministry has found that article 7 in the Oristani counter-text reverses the default on '
  'the 2027 review. Oristan did not flag it.',
  'The Ministry believes the change was not deliberate: a settled formula was replaced by one '
  'a drafter thought read better.',
  'Lina Khalil wants to accept the Oristani text with article 7 restored and say nothing about '
  'why. Samir wants to say exactly what the Ministry found. Omar Nasri points out that the '
  'formula Oristan used appears in two of its other bilateral texts.'],
 exhibit=figs.datatable('ARTICLE 7 AND ITS NEIGHBOURS',
                        ['', 'Finding', 'Note'],
                        [['the Ministry’s formula', 'provided that both agree', 'settled, 11 uses'],
                         ['the Oristani formula', 'unless both agree otherwise', 'in 2 of its texts'],
                         ['flagged by Oristan', 'no', '2 others flagged'],
                         ['effect on the default', 'reversed', 'silence now produces a review'],
                         ['other changes affecting defaults', '0', 'of the other 28'],
                         ['time since receipt', '4 hours', '—']]),
 exhibit_cap='One reversal among twenty-nine changes, in a formula the other side uses '
             'elsewhere.',
 exhibit_note='In 2 Oristani bilateral texts the same formula appears, in both cases where '
              'Oristan wanted the review to happen automatically.',
 voices=[('Lina Khalil', 'Bilateral Affairs',
          'Restore our formula and return the text. If it was not deliberate, naming it tells '
          'them we read their drafts very closely, which is information I would rather not '
          'give.'),
         ('Samir Haddad', 'Legal and Treaties',
          'Say what we found. If we restore it silently they may restore theirs silently next '
          'round and we will be trading reversals nobody admits to, which is how a text becomes '
          'unusable.'),
         ('Omar Nasri', 'Translation and Documentation',
          'Note that they use the formula where they want automatic review. That makes '
          'inadvertence less likely than Samir assumes, and makes naming it more useful.')],
 steps=[('Find it', 'Where else does the Oristani formula appear?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Lina want silence?'),
        ('Weigh it', 'Concealing a capability against an unadmitted trade in reversals.'),
        ('Decide', 'What goes back to Oristan?')],
 analysis=[('Find it. In how many Oristani texts does the formula appear?', 'two, both where automatic review was wanted'),
           ('Compare it. What does Samir want?', 'to say exactly what the Ministry found'),
           ('Infer it. What is Lina protecting?', 'the fact that the Ministry reads counter-drafts very closely'),
           ('Weigh it. How many other changes affected a default?', 'none of the other twenty-eight'),
           ('Decide. What would you do?', 'answers vary; naming it establishes a practice for both sides and costs little')],
 decision='Write what the Ministry sends back.',
 decision_steps=['Say what happens to article 7.',
                 'Say whether the finding is named, and in what terms.',
                 'Say what the Ministry asks of Oristan for future rounds.',
                 'Say what is recorded internally.'],
 bank=['Article 7 is …',
       'The Ministry states that …',
       'For future rounds the Ministry proposes that …',
       'It is recorded that …',
       'This is reviewed …'],
 outcome='The Ministry restored its formula and said so in one sentence, adding that it would '
         'flag any change of its own affecting the effect of inaction and proposing that both '
         'sides do the same. Oristan agreed in its reply and flagged three such changes in the '
         'next round, two of which the Ministry had not found. Lina, who had wanted silence, '
         'says the proposal turned out to be worth more than the concealment, because the '
         'three flagged changes included one in an annex her section would not have read; she '
         'adds that she would still argue for silence with a counterpart who had form.',
 outcome_q=[('What did the Ministry propose?', 'that both sides flag any change affecting the effect of inaction'),
            ('What did the next round produce?', 'three flagged changes from Oristan, two of which the Ministry had not found')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Tell me what changed',
 task=['This is the tasking under which the comparison step ran from July to September, with '
       'the three categories Samir had written.',
       'It produced an accurate list of twenty-nine changes in which the decisive one was '
       'twenty-second.'],
 draft=['Compare the two texts and list the changes.',
        'Classify each as drafting, substantive or consequential.',
        'Note anything significant.',
        'Follow the article order.',
        'Flag what the other side flagged.',
        'Quickly, in the usual format.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the second one sorted the agreement into the wrong column.',
 asked=['The default question on every change',
        'Changes affecting the default placed first',
        'Both answers set out side by side'],
 back=['29 changes correctly listed',
       'Article 7 classified as drafting',
       'The decisive change at position 22'],
 gap='"Classify as drafting, substantive or consequential" sorts by wording, "anything '
     'significant" names no test, "follow the article order" buries the important change, and '
     'nothing says what to do where the effect cannot be worked out.',
 back_cap='A complete and correct list in which the one change that mattered sat between a '
          'renumbering and a cross-reference.',
 back_note='Line four compounds line two: article order puts the decisive change wherever the '
           'drafters happened to put the provision.',
 diagnosis=[('[1] "the two texts" — which versions, as exchanged when?', 'missing condition'),
            ('[2] "classify as drafting, substantive or consequential" — by wording or by effect?', 'unstated criterion'),
            ('[3] "anything significant" — significant by what test?', 'unstated criterion'),
            ('[4] "follow the article order" — even where a change reverses a default?', 'unstated exception'),
            ('[5] "flag what the other side flagged" — and what they did not?', 'unstated exception'),
            ('[6] nothing on undeterminable effects — classified anyway?', 'missing condition')],
 rewrite='Rewrite the tasking so that changes are sorted by effect on the default.',
 scaffold=['What the delegation must be able to see',
           'The two texts by date, and what the letters count for',
           'The texts and the list of settled formulas',
           'Every difference located; the default question on each; differing answers first; the rest classified; flagging recorded',
           'One report, ordered by effect, and by when',
           'What to do where the effect of inaction cannot be determined'],
 bank=['Report every difference between … and what each does to … , so that …',
       'Cover … ; … are out of scope except as …',
       'Work from … and …',
       'List every difference with … ; for each, state … ; where those 2 answers differ, mark … and place … ; classify … ; state which …',
       'Return 1 report, differences ordered by … , within …',
       'Where the effect of inaction cannot be determined … , … rather than …'],
 check=['Is the default question required on every change?',
        'Is the ordering by effect rather than by article?',
        'Are unflagged changes identified as such?',
        'Is an undeterminable effect referred rather than classified?'],
 model=['Report every difference between the Ministry’s draft and the Oristani counter-text and what each does to the default, so that the delegation knows which changes move an obligation',
        'The 2 texts as exchanged on 3 and 19 September; the covering letters are out of scope except as a record of what Oristan flagged',
        'The 2 texts and the Ministry’s list of settled formulas',
        'List every difference with its article and paragraph; for each, state what happens under each text if neither Party does anything; where those 2 answers differ, mark the change as substantive whatever its wording and place it first; classify the remainder as drafting or consequential; state which changes Oristan flagged and which it did not',
        '1 report, differences ordered by effect and not by article, within 2 hours of receipt',
        'Where the effect of inaction cannot be determined from the text alone, say so and mark the change for legal advice rather than classifying it'],
 cost='1 reversal of the 2027 review default, classified as drafting and listed 22nd, which '
      'the Ministry found 4 hours before its reply was due.'),

rev_fig=figs.split('CONDITIONS',
                   'Unclear',
                   ['A review if the Parties want one.',
                    'The fee may be looked at in 2027.',
                    'The Parties will discuss in due course.',
                    'If no agreement, something happens.'],
                   'Clear',
                   ['Reviewed provided that both so agree.',
                    'Reviewed unless both otherwise agree.',
                    'Agree by 31 March; failing that, 2024 applies.',
                    'No review unless 1 Party requests in writing.']),
rev_fig_cap='Provided that, unless, failing that — and always ask what inaction produces.',
rev=dict(
 read=[('The decisive change in article 7 was classified as', ['substantive', 'drafting', 'consequential', 'flagged'], 1),
       ('Under "unless both Parties otherwise agree", silence produces', ['no review', 'a review', 'a negotiation', 'nothing'], 1),
       ('The further report asks', ['who drafted it', 'what inaction produces', 'how long it is', 'which annex'], 1),
       ('In the Decision Room, what did Oristan do in the next round?', ['nothing', 'flagged three such changes', 'withdrew the text', 'reversed again'], 1)],
 listen_text='Provided that both Parties so agree and unless both Parties otherwise agree run '
             'to the same nineteen words in the same register and have opposite effects. Under '
             'one, silence produces no review; under the other, silence produces a review.',
 listen=[('The same ____________ words.', 'nineteen'),
         ('In the same ____________.', 'register'),
         ('Have ____________ effects.', 'opposite'),
         ('Silence produces no ____________.', 'review')],
 speak=['State one condition from your work with provided that, then with unless.',
        'Say what happens in each case if nobody acts.'],
 write='Write one line requiring the default question on every change.',
 vocab=[('A change that alters a right, an obligation or a date is a ____________.', 'substantive change'),
        ('A change in which side must act is a ____________.', 'shift of obligation'),
        ('A change required elsewhere by a change already made is a ____________.', 'consequential amendment'),
        ('A text revised as a negotiation proceeds is a ____________.', 'rolling text'),
        ('A form of words accepted and reused without renegotiation is a ____________.', 'settled formula')],
 gram=[('The fee is to be reviewed in 2027 ____________ that both Parties so agree.', 'provided'),
       ('The fee is to be reviewed in 2027 ____________ both Parties otherwise agree.', 'unless'),
       ('The Parties are to agree by 31 March; ____________ that, the 2024 figure applies.', 'failing'),
       ('The arrangement continues ____________ either Party gives notice.', 'unless'),
       ('Notice is effective ____________ that it is given in writing.', 'provided')]),

found=['Take two versions of a document in your work and find the smallest change that moves an obligation.',
       'Ask of one change what happens if nobody acts.',
       'Find one settled formula your office reuses.',
       'Rewrite one condition so that inaction has a stated result.'],
end_line='A change can be trivial as text and decisive as obligation.',
end_next='Next: Inside the Brackets',
)
