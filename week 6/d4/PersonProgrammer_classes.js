

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    print(){
        console.log(`(${this.name},${this.surname})`);
    }
}
 let p = new Person('Marko','Markovic');
 p.print();



 class Programmer extends Person {
    constructor(name, surname, language) {
        super(name, surname);
        this.language = language;
    }

    print() {
        //console.log('Color point');
        super.print();
        console.log(...this.language);
    }
 }

 var pp = new Programmer('Nenad', 'Nenadovic', a = ['c','c++']);
 pp.print();
 //pp.description();