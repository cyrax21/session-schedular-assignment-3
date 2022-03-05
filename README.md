# session-schedular-assignment-3

#[Points]
1. i need to built a middleware indicating to differentiate between a student and teacher(Admin)


#[APIs [ Input and about ]]
- addCourse/updateCourse - POST method
input - course name, coach name, description
 
- getCourseByName -  GET method
 input - couse name
  
- getAllCourse  - GET method
 input - none
  
- addSession/updateSession -  POST method
 input -  coach , title, agenda. link, start_time, end_time
  
- getCourseSessions (paginated api) -  GET method
 input - none
 
- deleteSession-  DELETE method
 input - session name/id
 
 
#[Models/Tables]
1) course 
course_id, coach_id, course name, coach name, description, 
 
2) coach/user (optional)
coach_id, coach_name, about, mail, password
 
3) session
session_id, coach , title, agenda. link, start_time, end_time
 
#[TestCase]
- addCourse/ updateCourse
1. course name unique - search in db - same name - error [same course exist]

- getCourseByName
1. search course - not available [course not available]  

- getAllCourse
1. query - not course available (add course to show)

- addSession/ updateSession
1. if same session exist at time slot - error ( try choosing any other time slot ) 

- getCourseSessions (paginated api)
1. search session by course - not available [course not available]  
2. query - error (session not available)

- deleteSession
1. get the session id - not available session - error (session not found)
 
Notes:
1. [paginated API: means divide the result of a query into multiple parts just like Flipkart here 20 products is listed at a time then we can use next page to see next 20 products ]
2. two-session should not collide

*Postman screenshot*
![Add a Course](https://github.com/cyrax21/session-schedular-assignment-3/blob/main/Postman%20screenshots/add%20course%20.png)
Diagram 1 : Add a Course 

![Update the Course](https://github.com/cyrax21/session-schedular-assignment-3/blob/main/Postman%20screenshots/Screenshot%202022-03-05%20155330.png)
Diagram 2 : Update the Course 

![Get All the Course](https://github.com/cyrax21/session-schedular-assignment-3/blob/main/Postman%20screenshots/get%20all%20course%20.png)
Diagram 3 : Get All the Course

![Get Course by Name](https://github.com/cyrax21/session-schedular-assignment-3/blob/main/Postman%20screenshots/get%20course%20by%20name%20.png)
Diagram 4 : Get Course by Name

![Add session](https://github.com/cyrax21/session-schedular-assignment-3/blob/main/Postman%20screenshots/add%20session%20-%20normal.png)
Diagram 5 : Add session 

![Add session - collide1](https://github.com/cyrax21/session-schedular-assignment-3/blob/main/Postman%20screenshots/add%20session%20collide%20-%201.png)
![Add session - collide1](https://github.com/cyrax21/session-schedular-assignment-3/blob/main/Postman%20screenshots/add%20session%20collide%20-%202.png)
![Add session - html](https://github.com/cyrax21/session-schedular-assignment-3/blob/main/Postman%20screenshots/add%20session%20html.png)
![Add session - css](https://github.com/cyrax21/session-schedular-assignment-3/blob/main/Postman%20screenshots/add%20session%20css.png)
Diagram 6 : Trying to Add session when their is collision with another session

![Update Session](https://github.com/cyrax21/Avtaar-Assignment-2/blob/main/sign%20in.png)
Diagram 7 : Update Session using Id

![Update Session](https://github.com/cyrax21/session-schedular-assignment-3/blob/main/Postman%20screenshots/update%20session%20collide.png)
Diagram 8 : Trying to update a existing session that is colliding with another session

![get course1](https://github.com/cyrax21/session-schedular-assignment-3/blob/main/Postman%20screenshots/get%20session%20for%20each%20course%20-%202%20paginated%20page%201.png)
![get course2](https://github.com/cyrax21/session-schedular-assignment-3/blob/main/Postman%20screenshots/get%20session%20for%20each%20course%20-%202%20paginated%20page%202.png)
![get course2](https://github.com/cyrax21/session-schedular-assignment-3/blob/main/Postman%20screenshots/get%20session%20for%20each%20course%20-%202%20paginated%20page%203.png)
Diagram 9 : Display session for a particular course - paginated api (course 1)
 
![Delete Session](https://github.com/cyrax21/session-schedular-assignment-3/blob/main/Postman%20screenshots/delete%20session%20succesful.png)
Diagram 10 : delete a session using Id
