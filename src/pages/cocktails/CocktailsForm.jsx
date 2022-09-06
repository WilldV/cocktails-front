import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputValidated from "../../components/InputValidated";
import { StepForm } from "../../components/StepForm";
import { ALCOHOL_LEVELS } from "../../consts";
import {
  createCocktail,
  getCocktailById,
  listIngredients,
  listSubCategories,
  updateCocktail,
} from "../../services";
import { setValue } from "../../utils";

//TODO: Improve errors handling for subforms
export function CocktailsForm() {
  const [cocktail, setCocktail] = useState({
    steps: [{ order: 1 }],
  });
  const [subCategories, setSubcategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    listSubCategories({ order: "category.name", relations: "category" }).then(
      (subcategories) => {
        const formattedSubcategories = subcategories.map((subcategory) => {
          return {
            id: subcategory.id,
            name: `${subcategory.category.name} - ${subcategory.name}`,
          };
        });
        setSubcategories(formattedSubcategories);
      }
    );

    listIngredients({ order: "name" }).then((ingredients) => {
      const formattedIngredients = ingredients.map((ingredient) => {
        return {
          id: ingredient.id,
          name: ingredient.name,
        };
      });
      setIngredients(formattedIngredients);
    });

    if (id)
      getCocktailById(id, {
        relations: ["steps", "steps.ingredientSteps"],
      }).then((response) => setCocktail(response));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      updateCocktail(id, cocktail)
        .then((response) => {
          if (response.error) {
            setErrors(response.message);
          } else {
            navigate(-1, { replace: true });
          }
        })
        .catch((error) => console.log(error.message));
    } else {
      createCocktail(cocktail)
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

  const addStep = (e) => {
    e.preventDefault();

    cocktail.steps.push({
      order: cocktail.steps.length + 1,
    });

    setCocktail({
      ...cocktail,
    });
  };

  const removeStep = (index) => {
    cocktail.steps.splice(index, 1);

    setCocktail({
      ...cocktail,
    });
  };

  const onChange = (record) => {
    setValue(cocktail, Object.keys(record)[0], Object.values(record)[0]);
    setCocktail({
      ...cocktail,
    });
  };

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <h3>Cocktails Form</h3>
        <InputValidated
          name="name"
          value={cocktail.name}
          error={errors.name}
          cb={onChange}
        ></InputValidated>
        <InputValidated
          name="description"
          value={cocktail.description}
          error={errors.description}
          cb={onChange}
        ></InputValidated>
        <InputValidated
          type="select"
          name="subCategoryId"
          value={cocktail.subCategoryId}
          error={errors.subCategoryId}
          options={subCategories}
          cb={onChange}
        ></InputValidated>
        <InputValidated
          type="select"
          name="alcoholLevel"
          value={cocktail.alcoholLevel}
          error={errors.alcoholLevel}
          options={ALCOHOL_LEVELS}
          cb={onChange}
        ></InputValidated>
        <InputValidated
          name="variation"
          value={cocktail.variation}
          error={errors.variation}
          cb={onChange}
        ></InputValidated>
        {(cocktail.steps || [{}]).map((step, i) => (
          <StepForm
            step={step}
            index={i}
            onChange={onChange}
            onRemove={removeStep}
            ingredientsList={ingredients}
            key={`cocktail-step-${i}`}
          ></StepForm>
        ))}
        <br />
        <button onClick={addStep}>Add Step</button>

        <button>Confirmar</button>
      </form>
    </div>
  );
}
