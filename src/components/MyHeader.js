import React from 'react';
import { Layout, Menu } from 'antd';
import { Col } from 'antd/lib/grid';
const { Header,Avatar,Badge } = Layout;

export default class MyHeader extends React.Component {
    render() {
        return (
            
            <Header className="header">
                <Col><Avatar shape="square" icon="user" /></Col>
                {/* <span>
                    <Badge dot><Avatar shape="square" icon="user" /></Badge>
                    </span> */}
                
            </Header>
            
        );
    }
}