import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EditItemDialog from "./EditItemDialog";
import axios from "axios";

jest.mock("axios");
describe("Basic rendering of Edit Dialog Box", () => {
  it("should render the dialog box with input fields", () => {
    const onCloseMock = jest.fn();
    const itemToEdit = {
      itemName: "Sample Item",
      price: 10,
    };

    render(<EditItemDialog onClose={onCloseMock} itemToEdit={itemToEdit} />);
    expect(screen.getByText("Edit Item")).toBeTruthy();
    const inputItemName = screen.getByLabelText("Item Name:");
    const inputItemPrice = screen.getByLabelText("Item Price:");

    expect(inputItemName.value).toBe(itemToEdit.itemName);
    expect(inputItemPrice.value).toBe(itemToEdit.price.toString());
  });

  it("should make a PUT request", async () => {
    const itemToEdit = {
      id: 1,
      itemName: "InitialItem",
      price: 20,
    };

    axios.put.mockResolvedValue({
      data: {
        itemName: "Edited Item",
        price: 10,
      },
    });

    const onCloseMock = jest.fn();

    render(<EditItemDialog onClose={onCloseMock} itemToEdit={itemToEdit} />);

    const saveButton = screen.getByText("Save");

    fireEvent.click(saveButton);

    const response = await axios.put(`/priceList/${itemToEdit.id}`, itemToEdit);
    console.log(response);
    expect(response.data.itemName).toBe("Edited Item");
    expect(response.data.price).toBe(10);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
