import React from "react";
import commentImage from "../../../assets/icons/comment.svg";
import likeImage from "../../../assets/icons/like.svg";
import shareImage from "../../../assets/icons/share.svg";
export default function PostAction() {
  return (
    <>
      {" "}
      <div class="flex items-center justify-between py-6 lg:px-10 lg:py-8">
        {/* <!-- Like Button --> */}
        <button class="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
          <img src={likeImage} alt="Like" />
          <span>Like</span>
        </button>

        {/* <!-- Comment Button --> */}
        <button class="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
          <img src={commentImage} alt="Comment" />
          <span>Comment(2)</span>
        </button>
        {/* <!-- Share Button --> */}

        {/* <!-- Like Button --> */}
        <button class="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
          <img src={shareImage} alt="Share" />
          <span>Share</span>
        </button>
      </div>
    </>
  );
}
