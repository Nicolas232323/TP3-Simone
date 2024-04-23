import React  from "react";
import Button from "../Button/Button";
import './Cita.css';
const Cita = ({nombreMascota, nombreDueño, Fecha, Hora, Sintomas }) => {
    return(
        <>
            <div className="cita"> 
                <p>Mascota: <span>{nombreMascota}</span></p>
                <p>Dueño: <span>{nombreDueño}</span></p>
                <p>Fecha: <span>{Fecha}</span></p>
                <p>Hora: <span>{Hora}</span></p>
                <p>Sintomas: <span>{Sintomas}</span></p>
                <Button text="ELIMINAR X" type="submit" classname="button elimnar u-full-width"/>
            </div>
        </>
    )
}

export default Cita;