import { useState } from "react";

export const FormAddSubs = ({setType,setPrice,type,price}) => {
    const [error, setError] = useState(false);
    const handleSubs=e=>{
        e.preventDefault();
        if(price==="" || Number(price)<=0 || type===""){
            return setError(true);
        }
        setError(false);
    }
  return (
    <div className="add-subcription">
        <h3>Agregar Suscripciones</h3>
        <form onSubmit={handleSubs}>
            <p>Servicio</p>
            <select onChange={e=>setType(e.target.value)}>
                <option value="">--Elegir--</option>
                <option value="netflix">Netflix</option>
                <option value="disneyPlus">Disney Plus</option>
                <option value="hboMax">HBO Max</option>
                <option value="startPlus">Star Plus</option>
                <option value="primeVideos">Prime Videos</option>
                <option value="spotify">Spotify</option>
                <option value="appleTv">Apple tv</option>
            </select>
            <p>Cantidad</p>
            <input type="number" placeholder='S/.20' onChange={e=>setPrice(e.target.value)}/>
            <input type="submit" value="Agregar"/>
        </form>
        {error ? <p className="error">Campos inválidos</p> : null}
    </div>
  )
}
