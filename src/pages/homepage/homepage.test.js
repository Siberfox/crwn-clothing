import React from "react";
import { shallow } from "enzyme";

import Homepage from "./homepage.component";

it("should render Homepage component", () => {
  const wrapper = shallow(<Homepage />);
  expect(wrapper).toMatchSnapshot();
});
