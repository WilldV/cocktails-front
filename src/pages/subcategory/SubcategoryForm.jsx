import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputValidated from "../../components/InputValidated";
import {
  createSubCategory,
  getSubCategoryById,
  listCategories,
  updateSubCategory,
} from "../../services";

export function SubcategoryForm() {
  const [subcategory, setSubcategory] = useState({});
  const [categories, setCategories] = useState([]);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    listCategories({ order: "name" }).then((categories) => {
      const formattedCategories = categories.map((category) => {
        return {
          id: category.id,
          name: category.name,
        };
      });
      setCategories(formattedCategories);
    });

    if (id) getSubCategoryById(id).then((response) => setSubcategory(response));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      updateSubCategory(id, subcategory)
        .then((response) => {
          if (response.error) {
            setErrors(response.message);
          } else {
            navigate(-1, { replace: true });
          }
        })
        .catch((error) => console.log(error.message));
    } else {
      createSubCategory(subcategory)
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
    setSubcategory({
      ...subcategory,
      ...record,
    });
  };
  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <h3>Subcategories Form</h3>
        <InputValidated
          name="name"
          value={subcategory.name}
          error={errors.name}
          cb={onChange}
        ></InputValidated>
        <InputValidated
          name="description"
          value={subcategory.description}
          error={errors.description}
          cb={onChange}
        ></InputValidated>
        <InputValidated
          type="select"
          name="categoryId"
          value={subcategory.categoryId}
          error={errors.categoryId}
          options={categories}
          cb={onChange}
        ></InputValidated>
        <button>Confirmar</button>
      </form>
    </div>
  );
}
