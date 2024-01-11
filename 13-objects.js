const course = {

    courseName : 'Ali',
    coursePrice : '999',
    courseInstructor : 'Hitesh'
}

const {courseInstructor : Ali} = course
// console.log(Ali)

const regularuser = {
    email : "ali@google.com",
    fullname : {
        userfullname : {
            firstname : "ali",
            lastname : "raza",
        }
    }
}

console.log(regularuser.fullname)

const obj1 = {1 : 'a', 2 : 'b'}

const obj2 = {3 : 'c', 4 : 'd'}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign( {}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

console.log(obj3)