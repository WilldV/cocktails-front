import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <h1>Soy una landing</h1>
      <Link to="categories">
        <button>Categories</button>
      </Link>
      <Link to="subcategories">
        <button>Subcategories</button>
      </Link>
      <Link to="ingredients">
        <button>Ingredients</button>
      </Link>
      <Link to="cocktails">
        <button>Cocktails</button>
      </Link>
    </>
  );
}
