import Main from "../Layouts/Main";
import NewsLayouts from "../Layouts/NewsLayouts";
import Category from "../pages/Home/Category/Category";
import Home from "../pages/Home/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import News from "../pages/News/News/News";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/category/:id',
                element: <Category />,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
    {
        path: 'news',
        element: <NewsLayouts />,
        children: [
            {
                path: ':id',
                element: <News />
            }
        ]
    }
])

export default router;