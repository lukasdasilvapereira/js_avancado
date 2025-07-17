// THIS => FAZ REFÊNCIA AO OBJETO QUE ESTÁ SENDO USADO

const me = {
    name: "Lucas",
    age: 19,
    favFood: "Strogonoff",
    sayHello: function(){ console.log(`Hello, I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const brother = {
    name: "Luan",
    age: 9,
    favFood: "Pizza",
    sayHello: function(){ console.log(`Hello, I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

me.sayHello()
me.eat ()
brother.sayHello()
brother.eat()