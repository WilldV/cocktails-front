import InputValidated from "./InputValidated";

export function StepIngredientForm({
  ingredient,
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

  return (
    <section className="subform-second">
      <InputValidated
        name={`ingredientSteps.${index}.quantity`}
        value={ingredient.quantity}
        error={error?.quantity}
        cb={onChange}
      ></InputValidated>
      <InputValidated
        type="select"
        name={`ingredientSteps.${index}.ingredientId`}
        options={ingredientsList}
        value={ingredient.ingredientId}
        error={error?.ingredientId}
        cb={onChange}
      ></InputValidated>
      <button onClick={handleClick}>Delete ingredient</button>
    </section>
  );
}
