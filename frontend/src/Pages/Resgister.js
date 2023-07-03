import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from 'react'
import UserService from '../Services/UserService'

const Resgister = () => {

    const [firstname , setFirstname] = useState('')
    const [lastname , setLastname] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [bio , setBio] = useState('')
    const [picture , setPicture] = useState('')
    const [birthdate,setBirthdate] = useState('')
    const [errors , setErrors] = useState(
        {
            firstname : '',
            lastname : '',
            email : '',
            password : '',
            bio : '',
            birthdate : '',
        }
    )


    const formValidartion = () => {

        let status = true;
        let localErrors = {...errors}

        if(firstname == ""){
            localErrors.firstname ='Firstname required';
            status = false;
        }

        if(lastname == ""){
            localErrors.lastname ='Lastname required';
            status = false;
        }
        if (email == ""){
            localErrors.email= 'Email required';
            status = false;
        }
        if (password == "" || password.length < 8){
            localErrors.password = 'Password required and short';
            status = false;
        }
        if (bio == ""){
            localErrors.bio= 'Bio required';
            status = false;
        } 
        if (birthdate == ""){
            localErrors.birthdate= 'Birthdate required';
        } 
        setErrors(localErrors)
        //console.log(localErrors)
        return status;
    }


    const register = async (e) =>{
        e.preventDefault();
        console.log("form submitted");
        console.log("form data" , firstname , lastname , email , password , bio , birthdate );

        if ( formValidartion() ) {          //form valid
            const data = {
                firstname : firstname,
                lastname : lastname,
                email : email,
                password : password,
                bio : bio,
                birthdate : birthdate,
                picture : picture
            } 


                try{

                    const response = await UserService.register( data )
                    console.log("response ===>" , response);
                    toast.success('User Created Successfully ...');
                    setFirstname('')
                    setLastname('')
                    setEmail('')
                    setPassword('')
                    setBirthdate('')
                    setBio('')

        
                }catch(err){
                        console.log(err)
                        toast.error('Failed While SignUp ...');
        
                }

            }else{
                console.log("form invalid");
            }

        

        


    }



return (
    <div className='register'>
         <Toaster />
        <div className='register-cover'>
        
        </div>
        <div className='register-content'>
                <div>
                    <h1 className='title'> DARK SPACE </h1>
                    <p className='title'> Dark Space Social Media Application</p>
                </div>

                <div>
                    <form onSubmit={register}>
                        <div className='form-group'>
                            <label> Firstname </label>
                            <input className='input' type="text" 
                            value={firstname}
                            onChange={ (e)=>setFirstname(e.target.value)}/> 
                            {
                                errors.firstname != " " ? <div style={{ textAlign: 'left' , color:'orangered'}}>
                                    { errors.firstname}
                                </div> : ''
                            }
                        </div>

                        <div className='form-group'>
                            <label> Lastname </label>
                            <input className='input' type="text" 
                            value={lastname}
                            onChange={  (e)=>setLastname(e.target.value)}/>
                            {
                                errors.lastname != " " ? <div style={{ textAlign: 'left' , color:'orangered'}}>
                                    { errors.lastname}
                                </div> : ''
                            }
                        </div>

                        <div className='form-group'>
                            <label> Email </label>
                            <input className='input' type="email"
                            value={email}
                            onChange={ (e)=>setEmail(e.target.value)} />
                            {
                                errors.email != " " ? <div style={{ textAlign: 'left' , color:'orangered'}}>
                                    { errors.email}
                                </div> : ''
                            }
                        </div>

                        <div className='form-group'>
                            <label> Password </label>
                            <input className='input' type="password" 
                            value={password}
                            onChange={ (e)=>setPassword(e.target.value)}/>
                            {
                                errors.password != " " ? <div style={{ textAlign: 'left' , color:'orangered'}}>
                                    { errors.password}
                                </div> : ''
                            }
                        </div>

                        <div className='form-group'>
                            <label> Bio </label>
                            <textarea 
                            value={bio}
                            onChange={ (e)=>setBio(e.target.value)}></textarea>
                            {
                                errors.bio != " " ? <div style={{ textAlign: 'left' , color:'orangered'}}>
                                    { errors.bio}
                                </div> : ''
                            }
                        </div>


                        <div className='form-group'>
                            <label> Birthdate </label>
                            <input className='input' type="date"
                            value={birthdate}
                            onChange={(e)=>setBirthdate(e.target.value)} />
                        </div>

                        <button className='btn signup' type='submit' >Sign Up</button>
                    </form>
                
                </div>
        
        </div>
    
    </div>
  )
}

export default Resgister
