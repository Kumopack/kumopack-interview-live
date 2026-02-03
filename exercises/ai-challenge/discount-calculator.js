/**
 * Exercise 3: AI-Assisted Bug Fix - Discount Calculator
 * 
 * บริบท: ระบบคำนวณส่วนลด OEM มี 2 Bugs ที่ต้องใช้ AI ช่วยหาและแก้ไข
 * 
 * หน้าที่: ใช้ AI IDE ช่วยหา Bugs และแก้ไขให้ Tests ผ่าน
 * เวลา: 10 นาที
 * AI: ✅ ใช้ได้
 */

/**
 * Apply discounts to order total
 * 
 * BUG 1: Discount stacking logic ผิด
 * - ควร: apply coupon ก่อน แล้วค่อย apply member discount บน remaining
 * - ปัจจุบัน: apply พร้อมกันทำให้ส่วนลดเกิน 100% ได้
 * 
 * BUG 2: getMemberDiscount return undefined สำหรับ tier ที่ไม่รู้จัก
 */
export function applyDiscounts(order) {
  const { items, coupon, memberTier } = order;
  
  let total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  
  // Calculate discounts (both applied to original total - BUG!)
  const couponDiscount = coupon ? total * coupon.percent : 0;
  const memberDiscount = getMemberDiscount(memberTier) * total;
  
  // This can go negative if discounts > 100%!
  return total - couponDiscount - memberDiscount;
}

function getMemberDiscount(tier) {
  const discounts = { bronze: 0.05, silver: 0.10, gold: 0.15 };
  return discounts[tier];  // Returns undefined for unknown tier!
}
