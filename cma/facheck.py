# -*- coding: utf-8 -*-
"""Recompute everything the Section A volumes assert about Northwind.

This runs on every build of every Section A volume. A figure that drifts in
one volume is caught in all of them, because they all read the same company.
"""
from fadata import N, M, A, F


def check(bad):
    def eq(label, a, b):
        if abs(a - b) > 0.005:
            bad.append('arithmetic: %s — %s against %s' % (label, a, b))

    # ---- the balance sheet balances, both years ----------------------------
    eq('balance sheet 20X4', N.total_assets, N.total_liabilities + N.equity)
    eq('balance sheet 20X3', N.total_assets_py, N.total_liabilities_py + N.equity_py)

    # ---- the income statement foots ---------------------------------------
    eq('gross margin', N.gross_margin, 1_920_000)
    eq('operating income', N.operating_income, 740_000)
    eq('income before tax', N.pretax, 680_000)
    eq('net income', N.net_income, 510_000)
    eq('income tax expense split', N.current_tax + N.deferred_tax_pl, N.tax)
    eq('comprehensive income', N.comprehensive_income, N.net_income + N.oci)

    # ---- the equity statement closes --------------------------------------
    eq('retained earnings roll-forward',
       N.retained_py + N.net_income - N.dividends, N.retained)
    eq('accumulated OCI roll-forward', N.aoci_py + N.oci, N.aoci)
    eq('common stock roll-forward',
       N.common_stock_py + N.par_value_issued, N.common_stock)
    eq('additional paid-in capital roll-forward',
       N.apic_py + N.apic_issued, N.apic)
    eq('equity statement ties to the balance sheet',
       N.equity_py + N.comprehensive_income - N.dividends + N.issue_proceeds,
       N.equity)

    # ---- the cash flow statement lands on the balance sheet ---------------
    eq('cash flow ties to cash', N.cash_py + N.net_cash_change, N.cash)
    eq('net cash from operating', N.cfo, 708_000)
    eq('net cash used in investing', N.cfi, -393_000)
    eq('net cash used in financing', N.cff, -180_000)

    # ---- the trial balance the statements are built from ------------------
    eq('trial balance balances', N.tb_debits, N.tb_credits)

    # ---- the Volume 2 contract --------------------------------------------
    eq('transaction price', M.price, 540_000)
    eq('allocation sums to the transaction price',
       M.alloc_goods + M.alloc_install + M.alloc_support, M.price)
    eq('goods allocation', M.alloc_goods, 378_000)
    eq('installation allocation', M.alloc_install, 81_000)
    eq('support allocation', M.alloc_support, 81_000)
    eq('support earned by the year end', M.support_earned, 6_750)
    eq('revenue recognised on the contract', M.recognised, 465_750)
    eq('contract liability at the year end', M.contract_liability, 74_250)
    eq('the discount is spread, not dropped', M.discount, 60_000)

    # ---- the Volume 3 aging schedule and receivable sale -------------------
    eq('aging buckets add to gross receivables', A.gross, N.ar_gross)
    eq('aging estimate equals the allowance', A.required, N.allowance)
    eq('cash from the factor', F.cash_now, 276_000)
    eq('loss without recourse', F.loss_without_recourse, 9_000)
    eq('loss with recourse', F.loss_with_recourse, 17_000)

    # ---- the supporting roll-forwards -------------------------------------
    eq('PP&E at cost',
       N.ppe_gross_py + N.ppe_purchased - N.disposal_cost, N.ppe_gross)
    eq('accumulated depreciation',
       N.accum_dep_py + N.depreciation - N.disposal_accum, N.accum_dep)
    eq('depreciation and amortisation split',
       N.depreciation + N.amortisation, N.dep_amort)
    eq('intangibles', N.intangibles_py - N.amortisation, N.intangibles)
    eq('gain on disposal', N.disposal_gain, N.gain_disposal)
    eq('available-for-sale securities',
       N.afs_py + N.afs_purchased + N.afs_gain_pretax, N.afs)
    eq('deferred tax liability',
       N.dtl_py + N.deferred_tax_pl + N.deferred_tax_oci, N.dtl)
    eq('allowance for credit losses',
       N.allowance_py + N.bad_debt_expense - N.writeoffs + N.recoveries,
       N.allowance)
    eq('long-term debt', N.ltd_py - N.debt_repaid, N.ltd)
