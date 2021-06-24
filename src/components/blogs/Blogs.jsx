import Blog from "../blog/Blog";
import "./blogs.css";

export default function Blogs() {
  return (
    <div className="blogs">
      <Blog img="https://images.pexels.com/photos/434090/pexels-photo-434090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <Blog img="https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
      <Blog img="https://images.pexels.com/photos/6895533/pexels-photo-6895533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Blog img="https://images.pexels.com/photos/7672252/pexels-photo-7672252.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
      <Blog img="https://images.pexels.com/photos/4385304/pexels-photo-4385304.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Blog img="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    </div>
  );
}
