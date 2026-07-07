
```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# 💉 Project 02 — Dependency Injection Demo

## 🎯 Objective
Understand how NestJS Dependency Injection works by sharing
one service across multiple controllers.

## 🧠 Theory

| Concept | Meaning |
|---------|---------|
| @Injectable() | Marks a class so NestJS can inject it |
| constructor(private service: Service) | NestJS auto-injects the service |
| providers[] in module | Registers the service in DI container |
| Singleton | NestJS creates ONE instance shared everywhere |

## 🏗 Architecture
NotificationService → injected into → UserController
NotificationService → injected into → OrderController

## 🔄 Request Flow
GET /user/welcome?email=x → UserController → NotificationService.sendEmail()
GET /order/confirm?phone=x → OrderController → NotificationService.sendSMS()

## 🟢 NestJS Implementation
```bash
nest generate service notification --no-spec
nest generate controller user --no-spec
nest generate controller order --no-spec
```

## 🧪 Postman Testing
GET http://localhost:3000/user/welcome?email=alice@gmail.com
→ Send email to alice@gmail.com

GET http://localhost:3000/order/confirm?phone=9876543210
→ send SMS to 9876543210

## 🛡 Security
- Services should never expose sensitive logic directly via controllers
- Always validate @Query() inputs in production

Questions
1. What is Dependency Injection?
2. What does @Injectable() do?
3. What is a singleton provider in NestJS?
4. What is the difference between providers and controllers in a module?
5. Why should business logic be in services not controllers?

## 🚀 Production Tips
1. Use interface-based injection for easier testing
2. Use custom providers for complex dependency setup
3. Use REQUEST scope when each request needs its own instance
