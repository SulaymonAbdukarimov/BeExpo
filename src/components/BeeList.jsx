import React from "react";
import BeeItem from "./BeeItem";

function BeeList({ beeList = [] }) {
  return (
    <div className="container">
      <h1 className="text-center fs-2 fw-3 my-4 detail_nomi">
        The most popular bees in Asia
      </h1>
      <div className="text-center my-5 row">
        {beeList.map((item) => (
          <BeeItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default BeeList;
