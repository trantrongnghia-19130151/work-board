import config from "~/config";
import WorkBoard from "src/pages/WorkBoard";
import Login from "~/pages/Login";
import Register from "~/pages/Register";
import Home from "~/pages/Home";







const publicRoutes = [
    {path: '/', component: Home},
    {path: config.routes.home, component: Home},
    {path: config.routes.workBoard, component: WorkBoard},
    {path: config.routes.login, component: Login, layout: null},
    {path: config.routes.register, component: Register, layout: null},



];
const privateRoutes = [];
export {publicRoutes, privateRoutes};