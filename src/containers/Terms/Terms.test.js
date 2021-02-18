import React from "react";
import { render } from "@testing-library/react";
import Terms from "./Terms";

describe("Terms tests", () => {
    it("should render", () => {
        expect(render(<Terms />)).toBeTruthy();
    });
});
