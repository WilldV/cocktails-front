import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { Link } from "react-router-dom";

export default function ActionTD({ pathName, element, deleteFunction }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <td>
      <Link to={`/${pathName}/edit/${element.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => setShowModal(true)} className="red-button">
        Delete
      </button>
      <DeleteModal
        show={showModal}
        cb={setShowModal}
        element={element}
        deleteFunction={deleteFunction}
      ></DeleteModal>
    </td>
  );
}
