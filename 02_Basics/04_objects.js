// const tinderUser = new Object()//{}
const tinderUser = {}//{}

tinderUser.id = "123abc"
tinderUser.name = "kangna"
tinderUser.isLoggedIn = false

// console.log(tinderUser);// outpu : { id: '123abc', name: 'kangna', isLoggedIn: false }

const regularUser ={
    email : "kangna@gmail.com",
    fullname : {
        userfullname : {
            firstname : "kangna",
            lastname : "samani"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);//kangna

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
// const obj4 = {5: "a" , 6: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//object.assign() - static method that copies all enumerable own properties from one or more source objects to a target object.
//it returns the modified target object
// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj4 = {...obj1, ...obj2}//spread operator
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "kangna@gmail.com"
    },
    {
        id: 1,
        email: "kangna@gmail.com"
    },
    {
        id: 1,
        email: "kangna@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '123abc', 'kangna', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'kangna' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true

const course = {
    coursename : "javascript",
    price : "999",
    courseInstructor: "kangna"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);//kangna

//if the property name is big then we can destructure it and access it
const {courseInstructor: instructor} = course
console.log(instructor);//kangna

// const navbar = ({company}) => {

// }
// navbar(company="kangna")

// {
//     "name": "kangna",
//     "coursename": "javascript",
//     "price": "free"
// }

[
    {},
    {},
    {}
]