import axios from 'axios'

export const register = newUser => {
    return axios
        .post('register', {
            user_name: newUser.user_name,
            email: newUser.email,
            password: newUser.password,
            location: newUser.location,
            house_number: newUser.house_number
        })
        .then(res => {
        console.log("registered")
    })
}

export const login = user => {
    return axios
        .post('login', {
            email: user.email,
            password:user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
            //display a page with error message
    })
}