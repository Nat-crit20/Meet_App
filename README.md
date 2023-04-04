# Meet_App
#FEATURE 1: FILTER EVENTS BY CITY
As a user,
I should be able to filter events by city
So that I can see the list of events taken place in that city
##Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Given: user hasn’t searched for any city
When: the user opens the app
Then: the user should see a list of all upcoming events
##Scenario 2: User should see a list of suggestions when they search for a city.
Given: the main page is open
When: user starts typing in the city textbox
Then: user should see a list of cities that match what they’ve typed
##Scenario 3: User can select a city from the suggested list.
Given: the user was typing “Berlin” in the city textbox. And the list of seggestd cities is showing.
When: the user selects a city from the list
Then: their city should be changed to that city
#FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
As a user,
I should be able to show or hide an event’s details
So that I can see more/less information about an event
##Scenario 1: An event element is collapsed by default
Given: an event’s info has been loaded
When: a user sees an event
Then: the event’s details will not be visible
##Scenario 2: User can expand an event to see its details
Given: an event’s info has been loaded
When: a user clicks a collapsed event
Then: the details will be come visible
##Scenario 3: User can collapse an event to hide its details
Given: an event’s details will be visible
When: a user clicks a collapse button
Then: the event’s details will become hidden
#FEATURE 3: SPECIFY NUMBER OF EVENTS
As a user,
I should be able to specity number of events I want to veiw
So that I can see more or fewer events in the events list at once
##Scenario 1: When user hasn’t specified a number, 32 is the default number
Given: a user hasn’t specified a number of events to load
When: a user opens the app
Then: 32 events will appear
##Scenario 2: User can change the number of events they want to see
Given: user has specified a number(10) of events
When: a runs a search
Then: the specified number(10) of events will appear
#FEATURE 4: USE THE APP WHEN OFFLINE
As a user,
I should be able to use the app when I am offline
So that so that I can see the events I viewed when I last opened the app
##Scenario 1: Show cached data when there’s no internet connection
Given: a user has previously opened the app with internet connection
When: a user opens the app with no internet connection
Then: they will see the cached data from their last session
##Scenario 2: Show error when user changes the settings (city, time range)
Given: ther is no internet connection
When: a user changes the settings (city, time, range) that requires loading new data
Then: they will see an error message that it is not possible because they are not connected to the internet.
#FEATURE 5: DATA VISUALIZATION
As a user,
I should be able to see charts showing the upcoming events in each city
So that I know what events are organized in which city
##Scenario 1: Show a chart with the number of upcoming events in each city
Given: there are listed events for a city
When: a user searches for events for that city
Then: they will see a chart showing the number of upcoming events in each city.
