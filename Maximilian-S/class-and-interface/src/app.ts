// Code goes here!

class Navi {
  readonly name: string;
  static hey="Navi";

  constructor() {
    this.name = "Navi";
    console.log(Navi.hey);
  }

  
}

// constructor shorthand
// class Department {
//   constructor(public name: string, private age: number) {}
// }

// let b = new Department("Navi", 34);
// console.log(b.name);

// let a = new Navi();
// console.log(a.name);



// class Boy{
//   static  gender="Male";
//   name:string;
  

//   constructor(){
//     this.name="Navi";
//     Boy.gender="yo";
//   }

//   static isBoy(){
//     this.name="boy"
//     console.log("hello");
//     Boy.gender="hello";
//   }
// }

// console.log(Boy.gender);




interface Animal{

}

interface Human{
  gender:string;
  age:number;
}


type Muman={
  gender:string;
  age:number;
}


interface Boy extends Human,Animal{
  height:number
}




abstract class Abc implements Navi{
  abstract name:string;

}



// function abc(name?:string,age?:number):void{
//   console.log("hello "+ name);
// }

// abc();









type A= {
  name:string;
}
type B={
  age:number;
}


let navi: A | B;
navi={name:"Navi"}
navi={age:23}
navi={name:"Navi",age:34}