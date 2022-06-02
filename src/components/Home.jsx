import "./Home.css";
import PostList from "./PostList";

function Home() {
  return (
    <div className="Home">
      <div className="Home__Container">
        <PostList />
      </div>
    </div>
  );
}

export default Home;
