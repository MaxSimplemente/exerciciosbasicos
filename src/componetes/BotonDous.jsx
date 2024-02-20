export default function BotonDous(props){
    return <button style={{
        backgroundColor: `${props.estilo}`
    }} onClick={props.funcion}>{props.titulo}</button>
}
