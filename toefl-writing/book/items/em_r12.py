# -*- coding: utf-8 -*-
"""Email practice: EM 062, 066, 071, 078, 084, 091."""
from _kit import em


def P(a, b, c):
    return [('P1', 'Decode the task', a),
            ('P2', 'Prime the vocabulary', b),
            ('P3', 'Write it before you read it', c)]


def F(a, b):
    return [('F1', 'Take the answer apart', a),
            ('F2', 'Harvest the language', b),
            ('F3', 'Why this is a 5 and that is a 3',
             ['Name the three things that hold the version below at band 3.'])]


ITEMS = [

em('EM 040', 'Complaint and resolution',
   ('complain about the process rather than the outcome',
    'passive for institutional agents', 'remit, grounds, upheld, procedural',
    'complaining where the decision itself cannot be appealed'),
   'You applied for a hardship grant and were refused. You accept the '
   'decision may be correct, but you were never told what evidence was '
   'considered, and the refusal arrived six weeks after the deadline it '
   'promised.',
   ['Say what went wrong.', 'Separate the decision from how it was made.',
    'Ask for something that can actually be given.'],
   'studentfunding@northgate.ac.uk', 'Hardship application 44021 — process, not outcome',
   P(['a.  Why is complaining about the refusal itself a weaker move than '
      'complaining about the process?',
      'b.  What can the office realistically give you here?'],
     ['a.  What does it mean for a complaint to be upheld, and what are '
      'grounds?',
      'b.  Distinguish a substantive from a procedural objection.'],
     ['Open in one sentence that concedes the decision and names the real '
      'complaint.']),
   ['Dear Student Funding Team,',
    'I am not writing to contest the refusal of my hardship application, '
    'which may well be right. I am writing about how it was handled.',
    'Two things went wrong. The letter I received on 2 May states only '
    'that the application "did not meet the threshold", without saying '
    'which threshold or what evidence was taken into account — so I '
    'cannot tell whether my bank statements were received at all. And the '
    'decision was issued six weeks after the fifteen working days the '
    'guidance promises, during which I was told twice that it was still '
    'with the panel.',
    'What I would like is the reasons in a form I can read: which criterion '
    'was not met, and whether the documents I sent on 14 March were before '
    'the panel. If they were not, I would ask for the application to be '
    'reconsidered on the full file.',
    'I understand the volume the office is dealing with and I am not asking '
    'for a different answer — only for the one I was given to be '
    'explained.',
    'Yours sincerely,', 'Idris Kamara — 2201477'],
   F(['a.  The first paragraph gives away the right to contest the '
      'decision. What does that buy?',
      'b.  The request has two parts, and the second is conditional. Why '
      'structure it that way?'],
     ['a.  "the decision was issued six weeks after the fifteen working '
      'days the guidance promises" — why the passive?',
      'b.  "only for the one I was given to be explained" — why end '
      'here?']),
   ['Dear Sir/Madam, I am writing to complain about the refusal of my '
    'hardship application which I think is extremely unfair. I am in a very '
    'difficult financial situation and I do not understand how the panel '
    'could reject me when other students I know with similar circumstances '
    'received the grant. Also the decision took much longer than it was '
    'supposed to which caused me a lot of stress and anxiety. I would like '
    'you to reconsider my application urgently as I am struggling to pay my '
    'rent.', 'Idris'],
   [('P1', [['a.  Because the decision is a judgement the office is '
             'entitled to make and you have no standing to overturn, while '
             'the process has written rules that were demonstrably broken. '
             'One is arguable; the other is checkable.'],
            ['b.  Reasons, confirmation of what was on the file, and '
             'reconsideration if documents were missing. It cannot give you '
             'the grant, so asking for it wastes the email.']]),
    ('P2', [['a.  A complaint is upheld when the body accepts it was '
             'justified; grounds are the specific basis on which it is '
             'brought.'],
            ['b.  A substantive objection says the decision was wrong; a '
             'procedural one says it was reached improperly. The second is '
             'available here and the first is not.']]),
    ('P3', [['Model: "I am not contesting the refusal, which may well be '
             'right — I am writing about how it was handled."']]),
    ('F1', [['a.  Credibility and a narrower target. Once the writer is '
             'visibly not trying to overturn the outcome, the office has no '
             'reason to defend the outcome, and the procedural failures '
             'stand alone with nothing to deflect them.'],
            ['b.  Because the reconsideration is only justified if the '
             'documents were missing, and asking for it unconditionally '
             'would look like contesting the decision after all. The '
             'condition makes the request follow from the facts rather than '
             'from the writer’s preference.']]),
    ('F2', [['a.  Because the agent is the institution and naming an '
             'individual would turn a procedural complaint into an '
             'accusation. The passive keeps the failure attached to the '
             'process, which is where the writer wants it.'],
            ['b.  It restates the limit of the request in the last line, so '
             'the reader finishes the email knowing the writer wants an '
             'explanation rather than a reversal. That is what makes a '
             'reply cheap to send.']]),
    ('F3', [['1.  It contests the decision ("extremely unfair") and then '
             'compares itself to other students, which the office cannot '
             'discuss and which invites a flat refusal.'],
            ['2.  The delay is mentioned only as a cause of stress, not as '
             'a breach of the fifteen-day guidance, so the one checkable '
             'failure is wasted. The second bullet fails.'],
            ['3.  "Reconsider my application urgently" asks for the one '
             'thing the office has already refused, with no new basis, so '
             'the third bullet fails too.']])]),

em('EM 059', 'Negotiation and scheduling',
   ('offer the other side the easier half of the problem',
    'would rather / sooner than', 'clash, cover, slot, swap',
    'negotiating a swap with a peer'),
   'You and a classmate are both rostered to run lab demonstrations. Your '
   'Thursday slot clashes with a job interview. She has Tuesday, which '
   'suits you, and you know she dislikes Tuesdays.',
   ['Ask for the swap.', 'Make it easy to say yes.',
    'Say what happens if she cannot.'],
   'p.ferreira@northgate.ac.uk', 'Swap Thursday for Tuesday?',
   P(['a.  You know she dislikes Tuesdays. Should you mention it?',
      'b.  What makes a swap request easy to refuse?'],
     ['a.  What is cover, in a rota sense, and what is a slot?',
      'b.  What is a clash, and why is it stronger than "I am busy"?'],
     ['Ask in one sentence that already removes her main objection.']),
   ['Hi Paula,',
    'Any chance you would swap your Tuesday 2–4 for my Thursday '
    '10–12, just for the week of the 18th? I have an interview on the '
    'Thursday that I cannot move.',
    'I know Tuesday afternoons are the ones you would rather not have, so '
    'I am not pretending this is a favour to you. Two things that might '
    'make it less bad: I will do the set-up for both sessions that week, '
    'which is the hour nobody wants, and I will take your Tuesday in week '
    '11 as well so you get a clear one back.',
    'If it does not work, say so and I will ask Sam — he has Friday '
    'and no teaching that week, so there is a second option and you are '
    'not my only hope.',
    'Let me know either way by Thursday if you can, since cover has to be '
    'logged a week ahead.',
    'Thanks,', 'Marco'],
   F(['a.  The writer names her dislike of Tuesdays rather than hiding it. '
      'Why is that the stronger move?',
      'b.  "you are not my only hope" — what is this sentence '
      'protecting?'],
     ['a.  "the ones you would rather not have" — why this rather than '
      '"the ones you hate"?',
      'b.  "since cover has to be logged a week ahead" — why justify '
      'the deadline?']),
   ['Hi Paula, I hope you are well. I was wondering if you would be able to '
    'swap slots with me for the week of the 18th? I have something '
    'important on the Thursday and I really need that day free. It would '
    'help me enormously and I would be very grateful. I know it is short '
    'notice but I am sure you understand that sometimes these things come '
    'up unexpectedly. Please let me know as soon as possible.', 'Marco'],
   [('P1', [['a.  Yes. She will think it whether you say it or not, and '
             'pretending the swap is neutral insults her. Naming the cost '
             'is what licenses the compensation that follows.'],
            ['b.  One with no compensation, no alternative and an implied '
             'obligation. If refusing means leaving you stranded, she will '
             'resent agreeing — which is worse for you than a no.']]),
    ('P2', [['a.  Cover is someone standing in for a rostered duty; a slot '
             'is the scheduled block itself.'],
            ['b.  A clash is a fixed, verifiable conflict between two '
             'commitments. "Busy" is a preference; a clash is a fact, and '
             'only the second justifies asking someone else to move.']]),
    ('P3', [['Model: "I know Tuesday afternoons are the ones you would '
             'rather not have, so I will do the set-up for both sessions '
             'and give you a clear Tuesday in week 11."']]),
    ('F1', [['a.  Because it shows he has thought about the cost to her '
             'rather than only about his interview, and it pre-empts the '
             'obvious objection. A request that has already conceded the '
             'bad news is harder to refuse than one that pretends there is '
             'none.'],
            ['b.  Her freedom to refuse, and therefore the relationship. '
             'Naming Sam removes the pressure, which is the difference '
             'between a favour and an obligation — and makes a '
             'genuine yes more likely.']]),
    ('F2', [['a.  Because "hate" overstates what she has said and puts '
             'words in her mouth, while the hedged version shows he has '
             'noticed without exaggerating. Overstating someone’s '
             'objection is a way of patronising them.'],
            ['b.  Because an unexplained deadline reads as pressure. The '
             'logging requirement is external to both of them, so it sets '
             'the date without the writer appearing to impose it.']]),
    ('F3', [['1.  "Something important" where a verifiable clash was '
             'available, which makes the request sound like a preference.'],
            ['2.  Nothing is offered in return and the swap is presented as '
             'neutral, so the second bullet fails — and "I am sure you '
             'understand" presumes the agreement.'],
            ['3.  No alternative if she refuses, so the third bullet fails, '
             'and "as soon as possible" gives no date while sounding more '
             'urgent than a stated one.']])]),

em('EM 060', 'Request to an authority',
   ('ask for the smaller version of what you want',
    'reporting verbs with that-clauses', 'precedent, discretion, waiver, concession',
    'requesting an exception to a published rule'),
   'The library allows four-week loans for staff and two for students. You '
   'are a student doing fieldwork abroad for five weeks and cannot renew '
   'online because the books are in the reference collection.',
   ['Explain the problem.', 'Ask for a workable exception.',
    'Show you know what you are asking for.'],
   'circulation.library@northgate.ac.uk', 'Fieldwork loan — request for a five-week arrangement',
   P(['a.  Why is asking for staff borrowing rights the wrong request?',
      'b.  What would make a librarian comfortable granting this?'],
     ['a.  What is discretion, in the administrative sense, and what is a '
      'waiver?',
      'b.  Why do institutions worry about precedent?'],
     ['Ask in one sentence that is narrower than what you actually want.']),
   ['Dear Circulation Team,',
    'I am a second-year geography student doing fieldwork in Cape Verde '
    'from 2 June to 8 July, and I would like to ask about borrowing three '
    'reference-collection titles for that period.',
    'I know the reference collection is not normally lent at all, and I am '
    'not asking for that to change. What I am hoping for is one of two '
    'things: either a five-week loan of the three volumes with whatever '
    'conditions you would attach — a deposit, a shorter list, '
    'collection in person — or, if that is not possible, scans of the '
    'four chapters I actually need, which are about sixty pages in total '
    'and within what copyright allows.',
    'The second option would suit me almost as well, so if it is simpler at '
    'your end please take it.',
    'The three titles are listed below with shelfmarks. My supervisor Dr '
    'Mensah knows about the trip and is happy to confirm the dates.',
    'Thank you for considering it.',
    'Yours sincerely,', 'Lucia Barros — 2203118'],
   F(['a.  Two options are offered and the writer prefers the harder one. '
      'Why mention that the easier one would do?',
      'b.  "with whatever conditions you would attach" — what is this '
      'inviting?'],
     ['a.  "I know the reference collection is not normally lent at all, '
      'and I am not asking for that to change" — what fear is this '
      'addressing?',
      'b.  "within what copyright allows" — why include this?']),
   ['Dear Circulation Team, I am a geography student and I will be doing '
    'fieldwork abroad for five weeks this summer. Unfortunately the loan '
    'period for students is only two weeks which is not long enough, and I '
    'cannot renew the books because they are in the reference collection. '
    'Could you please extend my borrowing rights to four weeks like the '
    'staff have, or ideally five weeks for my trip? This would really help '
    'my research a lot. I hope you can make an exception in my case.',
    'Lucia'],
   [('P1', [['a.  Because borrowing rights are a category, and moving a '
             'student into the staff category is a policy change nobody at '
             'the counter can make. A one-off arrangement for three named '
             'books is a decision they can take this afternoon.'],
            ['b.  A bounded request, conditions they choose, a named '
             'academic who can confirm the facts, and an alternative that '
             'costs them less. Each of those reduces what they are being '
             'asked to risk.']]),
    ('P2', [['a.  Discretion is the latitude an official has within the '
             'rules; a waiver is a formal setting-aside of a requirement.'],
            ['b.  Because a concession granted once becomes the answer to '
             'the next person who asks. That is why "I am not asking for '
             'the policy to change" is worth saying explicitly.']]),
    ('P3', [['Model: "I would like to ask about borrowing three '
             'reference-collection titles for five weeks, or failing that '
             'about scans of four chapters."']]),
    ('F1', [['a.  Because the librarian’s decision depends on cost to '
             'them, not on the writer’s preference. Saying the scans '
             'would nearly do converts a difficult request into an easy '
             'one and makes some form of yes very likely.'],
            ['b.  It hands the shape of the concession to the person who '
             'has to live with it. They know which safeguards make an '
             'exception defensible, and being asked to set them is far '
             'easier than being asked to approve terms somebody else '
             'chose.']]),
    ('F2', [['a.  The fear of precedent. By naming the rule and disclaiming '
             'any attempt to change it, the writer makes this a one-off '
             'rather than the first of a queue.'],
            ['b.  Because it removes the objection the librarian would '
             'otherwise have to raise, and it shows the writer has checked '
             'rather than assumed. Four chapters out of three books is '
             'specific enough to be assessed.']]),
    ('F3', [['1.  It asks for a change of borrowing category — "like '
             'the staff have" — which nobody reading the email can '
             'grant. The second bullet fails.'],
            ['2.  No titles, no shelfmarks, no dates beyond "this summer", '
             'and no supervisor, so there is nothing concrete to approve.'],
            ['3.  No alternative is offered, so a no ends the matter, and '
             '"I hope you can make an exception in my case" asks for '
             'special treatment rather than proposing a workable '
             'arrangement.']])]),

em('EM 067', 'Follow-up and reminder',
   ('remind by supplying what the reader needs to act',
    'present perfect continuous', 'chase, bump, outstanding, action',
    'chasing a third time without reproach'),
   'You have asked twice for a signature on a placement agreement. Without '
   'it you lose the placement on 30 April. The person who must sign has not '
   'replied to either email.',
   ['Chase once more.', 'Make signing take under a minute.',
    'Say what happens if it does not arrive.'],
   'j.whitfield@northgate.ac.uk', 'Placement form — signature needed by 28 April',
   P(['a.  Two emails have gone unanswered. What should change in the '
      'third?',
      'b.  Why state the consequence rather than imply urgency?'],
     ['a.  What does it mean to chase something, and what is an '
      'outstanding action?',
      'b.  What is a bump, and when is the word inappropriate?'],
     ['Write the first two lines so the whole task is visible without '
      'scrolling.']),
   ['Dear Dr Whitfield,',
    'One signature, one page, attached — the placement agreement for '
    'my summer position at Harlow Environmental. If you can sign page 3 and '
    'reply with it attached, that is the whole task.',
    'I have been trying to get this to you since 2 April and I know the '
    'timing is bad with exam boards. The deadline is firm: Harlow withdraw '
    'the offer if the signed agreement is not with them by 30 April, and '
    'the placement office needs two days to countersign, so 28 April is my '
    'real cut-off.',
    'If signing is the problem rather than the time, three alternatives: I '
    'can bring a paper copy to your office at any hour on Monday or '
    'Tuesday; Dr Oyelaran has said she will sign as acting supervisor if '
    'you would rather delegate it; or if you are not able to supervise this '
    'placement at all, tell me today and I will ask the office to '
    'reallocate.',
    'Apologies for the third email.',
    'Best wishes,', 'Tariq Haddad — 2198044'],
   F(['a.  The email opens with "One signature, one page, attached". Why '
      'not with the context?',
      'b.  The third paragraph offers a route in which the reader does not '
      'sign at all. Is that giving up?'],
     ['a.  "I have been trying to get this to you since 2 April" — '
      'what does the present perfect continuous do that "I emailed twice" '
      'would not?',
      'b.  "Apologies for the third email" — who is this apology '
      'actually for?']),
   ['Dear Dr Whitfield, I am writing again regarding the placement '
    'agreement which I have now sent twice, on 2 April and 11 April. I '
    'still have not received your signature and the deadline is at the end '
    'of this month. I understand you are very busy but this placement is '
    'extremely important for me and I am becoming quite worried about it. '
    'Could you please sign the form and send it back to me as soon as '
    'possible? I would be very grateful.', 'Tariq'],
   [('P1', [['a.  The amount of work the reader has to do. Two emails have '
             'established the request; the third should reduce the task to '
             'its smallest form and remove every reason not to act now.'],
            ['b.  Because "urgent" is a word the reader discounts, while a '
             'date on which an offer is withdrawn is a fact they can '
             'check. It also makes the cost visible without blaming '
             'anyone.']]),
    ('P2', [['a.  To chase is to pursue an overdue response; an '
             'outstanding action is a task still awaiting completion.'],
            ['b.  A bump is a short message pushing a thread back to the '
             'top. It is fine among peers and wrong to a senior academic, '
             'where it sounds like prodding.']]),
    ('P3', [['Model: "One signature, one page, attached — if you can '
             'sign page 3 and reply with it attached, that is the whole '
             'task."']]),
    ('F1', [['a.  Because the reader has twice decided this email can wait, '
             'and the deciding factor is how big the task looks in the '
             'first line. Context in the first paragraph makes it look '
             'like reading; the task in the first line makes it look like '
             'thirty seconds.'],
            ['b.  No — it is the one move that guarantees an outcome. '
             'The writer needs a signature or a reallocation, and offering '
             'the second makes silence the only option that costs the '
             'reader something, which is exactly the pressure a third '
             'email needs.']]),
    ('F2', [['a.  It presents the effort as continuing and unresolved '
             'rather than as two completed acts the reader failed to '
             'answer. That keeps the focus on the pending task instead of '
             'on their non-response, which would read as an accusation.'],
            ['b.  The reader. It costs the writer nothing and it lets the '
             'reader act without first having to acknowledge two ignored '
             'emails. Removing that small embarrassment makes replying '
             'easier.']]),
    ('F3', [['1.  "Sent twice, on 2 April and 11 April" and "I still have '
             'not received your signature" put the reader’s failure at '
             'the centre, which makes replying an admission.'],
            ['2.  "The deadline is at the end of this month" is wrong and '
             'vague — the real cut-off is 28 April because of '
             'countersigning. The second bullet is not met and the third '
             'fails entirely.'],
            ['3.  No alternatives, no delegation, no reallocation route, '
             'and "I am becoming quite worried" asks the reader to manage '
             'the writer’s anxiety rather than to sign a page.']])]),

em('EM 068', 'Offer of help',
   ('offer the specific hour rather than the open promise',
    'offers with shall and can', 'capacity, hand over, shadow, step in',
    'offering help without taking over'),
   'A friend on your course has been in hospital for a fortnight and is '
   'behind on a group project where she is the group’s only programmer. '
   'The group is quietly panicking. You can code a little.',
   ['Offer help.', 'Do not imply she has let anyone down.',
    'Make the offer easy to decline or limit.'],
   'a.novak@northgate.ac.uk', 'Project — an offer, not a request',
   P(['a.  What is the risk in an offer of help to someone who is ill?',
      'b.  Why is "let me know if you need anything" not an offer?'],
     ['a.  What does it mean to shadow someone, and to step in?',
      'b.  Distinguish handing over from taking over.'],
     ['Make the offer concrete in one sentence with an hour in it.']),
   ['Hi Anja,',
    'No need to reply to this today or at all — nothing in it needs an '
    'answer.',
    'I have looked at the repository and I could take the data-loading '
    'module off you. It is the self-contained part and I think I can do it '
    'in a weekend without touching anything you have written. If that would '
    'help, say the word and I will start on Saturday; if you would rather '
    'nobody went near it, that is completely fine and I will say nothing '
    'more about it.',
    'The group is not waiting on you, whatever anyone has said. We moved '
    'the integration week to the 12th on Tuesday and it cost us nothing, so '
    'there is slack.',
    'If it is easier, I can also just sit on a call for an hour and have you '
    'tell me what to type — your code, my hands. Some people find that '
    'less annoying than handing a module over.',
    'Get well. The project is genuinely fine.',
    'Dev'],
   F(['a.  "No need to reply to this today or at all" — what does '
      'opening here accomplish?',
      'b.  "your code, my hands" — why offer this version as well?'],
     ['a.  "if you would rather nobody went near it, that is completely '
      'fine" — why spell out the refusal?',
      'b.  "We moved the integration week to the 12th on Tuesday and it '
      'cost us nothing" — why the detail?']),
   ['Hi Anja, I hope you are feeling better! I heard you have been in '
    'hospital, that must be really hard. Do not worry about the project at '
    'all, we are all managing fine and we understand completely. If you '
    'need any help with your part just let me know, I would be happy to '
    'help with the coding if you want. The deadline is getting close so it '
    'would be good to know what you are planning to do. Get well soon!',
    'Dev'],
   [('P1', [['a.  That it arrives as another task — something to '
             'answer, be grateful for, and negotiate — at a moment '
             'when she has no capacity for any of those.'],
            ['b.  Because it transfers the work of specifying, asking and '
             'justifying to the person who is already struggling. A real '
             'offer names the task, the time and the start date so that '
             '"yes" is the only word required.']]),
    ('P2', [['a.  To shadow is to work alongside someone and learn the '
             'task; to step in is to take it over temporarily.'],
            ['b.  Handing over is a transfer she controls; taking over '
             'happens to her. The distinction is what the whole email is '
             'managing.']]),
    ('P3', [['Model: "I could take the data-loading module off you — '
             'say the word and I will start on Saturday."']]),
    ('F1', [['a.  It removes the obligation before she has read anything '
             'else, so the rest of the email is information rather than a '
             'demand. An unanswered email is only restful if someone has '
             'said so explicitly.'],
            ['b.  Because for some people losing control of their code is '
             'worse than being behind, and this version keeps her as the '
             'author. Offering two shapes of help lets her choose the one '
             'that costs her least pride.']]),
    ('F2', [['a.  Because the polite reflex is to accept help you do not '
             'want. Naming the refusal as completely fine, and promising '
             'not to raise it again, is what makes declining genuinely '
             'available.'],
            ['b.  It converts "do not worry" into evidence. A specific '
             'change already made at no cost proves the group is not '
             'waiting on her, where reassurance alone would sound like '
             'kindness covering a problem.']]),
    ('F3', [['1.  "The deadline is getting close so it would be good to '
             'know what you are planning to do" is a request wearing the '
             'clothes of an offer, and it puts the problem back on her.'],
            ['2.  "We are all managing fine and we understand completely" '
             'implies there is something to understand — that is, that '
             'she has let the group down. The second bullet fails.'],
            ['3.  "If you need any help just let me know" names no task, no '
             'hour and no date, so nothing is actually offered; there are '
             'also two comma splices.']])]),

em('EM 069', 'Thanks and acknowledgement',
   ('thank by reporting the result',
    'nominal that-clauses as subjects', 'referee, endorsement, intervene, vouch',
    'thanking for something that worked'),
   'A lecturer wrote you a reference at short notice for a competitive '
   'summer programme. You have been accepted. You know she is leaving the '
   'university in July.',
   ['Report the outcome.', 'Be specific about what her reference did.',
    'Close the loop, given she is leaving.'],
   'r.eze@northgate.ac.uk', 'Monterrey programme — I got in',
   P(['a.  Why is the outcome more valuable to her than the thanks?',
      'b.  She is leaving in July. How should that change the email?'],
     ['a.  What is a referee, and what does it mean to vouch for someone?',
      'b.  Distinguish an endorsement from an intervention.'],
     ['Write the first line so the outcome arrives before the thanks.']),
   ['Dear Dr Eze,',
    'I got in — Monterrey confirmed yesterday, funded place, eight '
    'weeks from 6 July.',
    'That you wrote the reference in four days is the reason I was in the '
    'running at all; the deadline had moved and I had no second referee '
    'with any knowledge of the fieldwork. The convenor mentioned in her '
    'email that the reference had addressed the quantitative side '
    'specifically, which she said was the part most applicants could not '
    'get anyone to speak to. So it was not a formality, and I wanted you to '
    'know what it did.',
    'I gather you are leaving in July, so I will not be able to thank you '
    'in person once I am back. If it is useful, I will send you the final '
    'report in September — you supervised the work it grew out of, and '
    'it seems wrong for you not to see where it went.',
    'Thank you, genuinely, for the four days.',
    'Yours sincerely,', 'Mina Castellanos'],
   F(['a.  The outcome is in the first line with no preamble. Why?',
      'b.  The writer quotes the convenor. What does that add that her own '
      'thanks could not?'],
     ['a.  "That you wrote the reference in four days is the reason I was '
      'in the running" — identify the subject and say why it is built '
      'that way.',
      'b.  "it seems wrong for you not to see where it went" — why '
      'frame the offer this way?']),
   ['Dear Dr Eze, I hope this email finds you well. I wanted to write to '
    'thank you very much indeed for the reference you kindly wrote for me '
    'for the Monterrey summer programme. I really appreciate you doing it '
    'at such short notice, especially as I know how busy you are at this '
    'time of year. I am very happy to tell you that my application was '
    'successful. Thank you again for all your support during my studies, it '
    'has meant a great deal to me.', 'Mina'],
   [('P1', [['a.  Because the outcome is the only part she does not already '
             'know. She knows she wrote the reference and she can guess she '
             'is being thanked; whether it worked is new information, and '
             'it is what makes writing the next one worthwhile.'],
            ['b.  It makes this the last exchange of its kind, so anything '
             'the writer wants to say should be said now, and any '
             'continuing link — the report in September — has to '
             'be proposed rather than assumed.']]),
    ('P2', [['a.  A referee is someone who formally attests to your '
             'suitability; to vouch for someone is to stake your own '
             'credibility on them.'],
            ['b.  An endorsement supports an application through the '
             'ordinary channel; an intervention is a step outside it. Four '
             'days at short notice is a strong endorsement, and calling it '
             'more would be overstating.']]),
    ('P3', [['Model: "I got in — Monterrey confirmed yesterday, funded '
             'place, eight weeks from 6 July."']]),
    ('F1', [['a.  Because the result is the message. A paragraph of '
             'gratitude before the outcome makes her read it not knowing '
             'whether the application succeeded, which is the one thing she '
             'will want first.'],
            ['b.  Independent evidence that the reference did specific '
             'work. The writer’s own gratitude is predictable; the '
             'convenor’s observation that most applicants could not '
             'get the quantitative side addressed shows exactly where the '
             'reference was decisive.']]),
    ('F2', [['a.  The subject is the nominal clause "That you wrote the '
             'reference in four days". Putting the whole act in subject '
             'position lets it be the thing that caused the result, which '
             'is a precise claim rather than a compliment.'],
            ['b.  It makes the report an obligation of the writer rather '
             'than a favour asked of her. She can ignore it with no cost, '
             'and she is given a reason to want it — her own '
             'supervision is where the work began.']]),
    ('F3', [['1.  The outcome is buried in the fifth sentence after two '
             'paragraphs of thanks, so she reads the whole email in '
             'suspense. The first bullet is met only technically.'],
            ['2.  Nothing specific about what the reference did — '
             '"short notice" and "how busy you are" describe her effort, '
             'not its effect. The second bullet fails.'],
            ['3.  Her departure is not mentioned at all, so the third '
             'bullet fails; "I hope this email finds you well" and "all '
             'your support during my studies" are formulae that would fit '
             'any recipient, and there is a comma splice at the end.']])]),
]
