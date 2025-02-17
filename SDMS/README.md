# login System
## Main requirments
1. The syestem should have role based login with protected routes for each role 
    Roles:
    - Teacher: Only access the grade level that they teach and subject they teach
    - Student: Only access a page that summarizes there scores they have so far
    - Admin: Have access to all scores and classes. Accessed page through manual url

## Registration 
### Teacher
- Full Name
- Levels Thought
- Email
- Set Password
- Role
- School
### Student
- Full Name
- Grade
- Email
- Set Password
- School
### Admin 
- Username
- Password

## Login
### All Users
- Email
- Password

# Steps
1. Create secure route and understant the functionality through static variable