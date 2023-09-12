import React from "react";
import {
  fireEvent,
  render,
  waitFor,
  screen,
  within,
} from "@testing-library/react";
import PriceList from "./PriceList";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { mount, shallow } from "enzyme";
import AddItemsDialog from "./AddItemsDialog";
import EditItemDialog from "./EditItemDialog";

// jest.mock("axios");
jest.mock("axios");

describe("Basic rendereing of PriceList items", () => {
  // const mock = new MockAdapter(axios);

  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  it.skip("should display table with fetched data", () => {
    const table = shallow(<PriceList />);
    expect(table.find("table")).toHaveLength(1);
  });

  it.skip("should render the data", async () => {
    const mockData = [
      { id: 1, itemName: "Item1", price: 10.0 },
      { id: 2, itemName: "Item2", price: 20.0 },
    ];
    axios.get.mockResolvedValue({ data: mockData });
    render(<PriceList />);

    await waitFor(() => {
      const rows = screen.getAllByRole("row");
      expect(rows).toHaveLength(mockData.length + 1);
    });

    expect(screen.getByText("Item1")).toBeTruthy();
    expect(screen.getByText("Item2")).toBeTruthy();
    expect(screen.getByText(10.0)).toBeTruthy();
    expect(screen.getByText(20.0)).toBeTruthy();
  });

  it.skip("should render the add button", () => {
    const wrapper = shallow(<PriceList />);
    const button = wrapper.find('[data-testid="add-button"]');
    expect(button).toHaveLength(1);
  });

  it.skip("should open the add dialog box when the add button is clicked", async () => {
    const mockData = [
      { id: 1, itemName: "Item1", price: 10.0 },
      { id: 2, itemName: "Item2", price: 20.0 },
    ];
    axios.get.mockResolvedValue({ data: mockData });
    render(<PriceList />);

    const button = screen.getByTestId("add-button");

    userEvent.click(button);

    await waitFor(() => {
      const dialogContent = screen.getByTestId("header");
      expect(dialogContent).toBeTruthy();
    });
  });

  // it("should open the edit dialog box when the edit button is clicked", async () => {
  //   const mockData = [
  //     { id: 1, itemName: "Item1", price: 10.0 },
  //     { id: 2, itemName: "Item2", price: 20.0 },
  //   ];
  //   axios.get.mockResolvedValue({ data: mockData });

  //   render(<PriceList />);

  //   await waitFor(() => {
  //     const table = screen.getByTestId("t-body");
  //     const row = screen.getByTestId("edit-1-button");
  //     const editButton = within(row).getByText("Edit");
  //   });

  //   console.log(table);
  // const customMockTable = (
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>ID</th>
  //         <th>Item Name</th>
  //         <th>Price</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {mockData.map((item) => (
  //         <tr key={item.id}>
  //           <td>{item.id}</td>
  //           <td>{item.itemName}</td>
  //           <td>{item.price}</td>
  //           <td>
  //             <button>Edit</button>
  //           </td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // );

  // console.log(customMockTable);

  //   fireEvent.click(editButton);

  //   const editDialogTitle = screen.getByText("Edit Item");
  //   expect(editDialogTitle).toBeInTheDocument();
  // });
});
