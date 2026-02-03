import { describe, test, expect } from 'vitest';
import { calculateOrderTotal } from './order-calculator.js';

describe('calculateOrderTotal', () => {
  
  test('should calculate correct total for basic order (no discount)', () => {
    const order = {
      items: [{ price: 100, quantity: 2 }],
      discount: null,
      totalQuantity: 2
    };
    // 200 + 7% tax = 214
    expect(calculateOrderTotal(order)).toBe(214);
  });

  test('should handle multiple items correctly', () => {
    const order = {
      items: [
        { price: 50, quantity: 2 },   // 100
        { price: 30, quantity: 3 }    // 90
      ],
      discount: null,
      totalQuantity: 5
    };
    // 190 + 7% tax = 203.30
    expect(calculateOrderTotal(order)).toBeCloseTo(203.30, 2);
  });

  test('should apply percentage discount correctly', () => {
    const order = {
      items: [{ price: 100, quantity: 1 }],
      discount: { percentage: 0.1 },  // 10% discount
      totalQuantity: 1
    };
    // 100 + 7 tax - 10 discount = 97
    expect(calculateOrderTotal(order)).toBe(97);
  });

  test('should apply tier discount for quantity >= 100', () => {
    const order = {
      items: [{ price: 10, quantity: 100 }],
      discount: null,
      totalQuantity: 100
    };
    // 1000 + 70 tax - 50 (5% tier) = 1020
    expect(calculateOrderTotal(order)).toBe(1020);
  });

  test('should apply tier discount for quantity >= 50 but < 100', () => {
    const order = {
      items: [{ price: 10, quantity: 50 }],
      discount: null,
      totalQuantity: 50
    };
    // 500 + 35 tax - 15 (3% tier) = 520
    expect(calculateOrderTotal(order)).toBe(520);
  });

  test('should handle floating point precision correctly', () => {
    const order = {
      items: [{ price: 33.33, quantity: 3 }],
      discount: null,
      totalQuantity: 3
    };
    // 99.99 + 7% = 106.99 (should not have long decimals)
    const result = calculateOrderTotal(order);
    expect(Number(result.toFixed(2))).toBe(result);
  });

});
