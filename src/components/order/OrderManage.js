import React from 'react';
import { Layout, Input, Select, Button, Table, Divider, Form, Modal, Alert, AutoComplete, } from 'antd';
import {Link} from 'react-router-dom'
import ResourceAPi from '../../api/ResourceAPI';
import AddEmployee from '../employee/AddEmployee';
import ModifyEmployee from '../employee/ModifyEmployee';

const { Content } = Layout;
const {Search} = Input;
const {Option} = Select;

export default class OrderManage extends React.Component {
    state = {
        addVisible: false,
        modifyVisible: false,
        employeeId: undefined,
        context: '',
    };

    columns = [
        { title: 'ID', dataIndex: 'id', key: 'id'},
        {title: '车牌号', dataIndex: 'plateNumber', key: 'platenumber'},
        { title: '类型', dataIndex: 'type', key: 'nickname' },
        { title: '状态', dataIndex: 'status', key: 'status' },
        { title: '操作', key: 'operation', render: (text, record) => (
            <span>
                <a onClick={() => this.changeEmployeeStatus(record.id, record.status)}>{record.status === 'nohandle' ? '指派' : ''}</a>
            </span>
        ),
    },
        // { title: 'Action', dataIndex: 'phone', key: 'x', render: () => <a href="javascript:;">Delete</a> },
      ];

    changeEmployeeStatus = (employeeId, employeeStatus) => {
        employeeStatus = employeeStatus ? false : true;
        ResourceAPi.changeEmployeeStatus(employeeId, employeeStatus, (statusCode) => this.getStatusCode(statusCode))
    }

    getStatusCode(statusCode) {
        if (statusCode === 204) {
            this.setState({
                statusVisible: true,
                context: <Alert message="Success Text" type="success" />,
            })
        } else {
            this.setState({
                statusVisible: true,
                context: <Alert message="Error Text" type="error" />,
            })
        }
    }

    showModal = () => {
        this.setState({ addVisible: true });
    }

    handleCancel = () => {
        this.setState({ addVisible: false });
    }

    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ addVisible: false });
        });
    }

    showModifyModal = (employeeId) => {
        this.setState({ 
            modifyVisible: true,
            employeeId: employeeId,
        });
    }

    handleModifyCancel = () => {
        this.setState({ modifyVisible: false });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    handleOk = () => {
        this.props.getAllEmployees();
          this.setState({ statusVisible: false });
      }

    componentDidMount() {
        this.props.getAllOrders();
    }
    render() {
        const {orders} = this.props;
        return (
            
            <Content  style={{ padding: '0 24px', minHeight: 280 }}>
                <Modal
                    visible={this.state.statusVisible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Link to='/App/EmployeeManage'>
                            <Button key="submit" type="primary" onClick={this.handleOk}>
                                确定
                            </Button>
                        </Link>,
                    ]}
                >
                    {this.state.context}
                </Modal>
                <ModifyEmployee
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.modifyVisible}
                    onCancel={this.handleModifyCancel}
                    onCreate={this.handleCreate}
                    getAllEmployees={this.props.getAllEmployees}
                    employeeId={this.state.employeeId}
                />
                <AddEmployee
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.addVisible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    getAllEmployees={this.props.getAllEmployees}
                />
                <span style={{float:'right'}}>
                <Select style={{width: 100}}>
                    <Option value = 'id'>id</Option>
                    <Option value = 'platenumber'>车牌号</Option>
                    <Option value = 'type'>类型</Option>
                    <Option value = 'status'>状态</Option>
                </Select>
                <Search style={{width: 200}}
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    enterButton
                />
                </span>
                <Table
                    columns={this.columns}
                    // expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    dataSource={orders}
                />
            </Content>
        );
    }
}