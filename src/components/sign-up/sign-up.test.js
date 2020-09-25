import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import { SignUp } from "./sign-up.component";

it("should render SignInAndSignUpPage component", () => {
  const wrapper = shallow(<SignUp />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
