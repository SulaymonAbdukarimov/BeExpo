import React from "react";
import BeeItem from "./BeeItem";
import Loader from "./Loader";

function BeeList({ beeList = [] }) {
  return (
    <div className="container">
      {beeList.length ? (
        <>
          <h1 className="text-center fs-2 fw-3 my-4 detail_nomi">
            The most popular bees in Asia
          </h1>
          <div className="text-center my-5 row">
            {beeList.map((item) => (
              <BeeItem key={item.id} {...item} />
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
