export function audit(step, details) {
    return {
        step,
        timestamp: new Date().toISOString(),
        details
    };
}
//# sourceMappingURL=audit.js.map