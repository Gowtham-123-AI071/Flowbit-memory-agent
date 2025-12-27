export function decideAction(confidence) {
    return confidence >= 0.85
        ? { review: false }
        : { review: true };
}
//# sourceMappingURL=decide.js.map