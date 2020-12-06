import { findBlogById } from "./findBlogById.js";
import { blogImage } from "../components/blogImage.js";
import { blogContent } from "../components/blogContent.js";
import { relatedLinks } from "../components/relatedLinks.js";
import { headerContent } from "../components/headerContent.js";

export const renderNewBlog = (blogId) => {
  const blogObject = findBlogById(blogId);
  const headerDiv = document.getElementById("header-container");
  headerDiv.innerHTML = "";
  headerDiv.appendChild(
    headerContent(blogObject[0].title, blogObject[0].imageUrl)
  );
  const blogDiv = document.getElementById("root");
  blogDiv.innerHTML = "";
  const blogImageDiv = blogImage(blogObject[0].imageUrl);
  blogDiv.appendChild(blogImageDiv);
  const blogContentDiv = blogContent(
    blogObject[0].title,
    blogObject[0].content
  );
  blogDiv.appendChild(blogContentDiv);
  const listDiv = document.getElementById("related-links");
  listDiv.innerHTML = "";
  listDiv.innerHTML = `<h1>Related Links</h1>`;
  const relatedLinksList = relatedLinks(blogObject[0].links);
  listDiv.appendChild(relatedLinksList);
};
