import { PREPARATION_TYPES } from "../consts";
import InputValidated from "./InputValidated";
import { StepIngredientForm } from "./StepIngredientForm";

export function StepForm({
  step,
  index,
  onChange,
  onRemove,
  error,
  ingredientsList,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    onRemove(index);
  };

  const addIngredient = (e) => {
    e.preventDefault();

    onChange({
      [`steps.${index}.ingredientSteps`]: [
        ...(step.ingredientSteps || [{}]),
        {},
      ],
    });
  };

  const removeIngredient = (ingredientIndex) => {
    let newIngredients = [];

    if (step.ingredientSteps) {
      step.ingredientSteps.splice(ingredientIndex, 1);
      newIngredients = step.ingredientSteps;
    }

    onChange({
      [`steps.${index}.ingredients`]: newIngredients,
    });
  };

  const onChangeIngredient = (record) => {
    onChange({
      [`steps.${index}.${Object.keys(record)[0]}`]: Object.values(record)[0],
    });
  };

  return (
    <section className="subform">
      <InputValidated
        type="hidden"
        value={index + 1}
        name="order"
      ></InputValidated>
      <InputValidated
        type="select"
        options={PREPARATION_TYPES}
        name={`steps.${index}.preparationType`}
        value={step.preparationType}
        error={error?.preparationType}
        cb={onChange}
      ></InputValidated>
      <InputValidated
        name={`steps.${index}.description`}
        value={step.description}
        error={error?.description}
        cb={onChange}
      ></InputValidated>
      <InputValidated
        name={`steps.${index}.finalStep`}
        value={step.finalStep}
        error={error?.name}
        cb={onChange}
      ></InputValidated>
      {(step.ingredientSteps || [{}]).map((ingredient, i) => (
        <StepIngredientForm
          ingredient={ingredient}
          index={i}
          ingredientsList={ingredientsList}
          onRemove={removeIngredient}
          onChange={onChangeIngredient}
          key={`ingredient-${i}`}
        ></StepIngredientForm>
      ))}
      <br />
      <button onClick={addIngredient}>Add Ingredient</button>
      <button onClick={handleClick}>Delete step</button>
    </section>
  );
}
