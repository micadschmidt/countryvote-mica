# 📘 CountryVote — Fullstack Challenge

Author: Micaela Dauria Schmidt
Tech Stack: Ruby on Rails (API) · PostgreSQL · React + TypeScript + Vite · CSS Modules

This repository contains the full implementation of the CountryVote platform, consisting of:

A backend API built with Ruby on Rails

A frontend application built with React + TypeScript

Full instructions to install, test, and run both projects

A documented explanation of design decisions, assumptions, and trade-offs taken during development

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

✔ Requirements implemented

1. Create a user with: name, email, favorite country (3-letter country code).

One vote per email enforced by backend validation.

2. Return Top 10 countries ordered by votes

Each entry includes: name, official_name, capital, region, subregion, flags.

Data retrieved from REST Countries API

---

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

Validates:

presence of name, email, country_code

format of email

uniqueness of email

country_code must be 3 letters

✔ Services
RestCountriesService

Used to:

Fetch all countries for dropdown

Fetch details for specific list of cca3 codes

TopCountriesService

Groups users by country_code

Retrieves top 10

Enriches each entry with REST Countries metadata

Used by /api/v1/countries/top

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
