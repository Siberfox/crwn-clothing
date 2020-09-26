import React from "react";
import { shallow } from "enzyme";

import { SignIn } from "./sign-in.component";

it("should render SignInAndSignUpPage component", () => {
  const wrapper = shallow(<SignIn />);
  expect(wrapper).toMatchSnapshot();
});
