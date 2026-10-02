# -*- coding: utf-8 -*-
"""Single source of truth for every number in Set D1.

Nothing in a handout or an answer key is typed as a literal. Every figure is
derived here from the scenario inputs, so a handout and its key cannot
disagree, and changing an input re-flows the whole set.
"""


def money(x, dp=0):
    """2016000 -> '$2,016,000'. Negative numbers come back in brackets."""
    s = format(abs(x), ',.%df' % dp)
    return ('($%s)' % s) if x < 0 else ('$%s' % s)


def num(x, dp=0):
    return format(x, ',.%df' % dp)


# ---------------------------------------------------------------- scenario 1 --
class Scenario1:
    """Grandview Instruments, one period, production exceeds sales.

    The plain case: build both statements from one data set and reconcile.
    """
    name = 'Grandview Instruments'
    period = 'Year 1'
    price = 90
    dm, dl, vmoh = 18, 12, 6
    fmoh = 600_000
    vsa = 4                      # variable selling & administrative, per unit sold
    fsa = 280_000
    produced = 50_000
    sold = 42_000
    begin_inv = 0

    @property
    def end_inv(self):
        return self.begin_inv + self.produced - self.sold

    @property
    def var_unit(self):
        return self.dm + self.dl + self.vmoh

    @property
    def fmoh_rate(self):
        """Actual costing: the period's own fixed overhead spread over its output."""
        return self.fmoh / self.produced

    @property
    def abs_unit(self):
        return self.var_unit + self.fmoh_rate

    @property
    def sales(self):
        return self.price * self.sold

    # absorption statement
    @property
    def abs_cogs(self):
        return self.abs_unit * self.sold

    @property
    def gross_margin(self):
        return self.sales - self.abs_cogs

    @property
    def sa_total(self):
        return self.vsa * self.sold + self.fsa

    @property
    def abs_oi(self):
        return self.gross_margin - self.sa_total

    # variable statement
    @property
    def var_cogs(self):
        return self.var_unit * self.sold

    @property
    def var_sa(self):
        return self.vsa * self.sold

    @property
    def contribution(self):
        return self.sales - self.var_cogs - self.var_sa

    @property
    def fixed_total(self):
        return self.fmoh + self.fsa

    @property
    def var_oi(self):
        return self.contribution - self.fixed_total

    # the bridge
    @property
    def fmoh_deferred(self):
        return self.fmoh_rate * self.end_inv

    @property
    def difference(self):
        return self.abs_oi - self.var_oi

    # throughput
    @property
    def thr_unit(self):
        return self.dm

    @property
    def thr_cogs(self):
        return self.dm * self.sold

    @property
    def throughput_margin(self):
        return self.sales - self.thr_cogs

    @property
    def thr_period_costs(self):
        return ((self.dl + self.vmoh) * self.produced + self.fmoh
                + self.vsa * self.sold + self.fsa)

    @property
    def thr_oi(self):
        return self.throughput_margin - self.thr_period_costs

    @property
    def end_inv_value_abs(self):
        return self.abs_unit * self.end_inv

    @property
    def end_inv_value_var(self):
        return self.var_unit * self.end_inv

    @property
    def end_inv_value_thr(self):
        return self.thr_unit * self.end_inv


S1 = Scenario1()


# ---------------------------------------------------------------- scenario 2 --
class Scenario2:
    """The same plant over three years. Sales flat, production swings.

    Standard absorption costing with a fixed denominator volume, so the
    fixed overhead rate does not move and the inventory effect is visible
    in isolation.
    """
    name = 'Grandview Instruments'
    denominator = 40_000
    fmoh = 600_000
    price = 90
    var_unit = 36                # DM 18 + DL 12 + VMOH 6, unchanged
    vsa = 4
    fsa = 280_000
    sold = (40_000, 40_000, 40_000)
    produced = (50_000, 40_000, 30_000)
    begin_inv_y1 = 0

    @property
    def rate(self):
        return self.fmoh / self.denominator

    @property
    def std_abs_unit(self):
        return self.var_unit + self.rate

    def inventory(self):
        """Opening and closing inventory in units, year by year."""
        out, opening = [], self.begin_inv_y1
        for p, s in zip(self.produced, self.sold):
            closing = opening + p - s
            out.append((opening, closing))
            opening = closing
        return out

    def volume_variance(self):
        """(actual production - denominator) x rate. Favourable is positive."""
        return [(p - self.denominator) * self.rate for p in self.produced]

    def difference(self):
        """Absorption operating income minus variable operating income."""
        return [(c - o) * self.rate for o, c in self.inventory()]

    def variable_oi(self):
        out = []
        for s in self.sold:
            cm = (self.price - self.var_unit - self.vsa) * s
            out.append(cm - self.fmoh - self.fsa)
        return out

    def absorption_oi(self):
        """Variable income plus the fixed overhead moved into or out of stock.

        Equivalent to the long form: standard gross margin less the volume
        variance less selling and administrative cost. Both routes are set
        out in Handout 4 and the checker proves they agree.
        """
        return [v + d for v, d in zip(self.variable_oi(), self.difference())]

    def absorption_oi_long(self):
        """The same figure built the way the exam usually presents it."""
        out = []
        for p, s, vv in zip(self.produced, self.sold, self.volume_variance()):
            std_gm = (self.price - self.std_abs_unit) * s
            sa = self.vsa * s + self.fsa
            out.append(std_gm + vv - sa)
        return out


S2 = Scenario2()


# ---------------------------------------------------------------- scenario 3 --
class Scenario3:
    """Fourth quarter, and a bonus that turns on absorption operating income.

    Producing for stock that nobody has ordered moves fixed overhead out of
    this quarter's expense and into the balance sheet. Nothing is sold, no
    cash arrives, and reported income rises.
    """
    name = 'Grandview Instruments · Riverside plant'
    denominator = 36_000
    fmoh = 540_000
    price = 90
    var_unit = 36
    vsa = 4
    fsa = 250_000
    sold = 30_000
    plan_produce = 30_000        # produce to demand
    push_produce = 45_000        # produce to the bonus
    bonus_threshold = 890_000
    carry_rate = 0.18            # annual carrying cost, as a fraction of unit cost
    quarter = 0.25

    @property
    def rate(self):
        return self.fmoh / self.denominator

    @property
    def std_abs_unit(self):
        return self.var_unit + self.rate

    def volume_variance(self, produced):
        return (produced - self.denominator) * self.rate

    def fmoh_in_stock(self, produced):
        return (produced - self.sold) * self.rate

    def variable_oi(self):
        cm = (self.price - self.var_unit - self.vsa) * self.sold
        return cm - self.fmoh - self.fsa

    def absorption_oi(self, produced):
        std_gm = (self.price - self.std_abs_unit) * self.sold
        sa = self.vsa * self.sold + self.fsa
        return std_gm + self.volume_variance(produced) - sa

    @property
    def min_production_for_bonus(self):
        """Output at which absorption income exactly reaches the threshold.

        Income at this sales level is a fixed amount plus the volume variance,
        so the question solves for the variance and then for the output that
        produces it.
        """
        std_gm = (self.price - self.std_abs_unit) * self.sold
        sa = self.vsa * self.sold + self.fsa
        needed_vv = self.bonus_threshold - (std_gm - sa)
        return self.denominator + needed_vv / self.rate

    @property
    def swing(self):
        return self.absorption_oi(self.push_produce) - self.absorption_oi(self.plan_produce)

    @property
    def excess_units(self):
        return self.push_produce - self.plan_produce

    @property
    def carrying_cost(self):
        """One quarter of carrying cost on the units made for stock alone."""
        return (self.excess_units * self.std_abs_unit) * self.carry_rate * self.quarter

    @property
    def cash_tied_up(self):
        """Cash actually spent to build the excess: variable cost only."""
        return self.excess_units * self.var_unit


S3 = Scenario3()
