import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="LogoTitle">
        <img
          className="LogoImg"
          src={require("../../assets/images/friendszone-logo.jpg")}
          alt="FriendsZone Logo"
        />
        <h1 className="Title">FriendsZone</h1>
      </div>

      <div className="SearchPost">
        <input
          id="postId"
          className="SearchBar"
          type="text"
          placeholder="Search for a publication"
        />
        <button className="SearchButton" id="postIdButton">
          <img
            src={require("../../assets/images/lupa-icon.png")}
            alt="Ícone de lupa"
            className="LupaIcon"
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
