# -*- coding: utf-8 -*-
"""
Source content for the Foreign Ministry cybersecurity problem pack.
CEFR B1.1 (lower B1): short sentences, high-frequency vocabulary, technical
terms always glossed in the text itself.

Threat picture is set in 2026: edge/VPN appliances as the leading way in,
AI-cloned voices against help desks, AI-assisted alert triage, shadow IT and
free AI chat tools leaking data, and stale privileged accounts.
"""

TITLE = ("Ministry of Foreign Affairs — Cybersecurity: "
         "When Systems, People & Attackers Meet")
COURSE = "English for Foreign Ministry Staff — Information Security"
STRAP = ("CEFR B1.1 · vulnerabilities, AI in attack and defence, user awareness, "
         "access control · five texts and five conversations, with comprehension")

TEACHER_NOTE = [
    ("Level.", "CEFR B1.1 — lower B1. Sentences are short and the grammar is mostly "
     "present and past simple with common modals. Every technical term is explained "
     "inside the text the first time it appears, so the class can read for the story "
     "before studying the vocabulary."),
    ("The setting.", "The information security team of a Ministry of Foreign Affairs. "
     "The ministry runs Linux servers in its own data centre. Internal users are "
     "ministry staff and embassies abroad. External users are citizens and expatriates "
     "who use the service centres for passports, visas and documents."),
    ("The people.", "Ms. Rana (Head of Information Security) · Omar (Systems "
     "Administrator, Linux servers) · Samer (Security Analyst) · Khalid (IT Help Desk) · "
     "Dalia (Security Awareness Trainer) · Ms. Nour (Manager, Citizen Service Centre) · "
     "Ms. Hiba (Consular Officer) · Mr. Faris (Director of IT). Outside: Mr. Ziad, an "
     "engineer from a contractor."),
    ("The ten problems, one each.", "A VPN patch that someone wanted to postpone · a "
     "cloned voice calling the help desk · three thousand alerts and one real attack · "
     "citizen data sent through a free website · a contractor account that never closed. "
     "Then: patching while two hundred people are working · a member of staff who clicked "
     "a link and said so · refusing a director politely · explaining what an AI tool can "
     "and cannot do · and three new clerks who do not need powerful accounts."),
    ("How to run one piece (about 35 minutes).", "Ask the Before you read question with "
     "books closed · read once for the story · read again for the detail · comprehension "
     "in pairs · check as a class · the Words in the text / Useful phrases task · finish "
     "with Talk about it or Role-play, where there is no single right answer and the class "
     "has to decide."),
    ("A note on the threats.", "The situations are written for 2026 practice. Internet-facing "
     "devices such as VPN appliances are now the most common way into government networks, "
     "and a large share of known-exploited flaws in them stay unpatched. Attacks using cloned "
     "voices against help desks have risen sharply. AI assistants are widely used to group and "
     "rank security alerts, and free AI chat tools have become a common way for data to leave "
     "an organisation by accident. No real vulnerability number is used, so the pack does not "
     "go out of date when a specific flaw is fixed."),
    ("Answer key.", "At the end, from the Answer Key section onwards."),
]

# --------------------------------------------------------------------------
TEXTS = [
 {
  "n": "Text 1", "title": "The door nobody closed",
  "before": "Your VPN is the door that staff use to reach the ministry network from "
            "home or from an embassy. The company that makes it says there is a serious "
            "weakness in the software. How fast must you fix it?",
  "body": [
    "On Tuesday morning, Omar opened his email. There was an urgent message from the "
    "company that makes the ministry's VPN. The VPN is the door that staff use to reach "
    "the internal network from home or from an embassy abroad.",

    "The message said that the software had a serious weakness. An attacker could get in "
    "without a password. The company had already written a fix. A fix like this is called "
    "a patch. Omar had to install it.",

    "Omar looked at the clock. It was a quarter past nine. Two hundred people were working "
    "on the system. \"If I patch it now, everybody loses the connection for twenty minutes,\" "
    "he thought. \"I will do it on Sunday night, when the building is quiet.\"",

    "Ms. Rana, the head of information security, did not agree. She showed Omar a report on "
    "her screen. Devices that sit between the internet and the inside of a network are called "
    "edge devices. A VPN is one of them. In 2026 these devices became the most common way into "
    "government networks. Attackers scan the whole internet to find them. They often start only "
    "a few hours after a patch becomes public.",

    "\"The patch tells the attackers where the hole is,\" she said. \"Sunday is five days away.\"",

    "So they made a plan together. At half past twelve, during the lunch break, Omar sent a short "
    "message to all staff. At one o'clock he installed the patch. The VPN was down for eighteen "
    "minutes. Nobody complained.",

    "That evening Omar read the security log. Between ten in the morning and one in the afternoon, "
    "unknown computers had tried to reach the ministry VPN forty-one times.",
  ],
  "comp": [
    "What is the VPN used for at the ministry?",
    "What did the message from the VPN company say?",
    "Why did Omar want to wait until Sunday night?",
    "What is an edge device, and why do attackers like them?",
    "What three things did Omar and Ms. Rana finally agree to do?",
    "What did the security log show that evening?",
  ],
  "words": "a) a fix for a weakness in a piece of software · b) a machine that sits between the "
           "internet and the inside of a network · c) to look at very many computers quickly to "
           "find a weak one · d) a record of what happened on a system",
  "talk": "Some teams install a patch immediately, even in working hours. Others wait for a quiet "
          "night, so that citizens and staff are not disturbed. Which is right for a ministry that "
          "serves the public, and who should make that decision?",
  "key": [
    "To reach the ministry's internal network from home or from an embassy abroad.",
    "That the software had a serious weakness, and that an attacker could get in without a "
    "password. The company had already written a patch.",
    "Two hundred people were working on the system, and patching would disconnect everybody for "
    "about twenty minutes. He wanted to wait until the building was quiet.",
    "A device that sits between the internet and the inside of a network, such as a VPN. Attackers "
    "scan the internet to find them, and often begin a few hours after a patch becomes public, "
    "because the patch shows them where the weakness is.",
    "Send a short message to all staff, install the patch at one o'clock during the lunch break, "
    "and accept about twenty minutes without the VPN.",
    "That unknown computers had tried to reach the ministry VPN forty-one times between ten in the "
    "morning and one in the afternoon.",
  ],
  "wordskey": "a) a patch · b) an edge device · c) to scan · d) a log.",
 },

 {
  "n": "Text 2", "title": "The voice that sounded like the director",
  "before": "Someone calls your help desk. The voice sounds exactly like your director. He is in a "
            "hurry and he asks you to turn off a security check on his account. What do you do?",
  "body": [
    "It was twenty to five on a Thursday afternoon. The phone rang at the ministry help desk and "
    "Khalid answered.",

    "The voice was Mr. Faris, the Director of IT. Khalid knew that voice well. He heard it every "
    "week in meetings.",

    "\"Khalid, I am at the airport,\" the voice said. \"I have a new phone and I cannot get my "
    "codes. I have a meeting with the ambassador in twenty minutes. Please turn off the second "
    "step on my account.\"",

    "The second step is multi-factor authentication, or MFA. After the password, the system sends "
    "a code to the user's phone. Without that code, nobody can enter — not even somebody who has "
    "stolen the password.",

    "Khalid wanted to help. The director sounded tired and worried. But Khalid remembered his "
    "training. The rule at the ministry is short: never change an account because of an incoming "
    "phone call.",

    "\"Of course, sir,\" Khalid said politely. \"I will call you back on your office number in two "
    "minutes.\"",

    "The line went quiet. Then it went dead.",

    "Khalid called Mr. Faris. The director answered at once. He was in his office on the third "
    "floor. He had not called the help desk, and he was not at any airport.",

    "The voice on the first call was not a person. A computer had made it, from recordings of the "
    "director's own speeches on the ministry website. A copy of a real voice like this is called a "
    "deepfake.",

    "Khalid's answer cost the attacker nothing except time. That was enough. In 2026, about four "
    "organisations in ten reported calls of this kind, and attacks on help desks doubled in six "
    "months.",
  ],
  "comp": [
    "Who did the caller say he was, and where did he say he was?",
    "What exactly did the caller ask Khalid to do?",
    "What is multi-factor authentication, and why is it useful?",
    "What did Khalid say, and what happened to the call?",
    "Where did the attacker get the director's voice?",
    "Why was Khalid's simple answer enough to stop the attack?",
  ],
  "words": "a) the extra code a user must give after the password · b) a copy of a real person's "
           "voice or face, made by a computer · c) to check that a person really is who they say · "
           "d) the feeling that you must act very quickly",
  "talk": "Attackers use urgency: \"I have a meeting in twenty minutes.\" Why does being in a hurry "
          "make people less careful? How can an office protect polite staff who only want to help?",
  "key": [
    "Mr. Faris, the Director of IT. He said he was at the airport.",
    "Turn off the second step — multi-factor authentication — on his account.",
    "After the password, the system sends a code to the user's phone. Without that code nobody can "
    "enter, even if they have stolen the password.",
    "He said he would call the director back on his office number in two minutes. The line went "
    "quiet and then the caller hung up.",
    "From recordings of the director's own speeches on the ministry website.",
    "Because the attacker could not receive a call on the director's real number. Calling back on a "
    "known number costs two minutes and defeats the attack.",
  ],
  "wordskey": "a) multi-factor authentication (MFA) · b) a deepfake · c) to verify · d) urgency.",
 },

 {
  "n": "Text 3", "title": "Three thousand alarms and six real ones",
  "before": "Your security system sends three thousand alarms every day. Your team has four people. "
            "Which alarms do you look at first, and who decides?",
  "body": [
    "Samer is a security analyst at the ministry. Every morning he opened a screen full of alerts. "
    "An alert is a message from a security system that something may be wrong. On a normal day "
    "there were about three thousand.",

    "Almost all of them were nothing: a member of staff typing a password wrongly, a printer with "
    "an old address, a backup that started late. An alert that turns out to be nothing is called a "
    "false positive.",

    "The team had four analysts. Together they could look at perhaps sixty alerts a day. Samer was "
    "always afraid of the same thing. Somewhere in those three thousand lines there might be one "
    "real attack.",

    "In September the ministry began using an AI assistant for the first stage of the work. The "
    "tool does three jobs. It joins alerts that belong together. It adds information: who the user "
    "is, which machine, which country. And it compares today with the normal pattern of that "
    "person's work.",

    "On the first Tuesday the tool turned three thousand alerts into about forty groups. It marked "
    "six of them \"look at these first\".",

    "Five of the six were not attacks. The sixth one was.",

    "An account from the citizen service centre in the north had opened four hundred files between "
    "two and three in the morning. The clerk who owns that account always works from nine to five. "
    "He was asleep at home.",

    "Samer locked the account four minutes after he saw the alert. The files were passport "
    "applications. Later the team learned how the attacker had the password: the clerk had used the "
    "same password on a shopping website, and that website had lost its data the year before.",

    "Ms. Rana told the team one more thing. \"The tool helps us look. It does not decide. Write down "
    "the five alerts that were nothing. If we never check the tool's mistakes, one day it will hide "
    "something and we will not know.\"",
  ],
  "comp": [
    "How many alerts did the team receive each day, and how many could they examine?",
    "What is a false positive? Give an example from the text.",
    "What three jobs does the AI assistant do?",
    "What made the sixth alert different from a normal day for that clerk?",
    "How did the attacker get the clerk's password?",
    "Why does Ms. Rana want the five harmless alerts written down?",
  ],
  "words": "a) a message from a security system that something may be wrong · b) an alert that turns "
           "out to be nothing · c) the normal pattern of a person's work, used for comparison · "
           "d) a part of the network that nobody is watching",
  "talk": "The AI tool made the team much faster, but Ms. Rana warned them about blind spots. What "
          "could go wrong if a security team trusts an AI tool completely? What should stay in human "
          "hands?",
  "key": [
    "About three thousand alerts a day. Four analysts could examine about sixty.",
    "An alert that turns out to be nothing. Examples: a member of staff typing a password wrongly, "
    "a printer with an old address, a backup starting late.",
    "It joins alerts that belong together, it adds information (user, machine, country), and it "
    "compares today with the normal pattern of that person's work.",
    "The account opened four hundred files between two and three in the morning, but the clerk "
    "always works from nine to five.",
    "The clerk had used the same password on a shopping website, and that website had lost its data "
    "the year before.",
    "So that the team checks the tool's mistakes. If nobody checks, the tool may one day hide "
    "something real and the team will not know.",
  ],
  "wordskey": "a) an alert · b) a false positive · c) a baseline (normal behaviour) · d) a blind spot.",
 },

 {
  "n": "Text 4", "title": "The helpful shortcut",
  "before": "You must send three hundred pages of citizen documents to an embassy today. Your email "
            "refuses the file because it is too large. What do you do?",
  "body": [
    "Ms. Hiba works in the consular department. On Wednesday an embassy in Europe asked her for the "
    "documents of a hundred and eighty expatriates. The file was large — about ninety megabytes.",

    "She tried to send it by email. The system refused it: \"File too large.\"",

    "Ms. Hiba had a deadline at four o'clock. She remembered a free file-sharing website that her "
    "cousin used for holiday photos. She uploaded the file and sent the link to the embassy.",

    "The embassy received the documents. Everybody was happy, and Ms. Hiba did not think about it "
    "again.",

    "Three weeks later Dalia, from the security awareness team, visited the consular department. She "
    "asked one simple question. \"In the last month, has anybody sent ministry files using a website "
    "that is not ours?\"",

    "Nobody spoke. Then Ms. Hiba raised her hand.",

    "Dalia did not get angry. She thanked her, and then she explained the problem. The file held the "
    "names, passport numbers and addresses of a hundred and eighty citizens. That is personal data, "
    "and the ministry is responsible for it. The website keeps its own copy. The link had no password "
    "and no end date, so anybody with the link could open the file. The ministry could not delete that "
    "copy and could not see who had read it.",

    "Then Dalia mentioned a newer habit. Some staff were copying official letters into free AI chat "
    "tools, to make the English better. Those letters also leave the ministry.",

    "When staff use a service that the IT department has not approved, we call it shadow IT. It is "
    "almost always the work of somebody who is trying to finish a job.",

    "The ministry already had a secure transfer system. It accepts files up to two gigabytes. Nobody "
    "in the consular department had ever been shown how to use it.",

    "That week Dalia trained all fourteen officers. It took forty minutes.",
  ],
  "comp": [
    "Why could Ms. Hiba not send the file by email?",
    "What did she do instead, and why did she think it was acceptable?",
    "What kind of information was in the file?",
    "Give three reasons why the free website was dangerous.",
    "What newer habit did Dalia also mention, and why is it a problem?",
    "What did the ministry already have, and what was missing?",
  ],
  "words": "a) to send a file from your computer to a website · b) information about a person, such "
           "as a passport number · c) services that staff use without the IT department's approval · "
           "d) a date when a link or an account stops working",
  "talk": "Ms. Hiba broke a rule, but she was trying to do her job before a deadline. Should staff in "
          "this situation be punished, trained, or both? What does your answer do to the number of "
          "people who report their own mistakes?",
  "key": [
    "The file was about ninety megabytes and the email system refused it as too large.",
    "She uploaded it to a free file-sharing website and sent the link. Her cousin used the same site "
    "for holiday photos, and the embassy received the documents successfully.",
    "The names, passport numbers and addresses of a hundred and eighty citizens — personal data.",
    "The website keeps its own copy; the link had no password and no end date, so anybody with the "
    "link could open it; and the ministry could not delete the copy or see who had read it.",
    "Staff copying official letters into free AI chat tools to improve the English. The letters leave "
    "the ministry in the same way.",
    "A secure transfer system that accepts files up to two gigabytes. Nobody in the consular "
    "department had been shown how to use it.",
  ],
  "wordskey": "a) to upload · b) personal data · c) shadow IT · d) an expiry date.",
 },

 {
  "n": "Text 5", "title": "The account that never left",
  "before": "A contractor finished his work six months ago. Is his account still open? Whose job is "
            "it to close it?",
  "body": [
    "In January the ministry hired an outside company to build a new appointment system for the "
    "service centres. Mr. Ziad, an engineer from that company, needed access to the servers. Omar "
    "created an account for him.",

    "Mr. Ziad had to read and change the database, so Omar gave him a privileged account. A "
    "privileged account can do much more than a normal one.",

    "The project finished in April. Mr. Ziad said goodbye and went to another customer. Nobody told "
    "the IT department, and nobody closed the account.",

    "In October the AI monitoring tool marked something strange. Mr. Ziad's account had logged in at "
    "eleven at night, from a country where the ministry has no office. Then it had copied a table of "
    "appointments.",

    "Samer telephoned the contractor's company. Mr. Ziad was on holiday. He had not used the account "
    "since April. Two months earlier his old laptop had been stolen, and the password was still saved "
    "in the browser.",

    "The team locked the account in minutes. Then Ms. Rana asked a harder question: how many other old "
    "accounts were still open?",

    "The answer was uncomfortable. The team found a hundred and twelve accounts that belonged to people "
    "who had left the ministry or finished their contract. Eleven of those accounts were privileged.",

    "The ministry wrote three new rules. Every account for somebody outside the ministry now stops "
    "working automatically after ninety days. Every manager receives a list of their team's accounts "
    "each month and must confirm it. And nobody receives a privileged account when a normal account is "
    "enough. That last rule has a name: least privilege.",

    "\"An open account is an open door,\" Ms. Rana told the directors. \"It does not matter that the "
    "person is honest. What matters is that the door is open.\"",
  ],
  "comp": [
    "Why did Mr. Ziad need an account, and what kind of account did he get?",
    "What happened when the project finished in April?",
    "What did the AI monitoring tool notice in October?",
    "How had the attacker got into Mr. Ziad's account?",
    "How many old accounts did the team find, and how many were privileged?",
    "What are the three new rules, and what is the third one called?",
  ],
  "words": "a) permission to enter a system · b) an account that can do much more than a normal one · "
           "c) to stop working automatically after a period of time · d) the rule of giving the "
           "smallest permission that is enough",
  "talk": "Managers are busy. Every month they must check a list of accounts, and many will simply "
          "click \"confirm\" without reading it. How can a security team make this check real instead "
          "of automatic?",
  "key": [
    "He was an engineer from an outside company building the new appointment system, and he had to "
    "read and change the database, so Omar gave him a privileged account.",
    "Mr. Ziad went to another customer. Nobody told the IT department and nobody closed the account.",
    "That the account had logged in at eleven at night from a country where the ministry has no "
    "office, and had then copied a table of appointments.",
    "Mr. Ziad's old laptop had been stolen two months earlier and the password was still saved in the "
    "browser.",
    "A hundred and twelve accounts belonging to people who had left or finished their contract; "
    "eleven of them were privileged.",
    "Outside accounts stop automatically after ninety days; managers confirm a list of their team's "
    "accounts every month; and nobody gets a privileged account when a normal one is enough. The "
    "third rule is called least privilege.",
  ],
  "wordskey": "a) access · b) a privileged account · c) to expire · d) least privilege.",
 },
]

# --------------------------------------------------------------------------
CONVS = [
 {
  "n": "Conversation 1", "title": "Can it wait until Sunday?",
  "who": "Omar (Systems Administrator) and Ms. Rana (Head of Information Security), by internal "
         "telephone.",
  "lines": [
    ("Omar", "Good morning, Ms. Rana. It's Omar in the server room. Did you see the alert from the "
             "VPN company?"),
    ("Ms. Rana", "I did. I was going to call you. How bad is it?"),
    ("Omar", "It's bad. An attacker can get in without a password. The company has already released "
             "a patch."),
    ("Ms. Rana", "Good. When can you install it?"),
    ("Omar", "That is why I'm calling. Right now we have about two hundred users online, and four "
             "embassies are in a video meeting. I would like to do it on Sunday night."),
    ("Ms. Rana", "I understand the problem, but Sunday is five days away. When a patch becomes "
                 "public, the attackers read it too. It shows them exactly where the weakness is."),
    ("Omar", "So you want me to disconnect everybody now?"),
    ("Ms. Rana", "No. Let's find a middle way. How long does the patch take?"),
    ("Omar", "About twenty minutes, with the restart."),
    ("Ms. Rana", "Then do it in the lunch break, at one o'clock. Send a message to all staff now, so "
                 "that nobody is surprised. I will inform the embassies myself."),
    ("Omar", "That works. I'll test it on the backup server first."),
    ("Ms. Rana", "Perfect. And Omar — send me the log afterwards. I want to see who was knocking on "
                 "that door this morning."),
  ],
  "comp": [
    "Why does Omar telephone Ms. Rana?",
    "What can an attacker do because of this weakness?",
    "Why does Omar want to wait until Sunday night?",
    "Why does Ms. Rana say that waiting five days is dangerous?",
    "What four things do they agree to do?",
  ],
  "phrases": "Did you see the alert …? · How bad is it? · Let's find a middle way. · Send a message "
             "to all staff, so that nobody is surprised. · I'll test it on the backup server first.",
  "role": "Student A is a systems administrator who wants to postpone a patch until the weekend, "
          "because an important video conference is running. Student B is the head of information "
          "security, who must protect the network and also keep the service working.",
  "key": [
    "Because the VPN company has sent an alert about a serious weakness, and he must decide when to "
    "install the patch.",
    "Get into the ministry network without a password.",
    "About two hundred users are online and four embassies are in a video meeting; patching would "
    "disconnect them for about twenty minutes.",
    "Because when the patch becomes public, attackers read it too and it shows them exactly where "
    "the weakness is.",
    "Install the patch at one o'clock in the lunch break; send a message to all staff first; test it "
    "on the backup server; and send Ms. Rana the log afterwards. (She will inform the embassies.)",
  ],
 },

 {
  "n": "Conversation 2", "title": "I think I clicked it",
  "who": "Ms. Hiba (Consular Officer) and Khalid (IT Help Desk), by internal telephone.",
  "lines": [
    ("Ms. Hiba", "Khalid, it's Hiba from the consular department. I think I have done something "
                 "stupid."),
    ("Khalid", "Tell me what happened. Nobody is in trouble for calling us."),
    ("Ms. Hiba", "I got an email about a package from the post office. I clicked the link. A page "
                 "opened and asked for my ministry password, and I typed it. Then the page said "
                 "\"error\" and closed."),
    ("Khalid", "How long ago?"),
    ("Ms. Hiba", "About four minutes."),
    ("Khalid", "Four minutes is very good news. Thank you for calling immediately. Please don't turn "
               "your computer off. Are you still on the network?"),
    ("Ms. Hiba", "Yes, I am."),
    ("Khalid", "Good. I'm changing your password now, and I'm closing all your open sessions. If "
               "somebody has the old password, it is already useless."),
    ("Ms. Hiba", "Should I tell my director?"),
    ("Khalid", "I'll put it in the ticket and the security team will tell him. Your name goes in the "
               "report as the person who reported it, not as the problem."),
    ("Ms. Hiba", "I feel very embarrassed."),
    ("Khalid", "Please don't. We had nine of these last month. The dangerous ones are the people who "
               "click and say nothing for a week. One more question — did you approve any message on "
               "your phone after that?"),
    ("Ms. Hiba", "Yes, one. I pressed \"approve\" because I thought it was the post office page."),
    ("Khalid", "Thank you for telling me. That is exactly why I asked. I'm removing that device now."),
  ],
  "comp": [
    "What exactly did Ms. Hiba do?",
    "Why does Khalid say that four minutes is very good news?",
    "What two actions does Khalid take immediately?",
    "How does Khalid answer when Ms. Hiba says she feels embarrassed?",
    "What extra question does Khalid ask, and why does the answer matter?",
  ],
  "phrases": "Nobody is in trouble for calling us. · Thank you for calling immediately. · Please don't "
             "turn your computer off. · Your name goes in the report as the person who reported it. · "
             "One more question …",
  "role": "Student A clicked a link two days ago and said nothing, because they felt embarrassed. "
          "Student B is a help desk officer who must get the facts quickly without making the person "
          "defensive.",
  "key": [
    "She clicked a link in an email about a post office package, opened a page, and typed her ministry "
    "password into it.",
    "Because she reported it almost immediately, so he can change the password and close the sessions "
    "before the attacker uses them.",
    "He changes her password and closes all her open sessions.",
    "He tells her not to feel embarrassed: there were nine such cases last month, and the dangerous "
    "people are the ones who click and say nothing for a week.",
    "Whether she approved any message on her phone. She did, so the attacker had added a device to "
    "her account, and Khalid must remove it.",
  ],
 },

 {
  "n": "Conversation 3", "title": "I'll call you back on your office number",
  "who": "Khalid (IT Help Desk) and a caller who says he is Mr. Faris (Director of IT), by telephone.",
  "lines": [
    ("Caller", "Khalid? This is Faris. I'm at the airport in Vienna."),
    ("Khalid", "Good afternoon, sir. How can I help you?"),
    ("Caller", "My phone is new and I can't get my codes. I need you to turn off multi-factor "
               "authentication on my account. I have a meeting with the ambassador in twenty minutes."),
    ("Khalid", "I understand, sir. May I take your staff number?"),
    ("Caller", "I don't have it with me. Khalid, I am standing at the gate. This is urgent."),
    ("Khalid", "Of course, sir. Our rule is the same for everybody, including directors. I will call "
               "you back on your office number or your registered mobile."),
    ("Caller", "My registered mobile is the phone that doesn't work. Just do it. I'll send you an "
               "email afterwards."),
    ("Khalid", "I'm sorry, sir. I can't change an account from an incoming call. If your phone is "
               "lost, I can start the lost-device procedure, and your assistant can confirm your "
               "identity in person."),
    ("Caller", "You are making me miss an important meeting."),
    ("Khalid", "I apologise for the delay, sir. I will stay on the line while I call your office."),
    ("Khalid", "… Hello? … Ms. Rana, this is Khalid. I think we have just had a voice attack."),
  ],
  "comp": [
    "What does the caller ask Khalid to do?",
    "What three things does the caller say to make Khalid hurry?",
    "What does Khalid offer to do instead?",
    "Which sentence shows that the rule applies to everybody?",
    "What happens at the end of the call, and what does Khalid do next?",
  ],
  "phrases": "May I take your staff number? · Our rule is the same for everybody. · I can't change an "
             "account from an incoming call. · I will call you back on your registered number. · I "
             "apologise for the delay.",
  "role": "Student A telephones the help desk and says they are a senior director who is travelling "
          "and locked out of their account. Student B must refuse politely, offer a safe alternative, "
          "and stay calm when the caller becomes angry.",
  "key": [
    "Turn off multi-factor authentication on the director's account.",
    "He is at the airport / at the gate; his phone is new and he cannot get his codes; and he has a "
    "meeting with the ambassador in twenty minutes.",
    "To call him back on his office number or his registered mobile, and to start the lost-device "
    "procedure so that his assistant can confirm his identity in person.",
    "\"Our rule is the same for everybody, including directors.\"",
    "The caller hangs up. Khalid telephones Ms. Rana and reports that it was probably a voice attack.",
  ],
 },

 {
  "n": "Conversation 4", "title": "What the tool found last night",
  "who": "Samer (Security Analyst) and Ms. Rana (Head of Information Security), in the operations room.",
  "lines": [
    ("Samer", "Good morning. The AI assistant marked six alerts last night. Five were nothing. The "
              "sixth one is real."),
    ("Ms. Rana", "Show me."),
    ("Samer", "An account from the northern service centre opened four hundred citizen files between "
              "two and three in the morning."),
    ("Ms. Rana", "Who owns the account?"),
    ("Samer", "A clerk called Mahmoud. He works nine to five. In two years he has never logged in at "
              "night."),
    ("Ms. Rana", "So the tool compared last night with his normal pattern."),
    ("Samer", "Exactly. It also saw that the connection came from another country. On its own, "
              "neither thing is proof. Together, they are."),
    ("Ms. Rana", "What did you do?"),
    ("Samer", "I locked the account at seven fourteen and telephoned the centre manager. The files "
              "were passport applications."),
    ("Ms. Rana", "Good. Now the important question — how did they get his password?"),
    ("Samer", "He used the same password on a shopping website, and that website lost its data last "
              "year."),
    ("Ms. Rana", "Then it will happen again. Ask Dalia to put password re-use at the top of next "
                 "month's training. And Samer — write down the five alerts that were nothing."),
    ("Samer", "Why the ones that were nothing?"),
    ("Ms. Rana", "Because if we never check the tool's mistakes, one day it will hide something and "
                 "we will not know."),
  ],
  "comp": [
    "How many alerts did the AI assistant mark, and how many were real?",
    "What two things together made the sixth alert suspicious?",
    "What did Samer do, and at what time?",
    "How did the attacker get the clerk's password?",
    "Why does Ms. Rana want the five harmless alerts written down?",
  ],
  "phrases": "The tool marked six alerts. · On its own it is not proof. Together, they are. · I locked "
             "the account at … · How did they get his password? · If we never check the tool's "
             "mistakes …",
  "role": "Student A is a manager who wants to buy an AI security tool and believes it can replace two "
          "analysts. Student B is a security officer who explains what the tool can do and what it "
          "cannot do.",
  "key": [
    "Six alerts; one was real.",
    "The account opened four hundred files between two and three in the morning, although the clerk "
    "never works at night; and the connection came from another country.",
    "He locked the account at seven fourteen and telephoned the centre manager.",
    "The clerk used the same password on a shopping website, and that website lost its data last year.",
    "Because if nobody checks the tool's mistakes, one day it will hide something real and the team "
    "will not know.",
  ],
 },

 {
  "n": "Conversation 5", "title": "A normal account is enough",
  "who": "Ms. Nour (Manager, Citizen Service Centre) and Omar (Systems Administrator), by internal "
         "telephone.",
  "lines": [
    ("Ms. Nour", "Omar, I have three new clerks starting on Sunday at the expatriate service centre. "
                 "I need accounts for them."),
    ("Omar", "No problem. I need their full names, their staff numbers and their start dates from HR."),
    ("Ms. Nour", "I'll send them this afternoon. Can you give them the same rights as Mahmoud?"),
    ("Omar", "Let me look at what Mahmoud has… He can open any citizen file in the whole country."),
    ("Ms. Nour", "Is that wrong?"),
    ("Omar", "It is more than he needs. Your centre only serves the northern region, so I'll give the "
             "new clerks the regional profile instead."),
    ("Ms. Nour", "Will that slow them down?"),
    ("Omar", "No. They will see every file they actually need. If a citizen from another region comes "
             "to the counter, they request access and you approve it. It takes a minute."),
    ("Ms. Nour", "That's fine. And one more thing — two of the three are on six-month contracts."),
    ("Omar", "Then I'll set those accounts to stop automatically at the end of the contract. If a "
             "contract is extended, you send me one email and I move the date."),
    ("Ms. Nour", "Good. Can the three of them share one login for the counter computer? It would be "
                 "faster in the morning."),
    ("Omar", "I'm afraid not. If three people share one account, I can't tell you who opened a file. "
             "Each person needs their own."),
  ],
  "comp": [
    "What does Ms. Nour need, and when?",
    "What does Omar need from HR before he can create the accounts?",
    "Why does Omar refuse to copy Mahmoud's rights?",
    "What will Omar do about the two six-month contracts?",
    "Why does Omar refuse a shared login?",
  ],
  "phrases": "Can you give them the same rights as …? · It is more than he needs. · I'll set those "
             "accounts to stop automatically at … · I'm afraid not. · I can't tell you who opened a "
             "file.",
  "role": "Student A is a busy department head who wants one shared account for a team of five, "
          "because it is faster in the morning. Student B is a systems administrator who must refuse "
          "and offer a workable alternative.",
  "key": [
    "Accounts for three new clerks starting on Sunday at the expatriate service centre.",
    "Their full names, their staff numbers and their start dates.",
    "Mahmoud can open any citizen file in the whole country, which is more than he needs. The new "
    "clerks only serve the northern region, so they get the regional profile.",
    "He will set those accounts to stop automatically at the end of the contract, and move the date "
    "if a contract is extended.",
    "Because if three people share one account, he cannot tell who opened a particular file.",
  ],
 },
]
