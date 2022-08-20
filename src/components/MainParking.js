import '../App.css'
import { useContext, useState } from "react"
import { CarContext } from './Car'
import { manageReceipt } from '../helpers/utils'
import Receipt from './Receipt'

const P_SLOTS = 9

const MainParking = () => {
    const slots = Array(P_SLOTS).fill(null)
    const {info, setInfo} = useContext(CarContext)
    const [carData, setCarData] = useState(null)
    const [totalPayment, setTotalPayment] = useState(0)
    const [isReceipt, setIsReceipt] = useState(false)

    // FUNCTION FOR UNPARKING
    const handleSlotClick = (data) => {
        setCarData(data)
        if(data){
            const result = info.filter(item => item.id !== data.id)
            setInfo(result)
        }

        setIsReceipt(true)
        setTotalPayment(manageReceipt(data.type, data.hours))
    }

    return(
        <>
        <div style={{marginTop: "20px"}}>
            <h4>Parking Map</h4>
            <div style={{display: "inline-block"}}>
                <div className="common-style row-label">
                    <p>SP</p>
                    <p>MP</p>
                    <p>LP</p>
                </div>
            </div>
            <div style={{display: "inline-block"}}>
                <div className="common-style main-square">
                    {slots.map((slot, idx) => 
                        <div key={idx} className={`square ${idx}`} onClick={() => handleSlotClick(info[idx])} style={{border: info[idx] ? "1px solid red" : "1px solid green"}}>
                            {info[idx] ? <p>{info[idx].id}</p> : null}
                        </div>
                    )}
                </div>
            </div>
            <div style={{marginTop: "10px"}}>
                <small>To unpark, just simply click the red slot.</small>
            </div>
        </div>

        {isReceipt && <Receipt carData={carData} totalPayment={totalPayment}/>}
        </>
    )
}

export default MainParking