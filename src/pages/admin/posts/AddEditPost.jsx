import { Button, DatePicker, Form, Input, Select, Typography, message } from 'antd'
import React, { useMemo } from 'react'
import { useMutation, useQuery } from 'react-query';
import { PostServices } from '../../../services/post.services';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedRoutesNames } from '../../../utilities/util.constant';
import { CategoryServices } from '../../../services/categories.services';
import CustomUpload from '../../../components/CustomUpload/CustomUpload';

function AddEditPost() {
    const {Title} = Typography;
    const navigate = useNavigate();
    const {mutateAsync: addPostRequest, isLoading: addPostLoader} = useMutation(PostServices.addPost);
    const [messageApi, contextHolder] = message.useMessage();
    
    const {mutateAsync: categoryData, isLoading: categoryLoader} = useQuery("categories",()=> CategoryServices.getCategories());

    const categoryDataMemo = useMemo(
       ()=> categoryData?.data?.results,
       [categoryData?.data?.results]
    );

    const onFinish = (values)=>{
        console.log(values,'values');
        addPostRequest(values,{
            onSuccess:()=>{
                messageApi.success("Post added successfully!");
                setTimeout(()=>{
                    navigate(AuthenticatedRoutesNames.POSTS);
                },1000)
            }
        })   
    }
  return (
    <div>
        {contextHolder}
        <Title level={3}>Create Post</Title>
        <Form name="basic" autoComplete="off" onFinish={onFinish}>
                <Form.Item
                    name="post_title"
                    rules={[
                        {
                            required: true,
                            message: "Please input your post title!",
                        },
                    ]}
                >
                    <Input placeholder="Post Title" />
                </Form.Item>
                <Form.Item
                    name="post_category_id"
                    rules={[
                        {
                            required: true,
                            message: "Please input your post category id!",
                        },
                    ]}
                >
                    <Select placeholder="Post Category">
                        {categoryDataMemo?.map((singleCategory)=>{
                            return(
                                <Select.Option value={singleCategory?.cat_id}>
                                    {singleCategory?.cat_title}
                                </Select.Option>
                            )
                        })}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="post_author"
                    rules={[
                        {
                            required: true,
                            message: "Please input your post author!",
                        },
                    ]}
                >
                    <Input placeholder="Post Author" />
                </Form.Item>
                <Form.Item
                    name="post_date"
                    rules={[
                        {
                            required: true,
                            message: "Please input your post date!",
                        },
                    ]}
                >
                    <DatePicker className='w-100'/>
                </Form.Item>
                <Form.Item
                    name="post_content"
                    rules={[
                        {
                            required: true,
                            message: "Please input your post content!",
                        },
                    ]}
                >
                    <Input placeholder="Post Content" />
                </Form.Item>
                <Form.Item
                    name="post_status"
                    rules={[
                        {
                            required: true,
                            message: "Please input your post status!",
                        },
                    ]}
                >
                    <Select placeholder="Post Status" >
                        <Select.Option value="draft">Draft</Select.Option>
                        <Select.Option value="publish">Publish</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="post_tags"
                    rules={[
                        {
                            required: true,
                            message: "Please input your post tags!",
                        },
                    ]}
                >
                    <Input placeholder="Post Tags" />
                </Form.Item>
                <Form.Item>
                    <CustomUpload/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
    </div>
  )
}

export default AddEditPost