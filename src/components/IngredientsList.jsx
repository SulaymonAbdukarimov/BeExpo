import React from "react";
import IngredientItem from "./IngredientItem";
import Loader from "./Loader";

function BeeList({ ingredientsList = [] }) {
  return (
    <div className="container">
      {ingredientsList.length ? (
        <>
          <h1 className="text-center fs-2 fw-3 my-4 detail_nomi">
            The most popular Ingredient materials in Asia
          </h1>
          <div className="text-center my-5 row">
            {ingredientsList.map((item) => (
              <IngredientItem key={item.id} {...item} />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default BeeList;
