import logo from './logo.svg'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {addCashAction, getCashAction} from './store/cashReducer'
import {addCustomerAction, removeCustomerAction} from './store/customerReducer'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(store => store.cash.cash)
  const customers = useSelector(store => store.customers.customers)
  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }
  const getCash = (cash) => {
    dispatch(getCashAction(cash))
  }
  const addCustomer = (name) => {
    const customer = {
      id: Date.now(),
      name
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id))
  }
  return (
    <div>
      <h1>Баланс: {cash}</h1>
      <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
      <button onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
      <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
    
      {customers.length > 0 ?
        <div>
          {customers.map(customer => 
            <div key={customer.id} onClick={() => removeCustomer(customer.id)}>{customer.name}</div>
          )}
        </div>
        :
        <div>Клиенты отсутствуют!</div>
      }   
    </div> 
  )
}

export default App;
