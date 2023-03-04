import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import Formulario from "./components/Formulario/Formulario";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Formulario2 from "./components/Formulario/Formulario2";

function App() {
  return (
    <Container fluid className="p-0">
      <NavBar />
      <Formulario2/>
      {/* <Formulario/>
      <Main />
      <Footer /> */}
    </Container>
  );
}

export default App;
