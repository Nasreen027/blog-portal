import { Button, Form, Input, Typography, message } from 'antd'
import React from 'react'
import { useMutation } from 'react-query';
import { CategoryServices } from '../../../services/categories.services';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedRoutesNames } from '../../../utilities/util.constant';

function AddEditCategory() {
    const navigate = useNavigate();
    const { Title } = Typography;
    const [messageApi, contextHolder] = message.useMessage();
    const { mutateAsync: addCategoryRequest, isLoading: addCategoryLoader } = useMutation(CategoryServices.addCategory)
    const onFinish = (values) => {
        // console.log(values,'values');
        addCategoryRequest(values, {
            onSuccess: () => {
                messageApi.success("Category added successfully!");
                setTimeout(() => {
                    navigate(AuthenticatedRoutesNames.CATEGORIES);
                }, 1000)
            }
        })
    }
    return (
        <div>
            {contextHolder}
            <Title level={3}>Create Category</Title>

            <Form name="basic" autoComplete="off" onFinish={onFinish}>
                <Form.Item
                    name="cat_title"
                    rules={[
                        {
                            required: true,
                            message: "Please input your category title!",
                        },
                    ]}
                >
                    <Input placeholder="Category Title" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create Category
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddEditCategory