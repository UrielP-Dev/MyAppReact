import React from 'react'
import cartlogo from '../img/cart.png'
import '../styles/custom.css'
import '../styles/normalize.css'
import '../styles/skeleton.css'

function listaCarrito(){

    

        return(
            <>
                <div id="carrito">
                    <table id="lista-carrito" class="u-full-width">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th> 
                                <th></th>               
                                                
                            </tr>
                        </thead>
                        <tbody>
                                            
                        </tbody>
                    </table>
                    <a href="#" id="vaciar-carrito" className="button u-full-width">Vaciar Carrito</a>
                </div>
            </>
        )
}
function Encabezado() {



  return (

    <>
        <header id='header' className='header'>
            <div className="container">
                <div className="row">
                    <div className="two columns u-pull-right">
                        <ul>
                            <li className="submenu">
                                <img src={cartlogo} id='img-carrito' />
                                
                                {listaCarrito()}
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Encabezado