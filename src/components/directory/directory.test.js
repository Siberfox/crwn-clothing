import React from "react";
import { shallow } from "enzyme";

import { Directory } from "./directory.component";

it("should render Directory component", () => {
  const mockSections = [{ id: "idkfa" }, { id: "iddqd" }];
  const wrapper = shallow(<Directory sections={mockSections} />);
  expect(wrapper).toMatchSnapshot();
});
