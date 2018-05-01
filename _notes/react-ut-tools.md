
## Setup
- Enzyme is used to test React component
    elements rendered
    props passed to component
    simulate event like click
    state changes

```
    npm install --save-dev enzyme
    npm install --save-dev enzyme-adapter-react-16
```

    + shallow() is the simplest form of rendering a component with Enzyme. It only renders the component but not the content of components which are children to this component. It makes it possible to test the component in isolation. Be used for component tests in isolation (unit tests, lightweight integration).

    + mount() renders all child components as well. It renders the whole component hierarchy. 
    It is used for real integration tests.

    + render() is similar to mount(), it renders all child components. But from a performance point of view, it is less expensive than mount(), because it doesn’t run the lifecycle methods of the component. So if you need access to child components but are not interested in lifecycle methods, you can use render() instead of mount().

    If you would want to use more integration tests than unit tests, you would go for mount() or render() instead of shallow() in your component tests. 

- sinno can be used for spies, stubs, and mocks. For example: asynchronous data fetching. 
```
    npm install --save-dev sinon
```

- Jsdom can create this artificial browser environment for React components.
```
npm install --save-dev jsdom
```

- ignore-styles: Make the styling of the component shouldn’t affect the tests
```
    npm install --save-dev ignore-styles
```
