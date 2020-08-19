import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Update = () => {
    const [waterVolume, setWaterVolume] = useState()
    const [waterDate, setWaterDate] = useState()
    const [plantDate, setPlantDate] = useState()
    const [harvestDate, setHarvestDate] = useState()
    const [ammendDate, setAmmendDate] = useState()
    const [temperature, setTemperature] = useState()

    const handleWaterVolume = (e) => {
        setWaterVolume(e.target.value)
    }

    const handleWaterDate = (e) => {
        setWaterDate(e.target.value)
    }

    const handlePlantDate = (e) => {
        setPlantDate(e.target.value)
    }

    const handleHarvestDate = (e) => {
        setHarvestDate(e.target.value)
    }

    const handleAmmendDate = (e) => {
        setAmmendDate(e.target.value)
    }

    const handleTemperature = (e) => {
        setTemperature(e.target.value)
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
                    <label htmlFor="waterVolume"> Volume of water applied:
                        <input type="text" id="waterVolume" name="waterVolume"  onChange={handleWaterVolume} />
                    </label>
                    <label htmlFor="waterDate"> Watering Date:
                        <input type="text" id="waterDate" name="waterDate" onChange={handleWaterDate} />
                    </label>
                    <label htmlFor="plantDate"> Plant Date:
                        <input type="text" id="plantDate" name="plantDate"  onChange={handlePlantDate} />
                    </label>
                    <label htmlFor="harvestDate"> Harvest Date:
                        <input type="text" id="harvestDate" name="harvestDate" onChange={handleHarvestDate} />
                    </label>
                    <label htmlFor="ammendDate"> Ammendment Date:
                        <input type="text" id="ammendDate" name="ammendDate"  onChange={handleAmmendDate} />
                    </label>
                    <label htmlFor="temperature"> Temperature:
                        <input type="text" id="temperature" name="temperature" onChange={handleTemperature} />
                    </label>
                </div>
                <br></br>
                <input type="submit" value="Submit" />
                <input type="submit" value="Clear" />
            </form>
        </div>
    )
}

export default Update;
