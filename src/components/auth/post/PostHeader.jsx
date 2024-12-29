import React, { useState } from "react";
import dotImage from "../../../assets/icons/3dots.svg";
import deleteImage from "../../../assets/icons/delete.svg";
import edtiImage from "../../../assets/icons/edit.svg";
import timeImage from "../../../assets/icons/time.svg";
import { useAvatar } from "../../../hooks/useAvatar";

import { getDateDifferenceFromNow } from "../../../utils";
export default function PostHeader({ post }) {
  const { avatarURL } = useAvatar(post);
  console.log(avatarURL);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <header class="flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <img
            class="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
            src={avatarURL}
            // src="./assets/images/avatars/avatar_1.png"
            alt="avatar"
          />
          <div>
            <h6 class="text-lg lg:text-xl">{post?.author?.name}</h6>
            <div class="flex items-center gap-1.5">
              <img src={timeImage} alt="time" />
              <span class="text-sm text-gray-400 lg:text-base">{`${getDateDifferenceFromNow(
                post?.createAt
              )} ago`}</span>
            </div>
          </div>
        </div>

        <div class="relative">
          <button onClick={() => setShowModal(!showModal)}>
            <img src={dotImage} alt="3dots of Action" />
          </button>

          {showModal && (
            <div class="action-modal-container">
              <button class="action-menu-item hover:text-lwsGreen">
                <img src={edtiImage} alt="Edit" />
                Edit
              </button>
              <button class="action-menu-item hover:text-red-500">
                <img src={deleteImage} alt="Delete" />
                Delete
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
