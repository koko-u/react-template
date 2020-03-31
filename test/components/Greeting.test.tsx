import React from "react";
import ReactDOM from "react-dom";
import Greeting from "../../src/components/Greeting";

describe("Greeting", () => {
    it("Display \"Hellow World\"", () => {
        const container = document.createElement("div");
        ReactDOM.render(<Greeting />, container);
        expect(container.textContent).toMatch("Hello, world");
    });
});