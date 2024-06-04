import React from 'react';
import './Input.css';
const Input = ({ label = "label", tipo = "default", nombre = "default", classname = "default", placeholder = "default" }) => {
    if (tipo === "textarea") {
        return (
            <>
                <label> {label} </label>
                <textarea name={nombre} className={classname}></textarea>
            </>
        )
    }
    return (
        <>
            <label> {label} </label>
            <input type={tipo} name={nombre} className={classname} placeholder={placeholder}></input>
        </>
    )
}
export default Input;