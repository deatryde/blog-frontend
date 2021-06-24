import { Link } from "react-router-dom";
import "./blog.css";

export default function Blog({ img }) {
  return (
    <div className="blog">
      <img
        className="blogImg"
        src={img}
        alt=""
      />
      <div className="blogInfo">
        <div className="blogCats">
          <span className="blogCat">
            <Link className="link" to="/blog?cat=Music">
              Music
            </Link>
          </span>
          <span className="blogCat">
            <Link className="link" to="/blog?cat=Life">
              Life
            </Link>
          </span>
        </div>
        <span className="blogTitle">
          <Link to="/blogs/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="blogDate">1 hour ago</span>
      </div>
      <p className="blogDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}
