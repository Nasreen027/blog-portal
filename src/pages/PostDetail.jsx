import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PostServices } from "../services/post.services";
import { useMemo } from "react";
import { UtilService } from "../utilities/util.service";

function PostDetail() {
    const { id: postId } = useParams();

    const { data: getPostById } = useQuery(
        // console.log(getPostById,'getPostById')
        ['posts', postId], () =>
        PostServices.getPostById(postId), {
        enabled: Boolean(postId)
    }
    );

    const getPostByIdDataMemo = useMemo(
        ()=>
        getPostById?.data?.results,
        [getPostById?.data?.results]
    );
    // console.log({getPostByIdDataMemo},'getPostByIdDataMemo');

    return (
        <div>
            <h1>{getPostByIdDataMemo?.post_title}</h1>

            <p className="lead">
                by <a href="#">{getPostByIdDataMemo?.post_author}</a>
            </p>

            <hr />

            <p>
                <span className="glyphicon glyphicon-time"></span> Posted on &nbsp;
                {UtilService.convertDateToOurFormat(getPostByIdDataMemo?.post_date)}
            </p>

            <hr />
            {!getPostByIdDataMemo?.image ? (
                <img
                className="img-responsive"
                src="http://placehold.it/900x300"
                alt=""
            />
            ):(
                <img
                className="img-responsive"
                src={getPostByIdDataMemo?.image}
                alt=""
            />       
            )}
            <hr />

            <p className="lead">{getPostByIdDataMemo?.post_content}</p>

            <hr />

            <div className="well">
                <h4>Leave a Comment:</h4>
                <form role="form">
                    <div className="form-group">
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>

            <hr />

            <div className="media">
                <a className="pull-left" href="#">
                    <img
                        className="media-object"
                        src="http://placehold.it/64x64"
                        alt=""
                    />
                </a>
                <div className="media-body">
                    <h4 className="media-heading">
                        Start Bootstrap
                        <small>August 25, 2014 at 9:30 PM</small>
                    </h4>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
                    vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                    vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
            </div>
        </div>
    );
}
export default PostDetail;