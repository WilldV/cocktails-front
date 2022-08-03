import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { listIngredients, deleteIngredient } from "../../services";
import {} from "../../services/ingredients";

export function IngredientsList() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    listIngredients().then((response) => setIngredients(response));
  }, []);

  return (
    <>
      <Table
        format={{
          id: "",
          name: "",
          description: "",
        }}
        name="Ingredients list"
        elements={ingredients}
        pathName="ingredients"
        deleteFunction={deleteIngredient}
      ></Table>
    </>
  );
}
