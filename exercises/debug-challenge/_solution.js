/**
 * SOLUTION - Debug Challenge
 * ไฟล์นี้สำหรับ Interviewer เท่านั้น ห้ามให้ Candidate เห็น
 */

export function calculateOrderTotal(order) {
  let subtotal = 0;

  // FIX 1: ใช้ < แทน <= เพื่อไม่ให้ loop เกิน array length
  for (let i = 0; i < order.items.length; i++) {
    const item = order.items[i];
    subtotal += item.price * item.quantity;
  }

  // FIX 2: ใช้ Math.round เพื่อแก้ปัญหา floating point precision
  const tax = Math.round(subtotal * 0.07 * 100) / 100;
  const taxedTotal = subtotal + tax;

  // FIX 3: เพิ่ม null check สำหรับ discount
  const discount = order.discount 
    ? order.discount.percentage * subtotal 
    : 0;

  // FIX 4: เปลี่ยน > เป็น >= สำหรับ quantity = 100
  let tierDiscount = 0;
  if (order.totalQuantity >= 100) {
    tierDiscount = 0.05;
  } else if (order.totalQuantity >= 50) {
    tierDiscount = 0.03;
  }

  return taxedTotal - discount - (subtotal * tierDiscount);
}
