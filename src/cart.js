export function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}
