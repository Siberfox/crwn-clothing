import React from "react";
import { shallow } from "enzyme";
import { signIn } from "./sign-in.component";

it("should render SignInAndSignUpPage component", () => {
  expect(shallow(<signIn />)).toMatchSnapshot();
});
