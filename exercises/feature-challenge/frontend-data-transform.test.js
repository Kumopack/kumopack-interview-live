import { describe, test, expect } from 'vitest';
import { formatRfqList } from './frontend-data-transform.js';

describe('formatRfqList (Frontend Logic)', () => {
  const mockToday = '2026-02-05';
  
  const mockRfqs = [
    { id: 'RFQ001', status: 'draft', budget: 5000, createdAt: '2026-02-05' },
    { id: 'RFQ002', status: 'quoted', budget: 12000, createdAt: '2026-02-04' },
    { id: 'RFQ003', status: 'sent_to_factory', budget: 8500, createdAt: '2026-02-01' },
    { id: 'RFQ004', status: 'expired', budget: 3000, createdAt: '2026-01-20' },
    { id: 'RFQ005', status: 'quoted', budget: 15000, createdAt: '2026-02-05' }
  ];

  test('should format status and dates correctly', () => {
    const { formattedItems } = formatRfqList(mockRfqs, mockToday);
    
    const todayItem = formattedItems.find(i => i.id === 'RFQ001');
    const pastItem = formattedItems.find(i => i.id === 'RFQ002');
    
    expect(todayItem.displayDate).toBe('วันนี้');
    expect(todayItem.displayStatus).toBe('รอดำเนินการ');
    
    expect(pastItem.displayDate).toBe('04/02/2026');
    expect(pastItem.displayStatus).toBe('ได้รับใบเสนอราคา');
  });

  test('should sort items by status priority and then by date', () => {
    const { formattedItems } = formatRfqList(mockRfqs, mockToday);
    
    // Priority: quoted > sent_to_factory > draft > expired
    // Among quoted: RFQ005 (today) > RFQ002 (yesterday)
    expect(formattedItems[0].id).toBe('RFQ005');
    expect(formattedItems[1].id).toBe('RFQ002');
    expect(formattedItems[2].id).toBe('RFQ003');
    expect(formattedItems[3].id).toBe('RFQ001');
    expect(formattedItems[4].id).toBe('RFQ004');
  });

  test('should calculate totalActiveBudget correctly (excluding drafts)', () => {
    const { totalActiveBudget } = formatRfqList(mockRfqs, mockToday);
    
    // RFQ002(12k) + RFQ003(8.5k) + RFQ004(3k) + RFQ005(15k) = 38500
    // RFQ001 (draft) is excluded
    expect(totalActiveBudget).toBe(38500);
  });

  test('should handle unknown status', () => {
    const unknownData = [{ id: 'X', status: 'deleted', budget: 0, createdAt: '2026-02-05' }];
    const { formattedItems } = formatRfqList(unknownData, mockToday);
    expect(formattedItems[0].displayStatus).toBe('ไม่ทราบสถานะ');
  });
});
