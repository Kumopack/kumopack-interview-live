/**
 * Exercise 3: AI-Assisted Bug Fix - Search Result Highlighter
 * 
 * Context: ในหน้าค้นหาสินค้าของ Kumopack เราต้องการทำระบบ Highlight คำที่ผู้ใช้ค้นหา (Search Keyword)
 * ในชื่อสินค้า โดยฟังก์ชันนี้ต้องจัดการเรื่อง Case-insensitive และรองรับภาษาไทย
 * 
 * Task: ใช้ AI ช่วยหา Bugs และจัดการ Edge Cases ให้ผ่าน Tests ทั้งหมด
 * Time: 10 mins
 * AI: ✅ Allowed
 */

export function highlightText(text, keyword) {
  if (!keyword) return text;

  // บั๊กตั้งต้น: 
  // 1. ลืมจัดการเรื่อง Case-insensitive (เช่น ค้นหา 'box' ไม่เจอ 'Box')
  // 2. ถ้าเจอ keyword หลายจุด มันจะเปลี่ยนแค่จุดแรก (ลืมใช้ Global flag)
  // 3. ผิดพลาดในการจัดการตัวอักษรพิเศษ (Regex injection)
  
  const regex = new RegExp(keyword);
  return text.replace(regex, `<strong>${keyword}</strong>`);
}

/**
 * Expected Result:
 * highlightText("Premium Box", "box") -> "Premium <strong>Box</strong>"
 * highlightText("ถุงกระดาษสีน้ำตาล", "ถุง") -> "<strong>ถุง</strong>กระดาษสีน้ำตาล"
 */
