import React from 'react';
import './FormularioNuevo.css';
const FormularioNuevo = ({tipo, nombre, label, className, placeholder}) => {
    
    if(tipo === 'textarea'){
        return(<><label>{label}</label><textarea name={nombre} className = {className} > </textarea></>)
    }
    else{
        return(<><input type={tipo} name={nombre} placeholder={placeholder} className={className}></input></>)
    }
    }
 


export default FormularioNuevo;