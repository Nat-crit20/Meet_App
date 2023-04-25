import { defineFeature, loadFeature } from "jest-cucumber";
import React from "react";
import App from "../App";
import { mockData } from "../mockData";
import { mount } from "enzyme";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppWrapper;
    given("an event’s info has been loaded", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
    });

    when("a user sees an event", () => {
      expect(AppWrapper.find(".event").at(0)).toBeDefined();
    });

    then("the event’s details will not be visible", () => {
      expect(AppWrapper.find(".event").at(0).find(".details")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("an event’s info has been loaded", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
    });

    when("a user clicks a collapsed event", () => {
      AppWrapper.find(".event").at(0).find(".showDetails").simulate("click");
    });

    then("the details will be come visible", () => {
      expect(AppWrapper.find(".event").at(0).find(".details")).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("an event’s details will be visible", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find(".event").at(0).find(".showDetails").simulate("click");
    });

    when("a user clicks a collapse button", () => {
      AppWrapper.find(".event").at(0).find(".showDetails").simulate("click");
    });

    then("the event’s details will become hidden", () => {
      expect(AppWrapper.find(".event").at(0).find(".details")).toHaveLength(0);
    });
  });
});
