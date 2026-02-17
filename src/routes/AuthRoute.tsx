import { Route, Routes } from "react-router-dom"
import { PATH } from "../components"
import { LoginHome, Register, Login } from "../pages"


const LoginRoute = () => {
    const routeList = [
        {id:1, path:PATH.home,element:<LoginHome/>},
        {id:2, path:PATH.login,element:<Login/>},
        {id:3, path:PATH.register,element:<Register/>}

    ]
    return(
        <Routes>{routeList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}</Routes>
    )
}

export default LoginRoute;