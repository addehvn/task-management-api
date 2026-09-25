# Task Managament API 

A RESTful Task Managemet API built with NestJs, TypeScript, MongoDB and JWT authentication 

user can  register, login, view and update  profile , delete their account and create, view ,update and delete  tasks


##Technologies

-NestJs
-TypeScript
-MongoDB
-Mongoose
-JWT
-Passport
-class Validator 


##Features 

-User registration and login 
-Profile view and update 
-Delete user
-create, view, update and delete tasks 
-User can access only  tasks 
-Request validation  


##Installation 
```bash
npm install 
``` 

##Runnig the app
```bash
npm run start:dev
```


##API Routes 

|Methode|Route|Description|
|-------|---------|-------|
| Post  |'/auth/signup'| user signup |
| Post  | '/auth/login'| user login  |
|  Get  | '/user/profile'| user profile|
| Patch | '/user/update-profile'| update user profile|
| Delete| '/user/delete-user' | delete user |
| Post  | '/task/createTask'| create task |
|  Get  | '/task/allTasks'| all tasks list |
|  Get  | '/task/taskDetail/:id'| task detail |
| Patch | '/task/updateTask/:id'|task detal |
| Delete| '/task/DeleteTask/:id'| delete task| 
