# 🎨 Multi-Switcher Theme App

A fully responsive, scalable React + TypeScript + Vite application that supports **dynamic theming**. Users can seamlessly switch between **three distinct themes** that alter not just colors, but also layout structure, fonts, and spacing.

---

## 📌 Features

- 🎛️ **Theme Switcher**: Choose from **Theme 1**, **Theme 2**, and **Theme 3** using a dropdown in the header.
- 🧠 **Redux + Redux Persist**: Global theme state is managed via Redux and saved in localStorage using Redux Persist.
- 🌐 **Multi-Page Routing**: Handled with React Router.
- 💡 **Full Theme Customization**: Each theme updates layout, fonts, spacing, and visual structure.
- 📱 **Fully Responsive**: Works seamlessly across mobile, tablet, and desktop devices.
- ⚡ **Vite Powered**: Super-fast development experience.

---

## 🏗️ Tech Stack

- **React** (with TypeScript)
- **Vite** (build tool)
- **Redux** (state management)
- **Redux Persist** (persist theme state)
- **React Router** (client-side routing)
- **Tailwind CSS** (utility-first CSS framework)

---

## 📁 Folder Structure

src/
├── assets/ # Static assets (images, icons, etc.)
├── components/ # Reusable UI components (e.g., ThemeDropdown)
├── context/ # Context providers if needed
├── layout/ # Common layout wrappers (Header, Footer, etc.)
├── modals/ # Modal components
├── modules/ # Feature-specific modules/pages
├── slices/ # Redux slices (e.g., themeSlice.ts)
├── store/ # Redux store setup
├── thunks/ # Redux thunks (for async logic, if used)
├── utils/ # Utility functions/helpers
├── App.tsx # App component with router setup
├── main.tsx # Entry point with ReactDOM + Redux Provider
├── modal.ts # Modal type definitions or logic
├── hooks.ts # Custom hooks
├── style.css # Global styles (optional, along with Tailwind)
├── index.css # Tailwind base styles
└── vite-env.d.ts # Vite environment type definitions

Other project files:
├── tailwind.config.ts # Tailwind configuration
├── vite.config.ts # Vite configuration
├── tsconfig*.json # TypeScript configurations
├── .eslintrc.js # Linting rules
├── .gitignore
├── index.html # HTML entry point
└── README.md # Project documentation

---

## 🚀 Getting Started

### 🔧 Install Dependencies

```bash
npm install
# or
yarn install

## 🔍 Preview

![Multi-Switcher Theme App Preview](https://github.com/sonali251997/multi-switcher-theme-app/screenshots/image-1.png)
![Preview](/screenshots/image-2.png)
![Preview](/screenshots/image-3.png)

