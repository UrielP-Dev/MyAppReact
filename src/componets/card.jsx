import React, { useState } from 'react';
import cursosData from '../data/cursos.json'
import estrellas from '../img/estrellas.png'
import '../styles/custom.css'
import '../styles/normalize.css'
import '../styles/skeleton.css'

let articulosCarrito = []
function agregarCurso(e){
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)    
    }
}

function leerDatosCurso(curso) {
    const infoCurso = {
        id : curso.querySelector('a').getAttribute('data-id'),
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        cantidad : 1, 
    }

    const found = articulosCarrito.map((e) => e.id).indexOf(infoCurso.id)
        articulosCarrito.some(a => a.id === infoCurso.id ) ? 
        articulosCarrito[found].cantidad += 1 : 
        articulosCarrito = [...articulosCarrito ,infoCurso]
    
        carritoHTML()
}

function carritoHTML() {
    contenedorCarrito.innerHTML = ''
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>
            <img width ="130px"  src='${curso.imagen}'>
        </td
        <td>
            ${curso.titulo}
        </td>
        <td>
            ${curso.precio}
        </td>
        <td>
            ${curso.cantidad}
        </td>
        <td class = "eliminar">
            <img src="./img/delete.png" >
        </td>
                
        `
        contenedorCarrito.appendChild(row )
        const eliminar = row.querySelector('.eliminar')
        
        eliminar.addEventListener('click', () => eliminarCurso(curso))

        const DropCarrito = document.querySelector('#carrito a')
    
        DropCarrito.addEventListener('click', () => EliminarCarrito())

    })
}

function EliminarCarrito() {
    contenedorCarrito.innerHTML = ""
    articulosCarrito = []

}

function eliminarCurso(EliminarCurso) {
    if(articulosCarrito.some(articulosCarrito => articulosCarrito.id == EliminarCurso.id)){
        articulosCarrito = articulosCarrito.map(curso => {if(curso.id === EliminarCurso.id ){
            if(curso.cantidad>1){
                curso.cantidad--;
            }else 
            { 
                return null 
            }
        }
        return curso
        }).filter(curso => curso !== null)
    }
    carritoHTML()
}

function Card(listacursos) {

   const [cursos] = useState(cursosData);
    
    
    
  return (
    <>
        {cursos.map((curso) => (
            <div className="card" >
                <img src={curso.imagen} className="image-curso u-full-width" />
                <div className="info-card">
                    <h4>{curso.titulo}</h4>
                    <p>{curso.instructor}</p>
                    <img src={estrellas} />
                    <p className="precio">{curso.precio} <span className="u-pull-right">{curso.descuento}</span> </p>
                    <a href="#" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar al carrito</a>
                </div>
            </div>

        ))
            
        }
    </>
  )
}

export default Card