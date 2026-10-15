#!/usr/bin/env python3
"""transpose.py — move the ten units of the Business Managers book from Syria to
ten other non-English-speaking countries.

Each unit has a generic layer (country name, adjective, three cities) and a list
of one-off substitutions for the registry, the trade regulator, the local
industries and products, the national context and the cultural terms, none of
which can be renamed mechanically.  The one-offs run first so that a phrase
naming Syria is rewritten whole before the generic layer touches the words
inside it.  Appendix A and Appendix B are transposed section by section, so each
unit's answers and transcripts move with the unit they belong to.
"""
import re
import sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else "english-for-business-managers-international/content"

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

# the national registry a company is entered in before it may trade
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

# the body that sets the rules on pricing, labelling and consumer complaints
MIN = {
 1:  "Ministry of Industry and Trade",
 2:  "Ministry of Trade",
 3:  "Federal Consumer Protection Agency",
 4:  "Ministry of Industry and Trade",
 5:  "Ministry of Trade",
 6:  "National Consumer Secretariat",
 7:  "Ministry of Supply and Internal Trade",
 8:  "Ministry of Commerce",
 9:  "Office of Competition and Consumer Protection",
 10: "Competition Authority of Kenya",
}

ONE_OFF = {
 1: [
  # the heritage product and the trading cities of Vietnam
  ("Aleppo soap has been made and sold to a known recipe for hundreds of years",
   "Bát Tràng pottery has been made and sold to a known method for hundreds of years"),
  ("1. What has been made in Aleppo to a known recipe for hundreds of years?",
   "1. What has been made in Bát Tràng to a known method for hundreds of years?"),
  ("1. Aleppo soap has been made and sold to a known recipe.",
   "1. Bát Tràng pottery has been made and sold to a known method."),
  ("Aleppo soap is made in Syria to a recipe that has been kept for centuries. If I managed a soap workshop",
   "Bát Tràng pottery is made to a method kept for centuries. If I managed a pottery workshop"),
  ("how many tonnes we would sell and at what margin, cost each batch from the oil, the alkali and the labour",
   "how many pieces we would sell and at what margin, cost each firing from the clay, the glaze and the labour"),
  # the company in the opening dialogue
  ("a textile company in Damascus called Cham Textiles",
   "a textile company in Hanoi called Sông Hồng Textiles"),
  ("1. Cham Textiles | 2. Plans the weekly production",
   "1. Sông Hồng Textiles | 2. Plans the weekly production"),
  # industries and the national context
  ("Many businesses in Syria are family firms. Some work in textiles and garments, long centred on Aleppo and Damascus. Others work in food processing, soap, furniture and pharmaceuticals, where Syrian factories have supplied both the domestic market and the region. Since the conflict, much management work has gone into rebuilding businesses that were damaged or moved and holding on to customers abroad.",
   "Many businesses in Vietnam are family firms. Some work in textiles and garments, long centred on Hanoi and Ho Chi Minh City. Others work in food processing, footwear, furniture and electronics assembly, where Vietnamese factories have supplied both the domestic market and export buyers. As wages have risen, much management work has gone into moving up from simple assembly to higher-value work and holding on to customers abroad."),
  ("Managers in Syria often face challenges including a currency that moves quickly, interrupted power, and difficulty importing materials. Despite these obstacles, they remain committed to their work of serving customers and rebuilding confidence in Syrian products.",
   "Managers in Vietnam often face challenges including rising wages, crowded ports, and buyers who demand lower prices every season. Despite these obstacles, they remain committed to their work of serving customers and building confidence in Vietnamese products."),
  ("Syria has a long tradition of trade and manufacturing.",
   "Vietnam has a long tradition of trade and manufacturing."),
  ("Syria has a long commercial history. Damascus and Aleppo have been trading cities for centuries",
   "Vietnam has a long commercial history. Hanoi and Hội An have been trading cities for centuries"),
  ("In Syria, Damascus and Aleppo have been trading cities for centuries",
   "In Vietnam, Hanoi and Hội An have traded for centuries"),
  ("Textile and garment firms supply the domestic market and the region. Food processors, soap makers and furniture workshops employ thousands of people. Other companies have rebuilt themselves after damage and are winning customers abroad again.",
   "Textile and garment firms supply the domestic market and export buyers. Food processors, shoe makers and furniture workshops employ thousands of people. Other companies have moved up from simple assembly and are winning better customers abroad."),
  ("| 4. Limited credit and unreliable power.", "| 4. Thin margins and crowded ports."),
  ("In Syria, where credit is scarce, that early warning is the most valuable thing a manager produces.",
   "In Vietnam, where margins are thin, that early warning is the most valuable thing a manager produces."),
  ("and build a cash forecast because the oil must be bought at harvest while the soap sells all year. I would also agree the price with the traders before the season, so neither side argues once the stock is cured.",
   "and build a cash forecast because the clay must be bought in bulk while the pottery sells all year. I would also agree the price with the traders before the season, so neither side argues once the stock is fired."),
  ("In Syria, the commercial register records every company they work for.",
   "In Vietnam, the business register records every company they work for."),
  ("Together they address critical needs in employment, supply, export earnings and the rebuilding of damaged businesses.",
   "Together they address critical needs in employment, supply, export earnings and the move to higher-value manufacturing."),
  ("Finance managers watch the cash and protect the company from a currency that moves quickly.",
   "Finance managers watch the cash and protect the company from an input price that moves quickly."),
  ("They operate with limited credit and often without reliable power. But they remain committed to employing people and rebuilding confidence in what Syria makes.",
   "They operate with thin margins and often under heavy buyer pressure. But they remain committed to employing people and building confidence in what Vietnam makes."),
  ("builds confidence in what Syria makes", "builds confidence in what Vietnam makes"),
  # the cultural values panel
  ("@EX Part 7: Syrian Cultural Values and Business Work",
   "@EX Part 7: Vietnamese Cultural Values and Business Work"),
  ("@INSTR Match Syrian cultural values with how they relate to business management and trade.",
   "@INSTR Match Vietnamese cultural values with how they relate to business management and trade."),
  ("a) | Mastery of a trade is honoured, and a soap maker's recipe is named and remembered",
   "a) | Mastery of a trade is honoured, and a potter's village and method are named and remembered"),
  ("b) | Dignity means a promise is given carefully, because a name stands behind it",
   "b) | Face means a promise is given carefully, because a name stands behind it"),
  ("4. | Personal Dignity", "4. | Keeping Face"),
 ],
 2: [
  ("The business sector in Syria has changed significantly in response to the need to rebuild companies that were damaged or moved.",
   "The business sector in Türkiye has changed significantly in response to the need to move from low-cost assembly to branded manufacturing."),
  ("Working in Syria's companies requires persistence because credit, foreign currency and reliable power are all scarce.",
   "Working in Türkiye's companies requires persistence because competition, currency movement and input costs are all relentless."),
  ("In neighboring countries like Lebanon and Jordan, companies employ managers who sell for both local sale and export.",
   "In neighbouring countries like Bulgaria and Georgia, companies employ managers who sell for both local sale and export."),
  ("These businesses demonstrate how dedicated professionals keep working in hard times.",
   "These businesses demonstrate how dedicated professionals keep working in hard markets."),
  ("Many Syrian professionals who studied abroad chose to return to run companies at home.",
   "Many Turkish professionals who studied abroad chose to return to run companies at home."),
 ],
 3: [
  ("Syria has a long commercial tradition and also a demanding compliance situation.",
   "Mexico has a long commercial tradition and also a demanding compliance situation."),
  ("Compliance is complicated by records lost during the conflict, licences that expire at different times, and the cost of professional advice.",
   "Compliance is complicated by requirements set at federal, state and municipal level, licences that expire at different times, and the cost of advice."),
  ("Missing paperwork affects businesses across the country.",
   "Overlapping paperwork affects businesses across the country."),
  ("Their work includes contract drafting, record reconstruction, and the documentation an importing country will demand.",
   "Their work includes contract drafting, permit renewal, and the documentation an importing country will demand."),
  ("International recognition of Syrian merchants acknowledges their skill and dedication.",
   "International recognition of Mexican exporters acknowledges their skill and dedication."),
  ("2. What is the scale of Syria's missing-paperwork problem?",
   "2. What is the scale of Mexico's overlapping-permit problem?"),
  ("3. What makes compliance for export from Syria particularly difficult?",
   "3. What makes compliance for export from Mexico particularly difficult?"),
  ("   ○ B) Several overlapping requirements plus records lost during the conflict",
   "   ○ B) Several overlapping requirements plus permits held at three levels"),
  ("1. Several requirements apply at once, and records are hard to reconstruct | 2. Records lost during the conflict and licences expiring at different times affect businesses across the country",
   "1. Several requirements apply at once, and permits sit at three levels | 2. Permits at three levels of government and licences expiring at different times affect businesses across the country"),
  ("In Syria and other recovering economies, registration is often the only protection a supplier has before extending credit.",
   "In Mexico and other emerging economies, registration is the only protection a supplier often has before extending credit."),
  ("In Syria, careful investigation has often shown that a loss came from a missing approval rather than theft.",
   "In Mexico, careful investigation has often shown that a loss came from a missing approval rather than theft."),
  ("Syria has a commercial register and a consumer protection authority for companies trading at home.",
   "Mexico has a commercial registry and a consumer protection agency for companies trading at home."),
  ("Syria's companies reveal the tension between international compliance and the urgent need to keep people employed.",
   "Mexico's small firms reveal the tension between international compliance and the urgent need to keep people employed."),
 ],
 4: [
  ("Managers in Syria must understand weaving, cutting and finishing, food processing, and the real cost of transport under difficult conditions.",
   "Managers in Morocco must understand weaving, cutting and finishing, food processing, and the real cost of transport over long distances."),
  ("Courageous managers in Syria report a loss when the owners were expecting a profit.",
   "Courageous managers in Morocco report a loss when the owners were expecting a profit."),
  ("Syrian finance teams demonstrate exceptional judgement, skill, and commitment despite extreme difficulties. They work with a currency that can move between the order and the delivery, re-pricing in stages and recording every assumption. They cost products on lines that stop for power, holding the method steady despite interruption.",
   "Moroccan finance teams demonstrate exceptional judgement, skill, and commitment despite real difficulties. They work with input prices that can move between the order and the delivery, re-pricing in stages and recording every assumption. They cost products on lines that stop for maintenance, holding the method steady despite interruption."),
  ("They know yarn prices, transport under difficult conditions, generator fuel and the real cost of holding stock as these behave in local circumstances.",
   "They know yarn prices, transport over long distances, port charges and the real cost of holding stock as these behave in local circumstances."),
  ("Many work long hours for modest salaries or no overtime. Many face real pressure when an honest figure would lose an order. Many have rebuilt their own records yet continue reporting honestly.",
   "Many work long hours for modest salaries or no overtime. Many face real pressure when an honest figure would lose an order. Many have rebuilt a whole costing system yet continue reporting honestly."),
  ("International partners often say that Syrian colleagues teach them what real resourcefulness looks like.",
   "International partners often say that Moroccan colleagues teach them what real resourcefulness looks like."),
  ("The persistence, improvisation and commercial understanding of local managers inspires and humbles those with easier conditions.",
   "The persistence, improvisation and commercial understanding of local managers inspires and humbles those with easier conditions."),
  ("1. What challenges do Syrian finance teams face?", "1. What challenges do Moroccan finance teams face?"),
  ("What can international and Syrian managers teach each other about costing under hardship?",
   "What can international and Moroccan managers teach each other about costing under pressure?"),
  ("4. What is the value of Syrian managers in international partnerships?",
   "4. What is the value of Moroccan managers in international partnerships?"),
  ("Syrian managers bring deep cost knowledge that ensures figures reflect how business is actually done.",
   "Moroccan managers bring deep cost knowledge that ensures figures reflect how business is actually done."),
  ("This partnership model respects Syrian expertise and judgement rather than creating dependency on outside support.",
   "This partnership model respects Moroccan expertise and judgement rather than creating dependency on outside support."),
 ],
 5: [
  ("Syrian companies face unique challenges in planning and management. A currency that moves quickly, difficulty importing inputs and spare parts, and restricted transport create real obstacles. Despite these difficulties, Syrian and international managers successfully run textile, food, furniture and pharmaceutical businesses.",
   "Indonesian companies face unique challenges in planning and management. Shipping between islands, difficulty importing spare parts, and uneven transport create real obstacles. Despite these difficulties, Indonesian and international managers successfully run textile, food, furniture and palm-product businesses."),
  ("Good assessment in Syria includes understanding power interruptions and the fairness that lets every department be judged by the same rules.",
   "Good assessment in Indonesia includes understanding shipping schedules and the fairness that lets every department be judged by the same rules."),
  ("They cannot assume that a long order will run without interruption. Successful Syrian plans build flexibility into the figures from the start.",
   "They cannot assume that a long order will ship without delay. Successful Indonesian plans build flexibility into the figures from the start."),
  ("They consider timing—not starting a long run before a known power cut. They consider location—holding a little stock of the input hardest to replace.",
   "They consider timing—not starting a long run before a known monsoon week. They consider location—holding a little stock of the input hardest to replace."),
  ("Durable businesses in Syria build local capacity. Outside support will eventually end. Successful companies train Syrian managers, use methods that can be run with locally available tools",
   "Durable businesses in Indonesia build local capacity. Outside support will eventually end. Successful companies train Indonesian managers, use methods that can be run with locally available tools"),
  ("2. Why do successful Syrian plans build flexibility into the figures?",
   "2. Why do successful Indonesian plans build flexibility into the figures?"),
  ("Successful management in Syria adapts to local values and working practices. Syrian culture values the family, respect for elders, religious faith, personal honour, and craft mastery.",
   "Successful management in Indonesia adapts to local values and working practices. Indonesian culture values the family, respect for elders, religious faith, social harmony, and craft mastery."),
  ("Companies must employ local managers who understand the commercial culture and speak the dialect.",
   "Companies must employ local managers who understand the commercial culture and speak the local language."),
  ("@EX Part 7: Discussion - Learning from Syrian Trade", "@EX Part 7: Discussion - Learning from Indonesian Trade"),
  ("@INSTR Discuss what international partners can learn from Syrian approaches to trade.",
   "@INSTR Discuss what international partners can learn from Indonesian approaches to trade."),
  ("What can international partners learn from how Syrian merchants have traditionally done business?",
   "What can international partners learn from how Indonesian traders have traditionally done business?"),
  ("Syrian merchants have centuries of experience judging a trade by reputation",
   "Indonesian traders have centuries of experience judging a trade by reputation"),
  ("Export work in Syria is particularly important because so many firms need the earnings.",
   "Export work in Indonesia is especially important because so many firms need the earnings."),
  ("Durable businesses build local capacity by training Syrian managers to run the company themselves.",
   "Durable businesses build local capacity by training Indonesian managers to run the company themselves."),
  ("In Syria, these phases must include flexibility for a moving currency and staff input respecting local practice.",
   "In Indonesia, these phases must include flexibility for island shipping and staff input respecting local practice."),
  ("In Syria, inputs sometimes become unavailable because of import restrictions, transport difficulties, or sudden price rises.",
   "In Indonesia, inputs sometimes become unavailable because of import licensing, shipping delays, or sudden price rises."),
  ("@EX Part 7: Cultural Respect in Syrian Business Work", "@EX Part 7: Cultural Respect in Indonesian Business Work"),
  ("@INSTR Read about cultural considerations in Syrian business work and answer questions.",
   "@INSTR Read about cultural considerations in Indonesian business work and answer questions."),
  ("Cultural Adaptation in Syrian Business Management", "Cultural Adaptation in Indonesian Business Management"),
  ("1. Why do successful Syrian companies employ local managers?", "1. Why do successful Indonesian companies employ local managers?"),
 ],
 6: [
  ("Successful cross-functional teams in Syria share scarce resources. Departments might share a delivery vehicle, combine a customs clearance, or coordinate a purchase of a scarce input.",
   "Successful cross-functional teams in Brazil share scarce resources. Departments might share a delivery vehicle, combine a customs clearance, or coordinate a purchase of a scarce input."),
  ("@EX Part 7: Syrian Values of Cooperation and Trade", "@EX Part 7: Brazilian Values of Cooperation and Trade"),
  ("@INSTR Read about how Syrian cultural values support commercial partnerships and answer questions.",
   "@INSTR Read about how Brazilian cultural values support commercial partnerships and answer questions."),
  ("Syrian Cultural Values Supporting Collaboration", "Brazilian Cultural Values Supporting Collaboration"),
  ("Syrian commercial culture has deep traditions of trust, reputation and long relationships that align strongly with partnership approaches in business.",
   "Brazilian commercial culture has deep traditions of trust, reputation and long relationships that align strongly with partnership approaches in business."),
  ("The concept of \"karama\" or dignity is central to Syrian culture. Karama means being treated with respect and keeping personal honour. Partnership approaches honour karama by explaining a delay with a reason rather than simply failing to deliver. A broken promise without explanation damages karama, and a customer who feels slighted will not call you again. Genuine partnership respects karama and fits commercial values.",
   "The idea of \"respeito\" or respect is central to Brazilian culture. Respeito means being treated as a person and keeping personal standing. Partnership approaches honour respeito by explaining a delay with a reason rather than simply failing to deliver. A broken promise without explanation damages respeito, and a customer who feels slighted will not call you again. Genuine partnership respects respeito and fits commercial values."),
  ("Syrian trade values the long relationship over the single transaction. A merchant's reputation travels in the market and lasts for generations. Families have traded with the same partners for decades. This means a Syrian customer responds strongly to being treated as a long-term partner",
   "Brazilian trade values the long relationship over the single transaction. A trader's reputation travels in the market and lasts for generations. Families have traded with the same partners for decades. This means a Brazilian customer responds strongly to being treated as a long-term partner"),
  ("Islamic teachings about honest dealing strengthen the partnership orientation. Islam teaches that a trader must not conceal a defect and must describe goods truthfully.",
   "Church and community teaching about honest dealing strengthens the partnership orientation. The tradition holds that a trader must not conceal a defect and must describe goods truthfully."),
  ("The tradition of the word given in the market supports written agreement backed by personal commitment.",
   "The tradition of the word given in the market supports written agreement backed by personal commitment."),
  ("Syrian hospitality shapes how a negotiation is conducted. A visiting buyer is welcomed and shown the workshop.",
   "Brazilian hospitality shapes how a negotiation is conducted. A visiting buyer is welcomed and shown the workshop."),
  ("1. What does karama mean and how does partnership honour this value?",
   "1. What does respeito mean and how does partnership honour this value?"),
  ("2. How do Islamic teachings support working with customers and suppliers?",
   "2. How does community teaching support working with customers and suppliers?"),
  ("The Syrian context especially needs this collaborative approach. So much of the trade is small and scattered. Rebuilding confidence at this scale cannot be delivered to firms; it has to be done with them, product by product and market by market.",
   "The Brazilian context especially needs this collaborative approach. So much of the trade is small and scattered. Building confidence at this scale cannot be delivered to firms; it has to be done with them, product by product and market by market."),
 ],
 7: [
  ("In Syria, direct relationships have become vital for keeping goods moving when transport is difficult.",
   "In Egypt, direct relationships have become vital for keeping goods moving when transport is difficult."),
  ("In Syria, where advertising reaches few people, direct relationships became vital.",
   "In Egypt, where advertising reaches few buyers directly, trade relationships became vital."),
  ("Syria's service challenges stem from transport and currency. Fuel is costly, roads are slow, prices move between quotation and delivery, and credit is scarce.",
   "Egypt's service challenges stem from transport and currency. Fuel is costly, roads are crowded, prices move between quotation and delivery, and credit is scarce."),
  ("If you were designing marketing and service together for a Syrian company, what would you include?",
   "If you were designing marketing and service together for an Egyptian company, what would you include?"),
  ("@EX Part 7: Trade and Service in Syrian Perspective", "@EX Part 7: Trade and Service in Egyptian Perspective"),
  ("@INSTR Read about Syrian values supporting integrated marketing and service work.",
   "@INSTR Read about Egyptian values supporting integrated marketing and service work."),
  ("Syrian Values Supporting Trade and Service", "Egyptian Values Supporting Trade and Service"),
  ("Syrian traditions provide a strong foundation supporting integrated marketing and service.",
   "Egyptian traditions provide a strong foundation supporting integrated marketing and service."),
  ("The idea of \"amanah\" or trust held on behalf of others is central to Syrian practice.",
   "The idea of \"amanah\" or trust held on behalf of others is central to Egyptian practice."),
  ("Service in Syrian tradition is a moral obligation, not only a commercial calculation.",
   "Service in Egyptian tradition is a moral obligation, not only a commercial calculation."),
  ("Syrian teaching emphasizes the market as a shared responsibility.", "Egyptian teaching emphasizes the market as a shared responsibility."),
  ("Syrian craft ethics require high standards.", "Egyptian craft ethics require high standards."),
  ("Aligning marketing and service with Syrian values creates stronger acceptance and care.",
   "Aligning marketing and service with Egyptian values creates stronger acceptance and care."),
  ("1. How does Syrian tradition support service as a moral obligation?",
   "1. How does Egyptian tradition support service as a moral obligation?"),
  ("2. What traditional Syrian practice supports integrated systems?", "2. What traditional Egyptian practice supports integrated systems?"),
  ("Producer: A furniture workshop outside Homs", "Producer: A furniture workshop outside Damietta"),
  ("In the Syrian context especially, integrated marketing and service could help rebuild what disruption destroyed.",
   "In the Egyptian context especially, integrated marketing and service could rebuild what neglect has cost."),
 ],
 8: [
  ("@EX Part 7: Syrian Values - Hisba and Honest Measure", "@EX Part 7: Thai Values - Sujarit and Honest Measure"),
  ("@INSTR Discuss Syrian traditions of market oversight in business reporting.",
   "@INSTR Discuss Thai traditions of market oversight in business reporting."),
  ("1. In Syrian markets, the muhtasib checked weights and scales and answered to all. How does this connect to honest reporting and measurement?",
   "1. In Thai markets, the royal inspector checked weights and scales and answered to all. How does this connect to honest reporting and measurement?"),
  ("@EX Part 7: Syrian Values - Insaf in Using Findings", "@EX Part 7: Thai Values - Yutitham in Using Findings"),
  ("@INSTR Connect Syrian principles of fairness to the fair use of report findings.",
   "@INSTR Connect Thai principles of fairness to the fair use of report findings."),
  ("1. Insaf means giving each person their due. How should this guide the way a company reports and acts on its results?",
   "1. Yutitham means giving each person their due. How should this guide the way a company reports and acts on its results?"),
  ("Hisba means oversight exercised on behalf of everyone, as the muhtasib checked the weights and scales in the market.",
   "Sujarit means honesty owed to everyone, as the royal inspector checked the weights and scales in the market."),
  ("Insaf requires examining whether every part of the business was treated fairly.",
   "Yutitham asks whether every part of the business was treated fairly."),
  ("Companies pursuing insaf should ensure findings do not blame staff for a variance",
   "Companies pursuing yutitham should ensure findings do not blame staff for a variance"),
  ("Insaf means using figures not to punish but to improve.", "Yutitham means using figures not to punish but to improve."),
 ],
 9: [
  ("@EX Part 7: Syrian Values - Growth with Intention", "@EX Part 7: Polish Values - Growth with Intention"),
  ("@INSTR Connect Syrian community concepts with the growth of a business.",
   "@INSTR Connect Polish community concepts with the growth of a business."),
  ("1. In Syrian tradition, \"ta'awun\" means working together so all who share a task benefit. How does this concept relate to growing a business?",
   "1. In Polish tradition, \"spółdzielczość\" means working together so all who share a task benefit. How does this relate to growing a business?"),
  ("@EX Part 7: Syrian Values - Stewardship", "@EX Part 7: Polish Values - Stewardship"),
  ("@INSTR Discuss Syrian stewardship concepts in lasting business.",
   "@INSTR Discuss Polish stewardship concepts in lasting business."),
  ("1. \"Waqf\" in Syrian usage means something set aside so its benefit continues for generations. How does this principle relate to building a business that outlives its founder?",
   "1. \"Dziedzictwo\" in Polish usage means something handed on so its benefit continues for generations. How does this relate to building a business that outlives its founder?"),
  ("Ta'awun suggests that growth should be intentional, purposeful, and rooted in serving the people who will run the business.",
   "Spółdzielczość suggests that growth be intentional, purposeful, and rooted in serving the people who will run the business."),
  ("In Syrian usage, waqf makes people stewards responsible for something set aside so its benefit continues.",
   "In Polish usage, dziedzictwo makes people stewards responsible for something handed on so its benefit continues."),
 ],
 10: [
  ("@EX Part 7: Syrian Values - Consultation", "@EX Part 7: Kenyan Values - Consultation"),
  ("@INSTR Connect Syrian consultation principles to joint business work.",
   "@INSTR Connect Kenyan consultation principles to joint business work."),
  ("1. In Syrian practice, shura means matters are settled by consultation among those affected. How does this relate to trade associations and change led by the firms themselves?",
   "1. In Kenyan practice, a baraza means matters are settled by consultation among those affected. How does this relate to trade associations and change led by the firms themselves?"),
  ("@EX Part 7: Syrian Values - Justice", "@EX Part 7: Kenyan Values - Justice"),
  ("@INSTR Discuss principles of justice in changing the rules businesses work under.",
   "@INSTR Discuss principles of justice in changing the rules businesses work under."),
  ("1. In Syrian civic tradition, adl means removing unfair treatment and securing each person's due. How does this principle relate to advocacy aimed at changing the rules?",
   "1. In Kenyan civic tradition, haki means removing unfair treatment and securing each person's right. How does this principle relate to advocacy aimed at changing the rules?"),
  ("Shura means that leaders must consult widely before making decisions", "A baraza means that leaders must consult widely before making decisions"),
  ("Shura acknowledges that diverse perspectives improve decisions.", "A baraza acknowledges that diverse perspectives improve decisions."),
  ("Adl-centred advocacy goes beyond solving individual delays", "Haki-centred advocacy goes beyond solving individual delays"),
  ("Adl-guided associations recognize that a failing business climate is not inevitable",
   "Haki-guided associations recognize that a failing business climate is not inevitable"),
  ("Pursuing adl means managers align with the smallest workshops and the employees",
   "Pursuing haki means managers align with the smallest workshops and the employees"),
  ("Pursuing adl may create conflict", "Pursuing haki may create conflict"),
  ("Associations committed to adl view advocacy", "Associations committed to haki view advocacy"),
  ("the banks, the Ministry of Internal Trade, foreign buyers", "the banks, the Competition Authority of Kenya, foreign buyers"),
 ],
}

# a second pass of one-offs, for the company names and the cultural terms that
# only appear in the appendix answers
EXTRA = {
 1: [
  ("After the conflict, managers have had to rebuild businesses that were damaged or moved.",
   "As buyers pressed on price, managers have had to rebuild businesses built for cheap assembly."),
  ("Human resources managers work to keep skilled staff despite low wages and emigration.",
   "Human resources managers work to keep skilled staff despite rising wages and competition."),
 ],
 6: [
  ("Between: Cham Textiles and the Midan Wholesalers' Association",
   "Between: Serra Têxteis and the Mercadão Wholesalers' Association"),
  ("   Cham Textiles:", "   Serra Têxteis:"),
  ("   - 2 members from Cham Textiles", "   - 2 members from Serra Têxteis"),
  ("   Midan Wholesalers' Association:", "   Mercadão Wholesalers' Association:"),
  ("Islamic teaching that a trader must not conceal a defect and must describe goods truthfully",
   "Community teaching that a trader must not conceal a defect and must describe goods truthfully"),
  ("1. Karama means dignity and standing in the market, and partnership respects it by explaining every delay with a reason",
   "1. Respeito means dignity and standing in the market, and partnership respects it by explaining every delay with a reason"),
 ],
 8: [
  ("A reporting system embodies this principle by providing transparent evidence of what was earned and spent.",
   "A reporting system embodies sujarit by providing transparent evidence of what was earned and spent."),
  ("Companies pursuing insaf should ensure findings do not blame staff for a variance",
   "Companies pursuing yutitham should ensure findings do not blame staff for a variance"),
  ("Companies embracing hisba view reporting not as a burden", "Companies embracing sujarit view reporting not as a burden"),
  ("Companies committed to insaf view reporting as a fairness tool", "Companies committed to yutitham view reporting as a fairness tool"),
 ],
}
for _k, _v in EXTRA.items():
    ONE_OFF.setdefault(_k, []).extend(_v)



HITS = {}


def institutions(text, n):
    """Rewrite the registry and the trade regulator."""
    text = text.replace("Ministry of Internal Trade and Consumer Protection", MIN[n])
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
        m = re.match(r"@(?:H2|TRACK) .*?Unit (\d+)\b", l) or re.match(r"@H2 Unit (\d+)\b", l)
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
