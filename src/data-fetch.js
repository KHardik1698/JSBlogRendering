const url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";

export let blogData = [];
// console.log("Blog Data", blogData);

const getBlogsAxios = (async () => {
  let data;
  await axios
    .get(url)
    .then(function (response) {
      //   console.log(response);
      data = response.data;
      data.forEach((val) => {
        blogData.push(val);
      });
      //   console.log("Received List", data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
})();

// export const getBlogsAxios = (async () => {
//   let response = await axios.get(url);
//   return response.data;
// })();

// const getBlogsFetch = (async () => {
//   let resData;
//   await fetch(url)
//     .then((response) => {
//       // console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       //   console.log("Received List", data);
//       resData = data;
//       resData.forEach((val) => {
//         blogData.push(val);
//       });
//     })
//     .catch((err) => {
//       console.log("Error", err);
//     });
//   return resData;
// })();

// export const getBlogsFetch = (async () => {
//   let response = await fetch(url).then((response) => {
//     return response.json();
//   });
//   return response;
// })();
