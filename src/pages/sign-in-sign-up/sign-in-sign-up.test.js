import React from "react";
import { shallow } from "enzyme";
import SignInAndSignUpPage from "./sign-in-sign-up.component";
import { shallowToJson } from "enzyme-to-json";

it("should render SignInAndSignUpPage component", () => {
  const wrapper = shallow(<SignInAndSignUpPage />);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
