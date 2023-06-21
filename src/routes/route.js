import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home'
import MealsCategory from '../pages/MealsCategory';
import Drinks from '../pages/Drinks';

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
                element: <MealsCategory></MealsCategory>
            },
            {
                path: "/drinks",
                element: <Drinks></Drinks>
            }
        ],
    },
]);

export default router;