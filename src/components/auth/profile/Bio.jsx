import React, { useEffect, useState } from "react";
import { actions } from "../../../actions";
import EditIcon from "../../../assets/icons/edit.svg";
import useAxios from "../../../hooks/useAxios";
import { useProfile } from "../../../hooks/useProfile";
export default function Bio() {
  const { api } = useAxios();
  const { state, dispatch } = useProfile();

  const [bio, setBio] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (state?.user?.bio) {
      setBio(state?.user?.bio);
    }
  }, [state?.user?.bio]);
  const handleBioEdit = async () => {
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bio }
      );

      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        });
        setEditMode(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state?.user?.bio}
          </p>
        ) : (
          <textarea
            rows={5}
            cols={50}
            className="text-gray-950 p-3"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        )}
      </div>

      {!editMode ? (
        <button
          onClick={() => setEditMode(true)}
          className="flex-center h-7 w-7 rounded-full"
        >
          <img src={EditIcon} alt="Edit" />
        </button>
      ) : (
        <button
          onClick={handleBioEdit}
          className="bg-black text-blue-50 px-6 py-3 shadow-lg rounded-md border-2 border-green-600"
        >
          submit
        </button>
      )}
    </div>
  );
}
