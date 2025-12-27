export function isDuplicateInvoice(current: any, previous: any[]) {
  return previous.some((inv) => {
    const sameVendor = inv.vendor === current.vendor;
    const sameNumber =
      inv.fields.invoiceNumber === current.fields.invoiceNumber;

    const dateDiff =
      Math.abs(
        new Date(inv.fields.invoiceDate).getTime() -
        new Date(current.fields.invoiceDate).getTime()
      ) / (1000 * 60 * 60 * 24);

    return sameVendor && sameNumber && dateDiff <= 2;
  });
}
