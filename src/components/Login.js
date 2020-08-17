import React, { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt_decode'
import { Redirect } from 'react-router-dom'
import setAuhtToken from '../utils/setAuthToken'


export default function Login(props) {
    // console logs for testing
    console.log('🦾🦾🦾🦾🦾🦾')
    console.log(props)

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let handleEmail = (e) => {
        setEmail(e.target.value)
    }

    let handlePassword = (e) => {
        setPassword(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault()

        // capture userData
        const userData = {
            email: email,
            password: password
        }

        // make a post request to our API to see check user Authentication
        axios.post(`${process.env.REACT_APP_API}/api/users/login`, userData)
            .then(res => {
                // take res data and set to token
                const { token } = res.data

                // save toekn to localStorage
                localStorage.setItem('jwtToken', token)

                // set token for Auth Header
                setAuhtToken(token)

                // decode jwt token
                const decoded = jwt_decoded(token)

                // set current user
                props.nowCurrentUser(decoded)
            })
            .catch(err => console.log(err))
    }

    if (props.user) return <Redirect to='/profile' user={props.user} />

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Login</h2>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}