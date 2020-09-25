import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import { SignIn } from "./sign-in.component";

it("should render SignInAndSignUpPage component", () => {
  const wrapper = shallow(<SignIn />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
