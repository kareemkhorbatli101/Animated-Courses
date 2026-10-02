# -*- coding: utf-8 -*-
"""Recompute everything the Section A volumes assert about Northwind.

This runs on every build of every Section A volume. A figure that drifts in
one volume is caught in all of them, because they all read the same company.
"""
from fadata import N, M, A, F, I, L, D, P, S, T, LS, W, EQ, DC, CO, IF


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

    # ---- the Volume 4 inventory line ---------------------------------------
    eq('goods available for sale', I.cost_available, 552_000)
    eq('weighted average unit cost', I.wa_unit, 46)
    eq('FIFO closing inventory', I.fifo_closing, 179_000)
    eq('LIFO closing inventory', I.lifo_closing, 146_000)
    eq('weighted average closing inventory', I.wa_closing, 161_000)
    for _lbl, _cl in (('FIFO', I.fifo_closing), ('LIFO', I.lifo_closing),
                      ('weighted average', I.wa_closing)):
        # Whatever the method, cost of goods sold and closing inventory have to
        # exhaust the same pool of goods available for sale.
        eq('%s splits goods available' % _lbl,
           I.cogs(_cl) + _cl, I.cost_available)
    eq('the LIFO reserve is the gap between the two closing figures',
       I.lifo_reserve, I.fifo_closing - I.lifo_closing)
    eq('LIFO defers tax by the reserve at the tax rate',
       I.tax(I.fifo_closing) - I.tax(I.lifo_closing),
       I.lifo_reserve * I.tax_rate)
    eq('year two LIFO cost of sales', I.y2_lifo_cogs, 198_000)
    eq('the liquidation inflates profit', I.y2_liquidation_effect, 26_000)

    for _i in range(len(L.items)):
        _r = L.row(_i)
        if not _r['floor'] <= _r['market'] <= _r['ceiling']:
            bad.append('arithmetic: %s market %s is outside the floor and ceiling'
                       % (_r['name'], _r['market']))
        if _r['lcm'] > _r['cost'] or _r['lcnrv'] > _r['cost']:
            bad.append('arithmetic: %s is written UP, which neither rule permits'
                       % _r['name'])

    # ---- the Volume 5 asset and impairments --------------------------------
    for _name, _m in (('straight line', D.sl), ('double declining', D.ddb),
                      ('sum of the years', D.syd), ('units of production', D.uop)):
        # Whatever the pattern, every method writes off the same depreciable
        # amount over the same life and stops at the residual value.
        eq('%s depreciates the whole amount' % _name, sum(_m), D.depreciable)
        if min(_m) < -0.005:
            bad.append('arithmetic: %s charges a negative amount' % _name)
        _last = D.schedule(_m)[-1][3]
        eq('%s ends at the residual value' % _name, _last, D.residual)
    eq('units of production uses every unit', sum(D.units), D.total_units)
    eq('line A is impaired', P.a_loss, 180_000)
    eq('line B is not impaired', P.b_loss, 0)
    eq('goodwill impairment', P.goodwill_loss, 250_000)
    eq('intangible amortisation', P.list_amortisation, N.amortisation)

    # ---- the Volume 6 securities -------------------------------------------
    # The portfolio has to tie to the balance sheet Volume 1 built: its cost is
    # what Northwind held after the year's purchases, and its unrealised gain is
    # the one that reached other comprehensive income.
    eq('available-for-sale portfolio at cost', S.afs_cost,
       N.afs_py + N.afs_purchased)
    eq('available-for-sale portfolio at fair value', S.afs_fair_value, N.afs)
    eq('the portfolio unrealised gain is the one taken to OCI',
       S.afs_unrealised, N.afs_gain_pretax)
    eq('held-to-maturity is carried at amortised cost', S.htm_carrying,
       S.htm_cost)
    eq('equity method carrying amount', S.assoc_carrying, 642_000)
    eq('share of associate income', S.assoc_share_income, 60_000)
    eq('share of associate dividends', S.assoc_share_dividends, 18_000)

    # ---- Volumes 7 to 12 ---------------------------------------------------
    # The deferred tax Volume 7 derives has to be the one Volume 1 reported, and
    # the reconciliation has to close on the tax charge already in the accounts.
    eq('deferred tax from depreciation', T.deferred_from_depreciation,
       N.deferred_tax_pl)
    eq('the tax reconciliation closes on the reported charge',
       T.reconcile(N.pretax), N.tax)
    eq('the permanent differences cancel', T.fine, T.municipal_interest)

    eq('warranty provision rolls forward',
       W.opening + W.charge - W.claims, W.closing)
    eq('the warranty charge is a rate on the year\u2019s sales',
       W.charge, N.sales * W.rate)

    eq('finance lease year one cost',
       LS.fin_interest_y1 + LS.fin_amortisation_y1, LS.fin_total_y1)
    eq('finance lease liability after one payment',
       LS.fin_pv + LS.fin_interest_y1 - LS.fin_payments, LS.fin_liability_y1)
    if LS.fin_term_share < 0.75:
        bad.append('arithmetic: the finance lease no longer meets the term test')
    if LS.op_pv > 0.9 * LS.op_fair_value:
        bad.append('arithmetic: the operating lease would fail the value test')

    # A small stock dividend is capitalised at market and a large one at par, so
    # the two charges must differ; if they ever agree the example has lost its
    # point.
    eq('small stock dividend splits between par and paid-in capital',
       EQ.small_par + EQ.small_apic, EQ.small_charge)
    if EQ.small_charge <= EQ.large_charge:
        bad.append('arithmetic: the small dividend no longer costs more than '
                   'the large one, so the contrast has gone')
    eq('a split changes neither the par total nor equity',
       EQ.split_shares * EQ.split_par, EQ.shares * EQ.par)
    eq('treasury reissued above cost credits paid-in capital',
       EQ.reissue_a_apic, EQ.reissue_a_shares
       * (EQ.reissue_a_price - EQ.buy_back_price))
    if EQ.reissue_b_deficit > EQ.reissue_a_apic:
        bad.append('arithmetic: the second reissue would exhaust the paid-in '
                   'capital from the first, which the handout says it does not')

    eq('discontinued operations, net of tax', DC.net, 150_000)

    eq('non-controlling interest at fair value', CO.nci, 240_000)
    eq('goodwill on the acquisition', CO.goodwill, 200_000)
    eq('consideration plus NCI equals net assets plus goodwill',
       CO.price + CO.nci, CO.net_assets_fv + CO.goodwill)
    eq('unrealised intercompany profit', CO.unrealised_profit, 24_000)

    eq('development costs expensed under IFRS',
       IF.dev_expensed_ifrs, IF.dev_spend - IF.dev_capitalisable)
    # Line B is the contrast the whole impairment comparison rests on: no loss
    # under US GAAP, a loss under IFRS, on identical facts.
    eq('line B is not impaired under US GAAP', P.b_loss, 0)
    if IF.b_loss_ifrs <= 0:
        bad.append('arithmetic: line B is no longer impaired under IFRS, so the '
                   'GAAP and IFRS contrast has gone')

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
