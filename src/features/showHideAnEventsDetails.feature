Feature: SHOW/HIDE AN EVENT'S DETAILS

Scenario: An event element is collapsed by default
Given an event’s info has been loaded
When a user sees an event
Then the event’s details will not be visible

Scenario: User can expand an event to see its details
Given an event’s info has been loaded
When a user clicks a collapsed event
Then the details will be come visible

Scenario: User can collapse an event to hide its details
Given an event’s details will be visible
When a user clicks a collapse button
Then the event’s details will become hidden