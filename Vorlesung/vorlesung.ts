class Person  {
    constructor(
        private firstName: string,
        private lastName: string,
        private age = 0
        ) {}
    
        interface Name {
            firstName: string | string[];
            lastName: string;
          }
          
          function print(name: Name): string {
            if (typeof name.firstName === "string") {
              return `${name.firstName} ${name.lastName}`;
            } else {
              return `${name.firstName.join(" ")} ${name.lastName}`;
            }
          }
          
          console.log(print({ firstName: ["Max", "Moritz"], lastName: "Mustermann" }));




          /* Typen eine Namen geben, Beispiel für Fortgeschrittene*/
          interface Name {
            firstName: string;
            lastName: string;
          }
          
          function hello(name: Name): PrintObject {
            return {
              print: function () {
                return `Hallo, mein Name ist ${name.firstName} ${name.lastName}`;
              },
            };
          }
          
          let printFunction = hello({ firstName: "Max", lastName: "Mustermann" });
          console.log(printFunction());
          
          interface PrintObject {
            print(): void;
          }
          
          function printer(o: PrintObject): void { /*die print Funktion wird aufgerufen und die Methode Hello die Objekte werden zurück gegeben*/
            console.log(o.print());
          }
          
          printer(hello({ firstName: "Max", lastName: "Mustermann" }));/*Objekte werden aufgerufen*/
          
          class Person implements Name, PrintObject { /*implementiert firstName, lastName*/
            constructor(private firstName: string, private lastName: string) {}
            print(): string {
              return `Person: ${this.firstName} ${this.lastName}`;
            }
          }
          
          printer(new Person("Max", "Mustermann"));




let x: number; /* undefined kein Wert wird gegeben*/
let y: string = null;

console.log(x);/*wahrscheinlich Fehlermeldung*/
console.log(y);



/*optionale Parameter*/
function print(firstName: string, lastName?/*beide ANgaben als auch nur für eine Angabe*/: string): string {
    if (lastName !== undefined) { /*lastName undefined*/
      return `${firstName} ${lastName}`;
    } else {
      return `${firstName}`;
    }
  }
  
  console.log(print("Max", "Mustermann"));
  console.log(print("Moritz"));


  
  /*optionale Verkettung*/
  function initials(firstName: string, lastName?: string): string {
    return `${firstName.charAt(0)}${lastName?.charAt(0) || ""}`;/*wenn es den lastName gibt Alternativ */
  }
  
  console.log(initials("Max", "Mustermann"));
  console.log(initials("Moritz"));


  /*Destrukturierung*/
  interface Name {
    firstName: string;
    lastName: string;
  }
  
  class Person {
    constructor(
      public firstName: string,
      public lastName: string,
      public age: number
    ) {}
  }
  
  let p: Person = new Person("Max", "Mustermann", "25");
  let { firstName, lastName }: Name = p;/* p Objekt nehemn, in geschweifte Klammern mehrere reinschreiben*/
  console.log(`${firstName} ${lastName}.`);



  /*namespace*/
  namespace Test1 {
    let x: number = 1;
    export let y: string = "a";
  }
  
  namespace Test2 {
    let x: number = 2;
    console.log(Test1.y);/*mit punkt kann man auf vorherigen FUntionen zugreifen)*/
  }
  
