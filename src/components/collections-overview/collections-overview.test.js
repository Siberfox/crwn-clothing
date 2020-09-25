import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import { CollectionsOverview } from "./collections-overview.component";

it("should render CollectionsOverview component", () => {
  const wrapper = shallow(<CollectionsOverview collections={[]} />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
