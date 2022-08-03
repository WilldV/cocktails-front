import { CategoriesList, CategoryForm } from "./pages/categories";
import Landing from "./pages/Landing";
import { SubcategoryForm, SubcategoriesList } from "./pages/subcategory";
import { Route, BrowserRouter, Routes } from "react-router-dom";

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
      </Routes>
    </BrowserRouter>
  );
}
