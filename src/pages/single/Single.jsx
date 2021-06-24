import Sidebar from "../../components/sidebar/Sidebar";
import SingleBlog from "../../components/singleBlog/SingleBlog";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SingleBlog />
      <Sidebar />
    </div>
  );
}
