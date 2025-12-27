export function audit(step: any, details: string) {
  return {
    step,
    timestamp: new Date().toISOString(),
    details
  };
}
