import { User } from './models/User';

const user = new User({ name: 'newnew', age: 1111 });

// user.set({ name: 'ddd', age: 333 });
// user.save();

// user.events.on('change', () => {
//   user.set({ id: 1, name: 'changed!' });
//   user.save();
//   console.log('!!!');
// });

// user.events.trigger('change');
