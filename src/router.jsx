import { CategoriesList, CategoryForm } from "./pages/categories";
import Landing from "./pages/Landing";
import { SubcategoryForm, SubcategoriesList } from "./pages/subcategory";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { IngredientsForm, IngredientsList } from "./pages/ingredients";
import { CocktailsForm, CocktailsList } from "./pages/cocktails";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/categories" element={<CategoriesList />}></Route>
        <Route path="/categories/create" element={<CategoryForm />}></Route>
        <Route path="/categories/edit/:id" element={<CategoryForm />}></Route>
        <Route path="/subcategories" element={<SubcategoriesList />}></Route>
        <Route
          path="/subcategories/create"
          element={<SubcategoryForm />}
        ></Route>
        <Route
          path="/subcategories/edit/:id"
          element={<SubcategoryForm />}
        ></Route>
        <Route path="/ingredients" element={<IngredientsList />}></Route>
        <Route path="/ingredients/create" element={<IngredientsForm />}></Route>
        <Route
          path="/ingredients/edit/:id"
          element={<IngredientsForm />}
        ></Route>
        <Route path="/cocktails" element={<CocktailsList />}></Route>
        <Route path="/cocktails/create" element={<CocktailsForm />}></Route>
        <Route path="/cocktails/edit/:id" element={<CocktailsForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
