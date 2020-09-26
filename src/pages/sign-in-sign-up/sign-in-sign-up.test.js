import React from "react";
import { shallow } from "enzyme";
import SignInAndSignUpPage from "./sign-in-sign-up.component";

it("should render SignInAndSignUpPage component", () => {
  const wrapper = shallow(<SignInAndSignUpPage />);
  expect(wrapper).toMatchSnapshot();
});
