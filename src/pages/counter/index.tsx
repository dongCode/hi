import { useStoreDispatch, useStoreSelector } from '@/utils';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from './counterSlice';
import styles from './counter.module.css';
import { useState } from 'react';

export function Counter() {
  const count = useStoreSelector(state => state.counter.value);
  const dispatch = useStoreDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() =>
            dispatch(incrementAsync(Number(incrementAmount) || 0))
          }
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
