// named exports
// import {getUserName, address} from './modules';

// default exports
import userCard, {address, getUserName} from './modules';

// all together
// import * as all from './modules';


console.log("hello node", address, getUserName);
// --------------------------------




import Person from './classes';
import Point from './Point';

let p1 = new Point(5,6);

console.log('affiche ',p1.toString());
// console.log(p.languages)

// // ----------------------------------
// p.setName = 'Medhat Dawoud';
// document.write('Name     =>', p.getName, '<br></br>');
// document.write('Job      =>', p.getJob());
// document.write('Age      =>', p.getAge());
// document.write('Speaking =>', p.languages);

// static
// document.write('weight   =>', Person.getWeight(), 'kg');
// document.write('height   =>', Person.getHeight(), 'cm');

// console.log('Name     =>', p.getName);
// console.log('Job      =>', p.getJob());
// console.log('Age      =>', p.getAge());
// console.log('Speaking =>', p.languages);

// static
// console.log('weight   =>', Person.getWeight(), 'kg');
// console.log('height   =>', Person.getHeight(), 'cm');