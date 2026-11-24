# -*- coding: utf-8 -*-
import figs

U = dict(
num=4, title='What Only a Person Can Do',
gram='limiting expressions: hardly, barely, few, little',
ai='checks a machine can do, and checks only a person can',
strap='CEFR B2 · Grammar: limiting expressions · AI: checks a machine can do, and checks only a person can',
cando=['use hardly, barely, few and little accurately and without exaggeration',
       'distinguish few from a few, and little from a little',
       'sort checks into those that compare and those that require judgement',
       'put the right kind of check in the right place',
       'say why a judgement check cannot be made cheaper by doing more of it'],
hero=('TWO COLUMNS ON A WHITEBOARD, DRAWN IN MARCH',
      ['On the left, everything that can be compared.',
       'On the right, four things, and they take most of the week.'],
      [(840, 'teal', 'long'), (1580, 'grey', 'short'),
       (2240, 'purple', 'long'), (2760, 'orange', 'short')]),
hero_cap='The division that decides where the expensive hours go.',

warm=['What at your work can only be judged by somebody who knows the client?',
      'What is the difference between "few clients complained" and "a few clients complained"?',
      'Which checks at your work could be done by somebody who arrived yesterday?'],
read=[
 'Victor drew two columns on a whiteboard in March and the left-hand one filled up in about '
 'four minutes. Does this total match the invoice. Does this date fall before the contract '
 'began. Does this account appear on the exclusions list. Is the reference number the right '
 'number of characters. All of these are comparisons, and anybody who arrived yesterday can '
 'perform them given the two documents.',
 'The right-hand column took him the rest of the afternoon and reached four entries. Would '
 'this letter embarrass us. Is this client about to leave. Does this complaint sound worse '
 'than it is. Is this the kind of thing Nora would mind. Every one of them requires somebody '
 'who has been in the room, and none of them can be settled by putting two documents side '
 'by side.',
 'What made the division useful was not the list itself but what it implied about cost. A '
 'comparison check becomes cheaper per item as volume rises, because the rule is the same '
 'every time. A judgement check does not. It costs the same for item four hundred as it did '
 'for item one, because the thing being spent is somebody’s attention and attention does '
 'not scale.',
 'That asymmetry has an uncomfortable consequence which Arclight took some months to accept. '
 'As volume grows, the proportion of output that gets a judgement check falls, whatever '
 'anybody intends, simply because the available attention is fixed and the volume is not. '
 'Very few companies notice this happening, and hardly any of them have decided where the '
 'remaining attention should go.',
 'Victor’s rule is that comparison checks should be applied to everything, because they are '
 'nearly free, and judgement checks should be applied to a deliberately chosen few. Not the '
 'items that look difficult, which is a judgement in itself, but the ones where being wrong '
 'is irreversible or reaches somebody who matters. The list of those is short, it is written '
 'down, and it is reviewed when the business changes.'],
c_a=[('How long did the left-hand column take to fill?', 'about four minutes'),
     ('How many entries did the right-hand column reach?', 'four'),
     ('What is the cost difference between the two kinds of check?', 'comparison checks get cheaper per item at volume; judgement checks do not'),
     ('What happens as volume grows?', 'the proportion of output receiving a judgement check falls'),
     ('Where should judgement checks go?', 'where being wrong is irreversible or reaches somebody who matters')],
c_b=[('Comparison checks require somebody who knows the client.', 'F'),
     ('The right-hand column has fewer entries than the left.', 'T'),
     ('Attention scales with volume.', 'F'),
     ('Victor recommends applying comparison checks to everything.', 'T'),
     ('Judgement checks should go to the items that look difficult.', 'F'),
     ('The list of judgement-check items is written down.', 'T')],
c_c=[('Anybody who arrived ____________ can perform them.', 'yesterday'),
     ('The right-hand column reached four ____________.', 'entries'),
     ('The thing being spent is somebody’s ____________.', 'attention'),
     ('The available attention is ____________ and the volume is not.', 'fixed'),
     ('Not the items that look ____________, which is a judgement in itself.', 'difficult'),
     ('It is reviewed when the ____________ changes.', 'business')],
c_d=[('Judgement checks cost ( the same / less ) per item as volume rises.', ['the same', 'less'], 0),
     ('The left-hand column filled quickly because', ['it was unimportant', 'comparisons are easy to enumerate', 'it was shorter', 'Victor was rushed'], 1),
     ('The uncomfortable consequence is that judged output', ['rises with volume', 'falls as a proportion', 'stays constant', 'disappears'], 1),
     ('Items chosen for judgement should be those where', ['they look difficult', 'being wrong is irreversible', 'they are longest', 'they are newest'], 1),
     ('A comparison check can be done by', ['only the founder', 'somebody who arrived yesterday', 'nobody', 'the client'], 1)],
c_e=('Which kind of check? Put each one in the right column.',
     [('Does the total match the invoice?', 'Comparison'),
      ('Would this letter embarrass us?', 'Judgement'),
      ('Is the date before the contract began?', 'Comparison'),
      ('Is this client about to leave?', 'Judgement'),
      ('Is the account on the exclusions list?', 'Comparison'),
      ('Does this complaint sound worse than it is?', 'Judgement')],
     ['Comparison', 'Judgement']),

v_fig_title='TWO KINDS OF LOOKING',
v_fig=[('scale', 'discernment'), ('bulb', 'intuition'), ('doc', 'objective'),
       ('chart', 'quantitative'), ('people', 'rapport'), ('note', 'a cue')],
v_fig_cap='Six words for what the right-hand column of the whiteboard is made of.',
vocab=[
 ('discernment', 'the ability to judge well in matters that are not clear-cut'),
 ('acumen', 'sharpness of judgement in a particular field'),
 ('intuition', 'understanding arrived at without conscious reasoning'),
 ('tacit', 'understood or implied without being stated'),
 ('experiential', 'gained from experience rather than from instruction'),
 ('contextual', 'depending on the surrounding circumstances for its meaning'),
 ('subjective', 'depending on the particular person making the judgement'),
 ('objective', 'not depending on who is making the judgement'),
 ('qualitative', 'concerned with kind and quality rather than amount'),
 ('quantitative', 'concerned with amounts that can be counted or measured'),
 ('perceptive', 'quick to notice what others do not'),
 ('sensitivity', 'awareness of how something will be received'),
 ('rapport', 'an easy understanding between people who work together'),
 ('candour', 'the quality of saying what you really think'),
 ('empathy', 'the ability to understand what somebody else is feeling'),
 ('instinct', 'a response that comes before any reasoning about it'),
 ('seasoned', 'experienced enough to have met most of the cases before'),
 ('lay', 'not belonging to the profession in question'),
 ('expertise', 'skill or knowledge built up over long practice'),
 ('cue', 'a small signal that prompts a particular response')],
v_a=[('Understanding arrived at without conscious reasoning is ____________.', 'intuition'),
     ('Understood without being stated is ____________.', 'tacit'),
     ('Not depending on who is judging is ____________.', 'objective'),
     ('Awareness of how something will be received is ____________.', 'sensitivity'),
     ('An easy understanding between colleagues is ____________.', 'rapport'),
     ('Experienced enough to have met most cases before is ____________.', 'seasoned'),
     ('A small signal prompting a response is a ____________.', 'cue'),
     ('Knowledge built up over long practice is ____________.', 'expertise')],
v_b=[('Discernment is the ability to judge well', 'in matters that are not clear-cut.'),
     ('Contextual means depending on the circumstances', 'for its meaning.'),
     ('Candour is the quality of saying', 'what you really think.'),
     ('Qualitative is concerned with kind and quality', 'rather than amount.'),
     ('A lay reader is one who does not belong', 'to the profession in question.')],

g_title='Grammar: limiting expressions — hardly, barely, few, little',
g_rule=['Few and little are negative: few clients complained means almost none did.',
        'A few and a little are positive: a few clients complained means some did.',
        'Hardly and barely mean almost not: we hardly check the letters at all.',
        'These words carry a judgement, so a number is usually more honest than any of them.'],
g_fig=('LOOSE',
       ['Few people check it.',
        'Hardly anything comes back.',
        'There is little evidence.',
        'Barely any of it is judged.'],
       'PRECISE',
       ['1 person checks it, for 2 hours a week.',
        '4 complaints in 2 years, from 11 clients.',
        '2 of 90 rows were examined for tone.',
        '14 of 1,870 outputs are judged.'],
       'a limit stated as a feeling',
       'the same limit, counted'),
g_fig_cap='These four words are accurate and they are almost never the most accurate thing available.',
g_a=[('____________ clients complained — only two in two years. (few)', 'Few'),
     ('____________ few clients have asked, which is encouraging. (a)', 'A'),
     ('There is ____________ evidence either way. (little)', 'little'),
     ('We have ____________ little time before Friday. (a)', 'a'),
     ('____________ anything comes back from clients. (hardly)', 'Hardly'),
     ('The queue was ____________ examined before release. (barely)', 'barely'),
     ('____________ of the ninety rows were judged for tone. (few)', 'Few'),
     ('She had ____________ a few reservations about it. (quite)', 'quite'),
     ('____________ any of the summaries are read. (hardly)', 'Hardly')],
g_b=[('( A few / Few ) clients complained — only two in two years.', ['A few', 'Few'], 1),
     ('There is ____ evidence either way.', ['a little', 'little', 'few', 'a few'], 1),
     ('____ anything comes back from clients.', ['Hard', 'Hardly', 'Harder', 'Hardness'], 1),
     ('We have ____ time before Friday, but enough.', ['little', 'a little', 'few', 'hardly'], 1),
     ('The queue was ____ examined before release.', ['bare', 'barely', 'barest', 'bareness'], 1),
     ('____ of the ninety rows were judged for tone.', ['A few', 'Few', 'Little', 'A little'], 1)],

d1=dict(title='Four things on the right',
        fig=(['The left column took four minutes.', 'And the right?'],
             ['The rest of the afternoon.', 'For four entries.']),
        cap='Victor and Ines, at the whiteboard.',
        lines=[('Ines', 'The left column took four minutes and has about thirty things on it.'),
               ('Victor', 'The right took the afternoon and has four.'),
               ('Ines', 'That seems the wrong way round.'),
               ('Victor', 'The left column is easy to write because the checks are all the same shape.'),
               ('Ines', 'Compare this with that.'),
               ('Victor', 'Compare this with that. The right column has no shape at all.'),
               ('Ines', 'Read me the four.'),
               ('Victor', 'Would this embarrass us. Is this client about to leave. Does this '
                          'complaint sound worse than it is. Would Nora mind this.'),
               ('Ines', 'The last one is not a category. It is one person.'),
               ('Victor', 'It is one person, and it is the most useful entry on the board.'),
               ('Ines', 'Because it is the one you can actually ask somebody to do.'),
               ('Victor', 'Yes. The other three are things people do without being able to say how.')],
        a=[('How many entries are in each column?', 'about thirty on the left, four on the right'),
           ('Why was the left column quick to write?', 'because all the checks have the same shape'),
           ('What shape is that?', 'compare this with that'),
           ('What does Ines notice about the fourth entry?', 'that it is one person rather than a category'),
           ('Why is that entry the most useful?', 'because it is the one you can actually ask somebody to do')],
        b=[('The checks are all the same ____________.', 'shape'),
           ('The right column has no shape at ____________.', 'all'),
           ('It is one ____________.', 'person'),
           ('Things people do without being able to say ____________.', 'how')]),
d2=dict(title='It does not get cheaper',
        fig=(['Twice the volume, twice the checking?', 'For one column, no. For the other, yes.'],
             ['Then the second one caps us.', 'It caps us or we stop doing it.']),
        cap='Kenji and Victor, costing the next year.',
        lines=[('Kenji', 'If volume doubles next year, what happens to checking cost?'),
               ('Victor', 'The comparison checks barely move. The rule is the same for four thousand as for two.'),
               ('Kenji', 'And the judgement checks?'),
               ('Victor', 'They double, exactly, because each one is somebody reading something.'),
               ('Kenji', 'So the judgement column is the one that caps the business.'),
               ('Victor', 'It caps us, or we quietly do less of it per item and tell ourselves nothing changed.'),
               ('Kenji', 'Which is what has been happening for about a year.'),
               ('Victor', 'It is. Nobody decided it. The volume decided it.'),
               ('Kenji', 'Then I would rather decide it. Give me a number of items we will judge.'),
               ('Victor', 'Fourteen hundred a year, at six minutes each, is about two and a half days a month.'),
               ('Kenji', 'And which fourteen hundred?'),
               ('Victor', 'That is the part I have not solved, and it is the only part that matters.')],
        unresolved=True,
        a=[('What happens to comparison checks if volume doubles?', 'they barely move, because the rule is the same'),
           ('What happens to judgement checks?', 'they double exactly, because each is somebody reading something'),
           ('What has been happening for a year?', 'less judgement per item, without anybody deciding it'),
           ('What does Kenji want?', 'a decided number of items that will be judged'),
           ('What has Victor not solved?', 'which items those should be')],
        b=[('The rule is the same for four ____________ as for two.', 'thousand'),
           ('Each one is somebody ____________ something.', 'reading'),
           ('Nobody decided it. The ____________ decided it.', 'volume'),
           ('About two and a half ____________ a month.', 'days')]),

speak=[('Few or a few?',
        ['Student A: make four statements about your work using few, a few, little or a little.',
         'Student B: say whether each one was meant positively or negatively.',
         'Replace each with a number and see which meaning survives.']),
       ('Spoken specification: sort the checks',
        ['Choose work your team checks. Brief aloud which checks are comparisons and which are judgements.',
         'Your partner asks who could do each one after a week in the job.',
         'Anything they could not do after a week belongs in the right-hand column.']),
       ('Which fourteen hundred?',
        ['In pairs, decide how many items a week you could genuinely judge.',
         'Then decide which items those should be, and write the rule.',
         'Check whether your rule is itself a judgement. If it is, make it a comparison.'])],

ext_title='Attention is the thing that does not scale',
ext_fig=figs.unitcost('TWO KINDS OF CHECK, AT TWO VOLUMES',
                      [('Comparison, 1,900 items', 'about 0.01 EUR', 'near zero', '1,900'),
                       ('Judgement, 1,900 items', 'about 2.40 EUR', 'unchanged', '14')],
                      'The first row barely changes if volume doubles. The second row doubles exactly.'),
ext_fig_cap='The difference between the two rows is the whole economics of quality at volume.',
ext=[
 'Checks divide into two kinds, and the division is sharper and more consequential than it '
 'first appears. A comparison check asks whether two things agree: a total against an '
 'invoice, a date against a contract, a name against a client file. It has a fixed shape, '
 'it needs no knowledge of the client, and anybody can be taught to perform it in about four '
 'minutes.',
 'A judgement check asks something that has no second document behind it. Would this '
 'embarrass us. Is this client unhappy in a way the words do not say. Is the tone wrong for '
 'this particular reader on this particular week. These require somebody who has context, '
 'and they cannot be decomposed into comparisons without losing exactly the thing that makes '
 'them worth doing.',
 'The economic consequence is the point of this unit. Comparison checks are close to free at '
 'any volume, because the cost of running the same comparison again is almost nothing. '
 'Judgement checks cost a fixed amount of human attention per item, and that cost is '
 'identical whether the item is the first of the year or the four hundredth of the week.',
 'What follows is uncomfortable and almost universal. As volume rises, the proportion of '
 'output that receives a judgement check falls, because attention is fixed and output is '
 'not. This is not a decision anybody makes; it is an arithmetic consequence of growth, and '
 'the people inside it usually describe it as being busy rather than as a change in '
 'standards.',
 'The honest response has two halves. Apply every comparison check to everything, without '
 'sampling, because they cost almost nothing and they clear the whole of the left-hand '
 'column. Then decide explicitly which items receive attention, write the rule down, and '
 'accept that the rule will be a compromise. Choosing badly is bad. Not choosing means the '
 'volume chooses, and the volume has no view about what matters.'],
dp1=('Where attention goes',
     'Studies of inspection in high-volume settings generally find that the share of items '
     'receiving expert review declines as throughput rises, in the absence of an explicit '
     'rule allocating it.',
     'Source: general quality-management literature, 2026. Observed across several industries.'),
e_a=[('What does a comparison check ask?', 'whether two things agree'),
     ('Why can judgement checks not be decomposed into comparisons?', 'because doing so loses the thing that makes them worth doing'),
     ('Why are comparison checks nearly free at volume?', 'because running the same comparison again costs almost nothing'),
     ('What happens to judged output as volume rises?', 'it falls as a proportion, because attention is fixed'),
     ('What are the two halves of the honest response?', 'apply comparison checks to everything, and decide explicitly which items get attention')],
e_b=[('Comparison checks require knowledge of the client.', 'F'),
     ('A judgement check has a second document behind it.', 'F'),
     ('The fall in judged output is a decision somebody makes.', 'F'),
     ('People inside it usually describe it as being busy.', 'T'),
     ('Comparison checks should be sampled rather than universal.', 'F'),
     ('Not choosing means the volume chooses.', 'T')],

w_model=(
 'Purpose: apply the cheap checks everywhere and spend the expensive ones deliberately. '
 'Scope: all 1,870 monthly outputs for comparison checks; the judgement check applies to a '
 'named subset of 14 items a week. Inputs: the outputs, their source documents, and the '
 'judgement list dated 2 April. Criteria: every output passes all 6 comparison checks; the '
 '14 items are selected by rule — any output to a client who has complained in 90 days, '
 'any credit note over 500 euros, and any first letter to a new client. Done: 6 comparison '
 'results for every output, and 14 judgement reviews with a named reviewer. Fallback: if '
 'the rule selects more than 20 items in a week, review the 20 highest by value and record '
 'the number not reviewed.'),
w_fig=figs.split('WHERE EACH KIND OF CHECK BELONGS',
                 'Comparison — apply to everything',
                 ['total against invoice',
                  'date against contract',
                  'account against exclusions list',
                  'reference format'],
                 'Judgement — apply to a chosen few',
                 ['any client who complained in 90 days',
                  'any credit note over 500 euros',
                  'any first letter to a new client',
                  'anything Fatima flags by name']),
w_fig_cap='The right-hand column is a rule, not a feeling, which is what makes it survive a busy week.',
w_task='Sort your own checks into the two columns and write the selection rule.',
w_steps=['List every check your team performs, or should perform.',
         'For each, ask whether somebody who arrived yesterday could do it with two documents.',
         'Apply everything in the left column to every item, without sampling.',
         'Write a rule selecting which items get the right-hand column.',
         'Make sure that rule is itself a comparison, not a judgement.'],
w_bank=['Every output passes … comparison checks.',
        'A judgement review applies to any output that …',
        'The reviewer is named as …', 'If the rule selects more than … , then …',
        'This rule is reviewed when …'],
w_check=['Could a new colleague perform every check in your left-hand column?',
         'Is every comparison check applied to everything, rather than sampled?',
         'Is your selection rule a comparison, so it cannot be argued with weekly?',
         'Does the rule say what happens when it selects too many?'],

t_title='Checks a machine can do, and checks only a person can',
t_fig=figs.handover('WHERE THE PERSON STILL GOES',
                    ['6 comparisons on all 1,870', 'Select 14 by rule', 'Present with sources'],
                    'Fatima judges 14 items, 6 minutes each',
                    'Eighty-four minutes a week, spent on purpose.'),
t_fig_cap='The left-hand boxes exist so that the fourth box is eighty-four minutes and not eighty hours.',
t_body=[
 'Sort your checks with one question: could somebody who started yesterday do this, given '
 'the two documents? If yes, it is a comparison and it should be applied to everything, '
 'because the marginal cost is close to zero and partial application of a free check is '
 'simply a decision to know less for no saving.',
 'If no, you have a judgement check, and the governing fact about it is that it costs the '
 'same per item for ever. No amount of volume makes the four-hundredth letter cheaper to '
 'read than the first. This means the number of judgement checks you perform is capped by '
 'the attention available, and that cap is real whether or not anybody has acknowledged it.',
 'So write the selection rule, and make sure the rule itself is a comparison. "Anything that '
 'looks sensitive" is a judgement, which means somebody must exercise judgement to decide '
 'what gets judgement, and the attention runs out before the work starts. "Any client who '
 'has complained in ninety days" is a comparison, applied by anybody, in a second.'],
t_say=[('Sort by the test: ', 'Could somebody who started yesterday do this, with two documents?'),
       ('Apply the cheap ones everywhere: ', 'All six comparisons run on all 1,870 outputs.'),
       ('Select by rule: ', 'Judgement goes to any client who has complained in 90 days.')],
t_bound=('A comparison check confirms agreement between two documents and nothing beyond it. '
         'A letter can pass every comparison check in the left-hand column — right total, '
         'right date, right account, right reference — and still be the wrong letter to send '
         'to that client in that week, and no accumulation of comparisons will ever reach '
         'that.'),
t_a=[('Could somebody who started ____________ do this, with two documents?', 'yesterday'),
     ('All six comparisons run on all 1,870 ____________.', 'outputs'),
     ('Judgement goes to any client who has ____________ in 90 days.', 'complained'),
     ('The marginal cost of a comparison is close to ____________.', 'zero'),
     ('No volume makes the four-hundredth letter ____________ to read.', 'cheaper'),
     ('Make sure the selection rule itself is a ____________.', 'comparison')],
t_b_rubric='Say which kind of check each is, and where it should be applied.',
t_b=[('Does the amount match the ledger line?', 'comparison; apply to every output'),
     ('Is the tone right for this client this week?', 'judgement; apply to the selected few'),
     ('Is the reference the right number of characters?', 'comparison; apply to every output'),
     ('Would this letter embarrass us?', 'judgement; apply only where the rule selects it')],

case=dict(
 title='Decision Clinic · Which fourteen?',
 brief=[
  'Arclight can afford about fourteen judgement reviews a week, which is roughly ninety '
  'minutes of Fatima’s time. There are 460 outputs a week that a reasonable person might '
  'want judged.',
  'Victor has proposed a rule: any client who has complained in ninety days, any credit '
  'note over five hundred euros, any first letter to a new client. It selects between nine '
  'and seventeen items a week.',
  'Fatima objects to it, not because the rule is wrong but because it selects nothing she '
  'would have chosen. The items she worries about are the ones where a client has gone '
  'quiet, which the rule cannot see.'],
 exhibit=figs.datatable('WHAT THE RULE SELECTS, AND WHAT FATIMA WOULD',
                        ['', 'Rule selects', 'Fatima would select', 'Overlap'],
                        [['complained in 90 days', '4', '4', '4'],
                         ['credit note over 500', '6', '1', '1'],
                         ['first letter, new client', '4', '2', '2'],
                         ['client gone quiet', '0', '5', '0'],
                         ['total', '14', '12', '7']]),
 exhibit_cap='Seven items in common out of fourteen. The fourth row is the disagreement.',
 exhibit_note='"Gone quiet" has no definition. Fatima identifies these items by recognising '
              'that a client who usually writes weekly has not written for three weeks.',
 voices=[('Victor Sandoval', 'operations and quality',
          'The rule is a comparison, which is why it survives a busy week. Fatima’s list is '
          'a judgement about which items need judgement, and that is the thing we cannot '
          'afford at volume.'),
         ('Fatima Zahra', 'client manager',
          'Five of my twelve are clients who have stopped writing. Every client we have lost '
          'in two years stopped writing first. The rule cannot see the most reliable signal '
          'we have.'),
         ('Marta Olsen', 'risk and liability',
          'Then it is not a judgement, it is a comparison nobody has written down. Last '
          'contact more than twenty-one days ago is a date subtraction. Fatima is doing '
          'arithmetic and calling it instinct.')],
 steps=[('Find it', 'How many items do the two lists have in common?'),
        ('Compare it', 'What does a comparison rule buy, and what does it miss?'),
        ('Infer it', 'Why does Marta say "gone quiet" is not really a judgement?'),
        ('Weigh it', 'A rule that survives a busy week against the most reliable signal available.'),
        ('Decide', 'What is the selection rule, and what remains unselectable?')],
 analysis=[('Find it. How many items overlap?', 'seven of the fourteen'),
           ('Compare it. What does the rule miss entirely?', 'the five clients who have gone quiet'),
           ('Infer it. What is Marta’s observation?', 'that "gone quiet" is a date subtraction, which is a comparison'),
           ('Weigh it. Why does Victor resist Fatima’s list?', 'because selecting by judgement consumes the attention before any judging happens'),
           ('Decide. How can both positions be satisfied?', 'by converting "gone quiet" into a written comparison and adding it to the rule')],
 decision='Write the final selection rule.',
 decision_steps=['List the comparisons that select an item, each one checkable by anybody.',
                 'Say what happens when the rule selects more items than can be reviewed.',
                 'Say what, if anything, remains unselectable and who holds it.',
                 'Say when the rule is reviewed, and against what evidence.'],
 bank=['A judgement review applies to any output where …',
       'If more than … are selected, …', 'Items that no rule can select remain …',
       'This rule is reviewed every … , against …',
       'The reviewer is … , by name.'],
 outcome='"Gone quiet" became a fourth comparison: last inbound contact more than twenty-one '
         'days ago for a client who averaged weekly contact. It selects three to six items a '
         'week. Fatima kept a discretionary allowance of two items a week she could add for '
         'any reason, which she used eleven times in six months. Three of those eleven were '
         'clients who later raised something significant, and none of the three would have '
         'been selected by any of the four rules.',
 outcome_q=[('What did converting "gone quiet" into a comparison achieve?', 'it brought the most reliable signal into a rule anybody could apply'),
            ('What did the discretionary allowance turn out to be worth?', 'three significant findings in eleven uses, none of which any rule had selected')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Set up the checking',
 task=['This is the brief Victor wrote for the first month of checking, after the sorting '
       'exercise but before the two columns existed.',
       'It treats checking as a single activity with a single budget. The result was that '
       'the cheap checks were sampled, because everything was sampled, and the expensive '
       'ones were applied wherever somebody had time.'],
 draft=['Set up checking across the outputs each week.',
        'Do a sensible amount, given what we can afford.',
        'Check the important things on each one.',
        'Have somebody read the ones that need a closer look.',
        'Spread the effort across the different clients.',
        'See how much of it we can keep up.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief that treats a free check and an expensive one as the same activity.',
 asked=['Comparisons applied to everything',
        'Judgement selected by a written rule',
        'A stated weekly judgement capacity'],
 back=['Comparisons sampled at 5 per cent',
       'Judgement applied wherever there was time',
       'No record of what was skipped'],
 gap='Treating all checking as one budget meant the near-free checks were rationed alongside '
     'the expensive ones, and "the ones that need a closer look" required a judgement before '
     'any judging could begin.',
 back_cap='Five per cent of the cheap checks and an unknown proportion of the expensive ones.',
 back_note='Comparison checks cost about a hundredth of a euro each. They were sampled at '
           'five per cent for four weeks because the brief did not distinguish them from '
           'the checks that cost two euros forty.',
 diagnosis=[('[1] "a sensible amount" — of which kind of check?', 'unscoped set'),
            ('[2] "what we can afford" — afford in money or in attention?', 'hidden assumption'),
            ('[3] "the important things" — important by what test?', 'unstated criterion'),
            ('[4] "the ones that need a closer look" — decided by whom?', 'unstated criterion'),
            ('[5] "spread the effort across the clients" — which clients, how?', 'unscoped set'),
            ('[6] "how much we can keep up" — keep up implies a steady state nobody has defined', 'hidden assumption')],
 rewrite='Rewrite the brief so that comparison checks run on everything and judgement checks '
         'are selected by a rule anybody could apply.',
 scaffold=['Why the two kinds of check have different economics',
           'Which outputs get comparisons, and which subset gets judgement',
           'The outputs, their sources, and the dated judgement list',
           'The comparisons by name, and the rule that selects items for judgement',
           'What comes back for each kind, and the named reviewer',
           'What to do when the selection rule produces too many items'],
 bank=['Apply … to every output, because …',
       'Comparisons: all … outputs. Judgement: any output where …',
       'Work from … and the judgement list dated …',
       'Every output passes … ; … reviews the selected items.',
       'Return … and … , by … each week.',
       'If more than … items are selected, …'],
 check=['Are comparison checks applied to everything, without sampling?',
        'Is the judgement selection rule a comparison anybody could apply?',
        'Is there a named reviewer rather than "somebody"?',
        'Does the brief say what happens when too many items are selected?'],
 model=['Apply the near-free checks everywhere and spend the expensive attention on purpose',
        'All 1,870 monthly outputs receive comparison checks; judgement review applies to the items the rule selects, typically 14 a week',
        'The outputs, the source document named against each, and the judgement list dated 2 April',
        'Every output passes all 6 comparison checks; judgement review goes to any output to a client who has complained within 90 days, any credit note over 500 euros, any first letter to a new client, and any client whose last inbound contact was more than 21 days ago',
        '6 comparison results for every output, and a judgement review for each selected item with Fatima named as reviewer, by 16:00 each Friday',
        'If the rule selects more than 20 items in a week, review the 20 highest by value and record the number not reviewed'],
 cost='4 weeks during which checks costing a hundredth of a euro were rationed at 5 per cent '
      'alongside checks costing 2.40 euros, about 1,700 outputs left uncompared for no saving '
      'at all, and no record of which items had received attention.'),

rev_fig=figs.split('FEW AND A FEW',
                   'Negative — almost none',
                   ['Few clients complained.',
                    'There is little evidence.',
                    'Hardly anything comes back.',
                    'Barely any of it is judged.'],
                   'Positive — some',
                   ['A few clients complained.',
                    'There is a little evidence.',
                    'A few things come back.',
                    'Some of it is judged.']),
rev_fig_cap='One word changes the sentence from a complaint into a reassurance.',
rev=dict(
 read=[('The dividing question for a check is whether', ['it is important', 'a new colleague could do it with two documents', 'it is quick', 'a client asked for it'], 1),
       ('"Few clients complained" means', ['some did', 'almost none did', 'all did', 'nobody knows'], 1),
       ('Judgement checks cost', ['less per item at volume', 'the same per item for ever', 'nothing', 'more each time'], 1),
       ('In the Clinic, what happened to "gone quiet"?', ['it was dropped', 'it became a comparison', 'it stayed a judgement', 'it was automated'], 1)],
 listen_text='One question sorts your checks. Could somebody who started yesterday do this, '
             'given the two documents? If yes, apply it to everything, because it costs '
             'almost nothing and sampling a free check is a decision to know less for no '
             'saving. If no, it costs the same per item for ever, so write a rule that '
             'selects which items get it, and make sure that rule is itself a comparison.',
 listen=[('Could somebody who started ____________ do this?', 'yesterday'),
         ('Sampling a free check is a decision to know ____________.', 'less'),
         ('It costs the same per item for ____________.', 'ever'),
         ('Make sure that rule is itself a ____________.', 'comparison')],
 speak=['Name six checks at your work. Your partner sorts them into the two columns.',
        'Find the one you disagree about and say what would settle it.'],
 write='Write a selection rule for judgement checks that anybody could apply in a second.',
 vocab=[('Understanding arrived at without conscious reasoning is ____________.', 'intuition'),
        ('Understood without being stated is ____________.', 'tacit'),
        ('Awareness of how something will be received is ____________.', 'sensitivity'),
        ('Experienced enough to have met most cases before is ____________.', 'seasoned'),
        ('A small signal prompting a response is a ____________.', 'cue')],
 gram=[('____________ clients complained — only two in two years.', 'Few'),
       ('There is ____________ evidence either way.', 'little'),
       ('____________ anything comes back from clients.', 'Hardly'),
       ('The queue was ____________ examined before release.', 'barely'),
       ('We have ____________ little time before Friday.', 'a')]),

found=['Sort six checks at your work into comparisons and judgements.',
       'Apply one free check to everything for a week and see what it finds.',
       'Work out how many items a week your team could genuinely judge.',
       'Turn one thing you call instinct into a comparison somebody else could make.'],
end_line='Nobody decided that less of it would be judged. The volume decided.',
end_next='Next: Adding Without Changing',
)
