import { FaShoppingCart } from "react-icons/fa";
import React, {useState} from "react"
import '../index.css'
import Order from "./Order"
import axios from 'axios';
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getApiUrl from '../apiConfig'


const showOrders=(props)=>{
  const apiUrl = getApiUrl();
  const customerCodeWithSlashes = window.location.pathname;
  const customerCode = customerCodeWithSlashes.replace(/^\/|\/$/g, '');

  let summa=0
  props.orders.forEach(el=>summa += (Number.parseFloat(el.price) * el.count ) )

  const extractOrderData = () => {
    return props.orders.map(({ id, count }) => ({ 'product_id': id, 'quantity': count }));
  };

  const sendOrderToServer = () => {
    const orderData = extractOrderData();
    const orderUrl = `${apiUrl}/${customerCode}/orders/`;

    axios.post(orderUrl, orderData)
      .then(response => {
        props.deleteAllOrders()
        toast.success('Заказ успешно создан!', {
          position: 'top-right',
          autoClose: 3000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch(error => {
        console.log(error)
        toast.error('Ошибка. Заказ не создан', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  return (
    <div>
      {props.orders.map(el=>(
        <Order deleteOrder={props.deleteOrder} addToOrder={props.addToOrder} onDelete={props.onDelete} key={el.id} item={el} numberWithSpaces={props.numberWithSpaces}/>
      ))
      }
      <div className="information">
        <div className="desc__orders">
          <b className="desc__orders-title">Заказ на сумму</b>
          <b className="desc__orders-sum">{props.numberWithSpaces(summa)}&nbsp;₸</b>
        </div>
      </div>
      <button onClick={sendOrderToServer} className="summa">Заказать {props.numberWithSpaces(summa)}&nbsp;₸</button>
    </div>
  )
}

const showNothing=()=>{
  return(
    <div className="empty">
      <h2>Тут пока пусто</h2>
    </div>
  )
}

export default function Header(props){
    let [cartOpen, setCartOpen] = useState(false);
    return(
        <header className="header">
          <div className="header__container">
            <div className="header__row">
              <div></div>
              <div className="header__logo">
                Croissant Gallery
              </div>
              <div className="header__icons">
                <FaShoppingCart onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`header__icon-bag ${cartOpen &&'active'} ${props.orders.length>0 &&'active'}`}/>

                {cartOpen &&(
                    <div className="shop-cart">
                      <div className="shop-cart-header">
                        <h3>Корзина</h3>
                        <p onClick={props.deleteAllOrders}>Очистить</p>
                        <div className="fix-exit" onClick={()=>setCartOpen(cartOpen=!cartOpen)}><FiX className="exit"/></div>
                      </div>
                        {props.orders.length>0 ?
                          showOrders(props) : showNothing()
                        }
                    </div>
                )}
              </div>       
            </div>
          </div>
        </header>
    )
}