import React from "react";
import HoneyItem from "./HoneyItem";
import Loader from "./Loader";
function HoneyList({ honeyList = [] }) {
  return (
    <div className="container">
      {honeyList.length ? (
        <>
          <h1 className="text-center fs-2 fw-3 my-4 detail_nomi">
            The most popular honeys in Asia
          </h1>
          <div className="text-center my-5 row">
            {honeyList.map((item) => (
              <HoneyItem key={item.id} {...item} />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default HoneyList;
