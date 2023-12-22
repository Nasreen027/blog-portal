import { Button, Col, Modal, Row, Table, message } from 'antd';
import React, { useMemo } from 'react'
import { useMutation, useQuery } from 'react-query';
import { CategoryServices } from '../../../services/categories.services';
import {ExclamationCircleOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import { AuthenticatedRoutesNames } from '../../../utilities/util.constant';
const {confirm } = Modal;

function AdminCategories() {
    const navigate = useNavigate();
    const { data: categoryData, isLoading: categoryDataLoading, refetch: categoryRefresh } = useQuery(
        "categories", () => CategoryServices.getCategories());

        const [messageApi, contextHolder] = message.useMessage();

    const catData = useMemo(() =>
        categoryData?.data?.results,
        [categoryData?.data?.results]
    );

    const { mutateAsync: deleteCategoryRequest, isLoading: deleteCategoryLoader } = useMutation(
        CategoryServices.deleteCategoryById
    )

    const deleteCategoryHandler = (singleCategory) => {
        const {cat_id: categoryId} = singleCategory;
        confirm({
            title: "Do you want to delete this category ?",
            icon: <ExclamationCircleOutlined />,
            onOk(){
                deleteCategoryRequest(categoryId,{
                    onSuccess: () => {
                        messageApi.success("Category is deleted successfully!");
                        categoryRefresh();
                    }
                })
            }
        })
    };

    const editCategoryHandler = (singleCategory) => {
        const {cat_id: categoryId} = singleCategory;
        
    }

    const columns = [
        {
            title: "Id",
            key: "id",
            render: (singleData) => {
                return singleData.cat_id;
            }
        },
        {
            title: "Category Title",
            key: "cat_title",
            render: (singleData) => {
                return singleData.cat_title;
            }
        },
        {
            title: "Created At",
            key: "createdAt",
            render: (singleData) => {
                return singleData.created_at;
            }
        },
        {
            title: "Updated At",
            key: "updatedAt",
            render: (singleData) => {
                return singleData.updated_at;
            }
        },
        {
            title: "Edit",
            key: "edit",
            render: (singleCategory) => {
                return (
                    <Button type='primary'onClick={()=>editCategoryHandler(singleCategory)} >Edit</Button>
                )
            }
        },
        {
            title: "Delete",
            key: "delete",
            render: (singleCategory) => {
                return (
                    <Button type='primary' danger onClick={()=>deleteCategoryHandler(singleCategory)}>Delete</Button>
                )
            }
        }
    ]
    return (
        <div>
            {contextHolder}
            <Row
                type="flex"
                justify="space-between"
                align="middle"
                style={{ marginBottom: "20px" }}
            >
                <Col>
                    <h3
                        style={{
                            marginBottom: "0",
                            marginTop: "100",
                        }}
                    >
                        Categories
                    </h3>
                </Col>
                <Col>
                    <Button
                        type="primary"
                        onClick={()=>{
                            navigate(AuthenticatedRoutesNames.CATEGORY_ADD)
                        }}
                    >
                        + Add Category
                    </Button>
                </Col>
            </Row>
            <Table
                loading={categoryDataLoading}
                columns={columns}
                dataSource={catData}
            />
            ;
        </div>
    )
}

export default AdminCategories;