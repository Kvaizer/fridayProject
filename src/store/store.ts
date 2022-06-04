import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {testReducer1} from './reducers/testReducer1';
import {testReducer2} from './reducers/testReducer2';

const rootReducer = combineReducers({
    test1: testReducer1,
    test2: testReducer2,
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

// Для Thunk
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store