# Lotto Number Generator

## Project Overview
A premium, interactive web application that generates 5 sets of unique random numbers (1-45) for the lottery. The design is modern, responsive, and features interactive animations and theme support.

## Features & UI Components
- **Multi-Set Generation**: Generates 5 rows of 6 unique numbers (1-45) in a single click.
- **Theme Support**:
  - **Light/Dark Mode**: Integrated toggle with persistent preference via `localStorage`.
  - Seamless transitions between themes using CSS Variables.
- **Modern UI Design**:
  - Glassmorphism effects with enhanced backdrop-filter.
  - Vibrant gradients for headings and buttons.
  - Custom Inter typography from Google Fonts.
  - Interactive hover effects and staggered entry animations.
- **Dynamic Range-Based Coloring**:
  - 1-10: Yellow (n-1)
  - 11-20: Blue (n-2)
  - 21-30: Red (n-3)
  - 31-40: Gray (n-4)
  - 41-45: Green (n-5)

## Technical Details
- **CSS**: Uses CSS Variables for theming, Flexbox, Animations, and Radial Gradients.
- **JS**: 
  - `Set` for uniqueness.
  - `localStorage` for theme persistence.
  - DOM manipulation for dynamic content and theme switching.

## Progress
1. **v1.0**: Basic generation logic and simple UI.
2. **v2.0**: Enhanced design with Glassmorphism, 5-set generation, and animations.
3. **v2.1**: Added Dark/Light mode toggle and theme persistence.
