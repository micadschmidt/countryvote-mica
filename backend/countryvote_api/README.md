# CountryVote API (Backend Service)

Branch: `backend/countryvote_api`

This is the backend service for the Fullstack Challenge **CountryVote**.
It exposes a REST API to allow users to vote for their favorite country and retrieve the most voted ones.

---

## 🚀 Tech Stack

- Ruby on Rails (API-only)
- PostgreSQL
- RSpec + FactoryBot + WebMock
- External API: https://restcountries.com
- Faraday for HTTP requests

---

## 🧠 Architecture Overview

This service implements:

### Models
- **User**: represents a vote.
  A user has:
  - `name`
  - `email` (unique)
  - `country_code` (ISO 3166-1 alpha-3)

Email uniqueness guarantees **1 vote per email**.

---

### Controllers

| Endpoint | Description |
|---------|-------------|
| `POST /api/v1/votes` | Create a vote for a country |
| `GET /api/v1/countries/top` | Returns top 10 most voted countries |
| `GET /api/v1/countries` | List all available countries (used by frontend dropdown) |

---

### Services

- `TopCountriesService`: aggregates votes and fetches details for the top 10 countries.
- `RestCountriesService`: integrates with the RestCountries API.

---

## ▶️ Setup instructions

Make sure you have PostgreSQL running.

### 1. Install dependencies
```bash
bundle install
```

### 2. Create and migrate the database
```bash
rails db:create
rails db:migrate
```
### 3. Start the server
```bash
rails s
```

---

## 🧪 Running Tests Locally

This project includes full test coverage using RSpec.

### 1. Prepare the test database
```bash
rails db:migrate RAILS_ENV=test
```

### 2. Run the full test suite
```bash
bundle exec rspec
```

### 3. Run a specific test
```bash
bundle exec rspec spec/models/user_spec.rb
```
