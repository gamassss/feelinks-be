## Overview

_**FeelinksAI**_ is a web-based application that allows users to track their emotional well-being through journaling. The system performs emotion analysis using an AI-based model and provides insights into the user's emotional state over time.

This repository contains the **backend** for the Feelinks application. For the **frontend** of the application, please visit the [Feelinks Frontend Repository](https://github.com/gamassss/feelinks-fe).

## System Architecture
![feelinks](https://github.com/user-attachments/assets/6831f53c-23cc-4eb9-a3b4-633405e84935)

The system is divided into the following major components:
- **Frontend**: Built with NextJS, it sends API requests for user authentication, journal management, and emotion analysis.
- **Backend**: Built with Express.js, it handles authentication (JWT), CRUD operations, and AI model inference.
- **Database**: Stores user data, journals, and emotion analysis results.
- **AI Model**: Utilizes Transformers for emotion analysis of journal entries.

## Folder Structure
```bash
src/
|-- config/            # Configuration settings (e.g., environment variables)
|-- constants/         # Application-wide constants
|-- controllers/       # Handles HTTP requests and responses
|-- helpers/           # Utility functions and helper methods
|-- middlewares/       # Express middlewares (e.g., authentication, validation)
|-- services/          # Business logic and service classes
|-- types/             # TypeScript type definitions
|-- app.ts             # Express application initialization
|-- db.ts              # Database connection and setup
|-- server.ts          # Server startup and configuration
```

## Database Schema
![feelinks-schema](https://github.com/user-attachments/assets/534e7819-2f63-487d-9ff1-27dab934ae1a)

The following entities are included in the database design:

- **Users**: Stores user information (id, username, password, created_at)
- **Journals**: Stores journal entries (id, user_id, title, content, created_at)
- **Emotions**: Stores emotion types (id, label)
- **EmotionAnalysis**: Stores emotion analysis results (id, journal_id, emotion_id, score)

## API Design

### Authentication
- `POST /signup` - Register a new user
- `POST /login` - Log in and receive a JWT

### Journals
- `GET /journals` - Retrieve all journals for a user
- `POST /journals` - Create a new journal entry
- `GET /journals/:id/emotion-analysis` - Analyze emotions for a specific journal entry

## Component Design
![feelinks-component-design](https://github.com/user-attachments/assets/8d71b511-a5ce-4b87-9c7e-be402adcb3e0)

## Technology Stack
- **Backend**: Express.js (TypeScript)
- **Database**: PostgreSQL
- **AI Model**: Transformers (Hugging Face)
- **Authentication**: JWT (JSON Web Tokens)

## Future Enhancements
- Add Google login integration for seamless authentication.
- Implement role-based access control (RBAC).
- Improve emotion analysis by using more fine-tuned transformer models.
- Introduce real-time notification for journal insights.

