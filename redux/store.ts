import { createStore } from 'redux';
import rootReducer from './reducer';

const initialState = {
    text: "HELLO REDUX"
};

export default createStore(rootReducer, initialState);