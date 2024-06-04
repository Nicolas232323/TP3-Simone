import { useState } from 'react';
import './Formulario.css';
import Input from '../Input/Input';
export const Formulario = ({citas, setCitas}) => {
    const crearCita = (e) => {
      e.preventDefault();
        if (window.confirm("Estas seguro que quieres crear la cita?")) {
            setCitas([
              ...citas,
              {
                id: Date.now(),
                mascota: e.target.mascota.value,
                duenio: e.target.duenio.value,
                fecha: e.target.fecha.value,
                hora: e.target.hora.value,
                sintomas: e.target.sintomas.value,
              },
            ]);
            
          }
    }
      return(
    <form classname="" onSubmit={crearCita}>
      <Input label="Nombre Mascota" tipo="text" nombre="mascota" classname="u-full-width" placeholder="Nombre Mascota"></Input>
      <Input label="Nombre Dueño" tipo="text" nombre="duenio" classname="u-full-width" placeholder="Nombre dueño de la mascota"></Input>
      <Input label="Fecha" tipo="date" nombre="fecha" classname="u-full-width" placeholder="DD/MM/AAAA"></Input>
      <Input label="Hora" tipo="time" nombre="hora" classname="u-full-width" placeholder="HH:MM"></Input>
      <Input label="Síntomas" tipo="textarea" nombre="sintomas" classname="u-full-width" placeholder="Sintomas"></Input>
      <button type='Submit' onClick={crearCita} classname="u-full-width button-primary">Agregar Cita</button>
    </form>
)
}
export default Formulario;