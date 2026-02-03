# KumoPack Interview Live

Technical Interview Exercises for Senior Full Stack Engineer (OEM Web Application)

## 📋 Overview

ชุดโจทย์สำหรับ Technical Live Session (30-40 นาที) ประกอบด้วย 3 ส่วน:

| Exercise                  | เวลา   | AI     | คำสั่ง                 |
| ------------------------- | ------ | ------ | ---------------------- |
| 🐛 Debug Challenge        | 12 min | ❌ No  | `npm run test:debug`   |
| 🔧 Feature Implementation | 15 min | ❌ No  | `npm run test:feature` |
| 🤖 AI-Assisted Bug Fix    | 10 min | ✅ Yes | `npm run test:ai`      |

## 🚀 Setup

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run specific exercise tests
npm run test:debug
npm run test:feature
npm run test:ai
```

## 📁 Structure

```
├── exercises/
│   ├── debug-challenge/
│   │   ├── order-calculator.js      # Buggy code (ผู้สมัครแก้)
│   │   ├── order-calculator.test.js # Unit tests
│   │   └── _solution.js             # เฉลย (Interviewer only)
│   │
│   ├── feature-challenge/
│   │   ├── product-filter.js        # Starter code
│   │   ├── product-filter.test.js   # Unit tests
│   │   └── _solution.js             # เฉลย
│   │
│   └── ai-challenge/
│       ├── discount-calculator.js   # Buggy code
│       ├── discount-calculator.test.js
│       └── _solution.js             # เฉลย
│
└── docs/
    └── interviewer-checklist.md     # Scoring checklist
```

## 📝 For Interviewers

1. ให้ผู้สมัครเปิดโปรเจกต์ใน IDE
2. ใช้ `docs/interviewer-checklist.md` สำหรับให้คะแนน
3. ไฟล์ `_solution.js` คือเฉลย ห้ามให้ผู้สมัครเห็น

## ⏱️ Timeline

| Phase      | Time       | Activity         |
| ---------- | ---------- | ---------------- |
| Intro      | 3 min      | อธิบายกฎ         |
| 🐛 Debug   | 12 min     | แก้ 4 Bugs       |
| 🔧 Feature | 15 min     | Implement filter |
| 🤖 AI      | 10 min     | แก้ Bug ด้วย AI  |
| **Total**  | **40 min** |                  |
