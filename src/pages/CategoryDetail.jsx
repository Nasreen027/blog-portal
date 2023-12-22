import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CategoryServices } from "../services/categories.services";
import { useMemo } from "react";
import SinglePostLoop from "../components/SinglePostLoop/SinglePostLoop";

function CategoryDetail() {
    const { id: categoryId } = useParams();

    const { data: getCategoryDataById } = useQuery(
        ['category', categoryId],
        () => CategoryServices.getCategoryById(categoryId),
        {
            enabled: Boolean(categoryId)
        }
    );

    const getCategoryDataByIdMemo = useMemo(
        () => getCategoryDataById?.data?.results,
        [getCategoryDataById?.data?.results]
    );

    return (
        <div>
            <h1 className="page-header">Category : {getCategoryDataByIdMemo?.cat_title}</h1>

            {getCategoryDataByIdMemo?.posts?.map((singlePost) => {
                return <SinglePostLoop singlePost={singlePost} />;
            })}
        </div>
    )
};
export default CategoryDetail;