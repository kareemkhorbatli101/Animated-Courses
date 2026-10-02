# -*- coding: utf-8 -*-
"""Recompute everything the Section A volumes assert about Northwind.

This runs on every build of every Section A volume. A figure that drifts in
one volume is caught in all of them, because they all read the same company.
"""
from fadata import (N, M, A, F, I, L, D, P, S, T, LS, W, EQ, DC, CO, IF, SB,
                    PE, TV, BD, EP, CH, FX)


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

    # Handout 4 takes Volume 1's single net deferred tax liability apart, so the
    # gross components must net back to it, the two deductible components must
    # be balances the student already holds, and the year's movement must be the
    # income-statement half plus the OCI half.
    eq('the gross deferred tax balances net to the reported liability',
       T.net_dtl, N.dtl)
    eq('the warranty component is the provision from Handout 1',
       T.dta_warranty, W.closing)
    eq('the allowance component is the balance from Volume 3',
       T.dta_allowance, N.allowance)
    eq('the deferred tax liability movement splits between income and OCI',
       T.dtl_movement, N.deferred_tax_pl + N.deferred_tax_oci)

    eq('finance lease year one cost',
       LS.fin_interest_y1 + LS.fin_amortisation_y1, LS.fin_total_y1)
    eq('finance lease liability after one payment',
       LS.fin_pv + LS.fin_interest_y1 - LS.fin_payments, LS.fin_liability_y1)
    if LS.fin_term_share < 0.75:
        bad.append('arithmetic: the finance lease no longer meets the term test')
    if LS.op_pv > 0.9 * LS.op_fair_value:
        bad.append('arithmetic: the operating lease would fail the value test')

    # Handout 6 prints the whole amortisation schedule, so every printed row has
    # to tie in the figures the student sees and the last payment has to settle
    # the liability exactly. A rounded present value fails both.
    for _y, _op, _i, _pay, _cl in LS.fin_schedule:
        if _op + _i - _pay != _cl:
            bad.append('arithmetic: lease schedule year %d does not tie as '
                       'printed' % _y)
    if LS.fin_schedule[-1][4] != 0:
        bad.append('arithmetic: the lease liability is not settled by the last '
                   'payment (%s left)' % LS.fin_schedule[-1][4])
    eq('the amortisation charges add to the right-of-use asset',
       sum(LS.fin_amort(y) for y in range(1, LS.fin_n + 1)),
       round(LS.fin_pv))
    eq('total finance lease cost equals the payments made',
       sum(LS.fin_cost(y) for y in range(1, LS.fin_n + 1)),
       LS.fin_payments * LS.fin_n)
    if LS.fin_cost(1) <= LS.fin_cost(LS.fin_n):
        bad.append('arithmetic: the finance lease cost is no longer '
                   'front-loaded, so the contrast with the operating lease has '
                   'gone')
    eq('the operating lease cost is the payments spread evenly',
       LS.op_cost_y1 * LS.op_n, LS.op_total_payments)

    # Volume 12 Handout 4 reports the same lease under the IFRS single model,
    # so that schedule has to close too and both models must spend the payments.
    for _y, _op, _i, _pay, _cl in LS.op_schedule:
        if _op + _i - _pay != _cl:
            bad.append('arithmetic: operating lease schedule year %d does not '
                       'tie as printed' % _y)
    if LS.op_schedule[-1][4] != 0:
        bad.append('arithmetic: the operating lease liability is not settled '
                   'by the last payment (%s left)' % LS.op_schedule[-1][4])
    eq('the single-model amortisation totals the right-of-use asset',
       sum(LS.op_amort(y) for y in range(1, LS.op_n + 1)),
       round(LS.op_pv))
    eq('the single model spends the same payments as the dual model',
       sum(LS.op_ifrs_cost(y) for y in range(1, LS.op_n + 1)),
       LS.op_total_payments)
    if LS.op_ifrs_cost(1) <= LS.op_cost_y1:
        bad.append('arithmetic: the single model no longer front-loads this '
                   'lease, so the Volume 12 contrast has gone')

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

    # Volume 12 Handout 1: both expense patterns must spend the same grant-date
    # fair value, IFRS must front-load it, and the whole gap between the two
    # pension costs must be the plan assets at the difference between the two
    # rates, plus the past service cost each framework treats differently.
    eq('the straight-line option charges total the grant-date fair value',
       sum(SB.gaap_charge(y) for y in range(1, SB.tranches + 1)),
       SB.total_cost)
    eq('the accelerated option charges total the same fair value',
       sum(SB.ifrs_charge(y) for y in range(1, SB.tranches + 1)),
       SB.total_cost)
    if SB.ifrs_charge(1) <= SB.gaap_charge(1):
        bad.append('arithmetic: the tranche-by-tranche charge no longer '
                   'front-loads, so the share-based payment contrast has gone')
    eq('the two pension costs differ by the asset rate gap and the past '
       'service cost',
       PE.ifrs_cost - PE.gaap_cost,
       PE.asset_rate_gap + PE.past_service_cost - PE.gaap_amortisation)
    eq('the net interest is the discount rate on the net liability',
       PE.net_interest, (PE.dbo - PE.plan_assets) * PE.discount_rate)

    eq('discontinued operations, net of tax', DC.net, 150_000)

    # ---- Volumes 13 to 17 ---------------------------------------------------
    # Volume 13 is the volume that should have come first. Its factors have to
    # reproduce the two lease present values Volume 7 already printed, or the
    # book that teaches present value contradicts the book that used it.
    eq('the annuity factor reproduces the finance lease present value',
       LS.fin_payments * TV.pva(LS.fin_n, LS.fin_rate), LS.fin_pv)
    eq('the annuity factor reproduces the operating lease present value',
       LS.op_payments * TV.pva(LS.op_n, LS.op_rate), LS.op_pv)
    eq('solving for the rate recovers the lease rate',
       round(TV.solve_rate(LS.fin_pv, LS.fin_payments, LS.fin_n), 6),
       LS.fin_rate)
    eq('solving for the term recovers the lease term',
       TV.solve_n(LS.op_pv, LS.op_payments, LS.op_rate), LS.op_n)
    eq('a present value and its future value are the same money',
       TV.single_pv * TV.fv(TV.single_n), TV.single_sum)
    if TV.pvad(TV.horizon) <= TV.pva(TV.horizon):
        bad.append('arithmetic: the annuity due is no longer worth more than '
                   'the ordinary annuity, so Handout 2 has no subject')

    # Volume 14's existing bond is solved from Volume 1, not invented, and the
    # two new bonds are a matched pair whose schedules must mirror each other
    # and both land on the face exactly.
    eq('the serial bond coupon explains Volume 1 interest expense',
       BD.serial_face * BD.serial_coupon_rate, N.interest)
    eq('the serial bond instalment is the debt Volume 1 repaid',
       BD.serial_instalment, N.debt_repaid)
    eq('the discount and the premium are equal and opposite',
       BD.discount, BD.premium)
    for _label, _cr in (('discount', BD.discount_coupon),
                        ('premium', BD.premium_coupon)):
        _rows = BD.schedule(_cr)
        for _y, _op, _i, _c, _a, _cl in _rows:
            if _op + _i - _c != _cl:
                bad.append('arithmetic: %s bond schedule year %d does not tie '
                           'as printed' % (_label, _y))
        if _rows[-1][5] != BD.face:
            bad.append('arithmetic: the %s bond does not reach par by '
                       'maturity (%s)' % (_label, _rows[-1][5]))
    if BD.schedule(BD.discount_coupon)[0][5] <= BD.discount_price:
        bad.append('arithmetic: the discount bond carrying amount no longer '
                   'rises toward par, so the contrast with the premium has '
                   'gone')
    if BD.schedule(BD.premium_coupon)[0][5] >= BD.premium_price:
        bad.append('arithmetic: the premium bond carrying amount no longer '
                   'falls toward par')
    if not BD.suit_low < BD.suit_ifrs < BD.suit_high:
        bad.append('arithmetic: the midpoint of the lawsuit range is outside '
                   'the range')

    # Volume 15's share count falls out of Volume 8's own movements.
    eq('the closing share count matches the equity volume',
       EP.closing_outstanding, EQ.shares - (EQ.buy_back_shares
                                            - EQ.reissue_a_shares
                                            - EQ.reissue_b_shares))
    eq('the shares issued match Volume 1', EP.issued, N.shares_issued)
    eq('the opening share count is Volume 1 par value',
       EP.opening, N.common_stock_py / N.par)
    eq('the treasury stock method credits only the incremental shares',
       EP.option_incremental,
       EP.options - EP.options * EP.option_strike / EP.average_price)
    if EP.diluted >= EP.basic:
        bad.append('arithmetic: diluted EPS is no longer below basic, so the '
                   'dilution exercise demonstrates nothing')
    if EP.anti_incremental_eps <= EP.basic:
        bad.append('arithmetic: the antidilutive security has become dilutive, '
                   'so Handout 3 has no counter-example')

    # Volume 16 builds the worksheet behind figures Volume 12 already prints.
    eq('the pension worksheet closes on the cost Volume 12 reports',
       PE.service_cost + PE.interest_cost - PE.expected_asset_return
       + PE.gaap_amortisation, PE.gaap_cost)
    eq('the remeasurement is the gap between expected and actual return',
       PE.remeasurement, PE.expected_asset_return - PE.actual_return)
    eq('the funded status is plan assets less the obligation',
       PE.funded_status_closing, PE.assets_closing - PE.dbo_closing)

    # Volume 17 works on figures Volumes 4, 5 and 10 established.
    eq('the change in principle is Volume 4 FIFO against weighted average',
       CH.principle_pretax, I.fifo_closing - I.wa_closing)
    eq('the change in estimate starts from Volume 5 carrying amount',
       CH.estimate_carrying, D.cost - sum(D.sl[:CH.elapsed]))
    eq('the translated balance sheet balances',
       FX.net_assets, FX.contributed + FX.income + FX.cta)
    eq('the translated net assets are the subsidiary at the closing rate',
       FX.net_assets, CO.net_assets_fv * FX.closing)
    if FX.cta >= 0:
        bad.append('arithmetic: the translation adjustment is no longer a '
                   'loss, so Handout 3 loses the direction it explains')

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
