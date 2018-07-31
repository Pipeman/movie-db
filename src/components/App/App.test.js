import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("has class app", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.hasClass("app")).toBe(true);
});

it("contains a form container", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.children().is("FormContainer")).toBe(true);
});
