import React from 'react';
import { Col, Form, Row } from 'antd'
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import APP_ASSETS from '../../assets';

import "./sign-in.scss";


const SignInComponent = () => {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };


    return (
        <Row gutter={[16, 16]} align="middle" justify="center" style={{ minHeight: "100vh" }} className='sign-in-wrapper m-0'>
            <Col style={{ background: "red" }}>
            </Col>
            <Col xs={8} style={{ background: "#fff", padding: "1rem 4rem" }}>
                <h4 className='primary-color text-center form-heading'>Login</h4>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input type='email' prefix={<img src={APP_ASSETS.mailIcon} alt="lock" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}

                    >
                        <Input
                            prefix={<img src={APP_ASSETS.lockIcon} alt="lock" />}
                            suffix={<img src={APP_ASSETS.viewIcon} alt="view" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Link to="/sign-in" className="login-form-forgot">
                            Forgot password
                        </Link>
                    </Form.Item>


                </Form>
            </Col>
        </Row>
    )
}

export default SignInComponent