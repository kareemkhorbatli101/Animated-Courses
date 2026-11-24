# -*- coding: utf-8 -*-
import figs

U = dict(
num=1,
title='An Interview in Your Second Language',
gram='stance adverbs: frankly, regrettably, understandably',
ai='the questions a journalist in another country will ask',
strap='CEFR B2 · Grammar: stance adverbs — frankly, regrettably, understandably · '
      'AI: the questions a journalist in another country will ask',
cando=['place stance adverbs accurately and sparingly',
       'prepare for an interview in your second language',
       'identify the question a local journalist will actually ask',
       'answer a loaded premise without accepting it',
       'write a six-line tasking for interview preparation'],

hero=('ELEVEN REHEARSED ANSWERS, AND THE FIRST QUESTION WAS NONE OF THEM',
      ['The preparation covered the policy in admirable detail.',
       'The question was about a building, and it was asked twice.'],
      [(1100, 'grey', 'long'), (240, 'teal', 'short'), (260, 'blue', 'short')]),
hero_cap='Preparation for a thirty-minute interview with a national newspaper in Varkent.',

warm=['Have you been interviewed in a language that is not your first?',
      'What was asked that you had not prepared?',
      'Which question would you least like to be asked?'],

read=[
 'Ambassador Mendel is to give a thirty-minute interview to the principal newspaper in '
 'Varkent. It is her first interview at post, and it will be conducted in English and '
 'published in translation.',
 'The preparation covers eleven subjects of substance: trade figures, the cooperation '
 'programme, visa procedures, two regional questions and the forthcoming visit. Each answer '
 'is accurate, properly hedged and about ninety words long.',
 'The first question is about the Mission’s building, which has been empty of visitors for '
 'eleven months while the public section is refurbished, and which local residents believe to '
 'be closed.',
 'Frankly, nobody had thought of it. The question is asked, answered unconvincingly, and asked '
 'again eight minutes later in a different form, which is what a journalist does with an answer '
 'that was plainly improvised.',
 'What a journalist in another country will ask is determined by what that country’s readers '
 'have noticed, and what they have noticed is rarely the subject of a cooperation programme.'],

dp1=('Interview preparation', 'Media practice commonly recommends that preparation for an '
     'interview in a host country be based on the host media’s own recent coverage rather than '
     'on the interviewee’s policy agenda.',
     'Source: general media practice literature, 2025–2026.'),

c_a=[('How long is the interview?', 'thirty minutes'),
     ('In what language is it conducted?', 'English'),
     ('How many subjects did the preparation cover?', 'eleven'),
     ('What was the first question about?', 'the Mission’s building'),
     ('How long has the public section been refurbished?', 'eleven months'),
     ('How often was the question asked?', 'twice')],

c_b=[('The prepared answers were inaccurate.', 'F'),
     ('The building question was prepared for.', 'F'),
     ('The question was repeated.', 'T'),
     ('Local residents think the Mission is closed.', 'T'),
     ('Journalists accept improvised answers.', 'F'),
     ('The interview will be published in translation.', 'T')],

c_c=[('____________, nobody had thought of the question at all.', 'Frankly'),
     ('____________, the public section has been closed for eleven months.', 'Regrettably'),
     ('____________, residents have concluded that we have left.', 'Understandably'),
     ('____________, the figures are better than last year’s.', 'Happily'),
     ('____________, I cannot comment on another government’s decision.', 'Obviously'),
     ('____________, the delay was longer than we had expected.', 'Admittedly')],

c_d=[('A stance adverb tells the listener ( a fact / the speaker’s attitude ).', ['a fact', 'the speaker’s attitude'], 1),
     ('Frankly signals ( unusual candour / a formality ).',
      ['unusual candour', 'a formality'], 0),
     ('Regrettably expresses ( the speaker’s regret / somebody else’s ).',
      ['the speaker’s regret', 'somebody else’s'], 0),
     ('Understandably concedes that ( a reaction is reasonable / it is wrong ).',
      ['a reaction is reasonable', 'it is wrong'], 0),
     ('Used too often, stance adverbs ( weaken everything / strengthen it ).',
      ['weaken everything', 'strengthen it'], 0)],

c_e=('Candour, regret or concession? Put each adverb in the right column.',
     [('frankly', 'candour'), ('regrettably', 'regret'),
      ('understandably', 'concession'), ('admittedly', 'concession'),
      ('unfortunately', 'regret'), ('honestly', 'candour')],
     ['candour', 'regret', 'concession']),

v_fig_title='AN INTERVIEW IN SIX WORDS',
v_fig=[('speech', 'an interview on the record'), ('key', 'a line to take'), ('chart', 'a hostile question'),
       ('clock', 'a journalist’s deadline'), ('doc', 'a transcript released'), ('people', 'a background briefing')],
v_fig_cap='Six words for thirty minutes that will be read by people who were not there.',

vocab=[
 ('an interview on the record', 'an interview everything in which may be quoted'),
 ('an interview off the record', 'an interview not for quotation'),
 ('a background briefing', 'information given to explain, not to quote'),
 ('a line to take', 'the agreed form of an answer'),
 ('a hostile question', 'a question designed to damage'),
 ('a loaded premise', 'an assumption built into a question'),
 ('an interview request', 'a formal request to interview'),
 ('a recording of an interview', 'the audio or video kept'),
 ('a right of correction', 'the right to have an error put right'),
 ('a quotation approved in advance', 'a quotation agreed before publication'),
 ('a journalist’s deadline', 'the time by which copy must be filed'),
 ('a question about another country', 'a question about a third state'),
 ('a question about your own', 'a question about your own country'),
 ('a non-answer', 'a reply that answers nothing'),
 ('a bridge back to a message', 'a return to what you came to say'),
 ('a courtesy of a first question', 'an easy opening question'),
 ('a translation of a soundbite', 'a short quotation in another language'),
 ('a studio interview', 'an interview recorded in a studio'),
 ('an interview by telephone', 'an interview conducted by telephone'),
 ('a transcript released', 'a full text made public')],

v_a=[('An assumption built into a question is a ____________ premise.', 'loaded'),
     ('The agreed form of an answer is a ____________ to take.', 'line'),
     ('Information given to explain, not to quote, is a ____________ briefing.', 'background'),
     ('A reply that answers nothing is a ____________.', 'non-answer'),
     ('A return to what you came to say is a ____________ back to a message.', 'bridge'),
     ('The right to have an error put right is a ____________ of correction.', 'right'),
     ('The time by which copy must be filed is a journalist’s ____________.', 'deadline'),
     ('A full text made public is a ____________ released.', 'transcript')],

v_b=[('An interview on the record is an interview', 'everything in which may be quoted.'),
     ('A hostile question is a question', 'designed to damage.'),
     ('A courtesy of a first question is an easy', 'opening question.'),
     ('A translation of a soundbite is a short quotation', 'in another language.'),
     ('A quotation approved in advance is a quotation', 'agreed before publication.')],

g_title='Grammar: stance adverbs — frankly, regrettably, understandably',
g_rule=['A stance adverb comments on the whole sentence and usually stands first, with a comma: '
        'frankly, nobody had thought of it.',
        'Frankly and honestly claim unusual candour; regrettably and unfortunately express the '
        'speaker’s own regret; understandably and admittedly concede that somebody else’s '
        'position is reasonable.',
        'They may also stand mid-sentence between commas: the delay was, admittedly, longer '
        'than we expected.',
        'Use them sparingly. One in a paragraph is emphasis; three are a mannerism, and in an '
        'interview a mannerism is what gets quoted.'],
g_fig=('LOOSE',
       ['To be frank with you, nobody thought of it.',
        'It is a regrettable thing that it has been closed.',
        'People are understanding about concluding we left.',
        'The delay was longer, to admit it.'],
       'PRECISE',
       ['Frankly, nobody had thought of it.',
        'Regrettably, the public section has been closed for eleven months.',
        'Understandably, residents have concluded that we have left.',
        'The delay was, admittedly, longer than we had expected.'],
       'four stances expressed in phrases',
       'the same four with a single stance adverb'),
g_fig_cap='One adverb, first in the sentence, with a comma. Two in a paragraph is one too many.',

g_a=[('____________, nobody had thought of the question at all.', 'Frankly'),
     ('____________, the public section has been closed for eleven months.', 'Regrettably'),
     ('____________, residents have concluded that we have left.', 'Understandably'),
     ('____________, the figures are better than last year’s.', 'Happily'),
     ('____________, I cannot comment on another government’s decision.', 'Obviously'),
     ('The delay was, ____________, longer than we had expected.', 'admittedly'),
     ('____________, that is a question for the host authorities.', 'Properly'),
     ('____________, the programme has not achieved what we hoped.', 'Regrettably'),
     ('____________, I would rather answer the question you asked first.', 'Frankly')],

g_b=[('( Frankly, nobody had thought of it / To be frank with you, nobody thought of it ) — economy.', ['Frankly, nobody had thought of it', 'To be frank with you, nobody thought of it'], 0),
     ('( Regrettably, the section has been closed / It is a regrettable thing that it is closed ) — register.',
      ['Regrettably, the section has been closed',
       'It is a regrettable thing that it is closed'], 0),
     ('( Understandably, residents have concluded that we left / People are understanding about that ) — concession.',
      ['Understandably, residents have concluded that we left',
       'People are understanding about that'], 0),
     ('( The delay was, admittedly, longer than expected / The delay was longer, to admit it ) — mid-sentence.',
      ['The delay was, admittedly, longer than expected',
       'The delay was longer, to admit it'], 0),
     ('( Frankly, I would rather answer the first question / Frankly and honestly and candidly, I would rather ) — one is enough.',
      ['Frankly, I would rather answer the first question',
       'Frankly and honestly and candidly, I would rather'], 0),
     ('( Obviously, I cannot comment on another government’s decision / Obvious I cannot comment ) — form.',
      ['Obviously, I cannot comment on another government’s decision',
       'Obvious I cannot comment'], 0)],

d1=dict(
 title='The question about the building',
 fig=(['Eleven subjects prepared.', 'And the first was the twelfth.'],
      ['What was it?', 'Whether we had closed.']),
 cap='Ambassador Clara Mendel and Yuki Tanaka, after the interview.',
 lines=[('Yuki', 'How did it go?'),
        ('Mendel', 'Eleven prepared subjects, and the first question was about the building.'),
        ('Yuki', 'Whether we are still open.'),
        ('Mendel', 'Whether we had quietly closed and not told anybody. Asked twice.'),
        ('Yuki', 'It has been boarded for eleven months, and the notice is in English only.'),
        ('Mendel', 'Frankly, nobody had thought of it, including me.'),
        ('Yuki', 'It is the only thing about this Mission that most of their readers have seen.'),
        ('Mendel', 'And I gave an improvised answer, which is why it came back in a different form.'),
        ('Yuki', 'What would a better answer have been?'),
        ('Mendel', 'The date the public section reopens, the telephone number that works now, and an apology.'),
        ('Yuki', 'Then that is what preparation should start from: what their readers can see.'),
        ('Mendel', 'Their coverage of us for a year, and not our programme for next year.')],
 a=[('How many subjects were prepared?', 'eleven'),
    ('What was the first question?', 'whether the Mission had closed'),
    ('How long has the building been boarded?', 'eleven months'),
    ('What language is the notice in?', 'English only'),
    ('What should preparation start from?', 'what their readers can see')],
 b=[('Asked ____________.', 'twice'),
    ('Frankly, nobody had ____________ of it.', 'thought'),
    ('It came back in a different ____________.', 'form'),
    ('The ____________ number that works now.', 'telephone')]),

d2=dict(
 title='The premise inside the question',
 fig=(['Why has your country abandoned the region?', 'I shall not accept the word.'],
      ['Nor answer it?', 'Answer it, and not accept it.']),
 cap='Mendel and Elena Duarte, rehearsing before a second interview.',
 lines=[('Elena', 'They will ask why your country has abandoned the region.'),
        ('Mendel', 'Which contains a premise I cannot accept and a question I should answer.'),
        ('Elena', 'How do you separate them?'),
        ('Mendel', 'I answer the question and decline the word, in that order and in one sentence.'),
        ('Elena', 'Give it to me.'),
        ('Mendel', 'Our engagement has changed in form and not in commitment, and I would not use the word abandoned about a programme that has grown by a fifth.'),
        ('Elena', 'They will say you refused to answer.'),
        ('Mendel', 'They cannot, because the figure is in the first half of the sentence.'),
        ('Elena', 'And if they repeat the premise three times?'),
        ('Mendel', 'Then I answer three times and decline it once. Repeating my objection makes it the story.'),
        ('Elena', 'What if the premise is true?'),
        ('Mendel', 'Then I say so, regrettably, and say what we are doing about it. And how do I handle a premise that is true about a department I do not control?')],
 unresolved=True,
 a=[('What will the question contain?', 'a premise she cannot accept'),
    ('What does Mendel do with it?', 'answers the question and declines the word'),
    ('In what order?', 'the answer first, the objection second'),
    ('Why can they not say she refused?', 'the figure is in the first half of the sentence'),
    ('How often should she object?', 'once, however often the premise is repeated')],
 b=[('A premise I cannot ____________.', 'accept'),
    ('Changed in form and not in ____________.', 'commitment'),
    ('Grown by a ____________.', 'fifth'),
    ('Repeating my objection makes it the ____________.', 'story')]),

speak=[('One adverb only',
        ['Make eight statements about your own work.',
         'Open each with a different stance adverb.',
         'Your partner objects if any adverb does not match the content.']),
       ('What have they seen',
        ['Describe your organisation to your partner as its public sees it.',
         'They ask the three questions a local journalist would ask.',
         'None of them may be about your strategy.']),
       ('Answer and decline',
        ['Your partner asks you three questions with loaded premises.',
         'Answer each in one sentence and decline the word once.',
         'They judge whether you sounded evasive.'])],

ext_title='A journalist asks about what readers have seen, not about what you have planned',
ext_fig=figs.datatable('WHAT WAS PREPARED AND WHAT WAS ASKED',
                       ['Prepared', 'Asked'],
                       [['trade figures', 'whether the Mission has closed'],
                        ['the cooperation programme', 'why the notice is in English only'],
                        ['visa procedures', 'why the telephone is not answered'],
                        ['two regional questions', 'whether staff have been withdrawn'],
                        ['the forthcoming visit', 'what the building will become'],
                        ['eleven subjects in all', 'five questions about one building']]),
ext_fig_cap='Eleven prepared subjects, five actual questions, and one point of contact between them.',
ext=[
 'Preparing for an interview is a task at which a system excels, provided that it is asked for '
 'the right thing. Asked to prepare answers on a policy agenda, it will produce accurate, '
 'well-hedged answers of about ninety words each.',
 'The journalist, however, is not interviewing the policy agenda. A correspondent in the host '
 'country asks about what that country’s readers have noticed, and what they have noticed is '
 'physical, local and recent.',
 'The instruction must therefore be built from the host media rather than from the Mission’s '
 'own priorities: the last twelve months of coverage of this Mission and this country, the '
 'questions put to your predecessor, the complaints published in readers’ letters, and anything '
 'visible from the street.',
 'Ask for the twenty questions most likely to be asked, in the order of likelihood, with the '
 'coverage that gives rise to each, and require that no question be omitted because it is '
 'awkward or trivial. A boarded window is trivial and will be the first question.',
 'Then prepare the answers in the form they will be used. An answer of ninety words will be '
 'quoted in twenty, and the twenty will be chosen by somebody else unless the first twenty '
 'words of your answer are the ones you would choose.',
 'And prepare for the loaded premise, which is the commonest hostile form. Answer the question '
 'in the first half of the sentence and decline the word in the second, once, however many '
 'times the premise is repeated. Frankly, an interview is lost far more often by an improvised '
 'answer to an obvious question than by a difficult one.'],

dp2=('Loaded questions', 'Media practice commonly advises that an unacceptable premise be '
     'declined once and briefly, with the substantive answer given first, since repeated '
     'objection to the premise tends to become the reported story.',
     'Source: general media practice literature, 2025–2026.'),

e_a=[('What will a system produce if asked badly?', 'accurate answers on a policy agenda'),
     ('What does a local journalist ask about?', 'what that country’s readers have noticed'),
     ('What should preparation be built from?', 'the host media’s own coverage'),
     ('How many questions should be requested?', 'the twenty most likely, in order'),
     ('How is a loaded premise handled?', 'answer first, decline the word once')],
e_b=[('A policy agenda determines the questions.', 'F'),
     ('What readers notice is local and recent.', 'T'),
     ('Trivial questions may be omitted.', 'F'),
     ('A ninety-word answer will be quoted in full.', 'F'),
     ('An objection repeated becomes the story.', 'T'),
     ('Improvised answers invite repetition of the question.', 'T')],

w_model='Purpose: so that no question in Thursday’s interview is one I have not seen before. '
        'Scope: the national daily in Varkent and its readership; broadcast media are prepared '
        'separately. Inputs: twelve months of that paper’s coverage of this Mission and of my '
        'country, the questions put to my predecessor, its published readers’ letters, and '
        'photographs of our building from the street. Criteria: the twenty most likely questions '
        'in order of likelihood, each with the coverage that gives rise to it; no question '
        'omitted as trivial or awkward; for each, a twenty-word answer followed by the '
        'supporting detail; every loaded premise identified with the single sentence that '
        'answers and declines it. Done: with me the day before the interview. Fallback: where a '
        'question concerns a matter outside my competence, the answer names who is competent '
        'rather than offering a view.',
w_fig=figs.spec_card('SIX LINES FOR INTERVIEW PREPARATION',
                     [('Purpose', 'no question I have not seen before'),
                      ('Scope', 'the national daily; broadcast separately'),
                      ('Inputs', 'twelve months of coverage, letters, photographs'),
                      ('Criteria', 'twenty questions ranked; twenty-word answers; premises named'),
                      ('Done', 'the day before'),
                      ('Fallback', 'outside my competence: name who is competent')]),
w_fig_cap='“No question omitted as trivial” is the line that produces the boarded window.',
w_task='Write a six-line tasking for interview preparation.',
w_steps=['Line 1: say what must be true at the interview.',
         'Line 2: say which outlet, and what is prepared separately.',
         'Line 3: say what you are giving it.',
         'Line 4: say the ranking, the answer length, the premises and the prohibition.',
         'Line 5: say when you need it.',
         'Line 6: say what happens where a question is outside your competence.'],
w_bank=['Purpose: so that no question in … is one I have not seen before',
        'Scope: … and its readership; … are prepared separately',
        'Inputs: twelve months of coverage of this Mission and of my country, the questions put to my predecessor, readers’ letters, photographs from the street',
        'Criteria: the twenty most likely questions in order, each with the coverage behind it; no question omitted as trivial or awkward; a twenty-word answer followed by supporting detail; every loaded premise with the sentence that answers and declines it',
        'Done: with me the day before. Fallback: where a question is outside my competence, the answer names who is competent'],
w_check=['Are the questions ranked by likelihood?',
         'Is nothing omitted as trivial?',
         'Is each answer twenty words first?',
         'Is every loaded premise identified?'],

t_title='The questions a journalist in another country will ask',
t_fig=figs.split('THIRTY MINUTES',
                 'Build it from',
                 ['their coverage of us',
                  'their readers’ letters',
                  'questions to my predecessor',
                  'what is visible from the street'],
                 'Never from',
                 ['our policy agenda',
                  'our annual report',
                  'the capital’s talking points',
                  'what we wish were asked']),
t_fig_cap='The left column predicts the questions. The right column predicts nothing at all.',
t_body=[
 'Build the preparation from the host outlet’s own material: twelve months of its coverage of '
 'the Mission and of your country, the questions it put to your predecessor, its readers’ '
 'letters, and photographs of your own building taken from the pavement.',
 'Ask for the twenty most likely questions in order of likelihood, each with the coverage that '
 'gives rise to it, and forbid the omission of any question on the ground that it is trivial or '
 'awkward. The boarded window is trivial, and it will be asked first and twice.',
 'Require each answer in the form it will be used: twenty words that could stand alone as a '
 'quotation, then the supporting detail. And for every loaded premise, one sentence that '
 'answers the question in its first half and declines the word in its second.'],
t_say=[('Set the sources: ', 'Their coverage, their letters, their questions to my predecessor.'),
       ('Rank the questions: ', 'The twenty most likely, in order, with the coverage behind each.'),
       ('Shape the answers: ', 'Twenty words that can stand alone, then the detail.')],
t_bound='Given your policy agenda, it will prepare your policy agenda. It cannot see your '
        'building, has not read the letters page, and will never guess that eleven months of '
        'boarding has made your Mission look abandoned.',
t_a=[('Build it from their own ____________.', 'coverage'),
     ('Their readers’ ____________.', 'letters'),
     ('The twenty most likely ____________.', 'questions'),
     ('Forbid the omission of anything ____________.', 'trivial'),
     ('Twenty words that could stand ____________.', 'alone'),
     ('It cannot see your ____________.', 'building')],
t_b_rubric='Say whether each belongs in the preparation.',
t_b=[('The trade figures for the last year.', 'yes, but low in the ranking'),
     ('Why the Mission’s notice is in English only.', 'yes: visible from the street'),
     ('A ninety-word answer on the cooperation programme.', 'no: twenty words first'),
     ('The sentence that answers and declines a loaded word.', 'yes')],

case=dict(
 title='The Decision Room · Eleven subjects and a boarded window',
 brief=[
  'A newly arrived head of mission is to give a thirty-minute interview to the principal '
  'national daily, conducted in English and published in translation.',
  'Preparation covers eleven subjects of substance, each with an accurate answer of about '
  'ninety words. None concerns the Mission’s own premises, whose public section has been '
  'boarded for eleven months behind a notice in English only.',
  'Five of the interview’s questions concern the building. The first is whether the Mission has '
  'closed; it is answered unconvincingly and asked again in a different form eight minutes '
  'later.'],
 exhibit=figs.datatable('WHAT THE READERS HAD SEEN',
                        ['Visible to readers', 'In the preparation'],
                        [['a boarded public section', 'not mentioned'],
                         ['a notice in English only', 'not mentioned'],
                         ['an unanswered telephone', 'not mentioned'],
                         ['no visitors for eleven months', 'not mentioned'],
                         ['two letters in the paper', 'not mentioned'],
                         ['the cooperation programme', 'four hundred words']]),
 exhibit_cap='Five things readers could see, none prepared, and one programme nobody asked about.',
 exhibit_note='The preparation was accurate and the subject matter important. It answered the '
              'question what do we wish to say, which no journalist has ever asked.',
 voices=[('Ambassador Clara Mendel', 'head of mission',
          'Frankly, nobody had thought of the building, and it is the only part of us the city can see.'),
         ('Yuki Tanaka', 'press officer',
          'Their letters page carried two complaints about the telephone in November.'),
         ('Elena Duarte', 'delegate, the Assembly',
          'And an improvised answer invites the same question again, in a form you like less.')],
 steps=[('Find it', 'What was prepared?'),
        ('Compare it', 'The agenda against the street.'),
        ('Infer it', 'Why was the building absent?'),
        ('Weigh it', 'Twelve months of coverage, read in an hour.'),
        ('Decide', 'What does preparation begin from?')],
 analysis=[('Find it. What was prepared?', 'eleven policy subjects'),
           ('Compare it. What was asked?', 'five questions about the building'),
           ('Infer it. Why?', 'the preparation was built from our own agenda'),
           ('Weigh it. What is the cost?', 'an hour reading their coverage'),
           ('Decide. What does it begin from?', 'what the host’s readers have seen')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what preparation is built from.',
                 'Say how questions are ordered.',
                 'Say what may not be omitted.',
                 'Say how each answer is shaped.'],
 bank=['Interview preparation is built from the host outlet’s own coverage, letters and previous questions.',
       'Questions are listed in order of likelihood, each with the coverage that gives rise to it.',
       'No question is omitted on the ground that it is trivial, awkward or outside the Mission’s preferred agenda.',
       'Each answer begins with twenty words that can stand alone as a quotation, followed by supporting detail.'],
 outcome='The second interview is prepared from the paper’s own material, and nineteen of its '
         'twenty-one questions appear in the preparation. The building question is answered with '
         'a reopening date, a working telephone number and an apology, and is quoted in full. '
         'The public section reopens five weeks later with a notice in both languages, and the '
         'paper reports the reopening without being asked.',
 outcome_q=[('How many questions were anticipated?', 'nineteen of twenty-one'),
            ('How was the building question answered?', 'with a date, a number and an apology'),
            ('How was it quoted?', 'in full'),
            ('When did the section reopen?', 'five weeks later'),
            ('What did the paper do?', 'reported the reopening unasked')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Prepare me for the interview',
 task=['A head of mission asked for preparation for a first interview at post.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Prepare me for Thursday’s interview.',
        'The main subjects.',
        'Our priorities for the year.',
        'Accurate answers.',
        'Not too long.',
        'By Wednesday.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and “our priorities” chose the eleven subjects that were not asked about.',
 asked=['The main subjects', 'Our priorities', 'Accurate answers'],
 back=['11 subjects', '990 words of answers', '0 questions from their coverage'],
 gap='Nobody said that the questions would come from the host paper’s own coverage of the Mission.',
 back_cap='Eleven accurate answers to questions that the journalist had no reason to ask.',
 back_note='“Our priorities for the year” is a reasonable basis for a speech and no basis at '
           'all for an interview, in which the questions belong to somebody else.',
 diagnosis=[('“prepare me for the interview”', 'unscoped set'),
            ('“the main subjects”', 'hidden assumption'),
            ('“our priorities for the year”', 'hidden assumption'),
            ('“accurate answers”', 'unstated criterion'),
            ('“not too long”', 'unstated criterion'),
            ('“by Wednesday”', 'unscoped set')],
 rewrite='Rewrite it on the six lines so that the questions come from their side, not ours.',
 scaffold=['what must be true at the interview',
           'which outlet, and what is prepared separately',
           'what you are giving it',
           'the ranking, the answer length, the premises and the prohibition',
           'when you need it',
           'what happens where a question is outside your competence'],
 bank=['Purpose: so that no question in Thursday’s interview is one I have not seen before',
       'Scope: the national daily in Varkent and its readership; broadcast media are prepared separately',
       'Inputs: twelve months of that paper’s coverage of this Mission and of my country, the questions put to my predecessor, its published readers’ letters, and photographs of our building from the street',
       'Criteria: the twenty most likely questions in order of likelihood, each with the coverage that gives rise to it; no question omitted as trivial or awkward; for each, a twenty-word answer followed by the supporting detail; every loaded premise identified with the single sentence that answers and declines it',
       'Done: with me the day before the interview',
       'Fallback: where a question concerns a matter outside my competence, the answer names who is competent rather than offering a view'],
 check=['Are the sources theirs rather than ours?',
        'Are questions ranked by likelihood?',
        'Is nothing omitted as trivial?',
        'Are answers twenty words first?'],
 model=['so that no question in Thursday’s interview is one I have not seen before',
        'the national daily in Varkent and its readership; broadcast media are prepared separately',
        'twelve months of that paper’s coverage of this Mission and of my country, the questions put to my predecessor, its published readers’ letters, and photographs of our building from the street',
        'the twenty most likely questions in order of likelihood, each with the coverage that gives rise to it; no question omitted as trivial or awkward; for each, a twenty-word answer followed by the supporting detail; every loaded premise identified with the single sentence that answers and declines it',
        'with me the day before the interview',
        'where a question concerns a matter outside my competence, the answer names who is competent rather than offering a view'],
 cost='11 subjects, 990 words, 0 questions from their own pages, and five minutes on a boarded window.'),

lang=dict(
 title='Across the Language Line · A soundbite that cannot be translated short',
 setting=[
  'The Ambassador’s best answer is a balanced sentence of thirty-one words with two '
  'qualifications. In the host language the same thought requires forty-five words, and the '
  'paper has room for twenty.',
  'The sub-editor cuts the qualifications, because they come at the end, and publishes a '
  'sentence that is twice as strong as anything that was said.'],
 ladder=[('A balanced sentence of thirty-one words', 'with two qualifications'),
         ('Forty-five words in translation', 'and room for twenty'),
         ('A published quotation', 'twice as strong as the answer')],
 cap='A careful answer, honestly translated, honestly cut, and no longer true.',
 turns=[('Turn 1 · The journalist', 'May I have that in a shorter form?'),
        ('Turn 2 · The Ambassador', 'Of course. Let me give you the short version myself.'),
        ('Turn 3 · The journalist', 'Thank you. That is what I shall use.')],
 holds=['May I give you a shorter version that I am content to see in print?',
        'The qualification matters, so let me put it at the beginning instead.',
        'If you have room for twenty words, these are the twenty I would choose.',
        'I would rather help you cut it than have it cut for me.',
        'Would you read back the sentence you intend to use?',
        'I will send the short version in writing within the hour.'],
 redline='Never leave the cutting of a qualified answer to somebody else, and never ask a '
         'journalist to submit a quotation for approval as a condition.',
 score=['Offered a shorter version unprompted.',
        'Moved the qualification to the front.',
        'Named the number of words available.',
        'Asked for the sentence to be read back.',
        'Followed up in writing within the hour.'],
 a=[('How long is the original answer?', 'thirty-one words'),
    ('How long in translation?', 'forty-five'),
    ('How much room has the paper?', 'twenty words'),
    ('What gets cut?', 'the qualifications at the end'),
    ('What should the speaker do?', 'offer the short version and front the qualification'),
    ('What must not be demanded?', 'approval of the quotation as a condition')]),

rev_fig=figs.split('PREPARING AN INTERVIEW',
                   'From their side',
                   ['their coverage of us',
                    'their readers’ letters',
                    'questions to my predecessor',
                    'what the street can see'],
                   'In their form',
                   ['twenty words first',
                    'the detail afterwards',
                    'the premise declined once',
                    'a name where I am not competent']),
rev_fig_cap='Eight lines of preparation, and the first question stops being a surprise.',
rev=dict(
 read=[('How long was the interview?',
        ['thirty minutes', 'eleven minutes', 'an hour', 'eight minutes'], 0),
       ('What was the first question about?',
        ['the Mission’s building', 'trade figures',
         'visa procedures', 'the forthcoming visit'], 0),
       ('How long had the section been boarded?',
        ['eleven months', 'five weeks', 'a year and a half', 'eight months'], 0),
       ('How should a loaded premise be handled?',
        ['answer first, decline the word once', 'object three times',
         'refuse to answer', 'accept it'], 0)],
 listen_text='Build the preparation from their coverage, their letters and the questions put to '
             'your predecessor; ask for the twenty most likely questions in order, omitting '
             'nothing as trivial, with twenty-word answers first.',
 listen=[('Build it from their ____________.', 'coverage'),
         ('And their readers’ ____________.', 'letters'),
         ('The twenty most likely questions in ____________.', 'order'),
         ('Omitting nothing as ____________.', 'trivial')],
 speak=['Make eight statements each opening with a different stance adverb.',
        'Then answer three loaded questions, declining the word once each.'],
 write='Write a six-line tasking for interview preparation.',
 vocab=[('An assumption built into a question is a ____________ premise.', 'loaded'),
        ('The agreed form of an answer is a ____________ to take.', 'line'),
        ('A reply that answers nothing is a ____________.', 'non-answer'),
        ('A full text made public is a ____________ released.', 'transcript')],
 gram=[('____________, that is a question for the host authorities.', 'Properly'),
       ('____________, the programme has not achieved what we hoped.', 'Regrettably'),
       ('The delay was, ____________, longer than we had expected.', 'admittedly'),
       ('____________, the new consular hours are longer, not shorter.', 'Happily')]),

found=['Build preparation from the host outlet’s coverage, not from your own agenda.',
       'Rank the twenty likeliest questions and omit nothing as trivial.',
       'Shape every answer as twenty quotable words, then the detail.',
       'Answer a loaded question first and decline its word once.'],
end_line='The questions belong to the journalist. Only the answers are yours.',
end_next='Next: A Statement Written to Be Translated')
