import React from "react";
import { shallow } from "enzyme";
import StripeCheckoutButton from "./stripe-button.component";

it("should render StripeCheckoutButton component", () => {
  expect(shallow(<StripeCheckoutButton />)).toMatchSnapshot();
});
