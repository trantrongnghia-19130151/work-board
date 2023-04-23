import config from "~/config";
import Account from "~/pages/Account";
import WorkBoard from "src/pages/WorkBoard";
import Home from "~/pages/Home";
import CreateWorkspace from "~/pages/CreateWorkspace";








const publicRoutes = [
    {path: '/', component: Home},
    {path: config.routes.home, component: Home},
    {path: config.routes.createWorkspace, component: CreateWorkspace},
    {path: config.routes.account, component: Account, layout: null},
    {path: config.routes.workBoard, component: WorkBoard},
    




];
const privateRoutes = [];
export {publicRoutes, privateRoutes};