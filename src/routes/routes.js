import config from "~/config";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Register from "~/pages/Register";







const publicRoutes = [
    {path: '/', component: Home},
    {path: config.routes.home, component: Home},
    {path: config.routes.login, component: Login, layout: null},
    {path: config.routes.register, component: Register, layout: null},



];
const privateRoutes = [];
export {publicRoutes, privateRoutes};