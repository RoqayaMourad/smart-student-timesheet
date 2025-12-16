
# Smart Student Timesheet

## Overview

Smart Student Timesheet is a simple Angular application that displays a student’s class schedule based on their ID and name.
The application highlights the currently running class or the next upcoming class based on the current date and time.

---

## Architecture
### 1. Components
- Responsible only for UI and user interaction
- No HTTP calls inside components

### 2. Facade Layer
- Acts as a bridge between components and the data layer
- Coordinates business logic
- Keeps components simple and decoupled

### 3. Data Layer
- Uses **Strategy Pattern**
- Current implementation uses a mock data strategy
- Can be easily replaced with a real API implementation

---

## Mock API (Postman)
A mock API contract is created using Postman to define:
- POST request
- Request body (student ID and name)
- Headers (sessionID)
- Response structure
---

## How to Run the Project

```bash
npm install
ng serve
```
---

## Postman 
import the collection from Mockapi-postman folder 
