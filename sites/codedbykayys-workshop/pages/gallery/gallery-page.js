const page = document.querySelector("#site");
const navigationElement = createNavigation(navigation);
const galleryElement = createArtistGallery(gallery);
const footerElement = createFooter(footer);
page.appendChild(navigationElement);
page.appendChild(galleryElement);
page.appendChild(footerElement);