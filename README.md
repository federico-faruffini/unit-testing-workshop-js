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

## Exercises

There are five exercises in the repository. Their goals are to teach the basics of unit testing, refactoring, and mocking.

The unit test projects are already set up for each project. Here is a list of commands to run the tests. Open a terminal in the repository and run the commands below.

To run all tests at once:
```sh
npm test
```

To run only the tests from the exercise you are working on:
```sh
npm test -- --testPathPattern=01-isolated-functions
```

For this workshop, we will use JavaScript with Jest as the testing framework. See the [JEST_CHEATSHEET](JEST_CHEATSHEET.md) section to learn more about Jest and the code conventions we will use.