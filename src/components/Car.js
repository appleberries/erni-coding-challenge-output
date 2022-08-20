import React from 'react'
import { useState } from "react"
import MainParking from "./MainParking"

// UTILIZED WHEN REMOVING A CAR IN STATE
export const CarContext = React.createContext()

const Car = ({isGoBack}) =>{
    const types = ['Small', 'Medium', 'Large']
    const [ID, setID] = useState("")
    const [type, setType] = useState("")
    const [hours, setHours] = useState(0)
    const [info, setInfo] = useState([])

    const handleIDChange = (e) =>{
        setID(e.target.value)
    }

    const handleTypeClick = (type) =>{
        setType(type)
    }

    const handleHoursChange = (e) =>{
        setHours(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        // HANDLER FOR EMPTY INPUTS
        // MUST CREATE ERROR MESSAGE
        if(ID === "" || type === "" || hours <= 0) return

        setInfo(data => [...data, {id: ID, type: type, hours}])
        setID("")
        setType("")
        setHours("")
    }

    return(
        <>
            {!isGoBack ? 
                <div>
                    <form onSubmit={handleSubmit}>
                        <p>ID (Plate number)</p>
                        <input type="text" name="id" value={ID} onChange={handleIDChange} minLength="3" ></input>

                        <p>Vehicle type (Small, Medium, Large)</p>
                        {types.map(type => <button key={type} type="button" name="type" onClick={() => handleTypeClick(type)}>{type}</button>)}

                        <p>How long do you intend to park? (Please indicate # of hours)</p>
                        <input type="number" name="hours" value={hours} onChange={handleHoursChange} min="1.00"step="0.1"presicion={1}></input>
                        <br/>
                        <button type="submit" style={{marginTop: "20px"}}>Submit</button>
                    </form>

                    <CarContext.Provider value={{info, setInfo}}>
                        <MainParking/>
                    </CarContext.Provider>
                </div>
            : null}
        </>
    )
}

export default Car