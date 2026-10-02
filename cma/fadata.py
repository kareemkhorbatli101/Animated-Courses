# -*- coding: utf-8 -*-
"""Northwind Components, Inc. — the company carried through Section A.

One company, one year, one set of statements that actually articulate. A
student meets this balance sheet in Volume 1, writes the allowance that sits
inside its receivables line in Volume 3, chooses the cost flow assumption
behind its inventory line in Volume 4, and values the securities behind its
investment line in Volume 6.

Nothing here is typed twice. Every total is derived, so a figure cannot
disagree with itself, and check.py recomputes the articulation from scratch:
the balance sheet balances both years, the retained earnings roll-forward
closes, and the statement of cash flows lands on the cash on the balance
sheet.
"""
from data import money, num

Y, PY = '20X4', '20X3'


class NW:
    name = 'Northwind Components, Inc.'
    short = 'Northwind'
    what = 'imports and distributes electronic components to equipment makers'

    # ---- income statement, 20X4 --------------------------------------------
    sales = 4_800_000
    cogs = 2_880_000
    selling = 560_000
    admin = 345_000
    dep_amort = 275_000            # 250,000 depreciation + 25,000 amortisation
    interest = 90_000
    gain_disposal = 30_000
    tax_rate = 0.25

    # ---- balance sheet, 20X4 then 20X3 -------------------------------------
    cash, cash_py = 420_000, 285_000
    ar_gross, ar_gross_py = 760_000, 690_000
    allowance, allowance_py = 46_000, 38_000
    inventory, inventory_py = 845_000, 780_000
    prepaid, prepaid_py = 61_000, 54_000

    afs, afs_py = 390_000, 330_000
    ppe_gross, ppe_gross_py = 3_200_000, 2_950_000
    accum_dep, accum_dep_py = 1_180_000, 1_075_000
    intangibles, intangibles_py = 240_000, 265_000
    goodwill, goodwill_py = 300_000, 300_000

    ap, ap_py = 530_000, 495_000
    accrued, accrued_py = 185_000, 170_000
    taxes_payable, taxes_payable_py = 95_000, 82_000
    ltd_current, ltd_current_py = 150_000, 150_000
    ltd, ltd_py = 1_200_000, 1_350_000
    dtl, dtl_py = 160_000, 128_000

    common_stock, common_stock_py = 300_000, 280_000
    apic, apic_py = 1_020_000, 900_000
    retained, retained_py = 1_274_000, 934_000
    aoci, aoci_py = 76_000, 52_000

    # ---- the year's movements ----------------------------------------------
    dividends = 170_000
    shares_issued = 20_000         # at $7, par $1
    issue_price = 7
    par = 1

    depreciation = 250_000         # the PP&E half of dep_amort
    amortisation = 25_000          # the intangible half
    ppe_purchased = 430_000
    disposal_cost = 180_000
    disposal_accum = 145_000
    disposal_proceeds = 65_000

    afs_purchased = 28_000
    afs_gain_pretax = 32_000       # unrealised, to other comprehensive income

    deferred_tax_pl = 24_000       # the deferred half of income tax expense
    deferred_tax_oci = 8_000       # the tax inside other comprehensive income

    writeoffs = 31_000
    recoveries = 4_000

    debt_repaid = 150_000

    # ---- income statement, derived -----------------------------------------
    @property
    def gross_margin(self):
        return self.sales - self.cogs

    @property
    def opex(self):
        return self.selling + self.admin + self.dep_amort

    @property
    def operating_income(self):
        return self.gross_margin - self.opex

    @property
    def pretax(self):
        return self.operating_income - self.interest + self.gain_disposal

    @property
    def tax(self):
        return self.pretax * self.tax_rate

    @property
    def net_income(self):
        return self.pretax - self.tax

    @property
    def current_tax(self):
        return self.tax - self.deferred_tax_pl

    @property
    def oci(self):
        """Unrealised gain on available-for-sale debt securities, net of tax."""
        return self.afs_gain_pretax - self.deferred_tax_oci

    @property
    def comprehensive_income(self):
        return self.net_income + self.oci

    # ---- balance sheet, derived --------------------------------------------
    @property
    def ar_net(self):
        return self.ar_gross - self.allowance

    @property
    def ar_net_py(self):
        return self.ar_gross_py - self.allowance_py

    @property
    def current_assets(self):
        return self.cash + self.ar_net + self.inventory + self.prepaid

    @property
    def current_assets_py(self):
        return self.cash_py + self.ar_net_py + self.inventory_py + self.prepaid_py

    @property
    def ppe_net(self):
        return self.ppe_gross - self.accum_dep

    @property
    def ppe_net_py(self):
        return self.ppe_gross_py - self.accum_dep_py

    @property
    def total_assets(self):
        return (self.current_assets + self.afs + self.ppe_net
                + self.intangibles + self.goodwill)

    @property
    def total_assets_py(self):
        return (self.current_assets_py + self.afs_py + self.ppe_net_py
                + self.intangibles_py + self.goodwill_py)

    @property
    def current_liabilities(self):
        return self.ap + self.accrued + self.taxes_payable + self.ltd_current

    @property
    def current_liabilities_py(self):
        return (self.ap_py + self.accrued_py + self.taxes_payable_py
                + self.ltd_current_py)

    @property
    def total_liabilities(self):
        return self.current_liabilities + self.ltd + self.dtl

    @property
    def total_liabilities_py(self):
        return self.current_liabilities_py + self.ltd_py + self.dtl_py

    @property
    def equity(self):
        return self.common_stock + self.apic + self.retained + self.aoci

    @property
    def equity_py(self):
        return (self.common_stock_py + self.apic_py + self.retained_py
                + self.aoci_py)

    # ---- working capital movements, as the indirect method needs them -------
    @property
    def d_ar(self):
        return self.ar_net - self.ar_net_py

    @property
    def d_inventory(self):
        return self.inventory - self.inventory_py

    @property
    def d_prepaid(self):
        return self.prepaid - self.prepaid_py

    @property
    def d_ap(self):
        return self.ap - self.ap_py

    @property
    def d_accrued(self):
        return self.accrued - self.accrued_py

    @property
    def d_taxes(self):
        return self.taxes_payable - self.taxes_payable_py

    # ---- the three cash flow sections --------------------------------------
    @property
    def cfo(self):
        return (self.net_income + self.dep_amort - self.gain_disposal
                + self.deferred_tax_pl - self.d_ar - self.d_inventory
                - self.d_prepaid + self.d_ap + self.d_accrued + self.d_taxes)

    @property
    def cfi(self):
        return (-self.ppe_purchased + self.disposal_proceeds
                - self.afs_purchased)

    @property
    def issue_proceeds(self):
        return self.shares_issued * self.issue_price

    @property
    def cff(self):
        return self.issue_proceeds - self.debt_repaid - self.dividends

    @property
    def net_cash_change(self):
        return self.cfo + self.cfi + self.cff

    # ---- the pieces the later volumes open up ------------------------------
    @property
    def disposal_book_value(self):
        return self.disposal_cost - self.disposal_accum

    @property
    def disposal_gain(self):
        return self.disposal_proceeds - self.disposal_book_value

    @property
    def bad_debt_expense(self):
        """Forced out of the allowance roll-forward, not typed in."""
        return (self.allowance - self.allowance_py
                + self.writeoffs - self.recoveries)

    @property
    def par_value_issued(self):
        return self.shares_issued * self.par

    @property
    def apic_issued(self):
        return self.shares_issued * (self.issue_price - self.par)


    # ---- the trial balance Handout 7 builds the statements from -------------
    def trial_balance(self):
        """Every account, with its balance on the side it naturally sits.

        Retained earnings appears at its OPENING balance and the dividend as a
        separate debit, which is how a trial balance is actually drawn before
        the books are closed.
        """
        dr = [('Cash', self.cash),
              ('Accounts receivable', self.ar_gross),
              ('Inventory', self.inventory),
              ('Prepaid expenses', self.prepaid),
              ('Investments in debt securities', self.afs),
              ('Property, plant and equipment, at cost', self.ppe_gross),
              ('Intangible assets', self.intangibles),
              ('Goodwill', self.goodwill),
              ('Cost of goods sold', self.cogs),
              ('Selling expenses', self.selling),
              ('Administrative expenses', self.admin),
              ('Depreciation and amortisation', self.dep_amort),
              ('Interest expense', self.interest),
              ('Income tax expense', self.tax),
              ('Dividends declared', self.dividends)]
        cr = [('Allowance for credit losses', self.allowance),
              ('Accumulated depreciation', self.accum_dep),
              ('Accounts payable', self.ap),
              ('Accrued liabilities', self.accrued),
              ('Income taxes payable', self.taxes_payable),
              ('Current portion of long-term debt', self.ltd_current),
              ('Long-term debt', self.ltd),
              ('Deferred tax liability', self.dtl),
              ('Common stock, $1 par', self.common_stock),
              ('Additional paid-in capital', self.apic),
              ('Retained earnings, at 1 January', self.retained_py),
              ('Accumulated other comprehensive income', self.aoci),
              ('Sales revenue', self.sales),
              ('Gain on disposal of equipment', self.gain_disposal)]
        return dr, cr

    @property
    def tb_debits(self):
        return sum(v for _a, v in self.trial_balance()[0])

    @property
    def tb_credits(self):
        return sum(v for _a, v in self.trial_balance()[1])


class Meridian:
    """The contract Volume 2 works, from step 1 through to the year-end balance.

    One contract with three promises, a discount that has to be spread, and a
    rebate that has to be estimated. Every figure below is derived from the
    standalone selling prices, so an allocation cannot drift from its total.
    """
    customer = 'Meridian Water Systems'
    units = 1_200
    stated_price = 560_000
    expected_rebate = 20_000            # most likely amount

    ssp_goods = 420_000                 # standalone selling prices
    ssp_install = 90_000
    ssp_support = 90_000

    support_months = 24
    months_elapsed = 2                  # support began 1 November

    @property
    def price(self):
        """Step 3: the transaction price, after variable consideration."""
        return self.stated_price - self.expected_rebate

    @property
    def ssp_total(self):
        return self.ssp_goods + self.ssp_install + self.ssp_support

    @property
    def discount(self):
        return self.ssp_total - self.price

    def _alloc(self, ssp):
        return self.price * ssp / self.ssp_total

    @property
    def alloc_goods(self):
        return self._alloc(self.ssp_goods)

    @property
    def alloc_install(self):
        return self._alloc(self.ssp_install)

    @property
    def alloc_support(self):
        return self._alloc(self.ssp_support)

    @property
    def support_earned(self):
        """Over time: the months that have actually elapsed."""
        return self.alloc_support * self.months_elapsed / self.support_months

    @property
    def recognised(self):
        return self.alloc_goods + self.alloc_install + self.support_earned

    @property
    def contract_liability(self):
        """Support paid for and not yet delivered."""
        return self.alloc_support - self.support_earned


class Aging:
    """The schedule behind Northwind's allowance, Volume 3 Handout 2.

    The buckets add to gross receivables and the estimate adds to the allowance
    on the balance sheet, so the schedule cannot disagree with Volume 1.
    """
    buckets = [('Not yet due', 425_000, 0.01),
               ('1 to 30 days past due', 225_000, 0.05),
               ('31 to 90 days past due', 70_000, 0.15),
               ('More than 90 days past due', 40_000, 0.50)]

    @property
    def gross(self):
        return sum(v for _n, v, _r in self.buckets)

    @property
    def required(self):
        return sum(v * r for _n, v, r in self.buckets)

    def row(self, i):
        name, amount, rate = self.buckets[i]
        return name, amount, rate, amount * rate


class Factor:
    """The receivable sale worked in Volume 3 Handout 3."""
    sold = 300_000
    fee_rate = 0.03
    holdback_rate = 0.05
    recourse_obligation = 8_000

    @property
    def fee(self):
        return self.sold * self.fee_rate

    @property
    def holdback(self):
        return self.sold * self.holdback_rate

    @property
    def cash_now(self):
        return self.sold - self.fee - self.holdback

    @property
    def loss_without_recourse(self):
        return self.fee

    @property
    def loss_with_recourse(self):
        return self.fee + self.recourse_obligation

    @property
    def borrowing_liability(self):
        """If the transfer fails the sale test, it is a secured borrowing."""
        return self.sold - self.fee


class Inv:
    """The NW-40 controller line, worked through the whole of Volume 4.

    One product, four cost layers, one year. Every method's answer is derived
    from the layers, so FIFO, LIFO and weighted average cannot disagree with
    the goods available they all start from.
    """
    name = 'NW-40 flow controller'
    layers = [('Opening inventory, 1 January', 2_000, 40),
              ('Purchased in February', 3_000, 44),
              ('Purchased in June', 4_000, 46),
              ('Purchased in October', 3_000, 52)]
    sold_units = 8_500
    price = 75
    tax_rate = 0.25

    @property
    def units_available(self):
        return sum(u for _d, u, _c in self.layers)

    @property
    def cost_available(self):
        return sum(u * c for _d, u, c in self.layers)

    @property
    def closing_units(self):
        return self.units_available - self.sold_units

    @property
    def wa_unit(self):
        return self.cost_available / self.units_available

    # ---- the three closing inventory figures -------------------------------
    @property
    def fifo_closing(self):
        """Newest layers survive."""
        left, total = self.closing_units, 0
        for _d, u, c in reversed(self.layers):
            take = min(left, u)
            total += take * c
            left -= take
        return total

    @property
    def lifo_closing(self):
        """Oldest layers survive."""
        left, total = self.closing_units, 0
        for _d, u, c in self.layers:
            take = min(left, u)
            total += take * c
            left -= take
        return total

    @property
    def wa_closing(self):
        return self.closing_units * self.wa_unit

    def cogs(self, closing):
        return self.cost_available - closing

    @property
    def sales(self):
        return self.sold_units * self.price

    def gross_margin(self, closing):
        return self.sales - self.cogs(closing)

    def tax(self, closing):
        return self.gross_margin(closing) * self.tax_rate

    @property
    def lifo_reserve(self):
        """What LIFO keeps off the balance sheet."""
        return self.fifo_closing - self.lifo_closing

    # ---- the following year, where the old layers are eaten into -----------
    y2_purchased_units = 2_000
    y2_purchased_cost = 56
    y2_sold_units = 4_000

    @property
    def y2_lifo_cogs(self):
        need, total = self.y2_sold_units, 0
        for u, c in self._y2_order():
            take = min(need, u)
            total += take * c
            need -= take
            if not need:
                break
        return total

    def _y2_order(self):
        """Newest cost first: this year's purchase, then the surviving layers
        from newest to oldest."""
        order = [(self.y2_purchased_units, self.y2_purchased_cost)]
        left, kept = self.closing_units, []
        for _d, u, c in self.layers:
            take = min(left, u)
            if take:
                kept.append((take, c))
            left -= take
        return order + kept[::-1]

    @property
    def y2_liquidation_units(self):
        return max(0, self.y2_sold_units - self.y2_purchased_units)

    @property
    def y2_liquidation_effect(self):
        """Profit inflated because old, cheap layers reached cost of sales."""
        need, old = self.y2_liquidation_units, 0
        for u, c in self._y2_order()[1:]:
            take = min(need, u)
            old += take * c
            need -= take
            if not need:
                break
        return self.y2_liquidation_units * self.y2_purchased_cost - old


class Lcm:
    """Four items that separate the market rule from the net realisable rule."""
    normal_profit_rate = 0.10
    items = [
        # name, cost, replacement cost, selling price, cost to sell
        ('A \u00b7 standard housing', 100, 90, 105, 10),
        ('B \u00b7 obsolete sensor', 100, 80, 105, 10),
        ('C \u00b7 damaged batch', 100, 98, 100, 8),
        ('D \u00b7 scarce controller', 100, 110, 135, 15),
    ]

    def row(self, i):
        name, cost, repl, price, sell = self.items[i]
        ceiling = price - sell
        floor = ceiling - price * self.normal_profit_rate
        market = min(max(repl, floor), ceiling)
        return dict(name=name, cost=cost, repl=repl, price=price, sell=sell,
                    ceiling=ceiling, floor=floor, market=market,
                    lcm=min(cost, market), lcnrv=min(cost, ceiling))


class Dep:
    """The packing machine Volume 5 depreciates four different ways.

    One asset, one life, four methods. Each schedule is generated rather than
    typed, so no method's column can fail to add to the depreciable amount.
    """
    name = 'packing machine'
    cost = 500_000
    residual = 50_000
    life = 5
    total_units = 900_000
    units = [240_000, 210_000, 180_000, 150_000, 120_000]

    @property
    def depreciable(self):
        return self.cost - self.residual

    # ---- straight line -----------------------------------------------------
    @property
    def sl(self):
        return [self.depreciable / self.life] * self.life

    # ---- double declining balance, capped at the residual value ------------
    @property
    def ddb(self):
        rate, nbv, out = 2.0 / self.life, self.cost, []
        for _y in range(self.life):
            charge = min(nbv * rate, nbv - self.residual)
            out.append(max(0.0, charge))
            nbv -= out[-1]
        return out

    # ---- sum of the years' digits ------------------------------------------
    @property
    def syd_total(self):
        return self.life * (self.life + 1) / 2

    @property
    def syd(self):
        return [self.depreciable * (self.life - y) / self.syd_total
                for y in range(self.life)]

    # ---- units of production -----------------------------------------------
    @property
    def unit_rate(self):
        return self.depreciable / self.total_units

    @property
    def uop(self):
        return [u * self.unit_rate for u in self.units]

    def schedule(self, method):
        """Year, charge, accumulated, carrying amount."""
        rows, acc = [], 0.0
        for y, charge in enumerate(method, start=1):
            acc += charge
            rows.append((y, charge, acc, self.cost - acc))
        return rows


class Imp:
    """Two production lines, and a reporting unit, for Volume 5 Handouts 4-5."""
    # line A fails the recoverability test; line B passes it
    a_carrying = 800_000
    a_undiscounted = 750_000
    a_fair_value = 620_000

    b_carrying = 800_000
    b_undiscounted = 850_000
    b_fair_value = 700_000

    # the reporting unit that carries goodwill
    unit_carrying = 2_400_000
    unit_fair_value = 2_150_000
    goodwill_carrying = 300_000

    # a finite-life intangible
    list_cost = 250_000
    list_life = 10

    @property
    def a_impaired(self):
        return self.a_undiscounted < self.a_carrying

    @property
    def a_loss(self):
        return self.a_carrying - self.a_fair_value if self.a_impaired else 0

    @property
    def b_impaired(self):
        return self.b_undiscounted < self.b_carrying

    @property
    def b_loss(self):
        return self.b_carrying - self.b_fair_value if self.b_impaired else 0

    @property
    def goodwill_loss(self):
        """Limited to the goodwill carried, which is the one cap that bites."""
        gap = max(0, self.unit_carrying - self.unit_fair_value)
        return min(gap, self.goodwill_carrying)

    @property
    def list_amortisation(self):
        return self.list_cost / self.list_life


class Sec:
    """The securities Volume 6 works.

    The available-for-sale portfolio ties to Northwind's balance sheet: its
    three holdings add to the amortised cost the company reached after the
    year's purchases, and its unrealised gain is the one taken to other
    comprehensive income in Volume 1.
    """
    afs = [('Harbour Authority 4.2% 20X9', 150_000, 164_000),
           ('Meridian Utilities 3.8% 20Y1', 128_000, 142_000),
           ('State Transit 5.0% 20X8', 80_000, 84_000)]

    # one holding of each other debt classification, for the contrast
    trading_cost, trading_fv = 100_000, 108_000
    htm_cost, htm_fv = 110_000, 118_000

    # equity holdings
    small_name, small_stake = 'Delta Pumps', 0.05
    small_cost, small_fv = 90_000, 97_000

    assoc_name, assoc_stake = 'Riverbend Valves', 0.30
    assoc_cost = 600_000
    assoc_net_income = 200_000
    assoc_dividends = 60_000

    @property
    def afs_cost(self):
        return sum(c for _n, c, _f in self.afs)

    @property
    def afs_fair_value(self):
        return sum(f for _n, _c, f in self.afs)

    @property
    def afs_unrealised(self):
        return self.afs_fair_value - self.afs_cost

    @property
    def trading_gain(self):
        return self.trading_fv - self.trading_cost

    @property
    def htm_carrying(self):
        """Amortised cost. Fair value is disclosed and never recognised."""
        return self.htm_cost

    @property
    def small_gain(self):
        return self.small_fv - self.small_cost

    @property
    def assoc_share_income(self):
        return self.assoc_net_income * self.assoc_stake

    @property
    def assoc_share_dividends(self):
        return self.assoc_dividends * self.assoc_stake

    @property
    def assoc_carrying(self):
        return (self.assoc_cost + self.assoc_share_income
                - self.assoc_share_dividends)


class Tax:
    """Volume 7: the deferred tax that Volume 1's balance sheet already carries.

    The movement is split the way the statements split it - part through income
    tax expense, part through other comprehensive income - and the permanent
    differences are chosen to cancel, so the reconciliation closes on the tax
    charge Volume 1 reported.
    """
    rate = 0.25
    book_depreciation = 250_000
    tax_depreciation = 346_000
    fine = 20_000                  # not deductible
    municipal_interest = 20_000    # not taxable

    @property
    def temporary_difference(self):
        return self.tax_depreciation - self.book_depreciation

    @property
    def deferred_from_depreciation(self):
        return self.temporary_difference * self.rate

    def reconcile(self, pretax):
        """Statutory charge, adjusted for the two permanent differences."""
        return (pretax * self.rate
                + self.fine * self.rate
                - self.municipal_interest * self.rate)

    # The balance sheet in Volume 1 carries one net deferred tax liability of
    # $160,000. Handout 4 takes it apart, so the cumulative taxable difference
    # is stated and the two deductible ones are read off balances the student
    # already has: the warranty provision from Handout 1 and the allowance for
    # credit losses from Volume 3. Netting them has to give Volume 1's figure.
    cumulative_taxable_difference = 746_000

    @property
    def gross_dtl(self):
        return self.cumulative_taxable_difference * self.rate

    @property
    def dta_warranty(self):
        return Warranty.opening + NW.sales * Warranty.rate - Warranty.claims

    @property
    def dta_allowance(self):
        return NW.allowance

    @property
    def gross_dta(self):
        return (self.dta_warranty + self.dta_allowance) * self.rate

    @property
    def net_dtl(self):
        return self.gross_dtl - self.gross_dta

    @property
    def dtl_movement(self):
        return NW.dtl - NW.dtl_py


class Lease:
    """Volume 7: one finance lease and one operating lease."""
    fin_payments, fin_n, fin_rate = 60_000, 5, 0.08
    fin_asset_life = 6

    op_payments, op_n = 40_000, 3
    op_rate = 0.08
    op_asset_life = 40
    op_fair_value = 900_000

    @property
    def fin_pv(self):
        """The present value of the five payments, not a typed-in figure.

        Rounding the annuity to a tidy $240,000 left $643 of liability
        outstanding after the last payment, which is exactly the error a
        student would be marked down for. Deriving it means the schedule in
        Handout 6 closes at nil, and every row of it ties to the dollar.
        """
        f = (1 - (1 + self.fin_rate) ** -self.fin_n) / self.fin_rate
        return self.fin_payments * f

    @property
    def fin_schedule(self):
        """(year, opening, interest, payment, closing), rounded for printing."""
        rows, b = [], self.fin_pv
        for y in range(1, self.fin_n + 1):
            i = b * self.fin_rate
            rows.append((y, round(b), round(i), self.fin_payments,
                         round(b + i - self.fin_payments)))
            b = b + i - self.fin_payments
        return rows

    def fin_amort(self, year):
        """Straight-line amortisation, with the last year taking the rounding.

        Printing round(pv / n) five times adds to $2 more than the asset cost,
        which is the kind of error a student spots and an answer key cannot
        afford.
        """
        each = round(round(self.fin_pv) / self.fin_n)
        if year < self.fin_n:
            return each
        return round(self.fin_pv) - each * (self.fin_n - 1)

    def fin_cost(self, year):
        """Interest for the year plus the amortisation charge."""
        return self.fin_schedule[year - 1][2] + self.fin_amort(year)

    @property
    def fin_interest_y1(self):
        return self.fin_pv * self.fin_rate

    @property
    def fin_amortisation_y1(self):
        return self.fin_pv / self.fin_n

    @property
    def fin_total_y1(self):
        return self.fin_interest_y1 + self.fin_amortisation_y1

    @property
    def fin_liability_y1(self):
        return self.fin_pv + self.fin_interest_y1 - self.fin_payments

    @property
    def op_pv(self):
        """Derived like the finance lease, so Volume 12's schedule closes.

        Volume 12 Handout 4 reports this same lease under the IFRS single
        model, which needs an amortisation schedule the rounded $103,000 would
        not have closed.
        """
        f = (1 - (1 + self.op_rate) ** -self.op_n) / self.op_rate
        return self.op_payments * f

    @property
    def op_schedule(self):
        """(year, opening, interest, payment, closing), rounded for printing."""
        rows, b = [], self.op_pv
        for y in range(1, self.op_n + 1):
            i = b * self.op_rate
            rows.append((y, round(b), round(i), self.op_payments,
                         round(b + i - self.op_payments)))
            b = b + i - self.op_payments
        return rows

    def op_amort(self, year):
        each = round(round(self.op_pv) / self.op_n)
        if year < self.op_n:
            return each
        return round(self.op_pv) - each * (self.op_n - 1)

    def op_ifrs_cost(self, year):
        """Interest plus amortisation: what IFRS reports on this lease."""
        return self.op_schedule[year - 1][2] + self.op_amort(year)

    @property
    def op_total_payments(self):
        return self.op_payments * self.op_n

    @property
    def op_cost_y1(self):
        """One straight-line lease cost, whatever the payment pattern."""
        return self.op_total_payments / self.op_n

    @property
    def fin_term_share(self):
        return self.fin_n / self.fin_asset_life


class Warranty:
    """Volume 7: an assurance warranty provision that rolls forward."""
    rate = 0.02
    opening = 40_000
    claims = 76_000

    @property
    def charge(self):
        return NW.sales * self.rate

    @property
    def closing(self):
        return self.opening + self.charge - self.claims


class Refi:
    """Volume 7: short-term debt expected to be refinanced."""
    note = 400_000
    refinanced_full = 400_000
    refinanced_part = 250_000

    @property
    def current_if_part(self):
        return self.note - self.refinanced_part


class Eq:
    """Volume 8: treasury stock, stock dividends and a split."""
    shares = 300_000
    par = 1
    market = 9

    buy_back_shares, buy_back_price = 10_000, 9
    reissue_a_shares, reissue_a_price = 4_000, 12
    reissue_b_shares, reissue_b_price = 3_000, 7

    small_pct, large_pct = 0.10, 0.30
    split = 2

    @property
    def treasury_cost(self):
        return self.buy_back_shares * self.buy_back_price

    @property
    def reissue_a_proceeds(self):
        return self.reissue_a_shares * self.reissue_a_price

    @property
    def reissue_a_apic(self):
        return self.reissue_a_shares * (self.reissue_a_price
                                        - self.buy_back_price)

    @property
    def reissue_b_proceeds(self):
        return self.reissue_b_shares * self.reissue_b_price

    @property
    def reissue_b_deficit(self):
        return self.reissue_b_shares * (self.buy_back_price
                                        - self.reissue_b_price)

    @property
    def small_shares(self):
        return self.shares * self.small_pct

    @property
    def small_charge(self):
        """A small stock dividend is capitalised at market value."""
        return self.small_shares * self.market

    @property
    def small_par(self):
        return self.small_shares * self.par

    @property
    def small_apic(self):
        return self.small_charge - self.small_par

    @property
    def large_shares(self):
        return self.shares * self.large_pct

    @property
    def large_charge(self):
        """A large stock dividend is capitalised at par."""
        return self.large_shares * self.par

    @property
    def split_shares(self):
        return self.shares * self.split

    @property
    def split_par(self):
        return self.par / self.split


class Disc:
    """Volume 9: a discontinued component."""
    operating_loss = 80_000
    disposal_loss = 120_000
    rate = 0.25

    @property
    def pretax(self):
        return self.operating_loss + self.disposal_loss

    @property
    def tax_benefit(self):
        return self.pretax * self.rate

    @property
    def net(self):
        return self.pretax - self.tax_benefit


class Cons:
    """Volume 10: Northwind acquires 80% of Lakeside Controls."""
    sub = 'Lakeside Controls'
    stake = 0.80
    price = 960_000
    net_assets_fv = 1_000_000

    intercompany_sales = 150_000
    intercompany_cost = 90_000
    still_in_inventory = 60_000
    intercompany_balance = 45_000

    @property
    def implied_total(self):
        return self.price / self.stake

    @property
    def nci(self):
        # implied_total * (1 - stake) leaves a float artefact, because 1 - 0.8
        # is not 0.2 in binary. The NCI is the part of the implied value the
        # parent did not buy, so take the subtraction the words describe.
        return self.implied_total - self.price

    @property
    def goodwill(self):
        return self.implied_total - self.net_assets_fv

    @property
    def margin_rate(self):
        return (self.intercompany_sales - self.intercompany_cost) \
            / self.intercompany_sales

    @property
    def unrealised_profit(self):
        return self.still_in_inventory * self.margin_rate


class Ifrs:
    """Volume 12: the figures each named difference turns on."""
    dev_spend = 400_000
    dev_capitalisable = 240_000      # meets the IFRS criteria

    # the impairment contrast, using Volume 5's line B
    b_value_in_use = 740_000

    @property
    def dev_expensed_gaap(self):
        return self.dev_spend

    @property
    def dev_expensed_ifrs(self):
        return self.dev_spend - self.dev_capitalisable

    @property
    def b_recoverable_ifrs(self):
        return max(Imp.b_fair_value, self.b_value_in_use)

    @property
    def b_loss_ifrs(self):
        return max(0, Imp.b_carrying - self.b_recoverable_ifrs)


class Sbp:
    """Volume 12: one graded-vesting option award, two expense patterns.

    The numbers are chosen so that both patterns total the same grant-date
    fair value and every yearly charge is a whole number: a tranche of
    $90,000 gives $90,000, $45,000 and $30,000 in year one under IFRS.
    """
    options = 90_000
    fair_value = 3
    tranches = 3
    remaining_service = 10          # for the past service cost comparison

    @property
    def total_cost(self):
        return self.options * self.fair_value

    @property
    def per_tranche(self):
        return self.total_cost / self.tranches

    def gaap_charge(self, year):
        """Straight-line over the whole award, permitted for a service
        condition only."""
        return self.total_cost / self.tranches

    def ifrs_charge(self, year):
        """Each tranche over its own vesting period, so the charge falls."""
        return sum(self.per_tranche / t
                   for t in range(1, self.tranches + 1) if t >= year)


class Pens:
    """Volume 12: one defined benefit plan, measured two ways.

    The whole of the difference between the two net costs is the plan assets
    multiplied by the gap between the expected return and the discount rate,
    which is the identity the checker asserts.
    """
    dbo = 2_400_000
    plan_assets = 2_000_000
    discount_rate = 0.06
    expected_return = 0.08
    service_cost = 180_000
    remeasurement = 50_000         # actuarial loss arising in the year
    past_service_cost = 60_000
    remaining_service = 10

    @property
    def funded_status(self):
        """Negative: the plan is underfunded by this much."""
        return self.plan_assets - self.dbo

    @property
    def net_liability(self):
        return self.dbo - self.plan_assets

    @property
    def interest_cost(self):
        return self.dbo * self.discount_rate

    @property
    def expected_asset_return(self):
        return self.plan_assets * self.expected_return

    @property
    def gaap_amortisation(self):
        return self.past_service_cost / self.remaining_service

    @property
    def gaap_cost(self):
        return (self.service_cost + self.interest_cost
                - self.expected_asset_return + self.gaap_amortisation)

    @property
    def net_interest(self):
        return self.net_liability * self.discount_rate

    @property
    def ifrs_cost(self):
        return (self.service_cost + self.net_interest
                + self.past_service_cost)

    @property
    def asset_rate_gap(self):
        # The subtraction goes last: plan_assets * (0.08 - 0.06) returns
        # 40000.00000000001, which is a figure no answer key can print.
        return (self.plan_assets * self.expected_return
                - self.plan_assets * self.discount_rate)


T = Tax()
LS = Lease()
SB = Sbp()
PE = Pens()
W = Warranty()
RF = Refi()
EQ = Eq()
DC = Disc()
CO = Cons()
IF = Ifrs()
S = Sec()
D = Dep()
P = Imp()
I = Inv()
L = Lcm()
A = Aging()
F = Factor()
M = Meridian()
N = NW()
