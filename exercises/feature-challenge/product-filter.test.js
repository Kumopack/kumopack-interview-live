import { describe, test, expect } from 'vitest';
import { filterProducts, products } from './product-filter.js';

describe('filterProducts', () => {

  test('should return all products when no filters applied', () => {
    const result = filterProducts(products, {});
    expect(result).toEqual(products);
  });

  test('should return all products when all filter arrays are empty', () => {
    const result = filterProducts(products, { color: [], size: [], material: [] });
    expect(result).toEqual(products);
  });

  test('should filter by single color', () => {
    const result = filterProducts(products, { color: ['red'] });
    
    expect(result.length).toBe(2);
    expect(result.every(p => p.variants.color.includes('red'))).toBe(true);
  });

  test('should apply OR logic within category (color: red OR blue)', () => {
    const result = filterProducts(products, { color: ['red', 'blue'] });
    
    expect(result.length).toBe(3);
    result.forEach(p => {
      const hasRed = p.variants.color.includes('red');
      const hasBlue = p.variants.color.includes('blue');
      expect(hasRed || hasBlue).toBe(true);
    });
  });

  test('should apply AND logic across categories (color AND size)', () => {
    const result = filterProducts(products, { 
      color: ['red'], 
      size: ['L'] 
    });
    
    // Only P001 and P003 have red AND L
    expect(result.length).toBe(2);
    result.forEach(p => {
      expect(p.variants.color.includes('red')).toBe(true);
      expect(p.variants.size.includes('L')).toBe(true);
    });
  });

  test('should handle complex filter (color OR + size + material)', () => {
    const result = filterProducts(products, {
      color: ['red', 'green'],
      size: ['L', 'XL'],
      material: ['paper']
    });
    
    // P003 has (red OR green) AND (L OR XL) AND paper
    expect(result.length).toBe(2);
  });

  test('should return empty array when no products match', () => {
    const result = filterProducts(products, { 
      color: ['purple'] 
    });
    
    expect(result).toEqual([]);
  });

  test('should handle empty products array', () => {
    const result = filterProducts([], { color: ['red'] });
    expect(result).toEqual([]);
  });

});
