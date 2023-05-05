import 'bootstrap-icons/font/bootstrap-icons.css';
import '../customStyles/cards.css';

function Card() {
    return (
      <><div className="container-fluid content-space-2 content-space-t-xl-3 content-space-b-lg-3 bg-danger reasons">
        <div className="container-fluid px-5 py-5">
          <div className="w-md-75 w-lg-50 text-center mx-md-auto mt-5 mb-5">
            <h2 className=''>Razones para inmigrar a <span className="text-warning">Canad&aacute;</span></h2>
          </div>
          <div className="text-center mb-10">          
            <ul className="list-inline list-checked list-checked-primary">
              <li className="list-inline-item fs-4"><i className="bi bi-check2-circle text-warning ms-1"/> Demanda de trabajadores calificados </li>
              <li className="list-inline-item fs-4"><i className="bi bi-check2-circle text-warning ms-1"/> Excelente sistema de salud</li>
              <li className="list-inline-item fs-4"><i className="bi bi-check2-circle text-warning ms-1"/> Educación de alta calidad</li>          
              <li className="list-inline-item fs-4"><i className="bi bi-check2-circle text-warning ms-1"/> Diversidad cultural</li>
              <li className="list-inline-item fs-4"><i className="bi bi-check2-circle text-warning ms-1"/> Estabilidad política y econ&oacute;mica</li>          
            </ul>
            <p className="small"><a className='btn btn-outline-warning' href="http://" target="_blank" rel="noopener noreferrer">Ver m&aacute;s <i className='bi bi-box-arrow-up-right'></i></a> </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark-subtle pb-5 px-5 mt-0 mb-5 cards">   
        <div className="container">
          <div className="row column-gap-0">
            <div className="w-md-75 w-lg-50 text-center mx-md-auto mt-5 mb-5">
              <h2 className='text-muted'>Descubre por qué miles de personas eligen inmigrar a  <span className="text-danger">Canad&aacute;</span> cada año</h2>
              <p className='text-muted fs-4'>Explora las opciones para conocer y establecerte en este hermoso pa&iacute;s</p>
            </div>
              
              <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 hover-test">
                <div className="card card-lg h-100">
                  <div className="p-2">
                    <img className="card-img" src="https://images.pexels.com/photos/346798/pexels-photo-346798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image Description"/>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title text-danger">Programas de inmigraci&oacute;n</h4>
                    <p className="card-text">Opciones para inmigrar a Canad&aacute;. Que esperar al llegar?</p>
                    <ul className="list-pointer mb-0">
                      <li className="list-pointer-item">Express entry</li>
                      <li className="list-pointer-item">Programa de Nominados Provinciales PNP</li>
                      <li className="list-pointer-item">Patrocinio familiar</li>
                    </ul>
                  </div>
                    <a className="card-footer card-link border-top" href="#">M&aacute;s informaci&oacute;n <i className="bi-chevron-right small ms-1"/></a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 hover-test">
                <div className="card card-sm h-100">
                  <div className="p-2">
                    <img className="card-img" src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Image Description"/>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title text-danger">Trabaja en Canad&aacute;</h4>
                    <p className="card-text">Como aplicar a empleos en Canadá o extender permisos de trabajo.</p>
                    <ul className="list-pointer mb-0">
                      <li className="list-pointer-item">Como obtener un permiso de trabajo</li>
                      <li className="list-pointer-item">Trabajo para jovenes en Canad&aacute;</li>
                      <li className="list-pointer-item">Encontrar trabajo estando en Canad&aacute;</li>
                    </ul>
                  </div>
                    <a className="card-footer card-link border-top" href="#">M&aacute;s informaci&oacute;n <i className="bi-chevron-right small ms-1"/></a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 hover-test">
                <div className="card card-sm h-100">
                  <div className="p-2">
                    <img className="card-img" src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Image Description"/>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title text-danger">Estudia en Canad&aacute;</h4>
                    <p className="card-text">Como obtener tu permiso de estudio y trabajar mientras estudias.</p>
                    <ul className="list-pointer mb-0">
                      <li className="list-pointer-item">Becas para estudiantes internacionales</li>
                      <li className="list-pointer-item">Obten un permiso de estudio</li>
                      <li className="list-pointer-item">Trabaja mientras estudias</li>
                    </ul>
                  </div>
                    <a className="card-footer card-link border-top" href="#">M&aacute;s informaci&oacute;n <i className="bi-chevron-right small ms-1"/></a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 hover-test">
                <div className="card card-sm h-100">
                  <div className="p-2">
                    <img className="card-img" src="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image Description"/>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title text-danger">Visita Canad&aacute;</h4>
                    <p className="card-text">Documentos necesarios para visitar a familiares y amigos o hacer negocios</p>
                    <ul className="list-pointer mb-0">
                      <li className="list-pointer-item">Visa para visitantes</li>
                      <li className="list-pointer-item">Extender tu residencia temporal</li>
                      <li className="list-pointer-item">Recomendaciones para antes de tu viaje</li>
                    </ul>
                  </div>
                    <a className="card-footer card-link border-top" href="#">M&aacute;s informaci&oacute;n <i className="bi-chevron-right small ms-1"/></a>
              </div>
            </div>
          </div>  
        </div>
        <div className="my-5 quote">
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>Encuentra el programa de inmigración que mejor se adapte a tus necesidades y comienza tu proceso hoy.</p>
            </blockquote>
          </figure>
        </div>
      </div>  
    </>
    )
}

export default Card;

