import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Modal from "./components/modal/Modal";
import ModalAdd from "./components/content/head/ModalAdd";

function App() {
  return (
    <div className="App">
      {/* <div>
        <Modal open={true}></Modal>
      </div> */}
      <Home></Home>
    </div>
  );
}

export default App;
