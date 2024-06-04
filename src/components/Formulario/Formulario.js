import { useState } from 'react';
import './Formulario.css';
import FormularioNuevo from '../FormularioNuevo/FormularioNuevo';
export const Formulario = ({citas, setCitas, e}) => {
    const crearCita = ({e}) => {
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
    <form class="" onSubmit={crearCita}>
      <FormularioNuevo label="Nombre Mascota" tipo="text" nombre="mascota" class="u-full-width" placeholder="Nombre Mascota"></FormularioNuevo>
      <FormularioNuevo label="Nombre Dueño" tipo="text" nombre="duenio" class="u-full-width" placeholder="Nombre dueño de la mascota"></FormularioNuevo>
      <FormularioNuevo label="Fecha" tipo="date" nombre="fecha" class="u-full-width" placeholder=""></FormularioNuevo>
      <FormularioNuevo label="Hora" tipo="time" nombre="hora" class="u-full-width" placeholder=""></FormularioNuevo>
      <FormularioNuevo label="Síntomas" tipo="textarea" nombre="sintomas" class="u-full-width" placeholder=""></FormularioNuevo>
      <button class="u-full-width button-primary">Agregar Cita</button>
    </form>
)
}


export default Formulario;