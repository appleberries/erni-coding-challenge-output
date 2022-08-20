import { useState } from "react"

const useInput = (initialValues) =>{
    const [values, setValues] = useState(initialValues)

    return [
        values,
        e => {
            setValues({...values, [e.target.name]: e.target.value})
        }
    ]
}

export default useInput