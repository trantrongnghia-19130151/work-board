import config from "~/config";
import Home from "~/pages/Home";
import Account from "~/pages/Account";


const publicRoutes = [
    {path: '/', component: Home},
    {path: config.routes.home, component: Home},
    {path: config.routes.account, component: Account, layout: null},


];
const privateRoutes = [];
export {publicRoutes, privateRoutes};