import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default class MyFooter extends React.Component {
    render() {
        return (
            
            <Footer style={{ textAlign: 'center' }}>
                Parking System ©2018 Created by Dino
            </Footer>
            
        );
    }
}