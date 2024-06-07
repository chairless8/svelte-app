# Svelte Application Documentation
This repository contains a Svelte application developed as part of a coding challenge. The application includes several key functionalities, each designed to demonstrate specific capabilities and integrations.

## Components and Features

### Test 1: Dynamic Search Component

**Objective:** Create a dynamic search component using Svelte and Tailwind CSS.

**Details:**
- The component features a search input that allows users to type queries.
- Results are displayed dynamically as the user types, using a predefined list of items.
- A debounce function is implemented to limit the number of search operations, enhancing performance.
- The component is styled with Tailwind CSS to ensure it is responsive and visually appealing.

### Test 2: API Integration Component

**Objective:**
Build a Svelte component that fetches and displays data from a Go backend API.

**Details:**
- The component is configured to fetch data from a specified API endpoint that returns a list of users in JSON format.
- It displays this data in a list format within the application.
- Basic error handling is included to manage potential issues during API calls.

### Test 3: End-to-End Test with Playwright

**Objective:**
Write an end-to-end test for a Svelte application using Playwright.

**Details:**
- The test setup involves creating a simple Svelte application with a contact form.
- The form includes fields for Name, Email, and Message, and basic form validation is implemented.
- A Playwright test script is used to automate the process of loading the application, filling out the form, submitting it, and verifying that a success message is displayed.

## Development and Testing
The application is developed using the Svelte framework and styled with Tailwind CSS. Playwright is used to perform end-to-end testing to ensure the application functions correctly across different scenarios.

## Installation and Running
Instructions for installing dependencies and running the application and tests:

# To install the dependencies, run:
npm install

# To start the application, run:
npm run dev

# To execute Playwright tests, run:
npx playwright test


## Conclusion
This README outlines the functionalities and components implemented in this Svelte application as part of the coding challenge. The application is designed to showcase interactive features, API integration, and the robustness of end-to-end testing capabilities.
