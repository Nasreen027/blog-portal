import React from "react";
import { Button, Form, Input, Typography } from "antd";

const { Title } = Typography;

function Register() {
    const onFinish = (values) => {
        // console.log(values, "on submit values");
    };
    return (
        <div>
            <Title level={2}>Register</Title>

            <Form name="basic" onFinish={onFinish} autoComplete="off">
                <Form.Item
                    name="email"
                    rules={[
                        {
                            require: true,
                            message: "Please input your email",
                        },
                    ]}
                >
                    <Input placeholder="Type Your Email" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            require: true,
                            message: "Please input your password",
                        },
                    ]}
                >
                    <Input.Password placeholder="Type Your Password" />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default Register;
