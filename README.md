# Flexbox Learning Game

An interactive, browser-based educational game designed to teach and practice CSS Flexbox concepts.

## Overview

The Flexbox Learning Game presents players with a series of layout challenges. In each level, players are instructed to arrange items inside a container using CSS Flexbox properties. By manipulating dropdown controls, players observe real-time visual changes on the board and verify their solutions against target positions.

## Features

- **7 Progressive Levels**:
  - **Level 1**: Horizontal alignment with `justify-content: center`
  - **Level 2**: Vertical alignment with `align-items: flex-end`
  - **Level 3**: Direction change with `flex-direction: column`
  - **Level 4 (Combined)**: Multi-property alignment with `justify-content: space-between` and `align-items: flex-end`
  - **Level 5 (Combined)**: Column layout with horizontal centering using `flex-direction: column` and `align-items: center`
  - **Level 6 (Wrapping)**: Multi-line layout with `flex-wrap: wrap` and `justify-content: space-around`
  - **Level 7 (Combined)**: Reverse column direction, vertical centering, and cross-axis alignment using `flex-direction: column-reverse`, `justify-content: center`, and `align-items: flex-end`
- **Real-Time Visual Feedback**: Changes to properties immediately reflect on the player's items in the container.
- **Dual-Verification Engine**: Compares both exact target properties and bounding box pixel coordinates to support valid alternative arrangements.
- **Fixed-Size Game Board**: The game board is fixed at 360x360 pixels across all devices, ensuring consistent item positioning regardless of screen resolution.
- **Single Page Application (SPA)**: Smooth navigation between levels without full page reloads.
- **Reset & Progress Tracking**: Reset current level to initial values at any time, track completed stages, and revisit completed levels.
- **Fully Responsive**: Mobile and desktop friendly wrapper layout.

## Technologies Used

- **HTML5**: Semantic document structure.
- **CSS3**: Pure Flexbox layout without external UI frameworks or CSS Grid.
- **JavaScript (ES6+)**: Pure vanilla JavaScript without external libraries or dependencies.

## Project Structure

```
FlexboxGame/
├── index.html     # Main HTML structure and UI controls
├── style.css      # Core skeleton styles and layout rules
├── script.js      # Game state, level data, and verification logic
└── README.md      # Project documentation
```

## How to Run

1. Clone or download this repository.
2. Open `index.html` directly in any modern web browser (Chrome, Firefox, Safari, Edge).
   - Alternatively, serve locally using a lightweight server:
     ```bash
     # Python 3
     python3 -m http.server 8000
     ```
   - Then navigate to `http://localhost:8000` in your browser.

## Deployment to GitHub Pages

To publish this game using GitHub Pages:
1. Push the repository to GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Branch**, select `main` and root directory `/`, then click **Save**.
4. Your site will be published at `https://<username>.github.io/<repository-name>/`.
