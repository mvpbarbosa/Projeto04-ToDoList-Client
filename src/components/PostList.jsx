import "./PostList.css";
import { posts } from "../mocks/posts.js";

function PostList() {
  return (
    <div className="PostList">
      {posts.map((post, index) => (
        <div className="PostListItem" key={`PostListItem__${index}`}>
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
                  <a href="" className="c-dropdown__submenu-link">Editar</a>  
                </li>
                <li className="c-dropdown__submenu-item">
                  <img src={require("assets/images/delete-icon.png")} alt="" />
                  <a href="" className="c-dropdown__submenu-link">Apagar</a>  
                </li>
              </ul>
              </ul>

          </div>
          <hr />
          <div className="PostListItem__Main">
            <span>{post.text}</span>
          </div>
          <div className="PostListItem__Footer">
            <button className="LikeAndDislike">
              <img src={require("assets/images/like-icon.png")} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
