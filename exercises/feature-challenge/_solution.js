/**
 * SOLUTION - Feature Challenge
 * ไฟล์นี้สำหรับ Interviewer เท่านั้น ห้ามให้ Candidate เห็น
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
 * SOLUTION: Filter products by variant criteria
 */
export function filterProducts(products, filters) {
  // Handle empty products
  if (!products || products.length === 0) {
    return [];
  }

  // Handle empty/no filters - return all products
  if (!filters || Object.keys(filters).length === 0) {
    return products;
  }

  return products.filter(product => {
    // Check ALL filter categories (AND logic)
    return Object.entries(filters).every(([category, options]) => {
      // Empty array = match all for this category
      if (!options || options.length === 0) {
        return true;
      }

      // Check if product has this variant category
      const productVariants = product.variants[category];
      if (!productVariants) {
        return false;
      }

      // Check if ANY option matches (OR logic within category)
      return options.some(option => productVariants.includes(option));
    });
  });
}
