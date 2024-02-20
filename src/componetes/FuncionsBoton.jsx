import React, {useState} from 'react';
import BotonDous from './BotonDous';
import{coresCss} from '../funcions/helpers';



export default function FuncionsBoton(){
    let[valor,setValor]= useState(0);

    const cambiarValor = () => {
        valor += 1;
        setValor(valor)
      };

    const resetValor= () => {
        valor = 0;
        setValor(valor)
    }
    
    const restarValor=()=>{
        valor -= 1;
        setValor(valor)
    }
    return(<>
    <div>Valor actual en FuncionsBoton:{valor}</div>
    <BotonDous estilo={coresCss(valor)} funcion={cambiarValor} titulo="sumar valor"/>
    <BotonDous estilo={coresCss(valor)} funcion={resetValor} titulo="Reset Valor"/>
    <BotonDous estilo={coresCss(valor)} funcion={restarValor} titulo="Restar Valor"/>
        </>)
     }

