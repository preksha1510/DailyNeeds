import { render } from "enzyme";
import React, { useState, useEffect } from "react";

function PriceList() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch("/priceList")
      .then((response) => response.json())
      .then((itemList) => setItemList(itemList));
    console.log(itemList).catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.item_name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PriceList;
