import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';

function* rootSaga() {
    yield takeEvery('FETCH_USERS', fetchUsers)
};

function* fetchUsers() {
    try {
        const userResponse = yield call(axios.get, '/spike')
        yield put({ type: 'SET_USERS', payload: userResponse.data })
    } catch (error) {
        console.log('error getting users', error);
    }
};


const sagaMiddleware = createSagaMiddleware();

const userList = (state = [], action) => {
    switch (action.type) {
        case 'SET_USERS':
            return action.payload
        default:
            return state;
    };
};

const store = createStore(
    combineReducers({ userList }),
    applyMiddleware(
        logger,
        sagaMiddleware,
    )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
