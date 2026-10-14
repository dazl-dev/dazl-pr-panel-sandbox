export function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function formatPrice(cents) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}

export function applyDiscount(cents, code) {
  const rates = { SAVE10: 0.1, SAVE25: 0.25 };
  const rate = rates[code] ?? 0;
  return Math.round(cents * (1 - rate));
}
