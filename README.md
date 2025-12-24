# Study Planner 📚

Study Planner is a full-stack web application designed to help students plan their studies, track learning progress, take quizzes, and manage study sessions efficiently.

## 📖 Project Overview

Study Planner is an intelligent study companion that combines a modern web interface with AI-powered features to enhance the learning experience. The application helps students:

- **Plan Study Sessions**: Organize exams and topics on an interactive calendar
- **Learn Concepts**: Access structured learning materials and explanations
- **Practice with Quizzes**: Generate AI-powered quizzes based on selected topics
- **Chat with AI**: Get real-time assistance and clarifications through an intelligent chatbot
- **Track Progress**: Monitor learning achievements through an insights dashboard
- **Discover Resources**: Find relevant study materials and recommendations

The project includes a **React + TypeScript frontend** with component-based architecture and a **Node.js/Express backend** with AI-powered services (Google Generative AI integration).

---

## 🚀 Features

- 🔐 User authentication & onboarding
- 📅 Calendar-based study planning
- 📖 Learning view for concepts
- 🧠 AI-powered chat and quiz generation
- 📊 Insights panel to track progress
- 📚 Resource recommendations
- 👤 User profile management
- 📝 Past study sessions tracking

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- CSS
- Component-based architecture

### Backend
- Node.js
- Express
- Environment-based configuration
- AI / model integration services

---

## 📂 Project Structure

```text
planner/
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── check-env.js
│   ├── verify-models.js
│   ├── package.json
│   ├── .env
│   └── node_modules/
│
├── frontend/
│   ├── components/
│   │   ├── AuthScreen.tsx
│   │   ├── CalendarView.tsx
│   │   ├── ChatView.tsx
│   │   ├── ExamSelection.tsx
│   │   ├── InsightsPanel.tsx
│   │   ├── LearningView.tsx
│   │   ├── QuizScreen.tsx
│   │   ├── ResourcesView.tsx
│   │   ├── StudyDashboard.tsx
│   │   └── UserProfile.tsx
│   │
│   ├── services/
│   ├── App.tsx
│   ├── index.tsx
│   ├── index.html
│   ├── constants.ts
│   ├── types.ts
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   ├── .env.local
│   └── README.md
│
├── README.md
└── .gitignore
---

#### 1. 🚀 Quick Start Setup

### Prerequisites
- **Node.js** (v14 or higher) and npm
- **Google Generative AI API Key** (get one from [Google AI Studio](https://makersuite.google.com/app/apikey))

### Installation & Setup

#### 1. Clone and Navigate
```bash
cd study-planner
```

#### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create environment configuration
# Add your Google Generative AI API key
echo GOOGLE_API_KEY=your_api_key_here > .env

# Verify the setup (optional)
node check-env.js

# Start the backend server
node server.js
# Server will run on http://localhost:5000
```

#### 3. Frontend Setup
```bash
cd ../frontend

# Install dependencies
npm install

# Create environment configuration
echo VITE_API_URL=http://localhost:5000 > .env.local

# Start the development server
npm run dev
# Frontend will typically run on http://localhost:5173
```

### Verification
- Navigate to the frontend URL in your browser
- You should see the Study Planner authentication screen
- The frontend will communicate with the backend API

### Running in Production
```bash
# Frontend build
cd frontend
npm run build
# Creates optimized build in dist/

# Backend for production
cd ../backend
NODE_ENV=production node server.js
```