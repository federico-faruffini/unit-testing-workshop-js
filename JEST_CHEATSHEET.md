# Jest Testing Cheat Sheet

Quick reference for unit testing with Jest

## Running Tests

```bash
npm test              # Run all tests once
npm run test:watch   # Run tests, re-run on file changes
npm run test:coverage # Run with coverage report
```

---

## Test Structure

```javascript
describe('ClassName', () => {
  let instance;

  beforeEach(() => {
    // Runs before EACH test
    instance = new ClassName();
  });

  afterEach(() => {
    // Runs after EACH test
  });

  describe('methodName', () => {
    it('should do something specific', () => {
      // Arrange: Set up test data
      const input = 'test';
      
      // Act: Call the code
      const result = instance.method(input);
      
      // Assert: Verify the result
      expect(result).toBe('expected');
    });
  });
});
```


## Setup & Teardown

```javascript
beforeEach(() => {
  // Runs before each test
});

afterEach(() => {
  // Runs after each test
});

beforeAll(() => {
  // Runs once before all tests
});

afterAll(() => {
  // Runs once after all tests
});
```

---

## Common Assertions

### Equality & Identity
```javascript
expect(value).toBe(5);              // Strict equality (===)
expect(obj).toEqual({id: 1});       // Deep equality
expect(value).not.toBe(5);          // Negate any matcher
```

### Truthiness
```javascript
expect(value).toBeTruthy();         // Truthy value
expect(value).toBeFalsy();          // Falsy value (false, 0, '', null, undefined)
```

### Strings
```javascript
expect(str).toContain('substring');
expect(str).toMatch(/regex/);
expect(str).toHaveLength(5);
```

### Arrays & Objects
```javascript
expect(array).toHaveLength(3);
expect(array).toContain('item');
expect(obj).toHaveProperty('name', 'John');
```

### Errors
```javascript
expect(() => fn()).toThrow();                    // Throws any error
expect(() => fn()).toThrow('error message');    // Specific message
expect(() => fn()).toThrow(CustomError);        // Specific error type
```

---

## Mocking & Spying

### Creating Mock Functions
```javascript
const mockFn = jest.fn();
const mockFn = jest.fn().mockReturnValue(42);
const mockFn = jest.fn().mockResolvedValue('data');
const mockFn = jest.fn().mockRejectedValue(new Error('fail'));
```

### Verifying Mock Calls
```javascript
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledTimes(2);
expect(mockFn).toHaveBeenCalledWith(arg1, arg2);
expect(mockFn).toHaveBeenLastCalledWith(arg1, arg2);
expect(mockFn).not.toHaveBeenCalled();
```

### Inspecting Mock Call Data
```javascript
mockFn.mock.calls;           // Array of all calls
mockFn.mock.calls[0];        // Arguments of first call
mockFn.mock.results;         // Return values of each call
mockFn.mock.results[0].value; // Return value of first call
```

### Creating Stubs
```javascript
const stub = {
  getWeather: async (city) => {
    if (city === 'Paris') return { temp: 20 };
    return { temp: 15 };
  }
};
const service = new Service(stub);
```

---

## Async Testing

### Testing Promises
```javascript
describe('async functions', () => {
  it('should resolve promise', async () => {
    const result = await myAsyncFunction();
    expect(result).toBe('done');
  });

  it('should handle errors', async () => {
    await expect(failingFunction()).rejects.toThrow();
  });
});
```


## Test Organization Best Practices

###  Good Test Names
- Describe what should happen
- `should add two positive numbers`
- `should throw error for invalid input`
- `should return empty array when the cart contains no items`

### Bad Test Names
-  `works`
-  `test 1`
-  `it should do it`

###  One Assertion Per Test (Usually)
```javascript
// Good - focused test
it('should calculate tax', () => {
  const result = calculator.add(100);
  expect(result).toBe(120);
});

// Okay - related assertions
it('should validate email', () => {
  expect(validator.isValid('user@example.com')).toBe(true);
  expect(validator.isValid('invalid')).toBe(false);
});
```

### ✅ Test Happy Path & Edge Cases
```javascript
describe('divide', () => {
  it('should divide numbers');              // Happy path
  it('should throw for division by zero');  // Edge case
  it('should handle decimals');            // Edge case
});
```

---

## Builder Pattern Template

```javascript
class UserBuilder {
  constructor() {
    this.id = 1;
    this.name = 'John Doe';
    this.email = 'john@example.com';
    this.role = 'user';
  }

  withAdmin() {
    this.role = 'admin';
    return this;  // Enable chaining!
  }

  withName(name) {
    this.name = name;
    return this;
  }

  build() {
    return new User(this.id, this.name, this.email, this.role);
  }
}

// Usage
const user = new UserBuilder().withAdmin().withName('Alice').build();
```

---

## Debugging Tests

```javascript
// Print value for inspection
console.log(value);

// Pause execution (in tests)
it('test', () => {
  debugger;  // Opens debugger when running in debug mode
});

// Run specific test only
it.only('specific test', () => {
  // Only this test runs
});

// Skip test
it.skip('skip this test', () => {
  // This test is skipped
});
```

---

## Resources
You can find more information in the [Jest Documentation](https://jestjs.io/).