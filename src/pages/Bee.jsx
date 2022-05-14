import React from "react";
import { useState, useEffect } from "react";
import BeeList from "../components/BeeList";
function Bee() {
  const [beeList, setBeeList] = useState([]);

  useEffect(() => {
    fetch("https://asalari.pythonanywhere.com/")
      .then((res) => res.json())
      .then((data) => setBeeList(data));
  }, []);

  return (
    <>
      <div>
        <BeeList beeList={beeList} />
      </div>
    </>
  );
}

export default Bee;
