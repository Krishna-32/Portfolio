import Navbar from './Practice/Routing/Navbar'
import Home from './Practice/Routing/Home'
import About from './Practice/Routing/About'
import Profile from './Practice/Routing/Profile'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFound from './Practice/Routing/NotFound';

function App(){

    const router = createBrowserRouter([
        {
        path: '/Home',
        element: <><Navbar/> <Home/></>,
        },
        {
        path: '/About',
        element: <><Navbar/> <About/></>,
        },
        {
        path: '/Profile/:profileName',
        element: <><Navbar/> <Profile/></>,
        },
        {
            path: '*',
            element: <NotFound />
        }
    ])

    return(
        <>
            
            <RouterProvider router={router}/>
        </>
    );
}

export default App