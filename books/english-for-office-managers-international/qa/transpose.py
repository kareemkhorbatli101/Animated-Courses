#!/usr/bin/env python3
"""transpose.py — move the ten units of the Office Managers book from Syria to
ten other non-English-speaking countries.

Each unit has a generic layer (country name, adjective, three cities) and a list
of one-off substitutions for the business registry, the social insurance body,
the labour authorities, the national context and the cultural terms, none of
which can be renamed mechanically.  The one-offs run first so that a phrase
naming Syria is rewritten whole before the generic layer touches the words
inside it.  Appendix A and Appendix B are transposed section by section, so each
unit's answers and transcripts move with the unit they belong to.
"""
import re
import sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else "english-for-office-managers-international/content"

# country, adjective, first city, second city, third city
C = {
 1:  ("Vietnam", "Vietnamese", "Hanoi", "Da Nang", "Can Tho"),
 2:  ("Türkiye", "Turkish", "İstanbul", "İzmir", "Bursa"),
 3:  ("Mexico", "Mexican", "Mexico City", "Guadalajara", "Monterrey"),
 4:  ("Morocco", "Moroccan", "Casablanca", "Agadir", "Meknès"),
 5:  ("Indonesia", "Indonesian", "Jakarta", "Surabaya", "Medan"),
 6:  ("Brazil", "Brazilian", "São Paulo", "Curitiba", "Recife"),
 7:  ("Egypt", "Egyptian", "Cairo", "Alexandria", "Damietta"),
 8:  ("Thailand", "Thai", "Bangkok", "Chiang Mai", "Hat Yai"),
 9:  ("Poland", "Polish", "Warsaw", "Poznań", "Gdańsk"),
 10: ("Kenya", "Kenyan", "Nairobi", "Mombasa", "Nakuru"),
}

# the registry a company is entered in before it may trade
REG = {
 1:  "national business register",
 2:  "trade registry",
 3:  "commercial registry",
 4:  "commercial register",
 5:  "business register",
 6:  "commercial registry",
 7:  "commercial register",
 8:  "business register",
 9:  "National Court Register",
 10: "business register",
}

# the body every employee is insured through
INS = {
 1:  "Vietnam Social Security",
 2:  "Social Security Institution",
 3:  "Mexican Social Security Institute",
 4:  "National Social Security Fund",
 5:  "Social Security Administering Body",
 6:  "National Social Security Institute",
 7:  "National Organization for Social Insurance",
 8:  "Social Security Office",
 9:  "Social Insurance Institution",
 10: "National Social Security Fund",
}

# the authorities that set the rules on contracts, leave and hours
LAB = {
 1:  "labour departments",
 2:  "provincial labour directorates",
 3:  "labour boards",
 4:  "labour inspectorates",
 5:  "manpower offices",
 6:  "regional labour offices",
 7:  "labour directorates",
 8:  "provincial labour offices",
 9:  "labour inspectorates",
 10: "labour offices",
}

ONE_OFF = {
 1: [
  ("Syria has a long tradition of written administration and registered trade. A company is entered in the commercial register before it may trade, the General Establishment for Social Insurance records every employee, and the labour directorates and the Damascus Chamber of Commerce certify the documents an office must produce.",
   "Vietnam has a long tradition of written administration and registered trade. A company is entered in the national business register before it may trade, Vietnam Social Security records every employee, and the labour departments and the Hanoi Chamber of Commerce certify the documents an office must produce."),
  ("Many offices in Syria belong to family firms. Some serve textile and food companies, where the office keeps the orders, the staff records and the correspondence. Others serve clinics, schools, contractors and trading houses, where every letter needs an official stamp. Since the conflict, much office work has gone into reconstructing records that were lost and keeping contact with customers abroad.",
   "Many offices in Vietnam belong to family firms. Some serve garment and seafood companies, where the office keeps the orders, the staff records and the correspondence. Others serve clinics, schools, contractors and trading houses, where every letter needs an official stamp. As exports have risen, much office work has gone into organising records that were never indexed and keeping contact with customers abroad."),
  ("Office staff in Syria often face challenges including interrupted power, equipment that is hard to repair, and paper records that cannot easily be replaced. Despite these obstacles, they remain committed to answering every letter and rebuilding confidence in Syrian administration.",
   "Office staff in Vietnam often face challenges including crowded premises, humidity that damages paper, and records held in three places at once. Despite these obstacles, they remain committed to answering every letter and building confidence in Vietnamese administration."),
  ("a trading company in Damascus called Qasioun Trading", "a trading company in Hanoi called Sông Hồng Trading"),
  ("1. Qasioun Trading |", "1. Sông Hồng Trading |"),
  ("Syria has a long administrative history. Damascus and Aleppo kept registers of trade for centuries, and the Ottoman registry offices recorded property and contracts for four hundred years. Formal regulation began with the commercial register, which records every firm that trades, and with the chambers of commerce that certify documents for merchants.",
   "Vietnam has a long administrative history. Hanoi and Hội An kept registers of trade for centuries, and the imperial record offices at Huế recorded land and contracts for four hundred years. Formal regulation began with the business register, which records every firm that trades, and with the chambers of commerce that certify documents for merchants."),
  ("1. What recorded property and contracts in Syria for four hundred years?",
   "1. What recorded land and contracts in Vietnam for four hundred years?"),
  ("1. The Ottoman registry offices recorded property and contracts for four hundred years.",
   "1. The imperial record offices at Huế recorded land and contracts for four hundred years."),
  ("The Ottoman registry offices recorded property in Syria to a procedure that was kept for centuries.",
   "The imperial record offices at Huế recorded land in Vietnam to a procedure that was kept for centuries."),
  ("In Syria, Damascus and Aleppo kept registers of trade for centuries, and the commercial register now records every company that trades.",
   "In Vietnam, Hanoi and Hội An kept registers of trade for centuries, and the business register now records every company that trades."),
  ("After the conflict, office staff have had to rebuild records that were damaged or lost. They reconstruct files, obtain duplicate certificates, retrain clerks, and persuade old customers that the firm still answers its letters.",
   "As the economy has grown, office staff have had to rebuild records that were scattered or incomplete. They reconstruct files, obtain duplicate certificates, retrain clerks, and persuade old customers that the firm still answers its letters."),
  ("Records managers work to keep files safe despite interrupted power and old buildings. Purchasing officers travel long distances to obtain one spare part.",
   "Records managers work to keep files safe despite humidity and crowded buildings. Purchasing officers travel long distances to obtain one spare part."),
  ("The work of office staff is challenging. They operate with scarce equipment and often without reliable power. But they remain committed to answering every letter and rebuilding confidence in Syrian administration.",
   "The work of office staff is challenging. They operate with thin margins and often in crowded premises. But they remain committed to answering every letter and building confidence in Vietnamese administration."),
  ("Today, many kinds of office work are carried out in Syria. Some staff run the administration of small family firms. Others work with international partners and buyers. Together they address critical needs in employment, record-keeping, correspondence and the reconstruction of files that were lost.",
   "Today, many kinds of office work are carried out in Vietnam. Some staff run the administration of small family firms. Others work with international partners and buyers. Together they address critical needs in employment, record-keeping, correspondence and the indexing of files that were never ordered."),
 ],
 2: [
  ("The office sector in Syria has changed significantly in response to the need to reconstruct records that were lost or damaged. Large manufacturers, ministries, clinics and small family firms all employ office staff. These staff serve both their own departments and customers abroad. Working in Syria's offices requires persistence because power, equipment and spare parts are all uncertain.",
   "The office sector in Türkiye has changed significantly in response to the need to keep records for customers in many countries at once. Large manufacturers, ministries, clinics and small family firms all employ office staff. These staff serve both their own departments and customers abroad. Working in Türkiye's offices requires persistence because deadlines, inspections and currency terms are all uncertain."),
  ("In neighboring countries like Lebanon and Jordan, companies employ staff who keep records for both local use and export documentation. The work is challenging but essential. These organisations demonstrate how dedicated professionals keep working in hard times. Syrian office staff are known in the region for their resourcefulness and persistence.",
   "In neighboring countries like Bulgaria and Georgia, companies employ staff who keep records for both local use and export documentation. The work is challenging but essential. These organisations demonstrate how dedicated professionals keep working in hard times. Turkish office staff are known in the region for their resourcefulness and persistence."),
  ("Many Syrian professionals who studied abroad chose to return to run administrations at home. They sacrifice higher salaries in wealthy countries to keep records in order in their own towns.",
   "Many Turkish professionals who studied abroad chose to return to run administrations at home. They sacrifice higher salaries in wealthy countries to keep records in order in their own towns."),
 ],
 3: [
  ("Syria has a long administrative tradition and also a demanding compliance situation. A company must be entered in the commercial register before it may trade, and the labour directorates and the General Establishment for Social Insurance set the rules on contracts, leave and contributions. Export customers add their own requirements on top, so an office may need a certificate from the chamber of commerce, a certified translation, and a buyer's own forms at the same time. Compliance is complicated by records lost during the conflict, licences that expire at different times, and the cost of professional advice.",
   "Mexico has a long administrative tradition and also a demanding compliance situation. A company must be entered in the commercial registry before it may trade, and the labour boards and the Mexican Social Security Institute set the rules on contracts, leave and contributions. Export customers add their own requirements on top, so an office may need a certificate from the chamber of commerce, a certified translation, and a buyer's own forms at the same time. Compliance is complicated by records held in several registries at once, licences that expire at different times, and the cost of professional advice."),
  ("2. What is the scale of Syria's missing-paperwork problem?", "2. What is the scale of Mexico's missing-paperwork problem?"),
  ("Syria registers employers with the labour directorates and insures every employee through the national establishment.",
   "Mexico registers employers with the labour boards and insures every employee through the national institute."),
 ],
 4: [
  ("Process knowledge means understanding how the work is actually done and paid for. Office staff in Syria must understand generator fuel, equipment repair, certified translation, and the real cost of transport under difficult conditions.",
   "Process knowledge means understanding how the work is actually done and paid for. Office staff in Morocco must understand electricity charges, equipment repair, certified translation, and the real cost of transport between cities."),
  ("Syrian office teams demonstrate exceptional judgement, skill, and commitment despite extreme difficulties. They work with prices that can change between the quotation and the delivery, re-pricing in stages and recording every assumption. They keep accounts through power cuts, writing by hand and entering the figures later.",
   "Moroccan office teams demonstrate exceptional judgement, skill, and commitment despite real difficulties. They work with prices that can change between the quotation and the delivery, re-pricing in stages and recording every assumption. They keep accounts through long seasonal peaks, writing by hand and entering the figures later."),
  ("Syrian office staff understand local costs deeply. They know stationery prices, generator fuel, repair charges and the real cost of certified translation as these behave in local circumstances.",
   "Moroccan office staff understand local costs deeply. They know stationery prices, electricity charges, repair costs and the real cost of certified translation as these behave in local circumstances."),
  ("Many have rebuilt their own records yet continue reporting honestly.", "Many have rebuilt their own filing systems yet continue reporting honestly."),
 ],
 5: [
  ("Syrian offices face unique challenges in planning and management. Interrupted power, difficulty importing spare parts, and equipment that cannot easily be repaired create real obstacles. Despite these difficulties, Syrian and international staff successfully run the administrations of factories, clinics, schools and trading houses.",
   "Indonesian offices face unique challenges in planning and management. Distance between islands, difficulty importing spare parts, and equipment that cannot easily be repaired create real obstacles. Despite these difficulties, Indonesian and international staff successfully run the administrations of factories, clinics, schools and trading houses."),
  ("Good assessment in Syria includes understanding power interruptions and the fairness that lets every section be judged by the same rules.",
   "Good assessment in Indonesia includes understanding shipping times between islands and the fairness that lets every section be judged by the same rules."),
  ("They consider timing—not starting a long printing job before a known power cut.",
   "They consider timing—not starting a long printing job before a known holiday week."),
  ("Durable offices in Syria build local capacity. Outside support will eventually end. Successful organisations train Syrian staff, use methods that can be run with locally available tools, and document so that staff turnover does not lose the knowledge.",
   "Durable offices in Indonesia build local capacity. Outside support will eventually end. Successful organisations train Indonesian staff, use methods that can be run with locally available tools, and document so that staff turnover does not lose the knowledge."),
  ("Successful administration in Syria adapts to local values and working practices. Syrian culture values the family, respect for elders, religious faith, personal honour, and craft mastery.",
   "Successful administration in Indonesia adapts to local values and working practices. Indonesian culture values the family, respect for elders, religious faith, social harmony, and craft mastery."),
  ("In Syria, electricity sometimes becomes unavailable because of generation shortages, network difficulties, or sudden fuel price rises. This happened midway through a year when the power for a records room could not be obtained.",
   "In Indonesia, equipment sometimes becomes unavailable because of import restrictions, shipping difficulties, or sudden price rises. This happened midway through a year when the parts for a records room could not be obtained."),
  ("Power shortages are common—electricity may be unavailable or fail at a very different hour.",
   "Supply shortages are common—equipment may be unavailable or arrive at a very different price."),
  ("Challenge: Power Shortages During the Year", "Challenge: Supply Shortages During the Year"),
  ("2. When Power Fails:", "2. When Supplies Fail:"),
  ("3. Learning and Improvement: I would analyse why the power failed—generation shortage? network? price?",
   "3. Learning and Improvement: I would analyse why the supply failed—import restriction? shipping? price?"),
 ],
 6: [
  ("Syrian commercial culture has deep traditions of trust, reputation and long relationships that align strongly with partnership approaches in administration.",
   "Brazilian commercial culture has deep traditions of trust, reputation and long relationships that align strongly with partnership approaches in administration."),
  ("The concept of \"karama\" or dignity is central to Syrian culture. Karama means being treated with respect and keeping personal honour. Partnership approaches honour karama by explaining a delay with a reason rather than simply failing to deliver. A broken promise without explanation damages karama, and a supplier who feels slighted will not answer you again. Genuine partnership respects karama and fits commercial values.",
   "The idea of \"respeito\" or respect is central to Brazilian culture. Respeito means being treated as a person and keeping personal standing. Partnership approaches honour respeito by explaining a delay with a reason rather than simply failing to deliver. A broken promise without explanation damages respeito, and a supplier who feels slighted will not answer you again. Genuine partnership respects respeito and fits commercial values."),
  ("Syrian trade values the long relationship over the single order.", "Brazilian trade values the long relationship over the single order."),
  ("This means a Syrian supplier responds strongly to being treated as a long-term partner",
   "This means a Brazilian supplier responds strongly to being treated as a long-term partner"),
  ("Islamic teachings about honest dealing strengthen the partnership orientation. Islam teaches that a seller must not conceal a defect and must describe goods truthfully.",
   "Church and community teaching about honest dealing strengthens the partnership orientation. The tradition holds that a seller must not conceal a defect and must describe goods truthfully."),
  ("Syrian hospitality shapes how a negotiation is conducted. A visiting supplier is welcomed and offered coffee. However, a guest is expected to respect the host's standards.",
   "Brazilian hospitality shapes how a negotiation is conducted. A visiting supplier is welcomed and offered coffee. However, a guest is expected to respect the host's standards."),
  ("1. What does karama mean and how does partnership honour this value?",
   "1. What does respeito mean and how does partnership honour this value?"),
  ("2. How do Islamic teachings support working with staff and suppliers?",
   "2. How does community teaching support working with staff and suppliers?"),
  ("@EX Part 7: Syrian Values of Cooperation and Administration", "@EX Part 7: Brazilian Values of Cooperation and Administration"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values of Cooperation and Administration",
   "@ANSHEAD Exercise 38: Part 7: Brazilian Values of Cooperation and Administration"),
  ("@INSTR Read about how Syrian cultural values support office partnerships and answer questions.",
   "@INSTR Read about how Brazilian cultural values support office partnerships and answer questions."),
  ("Syrian Cultural Values Supporting Collaboration", "Brazilian Cultural Values Supporting Collaboration"),
  ("Islamic teaching that a trader must not conceal a fault and must describe the goods truthfully supports terms that ask a supplier to disclose a problem rather than hide it until it is found.",
   "Community teaching that a trader must not conceal a fault and must describe the goods truthfully supports terms that ask a supplier to disclose a problem rather than hide it until it is found."),
  ("1. Karama means dignity and standing in the office, and partnership respects it by explaining every delay with a reason",
   "1. Respeito means respect and standing in the office, and partnership respects it by explaining every delay with a reason"),
  ("Between: Qasioun Trading and the Midan Suppliers' Association",
   "Between: Paulista Trading and the Centro Suppliers' Association"),
  ("   Qasioun Trading:", "   Paulista Trading:"),
  ("   Midan Suppliers' Association:", "   Centro Suppliers' Association:"),
  ("   - 2 members from Qasioun Trading", "   - 2 members from Paulista Trading"),
  ("Successful cross-functional teams in Syria share scarce resources.", "Successful cross-functional teams in Brazil share scarce resources."),
  ("The Syrian context especially needs this collaborative approach.", "The Brazilian context especially needs this collaborative approach."),
 ],
 7: [
  ("In Syria, direct relationships have become vital for keeping contact when telephone lines are unreliable.",
   "In Egypt, direct relationships have become vital for keeping contact when a department changes its procedure."),
  ("Syria's service challenges stem from infrastructure and cost. Power is interrupted, telephone lines fail, prices move between quotation and purchase, and equipment is hard to repair.",
   "Egypt's service challenges stem from scale and cost. Counters are crowded, telephone lines are busy, prices move between quotation and purchase, and equipment is hard to repair."),
  ("Syrian traditions provide a strong foundation supporting integrated reception and correspondence.",
   "Egyptian traditions provide a strong foundation supporting integrated reception and correspondence."),
  ("The idea of \"amanah\" or trust held on behalf of others is central to Syrian practice.",
   "The idea of \"amanah\" or trust held on behalf of others is central to Egyptian practice."),
  ("Service in Syrian tradition is a moral obligation, not only a commercial calculation.",
   "Service in Egyptian tradition is a moral obligation, not only a commercial calculation."),
  ("Syrian teaching emphasizes hospitality as a shared responsibility.", "Egyptian teaching emphasizes hospitality as a shared responsibility."),
  ("Syrian craft ethics require high standards.", "Egyptian craft ethics require high standards."),
  ("Syrian Values Supporting Service and Hospitality", "Egyptian Values Supporting Service and Hospitality"),
  ("Office: A trading firm outside Homs", "Office: A trading firm outside Damietta"),
 ],
 8: [
  ("Justice demands that reports examine whether the clerks shared in a good year, whether suppliers were paid on the agreed terms, and whether small departments received the same service as large ones.",
   "Justice asks whether the clerks shared in a good year, whether suppliers were paid on the agreed terms, and whether small departments were served like large ones."),
  ("@EX Part 7: Syrian Values - Hisba and Honest Measure", "@EX Part 7: Thai Values - Honest Measure"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values - Hisba and Honest Measure",
   "@ANSHEAD Exercise 38: Part 7: Thai Values - Honest Measure"),
  ("@INSTR Discuss Syrian traditions of market oversight in office reporting.",
   "@INSTR Discuss Thai traditions of market oversight in office reporting."),
  ("1. In Syrian markets, the muhtasib checked weights and scales and answered to all. How does this connect to honest counting and reporting?",
   "1. In Thai markets, the royal inspector checked weights and scales and answered to all. How does this connect to honest counting and reporting?"),
  ("@EX Part 7: Syrian Values - Insaf in Using Findings", "@EX Part 7: Thai Values - Yutitham in Using Findings"),
  ("@ANSHEAD Exercise 39: Part 7: Syrian Values - Insaf in Using Findings",
   "@ANSHEAD Exercise 39: Part 7: Thai Values - Yutitham in Using Findings"),
  ("@INSTR Connect Syrian principles of fairness to the fair use of report findings.",
   "@INSTR Connect Thai principles of fairness to the fair use of report findings."),
  ("1. Insaf means giving each person their due. How should this guide the way an office reports and acts on its results?",
   "1. Yutitham means giving each person their due. How should this guide the way an office reports and acts on its results?"),
  ("Hisba means oversight exercised on behalf of everyone, as the muhtasib checked the weights and scales in the market.",
   "Sujarit means honesty owed to everyone, as the royal inspector checked the weights and scales in the market."),
  ("Insaf requires examining whether every part of the office was treated fairly.",
   "Yutitham requires examining whether every part of the office was treated fairly."),
  ("Offices pursuing insaf should ensure findings do not blame clerks for a variance",
   "Offices pursuing yutitham should ensure findings do not blame clerks for a variance"),
  ("Insaf means using figures not to punish but to improve.", "Yutitham means using figures not to punish but to improve."),
  ("Offices embracing hisba view reporting not as a burden", "Offices embracing sujarit view reporting not as a burden"),
  ("Offices committed to insaf view reporting as a fairness tool", "Offices committed to yutitham view reporting as a fairness tool"),
  ("A reporting system embodies this principle by providing transparent evidence of what was promised and delivered.",
   "A reporting system embodies sujarit by providing transparent evidence of what was promised and delivered."),
 ],
 9: [
  ("Owners holding this understanding recognize they are temporary stewards of an office and of the livelihoods it supports.",
   "Owners holding this view recognize they are temporary stewards of an office and the livelihoods it supports."),
  ("@EX Part 7: Syrian Values - Growth with Intention", "@EX Part 7: Polish Values - Growth with Intention"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values - Growth with Intention",
   "@ANSHEAD Exercise 38: Part 7: Polish Values - Growth with Intention"),
  ("@INSTR Connect Syrian community concepts with the growth of an administration.",
   "@INSTR Connect Polish community concepts with the growth of an administration."),
  ("1. In Syrian tradition, \"ta'awun\" means working together so all who share a task benefit. How does this concept relate to growing an administration?",
   "1. In Polish tradition, \"spółdzielczość\" means working together so all who share a task benefit. How does this relate to growing an administration?"),
  ("@EX Part 7: Syrian Values - Stewardship", "@EX Part 7: Polish Values - Stewardship"),
  ("@ANSHEAD Exercise 39: Part 7: Syrian Values - Stewardship", "@ANSHEAD Exercise 39: Part 7: Polish Values - Stewardship"),
  ("@INSTR Discuss Syrian stewardship concepts in lasting administration.",
   "@INSTR Discuss Polish stewardship concepts in lasting administration."),
  ("1. \"Waqf\" in Syrian usage means something set aside so its benefit continues for generations. How does this principle relate to building an office that outlives its founder?",
   "1. \"Dziedzictwo\" in Polish usage means something handed on so its benefit continues for generations. How does this relate to building an office that outlives its founder?"),
  ("Ta'awun suggests that growth should be intentional, purposeful, and rooted in serving the people who will run the office.",
   "Spółdzielczość suggests growth be intentional, purposeful, and rooted in serving the people who will run the office."),
  ("In Syrian usage, waqf makes people stewards responsible for something set aside so its benefit continues.",
   "In Polish usage, dziedzictwo makes people stewards responsible for something handed on so its benefit continues."),
 ],
 10: [
  ("Advocacy is slower than administration and far less certain, but its reach is much wider and its effects last long after one file is approved.",
   "Advocacy is slower and far less certain, but its reach is much wider and its effects last long after one file is approved."),
  ("For an employee-registration campaign, that includes clerks at the directorate, the insurance director, the employers, the banks, the Ministry of Labour, foreign investors, and the chambers of commerce.",
   "For an employee-registration campaign, that includes clerks at the office, the insurance director, the employers, the banks, the Ministry of Labour, foreign investors, and the chambers of commerce."),
  ("@EX Part 7: Syrian Values - Consultation", "@EX Part 7: Kenyan Values - Consultation"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values - Consultation", "@ANSHEAD Exercise 38: Part 7: Kenyan Values - Consultation"),
  ("@INSTR Connect Syrian consultation principles to joint professional work.",
   "@INSTR Connect Kenyan consultation principles to joint professional work."),
  ("1. In Syrian practice, shura means matters are settled by consultation among those affected. How does this relate to associations and change led by the offices themselves?",
   "1. In Kenyan practice, a baraza means matters are settled by consultation among those affected. How does this relate to associations and change led by the offices themselves?"),
  ("@EX Part 7: Syrian Values - Justice", "@EX Part 7: Kenyan Values - Justice"),
  ("@ANSHEAD Exercise 39: Part 7: Syrian Values - Justice", "@ANSHEAD Exercise 39: Part 7: Kenyan Values - Justice"),
  ("1. In Syrian civic tradition, adl means removing unfair treatment and securing each person's due. How does this principle relate to advocacy aimed at changing the rules?",
   "1. In Kenyan civic tradition, haki means removing unfair treatment and securing each person's right. How does this principle relate to advocacy aimed at changing the rules?"),
  ("Shura means that leaders must consult widely before making decisions", "A baraza means that leaders must consult widely before making decisions"),
  ("Shura acknowledges that diverse perspectives improve decisions.", "A baraza acknowledges that diverse perspectives improve decisions."),
  ("Adl-centred advocacy goes beyond registering individual employees", "Haki-centred advocacy goes beyond registering individual employees"),
  ("Adl-guided associations recognize that a failing employment climate is not inevitable",
   "Haki-guided associations recognize that a failing employment climate is not inevitable"),
  ("Pursuing adl means managers align with the smallest employers and the staff",
   "Pursuing haki means managers align with the smallest employers and the staff"),
  ("Pursuing adl may create conflict", "Pursuing haki may create conflict"),
  ("Associations committed to adl view advocacy", "Associations committed to haki view advocacy"),
 ],
}


HITS = {}


def institutions(text, n):
    """Rewrite the registry, the insurance body and the labour authorities."""
    text = text.replace("General Establishment for Social Insurance", INS[n])
    text = text.replace("labour directorates", LAB[n])
    text = text.replace("Labour directorates", LAB[n][0].upper() + LAB[n][1:])
    text = text.replace("labour directorate", LAB[n].rstrip("s"))
    text = text.replace("commercial register", REG[n])
    text = text.replace("Commercial register", REG[n][0].upper() + REG[n][1:])
    return text


def generic(text, n):
    country, adj, c1, c2, c3 = C[n]
    text = re.sub(r"\bSyrians\b", f"{adj}s", text)
    text = re.sub(r"\bSyrian\b", adj, text)
    text = re.sub(r"\bSyria's\b", f"{country}'s", text)
    text = re.sub(r"\bSYRIA\b", country.upper(), text)
    text = re.sub(r"\bSyria\b", country, text)
    text = re.sub(r"\bDamascus\b", c1, text)
    text = re.sub(r"\bAleppo\b", c2, text)
    text = re.sub(r"\bHoms\b", c3, text)
    return text


def apply_unit(text, n):
    for old, new in ONE_OFF.get(n, []):
        if old in text:
            HITS[(n, old)] = HITS.get((n, old), 0) + 1
            text = text.replace(old, new)
    text = institutions(text, n)
    return generic(text, n)


for n in range(1, 11):
    p = f"{ROOT}/unit-{n:02d}.txt"
    s = open(p, encoding="utf-8").read()
    open(p, "w", encoding="utf-8").write(apply_unit(s, n))

for name in ("appendix-a.txt", "appendix-b.txt"):
    p = f"{ROOT}/{name}"
    lines = open(p, encoding="utf-8").read().split("\n")
    unit = 0
    for i, l in enumerate(lines):
        m = re.match(r"@H2 Unit (\d+)\b", l)
        if m:
            unit = int(m.group(1))
        mt = re.match(r"@TRACK \S+ Track (\d+)\.", l)
        if mt:
            unit = int(mt.group(1))
        if unit:
            lines[i] = apply_unit(l, unit)
    open(p, "w", encoding="utf-8").write("\n".join(lines))

missed = [(n, o) for n in ONE_OFF for o, _ in ONE_OFF[n] if (n, o) not in HITS]
print("transposed ten units to", ", ".join(C[n][0] for n in range(1, 11)))
print(f"{sum(HITS.values())} one-off substitution(s) applied; {len(missed)} unmatched")
for n, o in missed:
    print(f"  unit {n}: {o[:90]!r}")
