"use strict";
class Person {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age = 0) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
function print(name) {
    if (typeof name.firstName === "string") {
        return `${name.firstName} ${name.lastName}`;
    }
    else {
        return `${name.firstName.join(" ")} ${name.lastName}`;
    }
}
console.log(print({ firstName: ["Max", "Moritz"], lastName: "Mustermann" }));
function hello(name) {
    return {
        print: function () {
            return `Hallo, mein Name ist ${name.firstName} ${name.lastName}`;
        },
    };
}
let printFunction = hello({ firstName: "Max", lastName: "Mustermann" });
console.log(printFunction());
function printer(o) {
    console.log(o.print());
}
printer(hello({ firstName: "Max", lastName: "Mustermann" })); /*Objekte werden aufgerufen*/
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    print() {
        return `Person: ${this.firstName} ${this.lastName}`;
    }
}
printer(new Person("Max", "Mustermann"));
let x; /* undefined kein Wert wird gegeben*/
let y = null;
console.log(x); /*wahrscheinlich Fehlermeldung*/
console.log(y);
/*optionale Parameter*/
function print(firstName, lastName) {
    if (lastName !== undefined) { /*lastName undefined*/
        return `${firstName} ${lastName}`;
    }
    else {
        return `${firstName}`;
    }
}
console.log(print("Max", "Mustermann"));
console.log(print("Moritz"));
/*optionale Verkettung*/
function initials(firstName, lastName) {
    return `${firstName.charAt(0)}${lastName?.charAt(0) || ""}`; /*wenn es den lastName gibt Alternativ */
}
console.log(initials("Max", "Mustermann"));
console.log(initials("Moritz"));
class Person {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
let p = new Person("Max", "Mustermann", "25");
let { firstName, lastName } = p; /* p Objekt nehemn, in geschweifte Klammern mehrere reinschreiben*/
console.log(`${firstName} ${lastName}.`);
/*namespace*/
var Test1;
(function (Test1) {
    let x = 1;
    Test1.y = "a";
})(Test1 || (Test1 = {}));
var Test2;
(function (Test2) {
    let x = 2;
    console.log(Test1.y); /*mit punkt kann man auf vorherigen FUntionen zugreifen)*/
})(Test2 || (Test2 = {}));
//# sourceMappingURL=vorlesung.js.map