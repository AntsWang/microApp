import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from "react-router-dom";
import styles from './login.css';
import { useForm } from 'antd/lib/form/Form';
import { createActions } from '../../reducer/store';
import {useDispatch, useSelector} from "react-redux";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Login = () => {
    const count = useSelector(state=>state.count);
    const dispatch = useDispatch();
    const [form] = useForm();
    const history = useHistory();
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const login = (e) => {
        const name = form.getFieldsValue("");
        dispatch(createActions("count"));
        // setTimeout(() => {
        //     history.replace('/home');
        // }, 2000);

        console.log(Form,form,name,e);

    }

    return (
        <div className={styles.wraper}>
            <div className={styles.formDiv}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                        username:"admin",
                        password:"admin"
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密   码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div>abc{count}</div>
        </div>
    );
};

export default Login;