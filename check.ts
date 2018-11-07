import { from } from "rxjs";
import { Observable, Observer } from "rxjs";

class Person {
  constructor(public name: string, public age: number) {}
}

const people: Person[] = [
  { name: "Sue", age: 25 },
  { name: "Joe", age: 30 },
  { name: "Frank", age: 25 },
  { name: "Sarah", age: 35 }
];
//emit each person
const source = from(people);
source.subscribe(console.log);

let o: Observable<Person> = Observable.create((observer: Observer<Person>) => {
  people.forEach(p => {observer.next(p)});
  observer.complete();
});

o.subscribe(console.log);