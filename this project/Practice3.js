// Prototypal Inheritance
function makeHuman(name,age){
    this.name = name;
    this.age = age;
    
}

makeHuman.prototype.printMyName =function(){
    console.log(this.name)
}

const human1 = new makeHuman('cliffhanger',21)
