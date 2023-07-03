import React from 'react';
import './style.css';
const UsernameCard = (props) => {
  return (
    <>
        <div className='username_card'>
            <div className='username_card_image'>
            {
                props.user.picture == "" ? (
                <h3 className='profile_caracter'> {props.user.firstname[0]} </h3> 
                ): (
                <img src='https://images.pexels.com/photos/16144193/pexels-photo-16144193/free-photo-of-rhume-glacier-iceberg-neige.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                )}
            </div>

            <div className='username_card_info'>
                <h3 className='usrename'> {props.user.firstname + ' '+ props.user.lastname} </h3>
                <span className='small'> @amirmiled </span>
            
            </div>
        </div>
    </>
  )
}

export default UsernameCard
