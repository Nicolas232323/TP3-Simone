import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Cita from './components/Cita/Cita';
function App(props) {

  return (
    <>
      <Titulo texto="ADMINISTRADOR DE PACIENTES" />
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Subtitulo texto="CREAR MI CITA" />
            <form>
            <Input label="Nombre Mascota" type="text" name = "mascota" classname="u-full-width" placeholder="Nombre Mascota" value=""/>  
            <Input label="Nombre Dueño" type="text" name = "propietario" classname="u-full-width" placeholder="Nombre dueño de la mascota" value=""/> 
            <Input label="Fecha" type="date" name = "fecha" classname="u-full-width" placeholder={null} value=""/> 
            <Input label="hora" type="time" name = "hora" classname="u-full-width" placeholder={null} value=""/> 
            <Input label="Sintomas" type="textarea" name = "sintomas" classname="u-full-width" placeholder="Nombre Mascota" value=""/> 
            <Button text = "Agregar Cita" type = "submit" classname = "u-full-width button-primary"/>
            </form>
          </div>
          <div class="one-half column">
            <Subtitulo texto="ADMINISTRA TUS CITAS" />
            <div class = "cita">
            <Cita nombreMascota="Nina" nombreDueño="Martin" Fecha = "2021-08-05" Hora="08:20" Sintomas = "Le duele la pierna"/>
            <Cita nombreMascota="Sifon" nombreDueño="Flecha" Fecha="2023-08-05" Hora="09:24" Sintomas="Duerme mucho"/>
            <Cita nombreMascota="Floki" nombreDueño="Ari" Fecha="2023-08-05" Hora="16:15" Sintomas="No está comiendo"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
