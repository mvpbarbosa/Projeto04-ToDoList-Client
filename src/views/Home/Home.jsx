import "./Home.css";
import { useState } from "react";
import PostList from "components/PostList/PostList.jsx";
import Navbar from "components/Navbar/Navbar";
import CreateEditPostModal from "components/CreateEditPostModal/CreateEditPostModal";
import { ActionMode } from "constants/index";

function Home() {
  const [canShowCreatePostModal, setCanShowCreatePostModal] = useState(false);
  const [postToCreate, setPostToCreate] = useState();

  const [postToEdit, setPostToEdit] = useState();
  const [postToDelete, setPostToDelete] = useState();

  const [currentMode, setCurrentMode] = useState(ActionMode.NORMAL);

  const handleDeletePost = (postForDelete) => {
    setPostToDelete(postForDelete);
  };

  const handleUpdatePost = (postToUpdate) => {
    setPostToEdit(postToUpdate);
    handleActions(ActionMode.UPDATE)
    setCanShowCreatePostModal(true);

  };

  console.log(currentMode)


  const handleActions = (action) => {
    const newAction = currentMode === action ? ActionMode.NORMAL : action;
    setCurrentMode(newAction);
  };

  const handleCloseModal = () => {
    setCanShowCreatePostModal(false);
    setPostToCreate();
    setPostToEdit();
    setPostToDelete();
  };

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

        <PostList
          setCanShowCreatePostModal={setCanShowCreatePostModal}
          mode={ActionMode.UPDATE}
          createdPost={postToCreate}
          deletePost={handleDeletePost}
          updatePost={handleUpdatePost}
          handleActions={handleActions}
        />
        {canShowCreatePostModal && (
          <CreateEditPostModal
            mode={currentMode}
            closeModal={handleCloseModal}
            onCreatePost={(post) => setPostToCreate(post)}
            postToUpdate={postToEdit}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
