import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import StripeCheckoutButton from "./stripe-button.component";

it("should render StripeCheckoutButton component", () => {
  const wrapper = shallow(<StripeCheckoutButton />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
