import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import UsernameCard from './Components/UsernameCard';
import Sidebar from './Components/Sidebar';
import Stories from './Components/Stories';

const Home = () => {

    const [connectedUser,setConnectedUser] = useState({});

    const navigate = useNavigate();


   const getConnectedUserData = () =>{

    setConnectedUser( JSON.parse(localStorage.getItem("user_data")));

   // console.log(localStorage.getItem("user_data"))
       
    };

    useEffect( ()=>{
        getConnectedUserData();

        if (localStorage.getItem("user_data") === null){ 
            // user not connected
            //redirection vers lapage login
            navigate("/login");
        }
    },[]);


  return (
    <>

    <Navbar/>
    <div className='layout-app'>
    {/*left box */}
      <div style={{ width:"25%"}}>
      <UsernameCard user={connectedUser}/>
      <Sidebar />
      
      </div>
      {/* Middle box*/}
      <div  style={{ width:"50%"}}>
      <Stories />
      </div>
      {/*right box*/}
      <div  style={{ width:"25%"}}>right box</div>
    </div>



    {/*  <h1> HELLO {connectedUser.lastname +` ` + connectedUser.firstname} </h1> */}
    </>
  );
};

export default Home ;
