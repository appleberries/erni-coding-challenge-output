const Receipt = ({carData, totalPayment}) => {
    const {id, type, hours} = carData

    return(
        <div>
            <hr/>
            <h2>Official Receipt</h2>
            <p >Car ID: {id}</p>
            <p>Car type: {type}</p>
            <p>Parked hours: {hours}</p>
            <h4>TOTAL: PHP {totalPayment}</h4>
        </div>
    )
}

export default Receipt