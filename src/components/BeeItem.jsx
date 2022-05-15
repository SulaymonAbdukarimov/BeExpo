import React from "react";
import { Link } from "react-router-dom";

function BeeItem({ id, nomi, rasmi, narxi, malumot }) {
  return (
    <div className=" col-12 col-md-12 col-lg-6 text-center py-4 ">
      <div className="images img-fluid text-center">
        <img src={rasmi} alt={nomi} className="img-fluid bee-img" />
      </div>
      <div className="bee-title">
        <h3 className="bee-title-content my-2 ">{nomi}</h3>
        <p>{malumot.slice(0, 100)}...</p>
        Price:
        <span className="badge bg-primary  text-wrap">{narxi}$</span>
        <br />
        <a
          target="_blank"
          className="text-decoration-none"
          href="https://t.me/sulaymon_abdukarimov"
        >
          <button className="btn telegram btn-outline-danger">Buy</button>
        </a>
        <Link to={`/ari/${id}`} className="text-decoration-none ">
          <button className="btn telegram btn-outline-primary  my-1 mx-2">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BeeItem;
