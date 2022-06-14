import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
// import { DateTime } from "luxon";
import { PostService } from "services/PostService";
import "./CreateEditPostModal.css";
import { ActionMode } from "constants/index";

function CreateEditPostModal({ closeModal, onCreatePost, mode, postToUpdate, onUpdatePost }) {
  const form = {
    photo: postToUpdate?.photo ?? "",
    name: postToUpdate?.name ?? "",
    text: postToUpdate?.text ?? "",
  };

  const [state, setState] = useState(form);

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const [canDisable, setCanDisable] = useState(true);

  // const newDateHour = () => {
  //   const dateDescription = DateTime.now().toLocaleString({
  //     ...DateTime.DATE_FULL,
  //     weekday: "long",
  //   });

  //   state.dateHour = dateDescription;
  // };

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.photo.length && state.name.length && state.text.length
    );
    setCanDisable(response);
  };

  useEffect(() => {
    canDisableSendButton();
  });

  const handleSend = async () => {

    const { photo, name, text } = state;

    const post = {
      photo,
      name,
      text,
    };
    
    const serviceCall = {
      [ActionMode.NORMAL]: () => PostService.create(post),
      [ActionMode.UPDATE]: () => PostService.updateById(postToUpdate?.id, post)
    }

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreatePost(response),
      [ActionMode.UPDATE]: () => onUpdatePost(response),
    }

    actionResponse[mode]();

    const reset = {
      photo: "",
      name: "",
      text: "",
    }

    setState(reset)
    closeModal();
  };

  
  const editPost = async () => {
      
  }

  return (
    <Modal closeModal={closeModal}>
      <div className="CreatePostModal">
        <form autoComplete="off">
          <h2>{ActionMode.UPDATE === mode ? 'Update' : 'Create'} post</h2>

          <div>
            <label className="CreatePostModal__photo-label" htmlFor="photo"></label>
            {!state.photo.length ? "Select image" : state.photo}
            <input
              className="CreatePostModal__photo"
              id="photo"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              value={state.photo}
              onChange={(e) => handleChange(e, "photo")}
              required
            />
          </div>
          <div>
            <label className="CreatePostModal__name" htmlFor="name">
              Username
            </label>
            <input
              id="name"
              type="text"
              placeholder="Username"
              value={state.name}
              onChange={(e) => handleChange(e, "name")}
              required
            />
          </div>
          <div>
            <label className="CreatePostModal__text" htmlFor="text"></label>
            <textarea
              id="text"
              type="text"
              placeholder="Type text"
              value={state.text}
              onChange={(e) => handleChange(e, "text")}
              required
            />
          </div>
          <div className="CreatePostModal__dateHour">
            <label
              className="CreatePostModal__dateHour"
              htmlFor="dateHour"
            ></label>
            <input
              id="dateHour"
              type="text"
              value={state.dateHour}
              onChange={(e) => handleChange(e, "dateHour")}
            />
          </div>

          <button
            className="CreatePostModal__submit"
            type="button"
            disabled={canDisable}
            onClick={handleSend}
          >
            {ActionMode.UPDATE === mode ? 'Update' : 'Submit'}
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default CreateEditPostModal;
