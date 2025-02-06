
export interface User {
    name: string;
    age: number;
    occupation: string;
  }
  

  export interface Admin {
    name: string;
    age: number;
    role: string;
  }
  

  export type Person = User | Admin;
  

  export const persons: Person[] = [
    {
      name: "Max Mustermann",
      age: 25,
      occupation: "chimney sweep"
    },
    {
      name: "Jane Doe",
      age: 32,
      role: "Administrator"
    },
    {
      name: "Kate Muller",
      age: 23,
      occupation: "Astronaut"
    },
    {
      name: "Bruce Willis",
      age: 64,
      role: "World Saver"
    },
  ];
  

  export function logPerson2(person: Person) {
    if ('role' in person) {
      console.log(` - ${person.name}, ${person.age}, ${person.role}`);
    } else {
      console.log(` - ${person.name}, ${person.age}, ${person.occupation}`);
    }
  }

console.log("Persons:");
persons.forEach(logPerson2);