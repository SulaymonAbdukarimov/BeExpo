import React from "react";
import { useState, useEffect } from "react";
import HoneyList from "../components/HoneyList";

function Honey() {
  const [honeyList, setHoneyList] = useState([]);

  useEffect(() => {
    fetch("https://asalari.pythonanywhere.com/asal")
      .then((res) => res.json())
      .then((data) => setHoneyList(data));
  }, []);

  return (
    <>
      <div>
        <HoneyList honeyList={honeyList} />
      </div>
    </>
  );
}

export default Honey;
