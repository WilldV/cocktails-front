export function SimpleStep({ step }) {
  return (
    <>
      <p className="simple-step-text">{`${step.order}. ${step.preparationType}`}</p>
      <p className="simple-step-text">{step.description}</p>
      {step.ingredientSteps.map((is, index) => {
        return (
          <p className="simple-step-text-second">{`${step.order}.${index + 1} ${
            is.quantity
          } - ${is.ingredient.name}`}</p>
        );
      })}
      {step.finalStep ? (
        <p className="simple-step-text-second">{step.finalStep}</p>
      ) : (
        ""
      )}
    </>
  );
}
