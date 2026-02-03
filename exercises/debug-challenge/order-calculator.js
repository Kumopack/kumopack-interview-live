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

  for (let i = 0; i <= order.items.length; i++) {
    const item = order.items[i];
    subtotal += item.price * item.quantity;
  }

  const tax = subtotal * 0.07;
  const taxedTotal = subtotal + tax;

  const discount = order.discount.percentage * subtotal;

  let tierDiscount = 0;
  if (order.totalQuantity > 100) {
    tierDiscount = 0.05;
  } else if (order.totalQuantity >= 50) {
    tierDiscount = 0.03;
  }

  return taxedTotal - discount - (subtotal * tierDiscount);
}
