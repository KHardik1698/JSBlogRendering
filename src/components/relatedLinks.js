export const relatedLinks = (links) => {
  const list = document.createElement("ul");
  list.classList.add("related-links-list");
  links.forEach((e, i) => {
    const listItem = document.createElement("li");
    listItem.id = links[i].id;
    listItem.innerHTML = links[i].title;
    list.appendChild(listItem);
  });
  return list;
};
