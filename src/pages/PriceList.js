import React, { useState, useEffect } from "react";
import axios from "axios";
import AddItemsDialog from "./AddItemsDialog";

function PriceList() {
  const [data, setData] = useState([]);

  const [openDialog, handleDisplay] = useState(false);

  const handleClose = () => {
    handleDisplay(false);
  };

  const openDialogBox = () => {
    handleDisplay(true);
  };

  useEffect(() => {
    axios
      .get("/priceList")
      .then((response) => {
        const priceList = response.data;
        setData(priceList);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
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
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.itemName}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button data-testid="add-button" onClick={openDialogBox}>
            Add
          </button>
          {openDialog && (
            <AddItemsDialog open={openDialog} onClose={handleClose} />
          )}
        </div>
      </div>
    </>
  );
}

export default PriceList;
