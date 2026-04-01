# DigiTools – Premium Digital Tools Platform

A fully responsive, modern digital tools marketplace built from **Figma design
to production using React**. This project demonstrates strong frontend
fundamentals, dynamic UI behavior, and clean component architecture.

---

## Added Features

- Pixel-perfect implementation from Figma (no copy-paste)
- Built with React (component-based architecture)
- Fully responsive (mobile, tablet, desktop)
- Modern UI with glassmorphism navbar & gradient styles
- Dynamic Product & Cart system
- Toast notifications (React Toastify)
- Tab switching (Products / Cart)
- Dynamic Pricing Cards
- Clean and scalable code structure

---

## Core Functionalities

### Product Interaction

- Click on a product:
  - Matches product using **dynamic ID**
  - Updates:
    - Card button text
    - Background color
    - Shows selected icon section
  - Sends data to Cart
  - Updates Cart length (shown in Navbar)
  - Displays `toast.success`

### ⚠️ Double Click Warning

- Clicking the same button twice:
  - Shows **warning toast dynamically**
  - Prevents duplicate action

### 🧾 Cart System

- Dynamic product add
- Cart count updates in real-time
- Data passed between components via state

---

## 💡 Dynamic Pricing Section

- Fully rendered using dynamic data (`map`)
- Special styling applied to **2nd card (Most Popular)** using index logic



- 🧱 Structured Layout
  - Navbar (Glass UI + Cart Count)
  - Hero Section
  - Stats Section
  - Products Section
  - Cart Section
  - Pricing Section
  - Footer

- ♻️ Reusable Components
  - SimpleCards
  - Product Cards

---

## ⚙️ Tech Stack

- React
- Tailwind CSS
- JavaScript (ES6+)
- React Toastify

---

## 📱 Responsive Design

Tested on:

- iPhone XR
- iPhone 12 Pro
- iPhone 14 Pro Max
- iPad Mini
- iPad Air
- iPad Pro

---

## 📌 Key Learning

- State Management (Lifting State)
- Dynamic Rendering using `.map()`
- Conditional UI Logic
- Component-Based Architecture
- Reusable Components Strategy
- Clean Responsive Layout

---

## web page link
https://digitaltoolproject.netlify.app/

## 📸 Preview

<p align="center">
  <img src="public/assets/webpage.png" alt="Project Preview" width="100%">
</p>
