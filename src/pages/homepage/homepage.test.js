import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Homepage from "./homepage.component";

it("should render Homepage component", () => {
  const wrapper = shallow(<Homepage />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
