import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarusel() {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://placekitten.com/200/200"
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Track your gardens progress</h3>
                    <p>Entering your data into Crop-Sense helps you track how you have been caring for your garden, helping you plan changes in the future</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://placekitten.com/200/200"
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Enter your watering information</h3>
                    <p>Monitoring the volume and frequency of watering can help you track your gardens progress through the season.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://placekitten.com/200/200"
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Never forget again</h3>
                    <p>Crop-Sense can help elimintate the stress of remembering when the last time you ammended the soil.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}


export default function Home() {
    return (
        <>
            <ControlledCarusel />
            <div className="title">
                <h1>Welcome to Crop-Sense</h1>
            </div>
        </>
    )
}
