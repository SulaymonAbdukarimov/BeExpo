import React from "react";
import { useEffect, useState } from "react";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

import Loader from "./Loader";

function IngredientDetail() {
  const [ingredientDetail, setIngredientDetail] = useState([]);
  const { goBack } = useHistory();

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://asalari.pythonanywhere.com/ingradient/${id}`)
      .then((res) => res.json())
      .then((data) => setIngredientDetail(data));
  }, []);

  return (
    <div className="container">
      <button onClick={goBack} className=" my-2 btn btn-outline-primary">
        Go Back
      </button>
      {!ingredientDetail.id ? (
        <Loader />
      ) : (
        <div className="beeDetail text-center">
          <h1 className="my-2 detail_nomi">{ingredientDetail.nomi}</h1>
          <img
            className="img-fluid my-2"
            style={{ height: "500px", width: "890px" }}
            src={ingredientDetail.rasmi}
            alt={ingredientDetail.nomi}
          />
          <p className="my-2">{ingredientDetail.malumot}</p>

          {ingredientDetail.video_link ? (
            <div className="w-100 py-3">
              <h5 className="my-4 detail_nomi ">
                Video of this {ingredientDetail.nomi}
              </h5>
              <iframe
                src={`https://www.youtube.com/embed/${ingredientDetail.video_link.slice(
                  -11
                )}`}
                title={id}
                allowFullScreen
                frameborder="0"
                style={{ width: "100%", height: "500px" }}
              ></iframe>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default IngredientDetail;
