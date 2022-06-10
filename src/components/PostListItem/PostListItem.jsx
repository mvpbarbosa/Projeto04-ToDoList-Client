import "./PostListItem.css";
function PostListItem({post,  index, SwitchLike, clickItem}) {

  const LikeAndDislike = () => {
      SwitchLike(post.like)
  };

  return (
    <div className="PostListItem" >
      <div className="PostListItem__Header">
        <div className="ProfileInfo">
          <img src={post.photo} alt="" />
          <div className="NameDate">
            <h3>{post.name}</h3>
            <h4 id="dateHour">{post.dateHour}</h4>
          </div>
        </div>

        <ul className="c-dropdown">
          <img src={require("assets/images/more.png")} alt="" />
          <ul className="c-dropdown__submenu">
            <li className="c-dropdown__submenu-item">
              <img src={require("assets/images/edit-icon.png")} alt="" />
              <a className="c-dropdown__submenu-link">Edit</a>
            </li>
            <li className="c-dropdown__submenu-item">
              <img src={require("assets/images/delete-icon.png")} alt="" />
              <a className="c-dropdown__submenu-link">Delete</a>
            </li>
          </ul>
        </ul>
      </div>
      <hr />
      <div className="PostListItem__Main" onClick={() => clickItem(post.id)}>
        <span>{post.text}</span>
      </div>
      <div className="PostListItem__Footer">
        <button className={`LikeAndDislike`} onClick={LikeAndDislike}>
          <img src={require("assets/images/like-icon.png")} alt="" />
          <span>{post.like}</span>
        </button>
      </div>
    </div>
  );
}

export default PostListItem;
