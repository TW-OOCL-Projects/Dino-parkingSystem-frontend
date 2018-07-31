import React, { Component } from 'react';

// import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import  MyHeader  from "./components/MyHeader";
import  MyFooter  from "./components/MyFooter";
import  MySider  from "./components/MySider";
import  MyContent  from "./components/MyContent";
import  MyTable  from "./components/MyTable";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <MyHeader />

          <Content style={{ padding: '0 50px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}

            <Layout style={{ padding: '24px 0', background: '#fff' }}>

              <MySider />
          
              <MyContent />
              {/* <Content>
                  <MyTable />
              </Content> */}

            </Layout>
          </Content>

          <MyFooter />
        </Layout>,
      </div>
    );
  }
}

export default App;
