import test from 'node:test';
import assert from 'node:assert/strict';
import { subtotal, formatPrice } from './cart.js';

test('subtotal sums price times quantity', () => {
  assert.equal(subtotal([{ price: 250, quantity: 2 }, { price: 100, quantity: 1 }]), 600);
});

test('formatPrice renders dollars', () => {
  assert.equal(formatPrice(1999), '$19.99');
});

import { applyDiscount } from './cart.js';

test('applyDiscount ignores unknown codes', () => {
  assert.equal(applyDiscount(1000, 'BOGUS'), 1000);
});

test('applyDiscount is case-insensitive', () => {
  assert.equal(applyDiscount(1000, 'save10'), 900);
});
