// import { blogs } from "../data.js";
import { blogData } from "../data-fetch.js";
// import { getBlogsAxios, getBlogsFetch } from "../data-fetch.js";

export const findBlogById = (blogId) => {
  return blogData.filter((blog) => {
    return blog.id == blogId;
  });
};

// export const findBlogById = (blogId) => {
//   getBlogsAxios.then((blogs) => {
//     return blogs.filter((blog) => {
//       return blog.id == blogId;
//     });
//   });
// };
