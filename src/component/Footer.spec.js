import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("Basic rendering of Footer", () => {
  it('should display "Daily Needs" in the Footer', () => {
    const footerComponent = shallow(<Footer />);
    const h6Element = footerComponent.find("body");
    expect(h6Element.text()).toMatch("Daily Needs");
  });
});
