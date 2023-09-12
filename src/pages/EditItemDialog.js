import React, { useState } from "react";
import axios from "axios";

const EditItemDialog = ({ onClose, itemToEdit }) => {
  const [editedItem, setEditedItem] = useState(itemToEdit);

  const handleSaveClick = () => {
    axios
      .put(`/priceList/${itemToEdit.id}`, editedItem)
      .then((response) => {
        onClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="dialog">
      <div className="dialog-header">
        <button className="close-button" onClick={onClose}>
          &#x2716;
        </button>
      </div>
      <div className="dialog-content">
        <h2>Edit Item</h2>
        <div>
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            value={editedItem.itemName}
            onChange={(e) =>
              setEditedItem({ ...editedItem, itemName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="itemPrice">Item Price:</label>
          <input
            type="number"
            id="itemPrice"
            value={editedItem.price}
            onChange={(e) =>
              setEditedItem({
                ...editedItem,
                price: parseFloat(e.target.value),
              })
            }
          />
        </div>
      </div>
      <div className="dialog-footer">
        <button className="save-button" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditItemDialog;
