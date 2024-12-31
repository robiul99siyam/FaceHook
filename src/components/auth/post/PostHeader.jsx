import React, { useState } from "react";
import dotImage from "../../../assets/icons/3dots.svg";
import deleteImage from "../../../assets/icons/delete.svg";
import edtiImage from "../../../assets/icons/edit.svg";
import timeImage from "../../../assets/icons/time.svg";
import { useAvatar } from "../../../hooks/useAvatar";

import { toast } from "react-toastify";
import { actions } from "../../../actions";
import { api } from "../../../api";
import { useAuth } from "../../../hooks/useAuth";
import { usePost } from "../../../hooks/usePost";
import { getDateDifferenceFromNow } from "../../../utils";
export default function PostHeader({ post }) {
  const { avatarURL } = useAvatar(post);
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = usePost();
  const { auth } = useAuth();

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${id}`
      );

      if (auth?.user?.id === post?.author?.id) {
        if (response.status === 200) {
          dispatch({ type: actions.post.DATA_DELETED, data: id });
          toast.success("Post deleted successfully!");
        }
      } else {
        toast.warning("You did not post this");
        // console.log("sorry you post not valid");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
            src={avatarURL}
            // src="./assets/images/avatars/avatar_1.png"
            alt="avatar"
          />
          <div>
            <h6 className="text-lg lg:text-xl">{post?.author?.name}</h6>
            <div className="flex items-center gap-1.5">
              <img src={timeImage} alt="time" />
              <span className="text-sm text-gray-400 lg:text-base">{`${getDateDifferenceFromNow(
                post?.createAt
              )} ago`}</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <button onClick={() => setShowModal(!showModal)}>
            <img src={dotImage} alt="3dots of Action" />
          </button>

          {showModal && (
            <div className="action-modal-container">
              <button className="action-menu-item hover:text-lwsGreen">
                <img src={edtiImage} alt="Edit" />
                Edit
              </button>
              <button
                onClick={() => handleDelete(post?.id)}
                className="action-menu-item hover:text-red-500"
              >
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
