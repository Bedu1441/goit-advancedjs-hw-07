class Student {
  constructor(
    public name: string,
    public age: number,
    public grade: string
  ) {}
}

const student = new Student('John', 20, 'A');

console.log(student);

export {};