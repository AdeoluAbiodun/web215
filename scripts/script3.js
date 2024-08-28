const linksData = [
    { text: 'Contract', href: 'https://adeoluabiodun.github.io/contract.html' },
    { text: 'Introduction', href: 'https://adeoluabiodun.github.io/introduction.html' },
    { text: 'Brand', href: 'https://adeoluabiodun.github.io/brand.html' },
    { text: 'GitHub', href: 'https://adeoluabiodun.github.io/' },
    { text: 'Codecademy', href: 'https://www.codecademy.com/profiles/AdeoluAbiodun' },
    { text: 'JSFiddle', href: 'https://jsfiddle.net/user/AdeoluAbiodun/' },
    { text: 'Web115', href: 'https://adeoluabiodun.github.io/web115.html' }
];

function generateTOC() {
    const tocList = document.getElementById('toc-list');
    const footerLinks = document.getElementById('footer-links');

    linksData.forEach((linkInfo, index) => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.textContent = linkInfo.text;
        anchor.href = linkInfo.href;
        listItem.appendChild(anchor);
        tocList.appendChild(listItem);

        if (index < linksData.length - 1) {
            footerLinks.innerHTML += `<a class="custom-list-B" href="${linkInfo.href}">${linkInfo.text}</a> || `;
        } else {
            footerLinks.innerHTML += `<a class="custom-list-B" href="${linkInfo.href}">${linkInfo.text}</a>`;
        }
    });
}

generateTOC();
