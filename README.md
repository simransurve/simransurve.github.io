# Simran Surve - Professional Psychotherapist Website

A modern, professional React-based website for a licensed psychotherapist. Built with React 18, Vite, and professional styling.

## Features

- ✨ Modern, responsive design
- 🎨 Professional color scheme and typography
- ⚡ Fast development with Vite
- 📱 Mobile-optimized layout
- 🎭 Smooth animations and transitions
- ♿ Semantic HTML and accessibility
- 🔍 SEO optimized

## Project Structure

```
simran-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── CTA.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx
│   │   └── [Component].css files
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
│   └── profile.jpg (add your profile image)
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Installation

1. Navigate to the project directory:
```bash
cd simran-react
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:5173`

## Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Customization

### Update Contact Information

Edit the contact details in `src/components/Footer.jsx`:
- Email
- Phone number
- WhatsApp number (in `src/components/WhatsAppButton.jsx`)

### Add Profile Image

1. Place your profile image in the `public` folder
2. Update the `src` attribute in `src/components/About.jsx`

### Update Services & Content

All content is easily customizable in respective component files:
- Services: `src/components/Services.jsx`
- Testimonials: `src/components/Testimonials.jsx`
- FAQ: `src/components/FAQ.jsx`

### Modify Colors

Update CSS variables in `src/App.css` under the `:root` selector:
```css
:root {
  --primary: #1a3a52;
  --primary-light: #2563eb;
  /* ... other colors */
}
```

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **JavaScript ES6+** - Modern JavaScript

## Deployment

Ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- Any static hosting service

## Performance

- Lightweight and fast
- Optimized animations
- Responsive images
- Efficient CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Simran Surve. All rights reserved.
