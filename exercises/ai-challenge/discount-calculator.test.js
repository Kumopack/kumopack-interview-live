import { describe, test, expect } from 'vitest';
import { applyDiscounts } from './discount-calculator.js';

describe('applyDiscounts', () => {

  test('should calculate total without any discounts', () => {
    const order = {
      items: [{ price: 100, qty: 1 }],
      coupon: null,
      memberTier: null
    };
    
    expect(applyDiscounts(order)).toBe(100);
  });

  test('should apply coupon discount only', () => {
    const order = {
      items: [{ price: 100, qty: 1 }],
      coupon: { percent: 0.2 },  // 20% off
      memberTier: null
    };
    
    expect(applyDiscounts(order)).toBe(80);
  });

  test('should apply member discount only', () => {
    const order = {
      items: [{ price: 100, qty: 1 }],
      coupon: null,
      memberTier: 'gold'  // 15% off
    };
    
    expect(applyDiscounts(order)).toBe(85);
  });

  test('should apply discounts sequentially (coupon first, then member)', () => {
    const order = {
      items: [{ price: 100, qty: 1 }],
      coupon: { percent: 0.2 },   // 20% off = 80
      memberTier: 'gold'           // 15% off remaining = 68
    };
    
    // Correct: 100 - 20 = 80, then 80 - 12 = 68
    // Wrong (parallel): 100 - 20 - 15 = 65
    expect(applyDiscounts(order)).toBe(68);
  });

  test('should not allow total to go negative', () => {
    const order = {
      items: [{ price: 100, qty: 1 }],
      coupon: { percent: 0.5 },   // 50% off
      memberTier: 'gold'           // 15% off
    };
    
    expect(applyDiscounts(order)).toBeGreaterThanOrEqual(0);
  });

  test('should handle unknown member tier (no discount)', () => {
    const order = {
      items: [{ price: 100, qty: 1 }],
      coupon: null,
      memberTier: 'platinum'  // Not in discount table
    };
    
    expect(applyDiscounts(order)).toBe(100);
  });

  test('should handle multiple items', () => {
    const order = {
      items: [
        { price: 50, qty: 2 },   // 100
        { price: 30, qty: 1 }    // 30
      ],
      coupon: { percent: 0.1 },  // 10% off = 117
      memberTier: 'silver'        // 10% off remaining = 105.30
    };
    
    expect(applyDiscounts(order)).toBeCloseTo(105.30, 2);
  });

});
