import fruits from './foods';
import {choice, remove} from './helpers';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let remaining = remove(fruit, fruits);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );