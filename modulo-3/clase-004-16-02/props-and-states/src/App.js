import './App.css';
import Card from './components/card/Card';
import Contador from './components/contador/Contador';


function App() {
  
  const data = {
    name: 'Pikachu',
    lastname: 'Busi',
    img: 'https://avatarfiles.alphacoders.com/893/thumb-89303.gif',
  };

  const logName = (name) => console.log(name);

  console.log('soy el app');

  return (
    <div className="App">
      <Card cardData={data} mostrarNombre={logName}/>
      <hr />
      <Contador />
    </div>
  );
};

export default App;
