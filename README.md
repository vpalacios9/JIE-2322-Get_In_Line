# Get_In_Line_2

This project is a webapage to solve the issue of waiting so long in line. People waste so much time waiting in line every single year, so this product helps to stop the issue. With this webpage, users are able to remotely queue themselves in a line, and then they can wait until they are notified they are number one in line, and can go to their service. 

# Release Notes
## Release 0.2.0 
### Features
- Added new pages that the users can use to get in line, and implemented firebase backend additions so that the user is able to get added to firebase, and this was with regards to users queueing in line 
  - User Select Page
    - This page is so users can select the line they want to join. Before picking the specific event, the users must first select the state that the event is located in from a dropdown of the 50 states, and from there they type the city that the event is in. It is setup this way because there are many cities in deifferent states that have the same name, so this will narrow it down. Finall, the users are able to select an event from the dropdown menu. The way this works is when the host opens up a line, it is added to the firebase, and then this shows up in the dropdown menu. Thus, the user is able to select the line they want to join, and when thet do this, the users id is added to firebase and there is an array for the user which shows all the queues they joined.
 
### Bug Fixes 
- The way we were adding users and hosts to the firebase before was very unorganized and the firebase was not properly displaying the lines that the users had joined nor the users had in their queues. To fix this, we decided to creeate an array field in additon to information such as name and email for the users and the hosts. Through this method, whenever the user queues themselves to a line, the id of the host queue is added to the "queues" array for the users collection, and the id of the user is added to the "users" field for the queue collection. Now the firebase is properly adding the data for both user and host. 

### Known Issues 
- Host create queue page is not showing up 
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
