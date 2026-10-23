# English for Cybersecurity — Student Book (A2) · Syria Edition · Book 1

| | |
| --- | --- |
| **Edition** | Syrian Edition — Syria throughout: Damascus, Aleppo, Homs, Latakia, Tartous |
| **Level** | A2, the strand's level |
| **Book** | **Book 1** — the A2 Student Book. A B1 continuation (Book 2) is the natural follow-on and is not planned here |
| **Output** | `books/english-for-cybersecurity-syria/dist/EnglishForCybersecurity_Syria_StudentBook_A2.docx` |
| **Author** | Mohamad Khorbatli |

A new book for a new profession, laid out on the measured design system of
*New English for NGOs and International Organizations — Student Book (A2)* and
built as an exact structural twin of the eight ESP books already delivered, so a
teacher who knows one book knows this one. **The International twin is not part
of this plan** — the ten-country edition can be derived afterwards, as it was for
Logistics, QA, Business Managers, Office Managers, Content Creators, Tourism
Police and Tour Guides, from the same `content/*.txt` skeleton.

---

## 1 · What the template is

| measure | value |
| ---: | --- |
| Level | A2 |
| Units | 10 |
| Exercises | 41 per unit (Unit 1 has 37 — see §9), 406 in all |
| Parts per unit | Warm Up, then Part 1 Vocabulary, 2 Grammar, 3 Listening, 4 Reading, 5 Speaking, 6 Writing, 7 Culture, 8 Review |
| Exercises per part | 5 · 7 · 6 · 5 · 6 · 4 · 4 · 2 · 2 |
| Audio exercises | 5 per unit, 50 in all, numbered `Track <unit>.<exercise>` |
| Appendices | Appendix A — Audio Scripts (92 track heads, plus the VBA playback listing); Appendix B — Answer Key (329 heads, 620 answers) |
| Paragraphs | 7,346, of which 2,300 are blank spacers |
| Elements in reading order | 5,455 |
| Tables | 264, with 953 rows and 2,155 cells |
| Pages | 257 in the template; the eight ESP twins land on 252 |

Every structural number is matched exactly. §7 is the verification table the
build has to fill in.

---

## 2 · The cybersecurity syllabus

The template's exercise *shapes* are kept; the subject is keeping a small
organisation's systems and records safe, and the grammar progression is the
template's.

| unit | subject | grammar |
| ---: | --- | --- |
| 1 | Introduction to Cybersecurity | present simple |
| 2 | Cybersecurity Careers and Roles | present perfect |
| 3 | Law, Policy and Compliance | conditionals, passive, reported speech, modals |
| 4 | Equipment, Licences and Security Budgets | modals of ability, gerunds, comparatives |
| 5 | The Incident Response Cycle | sequencing, conditionals, passive, purpose |
| 6 | Working with Providers and Suppliers | cooperation structures, agreement, passive |
| 7 | User Support, Awareness and Service | cause and effect, purpose, concession |
| 8 | Performance Measurement and Reporting | past tense for results, comparison, question forms |
| 9 | Growth, Change and Scaling the Security Function | future forms, conditionals, comparatives |
| 10 | Security Advocacy and Professional Communication | persuasive language, conditionals, argument |

### The vocabulary load

The template's weight, the profession's content, and every item inside A2 reach
when it is defined on the page it first appears on:

password · passphrase · two-step verification · one-time code · user account ·
access rights · screen lock · phishing message · suspicious link · malware ·
ransom note · antivirus · firewall · update · patch · backup · restore ·
recovery time · incident · incident report · ticket · log · audit · risk
register · asset register · acceptable use policy · removable media · data
breach · personal data · handover note.

Thirty headline items; the full load is the template's, declared unit by unit in
Part 1 and reviewed in Part 8.

### One rule about the subject, and it governs every unit

⚠ **This is a book about defending an office, and nothing in it teaches an
attack.** The attacker appears only as what arrives — a message in the inbox, a
call that asks for a code, a file on a borrowed USB stick — and every exercise
asks the learner to **notice it, report it, record it, explain it to a colleague
or write it up for a director.** No exercise names a tool, a technique or a step
for breaking into anything. The English being taught is the English of
reporting, requesting, refusing, explaining, warning and writing policy, which
is what a security officer in a small office actually does in English all day.

---

## 3 · The Syrian setting

The spine is a small security function inside an ordinary Syrian organisation —
a trading company, a private bank, a university faculty, a hospital, an NGO
office — doing the work with what is actually available.

**Institutions named** (public bodies only; firms in the book are invented):
the Ministry of Communications and Technology · the Syrian Telecommunications
Establishment · the National Agency for Network Services, which holds the `.sy`
registry · the Syrian Computer Society · the Central Bank of Syria, for the
instructions it issues to banks · the commercial register · the chambers of
commerce and industry · the IT faculties of Damascus and Aleppo universities and
the Higher Institute for Applied Sciences and Technology.

**The constraints are the real ones, and they are the book's material:**

- **Power.** Mains comes and goes on a schedule; the office runs on a generator
  and a UPS whose batteries are old. A restore that takes four hours has to fit
  inside the hours there is power for, and the backup that runs at night runs
  when the current is on.
- **Connections.** Links are slow, shared and intermittent, so files move on USB
  sticks between machines and offices — which is why removable media is a whole
  strand of the book rather than one exercise.
- **Licences and payment.** A card payment to a foreign vendor cannot be made
  from Damascus, so licences and renewals are bought through a reseller abroad
  or not at all. Unlicensed and unpatched software is therefore common, and
  Unit 4 costs the licence against the incident instead of pretending the choice
  is free.
- **Hardware.** Machines are old and past support; spare parts are imported with
  difficulty; a replaced laptop is a budget decision and not a form.
- **People.** Staff learned computers on a shared machine, so accounts get
  shared out of habit and not out of carelessness; good colleagues are abroad and
  work remotely across a bad link; the only officer who understands the backup
  may be the one who leaves the country, which is Unit 9's succession problem.
- **What actually arrives.** Phishing by SMS and messaging app in Arabic;
  someone ringing to ask for the code that has just been sent; the manager's
  messaging account taken over and used to ask the finance clerk for a transfer;
  a fake job offer with an attachment; a ransom note on a shared drive.
- **The fallback.** Paper. Every unit knows that the register, the signed
  handover and the stamped letter are still what settle a dispute.

### The Syrian anchor, unit by unit

| unit | where it happens | the Syrian particular |
| ---: | --- | --- |
| 1 | the IT room of a Damascus trading company | what the one officer is responsible for, and the register he keeps by hand |
| 2 | a private bank, a university faculty, an internet provider | the three real routes into the work, and what each one pays in experience |
| 3 | the policy file and the log book | duties under the cybercrime and electronic-signature statutes, the Central Bank's instructions to banks, and the `.sy` records — see §4 |
| 4 | the procurement note and the licence that cannot be paid for | buying through a reseller abroad; UPS batteries; the cost of an incident against the cost of a licence |
| 5 | a ransom note found on the shared drive on a Thursday | containment during a power cut, a restore that must fit the generator's hours, and who is telephoned first |
| 6 | the provider, the host, the mobile operator, the generator man | asking a provider for a log and getting an answer; what a service agreement can and cannot promise |
| 7 | the help desk | one account shared by three people, an Arabic phishing SMS passed round the office, and an awareness session for staff who are frightened of being blamed |
| 8 | the monthly report to a director | tickets closed, incidents by severity, patch coverage, backup success rate — and *hisba*, honest measure |
| 9 | one officer becoming a team of four, and a second office in Aleppo | the handover when the only person who knows the backup emigrates |
| 10 | a board, a chamber of commerce, a sector association | the case for spending, made in English, to people who will decide in Arabic |

---

## 4 · Two decisions taken in advance

1. ⚠ **The book states duties, not article numbers.** Syria's cybercrime and
   electronic-signature statutes and the Central Bank's instructions are named as
   institutions and obligations — *the law requires the holder of personal data
   to…*, *the bank's instructions require the officer to report within…* — and no
   exercise turns on a citation. **Any article number, law number or date must be
   checked against the current statute book before it is printed**, and the
   syllabus is written so that a change in the law changes no exercise. This is
   the same discipline the Tourism Police and Accountants books used for
   procedure.
2. **The contents page names each unit for what the unit contains.** The original
   NGO template's contents page runs one topic behind its units; reproducing that
   offset would ship ten units whose titles describe the wrong content. Every ESP
   twin has corrected it and so does this one. Nothing structural changes: ten
   contents entries, one `Heading1` per unit, all 30 metrics still match.

---

## 5 · Contents, in full

**Front matter:** title page · `Table of Contents` with the ten entries below.

| | unit |
| ---: | --- |
| 1 | Introduction to Cybersecurity |
| 2 | Cybersecurity Careers and Roles |
| 3 | Law, Policy and Compliance |
| 4 | Equipment, Licences and Security Budgets |
| 5 | The Incident Response Cycle |
| 6 | Working with Providers and Suppliers |
| 7 | User Support, Awareness and Service |
| 8 | Performance Measurement and Reporting |
| 9 | Growth, Change and Scaling the Security Function |
| 10 | Security Advocacy and Professional Communication |

**Back matter:** Appendix A — Audio Scripts (every transcript, printed a second
time, identical to its printing inside the unit, plus the VBA playback listing) ·
Appendix B — Answer Key (329 heads, 620 answers, titled from each unit's own
exercise list).

Below is every exercise in the book, in reading order: **406 exercises**, 37 in
Unit 1 and 41 in each of Units 2–10. ⚠ **Voices** names the speakers whose lines
are colour-coded in that unit's audio; **Tracks** names the five audio
exercises.

### Unit 1 · Introduction to Cybersecurity — present simple
**Voices:** Security Officer | IT Manager | Help-Desk Officer | All Staff ·
**Tracks:** the officer's interview · types of security work · aims and goals ·
roles and focus areas · characteristics of the work

**Warm Up** — 1 Security Terms and Functions Matching · 2 What Is Cybersecurity? Simple Vocabulary Fill · 3 Types of Security Work Classification · 4 Purposes of Cybersecurity Multiple Choice · 5 Security Documents and Tools Matching
**Part 1 Vocabulary** — 6 Security and Incident Terminology Matching · 7 Security Terminology Pronunciation Practice · 8 Security Activities and Purposes Table · 9 Security Functions and Stages Matching · 10 Cybersecurity Concepts Multiple Choice · 11 Security-Related Vocabulary Fill-in · 12 Syria's Networks and Connection Conditions
**Part 2 Grammar** — 13 Present Simple for Describing Security Work · 14 Simple Sentences About the Profession · 15 Negative Sentences About Security Officers · 16 Security Officer and Team Roles Table · 17 Correcting Security Sentences · 18 Grammar Review – Security Sentences
**Part 3 Listening** — 19 Security Officer Interview Understanding · 20 Types of Security Work – True or False · 21 Security Aims and Goals Understanding · 22 Security Roles and Focus Areas Matching · 23 Security Characteristics Classification
**Part 4 Reading** — 24 What Is Cybersecurity? Reading Comprehension · 25 Functions of Cybersecurity and Examples – True or False · 26 Cybersecurity in Syria – Fact Questions · 27 Security Costs and Roles Classification · 28 Security Impact and Importance Matching · 29 Security Importance and Role Completion
**Part 5 Speaking** — 30 Security Terminology Pronunciation Practice · 31 Discussing Cybersecurity and Its Work · 32 Security Interview Role Play · 33 Presentation on Cybersecurity Facts
**Part 7 Culture** — 34 Security Values and Professional Ethics · 35 Syrian Cultural Values and Security Work
**Part 8 Review** — 36 Security Concepts Review and Classification · 37 Integrated Security Competency Assessment
⚠ **Unit 1 has no Part 6**, as in every book on this template.

### Unit 2 · Cybersecurity Careers and Roles — present perfect
**Voices:** Security Officer | IT Manager | Help-Desk Officer | All Staff ·
**Tracks:** job descriptions · interview with a security officer · training
programmes · security challenges · career growth

**Warm Up** — 1 What Do People in Cybersecurity Do? · 2 Matching Security Jobs to Descriptions · 3 Security Job Skills · 4 Do You Want to Work in Cybersecurity? · 5 Security Work in Syria
**Part 1 Vocabulary** — 6 Security Job Titles and Descriptions · 7 Security Job Responsibilities · 8 Skills Required for Security Work · 9 Work Environment in Cybersecurity · 10 Listening – Security Job Descriptions · 11 Reading – Security Career Path · 12 Discussion – Security Career Interest
**Part 2 Grammar** — 13 Present Perfect – Work Experience · 14 Singular/Plural Present Perfect · 15 Present Perfect Questions · 16 Present Perfect Negatives · 17 Present Perfect – Listening · 18 Present Perfect Application
**Part 3 Listening** — 19 Pre-Listening – Security Officer Interview · 20 Listening – Interview with a Security Officer · 21 Detailed Comprehension – Training Programmes · 22 Listening for Details – Security Challenges · 23 Extended Dialogue – Career Growth
**Part 4 Reading** — 24 Pre-Reading – Team Types and Roles · 25 Reading – Security Team Structure · 26 Vocabulary in Context – Job Descriptions · 27 Text Comprehension – Choosing Security Jobs · 28 True/False – Security Employment · 29 Discussion – Security Career Values
**Part 5 Speaking** — 30 Role Play – Job Interview · 31 Presentation – Security Career Path · 32 Discussion – Overcoming Security Challenges · 33 Dialogue – Advice from an Experienced Officer
**Part 6 Writing** — 34 Email – Inquiry About a Traineeship · 35 Written Response – Job Application Question · 36 Describe – Day in the Life of a Security Officer · 37 Reflection – Learning from Security Work
**Part 7 Culture** — 38 Security Sector in Syria and the Region · 39 Discussion – Values in Security Work
**Part 8 Review** — 40 Unit 2 Summary – Security Roles · 41 Integrated Assessment – Security Career Knowledge

### Unit 3 · Law, Policy and Compliance — conditionals, passive, reported speech, modals
**Voices:** Security Officer | IT Manager | Auditor | All Staff ·
**Tracks:** compliance vocabulary in use · grammar in context · the
investigation process · compliance challenges · personal stories of compliance
work

**Warm Up** — 1 What Is Policy Compliance? · 2 Matching – Policy Risks · 3 Text – Record-Keeping and Log Principles · 4 Discussion – Why Logs Matter · 5 Vocabulary Classification – Compliance Terms
**Part 1 Vocabulary** — 6 Types of Security Record · 7 Compliance Words · 8 Fill Blanks – Compliance Vocabulary · 9 Vocabulary in Context – Audit Scenarios · 10 Discussion – Compliance Terms in Real Situations · 11 Listening – Compliance Vocabulary in Action · 12 Summary – Key Compliance Concepts
**Part 2 Grammar** — 13 Conditionals – Compliance Scenarios · 14 Passive Voice – Compliance Actions · 15 Reported Speech – Auditor Findings · 16 Modal Verbs – Compliance Necessity · 17 Listening – Grammar in Context · 18 Grammar Summary – Compliance Communication
**Part 3 Listening** — 19 Pre-Listening – Investigation Awareness · 20 Listening – Investigation Process · 21 True/False – Compliance Practice · 22 Listening – Compliance Challenges · 23 Listening – Personal Stories of Compliance Work
**Part 4 Reading** — 24 Pre-Reading – Regulatory Contexts · 25 Reading – Compliance Decision-Making · 26 Text Comprehension – Professional Ethics · 27 Application – Compliance Scenarios · 28 True/False/Not Given – Authorities and Registries · 29 Discussion – Compliance Dilemmas
**Part 5 Speaking** — 30 Presentation – Types of Security Record · 31 Role Play – Compliance Meeting · 32 Discussion – Becoming a Certified Officer · 33 Role Play – Requesting an Urgent Approval
**Part 6 Writing** — 34 Writing – Personal Statement About Professional Values · 35 Writing – Case Study Analysis · 36 Writing – Letter Requesting a Ruling · 37 Writing – Reflection on Professional Ethics
**Part 7 Culture** — 38 Law and Compliance in Syrian Contexts · 39 Discussion – Global Responsibility for Fair Practice
**Part 8 Review** — 40 Unit 3 Summary – Compliance Concepts · 41 Integrated Assessment – Unit 3 Mastery

### Unit 4 · Equipment, Licences and Security Budgets — modals of ability, gerunds, comparatives
**Voices:** Security Officer | Finance Officer | Asset Controller | All Staff ·
**Tracks:** budget skills in action · grammar in context about budgeting ·
perspectives on finance skills · developing skills through experience · personal
stories about developing skills

**Warm Up** — 1 Security Spending Discussion · 2 Matching Tasks to Finance Roles · 3 Accuracy Multiple Choice · 4 Discussion – Personal Strengths · 5 Finance Skills Classification
**Part 1 Vocabulary** — 6 Budget and Licence Terms Matching · 7 Procurement Conventions Table · 8 Budget Terms Fill-in Blanks · 9 Budget Practice in Context – Fact Questions · 10 Discussion – Skills for Accuracy · 11 Listening – Budget Skills in Action · 12 Summary – Core Skills for Reliable Accounts
**Part 2 Grammar** — 13 Modal Verbs About Ability and Necessity · 14 Adjectives Describing Skills and Qualities · 15 Describing Requirements with Gerunds · 16 Comparative Adjectives About Budgeting · 17 Listening – Grammar in Context About Budgeting · 18 Grammar Review – Skills and Qualities
**Part 3 Listening** — 19 Pre-Listening – Office and Store Roles · 20 Listening – Different Perspectives on Finance Skills · 21 True/False – Finance Skills and Development · 22 Listening – Developing Skills Through Experience · 23 Listening – Personal Stories About Developing Skills
**Part 4 Reading** — 24 Pre-Reading – Your Gifts for Figures · 25 Reading – Security Budget Competency Framework · 26 Text – Qualities That Transform Security Finance Work · 27 Application – Skills for Different Situations · 28 True/False – Finance Skills Development · 29 Discussion – Building Your Skills
**Part 5 Speaking** — 30 Presentation – Essential Skills for Security Finance Work · 31 Role Play – Job Interview for an Asset Controller Position · 32 Discussion – Developing Skills for Accuracy · 33 Role Play – Mentoring Conversation About Accounts
**Part 6 Writing** — 34 Writing – Personal Skills Assessment · 35 Writing – How a Skill Changed Your Work · 36 Writing – Training Program for Security Finance Skills · 37 Writing – Reflection on Building Your Professional Identity
**Part 7 Culture** — 38 Budgeting and Procurement Under Licence Limits in Syria · 39 Discussion – Mutual Learning Between Finance and Security Staff
**Part 8 Review** — 40 Unit 4 Summary – Skills and Qualities · 41 Integrated Assessment – Unit 4 Mastery

### Unit 5 · The Incident Response Cycle — sequencing, conditionals, passive, purpose
**Voices:** Security Officer | IT Manager | Help-Desk Officer | All Staff ·
**Tracks:** officers explain response · the grammar of response discussion ·
officers explain challenges · perspectives on response · response lessons
learned

**Warm Up** — 1 Incident Response Discussion · 2 Cycle Stages Matching · 3 Incident Response Multiple Choice · 4 Discussion – Challenges in Incident Response · 5 Cycle Phases Classification
**Part 1 Vocabulary** — 6 Detection and Response Terms Matching · 7 Response Cycle Components Table · 8 Response Terms Fill-in Blanks · 9 Incident Response in Context – Fact Questions · 10 Discussion – Your Experience Responding · 11 Listening – Security Officers Explain Response · 12 Response Cycle Summary – Multiple Choice
**Part 2 Grammar** — 13 Sequencing Words for Cycle Steps · 14 Conditional Sentences About Response · 15 Passive Voice for Office Activities · 16 Expressing Purpose with "to" and "in order to" · 17 Listening – Grammar of Response Discussion · 18 Grammar Review – Response Expressions
**Part 3 Listening** — 19 Pre-Listening – Incident Types Discussion · 20 Listening – Officers Explain Challenges · 21 True/False – Incident Response Practices · 22 Listening – Different Perspectives on Response · 23 Listening – Response Lessons Learned
**Part 4 Reading** — 24 Pre-Reading – Recovery Success Discussion · 25 Reading – The Response Cycle in Detail · 26 Reading – User-Centred Response · 27 Application – Response for Different Contexts · 28 True/False – Response Principles · 29 Discussion – Creating a Function That Lasts
**Part 5 Speaking** — 30 Presentation – The Incident Response Process · 31 Role Play – Incident Team Meeting · 32 Discussion – Your Own Response Ideas · 33 Role Play – Explaining a Response Plan to Staff
**Part 6 Writing** — 34 Writing – Incident Response Plan Outline · 35 Writing – Reflecting on User Feedback · 36 Writing – Solving a Containment Challenge · 37 Writing – Your Vision for the Function
**Part 7 Culture** — 38 Keeping Services Running in Syrian Conditions · 39 Discussion – Learning from Syrian Resourcefulness
**Part 8 Review** — 40 Unit 5 Summary – Response Terms and Concepts · 41 Integrated Assessment – Unit 5 Mastery

### Unit 6 · Working with Providers and Suppliers — cooperation structures, agreement, passive
**Voices:** Security Officer | Provider Engineer | Supplier Representative | All Staff ·
**Tracks:** partnership stories from providers · partnership vocabulary in use ·
stakeholder perspectives · honest communication in partnership · building
partnerships over time

**Warm Up** — 1 Provider Relationship Discussion · 2 Stakeholder Roles Matching · 3 Partnership Principles Multiple Choice · 4 Discussion – Conflict and Collaboration · 5 Stakeholder Interests Classification
**Part 1 Vocabulary** — 6 Provider and Supplier Terms Matching · 7 Building Trust with Suppliers Table · 8 Liaison Terms Fill-in · 9 Supplier Work in Context – Fact Questions · 10 Discussion – Your Experience with Cooperation · 11 Listening – Partnership Stories from Providers · 12 Partnership Summary – Multiple Choice
**Part 2 Grammar** — 13 Expressing Partnership with "Together" and "With" · 14 Expressing Agreement and Disagreement · 15 Passive Voice for Shared Decisions · 16 Expressing Appreciation and Recognition · 17 Listening – Partnership Vocabulary in Use · 18 Grammar Review – Partnership Communication
**Part 3 Listening** — 19 Pre-Listening – Challenges in Partnership · 20 Listening – Stakeholder Perspectives · 21 True/False – Partnership Principles · 22 Listening – Honest Communication in Partnership · 23 Listening – Building Partnerships Over Time
**Part 4 Reading** — 24 Pre-Reading – What Makes Partnerships Work · 25 Reading – Models of Provider Engagement · 26 Reading – Coordination Across Sections · 27 Application – Building Inclusive Partnerships · 28 True/False – Cross-Functional Partnerships · 29 Discussion – Creating Win-Win Partnerships
**Part 5 Speaking** — 30 Presentation – Building and Maintaining Partnerships · 31 Role Play – Managing a Late Response · 32 Discussion – Your Role in Creating Partnerships · 33 Role Play – Explaining Your Approach to a Director
**Part 6 Writing** — 34 Writing – Service Agreement Outline · 35 Writing – Reflecting on Partnership Learning · 36 Writing – Handling a Partnership Problem · 37 Writing – Your Vision for Joint Working
**Part 7 Culture** — 38 Syrian Values of Cooperation and Trust · 39 Discussion – Respecting Culture in Partnerships
**Part 8 Review** — 40 Unit 6 Summary – Partnership Concepts · 41 Integrated Assessment – Unit 6 Mastery

### Unit 7 · User Support, Awareness and Service — cause and effect, purpose, concession
**Voices:** Help-Desk Officer | Security Officer | Staff Member | All Staff ·
**Tracks:** help-desk staff stories · service language · overcoming service
barriers · integrating support and replies · user impact from better service

**Warm Up** — 1 Help-Desk Challenges Discussion · 2 Help-Desk Activities Matching · 3 User Service Multiple Choice · 4 Discussion – Combining Support and Awareness · 5 Service Factors Classification
**Part 1 Vocabulary** — 6 Contact Routes Matching · 7 Service Standards a Function Can Set Table · 8 Support and Awareness Terminology Fill-in · 9 Service Models – Fact Questions · 10 Discussion – Integrated Service Models · 11 Listening – Help-Desk Staff Stories · 12 Service Quality Multiple Choice
**Part 2 Grammar** — 13 Expressing Relationships Between Service and Result · 14 Cause and Effect in User Confidence · 15 Expressing Purpose and Benefit · 16 Describing Challenges and Solutions · 17 Listening – Service Language · 18 Grammar Review – Service and Outcome
**Part 3 Listening** — 19 Pre-Listening – Barriers to Good Service · 20 Listening – Overcoming Service Barriers · 21 True/False – Support and Awareness Work · 22 Listening – Integrating Support and Replies · 23 Listening – User Impact from Better Service
**Part 4 Reading** — 24 Pre-Reading – Service Indicators · 25 Reading – User-First Service Philosophy · 26 Reading – Service Quality Standards · 27 Application – Integrated System Assessment · 28 True/False – Integration Principles · 29 Discussion – Designing Integrated Systems
**Part 5 Speaking** — 30 Presentation – Building Integrated Support and Awareness · 31 Role Play – Coordinating the Desk and the Records Office · 32 Discussion – Your Vision for User Service · 33 Role Play – Advocating for Service Investment
**Part 6 Writing** — 34 Writing – Support and Awareness Plan · 35 Writing – Addressing Integration Challenges · 36 Writing – Impact of Better Service on Users · 37 Writing – Vision for a Trusted Function
**Part 7 Culture** — 38 Service and Patience in Syrian Perspective · 39 Discussion – Culturally Appropriate Awareness Training
**Part 8 Review** — 40 Unit 7 Summary – Support and Awareness Concepts · 41 Integrated Assessment – Unit 7 Mastery

### Unit 8 · Performance Measurement and Reporting — past tense for results, comparison, question forms
**Voices:** Security Officer | IT Manager | Director | All Staff ·
**Tracks:** reporting challenges · improvement stories · continuous improvement ·
indicator discussion · result interpretation

**Warm Up** — 1 Performance and Reporting Discussion · 2 Report Types Matching · 3 Types of Evidence Discussion · 4 Report Use Discussion · 5 Reporting Activity Classification
**Part 1 Vocabulary** — 6 Reporting Terms Matching · 7 Indicator Types Matching · 8 Reporting Vocabulary Multiple Choice · 9 Reporting Purpose Discussion · 10 Reporting Purpose Multiple Choice · 11 Indicator Levels Matching · 12 Incident Severity Classification
**Part 2 Grammar** — 13 Expressing Results and Change · 14 Causality Language for Results · 15 Comparison Language for Indicators · 16 Conditional Language for Future Reporting · 17 Question Formation for Review Meetings · 18 Passive Voice in Reporting Results
**Part 3 Listening** — 19 Listening to Reporting Challenges · 20 Listening to Improvement Stories · 21 Listening to Continuous Improvement Discussion · 22 Listening to Indicator Discussion · 23 Listening to Result Interpretation
**Part 4 Reading** — 24 Reading About Reporting Systems · 25 Reading About Indicators · 26 Reading About Log Quality · 27 Reading About Learning from Reports · 28 Reading About Root Cause Logic · 29 Reading About Fairness in Reporting
**Part 5 Speaking** — 30 Role Play – Discussing Monthly Results · 31 Presentation – Creating Learning Cultures · 32 Discussion – Using Data for Decision Making · 33 Role Play – Receiving Critical Feedback
**Part 6 Writing** — 34 Writing a Monthly Security Report Summary · 35 Writing a Data Use Plan · 36 Writing an Indicator Set · 37 Writing a Reporting Proposal
**Part 7 Culture** — 38 Syrian Values – Hisba and Honest Measure · 39 Syrian Values – Insaf in Using Findings
**Part 8 Review** — 40 Unit 8 Concepts Review Matching · 41 Reporting System Purposes Review

### Unit 9 · Growth, Change and Scaling the Security Function — future forms, conditionals, comparatives
**Voices:** Security Officer | IT Manager | Branch Officer | All Staff ·
**Tracks:** growth experience · supplier success · management readiness ·
the cost of growth strategies · an implementation success story

**Warm Up** — 1 Function Growth Challenges Discussion · 2 Growth Definition Matching · 3 Speed vs Standards Discussion · 4 Transition to Delegated Management Discussion · 5 Delegation Classification
**Part 1 Vocabulary** — 6 Growth and Change Terminology Matching · 7 Growth Approaches Matching · 8 Growth Success Factors Multiple Choice · 9 Capability Building Concept Discussion · 10 Replication vs Adaptation Multiple Choice · 11 Succession Plan Elements Matching · 12 Growth Barriers Classification
**Part 2 Grammar** — 13 Future Plans for Growth · 14 Conditional Language for Lasting Growth · 15 Presenting a Growth Strategy · 16 Describing Capability Outcomes · 17 Questions About Succession Plans · 18 Comparative Language for Growth Approaches
**Part 3 Listening** — 19 Listening to Growth Experience · 20 Listening to Supplier Success · 21 Listening to Management Readiness Assessment · 22 Listening to Cost of Growth Strategies · 23 Listening to Implementation Success Story
**Part 4 Reading** — 24 Reading About Growth Theory · 25 Reading About Growth Requirements · 26 Reading About Staff Participation · 27 Reading About Succession Plans · 28 Reading About Adaptation vs Replication · 29 Reading About Managed Service Arrangements
**Part 5 Speaking** — 30 Role Play – Planning an Expansion · 31 Presentation – Growth Strategy · 32 Discussion – Overcoming Growth Barriers · 33 Role Play – Budget Funding Negotiation
**Part 6 Writing** — 34 Writing a Growth Plan · 35 Writing an Expansion Strategy · 36 Writing a Succession Memo · 37 Writing a Managed Service Proposal
**Part 7 Culture** — 38 Syrian Values – Growth with Intention · 39 Syrian Values – Stewardship
**Part 8 Review** — 40 Unit 9 Concepts Review Matching · 41 Growth Success Factors Review

### Unit 10 · Security Advocacy and Professional Communication — persuasive language, conditionals, argument
**Voices:** Security Officer | Official | Association Member | All Staff ·
**Tracks:** a user's voice · an official's perspective · association building ·
campaign strategy · results reflection

**Warm Up** — 1 What Is Security Advocacy Discussion · 2 Levels of Advocacy Matching · 3 Systems Thinking Discussion · 4 Working in Associations Discussion · 5 Evidence-Based Advocacy Classification
**Part 1 Vocabulary** — 6 Advocacy Terminology Matching · 7 Policy Change Terminology Matching · 8 Advocacy Approaches Multiple Choice · 9 Stakeholder Analysis Concept Discussion · 10 Rules-Based Approaches Multiple Choice · 11 Advocacy Tools Matching · 12 Advocacy Strategy Components Classification
**Part 2 Grammar** — 13 Persuasive Language for Security Messages · 14 Conditional Language for Policy Analysis · 15 Argument Structure for Security Briefs · 16 Reporting Users' Concerns · 17 Academic Language for Study Reports · 18 Inclusive Language in Joint Documents
**Part 3 Listening** — 19 Listening to a User's Voice · 20 Listening to an Official's Perspective · 21 Listening to Association Building Experience · 22 Listening to Campaign Strategy Discussion · 23 Listening to Results Reflection
**Part 4 Reading** — 24 Reading About Advocacy Impact · 25 Reading About Change Theories · 26 Reading About Systems Change Theory · 27 Reading About Evidence Use in Advocacy · 28 Reading About Influence in a Sector · 29 Reading About Measuring Advocacy Impact
**Part 5 Speaking** — 30 Role Play – Making the Case to Officials · 31 Presentation – Campaign Launch · 32 Discussion – Overcoming Advocacy Barriers · 33 Role Play – Asking Other Offices to Take Part
**Part 6 Writing** — 34 Writing a Campaign Strategy · 35 Writing a Policy Brief for Decision Makers · 36 Writing an Association Charter · 37 Writing Messages for a Public Campaign
**Part 7 Culture** — 38 Syrian Values – Consultation · 39 Syrian Values – Justice
**Part 8 Review** — 40 Unit 10 Concepts Review Matching · 41 Advocacy Effectiveness Review

---

## 6 · Fidelity criteria

1. The same 5,455 elements in the same reading order.
2. The same 7,346 paragraphs, including all 2,300 blank spacers.
3. The same 264 tables, 953 rows and 2,155 cells.
4. The same 89 part bars with the same fills, including the Part 6/7/8 rotation.
5. The same 137 instruction boxes with the same per-part tints.
6. The same 407 Heading3 exercise titles, each carrying the source's second,
   undefined `[object Object]` style.
7. The same 171 reading panels and 224 fill-in blanks.
8. The same 92 track heads, 70 audio chips and 132 play notes.
9. The same 620 answers under the same 329 heads, numbered to the same exercises
   and titled from each unit's own exercise list.
10. The same voice colouring: 65 female-voice and 506 male-voice paragraphs.
11. The same 120 🔊 and 36 📝.
12. Answer-key density within a few per cent of the template's 25,758 words.
13. No answer more than eight words shorter than its counterpart.
14. Every transcript printed twice — inside its unit and in Appendix A —
    identically in both places.
15. Every section opening on the same page as the template's.
16. ⚠ **And one criterion this book adds: no exercise, transcript, answer or
    sample asks a learner to attack, bypass or break into anything.** The
    defensive line of §2 is checked over the built document, not just intended.

---

## 7 · Build and verification

```
python3 build/compile.py                       # content/*.txt -> dist/…_A2.docx
LOG_SRC=<template.docx> python3 qa/check.py    # 30 structural metrics
python3 qa/spacing.py  <template.docx>         # every element's full layout
python3 qa/runs.py     <template.docx>         # run structure, run by run
python3 qa/answers.py  <template.docx>         # per-answer parity in Appendix B
python3 qa/partial.py  <template.docx>         # progressive parity while writing
python3 qa/unitdiff.py <src> <cand> <section>  # section-by-section element lists
python3 qa/scripts.py  content                 # Appendix A against each unit's transcripts
python3 qa/outline.py  <doc>                   # dump any document in reading order
python3 qa/anyline.py  …                       # refuses a replacement that changes a line's tag
```

`LOG_SRC` is the Tour Guides Syria book, the most recently delivered twin.
`build/` and `qa/` are copied from it unchanged; nothing in the toolchain is
rewritten for this book.

| pass | target |
| --- | --- |
| 30 structural metrics vs the template | all identical |
| full layout, element by element | 5,455/5,455, 0 differ |
| run formatting | 0 differ |
| per-section element lists (10 units + 2 appendices) | 0 diff lines |
| answers more than 8 words short | 0 of 620 |
| answer-key density | within a few per cent of 25,758 words |
| transcripts printed in two places | 18 of 18 identical |
| LibreOffice render | 252 pages |
| package integrity | 10 parts, every XML part well-formed |
| defensive-line sweep (§6.16) | 0 hits |

---

## 8 · How it gets written

| phase | work |
| ---: | --- |
| 0 | Tree scaffolded from Tour Guides Syria: `build/`, `qa/`, and the `content/*.txt` tag skeleton with every `@TAG` and spacer held fixed. Front matter written. |
| 1 | **Units 1–5.** Each unit element-exact before the next is started; `qa/partial.py` run after every unit. |
| 2 | **Units 6–10.** |
| 3 | **Appendix A** (every transcript copied from the units by `qa/scripts.py`, never retyped) and **Appendix B** (620 answers under 329 heads). |
| 4 | Full QA, the render, the page count, the defensive-line sweep, `PLAN.md` updated with the measured results, commit and push. |

Each phase lands on the development branch as its own commit, as the eight
earlier ESP books did.

---

## 9 · Template quirks to reproduce

1. The instruction-box tint rotates out of order in the last three parts: Part 6
   takes Part 8's tint, Part 7 takes Part 6's and Part 8 takes Part 7's, in every
   unit.
2. Unit 1 has no Part 6, and so 37 exercises where every other unit has 41.
3. Unit 2 carries four one-off dialogue elements that appear nowhere else — the
   same narrator text printed twice in two different treatments.
4. Every exercise heading carries a second, undefined `[object Object]`
   paragraph style, which is what makes the headings render as body text.
5. Short multiple choices lay their options out inside the stem paragraph,
   behind fifteen spaces and a line break, instead of as option paragraphs.
6. The answer-key strip sizes its cells from how many answers it carries and
   leaves the unused columns as 26-twip slivers.
7. Speaker voice colours are assigned per track rather than per role, so the
   same job title is blue in one unit and purple in another.
8. `docDefaults` names Times New Roman and leaves `pPrDefault` empty; the single
   list defines nine bullet levels cycling ● ○ ■ as literal characters.

---

## 10 · What is not in this book

- **No International edition.** Derivable afterwards from the same skeleton,
  ten countries, one per unit, as every other ESP twin was.
- **No Book 2.** The B1 continuation — longer readings, incident write-ups at
  length, the officer who has to argue rather than report — is a separate plan.
- **No teacher's book, no appendix C.** The template has two appendices and so
  does this.
- **No attack content.** See §2 and §6.16.
