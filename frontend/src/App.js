import logo from './logo.svg';
import './App.css';

import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import Resgister from './Pages/Resgister';
import Login from './Pages/Login';
import Home from './Pages/Home';


import router from './Config/routes'
function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
