import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import Header from './components/Router/Header/Header';
import AppRoutes from './components/Router/Routes/Routes';
import {Provider} from 'react-redux';
import {store} from './store/store';

function App() {
    return (
        <HashRouter>
            <Provider store={store}>
                <div className="App">
                    <Header/>
                    <AppRoutes/>
                </div>
            </Provider>
        </HashRouter>
    );
}

export default App;
