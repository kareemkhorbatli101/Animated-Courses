"""Unit 19 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener(
        19, 'People, Places and Things',
        'Defining relative clauses',
        ['I can describe a person by what they do.',
         'I can use who, which, that and where correctly.',
         'I can point somebody out to somebody else.'],
        ['person', 'shoe', 'cloth', 'shop', 'home'],
        alt='The opening page of Unit 19, People, Places and Things: the grammar '
            'point is the defining relative clause, and three things the learner '
            'will be able to do by the end of the unit.'),

 2: lambda: F.scene(
        [('Amina', 'shop', 'the woman who runs the shop'),
         ('Tomas', 'nurse', 'the one who works nights'),
         ('Maya', 'book', 'the one who carries books'),
         ('Dani', 'kitchen', 'the boy who cooks badly'),
         ('Mr Okonkwo', 'home', 'the man who watches from the fourth floor'),
         ('Yuki', 'person', 'the one who knows everybody')],
        height=560,
        alt='How the street describes each of the six people at number 14 without '
            'using a name: the woman who runs the shop, the one who works nights, '
            'the one who carries books, the boy who cooks badly and loudly, the man '
            'who watches from the fourth floor, and the one who knows everybody.'),

 3: lambda: F.category_set(
        [('A tailor', 'cloth'), ('A builder', 'home'),
         ('An author', 'book'), ('An athlete', 'person')],
        height=460, cols=4,
        alt='The four jobs the table asks about, each on its own card: a tailor, a '
            'builder, an author and an athlete.'),

 4: lambda: F.label_me(
        [('who', 0.293, 0.13), ('which', 0.388, 0.30), ('that', 0.483, 0.47),
         ('where', 0.578, 0.64), ('whose', 0.668, 0.80)],
        height=620, draw=F.join_line,
        alt='Five pairs of boxes stepping down to the right, each pair joined by one '
            'link. The link shows what kind of thing the joining word takes: a '
            'filled circle for a person, a square for a thing, a circle and a '
            'square together for the word that takes either, a flat bar for a '
            'place, and a circle with a hook for the one that marks belonging. Five '
            'numbered lines run to the right for the learner to write each joining '
            'word.'),

 5: lambda: F.grammar_contrast(
        ('the woman who runs the shop', 'who — a person',
         'Only a person, and never a thing.', [0.28]),
        ('the bus which goes there', 'which — a thing',
         'Only a thing, and never a person.', [0.28, 0.52, 0.76]),
        height=640,
        alt='The unit’s grammar as two columns. On the left who, which joins a '
            'person and only a person. On the right which, which joins a thing and '
            'never a person — with that able to stand in either column, which is '
            'why it is the one people actually say.'),

 6: lambda: F.timeline(
        [('the shop', 'the woman who runs it'), ('the corner', 'the man who mends shoes'),
         ('number 9', 'the tailor'), ('number 12', 'the singer'),
         ('flat 1', 'the artist nobody has met')],
        height=460,
        alt='One street along a line, with each place described by the person in it: '
            'the shop and the woman who runs it, the corner and the man who mends '
            'shoes, the tailor at number 9, the singer at number 12, and the artist '
            'in flat 1 whom nobody has met.'),

 7: lambda: F.speakers(
        [('Track 19.2', 'Yuki and Amina', 'shop', 'the woman who knows which bus is late'),
         ('Track 19.3', 'Dani and Maya', 'shoe', 'the man who mends shoes'),
         ('Track 19.4', 'Amina', 'person', 'six people, six descriptions')],
        height=560,
        alt='The three listenings in this unit: Yuki asks Amina how she knows the 14 '
            'is late, Dani and Maya argue about the man on Mill Lane who mends only '
            'the heels of shoes, and Amina says how the street describes each of '
            'the six.'),

 8: lambda: F.cue_cards(
        ('Card A — asking', ['ask who it was', 'ask where',
                             'say you know the one', 'ask why they mentioned you'], 'person'),
        ('Card B — telling', ['name the person by what they do', 'narrow it with one more detail',
                              'wait to be recognised',
                              'give the reason last'], 'shoe'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: ask who it was, '
            'ask where, say you know the one, ask why they mentioned you. Card B, '
            'telling: name the person by what they do, narrow it with one more '
            'detail, wait to be recognised, give the reason last.'),

 9: lambda: F.process_strip(
        [('a new face', 'person'), ('a description', 'book'), ('the street uses it', 'shop'),
         ('it sticks', 'plaque'), ('the name is never learned', 'home')],
        height=460,
        alt='How a street holds a person it has not been introduced to, in five '
            'stages with an arrow to the next: a new face arrives, a description is '
            'made of them, the street uses the description, the description sticks, '
            'and the name is never learned at all.'),

 10: lambda: F.world_strip(
        [('Mill Lane', 'plaque', 'no mill; a family called Mill paid for the road'),
         ('Half of one city', 'home', 'the daughters of the man who built them, then cousins'),
         ('Forty streets', 'plaque', 'one woman who ran a school, and one small book')],
        height=460,
        alt='Three places named after a person: Mill Lane, which has no mill and is '
            'named after a family called Mill who paid for the road; half of one '
            'city whose roads carry the names of the daughters of the man who built '
            'them, and then his cousins, because there were only eleven daughters; '
            'and about forty streets across England named after one woman who ran a '
            'school for children who could not hear, each chosen by a town office '
            'that had read the same small book.'),

 11: lambda: F.writing_frame(
        [('The person', 'There is a man who walks a dog past my window.'),
         ('What they did', 'He is the person who told me which bin day it was.'),
         ('How long', 'I have lived here four years.'),
         ('What never happens', 'I have never had a conversation with him.')],
        height=520,
        alt='The shape of the piece the learner is about to write, in four steps: '
            'the person, described by what they do; one thing they did; how long you '
            'have been there; and the thing that never happens.'),

 12: lambda: F.function_map(
        [('The one with the red bag.', 'narrowing it by what you can see now'),
         ('The man who was here yesterday.', 'narrowing it by when'),
         ('You know the one.', 'asking them to remember instead of listening'),
         ('Not that one — the other one.', 'correcting a wrong guess without explaining')],
        height=580,
        alt='Four things people say when they point somebody out, each with an arrow '
            'to what it does: narrowing it by what you can see now, narrowing it by '
            'when, asking them to remember instead of listening, and correcting a '
            'wrong guess without explaining it.'),

 13: lambda: F.before_after(
        ('On the loom', ['thin strips', 'planned before the first thread',
                         'lines that repeat'], 'loom'),
        ('On the cloth', ['sewn side by side', 'a name for every pattern',
                          'a sentence said by the cloth'], 'cloth'),
        height=520,
        alt='A pattern on a loom beside the cloth it becomes. On the loom: narrow '
            'strips, woven on a frame a man sits inside, planned before the first '
            'thread goes on. On the cloth: the strips sewn side by side, a name for '
            'every pattern, and a cloth that says something when it is worn.'),

 14: lambda: F.progress_strip(
        [('I can describe a person by what they do', False),
         ('I can use who, which, that and where correctly', False),
         ('I can point somebody out to somebody else', False),
         ('I can describe a person in 50–70 words without using a name', False),
         ('I can correct somebody about a name without a quarrel', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
