import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { createStore } from 'redux';
import rootReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducers);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Login}></Route>
                <Route  path="/EmployeeManage" component={App}></Route> 
            </div>
        </Router>
    </Provider>

, document.getElementById('root'));

registerServiceWorker();

