export const relatedLinks = (links) => {
  const list = document.createElement("ul");
  list.classList.add("related-links-list");
  links.forEach((e, i) => {
    const listItem = document.createElement("li");
    const listItemLink = document.createElement("a");
    listItemLink.id = links[i].id;
    listItemLink.innerHTML = links[i].title;
    listItemLink.href = "";
    listItem.appendChild(listItemLink);
    list.appendChild(listItem);
  });
  return list;
};
