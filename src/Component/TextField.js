import { useField ,ErrorMessage } from 'formik'
import React from 'react'
const style = {
    small : {
        color : "red"
    }
}
export const TextField = ({label , ...props}) => {
    const [field ,meta] = useField(props)
    console.log(field)
    return (
        <div className="mb-2">
            <label>{label}:</label>
            <input  className="form-control shadow-none"  {...field} {...props}   autoComplete="off" />
            <ErrorMessage   style={style.small} component="small"  name={field.name} />
        </div>
    )
}
