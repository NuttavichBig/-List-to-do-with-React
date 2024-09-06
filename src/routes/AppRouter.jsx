import { Children } from "react";
import Home from "../contents/Home";
import About from "../contents/About";
import Login from "../contents/Login";
import Welcome from "../contents/Welcome";
import Header from "./Header";
import { createBrowserRouter, Outlet,RouterProvider } from "react-router-dom";
import ListToDo from "../contents/ListToDo";
import Register from "../contents/Register";

const guestRouter = createBrowserRouter([
    {
        path : '/',
        element : (
            <>
            <Header/>
            <Outlet/>
            </>
        ),
        children : [
            {path: '' , element:<Home/>},
            {path: '/about',element:<About/>},
            {path: '/yourlist',element:<ListToDo/>},
            {path: '/login',element:<Login/>},
            {path: '/register',element:<Register/>},
            {path: '/welcome',element:<Welcome/>}
        ]
    },
])


export default function AppRouter(){
    return(
        <RouterProvider router={guestRouter}/>
    )
}