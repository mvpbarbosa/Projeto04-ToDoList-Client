import "./PostModalDetails.css";
import Modal from "components/Modal/Modal";

function PostDetailsModal({post, closeModal}) {
  return (
    <Modal closeModal={closeModal}>
      <div className="PostDetailsModal">
        <div className="PostDetailsModal__Header">
          <img
            src={post.photo}
            alt=""
            className="PostDetailsModal__photo"
          />
          <div className="nameHour">
            <h3>{post.name}</h3>
            <h4>{post.dateHour}</h4>
          </div>
        </div>

        <div className="PostDetailsModal__Main">
          <h4>{post.text}</h4>
        </div>
      </div>
    </Modal>
  );
}

export default PostDetailsModal;
