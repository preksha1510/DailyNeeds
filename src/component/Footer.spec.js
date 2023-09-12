import React from "react";
import { render, screen, waitFor, act, debug } from "@testing-library/react";
import Footer from "./Footer";
import { shallow } from "enzyme";
import axios from "axios";

jest.mock("axios");

describe("Basic rendering of Footer", () => {
  it('should display "Daily Needs" in the Footer', () => {
    const footerComponent = shallow(<Footer />);
    const h6Element = footerComponent.find("h6");
    expect(h6Element.text()).toMatch("Daily Needs");
  });

  it("should display the version fetched from the backend", async () => {
    axios.get.mockResolvedValue({
      data: { CurrentVersion: "version3.0" },
    });

    render(<Footer />);
    await waitFor(() => {
      expect(screen.getByText(/version3\.0/i)).toBeTruthy();
    }, 1000);
  });
});
