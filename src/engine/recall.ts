import { getVendorMemory } from "../memory/vendorMemory.js";

export async function recallMemory(invoice: any) {
  return getVendorMemory(invoice.vendor);
}
