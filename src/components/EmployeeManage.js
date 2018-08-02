import React from 'react';
import { Layout, Input, Select, Button, Table, Divider, Form, Modal, Alert, AutoComplete, } from 'antd';
import {Link} from 'react-router-dom'
import ResourceAPi from '../api/ResourceAPI';
import AddEmployee from './AddEmployee';
import ModifyEmployee from './ModifyEmployee';

const { Content } = Layout;
const {Search} = Input;
const {Option} = Select;


  
  const data = [
    { key: 1, id: '1', name: 'John Brown', email: '1234@aa.com', phone: '12313132121'},
    { key: 2, id: '2', name: 'Jim Green', email: '1235@aa.com', phone: '12313132122'},
    { key: 3, id: '3', name: 'Joe Black', email: '1236@aa.com', phone: '12313132123'},
  ];

export default class EmployeeManage extends React.Component {
    state = {
        addVisible: false,
        modifyVisible: false,
    };

    columns = [
        { title: 'ID', dataIndex: 'id', key: 'id'},
        {title: '用户名', dataIndex: 'username', key: 'username'},
        { title: '姓名', dataIndex: 'nickname', key: 'nickname' },
        { title: 'E-mail', dataIndex: 'email', key: 'email' },
        { title: '电话号码', dataIndex: 'phone', key: 'phone' },
        { title: '操作', key: 'operation', render: (text, record) => (
            <span>
                <a onClick={this.showModifyModal}>修改</a>
                <Divider type='vertical' />
                <a href='#'>冻结</a>
            </span>
        ),
    },
        // { title: 'Action', dataIndex: 'phone', key: 'x', render: () => <a href="javascript:;">Delete</a> },
      ];

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

    showModifyModal = () => {
        this.setState({ modifyVisible: true });
    }

    handleModifyCancel = () => {
        this.setState({ modifyVisible: false });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }
    componentDidMount() {
        this.props.getAllEmployees();
    }
    render() {
        const {employees} = this.props;
        return (
            
            <Content  style={{ padding: '0 24px', minHeight: 280 }}>
                <ModifyEmployee
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.modifyVisible}
                    onCancel={this.handleModifyCancel}
                    onCreate={this.handleCreate}
                    getAllEmployees={this.props.getAllEmployees}
                />
                <AddEmployee
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.addVisible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    getAllEmployees={this.props.getAllEmployees}
                />
                <div align='right'>
                <Button type='primary' onClick={this.showModal}>新增</Button>
                <Select style={{width: 100}}>
                    <Option value = 'id'>id</Option>
                    <Option value = 'username'>用户名</Option>
                    <Option value = 'nickname'>姓名</Option>
                    <Option value = 'email'>email</Option>
                    <Option value = 'phone'>电话号码</Option>
                </Select>
                <Search style={{width: 200}}
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    enterButton
                />
                </div>
                <Table
                    columns={this.columns}
                    // expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    dataSource={employees}
                />
            </Content>
        );
    }
}

// const FormItem = Form.Item;
// const AutoCompleteOption = AutoComplete.Option;
// const AddEmployee = Form.create()(
//     class extends React.Component {
//         state = {
//             confirmDirty: false,
//             autoCompleteResult: [],
//             addVisible: false,
//             context: '',
//         };

//         getStatusCode(statusCode) {
//             if (statusCode === 201) {
//                 this.setState({
//                     addVisible: true,
//                     context: <Alert message="Success Text" type="success" />,
//                 })
//             } else {
//                 this.setState({
//                     addVisible: true,
//                     context: <Alert message="Error Text" type="error" />,
//                 })
//             }
//         }
//         handleSubmit = (e) => {
//             e.preventDefault();
//             this.props.form.validateFieldsAndScroll((err, values) => {
//                 if (!err) {
//                     console.log('Received values of form: ', values);
//                     ResourceAPi.addEmployee(values, (statusCode) => this.getStatusCode(statusCode));
//                 }
//             });
//         }

//         handleConfirmBlur = (e) => {
//             const value = e.target.value;
//             this.setState({ confirmDirty: this.state.confirmDirty || !!value });
//         }

//         compareToFirstPassword = (rule, value, callback) => {
//             const form = this.props.form;
//             if (value && value !== form.getFieldValue('password')) {
//                 callback('Two passwords that you enter is inconsistent!');
//             } else {
//                 callback();
//             }
//         }

//         validateToNextPassword = (rule, value, callback) => {
//             const form = this.props.form;
//             if (value && this.state.confirmDirty) {
//                 form.validateFields(['confirm'], { force: true });
//             }
//             callback();
//         }

//         handleWebsiteChange = (value) => {
//             let autoCompleteResult;
//             if (!value) {
//                 autoCompleteResult = [];
//             } else {
//                 autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
//             }
//             this.setState({ autoCompleteResult });
//         }
//         showModal = () => {
//             this.setState({
//                 addVisible: true,
//             });
//         }

//         handleOk = () => {
//             this.setState({ addVisible: false });
//             this.props.onCancel();
//             this.props.form.resetFields();
//         }

//         render() {
//             const { getFieldDecorator } = this.props.form;
//             const { autoCompleteResult } = this.state;

//             const formItemLayout = {
//                 labelCol: {
//                     xs: { span: 24 },
//                     sm: { span: 8 },
//                 },
//                 wrapperCol: {
//                     xs: { span: 24 },
//                     sm: { span: 16 },
//                 },
//             };
//             const tailFormItemLayout = {
//                 wrapperCol: {
//                     xs: {
//                         span: 24,
//                         offset: 0,
//                     },
//                     sm: {
//                         span: 16,
//                         offset: 8,
//                     },
//                 },
//             };

//             const websiteOptions = autoCompleteResult.map(website => (
//                 <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
//             ));
//             return (
//                 <Modal
//                     addVisible={this.props.addVisible}
//                     title="Create a new collection"
//                     okText="Create"
//                     onCancel={this.props.onCancel}
//                     onOk={this.handleSubmit}
                    
//                 >
//                 <Form onSubmit={this.handleSubmit}>
//                     <Modal
//                         addVisible={this.state.addVisible}
//                         title="Title"
//                         onOk={this.handleOk}
//                         onCancel={this.handleCancel}
//                         footer={[
//                             <Link to='/App/EmployeeManage'><Button key="submit" type="primary" onClick={this.handleOk}>
//                                 Submit
//                 </Button></Link>,
//                         ]}
//                     >
//                         {this.state.context}
//                     </Modal>
//                     <FormItem
//                         {...formItemLayout}
//                         label="账号"
//                     >
//                         {getFieldDecorator('username', {
//                             rules: [{
//                                 required: true, message: 'Please input your username!',
//                             }, {
//                                 validator: this.validateToNextPassword,
//                             }],
//                         })(
//                             <Input />
//                         )}
//                     </FormItem>
//                     <FormItem
//                         {...formItemLayout}
//                         label="姓名"
//                     >
//                         {getFieldDecorator('nickname', {
//                             rules: [{
//                                 required: true, message: 'Please input your E-mail!',
//                             }],
//                         })(
//                             <Input />
//                         )}
//                     </FormItem>
//                     <FormItem
//                         {...formItemLayout}
//                         label="E-mail"
//                     >
//                         {getFieldDecorator('email', {
//                             rules: [{
//                                 type: 'email', message: 'The input is not valid E-mail!',
//                             }, {
//                                 required: true, message: 'Please input your E-mail!',
//                             }],
//                         })(
//                             <Input />
//                         )}
//                     </FormItem>
//                     <FormItem
//                         {...formItemLayout}
//                         label="电话号码"
//                     >
//                         {getFieldDecorator('phone', {
//                             rules: [{ required: true, message: 'Please input your phone number!' }],
//                         })(
//                             <Input />
//                         )}
//                     </FormItem>
//                 </Form>
//                 </Modal>
//             );
//         }
//     }
// )