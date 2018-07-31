import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import FilmCard from "./FilmCard";

let wrapper;
const info = {
    title: "Fight Club",
    vote_average: 10.0,
    vote_count: 1000,
    poster_path: "fight-club-poster.jpg",
};

beforeEach(() => {
  wrapper = mount(
    <FilmCard
        info={info}
    />
  );
});

it("should render the component correctly", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});
