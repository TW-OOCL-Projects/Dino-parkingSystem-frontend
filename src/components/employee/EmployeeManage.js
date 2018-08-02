import React from 'react';
import { Layout, Input, Select, Button, Table, Divider } from 'antd';
import {Link} from 'react-router-dom'
const { Content } = Layout;
const {Search} = Input;
const {Option} = Select;

const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id'},
    { title: '姓名', dataIndex: 'nickname', key: 'nickname' },
    { title: 'E-mail', dataIndex: 'email', key: 'email' },
    { title: '电话号码', dataIndex: 'phone', key: 'phone' },
    { title: '操作', key: 'operation', render: (text, record) => (
        <span>
            <a href='#'>修改</a>
            <Divider type='vertical' />
            <a href='#'>冻结</a>
        </span>
    ),
},
    // { title: 'Action', dataIndex: 'phone', key: 'x', render: () => <a href="javascript:;">Delete</a> },
  ];
  
  const data = [
    { key: 1, id: '1', name: 'John Brown', email: '1234@aa.com', phone: '12313132121'},
    { key: 2, id: '2', name: 'Jim Green', email: '1235@aa.com', phone: '12313132122'},
    { key: 3, id: '3', name: 'Joe Black', email: '1236@aa.com', phone: '12313132123'},
  ];

export default class EmployeeManage extends React.Component {
    componentDidMount() {
        this.props.getAllEmployees();
    }
    render() {
        const {employees} = this.props;
        return (
            
            <Content  style={{ padding: '0 24px', minHeight: 280 }}>
                <Link to='/AddEmployee'><Button type='primary'>新增</Button></Link>
                <Select defaultValue='id' style={{width: 100}}>
                    <Option value = 'id'>id</Option>
                    <Option value = '姓名'>姓名</Option>
                    <Option value = 'email'>email</Option>
                    <Option value = '电话号码'>电话号码</Option>
                </Select>
                <Search style={{width: 200}}
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    enterButton
                />
                <Table
                    columns={columns}
                    // expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    dataSource={employees}
                />
            </Content>
            
        );
    }
}