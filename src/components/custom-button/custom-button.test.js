import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import { CustomButton } from "./custom-button.component";

it("should render CustomButton component", () => {
  const mockProps = { children: "Test", styles: "beauty" };
  const wrapper = shallow(<CustomButton {...mockProps} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
