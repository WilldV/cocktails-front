import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { deleteSubCategory, listSubCategories } from "../../services";

export function SubcategoriesList() {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    listSubCategories({
      order: "name",
      relations: "category",
    }).then((response) => setSubcategories(response));
  }, []);

  const object = {
    id: "",
    name: "",
    description: "",
    category: "name",
  };

  return (
    <>
      <Table
        format={object}
        name="Lista de subcategorias"
        elements={subcategories}
        pathName="subcategories"
        deleteFunction={deleteSubCategory}
      ></Table>
    </>
  );
}
