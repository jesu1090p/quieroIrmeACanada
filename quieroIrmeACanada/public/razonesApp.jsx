import NavigationMenu from '../src/components/siteLayout/navbar.jsx'
import Razones from '../src/components/razones.jsx';
import '../src/customStyles/cards.css';

function RazonesApp() {
  
  return (
    <>
        <NavigationMenu />
        <div className='mt-5'></div>
        <Razones />
    </>
  )
}

export default RazonesApp