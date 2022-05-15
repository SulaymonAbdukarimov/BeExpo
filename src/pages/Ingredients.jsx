import React from "react";
import { useState, useEffect } from "react";
import IngredientsList from "../components/IngredientsList";

function Ingredients() {
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    fetch("https://asalari.pythonanywhere.com/ingradient/")
      .then((res) => res.json())
      .then((data) => setIngredientsList(data));
  }, []);

  return (
    <>
      <div>
        <IngredientsList ingredientsList={ingredientsList} />
      </div>
    </>
  );
}

export default Ingredients;
