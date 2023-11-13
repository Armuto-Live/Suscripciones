import React, { useState } from "react";

export const FormAddMoney = ({setCount,setIsValid}) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (input === "" || Number(input) < 0) {
        return setError(true);
    }
    setError(false);
    setCount(Number(input));
    setIsValid(true)
  };
  return (
    <div className="form-add-money">
      <form onSubmit={handleForm}>
        <p>Agregar persupuesto</p>
        <input
          type="number"
          placeholder="S/.300"
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Agregar" />
      </form>
      {error ? <p className="error">Presupuesto inválido</p> : null}
    </div>
  );
};
