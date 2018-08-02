import React, { Component } from 'react';
import { Layout } from 'antd';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import  MyHeader  from "./components/MyHeader";
import  MySider  from "./components/MySider";
import  EmployeeManage  from "./components/EmployeeManage";
import  ParkingLotManage  from "./components/ParkingLotManage";
import  ParkingBoyManage  from "./components/ParkingBoyManage";
import  ParkingLotDashboard  from "./containers/ParkingLotDashboardContainer";
import  OrderManage  from "./components/OrderManage";
import  MyFooter  from "./components/MyFooter";
import EmployeeManageContainer from './containers/EmployeeManageContainer';
import WrappedAddEmployee from './components/AddEmployee';
import MySiderContainer from './containers/MySiderContainer';

const {Content} = Layout;

class App extends Component {

  
  


  render() {
    return (
      <div>
        <Router>
        <Layout>
          <MyHeader />

          <Content style={{ padding: '0 50px', marginTop: 20}}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>

              <MySiderContainer />
              {/* <MySider /> */}

              <Route exact path="/App/EmployeeManage" component={EmployeeManageContainer}></Route>
              <Route  path="/App/ParkingLotManage" component={ParkingLotManage}></Route> 
              <Route  path="/App/ParkingBoyManage" component={ParkingBoyManage}></Route>
              <Route  path="/App/ParkingLotDashboard" component={ParkingLotDashboard}></Route> 
              <Route  path="/App/OrderManage" component={OrderManage}></Route>    
              <Route path="/AddEmployee" component={WrappedAddEmployee}></Route>

            </Layout>
          </Content>

          <MyFooter />
        </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
