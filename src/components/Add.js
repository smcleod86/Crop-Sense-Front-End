import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Add = () => {
    const [area, setArea] = useState()

    const handleArea = (e) => {
        setArea(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let query = ""
    }

    const handleClear = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <br></br>
                <div>
                    <label htmlFor="area"> Enter the name of a new area you are gardening:
                        <input type="text" id="area" name="area"  onChange={handleArea} />
                    </label>
                </div>
                <br></br>
                <input type="submit" value="Submit" />
                <input type="submit" value="Clear" />
            </form>
        </div>
    )
}

export default Add;
