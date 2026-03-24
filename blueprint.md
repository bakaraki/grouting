# Lotto Number Generator

## Project Overview
A premium, interactive web application that generates 5 sets of unique random numbers (1-45) for the lottery. The design is modern, responsive, and features interactive animations.

## Features & UI Components
- **Multi-Set Generation**: Generates 5 rows of 6 unique numbers (1-45) in a single click.
- **Modern UI Design**:
  - Glassmorphism effects (backdrop-filter).
  - Vibrant gradients for headings and buttons.
  - Custom Inter typography from Google Fonts.
  - Interactive hover effects and staggered entry animations.
- **Dynamic Range-Based Coloring**:
  - 1-10: Yellow gradient (n-1)
  - 11-20: Blue gradient (n-2)
  - 21-30: Red gradient (n-3)
  - 31-40: Gray gradient (n-4)
  - 41-45: Green gradient (n-5)
- **Mobile Responsive**: Adapts layout and sizing for smaller screens.

## Technical Details
- **CSS**: Uses CSS Variables, Flexbox, Animations, and Radial Gradients.
- **JS**: Uses `Set` for uniqueness, `async/await` for potential timing control, and DOM manipulation for dynamic row creation.

## Progress
1. **v1.0**: Basic generation logic and simple UI.
2. **v2.0**: Enhanced design with Glassmorphism, 5-set generation, and animations.
