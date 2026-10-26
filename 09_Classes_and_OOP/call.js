function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username)//does not call the function only the reference is given
    SetUsername.call(this, username)//.call to explicitly call the function
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123456")
console.log(chai);//createUser { email: 'chai@fb.com', password: '123456' }
