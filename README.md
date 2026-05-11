# 🐄 QurbaniHat - Modern Livestock Marketplace

<div align="center">

![QurbaniHat Banner](public/hero-banner.png)

**A modern, full-stack livestock marketplace built specifically for Eid-ul-Adha (Qurbani) season**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61dafb?style=flat&logo=react)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.2.0-47A248?style=flat&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![BetterAuth](https://img.shields.io/badge/BetterAuth-1.6.9-orange?style=flat)](https://www.better-auth.com/)

<div align="center">

[<img src="https://img.shields.io/badge/%F0%9F%9A%80%20Live%20Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" />](https://qurbani-hat-by-marufbillah.vercel.app)
&nbsp;
[<img src="https://img.shields.io/badge/%E2%9C%A8%20Features-1a1a2e?style=for-the-badge" />](#-features)

</div>

</div>

---

## 📖 About The Project

QurbaniHat is a comprehensive web application that revolutionizes the traditional livestock marketplace experience for Eid-ul-Adha. The platform enables users to browse premium sacrificial animals (cows, goats, sheep), view detailed specifications, and place bookings through a clean, modern, and fully authenticated interface.

### 🎯 Purpose

During Eid-ul-Adha, millions of Muslims worldwide perform Qurbani (animal sacrifice). QurbaniHat simplifies the process of finding and booking quality livestock by providing:

- **Transparency**: Detailed animal information (breed, weight, age, location)
- **Convenience**: Browse from home, book online
- **Trust**: Authenticated platform with verified listings
- **Quality**: Curated selection of premium animals

---

## ✨ Features

### 🔐 Authentication & User Management

- **Email/Password Authentication** - Secure registration and login
- **Google OAuth Integration** - One-click sign-in with Google
- **User Profiles** - View account details, verification status, and account age
- **Profile Management** - Update personal information
- **Session Management** - Persistent authentication with MongoDB

### 🐮 Animal Browsing & Discovery

- **12+ Premium Listings** - Curated selection of quality livestock
- **Detailed Animal Profiles** - Comprehensive information including:
  - Breed, type, weight, age
  - Location and pricing
  - High-quality images
  - Detailed descriptions
- **Featured Animals** - Highlighted premium selections on homepage
- **Sorting Options** - Price low-to-high and high-to-low
- **Related Animals** - Smart recommendations based on current viewing

### 📝 Booking System

- **Booking Form** - Capture customer details:
  - Name, email, phone number
  - Delivery address
  - Special requests/notes
- **Form Validation** - Built-in validation with HeroUI
- **Toast Notifications** - Real-time feedback on actions

### 🎨 User Experience

- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Modern UI/UX** - Clean design with smooth animations
- **Loading States** - Skeleton loaders for better perceived performance
- **Error Handling** - Custom 404 pages and error boundaries
- **Accessibility** - ARIA labels and semantic HTML

### 📚 Educational Content

- **Qurbani Tips** - Guidelines and best practices
- **Top Breeds Showcase** - Information about popular breeds
- **Animal Quick Stats** - At-a-glance information cards

---

## 🛠️ Technology Stack

### Frontend

- **[Next.js 16.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.4](https://reactjs.org/)** - UI library
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[HeroUI 3.0.3](https://www.heroui.com/)** - Modern component library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Animate.css](https://animate.style/)** - CSS animations

### Backend & Database

- **[BetterAuth 1.6.9](https://www.better-auth.com/)** - Modern authentication library
- **[MongoDB 7.2.0](https://www.mongodb.com/)** - NoSQL database
- **MongoDB Adapter** - BetterAuth integration for MongoDB

### UI/UX Libraries

- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[React Icons](https://react-icons.github.io/react-icons/)** - Additional icon set
- **Google Fonts** - Playfair Display & Inter typography

### Development Tools

- **[ESLint 9](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing

---

## 📁 Project Structure

```
qurbani-hat/
├── public/                      # Static assets
│   ├── logo-light.png
│   ├── brand-name-light.png
│   └── hero-banner.png
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── (auth)/              # Authentication routes
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (profile)/           # Profile routes
│   │   │   ├── profile/
│   │   │   └── update-profile/
│   │   ├── animals/             # Animal browsing
│   │   │   ├── page.jsx         # All animals listing
│   │   │   └── [id]/            # Individual animal detail
│   │   ├── api/                 # API routes
│   │   │   ├── auth/[...all]/   # BetterAuth handler
│   │   │   └── animals/         # Animals data endpoint
│   │   ├── layout.js            # Root layout
│   │   ├── page.js              # Homepage
│   │   └── globals.css          # Global styles
│   ├── components/              # React components
│   │   ├── animals/             # Animal-related components
│   │   ├── auth/                # Authentication forms
│   │   ├── home/                # Homepage sections
│   │   ├── profile/             # Profile components
│   │   └── ui/                  # Layout components
│   ├── data/                    # Static JSON data
│   │   ├── animals.json         # Animal listings
│   │   └── top-breeds.json      # Breed information
│   └── lib/                     # Utility libraries
│       ├── auth.js              # Server-side auth config
│       └── auth-client.js       # Client-side auth client
├── .env                         # Environment variables
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── README.md
```