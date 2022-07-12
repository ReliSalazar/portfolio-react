import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import artService from "../../services/artPosts";
import "./index.css";

function Art() {
  const [draws, setDraws] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    artService.getAll().then((posts) => {
      setDraws(posts);
    });
  }, []);

  const handleImageClick = (src) => {
    setShowModal(true);
    setCurrentImage(src);
  };

  return (
    <>
      <Modal
        show={showModal}
        setShowModal={setShowModal}
        image={currentImage}
      />
      <div className="container mx-auto p-5 realtive">
        <div className="columns-2 sm:columns-3 md:columns-4 xl:columns-6 gap-2">
          {draws.map((draw) => (
            <img
              className="draw image-grid w-full mb-2"
              src={`/ArtImages/${draw}`}
              alt=""
              key={draw}
              onClick={() => handleImageClick(draw)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Art;
