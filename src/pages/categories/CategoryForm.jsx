import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  createCategory,
  updateCategory,
  getCategoryById,
} from "../../services";
import InputValidated from "../../components/InputValidated";

export function CategoryForm() {
  const [category, setCategory] = useState({});

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    if (id) {
      getCategoryById(id).then((response) => {
        setCategory(response);
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      updateCategory(id, category)
        .then((response) => {
          if (response.error) {
            setErrors(response.message);
          } else {
            navigate(-1, { replace: true });
          }
        })
        .catch((error) => console.log(error.message));
    } else {
      createCategory(category)
        .then((response) => {
          if (response.error) {
            setErrors(response.message);
          } else {
            navigate(-1, { replace: true });
          }
        })
        .catch((error) => console.log(error.message));
    }
  };

  const onChange = (record) => {
    setCategory({
      ...category,
      ...record,
    });
  };

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <h3>Categories Form</h3>
        <InputValidated
          name="name"
          value={category.name}
          error={errors.name}
          cb={onChange}
        ></InputValidated>
        <InputValidated
          name="description"
          value={category.description}
          error={errors.description}
          cb={onChange}
        ></InputValidated>
        <button>Confirmar</button>
      </form>
    </div>
  );
}
