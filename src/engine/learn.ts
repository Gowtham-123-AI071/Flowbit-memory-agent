import { addVendorMemory } from "../memory/vendorMemory.js";

export function learnFromHuman(correction: any) {
  for (const c of correction.corrections ?? []) {
    if (c.reason.includes("Leistungsdatum")) {
      addVendorMemory(correction.vendor, "Leistungsdatum", "serviceDate");
    }
    if (c.reason.includes("VAT")) {
      addVendorMemory(correction.vendor, "VAT", "taxTotal");
    }
    if (c.reason.includes("Currency")) {
      addVendorMemory(correction.vendor, "Currency", "currency");
    }
    if (c.reason.includes("Skonto")) {
      addVendorMemory(correction.vendor, "Skonto", "discountTerms");
    }
    if (c.reason.includes("Seefracht") || c.reason.includes("Shipping")) {
      addVendorMemory(correction.vendor, "Seefracht", "lineItems[0].sku");
    }
  }
}
