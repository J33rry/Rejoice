# Rejoice

A modern and animated React app built with **Vite** and deployed on **GitHub Pages**.

---

## 🚀 Live Demo

🌐 [View Live](https://j33rry.github.io/Rejoice)

---

## 🛠️ Tech Stack

- ⚛️ React
- ⚡ Vite
- 🎨 Tailwind CSS
- 🎞️ GSAP (for animations)
- 🧪 Deployed via GitHub Pages

---

## 📂 Project Structure

```
Rejoice/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/J33rry/Rejoice
cd Rejoice
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

---

## 🚀 Deploy to GitHub Pages

### 1. Update `vite.config.js`

```js
export default defineConfig({
  base: '/Rejoice/', // 👈 important for GitHub Pages
  plugins: [react()],
});
```

### 2. Add deployment scripts to `package.json`

```json
"homepage": "https://j33rry.github.io/Rejoice",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 3. Install deployment dependency

```bash
npm install gh-pages --save-dev
```

### 4. Deploy

```bash
npm run deploy
```

---

## ❗ Common Issue

**404 error on refresh or direct URL visit**:  
Make sure you use `HashRouter` or set the correct `base` path in `vite.config.js`.

---


## 📄 License

MIT License

---

Made with ❤️ by [@J33rry](https://github.com/J33rry)
