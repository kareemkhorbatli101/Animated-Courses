# CMA Part 2 — the four books

Source: **IMA, Certified Management Accountant Learning Outcome Statements (Content Specification Outlines effective September 1, 2024)**

263 learning outcome statements, over four books of eighteen chapters.
Every statement is placed; `check_plan.py` proves it, and fails the build
if a later edit drops one.

## The sequence, and why it is this one

The LOS is written in exam order, which is not teaching order. The books
follow the order the subject is actually built in:

1. **Read the statements.** Everything else in Part 2 acts on numbers,
   and Part 1 ended by preparing them. Book 1 opens on the very balance
   sheet and income statement Part 1 closed with.
2. **Pay for it.** What a company is worth, what money costs it, and
   where it comes from — long-term first, then the working year.
3. **Choose.** Decisions of rising size and horizon: one order, one
   product line, one price, one machine, one company.
4. **Guard it.** What can go wrong, what a currency does to you, and
   what you owe whatever the numbers say.

Two subsections move out of Section B, because the exam groups them by
topic and a reader meets them by purpose:

- **B.5 corporate restructuring** joins Book 3, at the end of the
  capital-investment run. Valuing an acquisition by discounted cash
  flow is the same act as valuing a machine, one order of magnitude up,
  and B.5(f) says so in as many words.
- **B.6 international finance** joins Book 4, beside enterprise risk.
  B.6(d) and B.6(f) are hedging statements: "how currency futures,
  swaps and options can be used to manage exchange rate risk", and
  "recommend methods of managing exchange rate risk". That is risk
  management, and it is taught with it.

## The four books

| | title | covers | chapters | statements | a chapter |
|---|---|---|---|---|---|
| 1 | **Reading the Statements** — Financial Statement Analysis | Section A (20% of the exam) | 18 | 44 | 2.4 |
| 2 | **Paying for It** — Corporate Finance | Sections B.1–B.4 (about 17% of the exam) | 18 | 78 | 4.3 |
| 3 | **Choosing** — Business Decision Analysis and Capital Investment | Section C, Section E and B.5 (about 36% of the exam) | 18 | 77 | 4.3 |
| 4 | **What Can Go Wrong, and What You Owe** — Enterprise Risk Management, Currency Exposure and Professional Ethics | Section D, B.6 and Section F (about 27% of the exam) | 18 | 64 | 3.6 |

Part 1 ran 2.7 to 6.7 statements a chapter across its four books, so
this spread sits inside what the series has already shipped.

## The world

Orontes Foods, Inc. — the company of Part 1, now analysed, financed, decided upon and governed.

Book 1 analyses the statements Part 1 Book 1 prepared — the same
comparative balance sheet at 31 December 2025 and 2024, the same income
statement, the same statement of cash flows. They tie: assets of
$31,672,600 against liabilities of $11,279,625 and equity of
$20,392,975. A reader who worked Part 1 recognises every line, and a
ratio that comes out at 3.32 can be traced back to a number he wrote
himself. Barada Wholesale, Jordan Glass Co., Levant Commerce Bank and
Gulf Factor Co. carry over with it.

---

## Book 1 — Reading the Statements

*Financial Statement Analysis.* Section A (20% of the exam).

- **A.1 Comparative financial statement analysis**
- **A.2 Financial ratios**
- **A.3 Profitability analysis**
- **A.4 Special issues**

**1. Why anyone reads a statement twice**

   - `A.2x` demonstrate a familiarity with the sources of financial information about public companies and industry ratio averages

**2. Common-size statements: both sides as percentages**

   - `A.1a` for the balance sheet and income statement, prepare and analyze common-size financial statements (i.e., calculate percentage of assets and sales, respectively; also called vertical analysis)

**3. Horizontal analysis and the base year**

   - `A.1b` for the balance sheet and income statement, prepare a comparative financial statement horizontal analysis (i.e., calculate year-over-year trends for every item on the financial statement compared to a base year)

**4. Growth rates, and variation analysis**

   - `A.1c` calculate the growth rate of individual line items on the balance sheet and income statement
   - `A.3i` define and perform a variation analysis (percentage change over time)

**5. Reading the pattern: what a trend tells a manager**

   - `A.1d` analyze financial statement data to identify patterns and trends that can be used to make business decisions

**6. Liquidity: the five ratios**

   - `A.2a` calculate and interpret the current ratio, the quick (acid-test) ratio, the cash ratio, the cash flow ratio, and the net working capital ratio
   - `A.2c` demonstrate an understanding of the liquidity of current liabilities

**7. What moves a liquidity ratio**

   - `A.2b` explain how changes in one or more of the elements of current assets, current liabilities, and/or unit sales can change the liquidity ratios and calculate that impact

**8. Solvency, and the two leverages**

   - `A.2d` define solvency and distinguish from liquidity
   - `A.2e` define operating leverage and financial leverage
   - `A.2f` calculate degree of operating leverage and degree of financial leverage

**9. Capital structure and the leverage ratios**

   - `A.2g` demonstrate an understanding of the effect on the capital structure and solvency of a company with a change in the composition of debt vs. equity by calculating leverage ratios
   - `A.2h` calculate and interpret the financial leverage ratio (equity multiplier) and determine the effect of a given change in capital structure on this ratio
   - `A.2i` calculate and interpret the following ratios: debt-to-equity, long-term debt-to- equity, and debt-to-total assets
   - `A.2k` discuss how capital structure decisions affect the risk profile of a company

**10. Covering the fixed charges**

   - `A.2j` define, calculate, and interpret the following ratios: fixed charge coverage (earnings to fixed charges), interest coverage (times interest earned), and cash flow to fixed charges

**11. Activity: the turnovers**

   - `A.2l` calculate and interpret accounts receivable turnover, inventory turnover, and accounts payable turnover
   - `A.2o` calculate and interpret total asset turnover and fixed asset turnover

**12. Days, the operating cycle and the cash cycle**

   - `A.2m` calculate and interpret days sales outstanding in receivables, days sales in inventory, and days purchases in accounts payable
   - `A.2n` define and calculate the operating cycle and the cash cycle of a company

**13. Margins, from gross profit to EBITDA**

   - `A.2p` calculate and interpret gross profit margin percentage; operating profit margin percentage; net profit margin percentage; and EBITDA margin percentage
   - `A.3g` analyze cost of sales by calculating and interpreting the gross profit margin
   - `A.3h` distinguish between gross profit margin, operating profit margin, and net profit margin, and analyze the effects of changes in the components of each

**14. ROA, ROE and the DuPont decomposition**

   - `A.2q` calculate and interpret ROA and ROE
   - `A.3a` demonstrate an understanding of the factors that contribute to inconsistent definitions of “equity,” “assets,” and “return” when using ROA and ROE
   - `A.3b` determine the effect on return on total assets of a change in one or more elements of the financial statements

**15. Sustainable growth; book value against market value**

   - `A.3j` calculate and interpret sustainable equity growth
   - `A.2s` calculate and interpret book value per share
   - `A.2t` identify and explain the limitations of book value per share
   - `A.4d` distinguish between book value and market value, and distinguish between accounting profit and economic profit

**16. The market's ratios: P/E, EPS, yield and payout**

   - `A.2r` calculate and interpret the market/book ratio and the price/earnings ratio
   - `A.2u` calculate and interpret basic and diluted EPS
   - `A.2v` calculate and interpret earnings yield, dividend yield, dividend payout ratio, and shareholder return

**17. Revenue, receivables and the quality of earnings**

   - `A.3c` identify factors to be considered in measuring income, including estimates, accounting methods, disclosure incentives, and the different needs of users
   - `A.3d` explain the importance of the source, stability, and trend of sales and revenue
   - `A.3e` demonstrate an understanding of the relationship between revenue and receivables and revenue and inventory
   - `A.3f` determine and analyze the effect on revenue of changes in revenue recognition and measurement methods
   - `A.4e` identify the determinants and indicators of earnings quality and explain why they are important

**18. When a ratio lies: currency, inflation, a change of method — and the verdict**

   - `A.4a` demonstrate an understanding of the impact of foreign exchange rate changes on financial statements (1) identify and explain issues in the accounting for foreign operations (e.g., historical vs. current rate and the treatment of translation gains and losses) (2) define functional currency (3) calculate the financial ratio impact of a change in exchange rates (4) discuss the possible impact on management and investor behavior of volatility in reported earnings
   - `A.4b` demonstrate an understanding of the impact of inflation on financial ratios and the reliability of financial ratios
   - `A.4c` describe how to adjust financial statements for changes in accounting treatments (principles, estimates, and errors) and how these adjustments impact financial ratios
   - `A.2w` identify the limitations of ratio analysis
   - `A.2y` evaluate the financial strength and performance of an entity based on multiple ratios

---

## Book 2 — Paying for It

*Corporate Finance.* Sections B.1–B.4 (about 17% of the exam).

- **B.1 Financial risk and return**
- **B.2 Long-term financial management**
- **B.3 Raising capital**
- **B.4 Working capital management**

**1. Return, and the risks a company carries**

   - `B.1a` calculate rates of return
   - `B.1b` identify and demonstrate an understanding of systematic (market) risk and unsystematic (company) risk
   - `B.1c` identify and demonstrate an understanding of credit risk, foreign exchange risk, interest rate risk, and market risk
   - `B.1d` demonstrate an understanding of the relationship between risk and return

**2. Portfolios, diversification, beta and the CAPM**

   - `B.1e` distinguish between individual security risk and portfolio risk
   - `B.1f` demonstrate an understanding of diversification
   - `B.1g` define beta and explain how a change in beta impacts a security’s price
   - `B.1h` demonstrate an understanding of the Capital Asset Pricing Model (CAPM) and calculate the expected risk-adjusted returns using CAPM

**3. The term structure, inflation, and the price of money**

   - `B.2a` describe the term structure of interest rates and explain why it changes over time
   - `B.2p` demonstrate an understanding of the relationship among inflation, interest rates, and the prices of financial instruments
   - `B.2c` identify and describe the basic features of a bond such as maturity, par value, coupon rate, redemption provisions, conversion provisions, covenants, options granted to the issuer or investor, indentures, and restrictions

**4. What a bond is worth; duration; issuing and refinancing**

   - `B.2e` value bonds, common stock, and preferred stock using discounted cash flow methods
   - `B.2f` demonstrate an understanding of duration as a measure of bond interest rate sensitivity
   - `B.2d` identify and evaluate debt issuance or refinancing strategies
   - `B.2g` explain how income taxes impact financing decisions

**5. Shares: common, preferred, and what they are worth**

   - `B.2b` define and identify the characteristics of common stock and preferred stock
   - `B.2w` use the constant growth dividend discount model to value stock and demonstrate an understanding of the two-stage dividend discount model
   - `B.2x` demonstrate an understanding of relative or comparable valuation methods, such as price/earnings (P/E) ratios, market/book ratios, and price/sales ratios

**6. Futures, forwards and options**

   - `B.2h` define and demonstrate an understanding of derivatives and their uses
   - `B.2i` identify and describe the basic features of futures and forwards
   - `B.2j` distinguish a long position from a short position
   - `B.2k` define options, and distinguish between a call and a put by identifying the characteristics of each
   - `B.2l` define strike price (exercise price), option premium, and intrinsic value
   - `B.2m` demonstrate an understanding of the interrelationship of the variables that comprise the value of an option (e.g., relationship between exercise price and strike price, and value of a call)

**7. Swaps, leases, convertibles, warrants; tax and capital structure**

   - `B.2n` define interest rate and foreign currency swaps
   - `B.2o` define and identify characteristics of other sources of long-term financing, such as leases, convertible securities, and warrants
   - `B.2v` demonstrate an understanding of how income taxes impact capital structure and capital investment decisions

**8. The cost of capital, the WACC and the marginal cost**

   - `B.2q` define the cost of capital and demonstrate an understanding of its applications in capital structure decisions
   - `B.2r` determine weighted average cost of capital (WACC) and the cost of its individual components
   - `B.2s` calculate the marginal cost of capital
   - `B.2t` explain the importance of using marginal cost as opposed to historical cost
   - `B.2u` demonstrate an understanding of the use of the cost of capital in capital investment decisions

**9. Markets, efficiency, ratings and the investment bank**

   - `B.3a` identify the characteristics of the different types of financial markets and exchanges
   - `B.3b` demonstrate an understanding of the concept of market efficiency, including the strong form, semi-strong form, and weak form of market efficiency
   - `B.3c` describe the role of the credit rating agencies
   - `B.3d` demonstrate an understanding of the roles of investment banks, including underwriting, advice, and trading

**10. Going public, buying back, and insider trading**

   - `B.3e` define IPOs
   - `B.3f` define subsequent/secondary offerings
   - `B.3k` define share repurchase and explain why a company would repurchase its stock
   - `B.3l` define insider trading and explain why it is illegal

**11. Dividends, dividend policy, debt against equity, and leasing**

   - `B.3h` define the different types of dividends, including cash dividends, stock dividends, and stock splits
   - `B.3i` identify and discuss the factors that influence the dividend policy of a company
   - `B.3j` demonstrate an understanding of the dividend payment process for both common and preferred stock
   - `B.3m` identify the advantages and disadvantages of debt financing vs. equity financing
   - `B.3g` describe lease financing, explain its advantages and disadvantages, and calculate the net advantage to leasing using discounted cash flow concepts

**12. Working capital, and the forecast that manages it**

   - `B.4a` define working capital and identify its components
   - `B.4b` calculate net working capital
   - `B.4c` explain the benefit of short-term financial forecasts in the management of working capital

**13. Cash: why it is held, and how it is forecast**

   - `B.4d` identify and describe factors influencing the levels of cash
   - `B.4e` identify and explain the three motives for holding cash
   - `B.4f` prepare forecasts of future cash flows

**14. Speeding collections and slowing payments**

   - `B.4g` identify methods of speeding up cash collections
   - `B.4h` calculate the net benefit of a lockbox system
   - `B.4i` define concentration banking
   - `B.4j` demonstrate an understanding of compensating balances
   - `B.4k` identify methods of slowing down disbursements
   - `B.4l` demonstrate an understanding of disbursement float and overdraft systems

**15. Marketable securities**

   - `B.4m` identify and describe reasons for holding marketable securities
   - `B.4n` define the different types of marketable securities, including money market instruments, T-bills, treasury notes, treasury bonds, repurchase agreements, federal agency securities, banker’s acceptances, commercial paper, negotiable CDs, Eurodollar CDs, and other marketable securities
   - `B.4o` evaluate the trade-offs among the variables in marketable security selections, including safety, marketability/liquidity, yield, maturity, and taxability
   - `B.4p` demonstrate an understanding of the risk and return trade-off

**16. Receivables and credit policy**

   - `B.4q` identify the factors influencing the level of receivables
   - `B.4r` demonstrate an understanding of the impact of changes in credit terms or collection policies on accounts receivable, working capital, and sales volume
   - `B.4s` define default risk
   - `B.4t` identify and explain the factors involved in determining an optimal credit policy

**17. Inventory: lead time, safety stock, EOQ and JIT**

   - `B.4u` define lead time and safety stock, and identify reasons for carrying inventory and the factors influencing its level
   - `B.4v` identify and calculate the costs related to inventory, including carrying costs, ordering costs, and shortage (stockout) costs
   - `B.4w` explain how a just-in-time (JIT) inventory management system helps manage inventory
   - `B.4x` identify the interaction between high inventory turnover and high gross margin (calculation not required)
   - `B.4y` demonstrate an understanding of economic order quantity (EOQ) and how a change in one variable would affect the EOQ (calculation not required)

**18. Short-term credit, the cost of working capital, and a strategy for current assets**

   - `B.4z` demonstrate an understanding of how risk affects a company’s approach to its current asset financing policy (aggressive, conservative, etc.)
   - `B.4aa` identify and describe the different types of short-term credit, including trade credit, short-term bank loans, commercial paper, lines of credit, banker’s acceptances, and letters of credit
   - `B.4bb` estimate the annual cost and effective annual interest rate of not taking a cash discount
   - `B.4cc` calculate the effective annual interest rate of a bank loan with a compensating balance requirement and/or a commitment fee
   - `B.4dd` demonstrate an understanding of factoring accounts receivable and calculate the cost of factoring
   - `B.4ee` explain the maturity matching or hedging approach to financing
   - `B.4ff` demonstrate an understanding of the factors involved in managing the costs of working capital
   - `B.4gg` recommend a strategy for managing current assets that would fulfill a given objective

---

## Book 3 — Choosing

*Business Decision Analysis and Capital Investment.* Section C, Section E and B.5 (about 36% of the exam).

- **B.5 Corporate restructuring**
- **C.1 Cost/volume/profit analysis**
- **C.2 Marginal analysis**
- **C.3 Pricing**
- **E.1 Capital budgeting process**
- **E.2 Capital investment analysis methods**

**1. Cost behaviour, contribution margin and the breakeven point**

   - `C.1a` demonstrate an understanding of how cost/volume/profit (CVP) analysis (breakeven analysis) is used to examine the behavior of total revenues, total costs, and operating income as changes occur in output levels, selling prices, variable costs per unit, or fixed costs
   - `C.1c` differentiate between costs that are fixed and costs that are variable with respect to levels of output
   - `C.1d` explain why the classification of fixed vs. variable costs is affected by the time frame being considered
   - `C.1e` calculate contribution margin per unit and total contribution margin
   - `C.1f` calculate the breakeven point in units and dollar sales to achieve targeted operating income or targeted net income

**2. Operating income at different levels; targets and income taxes**

   - `C.1b` calculate operating income at different operating levels
   - `C.1l` demonstrate an understanding of the impact of income taxes on CVP analysis

**3. Sales mix, and why several products have no single breakeven**

   - `C.1g` demonstrate an understanding of how changes in unit sales mix affect operating income in multiple-product situations
   - `C.1h` calculate multiple-product breakeven points given percentage share of sales and explain why there is no unique breakeven point in multiple-product situations

**4. Margin of safety, sensitivity, and the recommendation**

   - `C.1i` define, calculate, and interpret the margin of safety and the margin of safety ratio
   - `C.1j` explain how sensitivity analysis can be used in CVP analysis when there is uncertainty about sales
   - `C.1k` analyze and recommend a course of action using CVP analysis

**5. What is relevant: sunk, avoidable, explicit, implicit**

   - `C.2a` identify and define relevant costs (incremental, marginal, or differential costs), sunk costs, avoidable costs, explicit and implicit costs, split-off point, joint production costs, separable processing costs, and relevant revenues
   - `C.2b` explain why sunk costs are not relevant in the decision-making process

**6. Opportunity cost, and relevant cost in a numerical scenario**

   - `C.2c` demonstrate an understanding of and calculate opportunity costs
   - `C.2d` calculate relevant costs given a numerical scenario

**7. Marginal cost, marginal revenue, the averages, and the special order**

   - `C.2e` define and calculate marginal cost and marginal revenue
   - `C.2f` identify and calculate total cost, average fixed cost, average variable cost, and average total cost
   - `C.2g` demonstrate proficiency in the use of marginal analysis for decisions
   - `C.2h` calculate the effect on operating income of a decision to accept or reject a special order when there is idle capacity and the order has no long-term implications

**8. Make or buy**

   - `C.2i` identify and describe qualitative factors in make-or-buy decisions, such as product quality and dependability of suppliers
   - `C.2j` calculate the effect on operating income of a make-or-buy decision

**9. Process further, drop or add, capacity, taxes, and the recommendation**

   - `C.2k` calculate the effects on operating income of a decision to sell or process further or to drop or add a segment
   - `C.2l` identify the effects of changes in capacity on production decisions
   - `C.2m` demonstrate an understanding of the impact of income taxes on marginal analysis
   - `C.2n` recommend a course of action using marginal analysis

**10. Cost-based and market-based pricing**

   - `C.3a` identify different pricing methodologies, including market comparables, cost- based, and value-based approaches
   - `C.3b` differentiate between a cost-based approach and a market-based approach to setting prices
   - `C.3c` calculate selling price using a cost-based approach
   - `C.3l` define the pricing technique of cost plus target rate of return

**11. Demand, market structure and elasticity**

   - `C.3d` demonstrate an understanding of how a company’s pricing of a product or service is affected by the demand for and supply of the product or service, as well as the market structure within which the company operates
   - `C.3e` demonstrate an understanding of the impact of cartels on pricing
   - `C.3f` demonstrate an understanding of the short-term equilibrium price for the company in (i) pure competition, (ii) monopolistic competition, (iii) oligopoly, and (iv) monopoly using the concepts of marginal revenue and marginal cost
   - `C.3m` calculate the price elasticity of demand using the midpoint formula
   - `C.3n` define and explain elastic and inelastic demand
   - `C.3o` estimate total revenue given changes in prices and demand as well as elasticity

**12. Target pricing, target costing and value engineering**

   - `C.3g` identify techniques used to set prices based on understanding customers’ perceptions of value and competitors’ technologies, products, and costs
   - `C.3h` define and demonstrate an understanding of target pricing and target costing, and identify the main steps in developing target prices and target costs
   - `C.3i` define value engineering
   - `C.3j` calculate the target operating income per unit and target cost per unit
   - `C.3k` define and distinguish between a value-added cost and a nonvalue-added cost

**13. Pricing over the product life cycle**

   - `C.3p` discuss how pricing decisions can differ in the short term and in the long term
   - `C.3q` define product life cycle, identify and explain the four stages of the product life cycle, and explain why pricing decisions might differ over the life of a product
   - `C.3r` evaluate and recommend pricing strategies under specific market conditions

**14. The capital budget, and its relevant cash flows**

   - `E.1a` define capital budgeting and identify the steps or stages undertaken in developing and implementing a capital budget for a project
   - `E.1b` identify and calculate the relevant cash flows of a capital investment project on both a pretax and after-tax basis
   - `E.1c` demonstrate an understanding of how income taxes affect cash flows
   - `E.1d` distinguish between cash flows and accounting profits and discuss the relevance to capital budgeting of incremental cash flow, sunk cost, and opportunity cost
   - `E.1e` explain the importance of changes in net working capital in capital budgeting
   - `E.1f` discuss how the effects of inflation are reflected in capital budgeting analysis

**15. Hurdle rate, risk, real options and the postaudit**

   - `E.1g` define hurdle rate
   - `E.1h` identify alternative approaches to dealing with risk in capital budgeting
   - `E.1i` distinguish among sensitivity analysis, scenario analysis, and Monte Carlo simulation as risk analysis techniques
   - `E.1j` explain why a discount rate specifically adjusted for risk should be used when project cash flows are more risky or less risky than is normal for a company or business unit
   - `E.1k` explain how the value of a capital investment is increased if consideration is given to the possibility of adding on, speeding up, slowing down, or discontinuing early
   - `E.1l` demonstrate an understanding of real options, including the options to abandon, delay, expand, and scale back (calculations not required)
   - `E.1m` identify and discuss qualitative considerations involved in the capital budgeting decision
   - `E.1n` describe the role of the postaudit in the capital budgeting process

**16. NPV and IRR**

   - `E.2a` demonstrate an understanding of the two main discounted cash flow (DCF) methods, NPV and IRR
   - `E.2b` calculate NPV and IRR
   - `E.2c` demonstrate an understanding of the decision criteria used in NPV and IRR analyses to determine acceptable projects
   - `E.2d` compare NPV and IRR focusing on the relative advantages and disadvantages of each method, particularly with respect to independent vs. mutually exclusive projects and the “multiple IRR problem”
   - `E.2e` explain why NPV and IRR methods can produce conflicting rankings for capital projects if not applied properly
   - `E.2f` identify assumptions of NPV and IRR
   - `E.2g` evaluate and recommend project investments on the basis of DCF analysis

**17. Payback, discounted payback and the profitability index**

   - `E.2h` demonstrate an understanding of the payback and discounted payback methods
   - `E.2i` identify the advantages and disadvantages of the payback and discounted payback methods
   - `E.2j` calculate payback periods and discounted payback periods
   - `E.2k` define and calculate the profitability index
   - `E.2l` describe how sensitivity analysis is used in capital investment decision analysis

**18. Buying a business: mergers, buyouts, defences, divestitures and the valuation**

   - `B.5a` demonstrate an understanding of the following: (1) mergers and acquisitions, including horizontal, vertical, and conglomerate (2) leveraged buyouts
   - `B.5b` identify and describe defenses against takeovers (e.g., golden parachute, leveraged recapitalization, poison pill (shareholders’ rights plan), staggered Board of Directors, fair price, voting rights plan, white knight)
   - `B.5c` identify and describe divestiture concepts such as spin-offs, split-ups, equity carve-outs, and tracking stock
   - `B.5d` evaluate key factors in a company’s financial situation and determine if a restructuring would be beneficial to shareholders
   - `B.5e` identify possible synergies in targeted mergers and acquisitions
   - `B.5f` value a business, a business segment, and a business combination using the discounted cash flow method
   - `B.5g` evaluate a proposed business combination and make a recommendation based on both quantitative and qualitative considerations

---

## Book 4 — What Can Go Wrong, and What You Owe

*Enterprise Risk Management, Currency Exposure and Professional Ethics.* Section D, B.6 and Section F (about 27% of the exam).

- **B.6 International finance**
- **D.1 Enterprise risk**
- **F.1 Business ethics**
- **F.2 Ethical considerations for management accounting and financial**
- **F.3 Ethical considerations for the organization**

**1. The kinds of risk**

   - `D.1a` identify and explain the different types of risk, including business risk, hazard risk, financial risk, operational risk, and strategic risk
   - `D.1b` demonstrate an understanding of operational risk
   - `D.1c` define legal risk, compliance risk, and political risk

**2. Volatility, time, and capital adequacy**

   - `D.1d` demonstrate an understanding of how volatility and time impact risk
   - `D.1e` define the concept of capital adequacy (i.e., solvency, liquidity, reserves, and sufficient capital)

**3. Probability, expected loss, unexpected loss and the maximum possible**

   - `D.1f` explain the use of probabilities in determining exposure to risk and calculate expected loss given a set of probabilities
   - `D.1g` define the concepts of unexpected loss and maximum possible loss (extreme or catastrophic loss)

**4. Inherent risk, residual risk, and what managing it is worth**

   - `D.1j` demonstrate an understanding of the concept of residual risk and distinguish it from inherent risk
   - `D.1k` identify and explain the benefits of risk management

**5. Responding: avoid, retain, reduce, transfer, exploit**

   - `D.1h` identify strategies for risk response (or treatment), including actions to avoid, retain, reduce (mitigate), transfer (share), and exploit (accept) risks
   - `D.1i` define risk transfer (e.g., purchasing insurance, issuing debt)
   - `D.1n` demonstrate a general understanding of the use of liability/hazard insurance to transfer risk (detailed knowledge not required)

**6. The risk management process, and attitude to risk**

   - `D.1l` identify and describe the key steps in the risk management process
   - `D.1m` explain how attitude toward risk might affect the management of risk

**7. Managing operational risk and financial risk**

   - `D.1o` identify methods of managing operational risk
   - `D.1p` identify and explain financial risk management methods

**8. Assessing risk: maps, ranking, and the quantitative tools**

   - `D.1q` identify and explain qualitative risk assessment tools including risk identification, risk ranking, and risk maps
   - `D.1r` identify and explain quantitative risk assessment tools including cash flow at risk, earnings at risk, earnings distributions, and EPS distributions
   - `D.1s` identify and explain Value at Risk (VaR) (calculations not required)
   - `D.1u` identify event identification techniques and provide examples of event identification within the context of an ERM approach

**9. Enterprise risk management, COSO, and the cost-benefit case**

   - `D.1t` define enterprise risk management (ERM), and identify and describe key objectives, components, and benefits of an ERM program
   - `D.1v` explain how ERM practices are integrated with corporate governance, risk analytics, portfolio management, performance management, and internal control practices
   - `D.1w` evaluate scenarios and recommend risk mitigation strategies
   - `D.1x` prepare a cost-benefit analysis and demonstrate an understanding of its uses in risk assessment and decision making
   - `D.1y` demonstrate an understanding of the COSO Enterprise Risk Management— Integrated Framework

**10. Currency: what moves a rate, and what a move costs**

   - `B.6a` demonstrate an understanding of foreign currencies and how foreign currency affects the prices of goods and services
   - `B.6b` identify the variables that affect exchange rates
   - `B.6c` calculate whether a currency has depreciated or appreciated against another currency over time and evaluate the impact of the change
   - `B.6e` calculate the net profit/loss of cross-border transactions and evaluate the impact of this net profit/loss

**11. Hedging exposure, diversifying abroad, and financing trade**

   - `B.6d` demonstrate how currency futures, currency swaps, and currency options can be used to manage exchange rate risk
   - `B.6f` recommend methods of managing exchange rate risk and calculate the net profit/loss of the recommended methods
   - `B.6g` identify and explain the benefits of international diversification
   - `B.6h` identify and explain common trade financing methods, including cross-border factoring, letters of credit, banker’s acceptances, forfaiting, and countertrade

**12. Business ethics, and the shapes fraud takes**

   - `F.1a` define business ethics
   - `F.1b` define the concepts of fairness, integrity, due diligence, and fiduciary responsibility, and how they impact ethical decision making
   - `F.1c` identify and explain the different types of business fraud, such as asset misappropriation, manipulation of financial statements, cash and inventory theft, payroll fraud, fake suppliers, and accounts receivable fraud

**13. The IMA Statement: four principles, four standards**

   - `F.2a` identify and describe the four overarching ethical principles and the four standards
   - `F.2b` evaluate a given business situation for its ethical implications
   - `F.2c` identify and describe relevant standards that may have been violated in a given business situation and explain why the specific standards are applicable

**14. Resolving a dilemma, and the fraud triangle**

   - `F.2d` recommend a course of action for management accounting and financial management professionals to take when confronted with an ethical dilemma in the business environment
   - `F.2e` evaluate and propose resolutions for ethical issues such as fraudulent reporting or improper manipulation of forecasts, analyses, results, and budgets
   - `F.2f` identify the three components of the triangle
   - `F.2g` use the model to explain how a management accounting and financial management professional can identify and manage the risk of fraud

**15. Values across borders; ethics, law and internal control**

   - `F.3a` discuss the issues organizations face in applying their values and ethical standards internationally
   - `F.3b` demonstrate an understanding of the relationship between ethics and internal controls
   - `F.3n` demonstrate an understanding of the differences between ethical and legal behavior

**16. Corporate culture, the code of conduct, and core values**

   - `F.3c` define corporate culture and demonstrate an understanding of the role corporate culture plays in ethical decision making
   - `F.3d` demonstrate an understanding of the importance of a code of conduct and how it contributes to an organization’s ethical culture
   - `F.3e` demonstrate an understanding of the ways ethical values benefit an organization
   - `F.3k` explain the importance of an organization’s core values and how they promote ethical behavior and ethical decision making

**17. Tone at the top, ethical leadership, training, groupthink and diversity**

   - `F.3f` analyze the impact of groupthink on ethical behavior
   - `F.3g` discuss how diversity of thought can lead to good ethical decisions
   - `F.3h` demonstrate an understanding of the role of “leadership by example” or “tone at the top” in determining an organization’s ethical environment
   - `F.3i` define ethical leadership, and identify and explain the traits of ethical leaders
   - `F.3j` explain the importance of creating a climate where “doing the right thing” is expected (e.g., hiring the right people, providing them with training, and practicing consistent values-based leadership)
   - `F.3l` discuss the importance of employee training to maintaining an ethical organizational culture

**18. Whistleblowing, bribery law, responsibility, sustainability and data ethics**

   - `F.3m` explain the importance of a whistleblowing framework to maintain an ethical organizational culture
   - `F.3o` identify the purpose of anti-bribery laws, such as the U.S. Foreign Corrupt Practices Act (FCPA) and the U.K. Bribery Act
   - `F.3p` discuss corporate responsibility for ethical conduct
   - `F.3q` define and demonstrate an understanding of the major issues of sustainability and social responsibility
   - `F.3r` identify and define the four levels of social responsibility: economic, legal, ethical, and philanthropic
   - `F.3s` identify and define the three conceptual spheres of sustainability: economic, environmental, and social
   - `F.3t` define data ethics and explain the principles of fairness, privacy, transparency, ownership, and accountability with respect to how companies and artificial intelligence (AI) models use and maintain the data they collect
   - `F.3u` demonstrate a general understanding of the purpose of governmental data protection regulations Acronyms/Abbreviations

