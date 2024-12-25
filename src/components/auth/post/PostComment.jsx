import React from "react";
import avatar from "../../../assets/images/avatars/avatar_1.png";
export default function PostComment() {
  return (
    <>
      {" "}
      <div>
        {/* <!-- comment input box --> */}
        <div class="flex-center mb-3 gap-2 lg:gap-4">
          <img
            class="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
            src={avatar}
            alt="avatar"
          />

          <div class="flex-1">
            <input
              type="text"
              class="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
              name="post"
              id="post"
              placeholder="What's on your mind?"
            />
          </div>
        </div>
        {/* <!-- comment filter button --> */}
        <div class="mt-4">
          <button class="text-gray-300 max-md:text-sm">All Comment ▾</button>
        </div>
        {/* <!-- comments --> */}
        <div class="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
          {/* <!-- single comment --> */}
          <div class="flex items-center gap-3 pt-4">
            <img
              class="max-w-6 max-h-6 rounded-full"
              src="./assets/images/avatars/avatar_2.png"
              alt="avatar"
            />
            <div>
              <div class="flex gap-1 text-xs lg:text-sm">
                <span>Tapas Adhikari: </span>
                <span>Great Sumit Saha dada ❤</span>
              </div>
            </div>
          </div>
          {/* <!-- single comment ends --> */}

          {/* <!-- single comment --> */}
          <div class="flex items-center gap-3 pt-4">
            <img
              class="max-w-6 max-h-6 rounded-full"
              src="./assets/images/avatars/avatar_1.png"
              alt="avatar"
            />
            <div>
              <div class="flex gap-1 text-xs lg:text-sm">
                <span>Sumit Saha: </span>
                <span>Great Sumit Saha dada ❤</span>
              </div>
            </div>
          </div>
          {/* <!-- single comment ends --> */}
        </div>
        {/* <!-- comments ends --> */}
      </div>
    </>
  );
}
