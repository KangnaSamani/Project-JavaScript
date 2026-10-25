const user = {
    username: "kangna",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        // console.log(`Username: ${username}`);//error
        console.log(`Username: ${this.username}`);//Username: kangna
        console.log(this);  //   {
                            //     username: 'kangna',
                            //     loginCount: 8,
                            //     signedIn: true,
                            //     getUserDetails: [Function: getUserDetails]
                            //   }
    }
}

console.log(user.username);
console.log(user.getUserDetails);//[Function: getUserDetails]
console.log(user.getUserDetails());//Got user details from database     undefined
console.log(this);//{}

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this//no need to write the output will be the same
}
// const UserOne = User("kangna", 12, true)
// const UserTwo = User("hello", 5, false)//we have print values of usertwo but it is displayed bcz it overrides the values
// console.log(UserOne);

const UserOne = new User("kangna", 12, true)
const UserTwo = new User("hello", 5, false)//by using new keyword every time new instance is created
console.log(UserOne);//User { username: 'kangna', loginCount: 12, isLoggedIn: true }
console.log(UserTwo);//User { username: 'hello', loginCount: 5, isLoggedIn: false }