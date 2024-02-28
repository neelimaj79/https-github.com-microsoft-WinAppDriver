Feature: Feature for logging into Gmail

Scenario: Login to Gmail with appropriate credentials

Given that the user is on gmail login page
When user enters username
And User clicks on next
And User enters Password
And clicks on login
Then User is logged into gmail and Gmail home page is shown