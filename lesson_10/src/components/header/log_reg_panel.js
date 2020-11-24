//Users
let emails = [];
let user = [];
let i = 0;

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}

//registration
function register (email, password){
    email = document.getElementsByTagName('regEmail')[0];
    password = document.getElementsByTagName('regPassword')[0];
    if (emails.indexOf( email ) != -1){
        alert ('This user is already exists!')
    } else {
        user [i] = new User(email, password);
        emails.push(email);
        i++;
        alert('You registered!')}
}

//log in
function login (email, password){
    email = document.getElementsByTagName('logEmail')[0];
    password = document.getElementsByTagName('logPassword')[0];
    let checkUser = [];
    if (emails.indexOf( email ) != -1){
        let index = emails.indexOf(email);
        checkUser.push(new User(email, password));
        console.log('We check this:' + checkUser);
        if (JSON.stringify(checkUser[0])==JSON.stringify(user [index])){
            alert('You Logged In!');
        } else {
            alert('Wrong password!');
        }
    } else {
        alert('This user is doesn\'t exist!');
    }
}