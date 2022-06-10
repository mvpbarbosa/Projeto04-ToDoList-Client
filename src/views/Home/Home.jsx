import "./Home.css";
import { useState } from "react";
import PostList from "components/PostList/PostList.jsx";
import Navbar from "components/Navbar/Navbar";
import CreatePostModal from "components/CreatePostModal/CreatePostModal";

function Home() {
  const [canShowCreatePostModal, setCanShowCreatePostModal] = useState(false);

  const createPost = () => {
    setCanShowCreatePostModal(true);
  };
  return (
    <div className="Home">
      <Navbar />

      <div className="Home__Container">
        <div className="CreatePost">
          <img
            className="ProfileIcon"
            src={require("../../assets/images/profile-icon.png")}
            alt="Imagem de perfil"
          />

          <div className="FakeInput" onClick={() => createPost()}>
            <span>Type text</span>
          </div>
        </div>
        {canShowCreatePostModal && <CreatePostModal closeModal={() => setCanShowCreatePostModal(false)}/>}
        <PostList />
      </div>
    </div>
  );
}

export default Home;
