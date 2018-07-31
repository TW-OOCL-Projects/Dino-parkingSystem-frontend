import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
        <Router>
            <div>
                <Route exact path="/" component={Login}></Route>
                <Route  path="/EmployeeManage" component={App}></Route> 
            </div>
        </Router>

, document.getElementById('root'));

registerServiceWorker();

