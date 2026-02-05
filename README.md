# KumoPack Technical Interview

Technical Interview Exercises for Senior Full Stack Engineer

## 📋 Overview

ชุดโจทย์สำหรับ Technical Live Session ประกอบด้วย 3 ส่วน:

| Exercise                  | เวลา   | AI     | Description                    |
| ------------------------- | ------ | ------ | ------------------------------ |
| 🐛 Debug Challenge        | 12 min | ❌ No  | หา Bugs และแก้ไขให้ Tests ผ่าน |
| 🔧 Feature Implementation | 15 min | ❌ No  | Implement ฟังก์ชัน filter      |
| 🤖 AI-Assisted Bug Fix    | 10 min | ✅ Yes | ใช้ AI ช่วยแก้ Bug             |

## 🚀 Setup

```bash
# Install dependencies
npm install

# Run tests for each exercise
npm run test:debug    # Exercise 1
npm run test:feature  # Exercise 2
npm run test:ai       # Exercise 3
```

## 📁 Exercises

### 🐛 Exercise 1: Debug Challenge (12 min)

- **File:** `exercises/debug-challenge/order-calculator.js`
- **Goal:** หา Bugs ทั้งหมดและแก้ไขให้ Tests ผ่าน
- **AI:** ❌ ห้ามใช้

### 🔧 Exercise 2: Feature Implementation (15 min)

- **File:** `exercises/feature-challenge/product-filter.js`
- **Goal:** Implement `filterProducts()` function
- **AI:** ❌ ห้ามใช้

### 🤖 Exercise 3: AI-Assisted Bug Fix (10 min)

- **File:** `exercises/ai-challenge/discount-calculator.js`
- **Goal:** ใช้ AI ช่วยหา Bugs และแก้ไข
- **AI:** ✅ ใช้ได้

## ⏱️ Timeline

| Phase      | Time        |
| ---------- | ----------- |
| 🐛 Debug   | 12 min      |
| 🔧 Feature | 15 min      |
| 🤖 AI Fix  | 10 min      |
| **Total**  | **~40 min** |

---

## 🎨 Frontend Track (Optional)

ชุดโจทย์สำหรับตำแหน่ง Frontend Engineer หรือ Full Stack ที่ต้องการเน้น Logic หน้าบ้าน:

| Exercise                   | ไฟล์                                           | จุดประสงค์                              |
| -------------------------- | ---------------------------------------------- | --------------------------------------- |
| 🐛 **Debug (State)**       | `debug-challenge/frontend-state-debug.js`      | แก้ปัญหา Immutability & UI Re-rendering |
| 🔧 **Feature (Transform)** | `feature-challenge/frontend-data-transform.js` | การจัดการข้อมูล (Format/Sort) สำหรับ UI |
| 🤖 **AI Fix (Regex)**      | `ai-challenge/frontend-ai-highlight.js`        | การจัดการ String & UI Utilities         |

### 🚀 Run Frontend Tests

```bash
# Run all frontend exercises
npx vitest exercises/**/frontend-*.test.js

#เป้าหมายคือให้ผ่าน Tests ทั้งหมดเช่นกัน
```

Good luck! 🍀
