// TODO: per-region rates
export function salesTax(cents, rate = 0.0825) {
  return Math.round(cents * rate);
}
