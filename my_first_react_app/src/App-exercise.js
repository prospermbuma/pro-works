import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

// Person component
// const Person = (props) => {
//   return (
//     <>
//       <div className='person-profile'>
//         <h1>Firstname: {props.firstName}</h1>
//         <h2>Lastname: {props.lastName}</h2>
//         <h3>Age: {props.age}</h3>
//       </div>
//     </>
//   )
// }

const App = () => {
  const [counter, setCounter] = useState(0);

  // UseEffect allows us to do something on some kind of effect.
  // When we use the useEffect hook, we should make sure to set dependecy array to be empty by putting [] at the end of the useEffect callback function so as it may allow code within the useEffect hook function to only run at initial stage otherwise it will run forever.
  useEffect(() => {
    setCounter(100);
  }, []);

  // const name = "Prosper";
  // const name = null;
  // const isNameShowing = false;
  return (
    <div className="App">
      {/* <h1>Hello, {isNameShowing ? name : "Somebody"}!</h1> */}
      {/* {name ? (
        // If name exists then render fragment is just like an empty div.
        <>
          Testing
          <h2>Available Name: {name}</h2>
        </>
      ) : (
        <>
          Test
          <h2>There is no name</h2>
        </>
      )} */}

      {/* The use of props inside a component */}
      {/* <Person
        firstName={"Prosper"}
        lastName={"Mbuma"}
        age={14 + 14}
      />
      <Person
        firstName={"Victoria"}
        lastName={"John"}
        age={"30"}
      />
      <Person
        firstName={"Gladness"}
        lastName={"Nicholas"}
        age={"20"}
      /> */}

      {/* Now let's work on state.
       STATE - Is the plain javascript object used by react to represent a piece 
       of information about the component's current situation.
       It is completely managed by component itself.

      HOW DO WE CREATE STATE?
      By firstly import useState hook from react.
      */}

      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter((prevCount) => prevCount - 2)}>-2</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter((prevCount) => prevCount + 2)}>+2</button>

    </div>
  );
}

export default App;
