import { createStore } from 'redux';
import Reducer from '../reducer/reducers';

const store = createStore(Reducer);

export default store;
