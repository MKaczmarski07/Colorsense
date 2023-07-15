# Colorsense - color accesibility tester

## Live example 🌐

_This option will be added in the future_

## About ✍️

Would you like to check how the color palette you choose looks like in the most typical elements of websites? is it sufficiently contrasting and accessible to people with disabilities? this app solves all these problems.

## Technological facilities 🛠️

### Main architecture

- Application is based on Angular 15.
- **Two-way data binding** is handled using Angular's FormsModule.
- Colors are changed by functions that use native Javascript properties.
- Color conversion is done using the **chroma.js** library.
- Simulations of different types of color blindness are achieved using the **color-blind** library
- UI is mainly done with the **TailwindCSS** framework and **SCSS**.

## Installation Guide ⚙️

This project is based on Angular framework and uses libraries:

- TailwindCSS
- ngx-colors
- Chroma.js
- color-blind

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

- The application is publicly available under the GNU GENERAL PUBLIC LICENSE.
- The project is educational and is not used for commercial purposes.
- The main algorithm of Color Blindness Simulation used in color-blind library was originally made by Matthew Wickline and the Human-Computer Interaction Resource Network and is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
