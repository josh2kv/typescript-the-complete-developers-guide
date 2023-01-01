import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([10000, 3, -5, 0]);
numbers.sort();
console.log(numbers.data);

const characters = new CharactersCollection('Xa4!D');
characters.sort();
console.log(characters.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
