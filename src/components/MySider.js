import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
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
                            <Icon type="form" />
                            <span>员工管理</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="form" />
                            <span>停车场管理</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="form" />
                            <span>停车员管理</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="form" />
                            <span>停车场Dashboard</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="form" />
                            <span>订单管理</span>
                        </Menu.Item>
                    </Menu>

                    
                </Sider>
            </div>
        );
    }
}