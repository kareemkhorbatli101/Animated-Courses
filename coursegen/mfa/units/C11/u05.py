# -*- coding: utf-8 -*-
import figs

U = dict(
num=5, title='Writing for People Who Are Not Diplomats',
gram='degree and intensity: by far, nowhere near, marginally',
ai='public diplomacy: writing for an audience that is not diplomatic',
strap='CEFR C1 · Grammar: degree and intensity · AI: writing for non-diplomats',
cando=['grade degree precisely with by far, nowhere near and marginally',
       'avoid intensifiers that carry no quantity',
       'turn a diplomatic sentence into one a general reader can act on',
       'say what plain writing costs a ministry and what it buys',
       'write a tasking that forbids the removal of a necessary qualification'],
hero=('NOBODY OUTSIDE THE BUILDING READ IT',
      ['The travel advice was accurate, complete and eleven hundred words long.',
       'Of the people who opened it, four in five left within nine seconds.'],
      [(730, 'teal', 'long'), (1390, 'purple', 'short'),
       (2050, 'orange', 'long'), (2690, 'blue', 'short')]),
hero_cap='Press and Public Diplomacy, with the figures nobody had asked for before.',

warm=['What does your organisation publish that the public does not read?',
      'What is lost when a careful sentence is made simple?',
      'How would you know whether anybody read what you wrote?'],
read=[
 'Public diplomacy is tested on the pages a citizen chooses to open. The Ministry’s travel advice for Lysmark ran to eleven hundred words, had been cleared by '
 'four sections, and was accurate in every particular. It said, among other things, that '
 'travellers should exercise a high degree of caution in the border districts.',
 'Yara Ibrahim had the page instrumented for the first time in March. Four in five readers '
 'left within nine seconds. The median time on the page was eleven seconds, which is long '
 'enough to read about thirty words.',
 'The thirty words at the top did not include the border districts, because the page opened '
 'with two paragraphs on the Ministry’s consular network and the circumstances in which '
 'assistance can be provided.',
 'The rewrite took the same content and inverted it. Four lines at the top: do not travel to '
 'the three named border districts; the rest of the country is safe for ordinary travel; carry '
 'your passport; here is the number to call. Then the eleven hundred words, unchanged, '
 'underneath.',
 'Rana Deeb objected to one sentence in the rewrite. The original had said that assistance may '
 'be limited in remote areas; the rewrite said we may not be able to reach you quickly. She '
 'argued that the second is stronger than the evidence, that there are areas the Ministry has '
 'in fact reached within a day, and that a traveller who cancels a journey on the strength of '
 'it has been misled. Yara argued that the original was read by nobody and therefore misled '
 'everybody. The sentence now reads: in the three named districts we may not be able to reach '
 'you for several days.'],
c_a=[('How long was the travel advice, and how many sections had cleared it?', 'eleven hundred words, cleared by four sections'),
     ('What did the instrumentation show?', 'four in five readers left within nine seconds; median eleven seconds'),
     ('What did the opening thirty words contain?', 'two paragraphs on the consular network and when assistance can be provided'),
     ('What does the rewrite put at the top?', 'do not travel to three named districts, the rest is safe, carry your passport, and the number'),
     ('What was Rana’s objection?', 'that "we may not be able to reach you quickly" was stronger than the evidence'),
     ('What does the sentence now say?', 'in the three named districts we may not be able to reach you for several days')],
c_b=[('The original advice was inaccurate.', 'F'),
     ('Eleven seconds is enough for about thirty words.', 'T'),
     ('The rewrite deleted the eleven hundred words.', 'F'),
     ('Rana objected to the whole rewrite.', 'F'),
     ('Yara argued the original misled everybody.', 'T'),
     ('The final sentence names the districts.', 'T')],
c_c=[('Travellers should exercise a high degree of ____________.', 'caution'),
     ('The median time on the page was eleven ____________.', 'seconds'),
     ('The circumstances in which assistance can be ____________.', 'provided'),
     ('Then the eleven hundred words, unchanged, ____________.', 'underneath'),
     ('A traveller who ____________ a journey on the strength of it has been misled.', 'cancels'),
     ('Read by nobody and therefore ____________ everybody.', 'misled')],
c_d=[('The original failed because it was ( inaccurate / unread ).', ['inaccurate', 'unread'], 1),
     ('How long did four in five readers stay?', ['nine seconds', 'eleven minutes', 'two minutes', 'thirty seconds'], 1),
     ('How many districts are named?', ['one', 'three', 'four', 'eleven'], 1),
     ('What happened to the long version?', ['deleted', 'kept underneath', 'shortened', 'translated'], 1),
     ('What was the compromise sentence?', ['assistance may be limited', 'we may not be able to reach you for several days', 'do not travel', 'carry your passport'], 1)],
c_e=('Match each expression of degree to what it states.',
     [('by far the largest', 'the largest, with a wide margin'),
      ('nowhere near enough', 'short by a wide margin'),
      ('marginally higher', 'higher by a small amount'),
      ('considerably longer', 'longer by an amount worth stating'),
      ('somewhat safer', 'safer by an unstated small amount'),
      ('no safer at all', 'not safer to any degree')],
     ['the largest, with a wide margin', 'short by a wide margin', 'higher by a small amount',
      'longer by an amount worth stating', 'safer by an unstated small amount',
      'not safer to any degree']),

v_fig_title='WRITING FOR THE PUBLIC',
v_fig=[('doc', 'an explainer'), ('bulb', 'a key message'), ('pin', 'a call to action'),
       ('book', 'a jargon term'), ('chart', 'a reading age'), ('key', 'a concrete example')],
v_fig_cap='Six words for the difference between publishing and being read.',
vocab=[
 ('public diplomacy', 'the work of explaining a state’s position to foreign publics'),
 ('a general audience', 'readers with no professional knowledge of the subject'),
 ('a specialist audience', 'readers who work in the field'),
 ('a reading age', 'the level of schooling a text assumes'),
 ('a jargon term', 'a word used precisely inside a profession and opaquely outside it'),
 ('an acronym', 'a word formed from the first letters of a phrase'),
 ('a technical term explained', 'a necessary term with its meaning given on first use'),
 ('a concrete example', 'a particular case given to make a general statement usable'),
 ('an abstraction', 'a statement with no particular case in it'),
 ('a removed passive', 'a passive construction rewritten with its actor named'),
 ('a headline claim', 'the single statement a reader is most likely to take away'),
 ('a key message', 'a point the writer intends every reader to receive'),
 ('a call to action', 'the sentence telling the reader what to do'),
 ('an explainer', 'a short piece written to make something understood'),
 ('a frequently asked question', 'a question answered in advance because many ask it'),
 ('a social post', 'a short published item on a public platform'),
 ('a press release', 'a statement issued to journalists for publication'),
 ('a web page', 'a published page on an institution’s site'),
 ('a caption', 'the words published beneath an image'),
 ('a visual aid', 'a picture or diagram used to carry part of the meaning')],
v_a=[('The level of schooling a text assumes is a ____________.', 'reading age'),
     ('The single statement a reader is most likely to take away is a ____________.', 'headline claim'),
     ('The sentence telling the reader what to do is a ____________.', 'call to action'),
     ('A word used precisely inside a profession and opaquely outside it is a ____________.', 'jargon term'),
     ('A particular case given to make a general statement usable is a ____________.', 'concrete example'),
     ('A short piece written to make something understood is an ____________.', 'explainer'),
     ('A passive construction rewritten with its actor named is a ____________.', 'removed passive'),
     ('A question answered in advance because many ask it is a ____________.', 'frequently asked question')],
v_b=[('Public diplomacy is the work of explaining', 'a state’s position to foreign publics.'),
     ('A general audience is readers with', 'no professional knowledge of the subject.'),
     ('An abstraction is a statement with', 'no particular case in it.'),
     ('A caption is the words published', 'beneath an image.'),
     ('A visual aid is a picture or diagram used', 'to carry part of the meaning.')],

g_title='Grammar: degree and intensity',
g_rule=['By far strengthens a superlative or comparative: by far the largest, by far the '
        'safest.',
        'Nowhere near denies a comparison by a wide margin: nowhere near enough.',
        'Marginally and slightly state a small amount; considerably and substantially a large '
        'one.',
        'Very, really and extremely carry no quantity and should be replaced by a figure or a '
        'graded phrase.'],
g_fig=('LOOSE',
       ['The situation is very serious.',
        'Travel is extremely dangerous there.',
        'Assistance is really limited.',
        'The risk is quite high.'],
       'PRECISE',
       ['Three districts are closed to travellers; the rest of the country is open.',
        'By far the greatest risk is on the 2 border roads, which are mined.',
        'In the 3 named districts we may not be able to reach you for several days.',
        'The risk in the capital is nowhere near that in the border districts.'],
       'four intensifiers carrying no quantity at all',
       'four statements in which the degree is stated or bounded'),
g_fig_cap='Very is a word that asks the reader to supply a quantity, and they will supply the '
          'wrong one.',
g_a=[('____________ far the greatest risk is on the 2 border roads.', 'By'),
     ('The risk in the capital is ____________ near that in the border districts.', 'nowhere'),
     ('Conditions are ____________ better than in March: 2 roads have reopened.', 'marginally'),
     ('The delay is ____________ longer in August: 21 days against 5.', 'considerably'),
     ('Three districts are ____________ to travellers.', 'closed'),
     ('We may not be able to reach you for ____________ days.', 'several'),
     ('The advice is ____________ unchanged since January.', 'substantially'),
     ('The situation is no ____________ than last week.', 'worse'),
     ('The border crossing is ____________ open, with queues of 6 hours.', 'still')],
g_b=[('By far strengthens ( a superlative / an intensifier ).', ['a superlative', 'an intensifier'], 0),
     ('Nowhere near denies a comparison by', ['a small margin', 'a wide margin', 'one unit', 'nothing'], 1),
     ('Which states a small amount?', ['considerably', 'marginally', 'by far', 'nowhere near'], 1),
     ('Which carries no quantity?', ['marginally', 'very', 'by far', 'nowhere near'], 1),
     ('Replace very with', ['really', 'a figure or a graded phrase', 'extremely', 'quite'], 1),
     ('Which is precise?', ['The risk is quite high.', 'By far the greatest risk is on the 2 border roads.', 'Travel is extremely dangerous.', 'Assistance is really limited.'], 1)],

d1=dict(title='Nine seconds',
        fig=(['Eleven hundred words.', 'Read for nine seconds.'],
             ['By four in five readers.', 'Which is about thirty words.']),
        cap='Yara Ibrahim and Rana Deeb, with the page figures.',
        lines=[('Yara', 'Four in five readers leave the travel advice within nine seconds. The '
                        'median is eleven.'),
               ('Rana', 'Eleven seconds is thirty words.'),
               ('Yara', 'Thirty words, and our first thirty are about the consular network and '
                        'the circumstances in which assistance can be provided.'),
               ('Rana', 'Which is the part four sections argued about.'),
               ('Yara', 'For three weeks. Nobody has ever read it. The border districts are in '
                        'paragraph six.'),
               ('Rana', 'So the page is accurate and the reader leaves knowing nothing.'),
               ('Yara', 'Worse than nothing. They leave having seen a page of official prose, '
                        'which tells them the Ministry has published something, and they '
                        'reasonably conclude that if there were a serious problem it would have '
                        'said so at the top.'),
               ('Rana', 'That is the inference I would draw myself.'),
               ('Yara', 'So the rewrite puts four lines at the top: do not travel to the three '
                        'named districts, the rest is safe for ordinary travel, carry your '
                        'passport, here is the number.'),
               ('Rana', 'And the eleven hundred words?'),
               ('Yara', 'Underneath, unchanged, every clearance intact. I am not asking any '
                        'section to give up a word. I am asking for four lines above them.'),
               ('Rana', 'Then I have no objection to the structure. My objections will be about '
                        'what the four lines say, and there will be objections, because four '
                        'lines cannot carry a qualification.')],
        a=[('What proportion leave within nine seconds?', 'four in five'),
           ('What do the first thirty words cover?', 'the consular network and when assistance can be provided'),
           ('Where are the border districts?', 'in paragraph six'),
           ('What inference does a reader draw?', 'that if there were a serious problem it would have been at the top'),
           ('What does the rewrite keep?', 'the eleven hundred words underneath, unchanged')],
        b=[('Eleven seconds is thirty ____________.', 'words'),
           ('For three ____________.', 'weeks'),
           ('Every clearance ____________.', 'intact'),
           ('Four lines cannot carry a ____________.', 'qualification')]),
d2=dict(title='Stronger than the evidence',
        fig=(['Assistance may be limited.', 'Nobody knows what that means.'],
             ['We may not reach you quickly.', 'And that is stronger than the evidence.']),
        cap='Rana and Yara, on one sentence.',
        lines=[('Rana', 'Your line says we may not be able to reach you quickly. The original '
                        'said assistance may be limited in remote areas.'),
               ('Yara', 'The original means nothing to a reader. Limited how? By what?'),
               ('Rana', 'I agree that it means nothing. Your version means something and I am '
                        'not sure it is true. We have reached people in two of those districts '
                        'within a day.'),
               ('Yara', 'In how many cases?'),
               ('Rana', 'Four, over three years. In one case it took eleven days.'),
               ('Yara', 'Then the honest sentence is about several days and not about quickly, '
                        'and it names the districts.'),
               ('Rana', 'In the three named districts we may not be able to reach you for '
                        'several days. I can defend that. What I cannot defend is a sentence '
                        'that makes somebody cancel a journey they could safely have made.'),
               ('Yara', 'And I cannot defend a sentence nobody reads, which means everybody '
                        'makes the journey without knowing anything. We are both choosing who '
                        'gets misled.'),
               ('Rana', 'That is the exact position and I do not think it has a solution. Four '
                        'lines cannot carry a qualification, and the qualification is sometimes '
                        'the content.'),
               ('Yara', 'My answer is that the qualification goes in the eleven hundred words '
                        'and the four lines say less than the truth.'),
               ('Rana', 'Which is an answer and not a good one, because the eleven hundred words '
                        'are read by nobody and we have just established it. I would rather '
                        'record that we disagree about this one sentence than pretend the '
                        'structure resolves it.')],
        a=[('What did the original sentence say?', 'that assistance may be limited in remote areas'),
           ('What is Rana’s evidence?', 'four cases over three years, one of which took eleven days'),
           ('What sentence do they settle on?', 'in the three named districts we may not be able to reach you for several days'),
           ('What does Yara say they are both doing?', 'choosing who gets misled'),
           ('Is the question resolved?', 'no; both record that they disagree about the sentence')],
        b=[('Limited how? By ____________?', 'what'),
           ('Four, over three ____________.', 'years'),
           ('We are both choosing who gets ____________.', 'misled'),
           ('The qualification is sometimes the ____________.', 'content')],
        unresolved=True),

speak=[('State the degree',
        ['Student A: make six claims of degree about your own field.',
         'Student B: replace every very, really and extremely with a figure or a graded phrase.',
         'Say which claims survived.']),
       ('Thirty words',
        ['Take something your office publishes.',
         'Say the thirty words that should be at the top.',
         'Your partner says what they would do after hearing only those.']),
       ('Who gets misled',
        ['Describe a careful sentence from your work that a general reader would misread.',
         'Write a shorter version aloud.',
         'Say who is misled by each.'])],

ext_title='Plain writing is read; a careful page that nobody reads has misled its whole audience',
ext_fig=figs.datatable('THE TRAVEL ADVICE PAGE',
                       ['', 'Before', 'After'],
                       [['words', '1,100', '1,100 plus 4 lines'],
                        ['words above the fold', '~90, on the network', '~45, on the districts'],
                        ['median time on page', '11 seconds', '34 seconds'],
                        ['readers leaving under 9 seconds', '4 in 5', '2 in 5'],
                        ['readers reaching the district names', 'not measured, near 0', '3 in 5'],
                        ['sections required to give up text', '4', '0']]),
ext_fig_cap='Nothing was removed. Four lines were added above it, and three in five readers now '
            'reach the thing that could kill them.',
ext=[
 'A ministry publishes for two audiences and writes for one. Travel advice, public statements '
 'and explanatory pages are cleared by sections whose professional standard is accuracy and '
 'completeness, and the result is correct, exhaustive and written in the register of an '
 'institution talking to itself.',
 'The figures, where anybody troubles to collect them, are consistent and brutal. Four in five '
 'readers of a travel advice page leave within nine seconds, which is enough for about thirty '
 'words; and the thirty words at the top of a cleared page are usually about the ministry '
 'rather than about the reader, because the opening is where institutional care accumulates.',
 'A reader who leaves after nine seconds has not received nothing. They have received the '
 'impression that the ministry has published something and that nothing at the top looked '
 'alarming, from which they reasonably infer that there is no serious problem. An unread '
 'warning is not neutral; it is a reassurance.',
 'The structural fix is cheap and should be taken first, because it costs no section anything: '
 'put four lines at the top saying what to do, and leave the cleared text underneath '
 'unchanged. Do not travel to the three named districts. The rest of the country is safe for '
 'ordinary travel. Carry your passport. Here is the number. Three in five readers then reach '
 'the district names, where almost none did before, and no clearance has been reopened.',
 'What the fix does not resolve is the sentence in which the qualification is the content. '
 'Assistance may be limited in remote areas is unreadable and true; we may not be able to '
 'reach you quickly is readable and stronger than the evidence, and a traveller who cancels a '
 'journey on it has been misled by a ministry that was trying to be clear. Both sides of this '
 'argument are choosing who gets misled, and the usual answer, that the qualification lives in '
 'the long text, is an answer only if somebody reads the long text. A section that has just '
 'measured its readers knows that nobody does, which makes the honest course to put a bounded '
 'figure in the short version wherever one exists, and to record a disagreement where none '
 'does.'],
dp1=('Public diplomacy and plain writing',
     'Foreign ministry communication teams instrumented published advice pages in 2025 and '
     'restructured them around short action-first summaries, retaining cleared text below '
     'rather than rewriting it.',
     'Source: reported practice in diplomatic public communication, 2025–2026.'),
e_a=[('What two audiences does a ministry publish for?', 'a general public and itself, and it writes for itself'),
     ('What do the figures show?', 'four in five readers leave within nine seconds, which is about thirty words'),
     ('Why is an unread warning not neutral?', 'because the reader infers from a calm opening that there is no serious problem'),
     ('What is the cheap structural fix?', 'four action lines at the top and the cleared text unchanged underneath'),
     ('What does the fix not resolve?', 'the sentence in which the qualification is the content')],
e_b=[('Cleared pages are usually inaccurate.', 'F'),
     ('Thirty words is about nine seconds of reading.', 'T'),
     ('An unread warning is neutral.', 'F'),
     ('The fix requires sections to give up text.', 'F'),
     ('A bounded figure is preferable in a short version.', 'T'),
     ('The qualification problem is solved by the long text.', 'F')],

w_model=(
 'Purpose: rewrite the opening of the travel advice so that a reader who stays 10 seconds '
 'knows what to do, without altering the cleared text. Scope: the first 4 lines of each advice '
 'page; the cleared text below is out of scope and is not to be edited, shortened or '
 'reordered. Inputs: the cleared text, the named districts, and the published emergency '
 'number. Criteria: state in no more than 45 words what not to do, what is safe, what to carry '
 'and whom to call; name every district by name and give no general geographical description; '
 'where the cleared text contains a qualification that changes the advice, carry it into the 4 '
 'lines with a bounded figure, and where no figure exists, leave the advice in the cleared '
 'text and say see below; use no intensifier that carries no quantity. Done: 4 lines of no '
 'more than 45 words per page, with the cleared text unchanged, for 31 pages by the end of the '
 'month. Fallback: where a qualification cannot be bounded and cannot be omitted without '
 'misleading, refer the page to the drafting section rather than choosing.'),
w_fig=figs.spec_card('THE TASKING FOR AN ADVICE OPENING',
                     [('Purpose', 'a reader who stays 10 seconds knows what to do'),
                      ('Scope', 'the first 4 lines; the cleared text untouched'),
                      ('Inputs', 'the cleared text, the districts, the emergency number'),
                      ('Criteria', '45 words; districts named; bounded qualifications; no empty intensifiers'),
                      ('Done', '4 lines on 31 pages, cleared text unchanged, by month end'),
                      ('Fallback', 'unboundable qualification: refer, do not choose')]),
w_fig_cap='Where no figure exists, leave the advice below and say see below: the one honest way to be short.',
w_task='Write a tasking for the opening of something your office publishes.',
w_steps=['Say what a reader must know after ten seconds.',
         'Protect the cleared text explicitly.',
         'Put a word limit on the opening.',
         'Require qualifications to be bounded or deferred.',
         'Say what happens where a qualification can be neither.'],
w_bank=['Rewrite … so that a reader who stays … knows … , without …',
        'Cover … ; … is out of scope and is not to be …',
        'Work from … , … and …',
        'State in no more than … what … ; name … and give no … ; where … changes the advice, carry it … , and where no figure exists, … ; use no …',
        'Where a qualification cannot be … and cannot be … , refer … rather than …'],
w_check=['Is the cleared text protected in words?',
         'Is the opening capped in words?',
         'Must a carried qualification have a figure?',
         'Is referral required where it cannot be bounded?'],

t_title='Writing for an audience that is not diplomatic',
t_fig=figs.split('A CLEARED PAGE',
                 'What it achieves',
                 ['accuracy in every particular',
                  'completeness',
                  'four sections’ agreement',
                  'a defensible record'],
                 'What it does not achieve',
                 ['a reader who knows what to do',
                  'the district names in 30 words',
                  'anything in 9 seconds',
                  'a warning that is read as a warning']),
t_fig_cap='The left column is why the page exists. The right column is why it fails.',
t_body=[
 'Public diplomacy writes for people who are not diplomats, and everything a ministry publishes is cleared by sections whose standard is accuracy and '
 'completeness, and the result is correct, exhaustive and written in the register of an '
 'institution addressing itself. Where anybody measures, the readers leave in nine seconds, '
 'which is thirty words, and the thirty words at the top of a cleared page are usually about '
 'the ministry.',
 'That reader has not received nothing. They have seen official prose with nothing alarming at '
 'the top and inferred, reasonably, that there is no serious problem. An unread warning is not '
 'neutral; it functions as a reassurance, which is by far the worst outcome available.',
 'Take the structural fix first because it costs no section a word: four lines above the '
 'cleared text saying what not to do, what is safe, what to carry and whom to call, with the '
 'districts named. Then face the sentence the fix cannot solve, which is the one where the '
 'qualification is the content. Assistance may be limited in remote areas is true and '
 'unreadable; we may not be able to reach you quickly is readable and stronger than the '
 'evidence. Put a bounded figure in the short version where one exists — we may not be able '
 'to reach you for several days — and where none exists, leave the advice below and say so, '
 'and record the disagreement rather than resolving it by rhetoric.'],
t_say=[('Lead with the action: ', 'Do not travel to the 3 named districts.'),
       ('Bound the qualification: ', 'We may not be able to reach you for several days.'),
       ('Protect the record: ', 'The cleared text is unchanged below.')],
t_bound=('Plain writing can carry an instruction and a bounded figure. It cannot carry a '
         'qualification that has no figure, and shortening such a sentence makes it either '
         'unreadable or stronger than the evidence. The long text does not solve this, because '
         'the measurement that justified the rewrite is the same measurement showing that '
         'nobody reads the long text.'),
t_a=[('Do not travel to the 3 named ____________.', 'districts'),
     ('We may not be able to reach you for several ____________.', 'days'),
     ('The cleared text is ____________ below.', 'unchanged'),
     ('An unread warning functions as a ____________.', 'reassurance'),
     ('The thirty words at the top are usually about the ____________.', 'Ministry'),
     ('Stronger than the ____________.', 'evidence')],
t_b_rubric='Rewrite each so that the degree is stated or bounded.',
t_b=[('The situation is very serious.', 'three districts are closed to travellers; the rest of the country is open'),
     ('Travel is extremely dangerous there.', 'by far the greatest risk is on the two border roads, which are mined'),
     ('Assistance is really limited.', 'in the three named districts we may not be able to reach you for several days'),
     ('The risk is quite high.', 'the risk in the capital is nowhere near that in the border districts')],

case=dict(
 title='The Decision Room · Forty-five words and a qualification',
 brief=[
  'Eleven of thirty-one advice pages contain a qualification with no figure behind it: '
  'assistance may be limited, local services may be disrupted, conditions may change rapidly.',
  'Carrying them into the four lines makes the advice stronger than the evidence. Leaving them '
  'below means nobody reads them.',
  'Yara proposes a third option: a standing line at the end of the four lines saying there are '
  'important details below. Rana says a line pointing at details is not read either. Karim '
  'Dalati asks what the Ministry would say if somebody cancelled a journey on the strength of '
  'the short version.'],
 exhibit=figs.datatable('THE 31 PAGES',
                        ['', 'Figure', 'Note'],
                        [['pages rewritten', '31', '4 lines each'],
                         ['pages where the short version is complete', '20', '—'],
                         ['pages with an unbounded qualification', '11', '—'],
                         ['of those, where a figure could be found', '4', 'from case records'],
                         ['of those, where no figure exists', '7', '—'],
                         ['readers reaching the cleared text', '3 in 5', 'was near 0'],
                         ['readers reaching paragraph 6', '1 in 7', '—']]),
 exhibit_cap='Seven pages carry a qualification that cannot be bounded and cannot be omitted.',
 exhibit_note='A figure was found for 4 of the 11 by reading 3 years of consular case records.',
 voices=[('Yara Ibrahim', 'Press and Public Diplomacy',
          'End the four lines with there are important details below. It is honest, it costs '
          'four words and it is the only device that does not overstate or hide.'),
         ('Rana Deeb', 'Consular Affairs',
          'A line pointing at details is read as boilerplate, because every page on the '
          'internet has one. One in seven readers reaches paragraph six. We would be relying on '
          'a sentence we know does not work.'),
         ('Karim Dalati', 'Information Security and Records',
          'Ask the other question. If a traveller cancels on our short version and complains, '
          'what do we say? If the answer is read the long version, we have not improved '
          'anything; we have moved the blame.')],
 steps=[('Find it', 'For how many pages could a figure be found?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Rana distrust a pointer line?'),
        ('Weigh it', 'Overstating a risk against hiding a qualification.'),
        ('Decide', 'What happens on the seven unboundable pages?')],
 analysis=[('Find it. How were figures found for four pages?', 'by reading three years of consular case records'),
           ('Compare it. What does Yara propose?', 'a standing line saying there are important details below'),
           ('Infer it. What proportion reach paragraph six?', 'one in seven'),
           ('Weigh it. What is Karim’s test?', 'what the Ministry would say to a traveller who cancelled on the short version'),
           ('Decide. What would you do?', 'answers vary; finding figures where they exist and naming the gap on the rest is the only defensible pair')],
 decision='Write what is done about the unboundable qualifications.',
 decision_steps=['Say what the four lines contain where a figure exists.',
                 'Say what they contain where none does.',
                 'Say what the Ministry says to somebody who relied on the short version.',
                 'Say what is measured next.'],
 bank=['Where a figure exists, the 4 lines …',
       'Where no figure exists, the 4 lines …',
       'To a traveller who relied on the short version, the Ministry …',
       'The section next measures …',
       'This is reviewed …'],
 outcome='Figures were found for four of the eleven pages and carried into the four lines. On '
         'the remaining seven the four lines end with a specific pointer naming the subject '
         'rather than a general one: on medical care, see below. The Ministry’s standing answer '
         'to a complaint became that the short version states the advice and the named pointers '
         'state where the limits are, which Karim accepted as defensible. Measurement continued: '
         'readers following a named pointer ran at one in three against one in fourteen for the '
         'general line. Rana says the naming made the difference and that she had been right '
         'about boilerplate and wrong to think no pointer could work.',
 outcome_q=[('What replaced the general pointer?', 'a specific pointer naming the subject, such as on medical care, see below'),
            ('What did measurement show?', 'one in three followed a named pointer against one in fourteen for a general line')],
 tags=[]),

lab=dict(
 title='Brief Lab · Publish the travel advice',
 task=['This is the instruction under which the thirty-one advice pages were written and '
       'cleared.',
       'Every page was accurate and four in five readers left within nine seconds.'],
 draft=['Publish travel advice for each country.',
        'Set out the risks and the Ministry’s consular arrangements.',
        'Be comprehensive.',
        'Have it cleared by the relevant sections.',
        'Use clear language.',
        'Review it regularly.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the third is the one that put the consular network above the mined '
           'roads.',
 asked=['An action-first opening within a word limit',
        'Districts named rather than described',
        'Qualifications bounded or deferred by name'],
 back=['1,100 words, accurate, cleared',
       'The consular network in the first paragraph',
       'The border districts in paragraph six'],
 gap='"Be comprehensive" ranks completeness above order, "the risks and the consular '
     'arrangements" puts them in that order on the page, "clear language" is undefined, and '
     '"review it regularly" sets no interval.',
 back_cap='Thirty-one pages that satisfied every section and warned nobody.',
 back_note='Line three is the failure. Comprehensiveness is a property of the whole page and '
           'says nothing about the first thirty words, which are the only ones read.',
 diagnosis=[('[1] "travel advice for each country" — how many pages, and which countries?', 'unbounded quantity'),
            ('[2] "the risks and the Ministry’s consular arrangements" — in that order on the page?', 'hidden assumption'),
            ('[3] "be comprehensive" — at what length, and above the fold?', 'unbounded quantity'),
            ('[4] "cleared by the relevant sections" — relevant judged how?', 'unstated criterion'),
            ('[5] "use clear language" — clear to whom, measured how?', 'unstated criterion'),
            ('[6] "review it regularly" — assumes anybody is reading it at all', 'hidden assumption')],
 rewrite='Rewrite the instruction so that the opening carries the action and the cleared text '
         'is protected.',
 scaffold=['What a reader must know after ten seconds',
           'The opening lines covered and the cleared text excluded',
           'The cleared text, the districts and the number',
           'A word limit, districts named, qualifications bounded or deferred, no empty intensifiers',
           'The number of pages and the deadline',
           'What to do where a qualification can be neither bounded nor omitted'],
 bank=['Rewrite … so that a reader who stays … knows … , without …',
       'Cover … ; … is out of scope and is not to be …',
       'Work from … , … and …',
       'State in no more than … ; name … ; where … , carry it … ; use no …',
       'Return … lines on … pages, with … , by …',
       'Where a qualification cannot be … , refer …'],
 check=['Is the opening capped and action-first?',
        'Are districts required to be named?',
        'Is the cleared text protected?',
        'Is there a rule for an unboundable qualification?'],
 model=['Rewrite the opening of the travel advice so that a reader who stays 10 seconds knows what to do, without altering the cleared text',
        'The first 4 lines of each advice page; the cleared text below is out of scope and is not to be edited, shortened or reordered',
        'The cleared text, the named districts, and the published emergency number',
        'State in no more than 45 words what not to do, what is safe, what to carry and whom to call; name every district by name and give no general geographical description; where the cleared text contains a qualification that changes the advice, carry it into the 4 lines with a bounded figure, and where no figure exists, leave the advice in the cleared text and say see below; use no intensifier that carries no quantity',
        '4 lines of no more than 45 words per page, with the cleared text unchanged, for 31 pages by the end of the month',
        'Where a qualification cannot be bounded and cannot be omitted without misleading, refer the page to the drafting section rather than choosing'],
 cost='31 advice pages on which 4 in 5 readers left in 9 seconds having inferred that nothing '
      'at the top looked alarming.'),

rev_fig=figs.split('DEGREE',
                   'No quantity',
                   ['The situation is very serious.',
                    'Travel is extremely dangerous.',
                    'Assistance is really limited.',
                    'The risk is quite high.'],
                   'Stated or bounded',
                   ['Three districts are closed.',
                    'By far the greatest risk is on 2 roads.',
                    'We may not reach you for several days.',
                    'Nowhere near the risk in the districts.']),
rev_fig_cap='By far, nowhere near, marginally, considerably — and never very.',
rev=dict(
 read=[('Four in five readers leave within', ['nine seconds', 'nine minutes', 'thirty seconds', 'two minutes'], 1),
       ('An unread warning functions as', ['nothing', 'a reassurance', 'a record', 'a warning'], 1),
       ('The cheap fix is', ['rewriting the page', 'four lines above the cleared text', 'deleting the text', 'a new clearance'], 1),
       ('In the Decision Room, what replaced the general pointer?', ['nothing', 'a pointer naming the subject', 'a figure', 'a second page'], 1)],
 listen_text='A reader who leaves after nine seconds has not received nothing. They have '
             'received the impression that the ministry has published something and that '
             'nothing at the top looked alarming, from which they reasonably infer that there '
             'is no serious problem.',
 listen=[('Has not received ____________.', 'nothing'),
         ('The ministry has ____________ something.', 'published'),
         ('Nothing at the top looked ____________.', 'alarming'),
         ('They reasonably ____________ that there is no serious problem.', 'infer')],
 speak=['Say the thirty words that should open something your office publishes.',
        'Replace three intensifiers in your own writing with figures.'],
 write='Write one bounded qualification for a short public notice.',
 vocab=[('The level of schooling a text assumes is a ____________.', 'reading age'),
        ('The single statement a reader is most likely to take away is a ____________.', 'headline claim'),
        ('The sentence telling the reader what to do is a ____________.', 'call to action'),
        ('A word used precisely inside a profession and opaquely outside it is a ____________.', 'jargon term'),
        ('A particular case given to make a general statement usable is a ____________.', 'concrete example')],
 gram=[('____________ far the greatest risk is on the 2 border roads.', 'By'),
       ('The risk in the capital is ____________ near that in the border districts.', 'nowhere'),
       ('Conditions are ____________ better than in March: 2 roads have reopened.', 'marginally'),
       ('The delay is ____________ longer in August: 21 days against 5.', 'considerably'),
       ('The advice is ____________ unchanged since January.', 'substantially')]),

found=['Find out how long readers stay on a page your office publishes.',
       'Write the four lines that should sit above it.',
       'Replace every very and extremely in one document with a figure.',
       'Name one qualification in your work that has no figure behind it.'],
end_line='An unread warning is not neutral; it is a reassurance.',
end_next='Next: Did Anybody Read It',
)
