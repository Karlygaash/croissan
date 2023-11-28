import './index.css'
import React, { useEffect, useState } from 'react';
import Items from './components/items';
import Header from './components/Header'
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getApiUrl from './apiConfig';

const App = () => {

  const [items, setItems]=useState([]);
  const [currentItems, setCurrentItems] = useState([])
  const [orders, setOrders] = useState([])
  const [fullItem, setFullItem] = useState(null)
  const [showFullItem, setShowFullItem] = useState(false)
  const [categories, setCategories] = useState([]);
  const apiUrl = getApiUrl();
  const customerCodeWithSlashes = window.location.pathname;
  const customerCode = customerCodeWithSlashes.replace(/^\/|\/$/g, '');

  useEffect(()=>{
    axios
      .get(`${apiUrl}/${customerCode}/products/`)
      .then(data=>{
        setItems(data.data);
      })
  }, []);

  useEffect(() => {
    getCategories();
    chooseCategory();
  }, [items]);
  
  const chooseCategory = (category='all') => {
    if(category==='all'){
      setCurrentItems(items)
      return
    }
    const copy = [...items]
    const newCurrentItems = copy.filter(el => el.category === category)
    setCurrentItems(newCurrentItems)
  }

  const getCategories = () => {
    const uniqueCategories = ['All', ...new Set(items.map((item) => item.category))]
    .map((category) => ({ key: category === 'All' ? 'all' : category, name: category === 'All' ? 'Все' : category }));
    setCategories(uniqueCategories);
  };

  const onShowItem = (item) => {
    setFullItem(item)
    setShowFullItem(!showFullItem)
  }

  const deleteOrder = (id) => {

    for(let i=0; i<orders.length; i++) {
      if(orders[i].id === id && orders[i].count > 1) {
        const copy = [...orders]
        copy[i].count -=1
        setOrders(copy)
      }   
      else if(orders[i].id === id && orders[i].count === 1){
        const copy = [...orders]
        const newArray = copy.filter(el => el.id !==id)
        setOrders(newArray);
      }
    }
  }

  const deleteAllOrders = () => {
    setOrders([])
  }

  const addToOrder = (item, e) => {

    e.stopPropagation();
    let isInOrder = false
    let saveIndex = null
    orders.forEach((el, i)=>{
      if(el.id===item.id){
        isInOrder=true
        saveIndex = i
      }
    })
    const copy = [...orders]
    if(!isInOrder) {
      const copyItemObj = {...item}
      copyItemObj.count = 1;
      copy.push(copyItemObj)
      setOrders(copy)
    }
    else if(isInOrder) {
      copy[saveIndex].count +=1
      setOrders(copy)
    }    
  }

  const checkItemInOrders = (itemId) => {
    return orders.some((orderItem) => orderItem.id === itemId); // Replace 'id' with the unique identifier in your item object
  };

  const numberWithSpaces=(x)=> {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  } 

    return (
      <div className="App">
        <ToastContainer />
        <Header deleteOrder={deleteOrder} addToOrder={addToOrder} orders={orders} deleteAllOrders={deleteAllOrders} numberWithSpaces={numberWithSpaces}/>
        <div className='main'>
          <div className='container'>
            <div className='itemList'>
              <Categories chooseCategory={chooseCategory} categories={categories}/>
              <Items
                onShowItem={onShowItem} 
                checkItemInOrders={checkItemInOrders} 
                items={currentItems} onAdd={addToOrder} 
                numberWithSpaces={numberWithSpaces}
              />  
              {showFullItem && <ShowFullItem onAdd={addToOrder} onShowItem={onShowItem} item={fullItem}/>}          
            </div>
          </div>
        </div>
      </div>
    );

}


export default App;
