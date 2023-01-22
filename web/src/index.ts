import { User } from './models/User';

const user = new User({ name: 'new', age: 11 });

user.set({ name: 'ddd', age: 333 });
user.save();
