import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import A2zAppReducer from './reducer'


let store = createStore (
    A2zAppReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>]
    </BrowserRouter>,
    document.getElementById('root')
)