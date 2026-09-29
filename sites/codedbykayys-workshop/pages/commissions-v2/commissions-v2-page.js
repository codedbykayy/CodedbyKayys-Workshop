const page = document.querySelector("#site");
const navigationElement =
    createNavigation(navigation);
const commissionsV2Element =
    createCommissionsV2(commissionsV2);
const footerElement = createFooter(footer);
page.appendChild(navigationElement);
page.appendChild(commissionsV2Element);
page.appendChild(footerElement);