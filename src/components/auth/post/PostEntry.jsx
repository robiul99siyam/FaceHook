import React from "react";
import { useForm } from "react-hook-form";
import { actions } from "../../../actions";
import AddPhoto from "../../../assets/icons/addPhoto.svg";
import { useAuth } from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import { usePost } from "../../../hooks/usePost";
import { useProfile } from "../../../hooks/useProfile";
import Field from "../Field";
export default function PostEntry({ onCreate }) {
  const { auth } = useAuth();
  const { state } = useProfile();
  const user = auth?.user ?? state?.user;
  const { dispatch } = usePost();
  const { api } = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const handlePostSubmit = async (formData) => {
    console.log(formData.image[0]);
    try {
      const data = new FormData();
      data.append("content", formData.content);
      if (formData.image[0]) {
        data.append("image", formData.image[0]);
      }
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts`,
        data
      );

      if (response.status === 200) {
        dispatch({ type: actions.post.DATA_CREATE, data: response.data });
        onCreate();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="card relative">
      <h6 className="mb-3 text-center text-lg font-bold lg:text-xl">
        Create Post
      </h6>
      <form onSubmit={handleSubmit(handlePostSubmit)}>
        <div className="mb-3 flex items-center justify-between gap-2 lg:mb-6 lg:gap-4">
          <div className="flex items-center gap-3">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`}
              alt="avatar"
            />
            <div>
              <h6 className="text-lg lg:text-xl">
                {user?.firstName} {user?.lastName}{" "}
              </h6>

              <span className="text-sm text-gray-400 lg:text-base">Public</span>
            </div>
          </div>

          <label
            className="btn-primary cursor-pointer !text-gray-100"
            htmlFor="image"
          >
            <img src={AddPhoto} alt="Add Photo" />
            Add Photo
          </label>
          <input
            {...register("image")}
            type="file"
            name="image"
            id="image"
            className="hidden"
          />
        </div>
        <Field label="" error={errors.content}>
          <textarea
            {...register("content", {
              required: "Adding some text is mandatory!",
            })}
            name="content"
            id="content"
            placeholder="Share your thoughts..."
            className="h-[120px] w-full bg-transparent focus:outline-none lg:h-[160px]"
          ></textarea>
        </Field>
        <div className="border-t border-[#3F3F3F] pt-4 lg:pt-6">
          <button
            className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
