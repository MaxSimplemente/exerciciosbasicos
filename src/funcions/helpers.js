const coresCss = (valor)=>{

    let css = "white";
    
    if(valor >= 5){
        css ="red"
    }
    if(valor == 0) { 
        css = "yellow"
    }
    if(valor < 5 && valor > 0){
        css = "green"
    }
    return css
}
    export {    
    coresCss
    }