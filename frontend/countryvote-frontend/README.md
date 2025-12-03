# CountryVote Interface (React + TS)

Branch: `frontend/countryvote-frontend`

## ✔ Features Implemented

### Voting Form

- Fields: name, email, country dropdown
- Client-side validation:

    - empty fields
    - invalid email
    - errors styled exactly as Figma
- Disabled submit button on loading


### Country Table

- Displays flag, name, region, capital, and votes
- Sorted visually by votes
- Search bar to filter displayed results
- Responsive styling matching Figma

### Header

- Custom header identical to Figma
- LoopStudio logo clickable → https://loopstudio.dev/

---

## 🧩 Frontend Setup

### 1. Install dependencies
```bash
cd frontend/countryvote-frontend
npm install
```

### 2. Environment setup

Create .env:
```bash
VITE_API_URL=http://localhost:3000
```

### 3. Start development server
```bash
npm run dev
```

Runs at:
```bash
http://localhost:5173
```

---

## 🔍 Lint & Build
```bash
npm run lint
npm run build
```

---

## 🧠 Design Decisions

### 1. Vite + TypeScript

Chosen for speed and minimal configuration.

### 2. Strict Type Safety

Types defined for:

- CountryOption
- TopCountry
- VotePayload
- API error responses

### 3. Pixel-accurate UI

- Custom CSS based on Figma
- Error states identical to designs
- Loopstudio branding respected

### 4. Components

- `VoteBar `— form + validation
- `TopCountriesTable` — sorting + filtering
- `Header` — logo and branding
