/* Icon library — 48x48 line icons, drawn to read clearly at 90-180px on screen.
   Elements tagged class="f" are filled with the current colour at low opacity
   to give each icon a little weight without losing the line-art feel.        */
(function (global) {
  const I = {};

  /* ---- documents & invoices ------------------------------------------- */
  const DOC = '<path class="f" d="M13 5h14l8 8v30a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>' +
              '<path d="M13 5h14l8 8v30a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>' +
              '<path d="M27 5v8h8"/>';

  I.invoice      = DOC + '<path d="M17 22h14M17 28h14M17 34h8"/>';
  I.invoice_bad  = DOC + '<path d="M17 22h14M17 28h9"/><circle cx="33" cy="33" r="8" class="f"/><circle cx="33" cy="33" r="8"/><path d="M30 30l6 6M36 30l-6 6"/>';
  I.invoice_new  = DOC + '<path d="M17 22h10M17 28h8"/><circle cx="33" cy="33" r="8" class="f"/><circle cx="33" cy="33" r="8"/><path d="M33 29v8M29 33h8"/>';
  I.invoice_unpaid = DOC + '<path d="M17 22h14M17 28h9"/><path d="M14 38l20-14" stroke-width="3.4"/>';
  I.invoice_send = DOC + '<path d="M17 22h12M17 28h8"/><path d="M24 36h14M33 31l5 5-5 5"/>';
  I.invoice_due  = DOC + '<path d="M17 21h14M17 27h9"/><circle cx="33" cy="34" r="8" class="f"/><circle cx="33" cy="34" r="8"/><path d="M33 30v4.5l3 2"/>';
  I.credit_note  = DOC + '<path d="M17 21h12M17 27h8"/><circle cx="33" cy="33" r="8" class="f"/><circle cx="33" cy="33" r="8"/><path d="M29 33h8"/>';
  I.contract     = DOC + '<path d="M17 21h14M17 27h14"/><path d="M16 36c3-4 5 2 8-1s4 3 8-2"/>';
  I.po           = DOC + '<path d="M17 21h14M17 27h10"/><path d="M16 35l4 4 8-9"/>';
  I.two_docs     = '<path class="f" d="M9 11h11l6 6v22H9z"/><path d="M9 11h11l6 6v22H9z"/><path d="M20 11v6h6"/>' +
                   '<path class="f" d="M22 17h11l6 6v22H22z"/><path d="M22 17h11l6 6v22H22z"/><path d="M33 17v6h6"/><path d="M26 29h9M26 35h6"/>';
  I.match_docs   = '<path class="f" d="M5 9h14l5 5v20H5z"/><path d="M5 9h14l5 5v20H5z"/><path d="M9 19h10M9 25h7"/>' +
                   '<path class="f" d="M24 15h14l5 5v20H24z"/><path d="M24 15h14l5 5v20H24z"/><path d="M28 25h10M28 31h7"/>' +
                   '<path d="M17 40l4 4 9-10" stroke-width="3.4"/>';
  I.email_doc    = '<path class="f" d="M6 12h36v24H6z"/><path d="M6 12h36v24H6z"/><path d="M6 14l18 13L42 14"/>';
  I.email_confirm= '<path class="f" d="M5 11h30v20H5z"/><path d="M5 11h30v20H5z"/><path d="M5 13l15 11 15-11"/>' +
                   '<circle cx="37" cy="35" r="9" class="f"/><circle cx="37" cy="35" r="9"/><path d="M33 35l3 3 5-6"/>';
  I.reminder     = '<path class="f" d="M5 12h30v20H5z"/><path d="M5 12h30v20H5z"/><path d="M5 14l15 11 15-11"/>' +
                   '<path d="M38 8v8M38 21v1" stroke-width="3.4"/>';
  I.queue        = '<path class="f" d="M5 8h22v9H5zM5 20h22v9H5zM5 32h22v9H5z"/>' +
                   '<path d="M5 8h22v9H5zM5 20h22v9H5zM5 32h22v9H5z"/>' +
                   '<path d="M33 24.5h10M38 19.5l5 5-5 5"/>';
  I.no_edit      = '<path class="f" d="M8 32l18-18 8 8-18 18H8z"/><path d="M8 32l18-18 8 8-18 18H8z"/><path d="M24 12l5-5 8 8-5 5"/>' +
                   '<circle cx="35" cy="35" r="10" class="f"/><circle cx="35" cy="35" r="10"/><path d="M30 30l10 10"/>';
  I.audit_trail  = '<path d="M7 40V10M7 40h34"/><path class="f" d="M13 30h5v10h-5zM22 22h5v18h-5zM31 14h5v26h-5z"/>' +
                   '<path d="M13 30h5v10h-5zM22 22h5v18h-5zM31 14h5v26h-5z"/><path d="M11 36l6-8 7-6 8-8"/>';
  I.schedule     = '<path class="f" d="M6 10h36v32H6z"/><path d="M6 10h36v32H6z"/><path d="M6 19h36M15 6v8M33 6v8"/>' +
                   '<path d="M13 27h8M13 34h14M26 27h9"/>';

  /* ---- money ----------------------------------------------------------- */
  I.price_tag    = '<path class="f" d="M25 5H43v18L24 42 6 24z"/><path d="M25 5H43v18L24 42 6 24z"/><circle cx="35" cy="13" r="3.2"/>';
  I.money_ready  = '<path class="f" d="M5 13h38v22H5z"/><path d="M5 13h38v22H5z"/><circle cx="24" cy="24" r="6"/><path d="M11 19v10M37 19v10"/>';
  I.money_part   = '<path class="f" d="M5 13h26v22H5z"/><path d="M5 13h26v22H5z"/><circle cx="18" cy="24" r="5"/><path d="M36 16v16M43 16v16" opacity=".5"/>';
  I.paid         = '<circle cx="24" cy="24" r="18" class="f"/><circle cx="24" cy="24" r="18"/><path d="M15 24l6 7 13-14" stroke-width="3.6"/>';
  I.empty_account= '<path class="f" d="M5 13h38v22H5z"/><path d="M5 13h38v22H5z"/><path d="M18 24h12" stroke-width="3.4"/><path d="M9 38l30-28" stroke-width="2.2" opacity=".55"/>';
  I.cash_tight   = '<path class="f" d="M7 15h34v18H7z"/><path d="M7 15h34v18H7z"/><circle cx="24" cy="24" r="5"/>' +
                   '<path d="M5 9l5 5M43 9l-5 5M5 39l5-5M43 39l-5-5" stroke-width="3"/>';
  I.cashflow     = '<path d="M6 34c6 0 6-18 12-18s6 18 12 18 6-18 12-18"/><path class="f" d="M6 38h36v4H6z"/><path d="M6 42h36"/>';
  I.variance     = '<path d="M8 36V12M40 36V12M8 36h32"/><path class="f" d="M13 22h8v14h-8z"/><path d="M13 22h8v14h-8z"/>' +
                   '<path class="f" d="M27 10h8v26h-8z"/><path d="M27 10h8v26h-8z"/><path d="M21 16h6" stroke-dasharray="3 3"/>';
  I.price_gap    = '<path d="M10 14h12M10 34h22"/><path class="f" d="M6 9h20v10H6zM6 29h28v10H6z"/>' +
                   '<path d="M6 9h20v10H6zM6 29h28v10H6z"/><path d="M40 12v24M36 16l4-4 4 4M36 32l4 4 4-4"/>';
  I.credit_line  = '<path class="f" d="M5 12h38v24H5z"/><path d="M5 12h38v24H5z"/><path d="M5 20h38"/><path d="M11 29h9M26 29h11"/>';
  I.split        = '<path d="M8 24h12M20 24l8-10h14M20 24l8 10h14"/><circle cx="8" cy="24" r="4" class="f"/><circle cx="8" cy="24" r="4"/>' +
                   '<circle cx="43" cy="14" r="4" class="f"/><circle cx="43" cy="14" r="4"/><circle cx="43" cy="34" r="4" class="f"/><circle cx="43" cy="34" r="4"/>';

  /* ---- time ------------------------------------------------------------ */
  const CAL = '<path class="f" d="M6 10h36v32H6z"/><path d="M6 10h36v32H6z"/><path d="M6 20h36M15 5v9M33 5v9"/>';
  I.calendar2    = CAL + '<text x="24" y="36" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor" font-family="Inter,sans-serif">2</text>';
  I.calendar10   = CAL + '<text x="24" y="36" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor" font-family="Inter,sans-serif">10</text>';
  I.calendar_fri = CAL + '<text x="24" y="36" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor" font-family="Inter,sans-serif">15</text>';
  I.due_date     = CAL + '<circle cx="33" cy="33" r="9" class="f"/><circle cx="33" cy="33" r="9"/><path d="M33 28v5.5l3.5 2.5"/>';
  I.clock_fast   = '<circle cx="26" cy="24" r="16" class="f"/><circle cx="26" cy="24" r="16"/><path d="M26 15v9l6 4"/><path d="M4 17h9M2 24h8M4 31h9"/>';
  I.clock_late   = '<circle cx="24" cy="26" r="16" class="f"/><circle cx="24" cy="26" r="16"/><path d="M24 16v10l7 5"/><path d="M14 7l-7 5M34 7l7 5"/>';
  I.rush         = '<path class="f" d="M26 4L12 27h10l-3 17 17-24H25z"/><path d="M26 4L12 27h10l-3 17 17-24H25z"/>';
  I.history_good = '<circle cx="24" cy="24" r="17" class="f"/><circle cx="24" cy="24" r="17"/><path d="M24 13v11l8 5"/><path d="M16 40l5 5 11-12" stroke-width="3.2"/>';
  I.freeze       = '<path d="M24 5v38M9 14l30 20M39 14L9 34"/><path d="M19 9l5 5 5-5M19 39l5-5 5 5M8 19l1 6 6 1M40 29l-1-6-6-1M8 29l1-6 6-1M40 19l-1 6-6 1" stroke-width="2.2"/>';

  /* ---- people ---------------------------------------------------------- */
  const BODY = '<path class="f" d="M9 43c0-8 7-13 15-13s15 5 15 13z"/><path d="M9 43c0-8 7-13 15-13s15 5 15 13z"/>';
  I.clerk        = '<circle cx="24" cy="15" r="8" class="f"/><circle cx="24" cy="15" r="8"/>' + BODY;
  I.accountant_f = '<path class="f" d="M24 7c7 0 10 4 10 9s-4 9-10 9-10-4-10-9 3-9 10-9z"/>' +
                   '<path d="M24 7c7 0 10 4 10 9s-4 9-10 9-10-4-10-9 3-9 10-9z"/>' +
                   '<path d="M13 17c0-8 4-12 11-12s11 4 11 12" stroke-width="3"/>' + BODY;
  I.manager_f    = I.accountant_f + '<path d="M19 33l5 6 5-6" stroke-width="2.2"/>';
  I.buyer        = '<circle cx="24" cy="14" r="7.5" class="f"/><circle cx="24" cy="14" r="7.5"/>' +
                   '<path class="f" d="M10 42c0-7.5 6.3-12 14-12s14 4.5 14 12z"/><path d="M10 42c0-7.5 6.3-12 14-12s14 4.5 14 12z"/><path d="M24 30v12"/>';
  I.auditor      = '<circle cx="21" cy="21" r="13" class="f"/><circle cx="21" cy="21" r="13"/><path d="M30.5 30.5L43 43"/><path d="M15 21l4 4 8-9"/>';
  I.accountant_look = '<circle cx="19" cy="19" r="12" class="f"/><circle cx="19" cy="19" r="12"/><path d="M27.5 27.5L41 41"/><path d="M13 17h12M13 23h8"/>';
  I.handshake    = '<path class="f" d="M4 20l8-6 12 4 12-4 8 6-8 14-6-5-6 5-6-5-6 5z"/>' +
                   '<path d="M4 20l8-6 12 4 12-4 8 6"/><path d="M12 14v20M36 14v20"/><path d="M16 26l5 5 3-3 4 4 4-4"/>';
  I.thanks       = '<path class="f" d="M24 42S5 30 5 18A10 10 0 0 1 24 13 10 10 0 0 1 43 18c0 12-19 24-19 24z"/>' +
                   '<path d="M24 42S5 30 5 18A10 10 0 0 1 24 13 10 10 0 0 1 43 18c0 12-19 24-19 24z"/>';
  I.robot        = '<path class="f" d="M9 16h30v22H9z"/><path d="M9 16h30v22H9z"/><circle cx="18" cy="25" r="3"/><circle cx="30" cy="25" r="3"/>' +
                   '<path d="M18 32h12M24 16V9M24 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM4 22v9M44 22v9"/>';

  /* ---- comms ----------------------------------------------------------- */
  const PHONE = '<path class="f" d="M14 5h20v38H14z"/><path d="M14 5h20v38H14z"/><path d="M21 9h6"/><circle cx="24" cy="38" r="1.8"/>';
  I.phone_call   = PHONE + '<path d="M38 14a9 9 0 0 1 0 20M42 9a15 15 0 0 1 0 30" opacity=".85"/><path d="M6 14a9 9 0 0 0 0 20M2 9a15 15 0 0 0 0 30" opacity=".85"/>';
  I.phone_early  = PHONE + '<circle cx="38" cy="12" r="8" class="f"/><circle cx="38" cy="12" r="8"/><path d="M38 8v4.5l3 2"/>';
  I.phone_off    = PHONE + '<path d="M5 6l38 36" stroke-width="3.4"/>';
  I.flag_alert   = '<path class="f" d="M12 7h26l-6 9 6 9H12z"/><path d="M12 7h26l-6 9 6 9H12z"/><path d="M12 5v38"/>';
  I.question     = '<circle cx="24" cy="24" r="18" class="f"/><circle cx="24" cy="24" r="18"/>' +
                   '<path d="M18.5 18.5a5.5 5.5 0 1 1 7 5.3c-1.2.5-1.5 1.4-1.5 2.7v1.5"/><circle cx="24" cy="34" r="1.9" fill="currentColor" stroke="none"/>';
  I.approve      = '<circle cx="24" cy="24" r="17" class="f"/><circle cx="24" cy="24" r="17"/><path d="M16 24l6 6 11-12" stroke-width="3.4"/>';
  I.swap         = '<path d="M9 17h26M28 10l7 7-7 7"/><path d="M39 31H13M20 38l-7-7 7-7"/>';

  /* ---- places & goods --------------------------------------------------- */
  I.city         = '<path class="f" d="M6 43V20l10-6 10 6v23zM28 43V26l7-5 7 5v17z"/>' +
                   '<path d="M6 43V20l10-6 10 6v23zM28 43V26l7-5 7 5v17zM4 43h40"/>' +
                   '<path d="M12 26h3M17 26h3M12 33h3M17 33h3M33 32h3"/>';
  I.cement       = '<path class="f" d="M12 14h24l3 29H9z"/><path d="M12 14h24l3 29H9z"/><path d="M16 8h16l4 6H12z"/><path d="M16 26h16M16 34h10"/>';
  I.cargo_ship   = '<path class="f" d="M5 30h38l-5 10H10z"/><path d="M5 30h38l-5 10H10z"/>' +
                   '<path class="f" d="M12 18h11v12H12zM25 12h11v18H25z"/><path d="M12 18h11v12H12zM25 12h11v18H25z"/>' +
                   '<path d="M3 43c4 0 4 2 8 2s4-2 8-2 4 2 8 2 4-2 8-2 4 2 8 2"/>';

  /* ---- banking detail --------------------------------------------------- */
  const BANKFRONT = '<path class="f" d="M7 20h34v18H7z"/><path d="M7 20h34v18H7zM4 20L24 8l20 12M5 42h38"/>' +
                    '<path d="M14 26v8M24 26v8M34 26v8"/>';
  I.bank_send    = BANKFRONT + '<path d="M30 15h12M37 10l5 5-5 5" stroke-width="3"/>';
  I.bank_chain   = '<path class="f" d="M3 18h12v14H3zM33 18h12v14H33z"/>' +
                   '<path d="M3 18h12v14H3zM33 18h12v14H33zM2 32h14M32 32h14"/>' +
                   '<path d="M3 18L9 12l6 6M33 18l6-6 6 6"/>' +
                   '<circle cx="24" cy="25" r="7" class="f"/><circle cx="24" cy="25" r="7"/>' +
                   '<path d="M15 25h2M31 25h2"/>';
  I.swift        = '<path class="f" d="M5 11h38v26H5z"/><path d="M5 11h38v26H5z"/>' +
                   '<path d="M5 18h38"/><path d="M11 25h10M11 31h16M27 25h10"/>' +
                   '<path d="M9 14.5h2M14 14.5h2M19 14.5h2"/>';
  I.statement    = DOC + '<path d="M17 20h14M17 26h14M17 32h14M17 38h8"/>';
  I.ref_line     = '<path class="f" d="M5 16h38v16H5z"/><path d="M5 16h38v16H5z"/>' +
                   '<path d="M11 24h14" stroke-width="3.2"/><path d="M29 24h8" stroke-dasharray="2 4"/>';
  I.no_name      = '<circle cx="24" cy="17" r="8" class="f"/><circle cx="24" cy="17" r="8"/>' +
                   '<path class="f" d="M10 43c0-8 6-13 14-13s14 5 14 13z"/>' +
                   '<path d="M10 43c0-8 6-13 14-13s14 5 14 13z"/><path d="M6 7l36 34" stroke-width="3.4"/>';
  I.scissors     = '<circle cx="11" cy="37" r="6" class="f"/><circle cx="11" cy="37" r="6"/>' +
                   '<circle cx="11" cy="11" r="6" class="f"/><circle cx="11" cy="11" r="6"/>' +
                   '<path d="M16 14l26 22M16 34L42 12"/>';
  I.deduct       = '<circle cx="24" cy="24" r="17" class="f"/><circle cx="24" cy="24" r="17"/>' +
                   '<path d="M15 24h18" stroke-width="4"/>';
  I.write_off    = DOC + '<path d="M17 21h14M17 27h10"/><path d="M12 38l24-18" stroke-width="3.4"/>';
  I.ledger       = '<path class="f" d="M9 6h28a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2H9z"/>' +
                   '<path d="M9 6h28a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2H9zM9 6v38M15 6v38"/>' +
                   '<path d="M21 16h12M21 24h12M21 32h8"/>';
  I.sha_our      = '<path class="f" d="M5 10h17v12H5zM26 26h17v12H26z"/>' +
                   '<path d="M5 10h17v12H5zM26 26h17v12H26z"/>' +
                   '<path d="M26 16h13M34 11l5 5-5 5M22 32H9M14 27l-5 5 5 5"/>';
  I.profit_loss  = '<path d="M6 40V8M6 40h36"/><path d="M11 32l8-9 7 6 13-15"/>' +
                   '<path d="M32 14h7v7"/><path class="f" d="M11 32l8-9 7 6 13-15v26H11z"/>';
  I.lc           = DOC + '<path d="M17 21h14M17 27h9"/><circle cx="31" cy="34" r="9" class="f"/>' +
                   '<circle cx="31" cy="34" r="9"/><path d="M31 29.5l1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z"/>';
  I.bill_lading  = DOC + '<path d="M17 20h14M17 26h10"/><path d="M14 36h16M24 31l5 5-5 5"/>' +
                   '<path d="M33 20h6" stroke-width="3"/>';
  I.shield       = '<path class="f" d="M24 4l17 7v14c0 11-7 17-17 21-10-4-17-10-17-21V11z"/>' +
                   '<path d="M24 4l17 7v14c0 11-7 17-17 21-10-4-17-10-17-21V11z"/>' +
                   '<path d="M16 24l6 6 11-12" stroke-width="3"/>';

  /* ---- places, goods, paperwork ----------------------------------------- */
  I.factory      = '<path class="f" d="M5 43V22l11 7V22l11 7V12h16v31z"/>' +
                   '<path d="M5 43V22l11 7V22l11 7V12h16v31zM3 43h42"/><path d="M36 20h4M36 28h4"/>';
  I.shop         = '<path class="f" d="M7 20h34v23H7z"/><path d="M7 20h34v23H7zM4 20l4-9h32l4 9z"/>' +
                   '<path d="M4 20c0 4 3 6 6.5 6S17 24 17 20M17 20c0 4 3 6 7 6s7-2 7-6M31 20c0 4 3 6 6.5 6S44 24 44 20"/>' +
                   '<path d="M19 43V31h10v12"/>';
  I.water        = '<path class="f" d="M24 5c8 11 14 17 14 25a14 14 0 0 1-28 0c0-8 6-14 14-25z"/>' +
                   '<path d="M24 5c8 11 14 17 14 25a14 14 0 0 1-28 0c0-8 6-14 14-25z"/>' +
                   '<path d="M17 31c0 5 3 8 7 9"/>';
  I.steel        = '<path class="f" d="M6 16h30l6 8H12z"/><path d="M6 16h30l6 8H12zM12 24v18M42 24v18M12 42h30V24"/>' +
                   '<path d="M20 24v18M28 24v18M35 24v18"/>';
  I.three_docs   = '<path class="f" d="M4 10h11l4 4v22H4z"/><path d="M4 10h11l4 4v22H4z"/>' +
                   '<path class="f" d="M17 14h11l4 4v22H17z"/><path d="M17 14h11l4 4v22H17z"/>' +
                   '<path class="f" d="M30 18h11l4 4v22H30z"/><path d="M30 18h11l4 4v22H30z"/>';
  I.crane        = '<path d="M10 43h16M18 43V12M18 12h22M40 12v9M18 12L8 20h10"/>' +
                   '<path class="f" d="M34 21h12v10H34z"/><path d="M34 21h12v10H34z"/><path d="M40 12v9"/>' +
                   '<path d="M13 43v-6h10v6"/>';
  I.handwritten  = '<path class="f" d="M9 6h30v36H9z"/><path d="M9 6h30v36H9z"/>' +
                   '<path d="M15 17c3-4 5 3 8-1s5 3 9-1M15 26c3-4 5 3 8-1s5 3 9-1M15 35h10"/>';
  I.no_stamp     = '<circle cx="24" cy="24" r="14" class="f"/><circle cx="24" cy="24" r="14"/>' +
                   '<circle cx="24" cy="24" r="8"/><path d="M6 6l36 36" stroke-width="3.6"/>';
  I.stamped_invoice = DOC + '<path d="M17 20h14M17 26h9"/>' +
                   '<circle cx="31" cy="34" r="9" class="f"/><circle cx="31" cy="34" r="9"/>' +
                   '<circle cx="31" cy="34" r="5"/>';
  I.hold_back    = '<path class="f" d="M5 14h30v20H5z"/><path d="M5 14h30v20H5z"/><circle cx="20" cy="24" r="5"/>' +
                   '<path d="M41 14v20" stroke-width="4"/><path d="M44 18l-5 6 5 6" stroke-width="3"/>';

  /* ---------------------------------------------------------------------- */
  I.fallback = '<circle cx="24" cy="24" r="16" class="f"/><circle cx="24" cy="24" r="16"/><path d="M24 16v10M24 32v.5"/>';

  function svg(name, cls) {
    const body = I[name] || I.fallback;
    return '<svg class="ico ' + (cls || '') + '" viewBox="0 0 48 48" fill="none" ' +
      'stroke="currentColor" stroke-width="2.6" stroke-linecap="round" ' +
      'stroke-linejoin="round">' + body + '</svg>';
  }

  global.ICONS = I;
  global.icon = svg;
})(window);
