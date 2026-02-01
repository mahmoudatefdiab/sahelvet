# Die Welle Akademie – Language Academy Template

A responsive website template for language schools and educational academies.
Built with React, Vite, and Tailwind CSS.

---

## Features

- Responsive layout (mobile, tablet, desktop)
- Reusable React components
- Central configuration file for content and branding
- Course catalog with category filtering
- Contact and application forms
- WhatsApp integration
- SEO-ready structure
- Clean project structure

---

## Pages

- Home
- Courses
- About
- Contact
- Apply Form

---

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- Lucide React
- ESLint

---

## Getting Started

### Requirements
- Node.js 14+
- npm or yarn

### Installation

npm install  
npm run dev  

Open:
http://localhost:5173

---

## Build for Production

npm run build  
npm run preview  

---

## Project Structure

src/  
├── components/  
│   ├── pages/  
│   ├── navbar.jsx  
│   └── footer.jsx  
├── assets/  
├── config.js  
├── App.jsx  
├── main.jsx  
└── index.css  

---

## Configuration

All content and branding settings are located in:

src/config.js

You can change:
- Site name and description
- Contact information
- Colors
- Courses
- Team members
- Statistics
- Social links

No component code needs to be modified.

---

## Deployment

### Vercel
Import the repository and deploy with default settings.

### Netlify

npm run build  
Upload the dist folder.

### Custom Hosting
Serve the dist folder and redirect all routes to index.html.

---

## SEO

Basic SEO configuration is included.
Update metadata in config.js and index.html.

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## License

MIT License  
Free for personal and commercial use.

---

## Version

Version: 1.0.0  
Updated: January 2026  

---

## Support

For customization:
- Edit src/config.js
- Review component comments
- Read this README
