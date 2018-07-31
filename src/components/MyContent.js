import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import  MyTable  from "./MyTable";
const { Content } = Layout;


export default class MyContent extends React.Component {
    render() {
        return (
            <div>
                <Content  style={{ padding: '0 24px', minHeight: 280 ,width:1300}}>
                    <MyTable />
                </Content>
            </div>
        );
    }
}