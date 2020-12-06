import { blogData } from "../data-fetch.js";

export const findBlogById = (blogId) => {
  return blogData.filter((blog) => {
    return blog.id == blogId;
  });
};
