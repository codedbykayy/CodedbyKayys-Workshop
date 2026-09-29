const page = document.querySelector("#site");
const navigationElement = createNavigation(navigation);
const shopElement = createShop(shop);
const footerElement = createFooter(footer);
page.appendChild(navigationElement);
page.appendChild(shopElement);
page.appendChild(footerElement);