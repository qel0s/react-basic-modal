import React, { useEffect, useState } from 'react'

const Modal = (props) => {

    let { setShowModal, modalShow } = props;

    let [transition, setTransition] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTransition(true)
        }, 0);
    }, [modalShow])

    return (
        <div className="modal" style={{
            opacity: transition === true ? "ease 1s all" : "inherit",
            opacity: transition === true ? "1" : "0"
        }}>
            <div className="modal__container">
                <div className="modal__header">
                    <h2>This is a Modal</h2> <button className="close-modal" onClick={() => setShowModal(null)}><i className="fas fa-times"></i></button>
                </div>

                <div className="modal__content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci saepe quae doloremque,
                        facere corrupti non inventore hic iure omnis harum magnam laboriosam fuga deleniti ipsam
                        quam itaque soluta suscipit provident? Illum nesciunt tenetur ab laboriosam nisi vel nihil
                        vero ullam, quas distinctio in quisquam quod fugit tempore quibusdam, deserunt eligendi.
                    </p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
