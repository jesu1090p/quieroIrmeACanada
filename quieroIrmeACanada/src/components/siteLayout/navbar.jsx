import '../../customStyles/navbar.css';
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

function NavigationMenu() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light" aria-label="Quiero Irme a Canada">
    <div className="container">
      <a className="navbar-brand nav-text" href="#" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="navbar-tooltip" data-bs-title="Inicio" data-bs-tooltip-bg="bg-muted">Destino Canad&aacute;!<img src="https://img.icons8.com/emoji/96/000000/maple-leaf-emoji.png" width="48" alt="Quiero Irme a Canada - Logo" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbar2Label"><img src="https://img.icons8.com/emoji/96/000000/maple-leaf-emoji.png" width="48" alt="Quiero Irme a Canada - Logo" /></h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inmigraci&oacute;n
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item text-left" href="#">Programas de Inmigraci&oacute;n</a></li>
                <li><a className="dropdown-item text-left" href="#">Requisitos para Inmigrar</a></li>
                <li><a className="dropdown-item text-left" href="#">Paso a paso</a></li> 
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Trabajar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Estudiar</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Conocer Canad&aacute;</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Noticias</a>
            </li>
          </ul>          
        </div>
      </div>
    </div>
  </nav>   
  );
}

export default NavigationMenu;


