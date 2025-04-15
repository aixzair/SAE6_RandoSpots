export default function root() {
    let root = '';

    if (window.location.hostname.endsWith('github.io')) {
        root = "/SAE6_RandoSpots";
    }

    return root;
}
