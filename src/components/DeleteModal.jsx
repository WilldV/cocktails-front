import { useState } from "react";
import Loader from "./Loader";

export default function DeleteModal({ show, element, deleteFunction, cb }) {
  const [loading, setLoading] = useState(false);

  const deleteElement = () => {
    setLoading(true);

    deleteFunction(element.id).then(() => {
      setLoading(false);
      window.location.reload();
    });
  };

  const closeModal = () => {
    cb(false);
  };

  return (
    <div className={"modal " + (show ? "show" : "hide")}>
      <div className="modal-content">
        {loading ? (
          <Loader></Loader>
        ) : (
          <>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>{`Are you sure you want to delete ${element.name || "it"}?`}</p>
            <button onClick={closeModal}>Close</button>
            <button className="red-button" onClick={deleteElement}>
              Yes
            </button>
          </>
        )}
      </div>
    </div>
  );
}
