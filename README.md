# PROJECT: GetInLine
### Client: GetInLine Inc.
### Created by: Alex Jaegook Kim, Valeria Palacios, Arhum Khan

# Description: 
GetInLine is a web application designed to solve the problem of having to spend long waits in line. The concern of "how much longer do I have to wait?" is resolved through GetInLine.  With GetInLine, users are able to digitally queue themselves into a line from a service that a host has created within the app. Users are able to see their position in queue and get a rought estimated wait time before their turn. <br />

# Table of Contents
### [Features](#features)
### [Getting Started](#)
#### [Prerequisites](#)
#### [Installation](#)
### [Release Notes](#release-notes)
### [Usage](#)
### [Contributions](#)
### [License](#)
### [Contact](#)

# Features
The app is divided into host and user, where each have their distinct features.
## Host
* Create multiple events
* See the users in line for their events
## User
* Search for specific queue by filtering with state and city
* Get in line to multiple services in the platform created by hosts
* See all the queues they are in through "MyQueues" Page
* Get an estimated wait time and their position in queue

# Release Notes
## Release 0.4.0 
### Features
- Users are now able to see all the queues they have joined by clicking on the My Queues tab on the Navigation Bar 
- By clicking on one of the queues the user is in on the My Queues page, the user can then see the position they are in the queue and how long they have to wait in line

### Bug Fixes 
- Did not have any bugs in the previous code 

### Known Issues 
- Pages are not correctly linked to each other
## Release 0.3.0 
### Features
- Users are now able to join multiple queues for different services. Hosts are also able to create multiple queues that users can join. Lastly, hosts are able to see all the users who joined their queue. 
  - Host Display Users
    - This page is so users can see who joined their queue and the names of these people. This way the hosts are able to service whoever is in line. It gets this data from the Firebase, and from here it will map to the host who is in line. 

### Bug Fixes 
- Last release, our host page was not displaying users correctly. This is because the mapping from the firebase to the React webpage was not being handled right. To fix this issue, we got the user id from the array of users that was held in the host field in Firebase, and from this we we pushed the data to the page. The main fix to our problems was creating an array to hold the queues a user was in, as well as an array to hold the users that signed up to be in a certain queue. 

### Known Issues 
- No current issues that we are aware of. 
## Release 0.2.0 
### Features
- Added new pages that the users can use to get in line, and implemented firebase backend additions so that the user is able to get added to firebase, and this was with regards to users queueing in line 
  - User Select Page
    - This page is so users can select the line they want to join. Before picking the specific event, the users must first select the state that the event is located in from a dropdown of the 50 states, and from there they type the city that the event is in. It is setup this way because there are many cities in deifferent states that have the same name, so this will narrow it down. Finall, the users are able to select an event from the dropdown menu. The way this works is when the host opens up a line, it is added to the firebase, and then this shows up in the dropdown menu. Thus, the user is able to select the line they want to join, and when thet do this, the users id is added to firebase and there is an array for the user which shows all the queues they joined.
 
### Bug Fixes 
- The way we were adding users and hosts to the firebase before was very unorganized and the firebase was not properly displaying the lines that the users had joined nor the users had in their queues. To fix this, we decided to creeate an array field in additon to information such as name and email for the users and the hosts. Through this method, whenever the user queues themselves to a line, the id of the host queue is added to the "queues" array for the users collection, and the id of the user is added to the "users" field for the queue collection. Now the firebase is properly adding the data for both user and host. 

### Known Issues 
- Only known issue at the current moment is that pages are not properly linked together but besides that functionality works properly, and frontend and backend works well together.  
## Release 0.1.0 
### Features
- Created different pages that the customers can use when they are using the webpage which are easy to interact with
  - Home Page
    - The first page the customer sees when going on the webpage, where they have the option to login, or sign up either as a host or user 
  - Admin Signup
    - Page where admin can sign up and create an account. They must provide name, location they are based, email address, and create a password and agree with terms and conditions
  - User Signup
    -  Page where yser can sign up and create an account. They must provide name, location, email address, and create a password and agree with terms and conditions     
  - Login
    - If users already have an account, they can simply login with email and password
  - Host Create Queue 
    - This is where the host can create the queue so that others are able to join it  



### Bug Fixes 
- Fixed backend issues we were facing with firebase authentication and storing data into firebase 

### Known Issues 
- Host create queue page is not showing up 
