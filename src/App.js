import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {

  let [modalShow, setShowModal] = useState(null);

  return (
    <>
      {modalShow !== null ? <Modal setShowModal={setShowModal} modalShow={modalShow} /> : ""}
      <button className="modal_show_button" onClick={() => setShowModal(1)}>
        Üret
      </button>
    </>
  );
}

export default App;
