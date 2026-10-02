# -*- coding: utf-8 -*-
"""Volume 8, Handout 3 — Small Dividends, Large Dividends and Splits.

Covers A.2(w): the effect of a stock dividend and of a stock split on the
equity accounts, and why the two sizes are capitalised differently.
"""
from fadata import N, EQ, Y
from data import money, num

CAP, EARN, TREAS, SLATE = '2F6F8F', '1F7A6A', 'A24B6B', '44506B'
RUST, OK = 'B2531F', '2B6CB0'


def _k(n):
    return num(n / 1000, 0) + ',000'


def _pc(x):
    return num(x * 100, 0) + '%'


_THREEH = ['', 'Small stock dividend', 'Large stock dividend', 'Stock split']
_THREEW = [25, 25, 25, 25]


def _three(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Shares issued', _pc(EQ.small_pct), _pc(EQ.large_pct),
         '%d for 1' % EQ.split],
        ['New shares', c(_k(EQ.small_shares)), c(_k(EQ.large_shares)),
         c(_k(EQ.split_shares - EQ.shares))],
        ['Capitalised at', c('Market, $%d' % EQ.market),
         c('Par, $%d' % EQ.par), c('Nothing')],
        ['Charged to retained earnings', c(money(EQ.small_charge)),
         c(money(EQ.large_charge)), c('Nil')],
        ['Par value per share after', c('$%d' % EQ.par), c('$%d' % EQ.par),
         c('$%s' % num(EQ.split_par, 2))],
        ['Total equity after', c('Unchanged'), c('Unchanged'),
         c('Unchanged')],
    ]


_SPLITH = ['Account', 'Before the split', 'After the %d for 1 split' % EQ.split]
_SPLITW = [40, 30, 30]


def _split(blank=False):
    def c(v):
        return '' if blank else v
    return [
        ['Shares issued', _k(EQ.shares), c(_k(EQ.split_shares))],
        ['Par value per share', '$%d' % EQ.par,
         c('$%s' % num(EQ.split_par, 2))],
        ['Common stock', money(N.common_stock), c(money(N.common_stock))],
        ['Additional paid-in capital', money(N.apic), c(money(N.apic))],
        ['Retained earnings', money(N.retained), c(money(N.retained))],
        ['Total equity', money(N.equity), c(money(N.equity))],
    ]


HANDOUT = dict(
    n=3,
    title='Small Dividends, Large Dividends and Splits',
    subtitle='A %s stock dividend costs retained earnings %s. A %s one costs '
             '%s. A split costs nothing at all, and all three leave total '
             'equity exactly where it was.'
             % (_pc(EQ.small_pct), money(EQ.small_charge),
                _pc(EQ.large_pct), money(EQ.large_charge)),
    register='R2 moving to R3',

    lang=dict(
        register='R2 for the mechanics, R3 for the comparison, which the exam '
                 'puts as a question about effects on accounts.',
        collocations=['declare a stock dividend',
                      'capitalise retained earnings',
                      'issue shares pro rata',
                      'split the shares two for one',
                      'adjust the par value',
                      'restate shares retrospectively'],
        pairs=['stock dividend / cash dividend',
               'small / large',
               'market value / par value',
               'stock dividend / stock split'],
        nots=['A stock dividend is not income to the shareholder. Each holder '
              'owns the same fraction of the same company afterwards.',
              'A stock split is not a transaction. Nothing is recorded, and '
              'only the share count and the par value change.'],
    ),

    objectives=[
        'Say what a shareholder receives from a stock dividend.',
        'Record a small stock dividend at market value.',
        'Record a large stock dividend at par value.',
        'Say what a stock split changes and what it records.',
        'Compare the effect of all three on each equity account.',
    ],

    terms=[
        ('stock dividend',
         'A distribution of a company’s own additional shares to its existing '
         'shareholders, in proportion to their holdings.',
         'توزيع أسهم مجانية',
         'No asset leaves the company. It is a transfer inside equity and '
         'nothing more.'),
        ('capitalise',
         'To move an amount out of retained earnings into permanent '
         'contributed capital.', 'رسملة',
         'The whole point of a stock dividend: the amount capitalised can never '
         'be paid out as a cash dividend again.'),
        ('stock split',
         'An increase in the number of shares with a proportionate reduction in '
         'par value, leaving every balance unchanged.', 'تجزئة الأسهم',
         'Not recorded by any entry. A memorandum note of the new count and the '
         'new par is the whole of the accounting.'),
        ('property dividend',
         'A distribution of a non-cash asset to shareholders, measured at the '
         'asset’s fair value.', 'توزيع عيني',
         'Unlike a stock dividend, something really does leave the company, and '
         'a gain or loss on the asset is recognised first.'),
        ('liquidating dividend',
         'A distribution that exceeds retained earnings and so returns '
         'contributed capital to shareholders.', 'توزيع تصفوي',
         'Charged to paid-in capital rather than to retained earnings, and it '
         'must be disclosed as a return of capital.'),
    ],

    blocks=[
        ('scene', 'Three ways to hand out more shares', [
            'Northwind has %s shares of $%d par in issue, trading at $%d.'
            % (_k(EQ.shares), EQ.par, EQ.market),
            'The board considers three proposals: a %s stock dividend, a %s '
            'stock dividend, and a %d for 1 split.'
            % (_pc(EQ.small_pct), _pc(EQ.large_pct), EQ.split),
            'Every shareholder ends up with more shares and the same fraction '
            'of the same company. No cash moves and total equity does not '
            'change under any of the three.',
            'Yet the accounting differs in every case, and that is what this '
            'handout is for.',
        ]),
        ('fig', 'ranked', 'What each proposal charges to retained earnings',
         [('Small stock dividend, %s at market $%d'
           % (_pc(EQ.small_pct), EQ.market), EQ.small_charge,
           money(EQ.small_charge), CAP),
          ('Large stock dividend, %s at par $%d'
           % (_pc(EQ.large_pct), EQ.par), EQ.large_charge,
           money(EQ.large_charge), EARN),
          ('Stock split, %d for 1' % EQ.split, 0, 'Nil', SLATE)],
         'The small dividend issues %s shares and the large one issues %s, and '
         'the small one still costs three times as much. That is the whole '
         'surprise of this topic.'
         % (_k(EQ.small_shares), _k(EQ.large_shares)),
         'Charged to retained earnings'),

        ('part', 'Part 1 · What a shareholder actually gets',
         'nothing, measured carefully'),

        ('task', 'Exercise 3A',
         'Say what a shareholder receives from a stock dividend.',
         'Read and complete. Write one word in each space.',
         ['Handout 1 Exercise 1E, on how a cash dividend works.'],
         ['Follow a shareholder who holds %s shares out of %s and work out '
          'their fraction before and after.' % (_k(30_000), _k(EQ.shares)),
          'Nothing leaves the company, so ask what the shareholder is richer '
          'by.',
          'The last blank is why a company does it at all, and it is about the '
          'price of one share.']),
        ('fill', 'R2',
         ['A shareholder holding %s of Northwind’s %s shares owns one tenth of '
          'the company. After a %s stock dividend they hold %s of %s, which is '
          'still one {tenth}.'
          % (_k(30_000), _k(EQ.shares), _pc(EQ.small_pct), _k(33_000),
             _k(EQ.shares + EQ.small_shares)),
          'No asset has left the company and no shareholder has given anything '
          'up, so nobody is better off. A stock dividend is not {income} to '
          'the shareholder and is not taxed as a receipt.',
          'What has changed is that the same equity is divided among more '
          'shares, so the price of a single share {falls} in proportion. Three '
          'shares at $%s are worth what two were.'
          % num(EQ.market * EQ.shares / (EQ.shares + EQ.small_shares), 2),
          'Boards do it to bring the share price into a range more buyers are '
          'comfortable with, and to signal confidence without spending any '
          '{cash}.'],
         {'tenth': ('Same fraction, more shares.', ''),
          'income': ('Nothing was received that was not already owned.',
                     'Students treat the new shares as a gain. The '
                     'shareholder’s claim is unchanged; only its denominator '
                     'moved.'),
          'falls': ('More shares over the same equity.', ''),
          'cash': ('Nothing leaves the company at all.', '')},
         ['half', 'rises', 'dividend']),
        ('fig', 'scale',
         'A CASH DIVIDEND',
         ['Assets fall by the amount paid',
          'Equity falls by the same amount',
          'The shareholder is richer in cash',
          'Northwind paid %s this way' % money(N.dividends)],
         'A STOCK DIVIDEND',
         ['Assets do not move at all',
          'Equity is unchanged in total',
          'The shareholder owns the same fraction',
          'Only the share count and the accounts move']),

        ('part', 'Part 2 · The small stock dividend',
         'capitalised at market value'),

        ('prose', 'A distribution of less than about a quarter of the shares in '
                  'issue is treated as a small stock dividend. The market has '
                  'absorbed so small an increase without much moving the price, '
                  'so the shares given away are measured at what they are '
                  'worth: market value.', 'R2'),

        ('task', 'Exercise 3B',
         'Record a small stock dividend and say which accounts move.',
         'Read and complete, then record the entry underneath.',
         ['Exercise 3A, and the paragraph above.'],
         ['%s of %s shares is %s new shares.'
          % (_pc(EQ.small_pct), _k(EQ.shares), _k(EQ.small_shares)),
          'They are measured at the market price of $%d, not at the $%d par.'
          % (EQ.market, EQ.par),
          'The credit splits in two, exactly as an issue of shares for cash '
          'does: par to one account and the rest to the other.']),
        ('fill', 'R2',
         ['A %s dividend on %s shares issues %s new shares. Because the '
          'distribution is small, they are capitalised at their {market} value '
          'of $%d each, or %s in total.'
          % (_pc(EQ.small_pct), _k(EQ.shares), _k(EQ.small_shares),
             EQ.market, money(EQ.small_charge)),
          'That %s is charged to retained {earnings}, which is why the '
          'transaction is called a dividend at all: it uses up profits that '
          'could otherwise have been distributed in cash.'
          % money(EQ.small_charge),
          'The credit side splits. Common stock takes the par value of %s and '
          'additional paid-in capital takes the remaining {%s}.'
          % (money(EQ.small_par), money(EQ.small_apic)),
          'Total equity is {unchanged}, because %s has moved out of one equity '
          'account and into two others. Only the composition of equity is '
          'different.' % money(EQ.small_charge)],
         {'market': ('What the shares given away are worth.', ''),
          'earnings': ('Profits capitalised and no longer distributable.', ''),
          money(EQ.small_apic): ('%s less the %s of par.'
                                 % (money(EQ.small_charge),
                                    money(EQ.small_par)), ''),
          'unchanged': ('One account down, two up, by the same total.',
                        'Students reduce total equity. Nothing left the '
                        'company, so the total cannot have moved.')},
         ['par', 'capital', 'reduced']),
        ('journal', [
            ('J1', ('A %s stock dividend declared and issued: %s shares at the '
                    'market price of $%d.'
                    % (_pc(EQ.small_pct), _k(EQ.small_shares), EQ.market),
                    'One debit inside equity, two credits inside equity, and no '
                    'cash.'),
             [('Retained Earnings', 0, '', ''),
              ('Common Stock', 1, '', ''),
              ('Additional Paid-In Capital', 1, '', '')]),
        ]),
        ('fig', 'formula', 'The small dividend, measured',
         [('%s shares' % _k(EQ.small_shares), '%s of %s in issue'
           % (_pc(EQ.small_pct), _k(EQ.shares)), CAP),
          ('×', '', None),
          ('Market $%d' % EQ.market, 'Because the distribution is small',
           SLATE),
          ('=', '', None),
          ('%s' % money(EQ.small_charge), 'Capitalised out of retained '
                                          'earnings', EARN)],
         'Of that, %s is par and %s is premium. The split between the two '
         'credits is the same as on any share issue.'
         % (money(EQ.small_par), money(EQ.small_apic))),

        ('part', 'Part 3 · The large stock dividend',
         'capitalised at par'),

        ('task', 'Exercise 3C',
         'Record a large stock dividend and say why the measurement changes.',
         'Read and complete. Write one word or figure in each space.',
         ['Exercise 3B.'],
         ['%s of %s shares is %s new shares, which is enough to move the '
          'market price materially.'
          % (_pc(EQ.large_pct), _k(EQ.shares), _k(EQ.large_shares)),
          'If the price will fall because of the distribution, the price before '
          'it is not a sensible measure of what is being given away.',
          'The last blank is the comparison the exam is really testing: which '
          'of the two dividends costs retained earnings more.']),
        ('fill', 'R2',
         ['A %s dividend issues %s new shares, which is a large enough increase '
          'that the market price will fall roughly in proportion. Measuring the '
          'distribution at the old price would overstate it, so a large '
          'dividend is capitalised at {par}.'
          % (_pc(EQ.large_pct), _k(EQ.large_shares)),
          'The charge to retained earnings is therefore %s shares at $%d, or '
          '{%s}, and the whole of it is credited to common stock. Additional '
          'paid-in capital is not involved at all.'
          % (_k(EQ.large_shares), EQ.par, money(EQ.large_charge)),
          'The threshold between the two is conventionally about a {quarter} of '
          'the shares in issue, and a distribution of that size or more is '
          'treated as large.',
          'So the %s dividend costs retained earnings %s and the %s dividend '
          'costs only %s. The {smaller} distribution is the more expensive one, '
          'because it is measured at a much higher price per share.'
          % (_pc(EQ.small_pct), money(EQ.small_charge),
             _pc(EQ.large_pct), money(EQ.large_charge))],
         {'par': ('The nominal figure, because the market figure is about to '
                  'move.', ''),
          money(EQ.large_charge): ('%s shares at $%d.'
                                   % (_k(EQ.large_shares), EQ.par), ''),
          'quarter': ('Between twenty and twenty-five per cent in practice.',
                      ''),
          'smaller': ('%s against %s, and the small one is three times the '
                      'cost.' % (money(EQ.small_charge),
                                 money(EQ.large_charge)),
                      'Students assume a bigger distribution must cost more. '
                      'The measurement basis changes, and it dominates the '
                      'share count.')},
         ['market', 'half', 'larger']),
        ('journal', [
            ('J2', ('A %s stock dividend declared and issued: %s shares at the '
                    '$%d par value.'
                    % (_pc(EQ.large_pct), _k(EQ.large_shares), EQ.par),
                    'Two lines only, because there is no premium to record.'),
             [('Retained Earnings', 0, '', ''),
              ('Common Stock', 1, '', '')]),
        ]),
        ('fig', 'matrix', 'Why the two sizes are measured differently',
         ['Small, under about a quarter',
          'Large, about a quarter or more'],
         ['Effect on the market price', 'Measured at', 'Accounts credited'],
         [['Little, so the price before is still meaningful',
           'Market value, $%d' % EQ.market,
           'Common stock and additional paid-in capital'],
          ['A proportionate fall, so the old price overstates it',
           'Par value, $%d' % EQ.par,
           'Common stock only']],
         'The reasoning is about the reliability of the price, not about '
         'generosity. A large distribution destroys the measure a small one '
         'can still use.'),

        ('part', 'Part 4 · The stock split', 'nothing to record'),

        ('task', 'Exercise 3D',
         'Say what a stock split changes in the accounts.',
         'Complete the right-hand column. Four of the six rows do not change.',
         ['Exercises 3B and 3C.'],
         ['A %d for 1 split doubles the share count, so ask what has to happen '
          'to the par value for the common stock account to stay put.'
          % EQ.split,
          '%s shares at $%d par is %s. Check that %s shares at the new par is '
          'the same figure.' % (_k(EQ.shares), EQ.par,
                                money(N.common_stock),
                                _k(EQ.split_shares)),
          'If no account changes, no entry is made. The whole record is a note '
          'of the new count and the new par.']),
        ('table', _SPLITH, _split(blank=True), SLATE, _SPLITW),
        ('answers', 6),
        ('fig', 'formula', 'Why the split records nothing',
         [('%s shares' % _k(EQ.split_shares), 'Twice as many as before',
           SLATE),
          ('×', '', None),
          ('Par $%s' % num(EQ.split_par, 2), 'Half what it was', CAP),
          ('=', '', None),
          ('%s' % money(N.common_stock), 'The same common stock account',
           EARN)],
         'Both sides of the multiplication move and the product does not. '
         'There is nothing to debit and nothing to credit.'),

        ('part', 'Part 5 · All three compared',
         'the question as the exam asks it'),

        ('task', 'Exercise 3E',
         'Compare the effect of the three proposals on each equity account.',
         'Complete the grid. Every column ends with the same answer.',
         ['Exercises 3B, 3C and 3D.'],
         ['Rows 2 to 4 are the computations you have already done.',
          'Row 5 asks about par value per share, and only one of the three '
          'columns moves it.',
          'Row 6 is the same in all three columns, and it is the answer the '
          'exam wants most often.']),
        ('table', _THREEH, _three(blank=True), CAP, _THREEW),
        ('answers', 15),
        ('fig', 'buckets', 'What stays the same under all three',
         [('UNCHANGED BY ALL THREE', OK,
           ['Total shareholders’ equity',
            'Total assets and total liabilities',
            'Each shareholder’s fraction of the company']),
          ('CHANGED BY ALL THREE', CAP,
           ['The number of shares in issue',
            'Every per-share figure, including earnings per share',
            'The market price per share']),
          ('CHANGED BY THE DIVIDENDS ONLY', EARN,
           ['Retained earnings, by %s or %s'
            % (money(EQ.small_charge), money(EQ.large_charge)),
            'Common stock, and sometimes paid-in capital',
            'Par value per share is changed by the split alone'])],
         'A question asking for the effect on total equity has the same answer '
         'in all three cases, and a question asking for the effect on retained '
         'earnings has three different ones.'),

        ('watch', 'A property dividend is the odd one out of the family. '
                  'Something real does leave the company, so the asset is '
                  'first remeasured to fair value, the gain or loss on it goes '
                  'through profit, and retained earnings is then charged with '
                  'that fair value. It is the only distribution in this handout '
                  'that touches the income statement at all.'),

        ('watch', 'Earnings per share is restated for a stock dividend or a '
                  'split as though the new shares had always existed, including '
                  'for every prior year shown. Weighting them from the date of '
                  'issue, the way a cash share issue is weighted, is the error '
                  'the exam is looking for.'),

        ('part', 'Part 6 · Exam pitch', 'the questions as the CMA sets them'),

        ('mcq', 'A stock dividend has what effect on total shareholders’ '
                'equity?',
         ['It decreases it by the market value of the shares issued',
          'No effect',
          'It decreases it by the par value of the shares issued',
          'It increases it by the market value of the shares issued'],
         1, 'Level A',
         'Amounts move between equity accounts and the total is untouched, '
         'because no asset leaves the company. (A) is the answer that confuses '
         'a stock dividend with a cash one.'),

        ('mcq', 'A company with %s shares of $%d par, trading at $%d, declares '
                'a %s stock dividend. Retained earnings is reduced by:'
         % (_k(EQ.shares), EQ.par, EQ.market, _pc(EQ.small_pct)),
         [money(EQ.small_par), money(EQ.small_charge),
          money(EQ.small_apic), 'Nil'],
         1, 'Level B',
         'A small dividend is capitalised at market: %s shares at $%d is %s. '
         '(A) applies the par measurement that belongs to a large dividend.'
         % (_k(EQ.small_shares), EQ.market, money(EQ.small_charge))),

        ('mcq', 'The same company instead declares a %s stock dividend. '
                'Retained earnings is reduced by:' % _pc(EQ.large_pct),
         [money(EQ.large_shares * EQ.market), money(EQ.large_charge),
          money(EQ.small_charge), 'Nil'],
         1, 'Level B',
         'A large dividend is capitalised at par: %s shares at $%d is %s. (A) '
         'is the market-value computation, which would charge %s for a '
         'distribution that moves the price down in proportion.'
         % (_k(EQ.large_shares), EQ.par, money(EQ.large_charge),
            money(EQ.large_shares * EQ.market))),

        ('mcq', 'A %d for 1 stock split is recorded by:' % EQ.split,
         ['A debit to retained earnings and a credit to common stock',
          'No entry, with a memorandum of the new share count and par value',
          'A credit to additional paid-in capital',
          'A debit to common stock and a credit to retained earnings'],
         1, 'Level A',
         'The share count doubles and the par value halves, so every balance is '
         'unchanged and there is nothing to record. (A) is the stock dividend '
         'entry applied to a split.'),

        ('mcq', 'After a %d for 1 split of %s shares with a $%d par value, the '
                'common stock account is:'
         % (EQ.split, _k(EQ.shares), EQ.par),
         [money(N.common_stock * EQ.split), money(N.common_stock),
          money(N.common_stock / EQ.split), money(N.apic)],
         1, 'Level B',
         '%s shares at $%s par is still %s. (A) doubles the count without '
         'halving the par, which is the mistake that makes a split look like a '
         'share issue.' % (_k(EQ.split_shares), num(EQ.split_par, 2),
                           money(N.common_stock))),

        ('mcq', 'Which of the following reduces retained earnings by the '
                'largest amount, for a company with %s shares of $%d par '
                'trading at $%d?' % (_k(EQ.shares), EQ.par, EQ.market),
         ['A %s stock dividend' % _pc(EQ.large_pct),
          'A %s stock dividend' % _pc(EQ.small_pct),
          'A %d for 1 stock split' % EQ.split,
          'All three are equal'],
         1, 'Level C',
         'The %s dividend is capitalised at market and costs %s; the %s one is '
         'capitalised at par and costs %s. The smaller distribution is the '
         'larger charge, which is exactly the inversion the question tests.'
         % (_pc(EQ.small_pct), money(EQ.small_charge),
            _pc(EQ.large_pct), money(EQ.large_charge))),

        ('mcq', 'A company declares a dividend that exceeds its retained '
                'earnings. The excess is:',
         ['Carried forward as a deficit',
          'Charged to paid-in capital and disclosed as a liquidating dividend',
          'Recognised as an expense',
          'Not permitted in any circumstances'],
         1, 'Level C',
         'Beyond retained earnings a distribution is returning contributed '
         'capital, which must be charged there and disclosed as such. (A) would '
         'leave a negative retained earnings balance created by a distribution '
         'rather than by losses.'),

        ('tip', 'For any stock dividend, ask the size first. Under about a '
                'quarter means market value and a credit split between two '
                'accounts; a quarter or more means par value and one credit. '
                'And whatever the answer, total equity has not moved.'),
    ],

    key_extra=[
        ('h3', 'Exercise 3D · the split, account by account'),
        ('table', _SPLITH, _split(), SLATE, _SPLITW),
        ('h3', 'Exercise 3E · all three compared'),
        ('table', _THREEH, _three(), CAP, _THREEW),
        ('h3', 'Exercises 3B and 3C · the two entries, completed'),
        ('journal', [
            ('J1', 'The %s stock dividend, at the $%d market price.'
             % (_pc(EQ.small_pct), EQ.market),
             [('Retained Earnings', 0, money(EQ.small_charge), ''),
              ('Common Stock', 1, '', money(EQ.small_par)),
              ('Additional Paid-In Capital', 1, '',
               money(EQ.small_apic))]),
            ('J2', 'The %s stock dividend, at the $%d par value.'
             % (_pc(EQ.large_pct), EQ.par),
             [('Retained Earnings', 0, money(EQ.large_charge), ''),
              ('Common Stock', 1, '', money(EQ.large_charge))]),
        ]),
        ('prose', 'The two entries are alternatives, not a sequence: the board '
                  'declares one dividend or the other. Either way total equity '
                  'is the %s Volume 1 reported, before and after.'
                  % money(N.equity), 'R2'),
        ('prose', 'The %s dividend issues %s shares and charges %s. The %s '
                  'dividend issues %s shares and charges %s. Three times as '
                  'many shares for a third of the charge, because the '
                  'measurement basis changed from $%d to $%d.'
                  % (_pc(EQ.small_pct), _k(EQ.small_shares),
                     money(EQ.small_charge), _pc(EQ.large_pct),
                     _k(EQ.large_shares), money(EQ.large_charge),
                     EQ.market, EQ.par), 'R2'),
    ],
)
