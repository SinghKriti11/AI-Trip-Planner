# 🌍 AI Trip Planner

An **AI-powered Travel Itinerary Generator** that creates personalized day-wise travel plans from a simple natural language prompt.

Users can describe their travel requirements in plain English, and the application intelligently generates a structured itinerary including destination, duration, budget, daily schedule, attractions, and activities.

---

# 📖 Project Overview

Planning a trip often requires researching destinations, budgeting, scheduling attractions, and organizing activities.

This project simplifies that process using **Artificial Intelligence**.

Instead of manually entering multiple fields, users simply type a request like:

> **"Plan a 5-day trip to Goa under ₹20,000 with my friends."**

The AI understands the request, extracts the travel details, and generates a complete travel itinerary in seconds.

---

## 🎥 Demo Video

[Watch Demo Video](https://github.com/SinghKriti11/AI-Trip-Planner/blob/main/Recording%202026-07-18%20073057.mp4)

---

# ✨ Features

### 🤖 AI-Powered Itinerary Generation
- Generates complete travel plans using OpenRouter AI.
- Understands natural language prompts.

### 📝 Free-Form Prompt Input
Example:

```
Plan a 4-day trip to Jaipur under ₹12,000.
```

No separate destination, duration, or budget fields are required.

### 📅 Day-wise Travel Plan

Each day contains:

- Title
- Tourist attractions
- Visiting time
- Activity descriptions

---

### 💰 Budget Awareness

The AI considers the user's budget while creating the itinerary.

---

### 📍 Destination Extraction

Automatically extracts:

- Destination
- Duration
- Budget

from the user's prompt.

---

### ⚡ Fast User Experience

- Loading indicator
- Error handling
- Instant itinerary generation

---

### 📱 Responsive UI

Works across desktop and mobile devices.

---

# 🏗 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

---

## Backend

- Node.js
- Express.js

---

## AI Integration

- OpenRouter API
- OpenAI SDK

---

# 📂 Project Structure

```
AI-Trip-Planner
│
├── backend
│   ├── controllers
│   │     └── tripController.js
│   │
│   ├── routes
│   │     └── tripRoutes.js
│   │
│   ├── services
│   │     └── aiService.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── public
│   │
│   ├── src
│   │     ├── assets
│   │     ├── components
│   │     │      ├── TripForm.jsx
│   │     │      ├── TripCard.jsx
│   │     │      └── DayCard.jsx
│   │     │
│   │     ├── pages
│   │     │      └── Home.jsx
│   │     │
│   │     ├── services
│   │     │      └── api.js
│   │     │
│   │     ├── App.jsx
│   │     └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── screenshots
│
├── README.md
└── .gitignore
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Trip-Planner.git
```

---

## Navigate into Project

```bash
cd AI-Trip-Planner
```

---

# Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
OPENROUTER_API_KEY=YOUR_API_KEY
```

Start backend:

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🚀 Usage

Enter a travel request like:

```
Plan a 5-day trip to Goa under ₹20,000.
```

or

```
Plan a solo trip to Jaipur for 3 days under ₹10,000.
```

The application will generate:

- Trip Title
- Destination
- Duration
- Budget
- Day-wise itinerary
- Tourist attractions
- Timings
- Activity descriptions

---

# 🔄 Application Workflow

```text
User
   │
   ▼
React Frontend
   │
Axios Request
   │
   ▼
Express Backend
   │
Prompt Engineering
   │
   ▼
OpenRouter AI
   │
Structured JSON Response
   │
   ▼
React UI Rendering
```

---

# 🧠 AI Prompt Engineering

The backend sends a carefully designed prompt to the AI model that:

- Understands natural language
- Extracts travel details
- Generates a structured itinerary
- Returns valid JSON
- Avoids markdown formatting

This ensures the frontend receives clean, machine-readable data for rendering.

---

# 📌 API Endpoint

### Generate Trip

```
POST /api/trip/generate
```

### Request

```json
{
  "prompt": "Plan a 5-day trip to Goa under ₹20,000."
}
```

### Response

```json
{
  "success": true,
  "itinerary": {
    "tripTitle": "Amazing Goa Vacation",
    "destination": "Goa",
    "duration": "5 Days",
    "budget": "₹20,000",
    "days": [
      {
        "day": 1,
        "title": "Arrival and Beach Exploration",
        "activities": [
          {
            "place": "Calangute Beach",
            "time": "09:00 AM",
            "description": "Relax on the beach and enjoy water sports."
          }
        ]
      }
    ]
  }
}
```

---

# 📈 Future Enhancements

- Save itineraries
- PDF export
- Flight suggestions
- Expense tracking


