import {createStore , applyMiddleware} from 'redux';
import { ReactReduxContext } from "react-redux";
ReactReduxContext;

import reducers from '../reducers';

let store=createStore(reducers,{} ,applyMiddleware());

export default store;