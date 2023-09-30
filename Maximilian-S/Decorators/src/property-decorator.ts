function InstancePropertyDecorator(target: any, name: string) {
  console.log({ target });
  console.log({ name });
}

class Person1 {
  @InstancePropertyDecorator
  static lastName = "abc";

  @InstancePropertyDecorator
  name: string;
  private _age: number = 0;
  constructor(name: string) {
    this.name = name;
  }
  set age(value: number) {
    this._age = value;
  }
  get age() {
    return this._age;
  }
  getNextAge() {
    return this._age + 1;
  }
  static getDefaultAge() {
    // Can't access this._age from a static method
    return 0;
  }
}

const per1 = new Person1("abc");
