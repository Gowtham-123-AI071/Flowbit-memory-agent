import invoices from "../../data/invoices_extracted.json" with { type: "json" };
import corrections from "../../data/human_corrections.json" with { type: "json" };
import { initDB } from "../memory/db.js";
import { recallMemory } from "../engine/recall.js";
import { applyMemory } from "../engine/apply.js";
import { decideAction } from "../engine/decide.js";
import { learnFromHuman } from "../engine/learn.js";
import { storeResolution, initResolutionMemory } from "../memory/resolutionMemory.js";
import { audit } from "../utils/audit.js";
const invoiceList = invoices;
const correctionList = corrections;
initDB();
initResolutionMemory();
async function run(invoice) {
    const auditTrail = [];
    const memories = await recallMemory(invoice);
    auditTrail.push(audit("recall", `Loaded ${memories.length} memories`));
    const fixes = applyMemory(invoice, memories);
    auditTrail.push(audit("apply", fixes.join("; ")));
    const decision = decideAction(invoice.confidence);
    auditTrail.push(audit("decide", JSON.stringify(decision)));
    console.log({
        invoiceId: invoice.invoiceId,
        normalizedInvoice: invoice.fields,
        proposedCorrections: fixes,
        requiresHumanReview: decision.review,
        confidenceScore: invoice.confidence,
        auditTrail
    });
}
await run(invoiceList[0]);
learnFromHuman(correctionList[0]);
storeResolution(correctionList[0].invoiceId, correctionList[0].vendor, correctionList[0].finalDecision);
await run(invoiceList[1]);
//# sourceMappingURL=demo.js.map