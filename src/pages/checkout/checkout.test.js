import React from "react";
import { shallow } from "enzyme";
import { CheckoutPage } from "./checkout.component";
import { shallowToJson } from "enzyme-to-json";

let wrapper;
beforeEach(() => {
  const mockProps = {
    cartItems: [],
    total: 100,
  };

  wrapper = shallow(<CheckoutPage {...mockProps} />);
});

it("should render CheckoutPage component", () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
