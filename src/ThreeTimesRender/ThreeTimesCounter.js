import { useState } from "react";

// export default function Counter() {
//     const [number, setNumber] = useState(0);
  
//     return (
//       <>
//         <h1>{number}</h1>
//         <button onClick={() => {
//           setNumber(number + 1); //number = 0  - need to update to 0+1=1
//           setNumber(number + 1); //number = 0  - need to update to 0+1=1
//           setNumber(number + 1); //number = 0  - need to update to 0+1=1
//         }}>+3</button>
//       </>
//     )
//   }



  export default function Counter() {
    const [number, setNumber] = useState(0);
    console.log("rendering Counter", number)
    let n1 = number + 1
    n1 = n1 + 1
    n1 = n1 + 1
  
    return (
      <>
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(n => n + 1); // number = 0 | get current number, add 1 to it
          setNumber(n => n + 2); // number = 0  | get current number, add 1 to it
          setNumber(n => n + 3); // number = 0  | get current number, add 1 to it
          console.log(number)
        }}>+3</button>
      </>
    )
  }

  ///1
  // number = 1
  // number = 1
    // number = 1

  //2
  // go check the value of number => numb + 1 | 0+1
  //2