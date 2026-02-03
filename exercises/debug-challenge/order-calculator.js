/**
 * Exercise 1: Debug Challenge - OEM Order Calculator
 * 
 * บริบท: ระบบ OEM มีปัญหาคำนวณราคาสินค้าผิดพลาด
 * ลูกค้าร้องเรียนว่าราคาสุทธิไม่ตรงกับที่คาดหวัง
 * 
 * หน้าที่: หา Bugs ทั้งหมดและแก้ไขให้ Tests ผ่าน
 * เวลา: 12 นาที
 * AI: ❌ ห้ามใช้
 */

export function calculateOrderTotal(order) {
  let subtotal = 0;

  // BUG 1: Loop boundary issue
  for (let i = 0; i <= order.items.length; i++) {
    const item = order.items[i];
    subtotal += item.price * item.quantity;
  }

  // BUG 2: Floating point precision issue
  // ─────────────────────────────────────────────────────────
  // ปัญหา: JavaScript ใช้ IEEE 754 double-precision
  // เช่น 0.1 + 0.2 = 0.30000000000000004 (ไม่ใช่ 0.3)
  // ทำให้การคำนวณภาษี 7% ได้ค่าทศนิยมยาวผิดปกติ
  // 
  // ตัวอย่าง: subtotal = 200
  //   - Expected: 200 * 0.07 = 14.00
  //   - Actual:   200 * 0.07 = 14.000000000000002
  // ─────────────────────────────────────────────────────────
  const tax = subtotal * 0.07;
  const taxedTotal = subtotal + tax;

  // BUG 3: Missing null check for discount
  const discount = order.discount.percentage * subtotal;

  // BUG 4: Incorrect tier logic (edge case: quantity = 100)
  let tierDiscount = 0;
  if (order.totalQuantity > 100) {
    tierDiscount = 0.05;
  } else if (order.totalQuantity >= 50) {
    tierDiscount = 0.03;
  }

  return taxedTotal - discount - (subtotal * tierDiscount);
}
