import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CARRITO_ADD, CARRITO_UPDATE } from '../../redux/actions/carrito/actions';
import { MSJ_ADD } from '../../redux/actions/mensaje/actions';
import {IconButton} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Button from '@material-ui/core/Button';
import { Store } from '@material-ui/icons';


export const ArticuloAdd = (props) => {
	
    const {articulo} = props;

	const carritoReducer = useSelector(
		(state) => state.carrito
	);
	
	const [cantidad,setCantidad] = useState(0);

    //para cargar datos en un componentes la primera vez
    //uso useEffect
    useEffect( () => {

		//cantidad del articulo en el carrito
		const itemEnCarrito = carritoReducer.items.filter(item=>item.item.id === articulo.id);

		if(itemEnCarrito.length > 0) {
			setCantidad(itemEnCarrito[0].cantidad);
		}
	},[articulo.id, carritoReducer.items]
	);

	const carritoDispatch = useDispatch();

	const submitHandler = () => { 

		const existsInCart = carritoReducer.items.find(item=>item.item.id === articulo.id);
		
		let action = CARRITO_ADD;

		if(existsInCart) {
			action = CARRITO_UPDATE;
		}

		action.payload = {
			item:  articulo,
			cantidad : cantidad
		}

		carritoDispatch(action);
		
		
		//informo que hubo un mensaje
		let actionMsj = MSJ_ADD;
		actionMsj.payload = 'Se ha agregado ' + cantidad +" "+  articulo.titulo;
		carritoDispatch(actionMsj);
		
	}

	const increment = () => {
		setCantidad(cantidad + 1);
	}

	const decrement = () => {	
		if(cantidad <= 0) {
			setCantidad(0);
		}else {
			setCantidad(cantidad - 1);
		}
	}

    return (
        <div className="input-group mb justify-content-center">
            <div className="col-auto">
				<IconButton color="primary" aria-label="add to shopping cart" onClick={() => decrement()} disabled={cantidad===0}>
  					<RemoveShoppingCartIcon/>
				</IconButton>
				
            </div>
            <div className="col">
                <label htmlFor="cantidad" className="visually-hidden">Cantidad</label>
                <input type="text" className="form-control" placeholder="cantidad" aria-label="" aria-describedby="btnAdd"
                    min="0" max="999"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)} />
            </div>
            <div className="col-auto">
				<IconButton color="primary" aria-label="add to shopping cart" onClick={() => increment()}>
  					<AddShoppingCartIcon/>
				</IconButton>
            </div>
            
			<Button variant="contained" color="primary"  onClick={()=>submitHandler()}
                disabled={cantidad === 0 || cantidad >= 999}>
        		Agregar
      		</Button>
        </div>
    )
}
