"""Unit 5 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        5, 'Last Weekend',
        'Past simple: was, were and regular verbs',
        ['I can name places outside the city and talk about the weather.',
         'I can use was, were and regular past verbs.',
         'I can describe my last weekend in 50–70 words.'],
        ['sun', 'home', 'cup', 'person', 'moon'],
        alt='The opening page of Unit 5, Last Weekend: the grammar point is the past '
            'simple with was, were and regular verbs, and three things the learner '
            'will be able to do by the end of the unit.'),

 2: lambda: F.word_grid(
        [('Museum', 'museum'), ('Picnic', 'picnic'), ('Concert', 'concert'), ('Guest', 'guest'), ('Trip', 'suitcase')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: museum, '
            'picnic, concert, guest, trip.'),

 3: lambda: F.bank_strip(
        [('cinema', 'screen'), ('lake', 'water'), ('sunny', 'sun'), ('rested', 'bed')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: cinema, lake, sunny, rested.'),

 4: lambda: F.timeline(
        [('8.00', 'Amina opened the shop'), ('11.00', 'Yuki walked to the lake'),
         ('14.00', 'Amina closed'), ('17.00', 'Dani cooked'),
         ('21.00', 'the light went')],
        height=460,
        alt='Last Sunday on Alder Street as a line: Amina opened the shop at eight, '
            'Yuki walked to the lake at eleven, Amina closed at two, Dani cooked at '
            'five, and the light went at nine.'),

 5: lambda: F.word_grid(
        [('Beach', 'beach'), ('Forest', 'forest'), ('Village', 'village'), ('Path', 'path'), ('Windy', 'wind'), ('Cloudy', 'cloud'), ('Guest', 'guest')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: beach, '
            'forest, village, path, windy, cloudy, guest, each with the thing '
            'it means drawn beside its number.'),

 6: lambda: F.sound_groups(
        [('/t/', ['walked', 'cooked']), ('/d/', ['stayed', 'opened']),
         ('/\u026ad/', ['rested', 'waited'])],
        height=404,
        alt='The six past verbs of this unit sorted by the sound the -ed '
            'ending makes, three columns in all: /t/ takes walked and cooked, '
            '/d/ takes stayed and opened, and the longer ending takes rested '
            'and waited.'),

 7: lambda: F.category_set(
        [('Beach', 'sun'), ('Museum', 'home'), ('Forest', 'moon'),
         ('Lake', 'cup'), ('Village', 'shop'), ('Path', 'bus')],
        height=600,
        alt='Six places people go at the weekend, each on its own card: beach, '
            'museum, forest, lake, village and path.'),

 8: lambda: F.label_me(
        [('hill', 0.10, 0.48), ('forest', 0.32, 0.42), ('lake', 0.54, 0.54),
         ('path', 0.74, 0.46), ('village', 0.92, 0.50)],
        height=620, draw=F.landscape,
        alt='The countryside drawn from the side, with a hill, a forest, a lake, a '
            'path and a village. Five numbered lines run to the right for the '
            'learner to write each word.'),

 9: lambda: F.bank_strip(
        [('museum', 'museum'), ('picnic', 'picnic'), ('windy', 'wind'), ('path', 'path')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: museum, picnic, windy, path.'),
 10: lambda: F.writing_frame(
        [('What the weather was', 'On Saturday it was cloudy, so I stayed at home.'),
         ('Where you went', 'On Sunday I walked to the lake with two friends.'),
         ('What you did there', 'We carried a picnic and ate it on the grass.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- what the weather was, where you went, and what you did there '
            '-- with a line of the model beside each one.'),

 11: lambda: F.annotated_lines(
        [('Last Sunday was warm.', 'was'),
         ('Amina opened the shop at eight.', 'opened'),
         ('The children were noisy by the lake.', 'were'),
         ('Dani cooked for four and three people arrived.', 'cooked')],
        height=440,
        alt='Four lines from the notice with the past verb ringed in each: '
            'was, opened, were, cooked. Two of the four are was or were, '
            'which is the question the task asks.'),

 12: lambda: F.grammar_contrast(
        ('was / were', 'how something was',
         'Sunday was warm.', [0.22]),
        ('verb + -ed', 'what somebody did',
         'She opened the shop.', [0.16, 0.38, 0.60, 0.82]),
        height=640,
        alt='The unit’s grammar as two columns. On the left was and were, one mark '
            'back on the timeline, for how something was. On the right the regular '
            'past with -ed, four marks, for the things somebody did.'),

 13: lambda: F.world_strip(
        [('/t/', 'bus', 'walked · cooked · watched'),
         ('/d/', 'sun', 'stayed · opened · arrived'),
         ('/ɪd/', 'clock', 'rested · waited · wanted')],
        height=460,
        alt='The three sounds of the -ed ending: /t/ in walked, cooked and watched; '
            '/d/ in stayed, opened and arrived; and /ɪd/ in rested, waited and '
            'wanted, which is the only group that adds a beat.'),

        # REVIEW: bins guessed as ['was', 'were', 'walked']; chips are whole sentences, shorten them,
 14: lambda: F.sort_bins(
        ['was', 'were', 'added -ed'],
        ['Last Sunday', 'the children', 'Yuki walked', 'the path'],
        height=560,
        alt='Four subjects from this task as chips above three empty bins -- '
            'was, were, and the verbs that simply add -ed. Which chip goes in '
            'which bin is the exercise, so none of them is placed.'),

 15: lambda: F.error_pairs(
        [('I was walk to the lake.', 'I walked to the lake.'),
         ('I was walk to the beach on Saturday.', None),
         ('Did you walked to the lake?', None),
         ('The children was noisy all afternoon.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 5.2', 'Maya and Dani', 'person', 'what did you do?'),
         ('Track 5.3', 'Yuki and the clerk', 'bus', 'booking a trip'),
         ('Track 5.4', 'Amina', 'shop', 'five weekends')],
        height=560,
        alt='The three listenings in this unit: Maya and Dani ask each other what '
            'they did, Yuki books a trip with a clerk, and Amina describes five '
            'weekends in one building.'),

 17: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'I wanted to ask about the Saturday trip.'),
         ('Clerk', 'person', 'The weather was terrible.'),
         ('Yuki', 'computer', 'And this Saturday?'),
         ('Clerk', 'person', 'We start at eight and we are back at six.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Yuki: I wanted to ask about the Saturday trip. Clerk: The '
            'weather was terrible. Yuki: And this Saturday? Clerk: We start '
            'at eight and we are back at six.'),

 18: lambda: F.match_columns(
        [('Maya', 'person'), ('Tomas', 'nurse'), ('Mr Okonkwo', 'home'), ('Yuki', 'computer')],
        ['worked three nights and slept through',
         'sat outside and talked to everybody',
         'walked to the lake and came back cold',
         'travelled to another city by train',
         'photographed a bird and looked it up'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What did you do last weekend?', 'before_now'),
         ('What was the weather like?', 'coins'),
         ('What did you want to do and not do?', 'before_now')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('the lake', 'water'), ('windy but warm', 'wind'), ('with a friend', 'person'), ('back at six', 'pin')]),
        ('Student B', [('the lake', 'water'), ('windy and cold', 'wind'), ('alone', 'notice'), ('back at six', 'pin')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
        ('Card A — the listener', ['ask what they did', 'ask about the weather',
                                   'ask who with', 'ask what happened next'],
         'person'),
        ('Card B — the teller', ['say where you went', 'say what the weather was like',
                                 'say who with',
                                 'finish with one thing that went wrong'], 'sun'),
        height=560,
        alt='The two role-play cards side by side. Card A, the listener: ask what '
            'they did, ask about the weather, ask who with, ask what happened next. '
            'Card B, the teller: say where you went, what the weather was like, who '
            'with, and finish with one thing that went wrong.'),

        # REVIEW: beats split from the task sentence; check they read as labels,
 22: lambda: F.talk_shape(
        [('where you went', 1, 'pin'),
         ('what the weather was like', 2, 'cloud'),
         ('one thing that did not go to plan', 2, 'cross')],
        height=420,
        alt='The one-minute talk as three beats on a clock line, each block '
            'as wide as the share of the minute it should take: a short one '
            'for where you went, then two longer ones for what the weather '
            'was like and one thing that did not go to plan.'),

 23: lambda: F.process_strip(
        [('workers campaigned', 'person'), ('owners said no', 'home'),
         ('a factory tried it', 'shop'), ('the work still happened', 'clock'),
         ('five days and two', 'sun')],
        height=460,
        alt='How the weekend arrived, in five stages, each with an arrow to the '
            'next: workers campaigned, owners said no, one factory tried it, the '
            'work still happened, and five days and two became normal.'),

 24: lambda: F.word_grid(
        [('factory', 'factory'), ('campaign', 'loudspeaker'), ('owner', 'person'), ('agreement', 'hands')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'factory, campaign, owner, agreement.'),

 25: lambda: F.world_strip(
        [('the Middle East', 'sun', 'Friday and Saturday are the days off'),
         ('Nepal', 'moon', 'one day off for a long time'),
         ('Iceland', 'clock', 'tested a four-day week for four years')],
        height=460,
        alt='The days off in three places: Friday and Saturday in much of the Middle '
            'East, one day off for a long time in Nepal, and a four-day week tested '
            'for four years in Iceland.'),

 26: lambda: F.writing_frame(
        [('When, and the weather', 'Last Saturday was grey and cold.'),
         ('So what you did', 'so I stayed in and cleaned the kitchen'),
         ('The other day', 'On Sunday the weather changed completely.'),
         ('How it ended', 'I arrived home tired and very pleased.')],
        height=520,
        alt='The shape of the paragraph the learner is about to write, in four '
            'steps: when it was and what the weather was like, what you did as a '
            'result, the other day of the weekend, and how it ended.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'A good weekend has one plan in it and nothing.'),
         ('two or three reasons', 'With two plans in it, I spend Sunday evening.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('a thank you', 'Yuki, thank you for Saturday.'),
         ('one detail only you two', 'The walk was the best part.'),
         ('one apology or joke', 'I am sorry the picnic was so heavy; next time.')],
        height=571,
        alt='The shape of the message in three steps -- a thank you, one '
            'detail only you two, one apology or joke -- with a line of the '
            'model beside each one.'),

 29: lambda: F.writing_frame(
        [('when it was', 'I remember a weekend by the sea, long ago.'),
         ('what happened', 'It rained for two days and we played cards.'),
         ('why you remember it', 'Nothing happened.')],
        height=571,
        alt='The shape of the reflection in three steps -- when it was, what '
            'happened, why you remember it -- with a line of the model beside '
            'each one.'),

 30: lambda: F.function_map(
        [('I am sorry, something came up.', 'saying you cannot come'),
         ('Could we do it next Saturday instead?', 'offering another day'),
         ('I waited an hour.', 'saying what it cost you, carefully'),
         ('Thank you for letting me know.', 'accepting it without a fight')],
        height=580,
        alt='Four things you say when a plan changes, each with an arrow to what it '
            'does: saying you cannot come, offering another day, saying what it cost '
            'you carefully, and accepting it without a fight.'),

 31: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'I waited at the stop for an hour.'),
         ('Clerk', 'person', 'We stopped it at seven.'),
         ('Yuki', 'computer', 'Nobody telephoned me.'),
         ('Clerk', 'person', 'That was our mistake.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Yuki: I waited at the stop for an hour. Clerk: We stopped it at '
            'seven. Yuki: Nobody telephoned me. Clerk: That was our mistake.'),

 32: lambda: F.sequence_steps(
        [('Accept it and move on.', 'pin'),
         ('Listen to the reason.', 'list'),
         ('Say calmly what it cost you.', 'pricetag'),
         ('Agree the new arrangement.', 'list')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 the person who waited',
         ['say what happened', 'say nobody told you', 'say what it cost you', 'accept the offer'], 'person'),
        ('Card B \u2014 the office',
         ['apologise', 'give the reason', 'admit the mistake', 'offer something real'], 'computer'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 the person who '
            'waited: say what happened, say nobody told you, say what it cost '
            'you, accept the offer. Card B \u2014 the office: apologise, give the '
            'reason, admit the mistake, offer something real.'),

 34: lambda: F.writing_frame(
        [('what you booked', 'Good afternoon.'),
         ('what happened', 'I booked the Saturday trip and I waited.'),
         ('what you want', 'Nobody came and nobody telephoned.'),
         ('a calm tone', 'I understand that the driver was ill.')],
        height=734,
        alt='The shape of the Part 7 writing task in four steps -- what you '
            'booked, what happened, what you want, a calm tone -- with a line '
            'of the model beside each one.'),

 35: lambda: F.before_after(
        ('Forty hours', ['five days', 'tired workers',
                         'the same work'], 'clock'),
        ('Thirty-six', ['four days', 'the same pay',
                        'the same work'], 'sun'),
        height=520,
        alt='Iceland before and after the trial. Before: forty hours over five days, '
            'with tired workers. After: thirty-six hours over four days, on the '
            'same pay, and the same work got done.'),

 36: lambda: F.word_grid(
        [('trial', 'magnifier'), ('productivity', 'arrow_up'), ('burnout', 'bed'), ('union', 'crowd')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'trial, productivity, burnout, union.'),
 37: lambda: F.close_scene(
        [('the hospital', 'hospital'), ('the dinner', 'bowl'),
         ('a photograph of the cake', 'camera'), ('Sunday', 'bed')],
        height=460,
        alt='Tomas\'s Saturday night drawn along one evening: the hospital he '
            'was at by seven, the dinner at eight that he missed, the '
            'photograph of the cake he sent instead, and the Sunday he slept '
            'through until four.'),

 38: lambda: F.decision_fork(
        'Your job needs you at the weekend. What do you do?',
        [('Take the hours',
          ['the pay is better', 'you miss the dinner'], 'coins'),
         ('Ask to change to weekdays',
          ['you keep your weekend', 'you lose the extra pay'], 'calendar'),
         ('Protect one weekend a month',
          ['easy to ask for', 'you work the other three'], 'tick')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: take the hours for the better pay and miss the '
            'dinner; ask to change to weekdays and lose the extra pay; or '
            'keep the hours but protect one weekend a month, which is easy to '
            'ask for and hard to refuse.'),

 39: lambda: F.bank_strip(
        [('museum', 'museum'), ('picnic', 'picnic'), ('village', 'village'), ('windy', 'wind'), ('was', 'before_now'), ('were', 'before_now'), ('aisle', 'aisle'), ('timetable', 'timetable')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: '
            'museum, picnic, village, windy, was, were, aisle, timetable.'),

 40: lambda: F.progress_strip(
        [('I can name places outside the city and talk about the weather', False),
         ('I can use was, were and regular past verbs', False),
         ('I can understand people talking about their weekend', False),
         ('I can describe my last weekend in 50–70 words', False),
         ('I can sort out a plan that did not happen', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('museum', 'museum'), ('picnic', 'picnic'), ('concert', 'concert'), ('guest', 'guest'), ('beach', 'beach'), ('forest', 'forest'), ('village', 'village'), ('path', 'path'), ('windy', 'wind'), ('cloudy', 'cloud')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 5 as picture cards on one page: '
            'museum, picnic, concert, guest, beach, forest, village, path, '
            'windy, cloudy.'),
}
