import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducers/index'
import Index from './components/page/Index'
import Statistic from './components/page/Statistic'
import Management from './components/page/Management'
import Salary from './components/page/Salary'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {Router, Route, browserHistory, IndexnpmRoute, IndexRoute} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="" component={App}>
                <Route path="/" component={Index}></Route>
                <Route path="thongke" component={Statistic}/>

                <Route path="quanly" component={Management}/>
                <Route path="quanlyluong" component={Salary}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);