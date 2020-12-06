const url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";

export let blogData = [];

const getBlogsAxios = (async () => {
  let data;
  await axios
    .get(url)
    .then(function (response) {
      data = response.data;
      data.forEach((val) => {
        blogData.push(val);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  return data;
})();
