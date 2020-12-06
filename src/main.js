import { blogData } from "./data-fetch.js";
import { blogImage } from "./components/blogImage.js";
import { blogContent } from "./components/blogContent.js";
import { relatedLinks } from "./components/relatedLinks.js";

window.onload = () => {
  const blogDiv = document.getElementById("root");
  const blogImageDiv = blogImage(blogData[0].imageUrl);
  blogDiv.appendChild(blogImageDiv);
  const blogContentDiv = blogContent(blogData[0].title, blogData[0].content);
  blogDiv.appendChild(blogContentDiv);
  const listDiv = document.getElementById("related-links");
  const relatedLinksList = relatedLinks(blogData[0].links);
  listDiv.appendChild(relatedLinksList);
};
