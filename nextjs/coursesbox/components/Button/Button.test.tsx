/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";

import { Button } from "./Button";

// eslint-disable-next-line no-undef
describe("Button test cases", () => {
  it("Render check", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button</Button>);
  });
});
