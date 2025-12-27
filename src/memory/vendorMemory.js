import { db } from "./db.js";
export function addVendorMemory(vendor, pattern, field) {
    db.run(`INSERT INTO vendor_memory VALUES (?, ?, ?, 0.7, 1, 0)`, [vendor, pattern, field]);
}
export function getVendorMemory(vendor) {
    return new Promise((resolve) => {
        db.all(`SELECT * FROM vendor_memory WHERE vendor=? AND confidence>=0.6`, [vendor], (_err, rows) => resolve(rows));
    });
}
//# sourceMappingURL=vendorMemory.js.map