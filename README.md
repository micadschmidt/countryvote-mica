# 📘 CountryVote — Fullstack Challenge

Author: Micaela Dauria Schmidt

Tech Stack: Ruby on Rails (API) · PostgreSQL · React + TypeScript + Vite · CSS Modules

This repository contains the full implementation of the CountryVote platform, including a backend API and a frontend application. The system allows users to vote for their favorite country and displays the Top 10 most voted countries enriched with country details from the REST Countries API.

## 🏗 Project Structure

```bash
micaela-challenge/
├── backend/
│   └── countryvote_api/   # Rails API
└── frontend/
    └── countryvote-frontend/   # Vite + React + TypeScript
```

---

## 🚀 1. Backend — CountryVote API (Rails)

### ✔ Features implemented

- Create a user vote with name, email, and country_code
- Enforce one vote per email (email must be unique)
- Retrieve Top 10 most-voted countries
- Enrich country info using REST Countries API
- Return name, official name, region, subregion, capital, and flags (png/svg)

----

### 📦 Backend Setup

#### 1. Install dependencies

```bash
cd backend/countryvote_api
bundle install
```

#### 2. Setup the database

```bash
rails db:create
rails db:migrate
```

#### 3. Run the API

```bash
rails server
```

---

### 🧪 Running Backend Tests

Ensure DB test environment exists:

```bash
cd backend/countryvote_api # if in main
RAILS_ENV=test rails db:create db:migrate
```

Run all tests:

```bash
bundle exec rspec
```

---

### 🛠 Backend Architecture Overview

✔ Models

User

- ``name`` — required
- ``email`` — required, unique, validated format
- ``country_code`` — required, 3 letters


✔ Service Objects

``RestCountriesService ``
- Handles all calls to https://restcountries.com

``TopCountriesService*``
- Groups users by country_code
- Orders by vote count
- Fetches country details via RestCountriesService
- Merges vote counts + enriched info for the frontend

---

### 📡 API Endpoints

POST /api/v1/votes

Create a user vote.

Payload:

```json
{
  "vote": {
    "name": "Mica",
    "email": "mica@example.com",
    "country_code": "ARG"
  }
}
```

GET /api/v1/countries/top

Returns top 10 voted countries with full details + flags.

---

## 🎨 2. Frontend — CountryVote Interface (React + TS)

### ✔ Features Implemented

#### Voting Form

- Fields: name, email, country dropdown
- Client-side validation:

    - empty fields
    - invalid email
    - errors styled exactly as Figma
- Disabled submit button on loading


#### Country Table

- Displays flag, name, region, capital, and votes
- Sorted visually by votes
- Search bar to filter displayed results
- Responsive styling matching Figma

#### Header

- Custom header identical to Figma
- LoopStudio logo clickable → https://loopstudio.dev/

---

### 🧩 Frontend Setup

#### 1. Install dependencies
```bash
cd frontend/countryvote-frontend
npm install
```

#### 2. Environment setup

Create .env:
```bash
VITE_API_URL=http://localhost:3000
```

#### 3. Start development server
```bash
npm run dev
```

Runs at:
```bash
http://localhost:5173
```

---

### 🔍 Lint & Build
```bash
npm run lint
npm run build
```

---

### 🧠 Design Decisions

### Backend

#### 1. Simple vote storage using User

Requirement: “only one vote per email”

→ Instead of separate Vote + User models, a single User record is a vote.
This ensures:

- simplicity
- easier validation
- no need for separate relations

#### 2. Use of Service Objects

All external HTTP logic moved to:

- ``RestCountriesService``

- ``TopCountriesService``

Keeps controllers slim and testable.

#### 3. Enrichment strategy

Using `/alpha?codes=` from REST Countries loads up to 10 countries in one API call.

--- 

### Frontend

#### 1. Vite + TypeScript

Chosen for speed and minimal configuration.

#### 2. Strict Type Safety

Types defined for:

- CountryOption
- TopCountry
- VotePayload
- API error responses

#### 3. Pixel-accurate UI

- Custom CSS based on Figma
- Error states identical to designs
- Loopstudio branding respected

#### 4. Components

- `VoteBar `— form + validation
- `TopCountriesTable` — sorting + filtering
- `Header` — logo and branding

---

### ⏱ Trade-offs & Limitations

### Backend

- No authentication (not required)
- No caching for REST Countries API — acceptable for small scale
- Limited to top 10 results by design

### Frontend

- No global state manager (not needed for small scope)
- Error handling simplified to field-level + API-level messages
- CSS kept simple (no Tailwind / Styled Components) to speed up delivery

---

## 🎯 Final Result

This repository includes a full-stack solution meeting all functional requirements, with:

✔ Backend API fully tested

✔ Frontend UI validated and styled per Figma

✔ Country flags and metadata displayed

✔ Clean commit history

✔ Clear documentation

---

### 🙌 Thank You

If you have any questions about setup or implementation, feel free to reach out.
