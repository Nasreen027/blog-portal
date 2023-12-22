import { useNavigate } from "react-router-dom";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";
import { UtilService } from "../../utilities/util.service";

function SinglePostLoop({ singlePost }) {
  const navigate = useNavigate();
  return (
    <>
      <h2>
        <a
          className="cursor-pointer"
          onClick={() => {
            navigate(
              UnAuthenticatedRoutesNames.POST_DETAIL.replace(
                ":id",
                singlePost?.id
              )
            );
          }}
        >
          {singlePost?.post_title}
        </a>
      </h2>
      <p className="lead">
        by <a href="index.php">{singlePost?.post_author}</a>
      </p>
      <p>
        <span className="glyphicon glyphicon-time"></span> Posted on
        {/* 28, 2013 at 10:00 PM */} &nbsp;
        {UtilService.convertDateToOurFormat(singlePost?.post_date)}

      </p>
      <hr />
      {singlePost?.image ? (
        <img
          onClick={() => {
            navigate(UnAuthenticatedRoutesNames.POST_DETAIL.replace(
              ":id",
              singlePost.id
            ))
          }}
          className="img-responsive cursor-pointer"
          src={singlePost?.image}
          alt=""
        />
      ) : (
        <img
          className="img-responsive cursor-pointer"
          src="http://placehold.it/900x300"
          alt=""
        />
      )}
      <hr />

      <p>{singlePost?.post_content}</p>
      <a className="btn btn-primary" href="#">
        Read More <span className="glyphicon glyphicon-chevron-right"></span>
      </a>

      <hr /> <div />
    </>
  );
};

export default SinglePostLoop;