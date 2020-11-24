export const blogContent = (title, content) => {
  const div = document.createElement("div");
  div.classList.add("blog-content-div");
  const blogTitle = document.createElement("h1");
  blogTitle.id = "blog-title";
  blogTitle.innerHTML = title;
  const blogContent = document.createElement("p");
  blogContent.id = "blog-content";
  blogContent.innerHTML = content;
  div.appendChild(blogTitle);
  div.appendChild(blogContent);
  return div;
};
