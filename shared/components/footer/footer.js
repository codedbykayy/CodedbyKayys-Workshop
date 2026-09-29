function createFooter(data) {
    const footer = document.createElement("footer");
    footer.className = "footer";

    const inner = document.createElement("div");
    inner.className = "footer__inner";

    const buttons = document.createElement("div");
    buttons.className = "footer__buttons";

    // Max 10 footer buttons
    const footerButtons = (data.buttons || []).slice(0, 10);

    footerButtons.forEach(buttonData => {
        const button = document.createElement("a");

        button.className = "footer__button";
        button.textContent = buttonData.label;
        button.href = buttonData.href;

        if (buttonData.external) {
            button.target = "_blank";
            button.rel = "noopener noreferrer";
        }

        buttons.appendChild(button);
    });

    inner.appendChild(buttons);

    if (data.copyright) {
        const copyright = document.createElement("p");
        copyright.className = "footer__copyright";
        copyright.textContent = data.copyright;

        inner.appendChild(copyright);
    }

    footer.appendChild(inner);

    return footer;
}