export const headerContent = (title, imageUrl) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="header-container-div">
      <div class="logo">
        <img src="${imageUrl}" alt="" class="logo-image"/>
      </div>
      <h1>${title}</h1>
      <nav class="navigation">
        <ul>
          <li class="nav-item">
            <a href="index.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#2" class="nav-link">About Us</a>
          </li>
          <li class="nav-item">
            <a href="#3" class="nav-link">Contact Us</a>
          </li>
        </ul>
        <div class="hamburger">
          <i class="fa fa-bars fa-3x"></i>
        </div>
      </nav>
    </div>
    `;
  return div;
};
