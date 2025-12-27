export function decideAction(confidence: number) {
  return confidence >= 0.85
    ? { review: false }
    : { review: true };
}
