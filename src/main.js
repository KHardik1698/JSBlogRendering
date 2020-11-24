import { blogs } from "./data.js";
import { blogImage } from "./components/blogImage.js";

window.onload = () => {
  // this function runs when window finishes loading
  const blogDiv = document.getElementById("root");
  const blogImageDiv = blogImage(blogs[0].imageUrl);
  blogDiv.appendChild(blogImageDiv);
  // blogDiv.appendChild(
  //   blogImage("https://cdn.fs.teachablecdn.com/JOTwcbUxTSejTurJ33QR")
  // );
};
