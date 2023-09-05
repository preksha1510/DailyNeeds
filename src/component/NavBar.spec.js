import React from "react";
import Navbar from "./NavBar";
import { shallow } from "enzyme";

describe("Basic rendering of Nav Bar", () => {
  it("should display the name of the app", () => {
    const navBarComponent = shallow(<Navbar />);
    const h6Element = navBarComponent.find("h6");
    expect(h6Element.text()).toMatch("DAILY NEEDS");
  });

  it("should render a Bill link on navbar", () => {
    const navBarComponent = shallow(<Navbar />);
    const billLink = navBarComponent.find('NavLink[to="/bill"]');
    expect(billLink.exists()).toBe(true);
    expect(billLink.text()).toBe("Bill");
  });

  it("should render a PriceList link on navbar", () => {
    const navBarComponent = shallow(<Navbar />);
    const priceListLink = navBarComponent.find('NavLink[to="/pricelist"]');
    expect(priceListLink.exists()).toBe(true);
    expect(priceListLink.text()).toBe("PriceList");
  });
});
