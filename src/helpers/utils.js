export const manageReceipt = (type, hours) => {
    const ceiledHours = Math.ceil(hours)
    let total = 0
    let excessHours = 0
    let carTypeRate = 0

    if(ceiledHours > 3){
        total = 3 * 40
        excessHours = ceiledHours - 3

        if(ceiledHours > 24){
            total = 5000
            excessHours = ceiledHours - 24
        }

        carTypeRate = handleCarType(type)

        return total = total + excessHours * carTypeRate
    }

    return ceiledHours * 40
}

// RETURNS AMOUNT DEPENDING ON THE CAR TYPE
const handleCarType = (type) => {
    switch(type){
        case "Small":
            return 20
        case "Medium":
            return 60
        case "Large":
            return 100
        default:
            return
    }
}