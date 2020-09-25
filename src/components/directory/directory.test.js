import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import { Directory } from "./directory.component";

it("should render Directory component", () => {
  const wrapper = shallow(<Directory sections={[]} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
