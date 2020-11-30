import React from 'react';
import foods from './foods'
import {choice} from './helpers'
import Remove from './Remove'

function App() {
  let fruit = choice(foods)

  return (
      <>
    <h1>May I have {fruit}</h1>
    <h1>Here you go: {fruit}</h1>
    <h1>Delicious! May I have another?</h1>
    <Remove props={foods, fruit}/>
    <h1>I'm sorry, we're all out, we have {foods} left.</h1>
</>
  );
}

export default App;
