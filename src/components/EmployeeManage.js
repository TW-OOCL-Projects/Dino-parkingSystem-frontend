import React from 'react';
import { Layout } from 'antd';
import  MyTable  from "./MyTable";
const { Content } = Layout;


export default class EmployeeManage extends React.Component {
    render() {
        return (
            
            <Content  style={{ padding: '0 24px', minHeight: 280 }}>
                <MyTable />
            </Content>
            
        );
    }
}