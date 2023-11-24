import './index.css'
import React, { useEffect, useState } from 'react';
import Items from './components/items';
import Header from './components/Header'
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';
import axios from 'axios';

const src="https://655d92919f1e1093c5997fda.mockapi.io/api/v1/products/"

const App = () => {

  const [items, setItems]=useState([]);
  const [currentItems, setCurrentItems] = useState([])
  const [orders, setOrders] = useState([])
  const [fullItem, setFullItem] = useState(null)
  const [showFullItem, setShowFullItem] = useState(false)

  useEffect(()=>{
    axios
      .get(src)
      .then(data=>{
        setItems(data.data);
      })
    chooseCategory();
  }, []);
  
  const chooseCategory = (category='all') => {
    if(category==='all'){
      setCurrentItems(items)
      return
    }
    const copy = [...items]
    const newCurrentItems = copy.filter(el => el.category === category)
    setCurrentItems(newCurrentItems)
  }
  // const [items, setItems] = useState([{
  //       id: 1,
  //       title: 'Ханский плов с казы 1 кг',
  //       img: 'plovskazy.jpg',
  //       weight: '1000 г',
  //       describe: 'Необыкновенный темный пряный плов с насыщенным вкусом специй из сорта риса лазер. Завершает блюдо ароматы чеснока и зиры.',
  //       category: 'plov',
  //       price: 6590
  //     },
  //     {
  //       id: 2,
  //       title: 'Праздничный плов 1 кг',
  //       img: 'plov2.jpg',
  //       weight: '1000 г',
  //       describe: 'Необыкновенный темный пряный плов с насыщенным вкусом специй из сорта риса лазер. Завершает блюдо ароматы чеснока и зиры.',
  //       category: 'plov',
  //       price: 4990,
  //     },
  //     {
  //       id: 3,
  //       title: 'Чайханский плов 1кг',
  //       img: 'plov3.jpg',
  //       weight: '1000 г',
  //       describe: 'Необыкновенный темный пряный плов с насыщенным вкусом специй из сорта риса лазер. Завершает блюдо ароматы чеснока и зиры.',
  //       category: 'firstfood',
  //       price: 4990
  //     },
  //     {
  //       id: 4,
  //       title: 'Праздничный плов 1 порц',
  //       img: 'plovskazy.jpg',
  //       weight: '450 г',
  //       describe: 'Необыкновенный темный пряный плов с насыщенным вкусом специй из сорта риса лазер. Завершает блюдо ароматы чеснока и зиры.',
  //       category: 'secondfood',
  //       price: 2790
  //     },
  //     {
  //       id: 5,
  //       title: 'Чайханский плов 1 порц',
  //       img: 'plov2.jpg',
  //       weight: '450 г',
  //       describe: 'Необыкновенный темный пряный плов с насыщенным вкусом специй из сорта риса лазер. Завершает блюдо ароматы чеснока и зиры.',
  //       category: 'salaty',
  //       price: 2790
  //     },
  //     {
  //       id: 6,
  //       title: 'Ханский плов с казы 1 порц',
  //       img: 'plov3.jpg',
  //       weight: '450 г',
  //       describe: 'Необыкновенный темный пряный плов с насыщенным вкусом специй из сорта риса лазер. Завершает блюдо ароматы чеснока и зиры.',
  //       category: 'zakuski',
  //       price: 3790
  //     },
  //     {
  //       id: 7,
  //       title: 'Мясное ассорти доставка',
  //       img: 'nakompaniyu.jpg',
  //       weight: '2841 г',
  //       describe: 'Необыкновенный темный пряный плов с насыщенным вкусом специй из сорта риса лазер. Завершает блюдо ароматы чеснока и зиры.',
  //       category: 'napitki',
  //       price: 37900
  //     },
  //     {
  //       id: 8,
  //       title: 'Куриные ассорти доставка',
  //       img: 'nakompaniyu2.jpg',
  //       weight: '3032 г',
  //       describe: 'Необыкновенный темный пряный плов с насыщенным вкусом специй из сорта риса лазер. Завершает блюдо ароматы чеснока и зиры.',
  //       category: 'deserty',
  //       price: 19900
  //     },
  //     {
  //       id: 9,
  //       title: 'Куырдак',
  //       img: 'nakompaniyu3.jpg',
  //       weight: '3274 г',
  //       describe: 'Необыкновенный темный пряный плов с насыщенным вкусом специй из сорта риса лазер. Завершает блюдо ароматы чеснока и зиры.',
  //       category: 'plov',
  //       price: 20490
  //     },
  //     {
  //       id: 10,
  //       title: 'Дапанджи с тестом',
  //       img: 'nakompaniyu.jpg',
  //       weight: '3274 г',
  //       describe: 'Необыкновенный темный пряный плов с насыщенным вкусом специй из сорта риса лазер. Завершает блюдо ароматы чеснока и зиры.',
  //       category: 'firstfood',
  //       price: 20290
  //     },
  //     {
  //       id: 11,
  //       title: 'Сырне из говядины',
  //       img: 'nakompaniyu2.jpg',
  //       weight: '3274 г',
  //       describe: 'Необыкновенный темный пряный плов с насыщенным вкусом специй из сорта риса лазер.',
  //       category: 'secondfood',
  //       price: 21390
  //     },
  //     {
  //       id: 12,
  //       title: 'Сырне из баранины',
  //       img: 'nakompaniyu3.jpg',
  //       weight: '3274 г',
  //       describe: 'Необыкновенный темный пряный плов с насыщенным вкусом специй из сорта риса лазер.',
  //       category: 'salaty',
  //       price: 22490
  //     },
  // ]
  // )

  const onShowItem = (item) => {
    setFullItem(item)
    setShowFullItem(!showFullItem)
  }

  // useEffect(() => {
  //   chooseCategory()
  // },[])

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

  const numberWithSpaces=(x)=> {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  } 

    return (
      <div className="App">
        <Header deleteOrder={deleteOrder} addToOrder={addToOrder} orders={orders} deleteAllOrders={deleteAllOrders} numberWithSpaces={numberWithSpaces}/>
        <div className='main'>
          <div className='container'>
            <div className='itemList'>
              <Categories chooseCategory={chooseCategory}/>
              <Items  onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} numberWithSpaces={numberWithSpaces}/>  
              {showFullItem && <ShowFullItem onAdd={addToOrder} onShowItem={onShowItem} item={fullItem}/>}          
            </div>
          </div>
        </div>
      </div>
    );

}


export default App;
