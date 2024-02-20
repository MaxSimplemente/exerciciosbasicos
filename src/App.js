
import './App.css';
import Boton from './componetes/Boton';
import Saudo from './componetes/Saudo';
import Encabezado from './componetes/Encabezado';
import Footer from './componetes/Footer';
import Principal from './componetes/Principal';
import FuncionsBoton from './componetes/FuncionsBoton';
import Imaxen from './componetes/Imaxenes';

  function App() {
    return (
    <div className="App">
      <Encabezado/>
      <Principal>
        <Saudo/>
        <Boton/>
        <Imaxen/>
        <FuncionsBoton></FuncionsBoton>
        <Footer/> 
      </Principal>      
    </div>
  );
}

export default App;
