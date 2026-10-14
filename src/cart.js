export function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function formatPrice(cents) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}
