#!/usr/bin/env python3
"""transpose.py — move the ten units of the Tour Guides book from Syria to ten
other non-English-speaking countries.

Each unit has a generic layer (country name, adjective, three cities) and a list
of one-off substitutions for the tourism ministry, the guides' professional body,
the heritage authority, the named sites, the historic guiding tradition and the
cultural terms, none of which can be renamed mechanically.  The one-offs run
first so that a phrase naming Syria is rewritten whole before the generic layer
touches the words inside it.  Appendix A and Appendix B are transposed section by
section, so each unit's answers and transcripts move with the unit they belong to.
"""
import re
import sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else "english-for-tour-guides-international/content"

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

# the ministry that licenses a tour guide
MIN = {
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

# the professional body that sets the rules for guides
SYND = {
 1:  "Vietnam Tourism Guide Association",
 2:  "Union of Tourist Guides Chambers",
 3:  "National Association of Tourist Guides",
 4:  "National Federation of Tourist Guides",
 5:  "Indonesian Tourist Guide Association",
 6:  "National Union of Tourist Guides",
 7:  "Tourist Guides Syndicate",
 8:  "Professional Tourist Guide Association",
 9:  "Polish Tourist Guides Association",
 10: "Kenya Professional Guides Association",
}

# the authority that issues the site permits
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
 5:  "the temple roads",
 6:  "the royal road",
 7:  "the Nile",
 8:  "the river roads",
 9:  "the amber road",
 10: "the coast road",
}

# the historic guides who led the travellers
KEEP = {
 1:  "river pilots",
 2:  "caravan guides",
 3:  "arrieros",
 4:  "caravan guides",
 5:  "pilgrim guides",
 6:  "trail guides",
 7:  "dragomans",
 8:  "river guides",
 9:  "road wardens",
 10: "coast guides",
}

ONE_OFF = {
 1: [
  ("Syria has a long tradition of hospitality to travellers. A tour guide is licensed by the Ministry of Tourism before working with a group, the Tourist Guides Syndicate sets the professional rules, and the Directorate-General of Antiquities and Museums issues the site permits.",
   "Vietnam has a long tradition of hospitality to travellers. A tour guide is licensed by the Ministry of Culture, Sports and Tourism before working with a group, the Vietnam Tourism Guide Association sets the professional rules, and the Department of Cultural Heritage issues the site permits."),
  ("Many offices in Syria serve the heritage sites. Some serve the Old City of Damascus, where the guides walk the lanes, explain the monuments and records every enquiry. Others serve Palmyra, Bosra, the Aleppo citadel and Krak des Chevaliers, where every group needs an official permit. Since the conflict, much guiding work has gone into interpreting sites that were damaged and bringing guests back safely.",
   "Many offices in Vietnam serve the heritage sites. Some serve Hội An Ancient Town, where the guides walk the lanes, explain the monuments and records every enquiry. Others serve Mỹ Sơn, the Huế monuments, the Thăng Long Citadel and Hạ Long Bay, where every group needs an official permit. As guest numbers have grown, much guiding work has gone into interpreting sites under heavy pressure and keeping groups moving safely."),
  ("Guides in Syria often face challenges including interrupted power, vehicles that are hard to repair, and headsets too few to cover a large group. Despite these obstacles, they remain committed to meeting every group and rebuilding confidence in Syrian hospitality.",
   "Guides in Vietnam often face challenges including crowded lanes, humidity that damages the headsets, and vehicles too few to cover a large group. Despite these obstacles, they remain committed to meeting every group and building confidence in Vietnamese hospitality."),
  ("a guiding office in Damascus called the Barada office", "a guiding office in Hội An called the Riverside office"),
  ("1. The Barada office |", "1. The Riverside office |"),
  ("Syria has a long history of hosting travellers. Damascus and Aleppo received pilgrims and merchants on the caravan roads for centuries, and the caravan guides led them from khan to khan for four hundred years. Formal regulation began with the Ministry of Tourism, which licenses every guide who works, and with the Directorate-General of Antiquities and Museums that issues the site permits.",
   "Vietnam has a long history of hosting travellers. Hanoi and Huế received pilgrims and merchants on the river roads for centuries, and the river pilots led them from port to port for four hundred years. Formal regulation began with the Ministry of Culture, Sports and Tourism, which licenses every guide who works, and with the Department of Cultural Heritage that issues the site permits."),
  ("1. The caravan guides led pilgrims and merchants from khan to khan for four hundred years.",
   "1. The river pilots led pilgrims and merchants from port to port for four hundred years."),
  ("The caravan guides of Damascus and Aleppo led travellers from khan to khan to a pattern kept for centuries.",
   "The river pilots of Hanoi and Huế led travellers from port to port to a pattern kept for centuries."),
  ("1. Who led pilgrims and merchants from khan to khan in Syria for four hundred years?",
   "1. Who led pilgrims and merchants from port to port in Vietnam for four hundred years?"),
  ("a) | Mastery of a trade is honoured, and a caravan guide's sure route and clear account are remembered",
   "a) | Mastery of a trade is honoured, and a river pilot's sure route and clear account are remembered"),
  ("After the conflict, guides have had to interpret sites that were damaged or looted. They record what is missing, obtain duplicate permits, retrain assistant guides, and persuade old operators that the country is safe to visit again.",
   "As guest numbers have grown, guides have had to interpret sites under heavy pressure. They record what is missing, obtain duplicate permits, retrain assistant guides, and persuade old operators that the country is well managed again."),
  ("Records clerks work to keep files safe despite interrupted power and old buildings. Purchasing officers travel long distances to obtain one spare headset.",
   "Records clerks work to keep files safe despite humidity and crowded buildings. Purchasing officers travel long distances to obtain one spare headset."),
  ("The work of guides is challenging. They operate with scarce equipment and often without reliable power. But they remain committed to meeting every group and rebuilding confidence in Syrian hospitality. International partnerships help local offices work to foreign standards.",
   "The work of guides is challenging. They operate with scarce equipment and often in crowded premises. But they remain committed to meeting every group and building confidence in Vietnamese hospitality. International partnerships help local offices work to foreign standards."),
  ("Together they address critical needs in safety, site interpretation, guest assistance and the return of travellers to the country.",
   "Together they address critical needs in safety, site interpretation, guest assistance and the training of guides for new languages."),
  ("The Old City of Damascus, Palmyra and Bosra, with the Aleppo citadel and Krak des Chevaliers also served by Syrian offices.",
   "Hội An Ancient Town, Mỹ Sơn and the Huế monuments, with the Thăng Long Citadel and Hạ Long Bay also served by Vietnamese offices."),
  ("Other offices have rebuilt records after damage and are receiving guests from abroad again.",
   "Other offices have reorganised records after years of growth and are receiving guests from abroad again."),
  ("builds confidence in Syrian hospitality", "builds confidence in Vietnamese hospitality"),
 ],
 2: [
  ("The guiding sector in Syria has changed significantly in response to the need to bring travellers back to sites that were looted or damaged. Large companies, ministries, museums and small agency offices all employ guides. These guides serve both their own agencies and guests from abroad. Working in Syria's offices requires persistence because power, equipment and spare parts are all uncertain.",
   "The guiding sector in Türkiye has changed significantly in response to the need to serve guests at many sites at once. Large companies, ministries, museums and small agency offices all employ guides. These guides serve both their own agencies and guests from abroad. Working in Türkiye's offices requires persistence because crowds, equipment and spare parts are all uncertain."),
  ("In neighboring countries like Lebanon and Jordan, companies employ guides who serve both local guests and foreign groups.",
   "In neighboring countries like Bulgaria and Georgia, companies employ guides who serve both local guests and foreign groups."),
  ("1. The need to bring travellers back to sites that were looted or damaged | 2. Their resourcefulness and persistence",
   "1. The need to serve guests at many sites at once | 2. Their resourcefulness and persistence"),
 ],
 3: [
  ("Syria has a long legal tradition and also a demanding compliance situation. A guide must be licensed by the Ministry of Tourism before working with a group, and the Tourist Guides Syndicate and the Directorate-General of Antiquities and Museums set the rules on permits, group size and access. Foreign missions add their own requirements on top, so an office may need a certificate from the governorate, a certified translation, and a mission's own consent forms at the same time. Compliance is complicated by records lost during the conflict, permits that expire at different times, and the cost of professional advice.",
   "Mexico has a long legal tradition and also a demanding compliance situation. A guide must be licensed by the Ministry of Tourism before working with a group, and the National Association of Tourist Guides and the National Institute of Anthropology and History set the rules on permits, group size and access. Foreign missions add their own requirements on top, so an office may need a certificate from the state government, a certified translation, and a mission's own consent forms at the same time. Compliance is complicated by records held in several registries at once, permits that expire at different times, and the cost of professional advice."),
  ("2. What is the scale of Syria's missing-paperwork problem?", "2. What is the scale of Mexico's missing-paperwork problem?"),
  ("1. Several requirements apply at once, and permits are hard to reconstruct | 2. Records lost during the conflict and permits expiring at different times affect organisations across the country",
   "1. Several requirements apply at once, and permits are hard to reconstruct | 2. Records held in several registries at once and permits expiring at different times affect organisations across the country"),
  ("Syria licenses guides through the Ministry of Tourism and registers every permit with the authorities.",
   "Mexico licenses guides through the Ministry of Tourism and registers every permit with the authorities."),
 ],
 4: [
  ("Process knowledge means understanding how the work is actually done and paid for. Guides in Syria must understand generator fuel, equipment repair, certified translation, and the real cost of fuel under difficult conditions.",
   "Process knowledge means understanding how the work is actually done and paid for. Guides in Morocco must understand coach hire, equipment repair, certified translation, and the real cost of fuel between cities."),
  ("Syrian office finance teams demonstrate exceptional judgement, skill, and commitment despite extreme difficulties. They work with prices that can change between the quotation and the delivery, re-pricing in stages and recording every assumption. They keep accounts through power cuts, writing by hand and entering the figures later.",
   "Moroccan office finance teams demonstrate exceptional judgement, skill, and commitment despite real difficulties. They work with prices that can change between the quotation and the delivery, re-pricing in stages and recording every assumption. They keep accounts through long seasonal peaks, writing by hand and entering the figures later."),
  ("Syrian guides understand local costs deeply. They know headset battery prices, generator fuel, repair charges and the real cost of certified translation as these behave in local circumstances.",
   "Moroccan guides understand local costs deeply. They know headset battery prices, coach hire, repair costs and the real cost of certified translation as these behave in local circumstances."),
  ("Many have rebuilt their own offices yet continue reporting honestly.", "Many have rebuilt their own records yet continue reporting honestly."),
  ("1. Power that fails, few staff, old buildings, and scarce generator fuel",
   "1. Prices that move, few staff, old buildings, and long seasonal peaks"),
 ],
 5: [
  ("Syrian offices face unique challenges in planning and management. Interrupted power, difficulty importing spare parts, and vehicles that cannot easily be repaired create real obstacles. Despite these difficulties, Syrian and international staff successfully run the escort, meeting point duty, walking tour and enquiry work.",
   "Indonesian offices face unique challenges in planning and management. Distance between islands, difficulty importing spare parts, and vehicles that cannot easily be repaired create real obstacles. Despite these difficulties, Indonesian and international staff successfully run the escort, meeting point duty, walking tour and enquiry work."),
  ("Successful plans in Syria begin with a careful assessment of current conditions. Planning teams meet the agencies, the guides and the suppliers. They identify what can actually be covered with the equipment available and which materials can actually be obtained. They learn what the organisation can afford this year. Good assessment in Syria includes understanding power interruptions and the fairness that lets every section be judged by the same rules.",
   "Successful plans in Indonesia begin with a careful assessment of current conditions. Planning teams meet the agencies, the guides and the suppliers. They identify what can actually be covered with the equipment available and which materials can actually be obtained. They check which islands can be reached in the season. They learn what the organisation can afford this year. Good assessment in Indonesia includes shipping times between islands and the fairness that lets every section be judged by the same rules."),
  ("Execution in Syria requires careful scheduling. Offices protect their deadlines by planning when each task is done. They consider timing—not starting a long site walk before a known power cut. They consider location—holding a little stock of the item hardest to replace. They ensure guides understand the plan and the cost of changing it.",
   "Execution in Indonesia requires careful scheduling. Offices protect their deadlines by planning when each task is done. They consider timing—not starting a long site walk before a known holiday week. They consider location—holding a little stock of the item hardest to replace. They ensure guides understand the plan and the cost of changing it."),
  ("Review and reporting in Syria is critical. Directors need rapid information about whether the plan held, whether conditions changed, and whether the registers are safe.",
   "Review and reporting in Indonesia is critical. Directors need rapid information about whether the plan held, whether conditions changed, and whether the registers are safe."),
  ("Durable offices in Syria build local capacity. Outside support will eventually end. Successful companies train Syrian staff, use methods that can be run with locally available tools, and document so that staff turnover does not lose the knowledge.",
   "Durable offices in Indonesia build local capacity. Outside support will eventually end. Successful offices train Indonesian staff, use methods that can be run with locally available tools, and document so that staff turnover does not lose the knowledge. Local ownership is what makes a programme last."),
  ("Successful guiding in Syria adapts to local values and working practices. Syrian culture values the family, respect for elders, religious faith, personal honour, and craft mastery.",
   "Successful guiding in Indonesia adapts to local values and working practices. Indonesian culture values the family, respect for elders, religious faith, social harmony, and craft mastery."),
  ("Offices must involve respected figures including the directors and the long-serving caravan guides.",
   "Offices must involve respected figures including the directors and the long-serving pilgrim guides."),
  ("What can international partners learn from how Syrian caravan guides traditionally led travellers?",
   "What can international partners learn from how Indonesian pilgrim guides traditionally led travellers?"),
  ("Syrian caravan guides have centuries of experience judging a group by reputation",
   "Indonesian pilgrim guides have centuries of experience judging a group by reputation"),
  ("This demonstrates that caravan guides already had sound practical knowledge",
   "This demonstrates that pilgrim guides already had sound practical knowledge"),
  ("Power shortages are common—electricity may be unavailable or fail at a very different hour.",
   "Supply shortages are common—equipment may be unavailable or arrive at a very different price."),
  ("Challenge: Power Shortages During the Year", "Challenge: Supply Shortages During the Year"),
  ("In Syria, electricity sometimes becomes unavailable because of generation shortages, network difficulties, or sudden fuel price rises. This happened midway through a year when the power for a headset room could not be obtained.",
   "In Indonesia, equipment sometimes becomes unavailable because of import restrictions, shipping difficulties, or sudden price rises. This happened midway through a year when the parts for a headset room could not be obtained."),
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
  ("2. How do Islamic teachings support working with agency staff and partner suppliers?",
   "2. How does community teaching support working with agency staff and partner suppliers?"),
  ("Islamic teaching that a trader must not conceal a fault and must describe the goods truthfully supports terms that ask a partner to disclose a problem rather than hide it until it is found.",
   "Community teaching that a trader must not conceal a fault and must describe the goods truthfully supports terms that ask a partner to disclose a problem rather than hide it until it is found."),
  ("1. Karama means dignity and standing in the office, and partnership respects it by explaining every delay with a reason",
   "1. Respeito means respect and standing in the office, and partnership respects it by explaining every delay with a reason"),
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
  ("Syrian craft ethics require high standards. Master guides and senior interpreters are trusted figures accountable to their colleagues and to the family name in the register.",
   "Egyptian craft ethics require high standards. Master guides and senior dragomans are trusted figures accountable to their colleagues and to the family name in the register."),
  ("Office: A trading firm outside Homs", "Office: A guiding office outside Damietta"),
  ("In the Syrian context especially, integrated guest assistance and service could help rebuild what disruption destroyed.",
   "In the Egyptian context especially, integrated guest assistance and service could help restore what crowding has worn away."),
 ],
 8: [
  ("@EX Part 7: Syrian Values - Hisba and Honest Measure", "@EX Part 7: Thai Values - Honest Measure"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values - Hisba and Honest Measure",
   "@ANSHEAD Exercise 38: Part 7: Thai Values - Honest Measure"),
  ("@INSTR Discuss Syrian traditions of market oversight in tour reporting.",
   "@INSTR Discuss Thai traditions of market oversight in tour reporting."),
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
  ("Offices pursuing insaf should ensure findings do not blame guides for a variance",
   "Offices pursuing yutitham should ensure findings do not blame guides for a variance"),
  ("Insaf means using figures not to punish but to improve.", "Yutitham means using figures not to punish but to improve."),
  ("Offices embracing hisba view reporting not as a burden", "Offices embracing sujarit view reporting not as a burden"),
  ("Offices committed to insaf view reporting as a fairness tool", "Offices committed to yutitham view reporting as a fairness tool"),
  ("Justice demands that reports examine whether the guides shared in a good year, whether partner suppliers were paid on the agreed terms, and whether small agencies received the same service as large ones.",
   "Justice asks whether the guides shared in a good year, whether partner suppliers were paid on the agreed terms, and whether small agencies were served like large ones."),
 ],
 9: [
  ("@EX Part 7: Syrian Values - Growth with Intention", "@EX Part 7: Polish Values - Growth with Intention"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values - Growth with Intention",
   "@ANSHEAD Exercise 38: Part 7: Polish Values - Growth with Intention"),
  ("@INSTR Connect Syrian community concepts with the growth of an office.",
   "@INSTR Connect Polish community concepts with the growth of an office."),
  ('1. In Syrian tradition, "ta\'awun" means working together so all who share a task benefit. How does this concept relate to growing an office?',
   '1. In Polish tradition, "spółdzielczość" means working together so all who share a task benefit. How does this relate to growing an office?'),
  ("@EX Part 7: Syrian Values - Stewardship", "@EX Part 7: Polish Values - Stewardship"),
  ("@ANSHEAD Exercise 39: Part 7: Syrian Values - Stewardship", "@ANSHEAD Exercise 39: Part 7: Polish Values - Stewardship"),
  ("@INSTR Discuss Syrian stewardship concepts in lasting public service.",
   "@INSTR Discuss Polish stewardship concepts in lasting public service."),
  ('1. "Waqf" in Syrian usage means something set aside so its benefit continues for generations. How does this principle relate to building an office that outlives its founding lead guide?',
   '1. "Dziedzictwo" in Polish usage means something handed on so its benefit continues for generations. How does this relate to an office that outlives its founding lead guide?'),
  ("Ta'awun suggests that growth should be intentional, purposeful, and rooted in serving the people who will run the office.",
   "Spółdzielczość suggests growth be intentional, purposeful, and rooted in serving the people who will run the office."),
  ("In Syrian usage, waqf makes people stewards responsible for something set aside so its benefit continues.",
   "In Polish usage, dziedzictwo makes people stewards responsible for something handed on so its benefit continues."),
 ],
 10: [
  ("@EX Part 7: Syrian Values - Consultation", "@EX Part 7: Kenyan Values - Consultation"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values - Consultation", "@ANSHEAD Exercise 38: Part 7: Kenyan Values - Consultation"),
  ("@INSTR Connect Syrian consultation principles to joint guide work.",
   "@INSTR Connect Kenyan consultation principles to joint guide work."),
  ("1. In Syrian practice, shura means matters are settled by consultation among those affected. How does this relate to associations and change led by the offices themselves?",
   "1. In Kenyan practice, a baraza means matters are settled by consultation among those affected. How does this relate to associations and change led by the offices themselves?"),
  ("@EX Part 7: Syrian Values - Justice", "@EX Part 7: Kenyan Values - Justice"),
  ("@ANSHEAD Exercise 39: Part 7: Syrian Values - Justice", "@ANSHEAD Exercise 39: Part 7: Kenyan Values - Justice"),
  ("1. In Syrian civic tradition, adl means removing unfair treatment and securing each person's due. How does this principle relate to advocacy aimed at changing the rules?",
   "1. In Kenyan civic tradition, haki means removing unfair treatment and securing each person's right. How does this principle relate to advocacy aimed at changing the rules?"),
  ("Shura means that leaders must consult widely before making decisions", "A baraza means that leaders must consult widely before making decisions"),
  ("Shura acknowledges that diverse perspectives improve decisions.", "A baraza acknowledges that diverse perspectives improve decisions."),
  ("Adl-centred advocacy goes beyond issuing individual permits", "Haki-centred advocacy goes beyond issuing individual permits"),
  ("Adl-guided associations recognize that a failing guiding climate is not inevitable",
   "Haki-guided associations recognize that a failing guiding climate is not inevitable"),
  ("Pursuing adl means managers align with the smallest companies", "Pursuing haki means managers align with the smallest companies"),
  ("Pursuing adl may create conflict", "Pursuing haki may create conflict"),
  ("Associations committed to adl view advocacy", "Associations committed to haki view advocacy"),
 ],
}


HITS = {}


def institutions(text, n):
    """Rewrite the tourism ministry, the guides' body and the heritage authority."""
    text = text.replace("Directorate-General of Antiquities and Museums", HER[n])
    text = text.replace("Tourist Guides Syndicate", SYND[n])
    text = text.replace("Ministry of Tourism", MIN[n])
    text = text.replace("the caravan roads", ROAD[n])
    text = text.replace("caravan guides", KEEP[n])
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
