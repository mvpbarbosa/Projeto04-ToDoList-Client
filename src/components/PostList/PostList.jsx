import "./PostList.css";
import { useState, useEffect } from "react";
import PostListItem from "components/PostListItem/PostListItem";
import { PostService } from "services/PostService";
import PostModalDetails from "components/PostModalDetails/PostModalDetails";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [like, setLike] = useState(false);
  const [postModal, setPostModal] = useState(false);

  const SwitchLike = (likeValue, postLike) => {
    setLike(!like);
    console.log(like);
    likeValue = postLike;
    if (like === true) {
      likeValue = likeValue +1;
    } else {
      likeValue = likeValue -1;
    }

    // console.log(likeValue)
    // console.log(postLike)
  };

  const getList = async () => {
    const response = await PostService.getList();
    setPosts(response);
  };

  const getPostById = async (postId) => {
    const response = await PostService.getById(postId)
    setPostModal(response)
  }

  useEffect(() => {
    getList();
  }, []);

  // const addLike = (postIndex) => {
  //   const post = {
  //     [postIndex]: Number(selectedPost[postIndex] || 0) + 1,
  //   };
  //   setSelectedPost({ ...selectedPost, ...post });
  // };

  // const removeLike = (postIndex) => {
  //   const post = {
  //     [postIndex]: Number(selectedPost[postIndex] || 0) - 1,
  //   };

  //   setSelectedPost({ ...selectedPost, ...post });
  // };
  // const LikeDislike = (index) => {
  //   if (selectedPost !== 1) {
  //     addLike(index);
  //   } else if (selectedPost === 1) {
  //     removeLike(index);
  //   }
  // };

  return (
    <div className="PostList">
      {posts.map((post, index) => (
        <PostListItem
          key={`PostListItem__${index}`}
          post={post}
          index={index}
          SwitchLike={SwitchLike}
          like={like}
          clickItem={(postId) => getPostById(postId)}
        />
        
      ))}
      {postModal && (
        <PostModalDetails
          post={postModal}
          closeModal={() => setPostModal(false)}
        />
      )}

    </div>
  );
}

export default PostList;
