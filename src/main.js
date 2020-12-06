import { blogData } from "./data-fetch.js";
import { blogImage } from "./components/blogImage.js";
import { blogContent } from "./components/blogContent.js";
import { relatedLinks } from "./components/relatedLinks.js";
import { headerContent } from "./components/headerContent.js";
import { footerContent } from "./components/footerContent.js";

window.onload = () => {
  const headerDiv = document.getElementById("header-container");
  headerDiv.appendChild(headerContent(blogData[0].title, blogData[0].imageUrl));
  const blogDiv = document.getElementById("root");
  const blogImageDiv = blogImage(blogData[0].imageUrl);
  blogDiv.appendChild(blogImageDiv);
  const blogContentDiv = blogContent(blogData[0].title, blogData[0].content);
  blogDiv.appendChild(blogContentDiv);
  const listDiv = document.getElementById("related-links");
  listDiv.innerHTML = `<h1>Related Links</h1>`;
  const relatedLinksList = relatedLinks(blogData[0].links);
  listDiv.appendChild(relatedLinksList);
  const footerDiv = document.getElementById("footer-container");
  footerDiv.appendChild(footerContent());
};
