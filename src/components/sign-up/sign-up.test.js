import React from "react";
import { shallow } from "enzyme";
import { SignUp } from "./sign-up.component";

it("should render SignInAndSignUpPage component", () => {
  expect(shallow(<SignUp />)).toMatchSnapshot();
});
