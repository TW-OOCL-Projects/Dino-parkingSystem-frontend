import React from 'react';
import { Layout } from 'antd';
import  MyTable  from "./MyTable";
const { Content } = Layout;


export default class EmployeeManage extends React.Component {
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