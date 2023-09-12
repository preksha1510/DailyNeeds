import React, { useState, useEffect } from "react";
import axios from "axios";
import AddItemsDialog from "./AddItemsDialog";
import EditItemDialog from "./EditItemDialog";

function PriceList() {
  const [data, setData] = useState([]);

  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClose = () => {
    setOpenAddDialog(false);
    setOpenEditDialog(false);
    setSelectedItem(null);
  };

  const openAddDialogBox = () => {
    setOpenAddDialog(true);
  };

  const openEditDialogBox = (item) => {
    setSelectedItem(item);
    setOpenEditDialog(true);
  };

  useEffect(() => {
    axios
      .get("/priceList")
      .then((response) => {
        const priceList = response.data;
        priceList.sort((a, b) => a.id - b.id);
        setData(priceList);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const addItemToList = (newItem) => {
    setData((prevData) => [...prevData, newItem]);
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th width={50}>ID</th>
              <th>Item Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody data-testid="t-body">
            {data.map((item) => (
              <tr width={50} key={item.id} data-testid="row-${index + 1}">
                <td width={100}>{item.id}</td>

                <td width={100}>{item.itemName}</td>
                <td width={50}>{item.price}</td>

                <td>
                  <button
                    onClick={() => openEditDialogBox(item)}
                    data-testid="edit-${index + 1}-button"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button data-testid="add-button" onClick={openAddDialogBox}>
            Add
          </button>
          {openAddDialog && (
            <AddItemsDialog
              open={openAddDialog}
              onClose={handleClose}
              onAddItem={addItemToList}
            />
          )}
          {openEditDialog && selectedItem && (
            <EditItemDialog
              open={openEditDialog}
              onClose={handleClose}
              itemToEdit={selectedItem}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default PriceList;
