import React, { useState, useEffect } from "react";

const ItemDetail = ({ match }) => {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
    images: {},
  });

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/${match.params.id}`
    );
    const items = await data.json();
    console.log(items.data);
    setItem(items.data);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.icon} alt="" />
    </div>
  );
};

export default ItemDetail;
