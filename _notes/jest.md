 Jest can be used for your React component tests. It’s the official testing library by __**Facebook**__. Jest introduced the so called __snapshot__ tests which can be used perfectly as supplement to your React unit and integration tests with Enzyme.


Basically a snapshot test creates a snapshot of your rendered component’s output when you run your test. This snapshot is used for diffing it to the next snapshot when you run your test again. If your rendered component’s output has changed, the diff of both snapshots will show it and the snapshot test will fail. 

It’s more about the rendered output and less about the business logic of the component. The business logic can be well tested by using Enzyme instead. 

Install
```
    npm install --save-dev jest react-test-renderer
```

Create jest.config.json
```
    {
    "testRegex": "((\\.|/*.)(snapshot))\\.js?$",
    "rootDir": ".."
    }
```

Run
```
    "test:snapshot": "jest --config ./test/jest.config.json",
```