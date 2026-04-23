# Unit testing in JS - Workshop

This repository is used in a workshop for Master's Degree students of Computer Engineering at the University of Genoa, in their Software Engineering course.

The goal of the workshop is to teach Unit Testing through hands-on experience using JavaScript as the programming language.

## Setup
- Local install: 
    - Install [Node.js](https://nodejs.org/en/download)
    - Open a terminal and run `npm install` in the root directory to install dependencies
- GitHub codespace: Click the "Code" button on GitHub and select "Open with Codespaces", then after everything has loaded run `npm install` in the terminal.

### Troubleshooting
If you have any trouble during the installation, try to follow these steps:

- Make sure you have Node.js version 14 or higher installed
- Reboot the PC
- Run `npm install` in the root directory
- If tests don't run, try `npx jest` to run Jest directly

## Running the tests

The unit test projects are already set up for each project. Here is a list of commands to run the tests. Open a terminal in the repository and run the commands below.

To run all tests at once:
```sh
npm test
```

To run only the tests from the exercise you are working on:
```sh
npm test -- --testPathPattern=01-isolated-functions
```

## Jest

For this workshop, we will use JavaScript with Jest as the testing framework. See the [JEST_CHEATSHEET](JEST_CHEATSHEET.md) section to learn more about Jest and the code conventions we will use.

## Exercises

There are five exercises in the repository. Their goals are to teach the basics of unit testing, refactoring, and mocking.

### Ex. 1: Factorial
Let's start writing unit tests for a function that computes the factorial of a number.

**The goal:** To understand how to write basic unit tests using Jest and practice testing pure functions with various inputs and edge cases.

### Ex. 2: Safe Refactoring
Our legacy project has some really bad, but working, code that needs improvement. Since we have comprehensive tests, we can refactor safely.

**The goal:** to practice refactoring code while maintaining test coverage and ensuring existing functionality is preserved.

### Ex. 3: Dependencies
We have a function that depends on an external API to fetch data. We want to test our function without making actual API calls, so we need to mock the dependencies.

We also have code that logs data, and we need to ensure that we are logging the correct information.

**The goal:** to learn how to mock dependencies in unit tests and verify interactions with those dependencies.

### Ex. 4: Test Builders
Our coffee shop project has a lot of complex objects that we need to create for our tests. To make our tests cleaner and more maintainable, we can use test builders to create these objects.

**The goal:** to understand the concept of test builders and how they can help create complex test data in a clean and maintainable way.

### Ex. 5: Integration Example
Let's bring it all together with a more realistic scenario involving multiple classes and interactions.

**The goal:** to practice writing both unit tests and integration tests in a realistic application context.