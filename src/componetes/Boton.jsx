import React, { useState } from "react";

export default function Boton() {
  let [valor, setValor] = useState(0);

  const cambiarValor = () => {
    valor += 1;
    setValor(valor);
  };

  const resValor = () => {
    valor = 0;
    setValor(valor);
  };

  const restarValor = () => {
    valor -= 1;
    setValor(valor);

    
  };

  return (
    <div>

      <p>Valor actual:{valor}</p>
      <button onClick={cambiarValor}>Cambiar valor</button>
      <button onClick={resValor}>Reset valor</button>
      <button onClick={restarValor}>Restar Valor</button>
      
    </div>
  );
}
