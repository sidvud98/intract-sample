import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/index.scss'
import Modal from './Modal';
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      {!modalIsOpen && <button onClick={openModal}>Click Here</button>}
      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  )
}

export default App
