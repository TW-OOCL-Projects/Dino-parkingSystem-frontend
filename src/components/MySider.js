import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
const { Sider } = Layout;

export default class MySider extends React.Component {
    render() {
        const status = localStorage.getItem("status")
        return (
            
            <Sider width={200} style={{ background: '#fff' }}>
            
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[`${status}`]}
                    style={{ height: '100%' }}
                >
                    
                    <Menu.Item key="1">
                        <Link to="/App/EmployeeManage" onClick={ev => localStorage.setItem("status","1")}>
                            <Icon type="form" />
                            <span>员工管理</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Link to="/App/ParkingLotManage" onClick={ev => localStorage.setItem("status","2")}>
                            <Icon type="form" />
                            <span>停车场管理</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="3">
                        <Link to="/App/ParkingBoyManage" onClick={ev => localStorage.setItem("status","3")}>
                            <Icon type="form" />
                            <span>停车员管理</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="4">
                        <Link to="/App/ParkingLotDashboard" onClick={ev => localStorage.setItem("status","4")}>
                            <Icon type="form" />
                            <span>停车场Dashboard</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="5">
                        <Link to="/App/OrderManage"  onClick={ev => localStorage.setItem("status","5")}>
                            <Icon type="form" />
                            <span>订单管理</span>
                        </Link>
                    </Menu.Item>
                </Menu>
                                    
            </Sider>
            
        );
    }
}