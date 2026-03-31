# Smart-API-Health-Monitor
Just for practice


A configurable API health monitoring tool built with Playwright, designed to validate service availability, performance, and response integrity across multiple microservices.

---

## 📌 Overview

**Smart API Health Monitor** is a lightweight yet powerful tool that allows you to:

* Monitor multiple APIs from a single configuration file
* Validate response status, time, and structure
* Detect service degradation and contract changes
* Run checks in parallel for efficiency
* Integrate seamlessly with CI/CD pipelines

---

## 🧠 Tech Stack

* **Playwright** (API testing via request context)
* Node.js
* Docker
* GitHub Actions

---

## ⚙️ Features

* ✅ Config-driven service monitoring
* ⏱ Response time validation
* 📦 JSON schema validation
* ❌ Error handling (timeouts, invalid responses, server errors)
* ⚡ Parallel execution
* 📊 Clean CLI reporting
* 🔁 CI/CD ready

---

## 📂 Project Structure

```
/health-monitor
  /core
    runner.js
    httpClient.js
  /validators
    statusValidator.js
    timeValidator.js
    schemaValidator.js
  /config
    services.json
  /report
    reporter.js
  playwright.config.js
```

---

## 🧩 Configuration

Define your services in a JSON file:

```json
{
  "services": [
    {
      "name": "users-api",
      "url": "https://api.example.com/users",
      "method": "GET",
      "expectedStatus": 200,
      "maxResponseTime": 1500,
      "schema": {
        "id": "number",
        "name": "string"
      }
    }
  ]
}
```

---

## ▶️ Running Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Run health checks

```bash
node core/runner.js
```

---

## 🐳 Run with Docker

### Build image

```bash
docker build -t api-health-monitor .
```

### Run container

```bash
docker run --rm api-health-monitor
```

---

## 🔄 CI/CD with GitHub Actions

Example workflow:

```yaml
name: API Health Check

on:
  push:
    branches: [main]
  schedule:
    - cron: "*/10 * * * *" # every 10 minutes

jobs:
  health-check:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Install Playwright
        run: npx playwright install --with-deps

      - name: Run health monitor
        run: node core/runner.js
```

---

## 📊 Sample Output

```
✔ users-api (120ms)
⚠ orders-api slow (2100ms)
❌ payments-api failed (500)
```

---

## 🧠 Architecture Highlights

* Modular validator system (plug & play checks)
* Config-driven design (no code changes required)
* Parallel execution for performance
* Separation of concerns (core, validators, reporting)

---

## 🚀 Future Improvements

* Slack / Email alerts
* Historical tracking
* Dashboard UI
* Custom validation plugins

---

## 📄 License

MIT

👨‍💻 Author
Luis R Collymoore
