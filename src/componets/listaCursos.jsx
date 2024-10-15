import React from 'react'
import Card from './card'
import '../styles/custom.css'
import '../styles/normalize.css'
import '../styles/skeleton.css'



function ListaCursos() {
  const columns =  {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'Auto',
    gridColumnGap: '15px'
  }

  const listacursos = document.querySelector('#lista-cursos')
 
  return (
    <>
        <div id="lista-cursos" className="container" >
          <h1 id="encabezado" className="encabezado"> Cursos En Linea</h1>
          
            <div className="four columns" style={columns} >
              <Card listacursos={listacursos} />
            </div>
          
        </div>
    </>
  )
}

export default ListaCursos