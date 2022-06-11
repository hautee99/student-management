import "./App.css";
// import "sass";/
import { ToastContainer } from "react-toastify";
import Container from "./components/container/Container";

function App() {
  return (
    <div className="App">
      <Container></Container>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
