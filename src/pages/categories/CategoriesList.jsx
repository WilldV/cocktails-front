import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { listCategories, deleteCategory } from "../../services";

export function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    listCategories().then((response) => setCategories(response));
  }, []);

  return (
    <>
      <Table
        format={{
          id: "",
          name: "",
          description: "",
        }}
        name="Categories list"
        elements={categories}
        pathName="categories"
        deleteFunction={deleteCategory}
      ></Table>
    </>
  );
}
