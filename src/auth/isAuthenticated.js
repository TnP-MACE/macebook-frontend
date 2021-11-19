export default function isAuthenticated() {
    return JSON.parse(window.localStorage.getItem("isAuthenticated"));
}
