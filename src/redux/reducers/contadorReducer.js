
const InitialState = 0;

export function contadorReducer(state, action) {
    switch(action.type){
        case "Incrementar":
            return state + 1;
           
        case "Decrementar":
            return state - 1;
           
        case "Resetear":
            return InitialState
            
        case 'Incrementar_cinco':
            return state + action.payload
            
        case "Decrementar_cinco":
            return state + action.payload
            
        default:
            return InitialState;

    }
}