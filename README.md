# QR Code Generator 🎯

A simple, fast, and responsive web application for generating and downloading QR codes instantly. Built with React and Vite for optimal performance.


## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alagarsamy-m/qr-code-generator.git
cd qr-code-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to be deployed to any static hosting service.


## 📁 Project Structure

```
qr-code-generator/
├── public/
│   └── qr-code.png          # App icon
├── src/
│   ├── assets/
│   │   └── qr-code.png      # Logo
│   ├── QrCodeGenerator.jsx  # Main component
│   ├── QrCodeGenerator.css  # Styles
│   └── main.jsx            # Entry point
├── package.json
├── vite.config.js
└── README.md
```


## 🏗️ Tech Stack

- **Frontend**: React 19 with Hooks
- **Build Tool**: Vite for fast development and building
- **Styling**: CSS3 with modern design principles
- **API**: QRServer API for QR code generation
- **Icons**: Custom assets and Google Fonts


## ✨ Features

- **Instant QR Code Generation** - Generate QR codes in real-time
- **Customizable Size** - Adjust QR code dimensions as needed
- **Download Capability** - Save generated QR codes as PNG images
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Clean UI** - Modern, intuitive interface with smooth animations
- **No Backend Required** - Uses external QR server API for generation

## Screenshot

![Weather App Screenshot](src/assets/screenshots/Screenshot%202025-08-13%20102231.png)