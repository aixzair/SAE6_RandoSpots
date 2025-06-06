import root from './../../app/root.js';

// Load the header
fetch(`${root()}/pages/partials/header.html`)
.then(response => response.text())
.then(header => {
    header = header.replaceAll('__LOGIN__', root() + '/pages/connection/login.html');
    header = header.replaceAll('__HOME__', root() + '/index.html');
    header = header.replaceAll('__HISTORY__', root() + '/pages/routes/history.html');
    header = header.replaceAll('__FEED__', root() + '/pages/friends/feed.html');
    header = header.replaceAll('__HELP__', root() + '/pages/others/emergencies.html');

    document.getElementById('header').innerHTML = header;
})
.catch(error => console.error(error));

// Load the footer
const footerPrimary = document.getElementById('footer-primary');

if (footerPrimary != undefined) {
    fetch(`${root()}/pages/partials/footer-primary.html`)
    .then(response => response.text())
    .then(footer => {
        footer = footer.replaceAll('__HOME__', root() + '/index.html');
        footer = footer.replaceAll('__HISTORY__', root() + '/pages/routes/history.html');
        footer = footer.replaceAll('__FEED__', root() + '/pages/friends/feed.html');
        footer = footer.replaceAll('__HELP__', root() + '/pages/others/emergencies.html');

        footerPrimary.innerHTML = footer;
    })
    .catch(error => console.error(error));
}
