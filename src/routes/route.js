import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main"
import Home from "../Pages/Home";
import MealCategory from "../Pages/MealCategory";
import Drinks from "../Pages/Drinks";

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
        ],
    },

]);

export default router;