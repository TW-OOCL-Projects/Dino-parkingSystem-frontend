import React, { Component } from 'react';
import { Layout } from 'antd';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import  MyHeader  from "./components/MyHeader";
import  MySider  from "./components/MySider";
import  EmployeeManage  from "./components/EmployeeManage";
import  ParkingLotManage  from "./components/ParkingLotManage";
import  ParkingBoyManage  from "./components/ParkingBoyManage";
import  ParkingLotDashboard  from "./components/ParkingLotDashboard";
import  OrderManage  from "./components/OrderManage";
import  MyFooter  from "./components/MyFooter";

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

              <MySider />

              <Route exact path="/" component={EmployeeManage}></Route>
              <Route  path="/ParkingLotManage" component={ParkingLotManage}></Route> 
              <Route  path="/ParkingBoyManage" component={ParkingBoyManage}></Route>
              <Route  path="/ParkingLotDashboard" component={ParkingLotDashboard}></Route> 
              <Route  path="/OrderManage" component={OrderManage}></Route>    

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
