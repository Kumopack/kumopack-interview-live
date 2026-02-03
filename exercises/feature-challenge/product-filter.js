/**
 * Exercise 2: Feature Implementation - Product Variant Filter
 * 
 * บริบท: ระบบ OEM ต้องการเพิ่มฟีเจอร์กรองสินค้าตาม Variant
 * (สี, ขนาด, วัสดุ) โดยต้อง Support การ Filter หลาย Variant พร้อมกัน
 * 
 * หน้าที่: Implement ฟังก์ชัน filterProducts ให้ถูกต้อง
 * เวลา: 15 นาที
 * AI: ❌ ห้ามใช้
 */

export const products = [
  {
    id: 'P001',
    name: 'Custom Box A',
    variants: {
      color: ['red', 'blue'],
      size: ['S', 'M', 'L'],
      material: ['paper']
    }
  },
  {
    id: 'P002',
    name: 'Custom Box B',
    variants: {
      color: ['blue', 'green'],
      size: ['M', 'L', 'XL'],
      material: ['plastic']
    }
  },
  {
    id: 'P003',
    name: 'Premium Box',
    variants: {
      color: ['red', 'green', 'black'],
      size: ['L', 'XL'],
      material: ['paper', 'plastic']
    }
  },
  {
    id: 'P004',
    name: 'Economy Box',
    variants: {
      color: ['white'],
      size: ['S', 'M'],
      material: ['paper']
    }
  }
];

/**
 * Filter products by variant criteria
 * 
 * @param {Array} products - Array of product objects
 * @param {Object} filters - Filter criteria object
 *   Example: { color: ['red', 'blue'], size: ['M'], material: [] }
 * 
 * Requirements:
 * 1. Return products that match ALL filter categories (AND logic)
 * 2. Within each category, match ANY option (OR logic)
 * 3. Empty filter array means "match all" for that category
 * 4. Handle edge cases: empty products, all filters empty, etc.
 * 
 * @returns {Array} Filtered products
 */
export function filterProducts(products, filters) {
  // TODO: Implement this function
}
