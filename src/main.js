// import { blogs } from "./data.js";
import { blogData } from "./data-fetch.js";
// import { getBlogsAxios, getBlogsFetch } from "./data-fetch.js";
import { blogImage } from "./components/blogImage.js";
import { blogContent } from "./components/blogContent.js";
import { relatedLinks } from "./components/relatedLinks.js";

window.onload = () => {
  // this function runs when window finishes loading
  // getBlogsAxios.then((blogs) => {
  //   // console.log(blogs);
  //   const blogDiv = document.getElementById("root");
  //   const blogImageDiv = blogImage(blogs[0].imageUrl);
  //   blogDiv.appendChild(blogImageDiv);
  //   const blogContentDiv = blogContent(blogs[0].title, blogs[0].content);
  //   blogDiv.appendChild(blogContentDiv);
  //   const listDiv = document.getElementById("related-links");
  //   const relatedLinksList = relatedLinks(blogs[0].links);
  //   listDiv.appendChild(relatedLinksList);
  // });
  // console.log(getBlogsFetch);
  // getBlogsFetch.then((blogs) => {
  //   console.log(blogs);
  // });
  const blogDiv = document.getElementById("root");
  const blogImageDiv = blogImage(blogData[0].imageUrl);
  blogDiv.appendChild(blogImageDiv);
  const blogContentDiv = blogContent(blogData[0].title, blogData[0].content);
  blogDiv.appendChild(blogContentDiv);
  const listDiv = document.getElementById("related-links");
  const relatedLinksList = relatedLinks(blogData[0].links);
  listDiv.appendChild(relatedLinksList);
};
