// Unit data + renderer for unit.html
// One file, one URL param (?u=<id>), all 18 CPP41419 units + the welcome module.

(function () {
  'use strict';

  // ---------- Question banks (one set per sub-section) ----------
  // Each unit page shows three sample questions drawn from the bank that
  // matches the unit's sub-section, plus one short-answer question.
  const QUESTION_BANKS = {
    core: [
      {
        type: 'mc',
        q: 'Which South Australian legislation primarily regulates real estate agents and their trust accounts?',
        opts: ['Land Agents Act 1994 (SA)', 'Corporations Act 2001 (Cth)', 'National Construction Code', 'Fair Work Act 2009 (Cth)'],
        correct: 0,
      },
      {
        type: 'mc',
        q: 'A vendor\'s deposit for a residential sale must be:',
        opts: [
          'Banked into the agency\'s general operating account',
          'Held in the agency\'s trust account until settlement or as lawfully directed',
          'Paid directly to the sales agent as commission',
          'Kept in cash at the agency office',
        ],
        correct: 1,
      },
      {
        type: 'mc',
        q: 'A conflict of interest should be:',
        opts: [
          'Kept confidential unless a client asks',
          'Disclosed in writing to all affected parties and actively managed',
          'Ignored if the client is a family member',
          'Resolved by the principal after settlement',
        ],
        correct: 1,
      },
      { type: 'short', q: 'Explain the difference between an agency\'s general account and its trust account, and give one example of money that must be held in trust.' },
    ],
    sales: [
      {
        type: 'mc',
        q: 'A comparative market analysis (CMA) is best described as:',
        opts: [
          'A formal bank valuation',
          'An evidence-based estimate of likely selling price using comparable sales',
          'A government rating of the property',
          'A structural and pest report',
        ],
        correct: 1,
      },
      {
        type: 'mc',
        q: 'Which of the following is the strongest evidence of a property\'s market value?',
        opts: [
          'The vendor\'s asking price',
          'Recent sales of genuinely comparable properties in the same area',
          'The council rates notice',
          'The cost of the vendor\'s recent renovation',
        ],
        correct: 1,
      },
      {
        type: 'mc',
        q: 'Under the Australian Consumer Law, property advertising must be:',
        opts: [
          'Accurate and not misleading',
          'Approved by the buyer before publication',
          'Published online only',
          'Based on the highest price ever achieved in the suburb',
        ],
        correct: 0,
      },
      { type: 'short', q: 'Outline the steps you would take to prepare a CMA for a three-bedroom home in Adelaide\'s inner south.' },
    ],
    management: [
      {
        type: 'mc',
        q: 'Which Act governs most residential tenancies in South Australia?',
        opts: ['Residential Tenancies Act 1995 (SA)', 'Land Agents Act 1994 (SA)', 'Real Property Act 1886 (SA)', 'Australian Consumer Law'],
        correct: 0,
      },
      {
        type: 'mc',
        q: 'A tenant\'s bond must be:',
        opts: [
          'Held in the landlord\'s personal account',
          'Lodged with the Residential Tenancies Fund as required by the Act',
          'Retained by the property manager as a fee',
          'Paid directly to the landlord in cash',
        ],
        correct: 1,
      },
      {
        type: 'mc',
        q: 'A routine inspection should be:',
        opts: [
          'Conducted without notice at any time',
          'Conducted with the notice required by the Act and recorded in writing',
          'Limited to the exterior of the property',
          'Arranged only when the tenant is in arrears',
        ],
        correct: 1,
      },
      { type: 'short', q: 'Describe the records you would keep when managing a tenancy from lease signing through to a routine inspection.' },
    ],
    professional: [
      {
        type: 'mc',
        q: 'Inclusive work practice in real estate means:',
        opts: [
          'Treating every client exactly the same regardless of their needs',
          'Identifying barriers and making reasonable adjustments for clients and colleagues',
          'Using English-language marketing only',
          'Avoiding clients who require additional support',
        ],
        correct: 1,
      },
      {
        type: 'mc',
        q: 'When presenting to a vendor at a listing appointment, the most important preparation is:',
        opts: [
          'Memorising a word-for-word script',
          'Understanding the client\'s needs and the evidence behind your recommendation',
          'Using as many slides as possible',
          'Speaking quickly to save time',
        ],
        correct: 1,
      },
      {
        type: 'mc',
        q: 'When providing sustainability information about a property, you should:',
        opts: [
          'Quote the highest rating you can find',
          'Provide accurate, verifiable information and explain its source',
          'Avoid the topic unless the buyer asks',
          'Rely on the vendor\'s verbal claim',
        ],
        correct: 1,
      },
      { type: 'short', q: 'List three things you would confirm before delivering a listing presentation to a vendor.' },
    ],
    intro: [
      {
        type: 'mc',
        q: 'What is the final completion deadline for this CPP41419 enrolment?',
        opts: ['12 months from enrolment', '18 months from enrolment', '30 November 2027', 'There is no fixed deadline'],
        correct: 2,
      },
      {
        type: 'mc',
        q: 'A Unique Student Identifier (USI) is:',
        opts: ['Optional for vocational courses', 'Required before a qualification can be issued', 'Issued only by an employer', 'The same as a Tax File Number'],
        correct: 1,
      },
      {
        type: 'mc',
        q: 'If you need a reasonable adjustment for an assessment, you should:',
        opts: [
          'Submit first and request the adjustment afterwards',
          'Contact your trainer before the assessment and submit the adjustment form',
          'Wait until the final competency interview',
          'Adjustments are not available in this course',
        ],
        correct: 1,
      },
      { type: 'short', q: 'In one sentence, describe what "competency" means in vocational education.' },
    ],
  };

  // ---------- Unit catalog ----------
  // status: 'satisfactory' | 'progress' | 'new' | 'locked'
  const UNITS = {
    'intro': {
      code: 'Module 1', title: 'Course Introduction — Online Knowledge Check',
      section: 'Welcome & Course Introduction', sectionKey: 'intro',
      status: 'satisfactory', submitted: '27 Jan 2026', score: '8/8',
      desc: 'Orientation to CPP41419, the self-paced delivery model, your assessment portfolio and the support available from your trainer and student services team.',
      projectTask: null,
    },
    'cpprep4001': {
      code: 'CPPREP4001', title: 'Prepare for professional practice in real estate',
      section: 'Professional Practice & Ethics', sectionKey: 'core',
      status: 'satisfactory', submitted: '06 Mar 2026', score: '14/15',
      desc: 'Understand the structure of the real estate industry, licensing and registration requirements, agency roles, professional standards and continuing professional development.',
      projectTask: 'Prepare a professional practice plan for your first 12 months as a sales associate. Include licensing and registration requirements, your CPD plan, supervision arrangements and a client-service philosophy. Upload the plan (PDF) and a copy of your current agent\'s representative registration (or application).',
      submittedFiles: [['professional-practice-plan.pdf', '1.2 MB'], ['registration-evidence.pdf', '480 KB']],
    },
    'cpprep4002': {
      code: 'CPPREP4002', title: 'Access and interpret ethical practice in real estate',
      section: 'Professional Practice & Ethics', sectionKey: 'core',
      status: 'satisfactory', submitted: '20 Mar 2026', score: '13/15',
      desc: 'Apply ethical frameworks, codes of conduct and fiduciary duties to common real estate scenarios, including conflicts of interest, confidentiality and fair dealing.',
      projectTask: 'Review the supplied scenario involving a potential conflict between a vendor and a related-party buyer. Identify the ethical issues, the relevant code of conduct clauses, and the actions you would take. Upload your written response (PDF).',
      submittedFiles: [['ethics-scenario-response.pdf', '860 KB']],
    },
    'cpprep4003': {
      code: 'CPPREP4003', title: 'Access and interpret legislation in real estate',
      section: 'Legislation & Trust Accounts', sectionKey: 'core',
      status: 'satisfactory', submitted: '03 Apr 2026', score: '14/15',
      desc: 'Locate and interpret the legislation that governs real estate practice in South Australia, including the Land Agents Act, Residential Tenancies Act, Australian Consumer Law and privacy obligations.',
      projectTask: 'Using the supplied residential sale scenario, identify the legislation that applies to the listing, contract, trust account and privacy obligations. Prepare a legislation map with section references and a short plain-English summary for the client.',
      submittedFiles: [['legislation-map.pdf', '1.1 MB'], ['client-summary.pdf', '320 KB']],
    },
    'cpprep4005': {
      code: 'CPPREP4005', title: 'Prepare to work with real estate trust accounts',
      section: 'Legislation & Trust Accounts', sectionKey: 'core',
      status: 'satisfactory', submitted: '01 May 2026', score: '15/15',
      desc: 'Identify trust money, understand the agency\'s obligations for receipting and banking, and prepare for reconciliation and audit requirements.',
      projectTask: 'Complete the trust account workbook for a simulated agency. Record receipts, deposits, withdrawals and reconciliations for one month, and identify two internal controls that prevent misappropriation.',
      submittedFiles: [['trust-account-workbook.xlsx', '540 KB'], ['internal-controls-report.pdf', '410 KB']],
    },
    'cpprep4004': {
      code: 'CPPREP4004', title: 'Establish marketing and communication profiles in real estate',
      section: 'Marketing & Communication', sectionKey: 'core',
      status: 'satisfactory', submitted: '17 Apr 2026', score: '13/15',
      desc: 'Build a professional brand and communication style for real estate practice, including digital profiles, client communication plans and compliant social media activity.',
      projectTask: 'Develop a personal marketing and communication profile for a real estate professional entering the Adelaide market. Include your value proposition, communication style, LinkedIn profile draft and a compliant social media plan.',
      submittedFiles: [['marketing-profile.pdf', '1.6 MB'], ['social-media-plan.pdf', '620 KB']],
    },
    'cpprep4101': {
      code: 'CPPREP4101', title: 'Appraise property for sale or lease',
      section: 'Appraisal & Marketing', sectionKey: 'sales',
      status: 'satisfactory', submitted: '22 May 2026', score: '14/15',
      desc: 'Inspect a property, analyse comparable sales and prepare an evidence-based appraisal for a vendor or landlord. Distinguish an appraisal from a formal valuation.',
      projectTask: 'Prepare a comparative market analysis for 18 Ashford Avenue, Unley. Use at least six comparable sales from the last six months, adjust for differences, and present a recommended price range with supporting evidence.',
      submittedFiles: [['cma-ashford-avenue.xlsx', '780 KB'], ['appraisal-report.pdf', '1.9 MB']],
    },
    'cpprep4102': {
      code: 'CPPREP4102', title: 'Market property',
      section: 'Appraisal & Marketing', sectionKey: 'sales',
      status: 'satisfactory', submitted: '12 Jun 2026', score: '13/15',
      desc: 'Develop and implement a marketing plan for a residential listing, including photography, copywriting, portal exposure, open homes and compliant price representations.',
      projectTask: 'Draft a marketing plan for the property in the supplied brief. Include photography, copy, portal spend, open-home schedule, social media, and compliance checks on the price guide.',
      submittedFiles: [['marketing-plan.pdf', '1.4 MB'], ['copy-and-price-guide.pdf', '560 KB']],
    },
    'cpprep4103': {
      code: 'CPPREP4103', title: 'Establish vendor relationships',
      section: 'Client Relationships', sectionKey: 'sales',
      status: 'satisfactory', submitted: '26 Jun 2026', score: '14/15',
      desc: 'Conduct a listing presentation, explain the agency agreement and fee structure, and establish clear expectations with a vendor before the property is marketed.',
      projectTask: 'Prepare a listing presentation and agency agreement for a vendor considering selling. Include your fee structure, marketing costs, authority period, the vendor\'s obligations and how you will report progress.',
      submittedFiles: [['listing-presentation.pdf', '3.1 MB'], ['agency-agreement-draft.pdf', '880 KB']],
    },
    'cpprep4104': {
      code: 'CPPREP4104', title: 'Establish buyer relationships',
      section: 'Client Relationships', sectionKey: 'sales',
      status: 'satisfactory', submitted: '17 Jul 2026', score: '13/15',
      desc: 'Qualify buyer needs, establish a professional buyer relationship and match buyers to suitable properties while managing expectations and confidentiality.',
      projectTask: 'Interview a simulated buyer (or use the supplied video) and complete a buyer needs analysis. Document their budget, finance position, preferred suburbs and decision timeline, and recommend three properties.',
      submittedFiles: [['buyer-needs-analysis.pdf', '720 KB'], ['property-shortlist.xlsx', '310 KB']],
    },
    'cpprep4105': {
      code: 'CPPREP4105', title: 'Sell property',
      section: 'Sale Process', sectionKey: 'sales',
      status: 'satisfactory', submitted: '07 Aug 2026', score: '14/15',
      desc: 'Negotiate an offer, explain the contract process and coordinate the sale through to settlement, including finance, building inspection and settlement deadlines.',
      projectTask: 'Negotiate the supplied sale scenario to agreement. Prepare a written offer summary, explain the contract process to the buyer and vendor, and complete the settlement checklist.',
      submittedFiles: [['offer-summary.pdf', '640 KB'], ['settlement-checklist.pdf', '390 KB']],
    },
    'cpprep4121': {
      code: 'CPPREP4121', title: 'Establish landlord relationships',
      section: 'Landlord & Tenant Relationships', sectionKey: 'management',
      status: 'satisfactory', submitted: '28 Aug 2026', score: '13/15',
      desc: 'Establish a property management agreement with a landlord, explain fees and obligations, and set expectations for communication, inspections and maintenance.',
      projectTask: 'Prepare a residential management agreement and landlord onboarding pack for a two-bedroom unit in Glenelg. Include fees, disclosure of any conflicts, inspection schedule and maintenance authority.',
      submittedFiles: [['management-agreement-glenelg.pdf', '1.2 MB'], ['landlord-onboarding-pack.pdf', '980 KB']],
    },
    'cpprep4122': {
      code: 'CPPREP4122', title: 'Manage tenant relationships',
      section: 'Landlord & Tenant Relationships', sectionKey: 'management',
      status: 'satisfactory', submitted: '18 Sep 2026', score: '14/15',
      desc: 'Onboard a tenant, communicate clearly about rights and obligations, and maintain a professional relationship throughout the tenancy.',
      projectTask: 'Create a tenant onboarding pack and communication plan for a new tenancy. Include the welcome letter, rent and bond details, maintenance request process, and emergency contacts.',
      submittedFiles: [['tenant-onboarding-pack.pdf', '1.1 MB'], ['communication-plan.pdf', '460 KB']],
    },
    'cpprep4123': {
      code: 'CPPREP4123', title: 'Manage tenancy',
      section: 'Tenancy Management', sectionKey: 'management',
      status: 'satisfactory', submitted: '09 Oct 2026', score: '13/15',
      desc: 'Manage an ongoing tenancy — inspections, maintenance, rent reviews, arrears and records — in line with the Residential Tenancies Act and the agency\'s procedures.',
      projectTask: 'Complete a routine inspection for the supplied property using the agency\'s inspection app. Record condition, photos, maintenance items and follow-up actions in a written report.',
      submittedFiles: [['routine-inspection-report.pdf', '2.3 MB'], ['maintenance-log.xlsx', '290 KB']],
    },
    'cpprep4124': {
      code: 'CPPREP4124', title: 'End tenancy',
      section: 'Tenancy Management', sectionKey: 'management',
      status: 'progress', lastSaved: '18 Oct 2026', due: '15 Dec 2026',
      desc: 'Manage the end of a residential tenancy — notices, vacating inspections, bond claims and finalisation — while meeting the Act\'s notice and record-keeping requirements.',
      projectTask: 'Process the end of a tenancy for the supplied case study. Prepare the vacating notice, final inspection report, bond claim documentation and a reconciliation of rent and utilities.',
      submittedFiles: [],
    },
    'cpprep4125': {
      code: 'CPPREP4125', title: 'Transact in trust accounts',
      section: 'Trust Account Transactions', sectionKey: 'management',
      status: 'locked', due: '02 Mar 2027',
      desc: 'Record trust account transactions for tenancies and sales, prepare reconciliations, lodge bonds and respond to audit requirements.',
      projectTask: 'Complete the trust account transactions for a tenancy ending and a new tenancy starting. Prepare receipts, ledger entries, bond lodgement and the monthly reconciliation.',
    },
    'cpprep4504': {
      code: 'CPPREP4504', title: 'Deliver presentations to clients in real estate',
      section: 'Professional Practice & Electives', sectionKey: 'professional',
      status: 'locked', due: '30 Jun 2027',
      desc: 'Plan and deliver clear, persuasive client presentations — listing appointments, buyer consultations and investment reviews — tailored to the audience.',
      projectTask: 'Record a 10-minute client presentation for a listing appointment. Explain your appraisal, marketing approach and fee structure. Upload the video (MP4, under 1 GB) and your slide deck.',
    },
    'cpprep4507': {
      code: 'CPPREP4507', title: 'Provide property sustainability information in real estate',
      section: 'Professional Practice & Electives', sectionKey: 'professional',
      status: 'locked', due: '31 Aug 2027',
      desc: 'Provide accurate sustainability information about residential property — energy ratings, insulation, glazing, solar and water — and explain its relevance to buyers and tenants.',
      projectTask: 'Prepare a sustainability information sheet for a residential listing. Cover the energy rating, insulation, glazing, solar, water and transport, with a source for each claim.',
    },
    'bsbtwk301': {
      code: 'BSBTWK301', title: 'Use inclusive work practices',
      section: 'Professional Practice & Electives', sectionKey: 'professional',
      status: 'locked', due: '29 Oct 2027',
      desc: 'Work inclusively with clients and colleagues, recognise barriers to participation and make reasonable adjustments in a real estate workplace.',
      projectTask: 'Review the supplied agency scenario and identify two barriers to inclusion for clients or colleagues. Prepare a short action plan showing the reasonable adjustments you would make.',
    },
  };

  // ---------- Renderer ----------

  function el(html) {
    const wrap = document.createElement('div');
    wrap.innerHTML = html.trim();
    return wrap.firstElementChild;
  }

  function statusBadge(status) {
    switch (status) {
      case 'satisfactory': return '<span class="badge badge-success">Satisfactory</span>';
      case 'progress': return '<span class="badge badge-progress">In Progress</span>';
      case 'new': return '<span class="badge badge-info">Not Started</span>';
      case 'locked': return '<span class="badge badge-muted">Not Started</span>';
      default: return '';
    }
  }

  function renderHero(unit) {
    const dueLabel = unit.status === 'satisfactory'
      ? `Submitted ${unit.submitted}${unit.score ? ' · Score ' + unit.score : ''}`
      : unit.status === 'progress'
      ? `In progress · Due ${unit.due}`
      : unit.status === 'locked'
      ? `Not started · Due ${unit.due}`
      : 'Not started';

    return `
      <div class="unit-hero">
        <div class="crumb">${unit.section}</div>
        <h1>${unit.code} — ${unit.title}</h1>
        <div class="unit-meta">
          <span>${statusBadge(unit.status)}</span>
          <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${dueLabel}</span>
          <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Trainer: Rachel Nguyen</span>
        </div>
        <p class="description">${unit.desc}</p>
      </div>`;
  }

  function renderQuestion(q, i, locked, showAnswers) {
    if (q.type === 'short') {
      const filled = showAnswers
        ? '<textarea readonly>This unit\'s reflection was completed and accepted by the assessor.</textarea>'
        : `<textarea ${locked ? 'disabled' : ''} placeholder="Type your answer..."></textarea>`;
      return `
        <div class="question-block">
          <div class="q-num">Question ${i + 1} · Short answer</div>
          <p class="q-text">${q.q}</p>
          ${filled}
        </div>`;
    }
    const opts = q.opts.map((opt, idx) => {
      const correctCls = showAnswers && idx === q.correct ? ' correct' : '';
      const checked = showAnswers && idx === q.correct ? 'checked' : '';
      return `
        <label class="q-option${correctCls}">
          <input type="radio" name="q${i}" ${checked} ${locked ? 'disabled' : ''} />
          <span>${opt}</span>
        </label>`;
    }).join('');
    return `
      <div class="question-block">
        <div class="q-num">Question ${i + 1} · Multiple choice</div>
        <p class="q-text">${q.q}</p>
        <div class="q-options">${opts}</div>
      </div>`;
  }

  function renderKnowledgeCard(unit) {
    const bank = QUESTION_BANKS[unit.sectionKey] || [];
    const isDone = unit.status === 'satisfactory';
    const locked = unit.status === 'locked';
    const showAnswers = isDone;
    const cta = locked
      ? '<button class="btn btn-secondary" disabled>Locked until previous unit is marked</button>'
      : isDone
      ? '<button class="btn btn-ghost">View submission</button>'
      : unit.status === 'progress'
      ? '<button class="btn btn-primary">Continue assessment</button>'
      : '<button class="btn btn-primary">Start assessment</button>';
    const footMeta = isDone
      ? `<div class="submitted-info">Submitted <strong>${unit.submitted}</strong>${unit.score ? ' · Score <strong>' + unit.score + '</strong>' : ''} · Marked by Rachel Nguyen</div>`
      : unit.status === 'progress'
      ? `<div class="submitted-info">In progress · last saved ${unit.lastSaved} · due <strong>${unit.due}</strong></div>`
      : `<div class="submitted-info">No submission yet · due <strong>${unit.due}</strong></div>`;
    const questionsHtml = bank.map((q, i) => renderQuestion(q, i, locked, showAnswers)).join('');
    return `
      <div class="assess-card">
        <div class="assess-card-head">
          <div class="left">
            <span class="a-icon knowledge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </span>
            <div>
              <h2>Knowledge Questions</h2>
              <p class="a-desc">${bank.length} questions — multiple choice and short answer. Open-book; allow ~45 minutes.</p>
            </div>
          </div>
          ${statusBadge(unit.status)}
        </div>
        <div class="assess-card-body">
          <div class="question-list-summary">
            <span><strong>${bank.length}</strong> questions · ~45 min · Pass mark <strong>70%</strong></span>
            <span>${isDone ? 'Submission viewable below' : 'Sample questions shown — full set unlocks when you start'}</span>
          </div>
          ${questionsHtml}
        </div>
        <div class="assess-card-foot">
          ${footMeta}
          ${cta}
        </div>
      </div>`;
  }

  function renderProjectCard(unit) {
    if (!unit.projectTask) return '';
    const isDone = unit.status === 'satisfactory' && unit.submittedFiles;
    const locked = unit.status === 'locked';
    const files = (unit.submittedFiles || []).map(([name, size]) => `
      <div class="uploaded-file">
        <span class="file-glyph"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>
        <div class="file-info"><div class="file-name">${name}</div><div class="file-size">${size}</div></div>
        <a href="#" class="file-action"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Download</a>
      </div>`).join('');
    const footMeta = isDone
      ? `<div class="submitted-info">Submitted <strong>${unit.submitted}</strong> · Marked by Rachel Nguyen</div>`
      : `<div class="submitted-info">Submit when you've completed the task · due <strong>${unit.due}</strong>. Files up to 1 GB; PDF, JPG, PNG, MP4 accepted.</div>`;
    const cta = locked
      ? '<button class="btn btn-secondary" disabled>Locked until previous unit is marked</button>'
      : isDone
      ? '<button class="btn btn-ghost">View submission</button>'
      : unit.status === 'progress'
      ? '<button class="btn btn-primary">Save and continue</button>'
      : '<button class="btn btn-primary" disabled>Submit for marking</button>';
    return `
      <div class="assess-card">
        <div class="assess-card-head">
          <div class="left">
            <span class="a-icon project">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>
            </span>
            <div>
              <h2>Project Task — file upload</h2>
              <p class="a-desc">${unit.projectTask}</p>
            </div>
          </div>
          ${statusBadge(unit.status)}
        </div>
        <div class="assess-card-body">
          ${isDone
            ? `<div class="uploaded-files">${files}</div>`
            : locked
            ? '<div class="question-list-summary"><span>Upload unlocks when this unit starts.</span></div>'
            : `
              <label class="upload-zone" id="upload-zone">
                <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.mp4,.docx,.xlsx,.zip" />
                <span class="upload-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                </span>
                <h4>Drag &amp; drop your submission files here</h4>
                <p>or click to choose from your device</p>
                <span class="file-types">PDF · JPG · PNG · MP4 · DOCX · XLSX · ZIP — up to 1 GB each</span>
              </label>
              <div class="uploaded-files" id="uploaded-list"></div>
            `}
        </div>
        <div class="assess-card-foot">
          ${footMeta}
          ${cta}
        </div>
      </div>`;
  }

  function renderCriteria(unit) {
    const criteriaBySection = {
      core: [
        'Apply the licensing, registration and professional-development requirements for real estate practice',
        'Interpret and apply the Land Agents Act, Residential Tenancies Act and Australian Consumer Law',
        'Identify trust money and apply the agency\'s trust account obligations',
        'Recognise ethical issues and manage conflicts of interest',
      ],
      sales: [
        'Prepare an evidence-based appraisal using comparable sales',
        'Develop a compliant marketing plan for a residential listing',
        'Establish and maintain professional vendor and buyer relationships',
        'Negotiate an offer and coordinate the sale through to settlement',
      ],
      management: [
        'Establish a management agreement and landlord relationship',
        'Onboard and communicate with tenants in line with the Act',
        'Manage inspections, maintenance, rent and tenancy records',
        'End a tenancy and finalise bond and trust account transactions',
      ],
      professional: [
        'Work inclusively and make reasonable adjustments for clients and colleagues',
        'Plan and deliver clear, persuasive client presentations',
        'Provide accurate, verifiable property sustainability information',
      ],
      intro: [
        'Understand the structure of the CPP41419 course and the self-paced model',
        'Locate course resources, your trainer and student support',
        'Demonstrate awareness of competency-based assessment',
      ],
    };
    const items = (criteriaBySection[unit.sectionKey] || []).map((c, i) => `
      <div class="criteria-item">
        <span class="num">${i + 1}.</span>
        <span>${c}</span>
      </div>`).join('');
    return `<div class="criteria-list">${items}</div>`;
  }

  function renderResources(unit) {
    return `
      <div class="criteria-list">
        <div class="criteria-item">
          <span class="num"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>
          <div style="flex:1">
            <strong>${unit.code} — Learner Guide</strong>
            <div style="font-size:12px;color:var(--ac-text-muted);margin-top:2px">PDF · the primary reading for this unit</div>
          </div>
          <a href="#" class="btn btn-ghost btn-sm">Open</a>
        </div>
        <div class="criteria-item">
          <span class="num"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></span>
          <div style="flex:1">
            <strong>Walkthrough Video</strong>
            <div style="font-size:12px;color:var(--ac-text-muted);margin-top:2px">~18 min · trainer commentary on the assessment task</div>
          </div>
          <a href="#" class="btn btn-ghost btn-sm">Watch</a>
        </div>
        <div class="criteria-item">
          <span class="num"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
          <div style="flex:1">
            <strong>Reference links</strong>
            <div style="font-size:12px;color:var(--ac-text-muted);margin-top:2px">Consumer and Business Services SA, AustLII, Australian Consumer Law, REISA</div>
          </div>
          <a href="#" class="btn btn-ghost btn-sm">Open</a>
        </div>
      </div>`;
  }

  function renderNotFound(id) {
    return `
      <div class="unit-hero">
        <h1>Unknown unit: ${id || '(none)'}</h1>
        <p class="description">We couldn't find a unit with this identifier. <a href="course.html">Back to the Learning Plan</a>.</p>
      </div>`;
  }

  // ---------- Wire file upload UX ----------
  function wireFileUpload() {
    const zone = document.getElementById('upload-zone');
    if (!zone) return;
    const input = zone.querySelector('input[type="file"]');
    const list = document.getElementById('uploaded-list');
    function add(file) {
      const sizeKB = file.size / 1024;
      const sizeText = sizeKB > 1024 ? (sizeKB / 1024).toFixed(1) + ' MB' : Math.round(sizeKB) + ' KB';
      const row = el(`
        <div class="uploaded-file">
          <span class="file-glyph"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>
          <div class="file-info"><div class="file-name">${file.name}</div><div class="file-size">${sizeText} · ready to submit</div></div>
          <span class="file-action"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Remove</span>
        </div>`);
      row.querySelector('.file-action').addEventListener('click', () => row.remove());
      list.appendChild(row);
      // Enable submit button
      const submit = document.querySelector('.assess-card .btn-primary');
      if (submit) submit.disabled = false;
    }
    input.addEventListener('change', e => {
      [...e.target.files].forEach(add);
    });
    ['dragenter', 'dragover'].forEach(evt => zone.addEventListener(evt, e => {
      e.preventDefault();
      zone.classList.add('dragover');
    }));
    ['dragleave', 'drop'].forEach(evt => zone.addEventListener(evt, e => {
      e.preventDefault();
      zone.classList.remove('dragover');
    }));
    zone.addEventListener('drop', e => {
      [...e.dataTransfer.files].forEach(add);
    });
  }

  // ---------- Wire tabs ----------
  function wireUnitTabs() {
    const tabs = document.querySelectorAll('.unit-tabs button');
    const panes = document.querySelectorAll('.unit-pane');
    tabs.forEach(t => t.addEventListener('click', () => {
      tabs.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      panes.forEach(p => p.style.display = 'none');
      t.classList.add('active');
      t.setAttribute('aria-selected', 'true');
      const id = t.dataset.tab;
      const pane = document.getElementById('pane-' + id);
      if (pane) pane.style.display = '';
    }));
  }

  // ---------- Main ----------
  function init() {
    const id = new URLSearchParams(location.search).get('u');
    const unit = UNITS[id];
    const root = document.getElementById('unit-root');
    if (!root) return;

    if (!unit) {
      root.innerHTML = renderNotFound(id);
      return;
    }

    // Update page title
    document.title = `${unit.code} — ${unit.title} — Alliance College`;
    const titleCrumb = document.getElementById('crumb-unit');
    if (titleCrumb) titleCrumb.textContent = `${unit.code}`;

    root.innerHTML = `
      ${renderHero(unit)}
      <div class="tabs unit-tabs" role="tablist">
        <button class="active" type="button" role="tab" data-tab="assess" aria-selected="true">Assessments</button>
        <button type="button" role="tab" data-tab="criteria" aria-selected="false">Performance Criteria</button>
        <button type="button" role="tab" data-tab="resources" aria-selected="false">Resources</button>
      </div>
      <div class="unit-pane" id="pane-assess">
        ${renderKnowledgeCard(unit)}
        ${renderProjectCard(unit)}
      </div>
      <div class="unit-pane" id="pane-criteria" style="display:none">
        ${renderCriteria(unit)}
      </div>
      <div class="unit-pane" id="pane-resources" style="display:none">
        ${renderResources(unit)}
      </div>
    `;

    wireFileUpload();
    wireUnitTabs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
