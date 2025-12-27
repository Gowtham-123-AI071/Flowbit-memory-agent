import sqlite3 from "sqlite3";
export const db = new sqlite3.Database("memory.db");
export function initDB() {
    db.serialize(() => {
        db.run(`
      CREATE TABLE IF NOT EXISTS vendor_memory (
        vendor TEXT,
        pattern TEXT,
        field TEXT,
        confidence REAL,
        success INTEGER,
        failure INTEGER
      )
    `);
    });
}
//# sourceMappingURL=db.js.map