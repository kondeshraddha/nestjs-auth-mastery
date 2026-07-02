# 📦 Project 01 — NestJS Project Setup

## 🎯 Objective
Understand core NestJS building blocks — modules, controllers, services.

## 🏢 Where Companies Use It
Every NestJS app starts here. Used by startups and enterprises alike
to structure their backend API.

## 🧠 Theory

| Concept | Role | Analogy |
|---------|------|---------|
| main.ts | Starts the app | Opens the restaurant |
| Module | Groups related code | The building |
| Controller | Handles HTTP requests | Waiter |
| Service | Business logic | Chef |
| DI | Auto-injects services | Manager assigns chef to waiter |

## 🏗 Architecture
main.ts → AppModule → AppController → AppService

## 🔄 Request Flow
GET / → AppController.getHello() → AppService.getHello() → "Hello World!"

## 🗄 Database Schema
No database needed for this project.

## 🟢 NestJS Implementation
```bash
# Install CLI
npm install -g @nestjs/cli

# Create project
nest new . --skip-git

# Run
npm run start:dev

# Generate feature module
nest generate module users
nest generate controller users
nest generate service users
```

## 🧪 Postman Testing
GET http://localhost:3000 → 200 OK → Hello World!

## 🛡 Security
- Use .env for PORT and secrets
- Add helmet middleware
- Never expose port 3000 in production

## Questions
1. What is the difference between Controller and Service?
2. What does @Injectable() do?
3. What is Dependency Injection?
4. What is the role of @Module()?
5. What does NestFactory.create() do?

