import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  createIngredient,
  updateIngredient,
  getIngredientById,
} from "../../services";
import InputValidated from "../../components/InputValidated";

export function IngredientsForm() {
  const [ingredient, setIngredient] = useState({});

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    if (id) {
      getIngredientById(id).then((response) => {
        setIngredient(response);
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      updateIngredient(id, ingredient)
        .then((response) => {
          if (response.error) {
            setErrors(response.message);
          } else {
            navigate(-1, { replace: true });
          }
        })
        .catch((error) => console.log(error.message));
    } else {
      createIngredient(ingredient)
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
    setIngredient({
      ...ingredient,
      ...record,
    });
  };

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <h3>Ingredients Form</h3>
        <InputValidated
          name="name"
          value={ingredient.name}
          error={errors.name}
          cb={onChange}
        ></InputValidated>
        <InputValidated
          name="description"
          value={ingredient.description}
          error={errors.description}
          cb={onChange}
        ></InputValidated>
        <button>Confirmar</button>
      </form>
    </div>
  );
}
