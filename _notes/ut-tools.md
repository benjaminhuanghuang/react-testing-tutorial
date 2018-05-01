
## Setup
- Mocha is a test runner in React applications.  
In contrast, Karma is popular for testing Angular applications.
```
    npm install --save-dev mocha
```
Run tests
```
"test:unit": "mocha 'src/**/*.spec.js'",
        
```

- Chai is used to make assertions like "Expect X to be equal to Y"
```
    npm install --save-dev chai
```

- Jsdom can create this artificial browser environment for React components.
```
    npm install --save-dev jsdom
```

- ignore-styles: Make the styling of the component shouldn’t affect the tests
```
    npm install --save-dev ignore-styles
```

