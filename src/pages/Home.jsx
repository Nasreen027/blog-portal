import React from 'react'
import SinglePostLoop from '../components/SinglePostLoop/SinglePostLoop';
import { useQuery } from "react-query";
import { PostServices } from "../services/post.services";
import { useMemo } from "react";

function Home() {
    const { data: getPostData } = useQuery("getPosts", PostServices.getPosts);
  
    const getPostDataMemo = useMemo(
      () => getPostData?.data?.results,
      [getPostData?.data?.results]
    );
  
    return (
      <div className=''>
        <h1 className="page-header">All Posts</h1>
        {getPostDataMemo?.map((singlePost) => {
            // console.log(singlePost,'singlePost');
          return <SinglePostLoop key={singlePost?.id} singlePost={singlePost} />;
        })}
      </div>
    );
  }
export default Home;