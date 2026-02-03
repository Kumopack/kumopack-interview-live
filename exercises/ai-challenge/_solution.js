/**
 * SOLUTION - AI Challenge
 * ไฟล์นี้สำหรับ Interviewer เท่านั้น ห้ามให้ Candidate เห็น
 */

export function applyDiscounts(order) {
  const { items, coupon, memberTier } = order;
  
  let total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  
  // FIX 1: Apply discounts sequentially (coupon first, then member)
  // Apply coupon discount first
  if (coupon) {
    total = total - (total * coupon.percent);
  }
  
  // Apply member discount on remaining amount
  const memberDiscountRate = getMemberDiscount(memberTier);
  total = total - (total * memberDiscountRate);
  
  // FIX: Ensure total doesn't go negative
  return Math.max(0, Math.round(total * 100) / 100);
}

function getMemberDiscount(tier) {
  const discounts = { bronze: 0.05, silver: 0.10, gold: 0.15 };
  // FIX 2: Return 0 for unknown tier instead of undefined
  return discounts[tier] || 0;
}
