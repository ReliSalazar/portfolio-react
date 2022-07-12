import { useEffect, useState } from "react";
import "./index.css";

function GoUp() {
  const [scTimer, setScTimer] = useState(0);
  const [scY, setScY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (scTimer) return;
    setScTimer(
      setTimeout(() => {
        setScY(window.scrollY);
        clearTimeout(scTimer);
        setScTimer(0);
      }, 100)
    );
  };

  const handleGoUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (scY > 200) {
    return (
      <button
        className="up-container secondary-button fade-in fixed p-2 font-bold"
        onClick={handleGoUp}
      >
        UP!
      </button>
    );
  }

  return null;
}

export default GoUp;
