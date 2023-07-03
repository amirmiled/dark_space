import axios from 'axios'
const UserService = {}

UserService.register =  function(data){
    return axios.post('http://localhost:5000/users/signup' , data)
}

UserService.signin =  function(data){
    return axios.post('http://localhost:5000/users/signin' , data)
}

export default UserService;