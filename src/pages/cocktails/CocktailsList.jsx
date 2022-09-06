import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { deleteCocktail, listCocktails } from "../../services";
import { stepsToString } from "../../utils";

export function CocktailsList() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    listCocktails({
      order: "name",
      relations: [
        "steps",
        "steps.ingredientSteps",
        "steps.ingredientSteps.ingredient",
        "subCategory",
        "subCategory.category",
      ],
    }).then((response) => setCocktails(response));
  }, []);

  const object = {
    id: "",
    name: "",
    description: "",
    alcoholLevel: "",
    subCategory: "subCategory.name",
    category: "subCategory.category.name",
    steps: stepsToString,
    variation: "",
  };

  return (
    <>
      <Table
        format={object}
        name="Cocktails list"
        elements={cocktails}
        pathName="cocktails"
        deleteFunction={deleteCocktail}
      ></Table>
    </>
  );
}
