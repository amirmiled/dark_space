import {createBrowserRouter} from 'react-router-dom';
import Resgister from '../Pages/Resgister';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import PageNotFound from '../Pages/PageNotFound';

const router = createBrowserRouter([
    {
      path : '/',
      element : <div> Home Page </div>,
      errorElement : <PageNotFound/>
    },
    {
      path : '/login',
      element : <Login/>
    },
    {
      path : '/register',
      element : <Resgister />
    },
    {
      path : '/home',
      element : <Home/>
    }
  ])

  export default router;