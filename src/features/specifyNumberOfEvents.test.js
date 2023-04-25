import { defineFeature, loadFeature } from "jest-cucumber";
import React from "react";
import App from "../App";
import { mockData } from "../mockData";
import { mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("a user hasn’t specified a number of events to load", () => {});

    when("a user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    then("32 events will appear", () => {
      AppWrapper.update();
      expect(AppWrapper.state("eventCount")).toBe(32);
      expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    given("user has specified a number(10) of events", async () => {
      AppWrapper = mount(<App />);
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      const event = { target: { value: 10 } };
      await NumberOfEventsWrapper.instance().handleChange(event);
    });

    when("a runs a search", () => {
      AppWrapper.update();
    });

    then("the specified number(10) of events will appear", () => {
      expect(AppWrapper.state("eventCount")).toEqual(10);
      expect(AppWrapper.state("events").length).toBe(10);
    });
  });
});
