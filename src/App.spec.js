import React from 'react';
import Counter from './components/Counter';
import App, {doIncrement, doDecrement} from './App';


describe('Local State', () => {
    it('should increment the counter in state', () => {
        const state = { counter: 0 };
        const newState = doIncrement(state);

        expect(newState.counter).to.equal(1);
    });

    it('should decrement the counter in state', () => {
        const state = { counter: 0 };
        const newState = doDecrement(state);

        expect(newState.counter).to.equal(-1);
    });
});


describe('App Component', () => {
    it('renders the Counter wrapper', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Counter)).to.have.length(1);
    });

    it('passes all props to Counter wrapper', () => {
        const wrapper = shallow(<App />);
        let counterWrapper = wrapper.find(Counter);

        expect(counterWrapper.props().counter).to.equal(0);

        wrapper.setState({ counter: -1 });

        counterWrapper = wrapper.find(Counter);
        expect(counterWrapper.props().counter).to.equal(-1);
    });
});