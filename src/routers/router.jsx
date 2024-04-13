import {createBrowserRouter} from "react-router-dom"
import App from "../App.jsx"
import Home from "../pages/Home.jsx"
import Cadastro from "../pages/Cadastro.jsx"
import ListaTrilhas from "../pages/ListaTrilhas.jsx"
import NotFound from "../pages/NotFound.jsx"

const routers = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/cadastro",
                element: <Cadastro />
            },
            {
                path: "/listatrilhas",
                element: <ListaTrilhas />
            }
        ]
    }
]);

export default routers;