import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mockData";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test("render summary", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("render start time", () => {
    expect(EventWrapper.find(".startTime")).toHaveLength(1);
  });

  test("render button details", () => {
    expect(EventWrapper.find(".showDetails")).toHaveLength(1);
  });

  test("don't render hidden details", () => {
    expect(EventWrapper.find(".details")).toHaveLength(0);
  });

  test("render hidden details", () => {
    EventWrapper.setState({
      collapse: false,
    });
    expect(EventWrapper.find(".details")).toHaveLength(1);
  });

  test("changes state to false when button is clicked", () => {
    EventWrapper.setState({
      collapse: true,
    });
    EventWrapper.find(".showDetails").simulate("click");
    expect(EventWrapper.state("collapse")).toBeFalsy();
    expect(EventWrapper.find(".details")).toHaveLength(1);
  });

  test("changes state to true when button is clicked", () => {
    EventWrapper.setState({
      collapse: false,
    });
    EventWrapper.find(".showDetails").simulate("click");
    expect(EventWrapper.state("collapse")).toBeTruthy();
    expect(EventWrapper.find(".details")).toHaveLength(0);
  });
});
