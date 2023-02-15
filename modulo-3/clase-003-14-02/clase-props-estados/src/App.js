import './App.css';
import { Contador } from './components/Contador';
import NavbarHome from './components/NavbarHome';
import Perfil from './components/Perfil';

function App() {

  const perfil = {
    nombre: 'Alvaro',
    apellido: 'Jotar',
    avatar: 'https://avatarfiles.alphacoders.com/893/thumb-89303.gif'
  };

  let edad = 25;

  return (
    <div className="App">
      <NavbarHome />
      <h1>Hola Mundo</h1>
      <Perfil
        perfil={perfil}
        edad={edad}
      />
      <Contador edad={edad}/>
    </div>
  );
}

export default App;
