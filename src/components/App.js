
import React from "react";
import './../styles/App.css';


const App = () => {
const[input, setInput] = useState('');  
  const onInput= (e)=>{
  const{value}=e.target;
    setInput(value);
}
const onClear()=>{
  setInput('');
}
  return (
    <div>
        {/* Do not remove the main div */}
    <p>Enter your Name:</p>
    <input value={input} onChange={input}/>
     {!!input.length&&<p>Hello {input}!</p>}
    <button onClick={onClear}>Clear</button>
    </div>
  )
}

export default App
