import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import Spinner from "./spinner.component";

it("should render Spinner component", () => {
  const wrapper = shallow(<Spinner />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
