import React from "react";
import { shallow } from "enzyme";
import PriceList from "./PriceList";

describe("Basic rendereing of PriceList items", () => {
  it("should display table with fetched data", () => {
    const table = shallow(<PriceList />);
    expect(table.find("table")).toHaveLength(1);
  });
});
