import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

it("Should render App component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
