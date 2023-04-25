Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user hasn’t specified a number, 32 is the default number
Given a user hasn’t specified a number of events to load
When a user opens the app
Then 32 events will appear

Scenario: User can change the number of events they want to see
Given user has specified a number(10) of events
When a runs a search
Then the specified number(10) of events will appear