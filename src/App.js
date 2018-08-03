import React, { Component } from 'react';
import { Layout ,Col,Avatar,Row,Button} from 'antd';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// import  MyHeader  from "./components/MyHeader";
import  ParkingLotManage  from "./containers/ParkingLotManageContainer";
import  ParkingBoyManage  from "./components/parkingBoy/ParkingBoyManage";
import  ParkingLotDashboard  from "./containers/ParkingLotDashboardContainer";
import  OrderManage  from "./containers/OrderManageContainer";
import  MyFooter  from "./components/MyFooter";
import EmployeeManage from './containers/EmployeeManageContainer';
import WrappedAddEmployee from './components/employee/AddEmployee';
import MySider from './containers/MySiderContainer';

const {Content,Header} = Layout;

class App extends Component {

a=()=>{
console.log(1)
}
  


  render() {
    return (
      <div>
        <Router>
        <Layout>
          <Header className="header">
            <Row>
              <Col span={14}></Col>
              <Col span={9} style={{textAlign:"right"  }}>
              <Avatar style={{  backgroundColor: '#87d068' }} shape="square" icon="user" onClick={()=>{localStorage.clear("nikname");window.location.href="../"}}/>
              &nbsp;&nbsp;<span style={{  color: 'white' }}>Admin，欢迎您</span>
              </Col>     
            </Row>      
          </Header>

          <Content style={{ padding: '0 50px', marginTop: 20}}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
     
              <MySider />

              <Route exact path="/App/EmployeeManage" component={EmployeeManage}></Route>
              <Route  path="/App/ParkingLotManage" component={ParkingLotManage}></Route> 
              <Route  path="/App/ParkingBoyManage" component={ParkingBoyManage}></Route>
              <Route  path="/App/ParkingLotDashboard" component={ParkingLotDashboard}></Route> 
              <Route  path="/App/OrderManage" component={OrderManage}></Route>    
              <Route path="/App/AddEmployee" component={WrappedAddEmployee}></Route>

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
