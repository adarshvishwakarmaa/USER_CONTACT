# User Contact

## Description

User Contact is a **full-stack CRUD application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This application allows users to **Create, Read, Update, and Delete** (CRUD) their contact details. It features a user-friendly interface built with React, enabling seamless interaction with the database through API integration.

The backend is powered by Express.js and MongoDB, ensuring efficient data management, while the frontend is styled and enhanced with various libraries for a smooth user experience.

## Features

- 🔹 **Create** new contact entries
- 🔹 **Read** and view existing contact details
- 🔹 **Update** user contact information
- 🔹 **Delete** contacts when no longer needed
- 🔹 **RESTful API** for seamless frontend-backend communication
- 🔹 **Responsive UI** for an enhanced user experience

## Tech Stack

### **Frontend:**
- React.js
- React Router DOM
- Axios
- React Icons
- FontAwesome Icons
- React Hot Toast

### **Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Body-Parser
- CORS
- Dotenv
- Nodemon (for development)

## Getting Started

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-contact.git
   cd user-contact
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

### **Running the Application**

1. **Start the Backend**:
   ```bash
   cd backend
   npm start
   ```

2. **Start the Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

3. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## API Endpoints

| Method | Endpoint         | Description              |
|--------|-----------------|--------------------------|
| GET    | `/api/contacts` | Fetch all contacts       |
| GET    | `/api/contacts/:id` | Fetch a single contact |
| POST   | `/api/contacts` | Create a new contact     |
| PUT    | `/api/contacts/:id` | Update an existing contact |
| DELETE | `/api/contacts/:id` | Delete a contact |

## Acknowledgments

This project was developed as a demonstration of **CRUD operations** using the **MERN stack**. Special thanks to the **React** and **Node.js** communities for providing the tools and resources that made this project possible. The project integrates powerful **MongoDB** database management, an intuitive **React UI**, and an efficient **Express.js backend** to provide a seamless user experience.

## Live Demo

🔗 **[Live Site](https://your-live-site-link.com)**

## Contact

For queries or collaborations, feel free to reach out via email or GitHub. 🚀
