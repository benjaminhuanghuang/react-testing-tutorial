
## Setup
- Enzyme is used for React unit testing
```
    npm install --save-dev enzyme
    npm install --save-dev enzyme-adapter-react-16
```

    + Shallow is the simplest form of rendering a component with Enzyme. It only renders the component but not the content of components which are children to this component. It makes it possible to test the component in isolation. 


- Jsdom can create this artificial browser environment for React components.
```
npm install --save-dev jsdom
```

- ignore-styles: Make the styling of the component shouldn’t affect the tests
```
    npm install --save-dev ignore-styles
```
