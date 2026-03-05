# Enterprise UI Automation - Playwright

This project demonstrates UI automation using Playwright with JavaScript, covering login, dashboard, products, profile, and settings pages, including edge cases.

## Tech Stack
- Node.js
- Playwright
- JavaScript
- Git & GitHub

## Features
- Cross-browser testing (Chromium, Firefox, WebKit)
- Login, Dashboard, Products, Profile, and Settings automation
- Edge case tests (invalid login, empty fields, duplicate products, invalid emails)
- Structured Page Object Model (POM)
- HTML test reports
- CI/CD integration ready

## Project Structure

enterprise-ui-automation-playwright/
├── pages/ # Page objects
│ ├── loginPage.js
│ ├── dashboardPage.js
│ ├── productsPage.js
│ ├── profilePage.js
│ └── settingsPage.js
├── tests/ # Test files
│ ├── login.spec.js
│ ├── login-invalid.spec.js
│ ├── dashboard.spec.js
│ ├── products.spec.js
│ ├── product-invalid.spec.js
│ ├── profile.spec.js
│ ├── profile-invalid.spec.js
│ └── settings.spec.js
├── mock-site/ # Minimal HTML files for testing
├── package.json
└── README.md


## How to Run Tests

### Install dependencies
```bash
npm install
npx playwright install
Run all tests
npx playwright test
Run tests on all browsers
npx playwright test --browser=all
Run a single test file
npx playwright test tests/login.spec.js
Generate HTML reports
npx playwright test --reporter=html

Open the generated report:

npx playwright show-report
Edge Cases Covered

Invalid login credentials

Empty product name

Duplicate product name

Empty profile name

Invalid profile email

Optional: CI/CD Integration

You can integrate this project with GitHub Actions to run tests automatically on push.

Author

Madhurima Kuchulakanti