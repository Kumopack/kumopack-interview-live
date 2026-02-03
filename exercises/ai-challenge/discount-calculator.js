/**
 * Exercise 3: AI-Assisted Bug Fix - Discount Calculator
 * 
 * บริบท: ระบบคำนวณส่วนลด OEM มี Bugs ที่ต้องใช้ AI ช่วยหาและแก้ไข
 * 
 * หน้าที่: ใช้ AI IDE ช่วยหา Bugs และแก้ไขให้ Tests ผ่าน
 * เวลา: 10 นาที
 * AI: ✅ ใช้ได้
 */

export function applyDiscounts(order) {
  const { items, coupon, memberTier } = order;
  
  let total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  
  const couponDiscount = coupon ? total * coupon.percent : 0;
  const memberDiscount = getMemberDiscount(memberTier) * total;
  
  return total - couponDiscount - memberDiscount;
}

function getMemberDiscount(tier) {
  const discounts = { bronze: 0.05, silver: 0.10, gold: 0.15 };
  return discounts[tier];
}
