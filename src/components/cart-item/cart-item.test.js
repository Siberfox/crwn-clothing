import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import CartItem from "./cart-item.component";

it("should render CartItem component", () => {
  const mockItem = {
    imageUrl: "www.testImage.com",
    price: 10,
    name: "hats",
    quantity: 2,
  };

  const wrapper = shallow(<CartItem item={mockItem} />);

  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
