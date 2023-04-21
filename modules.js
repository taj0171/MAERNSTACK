const access=require('./students');
console.log(access);
console.log(access.student,access.marks);
const{student,marks}=require('./students');
console.log(student,marks);

const name="sherlock";
console.log(name);
const greet=(name)=>{
    console.log(`hello,${kannan}`);
}
greet('Bahubali');
greet('kattappa');
global.setTimeout(()=>{
    console.log('In the timeout');
},5000);