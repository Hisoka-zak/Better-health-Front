import React, { useState } from 'react';

let mystyl1={color:'red',fontSize: '14px' }

function useCounter(Value) {
 const [count, setCount] = useState(Value);

 const increment = () => {
    setCount(count + 1);
};

 return { count, increment };
}

function Counter() {
 const { count, increment } = useCounter(0);

 return (
    <div>
      <p style={{fontSize: '12px', justifyContent:'center'}}><i onClick={increment} class="bi bi-suit-heart-fill" 
      style={mystyl1}></i> {count+237}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-chat"></i>&nbsp;24</p>  
    </div>
 );
}

export default Counter;
