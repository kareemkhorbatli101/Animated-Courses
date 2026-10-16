#!/usr/bin/env python3
"""transpose.py — move the ten units of the Tourism Police book from Syria to
ten other non-English-speaking countries.

Each unit has a generic layer (country name, adjective, three cities, the trade
road) and a list of one-off substitutions for the interior ministry, the tourism
ministry, the heritage authority, the named sites, the hospitality tradition and
the cultural terms, none of which can be renamed mechanically.  The one-offs run
first so that a phrase naming Syria is rewritten whole before the generic layer
touches the words inside it.  Appendix A and Appendix B are transposed section by
section, so each unit's answers and transcripts move with the unit they belong to.
"""
import re
import sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else "english-for-tourism-police-international/content"

# country, adjective, first city, second city, third city
C = {
 1:  ("Vietnam", "Vietnamese", "Hanoi", "Huế", "Can Tho"),
 2:  ("Türkiye", "Turkish", "İstanbul", "İzmir", "Bursa"),
 3:  ("Mexico", "Mexican", "Mexico City", "Guadalajara", "Monterrey"),
 4:  ("Morocco", "Moroccan", "Fès", "Marrakech", "Meknès"),
 5:  ("Indonesia", "Indonesian", "Jakarta", "Yogyakarta", "Medan"),
 6:  ("Brazil", "Brazilian", "São Paulo", "Salvador", "Recife"),
 7:  ("Egypt", "Egyptian", "Cairo", "Luxor", "Damietta"),
 8:  ("Thailand", "Thai", "Bangkok", "Ayutthaya", "Hat Yai"),
 9:  ("Poland", "Polish", "Warsaw", "Kraków", "Gdańsk"),
 10: ("Kenya", "Kenyan", "Nairobi", "Mombasa", "Nakuru"),
}

# the ministry a tourism police officer is appointed under
MIN = {
 1:  "Ministry of Public Security",
 2:  "Ministry of Interior",
 3:  "Ministry of Security and Civilian Protection",
 4:  "Ministry of Interior",
 5:  "Ministry of Home Affairs",
 6:  "Ministry of Justice and Public Security",
 7:  "Ministry of Interior",
 8:  "Ministry of Interior",
 9:  "Ministry of the Interior and Administration",
 10: "Ministry of Interior and National Administration",
}

# the ministry that licenses the hotels, guides and agencies
TOUR = {
 1:  "Ministry of Culture, Sports and Tourism",
 2:  "Ministry of Culture and Tourism",
 3:  "Ministry of Tourism",
 4:  "Ministry of Tourism",
 5:  "Ministry of Tourism and Creative Economy",
 6:  "Ministry of Tourism",
 7:  "Ministry of Tourism and Antiquities",
 8:  "Ministry of Tourism and Sports",
 9:  "Ministry of Sport and Tourism",
 10: "Ministry of Tourism and Wildlife",
}

# the authority that protects the heritage sites
HER = {
 1:  "Department of Cultural Heritage",
 2:  "General Directorate of Cultural Heritage and Museums",
 3:  "National Institute of Anthropology and History",
 4:  "National Foundation of Museums",
 5:  "Directorate of Cultural Heritage",
 6:  "National Historic and Artistic Heritage Institute",
 7:  "Supreme Council of Antiquities",
 8:  "Fine Arts Department",
 9:  "National Heritage Board",
 10: "National Museums of Kenya",
}

# the road the pilgrims and merchants travelled
ROAD = {
 1:  "the river roads",
 2:  "the Silk Road",
 3:  "the camino real",
 4:  "the caravan roads",
 5:  "the spice routes",
 6:  "the royal road",
 7:  "the Nile",
 8:  "the river roads",
 9:  "the amber road",
 10: "the coast road",
}

# the keepers who watched over guests and their goods
KEEP = {
 1:  "inn keepers",
 2:  "han keepers",
 3:  "mesón keepers",
 4:  "funduq keepers",
 5:  "rest-house keepers",
 6:  "estalagem keepers",
 7:  "wakala keepers",
 8:  "sala keepers",
 9:  "inn keepers",
 10: "coastal inn keepers",
}

ONE_OFF = {
 1: [
  ("Syria has a long tradition of hospitality to travellers. A tourism police officer is appointed under the Ministry of Interior before taking a post, the Ministry of Tourism licenses the hotels, guides and agencies, and the Directorate-General of Antiquities and Museums protects the sites.",
   "Vietnam has a long tradition of hospitality to travellers. A tourism police officer is appointed under the Ministry of Public Security before taking a post, the Ministry of Culture, Sports and Tourism licenses the hotels, guides and agencies, and the Department of Cultural Heritage protects the sites."),
  ("Many posts in Syria serve the heritage sites. Some serve the Old City of Damascus, where the post directs visitors, watches the gates and records every enquiry. Others serve Palmyra, Bosra, the Aleppo citadel and Krak des Chevaliers, where every excavation needs an official permit. Since the conflict, much policing work has gone into protecting sites that were damaged and bringing visitors back safely.",
   "Many posts in Vietnam serve the heritage sites. Some serve Hội An Ancient Town, where the post directs visitors, watches the gates and records every enquiry. Others serve Mỹ Sơn, the Huế monuments, the Thăng Long Citadel and Hạ Long Bay, where every excavation needs an official permit. As visitor numbers have grown, much policing work has gone into protecting sites under heavy pressure and keeping groups moving safely."),
  ("Officers in Syria often face challenges including interrupted power, vehicles that are hard to repair, and radios too few to cover a long perimeter. Despite these obstacles, they remain committed to answering every call and rebuilding confidence in Syrian hospitality.",
   "Officers in Vietnam often face challenges including crowded lanes, humidity that damages the radios, and vehicles too few to cover a long perimeter. Despite these obstacles, they remain committed to answering every call and building confidence in Vietnamese hospitality."),
  ("a tourism police post in Damascus called the Bab Touma post", "a tourism police post in Hội An called the Riverside post"),
  ("1. The Bab Touma post |", "1. The Riverside post |"),
  ("Syria has a long history of hosting travellers. Damascus and Aleppo received pilgrims and merchants on the caravan roads for centuries, and the khan keepers watched over guests and their goods for four hundred years. Formal regulation began with the Ministry of Interior, which appoints every officer who serves, and with the Directorate-General of Antiquities and Museums that protects the sites.",
   "Vietnam has a long history of hosting travellers. Hanoi and Huế received pilgrims and merchants on the river roads for centuries, and the inn keepers of Hội An watched over guests and their goods for four hundred years. Formal regulation began with the Ministry of Public Security, which appoints every officer who serves, and with the Department of Cultural Heritage that protects the sites."),
  ("1. The khan keepers watched over guests and their goods for four hundred years.",
   "1. The inn keepers of Hội An watched over guests and their goods for four hundred years."),
  ("The khan keepers of Damascus and Aleppo watched over guests and their goods to a pattern kept for centuries.",
   "The inn keepers of Hanoi and Huế watched over guests and their goods to a pattern kept for centuries."),
  ("a) | Mastery of a trade is honoured, and a khan keeper's steady watch and clear register are remembered",
   "a) | Mastery of a trade is honoured, and an inn keeper's steady watch and clear register are remembered"),
  ("After the conflict, officers have had to protect sites that were damaged or looted. They record what is missing, obtain duplicate permits, retrain constables, and persuade old operators that the site is safe to visit again.",
   "As visitor numbers have grown, officers have had to protect sites under heavy pressure. They record what is missing, obtain duplicate permits, retrain constables, and persuade old operators that the site is well managed again."),
  ("Records clerks work to keep files safe despite interrupted power and old buildings. Purchasing officers travel long distances to obtain one spare radio.",
   "Records clerks work to keep files safe despite humidity and crowded buildings. Purchasing officers travel long distances to obtain one spare radio."),
  ("The work of officers is challenging. They operate with scarce equipment and often without reliable power. But they remain committed to answering every call and rebuilding confidence in Syrian hospitality. International partnerships help local posts work to foreign standards.",
   "The work of officers is challenging. They operate with scarce equipment and often in crowded premises. But they remain committed to answering every call and building confidence in Vietnamese hospitality. International partnerships help local posts work to foreign standards."),
  ("Together they address critical needs in safety, site protection, visitor assistance and the recovery of objects that were taken.",
   "Together they address critical needs in safety, site protection, visitor assistance and the recovery of objects that were removed."),
  ("The Old City of Damascus, Palmyra and Bosra, with the Aleppo citadel and Krak des Chevaliers also served by Syrian posts.",
   "Hội An Ancient Town, Mỹ Sơn and the Huế monuments, with the Thăng Long Citadel and Hạ Long Bay also served by Vietnamese posts."),
  ("Other posts have rebuilt records after damage and are receiving visitors from abroad again.",
   "Other posts have reorganised records after years of growth and are receiving visitors from abroad again."),
  ("builds confidence in Syrian hospitality", "builds confidence in Vietnamese hospitality"),
 ],
 2: [
  ("The policing sector in Syria has changed significantly in response to the need to protect sites that were looted or damaged. Large directorates, ministries, museums and small site posts all employ officers. These officers serve both their own sites and visitors from abroad. Working in Syria's posts requires persistence because power, equipment and spare parts are all uncertain.",
   "The policing sector in Türkiye has changed significantly in response to the need to serve visitors at many sites at once. Large directorates, ministries, museums and small site posts all employ officers. These officers serve both their own sites and visitors from abroad. Working in Türkiye's posts requires persistence because crowds, equipment and spare parts are all uncertain."),
  ("In neighboring countries like Lebanon and Jordan, directorates employ officers who serve both local visitors and foreign groups.",
   "In neighboring countries like Bulgaria and Georgia, directorates employ officers who serve both local visitors and foreign groups."),
  ("1. The need to protect sites that were looted or damaged | 2. Their resourcefulness and persistence",
   "1. The need to serve visitors at many sites at once | 2. Their resourcefulness and persistence"),
 ],
 3: [
  ("Syria has a long legal tradition and also a demanding compliance situation. An officer must be appointed under the Ministry of Interior before taking a post, and the Ministry of Tourism and the Directorate-General of Antiquities and Museums set the rules on permits, excavation and access. Foreign missions add their own requirements on top, so a post may need a certificate from the governorate, a certified translation, and a mission's own consent forms at the same time. Compliance is complicated by records lost during the conflict, permits that expire at different times, and the cost of professional advice.",
   "Mexico has a long legal tradition and also a demanding compliance situation. An officer must be appointed under the Ministry of Security and Civilian Protection before taking a post, and the Ministry of Tourism and the National Institute of Anthropology and History set the rules on permits, excavation and access. Foreign missions add their own requirements on top, so a post may need a certificate from the state government, a certified translation, and a mission's own consent forms at the same time. Compliance is complicated by records held in several registries at once, permits that expire at different times, and the cost of professional advice."),
  ("2. What is the scale of Syria's missing-paperwork problem?", "2. What is the scale of Mexico's missing-paperwork problem?"),
  ("1. Several requirements apply at once, and permits are hard to reconstruct | 2. Records lost during the conflict and permits expiring at different times affect organisations across the country",
   "1. Several requirements apply at once, and permits are hard to reconstruct | 2. Records held in several registries at once and permits expiring at different times affect organisations across the country"),
 ],
 4: [
  ("Process knowledge means understanding how the work is actually done and paid for. Officers in Syria must understand generator fuel, equipment repair, certified translation, and the real cost of fuel under difficult conditions.",
   "Process knowledge means understanding how the work is actually done and paid for. Officers in Morocco must understand electricity charges, equipment repair, certified translation, and the real cost of fuel between cities."),
  ("Syrian post finance teams demonstrate exceptional judgement, skill, and commitment despite extreme difficulties. They work with prices that can change between the quotation and the delivery, re-pricing in stages and recording every assumption. They keep accounts through power cuts, writing by hand and entering the figures later.",
   "Moroccan post finance teams demonstrate exceptional judgement, skill, and commitment despite real difficulties. They work with prices that can change between the quotation and the delivery, re-pricing in stages and recording every assumption. They keep accounts through long seasonal peaks, writing by hand and entering the figures later."),
  ("Syrian officers understand local costs deeply. They know radio battery prices, generator fuel, repair charges and the real cost of certified translation as these behave in local circumstances.",
   "Moroccan officers understand local costs deeply. They know radio battery prices, electricity charges, repair costs and the real cost of certified translation as these behave in local circumstances."),
  ("Many have rebuilt their own posts yet continue reporting honestly.", "Many have rebuilt their own records yet continue reporting honestly."),
  ("1. Power that fails, few staff, old buildings, and scarce generator fuel",
   "1. Prices that move, few staff, old buildings, and long seasonal peaks"),
 ],
 5: [
  ("Syrian posts face unique challenges in planning and management. Interrupted power, difficulty importing spare parts, and vehicles that cannot easily be repaired create real obstacles. Despite these difficulties, Syrian and international staff successfully run the escort, gate duty, foot patrol and incident work.",
   "Indonesian posts face unique challenges in planning. Distance between islands, difficulty importing parts, and vehicles that cannot easily be repaired create obstacles. Despite these difficulties, Indonesian and international staff successfully run the escort, gate duty, foot patrol and incident work."),
  ("Successful plans in Syria begin with a careful assessment of current conditions. Planning teams meet the sites, the officers and the suppliers. They identify what can actually be covered with the equipment available and which materials can actually be obtained. They learn what the organisation can afford this year. Good assessment in Syria includes understanding power interruptions and the fairness that lets every section be judged by the same rules.",
   "Plans in Indonesia begin with a careful assessment of current conditions. Planning teams meet the sites, officers and suppliers. They identify what can actually be covered with the equipment available and which materials can actually be obtained. They learn what the post can afford this year. Good assessment in Indonesia includes shipping times between islands and the fairness that lets every section be judged by the same rules."),
  ("Execution in Syria requires careful scheduling. Posts protect their deadlines by planning when each task is done. They consider timing—not starting a long perimeter sweep before a known power cut. They consider location—holding a little stock of the item hardest to replace. They ensure officers understand the plan and the cost of changing it.",
   "Execution in Indonesia requires careful scheduling. Posts protect deadlines by planning when each task is done. They consider timing—not starting a long perimeter sweep before a known holiday week. They consider location—holding a little stock of the item hardest to replace. They ensure officers understand the plan and the cost of changing it."),
  ("Review and reporting in Syria is critical. Senior officers need rapid information about whether the plan held, whether conditions changed, and whether the registers are safe.",
   "Review and reporting in Indonesia is critical. Senior officers need rapid information on whether the plan held, whether conditions changed, and whether the registers are safe."),
  ("Durable posts in Syria build local capacity. Outside support will eventually end. Successful directorates train Syrian staff, use methods that can be run with locally available tools, and document so that staff turnover does not lose the knowledge.",
   "Durable posts in Indonesia build local capacity. Outside support will eventually end. Successful posts train Indonesian staff, use methods that can be run with local tools, and document so staff turnover does not lose the knowledge."),
  ("Successful policing in Syria adapts to local values and working practices. Syrian culture values the family, respect for elders, religious faith, personal honour, and craft mastery.",
   "Successful policing in Indonesia adapts to local values and working practices. Indonesian culture values the family, respect for elders, religious faith, social harmony, and craft mastery."),
  ("Posts must involve respected figures including the senior officers and the long-serving khan keepers.",
   "Posts must involve respected figures including the senior officers and the long-serving rest-house keepers."),
  ("What can international partners learn from how Syrian khan keepers traditionally guarded guests?",
   "What can international partners learn from how Indonesian rest-house keepers traditionally guarded guests?"),
  ("Syrian khan keepers have centuries of experience judging a group by reputation",
   "Indonesian rest-house keepers have centuries of experience judging a group by reputation"),
  ("Power shortages are common—electricity may be unavailable or fail at a very different hour.",
   "Supply shortages are common—equipment may be unavailable or arrive at a very different price."),
  ("Challenge: Power Shortages During the Year", "Challenge: Supply Shortages During the Year"),
  ("In Syria, electricity sometimes becomes unavailable because of generation shortages, network difficulties, or sudden fuel price rises. This happened midway through a year when the power for a radio room could not be obtained.",
   "In Indonesia, equipment sometimes becomes unavailable because of import restrictions, shipping difficulties, or sudden price rises. This happened midway through a year when the parts for a radio room could not be obtained."),
  ("2. When Power Fails:", "2. When Supplies Fail:"),
  ("3. Learning and Improvement: I would analyse why the power failed—generation shortage? network? price?",
   "3. Learning and Improvement: I would analyse why the supply failed—import restriction? shipping? price?"),
 ],
 6: [
  ('The concept of "karama" or dignity is central to Syrian culture. Karama means being treated with respect and keeping personal honour. Partnership approaches honour karama by explaining a delay with a reason rather than simply failing to arrive. A broken promise without explanation damages karama, and a partner who feels slighted will not answer you again. Genuine partnership respects karama and fits local values.',
   'The idea of "respeito" or respect is central to Brazilian culture. Respeito means being treated as a person and keeping personal standing. Partnership approaches honour respeito by explaining a delay with a reason rather than simply failing to arrive. A broken promise without explanation damages respeito, and a partner who feels slighted will not answer you again. Genuine partnership respects respeito and fits local values.'),
  ("Families have kept the same khans for decades.", "Families have kept the same inns for decades."),
  ("Islamic teachings about honest dealing strengthen the partnership orientation. Islam teaches that a seller must not conceal a defect and must describe goods truthfully.",
   "Church and community teaching about honest dealing strengthens the partnership orientation. The tradition holds that a seller must not conceal a defect and must describe goods truthfully."),
  ("1. What does karama mean and how does partnership honour this value?",
   "1. What does respeito mean and how does partnership honour this value?"),
  ("2. How do Islamic teachings support working with site staff and partner agencies?",
   "2. How does community teaching support working with site staff and partner agencies?"),
  ("Islamic teaching that a trader must not conceal a fault and must describe the goods truthfully supports terms that ask a partner to disclose a problem rather than hide it until it is found.",
   "Community teaching that a trader must not conceal a fault and must describe the goods truthfully supports terms that ask a partner to disclose a problem rather than hide it until it is found."),
  ("1. Karama means dignity and standing in the post, and partnership respects it by explaining every delay with a reason",
   "1. Respeito means respect and standing in the post, and partnership respects it by explaining every delay with a reason"),
  ("@EX Part 7: Syrian Values of Cooperation and Service", "@EX Part 7: Brazilian Values of Cooperation and Service"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values of Cooperation and Service",
   "@ANSHEAD Exercise 38: Part 7: Brazilian Values of Cooperation and Service"),
  ("Syrian Cultural Values Supporting Collaboration", "Brazilian Cultural Values Supporting Collaboration"),
 ],
 7: [
  ("In Syria, direct relationships have become vital for keeping contact when the telephone line is unreliable.",
   "In Egypt, direct relationships have become vital for keeping contact when a group changes its plan."),
  ("Syria's service challenges stem from infrastructure and cost. Power is interrupted, telephone lines fail, prices move between quotation and purchase, and vehicles are hard to repair.",
   "Egypt's service challenges stem from scale and cost. Sites are crowded, telephone lines are slow, prices move between quotation and purchase, and vehicles are hard to repair."),
  ("Households and khans have long received guests through the diwan",
   "Households and wakalas have long received guests through the diwan"),
  ("Syrian craft ethics require high standards. Master guides and senior khan keepers are trusted figures accountable to their colleagues and to the family name in the register.",
   "Egyptian craft ethics require high standards. Master guides and senior wakala keepers are trusted figures accountable to their colleagues and to the family name in the register."),
  ("Post: A trading firm outside Homs", "Post: A site post outside Damietta"),
  ("In the Syrian context especially, integrated visitor assistance and service could help rebuild what disruption destroyed.",
   "In the Egyptian context especially, integrated visitor assistance and service could help restore what crowding has worn away."),
 ],
 8: [
  ("@EX Part 7: Syrian Values - Hisba and Honest Measure", "@EX Part 7: Thai Values - Honest Measure"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values - Hisba and Honest Measure",
   "@ANSHEAD Exercise 38: Part 7: Thai Values - Honest Measure"),
  ("@INSTR Discuss Syrian traditions of market oversight in patrol reporting.",
   "@INSTR Discuss Thai traditions of market oversight in patrol reporting."),
  ("1. In Syrian markets, the muhtasib checked weights and scales and answered to all. How does this connect to honest counting and reporting?",
   "1. In Thai markets, the royal inspector checked weights and scales and answered to all. How does this connect to honest counting and reporting?"),
  ("@EX Part 7: Syrian Values - Insaf in Using Findings", "@EX Part 7: Thai Values - Yutitham in Using Findings"),
  ("@ANSHEAD Exercise 39: Part 7: Syrian Values - Insaf in Using Findings",
   "@ANSHEAD Exercise 39: Part 7: Thai Values - Yutitham in Using Findings"),
  ("@INSTR Connect Syrian principles of fairness to the fair use of report findings.",
   "@INSTR Connect Thai principles of fairness to the fair use of report findings."),
  ("1. Insaf means giving each person their due. How should this guide the way a post reports and acts on its results?",
   "1. Yutitham means giving each person their due. How should this guide the way a post reports and acts on its results?"),
  ("Hisba means oversight exercised on behalf of everyone, as the muhtasib checked the weights and scales in the market.",
   "Sujarit means honesty owed to everyone, as the royal inspector checked the weights and scales in the market."),
  ("Insaf requires examining whether every part of the post was treated fairly.",
   "Yutitham requires examining whether every part of the post was treated fairly."),
  ("Posts pursuing insaf should ensure findings do not blame officers for a variance",
   "Posts pursuing yutitham should ensure findings do not blame officers for a variance"),
  ("Insaf means using figures not to punish but to improve.", "Yutitham means using figures not to punish but to improve."),
  ("Posts embracing hisba view reporting not as a burden", "Posts embracing sujarit view reporting not as a burden"),
  ("Posts committed to insaf view reporting as a fairness tool", "Posts committed to yutitham view reporting as a fairness tool"),
 ],
 9: [
  ("@EX Part 7: Syrian Values - Growth with Intention", "@EX Part 7: Polish Values - Growth with Intention"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values - Growth with Intention",
   "@ANSHEAD Exercise 38: Part 7: Polish Values - Growth with Intention"),
  ("@INSTR Connect Syrian community concepts with the growth of a unit.",
   "@INSTR Connect Polish community concepts with the growth of a unit."),
  ('1. In Syrian tradition, "ta\'awun" means working together so all who share a task benefit. How does this concept relate to growing a unit?',
   '1. In Polish tradition, "spółdzielczość" means working together so all who share a task benefit. How does this relate to growing a unit?'),
  ("@EX Part 7: Syrian Values - Stewardship", "@EX Part 7: Polish Values - Stewardship"),
  ("@ANSHEAD Exercise 39: Part 7: Syrian Values - Stewardship", "@ANSHEAD Exercise 39: Part 7: Polish Values - Stewardship"),
  ("@INSTR Discuss Syrian stewardship concepts in lasting public service.",
   "@INSTR Discuss Polish stewardship concepts in lasting public service."),
  ('1. "Waqf" in Syrian usage means something set aside so its benefit continues for generations. How does this principle relate to building a unit that outlives its founding commander?',
   '1. "Dziedzictwo" in Polish usage means something handed on so its benefit continues for generations. How does this relate to a unit that outlives its founding commander?'),
  ("Ta'awun suggests that growth should be intentional, purposeful, and rooted in serving the people who will run the unit.",
   "Spółdzielczość suggests growth be intentional, purposeful, and rooted in serving the people who will run the unit."),
  ("In Syrian usage, waqf makes people stewards responsible for something set aside so its benefit continues.",
   "In Polish usage, dziedzictwo makes people stewards responsible for something handed on so its benefit continues."),
 ],
 10: [
  ("@EX Part 7: Syrian Values - Consultation", "@EX Part 7: Kenyan Values - Consultation"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values - Consultation", "@ANSHEAD Exercise 38: Part 7: Kenyan Values - Consultation"),
  ("@INSTR Connect Syrian consultation principles to joint police work.",
   "@INSTR Connect Kenyan consultation principles to joint police work."),
  ("1. In Syrian practice, shura means matters are settled by consultation among those affected. How does this relate to associations and change led by the posts themselves?",
   "1. In Kenyan practice, a baraza means matters are settled by consultation among those affected. How does this relate to associations and change led by the posts themselves?"),
  ("@EX Part 7: Syrian Values - Justice", "@EX Part 7: Kenyan Values - Justice"),
  ("@ANSHEAD Exercise 39: Part 7: Syrian Values - Justice", "@ANSHEAD Exercise 39: Part 7: Kenyan Values - Justice"),
  ("1. In Syrian civic tradition, adl means removing unfair treatment and securing each person's due. How does this principle relate to advocacy aimed at changing the rules?",
   "1. In Kenyan civic tradition, haki means removing unfair treatment and securing each person's right. How does this principle relate to advocacy aimed at changing the rules?"),
  ("Shura means that leaders must consult widely before making decisions", "A baraza means that leaders must consult widely before making decisions"),
  ("Shura acknowledges that diverse perspectives improve decisions.", "A baraza acknowledges that diverse perspectives improve decisions."),
  ("Adl-centred advocacy goes beyond issuing individual permits", "Haki-centred advocacy goes beyond issuing individual permits"),
  ("Adl-guided associations recognize that a failing policing climate is not inevitable",
   "Haki-guided associations recognize that a failing policing climate is not inevitable"),
  ("Pursuing adl means managers align with the smallest directorates",
   "Pursuing haki means managers align with the smallest directorates"),
  ("Pursuing adl may create conflict", "Pursuing haki may create conflict"),
  ("Associations committed to adl view advocacy", "Associations committed to haki view advocacy"),
 ],
}


HITS = {}


def institutions(text, n):
    """Rewrite the interior ministry, the tourism ministry and the heritage body."""
    text = text.replace("Directorate-General of Antiquities and Museums", HER[n])
    text = text.replace("Ministry of Tourism", TOUR[n])
    text = text.replace("Ministry of Interior", MIN[n])
    text = text.replace("the caravan roads", ROAD[n])
    text = text.replace("khan keepers", KEEP[n])
    text = text.replace("Antiquities regulation", "Heritage regulation")
    text = text.replace("Antiquities rules", "Heritage rules")
    text = text.replace("antiquities rules", "heritage rules")
    text = text.replace("antiquities authority", "heritage authority")
    text = text.replace("Antiquities authorities", "Heritage authorities")
    text = text.replace("antiquities regulations", "heritage regulations")
    text = text.replace("antiquities law", "heritage law")
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
