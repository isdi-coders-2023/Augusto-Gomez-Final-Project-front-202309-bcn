# flixpicks

flixpicks is a Single Page Application developed using **React** and **Redux Toolkit**, offering a seamless movie catalog experience. With this application, users can perform essential CRUD operations (Create, Read, Update, Delete) on their movie collection. The primary focus is on providing a user-friendly interface for managing and organizing movies efficiently and keeping track of the ones already seen.

The design process began in **Figma**, where the interface styles were meticulously crafted. The subsequent implementation of the design utilized **StyledComponents** for creating components styles, emphasizing accessibility by ensuring suitable color contrast, incorporating alternative text for images, and utilizing ARIA attributes when necessary.

Version control was managed with **GIT**, following a robust **CI/CD** workflow, including trunk-based development and leveraging husky hooks to enforce code quality standards. Tools such as **Eslint** and **Prettier** were employed to maintain code quality. Lighthouse was used for monitoring accessibility, best practices, SEO, and performance aspects.

The backend code for this application can be found here [https://github.com/isdi-coders-2023/Augusto-Gomez-Final-Project-back-202309-bcn.git](#)

## Features

- Browse a comprehensive list of movies.
- Add new movies to your collection.
- Remove movies from your collection.
- Update the information of existing movies.

## Upcoming Implementations

- **Login:** Users will soon have the ability to log in to their accounts, providing access to a personalized collection. Once logged in, users can create, edit, and delete movies in their private collection, which will not be accessible to other users.
- **Security Measures:** Enhanced security measures, including secure password storage and authentication via JSON Web Tokens, will be implemented to protect user data.

## Demo

Experience FlixPicks by visiting the [demo](https://augusto-gomez-202309-bcn-front.netlify.app).

## Technologies Used

- **TypeScript**: A statically-typed programming language extending JavaScript.
- **React**: An open-source JavaScript library for building user interfaces.
- **Redux Tooolkit**: A JavaScript library for state management in applications.
- **React Router**: A library enabling navigation between different views in a React application.
- **Axios**: A promise-based HTTP client for making requests to a server.
- **React Testing Library**: A testing utility for React applications facilitating unit and integration testing.
- **Vite**: A fast build tool for modern web applications.
- **Vitest**: A set of testing utilities for Vite applications.
- **MSW**: A testing library enabling the interception and simulation of network requests for integration and unit testing.
- **Styled Components**: A library allowing the writing of CSS styles in React components.

## Sonarcloud Metrics

<div align="center">

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=isdi-coders-2023_Augusto-Gomez-Final-Project-front-202309-bcn)](https://sonarcloud.io/summary/overall?id=isdi-coders-2023_Augusto-Gomez-Final-Project-front-202309-bcn)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Augusto-Gomez-Final-Project-front-202309-bcn&metric=coverage)](https://sonarcloud.io/summary/overall?id=isdi-coders-2023_Augusto-Gomez-Final-Project-front-202309-bcn)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Augusto-Gomez-Final-Project-front-202309-bcn&metric=sqale_rating)](https://sonarcloud.io/summary/overall?id=isdi-coders-2023_Augusto-Gomez-Final-Project-front-202309-bcn)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Augusto-Gomez-Final-Project-front-202309-bcn&metric=security_rating)](https://sonarcloud.io/summary/overall?id=isdi-coders-2023_Augusto-Gomez-Final-Project-front-202309-bcn)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Augusto-Gomez-Final-Project-front-202309-bcn&metric=bugs)](https://sonarcloud.io/summary/overall?id=isdi-coders-2023_Augusto-Gomez-Final-Project-front-202309-bcn)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Augusto-Gomez-Final-Project-front-202309-bcn&metric=vulnerabilities)](https://sonarcloud.io/summary/overall?id=isdi-coders-2023_Augusto-Gomez-Final-Project-front-202309-bcn)

</div>

<br/>

## Additional Tools

- **ESLint**: A static code analysis tool to identify and report problematic patterns in JavaScript code.
- **Git Hooks Workflows**: A development strategy based on working directly on the main branch (trunk) using Git hooks for quality control and code reviews.
- **Prettier**: A code formatting tool ensuring consistent code style in the project.
- **SonarCloud**: An analysis service providing continuous inspection and analysis of code quality, security vulnerabilities, and overall maintainability of projects.
- **Netlify**: A web hosting and infrastructure services platform offering comprehensive tools for web development, deployment, and management.
- **Figma**: A cloud-based design and prototyping tool used for interface design, prototyping, collaboration, and design systems.
- **Trello**: A web-based project management application for organizing tasks and projects visually.

## Setup

1. Clone this repository and install its dependencies using the command `npm i`.
2. Start a development server using the command `npm run dev`.
3. Navigate to the appropriate link on your localhost.

## Available Scripts

- `npm run dev`: Starts a development server.
- `npm run build`: Builds the app.
- `npm run preview`: Runs the built app.
- `npm run lint`: Runs ESLint.
- `npm run test`: Runs unit tests for the application.
- `npm run test:coverage`: Shows the application's test coverage.

## Authors

- [@augusto-gs](https://github.com/augusto-gs)
