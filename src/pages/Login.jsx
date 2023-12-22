import { Button, Form, Input, Typography, notification } from "antd";
import { useMutation } from "react-query";
import { UserServices } from "../services/users.sevices";
import { AuthUtils } from "../utilities/Auth.utils";

const { Title } = Typography;

function Login() {
    const { mutateAsync: loginRequest, isLoading: loginRequestLoader } = useMutation(UserServices.login);

    const onFinish = async (values) => {
        // console.log(values,'values');
        await loginRequest(values, {
            onSuccess: (data) => {
                const token = data?.data?.results?.token;
                if (token) {
                    // console.log(token,'token');
                    AuthUtils.saveToken(token);
                    notification.success({
                        message: "logged in succesfully",
                        placement: "topRight"
                    });
                    window.location.href = "/";
                }
                else {
                    notification.error({
                        message: "login failed",
                        placement: "topRight"
                    })
                }
            }
        })
    }
    return (
        <div>
            <Title level={2}>Login</Title>

            <Form name="basic" autoComplete="off" onFinish={onFinish}>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            require: true,
                            message: "Please input your email",
                        },
                    ]}
                    initialValue="oscar41@example.net"
                >
                    <Input placeholder="Type Your Email" type="email" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            require: true,
                            message: "Please input your password",
                        },
                    ]}
                    initialValue="admin123@"
                >
                    <Input.Password placeholder="Type Your Password" />
                </Form.Item>

                <Button type="primary" htmlType="submit" loading = {loginRequestLoader}>
                    Login
                </Button>
            </Form>
        </div>
    )
}
export default Login;