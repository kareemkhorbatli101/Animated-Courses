# -*- coding: utf-8 -*-
"""Unit 56 - Climate Attribution.

Cycle 3 is the European summer of 2003 and the paper of Stott,
Stone and Allen that followed it, the first formal event
attribution: two ensembles, one carrying the observed human
forcing and one without it, the 2003 seasonal mean located in
each distribution, and the conclusion that human influence had
more likely than not more than doubled the risk of a summer of
that severity - with an explicit refusal to assert that the event
would not have occurred otherwise.

Cycle 4 is the method as a quantity and its conditions. The risk
ratio is a division whose second term is a world that does not
exist, so the estimate is an inference from a simulation and
every dispute lives in four conditions: a large enough ensemble
to populate the tail, a model whose statistics survive hindcast
comparison (a weak test, since tuning and testing share their
years), an event defined before the data are inspected, and a
stated specification of which forcings are removed. The
thermodynamic contribution is simulated well and the dynamic one
badly, which orders the field: heatwaves, then droughts, then
storm tracks.

Cycle 5 accepts the arithmetic and attacks the reporting. A small
ensemble or a poorly simulated circulation returns no detection
of a change in risk, which is transmitted as a demonstration of
absence - and the method has least power exactly where the
dynamics did the damage, so its failures are published as facts.
Two analyst choices, the event definition and the reference
climate, move the answer by more than its stated uncertainty. The
storyline alternative conditions on the circulation that actually
occurred and asks what the extra heat and moisture did, which the
models answer robustly; the conceded cost is that it furnishes no
probability, which is precisely what a court, an insurer and a
public authority require."""

UNIT = {'n': 56,
 'vol': 6,
 'level': 'C1',
 'title': 'Climate Attribution',
 'grammar': 'Modal stacking and graded commitment',
 'field': 'forcing, ensemble, attribution',
 'names': ('Stott',
           'Stone',
           'Allen',
           'Anneke',
           'Rustam',
           'Eriksen',
           'Okonkwo',
           'Folasade',
           'Tarnbrook',
           'Harrowfield',
           'Alderton',
           'Ingrid',
           'Vasquez',
           'Bellanger',
           'Yevgenia',
           'Casimir'),
 'opener_line': 'This unit is about a question that had to be rewritten before it could be '
                'answered. Nobody can say whether one hot summer was our doing, and that is a '
                'fact about the question rather than about the evidence. Cycle 4 sets out the '
                'quantity the field estimates instead, a ratio of two probabilities, and the '
                'four conditions it depends on. Cycle 5 then attacks what the method reports '
                'when it fails, and proposes a conditional answer that gives up the probability '
                'altogether.',
 'subs': ['When a summer breaks a record',
          'How an event is attributed',
          'What attribution cannot settle'],
 'icons': ['chart', 'brief', 'brain'],
 'acad': [('presumably', 'as may reasonably be assumed'),
          ('conceivably', 'as is just possible'),
          ('plausibly', 'in a way worth taking seriously'),
          ('notionally', 'in theory, whatever happens in practice'),
          ('appreciably', 'by enough to matter'),
          ('markedly', 'to a degree anybody would notice'),
          ('substantially', 'by a large amount'),
          ('marginally', 'by a very small amount'),
          ('provisionally', 'for now, pending something better'),
          ('tentatively', 'without committing yet'),
          ('categorically', 'with no qualification at all'),
          ('unequivocally', 'leaving no room for another reading'),
          ('robustly', 'in a way that survives the checks'),
          ('intrinsically', 'by its own nature rather than by accident')],
 'fieldwords': [('forcing', 'an imposed change in the energy balance'),
                ('ensemble', 'a set of runs of the same model'),
                ('stationarity', 'the assumption that the past still applies'),
                ('hindcast', 'a run of a model over a period already known'),
                ('exceedance', 'the event of a threshold being passed'),
                ('percentile', 'the rank of a value in a distribution'),
                ('dynamics', 'the circulation, as against the heat'),
                ('thermodynamic', 'to do with heat rather than with flow'),
                ('storyline', 'an account of one event as it unfolded'),
                ('reanalysis', 'the observed record rebuilt by a model'),
                ('radiative', 'carried by radiation'),
                ('heatwave', 'a run of days far above the normal'),
                ('aerosol', 'fine particles that reflect sunlight'),
                ('albedo', 'the share of light a surface throws back'),
                ('downscaling', 'bringing a coarse model to local size'),
                ('teleconnection', 'a link between distant parts of the system')],
 'collocs': [('a return period', 'how rarely an event of that size comes'),
             ('once in a century', 'a one per cent chance each year'),
             ('all other things being equal', 'with nothing else changed'),
             ('by a wide margin', 'not close'),
             ('in round numbers', 'approximately, for the sake of argument'),
             ('at the margin', 'where the last unit of change falls'),
             ('a rule of thumb', 'a rough guide good enough for use'),
             ('to err on the side of caution', 'to choose the safer mistake'),
             ('in the long run', 'over a period long enough to average'),
             ('for the time being', 'until something changes')],
 'stance': [('we can say with confidence', 'the strongest claim the data allows'),
            ('it is likely though not certain', 'a graded commitment'),
            ('we cannot rule out', 'leaving a possibility open'),
            ('on any reasonable reading', 'bounding an interpretation'),
            ('the honest answer is we do not know', 'declining to guess')],
 'nuance': [('likely / certain', 'a probability / no doubt at all'),
            ('cause / make more likely', 'brought about / raised the odds'),
            ('weather / climate', 'one day / the whole distribution')],
 'candos': ['I can stack modals to grade a claim precisely.',
            'I can distinguish causing an event from raising its probability.',
            'I can explain what an ensemble is for.',
            'I can say why the historical record may no longer apply.',
            'I can describe what a null result does and does not show.',
            'I can state the honest answer when it is that nobody knows.'],
 'vocab_talk': ['Has the weather where you live changed in your own lifetime?',
                'What would you need before calling one hot summer evidence?',
                'Describe a design decision that assumed the future resembles the past.',
                'Who should pay for a flood defence that may not be needed?'],
 'again': ['attribution',
           'counterfactual',
           'anomaly',
           'baseline',
           'calibration',
           'sensitivity',
           'threshold',
           'confounder'],
 'family': ('force',
            [('forcing', 'noun', 'the radiative forcing is measured in watts'),
             ('forced', 'adjective', 'the forced run includes human influence'),
             ('unforced', 'adjective', 'an unforced run shows natural variation only')]),
 'r1': {'sub': 'When a summer breaks a record',
        'skill': ('Stacking modals, and the vocabulary of degree',
                  ['May well, would probably, could conceivably, cannot have: read the stack '
                   'from the outside in.',
                   'Appreciably, marginally, markedly, substantially: these are quantities, not '
                   'emphasis.',
                   'Provisionally and tentatively describe you, not the figure.']),
        'guided_text': 'English grades a claim by stacking one modal word on another, and the '
                       'stack is read from the outside in. It may well have been the hottest '
                       'June on record says that the claim is ----able and not established. It '
                       'would ----ably have been cooler without the human contribution says that '
                       'a different world is being described and that the writer is confident '
                       'about it. It could -------ably have happened anyway concedes a '
                       'possibility without granting it any weight. And it cannot have been '
                       'natural variation --one is a flat denial dressed as a modal. Learn the '
                       'ladder and you can say exactly how much you are -----ing.',
        'guided': ['prob', 'prob', 'conceiv', 'al', 'claim'],
        'guided_hint': '----able is probable — the slot follows is, so it needs an adjective.',
        'exam_text': 'The vocabulary of degree does the same work for quantities. A figure that '
                     'rises ------iably has risen by enough to matter; one that rises ------ally '
                     'has risen by an amount you would not act upon; one that rises ------ly has '
                     'risen by an amount anybody would notice. --------ially is stronger again '
                     'and is the word to avoid unless you have the number. Then there are the '
                     'words about your own position rather than the quantity. A conclusion '
                     'offered ---------ally is one you expect to revise; a conclusion offered '
                     '------ively is one you have not yet committed to; and a conclusion stated '
                     '-------ically has no qualification left in it at all. Examiners read these '
                     'words as precisely as a scientist does, so a claim made ---------ally and '
                     'then hedged in the next sentence loses marks twice: once for the '
                     '---------tion and once for not knowing what the first word --ant.',
        'exam': ['apprec',
                 'margin',
                 'marked',
                 'Substant',
                 'provision',
                 'tentat',
                 'categor',
                 'unequivoc',
                 'contradic',
                 'me']},
 'r2': {'sub': 'What a design standard assumes',
        'skill': ('Reading a design standard against an engineer’s objection',
                  ['A standard states a return period and, by implication, the record it came '
                   'from.',
                   'The objection usually accepts the standard and attacks the record behind it.',
                   'A question about the reply wants the proposal, not the complaint.']),
        'docs': [('notice',
                  'Tarnbrook Borough · surface water design standard, revision 7',
                  ['# What new drainage must be designed for',
                   'The one in thirty year rainfall event, with no surcharging of the highway.',
                   '# Where the figures come from',
                   '* The national rainfall statistics published in 1999, applied with the local '
                   'uplift factor of 1.1.',
                   '# Exceedance',
                   '* Flows above the design event must be shown to follow a route that floods '
                   'no habitable room.',
                   '# What is exempt',
                   '* Any scheme of fewer than ten dwellings, and any replacement of an existing '
                   'pipe of the same size.',
                   '# Review',
                   '* This standard is reviewed on the publication of new national statistics.'],
                  'notice'),
                 ('email',
                  'f.okonkwo@tarnbrook.gov.uk',
                  'drainage@tarnbrook.gov.uk',
                  '11/03/2034',
                  'Revision 7 — the standard is sound and the statistics behind it are '
                  'thirty-five years old',
                  ['Dear colleagues,',
                   '',
                   'Revision 7 is a better document than revision 6 and I would adopt',
                   'it tomorrow with one amendment. The exceedance clause in particular',
                   'is the single most useful sentence in the borough’s planning',
                   'guidance.',
                   '',
                   'My difficulty is the source. We design to the one in thirty event',
                   'and we take that event from statistics published in 1999, which',
                   'rest on records gathered mostly between 1961 and 1990. That is a',
                   'defensible choice if rainfall is stationary and an indefensible one',
                   'if it is not. The gauge at Harrowfield has recorded four events',
                   'above the 1999 one in thirty figure in the last eleven years. On any',
                   'reasonable reading, four in eleven is not one in thirty.',
                   '',
                   'I am not asking for a new national dataset, which is not ours to',
                   'produce. I am asking for a single clause: the design event is the',
                   'published figure or the highest observed local event of the last',
                   'twenty years, whichever is greater. That is arithmetic anybody in',
                   'this office can do, it uses data we already hold, and it stops us',
                   'building to a climate that has gone.',
                   '',
                   'Folasade Okonkwo, Drainage Engineer'])],
        'guided': [('What must new drainage be designed for?',
                    ('The worst event on record',
                     'The one in thirty year rainfall event, with no surcharging of the highway',
                     'The one in a hundred year event',
                     'Whatever the developer proposes'),
                    1,
                    'With an exceedance route required above that.'),
                   ('Where do the figures come from?',
                    ('Local gauges',
                     'National rainfall statistics published in 1999, with a local uplift factor',
                     'A model run by the borough',
                     'The developer’s consultant'),
                    1,
                    'The uplift factor of 1.1 is applied to the published national figures.'),
                   ('What must happen to flows above the design event?',
                    ('They must be stored',
                     'They must follow a route that floods no habitable room',
                     'They must be pumped',
                     'Nothing is required'),
                    1,
                    'That is the exceedance clause.'),
                   ('What is exempt from the standard?',
                    ('Schemes of more than ten dwellings',
                     'Schemes of fewer than ten dwellings, and like for like pipe replacement',
                     'All highway drainage',
                     'Nothing'),
                    1,
                    'Two exemptions, both of them small works.')],
        'exam': [('What does Folasade Okonkwo say about revision 7?',
                  ('It is worse than revision 6',
                   'It is better than revision 6 and she would adopt it with one amendment',
                   'It should be withdrawn',
                   'It is too detailed'),
                  1,
                  'She singles out the exceedance clause for praise.'),
                 ('What is her difficulty?',
                  ('The uplift factor',
                   'The source of the design event',
                   'The exemptions',
                   'The review clause'),
                  1,
                  'The statistics rest on records gathered mostly between 1961 and 1990.'),
                 ('When is taking the 1999 figures defensible?',
                  ('Always',
                   'If rainfall is stationary',
                   'If the uplift factor is raised',
                   'Never'),
                  1,
                  'And indefensible if it is not.'),
                 ('What has the gauge at Harrowfield recorded?',
                  ('No events above the design figure',
                   'Four events above the 1999 one in thirty figure in eleven years',
                   'One event above it',
                   'Thirty events in thirty years'),
                  1,
                  'On any reasonable reading, four in eleven is not one in thirty.'),
                 ('What is she not asking for?',
                  ('A clause in the standard',
                   'A new national dataset',
                   'A higher uplift factor',
                   'An exemption'),
                  1,
                  'She says it is not the borough’s to produce.'),
                 ('What clause does she propose?',
                  ('A one in a hundred standard throughout',
                   'The design event is the published figure or the highest local event of the '
                   'last twenty years, whichever is greater',
                   'An annual review of the standard',
                   'A new gauge at Harrowfield'),
                  1,
                  'Arithmetic anybody in the office can do.'),
                 ('What does she say the proposal uses?',
                  ('A new national dataset',
                   'A consultant’s model',
                   'Data the office already holds',
                   'The developer’s figures'),
                  2,
                  'Which is the argument for adopting it at once.')]},
 'r3': {'sub': 'The summer that invented a method',
        'title': 'The Question Nobody Had Asked Before 2003',
        'words': 299,
        'skill': ('Reading the paper that turned a question into arithmetic',
                  ['The event and its description come first, and neither is disputed.',
                   'Then the method: two ensembles, and what was compared.',
                   'A question about the ending wants what the result is a result about.']),
        'paras': ['The European summer of 2003 produced temperatures without precedent in the '
                  'instrumental record and an excess mortality subsequently estimated at some '
                  'seventy thousand, concentrated in the first fortnight of August and among the '
                  'elderly living alone in cities. The meteorological description was '
                  'uncontroversial: a blocking anticyclone of unusual persistence over western '
                  'Europe, soils already dry, and a consequent collapse of the evaporative '
                  'cooling upon which a continental summer ordinarily depends. The question '
                  'nobody had previously attempted was whether the event belonged to the climate '
                  'humanity has altered or to the variability any climate exhibits.',
                  'The paper of Stott, Stone and Allen, published the following year, converted '
                  'that question into one susceptible of arithmetic. Two ensembles of model runs '
                  'were compared, one incorporating the observed human forcing and one without '
                  'it. The seasonal mean temperature of 2003 was located within each '
                  'distribution and the resulting probabilities of exceedance set side by side. '
                  'The conclusion, stated with the caution the method requires, was that human '
                  'influence had more likely than not more than doubled the risk of a summer of '
                  'that severity, and the authors declined, on any reasonable reading of their '
                  'own figures, to assert that the event would not have occurred otherwise.',
                  'Three features of that result have outlasted its particular numbers. The '
                  'quantity estimated is a change in probability rather than a cause, so the '
                  'attribution survives the admission that we cannot rule out an identical '
                  'summer in an unaltered climate. The estimate is conditional upon the models '
                  'employed and upon the definition of the event, each of which the analyst '
                  'selects. And the finding is expressed as a bound rather than as a point, '
                  'because the serviceable claim for a public authority is the minimum its '
                  'evidence supports and not the central value a newspaper will quote.'],
        'guided': [('What was the estimated excess mortality of the 2003 summer?',
                    ('Seven thousand',
                     'Some seventy thousand',
                     'Seven hundred thousand',
                     'It was never estimated'),
                    1,
                    'Concentrated in the first fortnight of August.'),
                   ('What was uncontroversial about the event?',
                    ('Its cause',
                     'Its meteorological description',
                     'Its mortality',
                     'Its attribution'),
                    1,
                    'A blocking anticyclone, dry soils, and a collapse of evaporative cooling.'),
                   ('What question had nobody previously attempted?',
                    ('How many had died',
                     'Whether the event belonged to the altered climate or to ordinary '
                     'variability',
                     'Whether the soils were dry',
                     'How long the anticyclone persisted'),
                    1,
                    'Which is the question the method was invented to answer.'),
                   ('What did the two ensembles differ in?',
                    ('Their resolution',
                     'One incorporated the observed human forcing and one did not',
                     'Their length',
                     'The region modelled'),
                    1,
                    'Everything else about them was the same.')],
        'exam': [('What was compared between the two ensembles?',
                  ('The mean temperatures',
                   'The probabilities of exceeding the 2003 seasonal mean',
                   'The number of runs',
                   'The mortality figures'),
                  1,
                  'The 2003 value was located within each distribution first.'),
                 ('What was the conclusion?',
                  ('That human influence caused the heatwave',
                   'That human influence had more likely than not more than doubled the risk of '
                   'such a summer',
                   'That the summer was within natural variability',
                   'That no conclusion was possible'),
                  1,
                  'Stated with the caution the method requires.'),
                 ('What did the authors decline to assert?',
                  ('That the risk had risen',
                   'That the event would not have occurred otherwise',
                   'That the models were adequate',
                   'That the mortality was attributable'),
                  1,
                  'On any reasonable reading of their own figures.'),
                 ('What is the quantity the method estimates?',
                  ('A cause', 'A change in probability', 'A mortality figure', 'A temperature'),
                  1,
                  'Which is why the attribution survives an awkward admission.'),
                 ('What admission does the attribution survive?',
                  ('That the models are coarse',
                   'That an identical summer cannot be ruled out in an unaltered climate',
                   'That the mortality is uncertain',
                   'That the record is short'),
                  1,
                  'A change in probability is compatible with that possibility.'),
                 ('What is the estimate conditional upon?',
                  ('The season chosen',
                   'The models employed and the definition of the event',
                   'The mortality data',
                   'The length of the record'),
                  1,
                  'Each of which the analyst selects.'),
                 ('Why is the finding expressed as a bound?',
                  ('Because the models disagree',
                   'Because a public authority needs the minimum the evidence supports',
                   'Because the data are incomplete',
                   'Because a point estimate is harder to compute'),
                  1,
                  'Rather than the central value a newspaper will quote.'),
                 ('Which description of the paper does the writer support?',
                  ('It proved that the heatwave was man-made',
                   'It converted a question into one susceptible of arithmetic',
                   'It settled the mortality figure',
                   'It replaced the meteorological account'),
                  1,
                  'The meteorological account was never in dispute.'),
                 ('Which feature does the writer say has outlasted the numbers?',
                  ('The mortality estimate',
                   'The anticyclone',
                   'The form of the claim',
                   'The model resolution'),
                  2,
                  'A change in probability, conditional on choices, expressed as a bound.')]},
 'r4': {'sub': 'How an event is attributed',
        'title': 'Two Worlds, Many Runs',
        'words': 426,
        'skill': ('Reading a method set out as a quantity and its conditions',
                  ['The quantity comes first, defined as a ratio.',
                   'Then the four conditions the estimate depends upon.',
                   'A question about the ending wants the division the method relies on.']),
        'paras': ['Event attribution estimates a ratio rather than a cause. The probability of '
                  'an event of a specified magnitude is computed in the climate as observed and '
                  'again in a counterfactual climate from which the human forcing has been '
                  'removed, and the ratio of the two is the risk ratio, of which the '
                  'attributable fraction is a simple rearrangement. A risk ratio of three means '
                  'that an exceedance of that magnitude arrives three times as often as it '
                  'formerly did, and implies nothing whatever about the individual event that '
                  'gave rise to the question. The counterfactual climate is not observable and '
                  'is accordingly simulated, which makes the whole estimate an inference from a '
                  'simulation and locates every serious dispute in the conditions below rather '
                  'than in the arithmetic above. The arithmetic is a division; the conditions '
                  'are the whole of the science.',
                  'Four conditions bear upon the computation. The ensemble must be large, '
                  'because the quantity of interest lives in the tail of a distribution and a '
                  'hundred runs furnish few exceedances of a ninety-ninth percentile, so that '
                  'the estimation of a tail probability from a small ensemble is an exercise in '
                  'extrapolation rather than in measurement. The model must reproduce the '
                  'relevant statistics of the observed distribution, which is established by '
                  'hindcast comparison against the reanalysis and is a weaker test than it '
                  'appears, since a model tuned upon a period cannot be tested upon it. The '
                  'event must be defined before the data are inspected, because an adjustment '
                  'made afterwards guarantees the finding it was designed to produce. And the '
                  'counterfactual requires a specification of which forcings are removed, '
                  'radiative and aerosol influences being of opposite sign and unequal '
                  'assurance.',
                  'A distinction internal to the physics decides how much the method can '
                  'deliver. The thermodynamic contribution, which is the additional heat and the '
                  'additional moisture a warmer atmosphere carries, is simulated with some '
                  'confidence and scales in a manner a standard relation will supply. The '
                  'dynamic contribution, which is the behaviour of the circulation that '
                  'delivered the heat to one continent rather than another, is simulated '
                  'considerably less well, and the models disagree among themselves about the '
                  'direction of its response, a disagreement concerning the representation of '
                  'the circulation and not the resolution of the grid alone. An attribution of a '
                  'heatwave is therefore more secure than an attribution of a drought, and an '
                  'attribution of a drought more secure than an attribution of a single storm '
                  'track, and the passage that follows asks what becomes of the method where the '
                  'dynamics carry the event.'],
        'guided': [('What does event attribution estimate?',
                    ('A cause',
                     'A ratio of two probabilities',
                     'A temperature',
                     'A mortality figure'),
                    1,
                    'The attributable fraction is a rearrangement of that ratio.'),
                   ('What does a risk ratio of three signify?',
                    ('That the event was three times as severe',
                     'That an exceedance of that magnitude arrives three times as often as it '
                     'formerly did',
                     'That three models agree',
                     'That the event was caused three ways'),
                    1,
                    'And nothing whatever about the particular occurrence.'),
                   ('Why is the whole estimate an inference from a model?',
                    ('The observations are poor',
                     'The counterfactual climate is not observable and must be simulated',
                     'The arithmetic is disputed',
                     'The ensemble is small'),
                    1,
                    'Which locates the disputes in the conditions rather than in the '
                    'arithmetic.')],
        'exam': [('Why must the ensemble be large?',
                  ('To reduce computing cost',
                   'Because the quantity of interest lives in the tail of a distribution',
                   'To include more models',
                   'To cover more regions'),
                  1,
                  'A hundred runs furnish few exceedances of a ninety-ninth percentile.'),
                 ('Why is the hindcast a weaker test than it appears?',
                  ('The reanalysis is incomplete',
                   'A model tuned upon a period cannot be tested upon it',
                   'Hindcasts are expensive',
                   'The period is too short'),
                  1,
                  'The test and the tuning use the same years.'),
                 ('Why must the event be defined before the data are inspected?',
                  ('To save time',
                   'Because an adjustment made afterwards guarantees the finding it was designed '
                   'to produce',
                   'Because definitions are conventional',
                   'Because the model requires it'),
                  1,
                  'Which is the condition most easily broken without notice.'),
                 ('What does the counterfactual require a specification of?',
                  ('The region modelled',
                   'The length of the run',
                   'Which forcings are removed',
                   'The percentile chosen'),
                  2,
                  'Radiative and aerosol influences are of opposite sign and unequal assurance.'),
                 ('Which attribution does the writer call the most secure?',
                  ('A single storm track',
                   'A drought',
                   'A heatwave',
                   'All three are equally secure'),
                  2,
                  'Because the thermodynamic contribution is simulated with some confidence.')]},
 'r5': {'sub': 'What attribution cannot settle',
        'title': 'The Null Result That Means Nothing',
        'words': 431,
        'skill': ('Reading an objection about what a method reports when it fails',
                  ['The objection concerns the reporting of absence rather than the arithmetic.',
                   'Then the two analyst choices that move the answer.',
                   'The alternative is set out, and then its cost.']),
        'paras': ['The arithmetic is not in dispute in the objection that follows; the reporting '
                  'of a negative is. Where an ensemble is too small, or a model reproduces the '
                  'circulation poorly, the probabilistic computation returns no detection of a '
                  'change in risk, and that sentence is then transmitted into public discussion '
                  'as a demonstration of the absence of human influence. The two propositions '
                  'are distinct, the confusion between them is systematic, and the explanation '
                  'is that the method has considerably more power of detection for a '
                  'thermodynamic signal than for a dynamic one and will accordingly report '
                  'nothing most often for precisely those events whose dynamics did the damage. '
                  'A procedure whose failures admit of no distinction from its negative findings '
                  'is reporting its own limitation as a property of the world, and the '
                  'correction is a clause of reporting discipline rather than a new method.',
                  'Two choices made by whoever performs the computation move the answer by more '
                  'than the uncertainty attached to it. The definition of the event is the '
                  'first: a heatwave specified as a three-day maximum, a summer mean or a '
                  'regional percentile yields three different ratios for one summer, and no '
                  'consideration internal to the subject effects a selection among them. The '
                  'reference climate is the second, since a counterfactual constructed from the '
                  'nineteenth century and one constructed from 1990 are separated by most of the '
                  'observed warming, and the published figure is without interpretation except '
                  'beside the baseline against which it was computed. Neither choice is '
                  'suppressed in a careful publication. Neither survives into the sentence a '
                  'minister reads.',
                  'The alternative proposed is conditional rather than probabilistic and is '
                  'commonly termed a storyline, in deliberate opposition to the probabilistic '
                  'convention. The circulation that actually occurred is taken as given, and the '
                  'question becomes how much more severe the resulting event was made by the '
                  'additional heat and moisture the atmosphere now carries, which is a '
                  'thermodynamic question admitting of a robust simulation. For a city the '
                  'conditional answer is also the serviceable one, since a drainage authority '
                  'faces not a counterfactual century but the next storm of that description. '
                  'The distinction is one of question rather than of quality, a conditional '
                  'estimate and a probabilistic estimate being answers to different enquiries. '
                  'The cost is substantial and is conceded without hesitation: a storyline '
                  'furnishes no probability, a court, an insurer and a public authority all '
                  'require precisely the quantity it declines to supply, and the two approaches '
                  'are accordingly reported together, so that a reader must establish which of '
                  'them produced the number in front of him.'],
        'guided': [('What is not in dispute in the objection?',
                    ('The reporting of a negative',
                     'The arithmetic',
                     'The definition of the event',
                     'The reference climate'),
                    1,
                    'What is in dispute is the reporting of a negative.'),
                   ('What does the computation return when the ensemble is too small?',
                    ('An error',
                     'No detection of a change in risk',
                     'A larger ratio',
                     'A conditional answer'),
                    1,
                    'Which is then transmitted as a finding of absence.'),
                   ('Why is the confusion systematic?',
                    ('Journalists are careless',
                     'The method has more power to detect a thermodynamic signal than a dynamic '
                     'one',
                     'The models are too simple',
                     'The definitions vary'),
                    1,
                    'So it reports nothing most often for the events whose dynamics did the '
                    'damage.')],
        'exam': [('What does the definition of the event do to the result?',
                  ('Nothing measurable',
                   'A three-day maximum, a summer mean and a regional percentile yield three '
                   'different ratios',
                   'It fixes the reference climate',
                   'It determines the ensemble size'),
                  1,
                  'And no principle of the subject selects among them.'),
                 ('Why does the reference climate matter?',
                  ('It sets the ensemble size',
                   'A counterfactual from the nineteenth century and one from 1990 differ by '
                   'most of the observed warming',
                   'It fixes the percentile',
                   'It determines the model'),
                  1,
                  'The published figure is intelligible only beside its baseline.'),
                 ('What does a storyline take as given?',
                  ('The reference climate',
                   'The circulation that actually occurred',
                   'The ensemble size',
                   'The event definition'),
                  1,
                  'And asks how much worse the additional heat and moisture made the event.'),
                 ('Why is the conditional answer useful to a city?',
                  ('It is cheaper to compute',
                   'A drainage authority faces the next storm of that description rather than a '
                   'counterfactual century',
                   'It produces a probability',
                   'It avoids the models'),
                  1,
                  'Which is the practical case for the alternative.'),
                 ('What is the cost of a storyline?',
                  ('It requires a larger ensemble',
                   'It furnishes no probability',
                   'It cannot be tested',
                   'It ignores the thermodynamics'),
                  1,
                  'A litigant, an insurer and a regulator all require that quantity.')]},
 'l1': {'sub': 'When a summer breaks a record',
        'caption': 'Two neighbours after a flood, waiting for an adjuster',
        'skill': ('Hearing somebody refuse both easy answers',
                  ['Two claims are rejected, one from each side. Follow the reason.',
                   'Listen for what she says the right question is.',
                   'The item about the culvert is the one the conversation is for.']),
        'warm': [('Man: So this was climate change.',
                  ('It made this likelier. That is not quite the same thing.',
                   'Yes, entirely.',
                   'A return period.',
                   'Thirty years.'),
                  0,
                  'Raising a probability and causing an event differ.'),
                 ('Man: Then it was just bad luck.',
                  ('Bad luck that has become about three times commoner.',
                   'Yes, pure luck.',
                   'Once in a century.',
                   'A culvert.'),
                  0,
                  'She refuses the second easy answer as well.'),
                 ('Man: What should I be asking the council?',
                  ('What return period the drains were built for, and when.',
                   'Whether to move.',
                   'Who is to blame.',
                   'Marginally.'),
                  0,
                  'The design standard is the answerable question.')],
        'script': [('Woman',
                    'Before the adjuster arrives, can I say something about the sentence you are '
                    'about to use?'),
                   ('Man', 'That this was climate change.'),
                   ('Woman',
                    'Yes. It is nearly right and it will be picked apart, and then the other '
                    'side will say it was bad luck, and that is wrong too. Both of those are the '
                    'same mistake in opposite directions.'),
                   ('Man', 'They cannot both be wrong.'),
                   ('Woman',
                    'They can, because the honest thing is a number rather than a yes or a no. '
                    'Nobody can tell you that your house would be dry today in a world without '
                    'us. What they can tell you is that rainfall of this amount in this valley '
                    'used to come about once in a hundred years and now comes about once in '
                    'thirty.'),
                   ('Man', 'That sounds like climate change to me.'),
                   ('Woman',
                    'It is, and notice what it does not say. It does not say that this '
                    'particular Tuesday was caused by anything. The event had to happen on some '
                    'Tuesday. What has changed is how often that kind of Tuesday arrives.'),
                   ('Man', 'So who do I argue with?'),
                   ('Woman',
                    'The council, and not about the weather. Ask what return period the culvert '
                    'under Alderton Lane was designed for, and what year it was built. If it was '
                    'built in 1974 to a one in a hundred standard, then it was built for a '
                    'climate that no longer exists, and that is a fact about a drain rather than '
                    'a fact about the atmosphere.'),
                   ('Man', 'And that is an argument I can win.'),
                   ('Woman',
                    'It is an argument somebody has to answer, which is better. Nobody has to '
                    'answer whether this was climate change. Somebody does have to answer what '
                    'standard the drain was built to and whether it is still the right one.')],
        'items': [('What two claims does the woman reject?',
                   ('That the flood was predictable and that it was not',
                    'That this was climate change, and that it was bad luck',
                    'That the council is liable and that it is not',
                    'That the culvert is too small and too old'),
                   1,
                   'She calls them the same mistake in opposite directions.'),
                  ('What does she say the honest thing is?',
                   ('A yes',
                    'A number rather than a yes or a no',
                    'A refusal to answer',
                    'A model run'),
                   1,
                   'Nobody can say the house would be dry in a world without us.'),
                  ('What figure does she give?',
                   ('A rise of three degrees',
                    'Rainfall of that amount used to come once in a hundred years and now comes '
                    'about once in thirty',
                    'A hundred millimetres in a day',
                    'A one per cent annual chance'),
                   1,
                   'That is the form an attribution claim takes.'),
                  ('What does she say the figure does not say?',
                   ('That rainfall has increased',
                    'That this particular Tuesday was caused by anything',
                    'That the valley is at risk',
                    'That the culvert is undersized'),
                   1,
                   'The event had to happen on some Tuesday.'),
                  ('What should he ask the council?',
                   ('Whether the weather has changed',
                    'What return period the culvert was designed for, and in what year',
                    'Who is to blame for the flood',
                    'What the forecast is'),
                   1,
                   'A fact about a drain rather than a fact about the atmosphere.'),
                  ('Why does she prefer that question?',
                   ('It is cheaper to answer',
                    'Somebody has to answer it',
                    'It is more interesting',
                    'The council has the figures'),
                   1,
                   'Nobody has to answer whether this was climate change.'),
                  ('What does she say about a culvert built in 1974 to a one in a hundred '
                   'standard?',
                   ('It is adequate',
                    'It was built for a climate that no longer exists',
                    'It should be replaced immediately',
                    'It was built to the wrong standard then'),
                   1,
                   'The standard may have been right when it was set.')]},
 'l2': {'sub': 'What a design standard assumes',
        'poster': ['Design event: one in thirty, no highway surcharging',
                   'Source: national statistics, 1999, uplift 1.1',
                   'Above the design event: a route flooding no habitable room'],
        'caption': 'The borough engineer briefing the planning committee',
        'skill': ('Hearing an engineer accept an objection about his own figures',
                  ['He restates the objection as arithmetic before conceding it.',
                   'Note what the new clause costs and what it buys.',
                   'The item about the review carries the lesson.']),
        'warm': [('Woman: Is the one in thirty standard too low?',
                  ('The standard is right. The figure behind it has moved.',
                   'Yes, far too low.',
                   'From 1999.',
                   'Four events.'),
                  0,
                  'His concession is about the source, not the standard.'),
                 ('Woman: What will you change?',
                  ('Take the worse of the published figure and our own gauge.',
                   'Nothing at all.',
                   'The uplift factor.',
                   'A new dataset.'),
                  0,
                  'Whichever is greater, on twenty years of local record.'),
                 ('Woman: Does that cost much?',
                  ('Larger pipes on about one scheme in six.',
                   'A new treatment works.',
                   'Nothing whatever.',
                   'Eleven years.'),
                  0,
                  'The cost falls on new building rather than on the borough.')],
        'script': [('Man',
                    'Ms Okonkwo has written to us about revision 7 and she is right, so let me '
                    'put her objection as arithmetic rather than as an argument about the '
                    'climate, because the committee can vote on arithmetic. We design to the one '
                    'in thirty year storm. We take the size of that storm from national '
                    'statistics published in 1999, and those statistics were built mostly from '
                    'rain gauges reading between 1961 and 1990. So the storm we design for is '
                    'the storm of a thirty-year window that ended when I was at school. Now the '
                    'awkward number. Our own gauge at Harrowfield has exceeded that figure four '
                    'times in the last eleven years. Four in eleven is not one in thirty, and no '
                    'amount of discussion about whether this is climate change changes the '
                    'division. Either the gauge is broken or the figure is out of date, and the '
                    'gauge has been checked twice. So the amendment is this: the design event is '
                    'the published figure or the largest event our own gauges have recorded in '
                    'twenty years, whichever is greater. It uses data we already hold. It costs '
                    'larger pipes on roughly one scheme in six, and that cost falls on the '
                    'developer rather than on this authority. And I want to change the review '
                    'clause as well, because reviewing on the publication of new national '
                    'statistics means reviewing whenever somebody else gets round to it. Let us '
                    'review every five years against our own gauges, and minute the figure each '
                    'time, so that the next committee can see what we knew and when we knew '
                    'it.')],
        'items': [('Why does the engineer present the objection as arithmetic?',
                   ('To avoid naming Ms Okonkwo',
                    'Because the committee can vote on arithmetic',
                    'Because the climate is disputed',
                    'To shorten the briefing'),
                   1,
                   'Rather than as an argument about the climate.'),
                  ('What period do the 1999 statistics mostly rest on?',
                   ('1931 to 1960', '1961 to 1990', '1990 to 2020', 'The last eleven years'),
                   1,
                   'He calls it a window that ended when he was at school.'),
                  ('What has the Harrowfield gauge recorded?',
                   ('Nothing above the design figure',
                    'Four exceedances of that figure in eleven years',
                    'One exceedance',
                    'Thirty events in thirty years'),
                   1,
                   'Four in eleven is not one in thirty.'),
                  ('What does he say about the gauge?',
                   ('It may be broken',
                    'It has been checked twice',
                    'It will be replaced',
                    'It is new'),
                   1,
                   'Which leaves the figure, rather than the gauge, as the thing out of date.'),
                  ('What does the amendment cost, and who pays?',
                   ('A new treatment works, paid by the borough',
                    'Larger pipes on about one scheme in six, paid by the developer',
                    'Nothing at all',
                    'A new national dataset'),
                   1,
                   'Which is why he expects the committee to agree.'),
                  ('What is wrong with the existing review clause?',
                   ('It is too frequent',
                    'Reviewing on publication of new national statistics means reviewing when '
                    'somebody else gets round to it',
                    'It has no deadline',
                    'It requires a consultant'),
                   1,
                   'He proposes a five-year review against the borough’s own gauges.')]},
 'l3': {'sub': 'The summer that invented a method',
        'caption': 'A lecture on the first event attribution study',
        'board': ['2003: no precedent in the record · ~70,000 excess deaths',
                  'Blocking anticyclone · dry soils · no evaporative cooling',
                  'Two ensembles: with human forcing, without',
                  'More likely than not: risk more than doubled'],
        'skill': ('Hearing a method introduced through the case that made it',
                  ['The event first, then the question nobody could answer.',
                   'Listen for the shape of the claim the method produces.',
                   'The item about the next summer is the one the lecture is for.']),
        'warm': [('Woman: Did the study say we caused the heatwave?',
                  ('It said we had at least doubled the odds of one.',
                   'Yes, it said exactly that.',
                   'Two ensembles.',
                   'Seventy thousand.'),
                  0,
                  'A change in probability rather than a cause.'),
                 ('Woman: Could it have happened anyway?',
                  ('Yes. Nothing in the method rules that out.',
                   'No, it could not.',
                   'Only with the forcing.',
                   'In August.'),
                  0,
                  'Which the authors said themselves.'),
                 ('Woman: So is the claim weak?',
                  ('It is exact, which is better than strong.',
                   'Yes, very weak.',
                   'It is categorical.',
                   'A bound.'),
                  0,
                  'A bound is the serviceable form for a public authority.')],
        'script': [('Man',
                    'A method, and the summer that produced it. 2003. Temperatures across '
                    'western Europe with nothing like them in the instrumental record, and an '
                    'excess mortality eventually put at about seventy thousand people, most of '
                    'them old, most of them alone, most of them in cities, most of them in a '
                    'fortnight. Now, the meteorology of it was never in dispute. A high pressure '
                    'system that sat still for weeks, soils that had already dried out, and so '
                    'no evaporation left to cool the air. Everybody agreed about that in the '
                    'first week. What nobody could do was answer the question the newspapers '
                    'were asking, which was whether this was our doing. And the reason nobody '
                    'could answer it is that the question as asked has no answer. Then Stott, '
                    'Stone and Allen published, and what they did was change the question into '
                    'one that does have an answer. Run the model many times with the human '
                    'forcing in it. Run it many times without. You now have two distributions of '
                    'European summers. Find 2003 in each one and compare how often a summer that '
                    'hot turns up. Their answer, and listen to the shape of it, was that it is '
                    'likely though not certain that human influence had more than doubled the '
                    'risk. Not that we caused it. Not that it would not have happened. And they '
                    'were explicit that they could not say either of those things. Here is why '
                    'that shape matters. Thirty years on, the method has been run on hundreds of '
                    'events, it stands up in court, and the reason it stands up is that it never '
                    'claimed the thing it could not prove.')],
        'items': [('What does the lecturer say about the meteorology of 2003?',
                   ('It was disputed for years',
                    'It was never in dispute',
                    'It was settled by the attribution study',
                    'It is still unexplained'),
                   1,
                   'A persistent high, dry soils, no evaporative cooling.'),
                  ('Why could nobody answer the newspapers’ question?',
                   ('The data were missing',
                    'The question as asked has no answer',
                    'The models were too coarse',
                    'Nobody had tried'),
                   1,
                   'Which is why the question had to be changed.'),
                  ('What did Stott, Stone and Allen do?',
                   ('Collected more data',
                    'Changed the question into one that has an answer',
                    'Built a new model',
                    'Recounted the mortality'),
                   1,
                   'Two sets of runs, with the forcing and without.'),
                  ('What is compared between the two distributions?',
                   ('Their means',
                    'How often a summer as hot as 2003 turns up in each',
                    'Their variances',
                    'The number of runs'),
                   1,
                   '2003 is located in each distribution first.'),
                  ('What was their answer?',
                   ('That human influence caused the heatwave',
                    'That it is likely though not certain that human influence more than doubled '
                    'the risk',
                    'That the summer was natural',
                    'That the method had failed'),
                   1,
                   'He asks the audience to listen to the shape of it.'),
                  ('What were the authors explicit about?',
                   ('That the mortality figure was wrong',
                    'That they could not say we caused it or that it would not have happened',
                    'That the models were inadequate',
                    'That the result would not replicate'),
                   1,
                   'The two things the method cannot deliver.'),
                  ('Why does he say the method stands up in court?',
                   ('Because the numbers are large',
                    'Because it never claimed the thing it could not prove',
                    'Because courts accept models',
                    'Because the mortality was documented'),
                   1,
                   'Thirty years and hundreds of events later.')]},
 'l4': {'sub': 'How an event is attributed',
        'caption': 'A lecture on the ratio and the four conditions',
        'board': ['Risk ratio = P(now) / P(without us)',
                  'Large ensemble · the tail is where it lives',
                  'Define the event first · name the forcings removed',
                  'Thermodynamics simulated well · dynamics much less'],
        'skill': ('A lecture that puts the dispute in the conditions',
                  ['The quantity first, as a division.',
                   'Then four conditions, and what goes wrong with each.',
                   'The last item asks which attributions are secure.']),
        'warm': [('Woman: Why does the ensemble have to be big?',
                  ('Because you are counting events in the tail.',
                   'To cover more regions.',
                   'A hundred runs.',
                   'The ninety-ninth percentile.'),
                  0,
                  'Rare events are rare inside the model too.'),
                 ('Woman: Why define the event first?',
                  ('Because a definition chosen later gives you the answer you wanted.',
                   'To save computing time.',
                   'Because the model needs it.',
                   'Three different ratios.'),
                  0,
                  'The condition most easily broken without anybody noticing.'),
                 ('Woman: Which attributions are the solid ones?',
                  ('Heat. Then drought. Storm tracks last.',
                   'All of them equally.',
                   'Storms, then heat.',
                   'None of them.'),
                  0,
                  'The thermodynamics is simulated far better than the circulation.')],
        'script': [('Man',
                    'The quantity, and then the four places where an argument about it actually '
                    'lives. The quantity is a division. Take the probability of a summer as hot '
                    'as the one you care about in the climate we have, divide it by the '
                    'probability of the same summer in a climate with our forcing taken out, and '
                    'that is your risk ratio. Three means it comes three times as often as it '
                    'used to. Notice what three does not mean. It does not mean this summer was '
                    'three times as hot, and it says nothing whatever about the particular July '
                    'that made somebody ask. Now, the second half of that division is a world '
                    'that does not exist, so you have to simulate it, and that is why nobody '
                    'serious argues about the arithmetic. They argue about four conditions. One: '
                    'the ensemble has to be enormous, because the thing you are counting lives '
                    'in the tail, and in a hundred runs a one in a hundred event turns up about '
                    'once, and you cannot describe a tail from one point in it. Ten thousand '
                    'runs is not showing off; it is the smallest number that answers the '
                    'question. Two: the model has to reproduce the real statistics, which we '
                    'check by hindcast, and that check is weaker than it looks, because you '
                    'cannot test a model on the years you tuned it with. Three: you define the '
                    'event before you look at the data, or you have simply chosen your answer. '
                    'Four: you say which forcings you removed, because the greenhouse gases and '
                    'the aerosols push in opposite directions and we know one of them far better '
                    'than the other. And then the division that decides everything: heat and '
                    'moisture we can simulate, circulation we cannot, so a heatwave attribution '
                    'is firm, a drought attribution is shakier, and a single storm track is the '
                    'hardest thing in the field. Learn that order and you can read any '
                    'attribution paper in about four minutes.')],
        'items': [('What is the risk ratio, as the lecturer defines it?',
                   ('The change in temperature',
                    'The probability now divided by the probability with our forcing removed',
                    'The number of runs above the threshold',
                    'The fraction of the warming we caused'),
                   1,
                   'Three means the event comes three times as often as it used to.'),
                  ('Why does nobody serious argue about the arithmetic?',
                   ('It is too simple',
                    'Because the second half of the division is a world that must be simulated',
                    'Because the ratio is published',
                    'Because the models agree'),
                   1,
                   'The argument lives in the four conditions.'),
                  ('Why is the hindcast check weaker than it looks?',
                   ('Hindcasts are short',
                    'You cannot test a model on the years you tuned it with',
                    'The reanalysis is incomplete',
                    'The ensemble is small'),
                   1,
                   'The test and the tuning use the same period.'),
                  ('Why must you say which forcings were removed?',
                   ('To document the run',
                    'Because greenhouse gases and aerosols push in opposite directions and one '
                    'is known far better',
                    'Because the model requires it',
                    'To define the event'),
                   1,
                   'The specification of the counterfactual is a choice.'),
                  ('Which attribution does he call the hardest?',
                   ('A heatwave', 'A drought', 'A single storm track', 'They are equally hard'),
                   2,
                   'Heat and moisture can be simulated; circulation cannot.')]},
 'l5': {'sub': 'What attribution cannot settle',
        'caption': 'A reply from somebody who writes the city’s guidance',
        'board': ['No signal found is not no influence',
                  'Low power exactly where the dynamics matter',
                  'Event definition and baseline move the answer',
                  'Storyline: take the circulation as given'],
        'skill': ('Hearing an objection about what a null result is reported as',
                  ['She accepts the arithmetic and attacks the reporting.',
                   'Then the two choices that move the number.',
                   'The last item is the cost she concedes.']),
        'warm': [('Man: So a null result means no human influence?',
                  ('It means the method could not see one. Different thing.',
                   'Yes, exactly that.',
                   'A small ensemble.',
                   'Two choices.'),
                  0,
                  'Failures and negative findings look identical in print.'),
                 ('Man: Does the event definition really matter?',
                  ('Three definitions, three ratios, one summer.',
                   'Not appreciably.',
                   'Only for droughts.',
                   'A regional percentile.'),
                  0,
                  'And nothing in the subject chooses between them.'),
                 ('Man: What does a storyline give up?',
                  ('The probability, which is the thing a court wants.',
                   'Nothing at all.',
                   'The thermodynamics.',
                   'The circulation.'),
                  0,
                  'Which is why both are now reported side by side.')],
        'script': [('Woman',
                    'I accept every line of the arithmetic and I write the guidance a city '
                    'actually uses, so my complaint is about what gets reported rather than what '
                    'gets computed. Here is the sentence that does the damage. No detectable '
                    'change in risk. That sentence means the method could not see a change. It '
                    'is read, every single time, as meaning there was not one. And the reason '
                    'that matters is not pedantry. The method sees heat well and circulation '
                    'badly, so it returns that sentence most often for exactly the events where '
                    'the circulation did the damage. A procedure that cannot distinguish its own '
                    'failures from its negative findings is publishing its limitations as facts '
                    'about the sky, and the people who read it have no way of telling which kind '
                    'of sentence they have just been handed. Then there are two choices nobody '
                    'reads about. Define a heatwave as a three-day maximum, as a summer mean, or '
                    'as a regional percentile, and you get three different ratios for the same '
                    'summer, and nothing in the physics tells you which to use. Choose a '
                    'counterfactual from 1850 or from 1990 and your answer differs by most of '
                    'the warming that has already happened. Both choices are stated plainly in '
                    'any decent paper, and neither of the two survives into the one paragraph a '
                    'minister actually reads. So what I ask for is the conditional version. Take '
                    'the weather system that actually turned up, hold it fixed, and tell me how '
                    'much worse the extra heat and moisture made it. The models do that '
                    'robustly, and it is the question my drainage engineers are actually asking. '
                    'And I will tell you the price, because it is a real one. That answer has no '
                    'probability in it, and a court cannot use it. So we publish both, side by '
                    'side, with a line saying which question each of them answers, and I accept '
                    'that this makes the document longer and nobody’s life easier.')],
        'items': [('What is her complaint about?',
                   ('The arithmetic',
                    'What gets reported rather than what gets computed',
                    'The size of the ensemble',
                    'The choice of model'),
                   1,
                   'She says she accepts every line of the arithmetic.'),
                  ('What does no detectable change in risk mean?',
                   ('That there was no change',
                    'That the method could not see a change',
                    'That the ensemble was large',
                    'That the event was natural'),
                   1,
                   'And it is read, every time, as meaning the first.'),
                  ('What do the three definitions of a heatwave produce?',
                   ('One ratio',
                    'Three different ratios for the same summer',
                    'A single percentile',
                    'No result at all'),
                   1,
                   'And nothing in the physics selects between them.'),
                  ('What difference does the choice of counterfactual make?',
                   ('None worth reporting',
                    'An answer differing by most of the warming that has already happened',
                    'A change in the ensemble size',
                    'A change in the event definition'),
                   1,
                   '1850 and 1990 are not the same baseline.'),
                  ('What does she ask for, and at what price?',
                   ('A larger ensemble, at a computing cost',
                    'The conditional version, which has no probability in it',
                    'A new model, at a research cost',
                    'A second opinion, at no cost'),
                   1,
                   'And a court cannot use an answer without a probability.')]},
 'w1': {'sub': 'When a summer breaks a record',
        'skill': ('Build a Sentence: asking what a figure is a figure of',
                  ['Nine of the ten are questions, and the useful ones ask over what period.',
                   'An embedded question keeps statement order: do you know what period that is.',
                   'Put the long phrase last, where English carries weight.']),
        'guided': [('The summer was the hottest since records began.',
                    ['do',
                     'you',
                     'know',
                     'how',
                     'far',
                     'back',
                     'the',
                     'records',
                     'actually',
                     'go'],
                    'Do you know how far back the records actually go?'),
                   ('The event has a return period of a hundred years.',
                    ['is',
                     'that',
                     'worked',
                     'out',
                     'from',
                     'the',
                     'past',
                     'or',
                     'from',
                     'a',
                     'model'],
                    'Is that worked out from the past or from a model?'),
                   ('The model was run forty times.',
                    ['can',
                     'you',
                     'tell',
                     'me',
                     'how',
                     'much',
                     'the',
                     'runs',
                     'differed',
                     'from',
                     'each other'],
                    'Can you tell me how much the runs differed from each other?')],
        'exam': [('Human influence doubled the probability.',
                  ['doubled', 'it', 'relative', 'to', 'which', 'period', 'of', 'the', 'record'],
                  'Doubled it relative to which period of the record?'),
                 ('The study found no detectable signal.',
                  ['does',
                   'that',
                   'mean',
                   'no',
                   'effect',
                   'or',
                   'no',
                   'power',
                   'to',
                   'detect',
                   'one'],
                  'Does that mean no effect, or no power to detect one?'),
                 ('The drains were built to a one in thirty standard.',
                  ['which',
                   'thirty',
                   'years',
                   'of',
                   'rainfall',
                   'was',
                   'that',
                   'standard',
                   'drawn',
                   'from'],
                  'Which thirty years of rainfall was that standard drawn from?'),
                 ('The ensemble shows a clear shift in the mean.',
                  ['has',
                   'anything',
                   'changed',
                   'at',
                   'the',
                   'tail',
                   'where',
                   'the',
                   'damage',
                   'happens'],
                  'Has anything changed at the tail, where the damage happens?'),
                 ('The model reproduces the last century well.',
                  ['was',
                   'it',
                   'tuned',
                   'on',
                   'that',
                   'century',
                   'before',
                   'being',
                   'tested',
                   'on',
                   'it'],
                  'Was it tuned on that century before being tested on it?'),
                 ('The report calls the result robust.',
                  ['robust', 'to', 'which', 'of', 'the', 'choices', 'you', 'had', 'to', 'make'],
                  'Robust to which of the choices you had to make?'),
                 ('The council will review the standard in 2040.',
                  ['I',
                   'would',
                   'like',
                   'to',
                   'know',
                   'what',
                   'happens',
                   'to',
                   'the',
                   'culvert',
                   'meanwhile'],
                  'I would like to know what happens to the culvert meanwhile.')]},
 'w2': {'sub': 'What a design standard assumes',
        'to': 'drainage@tarnbrook.gov.uk',
        'date': '18/03/2034',
        'subject': 'Revision 7 — support for the amendment, and one exemption I would remove',
        'scenario': ['You are the borough’s emergency planning officer. The drainage team has '
                     'accepted that the design event should be the published figure or the '
                     'largest local event in twenty years, whichever is greater, and that the '
                     'standard should be reviewed every five years against the borough’s own '
                     'gauges. You support both. Your own objection is to an exemption: replacing '
                     'an existing pipe with one of the same size is exempt, and most of the '
                     'borough’s pipes are replaced that way.',
                     'Write an email to the drainage team, copied to the committee.'],
        'bullets': ['Support the amendment and the review clause, with what each buys.',
                    'Name the fault in the exemption, with figures.',
                    'Propose the wording you want instead.'],
        'skill': ('Supporting two changes and removing an exemption',
                  ['Say what each change buys, so the cost is justified.',
                   'Show the fault with the borough’s own replacement figures.',
                   'Propose wording that can be dropped into the standard.']),
        'model': ['Dear colleagues,',
                  '',
                  'This office supports the amendment and the five-year review, and asks for one '
                  'exemption to be removed.',
                  '',
                  'The amendment buys the thing a design standard exists to buy, which is a pipe '
                  'sized for the rain that will fall rather than the rain that fell. The review '
                  'clause buys something less obvious: a minuted figure every five years is a '
                  'record of what this authority knew, and an authority that can show when it '
                  'learned something is in a far stronger position than one that cannot. We can '
                  'say with confidence that both will be cheaper than the alternative, because '
                  'this office has costed two floods.',
                  '',
                  'The exemption I would remove is like for like pipe replacement. It sounds '
                  'trivial and it is the main way the network changes. Of the 41 kilometres of '
                  'surface water pipe renewed in this borough since 2024, 38 kilometres were '
                  'replacements of the same diameter, which means the new standard would have '
                  'applied to under eight per cent of the work actually done. An amendment that '
                  'improves the standard and exempts the pipes has improved very little.',
                  '',
                  'What I propose is a threshold rather than an exemption. Like for like '
                  'replacement is permitted where the existing pipe already meets the current '
                  'design event, and requires upsizing where it does not, with the cost met from '
                  'the renewal programme rather than from the flood budget. That turns a renewal '
                  'into the one opportunity we get to fix a pipe without digging the road twice, '
                  'which is the only argument in this email that will persuade the finance '
                  'committee.',
                  '',
                  'Ingrid Vasquez, Emergency Planning Officer'],
        'notes': ['The support says what each change buys, and the sentence about a minuted '
                  'figure is the one the committee will remember, because it is about the '
                  'authority rather than about rain.',
                  'The fault is shown in kilometres, so the exemption cannot be dismissed as a '
                  'technicality: under eight per cent of the work would be covered.',
                  'The proposal replaces an exemption with a threshold, which keeps the '
                  'simplicity the exemption was for.',
                  'The last sentence names the audience and the argument that will move it, '
                  'which is what distinguishes a persuasive email from a correct one.'],
        'bandpair': {'mid': ['Dear colleagues,',
                             'This office is pleased to support the proposed amendment and the '
                             'new review clause. We agree that it is sensible to design for the '
                             'larger of the published figure and our own local records, and that '
                             'reviewing the standard every five years would be an improvement on '
                             'the present arrangement.',
                             'We do have a concern about one of the exemptions. At present, '
                             'replacing a pipe with another of the same size does not have to '
                             'meet the standard, but this is actually how most of our pipes are '
                             'replaced. Since 2024 the great majority of renewals have '
                             'apparently been like for like, so the new standard would only '
                             'apply to a small proportion of the work.',
                             'Perhaps the exemption could be changed so that it only applies '
                             'where the existing pipe is already large enough, and perhaps the '
                             'cost of upsizing could come from the renewal programme. This would '
                             'mean that renewals were used as an opportunity to improve the '
                             'network.',
                             'Yours sincerely, Ingrid Vasquez'],
                     'top': ['Dear colleagues,',
                             'This office supports the amendment and the five-year review, and '
                             'asks for one exemption to be removed.',
                             'The amendment buys a pipe sized for the rain that will fall rather '
                             'than the rain that fell. The review buys something less obvious: a '
                             'minuted figure every five years is a record of what this authority '
                             'knew, and an authority that can show when it learned something '
                             'stands in a far stronger position than one that cannot. Both are '
                             'cheaper than the alternative; this office has costed two floods.',
                             'The exemption to remove is like for like replacement. It sounds '
                             'trivial and it is the main way the network changes. Of 41 '
                             'kilometres of surface water pipe renewed since 2024, 38 were '
                             'replacements of the same diameter, so the new standard would have '
                             'reached under eight per cent of the work done. An amendment that '
                             'improves the standard and exempts the pipes has improved very '
                             'little.',
                             'I propose a threshold rather than an exemption: like for like '
                             'replacement is permitted where the existing pipe already meets the '
                             'current design event and requires upsizing where it does not, the '
                             'cost met from the renewal programme rather than the flood budget. '
                             'A renewal is the one opportunity to fix a pipe without digging the '
                             'road twice, which is the argument that will persuade the finance '
                             'committee. Ingrid Vasquez'],
                     'diffs': ['It states what each change buys in one clause each, instead of '
                               'calling them sensible.',
                               'It gives the figures as kilometres and a percentage, so the '
                               'exemption cannot be waved away.',
                               'It names the proposal as a threshold replacing an exemption, '
                               'which is a structural claim rather than a suggestion.',
                               'It ends by naming the committee that must be persuaded and the '
                               'argument that will do it.',
                               'It drops the hedging — pleased to support, we do have a concern, '
                               'apparently, perhaps twice — which in the middle answer turns a '
                               'costed case into a wish.']}},
 'w3': {'sub': 'The summer that invented a method',
        'prof': 'Professor Eriksen',
        'question': 'A coastal city is sued by residents whose homes were destroyed in a storm '
                    'surge. The claim is against a fuel company, and the evidence is an '
                    'attribution study finding that human influence made a surge of that height '
                    'between two and six times more likely. The company replies that the study '
                    'concedes the surge could have occurred without any human influence, and '
                    'that a probability is not a cause. The residents reply that a doubled risk '
                    'is exactly what the law calls a contribution. How should the court treat '
                    'the study?',
        'posts': [('Anneke',
                   'w',
                   'Admit it. Courts have decided tobacco and asbestos cases on raised '
                   'probabilities for fifty years, and nobody called that speculation.'),
                  ('Rustam',
                   'm',
                   'In those cases the defendant produced the exposure. Here the defendant '
                   'produced four per cent of a global quantity, and the study cannot tell you '
                   'which four per cent of the water.')],
        'skill': ('A question where a probability meets a legal test',
                  ['Anneke argues from precedent; Rustam from the share of the cause.',
                   'The passages say the method estimates a change in probability and declines '
                   'to say the event was caused.',
                   'A strong answer separates admissibility from apportionment.']),
        'starters': ['Anneke is right that…, although it does not follow that…',
                     'We can say with confidence…',
                     'The honest answer is we do not know…',
                     'So the court should…, and leave…'],
        'model': ['Anneke is right that a raised probability has been accepted as evidence of '
                  'contribution for half a century, and it does not follow that this study '
                  'establishes what the residents need. Her precedents share a feature this case '
                  'lacks. In an asbestos claim the defendant supplied the fibre that the '
                  'claimant inhaled, so the raised probability attaches to an exposure the '
                  'defendant produced. Here the attribution study speaks about a global '
                  'quantity, and the step from a global quantity to one company is a separate '
                  'inference that the study neither makes nor supports.',
                  'Rustam is therefore right about apportionment and wrong to treat it as an '
                  'objection to admitting the study at all. The two questions come apart. '
                  'Whether a surge of that height became two to six times likelier is a question '
                  'of fact on which this evidence is the best available, and refusing to hear it '
                  'would leave the court deciding the same question from intuition. Whether a '
                  'particular defendant owes a share of the resulting loss is a question of law '
                  'about causal contribution in a world of many contributors, and the honest '
                  'answer is we do not know what share, because no study has been designed to '
                  'tell us.',
                  'So the court should admit the study on the first question and leave the '
                  'second to be argued with a different kind of evidence altogether: emissions '
                  'accounts, the dates at which the company knew what its own scientists had '
                  'told it, and the ordinary law of contribution among multiple wrongdoers. That '
                  'division is not a dodge. It is the only arrangement under which the science '
                  'is used for what it establishes and the apportionment is argued on grounds '
                  'that can actually be tested in a courtroom.'],
        'model_words': 289},
 'w4': {'sub': 'How an event is attributed',
        'skill': ('Modal stacking and graded commitment',
                  ['May well have, would probably have, could conceivably have, cannot have: '
                   'read the stack from the outside in.',
                   'Put the degree word where it modifies the right element.',
                   'A graded claim and a hedge are not the same thing: grade once and then stand '
                   'still.']),
        'guided': [('Grade a claim about the past as probable.',
                    ['the summer',
                     'may',
                     'well',
                     'have',
                     'been',
                     'the',
                     'hottest',
                     'in',
                     'the',
                     'instrumental',
                     'record'],
                    'The summer may well have been the hottest in the instrumental record.'),
                   ('Describe the counterfactual world with confidence.',
                    ['it',
                     'would',
                     'probably',
                     'have',
                     'been',
                     'cooler',
                     'without',
                     'the',
                     'human',
                     'contribution'],
                    'It would probably have been cooler without the human contribution.'),
                   ('Concede a possibility without granting it weight.',
                    ['such',
                     'a',
                     'summer',
                     'could',
                     'conceivably',
                     'have',
                     'occurred',
                     'in',
                     'an',
                     'unaltered',
                     'climate'],
                    'Such a summer could conceivably have occurred in an unaltered climate.')],
        'exam': [('Deny something flatly, using a modal.',
                  ['the',
                   'event',
                   'cannot',
                   'have',
                   'been',
                   'natural',
                   'variation',
                   'acting',
                   'on',
                   'its',
                   'own'],
                  'The event cannot have been natural variation acting on its own.'),
                 ('Grade a quantity rather than a claim.',
                  ['the',
                   'return',
                   'period',
                   'has',
                   'shortened',
                   'appreciably',
                   'since',
                   'the',
                   'standard',
                   'was',
                   'written'],
                  'The return period has shortened appreciably since the standard was written.'),
                 ('Mark a conclusion as one you expect to revise.',
                  ['we',
                   'put',
                   'the',
                   'ratio',
                   'provisionally',
                   'at',
                   'three',
                   'pending',
                   'a',
                   'larger',
                   'ensemble'],
                  'We put the ratio provisionally at three, pending a larger ensemble.'),
                 ('Make a claim with no qualification left in it.',
                  ['the',
                   'drain',
                   'was',
                   'categorically',
                   'not',
                   'built',
                   'for',
                   'rainfall',
                   'of',
                   'this',
                   'order'],
                  'The drain was categorically not built for rainfall of this order.'),
                 ('Stack two modals and a degree word.',
                  ['the risk',
                   'may',
                   'well',
                   'have',
                   'risen',
                   'markedly',
                   'and',
                   'the ensemble',
                   'cannot',
                   'yet',
                   'show it'],
                  'The risk may well have risen markedly, and the ensemble cannot yet show '
                  'it.')]},
 'w5': {'sub': 'What attribution cannot settle',
        'prof': 'Professor Bellanger',
        'question': 'A national meteorological service proposes to publish a rapid attribution '
                    'statement within one week of every major weather disaster. Supporters say '
                    'the public forms its view in the first week and a statement arriving six '
                    'months later changes nothing. Opponents say a one-week study cannot run a '
                    'large ensemble, that small ensembles return no detectable signal, and that '
                    'a stream of such findings will be read as evidence that disasters have '
                    'nothing to do with us. Should the service publish within a week?',
        'posts': [('Yevgenia',
                   'w',
                   'Publish. The alternative is not silence, it is somebody else talking, and '
                   'the service is the only body with the data and no interest in the answer.'),
                  ('Casimir',
                   'm',
                   'A rushed study with a small ensemble is a machine for producing null '
                   'results, and a null result in a newspaper is a denial with a government logo '
                   'on it.')],
        'skill': ('A question about when to publish an uncertain finding',
                  ['Yevgenia argues from who fills the silence; Casimir from what a small '
                   'ensemble returns.',
                   'The passages say a procedure whose failures resemble its negative findings '
                   'reports its limitations as facts.',
                   'A strong answer changes what is published, not whether.']),
        'starters': ['Yevgenia is right that…, although it does not follow that…',
                     'It is likely though not certain…',
                     'We cannot rule out…',
                     'So the service should…, provided that…'],
        'model': ['Yevgenia is right that the alternative to a rapid statement is not silence '
                  'but somebody less careful, and it does not follow that the service should '
                  'publish a risk ratio in the first week. Casimir has identified the specific '
                  'failure, which is not inaccuracy but asymmetry. A small ensemble cannot '
                  'populate the tail of a distribution, so a rushed study returns no detectable '
                  'change far more often than a thorough one, and a stream of such statements '
                  'would be read as a series of acquittals rather than as a series of admissions '
                  'that the question had not yet been answered.',
                  'The resolution lies in publishing a different quantity. The thermodynamic '
                  'contribution can be computed in days and is the part the models handle '
                  'robustly: the atmosphere above that coast now holds a stated percentage more '
                  'moisture than it did in 1950, and that percentage is not in serious dispute. '
                  'A statement of that kind is honest in week one, is unlikely to be overturned '
                  'in month six, and tells a reader something rather than nothing. We cannot '
                  'rule out that the full study will later find no detectable change in the '
                  'probability, and saying so in the same paragraph is what makes the early '
                  'statement defensible.',
                  'So the service should publish within the week, provided that what it '
                  'publishes is the conditional quantity and an explicit statement that the '
                  'probabilistic study follows. It should also commit to publishing the later '
                  'result whatever it says, because a body that issues rapid statements and '
                  'quietly drops the slow ones has built the bias Casimir is worried about by a '
                  'different route. The discipline required is a single standing sentence in '
                  'every statement: this is what we can say in a week, this is what we cannot, '
                  'and this is the date on which we will say more. A service that prints those '
                  'three clauses has told the public how to read it.'],
        'model_words': 320},
 'sp': [{'sub': 'When a summer breaks a record',
         'focus': 'refusing both easy answers and giving the number',
         'skill': ('Both of those are the same mistake in opposite directions',
                   ['Name the two claims and reject both.',
                    'Then give the figure that replaces them.',
                    'Then name the question somebody has to answer.']),
         'repeat': ['The honest thing is a number.',
                    'Now it comes about once in thirty.',
                    'Both are the same mistake in opposite directions.',
                    'You are about to say this was climate change.',
                    'The other side will say it was bad luck.',
                    'That rainfall used to come once in a hundred years.',
                    'Ask what return period the culvert was designed for, and in what year.'],
         'theme': 'an answer that is a number rather than a yes',
         'qs': ['Tell me about a question you could only answer with a number. What was it?',
                'Some people say every extreme event is now caused by climate change. How far '
                'would you agree?',
                'How would you explain to a friend the difference between causing a flood and '
                'making it likelier?',
                'Finally, describe something in your town built for a world that has changed.'],
         'model': [(2,
                    'Caused is the wrong verb for a whole class of events. What can be shown is '
                    'that this kind of day arrives three times as often as it used to, which is '
                    'a stronger claim than it sounds.'),
                   (3,
                    'Nobody can say your particular Tuesday would have been dry. What they can '
                    'say is how often that Tuesday turns up, and that frequency has changed.')],
         'selfcheck': ['I rejected both claims',
                       'I gave the frequency figure',
                       'I named the answerable question']},
        {'sub': 'What a design standard assumes',
         'focus': 'turning a climate argument into arithmetic',
         'skill': ('Four in eleven is not one in thirty',
                   ['Give the standard and where its figure comes from.',
                    'Then the local count, in plain numbers.',
                    'Then the division that settles it.']),
         'repeat': ['That is four times in eleven years.',
                    'The figure comes from statistics published in 1999.',
                    'Four in eleven is not one in thirty.',
                    'We design to the one in thirty year storm.',
                    'Those rest on gauges reading between 1961 and 1990.',
                    'Our own gauge has exceeded that figure four times.',
                    'Either the gauge is broken or the figure is out of date, and the gauge has '
                    'been checked twice.'],
         'theme': 'an argument settled by division',
         'qs': ['Tell me about an argument that a single sum ended. What was the sum?',
                'Some people say we should always design for the worst case. How far would you '
                'agree?',
                'How would you explain to a friend why an old average can be misleading?',
                'Finally, describe a standard in your own country that should be reviewed.'],
         'model': [(2,
                    'The worst case has no upper bound, so designing for it means building '
                    'nothing else. The useful question is which standard, reviewed how often, '
                    'and against whose figures.'),
                   (3,
                    'Because an average describes the years it was taken from. If those years '
                    'are over, the average is a fact about history rather than a forecast.')],
         'selfcheck': ['I gave the standard and its source',
                       'I gave the local count',
                       'I ended with the division']},
        {'sub': 'The summer that invented a method',
         'focus': 'changing a question into one that has an answer',
         'skill': ('The question as asked has no answer',
                   ['Give the event and the question everybody asked.',
                    'Say why that question cannot be answered.',
                    'Then give the question that replaced it.']),
         'repeat': ['About seventy thousand excess deaths.',
                    'The meteorology was never in dispute.',
                    'That question as asked has no answer.',
                    '2003, and nothing like it in the record.',
                    'The newspapers asked whether this was our doing.',
                    'So run the model with the forcing and without it.',
                    'Find 2003 in each distribution and compare how often a summer that hot '
                    'turns up.'],
         'theme': 'a question replaced by a better one',
         'qs': ['Tell me about a question you had to rephrase before you could answer it. What '
                'changed?',
                'Some people say a probability is no use to somebody whose house has flooded. '
                'How far would you agree?',
                'How would you explain to a friend what two sets of model runs are for?',
                'Finally, describe a record that was broken where you live.'],
         'model': [(2,
                    'It is no comfort and it is the only usable fact. A probability is what a '
                    'council can design to and what a court can weigh, and a yes or a no about '
                    'one Tuesday is neither.'),
                   (3,
                    'One world with us in it and one without, each run many times. The '
                    'difference between the two is the only place our influence can be seen.')],
         'selfcheck': ['I gave the event and the original question',
                       'I said why it cannot be answered',
                       'I gave the question that replaced it']},
        {'sub': 'How an event is attributed',
         'focus': 'defining a quantity and locating the dispute',
         'skill': ('The quantity is a division',
                   ['Give the division in one sentence.',
                    'Say what the number does not mean.',
                    'Then name where the argument actually lives.']),
         'repeat': ['The quantity is a division.',
                    'Divided by the probability without our forcing.',
                    'Three means it comes three times as often.',
                    'The probability of that summer in the climate we have.',
                    'It does not mean the summer was three times as hot.',
                    'So nobody serious argues about the arithmetic; they argue about four '
                    'conditions.',
                    'The second half of the division is a world that does not exist.'],
         'theme': 'a number whose meaning is narrower than it looks',
         'qs': ['Tell me about a figure that was widely misunderstood. What did people think it '
                'meant?',
                'Some people say model results should not be used in public policy. How far '
                'would you agree?',
                'How would you explain to a friend what a risk ratio of three means?',
                'Finally, describe a standard where you live that rests on an old average.'],
         'model': [(2,
                    'Every policy rests on a model of something, including the policy of doing '
                    'nothing. The question is whether the model has been tested against a period '
                    'it was not fitted to.'),
                   (3,
                    'It means that kind of day used to arrive once a decade and now arrives '
                    'three times a decade. It says nothing at all about the day you are standing '
                    'in.')],
         'selfcheck': ['I gave the division',
                       'I said what the number does not mean',
                       'I named where the dispute lives']},
        {'sub': 'What attribution cannot settle',
         'focus': 'attacking the reporting rather than the arithmetic',
         'skill': ('No detectable change is not no change',
                   ['Quote the sentence that does the damage.',
                    'Say what it means and what it is read as meaning.',
                    'Then say why the error is systematic rather than careless.']),
         'repeat': ['It sees circulation badly.',
                    'No detectable change in risk.',
                    'The method sees heat well.',
                    'That means the method could not see a change.',
                    'It is read as meaning there was not one.',
                    'So it returns that sentence for the very events where circulation did the '
                    'damage.',
                    'A procedure that cannot distinguish its failures from its findings is '
                    'publishing its limitations as facts.'],
         'theme': 'a negative result that says nothing',
         'qs': ['Tell me about a test that came back negative and proved nothing. What happened '
                'next?',
                'Some people say that if a study finds nothing, there is nothing there. How far '
                'would you agree?',
                'How would you explain to a friend the difference between no effect and no '
                'evidence?',
                'Finally, describe a decision in your own city that needs a conditional answer '
                'rather than a probability.'],
         'model': [(2,
                    'Only if the study had the power to find it. A study too small to detect an '
                    'effect reports its own size, and that report is not news about the world.'),
                   (3,
                    'No effect is a claim about the thing. No evidence is a claim about the '
                    'looking. Confuse them and a weak study becomes a strong conclusion.')],
         'selfcheck': ['I quoted the sentence',
                       'I separated the two readings',
                       'I said why the error is systematic']}],
 'gram': {'title': 'Modal stacking and graded commitment',
          'headers': ['Form', 'What it does'],
          'rows': [('it may well have been the hottest June on record',
                    'probable, and not established'),
                   ('it would probably have been cooler without us',
                    'a counterfactual, asserted with confidence'),
                   ('such a summer could conceivably have occurred anyway',
                    'concedes a possibility without granting it weight'),
                   ('the event cannot have been natural variation alone',
                    'a flat denial in modal clothing'),
                   ('the return period has shortened appreciably',
                    'grades the quantity, not the claim'),
                   ('we put the ratio provisionally at three',
                    'marks a conclusion you expect to revise'),
                   ('the drain was categorically not built for this',
                    'leaves no qualification at all')],
          'notes': ['English grades a claim by stacking one modal word on another, and the stack '
                    'is read from the outside in. May well have is probable; might have is '
                    'possible; could conceivably have is barely worth mentioning and is '
                    'mentioned in order to be dismissed. Cannot have is the strongest denial the '
                    'language offers about the past, and it is stronger than did not, because it '
                    'rules the thing out rather than merely reporting its absence.',
                    'Keep the degree words separate from the modal ones. Appreciably, markedly, '
                    'marginally and substantially grade a quantity: they say how much the number '
                    'moved. Provisionally, tentatively, categorically and unequivocally grade '
                    'you: they say how far you are standing behind it. A sentence that confuses '
                    'the two — the risk has substantially probably risen — is not a hedge but a '
                    'mistake.',
                    'Grade once and then stand still. A claim made unequivocally in one sentence '
                    'and hedged in the next loses credit twice, because the reader concludes '
                    'both that the writer has contradicted himself and that he did not know what '
                    'the first word meant. In an examination, one graded claim held for a '
                    'paragraph scores above three graded differently in three sentences.'],
          'watch': 'Do not write would have in the if-clause of a counterfactual. If the forcing '
                   'would have been removed is not English; write had the forcing been removed, '
                   'with would have in the main clause.',
          'ex': [('Rewrite at the degree of commitment in brackets.',
                  ['It was the hottest June on record. (probable)',
                   'It was cooler without the human contribution. (counterfactual, confident)',
                   'It happened anyway. (barely possible)',
                   'It was natural variation. (flat denial)',
                   'The ratio is three. (expect to revise)'],
                  ['It may well have been the hottest June on record.',
                   'It would probably have been cooler without the human contribution.',
                   'It could conceivably have happened anyway.',
                   'It cannot have been natural variation alone.',
                   'We put the ratio provisionally at three.']),
                 ('Supply appreciably, marginally, markedly or substantially.',
                  ['The return period has shortened ______, by enough to matter.',
                   'The figure rose ______, by an amount nobody would act upon.',
                   'The tail has thickened ______, by an amount anybody would notice.',
                   'Costs rose ______, by about two thirds.'],
                  ['appreciably', 'marginally', 'markedly', 'substantially']),
                 ('Correct the modal.',
                  ['If the forcing would have been removed, the summer would have been cooler.',
                   'The risk has substantially probably risen.',
                   'It may well be the hottest June of the last century, we think, probably.',
                   'The event cannot had been natural variation.'],
                  ['Had the forcing been removed, the summer would have been cooler.',
                   'The risk has probably risen substantially.',
                   'It may well have been the hottest June of the last century.',
                   'The event cannot have been natural variation.'])],
          'bas': 'Build a Sentence in this unit asks you to place the modal stack and the degree '
                 'word. Three of the answers are about the past, and the auxiliary comes before '
                 'the adverb in every one of them.'},
 'fault': {'text': 'If the forcing would have been removed, the summer would have been cooler. '
                   'The risk has substantially probably risen. The event cannot had been natural '
                   'variation. We put the ratio categorically at three, pending a larger '
                   'ensemble. The two ensembles was run on the same machine. Do you know which '
                   'forcings did they remove?',
           'faults': [('If the forcing would have been removed',
                       'Had the forcing been removed',
                       'Would have belongs in the main clause of a counterfactual, never in the '
                       'condition itself.'),
                      ('The risk has substantially probably risen',
                       'The risk has probably risen substantially',
                       'A degree word grades the quantity and a modal word grades the writer; '
                       'they do not stack in that order.'),
                      ('The event cannot had been natural variation',
                       'The event cannot have been natural variation',
                       'A modal takes the bare infinitive have, not the past participle had.'),
                      ('We put the ratio categorically at three, pending a larger ensemble',
                       'We put the ratio provisionally at three, pending a larger ensemble',
                       'Categorically removes all qualification, which contradicts the pending '
                       'clause that follows it.'),
                      ('The two ensembles was run',
                       'The two ensembles were run',
                       'A plural subject takes a plural verb however long the phrase before it.'),
                      ('which forcings did they remove',
                       'which forcings they removed',
                       'An embedded question keeps statement order and does not invert the '
                       'verb.')]},
 'rev': {'vocab': [('an imposed change in the energy balance', 'forcing'),
                   ('a set of runs of the same model', 'ensemble'),
                   ('the assumption that the past still applies', 'stationarity'),
                   ('a run of a model over a period already known', 'hindcast'),
                   ('the event of a threshold being passed', 'exceedance'),
                   ('the rank of a value in a distribution', 'percentile'),
                   ('the circulation, as against the heat', 'dynamics'),
                   ('an account of one event as it unfolded', 'storyline'),
                   ('the observed record rebuilt by a model', 'reanalysis'),
                   ('by enough to matter', 'appreciably'),
                   ('for now, pending something better', 'provisionally'),
                   ('with no qualification at all', 'categorically')],
         'gram': [('It ______ well have been the hottest June on record.', 'may'),
                  ('It would ______ have been cooler without us.', 'probably'),
                  ('Such a summer could ______ have occurred anyway.', 'conceivably'),
                  ('The event ______ have been natural variation alone.', 'cannot'),
                  ('______ the forcing been removed, the summer would have been cooler.', 'Had'),
                  ('We put the ratio ______ at three, pending a larger ensemble.',
                   'provisionally'),
                  ('The two ensembles ______ run on the same machine.', 'were'),
                  ('Do you know which forcings they ______?', 'removed')],
         'mini': [('An attribution study estimates',
                   ('the cause of an event',
                    'the ratio of two probabilities',
                    'the temperature of an event',
                    'the mortality of an event'),
                   1,
                   'The attributable fraction is a rearrangement of that ratio.'),
                  ('The 2004 study of the 2003 summer concluded that',
                   ('human influence caused the heatwave',
                    'human influence had more likely than not more than doubled the risk',
                    'the summer was within natural variability',
                    'no conclusion was possible'),
                   1,
                   'And the authors declined to say the event would not have occurred '
                   'otherwise.'),
                  ('The ensemble must be large because',
                   ('models are slow',
                    'the quantity of interest lives in the tail of a distribution',
                    'more models are better',
                    'the record is short'),
                   1,
                   'A hundred runs furnish few exceedances of a ninety-ninth percentile.'),
                  ('The hindcast test is weaker than it appears because',
                   ('the reanalysis is incomplete',
                    'a model tuned upon a period cannot be tested upon it',
                    'hindcasts are expensive',
                    'the period is short'),
                   1,
                   'The test and the tuning use the same years.'),
                  ('No detectable change in risk means',
                   ('that there was no change',
                    'that the method could not detect a change',
                    'that the ensemble was large',
                    'that the event was natural'),
                   1,
                   'And the method has least power exactly where the dynamics matter.'),
                  ('A storyline attribution gives up',
                   ('the thermodynamics', 'the probability', 'the circulation', 'the baseline'),
                   1,
                   'Which is the quantity a court, an insurer and a public authority all '
                   'require.')]},
 'tip': 'Find the design standard for the drains, the sea wall or the reservoir nearest you, and '
        'look for two dates: the year the standard was set and the years of rainfall it was '
        'computed from. If the second is a window that closed before you were born, you have '
        'found in one afternoon the fact that cycle 2 took a borough engineer a committee '
        'meeting to establish.'}

