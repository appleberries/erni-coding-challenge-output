import { useState } from "react"
import Car from "./Car"
import App from "../App"

const AreaEntrance = ({name}) =>{
    const [isPark, setIsPark] = useState(false)
    const [isGoBack, setIsGoBack] = useState(false)

    const handleParkClick = () =>{
        setIsPark(true)
    }

    const handleGoBackClick = () =>{
        setIsGoBack(true)
    }

    return(
        <>
            {!isGoBack ?
                <div>
                    <p>You are now in {name}</p>
                    <p>What would you like to do?</p>
    
                    <button onClick={handleParkClick}>Park</button>
                    <button onClick={handleGoBackClick}>Go back</button>
                </div>
            : null}

            {isPark && <Car isGoBack={isGoBack}/>}
            {isGoBack && <App/>}
        </>
    )
}

export default AreaEntrance

