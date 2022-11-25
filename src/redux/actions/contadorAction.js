export const sumarCinco = () =>{
    return {
        type: "Incrementar_cinco" ,
        payload: 5
    }
   
}
export const restarCinco = () =>{
    return {
        type: "Decrementar_cinco" ,
        payload: -5
    }
   
}