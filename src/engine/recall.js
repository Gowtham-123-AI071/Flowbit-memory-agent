import { getVendorMemory } from "../memory/vendorMemory.js";
export async function recallMemory(invoice) {
    return getVendorMemory(invoice.vendor);
}
//# sourceMappingURL=recall.js.map