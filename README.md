# Shop-IT MERN Stack E-commerce

Welcome to Shop-IT! This project is an E-commerce platform developed using the MERN stack, designed to facilitate online transactions and provide users with a seamless shopping experience. Below you will find information on the current status of the project, technologies used, prerequisites for setup, and instructions to get started.

## Overview

E-commerce, short for electronic commerce, refers to the buying and selling of goods or services over the internet. Shop-IT is built with this purpose in mind, enabling users to browse, select, and purchase products online. With the integration of backend and frontend technologies, Shop-IT aims to deliver a robust and efficient e-commerce solution.

### Current Status

- Backend development phase: Completed, tested, and ready for integration with the frontend.
- Frontend development: In progress, utilizing ReactJS. API endpoints for fetching data from the backend have been implemented, with focus on enhancing user interface and experience.

### Project Headway

Continued efforts will focus on:
- Completing frontend components.
- Refining user interface.
- Implementing additional features.
- Optimizing performance for a seamless shopping experience.

## Technologies Used

Shop-IT leverages the MERN stack, comprising:

- **MongoDB**: NoSQL database for storing data.
- **Express**: Web framework for building backend APIs and server-side logic.
- **React**: JavaScript library for building interactive user interfaces.
- **Node.js**: JavaScript runtime environment for running server-side code.

## Prerequisites

Before setting up Shop-IT, ensure you have the following software installed:

- **Node.js and npm**: [Download and install Node.js](https://nodejs.org/)
- **MongoDB**: Follow installation instructions based on your operating system:
  - [Install MongoDB on macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
  - [Install MongoDB on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
  - [Install MongoDB on Ubuntu Linux](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

## Getting Started

Follow these steps to set up and run Shop-IT locally on your machine:

1. **Clone the Repository**
    ```bash
    git clone https://github.com/Mkhannn/Shop-IT-mern.git
    cd Shop-IT
    ```

2. **Install Dependencies**
    - Backend Setup
    ```bash
    npm install
    ```

    - Frontend Setup
    ```bash
    cd frontend
    npm install
    ```

3. **Set Environment Variables**
    - Backend
    ```bash
    cd backend/config
    ```

    Create a `config.env` file in the directory and define necessary variables (e.g., Database connection string, API keys, Cloudinary keys, Mailtrap, SMTP keys).

4. **Start Backend Server**
    ```bash
    cd ..
    npm run dev
    ```

5. **Start Frontend Application**
    ```bash
    cd frontend
    npm start
    ```

## Developed By

Shop-IT is developed by Mustafa.

Thank you for choosing Shop-IT for your e-commerce needs! If you have any questions or feedback, feel free to reach out to us. Happy shopping!
