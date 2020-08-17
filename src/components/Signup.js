import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default function Signup() {
    let [name, setName] = useState('')
    let [email, setEmail] = setState('')
    let [password, setPassword] = useState('')
    let [passsword2, setPassword2] = useState('')
    let [redirect, setRedirect] = setRedirect(false)

    let handleName = (e) => {
        setName(e.target.value)
    }

    let handleEmail = (e) => {
        setEmail(e.target.value)
    }

    let handlePassword = (e) => {
        setPassword(e.target.value)
    }

    let handlePassword2 = (e) => {
        setPassword2(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        // check if both passwords are the same
        if (password === password2) {
            const newUser = {
                name: name,
                email: email, 
                password: password
        }

        axios.post(`${process.env.REACT_APP_API}/api/users/register`, newUser)
            .then(res => {
                // redirect user to Login
                setRedirect(true)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

if (redirect) return <Redirect to='/login' />


    return (
        <div className="row mt-4">
        <div className="col-md-7 offset-md-3">
            <div className="card card-body">
                <h2 className="py-2">Signup</h2>
                <form action="/ideas" method="post" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={name} onChange={handleName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Confirm Password</label>
                        <input type="password" name="password2" value={password2} onChange={handlePassword2} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                </form>
            </div>
        </div>
        </div>
    )
}