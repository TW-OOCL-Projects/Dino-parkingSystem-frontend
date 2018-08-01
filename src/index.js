import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import ParkingLotDashboardAPI from './api/ParkingLotDashboardAPI'
import {createStore} from 'redux'
import rootReducer from './reducers/index'
import {Provider} from "react-redux"
import {showParkingLotsList} from './actions/index'

const store = createStore(rootReducer)

ReactDOM.render(

    
  <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Login}></Route>
                <Route  path="/App" component={App}></Route> 
            </div>
        </Router>
    </Provider>

, document.getElementById('root'));

registerServiceWorker();
