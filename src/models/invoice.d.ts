export interface LineItem {
    sku?: string | null;
    description?: string;
    qty: number;
    unitPrice: number;
}
export interface Invoice {
    invoiceId: string;
    vendor: string;
    fields: {
        invoiceNumber: string;
        invoiceDate: string;
        serviceDate?: string | null;
        currency?: string | null;
        poNumber?: string | null;
        netTotal: number;
        taxRate: number;
        taxTotal: number;
        grossTotal: number;
        lineItems: LineItem[];
    };
    rawText: string;
    confidence: number;
}
//# sourceMappingURL=invoice.d.ts.map