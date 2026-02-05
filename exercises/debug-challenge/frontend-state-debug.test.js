import { describe, test, expect } from 'vitest';
import { toggleFilter } from './frontend-state-debug.js';

describe('toggleFilter (Frontend Debug)', () => {
  
  test('should add new filter value when not present', () => {
    const initialState = { color: [], size: [] };
    const result = toggleFilter(initialState, 'color', 'red');
    
    expect(result.color).toContain('red');
    expect(result.color.length).toBe(1);
  });

  test('should remove filter value when already present', () => {
    const initialState = { color: ['red', 'blue'], size: [] };
    const result = toggleFilter(initialState, 'color', 'red');
    
    expect(result.color).not.toContain('red');
    expect(result.color).toContain('blue');
    expect(result.color.length).toBe(1);
  });

  test('should maintain Immutability (return a new object reference)', () => {
    const initialState = { color: ['red'] };
    const result = toggleFilter(initialState, 'color', 'blue');
    
    // Check reference
    expect(result).not.toBe(initialState);
    // Check nested reference (if applicable)
    expect(result.color).not.toBe(initialState.color);
  });

  test('should handle adding filter to new category', () => {
    const initialState = {};
    const result = toggleFilter(initialState, 'material', 'paper');
    
    expect(result.material).toEqual(['paper']);
  });

});
