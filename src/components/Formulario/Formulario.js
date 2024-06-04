
import React from 'react';
//import { useState } from 'react';
import './Formulario.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
const Formulario = ({citas, setCitas}) => {
    const crearCita = (e) => {
      e.preventDefault();
      console.log(e.target.mascota.value)
        if (window.confirm("Estas seguro que quieres crear la cita?")) {
            setCitas([
              ...citas,
              {
                id: Date.now(),
                nombreMascota: e.target.mascota.value,
                nombreDueño: e.target.duenio.value,
                Fecha: e.target.fecha.value,
                Hora: e.target.hora.value,
                Sintomas: e.target.sintomas.value,
              },
            ]);
            console.log(citas)
            
          }
    }
      return(
    <form classname="" onSubmit={crearCita}>
      <Input label="Nombre Mascota" tipo="text" nombre="mascota" classname="u-full-width" placeholder="Nombre Mascota"></Input>
      <Input label="Nombre Dueño" tipo="text" nombre="duenio" classname="u-full-width" placeholder="Nombre dueño de la mascota"></Input>
      <Input label="Fecha" tipo="date" nombre="fecha" classname="u-full-width" placeholder="DD/MM/AAAA"></Input>
      <Input label="Hora" tipo="time" nombre="hora" classname="u-full-width" placeholder="HH:MM"></Input>
      <Input label="Síntomas" tipo="textarea" nombre="sintomas" classname="u-full-width" placeholder="Sintomas"></Input>
      <Button text="Agregar Cita" type="Submit" clase="button-primary"> </Button>
    </form>
)
}
export default Formulario;