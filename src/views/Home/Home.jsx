import "./Home.css";
import PostList from "components/PostList/PostList.jsx";
import Navbar from "components/Navbar/Navbar";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__Container">
        <PostList />
      </div>
    </div>
  );
}

export default Home;
