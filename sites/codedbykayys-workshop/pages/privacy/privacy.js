const page = document.querySelector("#site");

const navigationElement = createNavigation(navigation);

const privacyPage = document.createElement("section");
privacyPage.className = "privacy-page";

const privacyPolicy = createPrivacyPolicy(privacy);
const footerElement = createFooter(footer);

privacyPage.appendChild(privacyPolicy);

page.appendChild(navigationElement);
page.appendChild(privacyPage);
page.appendChild(footerElement);