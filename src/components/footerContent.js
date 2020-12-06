export const footerContent = () => {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="footer-container-div">
      <p>Copyright Contentstack India Pvt Ltd &copy</p>
      <i class="fa fa-linkedin-square fa-3x"></i>
      <i class="fa fa-github fa-3x"></i>
      <i class="fa fa-twitter fa-3x"></i>
      <i class="fa fa-facebook fa-3x"></i>
    </div>
    `;
  return div;
};
