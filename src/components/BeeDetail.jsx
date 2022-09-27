import React from "react";
import { useEffect, useState } from "react";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import Loader from "./Loader";
function BeeDetail() {
  const [beeDetail, setBeeDetail] = useState([]);
  const { goBack } = useHistory();
  console.log(useHistory());
  console.log(goBack);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://asalari.pythonanywhere.com/ari/${id}`)
      .then((res) => res.json())
      .then((data) => setBeeDetail(data));
  }, []);

  return (
    <div className="container">
      <button onClick={goBack} className=" my-2 btn btn-outline-primary">
        Go Back
      </button>
      {!beeDetail.id ? (
        <Loader />
      ) : (
        <div className="beeDetail text-center">
          <h1 className="my-2 detail_nomi">{beeDetail.nomi}</h1>
          <img
            className="img-fluid my-2"
            style={{ height: "500px", width: "890px" }}
            src={beeDetail.rasmi}
            alt={beeDetail.nomi}
          />
          <p className="my-2">{beeDetail.malumot}</p>

          {beeDetail.video_link ? (
            <div className="w-100 py-3">
              <h5 className="my-4 detail_nomi ">
                Video of this {beeDetail.nomi}
              </h5>
              <iframe
                src={`https://www.youtube.com/embed/${beeDetail.video_link.slice(
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

export default BeeDetail;
