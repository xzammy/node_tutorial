const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2)=>{
    console.log(num1+num2);
});

eventEmitter.emit('tutorial', 4,6);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}


let christina = new Person('Christina');
let pedro = new Person ('Pedro');
christina.on('name',() =>{
console.log("My name is " + christina.name);
});

pedro.on('name', ()=>{
    console.log('My Name is ' + pedro.name);
});

pedro.emit('name');
christina.emit('name');