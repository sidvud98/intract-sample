import React, { useEffect } from 'react'
import ReactModal from 'react-modal';
import svgImg from './assets/offer.svg'
import Feedback from './components/Feedback';
import { useDispatch } from 'react-redux'
import { actions } from './store/data'

export default function ModalComp({ modalIsOpen, closeModal }) {

  const dispatch = useDispatch();

  useEffect(() => {

    return () => {
      dispatch(actions.resetAll());
    }
  }, [modalIsOpen])

  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className='banner-wrapper'>
          <img src={svgImg} alt="banner-img" className='banner' />
        </div>
        <div className="vert-border" />
        <Feedback closeModal={closeModal} />
      </ReactModal>
    </div>
  )
}
