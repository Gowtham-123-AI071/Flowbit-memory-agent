export function applyMemory(invoice: any, memories: any[]) {
  const fixes: string[] = [];

  for (const m of memories) {
    if (invoice.rawText.includes(m.pattern)) {
      if (m.field === "serviceDate") {
        const date = invoice.rawText.match(/\d{2}\.\d{2}\.\d{4}/)?.[0];
        invoice.fields.serviceDate = date;
        fixes.push(`Filled serviceDate from ${m.pattern}`);
      }

      if (m.pattern.includes("VAT")) {
        const gross = invoice.fields.grossTotal;
        const rate = invoice.fields.taxRate;
        invoice.fields.taxTotal = +(gross - gross / (1 + rate)).toFixed(2);
        fixes.push("Recomputed taxTotal (VAT already included)");
      }
    }
  }

  if (!invoice.fields.currency && invoice.rawText.includes("EUR")) {
    invoice.fields.currency = "EUR";
    fixes.push("Recovered missing currency from rawText");
  }

  return fixes;
}
