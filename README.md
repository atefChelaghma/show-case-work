# Profile Company Project

A modern frontend application built with **React**, **TypeScript**, and **Vite**, following a feature-based architecture and modern engineering practices.

The project demonstrates scalable frontend architecture, reusable UI components, component documentation with Storybook, automated testing, code quality enforcement, and containerized development using Docker.

---

## 🚀 Tech Stack

### Frontend

* React 19
* TypeScript
* Vite
* Material UI (MUI)
* React Router

### Testing

* Vitest
* Cypress Component Testing
* Cypress End-to-End Testing

### Documentation

* Storybook

### Code Quality

* ESLint
* Prettier
* Husky
* lint-staged

### DevOps

* Docker
* Docker Compose

---

## 🏗️ Architecture

The application follows a **Feature-Based Architecture** combined with modern React design patterns to promote scalability, maintainability, and code reuse.

### Feature-Based Organization

Each business area owns its pages, components, hooks, types, and business logic.

```text
src/
├── app/
│   ├── router/
│   └── providers/
│
├── features/
│   ├── home/
│   └── about/
│
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── types/
│   └── utils/
│
└── assets/
```

This structure helps teams scale applications while keeping features isolated and easy to maintain.

### Design Patterns

#### Component Composition

Reusable components are composed through props rather than inheritance.

```tsx
<HeroSection
  title="Welcome"
  description="Description"
  actions={<Button>Learn More</Button>}
/>
```

#### Presentational and Container Components

**Presentational Components**

* Focus on rendering UI.
* Receive data through props.
* Easy to reuse and test.

Example:

* HeroSection

**Container/Page Components**

* Compose features and pages.
* Handle navigation and page-level responsibilities.

Examples:

* HomePage
* AboutPage

#### Dependency Injection via Props

Components receive data and actions through props, increasing flexibility and testability.

#### Barrel Exports

Modules expose a public API through index files.

```ts
export { HeroSection } from './HeroSection';

export type {
  HeroSectionProps,
  HeroImage,
} from './HeroSection.types';
```

---

## 📁 Project Structure

```text
src/
├── app/
│   └── router/
│
├── features/
│   ├── home/
│   │   └── pages/
│   │
│   └── about/
│       └── pages/
│
├── shared/
│   ├── components/
│   │   └── HeroSection/
│   │
│   ├── hooks/
│   ├── types/
│   └── utils/
│
└── assets/

cypress/
├── component/
│   └── HeroSection.cy.tsx
│
├── e2e/
│   ├── home.cy.ts
│   ├── about.cy.ts
│   └── navigation.cy.ts
│
└── support/

.storybook/
```

---

## 🖥️ Getting Started

### Prerequisites

* Node.js 22+
* npm
* Docker (optional)

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd profile-project
```

Install dependencies:

```bash
npm install
```

---

## 💻 Development

Start the development server:

```bash
npm run dev
```

Application:

```text
http://localhost:5173
```

---

## 🐳 Docker

Build and start the application:

```bash
docker compose up --build
```

Run in detached mode:

```bash
docker compose up -d --build
```

Stop containers:

```bash
docker compose down
```

---

## 📚 Storybook

Storybook is used to develop and document UI components in isolation.

Start Storybook:

```bash
npm run storybook
```

Open:

```text
http://localhost:6006
```

### Current Stories

* HeroSection

Benefits:

* Component documentation
* Visual development
* Isolated testing
* Design collaboration

---

## 🧪 Testing

The project uses a layered testing strategy.

### Unit Tests

Run:

```bash
npm run test:run
```

Watch mode:

```bash
npm run test
```

### Cypress Component Tests

Component tests validate UI components in isolation.

Example:

* HeroSection

Run:

```bash
npm run cypress:open
```

### Cypress End-to-End Tests

E2E tests validate complete user journeys.

Covered scenarios:

* Home page rendering
* About page rendering
* Navigation between pages
* User interactions

Run:

```bash
npm run test:e2e
```

---

## 🔍 Code Quality

### ESLint

Run:

```bash
npm run lint
```

### Prettier

Format source code:

```bash
npm run format
```

---

## ⚙️ Git Hooks

The project uses **Husky** and **lint-staged** to automate quality checks.

### Pre-Commit

Runs:

```bash
npx lint-staged
npm run test:run
```

Checks:

* Code formatting
* ESLint rules
* Unit tests

### Pre-Push

Runs:

```bash
npm run test:e2e
```

Checks:

* End-to-End tests

This ensures code quality before changes reach the repository.

---

## 🎯 Features

### Home Feature

* Responsive hero section
* Image support
* Call-to-action buttons
* Navigation to About page

### About Feature

* Feature-specific page
* Navigation back to Home page
* Demonstrates feature-based architecture

---

## 📈 Future Improvements

* CI/CD pipeline with GitHub Actions
* Automated deployment
* Visual regression testing
* Accessibility testing
* Performance monitoring
* Internationalization (i18n)
* Dark mode support
* API integration
* Authentication

---

## 👨‍💻 Author

**Atef Chelaghma**

Senior Frontend Developer specializing in:

* React
* TypeScript
* Frontend Architecture
* Testing
* Design Systems
* Developer Experience

---

## 📄 License

This project is available for educational and portfolio purposes.
