# -*- coding: utf-8 -*-
"""Unit 53 - Institutions and Incentives. IELTS Volume 6, band 7.5."""

_TGT = dict(kind='bar',
            title='Performance against target',
            sub='percentage of cases meeting the published standard, three '
                'services, 2019 and 2024',
            cats=['Emergency care', 'Housing repairs', 'Benefit decisions'],
            series=[('2019', [71, 64, 68]), ('2024', [94, 91, 93])])

_OUT = dict(kind='bar',
            title='Performance against outcome',
            sub='independently assessed outcome score, 0-100, the same three '
                'services and the same two years',
            cats=['Emergency care', 'Housing repairs', 'Benefit decisions'],
            series=[('2019', [63, 59, 61]), ('2024', [71, 54, 58])])

UNIT = dict(
 n=53, vol=6, level='C1', band='7.5',
 theme='Institutions and Incentives',
 opener=(
   'Two charts of the same three services over the same five years, one '
   'showing performance against target and one showing performance against '
   'outcome, and they disagree. The Task 1 lesson is what to do when your '
   'two sources contradict each other: report both, locate the '
   'disagreement, and say which one answers the question that was asked. '
   'The argument that follows is the one every public service in the world '
   'is currently having, and the unit takes the unusual step of asking you '
   'to run the premise test on the side you already agree with.'),

 cycles=[
  dict(
   sub='Raising a concern',
   step=2,
   read=[
    dict(heading='Raising a concern at work — the policy',
         kind='Policy document',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('A concerns policy is read for the stage at which '
                'protection begins',
                ['Protection under these policies is almost never '
                 'retrospective and almost never automatic. It attaches at '
                 'a defined stage, and acts before that stage are not '
                 'covered.',
                 'Find the sentence naming that stage, and the sentence '
                 'naming what you must do to reach it. Those two sentences '
                 'are the policy; the rest is procedure.']),
         paras=[
          'A concern about wrongdoing may be raised informally with a line '
          'manager at any time, and the great majority are resolved that '
          'way. Informal concerns are not recorded centrally and attract no '
          'protection under this policy, which is why the policy exists and '
          'why the informal route is nonetheless the right first step in '
          'most cases.',
          'Protection attaches when a concern is raised formally, in '
          'writing, to a designated officer. The list of designated '
          'officers is published and includes one person outside the '
          'line-management chain of every department, specifically so that a '
          'concern about a manager need not be raised with that manager.',
          'From that point, any detriment suffered by the person raising the '
          'concern is treated as connected to the disclosure unless the '
          'organisation can show otherwise. The reversal of the usual burden '
          'is the substance of the protection, and it survives a finding '
          'that the concern itself was unfounded, provided it was raised in '
          'good faith.',
          'Confidentiality is maintained so far as is consistent with '
          'investigating. The policy does not promise anonymity, because an '
          'investigation frequently cannot proceed without the identity '
          'being known to those being asked, and a promise that cannot be '
          'kept is worse than an honest statement of the limit.',
          'A concern not resolved within thirty working days may be '
          'escalated to the audit committee, which sits outside the '
          'executive. Escalation requires no permission and the person '
          'raising it need not state why they are dissatisfied, although '
          'the committee asks and most people say.',
          'Where a concern is found to have been raised in bad faith, the '
          'protection falls away. Bad faith means knowing the allegation to '
          'be untrue; it does not mean being mistaken, and the distinction '
          'has been tested three times and upheld each time.'],
         items=[
          ('Informal concerns attract',
           ['full protection', 'no protection under this policy',
            'partial protection', 'protection after thirty days'], 1,
           'Paragraph 1, which still calls the informal route the right '
           'first step.'),
          ('Protection attaches when a concern is raised formally and in '
           '____________.', None, 'writing',
           'Paragraph 2, to a designated officer.'),
          ('Designated officers include one person outside the '
           '____________ chain of every department.', None,
           'line-management',
           'Paragraph 2, so a concern about a manager need not go to '
           'them.'),
          ('The substance of the protection is',
           ['anonymity', 'the reversal of the usual burden', 'a payment',
            'a transfer'], 1,
           'Paragraph 3: detriment is assumed connected unless the '
           'organisation shows otherwise.'),
          ('A concern may be escalated after ____________ working days.',
           None, 'thirty',
           'Paragraph 5, to the audit committee, with no permission '
           'needed.'),
          ('Bad faith means',
           ['being mistaken', 'knowing the allegation to be untrue',
            'raising it informally', 'refusing to be named'], 1,
           'Paragraph 6, a distinction tested three times.')]),
    dict(heading='Protections for those who raise concerns',
         kind='Guidance', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Put it in writing, even where you have already raised it in '
          'conversation. A written concern starts the clock and attaches the '
          'protection; a conversation does neither, and people who have '
          'raised something three times verbally are frequently surprised to '
          'learn they have not raised it at all.',
          'Keep your own copy outside the organisation’s systems. Access '
          'to internal mail can be withdrawn on suspension, which happens '
          'for reasons unconnected to a concern more often than people '
          'expect, and a concern you cannot evidence is one you did not '
          'raise.',
          'Record any change in your treatment with a date: a removed duty, '
          'a cancelled meeting, a shift pattern altered. Detriment is '
          'established from a pattern rather than from a single act, and a '
          'pattern is only visible if each element carries a date.',
          'Escalate at thirty working days rather than waiting to be '
          'invited. The committee treats the thirty-day point as a right '
          'and not as a complaint about the investigator, and nobody has '
          'ever been criticised for using it, which the guidance says here '
          'because people keep asking.',
          'Take somebody with you to any meeting about the concern, and '
          'tell the organisation in advance that you are doing so. A '
          'companion need not speak and need not be a representative. '
          'Their function is to be a second person who was present, which '
          'is worth more at a later stage than any note you write '
          'afterwards on your own.'],
         items=[
          ('A written concern starts the ____________ and attaches the '
           'protection.', None, 'clock',
           'Paragraph 1: a conversation does neither.'),
          ('Keep your own copy ____________ the organisation’s systems.',
           None, 'outside',
           'Paragraph 2, because access can be withdrawn on suspension.'),
          ('Record any change in your treatment with a ____________.',
           None, 'date',
           'Paragraph 3: detriment is established from a pattern.'),
          ('Escalate at thirty working days rather than waiting to be '
           '____________.', None, 'invited',
           'Paragraph 4, which the committee treats as a right.')])],
   listen=[
    dict(heading='Raising a formal concern', part='Part 1',
         task='A call to a designated officer', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Officer', 'Designated officer line, Marguerite speaking.'),
          ('Caller', 'Hello. I want to raise a concern about procurement in '
           'my department.'),
          ('Officer', 'Have you raised it with anybody already?'),
          ('Caller', 'Three times with my manager, verbally.'),
          ('Officer', 'Then as far as the policy goes you have not raised '
           'it at all, which is not your fault and is the commonest thing I '
           'say on this line. Only a written concern to a designated officer '
           'starts the clock.'),
          ('Caller', 'My manager is part of what I am concerned about.'),
          ('Officer', 'Then you want an officer outside your '
           'line-management chain. For procurement that is the finance '
           'directorate, and the officer there is Mr Oyelaran-Beck.'),
          ('Caller', 'How do I spell that?'),
          ('Officer', 'O-Y-E-L-A-R-A-N, hyphen, B-E-C-K.'),
          ('Caller', 'Thank you. What protection do I get?'),
          ('Officer', 'From the moment the written concern is received, any '
           'detriment is assumed connected to it unless the organisation can '
           'show otherwise. That reversal is the protection, and it holds '
           'even if the concern turns out to be unfounded.'),
          ('Caller', 'Even if I am wrong?'),
          ('Officer', 'Even if you are wrong, provided you were not lying. '
           'Mistaken is fine. Knowingly untrue is not.'),
          ('Caller', 'Will it be confidential?'),
          ('Officer', 'So far as investigating allows, and I will not '
           'promise anonymity because I cannot deliver it. People being '
           'interviewed can often work out who raised it.'),
          ('Caller', 'I would rather be told that than reassured.'),
          ('Officer', 'Most people say so afterwards and almost nobody says '
           'so at the time. Now, keep a copy somewhere that is not our '
           'system.'),
          ('Caller', 'Why?'),
          ('Officer', 'Because access goes on suspension, and suspension '
           'happens for all sorts of reasons. A concern you cannot evidence '
           'is one you did not raise.'),
          ('Caller', 'Noted. And if nothing happens?'),
          ('Officer', 'Thirty working days and you can take it to the audit '
           'committee. You do not need permission and you do not need to '
           'justify it.'),
          ('Caller', 'Is there a reference?'),
          ('Officer', 'There will be once it is in writing. Quote CN dash '
           'four one nine on the email and I will match it up.')],
         items=[
          ('Only a ____________ concern to a designated officer starts the '
           'clock.', None, 'written',
           'Three verbal raisings count for nothing under the policy.'),
          ('Designated officer for procurement: Mr ____________-Beck',
           None, 'Oyelaran',
           'Spelt out by the officer during the call.'),
          ('Protection holds even if the concern is ____________, provided '
           'the caller was not lying.', None, 'unfounded',
           'Mistaken is fine; knowingly untrue is not.'),
          ('The officer will not promise ____________.', None,
           'anonymity',
           'Because people being interviewed can often work out who raised '
           'it.'),
          ('Escalation to the audit committee is possible after '
           '____________ working days.', None, 'thirty',
           'With no permission and no justification needed.'),
          ('Reference to quote: CN-____________', None, '419',
           'To be matched up once the written concern arrives.')])],
   speak=dict(
    part='Part 1', focus='Rules where you work or study',
    intro=('Two or three sentences each. A rule you have actually had to '
           'follow beats a general observation.'),
    qs=['Are there many rules where you work or study?',
        'Are they written down?',
        'Do people follow them?',
        'Who decides what the rules are?'],
    shape=[('answer', 'A great many, and about four that anybody '
            'checks.'),
           ('support', 'We have to log every call within the hour.'),
           ('follow-up', 'Which people do by logging them all at five '
            'o’clock, so the rule is met and the point of it is not.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Raising a formal concern that was ignored',
         prompt=('You raised a formal concern at work and nothing has '
                 'happened. Write a letter to the audit committee. In your '
                 'letter: give the history; say which part of the policy has '
                 'not been followed; say what you want done. Write at least '
                 '150 words.'),
         model=[
          'Dear Audit Committee,',
          'I am escalating concern CN-419, raised in writing with the '
          'designated officer for finance on 3 February and not resolved '
          'within thirty working days.',
          'The history is as follows. I raised the matter verbally with my '
          'line manager on three occasions in December and January. I '
          'submitted it in writing on 3 February and received an '
          'acknowledgement on 5 February. I was told on 1 March that it had '
          'been allocated to an investigator. I have had no further '
          'communication, and the thirtieth working day was 17 March.',
          'Two provisions have not been followed. Paragraph 5 of the policy '
          'requires that a concern be resolved within thirty working days or '
          'escalated, and neither has occurred. Paragraph 4 provides for '
          'confidentiality so far as is consistent with investigating; the '
          'substance of my concern was repeated to me by a colleague on 24 '
          'February, which is before any interview had taken place and so '
          'cannot have been necessary to the investigation.',
          'I am asking for three things: confirmation of who is now '
          'investigating, a date by which I will be told the outcome, and a '
          'review of how the substance reached a colleague on 24 February. '
          'I am not asking the committee to reach a view on the procurement '
          'concern itself, which remains with the investigator.',
          'Yours faithfully,',
          'S. Ferreira-Nkemdirim'],
         notes=[
          'The history is dates and nothing else. An escalation letter is '
          'read by people who were not there, and a reconstruction they can '
          'follow in thirty seconds is worth more than any characterisation '
          'of how it felt.',
          'Each failure is tied to a numbered provision. "You have not '
          'followed your own policy" is an accusation; "paragraph 5 '
          'requires resolution or escalation within thirty working days and '
          'neither has occurred" is a finding the committee can simply '
          'verify.',
          'The last sentence narrows the ask deliberately, leaving the '
          'substantive concern where it belongs. A committee that is asked '
          'for three procedural things can grant them this week; one asked '
          'to adjudicate the whole matter will refer it back.'],
         criterion=[('A history that is dates and nothing else',
                     'Task Achievement'),
                    ('Each failure tied to a numbered provision',
                     'Task Response'),
                    ('An ask narrow enough to be granted this week',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Chronology, policy reference and remedy',
    explain=('An escalation has three components and a reader must be able '
             'to separate them at a glance: what happened when, which rule '
             'it breaches, and what you want. These patterns keep them '
             'apart.'),
    examples=['The policy provides for escalation at thirty working days, '
              'which has not been followed in this case.',
              'I raised it verbally in December and in writing on 3 '
              'February.',
              'Paragraph 4 provides for confidentiality so far as is '
              'consistent with investigating.',
              'I am asking for confirmation, a date, and a review.'],
    task='Rewrite each sentence as chronology, reference or remedy.',
    items=[('They have ignored me for months.',
            'I submitted the concern on 3 February and have received no '
            'communication since 1 March.'),
           ('They broke their own rules.',
            'Paragraph 5 requires resolution or escalation within thirty '
            'working days; the thirtieth was 17 March.'),
           ('Somebody has been talking.',
            'The substance was repeated to me by a colleague on 24 '
            'February, before any interview had taken place.'),
           ('I want this sorted out.',
            'I am asking for confirmation of the investigator, a date for '
            'the outcome, and a review of the disclosure of 24 February.'),
           ('I do not want to get anyone in trouble.',
            'I am not asking the committee to reach a view on the '
            'procurement concern, which remains with the investigator.')]),
   vocab=[('protected disclosure', 'a concern raised in a way that carries '
           'legal protection'),
          ('detriment', 'any worsening of treatment following a '
           'disclosure'),
          ('escalation', 'taking a matter to a higher body'),
          ('confidentiality', 'limiting who is told, so far as possible'),
          ('designated officer', 'the person a formal concern must go to'),
          ('good faith', 'believing what you say to be true'),
          ('audit committee', 'a body sitting outside the executive'),
          ('reprisal', 'action taken against somebody for speaking')],
   expr=[('The policy provides for... which has not been followed in this '
          'case', 'ties a failure to a provision'),
         ('a promise that cannot be kept is worse than an honest statement '
          'of the limit', 'defends refusing to over-reassure'),
         ('a concern you cannot evidence is one you did not raise',
          'states why a copy matters'),
         ('mistaken is fine; knowingly untrue is not',
          'draws the good-faith line in five words')],
   trans=['furthermore', 'in this connection', 'the history is as follows',
          'I am asking for'],
  ),

  dict(
   sub='What rules produce',
   step=4,
   read=[
    dict(heading='Four organisations and one target',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Hieronymus, emergency department: The four-hour target changed '
          'my department for the better and I will defend it against people '
          'who have never run one. Before it, patients waited eleven hours '
          'on trolleys and nobody counted. It also produced a spike of '
          'admissions at three hours fifty minutes, which is real and which '
          'I did too, and I would still choose the target over what '
          'preceded it.',
          'B  Perpetua, housing repairs: Ours is a completion target and it '
          'has hollowed the service out. A repair is logged as complete when '
          'the operative leaves. Three visits for one leak is three '
          'completions and one tenant who is still wet. Our figures have '
          'risen every year for five years and the tenants’ survey has '
          'fallen every year for five years, and both are accurate.',
          'C  Thaddeus, benefit decisions: The target is decision speed and '
          'the effect is that difficult cases get refused, because a refusal '
          'is a decision and takes four minutes. The appeal overturns about '
          'sixty per cent of them, eight months later, and the appeal is '
          'somebody else’s budget. Nobody designed this and everybody can '
          'see it.',
          'D  Winifred, who sets the targets: Every one of those three is '
          'describing something real and none of them is describing an '
          'alternative. I inherited a system with no measurement at all, in '
          'which the worst service in the region was indistinguishable from '
          'the best and neither knew. I would like a better measure. Nobody '
          'has given me one, and "use judgement" is not a measure, it is the '
          'thing we had before.'],
         items=[
          ('Which person defends a target while admitting they gamed it?',
           ['Hieronymus', 'Perpetua', 'Thaddeus', 'Winifred'], 0,
           'The spike at three hours fifty minutes, which he says he did '
           'too.'),
          ('Which person reports a measure and a survey moving in opposite '
           'directions?',
           ['Hieronymus', 'Perpetua', 'Thaddeus', 'Winifred'], 1,
           'Five years of rising figures and falling satisfaction, both '
           'accurate.'),
          ('Which person describes a cost falling on a different budget?',
           ['Hieronymus', 'Perpetua', 'Thaddeus', 'Winifred'], 2,
           'Appeals overturning about sixty per cent, eight months '
           'later.'),
          ('Which person says the alternative is what existed before?',
           ['Hieronymus', 'Perpetua', 'Thaddeus', 'Winifred'], 3,
           'And that "use judgement" is not a measure.'),
          (
           'Perpetua believes her service\u2019s published figures are '
           'inaccurate.', ['Yes', 'No', 'Not Given'], 1,
           'She says both the figures and the survey are accurate.',
           {0: 'Yes would need inaccuracy; she calls both sources '
               'accurate.', 2: 'Not Given is wrong because she rates the figures.'}),
          (
           'Thaddeus believes the refusal pattern was intended by '
           'those who designed the target.',
           ['Yes', 'No', 'Not Given'], 1,
           'He says nobody designed it and everybody can see it.',
           {0: 'Yes would need intent; he says nobody designed it.', 2: 'Not Given is wrong because he addresses intention.'})])],
   listen=[
    dict(heading='A short talk: what rules produce', part='Part 2',
         task='A talk at a public management seminar', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'I am going to describe four ways a target gets met '
           'without the thing it stands for improving, and I want to be '
           'clear at the start that none of them requires anybody to behave '
           'dishonestly. That is the uncomfortable part. These are what '
           'reasonable people do when a number governs their working '
           'life.'),
          ('Speaker', 'The first is threshold behaviour. A four-hour target '
           'produces a spike of activity at three hours fifty, because the '
           'difference between three fifty and four ten is enormous to the '
           'figures and trivial to the patient. Effort moves to where the '
           'line is, and the line is an administrative artefact.'),
          ('Speaker', 'The second is selection. If you are judged on the '
           'proportion of cases resolved well, the cheapest improvement is '
           'to take fewer difficult cases, and nobody has to refuse '
           'anything: a referral route goes unadvertised, a form becomes '
           'slightly longer, and the difficult cases go elsewhere on their '
           'own.'),
          ('Speaker', 'The third is redefinition. A repair is complete when '
           'the operative leaves. Three visits to one leak are three '
           'completions. Nobody has lied; the definition was always that, '
           'and for twenty years before the target nobody had any reason to '
           'notice what the definition permitted.'),
          ('Speaker', 'The fourth is the one that costs most and is least '
           'visible, which is effort moving off everything unmeasured. A '
           'service with one target and nine unmeasured functions will '
           'improve on the one and decline on the nine, and only the first '
           'will appear anywhere. We call that multitasking and the name is '
           'far too mild for what it does.'),
          ('Speaker', 'And the conclusion I want you to resist is the '
           'obvious one. None of this shows that targets are a mistake. It '
           'shows that a target is an instrument with known failure modes, '
           'like any other, and the question is always what you are '
           'comparing it with — which in most of these services is a '
           'period when nobody measured anything and the worst performer in '
           'the region could not be identified.')],
         items=[
          ('He stresses at the start that these behaviours require',
           ['dishonesty', 'no dishonesty', 'poor management',
            'weak rules'], 1,
           'They are what reasonable people do when a number governs their '
           'work.'),
          ('Threshold behaviour moves effort to',
           ['the hardest cases', 'where the line is', 'the start of the '
            'day', 'the cheapest cases'], 1,
           'Producing a spike just before the four-hour mark.'),
          ('Selection works, he says, without anybody',
           ['being measured', 'refusing anything', 'being told',
            'keeping records'], 1,
           'An unadvertised route or a longer form is enough.'),
          ('The costliest failure mode is',
           ['threshold behaviour', 'selection', 'redefinition',
            'effort moving off what is unmeasured'], 3,
           'Which he says is also the least visible.')]),
    dict(heading='Two managers disagree about targets', part='Part 3',
         task='A discussion between two managers', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Perpetua', 'I want the completion target replaced and I will '
           'start by saying what I am not claiming.'),
          ('Winifred', 'Go on.'),
          ('Perpetua', 'I am not claiming the service was better before. It '
           'was worse and I was here. I am claiming the measure has stopped '
           'telling you anything, which is a different complaint.'),
          ('Winifred', 'That is a fair distinction and most people who come '
           'to me do not make it. Evidence?'),
          ('Perpetua', 'Completions up every year for five years. Tenant '
           'satisfaction down every year for five years. Same service, same '
           'period, both figures audited.'),
          ('Winifred', 'And the explanation?'),
          ('Perpetua', 'A repair is complete when the operative leaves. '
           'Three visits to one leak is three completions and one tenant '
           'still mopping. The definition has not changed; what changed is '
           'that it now governs promotion.'),
          ('Winifred', 'Before the replacement, tell me what the figures '
           'would look like if you were wrong about the cause.'),
          ('Perpetua', 'Completions up and satisfaction down for some '
           'other reason — rents, or the repairs being counted the same '
           'way but the stock deteriorating faster than anybody is '
           'fixing.'),
          ('Winifred', 'The second of those is a real possibility and I '
           'would want it ruled out before I take this anywhere.'),
          ('Perpetua', 'Repeat visits to the same address are up sixty per '
           'cent over the same five years. If the stock were simply '
           'worsening you would expect new addresses, not the same ones '
           'again.'),
          ('Winifred', 'That is the number your case needs and it was not '
           'in your paper. Then give me the replacement, because that is '
           'where '
           'every one of these conversations ends.'),
          ('Perpetua', 'Repairs that did not recur within ninety days, as '
           'a proportion of repairs attempted.'),
          ('Winifred', 'That is a real measure and I can see two problems '
           'with it inside ten seconds, which is not a reason to reject '
           'it.'),
          ('Perpetua', 'Say them.'),
          ('Winifred', 'It takes ninety days to know anything, so you '
           'cannot manage weekly with it. And it creates an incentive to '
           'avoid the properties where things recur, which are the oldest '
           'stock and the poorest tenants.'),
          ('Perpetua', 'The first I accept and would run both measures for a '
           'year. The second is serious and I had not seen it.'),
          ('Winifred', 'The fix is to report it by stock age so the '
           'avoidance is visible. Every measure can be gamed; what you want '
           'is one whose gaming shows up in a column somebody reads.'),
          ('Perpetua', 'That is a better principle than the proposal I came '
           'in with.'),
          ('Winifred', 'Write it that way and I will take it to the board. '
           'And put your "I am not claiming it was better before" sentence '
           'first, because without it the board stops reading at paragraph '
           'two.')],
         items=[
          ('Perpetua begins by saying she is not claiming',
           ['the figures are wrong', 'the service was better before',
            'the target was dishonest', 'staff are at fault'], 1,
           'She says it was worse and she was there.'),
          ('Her evidence is that completions and satisfaction',
           ['both rose', 'both fell', 'moved in opposite directions',
            'did not change'], 2,
           'Over the same five years, both figures audited.'),
          ('The cause she identifies is',
           ['staff shortages', 'the definition of a completed repair',
            'funding', 'the survey method'], 1,
           'A repair is complete when the operative leaves.'),
          ('Winifred’s second objection to the proposed measure is that '
           'it creates an incentive to',
           ['delay repairs', 'avoid properties where things recur',
            'over-report', 'reduce staff'], 1,
           'The oldest stock and the poorest tenants.'),
          ('Her proposed fix is to report the measure by',
           ['region', 'stock age', 'operative', 'cost'], 1,
           'So that the avoidance becomes visible.'),
          ('The principle she states is that you want a measure whose '
           'gaming', ['is impossible', 'shows up in a column somebody '
            'reads', 'is punished', 'is rare'], 1,
           'Since every measure can be gamed.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Targets',
    intro=('Short answers, then the long turn. The explanation bullet is '
           'where this card is decided.'),
    cue=('Describe a rule that produced an unexpected result.',
         ['what the rule was', 'why it was introduced',
          'what happened instead',
          'and explain whether you think the rule should be kept']),
    qs=['Are you measured on anything at work or in your studies?',
        'Does being measured change how you work?',
        'Now look at the card. You have one minute to make notes.',
        'Are targets useful in general?'],
    shape=[('answer', 'A rule that every call had to be logged within the '
            'hour.'),
           ('support', 'It was brought in because records were patchy.'),
           ('follow-up', 'Everyone now logs the whole day at five '
            'o’clock.'),
           ('support', 'So compliance is a hundred per cent and the '
            'records are worse than before.'),
           ('follow-up', 'I would keep the rule and measure how long after '
            'the call the entry was made, which is the thing they actually '
            'wanted.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should organisations be judged by measurable targets?',
         prompt=('Some people believe organisations, especially public '
                 'services, should be judged by measurable targets. Discuss '
                 'the advantages and give your own position. Write at least '
                 '250 words.'),
         model=[
          'The advantages of measurable targets are substantial and are '
          'usually stated badly by their defenders, who claim that '
          'measurement improves performance. What measurement reliably does '
          'is make performance comparable, and the improvement follows only '
          'where somebody acts on the comparison.',
          'That comparability is worth more than it sounds. Before the '
          'four-hour standard, emergency departments in the same region '
          'differed enormously and nobody could say which was which; the '
          'worst performer was invisible to everybody including itself. A '
          'target makes a distribution visible, and a visible distribution '
          'is the precondition for almost every improvement anybody has '
          'managed in public services, including the improvements later '
          'cited against targets.',
          'The familiar objection is that targets are gamed, and it is '
          'correct and insufficiently specific. Gaming has identifiable '
          'forms: activity clusters just inside a threshold; difficult '
          'cases are deterred rather than refused; a definition that was '
          'always permissive becomes load-bearing; and effort drains away '
          'from the nine functions nobody measures towards the one somebody '
          'does. These are predictable, which means they can be designed '
          'against, and most of them are detectable in data the '
          'organisation already holds.',
          'The stronger objection is different and is rarely the one made. '
          'It is that a measure used for control stops being a measure of '
          'anything: once promotion depends on completions, the completion '
          'figure stops reporting repairs and starts reporting the response '
          'to the incentive. A housing service whose completions rose every '
          'year for five years while tenant satisfaction fell every year '
          'for five is not producing false figures; it is producing figures '
          'about something other than what they are read as describing.',
          'My own position is that the argument is conducted against the '
          'wrong alternative. The choice is not between measurement and '
          'judgement; it is between measurement and unexamined judgement, '
          'because the period before targets was not a golden age of '
          'professional discretion but a period in which variation was '
          'invisible. So: keep the targets, require every measure to be '
          'published alongside an independent outcome assessment that is '
          'not used for control, and treat divergence between the two as '
          'the finding rather than as an embarrassment. A measure that '
          'cannot be checked against something nobody is paid to hit is '
          'not a measure for very long.'],
         notes=[
          'The first paragraph improves the case it is about to defend. '
          'Claiming that measurement makes performance comparable, rather '
          'than that it improves performance, is both more defensible and '
          'more interesting, and the rest of the essay rests on it.',
          'Paragraph 3 grants the familiar objection and then makes it more '
          'specific than the objector did, which is a way of taking an '
          'argument seriously that scores far higher than rebutting a weak '
          'version of it. Paragraph 4 then supplies the stronger objection '
          'the other side missed.',
          'The recommendation separates the measure used for control from '
          'the measure used for truth, which is the practical content of '
          'everything the unit teaches, and the last sentence states the '
          'principle in a form that could be put in a policy.'],
         criterion=[('Improving the case before defending it',
                     'Task Response'),
                    ('Granting an objection and sharpening it',
                     'Task Response'),
                    ('Naming the alternative the argument is really '
                     'against', 'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Qualification and scope: only, even, at least',
    explain=('Small scope-bearing words change what a sentence claims, and '
             'at band 7.5 they are placed deliberately. The commonest fault '
             'is "only" sitting next to the wrong element.'),
    examples=['The target was met and the thing it stood for was not.',
              'Improvement follows only where somebody acts on the '
              'comparison.',
              'Even the services that gamed it were better than before.',
              'At least this much variation exists; there may be more.'],
    task='Rewrite each sentence so that the scope word governs the right '
         'element.',
    items=[('Only the figures improved.',
            'The figures improved; the service they report on did not.'),
           ('Targets only work in some places.',
            'Targets produce improvement only where somebody acts on the '
            'comparison they make possible.'),
           ('Even the best services game them.',
            'Gaming occurs even in the services that perform best on the '
            'measure, which is why it is not a sign of bad management.'),
           ('There is at least some variation.',
            'The published figures establish at least this much variation '
            'between services, and the true spread may be wider.'),
           ('The repairs were only counted once.',
            'Each visit was counted as a completion, so one repair '
            'requiring three visits appeared three times.')]),
   vocab=[('target', 'a published standard performance is judged '
           'against'),
          ('playing the measure', 'meeting a number without improving '
           'what it stands for'),
          ('threshold effect', 'activity clustering just inside a line'),
          ('cream-skimming', 'taking the easiest cases to improve a '
           'score'),
          ('unintended consequence', 'an effect nobody designed and '
           'everyone could see'),
          ('multitasking', 'effort moving off the unmeasured parts of a '
           'job'),
          ('redefinition', 'meeting a measure by what the words '
           'permit'),
          ('load-bearing', 'carrying weight it was not built for')],
   expr=[('The target was met and the thing it stood for was not',
          'the cycle’s central sentence'),
         ('nobody designed this and everybody can see it',
          'describes an emergent outcome'),
         ('a measure whose gaming shows up in a column somebody reads',
          'states a design principle for measures'),
         ('"use judgement" is not a measure, it is the thing we had '
          'before', 'refuses a non-alternative')],
   trans=['whereas', 'that said', 'the stronger objection',
          'the familiar objection'],
  ),

  dict(
   sub='What a measure does to behaviour',
   step=5,
   read=[
    dict(heading='Three services and the measure they were judged by',
         kind='Data article',
         task='Matching information and table completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_TGT, figure2=_OUT,
         paras=[
          'The two charts show the same three public services over the same '
          'five years, measured in two different ways. The first gives '
          'performance against the published target: the percentage of '
          'cases meeting the standard the service is judged by. The second '
          'gives an independently assessed outcome score on a hundred-point '
          'scale, produced by a body that has no part in setting or '
          'enforcing the targets.',
          'On the target measure, all three services improved substantially '
          'and by similar amounts. Emergency care rose from 71 to 94, '
          'housing repairs from 64 to 91, and benefit decisions from 68 to '
          '93. Read alone, the first chart describes a system-wide '
          'improvement of between twenty-three and twenty-seven percentage '
          'points in five years.',
          'On the outcome measure the three diverge. Emergency care rose '
          'from 63 to 71. Housing repairs fell from 59 to 54. Benefit '
          'decisions fell from 61 to 58. One service improved on both '
          'measures; two improved sharply on the target while declining on '
          'the outcome.',
          'The divergence rather than either chart is the finding, and its '
          'size is worth stating. Housing repairs gained twenty-seven points '
          'on the target and lost five on the outcome, a gap of thirty-two '
          'points between the two accounts of the same five years in the '
          'same service.',
          'The explanations offered by the services themselves are specific '
          'and differ. Housing repairs counts a visit as a completion, so '
          'three visits to one fault register as three successes; the '
          'outcome assessment counts the fault. Benefit decisions is judged '
          'on decision speed, and a refusal is a decision reached in four '
          'minutes where an award requires evidence; some sixty per cent of '
          'refusals are later overturned on appeal, which falls on a '
          'different budget and appears in neither chart.',
          'Emergency care, the one service that improved on both, is also '
          'the one whose target is closest to the outcome it stands for. '
          'Time to treatment is not the same thing as quality of care, and '
          'it is a component of it; completion of a visit is not a '
          'component of a repair having been effected, and speed of '
          'decision is not a component of a decision being right.',
          'That observation supports a general rule with an unusual amount '
          'of evidence behind it. Where the measure is a part of the '
          'outcome, pressure on the measure tends to raise the outcome. '
          'Where the measure is a correlate of the outcome, pressure on the '
          'measure breaks the correlation, because the correlation existed '
          'under conditions where nobody was pushing on it.'],
         items=[
          ('Which paragraph gives the size of the divergence?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'Thirty-two points between the two accounts in housing '
           'repairs.'),
          ('Which paragraph explains why one service improved on both '
           'measures?', ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 2,
           'Its target is closest to the outcome it stands for.'),
          ('Which paragraph states the general rule?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 4'], 2,
           'Part of the outcome versus correlate of the outcome.'),
          ('Housing repairs on the outcome measure fell from 59 to '
           '____________.', None, '54',
           'Paragraph 3, while its target score rose from 64 to 91.'),
          ('About ____________ per cent of benefit refusals are overturned '
           'on appeal.', None, 'sixty',
           'Paragraph 5, falling on a different budget.'),
          ('Pressure on a measure that is merely a ____________ of the '
           'outcome breaks the relationship.', None, 'correlate',
           'Paragraph 7, because it held under conditions with no '
           'pressure.')])],
   listen=[
    dict(heading='A researcher on target effects', part='Part 4',
         task='A lecture on measurement and behaviour', band='l4',
         qtype='Questions 39-44',
         figure=_TGT, figure2=_OUT,
         script=[
          ('Researcher', 'Two charts, three services, five years, and the '
           'charts disagree. What you do with that disagreement is the whole '
           'skill, and the wrong move is to decide which chart to believe. '
           'Both are accurate. The disagreement is the data.'),
          ('Researcher', 'Chart one, performance against target. Emergency '
           'care seventy-one to ninety-four. Housing repairs sixty-four to '
           'ninety-one. Benefit decisions sixty-eight to ninety-three. '
           'Twenty-three to twenty-seven points in five years across the '
           'board. On this chart alone, a triumph.'),
          ('Researcher', 'Chart two, independently assessed outcome, same '
           'services, same years, assessed by a body with no role in setting '
           'or enforcing the targets. Emergency care sixty-three to '
           'seventy-one. Housing repairs fifty-nine down to fifty-four. '
           'Benefit decisions sixty-one down to fifty-eight.'),
          ('Researcher', 'So: one service up on both, two sharply up on the '
           'target and down on the outcome. Housing repairs gains '
           'twenty-seven on one chart and loses five on the other — a '
           'thirty-two point gap between two true accounts of the same '
           'five years in the same organisation.'),
          ('Researcher', 'The services explain it themselves and the '
           'explanations are specific. Housing counts a visit as a '
           'completion, so three visits to one leak is three successes and '
           'the outcome assessor counts the leak. Benefits is judged on '
           'speed, and a refusal takes four minutes where an award takes '
           'evidence.'),
          ('Researcher', 'And about sixty per cent of those refusals are '
           'overturned on appeal, eight months later, out of a different '
           'budget. It appears on neither chart, which is worth sitting '
           'with: the largest single cost of this target is invisible to '
           'both of the measures we are using to evaluate it.'),
          ('Researcher', 'Now the interesting question. Why did emergency '
           'care improve on both? Because its target is nearest to the '
           'thing it stands for. Time to treatment is not quality of care '
           'and it is a component of it. Completing a visit is not a '
           'component of a fault being fixed. Deciding fast is not a '
           'component of deciding correctly.'),
          ('Researcher', 'Which gives you the rule, and it has more '
           'evidence behind it than most things I teach. If your measure is '
           'part of the outcome, pressure on the measure raises the '
           'outcome. If your measure is merely correlated with the outcome, '
           'pressure breaks the correlation, because the correlation was '
           'observed in a world where nobody was pushing on it.'),
          ('Researcher', 'So when somebody proposes a new target, you have '
           'one question, and it is not whether the measure is accurate. It '
           'is whether it is a part or a correlate, and the proposer will '
           'usually never have been asked.')],
         items=[
          ('The wrong move with two disagreeing charts is to',
           ['report both', 'decide which to believe', 'average them',
            'discard both'], 1,
           'Because both are accurate and the disagreement is the data.'),
          ('Which service improved on both measures?',
           ['emergency care', 'housing repairs', 'benefit decisions',
            'none'], 0,
           'From 71 to 94 on target and 63 to 71 on outcome.'),
          ('The gap between the two accounts in housing repairs is',
           ['five points', 'twenty-seven points', 'thirty-two points',
            'ninety-one points'], 2,
           'A gain of twenty-seven against a loss of five.'),
          ('The cost of overturned benefit refusals appears',
           ['on chart one', 'on chart two', 'on both', 'on neither'], 3,
           'Which he says is worth sitting with.'),
          ('Emergency care improved on both because its target is',
           ['easier', 'nearest to the thing it stands for',
            'older', 'less strict'], 1,
           'Time to treatment is a component of quality of care.'),
          ('The question to ask of a proposed target is whether the '
           'measure is', ['accurate', 'a part or a correlate of the '
            'outcome', 'affordable', 'published'], 1,
           'Which he says the proposer will usually never have been '
           'asked.')])],
   speak=dict(
    part='Part 3', focus='Measuring an organisation',
    intro=('Five or six sentences. Try once to say that two true figures '
           'can disagree.'),
    qs=['How should a hospital or school be judged?',
        'Can everything important be measured?',
        'What happens when people know how they are being measured?',
        'Should measures be published?'],
    shape=[('answer', 'By two measures at once, only one of which anybody '
            'is paid to hit.'),
           ('support', 'Three services improved on their targets by about '
            'twenty-five points.'),
           ('follow-up', 'Two of them declined on an independent outcome '
            'score.'),
           ('support', 'Both sets of figures were audited and both are '
            'true.'),
           ('follow-up', 'The gap between them is the finding, and you only '
            'get it by measuring twice.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Performance against target and against outcome, three '
                 'services',
         prompt=('The charts below show performance against target and '
                 'against an independently assessed outcome for three '
                 'public services in 2019 and 2024. Summarise the '
                 'information by selecting and reporting the main features, '
                 'and make comparisons where relevant. Write at least 150 '
                 'words.'),
         figure=_TGT, figure2=_OUT,
         model=[
          'The two bar charts show three public services in 2019 and 2024, '
          'measured first against their published targets and second '
          'against an independently assessed outcome score. Overall, all '
          'three services improved substantially on the target measure, '
          'while only one of them improved on the outcome measure, so that '
          'the two charts give opposite accounts of two of the services.',
          'On the target measure the three moved almost together. Emergency '
          'care rose from 71 to 94 per cent, housing repairs from 64 to 91 '
          'and benefit decisions from 68 to 93, gains of between 23 and 27 '
          'percentage points.',
          'On the outcome measure they separate. Emergency care rose from '
          '63 to 71, while housing repairs fell from 59 to 54 and benefit '
          'decisions from 61 to 58. Emergency care is therefore the only '
          'service to improve on both.',
          'The contrast is clearest when each service is read across the '
          'two charts. Emergency care gained 23 points on target and 8 on '
          'outcome, moving in the same direction on both. Housing repairs '
          'gained 27 on target and lost 5 on outcome, the widest divergence '
          'in the data at 32 points, with benefit decisions close behind at '
          '28.'],
         notes=[
          'The Overall statement says that the two charts disagree, which '
          'is the single sentence this question exists to elicit. An answer '
          'that describes each chart in turn and never says they conflict '
          'has reported the data and missed the information.',
          'The answer is organised chart by chart and then, crucially, '
          'service by service across both. That last paragraph is where the '
          'marks are: it is the only place the two sources are brought into '
          'contact.',
          'No explanation is offered for the divergence. Why housing repairs '
          'behaves this way is not on either chart, and a sentence about '
          'counting visits as completions would be unsupported however true '
          'it is.'],
         criterion=[('An Overall statement that says the charts disagree',
                     'Task Achievement'),
                    ('A paragraph reading each service across both charts',
                     'Coherence and Cohesion'),
                    ('No explanation the charts cannot support',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Two charts whose disagreement is the argument',
    explain=('When two sources conflict, the language has to hold both as '
             'true while locating the conflict. These patterns do that '
             'without implying either is wrong.'),
    examples=['Performance against target improved in all three; outcomes '
              'in one.',
              'The two charts give opposite accounts of the same five '
              'years.',
              'Housing repairs gained 27 points on one measure and lost 5 '
              'on the other.',
              'Both figures are audited and both are accurate.'],
    task='Rewrite each sentence so that both sources are held as true.',
    items=[('The outcome figures show the targets are wrong.',
            'The target and outcome measures diverge by up to 32 points, '
            'and both are independently audited.'),
           ('Housing repairs got worse.',
            'Housing repairs rose 27 points against target and fell 5 '
            'points against outcome over the same period.'),
           ('Only one chart can be right.',
            'The charts measure different things, and their disagreement is '
            'the feature rather than a sign of error.'),
           ('Emergency care is the best service.',
            'Emergency care is the only one of the three to move in the '
            'same direction on both measures.'),
           ('Benefit decisions are failing.',
            'Benefit decisions improved by 25 points on target while '
            'declining by 3 on outcome, a divergence of 28.')]),
   vocab=[('outcome score', 'an assessment of what a service achieved'),
          ('opposite movement', 'two measures going different ways over '
           'one period'),
          ('correlate', 'something that moves with an outcome without '
           'being part of it'),
          ('component', 'a part of the thing being measured'),
          ('independently assessed', 'judged by a body with no stake'),
          ('externally checked', 'verified by somebody outside the '
           'organisation'),
          ('case-mix', 'the difficulty profile of what an organisation '
           'handles'),
          ('four-hour', 'the standard an emergency department is judged '
           'on')],
   expr=[('Performance against target improved in all three; outcomes in '
          'one', 'the cycle’s headline sentence'),
         ('the disagreement is the data',
          'reframes a conflict as the finding'),
         ('a part or a correlate',
          'the question to ask of any proposed measure'),
         ('the largest single cost is invisible to both measures',
          'names what neither source captures')],
   trans=['while', 'by contrast', 'taken together', 'read across the two'],
  ),

  dict(
   sub='Why a measure stops measuring',
   step=5,
   read=[
    dict(heading='When a proxy becomes the objective',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'The observation that a measure employed for control ceases to be '
          'a good measure is associated with Goodhart, who formulated it '
          'about monetary aggregates, and it has been rediscovered '
          'independently in education, policing, medicine and software. The '
          'frequency of rediscovery is itself informative: the result is not '
          'intellectually demanding, and some feature of the situation in '
          'which it operates renders it difficult to discern from inside. '
          'Practitioners who have observed it occur in one field reliably '
          'fail to anticipate it in the next, which suggests the obstacle is '
          'not ignorance of the result but something inherent in occupying '
          'the position where it applies.',
          'The mechanism is not that individuals cheat, although a minority '
          'do. It is that a correlation observed in the absence of pressure '
          'constitutes a statement about a world in which nobody was '
          'attempting to move it. Examination results track learning where '
          'nobody is optimising for examination results; waiting times track '
          'access where nobody is optimising for waiting times. Introduce '
          'the pressure and the world in which the correlation was measured '
          'has been altered. Nothing has been falsified and nobody has '
          'behaved improperly; the relationship merely described a situation '
          'that the act of measurement abolished.',
          'This carries a significant consequence that is routinely '
          'overlooked: the degradation is no indication that an '
          'inappropriate measure was selected. The optimal available '
          'proxy degrades for precisely the same reason as an '
          'inadequate one, and occasionally faster, since a superior '
          'proxy attracts greater pressure. The pursuit of a measure '
          'immune to manipulation is therefore not a pursuit capable '
          'of succeeding, and considerable effort has been expended on '
          'it. The practical corollary is that a proposal defended on '
          'the ground that its measure is exceptionally well chosen '
          'has misconstrued the difficulty it purports to resolve.',
          'What does differ between measures is how far the degradation can '
          'go, and this is contingent on a structural property: whether the '
          'measure is a component of the outcome or merely correlated with '
          'it. Time to treatment is a component of quality of care; pressure '
          'on it can distort practice but cannot wholly detach the measure '
          'from the thing. Completion of a visit is not a component of a '
          'fault being fixed, and the two can separate wholly. The '
          'distinction is available in advance, costs nothing to apply, and '
          'is scarcely ever applied, because the question that gets asked of '
          'a proposed measure is whether it can be collected rather than '
          'what it is made of.',
          'A second structural property is whether the measure covers  '
          'the entirety of the job. A service with one measured function and '
          'nine unmeasured ones will reallocate effort towards the first, '
          'and the resulting decline in the other nine appears nowhere. This '
          'is the costliest failure mode in the literature and the least '
          'visible, because the evidence for it is an absence. An '
          'organisation cannot produce figures demonstrating the decline of '
          'functions it does not measure, and its inspectors arrive looking '
          'at the figures it does produce.',
          'Responses divide into three families. The first multiplies '
          'measures until the entire job is covered, which fails because '
          'twelve measures generate twelve distortions and a reporting '
          'burden that itself consumes the activity under measurement. The '
          'second randomises or rotates which measure is enforced, which '
          'succeeds in theory and has proved politically unsustainable, '
          'since nobody can be held accountable for a target that might not '
          'apply.',
          'The third response is the one the evidence supports most strongly '
          'and it is organisationally awkward. It retains two measures: one '
          'employed for control, with its established distortions accepted, '
          'and one employed for truth, assessed independently and attached '
          'to no consequence whatever. The second measure remains honest '
          'precisely because nobody possesses any incentive to move it.',
          'The awkwardness is genuine. An organisation publishing a measure '
          'that it is not accountable for invites the question of why it is '
          'not accountable for it, and the honest answer — because '
          'accountability would destroy the measure — is difficult to put in '
          'a press release and is nonetheless the correct answer.',
          'Where this has been implemented, the useful output has not been '
          'either measure but the gap between them. A widening gap is a '
          'direct estimate of how much distortion the control measure is '
          'producing, and it is available in no other way. Services that '
          'track it report that it changes internal arguments faster than '
          'any amount of external inspection. A manager presented with '
          'the gap cannot attribute it to the assessor’s misunderstanding '
          'of the work, which is the standard first response to an '
          'unwelcome external figure on its own.',
          'None of this supports abandoning measurement, which is the '
          'conclusion most frequently extracted by individuals whose '
          'position it does not in fact reach. The comparison is never '
          'measurement against truth; it is measurement against unexamined '
          'judgement, under which the weakest performer in a region is '
          'indistinguishable from the strongest and nobody, the weakest '
          'performer included, knows which is which.',
          'The practical test for any proposed measure is three '
          'questions: is it a component of the outcome or a correlate '
          'of it? Does it cover the whole job or one component of it, '
          'and is there a second measure, attached to nothing, against '
          'which it can be checked? A measure that fails all three '
          'will produce exactly the figures it was designed to '
          'produce, and nothing else.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Rediscovery', 'Why a correlation breaks under pressure',
            'Component or correlate', 'The three responses'], 1,
           'The correlation was observed in a world with no pressure on '
           'it.'),
          ('Choose the best heading for paragraph 5.',
           ['Component or correlate',
            'Measures that cover only part of the job',
            'The two-measure response', 'The practical test'], 1,
           'Nine unmeasured functions and an effect that appears '
           'nowhere.'),
          ('Choose the best heading for paragraph 7.',
           ['Multiplying measures', 'Rotating measures',
            'One measure for control and one for truth',
            'The gap between them'], 2,
           'The second measure attached to no consequence whatever.'),
          (
           'The writer believes degradation shows the wrong measure '
           'was chosen.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3 says the best available proxy degrades for the '
           'same reason.',
           {0: 'Yes would need a wrong choice; paragraph 3 says the '
               'best proxy degrades too.', 2: 'Not Given is wrong because degradation is explained.'}),
          ('The writer believes measurement should be abandoned.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 10 calls that a conclusion the argument does not '
           'reach.',
           {0: 'Yes would need abandonment; paragraph 10 says the '
               'argument does not reach it.', 2: 'Not Given is wrong because the writer states where the '
               'argument stops.'}),
          ('A measure that is a ____________ of the outcome cannot detach '
           'from it entirely.', None, 'component',
           'Paragraph 4, unlike one that is merely correlated.'),
          ('The costliest failure mode is least visible because its '
           'evidence is an ____________.', None, 'absence',
           'Paragraph 5, concerning the nine unmeasured functions.'),
          ('Where two measures are kept, the useful output is the '
           '____________ between them.', None, 'gap',
           'Paragraph 9, a direct estimate of the distortion.')])],
   listen=[
    dict(heading='A lecture on measurement and incentives', part='Part 4',
         task='A lecture on why measures degrade', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'A measure used for control stops being a measure of '
           'anything. That is Goodhart, stated about money supply, and it '
           'has been rediscovered independently in education, policing, '
           'medicine and software. The rediscovery rate tells you something: '
           'the result is easy and it is invisible from inside.'),
          ('Lecturer', 'The mechanism is not cheating, although cheating '
           'happens. It is that a correlation measured with no pressure on '
           'it is a fact about a world where nobody was pushing. Exam '
           'results track learning when nobody optimises for exam results. '
           'Push, and the world the correlation came from no longer '
           'exists.'),
          ('Lecturer', 'Here is the consequence people miss, and it is '
           'genuinely counter-intuitive. Degradation does not mean you '
           'picked the wrong measure. The best proxy available degrades too, '
           'sometimes faster, because a good proxy attracts more pressure. '
           'There is no ungameable measure and a great deal of effort has '
           'gone into looking for one.'),
          ('Lecturer', 'What differs is how far it can go, and that turns '
           'on one question. Is the measure a component of the outcome, or '
           'a correlate? Time to treatment is a component of good care. '
           'Push on it and you distort practice; you cannot fully detach '
           'the number from the thing. Completing a visit is not a '
           'component of a fault being fixed. Those two can separate '
           'entirely, and in housing repairs they have.'),
          ('Lecturer', 'Second structural question: does the measure cover '
           'the whole job? One measured function, nine unmeasured, and '
           'effort moves. The decline in the nine shows up nowhere, which '
           'makes it the most expensive failure in this literature and the '
           'hardest to evidence, because the evidence is an absence.'),
          ('Lecturer', 'Three families of response. Multiply the measures: '
           'fails, because twelve measures give you twelve distortions plus '
           'a reporting burden that eats the work. Rotate which one is '
           'enforced: works on paper, dies politically, because nobody can '
           'be held to account for a target that might not apply this '
           'year.'),
          ('Lecturer', 'Third, and this is the one the evidence supports. '
           'Two measures. One for control, distortions accepted. One for '
           'truth, assessed independently, attached to no consequence at '
           'all. The second one stays honest exactly because nobody has a '
           'reason to move it, and the moment you attach a consequence you '
           'have destroyed it.'),
          ('Lecturer', 'And the output you actually want is neither '
           'measure. It is the gap. A widening gap is a direct estimate of '
           'how much distortion your control measure is generating, and '
           'there is no other way to get that number. Services that track '
           'it tell me it settles internal arguments faster than any '
           'inspection.'),
          ('Lecturer', 'Three questions for any proposed measure, then. '
           'Component or correlate? Whole job or one part? And is there a '
           'second measure attached to nothing? Fail all three and your '
           'measure will produce precisely the figures it was designed to '
           'produce and no information whatever.')],
         items=[
          ('The rediscovery rate tells the lecturer that the result is',
           ['difficult', 'easy and invisible from inside', 'contested',
            'recent'], 1,
           'It has been found independently in four fields.'),
          ('The mechanism is primarily',
           ['cheating', 'a correlation measured without pressure on it',
            'poor data', 'weak management'], 1,
           'Pushing destroys the world the correlation came from.'),
          ('Degradation of a measure shows',
           ['the wrong measure was chosen', 'nothing about whether the '
            'measure was well chosen', 'poor enforcement',
            'fraud'], 1,
           'The best available proxy degrades too, sometimes faster.'),
          ('Multiplying measures fails because',
           ['they conflict', 'twelve measures give twelve distortions and '
            'a reporting burden', 'they cost too much',
            'staff resist'], 1,
           'A burden that consumes the activity being measured.'),
          ('The second measure stays honest because',
           ['it is better designed', 'nobody has a reason to move it',
            'it is secret', 'it is audited'], 1,
           'And attaching a consequence would destroy it.'),
          ('The output he says you actually want is',
           ['the control measure', 'the truth measure',
            'the gap between them', 'the trend'], 2,
           'A direct estimate of the distortion being generated.')])],
   speak=dict(
    part='Part 3', focus='Judging institutions',
    intro=('Five or six sentences. Try once to explain why a good measure '
           'degrades as fast as a bad one.'),
    qs=['How should we judge whether an institution is working?',
        'Is it possible to design a rule people cannot work around?',
        'Should inspectors visit, or should figures be enough?',
        'Who should set the standards?'],
    shape=[('answer', 'With two measures, and only one of them carrying '
            'consequences.'),
           ('support', 'Any measure people are judged on stops reporting '
            'what it reported before.'),
           ('follow-up', 'That happens to good measures as well as bad '
            'ones.'),
           ('support', 'So you keep a second one that nobody is paid to '
            'hit.'),
           ('follow-up', 'And the useful number is the gap between them, '
            'which you cannot get any other way.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='The premise test on the side you agree with',
         prompt=('Can public services be improved by measuring them? '
                 'Brainstorm ten, run the six tests, and then run the '
                 'premise test on the position you already hold rather than '
                 'on the one you oppose. Twelve minutes.'),
         plan=('Measurement improves public services by making variation '
               'visible and degrades them by redirecting effort, and since '
               'both effects are produced by the same mechanism the useful '
               'question is not whether to measure but what to measure '
               'alongside',
               [('The case for measuring rests on a premise about what '
                 'happens to a visible distribution, which holds only where '
                 'somebody acts on it',
                 ['before the four-hour standard the worst department in a '
                  'region was invisible to everybody including itself',
                  'improvement followed in services where the comparison '
                  'was acted on and not elsewhere']),
                ('The case against rests on a premise about alternatives '
                 'that is almost never stated',
                 ['the alternative to measurement is unexamined judgement, '
                  'not judgement',
                  'the period before targets was not a golden age and the '
                  'figures from it do not exist to check'])]),
         notes=[
          'The instruction is deliberate: run the test on your own side. '
          'The premise under a position you hold is the one you have never '
          'articulated, because you have never needed to defend it, and it '
          'is therefore the one an examiner finds first.',
          'Here the writer’s own premise — that a visible distribution '
          'gets acted on — survives in narrowed form, which is the usual '
          'result and a good one. The narrowing is what gives the thesis '
          'its final clause.',
          'Both premises concern the same thing from opposite sides: what '
          'the alternative actually is. That is the shared premise unit 52 '
          'taught you to look for, and finding it here is what lets the '
          'thesis refuse the question as posed.'],
         criterion=[('Running the premise test on your own position',
                     'Task Response'),
                    ('A premise that survives in narrowed form',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this in cycle 5.',
         lines=12)],
   gram=dict(
    point='Metadiscourse and the shape of an argument',
    explain=('At band 7.5 a reader is told where they are in an argument '
             'without the signposting becoming mechanical. These patterns '
             'do the work that "firstly, secondly, finally" does badly.'),
    examples=['A measure used for control stops being a measure of '
              'anything.',
              'The familiar objection is correct and insufficiently '
              'specific.',
              'The stronger objection is different and is rarely the one '
              'made.',
              'None of this reaches the conclusion usually drawn from '
              'it.'],
    task='Rewrite each signpost so that it carries content as well as '
         'position.',
    items=[('Firstly, targets make things comparable.',
            'The first advantage is comparability, which is worth more than '
            'its defenders usually claim.'),
           ('Secondly, there are problems.',
            'The familiar objection is that targets are gamed, and it is '
            'correct and insufficiently specific.'),
           ('However, there is another problem.',
            'The stronger objection is different and is rarely the one '
            'made.'),
           ('In conclusion, I think measurement is good.',
            'My position is that the argument is conducted against the '
            'wrong alternative.'),
           ('This does not mean targets are bad.',
            'None of this reaches the conclusion most frequently drawn from '
            'it.')]),
   vocab=[('Goodhart', 'the rule that a measure under control degrades'),
          ('substitute measure', 'a number standing in for what is '
           'actually wanted'),
          ('distortion', 'behaviour changed by the act of measuring'),
          ('degrade', 'to lose the meaning a measure once carried'),
          ('reporting burden', 'the work of producing the figures'),
          ('measure rotation', 'enforcing different measures at different '
           'times'),
          ('tick-box', 'compliance that satisfies a form and nothing '
           'else'),
          ('inspection', 'external assessment by visit rather than '
           'figures')],
   expr=[('A measure used for control stops being a measure of anything',
          'the cycle’s governing sentence'),
         ('the best available proxy degrades too, sometimes faster',
          'blocks the search for an ungameable measure'),
         ('one for control and one for truth',
          'names the two-measure design in five words'),
         ('the evidence for it is an absence',
          'explains why a failure stays invisible')],
   trans=['consequently', 'which in turn', 'as a result',
          'none of this reaches'],
  ),

  dict(
   sub='Whether the alternative is better',
   step=5,
   read=[
    dict(heading='Judgement, discretion and what they produced',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'Arguments against measurement in public services invariably '
          'terminate by invoking professional judgement, and scarcely ever '
          'examine what professional judgement generated during the extended '
          'period in which it operated without measurement. That period lies '
          'within living memory in most countries and its records, where '
          'they survive, are unflattering in a specific manner that merits '
          'delineation rather than assertion. The records are fragmentary '
          'precisely because nobody was obliged to maintain them, which is '
          'itself a component of the finding and is frequently advanced as a '
          'reason for discounting it.',
          'The central finding is variation. Where researchers have '
          'reconstructed outcomes for services operating on discretion '
          'alone, the spread between practitioners doing nominally the same '
          'job is consistently larger than anybody expected, including the '
          'practitioners. Studies of sentencing, of surgical outcomes and of '
          'benefit decisions in the pre-measurement era all report the same '
          'thing: the identity of the individual handling an instance '
          'predicted the outcome better than the features of the case. That '
          'sentence merits reading twice, because it describes a system in '
          'which the thing determining what occurred to a person was which '
          'door they came through.',
          'The significant feature of this variation is its '
          'invisibility from inside: a practitioner observes their own '
          'cases and a handful of colleagues\u2019, and possesses no access '
          'to the distribution. Somebody at the tenth percentile and '
          'somebody at the ninetieth each experience themselves as '
          'exercising careful judgement, and neither possesses any '
          'mechanism for discovering otherwise, which accounts for the '
          'hostility the finding provoked on arrival.',
          'This furnishes the pro-measurement case with its strongest '
          'formulation, which is not the formulation ordinarily advanced. '
          'The argument is not that measurement improves performance; it is '
          'that measurement renders a distribution visible, and that a '
          'visible distribution constitutes the precondition for everything '
          'else. The improvement is generated by what individuals '
          'subsequently do with the comparison, and where nobody acts upon '
          'it no improvement materialises, which the evidence equally '
          'demonstrates. Formulating the case thus concedes more than its '
          'defenders ordinarily concede and is considerably harder to '
          'answer.',
          'The case for discretion survives this and requires restatement '
          'more careful than its advocates ordinarily trouble to supply. It '
          'holds that certain cases are genuinely unlike others in respects '
          'no measure captures, that handling them competently requires '
          'departing from what the measure rewards, and that an apparatus '
          'punishing departure forfeits precisely the cases in which '
          'expertise was performing most of the work.',
          'That argument is correct and constitutes an argument about the '
          'consequences attached to a measure rather than about measurement '
          'as such. A measure published and not enforced generates the '
          'visibility without the punishment, and the two-measure design '
          'delineated in the previous cycle is in effect an attempt to '
          'secure both, which accounts for its perpetual reinvention by '
          'individuals who have never consulted the literature. Reinvention '
          'of this variety is reasonable evidence that a design responds to '
          'something genuine in the situation rather than to a fashion in '
          'the scholarship.',
          'There is a further consideration that neither camp raises, '
          'concerning who the invisibility of variation protects. A system '
          'in which outcomes depend heavily on which official a person '
          'happens to reach is one in which the articulate and the '
          'persistent do better, because they are more likely to get past '
          'the first official if the first is unhelpful. Variation is not '
          'neutral between claimants, and discretion’s defenders are '
          'ordinarily arguing from the professional’s side of the counter.',
          'Against that, measurement is not neutral either, and its '
          'distributional effects run the other way in a manner that is '
          'equally underdiscussed. Targets favour the cases that can be '
          'resolved quickly, and the cases that cannot are '
          'disproportionately those of individuals with complicated lives. '
          'Both systems redistribute attention; they redistribute it towards '
          'different people, and comparing them requires saying which '
          'redistribution is worse. That is a question about values and it '
          'has a factual component, since who is disadvantaged by each '
          'system is measurable and has in several cases been measured.',
          'That comparison is the honest shape of this argument and scarcely '
          'anybody conducts it. The usual debate consists of one side '
          'listing the failures of measurement and the other listing the '
          'failures of discretion, with both lists accurate and neither side '
          'stating what their preferred system does to the people it serves '
          'worst.',
          'The conclusion available from the evidence is narrower than '
          'either camp desires and is genuinely serviceable. Measurement is '
          'preferable where the work is reasonably uniform, where the '
          'measure constitutes a component of the outcome, and where '
          'somebody will act upon the comparison. Discretion is preferable '
          'where cases are genuinely heterogeneous and where the '
          'practitioner bears some portion of the cost of error. Most '
          'services contain both varieties of work and are organised as '
          'though they contained one.',
          'The practical implication is to stop arguing about the service as '
          'a whole and start separating the work inside it. The uniform part '
          'of a caseload can be measured without much loss; the '
          'heterogeneous part cannot be measured without large loss; and '
          'almost every service that has attempted this separation reports '
          'that the two parts were easier to distinguish than the argument '
          'about them had suggested. The distinction is ordinarily obvious '
          'to the people doing the work and invisible in the published '
          'structure of the organisation, which is a description of numerous problems in public administration and not only this one.'],
         items=[
          ('Which paragraph reports that variation was invisible from '
           'inside?', ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'A practitioner has no access to the distribution.'),
          ('Which paragraph says the case for discretion is about '
           'consequences rather than measurement?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 1,
           'A measure published and not enforced gives visibility without '
           'punishment.'),
          ('Which paragraph says both systems redistribute attention?',
           ['Paragraph 7', 'Paragraph 8', 'Paragraph 9',
            'Paragraph 10'], 1,
           'Towards different people, which comparing them requires '
           'facing.'),
          (
           'The writer believes measurement improves performance '
           'directly.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4: it makes a distribution visible, and '
           'improvement comes from acting on it.',
           {0: 'Yes would need a direct effect; paragraph 4 makes it '
               'visibility plus action.', 2: 'Not Given is wrong because the mechanism is given.'}),
          (
           'The writer believes most services contain only one kind of '
           'work.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 10 says most contain both and are organised as '
           'though they did not.',
           {0: 'Yes would need one kind; paragraph 10 says most '
               'contain both.', 2: 'Not Given is wrong because the mixture is described.'}),
          ('In pre-measurement studies, the ____________ of the individual '
           'handling a case predicted the outcome better than the case '
           'did.', None, 'identity',
           'Paragraph 2, across sentencing, surgery and benefit '
           'decisions.'),
          ('Under discretion, the articulate and the ____________ do '
           'better.', None, 'persistent',
           'Paragraph 7, being likelier to get past an unhelpful first '
           'official.'),
          ('Targets favour cases that can be resolved ____________.',
           None, 'quickly',
           'Paragraph 8, disadvantaging people with complicated lives.')])],
   listen=[
    dict(heading='An administrator and a researcher disagree', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Ms Winterbourne-Adeyemi runs a benefits office. Dr '
           'Castellanos-Nkemdirim researches public administration.'),
          ('Winterbourne-Adeyemi', 'I will give away my own strongest '
           'opponent’s point before she makes it. My office hits its '
           'decision-speed target, and about sixty per cent of the refusals '
           'we make are overturned on appeal eight months later. I know '
           'that number. I have known it for three years.'),
          ('Castellanos-Nkemdirim', 'Then I will match it. My field spends '
           'its time documenting what measurement does and almost none '
           'documenting what preceded it, and what preceded it was variation '
           'so large that the identity of the official predicted the outcome '
           'better than the facts of the case did.'),
          ('Winterbourne-Adeyemi', 'I remember it. I was an official '
           'then.'),
          ('Castellanos-Nkemdirim', 'And did you know where you sat in the '
           'distribution?'),
          ('Winterbourne-Adeyemi', 'I did not, and I assumed I was about '
           'average, and when the figures finally came I was at the '
           'seventieth percentile for refusals. I had thought of myself as '
           'generous. That is the single most useful thing measurement has '
           'ever done to me.'),
          ('Castellanos-Nkemdirim', 'And how long did it take you to '
           'believe the figure rather than argue with it?'),
          ('Winterbourne-Adeyemi', 'About four months, and I spent two of '
           'them looking for an error in the case-mix adjustment. There '
           'was not one. I tell new managers that story because the '
           'looking is the normal response and it is worth getting it over '
           'with quickly.'),
          ('Castellanos-Nkemdirim', 'So where do we disagree?'),
          ('Winterbourne-Adeyemi', 'On what follows. You want the measure '
           'published and not enforced. I have to manage four hundred staff '
           'and a published measure with no consequence attached is, in my '
           'building, not a measure. It is a newsletter.'),
          ('Castellanos-Nkemdirim', 'That is the objection I find hardest '
           'and I do not have a clean answer. What I would say is that your '
           'enforced measure is currently buying you a sixty per cent '
           'overturn rate, so the consequence is attached to the wrong '
           'thing rather than usefully attached.'),
          ('Winterbourne-Adeyemi', 'Attach it to the overturn rate, then.'),
          ('Castellanos-Nkemdirim', 'Then you will refuse fewer difficult '
           'cases and take longer over them, which is what you want, and you '
           'will also start withdrawing cases before decision so they never '
           'enter the statistic. I can tell you that because three other '
           'offices did it.'),
          ('Winterbourne-Adeyemi', 'So the answer is to attach it to both '
           'and watch the withdrawal rate.'),
          ('Castellanos-Nkemdirim', 'Which is three measures, and in about '
           'four years somebody will write a paper about what the third one '
           'distorted. I am not being defeatist. I am saying this is '
           'maintenance rather than design, and my field keeps selling it as '
           'design.')],
         items=[
          ('Winterbourne-Adeyemi opens by stating that',
           ['her targets are unfair', 'sixty per cent of her refusals are '
            'overturned', 'her staff are overworked', 'the measure is '
            'new'], 1,
           'A figure she says she has known for three years.'),
          ('Castellanos-Nkemdirim concedes that her field under-documents',
           ['costs', 'what preceded measurement', 'staff views',
            'appeals'], 1,
           'When variation was larger than anybody expected.'),
          ('When the figures arrived, Winterbourne-Adeyemi found she was',
           ['at the average', 'at the seventieth percentile for '
            'refusals', 'the most generous', 'the strictest'], 1,
           'Having thought of herself as generous.'),
          ('Her objection to a published, unenforced measure is that it '
           'is', ['inaccurate', 'in her building, a newsletter',
            'too expensive', 'confidential'], 1,
           'With four hundred staff to manage.'),
          ('If the consequence is attached to the overturn rate, the '
           'researcher predicts offices will',
           ['refuse more', 'withdraw cases before decision',
            'appeal less', 'hire more staff'], 1,
           'Which three other offices have already done.'),
          ('He describes the resulting work as',
           ['design', 'maintenance', 'research', 'inspection'], 1,
           'And says his field keeps selling it as the other.')])],
   speak=dict(
    part='Part 3', focus='Trust and accountability',
    intro=('The hardest turn in the unit. Try once to say that two '
           'opposite criticisms are both true.'),
    qs=['Should professionals be trusted or checked?',
        'What is lost when everything is recorded?',
        'Who is protected by not measuring?',
        'How much accountability is too much?'],
    shape=[('answer', 'Checked on the uniform work and trusted on the '
            'rest, which almost nobody separates.'),
           ('support', 'Measurement distorts: people work to the line.'),
           ('follow-up', 'Discretion conceals: variation was larger than '
            'anybody believed.'),
           ('support', 'Both of those are true at the same time.'),
           ('follow-up', 'So I would ask which people each system treats '
            'worst, and that question is almost never asked.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Trusted or measured?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some say public services should be trusted rather '
                 'than measured. Discuss both views and give your own '
                 'opinion. Write at least 250 words.'),
         model=[
          'Both positions in this argument are supported by accurate '
          'evidence about the other, and the debate persists because each '
          'side compares its own system at its best with the other at its '
          'worst. Measurement distorts and discretion conceals, and both '
          'are true at once.',
          'The case for trust rests on something measurement genuinely '
          'cannot handle. Some cases are unlike others in ways no measure '
          'captures, handling them well requires departing from what the '
          'measure rewards, and a system that punishes departure loses '
          'precisely the cases where expertise was doing the most work. A '
          'benefits office judged on decision speed refuses difficult '
          'claims because a refusal takes four minutes and an award '
          'requires evidence, and the sixty per cent of refusals later '
          'overturned on appeal arrive eight months afterwards and against '
          'a different budget.',
          'The case for measurement is usually put badly by its own '
          'supporters, who claim it improves performance. What it reliably '
          'does is make a distribution visible, and the evidence for why '
          'that matters is uncomfortable for the other side. Where '
          'researchers have reconstructed outcomes under discretion alone, '
          'the identity of the official handling a case predicted the '
          'result better than the facts of the case — and the variation '
          'was invisible from inside, since a practitioner sees their own '
          'work and no distribution. Someone at the seventieth percentile '
          'for refusals experiences themselves as generous.',
          'What neither side says is that both systems redistribute '
          'attention, in opposite directions. Discretion favours the '
          'articulate and the persistent, who get past an unhelpful first '
          'official. Targets favour the cases that resolve quickly, which '
          'disadvantages people with complicated lives. Comparing the two '
          'honestly means saying which redistribution one is prepared to '
          'accept, and that question is almost never put.',
          'My own view is that the argument is about the wrong unit. Most '
          'services contain uniform work and heterogeneous work and are '
          'organised as though they contained one kind. Measure the uniform '
          'part, where the measure is a component of the outcome and the '
          'loss is small; leave the heterogeneous part to judgement, where '
          'measuring it would cost more than it returns; and publish a '
          'second, independently assessed measure over the whole, attached '
          'to no consequence, so that the distortion in the first can be '
          'seen. That is maintenance rather than a solution, and anyone who '
          'offers a solution here has not understood the problem.'],
         notes=[
          'The opening diagnoses why the dispute persists — each side '
          'comparing its best against the other’s worst — which earns the '
          'right to take a third position later. Structure 3 needs the two '
          'views to be genuinely held before the third arrives.',
          'Paragraph 4 is the one almost nobody writes: both systems have '
          'distributional effects, running opposite ways. Finding what '
          'neither side says is the highest-value move available in a '
          'discuss-both-views essay.',
          'The conclusion refuses to call itself a solution. "That is '
          'maintenance rather than a solution" is a sentence a band 9 '
          'examiner notices, because it is the writer applying their own '
          'scepticism to their own recommendation.'],
         criterion=[('Diagnosing why the dispute persists',
                     'Task Response'),
                    ('Finding what neither side says',
                     'Task Response'),
                    ('Applying your scepticism to your own recommendation',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Comparing two imperfect systems honestly',
    explain=('Comparing two flawed options requires holding both failures '
             'at once without the sentence collapsing into "both sides '
             'have a point". These patterns keep the comparison '
             'specific.'),
    examples=['Measurement distorts and discretion conceals, and both are '
              'true at once.',
              'Each side compares its own system at its best with the '
              'other at its worst.',
              'Both redistribute attention; they redistribute it towards '
              'different people.',
              'The question is which redistribution one is prepared to '
              'accept.'],
    task='Rewrite each comparison so that both failures stay specific.',
    items=[('Both systems have problems.',
            'Measurement moves effort towards the measured; discretion '
            'moves it towards whoever is most persistent.'),
           ('It is a matter of opinion.',
            'The choice turns on which group each system serves worst, '
            'which is a factual question that is rarely asked.'),
           ('Neither side is right.',
            'Each side describes the other accurately and its own system at '
            'its best.'),
           ('Targets are unfair to some people.',
            'Targets favour cases that resolve quickly, which '
            'disadvantages claimants with complicated circumstances.'),
           ('Discretion lets people down too.',
            'Under discretion the identity of the official predicted the '
            'outcome better than the facts of the case.')]),
   vocab=[('discretion', 'the freedom to decide case by case'),
          ('answerability', 'having to account for what you produce'),
          ('variation', 'the spread between people doing the same job'),
          ('heterogeneous', 'made up of genuinely unlike cases'),
          ('uniform', 'alike enough to be handled the same way'),
          ('percentile', 'a position within a distribution'),
          ('professional judgement', 'a decision made on expertise rather '
           'than rule'),
          ('withdrawal rate', 'cases removed before a decision is '
           'recorded')],
   expr=[('Measurement distorts and discretion conceals, and both are true '
          'at once', 'the cycle’s governing sentence'),
         ('each side compares its own system at its best with the other at '
          'its worst', 'diagnoses a stuck debate'),
         ('variation is not neutral between claimants',
          'adds a distributional point to a procedural argument'),
         ('this is maintenance rather than design',
          'refuses to call a remedy a solution')],
   trans=['admittedly', 'and yet', 'on balance', 'what neither side says'],
  ),
 ],
 technique=dict(
  title='Two charts that disagree, and which to believe',
  body=('A Task 1 question that gives you two visuals which contradict '
        'each other is testing one thing, and it is not arithmetic. The '
        'failing answer picks a side: it describes the chart that supports '
        'a tidy story and mentions the other in a final sentence beginning '
        '"however". The answer that scores reports both as accurate, '
        'locates the disagreement precisely, and quantifies it. There is '
        'almost always a paragraph available that nobody writes, which is '
        'the one that reads each category across both charts rather than '
        'each chart across all categories — and that paragraph is where '
        'the divergence becomes a number. Resist explaining it. Why two '
        'measures of one service disagree is not on the page, however '
        'confident you are, and a sentence of explanation costs more under '
        'Task Achievement than it gains anywhere.'),
  panel=[('Both are accurate',
          'Two audited sources disagreeing is the question, not an error '
          'to resolve.'),
         ('Overall says they disagree',
          '"All three improved on target; one improved on outcome" is one '
          'sentence and the whole finding.'),
         ('Read across, not just down',
          'A paragraph per chart, then a paragraph per category across '
          'both. The last one carries the marks.'),
         ('Quantify the gap',
          'Twenty-seven up and five down is a gap of thirty-two. Name the '
          'widest and the narrowest.')],
  task='Write the cycle 3 answer in 150 words with a fourth paragraph '
       'that reads each service across both charts.',
  qs=['What does your Overall statement say about the two charts?',
      'Which service shows the widest divergence, and by how much?',
      'Which shows the narrowest?',
      'Did you explain the divergence anywhere, and should you have?',
      'How many figures are in your fourth paragraph?']),
 outlining=dict(
  title='The premise test on an argument you agree with',
  body=('Every application of the premise test so far has been aimed '
        'outwards, at the position you were going to argue against. This '
        'unit turns it round, and the instruction is uncomfortable on '
        'purpose: run it on the side you already hold. The premise under a '
        'position you agree with is the one you have never had to '
        'articulate, because nobody in your hearing has ever asked you to '
        'defend it, and that is exactly why an examiner finds it first. '
        'The usual result is not that your position collapses; it is that '
        'it survives in a narrower form, with a condition attached that '
        'you had been assuming. That condition is almost always the most '
        'interesting sentence in the finished essay.'),
  frame=('Measurement improves public services by making variation visible '
         'and degrades them by redirecting effort, and since both effects '
         'are produced by the same mechanism the useful question is not '
         'whether to measure but what to measure alongside',
         [('The case for measuring rests on a premise about what happens '
           'to a visible distribution, which holds only where somebody '
           'acts on it',
           ['before the four-hour standard the worst department in a '
            'region was invisible to everybody including itself',
            'improvement followed where the comparison was acted on and '
            'not elsewhere']),
          ('The case against rests on a premise about alternatives that is '
           'almost never stated',
           ['the alternative to measurement is unexamined judgement, not '
            'judgement',
            'the period before targets was not a golden age and its '
            'figures do not exist to check'])]),
  task='Take the position you actually hold on the cycle 4 prompt, write '
       'the premise under it, and attack it as hard as you would attack '
       'somebody else’s.',
  qs=['Could you write the premise under your own position in one '
      'sentence?',
      'When did you last hear that premise challenged?',
      'What condition does it need in order to hold?',
      'Does your position survive with the condition attached?',
      'Is the condition now the most interesting thing you have?'],
  answers=['harder than it sounds, and the difficulty is the point',
           'usually never, which is why it is the weak point',
           'almost always one about scope or about who acts',
           'nearly always, in narrower form',
           'frequently, and it should go in the thesis']),
 candos=['I can read a concerns policy for where protection begins',
         'I can report two charts that disagree without choosing between '
         'them',
         'I can explain why a measure degrades once it is used for '
         'control',
         'I can run the premise test on a position I hold',
         'I can compare two imperfect systems without saying both have a '
         'point'],
 tip=('When two sources disagree, the sentence that scores is not "however, '
      'the second chart shows". It is "the two give opposite accounts of '
      'the same period", followed by the size of the gap.'),
)
