function createPrivacyPolicy(data) {
    const policy = document.createElement("section");
    policy.className = "privacy-policy";

    const header = document.createElement("div");
    header.className = "privacy-policy__header";

    const eyebrow = document.createElement("p");
    eyebrow.className = "privacy-policy__eyebrow";
    eyebrow.textContent = data.eyebrow || "Privacy & Data";

    const title = document.createElement("h1");
    title.className = "privacy-policy__title";
    title.textContent = data.title || "Privacy Policy";

    const effectiveDate = document.createElement("p");
    effectiveDate.className = "privacy-policy__date";
    effectiveDate.textContent = `Effective: ${data.effectiveDate}`;

    header.appendChild(eyebrow);
    header.appendChild(title);
    header.appendChild(effectiveDate);

    const content = document.createElement("div");
    content.className = "privacy-policy__content";

    data.sections.forEach(section => {
        const sectionElement = document.createElement("section");
        sectionElement.className = "privacy-policy__section";

        const heading = document.createElement("h2");
        heading.textContent = section.title;

        sectionElement.appendChild(heading);

        if (section.paragraphs) {
            section.paragraphs.forEach(text => {
                const paragraph = document.createElement("p");
                paragraph.textContent = text;

                sectionElement.appendChild(paragraph);
            });
        }

        if (section.list) {
            const list = document.createElement("ul");

            section.list.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = item;

                list.appendChild(listItem);
            });

            sectionElement.appendChild(list);
        }

        content.appendChild(sectionElement);
    });

    const contact = document.createElement("div");
    contact.className = "privacy-policy__contact";

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Questions or Privacy Requests";

    const contactText = document.createElement("p");
    contactText.append("For privacy questions or requests, contact ");

    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${data.contactEmail}`;
    emailLink.textContent = data.contactEmail;

    contactText.appendChild(emailLink);
    contactText.append(".");

    contact.appendChild(contactTitle);
    contact.appendChild(contactText);

    policy.appendChild(header);
    policy.appendChild(content);
    policy.appendChild(contact);

    return policy;
}