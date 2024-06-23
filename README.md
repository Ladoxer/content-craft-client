# Content Craft Client

Welcome to the Content Craft Client! This is the frontend application for the Content Craft CMS, built using Angular. This application allows users to register, log in, and manage articles seamlessly.

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Live Demo

Check out the live application [here](https://content-craft-three.vercel.app/).

## Features

- User Registration and Login
- Article Creation, Editing, and Deletion
- Responsive Dashboard displaying a list of articles
- Detailed Article View
- Secure API integration with JWT authentication
- User-friendly and responsive UI/UX

## Technologies Used

- Angular
- TypeScript
- Angular Router
- Tailwindcss
- DaisyUI
- HTML5
- CSS3

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14 or above)
- Angular CLI

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Ladoxer/content-craft-client.git
    ```

2. Navigate to the project directory:

    ```bash
    cd content-craft-client
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:

    ```bash
    ng serve
    ```

2. Open your browser and navigate to `http://localhost:4200`.


## Environment Variables

To run this project, you will need to add the following environment variables in the `src/environments/environment.ts` file:

```typescript
export const environment = {
  production: false,
  apiUrl: 'YOUR_BACKEND_API_URL'
};
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
