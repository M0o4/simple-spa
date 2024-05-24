import home from '../views/home.js';
import service from "../views/service.js";
import poster from "../views/poster.js";

const routes = [
    { path: '/',  component: home },
    { path: '/service', component: service},
    { path: '/poster', component: poster },
];

const app = document.getElementById('app');
const head = document.getElementsByTagName('head')[0];

routes.forEach((route) => {
    const style = route.component.style();

    if (style) {
        const styles = document.createElement('link');
        styles.rel = 'stylesheet';
        styles.media = 'screen';
        styles.type = 'text/css';
        styles.href = `/views/${route.component.style()}`;
        head.appendChild(styles);
    }
});

function router() {
    const view = routes.find((route) => route.path === location.pathname)?.component;

    if (view) {
        app.innerHTML = view.render();
        return;
    }

    history.replaceState('', '', '/');
    router();
}

window.addEventListener('click', (event) => {
    if (event.target.matches('[data-link]')) {
        event.preventDefault();
        history.pushState('', '', event.target.href);
        router();
    }
});

window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);