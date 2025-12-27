import { db } from "./db.js";
export function initResolutionMemory() {
    db.run(`
    CREATE TABLE IF NOT EXISTS resolution_memory (
      invoiceId TEXT,
      vendor TEXT,
      decision TEXT,
      timestamp TEXT
    )
  `);
}
export function storeResolution(invoiceId, vendor, decision) {
    db.run(`INSERT INTO resolution_memory VALUES (?, ?, ?, datetime('now'))`, [invoiceId, vendor, decision]);
}
//# sourceMappingURL=resolutionMemory.js.map