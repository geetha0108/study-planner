# Study Planner 📚

Study Planner is a full-stack web application designed to help students
plan their studies, track learning progress, take quizzes, and manage
study sessions efficiently.

The project includes a **React + TypeScript frontend** and a **Node.js backend**
with AI-powered services.

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
