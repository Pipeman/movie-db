import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import FormContainer from "./FormContainer";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <FormContainer/>
  );
});

it("shoudld render the component correctly", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("should handle the change in the input", () => {
  const value = "cane";
  wrapper.find("input").simulate("change", {
    target: {
      value,
    }
  });
  expect(wrapper.find("input").props().placeholder).toBe(value);
  expect(toJson(wrapper)).toMatchSnapshot();
})