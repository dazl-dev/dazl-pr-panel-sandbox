export function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function formatPrice(cents) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(cents / 100);
}
