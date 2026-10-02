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


N = NW()
