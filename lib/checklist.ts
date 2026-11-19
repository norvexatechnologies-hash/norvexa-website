/** "Where can AI save your business time?" — 25-point checklist (site page + PDF). */
export const CHECKLIST: { area: string; items: string[] }[] = [
  { area: 'Customer enquiries', items: [
    'Customers ask the same 10–20 questions by WhatsApp, phone or email every week',
    'Enquiries that arrive after hours wait until the next working day for a reply',
    'Staff copy enquiry details from messages into a CRM or spreadsheet by hand',
    'Leads are not followed up consistently on day 1, day 3 and day 7',
    'Quotes or proposals are rebuilt from scratch for each customer',
  ] },
  { area: 'Sales & marketing', items: [
    'Social media posts and captions take hours to write each week',
    'Nobody has time to research a new lead before the first call',
    'Weekly sales or pipeline reports are assembled manually',
    'Past winning proposals are hard to find when writing a new one',
    'Reviews and testimonials are not requested automatically after a job',
  ] },
  { area: 'Finance & admin', items: [
    'Invoices and purchase orders are typed into the accounting system by hand',
    'Bank statements are reconciled line by line in Excel',
    'Payment reminders depend on someone remembering to send them',
    'Expense claims and receipts are checked manually',
    'Month-end reports take more than two days to prepare',
  ] },
  { area: 'Operations & HR', items: [
    'Orders, bookings or job sheets arrive as PDFs or emails and are re-keyed',
    'Staff ask HR or managers the same policy questions repeatedly',
    'CVs are screened one by one by reading every application',
    'Stock counts, inspections or site reports are done on paper',
    'Scheduling staff, deliveries or appointments is done by phone and WhatsApp',
  ] },
  { area: 'Data & decisions', items: [
    'Information lives in several systems that do not talk to each other',
    'Managers wait for someone to pull numbers before they can decide',
    'Important documents and manuals are hard to search',
    'You cannot easily see which marketing channel brings paying customers',
    'Repetitive work stops completely when one key person is on leave',
  ] },
];

export const CHECKLIST_SCORING = [
  { range: '0–5 ticks', text: 'You are already lean. Focus AI on growth: faster replies to enquiries and better lead follow-up.' },
  { range: '6–12 ticks', text: 'Typical for a growing business. One or two well-chosen AI agents could take a real share of this work off your team.' },
  { range: '13–25 ticks', text: 'Significant hidden cost. Start with a short AI audit to rank the opportunities by value and quick wins.' },
];
