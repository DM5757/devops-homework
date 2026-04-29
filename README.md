# CI/CD Pipeline Homework (Express + GitHub Actions)

## Live Application

`https://your-live-app-url.example.com`

## Screenshots

- Home page screenshot: *(placeholder)*
- Health endpoint screenshot: *(placeholder)*

## Project Overview

This beginner-friendly Node.js + Express app is used to demonstrate CI/CD pipeline automation and deployment strategies.

### CI (Continuous Integration)

On every push and pull request, GitHub Actions runs the automated test suite first (`npm test`). This ensures the application still behaves correctly before any deployment attempt.

### CD (Continuous Delivery / Deployment)

After the CI tests pass, GitHub Actions can deploy the updated service.

In this homework, CD only runs when:
- the event is a `push`
- the branch is `main`
- the test job completed successfully

## Deployment Strategy: Rolling Deployment

The chosen strategy is **Rolling Deployment**. With this approach, Render redeploys the service in a way that targets minimal downtime by transitioning to the new version while the service remains available.

Render redeploys the service **only after** GitHub Actions confirms that tests pass, reducing the chance of shipping broken changes.

## Rollback Guide (Render)

1. Open Render Dashboard  
2. Select the service  
3. Go to Deploys  
4. Choose the previous successful deploy  
5. Click Rollback / Redeploy previous deploy  
6. Verify the live app and `/health` route

## Local Development

Install dependencies and run the app locally:

```bash
npm install
npm start
```

Run tests:

```bash
npm test
```

test readme change