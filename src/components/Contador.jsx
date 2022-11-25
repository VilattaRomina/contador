import { restarCinco, sumarCinco } from "../redux/actions/contadorAction"
import { useDispatch, useSelector } from 'react-redux'


export const Contador = () => {

    const dispatch = useDispatch();
    const store = useSelector(state => state.contador);


    return (
        <>
            <div >
                <h1 >Contador de Click</h1>
                <div >
                    <h1>{store}</h1>
                </div>
                <div >
                    <button  onClick={() => dispatch(sumarCinco())}> +5</button>
                    <button  onClick={() => dispatch({ type: "Incrementar" })}>+</button>
                    <button  onClick={() => dispatch({ type: "Resetear" })}>0</button>
                    <button  onClick={() => dispatch({ type: "Decrementar" })}>-</button>
                    <button  onClick={() => dispatch(restarCinco())}> -5</button>
                </div>
            </div>
        </>
    )
}