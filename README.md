# About The Project

The following project is a subset of web design tools, allowing for creating color palettes adapted to websites and accessible to people with disabilities. The generated palettes can be tested against Web Content Accessibility Guidelines (WCAG), to ensure compability with the international design standards for the Internet.

## Application Features
🔷 Color palette generator ( currently with 4 variants - Complementary, Monochromatic, Light and Dark ) </br>
🔷 A grid of customizable UI elements </br>
🔷 Simulating color blindness<br>
🔷 Testing contrast of the selected palette according to WCAG guidelines</br>
🔷 Editing any color in the color palette using a prepared set of shades or manually/br>

### Used Technologies
[![My Skills](https://skillicons.dev/icons?i=angular,typescript,html,sass,tailwind)](https://skillicons.dev)

### Additional Libraries
- [Chroma.js 🔗](https://gka.github.io/chroma.js/)<br>
- [Ngx-colors 🔗](https://ngx-colors.web.app/overview)<br>
- [color-blind library 🔗](https://github.com/skratchdot/color-blind)<br>

## Live Demo 
[colorsense.kaczmarski.dev](https://colorsense.kaczmarski.dev)

## User Interface
#### Displaying palette on real UI
<img width="1918" height="886" alt="Mockup1" src="https://github.com/user-attachments/assets/f6e46240-381c-4298-b3f5-4665a904654a" />

#### Simulating color blindness
<img width="1918" height="881" alt="Mockup2" src="https://github.com/user-attachments/assets/dd5e7f29-762b-495f-a681-f6fb5e2ecc11" />

#### Checking contrast according to WCAG
<img width="1917" height="903" alt="Contrast" src="https://github.com/user-attachments/assets/8c3a41f8-5b83-470b-b356-120f7839c84f" />

## Installation Guide ⚙️

Here's a step-by-step guide to help you get started with the project.

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js (version 14.0 or later)
- npm package manager (version 6.0 or later)

### Installation

Let's start with installing all dependencies. Move to the app main workspace and run:

    npm i

To create a localhost port you should type:

    ng serve

Your application is ready at port 4200.

    http://localhost:4200/

## License and Copyrights 📜

- The application is publicly available under the GNU General Public License.
- The project is educational and is not used for any commercial purposes.
- The main algorithm of Color Blindness Simulation used in color-blind library was originally made by Matthew Wickline & the Human-Computer Interaction Resource Network and is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
