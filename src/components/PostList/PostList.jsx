import "./PostList.css";
import { posts } from "mocks/posts.js";
import { useState } from "react";
import PostListItem from "components/PostListItem/PostListItem";

function PostList() {
  const [selectedPost, setSelectedPost] = useState({});
  const [like, setLike] = useState(false);

  const SwitchLike = (likeValue,index) => {
    setLike(!like);
    console.log(like);
    likeValue = 0
    if (like === true) {
      likeValue = +1
    } else {
      likeValue= 0
    }
    console.log(likeValue) 
  };

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
          selectedPost={selectedPost[index]}
          index={index}
          SwitchLike={SwitchLike}
          like={like}
        />
      ))}
    </div>
  );
}

export default PostList;
