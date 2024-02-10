import { useState } from 'react'



function Counter(){
    let [count, setCount] = useState(0);

  const increaseValue = ()=>{
    if(count >= 0 && count <= 19){
      setCount(count + 1);
    }
  }

  const decreaseValue = () => {
    if(count >= 1 && count <= 20 ){
      
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Here we can only increase the value till 20</h1>
      <h1>And we cannot decrease the value after 0th onwards</h1>
      <h3>current value is: {count}</h3>
      <button onClick={increaseValue}>Add value: {count}</button>
      <br />
      <br />
      <button onClick={decreaseValue}>subtract value: {count}</button>
    </>
  )
}



export default Counter;