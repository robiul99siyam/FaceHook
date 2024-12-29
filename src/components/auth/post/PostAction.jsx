import React, { useState } from "react";
import commentImage from "../../../assets/icons/comment.svg";
import likeImage from "../../../assets/icons/like.svg";
import shareImage from "../../../assets/icons/share.svg";
import { useAuth } from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
export default function PostAction({ post, commentCount }) {
  const { auth } = useAuth();
  const [like, setLike] = useState(post?.likes?.includes(auth?.user?.id));
  const { api } = useAxios();
  const handleLiked = async () => {
    try {
      const respone = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/like`
      );

      if (respone.status === 200) {
        setLike(true);
      }
    } catch (error) {
      console.error(error);
      setLike(false);
    }
  };
  return (
    <>
      {" "}
      <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
        {/* <!-- Like Button --> */}
        <button
          onClick={handleLiked}
          className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
        >
          <img
            className={like ? "bg-blue-500 rounded-full p-3" : ""}
            src={likeImage}
            alt="Like"
          />

          {!like && <span>Like</span>}
        </button>

        {/* <!-- Comment Button --> */}
        <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
          <img src={commentImage} alt="Comment" />
          <span>Comment ({commentCount ?? 0})</span>
        </button>
        {/* <!-- Share Button --> */}

        {/* <!-- Like Button --> */}
        <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
          <img src={shareImage} alt="Share" />
          <span>Share</span>
        </button>
      </div>
    </>
  );
}
