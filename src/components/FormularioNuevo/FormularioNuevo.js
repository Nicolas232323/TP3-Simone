import './FormularioNuevo.css';
export const FormularioNuevo = ({tipo, nombre, label, placeholder}) => {
    <>
    <label>{label}</label>
    { tipo === 'textarea' ? <textarea name={nombre} class="u-full-width"></textarea> : <input type={tipo} name={nombre} placeholder={placeholder} class="u-full-width"></input>}
</>  
}

export default FormularioNuevo;