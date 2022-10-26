import {counterActions} from '../store/counter-slice';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
 const counter = useSelector(state => state.counter.counter);
 const showCounter = useSelector(state => state.counter.showCounter);
 const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };


  const incrementHandler = () =>{
    dispatch(counterActions.increment());
  }
  const decrementHandler = () =>{
    dispatch(counterActions.decrement());
  }
  const increaseHandler = () =>{
    dispatch(counterActions.increase(5));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler} disabled = {!showCounter}>Increment</button>
        <button onClick={increaseHandler} disabled = {!showCounter}>increase</button>
        <button onClick={decrementHandler} disabled = {!showCounter}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
