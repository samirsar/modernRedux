import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement} from '../reduxFiles/reducers';
export default function Home() {
const count = useSelector((state) => state.counter.value);
  console.log(count);
  const dispatch = useDispatch();


  return (
    <div>
        <h1>{count}</h1>
        
      <button onClick={() => dispatch(increment(10))} >Add to cart</button>
      <button  onClick={() => dispatch(decrement(5))}>decrement</button>
    </div>
  )

}
