/**
 * Product naming (locked):
 * - Classic = V2
 * - Legacy = older UI of V3
 * - Evo = newer UI of V3
 */

export const games = {
  classic: {
    id: "classic",
    code: "V2",
    title: "Classic Circuit",
    tagline: "For V3 Support staff — can you work a Classic (V2) ticket?",
    audience: "V3 Support → Classic (V2)",
    accent: "classic",
    questions: [
      {
        id: "c1",
        category: "Product ID",
        ui: null,
        scenario:
          "A screenshot shows an older CoreBridge layout. The company field says nothing useful. A teammate labels the ticket “Legacy.”",
        question: "Which statement is correct?",
        choices: [
          "Classic, Legacy, and Evo are three names for the same UI",
          "Classic is V2; Legacy is the older V3 UI; Evo is the newer V3 UI",
          "Legacy is V2; Classic and Evo are both V3",
          "Evo is V2; Classic is the new V3 UI",
        ],
        correct: 1,
        explain:
          "Classic = V2. V3 has two UIs: Legacy (older) and Evo (newer). Mislabeling Classic as Legacy sends people down the wrong KB and test system.",
        tip: "When unsure, use the screenshot/URL first — not the queue name alone.",
      },
      {
        id: "c2",
        category: "Routing",
        ui: null,
        scenario:
          "Ticket comes into v3 Support. Customer mentions “we’re still on Classic” and pastes a Classic-era URL.",
        question: "Best first move?",
        choices: [
          "Answer with Evo Settings paths — Classic maps 1:1 to Evo",
          "Confirm Classic (V2), use Classic-appropriate guidance, and don’t send them to evo.corebridge.net workflows",
          "Tell them Classic is unsupported and close the ticket",
          "Convert the ticket Type to Feature Request automatically",
        ],
        correct: 1,
        explain:
          "Classic is a different product generation than V3 Legacy/Evo. Match the product before teaching clicks, and avoid Evo-only navigation.",
        tip: "Ask for a URL or screenshot if “Classic” might mean “old looking Legacy.”",
      },
      {
        id: "c3",
        category: "Migration",
        ui: null,
        scenario:
          "Company custom field shows “Transitional Classic to Legacy.” Customer UI in the attachment looks like Legacy V3.",
        question: "How should you treat product family for troubleshooting?",
        choices: [
          "Always treat transitional as Classic until go-live email arrives",
          "Treat as Legacy V3 when the UI/evidence is Legacy (unless evidence clearly shows Classic or Evo)",
          "Always treat transitional as Evo",
          "Ignore the field and use whichever KB article ranks first",
        ],
        correct: 1,
        explain:
          "“Transitional Classic to Legacy” generally points to the Legacy V3 path unless attachment/customer text clearly shows Classic or Evo.",
        tip: "Evidence priority: screenshot/UI → customer text → company version field.",
      },
      {
        id: "c4",
        category: "Expectations",
        ui: null,
        scenario:
          "Classic customer asks for an Evo-only capability (e.g. Quick Price / Evo Settings → Approval Process).",
        question: "Correct support posture?",
        choices: [
          "Give them the Evo click-path and hope the menus appear",
          "Explain the feature is Evo (V3 new UI), confirm they’re on Classic, and set expectations / migration options without inventing Classic steps",
          "File it as a Classic defect because the button is missing",
          "Tell them to toggle “Evo mode” under Classic Global Settings",
        ],
        correct: 1,
        explain:
          "Don’t force Evo workflows onto Classic. Name the product correctly, then either Classic workarounds or migration/Evo adoption framing.",
        tip: "CoreBridge encourages Evo adoption — mention benefit when it truly closes a Classic gap, without being pushy.",
      },
      {
        id: "c5",
        category: "Language",
        ui: null,
        scenario:
          "Internal note: “V2 customer can’t change payment terms on the order.” Another agent replies with the Legacy clear/reselect customer steps.",
        question: "What’s the terminology issue?",
        choices: [
          "Nothing — V2 and Legacy are interchangeable",
          "V2 means Classic; Legacy steps are for Legacy V3 UI and may not apply to Classic",
          "V2 always means Evo in Freshdesk",
          "Payment terms never exist outside Evo",
        ],
        correct: 1,
        explain:
          "Saying “V2” means Classic. Pasting Legacy V3 procedures onto a Classic ticket is a common cross-training miss.",
        tip: "Say Classic / Legacy / Evo out loud in replies and notes — avoid ambiguous “V2/V3 UI” shorthand.",
      },
      {
        id: "c6",
        category: "KB Hygiene",
        ui: null,
        scenario:
          "You’re about to send a KB link from “New CoreBridge EVO Interface” to a Classic shop.",
        question: "What should you do?",
        choices: [
          "Send it — screenshots are close enough",
          "Don’t cite Evo KB for Classic; find Classic-appropriate guidance or explain the mismatch",
          "Send Evo KB plus Legacy KB and let them pick",
          "Only send Confluence internal pages to customers",
        ],
        correct: 1,
        explain:
          "KB must match the product the customer is on. Evo articles can actively mis-train Classic users.",
        tip: "Same rule in reverse: don’t send Classic-only steps into an Evo ticket.",
      },
      {
        id: "c7",
        category: "Test Systems",
        ui: null,
        scenario:
          "You’re reproducing a Classic customer issue in the lab and almost log into Evo “to compare.”",
        question: "Correct practice?",
        choices: [
          "Compare freely across Classic / Legacy / Evo to find any working path",
          "Stay on the matching product family; don’t hop UIs to “see if it works elsewhere”",
          "Always reproduce Classic bugs in Evo because it’s newer",
          "Only Classic issues can be reproduced; V3 issues cannot",
        ],
        correct: 1,
        explain:
          "Lock product family for the whole repro. Cross-UI comparison creates false conclusions and bad customer guidance.",
        tip: "If the product family is unclear, stop and clarify before clicking.",
      },
      {
        id: "c8",
        category: "Ambiguity",
        ui: null,
        scenario:
          "Customer says: “We’re on the old CoreBridge.” No screenshot yet.",
        question: "Best clarifying question?",
        choices: [
          "“Are you on Classic (V2), Legacy (older V3 UI), or Evo (newer V3 UI)?” — and ask for a URL/screenshot",
          "“Old” always means Classic — proceed with Classic steps",
          "“Old” always means Legacy — proceed with Management → Global Settings",
          "Ask only whether they pay annually or monthly",
        ],
        correct: 0,
        explain:
          "Customers say “old” for both Classic and Legacy. Disambiguate with Classic vs Legacy vs Evo plus URL/screenshot.",
        tip: "One clarifying question beats three wrong articles.",
      },
      {
        id: "c9",
        category: "Handoffs",
        ui: null,
        scenario:
          "V2 Support asks V3 Support to “just take this Classic payment issue” with no product confirmation in the thread.",
        question: "What should the receiving agent verify first?",
        choices: [
          "That Freshdesk Type is set — product family doesn’t matter",
          "That it truly is Classic (V2), not Legacy/Evo mislabeled as V2",
          "That the customer has already upgraded to Evo",
          "That Bugbot has reviewed the ticket",
        ],
        correct: 1,
        explain:
          "Queue names and “V2” slang get overloaded. Confirm Classic vs Legacy vs Evo before owning the technical answer.",
        tip: "Check company software version + attachment UI before rewriting the reply.",
      },
      {
        id: "c10",
        category: "Customer Reply",
        ui: null,
        scenario:
          "You’re writing a customer-facing reply for a confirmed Classic shop that wants a V3/Evo-only reporting view.",
        question: "Best reply shape?",
        choices: [
          "Pretend the feature exists in Classic and send Evo screenshots",
          "Confirm they’re on Classic, explain the capability lives on V3/Evo, and outline practical next steps (workaround and/or talking to their CSM about V3/Evo)",
          "Only say “please upgrade” with no product names",
          "Close as Solved — Not Reproducible",
        ],
        correct: 1,
        explain:
          "Be accurate and helpful: name Classic vs V3/Evo, give any Classic-safe workaround, and offer a clean path forward without shame.",
        tip: "Tone: expert partner, not “your software is ancient.”",
      },
    ],
  },
  v3: {
    id: "v3",
    code: "V3",
    title: "V3 Gauntlet",
    tagline: "For V2 Support staff — Legacy UI and Evo UI on V3",
    audience: "V2 Support → V3 (Legacy + Evo)",
    accent: "v3",
    questions: [
      {
        id: "v1",
        category: "Payment Terms",
        ui: "Legacy",
        scenario:
          "Legacy V3 customer: “I need Net 30 on this estimate, not Due on Receipt.” The estimate is already open.",
        question: "Correct Legacy approach?",
        choices: [
          "Change Payment Terms directly on the estimate under Order Details",
          "Update Payment Terms on the customer (Companies → Accounting Details), then clear and re-select the customer on the estimate",
          "Void and recreate — terms only apply at creation",
          "Terms can only change after invoicing",
        ],
        correct: 1,
        explain:
          "On Legacy V3, terms aren’t edited directly on the estimate/order. Update the customer, then clear/re-select so Accounting Details refresh.",
        tip: "Clarify “change terms” vs “collect payment.”",
      },
      {
        id: "v2",
        category: "Payment Terms",
        ui: "Evo",
        scenario:
          "Evo customer: “Change this order from Due on Receipt to Net 30.”",
        question: "Correct Evo approach?",
        choices: [
          "Only the Legacy clear/reselect customer workaround works",
          "Change Payment Terms directly on the order under Order Details",
          "Terms lock after the first line item",
          "Create a credit memo for the due-date difference",
        ],
        correct: 1,
        explain:
          "Evo allows Payment Terms changes on the Estimate/Order itself. The Legacy customer clear/reselect path is not required.",
        tip: "Same English request, different UI — always confirm Legacy vs Evo first.",
      },
      {
        id: "v3q",
        category: "Sales Tax",
        ui: "Legacy",
        scenario:
          "Admin updated a tax rate in Legacy. Open estimates still show the old tax amount.",
        question: "Why, and how do you fix one estimate?",
        choices: [
          "Tax updates are overnight only",
          "Open estimates don’t auto-recalc; clear and re-select the same tax group (or customer) on each estimate",
          "Run Management → Recalculate All Tax",
          "Only invoices recalculate",
        ],
        correct: 1,
        explain:
          "Tax is calculated when applied. Updating a tax item/group doesn’t refresh already-open estimates. No bulk recalc — fix each one.",
        tip: "Set expectations: every open estimate needs a manual refresh.",
      },
      {
        id: "v4",
        category: "New Order",
        ui: "Evo",
        scenario:
          "Agent bookmarks `/sales/orders/new`. Customers report incomplete orders.",
        question: "What’s wrong?",
        choices: [
          "That deep link skips the customer wizard — use the grid New Order button (or company Estimates & Orders → +)",
          "Browser cache — hard refresh always fixes it",
          "New Order requires RFQ license",
          "Only admins can create orders",
        ],
        correct: 0,
        explain:
          "Evo’s `/sales/orders/new` deep link isn’t the supported New Order path and skips the customer wizard.",
        tip: "Train the button, not the raw URL.",
      },
      {
        id: "v5",
        category: "Proofs",
        ui: "Legacy",
        scenario:
          "Estimate converted to an order; proofs/approvals from the estimate didn’t carry over.",
        question: "Most likely cause?",
        choices: [
          "Proofs never carry in Legacy",
          "Copy Approvals is off under Estimate & Order options / cloning defaults",
          "They used a guest link",
          "Proofs attach only after the first invoice",
        ],
        correct: 1,
        explain:
          "Copy Approvals controls whether proofs carry on convert. Enabling it applies going forward — it won’t retrofix old orders.",
        tip: "Ask if this is new behavior or always happened.",
      },
      {
        id: "v6",
        category: "Proofs",
        ui: "Evo",
        scenario:
          "Customer never saw a proof. Staff “built” it in Evo.",
        question: "Most likely miss?",
        choices: [
          "Proofs require a hard-copy print first",
          "A draft is invisible until posted; approvals are per line item (portal or anonymous link)",
          "Proofs only exist on invoices",
          "Copy Approvals (Legacy setting) is required in Evo",
        ],
        correct: 1,
        explain:
          "Building ≠ posting. Customers see posted proofs via Customer Portal or anonymous link.",
        tip: "Ask: posted? which line? portal or anonymous link?",
      },
      {
        id: "v7",
        category: "Navigation",
        ui: "Legacy",
        scenario:
          "V2 agent starts telling a Legacy shop to use the Evo Settings gear for email templates / estimate options.",
        question: "Where should you send them in Legacy?",
        choices: [
          "Settings gear top-right (same as Evo)",
          "Management module → Global Settings / related Management areas",
          "Sales → Customers → System",
          "Accounting → Preferences only",
        ],
        correct: 1,
        explain:
          "Legacy configuration lives under Management. Evo Settings paths don’t map 1:1.",
        tip: "If lost, ask which left-nav modules they see.",
      },
      {
        id: "v8",
        category: "Settings Map",
        ui: "Evo",
        scenario:
          "Need Approval Process config for an Evo shop.",
        question: "Correct Evo path?",
        choices: [
          "Management → Global Settings",
          "Settings → Customer Portal → Approval Process",
          "Accounting → Payment Terms → Approvals",
          "Sales → Estimates → Global",
        ],
        correct: 1,
        explain:
          "Evo approval process lives under Settings → Customer Portal → Approval Process.",
        tip: "Prefer Evo Settings search over inventing Legacy-shaped paths.",
      },
      {
        id: "v9",
        category: "Customers",
        ui: "Evo",
        scenario:
          "Shop asks why a company shows as Prospect instead of Client in Evo.",
        question: "What does that mean?",
        choices: [
          "Prospect = inactive; Client = active",
          "Lead = no estimate/order yet; Prospect = estimate created; Client = order created",
          "Prospect means missing billing contact",
          "Lifecycle only applies to personal accounts",
        ],
        correct: 1,
        explain:
          "Evo’s Lead → Prospect → Client progression is separate from Active/Inactive.",
        tip: "Don’t “activate” them when they actually need an order created.",
      },
      {
        id: "v10",
        category: "Quick Price",
        ui: "Evo",
        scenario:
          "Front counter needs a fast price for a walk-in not in the system yet.",
        question: "Best Evo tool?",
        choices: [
          "Create a fake Walk-In company every time",
          "Use Quick Price — no customer required until Convert",
          "Only formal estimates allow pricing without a customer",
          "Use RFQ and award to the walk-in",
        ],
        correct: 1,
        explain:
          "Quick Price is for unknown/walk-in pricing. Customer is chosen on convert; need at least one line item.",
        tip: "Leaving Quick Price discards the draft — warn before navigating away.",
      },
    ],
  },
};
