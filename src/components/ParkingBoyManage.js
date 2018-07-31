import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;


export default class ParkingBoyManage extends React.Component {
    render() {
        return (
            <div>
                <Content  style={{ padding: '0 24px', minHeight: 280 ,width:1300}}>
                    ParkingBoyManage
                </Content>
            </div>
        );
    }
}