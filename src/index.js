import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './js/core/reducers';
import records from './js/lib/records';
import App from './js/core/app';
import { VERSION } from './js/lib/constants';

const history = createBrowserHistory();
const store = createStore(reducers);
const update = () => records.setRecord(`ndr-${VERSION}`, store.getState());
store.subscribe(update);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.querySelector('#root'),
);
