import React from "react";
import NumberOfEvents from "../NumberOfEvents";
import { shallow } from "enzyme";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render input", () => {
    expect(NumberOfEventsWrapper.find(".numberInput")).toHaveLength(1);
  });

  test("rendered with a default length of 32", () => {
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(32);
  });

  test("change state when number input changes", () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32,
    });
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find(".numberInput").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(10);
  });
});
