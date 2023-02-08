import { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) {
  const [showModal, setShowModel] = useState()

  function showModalHandler() {
    setShowModel(true)
  }
  function closeModalHandler() {
    setShowModel(false)
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <h4>{props.helper}</h4>
      <div className="actions">
        <button className="btn" onClick={showModalHandler}>
          delete
        </button>
      </div>
      {showModal && <Modal onClose={closeModalHandler} />}
      {showModal && <Backdrop onClick={closeModalHandler} />}
    </div>
  )
}

export default Todo
