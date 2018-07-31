import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
const { Sider } = Layout;

export default class MySider extends React.Component {
    render() {
        return (
            <div>
                <Sider width={200} style={{ background: '#fff' }}>
                
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%' }}
                    >
                       
                        <Menu.Item key="1">
                            <Link to="EmployeeManage">
                                <Icon type="form" />
                                <span>员工管理</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="2">
                            <Link to="ParkingLotManage">
                                <Icon type="form" />
                                <span>停车场管理</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="3">
                            <Link to="ParkingBoyManage">
                                <Icon type="form" />
                                <span>停车员管理</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="4">
                            <Link to="ParkingLotDashboard">
                                <Icon type="form" />
                                <span>停车场Dashboard</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="5">
                            <Link to="OrderManage">
                                <Icon type="form" />
                                <span>订单管理</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                                       
                </Sider>
            </div>
        );
    }
}