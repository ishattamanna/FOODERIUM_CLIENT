import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main"
import Home from "../Pages/Home";
import MealCategory from "../Pages/MealCategory";
import Drinks from "../Pages/Drinks";
import Meals from "../Pages/Meals";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/meals",
                element: <MealCategory></MealCategory>,
            },
            {
                path: "/drinks",
                element: <Drinks></Drinks>,
            },
            {
                path: "/category-meals/:id",
                element: <Meals></Meals>,
            },
            {
                path: "/login",
                element: <LogIn></LogIn>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
        ],
    },

]);

export default router;
