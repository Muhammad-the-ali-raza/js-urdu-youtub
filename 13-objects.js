const course = {

    courseName : 'Ali',
    coursePrice : '999',
    courseInstructor : 'Hitesh'
}

const {courseInstructor : Ali} = course
// console.log(Ali)

const regularuser = {
    email : 'ali@google.com',
    fullName : {
        userFullName : {
            firstName : 'ali',
            lastName : 'raza',
        }
    }
}

console.log(regularuser.email.userFullName)













