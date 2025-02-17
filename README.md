# Pokémon Card Dashboard

A full-stack web application that allows users to browse Pokémon cards, manage their personal collections, and communicate with one another through a messaging system. This project is built using a microservices architecture with GoLang for the backend and React for the frontend.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [License](#license)

## Overview

The Pokémon Card Dashboard is designed to provide hands-on experience with full-stack development, RESTful API design, and microservices architecture. It integrates with the Pokémon TCG API to fetch card data and allows users to interact with their collections and communicate with each other.

## Features

- **User Authentication:** Secure registration and login using JWT tokens.
- **Pokémon Card Browsing:** Integration with the Pokémon TCG API to display card details including images, stats, and rarity.
- **Collection Management:** Add, remove, and update your personal card collection.
- **Messaging System:** Send and receive messages between users, with potential support for real-time notifications.
- **Microservices Architecture:** Separate services for authentication, card data handling, and messaging for improved scalability and maintainability.
- **Containerization:** Docker support for each microservice to streamline deployment.

## Architecture

The project is divided into two main parts:

1. **Backend:**  
   - **Authentication Service:** Handles user accounts and security.
   - **Card Data Service:** Manages interactions with the Pokémon TCG API.
   - **Messaging Service:** Facilitates communication between users.

2. **Frontend:**  
   - A React application that provides a dynamic and responsive user interface.
   - Uses npm for dependency management and build automation.

## Tech Stack

- **Backend:**
  - Language: GoLang
  - Containerization: Docker

- **Frontend:**
  - Framework: React
  - Language: JavaScript or TypeScript
  - Package Management: npm

## License

This project is licensed under the MIT License.