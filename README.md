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
