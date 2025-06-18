# DMI Hero Section - Design Made Intelligent

A modern, animated hero section for DMI (Design Made Intelligent) built with React, TailwindCSS, and Framer Motion. This project showcases a visionary landing page design with smooth animations and responsive layout.

![DMI Hero Section Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.0-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.0-FF0055?style=flat-square&logo=framer)

##  Features

- **Modern Design**: Clean, minimalist interface with a dark theme and vibrant accents
- **Responsive Layout**: Fully responsive design that works seamlessly on desktop and mobile devices
- **Smooth Animations**: 
  - Staggered fade-in animations for content elements
  - Animated gradient background
  - Floating particle effects
  - Interactive button hover states
- **Performance Optimized**: Built with performance in mind using React best practices
- **Accessibility**: Semantic HTML and proper contrast ratios

##  Design Elements

- **Typography**: Inter font family for clean, modern text
- **Color Scheme**: 
  - Primary: Red (#f52a35)
  - Background: Black with gradient overlays
  - Text: White with gray variations
- **Visual Effects**: Gradient text, animated backgrounds, and particle effects

## 🛠️ Tech Stack

- **React** - Component-based UI library
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **PostCSS** - CSS post-processor
- **Autoprefixer** - Vendor prefix automation

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/swap-githubb/DMI-app.git
cd dmi-hero-section
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
dmi-hero-section/
├── src/
│   ├── components/
│   │   └── HeroSection.jsx      # Main hero section component
│   ├── App.jsx                  # Root application component
│   ├── index.js                 # Application entry point
│   └── index.css                # Global styles and Tailwind imports
├── public/
│   └── index.html               # HTML template
├── package.json                 # Project dependencies
├── tailwind.config.js           # Tailwind configuration
└── README.md                    # Project documentation
```

##  Configuration

### Tailwind Configuration

The project includes custom Tailwind configurations for:
- Custom colors (DMI brand colors)
- Extended animations
- Custom keyframes
- Font family settings

### Environment Setup

No environment variables are required for the basic setup. The project runs on the default React development server configuration.

##  Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

##  Component Features

### HeroSection Component

The main component includes:
- Animated logo with DMI branding
- Gradient text headline
- Descriptive sub-headline
- Two call-to-action buttons:
  - Primary: "Try the Demo" (Red gradient)
  - Secondary: "Join Waitlist" (Glass morphism)
- Background animations and particle effects


Made with ❤️ by Swapnil Shiv
