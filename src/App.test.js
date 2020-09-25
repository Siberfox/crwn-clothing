import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import { shallowToJson } from "enzyme-to-json";

it("Should render App component", () => {
  const wrapper = shallow(<App />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
