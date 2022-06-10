import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import { DateTime } from "luxon";
import "./CreatePostModal.css";

function CreatePostModal({ closeModal }) {
  const form = {
    photo: "",
    name: "",
    text: "",
    dateHour: "",
  };

  const [state, setState] = useState(form);

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const [canDisable, setCanDisable] = useState(true);

  const newDateHour = () => {
    const dateDescription = DateTime.now().toLocaleString({
      ...DateTime.DATE_FULL,
      weekday: "long",
    });

    return (state.dateHour = dateDescription);
  };

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.photo.length &&
        state.name.length &&
        state.text.length &&
        state.dateHour.length
    );
    setCanDisable(response);
  };

  useEffect(() => {
    canDisableSendButton();
  });
  return (
    <Modal closeModal={closeModal}>
      <div className="CreatePostModal">
        <form autoComplete="off">
          <h2>Create new post</h2>

          <div>
            <label className="CreatePostModal__photo" htmlFor="photo"></label>
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
            // disabled={canDisable}
            onClick={console.log("Estou aqui")}
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default CreatePostModal;
