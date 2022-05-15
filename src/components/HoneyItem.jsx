import React from "react";
import { Link } from "react-router-dom";

function HoneyItem({ id, nomi, rasmi, narxi, malumot }) {
  return (
    <div className=" col-12 col-md-12 col-lg-6 text-center py-4 ">
      <div className="images img-fluid text-center">
        <img src={rasmi} alt={nomi} className="img-fluid bee-img" />
      </div>
      <div className="bee-title">
        <h3 className="bee-title-content my-2 ">{nomi}</h3>
        <p>{malumot.slice(0, 100)}...</p>
        Price:
        <span className="badge bg-primary  text-wrap">{narxi}$/L</span>
        <br />
        <div className="bottom_cards">
          <a
            target="_blank"
            className="text-decoration-none"
            href="https://t.me/sulaymon_abdukarimov"
          >
            <button
              style={{ width: "105px" }}
              className="btn btn-outline-danger"
            >
              Buy
            </button>
          </a>
          <Link to={`/asal/${id}`} className="text-decoration-none">
            <button
              className="btn btn-outline-primary my-1 mx-2 "
              style={{ width: "105px" }}
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HoneyItem;
