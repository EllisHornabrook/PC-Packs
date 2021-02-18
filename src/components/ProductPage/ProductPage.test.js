import React from "react";
import { render } from "@testing-library/react";
import ProductPage from "./ProductPage";

describe("ProductPage tests", () => {
  it("should render", () => {
    expect(render(<ProductPage />)).toBeTruthy();
  });
});
