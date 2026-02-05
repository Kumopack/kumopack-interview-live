/**
 * Exercise 2: Frontend Logic - Dynamic Table Formatter
 * 
 * Context: ในระบบ Kumopack (OEM Platform) หน้าจอแสดงรายการใบเสนอราคา (RFQs) 
 * ต้องมีการแสดงสถานะ (Status) และการจัดรูปแบบวันที่ (Date) ให้ผู้ใช้งานอ่านง่าย
 * โดยข้อมูลที่ส่งมาจาก Backend เป็นข้อมูลดิบที่ต้องนำมาผ่าน Logic หน้าบ้านก่อนแสดงผลจริง
 * 
 * Task: Implement ฟังก์ชัน formatRfqList ให้ถูกต้องเหมาะสมกับการแสดงผลบน UI
 * Time: 15-20 mins
 * AI: ❌ Do not use
 */

/**
 * โจทย์ระดับกลาง:
 * 1. Transform Status:
 *    - 'draft' -> 'รอดำเนินการ' (สีเหลือง)
 *    - 'sent_to_factory' -> 'ส่งโรงงานแล้ว' (สีฟ้า)
 *    - 'quoted' -> 'ได้รับใบเสนอราคา' (สีเขียว)
 *    - 'expired' -> 'หมดอายุ' (สีเทา)
 *    - นอกเหนือจากนี้ให้เป็น 'ไม่ทราบสถานะ'
 * 
 * 2. Date Formatting:
 *    - ถ้าวันที่เป็นวันนี้ ให้แสดง 'วันนี้'
 *    - ถ้าไม่ใช่ ให้แสดงเป็น 'DD/MM/YYYY' (เช่น 05/02/2026)
 * 
 * 3. Sorting:
 *    - เรียงลำดับตามความสำคัญของสถานะ: 'quoted' > 'sent_to_factory' > 'draft' > 'expired'
 *    - ถ้าสถานะเหมือนกัน ให้เรียงตามวันที่ล่าสุด (Newest First)
 * 
 * 4. Summary Calculation:
 *    - คำนวณยอดรวมราคา (totalBudget) ของทุกรายการที่ 'ไม่ใช่' draft
 */

export function formatRfqList(rfqs, today = new Date().toISOString().split('T')[0]) {
  // TODO: Implement this function
  // return {
  //   formattedItems: [], // รายการที่ถูก format และ sort แล้ว
  //   totalActiveBudget: 0 // ผลรวมงบประมาณของรายการที่ไม่ใช่ draft
  // };
}
