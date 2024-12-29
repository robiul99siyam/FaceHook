const PostCommentList = ({ comments }) => {
  console.log(comments);
  return (
    <>
      <div class="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
        {comments.length === 0 ? (
          <div class="flex gap-1 text-xs lg:text-sm">
            <span>comment is not found</span>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} class="flex items-center gap-3 pt-4">
              <img
                class="max-w-6 max-h-6 rounded-full"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
                  comment?.author?.avatar
                }`}
                alt="avatar"
              />
              <div>
                <div class="flex gap-1 text-xs lg:text-sm">
                  <span>{comment?.author?.name}: </span>
                  <span>{comment?.comment}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PostCommentList;
