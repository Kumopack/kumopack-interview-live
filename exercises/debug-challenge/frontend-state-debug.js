/**
 * Exercise 1: Frontend Debug - Component State Management
 * 
 * Context: ในระบบ Kumopack หน้านี้คือระบบกรองสินค้า (Product Filter) 
 * ทีมงานพบบั๊กสำคัญ: เมื่อผู้ใช้กดเลือก Filter หลายตัวพร้อมกัน ข้อมูลที่แสดงผลกลับไม่ถูกต้อง 
 * และสถานะการเลือก (Checkbox) ทำงานผิดเพี้ยนไปจากที่ควรจะเป็น
 * 
 * Task: หาจุดที่จัดการ State ผิดพลาด (Bugs) ในฟังก์ชันจัดการการเลือก filter และแก้ไขให้ใช้งานได้จริง
 * Time: 12 mins
 * AI: ❌ Do not use
 */

export function toggleFilter(currentFilters, category, value) {
  // บั๊กชุดที่ 1: การ Mutate state โดยตรง (Common Frontend Issue)
  const newFilters = currentFilters;
  
  if (!newFilters[category]) {
    newFilters[category] = [];
  }

  const index = newFilters[category].indexOf(value);
  
  if (index > -1) {
    // บั๊กชุดที่ 2: การใช้ Logic ผิดในการลบค่าออก
    newFilters[category].splice(index, 0); 
  } else {
    newFilters[category].push(value);
  }

  return newFilters;
}

/**
 * Requirement:
 * 1. ฟังก์ชันต้องคืนค่า Object สภาวะใหม่ (New Reference) เสมอ (Immutability)
 * 2. ถ้าค่า (value) มีอยู่แล้วในหมวดหมู่ (category) -> ให้เอาออก
 * 3. ถ้าค่ายังไม่มี -> ให้เพิ่มเข้าไป
 */
