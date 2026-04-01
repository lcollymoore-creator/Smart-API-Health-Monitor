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
