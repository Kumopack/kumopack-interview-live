import { describe, test, expect } from 'vitest';
import { highlightText } from './frontend-ai-highlight.js';

describe('highlightText (Frontend AI Challenge)', () => {
  
  test('should highlight simple keyword match', () => {
    const result = highlightText('Custom Box A', 'Box');
    expect(result).toBe('Custom <strong>Box</strong> A');
  });

  test('should be case-insensitive', () => {
    const result = highlightText('Premium Box', 'box');
    expect(result).toBe('Premium <strong>Box</strong>');
  });

  test('should highlight all occurrences (global match)', () => {
    const result = highlightText('Box and Box', 'Box');
    expect(result).toBe('<strong>Box</strong> and <strong>Box</strong>');
  });

  test('should handle Thai language correctly', () => {
    const result = highlightText('กล่องกระดาษพรีเมียม', 'กล่อง');
    expect(result).toBe('<strong>กล่อง</strong>กระดาษพรีเมียม');
  });

  test('should handle special characters (Regex safety)', () => {
    const result = highlightText('Price is $100', '$100');
    expect(result).toBe('Price is <strong>$100</strong>');
  });

  test('should return original text if keyword is empty', () => {
    expect(highlightText('Hello World', '')).toBe('Hello World');
  });

});
