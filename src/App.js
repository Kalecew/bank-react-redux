import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(store => store.cash)
  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }
  return (
    <div>
      <h1>{cash}</h1>
      <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
      <button onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
    </div>    
  )
}

export default App;
