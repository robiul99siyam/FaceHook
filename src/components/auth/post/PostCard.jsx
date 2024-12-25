import React from "react";
import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostComment from "./PostComment";
import PostHeader from "./PostHeader";

export default function PostCard({ post }) {
  console.log(post);
  return (
    <>
      <article class="card mt-6 lg:mt-8">
        {/* <!-- post header --> */}
        <PostHeader post={post} />
        {/* <!-- post header ends --> */}

        {/* <!-- post body --> */}
        <PostBody post={post} />
        {/* <!-- post body ends --> */}

        {/* <!-- post actions --> */}
        <PostAction />
        {/* <!-- post actions  --> */}

        {/* <!-- comment section --> */}
        <PostComment />
        {/* <!-- comment section ends --> */}
      </article>
    </>
  );
}
