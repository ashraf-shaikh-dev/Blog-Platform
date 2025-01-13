# **Blog Platform**  
This repository contains a full-stack blog platform built with **React** for the frontend and **Spring Boot** for the backend. It allows users to create, read, update, and delete blog posts, demonstrating the integration of a modern frontend with a robust backend API.

---

## **Project Features**
### Frontend (React)
- Responsive and modern UI for managing blog posts.
- Interactive forms for creating and editing posts.
- REST API integration with the backend.
- State management using React hooks and context.

### Backend (Spring Boot)
- RESTful APIs to handle CRUD operations for blog posts.
- Data persistence with a relational database.
- Configurable application properties for flexibility.
- Secure and scalable backend.

---

## **Project Structure**
```
/BLOG_PLATFORM
  ├── /frontend         # React application
  │     ├── src/        # React source code
  │     ├── public/     # Public assets
  │     ├── build/      # Production build (generated after `npm run build`)
  │     └── package.json
  ├── /backend          # Spring Boot application
  │     ├── src/        # Java source code and resources
  │     ├── pom.xml     # Maven configuration
  ├── README.md          # Project documentation
```

---

## **Setup Instructions**
### Prerequisites
Ensure you have the following installed:
- **Java Development Kit (JDK)** 11 or later
- **Node.js** and **npm**
- **Maven** (for Spring Boot)
- **MySQL** or other database of your choice

---

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/ashraf-shaikh-dev/Blog-Platform.git
cd BLOG_PLATFORM
```

---

### **Step 2: Set Up the Backend**
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Update the database configuration in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/blog_platform
   spring.datasource.username=<your-username>
   spring.datasource.password=<your-password>
   ```
3. Build and run the backend:
   ```bash
   mvn spring-boot:run
   ```

---

### **Step 3: Set Up the Frontend**
1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

### **Step 4: Build the React App and Integrate with Spring Boot**
1. Build the React app for production:
   ```bash
   npm run build
   ```
2. Copy the build files to the Spring Boot static directory:
   - Copy all files from `frontend/build/` to `backend/src/main/resources/static/`.

3. Restart the backend:
   ```bash
   cd ../backend
   mvn spring-boot:run
   ```

Access the app at `http://localhost:8080`.

---

## **Technologies Used**
- **Frontend**: React, JavaScript, HTML, CSS
- **Backend**: Spring Boot, Java, Maven
- **Database**: MySQL
- **Build Tools**: Maven, npm

---

## **Contributing**
Contributions are welcome! Feel free to:
- Fork the repository.
- Submit issues and feature requests.
- Open pull requests to improve the platform.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---
