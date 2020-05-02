import React from "react";
import Greeting from "../../src/components/Greeting";

import {mount, ReactWrapper} from "enzyme";
import {act} from "react-dom/test-utils";

describe("Greeting Component", () => {
    let greeting: ReactWrapper;

    act(() => {
        greeting = mount(<Greeting />);
    })

    it("Display \"Hello World\"", () => {

        expect(greeting.find("h1").text()).toBe("Hello, world!");
    });
});
