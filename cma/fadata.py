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


D = Dep()
P = Imp()
I = Inv()
L = Lcm()
A = Aging()
F = Factor()
M = Meridian()
N = NW()
