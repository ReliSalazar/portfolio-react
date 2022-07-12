import "./Modal.css";

function Modal({ show, setShowModal, image }) {
  if (show) {
    return (
      <div onClick={() => setShowModal(false)} className="modal-container fade-in fixed w-full top-0 flex justify-center items-center">
        <div className="container mx-auto p-5 sm:p-0 flex justify-center items-center">
          <div className="modal p-5 flex flex-col items-center justify-center">
            <div className="img-container flex justify-center items-center">
              <img src={`/ArtImages/${image}`} alt="" />
            </div>

            {/* <button
              className="secondary-button py-1 px-2 mt-5"
              onClick={() => setShowModal(false)}
            >
              close
            </button> */}
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default Modal;
