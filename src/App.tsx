
import './App.css'


function App() {
  
  return (

    <>

    <div className="header-container">
     <h1 className="header-title">CHISPITA</h1>
     <img src="/src/IMG/cabe2.jpg" alt="Cabecera" className="header-img" />
    
       
    </div>
     <nav>
        <a href="#Nosotros">Nosotros</a>
        <a href="#Platos">Platos</a>
        <a href="#Servicios">Servicios</a>
        <a href="#Reservas">Reservas</a>
        <a href="#Horarios">Horarios</a>
      </nav>

      <div className='section-background'>
        {/* /*<img src="/src/IMG/cuerpo3.jpg" alt="Cabecera" className="header-img" /> */}
        <h1>Bienvenido a Chispita</h1>
        <p>Este es el contenido de la página.</p>
        <h1>Bienvenido a Chispita</h1>
        <p>Este es el contenido de la página.</p>
        <p>Este es el contenido de la página.</p>
      </div>

    </>
  )
}

export default App
