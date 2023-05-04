import heroBanner from '../assets/media/heroBanner.png';
import '../customStyles/jumbotron.css'

function Jumbotron() {
  /**/
  
  return (
        <div className="p-5 mb-4 rounded-3">
          <div className="container py-5">
            <div className="row">
              <div className='col-md-6 middle'>
                <h1 className="display-5 fw-bold">Destino <span className='canada'>Canad&aacute;</span></h1>
                <p className="fs-3">¡Vive la experiencia de tu vida en Canadá! Descubre por qué este país es el destino ideal para <span className='opcionesDeInmigracion'>estudiar</span>,<span className='opcionesDeInmigracion'> trabajar</span>, <span className='opcionesDeInmigracion'>conocer </span>o <span className='opcionesDeInmigracion'>vivir!</span></p>
              </div>
              <div className='col-sm-2 col-md-6'>
                <img className="img-fluid" src={heroBanner} alt="destino Canada" height={500}/>
              </div>
            </div>
          </div>
        </div>
    )    
}

/*const strings = ["estudiar", "trabajar", "conocer", "vivir"];
  let index = 0;
  
  function cambiarString() {
    const textoActual = strings[index];
    const longitudTextoActual = textoActual.length;
    let caracteresMostrados = document.getElementById('opcionesDeInmigracion').innerHTML.length;
  
    if (caracteresMostrados < longitudTextoActual) {
      caracteresMostrados++;
      document.getElementById("opcionesDeInmigracion").innerHTML = textoActual.substring(
        0,
        caracteresMostrados
      );
      const retraso = Math.floor(Math.random() * 100) + 50; // tiempo aleatorio entre 50 y 150 milisegundos
      setTimeout(cambiarString, retraso);
    } else {
      const tiempoEspera = 1000; // tiempo de espera adicional de 1 segundo
      setTimeout(proximaAnimacion, tiempoEspera);
    }
  }
  
  function proximaAnimacion() {
    index = (index + 1) % strings.length;
    document.getElementById("opcionesDeInmigracion").innerHTML = ""; // vaciar el texto antes de la próxima animación
    cambiarString();
  }
  
  cambiarString();*/
export default Jumbotron;