import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import MovieInput from "./MovieInput";

it("shoudld render the component correctly", () => {
  const testHandler = () => {};
  const wrapper = shallow(
    <MovieInput
      handleChange={testHandler}
    ></MovieInput>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("shoudld call the handler on change", () => {
  const testHandler = jest.fn();
  const wrapper = shallow(
    <MovieInput
      handleChange={testHandler}
    ></MovieInput>
  );
  wrapper.find("input").simulate("change");
  expect(testHandler).toHaveBeenCalledTimes(1);
});