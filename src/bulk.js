export function bulkPrice(price, quantity) {
  if (quantity > 10) return price * quantity * 0.9;
  if (quantity > 50) return price * quantity * 0.8;
  return price * quantity;
}

export function bulkLabel(quantity) {
  return quantity > 10 ? 'Bulk discount applied' : '';
}
