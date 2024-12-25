import React from "react";

export default function PostBody({ post }) {
  return (
    <>
      <div class="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
        {/* <!-- If Post has Image, Render this block --> */}
        <div class="flex items-center justify-center overflow-hidden">
          <img
            class="max-w-full"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${post?.image}`}
            alt="poster"
          />
        </div>
        <p>{post?.content}</p>
      </div>
    </>
  );
}
