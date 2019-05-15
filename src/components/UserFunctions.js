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

export const updateProfile = user => {
    return axios
        .post('updateProfile', {
            user_id:user.user_id,
            user_name:user.user_name,
            email: user.email,
            cpassword:user.cpassword,
            password: user.password,
            location: user.location,
            house_number:user.house_number

        }).then((res) => {
            //localStorage.setItem('usertoken', res.data)
            return res;
        })     
}

export const getDetails = user => {
    return axios
        .post('getDetails', {
            user_id: user.user_id
        })
        .then((res) => {
            // return res.dataS
             console.log(res)
        })
}