import logo from './logo.svg'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {addCashAction, getCashAction} from './store/cashReducer'
import {addCustomerAction, removeCustomerAction} from './store/customerReducer'
import {fetchCustomers} from './asincActions/customers'

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
  const addManyCustomers = () => {
    dispatch(fetchCustomers())
  }
  return (
    <div className="container">
      <h1 className="h1">Личный кабинет</h1>
      <div className="content">
        <div className="cash block">
          <div className="block__inner">
            <h2 className="cash__h2 h2">Баланс на счёте</h2>
            <div className="cash__value">{cash} ₽</div>
            <button className="cash__action btn" onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
            <button className="cash__action btn" onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
          </div>          
        </div>
        <div className="customers block">
          <h2 className="customers__h2 h2">Клиенты</h2>
          <div className="block__inner">
            <button className="customers__action btn" onClick={() => addCustomer(prompt())}>Добавить клиента</button>
            <button className="customers__action btn" onClick={() => addManyCustomers()}>Получить клиентов из базы</button>
            {customers.length > 0 ?
              <ul className="customers__list">
                {customers.map(customer => 
                  <li className="customers__item" key={customer.id} onClick={() => removeCustomer(customer.id)}>{customer.name}</li>
                )}
              </ul>
              :
              <div className="customers__warning">Клиенты отсутствуют!</div>
            }   
          </div>
        </div>
      </div>
      
    </div> 
  )
}

export default App;
