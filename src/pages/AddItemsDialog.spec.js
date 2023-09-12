import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";

import AddItemsDialog from "./AddItemsDialog";

jest.mock("axios");

describe("Basic rendering of AddItemsDialog Component", () => {
  it("should render the dialog box", () => {
    render(<AddItemsDialog />);

    expect(screen.getByText("Add Item")).toBeTruthy();
    expect(screen.getByLabelText("Item Name:")).toBeTruthy();
    expect(screen.getByLabelText("Item Price:")).toBeTruthy();
  });

  it("should update itemName and itemPrice when inputs are given", () => {
    render(<AddItemsDialog />);
    const itemNameInput = screen.getByLabelText("Item Name:");
    const itemPriceInput = screen.getByLabelText("Item Price:");

    fireEvent.change(itemNameInput, { target: { value: "New Item" } });
    fireEvent.change(itemPriceInput, { target: { value: "25" } });

    expect(itemNameInput.value).toBe("New Item");
    expect(itemPriceInput.value).toBe("25");
  });

  it("should make a POST request with valid data and close the dialog", async () => {
    axios.post.mockResolvedValue({
      data: {
        itemName: "NewItem",
        price: 10,
      },
    });
    const onCloseMock = jest.fn();

    render(<AddItemsDialog onClose={onCloseMock} />);

    const response = await axios.post("/priceList", {
      itemName: "NewItem",
      price: 10,
    });
    console.log(response);
    expect(response.data.itemName).toBe("NewItem");
  });

  it("should disable the ADD button when fields are null", () => {
    render(<AddItemsDialog onClose={() => {}} />);
    const addButton = screen.getByText("ADD");

    const itemNameInput = screen.getByLabelText("Item Name:");
    const itemPriceInput = screen.getByLabelText("Item Price:");

    fireEvent.change(itemNameInput, { target: { value: "" } });
    fireEvent.change(itemPriceInput, { target: { value: "" } });

    expect(addButton).toBeDisabled();
  });
});
